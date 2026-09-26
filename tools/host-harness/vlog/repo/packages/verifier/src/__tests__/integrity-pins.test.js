"use strict";

// ../gsx/packages/verifier/src/__tests__/integrity-pins.test.ts
var import_vitest = require("vitest");

// ../gsx/packages/verifier/src/stats.ts
var DEFAULT_BOOTSTRAP_RESAMPLES = 1e3;
var DEFAULT_BOOTSTRAP_SEED = 20260915;
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

// ../gsx/packages/verifier/src/integrity.ts
function quantile(sorted, q) {
  if (sorted.length === 0) return NaN;
  if (sorted.length === 1) return sorted[0];
  const pos = (sorted.length - 1) * q;
  const lo = Math.floor(pos);
  const hi = Math.ceil(pos);
  if (lo === hi) return sorted[lo];
  return sorted[lo] + (sorted[hi] - sorted[lo]) * (pos - lo);
}
function clusterBootstrap(input, options) {
  const a = input.candidateLoss;
  const b = input.marketLoss;
  const c = input.clusterId;
  const resamples = Math.max(1, Math.floor(options?.resamples ?? 1e3));
  const seed = options?.seed ?? 20260915;
  const alpha = options?.alpha ?? 0.05;
  const empty = {
    pBetter: 0.5,
    delta: NaN,
    ciLow: NaN,
    ciHigh: NaN,
    resamples,
    seed,
    n: 0,
    clusters: 0,
    meanClusterSize: NaN
  };
  if (a.length === 0 || a.length !== b.length || a.length !== c.length) return empty;
  const order = [];
  const members = /* @__PURE__ */ new Map();
  for (let i = 0; i < a.length; i++) {
    const id = c[i];
    if (!members.has(id)) {
      members.set(id, []);
      order.push(id);
    }
    members.get(id).push(i);
  }
  const k = order.length;
  const n = a.length;
  let fullSum = 0;
  for (let i = 0; i < n; i++) fullSum += a[i] - b[i];
  const full = fullSum / n;
  const rand = mulberry32(seed);
  const deltas = [];
  let better = 0;
  for (let r = 0; r < resamples; r++) {
    let sa = 0;
    let sb = 0;
    let count = 0;
    for (let cIdx = 0; cIdx < k; cIdx++) {
      const id = order[Math.floor(rand() * k)];
      const idx = members.get(id);
      for (const i of idx) {
        sa += a[i];
        sb += b[i];
        count++;
      }
    }
    const ma = sa / count;
    const mb = sb / count;
    deltas.push(ma - mb);
    if (ma < mb) better += 1;
  }
  deltas.sort((x, y) => x - y);
  return {
    delta: full,
    pBetter: better / resamples,
    ciLow: quantile(deltas, alpha / 2),
    ciHigh: quantile(deltas, 1 - alpha / 2),
    resamples,
    seed,
    n,
    clusters: k,
    meanClusterSize: n / k
  };
}
function decide(r, options) {
  const minClusters = options?.minClusters ?? 5;
  const tol = options?.tol ?? 0;
  if (r.n === 0) {
    return { verdict: "indistinguishable", ciExcludesZero: false, pBetter: r.pBetter, delta: r.delta, ciLow: r.ciLow, ciHigh: r.ciHigh, tooFewClusters: true };
  }
  const tooFew = r.clusters < minClusters;
  const excludesZero = r.ciLow > tol ? true : r.ciHigh < -tol ? true : false;
  const pointBetter = r.delta < -tol;
  let verdict;
  if (tooFew) verdict = "indistinguishable";
  else if (!excludesZero) verdict = pointBetter ? "directional-better" : r.delta > tol ? "directional-worse" : "indistinguishable";
  else verdict = pointBetter ? "decisive-better" : "decisive-worse";
  return { verdict, ciExcludesZero: excludesZero, pBetter: r.pBetter, delta: r.delta, ciLow: r.ciLow, ciHigh: r.ciHigh, tooFewClusters: tooFew };
}
function pairedWinRate(candidateLoss, marketLoss) {
  const n = Math.min(candidateLoss.length, marketLoss.length);
  if (n === 0) return NaN;
  let better = 0;
  for (let i = 0; i < n; i++) if (candidateLoss[i] < marketLoss[i]) better += 1;
  return better / n;
}
function relabelingNull(input, options) {
  const a = input.candidateLoss;
  const b = input.marketLoss;
  const resamples = Math.max(1, Math.floor(options?.resamples ?? 1e3));
  const alpha = options?.alpha ?? 0.05;
  const seed = options?.seed ?? 20260915;
  const n = a.length;
  const fail = {
    observedWinRate: NaN,
    nullWinRates: [],
    pValue: NaN,
    bestNullWinRate: NaN,
    survivesRelabeling: false,
    alpha,
    resamples,
    seed,
    n: 0
  };
  if (n === 0 || a.length !== b.length || a.length !== input.clusterId.length) return fail;
  const observed = pairedWinRate(a, b);
  const shuffled = b.slice();
  const rand = mulberry32(seed);
  const nulls = [];
  for (let r = 0; r < resamples; r++) {
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      const t = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = t;
    }
    nulls.push(pairedWinRate(a, shuffled));
  }
  const atLeastAsGood = nulls.filter((v) => v >= observed).length;
  let best = 0;
  for (const v of nulls) if (v > best) best = v;
  const worse = nulls.filter((v) => v < observed).length;
  return {
    observedWinRate: observed,
    nullWinRates: nulls,
    pValue: (1 + atLeastAsGood) / (resamples + 1),
    bestNullWinRate: best,
    survivesRelabeling: worse / resamples <= alpha,
    alpha,
    resamples,
    seed,
    n
  };
}

// ../gsx/packages/verifier/src/__tests__/integrity-pins.test.ts
function sixGames() {
  const candidateLoss = [];
  const marketLoss = [];
  const clusterId = [];
  for (let g = 0; g < 6; g++) {
    for (let r = 0; r < 4; r++) {
      candidateLoss.push(0.2);
      marketLoss.push(0.3);
      clusterId.push(`g${g}`);
    }
  }
  return { candidateLoss, marketLoss, clusterId };
}
(0, import_vitest.describe)("clusterBootstrap", () => {
  (0, import_vitest.it)("delta is the full-sample mean difference", () => {
    (0, import_vitest.expect)(clusterBootstrap(sixGames(), { resamples: 200 }).delta).toBeCloseTo(-0.1, 12);
  });
  (0, import_vitest.it)("reports pBetter = 1 when the candidate wins in every cluster", () => {
    (0, import_vitest.expect)(clusterBootstrap(sixGames(), { resamples: 200 }).pBetter).toBe(1);
  });
  (0, import_vitest.it)("counts clusters, not rows", () => {
    const r = clusterBootstrap(sixGames(), { resamples: 200 });
    (0, import_vitest.expect)(r.n).toBe(24);
    (0, import_vitest.expect)(r.clusters).toBe(6);
    (0, import_vitest.expect)(r.meanClusterSize).toBeCloseTo(4, 12);
  });
  (0, import_vitest.it)("is deterministic under a fixed seed", () => {
    const a = clusterBootstrap(sixGames(), { resamples: 200, seed: 5 });
    const b = clusterBootstrap(sixGames(), { resamples: 200, seed: 5 });
    (0, import_vitest.expect)(JSON.stringify(a)).toBe(JSON.stringify(b));
  });
  (0, import_vitest.it)("is wider than the row-level bootstrap when the edge lives in a few games", () => {
    const candidateLoss = [];
    const marketLoss = [];
    const clusterId = [];
    for (let g = 0; g < 6; g++) {
      const edge = g < 2 ? 0 : 0.2;
      for (let r = 0; r < 4; r++) {
        candidateLoss.push(0.5 - edge);
        marketLoss.push(0.5);
        clusterId.push(`g${g}`);
      }
    }
    const input = { candidateLoss, marketLoss, clusterId };
    const clustered = clusterBootstrap(input, { resamples: 2e3, seed: 11 });
    const rowwise = pairedBootstrap(input, { resamples: 2e3, seed: 11 });
    (0, import_vitest.expect)(rowwise.delta).toBeCloseTo(clustered.delta, 12);
    (0, import_vitest.expect)(clustered.ciLow).toBeLessThan(rowwise.delta - 1e-6);
  });
  (0, import_vitest.it)("refuses a length mismatch rather than truncating into a result", () => {
    const r = clusterBootstrap(
      { candidateLoss: [0.1], marketLoss: [0.2, 0.3], clusterId: ["a", "b"] },
      { resamples: 50 }
    );
    (0, import_vitest.expect)(r.n).toBe(0);
    (0, import_vitest.expect)(r.delta).toBeNaN();
    (0, import_vitest.expect)(r.pBetter).toBe(0.5);
  });
  (0, import_vitest.it)("keeps the interval ordered", () => {
    const r = clusterBootstrap(sixGames(), { resamples: 500 });
    (0, import_vitest.expect)(r.ciLow).toBeLessThanOrEqual(r.ciHigh);
  });
});
(0, import_vitest.describe)("decide \u2014 the paper's reporting rule", () => {
  (0, import_vitest.it)("calls a uniformly better candidate decisive when the interval excludes zero", () => {
    const d = decide(clusterBootstrap(sixGames(), { resamples: 2e3 }));
    (0, import_vitest.expect)(d.verdict).toBe("decisive-better");
    (0, import_vitest.expect)(d.ciExcludesZero).toBe(true);
  });
  (0, import_vitest.it)("calls a comparison with ONE cluster indistinguishable, not decisive", () => {
    const single = {
      candidateLoss: Array.from({ length: 24 }, () => 0.2),
      marketLoss: Array.from({ length: 24 }, () => 0.3),
      clusterId: Array.from({ length: 24 }, () => "only-game")
    };
    const r = clusterBootstrap(single, { resamples: 2e3 });
    (0, import_vitest.expect)(r.clusters).toBe(1);
    (0, import_vitest.expect)(r.pBetter).toBe(1);
    const d = decide(r);
    (0, import_vitest.expect)(d.tooFewClusters).toBe(true);
    (0, import_vitest.expect)(d.verdict).toBe("indistinguishable");
  });
  (0, import_vitest.it)("calls a positive point estimate with an interval over zero directional", () => {
    const candidateLoss = [];
    const marketLoss = [];
    const clusterId = [];
    for (let g = 0; g < 8; g++) {
      for (let r = 0; r < 4; r++) {
        const swing = g % 2 === 0 ? 0.06 : -0.04;
        candidateLoss.push(0.5 - swing);
        marketLoss.push(0.5);
        clusterId.push(`g${g}`);
      }
    }
    const d = decide(clusterBootstrap({ candidateLoss, marketLoss, clusterId }, { resamples: 2e3, seed: 3 }));
    (0, import_vitest.expect)(d.delta).toBeLessThan(0);
    (0, import_vitest.expect)(d.ciExcludesZero).toBe(false);
    (0, import_vitest.expect)(d.verdict).toBe("directional-better");
  });
  (0, import_vitest.it)("is indistinguishable on an empty sample", () => {
    const d = decide(clusterBootstrap({ candidateLoss: [], marketLoss: [], clusterId: [] }));
    (0, import_vitest.expect)(d.verdict).toBe("indistinguishable");
  });
});
(0, import_vitest.describe)("relabelingNull", () => {
  function robustEdge() {
    return {
      candidateLoss: Array.from({ length: 20 }, (_, i) => 0.1 + i % 5 * 0.01),
      marketLoss: Array.from({ length: 20 }, (_, i) => 0.5 + i % 5 * 0.01),
      clusterId: Array.from({ length: 20 }, (_, i) => `g${i % 5}`)
    };
  }
  function luckyArrangement() {
    const marketLoss = [0.1, 0.2, 0.3, 0.4, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5];
    const candidateLoss = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.5, 0.5, 0.5, 0.5];
    return { candidateLoss, marketLoss, clusterId: marketLoss.map((_, i) => `g${i}`) };
  }
  (0, import_vitest.it)("measures the row-wise hit rate, which is the pairing-dependent statistic", () => {
    (0, import_vitest.expect)(pairedWinRate([0.1, 0.5], [0.2, 0.4])).toBeCloseTo(0.5, 12);
    (0, import_vitest.expect)(pairedWinRate([], [])).toBeNaN();
  });
  (0, import_vitest.it)("a robustly better candidate SURVIVES relabeling", () => {
    const r = relabelingNull(robustEdge(), { resamples: 200, seed: 13 });
    (0, import_vitest.expect)(r.observedWinRate).toBe(1);
    (0, import_vitest.expect)(r.survivesRelabeling).toBe(true);
    (0, import_vitest.expect)(r.pValue).toBeGreaterThan(0.9);
  });
  (0, import_vitest.it)("a lucky arrangement does NOT survive relabeling, and the p-value says why", () => {
    const r = relabelingNull(luckyArrangement(), { resamples: 400, seed: 17 });
    (0, import_vitest.expect)(r.observedWinRate).toBeCloseTo(0.5, 12);
    (0, import_vitest.expect)(r.pValue).toBeLessThan(0.5);
    (0, import_vitest.expect)(r.bestNullWinRate).toBeGreaterThanOrEqual(r.observedWinRate);
    (0, import_vitest.expect)(r.survivesRelabeling).toBe(false);
  });
  (0, import_vitest.it)("cannot report p = 0 \u2014 the +1 correction keeps the floor honest", () => {
    const r = relabelingNull(luckyArrangement(), { resamples: 200, seed: 3 });
    (0, import_vitest.expect)(r.pValue).toBeGreaterThan(0);
    (0, import_vitest.expect)(r.pValue).toBeGreaterThanOrEqual(1 / 201);
  });
  (0, import_vitest.it)("reports the strongest null so a borderline claim can show its worst case", () => {
    const r = relabelingNull(robustEdge(), { resamples: 100, seed: 21 });
    (0, import_vitest.expect)(r.nullWinRates.length).toBe(100);
    (0, import_vitest.expect)(r.bestNullWinRate).toBeGreaterThanOrEqual(Math.min(...r.nullWinRates));
  });
  (0, import_vitest.it)("is deterministic under a fixed seed", () => {
    const a = relabelingNull(robustEdge(), { resamples: 50, seed: 4 });
    const b = relabelingNull(robustEdge(), { resamples: 50, seed: 4 });
    (0, import_vitest.expect)(a.pValue).toBe(b.pValue);
    (0, import_vitest.expect)(a.nullWinRates).toEqual(b.nullWinRates);
  });
  (0, import_vitest.it)("refuses a length mismatch", () => {
    const r = relabelingNull({ candidateLoss: [0.1], marketLoss: [0.2, 0.3], clusterId: ["a"] });
    (0, import_vitest.expect)(r.n).toBe(0);
    (0, import_vitest.expect)(r.pValue).toBeNaN();
  });
});
