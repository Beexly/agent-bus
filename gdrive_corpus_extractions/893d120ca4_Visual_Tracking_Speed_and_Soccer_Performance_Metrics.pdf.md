---
source: "Visual Tracking Speed and Soccer Performance Metrics.pdf"
folder: "/CorpusRoot"
pages: 59
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4613
---

<NATIVE_REASONING>
The user wants a deep analysis of the provided source document (a thesis PDF with 59 pages) following very strict formatting invariants.

Key requirements:
1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000 WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

Source: /CorpusRoot/Visual Tracking Speed and Soccer Performance Metrics.pdf, Pages 59.

Content extraction:
- Author: Julia Paige Phillips, University of Mississippi, 2021.
- Study: 19 NCAA DI women's soccer players, spring 2021 season (9 matches). 13 used after exclusions (goalkeepers and <10 min/game excluded).
- VTS measured via 1-core session (20 trials) on NeuroTracker 3D-MOT.
- Soccer metrics from Wyscout: passing accuracy, intercepted passes, dribble success rate, packing/impect rate, turnovers per 90, defensive win rate.
- Spearman's rank order correlation.
- Results:
  - VTS vs passing accuracy: r = -0.380, p = 0.20 (weak nonsignificant negative).
  - Consistency vs passing accuracy: r = 0.650, p = 0.016 (strong significant positive).
  - Attackers (n=7): consistency & passing accuracy r=0.730, p=0.063 (strong nonsignificant). VTS & impect rate/min r=0.607, p=0.148 (moderate nonsignificant).
  - Defenders (n=6): consistency & defensive win rate r=0.731, p=0.099 (strong nonsignificant).
  - VTS vs packing rate: r = -0.466, p=0.108. Fastest trial vs passing accuracy r=-0.491, p=0.088.
  - Positional VTS: Defenders avg 79.0 ± 23.9 cm/s; Midfielders 64.9 ± 23.8 cm/s; Forwards 96.9 ± 3.4 cm/s. Consistency: Defenders 51.2%, Midfielders 57.2%, Forwards 44.5%.
  - Hypothesis: Midfielders highest VTS - FALSE, forwards highest.
- Methods: Shapiro-Wilk normality, Spearman rho, 95% CI via JASP, SPSS v27. Magnitude scale: very weak 0-0.20, weak 0.21-0.40, moderate 0.41-0.60, strong 0.61-0.80, very strong 0.81-1 (Prion & Haerling, 2014). p<0.05 significance.
- NeuroTracker protocol: 8 balls, 4 illuminated for 2s, track for 8 seconds, threshold speed where correct 50% of time. First trial 0.68 m/s (68 cm/s). Sitting upright, 3D glasses, ~10 minutes, 3 practice trials.
- Units: VTS in cm/s (though text says meter per second, table says cm/s). 0.68 m/s = 68 cm/s.
- Literature: Mangine et al. 2014 NBA VTS vs assists r=0.78, steals r=0.77, assist-to-turnover r=0.78. Faubert 2013 professionals vs amateurs. Romeas et al. 2016 soccer passing accuracy +15% after 10 sessions.

I need to write formal sections.

THINK_TRACE >= 400 words: deep multi-hop derivation, gray-zone audit. Discuss statistical power, small N=13, Spearman vs Pearson, ceiling/floor effects, consistency vs VTS dissociation, positional subsampling (attackers n=7, defenders n=6), exclusion criteria bias, CI width, multiple comparisons problem, directional inconsistency (negative VTS correlations but positive consistency), measurement error in Wyscout subjective packing/impect, intra-rater reliability not quantified, single core session (no training curve), threshold definition (50% correct), psychometric function not fitted, etc.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Define Spearman's rho formula. Define VTS threshold as quantile of psychometric function. Units: cm/s, %, per minute, per 90 min. Page citations [PAGE 4], [PAGE 22], [PAGE 23], [PAGE 24], [PAGE 29], [PAGE 30], [PAGE 31], [PAGE 32], [PAGE 33], [PAGE 34], [PAGE 35], [PAGE 36], [PAGE 38], [PAGE 41]. Breakdown regimes: N < 20, p-hacking, CI includes zero, etc.

RETROCAUSAL_GENEALOGY: Historical lineage: Friedman et al. 2008 genetics; Faubert 2013; Mangine 2014; Romeas 2016; Clark 2012/2015; Edelman neural group selection; neural plasticity (Hebbian); MPTF Hadlow 2018; multi-week traps (plateau beyond 40 sessions Faubert & Sidebottom 2012; threshold 15 sessions Romeas 2016). Multi-week traps: acute baseline vs season-long transfer; training dose-response; transfer specificity.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Players under pressure regress to habitual visual search strategies; counter-trap: consistency metric captures fatigue resistance rather than raw speed; clock: 8-second trial vs 90-minute match; 20 trials vs season; temporal mismatch. Crisis habit regression: when VTS too fast, errors increase; consistency maintains alpha power.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Physical: VTS measured sitting upright in chair (no locomotion, no vestibular load, no soccer-specific visual scan). Biomechanical: NeuroTracker uses 8 yellow balls in 3D cube, not opponents/ball/teammates; no interceptive timing. Weather: indoor Gillom Sports complex, no environmental confound, but external validity limited. Veto: Null result for VTS is expected due to task-ecological mismatch, not necessarily absence of perceptual-cognitive relationship.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios + predictions.
1. If N >= 50 and correlation remains |r| < 0.30, then VTS is not a valid predictor of soccer passing accuracy. Prediction: null.
2. If consistency score is removed and only VTS used, model AUC for predicting passing accuracy > 65% drops to <= 55%. Prediction: consistency mediates.
3. If midfielders (n=6) isolated with VTS > 80 cm/s, passing accuracy should not exceed defenders by > 5 percentage points absent consistency control. Prediction: positional hypothesis falsified.

Need to ensure >= 1000 words total. Must not mention betting lines. Must not invent fake ratios. Use formal LaTeX.

Word count check: I'll aim for substantial length in each section.

Structure:
- Intro maybe not needed, just the XML sections.
- Make sure sections are exact tags.

Let's draft carefully.

THINK_TRACE: >400 words. Talk about derivation from raw data to inference.
- Source page 4 abstract: 19 tested, 13 utilized.
- Page 22 methods: Shapiro-Wilk, Spearman, JASP CI, SPSS v27, magnitude thresholds.
- Page 29-30: NeuroTracker protocol details: 8 balls, 4 targets, 8s trial, threshold at 50% correct, initial speed 0.68 m/s.
- Page 33 results table: VTS 33.3-121.7 cm/s, avg 75.3 ± 23.7. Consistency 53.1 ± 7.0%. Fastest trial 99.9 ± 21.3 cm/s. Passing accuracy 60.2 ± 8.1%. Packing/min 0.43 ± 0.16. TO per 90 15.6 ± 3.2.
- Page 33 correlations: VTS vs passing accuracy r=-0.380 CI [-0.770, 0.216] p=0.20. VTS vs packing r=-0.466 CI [-0.809, 0.114] p=0.108. Fastest trial vs passing r=-0.491 p=0.088. Consistency vs passing r=0.650 CI [0.158, 0.884] p=0.016.
- Page 34 positional: Defenders VTS 79.0 ± 23.9; Midfielders 64.9 ± 23.8; Forwards 96.9 ± 3.4.
- Page 35 Table 5: Attackers consistency vs passing r=0.730 p=0.063; Defenders consistency vs defensive win rate r=0.731 p=0.099.
- Gray zone: p-values between 0.05 and 0.10 with strong r values indicate underpowering. N=13 yields wide CIs. Spearman on per-90 normalized data assumes monotonic rank relationship; passing accuracy bounded [0,1] causing heteroscedasticity. Exclusion of goalkeepers and low-minute players creates survivorship bias. Single session cannot separate trait VTS from state arousal. The 50% threshold is a psychometric quantile without slope parameter (no lapse rate, no guessing rate modeled). Wyscout packing/impect are subjective with unreported inter-rater reliability (only intra-rater mentioned, page 30). Multiple comparisons (at least 6+ correlations) inflate familywise error; no Bonferroni or FDR correction reported. Therefore null VTS findings are inconclusive rather than evidence of absence.

Need to write this in >400 words.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define Spearman's rho:
\[
\rho = 1 - \frac{6 \sum d_i^2}{n(n^2 - 1)}
\]
where d_i = rank difference, n = number of paired observations. Units: dimensionless, [-1, 1].
- VTS threshold definition: Let \(S_k\) be ball speed on trial k, \(X_k \in \{0,1\}\) correct identification. VTS is \(\hat{v}_{50}\) such that \(P(X=1 | v = \hat{v}_{50}) = 0.5\). Units: m/s or cm/s (source uses cm/s in tables, m/s in protocol text).
- Consistency: \(C = \frac{1}{20}\sum_{k=1}^{20} X_k \times 100\%\). Units: percent.
- Per-minute normalization: \(M' = \frac{M}{t_{played}} \times 90\) for per 90, or \(\frac{M}{t_{played}}\) for per minute. Units: events·min⁻¹ or events·90min⁻¹.
- 95% CI for rho via JASP (method not specified, likely Fisher z or bootstrap; source doesn't say, so note as assumption).
- Breakdown/singularity: n < 10 per subgroup invalidates asymptotic CI; bounded accuracy saturates Spearman variance; p=0.099 with r=0.731 indicates CI spans zero (page 34: CI [-0.197, 0.968]).
- Page citations: [PAGE 22], [PAGE 29], [PAGE 30], [PAGE 31], [PAGE 32], [PAGE 33], [PAGE 34], [PAGE 35], [PAGE 38].

RETROCAUSAL_GENEALOGY:
- Lineage: Friedman et al. (2008) executive function genetic origin [PAGE 10]. Edelman neural group selection and Hebbian plasticity [PAGE 10]. Faubert & Sidebottom (2012) plateau beyond 40 sessions [PAGE 11]. Faubert (2013) professional vs amateur VTS [PAGE 20-21]. Mangine et al. (2014) NBA VTS assists r=0.78 [PAGE 22]. Romeas et al. (2016) soccer passing +15% after 10 sessions [PAGE 24-25]. Clark et al. (2012, 2015) vision training transfer [PAGE 18-19]. MPTF Hadlow et al. (2018) transfer framework [PAGE 16-17].
- Multi-week traps: acute baseline session cannot capture training adaptation curve; 15-session threshold for transfer [PAGE 24]; season length 9 matches [PAGE 22]; fatigue accumulation not measured; inconsistency between pre-season baseline and in-season performance.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under match pressure, players revert to dominant visual search strategy; VTS peak may not reflect sustained attention.
- Counter-trap: consistency score indexes resistance to mental fatigue across 20 trials; passing accuracy is season-average; consistency may be a better proxy for in-game cognitive stamina.
- Clock: temporal mismatch between 8-second NT trial [PAGE 30] and 90-minute match; between pre-season baseline and spring season outcomes; between single session and stable trait.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: testing seated upright in chair [PAGE 29], no locomotion, no soccer-specific visual scan, no vestibular/proprioceptive load. Veto: null VTS result expected due to ecological mismatch.
- Biomechanical layer: 8 yellow balls in 3D cube [PAGE 30] vs opponents, ball, teammates; no interceptive timing or foot-eye coordination.
- Weather/environment: indoor Gillom Sports complex [PAGE 29], controlled lighting, no weather confound; but high external validity cost.
- Statistical layer: small N, wide CI including zero.
- Verdict: VTS null finding is vetoed by task-ecological mismatch, not confirmed as evidence of no relationship.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios + predictions.
Scenario 1: Replication with N >= 50 NCAA DI women's soccer players, same protocol. If |rho_VTS,passing| < 0.30 and p > 0.05, then VTS lacks predictive validity for passing accuracy in this population. Prediction: null result persists.
Scenario 2: Consistency ablation. Fit logistic model: passing accuracy > 60% ~ consistency + VTS. If consistency coefficient becomes insignificant (p > 0.05) when VTS added, or VTS alone yields AUC <= 0.55, then VTS does not mediate consistency's effect. Prediction: consistency remains significant, VTS does not.
Scenario 3: Positional isolate. Midfielders only (n=6 in full set, but here say isolated cohort). If midfielders with VTS > 80 cm/s do not exceed defenders' passing accuracy by > 5 percentage points after controlling for minutes played, then the hypothesis that midfielders require highest VTS is falsified. Prediction: no difference; positional VTS hypothesis rejected.

Need to ensure no betting lines. Check: no odds, spreads, moneylines, totals. Good.

Need formal LaTeX equations, SI units, assumptions, exact singularity/breakdown regimes.

Need exact page markers [PAGE N]. I'll cite frequently.

Need verbatim quotes where useful. I'll quote short phrases.

Word count: Let's estimate. THINK_TRACE ~500 words. SOURCE_OPERATORS ~400 words. RETROCAUSAL ~250 words. RECURSIVE ~200 words. CROSS_LAYER ~200 words. RLVR ~250 words. Total ~1800 words. Good.

Let's write.

Important: The user said "DRIVE SOURCE: /CorpusRoot/..." meaning I should treat as if pages provided. I have the text. I'll cite [PAGE N] exactly as in source.

Let's produce final answer with the six XML sections in order. No extra text outside.

Double check invariant 2: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes."

So I must state assumptions and breakdown regimes explicitly.

Let's draft each section.

THINK_TRACE content:
Start with derivation chain: from source abstract [PAGE 4] to methods [PAGE 22] to results [PAGE 33-35]. Mention exclusion criteria: goalkeepers and <10 min/game excluded [PAGE 22]. 19 to 13 [PAGE 4, 22]. Spearman rank correlation [PAGE 22, 32]. Magnitude scale from Prion & Haerling [PAGE 32]. CI computed in JASP [PAGE 32]. Statistical software SPSS v27 [PAGE 32]. NeuroTracker protocol: 1-core session, 20 trials, 8 balls, 4 targets, 8s duration, initial speed 0.68 m/s, threshold at 50% correct [PAGE 29-30]. VTS units cm/s in tables [PAGE 33]. Consistency % [PAGE 33]. Wyscout metrics per minute/per 90 [PAGE 22, 33]. Subjective packing/impect scoring, same researcher, intra-rater reliability tested but no kappa reported [PAGE 30-31].

Gray-zone audit: small N=13; subgroup n=6 attackers/defenders [PAGE 33, 35]; p-values 0.063, 0.099 with r=0.73 indicate Type II error risk; CI spans zero for consistency/defensive win rate [-0.197, 0.968] [PAGE 34]; negative VTS correlations but positive consistency correlations suggest dissociation between peak speed and sustained accuracy; bounded accuracy [0,1] violates normality assumptions for raw correlation though Spearman is nonparametric; multiple comparisons without correction; single-session baseline cannot separate trait from state; no lapse rate parameter in threshold estimation.

Write >400 words.

SOURCE_OPERATORS_AND_EQUATIONS:
Equations:
1. Spearman rho formula.
2. Psychometric threshold definition.
3. Consistency formula.
4. Per-minute normalization.
5. 95% CI via Fisher z transform (note source doesn't specify, but it's formal).
Assumptions: monotonic relationship, independent observations, ranks replace raw values, no ties handled explicitly (source doesn't mention tie correction).
Breakdown regimes: n < 10 per cell -> CI width > 0.8; p in (0.05, 0.10) with |r| > 0.60 -> underpowered; CI lower bound < 0 -> cannot exclude null; bounded outcome -> heteroscedasticity; single trial threshold -> high measurement error.
Citations: [PAGE 22], [PAGE 29], [PAGE 30], [PAGE 32], [PAGE 33], [PAGE 34], [PAGE 35].

RETROCAUSAL_GENEALOGY:
Historical chain:
- Friedman et al. (2008) executive function genetic [PAGE 10].
- Edelman neural group selection / Hebbian plasticity [PAGE 10].
- Faubert & Sidebottom (2012) plateau >40 sessions [PAGE 11].
- Faubert (2013) pro vs amateur VTS learning curves [PAGE 20-21].
- Mangine et al. (2014) NBA VTS vs assists/steals [PAGE 22].
- Romeas et al. (2016) soccer passing +15% after 10 sessions [PAGE 24-25].
- Clark et al. (2012, 2015) transfer and concussion [PAGE 18-19].
- MPTF Hadlow et al. (2018) transfer framework [PAGE 16-17].
Multi-week traps: baseline single session vs season outcome; 15-session threshold [PAGE 24]; 9-match season [PAGE 22]; acute vs chronic cognitive load.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: pressure induces reversion to habitual visual search; VTS peak may not transfer.
Counter-trap: consistency indexes fatigue resistance; passing accuracy season average reflects sustained decision-making.
Clock: 8s trial vs 90 min match [PAGE 30]; pre-season baseline vs spring season [PAGE 22, 29]; 20 trials vs season accumulation.

CROSS_LAYER_VETO_ADJUDICATION:
Physical: seated upright, chair, 3D glasses, Gillom complex [PAGE 29]; no locomotion.
Biomechanical: 8 yellow balls, 3D cube [PAGE 30]; no ball/opponent/teammate; no foot-eye.
Weather: indoor controlled, no weather confound; limits external validity.
Statistical: N=13; wide CI; multiple comparisons.
Veto: Null VTS findings are vetoed by ecological mismatch, not affirmed as evidence of absence.

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios with formal conditions and predictions.

Now write final output. Ensure word count >= 1000. Let's write carefully.

I'll include exact [PAGE N] markers throughout.

No betting lines. Check words like "odds" - avoid. "probability" is fine. "p-value" is fine.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit begin with the source’s stated experimental chain. Page [PAGE 4] reports 19 NCAA Division I women’s soccer players were tested before the 2021 spring season; after exclusionary criteria only 13 were utilized for analysis. Page [PAGE 22] specifies the exclusions: goalkeepers and players averaging fewer than 10 minutes per game were removed, leaving a convenience sample drawn from a single team across 9 matches. Visual tracking speed (VTS) was operationalized through one NeuroTracker (NT) core session consisting of 20 trials [PAGE 29]. On each trial, eight yellow balls moved through a 3D cube for eight seconds; four were illuminated for two seconds at trial onset and served as the target set [PAGE 30]. The participant had to identify the four targets after motion ceased. Speed was increased after a fully correct trial and decreased after any error, converging to the fastest speed at which the participant correctly identified all four balls 50% of the time [PAGE 30]. The initial ball speed was standardized at 0.68 meter per second [PAGE 30].

The statistical operator is Spearman’s rank-order correlation coefficient (rho), computed in SPSS v27.0.0.0 with 95% confidence intervals generated in JASP 0.9.2 [PAGE 32]. Magnitude interpretation followed Prion & Haerling (2014): very weak 0–0.20, weak 0.21–0.40, moderate 0.41–0.60, strong 0.61–0.80, very strong 0.81–1.0 [PAGE 32]. Page [PAGE 33] reports VTS ranging 33.3 to 121.7 cm/s (mean 75.3 ± 23.7 cm/s), consistency ranging 42–63% (mean 53.1 ± 7.0%), passing accuracy 48.8–70.9% (mean 60.2 ± 8.1%), packing rate 0.22–0.76 per minute (mean 0.43 ± 0.16), and turnovers 9.5–20.4 per 90 minutes (mean 15.6 ± 3.2). The team-level correlation between VTS and passing accuracy was weak and nonsignificant: r = −0.380, 95% CI [−0.770, 0.216], p = 0.20 [PAGE 33]. VTS versus packing rate was r = −0.466, p = 0.108; fastest trial versus passing accuracy was r = −0.491, p = 0.088 [PAGE 33]. Conversely, consistency versus passing accuracy was strong and significant: r = 0.650, 95% CI [0.158, 0.884], p = 0.016 [PAGE 33].

Gray-zone audit reveals multiple fragilities. First, N = 13 yields very wide confidence intervals; the consistency–defensive win rate correlation for defenders is r = 0.731 with 95% CI [−0.197, 0.968], p = 0.099 [PAGE 34], meaning the interval spans zero despite a “strong” point estimate. Second, subgroup cell sizes are attackers n = 7 and defenders n = 6 [PAGE 33, 35], below the threshold for stable asymptotic correlation inference. Third, at least six distinct correlations were examined without reported familywise error correction (Bonferroni, Holm, or FDR), inflating Type I error risk for the isolated significant result. Fourth, the dependent variables are bounded proportions (passing accuracy ∈ [0,1]) and count rates normalized by minutes played; Spearman’s rho assumes monotonic rank association but does not resolve heteroscedasticity induced by boundary saturation. Fifth, the exclusion of low-minute players introduces survivorship bias: players with greater playing time may differ systematically in both cognitive reserve and tactical usage. Sixth, VTS was measured in a single pre-season core session [PAGE 29], conflating trait visual tracking capacity with state arousal, fatigue, and familiarization; no psychometric slope, lapse rate, or guessing parameter was estimated, only a 50% threshold quantile [PAGE 30]. Seventh, Wyscout packing and impect rates are subjective scoring metrics; page [PAGE 30] notes intra-rater reliability was tested but reports no kappa, ICC, or inter-rater coefficient, undermining construct validity. Eighth, the directionality is theoretically ambiguous: VTS correlations are negative while consistency correlations are positive, suggesting peak speed and sustained accuracy may tap separable cognitive resources rather than a unitary “visual tracking” construct. Therefore the null VTS findings are best read as inconclusive underpowering, not as evidence of absence.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and units:

1. Spearman’s rank-order correlation coefficient:
\[
\rho = 1 - \frac{6 \sum_{i=1}^{n} d_i^{2}}{n\left(n^{2} - 1\right)}
\]
where \(d_i = R(X_i) - R(Y_i)\) is the difference between paired ranks of variables \(X\) and \(Y\), and \(n\) is the number of paired observations. Units: dimensionless, range \([-1, 1]\). Assumption: monotonic relationship between ranks; independent pairs; ties handled by average ranks (not explicitly reported in source). [PAGE 32, 33]

2. NeuroTracker VTS threshold as a psychometric quantile:
Let \(v_k\) denote ball speed on trial \(k\), and \(X_k \in \{0,1\}\) indicate correct identification of all four target balls. The estimated visual tracking speed \(\hat{v}_{50}\) satisfies:
\[
P(X = 1 \mid v = \hat{v}_{50}) = 0.50
\]
Units: meters per second in protocol text (0.68 m/s initial speed) [PAGE 30], but reported in tables as centimeters per second (cm/s) [PAGE 33]. Assumption: a single 50% crossing captures threshold ability; no lapse rate \(\lambda\) or guessing rate \(\gamma\) modeled, so the psychometric function is underspecified. Breakdown regime: if the true psychometric slope is shallow, \(\hat{v}_{50}\) has high measurement error and low test-retest reliability.

3. Consistency score:
\[
C = \left( \frac{1}{20} \sum_{k=1}^{20} X_k \right) \times 100\%
\]
Units: percent correct across 20 trials [PAGE 33]. Range observed: 42%–63% post-exclusion [PAGE 33].

4. Per-minute and per-90 normalization for Wyscout metrics:
\[
M'_{\text{per min}} = \frac{M}{t_{\text{played}}}, \qquad M'_{\text{per 90}} = \frac{M}{t_{\text{played}}} \times 90
\]
Units: events·min\(^{-1}\) or events·90min\(^{-1}\) [PAGE 22, 33]. Assumption: metric density is stationary across minutes played; positional role does not interact with time-on-field.

5. Approximate 95% confidence interval for Spearman’s rho via Fisher \(z\) (implied by JASP output, method not explicitly stated in source):
\[
z = \frac{1}{2}\ln\left(\frac{1+\rho}{1-\rho}\right), \qquad SE_z = \frac{1}{\sqrt{n-3}}, \qquad \text{CI}_{\rho} = \tanh\left(z \pm 1.96 \cdot SE_z\right)
\]
Units: probability dimensionless. Breakdown regime: when \(n < 10\), \(SE_z > 0.38\), producing intervals wider than \(\pm 0.75\) in rho space, as observed for defender subgroups [PAGE 34].

Exact singularity/breakdown regimes:
- Subgroup n ≤ 6 (defenders, attackers) invalidates normal-approximation CIs; [PAGE 34] CI [−0.197, 0.968] spans zero.
- p-values in the gray zone \(0.05 < p < 0.10\) with \(|\rho| > 0.60\) indicate severe Type II error risk under N = 13 [PAGE 33, 34, 35].
- No correction for multiple comparisons across at least six tested correlations [PAGE 33].
- Bounded outcome variables (passing accuracy %) violate unbounded correlation assumptions near 0% or 100% boundaries.
- Single-session VTS baseline cannot separate trait capacity from acute state; no training curve or plateau assessment beyond the 40-session ceiling noted in literature [PAGE 11].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage traces from individual differences in executive function being primarily genetic (Friedman et al., 2008) while brain development is epigenetic and experience-dependent [PAGE 10]. Edelman’s neural group selection and Hebbian neural plasticity provide the mechanistic rationale for NeuroTracker transfer: repeated co-activation strengthens specific neuronal assemblies that may support shared sport skills [PAGE 10]. Faubert & Sidebottom (2012) identified a training plateau beyond 40 sessions, requiring novel stimuli for further gains [PAGE 11]. Faubert (2013) demonstrated that professional athletes exceed elite-amateurs and non-athletes in visual tracking speed and learning rate over 15 sessions, establishing expertise stratification [PAGE 20–21]. Mangine et al. (2014) extended this to NBA players, reporting strong correlations between VTS and assists (r = 0.78), steals (r = 0.77), and assist-to-turnover ratio (r = 0.78) [PAGE 22]. Romeas et al. (2016) applied 3D-MOT to male collegiate soccer players and observed a 15% improvement in passing decision-making accuracy after 10 sessions, though dribbling and shooting did not reach significance [PAGE 24–25]. Clark et al. (2012, 2015) documented transfer effects in baseball batting statistics and concussion-incidence reduction in football through vision training [PAGE 18–19]. Hadlow et al. (2018) formalized the Modified Perceptual Training Framework (MPTF), predicting stronger transfer when training-to-competition stimulus alignment is maximal [PAGE 16–17].

Multi-week traps embedded in this genealogy: (1) the current study used a single pre-season baseline session [PAGE 29], ignoring the 15-session threshold for transfer effects documented in soccer [PAGE 24] and the 40-session plateau in general 3D-MOT training [PAGE 11]; (2) the competitive season comprised only 9 matches [PAGE 22], too brief to capture cumulative cognitive-fatigue adaptation; (3) baseline VTS was measured before the season while outcomes were season aggregates, creating a temporal mismatch between acute trait assessment and chronic performance; (4) amateur NCAA athletes (mean age 19.8 ± 1.4 years) may not have fully developed prefrontal executive architecture until approximately age 25 [PAGE 38–39], potentially suppressing VTS–performance coupling relative to professional cohorts (Mangine et al., mean ages 23.3–26.8 years) [PAGE 39]. Thus, the null result may reflect an under-dosed acute measurement rather than a true absence of perceptual-cognitive relationship.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under match pressure, soccer players regress to dominant, overlearned visual-search habits rather than deploying maximal tracking speed. A high peak VTS measured in isolation may not express itself when attentional resources are divided among ball, opponents, teammates, and spatial boundaries. This explains why fastest-trial VTS showed nonsignificant negative correlations with passing accuracy (r = −0.491, p = 0.088) and packing rate (r = −0.489, p = 0.090) [PAGE 33]: players capable of brief peak speed may sacrifice accuracy under load, consistent with Holcombe & Chen (2012) that attentional tracking resources are exhaustible [PAGE 37–38].

Counter-trap: consistency score, defined as the proportion of correct identifications across all 20 trials [PAGE 33], indexes resistance to mental fatigue and sustained attentional stability rather than raw ceiling speed. The strong significant correlation between consistency and passing accuracy (r = 0.650, p = 0.016) [PAGE 33] suggests players who maintain alpha-power stability and limit cognitive fatigue across repeated trials also sustain passing quality across matches. The discussion speculates that higher consistency reflects sustained alpha power and limited mental fatigue, potentially attenuating in-game decision-making decay [PAGE 37–38].

Clock: multiple temporal mismatches invalidate a direct VTS–performance mapping. The NeuroTracker trial lasts eight seconds [PAGE 30]; a soccer match lasts ninety minutes. The baseline was collected pre-season [PAGE 29], while performance was aggregated over nine spring matches [PAGE 22]. Twenty trials do not sample the same cognitive workload as a full season of decision events. Therefore, the “clock” of the measurement apparatus is orders of magnitude shorter than the clock of the outcome variable, creating an ecological-timescale veto on causal inference.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: VTS was assessed while participants sat upright in a chair in the Gillom Sports Complex, wearing 3D glasses, with no locomotion, no vestibular load, and no soccer-specific visual scanning [PAGE 29]. Because the test removes running, cutting, and dynamic gaze stabilization, a null VTS–soccer correlation is expected by physical-layer mismatch; the veto condition is satisfied: seated static tracking is not ecologically equivalent to on-field visual tracking.

Biomechanical layer: the stimulus consisted of eight yellow balls moving through a 3D cube [PAGE 30]. There was no soccer ball, no opposing player, no teammate, no foot-eye coordination, and no interceptive timing. Therefore the biomechanical demands of NeuroTracker do not map onto passing, packing, impect, or defensive win rate. Veto condition satisfied: absence of shared effector and object dynamics severs the transfer pathway predicted by MPTF [PAGE 16–17].

Weather/environment layer: testing occurred indoors under controlled lighting [PAGE 29], eliminating weather confounds (wind, precipitation, variable stadium lighting) but also eliminating the ecological validity of outdoor visual search. This is a validity trade-off, not a confound; the controlled environment strengthens internal reliability but weakens external generalization to match conditions.

Statistical layer: with N = 13, the confidence interval for consistency–defensive win rate spans zero [−0.197, 0.968] despite r = 0.731 [PAGE 34], and team-level VTS correlations have intervals crossing zero (e.g., passing accuracy CI [−0.770, 0.216]) [PAGE 33]. Multiple uncorrected comparisons further invalidate familywise error control.

Adjudication verdict: The null findings for VTS are vetoed by physical and biomechanical ecological mismatch, not affirmed as evidence that visual tracking is irrelevant to soccer. The consistency result survives statistical veto only marginally (p = 0.016) but requires replication with larger N and soccer-embedded stimuli before transfer claims are warranted.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Sample-size expansion veto: Replicate the protocol with N ≥ 50 NCAA Division I women’s soccer players, one core NeuroTracker session, and season Wyscout metrics. Condition: if the absolute Spearman correlation between VTS and passing accuracy remains |ρ| < 0.30 and p > 0.05, then VTS lacks predictive validity for passing accuracy in this population. Prediction: null result persists; VTS is not a standalone predictor.

Scenario 2 — Consistency ablation veto: Fit a hierarchical model predicting above-median passing accuracy (>60%) from VTS alone, then from consistency alone, then from both. Condition: if the consistency coefficient loses significance (p > 0.05) when VTS is entered, or if VTS alone yields classification accuracy (AUC) ≤ 0.55 while consistency yields AUC > 0.70, then VTS does not mediate consistency’s relationship to passing accuracy. Prediction: consistency remains significant; VTS adds no incremental predictive information.

Scenario 3 — Positional-isolate veto: Isolate midfielders (n = 6 in the full set; target n ≥ 15 in replication). Condition: if midfielders with VTS > 80 cm/s do not exceed defenders’ passing accuracy by more than 5 percentage points after controlling for minutes played, then the hypothesis that midfielders require the highest VTS due to distributional cognitive load is falsified. Prediction: no positional VTS advantage observed; forwards and defenders show equivalent or higher VTS without corresponding accuracy gains, consistent with Table 4 (forwards mean VTS 96.9 ± 3.4 cm/s vs. midfielders 64.9 ± 23.8 cm/s) [PAGE 34].
</RLVR_COUNTERFACTUAL_VETOES>