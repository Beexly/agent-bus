# arxiv-program/research/2026-09-21/arxiv-deep/0716-knowing-when-defer-selective-prediction-knowledge.brief.md
## What it is (1-2 sentences)
Deep read of Mitton et al. (2026), arXiv:2509.21514v4: adds a no-retraining "selective prediction layer" to deployed knowledge-tracing models using MC-Dropout variance as the abstention signal, and shows via BALD decomposition that classical heuristic proxies cannot recover the model-native epistemic signal. Verdict ADAPT as a fourth GSE abstention mechanism alongside conformal/Mondrian, BALToR, and disagreement signals.
## Key metrics/methods (formulas where given, else "not specified")
- Selective layer: M=100 stochastic forward passes with dropout active at inference; total uncertainty = entropy of aggregated predictive distribution; selective signal = std/variance of predictions across MC samples; abstain the most-uncertain fraction to hit target coverage (c=0.80).
- Predictive entropy: H = −Σ_k p̄_k log p̄_k, p̄_k = (1/M)Σ_m p_k^(m).
- BALD epistemic uncertainty = total entropy − mean MC-sample entropy; nested regression R² of epistemic uncertainty on (difficulty, +ability, +IRT ambiguity, +curriculum coverage).
- IRT baseline: 2PL IRT, ability θ fit per student from first 30 questions via MLE, abstention signal 1−2|p_IRT−0.5|.
- 95% bootstrap CIs (200 resamples) on all lift numbers.
## Data sources named
Eedi mathematics learning-platform dataset (not public): 4,257 questions, 11,994 train students / 1,199,266 interactions, 1,493 validation students / 149,278 interactions, student-disjoint splits, ≥100 responses/student.
## Findings (numbers and facts, not vibes)
- Baseline accuracy: AKT 72.44%, SAKT 72.27%, DKT 72.20%; AUC 76.20–76.75%.
- At c=0.80: MC-Dropout variance lifts accuracy +2.3–3.0 pp, AUC +1.9–2.4 pp, F1 +1.4–4.3 pp across all three architectures, no retraining; bootstrap CI margins ±0.13 pp (accuracy), never crossing zero.
- Targeting: deferred-set error rate 1.45–1.60× the kept set; on hardest questions 2.3–2.5×, within every difficulty quartile >1.0.
- Fairness: abstention 16–23% across ability quartiles; weakest students lowest at 16–17% (not disproportionately deferred).
- IRT baseline lift 0.41–0.46 pp AUC vs MC-Dropout 2.0–2.4 pp — MC variance is ~5× stronger.
- Variance decomposition: difficulty alone 0.4–1.5%; +ability → 0.8–1.8%; +IRT ambiguity → 1.1–3.7%; +4-level coverage → ≤3.8% linear; nonlinear RF bound 9.8–23.2%; residual unexplained 76.8–90.2% — heuristic proxies capture <4% of the epistemic signal linearly.
- Calibration caveat: mean entropy correlates −0.62 with question difficulty (class-imbalance artifact, Appendix C.3).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: MC-Dropout variance (M=50–100) as a no-retraining pick-posting gate; the 5×-over-IRT margin is the disciplining number — calibrated heuristic signals like |p−0.5| are provably weak substitutes.
- TRUST-SIGNAL: BALD decomposition lesson — heuristic proxies (matchup difficulty, consensus) cannot recover model-native epistemic uncertainty, so GSE should not trust difficulty/consensus-style heuristics as abstention signals.
- OTHER: fairness analogue for GSE — check deferral rate across sports/leagues and spread-size quartiles so the abstainer doesn't just defer the hardest games.
- OTHER: paper flags deep ensembles and temperature-scaled softmax as stronger baselines it did NOT test — open comparison to run.
## Engine-actionable? (yes/no + one-line what)
Yes — implement MC-Dropout variance (or seed-disagreement for non-dropout models) per candidate pick, defer top-uncertain fraction to c=0.80, backtest on 2024–2025 picks vs no-abstention and vs |p−0.5| heuristic; acceptance: ≥1.5 pp hit-rate lift and ≥1.0 pp over heuristic with deferred/kept error ratio ≥1.3.
