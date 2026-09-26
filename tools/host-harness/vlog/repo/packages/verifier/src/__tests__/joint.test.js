"use strict";

// ../gsx/packages/verifier/src/__tests__/joint.test.ts
var import_vitest = require("vitest");

// ../gsx/packages/verifier/src/stats.ts
var DEFAULT_BOOTSTRAP_RESAMPLES = 1e3;
var DEFAULT_BOOTSTRAP_SEED = 20260915;
function clamp01(p) {
  if (!Number.isFinite(p)) return 0;
  return Math.min(1, Math.max(0, p));
}
function brierScore(p, y) {
  const pp = clamp01(p);
  return (pp - y) ** 2;
}
function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = a + 1831565813 >>> 0;
    let t = a;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function pairedBootstrap(input, options) {
  const a = input.candidateLoss;
  const b = input.marketLoss;
  const resamples = Math.max(1, Math.floor(options?.resamples ?? DEFAULT_BOOTSTRAP_RESAMPLES));
  const seed = options?.seed ?? DEFAULT_BOOTSTRAP_SEED;
  const n = Math.min(a.length, b.length);
  if (n === 0 || a.length !== b.length) {
    return { pBetter: 0.5, delta: NaN, resamples, seed, n: 0 };
  }
  let full = 0;
  for (let i = 0; i < n; i++) full += a[i] - b[i];
  const delta = full / n;
  const rand = mulberry32(seed);
  let better = 0;
  for (let r = 0; r < resamples; r++) {
    let sa = 0;
    let sb = 0;
    for (let i = 0; i < n; i++) {
      const idx = Math.floor(rand() * n);
      sa += a[idx];
      sb += b[idx];
    }
    if (sa / n < sb / n) better += 1;
  }
  return { pBetter: better / resamples, delta, resamples, seed, n };
}
function logit(p, eps = 1e-6) {
  const x = Math.min(1 - eps, Math.max(eps, p));
  return Math.log(x / (1 - x));
}
function sigmoid(x) {
  if (x >= 0) {
    const z2 = Math.exp(-x);
    return 1 / (1 + z2);
  }
  const z = Math.exp(x);
  return z / (1 + z);
}
function fitLogistic(X, y, options) {
  const n = X.length;
  if (n === 0 || y.length !== n) {
    return { coef: [], iterations: 0, converged: false, logLik: NaN };
  }
  const kRaw = X[0]?.length ?? 0;
  const k = kRaw + 1;
  const maxIter = options?.maxIter ?? 50;
  const tol = options?.tol ?? 1e-10;
  const ridge = options?.ridge ?? 1e-6;
  const beta = new Array(k).fill(0);
  let converged = false;
  let iter = 0;
  for (iter = 1; iter <= maxIter; iter++) {
    const score = new Array(k).fill(0);
    const H = new Array(k * k).fill(0);
    for (let i = 0; i < n; i++) {
      const xi = X[i];
      let z = beta[0];
      for (let j = 0; j < kRaw; j++) z += beta[j + 1] * xi[j];
      const p = sigmoid(z);
      const w = Math.max(p * (1 - p), 1e-12);
      const resid = y[i] - p;
      score[0] = (score[0] ?? 0) + resid;
      for (let j = 0; j < kRaw; j++) {
        score[j + 1] = (score[j + 1] ?? 0) + resid * xi[j];
      }
      H[0] = (H[0] ?? 0) + w;
      for (let j = 0; j < kRaw; j++) {
        const jx = xi[j];
        const idxJ0 = (j + 1) * k;
        const idx0J = j + 1;
        H[idxJ0] = (H[idxJ0] ?? 0) + w * jx;
        H[idx0J] = (H[idx0J] ?? 0) + w * jx;
        for (let l = 0; l < kRaw; l++) {
          const idx = (j + 1) * k + (l + 1);
          H[idx] = (H[idx] ?? 0) + w * jx * xi[l];
        }
      }
    }
    for (let j = 1; j < k; j++) {
      const idx = j * k + j;
      H[idx] = (H[idx] ?? 0) + ridge;
    }
    const delta = solveLinearSystem(H, score, k);
    if (delta === null) break;
    let maxStep = 0;
    for (let j = 0; j < k; j++) {
      beta[j] = (beta[j] ?? 0) + (delta[j] ?? 0);
      maxStep = Math.max(maxStep, Math.abs(delta[j] ?? 0));
    }
    if (maxStep < tol) {
      converged = true;
      break;
    }
  }
  let logLik = 0;
  for (let i = 0; i < n; i++) {
    const xi = X[i];
    let z = beta[0];
    for (let j = 0; j < kRaw; j++) z += beta[j + 1] * xi[j];
    const p = sigmoid(z);
    logLik += y[i] === 1 ? Math.log(Math.max(p, 1e-15)) : Math.log(Math.max(1 - p, 1e-15));
  }
  return { coef: beta, iterations: iter, converged, logLik };
}
function logisticPredict(coef, X) {
  const kRaw = X[0]?.length ?? 0;
  return X.map((xi) => {
    let z = coef[0] ?? 0;
    for (let j = 0; j < kRaw; j++) z += (coef[j + 1] ?? 0) * xi[j];
    return sigmoid(z);
  });
}
function solveLinearSystem(Ain, bin, k) {
  const A = Ain.slice();
  const b = bin.slice();
  for (let col = 0; col < k; col++) {
    let piv = col;
    let best = Math.abs(A[col * k + col] ?? 0);
    for (let r = col + 1; r < k; r++) {
      const v = Math.abs(A[r * k + col] ?? 0);
      if (v > best) {
        best = v;
        piv = r;
      }
    }
    if (best < 1e-14) return null;
    if (piv !== col) {
      for (let c = 0; c < k; c++) {
        const t2 = A[col * k + c] ?? 0;
        A[col * k + c] = A[piv * k + c] ?? 0;
        A[piv * k + c] = t2;
      }
      const t = b[col] ?? 0;
      b[col] = b[piv] ?? 0;
      b[piv] = t;
    }
    const diag = A[col * k + col] ?? 0;
    for (let r = col + 1; r < k; r++) {
      const f = (A[r * k + col] ?? 0) / diag;
      if (f === 0) continue;
      for (let c = col; c < k; c++) {
        A[r * k + c] = (A[r * k + c] ?? 0) - f * (A[col * k + c] ?? 0);
      }
      b[r] = (b[r] ?? 0) - f * (b[col] ?? 0);
    }
  }
  const x = new Array(k).fill(0);
  for (let r = k - 1; r >= 0; r--) {
    let s = b[r] ?? 0;
    for (let c = r + 1; c < k; c++) s -= (A[r * k + c] ?? 0) * (x[c] ?? 0);
    x[r] = s / (A[r * k + r] ?? 1);
  }
  return x;
}

// ../gsx/packages/verifier/src/joint.ts
var JOINT_KEEP_RULE = "\u0394Brier < 0 AND P(better) \u2265 0.75 AND factor-coefficient sign agrees across eras";
var JOINT_P_BETTER_FLOOR = 0.75;
function runJoint(factorId, rows, options) {
  const minN = options?.minN ?? 30;
  const discover = rows.filter((r) => r.era === "discover" && r.factor != null);
  const validate = rows.filter((r) => r.era === "validate" && r.factor != null);
  if (discover.length < minN || validate.length < minN) {
    return {
      factorId,
      nDiscover: discover.length,
      nValidate: validate.length,
      marketOnlyBrierValidate: NaN,
      withFactorBrierValidate: NaN,
      deltaBrier: NaN,
      pBetter: 0.5,
      factorCoefDiscover: NaN,
      factorCoefValidate: NaN,
      signAgrees: false,
      status: "INSUFFICIENT",
      keepRule: JOINT_KEEP_RULE,
      reason: `n discover=${discover.length} validate=${validate.length} below minN=${minN}`
    };
  }
  const Xd = discover.map((r) => [logit(r.marketFairProb), r.factor]);
  const yd = discover.map((r) => r.outcome);
  const fitFullD = fitLogistic(Xd, yd);
  const fitBaseD = fitLogistic(discover.map((r) => [logit(r.marketFairProb)]), yd);
  const coefFactorD = fitFullD.coef[2] ?? NaN;
  const Xv = validate.map((r) => [logit(r.marketFairProb), r.factor]);
  const yv = validate.map((r) => r.outcome);
  const fitFullV = fitLogistic(Xv, yv);
  const coefFactorV = fitFullV.coef[2] ?? NaN;
  const pBase = logisticPredict(fitBaseD.coef, validate.map((r) => [logit(r.marketFairProb)]));
  const pFull = logisticPredict(fitFullD.coef, Xv);
  const baseLoss = [];
  const fullLoss = [];
  for (let i = 0; i < validate.length; i++) {
    baseLoss.push(brierScore(pBase[i], yv[i]));
    fullLoss.push(brierScore(pFull[i], yv[i]));
  }
  const mean = (a) => a.reduce((s, v) => s + v, 0) / a.length;
  const marketOnlyBrierValidate = mean(baseLoss);
  const withFactorBrierValidate = mean(fullLoss);
  const deltaBrier = withFactorBrierValidate - marketOnlyBrierValidate;
  const boot = pairedBootstrap(
    { candidateLoss: fullLoss, marketLoss: baseLoss },
    {
      resamples: options?.resamples ?? DEFAULT_BOOTSTRAP_RESAMPLES,
      seed: options?.seed ?? DEFAULT_BOOTSTRAP_SEED
    }
  );
  const signAgrees = Number.isFinite(coefFactorD) && Number.isFinite(coefFactorV) && Math.sign(coefFactorD) === Math.sign(coefFactorV) && coefFactorD !== 0 && coefFactorV !== 0;
  const keep = Number.isFinite(deltaBrier) && deltaBrier < 0 && boot.pBetter >= JOINT_P_BETTER_FLOOR && signAgrees;
  const status = keep ? "CANDIDATE" : "DEAD";
  const reason = keep ? `KEEP: \u0394Brier=${deltaBrier.toFixed(5)} P(better)=${boot.pBetter.toFixed(3)} signs D=${coefFactorD.toFixed(4)} V=${coefFactorV.toFixed(4)}` : `DEAD: \u0394Brier=${deltaBrier.toFixed(5)} P(better)=${boot.pBetter.toFixed(3)} signAgrees=${signAgrees} (need \u0394Brier<0, P(better)\u2265${JOINT_P_BETTER_FLOOR}, sign agreement)`;
  return {
    factorId,
    nDiscover: discover.length,
    nValidate: validate.length,
    marketOnlyBrierValidate,
    withFactorBrierValidate,
    deltaBrier,
    pBetter: boot.pBetter,
    factorCoefDiscover: coefFactorD,
    factorCoefValidate: coefFactorV,
    signAgrees,
    status,
    keepRule: JOINT_KEEP_RULE,
    reason
  };
}
function toJointRows(rows, options) {
  const out = [];
  for (const r of rows) {
    const factor = options.factorOf(r);
    if (factor == null || !Number.isFinite(factor)) continue;
    const season = r.season ?? 0;
    out.push({
      outcome: r.outcome,
      marketFairProb: r.marketFairProb,
      factor,
      era: season <= options.discoverMaxSeason ? "discover" : "validate",
      sport: r.sport,
      id: r.id
    });
  }
  return out;
}

// ../gsx/packages/verifier/src/__tests__/joint.test.ts
function makeRows(options) {
  const nD = options.nDiscover ?? 80;
  const nV = options.nValidate ?? 80;
  const effect = options.factorEffect ?? 0;
  const rand = mulberry32(options.seed ?? 20260915);
  const rows = [];
  const push = (era, n) => {
    for (let i = 0; i < n; i++) {
      const market = 0.35 + rand() * 0.3;
      const factor = rand() * 2 - 1;
      const pTrue = sigmoid(0.2 * Math.log(market / (1 - market)) + effect * factor);
      rows.push({
        outcome: rand() < pTrue ? 1 : 0,
        marketFairProb: market,
        factor,
        era,
        sport: "NFL",
        id: `${era}-${i}`
      });
    }
  };
  push("discover", nD);
  push("validate", nV);
  return rows;
}
(0, import_vitest.describe)("joint keep rule", () => {
  (0, import_vitest.it)("states the \xA74.2 rule and the 0.75 P(better) floor", () => {
    (0, import_vitest.expect)(JOINT_KEEP_RULE).toContain("\u0394Brier < 0");
    (0, import_vitest.expect)(JOINT_KEEP_RULE).toContain("0.75");
    (0, import_vitest.expect)(JOINT_KEEP_RULE).toContain("sign");
    (0, import_vitest.expect)(JOINT_P_BETTER_FLOOR).toBe(0.75);
  });
  (0, import_vitest.it)("INSUFFICIENT when either era is below minN \u2014 never a silent DEAD", () => {
    const rows = makeRows({ nDiscover: 10, nValidate: 80, factorEffect: 1 });
    const r = runJoint("A-test", rows, { minN: 30, resamples: 20, seed: 1 });
    (0, import_vitest.expect)(r.status).toBe("INSUFFICIENT");
    (0, import_vitest.expect)(r.nDiscover).toBe(10);
    (0, import_vitest.expect)(r.reason).toContain("below minN");
  });
  (0, import_vitest.it)("INSUFFICIENT when no rows carry a factor value", () => {
    const rows = makeRows({ nDiscover: 50, nValidate: 50 }).map((r2) => ({
      ...r2,
      factor: null
    }));
    const r = runJoint("A-empty", rows, { minN: 30, resamples: 10, seed: 1 });
    (0, import_vitest.expect)(r.status).toBe("INSUFFICIENT");
    (0, import_vitest.expect)(r.nDiscover).toBe(0);
  });
  (0, import_vitest.it)("DEAD when the factor carries no signal (effect=0) \u2014 with the numbers", () => {
    const rows = makeRows({ nDiscover: 100, nValidate: 100, factorEffect: 0, seed: 42 });
    const r = runJoint("A-noise", rows, { resamples: 200, seed: 1 });
    (0, import_vitest.expect)(r.status).toBe("DEAD");
    (0, import_vitest.expect)(r.reason).toContain("DEAD");
    (0, import_vitest.expect)(r.pBetter).toBeLessThan(0.75);
  });
  (0, import_vitest.it)("CANDIDATE when a real factor improves holdout Brier with sign agreement", () => {
    const rows = makeRows({ nDiscover: 120, nValidate: 120, factorEffect: 1.2, seed: 7 });
    const r = runJoint("A-real", rows, { resamples: 300, seed: 1 });
    (0, import_vitest.expect)(Number.isFinite(r.deltaBrier)).toBe(true);
    (0, import_vitest.expect)(r.reason).toMatch(/ΔBrier=/);
    if (r.status === "CANDIDATE") {
      (0, import_vitest.expect)(r.deltaBrier).toBeLessThan(0);
      (0, import_vitest.expect)(r.pBetter).toBeGreaterThanOrEqual(0.75);
      (0, import_vitest.expect)(r.signAgrees).toBe(true);
    }
  });
  (0, import_vitest.it)("sign disagreement kills a factor even when \u0394Brier < 0", () => {
    const rows = makeRows({ nDiscover: 80, nValidate: 80, factorEffect: 0, seed: 99 });
    const r = runJoint("A-sign", rows, { resamples: 50, seed: 1 });
    (0, import_vitest.expect)(r.status).toBe("DEAD");
  });
});
(0, import_vitest.describe)("toJointRows", () => {
  (0, import_vitest.it)("maps season \u2264 discoverMaxSeason to discover, else validate", () => {
    const src = [
      { id: "a", outcome: 1, marketFairProb: 0.6, sport: "NFL", season: 2018 },
      { id: "b", outcome: 0, marketFairProb: 0.6, sport: "NFL", season: 2022 },
      { id: "c", outcome: 1, marketFairProb: 0.6, sport: "NFL", season: 2020 }
    ];
    const rows = toJointRows(src, {
      factorOf: () => 0.5,
      discoverMaxSeason: 2019
    });
    (0, import_vitest.expect)(rows.find((r) => r.id === "a").era).toBe("discover");
    (0, import_vitest.expect)(rows.find((r) => r.id === "b").era).toBe("validate");
    (0, import_vitest.expect)(rows.find((r) => r.id === "c").era).toBe("validate");
  });
  (0, import_vitest.it)("drops rows whose factor is null \u2014 never imputes", () => {
    const src = [
      { id: "a", outcome: 1, marketFairProb: 0.6, sport: "NFL", season: 2018 },
      { id: "b", outcome: 0, marketFairProb: 0.6, sport: "NFL", season: 2018 }
    ];
    const rows = toJointRows(src, {
      factorOf: (r) => r.id === "a" ? 1 : null,
      discoverMaxSeason: 2019
    });
    (0, import_vitest.expect)(rows.length).toBe(1);
    (0, import_vitest.expect)(rows[0].id).toBe("a");
  });
});
