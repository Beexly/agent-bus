# ops/archive/dated/SUNDAY_FRONTIER_MAXFORCE_AUDIT_2026-07-05.md
## What it is (1-2 sentences)
A massive session audit (2026-07-05, ~108KB, 887 lines) recording autonomous local implementation of proprietary "shadow" metrics (SLRS, QBI, RVI, CIG, DPI, CUW, NBP, PWS, PFS, MMS), guardrail scanners, API v1 shadow harness, draft workflow fences, AWS compatibility indexes, and first-month media queue fixtures — all draft/shadow-only, no live exposure.

## Key metrics/methods (formulas where given, else "not specified")
- Full metric catalog (all governed `SHADOW` lifecycle, `INTERNAL` exposure, weights protected, formulas not published in this doc):
  - **SLRS** Stale Line Risk Score — line freshness, source coverage, contradiction pressure, book dispersion, movement audit; `band: "BLOCK"` + `marketSignalAllowed: false` hard-blocks stale snapshots.
  - **QBI** QB Burden Index — raises burden with pressure, depth, down-distance friction, weather/context penalty, line disruption; burden ≠ QB quality/win probability. (Behavioral: pressure/depth/down-distance sensitivity as context load.)
  - **RVI** Role Volatility Index — snap-share/target/carry/route opportunity movement, depth-chart shock, injury/return uncertainty, teammate role shock, usage freshness; `volatilityBand: "BLOCK"`, `roleSignalAllowed: false` on stale usage or blocked source posture.
  - **CIG** Calibration Integrity Grade — ECE, Brier risk, stale calibration reports, drift pressure, calibration debt, low sample size; suppresses/blocks calibration use.
  - **DPI** Drift Pressure Index, **CUW** Conformal Uncertainty Width, **NBP** No-Bet Pressure (over reliability, freshness, calibration, drift, disagreement, contradiction, missing data, market mirage, responsible-gaming; reuses `computeNoBetStrength()`), **PWS** Playable Window Score (composes SLRS/source-rights/NBP/drift/calibration/QBI/RVI pressure), **PFS** Portfolio Fit Score (concentration, correlation, duplicate thesis risk), **MMS** Market Mirage Score (over MGI, SLRS, narrative heat, contradiction, dispersion, explainability, NBP, drift, calibration debt).
  - Skill-adjacent: Receiver Difficulty Index (increases with depth/tightness/contestedness), Expected YAC (rises with space, falls with leverage/depth), YAC Creation, Rush Environment Index, Expected Rush Yards (from REI + down-distance/field constraints + shrunk priors), Rush Over Expected (actual vs GSE expected).
  - Residual rollup: `yac-creation-gse` and `rush-over-expected-gse` play residuals → player-season summaries, rejects mixed metric/player/season direct rollups, `SHADOW`/`INTERNAL` only.
- No-bet governor integration: high modeled edge cannot override missing required evidence, stale market gravity, unclear source rights, calibration drift, or calibration debt (first red run failed on drift/debt producing `PLAY`, then hardened).
- Validation-split fixtures: PASS/WATCH/FAIL_CLOSED classification for RVI role-stability and PWS decision-window cases (clean/watch/stale/calibration-debt/blocked-source).
- Source-rights-reviewed historical validation adapters: fully cleared RVI/PWS/MMS + NBP adapt from nflverse/The Odds API/Sleeper/Scores24 fixture cases; manual-review and blocked sources fail closed.

## Data sources named
- nflverse, The Odds API, Sleeper (manual-review case), Scores24 (permission-blocked case), ESPN public fallback (blocked for derived API exposure), nflverse + The Odds API clearance in RVI/PWS/MMS/NBP adapter fixtures.

## Findings (numbers and facts, not vibes)
- Final all-workspaces test totals: **669 files / 8,235 tests passing** (web 539/7119; crypto 1/13; data-ingestion 16/131; ingestion-pipeline 6/60; prediction-engine 106/881; types 1/31) after DPI slice; **670 files / 8,239** after CUW.
- Guardrail selftest baseline: **115 denied / 10 ask / 55 allowed** (agent-bash-guard).
- Guardrail scans: commercial-copy (32 files), performance-claims (32 files), no-raw-ngs (1207 files), partner-offer-compliance (8 fixtures, fail closed), api-payload-rights (8 fixtures), openapi-security (3 contracts) — all PASS.
- LOCs recorded: `market-mirage-score.ts` 200, `no-bet-pressure.ts` 200, `qb-burden-index` metric + test + CIG 210/PFS 222/CUW 279/DPI 224; rollup 88/95/88 for yac-creation/REI-ish files; registry split sizes.
- Generated shadow metric evidence markdown: `docs/math/GSE_SHADOW_METRIC_EVIDENCE_REPORTS.md` (SLRS, QBI, RVI, CIG, DPI, CUW, NBP, PWS, PFS, MMS).
- Remaining risk explicitly stated: metrics are SHADOW-only, no model cards/drift cards/public-API/promotion; source-rights/IP adapters are code gates, not legal clearance; AWS indexes are local-only, not live.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (QB-BEHAVIOR) QB Burden Index drivers — pressure, depth, down-distance friction, weather/context penalty, line disruption — form a context-burden feature set directly reusable for situational QB behavioral profiling (burden ≠ quality separation is exactly the engine's stated need).
- (OTHER) Receiver Difficulty Index / Expected YAC / YAC Creation / Rush Environment Index / Expected Rush Yards / Rush Over Expected + residual rollups — play-level residual metrics feeding player-season summaries; usable as receiver/rusher skill-residual inputs.
- (OTHER) RVI (role volatility: snap-share, target/carry/route opportunity movement, depth-chart shock, teammate role shock) — directly relevant to fantasy role-stability modeling.
- (OTHER) NBP/PWS/SLRS/MMS/CIG/DPI/CUW — engine honesty/abstention plumbing; aligns with the engine's selective-gate doctrine.
- (TRUST-SIGNAL) No player/coach quotes; none.

## Engine-actionable? (yes/no + one-line what)
Yes — QBI driver set (pressure/depth/down-distance/weather/line-disruption) and RVI role-stability signals (snap-share, opportunity movement, depth-chart shock) are the closest thing in this chunk to behavioral features worth confirming against the current repo code; NBP/PWS selective-gate pattern corroborates the abstention-ladder doctrine.
