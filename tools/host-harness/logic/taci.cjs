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
var tweedie_aci_exports = {};
__export(tweedie_aci_exports, {
  adaptiveConformalIntervals: () => adaptiveConformalIntervals
});
module.exports = __toCommonJS(tweedie_aci_exports);
function round4(value) {
  return Math.round(value * 1e4) / 1e4;
}
function quantile(values, probability) {
  if (values.length === 0) return 0;
  if (!Number.isFinite(probability) || probability <= 0) return Number.POSITIVE_INFINITY;
  if (probability >= 1) return Number.POSITIVE_INFINITY;
  const sorted = [...values].sort((a, b) => a - b);
  const n = sorted.length;
  const k = Math.ceil((n + 1) * probability);
  if (k > n || k < 1) return Number.POSITIVE_INFINITY;
  return sorted[k - 1];
}
function adaptiveConformalIntervals(observations, targetCoverage = 0.8, learningRate = 0.05) {
  const state = /* @__PURE__ */ new Map();
  return observations.map((observation) => {
    const current = state.get(observation.position) ?? { alpha: 1 - targetCoverage, residuals: [] };
    const residualQuantile = quantile(current.residuals, 1 - current.alpha);
    const qhatInfinite = !Number.isFinite(residualQuantile);
    const warmup = current.residuals.length === 0 && !qhatInfinite;
    const lower = qhatInfinite ? 0 : Math.max(0, observation.predictedMean - residualQuantile);
    const upper = qhatInfinite ? Number.POSITIVE_INFINITY : observation.predictedMean + residualQuantile;
    const covered = qhatInfinite ? false : observation.actualFantasyPoints >= lower && observation.actualFantasyPoints <= upper;
    const miss = covered ? 0 : 1;
    const alpha = Math.min(
      0.5,
      Math.max(0.02, current.alpha + learningRate * (1 - targetCoverage - miss))
    );
    current.residuals.push(Math.abs(observation.actualFantasyPoints - observation.predictedMean));
    state.set(observation.position, { alpha, residuals: current.residuals });
    return {
      sampleId: observation.sampleId,
      position: observation.position,
      lower: round4(lower),
      upper: qhatInfinite ? Number.POSITIVE_INFINITY : round4(upper),
      alpha: round4(current.alpha),
      residualQuantile: qhatInfinite ? Number.POSITIVE_INFINITY : round4(residualQuantile),
      covered,
      status: qhatInfinite ? "fail_closed_insufficient_n" : warmup ? "warmup_point_band" : "ok",
      qhatInfinite
    };
  });
}
