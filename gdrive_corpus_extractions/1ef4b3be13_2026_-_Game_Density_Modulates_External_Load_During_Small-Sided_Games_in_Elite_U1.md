---
source: "2026 - Game Density Modulates External Load During Small-Sided Games in Elite U17 Soccer Players - Bejbl et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Journal of Sports Science and Medicine/In Press/2026"
pages: 27
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4598
---

<NATIVE_REASONING>
The user wants a deep analysis of a sports science paper about game density and external load in U17 soccer players. They provided the full source text. I need to produce output with these exact XML sections:

1. `<THINK_TRACE>` - Deep multi-hop derivation & gray-zone audit (>=400 words).
2. `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown.
3. `<RETROCAUSAL_GENEALOGY>` - Historical/scientific lineage & multi-week traps.
4. `<RECURSIVE_THEORY_OF_MIND>` - Crisis habit regression vs counter-trap vs clock.
5. `<CROSS_LAYER_VETO_ADJUDICATION>` - Physical/biomechanical/weather veto proof.
6. `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions.

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes.
- >= 1,000-WORD DEPTH across these exact XML sections.
- When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.

Wait, the source text doesn't have explicit page markers like [PAGE 1], [PAGE 2]. It's a continuous text. However, the user says "When source pages are provided, cite exact [PAGE N] markers". The text is from a PDF converted via pdftotext. I can infer page breaks or just cite sections? The text doesn't have page numbers explicitly. I should be careful. I can cite the source as provided, maybe use section headers or paragraph references. But the instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since pages aren't explicitly marked in the provided text, I might note that page markers were not preserved in the machine conversion (the text itself says "equations, tables and figures are NOT preserved - consult the PDF for those"). I can cite [PAGE N] where I can infer from the flow? Better to be honest: the provided text lacks explicit page-number anchors; I will cite section headers and quote verbatim where possible, noting the machine-conversion limitation. But to satisfy the invariant, I should include [PAGE N] style citations if I can map them. Actually, looking at the text, there are headers like "Bejbl et al." repeated, which might indicate page breaks. I can use approximate page references based on the PDF structure? The text says "©Journal of Sports Science and Medicine (2026) 25, 761-771". The article is 11 pages (761-771). The source text has 27 pages according to PAGES: 27? Wait, the user says PAGES: 27. But the article is 761-771 which is 11 pages. Maybe the PDF is 27 pages including references? Or maybe the user just provided a page count. I shouldn't invent page numbers. I will cite sections and note that explicit [PAGE N] markers were not preserved in the machine conversion, per the source's own disclaimer. I can use verbatim quotes.

Let's plan the content:

**THINK_TRACE (>=400 words):**
- Multi-hop derivation: Connect ApP as continuous predictor -> external load variables -> LMM results -> positional moderation -> practical implications.
- Gray-zone audit: limitations (no maturity status, observational design, limited sessions, vendor-specific HMLD threshold, no internal load, no causal inference, session-level variance boundary issues, effect sizes exploratory).
- Derive the statistical model: Y_ij = β0 + β1*ApP_ij + β2*Position_i + β3*(ApP*Position)_ij + u_i + v_j + ε_ij.
- Discuss why TD is non-monotonic (medium density highest). Why ACC/DEC null (threshold dependent).
- Effect sizes: Hedges' g from player-level means, not observations.
- Power: n=22 clusters, detectable f=0.28, but 340 observations. Hierarchical structure means inference driven by clusters.
- Gray zones: correlation among repeated measures assumed r=0.50; nonsphericity ε=1.00; session-level variance approached boundary for ACC/DEC; ApP thresholds from de Dios-Álvarez et al. (2024) may not generalize; no biological maturity assessment; Catapult S7 at 18 Hz GPS, 100 Hz IMU; individual max speed determined across observation period (could be influenced by match play outside SSGs? It says across all available training sessions and matches).

**SOURCE_OPERATORS_AND_EQUATIONS:**
- Formal LaTeX equations for LMM.
- Units: ApP in m²·player⁻¹; TD, HSR, SPRINT, HMLD in m·min⁻¹; ACC, DEC in n·min⁻¹; NSPRINTS in n·min⁻¹; %MSPEED in %; ApP thresholds: <150, 151-250, ≥251 m²·player⁻¹.
- β coefficients with CIs and p-values from Table 2.
- Sample: n=22 players, 340 observations, 67 high, 107 medium, 166 low.
- Model assumptions: residual inspection, convergence, session-level variance components.
- Breakdown regimes: ApP continuous vs categorical; ACC/DEC threshold ≥3 m·s⁻²; HMLD threshold 25.5 W·kg⁻¹ (vendor-specific); speed thresholds HSR >18 km·h⁻¹, SPRINT >24 km·h⁻¹.
- Page citations: Since explicit pages not preserved, I will cite [PAGE N] by estimating based on the article's 761-771 range? Actually, I can say [PAGE 761] for abstract, etc. But the text doesn't have page breaks. To be safe and not invent, I can cite [PAGE N] markers only where the text implicitly indicates page breaks? The text has repeated "Bejbl et al." and "External load across game densities" which are running headers/footers. I can treat those as page markers? No, that's not reliable. Better: I will cite the section (Abstract, Introduction, Methods, Results, Discussion, Table 1, Table 2, Supplementary Table S2) and verbatim quotes, and explicitly state: "Explicit printed page numbers were not preserved in the machine-converted source; citations below refer to the article's logical sections and the DOI range pp. 761–771." However, the invariant says "When source pages are provided, cite exact [PAGE N] markers". Since they aren't provided in the text, I can note their absence. But maybe I can infer: The PDF pages are 27? The user said PAGES: 27. But the article is 11 pages. Maybe the user means the source document is 27 pages? I cannot map text to specific pages. I will use [SECTION] citations instead, but to satisfy the format, I will use [PAGE N] where I can approximate from the flow? No, that would be inventing. I'll state clearly: "The machine-converted source does not retain printed page breaks; all quotes and data are verbatim from the provided text, and section-level citations are used in lieu of [PAGE N]." But the user might penalize not using [PAGE N]. Alternatively, I can assign logical page numbers based on the article's page range 761-771 (11 pages) but the text seems longer. Let's just use [PAGE N] markers sparingly and mark them as inferred? That violates "exact". Better to be honest: "No explicit [PAGE N] markers survive in the supplied machine-converted text; the source itself warns that equations, tables and figures are not preserved. Verbatim quotations and section anchors are provided instead." This is the most truthful approach.

Wait, I can look for page numbers in the text. The text includes "©Journal of Sports Science and Medicine (2026) 25, 761-771". There are no explicit "Page 1" etc. So I will cite sections and note the limitation.

**RETROCAUSAL_GENEALOGY:**
- Lineage: Casamichana & Castellano (2010) pitch size; Riboli et al. (2020, 2022, 2023) area per player; de Dios-Álvarez et al. (2024) thresholds; Owen et al. (2017) load normalization; Clemente et al. (2023) meta-analysis; Gaudino et al. (2014) mechanical load; Vampola et al. (2025) continuous thresholds; Kokstejn et al. (2024) U17 load ratios.
- Multi-week traps: microcycle timing (MD+2 to MD-1), session objectives varying by microcycle day, density-based programming across weeks, return-to-train progressions, congested microcycles, maturation tracking over time, longitudinal dose-response.
- How past studies inform current thresholds and where they break down (adult thresholds vs U17, positional rotation philosophy attenuating position effects).

**RECURSIVE_THEORY_OF_MIND:**
- Crisis habit regression: Under fatigue/congestion, coaches revert to small-sided games with low ApP to control load, but this may suppress HSR/sprint stimuli needed for adaptation; players may regress to low-intensity, high-frequency mechanical patterns.
- Counter-trap: Using high ApP to chase high-speed metrics may neglect mechanical load (ACC/DEC) and total volume, creating a "locomotor-only" adaptation gap; players may be unprepared for match deceleration demands.
- Clock: Microcycle timing (MD+2 controlled, MD-3/MD-2 high intensity, MD-1 tactical activation) interacts with density; prescribing low density on MD-1 may conflict with tactical activation needs; prescribing high density on MD+2 may overreach.
- Theory of mind: Coach models player response; player models coach intent; recursive layering of expectations about density, rotation, and individual capacity.

**CROSS_LAYER_VETO_ADJUDICATION:**
- Physical veto: Catapult S7 18 Hz GPS may underestimate peak speeds and short accelerations; 100 Hz IMU helps but vendor-specific HMLD threshold (25.5 W/kg) is a black box; breakdown regime: high-speed actions <1-2 s may be missed by GPS.
- Biomechanical veto: ACC/DEC threshold ≥3 m/s² is arbitrary; sub-threshold mechanical load ignored; deceleration becomes prominent at higher thresholds (Vampola et al. 2025); ApP manipulation alone insufficient for neuromuscular stop-start demands.
- Weather veto: Not explicitly in text, but outdoor training in Prague July-December 2025 implies weather variability (temperature, precipitation, wind) not modeled; surface conditions could affect speed and mechanical load; no weather covariates in LMM.
- Adjudication: Which veto wins? Physical measurement limits (GPS sampling) vs biomechanical threshold limits vs environmental confounds. The physical veto (device resolution) is foundational; if velocity is misestimated, all speed-derived metrics (HSR, SPRINT, %MSPEED) are biased. Biomechanical veto is secondary but critical for ACC/DEC null findings. Weather veto is unobserved confounding.

**RLVR_COUNTERFACTUAL_VETOES:**
- 3 verifiable scenarios with predictions.
1. Scenario: If ApP is increased from high (<150) to low (≥251) while holding session duration constant, predict HSR increases by >147% descriptively (Table 1 shows 7.67 to 18.95 m/min). Veto: If individual maximum speed (%MSPEED denominator) is not updated within the microcycle, %MSPEED will be mis-scaled; prediction: %MSPEED association with ApP attenuates or reverses for players who set new max speeds mid-observation.
2. Scenario: If ACC/DEC threshold lowered from ≥3 m/s² to ≥2 m/s² or continuous modeling used, predict significant ApP association emerges for mechanical load. Veto: If session-level variance remains at boundary (~0), mixed model cannot separate density effect from session noise; prediction: ApP β for ACC/DEC remains non-significant regardless of threshold unless session-level clustering is resolved.
3. Scenario: If biological maturity (e.g., % predicted adult height) is added as covariate, predict position main effects emerge for HSR/SPRINT. Veto: If n=22 clusters is fixed and maturity is collinear with position, model singularity occurs; prediction: LMM fails to converge or ApP × position interaction becomes unidentifiable due to effective sample size collapse.

Need to ensure total words >= 1000 across sections. Each section should be substantial.

Also strict invariant: ZERO BETTING LINES. No mention of odds, spreads, etc. This is a soccer training paper, so no betting content anyway.

ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Use real equations from the paper or standard LMM. Units must be SI/information/probability.

Let's draft carefully.

Structure:

<THINK_TRACE>
...
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTUAL_VETOES>

I need to include verbatim quotes. Let's pull some:

- "Larger ApP values were positively associated with HSR, SPRINT, NSPRINTS, HMLD, and %MSPEED." (Abstract)
- "no significant associations were observed between ApP and TD; ACC; or DEC." (Abstract)
- "The relative area per player (ApP) was treated as the primary independent variable, and calculated as the total pitch area divided by the number of active players participating in each game." (Methods)
- "high density (ApP < 150 m2·player-1); medium density (ApP 151 - 250 m2·player-1); and, low density (ApP ≥ 251 m2·player-1)." (Methods)
- "A total of 340 individual player observations were included in the final analysis..." (Methods)
- "Under these assumptions, the available sample size (n = 22) was sufficient to detect effects of at least medium magnitude (Cohen’s f = 0.28)." (Methods)
- "According to Catapult OpenField documentation, the default HMLD threshold is 25.5 W·kg-1." (Methods)
- "Session-level variance components differed between outcome variables, with greater session clustering observed for HMLD, TD, and %MSPEED, whereas ACC and DEC demonstrated minimal sessionlevel variance contribution." (Results)
- "For selected acceleration-based outcomes, session-level variance approached the boundary of the parameter space, indicating minimal session-level clustering for these variables." (Methods)
- "Because formal equivalence testing, minimal detectable change thresholds, or device-specific reliability-based bounds were not applied, non-significant associations for TD, ACC, and DEC should not be interpreted as evidence of true invariance..." (Discussion)

Equations:
LMM: \(Y_{ijk} = \beta_0 + \beta_1 \text{ApP}_{ijk} + \boldsymbol{\beta}_2^\top \text{Position}_{ij} + \boldsymbol{\beta}_3^\top (\text{ApP}_{ijk} \times \text{Position}_{ij}) + u_i + v_j + \epsilon_{ijk}\)
where \(i\) = player, \(j\) = session, \(k\) = observation.
\(u_i \sim \mathcal{N}(0, \sigma^2_u)\), \(v_j \sim \mathcal{N}(0, \sigma^2_v)\), \(\epsilon_{ijk} \sim \mathcal{N}(0, \sigma^2_\epsilon)\).

Relative change: \(\Delta_{\text{High}\to\text{Low}} = 100 \times \frac{\bar{Y}_{\text{Low}} - \bar{Y}_{\text{High}}}{\bar{Y}_{\text{High}}}\) (%).

Effect size: Hedges' \(g\) from player-level aggregated means.

Power: \(f = 0.28\), \(\alpha = 0.05\), \(1-\beta = 0.80\), \(n=22\), repeated measures = 3, \(r=0.50\), \(\epsilon=1.00\).

Thresholds:
HSR > 18 km·h⁻¹
SPRINT > 24 km·h⁻¹
ACC/DEC ≥ 3 m·s⁻²
HMLD > 25.5 W·kg⁻¹ (vendor-specific)
ApP categories: <150, 151-250, ≥251 m²·player⁻¹.

Breakdown/singularity:
- Session-level variance at boundary (\(\sigma^2_v \to 0\)) for ACC/DEC.
- ApP × position interaction non-significant; exploratory effect sizes only.
- No equivalence testing; absence of evidence ≠ evidence of absence.
- Device: Catapult S7, 18 Hz GPS, 100 Hz IMU; between-scapulae placement.

Now word count. I need >= 1000 words total. I'll write generously in each section.

Let's write.

THINK_TRACE: Start with the causal chain. ApP is continuous. Larger ApP -> more space -> higher velocities -> HSR, SPRINT, etc. But TD not affected because medium density balances movement and involvement. ACC/DEC not affected because threshold and constraints. Position doesn't moderate statistically but effect sizes show patterns. Gray zones: observational, no causality, maturity not measured, vendor-specific thresholds, session variance boundary, limited sessions, microcycle confounding. Multi-hop: from raw GPS to metabolic power model to HMLD; from ApP categories to continuous modeling; from statistical significance to practical effect sizes.

SOURCE_OPERATORS_AND_EQUATIONS: Formal math, units, breakdown regimes. Mention page citation limitation. Cite verbatim.

RETROCAUSAL_GENEALOGY: Cite Casamichana 2010, Riboli 2020/2022/2023, de Dios-Alvarez 2024, Owen 2017, Clemente 2023, Gaudino 2014, Vampola 2025, Kokstejn 2024. Multi-week traps: microcycle density prescription, maturation windows, return-to-train, congested fixtures.

RECURSIVE_THEORY_OF_MIND: Coach-player recursive modeling. Crisis habit regression: under load pressure, coaches compress space (low ApP) to reduce speed, but lose sprint stimulus. Counter-trap: maximizing ApP for speed creates mechanical underload. Clock: MD+2 to MD-1 sequencing.

CROSS_LAYER_VETO_ADJUDICATION: Physical (GPS 18 Hz), biomechanical (threshold 3 m/s²), weather (unmodeled Prague July-Dec). Adjudication hierarchy.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios with vetoes and predictions.

I need to be careful about word count. Let's aim for ~200-250 words per section minimum, total >1000.

Let's start writing.

I will not use [PAGE N] since none exist, but I will reference sections and quotes. Actually, to be safe with the invariant "When source pages are provided...", I'll include a note in SOURCE_OPERATORS_AND_EQUATIONS that page markers are absent. But I can also create logical page citations based on the provided text's flow? No, that's fabrication. I'll state it clearly.

Let's write the response now.
</NATIVE_REASONING>

<THINK_TRACE>
The core inferential chain in Bejbl et al. (2026) is a multi-hop derivation from task constraint to physiological output. The primary independent variable is relative area per player (ApP), computed as total pitch area divided by active player count (m²·player⁻¹). ApP is modeled as a continuous fixed effect in linear mixed-effects models (LMMs), with repeated observations clustered within players and session-level variance components added to account for microcycle day (MD+2 to MD-1) and session objectives. The dependent variables are time-normalized external load indicators: total distance (TD, m·min⁻¹), high-speed running (HSR, >18 km·h⁻¹, m·min⁻¹), sprint distance (SPRINT, >24 km·h⁻¹, m·min⁻¹), number of sprints (NSPRINTS, n·min⁻¹), accelerations (ACC, ≥3 m·s⁻², n·min⁻¹), decelerations (DEC, ≥3 m·s⁻², n·min⁻¹), high metabolic load distance (HMLD, m·min⁻¹, vendor threshold 25.5 W·kg⁻¹), and maximal-speed exposure (%MSPEED, % of individual maximum).

Hop 1: ApP → available space → transition distance. The authors state verbatim that "Larger ApP provides more space and longer transition distances, enabling higher running speeds." This predicts positive ApP coefficients for velocity-dependent metrics. Hop 2: ApP → mechanical load. The constraints-led perspective holds that smaller ApP increases opponent pressure and short actions, but the data show no significant ApP association for ACC or DEC. This decoupling is a gray zone: the null result may reflect the chosen ≥3 m·s⁻² threshold, the 18 Hz Catapult S7 GPS sampling limit, or the absence of touch limitations/pressing rules that would force deceleration events. Hop 3: ApP × position. The LMM finds no significant interaction, yet supplementary Hedges’ g effect sizes from player-level aggregated means reveal large practical contrasts (e.g., CB vs ST for SPRINT g = -1.15 in low density). This is a gray zone between statistical non-significance and practical relevance.

The power analysis is itself a gray zone: G*Power approximated the LMM as a repeated-measures ANOVA with n = 22 clusters, r = 0.50, ε = 1.00, yielding a minimum detectable Cohen’s f = 0.28. Because inferential power in mixed models is driven by the number of independent subjects (clusters) rather than the 340 observations, smaller position or interaction effects may have remained undetected. Descriptively, TD peaks in medium density (95.17 m·min⁻¹) rather than low density (89.00 m·min⁻¹), violating a monotonic dose-response and suggesting an intermediate-constraint optimum for total movement volume. This non-linearity must be held separately from the monotonic increases in HSR (7.67 → 18.95 m·min⁻¹), SPRINT (0.40 → 3.00 m·min⁻¹), and NSPRINTS (0.05 → 0.19 n·min⁻¹).

The exact singularity/breakdown regimes include: (a) session-level variance approaching the boundary of the parameter space for ACC and DEC, meaning the model cannot separate density effects from session noise for those outcomes; (b) no equivalence testing or minimal detectable change bounds, so non-significant p-values cannot be interpreted as true invariance; (c) ApP thresholds borrowed from de Dios-Álvarez et al. (2024) may not generalize beyond this Czech U17 cohort; and (d) individual maximum speed (%MSPEED denominator) was determined across all training sessions and matches, introducing potential contamination from match-play outliers not present in SSGs.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Explicit printed page numbers were not preserved in the machine-converted source text; the source itself warns that equations, tables, and figures are not preserved. All citations below refer to logical sections and verbatim passages from the provided text (DOI: https://doi.org/10.52082/jssm.2026.761; pp. 761–771).

Formal model. Let observation k be nested within player i and session j. The LMM for each external load outcome Y is:

\[
Y_{ijk} = \beta_0 + \beta_1 \cdot \text{ApP}_{ijk} + \boldsymbol{\beta}_2^{\top}\mathbf{Position}_{ij} + \boldsymbol{\beta}_3^{\top}(\text{ApP}_{ijk}\times\mathbf{Position}_{ij}) + u_i + v_j + \epsilon_{ijk}
\]

with random effects \(u_i \sim \mathcal{N}(0,\sigma_u^2)\) (player), \(v_j \sim \mathcal{N}(0,\sigma_v^2)\) (session), and residuals \(\epsilon_{ijk} \sim \mathcal{N}(0,\sigma_\epsilon^2)\). ApP is continuous; density categories (<150, 151–250, ≥251 m²·player⁻¹) are descriptive only.

Units and thresholds (verbatim from Methods):
- ApP: m²·player⁻¹; high density ApP < 150; medium 151–250; low ≥251.
- TD: m·min⁻¹.
- HSR: m·min⁻¹, speed > 18 km·h⁻¹.
- SPRINT: m·min⁻¹, speed > 24 km·h⁻¹.
- NSPRINTS: n·min⁻¹.
- ACC: n·min⁻¹, ≥ 3 m·s⁻².
- DEC: n·min⁻¹, ≥ 3 m·s⁻².
- HMLD: m·min⁻¹, metabolic power > 25.5 W·kg⁻¹ (Catapult vendor-specific).
- %MSPEED: %, speed expressed relative to individual maximum observed during the period.

Fixed-effect estimates from Table 2 (verbatim):
- HSR: β = 0.0360, 95% CI [0.008, 0.064], p = 0.013.
- SPRINT: β = 0.0068, 95% CI [0.001, 0.013], p = 0.020.
- NSPRINTS: β = 0.0005, 95% CI [0.0001, 0.0009], p = 0.015.
- HMLD: β = 0.0820, 95% CI [0.015, 0.149], p = 0.017.
- %MSPEED: β = 0.0410, 95% CI [0.006, 0.076], p = 0.023.
- TD: β = -0.0150, p = 0.513; ACC: ns; DEC: ns.

Sample and power:
- n = 22 male U17 players, age 16.6 ± 0.47 years.
- N = 340 player-observations: 67 high-density, 107 medium-density, 166 low-density.
- Sensitivity analysis: α = 0.05, 1−β = 0.80, repeated measurements = 3, r = 0.50, ε = 1.00, detectable f = 0.28 (medium).

Breakdown/singularity regimes:
- Session-level variance approached boundary for ACC and DEC ("minimal session-level clustering"), indicating the random-effects structure is unidentified for those outcomes.
- No equivalence testing; absence of statistically detectable association ≠ evidence of true invariance for TD, ACC, DEC.
- HMLD is vendor-specific (Catapult OpenField default 25.5 W·kg⁻¹), limiting cross-device comparability.
- Device: Catapult S7 GPS at 18 Hz, triaxial accelerometers/gyroscopes at 100 Hz, positioned between scapulae.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The study sits inside a well-documented lineage of area-per-player research. Casamichana and Castellano (2010) established pitch size as a determinant of time-motion and heart-rate demands in small-sided games; Riboli et al. (2020, 2022, 2023) extended this to elite soccer by proposing ApP as the macro-constraint for replicating match external load; de Dios-Álvarez et al. (2024) supplied the exact density thresholds (<150, 151–250, ≥251 m²·player⁻¹) used here. Owen et al. (2017) and Beato et al. (2023) argued for time-normalized load (m·min⁻¹) to compare tasks of differing volume, which Bejbl et al. apply consistently. Clemente et al. (2023) meta-analytic evidence shows larger areas systematically increase high-speed and sprint distances, matching the present β coefficients. Gaudino et al. (2014) and Clemente et al. (2023) caution that mechanical indicators (ACC/DEC) show weaker, less consistent pitch-size coupling than locomotor metrics—a warning the current null ACC/DEC findings echo. Vampola et al. (2025) demonstrate that mechanical load is intensity- and age-sensitive, with deceleration gaining prominence at higher thresholds, which may explain why a single ≥3 m·s⁻² cutoff yielded no ApP effect.

Multi-week traps emerge when this lineage is applied across a microcycle. The data span MD+2 through MD-1 with distinct session objectives (controlled exposure, higher-intensity stimulus, pre-match activation). A coach who blindly applies low-density formats (ApP ≥251) every week to chase HSR and %MSPEED may accumulate excessive high-speed volume during congested periods, raising overload risk (Gabbett, 2016; Malone et al., 2017a). Conversely, prescribing high-density formats (ApP <150) across multiple weeks to limit sprint exposure may systematically underload wide players and strikers, for whom exploratory effect sizes show large deficits in sprint-related metrics (e.g., CB vs ST SPRINT g = -1.15). Maturation is a latent multi-week variable: biological maturity was not assessed, yet Philippaerts et al. (2006) and Lloyd & Oliver (2012) show sprint capacity and load tolerance diverge sharply during adolescence. A fixed ApP prescription therefore interacts with a moving maturation target over a 4–6 week block, creating a retraining trap where early-season density thresholds become inappropriate by late season as players grow stronger and faster.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The coach–player system forms a recursive theory-of-mind loop. Layer 1: the coach models how ApP reshapes each player’s action space (more room → higher speeds; less room → more pressing and short actions). Layer 2: the player models the coach’s intent and modulates effort accordingly (e.g., holding back on MD-1 tactical activation despite a large ApP). Layer 3: the coach observes the player’s modulated response and updates the density prescription for the next session.

Crisis habit regression occurs under microcycle pressure: when congestion or fatigue mounts, coaches reflexively compress pitch size (low ApP, high density) to “control” load and reduce injury risk. The regression is toward short, frequent mechanical actions because space is constrained, but the data show ACC and DEC do not significantly scale with ApP anyway, so the crisis move may neither reduce mechanical load meaningfully nor protect against overload; it primarily suppresses HSR, SPRINT, and %MSPEED, exactly the qualities needed for match readiness.

The counter-trap is the mirror error: maximizing ApP to elicit high-speed and sprint exposure (large positive β for HSR, SPRINT, NSPRINTS, HMLD, %MSPEED) while ignoring that TD does not increase and ACC/DEC remain unresponsive. A squad fed only large-area games develops locomotor capacity without proportional neuromuscular stop-start robustness, creating an adaptation gap for match deceleration and change-of-direction demands.

The clock variable is microcycle timing. MD+2 is controlled exposure; MD-3 and MD-2 are high-intensity; MD-1 is tactical activation. Prescribing low-density SSGs on MD-1 conflicts with activation goals; prescribing high-density on MD-2 may overreach when the aim is high-intensity stimulus. Because session-level variance was substantial for HMLD, TD, and %MSPEED, the clock (session context) is a non-negligible confounder that the LMM partially partitions but cannot fully eliminate with only 4 sessions and 22 clusters.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Three veto layers compete to explain the null ACC/DEC findings and the robustness of the HSR/SPRINT results.

Physical veto (measurement): The Catapult S7 samples GPS at 18 Hz and IMU at 100 Hz. Short accelerations and decelerations under 1–2 seconds may be attenuated or missed by GPS position differentiation, and the vendor-specific metabolic power model behind HMLD is a black box (25.5 W·kg⁻¹ threshold). If peak velocity is underestimated, all speed-derived outcomes (HSR, SPRINT, %MSPEED) carry downward bias, yet the ApP coefficients remain significant, suggesting the physical veto is not strong enough to erase the locomotor signal. For ACC/DEC, however, the 18 Hz GPS plus a rigid ≥3 m·s⁻² threshold is a genuine measurement floor; sub-threshold mechanical work is invisible to the model.

Biomechanical veto (operationalization): ACC and DEC were counted only at ≥3 m·s⁻². Vampola et al. (2025) show mechanical load is intensity-dependent and that deceleration becomes increasingly prominent at higher thresholds. Thus, ApP manipulation may alter low-intensity or continuous mechanical load without changing the count of discrete ≥3 m·s⁻² events. The biomechanical veto explains why no ApP association emerged despite theoretical expectations from Casamichana et al. (2012) and Riboli et al. (2022).

Weather veto (environment): Data were collected outdoors in Prague from July to December 2025. Temperature, precipitation, wind, and surface conditions were not modeled as covariates. Cold or wet conditions can reduce maximal speed and alter deceleration behavior independently of ApP. Because session-level variance was significant for HMLD, TD, and %MSPEED, unmeasured weather confounds may be absorbed into session random effects or residual error, attenuating fixed-effect estimates.

Adjudication: The physical veto is foundational—if velocity and acceleration are mis-measured, every downstream metric is biased. However, because the locomotor results survive despite GPS limits, the physical veto does not overturn the main ApP–HSR/SPRINT conclusions. The biomechanical veto is the stronger explanation for the ACC/DEC nulls: the threshold choice and device resolution jointly create a breakdown regime where mechanical load is under-captured. The weather veto is plausible but untestable from the provided text; it acts as a secondary confound rather than a primary veto.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Threshold downshift counterfactual: If the ACC/DEC threshold is lowered from ≥3 m·s⁻² to ≥2 m·s⁻² or modeled continuously (per Vampola et al., 2025), more mechanical events enter the outcome space.
Prediction: ApP fixed effects for ACC and DEC become statistically significant (p < 0.05) with positive β values, because smaller ApP increases opponent pressure and short stop-start actions.
Veto: Session-level variance for ACC/DEC already approached the boundary of the parameter space (σ²ᵥ → 0). If session noise cannot be separated from density effects, the LMM remains unidentified regardless of threshold choice; prediction is vetoed unless additional sessions or a different random-effects structure are added.

Scenario 2 — Maturity covariate counterfactual: If biological maturity status (e.g., % predicted adult height) is added as a player-level covariate, and maturity is collinear with playing position in this academy cohort.
Prediction: Position main effects for HSR and SPRINT emerge as statistically significant, and the ApP × position interaction may reach significance because early-maturing attackers express greater high-speed outputs in large-area games.
Veto: With n = 22 clusters fixed, adding a continuous maturity covariate plus position dummies plus interaction terms risks effective sample-size collapse and model singularity (West et al., 2022). The LMM may fail to converge or produce inflated standard errors, vetoing the prediction.

Scenario 3 — Individual maximum-speed refresh counterfactual: If each player’s %MSPEED denominator is recomputed weekly rather than fixed across the full observation period (July–December 2025).
Prediction: The ApP coefficient for %MSPEED (β = 0.0410, p = 0.023) weakens or becomes non-significant, because players who set new personal maximum speeds in matches will have inflated denominators, compressing SSG %MSPEED values and attenuating the density relationship.
Veto: %MSPEED showed substantial session-level clustering (variance component 180.0). If session context (MD+2 vs MD-1) dominates speed exposure more than ApP, refreshing the denominator weekly will not isolate the density effect; the coefficient may remain unchanged because the session random effect absorbs the variance, vetoing the prediction.
</RLVR_COUNTERFACTUAL_VETOES>