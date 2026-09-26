"use strict";

// ../gsx/packages/verifier/src/__tests__/stats-pins.test.ts
var import_vitest = require("vitest");

// ../gsx/packages/verifier/src/stats.ts
var Z_95 = 1.959963984540054;
var DEFAULT_BOOTSTRAP_RESAMPLES = 1e3;
var DEFAULT_BOOTSTRAP_SEED = 20260915;
var LOG_LOSS_EPS = 1e-15;
function clamp01(p) {
  if (!Number.isFinite(p)) return 0;
  return Math.min(1, Math.max(0, p));
}
function brierScore(p, y) {
  const pp = clamp01(p);
  return (pp - y) ** 2;
}
function meanBrier(rows) {
  if (rows.length === 0) return NaN;
  let s = 0;
  for (const r of rows) s += brierScore(r.p, r.y);
  return s / rows.length;
}
function logLoss(p, y, eps = LOG_LOSS_EPS) {
  const pp = Math.min(1 - eps, Math.max(eps, p));
  return y === 1 ? -Math.log(pp) : -Math.log(1 - pp);
}
function meanLogLoss(rows, eps = LOG_LOSS_EPS) {
  if (rows.length === 0) return NaN;
  let s = 0;
  for (const r of rows) s += logLoss(r.p, r.y, eps);
  return s / rows.length;
}
function wilsonInterval(k, n, z = Z_95) {
  if (!Number.isFinite(n) || n <= 0) return null;
  const total = Math.floor(n);
  const successes = Math.min(total, Math.max(0, Math.floor(k)));
  const p = successes / total;
  const z2 = z * z;
  const denom = 1 + z2 / total;
  const center = (p + z2 / (2 * total)) / denom;
  const margin = z / denom * Math.sqrt(p * (1 - p) / total + z2 / (4 * total * total));
  return {
    successes,
    n: total,
    point: p,
    low: clamp01(center - margin),
    high: clamp01(center + margin),
    z
  };
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
function brierOf(p, y) {
  if (p.length === 0 || p.length !== y.length) return NaN;
  let s = 0;
  for (let i = 0; i < p.length; i++) s += brierScore(p[i], y[i]);
  return s / p.length;
}
function logLossOf(p, y) {
  if (p.length === 0 || p.length !== y.length) return NaN;
  let s = 0;
  for (let i = 0; i < p.length; i++) s += logLoss(p[i], y[i]);
  return s / p.length;
}

// ../gsx/packages/verifier/src/__tests__/stats-pins.test.ts
(0, import_vitest.describe)("Brier score", () => {
  (0, import_vitest.it)("is (p \u2212 y)\xB2 \u2014 hand-computed 0.04 / 0.36 / mean 0.22", () => {
    (0, import_vitest.expect)(brierScore(0.8, 1)).toBeCloseTo(0.04, 12);
    (0, import_vitest.expect)(brierScore(0.6, 0)).toBeCloseTo(0.36, 12);
    (0, import_vitest.expect)(meanBrier([{ p: 0.8, y: 1 }, { p: 0.6, y: 0 }])).toBeCloseTo(0.2, 12);
  });
  (0, import_vitest.it)("clamps p to [0,1] \u2014 p=1.5 y=1 reads as p=1 \u2192 Brier 0", () => {
    (0, import_vitest.expect)(brierScore(1.5, 1)).toBe(0);
    (0, import_vitest.expect)(brierScore(-0.2, 0)).toBe(0);
    (0, import_vitest.expect)(brierScore(1.5, 0)).toBe(1);
  });
  (0, import_vitest.it)("returns NaN on empty mean (never 0, which is a perfect forecast)", () => {
    (0, import_vitest.expect)(Number.isNaN(meanBrier([]))).toBe(true);
  });
});
(0, import_vitest.describe)("log-loss", () => {
  (0, import_vitest.it)("is \u2212log(p) on a win and \u2212log(1\u2212p) on a loss \u2014 hand-computed 0.2231435513", () => {
    (0, import_vitest.expect)(logLoss(0.8, 1)).toBeCloseTo(0.2231435513, 10);
    (0, import_vitest.expect)(logLoss(0.2, 0)).toBeCloseTo(0.2231435513, 10);
  });
  (0, import_vitest.it)("clamps p into (eps, 1\u2212eps) so a certain-wrong forecast is finite", () => {
    (0, import_vitest.expect)(logLoss(0, 1)).toBeCloseTo(-Math.log(1e-15), 10);
    (0, import_vitest.expect)(logLoss(0, 1)).toBeCloseTo(34.5387763949, 6);
    (0, import_vitest.expect)(logLoss(1, 0)).toBeGreaterThan(34);
    (0, import_vitest.expect)(logLoss(1, 0)).toBeLessThan(35);
    (0, import_vitest.expect)(Number.isFinite(logLoss(1, 0))).toBe(true);
  });
  (0, import_vitest.it)("mean of two identical forecasts equals the single value", () => {
    const v = logLoss(0.7, 1);
    (0, import_vitest.expect)(meanLogLoss([{ p: 0.7, y: 1 }, { p: 0.7, y: 1 }])).toBeCloseTo(v, 12);
    (0, import_vitest.expect)(Number.isNaN(meanLogLoss([]))).toBe(true);
  });
});
(0, import_vitest.describe)("Wilson score interval", () => {
  (0, import_vitest.it)("Wilson 9/20 is [0.2582, 0.6579] \u2014 textbook, matches apps/web pin", () => {
    const w = wilsonInterval(9, 20);
    (0, import_vitest.expect)(w.point).toBe(0.45);
    (0, import_vitest.expect)(w.low).toBeCloseTo(0.2582, 4);
    (0, import_vitest.expect)(w.high).toBeCloseTo(0.6579, 4);
    (0, import_vitest.expect)(w.successes).toBe(9);
    (0, import_vitest.expect)(w.n).toBe(20);
  });
  (0, import_vitest.it)("returns null at n=0 (no honest band)", () => {
    (0, import_vitest.expect)(wilsonInterval(0, 0)).toBeNull();
    (0, import_vitest.expect)(wilsonInterval(5, -1)).toBeNull();
  });
  (0, import_vitest.it)("0/10 has low clamped to 0 and a positive upper \u2014 never a zero-width band", () => {
    const w = wilsonInterval(0, 10);
    (0, import_vitest.expect)(w.low).toBe(0);
    (0, import_vitest.expect)(w.high).toBeGreaterThan(0.2);
    (0, import_vitest.expect)(w.high).toBeLessThan(0.35);
  });
  (0, import_vitest.it)("10/10 has high clamped to 1 and a low below 1", () => {
    const w = wilsonInterval(10, 10);
    (0, import_vitest.expect)(w.high).toBeGreaterThan(0.999);
    (0, import_vitest.expect)(w.high).toBeLessThanOrEqual(1);
    (0, import_vitest.expect)(w.low).toBeGreaterThan(0.6);
    (0, import_vitest.expect)(w.low).toBeLessThan(1);
  });
  (0, import_vitest.it)("uses z=1.959963984540054 by default (two-sided 95%)", () => {
    (0, import_vitest.expect)(Z_95).toBeCloseTo(1.959963984540054, 12);
  });
});
(0, import_vitest.describe)("mulberry32", () => {
  (0, import_vitest.it)("is deterministic: same seed \u2192 same first three draws", () => {
    const a = mulberry32(42);
    const b = mulberry32(42);
    const sa = [a(), a(), a()];
    const sb = [b(), b(), b()];
    (0, import_vitest.expect)(sa[0]).toBe(sb[0]);
    (0, import_vitest.expect)(sa[1]).toBe(sb[1]);
    (0, import_vitest.expect)(sa[2]).toBe(sb[2]);
    for (const v of sa) {
      (0, import_vitest.expect)(v).toBeGreaterThanOrEqual(0);
      (0, import_vitest.expect)(v).toBeLessThan(1);
    }
  });
  (0, import_vitest.it)("different seeds diverge", () => {
    const a = mulberry32(1);
    const b = mulberry32(2);
    (0, import_vitest.expect)(a()).not.toBe(b());
  });
});
(0, import_vitest.describe)("paired bootstrap", () => {
  (0, import_vitest.it)("P(better)=0 when candidate is strictly worse on every row", () => {
    const r = pairedBootstrap(
      { candidateLoss: [0.3, 0.4, 0.5], marketLoss: [0.1, 0.2, 0.3] },
      { resamples: 200, seed: 1 }
    );
    (0, import_vitest.expect)(r.pBetter).toBe(0);
    (0, import_vitest.expect)(r.delta).toBeCloseTo(0.2, 12);
    (0, import_vitest.expect)(r.n).toBe(3);
  });
  (0, import_vitest.it)("P(better)=1 when candidate is strictly better on every row", () => {
    const r = pairedBootstrap(
      { candidateLoss: [0.1, 0.2, 0.3], marketLoss: [0.3, 0.4, 0.5] },
      { resamples: 200, seed: 1 }
    );
    (0, import_vitest.expect)(r.pBetter).toBe(1);
    (0, import_vitest.expect)(r.delta).toBeCloseTo(-0.2, 12);
  });
  (0, import_vitest.it)("mean \u0394 is the full-sample mean difference \u2014 hand-computed 0.04", () => {
    const r = pairedBootstrap(
      {
        candidateLoss: [0.04, 0.36, 0.09, 0.01],
        marketLoss: [0.01, 0.25, 0.04, 0.04]
      },
      { resamples: 50, seed: 7 }
    );
    (0, import_vitest.expect)(r.delta).toBeCloseTo(0.04, 12);
  });
  (0, import_vitest.it)("length mismatch yields pBetter 0.5 and NaN delta \u2014 never a silent 0", () => {
    const r = pairedBootstrap(
      { candidateLoss: [0.1, 0.2], marketLoss: [0.1] },
      { resamples: 10, seed: 1 }
    );
    (0, import_vitest.expect)(r.pBetter).toBe(0.5);
    (0, import_vitest.expect)(Number.isNaN(r.delta)).toBe(true);
    (0, import_vitest.expect)(r.n).toBe(0);
  });
  (0, import_vitest.it)("is deterministic under a fixed seed", () => {
    const input = {
      candidateLoss: [0.2, 0.3, 0.25, 0.4, 0.15],
      marketLoss: [0.22, 0.28, 0.24, 0.35, 0.18]
    };
    const a = pairedBootstrap(input, { resamples: 100, seed: 99 });
    const b = pairedBootstrap(input, { resamples: 100, seed: 99 });
    (0, import_vitest.expect)(a.pBetter).toBe(b.pBetter);
    (0, import_vitest.expect)(a.delta).toBe(b.delta);
  });
});
(0, import_vitest.describe)("logit and sigmoid", () => {
  (0, import_vitest.it)("logit(0.6) = ln(1.5) = 0.4054651081", () => {
    (0, import_vitest.expect)(logit(0.6)).toBeCloseTo(Math.log(1.5), 12);
    (0, import_vitest.expect)(logit(0.6)).toBeCloseTo(0.4054651081, 8);
  });
  (0, import_vitest.it)("logit(0.5) = 0 and sigmoid(0) = 0.5", () => {
    (0, import_vitest.expect)(logit(0.5)).toBeCloseTo(0, 12);
    (0, import_vitest.expect)(sigmoid(0)).toBeCloseTo(0.5, 12);
  });
  (0, import_vitest.it)("sigmoid is the inverse of logit on the interior", () => {
    for (const p of [0.1, 0.3, 0.5, 0.7, 0.9]) {
      (0, import_vitest.expect)(sigmoid(logit(p))).toBeCloseTo(p, 10);
    }
  });
  (0, import_vitest.it)("clamps p away from {0,1} so logit never returns \xB1Infinity", () => {
    (0, import_vitest.expect)(Number.isFinite(logit(0))).toBe(true);
    (0, import_vitest.expect)(Number.isFinite(logit(1))).toBe(true);
    (0, import_vitest.expect)(Number.isFinite(logit(0.5))).toBe(true);
  });
});
(0, import_vitest.describe)("logistic fit", () => {
  (0, import_vitest.it)("intercept-only on 7/10 wins recovers logit(0.7) = 0.8472978604", () => {
    const X = Array.from({ length: 10 }, () => []);
    const y = [1, 1, 1, 1, 1, 1, 1, 0, 0, 0];
    const fit = fitLogistic(X, y);
    (0, import_vitest.expect)(fit.coef[0]).toBeCloseTo(0.8472978604, 6);
    (0, import_vitest.expect)(fit.converged).toBe(true);
  });
  (0, import_vitest.it)("recovers a known single-feature slope on a clean synthetic sample", () => {
    const rand = mulberry32(20260915);
    const X = [];
    const y = [];
    for (let i = 0; i < 400; i++) {
      const x = rand() * 2 - 1;
      const p = sigmoid(-0.5 + 1.5 * x);
      X.push([x]);
      y.push(rand() < p ? 1 : 0);
    }
    const fit = fitLogistic(X, y);
    (0, import_vitest.expect)(fit.coef[0]).toBeCloseTo(-0.5, 0);
    (0, import_vitest.expect)(fit.coef[1]).toBeCloseTo(1.5, 0);
  });
  (0, import_vitest.it)("logisticPredict applies coef[0] + coef[1]\xB7x through the sigmoid", () => {
    const p = logisticPredict([0, Math.log(3)], [[1]])[0];
    (0, import_vitest.expect)(p).toBeCloseTo(0.75, 10);
  });
  (0, import_vitest.it)("returns empty coef on empty input", () => {
    const fit = fitLogistic([], []);
    (0, import_vitest.expect)(fit.coef).toEqual([]);
    (0, import_vitest.expect)(fit.converged).toBe(false);
  });
});
(0, import_vitest.describe)("aggregate helpers", () => {
  (0, import_vitest.it)("brierOf / logLossOf match the scalar functions", () => {
    const p = [0.8, 0.6];
    const y = [1, 0];
    (0, import_vitest.expect)(brierOf(p, y)).toBeCloseTo(0.2, 12);
    (0, import_vitest.expect)(logLossOf(p, y)).toBeCloseTo((logLoss(0.8, 1) + logLoss(0.6, 0)) / 2, 12);
  });
  (0, import_vitest.it)("clamp01 maps non-finite to 0 and edges to themselves", () => {
    (0, import_vitest.expect)(clamp01(NaN)).toBe(0);
    (0, import_vitest.expect)(clamp01(Infinity)).toBe(0);
    (0, import_vitest.expect)(clamp01(-0.5)).toBe(0);
    (0, import_vitest.expect)(clamp01(1.5)).toBe(1);
    (0, import_vitest.expect)(clamp01(0.42)).toBe(0.42);
  });
});
