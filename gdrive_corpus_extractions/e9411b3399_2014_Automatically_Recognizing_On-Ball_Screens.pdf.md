---
source: "2014 Automatically Recognizing On-Ball Screens.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 10
model: deepseek/deepseek-v4.1-flash-1017
words: 7191
---

<NATIVE_REASONING>
We need answer to user. Need produce XML sections exactly. Need obey invariants: zero betting lines. We need analyze source. User asks "DRIVE SOURCE" with PDF text. No explicit question, but system says GSE + GSI Frontier Reasoning Foundry. Need deliver deep derivation, audit. Likely want research synthesis? Need infer expected: use source, produce sections. Need not mention odds etc. Need include >=1000 words across exact XML sections. Need cite [PAGE N] exact markers and verbatim quotes. Need formal LaTeX equations, units, assumptions, exact singularity/breakdown regimes. Need source operators/equations. Need retrocausal genealogy. Recursive theory of mind. Cross-layer veto adjudication. RLVR counterfactual vetoes 3 verifiable scenarios + predictions.

Need focus on paper: automatic recognizing on-ball screens. We need derive framework, gray-zone audit, potential traps over multi-week? "multi-week traps" maybe long-horizon research pitfalls. Need no betting lines. We can mention no wagering. Need maintain scientific rigor. Need perhaps identify equations from paper: rule-based segmentation criteria; pairwise distance d_ij(t)=||p_i(t)-p_j(t)||; distance to basket d_iB(t)=||p_i(t)-p_B||; screen moment t_s = argmin_t d_{BH,S}(t); approach/departure; features: mean/min/max? Text is garbled but table 1 likely five values: min, max, mean, slope? Let's inspect page 4. Source text has:
1 
2 
3 
4 
5 
   
 
       
(             )
 
 
 
 ∑      
 
   
(             )
     
 
 
     ∑      
 
   
We need not invent exact formulas where illegible? Need state formal LaTeX equations, units, page citations, breakdown. We can cite exact paper definitions. Need note OCR missing formulas. Need avoid inventing. Could say formulas in Table 1 are partially OCR-corrupted; reconstruct only verifiable structural quantities. Need exact singularity/breakdown regimes: t_s undefined when no unique minimum (ties/plateaus, zero-length action); pairwise distance zero? d=0 attenuates? rule thresholds exact: 10 ft, paint near, ≤2 ft further from basket, defender ≤12 ft, ≥13 frames, same ball-handler. Need note 25 frames/s, average action >1.5s, etc. Performance: 98% sensitivity, 52% PPV segmentation; classifier mean AUROC 0.8309; at 80% PPV sensitivity 82%; global test? Appendix global AUROC 0.7859? Need careful: page 4 says mean AUROC across all splits 0.8309. Figure 5 median AUROC. Page 10 table global classifier on GLOBAL test set 0.7859. Need mention.

Need address "multi-hop derivation and gray-zone audit" maybe derive implications: segmentation high recall low precision; classifier; team-specific similarity; Type 3 ambiguity; limitations self-labeling; personnel flux; no external expert; small data; class imbalance? Need audit.

Need maybe talk about "crisis habit regression vs counter-trap vs clock" in Recursive Theory of Mind. Interpret: when model/system under uncertainty regresses to habits (global classifier), counter-trap (team-specific/Type3), clock (time evolution/personnel changes). Need discuss.

Cross-layer veto: physical/biomechanical/weather veto. In basketball, physical: screen legality, contact, player position, biomechanical: stationary vs moving screen, stance, direction, velocity/acceleration; weather not relevant indoor, but environmental? Arena? We can say weather veto = not applicable in indoor NBA; physical/biomechanical veto proof from tracking data constraints. Need prove how veto overrides classifier. Use exact thresholds and singularity regimes. Could mention "weather" as cross-layer veto for outdoor sports only; for indoor data, no meteorological layer. Need not invent.

RLVR counterfactual vetoes: RLVR = reinforcement learning from verifiable rewards? Need 3 verifiable scenarios + predictions. Need not betting. Could propose interventions: (1) remove/perturb one threshold (screener distance 10 ft) and see segmentation recall/PPV changes; prediction. (2) swap labels/Type 3 holdout; predict AUROC drop; (3) shuffle team-specific similarity and retrain augmented classifier; predict no benefit if similarity not causal. Need "verifiable" with metrics and exact predictions. Need include counterfactual veto logic: if predictions fail, reject causal claim. Need not fake numbers? We can state expected direction and threshold. "Prediction: PPV at fixed sensitivity falls" etc. Need formal.

Need answer with XML only? Probably. Need include >=1,000 words. Need ensure each section present. Need THINK_TRACE >=400 words. Overall maybe 2500-3500 words. Desired oververbosity 5 but invariant deep. Need satisfy exact XML. No markdown? XML tags. Need include LaTeX equations. Need cite [PAGE N] markers and verbatim quotes. Need quote exact text. Need avoid betting lines. Need no mention spreads/totals/moneylines/odds. Could say "No betting or odds layer is used." But invariant says zero betting lines: never mention spreads/totals/moneylines/odds. "odds" word? Don't mention. Avoid any betting terms. Fine.

Need be careful with "units" in equations. Define p_i(t) in feet? Paper uses feet for thresholds. Position table {x,y}; likely coordinates? It uses ft. We can define units in ft. Time in frames or seconds; frames at 25 Hz. d in ft. Velocity ft/s if derivative. Feature dimensions. Labels ±1. Feature vector dimension 150. SVM equations. Need use LaTeX.

Need exact source quotes. We can cite [PAGE 1] for rule criteria. Quote exact:
"IF [ there is a player who is dribbling the ball (i.e., the ball-handler) AND there is an offensive player within 10 feet of the ball-handler (i.e., the screener) ... ] for >=13 consecutive frames AND the ball-handler is the same for every frame THEN identify as action"
Need cite [PAGE 1]. Page 1 says position table at 25 frames a second; event table. Page 2 says average length just over 1.5 seconds; segmentation sensitivity 98%, PPV 52%. Page 2 Type categories. Page 3 labels +1/-1, 30 features, ballhandler etc. Page 3 screen moment definition? Page 3: "We define the moment of the screen, , as the time when the pairwise distance between the ball-handler and the screener is at a minimum." Page 4 feature extraction 30 -> 150. Page 4 SVM. Page 4 mean AUROC 0.8309; 80 PPV 82 sens. Page 6 optimal classifier 56% or less training data; Type 3. Page 6 limitations self-labeling. Page 7 future. Page 9 data sizes. Page 10 AUROC matrix.

Need formulate equations:
Let \(\mathbf{p}_i(t)=(x_i(t),y_i(t))\in\mathbb{R}^2\) in ft; ball \(\mathbf{p}_B(t)=(x_B,y_B,z_B)\) but use basket \(\mathbf{b}\in\mathbb{R}^2\).
\(d_{ij}(t)=\|\mathbf{p}_i(t)-\mathbf{p}_j(t)\|_2\) ft.
\(d_{iB}(t)=\|\mathbf{p}_i(t)-\mathbf{b}\|_2\) ft.
\(t_s = \arg\min_{t\in[a,b]} d_{BH,S}(t)\) frames, with tie/plateau breakdown.
Approach \(A=[t_0,t_s)\), departure \(D=(t_s,t_1]\). For each pairwise distance \(d(t)\), Table 1 five features. OCR missing exact. We can say paper's Table 1 lists five continuous summaries per time series; from context, features characterize level and trend before/after t_s. But need exact? Could derive formal generic features:
\(f_1=\min_{t\in A} d(t)\), \(f_2=\max_{t\in A} d(t)\), \(f_3=\frac{1}{|A|}\sum_{t\in A}d(t)\), \(f_4=\min_{t\in D} d(t)\), \(f_5=\max_{t\in D} d(t)\)? Is that accurate? Need check Table 1 OCR. Let's attempt infer from known paper "Automatically Recognizing On-Ball Screens" MIT. Table 1 features? The text shows:
1 
2 
3 
4 
5 
   
 
       
(             )
 
 
 
 ∑      
 
   
(             )
     
 
 
     ∑      
 
   
Maybe features: average distance before screen, average distance after screen, minimum distance, maximum distance? Hmm.

Could search memory? I don't have internet but maybe know. Paper uses 30 continuous features: for each of 6 pairwise interactions? Ballhandler, screener, on-ball defender, basket. Pairwise interactions between BH, screener, defender, basket. "Let p_i represent position... measure pairwise distance between two players... and between player and basket." There are 3 players + basket = 6 pairs: BH-S, BH-D, S-D, BH-B, S-B, D-B. For each pairwise distance time series, 5 continuous values. "This screen moment divides action into two halves: approach and departure. Given pairwise distance... summarize each time series using 5 continuous values" Table 1 likely:
1) distance at t_s (minimum)
2) average distance during approach
3) average distance during departure
4) average change in distance during approach
5) average change in distance during departure?
OCR shows ∑ symbols maybe averages. Could be:
1) \(d(t_s)\)
2) \(\frac{1}{t_s - t_0} \sum_{t=t_0}^{t_s} d(t)\)
3) \(\frac{1}{t_1 - t_s} \sum_{t=t_s}^{t_1} d(t)\)
4) \(\frac{1}{t_s - t_0} \sum (d(t)-d(t-1))\)
5) ...
But not safe. We can state "the exact five formulas are not fully recoverable from OCR; use notation \(F_k(d)\) for the paper's five summaries and flag this as an audit limitation." But user demands formal equations. We can give exact structural equations and generic feature functional. That's acceptable if not inventing? Need mention exact formulas not legible. But invariant says when source pages provided cite exact quotes. It doesn't demand formulas for every table. Need zero toy equations. We can formalize known.

Need discuss SVM:
Training set \(\mathcal{D}=\{(\mathbf{x}_n,y_n)\}_{n=1}^N\), \(y_n\in\{-1,+1\}\), \(\mathbf{x}_n\in\mathbb{R}^{150}\). Linear classifier \(f(\mathbf{x})=\mathbf{w}^\top\mathbf{x}+b\), decision \(\hat y=\operatorname{sign}(f(\mathbf{x}))\). Learned via LIBSVM; cost parameter via 5-fold CV. Need soft-margin primal maybe:
\(\min_{\mathbf{w},b,\xi} \frac12\|\mathbf{w}\|^2 + C\sum_n \xi_n\) subject \(y_n(\mathbf{w}^\top\mathbf{x}_n+b)\ge 1-\xi_n,\xi_n\ge0\). This is standard, not from paper but formal. Cite [PAGE 4] for SVM. Units: \(\mathbf{x}\) dimensionless after binary discretization; \(\mathbf{w}\) inverse feature units? Since binary, dimensionless. b dimensionless. C dimensionless hyperparameter. AUROC dimensionless probability.

Segmentation rule as indicator:
\(A(t)=1\) iff \(Dribble(t)\land \exists S: d_{BH,S}(t)\le10 \land \neg Paint_{near}(S,t) \land d_{S,B}(t)\le d_{BH,B}(t)+2 \land \exists D: d_{BH,D}(t)\le12 \land \neg Paint(Ball,t)\). Wait condition "screener is no more than 2 ft. further from the basket than ball-handler is": \(d_{S,B}(t) \le d_{BH,B}(t)+2\) ft. Yes. "basketball is not in the paint." Need define. For ≥13 consecutive frames at 25 Hz => duration ≥0.52 s. Average action 1.5 s. Need same ballhandler every frame. This is exact. Need mention if multiple candidates satisfy? Paper doesn't specify tie-breaking; gray-zone. Good.

Need "exact singularity/breakdown regimes": 
- \(t_s\) argmin nonunique: plateau/ties, zero-length or one-frame action; if \(d_{BH,S}\) minimum over interval, no unique screen moment. 
- Screen moment at boundaries \(t_s=t_0\) or \(t_s=t_1\), approach/departure empty; features undefined/NaN. Paper likely avoids? Need mention.
- Pairwise distance zero if players coincide (tracking collisions) can create min; but actual screen is near zero contact? d=0 possible due to occlusion/tracking error. 
- Rule thresholds produce discontinuities at 10 ft, 2 ft, 12 ft, paint boundary; tiny coordinate errors cross threshold. 
- 25 Hz sampling: events shorter than 40 ms invisible; 13-frame window 0.52 s. 
- Homonym: handoffs excluded; if ballhandler changes, action split. 
- Type 3 ambiguity: same kinematics, screen/no-screen; classifier AUROC limited. 
- Team-specific similarity not symmetric; transitive closure invalid. 
- Training/test splitting by team balanced but random split can leak? They select 27 pos/27 neg per team, then split 14/14 and 13/13. Could there be same action? No. But random splits repeated 200. Need audit.
- Labels self-labeled, not external; positive if annotation between start/end; if any doubt excluded. This biases labels and PPV. 
- PPV 52% segmentation: half actions contain screen. Classifier at 80% PPV/82% sensitivity. Need mention global classifier AUROC 0.8309 mean across splits; table GLOBAL on GLOBAL 0.7859 maybe different. Need explain discrepancy: mean across 200 random splits vs single matrix? The table likely one split? Page 10 shows global classifier on global test set = 0.7859; team-specific matrix. Need not reconcile but mention both.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Need discuss lineage: pick-and-roll strategic importance (Stan Van Gundy quote page 1; NYT 2009); player tracking SportVu 2012-13; SVM lineage Cortes & Vapnik 1995; LIBSVM 2011; pattern recognition in sports; later optical tracking/pose estimation. Retrocausal genealogy: how later needs (spacing, switch, personnel-specific) retroact to justify segmentation and features. Multi-week traps: overfitting to one season, team style drift, roster changes, rule changes, tracking system changes, label drift, class definition (handoff exclusion), Type 3 taxonomy instability, similarity non-symmetry, data leakage across quarters/games, threshold tuning on test? Need "multi-week traps" maybe over multiple weeks of data collection. Discuss.

Need "RECURSIVE_THEORY_OF_MIND": Crisis habit regression vs counter-trap vs clock. Need interpret as model of coach/analyst/classifier? We can write: In crisis (low PPV, Type 3 ambiguity), the system regresses to habitual global classifier or hand-coded thresholds; counter-trap is team-specific classifier that can overfit to style; clock is temporal distribution shift (personnel, game state, season). Recursive ToM: analyst models coach's intent; classifier models screener intent; defender models screen; labels model annotator doubt. Need mention "if any doubt, did not include" [PAGE 3] creates a conservative labeler policy; classifier learns from labeler's theory of mind. Need discuss recursive: defender anticipates screen; screener anticipates defender; ballhandler anticipates; model observes kinematics only, not intent. Need counter-trap: Type 3 may or may not set screen [PAGE 2], so classifier must infer intent from motion; team-specific classifier may learn "GSW/HOU spacing" vs "OKC brush screens" [PAGE 6]. Clock: within action, screen moment divides approach/departure; within season, team styles change; over weeks, personnel changes [PAGE 6]. Need maybe propose recursive belief state:
\(b_t^{(role)}(\text{screen intent})\)? Could formalize but not toy? We can use probability. But avoid fake ratios. We can state belief update? Maybe not needed.

Need "CROSS_LAYER_VETO_ADJUDICATION": Physical/biomechanical/weather veto proof. Need explain: A classifier may label screen but physical layer vetoes if screener not stationary? Paper identifies screener by "how long stationary, approaches ball-handler, closeness" [PAGE 3]. Biomechanical: legal screen requires stationary position? In NBA, moving screen foul if illegal contact; but paper doesn't use contact/fouls. So physical veto: if no legal screening position/contact? Need careful: paper's definition is not official legality; it recognizes on-ball screens, not legality. Cross-layer veto can overrule positive if tracking indicates handoff (excluded) or no screen due to physical impossibility. Weather: indoor sport, no weather layer; if outdoor, wind/rain affects ball tracking and player biomechanics; for this dataset, veto is null. Need "proof" as formal adjudication: Let \(L_{\text{ML}}\in\{+1,-1\}\). Let \(V_{\text{phys}}\in\{0,1\}\) be hard constraint. Final label \(L=+1\) iff \(L_{\text{ML}}=+1 \land V_{\text{phys}}=1\). Hard constraints: \(d_{BH,S}\) minimum unique; screener stationary sufficient; no handoff; ballhandler stable; tracking quality. But need not invent thresholds beyond paper. For biomechanical: paper uses "how long stationary" as feature not hard. We can say hard veto only for source-explicit exclusions: handoffs not considered screens [PAGE 3]; ball-handler must be dribbling and same for every frame [PAGE 1]; if most recent event not dribble, reject frame [PAGE 3]. For physical: if action lacks dribble or ballhandler changes or outside 13 frames, segmentation rejects. For weather: no meteorological variable in tables [PAGE 1], so no weather veto can be computed; any weather claim is out-of-domain. Need mention "proof" = source evidence: Position table has x,y,z ball and x,y players at 25 fps; Event table play-by-play; no weather variables. Thus weather veto unavailable, not false. Good.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. Need define RLVR: Reinforcement Learning from Verifiable Rewards? In this context, we can propose counterfactual tests with objective metrics. Need ensure "verifiable" with held-out data and pre-registered metrics. Need 3 scenarios:
1. Threshold ablation / perturbation: change 10 ft to 8 or 12, 12 ft to 10/14, 2 ft to 0/4, and 13 frames to 9/17. Prediction: segmentation sensitivity and PPV move monotonically? Wider screen distance increases recall but lowers PPV. Need exact prediction? "PPV decreases and sensitivity increases" for widening; if widening fails to increase recall by ≥x or PPV not decrease, threshold causal model rejected. Verifiable. Need not mention odds. 
2. Type 3 stratification: Hold out Type 3 actions, train on Type 1/2 only; predict AUROC on Type 3 near chance or lower than overall; if AUROC remains high, the Type 3 ambiguity explanation is falsified. Need exact: "Type 3 AUROC should be materially below global mean 0.8309; a pre-specified margin e.g. ≤0.75." This is verifiable. Or ablate Type 3 from test: overall AUROC should rise; if not, Type 3 not main error source.
3. Team-specific similarity permutation: Permute similarity ranks and retrain augmented classifiers; if real similarity ranking is causal, optimal training subset based on real ranks should outperform permuted ranks at same subset size. Prediction: real-rank AUROC > permuted by pre-specified margin; if no difference, similarity is not causal. Need mention non-symmetric similarity [PAGE 5]. 
Could also: external expert labels; predict PPV drop? But need 3.

Need maybe include a 4th? Exactly 3. Include "veto" meaning if prediction fails, reject claim. Need formal: For each scenario, define metric \(M\), null \(H_0\), prediction \(P\), veto criterion. Good.

Need ensure overall >=1000 words. THINK_TRACE >=400. Let's draft with XML tags. Need no markdown? XML can contain LaTeX. Need escape? Use standard XML with text. Need not use CDATA? LaTeX has `<`? Avoid raw < in text? In XML, `<` must be escaped or use &lt;. Use LaTeX with \(\le\) not <. Need avoid `<` characters in text. The tags themselves. Use `&lt;` if needed. But XML valid? We can use `\le` in LaTeX. For thresholds like ≤2, use \(\le 2\). Don't use raw ampersand except `&`? Avoid. Need maybe use `\land` instead of &. Good. Need keep quotes. Need include citations [PAGE N]. Good.

Need maybe answer as only XML. Let's compose.

Need THINK_TRACE deep multi-hop. Let's outline:

THINK_TRACE (>=400 words):
- Start: source is 2014 paper. Task: derive recognition pipeline. Step 1 segmentation: high recall low precision. Formal: action indicator. Interpret thresholds. Step 2 classifier: 30 continuous to 150 binary; SVM. Step 3 team-specific: similarity non-symmetric; augmented. Step 4 performance. Gray-zone audit: (a) segmentation threshold discontinuities; (b) screen moment argmin instability; (c) Type 3 ambiguity; (d) labeler self-labeling; (e) team style confounds; (f) data split. Multi-hop: high segmentation recall 98% but PPV 52% means classifier burden. At 80 PPV sensitivity 82. If classifier improves, end-to-end precision =? Could derive approximate: End-to-end precision if classifier PPV 0.80 on actions with prior 0.52? Need careful. Classifier is on actions; PPV 80 means of predicted positive actions 80% true. That's already end-to-end PPV? The classifier predicts actions that contain screen. Segmentation PPV 52 is before classifier. The classifier's PPV 80 on test actions. Need not multiply. But can say classifier rejects many negatives. Could derive if base rate 52%, PPV 80 implies false positive rate? Not enough sensitivity. But can use confusion? We can derive at PPV 0.8 and sensitivity 0.82: If positives P, predicted positives = 0.82P/0.8=1.025P; false positives =0.205P; negatives =? If base rate 52%, negatives N=0.923P? FPR =0.205P/0.923P=0.222. Approx. But avoid fake? This is derived from PPV/sensitivity and base rate 52. Need mention assumptions. Could include. But not necessary.
- Gray-zone: exact quote "If we had any doubt... did not include" [PAGE 3]. This creates label noise/selection bias. Quote "we did our own labeling" [PAGE 6].
- Need mention OCR formula corruption for Table 1.
- Conclude: system scientifically plausible but not definitive; formal audit.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define coordinates, distances.
- Rule-based segmentation formal. Cite page 1. Include exact thresholds and ≥13 frames; same BH. Average action >1.5 s [PAGE 2].
- Screen moment. Cite page 3. Equation.
- Feature extraction: 6 pairwise interactions; 5 summaries each =30; quintile discretization ->150. Cite page 3/4. Table 1 formulas partially OCR; generic functional \(F_k\). 
- SVM classifier soft-margin. Cite page 4. Labels ±1. AUROC. Performance metrics and quotes.
- Breakdown regimes.
Need mention units.

RETROCAUSAL_GENEALOGY:
- Historical: NYT quote [PAGE 1]; SportVu 2012-13 [PAGE 1]; SVM Vapnik [PAGE 8]; LIBSVM [PAGE 8].
- Retrocausal: later team-specific/personnel-specific and Type3 secondary classifier [PAGE 6] retroactively explain need for segmentation and features. 
- Multi-week traps: data drift, roster changes, opponent scouting, rule emphasis, tracking calibration, label drift, similarity non-symmetry, season/team changes, Type3 taxonomy. Need mention "multi-week" specifically: collecting weeks of games, style changes, personnel changes, fatigue? Not betting. Use "multi-week data collection" not "multi-week traps".

RECURSIVE_THEORY_OF_MIND:
- Define roles and beliefs. Coach/analyst, screener, defender, ballhandler, labeler. Classifier sees kinematics not intent. Crisis habit regression: when Type3 ambiguous, global classifier defaults to motion habits; counter-trap: team-specific classifier may overfit; clock: action clock and season clock. Recursive: defender anticipates screener; screener anticipates defender; ballhandler anticipates both; labeler's doubt policy. Need include exact quotes: Type 3 "may or may not set a screen" [PAGE 2]; GSW/HOU spacing, OKC brush screens [PAGE 6]; "If we had any doubt... not include" [PAGE 3]. 
- Formal belief? Could write \(P(\text{screen}\mid \mathcal{H}_t)\). But no need. Maybe state recursive ToM layers: level-0 kinematics; level-1 screener intent; level-2 defender expectation; level-3 analyst label. 
- Counter-trap and clock: If defender expects screen (clock), screener can slip; classifier sees contact-like path. Need not overdo.

CROSS_LAYER_VETO_ADJUDICATION:
- Define adjudication rule. Source-explicit hard vetoes: no dribble, no same BH, fewer than 13 frames, handoff excluded. Cite pages 1/3. 
- Physical: tracking data x,y at 25 fps; ball x,y,z; no contact/foul/force variables; physical legality cannot be adjudicated from paper. Thus final "screen" is descriptive pattern, not legal screen. 
- Biomechanical: features include stationary duration, approach, closeness [PAGE 3]; not a hard biomechanical model. If used as veto, must be validated. 
- Weather: no weather variables; indoor NBA; null veto. Any weather veto is out-of-domain and should be rejected. 
- Proof: tables on page 1 only position/event; no meteorological layer. 
Need "physical/biomechanical/weather veto proof" perhaps phrase "Proof by source coverage".

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1 threshold perturbation. Formal: \(\tau_{10}\in\{8,10,12\}\), etc. Predictions. Veto.
- Scenario 2 Type3 stratification. Predictions. Veto.
- Scenario 3 similarity permutation. Predictions. Veto.
Need include exact metrics and thresholds.

Need ensure no betting terms. None.

Need maybe mention "zero betting lines" not in text. Good.

Potential issue: XML tags with `>=`? `>` is allowed in XML text? Yes `>` okay except `]]>`. `<` not. Avoid `<`. We can use `\ge`. For "≤" use `\le`. Ampersand: avoid `&`. Use "and". The text "x,y" okay. "GSW/HOU" okay. Use "PAGE 1" markers exactly. Good.

Need maybe include citations as [PAGE 1] not [PAGE 1 of 10]? User says cite exact [PAGE N]. Use [PAGE 1]. Good.

Need not include markdown. But XML tags can have LaTeX. Need no unescaped `<` in equations like \(d_{S,B}(t) \le d_{BH,B}(t)+2\). Good. For \(N\) etc.

Need answer length. Let's draft carefully.

Need maybe include "verbatim quotes" with quotation marks. Include several.

Let's produce with exact sections. Ensure THINK_TRACE >=400 words. Count? We'll write ~700 words. Overall ~3000. Good.

Let's craft.

Potential need "GSE + GSI Frontier Reasoning Foundry" maybe no. Just XML.

Let's write:

<THINK_TRACE>
The source is ... 
...
</THINK_TRACE>

Need avoid "source operators" maybe.

Detailed equations:

Segmentation indicator:
\[
A(t)=1 \iff \mathrm{Dribble}(t) \land \exists S\in \mathcal{O}: d_{BH,S}(t)\le 10 \land \neg \mathrm{Paint}_{near}(S,t) \land d_{S,B}(t)\le d_{BH,B}(t)+2 \land \exists D\in \mathcal{D}: d_{BH,D}(t)\le 12 \land \neg \mathrm{Paint}_{ball}(t).
\]
All distances ft. Then \(A(t)=1\) for consecutive \(t\) with length \(n\ge13\) frames. At 25 fps, \(n\ge13 \Rightarrow \Delta t\ge 0.52\) s. Same BH. Cite.

Screen moment:
\[
t_s = \arg\min_{t\in\{t_0,\ldots,t_1\}} d_{BH,S}(t)
\]
in frame index. If unique. Approach \(A=[t_0,t_s)\), departure \(D=(t_s,t_1]\). If tie, set \(t_s\) undefined. Feature:
\[
\phi_{ij,k} = F_k(\{d_{ij}(t)\}_{t\in A\cup D}),\quad k=1,\ldots,5.
\]
Need not define F_k exact due OCR. But formal enough? We can say Table 1 defines \(F_k\); OCR corrupted; audit flags. Maybe include "The paper states five continuous values per time series but the OCR omits the exact expressions" [PAGE 4]. This is honest. But user wants formal equations. We can give verified equations; not invent F. Good.

SVM:
\[
f(x)=w^\top x+b,\quad \hat y=\operatorname{sign}(f(x)).
\]
Soft margin:
\[
\min_{w,b,\xi}\frac12\|w\|_2^2+C\sum_{n=1}^N \xi_n
\]
subject \(y_n(w^\top x_n+b)\ge 1-\xi_n, \xi_n\ge0.\)
Feature vector dimension 150. Binary features dimensionless. \(C\) dimensionless. AUROC:
\[
\mathrm{AUROC}=P(f(x^+)>f(x^-))
\]
for random opposing labels. Cite page 4 footnote. This is exact.

Performance:
- segmentation sensitivity ~98%, PPV ~52% [PAGE 2].
- mean AUROC 0.8309 across 200 random splits [PAGE 4].
- 80% PPV ->82% sensitivity [PAGE 4].
- Team-specific table: GSW 0.8472 with GSW classifier? Page 10: GSW row GSW column 0.8472; global GSW? 0.8250. OKC 0.7890 with OKC; global 0.7678. Mention as examples. Need not list all.

Breakdown:
- \(t_s\) nonunique; empty A/D.
- thresholds discontinuities; coordinate noise.
- 25 Hz sampling; 13 frames.
- labeler doubt exclusion.
- Type3 ambiguity; team styles.
- non-symmetric similarity; no transitivity.
- OCR formula missing.

Need "gray-zone audit" in THINK_TRACE. Good.

Now final. Need include "Cross-layer veto" with "weather" as null. Fine.

Need maybe include "multi-week traps" in RETROCAUSAL_GENEALOGY. Good.

Let's write final.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a 2014 MIT paper that builds a two-stage pattern-recognition pipeline for on-ball screens. The first stage is a rule-based segmentation algorithm that converts 25 Hz player-tracking data into “actions”; the second is a supervised SVM classifier that discriminates screen actions from non-screen actions. The first multi-hop inference is that the paper’s core scientific claim is not “we detect screens perfectly,” but rather “tracking data plus segmentation plus a learned classifier can substantially reduce manual video review while exposing team-style differences.” That distinction matters because the reported segmentation recall is high while segmentation precision is low: the paper states that on 21 quarters the rule set achieved “a sensitivity of approximately 98% and a positive predictive value (PPV) of approximately 52%” [PAGE 2]. Thus the rule stage is a high-recall candidate generator, and the classifier stage must perform the precision repair.

The second inference is structural. The segmentation rule is a conjunction of spatial and temporal predicates: a dribbler must exist; an offensive player must be within 10 ft; that screener must not be in or near the paint; the screener must be no more than 2 ft farther from the basket than the ball-handler; a defensive player must be within 12 ft; the ball must not be in the paint; and all predicates must hold for at least 13 consecutive frames with the same ball-handler [PAGE 1]. At 25 frames per second, 13 frames is 0.52 s. The paper reports that the average action was “just over 1.5 seconds long” [PAGE 2]. This means the segmentation window is short enough to isolate local interactions but long enough to include approach and departure motion. The gray-zone is immediate: threshold predicates are discontinuous, so small tracking errors near 10 ft, 12 ft, 2 ft, or the paint boundary can flip an action on or off. The paper does not report threshold-sensitivity analysis; that is an audit gap.

The third inference concerns the classifier’s feature geometry. The paper extracts 30 continuous features, five for each of six pairwise distance time series, then discretizes each into five binary features based on quintiles, producing a 150-dimensional vector [PAGE 3–4]. The “screen moment” is defined as the time when the ball-handler–screener distance is at a minimum [PAGE 3]. That moment divides the action into approach and departure halves. This is a clever but fragile construction: if the minimum is tied, plateaued, or occurs at an action boundary, the approach/departure partition is undefined or empty. The paper does not specify tie-breaking. The OCR of Table 1 is also partially corrupted, so the exact five feature formulas cannot be reconstructed from the supplied text; the formal audit should flag that as a reproducibility limitation rather than invent formulas.

The fourth inference is the team-specific layer. The paper defines similarity asymmetrically: “If a classifier trained on data from Team A performs well when applied to data from Team B, we consider Team A to be similar to Team B” and notes “this notion of similarity is not symmetric” [PAGE 5]. It then builds augmented team-specific classifiers by removing the least similar teams. The striking result is that “in almost every case the optimal classifier was trained on 56% or less of the available training data” [PAGE 6]. This supports the claim that pooling all teams can be detrimental, but it also creates a gray-zone: with small per-team samples, the optimal subset size may be selected on noisy validation estimates. The paper reports mean AUROC 0.8309 across 200 random splits [PAGE 4], but the appendix table shows a global classifier on the global test set at 0.7859 [PAGE 10]. Those numbers are not contradictory—they refer to different evaluation protocols—but a careful reader must not conflate them.

The fifth inference is about labels and intent. The authors label an action positive if an on-ball screen annotation falls between its start and end times; they excluded handoffs and state: “If we had any doubt that an on-ball screen occurred, we did not include it in our analysis” [PAGE 3]. That is a conservative labeling policy, but it means the classifier learns from the authors’ theory of mind about what counts as a screen. The paper later admits: “Our ability to evaluate our method was limited by the fact that we did our own labeling of the data” [PAGE 6]. The biggest semantic gray-zone is Type 3, “a perimeter movement” where a second offensive player “may or may not set a screen” [PAGE 2]. The classifier is better at separating Type 1 screens from Type 2 non-screens than at separating Type 3 screens from Type 3 non-screens; the authors explicitly suggest “A secondary classifier focusing exclusively on Type 3 actions might be able to improve the performance” [PAGE 6]. Thus the end-to-end system is scientifically promising but not a definitive screen detector; it is a candidate generator plus a style-sensitive classifier whose hardest cases are intent-ambiguous perimeter actions.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(\mathbf{p}_i(t)=(x_i(t),y_i(t))\in\mathbb{R}^2\) be the court position of player \(i\) at frame \(t\), in feet. Let \(\mathbf{b}\in\mathbb{R}^2\) be the basket position in feet. The paper defines the pairwise player distance and player–basket distance as
\[
d_{ij}(t)=\|\mathbf{p}_i(t)-\mathbf{p}_j(t)\|_2 \quad \text{ft},
\]
\[
d_{iB}(t)=\|\mathbf{p}_i(t)-\mathbf{b}\|_2 \quad \text{ft}.
\]
These are the operators used in the segmentation and feature extraction. The source states that the Position table contains “the {x,y} position of every player on the court and the {x,y,z} coordinates of the ball, at 25 frames a second” [PAGE 1]. Time is therefore discrete: \(t\in\{1,\ldots,T\}\) with sampling interval \(\Delta t=1/25=0.04\) s.

The rule-based segmentation predicate can be written as an indicator \(A(t)\in\{0,1\}\):
\[
A(t)=1 \iff 
\mathrm{Dribble}(t)
\land \exists S\in\mathcal{O}: d_{BH,S}(t)\le 10
\land \neg \mathrm{Paint}_{near}(S,t)
\land d_{S,B}(t)\le d_{BH,B}(t)+2
\land \exists D\in\mathcal{D}: d_{BH,D}(t)\le 12
\land \neg \mathrm{Paint}_{ball}(t),
\]
where \(BH\) is the ball-handler, \(S\) is the screener, \(D\) is the on-ball defender, \(\mathcal{O}\) is the offensive player set, and \(\mathcal{D}\) is the defensive player set. All distance thresholds are in feet. An action is a maximal consecutive run of frames for which \(A(t)=1\), the run length is at least 13 frames, and the ball-handler is identical across the run [PAGE 1]. The exact source wording is: “for >=13 consecutive frames” and “the ball-handler is the same for every frame” [PAGE 1]. At 25 Hz, the minimum action duration is
\[
\Delta t_{\min}=13/25=0.52\ \text{s}.
\]
The paper reports the average action length as “just over 1.5 seconds long” [PAGE 2].

The screen moment is defined as
\[
t_s=\arg\min_{t\in\{t_0,\ldots,t_1\}} d_{BH,S}(t),
\]
in frame units, with the source statement: “We define the moment of the screen, \(t_s\), as the time when the pairwise distance between the ball-handler and the screener is at a minimum” [PAGE 3]. The approach and departure intervals are
\[
\mathcal{A}=[t_0,t_s),\qquad \mathcal{D}=(t_s,t_1].
\]
For each pairwise distance time series, the paper extracts five continuous features. The exact Table 1 expressions are partially lost in the supplied OCR, but the structural operator is
\[
\phi_{ij,k}=F_k\big(\{d_{ij}(t)\}_{t\in\mathcal{A}\cup\mathcal{D}}\big),
\quad k=1,\ldots,5,
\]
where \(F_k\) denotes the paper’s five continuous summaries over the approach/departure split [PAGE 3–4]. There are six pairwise series among ball-handler, screener, on-ball defender, and basket; five features per series gives \(6\times5=30\) continuous features. Each continuous feature is discretized into five binary features by quintiles, giving
\[
\mathbf{x}\in\{0,1\}^{150}.
\]
The source states: “This results in a 150-dimensional feature vector for every action” [PAGE 4].

The classifier is a linear support vector machine. The learned decision function is
\[
f(\mathbf{x})=\mathbf{w}^{\top}\mathbf{x}+b,
\qquad
\hat y=\operatorname{sign}\big(f(\mathbf{x})\big),
\]
with \(\mathbf{w}\in\mathbb{R}^{150}\) and \(b\in\mathbb{R}\). The source states: “Using support vector machine (SVMs) we learn a linear classifier” and “\(f(\mathbf{x})=\mathbf{w}^{\top}\mathbf{x}+b\)” [PAGE 4]. The standard soft-margin primal problem is
\[
\min_{\mathbf{w},b,\boldsymbol{\xi}}
\frac{1}{2}\|\mathbf{w}\|_2^2
+
C\sum_{n=1}^{N}\xi_n
\]
subject to
\[
y_n(\mathbf{w}^{\top}\mathbf{x}_n+b)\ge 1-\xi_n,
\qquad
\xi_n\ge 0,
\qquad
y_n\in\{-1,+1\}.
\]
Here \(C\) is a dimensionless cost parameter selected by 5-fold cross-validation on the training set, as stated: “we select the cost-parameter using 5-fold cross validation on the training set” [PAGE 4]. Because \(\mathbf{x}\) is binary after quintile discretization, the feature values and the SVM decision value \(f(\mathbf{x})\) are dimensionless. AUROC is also dimensionless and is defined by the paper’s footnote as “the probability that, given two random examples of opposing labels, the classifier will rank the positive example higher than the negative example” [PAGE 4]. Formally,
\[
\mathrm{AUROC}=P\big(f(\mathbf{x}^{+})>f(\mathbf{x}^{-})\big).
\]

Performance operators are:
\[
\mathrm{Sensitivity}=\frac{TP}{TP+FN},
\qquad
\mathrm{PPV}=\frac{TP}{TP+FP}.
\]
The segmentation stage achieved “a sensitivity of approximately 98% and a positive predictive value (PPV) of approximately 52%” [PAGE 2]. The classifier stage achieved “mean AUROC across all splits was 0.8309” [PAGE 4]. At an 80% PPV operating point, the paper reports “82% sensitivity” [PAGE 4]. The appendix gives example AUROCs: GSW test set with GSW classifier 0.8472, GSW test set with global classifier 0.8250; OKC test set with OKC classifier 0.7890, OKC test set with global classifier 0.7678 [PAGE 10].

Exact singularity and breakdown regimes:
1. If \(d_{BH,S}(t)\) has a non-unique minimum over the action, \(t_s\) is undefined or requires a tie-break that the paper does not specify; approach/departure features then become non-identifiable.
2. If \(t_s=t_0\) or \(t_s=t_1\), one of \(\mathcal{A}\) or \(\mathcal{D}\) is empty; any feature \(F_k\) requiring that interval is undefined.
3. The segmentation indicator is discontinuous at \(d=10\) ft, \(d=12\) ft, \(d_{S,B}-d_{BH,B}=2\) ft, and the paint boundary. Tracking coordinate error near those boundaries can flip \(A(t)\).
4. The 25 Hz sampling and 13-frame rule impose a hard temporal resolution: interactions shorter than 0.52 s cannot form an action under the rule.
5. Handoffs are excluded by label policy: “We also did not consider handoffs to be on-ball screens” [PAGE 3].
6. Type 3 actions are semantically ambiguous by construction: a perimeter player “may or may not set a screen” [PAGE 2]. This is not a numerical singularity but a label-identifiability breakdown.
7. The team-similarity operator is asymmetric and not transitive; using it as a metric ranking is valid only for the directional classifier-transfer experiment reported [PAGE 5].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage has three branches. The first is basketball strategy: the paper opens with the pick-and-roll as a central NBA action and quotes Stan Van Gundy: “[The pick and roll is] what we're going to be in when the game's on the line” [PAGE 1]. That strategic claim is the retrocausal justification for treating the on-ball screen as a discrete, recognizable event. The second branch is tracking instrumentation: STATS SportVu data from the 2012–2013 season supply a Position table and an Event table [PAGE 1]. The third branch is statistical learning: the paper cites Cortes and Vapnik’s “Support Vector Networks” and LIBSVM [PAGE 8]. Thus the 2014 system sits at the intersection of basketball strategy, optical tracking, and kernel/linear classification.

Retrocausally, later concerns reshape how we read the 2014 choices. The paper’s own later sections anticipate personnel-specific classifiers—“it would be interesting to build personnel-specific classifiers”—and a secondary Type 3 classifier [PAGE 6]. Those later desiderata retroactively explain why the 2014 features are both promising and incomplete: they encode pairwise geometry and timing, but not contact, legality, or explicit role identity. The team-similarity experiment also anticipates modern style clustering: the finding that “GSW” and “HOU” are easier to classify because they emphasize spacing and rarely have perimeter players approach each other, while Oklahoma City runs “Westbrook-Durant brush screens on the perimeter” and produces many Type 3 actions, is a proto-style-analysis result [PAGE 6].

Multi-week traps are significant. First, a multi-week sample can mix roster changes, injuries, trades, and coaching adjustments; the paper acknowledges “teams change personnel throughout the course of a game and over the course of a season” [PAGE 6]. A classifier trained on one team-week may not transfer to another team-week even if the team label is unchanged. Second, label drift is possible: the authors’ exclusion of doubtful screens and handoffs creates a stable but idiosyncratic definition; a different labeling team could shift the positive class. Third, tracking-system drift and arena calibration can shift coordinates across weeks, interacting with hard thresholds. Fourth, the asymmetric team-similarity matrix is not a stable clustering; it is a directed transfer performance table, so multi-week aggregation can create false transitivity. Fifth, Type 3 ambiguity is a taxonomic trap: if the category is defined as “may or may not set a screen,” then repeated annotation across weeks will produce inconsistent positives unless the label protocol is tightened. Sixth, the paper’s 200 random splits control some sampling variance, but they do not control temporal leakage if actions from the same game or quarter are split across training and test. The safe multi-week protocol is to hold out whole games or weeks, freeze label definitions, and report threshold-sensitivity and Type 3-stratified metrics.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The system observes kinematics, but the event is social: a screener intends to impede or delay a defender; the ball-handler intends to use or reject the screen; the on-ball defender intends to fight over, go under, switch, or trail; the coach intends a spacing or mismatch action. The classifier has no explicit belief state for these intentions. It learns a decision boundary over distance summaries. That creates a recursive theory-of-mind gap: the label “screen” is a human interpretation of joint intentional behavior, while the features are pairwise geometry. The paper’s Type 3 category exposes the gap most clearly: “a perimeter movement” where the second offensive player “may or may not set a screen” [PAGE 2]. The model must infer intent from motion alone, and the authors admit the classifier is weaker on Type 3 screens versus Type 3 non-screens [PAGE 6].

Crisis habit regression appears when the classifier is uncertain. Under a low-precision candidate set—segmentation PPV around 52% [PAGE 2]—the global classifier regresses to habitual motion cues: proximity, approach, minimum distance, departure. Those cues are reliable for Type 1 versus Type 2 but not for Type 3 intent. The “counter-trap” is the team-specific or augmented classifier. It can exploit style regularities: Golden State and Houston spacing, Oklahoma City brush screens [PAGE 6]. But the counter-trap can overfit: a team-specific classifier may learn a team’s habitual geometry rather than the screen concept, and the asymmetric similarity ranking can reinforce that habit. The “clock” is both local and seasonal. Locally, the screen moment \(t_s\) is the clock that divides approach from departure; if \(t_s\) is unstable, the model’s temporal theory of mind is unstable. Seasonally, personnel and coaching change over weeks, so a classifier’s belief about “how Team A screens” can become stale [PAGE 6].

The labeling layer adds another recursive loop. The authors state: “If we had any doubt that an on-ball screen occurred, we did not include it in our analysis” [PAGE 3]. That is a conservative annotator policy: the human labels only cases that pass an internal confidence threshold. The classifier then learns the annotator’s confidence boundary, not an external ground truth. A defender’s expectation can also change the observed motion: if the defender anticipates a screen, the screener may slip or re-screen; if the screener anticipates a switch, the approach angle changes. The model sees the resulting path but not the nested expectations. Therefore the correct interpretation is descriptive: the system recognizes motion patterns that co-occur with human-labeled screens. It does not prove intent, legality, or tactical purpose. The recursive theory-of-mind audit should require an external expert label set and a Type 3-specific belief model before making strong claims about tactical recognition.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Adjudication rule: let \(L_{\mathrm{ML}}\in\{+1,-1\}\) be the classifier label and \(V_{\mathrm{layer}}\in\{0,1\}\) be a hard layer veto. The final positive label is
\[
L_{\mathrm{final}}=+1 \iff L_{\mathrm{ML}}=+1 \land V_{\mathrm{phys}}=1 \land V_{\mathrm{bio}}=1 \land V_{\mathrm{env}}=1.
\]
The source-explicit physical vetoes are strong. A frame is rejected if the most recent event was not a dribble: “if the most recent event was a dribble, the player that performed the dribble is identified as the ball-handler. Otherwise there is no ball-handler and the preprocessing algorithm rejects the frame” [PAGE 3]. An action is invalid if the ball-handler changes across frames, because the rule requires “the ball-handler is the same for every frame” [PAGE 1]. Handoffs are outside the positive class: “We also did not consider handoffs to be on-ball screens” [PAGE 3]. These are hard, source-grounded vetoes and should override a positive classifier output.

Biomechanical veto is weaker and must be handled carefully. The paper uses “how long the player is stationary, whether he approaches the ball-handler early in the action and how close the player gets to the ball-handler” to identify the screener [PAGE 3]. That is a biomechanical proxy, not a legal screen model. The paper does not measure contact force, foot displacement, torso orientation, or foul signals. Therefore a biomechanical veto can only be a soft prior unless an external rule-based or pose-based layer is added. A hard biomechanical veto would require proof that the screener is moving illegally or that contact is impossible; the provided source does not contain those variables. The correct adjudication is: use the paper’s stationary/approach/closeness features as evidence, not as definitive legality proof.

Weather veto: this is an indoor NBA tracking dataset. The Position table contains player \(x,y\) and ball \(x,y,z\) at 25 Hz; the Event table contains play-by-play events such as fouls, passes, dribbles, and shots [PAGE 1]. There is no meteorological variable, no wind, no precipitation, no temperature, and no outdoor-surface state. Therefore \(V_{\mathrm{env}}\) is not estimable from this source. The proof is coverage-based: the source’s data schema does not include a weather layer, so any weather-based veto is out-of-domain and should be rejected as unsupported. For an outdoor sport, weather could affect ball flight and footing, but for this paper the environmental veto is null.

The cross-layer conclusion is that the classifier’s positive label means “tracking geometry consistent with an on-ball screen,” not “legal screen” and not “tactically intended screen.” Physical and event-layer vetoes are admissible; biomechanical vetoes are only admissible with additional measurement; weather vetoes are inadmissible for this indoor dataset.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: threshold-perturbation veto for segmentation. Counterfactual: vary the screener-distance threshold \(\tau_{S}\in\{8,10,12\}\) ft, the defender-distance threshold \(\tau_{D}\in\{10,12,14\}\) ft, the basket-offset threshold \(\tau_{B}\in\{0,2,4\}\) ft, and the minimum frame count \(n_{\min}\in\{9,13,17\}\). Hold the classifier and label set fixed. Verifiable metrics: segmentation sensitivity and PPV on held-out quarters, plus end-to-end sensitivity and PPV. Prediction: widening \(\tau_S\) or \(\tau_D\) and lowering \(n_{\min}\) increases segmentation sensitivity but decreases segmentation PPV; narrowing them does the reverse. Veto criterion: if widening \(\tau_S\) from 10 to 12 ft does not increase candidate recall at all, or if narrowing to 8 ft does not reduce candidate recall, then the stated spatial-threshold mechanism is not causal and the segmentation theory must be revised. This test is directly verifiable from the source rule [PAGE 1] and the reported 98%/52% segmentation baseline [PAGE 2].

Scenario 2: Type 3 stratification veto. Counterfactual: partition the labeled actions into Type 1, Type 2, and Type 3 using the paper’s court-mockup taxonomy [PAGE 2], train on Type 1 and Type 2 only, and test on Type 3. Verifiable metrics: Type 3 AUROC, Type 3 sensitivity at fixed PPV, and overall AUROC. Prediction: Type 3 AUROC should be materially below the reported global mean AUROC 0.8309 [PAGE 4], because Type 3 actions “may or may not set a screen” [PAGE 2] and the authors state the classifier is weaker on Type 3 screens versus Type 3 non-screens [PAGE 6]. A pre-specified veto threshold could be Type 3 AUROC \(\le 0.75\). Veto criterion: if Type 3 AUROC remains at or above the global mean, then the paper’s Type 3 ambiguity explanation is falsified or the Type 3 labels are not separable from Type 1/2; the proposed secondary classifier would not be justified by that mechanism.

Scenario 3: similarity-permutation veto for team-specific classifiers. Counterfactual: keep the same number of training actions per team, but replace the real directed similarity ranking with a random permutation of teams; retrain the augmented team-specific classifiers at each subset size. Verifiable metrics: AUROC on each team’s held-out test set as a function of training-set size, and the area under that curve. Prediction: if the real similarity ranking is causal, the real-ranking augmented classifier should outperform the permuted-ranking classifier at the same subset size, especially at the 56%-or-less training-data regime reported as optimal [PAGE 6]. Veto criterion: if the real-ranking curve is statistically indistinguishable from the permuted-ranking curve across repeated permutations, then the “similar offenses” claim is not supported as a causal transfer mechanism; it may be a small-sample artifact. This test is verifiable because the paper already reports team-specific and global AUROC matrices [PAGE 10] and defines similarity by classifier transfer [PAGE 5].
</RLVR_COUNTERFACTUAL_VETOES>