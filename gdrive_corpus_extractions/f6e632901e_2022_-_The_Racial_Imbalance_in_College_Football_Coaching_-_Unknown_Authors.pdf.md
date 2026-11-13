---
source: "2022 - The Racial Imbalance in College Football Coaching - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/Carnegie Mellon Sports Analytics Conference/2022"
pages: 10
model: deepseek/deepseek-v4.1-flash-1017
words: 6784
---

<NATIVE_REASONING>
We need answer with exact XML sections, >=1000 words, deep. Need analyze provided paper. User asks "DRIVE SOURCE" but no explicit question. Likely wants full frontier reasoning foundry treatment of this source. Need produce sections exactly. Must avoid betting lines. Need cite [PAGE N] and verbatim quotes. Need perhaps discuss methodological audit, gray zones. Need formal equations. We need not mention betting. Need "RLVR counterfactual vetoes" 3 verifiable scenarios + predictions. Need "cross-layer veto" physical/biomechanical/weather veto proof? Paper is sociological/statistical; cross-layer veto maybe apply to coaching hiring. Need adjudicate if physical/biomechanical/weather factors veto? Need be creative: External physical layers (travel, weather, biomechanics) not explanatory for racial imbalance; not relevant. Need maybe "veto proof" says no physical/biomechanical/weather variable in model; can't veto social/institutional inference. Need maybe note source doesn't include weather. Need formal equations and units.

Need ensure >=1000 word depth across sections. THINK_TRACE >=400 words. Need cite pages exact markers and verbatim quotes. Need formal LaTeX units, assumptions, singularity/breakdown regimes. Need source operators and equations. We can formulate regression, modularity, centrality, Elastic Net, classification metrics, expected demographic distribution, tenure gap, connection ratios. Need cite exact quotes. Need distinguish paper's claims vs our derived formalization. Since source pages provided. Need use formal LaTeX. Need mention units: p-values dimensionless probabilities, R² dimensionless proportion variance, EPA points per play? EPA has units points per play? Expected points added typically points per play, yes. Success Rate proportion [0,1]. Tenure years. Centrality dimensionless or graph-specific. Connections count. Coefficient signs. Need singularity regimes: regression singular when rank deficient (race binary with intercept and collinearity, etc), R² undefined if zero variance, Louvain resolution limit, modularity undefined for disconnected/empty graph? Modularity defined but resolution limit; Elastic Net non-unique under collinear features; classification metrics degenerate with class imbalance; propensity/causal inference singular when no overlap. Need "exact singularity/breakdown regimes." Need precise.

Need be careful not to overstate causal claims. Paper says evidence compounded discrimination; but observational data. We need audit. Need mention "candidate pool expectation 37% Black and 51% White" derived from 92.7% former college players plus US population. Need formal equation. Need cite p2: "92.7% of FBS coaches since 2000 were former Division 1, 2, or 3 college football players." p2 "Black athletes make up 39% of athletes from all levels of college football." p2 expected 37%/51%. Need maybe derive: 0.927*0.39 + 0.073*? Black US ~13.4? = 0.3615 + 0.0098=0.3713. White: 0.927*(1-0.39? but White athlete proportion?) + .073*.? Actually White athletes maybe ~? But paper states 37/51. Need not derive exact. Need use.

Need answer likely in XML only. No extra prefatory. Need exact sections:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>

Need include quotes. Need include word count maybe >1000 total. THINK_TRACE >400. Let's draft robust.

Need maybe mention "Unknown Authors" but paper acknowledges Geoff Hutchinson. Not relevant.

Need discuss "Drive source" maybe from sports research paper. Could be expected to infer sports predictions? But invariants no betting. We can just analyze paper. Need maybe "DRIVE SOURCE" means source to use. We should not invent betting lines. Good.

Let's construct.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Start with source is observational, not experimental. Identify chain:
- Candidate pool demographics expected 37% Black, 51% White [PAGE 2].
- Actual: Black coaches slightly >10% of head coaches and OCs; 18% DCs [PAGE 2].
- Tenure shorter; three causes; first ruled out due larger HC gap [PAGE 3].
- Regression race -> net impact: p~0.3, R² 0.0093 for HC Net EPA; defensive coord to HC R² 0.013 [PAGE 5]. All seven no significance.
- Community detection: Louvain 1,431 coaches into 41 communities; four centralities; White 43% more connections; seven times more influential [PAGE 5? page 4 defines; page 5 result].
- Feature selection: Elastic Net six features; race negative; role negative; Connections significant [PAGE 7].
- Classification: 6 models; KNN best target-year 15.8%; SVM laplacian 82% eventual; future 12 predictions all White; performance-based top 12 includes three Black [PAGE 7-8].
- Discussion: 35 more Black HCs needed [PAGE 8]; conclusion gap higher than 2000, Black HCs 1.5 fewer years, White 43% more connected, Non-White hire 30% more Non-White coordinators, 20 head coaches smallest percentage Non-White coordinators are White; 19 most influential are White, only 4 above average [PAGE 9].

Gray zones:
- "Race accounts for less than 1% variance" does not prove no bias; low R² with binary predictor and noisy performance. Absence of significance ≠ equivalence. Need equivalence testing. p ~0.3 not evidence of no effect. Need audit.
- Regression only performance not hiring; community metrics correlate race, but network formation itself endogenous; homophily vs discrimination. Louvain communities can reflect past segregation and geography; centrality is outcome of hiring/network access.
- Elastic Net feature selection on 2000 coordinator-years with 61 events. Events per variable ~10, high variance; train/test random split might leak coach-years; class imbalance; "predicted eventually" uses future info maybe leakage if target years 2015-2021 and future after? Need gray.
- Expected demographics assumes 92.7% from college players and US population for rest; but positional funneling and specialty matter. Need compare within role/position, not aggregate.
- Classification future predictions all White from models that include Race and Connections; this is not proof of prospective discrimination; it is model replication of historical allocation. But if features encode race and connections, prediction is a mirror.
- Causal inference requires potential outcomes and overlap; cannot identify from observational regression. Need formal.

Need include exact singularity/breakdown:
- OLS singular when design matrix X not full column rank, e.g., race constant in subgroup or race collinear with intercept/role; then (X^T X)^{-1} undefined; use pseudo-inverse. R² = 1 - SSE/SST undefined if SST=0.
- Modularity Q = (1/2m) sum_{ij} [A_ij - k_i k_j/(2m)] delta(c_i,c_j), undefined/zero if m=0; resolution limit when communities smaller than sqrt(2m) not detected; Louvain stochastic local optima.
- Centrality singular/undefined for disconnected graph? Betweenness normalization denominators; closeness undefined for unreachable nodes; eigenvector centrality non-unique if graph disconnected or bipartite? Actually eigenvector centrality may be non-unique if largest eigenvalue repeated; for disconnected graph multiple components. Degree simple.
- Elastic Net objective; if features perfectly collinear, solution not unique unless strict convex; λ2>0 stabilizes; λ1=0 ridge; λ2=0 lasso nonunique under collinearity.
- Logistic regression separation: if race perfectly predicts BecameHC, MLE diverges; regularization needed. Classification metrics undefined if no positive predictions (precision undefined), AUC undefined if only one class. 
- Causal: propensity e(x)=P(T=1|X); overlap violation if e(x) in {0,1}; ATE not identified. 
- Demographics expected: if denominator zero or small subgroup, proportions unstable.

Need units: race indicator dimensionless; EPA points/play; success rate proportion; tenure years; centrality dimensionless or normalized; modularity dimensionless [-1/2,1]; p dimensionless; R² dimensionless; coefficient units outcome per race unit; probability [0,1]. Need maybe "connections count".

Need RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Need discuss lineage: NCAA demographics database since 2000 [PAGE 2], Maisel 2020 [PAGE 1], Vannini 2022 [PAGE 1], Richard Johnson 2017 [PAGE 2], network science Louvain [PAGE 4, ref McNulty], EPA XGBoost cfbfastR [PAGE 2], Success Rate Connelly [PAGE 2], Sportsdataverse [PAGE 2]. Multi-week traps: hiring cycle timing; coordinator-to-HC transitions lag; "eventual HC" label future leakage; model retraining; network centrality changes after hires; coach tenure survival; racial composition pipeline. Need mention "multi-week traps" maybe in sports forecasting context: short windows, small N, cycles. Need no betting. Need articulate historical lineage from integration, pipeline, coaching networks. Use quotes: "lack of Black coaches at the highest levels of college football may be the aspect of the game that has changed the least in the preceding few decades" [PAGE 1]; "Black athletes make up 39%..." [PAGE 2]; "White coaches are seven times more influential than Black coaches" [PAGE 5]; "Non-white head coaches employ Non-white coordinators 30% more frequently" [PAGE 6]; "35 more Black head coaches are needed" [PAGE 8]; "gap ... higher than it was in 2000" [PAGE 9]. Need discuss traps: (1) using current staff as candidate pool can reproduce pipeline; (2) centrality as merit vs access; (3) random splits over coach-years; (4) future label "eventually became HC" not target-year; (5) model predictions all White because features encode historical race/connections; (6) ignoring position/role segregation; (7) assuming US population for non-players; (8) no causal design. Need mention multi-week traps in recruitment/hiring: interview cycles, coordinator carousel, retention. Good.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Need interpret: decision makers' mental models. Crisis habit regression: under pressure, hiring committees fall back on familiar networks, "fit", "trust", "connections"; regression to homophily. Counter-trap: if aware of bias, they may overcorrect or use performance metrics as cover; "colorblind" criteria still privilege connections. Clock: hiring cycle clock, tenure clock, "eventual" recognition slow. Need formal recursive model? Could formulate agent belief update. Maybe use Bayesian updating: P(hire | performance, connections, race, role). The "theory of mind" of ADs/coaches: they anticipate donors, staff, alumni; they believe connections reduce risk; they know model metrics but discount. Need mention paper's recommendation: emphasize performance-based qualifications [PAGE 8]. Need recursive: candidates anticipate network disadvantage and may invest in networking; decision makers observe network as signal, reinforcing. "One new Black head coach can have ripple effects" [PAGE 9]. Need discuss counter-trap: using "eventual HC" label may reward patience and protect slow recognition; if AD uses "would eventually be hired" as validation, it can justify current delay. Need "clock" = tenure shorter 1.5 years [PAGE 9]; hiring cycle annual; classification target years 2015-2021. Need maybe equation for urgency? No toy ratios. Could use formal survival/hazard model: h_i(t) = h0(t) exp(β R_i + γ C_i + δ X_i); clock is hazard. Units: hazard per year. Breakdown: proportional hazards violated if tenure effects time-varying. Good. Need include maybe not fake ratios. This is formal equation with assumptions. Need avoid "Force/Fatigue".

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Need state no such variables in source; cannot use physical layers to veto institutional explanation. But maybe "veto proof" means if physical/biomechanical/weather factors could explain performance/tenure, then social inference vetoed. Need adjudicate: paper controls performance via EPA/Success Rate; physical/biomechanical injury/weather could affect on-field metrics and tenure. However, no evidence that differential weather/biomechanics by race explains hiring gap; weather not in dataset; biomechanics not in dataset. The regression p-values show race not associated with net EPA, so physical performance layer doesn't mediate. But absence of controls for team resources, schedule, injuries, weather could confound performance and tenure; yet the core network/hiring result doesn't depend on weather. Need proof: Cross-layer veto requires (a) differential exposure by race, (b) causal effect on hiring/tenure, (c) no overlap with social variables. Source lacks all. Weather is team-location/time varying; coach race not randomly assigned to weather; could affect EPA but not directly hiring decisions. Biomechanical: injury histories of former players? Race composition of positions; but not measured. Physical factors cannot veto claim of network-mediated disparity; they could at most add variance. Need mention "physical/biomechanical/weather veto proof" maybe ask for proof that such layers veto. We can say there is no valid veto. Need cite that performance metrics are EPA and Success Rate [PAGE 2]; regression found no race effect [PAGE 5]; community metrics significant [PAGE 4]. Need formal: Let Y performance, T race, M network, W weather/injury. For W to veto, need W confound T→Y or T→H; but no W in model. Since paper's causal claim is T→H via M, W orthogonal? We can use DAG and adjustment. Need equations: H = α + β T + γ C + δ P + ε. If W affects P and H, omitting W biases β if corr(T,W)≠0. But if T is race and W weather, corr likely not direct; but team location could correlate with race composition? Hmm. Need be precise: omitted variable bias formula for β if omit W: bias = γ_W * δ_{W|T,C,P}. If δ_{W|T,C,P}=0 (no differential weather exposure by race conditional on team/role), no bias. Paper doesn't estimate. But physical veto not proven. Need say the stronger evidence is network centrality and feature selection; weather cannot explain all-White 12 predictions or 43% connection gap. Biomechanics could affect performance but not centrality. So cross-layer veto fails.

Need maybe "biomechanical" in football coaching? Former players 92.7%; playing position funneling (Richard Johnson) [PAGE 2] could be biomechanical/positional. But not direct. Need mention "Black players funneled into positions thought to require less cognitive and leadership abilities" [PAGE 2] is social positional segregation, not biomechanical. Good.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Maybe "Reinforcement Learning from Verifiable Rewards"? Need create 3 counterfactual veto scenarios with predictions. Need be verifiable: e.g., 
1. Race-swap within same coordinator performance/connections/role/tenure: If model prediction changes only due race, veto? Predict probability lower for Black coordinator. Need specify test: hold all features except race, compute predicted P(BecameHC). If difference non-zero and sign negative, supports paper's race coefficient. But this is not "veto" maybe verification. 
2. Centrality decomposition: If we equalize connections to White mean for Black coordinators, predicted HC probability gap should shrink by X; if not, network mechanism vetoed. Predict substantial shrinkage because Connections selected. Need maybe exact: compute P under do(C=c_white_mean) vs observed; compare. 
3. Weather/biomechanical confound: Add team weather/injury/position controls; if race coefficient in hiring remains negative and network gap remains, physical veto fails. Prediction: coefficient remains <0; network gap remains >0. 
Could include "target-year vs eventual" label: If using target-year only vs eventual future label, SVM 82% eventual may not hold; prediction: target-year precision lower; but not race. Need 3 verifiable veto scenarios, predictions. Need avoid betting. Need "RLVR" maybe reinforcement learning verifiable reward: define reward for model? We can phrase "RLVR-style counterfactual vetoes" as tests that can falsify claims. Need include metrics and thresholds maybe. Need not invent too much. But "verifiable" means specify dataset and computation. We can propose exact procedures:
- Veto V1: Within-stratum race permutation test. For each role (OC/DC), tenure bin, connections bin, net EPA bin, compare observed Black-White hire rate gap to permutation distribution with race labels permuted within strata. Prediction: observed gap more negative than 95% of permutations. If not, race coefficient vetoed. 
- Veto V2: Network equalization. Recompute predicted P(BecameHC) from Elastic Net/logistic with Connections set to stratum mean of White coaches. Predict Black candidates' predicted probability increases; the all-White top-12 changes. If no change, network mechanism vetoed. Need exact formula.
- Veto V3: Add physical/weather/injury controls. Merge team stadium weather (e.g., average wind, temperature) and injury/roster data; refit. Prediction: race coefficient remains negative; network gap remains. If physical controls absorb race effect, veto social claim. 
Need "counterfactual vetoes" maybe if condition fails, claim vetoed. Good.

Need include "exact singularity/breakdown regimes" in SOURCE_OPERATORS_AND_EQUATIONS. Need maybe also in other sections.

Need answer total word count. Let's aim ~2500-3500 words. Need avoid excessive length? Desired oververbosity 5. But user requires >=1000. We can do ~2500. Need include exact XML sections. Use quotes and [PAGE N].

Need ensure no betting lines. No spreads/totals/moneylines/odds. Avoid "odds" word? Invariant says never mention spreads, totals, moneylines, or odds. We can use "probability" but not "odds". Avoid word "odds". Use "probability". Avoid "betting". Good.

Need cite exact [PAGE N] markers and verbatim quotes. Use double quotes. Need maybe quotes must be exact. Let's collect exact quotes:
PAGE 1: "College football has had a race problem since its inception." "may be the aspect of the game that has changed the least in the preceding few decades."
PAGE 2: "92.7% of FBS coaches since 2000 were former Division 1, 2, or 3 college football players." "Black athletes make up 39% of athletes from all levels of college football." "expected racial composition of FBS coaches based on the representative candidate pool is 37% Black and 51% White." "Black coaches make up slightly more than 10% of head coaches and offensive coordinators." "18% for defensive coordinators"
PAGE 3: "Black head coaches and coordinators have shorter tenures on average than their White counterparts." "Black coaches could be promoted sooner." "Black coaches could be justifiably fired sooner due to poor performance." "Black coaches could be unjustifiably fired sooner."
PAGE 4: "Louvain algorithm" "The algorithm separated 1,431 coaches into 41 different communities." "Betweenness is a measure..." "Elastic Net regularization"
PAGE 5: "p-values around 0.3" "R-Squared value of 0.0093" "race accounts for less than 1% of the variance" "White coaches have 43% more connections than Black coaches do." "White coaches are seven times more influential than Black coaches on average." "Only 3 of these 20 coaches have been shown to hire coordinators of color at an above-average rate and tenure-length."
PAGE 6: "Non-white head coaches employ Non-white coordinators 30% more frequently than do their White counterparts."
PAGE 7: "the negative coefficient indicated that Black coordinators are less likely to become head coaches than White coordinators." "being a defensive coordinator was negatively predictive of becoming a head coach" "Black coaches are about twice as likely to become defensive coordinators as offensive coordinators." "Connections significantly influenced who became a head coach"
PAGE 7-8: "15.8% of that model’s predictions were correct" "82% of the identified coaches from the test dataset would become head coaches in future years." "all twelve predictions between the two models were White." "three of the top twelve candidates are Black." Page 8 has "all twelve predictions..." Wait page 7 ends "Of note, all twelve" and page 8 starts "predictions between the two models were White." Need quote with [PAGE 7-8]? Better quote "all twelve predictions between the two models were White" [PAGE 8]? It spans. Use [PAGE 7-8].
PAGE 8: "they must increasingly emphasize performance-based qualifications." "Thirty-five more Black head coaches are needed in the FBS for the coaching ranks to match the hiring pool."
PAGE 9: "Black head coaches get 1.5 fewer years than their White counterparts." "White coaches are 43% more connected than Black coaches." "Non-White coaches hire 30% more Non-White coordinators, but most of the opportunities to hire go to White coaches." "The 20 head coaches who have employed the smallest percentage of Non-White Coordinators are White; the 19 most influential head coaches are White, but only 4 of them are above average in hiring Non-White coordinators." "The racial imbalance in college football coaching is real and persistent." "One new Black head coach can have ripple effects for years at multiple schools."

Need maybe use exact "R-Squared" quote. Good.

Need formulate equations:
Demographic expectation:
Let p_{CFB}=0.39, s=0.927, p_{US,B}=? Then \hat p_B = s p_{CFB} + (1-s)p_{US,B}; \hat p_W = s p_{CFB,W} + (1-s)p_{US,W}. But paper's 37/51. Units proportion. Breakdown if s misestimated or non-player pool differs; if p_US not representative.

Regression:
Y_i = α + β R_i + ε_i, ε_i ~ (0,σ²) possibly. β units outcome per race unit. p-value P(|T|≥|t| | H0: β=0). R² = 1 - SSE/SST. For Net EPA Y units points/play; success rate [0,1]. If X'X singular (R_i constant or collinear), β not unique. If SST=0, R² undefined. Low R² does not equal zero effect; equivalence test requires |β|<Δ.

Tenure:
T_i = α + β R_i + γ X_i + ε_i; β years. Survival/hazard: h_i(t)=h_0(t) exp(βR_i+γC_i+δX_i); units hazard/year. Breakdown if proportional hazards fails.

Community:
Graph G=(V,E), A adjacency. Degree k_i = sum_j A_ij (count). Modularity Q = (1/(2m)) sum_{i,j}(A_ij - k_i k_j/(2m)) δ(c_i,c_j), dimensionless. m=|E|. If m=0 Q undefined; resolution limit; Louvain local optimum. Centralities: betweenness C_B(v)=sum_{s≠v≠t} σ_st(v)/σ_st, normalized [0,1]; closeness C_C(v)=1/sum_u d(v,u) if connected; eigenvector λ x = A x. If disconnected, closeness undefined for unreachable; eigenvector may be non-unique. Network metrics dimensionless/count.

Elastic Net:
\hatβ = argmin_β [ (1/(2n))||y-Xβ||² + λ( α||β||_1 + (1-α)/2 ||β||²_2 ) ]. Units depending y. If features collinear and λ=0 or α? Nonunique. If y constant, intercept only. Events per variable = 61/6 ≈10.17? That's a ratio? Is that "toy"? It's a standard events-per-variable diagnostic. Allowed? It is a ratio but not fake. We can state "61 events and six selected features" not ratio to avoid toy. 
Logistic: P(BecameHC=1|x)=1/(1+e^{-(α+β_R R+...)}). If perfect separation, MLE divergent; regularization. Precision = TP/(TP+FP) undefined if TP+FP=0; recall = TP/(TP+FN) undefined if TP+FN=0. Accuracy 96% baseline quote.

Causal:
Potential outcomes H_i(t). ATE = E[H_i(1)-H_i(0)]. Propensity e(x)=P(T=1|X=x). Overlap: 0<e(x)<1. If e(x)=0 or 1, causal effect not identified. Omitted variable bias: plim β̂ = β + γ δ, where γ effect of omitted W on Y, δ coefficient of W on T. If δ=0 no bias. Need maybe units.

Need maybe "singularity/breakdown regimes" at end of section as bullet list. Good.

Need "RETROCAUSAL_GENEALOGY" include historical lineage and multi-week traps. Need not use equations? Can use some. Need be >= maybe 300 words.

Need "RECURSIVE_THEORY_OF_MIND" maybe 300 words.

Need "CROSS_LAYER_VETO_ADJUDICATION" 300 words.

Need "RLVR_COUNTERFACTUAL_VETOES" 300 words.

Need total >1000. Good.

Need answer should be self-contained. Need maybe mention "This paper is a CMSAC Fall 2022 Reproducible Research Competition submission" [PAGE 1]. Good.

Need maybe "unknown authors" but not needed.

Need be careful XML validity: Use `&`? Avoid ampersand or escape. Use `>=` maybe okay but in XML `<` must be escaped. Use `&lt;` for less than. Need avoid raw `<` in text. Use `&lt;` if needed. Use `>` okay. Avoid `&` except entities. Use `[PAGE N]`. Use LaTeX with `$...$`. XML text can include `$` fine. Use `^` fine. Use `_` fine. Use `&` in equations? Avoid. Use `\&` maybe. Need not use `<` raw. Use `&lt;` for less than. Need use `\leq` etc. Good.

Need maybe include Greek letters. Fine.

Need ensure sections exactly as provided. No extra sections. Use tags. Good.

Let's draft content.

THINK_TRACE: Need >=400 words. We'll write ~700 words. Include multi-hop derivation and gray-zone audit. Use quotes. Need maybe "The paper's main inference is a conjunction: performance does not explain racial hiring/tenure gap; network connections do; race predicts hiring; future model predicts all White." Then audit each link. Mention p-values. Mention p ~0.3 not support no effect. Mention R² low. Mention sample 27,516 observations, 3,740 unique coaches, 130 teams [PAGE 2]. 2000 coordinator-years, 61 became HC [PAGE 4]. Mention six models. Mention "SVM 82% eventual" maybe future label. Mention all 12 predictions White [PAGE 7-8], but top performance candidates include three Black [PAGE 8]. Mention "35 more Black HCs needed" [PAGE 8]. Mention causality. Good.

SOURCE_OPERATORS_AND_EQUATIONS: Need formal equations with units and citations. Include equations. Need cite page for each operator. Maybe use bullets. Need "breakdown" sublist. Need include exact quotes. Good.

RETROCAUSAL_GENEALOGY: Need lineage. Use quotes. Multi-week traps. Good.

RECURSIVE_THEORY_OF_MIND: Need crisis habit regression vs counter-trap vs clock. Use formal hazard equation. Good.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Need be direct: no valid veto; but possible confounds. Use equations for omitted variable bias. Good.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios. Need "verifiable" with predictions. Good.

Need maybe "ZERO TOY EQUATIONS" avoid fake ratios. Our equations are standard. Good.

Need not mention "odds". Avoid word. Use "probability". Good.

Let's write final. Need ensure no raw `<` in text. Use `&lt;` if needed. For equations with `<` use `&lt;`. For XML tags, fine. Use `&amp;` if ampersand. Avoid ampersand mostly. Use "and". Good.

Need maybe include "R^2" as `$R^2$`. Good.

Need "p-values around 0.3" quote. Good.

Need "R-Squared value of 0.0093" quote. Good.

Need "Net EPA" units points/play. Need mention "Success Rate" proportion. Good.

Need "EPA is the result of an XGBoost model by the cfbfastR team" [PAGE 2]. Good.

Need "Louvain algorithm" [PAGE 4]. Good.

Need "modularity" equation. Good.

Need "betweenness" equation. Good. Need "closeness" undefined for disconnected. Good.

Need "eigenvector" equation. Good.

Need "Elastic Net" equation. Good.

Need "Logistic regression" equation. Good. Need "perfect separation" breakdown. Good.

Need "classification metrics" precision undefined. Good.

Need "demographic expectation" equation. Good.

Need "tenure gap" equation. Good.

Need "causal" equation. Good.

Need "omitted variable bias" equation. Good.

Need "RLVR" maybe define as "verifiable-reward veto". Good.

Need "counterfactual veto" condition: If test fails, claim vetoed. Good.

Need "prediction" for V1: observed race-hire gap remains negative after stratification. V2: equalizing connections raises Black predicted probability and changes top-12 racial composition. V3: adding physical/weather/injury controls does not absorb race coefficient or connection gap. Good.

Need maybe include "SVM laplacian 82%" and "KNN 15.8%" in RLVR? Could use as baseline. Good.

Need total word count likely >2500. Good.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The source is an observational, reproducible-research paper, not a causal experiment. The central inference is a conjunction: performance does not explain the racial hiring and tenure gap; network centrality does; race remains predictive of promotion holding selected features constant; and the trained classifiers project an all-White future hire set. I audit each link. The demographic baseline is constructed from a candidate-pool argument: “92.7% of FBS coaches since 2000 were former Division 1, 2, or 3 college football players” [PAGE 2], and “Black athletes make up 39% of athletes from all levels of college football” [PAGE 2]. The paper then states the expected composition is “37% Black and 51% White” [PAGE 2], while actual Black representation is “slightly more than 10% of head coaches and offensive coordinators” and “18% for defensive coordinators” [PAGE 2]. The first multi-hop issue is that the expected distribution depends on the assumption that the non-college-player 7.3% mirrors the US population and that the college-player pool is the correct hiring pool. Both are defensible but not self-evident; position segregation, coordinator role, and specialization can change the relevant pool.

The tenure link is also inferential. The paper says “Black head coaches and coordinators have shorter tenures on average than their White counterparts” [PAGE 3] and lists three causes: promotion sooner, justified firing, or unjustified firing [PAGE 3]. It rules out promotion sooner because the discrepancy is larger among head coaches than coordinators [PAGE 3]. That is a reasonable elimination, but it is not a formal mediation test. A survival model with time-varying covariates would be stronger.

The performance link is the paper’s strongest negative control. It reports a representative regression “p-values around 0.3” and an “R-Squared value of 0.0093” for head-coaching Net EPA, concluding “race accounts for less than 1% of the variance” [PAGE 5]. That does not prove zero effect; a non-significant p-value is not equivalence. The correct audit is an equivalence test against a substantively small margin, plus measurement-error adjustment. Still, across seven groupings the paper reports no statistically significant race performance effect [PAGE 5], so performance is unlikely to be the whole explanation.

The network link is the paper’s positive mechanism. The Louvain algorithm “separated 1,431 coaches into 41 different communities” [PAGE 4]. The paper reports that “White coaches have 43% more connections than Black coaches do” and “White coaches are seven times more influential than Black coaches on average” [PAGE 5]. Feature selection then selected “Connections, Net EPA, Net Passing Success Rate, Race, Tenure, and Role” [PAGE 7], with a negative race coefficient: “Black coordinators are less likely to become head coaches than White coordinators” [PAGE 7]. The gray zone is endogeneity: centrality is not an exogenous merit variable; it is produced by hiring, staff-tree access, and homophily. The paper’s claim is therefore not “connections cause discrimination” in a clean experimental sense, but “connections are a discriminatory gateway that is racially structured.”

The classification link has several traps. The dataset contains “2000 coordinator years” and “61 of these coordinators became a head coach in the target year” [PAGE 4]. With six selected features, the event count is small and model variance is high. The KNN model was “15.8%” correct on target-year hires, while the SVM laplacian model identified coaches of whom “82% ... would become head coaches in future years” [PAGE 7]. The “future years” label is a different estimand from target-year hiring; it can reward slow recognition and create temporal leakage if future information enters the label. The future predictions are “all twelve ... White” [PAGE 7-8], but the paper also says “three of the top twelve candidates are Black” on performance metrics [PAGE 8]. That is the key counterfactual: the model’s whiteness is a property of historical features, not proof that Black candidates lack performance. The paper’s recommendation follows: “they must increasingly emphasize performance-based qualifications” [PAGE 8]. My audit conclusion: the paper supports a persistent network-mediated racial allocation pattern; it does not by itself identify a single causal parameter, and the strongest causal claims require overlap, mediation, and sensitivity analyses.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The paper’s operators are demographic expectation, regression, graph modularity and centrality, Elastic Net feature selection, and classification. I formalize them with units and breakdown regimes.

1. Candidate-pool expectation. Let $s=0.927$ be the share of FBS coaches who were college players [PAGE 2], $p_B=0.39$ the Black share of college football athletes [PAGE 2], and $p_{B,\mathrm{US}}$ the Black share of the non-player pool. The expected Black share is
\[
\hat p_B = s p_B + (1-s)p_{B,\mathrm{US}},
\]
a dimensionless proportion in $[0,1]$. The paper’s stated result is “37% Black and 51% White” [PAGE 2]. Breakdown: if $s$ is mismeasured, if the non-player pool is not US-representative, or if hiring is role-specific, the expectation is biased. If the relevant subgroup denominator is zero, the proportion is undefined.

2. Race-performance regression. For coach $i$,
\[
Y_i=\alpha+\beta R_i+\varepsilon_i,\qquad \varepsilon_i\sim(0,\sigma^2),
\]
where $R_i\in\{0,1\}$ is a race indicator and $Y_i$ is Net EPA in points per play or Net Passing Success Rate as a proportion. $\beta$ has units of outcome per race unit. The paper reports “p-values around 0.3” and “R-Squared value of 0.0093” [PAGE 5], with
\[
R^2=1-\frac{\mathrm{SSE}}{\mathrm{SST}}.
\]
Breakdown: if the design matrix is rank deficient, e.g. race is constant within a subgroup or collinear with intercept and role, $(X^\top X)^{-1}$ does not exist and $\beta$ is not unique; use a pseudo-inverse or drop the collinear term. If $\mathrm{SST}=0$, $R^2$ is undefined. A non-significant $p$-value is not an equivalence proof; one needs a pre-specified margin $\Delta$ and a test of $|\beta|&lt;\Delta$.

3. Tenure and hazard. A linear tenure model is
\[
T_i=\alpha+\beta R_i+\gamma^\top X_i+\varepsilon_i,
\]
with $T_i$ in years. The paper reports “Black head coaches get 1.5 fewer years than their White counterparts” [PAGE 9]. A survival form is
\[
h_i(t)=h_0(t)\exp(\beta R_i+\gamma^\top X_i),
\]
where $h_i(t)$ is hazard per year. Breakdown: if proportional hazards fails, $\beta$ is time-averaged and misleading; if censoring is race-dependent, estimates are biased.

4. Louvain modularity. For graph $G=(V,E)$, adjacency $A_{ij}$, degree $k_i=\sum_j A_{ij}$, and total edge mass $m=|E|$,
\[
Q=\frac{1}{2m}\sum_{i,j}\left(A_{ij}-\frac{k_i k_j}{2m}\right)\delta(c_i,c_j),
\]
dimensionless. The paper uses Louvain to split “1,431 coaches into 41 different communities” [PAGE 4]. Breakdown: if $m=0$, $Q$ is undefined; Louvain is stochastic and has a resolution limit, so small communities can be missed; modularity maximization does not identify a unique causal partition.

5. Centrality operators. Degree is $C_D(v)=k_v$ in connection counts. Betweenness is
\[
C_B(v)=\sum_{s\neq v\neq t}\frac{\sigma_{st}(v)}{\sigma_{st}},
\]
normalized to $[0,1]$, where $\sigma_{st}$ is the number of shortest paths. Closeness is
\[
C_C(v)=\frac{1}{\sum_u d(v,u)}
\]
if all nodes are reachable; otherwise it is undefined or requires harmonic closeness. Eigenvector centrality solves $\lambda x=A x$. Breakdown: disconnected graphs make closeness undefined for unreachable pairs; repeated largest eigenvalues can make eigenvector centrality non-unique; centrality is a graph-relative measure, not an absolute merit score. The paper reports “White coaches have 43% more connections than Black coaches do” and “White coaches are seven times more influential than Black coaches on average” [PAGE 5].

6. Elastic Net. With response $y$ and design $X$,
\[
\hat\beta=\arg\min_\beta\left\{\frac{1}{2n}\|y-X\beta\|_2^2+\lambda\left[\alpha\|\beta\|_1+\frac{1-\alpha}{2}\|\beta\|_2^2\right]\right\}.
\]
The paper selected six features: “Connections, Net EPA, Net Passing Success Rate, Race, Tenure, and Role” [PAGE 7]. Breakdown: under perfect collinearity, the solution is non-unique unless the ridge penalty is strict; with small event counts, selection is unstable; coefficient signs can flip across folds.

7. Logistic classification. For promotion indicator $H_i$,
\[
P(H_i=1\mid X_i)=\frac{1}{1+\exp[-(\alpha+\beta_R R_i+\beta_C C_i+\cdots)]}.
\]
The paper notes “the negative coefficient indicated that Black coordinators are less likely to become head coaches than White coordinators” [PAGE 7]. Breakdown: perfect separation makes the unregularized maximum-likelihood estimate diverge; class imbalance makes accuracy uninformative. The paper itself notes a no-hire model would have “around 96%” accuracy [PAGE 7]. Precision is undefined when no positive predictions are made; recall is undefined when no positives exist.

8. Causal identification. Let $H_i(t)$ be potential promotion under race assignment $t$. The average effect is $\mathrm{ATE}=E[H_i(1)-H_i(0)]$. With propensity $e(x)=P(T=1\mid X=x)$, identification requires overlap $0&lt;e(x)&lt;1$. If $e(x)\in\{0,1\}$, the counterfactual is not identified. Omitted-variable bias for an omitted physical variable $W$ is
\[
\operatorname{plim}\hat\beta=\beta+\gamma_W\delta_W,
\]
where $\gamma_W$ is the effect of $W$ on the outcome and $\delta_W$ is the coefficient of $W$ on race after adjustment. If $\delta_W=0$, there is no bias from that omission. This is the formal gate for the cross-layer veto below.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is the post-integration pipeline debate in college football. It opens with the claim that “College football has had a race problem since its inception” [PAGE 1] and cites Maisel’s 2020 argument that the lack of Black coaches “may be the aspect of the game that has changed the least in the preceding few decades” [PAGE 1]. That lineage matters because the paper is not inventing a new disparity; it is quantifying a long-run institutional pattern with NCAA demographic data collected since 2000 [PAGE 2], Sportsdataverse and cfbfastR performance data [PAGE 2], and a coach-staff dataset from 2000 to 2021 [PAGE 2]. The scientific genealogy also includes network science: Louvain modularity and centrality metrics [PAGE 4], EPA and Success Rate as public performance metrics [PAGE 2], and Richard Johnson’s 2017 pipeline analysis of positional funneling [PAGE 2]. The paper’s own summary is retrocausal in structure: it explains current hiring by past network formation and then projects forward: “The racial imbalance in college football coaching is real and persistent” [PAGE 9].

Multi-week traps in this lineage are several. First, the hiring clock is annual, but the recognition clock is slower. The paper’s SVM result says “82% of the identified coaches from the test dataset would become head coaches in future years” [PAGE 7]; if one reads that as target-year accuracy, one confuses eventual recognition with current hiring. Second, the coordinator carousel creates short windows: a coordinator may be a candidate for one or two cycles, then leave for the NFL or a different role. Third, staff-tree effects compound over weeks and years: a head coach hires coordinators, those coordinators become head coaches, and the network reproduces itself. The paper’s finding that “Non-white head coaches employ Non-white coordinators 30% more frequently than do their White counterparts” [PAGE 6] is a feedback loop, not a one-cycle fact. Fourth, the paper’s projection that “Thirty-five more Black head coaches are needed in the FBS for the coaching ranks to match the hiring pool” [PAGE 8] is a stock-flow trap: one hire changes the stock, but the flow of coordinator promotions changes the future stock. Fifth, model retraining traps: if future models are trained on the same racially structured centrality features, they will learn the historical allocation. The paper itself observes that “all twelve predictions between the two models were White” [PAGE 7-8], while “three of the top twelve candidates are Black” on performance [PAGE 8]. That is a retrocausal warning: the model is not a neutral forecast; it is a genealogy of past access.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The decision-maker’s recursive model is: “I must hire someone I trust; trust comes from my network; my network is composed of people like me; therefore the safest hire looks like my network.” Under crisis, this becomes habit regression. The paper’s data are consistent with that: “White coaches have 43% more connections than Black coaches do” [PAGE 5], and “Connections significantly influenced who became a head coach” [PAGE 7]. A hiring authority who fears donor backlash, staff instability, or a failed press conference will overweight familiarity. That is not necessarily explicit animus; it is a risk-aversion prior that treats network proximity as a proxy for competence.

The counter-trap is overcorrection or performative neutrality. A committee may say “we hired the best candidate” while using “best” to mean “most connected” or “best interview within our network.” The paper’s result that race remains negative “holding all other features equal” [PAGE 7] is exactly the counter-trap: even when performance is controlled, race and role and connections still predict promotion. A second counter-trap is using “eventual head coach” labels to justify delay: the SVM’s “82% ... would become head coaches in future years” [PAGE 7] can be read as “we were right to wait,” when it may instead show that decision makers are “slow to recognize these candidates” [PAGE 7]. The clock is the tenure and hiring cycle. The paper reports “Black head coaches get 1.5 fewer years than their White counterparts” [PAGE 9], and the model uses target years 2015-2021 [PAGE 4]. A survival form $h_i(t)=h_0(t)\exp(\beta R_i+\gamma^\top X_i)$ makes the clock explicit: hazard per year. If the hazard is higher for Black coaches at the same performance and role, the “wait and see” stance is not neutral; it is a shorter evaluation window. The recursive equilibrium is: candidates anticipate shorter windows, invest in network ties, committees read ties as merit, and the next cohort faces the same prior. The paper’s proposed exit is performance-based evaluation: “they must increasingly emphasize performance-based qualifications” [PAGE 8], and “One new Black head coach can have ripple effects for years at multiple schools” [PAGE 9].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A physical, biomechanical, or weather layer could veto the paper’s social inference only if it satisfied three conditions: differential exposure by race, a causal effect on the hiring or tenure outcome, and non-overlap with the measured social mechanism. The source does not provide such a veto. Weather is not a variable in the models; biomechanics and injury histories are not variables; the performance layer is proxied by EPA and Success Rate [PAGE 2], and the regression finds no statistically significant race effect on those metrics [PAGE 5]. The paper’s positive results are network and feature-selection results: “White coaches have 43% more connections” [PAGE 5], “Connections significantly influenced who became a head coach” [PAGE 7], and the negative race coefficient [PAGE 7]. Weather cannot explain a 43% connection gap. Biomechanics could affect on-field performance and tenure, but the paper’s performance regressions do not show a race effect, and biomechanics does not directly explain why the twelve model predictions are “all ... White” [PAGE 7-8] or why “the 19 most influential head coaches are White” [PAGE 9].

Formally, let $W$ be weather or biomechanical load, $T$ race, $C$ connections, $P$ performance, and $H$ hiring. The paper estimates something like
\[
H=\alpha+\beta_T T+\beta_C C+\beta_P P+\varepsilon.
\]
An omitted $W$ biases $\beta_T$ only through $\gamma_W\delta_W$. If race is unrelated to $W$ conditional on team, role, and region, $\delta_W=0$ and the physical layer does not veto. If $W$ affects $P$ but not $H$ directly, it adds noise to the performance control but does not reverse the network result. The paper also has a social-positional layer that is often mistaken for biomechanics: “Black players are funneled into positions thought to require less cognitive and leadership abilities” [PAGE 2]. That is a social sorting mechanism, not a physical veto. The correct adjudication is therefore: physical and weather variables are legitimate robustness controls for performance and tenure, but they are not a proven alternative explanation for the racial network and hiring gap. The cross-layer veto fails on the source’s own evidence.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
I define three verifiable-reward veto tests. Each specifies a computation and a prediction; if the prediction fails, the corresponding claim is vetoed or demoted.

Veto 1: Within-stratum race permutation test for hiring. Stratify coordinator-years by role, tenure bin, Net EPA bin, and Connections bin. Compute the observed Black-White promotion gap. Permute race labels within strata many times and recompute. Prediction: the observed gap is more negative than the 95th percentile of the permutation distribution, consistent with the paper’s negative race coefficient [PAGE 7]. If the observed gap lies inside the permutation band, the race-hiring claim is vetoed as a conditional association, though not necessarily as a raw disparity.

Veto 2: Network equalization counterfactual. Fit the selected model with “Connections, Net EPA, Net Passing Success Rate, Race, Tenure, and Role” [PAGE 7]. For each Black coordinator, replace Connections with the mean Connections of White coordinators in the same role and tenure bin, then recompute $P(\mathrm{BecameHC}=1\mid X)$. Prediction: predicted promotion probabilities rise for Black coordinators and the all-White top-twelve set [PAGE 7-8] changes composition. If equalizing Connections does not change predictions, the network mechanism is vetoed. This test directly checks the paper’s claim that “Connections significantly influenced who became a head coach” [PAGE 7].

Veto 3: Physical and weather robustness. Merge team-level weather, travel, and injury/roster controls into the performance and tenure models, then refit the race coefficient and the connection gap. Prediction: the race coefficient remains negative and the connection gap remains positive, because weather and biomechanics do not explain the 43% connection difference [PAGE 5]. If the physical controls absorb the race coefficient or the network gap, the social inference is vetoed in favor of a physical-exposure explanation. A secondary prediction: the “82% ... future years” SVM result [PAGE 7] should not be treated as target-year accuracy; a strict target-year evaluation will be lower, because eventual recognition and current hiring are different estimands. If the target-year and eventual-year metrics are identical, the temporal-label critique is vetoed. These three tests are reproducible from the paper’s stated datasets and selected features [PAGE 2, PAGE 4, PAGE 7].