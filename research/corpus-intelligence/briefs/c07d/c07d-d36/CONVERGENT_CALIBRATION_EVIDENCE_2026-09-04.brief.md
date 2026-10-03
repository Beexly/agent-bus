# data/CONVERGENT_CALIBRATION_EVIDENCE_2026-09-04.md

## What it is (1-2 sentences)
Corpus record of three independent calibration measurements — live ≥80-tail win rate, Brier decomposition on live graded picks, and a 1999–2025 replay AUC — that converge on one verdict: the confidence score has no resolution and the ≥80 tier is inverted (wins less than the board average). It also codifies the resulting decisions: calibration floors (Brier ≤ 0.22 / ECE ≤ 0.05), closed publish surfaces, and monitoring of the inverted tail.

## Key metrics/methods (formulas where given, else "not specified")
- **Measurement 1 — tail win rate vs claimed rate:** 152 graded picks at confidence ≥80, live production, read 2026-09-02 → 61 wins = 40.13% vs mean claimed 86% (inverted). Production re-read 2026-09-03 confirmed the same verdict with 0 bootstrap/unpublished/seed rows in the population. An earlier live read reported the tail at 37%; the corrected observed value is 61/152 (40.13%), corrected in the decisions file's own report-inconsistencies section.
- **Measurement 2 — Brier decomposition:** 1,663 graded WIN/LOSS picks, live production → resolution term **0.0054 (≈0)**; Murphy uncertainty 0.2493 vs base rate 52.6%. (No equation written in the file; terms stated verbatim.)
- **Measurement 3 — replay discrimination:** 13,646 spread/total picks, 1999–2025 replay of the frozen model → AUC (Mann-Whitney) **0.4965**, seeded permutation **p = 0.4113** (no discrimination). Controls: |line| magnitude 0.4982, rest 0.5019, week 0.5073 — all ≈0.50. Synthetic pricing at both sides −110.
- **Blended corpus stats (1999–2025 replay):** 52.70% blended win rate; honest ROI **−5.48% per unit staked** (blended rate is an artifact of averaging markets priced differently).
- **Calibration floors (D2, 2026-09-02):** Brier ≤ 0.22 / ECE ≤ 0.05; nothing calibrated is published; PERFORMANCE_STATS, LIVE_BOARD, PUBLISH_LEDGER stay closed; publish the honest "collecting" state.
- **D3 (2026-09-02):** inverted ≥80 tail is monitored, never shipped as probability; first item for the next calibration proposal. No MODEL_VERSION change four days out from launch (launch date not stated in file; launch ≈ 2026-09-08 is INFERENCE).
- **Corpus-poisoning gate:** any measurement predating the nflverse `spread_line` sign fix (PR #695) is void; none of the three predates it in derivation — the replay ran on the fixed corpus.
- **Corrected claim:** confidence is NOT "mildly anti-informative" from the 70–79 band (corrected in #698 by its own author); correct statement is **no discrimination (AUC ≈ 0.5)**.
- **In-flight work:** Wave 3 main build on `hermes/night-2026-09-04`: `scripts/analytics/replay-calibration.ts` — walk-forward market calibration, reliability curves, Brier decomposition, ECE with bootstrap CIs.

## Data sources named
- Live production graded picks (152 at confidence ≥80; 1,663 WIN/LOSS total), recorded in `docs/ops/CLAUDE_DECISIONS_20260902.md` D2/D3.
- nflverse corpus, post `spread_line` sign fix (PR #695).
- 1999–2025 frozen-model replay corpus, 13,646 spread/total picks (script + method in PR #698, `scripts/analytics/replay-discrimination.ts`).
- Related artifacts: `docs/data/NFL_REPLAY_CALIBRATION_2026-09-04.md` (52.70% blended win rate, −5.48% ROI, Wilson-bound slice tests); `docs/ops/CLAUDE_DECISIONS_20260902.md` (D2 floors/live resolution, D3 inverted-tail monitor); `scripts/analytics/replay-calibration.ts` (walk-forward market calibration, in progress on `hermes/night-2026-09-04`).

## Findings (numbers and facts, not vibes)
1. Three independent measurements on three different populations (≥80 tail only; all graded picks; 27-season historical replay) using three different methods (raw win-rate comparison, Brier resolution, rank-statistic AUC with permutation significance) share no estimator and arrive at the same answer: **zero resolution** in each.
2. The ≥80 tail: 152 graded picks, mean claimed confidence 86%, 61 wins → **40.13%** (corrected from an earlier 37% report). Corroborated, not suspected.
3. Brier decomposition on 1,663 graded WIN/LOSS picks: resolution term **0.0054 (≈0)**; Murphy uncertainty **0.2493** vs base rate **52.6%**.
4. Replay: AUC **0.4965**, seeded permutation **p = 0.4113** → no discrimination, a coin flip; controls |line| magnitude 0.4982, rest 0.5019, week 0.5073.
5. The replay's synthetic pricing (both sides at −110) cannot explain the live measurements away — the live tail is inverted on its own and the live resolution term is ≈0 on its own.
6. 1999–2025 replay blended win rate **52.70%**; honest ROI **−5.48% per unit staked** (the blended rate is an averaging artifact across differently-priced markets).
7. Overlap between the three populations is at most incidental.
8. Decisions taken: calibration floors Brier ≤ 0.22 / ECE ≤ 0.05; nothing calibrated published; PERFORMANCE_STATS, LIVE_BOARD, PUBLISH_LEDGER closed; honest "collecting" state published; inverted ≥80 tail monitored, never shipped as probability; first item for the next calibration proposal; no MODEL_VERSION change four days pre-launch; writing the calibration proposal is agent work, flipping the version is the founder's.
9. Walk-forward market calibration build in progress: `scripts/analytics/replay-calibration.ts` (reliability curves, Brier decomposition, ECE with bootstrap CIs) on `hermes/night-2026-09-04`.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL (foundational):** This is the corpus's charter for the trust/calibration program. The mechanism: public confidence numbers are meaningless until resolution is demonstrated, so the public posture is the honest "collecting" state and the internal posture is hard floors (Brier ≤ 0.22, ECE ≤ 0.05). Any trust-target intake that prices confidence must pass through these gates.
- **OTHER — calibration/sizing lane:** The ≥80-tail inversion (40.13% vs 86% claimed) is the first item for the next calibration proposal; sizing or probability logic that multiplies by raw confidence is directly contradicted by this finding and must use post-calibration values only. The −5.48%/unit honest ROI is the baseline any calibration improvement must beat.
- **OTHER — QA/methodological value:** The convergence argument itself (three populations, three methods, no shared estimator, incidental overlap) is the template for how calibration claims must be evidenced in this corpus: corroboration across independent measurements, not a single number.

## Engine-actionable? (yes/no + one-line what)
Yes — three hard facts to wire: (1) ≥80 tail wins 40.13% (61/152), so never ship confidence as probability and never size on raw confidence; (2) calibration gates Brier ≤ 0.22 / ECE ≤ 0.05 gate every publish path; (3) −5.48%/unit replay ROI is the honest baseline for any calibration-improvement target.

## References named in file
- `docs/data/NFL_REPLAY_CALIBRATION_2026-09-04.md`
- `docs/ops/CLAUDE_DECISIONS_20260902.md` (D2, D3)
- PR #698 / `scripts/analytics/replay-discrimination.ts`
- `scripts/analytics/replay-calibration.ts` (on `hermes/night-2026-09-04`)
- PR #695 (nflverse `spread_line` sign fix)
