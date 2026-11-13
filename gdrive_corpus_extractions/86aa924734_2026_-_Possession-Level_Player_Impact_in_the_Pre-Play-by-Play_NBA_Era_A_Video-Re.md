---
source: "2026 - Possession-Level Player Impact in the Pre-Play-by-Play NBA Era A Video-Reconstructed RAPM Database, 1984--1996 - Jacobs.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 92
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5415
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about "Possession-Level Player Impact in the Pre-Play-by-Play NBA Era: A Video-Reconstructed RAPM Database, 1984–1996" by Justin Jacobs. They've provided the full text of a 92-page arXiv preprint.

I need to output sections in exact XML tags:
1. `<THINK_TRACE>` - Deep multi-hop derivation & gray-zone audit (>=400 words)
2. `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown
3. `<RETROCAUSAL_GENEALOGY>` - Historical/scientific lineage & multi-week traps
4. `<RECURSIVE_THEORY_OF_MIND>` - Crisis habit regression vs counter-trap vs clock
5. `<CROSS_LAYER_VETO_ADJUDICATION>` - Physical/biomechanical/weather veto proof
6. `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: No fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- >= 1,000-WORD DEPTH across sections.
- Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.

Let me think about what the paper actually contains and how to map it to these somewhat abstract section names.

The paper is about reconstructing NBA lineup/possession data from video for 1984-1996, then running RAPM (weighted ridge regression). Key elements:
- Video reconstruction protocol (Section 3)
- Box-score unreliability (Section 2.4) - steal/turnover logical constraint violated
- Weighted ridge regression estimator (Section 4.4)
- Lambda selection via coverage-scaled formula (Eq 12)
- Uncertainty quantification, credible intervals (Section 5)
- Validation: team point differential, win-loss, face validity (Section 6)
- Results: Jordan separation, Pippen defensive finding, Manute Bol, Bulls case study (Sections 8-9)
- Limitations: coverage, single-coder, no spatial info, box-score implications (Section 10)

Now I need to map to the required sections.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. I should derive the RAPM estimator from first principles, trace how video reconstruction feeds into the design matrix, how ridge lambda is selected, how credible intervals are computed, and audit gray zones (single coder, non-random coverage, collinearity between Jordan/Pippen, split possession apportionment, stub seasons). Must be >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations from the paper. I need to cite exact pages and verbatim quotes. Equations: (1) Oliver estimator, (2) steal constraint, (3) inflated possession, (4) corrected possession totals, (5) response variable, (6) model, (7) ridge objective, (8) closed form, (9)-(11) Bayesian posterior, (12) lambda formula, (13)-(21) RAPM extraction, centering, pooling, (22) sigma2, (23) covariance, (24)-(28) interval width/sample size, (29)-(30) team rating regression, etc. Also units: points per 100 possessions, lambda dimensionless, sigma2 in (pts/100 poss)^2. Breakdown regimes: lambda > 0 positive definite, zero-possession filtering, denominator N/2 - 2P - 1 must be positive, stub seasons 1993-94 (20 games) and 1994-95 (10 games) effectively unregularized/unreliable.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage. Trace from Rosenbaum 2004 APM, Sill 2010 ridge, Oliver 2004 possession estimator, Kubatko 2007 0.44 coefficient, Engelmann 2017 SPM/PIPM, Cervone 2016 tracking, Haberstroh 2024 scorekeeper bias, Winston 2009 ratings. Multi-week traps: temporal clustering of footage, game importance bias, opponent distribution, zero-sum pressure in collinear lineups, prior-dominated estimates for fringe players, single-coder reliability not yet assessed (planned future).

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but I can interpret as: how the model handles crises (collinearity, small sample) via ridge shrinkage (habit regression toward zero/league average), counter-traps (mean-centering, coverage-scaled lambda, Bayesian shrinkage in win-loss), and clock (coverage over time, season boundaries, stint length). Also theory of mind: what the coder assumes about substitutions, what the model assumes about player stability across seasons, what the validator assumes about random sampling vs non-random coverage. "Clock" could refer to game clock/stint boundaries and temporal clustering.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Physical: possession definition (control, score, turnover, clock expire), dead-ball substitution rule, split possessions at free throw sequences. Biomechanical: not directly in paper but can discuss player movement not captured (Section 10.1.3 - no intra-possession spatial information, defensive assignment not observed). Weather: NBA is indoor, so weather is not a factor (veto: no weather effects, controlled environment). Cross-layer: video layer (reconstruction), statistical layer (RAPM), validation layer (win-loss, point differential). Veto proof: score reconciliation, lineup consistency, minutes reconciliation, possession plausibility.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning via Verifiable Rewards? Or just verifiable scenarios. I need 3 counterfactual veto scenarios where the model would be vetoed/corrected, with predictions.
1. Stub season 1994-95 (10 games, lambda=45) -> veto player-level inference; prediction: intervals near [-5.7, +5.7], prior-dominated, no inferential content.
2. Jordan-Pippen collinearity (>90% shared stints in 1991-92) -> veto individual defensive attribution; prediction: Pippen DRAPM CI [-5.83, +11.02] straddles zero, cannot resolve Jordan vs Pippen.
3. Home-scorekeeper steal inflation (Atlanta at Chicago 1988) -> veto box-score-based defensive metrics; prediction: Jordan's reported 5 steals vs film 2, phantom steals propagate into BPM/per possession defensive ratings.

Need to ensure no betting lines. The paper mentions win-loss prediction but not betting odds. I must avoid spreads/totals/moneylines/odds. I can discuss win probability and win estimates but not betting odds.

Need >=1000 words total. I'll aim for substantial length in each section.

Need exact [PAGE N] markers. I have pages 1-92 provided. I'll cite them.

Let me draft carefully.

Word count check: I need >=1000 words across sections. I'll write generously.

Let me structure the response.

THINK_TRACE: Start with the identification problem. Raw plus-minus confounded by teammates/opponents. APM frames as multivariate linear regression. OLS fails due to near-rank-deficiency of X because stable rotations. Ridge regression adds L2 penalty. Video reconstruction provides stint data missing before late 1990s. The paper reconstructs 2,179 games, 435,760 possessions, 1,012 player-seasons. Gray zones: single coder (no inter-rater reliability yet), non-random coverage (game importance bias, temporal clustering, opponent distribution), split-possession apportionment (1/2-1/2 baseline vs 1-0 vs 0-1, correlation >0.999 so negligible), collinearity between Jordan and Pippen (off-diagonal posterior covariance large and negative), stub seasons (lambda small, estimates effectively unregularized), residual variance lower than typical (9.53 vs 25-35) due to discrete stint scoring. Audit: the coverage-scaled lambda formula matches cross-validation to within rounding error when correct Gseason used; earlier tabulations used wrong denominator 943 for all seasons causing artifact. Bayesian interpretation: lambda = sigma^2/tau^2, prior variance inversely proportional to data availability. The estimator is posterior mean under hierarchical Gaussian model. Credible intervals omit cross-term in Eq 25 (conservative simplification). Multi-season pooling treats player-season as distinct entity, no stationarity assumption.

SOURCE_OPERATORS_AND_EQUATIONS: List equations with page citations and verbatim quotes.
- Eq (1) Oliver [PAGE 12]: POSS = FGA - OREB + TO + 0.44 * FTA.
- Eq (2) steal constraint [PAGE 14]: STL_team <= TO_live_opponent.
- Eq (3) inflated possession [PAGE 16].
- Eq (4) corrected possession totals [PAGE 16]: Wk = sum tilde(w_ik) - d_k.
- Eq (5) response [PAGE 24]: y_i = 100 * Oscore_i / Oposs_i.
- Eq (6) model [PAGE 25]: epsilon_i | w_i ~ N(0, sigma^2 / w_i).
- Eq (7) objective [PAGE 25].
- Eq (8) solution [PAGE 25]: (X^T W X + lambda I)^{-1} X^T W y.
- Eq (9)-(11) Bayesian [PAGES 25-26].
- Eq (12) lambda [PAGE 26]: lambda = (G_logged / G_season) * 5000.
- Eq (13)-(20) RAPM extraction and centering [PAGES 29-30].
- Eq (21) pooling [PAGE 31].
- Eq (22) sigma2 [PAGE 31].
- Eq (23) covariance [PAGE 32].
- Eq (24)-(28) interval width/sample size [PAGES 32-34].
- Eq (29) predicted team rating [PAGE 36].
- Eq (30) regression [PAGE 36].
- Eq (Bayes win) [PAGE 37]: p_hat = (w+a)/(n+a+b).
Units: points per 100 possessions, lambda dimensionless regularization, sigma in points per 100 possessions, N dimensionless count of stints, P count of player-seasons. Breakdown: lambda must be >0 for positive definiteness; denominator N/2 - 2P -1 >0 for unbiased variance; zero-possession stints excluded; stub seasons 1993-94 (20 games) and 1994-95 (10 games) have lambda 90 and 45, effectively unregularized, estimates unreliable.

RETROCAUSAL_GENEALOGY: Lineage from Rosenbaum (2004) APM, Sill (2010) RAPM ridge, Oliver (2004) possession estimator, Kubatko et al. (2007) 0.44 calibration, Engelmann (2017) SPM/PIPM informative priors, Cervone et al. (2016) spatiotemporal tracking, Haberstroh (2024) scorekeeper testimony, Winston (2009) team ratings. Multi-week traps: coverage expansion over weeks/months changes lambda and interval widths; temporal clustering means early-season estimates may not reflect late-season performance; game importance bias means nationally televised games overrepresented; prior-dominated estimates for fringe players (<500 possessions) cluster around zero; zero-sum pressure compresses teammates of dominant stars (Armstrong, Cartwright negative); collinearity between Jordan and Pippen limits individual defensive attribution; single-coder reliability unquantified until future inter-rater study.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression = ridge shrinkage toward zero/league average when data is scarce (prior-dominated). Counter-trap = mean-centering, coverage-scaled lambda, Bayesian win-loss shrinkage toward 0.500, split-possession robustness check. Clock = stint boundaries at dead-ball substitutions, quarter breaks, overtime; game clock defines possession end; temporal coverage across season; multi-season pooling across 12 seasons. Theory of mind layers: coder infers substitution timing from broadcast; model infers player impact from co-occurrence; validator infers team strength from sampled games; reader infers historical greatness from RAPM. Recursive: the model assumes players' impacts are stable within a season (for single-season) or distinct across seasons (for pooling); the coder assumes logged games are representative though coverage is non-random; the validator assumes win probability in logged games equals unlogged games (MLE) or shrinks to 0.5 (Bayes).

CROSS_LAYER_VETO_ADJUDICATION: Physical layer: possession definition requires control, score, turnover, or clock expiration; substitutions only at dead-ball; split possessions when sub occurs mid-possession (free throws). Biomechanical layer: paper explicitly notes no intra-possession spatial information (Section 10.1.3, [PAGE 49]); defensive assignment not observed; off-ball positioning impact spread across all five defenders; this is a veto on granular defensive attribution but not on stints. Weather layer: indoor arena, no weather effects; veto not applicable (controlled environment). Cross-layer adjudication: video reconstruction layer immune to scorekeeper bias (steal/turnover); statistical layer uses weighted ridge with lambda scaling; validation layer uses score reconciliation, lineup consistency, minutes reconciliation (<2.0 min tolerance), possession plausibility (|Wk - POSSk| > 10 flagged). Veto proof: final score reconciliation excludes unreconcilable games; lineup consistency checked at quarter breaks; minutes derived from game clock readings most reliable. Physical veto: if score cannot be reconciled after re-review, game excluded ([PAGE 18, Section 3.7.5]).

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.
1. Stub season veto: 1994-95 season, G_logged=10, G_season=1107, lambda=45. Veto: any player-level inference from this season alone. Prediction: credible intervals dominated by prior, approx [-5.7, +5.7], no inferential content; estimates effectively unregularized, driven by tiny sample. Verifiable: compare lambda=45 to cross-validated 55.17 (ratio 0.816), note CV unstable on sparse sample ([PAGE 28, Appendix B]).
2. Collinearity veto: 1991-92 Bulls, Jordan and Pippen share 5,644 offensive possessions, >90% of stints. Veto: individual defensive attribution for Pippen in single season. Prediction: Pippen 1991-92 DRAPM = -0.08 with CI [-5.83, +11.02], straddles zero; cannot separate from Jordan's +1.01 defensive RAPM; off-diagonal posterior covariance large negative ([PAGE 46, Section 9.3]).
3. Scorekeeper bias veto: Atlanta at Chicago, Feb 15, 1988. Veto: box-score-based defensive metrics (BPM, EPM) using steal counts for this era. Prediction: official box score records 10 Chicago steals vs film 7; Jordan credited 5 vs film 2 (+3 phantom); Oakley under-credited by 1; violation of Eq (2) STL <= TO_live; phantom steals inflate home team defensive profile and propagate into visiting team possession estimates via Oliver estimator ([PAGES 14-16]).

I need to make sure total word count is over 1000. Each section will be substantial.

I must not mention betting lines. The paper talks about win-loss and MLE/Bayes win estimates but not odds. I'll avoid words like spread, total, moneyline, odds.

Let me write the final response with XML tags exactly as specified.

I need to be careful with verbatim quotes and page citations. I'll quote key phrases.

Let's write.

THINK_TRACE section: I'll derive the math and audit gray zones. >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS: LaTeX heavy, with page cites.

RETROCAUSAL_GENEALOGY: historical lineage and traps.

RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios + predictions.

Let's ensure I use exact [PAGE N] markers. The provided text has markers like [PAGE 1 of 92]. I'll cite as [PAGE 1] or [PAGE 14] etc. The instruction says cite exact [PAGE N] markers. I'll use [PAGE 14] format.

I need to check page numbers from the text:
- Page 1: Abstract
- Page 2: contents start, RAPM framework
- Page 12: Eq (1) Oliver
- Page 14: Eq (2) steal constraint, Table 1
- Page 15: Table 2, implications
- Page 16: Eq (3), Eq (4), Proposition 1
- Page 17: Eq (4) continued? Actually Eq (4) is on page 16. Page 17 has split possession sensitivity.
- Page 18: Quality control, coverage
- Page 24: Eq (5) response
- Page 25: Eq (6), (7), (8)
- Page 26: Eq (9)-(11), Eq (12)
- Page 29: Eq (13)-(15)
- Page 30: Eq (16)-(20)
- Page 31: Eq (21), (22)
- Page 32: Eq (23), (24), (25)
- Page 33: Eq (26), (27), (28)
- Page 36: Eq (29), (30)
- Page 37: Bayesian win estimate
- Page 46: Pippen defensive finding, collinearity
- Page 48: limitations
- Page 49: no spatial info
- Page 50: informative prior
- Page 54: Appendix B code
- Page 56: Table 11 lambda comparison
- Page 58: Table 12 onwards

I'll cite appropriately.

Now let's write the full response.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's central identification problem is that raw plus-minus conflates individual skill with teammate quality, opponent quality, and coaching context. Rosenbaum (2004) addressed this by framing Adjusted Plus-Minus as a multivariate linear regression where each stint—a contiguous interval with fixed ten-man lineups—is an observation, each player is encoded as +1 (offense) or −1 (defense), and the response is net points per possession scaled to 100 possessions. Ordinary least squares fails because NBA rotations are stable, making the design matrix X nearly rank-deficient; many columns are near-linear combinations of others, so OLS is unbiased in expectation but possesses extreme variance. Sill (2010) introduced ridge regression, adding an L2 penalty that shrinks coefficients toward zero and guarantees a unique positive-definite solution for any λ > 0. The hard barrier for historical application is data: the NBA did not systematically record stint-level lineups until electronic play-by-play logging in the late 1990s. This project bridges that gap by manually reconstructing 2,179 regular-season games from broadcast video across 1984–85 through 1995–96, logging 435,760 possessions and 1,012 player-seasons.

The multi-hop derivation proceeds as follows. Video reconstruction yields a stint file with columns Oteam, Dteam, O1–O5, D1–D5, Oposs, Dposs, Oscore, Dscore. Zero-possession stints (Oposs < 1) are filtered out. A separated design matrix X ∈ R^{N×(2P+1)} is constructed: column 0 is an intercept; columns 1–P are +1 offensive indicators; columns P+1–2P are −1 defensive indicators. The response is y_i = 100 · Oscore_i / Oposs_i, offensive points per 100 possessions, weighted by w_i = Oposs_i. The weighted ridge objective minimizes ∑ w_i (y_i − x_i^T β)^2 + λ ||β||_2^2, with closed form β̂_λ = (X^T W X + λ I)^{-1} X^T W Y. Because X^T W X + λ I is positive definite for λ > 0, the estimator is unique regardless of collinearity. Regularization strength is selected via λ = (G_logged / G_season) × 5000, which is monotone in coverage and calibrated so that full-season coverage yields λ = 5000, the standard full-season shrinkage. At 17% coverage, λ ≈ 850, imposing strong shrinkage; at stub-season coverage (10 games in 1994–95), λ = 45, effectively unregularized and therefore unreliable.

Gray-zone audit: (1) Single-coder reliability is unquantified; the quality control pipeline catches internal inconsistencies but cannot detect systematic interpretive bias in ambiguous substitution events ([PAGE 48, Section 10.1.2]). (2) Coverage is non-random: game importance bias, temporal clustering, and opponent distribution mean logged games are not a designed probability sample ([PAGE 21, Section 3.8.4]). (3) Split-possession apportionment (1/2–1/2 baseline vs. 1–0 vs. 0–1) yields cross-convention RAPM correlations exceeding 0.999, so the convention is practically negligible ([PAGE 16, Section 3.6.4]). (4) Collinearity between Michael Jordan and Scottie Pippen—over 90% of stints shared in 1991–92—produces a large negative off-diagonal posterior covariance between their defensive coefficients, preventing reliable individual defensive attribution ([PAGE 46, Section 9.3]). (5) The realized residual standard deviation is σ̂ = 9.53 points per 100 possessions, substantially lower than the 25–35 often assumed for single-season RAPM, because multi-season stints are short and discretely scored (modal 1–3 possessions, spikes at 0, 100, 200 points per 100 possessions) ([PAGE 33, Section 5.4]). (6) Credible intervals omit the cross-covariance term 2Σ_{k1,k2} in Eq. (25), a conservative simplification that slightly widens intervals when cross-covariance is positive ([PAGE 32, Section 5.3]).
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations extracted verbatim with page citations:

Possession estimator (Oliver, 2004): POSS = FGA − OREB + TO + 0.44 · FTA, where FGA is field goal attempts, OREB offensive rebounds, TO turnovers, FTA free throw attempts. The 0.44 coefficient estimates the fraction of free-throw trips that begin a new possession rather than extend an existing one. Units: possessions (dimensionless count). [PAGE 12, Eq. (1); Section 2.3]

Hard logical constraint on steals: STL_team ≤ TO_live,opponent, where TO_live denotes live-ball turnovers only. A steal can only be credited on a live-ball turnover; dead-ball turnovers (offensive fouls, 24-second violations, out-of-bounds, travels) cannot yield steals. This is physical necessity, not convention. [PAGE 14, Eq. (2); Section 2.4]

Inflated possession model: POSS_home = FGA_home − OREB_home + (TO_home + ε_TO) + 0.44 · FTA_home, with ε_TO > 0 representing phantom turnovers. Because every inflated home steal implies an inflated visiting-team turnover, bias propagates to both teams and does not cancel in aggregate. [PAGE 16, Eq. (3); Section 2.4]

Corrected game-level possession total: W_k = ∑_i ˜w_{ik} − d_k, where ˜w_{ik} is the raw tally for team k in stint i (including split possessions), and d_k is the total split possessions for team k. At the stint level, split possessions are apportioned 1/2 to each adjacent stint. Proposition 1 guarantees |W_home − W_away| ≤ 1 (or ≤ 2 if the game ends in a live possession). [PAGE 16, Eq. (4); Section 3.6.3]

Response variable and possession weights: y_i = 100 · Oscore_i / Oposs_i (points per 100 possessions); W = diag(w_1, …, w_N) with w_i = Oposs_i. Weighting ensures longer stints exert proportionally greater influence. [PAGE 24, Eq. (5) and surrounding text; Section 4.3]

Weighted observation model: y = Xβ + ε, ε_i | w_i iid ~ N(0, σ²/w_i), where Var(ε_i) = σ²/w_i reflects reduced per-possession scoring variance as stint length increases. Units of σ²: (points per 100 possessions)². [PAGE 25, Eq. (6); Section 4.4.1]

Penalized objective: β̂_λ = arg min_β [∑_{i=1}^N w_i (y_i − x_i^T β)² + λ ||β||_2²]. Closed form: β̂_λ = (X^T W X + λ I_{2P+1})^{−1} X^T W y. The matrix is positive definite for λ > 0, guaranteeing uniqueness regardless of rank(X). [PAGE 25, Eq. (7)–(8); Section 4.4.2]

Bayesian hierarchy: y_i | β, σ² ~ N(x_i^T β, σ²/w_i); β_k | τ² iid ~ N(0, τ²), k = 0, …, 2P, with λ = σ²/τ². Posterior: β | y, σ² ~ N(β̂_λ, σ²(X^T W X + λ I)^{−1}). The prior places every player’s contribution at zero net contribution absent data, corresponding after mean-centering to league average. [PAGE 25–26, Eq. (9)–(11); Section 4.4.3]

Coverage-scaled regularization: λ = (G_logged / G_season) × 5000. Monotone in coverage; λ → 5000 as G_logged → G_season; λ ≈ 850 at 17% coverage. Bayesian motivation: if σ² is constant, λ ∝ G_logged implies τ² ∝ 1/G_logged, so prior variance shrinks as evidence accumulates. [PAGE 26, Eq. (12); Section 4.5.1]

RAPM extraction: ORAPM_j = ˆβ_off,j − ¯β_off; DRAPM_j = ˆβ_def,j − ¯β_def; RAPM_j = ORAPM_j + DRAPM_j. Means computed over all P players separately for offensive and defensive blocks. Positive DRAPM indicates better-than-average defense under the reported sign convention. [PAGE 30, Eq. (16)–(20); Section 4.7]

Multi-season pooling: player-season pairs are distinct entities; aggregate RAPM computed as possession-weighted average RAPM_j = ∑_s poss_{j,s} · RAPM_{j,s} / ∑_s poss_{j,s}. No within-season stability assumption. [PAGE 31, Eq. (21); Section 4.8]

Residual variance: ˆσ² = [1 / (N/2 − 2P − 1)] (y − Xβ̂_λ)^T W (y − Xβ̂_λ). The denominator treats effective sample size as N/2 (even-indexed rows) minus 2P + 1 estimated parameters minus 1. [PAGE 31, Eq. (22); Section 5.1]

Posterior covariance: Σ_β = ˆσ² (X^T W X + λ I_{2P+1})^{−1}, explicitly computed as a (2P+1) × (2P+1) matrix. For P = 300, this is 601 × 601. [PAGE 32, Eq. (23); Section 5.2]

Variance of total RAPM: Var(RAPM_j) = Σ_{k1,k1} + Σ_{k2,k2} + 2Σ_{k1,k2}, where k1 = idx(j)+1 and k2 = P + idx(j)+1. Implementation uses SE(RAPM_j) = 1.96 · √(Σ_{k1,k1} + Σ_{k2,k2}), omitting the cross-term as a conservative simplification. [PAGE 32, Eq. (24)–(25); Section 5.3]

Approximate interval half-width: h_j ≈ 1.96 · ˆσ · √2 / √(n_j · ˄w + λ), where n_j is stint count and ˄w is mean possessions per stint (3.38 in the aggregate). Drivers: residual variance ˆσ², total logged possessions, and λ as an exposure floor. [PAGE 33, Eq. (27); Section 5.4]

Required possessions for target half-width h*: n_j · ˄w ≥ 2 · (1.96)² · ˆσ² / (h*)² − λ. [PAGE 34, Eq. (28); Section 5.5]

Team-level predicted rating: ˆR_{t,s} = ∑_{j ∈ R_{t,s}} poss_{j,s} · ˆβ_{j,s} / ∑_{j ∈ R_{t,s}} poss_{j,s}, compared to actual net rating. Regression: R_{t,s} = α + γ ˆR_{t,s} + η_{t,s}; well-calibrated model yields ˆγ ≈ 1, ˆα ≈ 0, high R². [PAGE 36, Eq. (29)–(30); Section 6.2]

Bayesian win-loss shrinkage: ˆp_Bayes,t,s = (w + a) / (n + a + b) with a = b = 5, centered at 0.500; ˆW_Bayes = ˆp_Bayes · 82. [PAGE 37; Section 6.3.1]

Breakdown regimes and units: λ must be strictly positive for positive definiteness; the variance denominator N/2 − 2P − 1 must exceed zero (fails if 2P + 1 ≥ N/2); zero-possession stints are excluded pre-regression; stub seasons 1993–94 (20 games, λ = 90) and 1994–95 (10 games, λ = 45) are effectively unregularized and excluded from reliable player-level inference ([PAGE 28, Section 4.5.3]; [PAGE 34, Table 6]). The realized ˆσ = 9.53 points per 100 possessions in the multi-season pool contrasts with 25–35 assumed in single-season work ([PAGE 33, Section 5.4]).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The statistical lineage traces from Rosenbaum (2004), who introduced Adjusted Plus-Minus as a multivariate linear regression controlling for co-occurring teammates and opponents, to Sill (2010), who replaced OLS with ridge regression to tame severe multicollinearity in stable NBA rotations, producing RAPM as the standard framework. Oliver (2004) provided the foundational box-score possession estimator POSS = FGA − OREB + TO + 0.44 · FTA; Kubatko et al. (2007) derived and calibrated the 0.44 coefficient on modern play-by-play data, noting it varies across eras and rule environments. Engelmann (2017) extended the framework with Statistical Plus-Minus, using box-score inputs as informative priors in hierarchical Bayesian RAPM (sometimes termed PIPM). Cervone et al. (2016) demonstrated that spatiotemporal tracking enables finer-grained impact estimation than stint-level data alone, though such data does not exist historically. Haberstroh (2024) documented home-scorekeeper inflation of subjective statistics, including testimony from a former Vancouver Grizzlies scorekeeper about implicit expectations to favor home stars. Winston (2009) applied ratings-based retrospective analysis to historical NBA outcomes but without player-level decomposition.

Multi-week traps emerge across the project’s temporal structure. First, coverage expansion is non-uniform: as games are added week by week over the reconstruction timeline, λ changes according to the coverage-scaled formula, meaning player estimates are not stationary across database versions. Second, temporal clustering of footage means estimates from early-season samples may not generalize to late-season performance if rotations or coaching strategies shift ([PAGE 21, Section 3.8.4]). Third, game-importance bias causes over-representation of nationally televised, high-stakes games; for the Bulls and Lakers, this inflates apparent win rates and distorts collinearity structures ([PAGE 39, Table 7 discussion]). Fourth, prior-dominated estimates for players with fewer than ~500 logged possessions cluster tightly around zero with near-identical intervals of approximately [−5.7, +5.7], carrying no inferential content ([PAGE 35, Section 5.6]). Fifth, zero-sum pressure in collinear lineups compresses teammate estimates: Bulls reserves such as Armstrong and Cartwright receive negative RAPM because Jordan absorbs a massive positive coefficient, not because they were poor players ([PAGE 44, Section 8.2.3]). Sixth, the 1993–94 and 1994–95 stub seasons (20 and 10 games) have λ values of 90 and 45, effectively unregularized, so estimates are driven entirely by tiny samples and should be treated as highly unreliable ([PAGE 28, Section 4.5.3]). Seventh, single-coder reliability remains unquantified; without a second coder independently reconstructing a sample of games, systematic interpretive bias cannot be bounded ([PAGE 48, Section 10.1.2]).
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression refers to the model’s default behavior under information scarcity: ridge shrinkage pulls all coefficients toward the zero-mean Gaussian prior, which after mean-centering corresponds to league-average impact. When a player has limited logged possessions, the likelihood is weak relative to the prior, so the estimate regresses toward zero rather than toward extreme box-score-derived values. This is the crisis habit—under uncertainty, assume average. The counter-trap is the set of corrections that prevent over-reliance on this habit: mean-centering (Eq. 16–19) re-anchors zero to the empirical league average rather than an arbitrary prior; the coverage-scaled λ (Eq. 12) scales regularization inversely with data availability so the prior weakens as evidence accumulates; Bayesian win-loss shrinkage (a = b = 5) pulls extreme sampled win rates toward 0.500 for low-coverage teams; and split-possession robustness checks (1/2–1/2 vs. 1–0 vs. 0–1) confirm that boundary apportionment does not drive results ([PAGE 16, Section 3.6.4]).

The clock operates on three time scales. The possession clock defines stint boundaries: substitutions occur only at dead balls, quarter and overtime boundaries are automatic stint closures, and a possession ends on score, turnover, or clock expiration ([PAGE 12–14, Section 3.4–3.5]). The seasonal clock governs coverage density: λ is a function of G_logged / G_season, so estimates from a 10-game stub season carry a fundamentally different prior-to-data ratio than a 300-game season ([PAGE 26, Eq. 12]). The historical clock spans 1984–85 through 1995–96, with pooling across twelve seasons treating player-season pairs as distinct entities and making no assumption of within-player stability across time ([PAGE 31, Section 4.8]).

Recursive theory-of-mind layers: (1) The coder infers substitution timing from broadcast video and must retroactively correct missed substitutions when visible lineups disagree with the log ([PAGE 14, Section 3.5.4]). (2) The statistical model infers individual impact from co-occurrence patterns, assuming that the design matrix’s collinearity structure is sufficiently diverse to separate players; when Jordan and Pippen share >90% of stints, this assumption breaks down for individual defensive attribution ([PAGE 46, Section 9.3]). (3) The validator assumes the win probability observed in logged games equals that in unlogged games (MLE) or shrinks toward 0.500 (Bayes), implicitly treating coverage as ignorable even though Section 3.8.4 documents non-random selection effects ([PAGE 37, Section 6.3]; [PAGE 21, Section 3.8.4]). (4) The reader infers historical greatness from RAPM rankings, risking the ecological fallacy of treating a model-specific, collinearity-constrained estimate as a context-free truth about player value. The recursion closes when the model’s own uncertainty quantification (credible intervals) is used to calibrate how much trust to place in its inferences under each coverage regime.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The possession definition requires continuous ball control ending on score, turnover, or clock expiration; an and-one counts as one possession; technical foul free throws constitute no possession ([PAGE 12, Definition 1]). Substitutions are legal only at dead-ball situations, so stint boundaries are drawn at dead-ball substitutions, quarter breaks, and overtime starts ([PAGE 13, Section 3.5]). Split possessions arise when a substitution coincides with a dead ball internal to a possession (most commonly free-throw sequences); both the closing and opening stints receive 1/2 weight so the corrected game-level total satisfies |W_home − W_away| ≤ 1 ([PAGE 15–16, Definition 2 and Proposition 1]). These are physical vetoes on what can count as a distinct observation.

Biomechanical layer: The reconstruction records who was on court but not what they did—no positioning, movement, or matchup assignments ([PAGE 49, Section 10.1.3]). Defensive RAPM attributes the net impact of the entire defensive lineup to individual defenders, with no direct way to isolate off-ball positioning effects (e.g., a shot-blocker deterring drives). This is a biomechanical veto on granular defensive attribution: the model cannot resolve whether a defensive suppression effect belongs to the rim protector, the help-side defender, or the system. It does not veto stint-level offensive impact estimation, because offensive possession outcomes are directly observed from the score.

Weather layer: NBA games are played in climate-controlled indoor arenas, so weather is not a confounding variable; no weather veto is applicable or required. The controlled environment actually strengthens the video reconstruction because broadcast footage quality, while variable across VHS-era archives, is not compromised by precipitation, wind, or temperature.

Cross-layer adjudication: The video layer is immune to scorekeeper bias because possession counts and points come directly from the broadcast final score of each stint, not from steal, block, or rebound tallies ([PAGE 8, Section 2.4]). The statistical layer applies weighted ridge regression with λ selected by coverage-scaled formula, validated against cross-validation to within rounding error when correct season-specific schedule sizes are used ([PAGE 56, Appendix B]). The quality control pipeline enforces four vetoes: (i) score reconciliation—stint-level points must sum to the official final score or the game is re-reviewed and potentially excluded ([PAGE 17, Section 3.7.1]); (ii) lineup consistency—the running active lineup must match visible broadcast players at quarter breaks and game end ([PAGE 17, Section 3.7.2]); (iii) minutes reconciliation—implied minutes must agree with box-score minutes within 2.0 minutes ([PAGE 17–18, Section 3.7.3]); (iv) possession plausibility—corrected possession totals are compared to the Oliver estimate, with discrepancies > 10 possessions flagged for manual review but not used as hard exclusion because box scores themselves are unreliable ([PAGE 18, Section 3.7.4]). The hard exclusion criteria are unreconcilable score, irresolvable lineup discrepancy, or insufficient footage quality ([PAGE 18, Section 3.7.5]). This chain of vetoes ensures that no game enters the RAPM regression unless it survives physical, scorekeeping, and lineup-consistency checks.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with predictions:

Scenario 1 — Stub-season inference veto. Season: 1994–95. G_logged = 10, G_season = 1,107, coverage = 0.9%, λ = 45 ([PAGE 28, Table 3; PAGE 35, Table 6]). Veto: any player-level RAPM inference from this season alone is invalid. Prediction: estimates are effectively unregularized because λ is too small to stabilize the tiny sample; credible intervals collapse toward the prior range of approximately [−5.7, +5.7] points per 100 possessions, and the posterior is prior-dominated with no inferential content about individual quality ([PAGE 35, Section 5.6]). Cross-validated λ* = 55.17 gives ratio λ_CS/λ*_CV = 0.816, the only meaningful exception to exact agreement, and Appendix B notes CV is unstable on this sparse sample ([PAGE 56, Table 11]). Verification: re-run the ridge estimator with λ increased to the full-season benchmark of 5,000; player rankings should collapse toward zero and interval widths should widen substantially, confirming the original estimates were noise.

Scenario 2 — Collinearity veto for individual defensive attribution. Season: 1991–92 Chicago Bulls. Jordan and Pippen share 5,644 offensive possessions, over 90% of all stints ([PAGE 46, Section 9.3]). Veto: the model cannot reliably separate Pippen’s individual defensive contribution from Jordan’s in this single-season regression. Prediction: Pippen’s defensive RAPM is −0.08 with a 95% credible interval of [−5.83, +11.02], which straddles zero and is consistent with any defensively positive or negative outcome ([PAGE 46, Section 9.1, Table 9]). The off-diagonal posterior covariance Σ_{k_def,Pip, k_def,Jor} is large and negative relative to the diagonal variances ([PAGE 44–46, Sections 8.2.3 and 9.3]). Verification: hold out all Chicago Bulls stints from the design matrix and re-estimate; Pippen’s defensive coefficient should shift unpredictably relative to Jordan’s, demonstrating non-identification. Only as coverage increases and the collinearity structure diversifies across opponent contexts will Pippen’s defensive estimate stabilize ([PAGE 46, Section 9.3]).

Scenario 3 — Scorekeeper bias veto on box-score defensive metrics. Game: Atlanta at Chicago, February 15, 1988 ([PAGE 14–15, Table 1–2]). Veto: box-score-based defensive metrics (BPM, Estimated Plus-Minus, Win Shares) that use steal counts are invalid for this game and, by extension, unreliable for the era. Prediction: film reconstruction records exactly 7 Chicago steals (Jordan 2, Oakley 4, Pippen 1), but the official box score records 10 steals, crediting Jordan with 5 instead of 2 (+3 phantom steals) and under-crediting Oakley by 1 ([PAGE 15, Table 2]). This violates the hard constraint STL ≤ TO_live because Atlanta committed 3 dead-ball turnovers that could not yield steals ([PAGE 14–15, Eq. 2 and Table 1]). The inflated steal total propagates into defensive ratings and into visiting-team possession estimates via the Oliver estimator, where ε_TO > 0 biases both home and away possession counts upward ([PAGE 16, Eq. 3]). Verification: recompute a box-score defensive metric using film-verified steals versus official steals; Jordan’s defensive rating should drop measurably, and the team’s estimated possession total should shift downward by the number of phantom turnovers, confirming the bias is directional and non-canceling ([PAGE 16, Section 2.4]).
</RLVR_COUNTERFACTUAL_VETOES>