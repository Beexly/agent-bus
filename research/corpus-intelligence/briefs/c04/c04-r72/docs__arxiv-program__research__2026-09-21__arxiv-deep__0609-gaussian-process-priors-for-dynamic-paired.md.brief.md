# docs__arxiv-program__research__2026-09-21__arxiv-deep__0609-gaussian-process-priors-for-dynamic-paired
## What it is (1-2 sentences)
Ingram (2019), arXiv:1902.07378v1 — derives a Gaussian Process prior over latent skills with a Bradley–Terry likelihood as a non-Markovian replacement for Elo/Glicko dynamics, admitting context covariates (e.g., surface) via multiplicative kernels, with Laplace-approximation + sparse-Cholesky inference. Evaluated on the 2018 ATP season: GP variants beat Elo and Glicko on log loss. Ledger verdict: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Bradley–Terry likelihood: P(y=1|θ_i,θ_j) = 1/(1+e^(θ_j−θ_i)) = logit⁻¹(θ_i − θ_j). GP prior: P(f_i) = N(f_i | 0, K_i), [K_i]_jk = k(t_j,t_k); joint prior P(f|θ) = N(f|0,K), K block diagonal over players.
- Kernels tested: (1) single Matérn 3/2 on time; (2) Matérn 3/2 + Matérn 1/2 on time; (3) Matérn 3/2 on time × ARD-RBF on one-hot surface covariates (6 hyperparameters).
- Inference: Laplace approximation Q(f|y,θ) = N(f|f̂, H⁻¹), H = K⁻¹ − ∇∇ log P(y|f); predictive mean E_q[f*|X,y,x*] = k_*ᵀ K⁻¹ f̂; predictive variance V_q[f*] = k(x*,x*) − k_*ᵀ K⁻¹ k_* + k_*ᵀ K⁻¹ H⁻¹ K⁻¹ k_* (extra Hessian-correction term); sparse Cholesky via scikit-sparse/CHOLMOD.
- Hyperparameters: maximized approximate log marginal likelihood (Eq. 28) with GPyOpt Bayesian optimization (bounds σ ∈ (0.01,2), lengthscale ∈ (0.1,10), rescaled /300 time → 30–3,000 days).
- Evaluation metrics: log loss = −(1/n) Σᵢ [yᵢ log pᵢ + (1−yᵢ) log(1−pᵢ)]; accuracy = (1/n) Σᵢ [yᵢ I(pᵢ>0.5) + (1−yᵢ) I(pᵢ≤0.5)].
## Data sources named
- ATP men's professional tennis, 2018 season: 2,623 matches (tour level only; Davis Cup, Next Gen Finals, Challengers, qualifiers discarded). Surface split: hard 1,072 / clay 810 / indoor hard 417 / grass 324. Source: OnCourt software (http://www.oncourt.info/download.html), commercial, not publicly downloadable.
- Hyperparameter selection: 2016–2017 seasons, 5,323 matches.
- Code: https://github.com/martiningram/paired-comparison-gp-laplace (promised). Libraries: scikit-sparse, GPyOpt.
## Findings (numbers and facts, not vibes)
- Hyperparameter optimization: Expt 1 single Matérn 3/2 — neg. marginal log-likelihood ≈ 13116.8; optimum lengthscale 5.29 (≈1,587 days), σ = 0.882. Expt 2 (Matérn 3/2+1/2) — best 13116.4; lengthscales 9.87 (2,961 days) and 7.95 (2,385 days) — effectively both smooth, no gain from the jagged component. Expt 3 (time × surface) — best 13109.3 (an outlier; optimization not fully converged); surface lengthscales clay 2.57 / grass 2.31 / hard 7.47 / indoor hard 2.08; implied surface correlations 72% (grass–indoor hard) to 81% (hard–clay).
- 2018 evaluation (log loss | accuracy): GP Matérn+surface 0.631 | 0.636; GP Matérn 3/2 0.634 | 0.637; GP Matérn 3/2+1/2 0.634 | 0.634; Glicko-2002 0.635 | 0.641; Glicko-2016 0.637 | 0.628; Elo-2002 0.638 | 0.644; Elo-2016 0.639 | 0.628.
- Key claim: all GP variants beat all Elo/Glicko variants on log loss (best 0.631 vs best non-GP 0.635); Elo-2002 has the best accuracy (64.4%) vs best GP 63.7%.
- Fit time ≈ 3.25×10⁻⁷ n² seconds (quadratic); 5,323 matches → 7.8 s; 13,159 matches → 56.2 s (2017 MacBook Pro).
- Nadal surface-rating illustration: clay ≈ 2,200 vs grass ≈ 1,950 Elo-scale points (2013); Thiem ranked 6th on clay, outside top 8 elsewhere.
- Caveat recorded in file: the "non-Markovian flexibility" motivation produced no practical gain (both Matérn components chose multi-year lengthscales) — the win over Elo is mostly calibration + surface covariates; Expt 3's 6-hyperparameter BO never converged.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: strictly time-ordered walk-forward validation, frozen hyperparameters (2016–2017 tuned, 2018 evaluated), baseline variants fit two ways (2016 vs 2002 start), honest reporting that accuracy went to Elo.
- OTHER: ratings-layer mechanism — first non-Markovian (GP dynamics) team-rating option in the corpus; the ARD-covariate kernel is the machinery for context effects (dome/outdoor, QB-change, rest) in a ratings layer.
## Engine-actionable? (yes/no + one-line what)
Yes — port the Matérn-time × ARD-context GP + sparse-Laplace inference recipe to GSE's team-rating layer, with the acceptance gate being ≥0.002 log-loss improvement over dynamic Elo on 2021–2026 NFL walk-forward.
