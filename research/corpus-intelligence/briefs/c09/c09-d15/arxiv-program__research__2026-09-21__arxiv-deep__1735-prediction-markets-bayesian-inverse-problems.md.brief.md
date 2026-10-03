# arxiv-program/research/2026-09-21/arxiv-deep/1735-prediction-markets-bayesian-inverse-problems.md
## What it is (1-2 sentences)
Full-paper ledger read of arXiv:2601.18815 (Madrigal-Cianci, Monsalve Maya, Breakey, 2026) — formulates prediction markets as Bayesian inverse problems, deriving uncertainty quantification, identifiability criteria (KL-projection gap δ_T), and information-gain metrics from price–volume histories under latent trader types (informed / noise / adversarial). Synthetic experiments only. Verdict: ADAPT — the IG metric and identifiability check give GSE a principled "is this odds move actually informative?" diagnostic with an informed-weight threshold (ω₁ ≈ 0.15).
## Key metrics/methods (formulas where given, else "not specified")
- KL-projection gap: K_T(y*→y) = inf_θ (1/T) D_KL(P_{y*,θ*}^{(T)} || P_{y,θ}^{(T)}); outcome identifiable iff δ_T(y*,θ*) > 0.
- Realized information gain: IG(H_t) = KL(posterior || prior); expected IG = mutual information; saturates at log 2 ≈ 0.693 nats ceiling for symmetric prior.
- Posterior consistency (Theorem 4.3): exponential concentration in T·δ_T; finite-sample error ≤ exp(−T·δ̂_T)-style decay (Proposition 4.2); stability of posterior odds linear in perturbation magnitude (Theorem 4.4).
- Observation model in log-odds space: log-odds increments Δx_t | (v_t, y) from a latent trader-type mixture with volume-dependent mixing weights; orientation constraint μ₁, μ₃ ≥ 0 eliminates outcome–nuisance symmetry.
## Data sources named
None real — synthetic experiments only: horizons T ∈ {10, 25, 50, 100, 200, 500}; 1,000 replications per setting; informed-weight sweep for the identifiability threshold; Gaussian perturbations σ ∈ {0.01, 0.02, 0.05, 0.1, 0.2}; T=600 histories for IG dynamics. (§5 claims "synthetic and real" but all extracted experiments are synthetic.)
## Findings (numbers and facts, not vibes)
- Estimated gap δ̂_T ≈ 1.5×10⁻² nats/period (weak per-step signal under low-to-moderate volumes).
- Identifiability threshold: accuracy deteriorates markedly as informed weight ω₁ falls below ≈ 0.15 (type-composition-confounding regime).
- IG(H_t) rises fast early then plateaus at the log 2 ≈ 0.693 ceiling.
- Stability: |Δ log BF| scales linearly in perturbation σ (bound conservative).
- Key limitations: Assumption 3.1 (conditional independence) rules out volatility clustering / order-flow persistence / regime switching (authors' own admission); volume treated as exogenous; fixed K types; no real-market validation; marginal-likelihood integration cost unreported.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (market microstructure / CLV): complements ledger 1731's structural volatility model (1731 forecasts move scale; this scores move information content); GSE currently treats all CLV equally — no informativeness test exists.
## Engine-actionable? (yes/no + one-line what)
Yes — ledger spec: IG-weight each game's CLV signal in edge aggregation by IG(H_t)=KL(posterior||prior) computed on The Odds API intraday price/volume paths, and flag games with estimated informed weight ω̂₁ < 0.15 as non-identifiable (do not update fair price); acceptance gate is ≥2% log-loss improvement vs unweighted CLV on a 2025 holdout with the flag firing on 5–30% of games.
