---
source: "2026 - Interpretable Prediction and Large-Scale Analysis of Judging in Professional Boxing - duBoef et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2026"
pages: 15
model: deepseek/deepseek-v4.1-flash-1017
words: 8443
---

<NATIVE_REASONING>
We need answer as GSE+GSI Frontier Reasoning Foundry. Need parse task. User provides source paper and strict invariants. Need produce exact XML sections, >=1000 words depth, THINK_TRACE >=400 words. Need no betting lines. Need cite [PAGE N] markers and verbatim quotes. We have pages? Source has page markers 1-18 despite PAGES:15. Need use exact [PAGE N] markers based on source text. Need formal LaTeX equations, units, assumptions, singularities/breakdown regimes. Need source operators/equations. Need retrocausal genealogy, recursive theory of mind, cross-layer veto adjudication, RLVR counterfactual vetoes (3 verifiable scenarios + predictions). Need no betting lines, no toy equations.

Need understand document. It's about boxing judging prediction using DeepStrike metrics, points-based model PB, MLP, empirical Bayes, L1 logistic, correlations. Need extract equations. Unfortunately PDF text has equations missing/blank due formatting. Need reconstruct from context? Need cite exact quotes. Must be careful not invent exact equations not present? We can state formal LaTeX based on described formulas: points accumulated ratio, prediction conversion, MSE, empirical Bayes shrinkage, Method of Moments tau^2, k. Need page citations. Since equations omitted in text, we can describe from prose. Need "source operators and equations" formal. We can mention OCR omission and reconstruct from described quantities, marking as inferred? The invariant says when source pages provided, cite exact [PAGE N] markers and verbatim quotes. We can include exact quotes. Need formal LaTeX, units, assumptions, breakdown regimes. No fake ratios. Fine.

Need determine page mapping. Source page markers are 1 through 18. PAGES:15 may mean PDF pages? But markers show 1-18. Use [PAGE 1] etc. Need quote exact text. Let's identify key quotes and pages:
- PAGE 1: "nearly half (46.5%) of matches are decided by judges' scorecards rather than knockout or stoppage [1]."
- PAGE 1: "judges are instructed to consider four factors: clean and effective punching, effective aggression, ring generalship, and defense [2]."
- PAGE 1: "definitions of these terms are vague"
- PAGE 1: CompuBox limitations: "all landed punches are categorized as either a "jab" or a "power punch" with no further differentiation; a glancing blow that barely connects is counted identically to a clean, powerful shot that visibly staggers an opponent [9]."
- PAGE 2: "DeepStrike outputs 47 distinct metrics per fighter per round"
- PAGE 2 hypothesis quotes.
- PAGE 3 sample: 5,348 unique, 1,003 bouts (19%), 7,864 rounds; 73.1% unanimous, 26.9% split; 93.1% 10-9/9-10; final 7,323 rounds.
- PAGE 4: metrics categories, pressure aggression indicators, professional judge scores dependent variable, binary averaged outcomes: "unanimous loss (0), split decision loss (1/3), split decision win (2/3), and unanimous win (1)." [PAGE 4]
- PAGE 5: PB point ratio, identical weights, corner assignment not random. Training details: lr 0.00001, momentum 0.9996, 20,000 iterations, gradient clipping ±0.5, MSE. "Where N is number of rounds..."
- PAGE 6: MLP details; ranking; "Empirical Bayes shrinkage, which regularizes small-sample accuracy estimates toward the population mean (μ = 82.78%)."; Method of Moments k=28.71 on page 8? Actually PAGE 6 formula; PAGE 8 says k=28.71, τ²=0.005; 227 judges. Need cite.
- PAGE 7: plus-minus differentials; L1 logistic C 10^-6 to 0.01.
- PAGE 8: Table 2; k=28.71; "PB model ranks in the 22nd percentile..." and "Once shrinkage... 10th percentile"; 45 judges.
- PAGE 9: Table 5, Table 6, Table 7; "Maximum impact punches are valued over 10× higher than minimum impact punches"
- PAGE 10: L1: aggression power second most important coefficient = 0.598; pressure position/distance top 50%; pressure movement, aggression combinations, aggression exchanges not selected; Spearman aggression power r=0.493 p<0.001; aggression combinations r=0.374; remaining r=0.139-0.168.
- PAGE 11: Discussion: first large-scale automated; 76% agreement below average pairwise 81%; 26th percentile; Tiny PB 5 stats; constraints.
- PAGE 12: "Aggression power emerged as one of the most important performance metrics..."; "occupying the guard"; pressure position/distance moderate; pressure movement limited; exchanges negligible.
- PAGE 13: applications; "17,575 individual judge scores"; supplementing, judge eval, training.
- PAGE 14: limitations: DeepStrike beta 2024, 95% per-punch, single-angle 25/30fps, occlusion, multi-cam; geographic bias; underrepresentation KO artists: Mayweather 9.8 vs Tyson 3.9 usable rounds, 60% fewer; untracked factors; arbitrary timing windows.
- PAGE 15: references.
- PAGE 16: references/Appendix.
- PAGE 17: Table 7.
- PAGE 18: Tables 8/9.

Need write sections. Desired oververbosity 5 but required depth >=1000 words. Need likely 1800-2500 words. Need ensure exact XML tags. Need mention no betting lines. We should not mention odds etc. That's okay.

Need "GSE + GSI Frontier Reasoning Foundry" maybe no preamble? Could include all XML only. Need satisfy invar. Should we include <THINK_TRACE> first. It must contain deep multi-hop derivation and gray-zone audit >=400 words. We can write detailed.

Need think about "DRIVE SOURCE" maybe they want reasoning about research paper. We should interpret as analysis/audit of paper, not sports prediction. No betting. Need not provide wagering. We can discuss models.

Need use formal LaTeX. Need units? Source metrics: rounds, bouts, scores unitless, proportions, coefficients unitless, fps, accuracy %. Information units? We can state bits? Could mention standard units. The invariant says "SI/information/probability units". We need include units for equations. For score: probability p ∈ [0,1] (unitless/probability), round score S_i∈{0,1/3,2/3,1}, MSE in (score)^2 dimensionless, accuracy proportion. Shrinkage k in rounds? Actually k parameter has units of rounds if formula μ + n/(n+k)(x-μ). τ² in probability², s² probability², k in rounds. Good. L1 coefficient per standardized? We can state model coefficient dimensionless per metric unit or standardized. Spearman rho dimensionless. fps Hz.

Need formal Derivation:
PB: Each boxer accumulates points:
P_red = Σ_j θ_j x_{j,red} maybe plus intercept? The paper says score between 0 and 1 based on ratio of points earned. Prediction conversion maybe R_Θ = 1/(1+exp(-D(P_red-P_blue))) or maybe sigmoid of difference? Text says "We convert point totals to predictions as follows:" but equation omitted. It mentions parameters {D,S}. Could be "R_Θ = 1 / (1 + exp(-D * (P_red - P_blue)))"? Or "sigmoid(D*(P_red-P_blue))"? Need avoid overprecision. We can write general:
P_r = Σ_j θ_j x_{j,r}, P_b = Σ_j θ_j x_{j,b}
R_Θ = σ(D (P_r - P_b)) perhaps with σ(z)=1/(1+e^{-z}). But paper mentions parameters {D,S}; maybe D is scaling, S shift? "Weights and parameters {D,S}" maybe D and S in "score = D*(points_red-points_blue)+S"? Hmm.

Could state "The manuscript’s displayed equations are not preserved in the OCR text; the prose defines the family as ... Therefore the audit treats the exact link as partially observed and only tests invariants that do not depend on the missing expression." That is honest. But requirement formal LaTeX equations. We can give reconstructed formalization and mark OCR gap.

Need mention "same weights applied to both corners" ensures antisymmetry: if red/blue swapped, score transforms p -> 1-p. Good. This is a formal property. We can derive:
P_r(θ,x_r), P_b(θ,x_b); p = F(P_r-P_b), F odd? Actually sigmoid of D(P_r-P_b), no intercept, gives p_blue? If swap colors p -> 1-p. That prevents red-corner bias. Singularities: D→0 yields p=0.5; D→∞ yields step function (non-differentiable at tie); P_r=P_b tie. If target scores are {0,1/3,2/3,1}, MSE minimization. Need mention gradient clipping because of logistic saturation; momentum. MLP with ReLU, L2 0.001, Adam. Can mention breakdown if video occlusion, per-punch 95% error compounding; single-angle 25/30 fps temporal aliasing. 

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Need use layers: video capture (fps, occlusion), biomechanical punch impact (mass, velocity, glove, target), judge perception/scorecard, model. Weather? Boxing indoor; weather not relevant except venue conditions? Need include "weather veto: no outdoor weather variables in source; any weather-derived claim is vetoed as out-of-domain, because the paper uses HD YouTube/Dailymotion footage and scorecards [PAGE 3], no meteorological covariates." Need satisfy physical/biomechanical/weather veto proof. Could say physical layer: 25/30 fps sampling, exposure blur, occlusion; biomechanics: impact not directly measured, only classified; no force plate/IMU; "high impact" is visual classification by DeepStrike, not Newton-seconds. Therefore veto claims about actual punch force. Cross-layer adjudication: model can rank high impact but cannot infer joules/newtons. Pressure metrics timing windows arbitrary [PAGE 14]. Weather veto: indoor combat sports, source doesn't measure temp/humidity/altitude; any inference invalid. Good.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning with Verifiable Rewards? Need produce 3 scenarios where model predictions can be vetoed by verifiable checks. Need include predictions. Could be:
1. Scorecard pairing audit: If video-scorecard pairing wrong (duplicate bout/repeat matchups), model feature vector out-of-distribution; veto prediction. Prediction: if swap scorecard labels, accuracy drops to ~chance? Need verifiable: re-run with shuffled labels, expected test accuracy ~50%? But binary averaged? Actually uniform judge scores; shuffled labels would have high baseline maybe. We can predict.
2. Single-angle occlusion: Rounds with high occlusion rate (referee/graphic) will have lower model agreement; veto any round where DeepStrike confidence below threshold or visible misses? Prediction: excluding low-confidence rounds increases agreement? Source says multi-cam improves. Need verifiable with pixel-level annotation sample.
3. Impact differentiation ablation: If min/max impact metrics are permuted, model weight ordering should break; veto H1? Prediction: permuting impact labels within landed punches destroys >10× weight pattern and reduces accuracy. Or randomize aggression power timing window, model coefficient 0.598 collapses. Need 3 verifiable scenarios with predictions.
Could also use empirical Bayes: If k=28.71 is wrong, ranking percentiles shift. But RLVR scenarios should be verifiable. We can do:
- Veto A: Corner-label permutation test. Prediction: PB with shared weights should be antisymmetric; if not, red-corner prior leak; verified by swapping red/blue features and checking p'=1-p within numerical tolerance; if fails, model invalid.
- Veto B: Temporal window perturbation for aggression power (3 s). Prediction: if arbitrary window is changed, coefficient and accuracy degrade; verifies whether aggression power is robust. Source mentions arbitrary timing windows. 
- Veto C: Occlusion/confidence stratification. Prediction: low-confidence rounds have lower agreement; excluding them raises agreement toward judge mean. 
Need "verifiable" maybe use exact source predictions: PB 76% agreement vs 81% average [PAGE 11], ranks 26th percentile raw; after shrinkage 10th percentile of 227 [PAGE 8]. Tiny PB 5 metrics. Max impact >10x min [PAGE 9]. Aggression power r=0.493 [PAGE 10]. k=28.71 [PAGE 8]. We can use those as verifiable predictions.

Need "RECURSIVE_THEORY_OF_MIND": Crisis habit regression vs counter-trap vs clock. Hmm this is odd. It likely refers to modeling judges' recursive beliefs? Need address "Crisis habit regression vs counter-trap vs clock." We need interpret. Maybe as GSE/GSI frontier reasoning foundry, these sections are specific to sports betting? But no betting. We need talk about judges' decision-making, habit regression under crisis (late rounds, fatigue), counter-trap (judge anticipates fighter adjustment), clock (round timing, 3-min vs 2-min). Need include recursive theory of mind: judges infer fighter intent; fighters infer judge preferences; model infers judge scoring. Crisis habit regression: under fatigue/late rounds, judges may revert to heuristics (aggression power, pressure) rather than nuanced clean punching. Counter-trap: fighters may feign pressure or occupy guard to exploit judge heuristics; judges may counter by rewarding clean effective punching. Clock: 3-minute rounds men, 2-minute women [PAGE 3]; recency bias possible [PAGE 14]. Need mention no direct data on judge cognition; this is model-level inference from aggregate scores. Use exact quotes: "potential recency bias favoring late-round action" [PAGE 14]; "aggression power ... judges' appreciation for high power-commit punches independent of success landing" [PAGE 12]; "occupying the guard" [PAGE 12]; "pressure movement had essentially no meaningful relationship" [PAGE 13? Actually PAGE 12/13]. Need cite pages. The text says in Discussion section on page 12-13. Need quote exact.

Need "RETROCAUSAL_GENEALOGY": Historical/scientific lineage & multi-week traps. Need discuss CompuBox 1980s, clicker system, UFC Fight Stats, James et al 2016, gymnastics JSS, VAR, pose estimation, DeepStrike, then paper. Multi-week traps: small samples <50 bouts, reliance on CompuBox binary punch categories, pose occlusion, single-camera, scorecard unavailability, underrepresentation of KO artists, beta model. Need use citations [PAGE 1], [PAGE 2], [PAGE 14]. "Multi-week traps" maybe from betting? No betting. Could mean traps that persist over weeks? We can frame as "research-program traps that take weeks/months to surface: worker-flow leakage, scorecard pairing, label leakage." Need be careful. Use "multi-week replication traps" like dataset drift across eras, video source rights, fighter style composition. Need mention historical lineage from 1980s CompuBox to DeepStrike to this 2026 paper. Cite [PAGE 1], [PAGE 2], [PAGE 14].

Need "SOURCE_OPERATORS_AND_EQUATIONS" detailed. Need include exact quotes and formulas. We need include "PAGE N" exact markers. We can quote exact phrases. Need all sections with formal LaTeX.

Need decide length. Need >=1000 words. We can write ~2500 words. Need not overdo but enough. Let's plan:

Start with XML sections exactly.

<THINK_TRACE>
Need >=400 words. Write:
- Interpret paper as measurement-to-judgment inverse problem: inputs DeepStrike 47 metrics, target averaged judge scores.
- Multi-hop derivation: from video frames at 25/30 fps to punch events, impact classes, round aggregates, plus-minus differentials, PB weights, score probabilities, MSE. Mention hidden equations in OCR; recover invariant structures: shared weights, corner antisymmetry, probability link. 
- Gray-zone audit: sample selection (5,427 to 5,348 to 1,003 to 7,864 to 7,323), exclusion of 6.8% non-binary; judges averaged; empirical Bayes; model ranking. Need identify risks: label pairing, corner assignment nonrandom, judge bias, occlusion, DeepStrike beta 95%, single-camera, underrepresentation. 
- Need cite exact quotes and pages. 
- Mention "no betting lines". 
Need not too many equations here? Can include some.

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal equations:
Define indices: i round, r/b, j feature, k judge.
Score target:
\bar{y}_i = (1/3) Σ_{k=1}^3 y_{ik}, y∈{0,1}; averaged outcomes. Actually if filtered binary per judge, outcomes 0,1/3,2/3,1. Quote [PAGE 4].
PB:
P_{i,c}=Σ_j θ_j x_{i,c,j}; c∈{R,B}; p_i=σ(D(P_R-P_B)+S?) The paper says parameters {D,S}; but if S intercept absent? Need maybe p=1/(1+exp(-D(P_R-P_B)+S)). But shared weights and no corner favor. If S nonzero, can still favor? Actually S shifts both; in difference it's intercept. If S not zero, tie maps not 0.5; but corner assignment not symmetric. We can state "The OCR text omits the displayed link, and mentions parameters {D,S}; a minimal audited form is ..." That is acceptable. Need mention if S≠0, red-corner bias possible; the paper's claim of identical weights is necessary but not sufficient. This is a good gray-zone insight. But paper says identical weights applied both boxers. It doesn't say no intercept. If S is shared, it doesn't favor red vs blue? Actually if p = σ(D(P_R-P_B)+S), then tie gives p>0.5 regardless of corner? But since red is always red, S could be red bias. But maybe S is scaling. Need not assert. We can state "any nonzero shared shift S in the link is a red-corner prior unless proven otherwise; the paper's prose only guarantees shared θ." This is a formal audit. But maybe too speculative. We can phrase as "the omitted equation must be checked for a nonzero S; otherwise red-corner prior leak." Good.
MSE: L = (1/N)Σ_i (\hat{y}_i - \bar{y}_i)^2.
MLP: h1=ReLU(W1 x + b1), h2=ReLU(W2 h1+b2), \hat{y}=σ(w3^T h2+b3); L2 0.001; Adam 0.001.
Empirical Bayes: \hat{a}_j = μ + n_j/(n_j+k)(a_j-μ), μ=0.8278, k=28.71 rounds, τ²=0.005 probability², s² sample variance. Method of moments: τ² = s² - mean(p(1-p)/n)? Need derive from text: "expected within-judge variance for judge with n rounds is approximately ... and between-judge variance τ² can then be estimated as ..." We can write general:
s² ≈ τ² + E[p(1-p)/n]; \hat{τ}² = max(0, s² - \overline{p(1-p)/n}); k = \hat{τ}²? Wait formula for k maybe k = mean within variance / τ²? Need know. Shrinkage k = σ²/τ². For binomial within variance at mean μ: σ² = μ(1-μ) ≈ 0.8278*0.1722=0.1426. τ²=0.005; ratio=28.5, close to 28.71. So k = μ(1-μ)/τ²? Actually k ≈ 0.1426/0.005=28.52. Yes. The paper says k=28.71, τ²=0.005. So k = within variance / τ². We can state k = \bar{v}/τ² where \bar{v}=μ(1-μ) or estimated. Good.
L1: min_β (1/N)Σ logloss + λ||β||_1; C=1/λ? In sklearn C inverse regularization. C range 1e-6 to 0.01. Need mention coefficient 0.598 for aggression power.
Spearman: ρ = 1 - 6Σd_i²/(n(n²-1)) for no ties; unitless.
Potential singularity/breakdown: D→0, D→∞, n→0 shrinkage, τ²→0 k→∞, p=0/1 log loss, multicollinearity, missing equations. Need mention units: p dimensionless probability; x metrics counts/time/percent; θ units reciprocal metric to make P dimensionless; D reciprocal P; k rounds; τ² probability²; fps Hz.

Need include exact quotes with pages:
[PAGE 4] "unanimous loss (0), split decision loss (1/3), split decision win (2/3), and unanimous win (1)."
[PAGE 5] "identical weights are applied to both boxers' statistics, ensuring the system cannot learn to favor one corner over the other."
[PAGE 8] "Method of Moments estimation yielded k = 28.71" and "between-judge variance τ² = 0.005"
[PAGE 9] "Maximum impact punches are valued over 10× higher than minimum impact punches"
[PAGE 10] "aggression power as the second most important metric (coefficient = 0.598)"
[PAGE 10] "aggression power shows the strongest correlation among pressure/aggression indicators (r = 0.493, p < 0.001)"
[PAGE 11] "The point-based model had 76% agreement, below the average pairwise agreement rate of 81%"
[PAGE 14] "estimated per-punch accuracy of around 95%"
[PAGE 14] "Floyd Mayweather Jr. averages 9.8 usable rounds per bout in our dataset while power-puncher Mike Tyson averages only 3.9 usable rounds, 60% fewer."
Need quote exact. Good.

<RETROCAUSAL_GENEALOGY>
Write historical lineage:
- 1980s CompuBox clickers, binary jab/power, real-time; limitations [PAGE 1].
- UFC Fight Stats similar clicker; James et al 2016 used 11 metrics overall not round-by-round [PAGE 1].
- Academic boxing studies <50 bouts due manual annotation [PAGE 1].
- Other sports codified judging and CV: gymnastics JSS, VAR offside 92.1 to 98.3 [PAGE 2].
- Pose estimation struggles occlusion; DeepStrike raw video action recognition 47 metrics [PAGE 2].
- This paper uses 1,003 bouts, 7,323 rounds, 17,575 judge scores [PAGE 13].
- Multi-week traps: sample selection, scorecard availability underrepresents UK; KO artists fewer usable rounds; beta DeepStrike single-camera; arbitrary timing windows; label leakage. Mention "multi-week" as traps that emerge after repeated replication: dataset drift, camera production differences, judge era, sanctioning body. Need use exact.

<RECURSIVE_THEORY_OF_MIND>
Need address crisis habit regression vs counter-trap vs clock. Write:
- Judge is an agent scoring under uncertainty; fighter is agent optimizing for judge's scoring function; model is third-order observer. Recursive ToM: judges model fighter intent; fighters model judge priors; model models judge's aggregate behavior. 
- Crisis habit regression: under fatigue/late rounds, judges may regress to salient power/aggression; PB weights show aggression power important [PAGE 10,12]; pressure movement not important [PAGE 12/13]; recency bias possible [PAGE 14]. 
- Counter-trap: fighter may exploit judge heuristics by "occupying guard" and high-commitment punches even if blocked [PAGE 12]; but if judges counter-trap by rewarding clean effective punching, pure aggression loses. L1 shows aggression power coefficient 0.598 but aggression exchanges not selected [PAGE 10]; so counter-trap must be power-commit not empty volume.
- Clock: 3-min men, 2-min women [PAGE 3]; DeepStrike 25/30 fps [PAGE 14]; round boundaries manual [PAGE 3]; timing windows 3s arbitrary [PAGE 14]. Clock-related bias: late-round action. Model has no round number? It uses round-level metrics only; no explicit clock context except aggregates. Thus cannot model recency or scorecard carryover. Need mention PB has no visibility to previous rounds [PAGE 11] "no visibility into potentially biasing factors ... outcomes of previous rounds". Good quote. This is important. Use [PAGE 11].
Need be careful "crisis habit regression" maybe not in source. Define as our audit concept, not paper claim. State it as interpretive frame; source evidence limited. Good.

<CROSS_LAYER_VETO_ADJUDICATION>
Need physical/biomechanical/weather veto proof:
- Physical: frame sampling 25/30 fps (40/33.3 ms period); punch events < frame? Temporal aliasing; single-angle occlusion [PAGE 14]; per-punch accuracy 95% [PAGE 14]; no confidence intervals per punch? Stats autonomous no human validation [PAGE 14]. 
- Biomechanical: DeepStrike classes impact levels (min/low/mid/high/max) but no measured force/impulse/pressure; cannot convert to N·s, J, Pa. High impact is perceptual/action-recognition label. "compuBox ... glancing blow ... counted identically" [PAGE 1] motivates but DeepStrike also not ground truth. Veto: any claim about punch force or brain injury from model weights is invalid.
- Weather: no weather variables; indoor footage; any weather inference invalid. Venue/altitude/temperature not in model; source says factors untracked include visible damage, temporal context, recency [PAGE 14]. Thus weather veto.
- Cross-layer: if layer L1 (video) has occlusion, L2 punch impact estimate unreliable, L3 round aggregates biased, L4 judge score model learns proxy. Need "veto proof": we can only accept causal statements if all layers pass; otherwise downgrade to correlational. Use exact.

<RLVR_COUNTERFACTUAL_VETOES>
3 scenarios:
1. Corner-swap antisymmetry veto. Verify on held-out rounds: swap red/blue feature vectors; PB output must satisfy p_swapped = 1 - p. If not, shared-weight/red-corner bias. Prediction: if p_swapped differs >0.01, model's 76% agreement is not evidence of corner neutrality; expect drop? Need be precise. Since paper says identical weights, should hold if link has no S. Prediction: with no intercept, exact within float; with S≠0, mean p_swapped + p ≈ 2σ(S) not 1. Veto. This is verifiable from model weights.
2. Impact-label permutation/ablation veto. Take test set; permute impact class labels among landed punches while preserving total landed; retrain or evaluate. Prediction: 10× weight ordering [PAGE 9] will collapse and accuracy will approach no-impact PB model; if not, H1 unsupported. Verifiable. Need no betting.
3. Occlusion/confidence stratification veto. Use visible occlusion annotations or DeepStrike confidence; predict low-confidence rounds have lower agreement with judges; excluding bottom decile should increase PB agreement above 76% toward 81%? Could be. If no improvement, occlusion not major. Source says single-angle occlusion and multi-cam improves [PAGE 14]. Verifiable with pixel audit. Prediction: bottom decile by occlusion has ≥5 percentage point lower agreement; removing it increases agreement by 2-4 percentage points. Need not overclaim. Or use "aggression power timing-window perturbation": alter 3s window ±1s; if coefficient 0.598 and rank importance unstable, arbitrary window drives result. Prediction: Spearman correlation r=0.493 will change by >0.05. Verifiable. Need 3. Maybe use three that are concrete: corner swap, impact permutation, timing-window perturbation. Weather veto maybe separate. But RLVR scenarios should be verifiable. Include predictions. Need mention exact source values.

Need ensure no betting lines. Avoid "spread, total, moneyline, odds". Fine.

Need exact XML sections. The user asks ">= 1,000-WORD DEPTH across these exact XML sections:" and lists six tags. We need output exactly those tags? It says across these exact XML sections. We can include all six. They want THINK_TRACE >=400 words. Need no extra text outside? Probably okay but safest XML only. Start with <THINK_TRACE>. End with </RLVR_COUNTERFACTUAL_VETOES>. No markdown? Use LaTeX inside. XML tags with underscores. Good.

Need write content. Need count words? We'll write enough. Need formal equations with LaTeX. Need cite [PAGE N] and verbatim quotes. Use quotes with quotation marks. Need "verbatim" exact from source. We must ensure quotes exact. Let's verify exact text:
- [PAGE 4]: "Averaging across judges yielded four outcomes: unanimous loss (0), split decision loss (1/3), split decision win (2/3), and unanimous win (1)." Exact.
- [PAGE 5]: "Critically, identical weights are applied to both boxers' statistics, ensuring the system cannot learn to favor one corner over the other." Exact.
- [PAGE 8]: "Method of Moments estimation yielded k = 28.71, confirming genuine skill differences exist among judges (between-judge variance τ² = 0.005) beyond random sampling variation." Exact. Use τ² maybe.
- [PAGE 9]: "Maximum impact punches are valued over 10× higher than minimum impact punches" exact.
- [PAGE 10]: "L1 logistic regression identifies aggression power as the second most important metric (coefficient = 0.598)" exact.
- [PAGE 10]: "aggression power shows the strongest correlation among pressure/aggression indicators (r = 0.493, p < 0.001)" exact? Text: "aggression power  shows the strongest correlation among pressure/aggression indicators (r = 0.493,  p < 0.001)" with double spaces. We can quote normalized? Verbatim should preserve? We can quote without double spaces? Better quote exact with one space? Hmm. We can quote: “aggression power shows the strongest correlation among pressure/aggression indicators (r = 0.493, p < 0.001)” likely acceptable but double spaces omitted. Verbatim enough.
- [PAGE 11]: "The point-based model had 76% agreement, below the average pairwise agreement rate of 81% across all the professional judged rounds." Exact.
- [PAGE 14]: "DeepStrike does occasionally make visible mistakes, with an estimated per-punch accuracy of around 95%." Exact.
- [PAGE 14]: "Floyd Mayweather Jr. averages 9.8 usable rounds per bout in our dataset while power-puncher Mike Tyson averages only 3.9 usable rounds, 60% fewer." Exact.
- [PAGE 14]: "aggression and pressure indicators use arbitrarily set timing windows within DeepStrike (e.g. 3 seconds of aggression power for throwing with power commit level 4)." Exact.
- [PAGE 3]: "The dataset consists primarily of men's matches (96.7%) with standard 3-minute rounds. The remaining 3.3% are women’s matches, all featuring 2-minute rounds." Exact maybe curly.
- [PAGE 11]: "The PB models have no visibility into potentially biasing factors that may have influenced the human professional judges collectively, such as crowd noise, outcomes of previous rounds, fighter nationality, popularity, and reputation." Exact. Use.
- [PAGE 2]: "DeepStrike outputs 47 distinct metrics per fighter per round" exact? Text: "From boxing footage, DeepStrike outputs 47 distinct metrics per fighter per round". Good.
- [PAGE 1]: "a glancing blow that barely connects is counted identically to a clean, powerful shot that visibly staggers an opponent [9]." Exact.
- [PAGE 1]: "nearly half (46.5%) of matches are decided by judges' scorecards rather than knockout or stoppage [1]." Exact.
- [PAGE 2]: "Judging models that differentiate punches by impact will significantly outperform models that rely solely on the number of landed punches." Exact.
- [PAGE 2]: "Pressure and aggression indicators will emerge as particularly important factors, ranking within the top half of features when assessed through correlation analysis and feature selection." Exact.
- [PAGE 12]: "Aggression power emerged as one of the most important performance metrics across all analytical approaches, demonstrating judges' appreciation for high power-commit punches independent of success landing." Exact. Page 12? The text "Aggression power emerged..." appears on page after page 12 marker? Let's see: page 12 marker starts with "those that partially penetrate defenses..." then continues. At bottom page 12? Actually page 12 text includes "Aggression power emerged..." after "This likely reflects..." It is on page 12. Good.
- [PAGE 12]: "occupying the guard" exact? Text: "This finding aligns with established boxing wisdom that "occupying the guard" demonstrates dominance and control irrespective of clean punching." Use [PAGE 12].
- [PAGE 12/13]: "Pressure movement had essentially no meaningful relationship to judge scores, challenging traditional emphasis on "walking down" opponents." It appears page 13? Let's check: Page 12 marker after "12"; then text continues on page 13? The source shows page 12 at top? Wait page markers: "12" appears after "those that partially penetrate defenses and" before "This likely reflects..." Actually page 12 marker is on its own line before "those that partially penetrate defenses..."? Let's reconstruct: After page 11 marker, discussion continues. Page 12 marker appears after "likely reflects judges’ difficulty distinguishing between fully blocked shots and" (end page 11) then page 12: "those that partially penetrate defenses ..." Then page 12 section includes pressure movement? The text: "Two tactical indicators showed moderate importance... On the other hand... Two commonly emphasized tactical elements showed surprisingly limited predictive value. Pressure movement had essentially no meaningful relationship..." This likely on page 12. Then page 13 marker after "Training Strategy" etc. So cite [PAGE 12] for pressure movement. Good.

Need equations. Let's formulate carefully.

In SOURCE_OPERATORS_AND_EQUATIONS:
Define m_{i,c,j} metrics. Plus-minus:
\Delta m_{i,j}=m_{i,R,j}-m_{i,B,j} for non-percentage metrics; for volume/ratio raw [PAGE 7]. Actually paper says "Plus-minus performance metrics are formulated as differentials between opponents (metricself - metricopponent), except for total volume and percentage-based ratio statistics, which are analyzed as raw values." [PAGE 7]. Good.

PB:
P_{i,c}=\sum_{j=1}^{39}\theta_j x_{i,c,j}, \quad \theta_j \text{ shared} [PAGE 5].
\hat p_i = \sigma(D(P_{i,R}-P_{i,B})+S), \sigma(z)=1/(1+e^{-z}). Need note exact displayed link omitted by OCR; D,S parameters mentioned. If S absent, antisymmetry. If S nonzero, red-corner prior. Units: x counts/time/%/dimensionless; θ chosen such that θx dimensionless or point unit; D reciprocal point; p probability. 
Loss:
\mathcal L_{PB}=\frac1N\sum_{i=1}^N(\hat p_i-\bar y_i)^2. \bar y_i∈{0,1/3,2/3,1}; unit probability; MSE probability². Training lr 1e-5, momentum 0.9996, 20k, clip ±0.5 [PAGE 5].
MLP:
\mathbf h_1=ReLU(W_1\mathbf x_i+\mathbf b_1), \mathbf h_2=ReLU(W_2\mathbf h_1+\mathbf b_2), \hat p_i=\sigma(\mathbf w_3^\top\mathbf h_2+b_3); L2 λ=0.001, Adam lr=0.001 [PAGE 6].
Empirical Bayes:
Observed judge accuracy a_j = n_j^{-1}\sum_{i∈J_j} \mathbb 1[\hat y_{ij}=y_{ij}]? Pairwise. \hat a_j = μ + n_j/(n_j+k)(a_j-μ), μ=0.8278, k=28.71 rounds [PAGE 6,8]. Method of moments: s² ≈ τ² + \overline{p(1-p)/n}; \hat τ² = max(0, s² - \overline{p(1-p)/n}); k = \bar v/\hat τ², \bar v≈μ(1-μ)=0.1426 probability²; k=28.71 gives τ²≈0.00497 probability². Note k units rounds. Singularity τ²→0 k→∞; n→0 shrink to μ.
L1:
\hat β = argmin_β [-(1/N)Σ(y_i log σ(β^T z_i)+(1-y_i)log(1-σ(β^T z_i))) + λ||β||_1], C=1/λ? Actually sklearn C is inverse of regularization strength; C∈[1e-6,0.01] [PAGE 7]. Coefficients unitless per standardized feature. Aggression power 0.598 [PAGE 10].
Spearman:
ρ_s = 1 - 6Σd_i²/(n(n²-1)) for ranks (no ties); unitless. r=0.493 [PAGE 10].
Breakdown regimes:
- D→0: p→0.5; no discrimination.
- D→∞: step; gradient explosion/clipping required.
- p→0/1: log loss singular; L1 logistic; clipping.
- τ²→0: k→∞; no between-judge skill; all shrink to mean.
- n→0: judge ranking unstable; shrinkage dominates.
- multicollinearity: L1 selects arbitrary; source says preemptively reduce 47 to 30 [PAGE 7].
- OCR missing equations: exact link and point conversion not verifiable from text; must be recovered from GitHub [PAGE 3/16?]. Source says code available open-source [PAGE 3] "Analysis code, model weights and anonymized data are available open-source on GitHub [31]." [PAGE 3]. Good.

Need include "SI/information units" maybe state: counts (dimensionless), time (s), frequency (Hz), probability (dimensionless), MSE in probability², τ² in probability², k in rounds, coefficients per metric unit or dimensionless after standardization. No need bits. But invariant said SI/information/probability units; we can mention "no information-theoretic quantity is reported; if log loss used, nat/event or bit/event depending log base." We can include: L1 objective log loss measured in nats per round if natural log; source doesn't specify base. Good.

Need "ZERO TOY EQUATIONS" means don't invent fake ratios. Our equations are from source or minimal reconstructions. Need mark reconstructions. Avoid fake "Force/Fatigue". Good.

Need "ZERO BETTING LINES" no odds. Fine.

Need maybe mention "Page 16" references? Not necessary.

Need ensure word count. We'll write ~3000 words? Maybe 2000. Let's draft carefully.

Need "THINK_TRACE" >=400 words. We can write 600-700. Need not include equations too much but okay.

Potential issue: "PAGES: 15" but source has page 18. We should use source page markers. If user expects [PAGE N] markers 1-15? The source text includes pages 1-18. Use [PAGE N] as in text. Fine.

Need exact quote "between-judge variance τ² = 0.005" includes τ² maybe superscript. We'll use.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Include "weather" explicitly. We can write:
- Physical/video layer: period Δt=1/f, f∈{25,30} Hz ⇒ 33.3-40.0 ms. A punch's impact phase may be shorter than frame period; motion blur. Occlusion by referee/graphics/fighters [PAGE 14]. Veto: no force estimate from pixels.
- Biomechanical layer: impact severity is ordinal class; no Newton, joule, pascal; "high impact" is classifier output. The paper's "Maximum impact punches are valued over 10× higher than minimum impact punches" is a weight ratio in score units, not force ratio [PAGE 9]. Veto any physical force claim.
- Weather layer: source has no temperature, humidity, altitude, or venue weather covariates; videos from YouTube/Dailymotion [PAGE 3]; indoor professional boxing. Veto any weather effect. If an external weather variable is added, it must pass pre-registered venue matching; otherwise false.
- Cross-layer: condition model acceptance on video confidence, punch visibility, scorecard pairing, corner swap, judge score. If any fails, model output is correlational not causal. Use "veto proof" language.

Need "RECURSIVE_THEORY_OF_MIND" maybe title "Crisis habit regression vs counter-trap vs clock." Need explicitly structure:
1. Crisis habit regression: Under high cognitive load, judge uses low-dimensional heuristics; source shows aggression power important; pressure movement negligible; recency possible. But source doesn't measure judge cognition; don't overclaim.
2. Counter-trap: Fighter anticipates judge heuristic and feigns aggression; "occupying guard"; but model's L1 selects aggression power, not aggression exchanges. The counter-trap is power commitment. If fighter overuses blocked high-impact punches, judge may still reward due inability to distinguish blocked/penetrating [PAGE 12]. The model inherits this.
3. Clock: 3-min vs 2-min rounds; 25/30 fps; timing windows 3s arbitrary; no round number/previous-round context; so clock effects are unmodeled. Recency bias [PAGE 14].
Need "recursive theory of mind" mention judge models fighter intent, fighter models judge model, model models judge aggregate. The PB model is a third-order approximation. The model has no access to crowd noise, outcome of previous rounds, nationality, popularity, reputation [PAGE 11]. Good.

Need "RETROCAUSAL_GENEALOGY": multi-week traps. Write:
- Lineage: CompuBox 1980s -> manual annotation <50 bouts -> UFC Fight Stats -> James et al 2016 -> CV in gymnastics/VAR -> pose estimation occlusion -> DeepStrike -> this paper.
- Retrocausal: The paper's target is judge behavior, but training labels are historical judge scores; model learns the history of judging, including biases. It cannot distinguish "what judges should value" from "what judges historically valued." That is retrocausal genealogy. The model's weights are a backward projection of prior judging conventions. 
- Multi-week traps: 1) scorecard availability bias underrepresents UK bouts [PAGE 14]; 2) KO artists underrepresentation (Mayweather 9.8 vs Tyson 3.9; 60% fewer) [PAGE 14]; 3) single-camera beta DeepStrike 95% per-punch [PAGE 14]; 4) arbitrary 3s timing windows [PAGE 14]; 5) label leakage via repeat matchups/pairing; paper says manual review of video-scorecard pairing with attention to repeat match-ups [PAGE 3]. Need cite. 6) judge bias can inflate agreement rankings [PAGE 11]. These are multi-week traps because they surface only after stratification/replication.

Need "RLVR_COUNTERFACTUAL_VETOES": Write as enumerated.

Need ensure word count >1000. We'll be concise but thorough. Let's write.

Need maybe include "GSE + GSI Frontier Reasoning Foundry" in THINK_TRACE? Not necessary.

Let's craft final. Use XML tags exactly. No markdown outside. Inside, use LaTeX. Ensure quotes exact. Need not use HTML entities; XML with < and > in LaTeX? We should avoid raw < in text? In XML, < must be escaped if not tag. But we're writing plain text with tags; if we use "<" in equations, it may break XML. Need avoid less-than signs or escape as &lt;. But user wants XML sections; we can use LaTeX like $p \in [0,1]$ no <. Avoid "<" raw. Use "less than" or \le. If using p<0.001 quote, raw < inside XML text is invalid. Need escape as &lt;. But quotes should be verbatim? We can write "p &lt; 0.001" which renders as p < 0.001. But verbatim quote with &lt; is not exact raw. Hmm. XML requires escaping. We can use `&lt;` in text. That's standard. For tags, keep. Use no unescaped <. Also avoid `&` raw? Use `&amp;` if ampersand. We can write "and" instead. Use `&lt;` for less-than. For greater-than? `>` is okay in XML text? Yes, > is allowed, but we can use \gt. Use `&ge;`? Better use LaTeX `\ge` not literal. For quotes with "p < 0.001", write "p &lt; 0.001". That's acceptable. But verbatim quote? It will display as p < 0.001. Fine. Avoid raw `&` in "GSE + GSI" no ampersand. Use "plus". Avoid `<` in LaTeX? `\le` okay. Use `\mathbb{1}` okay. Use `\top` okay. Use `\hat` okay. Use `\bar`. Use `\tau^2`. Use `\sigma`. Good.

Need if using `\text{...}` with < none. Good.

Need no raw `&` in `argmin_β`? Use `\arg\min_{\beta}` no &. Good.

Need ensure XML tags not inside LaTeX. Fine.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a measurement-to-judgment inverse problem. DeepStrike converts single-angle broadcast video into punch-level and round-level metrics [PAGE 2], then the authors map 39 non-redundant round metrics onto three licensed judges’ 10-point-must scores [PAGE 4]. The central audit question is not merely “does the points-based model predict judging?” but “which layer of the pipeline is allowed to license a causal or policy claim?” The answer requires tracing five hops: frame sampling at 25 or 30 fps [PAGE 14], action recognition into punch events, aggregation into 47 round metrics [PAGE 2], plus-minus feature construction [PAGE 7], and a probability link to averaged judge scores [PAGE 4]. A claim about “what judges value” is therefore conditional on video visibility, punch classification validity, scorecard pairing, and the omitted displayed equations in the OCR text.

The paper’s strongest quantitative anchors are: 1,003 bouts and 7,323 binary-scored rounds after filtering [PAGE 3]; a points-based model with 76% agreement versus 81% average pairwise human agreement [PAGE 11]; empirical Bayes shrinkage with k = 28.71 and between-judge variance τ² = 0.005 [PAGE 8]; a greater-than-10× weight ratio between maximum and minimum impact punches [PAGE 9]; and aggression power as the second most important L1 logistic-regression feature with coefficient 0.598 [PAGE 10]. These are not interchangeable. The 76% figure is raw agreement on a held-out set of 1,450 rounds [PAGE 8], while the 81% is a human pairwise benchmark. The paper itself notes the model ranks in the 26th percentile of 227 judges with more than 20 rounds before shrinkage [PAGE 11], and in the 10th percentile after shrinkage [PAGE 8]. That is a gray-zone result: “professional-level” is true only in the weak sense of overlapping the human distribution, not in the sense of exceeding median judges.

The gray-zone audit also exposes structural leakage risks. Red corner assignment is not random: the paper says “The red corner is traditionally assigned to the fighter who is more popular, higher-ranked or more experienced” [PAGE 5]. Shared weights are necessary but not sufficient for corner neutrality if the omitted probability link contains a nonzero shared shift. The text says “identical weights are applied to both boxers' statistics, ensuring the system cannot learn to favor one corner over the other” [PAGE 5], but the displayed conversion equation is missing in the OCR. A formal audit must therefore recover that equation from the open-source code [PAGE 3] and test antisymmetry under red-blue swapping.

Other gray zones are sampling and clock. The dataset is 96.7% men’s matches with 3-minute rounds and 3.3% women’s matches with 2-minute rounds [PAGE 3]. The model is round-level and has “no visibility into potentially biasing factors... such as crowd noise, outcomes of previous rounds, fighter nationality, popularity, and reputation” [PAGE 11]. It also lacks explicit round number or scorecard carryover, so recency bias and “crisis habit regression” are not modeled directly. DeepStrike is a 2024 beta with “an estimated per-punch accuracy of around 95%” on single-angle dirty-feed footage at 25 or 30 fps [PAGE 14], and aggression/pressure timing windows are “arbitrarily set” [PAGE 14]. Those are multi-week replication traps: they do not invalidate the paper, but they veto strong causal claims until stratified by occlusion, camera angle, round length, and timing-window sensitivity.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(i=1,\dots,N\) index rounds, \(c\in\{R,B\}\) index red/blue corners, \(j=1,\dots,J\) index performance metrics, and \(k=1,2,3\) index judges. The dependent variable is constructed from individual judge decisions. The paper states: “Averaging across judges yielded four outcomes: unanimous loss (0), split decision loss (1/3), split decision win (2/3), and unanimous win (1)” [PAGE 4]. Formally, for judge indicators \(y_{ik}\in\{0,1\}\),

\[
\bar y_i=\frac{1}{3}\sum_{k=1}^{3}y_{ik}\in\left\{0,\frac{1}{3},\frac{2}{3},1\right\},
\]

with \(\bar y_i\) dimensionless in probability units. The points-based model defines shared metric weights \(\theta_j\) and corner-specific point totals

\[
P_{i,c}=\sum_{j=1}^{39}\theta_j x_{i,c,j},
\]

where \(x_{i,c,j}\) may be a count, time in seconds, percentage, or indicator, and \(\theta_j\) carries inverse metric units so that \(P_{i,c}\) is a point score. The paper’s prose defines the model family as “a score between 0 and 1 based on a ratio of points earned” and says “identical weights are applied to both boxers' statistics” [PAGE 5]. Because the displayed conversion equation is not preserved in the OCR, the audited minimal link is

\[
\hat p_i=\sigma\!\left(D\left(P_{i,R}-P_{i,B}\right)+S\right),\qquad
\sigma(z)=\frac{1}{1+e^{-z}},
\]

where \(\hat p_i\in[0,1]\) is the predicted probability that the red corner wins the round, \(D\) is a reciprocal-point scaling parameter, and \(S\) is a shared shift. If \(S=0\), red-blue swapping gives \(\hat p_i^{\text{swap}}=1-\hat p_i\). If \(S\neq0\), the model contains a red-corner prior, so the shared-weight claim alone does not prove corner neutrality. The exact \(D,S\) link must be recovered from code [PAGE 3].

Training minimizes mean squared error:

\[
\mathcal L_{\mathrm{PB}}=\frac{1}{N}\sum_{i=1}^{N}\left(\hat p_i-\bar y_i\right)^2,
\]

in probability-squared units. The paper reports “learning rate: 0.00001, momentum: 0.9996, 20,000 iterations, gradient clipping: ±0.5” [PAGE 5]. The MLP alternative is

\[
\mathbf h_{i,1}=\operatorname{ReLU}(W_1\mathbf x_i+\mathbf b_1),\quad
\mathbf h_{i,2}=\operatorname{ReLU}(W_2\mathbf h_{i,1}+\mathbf b_2),\quad
\hat p_i=\sigma(\mathbf w_3^\top\mathbf h_{i,2}+b_3),
\]

with two hidden layers of 32 and 16 neurons, ReLU activation, L2 regularization 0.001, sigmoid output, and Adam learning rate 0.001 [PAGE 6]. Its loss is MSE plus L2 penalty.

For judge benchmarking, empirical Bayes shrinkage is

\[
\hat a_j=\mu+\frac{n_j}{n_j+k}\left(a_j-\mu\right),
\]

where \(a_j\) is raw pairwise accuracy, \(n_j\) is rounds scored, \(\mu=0.8278\), and \(k\) is in rounds. The paper reports “Method of Moments estimation yielded k = 28.71, confirming genuine skill differences exist among judges (between-judge variance τ² = 0.005) beyond random sampling variation” [PAGE 8]. A standard Method-of-Moments decomposition is

\[
s^2 \approx \tau^2+\overline{\frac{p(1-p)}{n}},\qquad
\hat\tau^2=\max\!\left(0,\;s^2-\overline{\frac{p(1-p)}{n}}\right),
\]

with \(s^2\) and \(\tau^2\) in probability-squared units; \(k\approx \bar v/\hat\tau^2\), where \(\bar v\approx \mu(1-\mu)=0.1426\) probability-squared. This gives \(k\approx0.1426/0.005\approx28.5\), consistent with 28.71. As \(\tau^2\to0\), \(k\to\infty\) and all judges shrink to \(\mu\); as \(n_j\to0\), the shrinkage dominates and judge rankings become unstable.

Feature importance uses plus-minus differentials “except for total volume and percentage-based ratio statistics, which are analyzed as raw values” [PAGE 7]. L1 logistic regression solves

\[
\hat\beta=\arg\min_{\beta}\left[-\frac{1}{N}\sum_{i=1}^{N}\left(y_i\log\sigma(\beta^\top z_i)+(1-y_i)\log(1-\sigma(\beta^\top z_i))\right)+\lambda\|\beta\|_1\right],
\]

with regularization strength optimized across \(C\) values from \(10^{-6}\) to \(0.01\) [PAGE 7], where \(C\) is the inverse regularization strength in common scikit-learn parameterization. Log loss is in nats per round for natural log or bits per round for base-2 log; the source does not specify the base. Spearman rank correlation is

\[
\rho_s=1-\frac{6\sum d_i^2}{n(n^2-1)}
\]

for ranks without ties, dimensionless. The paper reports “aggression power shows the strongest correlation among pressure/aggression indicators (r = 0.493, p &lt; 0.001)” [PAGE 10]. The maximum-to-minimum impact weight contrast is not a physical force ratio: “Maximum impact punches are valued over 10× higher than minimum impact punches” [PAGE 9] in score-weight units, not newtons, joules, or pascals.

Breakdown regimes: \(D\to0\) yields \(\hat p_i\to\sigma(S)\), i.e., no discrimination; \(D\to\infty\) yields a step function and near-singular gradients at ties, motivating gradient clipping. \(\hat p_i\to0\) or \(1\) makes log loss singular in the L1 model. Multicollinearity makes L1 selection unstable; the paper preemptively reduced 47 plus-minus metrics to 30 “conceptually distinct representatives” [PAGE 7]. Finally, because the exact point-to-probability equation is absent from the OCR, any claim that the model is provably corner-neutral is conditional on code verification.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage runs from CompuBox in the 1980s through manual academic annotation to DeepStrike. CompuBox used “two trained operators with clickers to count thrown and landed punches in real time,” but “all landed punches are categorized as either a ‘jab’ or a ‘power punch’ with no further differentiation; a glancing blow that barely connects is counted identically to a clean, powerful shot that visibly staggers an opponent” [PAGE 1]. Academic boxing studies typically analyzed fewer than 50 bouts because of manual annotation [PAGE 1]. UFC Fight Stats offered a larger clicker-based alternative, and James et al. (2016) used 11 metrics, but the paper notes reliance on “overall fight statistics rather than round-by-round breakdowns” [PAGE 1]. Other sports supplied the template: gymnastics’ Judging Support System and soccer VAR, where the paper reports offside accuracy improved “from 92.1% to 98.3% across 2,195 matches” [PAGE 2]. Pose estimation was a candidate, but combat-sport occlusion made it fragile; DeepStrike instead uses raw-video action recognition and outputs “47 distinct metrics per fighter per round” [PAGE 2]. This paper then scales to 1,003 bouts, 7,323 binary rounds, and “17,575 individual judge scores” [PAGE 13].

Retrocausally, the model is trained on historical judge scores, so its weights are a backward projection of prior judging conventions. It learns what judges historically rewarded, not what a normative rulebook says they should reward. That distinction matters because the paper explicitly warns that judge bias is a known problem and that agreement-based rankings can be inflated if biases skew judges in the same direction [PAGE 11]. The model’s transparency is therefore double-edged: it can reveal judge priors, but it can also fossilize them.

Multi-week traps are the sampling and validation failures that only surface after stratification or replication. First, scorecard availability may underrepresent UK bouts [PAGE 14]. Second, knockout artists generate fewer usable rounds: “Floyd Mayweather Jr. averages 9.8 usable rounds per bout in our dataset while power-puncher Mike Tyson averages only 3.9 usable rounds, 60% fewer” [PAGE 14]. That biases the data toward defensive, decision-oriented styles. Third, DeepStrike is a 2024 beta with “an estimated per-punch accuracy of around 95%” [PAGE 14], and single-angle footage at 25 or 30 fps suffers occlusion from referees, graphics, and bodies [PAGE 14]. Fourth, aggression and pressure indicators use “arbitrarily set timing windows” such as 3 seconds of aggression power [PAGE 14]. Fifth, video-scorecard pairing requires manual review, especially for repeat match-ups [PAGE 3]. These are not one-off bugs; they are multi-week replication traps because they require re-stratification by era, broadcaster, camera angle, fighter style, and round length before the weights can be treated as stable scientific quantities.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive structure is three-level. A judge models fighter intent under uncertainty; a fighter models the judge’s model and adapts; the points-based model models the judge’s aggregate behavior. The paper’s feature weights are therefore third-order approximations, not direct readouts of judge cognition. The text supports this cautiously: “Aggression power emerged as one of the most important performance metrics across all analytical approaches, demonstrating judges' appreciation for high power-commit punches independent of success landing” [PAGE 12]. That is consistent with judges using a low-dimensional heuristic when clean-landing evidence is occluded or ambiguous.

Crisis habit regression: under fatigue, late-round ambiguity, or occluded exchanges, judges may regress toward salient power commitment and ring geography rather than fine-grained clean punching. The evidence is indirect but coherent: aggression power has L1 coefficient 0.598 [PAGE 10] and Spearman \(r=0.493\) [PAGE 10], while “Pressure movement had essentially no meaningful relationship to judge scores, challenging traditional emphasis on ‘walking down’ opponents” [PAGE 12]. The paper also flags “potential recency bias favoring late-round action” as untracked [PAGE 14]. Since the PB model has no round-number or prior-round scorecard context [PAGE 11], it cannot directly model crisis regression; it can only average over it.

Counter-trap: a fighter can exploit judge heuristics by “occupying the guard,” which the paper says “demonstrates dominance and control irrespective of clean punching” [PAGE 12]. But the counter-trap is not empty volume. L1 logistic regression selects aggression power but does not select aggression combinations or aggression exchanges [PAGE 10]. The model therefore implies that high-commitment punching is rewarded even when landing success is unclear, while mere exchange initiation is not. A sophisticated fighter who feigns aggression with low-impact flurries may fail to move the model and may fail to move judges; a fighter who commits visible power may move both. The recursive risk is that fighters optimize to the judge’s heuristic, judges counter by rewarding clean effective punching, and the model learns whichever equilibrium dominated the historical sample.

Clock: the dataset mixes 3-minute men’s rounds and 2-minute women’s rounds [PAGE 3], and DeepStrike operates on 25 or 30 fps footage [PAGE 14]. The aggression/pressure windows are arbitrary 3-second constructs [PAGE 14]. The model has no explicit clock variable, no round index, and no previous-round score. Thus any “clock” claim—late-round urgency, recency, between-round carryover—is out-of-model unless the open-source code adds it. The safe recursive statement is: the model estimates the judge’s average round-level policy, not the judge’s time-varying belief state.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/video layer veto: at \(f=25\) Hz the frame period is \(40.0\) ms; at \(f=30\) Hz it is \(33.3\) ms. A punch’s impact phase and glove contact can be shorter than one frame period, and single-angle footage is occluded by referees, graphics, and bodies [PAGE 14]. DeepStrike’s “per-punch accuracy of around 95%” [PAGE 14] is an aggregate estimate, not a per-round confidence guarantee. Veto: no claim about a specific punch’s force, cleanliness, or contact quality can be accepted from this pipeline without frame-level human adjudication or multi-camera confidence.

Biomechanical layer veto: the model uses ordinal impact classes and round aggregates, not measured impulse, force, pressure, or head acceleration. “Maximum impact punches are valued over 10× higher than minimum impact punches” [PAGE 9] is a scoring-weight ratio, not a Newton-second ratio. DeepStrike does not report force plates, IMU, or high-speed kinematics in the source. Veto: any statement that the model measures “power” in physical units, or that a high-impact label implies a specific injury dose, is invalid. The paper’s own motivation—that CompuBox counts “a glancing blow that barely connects” identically to “a clean, powerful shot” [PAGE 1]—shows why impact differentiation matters, but it does not turn the classifier into a dynamometer.

Weather/environment layer veto: the source uses YouTube and Dailymotion footage and BoxRec scorecards [PAGE 3]; it reports no temperature, humidity, altitude, or venue-weather covariates. Professional boxing in this sample is indoor broadcast footage. Veto: any weather-derived adjustment, altitude correction, or humidity effect is out-of-domain. If an external weather variable is later merged, it must pass pre-registered venue matching and missing-data audits; otherwise it is a spurious layer.

Cross-layer adjudication rule: a result survives only if video confidence, punch visibility, scorecard pairing, corner-swap antisymmetry, and judge-score construction all pass. If any layer fails, downgrade the claim from causal to correlational. The paper’s own limitations—untracked visible damage, temporal context, recency, arbitrary timing windows, and beta-model error [PAGE 14]—are exactly the layers that can veto a policy claim even when the held-out MSE is competitive.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto 1: corner-swap antisymmetry. Verification: recover the PB link from the open-source code [PAGE 3], swap red and blue feature vectors on held-out rounds, and check whether \(\hat p_{\text{swap}}=1-\hat p\) within numerical tolerance. Prediction: if \(S=0\) in the link, the identity holds to floating-point precision and the shared-weight claim [PAGE 5] is substantiated; if \(S\neq0\), mean \(\hat p_{\text{swap}}+\hat p\) deviates from 1 by \(2\sigma(S)-1\), revealing a red-corner prior. A deviation greater than 0.01 in probability would veto the paper’s corner-neutrality interpretation, even if raw agreement remains 76% [PAGE 11].

Veto 2: impact-label permutation. Verification: preserve each round’s total landed-punch count but randomly permute the min/low/mid/high/max impact labels among landed punches, then retrain or re-evaluate the PB model. Prediction: if impact differentiation is real, permutation collapses the reported greater-than-10× max-to-min weight contrast [PAGE 9] and drives accuracy toward the no-impact PB baseline in Table 5 [PAGE 9]. If accuracy and weight ordering survive intact, Hypothesis 1 is not supported by the model’s own counterfactual. This is a direct, reproducible RLVR test because it requires only labels already described in the source.

Veto 3: timing-window perturbation for aggression power. Verification: alter DeepStrike’s “arbitrarily set timing windows” [PAGE 14], especially the “3 seconds of aggression power” window, by ±1 s and recompute the L1 coefficient and Spearman correlation. Prediction: if the aggression-power finding is robust, the coefficient near 0.598 [PAGE 10] and \(r=0.493\) [PAGE 10] should remain directionally stable and retain top-half feature rank. If the coefficient changes sign or falls out of the selected set under a modest window shift, the finding is a window artifact and should be vetoed as a stable judge preference. A secondary prediction is that occlusion-stratified rounds will show lower agreement than clean rounds, consistent with the paper’s single-angle limitation [PAGE 14]; if low-confidence rounds do not differ, the occlusion-veto rationale weakens.
</RLVR_COUNTERFACTUAL_VETOES>