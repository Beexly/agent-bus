# docs/arxiv-program/research/2026-09-21/arxiv-deep/1541-longitudinal-bayesian-networks-for-assessing-team.md
## What it is (1-2 sentences)
A deep read of Calvo, Palmí-Perales, Armero & Gómez-Rubio (2026), "Longitudinal Bayesian networks for assessing team performance in the National Basketball Association" (arXiv:2608.09824). It jointly models interrelated player-performance variables over a season in a Bayesian graphical framework with static, dynamic AR(1), and hidden-Markov variants, compared by WAIC on Philadelphia 76ers 2005–06 data. Verdict in file: ADAPT — a clean template for GSE's player-game-level fantasy-production modeling.
## Key metrics/methods (formulas where given, else "not specified")
- LBN joint: p(y, z, φ, θ) = p(y, z | φ, θ) p(φ | θ) π(θ) (Eq. 1), with player random effects φ.
- Three variants: (a) static LBN (longitudinal nodes, no temporal dependence); (b) dynamic LBN — AR(1) dependence of minutes on previous game's minutes (β_M^(+)); (c) hidden-Markov LBN — latent team state following a first-order Markov chain affecting baskets scored.
- Submodels: logistic regressions for make-probabilities of 1PT/2PT/3PT (binomial-type given attempts, player random effects σ_{C_k}); count models for attempts and fouls drawn; participation Bernoulli. Non-participation forces all other nodes to 0.
- Priors: wide N(0,·) on regression coefficients, Uniform(0,1) on binomial/zero-inflation probabilities, Beta on Markov transition probabilities.
- Posterior predictive: f(y_* | D) = ∫ f(y_* | θ, φ) π(θ, φ | D) d(θ, φ) (Eq. 16), including "reverse" queries (minutes | points ≤ 10).
- Inference: NIMBLE 1.3.0 (modular MCMC), 3 chains × 1,000,000 iterations, 500,000 burn-in, thin every 500; model selection by WAIC.
## Data sources named
Philadelphia 76ers, 2005–06 NBA season: 82 games (38–44, no playoffs), 13 most-frequent players at player-game level, from NBAstuffer (accessed 2022-05-03). Per player-game: participation indicator Y^(A), minutes Y^(M), fouls drawn Y^(F), FT/2PT/3PT attempts Y^(T_k) and makes Y^(C_k); covariates: home indicator H_j, position indicators (PG/SG/SF/PF/C). Reproduction code at https://github.com/gcalvobayarri/Longitudinal_BNs.
## Findings (numbers and facts, not vibes)
- WAIC: static 21274.69, dynamic 21194.13, hidden Markov 21274.60 — dynamic (AR(1)) preferred. [QB-BEHAVIOR]
- Minutes AR(1) coefficient β_M^(+) = 0.097 (95% CI 0.076–0.119), small but entirely positive; player random-effect SD σ_M = 0.688; common mean μ_0^(M) = 2.616. [QB-BEHAVIOR]
- Make-probability player-effect SDs: σ_{C_1} = 0.475 (FT), σ_{C_2} = 0.190 (2PT), σ_{C_3} = 0.302 (3PT). [QB-BEHAVIOR]
- Home effect ≈ 0 for 1PT/3PT (β_H^(C1) = 0.045, P(>0|D) = 0.667), slightly positive for 2PT (0.067, P(>0|D) = 0.884). [OTHER]
- Participation posteriors: Iverson 0.870, Iguodala 0.988, Webber 0.905, Korver 0.988, Lou Williams 0.369. [QB-BEHAVIOR]
- Predictive: Iverson (>30 min) scores considerably more than Korver; Iverson ≤ 10 points ⇒ high posterior probability he did not play (mixture predictive), a pattern absent for Korver. [QB-BEHAVIOR]
- WAIC difference between dynamic and hidden-Markov models is modest (~80 on 21k scale); the hidden-state variant adds little. [OTHER]
- Limitations (from file): one team, one season (13 players × 82 games) — generalizability untested; no held-out game prediction scoring (predictive claims rest on posterior predictives, not out-of-sample error); structure assumed known; MCMC cost heavy (1M iterations × 3 chains) — 32 NFL teams × 53 players needs variational/sequential approximations. [QB-BEHAVIOR, OTHER]
- GSE overlap (from file): hierarchical/Bayesian player models exist in the corpus, but a dynamic Bayesian network with explicit AR(1) game-to-game dependence, a participation (inactive/injury) submodel, and bidirectional posterior predictive queries is not inventoried. [QB-BEHAVIOR]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- AR(1) carryover on usage (minutes/snaps) across games, entirely-positive posterior (0.097): QB-BEHAVIOR.
- Participation submodel (active/inactive) as first node forcing all production nodes to zero — directly maps to NFL injury uncertainty: QB-BEHAVIOR.
- Reverse posterior queries (snaps | points) for injury-news conditioning ("if he's active, what's the snap distribution?"): QB-BEHAVIOR, COACHING.
- Posterior predictive distributions with full uncertainty for weekly fantasy projections vs. point projections: QB-BEHAVIOR, TRUST-SIGNAL.
- WAIC/LOO for comparing model variants (static vs AR vs hidden-state): OTHER, TRUST-SIGNAL.
## Engine-actionable? (yes/no + one-line what)
Yes — adapt the dynamic-LBN-with-AR-usage pattern and the participation submodel to NFL player-game data (nflverse 2019–2025: active indicator, snap share, targets/carries, receptions/yards/TDs with AR(1) on usage + player random effects + home/position/opponent/spread/total covariates), fitting in Stan/NIMBLE with scalable inference (variational or MAP+Laplace, not 1M-iteration MCMC), adopting only if the AR variant beats static on 2025 held-out log-likelihood with nominal predictive-interval coverage within 5 pp.
