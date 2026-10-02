# arxiv-program/research/2026-09-21/arxiv-deep/1931-offline-deep-reinforcement-learning-for-dynamic-pricing.md
## What it is (1-2 sentences)
Full-text read of arXiv:2203.03003 (Khraishi & Okhrati, 2022): applies offline Conservative Q-Learning (CQL) to consumer-credit pricing on ~200k real US auto-loan applications, with no online price experimentation and no assumed demand functional form. The ledger's GSE translation is offline-CQL **stake sizing**: state = per-bet features, action = stake ∈ {0, 0.25u, 0.5u, 1u, 2u}, reward = settled profit.
## Key metrics/methods (formulas where given, else "not specified")
- Reward: r(s_t,a_t) = p(Accept_t | s_t,a_t) · (expected profit if accepted per Phillips et al. 2015: interest income − capital costs − credit risk).
- CQL objective: standard CQL(ℋ) conservative actor-critic (Kumar et al. 2020).
- π_Opt baseline: a*_t = argmax_{a∈[2.5%,12.5%]} p̂(Accept|s_t,a)·profit(s_t,a), p̂ from train logistic regression.
- Metric: expected profit via a model-based off-policy evaluator (logistic price-response fitted on test); MAPD of prices vs historical policy; sensitivity re-evaluation under alternative response models.
## Data sources named
Columbia CPRM auto-loan dataset (~200,000 approved US auto-loan applications: interest rate, term, approved amount, FICO score, accept/reject outcome); synthetic loan data with known demand forms. No code URL stated.
## Findings (numbers and facts, not vibes)
- CQL policy: **+21% expected profit** over historical policy (3-seed average) with **MAPD < 15%** of prices vs historical; average price pushed down 6.8% → 5.9%, consistent with documented historical over-pricing.
- Parametric π_Opt: **+34% expected profit** with 24% MAPD — but fragile: under alternative response models with similar fit, estimated gain ranged from **−7% to +34% (avg 12.6%)**, "strong evidence of overfitting."
- Baseline logistic regression pseudo-R² was low — the regime where model-free offline RL's advantage is largest.
- Synthetic experiments: CQL recovers near-optimal pricing under misspecified demand.
- Ledger's GSE gate: ADOPT iff CQL staking beats fractional-Kelly ROI by ≥2pp on realized 2024 settlement with stake MAPD ≤ 25% and lift survives 3 alternative outcome models.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the fragility lesson — parametric profit/stake rules (Kelly with plug-in probabilities) are the analog of π_Opt; estimated edge gains must survive alternative outcome-model re-scoring before being trusted.
- OTHER: portfolio-level staking discipline — the model-free vs parametric comparison is a template for auditing any GSE sizing rule for overfitting to the evaluator.
## Engine-actionable? (yes/no + one-line what)
Yes — offline CQL on logged 2021–2023 picks (state = edge, de-vigged fair odds, market odds, CLV history, book, bankroll fraction; action = discrete stakes; reward = settled profit) with a Garrett-approved trust region (MAPD ≤ 25% vs fractional-Kelly) is a concrete ~2-week build, testable on realized 2024 ROI instead of model-estimated profit (stronger than the paper).
