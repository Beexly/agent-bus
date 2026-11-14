---
source: "2026 - Ranking by points and ordinal models - Szczecinski.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 33
model: deepseek/deepseek-v4.1-flash-1017
words: 6845
---

<NATIVE_REASONING>
We need answer with exact XML sections, >=1000 words. Must avoid betting lines. Need analyze source. User wants "DRIVE SOURCE..." likely ask produce deep analysis in specified format. Need cite pages and verbatim quotes. Need formal equations LaTeX, units, assumptions, singularity breakdown. Need >=400 words THINK_TRACE, total >=1000. Need sections exact names. Need discuss ranking by points ordinal models. Need "RLVR counterfactual vetoes" three verifiable scenarios + predictions. "Cross-layer veto adjudication physical/biomechanical/weather veto proof" - source is sports stats not physical? Need avoid fake claims. We can adjudicate that physical/weather/biomechanical layers are not modeled and cannot veto source claims except as out-of-scope. Need proof maybe identify no physical units; only dimensionless probabilities and scores. Could discuss that no biomechanical/weather variables are in likelihood; any veto based on them would be an omitted-variable challenge requiring data. Need maybe "physical layer" in source: home advantage η dimensionless logit shift; schedule counts; no physical units. Could mention no aerodynamic/weather variables, no force/fatigue. Need not invent. Need reference exact page quotes.

Need structure:
<THINK_TRACE> multi-hop derivation and gray-zone audit >=400 words. Explain Lemma 1: sufficiency iff constant-sum and AC slopes equal points. Sufficiency route: log-likelihood, gradient separates; score points. Proposition 1: schedule equivalence and venue balance; subtract score equations. Corollary. Numerical evidence. Gray zones: sufficiency not same as ranking accuracy; constant-sum necessary not sufficient (SuperLega); home advantage sign; slope estimation; ties; schedule imbalance; incentive effects; "all outcomes of player i wins/losses" prior; rational points; point normalization. Need quote exact lines.

<SOURCE_OPERATORS_AND_EQUATIONS>: list equations with LaTeX, units, assumptions, page citations, breakdown/singularity. Need cite pages 1,2,3,6,7,8,9,10,11,12,14,15,16,17,22,24,25 maybe. Units: dimensionless score points; probabilities in [0,1]; skills θ, z dimensionless in log-odds/AC linear predictor; η dimensionless; δ dimensionless. Formal LaTeX:
score s_i = Σ_y ξ_y k_{y;i}; ranking s_i>s_j ⇒ i≻j (PAGE 6-7).
Constant-sum: ξ_y+ξ_{L-1-y}=1 (with normalization) (PAGE 9, 12).
AC: P^h_y(z) = exp(α^h_y+δ_y z)/D_h(z), D_h(z)=Σ_{l=0}^{L-1} exp(α^h_l+δ_l z), δ_y=ξ_y (PAGE 9).
Gradient: \dot\ell^h_y = δ_y - G_h(z), G_h(z)=E[δ_Y|z]=Σ δ_l P_l (PAGE 10).
Reciprocity: P^h_y(z)=P^a_{L-1-y}(-z) (PAGE 8).
Home boost: P^h_y(z)=P_y(z+η), P^a_y(z)=P_y(z-η), α^h_y=α_y+δ_y η (PAGE 11-12).
MAP objective: \hatθ=argmax Σ_{i,j,y} k^h_{y;i,j} ℓ^h_y(θ_i−θ_j)+Σ_i log f(θ_i); prior -γ/2 θ_i² (PAGE 14-15).
Estimating equation: Σ_{j≠i}[k^h_{i,j}G_h(θ_i−θ_j)+k^a_{i,j}G_a(θ_i−θ_j)]+γ θ_i=s_i (PAGE 15). Need correct: equation 18 has hats; use.
Decomposition: \tilde G, \check G; (20) (PAGE 15).
Proposition 1: if schedule-equivalent k_i,l=k_j,l and venue balanced d_i,l=0 for i,j then s_i≥s_j ⇔ θ_i≥θ_j (PAGE 16-17).
Subtraction: s_i−s_j = γ z + ... signs (PAGE 17).
Maybe include Kendall tau? But not necessary; can include Table 3 quote page 24. Need exact quotes.

Breakdown/singularity regimes:
- Non-constant-sum rules (0-1-3, 0-1-2-2) violate sufficiency; score no longer sufficient (PAGE 12).
- Schedule non-equivalence/venue imbalance: can reorder; residual \check G not monotone; equal nonzero imbalances insufficient (PAGE 17).
- All wins/losses: likelihood divergence, prior needed; ML may not exist (PAGE 14).
- Equal score-points: outcomes indistinguishable; skill does not separate (PAGE 10).
- L=3 constant-sum forces δ1=1/2; L=4 one free interior; L=6 two free (PAGE 10).
- Estimation identifiability: α shift invariance α_ref; fix α0=0 (PAGE 10); additive constant skills? z differences; prior anchors zero; γ precision.
- Rational points and integer counts? not a singularity.
- Tie handling: score ties may be equal skills if Proposition 1; else separated (PAGE 23).
- "not sufficient" for CL (PAGE 13).
- "AC model" has partition function positive, no singular except finite probabilities; if slopes not strictly increasing, model not ordinal (PAGE 10). If c=0 nontriviality excluded (PAGE 30).
- If points rule non-monotonic? they assume non-decreasing and normalized (PAGE 9).
Need maybe mention exact quotes.

<RETROCAUSAL_GENEALOGY>: lineage Zermelo 1929, Bradley-Terry 1952, Ford 1957, Andersen 1977, Masters 1982, Davidson 1970, Rao/Kupper, Agresti, Tutz, Lasek/Gagolewski, Szczecinski. Multi-week traps: confusing score sufficiency with score optimality; constant-sum necessary not sufficient; schedule equivalence; venue balance; home advantage invariance; fitting slopes; incentive feedback. Need "retrocausal genealogy" perhaps trace how conclusions retrodict earlier facts: binary win count sufficient; draw half-point as consequence not convention; Zermelo fiction; UEFA/Elo criticism. Include multi-week traps: overfitting to league rule; assuming η matters for ranking; assuming round-robin always; ignoring ties; treating points rules as preferences.

<RECURSIVE_THEORY_OF_ML>: Crisis habit regression vs counter-trap vs clock. Need interpret: crisis habit regression = default habit of ranking by accumulated points; counter-trap = statistical sufficiency / model; clock = schedule/venue/round-robin and generative model. Need discuss recursive ToM: analysts/leagues/teams know points rule; incentives alter probabilities (PAGE 27). "players are aware of the points rule, which then acts as an incentive" quote. Need maybe describe equilibrium feedback: if rule (0-1-3) encourages offense, outcome probabilities are not fixed by skill alone, violating exogeneity. Counter-trap: uniform rule recommended but if adopted, behavior changes. Clock: horizon/season schedule, schedule-equivalence. Need perhaps "habit regression" points counting under imbalance; "counter-trap" using uniform rule and AC model; "clock" timing of seasons, overtime formats, COVID exclusions. Need be careful not over-anthropomorphize.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Need state source has no physical/biomechanical/weather variables; cannot veto statistical conclusions with absent layers. Prove via model equations: P depends only on θ_i−θ_j, venue intercept, points slopes; no force, fatigue, weather. Therefore any cross-layer veto would have to enter as omitted variables altering θ or α/δ; if not in likelihood, it cannot invalidate Lemma 1's algebraic sufficiency. But can challenge external validity: if weather modifies outcome probabilities differently by venue or schedule, then reciprocity/AC may fail unless absorbed into intercepts/slopes or random effects. Need "proof" maybe:
- Model's conditional distribution P^h_y(z;α,δ,η) has no meteorological state W. A weather veto W would require P(Y|θ,venue,W) ≠ P(Y|θ,venue). Source tests no W. Thus no empirical evidence in paper. If W interacts with venue and outcome, equation (14) fails unless η=η(W) and slopes constant; then ranking order may change only if W correlated with schedule. But Proposition 1 invariance under η holds because \tilde G strictly increasing; so home advantage magnitude cannot flip covered pairs. Weather as venue-asymmetric common effect can be absorbed; weather as outcome-specific slope interaction can break constant-sum/slopes? If W changes δ_y per match, then score sufficiency fails. But no data. Thus adjudication: physical/biomechanical/weather cannot veto Lemma 1 internal algebra; they can veto external generalization if measured, and require an extension.
Need mention "no SI units" maybe in source all quantities dimensionless. "Physical" only home advantage η. Need exact page 8 footnote: "win y=L−1 should be more probable when i is host..." no physical. Page 11 home advantage. Page 27 incentive limitation. Good.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. Need define RLVR maybe "reinforcement learning with verifiable rewards"? Need construct scenarios that if true would veto claims. Need predictions and verification. Use counterfactual:
1. Non-constant-sum rule but score order exactly matches MAP under many schedules? Actually Lemma says impossible for sufficiency; but ranking order might accidentally match. Veto target: "score sufficient" not order. Scenario: take NHL (0-1-2-2) data; fit AC with fitted slopes; count reorder rate. Prediction: at most few reorder (paper says 3.2%). Veto if >? The source already gives. Need RLVR: "if a counterfactual schedule with non-constant-sum rule yields score sufficient" impossible by Lemma. Could test by simulation: create schedules and outcomes from AC with δ not constant-sum? Wait Lemma says if score sufficient then constant-sum. A verifiable veto: generate data from AC with non-constant-sum slopes and test whether score is sufficient; gradient contains outcome-specific terms. Prediction: likelihood gradient depends on k_y beyond s; veto if not. But "RLVR" likely means "reinforcement learning with verifiable reward" maybe they want counterfactual vetoes for model. We can phrase "Three verifiable RLVR-style counterfactual vetoes (each falsifies a claimed operator if observed)".
Need ensure no betting. Scenario 1: Constant-sum test: a league with (0-1-3) but exact score-skill order on all schedules? Prediction: not exact; if exact on venue-balanced double round robin? Wait Proposition 1 uses score with fitted slopes? The paper's Corollary 1: point counting exact on venue-balanced round robin under fitted model? Actually if using league's own non-constant-sum rule, does Corollary 1 apply? Proposition 1 uses score (3) with slopes δ? In Sec 4.2 score formed with fitted slopes. For own rule, Table 3 non-constant-sum not exact. So scenario: evaluate (0-1-3) own rule on double round-robin; prediction τ=1? Actually non-constant-sum may fail; Table 3 for Division 1 (0-1-3) 0.962, EPL 0.965, Championship 0.952, Bundesliga 0.962. Veto if own rule equals fitted order for all seasons. But "veto" of source? If own rule exact across all nonconstant leagues, then claim fails. Prediction: not exact; differences >0.03. Good.

2. Schedule equivalence/venue balance: Counterfactual remove venue imbalance or schedule equivalence. Prediction: reorderings vanish when schedule-equivalent and venue-balanced; if a schedule-equivalent venue-balanced pair is reordered, Proposition 1 falsified. Test on league data: none in Table 2. Veto if find one. Good.

3. Uniform rule superiority: In a league with constant-sum non-uniform rule (SuperLega), uniform rule outperforms. Counterfactual if SuperLega's own rule beats uniform by τ? Prediction: uniform ≥ own (Table 3: 0.963 own vs 0.993 uniform? Wait Table 3 SuperLega own 0.963, uniform 0.993, fitted 1; yes). Veto if own rule > uniform in repeated seasons with adequate power. But source says every league unless already uniform. Good.

Need also "predictions" with verifiable metrics: Kendall τb, reorder proportion, posterior predictive log-likelihood, etc. Need no betting lines.

Need exact citations and verbatim quotes. Need be careful quote exact words from source. We can quote short phrases. Need page markers [PAGE N]. We can cite quotes:
- Abstract: "We find the score to be a sufficient statistic if and only if the points rule is constant-sum" [PAGE 1].
- "The constant-sum condition fails in the National Hockey League and in football, which awards three points for a win instead of the two required by sufficiency." [PAGE 1]
- Section 2: "We call the pair (i, j) schedule-equivalent if i and j meet every other opponent the same number of times" [PAGE 5].
- "We say that the schedule is venue-balanced for the player i if i hosts and visits every opponent equally often" [PAGE 6].
- Lemma 1: "The point count (3) is a sufficient statistic for the skills if and only if (i) the score-points are constant-sum, ξy + ξL−1−y = 1 ... and (ii) the outcome probabilities have the form..." [PAGE 9].
- "with the linear predictor αh y + δyz, whose slopes are the score-points, δy = ξy" [PAGE 9].
- "Strictly increasing slopes, δy < δy+1, ... make the model ordinal" [PAGE 10].
- "A rule that gives two outcomes the same score-point, their probabilities keep a fixed ratio and the skill does not separate them." [PAGE 10].
- "The football (0-1-3) rule distributes 3 points in a match with a winner but 2 in a draw, and the NHL (0-1-2-2) rule distributes 2 points in regulation time but 3 in overtime." [PAGE 12].
- "With ξ0 = 0, for three outcomes the condition reads 0 + ξ2 = 2ξ1, so the draw is worth half a win" [PAGE 12].
- Proposition 1 quote [PAGE 16].
- "the half-gap ˇG(·) is not monotone" [PAGE 17].
- "Only a few pairs are reordered even in the NHL" [PAGE 4]; "no group exceeding 3.2%" [PAGE 22].
- "Of the 1080 pairs finishing with the same score, the fit assigns equal skills to the 1052 that Proposition 1 covers and separates the 28 that it does not." [PAGE 23].
- "the uniform rule outperforms the league’s own rule in every league where the two differ." [PAGE 23]
- "Constant-sum is necessary for the score to be sufficient, and SuperLega shows that it does not guarantee a good ranking." [PAGE 26]
- "The main limitation is in the statistical premise, because players are aware of the points rule, which then acts as an incentive." [PAGE 27]
- "The (0-1-3) rule, explicitly introduced to reward offensive play, does not need to reflect the probabilistic model." [PAGE 27]
Need ensure exact quotes maybe line breaks. Good.

Need total word count. Desired 1000+. We can aim ~2500-3500. Need include all sections. Use XML tags exactly. Avoid Markdown? Can use LaTeX inside. Need no betting. Need satisfy "ZERO TOY EQUATIONS": no fake ratios. Use formal equations and units. "ZERO BETTING LINES": no spreads/totals/moneylines/odds. The word "odds" appears in source "log-odds" and "proportional-odds"; but invariant says never mention spreads, totals, moneylines, or odds. Hmm "odds" might be considered betting odds. But source has "log-odds" and "proportional-odds"; we should avoid the bare word "odds" to comply. Could say "adjacent-category logit contrasts" instead of log-odds. Avoid "odds" entirely? The instruction says never mention spreads, totals, moneylines, or odds. We can avoid "odds". But source quote "adjacent-category log-odds" includes odds. We can cite without quote? Maybe avoid quote containing odds. Use "adjacent-category logit" not quote. Need not use phrase "proportional-odds". We can say "cumulative link model" only. Also "points rule" okay. "score-points" okay. No betting lines. Need avoid "over/under" etc.

Need "formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." Mention units:
- Probabilities dimensionless (nats for log-likelihood? log likelihood in nats if natural log; source uses log unspecified; can say in natural-log units, nats, if log_e; if base 2, bits—source doesn't specify; but as formal use \log natural, nats. Is that inventing? The source doesn't specify log base. Better: "log-likelihood numerical units depend on log base; with natural log, nats; ratios of probabilities are dimensionless." Good.
- θ and z are dimensionless latent skill differences (logit scale). δ dimensionless. η dimensionless. k counts. s score-points dimensionless. γ prior precision inverse squared skill units; if θ dimensionless, γ dimensionless? Actually precision reciprocal variance; if θ dimensionless, γ dimensionless. Standard errors same. No physical units.
- Score s units are points (dimensionless convention). Constant-sum total = 1 normalized; or 2/3 if unnormalized. Good.

Need mention "information units" maybe sufficient statistic doesn't carry bits? Sufficiency means data compression; score is sufficient statistic. Could say "sufficiency is an information-theoretic factorization, not a physical force; score compresses outcome counts into s_i." Good.

Need "exact singularity/breakdown regimes": We can label:
1. Non-constant-sum ξ_y+ξ_{L-1-y}≠1 -> Lemma 1 fails; gradient depends on k vector not just s.
2. Non-AC probabilities / cumulative link -> score not sufficient; gradient not separable (PAGE 13).
3. Schedule non-equivalence or venue imbalance -> Proposition 1 not guaranteed; \check G nonmonotone; reorder possible (PAGE 17).
4. All wins/all losses -> ML diverges; prior needed (PAGE 14).
5. Equal slopes -> non-ordinal and unidentifiable outcome separation; "skill does not separate them" (PAGE 10).
6. Non-strict monotonic slopes -> ordinality broken (PAGE 10).
7. L constraints: L=3 δ1=1/2; no free; L=4 one; L=6 two (PAGE 10).
8. Infinite/undefined? D_h positive finite for finite z, α, δ; no singular except numerical overflow. If slopes unbounded? Not in source. Could mention no finite z singularity; partition function strictly positive. If z→∞ probabilities saturate 0/1, gradients vanish? That could cause separation. Good: saturation regime z→±∞ -> P_y→1 for max/min slope, G→δ_max/min; gradient for observed non-saturating outcomes? But not source. We can mention as numerical breakdown: extreme skill differences make probabilities 0/1, gradients vanish for mismatched outcomes, prior regularizes. Is that formal? Could include but not overdo. Need avoid fake. The source says prior prevents divergence when all wins/losses; that's enough.

Need "CROSS_LAYER_VETO_ADJUDICATION" perhaps include formal condition for weather interaction:
The paper's conditional model is P(Y=y | θ_i,θ_j, venue). A cross-layer variable W (weather, biomechanics) could enter only via α^h_y(W), δ_y(W), η(W) or via θ_i(W). If W is independent of schedule and outcomes conditional on θ, it cannot alter Lemma 1 or Proposition 1's algebra. If δ_y(W) varies by match, constant-sum slopes no longer a single rule; score-points not sufficient. If W affects only η(W), Corollary 2 says ranking order covered by Proposition 1 invariant to η. Thus weather/venue interaction does not veto covered pairs; it may break uncovered pairs or external validity. Need "proof" with equation:
P(Y|θ,venue,W) = exp(α^h_y(W)+δ_y(W) z)/Σ...; if δ_y(W)=ξ_y constant in W and α/η W effects absorbed, no veto. If δ_y(W)≠ξ_y or W correlated with k, then the sufficient-statistic factorization fails. Good.
Biomechanical force etc no variables, no SI units; cannot be tested. Need state "A veto must be operationalized as measured W with nonzero interaction; absent that, it is an omitted-variable hypothesis, not proof."

Need "RECURSIVE_THEORY_OF_MIND" discuss "crisis habit regression vs counter-trap vs clock." Could define:
- Crisis habit regression: under schedule imbalance or crisis, default to raw points; this is exactly what paper formalizes, and it is rational only under constant-sum AC and covered pairs; otherwise points can reorder relative to fitted skills (NHL/SuperLega).
- Counter-trap: If league adopts uniform rule to optimize ranking, teams/players may change behavior (incentive), so the outcome model shifts; the uniform rule is sufficient for its own AC model but not immune to strategic response. This is the "recursive theory of mind": agents know rule and respond; model assumes fixed P. Quote page 27.
- Clock: schedule/season horizon and venue balance; Corollary 1 requires venue-balanced round-robin, double round-robin smallest with home advantage; NHL schedule far from schedule-equivalent; COVID seasons excluded; overtime formats create L=4. The "clock" is the schedule calendar and era. Need mention "multi-week traps" maybe in genealogy. Good.

Need "RETROCAUSAL_GENEALOGY" include "multi-week traps" explicit. Maybe phrase "Multi-week traps (drawn from lineage): (a) treating a draw's half-point as convention; (b) assuming Elo and MAP differ because algorithm; (c) assuming home advantage must affect order; (d) assuming constant-sum sufficient for quality; (e) assuming round-robin from single round; (f) ignoring incentives." Retrocausal: the result retrodicts Zermelo's binary theorem, Davidson's ties, IRT sufficiency, and explains why point counting works. Good.

Need ensure not too much. We can write with headings in XML tags. Need maybe start directly with <THINK_TRACE>.

Let's craft detailed answer.

Need quote exact [PAGE N] markers. Use "verbatim quote" with quotation marks. Good.

Let's draft.

THINK_TRACE >=400 words. Need multi-hop derivation. Could be ~800. Let's write.

Potential issue: "RLVR" maybe they want "Reinforcement Learning with Verifiable Rewards" counterfactual vetoes. We'll mention "RLVR-style" maybe not define. They asked "3 verifiable RLVR veto scenarios + predictions." Use table-like bullets.

Need no mention "odds". Avoid "log-odds"; use "logit" if needed. "Adjacent categories (AC)" okay. "Cumulative link (CL)" okay. "proportional" not "odds". Avoid "moneyline" etc. Good.

Need maybe "score" ambiguous; clarify sporting score not Fisher score as source footnote [PAGE 6]. We can mention.

Need "exact singularity/breakdown regimes" in SOURCE_OPERATORS. Include equations.

Let's make formal equations:

(1) s_i = Σ_{y=0}^{L-1} ξ_y k_{y;i}, \quad s_i>s_j \Rightarrow i\succ j. Units: points; k counts; ξ dimensionless.

(2) constant-sum normalized: ξ_0=0, ξ_{L-1}=1, ξ_y+ξ_{L-1-y}=1.

(3) AC: P^h_y(z) = exp(α^h_y+δ_y z)/D_h(z), D_h(z)=Σ_l exp(α^h_l+δ_l z), δ_y=ξ_y. z=θ_i-θ_j dimensionless. α dimensionless. D positive.

(4) reciprocity: P^h_y(z)=P^a_{L-1-y}(-z). (PAGE 8)

(5) gradient: \dot \ell^h_y(z)=δ_y-G_h(z), G_h(z)=Σ_l δ_l P^h_l(z). \dot G_h=Var(δ_Y|z)>0 if slopes not all equal.

(6) home boost: P^h_y(z)=P_y(z+η), P^a_y(z)=P_y(z-η), α^h_y=α_y+δ_y η.

(7) MAP: \hatθ=argmax [Σ_{i,j,y}k^h_{y;i,j}\ell^h_y(θ_i−θ_j)+Σ_i log f(θ_i)], f Gaussian precision γ.

(8) estimating equation: Σ_{j≠i}[k^h_{i,j}G_h(θ_i−θ_j)+k^a_{i,j}G_a(θ_i−θ_j)]+γ θ_i=s_i.

(9) decomposition: \tilde G=1/2(G_h+G_a), \check G=1/2(G_h-G_a); Σ[k_{i,j}\tilde G + d_{i,j}\check G]+γθ_i=s_i, d=k^h-k^a.

(10) Proposition 1 condition and conclusion.

(11) subtraction sign maybe:
s_i-s_j = γ z + k_{i,j}[\tilde G(z)-\tilde G(-z)] + Σ_{l≠i,j} k_{i,l}[\tilde G(z_{i,l})-\tilde G(z_{j,l})] plus venue terms if not balanced. If balanced vanishes. Since \tilde G increasing, sign follows z. Good.

Need cite pages for each. Fine.

Breakdowns with exact quotes:
- "Strictly increasing slopes ... make the model ordinal" [PAGE 10]; equal slopes: "the skill does not separate them" [PAGE 10].
- "The point count is thus not sufficient for the CL model" [PAGE 13].
- "The constant-sum condition fails..." [PAGE 1].
- "the half-gap ˇG(·) is not monotone" [PAGE 17].
- "all outcomes of player i are wins ... or all are losses ... prior ensures that ˆθ exists" [PAGE 14].
- "The main limitation is in the statistical premise..." [PAGE 27].
- "Constant-sum is necessary ... and SuperLega shows that it does not guarantee a good ranking" [PAGE 26].

Need "exact singularity/breakdown regimes" maybe include "L=3 constant-sum fixes δ1=1/2; L=4 one free; L=6 two free" [PAGE 10]. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" formal proof:
Assume W. Let model P(Y|θ,venue,W) = exp(α^h_y(W)+δ_y(W)z)/D_h(z;W). Then sufficiency factorization holds iff δ_y(W)=ξ_y and ξ constant-sum for all W in support; if δ_y(W) varies with W or W correlated with k, score s_i not sufficient. If W affects only α or η, Corollary 2 says order invariance for covered pairs. Weather/biomechanical variables have no measured coefficients; hence cannot veto internal theorem. For external validity, need W data and test interaction. We can state "physical/biomechanical/weather veto proof: none" maybe "proof" in the sense of adjudication. Use "veto proof" phrase.

Need "RLVR_COUNTERFACTUAL_VETOES" three scenarios with predictions:
1. Constant-sum falsification via synthetic schedules: Generate AC data with δ=(0,1,3) normalized? Wait nonconstant sum: L=3 δ=(0,1,3)? But slopes must be increasing; constant-sum fails. For every schedule, compute s_i with same ξ; check whether likelihood gradient for player i depends only on s_i. Prediction: no, gradients differ for fixed s when k_y composition changes; if a verifier finds identical gradients for all schedules, Lemma 1 is falsified. This is mathematical not empirical; verifiable by symbolic/numeric. Good.
2. Schedule-equivalence/venue-balance falsification: Test all pairs in Table 2; prediction zero reorderings among schedule-equivalent venue-balanced pairs and zero among 719 schedule-equivalent non-venue-balanced pairs (source says none). If any reorder in these pairs under fitted AC with prior, Proposition 1 is falsified for that data/model. Need careful: Proposition 1 applies schedule-equivalent + venue-balanced; source says none even non-venue. Prediction: zero for covered pairs; likely zero for also non-venue. Good.
3. Uniform rule superiority: Use SuperLega seasons; compute Kendall τb between score order under own rule vs MAP skill; uniform vs MAP. Prediction: uniform > own (0.993 > 0.963 in Table 3). If repeated out-of-sample seasons show own rule ≥ uniform with statistical significance, the recommendation's empirical part is vetoed. Also NHL prediction: uniform 0.965 vs own 0.907. Good.
Need mention "RLVR" maybe "RLVR verifier checks" not betting. Good.

Need maybe "predictions" include exact numeric from Table 3. Use double check Table 3:
Division 1 (0-1-2) own=1, uniform blank? Actually table columns: own, uniform, fitted. For constant sum own=1; maybe uniform blank? Table shows Division 1 (0-1-2) yes 1 (own); Division 1 (0-1-3) no 0.962 1; EPL 0.965 1; Championship 0.952 1; Bundesliga (0-1-2) yes 1; Bundesliga (0-1-3) no 0.962 1; NHL no 0.907 0.965 0.968; SHL 1999-2003 yes 0.970 0.964; SHL 2010-2014 yes 0.986 0.995; SHL 2015-2025 yes 0.990 1; SuperLega yes 0.963 0.993 1. Need be clear "own rule" vs "uniform". For SuperLega own 0.963, uniform 0.993. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" maybe mention no biomechanical/weather variables in paper; "physical" can mean home advantage but not force. "No SI units" and "dimensionless". Good.

Need "RECURSIVE_THEORY_OF_ML" maybe "crisis habit regression" could be seen as "habit regression" under pressure. We can say:
- Crisis habit regression: when schedule breaks, observers regress to raw point totals; paper shows this is exactly guaranteed only under assumptions; in NHL reorder rate up to 3.2%.
- Counter-trap: better model (uniform rule) may be gamed; adoption changes P(Y|θ), so the model's fixed AC parameters are no longer invariant. This is a recursive equilibrium issue. Prediction: after rule change, fitted δ and η may shift; verifier should compare pre/post slopes.
- Clock: season length and schedule balance; double round-robin minimal; NHL schedule far; overtime L=4; COVID exclusions. Need "clock" as time/era. Good.

Need not mention "betting". Check words: "odds" avoid. But quote "log-odds" from source? I will avoid. "proportional-odds" avoid. Do not mention "spreads, totals, moneylines, odds." Good.

Need maybe include "0-1-3" etc. That's points rule, not betting line. Fine.

Need produce final only. Ensure XML tags exact. Use no extra outside? Fine. Need no markdown heading? XML tags.

Let's compose.

Word count: Need >1000. We can write ~2500. Let's ensure THINK_TRACE >=400. We can count roughly. The final will be long. Good.

Need be precise with equations and citations. Use \operatorname{nats}? Not necessary. Mention units in text.

Let's write final.
</NATIVE_REASONING>

<THINK_TRACE>
The source’s central move is to treat the league’s accumulated points total as a candidate sufficient statistic and then ask what outcome-generating model makes that true. The derivation is not merely descriptive: it starts from the sporting score \(s_i=\sum_y \xi_y k_{y;i}\) [PAGE 6], fixes the practical ranking \(s_i>s_j\Rightarrow i\succ j\) [PAGE 7], and then imposes the sufficiency factorization. The key mathematical hop is that the gradient of the log-likelihood for player \(i\) must depend on the outcome counts only through \(s_i\). In Lemma 1 the author proves the “if and only if” result: the points rule must be constant-sum, \(\xi_y+\xi_{L-1-y}=1\), and the probabilities must be adjacent-categories (AC) with slopes equal to the score-points, \(\delta_y=\xi_y\) [PAGE 9]. This is a multi-hop result: constant-sum comes from swapping players and reversing the outcome index; the AC form comes from forcing the outcome-specific derivative vector to lie in the span of the constant vector and the points vector; the slope identification comes from integrating the derivative and normalizing the probabilities [PAGE 29–31]. The abstract states the same result plainly: “We find the score to be a sufficient statistic if and only if the points rule is constant-sum” [PAGE 1].

The second hop is ranking equivalence. Sufficiency says the score contains the information about the skills, but it does not automatically say that sorting scores reproduces the sorted MAP skills. Proposition 1 adds schedule-equivalence and venue balance: if \(k_{i,l}=k_{j,l}\) for every other opponent \(l\), and if \(d_{i,l}=0\) for \(i\) and \(j\), then \(s_i\ge s_j\Longleftrightarrow \hat\theta_i\ge\hat\theta_j\) [PAGE 16]. The proof subtracts the estimating equations for \(i\) and \(j\). The venue terms vanish under venue balance, and each remaining term has the sign of \(\hat z_{i,j}=\hat\theta_i-\hat\theta_j\) because \(\tilde G(\cdot)\) is strictly increasing [PAGE 17]. A round-robin satisfies schedule equivalence for all pairs; a venue-balanced round-robin requires an even number of meetings per pair, so the smallest such schedule with home advantage is a double round-robin [PAGE 17–18].

The gray-zone audit matters because three different claims are easy to conflate. First, sufficiency is an algebraic factorization property, not a claim that point counting is always the best ranking. The paper itself warns that “Constant-sum is necessary for the score to be sufficient, and SuperLega shows that it does not guarantee a good ranking” [PAGE 26]. Second, a constant-sum rule may still be poor if its score-points do not match the fitted slopes; SuperLega’s rule is constant-sum yet the uniform rule performs better in the reported seasons [PAGE 24–25]. Third, the empirical reorderings are small but non-zero: “Only a few pairs are reordered even in the NHL” [PAGE 4], and “no group exceeding 3.2% of those with distinct scores” [PAGE 22]. The schedule condition is therefore the real boundary: where schedule equivalence fails, Proposition 1 does not apply, and reorderings appear. The paper also notes that equal but non-zero venue imbalances are not enough, because “the half-gap \(\check G(\cdot)\) is not monotone” [PAGE 17]. Another edge case is all wins or all losses: the prior is needed because the ML estimate may diverge when a player’s outcomes are all at an extreme [PAGE 14]. The model also requires strictly increasing slopes for ordinality; if two outcomes have the same score-point, “the skill does not separate them” [PAGE 10]. Finally, the cumulative-link model is excluded because its gradient does not separate the outcome from the skill difference: “The point count is thus not sufficient for the CL model” [PAGE 13].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source uses dimensionless sporting score-points, dimensionless latent skills, and probability masses. With natural logarithms, log-likelihoods are in nats; probability ratios are dimensionless. There are no SI mechanical units in the model. The “score” in the paper is the accumulated sporting total, not Fisher’s gradient; the paper explicitly distinguishes the two [PAGE 6].

1. Point-count ranking:
\[
s_i=\sum_{y=0}^{L-1}\xi_y k_{y;i},\qquad s_i>s_j\Rightarrow i\succ j .
\]
Here \(k_{y;i}\) is the count of outcome \(y\) obtained by player \(i\), \(\xi_y\) is the score-point for outcome \(y\), and \(s_i\) is measured in league points. The paper defines this score and ranking on [PAGE 6–7]. The points rule is a tuple \(\xi=(\xi_0,\ldots,\xi_{L-1})\). An increasing affine transform \(\xi_y\mapsto a\xi_y+b\) leaves the order unchanged when all players play the same number of matches [PAGE 7].

2. Constant-sum condition:
\[
\xi_0=0,\qquad \xi_{L-1}=1,\qquad \xi_y+\xi_{L-1-y}=1.
\]
For \(L=3\), this forces \(0+\xi_2=2\xi_1\), so “the draw is worth half a win” [PAGE 12]. Thus the sufficient ternary rule is \((0,1/2,1)\), equivalent by scaling to \((0,1,2)\). The football \((0,1,3)\) rule distributes three points in a win but two in a draw; the NHL \((0,1,2,2)\) rule distributes two points in regulation and three in overtime [PAGE 12]. The abstract states: “The constant-sum condition fails in the National Hockey League and in football, which awards three points for a win instead of the two required by sufficiency” [PAGE 1].

3. Adjacent-categories outcome model:
\[
P^h_y(z)=\frac{e^{\alpha^h_y+\delta_y z}}{D_h(z)},\qquad
D_h(z)=\sum_{l=0}^{L-1}e^{\alpha^h_l+\delta_l z},\qquad
\delta_y=\xi_y,
\]
where \(z=\theta_i-\theta_j\) is the dimensionless skill difference, \(\alpha^h_y\) are venue intercepts, and \(D_h(z)\) is the partition function. Lemma 1 states the point count is sufficient iff the rule is constant-sum and the probabilities have this form, “with the linear predictor \(\alpha^h_y+\delta_y z\), whose slopes are the score-points, \(\delta_y=\xi_y\)” [PAGE 9]. The AC model is ordinal when \(\delta_y<\delta_{y+1}\); otherwise equal slopes leave outcome probabilities in a fixed ratio and the skill does not separate them [PAGE 10]. For \(L=3\), constant-sum fixes the single interior slope, \(\delta_1=1/2\); for \(L=4\) one interior value is free; for \(L=6\) two are free [PAGE 10].

4. Reciprocity and home advantage:
\[
P^h_y(z)=P^a_{L-1-y}(-z).
\]
This is [PAGE 8]. Under the home-boost parameterization,
\[
P^h_y(z)=P_y(z+\eta),\qquad P^a_y(z)=P_y(z-\eta),
\]
and in the AC form
\[
\alpha^h_y=\alpha_y+\delta_y\eta,
\]
with dimensionless home-advantage parameter \(\eta\) [PAGE 11–12]. Setting \(\eta=0\) gives the venue-neutral model.

5. Gradient and expected score:
\[
\dot\ell^h_y(z)=\delta_y-G_h(z),\qquad
G_h(z)=\sum_{l=0}^{L-1}\delta_lP^h_l(z)=\mathbb E[\delta_Y\mid z].
\]
Differentiating again gives
\[
\dot G_h(z)=\operatorname{Var}[\delta_Y\mid z]>0
\]
when the slopes are not all equal, so \(G_h(\cdot)\) is strictly increasing [PAGE 10]. The visitor’s gradient has the same form, \(\dot\ell^a_y(z)=\delta_y-G_a(z)\) [PAGE 11].

6. MAP estimation:
\[
\hat\theta=\arg\max_\theta
\left[
\sum_{i,j}\sum_y k^h_{y;i,j}\ell^h_y(\theta_i-\theta_j)
+\sum_i\log f(\theta_i)
\right],
\]
with Gaussian prior
\[
\log f(\theta_i)=-\frac{\gamma}{2}\theta_i^2+\text{const}.
\]
This is [PAGE 14–15]. The prior “prevents the divergence of \(\hat\theta_i\) that would otherwise occur when all outcomes of player \(i\) are wins ... or all are losses” [PAGE 14]. With the AC gradients, the estimating equation is
\[
\sum_{j\ne i}
\left[
k^h_{i,j}G_h(\hat\theta_i-\hat\theta_j)
+k^a_{i,j}G_a(\hat\theta_i-\hat\theta_j)
\right]
+\gamma\hat\theta_i=s_i,
\]
where \(s_i=\sum_y\delta_yk_{y;i}\) [PAGE 15]. Equivalently, with
\[
\tilde G=\frac{G_h+G_a}{2},\qquad
\check G=\frac{G_h-G_a}{2},\qquad
d_{i,j}=k^h_{i,j}-k^a_{i,j},
\]
one gets
\[
\sum_{j\ne i}
\left[
k_{i,j}\tilde G(\hat\theta_i-\hat\theta_j)
+d_{i,j}\check G(\hat\theta_i-\hat\theta_j)
\right]
+\gamma\hat\theta_i=s_i.
\]
This decomposition is [PAGE 15]. The venue term \(d_{i,j}\check G(\cdot)\) disappears if \(d_{i,j}=0\) for the pair, or if the model is venue-neutral and \(\check G\equiv0\) [PAGE 16].

7. Ranking-equivalence operator:
\[
s_i\ge s_j\Longleftrightarrow \hat\theta_i\ge\hat\theta_j
\]
when the pair is schedule-equivalent and the schedule is venue-balanced for \(i\) and \(j\) [PAGE 16]. The proof subtracts the estimating equations:
\[
s_i-s_j=\gamma\hat z_{i,j}
+\sum_l\left[k_{i,l}\tilde G(\hat z_{i,l})-k_{j,l}\tilde G(\hat z_{j,l})\right]
+\sum_l\left[d_{i,l}\check G(\hat z_{i,l})-d_{j,l}\check G(\hat z_{j,l})\right].
\]
Under venue balance and schedule equivalence, every surviving term has the sign of \(\hat z_{i,j}\) because \(\tilde G\) is strictly increasing [PAGE 17].

8. Exact breakdown and singularity regimes:
- Non-constant-sum rule: Lemma 1 fails; the score is not sufficient. The football \((0,1,3)\) and NHL \((0,1,2,2)\) rules are named failures [PAGE 1, PAGE 12].
- Non-AC outcome model: sufficiency fails. The cumulative-link model is explicitly excluded because the outcome enters through thresholds that also contain \(z\); “The point count is thus not sufficient for the CL model” [PAGE 13].
- Schedule non-equivalence or venue imbalance: Proposition 1 is not guaranteed; reorderings can occur where the schedule condition fails [PAGE 16–17, PAGE 22]. Equal but non-zero venue imbalances are insufficient because \(\check G\) is not monotone [PAGE 17].
- All wins or all losses: the unregularized ML estimate can diverge; the prior ensures existence and uniqueness [PAGE 14].
- Equal score-points: the model is not strictly ordinal; “the skill does not separate them” [PAGE 10].
- Finite-\(z\) probabilities: \(D_h(z)>0\) for finite parameters, so there is no finite-\(z\) partition-function singularity; numerical saturation occurs only as \(z\to\pm\infty\), where probabilities approach 0 or 1. The source’s documented singularity is the separation/divergence case handled by the prior [PAGE 14].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is unusually explicit. For binary outcomes, the sufficient statistic of the Bradley–Terry model is the win count; the source cites Zermelo (1929), Bradley and Terry (1952), and Ford Jr. (1957) [PAGE 3, PAGE 18]. The ordinal statement has a counterpart in item-response theory, especially Andersen (1977) and Masters (1982) [PAGE 3]. Davidson’s ties model is the \(L=3\) case, and the home-boost parameterization follows Rao and Kupper, Davidson and Beaver, FIFA, Lasek and Gagolewski, and Szczecinski and Roatis [PAGE 11–12]. The AC model itself is tied to Darrell Bock (1972), Tutz, Egidi and Torelli, and Szczecinski [PAGE 9–10]. The genealogical payoff is retrocausal: Zermelo’s half-point convention is shown to be a consequence of sufficiency, not an arbitrary convention. The source notes that Zermelo “adopted \(\delta_1=1/2\) for ternary ... matches as a convention” and implemented it by a counting fiction; the present result derives the same half-point from constant-sum and AC slopes [PAGE 18 footnote 10]. Likewise, the Elo ranking is not an alien algorithm here: its update targets the same optimality condition with an increasing \(\tilde G\), so wherever Proposition 1 applies it induces the same order as MAP and point counting [PAGE 19]. The criticism of UEFA club coefficients and the proposal to use an Elo-based formula fit this genealogy [PAGE 19].

Multi-week traps in this lineage are several. Trap one is to treat a points rule as a preference rather than an implicit probability model; the paper’s point is that a constant-sum rule plus AC slopes is the model under which the score is sufficient [PAGE 9, PAGE 23]. Trap two is to infer that constant-sum is enough for a good ranking; SuperLega is the counterexample, because its rule is constant-sum yet the uniform rule agrees better with fitted skills [PAGE 24–26]. Trap three is to assume that home advantage must change the order; Corollary 2 says the order for covered pairs is invariant to the home advantage and to the prior [PAGE 18]. Trap four is to generalize from a single round-robin; with home advantage the smallest venue-balanced round-robin is a double round-robin [PAGE 18]. Trap five is to forget that leagues are strategic environments: the final caveat says “players are aware of the points rule, which then acts as an incentive” [PAGE 27]. That caveat is not a mathematical defect; it is a scope limit on the probabilistic premise.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The “crisis habit regression” is the default human response to a ranking problem: when schedules are unequal or the table is tight, observers regress to raw accumulated points. The paper gives that habit a precise domain. Point counting is exactly equivalent to the fitted skill order when the pair is schedule-equivalent and venue-balanced [PAGE 16]; on a venue-balanced round-robin this holds for all pairs [PAGE 17–18]. Outside that domain, the habit can reorder teams, though usually narrowly: the NHL’s worst reported group reorders 3.2% of pairs with distinct scores, and reordered pairs differ by a median of 0.4 score-points versus 7.0 for all distinct-score pairs [PAGE 22–23]. So the crisis habit is not irrational everywhere; it is rational in the covered schedule class and fragile outside it.

The “counter-trap” is the temptation to replace the league’s rule with the model-optimal uniform rule \(\xi_y=y\). The uniform rule is constant-sum at every \(L\), needs no estimation, and the paper reports that it “outperforms the league’s own rule in every league where the two differ” [PAGE 23]. The trap is that this recommendation is a statistical ranking recommendation, not an equilibrium recommendation. If a league adopts the uniform rule, players and teams know it and may change behavior; the source explicitly warns that “players are aware of the points rule, which then acts as an incentive” and that the \((0,1,3)\) rule “does not need to reflect the probabilistic model” [PAGE 27]. In recursive-theory-of-mind terms, the analyst models \(P(Y\mid\theta,\text{venue})\), but the agents model the analyst’s rule and respond. A rule change can shift \(\alpha\), \(\delta\), or \(\eta\), so the fitted AC model is not invariant to the policy. A verifier should therefore compare pre- and post-rule-change slopes and home-advantage estimates, not just the table.

The “clock” is the schedule calendar and era. The paper’s empirical groups are defined by meeting counts \(k_{i,j}\), venue balance, and schedule-equivalence: football and SuperLega are venue-balanced round-robins; the SHL changes format across 1999–2003, 2010–2014, and 2015–2025; the NHL changes format across 2005–2007, 2008–2011, 2013–2018, and 2021–2025 [PAGE 21–22]. The clock also includes overtime regimes, which create \(L=4\) in ice hockey, and the exclusion of COVID-affected seasons [PAGE 20–21]. The recursive lesson is that the ranking rule, the schedule clock, and the agents’ incentives are coupled. A point system that looks sufficient in one schedule era can be outside its guarantee in another; the NHL’s widening \(k_{i,j}\) range is the clearest case, with reorderings rising from 1.0% at \(k_{i,j}\in\{2,3,4\}\) to 3.2% at \(k_{i,j}\in\{0,1,4,8\}\) [PAGE 22–23].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The source contains no biomechanical force, fatigue, weather, or equipment variables. Its conditional model is \(P(Y=y\mid \theta_i,\theta_j,\text{venue})\), with the AC form depending only on \(z=\theta_i-\theta_j\), venue intercepts, slopes, and optionally \(\eta\) [PAGE 8–11]. There are no SI units for force, acceleration, or meteorological state; the only “physical” parameter is the dimensionless home-advantage boost \(\eta\) [PAGE 11–12]. Therefore a cross-layer veto cannot be mounted from the paper’s own variables. The paper’s internal algebra is not vulnerable to an unmeasured weather or biomechanical layer unless that layer is shown to alter the conditional probabilities in a way that breaks the factorization.

Formally, suppose a cross-layer variable \(W\) enters as
\[
P^h_y(z\mid W)=\frac{e^{\alpha^h_y(W)+\delta_y(W)z}}{D_h(z;W)}.
\]
If \(\delta_y(W)=\xi_y\) for all \(W\) in the support and the constant-sum condition holds, then \(W\) changes only intercepts or the home boost; by Corollary 2, the order for pairs covered by Proposition 1 is invariant to \(\eta\) and to the prior [PAGE 18]. If \(W\) affects only the home advantage \(\eta(W)\), the covered-pair order still cannot flip because \(\tilde G\) remains strictly increasing. A veto requires either (i) outcome-specific slope variation \(\delta_y(W)\neq\xi_y\), or (ii) \(W\) correlated with the schedule counts \(k_{i,j},d_{i,j}\), or (iii) a failure of reciprocity or AC. In those cases the score need not be sufficient, and the source’s guarantee lapses. But that is an extension demand, not a refutation of Lemma 1.

The same adjudication applies to biomechanics: a fatigue or injury state could change \(\theta_i\) over time or change the variance of outcomes, but the source’s model already treats \(\theta_i\) as a latent skill and uses a prior to regularize extremes [PAGE 14]. It does not estimate within-match biomechanics. Weather could plausibly interact with venue and outcome; if it does, it must be modeled as a measured modifier of \(\alpha^h_y\), \(\delta_y\), or \(\eta\). The paper’s empirical test is schedule-based, not weather-based: it reports that reorderings follow meeting counts rather than venue, with no schedule-equivalent pair reordered [PAGE 22]. Thus the correct cross-layer verdict is: physical, biomechanical, and weather layers are out of scope and cannot veto the algebraic sufficiency theorem; they can only veto external validity if operationalized as measured interactions that break constant-sum slopes, reciprocity, or schedule coverage.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Each veto below is a verifiable counterfactual: a symbolic or empirical test that would falsify a stated operator if it returned the opposite result.

1. Constant-sum sufficiency veto. Take a ternary league with a non-constant-sum rule, e.g. \(\xi=(0,1,3)\). Generate or select schedules with fixed \(s_i\) but different outcome-count vectors \(k_{y;i}\). Compute the gradient of the AC log-likelihood for player \(i\). Prediction from Lemma 1: the gradient cannot depend on the counts only through \(s_i\) unless the rule is constant-sum and the slopes equal the score-points [PAGE 9, PAGE 28–31]. A verifier finding an exact factorization for all schedules and all \(z\) under \((0,1,3)\) would veto Lemma 1. Expected result: factorization fails; the score is not sufficient. This is a mathematical RLVR check, not a league-data check.

2. Schedule-equivalence/venue-balance veto. On the fitted AC model, test every pair in the reported league data for reordering. Prediction: zero reorderings among schedule-equivalent, venue-balanced pairs, and specifically zero among the 719 schedule-equivalent but not venue-balanced NHL/SHL pairs the paper says were checked [PAGE 22]. Also, of the 1080 pairs with equal score, the fit should assign equal skills to the 1052 covered by Proposition 1 and separate only the 28 uncovered pairs [PAGE 23]. A single covered-pair reordering under the fitted prior and AC model would falsify Proposition 1 for that data/model. Expected result: zero covered-pair reorderings.

3. Uniform-rule superiority veto. Compute Kendall’s \(\tau_b\) between the MAP skill order and (a) the league’s own rule, (b) the uniform rule \(\xi_y=y\), and (c) the fitted slopes. Prediction from Table 3: the uniform rule beats the league’s own rule wherever they differ, e.g. NHL own \(0.907\) versus uniform \(0.965\), SuperLega own \(0.963\) versus uniform \(0.993\), and the fitted slopes add at most \(0.01\) beyond uniform [PAGE 24–25]. A verifier using pre-registered out-of-sample seasons that finds the league’s own rule significantly above the uniform rule in a non-uniform league would veto the empirical recommendation. Expected result: uniform \(\ge\) own rule in the reported leagues, with the largest gain in the NHL.

These three checks are independent: the first tests the sufficiency algebra, the second tests the ranking-equivalence operator, and the third tests the practical rule recommendation. None requires physical, biomechanical, or weather data; all are verifiable from the paper’s counts, fitted slopes, and reported tables.
</RLVR_COUNTERFACTUAL_VETOES>