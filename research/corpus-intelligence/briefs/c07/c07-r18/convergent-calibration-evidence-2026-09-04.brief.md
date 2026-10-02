# data/CONVERGENT_CALIBRATION_EVIDENCE_2026-09-04.md
## What it is (1-2 sentences)
Evidence memo (2026-09-04) presenting three independent measurements — different populations, different methods — converging on one verdict: the model's confidence score has no resolution, and the ≥80 tail wins LESS often than the board average.
## Key metrics/methods (formulas where given, else "not specified")
- Win rate vs claimed rate (152 graded picks at confidence ≥80, live production).
- Brier decomposition (1,663 graded WIN/LOSS picks, live production; Murphy uncertainty 0.2493 vs base rate 52.6%).
- AUC (Mann-Whitney) with seeded permutation p (13,646 spread/total picks, 1999–2025 replay of the frozen model, via `scripts/analytics/replay-discrimination.ts`, PR #698).
- Calibration floors: Brier ≤ 0.22 / ECE ≤ 0.05 (D2 decision).
## Data sources named
Live production reads (2026-09-02/03): 152 graded picks at ≥80, 1,663 graded WIN/LOSS picks; 1999–2025 replay corpus of frozen model; `docs/ops/CLAUDE_DECISIONS_20260902.md` (D2, D3); `docs/data/NFL_REPLAY_CALIBRATION_2026-09-04.md`; `scripts/analytics/replay-calibration.ts` (walk-forward market calibration, Wave 3 main build).
## Findings (numbers and facts, not vibes)
- Measurement 1: 61/152 wins (40.13%) at mean claimed 86% — inverted (corrected from an earlier live read of 37%).
- Measurement 2: Brier resolution term 0.0054 (≈0) — no resolution.
- Measurement 3: replay AUC 0.4965, p = 0.4113 — no discrimination; controls: |line| magnitude 0.4982, rest 0.5019, week 0.5073 (all ≈0.50).
- Blended replay win rate 52.70%; honest ROI −5.48% per unit staked. A pick labeled ~86% wins at 40%.
- Corrected earlier claim: confidence is NOT "mildly anti-informative" from the 70–79 band; correct statement is no discrimination (AUC ≈ 0.5).
- Any measurement predating the nflverse `spread_line` sign fix (PR #695) is void as corpus-poisoned; none of the three predates it.
- Consequence (decided D2/D3 2026-09-02): calibration floors stay; PERFORMANCE_STATS, LIVE_BOARD, PUBLISH_LEDGER stay closed; publish the honest "collecting" state; the inverted ≥80 tail is monitored, never shipped as probability; no MODEL_VERSION change four days out from launch.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: inverted tail monitored but never shipped as probability; honest "collecting" state instead of fabricated confidence; calibration floors as publication gates; correction discipline (37% → 40.13%, "mildly anti-informative" → no discrimination).
## Engine-actionable? (yes/no + one-line what)
yes — enforce the Brier ≤0.22 / ECE ≤0.05 publication floors and never serve the ≥80 tier as a probability until a calibration proposal repairs it.
