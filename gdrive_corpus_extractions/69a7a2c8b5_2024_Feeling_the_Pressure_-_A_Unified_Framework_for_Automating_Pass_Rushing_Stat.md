---
source: "2024 Feeling the Pressure - A Unified Framework for Automating Pass Rushing Statistics in NFL Games.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 22
model: deepseek/deepseek-v4.1-flash-1017
words: 8044
---

<NATIVE_REASONING>
We need answer user. Need produce deep analysis per exact XML sections. Need source cited [PAGE N] markers and verbatim quotes. Need zero betting lines, no spreads/totals/moneylines/odds. Need >=1000 words across exact XML sections, THINK_TRACE >=400 words. Need formal LaTeX equations, SI/information/probability units, assumptions, singularity/breakdown regimes. Need retrocausal genealogy, recursive theory of mind, cross-layer veto, RLVR counterfactual vetoes 3 verifiable scenarios predictions. Need likely analyze paper. Need be careful page numbering from source text. It has page markers? The text shows page numbers in body: 1,2,...25, but source PAGES: 22? Hmm markdown includes pages up to 25? It says PAGES: 22. Maybe actual PDF pages? But text includes page numbers 1-25 due extraction? Need cite exact [PAGE N] markers. We can infer pages from visible page numbers. Must cite exact [PAGE N] markers and verbatim quotes. Need use [PAGE 1], [PAGE 3], etc. Need ensure quotes exact from text. Need not mention betting lines. We can discuss sports analytics not betting.

Need answer is research synthesis. Need include sections exactly:
<THINK_TRACE>... >=400 words
<SOURCE_OPERATORS_AND_EQUATIONS>...
<RETROCAUSAL_GENEALOGY>...
<RECURSIVE_THEORY_OF_MIND>...
<CROSS_LAYER_VETO_ADJUDICATION>...
<RLVR_COUNTERFACTUAL_VETOES>...

Need total >=1000 words. Desired oververbosity 5. Need maybe 1800-2500 words. Need formal equations. Need source operators and equations with LaTeX units. Need page citations and verbatim quotes. Need exact singularities/breakdown regimes. Need mention limitations: labeling subjectivity, event filtering, GNN overprediction, model calibration, accuracy etc. Need derive multi-hop. Need "Drive source" is paper. We need not create fake ratios. Formal equations can be from paper: rule-based position assignment p_rush etc; total loss = BCE_nodes + λ BCE_links; blocker interference maybe cosine threshold and orthogonal distance exponential weighting; pressure target heuristic distance thresholds; calibration ECE/MCE; accuracy; pressure metrics threshold 75%; moving average. Need include assumptions and units: positions yards? NFL tracking x,y in yards likely? Paper says yards for distances. Speed/acceleration scaled, but real units maybe yards/s, yards/s^2. Use SI? Paper uses yards; can mention source-native yards and SI conversion 1 yd = 0.9144 m. Probability unit dimensionless in [0,1]; information maybe nats/bits? We can mention BCE loss nats (natural log) or bits if log2. The paper doesn't specify log base; formal BCE. Need exact singularity regimes:
- Rule-based position probabilities: max tie or undefined if p vector missing; position role ambiguity; OLB/LB low accuracy.
- Blocker interference: cosine similarity <0 removes; if rusher-passer vector norm zero (rusher at passer) angle undefined; orthogonal distance denominator zero; exponential weight saturates; threshold 1 yard; multiple blockers sum unbounded? If distances zero, weight max; additive sum can be large but maybe finite if single; no explicit normalization.
- Pressure probability: RF voting granularity 1/400 = 0.25%, calibration high-prob underconfidence; 3-step centered moving average breaks at play boundaries/endpoints; action filtering if events missing/inconsistent, passer ID change recalculates; trick plays; max probability evaluation.
- GNN: class imbalance, sparse links, overprediction; λ weighting; edges if minimum distance <3 yards; if no pair meets, isolated nodes; if all links? 
- Calibration ECE/MCE formulas. ECE = sum bins (n_b/N) |acc_b - conf_b|; MCE = max |acc_b - conf_b|. Units probability. Singular if N=0 or bin empty; reliability.
- Accuracy: maybe (TP+TN)/(TP+TN+FP+FN). precision etc.
- Pressure threshold >75% for metric; "pressure" as affects QB. Time to pressure; quick pressures ≤2.5s; pressure time; average; rate over expected = avg pressure - pressure at snap? Table says "difference between average pressure and pressure at snap". Actually "Pressure rate over expected" description: difference between average pressure and pressure at snap. Not a rate ratio, so use difference (percentage points). Need avoid fake ratios.
- Blocker interference: formal:
Let r = position rusher, q = passer, b_i blocker. v = q-r. u_i = b_i-r. cos θ_i = (v·u_i)/(||v||||u_i||) if norms nonzero. Eligible if cos θ_i > 0 and blocker not behind passer? Paper says "remove any cases where value less than 0 and therefore offensive player is behind defender. Similarly, remove any offensive players behind passer." Then orthogonal distance d_i = ||u_i - proj_v u_i|| = ||u_i - ((u_i·v)/(v·v)) v||. Weight w_i = 1 if d_i ≤ 1 yd else exponential decrease? Paper: "If a player is within 1 yard of direct path, assigned value of 1 otherwise influence decreases exponentially." It doesn't provide exact exponential formula. We can state assumed form w_i = exp(-α(d_i - 1)) for d_i > 1, α>0, with α not specified. But "never invent fake ratios" — this is not fake? It is a formalization with assumption. Need label as assumed reconstruction, not verbatim. We can state "paper does not specify α; any monotone exponential is underdetermined." Need be transparent. Blocker interference B = Σ_i w_i maybe. Units: weight dimensionless; d in yards/meters; α in yd^-1. Singularity: ||v||=0, ||u_i||=0, v·v=0.

Need "retrocausal genealogy": historical/scientific lineage and multi-week traps. Need discuss lineage: ESPN PBWR/PRWR 2018 [28], pre-snap pass rusher prediction [29,30], backtracking [31], Alamar/Goldner [21,22], STRAIN [18], IDPI [15], Yurko continuous-time [6], GNN [9,10], AutoGluon [8,11], calibration [36,37]. Multi-week traps: confounding by PFF label subjectivity, event definition drift, leakage across seasons, using max pressure as target creates label leakage? Need mention "retrocausal" maybe from final labels back to per-frame probabilities; risk of target leakage if max probability evaluation uses play-level label; action filtering end event; need not overstate. Multi-week traps: calibration drift, moving average smoothing masking spikes, threshold 75% arbitrary, NGS event vs PFF label discrepancies, GNN link sparsity overprediction, qb/passer identification trick plays. Need cite pages.

Need "Recursive theory of mind": crisis habit regression vs counter-trap vs clock. Interpret as modeling labeler/coach/analyst beliefs, recursive. Need discuss how model predicts pressure; human labelers' "hurry" subjective; counter-trap: model learns heuristic proximity rather than true pressure; clock: time-to-pressure vs quick pressure; crisis habit regression: under pressure, labeler/analyst defaults to outcome flags; model's per-frame probability can regress to no-pressure due class imbalance; moving average smooths; need counter-trap via calibration and blocker-interference; clock via temporal thresholds and event filtering. Need cite.
Need maybe phrase "Theory of mind" in sports analytics: recursive modeling of rusher, blocker, QB, labeler. Crisis habit regression: when play breaks (scramble), NGS event ends pass rush while PFF may label sack; model truncated. Counter-trap: if model sees rusher near QB but double team, blocker interference penalizes. Clock: time-to-pressure/quick pressure thresholds. Need include multi-agent recursive beliefs:
- Rusher believes path to QB; blocker believes leverage; QB believes pocket; labeler believes pressure; analyst believes model.
- Recursive model shouldn't collapse to single-agent proximity; it must represent blocker-interference as opponent's belief/constraint. Use Bayesian? Could formalize pressure probability P(Y=1 | x_t, B_t) where Y play-level pressure. Recursive ToM as hierarchical inference: labeler label L depends on latent pressure event and subjective threshold; model estimates P(Y=1). Need not overdo.

Need "Cross-layer veto adjudication": physical/biomechanical/weather veto proof. Paper doesn't discuss weather. Need state not in source. Need cross-layer veto: if claimed pressure probability contradict physical constraints (e.g., speed/acceleration, distance, blockers), veto. Need proof via kinematics:
- Max closing speed and time to reach passer: if distance d and relative closing speed v_close, minimum time t_min = max(0, (d - r_contact)/v_close), where r_contact ~ tackle radius? Paper uses 1 yd/1.5 yd. If predicted pressure before physically possible, veto. Units meters seconds. Break down if v_close ≤0. 
- Blocker interference veto: if sum weights high, probability should be lower. Not absolute.
- Weather: no weather data in source; cannot adjudicate weather. Need state "weather layer is absent; any weather-based veto is out-of-source and should be marked unsupported." The user asks cross-layer veto adjudication physical/biomechanical/weather veto proof. Need be honest: source has no weather variables; so weather veto cannot be proven from source; only note absence and require external data. Need cite data overview [PAGE 3] lists features no weather. That satisfies. Biomechanical: speed/acceleration, direction, relative position; no force/pressure physical units; pressure is probabilistic not mechanical. Need avoid fake force equation. Use kinematics.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR maybe reinforcement learning with verifiable rewards? Need three scenarios with expected predictions. Need design counterfactual tests that can be verified from paper. E.g.:
1. Remove blocker-interference feature; model should lose calibration/performance especially near QB with blockers. Prediction: ECE increases, precision pressure decreases; if no degradation, feature claim vetoed. Verifiable by retrain same RF on 2018 and eval 2022. Need cite feature importance Fig A.3. 
2. Replace PFF pressure labels with heuristic-only target; if model performance remains high, suggests labels not needed; but paper says PFF + heuristic. Prediction: subjective hurry noise causes calibration degradation at high prob; ECE >0.56%, MCE maybe >7.56%. Veto if no change. 
3. NGS event end filtering: include post-scramble/post-pass frames labeled as pressure; model should produce spurious high pressure and violate action filtering; prediction: false positives increase on Fig 9-type plays and calibration worsens. Veto if no increase. Or GNN edge threshold 3 yards: vary threshold; if performance invariant, edge construction not causal? Need 3 verifiable. Need include predictions with metrics. RLVR means Reinforcement Learning with Verifiable Rewards? Could be "RLVR counterfactual vetoes" as in verify via counterfactual predictions. Need phrase "RLVR-style veto: a claim is accepted only if counterfactual perturbation produces predicted measurable change; otherwise veto." Three scenarios. Need exact predictions. No betting.

Need include page citations exact [PAGE N] and verbatim quotes. Need quote exact text with quotation marks. Need page numbers from source. Need cite:
PAGE 1 intro: "pass rushing statistics only include the final outcomes of a play, e.g., sack and pass-made." [PAGE 1]
PAGE 2 contributions/accuracy: "0.99 overall accuracy for the blocker-rusher identification task and 0.97 average precision..." [PAGE 2]
PAGE 3 data: "Tracking data is measured for each of the 22 players on the field at a rate of 10Hz." [PAGE 3]
PAGE 3 pressure types: "Pressure is broken down into three types: hurry, hit, and sack." [PAGE 3]
PAGE 3 "Hurry on the other hand is a more subjective concept..." [PAGE 3]
PAGE 4 rule equation? "we assign each position to the role with the highest probability using the following rules" [PAGE 4]
PAGE 4 Table 1 F1.
PAGE 7 GNN loss: "Total Loss = BCE Loss on Nodes + λ · (BCE Loss on Links)" [PAGE 7] maybe page 7.
PAGE 7 "connect each pair of players who reach a minimum distance during the play of less than three yards" [PAGE 7]
PAGE 8 blocker interference: "If a player is within 1 yard of the direct path, they are assigned a value of 1 otherwise their influence decreases exponentially." [PAGE 8]
PAGE 9 target: "we define pressure as any play where a rusher gets within 1 yard of the passer during the pass rush or within 1.5 yards of the passer at the time of the pass." [PAGE 9]
PAGE 10 RF: "The final random forest model uses 400 estimators." [PAGE 10]
PAGE 10 "Final probability estimates were smoothed using a 3-step centered moving average..." [PAGE 10]
PAGE 11 calibration: "ECE indicates that we can expect the predicted probability to be within 0.6% of the truth and the maximum calibration error (MCE) says that the maximum error expected is about 7.6%" [PAGE 11]
PAGE 12 classification: "Our model achieves 98.3% accuracy when looking at all defenders and 95.8% accuracy when looking only at rushers" [PAGE 12]
PAGE 14 outlier: "NGS event definitions will be treated as the truth." [PAGE 14]
PAGE 15 "Many of the instances of high predicted pressure with no positive label were in instances that would be classified as hurries instead of sacks or hits." [PAGE 15]
PAGE 17 Parsons: "35.4 percent" "74.8 percent" etc [PAGE 17]
PAGE 17 metrics maybe threshold 75% in Table A.3 on PAGE 24? Wait table A.3 appears page 24? Source page numbers: page 24 at appendix. Need cite [PAGE 24] for table A.3. But PAGES: 22 mismatch. Hmm page numbers visible in text: page 24 and 25. The source says PAGES: 22, but text includes "24", "25". Need maybe use visible page markers not PDF pages? The user asks exact [PAGE N] markers. We can cite [PAGE 24] for Table A.3. But if actual source has 22 pages? Wait the markdown includes page numbers at bottom: after References page 21, Appendix Additional Tables and Figures, then page 22, then 23,24,25. It says PAGES: 22 maybe metadata inconsistent. Need avoid citing beyond? But exact quote from Table A.3 "A player affects the quarterback as determined by the pressure probability exceeding 75%." It appears after page 24. We can cite [PAGE 24]. Similarly Table A.4 [PAGE 24]. Need maybe cite [PAGE 22] for Table A.2. Hmm.

Need ensure "exact [PAGE N] markers" appear. Use visible page numbers. Need not include all quotes; enough.

Need no betting lines. Avoid words "odds"? The source says "over expectation" not odds. "moneylines" no. "spreads" no. "totals" no. We can mention "expected" not betting. Avoid "betting" entirely. Need not mention "odds". Good.

Need answer structure exact XML tags. Need perhaps include an opening? The user wants XML sections. We can just output tags. Need account ">=1,000-word depth" across exact sections. Need maybe include word counts? Not necessary but ensure.

Need write with precise formal equations. Let's plan sections.

<THINK_TRACE> ~500-700 words. Multi-hop derivation and gray-zone audit. Need discuss:
- Paper's pipeline: input NGS tracking at 10Hz; target PFF; three subtasks: identification, matchup, pressure probability.
- Derivation chain: (1) role classification from position p_i; baseline F1 0.94, dynamic F1 0.99. (2) matchup pairwise classification over 121 pairs; AutoGluon AP 0.969 vs GNN 0.954; GNN overpredicts due sparse links. (3) pressure model per timestamp using RF; play-level Boolean target; max probability evaluated; calibration ECE 0.56, MCE 7.56; accuracy 98.3 all defenders/95.8 rushers. (4) downstream metrics threshold 75%, quick pressure 2.5s, pressure time etc.
- Gray zones: PFF hurry subjectivity; NGS event filtering vs PFF labels; quarterback/passer trick plays; action filter truncation; moving average endpoints; RF granularity; calibration underconfidence at high p; class imbalance; blocker interference unnormalized; GNN overprediction; weather absent; no force measurement.
- Need mention assumptions and breakdown. Maybe in this section too? But main equations in SOURCE. Keep THINK_TRACE narrative.

<SOURCE_OPERATORS_AND_EQUATIONS> ~600 words. Need formal LaTeX with units. Include:
1. Role assignment:
$$
\hat r_i = \arg\max_{c\in\{\text{rush},\text{block},\text{route},\text{coverage},\text{other}\}} p_i(c)
$$
with rule: pass_rush if max p_i = p_i(pass_rush), pass_block if max = p_i(pass_block), else other. Probabilities dimensionless, sum_c p_i(c)=1. Breakdown tie or missing position; low OLB/LB.
2. GNN loss:
$$
\mathcal L = \mathrm{BCE}_{node} + \lambda \mathrm{BCE}_{link},\quad \mathrm{BCE}(y,p)=-[y\ln p+(1-y)\ln(1-p)]
$$
units nats (if natural log); λ dimensionless; assumption independent binary labels. Breakdown λ→∞ link loss dominates, λ→0 node only; link sparsity.
3. Edge condition: e_{ij}=1 if min_t ||x_i(t)-x_j(t)|| < 3 yd; convert 3 yd = 2.7432 m. If no edge, isolated node; if many edges, dense graph. Need exact quote "less than three yards".
4. Blocker interference:
Let r,q,b_i in R^2 (yards). v=q-r, u_i=b_i-r.
Eligibility: cosθ_i = v·u_i/(||v|| ||u_i||) > 0; remove b_i behind passer. Orthogonal distance:
d_i = ||u_i - (u_i·v)/(v·v) v||.
Weight assumed:
w_i = 1 if d_i ≤1 yd; w_i = exp[-α(d_i-1)] if d_i>1 yd, α>0 yd^-1 (paper only says exponential decrease). Blocker interference B = Σ_{i∈E} w_i, dimensionless (if weights dimensionless). Assumptions: single direct path, no occlusion by QB, no blocker velocity. Breakdown: ||v||=0 or ||u_i||=0; v·v=0; α unspecified; no normalization; multiple blockers sum.
5. Pressure target heuristic:
Y_heur = 1 if [min_t ||x_r(t)-x_q(t)|| ≤ 1 yd] or [||x_r(t_pass)-x_q(t_pass)|| ≤1.5 yd]. Units yd/m. Combined with PFF flags PFF pressure = hurry∨hit∨sack. Y = PFF∨Y_heur. Assumption play-level Boolean fixed. Breakdown if pass time missing, passer ID wrong; trick plays.
6. Pressure model estimation:
p_t = \hat P(Y=1 | x_t, B_t). RF with 400 trees; granularity 1/400=0.0025. Smoothing:
\bar p_t = (p_{t-1}+p_t+p_{t+1})/3? "3-step centered moving average" at endpoints requires boundary handling; breakdown at t=1,T. 
7. Calibration ECE/MCE:
ECE = Σ_{b=1}^B (n_b/N)|acc(b)-conf(b)|, MCE=max_b|acc(b)-conf(b)|. Units probability. Break down if N=0 or empty bins; ECE not proper? 
8. Downstream metrics:
Pressure if p>0.75; time to pressure = min{t: p_t>0.75} - t_snap; quick if t_to_pressure ≤2.5 s; pressure time = Σ_t Δt 1[p_t>0.75] (s); avg pressure = (1/T)Σ p_t; pressure rate over expected = avg p - p_snap (percentage points). Positive rush if avg>p_snap; negative if p_snap>avg. Need cite [PAGE 24]. Need mention units seconds, probability, percentage points. Breakdown threshold arbitrary; moving average; max vs timestamp.
9. Maybe accuracy/precision/recall:
Accuracy=(TP+TN)/N; Precision=TP/(TP+FP); Recall=TP/(TP+FN). Units dimensionless. Breakdown denominator zero.

Need maybe not too many equations. Good.

<RETROCAUSAL_GENEALOGY> ~400 words. Historical lineage. Include citations. Multi-week traps. Need maybe "retrocausal" because final play labels (sack/hit/hurry) are used to train per-frame probabilities, then max probability evaluated against play-level label. This is a retroactive attribution: future outcome retrocausally assigns pressure probability at earlier timestamps. Need discuss lineage:
- 2018 ESPN PBWR/PRWR [28] using raw positions/orientations/pairwise distances.
- pre-snap rusher likelihood [29,30], backtracking [31].
- Alamar/Goldner [21,22] lineman effects and survival analysis? Wait [22] Alamar & Goldner blindside, [23] Fernandez & Bornn soccer. Paper says "Previous studies have found correlations between offensive linemen win rates and successful pass completion rates [23]" but [23] is Wide Open Spaces soccer? Actually references mismatched? Need not question. We can mention as cited.
- STRAIN [18], IDPI [15], Yurko [6], GNN [9,10], AutoGluon [8,11], calibration [36,37].
- Multi-week traps: label drift, event drift, threshold drift, smoothing drift, GNN overprediction, calibration underconfidence. Need cite quotes. Good.

<RECURSIVE_THEORY_OF_MIND> ~400 words. Crisis habit regression vs counter-trap vs clock. Need frame as multi-agent recursive modeling:
- Agents: rusher, blocker, QB, labeler, analyst. Model estimates labeler's latent decision.
- Crisis habit regression: when play breaks (scramble), NGS event truncates pass rush; model regresses to low pressure / no label despite PFF sack [PAGE 14]. Also class imbalance biases toward no pressure [PAGE 10? "neural network tended not to make strong probability estimates and instead biased towards no pressure" [PAGE 10]]. Labeler may habitually assign sack to tackler after scramble.
- Counter-trap: model could learn "near QB = pressure" shortcut; blocker interference is counter-trap [PAGE 8, A.2]. If double team, near QB not enough. Also calibration is counter-trap to overconfidence. Need recursive: model should infer blocker's constraint and labeler's threshold.
- Clock: time-to-pressure, quick pressure ≤2.5s, pressure time, 75% threshold. The "clock" distinguishes pressure before/after event. Need cite Table A.3 [PAGE 24]. Critical: if moving average and event filter shift clock, metrics change. Need mention recursive ToM: labeler's "hurry" is subjective [PAGE 3], so model must estimate a distribution over labeler thresholds, not ground truth. Good.

<CROSS_LAYER_VETO_ADJUDICATION> ~400 words. Need physical/biomechanical/weather veto proof. 
- Physical/kinematic veto: derive physical feasibility bound. Let d_t = ||q_t - r_t||. Radial closing speed \dot d_t = ((q-r)·(v_q-v_r))/d_t. If \dot d_t ≥0 (not closing), pressure by proximity cannot increase through radial motion; any increase must come from lateral/blocker changes. Earliest contact time t_c ≥ (d_t - d_contact)/max(0,-\dot d_t) if closing. With d_contact=1 yd or 1.5 yd. If model predicts 100% before t_c, veto unless labeler hurry or block interference changes. Units m/s. Break down if d_t=0, v_close≤0, acceleration changes.
- Biomechanical: speed/acceleration source; no force; pressure is not mechanical. Use acceleration bound: a_max? Paper doesn't provide. Could mention if acceleration vector exceeds plausible or inconsistent with speed derivative, veto; but no threshold in source. Need not invent. State "source gives s,a,sX,sY, but not force; any force claim is unsupported." 
- Blocker interference physical veto: if B high, near-QB probability should not be maximal; but no strict veto because hurries can occur through unblocked path. 
- Weather: no weather features in Table A.1 [PAGE 22]; no weather layer. Therefore weather veto cannot be proven from source. Any weather claim is out-of-source and must be marked unsupported. Need cite Table A.1. Good.
- Cross-layer adjudication rules: accept pressure prediction only if (i) kinematic feasibility, (ii) event filter consistency, (iii) blocker interference not contradicted, (iv) calibration confidence; weather requires external dataset. Need mention "proof" as conditional: no evidence in source. Good.

<RLVR_COUNTERFACTUAL_VETOES> ~400 words. Three scenarios:
1. Ablate blocker-interference. Prediction: model calibration worsens, especially for rushers near passer with blockers; ECE increases above 0.56%, MCE above 7.56%, precision pressure drops below 84%? Need cite baseline. If no drop, claim that blocker interference is necessary is vetoed. Verifiable by retraining RF identical features minus B, eval 2022. 
2. Perturb event end filter: include frames after NGS run/pass forward events. Prediction: Fig. 9-type plays produce high pressure after pass rush ended, false positives increase, calibration worsens. If no increase, action-filter claim vetoed. Need cite [PAGE 14] quote.
3. Label counterfactual: replace PFF labels with heuristic-only or perturb hurry labels. Prediction: model should change high-probability calibration because PFF hurry subjective; if identical, then label source not causal. Actually maybe test: swap PFF hurry labels randomly? Prediction calibration degrades; but we want veto scenario. Need design with prediction: randomize 10% of hurry labels; if model calibration unchanged, label noise claim vetoed. But can we verify? Need "verifiable predictions": ECE increase, precision pressure decrease. 
Alternative 3: GNN edge threshold 3 yards. Vary threshold 3 to 5 yards; prediction GNN link AP changes; if invariant, edge construction not causal. But paper already GNN AP 0.954 vs AutoGluon 0.969; overpredict. Maybe better: GNN overprediction due sparsity; counterfactual: increase λ link loss or reweight negatives; prediction overprediction decreases, AP improves toward AutoGluon 0.969. Veto if no change. Need cite [PAGE 7]. This is verifiable. But need 3 "RLVR veto scenarios + predictions". Use one label, one feature, one event. Good.

Need ensure total depth. Let's draft.

Need be careful with "pressure" and "hurry" quote. Need exact quotes; check text:
- "pass rushing statistics only include the final outcomes of a play, e.g., sack and pass-made." It says "pass-made" maybe weird. Use exact.
- "Pressure is broken down into three types: hurry, hit, and sack." exact.
- "Hurry on the other hand is a more subjective concept and different labelers may not assign a hurry the same way on the same play." exact (from PAGE 3-4).
- "If a player is within 1 yard of the direct path, they are assigned a value of 1 otherwise their influence decreases exponentially." exact.
- "we define pressure as any play where a rusher gets within 1 yard of the passer during the pass rush or within 1.5 yards of the passer at the time of the pass." exact.
- "The final random forest model uses 400 estimators." exact.
- "Final probability estimates were smoothed using a 3-step centered moving average to make the probabilities more consistent over time and limit the presence of spikes." exact.
- "The expected calibration error (ECE) indicates that we can expect the predicted probability to be within 0.6% of the truth and the maximum calibration error (MCE) says that the maximum error expected is about 7.6%" exact? It says "The expected calibration error (ECE) indicates that we can expect the predicted probability to be within 0.6% of the truth and the maximum calibration error (MCE) says that the maximum error expected is about 7.6% [36, 37]." Use.
- "Our model achieves 98.3% accuracy when looking at all defenders and 95.8% accuracy when looking only at rushers" exact.
- "NGS event definitions will be treated as the truth." exact.
- "Many of the instances of high predicted pressure with no positive label were in instances that would be classified as hurries instead of sacks or hits." exact.
- "A player affects the quarterback as determined by the pressure probability exceeding 75%." exact from Table A.3.
- "Quick pressures: A pressure that occurs with the first 2.5 seconds after the snap" exact.
- "Pressure time: The total duration of time the player spends above the 75% pressure threshold" exact.
- "Pressure rate over expected: The difference between the average pressure and the pressure at the snap" exact.
Need cite page for Table A.3: It appears after page 24? The markdown has "Table A.3. A list of the pass rusher metrics..." page 24. So cite [PAGE 24].

Need maybe mention PAGES: 22 but source page numbers up to 25. To avoid conflict, cite visible page numbers. Fine.

Need include "SI/information/probability units": Use yards and meters; BCE nats; probability dimensionless; time seconds; acceleration m/s² or yd/s². Paper uses yards, speed/acceleration scaled. Need not overdo. We can mention "source-native coordinates are in yards; SI conversions: 1 yd = 0.9144 m; 1 yd/s = 0.9144 m/s; 1 yd/s² = 0.9144 m/s²." Is that accurate? Yes. But paper says speed/acc scaled standard scaling, not raw. Need mention raw units not fully specified after scaling. Good. Information units: BCE if natural log = nats, if log2 = bits. Paper doesn't specify base; note assumption. Good.

Need "ZERO TOY EQUATIONS": Our equations are either paper or formal reconstruction. Need avoid fake ratios. Use BCE, ECE, kinematics, pressure metrics. Good.

Need "ZERO BETTING LINES": Avoid "over/under", "spread", "moneyline", "odds". "Pressure rate over expected" includes over expected but not betting. Fine.

Need maybe "average pressure probability 28.3%, among 292 pass rushers..." no betting. Fine.

Need answer with XML tags exactly. Could include a brief intro outside? Better only tags. Need ensure no markdown conflicts? Use LaTeX within tags.

Let's draft in final. Need maintain word count. Let's estimate:
THINK_TRACE ~700 words.
SOURCE ~800 words.
RETRO ~350.
RECURSIVE ~350.
CROSS ~400.
RLVR ~350.
Total ~2950. Good.

Need include citations [PAGE N] with exact quotes. Ensure "verbatim quotes" maybe use quotation marks. Good.

Need be precise in THINK_TRACE with multi-hop derivation. Let's write.

Potential issue: "pass-made" quote weird. Use exact quote. Good.

Need mention "blocker/rush identification problem entails identifying defensive blockers and offensive rushers" but actually role names reversed? Paper says "defensive blockers and offensive rushers" maybe typo. We can quote if needed. Avoid.

Need "0.99 overall accuracy" quote from PAGE 2. Good.

Need "0.97 average precision, 0.9 precision and 0.91 recall" quote PAGE 2. Good.

Need "0.954 Average Precision for GNN compared to 0.969 for AutoGluon" quote PAGE 7? Use exact: "While GNN’s performance on matchup prediction is slightly worse and tended to over predict (0.954 Average Precision for GNN compared to 0.969 for AutoGluon)." Good. Cite [PAGE 7].

Need "connect each pair of players who reach a minimum distance during the play of less than three yards" exact [PAGE 7]. Good.

Need "The model is a little under-confident as we get to higher probabilities" exact [PAGE 11]. Good.

Need "The neural network tended not to make strong probability estimates and instead biased towards no pressure since that is the dominant class." [PAGE 10]. Good.

Need "random forest model handled the class imbalance well and provided cleanly calibrated and consistent probability estimates." [PAGE 10]. Good.

Need "Pressure rate over expected" description exact. Good.

Need "Pressure" metric threshold 75% exact. Good.

Need "Quick pressures" exact. Good.

Need "Pressure time" exact. Good.

Need weather absence: Table A.1 features only passer, player, context; no weather. Cite [PAGE 22]. Good. Quote "Table A.1. Primary features from NFL’s NextGenStats player tracking data." [PAGE 22]. Good.

Need "action filtering" quote: "If there is a pass or a quarterback sack, then that is the defined end of the play." [PAGE 9]? Actually page 9. Good.

Need "Due to presence of trick plays" quote? [PAGE 9]. Good.

Need "The NGS event definitions will be treated as the truth." [PAGE 14]. Good.

Need "inconsistencies between the NGS events and the labeler interpretations of the play activity were the primary source of outlier errors" [PAGE 10-11]. Use. Good.

Need "pressure labels are evaluated by PFF based on activity prior to ball being thrown" [PAGE 9]. Good.

Need "players are assigned a pressure flag even at the snap" [PAGE 9]. Good.

Need "max probability as this is most similar to how PFF labels were determined" [PAGE 11]. Good.

Need "calibration primary metric" [PAGE 11]. Good.

Need "calibration primary metric" maybe.

Need not overquote too many; enough.

Need ensure "THINK_TRACE" is not too much like summary; include derivation and gray-zone audit. Good.

Need maybe mention "singularity/breakdown regimes" in SOURCE_OPERATORS. Good.

Need maybe mention "assumptions" explicitly. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Need formal kinematic veto equation. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" three scenarios with predictions. Good.

Let's write final.

Need maybe include "RLVR" acronym? We can say "RLVR-style verifiable-reward veto." Good.

Need avoid "betting" words. Use "no wagering-relevant output." No need.

Need maybe mention "PAGES: 22" vs page 24. Hmm. If citation [PAGE 24] but user said 22 pages, could be issue. But source text includes page 24. Maybe "PAGE 24" is exact visible marker. Could use [PAGE 22] for Table A.1. Table A.3 appears page 24. The source says PAGES: 22 but actual markdown page numbers up to 25. Maybe the PDF page count is 25, but user says 22. Could be extraction includes extra pages? Hmm. The instruction says PAGES: 22; exact [PAGE N] markers. They likely expect source page numbers as in text. We can cite visible page numbers. It's okay.

Need maybe "PAGE 3" for data overview; "PAGE 4" for rule-based. Good.

Need include "verbatim quotes" exact punctuation. Ensure quote from PAGE 3: "Tracking data is measured for each of the 22 players on the field at a rate of 10Hz." It says "10Hz" no space. Good.

Need "Table A.1" quote exact: "Table A.1. Primary features from NFL’s NextGenStats player tracking data." Good.

Need "The final random forest model uses 400 estimators." exact.

Need "Final probability estimates were smoothed using a 3-step centered moving average to make the probabilities more consistent over time and limit the presence of spikes." exact.

Need "ECE" quote: It says "The expected calibration error (ECE) indicates that we can expect the predicted probability to be within 0.6% of the truth and the maximum calibration error (MCE) says that the maximum error expected is about 7.6%" exact. Use.

Need "Pressure rate over expected: The difference between the average pressure and the pressure at the snap" exact.

Need maybe "positive rushes" and "negative rushes" exact? Not necessary.

Need "Pressure time: The total duration of time the player spends above the 75% pressure threshold" exact.

Need "Quick pressures: A pressure that occurs with the first 2.5 seconds after the snap" exact. Note grammatical "with the first" not "within". Use exact.

Need "A player affects the quarterback as determined by the pressure probability exceeding 75%." exact.

Need maybe "time to pressure" exact: "Time from snap until the rusher's pressure first exceeds 75%" exact. Good.

Need "Pressure at snap" exact? No.

Need write.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s core derivation is a three-stage decomposition from raw tracking to a temporal pressure probability. First, it converts 10 Hz player tracking and contextual data into role labels and blocker-rusher matchups. The source states that “Tracking data is measured for each of the 22 players on the field at a rate of 10Hz” [PAGE 3], and it uses Pro Football Focus (PFF) human labels as targets for blocker, rusher, matchup, hurry, hit, and sack [PAGE 3]. The baseline role rule assigns each position to its highest-probability role; the dynamic AutoGluon models raise F1 from about 0.94 to about 0.99 [PAGE 4]. The second hop is pairwise matchup estimation over 121 offensive-defensive pairs, where the paper reports “0.97 average precision, 0.9 precision and 0.91 recall” on a 2022 test set [PAGE 2]. The graph formulation sets players as nodes and matchups as edges, with edges created when pairs “reach a minimum distance during the play of less than three yards” [PAGE 7]. The GNN solves node and link prediction jointly, but its matchup average precision is “0.954 Average Precision for GNN compared to 0.969 for AutoGluon” [PAGE 7], and it “tended to over predict” because links are sparse [PAGE 7]. Third, the pressure model predicts a play-level Boolean pressure label from per-timestamp features. It explicitly adds blocker-interference because “there is a big difference between a player being two yards away from the passer, but facing a double team and a player being the same distance with no blockers in his way” [PAGE 8]. The heuristic target defines pressure as “any play where a rusher gets within 1 yard of the passer during the pass rush or within 1.5 yards of the passer at the time of the pass” [PAGE 9]. The final random forest uses 400 estimators [PAGE 10] and smooths probabilities with a “3-step centered moving average” [PAGE 10]. Evaluation uses maximum play pressure, because a human labeler assigns pressure based on the point of maximum pressure [PAGE 11]. Calibration is treated as primary: ECE is reported as about 0.6% and MCE as about 7.6% [PAGE 11]. Classification at the play level reaches “98.3% accuracy when looking at all defenders and 95.8% accuracy when looking only at rushers” [PAGE 12]. Downstream metrics then threshold the probability at 75% to define pressure, time-to-pressure, quick pressure, pressure time, average pressure, and pressure rate over expected [PAGE 24].

The gray-zone audit is critical. The label itself is not a clean physical observable: “Pressure is broken down into three types: hurry, hit, and sack” [PAGE 3], and “Hurry on the other hand is a more subjective concept and different labelers may not assign a hurry the same way on the same play” [PAGE 3]. The model therefore estimates a labeler-influenced event, not a direct force. A second gray zone is event boundary mismatch: the paper says “NGS event definitions will be treated as the truth” [PAGE 14], yet PFF may label a sack after a scramble that NGS treats as the end of the pass rush [PAGE 14]. This produces the Fig. 9 outlier, where the model’s legitimate pass-rush window is truncated while PFF assigns a sack. A third gray zone is that high predicted pressure without a positive label is often a hurry-type judgment: “Many of the instances of high predicted pressure with no positive label were in instances that would be classified as hurries instead of sacks or hits” [PAGE 15]. A fourth gray zone is calibration underconfidence at high probabilities; the paper admits “The model is a little under-confident as we get to higher probabilities” [PAGE 11]. A fifth is the neural baseline’s class-imbalance habit: “The neural network tended not to make strong probability estimates and instead biased towards no pressure since that is the dominant class” [PAGE 10]. The random forest is chosen because it “handled the class imbalance well and provided cleanly calibrated and consistent probability estimates” [PAGE 10]. The remaining audit issue is that blocker-interference is an engineered scalar with an unspecified exponential decay, and the GNN link threshold and class imbalance are not neutral modeling choices. Weather is absent from the feature table [PAGE 22], so any weather-based inference is outside the source’s evidential boundary.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(p_i(c)\) be the probability that position \(i\) has role \(c\in\{\text{pass\_rush},\text{pass\_block},\text{pass\_route},\text{coverage},\text{other}\}\), with \(p_i(c)\ge 0\) and \(\sum_c p_i(c)=1\) (dimensionless). The paper’s rule-based role assignment is
\[
\hat r_i=
\begin{cases}
\text{pass\_rush}, & \max_c p_i(c)=p_i(\text{pass\_rush}),\\
\text{pass\_block}, & \max_c p_i(c)=p_i(\text{pass\_block}),\\
\text{other}, & \text{otherwise}.
\end{cases}
\]
This is the rule described on [PAGE 4]. Breakdown regimes: ties in \(\max_c p_i(c)\), missing position labels, and position groups with genuinely mixed roles. The paper reports low baseline accuracy for OLB, LB, FB, and RB [PAGE 4], which is exactly the mixed-role regime.

For the unified graph model, the loss is
\[
\mathcal L
=
\mathrm{BCE}_{\text{node}}
+
\lambda\,\mathrm{BCE}_{\text{link}},
\qquad
\mathrm{BCE}(y,p)=-\big[y\ln p+(1-y)\ln(1-p)\big],
\]
as stated on [PAGE 7]. Here \(y\in\{0,1\}\), \(p\in[0,1]\), \(\lambda\ge0\) is dimensionless, and the BCE unit is nats if \(\ln\) is natural log; if base-2 log were used, the unit would be bits. The paper does not specify the log base, so the unit must be declared by implementation. Breakdown regimes: \(\lambda\to\infty\) makes link prediction dominate and can destabilize node labels; \(\lambda\to0\) makes the GNN a node-only model; sparse positive links create the overprediction reported on [PAGE 7]. The edge rule is
\[
e_{ij}=1
\quad\text{if}\quad
\min_t \| \mathbf x_i(t)-\mathbf x_j(t)\| < 3\ \text{yd},
\]
with \(3\ \text{yd}=2.7432\ \text{m}\). If no pair satisfies the threshold, nodes are isolated; if many pairs satisfy it, the graph becomes dense and the link class is no longer sparse.

Blocker-interference is reconstructed as follows. Let \(\mathbf r,\mathbf q,\mathbf b_i\in\mathbb R^2\) be rusher, passer, and blocker positions in yards, and set
\[
\mathbf v=\mathbf q-\mathbf r,\qquad \mathbf u_i=\mathbf b_i-\mathbf r.
\]
The cosine eligibility test is
\[
\cos\theta_i=
\frac{\mathbf v\cdot\mathbf u_i}{\|\mathbf v\|\,\|\mathbf u_i\|}>0,
\]
which removes blockers behind the rusher; blockers behind the passer are also removed [PAGE 8]. The orthogonal distance to the rusher-passer line is
\[
d_i=
\left\|
\mathbf u_i-
\frac{\mathbf u_i\cdot\mathbf v}{\mathbf v\cdot\mathbf v}\mathbf v
\right\|.
\]
The paper says: “If a player is within 1 yard of the direct path, they are assigned a value of 1 otherwise their influence decreases exponentially” [PAGE 8]. A transparent formalization is
\[
w_i=
\begin{cases}
1, & d_i\le 1\ \text{yd},\\
e^{-\alpha(d_i-1\ \text{yd})}, & d_i>1\ \text{yd},
\end{cases}
\qquad
B=\sum_{i\in\mathcal E}w_i,
\]
with \(\alpha>0\) in \(\text{yd}^{-1}\); the source does not give \(\alpha\), so this is an explicit underdetermined assumption. Breakdown regimes: \(\|\mathbf v\|=0\) or \(\|\mathbf u_i\|=0\) makes the angle undefined; \(\mathbf v\cdot\mathbf v=0\) makes the projection undefined; \(\alpha\) unspecified makes the exponential scale non-identifiable; the sum \(B\) is not normalized, so many distant blockers can accumulate influence. These are gray-zone limitations, not paper-reported equations.

The pressure target combines PFF flags and a heuristic:
\[
Y_{\text{heur}}=1
\iff
\left[
\min_t \|\mathbf x_r(t)-\mathbf x_q(t)\|\le 1\ \text{yd}
\right]
\lor
\left[
\|\mathbf x_r(t_{\text{pass}})-\mathbf x_q(t_{\text{pass}})\|\le 1.5\ \text{yd}
\right],
\]
with \(1\ \text{yd}=0.9144\ \text{m}\) and \(1.5\ \text{yd}=1.3716\ \text{m}\). The combined target is \(Y=Y_{\text{PFF}}\lor Y_{\text{heur}}\), where \(Y_{\text{PFF}}=\text{hurry}\lor\text{hit}\lor\text{sack}\) [PAGE 3, PAGE 9]. Breakdown regimes: missing \(t_{\text{pass}}\), wrong passer ID on trick plays, and labeler disagreement on hurries. The paper explicitly notes that trick plays can require resetting the passer ID and recalculating passer-specific features [PAGE 9].

The per-timestamp pressure model estimates
\[
p_t=\hat{\mathbb P}(Y=1\mid \mathbf x_t,B_t),
\]
with \(p_t\in[0,1]\). The random forest uses 400 estimators, so the raw voting granularity is \(1/400=0.0025\) [PAGE 10]. The smoothing operator is a centered 3-step moving average:
\[
\bar p_t=\frac{p_{t-1}+p_t+p_{t+1}}{3},
\]
with boundary handling required at \(t=1\) and \(t=T\); the paper does not specify endpoint padding [PAGE 10]. Breakdown regimes: endpoint bias, smoothing-induced time shifts, and attenuation of genuine one-frame spikes.

Calibration is measured by
\[
\mathrm{ECE}=\sum_{b=1}^{B}\frac{n_b}{N}\left|\mathrm{acc}(b)-\mathrm{conf}(b)\right|,
\qquad
\mathrm{MCE}=\max_b\left|\mathrm{acc}(b)-\mathrm{conf}(b)\right|,
\]
where \(n_b\) is the count in bin \(b\), \(N=\sum_b n_b\), and both terms are probability units. The paper reports ECE \(0.56\%\) and MCE \(7.56\%\) [PAGE 11]. Breakdown regimes: empty bins make \(\mathrm{acc}(b)\) undefined; ECE depends on binning; maximum-pressure evaluation can hide beginning-of-play miscalibration.

Downstream metrics are formalized with threshold \(\tau=0.75\):
\[
\text{Pressure}_t=1[p_t>0.75],
\]
\[
t_{\text{to pressure}}=\min\{t:p_t>0.75\}-t_{\text{snap}},
\qquad
\text{Quick pressure}=1[t_{\text{to pressure}}\le 2.5\ \text{s}],
\]
\[
\text{Pressure time}=\sum_t \Delta t\,1[p_t>0.75]\quad[\text{s}],
\]
\[
\overline p=\frac{1}{T}\sum_{t=1}^{T}p_t,
\qquad
\text{Pressure rate over expected}=\overline p-p_{\text{snap}}.
\]
These definitions match Table A.3 [PAGE 24]: “A player affects the quarterback as determined by the pressure probability exceeding 75%”; “Quick pressures: A pressure that occurs with the first 2.5 seconds after the snap”; “Pressure time: The total duration of time the player spends above the 75% pressure threshold”; and “Pressure rate over expected: The difference between the average pressure and the pressure at the snap.” Units are seconds for time, probability for \(p_t\), and percentage points for \(\overline p-p_{\text{snap}}\). Breakdown regimes: threshold arbitrariness, moving-average lag, event-filter truncation, and max-probability evaluation versus instantaneous probability.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper is a late node in a lineage that moves from outcome counting to within-play attribution. The introduction says the older statistics “only include the final outcomes of a play, e.g., sack and pass-made” [PAGE 1]. The 2018 ESPN PBWR/PRWR work used “raw positions, orientations and pairwise distances” to determine blocking assignments [PAGE 2]. Pre-snap rusher-prediction work and backtracking assignment models followed [PAGE 2]. The paper also cites STRAIN, which uses “the distance between a rusher and the passer along with the rate of change for those signals” [PAGE 2], and IDPI, which uses an LSTM to compare disruption probabilities with and without a lineman [PAGE 2]. Earlier offensive-line work correlated lineman win rates with completion success and used survival analysis for time-in-pocket [PAGE 2]. The current paper’s advance is to combine role identification, matchup inference, and per-timestamp pressure probability into a single pipeline with calibration as a first-class requirement [PAGE 2, PAGE 11].

The retrocausal structure is explicit: PFF assigns one play-level Boolean pressure label after watching the whole play, but the model assigns probabilities at each timestamp. The paper evaluates “based on the maximum probability as this is most similar to how the PFF labels were determined” [PAGE 11]. Thus the final outcome retroactively supervises earlier states: a sack or hurry that occurs late in the play labels the whole play, and the maximum predicted pressure is the point compared to that label. This is useful but creates a multi-week trap: if a rusher applies pressure early and another rusher records the sack late, the play-level label can still be positive, and max-probability evaluation may credit the late rusher. The paper’s Fig. 8 example shows exactly this pattern: “two players converge on the passer generating high pressure. 4.7s after snap, the passer evaded previous pressure and then pressure is generated by a third player” [PAGE 13]. Another trap is label drift across seasons: the paper trains on a subset of 2018 and evaluates 2019-2022, reporting “negligible differences between the seasons” [PAGE 11], but that stability does not prove label-stationarity for hurries. A third trap is event-definition drift: NGS event boundaries are treated as truth [PAGE 14], while PFF may credit a sack after a scramble. A fourth trap is metric drift after the model: the 75% threshold, quick-pressure cutoff at 2.5 s, and pressure time all depend on smoothing and event filtering [PAGE 24]. These are the multi-week traps: changing the labeler, event feed, smoothing window, or threshold can move the downstream metric without changing the underlying player behavior.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The model is not only predicting a physical event; it is predicting a labeler’s judgment under uncertainty. The labeler’s “hurry” concept is subjective: “different labelers may not assign a hurry the same way on the same play” [PAGE 3]. A recursive theory-of-mind reading treats the rusher as an agent trying to reach the passer, the blocker as an adversary trying to deny the path, the quarterback as an agent trying to escape, the labeler as an observer with a latent threshold, and the analyst as an observer of the model. The blocker-interference feature is the key counter-trap: it prevents the model from collapsing into a one-agent “distance to quarterback equals pressure” heuristic, because a rusher who is close but double-teamed is not equivalent to a rusher who is close with a clear path [PAGE 8]. The appendix figure description makes this explicit: “Blockers X1 and X3 are eligible since they are between the quarterback and the rusher” and the blocker closer to the direct path gets a stronger weight [PAGE 23].

Crisis habit regression appears when the play breaks structure. In the Fig. 9 example, the quarterback scrambles, NGS ends the pass rush, the tackle occurs later, and PFF assigns a sack; the model only predicts through the NGS-defined pass-rush window [PAGE 14]. The habit regression is to treat the later outcome as if it were pressure during the earlier rush. The model’s counter-trap is the event filter and the explicit pass-rush window, while the labeler’s counter-trap is the sack flag. The paper resolves this by declaring “NGS event definitions will be treated as the truth” [PAGE 14], but that is an adjudication rule, not a biological truth. A second crisis habit is class imbalance: the neural model biased toward no pressure because no-pressure dominates [PAGE 10]; the random forest is the chosen counter-trap because it handled imbalance and produced calibrated estimates [PAGE 10]. The clock layer is the temporal discipline: time-to-pressure, quick pressure at 2.5 s, pressure time above 75%, and pressure at snap versus average pressure [PAGE 24]. Without the clock, a late scramble sack could be misread as early pressure. With the clock, the model can distinguish “pressure is developing” from “pressure arrived after the pass-rush event ended.” The recursive ToM conclusion is that the model should estimate a distribution over labeler thresholds and event boundaries, not a single ground-truth pressure state; the paper’s calibration and outlier analysis are the first steps toward that recursive audit.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical layer provides a kinematic veto. Let \(\mathbf r_t,\mathbf q_t\) be rusher and passer positions in meters, \(d_t=\|\mathbf q_t-\mathbf r_t\|\), and \(\dot d_t\) the radial closing speed. If \(\dot d_t<0\), the earliest physically possible contact time from a pure radial approach is bounded by
\[
t_c\ge \frac{d_t-d_{\text{contact}}}{\max(0,-\dot d_t)},
\]
where \(d_{\text{contact}}\) is the paper’s 1 yd or 1.5 yd proximity radius [PAGE 9]. If the model predicts a near-certain pressure before \(t_c\), the prediction is physically suspect unless the pressure is a hurry caused by blocker collapse or lateral movement rather than direct radial closure. Breakdown regimes: \(d_t=0\) makes the bound undefined; \(\dot d_t\ge0\) means radial closing is not occurring; acceleration changes make the linear bound invalid over long horizons. The paper provides speed and acceleration components \(sX,sY,aX,aY\) [PAGE 3], so this is a legitimate kinematic audit, not a force claim. There is no force sensor in the source; pressure probability is not a mechanical pressure in pascals. Any claim that the model measures biomechanical force is unsupported.

The biomechanical layer also vetoes naive proximity claims. A rusher’s acceleration and direction constrain how quickly a path can be corrected; a blocker’s position constrains the available path. The paper’s blocker-interference is a geometric proxy for that constraint, but it is not a full contact model: it uses a direct path, cosine eligibility, orthogonal distance, and an exponential weight [PAGE 8]. The exact exponential coefficient is not given, so the source cannot support a precise biomechanical threshold. A reasonable veto rule is: if the model assigns maximal pressure while blocker interference is high and the rusher’s radial closing speed is nonpositive, the prediction should be flagged for review. This is conditional and probabilistic, not an absolute physical law.

The weather layer cannot be adjudicated from the source. Table A.1 lists passer, player, and context features, but no weather variables such as wind, temperature, precipitation, or field condition [PAGE 22]. Therefore any weather-based veto is out-of-source and must be marked unsupported. The correct cross-layer adjudication is a hierarchy: first, event-window consistency; second, kinematic feasibility; third, blocker-path geometry; fourth, calibration confidence; fifth, external weather only if an external dataset is joined. The paper’s own outlier analysis supports this hierarchy, because it attributes outliers primarily to “inconsistencies between the NGS events and the labeler interpretations of the play activity” [PAGE 10]. Weather is not part of that proof.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
RLVR-style verifiable-reward vetoes should be counterfactual: a claim is accepted only if a specified perturbation produces the predicted measurable change; otherwise the claim is vetoed.

1. Blocker-interference ablation veto. Claim: blocker-interference is causally necessary for calibration and precision. Counterfactual: retrain the same random forest on the same 2018 training subset and 2022 evaluation set, but remove \(B_t\) from the feature vector. Prediction: calibration degrades relative to the reported ECE \(0.56\%\) and MCE \(7.56\%\) [PAGE 11], and pressure-class precision falls below the reported \(84\%\) [PAGE 12], especially for near-passer rushers with high blocker interference. The paper’s appendix says probability is highest when relative distance is low and blocker-interference is very low [PAGE 23]. If ablation leaves ECE, MCE, and precision unchanged, the claim that blocker-interference is necessary is vetoed.

2. Event-window counterfactual veto. Claim: filtering on NGS pass-rush events prevents label contamination. Counterfactual: include all frames after a NGS run or pass-forward event and relabel them as if the pass rush continued. Prediction: Fig. 9-type plays should produce spurious high pressure after the scramble and should increase false positives; the model should lose calibration because the PFF sack occurs after NGS declares the pass rush ended [PAGE 14]. If including post-event frames does not worsen false positives or calibration, the action-filter claim is vetoed.

3. Label-noise counterfactual veto. Claim: PFF hurry subjectivity is a material source of error. Counterfactual: perturb a fixed fraction of PFF hurry labels while holding all tracking features fixed, then retrain and evaluate on unperturbed 2022 labels. Prediction: high-probability calibration and pressure-class precision should degrade, because the paper says “Many of the instances of high predicted pressure with no positive label were in instances that would be classified as hurries instead of sacks or hits” [PAGE 15]. If random hurry-label perturbation leaves ECE, MCE, and precision unchanged, the claim that hurry subjectivity materially limits the model is vetoed. A secondary GNN counterfactual is also verifiable: increase the link-loss weight \(\lambda\) or rebalance negative pairs; the paper predicts GNN overprediction due to sparse links [PAGE 7], so average precision should move toward the AutoGluon \(0.969\) value [PAGE 7]. If it does not, the sparsity explanation is vetoed.
</RLVR_COUNTERFACTUAL_VETOES>