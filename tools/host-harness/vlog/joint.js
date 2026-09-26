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
var joint_exports = {};
__export(joint_exports, {
  JOINT_KEEP_RULE: () => JOINT_KEEP_RULE,
  JOINT_P_BETTER_FLOOR: () => JOINT_P_BETTER_FLOOR,
  runJoint: () => runJoint,
  toJointRows: () => toJointRows
});
module.exports = __toCommonJS(joint_exports);
var import_stats = require("./stats");
const JOINT_KEEP_RULE = "\u0394Brier < 0 AND P(better) \u2265 0.75 AND factor-coefficient sign agrees across eras";
const JOINT_P_BETTER_FLOOR = 0.75;
function runJoint(factorId, rows, options) {
  const minN = options?.minN ?? 30;
  const discover = rows.filter((r) => r.era === "discover" && r.factor != null);
  const validate = rows.filter((r) => r.era === "validate" && r.factor != null);
  if (discover.length < minN || validate.length < minN) {
    return {
      factorId,
      nDiscover: discover.length,
      nValidate: validate.length,
      marketOnlyBrierValidate: NaN,
      withFactorBrierValidate: NaN,
      deltaBrier: NaN,
      pBetter: 0.5,
      factorCoefDiscover: NaN,
      factorCoefValidate: NaN,
      signAgrees: false,
      status: "INSUFFICIENT",
      keepRule: JOINT_KEEP_RULE,
      reason: `n discover=${discover.length} validate=${validate.length} below minN=${minN}`
    };
  }
  const Xd = discover.map((r) => [(0, import_stats.logit)(r.marketFairProb), r.factor]);
  const yd = discover.map((r) => r.outcome);
  const fitFullD = (0, import_stats.fitLogistic)(Xd, yd);
  const fitBaseD = (0, import_stats.fitLogistic)(discover.map((r) => [(0, import_stats.logit)(r.marketFairProb)]), yd);
  const coefFactorD = fitFullD.coef[2] ?? NaN;
  const Xv = validate.map((r) => [(0, import_stats.logit)(r.marketFairProb), r.factor]);
  const yv = validate.map((r) => r.outcome);
  const fitFullV = (0, import_stats.fitLogistic)(Xv, yv);
  const coefFactorV = fitFullV.coef[2] ?? NaN;
  const pBase = (0, import_stats.logisticPredict)(fitBaseD.coef, validate.map((r) => [(0, import_stats.logit)(r.marketFairProb)]));
  const pFull = (0, import_stats.logisticPredict)(fitFullD.coef, Xv);
  const baseLoss = [];
  const fullLoss = [];
  for (let i = 0; i < validate.length; i++) {
    baseLoss.push((0, import_stats.brierScore)(pBase[i], yv[i]));
    fullLoss.push((0, import_stats.brierScore)(pFull[i], yv[i]));
  }
  const mean = (a) => a.reduce((s, v) => s + v, 0) / a.length;
  const marketOnlyBrierValidate = mean(baseLoss);
  const withFactorBrierValidate = mean(fullLoss);
  const deltaBrier = withFactorBrierValidate - marketOnlyBrierValidate;
  const boot = (0, import_stats.pairedBootstrap)(
    { candidateLoss: fullLoss, marketLoss: baseLoss },
    {
      resamples: options?.resamples ?? import_stats.DEFAULT_BOOTSTRAP_RESAMPLES,
      seed: options?.seed ?? import_stats.DEFAULT_BOOTSTRAP_SEED
    }
  );
  const signAgrees = Number.isFinite(coefFactorD) && Number.isFinite(coefFactorV) && Math.sign(coefFactorD) === Math.sign(coefFactorV) && coefFactorD !== 0 && coefFactorV !== 0;
  const keep = Number.isFinite(deltaBrier) && deltaBrier < 0 && boot.pBetter >= JOINT_P_BETTER_FLOOR && signAgrees;
  const status = keep ? "CANDIDATE" : "DEAD";
  const reason = keep ? `KEEP: \u0394Brier=${deltaBrier.toFixed(5)} P(better)=${boot.pBetter.toFixed(3)} signs D=${coefFactorD.toFixed(4)} V=${coefFactorV.toFixed(4)}` : `DEAD: \u0394Brier=${deltaBrier.toFixed(5)} P(better)=${boot.pBetter.toFixed(3)} signAgrees=${signAgrees} (need \u0394Brier<0, P(better)\u2265${JOINT_P_BETTER_FLOOR}, sign agreement)`;
  return {
    factorId,
    nDiscover: discover.length,
    nValidate: validate.length,
    marketOnlyBrierValidate,
    withFactorBrierValidate,
    deltaBrier,
    pBetter: boot.pBetter,
    factorCoefDiscover: coefFactorD,
    factorCoefValidate: coefFactorV,
    signAgrees,
    status,
    keepRule: JOINT_KEEP_RULE,
    reason
  };
}
function toJointRows(rows, options) {
  const out = [];
  for (const r of rows) {
    const factor = options.factorOf(r);
    if (factor == null || !Number.isFinite(factor)) continue;
    const season = r.season ?? 0;
    out.push({
      outcome: r.outcome,
      marketFairProb: r.marketFairProb,
      factor,
      era: season <= options.discoverMaxSeason ? "discover" : "validate",
      sport: r.sport,
      id: r.id
    });
  }
  return out;
}
