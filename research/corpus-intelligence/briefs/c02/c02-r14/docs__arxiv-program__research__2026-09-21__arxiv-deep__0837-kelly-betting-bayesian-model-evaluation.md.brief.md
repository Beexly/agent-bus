# docs/arxiv-program/research/2026-09-21/arxiv-deep/0837-kelly-betting-bayesian-model-evaluation.md

## What it is (1-2 sentences)
Kelly Betting as Bayesian Model Evaluation treats each candidate forecast model as a Kelly bettor wagering its bankroll on its own time-updating probabilities against market-implied probabilities, using terminal bankroll share to discriminate correct from misspecified models — separating models far earlier than log loss or Brier. The deep-read ledger verdict is ADAPT: a live model-selection layer for GSE's in-game win-probability models, pending real-NFL replay validation.

## Key metrics/methods (formulas where given, else "not specified")
- Bankroll update (quoted): w_i' = (p_i / m_i) · ∑_i m_i w_i — wealth compounds by the likelihood ratio of model vs market.
- Market probability = eigenvector of the outer product p·wᵀ; model credibility = eigenvector of wᵀ·p — a mutual-consistency fixed point between market prices and model wealths.
- Kelly-optimal growth equals Bayesian evidence accumulation (log bankroll = cumulative log-likelihood ratio).
- Compare models by terminal bankroll share; benchmark metrics: log loss, Brier score.
- Assumptions: models bet fractionally at market prices with no limits or costs; a coherent market probability reference exists and is bettable at every update.

## Data sources named
- Simulated only: a volleyball-like first-to-100, win-by-two contest with time-updating win probabilities. Candidate models: correct model (true p=0.50 or 0.53), incorrect model (p=0.53 or 0.50), a faulty recency model, and a noise-variable model. 110 probability-pair scenarios; evaluated after 5 games and after 50 games. No real-world data.

## Findings (numbers and facts, not vibes)
Correct-model identification rates (quoted exactly):
| Scenario | Kelly | Log loss | Brier |
|---|---|---|---|
| Correct 0.50 vs incorrect 0.53 | 55.1% | 49.9% | 49.9% |
| Correct 0.53 vs incorrect 0.50 | 76.3% | 80.5% | 80.5% |
| Faulty recency model | 96.0% | 73.1% | 80.2% |
| Noise-variable model | 74.4% | 57.6% | 58.3% |
| 110 scenarios, after 5 games | wins 98 (89%), ties 1, loses 11 | — | — |
| 110 scenarios, after 50 games | wins 61, ties 47, loses 2 | — | — |
**[OTHER]** — Kelly dominates early (5 games: 89% win rate vs scoring rules) and stays competitive late; edge is largest against structurally misspecified models (recency, noise). **[TRUST-SIGNAL — validates bankroll-based comparison as the faster, more discriminating model-selection criterion]**
- Near-indistinguishable case: Kelly barely beats chance (55.1%) when models differ only slightly in calibration — the method separates the structurally wrong, not the slightly-worse-calibrated. **[OTHER]**
- Caveats per the file: pure simulation; "market" is a construct (no vig, limits, stale lines); no transaction costs; assumes market probability observable and bettable at every update — false in thin live markets.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Kelly-tournament evaluator for GSE's live in-game win-probability models: maintain notional bankrolls for each candidate (current engine, challenger variants); at each play update each model "bets" its Kelly fraction against the de-vigged market live line; rank by log-bankroll growth over rolling 4-week windows; auto-promote dominating challengers — **OTHER**.
- Improvement experiment noted in the file: weight each model's bet by its own estimated calibration (reliability-curve slope) so overconfident models are automatically throttled — a "calibrated Kelly tournament" — **TRUST-SIGNAL**.
- Log bankroll = cumulative log-likelihood ratio gives a Bayesian-evidence framing for model comparison — **TRUST-SIGNAL**.

## Engine-actionable? (yes/no + one-line what)
Yes — implement the Kelly-tournament evaluator with notional bankrolls per candidate live-WP model replayed play-by-play against historical live odds; ADOPT only if on a 2024 replay it identifies the best-calibrated model within the first 6 weeks in ≥70% of bootstrap replications, beating Brier-based selection.
