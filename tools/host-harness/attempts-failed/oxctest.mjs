const fs = await import('node:fs');
const code = fs.readFileSync('node_modules/vite/dist/client/env.mjs','utf8');
try {
  const { parseAstAsync } = await import('vite/dist/node/parseAst.mjs');
  const r = await parseAstAsync(code, {});
  console.log('oxc parse OK, errors:', r.errors.length);
} catch(e) { console.log('oxc parse FAIL:', e.message); }
