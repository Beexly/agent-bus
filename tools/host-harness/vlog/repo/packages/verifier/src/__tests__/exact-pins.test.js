"use strict";

// ../gsx/packages/verifier/src/__tests__/exact-pins.test.ts
var import_vitest = require("vitest");

// ../gsx/packages/verifier/src/exact.ts
var Z_95_EXACT = {
  numerator: 1959963984540054n,
  denominator: 1000000000000000n
};
var ONE = { numerator: 1n, denominator: 1n };
var ZERO = { numerator: 0n, denominator: 1n };
function gcd(a, b) {
  let x = a < 0n ? -a : a;
  let y = b < 0n ? -b : b;
  while (y !== 0n) {
    const t = x % y;
    x = y;
    y = t;
  }
  return x === 0n ? 1n : x;
}
function make(numerator, denominator) {
  if (denominator === 0n) throw new Error("zero denominator");
  let n = numerator;
  let d = denominator;
  if (d < 0n) {
    n = -n;
    d = -d;
  }
  const g = gcd(n, d);
  return { numerator: n / g, denominator: d / g };
}
var add = (a, b) => make(a.numerator * b.denominator + b.numerator * a.denominator, a.denominator * b.denominator);
var sub = (a, b) => make(a.numerator * b.denominator - b.numerator * a.denominator, a.denominator * b.denominator);
var mul = (a, b) => make(a.numerator * b.numerator, a.denominator * b.denominator);
var div = (a, b) => make(a.numerator * b.denominator, a.denominator * b.numerator);
var cmp = (a, b) => {
  const l = a.numerator * b.denominator;
  const r = b.numerator * a.denominator;
  return l < r ? -1 : l > r ? 1 : 0;
};
var toNumber = (r) => Number(r.numerator) / Number(r.denominator);
var clamp01Exact = (r) => cmp(r, ZERO) < 0 ? ZERO : cmp(r, ONE) > 0 ? ONE : r;
function isqrt(n) {
  if (n < 0n) throw new Error("isqrt of a negative integer");
  if (n < 2n) return n;
  let x = n;
  let y = (x + 1n) / 2n;
  while (y < x) {
    x = y;
    y = (x + n / x) / 2n;
  }
  return x;
}
function sqrtExact(r) {
  if (cmp(r, ZERO) < 0) throw new Error("sqrtExact of a negative rational");
  return make(isqrt(r.numerator * r.denominator), r.denominator);
}
var assertScaleFits = (value, bits = 4096n) => {
  const a = value < 0n ? -value : value;
  if (a >= 1n << bits) throw new Error(`exact arithmetic would exceed ${bits}-bit budget`);
};
function wilsonMarginExact(k, n, z) {
  const p = make(k, n);
  const z2 = mul(z, z);
  const inner = add(
    div(mul(p, sub(ONE, p)), make(n, 1n)),
    div(z2, make(4n * n * n, 1n))
  );
  return sqrtExact(inner);
}
function wilsonExact(k, n, z = Z_95_EXACT) {
  if (!Number.isFinite(n) || n <= 0) return null;
  const N = BigInt(Math.floor(n));
  const K = (() => {
    const raw = BigInt(Math.floor(k));
    if (raw < 0n) return 0n;
    return raw > N ? N : raw;
  })();
  const z2 = mul(z, z);
  const p = make(K, N);
  const denom = add(ONE, div(z2, make(N, 1n)));
  const centre = div(add(p, div(z2, make(2n * N, 1n))), denom);
  const margin = mul(div(z, denom), wilsonMarginExact(K, N, z));
  assertScaleFits(centre.denominator);
  assertScaleFits(margin.denominator);
  const low = clamp01Exact(sub(centre, margin));
  const high = clamp01Exact(add(centre, margin));
  return {
    successes: K,
    n: N,
    point: p,
    low,
    high,
    z,
    highAsDouble: toNumber(high)
  };
}
function wilsonBoundaryAudit(k, n, options) {
  const z = options?.z ?? Z_95_EXACT;
  const exact = wilsonExact(k, n, z);
  if (!exact) return null;
  const float = wilsonIntervalFloat(k, n, z);
  const rate = options?.rate ?? toNumber(exact.point);
  const rateExact = make(BigInt(Math.round(rate * 1e12)), 1000000000000n);
  const holdsExactly = cmp(exact.high, rateExact) >= 0;
  const holdsInFloat = float ? float.high >= rate : false;
  return {
    exact,
    float,
    highGap: float ? float.high - toNumber(exact.high) : NaN,
    floatLowGap: float ? float.low - toNumber(exact.low) : NaN,
    containmentHoldsExactly: holdsExactly,
    containmentHoldsInFloat: holdsInFloat,
    floatBreaksContainment: holdsExactly && !holdsInFloat
  };
}
function wilsonIntervalFloat(k, n, z) {
  if (!Number.isFinite(n) || n <= 0) return null;
  const total = Math.floor(n);
  const successes = Math.min(total, Math.max(0, Math.floor(k)));
  const p = successes / total;
  const zf = toNumber(z);
  const z2 = zf * zf;
  const denom = 1 + z2 / total;
  const centre = (p + z2 / (2 * total)) / denom;
  const margin = zf / denom * Math.sqrt(p * (1 - p) / total + z2 / (4 * total * total));
  const clamp012 = (v) => Math.min(1, Math.max(0, v));
  return { low: clamp012(centre - margin), high: clamp012(centre + margin), point: p };
}
function formatExact(r) {
  return r.denominator === 1n ? `${r.numerator}` : `${r.numerator}/${r.denominator}`;
}

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

// ../gsx/packages/verifier/src/__tests__/exact-pins.test.ts
var z1 = { numerator: 1n, denominator: 1n };
var asNumber = (r) => Number(r.numerator) / Number(r.denominator);
(0, import_vitest.describe)("exact rationals", () => {
  (0, import_vitest.it)("carries z_95 with no decimal at all", () => {
    (0, import_vitest.expect)(Z_95_EXACT.numerator).toBe(1959963984540054n);
    (0, import_vitest.expect)(Z_95_EXACT.denominator).toBe(1000000000000000n);
    (0, import_vitest.expect)(asNumber(Z_95_EXACT)).toBeCloseTo(1.959963984540054, 15);
  });
});
(0, import_vitest.describe)("wilsonExact \u2014 the k = n boundary", () => {
  (0, import_vitest.it)("is EXACTLY 1 at k = n, where the float path is a ULP short", () => {
    const exact = wilsonExact(10, 10);
    (0, import_vitest.expect)(exact.high.denominator).toBe(1n);
    (0, import_vitest.expect)(exact.high.numerator).toBe(1n);
    (0, import_vitest.expect)(wilsonInterval(10, 10).high).toBeLessThan(1);
    (0, import_vitest.expect)(wilsonInterval(10, 10).high).toBeCloseTo(1, 12);
  });
  (0, import_vitest.it)("is exactly 1 at every k = n, not just 10/10", () => {
    for (const n of [1, 2, 5, 20, 100]) {
      (0, import_vitest.expect)(wilsonExact(n, n).high.numerator).toBe(1n);
    }
  });
  (0, import_vitest.it)("is exactly 0 at k = 0", () => {
    const exact = wilsonExact(0, 10);
    (0, import_vitest.expect)(exact.low.numerator).toBe(0n);
    (0, import_vitest.expect)(exact.low.denominator).toBe(1n);
  });
  (0, import_vitest.it)("reproduces the textbook 0/10 upper bound", () => {
    (0, import_vitest.expect)(wilsonExact(0, 10).highAsDouble).toBeCloseTo(0.2775327998628892, 12);
  });
  (0, import_vitest.it)("agrees with the float path to 12 places on every mid-range case", () => {
    for (const [k, n] of [[0, 10], [1, 10], [5, 10], [9, 20], [3, 7]]) {
      const exact = wilsonExact(k, n);
      const float = wilsonInterval(k, n);
      (0, import_vitest.expect)(exact.highAsDouble).toBeCloseTo(float.high, 12);
      (0, import_vitest.expect)(asNumber(exact.low)).toBeCloseTo(float.low, 12);
    }
  });
  (0, import_vitest.it)("matches the 9/20 bounds the existing pins assert", () => {
    const exact = wilsonExact(9, 20);
    (0, import_vitest.expect)(exact.highAsDouble).toBeCloseTo(0.6579, 4);
    (0, import_vitest.expect)(asNumber(exact.low)).toBeCloseTo(0.2582, 4);
  });
  (0, import_vitest.it)("returns null on n <= 0, same as the float path", () => {
    (0, import_vitest.expect)(wilsonExact(0, 0)).toBeNull();
    (0, import_vitest.expect)(wilsonExact(3, -5)).toBeNull();
  });
  (0, import_vitest.it)("clamps k into [0, n] rather than trusting the caller", () => {
    (0, import_vitest.expect)(wilsonExact(99, 10).successes).toBe(10n);
    (0, import_vitest.expect)(wilsonExact(-4, 10).successes).toBe(0n);
  });
  (0, import_vitest.it)("computes the point estimate as a reduced exact fraction", () => {
    (0, import_vitest.expect)(formatExact(wilsonExact(3, 7).point)).toBe("3/7");
    (0, import_vitest.expect)(formatExact(wilsonExact(4, 8).point)).toBe("1/2");
  });
});
(0, import_vitest.describe)("wilsonBoundaryAudit \u2014 formal layer vs numeric layer", () => {
  (0, import_vitest.it)("shows containment holding exactly and FAILING in float at k = n", () => {
    const audit = wilsonBoundaryAudit(10, 10);
    (0, import_vitest.expect)(audit.containmentHoldsExactly).toBe(true);
    (0, import_vitest.expect)(audit.containmentHoldsInFloat).toBe(false);
    (0, import_vitest.expect)(audit.floatBreaksContainment).toBe(true);
    (0, import_vitest.expect)(audit.highGap).toBeLessThan(0);
    (0, import_vitest.expect)(Math.abs(audit.highGap)).toBeLessThan(1e-15);
  });
  (0, import_vitest.it)("agrees on both layers away from the boundary", () => {
    for (const [k, n] of [[0, 10], [5, 10], [9, 20]]) {
      const audit = wilsonBoundaryAudit(k, n);
      (0, import_vitest.expect)(audit.floatBreaksContainment).toBe(false);
      (0, import_vitest.expect)(audit.containmentHoldsExactly).toBe(true);
      (0, import_vitest.expect)(audit.containmentHoldsInFloat).toBe(true);
    }
  });
  (0, import_vitest.it)("returns null on an empty panel", () => {
    (0, import_vitest.expect)(wilsonBoundaryAudit(0, 0)).toBeNull();
  });
});
(0, import_vitest.describe)("wilsonMarginExact", () => {
  (0, import_vitest.it)("is z/(2n) at both ends, where p(1-p) vanishes", () => {
    (0, import_vitest.expect)(asNumber(wilsonMarginExact(10n, 10n, z1))).toBeCloseTo(0.05, 12);
    (0, import_vitest.expect)(asNumber(wilsonMarginExact(0n, 10n, z1))).toBeCloseTo(0.05, 12);
  });
  (0, import_vitest.it)("peaks in the middle of the panel", () => {
    const at0 = asNumber(wilsonMarginExact(0n, 10n, z1));
    const at5 = asNumber(wilsonMarginExact(5n, 10n, z1));
    (0, import_vitest.expect)(at5).toBeGreaterThan(at0);
  });
});
