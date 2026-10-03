# arxiv-program/research/2026-09-21/arxiv-deep/2142-conformal-risk-averse-decision-making.md
## What it is (1-2 sentences)
Research ledger on conformal risk-averse decision making with action-conditional guarantees (arXiv:2606.05551); the finite-sample AC-RAC algorithm converts a black-box predictive distribution into a bet/no-bet policy with a per-action (bet vs pass) safety certificate, filling GSE's gap between conformal calibration and betting decisions.
## Key metrics/methods (formulas where given, else "not specified")
- Action-conditional safety: ∀a∈A, P(u(a(X),Y) ≥ ν(X) | a(X)=a) ≥ 1−α; max-min rule a^C_RA(x)=argmax_a min_{y∈C(x)} u(a,y).
- AC-RAC: action-specific nonconformity score λ*_a(x,y)=inf{λ_a≥0: y∈QuantileSet_{1−t̂(x,λ_a)}[u(a,Y)|Y∼f_x]} (Eq. 14), pinball loss ℓ_α(u,v)=(v−u)(1{u≤v}−α), optimized via projected subgradient descent; Thm 4.3 gives distribution-free lower bound under exchangeability. Code: https://github.com/Telvc/AC-RAC.
- Scope limited to finite discrete actions; continuous stake sizing needs discretization.
## Data sources named
Medical: COVID-19 Radiography Database (70/10/20 split, Inception-v3 embeddings, 4 treatment actions); Recommender: user–item pairs, ratings 1–5, binary {No-Rec, Rec} actions (80/10/10); 40 random seeds; α sweeps ∈ {0.01,0.02,0.03,0.05,0.1}; baselines RAC (marginal), score-1, score-2, calibrated best-response.
## Findings (numbers and facts, not vibes)
- Medical (α=0.05): AC-RAC is the only method with valid conditional coverage across ALL actions; baselines never select action 2 (Quarantine), leaving their conditional error undefined there; AC-RAC selects it on 2.72% of instances.
- Critical error rate (action-scaling ablation): AC-RAC 0.21–0.35% vs RAC 3.35–4.70%; average utility within 5% of RAC.
- Non-conservativeness: at α=0.05 mean set size AC-RAC 3.373 vs RAC 3.252 (~3.7% increase); FDR 0.699 vs 0.682.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: the decision layer the engine's calibration pipeline lacks — bet/no-bet (later tiered stakes) filtered by a certified max-min rule with a per-action floor ν(x) reportable on each pick card; defined utility u(bet,y) = realized profit given true outcome.
## Engine-actionable? (yes/no + one-line what)
Yes — build AC-RAC as the final pick filter with utility = realized profit; gate: (1) ≥95% empirical action-conditional coverage on a 3-season backtest, (2) Sharpe AND Calmar ≥1.10× the current fixed-fraction rule, (3) bet volume ≥30% of baseline.
