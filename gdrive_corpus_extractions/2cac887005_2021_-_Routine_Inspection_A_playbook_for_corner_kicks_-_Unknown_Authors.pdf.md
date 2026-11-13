---
source: "2021 - Routine Inspection A playbook for corner kicks - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2021"
pages: 16
model: baidu/ernie-5.5-flash-preview:free
words: 8747
---

<NATIVE_REASONING>
We need answer user's request. Need produce final with exact XML sections, >=1000 words. Must follow invariants: no betting lines, no toy equations. Formal LaTeX equations, units, page citations and exact quotes when source pages provided. Need cite exact [PAGE N] markers and verbatim quotes. Need maybe no external sources? We can use provided source only. Need likely focus on paper. User gave DRIVE SOURCE and SOURCE TEXT. They expect output in XML sections only? They said >=1,000-WORD DEPTH across these exact XML sections:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</...>
<RETROCAUSAL_GENEALOGY>...</...>
<RECURSIVE_THEORY_OF_MIND>...</...>
<CROSS_LAYER_VETO_ADJUDICATION>...</...>
<RLVR_COUNTERFACTUAL_VETOES>...</...>
Need include those sections. Need likely no extra text. Need ensure each section maybe >=? total >=1000 words. Could be 1500. Need avoid betting lines entirely. No toy equations. Use formal equations from paper: A1, A2, A3. Need explain units: probabilities dimensionless, matrix norms, positions maybe meters? Paper doesn't explicitly say units but tracking data positions likely field coordinates; avoid inventing if not stated. Could say coordinates are spatial positions in the tracking frame; if SI, length units are meters in physical pitch but source doesn't state. Need be careful: source says positions sampled 25Hz. Need mention singularity/breakdown regimes: GMM component number chosen 15 and 6, NMF rank 30, XGBoost accuracy. Breakdown: NMF rank too low reconstruction error, too high overfit/sparseness, regularization alpha=1. GMM outliers, short corners removed, ball tracking errors. XGBoost distribution shift, unannotated specific man-marking target, class balance, temporal nonstationarity. Need no betting lines.

Need maybe mention "gray-zone audit" in THINK_TRACE. Need include source citations exact quotes. For formal equations, cite [PAGE 15] etc. Use quotes: e.g. [PAGE 15] "The runs made during a corner kick can be represented by a 42-element vector" and equation (A1). Need exact. Could include equations in LaTeX. Need avoid fake equations. Use given equations. Could define symbols.

Need RETROCAUSAL_GENEALOGY: historical/scientific lineage: set-piece analysis, Power et al 2018 [1], Midtjylland, tracking data, topic models, NMF, GMM, XGBoost. Multi-week traps: routine temporal clusters, teams use routines over consecutive matches then discard, need large sample; scout limited to five matches. Need maybe not invent.

RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock. Need discuss opponent modeling, habit regression: teams repeat routines in consecutive matches, e.g. Team C attempted routine five times over three consecutive games, discarded for six games and used three times in one game [PAGE 10]. Counter-trap: coaches introduce new routines using codes to avoid opponent video analysts [PAGE 12]. Clock: congestion 3 matches every 9 days, less than an hour set pieces, recovery [PAGE 12]. Need no betting.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. Need use paper constraints: runs start two seconds before corner, target one second after first on-ball event or two seconds after corner whichever first [PAGE 3]; initial/target zones; active players; defenders; zonal effectiveness; delivery locations; shot within 6 seconds [PAGE 11]. Weather not in source; need state no explicit weather covariates in source, therefore physical veto only via measured positions/times, not weather. Need maybe "veto proof" means if lower layer suggests strategy but physical/biomechanical constraints veto? We can construct: four-zone system concedes fewer goals because shots from outside box lower quality; two-zone goals from inside six-yard box. Need not mention betting.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Maybe Reinforcement Learning with Verifiable Rewards? Not in source. Need produce scenarios with verifiable predictions from paper. Could be "If a team adopts routine X, prediction: feature expression..." Need verifiable veto scenarios: (1) short corners excluded; if model predicts short corner routine, veto because data excluded short corners [PAGE 2]. (2) Ball trajectory not modeled; if claim about intended target from ball path only, veto because ball may not reach target [PAGE 3]. (3) Man-marking target identity not identified; if claim defender marks specific opponent, veto because methodology does not identify [PAGE 7,16]. Or defensive role classification accuracy 83.4 ± 2.1; if claim near-perfect, veto. Need predictions: if applying model to held-out corners, classification accuracy expected around 83.4% with CI; precision/recall ~81%; if not, model violation. Another: NMF rank 30 chosen where gradient approaches zero; if increasing rank no improvement in reconstruction error? Need verifiable.

Need ensure total word count >=1000. Let's draft maybe 2000 words. Need exact XML sections. Need no Markdown outside? Could output raw XML-like tags. Ensure tags exactly. Need include citations [PAGE N]. Need maybe quotes verbatim. Need be careful quotes with punctuation.

Need think about no "betting lines". Avoid words odds? Source includes "conversion rate" but not betting. We can say conversion rate. Avoid "moneylines" etc.

Need include equations: 
- Run vector equation A1: x_R = sum_{p=1}^{N} P_p(InitialZone) = P(TargetZone)? Need reconstruct from garbled text. It says:
𝑥! = . P(R!) = 
"!
#$%
. P#3𝐼𝑛𝑖𝑡𝑖𝑎𝑙𝑍𝑜𝑛𝑒&"=P#(𝑇𝑎𝑟𝑔𝑒𝑡𝑍𝑜𝑛𝑒&") 
"!
#$%
Probably:
x_R = \sum_{p=1}^{N} P_p(\text{InitialZone} = \text{InitialZone}(R)) P_p(\text{TargetZone} = \text{TargetZone}(R))
Need state reconstructed from Appendix 1. Could say "as described on [PAGE 15]". Need not invent? But equation is garbled, but we can formalize according to text. It's okay. Need cite quote: "The value of xa for any a ∈ [1,42] is determined by calculating the product of the probability of each player occupying the corresponding initial and target zones and then summing up the probability over all active attacking players." [PAGE 15]. Then equation.

- NMF: X ≈ WH. Dimensions n x p, 42 x 1723. W n x r, H r x p, r < min(n,p). Choose r=30. Objective: min_{W,H} ||X - WH||_F^2 + α||W||_1? The text says Frobenius norm plus sum of norms each multiplied by α. It writes with weird. Need formal: \min_{W,H\ge0} \|X-WH\|_F^2 + \alpha\|W\|_1 + \alpha\|H\|_1, α=1? But if norm not specified maybe Frobenius norm of W/H? Text: "plus the sum of the norms of the W and H matrices, each multiplied by a regularization parameter α, which we set to 1." It may be L1? "sparseness" suggests L1. But avoid overclaim? Could write general: \|W\| + \|H\| with chosen norm. But formal equation: \mathcal{L}(W,H)=\|X-WH\|_F^2 + \alpha \|W\| + \alpha \|H\|. Need units: X entries are expected counts/weighted probabilities, dimensionless or player-equivalents. α dimensionless? If norm squared? Could say if Frobenius norm squared, objective has units of squared player-count; α must carry reciprocal units to make regularization comparable. But source says regularization parameter α=1. Need not overdo.

- GMM: maybe p(z) mixture. Could write target density f(x)=\sum_{k=1}^{15}\pi_k \mathcal{N}(x|\mu_k,\Sigma_k). Initial active f(y)=\sum_{j=1}^{6}\pi_j N(...). EM. Units: positions coordinates (length^2 for covariance). Components chosen by log-likelihood [PAGE 4]. Need not invent exact covariance if not given, but GMM is bivariate normal distributions [PAGE 4]. Good.

- XGBoost classifier: gradient boosted decision trees estimate P(M|features) maybe logistic? Source says probability. Could write \hat{p}_i = P(y_i=man| \mathbf{z}_i), \hat{y}_i=1[\hat{p}_i \ge \tau]. No toy. Need units: features coordinates and distances (length), counts dimensionless. Cross-validation accuracy 83.4% ± 2.1% [PAGE 8]. Could mention F-score features.

Need page citations for every claim? Maybe enough. Need exact quotes. Use many quotes.

Need THINK_TRACE >=400 words? It says >=400 words for THINK_TRACE. Need ensure THINK_TRACE at least 400 words. Others can add. Total >1000. Let's aim THINK_TRACE 650 words. Need "Deep multi-hop derivation & gray-zone audit". We can write long.

Need no bullet? Can use paragraphs. Need exact XML sections. Could include equations inside sections. Need final only XML sections. Need ensure no stray text.

Let's plan content.

<THINK_TRACE>
- Start: audit source constraints: corner kick sample 1723 from 234 matches, tracking 25Hz, event data, removed short corners and ball errors. Derive offensive pipeline: initial positions 2s before, target positions 1s after first on-ball event or 2s after corner whichever first. GMM target zones 15 components, seven active zones a-g; initial active zones 6 components; 42 run types. Encoding probability vector via GMM weights. NMF decomposes 42x1723 into 30 features. Defensive role: XGBoost with 10 metrics, training 500 corners, 3907 defenders, 55% man, accuracy. Applications: opponent scouting, zonal effectiveness: 4-zone vs 2-zone. Temporal behavior: routines used over consecutive matches, discarded. Need discuss gray zones: "active players" uncertain due to target assumption; target location impossible to know; ball trajectory omitted due to interception/accuracy; hybrid defense broad; specific man-marking target unknown; tracking errors; short corners excluded; sample single league/season; limited generalizability; choice of 15 and 6 components and r=30 by log-likelihood/gradient. Need mention no betting. Need maybe "multi-hop derivation": from tracking frames to run codes to features to defensive classification to coaching intervention. Word count maybe 600.

Need include citations [PAGE 2], [PAGE 3], etc. Use exact quotes maybe not all in THINK_TRACE but enough. Could include quotes in other sections too. Need exact [PAGE N] markers. For source text quotes, ensure verbatim. Need quotes maybe:
[1] "The average conversion rate, the proportion of corners that directly produce a goal, is very low (around 2% in most elite leagues" [PAGE 1] (quote has footnote). But can avoid conversion.
"we reflected the positions of the players and the ball so that corners always appear to be taken from the left side of the field." [PAGE 2]
"Initial positions are measured exactly two seconds before the corner is taken" [PAGE 3]
"The target locations are defined as being either the positions of the players exactly one second after the first on-ball event following the corner, or two seconds after the corner is taken, whichever occurs first" [PAGE 3]
"It is impossible to know the true target location of a player, we simply assume that attacking players always reach their intended target." [PAGE 3]
"the ball does not always reach the intended target" [PAGE 3]
"we selected a set of ten metrics to predict the roles of each defender" [PAGE 7]
"Training XGBoost with 10-fold cross validation resulted in a classification accuracy of 83.4% ± 2.1%" [PAGE 8]
"Team C attempted the corner routine depicted in the fourth row five times over three consecutive games, discarded it for six games and then used it three times in one game." [PAGE 10]
"the rewards of practicing corner kicks are directly proportional to the research and planning that goes into them" [PAGE 12]
"Each player needs to remember only the alphanumeric code for their own run" [PAGE 12]
Maybe enough.

<SOURCE_OPERATORS_AND_EQUATIONS>
Need formal LaTeX, units, page citations, breakdown. Structure:
1. Notation and data operators.
- Tracking frame: position vectors s_{i,t} ∈ R^2, t sampled 25 Hz [PAGE 2]. Unit: field coordinates; physical length units not explicitly stated, if normalized then dimensionless; if physical then meters. Need maybe not assume. But for equations, can use L (length). 
- Corner time t_0 identified by acceleration and ball-in-play flag [PAGE 2]. Short corners removed [PAGE 2].
2. GMM run zoning.
Target distribution: f_T(x)=∑_{k=1}^{15} π_k N(x|μ_k,Σ_k). [PAGE 4] "15 components ... sufficient". Active zones a-g. Initial active: f_I(y)=∑_{j=1}^6 π_j N(y|ν_j,Λ_j). [PAGE 4]
Run code R=(j,k), j∈{1,...,6}, k∈{a,...,g}; 42 possible. [PAGE 4]
3. Corner encoding vector.
For player p, probabilities from GMM responsibilities or mixture weights. x_R = ∑_{p=1}^{N_a} q_{p,j}(R) q_{p,k}(R). x ∈ R^{42}_{≥0}. Units: expected number of players making run R (player-equivalents). [PAGE 15]
4. NMF topic model.
X≈WH, X∈R^{42×1723}, W∈R^{42×r}, H∈R^{r×1723}, r=30. [PAGE 5][PAGE 15]
Objective: min_{W,H≥0} ||X-WH||_F^2 + α||W|| + α||H||, α=1. [PAGE 15-16]. Need say norm as in source; if Frobenius squared, units. Rank selection: gradient of reconstruction error vs r approaches zero at r=30 [PAGE 16].
5. Defensive classifier.
Features z_i: initial x,y, distance start-target, proximity goalkeeper, average distances, zone counts etc [PAGE 16]. XGBoost estimates \hat p_i=P(y_i=man|z_i). Decision threshold maybe default. Accuracy 83.4±2.1 [PAGE 8]. Precision/recall 81 [PAGE 8]. Breakdown: if features distribution shift, accuracy falls; class imbalance not severe 55/45 [PAGE 7]; if defenders unmarked or role ambiguous? Specific marking target not identified.
6. Zonal effectiveness operator.
Delivery location D, shot within 6 seconds. Compare conditional rates: four-zone conceded shots in 33%, goals conversion among shots 7.5%; two-zone shots 27%, conversion 13% [PAGE 11]. Need formal: P(shot|C_4)=0.33, P(goal|shot,C_4)=0.075; P(shot|C_2)=0.27, P(goal|shot,C_2)=0.13; P(goal|C)=product: 0.02475 vs 0.0351? But source says two-zone conceded goals at higher rate. We can compute? It's not a toy equation; it's derived from given percentages. Need be careful: "7.5% of the shots conceded produced a goal, compared to 13% in the two-zone system". So joint approximate goal per corner: 0.33*0.075=0.02475 vs 0.27*0.13=0.0351. That's okay, formal arithmetic. Need units: probabilities dimensionless, per corner. But maybe small sample? It says sample 3500 corners, 366 and 600. Could mention estimates have sampling uncertainty but source doesn't provide CI. Breakdown: confounding by opponent, delivery type, score state, personnel not controlled. Good.
Need include singularity/breakdown regimes: GMM components too many/too few; NMF rank; regularization; XGBoost misclassification; data errors; short corners excluded; assumption of intended target; ball not reaching target; weather not included. Need maybe say no explicit weather variables, so physical veto cannot use weather from source.

<RETROCAUSAL_GENEALOGY>
Historical lineage: corner kicks restart, low conversion, set-piece planning. FC Midtjylland training four sessions/week [PAGE 1]. Power et al. mythbusting set pieces: hybrid defenses concede dangerous shots, second ball more likely [PAGE 1]. Tracking data enables synchronized runs. Methodological lineage: GMM (Dempster EM, Friedman), NMF (Lee/Seung, Hoyer), XGBoost (Chen/Guestrin), agglomerative clustering. Practical lineage: SL Benfica analysts, Aalborg FC. Multi-week traps: limited video scouting five matches [PAGE 9], routines not random, repeated over consecutive matches, discarded, reintroduced [PAGE 10]. Also congested schedules and recovery/training time [PAGE 12]. Need maybe "retro-causal" as later performance informs earlier data collection? Could discuss how current analysis retroactively reconstructs playbooks from hundreds of matches, making past habits predictive. Need no fake.

<RECURSIVE_THEORY_OF_MIND>
Model opponent's model. Crisis habit regression: under crisis, teams regress to rehearsed routines due to limited training time; e.g. strategy dominated by preparation [PAGE 12]. Counter-trap: new codes to avoid scouting, unanticipated routines [PAGE 12]. Clock: 3 matches/9 days, less than hour set pieces, recovery days [PAGE 12]. Also temporal routine usage: Team C example [PAGE 10]. Need predictions: if opponent faces congestion, likely use rehearsed routines; if coach wants counter-trap, introduce novel run codes and vary delivery zone; if scouting only five matches, risk missing reintroduced routine. Need avoid betting. Maybe discuss recursive beliefs: analyst believes opponent believes we will defend 4-zone; choose routine that attacks gaps. Paper says four-zone shields goalmouth, two-zone gaps between/near post; offensive analysis can focus on routines likely evade defense [PAGE 12]. Need not claim exact which routine most effective; paper refrains [PAGE 13]. Good.

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. Need state layers: tactical layer proposes routine; physical layer validates start/target positions within possible movement in 2s? The paper uses initial positions 2s before and target 1s after first event or 2s after corner. If proposed routine requires impossible acceleration/velocity beyond observed zones or sampled positions, veto. But source doesn't give player max speeds. We can only use observed data. Need "veto proof" maybe show that certain claims are vetoed by source constraints:
- Any routine relying on short corner excluded: [PAGE 2] "After removing short corners..." so if lower layer recommends short corner routine, veto because outside sample. Prediction: no model feature for short corner.
- Any claim that ball trajectory determines routine: veto because [PAGE 3] "the ball does not always reach the intended target". Prediction: feature search based on ball path alone may fail; use player runs.
- Any claim that defender is marking specific opponent: veto because [PAGE 7] "our current methodology does not explicitly identify which attacking player a man-to-man marking defender is marking." Prediction: assignments cannot be verified without manual annotation.
- Any claim that two-zone is always worse: source says less effective in sample but context; physical delivery location matters. Need maybe not veto.
Weather: source has no weather variables. Therefore any weather-based tactical veto is not verifiable from this source; need external data. State "within the source's evidentiary layer, weather is not an admissible veto unless independently measured." Good.
Biomechanical: target positions measured one second after first event or two seconds after corner, whichever first. If a routine requires a player to reach target beyond two seconds or after first event? Not necessarily. But can veto if target outside active zones because inactive players ignored [PAGE 4]. If proposed active player ends outside zones, classified inactive; routine incomplete. Good.

<RLVR_COUNTERFACTUAL_VETOES>
Need 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Could say "Reinforcement-learning-with-verifiable-rewards style audit: a counterfactual policy is vetoed if it contradicts verifiable source invariants." Then list scenarios:
1. Short-corner counterfactual: Policy recommends short-corner routine to evade zonal block. Veto: dataset excludes short corners [PAGE 2]. Prediction: model will assign zero probability or no features; if manual review labels short corner, classifier cannot be validated.
2. Ball-path targeting counterfactual: Policy assumes delivery will reach far-post runner because ball path shown. Veto: ball may be intercepted/inaccurate [PAGE 3]. Prediction: far-post feature may exist even if no shot; success should be evaluated by player target zones not ball arrival; if ball arrival used as label, error increases.
3. Defensive role overclaim counterfactual: Policy assumes a defender is man-marking a specific attacker and moves accordingly. Veto: methodology does not identify specific opponent [PAGE 7][PAGE 16]. Prediction: XGBoost can only output man vs zonal with 83.4% accuracy; specific assignment requires manual annotation; if algorithm claims specific marking, falsify by checking training data lacks identity.
Alternative: NMF rank counterfactual: Policy uses r>30 features for tactical labels. Veto: source chose r=30 where gradient approaches zero [PAGE 16]; if adding features doesn't reduce error significantly? Prediction: reconstruction error improvement marginal; if large improvement, source sample inconsistent. Need three. Could include accuracy counterfactual: Policy claims 95% role classification. Veto: reported 83.4±2.1 [PAGE 8]. Prediction: cross-validation around 83.4. But user wants 3. We can provide exactly 3, maybe with subpredictions.

Need ensure all sections have >=? total. Let's estimate words. Need final maybe 2500 words. Ensure no accidental "odds". Use "probability" okay.

Need think about "ZERO TOY EQUATIONS". We'll only use source equations. For GMM, standard formula is okay? It's not in source but formal. Could be considered source-derived. Need cite page. Maybe avoid equations not in source? But GMM components are bivariate normal distributions [PAGE 4]. We can write formal mixture. It's okay.

Need maybe mention "SI/information/probability units". Need units: positions: length; velocities: length/time; probabilities dimensionless; log-likelihood nats? Information units: NMF reconstruction error squared length? Actually X entries expected player counts, dimensionless player units. NMF Frobenius norm squared has player^4? Wait X entries are sum of probabilities (expected counts), dimensionless but interpretable as players. Frobenius squared sums squares, units player^2? If entries are expected player counts, each entry has player unit; squared has player^2; sum still player^2. Regularization norm of W/H: W entries weights? Need maybe say α must reconcile units. But source sets α=1. Could note "with α treated as unit-conversion constant". Need avoid toy. Good.

Need exact page citations. For quotes, use [PAGE 1] etc. Need maybe quote footnote? Fine.

Need final in XML tags. Ensure no unescaped ampersands? XML maybe okay but if strict, use &amp;? The tags are custom, not necessarily XML parsed. But could avoid raw & in equations? LaTeX uses & maybe. If want XML well-formed, need escape & as \&? But in LaTeX align need &. The user likely expects plain. Could avoid align &. Use equations single line. Use no < inside? Could use \text. Tags contain >? Fine.

Need ensure no "betting" words. The source has "odds"? No. We won't.

Potential issue: "DRIVE SOURCE" maybe they want "Frontier Reasoning Foundry" style. We can deliver. Need maybe no title.

Let's draft in final. Need count words roughly. Let's produce robust long.

Detailed THINK_TRACE: maybe 800 words. Need include exact quotes? Could include some. Let's write with citations.

THINK_TRACE draft:
"The audit begins with the data contract..." etc. Need 400+ words. Let's write long.

SOURCE_OPERATORS: equations and breakdown, maybe 1000 words.

RETRO: 300.
ToM: 300.
Veto: 300.
RLVR: 400. Total >3000 maybe. Fine.

Need be careful with exact quotes. Use quotation marks. For equations, maybe quote page. Let's include verbatim quotes in each section where possible.

Need not mention "I".

Let's compose final with XML sections. Ensure each closing tag.

Potential issue: In equations, use \operatorname. Fine.

Let's write THINK_TRACE first.

THINK_TRACE content:
- The paper converts corners into language: run code 4b etc. Need derive.
- Multi-hop: event data gives corner time, tracking gives positions; reflect left side; initial positions two seconds before; target one second after first event or two sec; GMM zones; active players; 42 vector; NMF features; clustering; defensive XGBoost; application.
- Gray zones: target assumption; ball not modeled; active zone exclusion; component choice; NMF rank; regularization; classifier limits; sample size; temporal nonstationarity; weather absent.
Need word count. Let's write around 700 words.

SOURCE_OPERATORS:
Need formal LaTeX. Let's include:
Data: \mathbf{s}_{i,t}\in\mathbb{R}^2, t\in\{1,...,25f\ \text{s}^{-1}\}. Units: if coordinates meters, m; if normalized, dimensionless. We can say source does not specify coordinate units.
Corner time: t_0 = argmin? Could avoid. "identified by acceleration and ball-in-play flag".
GMM:
\begin{aligned}
f_T(\mathbf{x}) &= \sum_{k=1}^{15}\pi_k \mathcal{N}(\mathbf{x}\mid \boldsymbol{\mu}_k,\boldsymbol{\Sigma}_k),\\
f_I(\mathbf{y}) &= \sum_{j=1}^{6}\pi_j \mathcal{N}(\mathbf{y}\mid \boldsymbol{\nu}_j,\boldsymbol{\Lambda}_j).
\end{aligned}
But aligned uses &. Could use separate lines.
Need units: \mathbf{x}, \mathbf{y} length; covariance length^2; mixing weights dimensionless. EM maximizes log likelihood. Component counts: 15 target, 6 initial active. Active zones a-g. 
Run encoding:
R=(j,k), x_R = \sum_{p=1}^{N_a} \pi^{(p)}_{I,j}\pi^{(p)}_{T,k}. Use \pi for GMM weights/responsibilities. x_R expected number players. \mathbf{x}\in\mathbb{R}_{\ge0}^{42}.
NMF:
\mathbf{X}\approx\mathbf{W}\mathbf{H}, \mathbf{X}\in\mathbb{R}_{\ge0}^{42\times1723}, \mathbf{W}\in..., \mathbf{H}\in..., r=30.
Objective:
\min_{W,H\ge0} \|X-WH\|_F^2 + \alpha\|W\| + \alpha\|H\|, \alpha=1.
Need maybe if norm Frobenius for W/H? Could write \|\cdot\| denotes norm selected by source; regularisation encourages sparseness. Units: X entries player-equivalents; W/H coefficients; α unit normalizing. 
Rank selection: gradient approaches zero at r=30 [PAGE 16].
Classifier:
Given features \mathbf{z}_i = (z_{i1},...,z_{i10}), \hat{p}_i = P(y_i=M|\mathbf{z}_i), \hat{y}_i=M if \hat{p}_i\ge\tau. Features list. Accuracy.
Zonal comparison:
P(shot|C_4)=0.33, P(goal|shot,C_4)=0.075 => P(goal|C_4)≈0.02475. P(shot|C_2)=0.27, P(goal|shot,C_2)=0.13 => 0.0351. Units per corner. Need caution source doesn't provide confidence intervals.
Breakdown regimes: list.

RETROCAUSAL_GENEALOGY:
Need maybe include lineage and multi-week traps.

RECURSIVE_THEORY_OF_MIND:
Need crisis habit regression vs counter-trap vs clock. Use source quotes.

CROSS_LAYER_VETO_ADJUDICATION:
Need "veto proof" maybe state proposition and proof.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 scenarios. Use numbered list maybe. Ensure predictions verifiable.

Need final no analysis. Let's ensure all required sections exact. Could include line breaks. Good.

Double-check invariants: ZERO BETTING LINES. We mention "conversion rate"? Not betting. Avoid "odds". In THINK maybe not. "probability" okay. No spreads/totals/moneylines/odds. Good.

ZERO TOY EQUATIONS: We use formal. No Force/Fatigue. Good.

>=1000 words. Yes.

Need exact XML sections. Good.

Potential issue: The user says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We need include exact [PAGE N] and quotes. We will include many. Need exact markers with brackets. Good.

Potential issue: "SI/information/probability units, assumptions, and exact singularity/breakdown regimes." Need mention SI units. We can say coordinates in meters if SI; source does not state. Probability dimensionless; information: NMF features as latent topics, log-likelihood in nats if natural log? But source doesn't specify. Could mention EM log-likelihood units depend on base; if natural log, nats. Need formal. Add in SOURCE: "Log-likelihood is in nats if natural logarithm is used; the source does not state base." Good.

Potential issue: "singularities" for GMM: covariance matrices must be positive definite; singular covariance if component collapses. NMF non-uniqueness: WH invariant under diagonal scaling? Need mention. Formal breakdown: GMM covariance singularity, NMF non-uniqueness due to scaling/permutation, XGBoost overfit. Good.

Let's write SOURCE with subsections maybe. Need no markdown? Could use plain text with LaTeX.

Need ensure not too long but okay.

Let's craft final now.

</NATIVE_REASONING>

<THINK_TRACE>
The audit begins with the source’s own data contract. The paper converts corner kicks into a searchable playbook by combining tracking data with event data, but it does so only after imposing a series of explicit simplifications. The first simplification is temporal: “Initial positions are measured exactly two seconds before the corner is taken” and “The target locations are defined as being either the positions of the players exactly one second after the first on-ball event following the corner, or two seconds after the corner is taken, whichever occurs first” [PAGE 3]. This choice creates a bounded biomechanical window. The model is not asking what a player could do over the entire possession; it is asking what the player’s initial spatial commitment was and where the player ended up inside a short post-corner interval. The authors justify this because the data show that “the average speed of the attacking players starts to rise as they begin their runs” at the two-second mark [PAGE 3]. The gray zone is that the true tactical intention is unobserved. The paper states plainly: “It is impossible to know the true target location of a player, we simply assume that attacking players always reach their intended target” [PAGE 3]. Therefore, every downstream inference is conditional on an intention-to-location proxy, not a verified intention.

The second simplification is spatial. The authors fit Gaussian mixture models to target and initial positions. For targets, they use a 15-component GMM and say that “15 components … are sufficient” because “adding further components does not result in a significant improvement in the log-likelihood of the fit” [PAGE 4]. Seven components inside the penalty area become “active zones” labelled a through g [PAGE 4]. For initial positions of active players, they fit a 6-component GMM [PAGE 4]. This yields 6 initial zones and 7 active target zones, hence 42 possible run codes. The paper’s own example is concrete: “Their runs are therefore encoded as {4b,4b,4c,4d}” [PAGE 4]. This is the core operator chain: tracking coordinates become probabilistic zone memberships, zone memberships become run codes, run codes become a 42-dimensional vector, and the vector becomes the input to a latent-topic model.

The third simplification is linguistic. The authors treat runs like words, combinations of runs like topics, and corners like documents: “we draw inspiration from topic modelling, making the analogy between runs and words, combinations of runs and topics, and corner kicks and documents” [PAGE 5]. They then apply non-negative matrix factorization to a 42 by 1723 term matrix, where rows are run types and columns are corners [PAGE 5]. The resulting basis has 30 features. The authors chose this rank because “We selected r = 30, which is where the gradient of this curve approaches zero” [PAGE 16]. The gray zone is that the features are not named tactical concepts by the algorithm; they are statistically recurring run combinations. The paper then gives semantic labels to some features, for example feature 12 as “runs from the near post round to the far post” [PAGE 6]. The semantic labels are human interpretations layered on top of the latent model.

The fourth simplification is defensive. The paper does not classify an entire team’s defensive system as a single monolith. Instead, it classifies individual defenders as man-to-man or zonal using XGBoost. The training set was manually annotated by SL Benfica analysts: “The resulting data set consists of 3907 defenders: 55% were tagged as marking man-to-man and the remainder tagged as marking zonally” [PAGE 7]. The model’s cross-validated accuracy is “83.4% ± 2.1%” [PAGE 8]. This is strong enough to reveal spatial structure, but not strong enough to support absolute certainty about every defender. The paper acknowledges a key missing label: “our current methodology does not explicitly identify which attacking player a man-to-man marking defender is marking” [PAGE 7]. That creates a recursive scouting trap: one can infer that a defender is man-marking, but not verify the exact man-marking assignment without additional annotation.

The final audit point is temporal. The paper explicitly warns that corner routines are not sampled independently across matches. It says: “The teams in our data did not alternate randomly from one routine to another as they took corners” [PAGE 10]. It then gives the Team C example: “Team C attempted the corner routine depicted in the fourth row five times over three consecutive games, discarded it for six games and then used it three times in one game” [PAGE 10]. This creates a multi-week scouting problem. If an analyst watches only a small recent sample, the analyst may either overfit to a routine that has just been discarded or miss a routine that is about to be reintroduced. The paper links this to preparation: “This emphasizes the need to scan over a large number of matches to fully scout the range of corner strategies that might be employed by an opponent in their next match” [PAGE 10]. The methodological conclusion is therefore not merely “classify corners,” but “maintain a rolling, multi-match memory of routine usage.”
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

1. Tracking and corner identification operator

The source uses synchronized player and ball positions sampled at 25 Hz: “The tracking data for each match consists of the positions of all 22 players and the ball, sampled at a frequency of 25Hz” [PAGE 2]. Let the position of player \(i\) at time \(t\) be

\[
\mathbf{s}_{i,t} \in \mathbb{R}^2.
\]

If the tracking coordinates are expressed in SI pitch units, then \(\mathbf{s}_{i,t}\) has units of meters. The paper does not explicitly state the coordinate scaling, so the formal layer should treat the units as spatial length units \(L\), with \(L\) possibly normalized to the pitch. Velocity would be \(L\,T^{-1}\), but the paper’s primary run operator does not model full velocity; it uses initial and target positions.

The corner time \(t_0\) is estimated using event data and tracking cues: “To identify the exact frame at which the corner was taken, we use a combination of factors including the acceleration of the ball and a ball-in-play flag included in the tracking data” [PAGE 2]. Short corners and corrupted ball-tracking corners are removed: “After removing short corners … and a small number of corners for which there were ball tracking errors, we were left with a sample of 1723 corner kicks” [PAGE 2]. To simplify spatial comparison, the authors reflect all positions: “we reflected the positions of the players and the ball so that corners always appear to be taken from the left side of the field” [PAGE 2].

2. Run-time operators

The initial-position operator is

\[
\mathbf{y}_{p} = \mathbf{s}_{p,t_0 - 2\,\text{s}},
\]

for attacking player \(p\). This is exactly the paper’s definition: “Initial positions are measured exactly two seconds before the corner is taken” [PAGE 3].

The target-position operator is

\[
\mathbf{x}_{p} =
\begin{cases}
\mathbf{s}_{p,t_e + 1\,\text{s}}, & \text{if } t_e + 1\,\text{s} \le t_0 + 2\,\text{s},\\[4pt]
\mathbf{s}_{p,t_0 + 2\,\text{s}}, & \text{otherwise},
\end{cases}
\]

where \(t_e\) is the time of the first on-ball event after the corner. This formalizes the paper’s rule: “The target locations are defined as being either the positions of the players exactly one second after the first on-ball event following the corner, or two seconds after the corner is taken, whichever occurs first” [PAGE 3]. Units: \(\mathbf{y}_p\) and \(\mathbf{x}_p\) are spatial coordinates in the same length units as the tracking data.

The key assumption is explicit: “It is impossible to know the true target location of a player, we simply assume that attacking players always reach their intended target” [PAGE 3]. Therefore the operator estimates an occupied target region, not a verified intended target.

3. Gaussian mixture zone operators

Target zones are modeled by a 15-component Gaussian mixture model:

\[
f_T(\mathbf{x}) =
\sum_{k=1}^{15} \pi_k \,
\mathcal{N}\!\left(\mathbf{x}\mid \boldsymbol{\mu}_k,\boldsymbol{\Sigma}_k\right),
\]

where \(\pi_k \ge 0\), \(\sum_k \pi_k = 1\). Here \(\mathbf{x}\) is a target position, \(\boldsymbol{\mu}_k\) is a 2-dimensional mean vector, and \(\boldsymbol{\Sigma}_k\) is a \(2\times 2\) covariance matrix. If positions are in meters, then \(\boldsymbol{\mu}_k\) has units of meters, \(\boldsymbol{\Sigma}_k\) has units of \(\text{m}^2\), and \(\pi_k\) is dimensionless probability mass. The authors state: “The seven components of the model located in the penalty area are indicated by blue ellipses and labelled a to g: we henceforth refer to these as the active zones” [PAGE 4].

Initial zones for active players are modeled by a 6-component GMM:

\[
f_I(\mathbf{y}) =
\sum_{j=1}^{6} \pi_j \,
\mathcal{N}\!\left(\mathbf{y}\mid \boldsymbol{\nu}_j,\boldsymbol{\Lambda}_j\right).
\]

The six initial zones are labelled 1 through 6 [PAGE 4]. A run code is therefore an ordered pair

\[
R = (j,k), \qquad j \in \{1,\dots,6\}, \quad k \in \{a,\dots,g\}.
\]

There are \(6 \times 7 = 42\) possible run codes: “In total there are 42 possible runs in our system, corresponding to all pairwise combinations of the 6 initial zones and 7 active target zones” [PAGE 4].

4. Probabilistic run-encoding operator

For a corner, let \(N_a\) be the number of active attacking players. Let \(q_{p,j}^{(I)}\) be the probability that player \(p\) started in initial zone \(j\), and let \(q_{p,k}^{(T)}\) be the probability that player \(p\) ended in target zone \(k\). The source says: “The value of xa for any a ∈ [1,42] is determined by calculating the product of the probability of each player occupying the corresponding initial and target zones and then summing up the probability over all active attacking players” [PAGE 15]. Formally,

\[
x_R =
\sum_{p=1}^{N_a}
q_{p,j(R)}^{(I)}
q_{p,k(R)}^{(T)}.
\]

The vector

\[
\mathbf{x} =
\begin{bmatrix}
x_{R_1} & x_{R_2} & \cdots & x_{R_{42}}
\end{bmatrix}^{\top}
\in \mathbb{R}_{\ge 0}^{42}
\]

is the corner’s run representation. Each component is dimensionless in the probabilistic sense but interpretable as an expected number of players executing run \(R\). If a hard assignment were used instead, entries would be integer player counts; because the method uses GMM weights, entries are soft expected counts.

5. Non-negative matrix factorization operator

The term matrix is

\[
\mathbf{X} \in \mathbb{R}_{\ge 0}^{42 \times 1723},
\]

where rows are the 42 run types and columns are the 1723 corners [PAGE 5]. NMF approximates

\[
\mathbf{X} \approx \mathbf{W}\mathbf{H},
\]

with

\[
\mathbf{W} \in \mathbb{R}_{\ge 0}^{42 \times r}, \qquad
\mathbf{H} \in \mathbb{R}_{\ge 0}^{r \times 1723}.
\]

The paper says: “W represents the run combinations that frequently co-occur in the data; H tells you how to construct each corner in the data from those run combinations” [PAGE 5]. The source chooses \(r=30\): “We selected r = 30, which is where the gradient of this curve approaches zero” [PAGE 16].

The optimization objective is written as

\[
\min_{\mathbf{W},\mathbf{H}\ge 0}
\left\|
\mathbf{X} - \mathbf{W}\mathbf{H}
\right\|_F^2
+
\alpha \|\mathbf{W}\|
+
\alpha \|\mathbf{H}\|,
\]

with \(\alpha=1\) [PAGE 15–16]. The Frobenius term measures reconstruction error. If entries of \(\mathbf{X}\) are expected player counts, then the squared Frobenius term has units of player-count squared, while the regularization terms must be interpreted in the same effective optimization scale. The paper explains: “The regularisation encourages sparseness in the basis set vectors, which is helpful because the number of attacking players actively involved in corners is normally in a fairly narrow range (5-8)” [PAGE 16].

6. Defensive-role classifier

Let \(\mathbf{z}_i\) be the feature vector for defender \(i\). The features include initial x-coordinate, initial y-coordinate, distance between start and target positions, initial proximity to goalkeeper, average distance travelled by attacking players in the same initial zone, average distance travelled by other defenders in the same initial zone, initial zone, target zone, number of attacking players in the same initial zone, and number of other defenders in the same initial zone [PAGE 16]. The classifier estimates

\[
\hat{p}_i =
P(y_i = \text{man-to-man} \mid \mathbf{z}_i),
\]

and assigns

\[
\hat{y}_i =
\begin{cases}
\text{man-to-man}, & \hat{p}_i \ge \tau,\\
\text{zonal}, & \hat{p}_i < \tau.
\end{cases}
\]

The source reports: “Training XGBoost with 10-fold cross validation resulted in a classification accuracy of 83.4% ± 2.1%” [PAGE 8]. It also reports: “81% of the players classified as zonally marking by the model were tagged as such in the training set (precision) and 81% of the players tagged as zonal markers in the training set were correctly identified (recall)” [PAGE 8]. Probabilities and accuracies are dimensionless. Feature units include length for positions and distances, and counts for zone populations.

7. Zonal-system effectiveness operator

For the four-zone system, the paper reports:

\[
P(\text{shot} \mid C_4) = 0.33,
\qquad
P(\text{goal} \mid \text{shot}, C_4) = 0.075.
\]

For the two-zone system:

\[
P(\text{shot} \mid C_2) = 0.27,
\qquad
P(\text{goal} \mid \text{shot}, C_2) = 0.13.
\]

These are taken verbatim from: “The four-zone system conceded shots in 33% of the corners that it faced, while the two-zone system conceded shots in 27% of corners faced. However, the quality of the chances conceded were significantly lower in the four-zone system: 7.5% of the shots conceded produced a goal, compared to 13% in the two-zone system” [PAGE 11]. A derived approximate joint probability of goal per corner is

\[
P(\text{goal} \mid C_4)
\approx
0.33 \times 0.075
=
0.02475,
\]

and

\[
P(\text{goal} \mid C_2)
\approx
0.27 \times 0.13
=
0.0351.
\]

These are per-corner probabilities, not guaranteed causal effects, because the source does not fully control for opponent quality, delivery type, game state, personnel, or weather.

8. Singularities and breakdown regimes

The formal system breaks down under several identifiable regimes:

- GMM covariance singularity: if a Gaussian component collapses onto very few points, \(\boldsymbol{\Sigma}_k\) may become near-singular. The paper does not report covariance regularization details, so this is an audit risk.
- Zone-count misspecification: using fewer than 15 target components may under-segment delivery targets; using many more may overfit noise. The paper justifies 15 by log-likelihood improvement becoming insignificant [PAGE 4].
- NMF non-uniqueness: NMF solutions can be non-unique under scaling and permutation unless additional constraints are imposed. The paper’s regularization encourages sparsity but does not eliminate all identifiability concerns [PAGE 15–16].
- Rank misspecification: \(r<30\) may fail to reconstruct distinct run combinations; \(r>30\) may overfit because the authors selected 30 where the reconstruction-error gradient approached zero [PAGE 16].
- Target proxy failure: if a player is impeded, fouled, or blocked, the occupied target may not equal the intended target, violating the paper’s assumption [PAGE 3].
- Ball-path irrelevance: the ball is deliberately excluded from the routine encoder because “the ball does not always reach the intended target” [PAGE 3]. Therefore any model that assumes ball trajectory equals intended target is outside the source’s valid operator.
- Defensive-label ambiguity: the classifier predicts man-to-man versus zonal, but “our current methodology does not explicitly identify which attacking player a man-to-man marking defender is marking” [PAGE 7].
- Temporal nonstationarity: routines are used in streaks and discarded [PAGE 10], so a model trained on a short recent window may mispredict future routine selection.
- Weather absence: the source does not include weather variables. Therefore weather-based vetoes are not admissible from this paper alone.

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>

The paper sits inside a longer lineage of set-piece formalization. The historical starting point is the observation that corners are frequent but inefficient in direct goal conversion: “On average, teams win approximately five corner kicks per game” and “the average conversion rate … is very low” [PAGE 1]. The paper then points to FC Midtjylland as a counter-example: “FC Midtjylland are a well-known example, dedicating up to four training sessions per week to practicing corners” [PAGE 1]. This creates the retro-causal scouting premise: past training emphasis and past routine repetition can inform future expectation, but only if the analyst scans enough historical matches.

The scientific genealogy is multi-step. First, prior work identified coarse offensive categories such as delivery trajectory, delivery zone, number of attackers, and static versus dynamic movement [PAGE 1]. Second, prior work found that second-ball situations and hybrid defensive systems matter: Power et al. found that “a corner was more likely to be scored on the second ball … than directly from the corner kick” and that hybrid systems “concede the most dangerous shots” [PAGE 1]. Third, tracking data made synchronized run analysis possible. Fourth, the authors import machine-learning operators from statistics: Gaussian mixture models and expectation-maximization for spatial clustering [PAGE 4], non-negative matrix factorization for topic-like decomposition [PAGE 5], and XGBoost for defensive-role classification [PAGE 6–8].

The methodological lineage can be reconstructed as follows:

\[
\text{event data}
\rightarrow
\text{corner time}
\rightarrow
\text{tracking window}
\rightarrow
\text{initial and target zones}
\rightarrow
\text{run codes}
\rightarrow
\text{corner vectors}
\rightarrow
\text{NMF features}
\rightarrow
\text{routine discovery}.
\]

The defensive lineage is parallel:

\[
\text{defender positions}
\rightarrow
\text{defensive features}
\rightarrow
\text{XGBoost role probability}
\rightarrow
\text{zonal heatmap}
\rightarrow
\text{system comparison}.
\]

The multi-week trap is explicit. Analysts cannot rely on a tiny recent sample because teams use routines in temporal streaks. The paper says: “The teams in our data did not alternate randomly from one routine to another as they took corners” [PAGE 10]. It then warns that “club analysts are often limited to watching up to five matches” and that “Such a small sample of matches provides only a limited insight into the range of set-piece strategies utilized by an opponent” [PAGE 9]. This is the core historical caution: a short scouting window creates temporal aliasing. A routine may appear rare because it is currently dormant, or appear dominant because it is in a temporary burst. The paper’s Team C example makes this concrete: five uses in three games, six games without it, then three uses in one game [PAGE 10].

Another genealogical trap comes from congestion. The paper notes that teams may play “at a rate of 3 every 9 days” and that “the days between matches are reserved for recovery” [PAGE 12]. In such periods, training time for set pieces is scarce. The historical lesson is that corner strategy is not merely a tactical choice; it is a function of preparation capacity. The paper quotes Nuno Mauricio: “Corner kicks are perhaps a moment of the game that is dominated by strategy” [PAGE 12]. The retro-causal implication is that past training regimes and congested schedules can explain why certain teams rely on rehearsed routines under fatigue or time pressure.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>

The recursive scouting problem is that each team must model not only the opponent’s observed tendencies, but also the opponent’s beliefs about what has been observed. The paper’s routine encoding helps because it compresses complex runs into compact codes. It says: “Each player needs to remember only the alphanumeric code for their own run (e.g., 4b, 2a, etc, as described in Section 3.1) and the delivery area of the ball for each new routine” [PAGE 12]. This reduces cognitive load and makes counter-trapping easier: a coach can introduce a novel routine by assigning new codes without requiring players to memorize a completely new spatial diagram.

Crisis habit regression is the tendency to fall back on rehearsed routines when time, fatigue, or tactical pressure reduces improvisation. The source supports this indirectly through the training-optimization section: “Time working on strategy in training is a limited resource and many teams dedicate less than an hour to practicing set pieces” [PAGE 12]. Under congestion, the available rehearsal set becomes the dominant strategy set. If a team has practiced a routine repeatedly, the model should expect higher usage of that routine in high-pressure or time-compressed matches. This is not a betting-style prediction; it is a bounded behavioral expectation derived from the paper’s emphasis on rehearsed routines.

The counter-trap is the deliberate introduction of routines that the opponent has not seen. The paper says the encoding method “allows coaches to efficiently introduce new corner routines that won’t have been seen by an opponent’s video analysts” [PAGE 12]. This creates a recursive loop: if Team A knows Team B has been scanning hundreds of matches for feature expressions, Team A may deploy a low-frequency routine, a novel code combination, or a modified version of a known routine. The paper already observes that teams vary implementations of popular routines: “Closer inspection reveals that the teams used different implementations of this strategy, varying the position of the initial cluster and the length of the runs made by each player” [PAGE 9]. Therefore the opponent model must include not only routine identity but also routine variant.

The clock is the third force. The paper’s training-optimization section links congestion, recovery, and limited practice time: “Teams playing in both domestic and continental competitions must often deal with congested schedules, sometimes playing matches at a rate of 3 every 9 days” [PAGE 12]. The clock changes the feasible strategy set. In a congested schedule, a team may choose routines that are already rehearsed rather than novel routines requiring extensive walkthrough. In a less congested schedule, a team may introduce new routines. The recursive inference is therefore:

\[
\text{Opponent's available preparation time}
\rightarrow
\text{Opponent's feasible routine set}
\rightarrow
\text{Our defensive preparation}.
\]

The paper’s defensive analysis also feeds the recursive loop. If a team knows that the opponent uses a four-zone system that shields the goalmouth but concedes lower-quality shots from outside the six-yard box, the attacking team may choose routines that create shots in those allowed regions. Conversely, if the opponent uses a two-zone system, the paper finds that “many of the goals conceded were from corners delivered either directly between the two zonal players or behind the second zonal player” [PAGE 11]. A recursive coach would therefore ask: “What does the opponent think our preferred delivery zone is, and can we attack the space they think we will avoid?” The paper supports this style of reasoning without claiming a universal optimal routine: “We have refrained from providing an empirical answer to that question in this paper because of the limited size and scope of our data set” [PAGE 13]. The safe inference is that recursive scouting must remain probabilistic and evidence-bounded.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>

The cross-layer veto framework separates tactical narrative from admissible evidence. A proposed corner tactic passes only if it survives the source’s physical, biomechanical, and data-layer constraints. Weather is a special case: the source contains no weather covariates, so weather cannot be used as a formal veto inside this paper’s model. Any weather-based veto must come from an external source and is not verifiable from the provided pages.

Veto 1: short-corner veto.  
The source explicitly removes short corners: “After removing short corners … we were left with a sample of 1723 corner kicks” [PAGE 2]. Therefore any recommendation that relies on a short corner as the primary tactic is inadmissible for this model. If a lower-layer narrative says, “Use a short corner to bypass the zonal block,” the source-layer veto is that the model was not trained to evaluate short corners. Prediction: a short-corner routine will not have a valid 42-run encoding in the same way as a standard corner because the corner-taker remains involved and the spatial operator changes.

Veto 2: ball-trajectory determinism veto.  
The source excludes ball trajectory from the routine encoder: “Note that the trajectory of the ball does not feature in our system. This is because the ball does not always reach the intended target, either because it was intercepted by a defending player or because the cross was not sufficiently accurate” [PAGE 3]. Therefore any claim that a routine’s quality can be inferred solely from the observed ball path is vetoed. Prediction: two corners with similar player runs can have different ball outcomes, so a model that labels routine success by ball arrival will conflate execution with outcome.

Veto 3: man-marking identity veto.  
The source states: “our current methodology does not explicitly identify which attacking player a man-to-man marking defender is marking” [PAGE 7]. Therefore any claim that a specific defender is assigned to a specific attacker is inadmissible unless separately annotated. Prediction: the XGBoost model can estimate whether a defender is man-marking or zonal, but it cannot verify the exact marking pair. If a tactic says, “Defender #4 will follow attacker #9,” that claim requires a higher layer of evidence not provided by the paper.

Veto 4: inactive-player veto.  
Players whose target positions do not lie near the seven active zones are ignored: “Players that do not end their runs near an active zone are ignored in the remainder of this work” [PAGE 4]. Therefore any tactical claim that depends on a player outside the active zones is not supported by the routine encoder. Prediction: if a proposed routine requires a player to end outside zones a through g, the model will classify that player as inactive, and the routine vector will omit that player’s run.

Veto 5: temporal-window veto.  
The run encoder uses a narrow time window: two seconds before the corner and either one second after the first on-ball event or two seconds after the corner, whichever occurs first [PAGE 3]. If a tactic depends on delayed movement after that window, the model cannot verify it. Prediction: a routine whose key separation occurs three seconds after the corner will not be fully represented by the target operator.

Veto 6: weather inadmissibility veto.  
The source does not include weather variables. It does not mention wind, rain, temperature, or surface moisture as predictors. Therefore any formal weather veto is outside the evidentiary layer. The correct adjudication is not “weather is irrelevant,” but “weather is not identifiable from this source.” If external weather data were introduced, it would require a new model layer.

Physical-biomechanical proof of viability:  
The paper’s run model is viable only for movements that occur inside the observed two-second initial window and the short target window. The paper justifies the initial window by observing that “the average speed of the attacking players starts to rise as they begin their runs” at that point [PAGE 3]. The target window is chosen to capture the endpoint of the run before prolonged chaos or prolonged delay. Therefore the model is physically coherent as a short-horizon movement classifier, but it is not a full biomechanical simulation. It does not model acceleration limits, collision avoidance, jump timing, or aerial duel mechanics. Those mechanisms can affect whether a target location becomes a shot, but they are not explicit operators in the paper.

The strongest physical veto is the zone-assignment rule. A player is active only if the target lies near one of the seven active zones. If a proposed routine requires an active attacking contribution outside those zones, the model erases that contribution. This is not a failure of the tactic in reality; it is a failure of the model’s representational boundary.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

The following three counterfactual veto scenarios are stated in a reinforcement-learning-with-verifiable-rewards style: each proposed policy is checked against a verifiable invariant from the source. If the policy contradicts the invariant, the policy is vetoed, and a falsifiable prediction is provided.

Scenario 1: Short-corner exploitation policy.  
Proposed policy: “When facing a compact zonal block, use a short corner to create a 2v1 at the corner flag.”  
Veto: The source’s model excludes short corners. The paper says: “After removing short corners … we were left with a sample of 1723 corner kicks” [PAGE 2]. Therefore the model cannot validate a short-corner routine.  
Verifiable prediction: If a dataset is scored with the paper’s 42-run encoding, short corners will either be excluded before encoding or will fail the active-target-zone logic because the routine does not match the standard corner structure. If a short-corner routine is manually injected, the model’s feature expression should be unstable or undefined under the original pipeline.

Scenario 2: Ball-path success attribution policy.  
Proposed policy: “A corner routine should be rewarded if the ball reaches the intended far-post target.”  
Veto: The source deliberately does not use ball trajectory because the ball may not reach the intended target: “the ball does not always reach the intended target, either because it was intercepted by a defending player or because the cross was not sufficiently accurate” [PAGE 3]. Therefore rewarding only successful ball arrival confounds routine design with delivery execution.  
Verifiable prediction: If two corners have the same player-run feature expression but different ball outcomes, the paper’s routine encoder will treat them as similar routines, while a ball-path-only reward model will treat them as different. The source predicts that routine similarity should be based on player runs, not ball arrival. A falsification test is to cluster corners by feature expression and then check whether ball arrival changes the cluster identity; under the source’s intended semantics, it should not.

Scenario 3: Specific man-marking assignment policy.  
Proposed policy: “Defender #28 is assigned to mark attacker #9, so we should block attacker #9’s run.”  
Veto: The source classifies defenders as man-to-man or zonal but does not identify the specific opponent: “our current methodology does not explicitly identify which attacking player a man-to-man marking defender is marking” [PAGE 7]. Therefore a specific defender-to-attacker assignment is not verifiable from the model output.  
Verifiable prediction: The XGBoost classifier can predict the probability that a defender is man-marking, with cross-validated accuracy “83.4% ± 2.1%” [PAGE 8], but it cannot output the identity of the marked attacker. If an audit claims the model identified the exact marking pair, the claim is falsified by the paper’s own limitation. To verify the specific pair, one must return to manual video annotation, as SL Benfica analysts did for the 500-corner training sample [PAGE 7].

Additional boundary check: defensive-role overclaim veto.  
A policy that claims 95% or higher certainty in defender role classification would be vetoed because the source reports 83.4% ± 2.1% accuracy and 81% precision/recall for zonal classification [PAGE 8]. Verifiable prediction: repeated cross-validation on comparable tracking data should produce accuracy near the mid-80% range if the feature distribution is similar; if accuracy is dramatically higher without new labeled data, the evaluation is likely leaking information or using a different task.

</RLVR_COUNTERFACTUAL_VETOES>