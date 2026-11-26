"""
webild_fix_url_classes.py — Re-link Tailwind arbitrary-value classes such as `bg-[url(...)]` after media rewriting.

Tailwind names the class after its value: `bg-[url(https://storage…/noise.webp)]`. webild_media.py rewrote the
URL inside the JS class string, but the CSS selector is escaped (`.bg-\\[url\\(https\\:\\/\\/…`) and kept the
original text, so class and rule stopped matching and the background silently disappeared. The CSS rule body
already points at the local file (`url(media/…)`), so the class NAME can safely go back to the original text: it
is only a name, nothing is downloaded from it. This restores the original class string in every JS file.

Usage: python -I tools/webild_fix_url_classes.py <templateDir> [...]
"""
import re
import sys
from pathlib import Path

RULE = re.compile(r'\.([a-z-]*)\\\[url\\\((https\\:\\/\\/storage\\\.googleapis\\\.com\\/webild\\/[^)]*?)\\\)\\\]\{[^}]*?url\((media/[^)]+)\)')


def unescape(css_identifier):
    """Undo CSS escaping in a selector fragment (backslash before any character)."""
    return re.sub(r'\\(.)', r'\1', css_identifier)


def main():
    """Restore the original arbitrary-value class names in each template's JS."""
    for argument in sys.argv[1:]:
        assets = Path(argument) / 'assets'
        pairs = {}
        for css in assets.glob('*.css'):
            for prefix, escaped_url, local in RULE.findall(css.read_text(encoding='utf-8', errors='ignore')):
                pairs[f'{prefix}[url(assets/{local})]'] = f'{prefix}[url({unescape(escaped_url)})]'
        changed = 0
        for js in assets.glob('*.js'):
            text = js.read_text(encoding='utf-8', errors='surrogateescape')
            updated = text
            for local_class, original_class in pairs.items():
                updated = updated.replace(local_class, original_class)
            if updated != text:
                js.write_text(updated, encoding='utf-8', errors='surrogateescape', newline='')
                changed += 1
        print(f'{Path(argument).name}: {len(pairs)} url classes known, {changed} files re-linked')


if __name__ == '__main__':
    main()
