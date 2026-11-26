#!/usr/bin/env bash
# check-brands.sh — For the hand-written static templates (origin github-templates): fail if their code or
# assets still mention an original brand, owner, real-looking contact data or a raster photo. READMEs are
# excluded (they cite the source on purpose). Templates extracted from Webild (they have assets/page.js) are
# compiled builds where a file grep is meaningless: they are checked by tools/check-webild-brands.cjs.
# Usage: bash tools/check-brands.sh [templates-dir]
set -u
TEMPLATES_DIR="${1:-$(dirname "$0")/../templates}"

# Repo brands, Webild demo brands, owners and hosts of the original material.
BRAND_PATTERN='la plancha|plancha|casa canela|canela|v[eé]rtice|laurel|albamar|monoform|villa marea|menorca|norvia|stack shack|joe.s coffee|kestrel|oakmere|monoblock|solenne|ridgeway|yardline|webild|jeffry|storage\.googleapis|unsplash|pexels|freepik'
# Real-looking contact data: Dominican/US numbers, personal mailboxes, real social profiles.
CONTACT_PATTERN='wa\.me/[1-9]|tel:\+?[1-9][0-9]{6,}|(809|829|849)[ .-]?[0-9]{3}|@(gmail|hotmail|outlook|yahoo)\.|(instagram|facebook|tiktok|x|twitter)\.com/[a-z0-9_.]+'

status=0
for dir in "$TEMPLATES_DIR"/*/; do
  [ -f "$dir/assets/page.js" ] && continue # Webild build: see check-webild-brands.cjs
  for pattern in "$BRAND_PATTERN" "$CONTACT_PATTERN"; do
    if grep -rniE --exclude=README.md "$pattern" "$dir"; then status=1; fi
  done
  if find "$dir" -type f \( -iname '*.webp' -o -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' -o -iname '*.avif' \) | grep .; then
    echo "Raster images left in $dir (should be placeholders)"; status=1
  fi
done
[ "$status" -eq 0 ] && echo "check-brands: clean"
exit "$status"
