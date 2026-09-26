"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stats_exports = {};
__export(stats_exports, {
  DEFAULT_BOOTSTRAP_RESAMPLES: () => DEFAULT_BOOTSTRAP_RESAMPLES,
  DEFAULT_BOOTSTRAP_SEED: () => DEFAULT_BOOTSTRAP_SEED,
  LOG_LOSS_EPS: () => LOG_LOSS_EPS,
  Z_95: () => Z_95,
  brierOf: () => brierOf,
  brierScore: () => brierScore,
  clamp01: () => clamp01,
  fitLogistic: () => fitLogistic,
  logLoss: () => logLoss,
  logLossOf: () => logLossOf,
  logisticPredict: () => logisticPredict,
  logit: () => logit,
  meanBrier: () => meanBrier,
  meanLogLoss: () => meanLogLoss,
  mulberry32: () => mulberry32,
  pairedBootstrap: () => pairedBootstrap,
  sigmoid: () => sigmoid,
  wilsonInterval: () => wilsonInterval
});
module.exports = __toCommonJS(stats_exports);
const Z_95 = 1.959963984540054;
const DEFAULT_BOOTSTRAP_RESAMPLES = 1e3;
const DEFAULT_BOOTSTRAP_SEED = 20260915;
const LOG_LOSS_EPS = 1e-15;
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
