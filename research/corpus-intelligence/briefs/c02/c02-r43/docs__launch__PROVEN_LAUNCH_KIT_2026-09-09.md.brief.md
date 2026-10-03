# docs/launch/PROVEN_LAUNCH_KIT_2026-09-09.md

## What it is (1-2 sentences)
Launch messaging kit for the "PROVEN" phase declaration of Galaxy Sports Edge (NFL Week 1, 2026-09-09), with every number read from the live public-surface-truth endpoint at 16:48 UTC on 2026-09-09 (deployment `dc3645324`, basis `market_anchored_v4`) — calibration metrics, headlines, short-form lines, and explicit do-not-say rules.

## Key metrics/methods (formulas where given, else "not specified")
- Expected calibration error (bias-corrected): 0.037 against a 0.05 floor — PASS.
- Brier score: 0.210 against a 0.22 floor — PASS.
- Deployed model v5.2.7 calibration error on its own 258 rows: 0.058, 5th-percentile bound 0.044, floor 0.05 on the bound — PASS.
- Consecutive GREEN six-hourly gate runs: 5 against a required 3 — PASS.
- Sample: 380 settled moneyline picks against a 100-pick floor — PASS.
- Probability scored = publish-time market price rebuilt from the append-only odds table: mean implied probability per side across books quoting the game at or before pick generation, proportional de-vig.
- Exclusions counted, not hidden: picks generated after kickoff excluded and counted (104); picks whose price the odds table cannot reproduce excluded and counted (3); three-way soccer moneylines excluded (128). Estimator and exclusions documented in `docs/ops/CALIBRATION_ECE_ESTIMATOR_2026-09-09.md`.

## Data sources named
- `https://www.galaxysportsedge.com/api/ops/public-surface-truth` (single live source of truth; live surface wins over this doc if numbers move).
- Append-only odds table (publish-time price reconstruction).

## Findings (numbers and facts, not vibes)
- All five gate metrics passed at the 2026-09-09 16:48 UTC reading; nothing projected.
- Positioning rule: "we're not AI, we're math you can read" (`docs/positioning.md`); engine is a deterministic factor model — the words "AI", "AI-powered", "machine learning", "our AI", "artificial intelligence" are banned from all copy.
- Headline claims traceable to the table: 380 settled moneyline picks; ECE 0.037 vs 0.05 floor; every pick priced at publish time from the odds table; nothing re-scored after kickoff; 5 consecutive GREEN gates (needed 3).
- Do-not-say list: no "win rate", "ROI", "units", "guaranteed", "lock", "can't lose" claims; hit rate is on the surface (0.65 on this sample) but must not be quoted as a headline (not a calibration claim; reads as a profit promise without price context).
- 0.037 must not be rounded down to "under 4%" in a way implying accuracy — it is a calibration error (gap between stated probability and observed frequency), not an accuracy figure.
- Calibration receipt published automatically; calibration report unlocks `/calibration`; per-pick factor breakdowns on `/picks`; pricing page carries founding rates with a "Proven step-up" and grandfathering.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] The 380-pick / 0.037-ECE / 0.210-Brier calibration gate with all exclusions counted (104 post-kickoff, 3 unpriced, 128 three-way soccer) is the canonical TRUST-SIGNAL artifact — auditable calibration instead of headline win rates.
- [TRUST-SIGNAL] The 0.65 hit rate is deliberately withheld from headlines as a profit-promise risk — a doctrine for how engine results may be discussed publicly.
- [TRUST-SIGNAL] Five consecutive GREEN six-hourly gates (need three) before the PROVEN word is used — a redundancy requirement on stability claims.
- [OTHER] "Not AI, math you can read" positioning and the deterministic-factor-model ban on AI language shape all public copy but carry no football signal.

## Engine-actionable? (yes/no + one-line what)
Yes — the calibration methodology (publish-time de-vigged market price as scoring probability; bias-corrected ECE + Brier with stated floors) is the benchmark target any replacement probability module must meet or beat.
