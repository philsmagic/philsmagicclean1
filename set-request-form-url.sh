#!/bin/bash
# Set a Jobber request form URL in the site (and, for --janitorial, the client email).
#
#   Get it from: Jobber > Settings > Requests and Bookings
#                > ... next to the form > Share links > Copy link
#
# Usage:
#   ./set-request-form-url.sh --general    "https://clienthub.getjobber.com/.../requests/NNNN/new"
#   ./set-request-form-url.sh --janitorial "https://clienthub.getjobber.com/.../requests/NNNN/new"
#
# The janitorial form is what the blog CTAs and the client email point at. Until
# it is set, they fall back to the general form.
set -euo pipefail

KIND="${1:-}"; URL="${2:-}"
case "$KIND" in --general|--janitorial) ;; *) echo "usage: $0 --general|--janitorial <url>" >&2; exit 1 ;; esac
case "$URL" in https://*) ;; *) echo "error: must be an https URL" >&2; exit 1 ;; esac

SITE="/Users/ericajohnson/Development/ACTIVE PROJECTS/2026 - Phil's Magic/site"
EMAIL="/Users/ericajohnson/Agency-AI-Team/agency/projects/phils-magic/square-to-jobber-client-email-v3.html"

python3 - "$KIND" "$URL" "$SITE" "$EMAIL" <<'PY'
import io, re, sys
kind, url, site, email = sys.argv[1:5]
const = "JANITORIAL_FORM_URL" if kind == "--janitorial" else "REQUEST_FORM_URL"

p = f"{site}/client/src/data/blogPosts.ts"
s = io.open(p, encoding="utf-8").read()
pat = re.compile(r'(export const %s =\s*)"[^"]*"' % const)
assert pat.search(s), f"{const} not found"
s = pat.sub(lambda m: f'{m.group(1)}\n  "{url}"', s, count=1)
io.open(p, "w", encoding="utf-8").write(s)
print(f"  site  : {const} set")

# The email's janitorial CTA tracks the janitorial form.
if kind == "--janitorial":
    s = io.open(email, encoding="utf-8").read()
    n = len(re.findall(r'href="https://clienthub\.getjobber\.com/hubs/[^"]*requests[^"]*"', s))
    s = re.sub(r'href="https://clienthub\.getjobber\.com/hubs/[^"]*requests[^"]*"',
               f'href="{url}"', s)
    s = s.replace("REQUEST_FORM_URL_PLACEHOLDER", url)
    io.open(email, "w", encoding="utf-8").write(s)
    print(f"  email : janitorial CTA pointed at the new form ({n} link(s) updated)")
PY

echo
echo "Then:  cd \"$SITE\" && pnpm run build"
