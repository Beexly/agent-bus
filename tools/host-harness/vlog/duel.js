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
var duel_exports = {};
__export(duel_exports, {
  DUEL_KEEP_RULE: () => DUEL_KEEP_RULE,
  duel: () => duel,
  regradeVersions: () => regradeVersions
});
module.exports = __toCommonJS(duel_exports);
var import_scorecard = require("./scorecard");
const DUEL_KEEP_RULE = "\u0394Brier < 0 AND P(better) \u2265 0.75 on identical PICKS-H1 rows vs marketFairProb";
function duel(rows, options) {
  const candidateProb = options?.candidateProb;
  const prepared = candidateProb ? rows.map((r) => {
    const p = candidateProb(r);
    return p == null || !(p > 0 && p < 1) ? r : { ...r, modelProb: p };
  }) : [...rows];
  const scorecard = (0, import_scorecard.buildScorecard)(prepared, {
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
    const sc = (0, import_scorecard.buildScorecard)(vrows, {
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
