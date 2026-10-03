# arxiv-program/research/2026-09-21/arxiv-deep/2152-weighted-sets-probabilities-minimax-weighted-regret.md
## What it is (1-2 sentences)
Research ledger on Halpern & Leung's weighted-sets-of-probabilities and minimax weighted expected regret (arXiv:1302.5681); verdict ADAPT as the decision-theoretic foundation for GSE's engine-variant ensemble management — keep a weighted set of candidate models, likelihood-update weights weekly, and choose picks/stakes by minimizing maximum weighted expected regret.
## Key metrics/methods (formulas where given, else "not specified")
- Weighted set P^+ = {(Pr, α_Pr)}, α_Pr ∈ [0,1]; likelihood update: α_Pr ← Pr(E)/sup_{Pr'∈P} Pr'(E); convergence theorem: weights of the closest measures → 1 a.s. if observations come from a stable measure (then MWER → subjective expected utility).
- MWER rule: reg_{M,P^+}(f) = sup_{Pr∈P}(α_Pr · Σ_s Pr(s)·reg_M(f,s)); prefer f iff its maximum weighted expected regret is smaller; strictly less conservative than maximin expected utility.
- Pure decision theory — no data, no experiments; theorems and worked examples (T-800 cupcake robot, restaurant decision tree).
## Data sources named
None (no empirical content).
## Findings (numbers and facts, not vibes)
- Convergence theorem: under a stable data-generating measure, weights of closest measures → 1 and all others → 0 a.s. (unlike measure-by-measure updating, which doesn't concentrate on the truth).
- MWER can be dynamically inconsistent (ex-ante optimal plans not followed ex-post); paper discusses remedies (resolute choice, sophisticated planning) without resolving which to use. No numerical results.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: challenger/variant management for the engine — maintain 4–6 model variants (production, recalibrated variants, market-following, conservative-prior) with weekly rolling-window likelihood updates, pruning α < 0.05; final slate audit before posting chooses picks minimizing max weighted regret. Also informs the season-plan-vs-weekly-reoptimization tension.
## Engine-actionable? (yes/no + one-line what)
Yes — build a variant registry + rolling likelihood updater + MWER slate audit; gate: walk-forward season profit ≥1.05× best single variant AND drawdown no worse AND the ex-post best variant's weight >0.5 within 8 weeks of a regime change.
