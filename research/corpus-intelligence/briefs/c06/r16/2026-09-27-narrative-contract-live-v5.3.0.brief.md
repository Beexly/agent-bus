# calibration-proposals/2026-09-27-narrative-contract-live-v5.3.0.md
## What it is (1-2 sentences)
CalibrationProposal (v5.2.7 → v5.3.0, status IMPLEMENTED, 2026-09-27, owner-authorized): promotes `narrative_contract` from STORED to LIVE as the ninth live edge part in the week-3 edge, raising the edge for `2026_03_LAC_BUF` by +0.0012485727537787205 (0.03 engine prior × +0.04161909179262402 signed gap).
## Key metrics/methods (formulas where given, else "not specified")
- Edge change: 0.30259224777263855 → 0.30384082052641725 for 2026_03_LAC_BUF (+0.0012485727537787205 = 0.03 × +0.04161909179262402).
- Roster-level walk-forward: train 2018–2024 (n=1942), holdout 2025 (n=285): r=+0.112232, slope=+0.051235, se=+0.026966 — passes both out-of-sample bars (|r| ≥ 0.08, |slope| > se); f1=0, f2=0; only f3 (no week-3 row) missing.
- Reproduction: `measure-narrative-contract.ts` exit 0 under tsx; `compute-week3-contract.ts` exit 0; week-3 row from the published 2026 roster (BUF 57 contract players, LAC 51): gap −0.131M, p_home 0.520809, signed +0.041619.
- Registry: row appended with the existing 0.03 engine prior (no ninth prior, no rescale); `signed_source` names the formula, fitted intercept 0.5414884844705745 and slope 0.15808219460661174, and the three files read.
- Verification after change: engine 847/847 files, 6,144/6,144 tests pass; `tsc --noEmit` exit 0; reasoning 23/23; locked count guards updated (8→9 LIVE, narrative_contract off the dark list), never relaxed.
- Heuristic confidence weights untouched; MIN_PUBLISH_CONFIDENCE stays 50; no env flag flips; `publishes_pick` stays false.
- Caution (measured): in-sample r halves out of sample (train 0.279 → holdout 0.112) — the holdout number is the only one that counts and it clears both bars; recorded as a judgment call: a +0.0012-point contribution, directionally home, from the weakest of the nine parts.
## Data sources named
Published 2026 roster (BUF 57 contract players, LAC 51); the three files read by the measurement scripts (named in `signed_source`); roster-level 2018–2025 data.
## Findings (numbers and facts, not vibes)
- This is the ninth week-3 edge part; the document explicitly frames it as a scoring addition for one game-week from a measured holdout — not a recalibration of confidence, not a publish-gate flip, not a win-rate claim; the calibration page stays dark until a separate founder decision.
- Version discipline: scoring changed, so MODEL_VERSION bumped to v5.3.0 (supersedes v5.2.7); the provenance seal and AGENTS.md law are unchanged by the promotion.
- Honest holdout accounting is demonstrated: the proposal leads with the out-of-sample attenuation (0.279 → 0.112) and labels the promotion a judgment call on the weakest part.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the version-bump-on-any-scoring-change rule, measured-out-of-sample-only evidence bar, and explicit judgment-call labeling are the honest-calibration doctrine in practice.
- OTHER: roster contract incentive as a week-3 edge feature (narrative/market-behavior signal entering the edge as a heuristic prior).
## Engine-actionable? (yes/no + one-line what)
Yes — narrative_contract is now live as the ninth week-3 edge part; reuse its promotion protocol (walk-forward with holdout bars, registry row with prior, full verification suite) for future part promotions.
