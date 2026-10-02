# docs/arxiv-program/research/2026-09-21/arxiv-deep/1543-a-bayesian-marked-spatial-point-processes.md
## What it is (1-2 sentences)
Ledger of arXiv:1908.05745 (Jiao, Hu & Yan 2019), building a Bayesian marked spatial point process for NBA shot charts: shot locations as a non-homogeneous Poisson process over 10 NMF-derived archetypal shot types, make/miss marks via logistic regression with the fitted location intensity as a covariate (coefficient ξ), tested on Curry, Durant, Harden, James (2017–18) and the top-50 shooters. Verdict in the ledger: ADAPT — joint attempt-intensity × success modeling with intensity-as-covariate is directly portable to NFL target-location × completion models for QBs and receivers, plus Ward clustering of fitted coefficients into archetypal styles.
## Key metrics/methods (formulas where given, else "not specified")
- λ(s_i) = λ_0 exp(X^T(s_i) β) (Eq. 1); locations likelihood Π_i λ(s_i) exp(−∫_B λ(s) ds), NHPP on a 50×35 one-foot grid; X = 10 NMF basis shot types (long 2s, wing 3s ×2, restricted area ×2, top-of-key 3s, center 3s, corner 3s, mid-range 2s).
- Mark model: m(s_i)|Z ~ Bernoulli(θ(s_i)), logit θ(s_i) = ξ λ(s_i) + Z^T(s_i) α (Eq. 2), with intensity × shot-type interaction, shot distance, seconds left, period dummies, playoff-opponent indicator.
- Priors: λ_0 ~ G(0.01, 0.01); β, ξ, α ~ N(0, 100). Inference: Metropolis-within-Gibbs (nimble), 60k iterations, 20k burn-in, thin 10 (4,000 draws).
- Model comparison: DIC = Dev(Θ̄|S,M) + 2p_D and LPML, decomposed into intensity + conditional-mark components; simulation validation (200 replicates/setting): bias ≈ 0, 95% CI coverage ≈ 0.95.
- Secondary: Ward hierarchical clustering of 51 players into 5 groups from fitted coefficients.
## Data sources named
2017–18 NBA regular season shot charts (NBAsavant.com: stats.nba.com + ESPN shot tracker): per shot — date, opponent, period, time left, make/miss, 2PT/3PT, distance, (x, y). Four focal players: Curry (740 shots, 57% 3PT rate), Durant, Harden, James (1409 shots); FG% 45% (Harden)–52% (James); extended set: top 50 shooters (813–1,517 shots); NMF bases from 2016–17 kernel intensities of 407 players with 50+ makes.
## Findings (numbers and facts, not vibes)
- Curry: intensity-INDEPENDENT mark preferred (DIC 2379.2 vs 2391.3; LPML −1189.6 vs −1195.7). Durant: ξ ≠ 0 (DIC 2977.1 vs 2985.7; LPML −1489.6 vs −1493.8). Harden: ξ ≠ 0 (1744.4 vs 1753.7; −872.4 vs −877.0). James: ξ ≠ 0 (760.8 vs 802.0; −380.8 vs −401.2).
- Top 50: 40/50 (80%) favored the intensity-dependent model; all estimated ξ > 0; intensity × shot-type interactions all insignificant; for the 10 intensity-independent players, shot distance significantly negative in every model.
- Clustering: 5 shot-pattern groups (e.g., Curry/Harden/James group: fewer long/mid 2s, more 3s especially left-wing; Durant group: more long/mid-range 2s).
- Ledger's adversarial notes: 80% finding is descriptive, no causal identification; Curry is a famous counterexample to the headline; DIC differences modest for some players (ΔDIC = 12 Curry, 8.6 Durant); single season, no out-of-sample prediction.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [QB-BEHAVIOR] INFERENCE: The ξ>0 mechanism ("accuracy higher where attempts are more frequent") is the paper's basketball finding; the ledger's port proposes testing whether NFL QBs complete more where they target more — target-concentration × completion coupling is a QB-behavioral feature if the NFL replication validates.
- [OTHER] Method itself: joint marked point process (NHPP attempt intensity + intensity-as-covariate mark model) with NMF archetypal target zones and Ward k=5 player clustering for matchup-typing and DFS stacking decisions. Not QB data yet — basketball only.
## Engine-actionable? (yes/no + one-line what)
Yes — adapt to NGS target locations (NHPP over NMF archetypal zones) with a completion-mark model testing ξ per QB (≥200 attempts), gating on held-out 2025 log-loss; reject universal ξ>0 (Curry counterexample — fit per player, never pool).
