# arxiv-program/research/2026-09-21/arxiv-deep/1749-numeraire-property-drawdown-constrained-growth-optimal.md
## What it is (1-2 sentences)
Deep-dive ledger on Kardaras, Obłój & Platen (2012), arXiv:1206.2305: proves a drawdown-constrained growth-optimal (numéraire) strategy exists, is unique, and is given explicitly by the Azéma–Yor transform of the unconstrained Kelly fund — operationally, a state-dependent fraction of wealth in the Kelly fund vs cash, set by the acceptable drawdown parameter α. Pure stochastic-analysis theory; verdict ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Drawdown constraint: X_t ≥ α · max_{s≤t} X_s, α ∈ [0,1).
- Numéraire property (via expected relative return): X/X̂ a nonnegative local martingale (Theorem 1.3, under no-arbitrage-of-first-kind (A1) + long-run growth (A2)).
- Azéma–Yor transform ^αX̂: model-independent pathwise bijection between wealth processes and drawdown-constrained ones; has numéraire property in the constrained class; turnpike theorem (3.6): asymptotically growth-optimal = limit of finite-horizon numéraire strategies.
- Operational form: at each time invest a fraction of current wealth, "depending on the current level of drawdown," in fund X̂ and remainder in baseline asset; with savings baseline, X̂ and ^αX̂ share the same instantaneous Sharpe ratio (both on Markowitz efficient frontier).
- Proposed discrete-time implementation (ledger's own reconstruction, INFERENCE): risky fraction π = 1 − α/d_t where d_t = B_t/M_t (bankroll / running max), i.e., risk only the cushion above the α floor; suggested start α = 0.7 (never lose >30% from peak).
## Data sources named
None — no dataset. Appendix B illustrative example only.
## Findings (numbers and facts, not vibes)
- No numerical results. Theoretical findings: existence + uniqueness of drawdown-constrained numéraire; explicit Azéma–Yor construction; turnpike convergence; constrained-optimal wealth process trades "long-term growth for a path-wise capital guarantee."
- GSE has no drawdown-control layer on staking today (per ledger's map read): no α parameter, no governor; Wave-4 drawdown ledgers are diagnostic/reactive, this paper is the constructive counterpart. [OTHER]
- The construction decomposes cleanly: modeling → build X̂ (KellyBoost portfolio / 1744–1746 sizer); preferences → choose α. [OTHER]
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Existence/uniqueness + explicit construction of drawdown-constrained growth-optimal portfolio [OTHER]
- State-dependent Kelly-fund/cash mix rule governed by drawdown state (α-governor) [OTHER]
- Pathwise capital guarantee as new staking capability; shares Sharpe/frontier placement with unconstrained fund [OTHER]
- Adaptive-α improvement experiment: tighten α after calibration-error spikes (link to 1748's σ tracker), relax in well-calibrated regimes — a calibration-gated governor [TRUST-SIGNAL]
## Engine-actionable? (yes/no + one-line what)
Yes — build the α-governor: scale weekly Kelly stakes by π = 1 − α/d_t (α = 0.7) around the existing sizer; accept if backtest shows min B_t/M_t ≥ α − 0.02 while keeping ≥80% of unconstrained terminal log growth on 2023–2025 NFL data.
