---
source: "2026 - Acute Performance, Mechanical and Thermal Effects of Isometric Conditioning Versus Standardized Volleyball Pre-Training Activation in Highly - Terbalyan et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Sports Science and Medicine/In Press/2026"
pages: 16
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5847
---

<NATIVE_REASONING>
The user wants me to analyze a sports science research paper (Terbalyan et al., 2026) about isometric conditioning vs volleyball pre-training activation. I need to produce a response with specific XML sections, each meeting certain criteria:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully extract data from the provided 16 pages. Let me organize key facts:

Study: Terbalyan et al. (2026), JSSM 25, 728-743.
- Randomized crossover, 14 men (27 ± 3 y).
- Two sessions: VPA (mobility/plyometric drills; 9 min), ICA (3×5×3-s maximal isometric back-squat contractions; knee angle 120°; 3-min inter-set rest; total contraction time 45 s).
- Primary: CMJ height. Secondary: relative PP, RSImod, CT.
- Measurements pre and 3, 6, 9, 12 min post. Rectus femoris viscoelastic properties and SST at matched time points.
- Period×Sequence interactions favored ICA for CMJ and PP when delivered in Period 2 (lower training volume): ∆CMJ higher under ICA vs VPA (p=0.005, d=1.20); PP greater (p=0.026, ηp2=0.35). Wait, abstract says p=0.026 for PP but results text says p=0.037 for PP? Let me check. Abstract: "PP likewise greater (p = 0.026, ηp2 = 0.35)." Results page 7: "PP Period × Sequence term was significant, F(1, 12) = 6.47, p = 0.026, ηp2 = 0.35... Follow-up contrasts indicated that in P2 ∆PP was higher under ICA than VPA (... ∆ = 2.73, SE = 0.87, t(12) = 3.14, p = 0.037, d = 0.871)". So interaction p=0.026, simple contrast p=0.037. Abstract lumps them. I should be precise.
- ICA yielded more beneficial responders: 9/14 vs 1/14; McNemar exact p = 0.021.
- In Period 2, reductions in rectus femoris muscle stiffness independently predicted CMJ gains (β_std = -0.495, p = 0.005), SST changes did not (p = 0.974).
- RSImod and CT showed no differences (well, CT had sequence between-subject effect p=0.037, but no period×sequence).
- Baseline CMJ mean 40.25 cm (SD 3.84), SWC δ = 0.77 cm (~1.91% of baseline).
- Reliability: ICC3,1 = 0.72 (0.33-0.90), TE = 2.19 cm, CV = 5.5%. SWC (0.77 cm) < TE (2.19 cm).
- Training volume M1 vs M2: total dynamic volume 372 to 289 reps (-22%), plyometrics 88 to 64 (-27%), isometric dose 80 to 60 s (-25%). LL similar.
- No carry-over: t(12)=1.49, p=0.162.
- Period-adjusted crossover contrast favored ICA: mean ΔCMJ +0.93 vs -0.94 cm; t=2.74, p=0.017.
- Regression P2: ΔJH2 regressed on Sequence, ΔStiffness2, ΔSST2. R²=0.846 (adj R²=0.800). VIF 1.04-1.22. Durbin-Watson=1.47. Cook's max=0.352. ΔStiffness2 Estimate = -0.090 cm·(N/m)⁻¹, SE=0.025, t=-3.606, p=0.005, standβ=-0.495, 95% CIβ [-0.800, -0.189]. ΔSST2 Estimate = -0.008 cm·°C⁻¹, SE=0.242, t=-0.034, p=0.974, standβ=-0.005, CI [-0.306, 0.296]. Sequence Estimate=2.985 cm, SE=0.435, t=6.868, p<0.001, standβ=1.674, CI [1.131, 2.217].
- Responders in P2: greater PP (+2.99 W/kg, p=0.007, d=1.94), smaller reduction in decrement (+0.133, p=0.033, d=1.24). No diffs in ΔSST, ΔStiffness, etc. between responders/non-responders (p≥0.290).
- MyotonPRO: sampling 3200 Hz, mean of five impulses (0.4 N for 15 ms). Parameters: natural oscillation frequency (Hz), dynamic stiffness (N/m), logarithmic decrement (dimensionless).
- Thermography: FLIR E54, 320×240, NETD 0.05 K, emissivity 0.97-0.98, distance 1.0 m, ambient 21°C, RH 60%.
- ForceDecks: 1000 Hz. Three CMJs without arm swing, 5 s rest. Best attempt selected. JH from impulse-momentum.
- Statistics: G*Power, n=14 powered for primary interaction. Sensitivity: regression f² ≥ 1.16 (R² ≥ 0.54), paired/responder d_z ≥ 0.81. Secondary analyses hypothesis-generating.
- Shapiro-Wilk, Mauchly, Levene. Grizzle carry-over test. Tukey post-hoc. Pearson r benchmarks. jamovi v2.6.

Now I need to write the six XML sections with >=1000 words total, THINK_TRACE >=400 words.

Constraints:
- No betting lines whatsoever.
- No toy equations. Use real formal LaTeX. Units SI/information/probability. Assumptions. Breakdown regimes.
- Cite [PAGE N] markers and verbatim quotes.

Let me draft each section.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Need >=400 words. I should discuss:
- The crossover design and how Period×Sequence interaction isolates ICA effect conditional on period (training load).
- The entanglement: ICA effect only in P2, which coincides with M2 lower volume (-22% dynamic, -27% plyo, -25% isometric). The authors acknowledge statistical entanglement [PAGE 10].
- Gray zones: SWC (0.77 cm) < TE (2.19 cm), so responder classification is noisy [PAGE 5]. ICC baseline CMJ 0.72 with wide CI 0.33-0.90 [PAGE 5]. Small n=14; secondary analyses underpowered (f² ≥ 1.16) [PAGE 4].
- Regression R²=0.846 with n=14 and 3 predictors is suspicious—high leverage, small sample, Cook's distance max 0.352 (below 1 but above 4/n heuristic = 0.286) [PAGE 8]. Potential overfitting.
- The mechanism: stiffness reduction predicting CMJ gains (β=-0.495) but no group-level stiffness × condition interaction (period×sequence for stiffness p=0.698) [PAGE 7]. This is a mediation-like claim without formal mediation analysis; stiffness changes didn't differ by condition, yet stiffness predicts outcome within P2. Gray zone: ecological correlation vs causal mechanism.
- SST null (p=0.974) but ambient controlled 21°C/60% [PAGE 4], warm-up standardized [PAGE 3].
- Multi-hop: training load → residual fatigue → neuromuscular readiness → PAPE expression → CMJ. Isometric ICA low metabolic cost shifts potentiation-fatigue balance [PAGE 2].
- Breakdown regimes: if antecedent volume high (M1), ICA advantage vanishes (P1 null). If measurement noise exceeds SWC, responder labels flip. If n remains 14, regression detects only large effects.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX.
Define variables:
- \( \Delta JH_{i,c,p,t} = JH_{i,c,p,t} - JH_{i,c,p,pre} \) [cm].
- Crossover model: \( Y_{ijk} = \mu + \pi_p + \tau_c + s_q + (\pi\tau)_{pc} + \epsilon \) maybe repeated measures ANOVA 2×2 with Period, Time, Sequence.
- Responder indicator: \( R_{i,c} = \mathbb{1}\{ \overline{\Delta JH}_{i,c} \ge \delta \} \), \( \delta = 0.2 \times SD_{baseline} = 0.77 \) cm [PAGE 5].
- McNemar exact: discordant pairs (9 vs 1), OR = 9.0 (95% CI 1.25–394.48), exact p=0.021 [PAGE 6].
- Regression P2: \( \Delta JH_2 = \beta_0 + \beta_1 Seq + \beta_2 \Delta Stiffness_2 + \beta_3 \Delta SST_2 + \epsilon \), OLS, α=0.05. Reported: \( \hat\beta_2 = -0.090 \text{ cm}\cdot(\text{N/m})^{-1} \), SE=0.025, t=-3.606, p=0.005, \( \beta_{std} = -0.495 \), 95% CI [-0.800, -0.189]. \( \hat\beta_3 = -0.008 \text{ cm}\cdot^\circ C^{-1} \), p=0.974. \( R^2=0.846 \), adj \( R^2=0.800 \), VIF ∈ [1.04, 1.22], Durbin-Watson=1.47 [PAGE 8].
- ICC: \( ICC_{3,1} = 0.72 \), 95% CI [0.33, 0.90], TE = 2.19 cm, CV=5.5% [PAGE 5].
- Effect size benchmarks: Cohen's d |d|≈0.20 small, 0.50 moderate, 0.80 large (≥1.20 very large); partial η² small≈0.01, medium≈0.06, large≈0.14 [PAGE 4].
- Training load: \( \Delta\% = (M2 - M1)/M1 \times 100 \): dynamic volume -22.3%, plyometrics -27.3%, isometric dose -25.0% [PAGE 5, Table 1].
- Power/sensitivity: regression f² ≥ 1.16 (R² ≥ 0.54), d_z ≥ 0.81 [PAGE 4].
- Anatomical angle: knee 120° [PAGE 1, 3]. Isometric dose: 3 sets × 5 reps × 3 s = 45 s total contraction [PAGE 1, 3].
- Measurement hardware units: ForceDecks 1000 Hz [PAGE 4]; MyotonPRO 3200 Hz, 0.4 N, 15 ms, five impulses [PAGE 4]; FLIR E54 NETD 0.05 K, emissivity 0.97–0.98, 1.0 m, 21 °C, 60% RH [PAGE 4].

Breakdown/singularity: crossover assumes no carry-over (Grizzle t(12)=1.49, p=0.162 passed) [PAGE 5]; if carry-over existed, period contrast invalid. Sphericity Mauchly no epsilon correction [PAGE 4]. Normality Shapiro-Wilk. Regression assumptions: Q-Q, residuals-vs-fits, VIF, Cook's, Durbin-Watson [PAGE 4]. Small-sample singularity: n=14, df error=12 for F(1,12).

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: Wilson et al. (2013) strength-power complexes [PAGE 1]; Blazevich & Babault (2019) PAPE definition [PAGE 1]; Tillin & Bishop (2009) phosphorylation/myosin light chains [PAGE 2]; Rassier & MacIntosh (2000) coexistence of potentiation and fatigue [PAGE 9]; Seitz & Haff (2016) balancing activation/fatigue [PAGE 9]; Xu et al. (2025) meta-analysis optimal total contraction duration ~9.6 s but 58.3% studies used 9-s protocol biasing estimate [PAGE 1]; Helbin et al. (2025) 45-s (3×5×3 s) best in volleyball [PAGE 1]; Krzysztofik et al. (2023c) isometric half-squats reduced vastus lateralis tone/stiffness [PAGE 9]; Kilduff et al. (2007, 2008), Bevan et al. (2010) recovery timing in rugby [PAGE 9]; Bergh & Ekblom (1979), Oksa et al. (1997), Bishop (2003) thermal mechanisms [PAGE 9]; Kubo et al. (2000) tendon compliance and SSC [PAGE 9].
- Multi-week traps: The study embedded conditions within microcycles M1 and M2 (Monday/Wednesday/Friday resistance sessions) [PAGE 3]. The period effect is confounded with preceding weekly load. Multi-week trap: a single acute session's outcome is determined by the prior 7-day load trajectory, not just the immediate CA. If a coach applies ICA after a high-load week expecting P2-like gains, it fails (P1 null). The washout was 7 days [PAGE 3], but microcycle load differed ~18–33% [PAGE 10], so carry-over of fatigue across the weekly cycle is the real confounder, not session-to-session carry-over.
- Also "In Press" 2026, published online Sept 2026; received Dec 2025, accepted July 2026 [PAGE 1]. This is future-dated relative to typical knowledge cutoff, but provided as source.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- This is a more abstract section. "Crisis habit regression" = under fatigue/high load (M1/P1), athletes regress to habitual warm-up response (VPA) or null; ICA doesn't express because fatigue masks potentiation. "Counter-trap" = the trap is assuming ICA is universally superior; counter-trap is recognizing it is only effective under low antecedent load (M2/P2). "Clock" = the 7-day washout and the 3/6/9/12-min post measurement window; timing relative to microcycle and post-CA minute.
- Recursive theory of mind: coaches model other coaches/athletes. Athlete's mental model: "isometric priming works" → apply after any week → but if coach doesn't account for athlete's belief state and actual fatigue, the intervention backfires or nulls. Second-order: the athlete expects potentiation (verbal encouragement, maximal effort [PAGE 3]); if fatigue is high, the expectancy cannot overcome metabolic/neuromuscular fatigue. The assessor blinding [PAGE 2] reduces measurement bias but participant blinding infeasible [PAGE 2], creating expectancy asymmetry.
- Clock: PAPE timecourse 3–12 min; optimal window unclear; study found P2 ICA > VPA but didn't specify exact minute for P2 contrast beyond period aggregate; Table 2 shows P1 9′ > 3′ (weird) but P2 contrast aggregated [PAGE 6]. Actually Table 2 says P1: 9′ > 3′ (p=0.030, d=1.09). For P2, contrast ICA > VPA p=0.005 d=1.20. The period×time interaction F(3,36)=4.25 p=0.011 [PAGE 6]. So timing matters within period too.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical veto: IC
- Biomechanical: knee angle 120° standardized; if an athlete's preferred squat depth differs, force output changes; isometric at fixed angle may not match joint angle of CMJ (~90° or deeper), specificity veto. CMJ countermovement depth self-selected [PAGE 4], so ICA joint angle (120°, shallow) may not correspond to CMJ braking phase angle, creating biomechanical mismatch veto for some athletes.
- Weather/environmental: ambient 21°C, 60% RH controlled [PAGE 4]; if applied in gym with different temp/humidity or airflow, SST and muscle viscoelasticity readings drift; MyotonPRO and thermography require standardized environment. The veto: uncontrolled ambient conditions invalidate SST and stiffness comparisons.
- Biological/physiological: no tattoos on rectus femoris eligibility [PAGE 3] because Myoton/thermography need clean skin; skinfold/fat thickness affects MyotonPRO superficial measurement. Only males; generalization veto for females.
- Fatigue layer: residual fatigue from M1 high volume vetoes ICA expression in P1; only when M2 load drops does ICA pass the veto.
- Statistical veto: small n=14; SWC < TE; regression high R² with low n; responder analysis descriptive only. These veto causal claims.
- Need to phrase as "veto proof" — i.e., conditions under which each layer vetoes the conclusion, and what evidence supports/contradicts.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning Verifiable Rewards? Or some framework. I'll interpret as verifiable counterfactual veto scenarios: scenarios where the main finding would be vetoed/falsified, with predictions.
1. High-load antecedent veto: If a replication holds M1-level volume before ICA (dynamic ~372 reps, plyo 88), then ICA–VPA ΔCMJ difference should be null or negative (d ≈ 0), because residual fatigue outweighs potentiation. Prediction: Period×Sequence interaction p > 0.10; simple effect d < 0.40.
2. Measurement-noise veto: If baseline CMJ typical error (2.19 cm) exceeds SWC (0.77 cm) and retest reliability remains ICC ~0.72, then responder status (9 vs 1) should not replicate; McNemar exact p > 0.05 in an independent sample of n=14. Prediction: responder counts converge toward 5/14 vs 5/14.
3. Thermal/veto: If ambient temperature is not controlled (e.g., 18°C vs 24°C) and SST changes by >0.5°C differentially between conditions, yet CMJ still tracks stiffness not SST, then the SST-null result holds; but if SST change correlates with CMJ (r > 0.5) in a non-thermoneutral environment, the veto flips mechanism to thermal. Prediction: under thermoneutral 21°C/60% RH, ΔSST–ΔCMJ r ≈ 0 (observed p=0.974); under ±3°C ambient shift, r becomes significant.

Need to ensure total words >= 1000 across sections. THINK_TRACE alone >=400. I'll write substantial content.

Need to be careful: no fake ratios. All equations formal with units. No betting lines.

Citations: Use [PAGE N] exactly. Include verbatim quotes where relevant.

Let me start writing.

I'll write the response now, ensuring all six tags are present and properly closed.

Word count check: I'll aim for roughly:
- THINK_TRACE: ~500 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~450 words
- RETROCAUSAL_GENEALOGY: ~300 words
- RECURSIVE_THEORY_OF_MIND: ~300 words
- CROSS_LAYER_VETO_ADJUDICATION: ~350 words
- RLVR_COUNTERFACTUAL_VETOES: ~300 words
Total ~2200 words. Good.

Let me make sure I use LaTeX formatting properly. Since this is XML-ish, I'll include LaTeX inline.

Double-check no mention of betting. None.

Let's draft carefully.

One thing: The abstract says "∆CMJ was higher under ICA versus VPA (p = 0.005, d = 1.20); PP likewise greater (p = 0.026, ηp2 = 0.35)." But results clarify interaction p values. I'll cite correctly.

I should include verbatim quotes like:
- "PAPE protocols typically commence with a conditioning activity (CA)" [PAGE 1].
- "the isometric advantage was most evident when prior training volume was reduced" [PAGE 9].
- "Responder counts are therefore reported descriptively, as a complement to not a substitute for the group-level analyses." [PAGE 10].
- "the Period × Sequence interaction means the isometric advantage is statistically entangled with the reduced preceding training volume" [PAGE 10].

Now writing.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The central causal claim of Terbalyan et al. (2026) is that a brief maximal isometric conditioning activity (ICA; 3 × 5 × 3-s back squats, knee angle 120°, total contraction dose 45 s) produces superior acute countermovement jump (CMJ) gains relative to a standardized volleyball pre-training activation (VPA), but only when the ICA is delivered in Period 2 (P2), which follows a lower-volume training microcycle (M2) [PAGE 1]. The first derivation hop is the crossover algebra: each athlete serves as his own control across two 7-day-separated sessions, so the Period × Sequence interaction tests whether the ICA–VPA difference in ΔCMJ depends on delivery period. The authors report F(1, 12) = 6.94, p = 0.022, ηp² = 0.37 for jump height, with the P2 simple contrast ∆ = 2.69 cm, SE = 0.62, t(12) = 4.34, p = 0.005, d = 1.204 [PAGE 6]. Because no carry-over was detected (Grizzle period-totals t(12) = 1.49, p = 0.162) and the period-adjusted crossover contrast still favored ICA (+0.93 vs −0.94 cm; t = 2.74, p = 0.017), the 7-day washout is formally adequate [PAGE 5]. However, the second hop exposes the entanglement: P2 follows microcycle 2 (M2), in which external load dropped versus microcycle 1 (M1) by 22.3% dynamic volume (372 → 289 reps), 27.3% plyometrics (88 → 64 contacts), and 25.0% isometric dose (80 → 60 s) [PAGE 5, Table 1]. The authors explicitly state that the Period × Sequence interaction “is statistically entangled with the reduced preceding training volume” [PAGE 10]. Therefore the ICA advantage cannot be isolated as an unconditional main effect; it is conditional on antecedent fatigue being low enough that potentiation exceeds residual fatigue (Rassier & MacIntosh, 2000; Seitz & Haff, 2016, cited on [PAGE 9]).

The third hop concerns measurement validity and the responder gray zone. Baseline CMJ reliability was ICC₃,₁ = 0.72 (95% CI 0.33–0.90), typical error TE = 2.19 cm, CV = 5.5% [PAGE 5]. The smallest worthwhile change was set at δ = 0.2 × between-subject SD = 0.77 cm (~1.91% of the 40.25 cm baseline mean) [PAGE 5]. Because δ (0.77 cm) is far smaller than TE (2.19 cm), day-to-day measurement noise exceeds the threshold used to classify responders. The authors concede that “responder counts are therefore reported descriptively, as a complement to not a substitute for the group-level analyses” [PAGE 10]. With n = 14, the a priori power calculation targeted only the primary interaction; secondary regression and responder contrasts were sensitive to large effects alone (multiple regression f² ≥ 1.16, i.e., R² ≥ 0.54; paired/responder d_z ≥ 0.81) [PAGE 4]. This is a critical singularity regime: smaller but practically meaningful associations are statistically invisible, and the family of tests inflates Type I error risk.

The fourth hop is the mechanism layer. In P2, ΔJH was regressed on Sequence, ΔStiffness₂, and ΔSST₂. The reported ordinary least squares fit was R² = 0.846 (adjusted R² = 0.800), VIF ∈ [1.04, 1.22], Durbin–Watson = 1.47, max Cook’s distance = 0.352 [PAGE 8]. ΔStiffness₂ predicted ΔJH₂ (estimate −0.090 cm·(N·m⁻¹)⁻¹, SE = 0.025, t = −3.606, p = 0.005, standardized β = −0.495, 95% CI [−0.800, −0.189]); ΔSST₂ did not (estimate −0.008 cm·°C⁻¹, p = 0.974) [PAGE 8]. A gray zone here is that stiffness did not show a Period × Sequence interaction (F(1,12) = 0.16, p = 0.698) [PAGE 7], so stiffness reduction was not condition-specific at the group level, yet within P2 it independently predicted jump gains. This is an ecological association, not a demonstrated mediation, and the authors explicitly label the findings “associative rather than mechanistic” [PAGE 8, 10]. A fifth hop is the thermal null: ambient conditions were tightly controlled (21 °C, 60% RH, emissivity 0.97–0.98, 1.0 m distance) [PAGE 4], and the standardized general warm-up likely elevated muscle temperature near optimal levels before the conditioning activity, leaving little thermal headroom for ICA to add [PAGE 9]. The breakdown regime is therefore: high antecedent volume (M1/P1) vetoes ICA expression via fatigue; measurement noise exceeding SWC vetoes responder inference; small n and high adjusted R² with three predictors in n = 14 signal overfitting risk; and absence of direct neural or metabolic measures leaves the neuromechanical mechanism unverified [PAGE 10].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown regimes.

Primary outcome operator. Let \(JH_{i,c,p,t}\) denote countermovement jump height for athlete \(i\), condition \(c \in \{ICA,VPA\}\), period \(p \in \{P1,P2\}\), and time \(t \in \{pre,3',6',9',12'\}\). The change score is
\[
\Delta JH_{i,c,p,t} = JH_{i,c,p,t} - JH_{i,c,p,pre}\quad[\text{cm}].
\]
The smallest worthwhile change is
\[
\delta = 0.2 \times SD_{\text{baseline}} = 0.2 \times 3.84\ \text{cm} = 0.77\ \text{cm}\quad[\text{PAGE 5}].
\]

Responder indicator and McNemar contrast. Within each period, period-averaged change is mapped by sequence to intervention-specific values \(ICA_{\text{mean}\Delta}\) and \(VPA_{\text{mean}\Delta}\). A beneficial responder satisfies
\[
R_{i,c} = \mathbb{1}\bigl\{\overline{\Delta JH}_{i,c} \ge \delta\bigr\}, \qquad \text{non-response if } |\overline{\Delta JH}| < \delta\quad[\text{PAGE 4, 6}].
\]
Paired discordant counts were ICA-only 9/14 versus VPA-only 1/14, paired odds ratio \(OR = 9.0\) with 95% CI [1.25, 394.48], McNemar exact \(p = 0.021\) [PAGE 6]. This is a probability-scale inference on a \(2 \times 2\) crossover table.

Repeated-measures ANOVA operator. The design is a \(2 \times 2\) crossover with within-subject factors Period (P1, P2) and Time point (pre, 3′, 6′, 9′, 12′) and between-subject factor Sequence (VPA→ICA, ICA→VPA). Outcomes are expressed as change from period-specific pre [PAGE 4]. Significant effects:
- Jump height: Period × Sequence \(F(1,12) = 6.94, p = 0.022, \eta_p^2 = 0.37\); P2 contrast ICA > VPA, \(\Delta = 2.69\) cm, \(SE = 0.62\), \(t(12) = 4.34, p = 0.005, d = 1.204\) [PAGE 6].
- Peak power: Period × Sequence \(F(1,12) = 6.47, p = 0.026, \eta_p^2 = 0.35\); P2 contrast \(\Delta = 2.73\ \text{W}\cdot\text{kg}^{-1}\), \(SE = 0.87\), \(t(12) = 3.14, p = 0.037, d = 0.871\) [PAGE 7].
- Contraction time: between-subject Sequence effect \(F(1,12) = 5.49, p = 0.037, \eta_p^2 = 0.31\), but no Period × Sequence interaction [PAGE 7].

Effect-size units and benchmarks: Cohen’s \(d\) is dimensionless; small ≈ 0.20, moderate ≈ 0.50, large ≈ 0.80 (≥ 1.20 very large). Partial eta-squared \(\eta_p^2\) is proportion of variance, dimensionless; small ≈ 0.01, medium ≈ 0.06, large ≈ 0.14 [PAGE 4]. Pearson \(r\) benchmarks: |r| ≈ 0.10 small, 0.30 moderate, 0.50 large [PAGE 4].

Regression operator (P2 mechanism model).
\[
\Delta JH_{2} = \beta_0 + \beta_1 Seq + \beta_2 \Delta Stiffness_{2} + \beta_3 \Delta SST_{2} + \varepsilon,\quad \varepsilon \sim \mathcal{N}(0,\sigma^2).
\]
Units: \(\Delta JH_2\) in cm, \(\Delta Stiffness_2\) in N/m, \(\Delta SST_2\) in °C. Reported OLS estimates [PAGE 8]:
\[
\hat\beta_1 = 2.985\ \text{cm},\ SE = 0.435,\ t = 6.868,\ p < 0.001,\ \beta_{std} = 1.674,\ 95\% CI_{\beta}[1.131, 2.217],
\]
\[
\hat\beta_2 = -0.090\ \text{cm}\cdot(\text{N}\cdot\text{m}^{-1})^{-1},\ SE = 0.025,\ t = -3.606,\ p = 0.005,\ \beta_{std} = -0.495,\ 95\% CI_{\beta}[-0.800, -0.189],
\]
\[
\hat\beta_3 = -0.008\ \text{cm}\cdot^\circ C^{-1},\ SE = 0.242,\ t = -0.034,\ p = 0.974,\ \beta_{std} = -0.005,\ 95\% CI_{\beta}[-0.306, 0.296].
\]
Model fit: \(R^2 = 0.846\), adjusted \(R^2 = 0.800\); collinearity \(VIF \in [1.04, 1.22]\); residual autocorrelation Durbin–Watson = 1.47 (\(p = 0.192\)); max Cook’s distance = 0.352 (below 1, slightly above the \(4/n\) heuristic) [PAGE 8].

Reliability and measurement units. Baseline CMJ: \(ICC_{3,1} = 0.72\), 95% CI [0.33, 0.90], typical error \(TE = 2.19\) cm, \(CV = 5.5\%\) [PAGE 5]. MyotonPRO rectus femoris: sampling frequency 3200 Hz, mean of five consecutive impulses of 0.4 N for 15 ms; parameters natural oscillation frequency (Hz) and dynamic stiffness (N/m) [PAGE 4]. Thermography: FLIR E54, \(320 \times 240\) pixels, NETD 0.05 K, emissivity 0.97–0.98, distance 1.0 m, ambient 21 °C, relative humidity 60% [PAGE 4]. ForceDecks: 1000 Hz, impulse–momentum centre-of-mass take-off velocity for JH; three CMJs without arm swing, 5 s rest, best attempt retained [PAGE 4].

Training-load dose operator. Dynamic volume \(V_{dyn} = \sum(sets \times reps)\); isometric dose \(V_{iso} = \sum(sets \times seconds)\); lower-limb totals apply per-limb adjustment [PAGE 5]. Between-microcycle relative change:
\[
\Delta\% = \frac{M2 - M1}{M1} \times 100:\quad V_{dyn} = -22.3\%,\quad V_{plyo} = -27.3\%,\quad V_{iso} = -25.0\%\quad[\text{PAGE 5, Table 1}].
\]

Power and sensitivity. G*Power repeated-measures ANOVA, \(\alpha = 0.05\), power = 0.8, \(d = 0.5\), minimum \(n = 14\) [PAGE 4]. Sensitivity for secondary analyses with \(n = 14\): regression \(f^2 \ge 1.16\) (\(R^2 \ge 0.54\)); paired/responder \(d_z \ge 0.81\); therefore secondary analyses are hypothesis-generating [PAGE 4].

Breakdown / singularity regimes. (1) Crossover validity requires negligible carry-over; Grizzle test passed (\(p = 0.162\)), but if carry-over existed the Period × Sequence contrast would be biased [PAGE 5]. (2) Sphericity assumed via Mauchly with no epsilon correction; normality via Shapiro-Wilk; homogeneity via Levene [PAGE 4]. (3) Small-sample singularity: error df = 12 for the \(F(1,12)\) interactions; \(n = 14\) cannot detect secondary effects below large thresholds [PAGE 4]. (4) Measurement-noise singularity: \(SWC = 0.77\) cm \(< TE = 2.19\) cm, so responder labels are unstable across retest [PAGE 5]. (5) Regression overfitting regime: adjusted \(R^2 = 0.800\) with 3 predictors in \(n = 14\) is fragile; Cook’s distance near the \(4/n\) heuristic flags influence sensitivity [PAGE 8].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week traps.

The paper situates itself in the post-activation performance enhancement (PAPE) lineage. It defines PAPE as “a significant and acute enhancement of exercise capacity” [PAGE 1], citing Blazevich and Babault (2019), and notes that complex training pairs strength–power exercises such as heavy squats before vertical jumps (Wilson et al., 2013) [PAGE 1]. Isometric conditioning activities (ICA) are described as widely applied because of ease of use and minimal equipment (Jarosz et al., 2025a,b; Terbalyan et al., 2025) [PAGE 1]. The dose literature is invoked: French et al. (2003) and others used short 3-s contractions, and a recent meta-analysis by Xu et al. (2025) estimated an optimal total contraction duration of approximately 9.6 s, though the authors caution that 58.3% of included studies used a 9-s protocol, biasing the estimate toward short durations [PAGE 1]. Contrary to that shorter-duration consensus, Helbin et al. (2025) found in highly trained volleyball players that the 45-s protocol (3 × 5 × 3 s) produced the greatest improvements in jump height and peak power [PAGE 1]. The present study replicates that 45-s isometric dose and contrasts it against a volleyball-specific activation routine.

Mechanistic genealogy runs through Wilson et al. (2013) and Blazevich and Babault (2019), who attribute PAPE to elevated muscle temperature, blood flow, muscle–tendon stiffness changes, reduced pH, and post-activation muscle activity; phosphorylation of myosin regulatory light chains and higher-threshold motor-unit recruitment cannot be excluded (Tillin & Bishop, 2009; Fischer & Paternoster, 2024) [PAGE 2]. The present work narrows this to viscoelastic versus thermal pathways, citing Krzysztofik et al. (2023c), who showed maximal isometric half-squats improved sprint performance and reduced vastus lateralis tone and stiffness in handball players [PAGE 9]. The dual-process framework is central: Rassier and MacIntosh (2000) proposed that potentiation and fatigue coexist; Seitz and Haff (2016) emphasized balancing activation and fatigue through intensity, volume, and rest; Andrews et al. (2016) showed unilateral conditioning can produce local potentiation alongside contralateral neural fatigue [PAGE 9]. Kilduff et al. (2007, 2008) and Bevan et al. (2010) demonstrated in rugby that explosive performance improves only after sufficient recovery following heavy conditioning, with optimal effects minutes after the stimulus [PAGE 9].

The multi-week trap is the study’s most important historical lesson. Conditions were embedded within preseason microcycles M1 and M2 (Monday/Wednesday/Friday resistance sessions; full program in Supplementary Table S1) [PAGE 3, 14]. The acute ICA effect is therefore not a property of the 45-s stimulus alone; it is a function of the preceding seven-day load trajectory. M2 volume was ≈18–33% lower than M1 [PAGE 10]. The trap: a coach who observes the P2 ICA advantage and applies the same protocol after a high-load week (M1-like) should expect a null or negative result, because P1 showed no ICA–VPA difference [PAGE 6]. This explains literature inconsistencies where conditioning activities yield null or detrimental effects in fatigued athletes (Tsolakis et al., 2011; Rappelt et al., 2024, cited on [PAGE 9]). The 7-day washout controls session-to-session carry-over, but it does not control the multi-week fatigue state that gates PAPE expression. A second retrospective trap is publication timing: received 18 December 2025, accepted 21 July 2026, published online 01 September 2026 [PAGE 1]; this is an “In Press” 2026 record, so external validation awaits independent replication.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression. Under high antecedent load (M1/P1), the athlete’s neuromuscular system is in a fatigue-dominant state. The “habit” under crisis is regression to the baseline warm-up response: VPA produces no harm but also no potentiation beyond baseline, and ICA fails to express because residual fatigue masks post-activation potentiation (P1 null effects for CMJ and PP) [PAGE 6, 7]. The athlete’s first-order model—“isometric priming improves jumping”—cannot be executed physiologically when the readiness gate is closed. Recursive theory of mind enters because the coach models the athlete’s state and the athlete models the coach’s intent. Verbal encouragement during ICA (“push the barbell vertically upward as hard and as fast as possible”) maximizes effort [PAGE 3], but effort cannot overcome a fatigue-imposed ceiling; the central nervous system recruits a protective inhibition that regresses explosive output toward habitual levels despite maximal isometric intent.

Counter-trap. The trap is universalism: assuming ICA is categorically superior to VPA. The counter-trap is context-conditionality. ICA showed a large simple effect only in P2 (d = 1.20 for CMJ; d = 0.87 for PP) [PAGE 6, 7], and responder analysis favored ICA (9/14 vs 1/14, exact p = 0.021) [PAGE 6]. Yet the authors warn the advantage is “statistically entangled with the reduced preceding training volume” [PAGE 10]. A coach who applies ICA after every microcycle, regardless of load, commits the universalism trap. The correct recursive model is second-order: “I believe ICA works, but only if I correctly model the athlete’s current fatigue, and the athlete believes I am not adding fatigue.” Blinding mitigates assessor bias (assessors blinded to condition) [PAGE 2], but participant blinding was infeasible because the protocols are overt [PAGE 2], creating an expectancy asymmetry that must be modeled.

Clock. Two clocks operate. The intra-session clock is the post-conditioning measurement window: pre, 3′, 6′, 9′, 12′ [PAGE 3, 4]. PAPE is time-dependent; rugby data show optimal effects several minutes after conditioning (Kilduff et al., 2007, 2008) [PAGE 9]. This study found a Period × Time point interaction for CMJ (F(3,36) = 4.25, p = 0.011) and a P1-specific contrast 9′ > 3′ (p = 0.030, d = 1.09), while the P2 ICA advantage was assessed as a period aggregate [PAGE 6]. The optimal minute within P2 was not isolated, so the intra-session clock remains unresolved. The inter-session clock is the 7-day washout [PAGE 3], adequate for carry-over (t(12) = 1.49, p = 0.162) [PAGE 5], but insufficient to erase microcycle-level fatigue differences. The macro-clock is the microcycle: M1 versus M2 load determines whether ICA passes or fails the readiness gate. A prediction derived from the recursive model: if a coach resets the clock by inserting a taper before ICA, the P1 null should convert to a P2-like ICA advantage; if the clock is not reset (consecutive high-load weeks), ICA should remain null regardless of intra-session timing.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, environmental, and statistical vetoes.

Physical (neuromuscular) veto. The core physical veto is residual fatigue. When antecedent volume is high (M1: 372 dynamic reps, 88 plyometric contacts), the fatigue term in the potentiation–fatigue balance exceeds the activation term, and ICA yields no CMJ advantage over VPA [PAGE 6, 10]. The veto lifts only under reduced load (M2: −22.3% dynamic volume), where ICA’s low metabolic cost relative to isotonic work preserves readiness while inducing post-activation mechanisms [PAGE 2]. If a replication applies ICA after a high-load microcycle, the Period × Sequence interaction should be vetoed (p > 0.10; d < 0.40).

Biomechanical veto. ICA was performed at a fixed knee angle of 120° with an immovable barbell across the upper trapezius, trunk upright, full-body tension [PAGE 3]. CMJ countermovement depth was self-selected [PAGE 4]. This creates a joint-angle specificity veto: the isometric stimulus at ~120° knee flexion (shallow squat) may not correspond to the knee and hip angles encountered during the CMJ braking and propulsion phases. Athletes whose preferred CMJ depth deviates substantially from the isometric joint angle should show a attenuated or null transfer, because the neuromechanical potentiation is angle-specific. No electromyography or tendon mechanical behavior was measured, so this biomechanical veto cannot be ruled out [PAGE 10].

Environmental/weather veto. Thermography and Myotonometry require strict environmental control. The study fixed ambient temperature at 21 °C, relative humidity at 60%, emissivity at 0.97–0.98, distance at 1.0 m, stable illumination, no direct airflow [PAGE 4]. If applied in a non-thermoneutral gym (e.g., ambient drift > ±3 °C, variable humidity, airflow), skin surface temperature (SST) and superficial stiffness readings would drift independently of the intervention, vetoing the SST-null and stiffness–CMJ association. Participants were also required to have no tattoos on the rectus femoris [PAGE 3], because ink and subcutaneous tissue interfere with optical and myotonometric readings; this is a skin-layer veto on the physiological measurement chain.

Biological/population veto. The sample was exclusively highly trained male volleyball players (age 27 ± 3 y, relative back-squat 1RM 1.55 kg·kg⁻¹, Polish First League) [PAGE 3]. Findings do not generalize to female athletes, younger players, or other sports without direct replication [PAGE 10]. Resistance training experience (10.5 ± 3.9 years) and volleyball experience (13.7 ± 3.3 years) imply a trained neuromuscular system; novices may not exhibit the same PAPE expression.

Statistical veto. Four statistical vetoes invalidate strong causal claims. (i) \(SWC = 0.77\) cm is below \(TE = 2.19\) cm, so responder classification (9 vs 1) is dominated by measurement noise; McNemar exact p = 0.021 is descriptive only [PAGE 5, 6, 10]. (ii) \(n = 14\) with error df = 12 limits detection to large effects; the regression’s adjusted \(R^2 = 0.800\) with three predictors is an overfitting regime, and Cook’s distance (max 0.352) approaches the 4/n influence heuristic [PAGE 4, 8]. (iii) Stiffness predicted ΔJH within P2 but showed no condition-specific interaction (Period × Sequence p = 0.698), so the mechanism claim is associational, not mediational [PAGE 7, 8]. (iv) Multiple secondary tests raise family-wise Type I error; the authors explicitly frame regression and responder analyses as hypothesis-generating [PAGE 4]. Any conclusion that “ICA causes CMJ gains via stiffness reduction” fails this veto stack; only the narrower claim “ICA outperformed VPA in P2 under reduced load” survives.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with explicit predictions.

Veto scenario 1 — High-load antecedent (fatigue gate). Counterfactual: hold the ICA protocol identical (3 × 5 × 3 s maximal isometric squats, 45 s total dose, 3-min inter-set rest, knee 120°) but deliver it after an M1-equivalent high-load microcycle (≈372 dynamic reps, 88 plyometric contacts, isometric dose 80 s) rather than M2. Verifiable prediction: the ICA–VPA difference in ΔCMJ should be null or negative. Specifically, Period × Sequence interaction p > 0.10; P2-style simple effect size d < 0.40; responder odds ratio not significantly different from 1 (McNemar exact p > 0.05). This directly tests the authors’ claim that ICA advantage is confined to the reduced-volume period [PAGE 1, 6, 10].

Veto scenario 2 — Measurement-noise responder collapse. Counterfactual: replicate the responder classification (ΔCMJ ≥ SWC δ = 0.77 cm averaged across post time points) in an independent sample of n = 14 with identical reliability (ICC₃,₁ ≈ 0.72, TE = 2.19 cm). Verifiable prediction: because SWC < TE, day-to-day variation approaches or exceeds the threshold, so responder status should not replicate. Predicted responder counts converge toward parity (e.g., 5/14 ICA vs 5/14 VPA) and McNemar exact p > 0.05. The observed 9 vs 1 split (OR = 9.0, CI [1.25, 394.48], p = 0.021) [PAGE 6] should be treated as unstable; the wide confidence interval (upper bound 394.48) already signals small-sample fragility [PAGE 6].

Veto scenario 3 — Environmental thermal veto. Counterfactual: repeat the protocol in a non-thermoneutral environment where ambient temperature is shifted by ±3 °C from the controlled 21 °C / 60% RH condition, without re-standardizing muscle temperature beforehand. Verifiable prediction: under thermoneutral conditions the study found ΔSST unrelated to ΔJH (p = 0.974; β_std = −0.005) [PAGE 8], because the standardized warm-up already optimized temperature [PAGE 9]. If ambient shift produces differential ΔSST between conditions (> 0.5 °C) and ΔSST then correlates with ΔJH (|r| ≥ 0.50, p < 0.05), the thermal mechanism is unmasked and the neuromechanical primacy claim is vetoed. Conversely, if ΔSST remains unrelated to ΔJH despite the ambient shift, the SST-null result is robust and the non-thermal mechanism claim gains support. The stiffness–CMJ association (β_std = −0.495, p = 0.005) should be re-tested under identical thermal control; if it disappears when temperature is uncontrolled, the original regression was confounded by unmeasured thermal variance [PAGE 8].
</RLVR_COUNTERFACTUAL_VETOES>