#!/bin/sh
# Build a runnable mirror of packages/verifier so the branch's OWN vitest
# files execute under plain node (vitest cannot run on this host: --jitless
# removes real WASM, and the polyfill's fake instantiate() breaks Vite's
# import analysis -> "invalid JS syntax" on provably valid files).
set -e
REPO=/tmp/gsx
MIRROR=/tmp/vlog/repo
DI=/tmp/vlog/di
ESBUILD="$REPO/node_modules/.bin/esbuild"

rm -rf "$MIRROR" "$DI"
mkdir -p "$MIRROR/packages/verifier" "$MIRROR/docs" "$MIRROR/node_modules/vitest" \
         "$MIRROR/node_modules/@sports/data-ingestion" "$DI"

cp -r "$REPO/packages/verifier/fixtures" "$MIRROR/packages/verifier/"
cp -r "$REPO/docs/factors" "$MIRROR/docs/"

# 1. test files, each bundled standalone; vitest + data-ingestion stay external
for f in "$REPO"/packages/verifier/src/__tests__/*.ts; do
  "$ESBUILD" "$f" --bundle --format=cjs --platform=node --target=node20 \
    --log-level=warning \
    --external:vitest --external:@sports/data-ingestion \
    --outfile="$MIRROR/packages/verifier/src/__tests__/$(basename "${f%.ts}").js"
done

# 2. the real data-ingestion symbols the loader imports, transpiled 1:1
for f in nflverse-source no-store-fetch source-registry fetch-failover; do
  "$ESBUILD" "$REPO/packages/data-ingestion/src/$f.ts" --format=cjs --platform=node \
    --target=node20 --log-level=warning --outfile="$DI/$f.js"
done

# 3. module shims so bare specifiers resolve
cat > "$MIRROR/node_modules/vitest/package.json" <<'JSON'
{ "name": "vitest", "version": "0.0.0-shim", "main": "index.js" }
JSON
cat > "$MIRROR/node_modules/vitest/index.js" <<'JS'
module.exports = require("/tmp/vlog/vitest-shim.cjs");
JS
cat > "$MIRROR/node_modules/@sports/data-ingestion/package.json" <<'JSON'
{ "name": "@sports/data-ingestion", "version": "0.0.0-mirror", "main": "index.js" }
JSON
cat > "$MIRROR/node_modules/@sports/data-ingestion/index.js" <<'JS'
const src = require("/tmp/vlog/di/nflverse-source.js");
const fail = require("/tmp/vlog/di/fetch-failover.js");
const reg = require("/tmp/vlog/di/source-registry.js");
module.exports = {
  ...src, ...fail, ...reg,
};
JS
echo "build ok"
