"""
webild_perf_guard.py — Install tools/perf-guard.js into templates (copy + <script> tag in <head>).

Idempotent: re-running refreshes the copy and never adds a second tag. The tag goes right after
<meta charset>, before any module script, so the guard's settings are in place when components start.

Usage: python -I tools/webild_perf_guard.py <templateDir> [...]
"""
import shutil
import sys
from pathlib import Path

GUARD = Path(__file__).with_name('perf-guard.js')
TAG = '<script src="assets/perf-guard.js"></script>'


def install(template_dir):
    """Copy the guard into one template and reference it from its index.html. Returns a status word."""
    index = template_dir / 'index.html'
    html = index.read_text(encoding='utf-8')
    shutil.copyfile(GUARD, template_dir / 'assets' / 'perf-guard.js')
    if TAG in html:
        return 'refreshed'
    lower = html.lower()
    charset = lower.find('<meta charset')
    if charset < 0:
        raise RuntimeError(f'{index}: no <meta charset> to anchor the guard')
    insert_at = lower.find('>', charset) + 1
    index.write_text(html[:insert_at] + '\n    ' + TAG + html[insert_at:], encoding='utf-8', newline='')
    return 'installed'


def main():
    """Install the guard in every template folder given."""
    for argument in sys.argv[1:]:
        print(f'{Path(argument).name}: {install(Path(argument))}')


if __name__ == '__main__':
    main()
