---
source: "2023 - Yellow fever Investigating referee consistency in the 'Big 5' men's European soccer leagues - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/New England Symposium on Statistics in Sports/2023"
pages: 35
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6502
---

<NATIVE_REASONING>
The user wants a rigorous analysis of a specific research paper: "Yellow fever: investigating referee consistency in the ‘Big 5’ men’s European soccer leagues" by Pete Philipson, NESSIS 2023. The source text covers pages 1-35. I need to produce output with exact XML sections:

1. <THINK_TRACE> (>=400 words) - Deep multi-hop derivation & gray-zone audit.
2. <SOURCE_OPERATORS_AND_EQUATIONS> - Formal LaTeX, units, page citations, breakdown, assumptions, singularity/breakdown regimes.
3. <RETROCAUSAL_GENEALOGY> - Historical/scientific lineage & multi-week traps.
4. <RECURSIVE_THEORY_OF_MIND> - Crisis habit regression vs counter-trap vs clock.
5. <CROSS_LAYER_VETO_ADJUDICATION> - Physical/biomechanical/weather veto proof.
6. <RLVR_COUNTERFACTUAL_VETOES> - 3 verifiable RLVR veto scenarios + predictions.

Constraints:
- ZERO betting lines: no spreads, totals, moneylines, odds.
- ZERO toy equations: no fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
- Total depth >= 1,000 words across sections.

I need to be careful about the content. The paper is about yellow cards, CMP distribution, Frank copula, MCMC, referee effects, team effects, home/pandemic effects. No betting content in the paper itself, so constraint 1 is easy.

Let me plan each section.

<THINK_TRACE>: Need >=400 words. Deep multi-hop derivation. Gray-zone audit. I can discuss:
- The data structure: ~7.5K matches, 2 observations per match, k=129 teams, m=171 referees, seasons 2018/19-2021/22 [PAGE 6].
- Underdispersion: mean > variance for each league [PAGE 8]. EPL mean 1.60 var 1.21; L1 1.91/1.28; BL 1.82/1.30; SA 2.36/1.37; LL 2.49/1.50.
- Kendall's τb values showing dependence between home/away yellows [PAGE 10].
- Empirical joint vs independent ratio table [PAGE 11] showing dependence structure (especially high cards).
- Need for bivariate count regression handling over/underdispersion [PAGE 13].
- CMP distribution PMF [PAGE 17]: Pr(X=x|λ,ν) = λ^x / ((x!)^ν G∞(λ,ν)).
- Mean-parameterised CMP [PAGE 18-19], λ as nth-order polynomial.
- Look-up tables with bilinear interpolation [PAGE 20], µ∈[0,19], ν∈[0,10], step 0.01, ~20 seconds.
- Model linear predictor [PAGE 21]: log(µ_ijk) = β_League_i + β_6 I(Home) + β_7 I(NoFans) + β_8 I(Home)×I(NoFans) + θ_i + γ_j.
- Referee effects θ_i, team effects γ_j, sum-to-zero constraints [PAGE 25].
- Dispersion ψ_ℓ = log(ν_ℓ) at league level [PAGE 21].
- Frank copula [PAGE 23]: C(u,v) = (1/κ) log(1 + (e^{κu}-1)(e^{κv}-1)/(e^κ-1)).
- Association κ_ℓ varies by league [PAGE 24].
- Results: home effect posterior mean 0.90 (0.88,0.94) = 10% reduction? Wait, the text says "0.90 (0.88, 0.94), i.e. a 10% reduction in the rate". Actually if it's on log scale, exp(0.90)? No, they say posterior mean effect for being at home is 0.90... but then say 10% reduction. Wait, looking at page 27: "The posterior mean effect for being at home is 0.90 (0.88, 0.94), i.e. a 10% reduction in the rate". This seems like they might be exponentiating or it's a multiplicative factor? Actually in the linear predictor it's log(µ), so coefficients are log-rate ratios. But they report 0.90 as if it's a multiplicative effect? Let me re-read carefully.

Page 27: "The posterior mean effect for being at home is 0.90 (0.88, 0.94), i.e. a 10% reduction in the rate". If the coefficient is on the log scale, exp(-0.105) ≈ 0.90. So perhaps they report exp(β) or β such that e^β = 0.90? Actually if β_home = -0.105, e^β = 0.90. So they might be reporting the multiplicative factor e^β directly. Similarly no fans 0.87 = 13% reduction. Interaction 1.13 = removes home effect. So they are exponentiating the log coefficients to get rate ratios. I should note this interpretation carefully and perhaps flag it as a gray zone: the linear predictor is log(µ) but results are presented as multiplicative rate ratios (e^β), requiring explicit back-transformation [PAGE 21, PAGE 27].

- Posterior HDIs for dispersions ν_ℓ all above one => underdispersion [PAGE 27]. Wait, in CMP, ν>1 means underdispersion (variance < mean). Yes.
- κ_ℓ all above zero => positive dependence between home and away yellows [PAGE 27].
- League effects boxplots [PAGE 28], referee posterior HDIs [PAGE 29], top/tail referees table [PAGE 30], top/tail teams table [PAGE 31].
- Model checking pages 32-33 (frequency histograms but hard to read exact values).

Gray zones / multi-hop traps:
- The data span COVID (no fans) but also rule changes; confounding between pandemic period and time trends [PAGE 6, PAGE 14].
- Referee effects are nested within leagues? The model has θ_i for each referee, but referees work in specific leagues. Sum-to-zero within each league [PAGE 25]. This means cross-league comparability of referee effects is limited unless league effects are additive on log scale.
- The CMP look-up table domain µ∈[0,19], ν∈[0,10] [PAGE 20]. If posterior means exceed µ=19 or ν outside [0,10], bilinear interpolation breaks down / extrapolation. Given yellow card means are ~1.6-2.49 [PAGE 8], µ=19 is far above, so probably safe for marginal means, but linear predictor with random effects could push individual cells higher? Probably not for yellow cards, but it's a boundary regime.
- Frank copula parameter κ: as κ→0, independence; κ→∞ comonotonicity; κ→-∞ countermonotonicity. They restrict κ>0? They say HDIs above zero. Singularity at κ=0? The formula has e^κ -1 in denominator, which is 0 at κ=0, but limit is independence copula uv. Numerical instability near κ=0.
- MCMC: 10K iterations ≈20 minutes [PAGE 25]. Convergence diagnostics not shown in source. Semi-informative priors for league/referee, vaguer for dispersion/copula [PAGE 25]. Prior sensitivity not reported.
- The "top referees" table ranks by E(e^θ) [PAGE 30]. Since θ is log multiplicative effect, e^θ is rate ratio. But ranking referees by posterior mean of e^θ ignores uncertainty (SD shown). Overlapping intervals likely.
- Small counts and underdispersion: CMP handles it, but the normalizing constant G∞ is an infinite series; truncation error [PAGE 17].
- Kendall's τb around 0.08-0.18 [PAGE 10] indicates weak positive dependence, but the joint probability ratios show strong dependence in upper tails (e.g., ≥5 home and ≥5 away ratio 2.18) [PAGE 11]. This suggests tail dependence not captured by linear correlation; Frank copula has no tail dependence (it's symmetric, no tail dependence). This is a model misspecification gray zone: Frank copula cannot capture upper tail dependence, yet the data suggest it in high-card games.
- The empirical ratio table [PAGE 11] shows ratios >1 in upper-right and lower-left corners, <1 in some off-diagonals, indicating positive dependence but also possible zero-inflation or clustering. They mention zero inflation can be added but don't report if they did [PAGE 23].
- Home effect reduction by 10%, no fans 13%, interaction 1.13 "essentially removing the home effect completely" [PAGE 27]. Multiplicative: 0.90 * 1.13 ≈ 1.017. So behind closed doors, home advantage disappears. But this is an ecological inference about referee behavior without controlling for match intensity, tackles, etc. [PAGE 14 lists covariates they would like but may not have].

<SOURCE_OPERATORS_AND_EQUATIONS>: Need formal LaTeX, units, page citations, breakdown, assumptions, exact singularity/breakdown regimes.

I will list:
- Data: N ≈ 7.5K matches, 2 observations/match => n ≈ 15,000 yellow card counts. k=129 teams, m=171 referees. Seasons 2018/19–2021/22 [PAGE 6].
- League means/variances [PAGE 8] in a table-like LaTeX array.
- Underdispersion condition: Var(X) < E[X] => ν > 1 for CMP [PAGE 8, PAGE 17].
- Kendall's τb table [PAGE 10].
- Empirical odds ratio-ish table: R(y_h, y_a) = \hat{P}(Y_h=y_h, Y_a=y_a) / [\hat{P}(Y_h=y_h)\hat{P}(Y_a=y_a)] [PAGE 11].
- CMP PMF [PAGE 17].
- Normalizing constant G∞ [PAGE 17].
- Special cases: Poisson ν=1, Geometric ν=0, Bernoulli ν→∞ [PAGE 17].
- Mean parameterization: µ = Σ r λ^r / ((r!)^ν G) [PAGE 18].
- Implicit equation for λ: Σ (r - µ) λ^r / (r!)^ν = 0 [PAGE 18].
- Look-up table: µ ∈ [0,19], ν ∈ [0,10], step Δ=0.01, bilinear interpolation [PAGE 20]. Complexity O(1) lookup vs O(nth-order polynomial) solve.
- Linear predictor [PAGE 21]: log(µ_ijk) = ...
- Referee/team effects: θ_i, γ_j, sum-to-zero within league [PAGE 21, 25].
- Dispersion: ψ_ℓ = log(ν_ℓ), ℓ=1..5 [PAGE 21].
- Frank copula [PAGE 23]: C(u,v;κ).
- Sklar's theorem [PAGE 23].
- Association varies by league: κ_ℓ [PAGE 24].
- MCMC: 10^4 iterations, ~20 min [PAGE 25].
- Results: rate ratios exp(β_home) = 0.90 (0.88,0.94), exp(β_nofans)=0.87 (0.83,0.92), exp(β_int)=1.13 (1.03,1.22) [PAGE 27]. Need to clarify these are posterior means of exponentiated coefficients or coefficients on multiplicative scale.
- ν_ℓ > 1 (underdispersion) [PAGE 27].
- κ_ℓ > 0 (positive dependence) [PAGE 27].
- Top referee: Alejandro Hernández, E(e^θ)=1.27, SD=0.07 [PAGE 30]. Bottom: Manuel Gräfe, 0.77, SD=0.05 [PAGE 30].
- Teams: Paderborn 1.31, Liverpool 0.73 etc [PAGE 31].

Assumptions:
- Conditional independence given covariates and random effects? Copula introduces dependence.
- Exchangeability of referees within league for priors.
- Sum-to-zero identifiability.
- Look-up table bounds not exceeded.
- Frank copula adequate (no tail dependence).

Singularity/breakdown:
- κ=0 in Frank copula denominator e^κ-1 = 0; limit is independence but numerical cancellation.
- ν→∞ Bernoulli degenerates; ν→0 Geometric.
- G∞ infinite series truncation for small µ, ν [PAGE 19 says approximation poor for small µ and ν].
- µ outside [0,19] or ν outside [0,10] => extrapolation beyond lookup table [PAGE 20].
- Overdispersion not present (ν>1), so CMP's underdispersion capacity is used; if some league had ν<1, interpretation flips.
- MCMC effective sample size unknown; 10K may be insufficient for high-dimensional random effects (171+129 parameters).

<RETROCAUSAL_GENEALOGY>: Historical lineage and multi-week traps.
- Queueing theory origin of CMP 1962 [PAGE 15].
- Little footprint prior to 2005, recent traction [PAGE 15].
- Previous work: bivariate Poisson and negative binomial models found refereeing bias in EPL 1996-2003 [PAGE 4].
- Ordered probit regression Bundesliga: yellow/red cards reduce chance of victory [PAGE 4].
- disciplinary points, international soccer, English domestic soccer using copulas [PAGE 22].
- Sklar 1959 (implied by [?] citation) [PAGE 23].
- Huang hybrid bisection/Newton-Raphson [PAGE 19].
- Ribeiro et al. asymptotic approximation [PAGE 19].
- Multi-week traps: Seasonal scheduling, referee assignments not random (referees assigned to high-profile matches), COVID-19 lockdowns vs. return to fans, rule changes over 2018-2022, team effects confounded with league and referee (big teams get different referees?). Also the "multi-week" aspect: referee consistency over a season vs. within a match; home effect changes over time due to pandemic (before/during/after) [PAGE 6].
- Gray zone: The paper does not model match-level covariates (tackles, fouls, score, game state), so referee effects may capture team style or match context rather than referee consistency per se [PAGE 14].

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Referees under pressure (crowd presence) regress to stricter or lenient norms? Home effect 0.90 (10% reduction in cards at home? Wait, "being at home is 0.90, i.e. 10% reduction in the rate". Does this mean home teams receive 10% fewer yellow cards? Or referees show 10% fewer cards when home team? Need to interpret. β_6 I(Home=1) where Home is for the team receiving cards? The model is for yellow cards issued to team j at home (k=1) or away (k=2). So Home indicator likely refers to the team being home. So home teams get fewer cards? That's a home advantage in discipline. Or maybe it's cards shown to home team vs away team. Let's read: "Denoting the yellow cards issued by referee i to team j at home (k=1) or away (k=2)". So k indexes home/away team. β_6 I(Home_ijk=1). So if k=1 (home team), there's an effect. Posterior mean 0.90 multiplicative => home teams receive ~10% fewer yellow cards than away teams, ceteris paribus. That's a home refereeing bias in favor of home teams (fewer cards). Then no fans: 0.87 (13% reduction overall?). Interaction 1.13 removes home effect. So behind closed doors, home teams no longer get fewer cards; the home advantage in discipline disappears. This suggests crowd influence on referees.
- Counter-trap: If a referee knows they are being analyzed for consistency, they may adjust behavior (observer effect/Hawthorne). Teams with high card rates (Paderborn 1.31) may adapt playing style to avoid cards, creating a feedback loop.
- Clock: The 2018/19-2021/22 window includes pre-COVID, COVID (closed doors), post-COVID. The clock of season fatigue: card rates may drift over the season; model includes changes over time as a desired covariate but may not be fully specified [PAGE 14]. Also referee career effects: younger vs older referees not modeled.

I need to frame this as Recursive Theory of Mind: referees modeling teams modeling referees. Crisis habit regression: under crisis (pandemic, no fans), referees revert to baseline (no home bias). Counter-trap: teams anticipate referee tendencies and modify tackling. Clock: temporal drift across seasons and match minutes (not modeled).

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical layer: Soccer is continuous-time, 11v11, ball out of play, fouls are discrete events. Yellow cards are administrative sanctions, not physical events. The count data ignores match tempo, fouls, tackles, injury stoppages [PAGE 14]. Veto: Without match event data, cannot disentangle referee propensity from team fouling propensity.
- Biomechanical: Player fatigue, sprint distance, high-intensity actions not included. Late-game tackles more likely to be carded; not modeled [PAGE 14 changes over time due to rule changes/game focus]. Veto: A team pressing high may accumulate cards due to physical fatigue, misattributed to referee.
- Weather: Rain, heat, pitch condition affect tackle timing and slip-related fouls. Not in model covariates [PAGE 14]. Veto: Cold/wet evenings may increase card rates independently of referee.
- Crowd: No fans due to COVID [PAGE 6, 14]. This is included as NoFans and interaction, but stadium acoustics, crowd density, proximity to pitch not modeled.
- Adjudication: The model adjudicates between home effect and no-fans effect via interaction, but cannot veto physical match-context confounders.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning via Verifiable Rewards? Or some framework. I need to create 3 verifiable counterfactual veto scenarios. They should be testable/falsifiable predictions.

Scenario 1: Counterfactual: Remove crowd effect (set NoFans=1 for all matches in 2018/19). Prediction: Home-team card rate ratio moves from 0.90 toward 1.0 (the interaction term). Specifically, if home effect β_h = log(0.90) ≈ -0.105 and interaction β_int = log(1.13) ≈ 0.122, then behind closed doors the home multiplier is exp(β_h + β_int) ≈ 0.90*1.13 ≈ 1.017. Thus veto scenario: If a match is behind closed doors, the home-team disciplinary advantage should vanish (posterior probability > 0.95 that rate ratio ∈ [0.98, 1.06]). Verifiable by comparing EPL matches before/during COVID.

Scenario 2: Counterfactual: Referee with high card propensity (Alejandro Hernández, E(e^θ)=1.27) officiates a low-card team (Liverpool, E(e^γ)=0.73). Prediction: Expected yellow cards for that team under that referee ≈ baseline × 1.27 × 0.73 × league factor. If actual observed cards deviate by >2 SD of posterior predictive, veto the assumption that referee and team effects are additive and separable. This tests additivity.

Scenario 3: Counterfactual: Frank copula vs upper-tail dependence. The empirical joint probability ratio at (≥5 home, ≥5 away) is 2.18 [PAGE 11], suggesting upper-tail dependence. Frank copula has zero tail dependence. Veto: Simulate from fitted Frank copula; if the empirical frequency of joint high-card games (≥5 each) exceeds the 99% posterior predictive interval under the model, reject the Frank copula in favor of a copula with upper tail dependence (e.g., Clayton or t-copula). This is verifiable via posterior predictive checks.

Need to write all this with exact XML tags, >=1000 words total. No betting lines. No toy equations. Use formal LaTeX.

Let me ensure word count. I'll aim for roughly:
THINK_TRACE: 500 words
SOURCE_OPERATORS: 400 words
RETROCAUSAL: 300 words
RECURSIVE_TOM: 300 words
CROSS_LAYER: 250 words
RLVR: 250 words
Total ~2000 words, safe.

Need to include verbatim quotes where useful and [PAGE N] markers.

Check constraints: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." I won't mention any betting terms. "odds ratio" might be close but it's not betting odds; however to be safe, avoid the word "odds" entirely or use "probability ratio". I'll avoid "odds ratio".

"ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." All equations must come from the paper or be standard math defined clearly.

Citations: [PAGE N] format.

Let's draft carefully.

Structure:

<THINK_TRACE>
...
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTUAL_VETOES>

I will now write the content.

THINK_TRACE content plan:
- Start with data architecture: 7.5K matches, double observation, 129 teams, 171 referees, 4 seasons including COVID [PAGE 6].
- Descriptive underdispersion: means and variances [PAGE 8]. Since mean > variance, Poisson is inappropriate; underdispersion is real.
- Dependence: Kendall's τb [PAGE 10], joint probability ratios [PAGE 11]. Upper tail ratios >1 indicate clustered high-card games.
- Modeling requirements [PAGE 13]: bivariate count, bidispersion, standard inference, CPU comparable.
- CMP choice and mean parameterization [PAGE 17-19]. Computational trick: lookup table [PAGE 20].
- Full model specification [PAGE 21-24], copula [PAGE 23].
- Results and interpretation [PAGE 27-31].
- Gray zones: back-transformation of log coefficients to rate ratios [PAGE 21 vs PAGE 27]; domain boundaries of lookup table [PAGE 20]; Frank copula lacks tail dependence despite empirical evidence [PAGE 11 vs PAGE 23]; prior sensitivity and MCMC convergence unreported [PAGE 25]; confounders absent (fouls, tackles, match state) [PAGE 14].
- Multi-hop: the home effect vanishes behind closed doors (0.90 × 1.13 ≈ 1.017), implying crowd presence is a mechanism, but without match-event covariates this remains an ecological inference.

SOURCE_OPERATORS: list equations with page citations. I'll format them nicely.

RETROCAUSAL_GENEALOGY:
- 1962 queueing origin CMP [PAGE 15].
- 1996-2003 EPL bias bivariate Poisson/NB [PAGE 4].
- Bundesliga ordered probit cards reduce victory chance [PAGE 4].
- Sklar theorem [PAGE 23].
- Copulas in disciplinary points/international/domestic soccer [PAGE 22].
- Multi-week traps: season-long referee assignments, COVID phases, rule changes, team-referee confounding.
- Gray zone: referee effects sum-to-zero within league, so cross-league ranking is on a league-specific latent scale; not directly comparable across leagues without standardization.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: no-fans condition removes crowd pressure; home effect disappears (0.90*1.13 ~ 1). Referees regress to baseline neutrality when the social cue (crowd) is removed [PAGE 27].
- Counter-trap: teams with high γ (Paderborn 1.31) may adapt tackling to avoid cards; referees anticipating team style may card more. Feedback loop not modeled because γ is static across seasons.
- Clock: four-season window spans pre-COVID, closed doors, return; model lacks minute-by-minute or match-week temporal drift, so fatigue or end-of-season desperation confounds referee/team effects.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: count of cards does not equal count of fouls. Missing match events (tackles, fouls, advantage) [PAGE 14]. Veto: cannot attribute card rate to referee without controlling for infraction rate.
- Biomechanical: player fatigue, sprint load, late-game challenges omitted [PAGE 14 changes over time/game focus]. Veto: high press teams fatigue and foul late, misattributed to referee strictness.
- Weather: temperature, precipitation, pitch quality omitted [PAGE 14]. Veto: slippery conditions increase sliding tackles and cards independent of referee.
- Crowd acoustics/proximity: NoFans is binary; density, distance to pitch, home crowd noise not modeled. Veto: partial crowd measure.
- Adjudication: model can separate home vs no-fans via interaction but cannot veto omitted physical confounders.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios with predictions.

1. Crowd removal counterfactual:
- Intervention: Set NoFans=1 for all EPL matches in 2018/19 and 2021/22 (pre/post pandemic with fans) while holding league, referee, team fixed.
- Prediction from model: home-team card multiplier = exp(β_home + β_interaction) = 0.90 × 1.13 ≈ 1.017 (95% HDI roughly [0.88×1.03, 0.94×1.22] = [0.906, 1.147]). Veto if posterior predictive check shows the home-team rate ratio remains <0.95 behind closed doors (i.e., crowd is not the mechanism).
- Verifiable: Compare card rates for home teams in EPL matches played behind closed doors (2020/21) vs same stadiums with fans.

2. Additivity of referee-team effects:
- Intervention: Assign Alejandro Hernández (top referee, E(e^θ)=1.27) [PAGE 30] to officiate Liverpool (low-card team, E(e^γ)=0.73) [PAGE 31] in a La Liga match (counterfactual cross-league).
- Prediction: multiplicative card rate ≈ 1.27 × 0.73 × league factor. If actual card count falls outside posterior predictive interval derived from additive log model, veto additivity.
- Verifiable: Use posterior predictive simulation; compare observed vs simulated under the fitted model.

3. Copula tail dependence veto:
- Intervention: Examine matches with ≥5 yellow cards to both home and away teams.
- Empirical ratio: 2.18 [PAGE 11]. Frank copula has no upper-tail dependence.
- Prediction: Simulate 10,000 datasets from fitted model. If empirical frequency of joint ≥5 events lies outside the 99% posterior predictive interval under Frank copula, veto Frank copula and replace with copula allowing tail dependence (e.g., Student-t).
- Verifiable: Posterior predictive p-value.

Also include units: counts are dimensionless, rates are cards per match (dimensionless intensity), coefficients are log-rate ratios (dimensionless), ν dimensionless, κ dimensionless.

Word count check: I need to write enough. Let's compose.

Make sure to not mention betting terms. Avoid "odds". Use "probability ratio" or "rate ratio".

Double-check quotes. Use verbatim from source where possible.

Quote examples:
Page 4: "Previous work (using bivariate Poisson and negative binomial models) found evidence of refereeing bias in the English Premier League in the period 1996-2003"
Page 6: "This gives ≈7.5K matches with two observations for each match, played between k = 129 teams, overseen by m = 171 referees."
Page 8: "The mean exceeds the variance for each league =⇒ underdispersion"
Page 13: "A bivariate count data regression model capable of handling both over and underdispersion"
Page 17: PMF equation.
Page 21: linear predictor.
Page 23: Frank copula equation.
Page 27: results.
Page 30: table.

Now I'll write the final response. Ensure XML tags are exact and closed. No markdown outside? The user just wants the sections. I'll output only the XML sections.

Let's write.

Need to be careful: The user said ">= 1,000-WORD DEPTH across these exact XML sections". So total words across all sections must be >=1000. I'll write generously.

Proceed.
</NATIVE_REASONING>

<THINK_TRACE>
The data architecture described on [PAGE 6] comprises approximately 7.5K matches from the Big 5 men’s European soccer leagues across the 2018/19 to 2021/22 seasons, with two count observations per match (home team yellow cards and away team yellow cards), k = 129 teams, and m = 171 referees. This panel spans the pre-COVID era, the behind-closed-doors period, and the return of spectators, which creates a natural experiment for crowd influence but also confounds season effects with public-health regimes. The exploratory analysis on [PAGE 8] reports league-specific sample means and variances: EPL mean 1.60, variance 1.21; Ligue 1 mean 1.91, variance 1.28; Bundesliga mean 1.82, variance 1.30; Serie A mean 2.36, variance 1.37; La Liga mean 2.49, variance 1.50. Because the mean exceeds the variance in every league, the counts are underdispersed relative to a Poisson baseline, which motivates the Conway-Maxwell-Poisson (CMP) family rather than the negative binomial, which can only accommodate overdispersion [PAGE 16].

Dependence between the two margins is established on [PAGE 10] through Kendall’s τb, which is positive and statistically significant in all five leagues (EPL 0.15, L1 0.08, BL 0.18, SA 0.12, LL 0.17; all p-values < 0.001). More informative is the empirical joint-to-independent probability ratio table on [PAGE 11]: in the upper tail, the ratio for (≥5 home yellows, ≥5 away yellows) is 2.18, and for (4 home, ≥5 away) it is 1.78, while cells in the lower-left corner are depressed (e.g., (0 home, 0 away) ratio 2.07 but (0 home, ≥5 away) ratio 0.41). This pattern indicates positive association with clustering in high-card games, yet a standard Frank copula—as adopted on [PAGE 23]—possesses no upper-tail dependence, creating a potential misspecification gray zone that the paper does not explicitly audit.

The modeling requirements on [PAGE 13] demand a bivariate count regression capable of bidispersion, standard covariate inference, and computational scalability comparable to bivariate Poisson or negative binomial implementations. The CMP distribution, introduced in 1962 for queueing [PAGE 15], has probability mass function Pr(X = x | λ, ν) = λ^x / ((x!)^ν G∞(λ, ν)), with ν = 1 reducing to Poisson, ν = 0 to Geometric, and ν → ∞ to Bernoulli [PAGE 17]. Mean parameterization introduces an implicit nth-order polynomial for λ given µ and ν [PAGE 18], solved in practice through pre-computed look-up tables with bilinear interpolation over µ ∈ [0, 19] and ν ∈ [0, 10] at step size 0.01 [PAGE 20]. If posterior means push outside this rectangular domain, bilinear extrapolation replaces interpolation and the stated ≈20 second table-creation cost no longer guarantees accuracy.

The full hierarchical specification on [PAGE 21] models log(µ_ijk) as a function of league effects, home indicator, no-fans indicator, their interaction, referee random effect θ_i, and team random effect γ_j, with sum-to-zero constraints within leagues [PAGE 25]. Dispersion is league-specific via ψ_ℓ = log(ν_ℓ) [PAGE 21], and dependence is induced by a league-varying Frank copula parameter κ_ℓ [PAGE 24]. Results on [PAGE 27] report multiplicative rate ratios: home effect 0.90 (0.88, 0.94), behind-closed-doors effect 0.87 (0.83, 0.92), and interaction 1.13 (1.03, 1.22). Because the linear predictor is logarithmic [PAGE 21], these reported values must be interpreted as exponentiated coefficients; the back-transformation from log-scale to rate-ratio scale is a gray zone in the presentation. All posterior HDIs for ν_ℓ lie above one, confirming underdispersion [PAGE 27], and all κ_ℓ lie above zero, confirming positive home-away dependence [PAGE 27]. Referee and team posterior effects are summarized on [PAGE 30] and [PAGE 31], respectively, with Alejandro Hernández at the top (E(e^θ) = 1.27, SD = 0.07) and Manuel Gräfe at the bottom (0.77, SD = 0.05); Paderborn tops teams (1.31) while Liverpool sits near the bottom (0.73).

Critical gray zones remain. The model lacks match-level event covariates such as fouls, tackles, or game state, which are listed as desirable but absent on [PAGE 14]; thus referee effects may partially capture team playing style or match context rather than referee consistency alone. MCMC convergence diagnostics are not reported, only that 10K iterations take ≈20 minutes [PAGE 25], leaving the effective sample size for 171 referee effects and 129 team effects unverified. Finally, the empirical joint-probability ratios on [PAGE 11] suggest upper-tail clustering that a Frank copula cannot represent, so the positive κ_ℓ finding may be capturing average association while missing tail behavior relevant to high-stakes, high-card matches.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All quantities below are dimensionless counts or probabilities unless stated. Page citations refer to the provided 35-page source.

Data structure [PAGE 6]:
N \approx 7{,}500 matches, two observations per match \Rightarrow n \approx 15{,}000 yellow-card counts.
k = 129 teams; m = 171 referees (EPL 27, L1 32, BL 30, SA 56, LL 26).
Seasons: 2018/19–2021/22, including pre-COVID, behind-closed-doors, and post-restriction periods.

League descriptive statistics [PAGE 8] (cards per match):
\begin{array}{l|cc}
\text{League} & \bar{x} & s^2 \\
\hline
\text{EPL} & 1.60 & 1.21 \\
\text{L1} & 1.91 & 1.28 \\
\text{BL} & 1.82 & 1.30 \\
\text{SA} & 2.36 & 1.37 \\
\text{LL} & 2.49 & 1.50
\end{array}
Underdispersion condition: \operatorname{Var}(X) < \operatorname{E}[X] \forall \text{ leagues}.

Kendall’s \tau_b for home–away yellow-card pairs [PAGE 10]:
\tau_b \in \{0.15, 0.08, 0.18, 0.12, 0.17\}, all p < 0.001.

Empirical dependence ratio [PAGE 11]:
R(y_h, y_a) = \dfrac{\widehat{\Pr}(Y_h = y_h, Y_a = y_a)}{\widehat{\Pr}(Y_h = y_h)\,\widehat{\Pr}(Y_a = y_a)}.
Notable cell: R(\geq 5, \geq 5) = 2.18; R(0, \geq 5) = 0.41.

CMP probability mass function [PAGE 17]:
\Pr(X = x \mid \lambda, \nu) = \dfrac{\lambda^x}{(x!)^\nu \, G_\infty(\lambda, \nu)},\quad x = 0,1,2,\dots,\ \lambda > 0,\ \nu \geq 0,
G_\infty(\lambda, \nu) = \sum_{r=0}^{\infty} \dfrac{\lambda^r}{(r!)^\nu}.
Special cases: Poisson (\nu = 1), Geometric (\nu = 0), Bernoulli (\nu \to \infty). Units: \lambda is a rate scale; \nu is a dimensionless dispersion index. \nu > 1 implies underdispersion.

Mean-parameterized CMP [PAGE 18–19]:
\mu = \sum_{r=0}^{\infty} \dfrac{r \lambda^r}{(r!)^\nu G(\lambda,\nu)}
\Longleftrightarrow
\sum_{r=0}^{\infty} (r - \mu) \dfrac{\lambda^r}{(r!)^\nu} = 0.
For fixed \mu, \nu, \lambda is the unique positive real root of an nth-order polynomial (Descartes’ rule of signs).

Computational operator [PAGE 20]:
Look-up table for \lambda(\mu, \nu) over \mu \in [0, 19], \nu \in [0, 10], step \Delta = 0.01, with bilinear interpolation. Breakdown regime: extrapolation beyond \mu = 19 or \nu = 10 invalidates the interpolation guarantee; asymptotic approximation of G_\infty is poor for small \mu and \nu [PAGE 19].

Hierarchical linear predictor [PAGE 21]:
\log(\mu_{ijk}) = \beta^{\text{League}}_i + \beta_6 I(\text{Home}_{ijk}=1) + \beta_7 I(\text{NoFans}_{ijk}=1) + \beta_8 I(\text{Home}_{ijk}=1) I(\text{NoFans}_{ijk}=1) + \theta_i + \gamma_j.
\theta_i: referee effect, i = 1,\dots,171; \gamma_j: team effect, j = 1,\dots,129.
Dispersion: \psi_\ell = \log(\nu_\ell), \ell = 1,\dots,5.
Identifiability: sum-to-zero constraints on referees and teams within each league [PAGE 25].

Frank copula [PAGE 23], via Sklar’s theorem F(y_1,y_2) = C\{F_1(y_1), F_2(y_2)\}:
C(u,v \mid \kappa) = \dfrac{1}{\kappa} \log\!\left( 1 + \dfrac{(e^{\kappa u} - 1)(e^{\kappa v} - 1)}{e^{\kappa} - 1} \right).
\kappa is dimensionless association. Singularity at \kappa = 0 (removable; limit is independence copula uv). League-varying association: \kappa_\ell, \ell = 1,\dots,5 [PAGE 24].

MCMC computation [PAGE 25]: 10{,}000 iterations, \approx 20 minutes; semi-informative priors for league/referee effects, vaguer priors for dispersions and copula parameters.

Reported posterior rate ratios [PAGE 27] (exponentiated log-scale coefficients):
Home: 0.90, HDI (0.88, 0.94).
No fans: 0.87, HDI (0.83, 0.92).
Interaction: 1.13, HDI (1.03, 1.22).
Dispersion: HDIs for \nu_\ell all above 1 \Rightarrow underdispersion.
Copula: HDIs for \kappa_\ell all above 0 \Rightarrow positive dependence.

Extreme effects [PAGE 30–31]:
Referee max: Alejandro Hern\'andez, \operatorname{E}(e^\theta) = 1.27, SD = 0.07.
Referee min: Manuel Gr\"afe, \operatorname{E}(e^\theta) = 0.77, SD = 0.05.
Team max: Paderborn, \operatorname{E}(e^\gamma) = 1.31, SD = 0.12.
Team min (shown): Liverpool, \operatorname{E}(e^\gamma) = 0.73, SD = 0.06.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The CMP distribution enters this literature through a non-soccer lineage: first introduced in 1962 in queueing theory, with little statistical footprint prior to 2005 and recent traction in count-data modeling [PAGE 15]. Philipson’s direct antecedents are disciplinary-bias studies using bivariate Poisson and negative binomial models that found refereeing bias in the English Premier League during 1996–2003 [PAGE 4], and Bundesliga work showing that yellow and red cards reduce the chance of victory in an ordered probit regression [PAGE 4]. The copula machinery traces to Sklar’s theorem [PAGE 23], with prior applications to disciplinary points, international soccer matches, and English domestic soccer matches; in each prior case a Frank copula was the only or preferred choice, governed by association parameter \kappa [PAGE 22].

A multi-week trap is embedded in the four-season window. The data span 2018/19 through 2021/22 [PAGE 6], crossing pre-COVID normality, the behind-closed-doors shock, and the phased return of crowds. Referee assignments are not randomly allocated across matchweeks; high-profile fixtures tend to receive senior referees, and team effects may be confounded with referee effects because certain referees are repeatedly assigned to matches involving high-card or low-card teams. Because referee and team effects are constrained to sum to zero within each league [PAGE 25], the resulting latent scales are league-identified but not automatically cross-league comparable; ranking Alejandro Hernández (La Liga) against M Dean (EPL) on the raw multiplicative scale assumes additive league effects on the log scale, which is plausible but untested within the reported output.

A second multi-week trap is temporal drift. The model permits changes over time due to rule changes or game focus as a desired covariate [PAGE 14], but the reported specification does not include a match-week or calendar-time slope. Consequently, end-of-season desperation, fixture congestion, or mid-season rule emphasis cannot be separated from persistent referee strictness. The “before, during, and after” Covid-19 structure [PAGE 6] is handled through the NoFans indicator and its interaction with home status, but this binary switch treats all behind-closed-doors matches as exchangeable regardless of whether they occurred early or late in the pandemic sequence.

Historical gray zone: previous work found refereeing bias in the EPL using bivariate Poisson and negative binomial models [PAGE 4], yet those distributions cannot represent underdispersion. If the 1996–2003 EPL data were underdispersed like the 2018–2022 Big 5 data here, those earlier models may have been misspecified, and the direction or magnitude of previously reported bias could be an artifact of using overdispersion-only families. This paper’s CMP approach therefore retraces and potentially revises the causal genealogy of referee-bias inference.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory of mind here involves three layers: referees inferring team intent, teams inferring referee thresholds, and the modeler attempting to disentangle both from card counts alone.

Crisis habit regression: Under normal crowd conditions, referees exhibit a home-team leniency of approximately 10% (rate ratio 0.90) [PAGE 27]. When the social cue of the crowd is removed (NoFans = 1), the overall card rate drops by 13% (0.87), and the interaction term (1.13) essentially cancels the home effect: 0.90 \times 1.13 \approx 1.017. This is consistent with a crisis-habit regression in which referees, stripped of crowd pressure, regress toward a baseline neutrality and no longer systematically shield home teams. The recursive layer is that referees may model crowd reaction as part of their decision utility; when that audience vanishes, their internal model of expected backlash collapses, and carding behavior reverts.

Counter-trap: Teams occupy the second-order belief layer. A team with a high posterior card propensity, such as Paderborn (\operatorname{E}(e^\gamma) = 1.31) [PAGE 31], may adapt its tackling intensity or positional risk in anticipation of referee strictness, thereby reducing actual fouls and cards. Conversely, a referee with a high posterior strictness, such as Alejandro Hernández (\operatorname{E}(e^\theta) = 1.27) [PAGE 30], may anticipate that certain teams commit more infractions and adjust the threshold upward. Because the model treats \theta_i and \gamma_j as static additive effects across seasons [PAGE 21], it cannot capture this within-season adaptation loop. The result is a potential feedback trap: team effects absorb referee-induced behavioral changes, and referee effects absorb team-induced style changes, leaving the causal direction unidentified.

Clock: The observational clock runs from 2018/19 to 2021/22 [PAGE 6], but the model lacks minute-resolution or match-week temporal covariates. Physical fatigue, late-game tackle desperation, and end-of-season standings pressure are omitted [PAGE 14 lists “changes over time” as a desired but not fully specified covariate]. If card rates systematically rise in the final 15 minutes or in the final matchweek, and if certain referees officiate more high-stakes late-season fixtures, the referee effect \theta_i will absorb temporal match-context variance. The clock therefore aliases referee consistency with scheduling and season-stage confounding.

Synthesis: The model estimates what referees do, not why they do it. Recursive reasoning suggests that referee consistency is an equilibrium outcome of referee-team mutual modeling, but the additive CMP-copula framework identifies only the reduced-form reduced-form association, not the equilibrium fixed point.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The response variable is a count of yellow cards, not a count of fouls, tackles, or dangerous play. Yellow cards are administrative sanctions conditional on an infraction having been observed and judged punishable. The model contains no match-event covariates (fouls, tackles, advantage played, score state, minute of incident) [PAGE 14]. Veto: Without controlling for the underlying rate of infractions, a high card count cannot be adjudicated as referee strictness versus team indiscipline. A referee may appear strict simply because the teams committed more fouls.

Biomechanical layer: Player fatigue, sprint load, high-intensity accelerations, and late-match physical deterioration are absent [PAGE 14 acknowledges interest in changes over time and game focus but does not report their inclusion]. A team employing a high-pressing system may accumulate cards in the final third of matches as fatigue degrades tackle timing. Veto: The team effect \gamma_j may capture tactical and biomechanical profiles rather than stable disciplinary identity, and referee effects may be confounded by the physical profiles of the teams they officiate.

Weather layer: Temperature, precipitation, wind, and pitch condition influence slipping, sliding tackles, and ball behavior, all of which affect the frequency of sanctionable challenges. None of these appear as covariates [PAGE 14 lists desired covariates but the fitted model includes only league, home, no-fans, interaction, referee, and team terms]. Veto: A cold, wet evening in the Bundesliga may mechanically raise sliding-tackle frequency and thus yellow cards independently of the officiating referee.

Crowd-acoustics layer: The NoFans indicator is binary [PAGE 21], but crowd density, proximity of supporters to the pitch, stadium architecture, and noise decibel level are not modeled. Veto: The estimated interaction (1.13) may be capturing a mixture of true crowd effects and unobserved stadium-specific variables that covary with the pandemic period.

Adjudication outcome: The model can separate the home effect from the no-fans effect via the interaction term [PAGE 27], but it cannot veto any of the above physical, biomechanical, or weather confounders. The causal claim that referees are “consistent” or “inconsistent” is therefore conditional on the assumption that match context, team infractions, and environmental factors are either balanced across referees or negligible. That assumption is not verifiable from the reported cards-only data.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-via-verifiable-rewards (RLVR) counterfactual veto scenarios. Each specifies an intervention, a model-based prediction, a falsification rule, and a verification route.

Veto Scenario 1 — Crowd-removal counterfactual.
Intervention: For all EPL matches in seasons with fans (2018/19, 2019/20 pre-suspension, 2021/22), impose the counterfactual NoFans = 1 while holding league, referee, team, and match covariates fixed.
Prediction from fitted model: The home-team card multiplier becomes \exp(\beta_6 + \beta_8) = 0.90 \times 1.13 \approx 1.017, with an approximate HDI obtained by multiplying endpoints: [0.88 \times 1.03, 0.94 \times 1.22] = [0.906, 1.147]. Thus the home disciplinary advantage should vanish behind closed doors.
Falsification rule: If the posterior predictive check for behind-closed-doors EPL matches shows the home-team rate ratio remaining below 0.95 with posterior probability > 0.95, then the interaction term does not capture the crowd mechanism and the NoFans specification is vetoed.
Verification route: Compare observed home-team yellow-card rates in EPL matches played behind closed doors (2020/21) against the same stadiums and fixtures with spectators, conditioning on referee and team identities.

Veto Scenario 2 — Additivity of referee and team effects.
Intervention: Assign Alejandro Hernández (top referee, \operatorname{E}(e^\theta) = 1.27, SD = 0.07 [PAGE 30]) to officiate a match involving Liverpool (low-card team, \operatorname{E}(e^\gamma) = 0.73, SD = 0.06 [PAGE 31]) under La Liga conditions, generating a counterfactual cross-league matchup.
Prediction: Under the additive log-linear predictor [PAGE 21], the expected card-rate multiplier for that team-referee cell is approximately 1.27 \times 0.73 \times \exp(\beta^{\text{La Liga}}), ignoring higher-order interactions.
Falsification rule: Simulate 10,000 posterior predictive card counts for this cell under the fitted model. If the observed card count (from any actual Hernández–Liverpool match, if available, or from a held-out high-strictness-referee/low-card-team pairing) lies outside the 99% posterior predictive interval, veto the assumption that referee and team effects are additively separable on the log scale.
Verification route: Use posterior predictive simulation and check coverage of extreme referee–team combinations in held-out matches.

Veto Scenario 3 — Frank copula tail-dependence veto.
Intervention: Restrict attention to matches in which both home and away teams receive \geq 5 yellow cards (the upper joint tail).
Empirical evidence: The joint-to-independent probability ratio for (\geq 5, \geq 5) is 2.18 [PAGE 11], indicating clustering in extreme joint-card games. The Frank copula has zero upper-tail dependence by construction.
Prediction: Generate 10,000 replicated datasets from the fitted CMP–Frank model. Under the null that the Frank copula is adequate, the empirical frequency of joint (\geq 5, \geq 5) events should fall within the central 99% posterior predictive interval.
Falsification rule: If the observed frequency of joint \geq 5 card matches exceeds the 99.5th percentile of the simulated distribution, reject the Frank copula and replace it with a tail-dependent copula (e.g., Student-t or Clayton) because the model systematically underpredicts high-card co-occurrence.
Verification route: Posterior predictive p-value computed from the frequency of upper-tail joint events across MCMC draws.
</RLVR_COUNTERFACTUAL_VETOES>