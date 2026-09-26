// Executes the ported verifier's real statistical core against values that can
// be checked by hand. vitest cannot run on this host (--jitless removes real
// WASM; the polyfill's fake instantiate() breaks Vite's parser).
// Signatures are taken from packages/verifier/src/stats.ts, not guessed.
const stats = require("/tmp/vlog/stats.js");
const scorecard = require("/tmp/vlog/scorecard.js");

let pass = 0, fail = 0;
const near = (name, got, want, tol = 1e-9) => {
  const ok = typeof got === "number" && Number.isFinite(got) && Math.abs(got - want) <= tol;
  ok ? pass++ : fail++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}  got=${got} want=${want}`);
};
const eq = (name, got, want) => {
  const ok = Object.is(got, want);
  ok ? pass++ : fail++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}  got=${JSON.stringify(got)} want=${JSON.stringify(want)}`);
};

// --- clamp01 / sigmoid / logit -------------------------------------------
eq("clamp01(-1)", stats.clamp01(-1), 0);
eq("clamp01(2)", stats.clamp01(2), 1);
near("sigmoid(0)", stats.sigmoid(0), 0.5, 1e-12);
near("sigmoid(logit(0.3)) round-trips", stats.sigmoid(stats.logit(0.3)), 0.3, 1e-9);
near("sigmoid(logit(0.9)) round-trips", stats.sigmoid(stats.logit(0.9)), 0.9, 1e-9);

// --- single-pair losses ---------------------------------------------------
near("logLoss(0.5, 1) = ln2", stats.logLoss(0.5, 1), Math.log(2), 1e-12);
near("logLoss(0.5, 0) = ln2", stats.logLoss(0.5, 0), Math.log(2), 1e-12);
near("brierScore(1,1) = 0", stats.brierScore(1, 1), 0, 1e-12);
near("brierScore(0.5,1) = 0.25", stats.brierScore(0.5, 1), 0.25, 1e-12);
// A confidently wrong forecast must score worse than a 0.5 forecast.
eq("logLoss(0.1,1) > logLoss(0.5,1)", stats.logLoss(0.1, 1) > stats.logLoss(0.5, 1), true);

// --- array helpers --------------------------------------------------------
near("logLossOf([0.9,0.1],[1,0])", stats.logLossOf([0.9, 0.1], [1, 0]),
     -(Math.log(0.9) + Math.log(0.1)) / 2, 1e-12);
near("brierOf([1,0],[1,0]) = 0", stats.brierOf([1, 0], [1, 0]), 0, 1e-12);
near("brierOf([0.5,0.5],[1,0]) = 0.25", stats.brierOf([0.5, 0.5], [1, 0]), 0.25, 1e-12);
near("meanLogLoss(rows)", stats.meanLogLoss([{ p: 0.9, y: 1 }, { p: 0.1, y: 0 }]),
     -(Math.log(0.9) + Math.log(0.1)) / 2, 1e-12);
near("meanBrier(rows)", stats.meanBrier([{ p: 0.5, y: 1 }, { p: 0.5, y: 0 }]), 0.25, 1e-12);

// --- wilsonInterval: textbook values -------------------------------------
const w0 = stats.wilsonInterval(0, 10);
const w10 = stats.wilsonInterval(10, 10);
const w5 = stats.wilsonInterval(5, 10);
eq("wilson(0,10) point", w0.point, 0);
eq("wilson(0,10) low", w0.low, 0);
near("wilson(0,10) high ~ 0.2775", w0.high, 0.2775327998628892, 1e-9);
eq("wilson(10,10) high", w10.high, 1);
near("wilson(10,10) low ~ 0.7225", w10.low, 0.7224672001371108, 1e-9);
near("wilson(5,10) low", w5.low, 0.23659309051256486, 1e-9);
// n <= 0 must refuse rather than invent a band.
eq("wilson(0,0) -> null (no honest band)", stats.wilsonInterval(0, 0), null);
eq("wilson(0,-5) -> null", stats.wilsonInterval(0, -5), null);
// Interval must actually contain the observed rate.
const contains = (k, n) => { const w = stats.wilsonInterval(k, n); return w.low <= k / n && k / n <= w.high; };
eq("wilson(0,10) contains 0", contains(0, 10), true);
eq("wilson(5,10) contains 0.5", contains(5, 10), true);
eq("wilson(10,10) contains 1", contains(10, 10), true);
eq("wilson(7,13) contains 7/13", contains(7, 13), true);

// --- pairedBootstrap: determinism + semantics ----------------------------
// candidate beats market (lower loss) on every row => pBetter should be 1
const win = stats.pairedBootstrap(
  { candidateLoss: [0.1, 0.2, 0.1, 0.3, 0.2], marketLoss: [0.5, 0.6, 0.5, 0.7, 0.6] },
  { resamples: 500, seed: 42 },
);
const loss = stats.pairedBootstrap(
  { candidateLoss: [0.9, 0.8, 1.0], marketLoss: [0.5, 0.5, 0.5] },
  { resamples: 500, seed: 42 },
);
eq("bootstrap: dominant candidate pBetter=1", win.pBetter, 1);
eq("bootstrap: losing candidate pBetter=0", loss.pBetter, 0);
near("bootstrap: delta = mean(cand - market)", win.delta, -0.4, 1e-12);
const r1 = stats.pairedBootstrap({ candidateLoss: [0.1, 0.2], marketLoss: [0.3, 0.4] }, { resamples: 300, seed: 7 });
const r2 = stats.pairedBootstrap({ candidateLoss: [0.1, 0.2], marketLoss: [0.3, 0.4] }, { resamples: 300, seed: 7 });
eq("bootstrap deterministic under fixed seed", JSON.stringify(r1), JSON.stringify(r2));
// Mismatched lengths must not silently truncate into a result.
const bad = stats.pairedBootstrap({ candidateLoss: [0.1], marketLoss: [0.2, 0.3] }, { resamples: 100, seed: 1 });
eq("bootstrap: length mismatch -> n=0, delta NaN", bad.n, 0);

// --- fitLogistic + logisticPredict ---------------------------------------
// design: one column, labels separated at 0.5
const xs = [0.1, 0.2, 0.3, 0.7, 0.8, 0.9];
const ys = [0, 0, 0, 1, 1, 1];
const coef = stats.fitLogistic(xs, ys, { iterations: 500, l2: 0.0001 });
const probs = stats.logisticPredict(coef);
// marginal p for each x (single feature, with intercept => 2 coefs)
eq("logisticPredict returns one prob per row", probs.length, xs.length);
const pLow = probs[0], pHigh = probs[probs.length - 1];
eq("logistic: monotone increasing in x", probs.every((v, i) => i === 0 || v >= probs[i - 1]), true);
eq("logistic: low feature -> p < 0.5", pLow < 0.5, true);
eq("logistic: high feature -> p > 0.5", pHigh > 0.5, true);

// --- scorecard markdown renders ------------------------------------------
const md = scorecard.scorecardMarkdown(
  scorecard.toScoredRows ? scorecard.toScoredRows([{ label: "alpha", n: 100, point: 0.7, low: 0.6, high: 0.8 }]) : [],
);
eq("scorecardMarkdown non-empty", typeof md === "string" && md.length > 0, true);

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);
