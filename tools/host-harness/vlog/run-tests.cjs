// Executes the verifier package's own vitest files under plain node.
// Usage: node run-tests.cjs [file-prefix]
const path = require("node:path");
const { execFileSync } = require("node:child_process");

const DIR = "/tmp/vlog/repo/packages/verifier/src/__tests__";
const filter = process.argv[2] || "";
const files = require("node:fs").readdirSync(DIR).filter((f) => f.endsWith(".js") && f.includes(filter)).sort();

let totalPass = 0, totalFail = 0, broke = [];
for (const f of files) {
  process.stdout.write(`\n=== ${f} ===\n`);
  try {
    const out = execFileSync(process.execPath, ["-e", `require(${JSON.stringify(path.join(DIR, f))}); require("/tmp/vlog/vitest-shim.cjs").run();`],
      { encoding: "utf8", timeout: 240000, stdio: ["ignore", "pipe", "pipe"] });
    process.stdout.write(out.split("\n").filter((l) => /^(FAIL|\d+ passed)/.test(l)).join("\n") + "\n");
    const m = out.match(/(\d+) passed, (\d+) failed/);
    if (m) { totalPass += +m[1]; totalFail += +m[2]; }
  } catch (e) {
    const out = `${e.stdout || ""}${e.stderr || ""}`;
    process.stdout.write(out.split("\n").slice(-25).join("\n") + "\n");
    const m = out.match(/(\d+) passed, (\d+) failed/);
    if (m) { totalPass += +m[1]; totalFail += +m[2]; }
    else { totalFail++; broke.push(f); }
  }
}
console.log(`\n──── TOTAL: ${totalPass} passed, ${totalFail} failed${broke.length ? ` (crashed: ${broke.join(", ")})` : ""} ────`);
process.exit(totalFail === 0 ? 0 : 1);
