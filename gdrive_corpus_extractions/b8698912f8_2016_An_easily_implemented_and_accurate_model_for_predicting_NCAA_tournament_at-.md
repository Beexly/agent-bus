---
source: "2016 An easily implemented and accurate model for predicting NCAA tournament at-large bids - B. Jay Colemana, J. Michael DuMond and Allen K. Lynch.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 12
model: deepseek/deepseek-v4.1-flash-1017
words: 7957
---

<NATIVE_REASONING>
We need answer user. Need comply. They ask DRIVE SOURCE with paper. Need produce analysis likely sports research? They didn't explicitly ask question, just provided source. Need infer task: analyze paper under GSE+GSI Frontier Reasoning Foundry with exact XML sections, >=1000 words, no betting lines. Must include <THINK_TRACE> >=400 words etc. Need cite exact [PAGE N] and verbatim quotes in SOURCE_OPERATORS_AND_EQUATIONS. Need formal LaTeX, units, assumptions, singularities/breakdown regimes. Need sections exact XML. Need mention no betting lines. Need maybe identify operators/equations from paper: probit model, latent variable, AIC, RPI formula, cross-validation misses, etc. Need cite page markers and quotes. Need deep multi-hop derivation & gray-zone audit. Need retrocausal genealogy. Need recursive theory of mind. Need cross-layer veto adjudication physical/biomechanical/weather veto proof. Need RLVR counterfactual vetoes 3 verifiable scenarios + predictions. Need probably contextualize as research paper about NCAA at-large bids; no lines. Need ensure no spreads/totals/moneylines/odds. Mention no betting lines. Avoid "odds" word? They said never mention odds; but "odds" in prompt? Avoid. Need no betting line mention except "no betting lines"? It says never mention spreads, totals, moneylines, or odds. Better avoid those terms entirely. Can say "No wagering markets are referenced." But "wagering markets" maybe okay. Need zero betting lines: don't mention spreads etc. We can mention "prediction targets are binary bid outcomes, not market lines."

Need include formal equations. Let's derive:

Probit: y_i^* = x_i' β + ε_i, ε_i ~ N(0,1). y_i=1 if y_i^*>0. P(y_i=1|x_i)=Φ(x_i'β). Or for selection: BID_i ∈ {0,1}. Equation (3) from Table 2:
latent = -0.3082 + 3.2486 BIDS37 -0.2558 RPIRANK -0.8265 CONFBELOW500 + 2.7509 T25WINS + 1.2572 T50WINS + 0.8364 T100ABOVE500 + 0.6795 ROADWIN + 2.7759 P10 + 1.2021 T50ABOVE500. Need check equation (3) includes T50ABOVE500 and P10, yes table. Equation (3) missing 1 in-sample, 4 cross-val. Cite [PAGE 7] Table 2. Need cite exact quotes maybe:
"Equation (3) misses only one at-large slot in the entire ﬁve-year interval: the model errs on Florida State’s selection in 2011." [PAGE 7]
"P10 2.7759∗" [PAGE 7]? Table quote.
"Predictors included in the model are all easily computed..." [PAGE 1]
"former version of the RPI was used throughout..." [PAGE 5]
Need exact [PAGE N] markers.

Formal RPI equation? From paper: RPI weighted average of three factors: team winning percentage vs D1, opponents' winning percentage, opponents' opponents' winning percentage; weights 25%, 50%, 25%. SOS latter two weights 66.7%, 33.3%. Pre-2005 home/road weighted identically; post-2005 home wins/road losses 0.6; home losses/road wins 1.4. We can formalize:
RPI = 0.25 W_team + 0.50 W_opp + 0.25 W_oppopp. (Using old version equal weights by site). Current RPI element uses adjusted win percentage with weights w_homewin = w_awayloss = 0.6, w_homeloss = w_awaywin = 1.4? Wait need be precise: "home wins and road losses count as 0.6 each, and home losses and road wins count as 1.4 each, when computing a team’s winning percentage". That's odd: wins and losses weights? It says home wins and road losses count 0.6 each; home losses and road wins count 1.4 each. So weighted wins/losses? Could formalize adjusted WP = (0.6 HW +1.4 AW +? neutral?)/(0.6 HW +1.4 AW +0.6 RL +1.4 HL + neutral?). But we don't need. Need units: RPI is dimensionless, ranks ordinal; probit coefficients per unit rank/count; probability dimensionless [0,1]; AIC in nats? AIC = 2k - 2 ln L, in nats if natural log; info units. Cross-validation miss count integer. Could mention no physical SI units except counts/rank; dimensionless. "SI units not applicable; variables are ordinal ranks and counts." They asked SI/information/probability units. We can state.

Need assumptions: probit errors N(0,1), independence? Actually observations maybe not independent? Need note. Linear latent index, no interactions, stable committee policy within estimation window, RPI pre-2005 version used, BIDS37 control for expanded bids, candidate sample RPI rank 20-80, New Mexico 1999 omitted in 15-year fit. Need singularities/breakdown regimes: perfect separation when linear predictor separates BID=1 and 0 causing MLE coefficients diverge; multicollinearity inflates SEs; structural break if committee changes policy; small n per year; P10 indicator may proxy unobserved effects; RPI measurement version change; candidate truncation. AIC can be misleading under complete separation. Need formulas for AIC and cross-validation miss count:
AIC = 2k - 2 \ell(\hatβ)
CV = Σ_{y=2009}^{2013} Σ_{i in year y} 1{ \hat BID}_{i}^{(-y)} ≠ BID_i. Maybe weighted? "number of at-large bids missed using leave-one-year-out cross-validation". Good.

Need "gray-zone audit" maybe discuss 2011 Florida State miss, 2014 NC State, 2015 Boise State/Dayton/UCLA/Temple. Need quote exact. Need no betting.

Need "retrocausal genealogy": historical/scientific lineage & multi-week traps. Could trace Coleman & Lynch 2001, 2010, 2011; Paul & Wilson 2012; Shapiro et al 2009; Leman et al 2014; RPI history pre/post 2005. Multi-week traps: tournament bracket announcement ~3 weeks; selection process multi-month; committee membership staggered 5-year; recency windows; "multi-week traps" perhaps avoid overfitting to late-season narratives; March selection. Need mention "the approximately three weeks from the time the playoff bracket is announced until its ultimate winner cuts down the nets" [PAGE 1]. Also "multi-month process of projecting the teams" [PAGE 2]. Multi-week traps in modeling: recency bias, conference tournament week overreaction, late injury/weather? Hmm sports. Need map to multi-week traps: between conference tournaments and Selection Sunday, media expert consensus can shift; model uses full-season counts not last-10 games; this avoids late-window overreaction. Need cite? Paper doesn't explicitly discuss last 10. But can infer? Be careful not invent. Could say audit distinguishes multi-week narrative drift from model's stable features.

Need "RECURSIVE_THEORY_OF_MIND": Crisis habit regression vs counter-trap vs clock. Need interpret: committee decision-making under uncertainty; recursive mental models: experts model committee; committee knows experts; model reconstructs committee's historical policy. Crisis habit regression = reverting to conference brand/P10 bias under pressure? Counter-trap = overcorrecting for expert consensus or recency; clock = five-year committee turnover, yearly windows, BIDS37 structural change. Need discuss. Could mention "committee members serve staggered ﬁve-year terms" [PAGE 2]. Use that. Also "committee deliberations take place in private closed sessions and little is typically revealed..." [PAGE 2]. Need discuss theory of mind: model treats committee as policy agent; experts as forecasters; recursive nesting can overfit to public consensus. Need "crisis habit regression vs counter-trap vs clock" as named audit categories. Need maybe define: crisis habit regression: when selection uncertainty spikes, committee falls back to historical biases (P10, conference commissioner); counter-trap: if public models learn bias, committee corrects, invalidating model; clock: staggered terms and changing bid count. Need cite evidence: P10 factor remained significant every window [PAGE 6], Big East/MVC/commissioner lost significance as windows shortened [PAGE 6]. This is perfect for recursive ToM. Need mention "Fig. 1 p-values ... when fit to progressively shorter time frames" [PAGE 7]. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION": Physical/biomechanical/weather veto proof. This is odd for NCAA selection paper. Need adapt: cross-layer veto layers: physical (game outcomes, injuries? not in model), biomechanical (player load/fatigue? not modeled), weather (travel disruptions? not modeled). The paper's model does not include these; so any claim requiring these is vetoed. Need provide proof via absence: variables in Table 1 are team performance/RPI/conference/committee, no weather, biomechanics, injury. [PAGE 4] Table 1. Thus model's predictive claim is limited to selection policy given RPI/counts; cannot adjudicate physical/biomechanical/weather causal effects. Need maybe say these layers do not veto bid-policy inference because they are not in scope and the outcome is committee selection, not game result. But if external claim says weather caused bid, veto. Need "veto proof" formal: define layer inclusion set L = {RPI, counts, conference}; if claim c requires variable v not in L, then evidence e cannot support c. Need no fake ratios. Use set logic. Need cite Table 1. Could include: "Table 1 describes all potential predictors included in the analysis" [PAGE 3]. Actually page 3 says Table 1 describes all potential predictors; table on page 4. Good. Need adjudicate: physical/biomechanical/weather are outside measured predictors; they can affect game scores and thus counts indirectly, but the model uses realized counts as sufficient statistics for selection policy. The paper's outcome is BID, not game outcome. Need mention no physical units.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need propose counterfactual veto scenarios that can be verified from paper. Need 3 scenarios each with prediction and veto if contradicted. Need ensure verifiable: e.g., (1) Replace pre-2005 RPI with current RPI; paper says former better AIC 116.4 vs 152.6, misses 12 vs 15. Prediction: former RPI model has lower AIC and fewer misses. Veto if current RPI beats former. (2) Add P10 to eq1; eq2 improves cross-val from 6 to 5 misses and in-sample 5 to 2. Prediction: P10 improves. Veto if no improvement. (3) Equation (3) out-of-sample 2014/2015 predicts 35/36 and 33/36; if fitted model predicts fewer, veto? Need exact. Or use alternate ranking addition: DCI improves cross-val to 3 vs 4 but not preferred due implementation; prediction: DCI addition yields 3 cross-val misses. Veto if not. Or use stepwise 16-predictor complete separation but cross-val 6 misses vs eq3 4; prediction: complete separation model worsens cross-val. Need 3 verifiable scenarios with exact predictions from paper. Could choose:
1. RPI version counterfactual: Fit BIDS37 + RPIRANK only using old vs current RPI. Predict old AIC 116.4, 12 in-sample misses, 12 CV; current AIC 152.6, 15 misses. Veto if old not better.
2. P10 bias persistence: Iteratively shorten windows with P10/BE/MVC/CONFONCOMM. Predict P10 remains significant in every window; CONFONCOMM drops by 2002-2013; BE by 2004-2013; MVC by 2008-2013. Veto if P10 loses significance or others persist.
3. Equation (3) out-of-sample: Predict 2014 35/36, 2015 33/36; total 68/72 [PAGE 1 abstract says 68 of 72]. Veto if total not 68. This is verifiable. Need maybe include "68 of 72 bids" quote [PAGE 1].
Need include predictions with exact numbers. Good.

Need ensure >=1000 words total. We can write maybe 2500-3500 words. Need XML sections exact. No extra outside? We can include all sections. Need maybe include a title? Not necessary. Need maybe final answer only XML. Need ensure <THINK_TRACE> >=400 words. It says deep multi-hop derivation & gray-zone audit (>=400 words). We can make THINK_TRACE 700 words. Other sections sufficient. Total >1000.

Need cite exact [PAGE N] markers and verbatim quotes in SOURCE_OPERATORS_AND_EQUATIONS. Need use quotes exact. Need not overdo. Use page markers. Need not cite every sentence but include. Need exact quotes from source. Need be careful with Unicode? Paper has "ﬁ" ligature. We can quote as "Equation (3) misses only one at-large slot in the entire ﬁve-year interval: the model errs on Florida State’s selection in 2011." [PAGE 7]. Good.

Need include formal LaTeX. In XML, text can include LaTeX. Need use &? XML special characters: avoid raw &, <, >? In XML, < and & must be escaped. Need equations with < maybe problematic. We need produce valid XML? The prompt shows sections with tags. Inside text, use &lt; for less-than. But maybe not required. Need be safe: escape & as &amp;, < as &lt;, > as &gt;? But LaTeX uses < in inequalities. We can use \lt? Better use escaped \lt? In XML, use &lt;. But LaTeX expressions with p < 0.05 should be p &lt; 0.05. Need also use β etc unicode okay. Need avoid raw & in "Coleman et al." no ampersand. Need in equations, \hat{\beta} no &.

Need include quotes with "ﬁ" maybe okay. Need no raw < in text. Use \le or \lt? If using LaTeX, "p < 0.05" must escape. Use "p \lt 0.05" maybe not valid LaTeX? Could use "p &lt; 0.05" inside text; in math use "p < 0.05" but XML parser would see tag. Need escape: "p &lt; 0.05". In math mode, "p &lt; 0.05" becomes p < 0.05 after XML parse. Fine. Need for "x_i'\beta > 0" escape >? > is okay in XML text? In XML, > is allowed except in "]]>"? Actually > allowed. < not. So only escape & and <. Need avoid raw "&" in "R&D"? none. Need use "et al." no ampersand. Good.

Need include "SI/information/probability units": state "AIC uses nats when natural logarithm; probabilities dimensionless; ranks/counts dimensionless; no SI mechanical units." Need mention "log-likelihood" in nats. Formula:
\[
\mathrm{AIC}=2k-2\ell(\hat{\beta}),\quad \ell(\hat{\beta})=\sum_{i=1}^{n}\left[y_i\ln \Phi(x_i'\hat{\beta})+(1-y_i)\ln(1-\Phi(x_i'\hat{\beta}))\right]
\]
Units: nats. Probability: \(\Pr(\mathrm{BID}_i=1|x_i)=\Phi(x_i'\beta)\in[0,1]\). \(\Phi\) standard normal CDF. \(x_i'\beta\) dimensionless latent index. Coefficients: per unit of RPIRANK/count. Because rank is ordinal; coefficient sign only meaningful.

Need "singularity/breakdown regimes": 
- Perfect separation: if ∃β such that x_i'β>0 for all y_i=1 and <0 for y_i=0, MLE diverges, AIC undefined/infinite; paper notes complete separation and Firth adjustment [PAGE 8? Page 8 footnote 8? Actually page 8 has footnote 8 about POWER6 complete separation; page 8? Let's locate: PAGE 8 starts "128 B.J. Coleman..." includes "POWER6 was not significant..." footnote. It says "complete separation of the in-sample data" [PAGE 8]. Good. Also page 8 Table 3 and "complete separation" [PAGE 8]. Use.
- Multicollinearity: paper says "multicollinearity among many of the predictors inﬂates standard errors and disturbs inferences" [PAGE 5]. Good.
- Structural break: "selection process has been fundamentally different recently" [PAGE 6]. Good.
- Small sample/truncation: candidate RPI 20-80, n=243 [PAGE 5]. Good.
- RPI version: old vs current [PAGE 5].
Need include "breakdown regime" maybe if committee policy changes, P10 indicator becomes spurious; if committee membership changes, coefficients not stable; if bid count changes, BIDS37 handles only 2011-2013 expansion. If further expansion, control invalid.

Need "multi-hop derivation": from abstract claims to model selection to cross-validation to out-of-sample to comparison to experts. Need trace:
1. Problem: predict at-large bids.
2. Data: 1999-2013, candidate RPI ranks 20-80, 2009-2013 sample 243.
3. Candidate predictors 42? Table 1.
4. Stepwise probit selects eq1.
5. Check overfit with 15-year fit; observe conference biases; time-window iterative; P10 remains.
6. Add P10 -> eq2.
7. Add T50ABOVE500 -> eq3.
8. Evaluate AIC/CV; eq3 best.
9. Alternate model selection and rankings confirm.
10. Out-of-sample 2014-2015.
Need audit gray zones: Florida State 2011 miss; P10 bias could be proxy; committee secrecy; expert comparison; "North Carolina State" "Dayton" anomalies. Need mention exact.

Need "retrocausal genealogy": 
- RPI created pre-2005 equal weighting; NCAA changed 2005; Coleman et al. 2010 used old RPI; Paul & Wilson 2012 used current RPI and Sagarin; Leman et al. 2014 used current RPI and marquee; this paper uses old RPI because committee decisions 2009-2013 align more with it (AIC 116.4 vs 152.6). This is retrocausal: later selection data reinterpret earlier metric choice. 
- Coleman & Lynch 2001 six-factor; Coleman et al. 2010 15-factor; 2011 96.5% in-sample; 2015 this paper eight-factor? Actually equation (3) has 9 predictors? BIDS37 + 8? Abstract says eight-factor probit model? Let's count equation (3): BIDS37, RPIRANK, CONFBELOW500, T25WINS, T50WINS, T100ABOVE500, ROADWIN, P10, T50ABOVE500 = 9 variables + intercept. But abstract says eight-factor probit model. Maybe they don't count BIDS37? Or P10? It says predictors include RPI ranking, losses below .500, wins top25, wins second25, games above .500 vs second25, games above .500 vs 51-100, road wins, and Pac-10/12 = eight factors. T50ABOVE500 added? Wait abstract lists "games above 0.500 against the RPI second 25" = T50ABOVE500; "wins against RPI second 25" = T50WINS; "games above .500 against teams 51-100" = T100ABOVE500; "losses below .500 in-conference" = CONFBELOW500; RPI rank, T25WINS, road wins, P10. That's 8? Count: RPI rank (1), losses below .500 (2), T25WINS (3), T50WINS (4), T50ABOVE500 (5), T100ABOVE500 (6), ROADWIN (7), P10 (8). Yes T50ABOVE500 in abstract. Good. BIDS37 control not counted. Equation (3) has 8 factors plus control. Good.
- Multi-week traps: bracket matrix expert consensus; 136 experts; tournament three weeks; committee five-year terms. Need mention "BracketMatrix.com 2015 compiled 136 experts" [PAGE 2]. Good.

Need "RECURSIVE_THEORY_OF_MIND": Need perhaps formal? Could define nested beliefs:
- Level 0: committee policy \(P\).
- Level 1: experts forecast \( \hat{P}_{expert} \).
- Level 2: committee anticipates experts and may deviate or follow historical norms.
- Level 3: modeler anticipates committee's anticipation. Model uses historical revealed preference, not stated criteria. 
Crisis habit regression: when uncertainty high (bubble teams), committee may revert to brand/conference habits; P10 significant. Counter-trap: if experts overfit to a narrative (e.g., Dayton 2015), committee's actual ranking may deviate; paper says 110 of 136 had Dayton no worse than 9, model had Dayton second out; Dayton last in. This shows expert consensus as counter-trap. Clock: five-year staggered terms and yearly fit window; Fig 1 p-values over time. Need cite [PAGE 2], [PAGE 6], [PAGE 11].
Need "vs clock" maybe discuss time-based decay of biases: CONFONCOMM insignif 2002-2013, BE 2004-2013, MVC 2008-2013; P10 persistent. This is clock. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION": Need formal set logic and proof. We can write:
Let \(V_{\text{model}}\) be variables in Table 1. \(V_{\text{phys}}\) (injuries, player load, biomechanics) \(\cap V_{\text{model}}=\varnothing\). \(V_{\text{weather}}\cap V_{\text{model}}=\varnothing\). Therefore any causal claim "weather caused bid" is vetoed as direct effect; only indirect through realized wins/losses/RPI is admissible. Need cite Table 1 all potential predictors [PAGE 3/4]. Also paper says "Scores and game sites were collected from KenPom.com. RPI values..." [PAGE 5]. It doesn't include weather. "Scores and game sites" not weather. Good. 
Need "physical/biomechanical/weather veto proof": 
- Physical: team performance counts are realized outcomes; no injury variable. 
- Biomechanical: no load/fatigue variable; cannot adjudicate. 
- Weather: game sites only, no weather; cannot adjudicate. 
Veto rule: If claim requires a variable not in Table 1 and not a deterministic transformation of listed variables, mark unsupported. If claim is about selection policy conditional on listed variables, no veto. 
Need maybe mention "The model is not a game-outcome model; it is a selection-policy model." Good.

Need "RLVR_COUNTERFACTUAL_VETOES": Need 3 scenarios with verification. We should format as numbered list inside section. Include predictions and veto conditions. Make sure no betting lines. Use "binary bid outcome" not "odds". Good.

Need maybe mention "PAGE 1 abstract" exact quote: "correctly predicted 68 of 72 bids when used out of-sample for 2014 and 2015" [PAGE 1]. Good. "eight-factor probit model that would have correctly identified 178 of 179 at-large teams in-sample over the 2009–2013 seasons" [PAGE 1]. Use.

Need "SOURCE_OPERATORS_AND_EQUATIONS" include equations:
1. Probit latent:
\[
\mathrm{BID}_i = \mathbf{1}\{ y_i^* > 0\},\quad y_i^* = \beta_0 + \beta_1 \mathrm{BIDS37}_i + \beta_2 \mathrm{RPIRANK}_i + \beta_3 \mathrm{CONFBELOW500}_i + \beta_4 \mathrm{T25WINS}_i + \beta_5 \mathrm{T50WINS}_i + \beta_6 \mathrm{T100ABOVE500}_i + \beta_7 \mathrm{ROADWIN}_i + \beta_8 \mathrm{P10}_i + \beta_9 \mathrm{T50ABOVE500}_i + \varepsilon_i
\]
\[
\Pr(\mathrm{BID}_i=1|x_i)=\Phi(x_i'\beta)
\]
2. Estimated equation (3):
\[
\begin{aligned}
\hat y_i^* = &-0.3082 + 3.2486\,\mathrm{BIDS37}_i -0.2558\,\mathrm{RPIRANK}_i -0.8265\,\mathrm{CONFBELOW500}_i\\
&+2.7509\,\mathrm{T25WINS}_i +1.2572\,\mathrm{T50WINS}_i +0.8364\,\mathrm{T100ABOVE500}_i\\
&+0.6795\,\mathrm{ROADWIN}_i +2.7759\,\mathrm{P10}_i +1.2021\,\mathrm{T50ABOVE500}_i.
\end{aligned}
\]
Need cite [PAGE 7] Table 2. Note exact coefficients from Table 2. Need mention stars not needed.

3. AIC:
\[
\mathrm{AIC}=2k-2\ell(\hat\beta)
\]
with \(\ell\) log-likelihood.
4. Leave-one-year-out CV:
\[
\mathrm{CV}_{\text{miss}} = \sum_{t=2009}^{2013}\sum_{i\in \mathcal{I}_t} \mathbf{1}\{\hat{\mathrm{BID}}_{i}^{(-t)}\neq \mathrm{BID}_i\}
\]
where \((-t)\) omits year t. Units: count.
5. RPI:
\[
\mathrm{RPI}=0.25\cdot \mathrm{WP}_{\mathrm{D1}}+0.50\cdot \mathrm{OWP}+0.25\cdot \mathrm{OOWP}
\]
dimensionless. Old version \( \mathrm{WP}\) treats home/road identically. Current uses weights 0.6/1.4. But careful: "These three elements are weighted by 25%, 50%, and 25%." Good.
6. SOS:
\[
\mathrm{SOS}=\frac{2}{3}\mathrm{OWP}+\frac{1}{3}\mathrm{OOWP}
\]
dimensionless.
7. Maybe selection candidate set \( \mathcal{C}_t = \{i: 20\le \mathrm{RPIRANK}_{i,t}\le 80\}\). Good.

Need "units" for coefficients: \(\beta_2\) per rank unit; T25WINS per win; P10 per membership (0/1). Latent index dimensionless. Probability dimensionless. AIC nats. CV count. No SI units. Good.

Need "singularity/breakdown regimes" in same section. Include:
- Perfect separation: if \(\exists\beta\) such that \(x_i'\beta>0\) for all y=1 and \(x_i'\beta<0\) for all y=0, then \(\|\hat\beta\|\to\infty\), \(\ell\to0\), AIC may appear low but not identified. Paper reports complete separation for POWER6 and stepwise models [PAGE 8]. 
- Multicollinearity: "multicollinearity among many of the predictors inﬂates standard errors and disturbs inferences" [PAGE 5]. 
- Structural break: if committee policy changes, coefficients shift; paper uses progressive windows [PAGE 6]. 
- RPI version mismatch: if future committee uses current RPI, old RPI model breaks; paper found former RPI better for 2009-2013 [PAGE 5].
- Candidate truncation RPI 20-80 means model cannot predict outside support; if team rank <20 or >80, no evidence. 
- BIDS37 only handles 34->37 expansion; further expansion breaks control.
Need mention "small n" maybe.

Need include "verbatim quotes" in section. We can include quotes:
"An eight-factor probit model that would have correctly identified 178 of 179 at-large teams in-sample over the 2009–2013 seasons" [PAGE 1] (exact maybe "We extend prior research... and estimate an eight-factor probit model that would have correctly identiﬁed 178 of 179 at-large teams in-sample over the 2009–2013 seasons, and correctly predicted 68 of 72 bids when used out-of-sample for 2014 and 2015." [PAGE 1])
"Equation (3) misses only one at-large slot in the entire ﬁve-year interval: the model errs on Florida State’s selection in 2011." [PAGE 7]
"The former RPI ranking had better ﬁt metrics (AIC of 116.4 vs. 152.6), a larger coefﬁcient (–0.1326 vs. –0.0929), and missed fewer at-large slots in-sample (12 vs. 15) and during leave-one-year out cross-validation (12 vs. 15) than did the new version." [PAGE 5]
"multicollinearity among many of the predictors inﬂates standard errors and disturbs inferences" [PAGE 5]
"the Pac-10/12 factor was the only bias-related factor that remained signiﬁcant in every time window analyzed" [PAGE 6] (exact: "The Pac-10/12 factor was the only bias-related factor that remained signiﬁcant in every time window analyzed." [PAGE 6])
"Table 1 describes all potential predictors included in the analysis" [PAGE 3] Maybe exact: "Table 1 describes all potential predictors included in the analysis, which are similar to those employed..." [PAGE 3]. Good.
"the committee deliberations take place in private closed sessions and little is typically revealed" [PAGE 2] exact: "Committee deliberations take place in private closed sessions and little is typically revealed about exactly why a particular team is or is not selected in a given year." [PAGE 2]
"more than 60 million people in the U.S. complete a tournament bracket" [PAGE 1] maybe not needed.

Need ensure no "odds" word. We can say "No market prices, spreads, totals, moneylines, or odds are used." But that mentions them, violating? Better not mention those terms at all. Just say "The target is a binary selection outcome; no market-derived quantities enter." Avoid "odds". Need not mention "betting". Maybe "No wagering data are involved." That's okay but maybe "betting" not prohibited? They said zero betting lines; mention no betting lines okay? To be safe, avoid all terms. Use "No market-derived quantities enter the analysis."

Need "DRIVE SOURCE" maybe they expect to "drive" the source. We can state "Source: ..." No need.

Need final answer in XML. Need no markdown? XML sections. We can include LaTeX inside. Need maybe total word count. Let's draft carefully.

Potential issue: user requested "STRICT INVARIANTS: 1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." We must not mention those words. I will not. Avoid "betting" perhaps. Use "wagering" maybe not. Use "market-derived quantities" no specific words.

Need include "PAGE N" markers exact. Good.

Need maybe include "SOURCE_OPERATORS_AND_EQUATIONS" with quotes and citations. Need cite "Table 2" page 7. Good.

Need ensure XML tags exact:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>
Need closing tag for RLVR? Prompt has "<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>"? Actually last line: "<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>" It shows closing. Good.

Need maybe include word count? Not necessary. Could include "Word budget: >1,000." No.

Let's plan sections:

THINK_TRACE ~800 words:
- State source and task: audit paper's probit model for NCAA at-large bids.
- Multi-hop derivation: abstract claims -> data -> probit -> stepwise -> CV -> P10 -> eq3 -> alternates -> out-of-sample.
- Gray-zone audit: candidate truncation, RPI version, P10 proxy, Florida State miss, expert comparison, committee secrecy, complete separation, multicollinearity, structural break.
- Mention exact page citations.
Need >=400. Good.

SOURCE_OPERATORS_AND_EQUATIONS ~900 words:
- Formal probit, eq3, AIC, CV, RPI, SOS, candidate set.
- Units and assumptions.
- Page quotes.
- Singularity/breakdown regimes.
Need include exact quotes. Good.

RETROCAUSAL_GENEALOGY ~500 words:
- lineage from Coleman & Lynch 2001 to 2010/2011 to this 2016; Paul & Wilson 2012; Shapiro 2009; Leman 2014; RPI 2005 change.
- Multi-week traps: three-week tournament window; multi-month projection; expert consensus 136; recency windows; conference bias time decay.
Need cite [PAGE 1],[PAGE 2],[PAGE 3],[PAGE 5],[PAGE 6].

RECURSIVE_THEORY_OF_MIND ~500 words:
- define nested beliefs; crisis habit regression; counter-trap; clock.
- Evidence: private deliberations; staggered five-year terms; P10 persistent; BE/MVC/commissioner decay; Dayton 2015 expert consensus vs model; Florida State 2011.
Need cite [PAGE 2],[PAGE 6],[PAGE 7],[PAGE 11].

CROSS_LAYER_VETO_ADJUDICATION ~500 words:
- formal set logic; Table 1 variables; no physical/biomechanical/weather; only indirect via realized counts; veto proof; scope conditions.
Need cite [PAGE 3],[PAGE 4],[PAGE 5].

RLVR_COUNTERFACTUAL_VETOES ~400 words:
- 3 scenarios. Good.

Total >3000 words. Need maybe not too long but okay.

Need be careful with "biomechanical" maybe no citation but it's an external layer. Good.

Need mention "SI units": "No SI mechanical units are present; ranks and counts are dimensionless; probability is dimensionless; AIC is in nats; CV is integer count." Good.

Need formal equations use \(...\) but inside XML okay. Need escape < in "p < 0.05": use "p &lt; 0.05". Need "RPI ranks between 20 and 80" no issue. Need "y_i^* > 0" > okay. Need "\(\mathrm{BID}_i\in\{0,1\}\)" okay. Need "\(\ell(\hat\beta)\)" okay. Need "\(\Phi\)" okay.

Need exact quote with "ﬁ" ligature? We can use normal "fi" maybe not verbatim? Better use exact if possible. The source has "ﬁ" ligature. We can include "identiﬁed" with ligature? It may display. Use exact quote as provided: "identiﬁed 178 of 179". Good. Need quote "Equation (3) misses only one at-large slot in the entire ﬁve-year interval: the model errs on Florida State’s selection in 2011." Use exact. Good.

Need "PAGE 5" quote has "former RPI ranking had better ﬁt metrics (AIC of 116.4 vs. 152.6)" yes.

Need "PAGE 6" quote: "The Pac-10/12 factor was the only bias-related factor that remained signiﬁcant in every time window analyzed." Good.

Need "PAGE 8" quote: "complete separation of the in-sample data" [PAGE 8]. Good.
Need "PAGE 11" quote: "All 136 other methods at BracketMatrix.com projected Dayton to be chosen, with an average expected seed of 8.79" [PAGE 11]. Good.

Need "CROSS_LAYER" quote: "Table 1 describes all potential predictors included in the analysis" [PAGE 3]. Good.

Need "RECURSIVE" quote: "Committee deliberations take place in private closed sessions and little is typically revealed about exactly why a particular team is or is not selected in a given year." [PAGE 2]. Good. "committee members serve staggered ﬁve-year terms" [PAGE 2]. Good.

Need "RETROCAUSAL" quote: "Coleman and Lynch (2001) examined 249 potential at-large teams from 1994–1999 and 42 potential predictors" [PAGE 2]. Good. "A 15-factor probit model estimated from the same 1999–2008 data (Coleman et al., 2011) correctly assigned 96.5% of at-large slots in-sample and 170 of 179 slots (94.9%) out-of-sample from 2009–2013." [PAGE 3]. Good.
Need "Paul and Wilson (2012) focused on whether the bias findings..." [PAGE 3]. Good.

Need no "odds". Good.

Let's craft final. Need ensure all sections present. Use line breaks.

Potential issue: XML text contains "&" in "RPI top 25" no. "p &lt; 0.05". Good. Avoid raw "&" in "Coleman & Lynch" use "Coleman and Lynch". Good.

Need include "source text" maybe cite. Good.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The drive source is a 12-page Journal of Sports Analytics paper by Coleman, DuMond, and Lynch. The paper’s central claim is narrow and testable: an eight-factor probit model of NCAA Men’s Basketball Committee at-large bid decisions would have identified 178 of 179 at-large teams in-sample for 2009–2013 and predicted 68 of 72 out-of-sample bids for 2014–2015 [PAGE 1]. The multi-hop derivation runs from problem definition to candidate variable construction, probit estimation, stepwise variable selection, leave-one-year-out cross-validation, bias-window testing, alternate-model comparison, alternate-ranking comparison, and finally out-of-sample scoring.

First hop: the outcome is binary. A team receives an at-large bid or it does not. The paper’s outcome measure is “a binary variable (BID) reﬂecting whether a team received an at-large bid to the tournament” [PAGE 5]. That rules out treating the model as a continuous strength rating; it is a committee-policy classifier conditional on listed team-performance and conference variables.

Second hop: the candidate set is restricted. The analysis examines “a sample of 243 potential at-large bid candidates from 2009–2013” and focuses on “those bid-eligible teams in each season with RPI values ranked between 20 and 80” [PAGE 5]. This is a support restriction. The model cannot say anything about teams ranked far outside 20–80 unless one assumes parameter stability and linear extrapolation. That is a gray zone: the model is not a universal ranking of all Division I teams; it is a bubble-team selection model.

Third hop: the candidate predictors are mostly counts and ranks. Table 1 lists variables such as RPIRANK, CONFBELOW500, T25WINS, T50WINS, T100ABOVE500, ROADWIN, conference indicators, and committee-representation indicators [PAGE 4]. The paper says “Table 1 describes all potential predictors included in the analysis” [PAGE 3]. This is important for later veto adjudication: physical, biomechanical, and weather variables are not in the predictor set.

Fourth hop: the model-selection process is not purely AIC-minimizing. The authors explicitly balance predictive accuracy with face validity because the model is intended as a potential decision aid: “the acceptability of the model to such an array of constituencies was a concern” [PAGE 5]. They also warn that “multicollinearity among many of the predictors inﬂates standard errors and disturbs inferences” [PAGE 5]. So reported p-values are not clean causal tests; they are face-validity diagnostics under collinearity.

Fifth hop: stepwise probit yields equation (1), with six team-performance factors plus BIDS37. Equation (1) misses five of 179 at-large slots in-sample and six in leave-one-year-out cross-validation [PAGE 6]. The authors then test overfit by fitting the full 1999–2013 data set and examining conference misses. The 15-year fit misses five slots in 2009–2013 but 25 during 1999–2008, which the authors read as evidence that “the selection process has been fundamentally different recently” [PAGE 6]. That is a structural-break warning.

Sixth hop: bias-window testing. The paper iteratively shortens the estimation window and tracks P10, BE, MVC, and CONFONCOMM. It finds that CONFONCOMM becomes insignificant when fit to 2002–2013, BE becomes insignificant when fit to 2004–2013, and MVC becomes insignificant when fit to 2008–2013, while “The Pac-10/12 factor was the only bias-related factor that remained signiﬁcant in every time window analyzed” [PAGE 6]. Adding P10 gives equation (2). Adding T50ABOVE500 gives equation (3). Equation (3) “misses only one at-large slot in the entire ﬁve-year interval: the model errs on Florida State’s selection in 2011” [PAGE 7]. Cross-validation yields four misses [PAGE 8].

Seventh hop: alternate models and alternate rankings do not beat equation (3) on the authors’ criteria. The stepwise AIC-style sequence includes models with better AIC and complete in-sample separation, but they produce worse cross-validation, e.g. six misses versus four for equation (3) [PAGE 8]. Alternate ranking systems are also tested. The best AIC among 25 alternate ranking substitutions is 79.3, versus 47.7 for equation (3); when alternate rankings are added to equation (3), only eight are significant in the expected direction, and RPIRANK remains significant with a coefficient 3.11 to 5.61 times as large [PAGE 9]. The old RPI version is retained because it has better fit and fewer misses than the current RPI version: AIC 116.4 vs. 152.6, and 12 vs. 15 misses in-sample and cross-validation [PAGE 5].

Eighth hop: out-of-sample. Equation (3) predicts 35 of 36 in 2014 and 33 of 36 in 2015, totaling 68 of 72 [PAGE 1], [PAGE 10]. The misses are treated as committee deviations or near-cut-line cases: North Carolina State in 2014; Boise State, Dayton, and UCLA in 2015 [PAGE 10]. The paper argues that Dayton was the model’s second team out whereas the committee placed Dayton last in, and that 110 of 136 other methods had Dayton seeded no worse than 9 [PAGE 11]. This is a gray-zone audit point: the binary miss count hides near-boundary accuracy.

Overall, the paper’s strongest evidential move is cross-validation plus out-of-sample scoring. Its weakest evidential zone is causal interpretation of conference indicators. The P10 indicator is persistent, but the authors themselves note that apparent bias “could be instead a result of, or a proxy for, other effects not captured in the model” [PAGE 6]. Thus the correct audit conclusion is not “Pac-10/12 membership causes bids” but “Pac-10/12 membership improves predictive fit within this model and time window.” The model is a revealed-policy classifier, not a structural causal model of committee psychology.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The paper estimates a probit model for a binary at-large bid outcome. The general latent-index form is:

\[
\mathrm{BID}_i=\mathbf{1}\{y_i^*>0\},\qquad
y_i^*=x_i'\beta+\varepsilon_i,\qquad
\varepsilon_i\sim N(0,1),
\]

so that

\[
\Pr(\mathrm{BID}_i=1\mid x_i)=\Phi(x_i'\beta),
\]

where \(\Phi\) is the standard normal cumulative distribution function, \(x_i\) is the vector of predictors, and \(\beta\) is the coefficient vector. The latent index \(x_i'\beta\) is dimensionless; the probability is dimensionless and lies in \([0,1]\). The coefficients are per unit of the corresponding rank or count variable: \(\beta_{\mathrm{RPIRANK}}\) is per RPI rank unit, \(\beta_{\mathrm{T25WINS}}\) is per win against an RPI top-25 team, and \(\beta_{\mathrm{P10}}\) is per binary Pac-10/12 membership unit.

The estimated equation (3) in Table 2 is:

\[
\begin{aligned}
\hat y_i^*={}&-0.3082
+3.2486\,\mathrm{BIDS37}_i
-0.2558\,\mathrm{RPIRANK}_i
-0.8265\,\mathrm{CONFBELOW500}_i\\
&+2.7509\,\mathrm{T25WINS}_i
+1.2572\,\mathrm{T50WINS}_i
+0.8364\,\mathrm{T100ABOVE500}_i\\
&+0.6795\,\mathrm{ROADWIN}_i
+2.7759\,\mathrm{P10}_i
+1.2021\,\mathrm{T50ABOVE500}_i .
\end{aligned}
\]

This is directly from Table 2 [PAGE 7]. The paper reports that equation (3) “misses only one at-large slot in the entire ﬁve-year interval: the model errs on Florida State’s selection in 2011” [PAGE 7]. It also reports that “Equation (3)’s 33-of-36 performance in 2015” [PAGE 11] and the abstract states “correctly predicted 68 of 72 bids when used out-of-sample for 2014 and 2015” [PAGE 1].

Model-selection metrics are information-theoretic and count-based. AIC is:

\[
\mathrm{AIC}=2k-2\ell(\hat\beta),
\]

where \(k\) is the number of estimated parameters and \(\ell(\hat\beta)\) is the maximized log-likelihood. With natural logarithms, AIC is in nats; it is not an SI mechanical unit. The probit log-likelihood is:

\[
\ell(\beta)=\sum_{i=1}^{n}\left[
y_i\ln\Phi(x_i'\beta)
+(1-y_i)\ln\{1-\Phi(x_i'\beta)\}
\right].
\]

Leave-one-year-out cross-validation is a miss count:

\[
\mathrm{CV}_{\text{miss}}
=
\sum_{t=2009}^{2013}
\sum_{i\in\mathcal{I}_t}
\mathbf{1}\{\widehat{\mathrm{BID}}_{i}^{(-t)}\neq \mathrm{BID}_i\},
\]

where \((-t)\) denotes fitting without year \(t\). This is an integer count, not a probability or an SI quantity. The paper describes this process as using “leave-one-year-out cross-validation” and reports “6 out of 179” for equation (1), “5 out of 179” for equation (2), and “4 out of 179” for equation (3) [PAGE 7].

The RPI operator is a weighted average of three dimensionless components. The paper states: “a weighted average of three factors: (1) team’s winning percentage against Division I opponents, (2) the winning percentage of the team’s opponents, and (3) the winning percentage of the team’s opponents’ opponents. These three elements are weighted by 25%, 50%, and 25%, respectively” [PAGE 2]. Formally:

\[
\mathrm{RPI}
=
0.25\,\mathrm{WP}_{\mathrm{D1}}
+0.50\,\mathrm{OWP}
+0.25\,\mathrm{OOWP},
\]

with SOS:

\[
\mathrm{SOS}
=
\frac{2}{3}\mathrm{OWP}
+\frac{1}{3}\mathrm{OOWP},
\]

consistent with the statement that “The latter two components, with relative weights of 66.7% and 33.3%, are also used to calculate a team’s strength of schedule” [PAGE 2]. The paper uses the pre-2005 RPI version: “the former version of the RPI was used throughout the bid modeling described below” [PAGE 5]. The current version differs because “home wins and road losses count as 0.6 each, and home losses and road wins count as 1.4 each” [PAGE 2]. The version choice is empirically motivated: “The former RPI ranking had better ﬁt metrics (AIC of 116.4 vs. 152.6), a larger coefﬁcient (–0.1326 vs. –0.0929), and missed fewer at-large slots in-sample (12 vs. 15) and during leave-one-year out cross-validation (12 vs. 15) than did the new version” [PAGE 5].

Assumptions: (A1) the latent index is linear in the listed predictors; (A2) probit errors are standard normal; (A3) committee policy is stable within the estimation window; (A4) the pre-2005 RPI is the relevant committee-facing rank for 2009–2013; (A5) candidate support is restricted to RPI ranks 20–80; (A6) BIDS37 controls for the 2011 expansion from 34 to 37 at-large bids; (A7) conference indicators may proxy for unobserved effects, not necessarily causal bias. The paper itself flags (A7): apparent Pac-10/12 bias “could be instead a result of, or a proxy for, other effects not captured in the model” [PAGE 6].

Singularity and breakdown regimes:
1. Perfect separation: if there exists \(\beta\) such that \(x_i'\beta>0\) for all \(\mathrm{BID}_i=1\) and \(x_i'\beta<0\) for all \(\mathrm{BID}_i=0\), the probit maximum likelihood estimate diverges in norm and the log-likelihood approaches zero. The paper repeatedly reports “complete separation of the in-sample data” for some alternate models [PAGE 8]. In that regime, coefficient magnitudes and AIC can look artificial unless Firth-type adjustment or cross-validation is used.
2. Multicollinearity: the paper warns that “multicollinearity among many of the predictors inﬂates standard errors and disturbs inferences” [PAGE 5]. Coefficients can be unstable even when predictions are good.
3. Structural break: the paper finds that the selection process “has been fundamentally different recently” [PAGE 6]. If committee policy changes again, the coefficients, especially conference indicators, may break.
4. RPI-version break: if future committees align with the current RPI instead of the former RPI, the RPIRANK coefficient estimated here is misspecified.
5. Support truncation: the model is estimated on RPI ranks 20–80 [PAGE 5]; extrapolation outside that band is unsupported.
6. Bid-count change: BIDS37 handles 2011–2013 expansion, but further tournament expansion or contraction would invalidate that control.

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is a sequence of attempts to reconstruct committee policy from revealed selections. Coleman and Lynch (2001) examined “249 potential at-large teams from 1994–1999 and 42 potential predictors” and generated a six-factor probit model [PAGE 2]. Coleman, DuMond, and Lynch (2010) examined “479 at-large candidates from 1999–2008” to investigate conference bias in selections and seeding [PAGE 2]. A 15-factor probit model from the same 1999–2008 data “correctly assigned 96.5% of at-large slots in-sample and 170 of 179 slots (94.9%) out-of-sample from 2009–2013” [PAGE 3]. The present paper then extends the window to 1999–2013 and emphasizes 2009–2013 for the final predictive specification [PAGE 3].

The retrocausal twist is the RPI version. Earlier Coleman studies used the pre-2005 RPI. Paul and Wilson (2012) used the current RPI and a Sagarin Predictor control and questioned whether earlier bias findings were artifacts of the RPI control [PAGE 3]. Leman et al. (2014) used the current RPI and found margin-of-victory rankings insignificant in its presence, while suggesting that the committee’s implied weight on strength of schedule may be about four times the implied weight on winning percentage [PAGE 3]. The present paper then tests old versus current RPI on 2009–2013 and finds old RPI better by AIC and miss count [PAGE 5]. This is retrocausal in the sense that later selection data are used to reinterpret which earlier measurement convention best captures committee behavior.

The historical clock matters. The RPI changed after 2005: “Prior to 2005, home wins and losses were treated identically to road wins and losses when computing the ﬁrst element of the RPI. However, since 2005 the NCAA has used an approach by which home wins and road losses count as 0.6 each, and home losses and road wins count as 1.4 each” [PAGE 2]. A model that ignores that measurement break can misattribute metric changes to committee bias. The paper’s window testing—1999–2013 down to 2009–2013—is a direct response to that risk.

Multi-week traps appear at three scales. First, the tournament itself captures attention for “approximately three weeks from the time the playoff bracket is announced until its ultimate winner cuts down the nets after the championship game” [PAGE 1]. Second, the projection problem is multi-month: “the multi-month process of projecting the teams that will be selected” [PAGE 2]. Third, expert consensus is a moving target: BracketMatrix.com compiled “136 experts and/or algorithms” before the 2015 tournament [PAGE 2]. A model fit to late-season expert narratives can overfit to the last few weeks of conference-tournament movement rather than the full-season counts that the committee actually sees. The paper’s use of season-long counts—RPI rank, top-25 wins, top-50 wins, road wins, conference losses below .500—is a guard against that multi-week trap.

Another genealogy trap is conference-bias persistence. The paper does not simply inherit earlier bias findings. It re-tests them over progressively shorter windows and finds decay: CONFONCOMM insignificant by 2002–2013, BE insignificant by 2004–2013, MVC insignificant by 2008–2013, while P10 remains significant [PAGE 6]. That is a lineage correction: the model keeps one persistent conference effect and drops three that no longer survive recent windows. The paper therefore treats “bias” as a time-varying empirical object, not a fixed property of the committee.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive structure is: the committee selects teams; experts model the committee; the committee may anticipate expert models; the researcher models the committee’s revealed policy while knowing that experts are also modeling it. The paper cannot observe deliberations: “Committee deliberations take place in private closed sessions and little is typically revealed about exactly why a particular team is or is not selected in a given year” [PAGE 2]. So the modeler must infer intent from outcomes. That is a theory-of-mind problem under opacity.

Crisis habit regression. Under uncertainty about bubble teams, the committee may regress to habitual cues: conference brand, historical power, or a persistent league indicator. The P10 result is the clearest candidate. The paper finds that “The Pac-10/12 factor was the only bias-related factor that remained signiﬁcant in every time window analyzed” [PAGE 6]. In recursive terms, when the decision is close, the committee’s prior may dominate the count-based evidence. But the paper also warns that P10 could be a proxy for unobserved effects [PAGE 6]. So crisis habit regression is an interpretation, not a proven mechanism.

Counter-trap. A counter-trap occurs when experts overfit to a public narrative and the committee’s actual behavior deviates. The 2015 Dayton case is illustrative. The paper reports that “All 136 other methods at BracketMatrix.com projected Dayton to be chosen, with an average expected seed of 8.79” [PAGE 11], while equation (3) projected Dayton as the second team out. Dayton was ultimately the last team in. If one only followed expert consensus, one would be trapped by the consensus; equation (3)’s ranking was closer to the committee’s placement than 110 of 136 other methods [PAGE 11]. The counter-trap is not that the model was perfect—it missed Dayton as a binary bid—but that the model’s relative ordering of Dayton was more committee-like than the expert crowd.

Clock. The committee’s composition changes. Members “serve staggered ﬁve-year terms” [PAGE 2]. That creates a clock: a model estimated over 1999–2013 mixes multiple committee generations. The paper’s progressive-window analysis is a clock-sensitive audit. It shows that some bias terms decay as the window shortens, while P10 persists. The 2011 Florida State miss—equation (3)’s only in-sample miss—is also a clock event: a single-year committee decision that did not fit the five-year policy [PAGE 7]. The model treats that as noise or policy deviation, not as a reason to add an ACC indicator, because ACC significance over 2009–2013 was “likely heavily inﬂuenced by the Florida State miss in 2011” [PAGE 8].

The recursive risk is double-counting expert consensus. If the model included media projections or expert rankings, it would be modeling experts modeling the committee, and the coefficients would blend committee policy with media narrative. The paper avoids this by using RPI and team-performance counts, not BracketMatrix consensus. That is a deliberate theory-of-mind boundary: infer the committee’s revealed policy from selection outcomes, not from other forecasters’ beliefs about that policy.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto rule is set-theoretic. Let \(V_{\mathrm{model}}\) be the variables listed in Table 1. The paper says “Table 1 describes all potential predictors included in the analysis” [PAGE 3]. The table includes RPI, RPI rank, win percentages, strength of schedule, conference wins/losses, road/neutral wins/losses, top-25/top-50/top-100 wins and losses, bad losses, conference rank, regular-season championship, number of higher-RPI in-conference candidates, conference indicators, and committee-representation indicators [PAGE 4]. It does not include injury status, player load, biomechanical fatigue, travel disruption, weather, or venue climate.

Therefore, for any claim \(C\) that requires a variable \(v\notin V_{\mathrm{model}}\) and not deterministically derivable from \(V_{\mathrm{model}}\), the paper’s evidence cannot adjudicate \(C\). The correct verdict is “outside evidentiary support,” not “false.” Physical-layer variables such as injuries can affect game scores, and game scores affect RPI and win counts, but the model only sees the realized counts. Biomechanical variables such as player load or fatigue are not measured. Weather variables are not measured. The paper notes that “Scores and game sites were collected from KenPom.com” [PAGE 5], but game site is not weather, and the model does not include weather as a predictor.

A physical-layer veto is appropriate if someone claims that a specific injury caused a specific at-large bid. The paper’s model cannot test that direct path. A biomechanical-layer veto is appropriate if someone claims that fatigue from a multi-game conference tournament caused a committee snub. The paper has no fatigue variable. A weather-layer veto is appropriate if someone claims that a snowstorm or travel delay changed a bid. The paper has no weather variable. In all three cases, the only admissible indirect statement is: weather, injury, or fatigue could have altered game outcomes, which could have altered the realized RPI and win-count inputs; the model does not estimate those upstream effects.

Conversely, no cross-layer veto applies to the paper’s own claim. The paper claims that a probit model using listed team-performance and conference variables predicts at-large bids with a certain miss rate. That claim is within \(V_{\mathrm{model}}\). The paper does not claim that RPI is a physical law, that P10 is a biomechanical cause, or that weather is irrelevant to basketball. It claims committee-policy predictability conditional on the listed variables. That claim survives the cross-layer audit because the outcome is a selection decision, not a game outcome.

The practical veto proof is: if a proposed explanation introduces a variable outside Table 1 and cannot be expressed as a deterministic function of Table 1 variables, then the paper’s coefficients, AIC, and cross-validation misses are non-identifying for that explanation. If the explanation is instead “the committee weighted RPI rank, top-25 wins, top-50 wins, road wins, conference losses below .500, and P10 membership in 2009–2013,” then the paper directly tests it. That is the boundary between supported inference and overreach.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. RPI-version counterfactual. Fit two probit models with BIDS37 plus only the former RPI rank versus BIDS37 plus only the current RPI rank. The paper predicts the former RPI model has AIC 116.4, 12 in-sample misses, and 12 leave-one-year-out cross-validation misses; the current RPI model has AIC 152.6 and 15 misses in-sample and cross-validation [PAGE 5]. Verifiable prediction: the former RPI model must have lower AIC and fewer misses than the current RPI model on 2009–2013. Veto condition: if the current RPI model beats the former RPI model on both AIC and cross-validation miss count, the paper’s RPI-version choice is contradicted.

2. Bias-persistence counterfactual. Iteratively estimate the 15-year model with P10, BE, MVC, and CONFONCOMM added, then shorten the window from 1999–2013 toward 2009–2013. The paper predicts CONFONCOMM becomes insignificant by 2002–2013, BE by 2004–2013, MVC by 2008–2013, and P10 remains significant in every window analyzed [PAGE 6]. Verifiable prediction: P10’s p-value stays below the stated significance threshold in all windows, while the other three lose significance in the stated order. Veto condition: if P10 loses significance in any tested window, or if BE/MVC/CONFONCOMM remain significant through the later windows, the paper’s bias-persistence claim is contradicted.

3. Out-of-sample equation (3) counterfactual. Use equation (3) estimated on 2009–2013 to predict 2014 and 2015 at-large bids. The paper predicts 35 of 36 correct in 2014 and 33 of 36 correct in 2015, totaling 68 of 72 [PAGE 1], [PAGE 10]. Verifiable prediction: the out-of-sample miss total must be 4, with 1 miss in 2014 and 3 misses in 2015, and the named misses should be North Carolina State in 2014 and Boise State, Dayton, and UCLA in 2015 [PAGE 10]. Veto condition: if the fitted equation (3) produces a different total or a materially different miss pattern under the paper’s stated data and coding rules, the out-of-sample claim is contradicted.

These three counterfactuals are verifiable because they require only the paper’s stated variables, estimation windows, and miss-count definitions. They do not require access to private committee deliberations, and they do not depend on any market-derived quantities. The target is always the binary at-large bid outcome and the model’s miss count, not any external price or line.
</RLVR_COUNTERFACTUAL_VETOES>