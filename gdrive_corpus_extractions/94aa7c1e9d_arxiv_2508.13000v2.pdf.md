---
source: "arxiv_2508.13000v2.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 20
model: baidu/ernie-5.5-flash-preview:free
words: 9208
---

<NATIVE_REASONING>
We need answer user's request. Need produce final with exact XML sections, >=1000 words. User provided a source text (survey on multi-modal visual object tracking). They likely want analysis per system? Need infer: They gave drive source, pages, source text. Need produce THINK_TRACE, SOURCE_OPERATORS_AND_EQUATIONS, RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION, RLVR_COUNTERFACTUAL_VETOES. Strict invariants: no betting lines; no toy equations; formal LaTeX equations, SI/info/probability units, assumptions, exact singularity/breakdown regimes. When source pages provided, cite exact [PAGE N] markers and verbatim quotes. Need deep multi-hop derivation & gray-zone audit >=400 words. Overall >=1000 words. Need not mention odds/spreads/totals/moneylines. Need use source text citations. Need likely discuss something? User only provided source. Perhaps they expect analysis of source? The system says GSE + GSI Frontier Reasoning Foundry. Maybe need produce requested XML sections about source. We need choose task: analyze the paper? The user didn't ask a specific question. Could be expected to produce the six sections based on source. We must ensure exact XML sections and length. Need no equations that are toy. We can cite formal equations from source: sonar distance d = (Δt * V)/2, d* = project(d) [PAGE 3]. Tracker mappings T_RGB: D_RGB -> R^4, T_MMVOT: D_MMVOT -> R^4 [PAGE 5]. SUTrack equation: T_SUTrack : (D_RGB, D_MMVOT, θ_RGB) -> R^4, T_Others : (D_MMVOT, θ_RGB) -> R^4 [PAGE 10]. Metrics: PR, NPR, SR, Pr, Re, F-score, VOT A/R/EAO. Need maybe formal definitions? Source says detailed math in supplementary not present. We can define standard metrics carefully, but only source? Could state formal definitions with assumptions. Need exact quote markers. Also maybe physical wavelengths: RGB 0.38-0.75 um, NIR 0.75-1.4, SWIR 1.4-3, MWIR 3-8, LWIR 8-15 [PAGE 3]. Event latency RGB 10-20 ms vs event 1 us [PAGE 4]. Use units. Need discuss singularities/breakdown regimes: thermal crossover, illumination changes, low-quality modality, misalignment, annotation ambiguity, long-tail category distribution, animal scarcity. Could formulate information-theoretic inequality? Need avoid fake ratios. We can use formal equations with units: Shannon information I(X;Y), mutual information, mutual information between modalities? Need source doesn't provide but can state as conceptual. Must not invent toy equations like Force/Fatigue. Formal equations okay if justified. Need perhaps use probability units bits. For fusion utility: ΔI = I(S; R,G) - I(S; R) in bits? But source doesn't define target variable. We can define auxiliary formal model, but not toy. Need assumptions and breakdown. The invariant says never invent fake ratios (Force/Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. We can define formal information measures if clearly auxiliary. Need cite source pages for claims. Maybe use equations:
- Sensor distance: d = (Δt V)/2 [PAGE 3]
- Bounding box output: T: D -> R^4 [PAGE 5]
- PR: PR(τ) = (1/N) Σ 1[||c_i - ĝ_i||_2 ≤ τ] maybe units pixels? But source says threshold. We can define, but note formal metric. NPR: normalized by sqrt(w_g^2+h_g^2). SR: SR(τ)= (1/N) Σ 1[IoU(B_i,G_i) ≥ τ]. IoU = |B∩G|/|B∪G|, dimensionless. F-score = 2 Pr Re/(Pr+Re), breakdown Pr+Re=0. VOT EAO maybe no source formula; avoid or state high-level.
- Information fusion: Let Z be target state, M_R, M_X modality observations. Fusion benefit if I(Z; M_R, M_X) > max(I(Z; M_R), I(Z; M_X)) maybe in bits. But source discusses multimodal vs unimodal; this is formal. Break down if conditional independence? Actually fusion can't decrease mutual information if target state and full joint observation? I(Z; (R,X)) >= I(Z;R) always, mathematically. But tracker performance not equal mutual info; if estimator suboptimal, adding noisy X can hurt. Need formulate estimation error? Maybe risk. Could define Bayes risk under squared loss: R(f)=E[||Z - f(R,X)||^2], optimal f* = E[Z|R,X]. Adding X cannot increase Bayes risk. But learned model can overfit; breakdown when finite sample, distribution shift, low-quality modality. Source says routine fusion may degrade [PAGE 11]. Need formalize: empirical risk vs expected risk. Maybe use domain: P_train vs P_test, modality quality q_t. Singularity when modality quality is near-random, information I=0 but model still uses it. Need exact singularity/breakdown regimes: thermal crossover, RGB unusable at night, event sparse, depth invalid, language misleading, sonar semantic mismatch, unaligned data, missing test-only training.

Need ensure >=1000 words. Need probably >400 in THINK_TRACE. Need XML tags exactly. Need maybe no markdown outside? We can output just XML sections. Need ensure citations [PAGE n] and verbatim quotes. Use quotes from source exactly? Need include verbatim quotes in SOURCE_OPERATORS_AND_EQUATIONS maybe. Need exact quotes with punctuation. We'll cite [PAGE 3] etc.

Need consider user says "DRIVE SOURCE ... PAGES: 20 SOURCE TEXT: ..." Might expect "source operators and equations" extraction. We'll do that.

Need avoid betting lines. Also no "odds" maybe even in phrase? Avoid.

Need produce final with 6 sections. Need word count. Let's draft long. Need ensure each section content.

Potential structure:
<THINK_TRACE>
... >=400 words. Discuss task: deriving formal operators from source, gray-zone audit. Multi-hop: physical modalities -> alignment -> model design -> evaluation -> fusion selective. Mention citations. Need no fake equations. Discuss singularities. Use exact pages. Could be 600 words.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX equations:
1. tracker map: T_RGB: D_RGB -> R^4 [PAGE 5] quote. units: R^4 coordinates pixels? bounding boxes. Assumption 2D single object [PAGE 3].
2. sonar: Δt = t_r - t_m (s), V speed sound m/s, d=(Δt V)/2 m [PAGE 3] quote. d*=project(d). Breakdown: object absorbing, multipath, speed variation, projection rules.
3. wavelengths: RGB 0.38-0.75 µm; T = MWIR:LWIR 3-8 and 8-15 µm [PAGE 3] quote. Units µm, physical regime.
4. event latency: RGB 10-20 ms vs event 1 µs [PAGE 4] quote. event stream voxel grid, stacking. Singularity high-speed motion: frame aliasing; event sparsity.
5. PR/NPR/SR. Provide equations. PR threshold τ in pixels. NPR normalization diagonal length sqrt(w_g^2+h_g^2). SR IoU threshold commonly zero [PAGE 9]. Breakdowns: PR scale sensitive, SR threshold zero trivial? Actually threshold commonly set to zero; but if τ=0, only exact overlap? Usually SR curves at thresholds. We can state.
6. F-score: Pr, Re, F. Breakdown Pr+Re=0.
7. SUTrack equation [PAGE 10] quote. Formal mapping with θ_RGB.
8. Information utility: I(Z;M_R,M_X) bits. Maybe conditional. Need state assumptions and breakdown.
Need cite verbatim quotes for equations. Maybe quote "d = (∆t ∗V)/2" but source uses unicode? We'll quote exactly as provided: "d = (∆t ∗V)/2". Also "d∗=project(d)". "T_RGB : D_RGB →R4" source has DRGB? It says Let TRGB : DRGB →R4. We can use LaTeX. Quote: "Let TRGB : DRGB →R4 denotes an RGB tracker". Need exact. Maybe quote with [PAGE 5]. Also SUTrack quote.
Need formal breakdown regimes: at singularities denominators zero, thresholds. For F-score: if Pr+Re=0. For NPR: if diagonal zero. For distance: V=0 or Δt negative invalid. For thermal: thermal crossover multiple objects same temperature [PAGE 7]. For event: pixel intensity changes +1/-1 [PAGE 4]. For low quality: RGB vs T random noise performance 0.732 vs 0.002 and 0.006 vs 0.378 [PAGE 11]. Need quote exact: "using the less informative modality can yield a performance comparable to random noise (RGB-only vs. T-only: 0.732 vs. 0.002 and 0.006 vs. 0.378 on two cases)." Actually source page 11. Use.

<RETROCAUSAL_GENEALOGY>
Historical lineage: RGB+T surveys [PAGE 2 Table I], RGB+D, RGB+E, etc. Multi-week traps: assuming fusion always helps, copying RGB branch, ignoring physical modality differences, dataset bias long-tail and animal scarcity. Need mention source cites prior surveys. Use [PAGE 2], [PAGE 11]. Need multi-week traps perhaps research program traps: benchmark overfitting, modality alignment assumptions, annotation inheriting RGB causing thermal boundary ambiguity. Cite [PAGE 12].

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock. This is odd. Need interpret as crisis in tracking: target occluded, sensor degraded, nighttime, rapid motion. Habit regression: dense fusion, RGB pre-trained, frame stacking. Counter-trap: discriminative fusion, physics-induced, modality quality gating. Clock: temporal cues, event low latency, online templates, recovery. Need cite pages. Could formulate recursive belief: tracker estimates target state; assumes modality reliability; if wrong, updates. Need no fake equations? Could use formal probability P_t(z_t | observations). But okay.

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. Need veto claims that are physically impossible or invalid. Maybe veto dense fusion when thermal crossover/illumination, event sparsity, depth outdoors? Need proof using source. Physical layers: wavelengths, thermal radiation, sonar speed, depth methods, event latency. Weather: RGB sensitive, T robust but thermal crossover. Veto: fusion cannot compensate if modality has zero mutual info with target under condition. But mathematically joint MI cannot decrease? For estimator maybe. Need proof: If X_t is independent of target given RGB under condition, then I(Z;R,X)=I(Z;R), so no expected information gain; learned fusion can only add variance. This is formal. Breakdown: if conditional independence holds. If X contains noise but model uses it, risk increases. Need cite source low-quality examples [PAGE 11].

<RLVR_COUNTERFACTUAL_VETOES>
3 verifiable RLVR veto scenarios + predictions. RLVR maybe reinforcement learning with verifiable rewards? Need define? Could be "RLVR" as counterfactual veto scenarios. Need produce 3 scenarios with measurable predictions. No betting. Scenarios:
1. Night RGB+T tracking: If RGB photon-starved, T informative. Veto dense equal fusion? Prediction: gating by modality quality improves SR vs dense fusion under night subset. Source says RGB low visibility, T crucial [PAGE 11], but only test set [PAGE 11] prevents training. Verifiable: compare tracker with/without gating on night videos.
2. Thermal crossover: multiple similar temperatures. T unreliable; RGB texture needed. Veto physics-customized T-only branch? Prediction: RGB+selective fusion outperforms T-only or naive fusion on TC attribute. Source: T struggles with thermal cross-over [PAGE 7].
3. RGB+E high-speed motion: event low latency; RGB frame latency 10-20 ms, event 1 µs [PAGE 4]. Veto frame-only at high speed; prediction event branch reduces latency error/ improves SR on fast motion. Or event uninformative if no intensity changes; veto event-only in static scene. Need 3.
Need include predictions and measurable metrics: PR/NPR/SR, F-score, EAO? Source metrics. Use [PAGE 9].

Need ensure overall >=1000 words. Let's target ~2500 words. Need not be too excessive but enough. Need final only XML.

Need verify no forbidden betting lines. Avoid words: spread, total, moneyline, odds. Could use "aggregate" okay? Not betting. Avoid "line" maybe betting line? "ZERO BETTING LINES" means don't mention spreads/totals/moneylines/odds. We can say "baseline" not line. Avoid "odds". "long-tail" okay. "random noise" source.

Need ensure no toy equations. We can include formal equations but not fake ratios. Avoid invented "Force/Fatigue". Use equations from source and standard metrics. For information, need state assumptions. Could be considered invented? It's formal, okay. Need maybe not overdo ungrounded. But requirement asks formal equations. We'll present as "auditing operators" not source if not in source. Need cite source for claims. We can define standard metrics even if source says details in supplementary; okay.

Need exact page markers. Use [PAGE 3], [PAGE 4], etc. For quotes, exact from source. Need be careful with quote text: Some unicode characters. We can quote as provided. E.g. "d = (∆t ∗V)/2" and "d∗=project(d)" [PAGE 3]. "T = [MWIR:LWIR]" [PAGE 3]. "RGB data is sensitive to illumination changes (ILL), whereas T data is not." [PAGE 7]. "T data struggles in the presence of multiple objects with similar temperatures, which is called thermal cross-over (TC)." [PAGE 7]. "fusion may be unhelpful or even harmful when one modality lacks any informative content." [PAGE 11]. "only a test set is provided for RGB+T tracking [38]." [PAGE 11]. "This precludes the training of a discriminate fusion block." [PAGE 11]. Note source spells discriminate not discriminative sometimes. Use exact.

Need maybe include equations in LaTeX. For source operators:
\begin{equation}
\Delta t = t_r - t_m, \quad d = \frac{\Delta t V}{2}, \quad d^* = \text{project}(d)
\end{equation}
Units: Δt s, V m/s, d m. Source quote.
Tracker:
\begin{equation}
T_{\mathrm{RGB}}: \mathcal{D}_{\mathrm{RGB}} \to \mathbb{R}^4, \quad T_{\mathrm{MMVOT}}: \mathcal{D}_{\mathrm{MMVOT}} \to \mathbb{R}^4.
\end{equation}
Units: coordinates pixels? Source not explicitly, but bounding boxes. Assumption: 2D [PAGE 3]. Quote "2-D object tracking - this survey focuses on bounding box-based tracking" [PAGE 3].
SUTrack:
\begin{equation}
T_{\mathrm{SUTrack}} : (D_{\mathrm{RGB}}, D_{\mathrm{MMVOT}}, \theta_{\mathrm{RGB}}) \to \mathbb{R}^4,
\end{equation}
\begin{equation}
T_{\mathrm{Others}} : (D_{\mathrm{MMVOT}}, \theta_{\mathrm{RGB}}) \to \mathbb{R}^4.
\end{equation}
Source quote.

Metrics:
PR(τ) = 1/N sum 1[||c_i - c_i^*||_2 ≤ τ]. Units pixels if coordinates pixels. NPR: divide by sqrt(w_i^{*2}+h_i^{*2}). SR(τ) = 1/N sum 1[IoU(B_i,B_i^*) ≥ τ]. IoU dimensionless. F = 2PrRe/(Pr+Re), singular when Pr+Re=0. Source mentions PR, SR, NPR, Pr, Re, F-score [PAGE 9].
Information:
Let Z_t target state, R_t RGB observation, X_t auxiliary observation. I(Z_t; R_t, X_t) = H(Z_t) - H(Z_t | R_t, X_t), units bits if log base 2. Fusion gain G_t = I(Z_t; R_t, X_t) - max{I(Z_t; R_t), I(Z_t; X_t)}. Breakdown if X_t ⟂ Z_t | R_t or I(X_t;Z_t|R_t)=0. Also if estimator uses wrong weights, empirical risk can increase. Need source says fusion may be harmful [PAGE 11]. Could include Bayes risk:
R^*(f) = E[ℓ(Z_t, f(R_t,X_t))], with squared loss ℓ = ||Z_t - f||^2 m^2 if coordinates meters? For bounding box, loss in pixels? Use generic. But maybe not necessary. Need formal singularity: denominator zero.

Need SOURCE_OPERATORS_AND_EQUATIONS maybe long. Need ensure no equations invented? It's okay.

Potential issue: Need ">= 1,000-WORD DEPTH across these exact XML sections". It might mean total >=1000. Ensure each section enough. THINK_TRACE >=400. We can produce ~3000 words. Need not too long but fine.

Let's draft in final. Need maybe count. We can approximate.

THINK_TRACE: 600-800 words. Let's write detailed. Need gray-zone audit. Discuss source as survey, not empirical. Need multi-hop: modality physics -> data alignment -> model design -> evaluation -> selective fusion. Need mention citations. Need include gray zones: whether fusion always beneficial; dataset bias; annotation ambiguity; missing modality; alignment-free tasks; unaligned CRSOT. Need exact page quotes. Need no fake. Could mention "The paper asks: 'Is multi-modal tracking always guaranteed to provide a superior solution to unimodal tracking...'" [PAGE 1]. Need quote maybe. Good.

SOURCE_OPERATORS_AND_EQUATIONS: 800-1000 words. Include equations and breakdown.

RETROCAUSAL_GENEALOGY: 400-600 words.

RECURSIVE_THEORY_OF_MIND: 400-600.

CROSS_LAYER_VETO_ADJUDICATION: 500.

RLVR_COUNTERFACTUAL_VETOES: 600.

Total ~3000. Good.

Need ensure exact XML tags. Could include line breaks. Need no extra text.

Let's produce. Need be mindful of word "random noise" okay. "baseline" okay. Avoid "line" in betting context? It says never mention spreads, totals, moneylines, or odds. It doesn't ban "baseline" or "timeline". But "zero betting lines" maybe avoid "line" entirely? Could avoid word "line" except in XML? User uses "DRIVE SOURCE". We can avoid "line". Use "pipeline" maybe. Not "baseline"? Fine. Avoid "odds". "long-tail" okay.

Need ensure no "totals" as word. Avoid "total" maybe? The source has "total". But we can avoid. "overall" okay. "aggregate" okay. But "totals" forbidden? It says zero betting lines: never mention spreads, totals, moneylines, or odds. To be safe avoid words: spread, total, moneyline, odds. We may need say "total frames"? Avoid. Use "cumulative" or "aggregate". Also avoid "sum" maybe okay? Totals as noun? Avoid.

Need avoid "line" maybe in "long-tail"? It contains line? no. "pipeline" has line but not betting. To be safe maybe avoid "line" word entirely. But XML tags include? THINK_TRACE no. SOURCE_OPERATORS no. "timeline" maybe contains line but not separate. Could avoid.

Need exact quotes include "test set" etc. Could quote "only a test set is provided" no issue.

Let's draft carefully.

Potential final:

<THINK_TRACE>
This source is a survey... etc.
</THINK_TRACE>

Need citations [PAGE 1], etc. Verbatim quotes maybe in source operators. In think trace can quote too.

Need ensure no equations with fake ratios. Good.

Let's write.

Check word count approximate. I'll produce long but not too huge. Need final only XML. Ensure no markdown code fences? XML tags can be plain. Good.

Let's compose final.
</NATIVE_REASONING>

<THINK_TRACE>
The provided source is an omni-survey of multi-modal visual object tracking, and the deepest reasoning move is to treat the survey not as a collection of claims but as a layered formal system: physical sensing constraints first, then data alignment and annotation, then model design, then evaluation, and finally the meta-question of whether fusion is always beneficial. The paper itself frames this scope explicitly: “MMVOT differs from single-modal tracking in four key aspects, i.e., data collection, modality alignment and annotation, model designing, and evaluation” [PAGE 1]. That sentence gives the analytic skeleton. Any gray-zone audit must therefore begin with physical modality constraints before evaluating algorithmic fusion, because the survey repeatedly ties performance claims to physical properties such as wavelength, thermal emission, depth acquisition, event latency, and sonar time-of-flight.

A first multi-hop derivation is to connect modality physics to failure regimes. The survey states that RGB imaging senses visible wavelengths, specifically “a wavelength between 0.38 and 0.75 um,” and that infrared begins at longer wavelengths, with thermal infrared composed of MWIR and LWIR bands [PAGE 3]. This matters because RGB is described as “sensitive to environmental factors” [PAGE 3], while thermal infrared is “particularly valuable for detecting thermal radiation emitted by objects themselves, thus being robust to environmental conditions” [PAGE 3]. From these physical facts, one can infer the gray-zone condition: at night or under low illumination, RGB may become uninformative, while thermal remains informative; but thermal is not universally superior because “T data struggles in the presence of multiple objects with similar temperatures, which is called thermal cross-over (TC)” [PAGE 7]. Thus, the survey supports a conditional rather than universal benefit of multi-modal fusion.

A second multi-hop derivation is to connect data modality to alignment requirements. The source explicitly separates alignment-free modalities from alignment-required modalities: “RGB+NIR tracking involves a single video stream containing both modalities” and is “alignment-free” [PAGE 4]; RGB+L is “semantically aligned” and not spatially alignable because “the differing data formats (text vs. image) render traditional spatial alignment methods inapplicable” [PAGE 4]; RGB+S has “semantic mismatch” because “RGB captures visual appearance, while S encodes distance information” [PAGE 4]. By contrast, “alignment is essential for the three most widely studied MMVOT tasks: RGB+T, RGB+D, and RGB+E tracking” [PAGE 4]. This distinction creates a gray-zone audit point: fusion models that assume pixel-level correspondence may silently fail when alignment is weak, unaligned, or semantically mismatched. The survey notes CRSOT as an exception, collected “without alignment, aiming to explore fusion strategies under unaligned conditions” [PAGE 4]. Therefore, any model-design claim must be conditioned on whether the input streams are spatially registered, hardware-calibrated, semantically aligned, or intentionally unaligned.

A third multi-hop derivation is to connect annotation to physical ambiguity. The survey observes that MMVOT tasks inherit annotation practices from RGB tracking, but this “does not always align with the physical characteristics of the additional modalities” [PAGE 12]. It gives the example that thermal data “reflects endogenous thermal radiation,” causing “object temperature gradually decreases from the interior to the exterior until reaching equilibrium with the environment,” which leads to “inherently blurred object boundaries in thermal imagery, introducing uncertainty and ambiguity in bounding box annotations” [PAGE 12]. This is a crucial gray zone: bounding-box supervision assumes a crisp object extent, but thermal physics can make the boundary physically ambiguous. Therefore, evaluation may reward annotation conventions more than true tracking capability in certain thermal scenarios.

A fourth multi-hop derivation is to connect evaluation metrics to failure modes. The source defines PR, SR, NPR, precision, recall, F-score, and VOT protocol metrics conceptually, while noting that detailed formulations are deferred to supplementary material [PAGE 9]. The important gray-zone audit is that PR is “sensitive to object size and image resolution” and NPR is introduced as a “normalised version of PR” using the ground-truth diagonal [PAGE 9]. SR uses IoU threshold, and the VOT protocol combines accuracy and robustness into expected average overlap [PAGE 9]. This means that a tracker may improve one metric while failing under another scale-sensitive or robustness-sensitive regime. The survey’s benchmarking results also show that top methods differ across benchmarks, such as LasHeR, DepthTrack, VisEvent, and LaSOT [PAGE 10]. Thus, aggregate ranking can hide modality-specific weaknesses.

A fifth multi-hop derivation is the central rhetorical question: “Is multi-modal tracking always guaranteed to provide a superior solution to unimodal tracking with the help of information fusion, and if not, in what circumstances its application is beneficial” [PAGE 1]. The survey answers this by showing that routine dense fusion can be harmful when one modality lacks informative content. It states: “Routine fusion may inadvertently incorporate misleading or noisy information from the weaker modality, thereby degrading the overall tracking performance, especially in task-specific scenarios where the quality of the respective modalities is highly imbalanced” [PAGE 11]. It also gives empirical illustration: “using the less informative modality can yield a performance comparable to random noise (RGB-only vs. T-only: 0.732 vs. 0.002 and 0.006 vs. 0.378 on two cases)” [PAGE 11]. This is the strongest gray-zone audit result: fusion is not universally monotone-beneficial in learned systems, especially under distribution shift, modality degradation, or missing training data.

A sixth derivation is to connect dataset composition to generalization. The survey reveals “pronounced long-tail distributions” in MMVOT datasets and a “noticeable lack of animal categories when compared with RGB datasets” [PAGE 1]. It later warns that “object categories in existing MMVOT datasets are highly concentrated, often exhibiting pronounced long-tail distributions” and that “the models trained on such a dataset would perform significantly better on that category than on others” [PAGE 11]. This creates a recursive trap: benchmarks can overstate general tracking ability because the training and evaluation distribution is biased. It also creates a physical-application gap: animal tracking is “a common and practical application scenario” but is severely under-represented [PAGE 11]–[PAGE 12]. The gray-zone audit therefore must separate benchmark improvement from category-level generalization.

A final derivation is to connect unified trackers to replay and pretraining. The survey describes SUTrack as using RGB data during training, formulated as “TSUTrack : (DRGB, DMMVOT, θRGB) →R4” and “TOthers : (DMMVOT, θRGB) →R4,” and connects this to replay in continual learning [PAGE 10]. This introduces a temporal-gray-zone: a unified model may retain RGB discriminative power, but the benefit depends on whether the RGB pretraining distribution matches the target domain, whether replay data are sufficiently diverse, and whether modality-specific statistics are preserved. The survey also notes that unified methods can be classified into Uni-A and Uni-B paradigms, with Uni-B training on a mixture of data from all tasks jointly [PAGE 8]. This raises a subtle audit issue: unification may improve transfer, but it may also blur task-specific physical assumptions unless the model has explicit modality-customized components.

Overall, the gray-zone audit converges on one conclusion: the survey’s most rigorous position is conditional. Multi-modal tracking is beneficial when the auxiliary modality provides non-redundant information under the operating condition, when alignment and annotation respect modality physics, and when the fusion mechanism can suppress degraded or misleading inputs. It is risky when fusion is dense, indiscriminate, trained only on common scenarios, or evaluated on long-tail categories that do not reflect the motivating conditions.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source supplies several exact formal operators and physical constraints. The first is the bounding-box tracker abstraction. The survey writes: “Let TRGB : DRGB →R4 denotes an RGB tracker, mapping the RGB input dataset DRGB to bounding boxes in R4” and then generalizes to “TMMVOT : DMMVOT →R4” [PAGE 5]. In LaTeX:

\[
T_{\mathrm{RGB}} : \mathcal{D}_{\mathrm{RGB}} \rightarrow \mathbb{R}^{4},
\qquad
T_{\mathrm{MMVOT}} : \mathcal{D}_{\mathrm{MMVOT}} \rightarrow \mathbb{R}^{4}.
\]

Assumption: the output vector in \(\mathbb{R}^{4}\) encodes a 2-D bounding box, consistent with the survey’s scope: “this survey focuses on bounding box-based tracking” [PAGE 3]. Unit convention: if image coordinates are measured in pixels, then the four components have pixel units; if normalized coordinates are used, they are dimensionless fractions of image width and height. Breakdown regime: the abstraction fails for 3-D tracking, multi-object tracking, or category-specific tracking because the survey explicitly excludes those scopes [PAGE 3].

The second formal operator is sonar distance. The source states: “The time difference between emission and reception, ∆t = tre −tem, is used to calculate the distance d between the sonar sensor and the object, given the known speed of sound, V, as follows: d = (∆t ∗V)/2” and then “d∗=project(d)” [PAGE 3]. In LaTeX:

\[
\Delta t = t_r - t_m,
\qquad
d = \frac{\Delta t \, V}{2},
\qquad
d^{*} = \operatorname{project}(d).
\]

Units: \(t_r\) and \(t_m\) are timestamps in seconds, \(\Delta t\) is in seconds, \(V\) is speed of sound in meters per second, and \(d\) is in meters. The factor \(1/2\) accounts for round-trip propagation. Breakdown regimes: (i) \(\Delta t \leq 0\) is invalid; (ii) multipath reflection violates the single-path assumption; (iii) spatially varying sound speed invalidates a scalar \(V\); (iv) the projection rule \(\operatorname{project}(d)\) may lose metric meaning if the mapping to image space is non-injective. The source also notes that RGB+S does not require conventional spatial alignment because “RGB captures visual appearance, while S encodes distance information. This semantic mismatch precludes meaningful spatial alignment” [PAGE 4].

The third formal operator is spectral band categorization. The source gives: “RGB data is captured by sensing the reflected visible spectrum with a wavelength between 0.38 and 0.75 um” [PAGE 3], and “Near-Infrared (NIR, 0.75–1.4 µm), Short-Wavelength Infrared (SWIR, 1.4–3 µm), Mid-Wavelength Infrared (MWIR, 3–8 µm), Long-Wavelength Infrared (LWIR, 8–15 µm), and Far-Infrared (FIR, 15–1000 µm)” [PAGE 3]. It also states “T = [MWIR:LWIR]” [PAGE 3]. In LaTeX:

\[
\lambda_{\mathrm{RGB}} \in [0.38, 0.75]\,\mu\mathrm{m},
\qquad
\lambda_{\mathrm{NIR}} \in [0.75, 1.4]\,\mu\mathrm{m},
\]
\[
\lambda_{\mathrm{MWIR}} \in [3, 8]\,\mu\mathrm{m},
\qquad
\lambda_{\mathrm{LWIR}} \in [8, 15]\,\mu\mathrm{m},
\qquad
T = \mathrm{MWIR} \cup \mathrm{LWIR}.
\]

Physical assumption: thermal infrared is dominated by emitted thermal radiation rather than reflected visible illumination. Breakdown regime: “thermal cross-over (TC)” occurs when “multiple objects with similar temperatures” confuse thermal appearance [PAGE 7]. Another breakdown is extreme ambient temperature equilibrium, where object-background thermal contrast becomes small.

The fourth formal operator is event-camera latency and event representation. The source says RGB cameras have “relatively high latency (10–20 ms),” while event cameras perceive rapid motions with “very low latency (1 us)” [PAGE 4]. It also says event cameras “record discrete changes in pixel intensity, indicated by positive (+1) or negative (–1) values” [PAGE 4]. In LaTeX:

\[
\tau_{\mathrm{RGB}} \in [10, 20]\,\mathrm{ms},
\qquad
\tau_{\mathrm{event}} \approx 1\,\mu\mathrm{s},
\]
\[
e_i(t) \in \{-1, +1\},
\]

where \(e_i(t)\) denotes the polarity of intensity change at pixel \(i\). The survey further describes aggregation: “the data is stacked to form the t-th event image by aggregating values at the same spatial location across all event slices” [PAGE 4]. Breakdown regimes: (i) static scenes produce sparse or no events, making event data uninformative; (ii) overly long accumulation windows blur fast motion; (iii) overly short windows may produce insufficient signal; (iv) stacking can “neglect fine-grained motion information,” motivating sub-frame splitting [PAGE 7].

The fifth formal operator is evaluation metrics. The source says PR “measures the percentage of accurately tracked frames, where the Euclidean distance between the centres of the ground truth and predicted bounding boxes falls below a predefined threshold” [PAGE 9]. A formal version is:

\[
\mathrm{PR}(\tau)
=
\frac{1}{N}
\sum_{i=1}^{N}
\mathbf{1}
\left[
\left\|c_i - \hat{c}_i\right\|_2
\leq \tau
\right],
\]

where \(c_i\) and \(\hat{c}_i\) are ground-truth and predicted centers, \(N\) is the number of evaluated frames, and \(\tau\) is a distance threshold. Units: if coordinates are in pixels, \(\tau\) is in pixels.

The source says NPR divides the Euclidean distance by the ground-truth diagonal to achieve scale invariance [PAGE 9]. A formal version is:

\[
\mathrm{NPR}(\tau)
=
\frac{1}{N}
\sum_{i=1}^{N}
\mathbf{1}
\left[
\frac{
\left\|c_i - \hat{c}_i\right\|_2
}{
\sqrt{w_i^2 + h_i^2}
}
\leq \tau
\right].
\]

The denominator is dimensionless if \(w_i\) and \(h_i\) have the same units. Breakdown regime: if \(w_i = h_i = 0\), the denominator is zero and the metric is undefined.

The source says SR measures “the percentage of the successfully tracked frames, where the Intersection over Union (IoU) between the ground truth and predicted bounding boxes exceeds a predefined threshold (commonly set to zero)” [PAGE 9]. A formal version is:

\[
\mathrm{SR}(\tau)
=
\frac{1}{N}
\sum_{i=1}^{N}
\mathbf{1}
\left[
\mathrm{IoU}(B_i, \hat{B}_i)
\geq \tau
\right],
\]

with

\[
\mathrm{IoU}(B, \hat{B})
=
\frac{|B \cap \hat{B}|}{|B \cup \hat{B}|}.
\]

IoU is dimensionless. Breakdown regime: if \(B \cup \hat{B}\) has zero area, IoU is undefined. If \(\tau = 0\), the metric becomes permissive unless additional constraints are imposed.

The source also describes long-term metrics: precision \(\mathrm{Pr}\), recall \(\mathrm{Re}\), and F-score [PAGE 9]. A standard formal expression is:

\[
F
=
\frac{2 \, \mathrm{Pr} \, \mathrm{Re}}
{\mathrm{Pr} + \mathrm{Re}}.
\]

Breakdown regime: if \(\mathrm{Pr} + \mathrm{Re} = 0\), the F-score is undefined. Units: \(\mathrm{Pr}\), \(\mathrm{Re}\), and \(F\) are dimensionless probabilities or rates in \([0,1]\).

The sixth formal operator is unified tracking with RGB replay. The source writes:

\[
T_{\mathrm{SUTrack}} : (D_{\mathrm{RGB}}, D_{\mathrm{MMVOT}}, \theta_{\mathrm{RGB}}) \rightarrow \mathbb{R}^{4},
\]
\[
T_{\mathrm{Others}} : (D_{\mathrm{MMVOT}}, \theta_{\mathrm{RGB}}) \rightarrow \mathbb{R}^{4}.
\]

It explains that \(\theta_{\mathrm{RGB}}\) is “a model pre-trained on RGB data” and that SUTrack “fine-tun[es] the RGB pre-trained model, while also incorporating the original RGB data during training,” which “aligns with the concept of Replay” [PAGE 10]. Breakdown regimes: (i) if \(D_{\mathrm{RGB}}\) is distributionally distant from the target RGB domain, replay may preserve irrelevant priors; (ii) if \(D_{\mathrm{MMVOT}}\) has severe modality imbalance, joint training may underweight rare modalities; (iii) if \(\theta_{\mathrm{RGB}}\) is trained on categories absent from the target long-tail distribution, transfer may be biased.

A seventh formal operator is the information-theoretic audit of fusion. This is not a numerical formula supplied by the survey, but it is a formal way to test the survey’s central claim. Let \(Z_t\) be the target state at time \(t\), \(R_t\) the RGB observation, and \(X_t\) the auxiliary observation. Define mutual information in bits:

\[
I(Z_t; R_t, X_t)
=
H(Z_t) - H(Z_t \mid R_t, X_t).
\]

The marginal information values are:

\[
I(Z_t; R_t)
=
H(Z_t) - H(Z_t \mid R_t),
\]
\[
I(Z_t; X_t)
=
H(Z_t) - H(Z_t \mid X_t).
\]

The conditional information gain of \(X_t\) given \(R_t\) is:

\[
I(Z_t; X_t \mid R_t)
=
I(Z_t; R_t, X_t) - I(Z_t; R_t).
\]

Breakdown or singularity regimes: (i) if \(I(Z_t; X_t \mid R_t) = 0\), then \(X_t\) provides no additional information about the target beyond RGB under the assumed distribution; (ii) if \(X_t\) is noisy and the learned fusion policy cannot suppress it, the estimator may have higher empirical risk even though the theoretical mutual information does not decrease; (iii) if training and testing distributions differ, the empirical estimate of \(I\) may not hold. This formalization aligns with the survey’s claim that “fusion may be unhelpful or even harmful when one modality lacks any informative content” [PAGE 11].

The final operator is the discriminative fusion condition. The survey contrasts “Existing Fusion Paradigm” with “Discriminative Fusion Paradigm,” where fusion is “selectively activated based on data quality” [PAGE 10]. A formal gate can be written as:

\[
g_t = \phi(q_t^R, q_t^X),
\qquad
\hat{z}_t =
\begin{cases}
f_{\mathrm{fuse}}(R_t, X_t), & g_t = 1,\\
f_{\mathrm{single}}(\arg\max_{m \in \{R,X\}} q_t^m), & g_t = 0,
\end{cases}
\]

where \(q_t^R\) and \(q_t^X\) are modality-quality estimates, \(g_t\) is a binary fusion gate, and \(\phi\) is a decision rule. Units: \(q_t^m\) may be dimensionless confidence scores in \([0,1]\). Breakdown regimes: (i) if quality estimation is inaccurate, the gate may disable the useful modality; (ii) if one modality is missing, the gate must handle missingness; (iii) if quality scores are trained only on common scenarios, they may fail in task-specific scenarios. The survey notes this difficulty: “in some task-specific scenarios, no corresponding training datasets currently exist for all the tasks. For instance, only a test set is provided for RGB+T tracking [38]. This precludes the training of a discriminate fusion block” [PAGE 11].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The genealogical lineage of the source is explicitly multi-modal, but its conceptual ancestry is RGB-first tracking extended by modality-specific branches. The survey situates MMVOT within “the development of smart cities” and “massive amounts of multi-modal data,” then narrows to visual object tracking as “one of the most critical competences enabling motion perception” [PAGE 1]. This framing creates a retro-causal dependency: smart-city applications justify multi-modal sensing, but the technical field still inherits many assumptions from RGB-only tracking. The survey states that “MMVOT methods inherit many architectural designs and tracking strategies from RGB-only methods” [PAGE 5]. Therefore, the field’s genealogy is not a clean break from RGB tracking; it is a layered inheritance with physical additions.

The first historical layer is RGB+T tracking. The source’s comparison table lists earlier RGB+T surveys and reports, then positions the present survey as covering six modalities: “RGB+T/D/E/L/S/NIR” with 338 references [PAGE 2]. This indicates that RGB+T was the earliest mature multi-modal tracking branch. The physical motivation is nighttime or low-visibility conditions: “task definitions like RGB+T tracking are motivated by specific scenarios such as nighttime, where the RGB modality suffers from low visibility and the T data becomes crucial” [PAGE 11]. The genealogical trap is that the field often treats thermal as a generic enhancement channel rather than a modality with distinct physics, such as thermal crossover and blurred thermal boundaries [PAGE 7], [PAGE 12].

The second historical layer is RGB+D tracking. The survey describes depth acquisition through Time-of-Flight, stereo depth estimation, and structured light [PAGE 3]–[PAGE 4]. It notes that “stereo depth estimation is generally recommended for outdoor scenarios due to its robustness in such environments” [PAGE 4]. This creates a multi-week research trap: depth is often assumed to be uniformly reliable, but depth quality depends on sensor type, lighting, surface reflectance, baseline, and outdoor conditions. The survey’s RGB+D examples include position correction, foreground/background segmentation, occlusion handling, and 3-D perception [PAGE 7]. The genealogical risk is that 2-D bounding-box trackers may import depth as a simple extra channel without modeling depth noise or invalid measurements.

The third historical layer is RGB+E tracking. Event cameras are described as “biologically inspired by neurons” and capable of “very low latency (1 us)” [PAGE 4]. This creates a lineage from frame-based vision to asynchronous event-based perception. The survey notes that event data can be represented as a voxel grid or stacked into an event image [PAGE 4]. A multi-week trap is to treat the stacked event image as if it were an RGB image, thereby ignoring sparsity, polarity, and temporal precision. The survey explicitly warns that stacking continuous event slices “tends to neglect fine-grained motion information” and that sub-frames may better preserve temporal details [PAGE 7].

The fourth historical layer is RGB+L tracking. Language is unique because it is “derived from image data” and provides “richer high-level semantic information” [PAGE 3]. It is also alignment-free in the traditional spatial sense because “linguistic descriptions are generated from RGB images” and “the differing data formats (text vs. image) render traditional spatial alignment methods inapplicable” [PAGE 4]. The genealogical trap here is semantic granularity: the survey says linguistic annotations may describe “the target object in the entire video sequence, specific video segments, or only the initial frame, rather than providing frame-level descriptions,” and that “inaccuracies in the textual descriptions further exacerbate the issue” [PAGE 7]. Thus, RGB+L inherits RGB localization but introduces a new failure mode: misleading or coarse language.

The fifth historical layer is RGB+NIR and RGB+S. RGB+NIR is described as captured by specialized cameras that “adaptively switch between RGB and NIR sensors in response to varying illumination conditions” [PAGE 4]. RGB+S is underwater or sonar-based, with distance information rather than appearance [PAGE 3]–[PAGE 4]. These are less mature branches. The survey says “the maturity of research is very limited” for RGB+NIR and RGB+S, which “constrains in-depth discussion” [PAGE 9]. The genealogical trap is to extrapolate RGB+T or RGB+D design patterns to these modalities without validating the physical assumptions.

A major multi-week trap is the assumption that fusion is always beneficial. The survey challenges this directly: “Current research largely focuses on designing increasingly complex fusion models to boost benchmark performance, often overlooking a more fundamental question, the benefit of fusion in particular circumstances itself” [PAGE 10]. It then shows that “most existing methods apply fusion in a dense manner” under the assumption that “both modalities consistently offer high-quality information beneficial for accurate object localisation” [PAGE 10]. The historical trap is benchmark-driven complexity: researchers add fusion modules, attention blocks, or multi-level interactions, but may not test whether fusion helps when one modality is degraded. The survey’s corrective is the discriminative fusion paradigm, where “fusion is selectively activated based on data quality” [PAGE 10].

Another genealogical trap is dataset bias. The survey states that “object categories in existing MMVOT datasets are highly concentrated, often exhibiting pronounced long-tail distributions” and that “animals are significantly under-represented in current MMVOT datasets” [PAGE 11]. This creates a multi-week trap for generalization: models may appear strong on benchmark categories while failing on rare categories or practical animal tracking. The survey calls for “collecting and curating more multi-modal datasets specifically targeting animal tracking in diverse and challenging environments” [PAGE 12]. The retro-causal lesson is that benchmark success can be an artifact of category distribution rather than true tracking robustness.

The final genealogical trap is annotation inheritance. The survey warns that MMVOT tasks are “generally regarded as downstream extensions of the traditional VOT task,” so annotation protocols are directly inherited, but this “does not always align with the physical characteristics of the additional modalities” [PAGE 12]. Thermal boundaries are the cited example. This is a deep trap because bounding-box supervision is simple and scalable, but it may encode a false precision when the physical signal has fuzzy boundaries. The field must therefore evolve modality-specific annotation strategies, as the survey recommends: “explore modality-specific annotation strategies that better reflect the characteristics of each modality” [PAGE 12].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
A recursive theory-of-mind analysis of the source treats the tracker, the dataset designer, the fusion model, and the evaluator as agents with beliefs about modality reliability. In crisis conditions, each agent’s belief may regress to a habit learned under common scenarios. The survey’s central crisis is modality degradation: “low-quality inputs from one or more modalities can be observed in datasets across a range of tasks, including RGB+E, RGB+L, RGB+D, and RGB+T tracking” [PAGE 11]. The recursive question is whether the system believes the auxiliary modality is still informative when it is not.

The first agent is the RGB-centric tracker. Its habit is to rely on RGB texture and color because “RGB data is known to excel thanks to its rich texture and colour information” [PAGE 7]. In crisis, such as nighttime, this habit becomes a trap. The survey states that RGB+T tracking is motivated by “nighttime, where the RGB modality suffers from low visibility and the T data becomes crucial” [PAGE 11]. If the model continues to privilege RGB because it was trained mostly on daytime or common scenarios, it will misweight the crisis context. The counter-trap is to estimate modality quality dynamically and allow thermal to dominate when RGB is degraded. The clock is also relevant: temporal templates and online adaptation can either stabilize the target or lock onto a wrong appearance. The survey lists temporal strategies such as “maintaining online templates,” “dynamic memory pools,” “cross-frame attention maps,” and “long-term recovery mechanisms” [PAGE 5]. A recursive failure occurs when the temporal memory preserves an outdated target appearance after illumination or temperature changes.

The second agent is the thermal-aware tracker. Its habit is to trust thermal because thermal is “robust to environmental conditions” [PAGE 3]. In crisis, this habit becomes a trap under thermal crossover, where “T data struggles in the presence of multiple objects with similar temperatures” [PAGE 7]. The counter-trap is to recognize that thermal emission does not guarantee unique identity when temperature contrast is low. The model should then consult RGB texture, motion cues, or temporal continuity. The survey supports this with modality-customized architectures: “an ILL branch for RGB and a TC branch for T” [PAGE 7]. The recursive belief update is: if thermal response is ambiguous, lower thermal confidence and increase reliance on RGB or temporal priors. The clock matters because thermal equilibrium may change slowly, while RGB illumination can change abruptly.

The third agent is the event-aware tracker. Its habit is to assume that event streams capture rapid motion with low latency. The survey says event cameras “perceive rapid motions with very low latency (1 us)” [PAGE 4]. In crisis, this habit becomes a trap in static or low-change scenes, because event cameras record “discrete changes in pixel intensity” and may produce sparse or uninformative streams. The counter-trap is to detect event sparsity and fall back to RGB appearance. The survey also notes that stacking event slices can “neglect fine-grained motion information,” so a recursive model must decide whether to stack events into a frame or split them into sub-frames [PAGE 7]. The clock is crucial because event data are asynchronous; the model must align the event interval from \(t-1\) to \(t\) with the RGB frame at \(t\) [PAGE 4]. A failure occurs if the event window is too long, causing motion blur in the event representation, or too short, causing insufficient evidence.

The fourth agent is the language-guided tracker. Its habit is to use semantic descriptions to disambiguate targets. The survey says language offers “richer high-level semantic information” [PAGE 3]. In crisis, this habit becomes a trap when the text is coarse or misleading. The survey gives examples such as “airplane colored in blue and white taking off and flying in the air” or “The basketball player in white who is in front of player in purple” [PAGE 10], but also notes “RGB+L : Misleading Text” as a low-quality scenario [PAGE 10]. The counter-trap is to refine text embeddings, update textual inputs during tracking, or select discriminative linguistic patterns [PAGE 7]. The recursive belief update must distinguish between semantically useful text and text that is overly coarse or incorrect. The clock matters because language may describe the whole video, a segment, or only the first frame; if the target changes appearance, stale language can mislead the tracker.

The fifth agent is the unified multi-modal tracker. Its habit is to share a backbone across tasks and sometimes to train on a mixture of modalities. The survey describes Uni-A and Uni-B paradigms, where Uni-B methods “train on a mixture of data from all the tasks jointly, resulting in unified models that generalise across modalities and tasks” [PAGE 8]. In crisis, this habit becomes a trap if the unified model averages away modality-specific physical differences. The counter-trap is to use modality-specific adapters, task token recognition, or modality-customized branches. The survey notes that SUTrack uses RGB replay and that this “preserves the performance achieved on previous tasks, while acquiring knowledge for new ones” [PAGE 10]. The clock is training-time versus test-time: replay helps if the RGB prior is relevant, but may harm if the test domain is far from the RGB pretraining distribution.

The sixth agent is the evaluator. Its habit is to rank methods by aggregate benchmark metrics. The survey warns that “the improved performance only indicates that multi-modal information is better-used rather than better-fused” [PAGE 12]. This is a recursive evaluator trap: a model may score well because one modality is highly informative, not because fusion is effective. The counter-trap is to measure fusion quality directly, as the survey recommends: “developing metrics, which reflect the relationship between fusion and tracking performance better, is urgently required” [PAGE 12]. The clock is evaluation horizon: short-term tracking may reward reactive fusion, while long-term tracking may require recovery after occlusion or target loss.

The crisis habit regression can be summarized as follows: under common conditions, agents trust dense fusion because benchmarks reward it; under crisis conditions, that trust becomes maladaptive because one modality may be uninformative, misleading, or physically ambiguous. The counter-trap is a recursive quality-aware policy: estimate modality reliability, detect task-specific degradation, and switch between fusion and single-modality inference. The clock is the temporal state: online templates, memory, event latency, and long-term recovery all determine whether the counter-trap succeeds or whether the system locks onto an obsolete belief.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto adjudication asks which claims must be rejected because they violate physical, biomechanical, sensor, or environmental constraints. The source provides enough physical detail to adjudicate several such vetoes.

Veto 1: Universal dense fusion is physically unjustified. The survey states that “most existing methods apply fusion in a dense manner, operating under the assumption that both modalities consistently offer high-quality information beneficial for accurate object localisation” [PAGE 10]. This assumption is physically false in several regimes. In nighttime RGB+T tracking, RGB may be photon-starved while thermal remains informative [PAGE 11]. In thermal crossover, thermal may be ambiguous while RGB texture remains informative [PAGE 7]. In static RGB+E tracking, event data may be sparse because event cameras record intensity changes [PAGE 4]. Therefore, any claim that fusion should be dense at every frame without quality assessment is vetoed. The formal information condition is: if \(I(Z_t; X_t \mid R_t) \approx 0\) or if \(X_t\) is misleading under the current condition, then unconditional fusion has no guaranteed expected benefit and may increase learned estimator variance. The survey’s empirical example supports this: “using the less informative modality can yield a performance comparable to random noise (RGB-only vs. T-only: 0.732 vs. 0.002 and 0.006 vs. 0.378 on two cases)” [PAGE 11].

Veto 2: Thermal-only tracking is physically unsafe under thermal crossover. The survey states that thermal infrared is robust to environmental illumination because it detects emitted thermal radiation [PAGE 3], but it also states that “T data struggles in the presence of multiple objects with similar temperatures, which is called thermal cross-over (TC)” [PAGE 7]. Therefore, any architecture that treats thermal as a universal replacement for RGB is vetoed in scenes with multiple similar-temperature objects. The physical proof is that thermal contrast is proportional to temperature difference and emissivity, not to texture or color. When temperature contrast collapses, the thermal signal no longer uniquely separates the target. The countermeasure is to use RGB texture or motion cues, but only when RGB is not degraded. The survey supports specialized branches: “an ILL branch for RGB and a TC branch for T” [PAGE 7].

Veto 3: RGB-only tracking is physically insufficient in nighttime or low-visibility tasks that motivate thermal fusion. The survey says RGB+T tracking is motivated by scenarios “where the RGB modality suffers from low visibility and the T data becomes crucial” [PAGE 11]. Therefore, a claim that RGB-only tracking suffices for all RGB+T benchmarks is vetoed in task-specific scenarios. The physical reason is that visible imaging depends on reflected visible light in the 0.38–0.75 µm band [PAGE 3]. When illumination is absent or severely reduced, the reflected-light signal collapses. Thermal emission, especially in MWIR and LWIR, can remain informative [PAGE 3].

Veto 4: Depth fusion cannot be assumed valid when depth acquisition physics fail. The survey describes depth from Time-of-Flight, stereo estimation, and structured light [PAGE 3]–[PAGE 4]. Each has physical failure modes. Stereo depth depends on disparity between two views and calibrated baseline parameters; if texture is poor or illumination is poor, correspondence can fail. Structured light depends on a projected pattern and its deformation; if the surface is specular, absorptive, or outside the projector’s range, depth can fail. Time-of-Flight depends on temporal measurement and can suffer from multipath or low signal. The survey notes that “stereo depth estimation is generally recommended for outdoor scenarios due to its robustness in such environments” [PAGE 4], which implies that other depth modalities may be less robust in certain environments. Therefore, unconditional depth fusion is vetoed unless depth validity is checked. Depth can also be used for occlusion handling and foreground/background segmentation [PAGE 7], but only if depth values are reliable.

Veto 5: Event-only tracking is physically insufficient in static scenes. Event cameras record changes in pixel intensity, with positive or negative events depending on intensity increase or decrease [PAGE 4]. If the scene is static and illumination is stable, few events are generated. Therefore, event-only tracking is vetoed when there is insufficient intensity change. The countermeasure is to fuse event data with RGB appearance, but the fusion must account for event sparsity. The survey also notes that event data can be stacked into event images, but stacking may “neglect fine-grained motion information” [PAGE 7]. Thus, event fusion must preserve temporal resolution.

Veto 6: Sonar fusion cannot be spatially aligned as if it were an RGB image. The survey states that RGB+S data has “semantic mismatch” because “RGB captures visual appearance, while S encodes distance information. This semantic mismatch precludes meaningful spatial alignment” [PAGE 4]. Therefore, any architecture that assumes pixel-wise RGB-sonar alignment is vetoed. Sonar images represent distance information after projection, not appearance. The physical operator is \(d = (\Delta t V)/2\), followed by \(d^{*} = \operatorname{project}(d)\) [PAGE 3]. If the projection rule is not carefully defined, the sonar representation may not correspond to RGB spatial semantics.

Veto 7: Language fusion cannot compensate for coarse or incorrect text. Language is semantically aligned because it is generated from RGB images [PAGE 4], but it may be coarse, segment-level, or misleading. The survey lists “RGB+L : Misleading Text” as a low-quality scenario [PAGE 10]. Therefore, any claim that language always improves tracking is vetoed. The physical or informational reason is that text is not a metric sensor; it provides high-level semantics, but its reliability depends on annotation granularity and correctness. The survey recommends refining text embeddings, updating textual inputs, and selecting discriminative linguistic patterns [PAGE 7].

Veto 8: Thermal annotation cannot be assumed crisp. The survey states that thermal imagery has “inherently blurred object boundaries” because temperature decreases from interior to exterior until equilibrium, introducing “uncertainty and ambiguity in bounding box annotations” [PAGE 12]. Therefore, any evaluation that treats thermal bounding boxes as equally crisp as RGB bounding boxes is physically vulnerable. This does not veto thermal tracking, but it vetoes the assumption that annotation noise is negligible.

The final adjudication is that multi-modal tracking is physically justified only when the auxiliary modality has a non-redundant, condition-dependent information source. The survey’s strongest cross-layer proof is the conditional statement: “fusion may be unhelpful or even harmful when one modality lacks any informative content” [PAGE 11]. This is not a betting judgment; it is a formal physical and statistical constraint. The correct design is not dense fusion everywhere, but quality-aware, modality-customized, physically informed fusion.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
The following are three verifiable RLVR-style counterfactual veto scenarios. “RLVR” here means a counterfactual reasoning audit where the veto is rejected if a measurable prediction fails under a controlled test. The predictions use the survey’s metrics, especially PR, NPR, SR, precision, recall, F-score, and VOT-style accuracy/robustness concepts [PAGE 9].

Scenario 1: Nighttime RGB+T tracking with RGB degradation.
Counterfactual: Suppose a tracker uses dense RGB+T fusion at every frame. The veto is that dense fusion is not necessarily superior when RGB is severely degraded and thermal is informative. The physical basis is that RGB depends on visible reflected light, while thermal detects emitted radiation [PAGE 3]. The survey states that RGB+T tracking is motivated by nighttime conditions where “the RGB modality suffers from low visibility and the T data becomes crucial” [PAGE 11].

Verifiable prediction: On a held-out nighttime RGB+T subset, a quality-aware or thermal-dominant fusion policy should achieve higher SR and F-score than dense equal-weight fusion, especially when RGB center-distance PR is low. If the dense fusion policy performs worse or equal to thermal-only, the veto is supported. If dense fusion consistently improves all nighttime cases without quality gating, the veto is weakened.

Formal audit condition: Let \(q_t^R\) be RGB quality and \(q_t^X\) be thermal quality. If \(q_t^R\) falls below a crisis threshold while \(q_t^X\) remains high, then a gate should select thermal-dominant inference. The survey’s discriminative fusion paradigm supports this: “fusion is selectively activated based on data quality” [PAGE 10].

Breakdown regime for the veto: If the nighttime test set is not actually RGB-degraded, or if thermal has low contrast, the veto does not apply. The survey warns that some RGB+T benchmarks lack training data for task-specific scenarios: “only a test set is provided for RGB+T tracking [38]. This precludes the training of a discriminate fusion block” [PAGE 11]. Therefore, the veto is conditional on having a reliable quality estimate or a validation subset.

Scenario 2: Thermal crossover with multiple similar-temperature objects.
Counterfactual: Suppose a tracker trusts thermal because thermal is robust to illumination. The veto is that thermal-only or thermal-dominant fusion can fail when multiple objects have similar temperatures. The physical basis is thermal contrast collapse. The survey states: “T data struggles in the presence of multiple objects with similar temperatures, which is called thermal cross-over (TC)” [PAGE 7].

Verifiable prediction: On a thermal-crossover subset, a model with an RGB texture branch or motion-aware disambiguation should achieve higher precision and lower identity drift than a thermal-only model. If thermal-only performs equally well on crossover cases, the veto is weakened. If RGB-assisted fusion reduces crossover errors, the veto is supported.

Formal audit condition: Let \(C_t\) be the thermal contrast between target and nearby distractors. If \(C_t\) approaches zero, then thermal discriminability decreases. The model should lower thermal confidence and increase reliance on RGB texture, motion, or temporal priors. The survey supports attribute-specific branches: “an ILL branch for RGB and a TC branch for T” [PAGE 7].

Breakdown regime: If RGB is also degraded, the veto becomes more severe: neither modality may provide reliable disambiguation. In that case, the only remaining cues may be temporal motion priors, camera motion compensation, or long-term recovery mechanisms. The survey lists temporal strategies such as dynamic memory pools and long-term recovery mechanisms [PAGE 5]. If those mechanisms are absent, the counterfactual prediction fails because the tracker may lose the target despite correct modality weighting.

Scenario 3: High-speed motion RGB+E tracking with event sparsity or event richness.
Counterfactual: Suppose a tracker uses RGB frames only for fast motion. The veto is that frame-based RGB may be too slow or blurred under rapid motion, while event cameras have much lower latency. The survey states that RGB cameras have latency “10–20 ms,” while event cameras perceive rapid motions with “very low latency (1 us)” [PAGE 4]. It also says event cameras record “discrete changes in pixel intensity” [PAGE 4].

Verifiable prediction: On a high-speed motion RGB+E subset, an event-aware tracker should achieve higher SR or lower center-distance error than an RGB-only or event-ignoring tracker. If the event-aware model improves fast-motion cases but not static cases, the veto is supported. If event data adds no improvement, the veto is weakened.

Formal audit condition: Let \(v_t\) be target angular velocity or pixel displacement rate. When \(v_t\) is high relative to RGB exposure and latency, event information should be weighted more heavily. When \(v_t\) is low and event sparsity is high, RGB appearance should dominate. The survey notes that stacking event slices can neglect fine-grained motion information, so sub-frame event processing may be needed for fast motion [PAGE 7].

Breakdown regime: In static scenes, event data may be sparse, so event-only tracking is vetoed. In scenes with too much event noise, event accumulation may create misleading motion traces. The model must therefore estimate event informativeness. The survey’s low-quality scenario list includes “RGB+E: Uninformative E” [PAGE 10], which directly supports this veto condition.

Additional cross-scenario veto: Dataset long-tail and animal scarcity.
Although the requested number is three, a fourth structural veto is important. The survey states that MMVOT datasets have “pronounced long-tail distributions” and “nearly no presence” of animal categories [PAGE 11]. A verifiable prediction is that models trained on existing MMVOT datasets will show degraded performance on rare animal categories compared with RGB-trained or category-balanced models. If animal-category tracking improves only through additional multimodal data collection, the veto is supported. If benchmark improvements transfer uniformly across categories, the veto is weakened. This veto is important because it challenges the assumption that aggregate benchmark gains imply broad generalization.

The three RLVR counterfactual vetoes therefore share a common formal structure: a modality-specific physical crisis creates a non-redundant information condition; dense or habit-driven fusion fails if it ignores that condition; a quality-aware or physics-customized policy should improve measurable tracking metrics under the predicted crisis. The survey’s own evidence supports these vetoes through its modality physics, low-quality examples, discriminative fusion proposal, and warnings about dataset bias.
</RLVR_COUNTERFACTUAL_VETOES>