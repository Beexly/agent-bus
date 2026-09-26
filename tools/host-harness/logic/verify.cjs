// Executes the REAL ported logic (transpiled from the branch) to verify the
// fail-closed conformal behaviour, since vitest cannot run on this host.
const cms = require("/tmp/logic/cms.cjs");
const taci = require("/tmp/logic/taci.cjs");

let pass = 0, fail = 0;
const eq = (name, got, want) => {
  const ok = Object.is(got, want);
  ok ? pass++ : fail++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}  got=${got} want=${want}`);
};

// --- splitConformalQuantile: fail closed when k > n -----------------------
eq("empty -> +Inf", cms.splitConformalQuantile([], 0.9), Infinity);
eq("n=5,p=0.9 (k=6>n) -> +Inf", cms.splitConformalQuantile([1, 2, 3, 4, 5], 0.9), Infinity);
eq("n=9,p=0.9 (k=9) -> sorted[8]",
   cms.splitConformalQuantile([0.1, 0.2, 0.3, 0.4, 0.5, 0.55, 0.6, 0.7, 0.8], 0.9), 0.8);
eq("p=0 -> +Inf", cms.splitConformalQuantile([1, 2, 3], 0), Infinity);
eq("p=1 -> +Inf", cms.splitConformalQuantile([1, 2, 3], 1), Infinity);

// --- conformalMarginSet: empty set, no fake band --------------------------
const rows = (n) => Array.from({ length: n }, (_, i) => ({ actualMargin: i + 1, predictedMean: 1, sportKey: "nfl" }));
const small = cms.conformalMarginSet({ predictedMean: 1, sportKey: "nfl", alpha: 0.1, calibration: rows(5) });
eq("n=5 set status", small.status, "fail_closed_insufficient_n");
eq("n=5 set qhatInfinite", small.qhatInfinite, true);
eq("n=5 set integers empty", JSON.stringify(small.integers), "[]");
eq("n=5 set covers() is false", cms.marginSetCovers(small, 1), false);

const big = cms.conformalMarginSet({ predictedMean: 1, sportKey: "nfl", alpha: 0.1, calibration: rows(40) });
eq("n=40 set status", big.status, "ok");
eq("n=40 set qhatInfinite", big.qhatInfinite, false);
eq("n=40 set halfWidth finite", Number.isFinite(big.halfWidth), true);

// --- ACI: fail-closed band must not certify coverage ----------------------
const obs = Array.from({ length: 12 }, (_, i) => ({
  sampleId: `s${i}`, position: i, predictedMean: 10, actualFantasyPoints: 10,
}));
const out = taci.adaptiveConformalIntervals(obs, { targetCoverage: 0.9, minAlpha: 0.02, maxAlpha: 0.5 });
const first = out[0], last = out[out.length - 1];
eq("ACI first status", first.status, "warmup_point_band");
eq("ACI first covered is false", first.covered, false);
eq("ACI last status", last.status, "ok");
eq("ACI last qhatInfinite", last.qhatInfinite, false);
eq("ACI last residualQuantile", last.residualQuantile, 0);
eq("ACI last covered", last.covered, true);
eq("ACI alpha within bounds", last.alpha >= 0.02 && last.alpha <= 0.5, true);

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);
