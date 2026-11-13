---
source: "arxiv_2506.12716v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 16
model: baidu/ernie-5.5-flash-preview:free
words: 7242
---

<NATIVE_REASONING>
We need answer user's request. Need produce >=1000 words? User asks: DRIVE SOURCE... PAGES... SOURCE TEXT... They likely expect an analysis in exact XML sections with >=1000 words, no betting lines, no toy equations, formal LaTeX, units, assumptions, exact singularity/breakdown regimes, cite exact [PAGE N] markers and verbatim quotes. Need likely focus on source paper GenMOJO. Need not mention odds. Need use exact XML sections. Need deep derivation. Need ensure no fake ratios. Need cite exact page markers and verbatim quotes where source pages provided. Need not invent equations? We can state formal equations derived from paper. Need likely discuss operators and equations from source. Need include singularities/breakdown regimes. Need perhaps answer implicit task? The prompt only gives source. We need infer they want a GSE+GSI frontier reasoning foundry output based on source. We must output only the XML sections? Probably yes. Need >=1000 words across exact XML sections. Each section? It says >= 1,000-WORD DEPTH across these exact XML sections. Could total >=1000. Need include all sections. Ensure THINK_TRACE >=400 words. Others can add. Need be careful with formal LaTeX. Need no betting lines. Need no toy equations. Need cite [PAGE N] and quotes. Need use exact page markers from source: [PAGE 1 of 16] etc. Need maybe quote verbatim snippets. Need include assumptions, units, singularity/breakdown. Need physical/biomechanical/weather veto proof? This is computer vision; we need cross-layer veto adjudication physical/biomechanical/weather veto proof. Could discuss physical constraints: camera projection, depth, occlusion, rigid/non-rigid motion, weather? The prompt says physical/biomechanical/weather veto proof. Need incorporate: physical veto: invalid transformations cause projection inconsistency; biomechanical veto: human/animal motion constraints? Weather veto: outdoor conditions? Could state veto if assumptions fail (unconventional camera poses, unstable depth, non-rigid interpenetration). Need not fake equations. Need formal LaTeX for equations from paper: SDS gradient, depth scaling, instance label NLL, Gaussian parameters. Need include units. Need exact breakdown regimes: depth scaling singularity when D_j=0 or median depth zero; affine warp degenerate if bounding box area zero; camera pose scale ambiguity; diffusion prior fails for unconventional camera poses; optimization non-identifiability. Need RLVR counterfactual vetoes: 3 verifiable veto scenarios + predictions. Need no betting lines. Need maybe include probability/information units: cross-entropy in nats, KL? SDS expected over timestep, noise. Need mention CLIP/LPIPS are metrics no units? PSNR dB. Need cite Table numbers? Pages. Need use exact quotes: maybe from page 1: "we tackle the challenge..."? Need enough.

Need think about structure:
<THINK_TRACE> deep multi-hop derivation and gray-zone audit >=400 words. Need reason: source claims GenMOJO decomposes objects, joint splatting, object-centric SDS, transformations. Derive why joint splatting improves occlusion and tracking: gradient of rendering loss with alpha compositing; per-object independent gradients ignore occluder; joint splatting introduces occlusion visibility weights. SDS gives prior in unseen object views but coordinate transform needed. Depth scaling resolves translation ambiguity. Breakdown: D_j zero, bounding box collapse, camera pose noise, diffusion prior mode collapse, excessive deformation regularization, opacity reset absent etc. Audit gray zones: generative prior may hallucinate but point tracks? Metrics vs true geometry. Need >400 words.

<SOURCE_OPERATORS_AND_EQUATIONS> formal LaTeX. Include:
Gaussian primitive: g_i = (x_i ∈ R^3, s_i ∈ R^3, q_i ∈ R^4, α_i∈R, c_i∈SH). Units: x m, s m, α dimensionless [0,1], q unit quaternion.
Alpha blending: C(p)=Σ_i T_i α_i c_i, T_i=∏_{j<i}(1-α_j), T_1=1. Units color in RGB [0,1]. Need maybe no invented? Standard splatting. It's formal.
SDS gradient from page 3: ∇_ϕ L_SDS = E_{t,τ,ε,p}[ w(τ)(ε_θ(Î p_t; τ, I_1, p) - ε) ∂Î p_t/∂ϕ ]. Need cite [PAGE 3 of 16]. Units: gradient dimensionless? Loss maybe weighting. t frame index, τ diffusion timestep, ε noise tensor, p camera pose. Breakdown if Jacobian zero or diffusion epsilon wrong.
Depth scaling: k_i = D_i / D_j. p_t^i = C_r - (C_r - μ_t^i) × k_i, s_t^i = s_t^i × k_i. Need from [PAGE 4-5]. Units: D median depth m, C_r camera position m, μ m, s m. Singularity if D_j=0 or median depth negative? For physical depth positive; if near-zero denominator huge. Also if camera position equals object position (C_r=μ) then scaling no effect? Maybe.
Instance mask NLL: L_class = -∑_k y_k log ŷ_k. y one-hot? cross entropy nats. From page 5. Breakdown if predicted probability zero (requires epsilon clamp), labels drift, occluded masks missing.
Optimization total loss: L = L_rgb + λ_flow L_flow + λ_depth L_depth + λ_class L_class + λ_reg L_reg + λ_SDS L_SDS? But paper lists combination, not exact weights. Need state schematic with nonnegative weights, not invent values. Maybe formal operator. Need mention no exact weights provided in main text, supplementary says weights provided but not in provided text? Actually provided supplementary doesn't list loss weights. So avoid exact. Could say weights are positive hyperparameters; unspecified in provided excerpt.
Motion bases: displacement δg = Σ_m b_m a_m? From page 5 says linear combination shared motion basis. Could formalize: Δx_{i,t} = Σ_{r=1}^R β_{i,r,t} B_r, B_r ∈ R^3 m, β dimensionless. Assumption low-dimensional subspace. Breakdown if R insufficient or basis rank deficient.
K-plane: features F(x,y,z,t) with planes; color MLP. Could formalize but not necessary. Need exact from source: Hexplane resolution [64,64,64,0.8T] page 13. Units voxels? t dimension length 0.8T frames? Actually resolution [64,64,64,0.8T] for x,y,z,t, T frames. Could mention.
Running time: A6000, 5.63 min static, 74 min for 32 frames 3 objects, VRAM 15% more. Units. Not necessary but maybe in source operators? Could cite as computational budget.
Need no toy equations. This is formal.

<RETROCAUSAL_GENEALOGY> historical/scientific lineage and multi-week traps. Need trace from NeRF, 3DGS, DreamGaussian, DreamGaussian4D, DreamScene4D, Zero-1-to-3, SDS, Shape of Motion, MOSE, DAVIS, TAP-Vid, CoTracker. Multi-week traps: reimplementing with wrong coordinate frames; overfitting RGB without SDS; using depth anything unstable; forgetting instance label drift; independent optimization causing interpenetration. Need cite pages.

<RECURSIVE_THEORY_OF_MIND> crisis habit regression vs counter-trap vs clock. This seems unusual. Need discuss agent/strategy? Could frame as method under distribution shift: crisis habit regression: when occlusions increase, trackers drift to prior habit (object-centric prior), counter-trap: joint splatting and instance mask anchoring, clock: test-time optimization time scales with frames and objects. Need maybe about recursive reasoning of evaluator? We can produce a section: crisis (heavy occlusion/fast motion) induces regression to feedforward tracker habits; GenMOJO counter-traps with generative priors; but clock (optimization runtime) limits online. Need formal? Could include equations for drift probability? Need avoid toy. Could state probability bound? Need not invent? Could state measurable predictions. Need maybe discuss multi-week experimentation traps: belief that more SDS fixes occlusion; actual need joint rendering.

<CROSS_LAYER_VETO_ADJUDICATION> physical/biomechanical/weather veto proof. Need proof: physical layer veto if transformed Gaussians violate pinhole projection/depth consistency. Let pose P_t ∈ SE(3), object transform T^i_t. For observed pixel u, depth from splatting must align with estimated depth within tolerance. If error > threshold due to depth jump, veto. Biomechanical veto: articulated object motion has bounded joint velocities; if deformation network predicts implausible self-intersection or limb discontinuity, veto. Weather veto: outdoor lighting/weather changes violate assumption of time-varying SH but not geometry? If heavy rain/fog obscures masks, segmentation tracks fail, veto. Need formal inequalities maybe:
Physical: ||Π(P_t T^i_t x) - u_obs||_2 > ε_u or ||z_render - z_depth||_2 > ε_z.
Biomechanical: ||v_joint||_2 ≤ v_max (units m/s or rad/s) maybe not from source; can state assumption. But no fake? It's a veto proof framework, acceptable if assumptions explicit. Need avoid toy equations? Formal with units.
Weather: segmentation mask coverage m_t < τ_m, or contrast S_t < τ_s? Could define. Need cite source limitations: jittery depth can cause objects jump [PAGE 9]. Failure cases erroneous depth [PAGE 15], diffusion failures degenerate textures [PAGE 15]. Use these as empirical veto.

<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions. Need maybe RLVR = reinforcement learning verifiable rewards? Need produce counterfactual vetoes. Scenarios:
1. Remove joint splatting -> A-EPE worsens from 15.46 to 23.48, PSNR 25.56 to 22.88 [PAGE 9 Table 3]. Prediction: any reimplementation without joint splatting will fail interpenetration and tracking under heavy occlusion.
2. Replace object-centric SDS with scene-level SDS -> A-EPE 20.03, CLIP 83.05 vs full 85.41 [PAGE 9]. Prediction: scene-level priors insufficient for per-object unseen views; tracks drift.
3. Replace DepthCrafter with DepthAnything-V2 -> A-EPE 17.32 vs 15.46; PSNR 25.33 vs 25.56 [PAGE 9]. Prediction: unstable depth causes depth jumps, violates physical depth ordering. Or counterfactual: if D_j near zero, scaling explodes. Need verifiable. Need include predictions.

Need ensure total word count >1000. Could be around 2500. Need exact XML tags. No markdown? We can output plain with tags. Need avoid any non-XML? Fine.

Need check constraints: ZERO BETTING LINES: don't mention. ZERO TOY EQUATIONS: We use formal equations, not fake ratios. Need state assumptions and breakdown. Cite exact [PAGE N] markers and verbatim quotes. Need include quotes. Need maybe include verbatim quotes in each section? Could cite. Need not overdo.

Need think about possible issue: user supplied source text with page markers. Need cite exact [PAGE N] markers. We can quote like "GenMOJO decomposes the scene into individual objects" [PAGE 1 of 16]. Need ensure page marker exact format: [PAGE 1 of 16] etc. Use [PAGE 3 of 16].

Need include source operators: The source doesn't provide all equations. We can formalize standard operators but indicate derived from described components. Need not cite if not in source? But prompt says when source pages provided, cite exact markers and verbatim quotes. So when using source facts, cite. For standard 3DGS alpha blending, source says Gaussian defined by position, size, orientation, opacity, color [PAGE 3]. It doesn't show alpha blending equation but says efficient α-blending. We can state standard. Need not cite? Could cite [PAGE 3 of 16] for parameters. For SDS equation, quote. Need preserve LaTeX. Need be careful with escaping? Final can contain LaTeX.

Need include assumptions:
- Camera poses and depth estimated [PAGE 3]. Segmentation tracks [PAGE 3].
- Objects are foreground entities separable from static background [PAGE 1, 4].
- Object-centric diffusion prior can synthesize plausible unobserved views [PAGE 1, 3].
- Depth ordering can be resolved by relative median depths [PAGE 4].
- Motion lies in lower-dimensional subspace [PAGE 5].
Breakdown regimes:
- Monocular depth scale ambiguity; if D_j=0 or noisy median depth, k_i unstable.
- B_t zero area or mask lost, affine warp W_t undefined.
- Diffusion model out-of-distribution camera poses [PAGE 9].
- Occlusion with no visible support leads generative prior dominating; may hallucinate.
- Online use impossible due test-time optimization [PAGE 9].

Need maybe include probability/information units:
SDS expectation over t, τ, ε, p. Cross entropy in nats. Noise prediction MSE? SDS objective often weighted MSE in latent. Need state if loss in normalized image/latent units; weighting dimensionless. PSNR in dB. CLIP score dimensionless, LPIPS dimensionless.

Need maybe mention "force/fatigue" not use. Good.

Let's draft. Need ensure THINK_TRACE >=400 words. Count rough. Could write long. Need maybe 500 words. Let's draft in final.

Potential structure:

<THINK_TRACE>
Paragraph 1: problem: monocular multi-object video -> 4D; underconstrained; need infer unobserved. Multi-hop: (1) decompose into objects/background; (2) initialize canonical Gaussians per object with SDS; (3) transform to frame-centric; (4) deform over time; (5) joint splat for occlusion; (6) supervise with RGB, flow, depth, instance masks, tracks; (7) extract point tracks.
Paragraph 2: derivation of joint splatting: alpha compositing and visibility gradients; independent optimization misses occluders, causing interpenetration. Cite DreamScene4D struggle [PAGE 3]. Joint splatting models cross-object occlusions [PAGE 1]. Instance mask loss prevents drift [PAGE 5].
Paragraph 3: coordinate transforms: object-centric prior and frame-centric rendering; affine warp W_t from bounding box; depth scaling resolves translation ambiguity. If not, object position ambiguous. Equations.
Paragraph 4: SDS vs direct supervision: observed frames constrain front surface; SDS constrains unseen. Balance needed; if SDS too strong hallucinate; if absent underconstrained drift [PAGE 9].
Paragraph 5: gray-zone audit: metrics and ground truth; MOSE-PTS annotations; point tracks evaluate motion but do not guarantee physical material properties. Generative completion can create plausible but nonfactual unobserved geometry. Camera pose errors, depth jitter. Need more words.

Need ensure >=400. We'll make ~700.

SOURCE_OPERATORS: detailed.

Need maybe include "exact singularity/breakdown regimes" in source operators and veto.

Need ensure no hidden chain-of-thought? The final is an audit, not private chain. It's allowed. Need not mention internal. Good.

Let's craft with citations. Need verbatim quotes: Use exact snippets. For example:
- "GenMOJO decomposes the scene into individual objects" [PAGE 1 of 16]
- "Jointly splatting all Gaussians to compute rendering errors in the input video frames, accounting for occlusions" [PAGE 1 of 16]
- "individually rendering each object’s Gaussians from unobserved viewpoints to optimize a score distillation (SDS) objective" [PAGE 1]
- "To resolve 3D translation ambiguity in the depth direction" [PAGE 4]
- "This prevents Gaussians from drifting between objects during joint optimization" [PAGE 5]
- "our method is not suitable for online applications" [PAGE 9]
- "jittery depth estimations can still cause objects to “jump” along the depth axis" [PAGE 9]
- "struggles with videos featuring unconventional camera poses" [PAGE 9]
Need quote from Table? "Full Model" etc.

Need formal equations:
1 Gaussian: $g_i=(x_i,s_i,q_i,\alpha_i,c_i)$, $x_i\in\mathbb R^3$ m, etc.
2 rendering: $C(u)=\sum_i T_i \alpha_i c_i$, $T_i=\prod_{j<i}(1-\alpha_j)$.
Maybe instance label rendering: $\hat y_k(u)=\sum_i T_i \alpha_i \mathbf{1}[l_i=k]$? Source says extend renderer to render instance labels producing segmentation map. Could formalize as class probability. Need careful: one-hot label as fixed attribute; rendering yields map. Use softmax? Could state if differentiable, $\hat y_{k}(u)$ is differentiable mask score; cross entropy. Breakdown if no positive probability.
3 SDS: as source.
4 transform/depth scaling: $k_i=D_i/D_j$, $p_t^i=C_r-(C_r-\mu_t^i)\times k_i$, $s_t^i\leftarrow s_t^i k_i$. Units.
5 affine warp: $B_t \in \mathbb R^{h\times w}$ maybe, $W_t: B_t \to \bar B$. Breakdown if $\det(W_t)=0$ or area zero.
6 motion basis: $\Delta x_{i,t}=\sum_{r=1}^R \beta_{i,r,t}B_r$, $B_r\in\mathbb R^3$ m. Breakdown rank.
7 total loss: $\mathcal L = \mathcal L_{rgb}+\lambda_{flow}\mathcal L_{flow}+\lambda_{depth}\mathcal L_{depth}+\lambda_{class}\mathcal L_{class}+\lambda_{SDS}\mathcal L_{SDS}+\lambda_{reg}\mathcal L_{reg}$, $\lambda\ge0$; exact weights not given in provided text? The source says additional details including weighting in supplementary, but provided supplement doesn't show weights. We can say not specified in provided excerpt. This is not toy; it's a formal schematic. Need maybe not include if not exact? But okay.
8 PSNR: $\mathrm{PSNR}=10\log_{10}(M/\mathrm{MSE})$ dB, $M$ max intensity. For 8-bit $M=255$. LPIPS distance dimensionless. Cross-entropy nats.
9 information/probability: SDS expectation, cross-entropy. Need maybe mention $w(\tau)$ dimensionless.
10 singularities: $D_j=0$, $B_t$ area zero, $P_t$ rank deficient, $\hat y=0$ log, diffusion OOD.

Need no betting lines. Good.

RETROCAUSAL_GENEALOGY: Need historical lineage: dynamic NeRF, 3DGS, DreamGaussian, DreamGaussian4D, DreamScene4D, Shape of Motion, diffusion SDS, Zero-1-to-3, ZeroNVS, DepthCrafter, SAM2/Grounded SAM/HQ-SAM, MOSE/DAVIS/TAP-Vid/CoTracker. Multi-week traps: 1 coordinate frame mismatch, 2 independent object optimization, 3 depth noise, 4 mask drift, 5 overfitting SH. Need cite pages. Maybe mention DreamScene4D independent optimization causes clipping [PAGE 3]. Need multi-week traps as practical.

RECURSIVE_THEORY_OF_MIND: Need maybe write as adversarial evaluator simulation. Crisis: occlusion. Habit regression: feedforward trackers or independent object optimization regress to local appearance and drift. Counter-trap: joint splatting + instance mask + object prior. Clock: optimization time scales with frames/objects; 74 minutes for 32 frames 3 objects [PAGE 13]; not online [PAGE 9]. Recursive: if adversary increases occlusion, method's prior may still hallucinate; if adversary uses unconventional camera, diffusion fails. Need include probability? Maybe.

CROSS_LAYER_VETO: formal veto proof. Need define layers:
Physical geometry veto: $\exists u: \|\Pi(T_t^i g)-u\|_{2}>\epsilon_{u}$ or depth error. Use estimated pose/depth. If fails, reject hypothesis. Based on limitations jitter depth [PAGE 9].
Biomechanical veto: For articulated objects, joint velocity bound. Need maybe no source? But general. Could say assumption: human/animal motion has bounded velocities; if predicted displacement per frame exceeds $v_{max}\Delta t$, veto. Units m/s. Breakdown due fast motion? Paper says fast motion challenging [PAGE 1].
Weather veto: outdoor segmentation/contrast degrade; if mask IoU with tracker below threshold or visibility low, veto. MOSE has real-world occlusions [PAGE 6], weather? Not explicit. Could state weather acts through visibility and depth stability; if rain/fog invalidates depth/segmentation, veto. Need proof: if input observations $I_t$ corrupted, likelihood $p(I_t|scene)$ drops; optimization may fit noise. Use failure cases [PAGE 15].

RLVR_COUNTERFACTUAL_VETOES: Need 3 scenarios with verifiable predictions. Use table numbers. Need maybe include exact values from Table 3. Full model MOSE A-EPE 15.46, M-EPE 11.11, CLIP 85.41, PSNR 25.56 [PAGE 9]. w/o joint splatting 23.48, 16.97, 85.18, 22.88. w/o SDS 19.44,14.50,81.44,25.30. scene-level SDS 20.03,15.49,83.05,25.17. no instance mask 16.77,12.49,84.88,25.19. DepthAnything 17.32,12.84,85.29,25.33. Use these. Need predictions.

Need maybe mention Table 1 PSNR MOSE 25.56, DAVIS 23.51, CLIP etc [PAGE 8]. Could cite.

Need ensure all sections exact. Could include bullet lists. Need no extra text outside tags. Need maybe final with XML tags only. Good.

Let's produce final. Need ensure >=1000 words. I'll write detailed. Need watch word count. It will be >2000.

Potential issue: The source says 15 videos DAVIS and 20 MOSE-PTS in main, supplement says annotate 30 videos selected from MOSE? In main: 20 videos from MOSE-PTS. Supplement: annotate 30 videos selected from MOSE, but show 15 due limit. We can avoid contradiction. Use main: 20 videos [PAGE 5]. If mention, cite. Good.

Need exact verbatim quotes: Ensure quotes exact from provided. Some have line breaks; okay. Use short quotes.

Let's draft final. Ensure no markdown code fences. Use LaTeX. Need maybe escape &? Not needed. But XML tags not actual XML if content has &? Could use &amp;? Not necessary for answer? But if strict XML, ampersands need escaped. But likely just tags. Avoid raw & maybe. Use "and". In LaTeX use \lambda etc. Use no &? Tables? Use "and". Use alignment with & maybe avoid. Use equations separate. If use \begin{aligned} with &, raw & may be okay? To be safe, avoid alignment with & or use \begin{aligned} without &? Could use line breaks with \\. But raw & can be interpreted. Use no &.

Need include units: SI. For color RGB [0,1]. Opacity dimensionless.

Need mention "information units": cross-entropy nats, entropy? Could say $\mathcal L_{class}$ in nats if natural log. SDS expectation dimensionless weighting. PSNR dB.

Need include "probability units": $p_t$ maybe probability? But p used pose; avoid confusion. Use $P_t$ for pose, $p(u)$ for probability. Good.

Need be careful with variable p in source is camera pose; we can use $P$ for pose to avoid. But quote uses p. We can say $P$ denotes pose.

Let's formulate equations:
SDS source: 
\nabla_{\phi}\mathcal{L}_{t,\mathrm{SDS}} = \mathbb{E}_{t,\tau,\epsilon,P}\left[ w(\tau) \left( \epsilon_{\theta}(\hat I_t^P;\tau,I_1,P)-\epsilon \right) \frac{\partial \hat I_t^P}{\partial \phi} \right]
Maybe source uses $p$ and $\hat I^p_t$. We'll use P.

Rendering:
$C(u) = \sum_{i=1}^{N} T_i(u) \alpha_i c_i$, $T_i(u)=\prod_{j<i}(1-\alpha_j(u))$.

Instance:
$\hat y_k(u) = \sum_i T_i(u)\alpha_i \mathbf{1}[l_i=k]$ maybe then softmax? To be differentiable, use soft assignment. But source says one-hot fixed attribute and extended renderer. We can state if rendered scores are normalized: $\hat y_k(u)=\mathrm{softmax}_k(S_k(u))$. But source didn't specify softmax. Maybe avoid adding. Use cross entropy with rendered class scores. "assuming standard positive-part projection". Hmm. We can state $L_{class}=-\sum_k y_k \log \hat y_k$, $\hat y_k\in[0,1]$, $\sum_k \hat y_k=1$ if normalized; if not, log-barrier. Breakdown.

Depth scaling:
$k_i = D_i/D_j$, $D_i,D_j$ median depths [m]. If $D_j\to 0$ singularity. $p_t^i=C_r-(C_r-\mu_t^i)k_i$, $s_t^i=s_t^i k_i$. Need if $k_i<0$ invalid physical (behind camera). Use clamp $\epsilon_D$.

Motion basis:
$\Delta x_{i,t}=\sum_{r=1}^R \beta_{i,r,t} B_r$, $\beta$ dimensionless. Assumption rank. Breakdown if $R$ less than intrinsic motion dimension or basis collinear.

Affine warp:
$W_t: B_t \mapsto \bar B$, with $B_t$ axis-aligned? Source fit 2D bbox. $\det J(W_t) = 0$ breakdown.

Pose:
$X_{cam}=P_t^{-1} X_{world}$? $P_t\in SE(3)$, units meters and radians. If depth sign wrong, veto.

Total loss:
$\mathcal{L}=\mathcal{L}_{rgb}+\lambda_{flow}\mathcal{L}_{flow}+\lambda_{depth}\mathcal{L}_{depth}+\lambda_{class}\mathcal{L}_{class}+\lambda_{SDS}\mathcal{L}_{SDS}+\lambda_{reg}\mathcal{L}_{reg}$, $\lambda\ge 0$. Note exact weights not present in supplied pages? Actually page 5 says additional details including weighting in supplementary, but supplement doesn't list. We can say provided excerpt does not enumerate numerical weights, so this is structural not calibrated.

Computational scaling:
$T_{opt} \propto N_{frames}$? Source: deformation optimization run 40x number of frames [PAGE 5] and supplementary 35*T? Wait main says 40× number frames page 5. Supplement says 35·T steps. Slight mismatch. Need mention exact: main [PAGE 5] "run for 40× the number of frames" but supplement [PAGE 13] "optimize for a 35·T steps". Could flag inconsistency? Good gray-zone audit. Use both, note discrepancy. Need cite. Maybe in THINK_TRACE: discrepancy between 40× and 35·T is gray-zone; both linear in T. Good.

Need no betting. Good.

Let's write. Ensure final word count >1000. Use many words.

Double-check exact quotes:
Page 1: "GenMOJO decomposes the scene into individual objects" yes.
"Jointly splatting all Gaussians to compute rendering errors in the input video frames, accounting for occlusions" yes.
"individually rendering each object’s Gaussians from unobserved viewpoints to optimize a score distillation (SDS) objective" yes.
Page 3: "they struggle to generalize to complex, cluttered scenes" maybe.
Page 4: "To resolve 3D translation ambiguity in the depth direction" yes.
Page 5: "This prevents Gaussians from drifting between objects during joint optimization." exact? Source: "This prevents Gaussians from drifting between objects during joint optimization." yes.
Page 9: "jittery depth estimations can still cause objects to “jump” along the depth axis." yes.
"our method is not suitable for online applications" yes.
"struggles with videos featuring unconventional camera poses" yes.
Page 13: "a video with 32 frames with 3 objects takes around 74 minutes" yes.
Page 14: failure cases? "Erroneous depth predictions can cause entities to jitter along the depth dimension." [PAGE 15]. "View synthesis diffusion model failures result in degenerate textures in unseen viewpoints." [PAGE 15].

Need maybe cite Table 3 values: [PAGE 9]. Use "Table 3".

Need include "MOSE-PTS" stats maybe not necessary.

Let's ensure no raw ampersands. Use "and" instead of & in text. In LaTeX, use \&? Avoid. For equations, use \lambda, no &. For cases maybe use \begin{cases} with &? Avoid. Use separate equations.

Need final only. Let's compose. Ensure THINK_TRACE word count maybe 650. Let's write lengthy.

</NATIVE_REASONING>

<THINK_TRACE>
The reasoning chain starts from the paper’s central claim: GenMOJO treats video-to-4D generation as a compositional inverse-rendering problem rather than a single monolithic scene-fitting problem. The source states that “GenMOJO decomposes the scene into individual objects” and optimizes “a differentiable set of deformable Gaussians per object” [PAGE 1 of 16]. This decomposition is not cosmetic; it changes the gradient flow. If each object were optimized only against pixels where it is visible, the optimizer would receive no direct evidence for regions hidden by other objects. The paper explicitly identifies this failure mode in prior work: DreamScene4D “struggles with cross-object occlusions, as rendering objects separately fails to account for occluders” [PAGE 3 of 16]. Therefore, the first multi-hop inference is that joint splatting is required because alpha-compositing gradients depend on all objects’ opacities and depths. When an object is partially occluded, its per-pixel contribution is multiplied by transmittance terms from preceding Gaussians. If occluders are omitted, the reconstruction can place Gaussians in physically implausible positions, producing interpenetration or floating artifacts.

The second hop concerns coordinate frames. The paper needs object-centric generative priors because diffusion models are better at completing an isolated object from unobserved viewpoints, while the video itself is frame-centric and scene-centric. The source says GenMOJO uses “differentiable transformations that align generative and rendering constraints within a unified framework” [PAGE 1 of 16]. The key operational bridge is the per-object, per-frame affine warp from the observed 2D bounding box to a canonical object-centric view [PAGE 4 of 16]. However, a 2D affine warp cannot fully resolve 3D translation along the camera ray. This creates a depth-scale ambiguity. The paper’s remedy is relative depth scaling: “To resolve 3D translation ambiguity in the depth direction” it computes a depth ratio between objects and rescales object position and Gaussian scale [PAGE 4 of 16]. This is a crucial singularity audit point: the depth ratio becomes unstable if the reference object’s median depth approaches zero, if depth estimates are negative, or if depth maps are temporally inconsistent.

The third hop is the optimization objective. GenMOJO combines frame-centric rendering losses with object-centric score distillation sampling. The source lists two complementary operations: “Jointly splatting all Gaussians to compute rendering errors in the input video frames, accounting for occlusions” and “individually rendering each object’s Gaussians from unobserved viewpoints to optimize a score distillation (SDS) objective” [PAGE 1 of 16]. The SDS term supplies supervision where no pixels exist, while joint splatting supplies physically grounded occlusion and interaction constraints where pixels do exist. If SDS is removed, the paper reports that “Gaussians in unobserved views become under-constrained and tend to drift” [PAGE 9 of 16]. If joint splatting is removed, both tracking and reference-view fidelity degrade because cross-object occlusion is no longer modeled. The ablation table confirms this: removing joint splatting increases A-EPE from 15.46 to 23.48 and decreases PSNR from 25.56 to 22.88 on MOSE [PAGE 9 of 16].

The fourth hop is the motion model. The method uses K-plane or Hexplane deformation networks and motion bases. The source says the displacement of each Gaussian is expressed as “a linear combination of a shared set of motion basis vectors” to capture correlated motion in a lower-dimensional subspace [PAGE 5 of 16]. This is an inductive bias: local motion is compressible. The breakdown regime is when motion is not low-rank, for example fast non-rigid deformation, sudden reappearance after prolonged occlusion, or camera-induced apparent motion that is misattributed to object motion. The paper also adds regularization on relative distance and orientation between neighboring Gaussians to preserve local rigidity [PAGE 5 of 16]. This can fail if object articulation is strong, because excessive rigidity regularization can suppress legitimate joint motion.

The fifth hop is evaluation and gray-zone audit. MOSE-PTS is introduced because existing point-tracking benchmarks are often too easy or insufficiently occluded. The source states that MOSE-PTS has higher occlusion rates and larger motion range than TAP-Vid-DAVIS [PAGE 6 of 16]. The quantitative results show GenMOJO achieves the lowest error among non-supervised or optimization-based methods on MOSE: A-EPE 15.46 and M-EPE 11.11 [PAGE 8 of 16]. However, there is a gray zone: generative completion can produce plausible unobserved geometry that is not verifiable from the input video. The method may therefore improve novel-view plausibility while still hallucinating physically incorrect details. The paper acknowledges this limitation: the approach “relies on the generalization capabilities of the view-conditioned generative model” and struggles with unconventional camera poses [PAGE 9 of 16]. The final audit conclusion is that GenMOJO is strong under heavy occlusion when depth, segmentation, camera pose, and object-centric priors are reliable, but it is vulnerable when any of those layers fails.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let a Gaussian primitive be

\[
g_i = (x_i, s_i, q_i, \alpha_i, c_i),
\]

where \(x_i \in \mathbb{R}^3\) is position in meters, \(s_i \in \mathbb{R}^3_{>0}\) is standard-deviation scale in meters, \(q_i \in \mathbb{R}^4\) is a unit quaternion, \(\alpha_i \in [0,1]\) is dimensionless opacity, and \(c_i\) is color in spherical-harmonic coefficients. This parameterization matches the source description of 3D Gaussian Splatting [PAGE 3 of 16].

For a camera pixel \(u\), differentiable alpha compositing can be written formally as

\[
C(u) = \sum_{i=1}^{N} T_i(u)\,\alpha_i(u)\,c_i,
\]

with transmittance

\[
T_i(u) = \prod_{j<i} \left(1-\alpha_j(u)\right),
\]

and \(T_1(u)=1\). The output color has RGB units normalized to \([0,1]\). The occlusion-aware gradient depends on \(\partial T_i/\partial \alpha_j\) for all objects \(j\) that precede object \(i\) in depth order. This is why joint splatting is necessary: independent object rendering removes the dependence on other objects’ opacity and depth.

The SDS operator from the source is

\[
\nabla_{\phi}\mathcal{L}_{t,\mathrm{SDS}}
=
\mathbb{E}_{t,\tau,\epsilon,P}
\left[
w(\tau)
\left(
\epsilon_{\theta}\left(\hat I_t^{P};\tau,I_1,P\right)
-
\epsilon
\right)
\frac{\partial \hat I_t^{P}}{\partial \phi}
\right],
\]

where \(t\) is video frame index, \(\tau\) is diffusion denoising timestep, \(\epsilon\) is target noise, \(\epsilon_{\theta}\) is predicted noise, \(P\) is camera pose, \(I_1\) is the reference image, \(\phi\) are Gaussian or deformation parameters, and \(w(\tau)\) is a dimensionless weighting function [PAGE 3 of 16]. The expectation is over sampled frames, diffusion timesteps, noise draws, and novel views. The gradient has units determined by the image or latent representation; if rendered images are normalized to \([0,1]\), the gradient is dimensionless per pixel. Breakdown occurs if the diffusion model is out-of-distribution, if the Jacobian \(\partial \hat I_t^{P}/\partial \phi\) vanishes, or if the weighting function overemphasizes noisy timesteps.

The depth-scale correction is

\[
k_i = \frac{D_i}{D_j},
\]

where \(D_i\) and \(D_j\) are median depth values in meters for objects \(i\) and \(j\) [PAGE 4 of 16]. The transformed position and scale are

\[
p_t^{i}
=
C_r
-
\left(C_r-\mu_t^{i}\right)\times k_i,
\]

\[
s_t^{i}
\leftarrow
s_t^{i}\times k_i,
\]

where \(C_r\in\mathbb{R}^3\) is the camera position in meters, \(\mu_t^{i}\in\mathbb{R}^3\) is the original 3D position in meters, and \(s_t^{i}\in\mathbb{R}^3\) is scale in meters [PAGE 5 of 16]. Exact singularity regime: if \(D_j=0\), \(k_i\) is undefined. If \(D_j\) is estimated as negative or near-zero due to depth noise, \(k_i\) can explode or flip sign, producing objects behind the camera or with negative scale. A robust implementation must clamp depth to a positive lower bound \(D_{\min}>0\) and reject frames where depth ordering is nonphysical.

The object-to-frame affine warp can be written as

\[
W_t : B_t \mapsto \bar B,
\]

where \(B_t\) is the observed 2D bounding box in frame \(t\) and \(\bar B\) is the canonical object-centric bounding box [PAGE 4 of 16]. If \(B_t\) has zero width or zero height, or if the segmentation mask collapses, \(W_t\) is singular. Formally, if the Jacobian \(J(W_t)\) has \(\det J(W_t)=0\), the warp cannot normalize object scale and the object-centric prior becomes ill-defined.

The instance segmentation loss is

\[
\mathcal{L}_{\mathrm{class}}
=
-\sum_k y_k \log \hat y_k,
\]

where \(y_k\) is the target instance mask or one-hot instance label and \(\hat y_k\) is the rendered instance probability map [PAGE 5 of 16]. If natural logarithm is used, the unit is nats per pixel. The source says this loss “prevents Gaussians from drifting between objects during joint optimization” [PAGE 5 of 16]. Breakdown occurs when \(\hat y_k=0\) while \(y_k=1\), causing an infinite loss unless numerical clipping is used. It also fails if the input masks themselves are temporally inconsistent.

A schematic total objective is

\[
\mathcal{L}
=
\mathcal{L}_{\mathrm{rgb}}
+
\lambda_{\mathrm{flow}}\mathcal{L}_{\mathrm{flow}}
+
\lambda_{\mathrm{depth}}\mathcal{L}_{\mathrm{depth}}
+
\lambda_{\mathrm{class}}\mathcal{L}_{\mathrm{class}}
+
\lambda_{\mathrm{SDS}}\mathcal{L}_{\mathrm{SDS}}
+
\lambda_{\mathrm{reg}}\mathcal{L}_{\mathrm{reg}},
\]

with \(\lambda_{\cdot}\geq 0\). The supplied pages do not enumerate the numerical loss weights, so this equation is structural rather than calibrated. The source lists RGB rendering loss, optical flow rendering loss, depth consistency loss, instance segmentation alignment loss, and regularization terms [PAGE 5 of 16].

Motion-basis displacement can be expressed as

\[
\Delta x_{i,t}
=
\sum_{r=1}^{R} \beta_{i,r,t} B_r,
\]

where \(B_r \in \mathbb{R}^3\) are shared basis vectors in meters, \(\beta_{i,r,t}\) are dimensionless coefficients, and \(R\) is the number of motion bases [PAGE 5 of 16]. The assumption is that object-part motion lies near a low-rank subspace. Breakdown occurs if \(R\) is smaller than the intrinsic motion dimension, if bases become collinear, or if sudden non-rigid motion violates the subspace assumption.

For evaluation, PSNR is

\[
\mathrm{PSNR}
=
10\log_{10}\left(\frac{M}{\mathrm{MSE}}\right),
\]

in decibels, where \(M\) is maximum pixel intensity and MSE is mean squared error. CLIP and LPIPS scores are dimensionless similarity metrics. The paper reports PSNR, CLIP, and LPIPS for MOSE and DAVIS [PAGE 8 of 16]. The user study preference is a percentage, not a probability model of correctness.

Computational cost is also an operator. The source states that static optimization takes about 5.63 minutes on an A6000 for 1000 steps [PAGE 13 of 16], and a 32-frame, 3-object video takes around 74 minutes for deformation optimization [PAGE 13 of 16]. Main text says deformation optimization runs for “40× the number of frames” [PAGE 5 of 16], while supplementary says “35·T steps” [PAGE 13 of 16]. This discrepancy is a reproducibility gray zone; both imply linear scaling with frame count \(T\).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage of GenMOJO is a convergence of four historical lines: neural radiance fields, explicit Gaussian splatting, diffusion-based score distillation, and multi-object video segmentation/tracking.

The first line begins with NeRF-style dynamic scene reconstruction. The source notes that dynamic NeRF methods extend NeRFs to dynamic scenes using deformation networks or voxel/grid representations [PAGE 2 of 16]. These methods established the idea that a static coordinate field can be warped over time. Their weakness in monocular multi-object settings is partial observability: without multiple camera views, unobserved regions lack constraints.

The second line is Gaussian Splatting. The source states that Gaussian Splatting represents the scene as explicit Gaussians and uses efficient rasterization [PAGE 2 of 16]. This lineage makes rendering gradients computationally tractable. The paper uses 3D Gaussians with position, scale, orientation, opacity, and spherical-harmonic color [PAGE 3 of 16]. The historical trap is that explicit Gaussians are prone to drifting or clipping when occlusion ordering is not globally optimized.

The third line is generative object-centric view synthesis. DreamGaussian uses Zero-1-to-3 to lift single images into 3D Gaussians using SDS [PAGE 3 of 16]. DreamGaussian4D extends this to dynamic Gaussians with per-frame displacement, rotation, and scale [PAGE 3 of 16]. GenMOJO inherits SDS but changes the scene assumption: it applies SDS per object, not to the whole scene. This is important because scene-level diffusion priors may fail to maintain object identity in cluttered multi-object videos. The ablation comparing object-centric SDS with scene-level SDS shows degraded A-EPE, M-EPE, and CLIP when scene-level SDS is used [PAGE 9 of 16].

The fourth line is DreamScene4D, the most direct predecessor. DreamScene4D also decomposes video into objects and optimizes object-centric deformable Gaussians, but it renders objects independently and only later combines them [PAGE 3 of 16]. GenMOJO’s retro-causal correction is to keep the object decomposition while replacing independent rendering with joint splatting. The source says previous independent optimization “struggles with cross-object occlusions” and can produce “unnatural, inter-penetrating artifacts” [PAGE 3 of 16]. This is a multi-week engineering trap: if one implements DreamScene4D-style independent optimization, local object quality may look good while global scene geometry fails.

Another lineage is point tracking by reconstruction. The paper compares against Shape of Motion and notes that feedforward trackers can be strong but struggle under severe occlusion, whereas reconstruction-based tracking can leverage generative priors [PAGE 3 of 16]. The multi-week trap here is to treat tracking as purely a 2D matching problem. In heavy occlusion, 2D appearance evidence disappears, so a 4D reconstruction with inferred unobserved geometry becomes advantageous.

A fifth lineage is video geometry estimation: camera pose, depth, segmentation, and tracking. GenMOJO uses video geometry methods for camera pose and depth, and segmentation/tracking tools for object masks [PAGE 3 of 16]. It also uses DepthCrafter by default and tests DepthAnything-V2 as a robustness ablation [PAGE 9 of 16]. The historical trap is to assume depth is calibrated. Monocular video depth is relative and unstable; the paper’s depth scaling is an attempt to repair scale ambiguity, but it remains vulnerable to jittery depth [PAGE 9 of 16].

The final genealogical lesson is that GenMOJO is not merely a new renderer. It is a correction to the causal structure of prior methods: object identity, cross-object occlusion, and generative completion must be optimized in one differentiable graph. If they are separated, the system regresses to local appearance fitting and fails under heavy occlusion.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory-of-mind analysis treats GenMOJO as an agent operating under adversarial visual conditions: heavy occlusion, fast motion, clutter, and limited observability. The crisis condition is partial observability. In such a crisis, naive optimization habits regress toward whatever evidence is most immediate: visible pixels, local color, or independent object appearance. This is the habit-regression failure mode. If the model only sees the front surface, it tends to overfit visible regions and hallucinate unobserved regions without global consistency.

GenMOJO’s counter-trap is threefold. First, it introduces object-centric generative priors, which supply a learned expectation for unobserved views. Second, it introduces joint splatting, which forces objects to compete and occlude one another in the same rendered image. Third, it introduces instance-mask supervision, which anchors Gaussians to object identity. The source says this prevents Gaussians from drifting between objects during joint optimization [PAGE 5 of 16]. In recursive terms, the system is not merely asking “what pixels are visible?” but also “what object owns this pixel, what occludes it, and what unobserved object surface is plausible?”

A second recursive failure mode is tracker drift. Feedforward point trackers often rely on local appearance and short-term motion cues. Under prolonged occlusion, those cues vanish. The paper notes that supervised trackers show much lower accuracy on MOSE than DAVIS because of frequent, prolonged occlusions and larger displacements [PAGE 8 of 16]. GenMOJO’s counter-strategy is to infer complete 4D object geometry so that a point remains attached to an object even when temporarily invisible. The empirical result is that GenMOJO achieves lower A-EPE and M-EPE than optimization-based baselines on MOSE [PAGE 8 of 16].

The third recursive layer is the clock. Test-time optimization is slow. The source states that the method is “not suitable for online applications” [PAGE 9 of 16]. The supplementary reports that a 32-frame, 3-object video takes around 74 minutes on an A6000 [PAGE 13 of 16]. Therefore, the method’s advantage exists in offline, high-quality reconstruction regimes, not real-time tracking. If the application clock demands low latency, the method’s counter-trap becomes invalid. The correct policy is to use GenMOJO when accuracy under occlusion matters more than speed.

A fourth recursive trap is prior overconfidence. Object-centric SDS can complete objects, but the completion is learned from diffusion priors. If the camera trajectory or object pose is unconventional, the prior can fail. The paper explicitly lists this limitation [PAGE 9 of 16]. Thus, the system must estimate when its generative prior is outside the training distribution. A robust agent would monitor disagreement between joint rendering loss and object-centric SDS. High rendering error plus high SDS confidence indicates possible hallucination.

The final recursive conclusion is that GenMOJO succeeds by converting a crisis habit—local pixel fitting—into a structured inference problem with object identity, occlusion, depth, and generative priors. But it remains brittle when the clock is strict, when depth is unstable, or when the generative prior is outside its domain.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A cross-layer veto is a falsification test that rejects a reconstruction hypothesis when it violates physical, biomechanical, or environmental observation constraints. GenMOJO must pass these vetoes to be credible beyond photometric plausibility.

Physical veto. Let \(P_t \in SE(3)\) be the camera pose at frame \(t\), with translation in meters and rotation in radians. Let \(T_t^i\) be the object-to-camera transform for object \(i\). For an observed pixel \(u_t\), the projected position of a Gaussian or surface point must satisfy

\[
\left\|
\Pi\left(P_t^{-1}T_t^i x\right)
-
u_t
\right\|_2
\leq \epsilon_u,
\]

where \(\Pi\) is the camera projection operator and \(\epsilon_u\) is pixel tolerance. A physical veto is triggered if the inequality fails systematically. A depth-based version is

\[
\left\|
z_{\mathrm{render}}(u_t)
-
z_{\mathrm{depth}}(u_t)
\right\|_2
\leq \epsilon_z,
\]

with both depths in meters. The paper acknowledges that “jittery depth estimations can still cause objects to ‘jump’ along the depth axis” [PAGE 9 of 16]. Failure-case visualizations likewise state that erroneous depth predictions can cause entities to jitter along the depth dimension [PAGE 15 of 16]. Therefore, if depth jumps exceed \(\epsilon_z\) across consecutive frames without corresponding camera motion, the reconstruction should be vetoed or temporally smoothed.

The depth-scale operator introduces a second physical veto. If

\[
k_i = \frac{D_i}{D_j}
\]

becomes nonpositive or unbounded because \(D_j\) is near zero, the transformed scale \(s_t^i k_i\) may become nonphysical. A valid reconstruction must reject or clamp such frames. The source’s relative-depth method assumes median depth is a stable proxy for object depth ordering [PAGE 4 of 16]; when that assumption fails, the physical layer vetoes the output.

Biomechanical veto. For articulated objects such as humans or animals, motion is not arbitrary. Let \(v_{\mathrm{joint}}\) be joint linear velocity in meters per second and \(\omega_{\mathrm{joint}}\) be angular velocity in radians per second. A biomechanical veto assumes approximate bounds

\[
\|v_{\mathrm{joint}}\|_2 \leq v_{\max},
\]

\[
\|\omega_{\mathrm{joint}}\|_2 \leq \omega_{\max}.
\]

If the deformation network predicts a limb displacement that exceeds these bounds for the observed frame interval \(\Delta t\), the hypothesis is implausible. The paper’s motion-basis and local-rigidity regularization are designed to avoid some of these failures, but they are not explicit biomechanical constraints [PAGE 5 of 16]. Therefore, if a reconstructed human arm teleports across the torso between adjacent frames, the biomechanical veto should reject the track even if RGB rendering is locally plausible.

Weather and environmental veto. Weather affects observation through reduced contrast, occluding particles, wet-surface specularities, and unstable depth. Let \(M_t\) be the segmentation mask coverage for an object, measured in pixels, and let \(S_t\) be a local contrast or visibility score. A weather veto can be stated as

\[
M_t < \tau_M
\]

or

\[
S_t < \tau_S,
\]

where \(\tau_M\) and \(\tau_S\) are application-defined thresholds. If rain, fog, smoke, or night-time illumination makes masks unstable, the segmentation-based instance loss becomes unreliable. The paper relies on segmentation and tracking tools for object masks [PAGE 3 of 16], and MOSE-PTS is selected for complex real-world occlusions [PAGE 6 of 16]. If environmental conditions degrade masks below the threshold, the cross-layer adjudicator should lower confidence in object tracks and instance-mask supervision.

Generative veto. The final veto is generative: if object-centric diffusion produces textures or geometry inconsistent with all observed frames, the hypothesis is rejected. The source notes that view synthesis diffusion model failures can result in degenerate textures in unseen viewpoints [PAGE 15 of 16]. A practical veto is to compare rendered object-centric views against reference-view constraints. If SDS encourages a texture that causes the joint reference-view rendering loss to increase sharply, the SDS prior should be downweighted.

Adjudication rule. Accept the reconstruction only if the physical reprojection/depth residual, biomechanical velocity bounds, and environmental observation quality all pass. If any layer fails, the output is either rejected, temporally regularized, or flagged as low-confidence. This prevents visually appealing but physically invalid 4D hallucinations.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios follow directly from the paper’s ablations and stated limitations.

Scenario 1: Remove joint splatting. Counterfactual: optimize each object independently, then composite only at render time. The paper’s ablation reports this as “w/o Joint Splatting” and shows A-EPE worsening from 15.46 to 23.48, M-EPE worsening from 11.11 to 16.97, and PSNR decreasing from 25.56 to 22.88 on MOSE [PAGE 9 of 16]. Prediction: any reimplementation that removes joint splatting will fail in scenes with heavy cross-object occlusion, producing interpenetration, depth-order errors, and worse point tracking. This veto is verifiable by rerunning the MOSE-PTS subset and comparing A-EPE, M-EPE, and reference-view PSNR.

Scenario 2: Remove SDS during motion optimization. Counterfactual: rely only on observed-frame rendering losses. The ablation reports A-EPE 19.44, M-EPE 14.50, CLIP 81.44, and PSNR 25.30, versus full-model A-EPE 15.46, M-EPE 11.11, CLIP 85.41, and PSNR 25.56 [PAGE 9 of 16]. Prediction: without SDS, unobserved object regions become under-constrained and drift, especially during prolonged occlusion. The source explicitly says that without SDS, “Gaussians in unobserved views become under-constrained and tend to drift” [PAGE 9 of 16]. This veto is verifiable by measuring novel-view CLIP and tracking error on occluded trajectories.

Scenario 3: Replace object-centric SDS with scene-level SDS. Counterfactual: use a scene-level novel-view synthesis prior such as ZeroNVS instead of per-object SDS. The ablation reports A-EPE 20.03, M-EPE 15.49, CLIP 83.05, and PSNR 25.17 [PAGE 9 of 16]. Prediction: scene-level SDS provides weaker object-specific guidance in multi-object scenes, causing identity ambiguity and worse tracking. This veto is verifiable by comparing per-object versus scene-level SDS under identical joint splatting and depth initialization.

A fourth implicit veto is depth instability. Replacing DepthCrafter with DepthAnything-V2 changes A-EPE from 15.46 to 17.32, M-EPE from 11.11 to 12.84, CLIP from 85.41 to 85.29, and PSNR from 25.56 to 25.33 [PAGE 9 of 16]. Prediction: unstable depth causes objects to jump along the depth axis, matching the paper’s limitation statement [PAGE 9 of 16]. This veto is verifiable by measuring temporal depth smoothness and object depth-order consistency.

Final counterfactual conclusion: GenMOJO’s reported performance is not attributable to a single component. The verifiable causal structure is joint splatting for occlusion, SDS for unobserved completion, object-centric SDS for identity-specific priors, instance masks for drift prevention, and stable depth for 3D placement. Removing any of these produces measurable degradation.
</RLVR_COUNTERFACTUAL_VETOES>