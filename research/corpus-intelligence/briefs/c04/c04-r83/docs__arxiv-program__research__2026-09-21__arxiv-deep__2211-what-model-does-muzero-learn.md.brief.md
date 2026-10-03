# docs/arxiv-program/research/2026-09-21/arxiv-deep/2211-what-model-does-muzero-learn.md
## What it is (1-2 sentences)
Full-text ledger (ADAPT verdict) of He, Moerland, de Vries & Oliehoek (2023), arXiv:2306.00840, "What Model Does MuZero Learn?" — an audit of whether MuZero's learned "value-equivalent" model is actually value-equivalent and useful for MCTS planning. It constrains the MCTS-over-learned-engine proposals in ledgers 2205 (DIMA) and 2210 (Neural Game Engine): the only paper in the run that maps when planning over a learned simulator breaks.

## Key metrics/methods (formulas where given, else "not specified")
- h-horizon action-sequence value: v^{a_{t:t+h−1}}(s_t) = Σγ^k r_{t+k} (eq. 3); value prediction error |v^π_h(s_t) − v̂^π_h(s_t)| of learned model vs ground truth (Def. 2, eq. 7), estimated by Monte Carlo over states from the behavior policy's state distribution.
- Policy evaluation: error vs horizon for behavior policy π^MuZero and for unseen policies, correlated with action-sequence probability under the behavior policy.
- Policy improvement: MCTS with learned vs ground-truth model × learned-policy prior vs uniform ("free search") prior, leaf values from model rollouts (not value net), horizons {16, 128, 32}.
- Mechanism check: value prediction error of MCTS simulated trajectories + TV/KL divergence between policy prior and MCTS visit distribution.

## Data sources named
No static dataset. Trained agents in three deterministic fully-observable environments: Cart Pole (30 MuZero agents, 100K steps), deterministic Lunar Lander (30 agents, 1M steps), Atari Breakout (20 agents, 500K steps, EfficientZero setup). Checkpoints saved across each agent's lifecycle; results as means ± standard errors.

## Findings (numbers and facts, not vibes)
- Value equivalence FAILS: even on its own behavior policy, prediction error grows quickly with horizon ("does not imply that we learn models that are actually value equivalent").
- Unseen policies: error grows as action sequences become less probable under the behavior policy — the model cannot evaluate what it has not executed.
- Free search (uniform prior + learned model): fails completely in Lunar Lander and Breakout; in Cart Pole supports search weakly but far below ground-truth free search.
- With policy prior: learned-model MCTS improves over the prior alone in Cart Pole/Lunar Lander (given enough simulations) but the improvement is small vs ground-truth model; in Breakout it never beats the prior alone.
- Mechanism: policy prior lowers TV/KL vs MCTS visit distribution → visits actions the prior favors → smaller value prediction error. Quote: "apart from biasing the search, the policy prior may also serve to prevent the search from exploring directions where the learned model is less accurate."
- Authors' caveat: results specific to value-equivalence losses; reconstruction-based (Dreamer) or temporal-consistency (EfficientZero) losses may generalize better in low-data regimes — untested hypothesis. Deterministic toy environments only; no stochastic/partial-observability/multi-agent tests.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the novelty-decile error audit is a template for knowing when a learned simulator's outputs can be trusted — error vs play-call novelty pins the trustworthy planning region.
- COACHING: directly gates any play-call/4th-down/go-for-it optimizer built on a learned play simulator — the league play-call distribution as a strong policy prior is the paper's fix.
- OTHER: MCTS-over-learned-model planning discipline; constrains ledgers 2205/2210 engine proposals.

## Engine-actionable? (yes/no + one-line what)
yes — Build the planning-bounds harness: audit the NFL play simulator's EPA-prediction error vs rollout horizon (1–8 s) and vs play-call novelty (route-concept embedding distance from historical distribution), constrain MCTS search with the empirical league play-call prior (down/distance/formation-conditioned), and log TV divergence between prior and visit distribution as a health metric; gate any play-call optimizer on ADOPT criteria (≥ +0.05 EPA/play over historical policy on 2024 held-out weeks, uniform-prior search must not beat the constrained version).
