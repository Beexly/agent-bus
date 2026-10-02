# data/NFL_REPLAY_CALIBRATION_2026-09-04.md
## What it is (1-2 sentences)
Honest backtest report of the frozen GSE NFL prediction model replayed against 27 seasons (1999–2025 regular season) of nflverse closing lines: it finds the model is at break-even on win rate but negative on ROI, and its confidence score is mildly anti-informative. It also documents the replay's structural caveats (closing-line-only benchmark, synthetic book depth) and the rights posture for publishing the numbers.

## Key metrics/methods (formulas where given, else "not specified")
- **Break-even win rate at −110:** `110/210 = 52.381%`
- **Replay headline:** 15,647 decisive picks, 52.700% win rate, 95% CI [51.92%, 53.48%], z = 0.799 vs break-even → not statistically significant (z < 1.96)
- **Significance method:** normal approximation from W/L counts of each window (W=8246, L=7401 for 1999–2025; W=7906, L=7111 for 1999–2024; W=340, L=290 for 2025)
- **Per-market ROI (units staked):** SPREAD 48.86% win / ROI −6.53% (n=6778, push 189); TOTAL 49.49% / ROI −5.44% (n=6868, push 99); MONEYLINE 76.71% / ROI −1.96% (n=2001, push 4); overall ROI **−5.48%**
- **Moneyline pricing observation:** engine publishes moneyline only on heavy favourites (~−350), each win pays ~0.29 units vs 0.91 at −110 — so blending rates across markets is meaningless; ROI is the honest number
- **Synthetic-book pricing (in `buildHistoricalOddsInput`):** every spread/total pick priced at −110 → `offeredProb(-110) = 0.5238`, symmetric de-vig gives `fairProb = 0.5000`, so `rawEdge = fair − offered = −0.0238` for every pick; verified `edgeScore = 26` on both picks of a probe game and all 13,646 spread/total picks land in one Edge Index band (every pick grades LEAN — an artifact of the reconstruction, not a product defect)
- **Confidence inversion test (two-proportion):** premium band (70–79) 48.33% vs free band (65–69) 49.47%, z = −1.19, p = 0.235 → gap not significant; point estimate runs the wrong way
- **Lookahead control:** `lookahead errors: 0` over 15,308 picks; `PreGameFeatures` has no score field
- Spread-sign bug caught via zero pushes: pre-fix 36.0% on 139-pick sample (50 W / 89 L / 0 P); post-fix 49.3% with 5 pushes

## Data sources named
- nflverse `games.csv` (`schedules` release) — `spread_line`, `total_line`, `home_moneyline`, `away_moneyline`, finals — 7,276 rows; license `approved_open_license`, CC BY 4.0; attribution string required anywhere the figures appear: *"Data via nflverse (nflverse-data), licensed CC BY 4.0."*
- Internal: `scripts/backfill/historical-settlement-backfill.ts` (`--from=1999 --to=2025 --type=REG`), `scripts/analytics/replay-breakdown.ts`, `packages/prediction-engine/src/scoring.ts` (`computeEdgeScore`, PREMIUM_CONFIDENCE_THRESHOLD = 70), `packages/ingestion-pipeline/src/generate-signal-slate.ts`, `constants.ts` (heuristic confidence/composite weights UNCHANGED through v5.2.x; v5.1.0 isotonic calibration layer fit on live 2026 settled picks, not on this corpus), `docs/path-to-70.md` (≥70% target contradicted, needs retraction), `apps/web/app` + `apps/web/components` sweep (70% appears almost entirely in CSS gradients; `cockpit/calibration/page.tsx:504` describes tier threshold only), `apps/web/lib/scraping/source-rights-registry.ts:111`, `.claude/rules/scraping.md`
- Correction note: a parallel source survey wrongly claimed nflverse lacks closing lines; `games.csv` directly disproves it
- CFBD terms claim (from a JSON on owner's Windows machine, unverified in this container): commercial use of API data/derived outputs permitted, no standalone-dataset resale; `/lines` endpoint does not clearly distinguish open vs close — stays UNVERIFIED

## Findings (numbers and facts, not vibes)
- 6,967 in-range games → 15,939 settled picks (SPREAD 6,967, TOTAL 6,967, MONEYLINE 2,005); results 8,246 W / 7,401 L / 292 P
- Blended win rate 52.70% looks above break-even but is an artifact of mixing markets; every market has negative ROI; honest number is **ROI −5.48%**, roughly the size of the vig
- Confidence bands: 70–79 (n=3,770, 48.33%, ROI −7.52%) vs 65–69 (n=9,693, 49.47%, ROI −5.46%) vs 60–64 (n=183, 51.37%, CI [44.17%, 58.50%], ROI −1.91%) — higher confidence, worse results; no 80+ band exists (engine essentially never emits confidence ≥ 80); almost the whole board squeezed into 65–79
- Confidence decides paywall: 70–79 = PREMIUM (paywalled), 65–69 = FREE; no evidence paywalled picks outperform free ones — directly challenges the paid tier's premise
- Era splits flat and negative: 1999–2005 n=3,454, 48.90%, ROI −6.49%; 2006–2012 n=3,494, 49.86%, ROI −4.70%; 2013–2019 n=3,517, 49.22%, ROI −5.93%; 2020–2025 n=3,181, 48.70%, ROI −6.93% — no golden age, no decay
- 2025 alone: n=630, 53.968%, CI [50.08%, 57.86%], z=0.797 — interval equally consistent with losing money and a large edge; must not be quoted alone
- Corpus genuinely out-of-sample: nothing was fit on it (weights heuristic; isotonic layer fit on live 2026 picks)
- Rights posture: publishing win rate + CI with attribution is inside policy; only facts (lines, scores, schedule) were taken, the published number is a derived signal GSE generated
- Corpus limits: entry line == closing line by construction (all picks MATCHED_CLOSE; no CLV visible); book depth synthetic (one consensus close replicated across ideal book count); no designed holdout (walk-forward split is the honest next measurement); Edge Index/grade ladder untestable on this corpus

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] ROI, not win rate, is the only honest performance metric — directly actionable for how GSE scores and reports itself; applies to engine evaluation lanes
- [TRUST-SIGNAL] Publishing 52.7% with CI is defensible and on-brand; publishing it as an edge is not; `no-unsupported-performance-claims` guardrail passes — honest-calibration posture matches the public/private doctrine
- [OTHER] Confidence threshold 70 slices a narrow noisy band (65–79 contains nearly everything; no 80+ output) — paywall segmentation needs redesigned tiers, not a ladder off an anti-informative score
- [OTHER] Replay methodology blueprint: replay breakdown by market, two-proportion confidence-band test, lookahead-error counter, zero-push anomaly check for inverted lines — reusable for future model audits
- [OTHER] nflverse `games.csv` verified as a closing-lines source (7,276 rows) — corrects the source-survey record; matters for the college-football corpus search

## Engine-actionable? (yes/no + one-line what)
YES — retract the ≥70% target in `docs/path-to-70.md`; rebuild the confidence function (it's anti-informative) and re-design the 70 premium threshold; add ROI-by-market and confidence-band inversion to the standing calibration audit; walk-forward split as the next measurement.
