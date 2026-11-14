---
source: "2026 - Mechanical Output and Post-exercise Jump Responses to Percentage-Based, Repetitions-in-Reserve, and Velocity-Based Back-Squat Training in Tr - Mei et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Sports Science and Medicine/In Press/2026"
pages: 19
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4064
---

<NATIVE_REASONING>
The user wants me to analyze a sports science research paper (Mei et al., 2026) about mechanical output and post-exercise jump responses to percentage-based, RIR, and velocity-based back-squat training in trained sprinters.

I need to follow strict invariants:
1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user said "DRIVE SOURCE" and provided the full text. So I need to cite exact [PAGE N] markers.

Let me structure this carefully.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. Need to analyze the study design, statistical power, convergence/divergence of protocols, acute vs chronic effects, normalization issues, calibration force vs body weight, etc.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations from the paper. Include:
- J_positive = ∫(F_vGRF(t) - F_cal,0) dt from t1 to t2
- Relative peak vertical force = max(F_vGRF)/F_cal
- Power = F_vGRF * v_COM
- RSImod = jump height / time to takeoff
- Volume load = sum(external load * completed reps)
- ICC(A,k), k=3
- Power analysis: f=0.31, alpha=0.05, correlation=0.50, epsilon=1.0
- Units: N, N·s, W/kg, cm, m·s⁻¹, beats·min⁻¹, × system weight
- Breakdown regimes: log-transform for skewed data, nonparametric sensitivity, equivalence not tested, 72h washout, 5-rep cap, 20% velocity loss threshold.

RETROCAUSAL_GENEALOGY: Historical lineage from González-Badillo & Sánchez-Medina 2010, Zourdos 2016, Banyard 2019, Refalo 2023, Jukic 2023, Guo 2026, etc. Multi-week traps: acute session vs 6-week intervention, accumulation of exposures vs single-session decrement.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is more of a conceptual framework. I need to interpret athlete/coach behavior under fatigue crisis. "Crisis habit regression" = reverting to PBT under fatigue? "Counter-trap" = thinking autoregulation always reduces fatigue. "Clock" = 72h washout, immediate post-exercise only, no 24-48h recovery.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Physical: force plate calibration, Tendo tether alignment, squat depth criterion. Biomechanical: CMJ vs SJ, impulse-momentum vs flight-time, filtering at 20 Hz, movement onset threshold. Weather: not applicable really, but environmental controls (diet, activity, same team, time of day presumably). Vetoes: if depth criterion not met, repetition invalid; if tether deviates laterally, trial paused; if force signal doesn't meet threshold, cycle excluded.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I need to create 3 counterfactual veto scenarios that are verifiable, with predictions.
1. Veto if RIR estimation error > 1 rep: prediction that mechanical output converges with PBT.
2. Veto if velocity-loss threshold not reached before rep 5 cap: prediction VBT equals PBT in volume.
3. Veto if post-exercise testing delayed > immediate: prediction CMJ decrement emerges at 24h.

Need to ensure >=1000 words total across sections. Let's aim for substantial depth.

No betting lines. No toy equations. Use real equations from the paper.

Let me draft each section carefully with page citations.

Page citations:
- Page 1: Abstract, intro, hypothesis, design, participants, power analysis.
- Page 2: Methods continued, procedures, familiarization, 1RM testing.
- Page 3: CMJ/SJ testing, force plates, filtering, equations start.
- Page 4: Experimental trials, Table 1 protocols, force-plate assessment during squat, calibration force, cycle segmentation, equations for relative peak force and impulse.
- Page 5: Heart rate, statistical analyses, reliability.
- Page 6: Results - realized training exposure, mechanical output, CMJ responses, SJ responses, sensitivity.
- Page 7: Figures, discussion principal findings.
- Page 8: Discussion mechanical output, postexercise responses, practical implications, limitations, conclusion.
- Pages 9-19: References, supplementary tables.

Important equations from text:
Page 4-5: "J_{positive} = ∫_{t1}^{t2} [F_v(t) - F_{cal,0}] dt" (though formatting is messy in source, I'll write clean LaTeX).
Page 4: Relative peak vertical force = max total vertical GRF within cycle / calibration force.
Page 3: Power = product of total vertical GRF and vertical COM velocity.
Page 3: RSImod = jump height / time to takeoff.
Page 6: Session volume load = sum(external load × completed repetitions).
Page 2: Power analysis f=0.31.
Page 3: Filter: fourth-order zero-lag Butterworth, 20 Hz cutoff.
Page 3: Movement onset threshold: greater of 3.5% standing force, 5× baseline SD, or 20 N, sustained 20 ms.
Page 4: Cycle peaks separated by at least 1.5 s, exceed 103% calibration force, prominence 8% calibration force.

Breakdown regimes:
- Log-scale inference for relative peak force and impulse due to right-skew.
- Non-significance ≠ equivalence (not an equivalence trial).
- 5-rep cap limits VBT velocity-loss rule.
- Only immediate post-exercise, no 24-48h recovery.
- n=18, power to detect f=0.31 only.

Let's write.

Need to be careful: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." So I must only use equations actually in the paper or clearly derived from it with units.

Let's draft.

THINK_TRACE: I'll discuss the multi-hop logic:
1. PBT/RIR/VBT all start at 80% 1RM, 5 sets, max 5 reps.
2. PBT fixed 5 reps = 25 total.
3. RIR target 3 RIR, load adjusted ±5 kg based on RIR. Result: same 25 reps but higher volume load (3036 vs 3000 kg) because load increased on some sets.
4. VBT: 20% velocity loss or 5 reps cap. Result: 24.06 reps, lower volume (2893 kg).
5. Mechanical output (relative peak force, mean positive impulse) not significantly different despite volume differences.
6. Why? Normalization to set-specific calibration force (athlete-barbell system weight) removes external load differences. Force-time cycles segmented across complete squat cycles, not phase-specific. Five-rep cap means VBT often completed all 5 reps without hitting velocity threshold, so behavior converged.
7. Jump responses: tiny changes (-0.29, -0.09, -0.27 cm CMJ; +0.14, -1.38, +1.63 cm SJ). No overall effects. SJ VBT CI huge [-4.21, 7.48] indicating imprecision.
8. Gray zone: statistical power f=0.31 means smaller effects undetected. Nonparametric Friedman p=0.029 for peak force but pairwise not significant after Holm. This is a multiple-comparisons gray zone.
9. Calibration force vs body weight: using system weight (athlete + barbell) for relative force means a heavier barbell increases denominator, potentially masking load differences. This is a key normalization choice.

SOURCE_OPERATORS_AND_EQUATIONS: List equations with page numbers and units.

RETROCAUSAL_GENEALOGY: Cite González-Badillo & Sánchez-Medina 2010 (velocity as loading intensity), Zourdos 2016 (RIR scale), Banyard 2019 (80% 1RM, 5 sets, max 5 reps - same structure), Refalo 2023 (proximity to failure), Jukic 2023 (velocity loss thresholds), Guo 2026 (6-week sprinter study), Pareja-Blanco 2019/2017 (velocity loss and recovery). Multi-week trap: acute mechanical equivalence does not imply chronic adaptation equivalence; Guo 2026 showed VBT greater strength/sprint gains despite similar acute jump response. The "accumulation of repeated exposures" vs "smaller functional decrement after every session" distinction.

RECURSIVE_THEORY_OF_MIND: 
- Crisis habit regression: Under acute fatigue or perceived crisis, coach/athlete regresses to fixed PBT because it's simpler and doesn't require real-time estimation or technology failure. 
- Counter-trap: Believing RIR/VBT automatically reduces fatigue; here RIR increased volume load and VBT reduced reps, but mechanical output and jump decrements were similar. The trap is assuming autoregulation = less fatigue.
- Clock: 72h washout between conditions; immediate post-exercise testing only; no 24-48h recovery assessment. The clock truncates the recovery curve, potentially missing delayed divergence.

CROSS_LAYER_VETO_ADJUDICATION:
Physical veto: Squat depth criterion (hip/knee same horizontal level). If not met, repetition invalid (Page 2-3). Tendo tether lateral deviation → pause and readjust (Page 4). 
Biomechanical veto: Force plate sampling 1000 Hz, 4th-order Butterworth 20 Hz cutoff. Movement onset threshold (3.5% standing force, 5× SD, or 20 N, 20 ms). Takeoff <20 N for 20 ms. CMJ countermovement contamination flagged. SJ contamination flagged. Trials excluded if events not identifiable (Page 3). 
Weather/environmental veto: Not a weather study, but standardization: no strenuous activity 72h prior, no eating 1h before, same research team, standardized verbal encouragement, same foot position, hands on hips (Page 2-3).
Veto proof chain: If any layer fails (bad depth, tether slip, filter aliasing, contamination), the mechanical output datum is excluded, preventing false convergence.

RLVR_COUNTERFACTUAL_VETOES: Three verifiable scenarios.
1. Scenario: VBT velocity-loss threshold never triggered because 5-rep cap reached first. Veto condition: if >50% of VBT sets terminate by rep cap rather than velocity loss. Prediction: VBT mechanical output equals PBT (no difference in impulse/force), confirmed by similar mean positive impulse (388.2 vs 400.2 N·s, p=0.262) and volume load difference driven solely by rep count.
2. Scenario: RIR estimation error systematic (athletes consistently overestimate RIR by ≥1 rep). Veto condition: if RIR load adjustments result in same external load across sets as PBT (no net adjustment). Prediction: RIR mechanical output converges with PBT (relative peak force 1.207 vs 1.260, p=0.348) but volume load higher due to occasional load increases (3036 vs 3000 kg).
3. Scenario: Post-exercise jump testing delayed beyond immediate window (e.g., 10 min instead of immediate). Veto condition: if CMJ/SJ measured after a recovery interval >2 min. Prediction: divergence emerges, particularly CMJ height decrement, because Párraga-Montilla 2020 showed 25-32% reduction immediately after failure training persisting 24-48h; here immediate changes were trivial (-0.29 cm) but the clock may mask delayed neuromuscular fatigue.

Need to ensure total words >= 1000. Let's write robustly.

I need to include exact [PAGE N] markers. The source text has markers like [PAGE 1 of 19], etc. I'll cite them as [PAGE 1], [PAGE 4], etc.

Let's compose carefully.

Check: No betting lines. None.

Check: No toy equations. I'll only use equations explicitly from the paper or direct definitions.

Let's write out full LaTeX.

Equation 1 (Page 4-5):
\[
J_{\text{positive}} = \int_{t_1}^{t_2} \max\bigl(F_{\text{vGRF}}(t) - F_{\text{cal},0},\, 0\bigr) \, dt
\]
Units: N·s.

Equation 2 (Page 4):
\[
F_{\text{peak,rel}} = \frac{\max_{t\in[\!t_1,t_2\!]} F_{\text{vGRF}}(t)}{F_{\text{cal},0}}
\]
Units: × system weight (dimensionless ratio).

Equation 3 (Page 3):
\[
P(t) = F_{\text{vGRF}}(t) \cdot v_{\text{COM}}(t)
\]
Units: W·kg⁻¹ when normalized.

Equation 4 (Page 3):
\[
\text{RSI}_{\text{mod}} = \frac{h_{\text{jump}}}{t_{\text{takeoff}} - t_{\text{onset}}}
\]
Units: m·s⁻¹.

Equation 5 (Page 6):
\[
\text{Volume Load} = \sum_{s=1}^{5} L_s \times R_s
\]
Units: kg.

Equation 6 (Page 2):
Power analysis detectable omnibus effect: Cohen's f ≈ 0.31.

Equation 7 (Page 3):
Movement onset: \(F_{\text{vGRF}} > \max(0.035 F_{\text{stand}},\, 5\sigma_{\text{baseline}},\, 20\,\text{N})\) sustained ≥20 ms.

Cycle detection (Page 4): peaks separated ≥1.5 s, >103% calibration force, prominence ≥8% calibration force.

Okay, let's write the response. I'll make sure each section is substantive.
</NATIVE_REASONING>

<THINK_TRACE>
The study implements a tightly constrained within-participant crossover: 18 trained male 100-m sprinters each perform PBT, RIR, and VBT back-squat sessions separated by ≥72 h [PAGE 1]. All conditions begin at 80% 1RM, use five sets, and impose a five-repetition ceiling [PAGE 1, PAGE 4 Table 1]. The first multi-hop divergence is realized exposure: PBT fixes five reps per set (25 total, 3000.00 kg volume load); RIR targets 3 RIR and adjusts load ±5 kg between sets, yielding 25 reps but a higher volume load (3036.11 kg) because load occasionally increases [PAGE 6 Table 2]; VBT uses a 20% mean-concentric-velocity loss threshold or the five-rep cap, producing fewer reps (24.06) and lower volume load (2893.06 kg) [PAGE 6 Table 2]. Despite these exposure differences, session-level mechanical output does not differ: geometric mean relative peak vertical force is 1.260 (PBT), 1.207 (RIR), 1.237 (VBT) × system weight (F(2,17)=1.123, p=0.348) and mean positive vertical impulse is 400.2, 353.2, 388.2 N·s (F(2,17)=1.452, p=0.262) [PAGE 6, PAGE 12 Table S1]. The gray-zone mechanism is normalization: relative peak force divides by the set-specific calibration force (athlete-barbell system weight), so a heavier RIR load inflates both numerator and denominator, compressing between-condition differences [PAGE 4]. A second compression mechanism is the five-rep cap: when VBT does not reach the 20% velocity-loss threshold before repetition five, the set ends identically to PBT, so barbell kinematics may diverge while ground-reaction kinetics converge [PAGE 7 discussion citing Banyard et al., 2019]. The jump-response layer shows trivial immediate changes (CMJ Δ: −0.29, −0.09, −0.27 cm; SJ Δ: +0.14, −1.38, +1.63 cm) with no overall condition effects (p=0.969, 0.894, 0.740 respectively) [PAGE 6]. However, the design is powered only to detect an omnibus Cohen's f ≈ 0.31, and nonparametric sensitivity flags relative peak vertical force (Friedman p=0.029) without any Holm-adjusted pairwise contrast surviving [PAGE 6, PAGE 13 Table S4B]. This creates a statistical gray zone: nonsignificance cannot be read as equivalence, and the authors explicitly decline an equivalence-framework conclusion [PAGE 8 conclusion]. A temporal gray zone exists because testing stops immediately post-exercise; no 24–48 h recovery, lactate, or soreness data are collected [PAGE 8 limitations]. The multi-hop derivation therefore terminates at: acute mechanical output and immediate explosive response are statistically indistinguishable across PBT/RIR/VBT under this specific capped, fixed-start-load implementation, but the study cannot isolate monitoring-method effects, cannot establish interchangeability, and is underpowered for small effects.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All formal operators below are taken verbatim or directly transcribed from the source; units are SI or information-theoretic where specified.

1. Positive vertical impulse per segmented squat cycle [PAGE 4–5]:
\[
J_{\text{positive}} = \int_{t_1}^{t_2} \max\!\bigl(F_{\text{vGRF}}(t) - F_{\text{cal},0},\,0\bigr)\,dt \quad [\text{N·s}]
\]
where \(F_{\text{vGRF}}(t)\) is total vertical ground-reaction force, \(F_{\text{cal},0}\) is the set-specific calibration force (mean force during 1–2 s of quiet standing with the prescribed external load), and \([t_1,t_2]\) are cycle boundaries from peak-based segmentation. Negative net-force values are set to zero and do not reduce the impulse [PAGE 4].

2. Relative peak vertical force [PAGE 4]:
\[
F_{\text{peak,rel}} = \frac{\max_{t\in[t_1,t_2]} F_{\text{vGRF}}(t)}{F_{\text{cal},0}} \quad [\times\text{ system weight, dimensionless}]
\]
Values are averaged across valid cycles. Because \(F_{\text{cal},0}\) includes athlete mass plus external load, this normalization scales with system weight and can obscure external-load differences between RIR and PBT.

3. Session volume load [PAGE 6]:
\[
\text{Volume Load} = \sum_{s=1}^{5} L_s \times R_s \quad [\text{kg}]
\]
where \(L_s\) is external load per set and \(R_s\) is completed repetitions per set.

4. Jump mechanical power [PAGE 3]:
\[
P(t) = F_{\text{vGRF}}(t) \cdot v_{\text{COM}}(t) \quad [\text{W; normalized to W·kg}^{-1}\text{ when divided by body mass}]
\]
Peak positive power is the maximum instantaneous power during the propulsive phase; mean propulsive power averages instantaneous power over that phase.

5. Modified reactive strength index [PAGE 3]:
\[
\text{RSI}_{\text{mod}} = \frac{h_{\text{jump}}}{t_{\text{takeoff}} - t_{\text{onset}}} \quad [\text{m·s}^{-1}]
\]
Jump height is computed by the impulse–momentum method; flight-time is used only for quality control [PAGE 3].

6. Force-plate signal processing [PAGE 3]: fourth-order, zero-lag Butterworth low-pass filter, 20 Hz cutoff; sampling at 1000 Hz. Movement onset identified when vertical GRF deviates from standing force by the greater of 3.5% of standing force, five times baseline force standard deviation, or 20 N, sustained for ≥20 ms. Takeoff when total vertical force <20 N for ≥20 ms [PAGE 3].

7. Cycle segmentation validity [PAGE 4]: candidate peaks separated by ≥1.5 s, exceeding 103% of calibration force, with local prominence ≥8% of calibration force. Mean repetition duration is the segmented-cycle duration [PAGE 4].

8. Statistical power and inference [PAGE 2, PAGE 5, PAGE 6]: with n=18, three repeated conditions, α=0.05, assumed repeated-measures correlation ρ=0.50, and sphericity ε=1.0, the design provides 80% power to detect an omnibus effect of approximately Cohen's f = 0.31. Relative peak force and impulse were right-skewed and analyzed on the natural-log scale; pairwise contrasts back-transformed as geometric-mean ratios [PAGE 5]. Jump outcomes analyzed as PRE-to-POST change scores; within-condition changes via paired t-tests, between-condition differences via within-participant models; Holm adjustment for pairwise multiplicity [PAGE 5]. Reliability: ICC(A,k), k=3, two-way mixed-effects absolute-agreement average-measures [PAGE 5].

Breakdown/singularity regimes: (i) nonsignificant omnibus tests do not imply equivalence because the study was not designed as an equivalence trial [PAGE 8]; (ii) the five-repetition cap truncates the VBT velocity-loss rule, so when the cap binds, VBT behavior is mechanically identical to PBT [PAGE 7]; (iii) immediate post-exercise measurement only precludes inference about delayed neuromuscular recovery [PAGE 8]; (iv) small-sample robust SEs clustered by participant with Holm correction yield wide confidence intervals, e.g., VBT vs PBT SJ jump-height difference estimate 1.389 cm with 95% CI [−7.011, 9.788] [PAGE 17 Table S5].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper positions itself inside a lineage of autoregulation research. González-Badillo and Sánchez-Medina (2010) established movement velocity as a loading-intensity metric; Zourdos et al. (2016) formalized the RIR scale; Rodríguez-Rosell et al. (2020) linked velocity loss and repetitions in reserve during the back squat [PAGE 1]. The immediate methodological ancestor is Banyard et al. (2019), which used the same structural template—80% 1RM, five sets, no more than five repetitions per set—and found that velocity-based regulation altered selected kinematic and organizational characteristics while most kinetic and power outcomes did not differ [PAGE 1]. Mei et al. extend this by adding force-plate ground-reaction kinetics and pre/post CMJ/SJ force-time analysis to capture the athlete–ground interaction rather than barbell kinematics alone [PAGE 2]. The historical trap is the acute-to-chronic extrapolation: a 6-week intervention in sprinters (Guo et al., 2026) reported greater squat-strength and 20-m sprint gains with VBT versus PBT while CMJ gains were similar, suggesting long-term VBT benefits may accumulate through repeated exposures rather than manifest as a smaller functional decrement after every session [PAGE 2]. Conversely, acute failure-training literature shows much larger decrements: three sets to failure at ~60% 1RM reduced CMJ height by 25–32% immediately, with values still 6.7–7.9% below baseline at 24–48 h [PAGE 8 citing Párraga-Montilla et al., 2020]. By comparison, the present immediate changes were trivial, yet the protocol never approaches failure because of the five-rep cap and non-failure velocity/RIR rules [PAGE 8]. Meta-analytic evidence indicates average VBT–PBT differences in maximal strength, power, and sprint adaptations are small and uncertain (Liao et al., 2021; Orange et al., 2022), and that lower velocity-loss thresholds may favor jump/sprint performance while higher thresholds favor hypertrophy (Jukic et al., 2023) [PAGE 1, PAGE 8]. The multi-week trap, therefore, is assuming that acute mechanical equivalence or near-equivalence under a capped protocol predicts chronic adaptation equivalence; the study explicitly cannot determine this [PAGE 8].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Three nested decision layers structure the coach–athlete system under fatigue stress.

First, crisis habit regression: when an athlete perceives acute neuromuscular threat (e.g., heavy barbell, perceived bar speed decay), the default habit regresses to percentage-based training because PBT requires no real-time estimation, no technology, and no subjective RIR judgment. The cost is rigidity: PBT cannot adjust to day-to-day 1RM fluctuations, so the same 80% 1RM may represent different proximities to failure across athletes [PAGE 1]. Under crisis, the athlete may also grind reps to preserve the prescribed count, increasing metabolic cost without increasing measured ground-reaction impulse.

Second, the counter-trap: the belief that autoregulation (RIR or VBT) automatically reduces acute fatigue and preserves jump performance. The data falsify this as a universal claim. RIR produced a higher session volume load than PBT (3036.11 vs 3000.00 kg) despite the same repetition count, because load was increased on sets where RIR exceeded the target [PAGE 6]. VBT reduced repetitions and volume load but produced statistically indistinguishable relative peak force and impulse [PAGE 6]. Immediate CMJ and SJ responses were trivial across all three [PAGE 6]. Thus the counter-trap is expecting that swapping the control signal (percentage → RIR → velocity) necessarily changes the mechanical stimulus; here the control signal changed behavior (volume load, repetition count) but not the primary kinetic outcomes or immediate jump performance.

Third, the clock: the washout and measurement schedule impose hard temporal boundaries. Conditions are separated by ≥72 h [PAGE 1]; post-exercise jumps begin immediately after the fifth set, with only a standardized 45 s between CMJ and SJ [PAGE 4]. This clock truncates the recovery curve: no 24–48 h data, no blood lactate, no soreness [PAGE 8]. If divergence between protocols emerges only during delayed recovery—as failure-training literature suggests it can (Morán-Navarro et al., 2017; Párraga-Montilla et al., 2020) [PAGE 8]—the immediate measurement window renders the protocol comparison blind to it. The recursive crisis loop is therefore: athlete regresses to PBT under perceived threat → coach applies counter-trap assuming autoregulation protects performance → clock prevents observation of delayed divergence → acute null result is overgeneralized to chronic practice.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: squat depth is defined as hip and knee joints at the same horizontal level, visually monitored in real time; a repetition is valid only if depth is met and concentric completion occurs without assistance [PAGE 2]. Any depth failure voids the repetition and its force-cycle contribution. During VBT, the Tendo tether must remain near vertical; obvious lateral deviation pauses the trial for readjustment [PAGE 4]. These physical constraints prevent contaminated force cycles from entering the mechanical-output averages.

Biomechanical layer veto: force plates sample at 1000 Hz through a fourth-order, zero-lag Butterworth filter with a 20 Hz cutoff [PAGE 3]. Movement onset requires the vertical GRF to exceed an adaptive threshold (greater of 3.5% standing force, 5× baseline SD, or 20 N) sustained for ≥20 ms; takeoff requires force <20 N for ≥20 ms; landing requires force >20 N for ≥20 ms [PAGE 3]. CMJ trials are flagged for countermovement contamination if the force-time or velocity-time curve shows preliminary downward movement; SJ trials are screened identically [PAGE 3]. Trials are excluded when takeoff, landing, baseline, or jump type cannot be identified confidently [PAGE 3]. This veto chain excludes low-signal or aliased cycles, protecting the integrity of J_positive and F_peak,rel estimates.

Environmental/weather layer veto: although no meteorological variable is manipulated, the protocol standardizes extraneous load. Participants refrain from strenuous or prolonged activity and additional lower-body resistance training for 72 h before each trial, and refrain from eating during the 1 h before testing; dietary intake, habitual training, and test preparation are held similar across trials [PAGE 2]. The same research team conducts all trials with standardized technique instructions and verbal encouragement [PAGE 2]. Foot position is fixed across all jump trials, hands on hips, and CMJ always precedes SJ [PAGE 3]. These are procedural vetoes against diurnal, nutritional, and motivational confounds.

Adjudication: If any layer fires a veto—invalid depth, tether lateral drift, failed onset/takeoff detection, jump-type contamination—the corresponding cycle or trial is removed before averaging. Consequently, the null mechanical and jump effects cannot be attributed to unfiltered noise or contaminated cycles; they reflect genuine convergence under the implemented, veto-filtered protocols. The residual limitation is not measurement invalidity but insufficient statistical power to detect small between-condition differences (detectable f ≈ 0.31) [PAGE 2, PAGE 8].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with testable predictions:

Veto Scenario 1 — VBT cap binding: If more than 50% of VBT sets terminate by the five-repetition cap rather than by the 20% mean-concentric-velocity loss threshold, the VBT velocity-regulation rule is inactive for those sets. Verification: inspect set-by-set termination logs (not published in main text but derivable from Tendo records). Prediction: VBT session-level relative peak vertical force and mean positive vertical impulse will equal PBT within sampling error, and any volume-load difference will be attributable solely to fewer completed repetitions (24.06 vs 25.00), not to altered force production. This is consistent with the observed near-identical impulse (388.2 vs 400.2 N·s, p=0.320 vs RIR; geometric-mean ratio vs PBT 0.970, 95% CI [0.709, 1.326]) [PAGE 6, PAGE 16 Table S5].

Veto Scenario 2 — RIR estimation equivalence: If athletes’ RIR estimates produce no net between-set load adjustment (i.e., reported RIR equals the target of 3 on every set), the RIR protocol collapses to PBT with an occasional ±5 kg drift that averages out. Verification: compare mean external load per set across conditions; RIR mean external load was 121.44 ± 16.31 kg vs PBT 120.00 ± 17.38 kg [PAGE 6 Table 2]. Prediction: when net load drift is nil, RIR mechanical output converges with PBT (observed relative peak force geometric-mean ratio RIR vs PBT = 0.958, 95% CI [0.833, 1.102], p=0.526) while volume load may still differ slightly due to discrete 5 kg steps (observed +36.11 kg, p=0.005) [PAGE 6, PAGE 16 Table S5].

Veto Scenario 3 — Delayed measurement veto: If post-exercise CMJ/SJ testing is delayed beyond the immediate window (e.g., 10 min post-session rather than immediately after set 5), the acute fatigue signal may emerge. Verification: introduce a delayed post-test condition at +10 min or +24 h. Prediction: based on failure-training literature showing CMJ reductions of 25–32% immediately and persistence at 24–48 h [PAGE 8], the delayed window will reveal condition-specific divergence, particularly for VBT vs PBT, because the immediate post-exercise estimates here were trivial (CMJ Δ: −0.29 vs −0.27 cm; SJ Δ: +1.63 vs +0.14 cm) with very wide SJ confidence intervals for VBT [−4.21, 7.48 cm] [PAGE 6]. The null acute finding would therefore not generalize to a delayed recovery clock.
</RLVR_COUNTERFACTUAL_VETOES>