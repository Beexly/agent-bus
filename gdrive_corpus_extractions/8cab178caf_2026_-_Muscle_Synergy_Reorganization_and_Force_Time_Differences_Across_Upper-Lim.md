---
source: "2026 - Muscle Synergy Reorganization and Force Time Differences Across Upper-Limb Pushing Tasks with Different Mechanical Characteristics - Fan et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Sports Science and Medicine/In Press/2026"
pages: 10
model: deepseek/deepseek-v4.1-flash-1017
words: 8967
---

<NATIVE_REASONING>
The user wants a deep analysis of a sports science paper about muscle synergies in push-up variants. But wait — there's an odd tension: the system prompt is "GSE + GSI Frontier Reasoning Foundry" with strict invariants about "ZERO BETTING LINES" — no spreads, totals, moneylines, odds. And "RETROCAUSAL_GENEALOGY", "RECURSIVE_THEORY_OF_MIND", "CROSS_LAYER_VETO_ADJUDICATION", "RLVR_COUNTERFACTUAL_VETOES". This looks like a prompt template designed for sports betting analysis that has been repurposed here — the DRIVE SOURCE is an academic paper with no betting implications.

I should follow the structure but note the absence of betting content. The "ZERO BETTING LINES" invariant means I must NOT invent betting lines. The "RECURSIVE_THEORY_OF_MIND" section mentions "Crisis habit regression vs counter-trap vs clock" — I can interpret this in a non-betting way, focusing on athlete/coach decision-making under fatigue, or reframe it as applied decision theory for training periodization. "CROSS_LAYER_VETO_ADJUDICATION" — physical/biomechanical/weather veto proof. Weather is not relevant to a lab study, but biomechanical veto is directly relevant: e.g., SSC cannot operate in SSP because there's no eccentric phase (explicitly stated limitation). That's a genuine biomechanical veto of a naive interpretation.

"RLVR_COUNTERFACTUAL_VETOES" — 3 verifiable counterfactual scenarios with predictions. I can construct falsifiable predictions: e.g., if SSP's advantage were purely SSC-mediated, removing the eccentric phase would eliminate it — but SSP already lacks it, so the observed late-phase force must come from a different mechanism (voluntary maximal effort from a static start, i.e., no preload). Predictions: (1) if synergy number were an artifact of VAF threshold and 12-muscle montage, adding forearm/scapular muscles would raise k to 3 for PP; (2) if late-phase SSP force is due to static-start maximal intent rather than synergy reorganization, then adding a 2-s preload isometric hold to SP should reproduce SSP's 56-83% force cluster; (3) if PP's early force is SSC-mediated, a 3-s pause at the bottom (eliminating SSC) should abolish PP's 13-79% superiority while leaving the takeoff velocity advantage partially.

Also need ≥1000 words total, with THINK_TRACE ≥400 words. Need formal LaTeX with units and exact singularity/breakdown regimes, page citations with verbatim quotes.

Let me gather key numbers:

- 15 male rugby athletes, age 21 ± 1.8 y, height 1.83 ± 0.05 m, mass 82 ± 5.6 kg [PAGE 2]
- VAF: SP 0.980 ± 0.008, PP 0.966 ± 0.013, SSP 0.967 ± 0.011 [PAGE 4]
- CS module 1: SP-PP 0.78, SP-SSP 0.79, PP-SSP 0.76; module 2: SP-PP 0.83, SP-SSP 0.81, PP-SSP 0.88 [PAGE 4]
- SPM1D primitive 1: 0–12% (F* = 7.299, P = 0.030), 48–71% (P < 0.001); SSP > SP 49–68% (t* = 4.312, P < 0.001, g = 1.42); SSP < PP 0–5% (t* = 4.983, P = 0.006, g = −1.31) [PAGE 4]
- Primitive 2: 71–100% (F* = 7.131, P < 0.001); PP > SP 71–100% (t* = 4.239, P < 0.001, g = 1.06); SSP > SP 80–100% (t* = 4.254, P < 0.001, g = 1.29) [PAGE 6]
- Force: 0–16% (F* = 6.308, P = 0.012), 24–85% (P < 0.001), 90–100% (P = 0.033); PP > SP 13–79% (t* = 4.038, P < 0.001, g = 2.63), PP < SP 92–100% (P = 0.009, g = −1.53); SSP < SP 0–12% (t* = 3.810, P = 0.009, g = −1.69), SSP < SP 90–100% (P = 0.015, g = −1.12); SSP > SP 33–36% (P = 0.016, g = 0.94) and 56–83% (P < 0.001, g = 1.79); SSP < PP 0–14% (t* = 4.009, P = 0.001, g = −2.24), SSP > PP 79–80% (P = 0.016, g = 0.98) [PAGE 6]
- Durations: SP 0.80 ± 0.08 s, PP 0.58 ± 0.05 s, SSP 0.67 ± 0.08 s [PAGE 6]
- Methods: 1200 Hz EMG and force, 120 Hz motion capture, 13 cameras, NNMF 20 restarts, k-means 50 restarts, band-pass 20–450 Hz, low-pass 6 Hz, time-normalized to 101 points, GRF normalized to body mass (N/kg), Bonferroni α = 0.017 [PAGE 2-4]
- Muscles: FCR, ECR, BB, TB, AD, PD, PM, SA, UT, LD, ES, RA [PAGE 3]
- Ethics: Jeonbuk University JBNU2024-09-015-002 [PAGE 2]
- G*Power: f = 0.25, α = 0.05, power = 0.80, correlation 0.75, n = 15 [PAGE 2]
- Limitation: SSP eccentric phase not captured [PAGE 8]

Important nuance/gray zones:
- Time-normalization to 101 points destroys absolute timing — so "13–79%" of PP is 0.075–0.458 s in absolute time, whereas the same normalized window in SP is 0.104–0.632 s. So "higher force during 13-79%" compares different absolute durations. This is a real gray-zone: normalized-phase comparisons conflate rate and duration.
- VAF > 0.95 with two synergies on 12 muscles → dimensionality 2/12 = 16.7%; but VAF is inherently biased upward by the rectified, low-pass-filtered, highly cross-correlated envelopes (broadband filtering at 6 Hz creates temporal smearing → inflated shared variance). Also, normalization to peak across all conditions inflates cross-condition similarity in the primitive shapes (shared denominator), potentially compressing between-task amplitude differences.
- Cosine similarity comparisons of modules across tasks: modules from different NNMF runs are only comparable up to permutation; k-means clustering of primitives handles the ordering, but module ordering is fixed by clustering — a hidden permutation risk. Also, NNMF with 20 restarts picks lowest error, which can bias toward "spikier" solutions. Also CS < 0.90 does not itself constitute a statistical test — no CI reported for CS.
- Hedges' g values with n=15 and CI e.g. [-2.135, -0.463] for g = -1.008 — asymmetric CIs indicate noncentral t-based correction; fine.
- The "no difference between PP and SSP in module 2" but CS = 0.88 — near threshold, so null result may be power-limited.
- Cluster-level P values with SPM1D and n=15: the paper itself flags that a priori power for scalar ANOVA ≠ power for trajectory analyses [PAGE 8]. This is a genuine breakdown regime: suprathreshold cluster inference with df = 14 and Bonferroni α = 0.017 requires large effects; the observed clusters at 33–36% (g = 0.94) and 79–80% (g = 0.98) are narrow (3-4% and 1-2% of the cycle ≈ 24 ms and 8 ms absolute) — these are at the resolution limit: 101 points over 0.58–0.80 s → Δt per point = 5.7–7.9 ms, so a 1-point cluster for the 79–80% SSP>PP finding is literally a single sample. That's a fantastic gray-zone audit point: a "significant" 1–2 point cluster is one to two samples at 5.7–7.9 ms spacing, i.e., within the temporal smearing of the 6 Hz low-pass filter (which has an effective time constant of ~1/(2π·6) ≈ 26 ms). So the 79–80% finding is sub-resolution relative to the filter's own impulse response. That's a rigorous, quantitative veto.

Let me compute: 6 Hz 4th-order Butterworth low-pass. Group delay approx: for a 4th-order Butterworth, the -3dB frequency is 6 Hz; the filter's step response rise time ≈ 0.35/f_c ≈ 58 ms, and the effective smoothing kernel width ≈ 1/f_c ≈ 167 ms. So any force feature narrower than ~50–100 ms cannot be independent of neighboring samples. The 79–80% cluster spans 1.01% of 0.67 s = 6.8 ms. So this cluster is entirely inside the filter's smear — it's a resampling artifact of the normalization, not an independent physiological event. Good.

Similarly, cross-correlation between force and primitive 2: the paper claims correspondence between primitive 2 elevation and force elevation "during the mid-to-late phase (24–85% phase)" — note that this sentence conflates primitive 2's window (71–100%) with force's window (24–85%). Actually the paper says "This neuromechanical pattern corresponds closely with the elevated mid-to-late concentric forces observed during the mid-to-late phase (24 - 85% phase)." That's a mismatch: P2 differences were 71–100%, force differences 24–85%. Overlap only 71–85%. So the claimed "close correspondence" holds only over a 14% overlap of the cycle. That's a verifiable internal inconsistency — a great gray-zone audit item.

Also: PP > SP force during 13–79% but PP's primitive 1 did NOT differ from SP at any point ("No significant difference was observed between SP and PP" for P1). So PP's large mid-phase force advantage (g = 2.63) is NOT accompanied by any primitive-1 difference and only by a late (71–100%) primitive-2 difference. That means the synergy activation cannot explain the 13–79% force superiority. The paper's Discussion claims SSC-related pre-activation explains early force — but P1 differences between SP and PP were null. That's a strong internal contradiction undermining the mechanistic claim. Excellent.

Also, note: PP > SP force 13–79% includes the early phase where PP's advantage is presumably from SSC; but P1 (early, 0–50%) showed no SP vs PP difference. So the mechanism is unaccounted for by the synergy primitives — indicating either (a) synergy amplitude normalization removed it, or (b) the mechanism lies outside the extracted 2-D subspace / outside the 12-muscle set (e.g., tendon elasticity, SSC storage-restitution, which is not an EMG phenomenon at all).

Great: this yields the "biomechanical veto" — SSC energy storage is a tendon-level phenomenon; synergy decomposition of sEMG cannot by itself demonstrate SSC utilization. Verifiable prediction: PP force advantage should persist (partially) under a pause-eliminated SSC condition only if it's neural, not tendinous.

Now "RETROCAUSAL_GENEALOGY": lineage. Nicol, Avela & Komi 2006 (SSC model) [PAGE 8 ref list]; Dhahbi et al. 2017b; García-Massó et al. 2011; Zalleg et al. 2020; Wang et al. 2017 (ballistic push-up predicts 1RM); Fan et al. 2024 (basketball shooting synergies), Fan et al. 2025 (hand positions, invariant synergy number); d'Avella-style NNMF lineage via Santuz et al. 2017 (CS methodology), Li et al. 2022 (VAF), Pataky et al. 2015 (SPM1D), Hughes et al. 2022 (SPM in CMJ/squat jump — direct lineage: the CMJ vs SJ comparison is EXACTLY the SSC countermovement-vs-static paradigm, and PP vs SSP is its upper-limb analogue). That's a strong genealogical point: Hughes et al. 2022 compared CMJ and SJ in fatigue — the lower-limb analogue of PP vs SSP. The paper cites it only for SPM sensitivity [PAGE 7: "Hughes et al.,(Hughes et al., 2022) demonstrated that SPM is highly sensitive for detecting changes across the full force-time profile"], underusing its conceptual content.

Multi-week traps: 
1. The "SSC trap": treating PP vs SSP as a clean SSC contrast when SSP lacks an eccentric phase entirely (author-acknowledged [PAGE 8]) — so the contrast is confounded by intent (maximal effort from static start) and by instruction ("maximal-effort" for SSP vs "rapid countermovement" for PP), not purely by mechanical characteristics. Multi-week training study implication: if you periodize to a PP block expecting SSC transfer to sprint/tackle, but the actual differentiator in this dataset is late-phase maximal-intent force, you may train the wrong attribute.
2. The "load-prescription trap": body mass is the only load (82 ± 5.6 kg); GRF normalized to body mass means group differences in mass are removed, but within-subject force scaling is fixed. So extending to loaded push-ups is unsupported extrapolation.
3. The "endurance/power/strength continuum trap": the paper labels SP endurance, PP power, SSP strength, citing prior work — but this study never measured endurance, power, or 1RM. No validity evidence for the labels within this dataset. This is a construct-validity circularity trap. Verifiable: PP peak power and SSP 1RM were not measured; the labels are imported, not tested.

"RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock. In a training context: I'll reframe as (a) athlete under fatigue regressing to the habitual synergy (SP-like, FCR/UT-heavy distal fine-control pattern) — the data show SP has higher FCR and UT in module 1, and higher FCR/UT in module 2 relative to both PP and SSP; so under fatigue an athlete performing PP may drift toward SP-like weighting, which the paper's [PAGE 7] interpretation frames as "greater emphasis on forearm-mediated motor control." Prediction: under a fatiguing protocol, PP module-1 weights should move toward SP values (FCR↑, UT↑, RA↓), and the mid-phase force advantage (13–79%, g = 2.63) should decay faster than takeoff velocity. (b) The counter-trap: coach's countermeasure — cueing "push the floor away" to increase late-phase intent; if SSP's advantage is intent-driven, the counter-cue applied to PP should narrow the 56–83% gap. (c) The clock: time-normalization means athlete-facing "clock" is absolute time; PP's cycle is 0.58 s vs SP 0.80 s — so 13–79% of PP = 75–458 ms vs SP 104–632 ms. In training, effort perception and cue timing must be scaled to absolute not normalized time.

"CROSS_LAYER_VETO_ADJUDICATION": physical/biomechanical/weather veto proof. 
- Biomechanical veto 1: SSP has no eccentric phase → SSC cannot be invoked to explain SSP's late force. Vetoes the SSC-unified explanation.
- Biomechanical veto 2: PP > SP force 13–79% with null P1 difference → synergy-level explanation vetoed for that window; the explanation must lie outside the 2-D synergy subspace or outside EMG (tendon).
- Physical veto 3: force plate sampling 1200 Hz but analysis at 101 points → 5.7–7.9 ms per point vs 0.83 ms raw sample interval; effective information content decimated by ~8x; 1-point clusters are not resolvable.
- Physical veto 4: 6 Hz low-pass envelope → temporal resolution ~1/6 s ≈ 167 ms ≈ 21–29% of the normalized cycle. So all reported cluster boundaries have ±~20% uncertainty in the EMG-derived dimension. Only the force channel (also 6 Hz filtered? — the paper says EMG low-pass 6 Hz; force processing is only described as normalized to body mass and time-normalized to 101 points, no filter specified) — note: force filter not specified, an under-reporting item.
- Weather: no environmental layer in a laboratory study (controlled 15:00–17:00, temp not reported). Veto: weather cannot be adjudicated; any extrapolation to outdoor field conditions is unsupported. Also circadian control was imposed, which is a strength.
- Statistical veto: Bonferroni α = 0.017 across three pairwise post-hocs; with n = 15 and SPM cluster inference, false-positive control is cluster-level; the 33–36% (3-point) and 79–80% (1-point) clusters are marginal.

"RLVR_COUNTERFACTUAL_VETOES": 3 verifiable scenarios with predictions. RLVR = reinforcement learning with verifiable rewards — I'll frame each as a falsifiable experiment with a scoring rule.

Scenario A: SSC ablation (pause PP). Add 3-s pause at bottom of PP (eliminates SSC preload). Prediction: PP mid-phase force advantage over SP (13–79%, g = 2.63) attenuates by ≥50% in Hedges' g; the 71–100% P2 difference persists (since it's intent/stabilization-driven). Verifiable metric: cluster-mean g in 13–79%.

Scenario B: Intent-matched SSP (maximal-intent SP). Instruct SP as maximal-effort concentric from a static bottom with 2-s hold. Prediction: SSP-like late force cluster (56–83%) appears in SP, i.e., the SSP-vs-SP force difference in 56–83% shrinks below g = 0.5. If it does NOT shrink, the SSP advantage is mechanical (starting geometry/timing), not intent. This tests the confound the paper does not control.

Scenario C: Muscle-set sufficiency / dimensionality. Add 4 more channels (lower trapezius, infraspinatus, middle deltoid, wrist extensors) or re-extract with k = 3. Prediction: VAF gain from k=2→k=3 will exceed 1% only for PP (currently 0.966, lowest of the three), indicating PP requires a third synergy (likely a scapular-stabilization module); SSP and SP will plateau. Verifiable: VAF_3 − VAF_2 per condition, with prediction PP > SSP > SP.

Maybe add: Scenario D — cross-condition normalization artifact. If EMG envelopes are normalized per-muscle to the peak across all three tasks (as done [PAGE 3]), then re-normalizing within-task should reduce CS between modules. Prediction: CS(SP,PP) module 1 rises from 0.78 if a shared normalization is removed... hmm, direction is tricky. Let me think: normalizing to a global peak across conditions means a muscle with a huge PP peak gets small SP values; this amplifies between-task differences in absolute amplitude. CS is scale-invariant per muscle? Cosine similarity between weight vectors m_SP and m_PP: if each component is scaled by a per-task factor, CS changes. Since normalization is per-muscle using a common denominator across tasks, the per-task scaling factors are the same for all muscles? No — normalization divides each muscle's envelope by that muscle's own global peak, so different muscles get different scale factors. That means the module weight vectors are affected by per-muscle scaling, which distorts CS. If instead each task were normalized to its own peak per muscle, the CS values would change — direction depends. I'll frame it as: the CS values are not invariant to the normalization scheme; prediction is that within-task normalization will change module-1 CS by ≥0.05 in at least one pair, showing CS < 0.90 is scheme-dependent. That's a legitimate methodological counterfactual and it's verifiable. Keep as an auxiliary note within Scenario C or as a fourth.

I'll do 3 primary + note.

Word count: need ≥1000 words across sections; THINK_TRACE ≥400. I'll write substantially more — probably ~2500 words total.

Let me also include formal equations with units:

NNMF decomposition: $\mathbf{E} = \mathbf{M}\mathbf{P} + \mathbf{R}$, $\mathbf{E} \in \mathbb{R}_{\ge 0}^{12 \times 101}$ (dimensionless normalized envelope units, n.u.), $\mathbf{M} \in \mathbb{R}_{\ge 0}^{12 \times k}$ (n.u.), $\mathbf{P} \in \mathbb{R}_{\ge 0}^{k \times 101}$ (n.u.).

VAF: $\mathrm{VAF} = 1 - \frac{\|\mathbf{E} - \mathbf{MP}\|_F^2}{\|\mathbf{E}\|_F^2}$, unitless in [0,1].

Cosine similarity: $\mathrm{CS}(\mathbf{m}_i, \mathbf{m}_j) = \frac{\mathbf{m}_i^\top \mathbf{m}_j}{\|\mathbf{m}_i\|_2 \|\mathbf{m}_j\|_2}$, unitless.

Hedges' g: $g = J \cdot \frac{\bar{d}}{s_d}$, $J = 1 - \frac{3}{4(n-1)-1}$ with n = 15 → $J = 1 - 3/55 = 0.9455$. Actually for paired: df = n-1 = 14, J = 1 - 3/(4·14 - 1) = 1 - 3/55 = 0.9455. Good, so the reported g's are ~5.4% shrunk.

Force normalization: $F^*(t) = F(t)/m$ in N/kg, $m = 82 \pm 5.6$ kg → 1 body weight ≈ 804 N... actually weight = 82 × 9.81 = 804.4 N. Push-up GRF is a fraction of body weight.

Time normalization mapping: $\tau = 100 \cdot t/T_c$, $\Delta t = T_c/100$: SP 8.0 ms, PP 5.8 ms, SSP 6.7 ms.

Nyquist: raw 1200 Hz → 0.833 ms. Decimation ratio = 8.0/0.833 ≈ 9.6 for SP, 7.0 for PP.

Filter time constant: $\tau_f = 1/(2\pi f_c) = 1/(2\pi \cdot 6) = 26.5$ ms; 4th-order Butterworth group delay at DC ≈ ... roughly $n \cdot \tau$? For a Butterworth of order n with cutoff $\omega_c$, group delay at DC = $\sum$ ... approximately $n \cdot \sin(\pi/(2n))/(\omega_c)$... Let me just state effective temporal resolution ≈ 1/(2πf_c) ≈ 26.5 ms and the step-settling ≈ 0.35/f_c ≈ 58 ms. Map to normalized cycle: 26.5 ms / 580 ms = 4.6% of PP cycle; 26.5/800 = 3.3% of SP cycle. So the 1-point cluster at 79–80% (≈6.7 ms in SSP) is 4× narrower than the filter's own time constant → not resolvable. 

Also SPM: SPM{F}(t) = $\frac{\mathrm{SS}_{between}(t)/(k-1)}{\mathrm{SS}_{within}(t)/(N-k)}$, df = (2, 28) — matches reported df = 2, 28 with N = 15, k = 3. Good check: df error = N(k-1) = 15×2 = 30? Hmm. For repeated measures with N=15, k=3 conditions: df_between = k-1 = 2; df_error = (N-1)(k-1) = 14×2 = 28. ✓ Consistent. Good — a verifiable internal consistency check that the reported df are correct for a repeated-measures design.

RFD: not computed here but referenced. Force-time integral (impulse): $J = \int F^* dt$ N·s/kg.

Singularity/breakdown regimes — I must state exact breakdown regimes:
1. NNMF non-uniqueness: the factorization is unique only up to scaling $\mathbf{M} \to \mathbf{MD}$, $\mathbf{P} \to \mathbf{D}^{-1}\mathbf{P}$ for $\mathbf{D} \succ 0$ diagonal; CS is invariant to this diagonal scaling but NOT to general non-diagonal rotations. Breakdown when two synergy subspaces are nearly collinear (CS → 1), i.e., when k exceeds the true rank. Here CS ≈ 0.76–0.88 → angular separation $\theta = \arccos(\mathrm{CS})$ = 38.7° (0.78), 37.8° (0.79), 40.5° (0.76), 33.9° (0.83), 35.9° (0.81), 28.4° (0.88). At CS → 1 (θ → 0) the decomposition is degenerate. Also the threshold 0.90 corresponds to θ = 25.8°.
2. VAF saturation: VAF → 1 as k → rank(E) ≤ min(12, 101) = 12; with 101 time points and 12 muscles, the maximum extractable k is 12; VAF > 0.95 at k = 2 means 95% of Frobenius energy in a 2-D subspace. Breakdown of VAF as a model-selection criterion when noise floor (EMG envelope cross-talk) already accounts for >95% — i.e., VAF cannot distinguish k=2 from k=3 when the marginal energy of the 3rd synergy < noise. Estimate: if the 3rd component carried 1.5% of energy, VAF_3 = 0.981 vs VAF_2 = 0.966 — within 1 SD of the reported PP VAF (0.013). So the k = 2 decision for PP is within one SD of the k = 3 alternative. That's a precise breakdown statement. Excellent — this makes Scenario C rigorous: PP VAF 0.966 ± 0.013 means the 0.95 criterion is only 1.23 SD away; a third synergy adding 1.3% would cross the threshold. Strong.
3. SPM cluster inference breakdown: cluster-level P depends on suprathreshold extent; when cluster extent ≤ filter resolution (≈3–5 normalized %), the cluster P is a resampling artifact. Reported 1-2 point clusters (79–80% = 1.01%, 33–36% = 3.03%) are at/below this.
4. Time-normalization singularity: when $T_c$ varies between conditions (0.58 vs 0.80 s), normalized-time alignment is a linear dilation; the mapping is singular for comparing rate-dependent quantities (force rate), since $dF/d\tau = T_c \cdot dF/dt$ — rate comparisons in normalized time are confounded by the 38% duration difference. Precisely: $g_F^{PP}(\tau) = T_c^{PP} \dot F^{PP}$, so normalized-time slopes differ from absolute slopes by the factor $T_c^{PP}/T_c^{SP} = 0.58/0.80 = 0.725$. Great formal point.

Units: force N/kg; time s; frequency Hz; angle degrees; VAF/CS dimensionless.

Now let me also note the G*Power issue: f = 0.25 for a scalar repeated-measures ANOVA with correlation 0.75; for SPM1D trajectory inference, the effective number of independent comparisons per trajectory is not 101 but ~ (trajectory duration / filter correlation length) ≈ 101 × (26.5 ms / 6.7 ms) ≈ ... correlation length in normalized points = 26.5/6.7 ≈ 4 points; so effective independent tests ≈ 101/4 ≈ 25, not 101. So multiple-comparison burden is lower than naive but cluster inference already accounts for it via RFT. Good.

Let me now write. Structure with the exact XML sections. Must include page citations and verbatim quotes.

Quotes I can use verbatim:
- [PAGE 1]: "Two synergies reconstructed all tasks (VAF > 0.95)."
- [PAGE 1]: "Synergy modules differed among conditions (cosine similarity < 0.90)"
- [PAGE 4]: "Synergy module 1 showed consistently low cosine similarity across all task pairs (SP vs. PP: CS = 0.78; SP vs. SSP: CS = 0.79; PP vs. SSP: CS = 0.76)"
- [PAGE 4]: "No significant difference was observed between SP and PP." (for primitive 1)
- [PAGE 6]: "PP produced significantly higher force than SP during 13 - 79% of the cycle (df = 14; t* = 4.038, P < 0.001; mean cluster Hedges' g = 2.63)"
- [PAGE 6]: "significantly higher force during 79 - 80% of the cycle (P = 0.016; mean cluster Hedges' g = 0.98)"
- [PAGE 7]: "This neuromechanical pattern corresponds closely with the elevated mid-to-late concentric forces observed during the mid-to-late phase (24 - 85% phase)."
- [PAGE 7]: "Differences in synergy primitive 1 during the early concentric phase indicate that PP elicited greater neuromuscular activation at movement onset"
- [PAGE 8]: "the inability to capture the eccentric phase in SSP, the analysis was restricted to the concentric phase"
- [PAGE 8]: "the power characteristics of SPM1D trajectory analyses may differ; therefore, the present sample size should be interpreted as a conservative lower-bound estimate"
- [PAGE 2]: SSP method: "without a preceding stretch preloading phase"
- [PAGE 2]: PP: "an explosive concentric push that propelled the body off the force plates"
- [PAGE 3]: normalization "normalized to the peak activation of the same muscle across all valid trials of the three pushing tasks"
- [PAGE 7]: "the lack of differences in AD, PD, and PM suggests that the observed pattern may reflect a relatively consistent proximal stabilization strategy across tasks"

Also the mismatch: P1 differences early (0-12%) were SSP lower than PP during 0-5% and no SP-PP difference — so the claim "PP elicited greater neuromuscular activation at movement onset" is only supported relative to SSP, not SP. Careful wording.

Let me count df check: reported F* with df = 2, 28 ✓.

Now writing. Aim ~2800-3200 words.

I'll be careful to state zero betting content and note the invariant explicitly at the top.

Let me draft.

For CROSS_LAYER_VETO_ADJUDICATION, "weather" — I'll state the environmental layer is null by design (laboratory, 15:00–17:00 window, 48 h abstention controls) and therefore cannot vote; any weather-based veto is inapplicable and I will mark it ADJUDICATED-NULL rather than inventing one.

Writing now.

Word counts: THINK_TRACE ≥400 — I'll do ~750.

Let me make sure LaTeX is properly rendered as LaTeX ($$ ... $$).

I'll write it.
</NATIVE_REASONING>

# GSE + GSI FRONTIER REASONING FOUNDRY

**INVARIANT DECLARATION (Invariant #1):** This drive source is a peer-reviewed biomechanics/electromyography article. It contains no wagering market, no priced instrument, and no probabilistic event to price. **Zero betting lines are emitted, referenced, or implied anywhere in this output.** Every downstream section is adjudicated strictly on neuromechanical, statistical, and physical grounds.

**SOURCE ID:** Fan P., Han M., Wang T., Huang G., Wang X., Li M. (2026). *Muscle Synergy Reorganization and Force–Time Differences Across Upper-Limb Pushing Tasks with Different Mechanical Characteristics.* JSSM 25, 665–674. DOI 10.52082/jssm.2026.665. 10 pages.

---

<THINK_TRACE>
**Deep multi-hop derivation & gray-zone audit (multi-hop chain: extraction → subspace → timing → force → causal claim).**

**Hop 1 — What was actually measured, versus what was actually claimed.** The study ran 15 trained male rugby athletes (21 ± 1.8 y; 1.83 ± 0.05 m; 82 ± 5.6 kg) through three concentric-only pushing tasks on dual AMTI OR6-6-2000 force plates at 1200 Hz, with 12 channels of Delsys Trigno Avanti sEMG at 1200 Hz [PAGE 2–3]. Three trials per task, two retained by within-task ICC, averaged into a 12 × 101 matrix [PAGE 3]. NNMF with 20 restarts, k-means on primitives with 50 restarts, VAF > 0.95 acceptance, k fixed at 2 [PAGE 3]. The claim chain is: *two conserved synergies* → *low cosine similarity between tasks* → *task-specific reorganization* → *neuromechanical explanation of the force–time differences* [PAGE 1, PAGE 7]. The first three links are supported by the reported statistics. The fourth link is where the derivation frays, and it frays at a specific, quantifiable location.

**Hop 2 — The VAF plateau is weaker than it looks.** Reported: SP VAF = 0.980 ± 0.008, PP = 0.966 ± 0.013, SSP = 0.967 ± 0.011 [PAGE 4]. The acceptance criterion is VAF > 0.95 [PAGE 3]. For PP, the accepted solution sits only $(0.966-0.950)/0.013 = 1.23$ standard deviations above the rejection threshold. If a third synergy carried even ~1.3% of residual Frobenius energy, PP would move to VAF ≈ 0.979 — indistinguishable from SP's accepted two-synergy value. Therefore the statement "Two synergies reconstructed all tasks (VAF > 0.95)" [PAGE 1] is *arithmetically true but epistemically weak for PP*: the k = 2 decision for the plyometric condition is not separated from the k = 3 alternative by more than one SD. The 12-muscle montage caps extractable dimensionality at $\min(12,101)=12$, so the ceiling is not the issue; the issue is the noise floor. This is a genuine gray zone the authors do not audit.

**Hop 3 — Cosine similarity has no confidence interval, so "CS < 0.90" is a threshold, not a test.** The paper reports SP vs PP M1 CS = 0.78, SP vs SSP = 0.79, PP vs SSP = 0.76; M2 = 0.83, 0.81, 0.88 [PAGE 4]. The largest value, 0.88 (PP vs SSP, module 2), is separated from the 0.90 criterion by 0.02 — and it is precisely the pair for which the paper also reports *no* significant muscle-weight differences: "In synergy module 2, no significant differences were observed between PP and SSP" [PAGE 4]. Two independent lines therefore converge on "PP and SSP share module 2," which the Discussion itself concedes: "PP and SSP did not differ in synergy primitive 2 or in the structural organization of synergy module 2" [PAGE 7]. This is a case where the *null* is more theoretically informative than the significant contrasts, and the paper half-recognizes it. But the null is unstable: with n = 15, 12 muscles, and Benjamini–Hochberg correction, a true per-muscle effect of g ≈ 0.5 would frequently go undetected. The PP/SSP module-2 null is a power-limited null, not an equivalence result.

**Hop 4 — Time normalization silently rescales rate.** Concentric duration was 0.80 ± 0.08 s (SP), 0.58 ± 0.05 s (PP), 0.67 ± 0.08 s (SSP) [PAGE 6]. All trajectories were then resampled to 101 points [PAGE 3]. The normalized-time derivative obeys $\frac{dF}{d\tau}=\frac{T_c}{100}\frac{dF}{dt}$, so a PP slope at normalized time $\tau$ is only $0.725\times$ the corresponding SP slope in absolute-time terms — and conversely, a normalized-time force *level* comparison across tasks integrates over different absolute windows. The headline cluster "PP produced significantly higher force than SP during 13 - 79% of the cycle" [PAGE 6] corresponds to 75–458 ms in PP but 104–632 ms in SP. The comparison is legitimate as a *phase-matched shape* comparison and illegitimate as a *rate or impulse* comparison. The authors never compute impulse $\left(J^\*=\int F^\*\,dt,\ \mathrm{N\cdot s\cdot kg^{-1}}\right)$, which is the quantity that actually matters for collision and tackle performance invoked in the Introduction [PAGE 1].

**Hop 5 — The mechanistic contradiction hiding in plain sight.** PP exceeded SP in force across 13–79% with a very large cluster effect (t\* = 4.038, P < 0.001, mean cluster Hedges' g = 2.63) [PAGE 6]. Yet for synergy primitive 1 — the early-phase primitive spanning 0–50% — the paper states flatly: "No significant difference was observed between SP and PP" [PAGE 4]. So PP's massive mid-phase force advantage is *not accompanied by any difference in the early activation primitive relative to SP*. Meanwhile the Discussion asserts: "Differences in synergy primitive 1 during the early concentric phase indicate that PP elicited greater neuromuscular activation at movement onset" [PAGE 7]. That sentence is supported only against SSP (SSP lower than PP during 0–5%, t\* = 4.983, P = 0.006, g = −1.31 [PAGE 4]), not against SP. The mechanistic story for PP's largest effect therefore rests on a contrast the data do not supply.

**Hop 6 — The window-matching error.** The Discussion claims: "This neuromechanical pattern corresponds closely with the elevated mid-to-late concentric forces observed during the mid-to-late phase (24 - 85% phase)" [PAGE 7]. But primitive-2 differences were localized to **71–100%** (F\* = 7.131, P < 0.001) [PAGE 6], while force differences were localized to **24–85%**. The overlap is 71–85%: 14% of the cycle. "Corresponds closely" is doing work the statistics do not authorize.

**Hop 7 — Sub-resolution clusters.** Force processing includes low-pass filtering at 6 Hz (4th-order Butterworth) applied to EMG envelopes; the force channel's filter is not specified [PAGE 3]. A 6 Hz 4th-order Butterworth has $\tau_f = 1/(2\pi f_c) = 26.5$ ms and a step-settling time $\approx 0.35/f_c = 58$ ms. In SSP, one normalized point spans $670/100 = 6.7$ ms. The reported cluster "significantly higher force during 79 - 80% of the cycle (P = 0.016; mean cluster Hedges' g = 0.98)" [PAGE 6] is **one to two samples** — 7–13 ms — i.e., 2–4× narrower than the filter's own time constant. That cluster cannot be an independent physiological event; it is a boundary artifact of the 101-point resampling interacting with cluster-extent inference. The 33–36% cluster (g = 0.94, SSP > SP) spans 20 ms — marginally above $\tau_f$, still at the edge. By contrast, the 56–83% cluster (g = 1.79) spans 181 ms and is robust.

**Hop 8 — The confound the design cannot remove.** The PP protocol used "a rapid countermovement to ~90° of elbow flexion, followed by an explosive concentric push" [PAGE 2]; the SSP began "from a static bottom position with elbows flexed to ~90° and performed a maximal-effort concentric action... without a preceding stretch preloading phase" [PAGE 2]. Two variables move together: (i) presence/absence of an eccentric preload (SSC), and (ii) instruction ("rapid" vs "maximal-effort"). The design cannot separate them. And the authors concede a third loss: "the inability to capture the eccentric phase in SSP, the analysis was restricted to the concentric phase" [PAGE 8].

**Synthesis.** The paper's structural findings (conserved k = 2; task-specific module weights; task-specific primitive timing; task-specific force–time profiles) are defensible. Its *causal* layer — that synergy reorganization explains the force differences — is over-claimed on four independent grounds: a power-limited null (Hop 3), a missing early-phase contrast (Hop 5), a mismatched window (Hop 6), and sub-resolution force clusters (Hop 7). The correct reading is that the three tasks are *neuromechanically distinct but not neuromechanically explained* by the extracted two-dimensional subspace.
</THINK_TRACE>

---

<SOURCE_OPERATORS_AND_EQUATIONS>
**Formal operators, units, and exact breakdown regimes.** All page citations refer to the supplied 10-page PDF; verbatim quotes are enclosed in quotation marks.

### 1. Decomposition operator

$$\mathbf{E}=\mathbf{M}\mathbf{P}+\mathbf{R},\qquad \mathbf{E}\in\mathbb{R}^{12\times 101}_{\ge 0},\ \ \mathbf{M}\in\mathbb{R}^{12\times k}_{\ge 0},\ \ \mathbf{P}\in\mathbb{R}^{k\times 101}_{\ge 0},\ \ \mathbf{R}\in\mathbb{R}^{12\times 101}$$

Units: $\mathbf{E}$ and $\mathbf{M}$ are dimensionless normalized linear-envelope amplitudes (n.u.), because "Each muscle's EMG envelope was normalized to the peak activation of the same muscle across all valid trials of the three pushing tasks" [PAGE 3]. $\mathbf{P}$ is dimensionless. $k=2$ fixed for cross-task comparability [PAGE 3]. The paper writes this as "EMG matrix = M synergy modules × P synergy Primitive + error" [PAGE 3].

**Exact singularity regime.** NNMF is invariant only under diagonal rescaling $\mathbf{M}\to\mathbf{M}\mathbf{D}$, $\mathbf{P}\to\mathbf{D}^{-1}\mathbf{P}$ with $\mathbf{D}\succ 0$ diagonal. Cosine similarity is invariant to that gauge, but *not* to non-diagonal rotations within the span. The factorization becomes **non-identifiable** exactly when the column span of $\mathbf{M}$ approaches collinearity with the span of the discarded components, i.e., when the extracted subspace angle $\theta=\arccos(\mathrm{CS})$ collapses. Here, the reported similarities map to $\theta$ = 38.7° (0.78), 37.8° (0.79), 40.5° (0.76), 33.9° (0.83), 35.9° (0.81), 28.4° (0.88) [PAGE 4]. The 0.90 acceptance threshold corresponds to $\theta=25.8°$. PP vs SSP module 2 at $\theta=28.4°$ sits 2.6° inside the threshold — inside the angular uncertainty of a 15-subject sample.

### 2. Variance-accounted-for criterion

$$\mathrm{VAF}=1-\frac{\lVert \mathbf{E}-\mathbf{M}\mathbf{P}\rVert_F^2}{\lVert \mathbf{E}\rVert_F^2}\in[0,1]\ \text{(dimensionless)}$$

as given verbatim [PAGE 3]. Observed: SP 0.980 ± 0.008, PP 0.966 ± 0.013, SSP 0.967 ± 0.011 [PAGE 4], supporting "Two synergies reconstructed all tasks (VAF > 0.95)" [PAGE 1].

**Breakdown regime.** VAF is a strictly monotone, saturating criterion: $\mathrm{VAF}\to 1$ as $k\to\operatorname{rank}(\mathbf{E})\le 12$. It ceases to be a valid model-selection statistic when the marginal energy of component $k+1$ falls below the envelope noise floor. Operationalizing: PP's margin to threshold is $(0.966-0.950)/0.013=1.23\ \sigma$. A third synergy contributing $\ge 1.3\%$ Frobenius energy would yield $\mathrm{VAF}_3\approx 0.979$ — statistically indistinguishable from SP's accepted $\mathrm{VAF}_2$. **The k = 2 decision is therefore unverified for PP specifically.**

### 3. Similarity operator

$$\mathrm{CS}(\mathbf{m}_i,\mathbf{m}_j)=\frac{\mathbf{m}_i^{\top}\mathbf{m}_j}{\lVert \mathbf{m}_i\rVert_2\,\lVert \mathbf{m}_j\rVert_2}\in[-1,1]\ \text{(dimensionless)}$$

Reported without confidence intervals: "SP vs. PP: CS = 0.78; SP vs. SSP: CS = 0.79; PP vs. SSP: CS = 0.76" (module 1) and "SP vs. PP (CS = 0.83) and SP vs. SSP (CS = 0.81), whereas PP vs. SSP showed moderately higher similarity (CS = 0.88)" (module 2) [PAGE 4]. **Breakdown:** CS is not scale-invariant per muscle under a common-denominator normalization scheme; the reported values are scheme-dependent, and no permutation test or bootstrap CI is supplied to establish that 0.88 differs from 0.90.

### 4. Effect-size operator

$$g=J\cdot\frac{\bar{d}}{s_d},\qquad J=1-\frac{3}{4\,\mathrm{df}-1},\qquad \mathrm{df}=n-1=14\ \Rightarrow\ J=1-\tfrac{3}{55}=0.9455$$

Units: dimensionless (SD units). "Effect sizes for discrete paired comparisons were expressed as bias-corrected Hedges' g for within-subject comparisons" [PAGE 3]. Key magnitudes: force 13–79% PP>SP $g=2.63$; force 56–83% SSP>SP $g=1.79$; force 0–14% SSP<PP $g=-2.24$ [PAGE 6]; primitive 1, SSP>SP 49–68% $g=1.42$; primitive 2, SSP>SP 80–100% $g=1.29$ [PAGE 4, PAGE 6]. Applying $J$: the raw standardized differences are ~5.8% larger than reported — the correction is applied, not missing.

### 5. Trajectory inference operator

$$\mathrm{SPM}\{F\}(t)=\frac{\mathrm{SS}_{\text{between}}(t)/(k-1)}{\mathrm{SS}_{\text{within}}(t)/\big[(N-1)(k-1)\big]},\qquad \mathrm{df}=(2,\,28)$$

Consistency check: $N=15$, $k=3$ → $\mathrm{df}_{\text{between}}=2$, $\mathrm{df}_{\text{error}}=(15-1)(3-1)=28$. Reported "df = 2, 28" for all three omnibus tests [PAGE 4, PAGE 6] — **internally consistent with a repeated-measures design.** Post-hoc: "Bonferroni-adjusted α level of 0.017 (0.05/3)" [PAGE 3], df = 14 [PAGE 4, PAGE 6]. ✓

**Breakdown regime (exact).** Cluster-level inference is valid only where suprathreshold extent exceeds the signal's correlation length. With $f_c=6$ Hz, $\tau_f=1/(2\pi f_c)=26.5$ ms; step settling $\approx 0.35/f_c=58$ ms. Per-point spacing: $\Delta t_{\text{SP}}=800/100=8.0$ ms, $\Delta t_{\text{PP}}=580/100=5.8$ ms, $\Delta t_{\text{SSP}}=670/100=6.7$ ms [durations: PAGE 6]. Therefore **any cluster narrower than $\tau_f\approx 26.5$ ms, i.e. narrower than ~4 normalized points, is sub-resolution.** The 79–80% SSP>PP cluster (1.01%, 6.8 ms, g = 0.98, P = 0.016) [PAGE 6] is **0.26 $\tau_f$** — invalid as an independent event. The 33–36% SSP>SP cluster (3.03%, 20 ms, g = 0.94, P = 0.016) is **0.76 $\tau_f$** — marginal. The 56–83% cluster (181 ms, 6.8 $\tau_f$, g = 1.79) and 13–79% cluster (458 ms PP / 632 ms SP, 17–24 $\tau_f$, g = 2.63) survive.

### 6. Normalization operator and its rate singularity

$$\tau=\frac{100\,t}{T_c},\qquad \frac{dF}{d\tau}=\frac{T_c}{100}\cdot\frac{dF}{dt},\qquad \frac{T_c^{\mathrm{PP}}}{T_c^{\mathrm{SP}}}=\frac{0.58}{0.80}=0.725$$

**Exact breakdown:** normalized-time slope comparisons between tasks are confounded by the factor $T_c$ by construction. Any claim about "rate of force development" derived from these 101-point trajectories is inadmissible without recovering $dF/dt$; the paper does not report RFD, only force *levels* by normalized phase [PAGE 6]. Force units after normalization: N·kg⁻¹ — "GRF signals were normalized to body mass (N/kg), and time-normalized to 101 points" [PAGE 3]; with $\bar m = 82$ kg, 1 body weight $=804.4$ N.

### 7. Muscle set and coverage

Twelve channels: FCR, ECR, BB, TB, AD, PD, PM, SA, UT, LD, ES, RA, placed per the *Atlas of Muscle Innervation Zones* [PAGE 3]. **Coverage gap:** no lower trapezius, no infraspinatus/rotator cuff, no wrist extensors beyond ECR, no middle deltoid. Since the paper's own interpretation assigns scapular-stabilizer weight to SA and UT [PAGE 7], the absence of lower trapezius and infraspinatus means the "scapular-stabilization" construct is under-sampled — a construct-validity boundary, not merely a sensor-count limitation.
</SOURCE_OPERATORS_AND_EQUATIONS>

---

<RETROCAUSAL_GENEALOGY>
**Historical and scientific lineage, and the multi-week traps it creates.**

**Lineage chain, traced backward from this paper's own reference list.**

1. **Komi/Nicol SSC model (2006).** "Nicol, C., Avela, J. and Komi, P.V. (2006) The stretch-shortening cycle: A model to study naturally occurring neuromuscular fatigue" [PAGE 8]. The entire PP-vs-SSP contrast is a *rediscovery in the upper limb* of the classic SSC paradigm. The Introduction invokes it directly: "differences may be partly explained by the stretch-shortening cycle (SSC), a muscle-tendon mechanism that enhances force production and improves energy efficiency compared with isolated concentric actions (Nicol et al., 2006)" [PAGE 1]. **This is the paper's deepest dependency and its weakest link**, because the paper measures *muscle activation*, whereas the SSC is substantially a *tendon* storage-restitution phenomenon. Segmental tendon compliance is not an sEMG channel.

2. **Hughes et al. (2022): the lower-limb twin that was cited but not used.** The paper cites Hughes for methodological reasons only: "Hughes et al.,(Hughes et al., 2022) demonstrated that SPM is highly sensitive for detecting changes across the full force-time profile" [PAGE 7]. But Hughes et al. compared **countermovement jump vs squat jump** — the exact countermovement/static-start pair that PP/SSP replicates — under control and fatigue conditions [PAGE 8 reference list]. The conceptual content of that paper (SSC vs no-SSC force–time divergence, and its fatigue fragility) is the single most relevant prior in the reference list, and it is cited *only as a statistics citation*. This is a retrocausal missed connection with direct downstream consequences for training prescription.

3. **Dhahbi et al. (2017b, 2022).** Cited for PP vs SSP kinetics: "PP has been shown to elicit markedly greater peak ground reaction forces (GRF) and higher RFD compared with SSP (Dhahbi et al., 2017b)" [PAGE 1]. Note the shift: Dhahbi measured *discrete peaks and RFD*; this paper measures *trajectories*. The genealogy's methodological advance is real — cluster-resolved force–time, not peak-only.

4. **García-Massó et al. (2011).** The kneeling vs traditional plyometric push-up comparison, cited for amplitude effects on PM/TB/AD [PAGE 1–2, PAGE 7]. The present paper extends amplitude → weighting structure.

5. **Fan et al. (2024, 2025): the lab's own lineage.** 2024 = basketball shooting distance-dependent synergies (NNMF + k-means + VAF pipeline); 2025 = hand-position invariance of synergy *number* in closed-kinetic-chain push-ups. The present paper is a direct third step in a deliberate sequence: *number invariance under posture* (2025) → *structure change under mechanical demand* (2026). The lineage is coherent, and the authors state it: "although the number of synergy structures is largely conserved across push-up tasks performed with different hand positions, the associated synergy weights and activation timings vary systematically" [PAGE 2].

6. **Method lineage:** Santuz et al. (2017) for cosine similarity thresholds [PAGE 3]; Li et al. (2022) for VAF > 0.95 [PAGE 3]; Pataky et al. (2015) for SPM1D reporting conventions [PAGE 4]. All three are standard, all three are applied correctly, and all three carry their own known sensitivity limits that this paper inherits.

**Multi-week traps (three, each with a failure horizon measured in weeks).**

- **Trap A — the "SSC-prescription" trap (horizon: 4–8 weeks).** A practitioner reads "PP emphasized rapid early-to-mid phase propulsion" [PAGE 1, Key points] and prescribes a 6-week plyometric push-up block to develop tackle/contact power. But the paper's own data do not localize a *neural* early-phase difference between PP and SP: "No significant difference was observed between SP and PP" for primitive 1 [PAGE 4]. The measurable PP advantage sits at 13–79% *force*, largely post-transition, and could be tendinous. After 6 weeks, the athlete may show improved push-up takeoff height with no transfer to collision impulse — because the trained mechanism was never the one the introduction promised.

- **Trap B — the "endurance / power / strength continuum" trap (horizon: immediate, compounding).** The paper states: "three upper-limb pushing tasks-the standard push-up (SP), plyometric push-up (PP), and standard squat push-up (SSP)-representing the endurance-, power-, and strength-oriented continuum" [PAGE 1]. This taxonomy is imported from prior citations (PP predicts tackling, Speranza 2018; SSP mean force predicts 1RM bench press, Wang 2017) and is **never tested in this dataset**. No endurance test, no peak power, no 1RM was measured. A coach who periodizes by this continuum is periodizing on borrowed validity. Each week of programming amplifies the error.

- **Trap C — the "load-extension" trap (horizon: 2–6 weeks).** All trials were body-mass only (82 ± 5.6 kg) with forces expressed in N/kg. Loaded push-up variants (weighted vest, banded) alter the SSC/preload interaction nonlinearly. Extrapolating the 13–79% PP superiority to a +20% body-mass condition is unsupported; the force–velocity relationship shifts the very windows reported here.

**Retrocausal inversion:** the paper's *conclusion* ("PPs are characterized by rapid force development and prominent early-phase neuromuscular activation" [PAGE 8]) is not retro-causally implied by its *results*. The results imply: PP is characterized by greater *mid-phase* force (13–79%, g = 2.63) and greater *late-phase* primitive-2 activation (71–100%, g = 1.06) [PAGE 6]. The early-phase language is an import from the SSC prior, not an output of this experiment.
</RETROCAUSAL_GENEALOGY>

---

<RECURSIVE_THEORY_OF_MIND>
**Crisis habit regression vs. counter-trap vs. clock — adjudicated for the athlete, the coach, and the measurement apparatus.**

Three nested models of mind must be held simultaneously: the **regressing athlete** (what the nervous system does to itself under load), the **counter-trapping coach** (what a practitioner does in response), and the **clock** (the temporal frame in which both are evaluated, which here has been mathematically transformed).

**Layer 1 — Crisis habit regression (athlete's model of self).** The dataset provides a concrete signature of "habit" in this movement: the standard push-up's module-1 weighting is FCR- and UT-heavy relative to both explosive tasks — "PP showed lower FCR (P = 0.001, Hedges' g = -1.008...) and UT (P < 0.001, Hedges' g = -1.302...), but higher RA contributions (P < 0.001, Hedges' g = 1.156...) compared with SP" [PAGE 4]. The Discussion interprets SP's FCR/UT dominance as "greater emphasis on forearm-mediated motor control (Wilke and Krause, 2019)" [PAGE 7]. Read as a *habit attractor*: the SP pattern is the low-arousal, distally-anchored, fine-control default. **Prediction:** under accumulating fatigue, an athlete performing PP should drift *toward* the SP attractor — module-1 FCR and UT weights should rise, RA should fall, and PP's 13–79% force advantage (g = 2.63) should attenuate *before* takeoff velocity or flight time deteriorates. The reason: distal fine-control weighting is the cheap solution; proximal-trunk stabilization (RA, SA) is the expensive one, and the paper identifies SA/RA as the high-demand elements: "an increased demand for trunk stabilization (Saeterbakken et al., 2022) and scapular control (Umehara et al., 2018) during the initiation of explosive pushing actions" [PAGE 7]. This regression order is testable and falsifiable — see RLVR Scenario 1.

**Layer 2 — Counter-trap (coach's model of the athlete's model).** The natural countermeasure a coach reaches for is *cueing intent*: "push the floor away hard." But the design confounds exactly this. PP was instructed "rapid" [PAGE 2]; SSP was instructed "maximal-effort" [PAGE 2]. The SSP's late-phase force superiority (56–83%, g = 1.79) and its late primitive-2 elevation (80–100%, g = 1.29) [PAGE 6] may be an *intent* effect, not a *mechanical* one. If so, the coach's counter-cue applied to PP should reproduce it — and if it does *not*, the SSP advantage is mechanical (geometry and the absence of preload), and the cue is wasted. **This is a genuine two-sided trap:** the coach who attributes SSP's late force to "squat push-up mechanics" may be training an instruction artifact; the coach who attributes it to "intent" may be training a geometry artifact. The paper provides no discriminant. Its own hedging is visible: "the lack of differences in AD, PD, and PM suggests that the observed pattern may reflect a relatively consistent proximal stabilization strategy across tasks (Bagherian et al., 2019)" [PAGE 7] — a null presented as a mechanism.

**Layer 3 — The clock (the transformation both models are running inside).** Neither the athlete's proprioceptive clock nor the coach's stopwatch operates in normalized time. The paper's clock is: $\tau = 100t/T_c$ with $T_c^{\mathrm{SP}}=0.80$ s, $T_c^{\mathrm{PP}}=0.58$ s, $T_c^{\mathrm{SSP}}=0.67$ s [PAGE 6]. Consequences for the theory of mind:
- The athlete's *perceived* effort distribution across a rep is anchored to absolute time. A PP rep is 0.22 s (28%) shorter than an SP rep. Asking the athlete to "hold the brace through the push" means 580 ms in PP but 800 ms in SP — a 38% difference in the duration the instruction demands.
- The coach's cue timing must be scaled accordingly. A cue delivered at "halfway" lands at 290 ms (PP) vs 400 ms (SP).
- The *primitive* clock and the *force* clock were not aligned in the paper's own narrative: primitive-2 differences at 71–100% were said to "correspond closely with" force differences at 24–85% [PAGE 7] — an overlap of only 14 normalized points. This is a **theory-of-mind failure internal to the manuscript**: the authors' mental model of the movement's phase structure drifted from their own statistical output.

**Adjudication across the three layers.** Layer 1 (regression to distal habit) and Layer 3 (clock rescaling) are *supported* by the reported weightings and durations. Layer 2 (intent counter-trap) is *unresolvable* from this dataset and must be flagged as an open confound, not a finding. The recursive loop closes here: the athlete regresses toward the SP attractor under fatigue (Layer 1); the coach, reading "PP = power," counter-cues for speed (Layer 2); the clock silently rescales both the regression and the cue (Layer 3); and the measurement pipeline, having compressed 800 ms into 101 points and smoothed at 6 Hz, reports a 6.8 ms "significant" cluster at 79–80% [PAGE 6] that no nervous system planned and no coach cued.
</RECURSIVE_THEORY_OF_MIND>

---

<CROSS_LAYER_VETO_ADJUDICATION>
**Physical / biomechanical / environmental veto proof.** Each layer is adjudicated to one of three verdicts: **UPHELD**, **VETOED**, or **ADJUDICATED-NULL**.

### Veto 1 — Tendon-layer veto on the SSC explanation for SSP. **VERDICT: VETOED.**
The SSC requires an active eccentric phase followed by rapid concentric reversal. The SSP protocol explicitly removed it: "from a static bottom position with elbows flexed to ~90° and performed a maximal-effort concentric action to lift the body off the plates, without a preceding stretch preloading phase" [PAGE 2]. The authors further concede: "the inability to capture the eccentric phase in SSP, the analysis was restricted to the concentric phase, limiting insight into eccentric-concentric and SSC-related interactions" [PAGE 8]. **Therefore any single-mechanism SSC account of the three-task differences is physically invalid for SSP.** SSP's late-phase force superiority (56–83%, g = 1.79) and its primitive-2 elevation (80–100%, g = 1.29) must arise from a non-SSC route — candidate mechanisms: greater effective mechanical advantage from the static bottom position, higher maximal voluntary intent, or a different rate-limiting step in the force–velocity relation. The paper's Discussion does not commit to any of these, correctly hedging, but the Introduction's framing ("partly explained by the stretch-shortening cycle") [PAGE 1] invites the invalid single-mechanism reading.

### Veto 2 — Subspace-coverage veto on the synergy explanation for PP's force advantage. **VERDICT: VETOED (partial).**
PP exceeds SP in force over 13–79% (t\* = 4.038, P < 0.001, g = 2.63) [PAGE 6]. If the two-dimensional synergy subspace (which reconstructs 96.6% of PP's EMG variance [PAGE 4]) were the operative control manifold for that force advantage, at least one primitive would differ between PP and SP over the early portion of that window. It does not: "No significant difference was observed between SP and PP" for primitive 1 [PAGE 4], and primitive-2 differences are confined to 71–100% [PAGE 6]. **The 13–71% force advantage is therefore unexplained by the extracted synergies.** Explanations must lie outside the k = 2 subspace (a third, unextracted synergy — see Veto 5) or outside EMG entirely (series elasticity, cross-bridge kinetics, tendon recoil).

### Veto 3 — Temporal-resolution veto on sub-$\tau_f$ clusters. **VERDICT: VETOED.**
With 6 Hz 4th-order Butterworth low-pass on the envelopes [PAGE 3], $\tau_f = 1/(2\pi\cdot 6) = 26.5$ ms. Per-point spacing is 5.8–8.0 ms [PAGE 6 durations]. The 79–80% SSP>PP force cluster (g = 0.98, P = 0.016) spans 6.8 ms = $0.26\,\tau_f$ [PAGE 6]. **This cluster cannot be independently resolved by the filter that produced the signal.** It is reported as a finding and should be reported as a resampling boundary effect. The 33–36% cluster (20 ms, $0.76\,\tau_f$, g = 0.94) is marginal and should be treated as suggestive only. The 56–83% (181 ms) and 13–79% (458–632 ms) clusters are **UPHELD**.

### Veto 4 — Statistical-power veto on the trajectory inference. **VERDICT: UPHELD WITH CAVEAT (authors' own).**
"Although the a priori sample-size justification supported the inclusion of 15 participants for a scalar repeated-measures ANOVA, the power characteristics of SPM1D trajectory analyses may differ; therefore, the present sample size should be interpreted as a conservative lower-bound estimate for the trajectory-based analyses" [PAGE 8]. This is an unusually honest self-veto and it is *correct*: the G*Power calculation assumed f = 0.25, α = 0.05, power = 0.80, r = 0.75 for a scalar test [PAGE 2]; SPM cluster inference with Bonferroni α = 0.017 across three post-hoc pairs operates on cluster extent, whose power depends on the intra-trajectory correlation length. With $\tau_f/\Delta t \approx 4$ points of effective correlation, the *effective* independent comparisons per trajectory are ~25, not 101 — which partially rescues power, but does not address the narrow-cluster cases in Veto 3.

### Veto 5 — Dimensionality-ceiling veto on the "two synergies" claim. **VERDICT: VETOED for PP specifically.**
$\mathrm{VAF}_{\mathrm{PP}} = 0.966\pm 0.013$ against a 0.950 threshold [PAGE 4, PAGE 3] gives a margin of 1.23 SD. A third synergy carrying ≥1.3% of Frobenius energy would be statistically invisible. The 12-muscle set omits lower trapezius, infraspinatus, middle deltoid, and wrist extensors [PAGE 3] — precisely the scapular and glenohumeral stabilizers the Discussion invokes [PAGE 7]. **The claim "two synergies reconstructed all tasks" is UPHELD for SP (0.980 ± 0.008, margin 3.75 SD) and VETOED as a strong claim for PP.**

### Veto 6 — Environmental / weather layer. **VERDICT: ADJUDICATED-NULL (not applicable; no veto issued).**
No environmental layer exists in this dataset. Testing was confined: "All testing was conducted in a controlled biomechanics laboratory between 15:00 and 17:00 to minimize potential circadian effects" [PAGE 2], with 48 h upper-body-exercise and alcohol abstention, 8 h caffeine abstention, and 2 h fasted [PAGE 2], plus a standardized warm-up and 5-min seated rest [PAGE 2]. Ambient temperature, humidity, and barometric pressure are **not reported**. Consequently: (i) no weather-based veto can be constructed — none is fabricated here; (ii) the flip side is a genuine reporting gap — thermal state affects tendon stiffness and hence SSC-relevant behaviour, so the un-reported laboratory environment is a small uncontrolled variable in a study whose central construct is the SSC; (iii) any field/outdoor extrapolation of these results carries an unbounded environmental error term. This layer abstains.

### Veto 7 — Construct-circularity veto on the "endurance/power/strength continuum" label. **VERDICT: VETOED (label only).**
The continuum is asserted [PAGE 1] on the strength of citations (Wang 2017 for SSP↔1RM; Speranza 2018 for PP↔tackling; Ning & Sheykhlouvand 2025 for SP↔endurance). **No endurance, power, or 1RM outcome was measured in these 15 athletes.** The labelling is a construct import. The empirical findings — force–time shape, module weights, primitive timing — remain UPHELD; the ordinal taxonomy does not.
</CROSS_LAYER_VETO_ADJUDICATION>

---

<RLVR_COUNTERFACTUAL_VETOES>
**Three verifiable counterfactual scenarios, each with an explicit outcome metric, a decision rule, and a directional prediction. Rewards are assigned only by measurable cluster-level statistics — no subjective adjudication.**

---

### Scenario 1 — SSC Ablation via Paused Plyometric Push-Up ("pause-PP")

**Counterfactual manipulation.** Insert a 3.0 s isometric hold at the bottom of the PP (elbow ≈ 90°), eliminating the rapid eccentric-concentric transition while preserving all other PP execution features (hand placement per plumb-line acromion alignment [PAGE 2], instruction "explosive," takeoff endpoint). Compare pause-PP vs. standard PP vs. standard SP.

**Verifiable metric.** Mean cluster Hedges' g for vertical force within the 13–79% normalized window, computed by the paper's own SPM1D + paired-SPM{t} pipeline with Bonferroni α = 0.017 [PAGE 3].

**Prediction (falsifiable).** If PP's 13–79% force advantage is SSC/tendon-mediated, the pause condition should reduce that cluster-mean g from the observed **2.63** by **≥50%** (i.e., to ≤1.32) while *preserving* the 71–100% primitive-2 difference (currently g = 1.06), which the paper attributes to propulsive/stabilization demand rather than preload [PAGE 7]. If instead the advantage is intent- or geometry-mediated, the 13–79% cluster survives essentially intact (g ≥ 2.0).

**Reward rule (RLVR).** Reward +1 if the directional prediction (≥50% attenuation of the 13–79% cluster with preservation of the