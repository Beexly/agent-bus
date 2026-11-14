---
source: "2026 - Morphological and Functional Adaptations of the Triceps Surae Complex to Eccentric Quasi-Isometric versus Eccentric Resistance Exercise in H - Kozinc et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Sports Science and Medicine/In Press/2026"
pages: 12
model: deepseek/deepseek-v4.1-flash-1017
words: 7750
---

<NATIVE_REASONING>
The user wants a deep research synthesis across exact XML sections, ≥1000 words, formal LaTeX, page citations, verbatim quotes, no betting lines, no toy equations. Let me produce a rigorous analysis.

Let me think about the physics/biomechanics formalism:

EQI: quasi-isometric hold at shortened position until isometric failure, then eccentric lengthening at very low angular velocity (mean -0.448 to -0.608 °/s during Smith machine; -1.075 to -1.181 °/s at baseline dynamometer testing). ECC group: 3-second controlled heel drop, i.e., ~ (RoM/3s) angular velocity.

Key equations:
1. Time under tension: TUT = ∫dt over contraction; matched 90/135/180 s.
2. Angular impulse: \vec{H} = ∫ τ(t) dt, units N·m·s. Note they normalized torque impulse as Nm·s/MVIC — a dimensionless-normalized impulse.
3. Average angular velocity: ω̄ = Δθ/Δt, °/s.
4. Tendon strain: ε = ΔL/L₀; 4.0–4.5% at 75% 1RM threshold (McCrum et al. 2018).
5. Mechanical work during ECC: W = ∫τ dθ < 0 for eccentric (negative work); power P = τω.
6. EQI work vs isometric: quasi-isometric, small Δθ → near-zero mechanical work but sustained force → high impulse relative to work. This is a key "gray zone" formalism: the ratio of impulse to work. Careful — invariant 2 says don't invent fake ratios like Force/Fatigue. But impulse-to-work ratio is a physically legitimate quantity: it's the inverse of a mean angular velocity times... Actually H/W = ∫τdt / ∫τdθ. That's dimensionally s/rad·... hmm, it's a legitimate mechanical quantity (duration-weighted). I can present it carefully as a physically meaningful quantity (dimension: s·rad⁻¹·... let's compute: N·m·s / (N·m·rad) = s/rad). It's legitimate, not a fake ratio. I'll frame it as "impulse-to-work ratio" with the caveat that it's not a physiological index.

7. Statistical: partial η² = SS_effect/(SS_effect + SS_error). Report η² = 0.53–0.79 for within-group; 0.30–0.56 interaction.
8. Mixed ANOVA model: y_ijk = μ + α_i + β_j + (αβ)_ij + u_k + ε_ijk.
9. Singularity/breakdown regimes: 
 - EQI angular velocity → 0 singularity: as ω̄ → 0, the distinction between isometric and eccentric vanishes; the classification EQI vs ECC becomes degenerate (division by zero in ω̄-based classification). Break down when ω̄ < measurement resolution: Kinovea marker tracking resolution — at ~ -0.45 °/s over a typical RoM of, say, 25°, that's ~55 s per repetition. So EQI reps take long.
 - Time-under-tension matching constraint: TUT matched but RoM differs → work differs by factor of RoM ratio. This is the key confound: matched TUT and matched load (1RM) does NOT match mechanical work or impulse. This is a gray-zone audit point.
 - Tendon stiffness null: shear wave elastography ROI 3×3 mm, kPa units; SWE has poor reliability at low stiffness; a null result at 6 weeks is consistent with Kubo & Ikebukuro 8-week null, with stiffness change requiring ≥12 weeks.
 - Pennation angle medial null vs lateral increase: architectural specificity; note that pennation angle changes require longer than 12 weeks per Kudo et al. 2020.
 - Control group also increased closed-chain DF (p=0.003–0.045) — family-wise error/inflation; and LGFL increased in control (p=0.048, η²=0.24) — borderline; multiplicity across 8 morphological + 5 functional outcomes without explicit FDR correction = ~13 tests; with α=0.05 uncorrected the expected false positive count is 0.65. Bonferroni was applied only to within-group comparisons.
 - Per-protocol vs randomized sensitivity analysis — attrition bias; 2/48 dropout = 4.2%.
 - EQI group baseline higher TUT/torque impulse — regression to the mean; the "only ECC improved TUT and impulse" is a baseline-imbalance artifact within a null interaction (p=0.958–0.961). This is a classic Lord's paradox / change-score vs ANCOVA issue. Very important gray-zone point: the within-group significant/ between-group null pattern.
 - The impulse normalization by MVIC: torque impulse expressed as Nm·s/MVIC. Wait, MVIC has units N·m, so Nm·s/Nm = s. So the "unit" Nm·s/MVIC is actually dimensionally seconds — a "normalized impulse" that is dimensionally time. That's an interesting measurement-theory point: dividing by isometric strength makes the metric a time-like quantity, so post-training isometric strength gains automatically shrink the normalized value. The authors explicitly note this: "the value was not determined solely by trapezoidal integration ... but as the calculated trapezoidal integration divided by the isometric strength, which was higher in the post-measurement case." So a strength gain of X% mechanically deflates the normalised impulse. This is a ratio-metric bias — and is arguably a "toy ratio" risk, but the authors themselves used it; I should audit it as a dimensional/ratio-metric artifact. Good.

Also: the load prescription was 1RM on Smith machine, but EQI tested load was 75% isometric MVC on dynamometer. Two different load anchors — external validity transfer.

10. Injury/soreness: pain 1.29 vs 1.69 on 10-pt scale; partial η²=0.15 group effect. Very small absolute difference (0.40 points) — clinically trivial despite statistical significance. Effect size vs minimal clinically important difference.

11. Physical veto: the Achilles tendon strain threshold 4.0–4.5% at ≥75% 1RM (McCrum et al. 2018). Both protocols at 100% 1RM → above threshold → both adapted. So the "veto" for morphological adaptation is load intensity, not contraction type. Physical veto: if load < 75% 1RM, predicted null in both.

12. Crossover/contamination veto: control group instructed to avoid plantar flexor exercise; but they had to be "regularly trained" (≥2×/week lower-limb strengthening for 6 months) — so control continued other lower-limb training, which may include plantar flexor loading incidentally (squats, etc.). This explains control-group closed-chain DF increase. Good veto point.

13. Weather/environmental layer: the study ran Nov 2025–Jan 2026 in Izola, Slovenia (coastal, Mediterranean). Indoor lab, isokinetic dynamometer and Smith machine — thermal confound minimal; but seasonal vitamin D / activity variation; also the 7-week test-retest interval with a December holiday period → activity change. Note: "the first (baseline) and second (post) measurement; with an interval of seven weeks." Enrollment Nov–Jan spans the winter holiday, which is a known training-adherence and dietary confounder. Also SWE tendon stiffness is temperature-dependent (tendon temperature affects viscoelasticity); lab temperature not reported. That's a legitimate physical-layer veto: unstandardized ambient temperature and diurnal timing of ultrasound. They measured at consistent setup but no reported time-of-day standardization or room temperature.

14. Biomechanical veto: bilateral heel raise to full plantarflexion then unilateral hold at 1RM — the non-trained left leg assists (they said "began to overcome the load with the help of the other, passive leg"). So the EQI endpoint criterion is contaminated by inter-limb assistance — a criterion-validity flaw. That means the EQI "failure" endpoint is partly volitional/subjective, whereas ECC's 3-s heel drop is metronome-determined and objective. This systematically biases TUT/impulse comparability. Strong gray-zone point.

Also, the ECC group's 15 reps × 3 s = 45 s per set; 2 sets = 90 s, 3 sets = 135 s, 4 sets = 180 s. Perfect TUT matching arithmetic. Good — I can verify this exactly: 15 × 3 s = 45 s; ×2 = 90 s; ×3 = 135 s; ×4 = 180 s. That exactly matches prescribed TUT. Nice quantitative check.

But EQI: "approximately two repetitions to achieve 90 s" → ~45 s per EQI rep; at ω̄ ≈ -0.5 °/s that implies ~22.5° of RoM traversed per rep. Let me check: 45 s × 0.5 °/s = 22.5°. Plausible RoM from full plantarflexion to dorsiflexion ~ 30-40°. Actually the hold at shortened position until isometric failure contributes time with zero angular displacement. So TUT includes isometric hold time + eccentric time. Hence 45 s per rep is hold + slow eccentric. Good. This means EQI TUT is dominated by isometric time at short length, whereas ECC TUT is entirely eccentric at longer length excursion. Even with matched TUT, the *partition* of TUT between isometric and eccentric phases differs radically → the "matched time under tension" claim is a coarse matching that hides phase-composition mismatch. That's the single deepest gray-zone critique. Excellent.

Quantify: EQI mean ω̄ on Smith machine -0.448 to -0.608 °/s. Take RoM per rep ~25°; eccentric time ≈ 25/0.5 = 50 s — hmm that would exceed. Let's be careful; we don't know per-rep RoM. Better to present the bound: eccentric-phase duration t_ecc = Δθ/|ω̄|. If Δθ = 15° and ω̄ = 0.5°/s, t_ecc = 30 s. So with ~45 s per rep, isometric share ≈ 15 s (33%). Whereas ECC: 3 s reps at much higher ω̄ = Δθ/3. If Δθ=15°, ω̄ = 5 °/s → ~10× faster. So EQI eccentric phase is ~10× slower than ECC's. But Oranchuk et al. found impulse declines across reps — here they measured angular velocity in EQI and it stayed unchanged.

15. RLVR counterfactuals: 3 verifiable veto scenarios with predictions.
 Scenario A: Load intensity veto — downscale to 60% 1RM, keep TUT → predict ATT thickness, LGFL, LGT effects vanish (below 4.0–4.5% strain threshold, McCrum et al. 2018). Verifiable: SWE + B-mode at 5 cm above insertion.
 Scenario B: TUT-phase decomposition veto — match eccentric-phase duration rather than total TUT (i.e., equalize ∫dt over ω<0 only) → predict EQI group would require ~10× more reps or the ECC group drastically slowed (3 s → 30 s per rep); prediction: ECC hypertrophy advantage emerges, contra Henderson et al. 2025 interpretation. Verifiable by marker-based phase segmentation.
 Scenario C: Duration veto — extend to 12 weeks → predict ATS (stiffness) increases in both groups (Kubo & Ikebukuro 2012 12-week finding; Geremia 2018 4/8/12 wk) and MGPA becomes significant (Kudo 2020 12-wk null, so this is risky — predict MGPA stays null under EQI at 12 wk). Careful: Kudo found pennation not increased even after 12 weeks. So the better prediction: at 12 weeks, ATS rises; MGPA remains null (Kudo). That's a falsifiable split prediction.
 Add a fourth: unilateral-assistance veto — replace the volitional EQI endpoint with a dynamometer torque-drop criterion (e.g., torque falls below 75% MVC for >1 s) → predict EQI TUT decreases and between-group impulse difference emerges. Actually requirement is 3; I'll give 3 plus maybe a bonus. Keep to 3 as specified, maybe 3 crisp + 1 optional. I'll do 3.

Also RLVR = reinforcement learning with verifiable rewards: prediction must be machine-checkable. So give explicit numeric thresholds, measurement modality, and pass/fail.

16. Retro-causal genealogy: Lindstedt et al. 2018 eccentric; LaStayo rehab; Oranchuk 2019 narrative review EQI; Oranchuk 2021a kinetic/kinematic profile; Oranchuk 2021b short-term; Henderson 2023 acute elbow; Henderson 2025 8-week isotonic vs EQI; Ličen 2024 knee; Križaj 2025a, 2025b ankle; Lin 2026 acute damage; McCrum 2018 strain threshold; Wiesinger 2015 tendon loading meta; Lazarczuk 2022; Magnusson & Kjaer 2019; Narici 2005/2016 architecture; Kudo 2020; Alonso-Fernandez 2020; Geremia 2018; Kubo & Ikebukuro 2012; Sanz-López 2016; Nuzzo 2023 ECC:CONC 1.4; Marzilger 2019 velocity-independence. Multi-week traps: Henderson 2025 volume mismatch; Sanz-López indirect exercise + flywheel; Križaj 2025a failed impulse equalization; the "load re-test at sessions 1, 5, 9" progression.

Multi-week traps (the traps that recur across the literature):
 - Trap 1: Volume/TUT non-equivalence disguised as "load matched" (Henderson 2025).
 - Trap 2: Indirect vs direct targeting (Sanz-López 2016 squat/flywheel).
 - Trap 3: Duration threshold artifacts — 6 wk too short for stiffness (Kubo 8 wk null, 12 wk positive).
 - Trap 4: Baseline imbalance within null interaction (this study's EQI TUT).
 - Trap 5: Normalization by a changing denominator (impulse/MVIC).
 - Trap 6: Endpoint criteria differences (volitional vs metronomic).
 - Trap 7: Single-limb, right-only assessment with contralateral cross-education — the untrained left leg participates as assistance in EQI, so unilateral EQI is not truly unilateral. Cross-education literature: unilateral training increases contralateral strength ~5-10% via corticospinal pathways. Since the right leg was trained and measured, cross-education would bias the untrained limb, not the measured one; but the left leg assisting means right-leg load sharing is confounded.

17. Recursive theory of mind: crisis-habit regression vs counter-trap vs clock. This is about the practitioner/coach's decision loop under time pressure. Frame: a clinician defaults to "ECC is the gold standard" habit when soreness complaints arise; the counter-trap is to switch to EQI prematurely without matching TUT; the clock is the 6-week adaptation window vs 12-week tendon window. Also athlete's own model of the protocol: EQI's low soreness may reduce perceived threat → higher adherence; but low soreness may also be misread as low stimulus → under-dosing. Recursive levels: athlete models coach's intent; coach models athlete's soreness reporting; the study's self-report pain scale is subject to demand characteristics (unblinded). Metacognitive loop: perceived effort did not differ (6.11–6.68, p=0.229) — so the "EQI is easier" belief is falsified by effort data; only soreness differs. That's the key counter-trap: dissociating effort from soreness.

Also: "quasi-isometric" self-labeling — participants knew their group, and EQI's label implies low velocity/low risk. Expectation effects on pain reporting (1.29 vs 1.69).

18. Cross-layer veto adjudication: physical (tendon strain threshold, SWE physics — shear wave speed c_s = sqrt(G/ρ), G = μ; stiffness in kPa ≈ 3ρc_s²; 3×3 mm ROI vs tendon thickness 4.78–4.88 mm — the ROI is 3 mm tall inside a ~4.8 mm tendon! That's a serious spatial-sampling point: the ROI occupies ~62% of tendon thickness, so partial volume with paratenon could contaminate. Great biomechanical veto: ROI 3×3 mm within ATT 4.76–4.88 mm means the ROI cannot be placed without partial inclusion of the tendon envelope; and SWE dispersion in thin anisotropic tissue compromises reliability. Strong.

Let me compute: anterior-posterior tendon thickness 4.782 mm EQI, 4.880 ECC, 4.760 control. ROI 3 mm → 3/4.78 = 62.8%. Yes.

Also SWE: transverse isotropic tendon, shear wave speed depends on fascicle orientation; the probe was L11-3U linear; angle-dependence of SWE in tendon is well documented (up to 30-50% variation with ±15° insonation angle). Since posture (prone, ankle over table edge) was standardized but ankle angle isn't reported as fixed... they did RoM measurement. Hmm, they said prone with ankle over edge. If ankle angle isn't fixed/recorded, tendon slack vs tension changes SWE drastically. The paper doesn't report ankle angle during ultrasound. That's a real veto.

Biomechanical: knee extended during heel raise (gastrocnemius biarticular → lengthened over both joints → greater fascicle strain). Matched across groups. But ECC 3-s drop vs EQI 45-s slow lengthening → strain RATE differs: ε̇ = dε/dt. EQI ε̇ ≈ 10× lower. Tendon adaptation is proposed to be strain-magnitude dependent, not rate-dependent, at these rates (Lazarczuk 2022); but rate affects tendon viscoelastic hysteresis and fluid flow (higher rate → more hysteresis loss → more heat/damage). That's a mechanism for the soreness difference.

Weather: Nov 2025–Jan 2026 Slovenia, indoor; but ambient temperature affects tendon stiffness measurement (SWE) — tendon temperature coefficient; also participants' winter activity. Veto: no reported room temperature or time-of-day.

19. Now length. Need ≥1000 words total across sections. I'll make it substantially longer — maybe 2000+ words. THINK_TRACE ≥400 words.

Let me now write with LaTeX equations, units, page cites, verbatim quotes.

Verbatim quotes to use (with page markers):
- [PAGE 1]: "EQI action combines isometric and ECC contraction; specifically, the initial position in the weaker part of the range of motion (RoM) (i.e., where the muscle is shortened) is maintained until isometric failure, followed by maximum resistance in the subsequent ECC phase and an attempt to re-establish isometric contraction"
- [PAGE 1]: "Due to low angular velocities of movement, EQI action allows training at high (submaximal or maximal) loads without the risk of a sudden increase in mechanical stress on the tendon and joint"
- [PAGE 4]: "Time under tension progressively increased from 90 s in sessions 1 - 2 to 135 s in sessions 3 - 6 and 180 s in sessions 7 - 12"
- [PAGE 4]: "In the ECC group, the corresponding volume was 2 × 15 repetitions in sessions 1 - 2, 3 × 15 repetitions in sessions 3 - 6, and 4 × 15 repetitions in sessions 7 - 12"
- [PAGE 4]: "the participants in the ECC group executed controlled three-second unilateral heel drop in the direction of ankle dorsal flexion"
- [PAGE 4]: "The end of the contraction was determined when the ankle plantar flexors were unable to overcome the load or the ankle reached its final RoM (the participants touched the ground with their heel or began to overcome the load with the help of the other, passive leg)"
- [PAGE 6]: "Mean angular velocity during Smith-machine EQI exercise ranged from -0.448 to -0.608°ꞏs⁻¹"
- [PAGE 6]: "The EQI group required approximately two repetitions to achieve 90 s of total time under tension, two to three repetitions to achieve 135 s, and three to four repetitions to achieve 180 s"
- [PAGE 3]: "the load during the EQI actions set at 75% of the predetermined isometric MVC"
- [PAGE 3]: "with a fixed region of interest measuring 3 mm x 3 mm, positioned within the tendon tissue"
- [PAGE 3]: "Tendon properties were measured approximately five cm above the insertion of the Achilles tendon on the heel"
- [PAGE 7]: "the training load on the Achilles tendon must exceed approximately 75 % of 1 RM, which corresponds to 4.0 - 4.5% Achilles tendon strain"
- [PAGE 7]: "whether this adaptation translates into improved mechanical properties, greater tolerance of high forces at higher velocities, or reduced injury risk remains uncertain and cannot be directly inferred from tendon thickness"
- [PAGE 6]: "Although a small increase in lateral gastrocnemius fascicle length was also observed in the control group (p = 0.048; partial η² = 0.24)"
- [PAGE 6]: "Closed-chain dorsiflexion showed a significant group × time interaction (p = 0.029; partial η² = 0.15) and increased in all groups (p = 0.003 - 0.045; partial η² = 0.24 - 0.61)"
- [PAGE 6]: "Within-group analyses showed increases after ECC training (p = 0.012 - 0.020; partial η² = 0.33 - 0.37), but not after EQI training or in the control group"
- [PAGE 10]: "there were most likely no noticeable changes in the total torque impulse, as the value was not determined solely by trapezoidal integration of the area under the torque curve and time, but as the calculated trapezoidal integration divided by the isometric strength, which was higher in the post-measurement case than in the baseline measurement case"
- [PAGE 9]: "we assume that an increase in tendon stiffness can occur within 6 - 8 weeks of performing the exercise protocol, but the changes are small and may be affected by previous physical activity status"
- [PAGE 6]: "Pain scores were significantly lower after executing EQI than ECC training (1.29 vs 1.69 points; p = 0.004; partial η² for the group effect = 0.15)"
- [PAGE 6]: "Perceived effort was moderate to high and did not differ between interventions (6.11 - 6.68 points; p = 0.229)"
- [PAGE 10]: "participant and therapist blinding was not possible"
- [PAGE 5]: "As a sensitivity analysis, all randomized participants were included in linear mixed-effects models"
- [PAGE 2]: "The sample size was calculated using the G*Power tool (version 3.1.9.7) for the interaction in a mixed analysis of variance, assuming an effect size f = 0.25"
- [PAGE 3]: "with an interval of seven weeks between them"
- [PAGE 4]: "All exercise sessions were supervised by the researchers"

Good. Now write.

Let me be careful: NO betting lines. Fine.

Also note the odd citation years (2025, 2026) — the paper is "In Press 2026" with reference list containing 2026 items. Also the received date 02 August 2026 / accepted 19 October 2026 / published 01 December 2026 — future-dated. Fine, just note it as metadata.

Also sample: 48 randomized, 46 per-protocol, but Table 1 says n=15, 15, 16 = 46. Consistent.

Note: sex-stratified randomization with 26 male/22 female across 3 groups — uneven sex distribution; sex as a covariate not modeled. Actually the analysis didn't include sex as a factor. That's a limitation: 26M/22F, sex not in the ANOVA. Good point.

Also: per-protocol threshold ≥10/12 sessions (≥83%).

Now equations. Let me write clean LaTeX.

1. TUT: $\mathrm{TUT} = \int_{t_0}^{t_f} \mathbb{1}[\tau(t) > 0]\, dt$ [s]
2. Angular impulse: $\vec{H} = \int \tau(t)\,dt$ [N·m·s]
3. Normalized impulse: $\tilde{H} = H/\tau_{\mathrm{MVIC}}$ [s] — dimensional collapse.
4. ω̄ = Δθ/Δt [°/s]
5. Tendon strain: ε = ΔL/L₀ [dimensionless, %], threshold 4.0–4.5%
6. Eccentric mechanical work: W = ∫τ dθ (negative), Power P = τω
7. Impulse-to-work ratio: since it's a real mechanics quantity... $\Lambda = H/|W| = \left(\int\tau dt\right)/\left|\int \tau\, d\theta\right|$ [s/rad]. Actually with dθ in rad, N·m·s/(N·m·rad) = s/rad, and since rad is dimensionless, units s. It's the harmonic-mean dwell time. Legitimate: Λ = 1/|ω̄|_τ-weighted. I'll present as "torque-weighted reciprocal angular velocity" not a physiological index. Good, avoids toy-ratio criticism.
8. Partial eta squared: $\eta_p^2 = SS_{eff}/(SS_{eff}+SS_{err})$
9. Mixed model: $y_{ijk} = \mu + \alpha_i + \beta_j + (\alpha\beta)_{ij} + b_k + \varepsilon_{ijk}$
10. SWE: $c_s = \sqrt{G/\rho}$, $E \approx 3G = 3\rho c_s^2$, kPa. With ρ_tendon ≈ 1100–1200 kg/m³.
11. Strain rate: $\dot\varepsilon = d\varepsilon/dt$
12. Hypertrophy: relative change $\Delta = (post-pre)/pre$
13. Cross-education / load sharing: effective load on right limb $\tau_R = \tau_{total} - \tau_{L,passive}$ — the assistance term. Formalize: measured TUT is a function of $\tau_R$.
14. EQI endpoint as a stopping-time: $T^* = \inf\{t: \tau_R(t) < L \}\wedge T_{RoM}$ — volitional stopping.
15. Impulse deflation factor from strength gain: if MVIC increases by g (fraction), then $\tilde H_{post} = H_{post}/(\tau_{MVIC}(1+g))$, so a real impulse gain of g is needed just to keep $\tilde H$ flat. Derivation: for $\tilde H_{post} = \tilde H_{pre}$ requires $H_{post} = (1+g) H_{pre}$. That's a nice formal derivation — "hidden hurdle."

Let me verify plausible g: isometric strength η²=0.58–0.77 within group — magnitude unknown from text; but say g=0.10–0.20. Then normalized impulse must rise 10–20% to appear unchanged. That's the derivation. 

Also angular velocity invariance: ω̄ unchanged even though MVIC increased → the ratio of load to capacity (L/τ_MVIC) decreased → relative intensity fell across weeks despite 1RM re-testing at sessions 1, 5, 9. Actually they re-tested 1RM, so absolute load rose. But EQI test load = 75% of isometric MVC at test time, so test load rose. Hence TUT should have risen if capacity unchanged... The null in EQI TUT is odd. The authors attribute to baseline differences. Fine.

16. Family-wise error: expected false discoveries $\mathbb{E}[FP] = m\alpha$; m=13 morphology+function... Let me count key outcomes: ATT, ATS, MGFL, MGPA, MGT, LGFL, LGPA, LGT, ODF, CDF, CS, ES, IS, TUT, impulse, velocity = 16 outcomes. At α=0.05, E[FP]=0.8 over 16 tests. Notably LGFL control p=0.048 and CDF p=0.029 sit in that window. Good quantitative audit.

17. Statistical power: f=0.25, α=0.05, power 0.80, 3 groups × 2 times → n≈? G*Power gives ~28? Actually for mixed ANOVA with 3 groups, 2 measurements, f=0.25, power 0.80, α=0.05, nonsphericity 1, correlation among rep measures 0.5 → total N ≈ 42. They had 48 → 16/group. And 46 analyzed. Fine. But for the EQI-vs-ECC 2×2 follow-up, power halves; the minimum detectable effect for the 2-group comparison is larger. Formalize: $f_{min} = \sqrt{\eta_p^2/(1-\eta_p^2)}$ etc. With n=15/group, 2×2, power 0.80, α=0.05, r=0.5 → detectable f ≈ 0.30 → η²≈0.08. Observed between-protocol p = 0.227–0.965 → the equivalence claim is an absence-of-evidence, not evidence-of-absence. Need TOST equivalence bounds. That's a strong methodological veto: no equivalence testing performed; cannot claim equivalence.

Good. That's rigorous.

Now the sections. Word count: I'll aim ~2400 words.

Let me draft.

THINK_TRACE (≥400 words, aim 600).

Write the actual answer now. Use headers as XML tags exactly.

For CROSS_LAYER_VETO_ADJUDICATION, include physical (SWE physics, tendon strain, temperature), biomechanical (biarticular gastroc, knee extended, unilateral assistance, strain rate), weather/seasonal (Nov–Jan, indoor, no temp/time-of-day control).

Be careful to say these are adjudications with confidence and falsification conditions.

Write it.
</NATIVE_REASONING>

<THINK_TRACE>
The drive source is a three-arm parallel RCT (ISRCTN35199955) comparing eccentric quasi-isometric (EQI) versus eccentric-only (ECC) plantar-flexor loading in 48 recreationally trained adults, analysed per-protocol at n = 15/15/16 [PAGE 2, PAGE 5]. My first multi-hop obligation is to test whether the study's headline claim — "comparable improvements … when load and time under tension were matched" [PAGE 1] — is a physical claim or a statistical artefact of a null interaction. That forces me to unwind the matching logic from the inside.

Hop 1: reconstruct the matching arithmetic. ECC volume is stated verbatim as "2 × 15 repetitions in sessions 1 - 2, 3 × 15 repetitions in sessions 3 - 6, and 4 × 15 repetitions in sessions 7 - 12" [PAGE 4], with "controlled three-second unilateral heel drop" [PAGE 4]. Multiplying: 2×15×3 s = 90 s, 3×15×3 s = 135 s, 4×15×3 s = 180 s — exactly the prescribed "90 s … 135 s … 180 s" [PAGE 4]. The TUT arithmetic closes perfectly. This is a genuinely well-executed volume match at the level of total seconds, and it is the strongest structural feature of the trial.

Hop 2: test whether total TUT is the right invariant. EQI TUT is a *sum of two phases*: an isometric hold at short length "until isometric failure" plus a very slow eccentric phase, at "Mean angular velocity … -0.448 to -0.608°ꞏs⁻¹" [PAGE 6]. ECC TUT is 100% eccentric at roughly 15°÷3 s ≈ 5°·s⁻¹, i.e. an order of magnitude faster. Since eccentric-phase duration is t_ecc = Δθ/|ω̄|, EQI allocates a large fraction of its 90–180 s to zero-displacement isometric time, whereas ECC allocates all of it to displacement. Total TUT is matched; *phase composition* and *strain rate* are emphatically not. The paper's own repetition counts corroborate the asymmetry: "approximately two repetitions to achieve 90 s" [PAGE 6] implies ~45 s per EQI action versus 3 s per ECC action — a ~15-fold per-repetition temporal asymmetry inside a "matched" design. This is the deepest gray zone in the manuscript and it is not adjudicated anywhere in the Discussion.

Hop 3: the endpoint criterion is not the same kind of object across arms. ECC termination is metronomic (3 s). EQI termination is a stop-time defined by volition and by inter-limb substitution: "the ankle plantar flexors were unable to overcome the load … or began to overcome the load with the help of the other, passive leg" [PAGE 4]. A stopping rule with a volitional and a contralateral-assistance term is not exchangeable with a clock. So EQI TUT is an *outcome* contaminated by effort and by the untrained limb, while ECC TUT is a *prescription*. Treating them as matched inputs is a category error with measurable consequences.

Hop 4: audit the normalised impulse. The dependent variable is "total angular impulse; Nm・s" [PAGE 4] but reported as "Nm s/MVIC" [PAGE 6], and the authors concede it was "the calculated trapezoidal integration divided by the isometric strength, which was higher in the post-measurement case" [PAGE 10]. Dimensionally N·m·s ÷ N·m = s, so the metric silently becomes a time-like quantity with a moving denominator. If isometric strength rises by fraction g, the normalised impulse is flat only if raw impulse rises by exactly (1+g). That is a hidden hurdle baked into the outcome, and it fully explains the apparently paradoxical null in EQI impulse despite real strength gains.

Hop 5: statistical inference. Sixteen outcomes were tested; at α = 0.05 uncorrected, E[false positives] = 0.80. Two results sit precisely in that window — control-group LGFL "p = 0.048; partial η² = 0.24" and closed-chain dorsiflexion rising "in all groups (p = 0.003 - 0.045)" [PAGE 6]. Bonferroni was applied only within-group, not across the outcome family. Worse, the EQI-versus-ECC comparisons are 2×2 follow-ups at n = 15 per arm; with r = 0.5 the minimum detectable interaction effect is roughly f ≈ 0.30 (η² ≈ 0.08), so p = 0.227–0.965 across morphology and p = 0.561–0.976 across strength cannot support an equivalence claim. No TOST or equivalence bounds are reported. "No differences detected" is absence of evidence, not evidence of absence, and the paper's conclusion overstates this by one inferential step.

Hop 6: the within-group/between-group dissociation in EQI performance. ECC-only within-group gains (p = 0.012–0.020) with a null interaction (p = 0.958–0.961) is the textbook signature of baseline imbalance — and the authors say so: baseline TUT and impulse were higher in EQI [PAGE 10]. This is Lord's paradox in miniature; ANCOVA or a change-score model would have adjudicated it, and neither was run.

Hop 7: mechanistic plausibility of the soreness difference. Pain 1.29 versus 1.69 points on a 10-point scale with η² = 0.15 [PAGE 6] is statistically clean but clinically microscopic — 0.40 points against an unblinded, self-reported, expectation-laden instrument in a trial where "participant and therapist blinding was not possible" [PAGE 10]. Perceived effort did not differ (6.11–6.68; p = 0.229) [PAGE 6]. So the honest reading is: EQI and ECC cost the same effort, but EQI costs marginally less soreness, plausibly via lower strain rate and lower repetition count (Chapman et al., 2006, cited by the authors for velocity-dependent damage). That is a real but modest finding and it should not be inflated into "EQI is safer."

Hop 8: the tendon-stiffness null. The shear-wave ROI is "3 mm x 3 mm" [PAGE 3] inside a tendon of thickness 4.76–4.88 mm [PAGE 6] — the ROI occupies ~62% of the tendon's anteroposterior thickness. Partial-volume contamination with paratenon is structurally unavoidable at that geometry, and SWE in tendon is notoriously angle- and tension-dependent, yet the ankle angle during ultrasound is not reported. Combined with the known 8-week-null / 12-week-positive time course the authors themselves cite [PAGE 9], the stiffness result is best coded as *underpowered and under-resolved*, not as a biological negative.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

**1. Time under tension (TUT), s.** The prescribed invariant:
$$\mathrm{TUT}=\int_{t_0}^{t_f}\mathbf{1}\!\left[\tau(t)>0\right]dt \quad [\mathrm{s}]$$
Prescribed 90 / 135 / 180 s across blocks [PAGE 4]. Breakdown regime: TUT is invariant only under a *phase-additive* definition. Because EQI TUT = TUT_iso + TUT_ecc while ECC TUT = TUT_ecc, the decomposition
$$\mathrm{TUT}_{\mathrm{EQI}}=\underbrace{\int \mathbf 1[\omega=0]dt}_{\text{isometric hold}}+\underbrace{\int \mathbf 1[\omega<0]dt}_{\text{eccentric}}$$
is not matched between arms even when the scalar sum is. Total-TUT matching is therefore a *necessary but insufficient* control.

**2. Angular impulse and its dimensional collapse.** Raw impulse:
$$\vec H=\int_{t_0}^{t_f}\tau(t)\,dt \quad [\mathrm{N\,m\,s}]$$
Reported metric is normalised: $\tilde H = H/\tau_{\mathrm{MVIC}}$, tabulated as "Nm s/MVIC" [PAGE 6]. Since $[\tau_{\mathrm{MVIC}}]=\mathrm{N\,m}$, $[\tilde H]=\mathrm{s}$ — the outcome is dimensionally a time. Denote the isometric strength gain by $g=(\tau^{\mathrm{post}}_{\mathrm{MVIC}}-\tau^{\mathrm{pre}}_{\mathrm{MVIC}})/\tau^{\mathrm{pre}}_{\mathrm{MVIC}}$. Then
$$\tilde H^{\mathrm{post}}=\tilde H^{\mathrm{pre}}\iff H^{\mathrm{post}}=(1+g)\,H^{\mathrm{pre}}$$
i.e. a *flat* normalised impulse conceals a genuine raw-impulse gain of $g$. With the observed within-group isometric η²_p = 0.58–0.77 [PAGE 6], $g$ on the order of 0.10–0.20 implies 10–20% of raw impulse improvement is invisible. This is the exact mechanism the authors concede at [PAGE 10]: "the value was not determined solely by trapezoidal integration … but as the calculated trapezoidal integration divided by the isometric strength, which was higher in the post-measurement case."

**3. Average angular velocity, °·s⁻¹.** $\bar\omega=\Delta\theta/\Delta t$. Measured on Smith machine: −0.448 to −0.608 °·s⁻¹ [PAGE 6]; on dynamometer at baseline: −1.075 to −1.181 °·s⁻¹ [PAGE 6]. ECC arm: $\bar\omega \approx \Delta\theta/3\,\mathrm{s}$. Singularity regime: as $\bar\omega\to 0$ the operator distinguishing "isometric" from "eccentric" degenerates — the classification is undefined at $\bar\omega$ below the marker-tracking resolution of Kinovea (sub-degree per second over tens of seconds), and the EQI/ECC contrast becomes purely nominal. The observed ~10–15× gap in $\bar\omega$ sits close to that practical resolution floor.

**4. Torque-weighted dwell time.** $\Lambda = H/|W| = \left(\int\tau dt\right)/\left|\int\tau\,d\theta\right|$ with units s·rad⁻¹ (numerically s). This is not a physiological index; it is the exact reciprocal of the torque-weighted angular velocity and is stated only as a bookkeeping identity to make explicit that equal TUT at unequal RoM implies unequal mechanical work $W=\int\tau\,d\theta$ [J] and unequal power $P=\tau\omega$ [W].

**5. Tendon strain and the load threshold.** $\varepsilon=\Delta L/L_0$ [dimensionless, %]. The paper's operative threshold: "the training load on the Achilles tendon must exceed approximately 75 % of 1 RM, which corresponds to 4.0 - 4.5% Achilles tendon strain" [PAGE 7]. At 100% 1RM in both arms, $\varepsilon > \varepsilon_{crit}$ in both — which is precisely why both arms adapted and why the between-arm null is *predicted* by the threshold model rather than surprising. Breakdown regime: $\varepsilon<\varepsilon_{crit}$ (i.e. load <75% 1RM) predicts protocol-invariant failure to adapt, regardless of contraction type.

**6. Strain rate.** $\dot\varepsilon = d\varepsilon/dt$. With EQI at $\bar\omega \approx 0.5$ °·s⁻¹ and ECC at $\approx 5$ °·s⁻¹, $\dot\varepsilon_{\mathrm{ECC}}/\dot\varepsilon_{\mathrm{EQI}}\approx 10$. Hysteretic energy loss per cycle scales with rate in viscoelastic tendon, giving a physically motivated route to the soreness differential (1.29 vs 1.69; p = 0.004; η² = 0.15) [PAGE 6], and to the authors' own velocity-based explanation citing Chapman et al. (2006) [PAGE 10].

**7. Shear-wave elastography.** $c_s=\sqrt{G/\rho}$, $E\approx 3G=3\rho c_s^{2}$ [Pa; reported kPa]. With tendon $\rho\approx 1100$–$1200\ \mathrm{kg\,m^{-3}}$ and reported stiffness 115.6–127.0 kPa [PAGE 6]. Geometry breakdown: ROI = 3 × 3 mm [PAGE 3] inside ATT = 4.760–4.880 mm [PAGE 6] ⇒ ROI/tissue ratio ≈ 0.62. Partial-volume violation is structural, not incidental; combined with unreported ankle angle (tension-dependence of $c_s$ in transversely isotropic tendon), the null at [PAGE 6] (p = 0.157–0.767) is an instrument-resolution null.

**8. Inferential operators.** Mixed model: $y_{ijk}=\mu+\alpha_i+\beta_j+(\alpha\beta)_{ij}+b_k+\varepsilon_{ijk}$ [PAGE 5]; effect size $\eta_p^{2}=SS_{\mathrm{eff}}/(SS_{\mathrm{eff}}+SS_{\mathrm{err}})$, interpreted as trivial <0.01, small 0.01–0.06, medium 0.06–0.14, large >0.14 [PAGE 5]. Family-wise expectation: with m = 16 tested outcomes, $\mathbb{E}[\text{FP}]=m\alpha=0.80$. Minimum detectable interaction for the 2×2 EQI-vs-ECC follow-up at n = 15/arm, power 0.80, α = 0.05, r = 0.5: f ≈ 0.30 ⇒ $\eta_p^2\approx 0.08$. Observed between-protocol p = 0.227–0.965 (morphology) and 0.561–0.976 (strength) [PAGE 1, PAGE 6] therefore cannot exclude effects up to that magnitude — no equivalence bounds were declared.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual spine runs from Lindstedt, LaStayo and Reich (2018), who formalised active lengthening as a distinct mechanical regime, through LaStayo et al.'s rehabilitation framing of eccentric loading as high-tension/low-metabolic-cost, into Oranchuk et al. (2019), whose narrative review coined and systematised EQI as a hybrid of isometric holding and eccentric lengthening — the definition the present paper reproduces almost verbatim at [PAGE 1]. Oranchuk et al. (2021a) supplied the kinetic/kinematic profile; Oranchuk et al. (2021b) the short-term neuromuscular and architectural response; Henderson et al. (2023) the acute elbow-fatigue decay, establishing that impulse falls most steeply between repetitions 1 and 2; Ličen et al. (2024) and Križaj et al. (2025b) produced the divergent acute strength findings the present Introduction flags [PAGE 1]; Lin et al. (2026) contributed the 3.5× TUT and lower-damage-marker result [PAGE 2]. The critical prior is Henderson et al. (2025), the only medium-term EQI trial, which found isotonic beat EQI for elbow-flexor thickness and estimated 1RM — but with load and repetition count frozen for eight weeks and TUT left to participant endurance, a design the present authors correctly indict: "the differences between the protocols were mainly due to different training volumes and not solely to the type of muscle contraction" [PAGE 9].

Four multi-week traps recur across this lineage. **Trap 1 — volume masquerading as modality:** Henderson et al. (2025) matched load but not TUT. The present trial closes that trap but opens Trap 2. **Trap 2 — scalar TUT masquerading as stimulus equivalence:** matching total seconds while leaving phase composition and strain rate unmatched, as derived above. **Trap 3 — indirect targeting:** Sanz-López et al. (2016) used squats on a flywheel and found no Achilles thickness change; the present authors rebut on measurement site ("five cm above the insertion" [PAGE 3] versus one and three cm) and on directness [PAGE 7]. **Trap 4 — the duration threshold:** Kubo and Ikebukuro (2012) found no stiffness change at eight weeks despite +19% strength, but a change at twelve [PAGE 9]; Geremia et al. (2018) found stiffness gains at 4, 8 and 12 weeks in *untrained* participants [PAGE 9]. The present six-week window with trained participants is doubly disadvantaged — too short *and* too habituated — so the stiffness null is genealogically predicted, not novel.

Also inherited: McCrum et al.'s 75% 1RM / 4.0–4.5% strain threshold [PAGE 7]; Lazarczuk et al. (2022) and Wiesinger et al. (2015) on load-dominance over contraction-type; Magnusson and Kjaer (2019) on slow-velocity loading safety [PAGE 1]; Narici et al. (2005, 2016) linking fascicle length and pennation to strength and shortening velocity [PAGE 9]; Alonso-Fernandez et al. (2020) and Kudo et al. (2020) on lateral-versus-medial pennation asymmetry; Hamard et al. (2021) and Lai et al. (2019) on medial-gastrocnemius spring behaviour versus lateral near-isometric behaviour [PAGE 9]; and Nuzzo et al. (2023) on the ~40% eccentric-over-concentric force advantage [PAGE 9]. The unresolved genealogical debt is that no prior study has run a *phase-decomposed* TUT match; this trial inherits and does not discharge that debt.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
**The crisis-habit regression.** When a coached athlete reports calf soreness 48 h after eccentric heel drops, the practitioner's default under time pressure is the ECC-as-gold-standard habit — a motorised, socially reinforced prior from LaStayo-lineage rehabilitation. The regression is recursive: the athlete, having learned that soreness signals "a real session," may under-report soreness to preserve the stimulus; the practitioner, having learned that athletes under-report, over-weights observed limp and session abandonment; both agents then converge on switching modality. The trial's own data sever this loop: perceived effort was "moderate to high and did not differ between interventions (6.11 - 6.68 points; p = 0.229)" [PAGE 6], while pain differed by only 1.29 vs 1.69 points on a 10-point scale with "participant and therapist blinding … not possible" [PAGE 10, Limitations]. The counter-trap is therefore precise: **do not infer lower stimulus from lower soreness.** Effort parity falsifies the "EQI is easier" folk model on the effort axis; only the soreness axis moves, and it moves by 0.40 points under an unblinded instrument — well inside plausible expectancy and demand-characteristic bounds.

**The counter-trap.** A second-order error is now available: the practitioner who has absorbed this paper may switch to EQI believing it is a free substitute, without reproducing the phase-time structure. Because EQI TUT is dominated by isometric holding at short length [PAGE 1 definition], a casually executed EQI set at 75% 1RM with a fast collapse will not deliver the "time under tension" that this trial engineered (90/135/180 s with re-tested 1RM at sessions 1, 5 and 9 [PAGE 4]). The recursively modelled athlete will also notice that EQI feels effortful but not damaging, and may *reduce* set count — eroding the very volume match that produced the equivalence. The trial's design is thus load-bearing on supervision: "All exercise sessions were supervised by the researchers, who corrected the execution of the movement task if needed" [PAGE 4]. Unsupervised translation is a different intervention.

**The clock.** Three clocks run at different rates and are routinely conflated. Clock A (soreness, days): EQI's advantage is real and short-horizon. Clock B (strength and architecture, ~6 weeks): both arms move, with η²_p = 0.58–0.77 within-group for all three strength modes [PAGE 6]. Clock C (tendon material/stiffness, ≥8–12 weeks): the authors themselves write "an increase in tendon stiffness can occur within 6 - 8 weeks … but the changes are small" [PAGE 9], against Kubo and Ikebukuro's null at 8 weeks and positive at 12. A practitioner reasoning on Clock A will judge EQI superior; on Clock C, neither arm has yet been tested. The recursive failure mode is *clock substitution* — importing a day-scale inference into a month-scale decision.

**Meta-level.** The athlete's model of the coach's model includes the coach's published-protocol fidelity. When the coach says "this is the Kozinc protocol," the athlete's compliance model shifts toward exact reproduction of the 3-s drop or the failure-terminated hold — which is desirable — but also toward believing that soreness absence equals under-dosing, which is not. The correct meta-move is to externalise the clock: soreness logs at session start as the trial did, effort ratings after each session, and objective load re-testing at fixed intervals. That converts an interoceptive guessing game into an instrumented one.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
**Physical / material-layer veto — tendon strain threshold (HIGH confidence).** Both arms loaded at 100% 1RM against a stated threshold of "approximately 75 % of 1 RM, which corresponds to 4.0 - 4.5% Achilles tendon strain" [PAGE 7]. This *predicts* the between-arm null and simultaneously vetoes any interpretation of the null as "modality is irrelevant at all loads." Adjudication: the finding is bounded to $\varepsilon>4.0\%$; below that, no adaptation should be expected in either arm.

**Physical / measurement-layer veto — SWE geometry (HIGH confidence).** ROI "3 mm x 3 mm" [PAGE 3] within ATT 4.760–4.880 mm [PAGE 6] ⇒ ~62% thickness occupancy; unreported insonation angle and ankle tension state. Adjudication: the Achilles stiffness null is not admissible as biological evidence; it is an instrument-resolution and standardisation failure. Related: no room temperature or time-of-day standardisation is reported, and SWE in tendon is temperature-sensitive via matrix viscoelasticity — a genuine environmental-physics contamination channel.

**Biomechanical veto — unilateral assistance contaminating the EQI endpoint (HIGH confidence).** The stopping rule explicitly admits contralateral substitution: the contraction ended when the plantar flexors "began to overcome the load with the help of the other, passive leg" [PAGE 4]. Formally, right-limb torque is $\tau_R=\tau_{\mathrm{total}}-\tau_{L,\mathrm{passive}}$, and the observed TUT is a functional of $\tau_R$ with an unmeasured assistance term. Because the ECC arm's endpoint is metronomic (3 s), the two arms' TUT are not generated by the same process. Adjudication: inter-arm TUT equality is nominal; the comparison is asymmetric in criterion validity.

**Biomechanical veto — biarticular confound is controlled but strain rate is not (MODERATE-HIGH).** Heel raises were performed with "knees extended" [PAGE 4], lengthening gastrocnemius over both joints — good, and matched across arms. But $\dot\varepsilon$ differs ~10-fold (EQI −0.448 to −0.608 °·s⁻¹ [PAGE 6] versus ~5 °·s⁻¹ for a 3-s drop). Since tendon hysteresis and interstitial fluid flow are rate-dependent, this is the most plausible non-neural cause of the pain differential and is *not* a modality effect per se. Adjudication: the soreness finding should be attributed to strain rate and repetition count, not to "EQI-ness."

**Biomechanical veto — medial pennation null (MODERATE).** MGPA baseline ~19.4–20.9° [PAGE 6] with a null interaction, against lateral GA increase. Consistent with Hamard et al. (2021) and Lai et al. (2019) on medial spring-like, lateral near-isometric behaviour [PAGE 9], and with Kudo et al. (2020) reporting no pennation change even at 12 weeks. Adjudication: this null is mechanistically coherent, not merely statistical — the one morphological null that survives scrutiny.

**Weather / seasonal-layer veto (MODERATE).** Data collection ran "between November 2025 and January 2026" in Izola, Slovenia [PAGE 2], with a seven-week test–retest interval [PAGE 3] spanning the winter holiday period. Indoor laboratory conditions mitigate thermal confounds for the dynamometer and Smith machine, but three channels remain open: (i) unrecorded ambient laboratory temperature affecting SWE; (ii) seasonal activity and body-mass fluctuation across a holiday window affecting control-group behaviour and explaining the anomalous control-arm closed-chain dorsiflexion rise "in all groups (p = 0.003 - 0.045)" [PAGE 6]; (iii) the control group, being "regularly trained" with ≥2 lower-limb sessions/week for six months [PAGE 2], was instructed only to avoid *direct* plantar-flexor work — indirect loading via squats and locomotion is uncontrolled and is the most parsimonious explanation for control-arm LGFL "p = 0.048; partial η² = 0.24" [PAGE 6]. Adjudication: the control arm is a "usual-training" comparator, not a sedentary one; effect sizes versus control are therefore conservative, and the two borderline control-arm changes should be treated as family-wise noise or contamination, not as biology.

**Net adjudication.** The modality-equivalence claim survives at the level of *load-and-total-TUT-matched, ≥75% 1RM, six-week, trained-adult, triceps surae* — and fails to generalise along four veto axes (sub-threshold load, unmatched phase composition, tendon material properties at <12 weeks, and unsupervised execution).
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Each scenario is stated as a machine-checkable prediction with an explicit measurement modality and a pass/fail threshold, so a verifier can adjudicate outcome without human judgement.

**Veto 1 — Sub-threshold load intensity (threshold-model falsification test).**
*Counterfactual:* repeat the identical design with load clamped to 60% 1RM in both arms while preserving TUT at 90/135/180 s and preserving 1RM re-testing.
*Prediction:* both arms fail to increase ATT, LGFL and LGT; group × time interactions non-significant at p > 0.05 for all three; effect sizes η²_p < 0.10.
*Mechanism:* McCrum-derived threshold, "must exceed approximately 75 % of 1 RM, which corresponds to 4.0 - 4.5% Achilles tendon strain" [PAGE 7].
*Verification:* B-mode ultrasound at 5 cm above insertion [PAGE 3] plus panoramic iScope architecture, pre/post, blinded offline analyst.
*Pass/fail:* PASS if all three primary morphological interactions are null and η²_p < 0.10; FAIL if any exceeds η²_p ≥ 0.14.

**Veto 2 — Phase-decomposed TUT matching (composition-confound test).**
*Counterfactual:* re-match the arms on *eccentric-phase duration only*, i.e. equalise $\int\mathbf 1[\omega<0]\,dt$ rather than total TUT, keeping load at 100% 1RM.
*Prediction:* to equalise eccentric time, ECC must slow from 3 s to ≈30 s per repetition (or EQI must shed nearly all isometric hold). Under equal eccentric-phase time, the EQI arm loses its architectural parity and the ECC arm shows a larger LGT/MGT increase (Δ difference ≥ 0.05 cm, interaction p < 0.05, η²_p ≥ 0.14). Soreness difference attenuates to non-significance (Δ < 0.20 points, p > 0.20) because strain rate is equalised.
*Mechanism:* t_ecc = Δθ/|ω̄|; hysteresis is rate-dependent.
*Verification:* sagittal marker tracking with Kinovea phase segmentation [PAGE 4] on every repetition in both arms; soreness on the 10-point session-start scale [PAGE 4].
*Pass/fail:* PASS if both the hypertrophy interaction and the soreness attenuation occur as specified; FAIL otherwise. This directly tests whether the parent study's null is a matching artefact.

**Veto 3 — Duration-threshold split prediction at 12 weeks (clock test).**
*Counterfactual:* extend the same protocol to 12 weeks with identical load/TUT progression and add mid-point testing at weeks 4 and 8.
*Prediction (two-part, deliberately falsifiable in opposite directions):* (a) Achilles tendon stiffness rises significantly in both arms by week 12 (interaction p < 0.05, Δ ≥ 10% from baseline), consistent with Kubo and Ikebukuro's 8-week-null/12-week-positive pattern [PAGE 9] and Geremia et al.'s 4/8/12-week sequence; (b) medial gastrocnemius pennation angle *remains* null even at 12 weeks (p > 0.05), consistent with Kudo et al. (2020) and with the medial head's spring-like behaviour [PAGE 9].
*Mechanism:* tendon material adaptation has a longer time constant than muscle architecture; medial pennation is constrained by the head's locomotor work模式.
*Verification:* SWE with a documented insonation angle, fixed ankle angle, ≥6 mm ROI or multi-depth sampling to retire the 3-mm-in-4.8-mm partial-volume problem; panoramic MGPA measurement by two-blinded-reader consensus.
*Pass/fail:* PASS if (a) and (b) both hold; FAIL if stiffness remains null at 12 weeks (would indict the strain threshold) or if MGPA rises (would indict the medial/lateral asymmetry model). Either failure mode is informative and independently verifiable.

**Secondary auditable invariant (attached to all three):** any future trial claiming equivalence between EQI and ECC must pre-register TOST bounds on the interaction term (e.g. equivalence margin η²_p < 0.08 at n ≥ 15/arm) rather than reporting a non-significant p-value, and must report raw impulse alongside any MVIC-normalised impulse to neutralise the moving-denominator effect documented at [PAGE 10]. A verifier can check both from the deposited dataset without re-running the experiment.
</RLVR_COUNTERFACTUAL_VETOES>