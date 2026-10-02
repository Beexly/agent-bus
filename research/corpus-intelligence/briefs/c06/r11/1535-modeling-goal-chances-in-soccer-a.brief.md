# arxiv-program/research/2026-09-21/arxiv-deep/1535-modeling-goal-chances-in-soccer-a.md
## What it is (1-2 sentences)
Paper (arXiv:1802.08664): a Bayesian two-part model of soccer chance creation — (A) block-structured Poisson counts of chances per team per 15-min block with team-ability, home, game-state, and red-card covariates, plus (B) topic-model-style categorical/GMM composition of assist/chance players and locations — fit by blocked Gibbs sampling on 2016/17 Premier League data.
## Key metrics/methods (formulas where given, else "not specified")
- N^j_{t_r,k} ~ Pois(λ^j_{t_r,k}); λ = exp{θ^j_{t_r} − θ^{opp}_{t_r} + δ_{home}·γ_{t_r} + α·G + β·R}, Σθ = 0 (sum-to-zero).
- Assist/chance players ~ Multinoulli(φ) with Dirichlet priors; assist locations and assist→chance displacement ~ 8-component GMMs (means fixed at k-means centroids).
- Priors: α,β,γ ~ N(0,10²); θ|τ ~ N(0,τ); τ ~ Gamma(1,0.01); φ,κ ~ Dirichlet(1); Σ ~ inverse-Wishart(I₂,2).
- Inference: blocked Gibbs in PyMC3, 2000 iterations + 100 burn-in; monthly online refits.
## Data sources named
Stratagem Technologies "Analyst" event data, 2016/17 English Premier League (380 fixtures, ~32,000 events, ~85/fixture) — proprietary, not public, no replication link.
## Findings (numbers and facts, not vibes)
- Posterior θ (chance-creation ability): MCI t_1 0.201, t_2 0.401, t_6 0.465; LIV t_3 0.414; CHE t_6 0.384; relegated SUN t_6 −0.531, t_1 −0.296; HUL t_3 −0.304.
- Home effect γ positive in all 6 blocks, rising in t_3 (end of first half) and t_6 (end of match).
- Case study LIV–CRY 23/4/17: model predicted 1 CRY chance in each of blocks t_3, t_5 vs actual 2 each; P(Benteke chance at LIV weak left-box in t_3)=0.166; P(McArthur assist t_3)=0.134; P(Cabaye or Puncheon assist t_5)=0.121.
- Eriksen created most chances 2016/17; Kane most goals; Agüero most chances.
- No out-of-sample predictive scoring reported (no Brier/log-loss); Dixon–Coles-style goal alternatives showed "little or no difference."
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: block-structured Poisson rate template maps to NFL drive-level scoring-opportunity modeling (drive reaches opp 35) with score-differential and home covariates — a matchup feature for totals.
- COACHING: game-state coefficient α (goal difference at block start) is the direct analogue of score-dependent play-calling effects; block-specific home effect γ rising late in halves maps to NFL home/late-half effects.
- OTHER: methodology caution — paper is descriptive, not predictive; no forecasting validation.
## Engine-actionable? (yes/no + one-line what)
Yes — build NFL block-Poisson scoring-chance layer (nflverse drives reaching opp 35; 8 time-blocks; team ability + home + score-diff covariates; PyMC); adopt if it improves held-out Dawid-Sebastiani score ≥5% and totals-pick Brier ≥0.001 vs v5.2.7.
