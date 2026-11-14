---
source: "Foul Accumulation in the NBA.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 28
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4938
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on the source paper "Foul Accumulation in the NBA" by Dani Chu. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive response analyzing the paper. Let's break down each section.

Key content from the paper:
- NBA player fouls out after 6th personal foul [PAGE 9]
- Q + 1 guideline: sit player when fouls = quarter + 1 [PAGE 9]
- Gamma distribution used for fouling times X ~ Gamma(α, β), E(X) = α/β [PAGE 13]
- Exponential is special case α=1, memoryless property rejected [PAGE 12-13]
- Likelihood ratio tests H0: α=1 at 0.05 level, rejected 20% of 1,010 datasets [PAGE 13]
- 821 out of 1,010 cases had α̂ > 1, indicating increasing hazard [PAGE 13]
- Censoring: Y = min(X, C), δ indicator [PAGE 12-13]
- Prior: truncated bivariate normal on (α, β)' depending on position pi and foul level n [PAGE 16-17]
- Constraint α_i1/β_i1 ≥ ... ≥ α_i6/β_i6 (mean fouling time decreases with n) [PAGE 17]
- Constraint α_in ≥ 1.0 for increasing hazard [PAGE 17]
- Posterior density equation (3.1) [PAGE 15]
- Predictive distribution integral equation (3.3) [PAGE 18]
- MCMC via Stan [PAGE 18-19]
- Brier score equation (4.1) [PAGE 24]
- Examples: Giannis mean predictive fouling time 11.6 min first foul, 10.9 min third foul [PAGE 19]; Harrison Barnes 23.8 min first, 16.8 min third [PAGE 19]
- LeBron James endgame: 5th foul midway through 3rd quarter, 18 minutes left. Posterior mean time for 6th foul 9.9 minutes. 10th percentile 1.3 minutes for 90% confidence [PAGE 20-21]. Karl-Anthony Towns: 0.8 minutes for 90% confidence [PAGE 21]
- Damian Lillard: total time T = x3+x4+x5+x6 after second foul, median exceeds 48 minutes [PAGE 21]
- Victor Oladipo playoff scenario: Game 2, 2nd foul at 1:02 into 1st quarter, removed, re-inserted start of 2nd quarter with 36 minutes remaining [PAGE 22-23]. Predicted 42 minutes without fouling out 42% of time. Cheat sheet: Next Foul 3 foul out ~60%, survival 40%. Re-inserted with 36 minutes remaining, 53% survival without fouling out [PAGE 22-23]
- Oladipo third foul with 5 minutes left in 2nd quarter (29 minutes left), predicted 24 minutes without fouling out 50% of time. Sitting 5 minutes increased survival to 66% for 19 minutes in second half [PAGE 23]
- Model validation: integrated time-dependent expected Brier Score [PAGE 24-25], Table 4.2 [PAGE 25]
- Bayesian model outperforms others except foul level 6 where MLE best [PAGE 26]

Structure:
1. THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words). Need to discuss derivation from Gamma to Bayesian hierarchical model, censoring, constraints, quantile-based substitution, gray zones like positional classification, double use of data avoidance, prior-data conflict, small sample at n=5,6 grouping, increasing hazard assumption, memoryless property rejection, etc. Multi-hop: from raw play-by-play to Gamma MLE to hyperparameters to truncated normal prior to constrained posterior to MCMC predictive to percentile-based sitting rules to Brier validation. Gray zones: position classification ambiguity, intentional fouls exclusion, defensive assignment changes not modeled, self-preservation behavior, playoff vs regular season intensity, right censoring mechanism (end of game vs substitution), etc.

2. SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations with units (minutes), page citations, exact breakdown. Include equations (3.1), (3.2), (3.3), (4.1), Gamma parameterization, likelihood ratio test, Brier score, percentiles. Units: minutes for time, dimensionless for probabilities, counts for fouls. Breakdown regimes: α=1 exponential breakdown, α<1 decreasing hazard breakdown, censoring at game end, small n=5,6 sample breakdown, positional misclassification, etc.

3. RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Lineage: Kalbfleisch & Prentice (2002) failure time, Harter & Moore (1965) MLE censored Gamma, D'Agostino & Stephens (1986) goodness-of-fit, Mogensen et al. (2012) Brier score, Gerds & Schumacher (2006) censoring adjustment, Evans (2017a,b) NBA fouls survival analysis, Beaudoin & Swartz (2010) goalie pulling, Lewis (2013) Moneyball, Yam & Lopez (2018) causal inference fourth down, Maymin et al. (2012) early foul trouble finance, Pomeroy (2016) college foul trouble, Partnow (2019) factors, Falk (2018) Q+1 rule, Rochford (2017) IRT Bayesian, Klobuchar (2018) win shares, Chu & Swartz (2019) predecessor. Multi-week traps: over a season, coaches sitting players too early cumulative minutes lost; regression to mean in foul rates; small sample volatility week-to-week; playoff intensity shifts not captured by regular-season priors; backup quality erosion over multi-week stretches; end-of-game valuation vs early-game contribution distortion.

4. RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Crisis habit regression: coach follows Q+1 out of fear of blame (paper discusses credit/blame asymmetry [PAGE 10]). Counter-trap: anticipating opponent's substitution based on their foul trouble, targeting bench players, etc. Clock: game clock remaining maps to survival probability percentiles (LeBron 1.3 min for 90%, Lillard median >48 min, Oladipo 36 min at 53%). Recursive ToM: coach models opponent's model of coach's foul management; player self-preservation (Pomeroy 2016) changes fouling behavior when in trouble; Evans (2017b) rested players less likely to foul; defensive assignment changes alter underlying foul rate (PAGE 26). Need to discuss how each layer regresses: coach -> player -> referee -> opponent coach -> league officiating trends.

5. CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Physical: fatigue increases hazard (α>1), tired feet defensive stance [PAGE 12], fresh player over-aggressiveness [PAGE 12]. Biomechanical: defensive stance, foot movement, contact frequency, not explicitly modeled but implied by hazard. Weather: indoor arena, no weather veto applicable, but arena humidity/temperature could affect grip/fatigue indirectly; paper doesn't model weather (indoor controlled environment). Veto conditions: if player changes defensive assignment [PAGE 26], if intentional fouls included [PAGE 27], if playoff intensity differs [PAGE 27 future WNBA/international], if consecutive vs segmented playing time [PAGE 26 future work]. Exact singularity: n=5,6 small sample grouping prior [PAGE 17], α=1 boundary [PAGE 13], censoring when player doesn't reach nth foul [PAGE 12].

6. RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. Need 3 scenarios where model predictions can be tested/falsified. Each scenario: setup, model prediction, veto condition (what would invalidate), counterfactual outcome. No betting lines. Use probabilities/minutes.

Scenario 1: LeBron James 5th foul with 18 minutes left. Model says 10th percentile 1.3 min, median 7.5 min. If coach sits him until 1.3 min remains and he returns, prediction: survival probability 90%. Veto: if he fouls out within 5 minutes of return <10% of the time across repeated similar situations, the tail is miscalibrated. Counterfactual: playing through yields higher expected minutes but risk of early exit.

Scenario 2: Damian Lillard after 2nd foul. Median total time to foul out >48 minutes. Veto: if Lillard fouls out before 40 minutes in >50% of games where he picks up 2nd foul early, median estimate is biased high due to regular-season prior not capturing playoff physicality.

Scenario 3: Victor Oladipo 3rd foul with 29 minutes left. Model predicted 24 minutes survival 50%. If coach plays him through and he logs 24+ minutes without 6th foul at rate significantly different from 50% (e.g., <40% or >60% across n games), the constrained mean ordering α/β decreasing may be violated for guards at n=3.

Need to ensure >=1000 words total. Let's allocate roughly:
- THINK_TRACE: 450-500 words
- SOURCE_OPERATORS_AND_EQUATIONS: 350-400 words
- RETROCAUSAL_GENEALOGY: 300-350 words
- RECURSIVE_THEORY_OF_MIND: 300-350 words
- CROSS_LAYER_VETO_ADJUDICATION: 250-300 words
- RLVR_COUNTERFACTUAL_VETOES: 250-300 words
Total should exceed 1000.

Need to be careful with verbatim quotes and [PAGE N] markers. Use exact page numbers from provided text. The pages are labeled [PAGE 1 of 28] etc. I should cite like [PAGE 9], [PAGE 13], etc.

Check betting lines: do not mention spreads, totals, moneylines, odds. The word "odds" might slip in; avoid it. Use "probability" instead.

Check toy equations: no invented fake ratios. All equations must be formal from the paper or standard stats. I will cite page numbers for each.

Let's draft carefully.

THINK_TRACE content:
Start with raw notation: X_j^(n) time between (n-1)st and nth foul in match j. Censoring mechanism random right censoring because game ends/substitution. Y = min(X,C). Likelihood contribution f^(1-delta) * [1-F]^delta. Gamma parameterization E=α/β. Rejection of exponential via LRT H0: α=1, 20% rejection at 0.05, 821/1010 α̂>1 => increasing hazard. Prior: truncated bivariate normal on (α,β)' with hyperparameters a,b,Σ depending on position pi and foul level n. Data split: old data 2013-14 to 2016-17 for priors; new data 2017-18 to 2018-19 for posterior. Constraint mean fouling times decreasing: α_i1/β_i1 ≥ ... ≥ α_i6/β_i6. Constraint α≥1. Grouping n=5,6 due to sparse data. Posterior equation (3.1). Predictive integral (3.3) via MCMC Stan. Percentile substitution rules: LeBron 10th percentile 1.3 minutes for 90% confidence; Oladipo 42 minutes at 42% survival. Validation: integrated time-dependent expected Brier Score equation (4.1), Bayesian best except level 6 where MLE wins. Gray zones: positional classification (bigs/forwards/guards) may not capture modern positionless basketball; defensive assignment changes alter foul rate but model assumes usual assignment [PAGE 26]; intentional fouls excluded [PAGE 27]; playoff vs regular season intensity not modeled; consecutive vs segmented minutes future work [PAGE 26]; censoring at game end creates informative censoring if coach sits player specifically to avoid foul; credit/blame asymmetry makes coaches risk-averse [PAGE 10]. Multi-hop chain: raw play-by-play -> MLE per player-foul -> hyperprior averaging -> constrained hierarchical posterior -> MCMC draws -> quantile-based re-entry -> Brier out-of-sample validation. Each hop introduces assumptions that can break down.

SOURCE_OPERATORS_AND_EQUATIONS content:
List formal equations with LaTeX.
- X ~ Gamma(α, β), E[X] = α/β [PAGE 13]
- Y_j^(n) = min(X_j^(n), C_j^(n)), δ_j = 1{X > C} [PAGE 12-13]
- Likelihood posterior (3.1): π(α,β|y) ∝ ∏_i∏_j∏_n f(y|α_in,β_in)^(1-δ) [1-F(y|α_in,β_in)]^δ π(α,β) [PAGE 15]
- Prior (3.2): (α_in, β_in)' ~ truncated_Normal_2((a,b)', Σ), truncations α>0, β>0 [PAGE 16-17]
- Constraint: α_i1/β_i1 ≥ α_i2/β_i2 ≥ ... ≥ α_i6/β_i6; α_in ≥ 1.0 [PAGE 17]
- Predictive density (3.3): f(x) = ∫ f(x|α_i,β_i) π(α,β|y) dα dβ [PAGE 18]
- MCMC estimator: α̂_in = (1/N) Σ α_in^(k) [PAGE 19]
- Brier score (4.1): B̂(t) = (1/K) Σ [ ... ] with inverse probability of censoring weights Ĝ(t) [PAGE 24]
- Table 4.2 values [PAGE 25]
- Units: minutes for time; dimensionless probabilities; counts for fouls.
- Breakdown/singularity regimes: α=1 exponential boundary rejected; n=5,6 sparse data grouping; small m_n (<30 excluded in EDA); censoring when player never commits nth foul; position misclassification; playoff intensity shift; intentional foul inclusion.

RETROCAUSAL_GENEALOGY content:
Lineage: survival analysis foundations Kalbfleisch & Prentice (2002) [PAGE 13], Harter & Moore (1965) censored Gamma MLE [PAGE 13], D'Agostino & Stephens (1986) EDF tests [PAGE 13], Brier score Mogensen et al. (2012) and Gerds & Schumacher (2006) [PAGE 24], sports analytics predecessors Beaudoin & Swartz (2010) goalie pulling [PAGE 9], Lewis (2013) Moneyball OBP [PAGE 9], Yam & Lopez (2018) causal inference fourth down [PAGE 9], Evans (2017a,b) NBA fouls [PAGE 12, 15], Maymin et al. (2012) early foul trouble finance [PAGE 11], Pomeroy (2016) college foul trouble self-preservation [PAGE 11, 26], Partnow (2019) factors [PAGE 11], Falk (2018) Q+1 critique [PAGE 13], Rochford (2017) IRT [PAGE 10], Klobuchar (2018) win shares [PAGE 10], predecessor Chu & Swartz (2019) [PAGE 3, 19]. Multi-week traps: cumulative minutes surrendered by Q+1 over a season; regression of weekly foul-rate estimates to seasonal mean; small-sample week-to-week volatility causing overreaction to a single high-foul game; playoff officiating intensity differing from regular-season prior [PAGE 27 future work]; backup player quality erosion over multi-week stretch changing opportunity cost of sitting star; opponent scouting adjusting to substitution patterns (recursive adaptation); end-of-game overweighting causing early-game value leakage.

RECURSIVE_THEORY_OF_MIND content:
Layer 0: physical act of fouling. Layer 1: player self-preservation when in foul trouble (Pomeroy 2016 [PAGE 11]), rested players foul less (Evans 2017b [PAGE 26]). Layer 2: coach's Q+1 tradition driven by credit/blame asymmetry [PAGE 10]: blamed for early exit if plays star and loses close, absolved if sits and loses blowout. Layer 3: opponent coach models this and targets bench replacements or changes defensive assignments to draw fouls; star can change assignment to lower own foul rate [PAGE 26]. Layer 4: league officiating and public narrative adapt to analytics-driven substitutions. Crisis habit regression: under pressure, coach reverts to Q+1 despite model. Counter-trap: use model percentiles (LeBron 1.3 min, Oladipo 36 min at 53%) to re-enter earlier than tradition but not recklessly; exploit opponent's conservative rotation by attacking their benched star's replacement. Clock: game clock remaining maps directly to survival quantiles; median time to foul out >48 minutes for Lillard means clock is not binding; for LeBron 90% confidence requires re-entry at 1.3 minutes [PAGE 21]. Model assumes stationary hazard over game, but fatigue and score differential may alter it (covariates suggested by Evans 2017b [PAGE 26]).

CROSS_LAYER_VETO_ADJUDICATION content:
Physical layer: fatigue reduces ability to move feet into defensive stance, increasing foul hazard; α̂>1 in 821/1010 cases supports increasing hazard [PAGE 13]. Fresh player may over-aggress [PAGE 12]. Biomechanical: defensive stance integrity, lateral quickness, contact timing; not explicitly modeled but implied by time-on-court hazard. Weather: indoor arena, no direct weather effect; temperature/humidity could affect grip/fatigue but outside model scope. Veto conditions:
1. Player changes defensive assignment mid-game -> underlying foul rate shifts, invalidating prior conditioned on usual assignment [PAGE 26].
2. Intentional fouls included -> do not characterize individual fouling behavior, must remove [PAGE 27].
3. Playoff intensity vs regular season prior -> prior from regular season may understate physicality in postseason [PAGE 22-23 Oladipo playoff example uses 2016-17/2017-18 regular season data to predict playoff game, explicitly avoiding in-game data].
4. n=5,6 sparse sample grouping -> prior merges n=5 with n=6 within position [PAGE 17], singularity if actual n=6 hazard differs sharply from n=5.
5. Consecutive vs segmented playing time -> future work [PAGE 26], continuous run may fatigue differently than bench-stint cadence.
Exact singularity: α=1 boundary where Gamma collapses to Exponential and memoryless property fails reality check [PAGE 12-13].

RLVR_COUNTERFACTUAL_VETOES content:
Need 3 verifiable scenarios with predictions and veto conditions.
Scenario A: LeBron endgame. Setup: 5th foul, 18 minutes left [PAGE 20]. Model prediction: 10th percentile 1.3 minutes for 90% confidence; median 7.5 minutes. RLVR veto: if across 20 similar high-leverage endgames the player fouls out within 4 minutes of return more than 20% of the time, the left tail (10th percentile) is miscalibrated and the 90% confidence threshold should be raised. Counterfactual prediction: playing him until ~7 minutes remaining captures median survival; sitting until 1.3 minutes sacrifices ~5.7 expected minutes for marginal tail insurance.
Scenario B: Damian Lillard cumulative time. Setup: after 2nd foul, T = x3+x4+x5+x6. Model prediction: median T > 48 minutes [PAGE 21]. RLVR veto: if in 30 games where Lillard earns his 2nd foul before halftime, he fouls out before 40 total minutes in more than 50% of cases, the median is biased upward due to regular-season prior not capturing playoff intensity or opponent targeting. Counterfactual prediction: Q+1 is unnecessarily cautious; coach can play Lillard through most of game without fouling out.
Scenario C: Victor Oladipo 3rd foul. Setup: 3rd foul with 5 minutes left in 2nd quarter (29 minutes left); predicted 24 minutes survival at 50%; sitting 5 minutes raises survival to 66% for 19-minute second-half stint [PAGE 23]. RLVR veto: if across 15 comparable guard 3rd-foul mid-2nd-quarter situations, playing through yields 6th-foul-free survival at ≥60% rate for the same 24-minute window, the constraint α_i2/β_i2 ≥ α_i3/β_i3 (mean time decreases) is too restrictive or position-specific hyperprior is miscalibrated. Counterfactual prediction: returning Oladipo earlier than Q+1 dictates increases expected star minutes with acceptable risk.

Make sure word count >1000. Let's estimate. I'll write substantial paragraphs.

Also ensure exact XML tags. No markdown outside? User asked for exact XML sections. I will output only those sections in order.

Need to include verbatim quotes? The instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I should include a few verbatim quotes with page citations.

Let's include quotes like:
- "a player fouls out of the game and is disqualified from play after committing their sixth personal foul" [PAGE 9]
- "Coaches, in an effort to maintain the availability of star players at the end of the game, will 'sit' a player who has accumulated too many fouls in the early stages of the game." [PAGE 9]
- "the mean fouling time decreases with increasing n" [PAGE 17]
- "Our Bayesian model outperforms the other models for all cases except for foul level 6, where the maximum likelihood estimates provide the best out of sample estimates." [PAGE 26]
- "Although intentional fouls are infrequent, they should not be included as they do not characterize individual fouling behaviour." [PAGE 27]

Need to ensure no betting lines. Words like "line", "spread", "total", "moneyline", "odds" should not appear. I will avoid them entirely. I will not say "odds of fouling out" but "probability of fouling out".

Let's compose final.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation proceeds through five nested hops from raw play-by-play data to a coach-facing substitution rule, and each hop introduces a distinct gray-zone assumption that can break down under operational pressure. Hop one maps the physical event of fouling to failure-time notation: let X_j^(n) denote minutes played between the (n−1)st and nth foul in match j, n=1,...,6, with random right censoring C_j^(n) because a player may exit the game without ever committing the nth foul; the observed pair is Y=min(X,C) with δ=1{X>C} [PAGE 12-13]. Hop two selects the distributional family. The Exponential is rejected because its memoryless property implies a tired defender is no more likely to foul than a fresh one, contradicting the biomechanical intuition that fatigued footwork degrades defensive stance [PAGE 12]; likelihood-ratio tests of H0: α=1 at the 0.05 level reject 20% of 1,010 player-foul datasets, and α̂>1 in 821 out of 1,010 cases, signaling an increasing hazard function [PAGE 13]. Hop three builds the Bayesian hierarchical prior: (α_in, β_in)' follows a truncated bivariate normal whose hyperparameters a, b, and Σ are position- and foul-level-specific, estimated from the 2013–2014 through 2016–2017 seasons, while inference uses the held-out 2017–2018 and 2018–2019 seasons to avoid double use of the data [PAGE 16-17, 19]. Because sparse samples exist at n=5,6, those foul levels are pooled within position [PAGE 17]. Hop four imposes physical constraints: mean fouling time must decrease with foul level, α_i1/β_i1 ≥ ... ≥ α_i6/β_i6, and α_in ≥1 to preserve an increasing hazard [PAGE 17]. Hop five converts the posterior into predictive quantiles via MCMC in Stan and then into clock-based sitting rules: LeBron James’s 10th percentile time to a sixth foul is 1.3 minutes, so a coach demanding 90% endgame availability should theoretically re-enter him with only 1.3 minutes remaining [PAGE 20-21]; Damian Lillard’s median total time to foul out after his second foul exceeds 48 minutes, rendering the Q+1 rule unnecessarily cautious for him [PAGE 21].

Gray-zone audit: (1) positional taxonomy collapses modern positionless basketball into bigs, forwards, and guards, potentially misallocating hyperparameters for versatile forwards [PAGE 14]; (2) the model conditions on “usual defensive assignments,” yet a coach can alter a player’s underlying foul rate by switching assignments mid-game, which invalidates the stationary prior [PAGE 26]; (3) playoff intensity differs from regular-season priors, as seen when Oladipo’s playoff behavior is predicted from regular-season data [PAGE 22-23]; (4) censoring is potentially informative because a coach sitting a player to avoid fouls truncates the very risk process being modeled; (5) credit/blame asymmetry makes coaches revert to Q+1 folklore: a coach is blamed for an early star exit but absolved when sitting a star and losing by a large margin [PAGE 10]; (6) intentional fouls must be excluded because they do not characterize individual fouling behavior, though they are infrequent [PAGE 27]. Each gray zone creates a failure regime where the posterior predictive quantile no longer maps cleanly to minutes remaining on the game clock.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and units. Time is measured in minutes; foul counts are dimensionless integers n∈{1,...,6}; probabilities are dimensionless in [0,1]. The Gamma parameterization is X∼Gamma(α,β) with E[X]=α/β [PAGE 13]. The observed failure/censoring pair is Y_j^(n)=min(X_j^(n),C_j^(n)), δ_j=1{X_j^(n)>C_j^(n)} [PAGE 12-13]. The constrained posterior density is

π(α,β|y) ∝ ∏_i ∏_j ∏_n f(y_ij^(n)|α_in,β_in)^(1−δ_ijn) [1−F(y_ij^(n)|α_in,β_in)]^δ_ijn π(α,β) , [PAGE 15, eq. 3.1]

where f and F are the Gamma density and CDF. The prior is a truncated bivariate normal:

(α_in, β_in)' ∼ truncated_Normal_2((a,b)', Σ), α_in>0, β_in>0, [PAGE 16-17, eq. 3.2]

with hyperparameters indexed by position p_i∈{1,2,3} and foul level n. Order constraints enforce physical monotonicity:

α_i1/β_i1 ≥ α_i2/β_i2 ≥ ... ≥ α_i6/β_i6, α_in ≥ 1.0 , [PAGE 17]

reflecting decreasing mean fouling time and increasing hazard. The predictive density for future fouling time is

f(x)=∫ f(x|α_i,β_i) π(α,β|y) dα dβ , [PAGE 18, eq. 3.3]

approximated by MCMC draws α_in^(k), β_in^(k), k=1,...,N, with posterior mean α̂_in=(1/N)∑_k α_in^(k) [PAGE 19]. Validation uses the integrated time-dependent expected Brier score with inverse-probability-of-censoring weighting:

B̂(t)=1/K ∑_i∑_j∑_n [ (0−Ŝ_i^(n)(t))^2 · 1{y_ij≤t,δ_i=1}/Ĝ(y_ij) + (1−Ŝ_i^(n)(t))^2 · 1{y_ij>t}/Ĝ(t) ] , [PAGE 24, eq. 4.1]

where Ĝ(t)=P[C>t] is the Kaplan-Meier censoring survival function [PAGE 24]. Table 4.2 reports integrated scores: Bayesian model 0.123 at level 1 versus 0.250 baseline, rising to 0.160 Bayesian versus 0.199 Kaplan-Meier and 0.150 MLE at level 6 [PAGE 25]. Breakdown/singularity regimes: α=1 collapses Gamma to Exponential and is rejected by the data [PAGE 12-13]; n=5,6 priors are pooled across adjacent foul levels because of sparse observations [PAGE 17]; the monotonic mean constraint can over-regularize if an individual player’s fouling rate is non-monotonic; playoff intensity is not explicitly modeled despite postseason applications [PAGE 22-23]; censoring becomes informative when substitution decisions truncate exposure time [PAGE 12].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical lineage. The statistical machinery descends from classical failure-time theory: Kalbfleisch and Prentice (2002) for censored event data [PAGE 13], Harter and Moore (1965) for maximum-likelihood Gamma estimation under censoring [PAGE 13], and D’Agostino and Stephens (1986) for empirical-distribution goodness-of-fit [PAGE 13]. The predictive-scoring layer uses Mogensen, Ishwaran, and Gerds (2012) and Gerds and Schumacher (2006) for time-dependent Brier scores under right censoring [PAGE 24]. The sports-analytics genealogy includes Beaudoin and Swartz (2010) on NHL goalie-pulling timing, cited as an example where folklore was corrected by simulation [PAGE 9]; Lewis (2013) Moneyball and the shift from batting average to on-base percentage [PAGE 9]; Yam and Lopez (2018) on causal inference for fourth-down punting [PAGE 9]; Evans (2017a,b) for earlier NBA foul survival analysis and the suggestion that rested players foul less [PAGE 12, 15, 26]; Maymin, Maymin, and Shen (2012) for the financial framing of early foul trouble [PAGE 11]; Pomeroy (2016) for college basketball self-preservation in foul trouble [PAGE 11, 26]; Partnow (2019) for factors coaches should weigh, including backup quality and officiating physicality [PAGE 11]; Falk (2018) for the Q+1 critique [PAGE 13]; Rochford (2017) for Bayesian item-response theory on foul calls [PAGE 10]; and Klobuchar (2018) for win-share impacts of early substitution [PAGE 10]. The immediate methodological ancestor is Chu and Swartz (2019), from which large passages are reproduced [PAGE 3, 19]. Multi-week traps: over a season, Q+1 accumulates surrendered star minutes without a compensating endgame benefit; weekly foul-rate posteriors regress toward seasonal means, so a single high-foul game should not trigger a durable rotation change; small week-to-week samples inflate posterior variance at n=5,6 where data are pooled [PAGE 17]; playoff officiating physicality diverges from regular-season priors, making postseason applications fragile [PAGE 22-23]; backup-player quality erodes across multi-week injury stretches, altering the opportunity cost of sitting a star; and opposing coaches adapt to predictable substitution patterns, creating a recursive targeting loop against replacement defenders.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Layer zero is the biomechanical foul act itself. Layer one is player psychology: athletes in perceived foul trouble exhibit self-preservation, reducing aggression, while recently rested players foul less [PAGE 11, 26]. Layer two is the coach’s crisis habit: Q+1 persists because of asymmetric blame—a coach who plays a star in foul trouble and loses close is blamed for the early exit, whereas a coach who sits the star and loses by fifteen is absolved for following tradition [PAGE 10]. Layer three is opponent recursion: the opposing staff models the coach’s conservatism and attacks the star’s replacement or schemes to draw fouls from a cautious defender; the star’s own defensive assignment can be switched to lower the underlying foul rate, but the model assumes the usual assignment [PAGE 26]. Layer four is league-level officiating and narrative adaptation to analytics-driven rotations. Crisis habit regression occurs when, under endgame pressure, the coach abandons quantile-based re-entry and reverts to Q+1 despite posterior evidence such as Lillard’s median time to foul out exceeding 48 minutes [PAGE 21]. The counter-trap is to use the model’s clock mapping explicitly: LeBron’s 10th percentile is 1.3 minutes for 90% confidence, his 30th percentile is 4.2 minutes, and his median is 7.5 minutes [PAGE 21]; Oladipo’s survival probability for a 36-minute second-half stint after re-entry is 53%, versus roughly 40% survival for a 42-minute total burden [PAGE 22-23]. The coach can therefore re-enter earlier than Q+1 dictates without crossing into the left tail of the predictive distribution. The clock itself is the state variable: game minutes remaining map monotonically to survival quantiles, but the model assumes stationarity of the hazard over the game, ignoring score differential and fatigue interactions that Evans (2017b) identifies as important covariates [PAGE 26]. A fully recursive theory of mind must therefore simulate not only the coach’s own posterior but also the opponent’s belief about that posterior, the player’s self-preservation response, and the referee’s tendency to call fouls on a defender who is visibly cautious.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: fatigue degrades lateral foot speed and defensive-stance integrity, raising the foul hazard; this is statistically supported by α̂>1 in 821 of 1,010 player-foul cases, implying increasing hazard with time on court [PAGE 13]. A fresh player may over-aggress and foul early, creating non-monotonic within-stint risk that the Gamma hazard only partially captures [PAGE 12]. Biomechanical layer: contact timing, help-defense rotations, and closeout mechanics are not explicit covariates but are subsumed in the time-on-court hazard; a change in defensive assignment mid-game voids the stationarity assumption because the player’s underlying foul rate is conditioned on the usual assignment [PAGE 26]. Weather layer: NBA games are indoor and climate-controlled, so direct weather effects (wind, precipitation, temperature) are absent; arena humidity and temperature could indirectly affect grip and fatigue, but these are outside the model scope and constitute an exogenous veto if extreme facility conditions alter playing surface or player thermoregulation. Exact veto conditions: (1) if the coach changes the player’s defensive assignment during the stint, the prior predictive distribution no longer applies because the foul-rate generating process shifts [PAGE 26]; (2) if intentional fouls are included in the data, they contaminate individual fouling behavior and must be removed [PAGE 27]; (3) if the game is a playoff contest while priors are regular-season based, intensity mismatch can bias survival probabilities, as when Oladipo’s postseason minutes are projected from regular-season data [PAGE 22-23]; (4) at n=5,6, sparse-data pooling of foul levels within position creates a singularity where the n=6 hazard may diverge from the pooled n=5,6 prior [PAGE 17]; (5) if playing time is consecutive rather than segmented by bench stints, fatigue accumulation differs from the model’s exchangeable stint assumption, a identified future-work gap [PAGE 26]; (6) at the boundary α=1 the Gamma reduces to the Exponential and the memoryless property is contradicted by the data, so any operational rule using an exponential assumption is invalid [PAGE 12-13].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (LeBron endgame): Setup—LeBron picks up his fifth foul midway through the third quarter with 18 minutes remaining [PAGE 20]. Model prediction—the 10th percentile of time to the sixth foul is 1.3 minutes; the median is 7.5 minutes [PAGE 21]. RLVR veto condition—if, across 20 comparable high-leverage endgames, the player fouls out within 4 minutes of re-entry more than 20% of the time, the lower tail of the predictive distribution is miscalibrated and the 90% confidence threshold must be made more conservative. Counterfactual prediction—playing LeBron until roughly 7 minutes remain captures the median survival expectation, whereas sitting until 1.3 minutes remains sacrifices approximately 5.7 expected star minutes for marginal tail insurance.
Scenario 2 (Damian Lillard cumulative burden): Setup—after his second foul, total time to foul out is T=x3+x4+x5+x6 [PAGE 21]. Model prediction—the median of T exceeds 48 minutes, the length of a regulation match [PAGE 21]. RLVR veto condition—if in 30 games where Lillard earns his second foul before halftime he records fewer than 40 total minutes without fouling out in more than 50% of cases, the regular-season prior is biased upward and does not generalize to playoff or high-physicality environments. Counterfactual prediction—the Q+1 rule is unnecessarily cautious for Lillard; a coach can reasonably keep him on the floor for most of the game without exceeding a 50% fouling-out probability.
Scenario 3 (Victor Oladipo third foul): Setup—Oladipo picks up his third foul with 5 minutes left in the second quarter, 29 minutes remaining in the game [PAGE 23]. Model prediction—playing 24 minutes without a sixth foul succeeds 50% of the time; sitting the final 5 minutes of the half raises survival to 66% for the subsequent 19-minute second-half stint [PAGE 23]. RLVR veto condition—across 15 comparable guard third-foul mid-second-quarter situations, if playing through yields sixth-foul-free survival of at least 60% over the same 24-minute window, the ordered-mean constraint α_i2/β_i2 ≥ α_i3/β_i3 is too restrictive for that position-foul cell. Counterfactual prediction—returning Oladipo earlier than Q+1 dictates increases expected star minutes with acceptable risk, because the model’s 50% survival benchmark understates his actual resilience in that game state.
</RLVR_COUNTERFACTUAL_VETOES>