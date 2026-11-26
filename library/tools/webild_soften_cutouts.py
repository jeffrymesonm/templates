"""
webild_soften_cutouts.py — Make transparent placeholder cut-outs unrecognizable while keeping composition.

A placeholder keeps the alpha of the original cut-out, so its outline can still identify a person, a product,
a race track or a sponsor logo. This blurs that alpha and thresholds it again: the result is a soft blob of
the same size and position (layout and composition unchanged), without recognizable detail. Thin strokes
(signatures, track lines, lettering) disappear entirely.

Runs once per template: it writes assets/media/.softened and skips templates that already have it.
Usage: python -I tools/webild_soften_cutouts.py <templateDir> [...]
"""
import sys
from pathlib import Path
from PIL import Image, ImageFilter

RASTER = {'.webp', '.png', '.gif', '.avif'}


def soften(path):
    """Replace the alpha of one image by a blurred-and-thresholded version. Returns True if it had transparency."""
    with Image.open(path) as source:
        image = source.convert('RGBA')
    alpha = image.getchannel('A')
    if alpha.getextrema()[0] >= 250:
        return False
    radius = max(4, round(min(image.size) * 0.04))
    blob = alpha.filter(ImageFilter.GaussianBlur(radius)).point(lambda value: 255 if value > 140 else 0)
    image.putalpha(blob)
    format_name = path.suffix[1:].upper()
    image.save(path, format_name, **({} if format_name == 'PNG' else {'quality': 70}))
    return True


def main():
    """Soften every transparent raster placeholder of each template given."""
    for argument in sys.argv[1:]:
        media = Path(argument) / 'assets' / 'media'
        marker = media / '.softened'
        if not media.exists() or marker.exists():
            print(f'{Path(argument).name}: skipped'); continue
        count = sum(soften(path) for path in media.rglob('*') if path.suffix.lower() in RASTER)
        marker.write_text('cut-out silhouettes softened by tools/webild_soften_cutouts.py\n', encoding='utf-8')
        print(f'{Path(argument).name}: {count} cut-outs softened')


if __name__ == '__main__':
    main()
