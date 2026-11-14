---
source: "2017 - NFLWAR A reproducible method for offensive player evaluation in football - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2017"
pages: 8
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 7123
---

<NATIVE_REASONING>
The user wants me to analyze a source document about nflWAR (a reproducible method for offensive player evaluation in football) and produce output with specific XML sections:

1. `<THINK_TRACE>` - Deep multi-hop derivation & gray-zone audit (>=400 words)
2. `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown
3. `<RETROCAUSAL_GENEALOGY>` - Historical/scientific lineage & multi-week traps
4. `<RECURSIVE_THEORY_OF_MIND>` - Crisis habit regression vs counter-trap vs clock
5. `<CROSS_LAYER_VETO_ADJUDICATION>` - Physical/biomechanical/weather veto proof
6. `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: No spreads, totals, moneylines, odds.
- ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
- >= 1,000-word depth across these exact XML sections.

Let me carefully parse the source document provided.

Source: "2017 - NFLWAR A reproducible method for offensive player evaluation in football - Unknown Authors.md" - actually authors are Ron Yurko, Sam Ventura, Max Horowitz, Carnegie Mellon University, NESSIS 2017. 36 pages + references.

Key content:
- nflscrapR package by Maksim Horowitz, collects play-by-play from NFL.com starting 2009.
- nflWAR framework for offensive players: wins above replacement.
- Goals: evaluate every play, assign individual contribution, relative to replacement level, convert to wins scale, estimate uncertainty, apply to 2009-2016.
- Expected Points (EP): value in terms of E(points of next scoring play). Response Y ∈ {TD 7, FG 3, Safety 2, -TD -7, -FG -3, -Safety -2, No Score 0}. Covariates X = {down, yards to go, yard line, ...}.
- Nearest neighbors approach vs Linear Regression: E(Y|X) = β0 + β1 X_down + β2 X_yards to go + ... But treating next score as continuous is problematic because assumptions ε_i ~ N(0, σ^2) iid are violated ("IS A DISASTER!").
- Multinomial Logistic Regression: model probabilities of Y. 6 logit transformations relative to No Score. Outcome probabilities P(Y=y|X). Expected Points EP = E(Y|X) = Σ y * P(Y=y|X). Page 13.
- Expected Points Added (EPA): change in situation. EPA = EP_play_i+1 - EP_play_i. (Actually the text says EP − EP_playi playi +1 playi, which is formatted weird but means EP_{play i+1} - EP_{play i}.)
- AirEPA and YAC EPA: airEPA_play_i = EP_in_air_play_i - EP_start_play_i; yacEPA_play_i = EP_play_i+1 - EP_in_air_play_i.
- Credit allocation: QB vs receiver issue. Total QBR uses proprietary data. Public data includes passer, target receiver, tackler(s), interceptor; context: air yards, yards after catch, location, if passer hit. Rushing: rusher and tackler(s); context: run gap and location.
- Multilevel Modeling: "Multilevel Regression as Default" - Richard McElreath. Groups given a model, partial pooling. Varying-intercept model: EPA_i ~ N(QB_j[i] + REC_k[i] + β x_i, σ_EPA^2), QB_j ~ Normal(μ_QB, σ_QB^2), REC_k ~ Normal(μ_REC, σ_REC^2). Page 17.
- nflWAR Modeling: varying-intercepts for grouped variables. Team-side-gap as O-line proxy (PIT-left-end, etc). Passing: Offensive team, QB, receiver, defensive team. Rushing: Team-side-gap, rusher, defensive team. Individual intercept = individual points added (iPA). Team intercepts = team points added (tPA). Multiply by attempts to get iPAA/tPAA.
- Rushing breakdown: two models: RB/FB/WR/TE designed rushing plays (adjust rusher position as non-grouped), QB designed runs/scrambles/sacks (replace Team-side-gap with offensive team). Provides iPA_rush and tPA_rush_side-gap.
- Passing breakdown: airEPA and yacEPA models. Receptions assigned airEPA and yacEPA. Incomplete passes use observed EPA. Emphasize completions. Both adjust for QBs hit, receiver positions, pass location. yacEPA model adjusts for air yards. Provides iPA_air and iPA_yac.
- Relative to Replacement Level: similar to openWAR (Baumer et al., 2015). For each team and position sort by attempts. Separate RB/FB replacement for rushing and receiving. iPAA_i,total = iPAA_i,rush + iPAA_i,air + iPAA_i,yac. Replacement-level iPAA shadows performance, denote iPAA^replacement_i. iPAR_i = iPAA_i,total - iPAA^replacement_i,total.
- Convert to Wins: "Wins & Point Differential in the NFL" - Zhou & Ventura, 2017 (CMU freshman project). Linear regression wins vs score differential: 1 / Points per Win = β̂_Score Diff. In 2016 β̂_Score Diff = 0.0319, roughly 31 points per win. WAR = iPAR / Points per Win. Actually text says iPAR_WAR = iPAR / Points per Win (formatted weird: _iPAR WAR_ = _Points per Win_ but context implies division).
- QB/RB/TE/WR WAR in 2016 shown but figures not in text.
- Recap: EPA via multinomial logistic regression. Multilevel modeling for player effects, extendable with data containing every player on field. Naive to assume same effect every play. Need uncertainty intervals. Refine replacement level (down-specific players).

Now I need to write the response. Since there are no actual page images, but the text has page markers like [PAGE N] equivalent: <mark>... N / 36 ...</mark>. I should cite these as [PAGE 1], [PAGE 2], etc. based on the markers. Let's map:
- Title/authors: Page 1 (1/36)
- Reproducible research: Page 2 (2/36)
- Pittsburgh Fans React: Page 3 (3/36)
- Tremendous Insight: Page 4 (4/36) - goals
- How to Value Plays?: Page 6? Let's trace carefully.

Actually let's list page markers:
- "1 / 36" after authors/title: Page 1
- "2 / 36" after nflscrapR description: Page 2
- "3 / 36" Pittsburgh Fans React: Page 3
- "4 / 36" Another Comment... Tremendous Insight: Page 4
- "5 / 36" Goals: Page 5
- "6 / 36" How to Value Plays?: Page 6 (EP, WP)
- "7 / 36" Wait, the text says:
  - <mark>... 6 / 36 ...</mark> then # How to Value Plays?
  - <mark>... 7 / 36 ...</mark> then # How to Calculate EP? Response Y...
  - <mark>... 8 / 36 ...</mark> appears multiple times (Nearest Neighbors, Linear Regression, Distribution of Next Score)
  - <mark>... 9 / 36 ...</mark> Distribution of Next Score
  - <mark>... 10 / 36 ...</mark> Linear Regression Approach... assumptions
  - <mark>... 11 / 36 ...</mark> Linear Regression Approach... IS A DISASTER!
  - <mark>... 12 / 36 ...</mark> Multinomial Logistic Regression
  - <mark>... 13 / 36 ...</mark> Model generating probabilities, EP formula
  - <mark>... 14 / 36 ...</mark> Expected Points Added, EPA formula, airEPA/yacEPA
  - <mark>... 15 / 36 ...</mark> How to Allocate EPA, Total QBR, public data
  - <mark>... 16 / 36 ...</mark> Multilevel Modeling, McElreath, Judge
  - <mark>... 17 / 36 ...</mark> Varying-intercept model equations
  - <mark>... 18 / 36 ...</mark> nflWAR Modeling, grouped variables, iPA/tPA
  - <mark>... 19 / 36 ...</mark> Rushing Breakdown
  - <mark>... 20 / 36 ...</mark> Group Variation RB/FB/WR/TE
  - <mark>... 21 / 36 ...</mark> Group Variation QB Rushing
  - <mark>... 22 / 36 ...</mark> Which Teams Ran Efficiently
  - <mark>... 23 / 36 ...</mark> Passing Breakdown
  - <mark>... 24 / 36 ...</mark> Variation Passing Intercepts airEPA
  - <mark>... 25 / 36 ...</mark> Variation Passing Intercepts yacEPA
  - <mark>... 26 / 36 ...</mark> Passing Efficiency 2016
  - <mark>... 27 / 36 ...</mark> Relative to Replacement Level, openWAR, iPAR formula
  - <mark>... 28 / 36 ...</mark> Convert to Wins, Zhou & Ventura
  - <mark>... 29 / 36 ...</mark> WAR!, Points per Win, 0.0319, 31 points per win
  - <mark>... 30 / 36 ...</mark> QB WAR 2016
  - <mark>... 31 / 36 ...</mark> RB WAR 2016
  - <mark>... 32 / 36 ...</mark> TE WAR 2016
  - <mark>... 33 / 36 ...</mark> WR WAR 2016
  - <mark>... 34 / 36 ...</mark> Recap and Future
  - <mark>... 35 / 36 ...</mark> Carnegie Mellon Sports Analytics Conference
  - <mark>... 36 / 36 ...</mark> Acknowledgements
  - References pages 1/4 to 4/4.

I need to cite exact [PAGE N] markers. I'll use [PAGE 1] through [PAGE 36] corresponding to the NESSIS slide numbers, and maybe [REF 1]-[REF 4] for reference pages. The instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should quote verbatim from the source and cite [PAGE N].

Now, the user asks for a specific format with XML sections. I must not mention betting lines. I must not invent toy equations. I must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.

I need >= 1,000 words across the sections. Let's aim for substantial depth in each.

Let me draft each section.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to derive the chain from play-by-play data → EP via multinomial logit → EPA → multilevel varying-intercept allocation → iPA → iPAA → iPAR → WAR via points-per-win regression. Audit gray zones: (1) EP response is discrete/categorical (7,3,2,0,-2,-3,-7) but modeled via multinomial logit; (2) "Next score" may not occur before half/game end, censoring; (3) EPA attribution via random intercepts assumes additive separability QB + REC + team + defense, ignoring interaction effects and offensive line chemistry beyond team-side-gap; (4) replacement level defined by attempt-count ranking within roster, not by market value or injury-adjusted baseline; (5) points-per-win slope from a simple linear regression wins ~ score differential ignores nonlinear Pythagorean/expectation effects and stochastic variation; (6) nflscrapR data starts 2009, so pre-2009 not covered; (7) uncertainty estimation acknowledged as future work ("Need to estimate the uncertainty") so point estimates of WAR lack intervals in this version; (8) airEPA/yacEPA split assumes the point of reception is a clean causal boundary, ignoring pass trajectory and defensive coverage; (9) QB rushing model replaces team-side-gap with offensive team, conflating O-line and schematic effects. I need to write >=400 words here.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX. I should write:
- Response space: \mathcal{Y} = \{7,3,2,0,-2,-3,-7\} points (dimension: points).
- Covariates X = (down, ydstogo, yardline, ...).
- Nearest-neighbor EP: \widehat{EP}(x) = \frac{1}{|\mathcal{N}(x)|} \sum_{(x',y') \in \mathcal{N}(x)} y'.
- Linear regression (rejected): \mathbb{E}[Y|X=x] = x^\top\beta, \epsilon_i \overset{iid}{\sim} \mathcal{N}(0,\sigma^2). Breakdown: heteroskedastic, bounded discrete support, non-Gaussian residuals.
- Multinomial logit: for categories y \in \mathcal{Y}\setminus\{0\}, \log \frac{P(Y=y|X=x)}{P(Y=0|X=x)} = x^\top\beta_y. Six logits relative to No Score.
- EP: EP(x) = \sum_{y \in \mathcal{Y}} y \, P(Y=y|X=x). Unit: expected points (dimensionless point expectation).
- EPA: \mathrm{EPA}_i = EP(x_{i+1}) - EP(x_i). Unit: points per play.
- airEPA_i = EP_{\mathrm{air},i} - EP_{\mathrm{start},i}; yacEPA_i = EP_{i+1} - EP_{\mathrm{air},i}.
- Multilevel varying-intercept: \mathrm{EPA}_i \sim \mathcal{N}(\alpha^{\mathrm{QB}}_{j[i]} + \alpha^{\mathrm{REC}}_{k[i]} + x_i^\top\beta, \sigma^2_{\mathrm{EPA}}); \alpha^{\mathrm{QB}}_j \sim \mathcal{N}(\mu_{\mathrm{QB}}, \sigma^2_{\mathrm{QB}}); \alpha^{\mathrm{REC}}_k \sim \mathcal{N}(\mu_{\mathrm{REC}}, \sigma^2_{\mathrm{REC}}). Unit: points per play. Partial pooling shrinkage.
- nflWAR grouping: passing groups = (offensive team, QB, receiver, defensive team); rushing groups = (team-side-gap, rusher, defensive team). Team-side-gap = O-line proxy.
- iPA = player intercept. tPA = team intercept. iPAA = iPA \times attempts; tPAA = tPA \times attempts.
- Replacement: iPAA^{\mathrm{total}}_i = iPAA^{\mathrm{rush}}_i + iPAA^{\mathrm{air}}_i + iPAA^{\mathrm{yac}}_i. Replacement shadow iPAA^{\mathrm{replacement}}_i constructed by roster attempt-ranking. iPAR_i = iPAA^{\mathrm{total}}_i - iPAA^{\mathrm{replacement},\mathrm{total}}_i.
- Wins conversion: W = \gamma_0 + \gamma_1 \Delta\mathrm{Score} + \eta. Points per win PPW = 1/\hat{\gamma}_1. In 2016 \hat{\gamma}_1 = 0.0319 wins/point, PPW \approx 31 points/win. \mathrm{WAR}_i = iPAR_i / PPW. Unit: wins.
- Singularity/breakdown: multinomial logit suffers from separation if a situation has only one observed next-score outcome (infinite logit); varying-intercept model is unidentified without partial pooling priors or constraints when a group has n=1 play; linear regression on bounded discrete Y breaks at heteroskedasticity and non-normality; EP model assumes stationarity of scoring rules and field position value across 2009-2016.

Cite pages: [PAGE 7], [PAGE 8], [PAGE 10], [PAGE 11], [PAGE 12], [PAGE 13], [PAGE 14], [PAGE 15], [PAGE 16], [PAGE 17], [PAGE 18], [PAGE 19], [PAGE 23], [PAGE 27], [PAGE 28], [PAGE 29].

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: Carter & Machol (1971) operations research on football [PAGE REF 2]; Carroll et al. (1998) Hidden Game of Football [REF 2]; Burke advanced football analytics [REF 2]; Oliver (2011) Total QBR proprietary credit division [PAGE 15]; Baumer et al. (2015) openWAR replacement level [PAGE 27]; Judge et al. (2015) Deserved Run Average baseball multilevel [PAGE 16]; Zhou & Ventura (2017) CMU freshman points-per-win [PAGE 28]; Gelman & Hill (2007) multilevel [REF 3]; McElreath "Multilevel Regression as Default" [PAGE 16]; nflscrapR by Maksim Horowitz [PAGE 2].
- Multi-week traps: (1) Replacement-level shadow is static within a season; injuries in week 3-4 shift the replacement pool but the model does not re-estimate replacement level weekly; (2) Early-season small-sample intercepts for QBs/receivers are heavily shrunk toward mean, causing late-season breakout players to be underrated until attempts accumulate (partial pooling lag); (3) Opponent defensive team intercepts are confounded with offensive iPA; a good QB playing a weak defense gets inflated iPA unless defensive group variation is modeled precisely; (4) Game script effects: trailing teams pass more, leading EP situations that are not representative of baseline ability; (5) Weather and venue not in covariates X (down, ydstogo, yardline only), so dome vs. outdoor cold games are conflated.
Write >= some words.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- This section is more abstract but needs to connect to the model. Crisis habit regression: under pressure (crunch time, late game), players revert to habit; the EP model treats all plays with same covariates identically, ignoring game-state-dependent behavioral regression (e.g., QB forced throws under blitz). Counter-trap: offensive coordinator anticipates defensive adjustment; the varying-intercept model assumes static player effects across plays, so it cannot capture within-game strategic adaptation (run-pass balance counter-trap). Clock: game clock and score differential are not covariates in the EP model (only down, ydstogo, yardline), so two-minute drill and end-of-half kneel-downs are misvalued; EP assumes next scoring play but clock may expire before score, creating censoring bias.
Write >= some words.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical layer: player mass, acceleration, collision forces not in data; a 2-yard run by a power back vs. scat back has same EPA if field position identical, but biomechanical load differs. Veto: if a rusher's expected yards after contact (physical layer) is not modeled, EPA attribution to rusher is confounded by O-line blocking quality captured only coarsely by team-side-gap.
- Biomechanical layer: QB hit context is included [PAGE 15], but throwing mechanics, arm fatigue, and release time are not; airEPA credits QB for ball placement but ignores receiver separation generated by route biomechanics.
- Weather layer: covariates X lack temperature, wind, precipitation; wind affects passing air yards and kicker EP, but model is agnostic. Veto: in high-wind games, passing iPA_air is biased downward for both QB and receiver independent of skill.
- Adjudication rule: any player-level iPA claim is vetoed if the play occurs in (a) a game with missing nflscrapR play-by-play pre-2009, (b) a situation with separation in the multinomial logit (only one next-score outcome observed), or (c) a group with fewer than a minimum attempt threshold where partial pooling dominates and the intercept reverts to group mean (sigma^2 group small relative to sigma^2 EPA). Formal veto condition: \hat{\alpha}_g is vetoed if n_g < n_{min} or \sigma^2_g / (\sigma^2_g + \sigma^2_{\mathrm{EPA}}/n_g) > 0.9 (near-total shrinkage).
Write formal.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning Verifiable Rewards? Or just verifiable scenarios. I'll frame as counterfactual veto scenarios with testable predictions.
1. Scenario: Injured starting QB replaced by backup in Week 8; model's replacement level is computed from season attempt ranking, not updated weekly. Prediction: The backup's iPAR will be overstated relative to a dynamic replacement baseline because the shadow replacement is the starter's pre-injury level, not the actual waiver-wire/replacement-level QB available at that week. Verification: compare backup WAR before and after starter injury; a step change unaccompanied by play-level EPA change indicates veto.
2. Scenario: A receiver is targeted on deep air-yard plays vs. short screens. airEPA/yacEPA split attributes airEPA to QB and yacEPA to receiver, but on screen plays, the QB's airEPA is near zero while receiver YAC creates most value; the model assigns yacEPA to receiver but the play design (screen) is a schematic confounder. Prediction: receivers in screen-heavy offenses show inflated iPA_yac relative to separation-based metrics; veto when air yards < threshold and yacEPA > airEPA by factor > 2.
3. Scenario: Windy game (wind > 15 mph) suppresses passing EP. Because wind is not a covariate, QB and receiver intercepts are deflated. Prediction: passing iPA for all QBs in high-wind games shifts negatively as a group, violating the exchangeability assumption \alpha^{\mathrm{QB}}_j \sim \mathcal{N}(\mu_{\mathrm{QB}}, \sigma^2_{\mathrm{QB}}); a group-level residual correlation with wind speed > 0.3 triggers veto.
Provide predictions and verification.

Need to ensure no betting lines. No mention of spreads, totals, moneylines, odds. Avoid "win probability" maybe okay since it's in source but not betting odds. Win probability is a modeling term, not betting. But avoid odds. Fine.

Need >=1000 words total. I'll write substantial sections.

Also need "exact singularity/breakdown regimes". Include those.

Let me carefully craft verbatim quotes with page citations.

Verbatim quotes:
- [PAGE 2]: "`nflscrapR` : R package created by Maksim Horowitz to enable easy data access and promote reproducible NFL research" and "Collects play-by-play data from NFL.com and formats into R data frames Data is available for all games starting in 2009".
- [PAGE 6]: "Can apply nflWAR framework to both, but will focus on EP today".
- [PAGE 7]: "Response : Y ∈ { Touchdown ( 7 ), Field Goal ( 3 ), Safety ( 2 ), -Touchdown ( -7 ), -Field Goal ( -3 ), -Safety ( -2 ), No Score ( 0 ) }" and "Covariates : X = { down, yards to go, yard line, ... }".
- [PAGE 10]: "What are the assumptions of linear regression? ϵi ∼ N (0 , σ2 ) ( iid )".
- [PAGE 11]: "Linear Regression Approach... IS A DISASTER!".
- [PAGE 12]: "Multinomial Logistic Regression ... Specified with 6 logit transformations relative to No Score".
- [PAGE 13]: "Model is generating probabilities, agnostic of value associated with each next score type" and "Expected Points (EP) = E ( Y|X ) = � y P(Y=y|X) *y".
- [PAGE 14]: "EPA = EP − EP playi playi +1 playi" and airEPA/yacEPA formulas.
- [PAGE 15]: "One player is not solely responsible for a play’s EPA".
- [PAGE 16]: "Multilevel Regression as Default" - Richard McElreath and "Every play is a repeated measure of performance".
- [PAGE 17]: varying-intercept model equations.
- [PAGE 18]: "Each individual intercept for player groups is an estimate for a player’s effect, individual points added (iPA) Intercepts for team groups are team points added (tPA)".
- [PAGE 19]: Rushing breakdown, QB runs replace Team-side-gap with offensive team.
- [PAGE 23]: Passing breakdown, airEPA/yacEPA, incomplete passes use observed EPA.
- [PAGE 27]: replacement level formulas and openWAR.
- [PAGE 28]: Zhou & Ventura 2017.
- [PAGE 29]: "e.g. In 2016 β̂ Score Diff = 0 . 0319, roughly 31 points per win" and "iPAR WAR = Points per Win".
- [PAGE 34]: "Naive to assume player has same effect for every play!" and "Need to estimate the uncertainty in the different types of iPA to generate intervals of WAR values".

I need to be careful with LaTeX formatting inside XML. Use proper LaTeX.

Word count: I'll aim for ~1500-2000 words total across sections.

Let me draft now.

Structure:
THINK_TRACE: derivation steps and gray-zone audit.
SOURCE_OPERATORS_AND_EQUATIONS: formal equations with pages.
RETROCAUSAL_GENEALOGY: lineage and traps.
RECURSIVE_THEORY_OF_MIND: crisis/counter-trap/clock.
CROSS_LAYER_VETO_ADJUDICATION: layers and veto rule.
RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Ensure all sections present and closed.

No markdown code blocks maybe okay but XML sections required. I'll just output the XML sections with text inside.

Let's write.

For word count, I need to be generous.

THINK_TRACE draft:

The derivation proceeds in six hops. Hop 1: data acquisition. nflscrapR collects play-by-play from NFL.com for all games starting in 2009 [PAGE 2], forming the sole public, reproducible input layer; this creates a hard boundary at the 2009 season because nothing before that timestamp exists in the frame. Hop 2: valuation of the state. The authors reject linear regression on the discrete next-score response Y ∈ {7,3,2,0,-2,-3,-7} points because the Gaussian iid error assumption ε_i ~ N(0,σ²) is violated [PAGE 10], declaring the approach "IS A DISASTER!" [PAGE 11]. Instead they specify a multinomial logistic regression with six logit transformations relative to No Score [PAGE 12], producing P(Y=y|X=x) for covariates X = {down, yards to go, yard line, ...} [PAGE 7]. Expected points is the first moment EP(x) = Σ_y y·P(Y=y|X=x) [PAGE 13]. Hop 3: play value. EPA_i = EP(x_{i+1}) − EP(x_i) [PAGE 14], measured in points per play. Passing is decomposed at the point of the catch into airEPA_i = EP_air,i − EP_start,i and yacEPA_i = EP_{i+1} − EP_air,i [PAGE 14], which creates a causal cut at the reception that did not exist in raw EPA. Hop 4: credit allocation. Because "One player is not solely responsible for a play’s EPA" [PAGE 14]-[PAGE 15], a varying-intercept multilevel model is fitted: EPA_i ~ N(QB_{j[i]} + REC_{k[i]} + x_i^T β, σ²_EPA), with group-level priors QB_j ~ N(μ_QB, σ²_QB), REC_k ~ N(μ_REC, σ²_REC) [PAGE 17]. Partial pooling shrinks sparse players toward the group mean; the individual intercept is iPA, the team intercept is tPA, and scaling by attempts yields iPAA/tPAA [PAGE 18]. Passing uses groups (offensive team, QB, receiver, defensive team); rushing uses (team-side-gap, rusher, defensive team), where team-side-gap is an offensive-line proxy [PAGE 18]. Hop 5: replacement. Following openWAR [PAGE 27], iPAA^total_i = iPAA^rush_i + iPAA^air_i + iPAA^yac_i, and a replacement-level shadow iPAA^replacement_i is built by roster attempt ranking, giving iPAR_i = iPAA^total_i − iPAA^replacement_i,total [PAGE 27]. Hop 6: wins scale. A regression of wins on score differential gives 1/PPW = β̂_Score Diff; in 2016 β̂ = 0.0319, or roughly 31 points per win [PAGE 29], so WAR_i = iPAR_i / PPW [PAGE 29].

Gray-zone audit. (1) The multinomial logit suffers perfect separation whenever a game state (down, distance, yard line) has been observed with only one next-score outcome in 2009-2016; the logit coefficient diverges and EP is singular. (2) EP assumes the "next score" occurs before the half or game ends; end-of-half kneel-downs and two-minute drill plays are censored by the clock but valued as if a future score remains possible [PAGE 6]-[PAGE 7]. (3) The varying-intercept structure is additive: QB + REC + team + defense. It cannot represent interaction effects such as a specific QB-receiver chemistry beyond partial pooling, nor offensive-line chemistry beyond the coarse team-side-gap bucket [PAGE 18]. (4) Replacement level is static within a season and defined by attempt count, not by market availability or injury timing; a Week 1 starter and a Week 17 waiver pickup are compared to the same shadow [PAGE 27]. (5) The points-per-win slope from a simple linear regression wins ~ score differential [PAGE 28]-[PAGE 29] ignores diminishing returns and the nonlinear win distribution; the 31-points-per-win constant is therefore a local linear approximation, not a structural constant. (6) The authors explicitly state the model is "Naive to assume player has same effect for every play!" [PAGE 34] and that uncertainty intervals for WAR are still needed [PAGE 34]; thus all WAR point estimates in this paper are unintervalled and overconfident. (7) Weather, temperature, wind, and precipitation are absent from X [PAGE 7], so outdoor cold-weather and dome games are exchangeable in the model, violating physical reality.

That's good, over 400 words.

SOURCE_OPERATORS_AND_EQUATIONS: write out formal LaTeX with citations.

I'll write it clearly.

RETROCAUSAL_GENEALOGY: historical lineage and multi-week traps.

RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock.

CROSS_LAYER_VETO_ADJUDICATION: formal veto rule.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Let's write fully now. Need to keep track of word count but I'll be verbose enough.

Check for betting lines: none.

Check toy equations: none invented. All from source.

Check page citations: I'll use [PAGE N] format.

Let's produce the final output.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation proceeds as a six-hop causal chain from raw play-by-play data to a wins scale, with explicit gray-zone failures at each link.

Hop 1 — Data acquisition and boundary condition. The framework relies on `nflscrapR`, an R package created by Maksim Horowitz that "Collects play-by-play data from NFL.com and formats into R data frames" for "all games starting in 2009" [PAGE 2]. This establishes a hard temporal boundary: seasons before 2009 are outside the sample space, and any cross-era comparison that implicitly assumes stationarity of scoring rules, field-position value, or play-calling frequency across 2009–2016 is unverified by the source [PAGE 5]-[PAGE 6].

Hop 2 — State valuation via expected points. The response space is discrete and bounded: Y ∈ { Touchdown (7), Field Goal (3), Safety (2), -Touchdown (-7), -Field Goal (-3), -Safety (-2), No Score (0) } points [PAGE 7]. Covariates are X = { down, yards to go, yard line, ... } [PAGE 7]. The authors explicitly reject ordinary linear regression because the Gaussian iid assumption ε_i ~ N(0, σ²) fails on this bounded discrete support, calling the linear approach "IS A DISASTER!" [PAGE 10]-[PAGE 11]. Instead they specify a multinomial logistic regression with six logit transformations relative to the No Score baseline [PAGE 12], yielding P(Y=y | X=x). Expected points is the first moment EP(x) = Σ_y y · P(Y=y | X=x), measured in expected points [PAGE 13]. The model is "agnostic of value associated with each next score type" [PAGE 13], meaning it encodes probability but not utility; value enters only through the point values attached to outcomes.

Hop 3 — Play value. Expected Points Added is the first difference of the state value: EPA_i = EP(x_{i+1}) − EP(x_i), in points per play [PAGE 14]. For passes, the state is split at the reception point: airEPA_i = EP_air,i − EP_start,i and yacEPA_i = EP_{i+1} − EP_air,i [PAGE 14]. This air/yac decomposition imposes a causal cut at the catch that does not exist in raw EPA; it assumes the quarterback controls value up to the point of the ball arriving and the receiver controls value thereafter, ignoring pass trajectory, defensive coverage, and whether the throw was catchable [PAGE 23].

Hop 4 — Credit allocation. Because "One player is not solely responsible for a play’s EPA" [PAGE 14]-[PAGE 15], the authors fit varying-intercept multilevel models rather than crediting individuals directly. A representative specification is EPA_i ~ N( QB_{j[i]} + REC_{k[i]} + x_i^T β, σ²_EPA ), with QB_j ~ N( μ_QB, σ²_QB ) and REC_k ~ N( μ_REC, σ²_REC ) [PAGE 16]-[PAGE 17]. Partial pooling shrinks players with few attempts toward the group mean; every play is treated as a repeated measure of performance [PAGE 16]. The player intercept is individual points added (iPA), the team intercept is team points added (tPA), and scaling by attempts yields iPAA/tPAA [PAGE 18]. Passing groups are (offensive team, QB, receiver, defensive team); rushing groups are (team-side-gap, rusher, defensive team), where team-side-gap (e.g., PIT-left-end) proxies offensive-line quality [PAGE 18]. For quarterback-designed runs, scrambles, and sacks, team-side-gap is replaced by offensive team [PAGE 19].

Hop 5 — Replacement level. Following openWAR [Baumer et al., 2015] [PAGE 27], total individual points above average is iPAA^total_i = iPAA^rush_i + iPAA^air_i + iPAA^yac_i. A replacement-level shadow iPAA^replacement_i is constructed per team and position by sorting on attempts (separate RB/FB replacement levels for rushing and receiving), and individual points above replacement is iPAR_i = iPAA^total_i − iPAA^replacement_i,total [PAGE 27]. This shadow is static within a season and defined by roster attempt count, not by market availability, injury timing, or positional scarcity.

Hop 6 — Wins conversion. A linear regression of wins on total score differential produces 1 / (Points per Win) = β̂_Score Diff [PAGE 28]-[PAGE 29]. For 2016, β̂_Score Diff = 0.0319, or roughly 31 points per win [PAGE 29]. Final WAR is WAR_i = iPAR_i / (Points per Win) [PAGE 29].

Gray-zone audit. (1) Singularity: the multinomial logit is not identified when a game state (down, distance, yard line) has been observed with only one next-score outcome in 2009–2016; the logit diverges and EP has no finite estimate for that cell. (2) Censoring: EP assumes a "next scoring play" [PAGE 6] but end-of-half kneel-downs and two-minute-drill plays may expire before any score occurs; the model has no clock covariate and therefore misstates EP in clock-sensitive states. (3) Additivity failure: the varying-intercept model estimates QB + REC + team + defense as separable terms. It cannot capture QB–receiver specific chemistry beyond the shared random-effect structure, nor offensive-line synergy beyond the coarse team-side-gap bucket [PAGE 18]. (4) Replacement rigidity: a Week 1 starter and a Week 17 waiver replacement are compared against the same season-long shadow [PAGE 27], so mid-season injuries systematically misprice replacement value. (5) Linearity of wins: regressing wins on score differential assumes a constant points-per-win exchange rate [PAGE 28]-[PAGE 29], ignoring the nonlinear win distribution; 31 points per win is a local slope, not a structural constant. (6) Missing uncertainty: the authors concede it is "Naive to assume player has same effect for every play!" and that "Need to estimate the uncertainty in the different types of iPA to generate intervals of WAR values" [PAGE 34]; consequently every WAR point estimate in this document is unintervalled and overconfident. (7) Environmental omission: wind, temperature, precipitation, and venue are not in X [PAGE 7], so dome and outdoor cold-weather games are treated as exchangeable, violating physical reality.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, assumptions, and breakdown regimes, with page citations.

Data operator. D = { (x_i, y_i, g_i) }_{i=1}^N where x_i ∈ X = {down, yards to go, yard line, ...} [PAGE 7], y_i ∈ 𝒴 = {7, 3, 2, 0, −2, −3, −7} points [PAGE 7], and g_i indexes game/play identifiers from nflscrapR covering 2009–2016 [PAGE 2], [PAGE 5].

Nearest-neighbor EP operator (considered but superseded). 
\widehat{EP}_{NN}(x) = \frac{1}{|\mathcal{N}(x)|} \sum_{(x',y') \in \mathcal{N}(x)} y'
where \mathcal{N}(x) identifies similar plays by down, yards to go, yard line [PAGE 8]. Breakdown: "what defines a similar play?" is unresolved [PAGE 8].

Rejected linear regression operator. 
\mathbb{E}[Y | X=x] = x^\top \beta, \quad \epsilon_i \overset{iid}{\sim} \mathcal{N}(0,\sigma^2)
Units: points. Assumptions: homoskedastic Gaussian errors, unbounded continuous support [PAGE 10]. Breakdown regime: Y is discrete, bounded, and heteroskedastic; the authors declare this "IS A DISASTER!" [PAGE 11].

Adopted multinomial logistic regression. Six logits relative to No Score (y=0) [PAGE 12]:
\log \frac{P(Y=y | X=x)}{P(Y=0 | X=x)} = x^\top \beta_y, \quad y \in \{7,3,2,-2,-3,-7\}
Units: log-odds (dimensionless). Outcome probabilities P(Y=y|X=x) sum to 1 over 𝒴 [PAGE 12]-[PAGE 13].

Expected points operator. 
EP(x) = \mathbb{E}[Y | X=x] = \sum_{y \in \mathcal{Y}} y \, P(Y=y | X=x)
Units: expected points (points, dimensionless expectation). "Model is generating probabilities, agnostic of value associated with each next score type" [PAGE 13].

Expected Points Added operator. 
\mathrm{EPA}_i = EP(x_{i+1}) - EP(x_i)
Units: points per play. "EPA estimates a play’s value based on the change in situation, providing a point value" [PAGE 14].

Air / YAC decomposition operators (passing only). 
\mathrm{airEPA}_i = EP_{\mathrm{air},i} - EP_{\mathrm{start},i}, \qquad
\mathrm{yacEPA}_i = EP_{i+1} - EP_{\mathrm{air},i}
Units: points per play. Receptions are assigned airEPA and yacEPA; incomplete passes use observed EPA [PAGE 14], [PAGE 23]. Both models adjust for QB hit, receiver position, and pass location; yacEPA additionally adjusts for air yards [PAGE 23].

Multilevel varying-intercept operator. 
\mathrm{EPA}_i \sim \mathcal{N}\!\left( \alpha^{\mathrm{QB}}_{j[i]} + \alpha^{\mathrm{REC}}_{k[i]} + x_i^\top \beta, \; \sigma^2_{\mathrm{EPA}} \right)
\alpha^{\mathrm{QB}}_j \sim \mathcal{N}(\mu_{\mathrm{QB}}, \sigma^2_{\mathrm{QB}}), \quad
\alpha^{\mathrm{REC}}_k \sim \mathcal{N}(\mu_{\mathrm{REC}}, \sigma^2_{\mathrm{REC}})
Units: points per play for all intercepts and slopes. Groups receive a model (partial pooling); unlike linear regression, plays are not assumed independent [PAGE 16]-[PAGE 17]. Breakdown regime: groups with n_g = 1 play are unidentified without the prior; sparse players are shrunk almost entirely to \mu_{\mathrm{QB}} or \mu_{\mathrm{REC}} when \sigma^2_{\mathrm{group}} \ll \sigma^2_{\mathrm{EPA}}/n_g.

nflWAR grouping operator. Passing: groups = (offensive team, QB, receiver, defensive team). Rushing: groups = (team-side-gap, rusher, defensive team), where team-side-gap (e.g., PIT-left-end, PIT-left-guard, PIT-middle) proxies the offensive line [PAGE 18]. For QB rushes, team-side-gap is replaced by offensive team [PAGE 19].

Credit operators. Player intercept \Rightarrow iPA (individual points added); team intercept \Rightarrow tPA (team points added) [PAGE 18]. Scaling by attempts:
\mathrm{iPAA}_i = \mathrm{iPA}_i \times n_i, \qquad \mathrm{tPAA} = \mathrm{tPA} \times n
Units: points.

Replacement operator. 
\mathrm{iPAA}^{\mathrm{total}}_i = \mathrm{iPAA}^{\mathrm{rush}}_i + \mathrm{iPAA}^{\mathrm{air}}_i + \mathrm{iPAA}^{\mathrm{yac}}_i
\mathrm{iPAR}_i = \mathrm{iPAA}^{\mathrm{total}}_i - \mathrm{iPAA}^{\mathrm{replacement},\mathrm{total}}_i
Units: points. Replacement shadow is roster-attraction ranked by attempts within team-position [PAGE 27].

Wins conversion operator. 
W = \gamma_0 + \gamma_1 \Delta\mathrm{Score} + \eta, \quad \mathrm{PPW} = 1 / \hat{\gamma}_1
Units: PPW in points per win; \gamma_1 in wins per point. For 2016, \hat{\gamma}_1 = 0.0319 \approx 1/31, "roughly 31 points per win" [PAGE 29]. Final:
\mathrm{WAR}_i = \mathrm{iPAR}_i / \mathrm{PPW}
Units: wins. Assumption: constant linear exchange rate between score differential and wins [PAGE 28]-[PAGE 29].

Exact singularity and breakdown regimes. (a) Multinomial logit perfect separation: any x cell with a single observed y over 2009–2016 yields infinite \beta_y and undefined EP [PAGE 12]. (b) Multilevel model under-identification: any player/team group with n_g < 2 plays cannot estimate \sigma^2_{group} separately from \sigma^2_{EPA} [PAGE 17]. (c) Linear regression on bounded discrete Y: invalid at all x because residuals cannot be Gaussian iid on {-7,...,7} [PAGE 10]-[PAGE 11]. (d) EP clock censoring: plays in the final minutes of a half where no subsequent score is possible violate the "next score" response definition [PAGE 6]-[PAGE 7].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage. The paper descends from operations-research football valuation, specifically Carter and Machol (1971), "Operations research on football" [REF 2], and Carroll et al. (1998), The Hidden Game of Football [REF 2], which established expected-points-style thinking. Advanced football analytics by Burke [REF 2] and Oliver’s (2011) proprietary Total QBR [PAGE 15] supplied the precedent for dividing passing credit between passer and receiver, though Total QBR relies on manually collected proprietary data that nflWAR explicitly avoids [PAGE 15]. The replacement-level construction follows openWAR (Baumer et al., 2015) [PAGE 27], which itself adapted baseball WAR to an open-source system [REF 1]. The multilevel machinery invokes Gelman and Hill (2007) [REF 3], Hastie et al. (2009) [REF 3], Judge et al. (2015) Deserved Run Average for baseball [PAGE 16], and Richard McElreath’s dictum "Multilevel Regression as Default" [PAGE 16]. The points-per-win calibration cites Zhou and Ventura (2017), a CMU freshman research project on "Wins & Point Differential in the NFL" [PAGE 28]. Data plumbing descends from nflscrapR by Maksim Horowitz [PAGE 2].

Multi-week traps embedded in the genealogy. (1) Static replacement-level trap: because iPAA^replacement_i is computed once per season by roster attempt ranking [PAGE 27], a starting QB lost in Week 3 leaves a replacement shadow that still reflects the starter’s volume, not the actual waiver-wire talent available in Weeks 4–17. Over multiple weeks, the backup’s iPAR is contaminated by the starter’s ghost. (2) Partial-pooling lag trap: early-season QB and receiver intercepts are heavily shrunk to \mu_{\mathrm{QB}} and \mu_{\mathrm{REC}} [PAGE 17]. A breakout player in Weeks 1–4 is systematically underrated until attempt volume accumulates, creating a multi-week delay before true talent is reflected in iPA. (3) Defensive confounding trap: offensive team, QB, and receiver iPA are estimated alongside defensive team intercepts [PAGE 18]. Over a season, schedule strength is partially absorbed by group intercepts, but because the model is additive and not interaction-rich, a QB facing a string of weak defenses receives inflated iPA that persists for weeks until defensive group variation re-centers. (4) Game-script trap: trailing teams pass more and face different down-distance-yard-line distributions, but X contains no score differential or clock [PAGE 7]. Over weeks, teams in close games accumulate different EP situations than blowout teams, so iPA reflects game script as much as skill. (5) Environmental stationarity trap: the 2009–2016 EP surface assumes scoring rules and field-position values are stable across the entire window [PAGE 7]-[PAGE 8], but rule emphasis changes (e.g., defensive pass-contact enforcement) can shift the multinomial logit coefficients mid-window, making early- and late-season EP non-comparable without re-estimation.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock. Crisis habit regression: under high-stakes states (late-game, score-close, high EPA leverage), players and coordinators regress to habit. A quarterback under pressure reverts to short, high-completion throws; a running back in a crisis down-and-distance presses the hole. The nflWAR multilevel model treats EPA_i as exchangeable conditional on X and group intercepts [PAGE 17], so it cannot represent a player’s crisis-specific deviation from baseline. If a QB’s airEPA in two-minute drills differs systematically from first-quarter airEPA, the varying-intercept \alpha^{QB}_j averages the two, miscrediting both contexts. This is a recursive theory-of-mind failure: the model does not anticipate that the player’s own behavior changes because the game state changed, nor that the defense anticipates that change.

Counter-trap: offensive play-calling is itself a response to defensive alignment. The team-side-gap O-line proxy [PAGE 18] assumes a static blocking effect for PIT-left-end across all plays. In reality, an offensive coordinator runs a counter-trap when the defense over-pursues to one side; the rusher’s iPA_rush on that play is generated by scheme, not individual power. Because the model assigns rusher and team-side-gap as additive intercepts [PAGE 18]-[PAGE 19], the counter-trap value is split arbitrarily between rusher and offensive-line group, and neither term is identified as situational. Recursive depth: the offense expects the defense to adjust to the run, so it passes; the model attributes the pass EPA to QB + receiver + teams but not to the meta-game of run-pass equilibrium.

Clock: the clock is absent from X = {down, yards to go, yard line, ...} [PAGE 7]. EP is defined as the expected value of the "next scoring play" [PAGE 6], but with 12 seconds left in the half there may be no next scoring play before the clock expires. End-of-half kneel-downs, victory formations, and two-minute-drill spikes are therefore valued under a false stationarity assumption: the model imagines a future scoring opportunity that the clock prohibits. Recursive interaction: a coach managing the clock chooses plays to consume time, not to maximize EP; the model, lacking clock covariates, credits or debits players for clock-management EPA that is strategically mandated rather than skill-generated. The breakdown regime is terminal-game states where clock time \tau \to 0 and EP(x) ceases to be a well-defined expectation over future scores.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. The data frame includes passer, target receiver, tackler(s), interceptor, air yards, yards after catch, location, and QB-hit status for passes; rusher and tackler(s), run gap, and location for rushes [PAGE 15]. It does not include player mass, acceleration, collision force, or separation distance. A power back and a scat back gaining the same two yards between the tackles receive identical rushing EPA and thus identical iPA_rush [PAGE 19], despite different biomechanical load and different probabilities of injury or fumble. Veto: if a claim of rusher superiority rests on iPA_rush alone, it is vetoed unless supported by a physical-layer metric (e.g., expected yards after contact) because team-side-gap only coarsely proxies O-line blocking quality [PAGE 18].

Biomechanical layer. QB-hit status is a covariate [PAGE 15], but throwing mechanics, release time, arm fatigue, and route-running separation are not. airEPA credits the quarterback for ball placement [PAGE 23], but the receiver’s release and stem determine whether the throw was open; yacEPA credits the receiver after the catch [PAGE 14], but the throw’s location and velocity determine yards-after-catch opportunity. The air/yac cut assumes a clean causal boundary at the reception point that does not exist biomechanically. Veto: any comparison of QB iPA_air across receivers with different separation profiles is vetoed unless receiver separation is included as a covariate; it is not in X [PAGE 7].

Weather layer. Temperature, wind speed, precipitation, and venue (dome vs. outdoor) are absent from X [PAGE 7]. Wind suppresses passing air yards and thus airEPA [PAGE 23]; cold affects ball handling and kicking EP. Because the model treats all game states as exchangeable conditional on down, distance, and yard line, a quarterback playing a December game outdoors in the wind receives the same EP surface as a dome quarterback. Veto: passing iPA_air and iPA_yac estimates from games with wind speed above a threshold are vetoed for cross-game comparison unless a weather interaction term is added.

Adjudication rule. Let n_g be the number of plays for group g (QB, receiver, team-side-gap, etc.), and let \lambda_g = \sigma^2_g / (\sigma^2_g + \sigma^2_{\mathrm{EPA}} / n_g) be the shrinkage factor toward the group mean [PAGE 17]. A player-level iPA claim is vetoed if any of the following holds: (V1) n_g < n_{min} for a pre-specified minimum attempt threshold (the intercept is not identified); (V2) \lambda_g > 0.90 (near-total shrinkage, so the intercept is effectively the group average, not the player’s effect); (V3) the multinomial logit cell for the play’s (down, yards to go, yard line) exhibits perfect separation over 2009–2016 (EP is singular) [PAGE 12]; (V4) the play occurs in a terminal clock state where no next score is possible before half or game end (EP is censored) [PAGE 6]-[PAGE 7]; (V5) the game weather layer is missing and the play is a pass in high wind (airEPA/yacEPA is environmentally confounded). Only claims surviving V1–V5 may be aggregated into iPAA and WAR.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-style counterfactual veto scenarios with falsifiable predictions.

Scenario 1 — Mid-season starting-quarterback injury. Counterfactual: the team’s starting QB is injured after Week 6 and replaced by a backup. The replacement-level shadow iPAA^replacement_i is computed from season-long attempt ranking [PAGE 27], so the backup is compared against a shadow built partly from the starter’s early-season volume. Veto trigger: the backup’s WAR displays a step change at the injury week unaccompanied by a corresponding step change in play-level EPA (the backup’s EPA per play is unchanged but iPAR jumps because the replacement shadow is stale). Prediction: regressing weekly backup iPAR on an indicator for post-injury weeks yields a positive coefficient (\delta > 0) while weekly mean EPA per play remains flat (\delta_{EPA} \approx 0). Verification: compare backup WAR before and after the starter’s injury using only plays after Week 6; a significant iPAR shift without EPA shift invalidates the static replacement assumption.

Scenario 2 — Screen-pass schematic confounding. Counterfactual: two receivers have identical air yards but one operates in a screen-heavy offense. airEPA_i = EP_air,i − EP_start,i is near zero on screens because the pass travels a short distance [PAGE 14], while yacEPA_i = EP_{i+1} − EP_air,i captures most of the value [PAGE 14]. The model assigns yacEPA to the receiver [PAGE 23], inflating iPA_yac for screen receivers relative to deep-ball receivers who generate value through airEPA credited to the QB. Veto trigger: a receiver’s iPA_yac / iPA_air ratio exceeds 2.0 while average air yards per target are below 5 yards. Prediction: screen-heavy receivers show elevated iPA_yac that does not correlate with separation-based metrics or with EPA on non-screen plays. Verification: stratify receivers by screen rate; test whether iPA_yac remains predictive of next-season EPA after conditioning on air yards and separation. Failure of predictive validity triggers veto of iPA_yac as a receiver skill measure.

Scenario 3 — High-wind environmental confounding. Counterfactual: a set of games is played with sustained wind above 15 mph. Wind is not a covariate in X [PAGE 7], so passing EP is misestimated for all quarterbacks and receivers in those games; airEPA is suppressed independently of quarterback skill [PAGE 23]. Veto trigger: group-level residuals of QB intercepts \alpha^{QB}_j are negatively correlated with wind speed across games (\rho < -0.30), violating the exchangeability assumption \alpha^{QB}_j \sim \mathcal{N}(\mu_{\mathrm{QB}}, \sigma^2_{\mathrm{QB}}) [PAGE 17]. Prediction: in high-wind games, passing WAR for all QBs shifts downward as a group relative to low-wind games, even after controlling for opponent defensive team intercept. Verification: fit \alpha^{QB}_j = \delta_0 + \delta_1 \cdot \mathrm{WindSpeed} + \epsilon; reject the no-confounding null if \delta_1 < 0 with p < 0.05. If rejected, all passing iPA from high-wind games is vetoed until wind is added to the multinomial logit covariates.
</RLVR_COUNTERFACTUAL_VETOES>