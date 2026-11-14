---
source: "2016 An easily implemented and accurate model for predicting NCAA tournament at-large bids - B. Jay Colemana, J. Michael DuMond and Allen K. Lynch.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 22
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4528
---

<NATIVE_REASONING>
The user has provided a long source text (a research paper about predicting NCAA tournament at-large bids using a probit model). However, there is no explicit question asked. The user just says "DRIVE SOURCE: ..." and provides the text.

Given my instructions as GSE + GSI Frontier Reasoning Foundry with strict invariants, I need to produce output with the exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Constraints:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections.

Since no specific question is asked, I should treat this as a comprehensive analytical audit of the provided source paper, extracting its formal structure, equations, assumptions, breakdown regimes, and then applying the framework sections. I must cite page markers. The text has page numbers embedded (121-132). I need to map content to [PAGE N] markers.

Let me plan the response.

Structure:
- THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Discuss the model derivation, probit link function, variables, stepwise selection, AIC vs cross-validation tradeoff, complete separation, Firth bias adjustment, multicollinearity, RPI version choice, conference bias (P10), Leman et al. marquee factor, etc. Gray zones: "significance" with multicollinearity, face validity vs predictive accuracy, complete data separation, out-of-sample 2015 collapse on Dayton, etc. Must be >=400 words.
- SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Probit model: P(BID=1|X) = Φ(Xβ + ε), ε ~ N(0,1). Variables list. Equations (1), (2), (3) coefficients from Table 2. AIC formula. Leave-one-year-out cross-validation. Breakdown regimes: complete separation, p-values invalid under multicollinearity, RPI version pre-2005 vs post-2005 weighting (0.6/1.4), sample n=243, n=721, RPI ranks 20-80, BIDS37 control. Cite pages [121]-[132].
- RETROCAUSAL_GENEALOGY: Historical lineage from Coleman & Lynch (2001) -> Coleman et al. (2010) -> Coleman et al. (2011) -> this paper (2016). Shapiro et al. (2009), Paul & Wilson (2012), Leman et al. (2014). Multi-week traps: committee deliberations private, RPI formula change 2005, bubble teams, at-large vs automatic bids.
- RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Discuss how the committee regresses to historical habits (RPI reliance), counter-trap (alternate rankings like margin-of-victory metrics failed to outperform RPI), clock (time windows 1999-2013, 2009-2013, out-of-sample 2014-2015, Dayton miss).
- CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. This is a bit forced since it's sports analytics, not physical sports. But I can interpret "physical/biomechanical" as the actual game performance layer (wins/losses, road wins, strength of schedule) vs statistical selection layer. Weather veto: neutral court, road games, home/away weighting in RPI. I need to make it coherent: vetoes at the physical game layer (court location, opponent strength), statistical layer (probit assumptions), and temporal layer (selection Sunday). No betting lines.
- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I need 3 counterfactual veto scenarios where the model would fail or be vetoed, with predictions. E.g., (1) Conference realignment removes Pac-12/P10 factor validity; (2) RPI replaced by NET metric (post-2018) making RPIRANK obsolete; (3) Complete separation / small sample in a given year causing probit non-identifiability. Predictions for each.

Word count: Need >=1000 words total across XML sections. I'll aim for substantial length.

Important: No betting lines. Do not mention spreads, totals, moneylines, odds. The source text mentions wagering ($60-70M legally, $3B illegally) but I should not reproduce betting lines. I can mention financial rewards ($1.58 million per game) as that's not a betting line.

Citations: Use [PAGE N] markers. The text pages are 121-132. I'll reference them.

Let's draft carefully.

THINK_TRACE content:
- Start with objective: binary outcome BID (at-large bid yes/no).
- Sample: 243 candidates 2009-2013, RPI ranks 20-80. Also 15-year n=721 (1999-2013) minus New Mexico 1999 outlier.
- Model: probit. Latent variable y* = Xβ + u, u~N(0,1), observe BID=1 if y*>0.
- Equation (1): stepwise with p=0.10. Predictors: RPIRANK, CONFBELOW500, T25WINS, T50WINS, T100ABOVE500, ROADWIN, BIDS37. Missed 5/179 in-sample, 6/179 LOYO CV.
- Equation (2): add P10. Missed 2/179 in-sample, 5/179 CV.
- Equation (3): add T50ABOVE500. Missed 1/179 in-sample (Florida State 2011), 4/179 CV (2010, 2x2011, 2012).
- Coefficients from Table 2: Intercept -0.3082, BIDS37 3.2486***, RPIRANK -0.2558****, CONFBELOW500 -0.8265 (p=0.1012), T25WINS 2.7509****, T50WINS 1.2572***, T100ABOVE500 0.8364***, ROADWIN 0.6795**, P10 2.7759*, T50ABOVE500 1.2021*. AIC 47.702.
- Gray zones: Multicollinearity inflates SEs; p-values "not valid" per authors (page 125). Face validity prioritized over pure AIC. Complete separation with POWER6 alternate (page 128 footnote 8). Alternate rankings: 25 systems considered; none beat RPIRANK alone (AIC 116.4). STH and DCI improve AIC but not CV enough. DCI addition causes CONFBELOW500 and P10 to become insignificant (face validity hit).
- Out-of-sample 2014: 35/36, missed NC State. 2015: 33/36, missed Boise State, Dayton, UCLA. Dayton placed 48th by model vs actually last in; within 2 spots of cut line.
- Multi-hop derivation: The model inherits variable construction from Coleman et al. 2001/2010/2011. Pre-2005 RPI chosen over current RPI because AIC 116.4 vs 152.6, missed 12 vs 15 slots. This is a critical modeling assumption: committee behavior aligns with old RPI weighting (home/away equal) not new (0.6/1.4).
- Breakdown regimes: If committee switches to NET or margin-of-victory metric, model degrades. If conference realignment eliminates Pac-12 or changes automatic bid count, BIDS37 and P10 invalid. Small n per year (~36 at-large bids) leads to high variance; one miss (Florida State 2011) drives ACC significance.

I need to ensure >=400 words here.

SOURCE_OPERATORS_AND_EQUATIONS:
- LaTeX for probit: \Pr(BID_i=1 | \mathbf{x}_i) = \Phi(\mathbf{x}_i^\top \boldsymbol{\beta} + \delta \cdot \text{BIDS37}_i), \Phi(\cdot) standard normal CDF.
- Latent: y_i^* = \mathbf{x}_i^\top \boldsymbol{\beta} + \epsilon_i, \epsilon_i \sim \mathcal{N}(0,1).
- Equation (3) explicit: \hat{y}^* = -0.3082 + 3.2486 \cdot BIDS37 - 0.2558 \cdot RPIRANK - 0.8265 \cdot CONFBELOW500 + 2.7509 \cdot T25WINS + 1.2572 \cdot T50WINS + 0.8364 \cdot T100ABOVE500 + 0.6795 \cdot ROADWIN + 2.7759 \cdot P10 + 1.2021 \cdot T50ABOVE500.
- Variable definitions from Table 1: RPIRANK (overall RPI rank pre-2005 formula), CONFBELOW500 = |conference wins - conference losses| if below .500 (footnote 5 page 125: 8-10 -> 2), T25WINS, T50WINS (26-50), T100ABOVE500 (wins minus losses vs 51-100; footnote 6 page 126: 4-1 -> 3), ROADWIN, P10 dummy, T50ABOVE500 (wins above .500 vs 26-50), BIDS37 (1 for 2011-2013).
- AIC = 2k - 2ln(\hat{L}). Values: Eq1 51.758, Eq2 49.049, Eq3 47.702.
- Cross-validation: leave-one-year-out. Bids missed: Eq1 6/179, Eq2 5/179, Eq3 4/179.
- Units: RPIRANK is ordinal rank (1=best). Coefficients are in probit (z-score) units; marginal effects not reported but sign/direction interpretable. Counts are integers. BIDS37 binary. P10 binary.
- Breakdown/singularity: Complete separation (log-likelihood -> infinity, coefficients diverge) seen with POWER6 alternate (page 128). Multicollinearity -> inflated SEs, invalid t-tests (page 125). Small sample n=243 / 179 at-large slots. If RPIRANK perfectly predicts BID, probit non-identifiable.
- Page citations: [121] abstract, [122] intro, [123] literature, [124] data/variables, [125] analysis & stepwise, [126] eq1 & 15-year fit, [127] Fig1 & eq2, [128] eq3 & discussion, [129] alternate models, [130] alternate rankings, [131] out-of-sample 2014-2015, [132] conclusion & references.

RETROCAUSAL_GENEALOGY:
- Lineage: Coleman & Lynch (2001) 6-factor probit 93.7% in-sample, 94% OOS 2000-2005, 89% 2006-2008. Coleman et al. (2010) 479 candidates 1999-2008, conference bias. Coleman et al. (2011) 15-factor, 96.5% in-sample, 170/179 OOS 2009-2013. This paper 2016 extends to 15 years 1999-2013, then focuses 2009-2013. Shapiro et al. (2009) logistic, 11 stats, conference bias, no OOS. Paul & Wilson (2012) Sagarin vs RPI, committee representation not significant with Sagarin. Leman et al. (2014) 2010-2011, RPI components separate, weight on SOS ~4x winning percentage, marquee factor (Virginia Tech 28% to 86%).
- Multi-week traps: The three-week window from Selection Sunday to championship; pre-tournament multimonth projection. Bubble teams RPI 20-80. Committee turnover (staggered 5-year terms) yet decisions consistent. Historical norms: Pac-10/12 favoritism persistent 2004, 2006-2009, 2011; Big East detriment ended ~2007; MVC detriment ended ~2008; ACC favoritism 2009-2013 likely Florida State 2011 artifact.
- Causality trap: Is P10 coefficient causal bias or proxy for unobserved quality? Authors acknowledge could be proxy (footnote 7 page 126). Marquee factor (Leman) vs Pac-12 (not UCLA, only Arizona/Stanford powers) suggests not simple marquee.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under uncertainty (bubble), committee regresses to familiar heuristic: RPI (specifically pre-2005 version). Despite newer metrics available, they weight RPI heavily.
- Counter-trap: Analysts try to outsmart committee using margin-of-victory rankings (Sagarin Predictor, KenPom, LRMC). Paper shows these fail to beat RPIRANK; adding them to Eq3 doesn't improve CV enough. Counter-trap is that the "smarter" metric is the trap; the committee's sticky RPI is the equilibrium.
- Clock: Temporal validity windows shrink. 1999-2013 full fit misses 25 slots in 1999-2008 but only 5 in 2009-2013 -> regime shift. 2002-2013 CONFONCOMM insignificant; 2004-2013 Big East insignificant; 2008-2013 MVC insignificant; P10 persists. Out-of-sample 2015 Dayton: model ranked them 48th (second out), committee last in. Model's ordinal placement accurate even when binary call wrong. Clock implies model must be re-estimated frequently; 5-year window is the adaptive horizon.

CROSS_LAYER_VETO_ADJUDICATION:
- Need to frame layers.
- Layer 1: Physical/biomechanical game layer: actual contests, home/road/neutral court, opponent RPI rank, road wins. The RPI pre-2005 treats home/away equally; post-2005 weights home win 0.6, road win 1.4. The paper's choice of pre-2005 RPI implies the committee's mental model ignores venue biomechanics (travel fatigue, crowd effects) that the NCAA formally adjusted for in 2005. Veto: if a team's resume is built on inflated home record against weak schedule, model may overvalue if using pre-2005 RPI.
- Layer 2: Statistical selection layer: probit assumptions (normal latent error, no perfect multicollinearity, no complete separation). Veto triggers: multicollinearity between RPIRANK and alternate rankings (e.g., POM, STH) makes coefficients unstable; complete separation with POWER6 causes likelihood maximization failure; small cell counts for conference dummies (e.g., Pac-12 only 6 favorable cases over 15 years).
- Layer 3: Temporal/institutional layer: Selection Committee private deliberations, team sheets, nitty-gritty reports, staggered membership. Veto: committee can deviate from historical norms (2014 NC State, 2015 UCLA/Temple/Dayton). When committee deviates, model error is not modeling error but structural break.
- Weather veto: neutral court games (conference tournaments, early season) remove home-court biomechanical advantage; road wins coefficient positive (0.6795) indicates venue difficulty is priced. No actual meteorological weather, but "weather" as environmental conditions of venue. I'll mention court location/environment.

RLVR_COUNTERFACTUAL_VETOES:
- RLVR = Reinforcement Learning from Verifiable Rewards? I'll frame as verifiable counterfactual scenarios where a validator would veto model deployment.
- Scenario 1: NCAA replaces RPI with NET (NCAA Evaluation Tool) starting 2018-19. Prediction: RPIRANK becomes non-identifiable or stale; model's AIC collapses; at-large prediction accuracy reverts to baseline (~random/expert consensus). Verifiable: compare Eq3 predictions vs actual bids 2019-2025 using NET ranks; expect miss rate > 4/36 per year.
- Scenario 2: Conference realignment eliminates Pac-12 (as of 2024) or changes automatic bid quota. Prediction: P10 dummy is structurally invalid; if applied to new conference alignments, false positive rate for remaining Pac-12 remnants or false negatives for new power conference teams. Verifiable: backtest on 2024-25 season with realigned conferences; P10 coefficient should be zeroed or model refit.
- Scenario 3: Complete separation in a narrow bubble year. Prediction: If in a given season the top 36 by RPI perfectly match the at-large selections (or perfect separation by the Eq3 linear index), probit coefficients diverge to infinity and standard errors explode; model cannot produce finite probabilities. Verifiable: simulate a season where BID = 1{RPIRANK <= cutoff}; MLE fails to converge; Firth bias adjustment required but still CV unstable.
- Each with prediction.

Word count check: I need to write enough. Let's aim for ~250-350 words per section x 6 = 1500-2100 words. That's fine.

No betting lines: avoid "spread", "moneyline", "total", "odds". I can say "wagering" generally but better not even mention betting markets. The source mentions wagering but I won't quote that as betting lines.

Let's write it out.

I need to be careful with LaTeX formatting inside XML. Use standard LaTeX.

Ensure exact XML tags. No markdown code fences around XML? I'll just output the XML sections directly.

Let's draft.

THINK_TRACE:

... (write ~500 words)

SOURCE_OPERATORS_AND_EQUATIONS:

... (write ~350 words with equations)

RETROCAUSAL_GENEALOGY:

... (write ~250 words)

RECURSIVE_THEORY_OF_MIND:

... (write ~250 words)

CROSS_LAYER_VETO_ADJUDICATION:

... (write ~300 words)

RLVR_COUNTERFACTUAL_VETOES:

... (write ~300 words)

Total > 1000.

Let's ensure page citations. The text has page numbers 121-132 at top/bottom. I'll cite like [PAGE 125].

Let's write now.

One detail: The user said "DRIVE SOURCE" but no question. I will produce a comprehensive audit as if the task is to extract and analyze the formal model. I will not add a conversational preamble; just output the XML sections.

Let's verify equations from text:
Table 2 Equation (3):
Intercept –0.3082
BIDS37 3.2486***
RPIRANK –0.2558****
CONFBELOW500 –0.8265 (p=0.1012, retained)
T25WINS 2.7509****
T50WINS 1.2572***
T100ABOVE500 0.8364***
ROADWIN 0.6795**
P10 2.7759*
T50ABOVE500 1.2021*
AIC 47.702
Bids missed in-sample: 1 out of 179 (Florida State 2011)
Cross-validation: 4 out of 179 (2010, 2 in 2011, 2012)

Equation (2): AIC 49.049, missed 2 in-sample, 5 CV.
Equation (1): AIC 51.758, missed 5 in-sample, 6 CV.

Pre-2005 RPI vs current: AIC 116.4 vs 152.6, coeff -0.1326 vs -0.0929, missed 12 vs 15 in-sample and CV.

15-year n=721, New Mexico 1999 outlier omitted.

Footnote 5: CONFBELOW500 example 8-10 -> |8-10|=2. Wait, that's absolute difference? Actually if record is 8-10, wins=8, losses=10, below .500 by 2 games. Value = losses - wins = 2. Footnote says |8-10|=2.

Footnote 6: T100ABOVE500 example 4-1 -> 4-1=3. So wins minus losses against 51-100.

RPI weights: 25% winning percentage, 50% opponents' winning percentage, 25% opponents' opponents' winning percentage. Post-2005: home wins and road losses count 0.6, home losses and road wins count 1.4. [PAGE 122]

Out-of-sample 2014: 35/36, missed NC State, predicted California. 117 of 120 methods missed NC State too.
2015: 33/36, missed Boise State, Dayton, UCLA. Predicted Temple, Colorado State, Miami (FL). Dayton model's second team out (48th), actually last in. Cut line between 46th and 47th. Model within two positions.

Okay, writing now.

Need to avoid toy equations. All equations must be formal from the paper.

Proceed.
</NATIVE_REASONING>

<THINK_TRACE>
The source paper develops an eight-factor probit model for NCAA men’s basketball at-large bid selection. The first multi-hop derivation concerns the dependent variable and sampling frame: BID is binary (1 if at-large invitation, 0 otherwise) [PAGE 124]. The analysis restricts attention to bid-eligible teams with RPI rankings between 20 and 80, producing 243 candidate observations across 2009–2013 and 179 actual at-large slots [PAGE 125]. A 15-year extension uses n = 721 candidates from 1999–2013, dropping New Mexico in 1999 as an outlier (lowest selected RPI rank of 74th, athletic director on committee, received a 9-seed) [PAGE 126].

The second derivation concerns the link function. The authors estimate a probit model: latent utility y* = Xβ + ε, ε ~ N(0,1), with BID = 1 if y* > 0. Because the model is intended as a decision aid facing media and committee scrutiny, face validity (p-values and expected sign) is weighted alongside predictive accuracy, even though the authors explicitly note multicollinearity inflates standard errors and invalidates conventional significance tests [PAGE 125].

The third derivation is the stepwise winnowing. Equation (1) enters RPIRANK, CONFBELOW500, T25WINS, T50WINS, T100ABOVE500, and ROADWIN, plus BIDS37. It misses 5 of 179 in-sample and 6 of 179 under leave-one-year-out cross-validation [PAGE 126]. Equation (2) adds the Pac-10/12 dummy (P10), reducing in-sample misses to 2 and cross-validation misses to 5 [PAGE 127]. Equation (3) adds T50ABOVE500, yielding a single in-sample miss (Florida State, 2011) and four cross-validation misses (2010, twice in 2011, 2012) [PAGE 128].

Gray-zone audit: (1) The pre-2005 RPI is selected over the current RPI because it delivers lower AIC (116.4 vs. 152.6), larger coefficient magnitude (-0.1326 vs. -0.0929), and fewer missed slots (12 vs. 15) [PAGE 126]. This implies committee behavior tracks the older equal-weight home/away RPI rather than the post-2005 venue-adjusted formula (home wins/road losses = 0.6; home losses/road wins = 1.4) [PAGE 122]. (2) Conference bias is unstable across time windows: CONFONCOMM becomes insignificant after 2002–2013, Big East after 2004–2013, MVC after 2008–2013; only P10 remains significant in every window [PAGE 127]. (3) Alternate margin-of-victory rankings (25 systems from Massey) do not outperform RPIRANK; adding STH or DCI improves AIC but not cross-validation enough to justify implementation complexity [PAGES 129–130]. (4) The 2015 out-of-sample collapse on Dayton (model: second team out / effectively 48th; reality: last team in, cut line between 46th and 47th) shows ordinal calibration can remain accurate while binary classification fails [PAGE 131].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal model specification (probit, standard normal CDF Φ):

Let i index team-season observations, t index years 2009–2013 (primary) and 1999–2013 (robustness). Define latent selection utility:

y*ᵢₜ = xᵢₜᵀβ + δ·BIDS37ₜ + εᵢₜ,  εᵢₜ ~ N(0,1)

BIDᵢₜ = 1{y*ᵢₜ > 0},   Pr(BIDᵢₜ = 1 | xᵢₜ) = Φ(xᵢₜᵀβ + δ·BIDS37ₜ)

Equation (3), estimated on 2009–2013 data [PAGE 127, Table 2], with AIC = 47.702:

ŷ* = –0.3082 + 3.2486·BIDS37 – 0.2558·RPIRANK – 0.8265·CONFBELOW500
    + 2.7509·T25WINS + 1.2572·T50WINS + 0.8364·T100ABOVE500
    + 0.6795·ROADWIN + 2.7759·P10 + 1.2021·T50ABOVE500

Significance stars: **** p < 0.0001, *** p < 0.001, ** p < 0.01, * p < 0.05 [PAGE 127]. Note CONFBELOW500 retains p = 0.1012 in Eq. (3) but is kept because p < 0.0001 for horizons beyond six years [PAGE 127].

Variable definitions [PAGE 124, Table 1]:
- RPIRANK: overall RPI rank using the pre-2005 formula (25% team winning percentage, 50% opponents’ winning percentage, 25% opponents’ opponents’ winning percentage) [PAGE 122].
- CONFBELOW500: magnitude of conference record below .500; e.g., 8–10 yields |8 – 10| = 2 [PAGE 125, footnote 5].
- T25WINS: wins vs. RPI ranks 1–25.
- T50WINS: wins vs. RPI ranks 26–50.
- T100ABOVE500: wins minus losses vs. RPI ranks 51–100; e.g., 4–1 yields 3 [PAGE 126, footnote 6].
- ROADWIN: count of road wins.
- P10: binary Pac-10/12 membership.
- T50ABOVE500: wins above .500 vs. RPI ranks 26–50.
- BIDS37: binary control equal to 1 for 2011–2013 (at-large slots expanded from 34 to 37), 0 otherwise [PAGE 125].

AIC operator: AIC = 2k – 2 ln(ℒ̂). Comparative values: Eq. (1) AIC = 51.758; Eq. (2) AIC = 49.049; Eq. (3) AIC = 47.702 [PAGE 127]. Leave-one-year-out cross-validation misses: Eq. (1) = 6/179; Eq. (2) = 5/179; Eq. (3) = 4/179 [PAGES 126–128].

Breakdown / singularity regimes:
1. Complete separation: The POWER6 alternate specification achieved complete in-sample separation (zero misses), causing likelihood maximization to diverge; Firth bias adjustment was required and still yielded inferior cross-validation (6 misses vs. 4) [PAGE 128, footnote 8].
2. Multicollinearity: High correlation among predictors inflates standard errors and invalidates p-value inference; the authors explicitly subordinate significance testing to predictive accuracy [PAGE 125].
3. Alternate ranking collinearity: When DCI is added to Eq. (3), CONFBELOW500 and P10 lose significance, degrading face validity though not necessarily predictive power [PAGE 130, footnote 15].
4. Small-sample regime: Only ~36 at-large bids per year; a single misclassification (Florida State 2011) drives conference-dummy significance for ACC in 2009–2013 but not over 15 years [PAGES 128–129].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage traces through the Coleman–Lynch research program. Coleman & Lynch (2001) built a six-factor probit on 249 candidates from 1994–1999, achieving 93.7% in-sample and 94% out-of-sample accuracy from 2000–2005, decaying to 89% in 2006–2008 [PAGE 123]. Coleman, DuMond, & Lynch (2010) examined 479 candidates from 1999–2008 to test conference bias in selection and seeding [PAGE 123]. Coleman et al. (2011) used a 15-factor probit on 1999–2008 data, assigning 96.5% of slots correctly in-sample and 170 of 179 (94.9%) out-of-sample for 2009–2013, identifying Big 12 and Pac-10/12 favoritism and Missouri Valley detriment [PAGE 123]. The present study extends the window to 15 years (1999–2013), then isolates 2009–2013 because the selection process shifted fundamentally after 2008 [PAGE 126].

Contemporary benchmarks: Shapiro et al. (2009) used logistic regression with 11 performance controls and found major-conference and standing-position bias but no geographic, income, population, or historical-appearance effects [PAGE 123]. Paul & Wilson (2012) showed committee-representation variables lose significance when Sagarin Predictor replaces RPI as the performance control, questioning whether 1999–2008 bias was pre-2004 behavior [PAGE 123]. Leman et al. (2014) decomposed RPI into winning percentage and strength of schedule, estimating the committee’s implied SOS weight at roughly four times the winning percentage weight, and documented a marquee effect (Virginia Tech 2010: bid probability rises from 28% to 86% if treated as a marquee team) [PAGE 123, footnote 2].

Multi-week traps: The NCAA tournament projects span a multimonth selection season culminating in a three-week championship window [PAGE 121]. The bubble is defined by RPI ranks 20–80, not the full Division I population [PAGE 125]. Committee membership turns over on staggered five-year terms, yet decisions remain consistent year-to-year, indicating heuristic persistence rather than committee idiosyncrasy [PAGE 132]. Temporal trap: bias factors decay at different rates—Big East detriment vanished after 2007, MVC after 2008, but Pac-10/12 favoritism recurred in 2004, 2006–2009, and 2011 across six different schools, none UCLA, suggesting it is not a pure marquee-team effect [PAGES 126–127, footnote 7]. The causal trap remains unresolved: P10 may be a proxy for unobserved team quality rather than direct conference bias [PAGE 126, footnote 7].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: When the committee operates under uncertainty on Selection Sunday, it regresses to a stable, familiar heuristic—the RPI, specifically the pre-2005 equal-weight venue formulation—despite the availability of margin-of-victory metrics (Sagarin Predictor, KenPom, LRMC) and the current venue-adjusted RPI [PAGES 122, 130]. The model’s out-of-sample performance confirms this: Eq. (3) missed only one slot in-sample across 2009–2013 and four slots cross-validated, while 21 expert/methodology systems tracked by BracketMatrix.com recorded at least six misses over the same span [PAGE 130]. The committee’s revealed preference is for the sticky RPI rule, not for statistically superior predictors.

Counter-trap: The analytic counter-trap is to assume that a “better” team ranking will predict committee behavior better. The paper falsifies this: 25 alternate mathematical systems were tested, none produced a lower AIC than RPIRANK alone (116.4), and adding BOB, CNG, DCI, DOK, LMC, POM, RTH, or STH to Eq. (3) did not improve leave-one-year-out cross-validation enough to justify the implementation burden [PAGES 129–130]. The trap is that margin-of-victory sophistication is less predictive of committee votes than the transparent, committee-endorsed RPI.

Clock: The model’s temporal validity decays as the selection regime shifts. The full 1999–2013 fit misses 25 slots in 1999–2008 but only 5 in 2009–2013, evidencing a structural break around 2009 [PAGE 126]. Conference dummies expire at staggered dates: commissioner-on-committee after 2002–2013, Big East after 2004–2013, MVC after 2008–2013; only P10 survives every window [PAGE 127]. The 2015 out-of-sample test illustrates clock pressure: Eq. (3) ranked Dayton as the second team out (effectively 48th), while Dayton was the final team in; the cut line lay between ranks 46 and 47, so the model’s ordinal error was within two positions despite the binary miss [PAGE 131]. Prediction horizon is therefore approximately one five-year recalibration cycle, not a permanent structural equation.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Layer 1 — Physical / biomechanical game layer: The dependent variables are actual game outcomes conditioned on venue. Road wins carry a positive coefficient (0.6795), implying the committee prices travel and venue difficulty [PAGE 127]. However, the model adopts the pre-2005 RPI, which counts home wins and road losses identically at 0.6 and home losses/road wins at 1.4 only in the current formula; the chosen pre-2005 version treats all sites equally [PAGE 122]. Veto condition: if a team’s resume is constructed predominantly at home against weak opponents, the equal-weight RPI may overstate selection probability relative to a venue-corrected biomechanical assessment. Neutral-court games (conference tournaments, early-season site games) strip home-court environmental advantage; the model does not separately parameterize crowd density, travel time, or altitude, so it is blind to biomechanical modifiers embedded in road/neutral outcomes.

Layer 2 — Statistical selection layer: Probit identification requires no perfect multicollinearity and no complete separation. Eq. (3) operates near separation: one in-sample miss and four cross-validation misses out of 179 slots [PAGE 128]. The alternate POWER6 specification achieved complete separation and non-convergent MLE, requiring Firth bias adjustment and still underperforming Eq. (3) in cross-validation [PAGE 128]. Multicollinearity between RPIRANK and alternate rankings (e.g., Pomeroy, STH) inflates standard errors and can render individual coefficients insignificant even when jointly informative [PAGES 125, 130]. Veto trigger: if any predictor perfectly predicts BID in a given year, the probit log-likelihood is unbounded and coefficients diverge; the model cannot produce finite selection probabilities.

Layer 3 — Temporal / institutional selection layer: The committee deliberates in private, guided by team sheets and nitty-gritty reports centered on RPI [PAGES 122–124]. Veto trigger: structural deviation from historical norms. In 2014, the committee selected North Carolina State over the model’s California pick; 117 of 120 BracketMatrix methods also missed NC State, indicating committee idiosyncrasy rather than model error [PAGE 131]. In 2015, UCLA and Temple misses reflect deviation from historical patterns; Boise State and Dayton were ranked by the model immediately adjacent to the cut line, so ordinal placement remained calibrated even when binary selection failed [PAGE 131]. Weather/environmental veto: neutral-court sites and road-game distances introduce environmental variance not captured by win-loss counts alone; if a season features abnormal travel or site conditions, the RPI-based resume score mismeasures true team quality.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Metric replacement veto: The NCAA replaces the RPI with the NET evaluation tool as the primary committee sorting metric. Verifiable condition: RPIRANK is no longer computed or published for selection purposes. Prediction: Eq. (3) becomes structurally unidentified because its core regressor vanishes; out-of-sample miss rate reverts from 4/179 (2009–2013 cross-validation) and 4/72 (2014–2015) to a baseline no better than expert consensus (≥6 misses per 36 slots). Deployment veto is triggered if backtesting on post-replacement seasons shows AIC deterioration >10 points relative to Eq. (3)’s 47.702.

Scenario 2 — Conference realignment veto: The Pac-12 dissolves or realigns such that the P10 dummy no longer maps to an active conference with historical selection patterns. Verifiable condition: P10 = 0 for all observations in a test season, or the conference’s membership composition changes >50%. Prediction: the P10 coefficient (2.7759, p < 0.05) becomes a spurious constant; applying Eq. (3) unchanged generates false positives for legacy Pac-12 remnants and false negatives for successor power-conference bubble teams. Corrective prediction: refit Eq. (3) without P10 and re-estimate BIDS37; cross-validation misses expected to rise from 4 to 6–8 per 179-slot cycle.

Scenario 3 — Complete-separation veto: In a narrow bubble season, the top 36 teams by RPIRANK exactly match the 36 at-large selections, producing perfect separation in the probit index. Verifiable condition: BID = 1{RPIRANK ≤ c} holds for all candidates in a given year. Prediction: maximum-likelihood coefficients diverge to ±∞, standard errors explode, and the model cannot generate probabilistic rankings; Firth bias adjustment may restore finite estimates but cross-validation stability collapses (as seen with POWER6, where complete separation occurred in all five leave-one-year folds yet cross-validation missed six slots vs. Eq. (3)’s four) [PAGE 128]. Veto prediction: if any single season in a five-year rolling window exhibits complete separation, Eq. (3) must be suspended for that window and replaced with a penalized or Bayesian specification.
</RLVR_COUNTERFACTUAL_VETOES>