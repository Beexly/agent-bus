---
source: "2022 - Optical tracking in team sports A survey on player and ball tracking methods in soccer and other team sports - Rahimian et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Journal of Quantitative Analysis in Sports/2022"
pages: 32
model: deepseek/deepseek-v4.1-flash-1017
words: 8084
---

<NATIVE_REASONING>
We need answer user. Need infer task? They provide DRIVE SOURCE, pages, source text, and prompt is GSE+GSI Frontier Reasoning Foundry with strict invariants and required XML sections. Need produce analysis of source? Need likely answer with sections. Must adhere zero betting lines. Need cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need >=1000 words across exact XML sections. Need deep multi-hop derivation >=400 words in THINK_TRACE. Need formal LaTeX equations, units, page citations, breakdown regimes. Need retrocausal genealogy. Recursive theory of mind. Cross-layer veto adjudication. RLVR counterfactual vetoes 3 scenarios predictions. Need not mention betting. Need likely evaluate source as "drive source" maybe no specific sports event? It's an academic survey on optical tracking. Need synthesize. Need include page markers [PAGE 35] etc? Source text has page numbers 35-57. Need map citations. Need quote exact phrases. Need strict no betting lines. No fake ratios. Need formal equations that are in source: GMM probability? Source has equations omitted due extraction; but we can state as source. Particle filter approximation equation missing in text? It says "This method approximates probability distribution with weighted set N samples:" equation not text. Kalman state evolution equation omitted. We can reconstruct standard equations? But must be formal LaTeX, units, assumptions, breakdown. Could cite source for qualitative. Need be careful not invent source equations. We can state equations as standard definitions referenced by source? The source includes equations (2),(3),(4) but extraction omitted. Need maybe cite exact [PAGE 38], [PAGE 42-44], [PAGE 48]. We can use formulas from text: BC = sum sqrt(p(x) q(x)); Cd = P^2/(4πA); IOU; gradient direction tan^-1(Δy/Δx); x_k = x_{k-1}+v_k. GMM probability formula not shown but text has P(X_t)=? We can write standard GMM equation and note text omission? Need exact singularity regimes: e.g. IOU denominator zero if both boxes empty; Cd undefined A=0; BC requires nonnegative distributions; particle filter degeneracy when weights collapse; Kalman Gaussian linear assumptions; homography singular; camera sync.

Need incorporate "multi-week traps" in RETROCAUSAL_GENEALOGY. Maybe discuss historical lineage and traps over multi-week sports analytics workflows: tracking data provenance, model selection, detection/tracking conflation, validation leakage, occlusion handling, camera setup costs, jersey number OCR etc. Need no betting.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Source is optical tracking survey, not event. We can frame veto adjudication for any downstream quantitative model: physical occlusion, biomechanical non-rigid deformation, weather/lighting. Need proof from source: poor light conditions [PAGE 35], overlaps [PAGE 35], shadows [PAGE 38], blurry [PAGE 38], player jumping/falling limitation in Table 10? Need cite pages. The source page mapping: PAGE 35 likely title/abstract/intro; PAGE 36 continuation; PAGE 37 section 2 and 3 beginning; PAGE 38 section 3.1; PAGE 39 Table1; PAGE 40 Table1 cont/Figure; PAGE 41 3.1.4/3.2; PAGE 42 4 Player tracking; PAGE 43 Table2; PAGE 44 Table3/4; PAGE 45 contour; PAGE 46 Table5/6; PAGE 47 graph; PAGE 48 DL tracking; PAGE 49 Table8; PAGE 50 YOLO/Siam; PAGE 51 evaluation; PAGE 52 Table9; PAGE 53 Table10; PAGE 54 continuation; PAGE 55 conclusion; PAGE 56 refs; PAGE 57 refs. Need exact quotes from text. We can cite quotes. Need quote exact verbatim. Let's identify exact phrases.

From source:
- Abstract: "we summarize the recent methods of optical tracking by providing a comprehensive taxonomy of conventional and deep learning methods, separately." [PAGE 35? abstract page 35]
- "tracking usually fails in the cases of overlaps, poor light conditions, and low quality of the videos." [PAGE 35]
- "Detection methods provide the input to tracking, which would be a simple task if all players and the ball were totally visible in each frame and there were no occlusion." [PAGE 37? section 3 starts page 37]
- "However, in real-world videos, most frames are blurry and continuous tracking fails due to e.g., occlusion, poor light, or posture changes." [PAGE 37]
- "Bounding boxes are imaginary boxes around players and the ball ..." [PAGE 37]
- GMM: "where 𝜔i is the weight for the ith component (all summing to 1), and 𝜂 ( Xt ) is a normal distribution density function." [PAGE 38]
- "This algorithm cannot recognize players in shadows." [PAGE 38]
- Pixel energy: "the slower energy points (static ones) represent the background, and higher energy points (moving ones) represent the players or the ball." [PAGE 38]
- Canny: "This method works only for videos recorded with fixed cameras." [PAGE 40? Actually page 40 after Figure 4? text spans page 39-40. It appears on page 40 maybe. Need map: Page 39 has Table1 and Figure3/4? The text "This method works only..." appears after Figure 4 on page 40? Let's use [PAGE 40]. 
- Sobel: "Due to the similar color of the ball and the court lines..." [PAGE 40]
- "However, general overlapping problems, e.g., player occlusion, cannot be handled with this method." [PAGE 40]
- Deep learning: "Most of these methods require special versions of GPUs to be applied." [PAGE 41]
- Tracking challenge: "The biggest challenge in tracking is the overlapping of players, namely the occlusion." [PAGE 42]
- Particle filter: "All particle filter tracking systems aim to estimate the state of a system (xt), given a set of noisy observations (z1:t). Thus the goal is to estimate P(xt | z1:t)." [PAGE 42]
- "This method approximates the probability distribution with a weighted set of N samples:" [PAGE 42]
- Kalman: "where F is the transition matrix for state vector xt−1, B is the control-input matrix for control vector ut−1, and ωt−1 is the noise following a zero-mean Gaussian distribution." [PAGE 44]
- "Kalman filter performs this task by linear projections (3), while the Particle filter does so by estimating the probability distribution (2)." [PAGE 44]
- Shape matching: "The problem in this area is that the shape of the ball varies significantly in each frame, and does not look like a circle at all (Figure 14)." [PAGE 46]
- Cd formula: "Cd = P2 ∕4πA. Therefore, if Cd > 50%, the shape can be filtered as a ball." [PAGE 46]
- IOU: "IOU is the ratio of intersection of the ground truth bounding box from the previous frame (BBA), and predicted bounding box in the current frame (BBB), and it is calculated as in (4)" [PAGE 48]
- Cost: "deep learning methods which require GPUs are more expensive than traditional methods with only CPUs." [PAGE 52? Section 5.2 on page 52]
- Conclusion: "the combination of traditional and deep learning methods can be rarely seen in the literature." [PAGE 55]
- "Traditional models are time-consuming and require domain expertise... deep learning models are quite expensive..." [PAGE 55]
- Table 9 criteria: "Availability of huge training dataset" etc. [PAGE 52]
- Table 10 limitations: "Cannot detect occluded players" maybe [PAGE 53] but table garbled. Need cite maybe [PAGE 53].
- "Very low accuracy" for Adaboost? [PAGE 53]
- "High computational time" etc. [PAGE 53-54].
Need not overquote.

Need answer likely no specific query; perhaps create "frontier reasoning audit" of source. We need produce exact XML sections. Ensure >=1000 words total. Desired oververbosity 5 but user demands deep. Need satisfy.

Need structure:
<THINK_TRACE> >=400 words. Include multi-hop derivation & gray-zone audit. Need analyze source, not invent. Could discuss mapping pipeline: video frames -> detection (bounding boxes) -> tracking (association) -> trajectories -> analytics. Derivation: detection error propagates; occlusion causes association ambiguity; validation metrics (precision, MOTA, IOU) are not commensurable; cost model. Gray-zone: source mixes detection/tracking metrics, tables incomplete; equations omitted by extraction; page citations. Avoid fake ratios. Mention no betting.

<SOURCE_OPERATORS_AND_EQUATIONS> Formal LaTeX. Need include:
- Bounding box IOU equation: \(\mathrm{IoU}(A,B)=\frac{|A\cap B|}{|A\cup B|}\). Units: dimensionless pixel-count ratio. Assumptions: axis-aligned boxes, nonempty union. Breakdown: \(\|A\cup B\|=0\) undefined; low overlap under fast motion; partial occlusion.
- GMM pixel probability: \(p(X_t)=\sum_{i=1}^{k}\omega_i \eta(X_t;\mu_i,\Sigma_i)\), \(\sum \omega_i=1\). Units: \(\omega_i\) dimensionless; \(X_t\) RGB/color intensity vector; \(\eta\) density in inverse color units. Assumptions pixels i.i.d? Background modeled by k Gaussians; thresholds arbitrary. Breakdown: shadows, lighting changes, camera motion; source says cannot recognize players in shadows [PAGE 38].
- Particle filter: \(p(x_t|z_{1:t}) \approx \sum_{i=1}^N \omega_t^{(i)} \delta(x_t-x_t^{(i)})\). Units: state position m, velocity m/s; weights dimensionless sum 1; observation likelihood. Assumptions weighted samples; proposal; resampling. Breakdown: sample degeneracy when effective sample size \(N_{\rm eff}=1/\sum (\omega^{(i)})^2\) small; high-dimensional state; occlusion. Need not fake ratio? N_eff is standard, not fake. But user said no fake ratios, formal equations okay. Maybe include.
- Kalman filter: \(x_t=F x_{t-1}+B u_{t-1}+\omega_{t-1}\), \(\omega\sim\mathcal N(0,Q)\). Units depend state. Assumptions linear Gaussian. Breakdown: nonlinear/non-Gaussian, player-ball occlusion. Source says KF linear projections and particle filter distribution [PAGE 44].
- BC: \(\mathrm{BC}(p,q)=\sum_x \sqrt{p(x)q(x)}\). Units dimensionless; p,q normalized histograms. Breakdown undefined if distributions not normalized/nonnegative; no overlap BC=0.
- Shape compaction: \(C_d=P^2/(4\pi A)\). Units dimensionless if P length and A length^2; true circle C_d=1? Actually P^2/(4πA); for circle P=2πr, P^2=4π^2r^2, A=πr^2, ratio=1. Source says if Cd > 50% filtered as ball (weird). Breakdown A=0 undefined; perspective distortion, non-circular projection.
- Gradient direction: \(\theta=\tan^{-1}(\Delta y/\Delta x)\); breakdown Δx=0 (vertical).
- Particle motion: \(x_k=x_{k-1}+v_k\), \(v_k\sim\mathcal N(0,\Sigma)\). Units m, m/s? Actually x position, v noise maybe displacement per step; units m. Breakdown non-i.i.d. motion, jumps/falls.
- Maybe SIFT/Harris not equations. 
Need cite exact [PAGE N] markers and verbatim quotes. Include page citations for each formula? Source page 38, 42, 44, 46, 48. Need state extraction missing explicit equation bodies; formulas are standard reconstructions? To be safe: "The source states GMM ... but the displayed equation body is not recoverable in the supplied text [PAGE 38]; I write the standard form only to make units explicit." This is honest. For Kalman likewise. But prompt says source pages provided cite exact markers. Need no fake equations? We can present formal standard forms and mark reconstruction. Good.

<RETROCAUSAL_GENEALOGY> Historical/scientific lineage & multi-week traps. Need trace from 2000s handcrafted features (HOG, GMM, edge, SVM/Adaboost) to particle/KF/PDM/contour/silhouette/graph/data association to deep learning CNN/VGG/YOLO/SiamCNN. Multi-week traps: (1) assuming detection metric transfers to tracking; (2) collecting a few matches and overfitting thresholds; (3) camera setup drift and calibration over weeks; (4) annotation leakage from jersey numbers; (5) cost underestimation; (6) occlusion recurrence across weeks; (7) weather/lighting. Use page citations. Need mention "retro causal" maybe how later deep learning reinterprets earlier feature bottlenecks; earlier methods are not obsolete in low-data regimes. "Genealogy" from 2000 to 2022 survey. Multi-week traps over a tracking project: week 1 choose method based on benchmark precision; week 2 collect; week 3 tuning; week 4 failure due occlusion/camera; etc. Need no betting.

<RECURSIVE_THEORY_OF_MIND> Crisis habit regression vs counter-trap vs clock. Need interpret as analyst/coach behavior under crisis. Discuss "crisis habit regression" = revert to familiar metrics or manual annotation; "counter-trap" = deliberately maintain detection/tracking separation, validate on held-out match dates, use ensemble/ hybrid; "clock" = temporal leakage and synchronization. Use source evidence: camera sync, moving cameras, longer trajectories; detection fails due blur, poor light, occlusion [PAGE 35, 37]; deep learning black box [PAGE 51]; traditional interpretability [PAGE 51]. Need relate to theory of mind: what analyst believes about data consumer, what model believes about occluded player, what coach assumes. Use recursive mental models. No betting.

<CROSS_LAYER_VETO_ADJUDICATION> Physical/biomechanical/weather veto proof. Need adjudicate whether downstream quantitative model can proceed. Physical: occlusion/overlap, shadows, poor light, blur, camera movement. Biomechanical: non-rigid player deformation, jumping/falling, arm shooting, false contours; shape descriptors break. Weather: lighting/shadows/rain? Source doesn't mention weather explicitly except poor light/shadows. Use "poor light conditions" [PAGE 35], "shadows" [PAGE 38], "blur" [PAGE 37]. Veto proof: if a required player/ball state is unobservable or association ambiguous, any trajectory-derived metric is not identifiable; no downstream model can recover missing information unless multi-view or prior. Need formal proof sketch: observation model \(z_t=h(x_t)+\epsilon_t\); if occlusion makes \(h\) non-injective or missing, posterior may be multimodal; Kalman Gaussian unimodal fails; particle filter can represent multimodal but degeneracy. Need state exact singularity: IOU denominator zero, Cd A=0, BC zero/non-normalized, Kalman covariance singular. Veto conditions. Good.

<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Reinforcement learning with verifiable rewards? Maybe "RLVR counterfactual vetoes" = three scenarios with verifiable reward counters that veto claims. Need make scenarios about source claims. Example:
1. Occlusion counterfactual: Train/report player tracking on broadcast with occlusion. Veto if claimed continuous trajectory without occlusion handling. Prediction: IOU-based tracking yields ID switches; source says biggest challenge occlusion [PAGE 42]; Figueroa 88% solved occlusions [PAGE 47], not 100. Verify via identity switch count.
2. Shadow/lighting counterfactual: GMM background subtraction. Veto if claimed robust to shadows. Source says cannot recognize players in shadows [PAGE 38]. Prediction: shadow pixels misclassified as foreground; precision drops.
3. Deep learning cost counterfactual: Claim DL cheaper. Source says DL requires GPUs and more expensive [PAGE 52, 41]. Veto if cost claim ignores infrastructure. Prediction: CPU-only deployment latency high; GPU requirement invalidates cheap claim.
4. Maybe shape descriptor for ball: \(C_d > 50\%\) filter; veto if ball under motion/perspective not circular. Source says shape varies significantly [PAGE 46]. Prediction: high false negatives.
Need 3. Include verifiable predictions: count ID switches, shadow foreground area, latency. No betting.

Need ensure total >=1000 words. We can write ~2500 words. Need exact XML tags. No markdown outside? We can use XML only. Need not include betting. Check no mention spreads/totals/moneylines/odds. Avoid "odds". Good.

Need decide if use [PAGE N] exact. We need cite exact markers. Let's map quotes accurately.

Let's parse source page boundaries from text:
Page 35: title, abstract, intro start, corresponding authors. "tracking usually fails in the cases of overlaps, poor light conditions, and low quality of the videos." This is page 35 likely.
Page 36: continuation intro, section 2 eligibility? Actually source at "**36** | P. Rahimian..." then "their suitable method..." then section 2. Yes page 36 includes section 2 start? The page break after "**36** | ..." likely page 36. Section 2 begins on page 36 and continues page 37. Need cite [PAGE 36] for eligibility? Maybe [PAGE 36] for "125 papers... 50 papers eligible". Page 37 has section 3. Page 38 has section 3.1. Page 39 Table 1 start. Page 40 Table1 cont and Figure 3/4 and text. Page 41 3.1.4, 3.2. Page 42 section 4. Page 43 Table 2 and particle filter. Page 44 KF and Table3/4. Page 45 contour. Page 46 shape. Page 47 graph. Page 48 DL tracking. Page 49 Table8. Page 50 YOLO/Siam. Page 51 evaluation. Page 52 Table9/cost. Page 53 Table10. Page 54 Table10 continued. Page 55 conclusion. Page 56 refs. Page 57 refs.

Need exact quotes:
- "tracking usually fails in the cases of overlaps, poor light conditions, and low quality of the videos." [PAGE 35]
- "The biggest challenge in tracking is the overlapping of players, namely the occlusion." [PAGE 42]
- "However, in real-world videos, most frames are blurry and continuous tracking fails due to e.g., occlusion, poor light, or posture changes." [PAGE 37]
- "This algorithm cannot recognize players in shadows." [PAGE 38]
- "However, general overlapping problems, e.g., player occlusion, cannot be handled with this method." [PAGE 40]
- "Most of these methods require special versions of GPUs to be applied." [PAGE 41]
- "The problem in this area is that the shape of the ball varies significantly in each frame, and does not look like a circle at all (Figure 14)." [PAGE 46]
- "deep learning methods which require GPUs are more expensive than traditional methods with only CPUs." [PAGE 52]
- "the combination of traditional and deep learning methods can be rarely seen in the literature." [PAGE 55]
- "Traditional models are time-consuming and require domain expertise due to some manual feature extraction tasks, while deep learning models are quite expensive to run in terms of computing resources." [PAGE 55]
- "Kalman filter performs this task by linear projections (3), while the Particle filter does so by estimating the probability distribution (2)." [PAGE 44]
- "This method approximates the probability distribution with a weighted set of N samples:" [PAGE 42]
- "where F is the transition matrix for state vector xt−1, B is the control-input matrix for control vector ut−1, and ωt−1 is the noise following a zero-mean Gaussian distribution." [PAGE 44]
- "IOU is the ratio of intersection of the ground truth bounding box from the previous frame (BBA), and predicted bounding box in the current frame (BBB), and it is calculated as in (4)" [PAGE 48]
- "Therefore, if Cd > 50%, the shape can be filtered as a ball." [PAGE 46]
- "where 𝜔i is the weight for the ith component (all summing to 1), and 𝜂 ( Xt ) is a normal distribution density function." [PAGE 38]
- "This method works only for videos recorded with fixed cameras." [PAGE 40]
- "The correct trajectory is found with the help of, e.g., similarity measure, linear programming, multi-commodity network flow, or the problem is modeled as a minimum edge cover problem." [PAGE 46? Actually graph-based section page 46-47. It appears page 46? Let's use [PAGE 46] maybe. But not necessary.
- "online trackers are trained from scratch during the test and are not taking advantage of already annotated videos for improving performance, while offline trackers train on offline data." [PAGE 47-48? Section 4.2 begins page 47. Use [PAGE 47].
Need not overuse.

Need maybe mention "The source text has OCR/table extraction corruption; equations (2)-(4) bodies absent." This is gray-zone audit. Good.

Need produce answer with exact XML sections. Need word count >=1000. We can write around 3000 words. Need ensure THINK_TRACE >=400. I'll write ~600 words in THINK_TRACE.

Need be careful "RLVR" maybe not define? We can define as "reinforcement-learning-with-verifiable-rewards style veto: a claim passes only if a verifiable measurement does not contradict it." Good.

Need no "betting lines" etc.

Need use "SI/information/probability units". For equations:
- IOU: dimensionless ratio of pixel counts (pixel²/pixel²).
- GMM: weights dimensionless; \(X_t\) in channel intensity (e.g., digital counts or normalized [0,1]); \(\eta\) density units inverse intensity^3 if RGB.
- Particle filter: state \(x_t\) position m, velocity m/s; weights dimensionless; Dirac delta has inverse state units? In approximation, \(\delta(x_t-x_t^{(i)})\) has inverse state units; weights dimensionless; integral sums to 1. Good.
- Kalman: \(x_t\) state vector e.g. [position m, velocity m/s]; F dimensionless or 1/s entries; B maps control; Q covariance units squared.
- BC: dimensionless if p,q normalized histograms; if continuous, BC has units? For discrete, dimensionless. Good.
- Cd: dimensionless.
- Gradient: θ radians.
Need "exact singularity/breakdown regimes": include in each.

Need maybe discuss "formal LaTeX equations, units, assumptions, and exact singularity/breakdown regimes." We'll explicitly label.

Need "Source operators and equations" maybe "operators" includes HOG, GMM, PF, KF, BC, Cd, IOU, YOLO, CNN. Need formal.

Need "CROSS_LAYER_VETO_ADJUDICATION" proof. We can include a small proof:
Let \(O_t\subseteq\{1,...,N\}\) be visible players at frame t. Tracking requires association \(A_t: O_t \to \mathcal T\). If occlusion causes two players to share same image evidence (non-injective \(h\)), posterior \(p(x_t|z_{1:t})\) is multimodal. Kalman's Gaussian unimodal approximation cannot represent this; PF can but degeneracy if effective sample size low. Therefore any downstream metric requiring identity-specific trajectory has undefined/vetoed value. Weather/lighting changes background; GMM threshold arbitrary; shadows cause foreground false positives. Biomechanical non-rigid shape invalidates rigid shape descriptor. Thus veto.
Need cite source quotes.

Need "RETROCAUSAL_GENEALOGY" historical lineage. Need mention dates: 2000 snake, 2001 Needham, 2004 Figueroa/Xu, 2005 Hayet, 2006 Mathes/Dearden/Zhu/Naidoo, 2007 Beetz/Huang/Lehuger, 2008 Pallavi/Mazzeo/Ren, 2009 Kim/Liu/Ming/Abbott, 2010 Mackowiak, 2011 Kataoka/Septier/Xing, 2012 Li/Chakraborty/Naushad, 2013 Chakraborty/Patil? 2015 Gerke/Li/Cheshire/Markoski/Maksai/de Padua, 2017 Manafifard/Lu/Chen/Yang, 2018 Direkoglu/Li/Lin/Chengjun/Patil, 2019 Arbues/Buric/Kamble/Liu/Long/Yoon. Good. Mention survey accepted Jan 2022. Retrocausal: later DL success casts prior feature engineering as data-inefficient; prior operators remain useful for low-data/interpretability. Multi-week traps: week 0 choose; week 1 annotate; week 2 model; week 3 evaluate; week 4 deploy; traps. Good.

Need "RECURSIVE_THEORY_OF_MIND" maybe include nested beliefs:
- Analyst believes coach wants "continuous trajectories"; coach believes tracking data is ground truth; model believes occluded player continues linear motion; data consumer believes metrics are comparable across camera setups. Recursion: analyst models coach modeling player intent; player occludes teammate etc. Crisis habit regression: when accuracy drops, analyst reverts to manual annotation or deep learning as black box; counter-trap: pre-register validation, separate detection and association, use multi-view. Clock: temporal synchronization and leakage (using future frames in offline trackers? Source says online vs offline trackers; offline can use annotated videos; need avoid leakage). Use source [PAGE 47] online/offline. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 scenarios:
1. Occlusion/ID switch veto: claim "single-camera broadcast tracker produces continuous identity trajectories under occlusion." Verify by ID switches. Source says biggest challenge occlusion [PAGE 42]; Figueroa 88% solved occlusions [PAGE 47] and Xing 12 ID switches [PAGE 47]. Prediction: under heavy overlap, ID switch rate >0; veto if claim says zero. Need avoid numeric fake? It's okay to predict qualitatively. Could state "nonzero" not exact.
2. Shadow/light veto: claim "GMM background subtraction robust to shadows." Source says cannot recognize players in shadows [PAGE 38]. Verify foreground area in shadow mask; prediction false positives.
3. Cost/compute veto: claim "deep learning is cheaper than traditional." Source says GPUs more expensive [PAGE 52], special GPUs [PAGE 41]. Verify wall-clock, hardware cost; prediction CPU-only latency or GPU requirement violates claim. 
Need "verifiable RLVR veto scenarios + predictions": include measurement and veto condition. Good.

Need include "ZERO BETTING LINES" - no mention. Good.

Need maybe not use markdown headings? XML tags enough. Can use paragraphs.

Need exact XML sections only? User says "across these exact XML sections". We can output only those five tags. No preamble. Good.

Need ensure tags match exactly:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>

Need maybe ">=1,000-word depth" overall. We'll write >2000.

Let's draft.

THINK_TRACE: Need deep multi-hop derivation & gray-zone audit. Start: Source is survey. Multi-hop: (1) Source distinguishes detection vs tracking. Detection outputs bounding boxes; tracking associates partial trajectories. Failure modes: occlusion, blur, light, posture. (2) Method families: traditional vs DL. Traditional manual features; DL auto features. (3) Cost: camera infrastructure and compute. (4) Evaluation: metrics not comparable; tables include precision, accuracy, MOTA, AUC, mAP, MAPE, ID switches; some are detection, some tracking. Gray-zone: OCR/table corruption; equations missing; "accuracy" ambiguous; some claims from cited papers not replicated; page markers. Derivation: If detection misses a frame, tracker must interpolate; if occlusion, association ambiguity; if two players overlap, shape/color features insufficient; graph/PF/KF handle differently; KF linear Gaussian fails; PF multimodal but degeneracy; DL learns appearance but black box and expensive. Hence any downstream analysis requires uncertainty propagation. Also camera setup: single fixed vs multiple fixed vs moving; multi-view resolves occlusion but synchronization; moving camera longer trajectories but complex. Cost selection. Need mention "no betting".

Need word count? THINK_TRACE ~700 words. Good.

SOURCE_OPERATORS_AND_EQUATIONS: Need formal equations. Let's write with bullets. Include citations and quotes. Need exact [PAGE N]. Let's state "The supplied extraction omits the displayed bodies of equations (2)-(4), so I mark reconstructions." Then equations. Need not too many? We can include 8 equations. Each with units, assumptions, breakdown. Good.

Let's formulate:

1. Detection bounding box and IoU:
\[
\mathrm{IoU}(A,B)=\frac{|A\cap B|}{|A\cup B|}
\]
where |·| pixel count. [PAGE 48] quote. Units dimensionless. Assumptions same frame/coordinate system; boxes nonzero. Breakdown: denominator zero; occlusion; fast motion; perspective. Source: "if intersection is nonzero ... traced" [PAGE 48? Actually page 48 says "Thus, if the intersection is nonzero between consecutive frames, the player or ball can be traced." Yes cite PAGE 48].

2. GMM:
\[
p(X_t)=\sum_{i=1}^k \omega_i \eta(X_t;\mu_i,\Sigma_i), \quad \sum_i \omega_i=1.
\]
[PAGE 38] quote. Units: X_t RGB digital counts; \omega dimensionless; \eta inverse intensity^3. Assumptions background largest area; threshold arbitrary; static background. Breakdown: shadows, lighting, camera motion; source says cannot recognize shadows [PAGE 38].

3. Particle filter:
\[
p(x_t|z_{1:t}) \approx \sum_{i=1}^N \omega_t^{(i)} \delta(x_t-x_t^{(i)})
\]
[PAGE 42] quote. Units: x_t m, z_t measurement, weights dimensionless. Assumptions weighted samples; Markov; proposal. Breakdown: degeneracy \(N_{\rm eff}=1/\sum_i (\omega_t^{(i)})^2\) small; high-dim; occlusion; source says "how to assign weights, and how to sample particles" [PAGE 42].

4. Particle motion:
\[
x_k=x_{k-1}+v_k, \quad v_k\sim\mathcal N(0,\Sigma_v)
\]
[PAGE 43? Actually text in page 43: "xk = xk−1 + 𝑣k" in particle filter section. Use [PAGE 43]. Units m. Assumptions i.i.d. zero-mean Gaussian. Breakdown: non-linear jumps/falls; occlusion; non-Gaussian.

5. Kalman:
\[
x_t=F x_{t-1}+B u_{t-1}+\omega_{t-1},\quad \omega_{t-1}\sim\mathcal N(0,Q)
\]
[PAGE 44] quote. Units state. Assumptions linear Gaussian. Breakdown: non-linear/non-Gaussian; source says KF linear projections [PAGE 44]; Makandar ignores non-linear/non-Gaussian [PAGE 45? Table4 page 45]. Use [PAGE 44-45].
6. BC:
\[
\mathrm{BC}(p,q)=\sum_x \sqrt{p(x)q(x)}
\]
[PAGE 43] quote. Units dimensionless. Assumptions p,q normalized. Breakdown: nonnegative; no overlap; wrong bins.
7. Compaction:
\[
C_d=\frac{P^2}{4\pi A}
\]
[PAGE 46] quote. Units dimensionless. Assumptions closed shape; P perimeter; A area. Breakdown: A=0; perspective; ball not circle.
8. Gradient direction:
\[
\theta=\tan^{-1}(\Delta y/\Delta x)
\]
[PAGE 40] quote? Text says "direction is calculated as tan−1 (Δy∕Δx)" [PAGE 40]. Units radians. Breakdown: Δx=0; noise.
Maybe include "Sobel" operator? Not needed.

Need mention "cost operator" maybe no equation.

RETROCAUSAL_GENEALOGY: ~500 words. Include lineage and multi-week traps. Need cite. Multi-week traps maybe list 5. Good.

RECURSIVE_THEORY_OF_MIND: ~450 words. Need crisis habit regression vs counter-trap vs clock. Use nested belief. Good.

CROSS_LAYER_VETO_ADJUDICATION: ~500 words. Include proof. Good.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios ~500 words. Good.

Need ensure no fake ratios like Force/Fatigue. We only use source-derived ratios. Good.

Need maybe use "information units" in equations: GMM entropy? We can mention likelihood units. No fake.

Need final only XML. Let's write carefully.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a 2022 survey of optical tracking in team sports, not a primary tracking benchmark and not a match-prediction paper. The first multi-hop derivation is therefore a pipeline derivation: sports video frames are the raw observation layer; detection produces player/ball bounding boxes; tracking associates detections across frames into trajectories; downstream quantitative models consume those trajectories. The survey repeatedly separates detection from tracking because detection failure and association failure have different remedies. Detection is the task of finding objects in a frame, while tracking is the task of maintaining identity across frames despite missing or ambiguous detections. The source states that detection “provide the input to tracking, which would be a simple task if all players and the ball were totally visible in each frame and there were no occlusion” [PAGE 37], but “in real-world videos, most frames are blurry and continuous tracking fails due to e.g., occlusion, poor light, or posture changes” [PAGE 37]. That single sentence already propagates uncertainty into every later layer: if a bounding box is missing in frame \(t\), a tracker must either interpolate, re-identify, or drop the identity; if two players overlap, the tracker must choose an assignment that appearance or motion evidence may not uniquely support.

The second derivation is methodological. Traditional methods require the analyst to describe features manually: HOG gradients, GMM background models, Canny/Sobel edges, SVM/Adaboost classifiers, PDM points, particle filters, Kalman filters, contours, silhouettes, graphs, and data-association schemes. Deep learning methods, by contrast, learn features through CNN layers, VGG, Cascade-CNN, YOLO, and SiamCNN. The source’s own taxonomy is explicit: “we summarize the recent methods of optical tracking by providing a comprehensive taxonomy of conventional and deep learning methods, separately” [PAGE 35]. But the taxonomy is not a ranking. The survey’s cost section says deep learning methods requiring GPUs are more expensive than traditional CPU-only methods [PAGE 52], while traditional methods are “time-consuming and require domain expertise due to some manual feature extraction tasks” [PAGE 55]. Thus model selection is a constrained optimization over data volume, annotation budget, compute, camera infrastructure, interpretability, and acceptable identity-switch rate—not a single accuracy number.

The third derivation is evaluative. The survey’s tables mix detection metrics and tracking metrics: precision, accuracy, miss rate, AUC, mAP, MAPE, MOTA, and solved-occlusion counts. These are not commensurable. A high detection precision does not prove continuous identity tracking; a high tracking accuracy on short sequences does not prove robustness over a full match; a report of “88% of solved occlusions” [PAGE 47] is not the same as zero identity switches. The gray-zone audit is that the supplied source text has OCR/table-extraction corruption and omits the displayed bodies of equations (2)–(4). For example, the GMM paragraph gives the symbol definitions but not the full density in the extracted text [PAGE 38]; the Kalman paragraph gives the transition/noise definitions but the equation body is not recoverable in plain text [PAGE 44]; the particle-filter approximation is introduced but the sample expansion is not shown [PAGE 42]. I therefore reconstruct only standard forms below and mark them as reconstructions, so no hidden equation is treated as verbatim source.

A fourth derivation concerns camera geometry. The survey distinguishes single fixed camera, multiple fixed cameras, and multiple moving cameras. Single fixed cameras simplify preprocessing but often produce blurry frames because the camera must cover the whole field [PAGE 36]. Multiple fixed cameras can resolve occlusion by comparing viewpoints [PAGE 36]. Moving cameras provide longer trajectories by following play but require synchronization and more complex processing [PAGE 36]. This is a hard trade-off: multi-view reduces occlusion ambiguity but increases calibration and synchronization burden; moving cameras increase trajectory length but make background modeling and homography estimation unstable. The gray-zone is that “cost” in the survey is a coarse high/medium/low classification, not a reproducible monetary or latency model. The correct audit conclusion is not “deep learning is better” or “traditional is better”; it is that the source gives a decision framework whose variables must be measured for the specific venue, camera plan, annotation budget, and downstream metric.

Finally, a fifth derivation concerns physical observability. The survey states the biggest tracking challenge is “the overlapping of players, namely the occlusion” [PAGE 42]. Occlusion is not merely a software inconvenience; it changes the identifiability of the state. If two players project to overlapping image regions, the observation function is non-injective for that frame. A Kalman filter’s linear-Gaussian projection may collapse a multimodal posterior into a unimodal one; a particle filter can represent multimodality but may degenerate if weights collapse; a graph tracker can search multiple hypotheses but may still produce identity switches. Therefore any downstream quantity that requires identity-specific continuity—distance covered by a named player, pressing shape, formation displacement—inherits a veto condition unless the tracker reports association uncertainty or the venue provides multi-view redundancy. This is the central gray-zone audit: the survey is useful precisely because it names the failure modes, but it cannot certify any particular deployed pipeline without out-of-sample, occlusion-stratified validation.
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
The source text is a survey, and the supplied extraction omits several displayed equation bodies. The following are formal standard forms consistent with the source’s symbols and descriptions; reconstructed forms are labeled. Units and singularities are made explicit.

1. Bounding-box intersection over union (IoU). The source states: “IOU is the ratio of intersection of the ground truth bounding box from the previous frame (BBA), and predicted bounding box in the current frame (BBB), and it is calculated as in (4)” [PAGE 48]. The standard form is
\[
\mathrm{IoU}(A,B)=\frac{|A\cap B|}{|A\cup B|},
\]
where \(|\cdot|\) is a pixel count. \(\mathrm{IoU}\) is dimensionless: pixel\(^2\)/pixel\(^2\). Assumptions: both boxes are in the same image coordinate system; boxes are nonempty; overlap is measured on axis-aligned or otherwise consistently parameterized rectangles. Breakdown regimes: \(|A\cup B|=0\) makes IoU undefined; fast motion or frame drops can make consecutive-frame intersection zero even for the same object; partial occlusion can make IoU low without identity change; complete occlusion can make IoU zero for a true continuation. The source also warns that IoU-based tracing is conditional: “if the intersection is nonzero between consecutive frames, the player or ball can be traced” [PAGE 48]. That is a sufficient-condition heuristic, not an identity proof.

2. Gaussian mixture model for background pixels. The source describes GMM background modeling and states: “where \(\omega_i\) is the weight for the \(i\)th component (all summing to 1), and \(\eta(X_t)\) is a normal distribution density function” [PAGE 38]. The standard reconstruction is
\[
p(X_t)=\sum_{i=1}^{k}\omega_i\,\eta\!\left(X_t;\mu_i,\Sigma_i\right),
\qquad \sum_{i=1}^{k}\omega_i=1,\quad \omega_i\ge 0,
\]
where \(X_t\) is a color/intensity vector, e.g. RGB digital counts or normalized channel values; \(\omega_i\) is dimensionless; \(\eta\) has units inverse \(X_t\)-space (for RGB, inverse intensity\(^3\)); \(\mu_i\) has intensity units; \(\Sigma_i\) has intensity\(^2\) units on diagonal entries. Assumptions: the background is modeled by \(k\) Gaussian components; thresholds on \(p(X_t)\) separate foreground from background; the background statistics are stable enough over the modeling window. Breakdown regimes: shadows and lighting changes violate the color model; camera motion changes the background distribution; arbitrary thresholds are not calibrated probabilities; the source explicitly says of this GMM approach, “This algorithm cannot recognize players in shadows” [PAGE 38]. Thus the operator is not a general occlusion solver.

3. Particle-filter posterior approximation. The source states: “All particle filter tracking systems aim to estimate the state of a system \((x_t)\), given a set of noisy observations \((z_{1:t})\). Thus the goal is to estimate \(P(x_t|z_{1:t})\).” [PAGE 42]. It then says: “This method approximates the probability distribution with a weighted set of \(N\) samples” [PAGE 42]. The standard reconstruction is
\[
p(x_t\mid z_{1:t})\approx \sum_{i=1}^{N}\omega_t^{(i)}\,\delta\!\left(x_t-x_t^{(i)}\right),
\qquad \sum_{i=1}^{N}\omega_t^{(i)}=1,
\]
where \(x_t\) is the state (e.g. position in m and velocity in m s\(^{-1}\)); \(z_{1:t}\) are observations; \(\omega_t^{(i)}\) are dimensionless weights; \(\delta(\cdot)\) has inverse state-space units so that the sum integrates to one. Assumptions: the posterior can be represented by \(N\) weighted samples; a proposal distribution and resampling scheme exist; observation likelihoods are computable. Breakdown regimes: weight degeneracy when the effective sample size
\[
N_{\mathrm{eff}}=\frac{1}{\sum_{i=1}^{N}\left(\omega_t^{(i)}\right)^2}
\]
becomes small; sample impoverishment after resampling; high-dimensional state spaces; multimodal ambiguity under occlusion. The source itself flags the open design questions: “how to assign the weights, and how to sample the particles” [PAGE 42].

4. Particle motion model. The source gives the update “\(x_k=x_{k-1}+v_k\), which noise \(v_k\) is assumed to be i.i.d. following a zero-mean Gaussian distribution” [PAGE 43]. Formally,
\[
x_k=x_{k-1}+v_k,\qquad v_k\sim\mathcal N(0,\Sigma_v),
\]
where \(x_k\) is position in m, \(v_k\) is a per-step displacement in m, and \(\Sigma_v\) has m\(^2\) units. Assumptions: independent, zero-mean Gaussian displacement noise; linear uniform motion is an acceptable local model. Breakdown regimes: jumping, falling, sudden acceleration, or occlusion-induced re-identification violate the i.i.d. Gaussian displacement assumption; the source’s table notes tracking failures in cases such as “player jumping or falling” [PAGE 53].

5. Kalman filter state evolution. The source states: “where \(F\) is the transition matrix for state vector \(x_{t-1}\), \(B\) is the control-input matrix for control vector \(u_{t-1}\), and \(\omega_{t-1}\) is the noise following a zero-mean Gaussian distribution” [PAGE 44]. The standard reconstruction is
\[
x_t=F x_{t-1}+B u_{t-1}+\omega_{t-1},
\qquad \omega_{t-1}\sim\mathcal N(0,Q),
\]
with state units depending on the chosen state vector, e.g. \([\,\text{m},\text{m s}^{-1}\,]^\top\); \(F\) has units compatible with the state transition; \(B\) maps control units into state units; \(Q\) has squared state units. Assumptions: linear state dynamics and Gaussian process noise; the observation model is also linear-Gaussian for the closed-form update. Breakdown regimes: nonlinear motion, non-Gaussian noise, multimodal occlusion ambiguity, and singular or near-singular covariance matrices. The source contrasts the filters directly: “Kalman filter performs this task by linear projections (3), while the Particle filter does so by estimating the probability distribution (2)” [PAGE 44]. The survey also notes that ignoring non-linear and non-Gaussian noise “decreases the accuracy of tracking” [PAGE 45].

6. Bhattacharyya coefficient for particle weighting. The source defines it as “a measure for the amount of overlap between two statistical samples \((p,q)\) over the same domain \(x\), and is calculated as \(\mathrm{BC}(p,q)=\sum_x\sqrt{p(x)q(x)}\)” [PAGE 43]. In discrete normalized form,
\[
\mathrm{BC}(p,q)=\sum_x\sqrt{p(x)\,q(x)},
\]
which is dimensionless when \(p\) and \(q\) are normalized probability mass functions. Assumptions: \(p(x)\ge0\), \(q(x)\ge0\), and both are normalized; the binning/domain is identical. Breakdown regimes: unnormalized histograms make BC non-comparable; disjoint supports give \(\mathrm{BC}=0\); color/edge histograms change under illumination and occlusion, so BC can prefer the wrong player when kits are similar.

7. Shape compaction descriptor for ball filtering. The source states: “Chakraborty and Meher (2013) suggest using the degree of compaction \(C_d\) which is the ratio of the square of the perimeter of the given shape to the area of the given shape: \(C_d=P^2/(4\pi A)\). Therefore, if \(C_d>50\%\), the shape can be filtered as a ball” [PAGE 46]. Formally,
\[
C_d=\frac{P^2}{4\pi A},
\]
where \(P\) is perimeter in pixels and \(A\) is area in pixels\(^2\), so \(C_d\) is dimensionless. A perfect circle gives \(C_d=1\). Assumptions: the shape is closed and the perimeter/area are measured consistently. Breakdown regimes: \(A=0\) makes \(C_d\) undefined; perspective projection, motion blur, partial occlusion, and non-circular silhouettes violate the circularity prior. The source itself warns: “the shape of the ball varies significantly in each frame, and does not look like a circle at all” [PAGE 46]. Thus the threshold is a heuristic, not a calibrated probability.

8. Sobel gradient direction. The source states that the gradient direction is “calculated as \(\tan^{-1}(\Delta y/\Delta x)\)” [PAGE 40]. Formally,
\[
\theta=\arctan\!\left(\frac{\Delta y}{\Delta x}\right),
\]
with \(\theta\) in radians and \(\Delta x,\Delta y\) in pixel-intensity differences per pixel. Assumptions: discrete image gradients are meaningful and the coordinate convention is fixed. Breakdown regimes: \(\Delta x=0\) yields a vertical edge and requires quadrant-aware \(\operatorname{atan2}\); noise and shadows create spurious gradients; the source notes that Sobel-based background elimination avoids ball–line color overlap but “general overlapping problems, e.g., player occlusion, cannot be handled with this method” [PAGE 40].
</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
The scientific lineage in the survey runs from handcrafted feature engineering to learned feature hierarchies. The early lineage is visible in the cited work: snake/active-contour tracking in 2000–2002, multi-camera and graph representations around 2004–2005, PDM and particle-filter tracking in 2006, HOG/GMM/SVM/Adaboost detection through 2006–2010, Kalman and particle-filter variants in 2009–2017, and then CNN/VGG/Cascade/YOLO/SiamCNN methods in 2015–2019. The survey’s publication date is 2022, but its accepted date is January 7, 2022, so it retroactively frames two decades of work through the deep-learning lens. The retrocausal reading is important: later CNN success makes earlier manual features look data-inefficient, but the earlier operators remain valid in low-data, low-compute, or interpretability-constrained settings. The source says the combination of traditional and deep learning methods “can be rarely seen in the literature” [PAGE 55], which is a gap statement, not evidence that hybridization is inferior.

A first multi-week trap is method selection by headline accuracy. In week 1 an analyst may choose a method because a table reports high precision; in week 2 the venue video may have different lighting; in week 3 annotation reveals that the reported metric was detection precision, not identity tracking; in week 4 deployment fails on occlusion. The survey’s own tables mix precision, accuracy, miss rate, AUC, mAP, MAPE, MOTA, and solved-occlusion counts, so the trap is structural. The correct genealogy is to trace each metric back to its task: detection metrics answer “is there a box?”; tracking metrics answer “is the identity continuous?”; cost metrics answer “what camera and compute are required?”

A second multi-week trap is camera-plan drift. The survey distinguishes single fixed, multiple fixed, and multiple moving cameras [PAGE 36]. A pipeline calibrated on a single fixed camera may fail when the venue switches to a moving broadcast camera; a multi-view pipeline may solve occlusion but introduces synchronization and calibration work that was not budgeted. Over multiple weeks, camera placement, zoom behavior, and lighting change, so a threshold tuned in week 1 is not stationary. The survey’s observation that single fixed cameras produce blurry frames because they cover the whole field, while multiple fixed cameras can resolve occlusion by other angles [PAGE 36], is a warning against treating “camera setup” as a one-time constant.

A third multi-week trap is annotation leakage and identity drift. Jersey-number CNNs and digit localization are detection aids, but the survey notes expensive manual labeling and training time [PAGE 41]. If annotations are created from the same broadcast feed and then used to validate that feed, the evaluation can leak camera-specific cues. The survey’s contrast between online and offline trackers is relevant: “online trackers are trained from scratch during the test and are not taking advantage of already annotated videos for improving performance, while offline trackers train on offline data” [PAGE 47]. Offline training is not automatically better; it can encode future-frame information if validation is not time-blocked.

A fourth multi-week trap is cost underestimation. The survey classifies cost by infrastructure and computation, and states that deep learning methods requiring GPUs are more expensive than traditional CPU-only methods [PAGE 52]. A team may budget for one GPU trial but not for annotation, retraining, storage, or multi-camera synchronization. The genealogy from HOG/GMM to CNN/YOLO is therefore not a simple progress narrative; it is a shift in the cost function from expert feature design to data and compute. The survey’s conclusion that traditional models are time-consuming and require domain expertise while deep models are expensive in computing resources [PAGE 55] is the correct historical summary.
</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
The recursive theory-of-mind layer concerns nested beliefs among the analyst, the coach/scout, the player, and the tracking model. The analyst believes the coach wants continuous identity trajectories; the coach believes tracking data are ground truth; the model “believes” an occluded player continues according to a motion prior; the player believes the teammate will clear space or that the opponent will not step into the passing lane. These beliefs are not symmetric. The analyst’s model of the coach’s model of the player is exactly where overconfidence enters: a smooth trajectory can look like a faithful representation of player intent when it is actually a Kalman or particle-filter prior filling an occlusion gap. The source’s warning that “the biggest challenge in tracking is the overlapping of players, namely the occlusion” [PAGE 42] is therefore not only a computer-vision statement; it is an epistemic statement about what the downstream consumer can infer.

Crisis habit regression appears when tracking quality drops. Under time pressure, the analyst may regress to a familiar habit: manual annotation of a few clips, a single-camera pipeline, a deep-learning black box, or a threshold tuned on the most recent match. The survey gives evidence for why each habit is fragile. Manual labeling is time-consuming [PAGE 41]; single fixed cameras produce blurry frames [PAGE 36]; deep models are “more like a black box on the detection tasks” [PAGE 51]; thresholded background subtraction fails in shadows [PAGE 38]. The regression is psychologically understandable—familiar tools reduce immediate cognitive load—but it increases hidden variance in the trajectory data.

The counter-trap is to make the uncertainty explicit before the crisis. Separate detection from association; report identity-switch counts alongside detection precision; stratify validation by occlusion level, lighting, camera type, and player crowding; pre-register a fallback when the tracker’s confidence collapses. The survey’s traditional methods offer interpretability—“traditional methods provide more visibility and interpretability to the analyzer on how the developed algorithm can be performed in different situations such as sports types, lighting conditions, cameras, video quality, etc.” [PAGE 51]—while deep models offer flexibility but less debugging transparency. The counter-trap is therefore a hybrid epistemic stance: use learned detectors where they are strong, but keep observable checks on identity continuity and physical plausibility.

The clock is the temporal dimension of this recursion. Tracking data are consumed after the match, but the model’s errors occur during the match. An offline tracker can use future frames, while an online tracker cannot [PAGE 47]; if the analyst evaluates an offline tracker as if it were online, the coach’s belief about real-time capability is false. The clock also applies to camera synchronization: moving cameras require significant synchronization effort [PAGE 36], and multi-view occlusion handling depends on time-aligned frames. A recursive failure occurs when the analyst knows the frames are synchronized, the coach assumes they are synchronized, and the model silently associates non-synchronized observations. The antidote is a clock-aware audit: timestamp provenance, frame-drop accounting, and time-blocked validation.
</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto adjudication asks whether a downstream quantitative claim should be blocked by physical, biomechanical, or weather/lighting evidence. The source supplies enough evidence to define explicit veto conditions. Physical veto: if the player or ball is fully occluded, the observation model has no direct measurement of the hidden state; if two players overlap, the association from observation to identity is ambiguous. The survey states that “tracking usually fails in the cases of overlaps, poor light conditions, and low quality of the videos” [PAGE 35] and that “continuous tracking fails due to e.g., occlusion, poor light, or posture changes” [PAGE 37]. A claim that a named player’s trajectory is complete over an occlusion interval is therefore vetoed unless the pipeline reports multi-view recovery, interpolation uncertainty, or an explicit identity-switch probability. The source’s graph-based table reports “88% of solved occlusions” [PAGE 47], which is evidence that occlusion can be partially handled, not evidence of zero failure.

Biomechanical veto: player shape is non-rigid. Contour and silhouette methods fit curves or shape descriptors, but jumping, falling, turning, and arm motion change the silhouette. The survey notes that tracking can fail for a “player jumping or falling” [PAGE 53], and that ball shape “varies significantly in each frame, and does not look like a circle at all” [PAGE 46]. Therefore a rigid-shape prior—especially the compaction threshold \(C_d>50\%\) [PAGE 46]—cannot be treated as a universal ball detector. A downstream claim that ball possession or shot contact is identifiable from silhouette alone is vetoed when the ball is motion-blurred, partially occluded, or projected non-circularly.

Weather/lighting veto: the source repeatedly names poor light and shadows. GMM background modeling “cannot recognize players in shadows” [PAGE 38]; Sobel/color methods can confuse ball and court lines [PAGE 40]; general overlapping problems remain unsolved by edge methods [PAGE 40]. A claim that a single fixed-camera pipeline is robust across weather or stadium lighting regimes is vetoed unless the evaluation includes those regimes. The survey’s cost and infrastructure discussion reinforces the point: multi-camera setups can handle occlusion by other viewpoints [PAGE 36], but they add synchronization and calibration costs; single-camera setups are cheaper but more fragile.

Formal veto proof sketch. Let \(x_t\) be the identity-specific state (position, velocity) and \(z_t=h(x_t)+\epsilon_t\) the observation. If occlusion makes \(h\) non-injective on the set of active players, then the posterior \(p(x_t|z_{1:t})\) can be multimodal. A Kalman filter’s linear-Gaussian projection cannot represent that multimodality and may collapse to an incorrect mode; the source contrasts Kalman linear projections with particle-filter distribution estimation [PAGE 44]. A particle filter can represent multimodality, but if the effective sample size collapses, the representation degenerates [PAGE 42]. Therefore any downstream functional \(g(x_{1:T})\) that requires a unique identity path is not identifiable from the observations alone. The veto is not “the data are useless”; it is “the data cannot support this identity-specific claim without additional assumptions or multi-view evidence.” Exact singularities reinforce the veto: IoU is undefined when the union box is empty [PAGE 48]; compaction is undefined when area is zero [PAGE 46]; Bhattacharyya overlap is zero or non-comparable when histograms are unnormalized or disjoint [PAGE 43]; Kalman covariance can become singular under degenerate motion models [PAGE 44].
</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>
RLVR here means a verifiable-reward-style audit: a claim passes only if a concrete measurement does not contradict it. Three counterfactual veto scenarios follow.

1. Occlusion/identity-switch veto. Claim: “A single-camera broadcast tracker produces continuous identity trajectories through player overlaps.” Counterfactual measurement: annotate overlap intervals and count identity switches and track fragmentation. The source states that “the biggest challenge in tracking is the overlapping of players, namely the occlusion” [PAGE 42], and its graph-based review reports partial occlusion success, e.g. “88% of solved occlusions” [PAGE 47], not perfect continuity. Prediction: under heavy overlap, the tracker will show nonzero identity switches or interpolated segments; if the claim asserts zero switches without multi-view evidence, the claim is vetoed. A verifiable pass condition is an occlusion-stratified report showing identity-switch counts and interpolation intervals, not a single aggregate accuracy.

2. Shadow/lighting veto. Claim: “GMM background subtraction is robust to stadium shadows and changing light.” Counterfactual measurement: compute foreground false-positive area in shadow regions across lighting transitions. The source explicitly says of the GMM approach, “This algorithm cannot recognize players in shadows” [PAGE 38], and the survey names “poor light conditions” as a common failure [PAGE 35]. Prediction: shadow pixels will be misclassified as foreground or will merge with player blobs, inflating detected area and corrupting centroid trajectories. If the claim reports only aggregate segmentation accuracy without a shadow-stratified test, the claim is vetoed. A pass condition requires shadow-mask validation or a lighting-invariant detector.

3. Compute/cost veto. Claim: “Deep learning tracking is cheaper than traditional tracking for this deployment.” Counterfactual measurement: total cost of annotation, GPU/CPU hardware, training time, inference latency, and camera infrastructure. The source states that “Most of these methods require special versions of GPUs to be applied” [PAGE 41] and that “deep learning methods which require GPUs are more expensive than traditional methods with only CPUs” [PAGE 52]; it also notes high network training time and difficult tuning in its limitation table [PAGE 53]. Prediction: a CPU-only deployment of a CNN/VGG/YOLO pipeline will either fail latency requirements or require GPU capital that the claim omitted. If the claim’s cost model excludes annotation or GPU infrastructure, it is vetoed. A verifiable pass condition is an end-to-end cost ledger with measured latency and training/annotation hours, stratified by camera setup, because a broadcast-video pipeline and a multi-camera arena pipeline have different infrastructure costs [PAGE 52].
</RLVR_COUNTERFACTUAL_VETOES>