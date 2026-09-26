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
var scorecard_exports = {};
__export(scorecard_exports, {
  buildScorecard: () => buildScorecard,
  scorecardMarkdown: () => scorecardMarkdown,
  toScoredRows: () => toScoredRows
});
module.exports = __toCommonJS(scorecard_exports);
var import_stats = require("./stats");
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
    const row = scored[i];
    const src = rows.find((r) => r.id === row.id);
    const cp = src.modelProb;
    const mp = src.marketFairProb;
    const y = src.outcome;
    candidateLoss.push((0, import_stats.brierScore)(cp, y));
    marketLoss.push((0, import_stats.brierScore)(mp, y));
    candidateLog.push((0, import_stats.logLoss)(cp, y));
    marketLog.push((0, import_stats.logLoss)(mp, y));
    if (y === 1) wins += 1;
  }
  const mean = (a) => a.reduce((s, v) => s + v, 0) / a.length;
  const candidateBrier = mean(candidateLoss);
  const marketBrier = mean(marketLoss);
  const candidateLogLoss = mean(candidateLog);
  const marketLogLoss = mean(marketLog);
  const boot = (0, import_stats.pairedBootstrap)(
    { candidateLoss, marketLoss },
    {
      resamples: options?.resamples ?? import_stats.DEFAULT_BOOTSTRAP_RESAMPLES,
      seed: options?.seed ?? import_stats.DEFAULT_BOOTSTRAP_SEED
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
      cL.push((0, import_stats.brierScore)(r.modelProb, r.outcome));
      mL.push((0, import_stats.brierScore)(r.marketFairProb, r.outcome));
    }
    const sp = (0, import_stats.pairedBootstrap)(
      { candidateLoss: cL, marketLoss: mL },
      {
        resamples: options?.resamples ?? import_stats.DEFAULT_BOOTSTRAP_RESAMPLES,
        seed: options?.seed ?? import_stats.DEFAULT_BOOTSTRAP_SEED
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
    const w = (0, import_stats.wilsonInterval)(wins, n);
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
    pBetterSeed: import_stats.DEFAULT_BOOTSTRAP_SEED,
    bySport: [],
    wilson: null,
    harnessOk: false,
    harnessNote: `${label}: ${note}`
  };
}
function scorecardMarkdown(title, sc) {
  const f = (x, d = 5) => Number.isFinite(x) ? x.toFixed(d) : "n/a";
  const lines = [
    `## ${title}`,
    "",
    `n=${sc.n} \xB7 P(better)=${f(sc.pBetter, 3)} \xB7 resamples=${sc.pBetterResamples} \xB7 seed=${sc.pBetterSeed}`,
    "",
    "| arm | Brier | log-loss |",
    "|---|---|---|",
    `| candidate | ${f(sc.candidateBrier)} | ${f(sc.candidateLogLoss)} |`,
    `| market | ${f(sc.marketBrier)} | ${f(sc.marketLogLoss)} |`,
    `| \u0394 (cand \u2212 mkt) | ${f(sc.deltaBrier)} | ${f(sc.deltaLogLoss)} |`,
    ""
  ];
  if (sc.wilson) {
    lines.push(
      `outcome Wilson 95%: ${sc.wilson.successes}/${sc.wilson.n} = ${(sc.wilson.point * 100).toFixed(1)}% [${(sc.wilson.low * 100).toFixed(1)}, ${(sc.wilson.high * 100).toFixed(1)}]`,
      ""
    );
  }
  if (sc.bySport.length > 0) {
    lines.push("| sport | n | cand Brier | mkt Brier | \u0394 | P(better) |", "|---|---|---|---|---|---|");
    for (const s of sc.bySport) {
      lines.push(
        `| ${s.sport} | ${s.n} | ${f(s.candidateBrier)} | ${f(s.marketBrier)} | ${f(s.deltaBrier)} | ${f(s.pBetter, 3)} |`
      );
    }
    lines.push("");
  }
  lines.push(sc.harnessOk ? `PASS \u2014 ${sc.harnessNote}` : `CHECK \u2014 ${sc.harnessNote}`);
  return lines.join("\n");
}
