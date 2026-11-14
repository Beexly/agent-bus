---
source: "2025 - Defending the Long Throw A Dual Model Framework for Minimising Defensive Risk Sebastian Greenhalgh Dan Anghel - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Hudl StatsBomb/Research Competitions/2025"
pages: 25
model: deepseek/deepseek-v4.1-flash-1017
words: 6289
---

<NATIVE_REASONING>
We need answer with exact XML sections >=1000 words. Need analyze source. Must not betting lines. Need cite [PAGE N] exact markers and verbatim quotes. Need formal LaTeX, units, assumptions, singularity/breakdown regimes. Need deep multi-hop derivation gray-zone audit >=400 words THINK_TRACE. Need source operators/equations formal LaTeX units page citations breakdown. Retrocausal genealogy historical/scientific lineage & multi-week traps. Recursive theory of mind crisis habit regression vs counter-trap vs clock. Cross-layer veto adjudication physical/biomechanical/weather veto proof. RLVR counterfactual vetoes 3 verifiable scenarios predictions. Need ensure 1000+ words total. Desired oververbosity 5 but requirements huge. Need be precise. We need perhaps identify source operators: long throw definition, outcome labels, windows, XGBoost AUC, SHAP, GRU metrics, counterfactual perturbations, tactical recommendations. Equations can be formal derived from text, not invent toy ratios. Need state units and assumptions. Could formulate probability model P(Y=shot | x) with x features; AUC etc. GRU hidden state equations maybe standard GRU and attention, but source doesn't detail. We can state model-agnostic formalization. Need "source pages provided" cite exact [PAGE N] and verbatim quotes. Need map page numbers. Source text includes page markers? It shows "**1**", "**2**" etc. We can use [PAGE 2] etc. Need exact quotes. Need quote from pages. We have page numbers in text: page 1 intro, page 2 stats, page 3 figures, page 4, page 5, page 6, page 7, page 8, page 9 metrics, page 10 SHAP, page 11 tactical, page 12 GRU, page 13 metrics, page 14 calibration, page 15 event contributions, page 16, page 17, page 18, page 19, page 20, page 21, page 22, page 23, page 24, page 25, page 26, page 27, page 28, page 29. PDF 25 pages but source text shows up to 29? It says PAGES: 25. Hmm source has page markers 1-29 due PDF pages? We can cite [PAGE N] as source text markers. Need be cautious: PAGES:25 but source text page numbers up to 29? Maybe PDF pages plus? We cite source page markers.

Need answer in XML tags exactly. No betting. We can mention physical units (m, s, m/s, probability dimensionless). Formal LaTeX. Singularity/breakdown regimes: e.g., log loss / AUC undefined under single-class; precision undefined zero predicted positives; Brier; calibration; SHAP additive with missingness; kNN imputation; GRU long horizon 256 events; 360 occlusion; counterfactual out-of-distribution; AUC deception under imbalance. Need mention "singularity/breakdown" explicitly.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 verifiable veto scenarios + predictions. RLVR means reinforcement learning with verifiable rewards? We can frame counterfactual veto tests that would falsify claims. Need predictions. No betting lines. Need 3 scenarios: (1) throw origin depth causal test within same thrower/landing zone; prediction if geometry claim true: moving origin 5m deeper reduces shot probability 25-30%; veto if no reduction or sign reversal. (2) defensive density 5-6 vs 7+ within matching landing zone/centrality; prediction no measurable reduction and rebound persistence +9-11% in 7+; veto if 7+ reduces. (3) clearance direction central vs touchline/halfway; prediction central clearance increases goal prob +0.03-0.05, touchline reduces; veto if central clearances not higher. Need mention verifiable via event+tracking data, pre-registered metrics, confidence intervals, bootstrapping by match/sequence. Could also include GRU counterfactual temporal window 2-6s. But need 3.

Need cross-layer veto: physical/biomechanical/weather veto proof. Source doesn't mention weather. We can adjudicate: physical constraints of thrower; biomechanical; weather not in data, cannot be proven; veto if wet/windy conditions alter ball speed/trajectory and invalidate static geometric model. Need "proof" by falsification: no weather variable in final 10 features, no weather stratum in source, so any all-weather tactical claim is underdetermined; layer veto only when measurable. Need cite source "throw-origin proximity to goal is clearest single determinant" etc. Need discuss biomechanical: throw distance limited, bilateral symmetry, landing clusters, "physical limitations of throwers" [PAGE 3]. Weather veto: absent; cannot verify; need test stratified by weather; if rain/wind changes speed and clearance control, model breaks. Need not overclaim. "Physical/biomechanical/weather veto proof": perhaps construct veto hierarchy: if a lower layer (weather) modifies measured ball speed > threshold or makes throw length <20m/inside box impossible, the tactical recommendation is vetoed. Need formal inequality.

Need retrocausal genealogy: historical lineage: Stone et al 2021, Casal et al 2023, set pieces, corners; methods XGBoost/SHAP, GRU attention, counterfactual perturbation, 360 data. Multi-week traps: overfitting rare event, class imbalance, leakage, 360 blind spots, sequence horizon truncation, tactical confounding, "clearance positive goal driver" reverse causation (defenders clearing to prevent goals but if unsuccessful, goals occur); need multi-week trap audit. "Retrocausal" means later outcomes retroactively interpret early events; GRU masking contribution may attribute clearance to goal risk due to selection. Need mention "clearance" as strongest positive driver for goals but authors say caution and possible confounding [PAGE 15]. Genealogy: long throws under-utilized, previous season 19 goals, 11/20 teams opening weekend [PAGE 1]. StatsBomb 360 dataset [PAGE 6]. Stone 16,154 throw-ins [PAGE 1]; Casal 2,658 LaLiga [PAGE 1]. Need exact quotes.

Need recursive theory of mind: crisis habit regression vs counter-trap vs clock. Interpret: under defensive crisis, players regress to habit (pack box, tall CBs, keeper aggressive) vs counter-trap (opponent designs long throw to exploit exactly those habits) vs clock (2-6s instability window). Need recursive ToM: defender thinks attacker thinks defender will pack box; attacker loads box to create ricochets; defender overcorrects. Need propose decision policy: pre-script roles, not reactive. Need cite recommendations: five-six defenders, central corridor, directional clearances, keeper deeper [PAGE 21-27]. Need formal? Maybe.

Need THINK_TRACE >=400 words. It should include deep multi-hop derivation & gray-zone audit. Need mention not to overstate causal claims. Maybe derive from source: long throw definition L = 1[length>20m and end inside box], outcome Y within 15s, shot within 7s XGBoost, GRU sequence up to 256 events. Need reconcile different prevalence: 14.68% shot in 15s overall vs GRU 35.1% shot sequences? Why? Different dataset/sample? Source says GRU trained same multi-league dataset, shot prevalence 35.1%. That's a gray-zone inconsistency. Need audit. Also XGBoost 2,062 events, GRU sequences maybe? Outcome labels: Goal 1.82%, shot 14.68%, corner 6.19%, no outcome 77.51%. GRU shot 35.1%, goal 8%. This likely because sequence-level dataset includes shots within 256 events, not 15s, or different filtering. Need flag. Need cite [PAGE 2] and [PAGE 13]. That is a gray-zone. Also AUC-ROC 0.650 vs Table 4.2 0.657 inconsistency; precision/recall F1 typo 035. Need mention. XGBoost model says shot within following 7 seconds [PAGE 8], but stats label 15s [PAGE 2]. Need audit. Feature "goalkeeper depth" in counterfactual but not final 10? They mention goalkeeper depth in 6.2 [PAGE 18], but final features table no keeper depth? Actually table includes 10, no keeper depth. They say static XGBoost found minimal influence for keeper features [PAGE 23]. Contradiction? Need gray-zone.

Need "source operators and equations" formal LaTeX. Let's formulate:

Definition:
\[
T_i = \mathbf{1}\{ \ell_i>20\,\mathrm{m} \land \mathbf{x}^{\text{end}}_i \in \mathcal{P}_{\text{opp}}\}
\]
with \(\mathcal{P}_{\text{opp}}\subset\mathbb{R}^2\) in m^2. Outcome label:
\[
Y_i =
\begin{cases}
G & \text{if goal within 15s}\\
S & \text{if shot within 15s and no goal}\\
C & \text{if corner won within 15s and no S/G}\\
N & \text{otherwise}
\end{cases}
\]
Actually corners window extends to 45s for corners? Source: "we measure outcomes in a 15s window following the throw. However, this timeframe extends to 45s for corners (since the time associated with a corner is when it is taken, not when it is won)." Wait label corner won maybe corner event? Need represent with \(W_C=45\) s for corner? But mutual exclusivity. Formal: label \(Y_i\) priority. For corner won use window 45 s? Hmm text says outcomes in 15s window following throw; corner extends to 45s for corners. It might mean corner outcome measured to 45s. Use \(T_C=45\) s. But shot/goal 15s. We'll state assumption.

Probability:
\[
p_i = \Pr(Y_i \in \{S,G\} \mid \mathbf{x}_i)
\]
XGBoost. Features \(\mathbf{x}_i\in\mathbb{R}^{10}\). Model:
\[
\hat p_i = \sigma\left(\sum_{m=1}^{1000} f_m(\mathbf{x}_i)\right)
\]
with trees depth<=4, learning rate 0.015. But XGBoost objective binomial; output logistic. Tree ensemble additive. \(\sigma(z)=1/(1+e^{-z})\). Units dimensionless.

AUC:
\[
\mathrm{AUC}=\Pr_{\substack{i:Y_i=1\\j:Y_j=0}}(\hat p_i>\hat p_j)
\]
dimensionless. Precision \(P=TP/(TP+FP)\), recall \(R=TP/(TP+FN)\), \(F_1=2PR/(P+R)\). Breakdown when TP+FP=0 etc. Brier:
\[
BS = \frac{1}{N}\sum_i(\hat p_i-y_i)^2
\]
dimensionless; log loss:
\[
LL=-\frac{1}{N}\sum_i[y_i\log \hat p_i+(1-y_i)\log(1-\hat p_i)]
\]
nats per sequence (if natural log). PR-AUC. Need mention.

SHAP additive:
\[
\hat p_i = \phi_0 + \sum_{j=1}^{10}\phi_{ij}
\]
with \(\phi_{ij}\) in log-odds or probability contributions depending explainer; mean absolute SHAP. Units: log-odds or probability points. Source ranks distance to penalty spot 0.5, pass length 0.39 etc. Need state "mean |SHAP|" dimensionless but interpret with model output scale. Breakdown: correlated features split attribution; missing 360 obscures density; SHAP not causal.

GRU: standard equations:
\[
z_t=\sigma(W_z e_t+U_z h_{t-1}+b_z),\quad
r_t=\sigma(W_r e_t+U_r h_{t-1}+b_r),
\]
\[
\tilde h_t=\tanh(W_h e_t+U_h(r_t\odot h_{t-1})+b_h),\quad
h_t=(1-z_t)\odot h_{t-1}+z_t\odot \tilde h_t
\]
with \(e_t\) embedding of event type/play pattern plus scaled numeric features. Attention:
\[
\alpha_t=\frac{\exp(a^\top h_t)}{\sum_{k=1}^{T}\exp(a^\top h_k)},\quad c=\sum_t \alpha_t h_t
\]
Outputs:
\[
\hat p^{\text{shot}}_i=\sigma(w_S^\top c+b_S),\quad \hat p^{\text{goal}}_i=\sigma(w_G^\top c+b_G).
\]
Joint BCE:
\[
\mathcal{L}=-\frac{1}{N}\sum_i\sum_{k\in\{S,G\}}\left[y_{ik}\log\hat p_{ik}+(1-y_{ik})\log(1-\hat p_{ik})\right]
\]
nats. Horizon \(T\le256\) events. Breakdown: long horizon, padding/masking, class imbalance, single-class batches. Need mention attention not causal.

Counterfactual perturbation:
\[
\Delta_j(r)=\mathbb{E}_{i}\left[\frac{\hat p(\mathbf{x}_i+r\mathbf{e}_j)-\hat p(\mathbf{x}_i)}{\hat p(\mathbf{x}_i)}\right]
\]
relative risk, dimensionless; \(r=\pm1\) SD or meter depending feature. LOESS smoothing. Need state out-of-distribution when r large; clipping quantile. Need units: if feature in m, r in m; if SD, SD in feature units. Source says altering standard deviation by 1 or -1 around original value [PAGE 18]. For throw origin distance, 5 m deeper reduces 25-30% [PAGE 22]. We can formalize:
\[
p(\text{shot}\mid d+5\,\mathrm{m}) \approx (0.70\text{ to }0.75)\,p(\text{shot}\mid d)
\]
if claim holds. But source says "roughly a 25–30 %". This is not betting. Good.

Need tactical equations? Maybe density threshold:
\[
\Delta p(n_{\text{def}}\ge 7 \mid \text{landing zone}) < 1\%
\]
but rebound persistence increases 9-11%. Need state.

Need "singularity/breakdown regimes": 
- AUC undefined if only one class; log loss infinite if \(\hat p=0\) and y=1; precision undefined if no predicted positives; PR-AUC baseline prevalence; Brier not proper? It is proper.
- SHAP with correlated features; 360 occlusions; missing data kNN imputation.
- GRU with imbalanced rare goals and 256 event horizon; calibration.
- Counterfactual OOD; perturbation not causal; confounding by throw origin distance/ball speed.
- weather absent.

Need "cross-layer veto adjudication" formal. Could define veto indicator:
\[
V_{\text{phys}} = \mathbf{1}\{ \ell_i \le 20\,\mathrm{m} \lor \mathbf{x}^{\text{end}}_i \notin \mathcal{P}_{\text{opp}}\}
\]
if not long throw. Biomechanical:
\[
V_{\text{bio}} = \mathbf{1}\{ v_{\text{release}} \notin [v_{\min}, v_{\max}] \lor \theta_{\text{release}} \text{ incompatible with landing} \}
\]
but source doesn't give exact. Better qualitative. Weather:
\[
V_{\text{weather}} = \mathbf{1}\{ |\Delta v_{\text{wind}}| > \epsilon_v \lor |\Delta \mathbf{x}_{\text{land}}| > \epsilon_x \}
\]
or if no weather variable, \(V_{\text{weather}}\) is unidentifiable; cannot claim proof. Need "veto proof" maybe proof that weather layer can veto but not proven from source. We can say "The only rigorous veto proof in-source is the definitional filter: if length <=20m or end outside box, not a long throw. Weather is an external veto, not supported by source; any tactical inference is conditional." Need cite.

Need "recursive theory of mind" maybe use notation:
At time \(t\), defender belief \(b_t^D\) about attacker's target distribution, attacker belief \(b_t^A\) about defender's density. The trap: attacker's optimal throw maximizes \(P(\text{shot}\mid b^D)\). Habit regression: under stress, defender chooses high-density/low-spacing action from prior, not optimal. Counter-trap: attacker anticipates density and aims central/flick-on. Clock: 2-6s. Need mention "crisis habit regression vs counter-trap vs clock." Formal maybe:
\[
a_D^\star = \arg\max_{a_D} \mathbb{E}_{b^D}[U_D(a_D,a_A)]
\]
but under time pressure \(t<6s\), policy \(\pi_D(a|s)\approx \pi_{\text{habit}}(a|s)\). Counter-trap attacker chooses \(a_A\) to maximize \(P(\text{shot}\mid \pi_D^{\text{habit}})\). Clock sets \(t_c=2-6s\) recovery. That fits.

Need ensure not too long but >=1000 words. We can produce maybe 2500-3500 words. Need exact XML sections. We can include quotes. Need not include anything outside XML? Probably just XML. Need no betting lines. Avoid "odds", "spread", "moneyline". "Odds" can appear in "success odds" quote? Source has "Taller targets slightly raise success odds" [PAGE 10]. But invariant says never mention odds. Better avoid quoting that exact phrase or quote with ellipsis? Avoid word "odds" entirely. Also avoid "betting". We can quote other phrases. Need not mention "odds" even in quote. Use quotes without "odds". Ensure no "spread" except "spatial"? "spread wider" is okay? Invariant says zero betting lines: never mention spreads, totals, moneylines, or odds. The word "spread" could be interpreted as betting spread. Avoid "spread" entirely. Use "wider" or "dispersion". Avoid "totals" maybe if mathematical total? Avoid. Avoid "odds" completely. Avoid "moneyline". Good.

Need exact quotes with [PAGE N]. Let's pick:
- [PAGE 1]: "Long throw-ins have re-emerged as a deliberate attacking weapon in elite football." and "throw-ins remain the most frequent restart in football (approx. 40 per match)".
- [PAGE 2]: "We define long throw-ins as a throw-in satisfying the following criteria:" criteria. "No outcome: 3,061 (77.51%)"; "Shot: 581 (14.68%)"; "Goal: 72 (1.82%)". Maybe exact.
- [PAGE 3]: "Long-throw entry points cluster heavily within the half of the box where the throw originates from, particularly the zones between the six-yard line and penalty spot - indicating the physical limitations of throwers."
- [PAGE 8]: "The objective was to estimate the conditional likelihood that a long throw landing inside the opposition penalty area would result in a shot within the following 7 seconds" exact.
- [PAGE 9]: "the baseline model achieved an AUC-ROC of 0.650" and Table 4.2 0.657; "Precision = 0.23, Recall = 0.76, and F1 = 035" (typo). We can quote.
- [PAGE 10]: "Distance to penalty spot" "0.5" "dominant factor"; "Opponents in box" "0.06" "limited marginal effect".
- [PAGE 13]: "Shot|35.1|0.33|1.42|0.53|0.39"; "Goal|8|0.0018|0.0097|0.9|0.028"; "deceptively high ROC-AUC owing to extreme class imbalance". Good.
- [PAGE 15]: "‘clearance’ emerged as the single strongest positive driver of danger for goals" and "Incomplete or poorly directed clearances frequently recycled possession into central danger zones, prolonging instability rather than ending it."
- [PAGE 22]: "Forcing the thrower just 5 m deeper reduces shot likelihood by roughly 25–30 %"; "setups with seven or more defenders inside the area concede more shots than those using five or six"; "a non-directional clearance increases modelled goal probability by +0.03-0.05".
- [PAGE 23]: "starting 0.5-1 m deeper"; "Up to around 20m/ s, faster throws are statistically more threatening."; "receiver height exerts a substantial effect ... (|SHAP| ~ 0.30)".
- [PAGE 27]: five coaching guidance? Need exact: "Anchor centrally with five to six defenders, prioritising spacing over numbers." "Maintain defensive compactness for at least six seconds post-contact." "Clear directionally toward the sidelines near the halfway line not vertically or laterally." Great.

Need page numbers in source maybe [PAGE 22] but source page marker **22** before paragraph. Good.

Need "source operators and equations" cite "source pages" exact [PAGE N] and verbatim quote. We can include quotes in that section. Need not overquote all.

Need "retrocausal genealogy" might have citations. "Retrocausal" means lineage and traps. Need include multi-week traps: "clearance positive driver" confounding. Need mention "GRU sequence horizon 256 events" and "future iterations should truncate sequences at natural resolution points" [PAGE 25/26]. Need exact quote "the current implementation remains exploratory" [PAGE 25]. Good.

Need "RLVR counterfactual vetoes" 3 scenarios. Need define verifiable rewards: Each scenario has a measurable target and veto condition. Predictions with numbers. Need not use betting. Use "shot probability", "goal probability", "rebound persistence". Verifiable via held-out sequences and statistical tests. Predictions:
1. Origin-depth counterfactual: Hold landing zone, thrower, receiver, defensive density; shift origin +5 m away from goal. Prediction: relative shot probability ratio 0.70–0.75. Veto if 95% CI includes 1 or ratio >0.9.
2. Density counterfactual: Match throws landing in central 6-10m corridor; compare 5-6 vs ≥7 defenders. Prediction: shot probability difference <1 percentage point and rebound persistence +9–11% for ≥7. Veto if ≥7 reduces shot probability by >5% or rebound persistence not increased.
3. Clearance-direction counterfactual: After first clearance, classify central 10m cone vs touchline/halfway zone. Prediction: central non-directional clearance raises goal probability by +0.03–0.05 absolute; touchline lower. Veto if central clearances do not increase goal probability or if sign reverses after controlling for shot quality/possession.
Could also include GRU temporal window: 2-6s compression. But only 3. Maybe scenario 3 includes temporal. Need "RLVR" maybe reward function:
\[
R = \mathbf{1}\{\text{effect direction matches prediction}\} \times \mathbf{1}\{\text{CI excludes null}\}
\]
or continuous:
\[
R = \operatorname{sign}(\hat \theta - \theta_0)\cdot \min(|\hat\theta|/\delta,1)
\]
Need not be too fake? Invariant says no toy equations. But RLVR counterfactual vetoes require verifiable reward. Can state formal verification criterion without fake ratio. Maybe define:
\[
V = \mathbf{1}\{ \hat\Delta \in \mathcal{D}_{\text{pred}} \land \mathrm{CI}_{95\%}(\Delta)\cap\{0\}=\varnothing \}
\]
where \(\Delta\) is pre-specified effect. That's legitimate.

Need "cross-layer veto adjudication" proof: We can define veto layers and adjudication rules:
1. Physical definition veto: if not satisfying L criteria, cannot be used.
2. Biomechanical thrower constraint veto: if thrower cannot deliver >20m into box or if ball speed >22 m/s reduces control; source says extreme speeds self-neutralize [PAGE 23].
3. Weather veto: absent variable; cannot verify; any claim about all conditions is not proven. Use external data required. Need "proof" maybe "A layer veto is valid only if it changes the sign or null of the effect in a stratified test." If weather stratum shows \(\Delta_{\text{shot}}\) sign reversal, veto. Since source has no weather, the default is "unadjudicated/insufficient evidence", not "no effect." Need cite source limitations: "360° frames often centre on the thrower, leaving parts of the penalty area outside the visible field" [PAGE 25]. Weather not mentioned anywhere. Need say no in-source proof.

Need "THINK_TRACE" >=400 words. We can write ~650 words. Need include multi-hop derivation & gray-zone audit. Let's draft carefully.

Total word count >1000. Need XML tags exactly. Let's produce.

Need ensure sections exact:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>

Need maybe include "SOURCE_OPERATORS_AND_EQUATIONS" with formal LaTeX. Need "units". Need page citations. Need exact verbatim quotes. Use quote marks.

Need no "odds". Avoid "spread". Avoid "total" maybe "totals" not used. Avoid "moneyline". "Total" maybe "total on-ball events" from source? Could avoid. Use "number of on-ball events". Avoid "spread" in "spatial" okay? "spatial" contains "spat" not "spread". Good.

Need be mindful "betting line" no. "shot probability" okay.

Need maybe mention "prevalence" not "odds".

Let's write. Need ensure exact quotes not too long. Use [PAGE 2] etc. "PAGES: 25" but cite source markers. Fine.

Need maybe note "The source has internal inconsistencies" in THINK_TRACE. Good.

Let's compose with details.
</NATIVE_REASONING>

<THINK_TRACE>
The source’s inference chain is not simply “long throws are dangerous.” It is a layered decomposition: first, a definitional filter; second, a descriptive outcome distribution; third, a static risk model; fourth, a sequential risk model; fifth, counterfactual perturbation; and sixth, tactical synthesis. The first multi-hop step is definitional. A long throw is not any throw into the box; it is a throw with recorded pass length exceeding 20 m whose end location lies inside the opposition penalty area [PAGE 2]. This matters because the subsequent prevalence denominators, the XGBoost training set, and the GRU sequence population all depend on that filter. The second hop is the outcome label. The paper reports 3,959 qualifying long throws and gives mutually exclusive labels: “No outcome: 3,061 (77.51%)”; “Shot: 581 (14.68%)”; “Corner won: 245 (6.19%)”; “Goal: 72 (1.82%)” [PAGE 2]. That implies a shot-or-goal rate near one in six in the 15 s window, but the XGBoost target is explicitly “a shot within the following 7 seconds” [PAGE 8], while the GRU table reports a shot prevalence of “35.1” percent [PAGE 13]. This is a gray-zone inconsistency: the 14.68% figure is a 15 s event-level shot rate; the 35.1% figure is a sequence-level prevalence over a much longer 256-event horizon, so the two numbers are not directly comparable. A rigorous audit must not collapse them.

The third hop is model purpose. XGBoost is used to estimate a static conditional probability from ten interpretable predictors, with “1,000 boosting rounds, a learning rate of 0.015, and a maximum tree depth of 4” [PAGE 9]. The reported AUC-ROC is “0.650” in prose [PAGE 9] but “0.657” in Table 4.2 [PAGE 9], another gray-zone inconsistency. Precision is “0.23,” recall “0.76,” and F1 is printed as “035” [PAGE 9]. The low precision is not a failure of the football argument; it is a consequence of rare-event ranking. The fourth hop is feature attribution. The paper ranks “Distance to penalty spot” at “0.5” mean |SHAP| as “the dominant factor,” and “Opponents in box” at “0.06” with “limited marginal effect” [PAGE 10]. That is the empirical basis for the tactical claim that “structure and spacing matter more than density” [PAGE 10]. But SHAP is associative, not causal: correlated geometry, throw length, ball speed, and landing zone can split or smuggle attribution. The counterfactual section is meant to repair this, but its perturbations are model-internal, not randomized interventions.

The fifth hop is temporal. The GRU encodes ordered events up to 256 events and produces two heads, shot and goal [PAGE 13]. Its shot head has ROC-AUC “0.53” and PR-AUC “0.39”; its goal head has ROC-AUC “0.9” but the authors warn it is “deceptively high ROC-AUC owing to extreme class imbalance” [PAGE 13]. This is a classic breakdown regime: a high AUC can coexist with near-useless absolute calibration when positives are rare. The paper itself notes the shot head is mildly over-confident in lower deciles and the goal head under-confident [PAGE 14]. The sixth hop is event-masking. “Clearance” is the “single strongest positive driver of danger for goals,” and the authors explain that “Incomplete or poorly directed clearances frequently recycled possession into central danger zones, prolonging instability rather than ending it” [PAGE 15]. But this is exactly where retrocausal confounding is most dangerous: a clearance can be both a defensive response and a marker of a sequence that was already dangerous. The paper hedges, saying these results “should be treated with caution” [PAGE 23]. A good audit therefore treats the clearance claim as a plausible but unconfirmed mechanism, not a proven causal law.

The seventh hop is tactical synthesis. The synthesis claims that “Forcing the thrower just 5 m deeper reduces shot likelihood by roughly 25–30 %” [PAGE 22]; that “setups with seven or more defenders inside the area concede more shots than those using five or six” [PAGE 22]; and that “a non-directional clearance increases modelled goal probability by +0.03-0.05” [PAGE 22]. These are large, actionable claims derived from a model with modest discrimination and a sequence model with weak shot ranking. The gray-zone verdict is not that the paper is worthless; it is that the strongest defensible conclusions are conditional: geometry dominates, central spacing matters, the 2–6 s post-contact window is a plausible instability phase, and density beyond six defenders has diminishing or negative returns. The paper’s own limitations support this: 360° frames “often centre on the thrower, leaving parts of the penalty area outside the visible field” [PAGE 25], and the GRU horizon “frequently exceeds the meaningful lifespan of a long-throw phase” [PAGE 25]. Any deployment should therefore be pre-registered, stratified by landing zone and throw origin, and calibrated before being treated as a deterministic coaching rule.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source’s core operator is a set-membership and threshold filter. Let \(\ell_i\) be recorded pass length in metres and \(\mathbf{x}^{\text{end}}_i\in\mathbb{R}^2\) be the throw’s end location in pitch coordinates. The long-throw indicator is
\[
L_i=\mathbf{1}\{\ell_i>20\ \mathrm{m}\ \land\ \mathbf{x}^{\text{end}}_i\in\mathcal{P}_{\mathrm{opp}}\},
\]
where \(\mathcal{P}_{\mathrm{opp}}\subset\mathbb{R}^2\) is the opposition penalty area. This is exactly the paper’s definition: “Has a recorded pass length exceeding 20m” and “Whose end location lies inside the opposition penalty area” [PAGE 2]. The outcome label is ordered by priority:
\[
Y_i=
\begin{cases}
G, & \text{goal within the observation window},\\
S, & \text{shot within the window and no goal},\\
C, & \text{corner won within the window and no }S,G,\\
N, & \text{otherwise}.
\end{cases}
\]
The source states that outcomes are measured in a 15 s window, with a 45 s extension for corners, and that labels are “mutually exclusive and prioritised” as goal, shot, corner won, no outcome [PAGE 2]. The empirical distribution is \(N=3959\), with \(N_N=3061\), \(N_S=581\), \(N_C=245\), \(N_G=72\) [PAGE 2]. These are counts; probabilities are dimensionless proportions such as \(581/3959=0.1468\).

The XGBoost operator is a binary probabilistic classifier for shot risk. With feature vector \(\mathbf{x}_i\in\mathbb{R}^{10}\), the model is an additive tree ensemble:
\[
\hat p_i=\Pr(Y_i\in\{S,G\}\mid \mathbf{x}_i)
=\sigma\!\left(\sum_{m=1}^{1000} f_m(\mathbf{x}_i)\right),
\qquad
\sigma(z)=\frac{1}{1+e^{-z}},
\]
where each \(f_m\) is a shallow regression tree of maximum depth 4, the learning rate is 0.015, and training uses 1,000 boosting rounds [PAGE 9]. The predicted probability is dimensionless. The target is “a shot within the following 7 seconds” [PAGE 8]. The model’s ranking metric is
\[
\mathrm{AUC\text{-}ROC}
=\Pr_{\substack{i:Y_i=1\\j:Y_j=0}}
(\hat p_i>\hat p_j),
\]
dimensionless, with the paper reporting “0.650” in prose and “0.657” in Table 4.2 [PAGE 9]. Precision, recall, and \(F_1\) are
\[
P=\frac{TP}{TP+FP},\qquad
R=\frac{TP}{TP+FN},\qquad
F_1=\frac{2PR}{P+R},
\]
with reported \(P=0.23\), \(R=0.76\), and printed \(F_1=035\) [PAGE 9]. Breakdown regimes: \(P\) is undefined if \(TP+FP=0\); \(R\) is undefined if \(TP+FN=0\); AUC is undefined if only one class is present; and \(F_1\) can be numerically unstable when one denominator is near zero.

Feature attribution is additive:
\[
\hat p_i=\phi_0+\sum_{j=1}^{10}\phi_{ij},
\]
where \(\phi_0\) is the base value and \(\phi_{ij}\) is the SHAP contribution of feature \(j\) for event \(i\), expressed on the model output scale. The paper reports mean \(|\mathrm{SHAP}|\) values such as “Distance to penalty spot” \(0.5\), “Pass length” \(0.39\), “Receiver height” \(0.3\), and “Opponents in box” \(0.06\) [PAGE 10]. These are dimensionless model-scale contributions, not metres or seconds. Breakdown: SHAP attributions can be split among correlated features; they are not causal effects; and missing 360° visibility can bias density features.

The GRU operator is a temporal map from an event sequence \(\mathbf{e}_{1:T}\) to two Bernoulli probabilities. With embeddings \(\mathbf{e}_t\), hidden state \(\mathbf{h}_t\), update gate \(\mathbf{z}_t\), reset gate \(\mathbf{r}_t\), and candidate state \(\tilde{\mathbf{h}}_t\),
\[
\mathbf{z}_t=\sigma(W_z\mathbf{e}_t+U_z\mathbf{h}_{t-1}+\mathbf{b}_z),\quad
\mathbf{r}_t=\sigma(W_r\mathbf{e}_t+U_r\mathbf{h}_{t-1}+\mathbf{b}_r),
\]
\[
\tilde{\mathbf{h}}_t=\tanh(W_h\mathbf{e}_t+U_h(\mathbf{r}_t\odot\mathbf{h}_{t-1})+\mathbf{b}_h),\quad
\mathbf{h}_t=(1-\mathbf{z}_t)\odot\mathbf{h}_{t-1}+\mathbf{z}_t\odot\tilde{\mathbf{h}}_t.
\]
Attention pools the sequence:
\[
\alpha_t=\frac{\exp(\mathbf{a}^{\top}\mathbf{h}_t)}{\sum_{k=1}^{T}\exp(\mathbf{a}^{\top}\mathbf{h}_k)},\qquad
\mathbf{c}=\sum_{t=1}^{T}\alpha_t\mathbf{h}_t,
\]
\[
\hat p_i^{S}=\sigma(\mathbf{w}_S^{\top}\mathbf{c}+b_S),\qquad
\hat p_i^{G}=\sigma(\mathbf{w}_G^{\top}\mathbf{c}+b_G).
\]
The joint binary cross-entropy is
\[
\mathcal{L}
=-\frac{1}{N}\sum_{i=1}^{N}\sum_{k\in\{S,G\}}
\left[y_{ik}\log\hat p_{ik}+(1-y_{ik})\log(1-\hat p_{ik})\right],
\]
in nats per sequence when natural logarithms are used. The horizon is \(T\le 256\) events [PAGE 13]. The reported shot head has prevalence “35.1” percent, Brier score “0.33,” log loss “1.42,” ROC-AUC “0.53,” and PR-AUC “0.39”; the goal head has prevalence “8” percent, Brier score “0.0018,” log loss “0.0097,” ROC-AUC “0.9,” and PR-AUC “0.028” [PAGE 13]. Breakdown regimes: log loss diverges if \(\hat p_{ik}=0\) and \(y_{ik}=1\), or \(\hat p_{ik}=1\) and \(y_{ik}=0\); AUC is undefined for single-class batches; PR-AUC is highly sensitive to prevalence; and the 256-event horizon can blur the true defensive resolution point.

The counterfactual operator perturbs one feature at a time. For feature \(j\), perturbation \(r\) with units of the feature, and baseline \(\hat p_i\),
\[
\Delta_j(r)=\mathbb{E}_i\!\left[
\frac{\hat p(\mathbf{x}_i+r\mathbf{e}_j)-\hat p(\mathbf{x}_i)}
{\hat p(\mathbf{x}_i)}
\right],
\]
which is dimensionless relative risk. The paper says perturbations were applied “by altering the standard deviation by 1 or -1 around its original value” and then smoothed with “a moving-average or LOESS filter” [PAGE 18–19]. For throw-origin distance, the tactical synthesis states the effect in metres: “Forcing the thrower just 5 m deeper reduces shot likelihood by roughly 25–30 %” [PAGE 22]. Breakdown: large perturbations leave the training distribution, correlated features are held fixed unrealistically, and the output is a model prediction rather than a randomized causal effect.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is clear from the paper’s own framing. Long throws are treated as a re-emerging set-piece weapon: “Long throw-ins have re-emerged as a deliberate attacking weapon in elite football” [PAGE 1]. The authors connect this to a decade-high count of goals and to throw-ins being “the most frequent restart in football (approx. 40 per match)” [PAGE 1]. The prior literature is attacking-focused: Stone, Smith and Barry analysed “all 16,154 Premier League throw-ins in 2018/19” and found backward or lateral throws associated with higher first-contact success and possession retention; Casal et al. examined “2,658 LaLiga throw-ins” and identified duration, pressure, distance, and zone as key indicators [PAGE 1]. The retrocausal move is that the present paper reads defensive risk backward from outcomes: shots and goals within a window are used to infer which pre-throw geometries and post-throw action chains were dangerous. That is legitimate as predictive modelling, but it is not the same as a prospective causal genealogy.

The methodological lineage runs from interpretable tree ensembles to sequential recurrent models. XGBoost is presented as a way to learn “layered conditional rules” and to quantify feature contributions through counterfactual simulations [PAGE 7]. SHAP then supplies the “global” attribution layer [PAGE 10]. The GRU is presented as a “paradigm shift: viewing football as a chain of probabilistic events rather than non-deterministic chaos” [PAGE 12]. The counterfactual perturbation framework is the bridge from association to intervention, but the paper admits that the GRU counterfactual was only “proposed” and not fully executed because “the counterfactual analysis was only pursued for the XGBoost” [PAGE 21].

The multi-week traps are several. First, denominator drift: the 15 s event-level shot rate of 14.68% [PAGE 2] is not the GRU sequence-level shot prevalence of 35.1% [PAGE 13], because the GRU horizon is 256 events. A naive analyst could quote the larger number as if it were the same prevalence. Second, rare-event calibration: the goal head’s ROC-AUC of 0.9 is “deceptively high” under extreme imbalance [PAGE 13], so a multi-week workflow that optimizes AUC alone can produce a model that ranks rare goals but does not output usable probabilities. Third, leakage and splitting: the paper says sequences were divided at the sequence level so that “no individual throw sequence appeared across splits” [PAGE 13]; any reimplementation that splits events instead of sequences will leak. Fourth, 360° visibility bias: “360° frames often centre on the thrower, leaving parts of the penalty area outside the visible field” [PAGE 25], so density and marking features are systematically missing in exactly the area that matters. Fifth, horizon bias: the 256-event window “frequently exceeds the meaningful lifespan of a long-throw phase” [PAGE 25], so later clearances and goal-kicks are treated as continuations of the same attacking possession. Sixth, reverse causation around clearances: “clearance” is the strongest positive driver of goal danger [PAGE 15], but a clearance is often a defensive response to danger already present; the paper itself says the result “should be treated with caution” [PAGE 23]. Seventh, tactical confounding: ball speed and throw length are correlated with throw origin, so the claim that faster throws are more dangerous up to about 20 m/s [PAGE 23] may partly encode origin depth. These traps are not incidental; they are the main reasons a multi-week research program must pre-register strata, use sequence-level splits, calibrate probabilities, and test counterfactuals out of sample.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive game has three layers. The defender’s habit prior is “pack the box, pick tall centre-backs, let the keeper command the area.” The attacker’s counter-trap is to load the central corridor and aim for flick-ons, second balls, and rebounds, precisely because a packed box narrows reaction channels and increases ricochet frequency. The clock is the 2–6 s post-contact instability window. Formally, let \(a_D\) be the defensive action vector (density, spacing, keeper depth, clearance direction) and \(a_A\) be the attacking delivery and loading pattern. The defender wants
\[
a_D^\star=\arg\min_{a_D}\mathbb{E}_{b_D}\!\left[\Pr(S\ \text{or}\ G\mid a_D,a_A)\right],
\]
but under time pressure the defender’s policy collapses toward a habit policy \(\pi_D^{\mathrm{habit}}\). The attacker anticipates that regression and chooses
\[
a_A^\star=\arg\max_{a_A}\mathbb{E}_{b_A}\!\left[\Pr(S\ \text{or}\ G\mid \pi_D^{\mathrm{habit}},a_A)\right].
\]
This is the counter-trap: the attacker does not need to beat the defender’s best response; the attacker needs only to beat the defender’s stressed default. The paper’s evidence fits this structure. Packing the box is an illusion of safety: “setups with seven or more defenders inside the area concede more shots than those using five or six” [PAGE 22], and “opponents in box” has the lowest ranked mean |SHAP| at “0.06” [PAGE 10]. Tall defenders are a habit prior, but the paper finds that “once central spacing and timing are controlled for, defender height no longer correlates with lower concession risk” [PAGE 23]. Aggressive goalkeeper advancement is another habit, but the temporal model favors “starting 0.5-1 m deeper” [PAGE 23]. The clock layer is the 2–6 s instability window: the paper recommends “Maintain defensive compactness for at least six seconds post-contact” [PAGE 27] and “Clear directionally toward the sidelines near the halfway line not vertically or laterally” [PAGE 27]. The recursive theory-of-mind lesson is that the defender must model the attacker’s model of the defender’s panic. The counter-counter is not more bodies; it is pre-scripted second-ball roles, central spacing of five to six defenders, and a keeper who buys reaction time rather than charging. If the defender instead “solves” the crisis by adding a seventh body, the attacker’s central flick-on and rebound chain becomes more valuable, not less. If the defender overcorrects by dropping everyone deep, the attacker can recycle centrally. The stable policy is a clock-aware compact spine: hold central spacing through the 2–6 s window, assign one player to track the breakthrough lane rather than contest the first header, and clear to a predefined touchline zone. That is the paper’s synthesis in game-theoretic form.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A cross-layer veto is valid only if a lower-level constraint changes the sign, null, or identifiability of the upper-level tactical claim. The first layer is physical-definitional. If \(\ell_i\le 20\ \mathrm{m}\) or \(\mathbf{x}^{\text{end}}_i\notin\mathcal{P}_{\mathrm{opp}}\), the event is not a long throw under the source definition [PAGE 2], so it cannot be used to support a long-throw tactical rule. That is a hard veto. The second layer is biomechanical. The source notes that entry points cluster between the six-yard line and penalty spot, “indicating the physical limitations of throwers” [PAGE 3]. A thrower who cannot deliver a 20 m+ trajectory into the box, or whose release angle and ball speed cannot produce a flat, medium-velocity delivery, is outside the operational population. The paper also finds that “Up to around 20m/ s, faster throws are statistically more threatening,” but beyond that threshold the danger curve “flattens or even dips slightly” [PAGE 23]. This is a biomechanical veto against overreacting to extreme-speed throws: if ball speed is beyond the controlled-contact regime, the attacking contact probability can fall through miscontrol, so a defensive rule optimized for extreme speed may be misallocated.

The third layer is weather. The source contains no weather variable, no rain/wind stratum, and no cross-validation by meteorological condition. Therefore the weather layer cannot be “proved” from the source. The correct adjudication is not “weather has no effect”; it is “weather effects are unidentifiable in this dataset.” If an external weather layer shows a sign reversal—for example, if wet or windy conditions increase misdirected clearances and central recycles—then the directional-clearance recommendation [PAGE 27] is vetoed for that stratum until re-estimated. A formal veto rule can be stated as
\[
V_{\mathrm{weather}}=\mathbf{1}\left\{
\left|\Delta \hat p_{\mathrm{shot}\mid \mathrm{weather}}\right|>\epsilon_p
\ \lor\
\operatorname{sign}\left(\Delta_{\mathrm{clearance}}\right)
\ne
\operatorname{sign}\left(\Delta_{\mathrm{clearance}}\mid \mathrm{weather}\right)
\right\},
\]
where \(\epsilon_p\) is a pre-registered probability tolerance. The source does not supply \(\epsilon_p\) or the weather-conditioned estimates, so the only rigorous conclusion is conditional: the tactical claims hold for the observed match population, not for all weather. The fourth layer is observational. Missing 360° coverage “obscures marking assignments, and limits the accurate quantification of true defensive density” [PAGE 25]. If density is mismeasured, then the claim that “structure and spacing matter more than density” [PAGE 10] is not vetoed outright, but its density coefficient is attenuated and must be re-estimated with complete tracking. The adjudication order is therefore: definitional veto first, biomechanical population veto second, weather-stratum veto third, observational-measurement veto fourth. Only the first is fully proved in-source; the others are boundary conditions that require external data before being treated as universal laws.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Each RLVR test below defines a verifiable reward: a pre-registered effect direction, a pre-registered magnitude range, and a confidence interval that excludes the null. Let \(\Delta\) be the estimand, \(\mathcal{D}_{\mathrm{pred}}\) the predicted direction and range, and
\[
R=\mathbf{1}\{\hat\Delta\in\mathcal{D}_{\mathrm{pred}}\}\cdot
\mathbf{1}\{\mathrm{CI}_{95\%}(\Delta)\cap\{0\}=\varnothing\}.
\]
The reward is verifiable because the outcome is computed from held-out event and 360/tracking data, with sequence-level splits and match-clustered bootstrap intervals.

Scenario 1: origin-depth counterfactual. Hold landing zone, thrower identity, receiver identity, defensive density, and match state fixed; shift the throw origin 5 m farther from goal. The source predicts “Forcing the thrower just 5 m deeper reduces shot likelihood by roughly 25–30 %” [PAGE 22]. Verification: estimate the relative shot probability ratio
\[
\rho=\frac{\hat p(\text{shot}\mid d+5\ \mathrm{m})}{\hat p(\text{shot}\mid d)}.
\]
Prediction: \(\rho\in[0.70,0.75]\). Veto: if the 95% interval for \(\rho\) includes 1, or if \(\rho>0.90\), the geometry-dominance claim fails for that stratum. A second prediction is monotonicity: deeper origins should not increase shot probability after conditioning on landing zone.

Scenario 2: defensive-density counterfactual. Match throws on landing zone, central corridor, throw origin, and receiver height; compare five-to-six defenders in the box against seven or more. The source claims “setups with seven or more defenders inside the area concede more shots than those using five or six” [PAGE 22], and that adding a seventh defender changes predicted risk by “less than 1 %” while increasing “simulated rebound persistence by 9-11%” [PAGE 22]. Verification: compute the absolute shot-probability difference \(\Delta p_{\mathrm{shot}}\) and the rebound-persistence difference \(\Delta r\). Prediction: \(|\Delta p_{\mathrm{shot}}|<0.01\) and \(\Delta r\in[0.09,0.11]\) favoring the seven-plus condition as worse. Veto: if seven-plus defenders reduce shot probability by more than 5 percentage points in the matched sample, or if rebound persistence does not increase, the “structure over numbers” claim is vetoed.

Scenario 3: clearance-direction and clock counterfactual. Classify post-first-contact clearances by destination: central 10 m cone versus touchline/halfway zone. The source states “a non-directional clearance increases modelled goal probability by +0.03-0.05” [PAGE 22] and recommends clearing “toward the sidelines near the halfway line not vertically or laterally” [PAGE 27]. Verification: estimate the absolute goal-probability difference \(\Delta p_{\mathrm{goal}}\) from central versus directional clearance, controlling for the pre-clearance danger state and the 2–6 s window. Prediction: \(\Delta p_{\mathrm{goal}}\in[0.03,0.05]\) for central clearances, with the directional-clearance condition lower. Veto: if central clearances do not increase goal probability, or if the sign reverses after conditioning on pre-clearance shot probability, the directional-clearance rule is vetoed. A temporal sub-prediction is that compactness maintained through the 2–6 s window should lower subsequent shot probability more than compactness maintained only through the first contact; if not, the “instability window” claim fails.
</RLVR_COUNTERFACTUAL_VETOES>