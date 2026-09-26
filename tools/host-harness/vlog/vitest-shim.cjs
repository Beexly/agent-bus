// Minimal vitest-compatible shim. vitest cannot run on this host
// (--jitless kills real WASM; the polyfill's fake instantiate() breaks
// Vite's import analysis). This lets the verifier package's OWN pinned
// test files execute under plain node so their assertions are real
// evidence rather than a rewritten harness guessing signatures.
const assert = require("node:assert");

const state = { suites: [], stack: [], hooks: { beforeAll: [], afterAll: [] } };
let pass = 0, fail = 0, skipped = 0;
const failures = [];

function describe(name, fn) {
  state.stack.push(name);
  const suite = { name: state.stack.join(" > "), tests: [] };
  state.suites.push(suite);
  try { fn(); } catch (e) { suite.tests.push({ name: "<suite body threw>", fn: () => { throw e; } }); }
  state.stack.pop();
}
describe.skip = () => { skipped++; };

function it(name, fn) {
  const s = state.suites[state.suites.length - 1];
  if (!s) { state.suites.push({ name: state.stack.join(" > "), tests: [] }); }
  state.suites[state.suites.length - 1].tests.push({ name, fn });
}
it.skip = () => { skipped++; };

function stringify(v) {
  if (typeof v === "string") return JSON.stringify(v);
  if (typeof v === "bigint") return `${v}n`;
  if (v instanceof Error) return `${v.name}: ${v.message}`;
  try { return JSON.stringify(v, (k, x) => (x === undefined ? "<undefined>" : x)) ?? String(v); }
  catch { return String(v); }
}

const fmt = (received) => {
  try { return typeof received === "string" ? JSON.stringify(received) : stringify(received); }
  catch { return String(received); }
};

// --- asymmetric matchers + async matchers -------------------------------
const isAsym = (v) => v && typeof v === "object" && (v.__arrayContaining || v.__objectContaining || v.__any || v.__stringContaining);
function asymmetricToPlain(v) {
  if (Array.isArray(v)) return v.map(asymmetricToPlain);
  if (isAsym(v)) {
    if (v.__arrayContaining) return v.__arrayContaining;
    if (v.__objectContaining) return v.__objectContaining;
    if (v.__any) return v.__any;
    if (v.__stringContaining) return v.__stringContaining;
  }
  if (v && typeof v === "object") {
    const o = {};
    for (const k of Object.keys(v)) o[k] = asymmetricToPlain(v[k]);
    return o;
  }
  return v;
}
function looseMatch(received, want) {
  if (isAsym(want)) {
    if (want.__arrayContaining) {
      return Array.isArray(received) && want.__arrayContaining.every((w) => received.some((r) => looseMatch(r, w)));
    }
    if (want.__objectContaining) {
      return !!received && typeof received === "object" && Object.keys(want.__objectContaining).every((k) => looseMatch(received[k], want.__objectContaining[k]));
    }
    if (want.__any) return typeof received === want.__any.name || received instanceof want.__any;
    if (want.__stringContaining) return String(received).includes(want.__stringContaining);
  }
  if (Array.isArray(want)) {
    return Array.isArray(received) && want.length === received.length && want.every((w, i) => looseMatch(received[i], w));
  }
  if (want && typeof want === "object") {
    if (!received || typeof received !== "object") return false;
    const rw = Object.keys(want);
    const rr = Object.keys(received);
    if (rw.length !== rr.length) return false;
    return rw.every((k) => looseMatch(received[k], want[k]));
  }
  return Object.is(received, want);
}
const MATCHERS = ["toThrow", "toThrowError", "toBe", "toEqual", "toStrictEqual", "toBeCloseTo", "toContain", "toMatch", "toHaveLength", "toBeNull", "toBeUndefined", "toBeDefined", "toBeTruthy", "toBeFalsy", "toBeNaN", "toBeGreaterThan", "toBeGreaterThanOrEqual", "toBeLessThan", "toBeLessThanOrEqual", "toBeInstanceOf"];
function makeAsyncExpect(promise, mode) {
  const wrap = {};
  for (const n of MATCHERS) {
    wrap[n] = async (arg, digits) => {
      let value, threw = false;
      try { value = await promise; } catch (e) { threw = true; value = e; }
      if (mode === "rejects") {
        if (n === "toThrow" || n === "toThrowError") {
          const msg = value?.message ?? String(value ?? "");
          const ok = threw && (arg === undefined || (arg instanceof RegExp ? arg.test(msg) : msg.includes(arg)));
          if (!ok) throw new Error(`expected promise to reject${arg !== undefined ? ` matching ${fmt(arg)}` : ""} (got ${threw ? fmt(value) : `resolution ${fmt(value)}`})`);
          return;
        }
        if (!threw) throw new Error(`expected promise to reject, but it resolved with ${fmt(value)}`);
        throw value;
      }
      if (threw) throw value;
      return makeExpect(value, false)[n](arg, digits);
    };
  }
  return wrap;
}

function makeExpect(received, negated) {  const check = (ok, msg) => {
    if (negated ? ok : !ok) {
      throw new assert.AssertionError({ message: `${negated ? "NOT " : ""}${msg}` });
    }
  };
  const api = {
    toBe(want) { check(Object.is(received, want), `expected ${fmt(received)} to be ${fmt(want)}`); },
    toEqual(want) {
      const ok = looseMatch(received, want);
      check(ok, `expected ${fmt(received)} to equal ${fmt(want)}`);
    },
    toStrictEqual(want) { api.toEqual(want); },
    toBeCloseTo(want, digits = 2) {
      const ok = typeof received === "number" && Math.abs(received - want) < Math.pow(10, -digits) / 2;
      check(ok, `expected ${fmt(received)} to be within ${Math.pow(10, -digits) / 2} of ${fmt(want)}`);
    },
    toContain(want) {
      const ok = typeof received === "string"
        ? received.includes(want)
        : Array.isArray(received) && received.includes(want);
      check(ok, `expected ${fmt(received)} to contain ${fmt(want)}`);
    },
    toMatch(want) {
      const ok = typeof received === "string"
        ? (want instanceof RegExp ? want.test(received) : received.includes(want))
        : false;
      check(ok, `expected ${fmt(received)} to match ${fmt(want)}`);
    },
    toHaveLength(want) { check(received?.length === want, `expected length ${received?.length} to be ${want}`); },
    toBeNull() { check(received === null, `expected ${fmt(received)} to be null`); },
    toBeUndefined() { check(received === undefined, `expected ${fmt(received)} to be undefined`); },
    toBeDefined() { check(received !== undefined, `expected ${fmt(received)} to be defined`); },
    toBeTruthy() { check(!!received, `expected ${fmt(received)} to be truthy`); },
    toBeFalsy() { check(!received, `expected ${fmt(received)} to be falsy`); },
    toBeNaN() { check(Number.isNaN(received), `expected ${fmt(received)} to be NaN`); },
    toBeGreaterThan(want) { check(received > want, `expected ${fmt(received)} > ${fmt(want)}`); },
    toBeGreaterThanOrEqual(want) { check(received >= want, `expected ${fmt(received)} >= ${fmt(want)}`); },
    toBeLessThan(want) { check(received < want, `expected ${fmt(received)} < ${fmt(want)}`); },
    toBeLessThanOrEqual(want) { check(received <= want, `expected ${fmt(received)} <= ${fmt(want)}`); },
    toBeInstanceOf(want) { check(received instanceof want, `expected ${fmt(received)} to be instance of ${want?.name}`); },
    toThrow(want) {
      let threw = null;
      try { received(); } catch (e) { threw = e; }
      let ok = threw !== null;
      if (ok && want !== undefined) {
        const msg = threw?.message ?? String(threw);
        ok = want instanceof RegExp ? want.test(msg) : msg.includes(want);
      }
      check(ok, `expected function to throw${want !== undefined ? ` ${fmt(want)}` : ""} (got ${threw ? fmt(threw) : "no throw"})`);
    },
  };
  api.toThrowError = api.toThrow;
  if (!negated) Object.defineProperty(api, "not", { get: () => makeExpect(received, true) });
  if (received && typeof received.then === "function") {
    Object.defineProperty(api, "rejects", { get: () => makeAsyncExpect(received, "rejects") });
    Object.defineProperty(api, "resolves", { get: () => makeAsyncExpect(received, "resolves") });
  }
  return api;
}

const expect = (received) => makeExpect(received, false);
expect.assertions = () => {};
expect.any = (ctor) => ({ __any: ctor });
expect.anything = () => ({ __any: Object });
expect.arrayContaining = (arr) => ({ __arrayContaining: arr });
expect.objectContaining = (obj) => ({ __objectContaining: obj });
expect.stringContaining = (s) => ({ __stringContaining: s });

async function run() {
  const before = [...state.hooks.beforeAll];
  const after = [...state.hooks.afterAll];
  for (const f of before) await f();
  for (const suite of state.suites) {
    for (const t of suite.tests) {
      const label = `${suite.name} > ${t.name}`;
      try {
        await t.fn();
        pass++;
      } catch (e) {
        fail++;
        failures.push({ name: label, err: e });
        console.log(`FAIL  ${label}\n      ${(e && e.message ? e.message : String(e)).split("\n").join("\n      ")}`);
      }
    }
  }
  for (const f of after) await f();
  console.log(`\n${pass} passed, ${fail} failed${skipped ? `, ${skipped} skipped` : ""}`);
  if (failures.length) {
    console.log("\nFailing:");
    for (const f of failures) console.log(`  - ${f.name}: ${f.err?.message ?? f.err}`);
  }
  process.exit(fail === 0 ? 0 : 1);
}

module.exports = { describe, it, test: it, expect, beforeAll: (f) => state.hooks.beforeAll.push(f), afterAll: (f) => state.hooks.afterAll.push(f), beforeEach: () => {}, afterEach: () => {}, vi: { fn: () => () => {}, mock: () => {} }, run, __state: state };
if (typeof globalThis.describe === "undefined") {
  globalThis.describe = describe;
  globalThis.it = it;
  globalThis.test = it;
  globalThis.expect = expect;
  globalThis.beforeAll = module.exports.beforeAll;
  globalThis.afterAll = module.exports.afterAll;
}
