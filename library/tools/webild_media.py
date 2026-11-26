"""
webild_media.py — Replace a Webild template's remote media with local, neutral placeholders.

Every https://storage.googleapis.com/webild/<path> the template uses (requested during capture, written
literally in its files, and the -800/-1600 siblings its responsive helper derives) becomes
assets/media/<path> with the SAME file name, format and pixel size, so dynamic URL building, srcset and
WebGL textures keep working:
  - images: flat average color + diagonals + size label; transparent cut-outs keep their silhouette
  - videos: animated neutral gradient with the same resolution, fps and duration
  - lighting maps (.exr/.hdr/.ktx2) and UI sounds: generic, copied as is
  - .glb models: a neutral rounded block (brand models such as real cars must not ship); models listed
    in GENERIC_MODELS (plain objects, no brand) are kept as downloaded
Then rewrites the remote prefix to the local folder in every .js/.html/.css file.

Usage: python -I tools/webild_media.py <templateDir> <capture.external.json>
Requires: Pillow, ffmpeg/ffprobe on PATH.
"""
import io
import json
import re
import struct
import subprocess
import sys
import tempfile
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageStat

PREFIX = 'https://storage.googleapis.com/webild/'
URL_PATTERN = re.compile(r'https://storage\.googleapis\.com/webild/[^\s"\'`)\\]+')
IMAGE_EXTENSIONS = {'.webp': 'WEBP', '.png': 'PNG', '.jpg': 'JPEG', '.jpeg': 'JPEG', '.gif': 'GIF', '.avif': 'AVIF'}
VIDEO_EXTENSIONS = {'.mp4', '.webm', '.mov'}
# Generic technical assets with no brand content (3D studio lighting maps, UI click sounds): copied as is.
TECHNICAL_EXTENSIONS = {'.exr', '.hdr', '.ktx2', '.m4a', '.mp3', '.wav', '.ogg'}
# Custom fonts are part of the design: kept, but their licence must be checked (some are commercial).
FONT_EXTENSIONS = {'.otf', '.ttf', '.woff', '.woff2'}
# Shader/material textures with no brand (noise, matcaps, voronoi, normal maps, leather/grass/paper): kept as is,
# a flat placeholder would break the effect. Maps derived from photos of people (person-*, hero-alpha) are NOT here.
TECHNICAL_IMAGE = re.compile(r'^(noise|droplet_matcap|matcap-\d|normal-edge|voronoi|glass-alpha|helmet-mask|tex-(leather|grass|light-0\d|paper-grain|pebble))', re.IGNORECASE)
# Plain objects with no brand on their geometry or textures (checked 2026-11-25). Real cars, helmets and
# race cars (911, 918, sf26, helmet) stay as neutral blocks.
GENERIC_MODELS = {'default/models/matcha-latte-cup/model.d41d0070a5a9.glb', 'default/models/can/model.f6f3982ffc0d.glb',
                  'default/models/bust-marble/model.f0fc871204b2.glb', 'default/models/ring-diamond/model.84fab1a6de5f.glb',
                  'default/models/cube-glass/model.303a71eab394.glb', 'default/models/watch/model.83f47b74d9ca.glb'}
GENERIC_MODEL_PREFIXES = ('default/templates/prebiotic-soda/models/',)  # can, water, paper and fruit


def download(url):
    """Return the bytes at url (30 s timeout); raises on HTTP errors."""
    with urllib.request.urlopen(url, timeout=30) as response:
        return response.read()


def image_placeholder(data, extension, label):
    """Build a placeholder image with the original's size, average color and alpha silhouette."""
    with Image.open(io.BytesIO(data)) as original:
        original = original.convert('RGBA')
    alpha = original.getchannel('A')
    has_transparency = alpha.getextrema()[0] < 250
    mask = alpha.point(lambda value: 255 if value > 127 else 0) if has_transparency else None
    rgb = tuple(int(channel) for channel in ImageStat.Stat(original.convert('RGB'), mask).mean)
    width, height = original.size
    canvas = Image.new('RGBA', original.size, rgb + (255,))
    draw = ImageDraw.Draw(canvas)
    luminance = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]
    ink = (0, 0, 0, 40) if luminance > 140 else (255, 255, 255, 40)
    stroke = max(1, min(width, height) // 400)
    draw.line([(0, 0), (width, height)], fill=ink, width=stroke)
    draw.line([(width, 0), (0, height)], fill=ink, width=stroke)
    font = ImageFont.load_default(size=max(10, min(width, height) // 28))
    draw.text((width / 2, height * 0.9), label, fill=ink[:3] + (110,), font=font, anchor='mm')
    if mask is not None:
        canvas.putalpha(mask)
    output = io.BytesIO()
    format_name = IMAGE_EXTENSIONS[extension]
    if format_name == 'JPEG':
        canvas = canvas.convert('RGB')
    canvas.save(output, format_name, **({'quality': 70} if format_name != 'PNG' else {}))
    return output.getvalue()


def svg_placeholder(data):
    """Neutral SVG with the original's viewBox/size: a soft circle for icons, a crossed frame otherwise."""
    text = data.decode('utf-8', errors='ignore')
    view_box = re.search(r'viewBox="([\d.\s-]+)"', text)
    numbers = [float(value) for value in view_box.group(1).split()] if view_box else None
    width_attribute = re.search(r'<svg[^>]*\swidth="([\d.]+)', text)
    height_attribute = re.search(r'<svg[^>]*\sheight="([\d.]+)', text)
    if not numbers:
        numbers = [0, 0, float(width_attribute.group(1)) if width_attribute else 24, float(height_attribute.group(1)) if height_attribute else 24]
    x, y, width, height = numbers
    size = f' width="{width_attribute.group(1)}" height="{height_attribute.group(1)}"' if width_attribute and height_attribute else ''
    if max(width, height) <= 64:
        shape = f'<circle cx="{x + width / 2}" cy="{y + height / 2}" r="{min(width, height) * 0.4}" fill="currentColor" fill-opacity="0.35"/>'
    else:
        shape = (f'<rect x="{x}" y="{y}" width="{width}" height="{height}" fill="#9a9a9a" fill-opacity="0.35"/>'
                 f'<path d="M{x} {y}L{x + width} {y + height}M{x + width} {y}L{x} {y + height}" stroke="#000" stroke-opacity="0.15"/>')
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{x} {y} {width} {height}"{size}>{shape}</svg>\n'.encode()


def video_placeholder(data, extension):
    """Return an animated gradient video with the original's resolution, fps and duration."""
    with tempfile.TemporaryDirectory() as folder:
        source = Path(folder) / f'in{extension}'
        target = Path(folder) / f'out{extension}'
        source.write_bytes(data)
        probe = subprocess.run(['ffprobe', '-v', 'error', '-select_streams', 'v:0', '-show_entries',
                                'stream=width,height,r_frame_rate:format=duration', '-of', 'default=nw=1', str(source)],
                               capture_output=True, text=True, check=True).stdout
        info = dict(line.split('=', 1) for line in probe.strip().splitlines())
        gradient = (f"gradients=s={info['width']}x{info['height']}:r={info['r_frame_rate']}:d={info['duration']}"
                    ":c0=0x3a3a3a:c1=0x9a9a9a:c2=0x5c5c5c:speed=0.02:type=linear")
        codec = ['-c:v', 'libvpx-vp9', '-b:v', '0', '-crf', '45'] if extension == '.webm' else \
                ['-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '30', '-movflags', '+faststart']
        subprocess.run(['ffmpeg', '-v', 'error', '-y', '-f', 'lavfi', '-i', gradient, *codec, '-g', '5', '-an', str(target)],
                       check=True)
        return target.read_bytes()


def block_model():
    """Return a minimal binary glTF (GLB): one neutral grey box 4 x 1.2 x 1.8 m, centred on the ground."""
    half = (2.0, 0.6, 0.9)
    faces = [((1, 0, 0), 0), ((-1, 0, 0), 0), ((0, 1, 0), 1), ((0, -1, 0), 1), ((0, 0, 1), 2), ((0, 0, -1), 2)]
    positions, normals, indices = [], [], []
    for normal, axis in faces:
        u_axis, v_axis = [index for index in range(3) if index != axis and normal[index] == 0][:2]
        normal_axis = next(index for index in range(3) if normal[index] != 0)
        base = len(positions)
        for u_sign, v_sign in ((-1, -1), (1, -1), (1, 1), (-1, 1)):
            point = [0.0, 0.0, 0.0]
            point[normal_axis] = half[normal_axis] * normal[normal_axis]
            point[u_axis] = half[u_axis] * u_sign
            point[v_axis] = half[v_axis] * v_sign
            point[1] += half[1]
            positions.append(point)
            normals.append(list(normal))
        indices += [base, base + 1, base + 2, base, base + 2, base + 3]  # winding irrelevant: material is double-sided
    position_bytes = b''.join(struct.pack('<3f', *point) for point in positions)
    normal_bytes = b''.join(struct.pack('<3f', *normal) for normal in normals)
    index_bytes = b''.join(struct.pack('<H', index) for index in indices)
    index_bytes += b'\x00' * (-len(index_bytes) % 4)
    binary = position_bytes + normal_bytes + index_bytes
    document = {
        'asset': {'version': '2.0', 'generator': 'web-templates placeholder'},
        'scene': 0, 'scenes': [{'nodes': [0]}], 'nodes': [{'mesh': 0, 'name': 'Placeholder'}],
        'meshes': [{'primitives': [{'attributes': {'POSITION': 0, 'NORMAL': 1}, 'indices': 2, 'material': 0}]}],
        'materials': [{'pbrMetallicRoughness': {'baseColorFactor': [0.6, 0.6, 0.6, 1], 'metallicFactor': 0.2, 'roughnessFactor': 0.6},
                       'doubleSided': True}],
        'buffers': [{'byteLength': len(binary)}],
        'bufferViews': [{'buffer': 0, 'byteOffset': 0, 'byteLength': len(position_bytes), 'target': 34962},
                        {'buffer': 0, 'byteOffset': len(position_bytes), 'byteLength': len(normal_bytes), 'target': 34962},
                        {'buffer': 0, 'byteOffset': len(position_bytes) + len(normal_bytes), 'byteLength': len(indices) * 2, 'target': 34963}],
        'accessors': [
            {'bufferView': 0, 'componentType': 5126, 'count': len(positions), 'type': 'VEC3',
             'min': [-half[0], 0, -half[2]], 'max': [half[0], 2 * half[1], half[2]]},
            {'bufferView': 1, 'componentType': 5126, 'count': len(normals), 'type': 'VEC3'},
            {'bufferView': 2, 'componentType': 5123, 'count': len(indices), 'type': 'SCALAR'}],
    }
    json_bytes = json.dumps(document, separators=(',', ':')).encode()
    json_bytes += b' ' * (-len(json_bytes) % 4)
    chunks = struct.pack('<I4s', len(json_bytes), b'JSON') + json_bytes + struct.pack('<I4s', len(binary), b'BIN\x00') + binary
    return struct.pack('<4sII', b'glTF', 2, 12 + len(chunks)) + chunks


def collect_urls(template_dir, external_path):
    """Remote media URLs the template uses: captured requests, literals in files, and -800/-1600 siblings."""
    urls = set()
    report = json.loads(Path(external_path).read_text(encoding='utf-8'))
    for entry in report['external']:
        if entry['url'].startswith(PREFIX) and entry['status'] in (200, 206):
            urls.add(entry['url'].split('?')[0])
    for file in template_dir.rglob('*'):
        if file.suffix in ('.js', '.html', '.css'):
            urls.update(match for match in URL_PATTERN.findall(file.read_text(encoding='utf-8', errors='ignore'))
                        if '${' not in match and re.search(r'/[^/]+\.[a-z0-9]{2,4}$', match))  # skip folder bases
    for url in list(urls):
        sibling = re.match(r'^(.+)-(1600|800)\.webp$', url)
        if sibling:
            urls.add(f"{sibling.group(1)}-{'800' if sibling.group(2) == '1600' else '1600'}.webp")
    return sorted(urls)


def local_prefixes(slug):
    """Remote prefix -> local path, longest first. The template's own folder is flattened so its original
    slug (which may be a brand or a person) does not survive in file paths."""
    return [(f'{PREFIX}default/templates/{slug}/', ''), (f'{PREFIX}default/', ''), (PREFIX, '')]


def to_local(url, slug):
    """Map a remote media URL to its path relative to assets/media/."""
    for prefix, replacement in local_prefixes(slug):
        if url.startswith(prefix):
            return replacement + url[len(prefix):]
    raise ValueError(url)


def main():
    """Create placeholders for one template and point its files at them."""
    template_dir = Path(sys.argv[1])
    slug = json.loads(Path(sys.argv[2]).read_text(encoding='utf-8'))['slug']
    media_dir = template_dir / 'assets' / 'media'

    def process(url):
        """Download one remote file and write its placeholder. Returns the kind written."""
        relative = to_local(url, slug)
        target = media_dir / relative
        extension = target.suffix.lower()
        try:
            data = download(url)
        except Exception as error:  # a derived -800/-1600 sibling may not exist remotely: skip it
            if re.search(r'-(800|1600)\.webp$', url):
                return 'missing-sibling'
            raise RuntimeError(f'{url}: {error}') from error
        target.parent.mkdir(parents=True, exist_ok=True)
        if extension in IMAGE_EXTENSIONS and TECHNICAL_IMAGE.match(target.name):
            target.write_bytes(data)
            return 'technical-kept'
        if extension in IMAGE_EXTENSIONS:
            target.write_bytes(image_placeholder(data, extension, Path(relative).stem))
            return 'image'
        if extension == '.svg':
            target.write_bytes(svg_placeholder(data))
            return 'image'
        if extension in VIDEO_EXTENSIONS:
            target.write_bytes(video_placeholder(data, extension))
            return 'video'
        if extension in FONT_EXTENSIONS:
            target.write_bytes(data)
            return 'font-kept'
        if extension in TECHNICAL_EXTENSIONS:
            target.write_bytes(data)
            return 'technical-kept'
        if extension == '.glb':
            keep = url[len(PREFIX):] in GENERIC_MODELS or url[len(PREFIX):].startswith(GENERIC_MODEL_PREFIXES)
            target.write_bytes(data if keep else block_model())
            return 'model-kept' if keep else 'model-placeholder'
        raise RuntimeError(f'{url}: unsupported media type {extension}')

    counts = {'image': 0, 'video': 0, 'model-placeholder': 0, 'model-kept': 0, 'technical-kept': 0, 'font-kept': 0, 'missing-sibling': 0}
    with ThreadPoolExecutor(max_workers=8) as pool:  # downloads dominate; errors re-raise on .result()
        for kind in pool.map(process, collect_urls(template_dir, sys.argv[2])):
            counts[kind] += 1
    rewritten = 0
    for file in template_dir.rglob('*'):
        if file.suffix not in ('.js', '.html', '.css') or not file.is_file():
            continue
        text = file.read_text(encoding='utf-8', errors='surrogateescape')
        updated = text
        for prefix, replacement in local_prefixes(slug):
            updated = updated.replace(prefix, ('media/' if file.suffix == '.css' else 'assets/media/') + replacement)
        # A base written without trailing slash (`${base}/file`) for the flattened own folder → the media root.
        updated = re.sub(rf'((?:assets/)?media)/templates/{re.escape(slug)}(?=[`\'"])', r'\1', updated)
        if updated != text:
            file.write_text(updated, encoding='utf-8', errors='surrogateescape', newline='')
            rewritten += 1
    print(f'{template_dir.name}: {counts}, {rewritten} files rewritten')


if __name__ == '__main__':
    main()
