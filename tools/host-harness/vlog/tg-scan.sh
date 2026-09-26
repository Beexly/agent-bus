#!/bin/sh
# Local mirror of the trust-gate scan. The real script cannot complete on the
# iSH host: its recursive async walk over apps/web dies silently (exit 0, no
# output) partway through apps/web/app/cockpit, so a green local run would be a
# lie. This driver swaps the FS layer for the synchronous one, takes a
# --dirs=<csv> / --only-files=<bool> selector, and writes the verdict to a file
# (stdout is unreliable here too).
#
# Usage: sh /tmp/vlog/tg-scan.sh "<dir,dir,...>" <outfile>
set -e
REPO=/tmp/gsx
DIRS="$1"
OUT="$2"
python3 - "$DIRS" <<'PY'
import sys
dirs=sys.argv[1].split(",")
src=open('/tmp/gsx/scripts/guardrails/trust-gate.mjs').read()
old='import { readdir, readFile, stat } from "node:fs/promises";'
new='''import { readdirSync as _rd, readFileSync as _rf, statSync as _st, appendFileSync as _af } from "node:fs";
const readdir = (p, o) => _rd(p, o);
const readFile = (p, e) => _rf(p, e);
const stat = async (p) => { const s = _st(p); return { isDirectory: () => s.isDirectory(), isFile: () => s.isFile() }; };'''
assert old in src
src=src.replace(old,new).replace('const ROOT = resolve(process.cwd());','const ROOT = "/tmp/gsx";')
i=src.index('const SCAN_DIRS = [');j=src.index('];',i)+2
src=src[:i]+'const SCAN_DIRS = '+repr(dirs).replace("'",'"')+';'+src[j:]
src=src.replace('  if (allHits.length === 0) {','  _af(process.env.TG_OUT,"scanned="+scanned+" hits="+allHits.length+"\\n"+allHits.map(h=>`  ${h.file}:${h.line} [${h.claim}] ${h.snippet}`).join("\\n")+"\\n");\n  if (allHits.length === 0) {')
open('/tmp/gsx/scripts/guardrails/zz-tg.mjs','w').write(src)
PY
rm -f "$OUT"
TG_OUT="$OUT" timeout 900 node "$REPO/scripts/guardrails/zz-tg.mjs" >/dev/null 2>&1 || true
rm -f "$REPO/scripts/guardrails/zz-tg.mjs"
cat "$OUT" 2>/dev/null || echo "NO RESULT (scan died)"
