#!/bin/bash
# Drop the Jobber request form URL into the site and the client email.
#
#   Get it from: Jobber > Settings > Requests and Bookings
#                > ... next to the form > Share links > Copy link
#
# Usage: ./set-request-form-url.sh "https://clienthub.getjobber.com/client_hubs/.../request_form"
set -euo pipefail

URL="${1:-}"
if [ -z "$URL" ]; then
  echo "usage: $0 <jobber-request-form-url>" >&2
  exit 1
fi
case "$URL" in
  https://*) ;;
  *) echo "error: must be an https URL" >&2; exit 1 ;;
esac

SITE="/Users/ericajohnson/Development/ACTIVE PROJECTS/2026 - Phil's Magic/site"
EMAIL="/Users/ericajohnson/Agency-AI-Team/agency/projects/phils-magic/square-to-jobber-client-email-v3.html"

python3 - "$URL" "$SITE" "$EMAIL" <<'PY'
import io, re, sys
url, site, email = sys.argv[1], sys.argv[2], sys.argv[3]

p = f"{site}/client/src/data/blogPosts.ts"
s = io.open(p, encoding="utf-8").read()
s2 = re.sub(r'export const REQUEST_FORM_URL = "[^"]*";',
            f'export const REQUEST_FORM_URL = "{url}";', s, count=1)
assert s2 != s, "REQUEST_FORM_URL not found in blogPosts.ts"
io.open(p, "w", encoding="utf-8").write(s2)
print("  site   : REQUEST_FORM_URL set")

s = io.open(email, encoding="utf-8").read()
s2 = s.replace("REQUEST_FORM_URL_PLACEHOLDER", url)
n = s.count("REQUEST_FORM_URL_PLACEHOLDER")
io.open(email, "w", encoding="utf-8").write(s2)
print(f"  email  : {n} placeholder(s) replaced")
PY

echo
echo "Now rebuild and check, then commit:"
echo "  cd \"$SITE\" && pnpm run build"
