"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../gsx/packages/verifier/src/__tests__/duel.test.ts
var import_vitest = require("vitest");
var import_node_path = __toESM(require("node:path"));
var import_node_fs = require("node:fs");

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
function logLoss(p, y, eps = LOG_LOSS_EPS) {
  const pp = Math.min(1 - eps, Math.max(eps, p));
  return y === 1 ? -Math.log(pp) : -Math.log(1 - pp);
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

// ../gsx/packages/verifier/src/calibration.ts
var MIN_CALIBRATION_N = 20;
var DEFAULT_CALIBRATION_BINS = 10;
function reliabilityCurve(rows, bins = DEFAULT_CALIBRATION_BINS) {
  const k = Math.max(1, Math.floor(bins));
  const out = [];
  for (let b = 0; b < k; b++) {
    const lo = b / k;
    const hi = (b + 1) / k;
    let n = 0;
    let sumP = 0;
    let sumY = 0;
    for (const r of rows) {
      const p = Math.min(1, Math.max(0, r.p));
      const inBucket = b === k - 1 ? p >= lo && p <= hi : p >= lo && p < hi;
      if (!inBucket) continue;
      n += 1;
      sumP += p;
      sumY += r.y;
    }
    if (n === 0) {
      out.push({ lo, hi, n: 0, meanP: NaN, observedRate: NaN, gap: NaN, band: null, exceedsBand: false });
      continue;
    }
    const meanP = sumP / n;
    const observedRate = sumY / n;
    const band = wilsonInterval(sumY, n);
    out.push({
      lo,
      hi,
      n,
      meanP,
      observedRate,
      gap: meanP - observedRate,
      band: band ? { low: band.low, high: band.high } : null,
      exceedsBand: band ? meanP < band.low || meanP > band.high : false
    });
  }
  return out;
}
function expectedCalibrationError(rows, bins = DEFAULT_CALIBRATION_BINS) {
  const n = rows.length;
  if (n === 0) return NaN;
  let acc = 0;
  for (const b of reliabilityCurve(rows, bins)) {
    if (b.n === 0) continue;
    acc += b.n / n * Math.abs(b.gap);
  }
  return acc;
}
function maximumCalibrationError(rows, bins = DEFAULT_CALIBRATION_BINS) {
  let worst = 0;
  let seen = false;
  for (const b of reliabilityCurve(rows, bins)) {
    if (b.n === 0) continue;
    seen = true;
    worst = Math.max(worst, Math.abs(b.gap));
  }
  return seen ? worst : NaN;
}
function accuracy(rows) {
  if (rows.length === 0) return NaN;
  let s = 0;
  for (const r of rows) s += r.y;
  return s / rows.length;
}
function resolution(rows, bins = DEFAULT_CALIBRATION_BINS) {
  const n = rows.length;
  if (n === 0) return NaN;
  const base = accuracy(rows);
  let acc = 0;
  for (const b of reliabilityCurve(rows, bins)) {
    if (b.n === 0) continue;
    acc += b.n / n * (b.observedRate - base) ** 2;
  }
  return acc;
}
function compareCalibration(candidate, market, options) {
  const bins = options?.bins ?? DEFAULT_CALIBRATION_BINS;
  const tol = options?.tol ?? 1e-12;
  const n = Math.min(candidate.length, market.length);
  const candBrier = brierOfRows(candidate);
  const marketBrier = brierOfRows(market);
  const deltaBrier = candBrier - marketBrier;
  const candEce = expectedCalibrationError(candidate, bins);
  const marketEce = expectedCalibrationError(market, bins);
  const deltaEce = candEce - marketEce;
  const deltaMce = maximumCalibrationError(candidate, bins) - maximumCalibrationError(market, bins);
  const deltaResolution = resolution(candidate, bins) - resolution(market, bins);
  const curve = reliabilityCurve(candidate, bins);
  const marketCurve = reliabilityCurve(market, bins);
  const offBand = (c) => c.filter((b) => b.n > 0 && b.exceedsBand).length;
  let worst = null;
  for (const b of curve) {
    if (b.n === 0) continue;
    if (worst === null || Math.abs(b.gap) > Math.abs(worst.gap)) worst = b;
  }
  const brierDirection = Math.abs(deltaBrier) <= tol ? "tied" : deltaBrier < 0 ? "candidate-better" : "market-better";
  let diagnosis;
  if (n < MIN_CALIBRATION_N) diagnosis = "n-too-small";
  else if (brierDirection === "candidate-better") {
    diagnosis = deltaEce <= tol ? "calibrated-and-better" : "reliability-gap";
  } else if (brierDirection === "tied") {
    diagnosis = "calibrated-and-better";
  } else {
    diagnosis = deltaEce <= tol && deltaMce <= tol ? "resolution-limited" : "reliability-gap";
  }
  return {
    deltaBrier,
    deltaEce,
    deltaMce,
    deltaResolution,
    brierDirection,
    diagnosis,
    candidateOffBandBuckets: offBand(curve),
    marketOffBandBuckets: offBand(marketCurve),
    worstBucket: worst
  };
}
function brierOfRows(rows) {
  if (rows.length === 0) return NaN;
  let s = 0;
  for (const r of rows) s += (r.p - r.y) ** 2;
  return s / rows.length;
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

// ../gsx/packages/verifier/src/scorecard.ts
function toScoredRows(rows, options) {
  const requireModel = options?.requireModelProb ?? true;
  const out = [];
  for (const r of rows) {
    if (r.outcome !== 0 && r.outcome !== 1) continue;
    if (!(r.marketFairProb > 0 && r.marketFairProb < 1)) continue;
    if (requireModel) {
      if (r.modelProb == null || !(r.modelProb > 0 && r.modelProb < 1)) continue;
    }
    out.push({
      p: r.modelProb ?? r.marketFairProb,
      y: r.outcome,
      sport: r.sport,
      market: r.market,
      modelVersion: r.modelVersion,
      id: r.id
    });
  }
  return out;
}
function buildScorecard(rows, options) {
  const scored = toScoredRows(rows, { requireModelProb: true });
  const n = scored.length;
  if (n === 0) {
    return emptyScorecard(options?.label ?? "empty", "n=0 on identical rows (no modelProb)");
  }
  const candidateLoss = [];
  const marketLoss = [];
  const candidateLog = [];
  const marketLog = [];
  let wins = 0;
  for (let i = 0; i < n; i++) {
    const row2 = scored[i];
    const src = rows.find((r) => r.id === row2.id);
    const cp = src.modelProb;
    const mp = src.marketFairProb;
    const y = src.outcome;
    candidateLoss.push(brierScore(cp, y));
    marketLoss.push(brierScore(mp, y));
    candidateLog.push(logLoss(cp, y));
    marketLog.push(logLoss(mp, y));
    if (y === 1) wins += 1;
  }
  const mean = (a) => a.reduce((s, v) => s + v, 0) / a.length;
  const candidateBrier = mean(candidateLoss);
  const marketBrier = mean(marketLoss);
  const candidateLogLoss = mean(candidateLog);
  const marketLogLoss = mean(marketLog);
  const boot = pairedBootstrap(
    { candidateLoss, marketLoss },
    {
      resamples: options?.resamples ?? DEFAULT_BOOTSTRAP_RESAMPLES,
      seed: options?.seed ?? DEFAULT_BOOTSTRAP_SEED
    }
  );
  const bySportMap = /* @__PURE__ */ new Map();
  for (const r of rows) {
    if (r.modelProb == null || !(r.modelProb > 0 && r.modelProb < 1)) continue;
    const arr = bySportMap.get(r.sport) ?? [];
    arr.push(r);
    bySportMap.set(r.sport, arr);
  }
  const bySport = [];
  for (const [sport, srows] of [...bySportMap.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    const cL = [];
    const mL = [];
    for (const r of srows) {
      cL.push(brierScore(r.modelProb, r.outcome));
      mL.push(brierScore(r.marketFairProb, r.outcome));
    }
    const sp = pairedBootstrap(
      { candidateLoss: cL, marketLoss: mL },
      {
        resamples: options?.resamples ?? DEFAULT_BOOTSTRAP_RESAMPLES,
        seed: options?.seed ?? DEFAULT_BOOTSTRAP_SEED
      }
    );
    bySport.push({
      sport,
      n: srows.length,
      candidateBrier: mean(cL),
      marketBrier: mean(mL),
      deltaBrier: sp.delta,
      pBetter: sp.pBetter
    });
  }
  const wilson = (() => {
    const w = wilsonInterval(wins, n);
    if (!w) return null;
    return {
      successes: w.successes,
      n: w.n,
      point: w.point,
      low: w.low,
      high: w.high,
      z: w.z
    };
  })();
  const expectWorse = options?.expectCandidateWorse ?? false;
  const harnessOk = expectWorse ? candidateBrier > marketBrier : true;
  const harnessNote = expectWorse ? harnessOk ? `harness OK: candidate Brier ${candidateBrier.toFixed(5)} > market ${marketBrier.toFixed(5)} on n=${n}` : `HARNESS WRONG: candidate Brier ${candidateBrier.toFixed(5)} <= market ${marketBrier.toFixed(5)} on n=${n} \u2014 a historical version beat market on PICKS-H1` : `scorecard (no harness expectation): \u0394Brier=${(candidateBrier - marketBrier).toFixed(5)} P(better)=${boot.pBetter.toFixed(3)} n=${n}`;
  const candidateRows = [];
  const marketRows = [];
  const clusterIds = [];
  for (let i = 0; i < n; i++) {
    const src = rows.find((r) => r.id === scored[i].id);
    candidateRows.push({ p: src.modelProb, y: src.outcome });
    marketRows.push({ p: src.marketFairProb, y: src.outcome });
    clusterIds.push(options?.clusterIdOf ? options.clusterIdOf(src) : `export:${scored[i].id}`);
  }
  const bins = options?.calibrationBins ?? DEFAULT_CALIBRATION_BINS;
  const verdict = compareCalibration(candidateRows, marketRows, { bins });
  const clustered = clusterBootstrap(
    { candidateLoss, marketLoss, clusterId: clusterIds },
    { resamples: options?.resamples ?? DEFAULT_BOOTSTRAP_RESAMPLES, seed: options?.seed ?? DEFAULT_BOOTSTRAP_SEED }
  );
  const clusterDecision = decide(clustered);
  const clusterNote = options?.clusterIdOf ? `game-level bootstrap over ${clustered.clusters} cluster(s)` : `no clusterIdOf supplied: the whole export counts as ONE cluster (${clustered.clusters}), so no row-level independence is assumed. Pass options.clusterIdOf (e.g. game id) for a real interval.`;
  return {
    n,
    candidateBrier,
    marketBrier,
    deltaBrier: candidateBrier - marketBrier,
    candidateLogLoss,
    marketLogLoss,
    deltaLogLoss: candidateLogLoss - marketLogLoss,
    pBetter: boot.pBetter,
    pBetterResamples: boot.resamples,
    pBetterSeed: boot.seed,
    bySport,
    wilson,
    candidateEce: expectedCalibrationError(candidateRows, bins),
    marketEce: expectedCalibrationError(marketRows, bins),
    candidateMce: maximumCalibrationError(candidateRows, bins),
    marketMce: maximumCalibrationError(marketRows, bins),
    candidateResolution: resolution(candidateRows, bins),
    marketResolution: resolution(marketRows, bins),
    calibrationBins: bins,
    calibrationDiagnosis: verdict.diagnosis,
    clusterVerdict: clusterDecision.verdict,
    clusterNote,
    harnessOk,
    harnessNote
  };
}
function emptyScorecard(label, note) {
  return {
    n: 0,
    candidateBrier: NaN,
    marketBrier: NaN,
    deltaBrier: NaN,
    candidateLogLoss: NaN,
    marketLogLoss: NaN,
    deltaLogLoss: NaN,
    pBetter: 0.5,
    pBetterResamples: 0,
    pBetterSeed: DEFAULT_BOOTSTRAP_SEED,
    bySport: [],
    wilson: null,
    candidateEce: NaN,
    marketEce: NaN,
    candidateMce: NaN,
    marketMce: NaN,
    candidateResolution: NaN,
    marketResolution: NaN,
    calibrationBins: DEFAULT_CALIBRATION_BINS,
    calibrationDiagnosis: "n-too-small",
    clusterVerdict: "indistinguishable",
    clusterNote: `${label}: ${note}`,
    harnessOk: false,
    harnessNote: `${label}: ${note}`
  };
}

// ../gsx/packages/verifier/src/duel.ts
var DUEL_KEEP_RULE = "\u0394Brier < 0 AND P(better) \u2265 0.75 on identical PICKS-H1 rows vs marketFairProb";
function duel(rows, options) {
  const candidateProb = options?.candidateProb;
  const prepared = candidateProb ? rows.map((r) => {
    const p = candidateProb(r);
    return p == null || !(p > 0 && p < 1) ? r : { ...r, modelProb: p };
  }) : [...rows];
  const scorecard = buildScorecard(prepared, {
    ...options,
    // A duel is a candidate test, not the historical re-grade harness.
    expectCandidateWorse: options?.expectCandidateWorse ?? false
  });
  const passesKeepRule = Number.isFinite(scorecard.deltaBrier) && scorecard.deltaBrier < 0 && scorecard.pBetter >= 0.75;
  return {
    holdoutId: options?.holdoutId ?? "PICKS-H1",
    candidateLabel: options?.candidateLabel ?? "candidate",
    baselineLabel: options?.baselineLabel ?? "market-anchored (marketFairProb)",
    scorecard,
    passesKeepRule,
    keepRule: DUEL_KEEP_RULE
  };
}
function regradeVersions(rows, versions, options) {
  const out = [];
  for (const v of versions) {
    const vrows = rows.filter((r) => r.modelVersion === v);
    if (vrows.length === 0) continue;
    const sc = buildScorecard(vrows, {
      ...options,
      expectCandidateWorse: true,
      label: v
    });
    out.push({
      modelVersion: v,
      n: sc.n,
      scorecard: sc,
      beatsMarket: Number.isFinite(sc.deltaBrier) && sc.deltaBrier < 0
    });
  }
  return out;
}

// ../gsx/packages/verifier/src/holdout.ts
var PICKS_H1_CUTOFF = "2026-08-01T00:00:00.000Z";
var RE_GRADED_MODEL_VERSIONS = [
  "v5.0.0",
  "v5.0.0-seed",
  "v5.1.0",
  "v5.2.0",
  "v5.2.1",
  "v5.2.2",
  "v5.2.3",
  "v5.2.4",
  "v5.2.5",
  "v5.2.6",
  "v5.2.7"
];
function parsePicksH1Export(raw) {
  if (typeof raw !== "object" || raw === null) {
    throw new Error("picks-h1 export must be a JSON object");
  }
  const doc = raw;
  const rowsRaw = doc["rows"];
  if (!Array.isArray(rowsRaw)) {
    throw new Error("picks-h1 export missing rows[]");
  }
  const rows = rowsRaw.map((r, i) => parseRow(r, i));
  const holdoutId = doc["holdoutId"] ?? "PICKS-H1";
  if (holdoutId !== "PICKS-H1" && holdoutId !== "NFL-H2") {
    throw new Error(`unknown holdoutId: ${String(holdoutId)}`);
  }
  return {
    holdoutId,
    generatedAt: String(doc["generatedAt"] ?? (/* @__PURE__ */ new Date(0)).toISOString()),
    schemaVersion: 1,
    rows,
    source: doc["source"] === void 0 ? void 0 : String(doc["source"])
  };
}
function parseRow(raw, i) {
  if (typeof raw !== "object" || raw === null) {
    throw new Error(`rows[${i}] must be an object`);
  }
  const r = raw;
  const outcome = r["outcome"];
  if (outcome !== 0 && outcome !== 1) {
    throw new Error(`rows[${i}].outcome must be 0 or 1`);
  }
  const mfp = r["marketFairProb"];
  if (typeof mfp !== "number" || !(mfp > 0 && mfp < 1)) {
    throw new Error(`rows[${i}].marketFairProb must be in (0,1)`);
  }
  const mp = r["modelProb"];
  if (mp !== null && (typeof mp !== "number" || !(mp > 0 && mp < 1))) {
    throw new Error(`rows[${i}].modelProb must be null or in (0,1)`);
  }
  return {
    id: String(r["id"] ?? `row-${i}`),
    sport: String(r["sport"] ?? "UNKNOWN"),
    market: String(r["market"] ?? "UNKNOWN"),
    outcome,
    marketFairProb: mfp,
    modelProb: mp === void 0 ? null : mp,
    confidence: r["confidence"] === null || r["confidence"] === void 0 ? null : Number(r["confidence"]),
    modelVersion: String(r["modelVersion"] ?? "unknown"),
    generatedAt: String(r["generatedAt"] ?? ""),
    isFounder: Boolean(r["isFounder"] ?? false),
    isPublished: Boolean(r["isPublished"] ?? true),
    isSettled: Boolean(r["isSettled"] ?? true),
    season: r["season"] === void 0 || r["season"] === null ? null : Number(r["season"])
  };
}
function isPicksH1(row2, cutoff = PICKS_H1_CUTOFF) {
  if (row2.isFounder) return false;
  if (!row2.isSettled) return false;
  if (!row2.isPublished) return false;
  if (row2.outcome !== 0 && row2.outcome !== 1) return false;
  if (!(row2.marketFairProb > 0 && row2.marketFairProb < 1)) return false;
  return row2.generatedAt >= cutoff;
}
function selectPicksH1(rows, cutoff = PICKS_H1_CUTOFF) {
  return rows.filter((r) => isPicksH1(r, cutoff));
}

// ../gsx/packages/verifier/src/__tests__/duel.test.ts
var FIXTURE_PATH = import_node_path.default.join(__dirname, "..", "..", "fixtures", "picks-h1.json");
function fixtureRows() {
  return [...parsePicksH1Export(JSON.parse((0, import_node_fs.readFileSync)(FIXTURE_PATH, "utf8"))).rows];
}
function row(over) {
  return {
    id: over.id ?? "r",
    sport: over.sport ?? "NFL",
    market: over.market ?? "MONEYLINE",
    outcome: over.outcome ?? 1,
    marketFairProb: over.marketFairProb ?? 0.55,
    modelProb: over.modelProb ?? 0.7,
    confidence: over.confidence ?? 70,
    modelVersion: over.modelVersion ?? "v5.2.7",
    generatedAt: over.generatedAt ?? "2026-09-01T00:00:00.000Z",
    isFounder: over.isFounder ?? false,
    isPublished: over.isPublished ?? true,
    isSettled: over.isSettled ?? true,
    season: over.season ?? 2026
  };
}
(0, import_vitest.describe)("duel keep rule", () => {
  (0, import_vitest.it)("states the \xA74.2 rule verbatim", () => {
    (0, import_vitest.expect)(DUEL_KEEP_RULE).toContain("\u0394Brier < 0");
    (0, import_vitest.expect)(DUEL_KEEP_RULE).toContain("P(better) \u2265 0.75");
  });
  (0, import_vitest.it)("passes when candidate is better on every row (\u0394Brier < 0, P(better)=1)", () => {
    const rows = Array.from(
      { length: 8 },
      (_, i) => row({
        id: `d${i}`,
        outcome: i % 2,
        marketFairProb: 0.55,
        modelProb: i % 2 === 1 ? 0.85 : 0.15
      })
    );
    const d = duel(rows, { resamples: 100, seed: 1 });
    (0, import_vitest.expect)(d.passesKeepRule).toBe(true);
    (0, import_vitest.expect)(d.scorecard.deltaBrier).toBeLessThan(0);
    (0, import_vitest.expect)(d.scorecard.pBetter).toBe(1);
    (0, import_vitest.expect)(d.holdoutId).toBe("PICKS-H1");
  });
  (0, import_vitest.it)("fails when candidate is worse on every row (\u0394Brier > 0)", () => {
    const rows = Array.from(
      { length: 8 },
      (_, i) => row({
        id: `w${i}`,
        outcome: i % 2,
        marketFairProb: i % 2 === 1 ? 0.85 : 0.15,
        modelProb: 0.55
      })
    );
    const d = duel(rows, { resamples: 100, seed: 1 });
    (0, import_vitest.expect)(d.passesKeepRule).toBe(false);
    (0, import_vitest.expect)(d.scorecard.deltaBrier).toBeGreaterThan(0);
  });
  (0, import_vitest.it)("candidateProb override scores a proposed transform without touching stored modelProb", () => {
    const rows = Array.from(
      { length: 6 },
      (_, i) => row({
        id: `t${i}`,
        outcome: i % 2,
        marketFairProb: 0.6,
        modelProb: 0.9
        // overconfident
      })
    );
    const d = duel(rows, {
      resamples: 50,
      seed: 1,
      candidateLabel: "shrinkage-w=0.10",
      candidateProb: (r) => r.marketFairProb + 0.1 * (r.modelProb - r.marketFairProb)
    });
    const raw = duel(rows, { resamples: 50, seed: 1 });
    (0, import_vitest.expect)(d.scorecard.deltaBrier).toBeLessThan(raw.scorecard.deltaBrier);
    (0, import_vitest.expect)(d.candidateLabel).toBe("shrinkage-w=0.10");
  });
});
(0, import_vitest.describe)("regradeVersions (verify:holdout DoD)", () => {
  (0, import_vitest.it)("hand-checks that every fixture version has \u0394Brier > 0 (worse than market)", () => {
    const holdout = selectPicksH1(fixtureRows());
    const versions = regradeVersions(holdout, RE_GRADED_MODEL_VERSIONS, {
      resamples: 50,
      seed: 1
    });
    (0, import_vitest.expect)(versions.length).toBeGreaterThan(3);
    for (const v of versions) {
      (0, import_vitest.expect)(v.beatsMarket).toBe(false);
      (0, import_vitest.expect)(v.scorecard.harnessOk).toBe(true);
      (0, import_vitest.expect)(v.n).toBeGreaterThan(0);
    }
  });
  (0, import_vitest.it)("skips versions absent from the export (never invents a score)", () => {
    const holdout = selectPicksH1(fixtureRows());
    const versions = regradeVersions(holdout, ["v9.9.9"], { resamples: 10, seed: 1 });
    (0, import_vitest.expect)(versions.length).toBe(0);
  });
  (0, import_vitest.it)("flags a version that beats market as beatsMarket=true", () => {
    const rows = [
      row({ id: "g1", outcome: 1, marketFairProb: 0.52, modelProb: 0.9, modelVersion: "vX" }),
      row({ id: "g2", outcome: 0, marketFairProb: 0.52, modelProb: 0.1, modelVersion: "vX" }),
      row({ id: "g3", outcome: 1, marketFairProb: 0.52, modelProb: 0.9, modelVersion: "vX" }),
      row({ id: "g4", outcome: 0, marketFairProb: 0.52, modelProb: 0.1, modelVersion: "vX" })
    ];
    const versions = regradeVersions(rows, ["vX"], { resamples: 50, seed: 1 });
    (0, import_vitest.expect)(versions.length).toBe(1);
    (0, import_vitest.expect)(versions[0].beatsMarket).toBe(true);
    (0, import_vitest.expect)(versions[0].scorecard.harnessOk).toBe(false);
  });
});
