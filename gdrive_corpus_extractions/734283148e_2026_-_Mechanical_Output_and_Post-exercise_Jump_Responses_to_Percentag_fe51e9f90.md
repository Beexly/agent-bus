---
source: "2026 - Mechanical Output and Post-exercise Jump Responses to Percentag_fe51e9f90a.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 33
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5432
---

<NATIVE_REASONING>
The user wants me to analyze a sports science paper about back-squat training methods (PBT, RIR, VBT) in trained sprinters. I need to produce a response with specific XML sections, each meeting certain criteria:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

The source text is provided (the full paper markdown). I need to cite page markers like [PAGE 1], [PAGE 2], etc. The source text has page numbers visible: 915-933. I should map the provided text to page numbers. Let's look at the source text structure:

- Page 915: Title, abstract, keywords, introduction start.
- Page 916: Introduction continued.
- Page 917: Methods, Study Design, Participants, Procedures, Pretrial standardization, 1RM testing.
- Page 918: Countermovement- and squat-jump testing, Experimental trials, Table 1, Force-plate assessment.
- Page 919: Force-plate assessment continued, Heart-Rate Monitoring, Statistical Analyses, Within-session reliability.
- Page 920: Results, Realized Training Exposure, Mechanical Output During Training, Table 2.
- Page 921: Countermovement-jump responses, Squat-jump responses, Sensitivity analyses, Discussion start, Principal findings.
- Page 922: Discussion continued, Mechanical output during back-squat training, Postexercise jump responses, Practical implications.
- Page 923: Limitations, Conclusion, Acknowledgements, References start.
- Page 924: References continued.
- Page 925: References continued, Key points, Author biography.
- Page 926: Author biography continued? Actually the text shows page 926 then Supplementary Material start.
- Page 927: Table S1, Table S2.
- Page 928: Table S3, Table S4A.
- Page 929: Table S4B.
- Page 930: Table S5 start.
- Page 931: Table S5 continued.
- Page 932: Table S5 continued.
- Page 933: Table S5 continued, Table S6.

Wait, looking at the provided markdown, page numbers are embedded as "915", "916", etc. I should cite them as [PAGE 915], [PAGE 916], etc., or perhaps just [PAGE N] where N is the page number in the document. The user said "cite exact [PAGE N] markers". I'll use [PAGE 915], [PAGE 916], etc.

Need to ensure >=1000 words total across sections. THINK_TRACE needs >=400 words.

Key content to extract:
- Study: randomized crossover, 18 trained male 100-m sprinters.
- Three conditions: PBT, RIR, VBT. All at 80% 1RM, 5 sets, max 5 reps per set.
- Force plates (Kistler 9286BA) recorded vertical GRF during squats and pre/post CMJ/SJ.
- Completed reps: PBT 25.00, RIR 25.00, VBT 24.06.
- Session volume load: PBT 3000.00 kg, RIR 3036.11 kg, VBT 2893.06 kg.
- No significant overall condition effects for relative peak vertical force (p=0.348), mean positive vertical impulse (p=0.262), CMJ jump height (p=0.969), CMJ RSImod (p=0.894), SJ jump height (p=0.740).
- VBT fewer reps and lower volume load than PBT/RIR.
- Sensitivity power: 80% power to detect omnibus effect f=0.31.
- Equations: positive vertical impulse J_positive = integral from t1 to t2 of [F_v(t) - F_cal,0] dt (with negative values set to zero). Relative peak vertical force = max F_v / F_cal. RSImod = jump height / time to takeoff. Power = F_v * v_COM. Jump height via impulse-momentum.
- Reliability: ICC(A,k), k=3. CMJ PRE jump height ICC 0.969, CV 3.5%. SJ POST relative mean propulsive power ICC 0.398 (low).
- Limitations: not equivalence trial, immediate post only, no 24-48h recovery, no blood lactate/soreness, fixed-load PBT may not reflect common practice.

I need to avoid toy equations. So I will write formal LaTeX equations with proper definitions, units, assumptions, singularity regimes.

Structure:

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Derive why null results might be due to protocol constraints (5-rep cap, 80% 1RM, fixed load).
- Gray zones: RIR target 3 vs VBT 20% velocity loss with cap; convergence because cap binds.
- Statistical power: f=0.31 detectable; smaller effects missed.
- Non-equivalence: absence of evidence != evidence of absence.
- Multi-hop: VBT fewer reps -> lower volume load -> potentially less fatigue -> but no jump difference detected; maybe because intensity (80% 1RM) and rep cap kept mechanical output similar per rep; or because acute fatigue wasn't severe enough to manifest in jump height.
- Cite pages.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
- Define variables: F_v(t) [N], F_cal [N], m [kg], J_positive [N·s], etc.
- Equations for impulse, force normalization, RSImod, power.
- Statistical model: linear mixed model with participant fixed effects, robust SE clustered by participant, log transformation for skewed variables.
- Exact p values, F stats, CIs.
- Page citations [PAGE 918], [PAGE 919], [PAGE 920], etc.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: González-Badillo & Sánchez-Medina 2010 (velocity as loading intensity), Zourdos 2016 (RIR scale), Banyard 2019, Cowley 2025, Liao 2021 meta, Orange 2022 meta, Jukic 2023 velocity loss, Refalo 2023 proximity to failure, Guo 2026 sprinters 6-week.
- Multi-week traps: acute vs chronic; VBT may accumulate advantage over weeks despite no acute difference (Guo 2026). The study cannot extrapolate to longer-term adaptation.
- Cite pages where these are mentioned in the source.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- This is a bit abstract but relates to athlete/coach decision-making under fatigue.
- Crisis habit regression: under fatigue, athletes revert to habitual pacing/effort distribution.
- Counter-trap: coach thinks autoregulation is reducing fatigue, but if rep cap binds, the monitoring doesn't change behavior.
- Clock: 72h washout, immediate post testing only, no 24-48h recovery.
- How the athlete's internal model of RIR might regress to mean under pressure, etc.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical veto: force plate sampling 1000 Hz, 20 Hz Butterworth, 20 ms thresholds; if signal deviates, veto.
- Biomechanical: squat depth criterion (hip/knee same horizontal), valid rep definition, countermovement contamination screening.
- Weather: not applicable (indoor lab), but environmental standardization (diet, no strenuous activity 72h prior).
- Veto proof: what conditions would invalidate the data? e.g., lateral tether deviation in VBT, failed movement onset detection, <3 valid trials.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. Need 3 counterfactual scenarios where a veto would trigger.
- Scenario 1: If VBT velocity-loss threshold is reached before rep 5, set terminates early; if cap binds (rep 5 reached first), VBT becomes identical to PBT mechanically. Prediction: in sets where cap binds, no difference in impulse/force.
- Scenario 2: If RIR estimation error >1 rep (systematic underestimation), load adjustments would be wrong; prediction: RIR volume load would diverge more from PBT.
- Scenario 3: If force-plate onset threshold (3.5% standing force, 5 SD, 20 N) fails due to noise, impulse integration baseline drifts; prediction: geometric mean ratios biased toward 1.0 artificially.
- Each with verifiable condition and predicted outcome.

Word count: Need >=1000 words total. THINK_TRACE alone >=400. Others should be substantial.

No betting lines. No toy equations.

Let's draft carefully.

I need to include verbatim quotes with page citations. I can quote from the provided text. For example: "Completed repetitions averaged 25.00, 25.00, and 24.06 per session under PBT, RIR, and VBT, respectively" [PAGE 915]. Or from page 920 Table 2.

Let's map pages precisely from the text:
- The text starts with title page (915).
- "Received: 10 August 2026..." page 915.
- Abstract on 915.
- Introduction starts 915, continues 916.
- Methods: Study Design 916, Participants 916, Procedures 917.
- 917: 1RM testing, Countermovement- and squat-jump testing.
- 918: Experimental trials, Table 1, Force-plate assessment.
- 919: Force-plate assessment (equations), Heart-Rate Monitoring, Statistical Analyses, Within-session reliability.
- 920: Results, Realized Training Exposure, Mechanical Output During Training, Table 2.
- 921: Countermovement-jump responses, Squat-jump responses, Sensitivity analyses, Discussion Principal findings.
- 922: Discussion continued, Practical implications, Limitations.
- 923: Conclusion, Acknowledgements, References start.
- 924: References.
- 925: References continued, Key points, Author biography.
- 926: Supplementary Material start (Figure S1).
- 927: Figure S2, Figure S3, Table S1, Table S2.
- 928: Table S3, Table S4A.
- 929: Table S4B.
- 930: Table S5 start.
- 931: Table S5 continued.
- 932: Table S5 continued.
- 933: Table S5 continued, Table S6.

I'll cite accordingly.

Now write the response. Must be in the exact XML sections.

Word count check: I'll aim for roughly:
- THINK_TRACE: 500 words.
- SOURCE_OPERATORS_AND_EQUATIONS: 300 words.
- RETROCAUSAL_GENEALOGY: 250 words.
- RECURSIVE_THEORY_OF_MIND: 250 words.
- CROSS_LAYER_VETO_ADJUDICATION: 250 words.
- RLVR_COUNTERFACTUAL_VETOES: 250 words.
Total ~1800 words. Safe.

Need to ensure no fake ratios. All equations must be formal, with SI units, assumptions, breakdown regimes.

Let's write.

THINK_TRACE content:
- Multi-hop: Protocol convergence due to rep cap. All three start at 80% 1RM, 5 sets, max 5 reps. PBT fixed 5 reps/set = 25 total. RIR target 3 RIR but allowed load adjustment ±5kg; realized 25 reps, volume 3036 kg (higher than PBT because load increased on some sets). VBT 20% velocity loss or 5 rep cap; realized 24.06 reps, volume 2893 kg. Because cap binds, VBT rarely terminated early due to velocity loss? Actually VBT had fewer reps, so velocity loss threshold must have triggered sometimes before rep 5, or participants stopped at 5 anyway. Mean difference -0.94 reps vs PBT/RIR. So VBT terminated early on ~0.94 reps per session total (small). This means most sets went to 5 reps anyway; the cap dominated. Therefore mechanical output per session converged: relative peak force 1.260, 1.207, 1.237 × system weight; impulse 400.2, 353.2, 388.2 N·s. No condition effect p=0.348, p=0.262.
- Gray zone 1: Statistical power. Sensitivity analysis: 80% power to detect omnibus f=0.31 [PAGE 916]. Smaller effects undetected. Pairwise CIs are wide: VBT vs RIR impulse ratio 1.099 [0.978–1.235], p=0.320 [PAGE 920]. Cannot rule out ~10% difference.
- Gray zone 2: Immediate post only. No 24-48h recovery, blood lactate, soreness [PAGE 922]. Acute jump changes were tiny: CMJ Δ -0.29, -0.09, -0.27 cm [PAGE 921]. Floor effect? Maybe fatigue insufficient to degrade jump.
- Gray zone 3: Non-equivalence. Study explicitly says nonsignificant != equivalence [PAGE 923].
- Multi-hop derivation: Lower volume load in VBT should mean less fatigue, yet no jump benefit. Possible because intensity (80% 1RM) and rep cap kept per-rep mechanical demand high; or because jump tests are insensitive to this acute stimulus (ICC for SJ POST relative mean propulsive power is 0.398, poor reliability [PAGE 927]). Measurement noise could mask true differences.
- Cite pages.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define calibration force F_cal,s [N] per set [PAGE 918].
- Relative peak vertical force: F_peak,rel = max(F_v(t)) / F_cal,s [dimensionless, × system weight] [PAGE 918-919].
- Positive vertical impulse: J_positive = ∫_{t1}^{t2} max(F_v(t) - F_cal,s, 0) dt [N·s], trapezoidal rule [PAGE 919]. Negative net force zeroed (singularity/breakdown: if F_v < F_cal for entire cycle, J=0; if baseline estimation biased, impulse offset).
- CMJ/SJ: net COM acceleration a_COM(t) = (F_v(t) - m g)/m [m/s²]; velocity v_COM(t) = ∫ a_COM dt; displacement y_COM(t) = ∫ v_COM dt; jump height h = v_takeoff² / (2g) via impulse-momentum [m] [PAGE 917-918].
- RSImod = h / t_takeoff [m/s], t_takeoff from movement onset to takeoff [PAGE 917].
- Power P(t) = F_v(t) · v_COM(t) [W], normalized by mass [W/kg] [PAGE 917].
- Statistical model: Y_{ic} = μ + α_c + π_i + ε_{ic}, participant fixed effects π_i, robust SE clustered by participant; log-transform for skewed force/impulse; pairwise contrasts back-transformed as geometric mean ratios [PAGE 919]. Omnibus F(2,17). Power f=0.31 [PAGE 916].
- Reliability: ICC(A,k), k=3; CV = pooled within-unit SD / grand mean [PAGE 919].

RETROCAUSAL_GENEALOGY:
- Lineage: velocity as intensity (González-Badillo & Sánchez-Medina 2010) cited [PAGE 915]; RIR scale (Zourdos 2016) [PAGE 915]; velocity loss-fatigue link (Sánchez-Medina & González-Badillo 2011) [PAGE 915]; velocity loss and RIR association (Rodríguez-Rosell 2020) [PAGE 915]; Banyard 2019 80% 1RM, 5 sets, ≤5 reps [PAGE 916]; Cowley 2025 PBT/RPE/RIR/VBT comparison [PAGE 916]; meta-analyses Liao 2021, Orange 2022 [PAGE 916]; Jukic 2023 velocity loss thresholds [PAGE 921-922]; Refalo 2023 proximity to failure [PAGE 921]; Guo 2026 6-week sprinter intervention [PAGE 916, 922].
- Multi-week traps: Acute null does not imply chronic equivalence. Guo 2026 found VBT greater strength/sprint gains over 6 weeks despite similar CMJ [PAGE 916, 922]. Accumulation of repeated exposures matters more than single-session decrement. This study is a single-session snapshot; cannot forecast multi-week adaptation trajectories. Trap: extrapolating acute mechanical equivalence to long-term interchangeability.

RECURSIVE_THEORY_OF_MIND:
- Athlete's internal model under fatigue: RIR requires estimating remaining reps. Under acute fatigue, perceptual calibration may regress to habitual conservative estimates (crisis habit regression), causing RIR to behave like fixed loading.
- Counter-trap: Coach implements VBT to auto-regulate, but the 5-rep cap and 80% 1RM mean velocity feedback rarely alters behavior before cap binds. The monitoring tool fails to change training behavior because boundary conditions constrain it.
- Clock: 72h washout between conditions [PAGE 916]; immediate post-test only [PAGE 918]. No assessment of residual fatigue at 24-48h [PAGE 922]. The "clock" of recovery is truncated; a veto might trigger if jump performance remained suppressed at 24h, but that layer is absent.
- Nested cognition: Athlete believes RIR adjusts load, but load changes ±5kg only when RIR ≠ 3; realized mean load 121.44 kg vs PBT 120.00 kg (Table 2, [PAGE 920])—tiny difference. The system's decision loop is nearly open.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: Force plates Kistler 9286BA, 1000 Hz, 20 Hz zero-lag Butterworth [PAGE 917-918]. Movement onset threshold: max(3.5% standing force, 5× baseline SD, 20 N) sustained 20 ms [PAGE 917]. Takeoff: F_v < 20 N for 20 ms. If noise violates these, event detection fails; data vetoed.
- Biomechanical layer: Squat depth = hip/knee same horizontal level [PAGE 916]. Valid rep = depth met, concentric unassisted [PAGE 916]. CMJ/SJ hands on hips, no countermovement contamination for SJ [PAGE 917]. If contamination detected, trial excluded [PAGE 918].
- VBT layer: Tendo Unit tether vertical alignment checked; if lateral deviation, pause and readjust [PAGE 918]. Participants could not see velocity [PAGE 918]. If visual feedback leaked, VBT blinding breaks.
- Weather/Environment: Indoor lab; 72h no strenuous activity, no food 1h before [PAGE 917]. No weather variable, but standardization is the veto control.
- Veto proof chain: A trial is excluded if takeoff, landing, baseline, or jump type cannot be identified confidently [PAGE 918]. This is the final veto.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios + predictions.
1. Scenario: VBT set termination due to 20% velocity loss occurs before rep 5. Verifiable: check force/velocity data for mean concentric velocity drop ≥20% within first 4 reps. Prediction: In those early-termination sets, VBT shows lower positive impulse per set vs PBT/RIR; session-level VBT impulse should be measurably lower (observed geometric mean ratio VBT vs PBT 0.970 [0.709–1.326], p=0.840 [PAGE 930], underpowered). If veto triggers (early termination confirmed), prediction of reduced volume load holds (observed -106.94 kg vs PBT [PAGE 920]).
2. Scenario: RIR load adjustment fails because athlete reports exactly 3 RIR every set. Verifiable: RIR reports all equal to target; mean external load per set unchanged from PBT (120.00 kg vs 121.44 kg [PAGE 920] is tiny). Prediction: RIR becomes functionally identical to PBT; mechanical output and jump response identical (observed relative peak force RIR vs PBT ratio 0.958 [0.833–1.102], p=1.000 [PAGE 930]).
3. Scenario: Force-plate onset threshold false-positive due to baseline drift, causing movement onset detected prematurely and inflating impulse integration window. Verifiable: inspect raw force-time curves for standing force stability over 180 ms pre-onset [PAGE 917]. Prediction: J_positive values biased upward uniformly across conditions, but since all conditions share processing, relative ratios attenuated toward 1.0 (null result could be artifact). If veto triggered by failed onset detection, that participant/trial excluded [PAGE 918]; complete-case sensitivity showed no overall effects [PAGE 929].

Make sure no betting lines. No toy equations.

Now compose final output with XML tags. Ensure word count. Let's write elegantly.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The study’s core mechanical problem is protocol convergence under a shared structural ceiling. All three conditions began at 80% 1RM, used five sets, and imposed a hard cap of five repetitions per set [PAGE 916]. PBT therefore delivered exactly 25 repetitions and 3000.00 kg of session volume load; RIR delivered 25 repetitions but 3036.11 kg because between-set load adjustments of ±5 kg nudged mean external load to 121.44 kg versus PBT’s 120.00 kg; VBT delivered 24.06 repetitions and 2893.06 kg because the 20% velocity-loss rule terminated some sets before the cap [PAGE 920, Table 2]. Because the repetition cap binds on nearly every set, the VBT velocity-loss feedback rarely altered realized exposure enough to change ground-reaction kinetics: relative peak vertical force geometric means were 1.260 (PBT), 1.207 (RIR), and 1.237 × system weight (VBT), with an omnibus F(2,17) = 1.123, p = 0.348 [PAGE 920]. Mean positive vertical impulse geometric means were 400.2, 353.2, and 388.2 N·s, F(2,17) = 1.452, p = 0.262 [PAGE 920]. The first hop is therefore that load-regulation information did not translate into meaningfully different training behavior because the five-repetition ceiling constrained all three protocols to the same repetition neighborhood.

The second hop is statistical sensitivity. The authors report a sensitivity power analysis showing 80% power to detect an omnibus effect of approximately Cohen’s f = 0.31 [PAGE 916]. Pairwise confidence intervals are correspondingly wide. For mean positive vertical impulse, VBT versus RIR yielded a geometric mean ratio of 1.099 with a 95% CI of 0.978–1.235 and Holm-adjusted p = 0.320 [PAGE 930]. That interval permits a nearly 10% impulse difference in either direction, yet the study was underpowered to resolve it. The null findings therefore characterize the implemented protocols rather than establishing equivalence, as the discussion explicitly cautions [PAGE 923].

The third hop concerns measurement and fatigue depth. Immediate countermovement jump changes were trivial: −0.29 cm (PBT), −0.09 cm (RIR), and −0.27 cm (VBT), p = 0.969 [PAGE 921]. Squat jump changes were likewise non-significant, with VBT showing +1.63 cm but a very wide CI (−4.21 to 7.48 cm) [PAGE 921]. Several force-time secondary outcomes show poor postexercise reliability, notably SJ POST relative mean propulsive power with ICC = 0.398 (95% CI 0.026–0.645) [PAGE 927]. This creates a gray zone: true acute neuromuscular decrements may exist but be masked by measurement noise, or the stimulus may simply be insufficient to degrade jump performance in trained sprinters after only five sub-maximal sets at 80% 1RM. The study did not assess 24–48 h recovery, blood lactate, or muscle soreness [PAGE 922], so the fatigue timeline is truncated.

Gray-zone audit conclusion: the convergence of mechanical output is real for the implemented rules, but it is conditional on the repetition cap and the fixed starting intensity. The data do not support a claim that PBT, RIR, and VBT are interchangeable; they support only that, under these exact boundary conditions, session-level force and impulse and immediate jump responses were statistically indistinguishable.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, assumptions, and breakdown regimes.

Force-plate calibration and normalization [PAGE 918–919]. Before each set, the athlete stands quietly on two Kistler 9286BA plates holding the prescribed external load. The mean vertical ground-reaction force over 1–2 s is the set-specific calibration force F_cal,s [N], representing the athlete–barbell system weight. Relative peak vertical force for a segmented cycle c is defined as:

F_peak,rel(c) = max_t∈c F_v(t) / F_cal,s

where F_v(t) is total vertical ground-reaction force [N] and t spans the complete segmented squat cycle [PAGE 918–919]. Output unit: multiples of system weight (dimensionless × body weight). Breakdown regime: if F_cal,s is mis-estimated because the participant shifts weight between plates or the barbell is unracked/reracked during the calibration window, the denominator is biased and all relative forces for that set scale erroneously.

Positive vertical impulse [PAGE 919]. Net vertical force is F_net(t) = F_v(t) − F_cal,s. Positive impulse over cycle boundaries t₁ and t₂ is:

J_positive = ∫_{t₁}^{t₂} max[ F_net(t), 0 ] dt

computed by the trapezoidal rule [N·s]. Negative net-force portions are zeroed and do not subtract from the impulse. Mean positive vertical impulse is the average across valid cycles. Assumption: cycle boundaries from peak-based segmentation (peak separation ≥ 1.5 s, peak > 103% of F_cal,s, prominence ≥ 8% of F_cal,s) correctly isolate repetitions [PAGE 918]. Singularity: if F_v(t) ≤ F_cal,s throughout a cycle, J_positive = 0, which would occur only if the lifter never exceeds set calibration force—physically implausible for a valid squat but possible if calibration force is overestimated.

Jump kinematics and kinetics [PAGE 917–918]. Standing force F_stand is the median vertical GRF over the 180 ms window from 200 to 20 ms before movement onset; participant mass m = F_stand / g [kg], with g = 9.81 m/s² implicit. Net COM acceleration:

a_COM(t) = [ F_v(t) − m·g ] / m   [m/s²]

Vertical COM velocity v_COM(t) is the first time integral of a_COM(t); displacement y_COM(t) is the second integral. Movement onset uses an adaptive threshold: the greater of 3.5% of standing force, five times baseline force standard deviation, or 20 N, sustained for ≥ 20 ms [PAGE 917]. Takeoff occurs when F_v < 20 N for ≥ 20 ms [PAGE 917]. Jump height via impulse–momentum:

h = v_takeoff² / (2g)   [m]

Modified reactive strength index:

RSImod = h / t_takeoff   [m·s⁻¹]

where t_takeoff is the interval from detected movement onset to takeoff [PAGE 917]. Power:

P(t) = F_v(t) · v_COM(t)   [W]

with peak and mean propulsive power normalized by body mass [W·kg⁻¹] [PAGE 917].

Statistical inference [PAGE 916, 919]. Single-session outcomes use linear models with participant fixed effects, small-sample-corrected robust standard errors clustered by participant, and joint F tests across the three conditions. Right-skewed variables (relative peak vertical force, mean positive vertical impulse) are analyzed on the natural-log scale; pairwise contrasts are back-transformed as geometric mean ratios. Jump outcomes are analyzed as PRE-to-POST change scores. Sensitivity power: 80% power to detect omnibus f ≈ 0.31 with n = 18, α = 0.05, ρ = 0.50, ε = 1.0 [PAGE 916]. Holm adjustment applies to the three pairwise contrasts per outcome [PAGE 919].

Reported values. Relative peak vertical force: PBT 1.260, RIR 1.207, VBT 1.237 × system weight; F(2,17) = 1.123, p = 0.348 [PAGE 920; Table S1, PAGE 926]. Mean positive vertical impulse: PBT 400.2, RIR 353.2, VBT 388.2 N·s; F(2,17) = 1.452, p = 0.262 [PAGE 920; Table S1, PAGE 926]. CMJ jump height change: PBT −0.29 cm [−1.28, 0.69], RIR −0.09 cm [−2.13, 1.96], VBT −0.27 cm [−1.34, 0.81]; F(2,17) = 0.032, p = 0.969 [PAGE 921; Table S2, PAGE 927]. SJ jump height change: PBT +0.14 cm [−1.95, 2.24], RIR −1.38 cm [−4.40, 1.64], VBT +1.63 cm [−4.21, 7.48]; F(2,17) = 0.306, p = 0.740 [PAGE 921; Table S3, PAGE 928].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week extrapolation traps.

The intellectual lineage begins with velocity as a loading-intensity metric (González-Badillo & Sánchez-Medina, 2010) and the velocity–fatigue relationship (Sánchez-Medina & González-Badillo, 2011), both cited in the introduction [PAGE 915]. The repetitions-in-reserve construct is anchored in Zourdos et al. (2016) [PAGE 915], while the empirical association between velocity loss and RIR during the back squat comes from Rodríguez-Rosell et al. (2020) [PAGE 915]. The study’s structural template—80% 1RM, five sets, no more than five repetitions—directly echoes Banyard et al. (2019), who found altered velocity and session-organization characteristics under VBT but no differences in most kinetic and power outcomes [PAGE 916]. Cowley et al. (2025) is cited as a direct four-way comparison of PBT, RPE, RIR, and VBT that found no evidence autoregulation reduced postexercise neuromuscular fatigue or soreness [PAGE 916]. Meta-analytic context comes from Liao et al. (2021) and Orange et al. (2022), which report small, uncertain average differences between VBT and PBT for strength, power, and sprint adaptations [PAGE 916]. Acute fatigue benchmarks are drawn from Párraga-Montilla et al. (2020) and Morán-Navarro et al. (2017), describing far larger CMJ decrements after failure training [PAGE 921–922]. Velocity-loss threshold evidence is summarized from Jukic et al. (2023) and Pareja-Blanco et al. (2019) [PAGE 921–922]. Proximity-to-failure evidence is cited from Refalo et al. (2023) [PAGE 921].

The principal multi-week trap is acute-to-chronic overreach. The present design is a single-session, within-participant crossover with immediate postexercise testing only [PAGE 918]. The authors explicitly note that longer-term adaptations may diverge even when acute responses do not, citing Guo et al. (2026), a 6-week intervention in sprinters in which VBT produced greater squat-strength and 20-m sprint gains than PBT while CMJ gains were similar [PAGE 916, 922]. The reasoning is that the value of autoregulation accumulates across repeated exposures rather than manifesting as a smaller functional decrement after every session [PAGE 916]. A second trap is equivalence inference: the study was not designed as an equivalence trial, so non-significant condition effects cannot be read as evidence that PBT, RIR, and VBT are interchangeable [PAGE 923]. A third trap is the fixed-load PBT limitation: the PBT condition did not permit within-session load progression, so results apply only to this standardized fixed-load protocol rather than all percentage-based practice [PAGE 922]. Consequently, any forecast of multi-week training prescription from these acute data is unsupported; the data describe a narrow boundary condition, not a general law of load regulation.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock-layer reasoning.

Crisis habit regression. RIR requires the athlete to estimate how many additional technically acceptable repetitions remain after a set [PAGE 916]. Under acute fatigue, perceptual calibration may regress toward habitual, conservative estimates: the athlete reports a higher RIR than is physically available, or a fixed 3 RIR by default, effectively converting an autoregulated protocol into fixed loading. The realized data support a mild version of this: RIR mean external load per set was only 121.44 kg versus PBT’s 120.00 kg, and completed repetitions were identical at 25.00 [PAGE 920, Table 2]. The athlete’s internal model of “reps left” did not meaningfully perturb the load parameter.

Counter-trap. The coach implements VBT expecting velocity feedback to alter training behavior, but the protocol’s boundary conditions—80% 1RM, five sets, five-repetition cap, and a 20% velocity-loss threshold—constrain the feedback loop. If the velocity-loss threshold is not reached before the fifth repetition, the set ends at the cap anyway, making VBT mechanically indistinguishable from PBT for that set. VBT completed only 24.06 repetitions versus 25.00 for PBT, a mean difference of −0.94 repetitions [PAGE 920], indicating early termination was rare. The counter-trap is that the monitoring tool appears objective but behaviorally inert because the cap binds first. Real-time feedback alters the stimulus only when it changes training behavior [PAGE 921]; here, the structure prevented that change from propagating.

Clock. The experimental clock imposes at least 72 h between conditions [PAGE 916] but measures jump response only immediately postexercise [PAGE 918]. There is no 24- or 48-h recovery assessment, no blood lactate, and no muscle soreness [PAGE 922]. This truncates the fatigue-recovery clock at the moment when acute differences might be smallest. A deeper theory of mind would model the athlete’s recovery state as a hidden variable evolving over the postexercise window; this study observes only t = 0. If VBT’s lower volume load confers a recovery advantage, it would appear at t > 0, outside the observation window. Therefore the “crisis” of immediate postexercise jump performance may not be the decision-relevant crisis at all; the counter-trap is optimizing for the wrong clock layer.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto proof chain.

Physical layer (force acquisition and signal processing). Two Kistler 9286BA force plates sample bilateral vertical ground-reaction force at 1000 Hz through BioWare 5.4.8.0; left and right signals are summed [PAGE 917–918]. The primary signal is filtered with a fourth-order, zero-lag Butterworth low-pass filter at a 20-Hz cutoff [PAGE 917]. Movement onset requires the vertical GRF to deviate from standing force by the greater of 3.5% of standing force, five times the baseline standard deviation, or 20 N, sustained for at least 20 ms [PAGE 917]. Takeoff requires F_v < 20 N for at least 20 ms; landing requires force to exceed 20 N for at least 20 ms [PAGE 917]. Veto condition: if baseline drift, crosstalk, or plate misalignment prevents confident identification of takeoff, landing, or stable baseline, the trial is excluded [PAGE 918]. This is a hard physical veto at the acquisition layer.

Biomechanical layer (movement validity). Squat depth is defined as hip and knee joints at the same horizontal level, visually monitored in real time [PAGE 916]. A repetition is valid only if depth is met and the concentric phase is completed without assistance [PAGE 916]. CMJ and SJ trials require hands on hips; SJ trials are screened for countermovement contamination via force-time and velocity-time curves [PAGE 917]. A trial with preliminary downward movement before intended upward propulsion is flagged and excluded if the jump type cannot be identified confidently [PAGE 918]. Veto condition: contaminated SJ trials or failed depth criteria invalidate the repetition or jump trial, removing it from the segmented-cycle average or jump mean.

VBT layer (velocity monitoring integrity). During VBT, a Tendo Unit linear position transducer is tethered to the right sleeve of the barbell; tether verticality is checked before each set and monitored during exercise, with pauses for readjustment if lateral deviation occurs [PAGE 918]. Participants cannot view numerical velocity [PAGE 918]. Veto condition: undetected tether angle error introduces systematic velocity measurement bias; if visual feedback leaks, the blinding condition is broken and VBT intent is confounded.

Environmental/weather layer. Trials are conducted indoors under standardized conditions. Participants refrain from strenuous activity for 72 h before each trial, avoid food for 1 h before testing, and maintain similar dietary and preparation habits [PAGE 917]. There is no meteorological variable, but the standardization protocol functions as an environmental veto control: violation of pre-trial restrictions would invalidate within-participant comparability.

Veto proof summary. The final exclusion rule states trials are retained only when takeoff, landing, stable baseline, and jump type can be identified with confidence; otherwise they are excluded [PAGE 918]. The complete-case sensitivity analysis (n = 17 for CMJ, n = 15 for SJ) reproduced the null omnibus results [PAGE 929, Table S4A], suggesting the veto chain did not selectively remove data in a way that manufactured the null. However, the veto chain also cannot recover signal lost to poor reliability: SJ POST relative mean propulsive power has ICC = 0.398 [PAGE 927], meaning that even veto-passed trials may contain too much noise to detect true condition differences.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with predictions.

Scenario 1: VBT early termination confirmed by velocity trace. Verifiable condition: inspect the Tendo Unit mean concentric velocity per repetition; a veto fires if any VBT set shows a ≥ 20% velocity decline before repetition 5, triggering early set termination. Prediction: Sets terminated by velocity loss will exhibit lower set-level positive impulse than PBT/RIR sets completed to five repetitions, and session-level VBT impulse should sit below PBT. The observed geometric mean ratio VBT vs PBT is 0.970 [0.709–1.326], Holm-adjusted p = 0.840 [PAGE 930], which is consistent with a true reduction but statistically underpowered; if the veto fires on raw velocity data, the prediction of reduced VBT volume load is mechanistically confirmed (observed VBT volume load −106.94 kg vs PBT, p < 0.001 [PAGE 920]).

Scenario 2: RIR perceptual freeze at the target. Verifiable condition: audit the RIR reports; a veto fires if every set is reported as exactly 3 RIR, causing no between-set load adjustment. Prediction: RIR becomes functionally identical to PBT, so relative peak vertical force and impulse ratios should cluster tightly around 1.00 with trivial effect sizes. Observed: RIR vs PBT relative peak vertical force geometric mean ratio 0.958 [0.833–1.102], Hedges’ gz −0.182, Holm-adjusted p = 1.000 [PAGE 930]; mean external load per set 121.44 kg vs 120.00 kg, a negligible divergence [PAGE 920]. The veto condition is verifiable from session logs, and the prediction of behavioral equivalence is borne out.

Scenario 3: Force-plate onset threshold false-positive from baseline noise. Verifiable condition: re-examine raw force-time traces for the 180 ms pre-onset window; a veto fires if standing force is unstable such that the adaptive threshold (3.5% / 5 SD / 20 N) is crossed by noise rather than movement [PAGE 917]. Prediction: premature onset detection lengthens the integration window for J_positive uniformly across conditions, biasing all impulse values upward but attenuating between-condition ratios toward 1.0. This would produce a spurious null for mechanical output even if true per-repetition impulse differed. The observed non-significant impulse omnibus (p = 0.262) and wide pairwise CIs [PAGE 920, 930] are compatible with such attenuation; complete-case sensitivity did not alter the overall null [PAGE 929], but that analysis shares the same preprocessing pipeline and therefore cannot veto the preprocessing bias itself.
</RLVR_COUNTERFACTUAL_VETOES>