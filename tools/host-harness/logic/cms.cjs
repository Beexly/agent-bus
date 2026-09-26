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
var conformal_margin_set_exports = {};
__export(conformal_margin_set_exports, {
  DEFAULT_MARGIN_SET_ALPHA: () => DEFAULT_MARGIN_SET_ALPHA,
  MIN_SAMPLES_MARGIN_SET: () => MIN_SAMPLES_MARGIN_SET,
  conformalMarginSet: () => conformalMarginSet,
  marginSetCovers: () => marginSetCovers,
  splitConformalQuantile: () => splitConformalQuantile
});
module.exports = __toCommonJS(conformal_margin_set_exports);
const MIN_SAMPLES_MARGIN_SET = 64;
const DEFAULT_MARGIN_SET_ALPHA = 0.1;
function round4(value) {
  return Math.round(value * 1e4) / 1e4;
}
function splitConformalQuantile(values, probability) {
  if (values.length === 0) return Number.POSITIVE_INFINITY;
  if (!Number.isFinite(probability) || probability <= 0) return Number.POSITIVE_INFINITY;
  if (probability >= 1) return Number.POSITIVE_INFINITY;
  const sorted = [...values].sort((a, b) => a - b);
  const n = sorted.length;
  const rank = Math.ceil((n + 1) * probability);
  if (rank > n || rank < 1) return Number.POSITIVE_INFINITY;
  return sorted[rank - 1];
}
function integersInClosedInterval(lower, upper) {
  if (!Number.isFinite(lower) || !Number.isFinite(upper)) return [];
  const start = Math.ceil(lower);
  const end = Math.floor(upper);
  if (end < start) return [];
  const out = [];
  for (let m = start; m <= end; m++) out.push(m);
  return out;
}
function conformalMarginSet(args) {
  const alpha = args.alpha ?? DEFAULT_MARGIN_SET_ALPHA;
  const minSamples = args.minSamples ?? MIN_SAMPLES_MARGIN_SET;
  const empty = (n, status = "insufficient_sample") => ({
    predictedMean: args.predictedMean,
    sportKey: args.sportKey,
    halfWidth: status === "fail_closed_insufficient_n" ? Number.POSITIVE_INFINITY : 0,
    lower: args.predictedMean,
    upper: args.predictedMean,
    integers: [],
    alpha,
    n,
    status,
    qhatInfinite: status === "fail_closed_insufficient_n"
  });
  if (!Number.isFinite(args.predictedMean)) return empty(0);
  if (!Number.isFinite(alpha) || alpha <= 0 || alpha >= 1) return empty(0);
  const sport = args.sportKey.toLowerCase();
  const rows = args.calibration.filter((row) => {
    if (row.sportKey.toLowerCase() !== sport) return false;
    return Number.isFinite(row.predictedMean) && Number.isFinite(row.actualMargin);
  });
  if (rows.length < minSamples) return empty(rows.length);
  const residuals = rows.map((row) => Math.abs(row.actualMargin - row.predictedMean));
  const halfWidth = splitConformalQuantile(residuals, 1 - alpha);
  if (!Number.isFinite(halfWidth)) {
    return empty(rows.length, "fail_closed_insufficient_n");
  }
  const lower = round4(args.predictedMean - halfWidth);
  const upper = round4(args.predictedMean + halfWidth);
  return {
    predictedMean: args.predictedMean,
    sportKey: args.sportKey,
    halfWidth: round4(halfWidth),
    lower,
    upper,
    integers: integersInClosedInterval(lower, upper),
    alpha,
    n: rows.length,
    status: "ok",
    qhatInfinite: false
  };
}
function marginSetCovers(set, actualMargin) {
  if (set.status !== "ok") return false;
  if (!Number.isFinite(actualMargin)) return false;
  return actualMargin >= set.lower && actualMargin <= set.upper;
}
