---
source: "2026 - Acute Post-Activation Performance Enhancement (PAPE) Effects of A Ballistic Medicine Ball Throw Versus Maximal Strength Activation on Upper - H tter et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Sports Science and Medicine/In Press/2026"
pages: 12
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5637
---

<NATIVE_REASONING>
The user wants a deep, multi-section analysis of the provided sports science paper. I must follow strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations. Use real formalism.

Let me structure this carefully.

**THINK_TRACE**: Multi-hop derivation and gray-zone audit. Need >=400 words here. Discuss:
- The study design: crossover, n=28 trained males, HLBP vs BMT vs CC.
- Outcome: Bench Press Throw at 40% 1RM measured on 1080 Quantum at baseline, 5 min, 10 min.
- Confirmatory family: PPO, APO, PV at 5 and 10 min (6 contrasts), Holm-Bonferroni.
- Key results: Condition x Time interactions significant for PPO (p=0.023, η²p=0.099) and PV (p=0.004, η²p=0.134). At 5 min: HLBP vs BMT difference in change: PPO -97.7 W (CI -159.4 to -35.9, dz=-0.61, Holm p=0.016); PV -0.086 m/s (CI -0.137 to -0.035, dz=-0.65, Holm p=0.011). Direction favors BMT because HLBP dropped.
- Within HLBP: PPO -67 W (~-3.9%, dz=-0.61); PV -0.071 m/s (~-2.7%, dz=-0.74). Partial recovery at 10 min.
- BMT: no change from baseline or CC.
- Gray zones: analytical hierarchy was revision-stage, not pre-specified ([PAGE 5]); Holm CIs unadjusted and not simultaneous ([PAGE 5]); carryover analysis underpowered (6-11 per cell) ([PAGE 6]); control condition not time/work-matched, antagonist contractions possible ([PAGE 10]); measurement reliability not established ([PAGE 10]); Quantum system friction vs free weights ([PAGE 10]); 5-min post-test may itself be fatiguing for 10-min reading ([PAGE 10]); sex limitation ([PAGE 10]); statistical power close to threshold for significant contrasts ([PAGE 10]); period effects none detected ([PAGE 6]); baseline equivalence not tested ([PAGE 6]); uneven sequence distribution ([PAGE 2]); first-order carryover not fully ruled out ([PAGE 6]); 1080 detection artifacts in TTPPO ([PAGE 5]).

**SOURCE_OPERATORS_AND_EQUATIONS**: Formal LaTeX. Need to define:
- Let i index participant, c condition ∈ {HLBP, BMT, CC}, t time ∈ {Pre, 5min, 10min}.
- Observed outcome Y_{ict} ∈ {PPO [W], APO [W], PV [m·s⁻¹], AV [m·s⁻¹], TTPPO [s], TTPV [s]}.
- Repeated measures ANOVA: Y_{ict} = μ + C_c + T_t + (C×T)_{ct} + S_i + (S×C)_{ic} + (S×T)_{it} + ε_{ict}. Or more standard mixed model. Units: W, m/s, s.
- Condition × Time interaction omnibus: F(4, 108) for PPO/PV/AV etc.
- Difference-in-change contrast: Δ_c(t) = Y_{ic}(t) - Y_{ic}(Pre). Contrast ψ(t) = Δ_HLBP(t) - Δ_BMT(t). Estimator \hat{ψ}(t) = (1/n) Σ_i [(Y_{i,HLBP,t} - Y_{i,HLBP,Pre}) - (Y_{i,BMT,t} - Y_{i,BMT,Pre})].
- Cohen's dz = \hat{ψ} / s_D where s_D is SD of difference scores.
- Holm-Bonferroni: order p_(1) ≤ ... ≤ p_(6); reject H_(k) if p_(k) ≤ α/(7-k). At step α=0.05/6=0.0083.
- Confidence intervals: unadjusted 95% CI = \hat{ψ} ± t_{0.975, df} · SE(\hat{ψ}). Not simultaneous.
- Sphericity: Mauchly's W; Greenhouse-Geisser ε; corrected df = ε·df. For TTPPO: F(2.41, 57.89), ε=0.60.
- Sensitivity: dz_min = 0.55 at α=0.05, dz_min = 0.70 at Holm step α=0.0083 for n=28, power=0.80 ([PAGE 3]).
- Load prescriptions: HLBP = 0.90·1RM; BMT = 0.05·1RM (≈5.07±0.78 kg); Throw test = 0.40·1RM.
- SI units: power W = J/s = kg·m²/s³; velocity m/s; time s; mass kg.
- Breakdown/singularity regimes: n=28 underpowered for dz<0.70 under Holm; sphericity violation for TTPPO; crossover carryover if washout <72h or >7d violates stationarity; 1080 detection artifacts when TTPPO <0.1 s vs normal ~0.23-0.24 s ([PAGE 5]); 90% 1RM exceeds upper-body optimal 60-84% window ([PAGE 8]); relative strength 1.17 kg/kg below ≥1.5 threshold ([PAGE 9]).

**RETROCAUSAL_GENEALOGY**: Historical lineage and multi-week traps.
- PAP definition from Prieske et al. (2020) p.1563 ([PAGE 2]); PAPE definition.
- Early work: Vandervoort et al. (1983) twitch potentiation after voluntary contraction ([PAGE 11]); Tillin & Bishop (2009) balance fatigue/potentiation ([PAGE 8]).
- Seitz & Haff (2016) review; Wilson et al. (2013) meta-analysis; Krzysztofik et al. (2021) upper body 60-84% window ([PAGE 2,8]).
- Cormier et al. (2022) terminology complex/contrast/French contrast ([PAGE 1]).
- Tsoukos et al. (2019, 2021) bench press throw potentiation windows 4th-12th min ([PAGE 8]).
- Bevan et al. (2009, 2010) recovery 7-8 min; optimal loading 30% 1RM ([PAGE 8,9]).
- Smilios et al. (2017) relative strength ≥1.5 kg/kg correlation r=0.87 ([PAGE 9]).
- Rappelt et al. (2024) PAPE vs warm-up indistinguishability ([PAGE 9]).
- Multi-week traps: training status (8.11±3.68 yrs experience) ([PAGE 3]); relative strength threshold; if athletes train across weeks, their 1RM shifts, invalidating %1RM prescriptions across sessions; washout 72h-7d may not suffice for systemic fatigue; period effects tested none found ([PAGE 6]) but carryover underpowered ([PAGE 6]); learning effects with one familiarization session ([PAGE 10]); nutrition/sleep uncontrolled across weeks ([PAGE 10]); sex differences limit generalization ([PAGE 10]).

**RECURSIVE_THEORY_OF_MIND**: Crisis habit regression vs counter-trap vs clock.
- This is a more abstract section. Need to model coach/athlete cognition under pressure ("crisis").
- Crisis habit regression: Under acute performance pressure, coaches revert to habitual high-load CA (HLBP at 90% 1RM) because it "feels" potent, despite evidence it induces fatigue. Regression to the mean? No—regression to habitual high-threshold strategy.
- Counter-trap: The ballistic condition (BMT) appears superior only because HLBP cratered (contrast artifact). Coaches might overcorrect and switch entirely to low-load ballistic work, ignoring that BMT produced no true potentiation (null vs baseline and CC). This is a counter-trap: mistaking relative superiority for absolute efficacy.
- Clock: The 5-min vs 10-min post-CA window. PAPE thought to peak 5-10 min ([PAGE 8]); but at 5 min fatigue dominates after HLBP; at 10 min only partial recovery to baseline, no overshoot. The clock is a decision variable: if competition demands output at exactly T+5, HLBP is detrimental; if T+7-8, maybe different. The 5-min post-test itself may be an additional fatiguing stimulus confounding T+10 ([PAGE 10]).
- Recursive ToM: Coach models athlete's response; athlete models coach's expectation; both may misattribute the HLBP decrement to "needing more activation" rather than fatigue, leading to escalating load (crisis habit regression) or abandoning structure (counter-trap). The clock imposes a hard constraint: warm-up already elevates readiness, leaving narrow window for added value (Rappelt et al., 2024).
- Formalize: Let u(t) be coach-selected CA intensity at time τ before competition at t=0. Athlete output P(t) = f(potentiation(τ), fatigue(τ), baseline_readiness). Under crisis, coach's policy π_crisis(·) overestimates marginal benefit of high intensity near t=0. Counter-trap: π_lowball(·) sets u→0.05·1RM expecting potentiation, but stimulus below threshold. Clock: optimal τ* solves dP/dτ=0 subject to τ≥5 min; data suggest τ* > 5 for HLBP or τ* undefined for BMT (flat).

**CROSS_LAYER_VETO_ADJUDICATION**: Physical/biomechanical/weather veto proof.
- Physical layer: 1080 Quantum motorized cable system vs free weights. "benching with the Quantum strings felt significantly more difficult" ([PAGE 10]); mechanical friction/tension profile differs; transfer to free-weight barbell pressing uncertain ([PAGE 10]). Veto: cannot generalize to traditional free-weight bench press without reliability/transfer data.
- Biomechanical layer: Bench press throw at 40% 1RM; grip width one fist outside shoulder width; forearm vertical at chest; shoulder abduction ~45° ([PAGE 4]). Eccentric 0.5-0.6 s, concentric max intent. Optimal power load for upper body 30-70% 1RM, ballistic bench press throw optimal at 30% ([PAGE 9]); 40% used is consistent but not necessarily peak. BMT at 5% 1RM ≈5.1 kg medicine ball; wrist/forearm more pronated/internally rotated than bench press ([PAGE 4]); not mechanically equivalent to bench press conditioning ([PAGE 9]). HLBP 90% 1RM eccentric 1-2 s; RIR 1; 2 sets of 2-3 reps ([PAGE 4]).
- Weather layer: This is an indoor lab study; no weather variables. However, environmental factors not controlled: nutritional intake, pre-session fatigue, daily recovery, caloric intake ([PAGE 10]). Room temperature? Not specified. Core temperature maintained by warm-up/cycle ergometer 60 W ([PAGE 2,4]). Veto: absence of environmental control (ambient temp/humidity) and uncontrolled extraneous variables (nutrition, sleep, stress) means results are lab-specific; cannot veto outdoor/weather effects because none measured, but must note ecological veto for field application in varying climates/travel (jet lag, temperature).
- Veto proof structure: A claim is vetoed if any layer fails. Claim "HLBP enhances power" → vetoed by biomechanical fatigue layer (PPO dropped 67 W at 5 min). Claim "BMT potentiates" → vetoed by null vs baseline and CC. Claim "results transfer to competition" → vetoed by equipment layer (Quantum vs free weights), sex layer (males only), and environmental layer (no weather control, indoor only).

**RLVR_COUNTERFACTUAL_VETOES**: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning Verifiable Rewards? Or some framework. I'll interpret as verifiable counterfactual veto scenarios: scenarios where if condition X holds, the study's conclusion is vetoed/invalidated. Need 3 scenarios, each verifiable, with predictions.
1. Scenario: If a pre-CA neuromuscular readiness index (e.g., twitch interpolation, EMG, or force-velocity profile) was collected and showed HLBP participants started at significantly different baseline readiness than BMT/CC, then the difference-in-change contrast is confounded by regression to the mean / baseline imbalance. Verification: collect baseline neuromuscular state; test equivalence (TOST) between conditions. Prediction: significant baseline imbalance would veto causal interpretation of HLBP decrement as CA effect.
2. Scenario: If the 5-min post-intervention test itself is removed (split-design where each participant does only ONE post-test time point), and HLBP at 10 min shows no decrement or enhancement, then the 10-min "return to baseline" was confounded by the additional 5-min test fatigue. Verification: counterbalanced single time-point design. Prediction: removal of 5-min test reveals PAPE overshoot at 10 min for HLBP or BMT, vetoing the conclusion that no enhancement exists at 7-12 min.
3. Scenario: If the control condition is replaced with a time-matched, work-matched passive or sham control, and BMT still shows no difference from control while HLBP still decrements, then the active control (dumbbell row) is not the issue. Verification: add passive control arm. Prediction: if HLBP decrement persists against passive control, veto the explanation that CC was "moving"; if BMT emerges as different from passive control, then original CC masked a small effect (but unlikely given data).
Alternatively: Scenario about 1RM drift across weeks. If 1RM measured at session 1 drifts >5% by session 3 due to training, then %1RM prescriptions are mis-calibrated, violating the dose assumption. Verification: retest 1RM before each session or use velocity-based load prescription. Prediction: >5% drift invalidates load-intensity mapping and vetoes intensity-level conclusions.

Need to keep total word count >=1000 across sections. Each section should be substantial. THINK_TRACE >=400 words alone.

Let me write carefully, ensuring:
- No betting terms.
- No toy equations. Use real formalism.
- Cite [PAGE N] with verbatim quotes where appropriate.
- LaTeX formatting.

I will write each XML section. Word count check mentally: need >1000 total. THINK_TRACE 400+, others 150+ each. Should be fine.

Let's draft.

THINK_TRACE (>=400 words):
Start with study identification. Derive the causal estimand. Discuss the within-subject crossover. The estimand is ψ(t)=E[Δ_HLBP(t)-Δ_BMT(t)]. Direction: negative means HLBP changed worse than BMT. Results. Gray zones: analytic plan not pre-specified ([PAGE 5]); Holm CI unadjusted ([PAGE 5]); uneven randomization [PAGE 2]; carryover underpowered [PAGE 6]; control not matched [PAGE 10]; measurement reliability missing [PAGE 10]; Quantum vs free weight [PAGE 10]; 5-min test fatigue confound [PAGE 10]; power near threshold [PAGE 10]; TTPPO artifacts [PAGE 5]; baseline equivalence not tested [PAGE 6]. Also note within HLBP drop is fatigue-dominated, not potentiation; BMT null. Practical magnitude small (~3.9%, ~2.7%) despite moderate dz.

SOURCE_OPERATORS_AND_EQUATIONS:
Define indices, units, model, contrast, Holm, CI, power, breakdown regimes. Cite pages for specific values.

RETROCAUSAL_GENEALOGY:
Lineage PAP/PAPE; definitions; key citations from paper; multi-week traps: 1RM drift, washout, learning, sex, nutrition/sleep.

RECURSIVE_THEORY_OF_MIND:
Coach/athlete mental models; crisis habit regression (default to high load); counter-trap (overcorrect to low load); clock (5 vs 10 min, warm-up readiness ceiling). Formalize P(t) function perhaps.

CROSS_LAYER_VETO_ADJUDICATION:
Three layers: Physical (1080 Quantum friction/tension profile vs free weights, transfer veto), Biomechanical (load prescriptions, movement standards, optimal load literature, BMT mechanical non-equivalence), Weather/Environmental (indoor only, no ambient control, nutrition/sleep/fatigue uncontrolled; ecological veto for field/weather/varied climates). State veto logic: claim survives only if all layers pass.

RLVR_COUNTERFACTUAL_VETOES:
Three enumerated scenarios. Each: condition (verifiable), veto implication, prediction.

Make sure to use verbatim quotes with [PAGE N]. I'll include several.

Let's ensure no "spread", "moneyline", "total", "odds", "bet". None appear.

Word count: I'll aim for rich content.

Now write the final output.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The source is Hütter, Fischer, and Konrad (2026), Journal of Sports Science and Medicine 25, 903-914, an acute within-subject crossover trial comparing two conditioning activities (CAs) on upper-body push power. Twenty-eight trained male athletes (age 24.86 ± 2.62 y; bench-press 1RM 101 ± 16 kg; relative strength 1.17 ± 0.15 kg/kg body mass; training experience 8.11 ± 3.68 y) completed High-Load Bench Press (HLBP; 90% 1RM), Ballistic Medicine-Ball Throw (BMT; 5% 1RM ≈ 5.1 ± 0.8 kg), and an active Control Condition (CC; one-arm dumbbell row), with condition order individually randomized among all six permutations ([PAGE 1], [PAGE 2], [PAGE 3]). The test exercise was a ballistic bench press throw at 40% 1RM on the 1080 Quantum system, assessed at baseline, 5 min, and 10 min post-CA ([PAGE 1], [PAGE 4]).

The causal estimand is a difference-in-change contrast. For participant i, condition c, and time t, define the within-participant change Δ_{ic}(t) = Y_{ic}(t) − Y_{ic}(Pre). The confirmatory contrast at each post-condition time point is ψ(t) = Δ_{HLBP}(t) − Δ_{BMT}(t), tested as a paired-samples contrast with Holm-Bonferroni correction across six tests (three outcomes × two time points) ([PAGE 1], [PAGE 5]). The observed estimates are clinically interpretable in raw SI units: at 5 min, ψ_PPO(5) = −97.7 W (95% CI −159.4 to −35.9; dz = −0.61; Holm p = 0.016) and ψ_PV(5) = −0.086 m·s⁻¹ (95% CI −0.137 to −0.035; dz = −0.65; Holm p = 0.011). Both point estimates favor BMT over HLBP, but the decomposition shows the difference arises from a decrement in HLBP, not a gain in BMT: HLBP fell −67.1 W (≈ −3.9%; dz = −0.61) in PPO and −0.071 m·s⁻¹ (≈ −2.7%; dz = −0.74) in PV relative to its own baseline, whereas BMT changed neither from baseline nor from CC ([PAGE 1], [PAGE 5], [PAGE 6], [PAGE 7]). No contrast remained significant at 10 min, and APO was null at both time points ([PAGE 1], [PAGE 7]).

Gray-zone audit. First, the primary/exploratory hierarchy (PPO, APO, PV confirmatory; AV, TTPPO, TTPV exploratory) was a revision-stage decision, not a pre-signated protocol ([PAGE 5]); this weakens the familywise error guarantee despite Holm adjustment. Second, the accompanying 95% CIs are unadjusted and explicitly not simultaneous intervals ([PAGE 5]). Third, allocation was randomized but not block-balanced (cell counts ranged from n = 3 to n = 6 across sequences), so period and condition effects are partially confounded; the authors tested period effects separately within each condition and found none ([PAGE 2], [PAGE 6]). Fourth, first-order carryover was examined in 18 tests restricted to sessions two and three; two nominal p-values did not survive correction, and the authors correctly note low sensitivity (6–11 participants per cell) so absence of detected carryover is not evidence of none ([PAGE 6]). Fifth, baseline equivalence was not tested via equivalence testing, and absence of a detected difference is not evidence of equivalence ([PAGE 6]). Sixth, statistical power is borderline: with n = 28, the smallest detectable contrast is dz ≈ 0.55 at α = 0.05 and dz ≈ 0.70 at the most stringent Holm step (α = 0.05/6 = 0.0083); the two significant contrasts (dz = −0.61, −0.65) sit close to this threshold, while null contrasts at 10 min (dz ≈ −0.37, −0.38) and for APO (dz ≈ −0.34, −0.30) are below it ([PAGE 3], [PAGE 10]). Seventh, the active control was neither work- nor time-matched to the experimental conditions, and antagonist contractions could influence agonist output via reciprocal inhibition ([PAGE 4], [PAGE 10]); CC itself showed a −20.6 W APO decline at 5 min and the largest 10-min PPO change (+40.8 W) of any condition, so the reference is “moving” ([PAGE 10]). Eighth, no intraclass correlation or coefficient of variation was established for the 1080 Quantum bench-press-throw outputs, so measurement error cannot be quantified ([PAGE 10]). Ninth, participants reported the Quantum cable system felt harder than free weights, implying friction/tension-profile differences that limit transfer to traditional barbell bench pressing ([PAGE 10]). Tenth, TTPPO contains residual detection artifacts (two values < 0.1 s vs. normal ≈ 0.23–0.24 s) and sphericity was violated for that variable (Greenhouse–Geisser ε = 0.60) ([PAGE 5]). Eleventh, the 5-min post-test may itself have acted as an additional fatiguing stimulus, blunting interpretation of the 10-min time point ([PAGE 10]). Twelfth, findings are limited to trained males and cannot generalize to females ([PAGE 10]). Finally, practical magnitudes are small (≈3.9% PPO, ≈2.7% PV) despite moderate standardized effects, so statistical significance does not equal practical relevance ([PAGE 1], [PAGE 7]).

The central mechanistic inference is therefore fatigue-dominated, not potentiation: the 90% 1RM HLBP load likely exceeded the 60–84% 1RM upper-body window identified by Krzysztofik et al. (2021) and Wilson et al. (2013), generating acute fatigue that masked any PAPE within 5 min, while the 5% BMT load may have remained below an effective potentiation threshold ([PAGE 2], [PAGE 8], [PAGE 9]).
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, and breakdown regimes.

Indexing and units. Let i ∈ {1,…,n} index participants (n = 28 for PPO, APO, PV, AV, TTPV; n = 25 for TTPPO after three exclusions for 1080 repetition-detection error), c ∈ {HLBP, BMT, CC} index conditioning activity, and t ∈ {Pre, 5min, 10min} index assessment time. Outcomes are measured in SI units: PPO and APO in watts [W ≡ J·s⁻¹ ≡ kg·m²·s⁻³]; PV and AV in metres per second [m·s⁻¹]; TTPPO and TTPV in seconds [s]. Loads are prescribed as fractions of individual bench-press 1RM: HLBP = 0.90·1RM (91.3 ± 14.0 kg, range 74.3–130.5 kg); BMT = 0.05·1RM (prescribed 5.07 ± 0.78 kg, achieved 5.1 ± 0.8 kg, max deviation 0.05 kg ≤ 1.2%); test throw = 0.40·1RM ([PAGE 1], [PAGE 4]). The 1080 Quantum system was set to “Non-Flying Weight,” “No Pulley,” with 3 kg per side (6 kg total) to permit cable retraction up to 6 m·s⁻¹; power, velocity, and timing were computed in real time by device-native software and not recalculated from raw displacement/force/time signals ([PAGE 4]).

Repeated-measures model. For each outcome Y, a fully within-subject two-way repeated-measures ANOVA was fit:
Y_{ict} = μ + C_c + T_t + (C×T)_{ct} + S_i + (S×C)_{ic} + (S×T)_{it} + ε_{ict},
where S_i is the participant random effect. The omnibus effect of interest is the Condition × Time interaction. Reported omnibus statistics: PPO, F(4, 108) = 2.96, p = 0.023, η²p = 0.099; PV, F(4, 108) = 4.16, p = 0.004, η²p = 0.134; APO interaction F(4, 108) = 1.41, p = 0.237, η²p = 0.049; AV interaction F(4, 108) = 2.51, p = 0.046, η²p = 0.085 (exploratory); TTPPO interaction F(2.41, 57.89) = 1.19, p = 0.317 with Greenhouse–Geisser ε = 0.60 after sphericity violation (Mauchly p < 0.001) ([PAGE 6], [PAGE 7]).

Difference-in-change contrast estimator. For confirmatory outcome Y and time point t ∈ {5min, 10min}:
\hat{ψ}(t) = (1/n) Σ_{i=1}^n [ (Y_{i,HLBP,t} − Y_{i,HLBP,Pre}) − (Y_{i,BMT,t} − Y_{i,BMT,Pre}) ].
Reported as raw mean difference with unadjusted 95% CI:
CI(t) = \hat{ψ}(t) ± t_{0.975, df} · SE(\hat{ψ}(t)).
Standardized effect: Cohen’s dz = \hat{ψ}(t) / s_D, where s_D is the standard deviation of the within-participant difference scores. Holm–Bonferroni familywise control at α = 0.05 across six ordered p-values: reject H_{(k)} if p_{(k)} ≤ α / (7 − k); the most stringent step uses α = 0.05/6 ≈ 0.0083. CIs are unadjusted and therefore not simultaneous ([PAGE 5], [PAGE 6], [PAGE 7]).

Sensitivity and power. A priori G*Power (Faul et al., 2009) specified repeated-measures ANOVA with groups = 1, measurements = 3, ρ = 0.5, ε = 1, f = 0.25, α = 0.05, power = 0.80 → N = 28 (actual power = 0.813). A subsequent sensitivity analysis for the paired contrasts indicates smallest detectable dz = 0.55 at α = 0.05 (two-sided) and dz = 0.70 at the Holm step α = 0.0083 ([PAGE 3]). These thresholds define the breakdown regime: contrasts with |dz| < 0.70 cannot be reliably distinguished from zero under the Holm-adjusted criterion; the two significant contrasts (dz = −0.61 PPO, dz = −0.65 PV at 5 min) lie near this boundary.

Breakdown / singularity regimes. (1) Statistical power singularity: n = 28 is underpowered for dz < ~0.55 (uncorrected) or < ~0.70 (Holm-corrected); null findings at 10 min and for APO indicate absence of evidence for detectable effects, not evidence of no smaller effect ([PAGE 3], [PAGE 10]). (2) Sphericity breakdown: TTPPO violated sphericity and required Greenhouse–Geisser correction; additionally, two TTPPO values (0.092 s CC Pre; 0.071 s HLBP 5 min) are residual repetition-detection artifacts far below the normal range (~0.23–0.24 s) ([PAGE 5], [PAGE 7]). (3) Carryover singularity: washout was 72 h–7 days; uneven cell sizes (n = 3–6 per sequence cell) make first-order carryover tests underpowered ([PAGE 2], [PAGE 6]). (4) Intensity breakdown: HLBP at 90% 1RM exceeds the 60–84% 1RM upper-body PAPE window, plausibly inducing fatigue rather than potentiation; BMT at 5% 1RM may be below threshold ([PAGE 8], [PAGE 9]). (5) Equipment singularity: motorized-cable resistance differs from free weights, and no reliability coefficients (ICC/CV) were established for the 1080 Quantum throws ([PAGE 10]).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week traps.

The paper anchors its definitions in Prieske et al. (2020, p. 1563): PAP is “the increase in electrically-evoked twitch force/torque following submaximal and maximal conditioning contractions,” whereas PAPE “indicate[s] the enhancement of maximal voluntary strength, power or speed following a conditioning contraction” ([PAGE 2]). This distinction traces to foundational work by Vandervoort et al. (1983) on twitch potentiation after voluntary contraction ([PAGE 11]) and the fatigue–potentiation balance model of Tillin and Bishop (2009) ([PAGE 8]). The upper-body literature the study engages includes Seitz and Haff (2016), Wilson et al. (2013), and Krzysztofik et al. (2021), whose reviews converge on an effective upper-body conditioning intensity of approximately 60–84% 1RM, with optimal recovery often around 7–8 minutes (Bevan et al., 2009; Ferreira et al., 2012; Kilduff et al., 2007; Vrcić et al., 2018) ([PAGE 2], [PAGE 8]). The study deliberately probes the boundaries of this window by contrasting 90% 1RM (high tension, motor-unit recruitment) against 5% 1RM ballistic (high velocity), rather than re-testing moderate loads ([PAGE 2]).

Terminological lineage follows Cormier et al. (2022), who define complex training as an umbrella of contrast, ascending, descending, and French Contrast Methods ([PAGE 1]); the present study avoids the contrast/complex ambiguity by testing discrete CAs rather than exercise sequencing. Mechanistic context is supplied by Tsoukos et al. (2019), who found bench-press-throw velocity enhanced between the 4th and 12th minute only after a 60% 1RM set terminated at 10% velocity loss, and Tsoukos et al. (2021), who showed potentiation across a broad 4th–12th-minute window with heavier 80% 1RM loads ([PAGE 8]). The authors situate their null BMT result against the possibility that a standardized warm-up already elevates neuromuscular readiness, echoing Rappelt et al. (2024), who found PAPE protocols did not increase jumping beyond warm-up effects ([PAGE 9]).

Multi-week traps. Three longitudinal vulnerabilities threaten external validity if this protocol is embedded in a weekly training cycle. First, 1RM drift: loads are prescribed as percentages of a single familiarization-session 1RM ([PAGE 2], [PAGE 3]). Over multiple weeks, training adaptation or fatigue can shift 1RM by more than the prescription tolerance; without re-testing or velocity-based load individualization, the nominal 90% or 5% dose becomes mis-calibrated, violating the intensity assumption. Second, washout and accumulation: sessions are separated by 72 h–7 days ([PAGE 2]). If an athlete trains other upper-body volume in the interim, systemic fatigue may not dissipate, converting the crossover into a partially confounded repeated-measures design; period effects were not detected in this study ([PAGE 6]), but the carryover analysis was underpowered (6–11 per cell) ([PAGE 6]). Third, learning and biological noise: only one familiarization session was used ([PAGE 10]), and nutritional intake, pre-session fatigue, sleep, and daily recovery were not controlled ([PAGE 10]); across a multi-week mesocycle these extraneous sources can swamp the small acute effects observed (≈3.9% PPO, ≈2.7% PV). Fourth, sex restriction: only males were tested, and sex differences in the load–power relationship are documented (Thomas et al., 2007) ([PAGE 10]), so the lineage does not generalize to female athletes without replication. Fifth, relative-strength threshold: mean relative strength was 1.17 ± 0.15 kg/kg, below the ≥1.5 kg/kg benchmark associated with strong post-contrast power responses (r = 0.87; Smilios et al., 2017) ([PAGE 9]); athletes below this threshold may fail to overcome HLBP fatigue within 5 min, a constraint that persists week-to-week unless relative strength is increased.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and the clock.

Model the coach’s acute decision problem as choosing a conditioning intensity u(τ) at time τ before a performance target at t = 0, where athlete output is P(t) = f[potentiation(u, τ), fatigue(u, τ), baseline_readiness]. The net voluntary outcome at any time is determined by the balance between muscular fatigue and neuromuscular potentiation (Tillin and Bishop, 2009) ([PAGE 8]).

Crisis habit regression. Under competitive pressure—when a coach feels the athlete must be “primed” immediately—the habitual regression is to select a high-threshold, high-load CA because subjectively “heavy” work feels more potent. In this study, that habit corresponds to HLBP at 90% 1RM. The data show this regression backfires at τ = 5 min: HLBP produced a reliable decrement in PPO (−67 W, dz = −0.61) and PV (−0.071 m·s⁻¹, dz = −0.74), indicating the recovery interval was insufficient to overcome fatigue ([PAGE 1], [PAGE 7]). A coach operating under crisis habit regression would observe the drop and misattribute it to “insufficient activation,” potentially escalating load or volume in subsequent sessions rather than reducing intensity or extending rest.

Counter-trap. The opposite error is the counter-trap: because BMT appeared superior to HLBP in the direct contrast at 5 min (ψ_PV = −0.086 m·s⁻¹ favoring BMT; Holm p = 0.011), a coach might overcorrect and adopt low-load ballistic work as a standalone potentiation strategy. This is a trap because BMT produced no change from its own baseline and no difference from the active control ([PAGE 1], [PAGE 7]). The contrast significance is formal rather than substantive; it arose from the HLBP decline, not from a BMT gain ([PAGE 1], [PAGE 8]). Adopting BMT expecting potentiation would be an intervention with a null absolute effect, mistaking relative superiority for efficacy.

The clock. Time is the hard decision variable. PAPE is theorized to peak between 5 and 10 minutes post-intervention ([PAGE 8]), but the study measured only 5 and 10 min. At 5 min, HLBP is fatiguing and BMT is null; at 10 min, HLBP shows only partial recovery in PV (+0.036 m·s⁻¹ from 5 to 10 min; p = 0.022, dz = 0.55) without a potentiation overshoot ([PAGE 7]). The authors note two clock-related confounds: the 5-min post-test itself may be an additional fatiguing stimulus blunting the 10-min readout, and the standardized warm-up may already have induced a potentiation state that leaves little room for added CA benefit ([PAGE 8], [PAGE 10]). If competition demands peak output exactly at T+5, the rational policy is to avoid HLBP entirely and not expect BMT to add anything beyond warm-up. If the clock permits T+7 or T+8, the data do not identify an optimal window because no delayed spike emerged; the null at 10 min is bounded by the study’s power (dz < 0.70 undetectable under Holm) ([PAGE 3], [PAGE 10]).

Recursive theory of mind layer: the coach models the athlete’s physiological response; the athlete models the coach’s expectations and may alter effort based on perceived “activation.” Under crisis, both parties regress to the salient heuristic “heavier is better.” The counter-trap exploits the same salience in reverse (“lighter is safer/faster”). Both fail because the actual estimand—the difference in change between conditions—is dominated by fatigue in HLBP and absence of stimulus in BMT, and the clock (5 vs. 10 min) truncates the observation window before any true potentiation could plausibly manifest.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Veto adjudication across physical, biomechanical, and environmental layers.

Veto rule: a practical claim survives only if it passes all layers; failure in any layer vetoes the claim for the context in which that layer applies.

Physical layer — apparatus. The test and 1RM were performed on a 1080 Quantum motorized cable system (“Non-Flying Weight,” “No Pulley,” 6 kg baseline cable resistance, retraction up to 6 m·s⁻¹), which participants described as feeling “significantly more difficult” than free-weight bench pressing ([PAGE 4], [PAGE 10]). The authors explicitly state that transfer of throw power from this motorized system to free-weight or barbell-based ballistic pressing is uncertain ([PAGE 10]). Veto: any claim that HLBP or BMT effects transfer to traditional free-weight bench-press power in competition is vetoed until reliability (ICC/CV) and transfer validity are established; no intraclass correlation or coefficient of variation was reported ([PAGE 10]).

Biomechanical layer — dose and movement standards. HLBP used 90% 1RM for 2 sets of 2–3 reps at 1 RIR, eccentric 1–2 s; BMT used 5% 1RM medicine balls (~5.1 kg) for 2 sets of 4 throws, with a more pronated/internally rotated wrist–forearm position than the bench press ([PAGE 4]). The test throw was at 40% 1RM, within the literature’s 30–70% upper-body peak-power range and near the 30% or 40% optima for ballistic bench press throws ([PAGE 9]), so the test load is not the source of the null effects ([PAGE 9]). However, a medicine-ball throw at 5% of bench-press 1RM is not mechanically equivalent to bench-press-type conditioning expressed as % of the same movement’s 1RM; the 60–84% window cannot be transferred across modalities without direct evidence ([PAGE 9]). Veto: claims that BMT at 5% 1RM is a validated potentiation stimulus are vetoed by mechanical non-equivalence and null vs. baseline/CC; claims that 90% 1RM is an optimal upper-body PAPE load are vetoed by the observed fatigue decrement and by literature placing the effective window lower ([PAGE 8], [PAGE 9]).

Environmental / weather layer. The study is an indoor laboratory protocol; no ambient temperature, humidity, barometric pressure, or weather variables were measured or controlled ([PAGE 1]–[PAGE 12]). Extraneous biological variables were also uncontrolled: nutritional intake, pre-session fatigue, sleep, and daily recovery ([PAGE 10]). Core temperature was maintained via a standardized cycle-ergometer warm-up (5 min at 60 W) plus specific bench-press warm-up sets ([PAGE 2], [PAGE 4]), but this does not address field-environment variance. Veto: generalization to outdoor competition, travel across time zones, or training in hot/cold environments is vetoed because the environmental layer was not sampled; the results are ecology-specific to a controlled indoor lab in trained males. The sex limitation ([PAGE 10]) compounds this: female athletes and varied environmental conditions lie outside the inference boundary.

Adjudicated conclusion. The only claim that survives all layers is narrow and negative: under this exact indoor protocol (1080 Quantum, trained males, 5-min recovery), two sets at 90% 1RM HLBP impaired acute upper-body push power relative to 5% BMT, and neither CA enhanced power relative to baseline or active control at 5 or 10 min ([PAGE 1]). All broader claims—transfer to free weights, efficacy of BMT, optimal 5-min PAPE timing, and extension to other sexes or environments—are vetoed.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios (RLVR: reward-linked verifiable rejection conditions) with predictions.

Scenario 1 — Baseline neuromuscular-state confound.
Verifiable condition: Collect a pre-CA neuromuscular readiness index (e.g., superimposed-burst twitch interpolation, EMG amplitude, or force–velocity profiling) immediately before each CA and test baseline equivalence across HLBP, BMT, and CC using equivalence testing (TOST) rather than null-hypothesis absence of difference. Veto trigger: If baseline readiness differs significantly across conditions, the difference-in-change contrast ψ(t) is confounded by regression-to-the-mean and initial-state imbalance; the causal attribution of the HLBP decrement to the CA is vetoed. Prediction: Given the authors’ admission that no baseline neuromuscular index was collected ([PAGE 9], [PAGE 10]), a future study measuring this index will likely reveal imbalance sufficient to veto a causal reading of the HLBP vs. BMT contrast at 5 min.

Scenario 2 — Post-test fatigue contamination of the 10-minute readout.
Verifiable condition: Implement a split-design in which each participant completes only one post-CA time point (either 5 min or 10 min), counterbalanced across participants, removing the 5-min test as a potential additional fatiguing stimulus before the 10-min assessment. The authors themselves note the 5-min post-test may have blunted the 10-min readout ([PAGE 10]). Veto trigger: If the single-time-point 10-min condition shows HLBP recovery above baseline or a BMT enhancement that was absent in the original repeated 5-then-10-min design, the conclusion that “no enhancement existed at 10 min” is vetoed by test-order contamination. Prediction: Removing the 5-min test will reveal a delayed PAPE overshoot for HLBP or BMT in the 7–12 min window hypothesized by Blazevich and Babault (2019) and Fischer and Paternoster (2024) ([PAGE 8]).

Scenario 3 — Active-control non-neutrality.
Verifiable condition: Add a fully passive control condition (seated rest matched for total session duration) alongside the existing one-arm dumbbell row CC, and re-test BMT against passive control at 5 and 10 min. The authors acknowledge the active CC was neither work- nor time-matched and that antagonist contractions could influence agonist output via reciprocal inhibition ([PAGE 4], [PAGE 10]); CC itself showed a −20.6 W APO decline at 5 min and the largest 10-min PPO change (+40.8 W) ([PAGE 10]). Veto trigger: (a) If BMT differs from passive control but not from the active CC, the original conclusion that “BMT did not differ from CC” is vetoed because the active control masked a small true effect; or (b) if HLBP still decrements against passive control while BMT remains null, the fatigue interpretation is strengthened and the “moving reference” explanation is vetoed. Prediction: BMT will remain indistinguishable from passive control, confirming the stimulus was below threshold rather than masked by an active reference.
</RLVR_COUNTERFACTUAL_VETOES>