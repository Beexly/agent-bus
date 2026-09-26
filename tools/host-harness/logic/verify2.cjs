// Executes the REAL ported logic (transpiled from the branch) to verify the
// fail-closed conformal behaviour, since vitest cannot run on this host.
// Scenarios mirror the branch's own test file so expectations are not invented.
const cms = require("/tmp/logic/cms.cjs");
const taci = require("/tmp/logic/taci.cjs");

let pass = 0, fail = 0;
const eq = (name, got, want) => {
  const ok = Object.is(got, want);
  ok ? pass++ : fail++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}  got=${got} want=${want}`);
};
const rows = (n, sportKey, predicted, actual) =>
  Array.from({ length: n }, () => ({ predictedMean: predicted, actualMargin: actual, sportKey }));

// --- splitConformalQuantile -----------------------------------------------
eq("empty -> +Inf", cms.splitConformalQuantile([], 0.9), Infinity);
eq("n=4,p=0.9: ceil(5*.9)=5>4 -> +Inf", cms.splitConformalQuantile([1, 2, 3, 4], 0.9), Infinity);
eq("n=9,p=0.9: k=9 -> sorted[8]",
   cms.splitConformalQuantile([0.1, 0.2, 0.3, 0.4, 0.5, 0.55, 0.6, 0.7, 0.8], 0.9), 0.8);
eq("p=0 -> +Inf", cms.splitConformalQuantile([1, 2, 3], 0), Infinity);
eq("p=1 -> +Inf", cms.splitConformalQuantile([1, 2, 3], 1), Infinity);

// --- conformalMarginSet ----------------------------------------------------
const under = cms.conformalMarginSet({
  predictedMean: 3, sportKey: "icehockey_nhl",
  calibration: rows(cms.MIN_SAMPLES_MARGIN_SET - 1, "icehockey_nhl", 3, 3),
});
eq("n=63 (<64) -> insufficient_sample", under.status, "insufficient_sample");
eq("n=63 set empty", JSON.stringify(under.integers), "[]");
eq("n=63 covers() false", cms.marginSetCovers(under, 3), false);

const failClosed = cms.conformalMarginSet({
  predictedMean: 1, sportKey: "baseball_mlb",
  calibration: rows(70, "baseball_mlb", 1, 1), alpha: 0.01,
});
eq("n=70,p=0.99: k=71>70 -> fail_closed", failClosed.status, "fail_closed_insufficient_n");
eq("fail-closed qhatInfinite", failClosed.qhatInfinite, true);
eq("fail-closed integers empty", JSON.stringify(failClosed.integers), "[]");
eq("fail-closed covers() false", cms.marginSetCovers(failClosed, 1), false);
eq("fail-closed halfWidth +Inf", failClosed.halfWidth, Infinity);

// Mondrian: NHL rows must not price an NFL request.
const mixed = cms.conformalMarginSet({
  predictedMean: 1, sportKey: "americanfootball_nfl",
  calibration: rows(200, "icehockey_nhl", 3, 9), alpha: 0.1,
});
eq("mondrian: NFL request with only NHL rows -> insufficient", mixed.status, "insufficient_sample");

// A normal, sufficient sample still produces a real band.
const ok = cms.conformalMarginSet({
  predictedMean: 10, sportKey: "soccer_epl",
  calibration: rows(200, "soccer_epl", 10, 12), alpha: 0.1,
});
eq("n=200 alpha=0.1 -> ok", ok.status, "ok");
eq("ok qhatInfinite false", ok.qhatInfinite, false);
eq("ok halfWidth finite", Number.isFinite(ok.halfWidth), true);
eq("ok covers(12) true", cms.marginSetCovers(ok, 12), true);

// --- ACI: real signature is (obs, targetCoverage, learningRate) ---------
const obs = (id, pos, pred, actual) => ({ sampleId: id, position: pos, predictedMean: pred, actualFantasyPoints: actual });

// FAIL CLOSED probe: 4 residuals, p=0.95 -> k=ceil(5*.95)=5 > 4
const seeded = [1, 2, 3, 4].map((r, i) => obs(`seed-${i}`, "RB", 10, 10 + r));
seeded.push(obs("probe", "RB", 10, 10));
const probe = taci.adaptiveConformalIntervals(seeded, 0.95, 0).slice(-1)[0];
eq("ACI probe qhatInfinite", probe.qhatInfinite, true);
eq("ACI probe status", probe.status, "fail_closed_insufficient_n");
eq("ACI probe residualQuantile +Inf", probe.residualQuantile, Infinity);
eq("ACI probe upper +Inf", probe.upper, Infinity);
eq("ACI probe covered false (not a certified cover)", probe.covered, false);

// pre-update alpha semantics
const r4 = (v) => Math.round(v * 10000) / 10000;
const tc = 0.8, lr = 0.05, startAlpha = 1 - tc;
const hit = taci.adaptiveConformalIntervals([obs("hit-0","WR",15,15), obs("hit-1","WR",15,15)], tc, lr);
eq("ACI hit[0] alpha = start", hit[0].alpha, r4(startAlpha));
eq("ACI hit[0] covered", hit[0].covered, true);
eq("ACI hit[1] alpha = start+lr*(0.2-0)", hit[1].alpha, r4(Math.min(0.5, Math.max(0.02, startAlpha + lr*(1-tc-0)))));
const miss = taci.adaptiveConformalIntervals([obs("miss-0","QB",10,40), obs("miss-1","QB",10,80)], tc, lr);
eq("ACI miss[0] alpha = start", miss[0].alpha, r4(startAlpha));
eq("ACI miss[0] covered false", miss[0].covered, false);
eq("ACI miss[1] alpha lowered", miss[1].alpha < miss[0].alpha, true);

// 80 exact hits -> alpha floors at 0.02, p=0.98, needs n>=49
const hits = Array.from({length:80},(_,i)=>obs(`h-${i}`,"WR",15,15));
const hi = taci.adaptiveConformalIntervals(hits, 0.8, 0.05);
const last = hi[hi.length-1];
eq("ACI 80 hits: first alpha 0.2", hi[0].alpha, 0.2);
eq("ACI 80 hits: first status warmup", hi[0].status, "warmup_point_band");
eq("ACI 80 hits: last status ok", last.status, "ok");
eq("ACI 80 hits: last qhatInfinite false", last.qhatInfinite, false);
eq("ACI 80 hits: last residualQuantile ~0", Math.abs(last.residualQuantile) < 1e-9, true);
eq("ACI 80 hits: last covered", last.covered, true);
eq("ACI 80 hits: last alpha > minAlpha", last.alpha > 0.02, true);

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);
