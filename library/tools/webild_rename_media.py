"""
webild_rename_media.py — Give a Webild template's placeholder media neutral names.

Original file and folder names can carry brands or people ("hale-coffee-1600.webp", "anya/icons/"), and the
placeholder images print their own name. This pass:
  1. renames every folder under assets/media to set-01, set-02… (folder prefixes are literal strings in the
     code even when the file part is built dynamically, so a prefix replace is safe);
  2. renames image/video/model files whose path appears literally in the code to image-01, video-01, model-01…,
     keeping the -800/-1600 responsive suffix pair together; files only reachable through dynamic names keep
     their name and are listed for review;
  3. redraws each renamed image's label; 4. updates every reference in .js/.css/.html/README.md.
Fonts, lighting maps and sounds keep their names (they name a typeface or a technical asset, not a brand).

Usage: python -I tools/webild_rename_media.py <templateDir>
"""
import re
import sys
from collections import Counter
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

IMAGE = {'.webp', '.png', '.jpg', '.jpeg', '.gif', '.avif'}
VECTOR = {'.svg'}  # renamed like images; their content is already a neutral shape (webild_media.svg_placeholder)
VIDEO = {'.mp4', '.webm', '.mov'}
MODEL = {'.glb'}
SIZE_SUFFIX = re.compile(r'^(.*?)(-(?:800|1600))?$')
# Transparent images whose silhouette IS the brand: their alpha is replaced by a neutral pill shape.
LOGO_LIKE = re.compile(r'logo|wordmark|emblem|signature|monogram|badge|crest', re.IGNORECASE)


def text_files(template_dir):
    """Files whose content may reference media paths."""
    return [file for file in template_dir.rglob('*') if file.is_file() and file.suffix in ('.js', '.css', '.html', '.md')]


def replace_everywhere(files, replacements):
    """Apply {old: new} substring replacements (longest first) to every file; return files changed."""
    ordered = sorted(replacements.items(), key=lambda item: -len(item[0]))
    changed = 0
    for file in files:
        text = file.read_text(encoding='utf-8', errors='surrogateescape')
        updated = text
        for old, new in ordered:
            updated = updated.replace(old, new)
        if updated != text:
            file.write_text(updated, encoding='utf-8', errors='surrogateescape', newline='')
            changed += 1
    return changed


def redraw_label(path, label, neutral_shape=False):
    """Repaint a placeholder image: dominant color, diagonals and the new label. The alpha silhouette is kept,
    unless neutral_shape is set (logos): then a transparent image becomes a centred pill."""
    with Image.open(path) as source:
        image = source.convert('RGBA')
    alpha = image.getchannel('A')
    if neutral_shape and alpha.getextrema()[0] < 250:
        alpha = Image.new('L', image.size, 0)
        inset_x, inset_y = image.width * 0.08, image.height * 0.2
        ImageDraw.Draw(alpha).rounded_rectangle([inset_x, inset_y, image.width - inset_x, image.height - inset_y],
                                                radius=(image.height - 2 * inset_y) / 2, fill=255)
    opaque = [(count, pixel) for count, pixel in image.resize((64, 64)).getcolors(64 * 64) if pixel[3] > 127]
    color = max(opaque)[1][:3] if opaque else (154, 154, 154)
    width, height = image.size
    canvas = Image.new('RGBA', image.size, color + (255,))
    draw = ImageDraw.Draw(canvas)
    luminance = 0.2126 * color[0] + 0.7152 * color[1] + 0.0722 * color[2]
    ink = (0, 0, 0) if luminance > 140 else (255, 255, 255)
    stroke = max(1, min(width, height) // 400)
    draw.line([(0, 0), (width, height)], fill=ink + (40,), width=stroke)
    draw.line([(width, 0), (0, height)], fill=ink + (40,), width=stroke)
    draw.text((width / 2, height * 0.9), label, fill=ink + (110,), anchor='mm',
              font=ImageFont.load_default(size=max(10, min(width, height) // 28)))
    canvas.putalpha(alpha)
    format_name = {'.jpg': 'JPEG', '.jpeg': 'JPEG'}.get(path.suffix.lower(), path.suffix[1:].upper())
    canvas.convert('RGB').save(path, format_name, quality=70) if format_name == 'JPEG' else canvas.save(path, format_name, quality=70)


def main():
    """Rename media for one template folder."""
    template_dir = Path(sys.argv[1])
    media = template_dir / 'assets' / 'media'
    if not media.exists():
        print(f'{template_dir.name}: no media'); return
    files = text_files(template_dir)

    # 1. Folders → set-NN (deepest first so parents move last).
    folder_map = {}
    code = '\n'.join(file.read_text(encoding='utf-8', errors='ignore') for file in files if file.name != 'README.md')
    for index, folder in enumerate(sorted({p.parent for p in media.rglob('*') if p.is_file() and p.parent != media}), start=1):
        relative = folder.relative_to(media).as_posix()
        # Safe only if the folder is never named outside a full "media/<folder>/" path (e.g. `${base}/img/` is not).
        if code.count(relative + '/') == code.count(f'media/{relative}/'):
            folder_map[relative] = f'set-{index:02d}'
    replacements = {f'media/{old}/': f'media/{new}/' for old, new in folder_map.items()}
    for old in sorted(folder_map, key=lambda value: -value.count('/')):  # deepest first: children move out before parents
        for file in [p for p in (media / old).iterdir() if p.is_file()]:
            (media / folder_map[old]).mkdir(exist_ok=True)
            file.rename(media / folder_map[old] / file.name)
    for old in sorted(folder_map, key=lambda value: -value.count('/')):
        for relative in [Path(old), *Path(old).parents]:  # drop the emptied folder and empty parents
            folder = media / relative
            if folder != media and folder.exists() and not any(folder.iterdir()):
                folder.rmdir()
    replace_everywhere(files, replacements)

    # 2. Files referenced literally → image-NN / video-NN / model-NN.
    corpus = '\n'.join(file.read_text(encoding='utf-8', errors='ignore') for file in files if file.name != 'README.md')
    families = {}
    for path in sorted(media.rglob('*')):
        if not path.is_file() or path.suffix.lower() not in IMAGE | VECTOR | VIDEO | MODEL:
            continue
        stem, size = SIZE_SUFFIX.match(path.stem).groups()
        families.setdefault((path.parent, stem, path.suffix), []).append((path, size or ''))
    counters = Counter()
    file_replacements, dynamic = {}, []
    for (folder, stem, suffix), members in families.items():
        if re.fullmatch(r'(image|video|model)-\d+', stem):
            continue
        full_paths = sum(corpus.count(f'media/{path.relative_to(media).as_posix()}') for path, _ in members)
        # Safe only if every mention of the name is a full literal path: code that builds the name from parts
        # (`${id}.glb`, `${base}/poster/${name}.jpg`) would break after a rename.
        literal = full_paths > 0 and corpus.count(stem) == full_paths
        if not literal:
            for path, _ in members:  # dynamic names keep their file name, but logos still lose their shape
                if LOGO_LIKE.search(stem) and suffix.lower() in IMAGE:
                    with Image.open(path) as image:
                        redraw_label(path, f'logo · {image.width}×{image.height}', True)
            dynamic.append(f'{folder.relative_to(media).as_posix()}/{stem}{suffix}'.lstrip('./'))
            continue
        kind = 'image' if suffix.lower() in IMAGE | VECTOR else 'video' if suffix.lower() in VIDEO else 'model'
        counters[(folder, kind)] += 1
        new_stem = f'{kind}-{counters[(folder, kind)]:02d}'
        for path, size in members:
            new_path = path.with_name(f'{new_stem}{size}{suffix}')
            path.rename(new_path)
            file_replacements[f'media/{path.relative_to(media).as_posix()}'] = f'media/{new_path.relative_to(media).as_posix()}'
            if kind == 'image' and suffix.lower() in IMAGE:
                with Image.open(new_path) as image:
                    redraw_label(new_path, f'{new_stem}{size} · {image.width}×{image.height}', bool(LOGO_LIKE.search(stem)))
    changed = replace_everywhere(files, file_replacements)
    print(f'{template_dir.name}: {len(folder_map)} folders, {len(file_replacements)} files renamed, {changed} files updated'
          + (f'; dynamic names kept: {", ".join(dynamic[:8])}{"…" if len(dynamic) > 8 else ""}' if dynamic else ''))


if __name__ == '__main__':
    main()
