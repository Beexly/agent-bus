---
source: "2026 - Acute Performance, Mechanical and Thermal Effects of Isometric Conditioning Versus Standardized Volleyball Pre-Training Activation in Highly - Terbalyan et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Journal of Sports Science and Medicine/In Press/2026"
pages: 35
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4784
---

<NATIVE_REASONING>
The user wants me to analyze a sports science paper about isometric conditioning vs standardized volleyball pre-training activation. They want me to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

Wait, the user provided "PAGES: 35" but the source text is just one continuous text block without explicit page markers like [PAGE N]. However, the system prompt says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Looking at the source text, I see HTML-like comments but no explicit [PAGE N] markers. I should probably treat the sections as pages or note that explicit page markers weren't preserved in the machine conversion. Actually, looking carefully at the text, there are no [PAGE N] markers. I should cite sections or note that page markers weren't preserved per the disclaimer "equations, tables and figures are NOT preserved - consult the PDF for those".

Wait, the instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since no explicit [PAGE N] markers are in the provided text, I cannot invent them. I should cite using section headers or note the absence. But to be safe and compliant, I'll reference the text by section (Abstract, Methods, Results, Discussion, Conclusion, Supplementary Tables) and note that page markers weren't preserved in the machine conversion. However, the user explicitly said "PAGES: 35" which might imply they think there are page markers. Since there are none, I'll cite [SECTION] or use the DOI and section names.

Actually, looking again, maybe I should just cite [PAGE N] as if the sections correspond to pages? No, that would be inventing markers. Better to say "page markers not preserved in machine-converted text" and cite by section header.

Wait, the invariant says "When source pages are provided, cite exact [PAGE N] markers". If they're not provided, I can't cite them. I'll cite by section name.

Now let's structure the response:

1. <THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words).
   - Need to analyze the study design, statistical power, crossover interaction, period confounding, responder analysis, regression assumptions, SWC vs TE issues, etc.
   - Multi-hop: PAPE → ICA → stiffness reduction → CMJ improvement, mediated by training volume/fatigue status.
   - Gray zones: crossover carry-over, period×sequence entanglement with microcycle load, small n=14, regression f²≥1.16 sensitivity, SWC (0.77 cm) < TE (2.19 cm), McNemar exact test on paired indicators, Type I error inflation from multiple tests, responder classification noise.

2. <SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
   - Need to write out the formal statistical models:
     - Repeated-measures ANOVA: 2×2 crossover with Period (P1, P2), Time point (pre, 3', 6', 9', 12'), Sequence (between).
     - Model: \(Y_{ijk} = \mu + \alpha_i + \beta_j + (\alpha\beta)_{ij} + s_k + \epsilon_{ijk}\) etc. Actually crossover design with sequence as between-subject factor.
     - \(\Delta JH(t) = JH(t) - JH(pre)\)
     - SWC: \(\delta = 0.2 \times SD_{baseline}\)
     - Regression: \(\Delta JH_2 = \beta_0 + \beta_1 Seq + \beta_2 \Delta Stiffness_2 + \beta_3 \Delta SST_2 + \epsilon\)
     - McNemar exact test for paired responder counts.
     - ICC formula: \(ICC_{3,1}\)
     - Cohen's d, eta squared interpretations.
     - Units: cm, W/kg, ms, °C, N/m, Hz, dimensionless decrement.
     - Breakdown regimes: n=14 underpowered for secondary analyses (f²≥1.16, R²≥0.54), SWC < TE means responder classification unreliable, period effect entangled with training volume reduction (M1→M2: dynamic volume -22%, plyometrics -27%, isometric dose -25%).

3. <RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
   - Lineage: Wilson et al. 2013, Blazevich & Babault 2019, Tillin & Bishop 2009, Rassier & MacIntosh 2000, Seitz & Haff 2016, Bevan et al. 2010, Kilduff et al. 2007/2008, Xu et al. 2025 meta-analysis, Helbin et al. 2025 (45s protocol), Jarosz et al. 2025a/b/c, Terbalyan et al. 2025.
   - Multi-week traps: microcycle load differences (M1 vs M2), 7-day washout may not clear cumulative fatigue, period×sequence interaction confounded with antecedent load, carry-over test non-significant but period effect present.

4. <RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
   - This is a bit abstract. "Crisis habit regression" might refer to athletes reverting to habitual warm-up under stress/fatigue. "Counter-trap" could be the trap of assuming ICA universally superior when it's conditional on low fatigue. "Clock" refers to timing of measurements (3, 6, 9, 12 min post) and 7-day washout.
   - Theory of mind: coaches might misread P2-specific effect as unconditional ICA superiority; athletes might habitually prefer VPA; researchers might overfit responder analysis.

5. <CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
   - Physical veto: muscle stiffness reduction vs SST no effect; viscoelastic mechanism supported but not causal (no EMG, no tendon behavior).
   - Biomechanical: CMJ without arm swing, self-selected depth, ForceDecks 1000 Hz, best attempt selected.
   - Weather/environmental: ambient 21°C, RH 60%, controlled illumination, no direct airflow, blackbody calibration, emissivity 0.97-0.98.
   - Veto proof: if stiffness doesn't change or SST confounds, the mechanism claim fails. If carry-over existed, crossover invalid. If n too small, regression spurious.

6. <RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
   - RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I need 3 scenarios where the study's conclusions would be vetoed/falsified, with predictions.
   - Scenario 1: High preceding volume (M1 load) → ICA effect disappears or reverses (fatigue dominates). Prediction: ΔCMJ ICA ≈ VPA or negative under high load.
   - Scenario 2: No stiffness reduction but CMJ improves → stiffness is not mediator; thermal or neural mechanism instead. Prediction: regression β_stiffness ≈ 0, β_SST ≠ 0 or neural measure drives effect.
   - Scenario 3: Carry-over present despite 7-day washout (e.g., residual soreness) → period×sequence confounded. Prediction: Grizzle test p < 0.05, sequence main effect significant.

Need >= 1,000 words total across sections. THINK_TRACE alone >=400 words.

Let's write carefully, avoiding any betting language. No spreads, totals, moneylines, odds. The word "odds ratio" appears in the source text (paired odds ratio was 9.0). The invariant says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." Does "odds ratio" count? It's a statistical term, not betting. But to be safe, I should perhaps refer to it as "paired likelihood ratio" or just "OR" but note it's statistical. Actually, "odds" in the context of betting lines is prohibited. "Odds ratio" is a standard epidemiological/statistical measure. I think it's fine, but I can avoid the word "odds" entirely if worried. The source text says "paired odds ratio was 9.0". I'll refer to it as "paired likelihood ratio (OR)" or just "paired OR (statistical, not betting)". Better to say "paired comparative ratio" to be safe? No, OR is fine in medical stats. But the instruction is strict: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." The word "odds" is explicitly forbidden. I should avoid writing the word "odds" even in "odds ratio" to be strictly compliant. I'll say "paired comparative likelihood ratio (OR)" or just "paired likelihood ratio (OR = 9.0)". Actually, I'll write "paired likelihood ratio (OR)" but maybe avoid the word "odds". Let's just say "paired comparative ratio (labeled OR in source)" or "paired effect ratio". To be safest, I'll avoid the string "odds" entirely.

Also "ZERO TOY EQUATIONS": No invented fake ratios. Use formal LaTeX.

Let's draft.

THINK_TRACE (>=400 words):
- Start with design: randomized crossover, n=14, two conditions ICA (3x5x3s isometric back squat at 120° knee angle, 45s total contraction, 3min rest) vs VPA (9min volleyball activation).
- Primary outcome CMJ height. Measured pre and 3,6,9,12 min post.
- Key statistical finding: Period×Sequence interaction for CMJ (F(1,12)=6.94, p=0.022, ηp²=0.37). Effect only in P2 (lower training volume): ΔCMJ ICA > VPA (Δ=2.69, SE=0.62, t(12)=4.34, p=0.005, d=1.204).
- Multi-hop derivation: PAPE expression = f(potentiation, fatigue). Potentiation from ICA (myosin phosphorylation, motor unit recruitment, stiffness reduction). Fatigue from antecedent microcycle load. In M1 (higher volume), fatigue masks potentiation → null P1. In M2 (lower volume, -22% dynamic volume, -27% plyometrics), fatigue reduced → potentiation expressed → significant P2.
- Gray-zone audit:
  1. Confounding: Period is perfectly aliased with microcycle load. Cannot disentangle ICA efficacy from reduced antecedent load. The design is not a pure 2×2 factorial; Period×Sequence is entangled with M1/M2 load difference.
  2. Carry-over: Grizzle test non-significant (t(12)=1.49, p=0.162), but baseline CMJ reliability moderate (ICC=0.72, TE=2.19 cm), SWC δ=0.77 cm < TE. Measurement noise exceeds smallest worthwhile change → responder classification (Δ≥δ) is unstable.
  3. Power: n=14 powered for primary interaction only. Secondary regression sensitivity f²≥1.16 (R²≥0.54), paired contrasts d_z≥0.81. Reported regression R²=0.846 is large but with n=14 and 3 predictors, risk of overfitting and Type I error. VIF low (1.04-1.22), Cook's max 0.352.
  4. Multiple testing: ANOVA main effects/interactions across JH, PP, RSImod, CT, SST, Stiffness, Frequency, Decrement. No adjustment for family-wise error reported. Responder McNemar exact p=0.021 is hypothesis-generating.
  5. Causal mediation: Regression associates ΔStiffness₂ with ΔJH₂ (β_std=-0.495, p=0.005), but observational within-period; no EMG, no tendon mechanics, no intramuscular temperature. Associative only.
  6. Generalizability: highly trained male volleyball players only, Polish First League, preseason. Not generalizable to females, other sports, or in-season.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define variables with units.
- LaTeX for ANOVA model.
- LaTeX for ΔJH.
- LaTeX for SWC.
- LaTeX for regression model.
- LaTeX for ICC, Cohen's d, eta squared.
- Page citations: since no [PAGE N], cite sections [ABSTRACT], [METHODS], [RESULTS], [DISCUSSION], [SUPPLEMENTARY TABLE S1/S2/etc.] and note machine conversion didn't preserve page numbers.
- Breakdown regimes: n=14 breakdown for secondary analyses; SWC < TE breakdown for responder validity; high load breakdown for ICA efficacy.

RETROCAUSAL_GENEALOGY:
- Lineage from Rassier & MacIntosh 2000 (coexistence of potentiation and fatigue), Seitz & Haff 2016 (balance activation/fatigue), Blazevich & Babault 2019 (PAPE mechanisms), Wilson et al. 2013 (metabolic/neural factors), Xu et al. 2025 (optimal ~9.6s total contraction), Helbin et al. 2025 (45s best in volleyball), Jarosz et al. 2025a/b/c (isometric dose-response), Terbalyan et al. 2025 (unilateral isometric).
- Multi-week traps: microcycle M1 vs M2 load differences (-18 to -33%), 7-day washout may be insufficient for cumulative neuromuscular fatigue, period effect confounded with training phase, preseason timing means findings may not transfer to competition week.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under fatigue (high load), athletes/coaches regress to habitual VPA because ICA's benefit is masked; habit dominates when potentiation signal is weak.
- Counter-trap: Assuming ICA is universally superior because P2 shows large d=1.20; trap is applying ICA after high-load weeks when it may add fatigue without potentiation.
- Clock: Measurement clock (3/6/9/12 min) captures acute window; 7-day washout clock; microcycle clock (M1→M2). Misaligning the clock (e.g., testing too soon after heavy CA or during high-load microcycle) yields null results.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer veto: If rectus femoris stiffness does not decrease (or increases) yet CMJ improves, the proposed viscoelastic mechanism is falsified. Source shows ΔStiffness₂ associated (β_std=-0.495), but no direct tendon/neural measures.
- Biomechanical layer veto: ForceDecks CMJ without arm swing, self-selected depth; if depth or strategy varies systematically across conditions, jump height is confounded. Best attempt selection introduces selection bias.
- Environmental/weather layer veto: Controlled lab (21°C, 60% RH, blackbody calibration, emissivity 0.97-0.98). If field conditions differ (cold gym, variable humidity), SST and muscle temperature responses may differ, altering the null SST finding.
- Veto proof summary: The causal chain ICA → stiffness ↓ → CMJ ↑ is not veto-proof because it lacks central neural measures (sEMG, motor unit firing) and intramuscular metabolic data. The temperature null is robust within lab conditions but not field-proof.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable veto scenarios + predictions.
Scenario 1: High-load antecedent (M1 volume preserved) → veto: ICA effect should vanish or invert. Prediction: P1×ICA ΔCMJ ≈ P1×VPA or negative; Period×Sequence interaction non-significant when load equated across periods.
Scenario 2: Stiffness invariant → veto: If ΔStiffness₂ ≈ 0 across individuals but ΔJH₂ still improves, stiffness is not the mediator. Prediction: regression β_stiffness ≈ 0, p > 0.05; ΔSST or ΔFrequency (neural tone proxy) becomes significant.
Scenario 3: Carry-over present → veto: If 7-day washout insufficient, sequence main effect or Grizzle test significant. Prediction: t(12) for period-totals p < 0.05; ICA→VPA and VPA→ICA baselines differ at P2 pre-measurement.

I need to ensure total words >= 1000. THINK_TRACE >= 400. Let's aim for:
- THINK_TRACE: ~550 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~350 words
- RETROCAUSAL_GENEALOGY: ~250 words
- RECURSIVE_THEORY_OF_MIND: ~200 words
- CROSS_LAYER_VETO_ADJUDICATION: ~250 words
- RLVR_COUNTERFACTUAL_VETOES: ~250 words
Total ~1850 words. Good.

Need to avoid the word "odds". I'll say "paired comparative ratio (OR)" but not spell out "odds". Actually, I'll just say "paired likelihood ratio (labeled OR in source)" — but that contains "odds" if I write OR? OR stands for odds ratio but I don't need to spell it. I'll write "paired comparative likelihood ratio (OR = 9.0...)" — wait, "OR" implies odds ratio but the letters are fine. To be safe I'll write "paired comparative ratio (coded OR in the source text)" and avoid saying the word "odds".

Also no betting lines. The word "spreads" etc. won't appear.

Let's check for any toy equations: I won't invent Force/Fatigue. All equations are formal statistical models from the text.

Citations: Since page markers aren't preserved, I'll cite [ABSTRACT], [METHODS: Participants], [METHODS: Statistical analysis], [RESULTS: ANOVA], [RESULTS: Associations], [DISCUSSION], [SUPPLEMENTARY TABLE S1], etc. and explicitly state page markers were not preserved in the machine-converted text.

Let's write.

One more check: The source says "Estimate = 0.090 cm·(N/m)-1, SE = 0.025, t = -3.606" — note sign inconsistency: estimate positive 0.090 but t negative? Actually text says "Estimate = 0.090 cmꞏ(N/m)-1, SE = 0.025, t = -3.606, p = 0.005; standβ = -0.495". Probably a typo in source; standardized beta is negative. I'll note the standardized coefficient is negative. I'll use standβ = -0.495.

Also regression equation: ΔJH₂ = β₀ + β₁·Sequence + β₂·ΔStiffness₂ + β₃·ΔSST₂ + ε. Units: ΔJH in cm, ΔStiffness in N/m, ΔSST in °C.

ANOVA model for crossover:
\(Y_{ijkl} = \mu + P_i + S_j + (P\times S)_{ij} + T_k + (P\times T)_{ik} + (S\times T)_{jk} + (P\times S\times T)_{ijk} + \epsilon_{ijkl}\)
where \(i \in \{1,2\}\) periods, \(j \in \{1,2\}\) sequences, \(k \in \{pre, 3', 6', 9', 12'\}\) time points, \(l\) participants nested in sequence.

SWC: \(\delta = 0.2 \times SD_{baseline} = 0.2 \times 3.84 = 0.768 \approx 0.77\) cm.

ICC: \(ICC_{3,1}\) from two-way mixed effects, single measures.

McNemar: paired contingency of responder indicators.

Regression power: f² ≥ 1.16, R² ≥ 0.54; d_z ≥ 0.81.

Cook's distance max = 0.352, below 1 but slightly above 4/n heuristic (4/14 = 0.286). So slight influence concern.

Durbin-Watson = 1.47, p = 0.192 (no autocorrelation).

VIF 1.04–1.22 (low collinearity).

Reliability: baseline CMJ ICC₃,₁ = 0.72 (95% CI 0.33–0.90), TE = 2.19 cm, CV = 5.5%. SWC δ = 0.77 cm < TE 2.19 cm.

I will now produce the final response with the exact XML tags.

Make sure not to mention any betting terms. No "spread", "total", "moneyline", "odds". Avoid "longshot", "favorite", etc.

Let's draft carefully.
</NATIVE_REASONING>

<THINK_TRACE>
The study is a randomized crossover trial (n = 14 highly trained male volleyball players, age 27 ± 3 y) comparing a maximal isometric conditioning activity (ICA: 3 sets × 5 reps × 3-s maximal isometric back squats at 120° knee angle; 45 s total contraction; 3-min inter-set rest) against a standardized volleyball pre-training activation (VPA: 9 min mobility/plyometrics). Primary outcome: countermovement jump (CMJ) height, measured pre and at 3′, 6′, 9′, and 12′ post-conditioning. Secondary outcomes: relative peak power (PP), RSImod, contraction time (CT), rectus femoris viscoelastic properties (stiffness, oscillation frequency, logarithmic decrement), and skin surface temperature (SST). The design includes two periods (P1, P2) separated by 7 days, each preceded by a distinct training microcycle (M1 vs M2). External load fell from M1 to M2: total dynamic volume −22% (372 → 289 reps), plyometric contacts −27% (88 → 64), isometric dose −25% (80 → 60 s); lower-limb plyometrics fell −33%.

The multi-hop derivation proceeds as follows. PAPE expression is modeled as a dual-process outcome: net performance change equals potentiation minus residual fatigue. ICA is hypothesized to generate potentiation via mechanical/neural pathways (myosin regulatory light-chain phosphorylation, higher-threshold motor-unit recruitment, reduced passive muscle-tendon stiffness improving stretch-shortening-cycle efficiency). However, antecedent training load determines the fatigue offset. In P1 (following M1, higher volume), residual fatigue likely offset ICA potentiation, producing no between-condition difference. In P2 (following M2, reduced volume), fatigue was lower, so the ICA potentiation signal emerged: Period × Sequence interaction for CMJ height F(1,12) = 6.94, p = 0.022, ηp² = 0.37; simple effect in P2: ΔJH_ICA > ΔJH_VPA (Δ = 2.69 cm, SE = 0.62, t(12) = 4.34, p = 0.005, d = 1.204). PP showed the same pattern (F(1,12) = 6.47, p = 0.026; P2 d = 0.871). Responder analysis favored ICA: 9/14 ICA-only responders vs 1/14 VPA-only; McNemar exact p = 0.021. In P2, regression showed ΔJH₂ predicted by ΔStiffness₂ (standβ = −0.495, p = 0.005) but not ΔSST₂ (p = 0.974), model R² = 0.846.

Gray-zone audit. (1) Structural confounding: Period is perfectly aliased with microcycle load. The Period × Sequence interaction cannot be interpreted as a pure ICA effect because P2 systematically followed the lower-load M2. The design is not a 2 × 2 factorial disentangling intervention from antecedent fatigue; it is entangled. (2) Carry-over: Grizzle test non-significant (t(12) = 1.49, p = 0.162), but baseline CMJ reliability was only moderate (ICC₃,₁ = 0.72, 95% CI 0.33–0.90; TE = 2.19 cm; CV = 5.5%), and SWC δ = 0.77 cm < TE. Measurement error exceeds the smallest worthwhile change, so responder classification (Δ ≥ δ) is unstable and prone to misclassification. (3) Power breakdown: a priori n = 14 was powered only for the primary interaction. Secondary regression sensitivity required f² ≥ 1.16 (R² ≥ 0.54) and paired contrasts d_z ≥ 0.81. With n = 14 and three predictors, R² = 0.846 is large but risks overfitting and Type I error; no family-wise error adjustment was reported across the multiple ANOVA outcomes and mediator tests. (4) Causal inference: the stiffness–performance association is associative, not mechanistic; no EMG, motor-unit firing, tendon mechanics, or intramuscular temperature data were collected. (5) Generalizability: exclusively highly trained male volleyball players in the Polish First League during preseason; findings do not transfer to female athletes, other sports, or in-season competition weeks without replication.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
No explicit [PAGE N] markers were preserved in the machine-converted text (per the source disclaimer: “equations, tables and figures are NOT preserved – consult the PDF for those”); citations below reference section headers [ABSTRACT], [METHODS], [RESULTS], [DISCUSSION], and supplementary tables [S1–S5].

Formal model specification (crossover repeated-measures ANOVA), from [METHODS: Statistical analysis] and [RESULTS: Analysis of variance]:

Let \(i \in \{1,2\}\) index Period (P1, P2), \(j \in \{1,2\}\) index Sequence (VPA→ICA, ICA→VPA), \(k \in \{\text{pre}, 3′, 6′, 9′, 12′\}\) index Time point, and \(l\) index participant nested within sequence. The outcome \(Y_{ijkl}\) (e.g., CMJ height in cm) follows:

\[
Y_{ijkl} = \mu + P_i + S_j + (P \times S)_{ij} + T_k + (P \times T)_{ik} + (S \times T)_{jk} + (P \times S \times T)_{ijk} + \varepsilon_{ijkl}
\]

where \(\varepsilon_{ijkl} \sim \mathcal{N}(0,\sigma^2)\), sphericity assessed via Mauchly’s test (no epsilon correction required), and homogeneity via Levene’s test.

Change score operator:

\[
\Delta JH(t) = JH(t) - JH(\text{pre})
\]

with \(t \in \{3′, 6′, 9′, 12′\}\). Period aggregates were formed by averaging \(\Delta JH(t)\) across time points within each period.

Smallest worthwhile change (SWC), from [METHODS: Statistical analysis] and [RESULTS: Baseline and training load]:

\[
\delta = 0.2 \times SD_{\text{baseline}} = 0.2 \times 3.84\ \text{cm} \approx 0.77\ \text{cm}
\]

Responder rule: beneficial responder if period-aggregate \(\Delta \geq \delta\); non-response if \(|\Delta| < \delta\). Paired responder indicators compared via McNemar’s exact test (reported as a paired comparative ratio labeled OR = 9.0, 95% CI 1.25–394.48, exact p = 0.021).

P2 regression model, from [RESULTS: Associations between measured variables]:

\[
\Delta JH_2 = \beta_0 + \beta_1(\text{Sequence}) + \beta_2(\Delta \text{Stiffness}_2) + \beta_3(\Delta \text{SST}_2) + \varepsilon
\]

Units: \(\Delta JH_2\) in cm; \(\Delta \text{Stiffness}_2\) in N·m⁻¹; \(\Delta \text{SST}_2\) in °C. Reported estimates: standβ₂ = −0.495 (p = 0.005; 95% CIβ [−0.800, −0.189]); standβ₃ = 0.005 (p = 0.974; 95% CIβ [−0.306, 0.296]). Model fit \(R^2 = 0.846\), adjusted \(R^2 = 0.800\); collinearity VIF 1.04–1.22; Durbin–Watson = 1.47 (p = 0.192); Cook’s distance max = 0.352 (below 1, slightly above the 4/n heuristic = 0.286).

Effect-size operators:

\[
\eta_p^2 = \frac{F \cdot df_1}{F \cdot df_1 + df_2}
\]

benchmarks: small ≈ 0.01, medium ≈ 0.06, large ≈ 0.14. Cohen’s d: |d| ≈ 0.20 small, 0.50 moderate, 0.80 large (≥ 1.20 very large).

Reliability operator:

\[
ICC_{3,1}
\]

reported for baseline CMJ = 0.72 (95% CI 0.33–0.90; TE = 2.19 cm; CV = 5.5%); Myoton stiffness ICC = 0.68; oscillation frequency ICC = 0.70; logarithmic decrement ICC = 0.41.

Breakdown regimes: (a) Secondary-analysis underpowering at n = 14 (regression detectable only f² ≥ 1.16, R² ≥ 0.54; paired contrasts d_z ≥ 0.81); (b) responder misclassification because SWC δ = 0.77 cm < TE 2.19 cm; (c) ICA advantage conditional on reduced antecedent load (M2: dynamic volume −22%, plyometrics −27%, isometric dose −25%), so high-load antecedents may nullify or invert the effect; (d) no family-wise error control across eight outcome families in Table 2/Supplementary Table S5.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage traces to the dual-process framework of Rassier and MacIntosh (2000), who proposed that potentiation and fatigue coexist and interact to determine net post-activation outcomes. Seitz and Haff (2016) formalized the prescription problem: conditioning activity (CA) success depends on balancing activation and fatigue through intensity, volume, and rest. Tillin and Bishop (2009) and Blazevich and Babault (2019) reviewed neural and mechanical mechanisms (myosin regulatory light-chain phosphorylation, motor-unit recruitment, muscle-tendon stiffness, temperature). Wilson et al. (2013) provided the meta-analytic foundation for PAPE and power output.

The specific ICA dose lineage: French et al. (2003), Bogdanis et al. (2014), Tsoukos et al. (2016), Spieszny et al. (2022), Krzysztofik et al. (2023a), Lum et al. (2023), Grzyb and Jarosz (2025), Helbin et al. (2025), and Jarosz et al. (2025a–c) established that short (≈3 s) maximal isometric contractions are common, but total dose matters. Xu et al. (2025) meta-analyzed optimal total contraction duration at ≈9.6 s, though the estimate is biased because 58.3% of studies used 9 s protocols. Helbin et al. (2025) directly compared 9-s, 27-s, and 45-s ICA in volleyball players and found the 45-s protocol (3 × 5 × 3 s) superior for jump height and peak power—precisely the protocol used here. Terbalyan et al. (2025) extended this to unilateral isometric conditioning in volleyball.

Multi-week traps: (1) Period is confounded with microcycle because M1 and M2 differed by 18–33% in external load; the 7-day washout may be insufficient to clear cumulative neuromuscular fatigue from a higher-load preceding week. (2) Preseason timing means the low-load M2 may approximate a taper or reduced-load competition week, but the result may not generalize to in-season high-load microcycles. (3) Sequence effects (pooled ICA→VPA vs VPA→ICA) were significant for CT (F(1,12) = 5.49, p = 0.037) and Frequency (F(1,12) = 5.88, p = 0.032), indicating order-dependent baseline drift that the crossover model only partially absorbs. (4) The absence of a carry-over signal (Grizzle p = 0.162) does not prove physiological recovery; with TE = 2.19 cm on a 40.25 cm baseline, residual fatigue could remain below the detection threshold yet still suppress PAPE expression in P1.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: when an athlete enters a session carrying residual fatigue from a high-load microcycle (M1-like conditions), the neuromuscular system is in a fatigue-dominant state. Under this crisis, the rational priming response regresses to the habitual, familiar warm-up (VPA) because the ICA potentiation signal is too weak to overcome the fatigue offset. Coaches and athletes may therefore habitually select VPA after heavy weeks, not because VPA is superior, because ICA’s benefit is masked by the fatigue layer.

Counter-trap: the large P2 simple effect (d = 1.204 for CMJ; d = 0.871 for PP) creates a counter-trap of overgeneralization: practitioners may adopt ICA as a universally superior priming tool and apply it after high-load weeks, when the same protocol may add isometric fatigue without expressing potentiation, yielding null or negative net outcomes. The trap is mistaking a context-specific, readiness-dependent effect for an unconditional main effect of ICA.

Clock: three temporal layers interact. (i) Acute clock: measurements at 3′, 6′, 9′, and 12′ post-conditioning capture a narrow potentiation window; if testing occurs too early (neural fatigue still dominant) or too late (potentiation decayed), the effect is missed. (ii) Washout clock: the 7-day inter-session interval assumes carry-over clearance, but cumulative microcycle fatigue may persist beyond this window. (iii) Microcycle clock: M1 vs M2 load divergence means the intervention clock is nested inside a training-load clock; misalignment (testing ICA after M1 rather than M2) produces the P1 null result. Recursive theory of mind predicts that a coach who observes the P2 ICA benefit will update their model to “ICA works,” but if they fail to model the antecedent-load variable, they will misapply the protocol during high-load weeks, reproducing the P1 null or a fatigue-induced decrement.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: The proposed causal chain is ICA → rectus femoris passive stiffness reduction → enhanced CMJ via improved stretch-shortening-cycle elastic storage/release. The data support an association in P2 (ΔStiffness₂ standβ = −0.495, p = 0.005), but this is vetoable: if a replication measures rectus femoris stiffness and finds no reduction (or an increase) while CMJ still improves under ICA, the mechanical mediator is falsified. Furthermore, no direct tendon mechanical behavior, intramuscular pressure, or active neuromuscular data (sEMG, motor-unit firing) were obtained, so the physical layer is not veto-proof; the association could reflect a common-cause (e.g., reduced sympathetic tone lowering both stiffness and perceived exertion).

Biomechanical layer veto: CMJ was assessed without arm swing, self-selected countermovement depth, hands on iliac crests, best-of-three attempts on a ForceDecks platform (1000 Hz). If countermovement depth or jump strategy systematically differed between ICA and VPA conditions—e.g., athletes adopting deeper counters after isometric squats due to altered proprioception—jump height differences would reflect kinematic strategy rather than neuromuscular potentiation. Best-attempt selection also introduces a selection bias that can inflate condition means. This layer is not veto-proof without normalized depth or joint-kinematic tracking.

Environmental/weather layer veto: SST was measured with a FLIR E54 camera (320 × 240 px, NETD 0.05 K) at 1.0 m distance, emissivity 0.97–0.98, blackbody-calibrated, ambient 21 °C, RH 60%, no direct airflow, homogeneous background. The null SST finding (p = 0.974 for ΔSST₂ predicting ΔJH₂) is robust within this thermoneutral, controlled laboratory setting. It is not field-proof: in a cold gymnasium, unregulated humidity, or with variable airflow, skin temperature dynamics and muscle temperature responses would differ, potentially altering the balance between thermal and non-thermal PAPE mechanisms. A field replication under non-thermoneutral conditions could veto the conclusion that SST is irrelevant.

Verdict: The stiffness–CMJ association is the strongest supported layer, but because it lacks peripheral neural and intramuscular metabolic verification, the full mechanistic chain is not veto-proof. The temperature null is internally valid but externally fragile.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — High antecedent load veto. Condition: Replicate the crossover but equate microcycle load across periods (M1 ≈ M2; no −22% dynamic volume reduction). Verifiable prediction: The Period × Sequence interaction for CMJ height becomes non-significant (p ≥ 0.05); the P2 simple effect (ICA > VPA, d = 1.204) vanishes or reverses (ΔCMJ_ICA ≈ ΔCMJ_VPA or negative), confirming that ICA’s benefit is contingent on reduced preceding volume and that residual fatigue in high-load contexts vetoes potentiation.

Scenario 2 — Stiffness-invariance veto. Condition: Replicate P2 with identical ICA protocol but measure rectus femoris stiffness and find no mean change (ΔStiffness₂ ≈ 0 N·m⁻¹ across participants) while CMJ still improves. Verifiable prediction: The regression coefficient β₂ for ΔStiffness₂ drops to ≈ 0 (p ≥ 0.05), and another mediator—e.g., ΔFrequency (neural tone proxy) or an unmeasured neural variable—becomes the significant predictor of ΔJH₂; the claim that stiffness reduction underpins the ICA effect is falsified.

Scenario 3 — Carry-over veto. Condition: Replicate with the same 7-day washout but collect pre-session neuromuscular readiness markers (e.g., countermovement jump at 24 h post prior session, or perceived recovery). Verifiable prediction: The Grizzle period-total test becomes significant (t(12) p < 0.05) or the between-subjects Sequence term for baseline CMJ in P2 is significant (p < 0.05), indicating that condition order contaminated the second period; under carry-over, the Period × Sequence interaction cannot be attributed solely to ICA versus VPA and the crossover contrast (mean ΔCMJ +0.93 vs −0.94 cm, t = 2.74, p = 0.017) is invalidated.
</RLVR_COUNTERFACTUAL_VETOES>