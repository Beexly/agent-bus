# arxiv-program/research/2026-09-21/arxiv-deep/0863-independent-herding-betters-racetrack.md
## What it is (1-2 sentences)
Deep read of Mori & Hisakado (2010, arXiv:1006.4884): decomposing the Japanese horseracing win-bet crowd into independent (informed) vs herding (popularity-following) voters from the time-series dynamics of win bets — measuring the component ratio from power-law convergence exponents. Verdict in file: ADAPT — the headline: only ~1 in 4 bettors carries information (independent:herding = 1:3); the β → r_i = β/2 estimation technique ports to NFL line data.
## Key metrics/methods (formulas where given, else "not specified")
- Win bet fraction: x_{i,k}^r = 0.788/(O_{i,k}^r − 0.1); accuracy ratio AR ≡ 2·(Prob(α_w < α_l) − 1/2) = 2·(AUC_ROC − 1/2).
- Two-type voting model: P_t^w(n+s) = r_i·w + r_h·(n+s)/(Z+t); convergence regimes: (x_t^w − w)² ~ t^{−1} if r_i > 1/2 (normal diffusion); ~ t^{−2r_i} if r_i < 1/2 (super-diffusion); ~ log(t)/t if r_i = 1/2.
- Measured β = 0.488 ⇒ r_i = β/2 = 0.244 ⇒ independent:herding ≈ 1:3.
- Fundamental-voter mapping: P_t^w = r_f·(w + λ(w − x_t^w)) + r_h′·x_t^w → r_i = (1+λ)·r_f, r_h = r_h′ − λ·r_f — value-bettors who bet ∝ (w − x) aggregate to look exactly like "independent" voters.
## Data sources named
JRA 2008 win bets: 2,471 races, N=35,719 horses, N₁=2,472 winners, K≈2.0×10⁵ announcements (~80/race); average final pool 1.89×10⁵; timing — first announcement ~10 h before start, ~4×10⁴ votes 30 min before, ~half of votes in the last 9 min. No code/data link; JRA data proprietary.
## Findings (numbers and facts, not vibes)
- [(x_α(t) − x_{α,f})²] ~ t^{−0.488 ± 0.007} (vs t^{−1} normal diffusion — rejected); AR_f − AR(t) ~ t^{−0.589 ± 0.005}; final AR_f = 0.6826; convergence rapid after t_c ≃ 3×10⁴.
- Model with r_i=0.244, s=3 reproduces both power laws simultaneously; early concentrated votes (s=3) carry almost no information (AR≈0 at t≃70).
- Falsification logic: post-t_c speedup of x(t) cannot be explained by more independent voters (would also speed AR convergence, contradicting the AR power law) — the information-providing ratio is stable.
- Limitations: parimutuel JRA vs fixed-odds NFL books differ mechanically; "independents know w" is literal-unrealistic (rescued by the fundamental mapping); single year of data.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the quantitative core of the market-microstructure gap (#3) — a measured informed-vs-noise money split (25% informed); use the 1:3 ratio as a Bayesian prior on the information content of any NFL line move, and split line moves into information (persist to close, correlate with outcome residuals) vs herding (mean-revert).
## Engine-actionable? (yes/no + one-line what)
yes — fit the t^{−β} convergence of de-vigged implied probabilities open→close on NFL line archives across ≥2 seasons; if β̂ < 1 stably, build the herding-fraction estimator + steam decomposition and test whether low-r_i games show larger GSE-vs-close gaps that resolve in GSE's favor.
