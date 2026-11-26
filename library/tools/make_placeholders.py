"""
make_placeholders.py — Replace a template's brand photos and videos with neutral placeholders.

For every raster image under <template>/assets/img it writes an SVG of the same intrinsic size,
filled with the original's average color (so the page keeps its tonal composition) and labelled
with its dimensions, then deletes the original and rewrites references (.webp -> .svg) in the
template's HTML/CSS/JS. Every .mp4 under <template>/assets/video is replaced by a generated
animated gradient of the same resolution, frame rate and duration (scroll-scrubbed heroes keep working).

Usage:  python -I tools/make_placeholders.py templates/<id> [templates/<id> ...]
Requires: Pillow, ffmpeg/ffprobe on PATH.
"""
import subprocess
import sys
from pathlib import Path
from PIL import Image, ImageStat

RASTER_EXTENSIONS = {'.webp', '.png', '.jpg', '.jpeg', '.avif'}
TEXT_EXTENSIONS = {'.html', '.css', '.js'}

SVG_TEMPLATE = """<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" role="img" aria-label="Placeholder {w}x{h}">
  <rect width="{w}" height="{h}" fill="{fill}"/>
  <path d="M0 0L{w} {h}M{w} 0L0 {h}" stroke="{ink}" stroke-opacity="0.12" stroke-width="{stroke}"/>
  <rect x="{inset}" y="{inset}" width="{iw}" height="{ih}" fill="none" stroke="{ink}" stroke-opacity="0.18" stroke-width="{stroke}"/>
  <text x="50%" y="90%" fill="{ink}" fill-opacity="0.4" font-family="system-ui, sans-serif" font-size="{font}" text-anchor="middle" dominant-baseline="middle">{label}</text>
</svg>
"""


def average_color(image_path):
    """Return the image's average color as (r, g, b)."""
    with Image.open(image_path) as image:
        return tuple(int(channel) for channel in ImageStat.Stat(image.convert('RGB')).mean)


def build_svg(width, height, rgb, label):
    """Build the placeholder SVG markup for a width x height image with the given base color."""
    luminance = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]
    ink = '#000000' if luminance > 140 else '#ffffff'
    short_side = min(width, height)
    inset = round(short_side * 0.04)
    return SVG_TEMPLATE.format(
        w=width, h=height, fill='#%02x%02x%02x' % rgb, ink=ink,
        stroke=max(1, round(short_side / 400)), inset=inset,
        iw=width - 2 * inset, ih=height - 2 * inset,
        font=max(12, round(short_side / 28)), label=label,  # small, low on the image: hero text sits centred
    )


def replace_images(template_dir):
    """Swap every raster in assets/img for an SVG placeholder. Returns {old_name: new_name}."""
    renamed = {}
    for image_path in sorted((template_dir / 'assets' / 'img').rglob('*')):
        if image_path.suffix.lower() not in RASTER_EXTENSIONS:
            continue
        with Image.open(image_path) as image:
            width, height = image.size
        svg_path = image_path.with_suffix('.svg')
        if svg_path.exists():
            raise RuntimeError(f'{svg_path} already exists; refusing to overwrite')
        label = f'{image_path.stem} · {width}×{height}'
        svg_path.write_text(build_svg(width, height, average_color(image_path), label), encoding='utf-8')
        image_path.unlink()
        renamed[image_path.name] = svg_path.name
    return renamed


def replace_videos(template_dir):
    """Regenerate every mp4 as a neutral animated gradient with the same size, fps and duration."""
    count = 0
    for video_path in sorted((template_dir / 'assets').rglob('*.mp4')):
        probe = subprocess.run(
            ['ffprobe', '-v', 'error', '-select_streams', 'v:0', '-show_entries',
             'stream=width,height,r_frame_rate:format=duration', '-of', 'default=nw=1', str(video_path)],
            capture_output=True, text=True, check=True).stdout
        info = dict(line.split('=', 1) for line in probe.strip().splitlines())
        temporary = video_path.with_name(video_path.stem + '.placeholder.mp4')
        source = (f"gradients=s={info['width']}x{info['height']}:r={info['r_frame_rate']}"
                  f":d={info['duration']}:c0=0x3a3a3a:c1=0x9a9a9a:c2=0x5c5c5c:speed=0.02:type=linear")
        subprocess.run(
            ['ffmpeg', '-v', 'error', '-y', '-f', 'lavfi', '-i', source, '-c:v', 'libx264',
             '-pix_fmt', 'yuv420p', '-g', '5', '-crf', '30', '-an', '-movflags', '+faststart', str(temporary)],
            check=True)
        temporary.replace(video_path)
        count += 1
    return count


def rewrite_references(template_dir, renamed):
    """Point every reference in the template's text files at the new placeholder names."""
    changed_files = 0
    for text_path in template_dir.rglob('*'):
        if text_path.suffix.lower() not in TEXT_EXTENSIONS:
            continue
        original = text_path.read_text(encoding='utf-8')
        updated = original
        for old_name, new_name in renamed.items():
            updated = updated.replace(old_name, new_name)
        if updated != original:
            text_path.write_text(updated, encoding='utf-8', newline='')
            changed_files += 1
    return changed_files


def main():
    """Process each template directory given on the command line."""
    for argument in sys.argv[1:]:
        template_dir = Path(argument)
        renamed = replace_images(template_dir)
        videos = replace_videos(template_dir)
        files = rewrite_references(template_dir, renamed)
        print(f'{template_dir.name}: {len(renamed)} images -> SVG, {videos} videos regenerated, {files} files rewritten')


if __name__ == '__main__':
    main()
