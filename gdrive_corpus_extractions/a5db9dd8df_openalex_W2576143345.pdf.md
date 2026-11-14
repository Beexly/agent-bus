---
source: "openalex_W2576143345.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 10
model: deepseek/deepseek-v4.1-flash-1017
words: 8529
---

<NATIVE_REASONING>
We need answer as GSE+GSI Frontier Reasoning Foundry. Need analyze provided paper and produce exact XML sections >=1000 words depth. Need no betting lines. No toy equations. Need formal LaTeX, units, citations [PAGE N], verbatim quotes. Need THINK_TRACE >=400 words. Other sections. We need likely discuss field line detection algorithm, equations, directional filters, Hough, GMM, MST clustering, Kalman tracking. Need "gray-zone audit" and "multi-week traps" maybe extrapolate scientific lineage. Need "crisis habit regression vs counter-trap vs clock". Need cross-layer veto physical/biomechanical/weather veto proof. Hmm source is soccer video field line detection, not betting. Must align with paper. Need avoid betting. "CROSS_LAYER_VETO_ADJUDICATION Physical/biomechanical/weather veto proof." Could interpret physical imaging physics: illumination, occlusion, motion blur, weather, turf mowing, camera; biomechanical not much. Need proof via paper limitations and equations. Need "RLVR counterfactual vetoes" 3 verifiable scenarios + predictions. We can make counterfactual tests for algorithm. Need include exact quotes. We can cite PAGE markers where quotes. Need likely identify equations from page 4 equation (1) garbled. Need formal LaTeX reconstruction? Directional filter matrices are garbled. We can state source extraction corruption and not invent exact matrix? But prompt asks formal LaTeX, units, page citations, breakdown. We can formalize detection pipeline and evaluation equations from page 7. Need mention recall/precision equations as (2). Hough transform line equation m? Source: "every ( , ) θρ in the space ( , ) m m m P θ ρ = suggests a straight line f m L" garbled. Need not over-invent. Use ρ = x cos θ + y sin θ standard Hough, but cite it as conventional representation not verbatim. Need state units pixel. Filter matrices: maybe can transcribe approximate? The OCR matrix is garbled: 
H_l1 = 
1 2 3 4 0 0 0
2 3 4 0 0 0 0
3 4 0 0 0 0 0
4 0 0 0 0 0 0
? and H_l2 with negative lower? There are four directional filter banks H_l1,H_l2,H_r1,H_r2. It says "two directional filters for respectively demi-court gauche and demi-court droit; see equation (1)". Page 3 says "four yuan directional filter banks 1 2 1 2 ( , , , ) l l r r H H H H" [PAGE 3] and Table 1. Page 4 equation garbled. Need be careful. Could write generic directional convolution: F_k = I_field * H_k; combined F = F_l1 ∨ F_l2 ∨ F_r1 ∨ F_r2. But "conjunctive (or)" in page 3: "using conjunctive (or) operation". We can cite.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Need connect line detection to camera calibration, homography, sports video analysis, Hough 1962, GMM, MST clustering, Kalman 1960, morphological Top-Hat. Multi-week traps: white-line-only assumption fails offside auxiliary lines due mowing stripes; color drift under illumination; camera pan causing principal angles; GMM circular wraparound; MST sensitivity; Hough cluster stability; Kalman linear/Gaussian assumption vs abrupt cuts. Could note multi-week evaluation window: lighting changes, turf mowing schedule, weather. "retrocausal genealogy" maybe causal lineage from field model to calibration to tactics, and how later tactical analysis retroactively justifies line detection. Need not mention betting.

Need "RECURSIVE_THEORY_OF_MIND" crisis habit regression vs counter-trap vs clock. Need map to algorithm design: crisis habit = treating all field lines as white color, using K-means, single-frame detection; counter-trap = offside auxiliary lines non-white and directional prior; clock = video continuity/Kalman tracking over frames. Recursive theory of mind: what the detector "believes" about line existence vs referee/offside assistant line? Hmm no humans. But can frame as model of observer/referee/camera. Need "crisis habit regression vs counter-trap vs clock." We'll explicitly define. Need avoid anthropomorphism? We can talk "agent" (algorithm designer) belief. Need >=? No exact but total >=1000. We can be thorough.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Need adjudicate vetoes across image physics, turf/field geometry, player occlusion, camera motion, weather/illumination. "Proof" that if physical invariants violated, algorithm output vetoed. Need include equations for SNR, luminance, blur, homography? Use formal. Could derive line support score and thresholds. Need exact singularity/breakdown regimes. For example Hough accumulator peak ambiguity when contrast variance -> 0; GMM singular covariance when angular spread zero or angle wraparound; MST clustering degenerates when inter-cluster distance less than noise; Kalman innovation gating under motion blur; offside line contrast under uniform turf mowing (both stripes same reflectance). Weather rain reduces contrast. Biomechanical: player foot/ball occlusion? Actually biomechanical veto: player limbs and ball occlude line; motion blur from camera/player. Need proof via occlusion fraction and PSF.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 verifiable RLVR veto scenarios + predictions. Need create three scenarios that could be tested against paper's algorithm: 1) all-white-line-only baseline vs offside auxiliary line direction prior; 2) single-frame vs video tracking under rapid camera adjustment; 3) GMM+MST vs K-means under noise. Predictions using table numbers. Need make verifiable with metrics. RLVR = reinforcement learning with verifiable rewards? Could define reward based on precision/recall; veto if improvement not met. Need mention measurable thresholds from Table 3/4: avg single-frame 91/94, video 94/96; GMM+MST 90 precision/94 recall vs MST 87/93 vs Kmeans 84/83. Wait Table 3: direction info 84/83; MST 87/93; GMM+MST 90/94. Table 4 single 91/94; video 94/96. Use exact. Need cite pages 7-8.

Need "SOURCE_OPERATORS_AND_EQUATIONS" formal LaTeX, units, page citations, breakdown. Need present:
- Field line set L_n^i
- Directional filter bank convolution: S_{i,k}(x,y) = (I_field^i * H_k)(x,y), k ∈ {l1,l2,r1,r2}; H units dimensionless weights; output intensity (digit counts). Combined S = ⋁ S_k (or max). Cite [PAGE 3] eq? page 4.
- Hough transform: ρ_m = x cos θ_m + y sin θ_m; accumulator A(ρ,θ) = ∫ I_field(x,y) δ(ρ - x cos θ - y sin θ) dxdy; units: intensity × pixel? Actually delta has inverse pixel, so accumulator units intensity. Or discrete sum A(ρ,θ)=∑ I(x,y) [|ρ - x cosθ - y sinθ|<1/2]. Use pixel. Peak set. 
- GMM on angular unit vector u_m = (cos θ_m, sin θ_m), density p(u)=∑_{k=1}^2 π_k N(u; μ_k, Σ_k), with constraint |u|=1. Principal angles φ_k=atan2(μ_{k,y}, μ_{k,x}). Units radians. Breakdown when μ_k near origin or Σ_k singular, or component weights vanish. Page 5.
- MST clustering: vertices P_m=(θ_m,ρ_m); edge weight D_mn = ||P_m-P_n||_2 (source says Euclidean distance [PAGE 5]); but units mixed θ radians and ρ pixels, problematic. Need note dimensional inconsistency: Euclidean distance across radians and pixels is not physically meaningful unless normalized. This is gray-zone. Could formalize normalized D_mn = sqrt((θ_m-θ_n)^2/σ_θ^2 + (ρ_m-ρ_n)^2/σ_ρ^2). But source doesn't state normalization. Need mark as audit. Then cluster via MST cutting? Source only says minimum spanning tree cluster. We can state generic. It selects max Hough intensity per class. Need cite [PAGE 5].
- Precision/recall: R = n_c/(n_c+n_m), P = n_c/(n_c+n_f). Units dimensionless. Table.
- Kalman tracking: state x_f = [ρ, θ, ρ̇, θ̇]^T; prediction x_{f|f-1}=F x_{f-1}; covariance P_{f|f-1}=F P F^T+Q; measurement z_f=[ρ,θ]^T; innovation y=z-Hx; S=H P H^T+R; K=P H^T S^{-1}; update. Units mixed. Need cite page 6 "Calman filtering" (typo). Breakdown when S singular, nonlinear angular wrap, abrupt cut, occlusion; innovation gate.
- Homography maybe: x' ~ H x for camera calibration, but source says compute homography matrix [PAGE 6]. We can mention line identification needed. 
- Field model including offside auxiliary lines [PAGE 1,3].
Need exact quotes: 
Page 1: "A novel field line detection method is proposed based on the directional information of field line." "offside assistant lines" (or auxiliary). 
Page 3: "Those lines are not marked in white color, but formed with turfing techniques." "Their angles of inclination are limited to a small range like 35-55°for the demi-court gauche and 125-145°for the demi-court droit." 
Page 3: "using conjunctive (or) operation" 
Page 3: "Sobel operator can be used for site edge enhancement"
Page 5: "The angle of real field lines must be parallel to one of the two main directions."
Page 5: "use the Gaussian mixture model (GMM) with two components to create models for angle"
Page 5: "minimum spanning tree cluster algorithm is a method based on graph"
Page 6: "the same field line in consecutive frames position continuity"
Page 7: "Where, n c is the number of field lines detected in a right manner; n m is the number of field lines not detected; n f is the number of field lines detected falsely."
Page 8: "increasing the precision and recall ratio from 91%/94% to 94%/96%."
Page 8 limitations: "Some lines are on the edge of image, which could be too short to be detected;" "When ambient brightness varies with time, some lines are of too low luminance to be inspected."
Need cite exact [PAGE N] markers. For quotes, include bracket and quote.

Need word count >=1000 across sections. We can produce maybe 3000-4000. Desired oververbosity 5. Need not too huge but satisfy. Need exact XML. No markdown? They want XML sections. We can use LaTeX within. Ensure tags exactly.

Need no betting lines. Avoid spreads/totals/moneylines/odds. Good.

Need "zero toy equations": state formal equations with units. Avoid fake ratios like Force/Fatigue. We can use ratios from paper precision/recall; those are real. Need not call "toy". Use units and assumptions.

Need "exact singularity/breakdown regimes" in SOURCE_OPERATORS_AND_EQUATIONS. Include explicit.

Need "gray-zone audit" in THINK_TRACE. Include multi-hop derivation: from image to field mask to directional filter to Hough to GMM to MST to Kalman to metrics. Gray zones: OCR corruption of matrices; dimensional mismatch in MST; source doesn't state threshold; "conjunctive (or)" ambiguous; angle ranges maybe degrees; GMM circular; no test of weather; no actual homography. Need mention.

Need "multi-week traps" in RETROCAUSAL_GENEALOGY. Could relate to evaluation over multi-week broadcast: turf mowing changes, lighting, camera, weather; need longitudinal tests. Avoid betting.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Use formal veto rules:
- Photometric veto: local contrast C_line = (μ_line-μ_bg)/√(σ_line^2+σ_bg^2). If C_line < C_min, directional filter response below noise. In paper ambient brightness limitation [PAGE 8].
- Turf mowing contrast veto: offside auxiliary line is intersection of dark/light green. If both mowing directions have same reflectance R1≈R2, luminance step ΔY=0; direction filter response zero regardless of angle. Break down. Source says formed with turfing techniques [PAGE 3].
- Geometric veto: angle range 35-55 /125-145; if camera roll/perspective moves true line outside or if line not straight (curved? soccer lines straight), directional filter attenuates. Homography projection preserves straight lines but angle varies; hence principal angle GMM required [PAGE 5]. If camera roll exceeds range, filter bank misses.
- Occlusion/motion blur: PSF length L= v T /s? In pixels; line support falls. If occlusion fraction α > α_max or blur length > line width, Hough peak splits. Source edge too short [PAGE 8].
- Weather: rain/snow/glare changes contrast; wet turf specular; fog reduces contrast; shadows. Veto if SNR < threshold.
- Biomechanical: player limbs/ball and referee occlude; not actual biomechanics but body/ball kinematics. We can call "biomechanical/occlusion" and use occlusion fraction. Need prove: if projected player silhouette covers line segment, Hough accumulator loses length. Use equation: detected line length L_eff = L(1-α); Hough peak proportional to L_eff. If L_eff < L_min edge-too-short. Source says short edge lines [PAGE 8]. Good.
Need "physical/biomechanical/weather veto proof" maybe "adjudication" of which layer vetoes. We can state any single layer with hard veto overrides algorithmic confidence. Need not mention betting.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 scenarios with reward and prediction. Need "verifiable" metrics and thresholds. Example:
1. Ablate offside auxiliary line directional prior; train/reward based on line ID F1. Prediction: on white-line-only clips, no change; on modern fields with mowing stripes, recall drops; if not, veto claim that direction prior is necessary. Use paper's qualitative claim [PAGE 3] and precision/recall. Need measurable: collect 300 frames from modern fields, annotate offside auxiliary lines. Reward = F1. Veto if ΔF1 >=? We can set predicted improvement from Table 3? But Table 3 not specifically offside. We can state predicted GMM+MST > K-means by ~6 pp precision, ~11 pp recall (from 84/83 to 90/94) on mixed lines. 
2. Single-frame vs video tracking under rapid camera adjustment. Paper says selected six clips "camera is adjusted heavily" [PAGE 7]. Prediction video > single: 94/96 vs 91/94 average, improvement +3 pp precision and +2 pp recall. Veto if video tracking fails to beat single-frame by pre-registered margin (e.g., +1 pp) under camera cuts. 
3. GMM principal-angle filtering vs no filtering under noise. Table 3: GMM+MST vs MST: precision 90 vs 87 (+3), recall 94 vs 93 (+1). Prediction GMM reduces false lines when spectators/stands and nonparallel noise, precision improvement ≥2 pp; if not, veto.
Need perhaps "RLVR" as reward for line detection: reward = F1 - λ false track rate. Need verifiable ground truth. Good.

Need "SOURCE_OPERATORS_AND_EQUATIONS" maybe include "Table 1 algorithm" step. Need mention "Hough transform intensity" and line support. Use exact page citations. Need include formal LaTeX with units:
- Image intensity I(x,y) in 8-bit digital counts (DN), dimensionless; coordinates pixels.
- Sobel gradient magnitude G = sqrt(G_x^2+G_y^2) DN/pixel? Actually gradient per pixel. 
- Directional filter weights dimensionless; convolution output DN.
- Hough accumulator units DN (sum over pixels). 
- angles radians (or degrees in source).
- Precision/recall dimensionless probabilities in [0,1].
- Kalman state units: ρ pixels, θ radians, velocities pixels/frame, radians/frame; covariance units squared.
Need mention "calibration/homography" mapping pixel to field coordinates in metres. Homography H ∈ R^{3×3}, x' ~ H x; field units metres. Source says "homography matrix" [PAGE 6], but paper doesn't provide calibration equations. We can state only as downstream.
Need exact singularity:
1. Hough peak ambiguity if line support length below threshold or two lines in same cluster have equal accumulator.
2. GMM covariance singular if angular samples lie on one direction (Σ_k rank 1 or zero) or component weight π_k→0; 2D unit circle wrap-around. Then principal angles undefined.
3. MST: if edge weights D_mn = 0 for all points or cluster separation less than within-cluster noise; dimensional mixing radians/pixels makes scale undefined. 
4. Kalman: innovation covariance S_f singular if measurement noise R=0 and state covariance projected null; angular wrap at ±π; abrupt camera cut violates constant velocity; occlusion yields missed detection and covariance growth. 
5. Directional filter: if local contrast ΔY=0, response zero; if line angle outside filter bank support (35-55,125-145), response attenuates; if turf mowing reflectance equal, offside line invisible.
6. Precision/recall: if n_c+n_m=0 or n_c+n_f=0 undefined; small-sample.
Need cite.

Need "THINK_TRACE" deep multi-hop derivation and gray-zone audit >=400 words. We can write maybe 700 words. Need be careful not to reveal internal chain? System asks THINK_TRACE. As model, we can provide "reasoning trace" but not hidden chain? The prompt explicitly requires. We can provide a high-level derivation and audit, not private chain. That's fine. Need not overdo.

Need "RETROCAUSAL_GENEALOGY" maybe 500 words. Historical/scientific lineage:
- Hough transform (1962) line detection, generalized Hough; used in sports field line extraction. 
- Mathematical morphology Top-Hat (source cites [13]) for white line enhancement.
- GMM for principal angle estimation; MST clustering from graph theory; Kalman filter (1960) for tracking.
- Soccer field model evolution: FIFA white lines (sidelines, goal lines, penalty area) and modern offside auxiliary lines from turf mowing. Source [PAGE 1,3].
- Camera calibration and homography in sports video [11-12]; tactic analysis. Retrocausal: tactical analysis needs player trajectories; trajectories need homography; homography needs line identification; line ID needs offside auxiliary lines and tracking. So later goal retroactively selects which earlier features matter. 
- Multi-week traps: turf mowing cycle changes stripe width/contrast; lighting/weather; camera operators; broadcast cuts; jersey colors; grandstand; line paint wear. Need evaluation across weeks. Could mention "multi-week traps" as temporal distribution shift: mowing schedule, season sunlight, weather. Need not betting.

Need "RECURSIVE_THEORY_OF_MIND" maybe define three modes:
- Crisis habit regression: under degraded visibility, model reverts to color-only white-line detection/K-means; ignores offside lines. 
- Counter-trap: explicitly model non-white mowing lines and principal angles; use GMM+MST.
- Clock: video continuity and Kalman tracking over time; track start/end frames B_n^t,E_n^t. 
Need "recursive theory of mind": the system must model what the referee/offside assistant sees, what camera operator focuses on, and what downstream calibration needs. But no humans? It can model "observer beliefs": color-only observer vs direction-aware observer vs temporal observer. Need state no mental states? But section asks. We'll frame as "designer/algorithm belief hierarchy" not actual players. Need mention "crisis habit regression" when ambient brightness varies, short edge lines [PAGE 8] cause fallback to color/K-means. "Counter-trap" is to not chase every bright white pixel; use directional prior and GMM. "Clock" is frame index f and Kalman prediction; video clip method improves 91/94 to 94/96 [PAGE 8]. Recursive: the detector's belief about a line at frame f depends on belief at f-1 and observation; the evaluator's belief about detector depends on precision/recall; the referee's offside decision depends on auxiliary line. Need keep formal but not over-anthropomorphic.

Need "CROSS_LAYER_VETO_ADJUDICATION" maybe 500 words. Include a table-like LaTeX? We can use paragraphs and equations. Need "veto proof" maybe "If any of following hard conditions true, output line must be rejected regardless of Hough confidence." Use equations. Need mention "Physical" (optics), "biomechanical" (player/ball occlusion and motion), "weather" (rain/fog/sun). Need cite page 8 limitations. Need "adjudication" among layers: photometric veto > geometric > temporal. If photometric contrast zero, no filter can recover; if geometric angle outside prior, directional filter bank cannot see; if occlusion/blur, Hough support insufficient; temporal tracking can bridge short occlusions but not long. Kalman gate can reject sudden appearance/disappearance; but camera cuts cause false veto. Need state "veto hierarchy." Good.

Need ensure no "betting lines" phrase. Avoid "line" as betting? The paper uses field lines. The invariant says never mention spreads, totals, moneylines, odds. We can mention field lines. Fine.

Need final only XML sections. No preamble? They want exact XML sections. We can include all tags. Need no markdown fences? We can just output XML. Need preserve LaTeX. Use `$...$` and `\[...\]`? Within XML, `<` and `>` need escape? LaTeX uses `<` maybe not. Avoid `<` in text except tags. Use `\lt` if needed. Use `\le`. Ampersand in LaTeX? Avoid `&`. Use `\land`. Need XML well-formed: `<` must not appear in text. So avoid `<` symbols. Use `\lt` or words. Use `>` okay? In XML, `>` is allowed but better avoid. Use `\to`. Need ampersands avoid. Use `\times`. In quotes, no `<`. We can use `\le`. Need tags exact. Inside text, `[PAGE 1]` okay. Need escape `&`? Avoid. Use "and". Need not include raw `<` in equations. Use `\in`, `\le`, `\ge`, `\approx`, `\sim`, `\ll`, `\gg` no angle brackets. Good.

Need include equations with `\left[` etc. No `<`. Use `\mathbb{R}^{3\times3}`. Fine. Need `~` maybe okay. Avoid `&` in matrices; use `\begin{bmatrix}` with `\\` and spaces; no `&` alignment? In bmatrix, columns need `&`, but ampersand must be escaped as `&amp;` in XML. Better avoid matrices with & or use `\begin{pmatrix} a \\ b \end{pmatrix}` single column. For state vector single column no &. For covariance no matrix content. For directional matrices, don't transcribe. Avoid matrices requiring &. Use `\operatorname{diag}`. Good.

Need quotes verbatim. They may contain `%`? Fine. Need quote page 3: "Their angles of inclination are limited to a small range like 35-55°for the demi-court gauche and 125-145°for the demi-court droit." Contains degree symbol and missing space; okay. Page 1 "offside assistant lines" vs page 3 "offside auxiliary lines". Use exact.

Need total word count. Let's draft.

Need maybe mention "DIRECTIONAL FILTER BANK MATRIX OCR is corrupted; I do not invent exact entries." This satisfies no toy equations. In SOURCE_OPERATORS: "The exact H_l1,H_l2,H_r1,H_r2 entries in Eq. (1) are not reliably recoverable from the supplied OCR [PAGE 4]; therefore the operator is represented at the level of its stated convolution and OR-combination, not fabricated entries." Good.

Need "Table 1" cite page 3. "conjunctive (or)" quote. Good.

Need "RLVR" scenarios: Need maybe define reward:
\[
\mathcal{R} = F_1 - \lambda \cdot \mathrm{IDSW} - \mu \cdot \mathrm{FP}
\]
But units? F1 dimensionless; IDSW count; needs normalization. Better:
\[
\mathcal{R} = \frac{2P R}{P+R} - \lambda \frac{N_{\mathrm{IDSW}}}{N_{\mathrm{lines}}}
\]
dimensionless, λ dimensionless. Good. But "RLVR" reward with verifiable ground truth. Need not overcomplicate.

Need "multi-week traps" maybe mention "evaluation over at least 4 weeks" not betting. Use "multi-week" in RETROCAUSAL. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Include "biomechanical" as player/ball occlusion and camera motion. Could say "true biomechanical layer enters only as occlusion and motion-blur source; the paper does not model biomechanics, so any claim that biomechanics directly recovers field lines is vetoed." This is a gray-zone audit. Good.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Need maybe "Retrocausal" as "downstream tactical analysis retroactively determines upstream requirements." Use that.

Need "SOURCE_OPERATORS_AND_EQUATIONS" with exact singularity/breakdown. Let's formulate:

1. Field model: \( \mathcal{L} = \mathcal{L}_{\mathrm{white}} \cup \mathcal{L}_{\mathrm{aux}} \), where white lines are FIFA markings; auxiliary lines are mowing-stripe boundaries. Cite page 1/3. Units: coordinates in pixels for image, metres for field.

2. Sobel: \(G(x,y)=\sqrt{G_x^2+G_y^2}\), \(G_x = \partial I/\partial x\), \(G_y\) etc. Units DN/pixel; threshold \(\tau_s\). Breakdown when \(\tau_s\) too high discards low-contrast auxiliary lines; too low includes crowd edges. The paper says "Sobel operator can be used for site edge enhancement" [PAGE 3].

3. Directional filter: \(S_k(x,y) = \sum_{u,v} H_k(u,v) I_{\mathrm{field}}(x-u,y-v)\). \(H_k\) dimensionless; \(S_k\) DN. Combined \(S = S_{l1} \lor S_{l2} \lor S_{r1} \lor S_{r2}\) or max. The source says "conjunctive (or) operation" [PAGE 3]. Breakdown if \(H_k\) orientation support misses line angle or if local contrast zero. The paper gives angle ranges. Note exact matrices unrecoverable.

4. Hough: \(A(\rho,\theta) = \sum_{x,y} S(x,y) \mathbf{1}[|\rho - x\cos\theta - y\sin\theta| \le \Delta/2]\). Units: if S in DN and indicator dimensionless, A in DN. Peak set. \(L_n^i\) lines. Breakdown if line length short/occluded, if accumulator peaks merge, if \(\Delta\) too large.

5. GMM: \(p(\mathbf{u}) = \sum_{k=1}^2 \pi_k \mathcal{N}(\mathbf{u};\boldsymbol{\mu}_k,\Sigma_k)\), \(\mathbf{u}_m=(\cos\theta_m,\sin\theta_m)\), \(\sum \pi_k=1\), \(\pi_k\ge0\). Principal angles \(\phi_k=\operatorname{atan2}(\mu_{k,2},\mu_{k,1})\). Units radians. Breakdown if \(\|\mu_k\|\to0\), \(\Sigma_k\) singular, \(\pi_k\to0\), or angular wrap. The paper says "2-dimensional GMM in the space ... cos sin" [PAGE 5].

6. MST: vertices \(P_m=(\theta_m,\rho_m)\). Source says weight \(D_{mn}=\|P_m-P_n\|_2\). But units mixed; audit normalization \(D^2 = ((\theta_m-\theta_n)/\sigma_\theta)^2 + ((\rho_m-\rho_n)/\sigma_\rho)^2\). Without normalization the Euclidean distance is dimensionally inconsistent; this is a gray-zone. Breakdown if within-cluster spread comparable to between-cluster separation, or if all weights zero. The paper says "each vertex in the graph represents a point P_m in (θ,ρ) space, the weight between two points edges in map represent their Euclidean distance" [PAGE 5].

7. Precision/recall: \(P=n_c/(n_c+n_f)\), \(R=n_c/(n_c+n_m)\). Units dimensionless probability. Breakdown if denominators zero. Table values.

8. Kalman: state \(\mathbf{x}_f = [\rho_f,\theta_f,\dot\rho_f,\dot\theta_f]^T\). Units pixel, rad, pixel/frame, rad/frame. \( \mathbf{x}_{f|f-1} = F \mathbf{x}_{f-1|f-1} \); \(P_{f|f-1}=F P_{f-1|f-1}F^T+Q\); measurement \(\mathbf{z}_f=[\rho_f^{\mathrm{obs}},\theta_f^{\mathrm{obs}}]^T\); \( \mathbf{y}_f=\mathbf{z}_f-H\mathbf{x}_{f|f-1}\); \(S_f=H P_{f|f-1}H^T+R\); \(K_f=P_{f|f-1}H^T S_f^{-1}\); update. Breakdown if \(S_f\) singular, angular wrap, camera cut violates constant velocity, occlusion. Cite page 6.

9. Homography: \(\mathbf{x}' \sim H \mathbf{x}\), \(H\in\mathbb{R}^{3\times3}\), field coordinates in metres; source says compute homography matrix [PAGE 6]. Not derived in paper. Breakdown if line identification wrong or degenerate collinear correspondences.

Need "units" clearly.

Need "CROSS_LAYER" equations:
Photometric contrast:
\[
C = \frac{|\mu_{\mathrm{line}}-\mu_{\mathrm{bg}}|}{\sqrt{\sigma_{\mathrm{line}}^2+\sigma_{\mathrm{bg}}^2}}
\]
dimensionless. Veto if \(C \lt C_{\min}\). Source ambient brightness limitation [PAGE 8].
Turf stripe contrast:
\[
\Delta Y = \int_{\lambda} R_1(\lambda) E(\lambda) \bar y(\lambda)d\lambda - \int_{\lambda} R_2(\lambda) E(\lambda)\bar y(\lambda)d\lambda
\]
units cd/m² or DN. If \(\Delta Y\to0\), offside line invisible. The paper says formed with turfing techniques [PAGE 3].
Occlusion:
\[
\alpha_f = \frac{1}{L}\int_0^L \mathbf{1}[\text{line occluded at }s] ds
\]
dimensionless. Effective support \(L_{\mathrm{eff}}=L(1-\alpha_f)\). Veto if \(L_{\mathrm{eff}}\lt L_{\min}\) or if blur PSF length \(b=vT_{\mathrm{exp}}/s_p\) exceeds line width. Source short lines [PAGE 8].
Weather:
SNR \( \mathrm{SNR} = C \sqrt{N_{\mathrm{pix}}}\). Veto if below. 
Angle:
\(\theta_{\mathrm{line}}\notin [35^\circ,55^\circ]\cup[125^\circ,145^\circ]\) for the expected demi-court? But camera pan changes; GMM principal angles. Veto if directional filter bank has zero response. 
Need "veto adjudication": If photometric veto true, no geometric or temporal layer can recover; if geometric veto true but temporal prediction available, can bridge only if occlusion duration below gate; if weather veto persists over multi-frame, Kalman covariance grows and output invalid. Good.

Need "RLVR" scenarios:
Scenario 1: Ablate offside-line directional prior. Prediction: on clips with mowing stripes, recall for auxiliary lines drops; full model better. Use Table 3? Not exactly offside. But source claims method "enables it to effectively find out offside auxiliary lines" [PAGE 8? Actually conclusion page 8]. Prediction full GMM+MST precision/recall ≥ baseline by at least 2 pp on annotated modern-field dataset. Veto if not.
Scenario 2: Single-frame vs video tracking under rapid camera adjustment. Prediction video tracking average 94/96 vs single 91/94 [PAGE 8]. Veto if not +1 pp.
Scenario 3: GMM principal-angle filter + MST vs MST alone under crowd/noise. Prediction GMM improves precision from 87 to 90 and recall 93 to 94 average [PAGE 7]. Veto if no precision gain. 
Need "verifiable" metrics: precision/recall/F1 on held-out annotated frames. Reward \(\mathcal{R}=F_1\) and veto thresholds. Good.

Need "THINK_TRACE" maybe include "multi-hop derivation": 
- Hop 1: image is mixture of field, crowd, players, lines. 
- Hop 2: white lines have high RGB; offside lines are mowing boundaries; color-only fails. 
- Hop 3: direction prior gives narrow angular support; directional filter enhances; Sobel and field mask suppress crowd. 
- Hop 4: Hough converts to parameter space; clusters. 
- Hop 5: GMM estimates two principal angles; removes noise. 
- Hop 6: MST clusters; max intensity per cluster. 
- Hop 7: Kalman tracks across frames; handles missed/false detections. 
- Hop 8: metrics. 
Gray-zone audit:
- OCR corruption of filter matrices and equation (1). 
- "conjunctive (or)" ambiguous; is it union or logical OR? 
- "Calman" typo. 
- MST Euclidean distance in mixed units. 
- GMM on angles uses 2D unit vectors; source doesn't specify covariance regularization. 
- Table 3 row S5 has "89%%" typo. 
- No weather/rain tests. 
- No biomechanical model. 
- Homography not implemented. 
- Single-frame vs video comparison uses same six clips? Not enough. 
- Sample 300 images only. 
Need cite page 7 S5 typo? Table has "89%%" [PAGE 7]. Good.

Need "RECURSIVE_THEORY_OF_MIND" maybe 400 words. It says crisis habit regression vs counter-trap vs clock. We can write:
- Crisis habit regression: under low luminance/short line, model reverts to color-only K-means; it assumes "line = white". This is a habit. The paper's own limitations [PAGE 8] trigger it. 
- Counter-trap: The model must not accept the first high Hough peak; it must ask "what would a color-only observer miss?" and use offside auxiliary lines, direction prior, GMM. 
- Clock: The temporal observer uses frame index f and Kalman; it can distinguish persistent line from transient noise; video clip method improves 91/94 to 94/96 [PAGE 8]. 
Recursive theory of mind: three nested observers: pixel observer, frame observer, clip observer. The clip observer models the frame observer's error (false/missed) and the frame observer models pixel observer's color/direction. The referee/offside decision is downstream. The evaluator models the algorithm. Need mention "belief" as posterior \(b_f(n)=\Pr(L_n \text{ exists}|Z_{1:f})\). Could formalize: \(b_f(n) = \eta p(z_f|L_n) \int b_{f-1}(n) p(L_n|L_n') dL_n'\). Units probability. This is a formal recursive belief update. Good. But not over-invent? It's a formalization of tracking. Fine.

Need "RETROCAUSAL_GENEALOGY" maybe include "retrocausal" as "later requirement selects earlier feature". Need word count.

Need ensure all XML tags exact and no extra. Let's compose in final. Need maybe use CDATA? Not necessary. Need escape ampersands. Avoid `&` entirely. In quotes, no ampersand. In LaTeX, avoid `&` alignment. Use `\text{ and }`. In bmatrix for state vector, no &. Use `\begin{bmatrix} \rho_f \\ \theta_f \\ \dot\rho_f \\ \dot\theta_f \end{bmatrix}` no &. Good. For GMM, no &. Use `\sum_{k=1}^{2}`. Good. For Hough indicator, use \(\mathbf{1}\left[\left|\rho - x\cos\theta - y\sin\theta\right| \le \Delta/2\right]\). No `<`. Use `\le`. Good.

Need use `\mathrm{atan2}`. Fine.

Need exact quotes with `[PAGE 3]` and quote. Eg:
The paper states: “Those lines are not marked in white color, but formed with turfing techniques.” [PAGE 3]
The OCR has curly quotes? We can use normal quotes. Fine.

Need no markdown. XML can contain LaTeX. Need maybe wrap equations in `\[...\]`. That's text, okay. No `<`. Good.

Need word count. Let's draft sections.

THINK_TRACE: 600 words. SOURCE: 1200. RETRO: 500. RECURSIVE: 400. CROSS: 600. RLVR: 500. Total ~3800. Good.

Need ">=1,000-word DEPTH across these exact XML sections" yes.

Need "exact singularity/breakdown regimes" in SOURCE. Include maybe "Singularities and breakdown regimes" paragraph with bullets. Use `\to` not arrow? Fine.

Need "zero betting lines" no betting. Good.

Need "no toy equations" ensure all equations meaningful. Avoid fake ratios. Fine.

Need "page citations exact markers and verbatim quotes" yes.

Let's write final.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit. The source is a 2015 paper on field-line detection and tracking in soccer video. The derivation begins with the physical scene: the pitch contains white FIFA markings and, in modern fields, non-white offside auxiliary lines formed by turf mowing stripes. The paper states: “A novel field line detection method is proposed based on the directional information of field line.” [PAGE 1] and “Those lines are not marked in white color, but formed with turfing techniques.” [PAGE 3] Therefore, a color-only detector has a structural blind spot. The first hop is image formation: \(I(x,y)\) is an 8-bit digital-count image in pixel coordinates. The second hop is field segmentation and Sobel edge enhancement: the paper says “Sobel operator can be used for site edge enhancement” [PAGE 3]. The third hop is directional filtering: the paper uses “four yuan directional filter banks” [PAGE 3] and an OR-combination, described as “using conjunctive (or) operation” [PAGE 3], to enhance line-like structures with the expected slopes. The fourth hop is Hough transformation: each line cluster in \((\theta,\rho)\) space is a candidate, and the strongest Hough intensity in each cluster is selected as the real line. The fifth hop is angle filtering: the paper states “The angle of real field lines must be parallel to one of the two main directions.” [PAGE 5] and uses a two-component Gaussian mixture model on \((\cos\theta,\sin\theta)\) to estimate two principal angles. The sixth hop is clustering: the paper uses “minimum spanning tree cluster algorithm” [PAGE 5] to group Hough points and select the maximum-intensity line per class. The seventh hop is temporal tracking: “the same field line in consecutive frames position continuity” [PAGE 6] is used with Kalman filtering to suppress false and missed detections. The eighth hop is evaluation: precision and recall are defined in Eq. (2) and reported as single-frame 91 percent precision and 94 percent recall versus video-clip 94 percent precision and 96 percent recall [PAGE 8].

The gray-zone audit is substantial. First, the exact directional-filter matrices in Eq. (1) are corrupted in the supplied OCR: the page-4 matrix text is not reliably reconstructable. I therefore do not invent matrix entries. I treat the operator only at the level stated by the paper: four directional filters \(H_{l1},H_{l2},H_{r1},H_{r2}\), followed by an OR-combination, then Hough detection. Second, the phrase “conjunctive (or) operation” is ambiguous: it could mean logical OR, pixelwise maximum, or union of binary masks. Third, the paper’s MST distance is described as Euclidean distance between points \(P_m=(\theta_m,\rho_m)\) [PAGE 5], but \((\theta,\rho)\) has mixed units, radians and pixels. Without normalization, the Euclidean distance is dimensionally inconsistent. This is a real gray zone, not a cosmetic issue. Fourth, the GMM is applied to angles on a circle, so the two-component model needs circular or unit-vector treatment; the paper says it uses the space of \((\cos\theta,\sin\theta)\) [PAGE 5], which is appropriate, but covariance regularization and component collapse are not discussed. Fifth, the paper reports a typographical “89%%” in Table 3, row S5 [PAGE 7], so table extraction must be treated cautiously. Sixth, the paper’s stated failure modes are limited to short edge lines and low luminance when ambient brightness varies [PAGE 8]; it does not report rain, snow, glare, wet-turf specularity, or multi-week mowing changes. Seventh, the paper mentions a homography matrix [PAGE 6] but does not derive or validate calibration. Eighth, “Calman filtering” [PAGE 6] is a typographical rendering of Kalman filtering; the implementation details, state vector, noise covariances, and gating are not supplied. Ninth, the single-frame versus video-clip comparison uses six clips and is not a broad benchmark. Tenth, no biomechanical model is present; player and ball occlusion enters only as an image-formation nuisance, not as a modeled biomechanical process. The correct conclusion is therefore narrow: the paper gives a coherent pipeline and useful average metrics, but it does not prove robustness under weather, long-duration distribution shift, or arbitrary camera motion.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The paper’s field model is a set union of white FIFA markings and non-white auxiliary lines. Let \(\mathcal{L}_{\mathrm{white}}\) denote sidelines, goal lines, kick-off lines, and penalty-area lines, and let \(\mathcal{L}_{\mathrm{aux}}\) denote offside auxiliary lines formed by turf mowing. The modeled line set is \(\mathcal{L}=\mathcal{L}_{\mathrm{white}}\cup\mathcal{L}_{\mathrm{aux}}\). Image coordinates are in pixels; field coordinates downstream of calibration are in metres. The paper states that field lines are “marked in white color” [PAGE 1], but also that auxiliary lines are “not marked in white color, but formed with turfing techniques” [PAGE 3]. The paper also gives the prior angular ranges: “Their angles of inclination are limited to a small range like 35-55°for the demi-court gauche and 125-145°for the demi-court droit.” [PAGE 3] These are degrees in the source; in formal use they convert to radians by \(\theta_{\mathrm{rad}}=\theta_{\mathrm{deg}}\pi/180\).

Sobel edge enhancement is used to separate field from non-field regions before line enhancement. A standard formalization is \(G(x,y)=\sqrt{G_x(x,y)^2+G_y(x,y)^2}\), where \(G_x=\partial I/\partial x\) and \(G_y=\partial I/\partial y\). If \(I\) is in digital counts, then \(G_x\) and \(G_y\) are in digital counts per pixel, and \(G\) is in digital counts per pixel. The paper does not give the threshold, but states “Sobel operator can be used for site edge enhancement” [PAGE 3]. The breakdown regime is immediate: if the threshold is too high, low-contrast auxiliary lines are discarded; if too low, crowd and grandstand edges enter the field mask.

The directional-filter stage is formalized as a discrete convolution:
\[
S_k(x,y)=\sum_{u,v} H_k(u,v)\, I_{\mathrm{field}}(x-u,y-v),
\]
where \(k\in\{l1,l2,r1,r2\}\), \(H_k\) is dimensionless filter weight, and \(S_k\) is in digital counts. The paper states that four directional filters \(H_{l1},H_{l2},H_{r1},H_{r2}\) are used [PAGE 3], and the combined filtered image is obtained by “using conjunctive (or) operation” [PAGE 3]. A defensible formalization is \(S(x,y)=\bigvee_{k} S_k(x,y)\), where \(\bigvee\) denotes pixelwise OR for binarized responses or pixelwise maximum for continuous responses. The exact entries of Eq. (1) are not reliably recoverable from the supplied OCR [PAGE 4]; therefore no fabricated matrix entries are asserted here. Breakdown occurs when the local line contrast is zero, when the true line angle lies outside the filter-bank angular support, or when the OR-combination admits too many non-line edges.

Hough detection maps the filtered image into parameter space. A standard discrete accumulator is
\[
A(\rho,\theta)=\sum_{x,y} S(x,y)\,\mathbf{1}\!\left[\left|\rho-x\cos\theta-y\sin\theta\right|\le \frac{\Delta}{2}\right],
\]
where \(\rho\) is in pixels, \(\theta\) is in radians, \(\Delta\) is the accumulator bin width in pixels, and \(A\) has units of digital counts. The paper says that every \((\theta,\rho)\) suggests a straight line and that a group of lines corresponds to a cluster of points [PAGE 4]. The selected lines are the \(N\) most significant Hough peaks, denoted \(L_n^i\) for frame \(i\). Breakdown occurs when the line is too short or heavily occluded, when two lines merge into one Hough peak, or when \(\Delta\) is so large that distinct lines share a bin.

The principal-angle model is a two-component Gaussian mixture on the unit vector \(\mathbf{u}_m=(\cos\theta_m,\sin\theta_m)\):
\[
p(\mathbf{u})=\sum_{k=1}^{2}\pi_k\,\mathcal{N}\!\left(\mathbf{u};\boldsymbol{\mu}_k,\Sigma_k\right),
\qquad
\sum_{k=1}^{2}\pi_k=1,\quad \pi_k\ge 0.
\]
The principal angles are \(\phi_k=\operatorname{atan2}(\mu_{k,2},\mu_{k,1})\), in radians. The paper says it uses a “Gaussian mixture model (GMM) with two components” and applies it in the \((\cos\theta,\sin\theta)\) space [PAGE 5]. Breakdown regimes are explicit: if \(\|\boldsymbol{\mu}_k\|\to 0\), the mean direction is undefined; if \(\Sigma_k\) is singular, the component density is degenerate; if \(\pi_k\to 0\), a principal angle disappears; and if angular samples straddle the \(\pm\pi\) wrap, naive linear modeling is invalid. The paper does not state covariance regularization, so this is a formal vulnerability.

Minimum-spanning-tree clustering uses vertices \(P_m=(\theta_m,\rho_m)\). The paper describes the edge weight as Euclidean distance \(D_{mn}=\|P_m-P_n\|_2\) [PAGE 5]. Dimensionally, this mixes radians and pixels. A normalized audit form is
\[
D_{mn}^{2}=
\left(\frac{\theta_m-\theta_n}{\sigma_\theta}\right)^{2}
+
\left(\frac{\rho_m-\rho_n}{\sigma_\rho}\right)^{2},
\]
with \(\sigma_\theta\) in radians and \(\sigma_\rho\) in pixels, making \(D_{mn}\) dimensionless. The source does not state this normalization. Breakdown occurs when within-cluster spread is comparable to between-cluster separation, when all edge weights collapse to zero, or when a single noise line connects two real clusters.

Precision and recall are defined by the paper as
\[
P=\frac{n_c}{n_c+n_f},
\qquad
R=\frac{n_c}{n_c+n_m},
\]
where \(n_c\) is the number of correctly detected field lines, \(n_m\) is the number not detected, and \(n_f\) is the number falsely detected [PAGE 7]. All three counts are dimensionless integers; \(P\) and \(R\) are dimensionless probabilities in \([0,1]\). The denominators must be nonzero. The paper reports average single-frame precision and recall of 91 percent and 94 percent, and video-clip precision and recall of 94 percent and 96 percent [PAGE 8]. It also reports GMM-plus-MST average precision and recall of 90 percent and 94 percent, versus 87 percent and 93 percent for MST alone and 84 percent and 83 percent for the direction-information K-means baseline [PAGE 7]. The S5 row contains “89%%” [PAGE 7], which is a typographic defect and should not be treated as a second percentage.

The tracking stage is a Kalman filter over line parameters. A natural state is
\[
\mathbf{x}_f=
\begin{bmatrix}
\rho_f\\
\theta_f\\
\dot\rho_f\\
\dot\theta_f
\end{bmatrix},
\]
with units pixels, radians, pixels per frame, and radians per frame. The prediction and update are
\[
\mathbf{x}_{f|f-1}=F\mathbf{x}_{f-1|f-1},
\qquad
P_{f|f-1}=F P_{f-1|f-1}F^{T}+Q,
\]
\[
\mathbf{y}_f=\mathbf{z}_f-H\mathbf{x}_{f|f-1},
\qquad
S_f=H P_{f|f-1}H^{T}+R,
\qquad
K_f=P_{f|f-1}H^{T}S_f^{-1},
\]
followed by the standard update. Here \(\mathbf{z}_f=[\rho_f^{\mathrm{obs}},\theta_f^{\mathrm{obs}}]^{T}\), \(P\) is covariance in squared units, \(Q\) is process noise covariance, \(R\) is measurement noise covariance, and \(S_f\) is innovation covariance. The paper states “Calman filtering” [PAGE 6], meaning Kalman filtering. Breakdown occurs if \(S_f\) is singular, if angular wrap invalidates linear subtraction, if a camera cut violates constant-velocity motion, or if prolonged occlusion makes covariance growth dominate the measurement. The paper’s temporal prior is “the same field line in consecutive frames position continuity” [PAGE 6], not a guarantee under abrupt camera adjustment.

The downstream homography is mentioned but not derived: “In order to compute the homography matrix, which must know the detected field line identification.” [PAGE 6] Formally, a planar homography is \(\mathbf{x}'\sim H\mathbf{x}\), with \(H\in\mathbb{R}^{3\times3}\), mapping image pixels to field coordinates in metres after calibration. The paper does not supply \(H\), calibration targets, or degeneracy analysis. Breakdown occurs if line labels are wrong or if correspondences are collinear and the homography is degenerate.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is retrocausal in the following sense: later tactical analysis requires player trajectories; trajectories require camera calibration; calibration requires line identification; line identification requires a field model that includes modern offside auxiliary lines. The paper states that field-line extraction is “basis to strategy analysis” [PAGE 1] and that the extracted lines provide conditions for “camera calibration, target trajectory fetch as well as tactics analysis” [PAGE 8]. Thus the downstream goal of tactical analysis retroactively selects which upstream features matter: not merely white paint, but also mowing-stripe boundaries; not merely single-frame detection, but temporal tracking; not merely line existence, but line identity.

Historically, the pipeline sits at the intersection of several lineages. The Hough transform is the classical parameter-space method for straight-line detection. Mathematical morphology, especially Top-Hat transform, is the classical white-line enhancement route cited by the paper: it notes that prior work used “mathematical morphology” and “Top-Hat transform” to highlight white lines [PAGE 2]. Gaussian mixture models are classical soft-clustering models for multimodal angle distributions. Minimum spanning trees are classical graph-clustering tools; the paper explicitly says the MST method is “a method based on graph” [PAGE 5]. Kalman filtering is the classical linear-Gaussian recursive estimator, here applied to line continuity across frames. The paper’s contribution is not any single operator; it is the composition: field segmentation, Sobel enhancement, directional filtering, Hough detection, GMM principal-angle filtering, MST clustering, and Kalman tracking, all tied to a modern field model with auxiliary lines.

The multi-week traps are distribution-shift traps. First, turf mowing is periodic: stripe width, direction, and contrast can change with the mowing schedule. If the two mowing directions produce nearly equal luminance under a given sun angle, the auxiliary line contrast approaches zero even though the geometric boundary exists. The paper’s own model says the lines are “formed with turfing techniques” [PAGE 3], so a multi-week evaluation must include different mowing dates, not one field state. Second, ambient illumination changes with time of day, cloud cover, stadium shadows, and broadcast exposure control. The paper admits that “When ambient brightness varies with time, some lines are of too low luminance to be inspected.” [PAGE 8] A one-day evaluation cannot establish robustness. Third, weather changes the turf reflectance: rain, wetness, glare, fog, and snow alter both white-line and mowing-line contrast. The paper does not test these. Fourth, broadcast camera behavior changes: pan, tilt, zoom, cut, and replay insert change the principal angles and can violate constant-velocity tracking. The paper selected clips where “the camera is adjusted heavily” [PAGE 7], but six clips are not a multi-week broadcast distribution. Fifth, jersey colors, crowd colors, and advertising boards create false edges; the paper notes “unstable team jersey color” as an interference factor [PAGE 2]. Sixth, line paint wear and occlusion by players and the ball create short segments; the paper reports that “Some lines are on the edge of image, which could be too short to be detected” [PAGE 8]. A valid multi-week test must therefore stratify by mowing cycle, solar angle, weather, camera motion, and occlusion density. The retrocausal lesson is that the later tactical requirement does not merely justify the line detector; it exposes exactly which upstream invariances the detector must preserve.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive observer hierarchy has three levels: pixel observer, frame observer, and clip observer. The pixel observer asks whether a local patch is line-like. Its crisis habit is color regression: when contrast is poor, it falls back to “line equals white,” which is exactly the habit the paper criticizes because auxiliary lines are “not marked in white color” [PAGE 3]. The frame observer asks whether the Hough candidate is consistent with one of the two principal directions. Its counter-trap is to model the pixel observer’s failure mode: it does not trust a bright white segment merely because it is bright; it estimates the two principal angles with a two-component GMM [PAGE 5] and rejects candidates that do not align. The clip observer asks whether a line persists across frames. Its clock is the frame index \(f\) and the Kalman prediction; it uses “the same field line in consecutive frames position continuity” [PAGE 6] to distinguish persistent structure from transient noise. The paper’s video-clip method improves average precision and recall from 91 percent and 94 percent to 94 percent and 96 percent [PAGE 8], which is evidence that the clock layer adds information beyond the frame layer.

A formal recursive belief update can be written as
\[
b_f(n)=\eta\,p(\mathbf{z}_f\mid L_n)\int b_{f-1}(n')\,p(L_n\mid L_{n'})\,dL_{n'},
\]
where \(b_f(n)\) is the posterior probability that line \(n\) exists at frame \(f\), \(\mathbf{z}_f\) is the observation, and \(\eta\) is a normalizing constant. The units are probability; the integral is over the previous line state. This is the tracking layer’s theory of its own past. The frame observer’s theory of the pixel observer is a gating model: a Hough peak is accepted only if its angle is close to a GMM principal angle and its intensity is high relative to the cluster. The clip observer’s theory of the frame observer is an error model: missed detections and false detections are not independent noise; they are caused by occlusion, blur, low luminance, and camera cuts. The paper names two such causes: short edge lines and low luminance under changing ambient brightness [PAGE 8].

The crisis habit regression occurs when the system encounters exactly those named conditions and reverts to the simplest color-only or single-frame rule. The counter-trap is to keep the direction-aware and temporal-aware hierarchy active even when the image is degraded, but to lower confidence rather than silently switch models. The clock is not a separate model; it is the temporal evidence that prevents a single bad frame from dominating. In recursive terms, the clip observer must model the frame observer’s likely error, and the frame observer must model the pixel observer’s likely error. If the clip observer simply averages frames without modeling camera cuts, it will smooth across discontinuities and create false continuity. If the frame observer simply trusts the Hough maximum without modeling the pixel observer’s color bias, it will accept white crowd edges. The paper’s composition—GMM principal-angle filtering plus MST clustering plus Kalman tracking—is a practical approximation to this hierarchy, but it is not a full theory of mind: it does not explicitly estimate occlusion, weather, or camera-cut state.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto adjudication must be physical first, geometric second, temporal third. The physical layer is photometry. Define the local line contrast
\[
C=\frac{\left|\mu_{\mathrm{line}}-\mu_{\mathrm{bg}}\right|}
{\sqrt{\sigma_{\mathrm{line}}^{2}+\sigma_{\mathrm{bg}}^{2}}},
\]
which is dimensionless if \(\mu\) and \(\sigma\) are in the same digital-count units. If \(C\lt C_{\min}\), the directional filter response is below noise, and no Hough or GMM stage can recover the line reliably. This is the formal version of the paper’s admission that “When ambient brightness varies with time, some lines are of too low luminance to be inspected.” [PAGE 8] For offside auxiliary lines, the relevant physical quantity is the turf-stripe luminance step
\[
\Delta Y=
\int_{\lambda} R_1(\lambda)E(\lambda)\bar y(\lambda)\,d\lambda
-
\int_{\lambda} R_2(\lambda)E(\lambda)\bar y(\lambda)\,d\lambda,
\]
where \(R_1\) and \(R_2\) are the two mowing-direction reflectances, \(E\) is illuminance, and \(\bar y\) is the photopic weighting. If \(\Delta Y\to 0\), the auxiliary line is physically invisible even though the geometric boundary exists. This is not a software failure; it is a hard veto. The paper’s statement that auxiliary lines are “formed with turfing techniques” [PAGE 3] entails this failure mode.

The geometric layer is the directional-filter support. The paper gives the expected angle ranges as 35–55 degrees for the demi-court gauche and 125–145 degrees for the demi-court droit [PAGE 3]. If the camera roll, perspective, or pan places the projected line outside the filter-bank support, the directional filter attenuates the line even if the contrast is high. The GMM principal-angle stage can adapt to two dominant directions, but it cannot invent a third direction that the filter bank did not enhance. The veto rule is: if the line angle is outside the union of the filter-bank support and the GMM-estimated principal-angle gate, reject the line. This is a geometric veto, not a temporal one.

The biomechanical and occlusion layer is the effective line support. Define the occlusion fraction
\[
\alpha_f=\frac{1}{L}\int_{0}^{L}\mathbf{1}\!\left[\text{line occluded at arc length }s\text{ in frame }f\right]ds,
\]
which is dimensionless, and the effective visible length \(L_{\mathrm{eff}}=L(1-\alpha_f)\). If \(L_{\mathrm{eff}}\lt L_{\min}\), the Hough accumulator loses the long-line property and the line may split into fragments. The paper reports that “Some lines are on the edge of image, which could be too short to be detected” [PAGE 8], which is the same failure in a different guise. Motion blur adds a point-spread-function length \(b\approx vT_{\mathrm{exp}}/s_p\), where \(v\) is image velocity in pixels per second, \(T_{\mathrm{exp}}\) is exposure time in seconds, and \(s_p\) is pixel pitch in metres per pixel; \(b\) is in pixels. If \(b\) exceeds the line width, the line contrast is smeared and the Hough peak broadens. Player limbs, the ball, and the referee are biomechanical occluders: their projected silhouettes remove line support. The paper does not model biomechanics, so any claim that biomechanical analysis directly recovers field lines is vetoed; biomechanics enters only as occlusion and motion.

The weather layer is a multiplicative noise and contrast veto. Rain, wet turf, glare, fog, and snow change \(C\), \(\Delta Y\), and the specular component. A verifiable weather veto is \(\mathrm{SNR}=C\sqrt{N_{\mathrm{pix}}}\lt \mathrm{SNR}_{\min}\), where \(N_{\mathrm{pix}}\) is the number of line-support pixels and SNR is dimensionless. If this holds for several consecutive frames, the Kalman innovation covariance \(S_f\) grows; the filter may either reject valid measurements or accept false ones. The adjudication order is: photometric veto overrides geometric veto; geometric veto overrides temporal smoothing; temporal smoothing may bridge a short occlusion only if the occlusion duration is below the Kalman gate and the camera has not cut. If the photometric contrast is zero, the correct output is “no reliable line,” not a high-confidence Hough line. If the geometric angle is outside support, the correct output is “line not sensed,” not “line absent.” If occlusion is long, the correct output is “track coasting,” not “new line.” This hierarchy is the proof obligation for any cross-layer claim.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
A verifiable RLVR reward for this pipeline can be defined on annotated frames and clips as
\[
\mathcal{R}=F_1-\lambda\frac{N_{\mathrm{IDSW}}}{N_{\mathrm{lines}}},
\qquad
F_1=\frac{2PR}{P+R},
\]
where \(F_1\), \(P\), and \(R\) are dimensionless, \(N_{\mathrm{IDSW}}\) is the number of identity switches, \(N_{\mathrm{lines}}\) is the number of annotated lines, and \(\lambda\) is a dimensionless penalty weight. The reward is verifiable because \(P\), \(R\), and identity switches are computed from held-out annotations. The following three counterfactual veto scenarios are testable.

Scenario 1: Ablate the offside-auxiliary-line directional prior. Keep Sobel, Hough, GMM, MST, and Kalman fixed, but remove the explicit directional filter bank that targets non-white mowing boundaries. Prediction: on modern-field clips containing auxiliary lines, the ablated model’s line recall will fall relative to the full model, while on white-line-only clips the difference will be small. The paper’s claim is that the method “enables it to effectively find out offside auxiliary lines” [PAGE 8], and its average GMM-plus-MST precision and recall are 90 percent and 94 percent versus 84 percent and 83 percent for the direction-information K-means baseline [PAGE 7]. Veto condition: if the full model fails to improve auxiliary-line recall by at least 2 percentage points on a pre-registered annotated set, the claim that the directional prior is necessary is vetoed. This is a verifiable counterfactual because the only changed variable is the auxiliary-line directional prior.

Scenario 2: Single-frame detection versus video-clip tracking under rapid camera adjustment. Use the same six heavily adjusted clips and compare single-frame detection with the Kalman-tracked clip method. Prediction: the video-clip method will exceed the single-frame method, consistent with the paper’s reported increase from 91 percent precision and 94 percent recall to 94 percent precision and 96 percent recall [PAGE 8]. Veto condition: if the clip method fails to improve \(F_1\) by at least 1 percentage point on the pre-registered clips, the claim that temporal continuity improves detection is vetoed. This counterfactual directly tests the “clock” layer and the paper’s own comparison.

Scenario 3: GMM principal-angle filtering plus MST versus MST alone under crowd and grandstand noise. Prediction: GMM filtering will improve precision more than recall, because it removes noise lines whose angles are inconsistent with the two principal directions. The paper reports GMM-plus-MST at 90 percent precision and 94 percent recall versus MST alone at 87 percent precision and 93 percent recall [PAGE 7]. Veto condition: if GMM filtering fails to improve precision by at least 2 percentage points on a noise-stratified set, the claim that principal-angle filtering suppresses false lines is vetoed. This is verifiable because the annotation identifies false lines and the only changed component is the GMM angle gate.

A fourth, optional veto can target the paper’s stated failure modes: if a model claims robustness to low luminance or short edge lines, it must be tested on frames where the paper itself says failures occur, namely “When ambient brightness varies with time, some lines are of too low luminance to be inspected” and “Some lines are on the edge of image, which could be too short to be detected” [PAGE 8]. The prediction is that precision and recall will drop in those strata. If a model reports no drop, the evaluation is suspect. These counterfactuals are not betting propositions; they are falsifiable algorithm tests with explicit metrics, changed variables, and veto thresholds.
</RLVR_COUNTERFACTUAL_VETOES>