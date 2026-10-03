# arxiv-program/research/2026-09-21/arxiv-deep/0210-nfl-stepandturn-a-generative-framework-for.md
## What it is (1-2 sentences)
Deep-dive of Nguyen & Yurko (2026), a Bayesian "step-and-turn" generative framework for NFL ball-carrier movement evaluation: it models step length and turn angle from 10 Hz tracking data, then ghost-simulates an "average player" at every frame to compute yards-vs-ghost value metrics. Ledger verdict: ADAPT as GSE's uncertainty-aware "Ghost Score" RB evaluation module.
## Key metrics/methods (formulas where given, else "not specified")
- Step length model: transformed step length s̃_ijt ~ N(μ^(SL)_ijt, σ²), μ^(SL) = α_0^(SL) + Xβ^(SL) + u_j + v_k; u_j ~ N(0, τ²_u) ball-carrier random intercept, v_k ~ N(0, τ²_v) defensive-team random intercept; fit in Stan via brms, 4 chains × 5,000 iterations (2,500 warmup) → 10,000 posterior draws.
- Turn angle model: φ_ijt ~ von Mises(μ^(TA)_ijt, κ_ijt); mean via tanh-half link on α_0^(TA) + Xβ^(TA) (incl. previous-frame turn angle); log κ_ijt = γ_0 + γ_1 s_ijt + w_j, w_j ~ N(0, τ²_w) — step length dictates turn concentration.
- Posterior-predictive ghosting: H = 100 hypothetical steps per frame, new player random effect drawn from N(0, τ²); other 21 players held fixed (authors flag as simplification).
- Play value: ℓ̂_ijt = Σ_{l=10}^{110} l·P(L_ijt = l | X_ijt) via CatBoost multinomial classifier over 1-yard ending-yardline bins (Eq. 5).
- Evaluation: δ^(h)_ijt = ℓ̂_ijt − ℓ̂^(h)_ijt (Eq. 6); frame-average δ̄_ijt = (1/H)Σ_h δ^(h)_ijt (Eq. 7); Yards success rate = (1/H)Σ_h 1(δ^(h)_ijt > 0) (Eq. 8); Explosiveness = 1(ℓ̂_ijt > q_0.95(ℓ̂^(h)_ijt)) (Eq. 9).
- s_t = √((x_{t+1}−x_t)² + (y_{t+1}−y_t)²); bearing b_t = atan2(y_{t+1}−y_t, x_{t+1}−x_t); φ_t = b_t − b_{t−1}.
## Data sources named
- NFL Big Data Bowl 2025 tracking data (Kaggle), weeks 1–9 of the 2022 NFL season, 10 Hz (x, y, speed, accel, direction, orientation, all 22 players + ball), event tags; final sample 5,400 run plays by RBs across 136 games.
- Code: https://github.com/qntkhvn/nflstepturn (stated in paper); models in R (brms/Stan) + CatBoost.
## Findings (numbers and facts, not vibes)
- Scaled-arcsin Gaussian step-length model beats Gamma and lognormal (posterior predictive checks; Gamma/lognormal overestimate density near short steps, underestimate tail).
- Yards success rate (fraction of frames beating ghost), ≥70 attempts, weeks 1–9 2022: top 5 — Josh Jacobs 0.542, Miles Sanders 0.539, Travis Etienne 0.527, Dameon Pierce 0.512, James Robinson 0.507; bottom 5 — Michael Carter 0.446, A.J. Dillon 0.448, Cordarrelle Patterson 0.450, Raheem Mostert 0.453, Christian McCaffrey 0.457.
- Explosiveness (fraction of frames above ghost's 95th percentile): top 5 — Etienne 0.118, Aaron Jones 0.095, Kenneth Walker 0.093, Sanders 0.092, Antonio Gibson 0.089; bottom 5 — Tyler Allgeier 0.035, Jamaal Williams 0.044, A.J. Dillon 0.050, David Montgomery 0.054, Michael Carter 0.054.
- Correlation r = 0.279 between step-length and turn-angle random effects; Jonathan Taylor = least variable turn-angle (matches "straight-ahead runner" scouting); top vs bottom leaderboard credible intervals do not overlap (discriminative per Franks et al. 2016).
- Case study: Javonte Williams week-2 17-yard run accumulated +11.4 yards vs hypothetical baseline; at first contact, observed ending yard line above the 95th percentile of the ghost distribution.
- No comparison vs deep imitation-learning ghosting baselines (Le et al. 2017); RB run plays only; one-step-ahead ghosting, not full-trajectory.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Frame-level δ vs. average-player ghost → "which backs create yards the blocking didn't" as a weekly content + rushing-prop skill signal orthogonal to EPA (OTHER)
- Yards success rate and explosiveness as portable per-carry RB skill metrics, independent of line/scheme context (SCHEME-adjacent valuation, but tagged OTHER per schema since it measures skill not scheme)
- Fixed-opponent assumption is the known weakness; paper's own future work is joint multi-agent forward simulation + learned tackle-probability termination → full-trajectory ghosting unlocks counterfactual "what if he cut left" content (OTHER, INFERENCE: authors list these as future work; content use is INFERENCE)
## Engine-actionable? (yes/no + one-line what)
yes — Port as "GSE Ghost Score" (expected ending yardline vs average-player ghost per frame, per RB carry), gated on refit reproducing the paper's Table 3 leaderboard at Spearman ≥ 0.80 and split-half stability ≥ 0.60.
