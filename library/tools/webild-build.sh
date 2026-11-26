#!/usr/bin/env bash
# webild-build.sh — Full pipeline for one Webild template: capture + standalone patch (webild-extract.cjs),
# local placeholder media (webild_media.py), stub of Webild's internal component catalogue, readable page.js.
# Usage: bash tools/webild-build.sh <webild-slug> <template-id>
set -euo pipefail
TOOLS="$(cd "$(dirname "$0")" && pwd)"
LIBRARY="$(dirname "$TOOLS")"
SLUG="$1"; ID="$2"
OUT="$LIBRARY/templates/$ID"
REPORT="$LIBRARY/source/webild/captures/$SLUG.json"

# Resume: a previous run may have failed after the capture (e.g. in the media step).
if [ -f "$OUT/assets/page.js" ] && [ -f "$REPORT" ]; then echo "capture exists, resuming"; else
  node "$TOOLS/webild-extract.cjs" "$SLUG" "$OUT" "$REPORT"
fi
python -I "$TOOLS/webild_media.py" "$OUT" "$REPORT"
python -I "$TOOLS/webild_fix_url_classes.py" "$OUT"   # keep Tailwind url() classes matching their CSS rule

# Webild's internal catalogue of 800 components is imported by the entry but never used by a template page.
for catalogue in "$OUT"/assets/libraryData-*.js; do
  printf '// Stub: Webild internal component catalogue (not used by this template page).\nexport const a=[],i=[],n=[],o=[],t=[];export const r=()=>({decisions:{},decide(){}});\n' > "$catalogue"
done

# page.js holds all the content (texts, links, media props): make it readable.
(cd "$TOOLS" && npx prettier --parser babel --print-width 110 --write "$OUT/assets/page.js" > /dev/null)

# Neutral media names (originals can carry brands/people) and unrecognizable cut-out silhouettes.
python -I "$TOOLS/webild_rename_media.py" "$OUT"
python -I "$TOOLS/webild_soften_cutouts.py" "$OUT"

# README skeleton: sections, palette, fonts, media. Descriptive fields stay as COMPLETAR markers.
python -I "$TOOLS/webild_readme.py" "$OUT" "$REPORT" "$LIBRARY/catalog/webild-inventory.json"
echo "built $ID — next: neutralize texts (docs/NEUTRALIZAR-WEBILD.md)"
