"use strict";

// ../gsx/packages/verifier/src/__tests__/calibration-pins.test.ts
var import_vitest = require("vitest");

// ../gsx/packages/verifier/src/stats.ts
var Z_95 = 1.959963984540054;
function clamp01(p) {
  if (!Number.isFinite(p)) return 0;
  return Math.min(1, Math.max(0, p));
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
function uncertainty(rows) {
  const base = accuracy(rows);
  return base * (1 - base);
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
function reliabilityTerm(rows, bins = DEFAULT_CALIBRATION_BINS) {
  const n = rows.length;
  if (n === 0) return NaN;
  let acc = 0;
  for (const b of reliabilityCurve(rows, bins)) {
    if (b.n === 0) continue;
    acc += b.n / n * b.gap ** 2;
  }
  return acc;
}
function murphyDecomposition(rows, bins = DEFAULT_CALIBRATION_BINS) {
  let sumSq = 0;
  for (const r of rows) sumSq += (r.p - r.y) ** 2;
  const brier = rows.length === 0 ? NaN : sumSq / rows.length;
  return {
    brier,
    reliability: reliabilityTerm(rows, bins),
    resolution: resolution(rows, bins),
    uncertainty: uncertainty(rows)
  };
}
function identityError(d) {
  return d.brier - (d.reliability - d.resolution + d.uncertainty);
}
function binningResidual(rows, bins = DEFAULT_CALIBRATION_BINS) {
  const n = rows.length;
  if (n === 0) return NaN;
  let acc = 0;
  for (const b of reliabilityCurve(rows, bins)) {
    if (b.n === 0) continue;
    acc += b.n / n * bucketPVariance(rows, b.lo, b.hi, bins);
  }
  return acc;
}
function bucketPVariance(rows, lo, hi, bins) {
  const inBucket = (p) => {
    if (bins === 1) return true;
    const c = Math.min(1, Math.max(0, p));
    return hi >= 1 ? c >= lo && c <= hi : c >= lo && c < hi;
  };
  let count = 0;
  let sum = 0;
  for (const r of rows) {
    if (!inBucket(r.p)) continue;
    count += 1;
    sum += Math.min(1, Math.max(0, r.p));
  }
  if (count === 0) return 0;
  const mean = sum / count;
  let acc = 0;
  for (const r of rows) {
    if (!inBucket(r.p)) continue;
    acc += (Math.min(1, Math.max(0, r.p)) - mean) ** 2;
  }
  return acc / count;
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

// ../gsx/packages/verifier/src/__tests__/calibration-pins.test.ts
var calibrated = [
  ...Array.from({ length: 3 }, () => ({ p: 0.3, y: 1 })),
  ...Array.from({ length: 7 }, () => ({ p: 0.3, y: 0 })),
  ...Array.from({ length: 7 }, () => ({ p: 0.7, y: 1 })),
  ...Array.from({ length: 3 }, () => ({ p: 0.7, y: 0 }))
];
var overconfident = [
  ...Array.from({ length: 10 }, () => ({ p: 0.9, y: 1 })),
  ...Array.from({ length: 10 }, () => ({ p: 0.9, y: 0 }))
];
var mixedP = [
  ...Array.from({ length: 5 }, () => ({ p: 0.3, y: 1 })),
  ...Array.from({ length: 5 }, () => ({ p: 0.5, y: 1 })),
  ...Array.from({ length: 5 }, () => ({ p: 0.3, y: 0 })),
  ...Array.from({ length: 5 }, () => ({ p: 0.5, y: 0 }))
];
(0, import_vitest.describe)("binning", () => {
  (0, import_vitest.it)("uses the paper's ten equal-width bins by default", () => {
    (0, import_vitest.expect)(DEFAULT_CALIBRATION_BINS).toBe(10);
    (0, import_vitest.expect)(reliabilityCurve(calibrated).length).toBe(10);
  });
  (0, import_vitest.it)("puts p=0.3 in bucket 3 and p=0.7 in bucket 7 with the default bins", () => {
    const curve = reliabilityCurve(calibrated);
    (0, import_vitest.expect)(curve[3].n).toBe(10);
    (0, import_vitest.expect)(curve[7].n).toBe(10);
    (0, import_vitest.expect)(curve[0].n).toBe(0);
  });
  (0, import_vitest.it)("keeps p=1 inside the last bucket rather than out of range", () => {
    const curve = reliabilityCurve([{ p: 1, y: 1 }, { p: 1, y: 1 }, { p: 1, y: 0 }]);
    (0, import_vitest.expect)(curve[9].n).toBe(3);
  });
  (0, import_vitest.it)("emits an empty bucket as NaN rather than a zero-width gap", () => {
    const curve = reliabilityCurve(calibrated);
    (0, import_vitest.expect)(curve[0].meanP).toBeNaN();
    (0, import_vitest.expect)(curve[0].band).toBeNull();
  });
});
(0, import_vitest.describe)("expected / maximum calibration error", () => {
  (0, import_vitest.it)("is exactly 0 for the saturated calibrated fixture \u2014 every gap is 0", () => {
    (0, import_vitest.expect)(expectedCalibrationError(calibrated)).toBeCloseTo(0, 12);
    (0, import_vitest.expect)(maximumCalibrationError(calibrated)).toBeCloseTo(0, 12);
  });
  (0, import_vitest.it)("is 0.4 for twenty rows all claiming 0.9 with ten wins", () => {
    (0, import_vitest.expect)(expectedCalibrationError(overconfident)).toBeCloseTo(0.4, 12);
    (0, import_vitest.expect)(maximumCalibrationError(overconfident)).toBeCloseTo(0.4, 12);
  });
  (0, import_vitest.it)("weights buckets by mass, not by count of buckets", () => {
    (0, import_vitest.expect)(expectedCalibrationError(mixedP)).toBeCloseTo(0.1, 12);
    (0, import_vitest.expect)(maximumCalibrationError(mixedP)).toBeCloseTo(0.2, 12);
  });
  (0, import_vitest.it)("is NaN on empty input rather than 0, which would read as perfect", () => {
    (0, import_vitest.expect)(expectedCalibrationError([])).toBeNaN();
    (0, import_vitest.expect)(maximumCalibrationError([])).toBeNaN();
  });
});
(0, import_vitest.describe)("accuracy and base rate", () => {
  (0, import_vitest.it)("accuracy is the realized win rate", () => {
    (0, import_vitest.expect)(accuracy(calibrated)).toBeCloseTo(0.5, 12);
    (0, import_vitest.expect)(accuracy(overconfident)).toBeCloseTo(0.5, 12);
  });
  (0, import_vitest.it)("uncertainty is the Bernoulli variance of the base rate", () => {
    (0, import_vitest.expect)(uncertainty(calibrated)).toBeCloseTo(0.25, 12);
  });
});
(0, import_vitest.describe)("Murphy decomposition", () => {
  (0, import_vitest.it)("brier for the calibrated fixture is 0.21 by hand", () => {
    (0, import_vitest.expect)(murphyDecomposition(calibrated).brier).toBeCloseTo(0.21, 12);
  });
  (0, import_vitest.it)("reliability is 0 and resolution is 0.04 for the calibrated fixture", () => {
    const d = murphyDecomposition(calibrated);
    (0, import_vitest.expect)(d.reliability).toBeCloseTo(0, 12);
    (0, import_vitest.expect)(d.resolution).toBeCloseTo(0.04, 12);
    (0, import_vitest.expect)(d.uncertainty).toBeCloseTo(0.25, 12);
  });
  (0, import_vitest.it)("the identity holds with residual 0 when bins are saturated", () => {
    (0, import_vitest.expect)(identityError(murphyDecomposition(calibrated))).toBeCloseTo(0, 12);
    (0, import_vitest.expect)(binningResidual(calibrated)).toBeCloseTo(0, 12);
  });
  (0, import_vitest.it)("brier for the overconfident fixture is 0.41 with reliability 0.16", () => {
    const d = murphyDecomposition(overconfident);
    (0, import_vitest.expect)(d.brier).toBeCloseTo(0.41, 12);
    (0, import_vitest.expect)(d.reliability).toBeCloseTo(0.16, 12);
    (0, import_vitest.expect)(d.resolution).toBeCloseTo(0, 12);
    (0, import_vitest.expect)(identityError(d)).toBeCloseTo(0, 12);
  });
  (0, import_vitest.it)("resolution is 0 for a forecaster that says one thing every time", () => {
    (0, import_vitest.expect)(resolution(overconfident)).toBeCloseTo(0, 12);
  });
  (0, import_vitest.it)("residual equals the within-bucket variance of the stated p, exactly", () => {
    (0, import_vitest.expect)(identityError(murphyDecomposition(mixedP, 1))).toBeCloseTo(0.01, 12);
    (0, import_vitest.expect)(binningResidual(mixedP, 1)).toBeCloseTo(0.01, 12);
  });
  (0, import_vitest.it)("coarse bins inflate the residual; the paper's ten bins are not saturated", () => {
    (0, import_vitest.expect)(binningResidual(mixedP, 1)).toBeCloseTo(0.01, 12);
    (0, import_vitest.expect)(binningResidual(mixedP, 10)).toBeCloseTo(0, 12);
  });
  (0, import_vitest.it)("reliabilityTerm is the weighted squared gap, not the absolute one", () => {
    (0, import_vitest.expect)(reliabilityTerm(mixedP)).toBeCloseTo(0.5 * 0.04, 12);
    (0, import_vitest.expect)(reliabilityTerm(mixedP)).toBeLessThan(expectedCalibrationError(mixedP));
  });
});
(0, import_vitest.describe)("candidate vs market diagnosis", () => {
  (0, import_vitest.it)("calls a Brier loss with equal calibration 'resolution-limited'", () => {
    const flat = [
      ...Array.from({ length: 10 }, () => ({ p: 0.5, y: 1 })),
      ...Array.from({ length: 10 }, () => ({ p: 0.5, y: 0 }))
    ];
    const v = compareCalibration(flat, calibrated);
    (0, import_vitest.expect)(v.deltaBrier).toBeGreaterThan(0);
    (0, import_vitest.expect)(v.deltaEce).toBeCloseTo(0, 12);
    (0, import_vitest.expect)(v.brierDirection).toBe("market-better");
    (0, import_vitest.expect)(v.diagnosis).toBe("resolution-limited");
    (0, import_vitest.expect)(v.deltaResolution).toBeLessThan(0);
  });
  (0, import_vitest.it)("calls a Brier loss with worse calibration a reliability gap", () => {
    const v = compareCalibration(overconfident, calibrated);
    (0, import_vitest.expect)(v.deltaBrier).toBeGreaterThan(0);
    (0, import_vitest.expect)(v.deltaEce).toBeGreaterThan(0);
    (0, import_vitest.expect)(v.diagnosis).toBe("reliability-gap");
    (0, import_vitest.expect)(v.worstBucket?.n).toBe(20);
    (0, import_vitest.expect)(v.candidateOffBandBuckets).toBeGreaterThan(0);
  });
  (0, import_vitest.it)("refuses to diagnose below the minimum sample", () => {
    const tiny = [
      { p: 0.9, y: 1 },
      { p: 0.1, y: 0 }
    ];
    (0, import_vitest.expect)(MIN_CALIBRATION_N).toBe(20);
    (0, import_vitest.expect)(compareCalibration(tiny, calibrated).diagnosis).toBe("n-too-small");
  });
  (0, import_vitest.it)("never marks a bucket off-band when the truth's Wilson band covers it", () => {
    const rows = [
      { p: 0.9, y: 1 },
      { p: 0.9, y: 0 }
    ];
    const bucket = reliabilityCurve(rows, 10)[9];
    (0, import_vitest.expect)(bucket.band).not.toBeNull();
    (0, import_vitest.expect)(bucket.exceedsBand).toBe(false);
  });
  (0, import_vitest.it)("flags a bucket whose stated p falls outside a tight band", () => {
    const tight = Array.from({ length: 20 }, () => ({ p: 0.55, y: 1 }));
    const bucket = reliabilityCurve(tight, 1)[0];
    (0, import_vitest.expect)(bucket.observedRate).toBe(1);
    (0, import_vitest.expect)(bucket.gap).toBeCloseTo(-0.45, 12);
    (0, import_vitest.expect)(bucket.exceedsBand).toBe(true);
  });
});
