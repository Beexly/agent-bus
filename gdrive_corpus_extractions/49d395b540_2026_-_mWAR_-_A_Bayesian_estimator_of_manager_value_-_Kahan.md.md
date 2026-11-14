---
source: "2026 - mWAR - A Bayesian estimator of manager value - Kahan.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Journal of Sports Analytics/2026"
pages: 30
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6007
---

<NATIVE_REASONING>
The user wants me to analyze a source paper about mWAR (manager WAR) using a very specific format with strict invariants. Let me break down what's needed:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI units, information/probability units, assumptions, exact singularity/breakdown regimes.
3. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes. Wait, the user said "PAGES: 30" but the source text doesn't have page markers like [PAGE 1], [PAGE 2]. It's extracted from HTML via r.jina.ai. I need to be careful about page citations. The text has sections but no explicit page numbers. I should note that page markers aren't available in the extracted text, or I can refer to sections. But the instruction says "When source pages are provided, cite exact [PAGE N] markers". Since no page markers are in the text, I should probably use section headers or note the absence. Actually, looking carefully, the user provided "PAGES: 30" but the text doesn't contain [PAGE N] markers. I should probably cite sections or note that explicit page numbers are unavailable due to text extraction from HTML. However, to comply strictly, I might need to infer page ranges or just use section references. I'll cite section headers where appropriate and note that page markers were not present in the extracted source.

4. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Total must be >= 1000 words across these sections.

Let me analyze the paper content:

Key points:
- Sample: 512 managers, 1901-2025, excluding stints of 15 games or fewer.
- Data from Retrosheet.
- Model (1): GLM binomial logit. Outcome w_it is probability manager i in season t wins a game based on team winning percentage p_it over g_it games. Predictor 1: β1 zWPG (season-standardized team WAR per game). Predictor 2: u_i manager's career marginal impact on probability of winning after WAR partialed out.
- Simulated null: parametric bootstrap, 20,000 replicate manager careers. Model estimated without manager fixed-effect u_i. New win totals drawn from binomial distribution pegged to WAR-per-game-estimated winning percentage. Full model refit to each simulated set.
- Results: 57 of 512 (~11%) met or exceeded |z| = 1.96. Simulated null average had 26 values at or above |z| = 1.96. Max in any replication was 49. None had 57. Probability ~1 in 45 million.
- FDR: 0.31 for tail regions |z| ≥ 1.96, indicating 69% genuine non-nulls.
- Model (2): Hierarchical Bayesian variant. u_i as second-level random intercept.
- Priors: N(0, 2^2) for standardized predictors and population intercept. Half-normal SD for manager-level random intercepts.
- MCMC: 6 chains, 1500 warmup, 2500 post-warmup each = 15,000 posterior draws total. Split-R < 1.01, ESS > 4900, MC-SE ≤ 0.0001.
- Table 1: beta0 = -0.01 (0.005), beta_zwpg = 0.30 (0.004), τ (SD_u) = 0.06 (0.005). τ equates to SD of 2.4 wins per 162 games. One SD of zWPG = ~0.074 increase in winning percentage of .500 team.
- Posterior estimates: mw162 (manager wins above replacement per 162 games). Prior: mean 0, SD τ. Data: MLE u_i estimates before regularization. Posterior combines prior and data.
- Table 2: Best/worst mw162. John McGraw 6.4, etc. 62% of sample between -1.0 and 1.0. 33% between -0.5 and 0.4. |mw162| ≥ 3 occurs in < 3.5% of sample. McGraw's 6.4 is 4.7 SDs from mean.
- Explanatory power: WAR alone R^2 = 0.83 (83% variance). WAR + mWAR R^2 = 0.87. Increment is ~24% of variance left over after WAR. RMSE reduced by 0.004, meaning estimated total wins about 0.65 per team closer in 162-game season.
- ROPE: consequence threshold ± 0.012 marginal-win probability = .488 and .512 for .500 team, or 2 wins/losses in 162 games. mw162 between -2 and 2 lumped as average/replacement.
- Convergence: mw162 usually converges within 900 games (~5.5 modern seasons). Median games to recognize |mw162| ≥ 2 was 522 games (~3.2 modern seasons).
- Estimator_p: provisional season-level estimator. Assigns managers mean manager-attributable share of difference between actual and expected wins. Expected winning percentage computed using zWPG. mw162_p takes ~24% of residual under manager-free player-WAR model and imputes to manager. Example: 5 more wins than expected -> manager credited with 1.2 wins. Kendall's W = 0.68 for 2024-2025 agreement.
- Calibration: asymmetric error costs. Type II errors 2x more costly than Type I near thresholds. Underestimating true mw162 ≥ 2 is 2x more costly than overestimating. Same for ≤ -2.
- Population vs individual: Only 69 managers (~13%) have career |mw162| > 2. But population-level expected number meeting |mw162| ≥ 2 is 206 (103 > 2, 103 < -2), over 40% of sample.
- Surprises: Sparky Anderson 0.8 (118th), Earl Weaver 0.2 (194th). Cecil Cooper 2.7 (13th), Steve O'Neill 2.9 (10th).

Now I need to structure this into the required XML sections with proper depth.

Important constraints:
- No betting lines. I notice the paper mentions "gamblers" and "prognosticators" but I must not mention spreads, totals, moneylines, or odds. I can mention decision-making under asymmetric loss functions without betting terminology.
- No toy equations. Must use formal LaTeX. I should write out the actual models from the paper:
  - Model (1): GLM binomial logit: logit(p_it) = β_0 + β_1 zWPG_it + u_i + ε? Actually the text says outcome w_it is probability... first predictor β1 zWPG, second fixed-effect u_i. I need to reconstruct carefully.
  - Model (2): Hierarchical Bayesian variant with u_i as second-level random intercept.
  - Priors: N(0, 2^2), half-normal for τ.
  - Posterior: combination of prior N(0, τ^2) and data likelihood.
  - mw162 transformation: impact on winning percentage converted to wins per 162 games. Δwins = 162 * Δp? Actually if marginal impact on probability is δ, then wins per 162 = 162 * δ? The paper says τ = 0.06 equates to SD of 2.4 wins per 162 games. 0.06 * 162 = 9.72, not 2.4. Wait, maybe it's probability scale. Let me think. If τ = 0.06 on probability scale, then 162 * 0.06 = 9.72 wins. But paper says 2.4 wins. Hmm. Maybe τ is on logit scale? Or maybe the relationship isn't linear. Actually, looking at beta_zwpg = 0.30 and one SD equates to ~0.074 increase in winning percentage. So coefficients might be on logit scale but interpreted as probability changes near .500. At p=0.5, derivative of logit is 4 (since dp/dη = p(1-p) = 0.25, so dη/dp = 4). So a logit coefficient of 0.06 would correspond to 0.06 * 0.25 = 0.015 probability change? Then 162 * 0.015 = 2.43 wins. Yes! That matches τ = 0.06 -> 2.4 wins per 162. So τ is on logit scale (or the linear predictor scale), and near p=0.5, Δp ≈ Δη * 0.25, so Δwins ≈ 162 * 0.25 * Δη = 40.5 * Δη. For Δη = 0.06, 40.5 * 0.06 = 2.43. Good.

  I should present this carefully as formal LaTeX with units.

- Page citations: Since no explicit [PAGE N] markers exist in the extracted text, I should note that. But the user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since pages aren't provided as markers, I will cite section headers and note absence of page breaks. I can use [SECTION: Introduction] etc. Or I can say [PAGE N/A - HTML extraction]. I think it's safer to reference section titles and mention that page numbers were not available in the text extraction. I'll include verbatim quotes where relevant.

Let me draft each section.

<THINK_TRACE> (>=400 words)
- Deep multi-hop derivation: Start from the validity problem (WAR as benchmark), move through simulated null, hierarchical Bayes, posterior shrinkage, ROPE, asymmetric loss function. Audit gray zones: endogeneity between manager quality and player WAR (managers "manage through talent"), conservative bias, sample exclusion (15 games or fewer), WAR system choice (Baseball Reference vs FanGraphs), stability of R^2 over eras, convergence time (900 games), provisional estimator reliability (Kendall's W = 0.68), FDR interpretation (0.31 tail FDR), population vs individual inference gap (13% vs 40%), asymmetric loss calibration (2x cost ratio), surprising rankings (Sparky Anderson low, Cecil Cooper high).
- Multi-hop: If manager deploys players well, player WAR increases, so controlling for WAR absorbs some manager effect -> conservative bias. Therefore observed signal is lower bound. The simulated null controls for career length and team quality clustering. Hierarchical Bayes shrinks extreme MLE estimates toward zero, especially for short careers. The ROPE of ±2 wins defines practical equivalence. The asymmetric loss function acknowledges tournament structure (postseason thresholds create nonlinear payoffs). Gray zone: the paper admits estimates are "evidence" not "truth," provisional, meta-Bayesian updating required.

<SOURCE_OPERATORS_AND_EQUATIONS>
- Formal LaTeX equations.
  - Model 1 (GLM binomial logit): 
    \[
    \operatorname{logit}(p_{it}) = \beta_0 + \beta_1 \, \text{zWPG}_{it} + u_i
    \]
    where \(w_{it} \sim \text{Binomial}(g_{it}, p_{it})\), \(u_i\) is manager fixed effect.
    Wait, the text says outcome variable w_it is the probability... Actually it says "The outcome variable, w it, is the probability that manager i in season t will win a game based on his team's winning percentage, p it, over the observed number of games, g it". This is slightly garbled. I'll present it as: wins \(y_{it} \sim \text{Binomial}(g_{it}, p_{it})\), \(\text{logit}(p_{it}) = \beta_0 + \beta_1 zWPG_{it} + u_i\).
  - Model 2: Hierarchical Bayesian.
    \[
    u_i \sim \mathcal{N}(0, \tau^2), \quad \tau \sim \text{Half-Normal}(0, \sigma_\tau)
    \]
    \[
    \beta_k \sim \mathcal{N}(0, 2^2)
    \]
  - Posterior: prior \(\theta_i \sim \mathcal{N}(0, \tau^2)\), likelihood from data \(D_i\), posterior \(p(\theta_i | D_i) \propto p(D_i | \theta_i) \mathcal{N}(\theta_i | 0, \tau^2)\). MAP estimate.
  - mw162 conversion: near \(p=0.5\), \(\Delta p \approx 0.25 \, \Delta \eta\) (logit derivative), so \(\text{mw162} = 162 \times 0.25 \times \theta_i = 40.5 \, \theta_i\) approximately. Check: τ = 0.06 -> 40.5 * 0.06 = 2.43 wins. Matches paper's 2.4.
  - R^2: WAR alone 0.83; WAR + mWAR 0.87; incremental explained variance of residual = (0.87 - 0.83)/(1 - 0.83) = 0.04/0.17 ≈ 0.235 ≈ 24%. RMSE reduction 0.004 in winning percentage -> 0.004 * 162 = 0.648 ≈ 0.65 wins per team per season.
  - Estimator_p: \( \text{mw162}_p = 0.24 \times (W_{\text{actual}} - W_{\text{expected}}) \) pro-rated? Actually text: "approximately 24% of what team-performance variables fail to explain is... the team manager's doing." Example: 5 more wins -> 1.2 wins credited. So \( \text{mw162}_p = 0.24 \times \Delta W_{\text{residual}} \).
  - Units: wins (dimensionless count), winning probability (dimensionless [0,1]), logit (dimensionless), τ (logit SD), games (count).
  - Breakdown/singularity: small samples (g_it < 15 excluded), convergence requires ~900 games, partial seasons pro-rated, endogeneity bias toward null, ERA/fielding percentage invalidity analogs, Pythagorean residual randomness not managerial.
  - Page citations: note absent; cite [SECTION: Overview of sample, methods, and analytical strategy], [SECTION: Data analyses], etc.

<RETROCAUSAL_GENEALOGY>
- Historical lineage: James (1983) Pythagorean Expectation; James (1997) Guide to Baseball Managers; Kahn (1993), Porter and Scully (1982), Singell (1993) controlling for team quality; Hoppes (1984), Horowitz (1994), Paul et al. (2016) Pythagorean residuals; Schwarz (2004) history of statistics; Brill and Wyner (2024), Smith (2024) WAR; Gelman and Hill (2007) hierarchical Bayes; Efron (2008, 2012), Storey (2003) FDR/simulated null; Kruschke (2018) ROPE; Berger (1985) decision theory loss; Frank and Cook (1996) winner-take-all tournament; Jenter and Lewellen (2021) CEO retention asymmetry.
- Multi-week traps: Convergence time (900 games / 5.5 seasons) means early-season or short-tenure judgments are unstable. Provisional Estimator_p can mislead if used beyond 2-3 seasons. FDR of 0.31 means 31% of tail exceedances could still be false discoveries. Manager effects are era-independent but sample spans 1901-2025 with changing run environments, bullpen usage, analytics adoption.

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression: Front offices tend to fire managers after bad streaks (regression to mean), mistaking random variation for managerial failure. The paper notes holding onto poor manager is costly, prematurely replacing average manager is low cost (substitute one average for another). Asymmetric loss: risk-averse toward losses (fire poor quickly), risk-preferring toward wins (stick with high-upside manager).
- Counter-trap: The mWAR Estimator's Bayesian shrinkage penalizes small-sample extremes, preventing overreaction to early crises. However, the calibrated loss function can push managers across thresholds, potentially inducing premature hiring/firing if the 2x cost ratio is mis-specified.
- Clock: Estimator stabilizes within 900 games (~5.5 seasons); median detection of |mw162| ≥ 2 at 522 games (~3.2 seasons). Decision window must respect this clock; acting before 522 games on individual estimates risks Type S/M errors. Population-level inference (40% outside ROPE) is more confident than individual-level (13% outside ROPE).

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical/biomechanical: Baseball outcomes determined by run scoring/prevention. Manager does not physically throw or hit; effect is strategic deployment (lineup, pitching changes, defense shifts). This is a coaching/decision layer, not biomechanical. Weather: not directly addressed in paper, but WAR and team records incorporate all environmental variance; manager effect is residual after WAR. Veto: If weather or park effects are correlated with manager assignment (e.g., manager always in hitter-friendly park), team WAR should capture player performance in that context, but park-adjusted WAR? The paper uses Baseball Reference WAR; if not park-adjusted properly, omitted variable bias. However, WAR accounts for context to some degree. Biomechanical veto: manager cannot alter player physiology; only deployment. So any estimated effect above physical limits of player talent is vetoed. The paper's conservative bias (managers manage through talent) means estimates are lower bounds; no veto needed for upper physical bound because effect is small (±2 wins/162).
- Weather veto: Since outcome is winning percentage and predictor is team WAR (aggregate player skill), weather variance is absorbed into residuals or team WAR; manager-specific weather strategy (e.g., using groundball pitchers in windy parks) would be part of manager skill but partially confounded with player WAR if pitchers' WAR reflects park. This is a gray zone, not a hard veto.

<RLVR_COUNTERFACTUAL_VETOES>
- Need 3 verifiable RLVR (Reinforcement Learning from Verifiable Rewards?) counterfactual veto scenarios + predictions. This seems to be a framework where we propose scenarios where the model's predictions can be vetoed or tested.
  1. Scenario: A manager with |mw162| < 2 (inside ROPE) inherits a team with significantly improved player WAR due to front-office acquisitions. Prediction: The team's win increase should be fully explained by ΔWAR; residual manager effect should remain near zero. If observed wins exceed WAR prediction by >2 wins, veto the "average manager" classification for that season.
  2. Scenario: Two managers with identical team WAR and similar rosters in consecutive seasons; one has mw162 = +4.0, the other mw162 = -4.0. Prediction: The team under +4.0 manager should win ~8 more games per 162 than WAR alone predicts relative to the -4.0 manager. If the actual differential is <2 wins, veto the magnitude of the posterior estimate.
  3. Scenario: Manager crosses the |mw162| = 2 threshold only after the asymmetric loss calibration (2x cost) but not under default MSE. Prediction: In the subsequent season, if the manager is retained/fired based on calibrated score, team performance should align with the calibrated direction (e.g., retained "high upside" manager delivers ≥ +2 wins; fired "poor" manager's replacement performs no better). If calibrated threshold crossing does not predict out-of-sample performance better than uncalibrated MAP, veto the loss-function adjustment.
- Each scenario needs verifiable predictions.

Now I need to write this all out with >= 1000 words total across sections. The THINK_TRACE alone needs >= 400 words.

Let me ensure no betting language. Avoid "odds", "spread", "moneyline", "total". When discussing gamblers/prognosticators, refer to them as "decision-makers with financial stakes" or similar. The paper mentions gamblers but I can refer to them without betting lines.

Word count plan:
- THINK_TRACE: ~450 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~350 words
- RETROCAUSAL_GENEALOGY: ~250 words
- RECURSIVE_THEORY_OF_MIND: ~250 words
- CROSS_LAYER_VETO_ADJUDICATION: ~200 words
- RLVR_COUNTERFACTUAL_VETOES: ~200 words
Total ~1700 words. Good.

I need to include exact verbatim quotes where possible and cite sections since page markers absent.

Let me start writing.

For page citations: The text doesn't have [PAGE N]. I will state: "[PAGE MARKERS NOT PRESENT IN EXTRACTED SOURCE; section references used.]" and then cite sections.

Let me write carefully.

THINK_TRACE content:
- Multi-hop derivation: The paper constructs validity by elimination. Previous metrics (career wins, winning percentage) conflate manager with player quality and front-office assembly. WAR explains 80-85% (or 83% specifically) of team record variance, so using aggregate player WAR as benchmark largely vanquishes omitted-variable bias. However, endogeneity: managers manage through talent, so good deployment inflates player WAR, absorbing manager effect into the control variable, biasing toward null (conservative).
- Step 1: GLM binomial logit with fixed effect u_i. Simulated null via parametric bootstrap: 20,000 replicate careers, wins drawn from Binomial(g_it, p_hat_WAR). Full model refit. Observed 57 managers exceed |z|>=1.96; null max 49; p ~ 1/45 million. FDR = 0.31 tail -> 69% genuine non-nulls.
- Step 2: Hierarchical Bayes. u_i ~ N(0, τ^2). Priors N(0, 2^2), half-normal τ. MCMC 6 chains, 1500 warmup + 2500 post-warmup = 15k draws. Diagnostics: split-R < 1.01, ESS > 4900, MC-SE <= 0.0001.
- Posterior shrinkage: Prior N(0, τ^2) combined with MLE data. Long careers retain 65-70% of data score; many shrunk 50%+. Re-ranking occurs.
- mw162: τ=0.06 logit SD -> 2.4 wins/162. Near p=0.5, Δwins ≈ 162 * 0.25 * Δlogit = 40.5 * Δlogit.
- ROPE: ±0.012 probability = ±2 wins/162. 62% of sample between -1 and 1 mw162.
- Explanatory: R^2 0.83 -> 0.87; incremental 24% of residual variance; RMSE down 0.004 -> 0.65 wins/team/season.
- Convergence: 900 games (~5.5 seasons) for stability; median 522 games (~3.2 seasons) to detect |mw162|>=2.
- Estimator_p: provisional season-level, attributes 24% of residual to manager. Kendall's W = 0.68 across 2024-2025.
- Asymmetric loss: Type II error 2x cost of Type I near ±2 thresholds. Population vs individual gap: 13% of individuals outside ROPE, but ~40% of population expected outside.
- Gray zones: 15-game exclusion truncates short careers; Baseball Reference WAR choice; era heterogeneity (1901-2025); simulated null assumes binomial conditional on WAR, may not capture non-i.i.d. clustering; "truth" is provisional, meta-Bayesian.

I'll write this out in full prose.

SOURCE_OPERATORS_AND_EQUATIONS:
List equations with LaTeX.
Equation 1: Model (1) likelihood and linear predictor.
Equation 2: Model (2) hierarchical prior.
Equation 3: Prior specification.
Equation 4: Posterior / Bayes.
Equation 5: mw162 conversion.
Equation 6: R^2 increment and RMSE conversion.
Equation 7: Estimator_p attribution.
Equation 8: Asymmetric loss function structure (qualitative).
Include units and breakdown regimes.
Cite sections.

RETROCAUSAL_GENEALOGY:
Lineage from James Pythagorean, James manager guide, Kahn/Porter-Scully/Singell, to modern WAR-based approach. Mention Gelman & Hill, Efron, Storey, Kruschke, Berger, Frank & Cook, Jenter & Lewellen. Multi-week traps: convergence clock, short-tenure noise, FDR 31%, era changes.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: GMs fire after bad streaks; regression to mean means replacement likely average. Asymmetric loss: fire poor quickly, stick with upside. Counter-trap: Bayesian shrinkage prevents overreaction; calibrated loss may induce false crossings. Clock: 522 games median detection, 900 games stability.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: manager doesn't change player biomechanics; effect via deployment. Veto if estimated effect implies physical changes beyond talent. Weather: absorbed in WAR/residuals; park effects confounded if WAR not park adjusted. Since Baseball Reference WAR used, park adjustments partially included. No hard veto but gray zone for deployment-weather interactions.

RLVR_COUNTERFACTUAL_VETOES:
3 scenarios as outlined.

Let me write the final output now. I'll make sure word counts are sufficient.

One thing: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes."

So I must not invent equations not in the paper. I can reconstruct the ones described, but label them as from the paper. I should not make up a "Force / Fatigue" ratio. I'll stick to the paper's described models.

Let's write.

I need to be careful about verbatim quotes. I'll include short quotes with section references since pages are absent.

Let's begin drafting.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s core inference proceeds by validity-through-elimination. Traditional manager metrics (career wins, winning percentage) conflate managerial skill with player quality and front-office roster construction, reproducing the same invalidity defects that plagued pre-analytics player statistics such as ERA and batting average [SECTION: Background: The manager-measurement problem]. Kahan’s solution is to condition on aggregate player WAR, which the text reports explains between 0.80 and 0.85 of team-record variance across history, and specifically 0.83 (83%) in the AL/NL sample used here [SECTION: Overview of sample, methods, and analytical strategy; SECTION: Explanatory and predictive power]. Because WAR already captures front-office acquisition quality and player performance, residual team winning percentage after WAR is, in principle, a cleaner laboratory for isolating managerial influence.

A critical gray zone is endogeneity in the direction of conservative bias. The paper explicitly acknowledges that managers “manage through the talent” [SECTION: Value benchmark: Team WAR], meaning that a skilled manager who optimally deploys players can inflate those players’ WARs. Since WAR is entered as a control, part of the manager’s true effect is absorbed into the predictor, biasing the estimated manager coefficient toward zero. Thus, any detected signal is a lower bound on true managerial value, not an inflated artifact.

Step 1 confirms the signal using a GLM binomial logit [SECTION: Data analyses]. The outcome is a manager-season win probability conditioned on team games managed; the linear predictor contains season-standardized team WAR per game (zWPG) and a manager fixed effect u_i. A parametric bootstrap constructs a realistic simulated null: the manager fixed effect is removed, 20,000 phantom careers are generated by drawing wins from a binomial distribution pegged to each team’s WAR-implied win probability, and the full model is refit to each replicate. The observed sample produced 57 managers with |z| ≥ 1.96, whereas the null distribution averaged 26 exceedances and never exceeded 49 in any single replication—an empirical tail probability of roughly 1 in 45 million [SECTION: Step 1: Confirming a signal]. The resulting tail-region False Discovery Rate is 0.31, implying approximately 69% of observed exceedances are genuine non-nulls [SECTION: Step 1: Confirming a signal]. This addresses heterogeneous career lengths by comparing each manager only to his own zombie stand-ins, avoiding a “one size fits all” standard error.

Step 2 forms the hierarchical Bayesian estimator [SECTION: Step two: Formation of an estimator]. Manager effects u_i are modeled as second-level random intercepts drawn from N(0, τ²), with weakly informative priors N(0, 2²) on standardized fixed effects and a half-normal prior on τ. The MCMC specification ran 6 chains with 1,500 warmup and 2,500 post-warmup draws (15,000 total posterior draws); diagnostics report split-R < 1.01, effective sample sizes > 4,900, and Monte-Carlo standard errors ≤ 0.0001 [SECTION: Model performance]. Posterior estimates combine a zero-centered prior N(0, τ²) with manager-level MLE data, producing shrinkage. Long-career managers retain roughly 65–70% of their raw data scores, while many short-career estimates are shrunk by 50% or more, causing substantial re-ranking relative to naive MLE [SECTION: Posterior estimates].

The estimand mw162 translates latent logit-scale skill into wins per 162 games for a .500 team. The reported τ = 0.06 corresponds to a standard deviation of 2.4 wins per 162 games [SECTION: Model performance]. The practical equivalence region (ROPE) is set at ±0.012 marginal win probability, equivalent to .488/.512 for a .500 team or ±2 wins per 162 games [SECTION: Isolating consequential differences]. About 62% of the 512-manager sample falls between mw162 = −1.0 and 1.0; |mw162| ≥ 3 occurs in under 3.5% of the sample [SECTION: Posterior estimates].

External validation comes from incremental explanatory power: regressing winning percentage on team WAR alone yields R² = 0.83; adding manager mWAR scores raises R² to 0.87 [SECTION: Explanatory and predictive power]. That 0.04 gain is approximately 24% of the residual variance left unexplained by WAR. The associated RMSE reduction is 0.004 in winning percentage, or roughly 0.65 wins per team per 162-game season [SECTION: Explanatory and predictive power].

Temporal and decision-theoretic gray zones remain. The estimator’s latent skill estimate typically converges only after ~900 games (~5.5 modern seasons), though the median time to detect |mw162| ≥ 2 is 522 games (~3.2 seasons) [SECTION: mWAR Estimator_p]. A provisional season-level estimator (Estimator_p) attributes approximately 24% of the WAR-residual win difference to the manager; across 2024–2025 the season rankings show Kendall’s W = 0.68 [SECTION: mWAR Estimator_p]. There is a population-versus-individual inference gap: only 69 managers (~13%) individually clear |mw162| > 2, yet the population-level posterior implies ~206 managers (~40%) lie outside that region [SECTION: Calibration for decision-theory loss functions]. To reconcile this, the paper proposes calibrating the Bayesian loss function so that Type II errors near the ±2 threshold cost twice as much as Type I errors, reflecting asymmetric MLB tournament economics [SECTION: Calibration for decision-theory loss functions]. All results are explicitly framed as provisional evidence rather than truth, requiring meta-Bayesian updating as new data arrive [SECTION: But are the estimator results really true?].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX equations, units, assumptions, and breakdown regimes. Page markers are not present in the HTML-extracted source; section references are used instead.

Model (1): GLM binomial logit [SECTION: Step 1: Confirming a signal].
Let \(y_{it}\) be wins for manager \(i\) in season \(t\) over \(g_{it}\) games, and \(p_{it}\) the implied win probability.
\[
y_{it} \sim \operatorname{Binomial}(g_{it}, p_{it}), \qquad
\operatorname{logit}(p_{it}) = \beta_0 + \beta_1\,\mathrm{zWPG}_{it} + u_i .
\]
Units: \(p_{it}\) is a dimensionless probability in \([0,1]\); \(\mathrm{zWPG}_{it}\) is season-standardized team WAR per game (dimensionless, era-comparable); \(u_i\) is the manager fixed effect on the logit scale; \(g_{it}\) is a count of games. Singularity/breakdown: managers with \(\le 15\) career games were excluded from the sample because short stints add little evidentiary value and complicate model fitting [SECTION: Sample].

Realistic simulated null [SECTION: Step 1: Confirming a signal].
The null model drops \(u_i\). For each of 20,000 replicates, synthetic wins are drawn as
\[
y^{\star}_{it} \sim \operatorname{Binomial}\!\left(g_{it},\ \hat p^{\mathrm{WAR}}_{it}\right),
\]
where \(\hat p^{\mathrm{WAR}}_{it}\) is the win probability implied by team WAR per game under an average manager. The full model with \(u_i\) restored is refit to each synthetic career set. Breakdown: the null assumes wins are conditionally binomial given WAR and does not model non-i.i.d. clustering beyond career length and team quality; robust standard-error strategies cannot correct specification errors from non-i.i.d. observations [SECTION: Step 1: Confirming a signal].

Model (2): Hierarchical Bayesian mWAR Estimator [SECTION: Step two: Formation of an estimator].
\[
u_i \sim \mathcal{N}(0,\tau^2), \qquad \tau \sim \operatorname{Half\text{-}Normal}(0,\sigma_\tau),
\]
\[
\beta_k \sim \mathcal{N}(0,\,2^2) \quad \text{for standardized predictors and population intercept}.
\]
Units: \(\tau\) is a logit-scale standard deviation (dimensionless). Reported posterior mean \(\hat\tau = 0.06\) with 95% HDI \((0.05,\,0.07)\) [SECTION: Model performance].

Posterior update [SECTION: Posterior estimates].
For manager \(i\), prior \(\theta_i \sim \mathcal{N}(0,\tau^2)\); likelihood from observed season winning percentages after controlling for WAR; posterior
\[
p(\theta_i \mid \mathcal{D}_i) \propto p(\mathcal{D}_i \mid \theta_i)\,\mathcal{N}(\theta_i;\,0,\tau^2).
\]
The MAP estimate is the latent skill estimate; \(\mathrm{mw}_{162}\) is the wins-per-162 expression.

mw162 conversion [SECTION: Model performance; SECTION: Posterior estimates].
Near \(p = 0.5\), the logit derivative is \(\partial p / \partial \eta = p(1-p) = 0.25\). Hence
\[
\Delta \mathrm{wins}_{162} \approx 162 \times 0.25 \times \Delta \eta = 40.5\,\Delta \eta .
\]
With \(\tau = 0.06\), \(\Delta \mathrm{wins}_{162} \approx 40.5 \times 0.06 = 2.43\) wins, matching the paper’s reported 2.4 wins per 162 games [SECTION: Model performance]. Breakdown: linearization is accurate only near \(p = 0.5\); extreme win probabilities require exact inverse-logit transformation.

Explanatory power [SECTION: Explanatory and predictive power].
\[
R^2_{\mathrm{WAR}} = 0.83, \qquad R^2_{\mathrm{WAR + mWAR}} = 0.87.
\]
Incremental share of residual variance explained:
\[
\frac{0.87 - 0.83}{1 - 0.83} = \frac{0.04}{0.17} \approx 0.235 \approx 24\%.
\]
RMSE reduction: \(0.004\) in winning percentage \(\times 162 \approx 0.65\) wins per team per season.

ROPE and consequence threshold [SECTION: Isolating consequential differences].
\[
\mathrm{ROPE} = \{\theta : |\mathrm{mw}_{162}| \le 2\},
\]
corresponding to \(\pm 0.012\) marginal win probability, or win probabilities \(0.488\) and \(0.512\) for a .500 team.

Estimator_p (provisional season-level) [SECTION: mWAR Estimator_p].
\[
\mathrm{mw162}_p \approx 0.24 \times \bigl(W_{\mathrm{actual}} - W_{\mathrm{expected}}\bigr),
\]
pro-rated for partial seasons. This attributes approximately 24% of the WAR-residual win difference to the manager.

MCMC diagnostics [SECTION: Model performance].
6 chains; 1,500 warmup; 2,500 post-warmup per chain; 15,000 posterior draws total. Split-\(\hat R < 1.01\) for all parameters; bulk and tail effective sample sizes \(> 4,900\); Monte-Carlo SE for posterior means \(\le 0.0001\).

Asymmetric loss calibration [SECTION: Calibration for decision-theory loss functions].
The decision-theoretic loss treats Type II error (failing to identify a true \(|\mathrm{mw}_{162}| \ge 2\) manager) as twice as costly as Type I error near the \(\pm 2.0\) thresholds. Formal loss function details are in the SI and are not reproduced in the extracted text.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage. The paper descends from Bill James’s Pythagorean Expectation (James, 1983) and his manager-forecasting formula in Guide to Baseball Managers (1997), both of which the text criticizes for attributing random Pythagorean residuals or pre-season forecast errors to managers without valid controls [SECTION: Background: The manager-measurement problem]. It also inherits the controlled team-quality tradition of Kahn (1993), Porter and Scully (1982), and Singell (1993), while correcting their weak pre-modern player metrics and their tendency to assign entire residuals to managers [SECTION: Background: The manager-measurement problem]. The modern measurement apparatus draws on WAR as validated by Brill and Wyner (2024) and Smith (2024), hierarchical Bayesian modeling per Gelman and Hill (2007), realistic simulated nulls and FDR methods per Efron (2008, 2012), Storey (2003), and Westfall (2011), ROPE testing per Kruschke (2018), and decision-theoretic asymmetric loss functions per Berger (1985) and Elliott and Timmermann (2008, 2016). The tournament payoff framing invokes Frank and Cook (1996) and CEO-retention asymmetry evidence from Jenter and Lewellen (2021) [SECTION: Calibration for decision-theory loss functions].

Multi-week traps. The estimator’s learning curve creates a multi-week decision hazard: posterior mw162 typically stabilizes only after ~900 games (~5.5 modern seasons), and the median detection time for a |mw162| ≥ 2 signal is 522 games (~3.2 seasons) [SECTION: mWAR Estimator_p]. Front offices acting inside that window on small-sample MLE-style observations will overreact to regression-to-the-mean noise. The FDR of 0.31 in the tail regions means nearly one in three apparent extremes may still be spurious [SECTION: Step 1: Confirming a signal]. Because the sample spans 1901–2025, era-specific run environments, bullpen usage, defensive shifts, and analytics adoption are subsumed into a single τ parameter; if managerial value has changed across epochs, a time-invariant prior will misstate contemporary skill [SECTION: Concluding observations]. The 15-game exclusion truncates the left tail of short managerial careers, potentially biasing population inference toward longer-tenured managers [SECTION: Sample].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock. Front offices exhibit a crisis habit: after a losing streak they regress to the mean by firing the manager, implicitly attributing random variation to managerial failure and replacing him with an “average” alternative whose expected value is also average [SECTION: Calibration for decision-theory loss functions]. The paper’s asymmetric-loss analysis formalizes this: holding on to a truly poor manager is costly, whereas prematurely replacing an average manager is mostly harmless because the replacement is expected to be average as well [SECTION: Calibration for decision-theory loss functions]. Conversely, prematurely firing a high-upside manager sacrifices rare positive marginal wins, so the calibrated loss function encourages risk-preference toward neutral or uncertain candidates near the +2 threshold.

The counter-trap is Bayesian shrinkage itself. The hierarchical prior pulls extreme small-season MLE estimates toward zero, preventing a front office from overvaluing a manager who enjoyed a lucky 50-game stretch [SECTION: Posterior estimates]. However, once the asymmetric loss function is applied, managers with posterior mass near ±2 can be pushed across the threshold even when their raw MLE evidence is weak, potentially inducing the very premature hiring/firing the shrinkage was meant to prevent [SECTION: Calibration for decision-theory loss functions]. The resulting re-ranking is non-monotonic and variance-dependent, so two managers with identical posterior means may receive different calibrated scores because their uncertainties differ [SECTION: Calibration for decision-theory loss functions].

The clock is explicit: full Estimator convergence requires ~900 games (~5.5 seasons); reliable identification of |mw162| ≥ 2 typically needs ~522 games (~3.2 seasons) [SECTION: mWAR Estimator_p]. The provisional Estimator_p offers faster, season-level signals (Kendall’s W = 0.68 across 2024–2025) but is explicitly a close functional approximation to the data input rather than the posterior latent skill [SECTION: mWAR Estimator_p]. Any personnel decision made before the 522-game detection horizon operates outside the estimator’s validated learning window and should be treated as high-uncertainty prior updating rather than confirmed posterior knowledge.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical and biomechanical layer. A manager does not alter player physiology, pitch velocity, or exit velocity directly; influence operates through strategic deployment (lineup construction, pitching changes, defensive positioning, in-game substitutions). Any estimated mw162 that implies a manager can physically improve a player’s underlying talent beyond the player’s observed WAR should be vetoed. Because the paper uses aggregate player WAR as the control, player quality is already partialled out, so the manager effect is strictly a residual strategic term. The paper itself notes that good managers may inflate player WAR through optimal deployment, which biases the manager estimate downward rather than creating a spurious positive physical effect [SECTION: Value benchmark: Team WAR]. Thus there is no upward physical singularity to veto; if anything, the estimate is a conservative lower bound.

Weather and environmental layer. Weather is not modeled as a separate covariate. Winning percentage and team WAR absorb park and weather effects indirectly: player WAR reflects performance in the actual contexts in which it occurred, and team winning percentage reflects all game-level variance. If a manager systematically exploits weather (e.g., favoring ground-ball pitchers in high-wind parks), part of that skill may be embedded in the pitchers’ WAR and thus partialled out, again biasing the manager coefficient toward zero. A veto would trigger only if park factors are badly misspecified in the underlying WAR system. The paper uses Baseball Reference WAR on the grounds that its theoretical foundation is complete and accessible [SECTION: Value benchmark: Team WAR, footnote 3]; if that system’s park adjustments are biased, omitted-variable bias could leak into the manager term, but the direction is not established in the extracted text.

Cross-layer adjudication result: no hard veto conditions are triggered by biomechanical or weather layers under the stated WAR-based identification strategy. The estimator’s domain is bounded to strategic-managerial residual variance after player skill and front-office roster construction are controlled; physical limits of player performance are not violated by effects of ±2 wins per 162 games.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with predictions.

Scenario 1 (Front-office roster shock veto). A manager classified inside the ROPE (|mw162| < 2) inherits a team whose aggregate player WAR increases by +4.0 wins per 162 due to offseason acquisitions. Prediction: the team’s actual win total should move in lockstep with the WAR projection, and the residual manager-attributable term should remain within ±2 wins. Verifiable veto: if the team exceeds its WAR-expected win total by more than 2 wins in that season, the manager’s inside-ROPE classification is falsified for that season and the null of “average manager” is rejected conditionally.

Scenario 2 (Paired-manager differential veto). Two managers take over comparably constructed teams with identical projected zWPG in consecutive seasons. Manager A has posterior mw162 = +4.0; Manager B has posterior mw162 = −4.0. Prediction: over a 162-game season, Manager A’s team should win approximately 8 more games than Manager B’s team relative to their respective WAR baselines (40.5 × [0.04 − (−0.04)] ≈ 3.24 probability points × 162 ≈ 8.1 wins). Verifiable veto: if the observed inter-manager win differential falls below 2 wins, the magnitude of the posterior separation is rejected as overestimated.

Scenario 3 (Asymmetric loss out-of-sample veto). A manager crosses the |mw162| ≥ 2 threshold only under the calibrated asymmetric loss function (2× Type II cost) but not under the default MSE-minimizing MAP. A front office acts on the calibrated signal (retains a “high upside” manager or replaces a “poor” one). Prediction: in the subsequent season, the team’s WAR-residual performance should move in the calibrated direction by at least 1 win per 162 relative to what the uncalibrated MAP would have predicted. Verifiable veto: if calibrated-threshold crossings do not predict out-of-season residual wins better than uncalibrated MAP estimates over a holdout set of manager-seasons, the loss-function adjustment is rejected as decision-theoretically unwarranted.
</RLVR_COUNTERFACTUAL_VETOES>