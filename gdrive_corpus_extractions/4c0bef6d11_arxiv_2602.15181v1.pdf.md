---
source: "arxiv_2602.15181v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 63
model: baidu/ernie-5.5-flash-preview:free
words: 8410
---

<NATIVE_REASONING>
We need answer user's request. They provided source PDF pages and require a response in exact XML sections, >=1000 words. Need obey strict invariants: zero betting lines, zero toy equations, formal LaTeX, units, page citations and verbatim quotes when source pages provided. Need >=1000 words across exact sections: <THINK_TRACE>, <SOURCE_OPERATORS_AND_EQUATIONS>, <RETROCAUSAL_GENEALOGY>, <RECURSIVE_THEORY_OF_MIND>, <CROSS_LAYER_VETO_ADJUDICATION>, <RLVR_COUNTERFACTUAL_VETOES>. They likely expect analysis of source, maybe a sports prediction? But no explicit question except drive source. Need produce a rigorous analysis of paper's method? GSE+GSI Frontier Reasoning Foundry. Need no betting lines. No fake ratios. Need formal equations, SI/information/probability units, assumptions, singularities/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes. Need likely use page citations heavily. We need ensure >=1,000 words. Let's plan sections.

Need not mention odds/spreads/totals/moneylines. Need no toy equations like Force/Fatigue. We can state formal equations from source and maybe derived information-theoretic bounds? Need be careful not to invent unsupported ratios. Can formalize rendering equation, plenoptic function, photometric loss, camera geometry, memory scaling, Nyquist/angular sampling, information bounds maybe. Need include assumptions and breakdown regimes. Could discuss paper's method: per-timestep neural radiance fields, hash grid + MLP, time archival. Need maybe evaluate as if for sports/visual performance. We need probably produce a report on feasibility and limitations. Need exact quotes from pages.

Sections:
1 <THINK_TRACE> >=400 words. Deep multi-hop derivation & gray-zone audit. We'll discuss source claims: geometry-constrained synchronized multiview makes dynamic scene per-time 3D reconstruction possible without temporal coupling/point cloud. Derive: At fixed t, cameras N with known intrinsics/extrinsics, images I_t. Radiance field F_t: (x,d)->(c,sigma). Volume rendering integral. Loss photometric. Need gray zones: independence per time avoids drift but loses motion continuity, storage linear in T, training parallel but expensive. Evaluate memory: 12.7M parameters approx 25-50 MB [PAGE 8]; 3DGS 200-300MB/time [PAGE 8]; table 4 48.8MB vs 77-91MB and point cloud 6.2GB [PAGE 29-30]. Need discuss assumptions: static cameras, synchronized, calibrated, known poses, bounded scene, constant wavelength, no need point clouds, subjects rigid across views at same instant. Breakdown: calibration errors, pose noise, occlusion, specular, thin structures, lighting, non-Lambertian, dynamic blur, motion between frames, sparse views, large scene beyond bbox, under-sampling angular/time. Need cite pages: [PAGE 16] It =..., [PAGE 17] Ft equation, [PAGE 18] MLP, [PAGE 18-19] volume rendering, [PAGE 19] loss, [PAGE 9] independent per-frame, [PAGE 16] synchronized cameras, [PAGE 10] plenoptic function, [PAGE 20] implementations, [PAGE 21] Fibonacci sampling, [PAGE 61] coordinate alignment, [PAGE 62] bbox, hash grid, parameter count. Need exact quotes maybe short verbatim. Ensure quotes accurate.

2 <SOURCE_OPERATORS_AND_EQUATIONS> Formal LaTeX, units, page citations, breakdown. Could list operators: plenoptic Φ, camera image set, radiance field, positional encoding, hash grid, volume rendering, discrete sum, loss, camera pose, coordinate transform, FOV, parameter count. Need include units: x [m], d dimensionless direction on S^2, sigma maybe [m^-1] if density, c RGB [0,1] or normalized, t [s], K dimensionless pixels? intrinsics fx [pixel], cx [pixel]. Loss units MSE normalized radiance. Information units bits: hash table entries log2(2^22)=22 bits per entry? But parameter count 12.7M parameters, not bits. Could state storage in bytes; information capacity of hash indices: 22-bit indices per entry, 4,194,304 entries [PAGE 63], but not bit-rate of image. Need not invent fake ratios. Could derive samples needed by Nyquist? Assumption angular sampling. But must not create toy ratio? It's formal. Could say information lower bound for independent frames: H({I_t}) ≤ sum_t H(I_t) if independent; but if correlated, temporal coupling can reduce. Need probability units bits. But source doesn't provide entropy. We can state formal condition: If T independent fields, storage S = T s_F + overhead; if temporal coupling with shared code, S = s_shared + T s_delta under assumptions. Units bytes. Not a toy ratio. Could include breakdown: aliasing when angular sampling below Nyquist; equation from light field sampling? Maybe formal: angular sampling interval Δθ must satisfy Δθ ≤ λ/(2D) maybe? Need source not mention. But allowed formal equations and assumptions. But need not overdo.

3 <RETROCAUSAL_GENEALOGY> Historical/scientific lineage & multi-week traps. Discuss line from plenoptic function (Adelson/Bergen, Lippman movie-maps) [PAGE 10, refs], NeRF [PAGE 11-12], Instant-NGP hash encoding [PAGE 12-13, 17], TensoRF, dynamic NeRF, 3DGS, 4DGS, ST-GS, QUEEN [PAGE 13-15]. Multi-week traps: chasing FPS with GS, relying on SfM points, temporal coupling causing drift, assuming static scene, ignoring calibration, overfitting per frame, neglecting storage, using sequential baselines. Cite pages. Need maybe discuss paper's counter-trap: per-time independent fields. Need mention exact quotes: "we may not need a temporally coupled constraint or 3d point cloud initialization" [PAGE 2], "stores a complete radiance function Ft independently for each time step" [PAGE 9]. Need discuss.

4 <RECURSIVE_THEORY_OF_MIND> Crisis habit regression vs counter-trap vs clock. This weird. Need interpret as adversarial mental models: when crisis (sports rapid motion) habits regress to temporal smoothing or GS tracking, causing failures. Counter-trap: per-frame independent reconstruction and exact archival. Clock: time index T, training/inference, latency. Need maybe discuss user needs: broadcaster wants replay, analyst wants exact past frame, editor wants arbitrary view. Model opponents: methods with temporal priors assume smooth motion; in abrupt motion they fail. Need include formal behavior: If motion discontinuous at t_k, temporal regularization term κ||Θ_{t+1}-Θ_t||² [PAGE 19] penalizes necessary change; setting κ=0 avoids bias but requires enough views. Multi-week trap: iterative fixes (densification, warm-start) don't fix init bias; [PAGE 33-37] warm-start gap persists. Clock: archival requires query arbitrary t; independent fields O(1) access per frame vs sequential dependency. Need maybe no betting.

5 <CROSS_LAYER_VETO_ADJUDICATION> Physical/biomechanical/weather veto proof. Need verify physical constraints: camera rig static, synchronization, bounded scene, line-of-sight, occlusion, motion blur, illumination. Need maybe prove veto conditions: If calibration error exceeds tolerance, geometry constraint fails. Formal proof sketch: rendering loss L depends on C(r) and observed C(r). If extrinsics error δR, δt, ray origin/direction error leads reprojection error; if beyond pixel scale, optimization fits wrong radiance. Need use equations. Weather: rain, fog, snow violates airlight/transmittance assumptions? Source doesn't discuss weather but applications sports. Could state if atmospheric scattering not modeled, transmittance T_t includes only scene sigma; weather adds path radiance L_a(s), violating Eq 6. Need cite? Source only says challenging illumination [PAGE 39]. We can extend formal. Biomechanical: high acceleration, articulation, occlusion [PAGE 14]. If inter-frame motion exceeds sampling/time, per-frame reconstruction still possible if views capture instant, but motion blur integrates over exposure; if blur spans multiple positions, static radiance field at t cannot represent. Need formal: exposure interval [t_e0, t_e1], observed radiance is integral over moving object; if object displacement during exposure > voxel/point spacing, model error. Need define breakdown. Also lighting: mixed color, specular highlights [PAGE 39]. Need veto: if BRDF non-Lambertian and view-dependent effects strong, radiance field with direction can represent but requires dense angular sampling; if sparse, fail. Need not use fake numbers unless source. We can state threshold not specified.

6 <RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions. Need RLVR? Maybe reinforcement learning with verifiable rewards? Need provide 3 scenarios that veto method or baseline, with predictions. Must be verifiable from source or experiments. Scenarios:
1) Random point-cloud ablation: 3DGS with random init on DWS yields PSNR 16.33 vs ours 34.28 [PAGE 30]. Prediction: if point cloud init absent/poor, 3DGS vetoed for time-archival. Verifiable metric.
2) Sequential/temporal coupling under abrupt motion: methods with temporal propagation (4DGS, ST-GS, D-3DGS) fail on CMU without SfM points, table 2 failure symbols [PAGE 26], and D-NeRF linear deformation poor [PAGE 27]. Prediction: in sports with discontinuities, temporally coupled methods have lower PSNR/higher LPIPS than per-frame independent fields.
3) Storage/archival scalability: per-time 3DGS storage 200-300 MB/time, 20-30GB/100 frames vs ours 25-50MB [PAGE 8], table 4 6.2GB point cloud folder saved [PAGE 29-30]. Prediction: long sequences (T large) 3DGS archival storage exceeds implicit by factor (not ratio? can state measured). If T increases, storage difference grows linearly. Verifiable by memory logs. Could include equations S_3DGS(T) ≈ T(s_model + s_points), S_ours(T) ≈ T s_model. Need no fake ratio? Derived from source. It's okay.

Need total >=1000 words. Need ensure exact XML section tags. No markdown? likely okay but exact sections. Need include LaTeX. Need cite exact [PAGE N] markers and verbatim quotes when source pages are provided. We need quote exact phrases. We can quote many. Need be careful verbatim: from source:
[PAGE 2] "we may not need a temporally coupled constraint or 3d point cloud initialization." exact? In page 2: "we may not need a temporally coupled constraint or 3d point cloud initialization." yes.
[PAGE 8] "Storage Efficiency: A 3DGS model if used for time-archival in our scenarios will typically requires 1-5 million Gaussians per scene" grammar? Source has "will typically requires". Need quote exactly if use.
[PAGE 8] "This results in 200-300MB per time step." yes.
[PAGE 8] "In contrast, our proposition for using implicit per-frame radiance field needs 12.7M parameters (approx. 25-50MB)." exact? yes.
[PAGE 9] "Our method on the other hand stores a complete radiance function Ft independently for each time step, enabling exact, drift-free reconstruction for each time instance." exact.
[PAGE 16] "We begin with N synchronized multi-view static cameras arranged strategically around the scene to ensure comprehensive spatial coverage and minimize occlusion" maybe.
[PAGE 16] equation It. Need quote maybe "where I(i)t ...".
[PAGE 17] "Formally, the scene at each time instance t is encoded as a continuous volumetric function:" then equation.
[PAGE 18] "The MLP itself is intentionally kept shallow and narrow" maybe.
[PAGE 18] "Therefore, any dynamic subject observed by multiple synchronized cameras only varies by a rigid transformation." exact.
[PAGE 18] equation Ft = MLP.
[PAGE 18] volume rendering.
[PAGE 19] loss.
[PAGE 19] "in our experiment, we treats the dynamic event at each time step independently." grammar? source: "in our experiment, we treats the dynamic event at each time step independently." yes.
[PAGE 26] table failures. Could quote "♣symbolizes that the corresponding method fail to give results." exact? [PAGE 26].
[PAGE 27] "4DGS [3] and ST-GS [4] will fail due to over-reliance on 3D points priors from the structure-from-motion framework." exact? Source [PAGE 27]: "Furthermore, it is apparent that 4DGS [3] and ST-GS [4] will fail due to over-reliance on 3D points priors from the structure-from-motion framework." yes.
[PAGE 30] "Without any ground truth 3d point cloud priors, our approach provides excellent results with significantly low-memory requirement." exact.
[PAGE 33] warm start gap. "the resulting ∼2.74dB PSNR gap persisted consistently across frames 1–15" exact? source [PAGE 36]? Actually page 36 has that. Need page marker [PAGE 36].
[PAGE 37] "inaccuracies in the first-frame initialization propagate through the entire warm-start chain" maybe page 37? It says on page 37 after figure? The text: "These results demonstrate that, while warm-start chaining can improve efficiency when accurate geometry is available, its performance—contrary to ours—remains strongly dependent on the accuracy of the reference-frame point cloud." [PAGE 37]. Use.
[PAGE 38] "temporal coupling can become brittle, leading to drift or bias accumulation." exact.
[PAGE 39] limitations: "small fine grained low-lying object(s) on ground or stages (such as grass, bottles)" and "challenging illumination conditions (such as mixed color temperatures, specular highlights, rapid exposure changes, or complex stage lighting) remains boundary case." Need quote.

Need maybe include equations in LaTeX within sections. The source equations are already LaTeX-like. Need formal. We can reproduce.

Need no fake ratios. Avoid saying "force/fatigue". Use formal. Need maybe avoid "ratio" unless sourced? We can state memory ratio as derived from source numbers? It says "10–20x smaller" [PAGE 8]. Could cite. But no fake. It's in source. Use "source reports".

Need perhaps mention SI units. For equations: x ∈ R^3 with meters; t seconds; λ meters; Ωθ rad, Ωϕ rad; σ maybe m^-1 if extinction coefficient; c normalized radiometric RGB or radiance W·sr^-1·m^-2? Source uses RGB color, not physical radiance. We can state if interpreting as volumetric rendering, σ has units m^{-1} when path length s in m, or normalized if domain scaled. Need formal.

Need exact word count >=1000. Let's estimate. Each section maybe 250-400 words. Need total >1000. We can make robust ~2500 words. Must be careful not too long but okay.

Need maybe include "ZERO BETTING LINES" compliance? Could mention no betting lines? Not necessary, but can avoid.

Potential issue: user asks "DRIVE SOURCE: ... PAGES: 63 SOURCE TEXT: ..." No explicit task. Need likely produce analysis. The system says "You are the GSE + GSI Frontier Reasoning Foundry." So answer as analysis. Could start with <THINK_TRACE> directly. No preamble. Need exact XML sections. Ensure each tag exactly. Could include nested? Probably only those sections. Need no extra outside? Maybe only those six sections.

Need ensure THINK_TRACE >=400 words. Let's draft with citations. Need formal LaTeX maybe in source section, but THINK_TRACE can include some. Need word count. Let's write detailed.

Need maybe include "gray-zone audit". We'll identify gray zones: calibration, independent frames, storage, real-time, temporal consistency, view extrapolation, lighting.

Let's construct.

Section 1 THINK_TRACE:
- Restate problem: camera virtualization with time archival [PAGE 6]. Source defines: "camera virtualization must allow for time-archival" [PAGE 6]. Multi-hop: geometry at time t + neural field + archival.
- Derivation: Given N images, known K,R,t [PAGE 16-17]. For each t, learn Θ_t. If scene is static at instant and cameras synchronized, correspondences constrained by epipolar geometry. The method bypasses explicit point cloud by optimizing implicit field directly to images.
- Evaluate evidence: synthetic and CMU metrics [PAGE 24], [PAGE 26]. It outperforms baselines. But gray zones: synthetic datasets generated Blender, real-world limited two CMU sequences. Independence means no temporal coherence; optional regularization not used [PAGE 19]. Storage linear. Rendering 4-5 FPS [PAGE 29]. Parallel training requires many GPUs [PAGE 35]. Need cite.

Need at least 400 words. We'll make ~700.

Section 2 SOURCE_OPERATORS_AND_EQUATIONS:
- list equations with units and page citations. Use LaTeX.
1 plenoptic function Eq 1 [PAGE 10]: \Phi(x,\Omega_\theta,\Omega_\phi,\lambda,t). Units: x m, angles rad, λ m, t s. Assumption constant λ [PAGE 16].
2 acquisition Eq 2 [PAGE 16]: I_t = { ... }, I ∈ R^{H×W×3}, pixel intensity normalized [0,1]. K_i ∈ R^{3×3}, R_i ∈ SO(3), t_i ∈ R^3.
3 field Eq 3/4 [PAGE 17-18]: F_t: (x,d)->(c,σ), x ∈ R^3 m, d∈S^2, c RGB, σ density. F_t(x,d;Θ_t)=MLP(γ(x),γ(d);Θ_t).
4 volume rendering Eq 6/7 [PAGE 18-19]: C_hat = ∫ T σ c ds, T = exp(-∫σ). Units: if s m, σ m^-1, c radiance or normalized color; C_hat same. Discrete M samples.
5 loss Eq 8 [PAGE 19]: L = sum_i sum_r ||...||_2^2 + κ||Θ_{t+1}-Θ_t||_2^2. κ optional; set 0 in experiments [PAGE 19]. Breakdown if κ>0 under abrupt motion.
6 camera sampling Fibonacci [PAGE 21]: phi golden angle, zi, θi, ri, pi. Units: R m, angles rad.
7 calibration FOV [PAGE 60]: camera_anglex = 2 arctan((w/2)/fx). Units rad, fx pixel.
8 network hash: L=16, C=2, Rmin=16, Rmax=2048*B, α=(Rmax/Rmin)^{1/(L-1)}, embedding dimension 32 [PAGE 62]. Parameter count 12.7M [PAGE 63]. Units: indices dimensionless, 22-bit hash table [PAGE 63].
9 storage scaling: S_ours(T)=T s_F + s_0, S_GS(T)=T(s_G+s_P). Source gives numbers. Need formal with bytes. Breakdown: if T large, linear.
10 information-theoretic view: independent frame entropy. Maybe H_T = sum H_t if independent; temporal coupling can reduce if conditional dependencies. But not in source? Formal. Need not be too speculative. Could state under source's independence assumption, no temporal compression beyond per-frame; archival retrieval exact.

Need page citations and verbatim quotes. Could include quotes in each.

Section 3 RETROCAUSAL_GENEALOGY:
- line: plenoptic function [PAGE 10], NeRF [PAGE 11], Instant-NGP [PAGE 12-13], TensoRF [PAGE 13], 3DGS [PAGE 13], dynamic NeRF [PAGE 13], 4DGS [PAGE 14], QUEEN [PAGE 15]. Multi-week traps: point-cloud dependence, sequential propagation, temporal regularization under discontinuities. Need cite quotes.

Section 4 RECURSIVE_THEORY_OF_MIND:
- model crisis: sports fast motion. Habit regression: use smooth temporal models, dense point clouds, keyframes. Counter-trap: independent per-time. Clock: exact time index. Maybe formal: archival query Q(t, view) returns F_t. If temporal coupling, state at t may depend on previous, causing latency/drift. Need discuss.

Section 5 CROSS_LAYER_VETO_ADJUDICATION:
- physical veto conditions. Need proof style.
Define calibration error: ray r(s)=o+s d [PAGE 18]. If extrinsic error δR, δt, ray error δr; reprojection error e_px. If e_px > pixel tolerance, loss minimized under wrong geometry, no guarantee. Source says cameras known or estimated [PAGE 17]. Veto if calibration insufficient.
- occlusion: source setup minimizes occlusion [PAGE 16] but not guarantee. If a subject is visible in fewer than needed views, field underconstrained. Formal: number of observed rays per voxel < constraints. Could state.
- motion blur/exposure: observed image is time integral over exposure. If radiance field is instantaneous, model mismatch. Source treats discrete time instance [PAGE 16], no exposure model. Veto if blur.
- weather: not modeled. If rain/fog, transmittance includes atmospheric scattering, Eq 6 missing. Could be out-of-scope. Need no source? We can say not addressed; formal breakdown.
- lighting: source acknowledges challenging illumination [PAGE 39]. If mixed color/exposure, loss bias. Veto if no calibration.

Section 6 RLVR_COUNTERFACTUAL_VETOES:
3 scenarios with predictions.
Need maybe RLVR = reinforcement learning verifiable rewards? We can phrase as "verifiable rejection scenarios".
Scenario 1: no SfM point cloud for 3DGS. Evidence table 2 failure, table 4 random point PSNR 16.33. Prediction: if deployed without accurate point cloud, 3DGS baselines fail to reach usable PSNR; per-frame implicit remains >30 in synthetic.
Scenario 2: abrupt motion and temporal coupling. Evidence table 1, table 6, D-NeRF poor. Prediction: any method requiring deformation smoothness will have lower PSNR on DWS/sports when pose discontinuity occurs; independent fields avoid.
Scenario 3: long sequence archival storage. Evidence storage numbers. Prediction: for T frames, 3DGS archive memory grows with point clouds and exceeds implicit; for 100 frames source says 20-30GB vs 2.5-5GB? Source says 10-20x smaller. Use.

Need ensure all sections have enough words. Total maybe 3000. Fine.

Need avoid using "odds". fine.

Potential issue: The user says "PAGES: 63" and source text includes pages. Need cite exact [PAGE N]. Good.

Need maybe not cite nonexistent page. Ensure page numbers correct:
- Page 2: quote no temporally coupled.
- Page 6: time-archival definition.
- Page 8: storage bullets.
- Page 9: independent radiance.
- Page 10: plenoptic.
- Page 16: acquisition setup, images, known/estimated extrinsics, rigid transform? Actually page 17 has extrinsic. Page 18 has rigid transformation. Need exact.
- Page 17: Eq 3, separate parameters.
- Page 18: Eq 4, volume rendering Eq 6.
- Page 19: Eq 7, Eq 8, independent treatment, 4-5 FPS? FPS on page 29? It says current implementation provides 4-5 FPS [PAGE 29]. Use.
- Page 21: Fibonacci sampling.
- Page 24: Table 1.
- Page 26: Table 2 failures.
- Page 27: 4DGS fail due over-reliance, D-NeRF unsatisfactory.
- Page 29: Table 4, 48.8MB, 6.2GB, 4-5 FPS.
- Page 30: quote no point cloud.
- Page 31: Table 5 parallelizable.
- Page 33: Table 6, warm start? Warm start section starts page 35. Table 6 page 33.
- Page 35: warm-start definition? page 35 has "By Warm-Start..." and experiment. Page 36 has results PSNR 28.94/26.20 and gap persisted. Page 37 has conclusion. Use.
- Page 38: independence vs temporal coupling.
- Page 39: limitations lighting/objects.
- Page 60: FOV, coordinate. Page 62: bbox, hash. Page 63: parameter count, training config.

Need maybe include exact quote for "exact, drift-free" [PAGE 9], "geometrically well-constrained" [PAGE 3, 5, 11]. Use.

Need maybe formal singularities/breakdown regimes: 
- SfM baseline breakdown: if point cloud inaccurate, 3DGS fails [PAGE 27-28].
- Temporal regularization singularity: κ penalizes discontinuity; if motion jump at t, optimum biased.
- Volume rendering discretization breakdown: δ too large relative to σ variation causes bias; M samples insufficient.
- Hash grid resolution: Rmax=2048B [PAGE 62]; if scene beyond B, clipping; if high-frequency beyond Rmax, aliasing.
- Camera calibration: if extrinsic noise, geometry constraint invalid.
- Weather: unmodeled participating media.

Need no "toy equations". The equations are formal. Maybe avoid deriving "Force/Fatigue". Good.

Need maybe mention probability units: in RLVR? Could mention log-likelihood bits: photometric MSE corresponds to negative Gaussian log-likelihood: -log p(C|Θ) = (1/(2σ_n^2))||...||² + const, units nats; if log2, bits. This is formal. Could include in source operators. Need not invent? It's standard. We can state assumption. Good.

Let's draft final. Need ensure exact XML tags. Maybe each section content plain. Need no markdown? We can include LaTeX. Need word count. Let's write robust.

Double-check no betting lines: none.

Need perhaps not say "I can't". fine.

Let's compose.

Potential issue with quotes: Need exact verbatim. Use quotes from source. If punctuation mismatch? Try to copy. For example page 8: "A 3DGS model if used for time-archival in our sce-narios will typically requires 1-5 million Gaussians per scene" includes hyphen line break? Source has "sce-narios" due line break? In provided text: "A 3DGS model if used for time-archival in our sce-narios will typically requires 1-5 million Gaussians per scene". If quote, maybe use without hyphen? Verbatim from provided: "A 3DGS model if used for time-archival in our sce-narios will typically requires 1-5 million Gaussians per scene". Better avoid exact quote if uncertain. Use shorter: "This results in 200-300MB per time step." exact. "In contrast, our proposition for using implicit per-frame radiance field needs 12.7M parameters (ap-prox. 25-50MB)." The line break may be "ap-prox." We can quote without linebreak? Maybe okay. Use simple quotes: "we may not need a temporally coupled constraint or 3d point cloud initialization" [PAGE 2]. Exact. "Our method on the other hand stores a complete radiance function Ft independently for each time step" [PAGE 9]. It continues "enabling exact...". Good.

Need maybe quote "time-archival, i.e., the user can revisit the scene in the past" [PAGE 6]. Source: "such an application must support time-archival, i.e., the user can revisit the scene in the past and can observe its dynamics from a novel viewpoint." Use partial.

Need ensure LaTeX renders: Use $$ maybe. Fine.

Let's draft final with six sections.

Need maybe include "THINK_TRACE" word count. Let's estimate:
THINK_TRACE maybe 800 words.
SOURCE_OPERATORS maybe 900.
RETROCAUSAL 500.
RECURSIVE 500.
CROSS 600.
RLVR 600. Total >3900. Fine. But maybe too long? Accept.

Need ensure no accidental betting words: "odds" no. "betting" no. "spread" maybe not. "total" can mean total words, but avoid betting context. Use "aggregate".

Need maybe not mention "moneylines". fine.

Let's produce final. Ensure no commentary outside. final only XML sections. Need no XML declaration.

Double-check exact tags: <THINK_TRACE> ... </THINK_TRACE>, etc.

Let's write.

Potential concern: The source uses "Ft" not LaTeX. We'll format.

Need include citations [PAGE N] within text. Good.

Let's final.
</NATIVE_REASONING>

<THINK_TRACE>
The source is not proposing a conventional temporal reconstruction pipeline; it is proposing a time-indexed archival representation for camera virtualization. The central claim is that, under synchronized multiview capture, a dynamic scene at a single temporal instance can be treated as a static 3D radiance field constrained by multiview geometry, and that this is sufficient for high-quality novel-view synthesis without structure-from-motion point clouds or temporally coupled deformation fields. The paper states this explicitly: “we may not need a temporally coupled constraint or 3d point cloud initialization” [PAGE 2]. The gray-zone question is whether that claim survives when the scene contains fast, non-rigid, multi-subject motion, partial occlusion, lighting variation, and imperfect calibration.

Multi-hop derivation: the acquisition model assumes \(N\) synchronized static cameras with known or estimated intrinsics and extrinsics [PAGE 16–17]. At each discrete time \(t\), the observation is \(I_t = \{I_t^{(1)}, \ldots, I_t^{(N)}\}\) [PAGE 16]. For each time instance, the paper learns a separate implicit field \(F_t(\mathbf{x}, \mathbf{d}; \Theta_t) = \mathrm{MLP}(\gamma(\mathbf{x}), \gamma(\mathbf{d}); \Theta_t)\) [PAGE 18]. Rendering uses standard volumetric integration along camera rays, with transmittance and density [PAGE 18–19]. Training minimizes photometric reconstruction loss, optionally with a temporal weight-space regularizer \(\kappa \|\Theta_{t+1}-\Theta_t\|_2^2\) [PAGE 19]. However, the authors say that in their experiments they treat each time step independently: “in our experiment, we treats the dynamic event at each time step independently” [PAGE 19]. This is the crucial design choice: temporal coherence is not enforced through shared motion fields, Gaussian tracking, or deformation graphs. Instead, archival retrieval is made exact by storing an independent field per frame: “Our method on the other hand stores a complete radiance function Ft independently for each time step, enabling exact, drift-free reconstruction for each time instance” [PAGE 9].

The strength of this approach is that it converts dynamic-scene synthesis into a sequence of static multiview reconstruction problems. If the cameras are synchronized and the scene is instantaneously static in the mathematical sense, then every observed subject at time \(t\) is simply a set of rigidly related 3D surfaces seen from multiple viewpoints. The paper makes this assumption explicit: “any dynamic subject observed by multiple synchronized cameras only varies by a rigid transformation” [PAGE 18]. That assumption is plausible for sports and performance capture because the physical event is continuous, but the discrete-time sampling creates a gray zone: if the exposure interval, rolling shutter, motion blur, or inter-frame displacement is not modeled, the learned \(F_t\) may represent a temporal blur or an inconsistent instantaneous state rather than the physical scene at the nominal timestamp.

The empirical evidence supports the claim in the tested regimes. On the synthetic datasets, the method reports higher PSNR and lower LPIPS than D-NeRF, D-3DGS, 4DGS, ST-GS, Tensor4D, HexPlane, K-Planes, and Stream-RF [PAGE 24, PAGE 33]. On CMU Panoptic, several 3DGS-based methods fail or are not applicable: the table marks them with “♣symbolizes that the corresponding method fail to give results” [PAGE 26]. The paper argues that this is because those methods rely on accurate 3D point priors: “it is apparent that 4DGS [3] and ST-GS [4] will fail due to over-reliance on 3D points priors from the structure-from-motion framework” [PAGE 27]. The single-time ablation is especially important: with random point initialization, 3DGS drops to PSNR 16.33 and LPIPS 0.3761, while the proposed method obtains PSNR 34.28 and LPIPS 0.0255 without point-cloud initialization [PAGE 30]. This supports the paper’s core counterclaim: explicit point clouds are not necessary for this archival task if the multiview geometry is strong.

The main gray zones are storage, latency, calibration, and temporal semantics. Storage is linear in the number of archived frames because each frame has its own MLP and hash-grid parameters. The source reports approximately 12.7M parameters per model [PAGE 63], with approximate memory of 25–50MB per time step [PAGE 8], while 3DGS per-time archival is described as requiring 200–300MB per time step due to Gaussians and spherical harmonics [PAGE 8]. The method therefore has a clear archival footprint advantage, but it does not magically eliminate storage growth: for long sequences, total storage is still \(T\) times the per-frame model size. The second gray zone is latency. The method is described as “near real-time” with “4-5 FPS” in the current implementation [PAGE 29]. This is not broadcast-grade real-time if the target requires 30/60 FPS, although offline archival and replay are still valid use cases. The third gray zone is geometric robustness: if camera extrinsics are noisy, if subjects leave the calibrated volume, or if the scene extends outside the normalized bounding cube \(B = [-B, B]^3\), the implicit field may hallucinate or blur [PAGE 62]. The fourth gray zone is illumination and material complexity. The paper acknowledges that “challenging illumination conditions (such as mixed color temperatures, specular highlights, rapid exposure changes, or complex stage lighting) remains boundary case” [PAGE 39].

Overall, the paper’s strongest contribution is not simply a new renderer; it is an archival formulation. It treats time as an explicit index and avoids the fragile assumption that motion can be smoothly propagated across frames. The weakest points are the lack of full physical exposure modeling, the dependence on synchronized calibrated capture, and the limited real-time rendering speed. In a gray-zone audit, the method is credible for controlled sports/performance archives where geometry is known and temporal exactness is more important than real-time synthesis. It becomes less credible when calibration drifts, weather or atmospheric scattering is present, motion blur is severe, or when downstream users require continuous temporal interpolation rather than independent frame retrieval.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
1. Plenoptic operator.  
The paper frames the goal as modeling the plenoptic function:
\[
\Phi(x, \Omega_\theta, \Omega_\phi, \lambda, t),
\]
where \(x = (x,y,z)^T \in \mathbb{R}^3\), \(\Omega_\theta \in [0,\pi]\), and \(\Omega_\phi \in [0,2\pi)\) [PAGE 10]. In SI-style units, \(x\) is spatial position in meters \([\mathrm{m}]\), \(\Omega_\theta\) and \(\Omega_\phi\) are angular coordinates in radians \([\mathrm{rad}]\), \(\lambda\) is wavelength in meters \([\mathrm{m}]\), and \(t\) is time in seconds \([\mathrm{s}]\). The authors assume constant \(\lambda\) for RGB synthesis: “Here, λ is the wavelength which we assume as a constant, and t for time” [PAGE 10]. Breakdown regime: if spectral variation, strong colored lighting, or multispectral effects matter, the constant-\(\lambda\) RGB reduction is insufficient.

2. Multiview acquisition operator.  
At each discrete time \(t\), the system captures
\[
I_t = \{I_t^{(1)}, I_t^{(2)}, \ldots, I_t^{(N)}\},
\]
with \(I_t^{(i)} \in \mathbb{R}^{H \times W \times 3}\) [PAGE 16]. Each camera has intrinsic matrix \(K_i \in \mathbb{R}^{3 \times 3}\) and extrinsics \((R_i, t_i)\), with \(R_i \in SO(3)\), \(t_i \in \mathbb{R}^3\) [PAGE 16–17]. Pixel intensities are usually normalized to \([0,1]\); \(K_i\) entries such as \(f_x, f_y, c_x, c_y\) are in pixels. Breakdown regime: synchronization error \(\Delta t_{\mathrm{sync}}\), extrinsic drift \(\delta R_i\), or intrinsic miscalibration \(\delta K_i\) makes the rigid multiview constraint invalid. The paper assumes cameras are “synchronized multi-view static cameras” [PAGE 16].

3. Per-time neural radiance field.  
The scene at time \(t\) is represented as
\[
F_t : (\mathbf{x}, \mathbf{d}) \mapsto (c, \sigma),
\]
where \(\mathbf{x} \in \mathbb{R}^3\) is a spatial location, \(\mathbf{d} \in \mathbb{S}^2\) is a viewing direction, \(c \in \mathbb{R}^3\) is predicted RGB color, and \(\sigma \in \mathbb{R}_{+}\) is volume density [PAGE 17]. If \(s\) is measured in meters, \(\sigma\) has units \([\mathrm{m}^{-1}]\) in a physical extinction model; if the scene is normalized into a unit cube, \(\sigma\) is effectively dimensionless per normalized length. The implementation is
\[
F_t(\mathbf{x}, \mathbf{d}; \Theta_t) = \mathrm{MLP}(\gamma(\mathbf{x}), \gamma(\mathbf{d}); \Theta_t),
\]
with separate parameters \(\Theta_t\) per time step [PAGE 18]. The positional encoder \(\gamma(\cdot)\) is a multiresolution hash encoding [PAGE 17]. Breakdown regime: if \(\gamma(\mathbf{x})\) lacks sufficient resolution for thin limbs, small props, or high-frequency texture, the MLP will smooth or alias those structures.

4. Volume rendering operator.  
The rendered pixel color along ray \(r\) at time \(t\) is
\[
\hat{C}(r,t) = \int_{s_f}^{s_n} T_t(s)\,\sigma_t(r(s))\,c_t(r(s), \mathbf{d})\,ds,
\]
with transmittance
\[
T_t(s) = \exp\left(-\int_{s_n}^{s} \sigma_t(r(u))\,du\right)
\]  
[PAGE 18]. Here \(r(s) = o + s\mathbf{d}\), where \(o\) is the camera center and \(s\) is distance along the ray. The discrete approximation is
\[
\hat{C}(r,t) \approx \sum_{j=1}^{M} T_j^t (1 - e^{-\sigma_j \delta_j}) c_j,
\qquad
T_j^t = e^{-\sum_{k=1}^{j-1} \sigma_k \delta_k},
\]
where \(\delta_j\) is the distance between samples [PAGE 19]. Units: if \(s\) and \(\delta_j\) are in meters, \(\sigma_j \delta_j\) is dimensionless. Breakdown regime: if \(\delta_j\) is too large relative to density variation, the Riemann approximation is biased; if \(M\) is too small, thin structures are missed.

5. Photometric training objective.  
The loss is
\[
L(\Theta_t) =
\sum_{i=1}^{N} \sum_{r \in R_i}
\left\| \hat{C}(r;\Theta_t) - C(r) \right\|_2^2
+ \kappa \|\Theta_{t+1} - \Theta_t\|_2^2,
\]
where \(C(r)\) is the observed pixel color and \(R_i\) is the set of sampled rays from camera \(i\) [PAGE 19]. In probabilistic terms, under a Gaussian noise model with variance \(\varsigma^2\), the first term is proportional to a negative log-likelihood in nats; dividing by \(\ln 2\) converts to bits. The temporal term with \(\kappa > 0\) encourages weight similarity between adjacent time steps, but the authors state that they treat each time step independently in experiments [PAGE 19]. Breakdown regime: for abrupt motion, a nonzero \(\kappa\) can bias the solution toward the previous frame and degrade exact archival.

6. Hash-grid encoding and parameter count.  
The positional encoder uses a multiresolution hash grid with \(L = 16\) levels and \(C = 2\) channels per entry [PAGE 62]. The finest grid resolution is \(R_{\max} = 2048 \times B\), and the geometric scale is
\[
\alpha = \left(\frac{R_{\max}}{R_{\min}}\right)^{1/(L-1)}, \qquad R_l = R_{\min}\alpha^l
\]  
[PAGE 62]. The hash table has \(2^{22} = 4{,}194{,}304\) entries, and the full model is approximately 12.7 million learnable parameters [PAGE 63]. Units: table indices are dimensionless integers; the 22-bit index provides \(22\) bits per entry for addressing, not the full model entropy. Breakdown regime: if the scene has high-frequency details beyond the finest grid resolution or if coordinates fall outside the normalized bounding box, the encoding cannot faithfully represent them.

7. Camera sampling operator for synthetic dataset.  
Camera positions on a hemisphere of radius \(R\) are sampled using Fibonacci sphere sampling:
\[
\phi = \pi(3-\sqrt{5}),
\]
\[
z_i = R\left(1 - \frac{i}{N}\right),
\]
\[
\theta_i = (\phi \times i) \bmod 2\pi,
\]
\[
r_i = \sqrt{R^2 - z_i^2},
\]
\[
p_i = (r_i \cos\theta_i, r_i \sin\theta_i, z_i)
\]  
[PAGE 21]. Units: \(R\) and \(p_i\) are in meters or scene units; \(\theta_i\) is in radians. Breakdown regime: if the real capture rig deviates from this ideal uniform hemisphere, angular coverage may be uneven, increasing interpolation error for novel views.

8. Field-of-view and calibration conversion.  
For intrinsic focal length \(f_x\) and image width \(w\), the horizontal field of view is
\[
\texttt{camera\_anglex} = 2 \arctan\left(\frac{w/2}{f_x}\right),
\]
and similarly for vertical field of view [PAGE 60]. Units: \(f_x, f_y, w, h\) are in pixels; the resulting angle is in radians. Breakdown regime: incorrect distortion coefficients \((k_1,k_2,k_3,p_1,p_2)\) produce systematic ray errors.

9. Storage scaling.  
Let \(s_F\) be the byte size of one per-time implicit field, and \(s_P\) the byte size of an optional point cloud for a Gaussian-splatting pipeline. For \(T\) archived frames, the source’s independent-field formulation has approximately
\[
S_{\text{ours}}(T) \approx T s_F + s_0,
\]
where \(s_0\) is fixed overhead. A per-time 3DGS archive with explicit point storage has approximately
\[
S_{\text{3DGS}}(T) \approx T(s_G + s_P) + s_0',
\]
where \(s_G\) is Gaussian model storage. The paper reports 25–50MB per implicit time step [PAGE 8], 200–300MB per 3DGS time step [PAGE 8], and a 6.2GB persistent 3D point folder avoided in one test case [PAGE 29]. Breakdown regime: if Gaussian models are aggressively compressed and point clouds are discarded, the storage gap narrows, but the paper argues that this degrades exactness or robustness.

10. Archival retrieval operator.  
The archival query is conceptually
\[
\mathcal{A}(t, \mathbf{v}) = \mathrm{Render}(F_t, \mathbf{v}),
\]
where \(t\) is the archived time index and \(\mathbf{v}\) is a novel camera pose. Because each \(F_t\) is independently stored, retrieval does not require replaying a temporal chain. This is the formal meaning of “exact, drift-free reconstruction for each time instance” [PAGE 9]. Breakdown regime: if the requested \(t\) lies between sampled frames and continuous temporal interpolation is required, the independent-frame model does not provide a native motion model.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is a deliberate return to classical plenoptic thinking, filtered through modern neural rendering. The conceptual ancestor is the plenoptic function: the idea that a dynamic visual scene can be described as radiance over position, direction, wavelength, and time [PAGE 10]. The paper connects this to historical image-based rendering and movie-map concepts, but its immediate technical ancestry is neural radiance fields. The authors state that NeRF introduced differentiable volume rendering without explicit scene geometry and became a foundational milestone [PAGE 11–12]. From there, the lineage branches into efficient encodings: Instant-NGP’s multiresolution hash grids [PAGE 12–13], TensoRF’s tensor decomposition [PAGE 13], and various multiscale or light-field variants [PAGE 12]. The paper adopts the hash-grid part of this lineage because it gives a compact spatial encoding for an MLP.

The next genealogical branch is dynamic NeRF. The source lists DyNeRF, StreamRF, NeRFPlayer, Tensor4D, HexPlane, K-Planes, and related space-time factorizations [PAGE 13–14]. These methods usually model time by deformation, canonical spaces, latent codes, or factorized space-time tensors. The current paper rejects the need for such temporal coupling in its target regime. It says: “we may not need a temporally coupled constraint or 3d point cloud initialization” [PAGE 2]. This is a counter-genealogical move: instead of making time part of the learned function, the paper makes time an external index and learns one static-like field per frame.

A third branch is 3D Gaussian Splatting. The paper acknowledges the value of 3DGS but emphasizes its dependence on structure-from-motion point clouds and its difficulty with dynamic archival. It states that 3DGS “heavily depends on accurate 3D point initialization from SfM” [PAGE 13]. It also argues that dynamic Gaussian methods require either stored point clouds per time step or additional multi-body temporal modeling, both of which are expensive and memory-intensive [PAGE 5, PAGE 8]. This genealogy matters because many recent sports and performance systems inherited the Gaussian-splatting trend due to real-time rasterization, but the paper argues that real-time rendering is not the same as archival robustness.

The multi-week traps in this lineage are recognizable. The first trap is chasing frame rate while ignoring initialization quality. 3DGS can rasterize quickly, but if the point cloud is noisy, the representation fails; the paper’s random-point ablation shows PSNR 16.33 for 3DGS versus 34.28 for the proposed implicit field [PAGE 30]. The second trap is assuming temporal smoothness. Many dynamic methods assume stable correspondences or smooth deformation. The paper counters that sports contain “flips, jumps, articulations, sudden player-to-player transitions” and that independent motions can break Gaussian-tracking assumptions [PAGE 4]. The third trap is warm-start chaining: using the previous frame to initialize the next frame can reduce cost, but errors persist. The paper reports a “∼2.74dB PSNR gap persisted consistently across frames 1–15” when initialization quality differed [PAGE 36]. The fourth trap is storing dense explicit geometry per frame for archival. The paper estimates that per-time 3DGS can require tens of gigabytes for long sequences, whereas implicit fields are smaller and more predictable [PAGE 8].

The deepest genealogical tension is between compactness and exactness. Temporally coupled methods can be more compact if motion is smooth because they share information across frames. But the paper argues that in sports and visual performance, abrupt motion and multi-subject interactions make coupling brittle: “temporal coupling can become brittle, leading to drift or bias accumulation” [PAGE 38]. The proposed method chooses exactness over compactness: independent fields are larger than an ideal temporally compressed representation, but they avoid drift and allow arbitrary retrospective query. This is the key historical lesson: for archival replay, exact temporal addressing can be more valuable than elegant temporal compression.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
A recursive theory of mind here means modeling the incentives and failure habits of different reconstruction systems under crisis conditions. The crisis is a dynamic sports or performance event: rapid acceleration, occlusion, limb articulation, multiple independent subjects, non-rigid deformation, and possible lighting changes. Under this crisis, several habitual regressions appear.

First, the temporal-smoothing habit. Many dynamic reconstruction systems assume that adjacent frames are similar enough to share motion fields, deformation graphs, canonical spaces, or tracked primitives. This habit works when motion is slow and correspondence is reliable. In sports, however, the paper says subjects undergo “high acceleration and non-rigid deformation” and that “independent motions of multiple subjects can break the Gaussian-tracking assumptions” [PAGE 4, PAGE 14]. If a system enforces temporal smoothness through a term such as \(\kappa \|\Theta_{t+1}-\Theta_t\|_2^2\) [PAGE 19], then an abrupt pose change is penalized as if it were an optimization error. The result is ghosting, delayed limb position, or averaged geometry. The counter-trap is to remove temporal coupling and solve each frame as an independent multiview reconstruction problem. This counter-trap is costly in training time but exact in archival retrieval.

Second, the point-cloud dependency habit. Gaussian-splatting pipelines often begin by trusting SfM points as geometric anchors. In static scenes, this is effective. In dynamic sports, the paper argues that point recovery becomes error-prone because of occlusion, articulation, and pose discontinuity [PAGE 14]. The recursive failure is subtle: the system tries to correct bad initialization through densification or temporal propagation, but the initial bias remains. The warm-start ablation demonstrates this: even after subsequent optimization, “inaccuracies in the first-frame initialization propagate through the entire warm-start chain” [PAGE 36]. The counter-trap is to avoid explicit point clouds entirely and learn a radiance field directly from images, as the proposed method does.

Third, the real-time-priority habit. Broadcast systems often optimize for frames per second. The paper acknowledges that 3DGS methods provide high FPS but degrade under complex dynamic motion [PAGE 28]. The recursive mistake is to treat FPS as the sole success metric while ignoring PSNR, LPIPS, temporal drift, and archival exactness. The proposed method accepts lower FPS, reporting “4-5 FPS” in its current implementation [PAGE 29], in exchange for higher reconstruction quality and parallelizable per-frame training [PAGE 31]. For offline replay, analysis, and archival, this trade can be rational: a broadcaster can re-render a past moment at high quality even if live synthesis is not real-time.

Fourth, the interpolation habit. Some users may expect a dynamic model to generate any intermediate time \(t + \epsilon\) between sampled frames. The paper’s formulation does not natively do that. It stores \(F_t\) at discrete sampled times and renders from those fields. If the task requires smooth slow-motion interpolation, the independent-frame model must be augmented with interpolation, optical flow, or a learned temporal prior. The paper’s scope is archival retrieval, not continuous temporal synthesis. This is a boundary between “rewind and inspect” and “interpolate new motion.”

The clock layer is the archival index. The method’s clock is not a deformation clock; it is an external time index. Each frame has its own parameter set \(\Theta_t\). Retrieval is \(t \mapsto F_t\). This avoids latency chains such as “to reconstruct frame \(t\), first reconstruct frame \(t-1\).” The paper emphasizes full parallelizability across time: “each time step is independent, making our approach trivially parallelizable across tens or hundreds of GPUs” [PAGE 32]. The recursive advantage is that archival queries are random-access rather than sequential. The recursive disadvantage is that the system has no built-in physical prior for what happens between frames.

In crisis habit regression, the safest counter-trap is: when motion is abrupt, do not propagate state; when initialization is unreliable, do not rely on explicit points; when archival exactness matters, store independent radiance fields. The method’s mental model is therefore “archive first, interpolate later.” That is a disciplined response to the failure modes of temporally coupled dynamic reconstruction.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical and biomechanical veto layer tests whether the method’s assumptions can be violated in real capture. The proposed field \(F_t(\mathbf{x}, \mathbf{d}; \Theta_t)\) is valid only if the images at time \(t\) are consistent with a single static radiance field under the given camera geometry. The paper assumes synchronized cameras and known or estimated extrinsics [PAGE 16–17]. The veto conditions are as follows.

1. Calibration veto.  
Camera rays are defined by origin \(o\) and direction \(\mathbf{d}\), with rendering along \(r(s) = o + s\mathbf{d}\) [PAGE 18]. If extrinsics contain error \((\delta R_i, \delta t_i)\), the ray mapping between world point \(\mathbf{x}\) and pixel coordinate is wrong. Let \(\pi_i(\mathbf{x}; K_i, R_i, t_i)\) be the projection into camera \(i\). Under calibration error, the observed pixel is approximately
\[
C_i^{\text{obs}} \approx \pi_i(\mathbf{x} + \delta \mathbf{x}; K_i + \delta K_i, R_i + \delta R_i, t_i + \delta t_i).
\]
The optimizer then fits a radiance field that explains the images under incorrect projection. If the projection error exceeds the effective pixel footprint of a voxel, the field cannot simultaneously satisfy all views. Veto condition: if synchronization or calibration error produces multi-view reprojection inconsistency greater than the sampling tolerance, the geometric constraint is no longer reliable. The source acknowledges that extrinsics are “known or estimated using classical SfM method” [PAGE 17], so estimation error is a real risk.

2. Occlusion and visibility veto.  
The acquisition setup aims to “ensure comprehensive spatial coverage and minimize occlusion” [PAGE 16]. But minimization is not elimination. If a subject is visible in too few cameras at time \(t\), the inverse problem is underconstrained. Formally, each surface point needs enough observed rays to constrain color and density. If the number of consistent observations falls below the degrees of freedom of the local radiance model, the MLP may hallucinate plausible but unverifiable geometry. Veto condition: severe occlusion or crowd occlusion in multi-player sports can make some body parts unobservable, especially when players cluster or when limbs are self-occluded.

3. Motion-blur and exposure veto.  
The model treats each time instance as discrete: “At each discrete time instance t, the setup captures N synchronized multi-view images” [PAGE 16]. However, a physical camera integrates radiance over an exposure interval \([t_a, t_b]\). If a moving limb traverses multiple positions during exposure, the observed image is
\[
C_i^{\text{blur}}(r) = \frac{1}{t_b - t_a} \int_{t_a}^{t_b} C_i(r, \tau)\,d\tau,
\]
not the instantaneous radiance field \(F_t\). If the displacement during exposure is larger than the spatial resolution of the hash grid or the voxelized scene, the learned field becomes a blurred or averaged object. Veto condition: high-speed sports with short shutter may be acceptable; low shutter, fast motion, or poor lighting requiring longer exposure can break the instantaneous-field assumption.

4. Biomechanical non-rigidity veto.  
The paper’s central geometric assumption is that “any dynamic subject observed by multiple synchronized cameras only varies by a rigid transformation” at a given time [PAGE 18]. This is true for the physical object at a fixed instant, but the representation must infer that instant from images. If pose estimation is ambiguous, if clothing deforms, if a ball is partially hidden, or if body parts move independently within the exposure window, the field may conflate multiple sub-states. Veto condition: extreme articulation, flips, and rapid player-to-player transitions are explicitly identified as challenging [PAGE 4, PAGE 14]. The method can handle them if the capture is instantaneous enough and views are sufficient; otherwise, the field may contain ghost limbs or incorrect depth ordering.

5. Weather and participating-media veto.  
The volume rendering equation models scene density \(\sigma\) and transmittance \(T_t(s)\) [PAGE 18]. It does not explicitly model atmospheric scattering, rain, fog, snow, or spray. If participating media are present, the observed radiance includes an airlight term:
\[
C^{\text{obs}}(r) = T_{\text{scene}}(s) C_{\text{scene}}(r) + \int_{s_n}^{s} T(s,u) L_{\text{air}}(u)\,du.
\]
The paper’s equation omits \(L_{\text{air}}\). Therefore, in adverse weather, the model may attribute scattering to scene density or color, causing haze, color casts, or unstable density. Veto condition: outdoor sports in rain, fog, or heavy spray are outside the validated assumptions unless additional atmospheric modeling is added.

6. Illumination veto.  
The source acknowledges that “challenging illumination conditions (such as mixed color temperatures, specular highlights, rapid exposure changes, or complex stage lighting) remains boundary case” [PAGE 39]. If illumination changes between cameras or during the capture, the photometric loss assumes a consistent radiance mapping. Specular highlights are view-dependent, but if angular sampling is sparse, the MLP may not capture them correctly. Veto condition: stage lighting with rapidly changing color temperature or high dynamic range can produce color leakage or reduced contrast, as the authors note.

7. Spatial-boundary veto.  
The implementation constrains scenes to \(B = [-B, B]^3\) and clips rays to the bounding box [PAGE 62]. If a subject leaves the calibrated capture volume, or if the stadium background extends far beyond the normalized cube, the representation may fail outside the trained region. Veto condition: large sports venues with cameras close to the action may require careful scaling and background handling; the paper’s method is strongest when the dynamic subjects are inside the calibrated volume.

Adjudication: the method is physically valid for synchronized, calibrated, adequately lit indoor or controlled outdoor capture with bounded scenes and manageable occlusion. It is vetoed or weakened when calibration is poor, exposure blur is severe, weather participates in light transport, lighting changes rapidly, or subjects leave the calibrated volume. The source’s own limitations section supports these boundary cases [PAGE 39].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
The following are three verifiable counterfactual veto scenarios. Each scenario defines a condition under which a baseline or the proposed method should be rejected, and each prediction is tied to source-reported evidence.

Scenario 1: No reliable SfM point cloud for 3DGS.  
Counterfactual: a dynamic sports scene is captured, but structure-from-motion cannot produce an accurate initial point cloud because of motion blur, occlusion, or rapid articulation.  
Veto target: 3DGS-based dynamic methods that require accurate point initialization.  
Evidence: the paper states that 4DGS and ST-GS “will fail due to over-reliance on 3D points priors from the structure-from-motion framework” [PAGE 27]. In the single-time ablation, 3DGS with random point initialization obtains PSNR 16.33 and LPIPS 0.3761, while the proposed method obtains PSNR 34.28 and LPIPS 0.0255 without point-cloud initialization [PAGE 30].  
Prediction: if deployed without reliable point clouds, Gaussian-based baselines will show large degradation relative to per-frame implicit fields, especially on fast multi-subject motion. Verifiable metric: PSNR/LPIPS under random or noisy point initialization versus implicit reconstruction. The source’s random-point ablation is a direct verifier.

Scenario 2: Abrupt motion discontinuity breaks temporal coupling.  
Counterfactual: a subject undergoes a sudden pose change, jump, flip, or player-to-player transition between sampled times.  
Veto target: temporally coupled methods that assume smooth deformation, stable tracking, or shared primitives across frames.  
Evidence: the paper argues that independent motions can break Gaussian-tracking assumptions [PAGE 4], that temporal coupling can become brittle under abrupt motion [PAGE 38], and that D-NeRF’s linear deformation approximation yields unsatisfactory results on CMU Panoptic [PAGE 27]. The proposed method treats each time step independently to avoid drift: “Our method on the other hand stores a complete radiance function Ft independently for each time step” [PAGE 9].  
Prediction: under abrupt motion, temporally coupled methods will produce ghosting, delayed deformation, or lower PSNR compared with independent per-time fields. Verifiable test: construct a frame pair with a large non-smooth pose change and compare reconstruction of the second frame when initialized independently versus through temporal propagation. The paper’s warm-start result supports the persistence of initialization errors: “inaccuracies in the first-frame initialization propagate through the entire warm-start chain” [PAGE 36].

Scenario 3: Long-horizon archival storage exceeds explicit 3DGS footprint.  
Counterfactual: a sports event or performance is archived for hundreds or thousands of frames and must support retrospective novel-view queries.  
Veto target: per-time 3DGS archival if it requires storing Gaussians and dense point clouds per frame.  
Evidence: the source states that 3DGS per-time storage can be 200–300MB per time step, while the proposed implicit per-frame radiance field needs approximately 25–50MB per time step [PAGE 8]. It also reports that a persistent 3D data folder for one test case occupied nearly 6.2GB, whereas the implicit method avoids that point-cloud storage [PAGE 29].  
Prediction: as the number of archived frames \(T\) grows, the explicit 3DGS archive will exceed the implicit archive in storage and operational complexity, unless aggressive compression is used. Verifiable test: measure total archive size for increasing \(T\) under both representations. Formal scaling is \(S_{\text{ours}}(T) \approx T s_F\) and \(S_{\text{3DGS}}(T) \approx T(s_G + s_P)\). The source’s storage claims are the verifier.

These three veto scenarios define the operational boundary of the paper’s argument. The proposed method is strongest when point-cloud priors are unreliable, motion is abrupt, and archival retrieval must be exact over many frames. It is weakest when the deployment requires real-time interpolation, extremely compact temporal compression, or physically accurate continuous-time motion between sampled frames.
</RLVR_COUNTERFACTUAL_VETOES>