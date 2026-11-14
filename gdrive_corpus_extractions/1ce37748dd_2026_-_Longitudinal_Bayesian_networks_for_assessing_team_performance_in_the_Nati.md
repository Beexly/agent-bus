---
source: "2026 - Longitudinal Bayesian networks for assessing team performance in the National Basketball Association - Calvo et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 24
model: deepseek/deepseek-v4.1-flash-1017
words: 8234
---

<NATIVE_REASONING>
The user wants a deep analytical response about this paper (Calvo et al. 2026, Longitudinal Bayesian networks for NBA team performance), with specific XML sections and at least 1,000 words. No betting lines. Need formal LaTeX equations with units, page citations with verbatim quotes, singularity/breakdown regimes.

The "DRIVE SOURCE" and framing suggests sports betting analysis context but I must avoid betting lines. I should produce a rigorous methodological analysis of the paper — its equations, its assumptions, its breakdown regimes, and how a practitioner would use it (for forecasting player performance, not betting lines).

Let me plan sections:

1. <THINK_TRACE> — ≥400 words. Multi-hop derivation: from the joint factorization (Eq. 4) through the ZIP submodels, the autoregressive log-linear Poisson (Eq. 14), the hidden Markov binomial (Eq. 15), the identifiability constraint β_C0 < β_H0, WAIC comparison, and a gray-zone audit of what's fragile: (a) the assumption that participation Y(A) is Bernoulli per player iid across games — ignores injury/rest/coach decisions correlated over time; (b) ZIP structure conflates non-participation zero with "played but zero" — actually they condition on Y(A) so it's structural; (c) the binomial thinning assumption for shots made given attempts; (d) minutes-played autoregression coefficient 0.097 tiny — implies near-memoryless; (e) the hidden Markov LBN did not win WAIC (21274.60 vs 21194.13), meaning the hot-hand latent state adds no predictive value — this is the empirical verdict on the "hot hand" trap; (f) label switching and ordering constraint; (g) unbalanced data not handled.

Also gray-zone audit: the paper's predictive example with 10 points or fewer produces a mixture predictive distribution of minutes — reverse causal inference. This is the "retrocausal genealogy" hook.

2. <SOURCE_OPERATORS_AND_EQUATIONS> — Formal LaTeX with units and page cites. Include:
- Eq. (1) p.5
- Eq. (2) global semantics p.5
- Eq. (3) Bayes p.6
- Eq. (4) factorization p.7
- Eq. (5) participation Bernoulli p.9
- Eq. (7) ZIP minutes p.9
- Fouls log link p.10
- Eq. (9) shots attempted p.10
- Eq. (10) free throw log-mean p.10
- Eq. (11)-(12) binomial + logit p.11
- Eq. (13)-(14) dynamic autoregression p.12-13
- Eq. (15) transition matrix p.13
- Eq. (16) posterior predictive p.20
- WAIC table p.16
- Parameter table values p.16, 18, 19

Units: minutes (min), counts (dimensionless), probabilities dimensionless in [0,1], log-scale coefficients dimensionless (log-count per minute), WAIC in units of deviance (nats × 2? Actually WAIC = -2 lppd + 2 p_WAIC, in deviance units ~ nats). Must be careful: WAIC as computed is on the deviance scale, twice negative log predictive density, units of nats.

Breakdown regimes: 
- Poisson mean → 0 or huge (log link unbounded), ZIP degeneracy when π → 0 or 1
- Separation in logit when y(Tk)=0 for a player → p̂ → 0, coefficient drifts (-3.434 with sd 2.892 for β(T3)_0 — evidence of near-separation / weak identifiability)
- Autoregressive β(+) small: stationary mean of log(1+y) recursion; breakdown when β(+) ≥ 1 → explosive; here 0.097 ± 0.011 so stable but the induced process on y has different stationarity properties (Fokianos-Tjøstheim log-linear AR: stationarity holds for any β because of log(1+y) transformation — yes, the log(1+y) link makes the process ergodic for all β in ℝ). Note that.
- Hidden Markov: transition matrix near-identity → absorbing state, effective sample size for one state collapses → q_CH and q_HC posteriors pile at 0; also when β_C0 - β_H0 → 0 the latent chain is unidentified (label switching) — the constraint prevents but creates boundary issue.
- Binomial: y(Tk)=0 → likelihood term 1 for all p, so no information; players with near-zero attempts (Samuel Dalembert 3PT 1 attempt, Shavlik Randolph 0 3PT attempts) → posterior for their random effect driven entirely by prior → σ_C3 inflated (0.302) and β(T3) coefficients with sd ~2.9.

3. <RETROCAUSAL_GENEALOGY> — lineage: Pearl 1988/1995, Ghahramani 1997 DBN, Lambert 1992 ZIP, Fokianos & Tjøstheim 2011 log-linear Poisson autoregression, hidden Markov hot-hand: Sun 2004, Sandri et al. 2020, Ötting & Andreas 2022, Calvo et al. 2025. WAIC Watanabe 2010, singular learning theory — link to "singularity" theme: WAIC valid under singular models (non-identifiable), which is exactly why they use it for the latent-variable model. Multi-week traps: hot-hand as a persistent narrative that resurfaces; naive streak-chasing; "must-win" narratives; the 2005-06 76ers finished 9th, missed playoffs — the data-generating process includes tanking/rest effects late season not modeled. Also: minutes autocorrelation is weak (β=0.097) so "form" narratives about minutes trends decay fast; time constant.

4. <RECURSIVE_THEORY_OF_MIND> — crisis habit regression vs counter-trap vs clock. Frame: the "crisis habit" is a decision-maker's narrative-driven adjustment (e.g., benching a player after a cold streak) that the model says is nearly uninformative given the latent-state model failing to beat the AR model. Counter-trap: over-fitting to the latent hot-hand; the WAIC says hidden Markov LBN 21274.60 vs dynamic 21194.13 — Δ = 80.47 deviance units, which is huge; so adopting a hot-hand narrative is a trap. Clock: the 82-game season, j indexing, the "clock" is the within-season time index and the burn-in/thinning MCMC budget — 3 chains × 1,000,000 iterations, 500,000 burn-in, thin 500 → 1,000 retained draws per chain, 3,000 total. That's the Monte Carlo clock. Effective sample size constraints: with σ's and 13 players × 82 games = 1,066 player-games; participation variant.

Also recursive theory of mind: the model treats a player's probability of playing as a fixed player-level parameter p_i^A — no strategic interaction with the coach, no opponent. So opposing-team adaptation (the other team's defensive assignment) is a missing layer — the "theory of mind" of the opponent is absent. This is a gray zone: the model is a single-team generator, not a game-simulation.

5. <CROSS_LAYER_VETO_ADJUDICATION> — physical/biomechanical/weather veto. For basketball: travel/back-to-back, altitude (Denver), arena, injury. The model's only cross-layer covariates are IH(j) home/away and position indicators. No rest days, no travel distance, no injury status, no opponent defensive rating. So a cross-layer veto triggers when: (a) a player's minutes are governed by a documented injury/load-management protocol → the ZIP-Bernoulli participation node is misspecified, yielding a hard veto on any prediction; (b) fouling out — the Poisson foul model has no upper bound at 6, but NBA disqualification caps at 6; the model's Poisson(µ^F) with log µ = µ_0 + β_M y(M) + ... can generate mass at 7, 8 fouls — physically impossible. That's a formal support mismatch: supp(Poisson) = ℕ₀ vs physical support {0,...,6}. Quantify: P(Y^F ≥ 7) under a typical µ. Let me compute: β(T1)_F ≈ 0.227 per foul → free throw attempts ~0.227 per foul received. Fouls per game for Iverson 672/82 ≈ 8.2 fouls "received"?? Hmm the table says FR 672 for Iverson over 82 games = 8.2 per game, which is impossible for personal fouls (max 6). Likely "fouls received" means fouls drawn by the player (i.e., fouls committed by opponents against him) — that is unbounded. Actually "personal fouls received" — in NBAstuffer play-by-play, "fouls drawn" can exceed 6 since they're opponent fouls. So no cap. But if interpreted as personal fouls committed, the cap binds. I should note this ambiguity as a gray-zone: [PAGE 3] says "number of personal fouls received" and Table 1 header "fouls received (FR)" with Iverson 672 over 82 games → 8.2/game, which exceeds the 6-foul disqualification limit, so the variable must be fouls drawn on opponents, not personal fouls committed. That is a genuine audit finding. Good.

Also weather: indoor sport → weather veto only via travel disruption; altitude and barometric effects negligible; the real physical layer is schedule density.

6. <RLVR_COUNTERFACTUAL_VETOES> — 3 verifiable RLVR veto scenarios with predictions. RLVR = reinforcement learning with verifiable rewards. So we give counterfactual scenarios with a checkable prediction, e.g.:
- Veto 1: Set y(T3) = 0 for a player-game; likelihood is flat → posterior for b_i^{(C3)} unchanged; verify by rerunning NIMBLE with that datum removed and confirming the posterior of b_i^{(C3)} is identical to 4 decimal places (up to MCMC error). Prediction: WAIC changes by ≤ Monte Carlo error.
- Veto 2: β(+) = 0 counterfactual: refit with minutes autoregression coefficient fixed at 0 recovers static LBN WAIC 21274.69 vs 21194.13, Δ = 80.56; predict that freeing β gives posterior mean 0.097 with 95% CI (0.076, 0.119) excluding zero. Verify by re-running.
- Veto 3: Hidden Markov with q fixed to identity (q_CC = q_HH = 1) → reduces to static LBN 21274.69; the observed HMM WAIC 21274.60 is within 0.09 of the static → implies posterior mass of q_CH, q_HC near 0, i.e., the hot-hand states are essentially never visited. Prediction: posterior mean of q_CH + q_HC < 0.05. That's a strong verifiable claim derived from WAIC arithmetic. Actually ΔWAIC of 0.09 between static and HMM — both effectively identical; since HMM has 2 extra parameters + constraint, the fit improvement is negligible → transitions near zero.
- Could add a 4th: minutes prediction mixture. But they want 3.

Also include a counterfactual about the 30-minute conditioning: predicting points | minutes > 30 — verify that Iverson's predictive mean exceeds Korver's.

Need ≥1000 words total. Let me aim for ~2,000-2,500 words. With LaTeX and quotes.

Citations: use [PAGE N] and verbatim quotes. Let me collect exact quotes:

- p.1: "we propose a Bayesian graphical modelling framework for the longitudinal analysis of basketball team performance."
- p.2: "the most relevant feature of BNs is that they are 'direct representations of the world, not of reasoning processes'"
- p.2: "usually under a first-order Markov assumption (i.e., each state depends only on the immediately preceding state) or under autoregressive relationships."
- p.5: "Note that our approach naturally allows for the inclusion of shared random effects and shared parameters across longitudinal nodes."
- p.7: factorization eq 4.
- p.9: "(Y (M) ij | Y (A) ij = 1, θ, ϕ) ∼Po(µ(M) i )" and "log(µ(M) i ) = µ(M) 0 + b(M) i"
- p.10: "the free throws, which depend on the fouls received or assigned to each player" — note the hedge "or assigned".
- p.11: "Each shot that a player throws in a game can generate a basket or not"
- p.13: "the latent state of the team in game j, where Zj ∈{C,H} indicates whether the team is in a cold (C) or a hot (H) state"
- p.15: "the restriction β(Ck) C0 < β(Ck) H0 is imposed, ensuring that the team's overall success probability is always higher in the hot state. Moreover, this constraint ensures that we avoid the identifiability problem caused by label switching"
- p.15: "Based on this criterion, the dynamic LBN is the preferred model, as it attains a lower WAIC value than the remaining alternatives."
- p.19: "the autoregressive coefficient responsible for turning this LBN into a dynamic LBN takes relatively small values. However, the 95% credible interval of the approximated posterior distribution is entirely positive."
- p.20: "the posterior predictive distribution of the minutes played, given the points scored, is a mixture probability distribution, as a consequence of how the model is defined in expression (7)."
- p.22: "the network structure is assumed to be specified by the researcher or treated as known."
- p.22: "further research should address approximate approaches to structural learning, as well as extensions of the framework to unbalanced data and irregular measurement times."
- p.16 Table 2 values.
- p.16 Table 3: β(C3)_0 = -3.434, sd 2.892.
- p.18 Table 5: β(T3)_SF = 6.659, 95% CI (1.357, 12.635); β(T3)_0 = -5.900 (-9.587, -2.810); β(T3)_PG = 5.135 (1.148, 9.665).
- p.19 Table 7: Iverson 0.870, Iguodala 0.988, Nailon 0.273.
- p.15 MCMC: "we ran three parallel chains with a total of 1,000,000 iterations per chain, including a burn-in period of 500,000 iterations for each chain... thinned by retaining every 500th iteration."
- p.3: "13 players of the Philadelphia 76ers team who most frequently participated during the 2005-2006 regular season"
- p.3: 82 games, 38 wins 44 losses, 9th in East.

Now careful on the math.

Eq (1): p(y,z,φ,θ) = p(y,z|φ,θ) p(φ|θ) π(θ).

Eq (2): p(y,z|φ,θ) = ∏_{j=1}^J ∏_{v=1}^V ∏_{w=1}^W p(y_j^{(v)}|pa(y_j^{(v)}),φ,θ) p(z_j^{(w)}|pa(z_j^{(w)}),φ,θ). (Note: the paper's product notation is slightly sloppy — product over v and w jointly; fine.)

Eq (4): the factorization.

ZIP: Y^M | A=0 ~ δ_0; Y^M | A=1 ~ Po(µ_i^M), log µ_i^M = µ_0^M + b_i^M, b_i^M ~ N(0, σ_M²).

Note: this is not a standard ZIP (which mixes a point mass with a Poisson using a mixing probability). Here the zero-inflation is deterministic given A=0. The paper calls it "conditional zero-inflated Poisson model (Lambert, 1992)". Gray-zone: it's a hurdle/structural-zero model, not Lambert's ZIP, because the zero probability is 1 when A=0 rather than a fitted π. Good audit point.

Fouls: log µ_ij^F = µ_0^F + β_M^F y_ij^M + b_i^F.

Free throws attempted: log µ_ij^{T1} = β_0^{T1} + β_F^{T1} y_ij^F + position terms + b_i^{T1}.

2PT/3PT: log µ_ij^{Tk} = β_0^{Tk} + β_M^{Tk} y_ij^M + position + b_i^{Tk}.

Made: Y^{Ck} ~ Bi(y^{Tk}, p_ij^{Ck}), logit p = β_0 + β_H IH + position + b_i^{Ck}.

Dynamic: log µ_ij^M = µ_0^M + β_M^{(+)} log(1 + y_{i,j-1}^M) + b_i^M.

HMM: Ω transition matrix; logit p_{Cij}^{Ck} and p_{Hij}^{Ck} differ only in intercept; constraint β_{C0} < β_{H0}.

Predictive: eq 16.

Units: All linear predictors are on log or logit scale → dimensionless. µ has units of counts per player-game (min⁻¹·game⁻¹? no — minutes per game, so "min game⁻¹"). β_M^F has units of log-count per minute: min⁻¹. β_M^{(+)} dimensionless (log-count per log-minute). WAIC in deviance units (twice negative log predictive density, nats). Report: WAIC values are on the deviance scale, so Δ = 80.56 corresponds to a log-Bayes-factor-ish difference; but caution: WAIC differences aren't Bayes factors. ΔWAIC 80.56 / 2 = 40.28 nats of elpd difference. That's under the "small" scale? No — 40 nats is enormous. Actually WAIC = -2(elpd_waic), so Δelpd = -ΔWAIC/2 = -40.28. Per-observation? The total is 40 nats over N J = 13×82 = 1066 player-games → 0.038 nats per observation. Hmm, that's more modest per observation. Good nuance: total ΔWAIC 80.56 but only ~0.038 nats per player-game. Still, the standard error of WAIC differences is typically ~ a few units, so 80.56 is decisive in total but the per-observation gain is 0.038 nats ≈ 3.8% multiplicative density improvement... Actually e^0.038 ≈ 1.039. I should present both. Good analytic depth.

And static vs HMM: ΔWAIC = 21274.69 - 21274.60 = 0.09 → 0.045 nats total, 4.2e-5 nats per obs. Utterly negligible. Strong evidence the latent hot/cold chain is not used.

Now the "singularity/breakdown regimes" requirement. Let me lay out formal breakdown conditions:

B1. Poisson log-link separation in shots-attempted submodels: for a player with y^{Tk}_{ij} = 0 in all games (Shavlik Randolph 0/0 3PT; Lee Nailon 0/0 3PT; Samuel Dalembert 1 attempt), the likelihood contribution is exp(-µ) → the posterior for b_i^{T3} is driven to -∞ relative to β_0. Degenerate regime: b_i^{Tk} → -∞ while β_0^{Tk} → +∞ with b_i + β_0 finite... actually since it's a random effect with N(0,σ²) prior, the posterior is proper; but the induced shrinkage is extreme and the hyperparameter σ_{T3} posterior inflates. Observed: σ_{T3} = 2.194 (0.947, 4.593) vs σ_{T2} = 0.598. And β_0^{T3} = -5.900 with sd 1.703 while σ_{T3} = 2.194 → the intercept is less than 3σ from the random-effect scale → the reference center is ~ e^{-5.9} = 0.0027 3PT attempts per game baseline. Good: prediction: centers attempt 3PT at rate 0.0027/min? No — units: log µ = β_0 + β_M y^M, so per game with y^M ~ 20 min: µ = exp(-5.9 + β_M·20). β_M^{T3} isn't in the table directly — the table has β_F^{T3} = 0.030 which is fouls. Hmm, the paper's table 5 shows β_F for all three, but the model in eq (10) has β_F only for T1, and β_M for T2, T3. The table labels all as β_F — an inconsistency in the paper. That's another audit finding: Table 5 [PAGE 18] reports β^{(Tk)}_F for k=1,2,3, but equation (10) on [PAGE 10] and the Tk model on [PAGE 11] specify β^{(Tk)}_M (minutes) for k=2,3. So the table's coefficient labels are inconsistent with the model specification. Excellent gray-zone catch. Note that β values 0.227, 0.040, 0.030 with tiny sds (0.009, 0.002, 0.005) — these look like per-minute slopes, not per-foul. 0.040 per minute × 30 min = 1.2 log units → e^1.2 ≈ 3.3× baseline; plausible for 2PT attempts. Whereas per-foul 0.040 would give essentially no effect. So arithmetic supports the "minutes" interpretation. Strong audit point. Similarly 0.227/min × 30 = 6.8 → e^6.8 = 900× — too much for FT attempts. Hmm. But for FT, eq (10) has β_F^{T1} on fouls. Iverson: 829 FT attempts / 82 games = 10.1 per game; fouls drawn 8.2/game; 10.1/8.2 = 1.23. exp(0.227 × 8.2 + β_0) = 10.1 → 1.86 + β_0 = 2.31 → β_0 ≈ 0.45. But table says β_0^{T1} = 0.246. Close-ish with random effect. So per-foul interpretation works for k=1 (0.227 fouls → free throws, ratio ~1.25 suggests 0.227 ≈ log(1.25)=0.223 ✓). So for k=1 it's per-foul and consistent. For k=2,3 the label β_F should be β_M. I'll present this as a labeling/interpretation gray zone with a falsifiable check: if β^{(T2)} in Table 5 were per-foul, then 2PT attempts for Iverson would be exp(0.591 + 0.040×8.2 + b) ≈ 2.5/game, but observed is 1599/82 = 19.5/game. So it must be per-minute: exp(0.591 + 0.040×37.8) = exp(2.10) = 8.2... still short of 19.5. Hmm, but positional indicator: Iverson is PG, β_PG^{T2} = 0.009, so no. And b_i ~ N(0, 0.598²). exp(0.591+1.512)=8.2. Not 19.5. Hmm.

Wait — maybe minutes are in units such that µ_0 = 2.616 is log-mean and log µ^M = 2.616 + b → µ = 13.7 minutes. Iverson averaged 3103/82 = 37.8 min but 0.87 participation → 3103/71 = 43.7 min. Hmm, exp(2.616) = 13.7 predicted mean minutes. With b_i^M: σ_M = 0.688. For Iverson, b would need to be log(43.7/13.7) = 1.16, which is 1.7σ — plausible.

OK so back to 2PT attempts for Iverson: predicted exp(0.591 + 0.040×43.7 + b^{T2}) = exp(0.591+1.748+b) = exp(2.34+b). To hit 19.5 need b = 0.63; σ_{T2} = 0.598 so that's ~1σ. Plausible. Good — the per-minute interpretation is coherent. Whereas per-foul gives exp(0.591 + 0.040×8.2) = 2.5, requiring b = 2.06 = 3.4σ. Much less plausible. So the audit conclusion: Table 5's β_F label for k=2,3 must denote β_M (minutes), consistent with [PAGE 11]. This is a real, verifiable finding. 

B2. Binomial support truncation: y(Tk)=0 → likelihood of p is 1 → those observations contribute zero Fisher information about p^{Ck}.
B3. Logit separation: for players with extremely high or low make rates, β_0^{C3} = -3.434 with sd 2.892 → posterior straddles a wide range; the 95% CI (-9.657, 1.683) spans ~11 log-odds → probability from 6.4e-5 to 0.84. That's the near-separation regime. Formally: when the number of observed successes in the reference cell is 0, the MLE diverges; the N(0,10²) prior keeps the posterior proper but the posterior sd grows ∝ (number of zero-cells)^{-1/2}.
B4. AR(1) log-linear Poisson: log µ_j = µ_0 + β log(1+y_{j-1}) + b. For β ∈ [0,1) the process is ergodic (Fokianos-Tjøstheim). For β < 0 it can hit the boundary µ → 0. Here β = 0.097, far from 1 → no unit-root/near-explosive regime; the half-life of a minutes shock in log(1+y) space is log(0.5)/log(0.097)... but the coefficient is on log(1+y_{j-1}), not on log µ_{j-1}, so there's no simple geometric decay. Actually the paper's model is a log-linear AR on the *observation*, not on the mean — so the "persistence" interpretation is different: E[log(1+y_j)] = µ_0 + β log(1+y_{j-1}) + b. This is an AR(1) on log(1+y) with coefficient β. So half-life = ln 0.5 / ln 0.097 = 0.693/2.333 = 0.297 games?? Wait ln(0.097) = -2.33, so half-life = -ln2/ln β = -0.693/(-2.33) = 0.297 games. That means a deviation decays by half in 0.3 games — essentially no memory. Hmm — that's a strong statement: the "dynamic" model's memory is less than one game. Let me verify: AR(1) x_j = c + β x_{j-1} + ε. Half life = ln(0.5)/ln(β). β = 0.097 → ln β = -2.333 → half-life = 0.297. Yes. So >99%? Decay to 1% takes ln(0.01)/ln(0.097) = -4.605/-2.333 = 1.97 games. So a minutes shock is 99% dissipated within 2 games. That is the quantitative deflation of "form" narratives. Great analytic payload.

But careful: the model is conditional on participation and the mean is exp(...), so y_j itself is Poisson with that mean. The recursion in the mean: log µ_j = µ_0 + β log(1+y_{j-1}). If we linearize log(1+y) ≈ log µ for large µ, then log µ_j ≈ µ_0 + β log µ_{j-1} → same half-life 0.297. Fine.

B5. Hidden Markov absorbing/identifiability: when q_CH, q_HC → 0, the chain is reducible, and the two-state model collapses to a mixture of two static models with state assigned per-game by the prior — but actually if transitions are 0 the state is determined by initial state → fully absorbing → then it's a static model with an unobserved binary covariate → non-identifiable except via the ordering constraint. The observed ΔWAIC of 0.09 vs static indicates this is exactly what happened. Singular regime: the Fisher information matrix is rank-deficient at q = 1 boundary (Watanabe's singular learning theory applies — the regular asymptotics of BIC break down, WAIC remains valid, which is presumably why they chose it).

B6. WAIC's own breakdown: WAIC is computed pointwise on the log-likelihood; for the latent variable model, NIMBLE's default WAIC conditions on the latent states (conditional WAIC) unless marginalized — the paper says "the default implementation of the WAIC in the NIMBLE environment" [PAGE 15]. Default NIMBLE WAIC uses the conditional likelihood given the latent nodes sampled, which for HMM gives an over-optimistic fit and would penalize differently. This is a genuine methodological gray zone. Prediction: the HMM's WAIC is computed conditional on z, so p_WAIC is underestimated relative to a marginalized version.

Now the trap/genealogy: 
- The "hot hand" lineage: Gilovich/Vallone/Tversky (1985) — not cited in the paper but it's the origin; paper cites Sun (2004), Sandri et al. (2020), Ötting & Andreas (2022), Calvo et al. (2025). Miller & Sanjurjo (2018) correction — not cited but relevant. I should be careful: the paper only cites what it cites. I can mention lineage beyond the paper as long as I don't fabricate citations to the paper. The prompt asks for "Historical/scientific lineage", so external historical context is fine but I should flag what's in-paper vs. external.
- ZIP: Lambert (1992) Technometrics.
- Log-linear Poisson AR: Fokianos & Tjøstheim (2011) JMVA.
- DBN: Ghahramani (1997).
- BN: Pearl (1988), Pearl & Russell (1995).
- WAIC: Watanabe (2010) — singular learning theory.
- Multilevel/longitudinal: Diggle (2002).
- Sports BN: Constantinou et al. (2012) pi-football; D'Urso et al. (2023) copula BN; Zhang et al. (2020) structure learning.

Multi-week traps over a season:
1. The 82-game schedule with 13 players: the participation model p_i^A is constant across the season — no drift, no injury recovery, no trade deadline (Feb), no late-season shutdown for a 9th-place team. Trap: applying season-average p_i^A to March/April games for a team eliminated from playoff contention.
2. Back-to-backs and the 4-in-5: not in the model.
3. Playoff qualification race: the 76ers finished 9th → the last ~2 weeks had different incentive structure; the iid Bernoulli participation is misspecified exactly when the clock matters most.
4. Home/away: β_H ≈ 0.045/0.067/-0.060, all near zero → the "home court advantage" narrative is deflated to a ~0.9 percentage-point effect on 2PT (logit 0.067 → odds ratio 1.069).
5. Roster: 13 players, "most frequently participated" — survivorship selection.

RECURSIVE_THEORY_OF_MIND: I need "crisis habit regression vs counter-trap vs clock." Interpret: a crisis habit is an over-reactive adjustment during a losing streak (e.g., "the team is cold, bench the shooters"). The model's hidden-Markov "cold/hot" state is precisely the formalization of that narrative, and WAIC rejects it (ΔWAIC 0.09 vs static → no gain). Counter-trap: the opposite over-correction — assuming total independence and ignoring the weak but real minutes persistence (β = 0.097, 95% CI entirely positive → 95%+ posterior probability of positive autocorrelation). So the counter-trap is "ignore all serial dependence" which is falsified at 95%. The correct posture is: serial dependence exists but has a sub-game half-life. The clock: three clocks — (i) the 82-game season clock j; (ii) the within-game minutes clock y^M which is the *carrier* of nearly all the information (it enters fouls, 2PT, 3PT, and via the foul node the FT node); (iii) the MCMC clock (3×10^6 iterations, 500k burn-in, thin 500 → 3,000 draws; effective sample size for the latent q's may be far lower due to poor mixing). Recursive theory of mind also: the coach's decision is a function of the player's expected performance, which is a function of minutes, which is a function of the coach's decision → simultaneity. The DAG assumes A → M → (F,T,C) with no feedback from performance to minutes. In reality, a player who starts hot gets more minutes in the same game. The DAG is acyclic within a game, so this within-game feedback loop is truncated. That is the deepest structural trap: the model cannot represent "he's hot so the coach leaves him in."

CROSS_LAYER_VETO_ADJUDICATION: 
- Physical: 6-foul disqualification cap; minutes cap at 48 (regulation) / 53 with OT; the Poisson for minutes has support ℕ₀ unbounded → P(Y^M > 48) > 0. With µ = 13.7 base and b up to 1.16 (Iverson) → µ = 43.7, P(Poisson(43.7) > 48) ≈ 0.24. That's a big mass above the physical cap. Compute: Poisson(43.7), P(X>48) — mean 43.7, sd 6.6, so 48 is +0.65 sd → P ≈ 0.26. Yes substantial. So the minutes Poisson generates physically impossible values ~26% of the time for a heavy-minutes player. Hard veto. This is a strong, quantitative cross-layer finding. (Real minutes distribution is bounded and left-skewed with spikes at 0, 12, 24, 36.)
- Biomechanical: injury → A=0 is absorbed as a Bernoulli draw; but an injury is a state with persistence (recovery time), not a memoryless coin. The model's implied injury duration distribution is Geometric(p) with p = 1 - p_i^A; for Iverson p = 0.13 → mean absence duration 1/0.13 ≈ 7.7 games?? Wait, Geometric with success prob of playing: expected run of absences = (1-p)/p = 0.13/0.87 = 0.15 games. Expected run length of play = p/(1-p) = 6.7 games. So the model implies Iverson misses on average 0.15 consecutive games — i.e., absences are isolated. Real injury absences are 5-15 games. Hard veto on the participation node for any injury-driven absence.
- Weather: indoor; only travel/airport delays. The model has no travel term. Veto applies for known travel disruptions (e.g., a team stranded). Also altitude: Denver at 1,609 m — no term.
- Referee/crew: foul rate is the most referee-sensitive; the foul model has only a player random effect and minutes, no crew or pace. Veto when a crew with a known high whistle rate is assigned — but careful, I must not stray into betting. I can phrase it as officiating-crew effects on the foul-generating process, purely as a modeling covariate question. That's fine — it's not a betting line.

RLVR counterfactual vetoes — 3 verifiable scenarios with predictions. Let me make them concrete and checkable against the released code (github gcalvobayarri/Longitudinal_BNs) and reported numbers.

Veto 1 (support truncation → information nullity): Remove all player-games where y^{T3} = 0 for a specific player (e.g., Shavlik Randolph, 0 3PT attempts all season) and refit. Prediction: the posterior of β_0^{C3} and σ_{C3} shift by less than 0.05 in absolute mean and the 95% CI overlaps; because for y^{Tk}=0, Bi(0,p) = 1 for all p → zero likelihood contribution. Verifiable: the likelihood is literally flat, so a well-mixed chain produces the same posterior within Monte Carlo error. Falsified if the posterior moves.

Veto 2 (AR coefficient identifiability): Refit the dynamic LBN with β_M^{(+)} fixed at 0 (nested static-in-minutes model) and compute WAIC. Prediction: WAIC ∈ [21260, 21300] with a difference from the full dynamic model of 40–120 deviance units, and the posterior of β_M^{(+)} in the full model remains in (0.07, 0.13) with ≥95% posterior mass above 0. Verifiable against [PAGE 19] Table 6. Also predict the implied AR half-life in log(1+y) space: ln(1/2)/ln(β) = 0.30 games. Falsified if the half-life > 1 game.

Veto 3 (HMM collapse to static): Refit the hidden Markov LBN with the transition matrix constrained to the identity (q_CC = q_HH = 1, i.e., 0 free transition parameters) and compute WAIC. Prediction: WAIC ∈ [21274.5, 21275.0], i.e., within 0.5 of both the reported static (21274.69) and the reported HMM (21274.60); and the posterior of q_CH + q_HC in the unconstrained HMM has mean < 0.10 with the 95% CI containing values < 0.02. Falsified if the constrained-identity model's WAIC is worse than the HMM's by more than 5 units. Also predict the ordering constraint binds: P(β_{H0}^{Ck} - β_{C0}^{Ck} < 0.5) is high, i.e., the constraint is active near the boundary → the Savage-Dickey-style check.

Add a 4th optional? They asked 3. Keep 3 but can add sub-predictions.

Also I should mention prediction verification: P(points > 30 | minutes > 30) for Iverson vs Korver.

Word count: need ≥1,000. I'll write richly.

Format: XML sections exactly as named. Use LaTeX inline. Let's write.

One more: units. Let me define units table:
- y^M: minutes per player-game, [min game⁻¹]
- y^F, y^Tk, y^Ck: counts per player-game, [game⁻¹]
- µ: expectation, same units as the response
- β_M: [min⁻¹] on log scale
- β_F: [count⁻¹] on log scale
- β_M^{(+)}: dimensionless (coefficient on log(1+minutes))
- β_H, position coefficients: dimensionless log-odds
- σ: log-scale, dimensionless
- WAIC: deviance units = 2× negative log predictive density, nats
- q: probability, dimensionless

Equation for WAIC: WAIC = -2( lppd - p_WAIC ), lppd = Σ_i log( (1/S) Σ_s p(y_i | θ^s) ).

Now write it. Keep quotes accurate and short.

Also "gray-zone audit" — I should flag things like: the "ZIP" is actually a hurdle; Table 5 label mismatch; WAIC default conditional; the participation node ignores opponent; the fouls variable semantics (672 fouls for Iverson / 82 = 8.2 > 6).

Let me double check Iverson 672 FR: table says FR 672, MP 3103.35. 672/82 = 8.20. Personal fouls max 6 per game; a player who fouls out at 6 and plays 71 games would max at ~426. So 672 must be "fouls drawn on opponents" (i.e., fouls received by the player from opponents) which is unbounded. But page 3 says "number of personal fouls received" and page 1 abstract says "fouls drawn". So the paper is internally inconsistent in wording — page 1: "fouls drawn", page 3: "personal fouls received", Table 1 caption: "fouls received (FR)". The arithmetic is decisive: it's fouls drawn. Good.

Also Kevin Ollie: 56 FR over 1069 minutes; MP 1069.02/82 = 13.0 but he played fewer games. Fine.

Now write the response. Aim ~2,300 words.

Structure with headers exactly.

Let me be careful with LaTeX escaping - fine in plain text.

I'll write now.
</NATIVE_REASONING>

<THINK_TRACE>

The derivation chain here runs from a single factorization to a set of falsifiable numerical claims, and I want to walk it hop by hop because each hop opens a gray zone.

**Hop 1 — the joint law.** The paper opens with the global-semantics factorization [PAGE 5]: every node is conditionally independent of its non-descendants given its parents, so the whole season's joint density is a product of local conditional densities. That is the load-bearing assumption; everything else is a choice of link function.

**Hop 2 — the acyclic ordering.** The static DAG of [PAGE 7] imposes the chain \(Y^{(A)} \to Y^{(M)} \to Y^{(F)} \to Y^{(T1)}\) and \(Y^{(M)} \to (Y^{(T2)}, Y^{(T3)}) \to Y^{(Ck)}\). Minutes is the carrier variable: it enters the foul rate, the two- and three-point attempt rates, and (indirectly, through fouls) the free-throw rate. Success probability \(p^{(Ck)}\) never sees minutes — only home/away, position, and a player random effect. That is a substantive modeling claim: *efficiency is minutes-invariant*. Under fatigue, that claim fails; the paper never tests it.

**Hop 3 — the "ZIP" that is not a ZIP.** The paper writes \((Y^{(M)}_{ij}\mid Y^{(A)}_{ij}=1)\sim \mathrm{Po}(\mu^{(M)}_i)\) and \((Y^{(M)}_{ij}\mid Y^{(A)}_{ij}=0)=0\), and calls this a "conditional zero-inflated Poisson model (Lambert, 1992)" [PAGE 9]. Lambert's ZIP mixes a point mass at zero with a Poisson via a fitted mixing probability \(\pi\); here the zero mass is *structural*, conditioned on \(A=0\) with probability one. This is a hurdle model, not a ZIP. The distinction matters for prediction: a hurdle cannot represent "played, but recorded zero minutes," which in real box scores is a distinct event from "did not play."

**Hop 4 — the dynamic hop.** The only edge that crosses game boundaries attaches to minutes, via the log-linear Poisson autoregression of Fokianos & Tjøstheim [PAGE 13]. Note carefully what the coefficient multiplies: \(\log(1+y^{(M)}_{i,j-1})\), not \(\log \mu_{j-1}\). So the recursion is an AR(1) on the *transformed observation*. Linearizing \(\log(1+y)\approx \log\mu\) for large \(\mu\), the implied half-life of a minutes shock is \(\ln(1/2)/\ln(0.097)=0.297\) games, and 99% dissipation at \(\ln(0.01)/\ln(0.097)=1.97\) games. A twelve-minute deviation in game \(j\) contributes \(0.097\times 2.48 = 0.24\) log-units to game \(j+1\)'s mean. This is the single most important quantitative deflation in the paper: the "dynamic" structure has *less than one game of memory*.

**Hop 5 — the latent hop.** The hidden Markov layer lets success probability depend on a two-state cold/hot chain. WAIC then rejects it: 21274.60 against 21194.13 for the plain autoregressive model [PAGE 16]. Converted: \(\Delta\mathrm{WAIC}=80.47\) deviance units over \(13\times 82=1066\) player-games is \(0.038\) nats/observation. Decisive in total, modest per observation — but decisive. And crucially, the hidden Markov model is *statistically indistinguishable from the static model* (21274.60 vs 21274.69, \(\Delta=0.09\), \(4.2\times10^{-5}\) nats/obs). The two extra transition parameters bought nothing. That is the empirical verdict on the hot-hand layer.

**Gray-zone audit.** Six items. (i) The participation node is Bernoulli with a *player-constant* probability; the implied absence-run length is geometric with mean \((1-p_i)/p_i\), giving Iverson 0.15 consecutive games — real injury absences run 5–15 games. (ii) The minutes Poisson has unbounded support; for Iverson's fitted mean of ≈43.7 min, \(P(Y^{(M)}>48)\approx 0.26\), i.e., a quarter of simulated games exceed regulation-plus-overtime. (iii) The fouls variable: 672 fouls over 82 games is 8.2 per game, above the six-foul disqualification limit, so it must be fouls *drawn on opponents*, contradicting "personal fouls received" [PAGE 3]; the model's unbounded Poisson is right only under the drawn-on-opponents reading. (iv) Table 5 [PAGE 18] labels all attempt coefficients \(\beta^{(Tk)}_F\), but equations (10)–(11) [PAGES 10–11] specify \(\beta^{(T1)}_F\) (fouls) for free throws and \(\beta^{(Tk)}_M\) (minutes) for \(k=2,3\). Arithmetic resolves it: with the per-minute reading, Iverson's 2PT rate is \(\exp(0.591+0.040\times43.7+b)\) so \(b\approx0.63\approx1.05\sigma_{T2}\); with the per-foul reading it needs \(b\approx2.06=3.4\sigma\). The per-minute reading is the coherent one. (v) The HMM's WAIC uses "the default implementation ... in the NIMBLE environment" [PAGE 15], which conditions on sampled latent states; that overstates fit relative to a marginalized WAIC and shrinks \(p_{\mathrm{WAIC}}\). (vi) Near-separation in the three-point make submodel: \(\beta^{(C3)}_0=-3.434\) with sd 2.892 and CI \((-9.657,1.683)\) — eleven log-odds wide, because players with zero three-point attempts contribute a flat likelihood.

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

**Joint law and posterior.** With \((\mathcal{Y},\mathcal{Z})\) the observable/latent longitudinal vector, \(\phi\) random effects, \(\theta\) parameters and hyperparameters [PAGE 5]:

\[
p(y,z,\phi,\theta)=p(y,z\mid\phi,\theta)\,p(\phi\mid\theta)\,\pi(\theta) \tag{1}
\]

\[
p(y,z\mid\phi,\theta)=\prod_{j=1}^{J}\prod_{v=1}^{V}\prod_{w=1}^{W}
p\!\left(y_j^{(v)}\mid \mathrm{pa}(y_j^{(v)}),\phi,\theta\right)
p\!\left(z_j^{(w)}\mid \mathrm{pa}(z_j^{(w)}),\phi,\theta\right) \tag{2}
\]

Posterior: \(\pi(\phi,\theta\mid D)\propto L(\phi,\theta)\,p(\phi\mid\theta)\,\pi(\theta)\) (3, [PAGE 6]).

**Static factorization** [PAGE 7, Eq. 4]:

\[
p(y^{(C)},y^{(T)},y^{(F)},y^{(M)},y^{(A)},\theta,\phi)=
p(y^{(C)}\mid y^{(T)})\,p(y^{(T)}\mid y^{(F)},y^{(M)},y^{(A)})\,
p(y^{(F)}\mid y^{(M)},y^{(A)})\,p(y^{(M)}\mid y^{(A)})\,p(y^{(A)})\,\dots
\]

**Node submodels** (all linear predictors dimensionless on the log/logit scale; \(\mu\) carries the response's units):

| Node | Law | Linear predictor | Units |
|---|---|---|---|
| \(Y^{(A)}_{ij}\) | \(\mathrm{Bern}(p_i^{(A)})\) | — | prob., \([0,1]\) |
| \(Y^{(M)}_{ij}\) | hurdle-\(\mathrm{Po}(\mu^{(M)}_i)\) | \(\log\mu^{(M)}_i=\mu^{(M)}_0+b^{(M)}_i\) | min game\(^{-1}\) |
| \(Y^{(F)}_{ij}\) | hurdle-\(\mathrm{Po}\) | \(\log\mu^{(F)}_{ij}=\mu^{(F)}_0+\beta^{(F)}_M y^{(M)}_{ij}+b^{(F)}_i\) | game\(^{-1}\) |
| \(Y^{(T1)}_{ij}\) | hurdle-\(\mathrm{Po}\) | Eq. (10): \(\beta^{(T1)}_0+\beta^{(T1)}_F y^{(F)}_{ij}+\sum_k\beta^{(T1)}_k I_k(i)+b^{(T1)}_i\) | game\(^{-1}\) |
| \(Y^{(Tk)}_{ij},\,k{=}2,3\) | hurdle-\(\mathrm{Po}\) | \(\beta^{(Tk)}_0+\beta^{(Tk)}_M y^{(M)}_{ij}+\sum_k\beta^{(Tk)}_k I_k(i)+b^{(Tk)}_i\) | game\(^{-1}\) |
| \(Y^{(Ck)}_{ij}\) | \(\mathrm{Bi}(y^{(Tk)}_{ij},p^{(Ck)}_{ij})\) | Eq. (12): \(\mathrm{logit}\,p=\beta^{(Ck)}_0+\beta^{(Ck)}_H I_H(j)+\sum_k\beta^{(Ck)}_k I_k(i)+b^{(Ck)}_i\) | dimensionless |

Random effects: \((b^{(\cdot)}_i\mid\sigma)\sim N(0,\sigma^2)\), \(\sigma\sim U(0,100)\); coefficients \(\sim N(0,10^2)\); make/inclusion probabilities \(U(0,1)\) [PAGE 11]. \(\beta^{(F)}_M\) has units min\(^{-1}\); \(\beta^{(Tk)}_M\) likewise.

**Dynamic (AR) minutes** [PAGES 12–13, Eq. 14]:

\[
\log\mu^{(M)}_{ij}=\mu^{(M)}_0+\beta^{(+)}_M\log\!\left(1+y^{(M)}_{i,j-1}\right)+b^{(M)}_i,\qquad
\pi(\beta^{(+)}_M)=N(0,10^2)
\]

Fitted: \(\mu^{(M)}_0=2.616\ (0.223)\), CI \((2.172,3.004)\); \(\beta^{(+)}_M=0.097\ (0.011)\), CI \((0.076,0.119)\); \(\sigma_M=0.688\ (0.177)\), CI \((0.451,1.089)\) [PAGE 19, Table 6]. The paper states: *"the autoregressive coefficient responsible for turning this LBN into a dynamic LBN takes relatively small values. However, the 95% credible interval of the approximated posterior distribution is entirely positive"* [PAGE 19].

**Hidden Markov layer** [PAGE 13, Eq. 15]:

\[
\Omega=\begin{pmatrix}q_{CC}&q_{CH}\\ q_{HC}&q_{HH}\end{pmatrix},\quad q_{CC}+q_{CH}=1,\ q_{HC}+q_{HH}=1,\quad p(q_{CH})=p(q_{HC})=\mathrm{Beta}(1,1)
\]

with the identification constraint *"\(\beta^{(Ck)}_{C0}<\beta^{(Ck)}_{H0}\) is imposed ... this constraint ensures that we avoid the identifiability problem caused by label switching"* [PAGE 15].

**Predictive law** [PAGE 20, Eq. 16]:

\[
f(y^{(C)*},\dots,y^{(A)*}\mid D)=\int f(y^{(C)*},\dots,y^{(A)*}\mid\theta,\phi)\,\pi(\theta,\phi\mid D)\,d(\theta,\phi)
\]

**Model comparison (deviance scale, nats):**

\[
\mathrm{WAIC}=-2\Big(\widehat{\mathrm{lppd}}-\widehat{p}_{\mathrm{WAIC}}\Big),\quad
\widehat{\mathrm{lppd}}=\sum_{i}\log\!\left(\frac{1}{S}\sum_{s}p(y_i\mid\theta^{s})\right)
\]

Static 21274.69; Dynamic 21194.13; Hidden Markov 21274.60 [PAGE 16, Table 2]. \(\Delta_{\text{dyn,static}}=80.56\) deviance units \(\Rightarrow 40.28\) nats total \(\Rightarrow 0.038\) nats per player-game. \(\Delta_{\text{HMM,static}}=0.09\) \(\Rightarrow 0.045\) nats total.

**Singularity / breakdown regimes (explicit):**

1. **Zero-information regime.** If \(y^{(Tk)}_{ij}=0\), the binomial term \(\binom{0}{0}p^0(1-p)^0=1\) for all \(p\); the observation adds zero Fisher information. Randolph and Nailon took zero three-point attempts all season [PAGE 4], so their \(b^{(C3)}_i\) posteriors are prior-dominated.
2. **Near-separation in logit.** With zero successes in the center/away reference cell, the MLE of \(\beta^{(C3)}_0\) diverges; the \(N(0,10^2)\) prior keeps propriety but the posterior sd scales like \(n_{\text{zero-cell}}^{-1/2}\). Observed: \(\beta^{(C3)}_0=-3.434\), sd 2.892 [PAGE 16].
3. **Hurdle degeneracy.** As \(\sigma_{T3}\to\infty\), the random-effect prior flattens and the intercept \(\beta^{(T3)}_0=-5.900\) becomes unidentified up to a location shift per player; observed \(\sigma_{T3}=2.194\ (0.947,4.593)\) against \(\sigma_{T2}=0.598\) is the fingerprint.
4. **Boundary reducibility.** If \(q_{CH}+q_{HC}\to 0\) the chain becomes absorbing; the Fisher information matrix over \((q_{CH},q_{HC})\) becomes rank-deficient at the boundary, so regular BIC asymptotics fail — which is precisely the regime Watanabe's singular theory (and hence WAIC) is designed for.
5. **Support violation, minutes.** \(\mathrm{supp}=\) \(\mathbb{N}_0\) versus physical \(\{0,\dots,48\}\); for \(\mu=43.7\), \(P(Y>48)\approx0.26\).
6. **Unit-root exclusion.** Because the recursion is on \(\log(1+y)\) and not on \(\log\mu\) with a multiplicative coefficient, the process remains ergodic for all \(\beta^{(+)}_M\in\mathbb{R}\); there is no explosive regime at \(\beta=1\). The relevant breakdown is instead \(\beta^{(+)}_M<0\), where the mean function is decreasing in lagged minutes.

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>

The lineage has four strands, and they braid.

*Graphical strand.* Pearl (1988) supplies the semantics; Pearl & Russell (1995) supply the epigraph — BNs as *"direct representations of the world, not of reasoning processes"* [PAGE 2]. Ghahramani (1997) adds the time index. The paper's own contribution is to take an essentially static multilevel model and re-express it as a DAG so that the factorization becomes an inferential asset rather than an algebraic convenience. The recursive-predictive capability (cause→effect and effect→cause) described in §5.3 [PAGE 20] descends directly from Pearl's belief-propagation program.

*Count-regression strand.* Lambert (1992) for zero inflation; Fokianos & Tjøstheim (2011) for log-linear Poisson autoregression. The latter is the crucial technical debt: their stationarity theory was developed for exactly the \(\log(1+y_{t-1})\) link, which is why the paper can claim ergodicity without a unit-root condition. A modeler who silently substitutes \(\beta\log\mu_{t-1}\) inherits a hard \(|\beta|<1\) constraint the paper does not need.

*Hot-hand strand.* Sun (2004) → Sandri, Zuccolotto & Manisera (2020) → Ötting & Andreas (2022) → Calvo, Armero & Spezia (2025). The intellectual history of this strand is a forty-year oscillation: the original Gilovich–Vallone–Tversky finding (1985) that the hot hand is a cognitive illusion, then the Miller–Sanjurjo (2018) selection-bias correction showing the original test was biased toward rejection, then a wave of HMM papers that re-open the question with latent-state machinery. This paper sits at the *skeptical* end of the current swing and says so with a number: the HMM ties the static model to within 0.09 WAIC. The genealogy is a warning — every generation of latent-state paper re-discovers that the state is weakly identified unless the transition matrix is held away from the boundary.

*Selection-criterion strand.* Watanabe (2010) is used for a reason that the paper does not spell out: WAIC is the only widely-implemented criterion with a valid asymptotic expansion under *singular* (non-identifiable) models, which is exactly the situation created by the label-switching constraint and boundary transition probabilities.

**Multi-week traps over the 82-game clock:**

- *Constant participation.* \(p^{(A)}_i\) is estimated once for the season. A team that finishes ninth — *"finished 9th in the Eastern Conference and failed to qualify for the playoffs"* [PAGE 3] — has a materially different participation process in the final two weeks than in November. The model cannot represent a shutdown.
- *No rest-day variable.* Back-to-backs, 4-in-5, and travel legs are absent from every linear predictor. Minutes autocorrelation of 0.097 is consistent with a process where schedule density, not player form, drives the residual.
- *Home/away deflation.* \(\beta^{(C1)}_H=0.045\), \(\beta^{(C2)}_H=0.067\), \(\beta^{(C3)}_H=-0.060\) [PAGE 16]; the 2PT home effect is an odds ratio of \(e^{0.067}=1.069\). The "home-court" narrative is compressed to under a percentage point in make rate.
- *Survivorship in the roster.* Only *"13 players ... who most frequently participated"* [PAGE 3] enter. Players traded away mid-season or lost to injury are outside the sample; their absence is encoded only as zeros.
- *Positional era drift.* The paper's own interpretation — centers in the early 2000s took close two-pointers — is a 2005–06 fact, not a structural one. Applying \(\beta^{(C2)}_{SF}=-0.493\) to a modern five-out offense is a category error.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>

**Crisis habit.** The crisis habit here is narrative-driven intervention: a coach or analyst observes a cold shooting stretch, attributes it to a team-level "cold state," and adjusts. The hidden Markov layer is the *formalization* of that habit — it posits a real two-state generator with transition probabilities to be estimated. The WAIC comparison is the audit: the habit's formal counterpart does no better than assuming no state at all (21274.60 vs 21274.69). Crisis-driven adjustment is therefore unsupported by this data-generating process.

**Counter-trap.** The opposite over-correction is to declare minutes fully memoryless. That is falsified: the 95% credible interval for \(\beta^{(+)}_M\) is \((0.076,0.119)\), excluding zero, and the paper flags exactly this: *"the autoregressive coefficient ... takes relatively small values. However, the 95% credible interval ... is entirely positive"* [PAGE 19]. The correct posture is neither "streaks are real" nor "nothing persists" but "persistence exists with a sub-game half-life" — 0.30 games in \(\log(1+y)\) space, 99% dissipation in 1.97 games.

**Clock.** Three clocks operate. (i) The season clock \(j=1,\dots,82\), which enters only through the minutes recursion. (ii) The within-game clock \(y^{(M)}\), which is the dominant information carrier: it is a parent of fouls, of 2PT and 3PT attempts, and — through fouls — of free throws. Any error in the minutes node propagates to five downstream nodes. (iii) The Monte Carlo clock: *"three parallel chains with a total of 1,000,000 iterations per chain, including a burn-in period of 500,000 iterations ... thinned by retaining every 500th iteration"* [PAGE 15] yields \(3\times1000=3000\) retained draws. For a 13-player, ~30-parameter hierarchical model with latent states, 3,000 draws is thin for the tail quantiles of \(\sigma_{T3}\) and for the boundary transition probabilities.

**Recursive theory of mind — the missing loop.** The DAG is acyclic *within* a game, which forces a one-way causal story: coach decides participation → minutes → production. In reality the coach observes production within the game and revises minutes. That is a feedback loop the DAG cannot encode. The consequence is measurable: if a player who starts hot stays in, then \(y^{(M)}\) and \(y^{(Ck)}\) are simultaneously determined, and the coefficient \(\beta^{(Ck)}_H\) on home/away absorbs some of that endogeneity. The model is a *generator of a single team's box score conditional on a minutes draw*, not a simulator of the coach's decision problem — and it has no representation of the opponent's defensive assignment at all. Any deployment that treats its outputs as a game-level forecast is importing a theory of mind the model does not have.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>

**Veto 1 — physical support (hard).** Minutes are modeled as Poisson on \(\mathbb{N}_0\). Regulation caps a player at 48 minutes; with overtime, 53. For Iverson's fitted \(\mu^{(M)}=\exp(2.616+b)\approx43.7\) min, \(P(Y^{(M)}>48)\approx0.26\) and \(P(Y^{(M)}>53)\approx0.07\). No amount of posterior averaging repairs a quarter of the predictive mass falling outside physical law. Federer-grade modeling requires a bounded or truncated likelihood; the hurdle-Poisson is vetoed for heavy-minutes players.

**Veto 2 — biomechanical/load (hard).** The participation node is Bernoulli with geometric implied absence runs: for Iverson \(p^{(A)}=0.870\) [PAGE 19], so expected consecutive absences \(=(1-p)/p=0.15\) games. An actual soft-tissue injury produces 5–15 consecutive absences. The moment a documented injury, load-management designation, or concussion-protocol entry exists, the Bernoulli node is not merely imprecise — it is the wrong functional form. Veto the participation and minutes nodes entirely and condition on observed minutes instead.

**Veto 3 — disqualification semantics (hard, conditional on reading).** If \(Y^{(F)}\) is "personal fouls received" as stated on [PAGE 3], the six-foul disqualification truncates the support at 6, whereas the model's Poisson is unbounded. The arithmetic — 672 fouls for Iverson over 82 games, 8.20 per game — proves the variable must be fouls *drawn on opponents*, which is genuinely unbounded. The veto therefore attaches to the *variable definition*, not the likelihood: any downstream use that interprets \(\beta^{(F)}_M=0.097\)-scale output as "foul trouble risk" is reading the wrong quantity.

**Veto 4 — environmental (soft, indoor).** Basketball is indoor, so barometric and precipitation effects are null; altitude (Denver, 1,609 m) and travel disruption are the only physical channels, and neither appears in any linear predictor. A confirmed travel disruption (stranded charter, delayed arrival) invalidates the minutes draw for the affected team-games. This is a schedule-layer veto, not a weather-layer one.

**Veto 5 — officiating-crew (soft).** Foul rate is the most officiating-sensitive node. The foul submodel contains only minutes and a player random effect; no crew, no pace, no opponent. A crew with a documented high whistle rate shifts the entire foul→free-throw branch. This is a covariate-omission veto: the model is not wrong, it is under-specified for the question.

**Adjudication rule.** Layer precedence: physical support > biomechanical state > schedule/environment > officiating > narrative. A hard veto at the physical layer cannot be outvoted by strong evidence at the narrative layer. Since prediction of points (Fig. 5) and reverse prediction of minutes (Fig. 6) both route through the minutes node, any physical-layer veto on minutes invalidates both directions simultaneously.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

**Veto scenario 1 — the information-nullity test (flat-likelihood).** *Intervention:* delete every player-game in which \(y^{(T3)}_{ij}=0\) for Shavlik Randolph (0 three-point attempts all season) and refit the full dynamic LBN. *Mechanism:* for \(y^{(Tk)}=0\), \(\mathrm{Bi}(0,p)=1\) identically in \(p\), so those observations carry zero Fisher information about \(p^{(C3)}\) and about \(b^{(C3)}_i\). *Prediction:* the posterior mean of \(\beta^{(C3)}_0\) and of \(\sigma_{C3}\) shift by less than 0.05 absolute, and the 95% credible intervals overlap; WAIC changes by no more than Monte Carlo error (a few units). *Falsification:* any systematic shift in \(\beta^{(C3)}_0\) beyond 0.1 proves the binomial term is not what the paper claims, or that NIMBLE's default WAIC is conditioning on latent draws in a way that breaks the flatness.

**Veto scenario 2 — the memory-length test (AR half-life).** *Intervention:* refit the dynamic LBN with \(\beta^{(+)}_M\) fixed at exactly 0, producing a model nested between static and dynamic. *Mechanism:* the entire 80.56-unit WAIC gap between static and dynamic should be attributable to this single scalar. *Prediction:* (a) the constrained model's WAIC lands in \([21260,21300]\), i.e., the gap collapses; (b) in the unconstrained refit, the posterior of \(\beta^{(+)}_M\) remains in \((0.070,0.130)\) with \(\Pr(\beta^{(+)}_M>0\mid D)\geq0.95\); (c) the implied half-life \(\ln(1/2)/\ln(\hat\beta)=0.30\) games, and the 99%-dissipation time \(=1.97\) games, both reproducible from [PAGE 19, Table 6]. *Falsification:* a half-life exceeding one full game would restore the "form persists across weeks" narrative and require reinterpreting the WAIC gap as coming from somewhere other than minutes persistence.

**Veto scenario 3 — the reducibility test (hot-hand collapse).** *Intervention:* refit the hidden Markov LBN with the transition matrix pinned to the identity, \(q_{CC}=q_{HH}=1\), leaving zero free transition parameters. *Mechanism:* an absorbing chain makes the latent state a fixed per-run label, reducing the model to a two-component static mixture — which is the static LBN with an unobserved binary covariate. *Prediction:* (a) the pinned model's WAIC falls within 0.5 of both reported values, i.e., inside \([21274.4,21275.0]\), reproducing the near-tie between 21274.69 and 21274.60; (b) in the unconstrained HMM, the posterior of \(q_{CH}+q_{HC}\) concentrates near zero, with mean below 0.10 and the 95% interval containing values under 0.02 — meaning states are visited a handful of times at most across 82 games; (c) the ordering constraint \(\beta^{(Ck)}_{C0}<\beta^{(Ck)}_{H0}\) binds near the boundary, so the Savage–Dickey density ratio at zero is small and the "hot state raises efficiency" claim is carried by the constraint rather than by the data. *Falsification:* if pinning the transitions costs more than 5 WAIC units, the latent chain is genuinely informative and the hot-hand layer survives. Given \(\Delta\mathrm{WAIC}=0.09\) against the static model, it will not.

**Auxiliary verifiable prediction (Fig. 5/6 replication).** Condition on \(y^{(M)*}>30\) and compute the posterior predictive of total points: Iverson's mean should exceed Korver's by a wide margin, driven by \(\sigma_{T3}=2.194\) and Iverson's higher attempt volume, despite Korver's higher \(p^{(C3)}\). Conversely, condition on total points \(\le 10\): the predictive distribution of minutes should be a visible two-component mixture for Iverson — a spike near zero from the \(Y^{(A)}=0\) branch of expression (7) and a diffuse component above 20 minutes — and unimodal for Korver. This is stated in the source: *"the posterior predictive distribution of the minutes played, given the points scored, is a mixture probability distribution, as a consequence of how the model is defined in expression (7)"* [PAGE 20].

</RLVR_COUNTERFACTUAL_VETOES>