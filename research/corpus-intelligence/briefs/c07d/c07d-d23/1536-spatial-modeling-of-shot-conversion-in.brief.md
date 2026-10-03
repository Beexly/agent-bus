# arxiv-program/research/2026-09-21/arxiv-deep/1536-spatial-modeling-of-shot-conversion-in.md
## What it is (1-2 sentences)
Ledger brief of arXiv:1702.05662 (Deb & Dey, 2017): a fully Bayesian spatial probit for soccer shot conversion with a spatially correlated error process plus player random effects ("shooting prowess"), used to decompose goal output into positioning sense vs shooting prowess. Verdict ADAPT — a directly portable blueprint for GSE's player-level finishing-skill vs shot-quality separation in props/fantasy (xG-overperformance decomposition).

## Key metrics/methods (formulas where given, else "not specified")
- Latent probit: Y_i = I(r_i > 0) (4.5); Y_i ~ Bernoulli(p_i), p_i = P(r_i > 0); r = Xθ + Az + w + e; z ~ N(0, σ_p² I_{M×M}) iid player random effects ("shooting prowess"); w ~ N(0, σ_w² Σ_w) zero-mean spatially correlated process; e ~ N(0, σ² I_{N×N}) white noise.
- r_i = X_i′θ + z_{m(i)} + ε_i (4.2); ε_i = w_i + e_i (4.3); Cov(w_i, w_j) = σ_w² exp(−φ‖s_i − s_j‖) (4.4), Euclidean distance.
- m(i) maps shot i to player index, pooling low-volume players into group M (4.1); players with fewer than s_m = 10 matches pooled into a generic player effect.
- Priors: improper Jeffrey's on θ; σ² (= σ_w², assumed equal for parsimony) and σ_p² ~ inverse-Gamma(a,b), a > 1; decay parameter φ fixed, chosen by cross-validation over [0.05, 1] using e^{−φd} ≈ 0.05 to set the effective range.
- Joint log-posterior (4.7): log π(r,θ,σ²,w,z|Y) = K + Σ_i [Y_i log P(r_i>0) + (1−Y_i) log P(r_i≤0)] − w′Σ_w^{−1}w/(2σ²) − ‖r−Xθ−Az−w‖²/(2σ²) − (a+N+1) log σ² − b/σ² − ‖z‖²/(2σ_p²) − (a+M/2+1) log σ_p² − b/σ_p².
- Full conditionals (Gibbs): σ²|· ~ IG(a+N, b + ½‖r−Xθ−Az−w‖² + ½w′Σ_w^{−1}w) (4.8); σ_p²|· ~ IG(a+M/2, b + ½Σ_k z_k²) (4.9); θ|· ~ N((X′X)^{−1}X′(r−Az−w), σ²(X′X)^{−1}) (4.10); w|· ~ N((I+Σ_w^{−1})^{−1}(r−Xθ−Az), σ²(I+Σ_w^{−1})^{−1}) (4.11); z_k|· ~ N((n_k + σ²/σ_p²)^{−1} Σ_{i:m(i)=k}(r_i − X_i′θ − w_i), (n_k/σ² + 1/σ_p²)^{−1}) (4.12).
- Derived player measures: Shooting Prowess SP_k = posterior mean of z_k; Positioning Sense PS_k = (1/g_k) Σ_i p̂_i (4.16) — average predicted conversion probability over the player's g_k matches (captures shot quality/volume of opportunities).
- Posterior predictive sampling for a new shot at location s′ uses the kriging-style conditional (w(s′)|w, σ²).
- Covariates: (x,y) location, log-distance and cosine-angle (transformed to be uncorrelated), body part (header vs other — modeled separately), keeper's reach (shortest distance keeper must cover from best position), game situation (leading/trailing/drawing), time, play type.
- Validation: 80/20 cross-validation with the beta family of proper scoring rules (Buja et al.; Merkle & Steyvers); benchmarks SLRM (standard logistic regression), KMM (k-means mixture), NN (8-hidden-unit neural net, sigmoid output); metrics Brier, log score, misclassification error %, AUC, in-sample and out-of-sample.
- Exploratory tests: Ripley's K-function shows clustering diverging from homogeneity; join-count test (k=63-NN graph, k ≈ √n) rejects spatial independence with p ≈ 0 for 0–1/1–1/0–0 joins.

## Data sources named
- Major League Soccer 2016/17 season shot-level data (source implied: American Soccer Analysis / MLS; full-season shot logs). No code repository; data source not linked for download.
- Methodological citations: Buja et al. (beta scoring rules); Merkle & Steyvers; King & Zeng 2001 (rare-event calibration, cited as unsolved gap).

## Findings (numbers and facts, not vibes)
- Headers — Brier: SLRM 0.091 / KMM 0.101 / NN 0.089 / **ours 0.061**; −log score: 301.738 / 338.876 / 299.42 / **184.278** (~38% better); error %: 11.03 / 11.654 / 11.03 / **8.949**; AUC: 0.746 / 0.745 / 0.789 / **0.952**.
- Other shots — Brier: 0.094 / 0.098 / 0.097 / **0.067** (~30% lower); −log score: 958.212 / 1043.567 / 976.625 / **633.371**; error %: 11.983 / 11.983 / 12.216 / **9.813**; AUC: 0.776 / 0.775 / 0.763 / **0.937**.
- Spatial correlation effectively zero beyond ~4 yards (headers) and ~6.7 yards (other shots).
- Headers taken much closer: median distance 11.2 yards vs 17.6 yards overall.
- Player findings: top-10 2016/17 scorers (Piatti, Dos Santos, Adi, Kamara, Wright-Phillips, Dwyer) show high SP/PS; wingers Barrios and Manneh rank high on SPS; defenders Moor, Hines, Horst show strong heading ability; positioning sense significantly positively correlated with heading prowess.
- Notably, SP/PS computed from only part of the season recovered the end-of-season top scorers.
- UNCERTAIN (adversarial flag in the ledger): the enormous AUCs (0.937–0.952) vs baselines (~0.75–0.79) with only modest error-rate gains (~2–3 pp) is suspicious — likely the latent spatial process overfits in-sample locations; out-of-sample tables are described but the headline numbers read as in-sample fit comparisons.
- Limitations: φ fixed by CV but σ² = σ_w² is an unprincipled parsimony assumption (sensitivity thin); missing strongest covariates (shot speed, defender/goalkeeper positions) — acknowledged; "one big field" spatial-across-matches assumption conflates stadium/keeper-quality effects into the spatial term; small-sample player effects pooled crudely; headers/other split reduces sample; no code/data; rare-event calibration acknowledged unsolved.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER (props lane / trust-target intake):** The SP_k vs PS_k decomposition is exactly the machinery the props lane needs — separating a player's finishing skill (repeatable, bettable) from their shot/opportunity quality (matchup-dependent, transient). The NFL adaptation is concrete: probit P(catch | target location, depth, air yards, separation, QB, coverage shell) with spatial correlation over target location (hash-to-hash × depth grid) and receiver random effects = "catch prowess"; or rushing P(success | gap, box count) with rusher random effects. Derive "positioning sense" (routes/targets into high-value spots — the usage/opportunity side) vs "catch prowess" (conversion above expectation — the skill side) for WR/TE prop edges.
- **SCHEME (coaching tendencies):** Positioning sense PS_k = (1/g_k)Σ p̂_i is effectively a shot-location-quality metric — in NFL terms it measures how well a coaching scheme manufactures high-value target locations for a player. A WR with high PS and low SP is scheme-manufactured (usage props good, efficiency props bad); high SP/low PS is a talent wasted in a bad scheme — a direct input to coaching-tendency evaluation of route design and target distribution.
- **QB-BEHAVIOR:** The probit includes QB identity and coverage shell as covariates with a spatial error process over target location — this is a QB-behavioral-profile primitive: QB-specific spatial completion surfaces (where on the field does this QB convert above expectation, controlling for receiver prowess?) become a QB profile signature, separable from receiver skill via the random effects.
- **TRUST-SIGNAL (calibration):** The rare-event calibration gap flagged by the authors (King & Zeng 2001) connects to the engine's tail-calibration work (ledger 1523): prop lines on rare events (long TDs, etc.) need the King–Zeng-style correction the authors name but don't implement.
- The split-half stability gate (z_k correlation across seasons ≥ 0.4) is a trust-signal discipline the engine should apply to any "skill" random effect before it touches a prop line.

## Engine-actionable? (yes/no + one-line what)
**Yes** — implement the spatial probit + player random effects on NFL target data (nflverse + NGS target locations), derive positioning-sense vs catch-prowess measures for WR/TE prop edges; ADOPT only if split-half prowess stability r ≥ 0.4 and the spatial probit beats plain logistic on 2025 held-out Brier by ≥3%. Effort ~1–2 weeks.
