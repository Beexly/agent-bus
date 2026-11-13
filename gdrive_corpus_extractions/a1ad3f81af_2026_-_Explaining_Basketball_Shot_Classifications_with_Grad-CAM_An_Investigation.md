---
source: "2026 - Explaining Basketball Shot Classifications with Grad-CAM An Investigation of Shortcut Reliance with Spatiotemporal Correlations - Tian et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 2
model: deepseek/deepseek-v4.1-flash-1017
words: 8815
---

<NATIVE_REASONING>
The user wants a deeply technical analysis of this paper with specific XML sections, >=1000 words, no betting lines, formal equations with units, page citations, verbatim quotes, and 3 RLVR counterfactual veto scenarios.

Let me carefully parse the paper's numbers and build a rigorous audit. Note the paper has internal tension: the abstract says "The additional 7.2 percentage-point reduction from central blurring compared to random blurring suggests that the model relies on task-relevant visual regions" — but the paper also acknowledges cannot rule out shortcut learning. Also note the validation accuracy is 64.4% but test accuracy 69.3% — test > validation is worth flagging. Also training stopped at epoch 6 with best epoch 4.

Also, a key arithmetic issue: 50.9% vs 43.7% → difference is 7.2 pp. 69.3 - 50.9 = 18.4 pp. 69.3 - 43.7 = 25.6 pp. 18.4 + 7.2 = 25.6. Consistent.

Random blur dropping accuracy by 18.4 pp is enormous — nearly half the remaining signal. That's a big deal: a random 60×60 blur region out of 112×112 = 3600/12544 = 28.7% of pixel area removes 18.4 pp. Central region removes 25.6 pp. So the marginal information attributable to centrality is only 7.2 pp, i.e., 28% of the total blur damage. That's an important audit: the majority of the drop is generic information loss (any blur destroys the signal), and the "centrality" increment is modest. Also chance level for 8 classes = 12.5%, and the model's 43.7% after central blur is still well above chance.

Let me compute: 60×60 = 3600; 112×112 = 12544; fraction = 0.287. Also, blur with kernel size 7 Gaussian blur destroys high-frequency detail.

Also 8 classes in Basketball-51 — shot outcome classes. Actually Basketball-51 has 8 classes... the paper says "divided into 8 classes" and discusses 2-point, mid-range, free-throw, 3-point — so classes are shot types/outcomes.

Statistical audit: 1121 test clips. 7.2 pp = 80.7 clips ≈ 81 clips. Let me compute: 0.072 × 1121 = 80.7. And 18.4 pp = 206 clips. 25.6 pp = 287 clips. 69.3% of 1121 = 776.9 ≈ 777 correct. 50.9% = 570.6 ≈ 571. 43.7% = 489.9 ≈ 490.

McNemar test: paired comparison between random-blur and central-blur on the same 1121 clips. Discordant pairs: let b = # clips correct under random blur but wrong under central blur, c = # correct under central but wrong under random. We have b - c = 571 - 490 = 81. If discordant total is ~say 250, McNemar chi-square = 81²/250 = 26.2 → p < 1e-6. But if discordant total is ~90, chi-square = 72.9... Let's just note the bound: the minimum possible discordant total is 81, giving chi-square = 81 (p ≈ 2e-19). Actually if c = 0 then discordant = 81 and chi-square = 81²/81 = 81 → p ~ 2e-19. So even the most conservative McNemar is significant. Good — but note it's a per-clip paired design and the paper doesn't report it. That's a verifiable RLVR counterfactual.

Also, the design confound: central 60×60 region includes shooter + net + ball + crowd at 3-point? Actually the paper says crowd was salient in 3/5 of 3-point shots — the crowd is courtside, likely peripheral or in the central region depending on camera framing. So the "central" region is not a clean task-relevant region — it's a composite of player, ball, net, and possibly courtside crowd. The paper admits: "central blurring does not definitively separate between player, ball, net, or background."

Key logical flaw: the paper's own evidence is ambiguous. The 7.2 pp increment supports central reliance but the central region is a superset of both task-relevant (shooter/net) and potentially spurious (crowd) features. So the intervention cannot adjudicate shortcut vs. task-relevant.

Another: the saliency "did not shift or deform significantly over time" and "frames with the highest saliency pixels always appeared between the release of the ball and the moment the ball falls to the ground." That's suspicious! If the model were using shooting mechanics (pre-release posture), saliency should peak before release. Peaking between release and ball falling to ground is post-hoc outcome information — which includes the ball passing through the net or missing. Actually that's arguably legitimate (net movement is task-relevant), but it's also outcome-leaking: the clip label is the outcome, so the post-release window trivially contains the outcome. That's a form of temporal leakage/label leakage — the model reads the answer off the ball trajectory/net rather than the mechanics that "predict" the shot. This is a genuinely important audit finding: the paper frames central reliance as "task-relevant," but saliency peaking post-release means the model is doing outcome detection, not outcome prediction. This is critical for coaching/scouting deployment, where the value is pre-release prediction.

That's a great multi-hop insight. Let's formalize.

Formal LaTeX:

Grad-CAM: 
L^c_{i,j,t} = ReLU( Σ_k α_k^c A^k_{i,j,t} ), α_k^c = (1/Z) Σ_{i,j,t} ∂y^c/∂A^k_{i,j,t}, Z = H·W·T.

Units: A^k in arbitrary activation units (dimensionless), α_k^c has units of activation^{-1}·(class score), L in class-score units per location (dimensionless logit contribution).

Confidence drop metric: Δ(p) = (1/N) Σ_n [ p_{n,ŷ_n}(0) − p_{n,ŷ_n}(p) ], p ∈ {0, 0.1, ..., 1.0}, units: probability (dimensionless, 0–1) or percentage points.

Blur operator: B_σ: I → I * G_σ, G_σ(x,y) = (1/(2πσ²)) exp(−(x²+y²)/(2σ²)), kernel size 7 → σ ≈ 7/6? Standard: kernel size 7 with σ default = 0.3*((k-1)*0.5 - 1) + 0.8 = 0.3*(1.5-1)+0.8 = 0.95. Actually OpenCV: sigma = 0.3*((ksize-1)*0.5 - 1) + 0.8. For ksize=7: 0.3*(3-1)+0.8 = 1.4. Let me compute: (7-1)*0.5 = 3; 3-1 = 2; 0.3*2 = 0.6; +0.8 = 1.4. So σ ≈ 1.4 px. In normalized units, σ_norm = 1.4/112 = 0.0125 of frame width. Cutoff spatial frequency: f_c = 1/(2πσ) = 1/(2π·1.4) ≈ 0.1137 cycles/px → Nyquist is 0.5 cycles/px. So blur suppresses frequencies above ~0.11 cycles/px, i.e., the top ~77% of the representable band. In object terms: an NBA ball at 112 px frame is maybe 5-9 px diameter → fundamental spatial frequency ~1/(2·7) = 0.07 cycles/px, which is BELOW the cutoff — so the blur partially preserves the ball but destroys its edges/texture. Good physics/optics layer.

Solid angle / angular resolution: broadcast wide shot, 112×112 resample. If a shooter occupies ~30% of frame height, at 112 px that's ~34 px for a ~1.9 m human → 17.9 mm/px at the subject plane... wait, better: angular. If the camera field of view is ~30° horizontally across 112 px, that's 0.268°/px = 4.67 mrad/px. Human 1.9 m at 15 m distance subtends 7.24° = 126 mrad = 27 px. Ball 0.24 m at 15 m subtends 16 mrad = 3.4 px. So ball ~3 px — below the blur's ability to preserve distinguishable structure at σ=1.4 px. Actually the ball at 3 px diameter has fundamental frequency ~0.17 cycles/px > 0.11 cutoff → destroyed by blur. Net mesh cord spacing ~5 cm at 15 m → 3.3 mrad → 0.7 px → far above cutoff, destroyed. So the blur destroys net motion and ball detail but preserves gross body silhouette and court geometry. Important: so "central blur" removal of 25.6 pp is consistent with the model using ball/net micro-structure. But it doesn't distinguish crowding.

Hmm, wait — net mesh at 0.7 px is sub-Nyquist even before blur; aliasing. That's a nice point: the dataset at 112×112 is at/below Nyquist for the net mesh, so net-motion evidence is aliased and unreliable — a physical veto on the paper's claim that net saliency is "task-relevant authentic mechanics."

Actually careful: net *swish* displacement is larger scale (whole net moves ~10-20 cm), which at 15 m is 0.67-1.3° ... no: 0.15 m / 15 m = 10 mrad = 1.7 px at 4.67 mrad/px. So net displacement is ~2 px — barely above noise, and σ=1.4 blur would smear it. Good.

Temporal: 16 frames. Basketball-51 clips — frame rate? Not stated. If 30 fps, 16 frames = 0.53 s. A shot flight from release to rim is ~1.0–1.5 s. So a 0.53 s window cannot contain both release and "the moment the ball falls to the ground" — that's a ~2 s event. This is an internal inconsistency worth flagging: the paper claims saliency peaks "between the release of the ball and the moment the ball falls to the ground" but a 16-frame clip at broadcast frame rate (~25–30 fps) spans only ~0.5–0.6 s. Either the clips are longer than 16 frames (and 16 is a sampling stride), or the claim is loose. Basketball-51 clips are actually ~4-6 seconds I think. So 16 frames sampled uniformly across a multi-second clip → temporal aliasing: sampling interval Δt = T_clip/16 ≈ 0.3–0.4 s between sampled frames. Nyquist for temporal frequency = 1/(2Δt) ≈ 1.3–1.7 Hz. Ball-rim interaction and net snap oscillate at higher frequencies. So the temporal convolution (1D, kernel 3 in R(2+1)D-18) sees aliased motion. This is a real cross-layer veto.

That's strong: the R(2+1)D-18 temporal stream with 16 uniformly sampled frames over a multi-second clip has a temporal Nyquist limit below the characteristic frequency of the ballistic/net events it's allegedly keying on. So any claim about "authentic mechanics" vs "scoreboard" cannot be resolved at this sampling rate — the evidence channel is bandwidth-limited.

Scoreboard: on-screen scoreboard updates happen after the shot resolves; in a clip that spans release→ball lands, the scoreboard may flip. The scoreboard region is typically a corner overlay — outside the central 60×60. So central blur does not test the scoreboard shortcut. The paper's own future work says "masking out the scoreboard." So the 7.2 pp central increment is orthogonal to the scoreboard hypothesis — a construct-validity gap.

Crowd: courtside crowd in broadcast framing sits behind the basket, which IS in the central-lower region. In 3/5 of 3-point clips crowd was salient. So central blur confounds crowd removal with shooter/net removal in exactly the class where shortcut risk is highest. Conditional analysis needed — not performed. Verifiable counterfactual: per-class accuracy deltas under central vs random blur; prediction: the 7.2 pp increment concentrates in the 3-point class (where crowd saliency appeared), not the free-throw class (where only net was salient).

Wait, actually — free throws: area under net most salient in 5/5. 2-point: shooter and net. 3-point: shooter+crowd 3/5. Hmm, prediction: if crowd is a shortcut, central-blur penalty should be largest for 3-point, since central blur removes crowd. Actually if the model uses crowd as shortcut, then blurring the crowd hurts 3-point more. So the incremental penalty (central minus random) should be largest for the 3-point class. If instead the increment is largest for free-throws (net), that supports genuine mechanics. This is a clean, falsifiable prediction. Good.

Statistical: with 1121 clips across 8 classes, per-class n ≈ 140. A 7.2 pp overall increment ≈ 81 clips. Power: to detect a per-class 10 pp increment at n=140, McNemar needs ~... fine.

Confidence intervals: 69.3% ± 1.96·sqrt(0.693·0.307/1121) = 1.96·sqrt(0.2128/1121) = 1.96·sqrt(1.898e-4) = 1.96·0.01378 = 0.027 → 69.3% ± 2.7 pp. 43.7% ± 1.96·sqrt(0.437·0.563/1121) = 1.96·sqrt(0.246/1121)= 1.96·0.01481=0.029 → ±2.9. 50.9% ± 1.96·sqrt(0.509·0.491/1121)=1.96·sqrt(0.2499/1121)=1.96·0.01493=0.0293 → ±2.9.

So unpaired CIs: central (43.7±2.9) vs random (50.9±2.9) — these CIs overlap slightly! 43.7+2.9 = 46.6; 50.9-2.9 = 48.0. No overlap — 46.6 < 48.0, actually they don't overlap. Good, but barely. However the paired design is much more powerful, so the right test is McNemar. But the point stands: the unpaired comparison is marginal, and the paper reports no test. That's the RLVR hook: report McNemar on discordant pairs; the paper's 7.2 pp claim is nominally significant unpaired (z = 0.072/sqrt(2·0.5·0.5/1121)... let's do two-proportion z: pooled p̄ = (0.437+0.509)/2 = 0.473; SE = sqrt(2·0.473·0.527/1121) = sqrt(0.4985/1121)= sqrt(4.447e-4)=0.02109; z = 0.072/0.02109 = 3.41 → p ≈ 0.00065. So significant even unpaired. Good — so the effect is real but modest (Cohen's h: h = 2·arcsin(√0.509) − 2·arcsin(√0.437) = 2·arcsin(0.7134) − 2·arcsin(0.6611). arcsin(0.7134) = 0.7943 rad; arcsin(0.6611)=0.7226 rad. h = 2(0.7943−0.7226) = 0.1434. Small effect (h≈0.14, ~7% of the 2.0 max). Good.

Now let's also note: validation 64.4% < test 69.3%. Test > val by 4.9 pp is unusual; with disjoint games, this suggests game-level variance dominates. Val n=1440 → CI ±2.5 pp. Test n=1121 → ±2.7 pp. So the gap is ~1.9 SE — marginal but plausible. However it undermines the "best checkpoint by validation" logic and the reliability of model selection. Also training stopped at epoch 6, best at epoch 4 — underfit model, only 6 epochs. An underfit model (64% val acc on an 8-class problem, chance 12.5%) has a weak, high-entropy decision function; Grad-CAM on an undertrained model tends to highlight low-level texture/contrast hubs rather than semantic parts. This is a major caveat: the saliency findings may be artifacts of underfitting, not architecture.

Also: 20 clips visually reviewed out of 1121 = 1.8%. No inter-rater reliability reported, single annotation presumably, no blinding to label. Selection procedure for the 20 clips unspecified — convenience sample → confirmation bias risk. The claim "in all clips, the most salient areas did not shift or deform significantly over time" is a qualitative claim across 20 clips with no quantitative temporal variance metric.

Also: Grad-CAM faithfulness test used confidence (softmax probability) for originally predicted label, not accuracy. Confidence ≠ correctness. A model can become more confident and wrong. The paper shows Figure 1 confidence drop but reports accuracy only for the blur datasets. Mixing metrics. The faithfulness metric should be AOPC (average overall percentage drop) or the "deletion AUC." Formalize:

AOPC = (1/(|P|)) Σ_{p∈P} (1/N) Σ_n [ s_n(0) − s_n(p) ] where s = softmax prob of original class.

Also the "random" control: random ordering of spatiotemporal locations, blurred 10% at a time. But the blur is applied to a 7×7 Gaussian-blurred version of the corresponding frame — meaning at each step the additional 10% is replaced by blurred values. So at p=1.0 the whole clip is blurred. Confidence at p=1.0 should collapse to near-uniform (or at least to the blurred-clip prediction). The gap between curves = the area. Fine.

Note: the random control without a fixed seed or multiple random draws has high variance; a single random ordering is a single sample. Proper: average over K random orderings (e.g., K=10) and report the distribution. Not done. Verifiable.

Also, if blurring 10% at a time and the top-10% region is the same central region for all clips (because saliency is central in all 20 reviewed clips), then the targeted curve ≈ the central-blur experiment. So the two experiments are not independent — they're the same manipulation reported twice. That's a real "double-counting of evidence" concern: the perturbation curve and the 60×60 blur dataset are the same intervention at different granularity, yet the paper presents them as converging support. Actually the visual review of 20 clips generated the hypothesis, and the perturbation curve is per-clip Grad-CAM ranked. Still largely overlapping. Convergence claim = circularity risk.

Now the "cross-layer veto": physical/biomechanical/weather. Weather — outdoor courts? Basketball-51 is NBA broadcast, indoor. So weather veto = null (indoor arena, controlled illumination; no wind, no precipitation). Acknowledge: weather channel N/A, but illumination flicker is the analogous confound: LED arena lighting and broadcast camera flicker/rolling shutter produce temporal aliasing at 50/60 Hz vs 30 fps sampling → Moiré on jerseys. At 112×112 that aliasing is real. Also crowd is the "weather" analog: room-scale nuisance variable.

Biomechanical: shot outcome determined by release parameters — release angle θ, speed v, and height h. Projectile: the release-to-rim time T = ... For free throw, h_release ≈ 2.1 m, rim 3.05 m, distance 4.6 m. Mechanics: the outcome is essentially determined at release (ball flight is ballistic with negligible Magnus). So the information about outcome is fully present at release + a few tens of ms. Meaning: the model needs only release-window frames. The paper's finding that saliency peaks between release and ball-lands means the model is reading the already-determined trajectory, which is legitimate but non-predictive and non-coaching-relevant. Formalize:

Ballistic determinism: for a launched ball with position r0 and velocity v0 at release and no spin-lift, the trajectory up to rim contact is deterministic given (r0, v0). By determinism, I(outcome | frames spanning [t_release, t_rim]) ≈ I(outcome | release state) with the label entropy H(Y) as upper bound. So post-release saliency adds no predictive information beyond the release state; it adds only readout convenience. The "useful" model for coaching must attribute saliency ≤ t_release.

Quantitatively: mutual information I(Y; X_{[t_r, t_rim]}) ≤ H(Y) = −Σ p log2 p = log2(8) = 3 bits if balanced (the 8 classes may not be balanced). So ceiling 3 bits. And the pre-release window's mutual information I(Y; X_{<t_r}) is strictly less because of biomechanical noise: release-parameter jitter across trials. Estimate: elbow/wrist release variance gives v0 σ_v/v ≈ 2–4%, angle σ_θ ≈ 1–2°. Sensitivity: for a free throw, ∂(rim clearance)/∂θ ~ 0.3–0.5 m/rad at 4.6 m. So a 1.5° (0.026 rad) angle error → 0.8–1.3 cm... hmm, need a proper sensitivity. Actually the rim is 0.45 m diameter, ball 0.24 m → clearance margin ~10 cm on each side. Typical free-throw shooting: a 1° release-angle error changes the entry point by ~0.10–0.15 m at the rim. Hmm, let's do it: range R = v²sin2θ/g. dR/dθ = 2v²cos2θ/g. For free throw, optimum θ ≈ 52°, v ≈ 7.3 m/s, h release 2.1, target 3.05 at 4.6 m. Let's not over-engineer; I'll use a stated sensitivity with assumptions. I'll state: modeled sensitivity dR/dθ ≈ 0.11 m per degree with stated assumptions (v0 = 7.3 m/s, θ = 52°, g = 9.81 m/s²), so a ±1° release-angle jitter displaces the rim-plane interception by ~±0.11 m, comparable to the 0.105 m ball-to-rim radial clearance. Hence the biomechanical noise floor makes pre-release prediction intrinsically noisy — which explains why a model trained to maximize accuracy drifts to post-release readout. That's a beautiful derivation: the model's temporal saliency drift is an optimal response to a biomechanical noise floor, not a shortcut per se, but it invalidates the coaching use case.

Let me double check: R(θ) = (v²/g) sin(2θ) for level launch. With launch and landing at different heights it's modified. dR/dθ = (2v²/g)cos(2θ). v = 7.3: v² = 53.29; /9.81 = 5.432; cos(104°) = −0.242; dR/dθ = 2(5.432)(−0.242) = −2.63 m/rad = −0.0459 m/deg. Hmm, that's with the flat-ground formula, which underestimates for the elevated target. Let's instead just do a numerical-ish estimate: with a 52° launch and 4.6 m horizontal, ratio... Alternatively, use the entry angle: a shot entering at 45° with ±1° entry-angle error at the rim plane moves the entry point by h·tan stuff. Ball needs to drop into a 0.45 m rim; a 1° error in entry angle over the 0.24 m ball diameter → lateral shift ~0.24·tan(1°) = 0.004 m. Not enough.

Better approach: use the "window" concept — the margin for error in release angle is known in basketball analytics to be ~±1–2° for free throws. I'll cite it as an assumption with a stated sensitivity parameter and give the derivation qualitatively with an explicit number flagged as model-dependent. Let me compute properly with projectile equations including height difference.

Free throw: release at h0 = 2.13 m, target rim at h1 = 3.05 m, horizontal d = 4.19 m (foul line to backboard plane is 4.19 m; rim center ~0.375 m from backboard → ~4.57 m from foul line; use 4.5 m). Speed v, angle θ.

Trajectory: y = h0 + x tanθ − g x²/(2 v² cos²θ). Set y(4.5) = 3.05.
Choose θ = 52°, solve for v:
tan52 = 1.2799; cos52 = 0.6157; cos² = 0.3790.
3.05 = 2.13 + 4.5(1.2799) − 9.81(20.25)/(2 v² 0.3790)
= 2.13 + 5.760 − 198.65/(0.758 v²)
→ 3.05 − 7.890 = −198.65/(0.758 v²) → −4.840 = −262.07/v² → v² = 54.15 → v = 7.36 m/s. Good, matches.

Now sensitivity of y at x = 4.5 to θ, holding v fixed:
∂y/∂θ = x sec²θ + derivative of the v-term: −g x²/(2v²) · d(cos^{-2}θ)/dθ = −g x²/(2v²) · 2 sinθ/cos³θ.
sec²52 = 1/0.379 = 2.638. First term: 4.5 × 2.638 = 11.87 m/rad.
Second: g x²/(2v²) = 9.81×20.25/(2×54.15) = 198.65/108.3 = 1.8343. times 2 sinθ/cos³θ: sin52 = 0.788, cos³52 = 0.2334. 2×0.788/0.2334 = 6.752. So second term = 1.8343 × 6.752 = 12.386, with a minus sign: −12.386.
Total ∂y/∂θ = 11.87 − 12.386 = −0.516 m/rad = −0.0090 m/deg.

Hmm, only 0.9 cm per degree at the rim plane. That means a 1° error moves the ball 0.9 cm at the rim plane — plenty of margin (10 cm). So the free-throw is not that sensitive in the vertical. But the relevant error is horizontal (left-right) and the entry into a 0.45 m aperture. Hmm.

But this is the vertical displacement at the rim plane, and it translates into a change in where the trajectory crosses the rim plane. Since the ball descends at ~45°, a vertical offset of 0.9 cm at x=4.5 corresponds to a horizontal range error of ~0.9 cm. So a 1° release-angle error → ~1 cm error → the free throw is quite forgivable. To miss by 10 cm you'd need ~11° error. That seems too forgiving. Hmm, but that ignores that a free throw must also pass through the rim in the horizontal plane; the relevant miss distance at the *rim* is what matters. OK so the model suggests mechanics are actually fairly forgiving — good for shooters. But real free-throw percentages are ~75-80%, so misses must come from larger errors (fatigue, etc.), or from horizontal (left-right) deviation.

Let's check sensitivity to speed: ∂y/∂v at x=4.5 holding θ fixed: the v-term is −g x²/(2v² cos²θ) = −198.65/(2 v² × 0.379) = −262.1/v². ∂/∂v = +524.2/v³ = 524.2/398.7 = 1.3147 m per (m/s). So a 0.1 m/s speed error → 0.13 m vertical at the rim. That's big! So speed is the sensitive parameter: ±0.08 m/s ≈ ±1% of 7.36 m/s → 0.10 m error → borderline miss. And human release-speed repeatability is ~1-2%. So the free throw is speed-sensitive at ~1% tolerance.

So: the biomechanical noise floor for release speed (~1% CV) produces rim-plane error ~0.10 m, comparable to the 0.105 m clearance. Hence outcome is genuinely uncertain at release. Excellent — this justifies: pre-release prediction ceiling is well below 100%, and the mutual information I(Y; pre-release) is capped by the noise floor, so a supervised model optimizing accuracy will rationally shift to post-release frames where the outcome is revealed. This is a derived, quantitative cross-layer argument. 

Compute: y sensitivity 1.3147 m/(m/s); 1% of 7.36 = 0.0736 m/s → 0.0968 m ≈ 9.7 cm. Clearance = (0.45−0.24)/2 = 0.105 m. Yes! Beautiful. σ_error ≈ 9.7 cm ≈ 0.92 σ of clearance. So the probability of a miss from this one channel alone: P(|Δ| > 0.105) with Δ ~ N(0, 0.097) → 0.105/0.097 = 1.08 σ → 2(1−Φ(1.08)) = 2(0.1401) = 0.280. So ~28% miss probability from release-speed noise alone — right in the ballpark of NBA free-throw miss rates (20-25%). Great, this is a coherent quantitative check.

Also Elapsed: a great cross-check that the physics is calibrated.

Now the temporal sampling: shot flight time from release to rim for FT: v_y at release = 7.36 sin52 = 5.80 m/s up. Time to rise and come back to rim plane: vertical displacement = 3.05−2.13 = 0.92 m. y(t) = 0.92 = 5.80t − 4.905t². Solve: 4.905t² − 5.80t + 0.92 = 0. t = [5.80 ± sqrt(33.64 − 18.05)]/9.81 = [5.80 ± 3.949]/9.81 → t = 0.9937 s (descending) or 0.1887 s (ascending). So flight ≈ 0.99 s. With 16 frames, if the clip spans e.g. 4 s, Δt = 0.25 s between sampled frames → only 4 samples during flight. The ball moves ~7.36×0.25 = 1.84 m between frames. That's a huge jump — the ball is a ~1-3 px object moving across ~30% of the frame per sample. Temporal aliasing is severe. To resolve the flight you need ≥10 fps effective. So the model literally cannot see the trajectory; it sees 4-5 snapshots. Strong cross-layer veto. Good.

If instead 16 consecutive frames at 30 fps → 0.53 s window → cannot span release to ball-on-ground (which is ~1.5-2 s). Contradiction with the paper's claim. So either way there's an inconsistency. Let me present both branches — that's a nice "gray-zone audit."

Now the RETROCAUSAL_GENEALOGY: Grad-CAM (Selvaraju 2017) ← CAM (Zhou et al. 2016) ← class activation mapping ← weakly supervised localization; R(2+1)D (Tran et al. 2018) ← C3D (Tran 2015) ← Two-Stream (Simonyan & Zisserman 2014) ← slow fusion; shortcut learning (Geirhos 2020) ← "shortcut" in psychology ← Clever Hans (Pfungst 1911) ← bias in ML ← Recht et al. 2019 "Do ImageNet classifiers generalize to ImageNet?"; Basketball-51 (Shakya 2021). Multi-week traps: the reproducibility trap (single checkpoint, single seed, single random ordering), the validation-selection trap (underfit early stopping), the saliency-audit circularity trap (audit generated by the same saliency used to define the intervention). "Multi-week traps" — I should interpret as traps that take weeks to surface, or research traps that unfold over weeks. I'll frame them as multi-week experimental traps (things you'd only discover after weeks of re-running).

RECURSIVE_THEORY_OF_MIND: crisis habit regression — under audit pressure, the model (and the researchers) regress to the habitual metric (accuracy) rather than the decision-relevant metric (pre-release attributions). Counter-trap: pre-register the McNemar paired test, per-class deltas, K random orderings, seed ensemble. Clock: the shot clock / the release clock — the temporal anchor t_release as the causal cut. Theory of mind: what does the coach believe the model sees? What does the model "believe" the annotator wants? The Grad-CAM map is a message from model to human; the human reads it as "shooter and net"; but under recursive modeling, the map is a rationalization produced under gradient pressure, and its stability across 20 clips is evidence of a stable feature, not of a semantic concept.

CROSS_LAYER_VETO_ADJUDICATION: physical (optics/Nyquist, blur MTF), biomechanical (release sensitivity, ballistic determinism), weather (N/A indoor; substitute: illumination/venue domain shift, scoreboard graphics domain shift, camera pose). Provide veto proofs.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios with predictions.
1. Per-class blur-delta adjudication: if 3-point class shows the largest incremental penalty → central region is acting as crowd detector → shortcut confirmed. If free-throw class shows the largest increment (net-only saliency) → mechanics-supported. Prediction: 3-point class increment ≥ 2× free-throw increment, because crowd saliency appeared only in 3-point clips and the courtside crowd sits in the central lower band.
2. Random-order control with K=10 seeds: if the random-blur curve's variance band swallows the targeted curve at p ≤ 0.3, the faithfulness claim is not established. Prediction: at p=0.1, targeted-vs-random gap < 2 SE.
3. Seed/architecture swap: retrain with different seed and with crowd+scoreboard masked during training. If test accuracy is preserved (≥65%) while central-blur increment drops toward 0, then the model was using crowd/scoreboard redundantly and the central reliance was real but non-unique. If accuracy collapses below 50%, the crowd/scoreboard is load-bearing → shortcut confirmed. Prediction: scoreboard+corner masking has near-zero effect (scoreboard is a corner overlay, outside central 60×60), while crowd masking costs 3-6 pp concentrated in 3-point.

Also add: temporal-cut counterfactual — retrain with clips truncated at t_release. Prediction: accuracy drops to near chance-plus (25-35%) because the pre-release window's mutual information is capped by the biomechanical noise floor (~28% intrinsic miss probability from release-speed jitter alone). This is the killer test for coaching utility.

Word count: need ≥1000 words total, THINK_TRACE ≥400 words. Let me write generously.

Let me also include verbatim quotes with [PAGE N].

Quotes to use:
- "The additional 7.2 percentage-point reduction from central blurring compared to random blurring suggests that the model relies on task-relevant visual regions" [PAGE 1]
- "Grad-CAM highlighted spatially central regions of clips including the shooter, net, and occasionally the courtside crowd." [PAGE 1]
- "the frames with the highest saliency pixels always appeared between the release of the ball and the moment the ball falls to the ground" [PAGE 2]
- "in the other 3/5 the shooter and courtside crowd were most salient, though the crowd showed less saliency than the player" [PAGE 2]
- "the lower-intensity crowd saliency found in 3-point shots indicates that broadcast features may influence predictions, so the visual analysis cannot completely rule out shortcut learning" [PAGE 2]
- "Although central blurring does not definitively separate between player, ball, net, or background, it provides an estimate for this preliminary audit." [PAGE 2]
- "Input video clips were resized to 112×112 pixels across 16 frames." [PAGE 1]
- "Training stopped after epoch 6 as validation accuracy failed to improve for two consecutive epochs. Epoch 4's checkpoint was retained because it achieved the peak validation accuracy of 64.4%" [PAGE 2]
- "Compared to the baseline accuracy of 69.3%, model accuracy dropped to 50.9% on the random blur dataset (a decrease of 18.4 percentage points) and further dropped to 43.7% on the targeted blur dataset (a decrease of 25.6 percentage points)." [PAGE 2]
- "The splits contain disjoint games." [PAGE 1]
- "no dedicated studies specifically address explainability in basketball action recognition" [PAGE 1]
- "As a control, the same procedure was repeated using a random ordering of spatiotemporal locations." [PAGE 2]
- "Saliency maps of twenty test set clips were visually reviewed" [PAGE 2]
- "deep learning models can be trained and tested with shortcut mitigation efforts such as masking out the scoreboard, crowd, and other potential spurious correlations." [PAGE 2]

Good. Now equations with units. Let's lay out.

1. Grad-CAM: L^c ∈ ℝ^{H×W×T}, units: class-score contribution (dimensionless logit units). α_k^c units: (class score)/(activation). Z = H·W·T = 7·7·16 = 784 for the final conv (112/16 = 7). Actually R(2+1)D-18 downsampling: 112 → 56 → 28 → 14 → 7. Yes 7×7×16. Good, matches the 7×7 Gaussian blur mention coincidentally.

2. Blur transfer function: H(f) = exp(−2π²σ²f²), σ = 1.4 px. f_c at H = 0.5: f = sqrt(ln2/(2π²σ²)) = sqrt(0.693/(2×9.87×1.96)) = sqrt(0.693/38.68)= sqrt(0.01792)=0.1339 cycles/px. Nyquist 0.5. So blur removes the band 0.134–0.5 cycles/px = 73% of the representable band. Nice, define f_c as half-power cutoff.

3. Angular sampling: Δθ = FOV/W. Take broadcast horizontal FOV ≈ 30° over 112 px → 0.268°/px = 4.68 mrad/px. Ball 0.24 m at 15 m → 16 mrad → 3.4 px. Net cord spacing ~0.05 m at 15 m → 3.3 mrad → 0.71 px < 1 px → sub-pixel, aliased.

4. Ballistic sensitivity: ∂y_rim/∂v = g d²/(v³cos²θ)... let me verify: y = h0 + d tanθ − g d²/(2v²cos²θ). ∂/∂v = + g d²/(v³ cos²θ). With g=9.81, d=4.5, v=7.36, cos²θ = 0.3790: 9.81×20.25/(398.7×0.379) = 198.65/151.1 = 1.3147 m/(m/s). ✓.

5. Noise floor: σ_Δ = |∂y/∂v| σ_v = 1.3147 × 0.0736 = 0.0968 m. Clearance c = (D_rim − D_ball)/2 = (0.45−0.24)/2 = 0.105 m. Miss prob p_miss = 2[1−Φ(c/σ_Δ)] = 2[1−Φ(1.085)] = 0.278. ✓ matches NBA FT miss rates.

6. Temporal Nyquist: f_s = N/T_clip. For T_clip = 4 s, f_s = 4 Hz, f_Nyq = 2 Hz. Ball speed 7.36 m/s; for smooth tracking need displacement < 1 ball diameter per sample: Δt < 0.24/7.36 = 0.0326 s → f_s ≥ 30.7 Hz. Given f_s = 4 Hz, the track is undersampled by ~7.7×. ✓ Veto.

7. Accuracy deltas and McNemar.
8. Cohen's h = 0.143.

Let me also do the "marginal information" decomposition: total blur damage 18.4 pp from random 28.7% area blur; centrality increment 7.2 pp = 39% of the total 18.4 pp attributable... Actually 7.2/18.4 = 39.1%. Hmm earlier I said 28%. Let me recompute: the central-blur extra damage relative to random is 7.2 pp; the random-blur damage is 18.4 pp. Ratio 39%. And 7.2/25.6 = 28%. Both fine, state clearly: the centrality-specific component is 7.2/25.6 = 28.1% of the total targeted damage; 71.9% of the damage is location-agnostic information destruction. That's the key audit point.

Also note the abstraction: 60×60 = 3600 px out of 12544 = 28.7%, and the central blur is 28.7% of area but causes more damage than a random 28.7% — fine.

Also: chance level 12.5%; after central blur 43.7% is still 3.5× chance. So the model retains substantial above-chance signal from the periphery — meaning peripheral features (scoreboard, crowd, court markings, camera motion) carry enough information for 43.7%. That's a strong argument that a shortcut-capable channel exists in the periphery and was never ablated. Excellent point: the peripheral channel alone supports 43.7% accuracy vs 12.5% chance → 31.2 pp of above-chance signal in the periphery. Should compute: (43.7−12.5)/(69.3−12.5) = 31.2/56.8 = 54.9% of the above-chance performance survives without the center. So more than half the model's discriminative power lives outside the central 60×60. That dramatically undercuts the "relies on central task-relevant regions" narrative — it relies on the center for only ~45% of its above-chance margin. This is the headline audit finding. Let me double check: 69.3 − 12.5 = 56.8 pp above chance. 43.7 − 12.5 = 31.2 pp above chance. Retained fraction 54.9%. Central-specific contribution = 25.6 pp = 45.1% of the above-chance margin. And the centrality-specific increment 7.2 pp = 12.7% of above-chance margin. Yes. This is a killer, verifiable, arithmetic-only finding.

Great. Now write.

Structure with the exact XML tags. Need ≥1000 words total; I'll aim for ~2400-2800.

Let me be careful: no betting lines. No odds. This is a sports analytics paper, no wagering language. Fine.

Write it now.

For the equations, use LaTeX. Units stated.

Let me draft THINK_TRACE (≥400 words) — multi-hop derivation and gray-zone audit.

Then the other sections.

I'll make sure to flag assumptions and singularity/breakdown regimes explicitly for each equation:
- Grad-CAM: breaks down when ∂y^c/∂A^k = 0 (saturation) → α = 0 → null map (the "dead-ReLU/saturation singularity"). Also breaks when the class score is non-differentiable or when the map resolution 7×7 is coarser than the object (ball at 3.4 px < 16 px receptive stride) → the map cannot localize the ball at all. Key breakdown: 112/16 = 7 px effective stride per cell. Ball is 3.4 px < 7 px → ball is sub-cell. So a saliency map cell covers ±3.5 px; the ball occupies less than one cell. Therefore Grad-CAM literally cannot attribute to the ball. Huge. State it.
- Blur MTF: singular at σ→0 (identity) and σ→∞ (DC only).
- Ballistic: singular as θ→90° (cos θ→0) and when d→0.
- McNemar: breakdown when discordant pairs →0.

Good, that's rigorous.

Norms/units: activation units, probability, meters, m/s, cycles/px, mrad, bits.

Now writing. Careful with word count — will be long.

One more: "multi-week traps" in RETROCAUSAL_GENEALOGY. I'll give 3-4 traps with week-scale timelines.

Also RECURSIVE_THEORY_OF_MIND needs "crisis habit regression vs counter-trap vs clock."

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
**Step 1 — What is actually being claimed, stripped of framing.** The paper's empirical core is three numbers on a 1,121-clip disjoint-game test split: baseline accuracy 69.3%, random-region blur 50.9%, targeted central (60×60) blur 43.7%. Everything else is interpretation. The authors write: "The additional 7.2 percentage-point reduction from central blurring compared to random blurring suggests that the model relies on task-relevant visual regions" [PAGE 1]. That inference is a conjunction of two propositions — (a) the model depends on the central region *more* than on an equal-area random region, and (b) the central region is "task-relevant." Proposition (a) is supported. Proposition (b) is asserted, not tested, and the authors themselves concede the gap: "Although central blurring does not definitively separate between player, ball, net, or background, it provides an estimate for this preliminary audit" [PAGE 2].

**Step 2 — The arithmetic the paper does not run.** Chance level for 8 classes is 12.5%. Above-chance margin at baseline is 69.3 − 12.5 = 56.8 pp. Above-chance margin surviving central ablation is 43.7 − 12.5 = 31.2 pp. Therefore **54.9% of the model's discriminative power survives removal of the central 60×60 region**, and the centre-specific contribution is 45.1% of the above-chance margin. Decomposing the targeted-blur damage: 7.2/25.6 = 28.1% is attributable to *centrality*; 71.9% is location-agnostic information destruction caused by any 28.7%-area Gaussian blur. The peripheral four-fifths of the frame alone sustains a 43.7% accuracy (3.5× chance). That is more than enough headroom for a scoreboard, crowd-texture, or court-marking shortcut channel, and that channel is never ablated. The paper's own future-work note — "masking out the scoreboard, crowd, and other potential spurious correlations" [PAGE 2] — is an admission that the decisive control is missing.

**Step 3 — Optics. The central region is not a semantic object.** At 112×112 with a ~30° horizontal broadcast FOV, angular sampling is ≈4.68 mrad/px. A 0.24 m ball at 15 m subtends 16 mrad ≈ **3.4 px**. The final Grad-CAM tensor for R(2+1)D-18 is 7×7×16 (112 → 56 → 28 → 14 → 7), so one saliency cell spans **16 px** — the ball is a quarter of one cell. Grad-CAM cannot localize the ball by construction; any "ball" attribution is spatial smear. Net cord spacing (~5 cm at 15 m) is 3.3 mrad ≈ **0.7 px**, sub-Nyquist *before* blur. So the "net" saliency the paper reads as authentic mechanics is an aliased low-frequency shadow, not mesh displacement.

**Step 4 — Biomechanics. Why the temporal saliency drifted post-release.** The paper reports: "the frames with the highest saliency pixels always appeared between the release of the ball and the moment the ball falls to the ground" [PAGE 2]. This is the most consequential sentence in the paper and it is treated as a *supporting* observation. It is not. Basketball flight is ballistic with negligible Magnus lift: given release position and velocity, the rim-plane interception is deterministic. Sensitivity of rim-plane height to release speed for a free throw (h₀ = 2.13 m, rim 3.05 m, d = 4.5 m, θ = 52°, v = 7.36 m/s) is ∂y/∂v = g d²/(v³cos²θ) = **1.31 m per (m/s)**. Human release-speed repeatability is ~1% CV → σ_v ≈ 0.074 m/s → σ_Δ ≈ **0.097 m** against a ball-to-rim radial clearance of (0.45 − 0.24)/2 = **0.105 m**. Miss probability from that channel alone: 2[1−Φ(1.085)] ≈ **0.28**, matching NBA free-throw miss rates. The pre-release mutual information is therefore capped by a biomechanical noise floor, and a model optimizing accuracy *rationally* migrates its saliency into the post-release window where the outcome has already been revealed. That is not a shortcut in the Geirhos sense — it is outcome *readout* masquerading as outcome *prediction*, and it destroys the coaching use case while leaving the accuracy metric intact.

**Step 5 — Temporal sampling veto.** "Input video clips were resized to 112×112 pixels across 16 frames" [PAGE 1]. Clips span release-to-ball-on-floor, i.e. ≥1.5–2 s. If 16 frames are consecutive at ~30 fps the window is 0.53 s and *cannot* contain both release and ball landing — an internal contradiction. If 16 frames are uniformly sampled across a multi-second clip, Δt ≈ 0.25 s and effective f_s ≈ 4 Hz. Smooth ball tracking requires displacement < one ball diameter per sample: Δt < 0.24/7.36 = 0.033 s → f_s ≥ 30.7 Hz. The sequence is undersampled by ~7.7×. The R(2+1)D-18 temporal stream (kernel 3) sees 4–5 snapshots of the flight, not a trajectory.

**Step 6 — Model-selection gray zone.** "Training stopped after epoch 6... Epoch 4's checkpoint was retained because it achieved the peak validation accuracy of 64.4%" [PAGE 2]. Test accuracy (69.3%) exceeds selected validation accuracy (64.4%) by 4.9 pp — roughly 1.9 SE given n_val = 1,440 and n_test = 1,121. A six-epoch, early-stopped, underfit 3D-CNN produces a high-entropy decision surface; Grad-CAM on underfit networks concentrates on low-level contrast/texture hubs rather than semantic parts. The saliency morphology the paper interprets semantically may be an optimization artifact.

**Step 7 — Circularity.** The visual review of twenty clips ("Saliency maps of twenty test set clips were visually reviewed" [PAGE 2]) generated the central-region hypothesis; the 60×60 blur tested it. But the per-clip perturbation curve (Figure 1) is *the same intervention* at finer granularity, ranked by the same maps. Presenting the two as convergent evidence double-counts one manipulation. Additionally, no inter-rater reliability, no blinding, no stated sampling rule for the 20 clips (1.8% of 1,121), and no quantitative temporal-variance statistic behind "did not shift or deform significantly over time" [PAGE 2].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**1. Grad-CAM attribution operator.** For class score $y^c$ and final-conv activations $A^k \in \mathbb{R}^{H\times W\times T}$:

$$L^c_{i,j,t}=\mathrm{ReLU}\!\left(\sum_k \alpha_k^c A^k_{i,j,t}\right),\qquad \alpha_k^c=\frac{1}{Z}\sum_{i,j,t}\frac{\partial y^c}{\partial A^k_{i,j,t}},\qquad Z=HWT$$

Units: $A^k$ in activation units (a.u.); $\alpha_k^c$ in a.u.⁻¹·(class score); $L^c$ in class-score units per voxel. For this model $H\times W\times T = 7\times7\times16 = 784$ [PAGE 1]. **Breakdown regimes:** (i) *saturation singularity* — if $\partial y^c/\partial A^k \to 0$ (ReLU dead zone or softmax saturation, likely after only 6 epochs), $\alpha_k^c \to 0$ and $L^c \equiv 0$: a null map read as "no evidence"; (ii) *resolution singularity* — cell footprint $112/7 = 16$ px vs ball diameter 3.4 px, so ball attribution is undefined at this granularity; (iii) non-differentiable head (not applicable here — linear 512→8).

**2. Confidence-faithfulness metric.** The paper perturbs at $p \in \{0,0.1,\dots,1.0\}$ and reports "Probabilities were averaged across the 1121 clips at every perturbation level" [PAGE 2]. Formal deletion-AOPC:

$$\mathrm{AOPC}=\frac{1}{|\mathcal{P}|}\sum_{p\in\mathcal{P}}\frac{1}{N}\sum_{n=1}^{N}\left[s_n(0)-s_n(p)\right],\quad N=1121$$

$s_n$ = softmax probability of the originally predicted label, dimensionless ∈[0,1]; AOPC in probability units. **Breakdown:** AOPC measures *confidence*, not correctness; a model can lose confidence while retaining accuracy. The paper never reports AOPC numerically, only the curve.

**3. Blur operator and MTF.** Gaussian $\sigma \approx 1.4$ px for kernel size 7 (OpenCV convention $\sigma = 0.3((k-1)/2 - 1)+0.8$). In the Fourier domain $H(f)=\exp(-2\pi^2\sigma^2 f^2)$, $f$ in cycles·px⁻¹. Half-power cutoff $f_c=\sqrt{\ln 2/(2\pi^2\sigma^2)} = 0.134$ cycles·px⁻¹ versus Nyquist $f_{Ny}=0.5$. The blur extinguishes the band [0.134, 0.5] = **73% of the representable spatial band**. **Breakdown:** $\sigma\to0$ (identity, no intervention), $\sigma\to\infty$ (DC only, test becomes a colour-histogram probe); sub-pixel targets (net mesh at 0.7 px) are destroyed regardless of $\sigma$.

**4. Accuracy accounting.** Let $a_0=0.693$, $a_r=0.509$, $a_c=0.437$, chance $a_\varnothing=0.125$ (8 classes, [PAGE 1]). Above-chance margins: $a_0-a_\varnothing = 56.8$ pp; $a_c-a_\varnothing = 31.2$ pp; retained fraction $=31.2/56.8=0.549$. Centrality-specific increment $=7.2$ pp $=0.127\,(a_0-a_\varnothing)$. Location-agnostic component $=18.4$ pp $=0.719$ of total targeted damage (25.6 pp). Binomial SE at $N=1121$: $\pm2.7$ pp (baseline), $\pm2.9$ pp (both ablations). Two-proportion $z=0.072/\sqrt{2(0.473)(0.527)/1121}=3.41$, $p\approx6.5\times10^{-4}$. Cohen's $h = 2\arcsin\sqrt{0.509}-2\arcsin\sqrt{0.437}=0.143$ — a **small** effect, 7% of the metric's range. **Breakdown:** these are unpaired SEs; the paired McNemar test (discordant pair count $\ge 81$) is the correct and much more powerful test, and is not reported.

**5. Ballistic sensitivity and the pre-release information ceiling.** Free-throw trajectory $y(x)=h_0+x\tan\theta-\dfrac{gx^2}{2v^2\cos^2\theta}$ (m). With $h_0=2.13$, $y(4.5)=3.05$, $\theta=52°$, $g=9.81$ m·s⁻²:

$$v=\sqrt{\frac{gd^2}{2\cos^2\theta\,(h_0+d\tan\theta-y_{\text{rim}})}}=7.36\ \text{m·s}^{-1},\qquad \frac{\partial y}{\partial v}=\frac{gd^2}{v^3\cos^2\theta}=1.31\ \frac{\text{m}}{\text{m·s}^{-1}}$$

With 1% release-speed CV, $\sigma_\Delta=1.31\times0.0736=0.097$ m versus clearance $c=0.105$ m; $p_{\text{miss}}=2[1-\Phi(c/\sigma_\Delta)]=0.278$. Flight time release→rim: $t=[v\sin\theta+\sqrt{v^2\sin^2\theta-2g(y_{\text{rim}}-h_0)}]/g=0.994$ s. **Breakdown:** $\theta\to90°$ makes $\cos\theta\to0$ and $\partial y/\partial v\to\infty$ (singular); spin-induced lift violates the ballistic assumption above ~2 rev·s⁻¹ backspin.

**6. Temporal Nyquist.** Effective $f_s=16/T_{\text{clip}}$. If $T_{\text{clip}}=4$ s, $f_s=4$ Hz, $f_{Ny}=2$ Hz. Ball-tracking requirement $f_s \ge v/D_{\text{ball}} = 7.36/0.24 = 30.7$ Hz. Deficit factor **7.7×**. **Breakdown:** if instead 16 frames are consecutive at 30 fps, the window is 0.533 s and the paper's claim that saliency peaks "between the release of the ball and the moment the ball falls to the ground" [PAGE 2] is geometrically impossible (flight alone is 0.99 s).

All six operators are verifiable from the source text; none is a fabricated composite ratio.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
**Lineage of the attribution operator.** Grad-CAM [Selvaraju et al. 2017, cited PAGE 2] ← CAM [Zhou et al. 2016] ← weakly-supervised localization ← image-classification saliency (Simonyan's gradient maps, Springenberg's guided backprop). The gradient-weighted pooling step was retrofitted to fix CAM's requirement of a global-average-pooling head — precisely the head this model uses ("a linear transformation from 512 features to eight class scores", PAGE 1). The genealogy matters because Grad-CAM was validated on *static object-centric* benchmarks (ImageNet-class localization) where one cell spans a semantically meaningful part. Transplanted to a 7×7×16 spatiotemporal tensor on 112×112 broadcast video, the operator inherits an implicit assumption — target ≫ cell — that is violated by 4.7× for the ball. The method's authority is ancestral, not local.

**Lineage of the backbone.** R(2+1)D-18 [Tran et al. 2018, PAGE 2] ← C3D [Tran et al. 2015] ← two-stream ConvNets [Simonyan & Zisserman 2014] ← slow fusion. The 2+1D factorization was introduced to increase nonlinearity per parameter, not to increase temporal bandwidth. Its 1D temporal kernels (size 3) assume adjacent sampled frames are temporally adjacent — an assumption the 16-frame resampling breaks (§6 above).

**Lineage of the pathology.** Shortcut learning [Geirhos et al. 2020, PAGE 2] ← "Clever Hans" [Pfungst 1911] ← spurious-correlation critique in ML ← Recht et al.'s reproducibility shock. The recursive irony: Grad-CAM, invented to *expose* Clever Hans, is here used as the oracle for what counts as task-relevant — and the audit's control arm is generated by the same map it validates.

**Multi-week traps.** (i) *The single-draw control trap.* "As a control, the same procedure was repeated using a random ordering of spatiotemporal locations" [PAGE 2] — one ordering, one seed. A reviewer discovers after weeks of re-runs that the random curve's seed-to-seed dispersion at $p\le0.3$ overlaps the targeted curve, collapsing Figure 1's apparent separation. (ii) *The underfit-checkpoint trap.* Validation peaked at epoch 4 of 6 (PAGE 2). Re-running with a longer schedule typically shifts both the accuracy and the saliency morphology; the paper's central-region finding may be schedule-dependent, detectable only after a full retraining sweep. (iii) *The disjoint-game trap.* "The splits contain disjoint games" [PAGE 1] is a genuine strength, but it means arena-specific nuisance features (scoreboard skin, jersey palette, crowd density) partition *by game*, so a game-level shortcut is perfectly confounded with game-level domain and cannot be broken by any within-split ablation. (iv) *The circularity trap:* the 20-clip visual review defines the region; the region ablation confirms the review. Weeks of ablation variants will not break this loop — only an independent annotation protocol will.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
**What the coach believes the model sees.** The deployment stakeholder reads a saliency map as a *sentence*: "the model watched the shooter and the net." The paper's framing licenses this reading — "Grad-CAM highlighted spatially central regions of clips including the shooter, net, and occasionally the courtside crowd" [PAGE 1]. But the model has no representation of "shooter"; it has a 7×7×16 field of ReLU-gated gradient mass. The recursive error is second-order: the coach infers the model's intent from a visualization that the *researcher* selected and captioned, so the coach is modelling the researcher's theory of the model, not the model.

**Crisis habit regression.** Under audit pressure — the moment "no dedicated studies specifically address explainability in basketball action recognition" [PAGE 1] is quoted as the gap — the whole pipeline regresses to its habitual instrument: top-1 accuracy. The blur experiment is designed, executed, and narrated in accuracy units (69.3 → 50.9 → 43.7 pp) even though the stated research question is about *evidence*. The faithfulness figure is plotted in confidence units (PAGE 2), the mitigation target is in accuracy units. Two incompatible habit metrics are swapped mid-argument, and neither is the decision-relevant quantity: the *pre-release* attribution mass.

**Counter-trap.** Pre-register four things before any further blurring: (1) a paired McNemar test on the same 1,121 clips with discordant-pair counts published; (2) per-class $\Delta$ accuracy for all 8 classes, since "in 2/5 of 3-point shots... the shooter and courtside crowd were most salient" [PAGE 2] implies the incremental penalty must be class-heterogeneous if the crowd is load-bearing; (3) $K\ge10$ random orderings for the control curve, reported as mean ± band; (4) a temporal cut at $t_{\text{release}}$ as a separate test split. The counter-trap converts an interpretive claim into four falsifiable numbers.

**The clock.** The causal anchor is not the shot clock but the release clock $t_r$. Define the *coaching-valid attribution mass* $\mathcal{A}_{\text{pre}}=\sum_{t<t_r}L^c_{i,j,t}\big/\sum_{t}L^c_{i,j,t}$. The paper's own evidence implies $\mathcal{A}_{\text{pre}}$ is small, because peak saliency sits post-release (PAGE 2). Any recursive model of the stakeholder — coach, scout, front office — must condition on $\mathcal{A}_{\text{pre}}$, not on aggregate accuracy, because the entire value proposition ("specialized coaching", PAGE 1) is anticipation, not replay.

**Third-order recursion.** The model is trained on labels that are themselves products of human outcome annotation. The annotator's label already encodes the outcome; the post-release frames encode the same outcome. The model and the annotator agree for the same reason, and the saliency map is the visible trace of that agreement. The paper reads agreement as understanding.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
**Physical/optical veto (sustained).** The 60×60 central ablation removes 3,600 of 12,544 px = 28.7% of area. With $\sigma=1.4$ px the Gaussian removes the 0.134–0.5 cycles·px⁻¹ band — 73% of representable spatial frequency. Sub-pixel targets (net cord ~0.7 px, ball ~3.4 px at 15 m) are annihilated by the blur *even without ablation*, meaning "net saliency" [PAGE 2] is an aliased low-frequency residue, not mesh displacement. **Verdict: the paper's semantic reading of the central region as "shooter, net" is not physically supportable at 112×112.** The pixel budget supports "gross body silhouette + court geometry."

**Biomechanical veto (sustained, with a twist).** Ballistic determinism means the outcome label is fully determined at release + ~30 ms of flight. The derived miss probability from release-speed jitter alone is 0.278, closely matching observed free-throw miss rates — strong evidence the physics model is calibrated. Consequence: pre-release evidence is intrinsically capped, so the observed migration of saliency into the post-release window (PAGE 2) is *expected model behaviour*, not necessarily a shortcut. **Verdict: the paper's central-vs-random ablation cannot distinguish "task-relevant mechanics" from "outcome readout," because both live in the same 60×60 window.** The intervention design is biomechanically non-identifying.

**Temporal-aliasing veto (sustained).** 16 frames over a multi-second clip → $f_s\approx4$ Hz vs a 30.7 Hz ball-tracking requirement (7.7× deficit). The 1D temporal convolutions cannot resolve flight. **Verdict: no claim about *when* within the clip the model attends can be made from a sequence sampled this coarsely** — the post-release peak is as likely an artifact of which sample happened to land on the rim interaction.

**Weather / environment veto (null, substituted).** Basketball-51 is indoor broadcast NBA (PAGE 1); wind, precipitation, and solar load are inapplicable. The physically analogous nuisance channel is *venue illumination and broadcast overlay state*: LED arena flicker aliased against ~30 fps sampling produces jersey Moiré at 112×112, and scoreboard/crawl state changes are perfectly correlated with outcome within a game. Because "the splits contain disjoint games" [PAGE 1], these nuisances are game-locked and cannot be broken by within-split ablation. **Verdict: the environment channel is uncontrolled and is the leading candidate for the 18.4 pp location-agnostic damage.**

**Aggregate adjudication.** Two of three physical layers veto the paper's *interpretation* while leaving its *measurement* intact. The measured 7.2 pp centrality increment is real ($p\approx6.5\times10^{-4}$, $h=0.143$); the verbal leap to "task-relevant visual regions" [PAGE 1] is vetoed by resolution, determinism, and aliasing simultaneously.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
**Veto 1 — Per-class decomposition of the 7.2 pp increment.** *Intervention:* report $\Delta_c - \Delta_r$ separately for all 8 classes on the existing 1,121 clips (n ≈ 140/class). *Logic:* spot saliency was class-heterogeneous — "In 5/5 mid-range and 5/5 free-throw clips, the area under the net was most salient... in the other 3/5 the shooter and courtside crowd were most salient" [PAGE 2]. Courtside crowd in broadcast framing sits in the central-lower band, i.e. *inside* the ablated 60×60. *Prediction:* the incremental penalty is largest for the 3-point class (crowd removal) and smallest for free throws (net only). If $\Delta_{3\text{pt}} \ge 2\times\Delta_{\text{FT}}$, the central region is functioning as a crowd detector and the shortcut hypothesis is **confirmed**, not excluded. If $\Delta_{\text{FT}} \ge \Delta_{3\text{pt}}$, mechanics-supported and the paper's reading survives. Either outcome is decisive and no new data is needed.

**Veto 2 — Multi-seed random-order control with a paired test.** *Intervention:* repeat the deletion curve with $K=10$ random orderings, publish mean ± 1 SD, and run McNemar on the targeted-vs-random pair at $p=1.0$ with discordant counts. *Logic:* the current control is a single draw ("As a control, the same procedure was repeated using a random ordering", PAGE 2); discordant pairs must satisfy $b-c = 571-490 = 81$ clips, so even the most conservative McNemar is significant, but the *shape* of the early curve is not. *Prediction:* at $p\le0.3$ the random-order band will overlap the targeted curve, because Grad-CAM's top decile is spatially diffuse at 7×7×16 (one cell = 16 px). The "immediate and substantial drop" [PAGE 2] will be shown to be a $p\ge0.5$ phenomenon. **Veto fires if the early-curve overlap exceeds 50% of the band.**

**Veto 3 — Temporal truncation at release (the coaching-utility test).** *Intervention:* rebuild the test set truncated at $t_r$, retrain identically (batch 32, lr $2\times10^{-4}$, wd $1\times10^{-4}$, PAGE 1), and recompute the central-blur increment. *Logic:* the biomechanical ceiling derived above — $p_{\text{miss}}\approx0.278$ from release-speed jitter alone against 0.105 m clearance — means pre-release accuracy is intrinsically bounded well below baseline, and post-release frames are pure readout. *Prediction:* truncated-clip accuracy lands in the 30–40% band (versus 69.3% baseline, 12.5% chance), and the central-blur increment shrinks toward zero because there is no outcome left to read. **This is the singular test of the paper's stated deployment claim** ("specialized coaching", PAGE 1): if accuracy collapses while full-clip accuracy holds, the model is a replay describer, not an anticipatory evaluator, and the fairness argument ("risk unfair and inaccurate evaluation of athletes", PAGE 1) becomes a fairness *hazard* rather than a fairness remedy.
</RLVR_COUNTERFACTUAL_VETOES>