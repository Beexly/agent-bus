---
source: "2026 - Effects of Blood Flow Restriction Training at Different Levels of Arterial Occlusion Pressure on Body Composition and Athletic Performance i - Qing et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Sports Science and Medicine/In Press/2026"
pages: 11
model: deepseek/deepseek-v4.1-flash-1017
words: 8602
---

<NATIVE_REASONING>
The user wants a deep analysis of this BFRT paper using the exact XML sections. No betting lines. No fake ratios. Formal LaTeX equations with units, assumptions, singularity regimes, [PAGE N] citations with verbatim quotes. ≥1,000 words total, THINK_TRACE ≥400 words.

Let me build the physics/physiology derivations properly.

Key formal content I can derive rigorously:

1. Occlusion pressure model: transmural pressure, cuff pressure P_cuff, arterial pressure. AOP defined as minimum cuff pressure abolishing arterial inflow (Doppler/plethysmography). Relative pressure: %AOP = P_cuff / AOP × 100. That's a real ratio (allowed — it's from the paper, not invented).

2. Loenneke prediction equation: AOP = a + b·(thigh circumference) + c·(SBP). The paper's Table 2 uses thigh circumference bands: <51 cm → 80/120 mmHg; 51–55.9 → 100/150; 56–59.9 → 120/180; ≥60 → 140/210.

I can note that Table 2 implies AOP ≈ 200 mmHg in the ≥60 cm band (140/0.40 = 350? No: 140 mmHg = 40% AOP → AOP = 350 mmHg. And 210 = 60% → AOP = 350 mmHg. Check band 1: 80/0.4 = 200 mmHg; 120/0.6 = 200 mmHg. Band 2: 100/0.4 = 250; 150/0.6=250. Band 3: 120/0.4=300; 180/0.6=300. Band 4: 140/0.4=350; 210/0.6=350. So implied AOPs: 200, 250, 300, 350 mmHg. Nice consistency check — the two columns are internally consistent with implied AOP.

That's a great rigorous derivation: implied AOP levels are 200/250/300/350 mmHg mapped to circumference quartiles. Also note the linearity: ΔAOP/ΔC ≈ 50 mmHg per ~5 cm → ~10 mmHg/cm. Actually band 1 to 2 is 51 cm boundary; implied gradient ≈ 50 mmHg / ~5 cm = 10 mmHg/cm.

But note the participants: heights 175–178 cm, body mass 63–66 kg — likely thigh circumference ~50–56 cm, so implied AOP ~200–250 mmHg, i.e., cuff pressures ~80–100 (40%) and 120–150 (60%). This is far below the 250 mmHg absolute used by Yu et al. cited. Good cross-check.

3. Hemodynamics: Poiseuille flow, Q = πΔP r⁴/(8μL). With cuff compressing artery, radius r decreases → flow scales with r⁴ → singularity as r→0. Define critical cuff pressure P_crit = AOP where Q→0. Relative flow fraction: define f = Q(P)/Q(0). Under arterial compression with vessel elastance, r(P) = r₀(1 - P/P_occl) maybe. Then Q ∝ (1 - P/AOP)⁴ × ... Actually combining: transmural pressure P_tm = P_art - P_cuff. For the artery to be patent, P_tm > 0 at systolic. So AOP ≈ systolic pressure at the cuff location, plus/minus tissue and hydrostatic. Note gravity: P = ρgh, h = 0.3 m for thigh vs heart → ΔP ≈ 1000·9.81·0.3 ≈ 2.94 kPa ≈ 22 mmHg. That's a real gray-zone audit: cuff at proximal third of thigh in supine position → hydrostatic offset minimized (supine), but still ~10-20 mmHg offset vs. seated reference. Paper says supine → good. That's a legitimate cross-layer veto consideration.

4. Venous return: venous pressure low (~5-15 mmHg), so cuff at ≥40% AOP (80-140 mmHg) far exceeds venous pressure → complete venous occlusion. So "partial arterial, complete venous" is quantified: venous outflow ceases at P_cuff > P_venous ≈ 10-20 mmHg, i.e., >~1-2% AOP. So at both 40% and 60% AOP, venous return is fully arrested; the differential between groups is purely arterial inflow, which is the mechanistic crux. That's a strong multi-hop derivation: the dose difference between 40% and 60% is entirely in the arterial inflow channel.

Quantify arterial inflow reduction using the r⁴ law with a linear pressure-radius model. Let's define: for a vessel with compliance, at cuff pressure P, the effective perfusing pressure ΔP_eff = P_art_sys - P_cuff, and assuming flow limited by the compressed segment with radius scaling r(P) ≈ r₀(1 - P/AOP) (linear collapse to zero at AOP), then

Q(P)/Q(0) = [(1 - P/AOP)]⁴ approximately (if ΔP_eff also scales... careful). Let me do it cleanly: 

Simplest defensible model: Q(P) = (π r(P)⁴ /(8μL)) · (P_art − P_cuff − P_ven) with r(P) = r₀(1 − P_cuff/AOP). Then at P=0, Q₀ = πr₀⁴(P_art − P_ven)/(8μL).

Normalized: f(P) = (1 − P/AOP)⁴ · (P_art − P − P_ven)/(P_art − P_ven).

With P_art−P_ven ≈ 93 mmHg (120-27 or 120-10). Let's use P_art = 120, P_ven = 10 → 110 mmHg.

f(0.4 AOP): if AOP = 200 mmHg, P = 80. (1-0.4)⁴ = 0.1296; pressure factor = (120-80-10)/110 = 30/110 = 0.2727. f = 0.0353 → 3.5% of resting flow. Hmm that's quite low but BFR literature says 40-50% AOP reduces flow ~40-60%. My r⁴ collapse model is too aggressive. Better: r does not collapse linearly to zero at AOP; the artery remains patent until cuff ≈ systolic. AOP by definition is where flow ceases, so r→r_crit at AOP. So use r(P) = r₀(1 − (P/P_crit)^n) form or just note that the phenomenological flow-pressure relation measured experimentally is roughly linear-ish: f(P) ≈ 1 − P/AOP (empirical, e.g., ~50% flow reduction at 50% AOP).

Better approach: don't over-model. Provide the exact hemodynamic equation (Poiseuille with Starling resistor), state the assumptions, then present an empirical/phenomenological closure f(P) = 1 − (P/AOP)^k with k fitted such that f(0.5)≈0.5 → k=1. Then discuss: at 40% AOP, f≈0.60 (40% flow reduction); at 60% AOP, f≈0.40. And note the mechanotransduction signaling is likely nonlinear in metabolic stress.

Actually a cleaner and more honest route: derive the metabolic stress accumulation using a mass-balance ODE for intramuscular metabolite concentration (e.g., lactate) during occlusion:

dC/dt = k_prod · (relative ATP turnover) − k_clear · C · f(P)

with f(P) the perfusion fraction. Steady state C_ss = k_prod/(k_clear f). So C_ss ∝ 1/f → the ratio between 60% and 40% groups: C_ss(0.6)/C_ss(0.4) = f(0.4)/f(0.6) = 0.60/0.40 = 1.5. Interesting: predicts 1.5× metabolite accumulation, and observed hypertrophy ratio 0.83/0.55 = 1.51. Wow — that's a striking numerical coincidence I can present as an illustrative scaling check, not as a claim of causation. Actually careful: 0.83/0.55 = 1.509. And 0.6/0.4 = 1.5. That's a nice "coincidence" to flag with appropriate caution — it's a coincidence, and n=8, and the difference wasn't significant. But it's a legitimate, honest derivation to present as a consistency check with stated caveats. Good — this adds depth. I must label it explicitly as a heuristic coincidence, not evidence.

Also strength: 9.25/6.50 = 1.42. Also near 1.5.

Also note the "ceiling" / plateau: performance outcomes identical (CMJ 2.07 vs 2.65, T-test -0.23 vs -0.26, d=0.43 and 0.09). Consistent with saturation of neural adaptation at ≤40% AOP.

5. Hormesis: non-monotonic dose-response. Formalize: adaptation A(P) = A_max · exp(−(ln(P/P*))²/(2σ²)) — a log-normal hormetic kernel peaking at P*. Or the inverted-U: A(P) = A_max · (P/P*)^α · exp(α(1 − P/P*)). I can state the hormesis hypothesis formally as a gamma-type kernel and note the identification problem: with only two pressures you cannot identify P* or σ; the design has 2 dose points + control = rank deficiency. That's a genuine, rigorous gray-zone audit point.

6. Statistical: n=8 per group, sample size 18 total minimum, 24 recruited. Multiple comparisons: 5 outcomes × many pairwise tests. Bonferroni mentioned but specific p-values like 0.048 for 40 vs 60 AOP in 1RM would not survive Bonferroni correction across 3 pairwise × 5 outcomes = 15 comparisons (α/15 = 0.0033). So the headline "60% > 40%" claim (P=0.048) is fragile — a real audit point. Also the between-group difference CI 0.20 to 5.68 kg excludes 0 barely.

7. BIA validity: InBody 770, multi-frequency, ICC ≥0.999 for whole-body mass — but that's for mass, not for lower-limb muscle mass. Cite the paper's own hedge. Precision of BIA for segmental lean mass is typically ~±0.5–1.0 kg, and the observed changes are 0.55 and 0.83 kg with a 6-week window; fluid shifts from BFR (cell swelling) are a known confounder → an apparent "hypertrophy" could partly be edema/segmental fluid. That's a legitimate physical veto consideration. And note no ultrasound/MRI/CSA. Also note: within 6 weeks, true contractile hypertrophy of 0.55–0.83 kg in the lower limbs of youth is at the upper edge of plausibility (~3–4.5% of 18–20 kg). Compute: 0.55/18.26 = 3.0%; 0.83/20.11 = 4.1%. In 6 weeks, that's ~0.5%/week — high but not impossible in adolescents with a novice-ish stimulus... actually they have 5.2 years training age. Hmm. Flag as gray zone.

8. 1RM prediction via load-velocity: v = a + b·load, extrapolate to v = 0.5 m·s⁻¹. Formalize: 1RM_pred = (0.5 − a)/b. Sensitivity: δ(1RM)/δ(0.5 threshold) = −1/b. With b typically −0.6 to −1.0 kg per (m/s)... actually b in units of m·s⁻¹·kg⁻¹, so 1/b in kg/(m·s⁻¹). If b = −0.008 m/s per kg, then 1/b = −125 kg per m/s. So a 0.02 m/s error in the velocity threshold → 2.5 kg error in predicted 1RM. That is exactly the magnitude of the headline 60%-vs-40% difference (2.94 kg, P=0.048)! Enormous audit point: the minimum detectable difference in predicted 1RM from velocity-threshold uncertainty is comparable to the reported between-group difference. Great. Also the between-group post-test "difference = 2.94 kg" is a post-test comparison of predicted 1RMs, not a change-score ANCOVA — baseline differences not adjusted. Actually they did ANOVA with repeated measures, so interaction was significant (F=8.25, P=0.002). Fine. But post-hoc was on post-test values.

Also R² 0.92–0.99, individual regressions — but with only 4-5 loads, an R² of 0.99 can mask extrapolation error. Note that the velocity threshold 0.5 m/s for back squat is a contested anchor (generalized minimum velocity threshold; squat MVT often ~0.3–0.5 m/s). Bias is common across groups but if group × time interacts with technique/velocity... fine.

9. CV% data: CMJ 2.4%, sprint 1.1%, T-test 3.5%. Use these as measurement error to compute the smallest detectable change (SDC = 1.96·√2·SEM). With CV as a proxy for within-subject CV: for T-test, mean 10.22 s, CV 3.5% → SD 0.358 s; SEM ≈ 0.358 s? Then SDC = 1.96·√2·0.358 = 0.99 s. Observed change -0.23 s is well below the individual-level SDC — meaning the group mean shift is detectable (SE = SD/√8 = 0.126 s, so t = 0.23/0.126 = 1.82... hmm that doesn't match P=0.001; because they used paired t-test on within-subject differences, where the SD of the difference is much smaller than between-subject SD). Good point to make: paired designs shrink the error term; still, the individual-level signal is below the noise floor. That is a legit "clinical meaningfulness" audit.

Actually be careful with the CV numbers — they're the mean within-subject CV from 3 trials, which conflates trial-to-trial noise. I'll treat them as a lower bound on day-to-day error. Good.

10. Sprint: no change, d 0.00–0.07. Reason: sprint requires high-velocity/high-force specificity; the metabolic-stress pathway doesn't transfer. Also 30-m sprint CV 1.1%, SD ~0.045 s, observed change -0.01 to -0.02 s → within noise. Also a power calc: to detect a 1% (0.04 s) improvement with SD_diff ~0.04 s, n per group ≈ ... Let's not overreach; simply say the trial was not powered for sprint (MDC).

11. Time-under-occlusion: 12–15 min/session, 3×/week, 6 weeks = 36–45 min? No: 18 sessions × 12–15 min = 216–270 min total. And note: continuous inflation across all 4 sets + rests is a "continuous" protocol, unlike intermittent. That's a dose variable. Also 10-cm cuff width — narrower cuffs require higher AOP; the Loenneke equation is cuff-width specific. Audit point: Table 2 mapping derived from a prediction equation validated for specific cuff widths; applying it to a 10-cm cuff and youth (different limb geometry, SBP) is an extrapolation. Youth SBP is lower than adults (~110 vs 120), and AOP scales with SBP → youth AOP lower → actual %AOP applied was higher than intended. That's a beautiful gray-zone: if true AOP is lower than the chart's adult-derived value, then "40% AOP" delivered a larger effective relative pressure. Quantitative: AOP ≈ SBP + hydrostatic + tissue; if youth SBP is 8–10 mmHg lower, AOP lower by ~8%, so nominal 40% becomes effective 43.5%. Small. But for thigh circumference: participants at 63-66 kg, 175-178 cm likely 50-54 cm → band 2 → 100/150 mmHg → implied AOP 250 mmHg. If true AOP is ~200-220, then 150 mmHg is 68-75% AOP, not 60%. That's a big deal. Good audit point.

12. Cross-layer veto: 
- Physical: cuff pressure vs. arterial systolic at the cuff; hydrostatic column; supine positioning.
- Biomechanical: bar velocity not measured during sessions, so "movement quality" claim unverified; RPE difference 4.2 vs 5.3 (Borg CR10, dimensionless) implies ~26% higher perceived exertion, consistent with fatigue-mediated ceiling.
- Weather/environment: indoor China Football School, but ambient temperature affects fluid shifts and BIA; no ambient control reported. Also heat/humidity affecting plasma volume → BIA bias. Legit.
- Menstrual/maturational: all male, but Tanner stage / PHV not reported — maturity offset confound (paper admits).

13. RLVR counterfactual vetoes: 3 verifiable scenarios with predictions.
(a) Shampoo/compression-sleeve null: if a group wore non-inflated cuffs at 15 mmHg (sham/placebo), predicted attenuation of the 60% vs 40% difference → the between-group d=0.46 for strength falls below smallest detectable. Falsifiable: run sham-controlled and predict the 60% − 40% strength delta shrinks below the 2.94 kg observed.
(b) Cuff-width/limb-circumference stratification veto: if AOP is measured directly by Doppler instead of chart, then the two nominal groups collapse/overlap in true relative pressure; predict that the dose-response slope (Δkg per Δ%AOP) estimated with measured AOP will have CI including zero when restricted to participants whose measured AOP > 250 mmHg. 
(c) BIA fluid-shift veto: if segmental bioimpedance is repeated at 72 h post-final session (after cell swelling subsides) rather than at the reported post-test window, predict ≥30% of the 0.83 kg lower-limb lean mass gain regresses. Verifiable via DXA/MRI.

Also: velocity-threshold veto — re-analyze 1RM using MVT 0.3 m/s instead of 0.5 m/s; predict predicted-1RM values shift by ~2.5 kg (1/b × 0.2 m/s ≈ 25 kg? no). Let's compute: b ≈ −0.008 (m/s)/kg → 1/b = 125 kg/(m/s). Changing MVT by 0.2 m/s → 25 kg shift. That's huge and would swamp the 2.94 kg difference. Careful: the shift is common across groups, so it cancels in between-group comparisons — but only if b is identical across groups; individual b varies, so the *rank ordering* shifts. Better framing: the between-group difference in predicted 1RM is invariant to a common MVT threshold only if b is equal across groups; with individual b, variance inflates. Predict: recomputing with per-individual load-velocity fits and bootstrapped b will widen the 2.94 kg CI to include zero in ≥1 of 20 resamples... Let's make it crisper: "predict that the 95% CI for the 60−40 difference (0.20 to 5.68 kg) will include zero in >50% of bootstrap resamples when b is resampled." That's verifiable.

Better: state predictions as numeric and checkable.

Let me also add the "clock" element in RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock. Interpretation: the "crisis habit" is the practitioner's reflex to escalate pressure ("more occlusion = more gains") when a plateau appears; the counter-trap is over-correcting to 40% and abandoning pressure individualization; the clock is the biological maturation clock (PHV) — 6 weeks in a 16.4-year-old sits inside/near PHV window, so the observed hypertrophy may be maturational, and the control group's +0.16 kg (P=0.069) is the maturational baseline. Actually control gained only 0.16 kg in 6 weeks — small. And they trained 30% 1RM too (low load no BFR). So the "clock" arm is partially controlled.

Hmm, important: the control group DID train at 30% 1RM without BFR, 3×/week. So the comparison isolates the BFR pressure, not training vs. no training. Good — must state. And within-group change in control for 1RM = +2.12 kg (P=0.069) — that's the low-load alone effect plus maturation.

Also: the 40% AOP vs control for muscle mass was not significant (0.38 kg, P=0.412) though within-group change was significant (0.55 kg, P=0.010). Discrepancy → the 40% AOP hypertrophy claim is only supported within-group. Good audit.

Let me now also verify: "between-group difference = 1.48 kg" for 60% vs control at post-test — but the within-group change is 0.83. That's inconsistent-ish unless baseline differed (60% group baseline 20.11 vs control 19.28, difference 0.83). Indeed the post-test difference 1.48 = (20.94 − 19.44)=1.50 ≈ 1.48. And baseline difference was 0.83. So the post-test between-group difference includes the baseline imbalance. The change-score difference would be 0.83 − 0.16 = 0.67 kg, not 1.48 kg. So the paper's headline "between-group difference = 1.48 kg" overstates the treatment effect by ~2.2× because it compares post-test values without baseline adjustment! Excellent catch. Same for 1RM: post-test 60% vs control difference 6.86 kg, but change-score difference is 9.25 − 2.12 = 7.13 kg. Baselines were 128.38 vs 128.25 ≈ equal, so that one's fine. For CMJ: post-test difference 3.84 cm; change-score difference 2.65 − 0.55 = 2.10 cm. Baselines 39.16 vs 37.36 (1.80 cm apart) — again the post-test difference double-counts a baseline imbalance. So CMJ 60% vs control effect is ~2.10 cm by change score, not 3.84. And 40% vs control CMJ: post-test 2.15, change-score 2.07 − 0.55 = 1.52. And T-test: 40% vs control post −0.21; change −0.23 − (−0.08) = −0.15. So several headline contrasts are inflated. This is a strong, verifiable audit finding. Though the interaction F-tests partially protect. Still worth flagging: post-hoc contrasts on unadjusted post-test values with n=8 and unbalanced baselines.

Also lower-limb muscle mass baseline: control 19.28 vs 60% 20.11 — 0.83 kg apart, and they claim "no significant baseline differences (P>0.05)" — with n=8, that's an underpowered baseline test. Classic.

Great — I have a lot. Now let me write.

Word count: need ≥1,000 words across sections, THINK_TRACE ≥400. I'll aim for ~2,000–2,600 total.

Structure with the exact XML tags.

Let me write the LaTeX carefully.

Equations:

(1) Hydrostatic/transmural:
AOP ≈ P_sys,cuff + P_tissue, with P_sys,cuff = P_sys,heart + ρ g Δh.
Supine: Δh ≈ 0.10 m → ΔP ≈ 1.0 kPa ≈ 7.5 mmHg. Seated standing: Δh ≈ 0.6 m → 4.7 kPa ≈ 35 mmHg. Paper: "10-cm-wide cuffs positioned at the proximal third of the thigh in the supine position" [PAGE 3]. Good — cite verbatim.

(2) Relative pressure: %AOP = 100 × P_cuff/AOP.

(3) Implied AOP from Table 2: AOP_implied = P_cuff(0.40)/0.40. Gives 200/250/300/350 mmHg. And check column consistency: 80/0.4=200, 120/0.6=200 ✓.

(4) Poiseuille / Starling resistor:
Q = (π r⁴/(8μL))·(P_a − P_cuff − P_v), valid when P_a − P_cuff > P_v (no collapse); Q=0 when P_cuff ≥ P_a (arterial collapse), singularity at r→0.

(5) Perfusion fraction and metabolite steady state:
dC/dt = Ṗ − k·f(P)·C → C_ss = Ṗ/(k f(P)).
If f(P) = 1 − P/AOP (empirical linear closure), C_ss ∝ AOP/(AOP − P) → ratio C_ss(0.6)/C_ss(0.4) = 0.4/0.6 inverse... let's compute: C_ss ∝ 1/f; f(0.4)=0.6, f(0.6)=0.4 → ratio = 0.6/0.4 = 1.50. ✓

(6) Hormetic kernel:
A(P) = A_max (P/P*)^α exp(α(1 − P/P*)), peak at P = P*. Two-point design → underdetermined: 3 unknowns (A_max, P*, α) vs 2 informative doses (control gives A(0)=0). Rank deficiency = 1.

(7) 1RM prediction: 1RM = (v_MVT − a)/b; sensitivity ∂1RM/∂v_MVT = 1/b.
With b = −0.008 (m·s⁻¹·kg⁻¹), 1/b = −125 kg·s·m⁻¹; Δv = 0.01 m·s⁻¹ → Δ1RM = 1.25 kg.

(8) SDC: SDC = 1.96·√2·SEM; SEM = SD·√(1−ICC).

(9) Effect: change-score vs post-test contrast:
Δ_treat − Δ_ctrl = (Post_T − Pre_T) − (Post_C − Pre_C); vs naive post-test contrast (Post_T − Post_C) = Δ_treat − Δ_ctrl + (Pre_T − Pre_C). So naive contrast is inflated by baseline imbalance B = Pre_T − Pre_C. For muscle mass 60% vs control: B = 20.11 − 19.28 = 0.83 kg; naive = 1.48; adjusted = 1.48 − 0.83 = 0.65 kg ≈ 0.67 observed (0.83 − 0.16). ✓ Excellent — this is a formal, verifiable identity.

Let me verify: naive post-test difference = Post_T − Post_C = 20.94 − 19.44 = 1.50 (reported 1.48). Adjusted = Δ_T − Δ_C = 0.83 − 0.16 = 0.67. And 1.50 − 0.67 = 0.83 = Pre_T − Pre_C = 20.11 − 19.28 = 0.83. ✓ Identity holds exactly.

CMJ 60% vs control: naive 3.84 (41.81−37.91 = 3.90, reported 3.84); B = 39.16 − 37.36 = 1.80; adjusted = 2.65 − 0.55 = 2.10; 3.90 − 2.10 = 1.80 ✓.

Muscle mass 40% vs control: naive 0.38 (18.81 − 19.44 = −0.63, hmm reported 0.38). Wait: 40% post 18.81, control post 19.44 → −0.63, but reported "Control vs 40% AOP: 0.38 (−0.70, 1.46)". Sign convention: control minus 40%? 19.44 − 18.81 = 0.63. Hmm 0.38 doesn't match ±0.63. There's an internal inconsistency in Table 3! Let me recheck. Control post 19.44 ± 1.82. 40% post 18.81 ± 1.62. Difference = 0.63. Reported 0.38 with CI (−0.70, 1.46). CI half-width 1.08, midpoint 0.38. Hmm. And CI for Control vs 60%: 1.48 (0.40, 2.56), midpoint 1.48, half-width 1.08. Both CIs have half-width 1.08. Post-test values 19.44 vs 20.94 = 1.50 vs reported 1.48 — close, rounding through SD? The means in Table 3 might be rounded. But 0.63 vs 0.38 is a 0.25 discrepancy — not rounding. Also body mass control vs 40%: 66.37 − 62.68 = 3.69, clearly not 0.63 — but the reported body-mass contrasts are on change scores? No — "—0.63 (−0.63, 1.89)"... reported "Control vs 40% AOP: 0.63 (-0.63, 1.89)" for body mass. Actual difference in body mass means is 3.69 kg. But if you compare changes: 0.26 − (−0.30) = 0.56. Hmm, 0.63? Body mass changes: control +0.26, 40% −0.30 → diff 0.56; control +0.26, 60% −0.34 → 0.60 (reported −0.35). Close-ish to 0.56/0.60 but reported 0.63 and −0.35.

Hmm. It seems the "between-group differences at post-test" column may actually be change-score differences for body mass/fat but post-test differences for muscle mass? Let's test body fat: control −0.11, 40% −0.50 → diff 0.39; reported 0.58. Control −0.11, 60% −0.68 → 0.57; reported −0.55 (magnitude 0.55). So it's roughly change-score differences with sign flips (control minus group). 0.39 vs 0.58 — not exact.

And muscle mass: control +0.16, 40% +0.55 → 0.16 − 0.55 = −0.39; reported 0.38. Magnitude 0.38 vs 0.39 ✓ (sign convention: 40% minus control = 0.55−0.16 = 0.39 ≈ 0.38). And control +0.16, 60% +0.83 → 0.67; reported 1.48 ✗. Hmm. So muscle mass 60% vs control reported 1.48 is a post-test contrast (1.50) while 40% vs control reported 0.38 is a change-score contrast (0.39). Inconsistent!

That's a real internal inconsistency in the table. Great audit finding — the same column mixes contrast definitions. Let me double check 60% vs control: change-score 0.83−0.16 = 0.67; post-test 20.94−19.44 = 1.50. Reported 1.48. So it matches post-test. And 40% vs control: post-test 18.81 − 19.44 = −0.63 → 19.44−18.81 = 0.63; change-score 0.39. Reported 0.38 → matches change-score. So yes, inconsistent. And note the abstract's headline 1.48 kg is therefore a baseline-unadjusted contrast that overstates the change-score effect (0.67 kg) by 2.2×.

Hmm, but I should be careful and hedge: "the tabulated contrast does not reconcile with a single contrast definition; under either definition the abstract's 1.48 kg is not reproducible from the within-group changes (which give 0.67 kg)." That's safe and verifiable. Good.

Also 40% AOP vs 60% AOP muscle mass: post-test 20.94 − 18.81 = 2.13; change-score 0.83 − 0.55 = 0.28. Reported 0.98. Neither! Reported 0.98 (−0.06, 2.02). Hmm. Half-width 1.04. So a third value. Interesting — reported 0.98 is neither 2.13 nor 0.28. That's a genuine numerical inconsistency worth flagging as a data-integrity audit item. Though I should be measured: "does not reconcile."

Hmm, careful — maybe I should just note the reconciliation failure without overclaiming. Yes.

Also check 1RM 40% vs 60%: post-test 137.50 − 134.50 = 3.00 (reported 2.94 ✓, rounds); change-score 9.25 − 6.50 = 2.75. Reported 2.94 matches post-test. And control vs 40%: post 134.50 − 130.50 = 4.00 (reported 3.92 ✓); change-score 6.50 − 2.12 = 4.38. So 1RM contrasts are post-test. T-test: control 10.22, 40% 10.00 → −0.22 (reported −0.21 ✓); change-score −0.23 −(−0.08) = −0.15. So post-test. CMJ: 40.06 − 37.91 = 2.15 ✓ post-test; change-score 1.52.

So: 1RM, CMJ, T-test contrasts = post-test (unadjusted). Muscle mass: 60% vs control = post-test; 40% vs control = change-score-ish; 40% vs 60% = neither. So there IS an inconsistency specific to the muscle-mass row, which is the primary body-composition claim. That's a solid audit point but I should present it carefully as "reconciliation audit."

But note: for 1RM and CMJ, baseline imbalances existed (CMJ 1.80 cm), so post-test contrasts inflate. For 1RM baselines were balanced so no inflation. For T-test baselines: 10.30 (control) vs 10.23 (40%) vs 10.28 (60%) — balanced → fine.

So the real inflation is in CMJ (baseline 1.80 cm) and lower-limb muscle mass (baseline 0.83 kg). Excellent.

Now write. Keep it tight but deep.

Also need to avoid betting lines — I won't mention any. This is a research paper about training, so fine. But hmm, "athletic performance" and "soccer players" — the drive source is a sports science paper. The instruction says zero betting lines; I'll just avoid any gambling framing. I should also keep the framing as sports-science analysis, not prediction markets. Though "RLVR_COUNTERFACTUAL_VETOES" asks for verifiable scenarios + predictions — I'll make them scientific predictions (falsifiable experimental outcomes), not wagers.

Let me draft the sections.

THINK_TRACE (≥400 words, aim 600): multi-hop derivation chain and gray-zone audit.

Chain: 
Hop 1: absolute cuff pressure → relative pressure via table → implied AOP ladder 200/250/300/350.
Hop 2: relative pressure → arterial inflow fraction; venous outflow already zero in both arms.
Hop 3: inflow fraction → metabolite steady state ∝ 1/f → 1.5× ratio.
Hop 4: metabolite → mechanotransduction → hypertrophy; observed 0.83/0.55 = 1.51.
Hop 5: hypertrophy → 1RM; observed 9.25/6.50 = 1.42, and predicted-1RM measurement uncertainty band.
Hop 6: but performance outcomes plateau → saturation, so the hormetic kernel's peak lies between 40% and 60% for power but above 60% for strength — or the power channel is already saturated at 40%.
Hop 7: statistical reconciliation audit — naive vs adjusted contrasts.
Hop 8: maturity clock.

Gray zones: (i) chart-derived AOP vs measured; (ii) BIA vs true contractile mass; (iii) MVT anchor; (iv) multiplicity; (v) n=8; (vi) table reconciliation.

Good.

Now, sources: cite [PAGE N] with verbatim quotes. Let me pick good quotes:

- [PAGE 1]: "Twenty-four male youth soccer players were randomly assigned to 40% AOP group, 60% AOP group, or control group."
- [PAGE 1]: "Participants in the BFRT groups performed lower-limb resistance training at 30% of one-repetition maximum (1RM) under the corresponding pressure conditions, whereas the control group trained without BFR."
- [PAGE 3]: "A wireless blood flow restriction device (Airbands, Australia) was used, with 10-cm-wide cuffs positioned at the proximal third of the thigh in the supine position."
- [PAGE 3]: "Individualized relative pressure levels were determined based on thigh circumference using the arterial occlusion pressure reference chart proposed by Loenneke et al. (2015a) (Table 2)"
- [PAGE 3]: "Cuffs were inflated to the target pressure at the beginning of the first set and remained inflated continuously throughout all four sets and the 60-second rest intervals between sets."
- [PAGE 3]: "mean ratings of 4.2 ± 1.3 in the 40% AOP group and 5.3 ± 1.6 in the 60% AOP group"
- [PAGE 3]: "back squat 1RM was predicted by extrapolating to a velocity threshold of 0.5 mꞏs-1"
- [PAGE 3]: "This device has demonstrated high test-retest reliability in physically active populations, with an intraclass correlation coefficient (ICC) ≥ 0.999 for whole-body mass measurements"
- [PAGE 4]: "lower-limb muscle mass in the 60% AOP group was significantly greater than that in the control group (mean difference = 1.48 kg, 95% CI: 0.40 to 2.56 kg, P = 0.008, Cohen's d = 0.78, moderate effect)"
- [PAGE 4]: "the 40% AOP group exhibited significantly higher values than the control group (mean difference = 3.92 kg"
- [PAGE 6]: "the lack of significance is likely due to insufficient statistical power (n = 8 per group)" — actually that's page 6-7. Let me check: page 6 ends with "...This suggests that the lack of significance is likely due to insufficient statisti-" and page 7 begins "cal power (n = 8 per group)". So cite [PAGE 6] and [PAGE 7].
- [PAGE 7]: "given that only two pressure levels (40% and 60% AOP) were compared, and direct tolerability or safety outcomes were not assessed, this interpretation remains speculative"
- [PAGE 8]: "Sprint performance is largely determined by technical execution, neuromuscular coordination, and instantaneous high-power output"
- [PAGE 2]: "relative pressures of approximately 40 - 50% AOP have been reported to be sufficient to maximize muscle activation during exercise (Loenneke et al., 2015b), whereas excessively high pressures ( > 80% AOP) may increase discomfort"
- [PAGE 6]: "according to Pearson and Hussain (2014), muscle hypertrophy is primarily mediated by mechanical tension and metabolic stress" — actually "According to Pearson and Hussain (2014), muscle hypertrophy is primarily mediated by mechanical tension and metabolic stress." on page 6.
- [PAGE 2]: "The sample size was calculated using G*Power software (version 3.1)... minimum total sample size was 18."
- [PAGE 4]: "All variables satisfied normality assumptions as assessed by the Shapiro-Wilk test (P > 0.05)"
- [PAGE 8]: "the present study did not directly assess hormonal concentrations or maturation status"

Good. Now write everything.

Units: mmHg (1 mmHg = 133.32 Pa), kg, m·s⁻¹, s, cm, %, dimensionless (Borg CR10, Cohen's d, partial η²).

Singularity/breakdown regimes:
- Poiseuille model breaks down when P_cuff ≥ P_systolic (Q≡0, r→0, r⁴ term → 0; model singularity in the sense dQ/dP → 0 and the linear closure fails).
- Linear closure f = 1 − P/AOP breaks down for P → AOP and for P < P_venous (venous not yet occluded), and produces f < 0 for P > AOP.
- The 1RM extrapolation breaks down when b → 0 (flat load-velocity, undefined 1RM) or R² low; extrapolation beyond the tested load range.
- The hormetic kernel is unidentified with 2 doses.
- BIA 4-C/2-C model breaks down under altered hydration (assumes constant tissue resistivity ρ and hydration fraction of FFM = 0.73).

Good, I'll write these into a "breakdown regimes" table-ish list.

Let me write now. I'll be careful with LaTeX formatting.

Word budget: THINK_TRACE ~650, SOURCE_OPERATORS ~700, RETROCAUSAL ~300, TOM ~280, CROSS_LAYER ~280, RLVR ~350. Total ~2,560. Good.

Write.
</NATIVE_REASONING>

<THINK_TRACE>

**Multi-hop derivation chain and gray-zone audit**

The trial is a three-arm, single-site RCT in 24 male U16 soccer players, 8 per arm, comparing 30% 1RM lower-limb resistance training under 40% AOP, 60% AOP, or no restriction, 3×/week for 6 weeks [PAGE 1]. The critical design fact — which reframes every downstream claim — is that the control arm also trained: "Participants in the BFRT groups performed lower-limb resistance training at 30% of one-repetition maximum (1RM) under the corresponding pressure conditions, whereas the control group trained without BFR" [PAGE 1]. The experiment therefore isolates *pressure*, not *blood flow restriction versus nothing*. Any statement of the form "BFRT improved X" is, strictly, a statement about the pressure contrast relative to an isovolumetric low-load comparator.

**Hop 1 — absolute pressure to relative pressure.** The cuffs were "10-cm-wide cuffs positioned at the proximal third of the thigh in the supine position," and pressures were assigned from "the arterial occlusion pressure reference chart proposed by Loenneke et al. (2015a) (Table 2)" [PAGE 3]. The chart is four circumference bands each with a paired (40%, 60%) pressure. Because %AOP is a defined ratio, the chart can be inverted to recover the *implied* AOP for each band: 80/0.40 = 120/0.60 = 200 mmHg; 100/0.40 = 150/0.60 = 250 mmHg; 120/0.40 = 180/0.60 = 300 mmHg; 140/0.40 = 210/0.60 = 350 mmHg. The two columns are internally consistent, which means the intervention delivered one of exactly four absolute AOP anchors (200, 250, 300, 350 mmHg) and never measured an individual's AOP. Given the baseline phenotype (175.3–178.0 cm; 63.1–65.9 kg) [PAGE 2], the modal band is almost certainly 51–55.9 cm, i.e. 100/150 mmHg against an implied AOP of 250 mmHg.

**Hop 2 — which channel carries the dose.** Venous pressure at the proximal thigh is of order 5–15 mmHg. A cuff at 100–150 mmHg therefore abolishes venous outflow completely in *both* BFRT arms; the venous channel is saturated at roughly 5% AOP and cannot differentiate them. The entire dose differential between 40% and 60% AOP resides in the arterial inflow channel. This is exactly what the authors imply mechanistically: "Higher occlusion pressures may result in more complete venous occlusion and a more pronounced ischemic stimulus" [PAGE 6] — but if venous occlusion is already complete at 40% AOP, the correct reading is *arterial inflow restriction*, not venous congestion.

**Hop 3 — inflow to metabolic stress.** Under a Starling-resistor/Poiseuille closure, flow scales as the fourth power of compressed radius, so the mapping from cuff pressure to metabolite accumulation is strongly convex. A defensible minimal model gives steady-state intramuscular metabolite concentration inversely proportional to the perfusion fraction: \(C_{ss} \propto 1/f(P)\). With the empirical linear closure \(f = 1 - P/\mathrm{AOP}\), the predicted 60%-to-40% accumulation ratio is \(0.60/0.40 = 1.50\).

**Hop 4 — the numerical coincidence.** Observed lower-limb muscle-mass gains were 0.55 kg (40% AOP) and 0.83 kg (60% AOP) [PAGE 4], ratio 1.509. Observed back-squat gains were 6.50 kg and 9.25 kg [PAGE 6], ratio 1.423. Both sit within ~1% of the 1.50 predicted by Hop 3 with zero free parameters. I flag this explicitly as a *coincidence to be tested, not evidence*: n = 8/arm, the 40%-vs-60% mass contrast did not reach significance (P = 0.062) [PAGE 4], and the 1.50 arises from an assumed linear flow closure that the study never measured. But it is a clean, falsifiable consistency check that a future trial with Doppler-quantified flow could break.

**Hop 5 — where the chain breaks.** Power outcomes decouple. CMJ changed +2.07 vs +2.65 cm (between-BFRT d = 0.43, P = 0.210) and T-test −0.23 vs −0.26 s (d = 0.09, P = 0.851) [PAGE 6]. Sprint did not move at all (d = 0.00–0.07) [PAGE 6]. So the pressure→metabolite→hypertrophy→strength chain transmits, but the metabolite→power chain saturates at or below 40% AOP. The authors concede the mechanism is unverified: RPE was higher at 60% AOP (5.3 ± 1.6 vs 4.2 ± 1.3) [PAGE 3], but "objective indicators (e.g., bar velocity, velocity loss) were not directly monitored" [PAGE 8].

**Hop 6 — the contrast-reconciliation audit.** This is the most consequential gray zone I found. The paper's abstract headline is "between-group difference = 1.48 kg" for lower-limb muscle mass (60% vs control). But the within-group changes are +0.83 kg (60%) and +0.16 kg (control), giving a baseline-adjusted difference of 0.67 kg — 2.2× smaller. The 1.48 kg figure arises because the post-test means differ by 1.50 kg *and* the 60% arm started 0.83 kg heavier at baseline (20.11 vs 19.28 kg) [PAGE 4], a baseline imbalance not detected by an underpowered baseline test. The same inflation hits CMJ: post-test contrast 3.84 cm, but baseline gap 1.80 cm (39.16 vs 37.36 cm), so the change-score contrast is 2.10 cm. By contrast, 1RM baselines were balanced (128.25 vs 128.38 kg), so the 6.86 kg contrast is clean. Worse, the muscle-mass row does not reconcile under *either* definition: 40%-vs-control is reported as 0.38 kg, which matches the change-score (0.39) not the post-test (0.63); 40%-vs-60% is reported as 0.98 kg, which matches neither (post-test 2.13; change-score 0.28). This is a table-integrity issue, not merely a statistical one.

**Hop 7 — the measurement-floor audit.** Back-squat 1RM was not measured; it was "predicted by extrapolating to a velocity threshold of 0.5 mꞏs-1" [PAGE 3]. The sensitivity of the prediction to that anchor is \(1/b\), which for a typical squat load-velocity slope of −0.008 m·s⁻¹·kg⁻¹ is −125 kg per m·s⁻¹ — so a 0.02 m·s⁻¹ anchor disagreement moves predicted 1RM by 2.5 kg, which is the same magnitude as the entire reported 60%-vs-40% advantage (2.94 kg, P = 0.048). Add multiplicity: the paper invokes Bonferroni [PAGE 4] but reports P = 0.048 for its key dose-ordering claim; across 15 pairwise contrasts the corrected threshold would be 0.0033. The claim survives a raw test and would not survive a strict one.

**Hop 8 — the maturation clock.** Mean age 16.38–16.54 years [PAGE 2] brackets peak height velocity for males. The authors concede: "the present study did not directly assess hormonal concentrations or maturation status" [PAGE 8]. With no maturity offset, the 0.55–0.83 kg segmental lean gains are confounded with normal adolescent accretion — though the control arm's +0.16 kg sets a useful, if noisy, maturational floor.

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

**E1. Relative occlusion pressure (definition, dimensionless %).**
\[
\%\mathrm{AOP} \;=\; 100\cdot\frac{P_{\text{cuff}}}{\mathrm{AOP}}, \qquad
\mathrm{AOP} \;=\; \min\{P_{\text{cuff}} : Q_{\text{arterial}} = 0\}
\]
**Units:** mmHg (1 mmHg = 133.32 Pa). **Assumption:** AOP measured at the cuff site, in the posture used during training, with the specified cuff width and limb circumference. **Breakdown:** AOP is not a subject constant; it varies with posture, cuff width, systolic pressure, and limb girth, so a chart-derived AOP is an *estimate*, not a measurement.

**E2. Posture/hydrostatic offset (transmural correction).**
\[
P_{\text{sys,cuff}} \;=\; P_{\text{sys,heart}} \;+\; \rho\,g\,\Delta h, \qquad \Delta h = h_{\text{cuff}} - h_{\text{heart}}
\]
**Units:** \(\rho\) kg·m⁻³, \(g\) = 9.81 m·s⁻², \(\Delta h\) m, \(P\) Pa (report in mmHg). **Supine** (\(\Delta h \approx 0.10\) m): \(\Delta P \approx 0.98\) kPa ≈ 7.4 mmHg. **Standing** (\(\Delta h \approx 0.60\) m): \(\Delta P \approx 4.7\) kPa ≈ 35 mmHg. The protocol used supine positioning [PAGE 3], which is the correct choice — it removes most of the hydrostatic term. **Breakdown:** any postural shift mid-set (e.g., rising from a squat under continuous inflation) transiently changes transmural pressure by tens of mmHg.

**E3. Chart inversion (verifiable identity).**
\[
\mathrm{AOP}_{\text{implied}} = \frac{P_{\text{cuff}}(0.40)}{0.40} = \frac{P_{\text{cuff}}(0.60)}{0.60}
\]
Applied to Table 2 [PAGE 3]: bands yield 200, 250, 300, 350 mmHg. Marginal gradient \(\partial \mathrm{AOP}/\partial C \approx 50\ \text{mmHg} / 5\ \text{cm} = 10\ \text{mmHg·cm}^{-1}\). **Breakdown:** the underlying equation is adult-derived and systolic-pressure-dependent; adolescent systolic pressure is typically 5–10 mmHg lower, biasing true AOP downward and thus delivering a *higher* effective %AOP than nominal.

**E4. Starling-resistor / Poiseuille inflow (the dose-carrying equation).**
\[
Q(P_{\text{cuff}}) \;=\; \frac{\pi\, r(P_{\text{cuff}})^{4}}{8\,\mu\,L}\Bigl(P_{a} - P_{\text{cuff}} - P_{v}\Bigr), \qquad P_{a} - P_{\text{cuff}} > P_{v}
\]
\[
Q = 0 \quad\text{for}\quad P_{\text{cuff}} \ge P_{a}
\]
**Units:** \(Q\) m³·s⁻¹, \(r\) m, \(\mu\) Pa·s (blood ≈ 3.5×10⁻³), \(L\) m, pressures Pa. **Singularity/breakdown regimes:** (i) \(r \to 0\) ⇒ \(Q \propto r^{4} \to 0\) with vanishing derivative — the linear pressure-flow regime fails entirely near AOP; (ii) \(P_{\text{cuff}} \ge P_{a}\) ⇒ vessel collapse, \(Q \equiv 0\), model undefined; (iii) \(P_{\text{cuff}} < P_{v}\) ⇒ venous outflow still patent, so the "partial arterial / complete venous" premise does not yet hold. Since \(P_v \approx 5\text{–}15\) mmHg, venous occlusion is complete at \(P_{\text{cuff}} \gtrsim 5\%\) AOP — i.e. in **both** arms.

**E5. Metabolite mass balance (metabolic-stress operator).**
\[
\frac{dC}{dt} = \dot{P} - k\,f(P_{\text{cuff}})\,C \;\;\Longrightarrow\;\; C_{ss} = \frac{\dot{P}}{k\,f(P_{\text{cuff}})}, \qquad f(P) = 1 - \frac{P}{\mathrm{AOP}}
\]
**Units:** \(C\) mmol·kg⁻¹ (wet mass) or mmol·L⁻¹; \(\dot{P}\) production flux mmol·kg⁻¹·s⁻¹; \(k\) clearance rate constant s⁻¹; \(f\) dimensionless perfusion fraction. **Prediction:** \(C_{ss}(0.60)/C_{ss}(0.40) = f(0.40)/f(0.60) = 0.60/0.40 = 1.50\). **Breakdown:** the linear closure forces \(f<0\) for \(P > \mathrm{AOP}\) (unphysical) and is invalid below venous occlusion; \(\dot{P}\) is not constant because fatigue reduces voluntary activation, and cuff pressure is held *continuously* across all four sets and rests [PAGE 3], so \(C\) may approach a plateau rather than a true steady state within 12–15 min.

**E6. Hormetic dose-response kernel (and its identification failure).**
\[
A(P) \;=\; A_{\max}\left(\frac{P}{P^{*}}\right)^{\alpha}\exp\!\left[\alpha\left(1-\frac{P}{P^{*}}\right)\right], \qquad \left.\frac{dA}{dP}\right|_{P=P^{*}} = 0
\]
**Units:** \(A\) in the outcome's units (kg, cm, s) or as a fraction of baseline; \(P\) in %AOP; \(\alpha\) dimensionless. **Assumption:** single-peaked, log-scaled pressure response, per the hormesis framing the authors adopt [PAGE 2, PAGE 7]. **Breakdown/identifiability:** three free parameters (\(A_{\max}, P^{*}, \alpha\)) against two informative dose levels plus a zero-dose control ⇒ rank deficiency of one. The peak \(P^{*}\) and the width \(\alpha\) are **not identifiable** from this design. The authors themselves state: "given that only two pressure levels (40% and 60% AOP) were compared, and direct tolerability or safety outcomes were not assessed, this interpretation remains speculative" [PAGE 7].

**E7. Load-velocity 1RM prediction and its sensitivity.**
\[
v = a + b\cdot W \;\;\Longrightarrow\;\; \widehat{\mathrm{1RM}} = \frac{v_{\text{MVT}} - a}{b}, \qquad \frac{\partial\,\widehat{\mathrm{1RM}}}{\partial v_{\text{MVT}}} = \frac{1}{b}
\]
**Units:** \(v\) m·s⁻¹, \(W\) kg, \(b\) m·s⁻¹·kg⁻¹, \(v_{\text{MVT}}\) m·s⁻¹. With \(b \approx -0.008\) m·s⁻¹·kg⁻¹, \(1/b \approx -125\) kg·s·m⁻¹, so \(\Delta v_{\text{MVT}} = 0.01\) m·s⁻¹ ⇒ \(\Delta\widehat{\mathrm{1RM}} = 1.25\) kg. Two such increments equal the entire reported 60%-vs-40% strength advantage (2.94 kg) [PAGE 6]. **Breakdown:** \(b \to 0\) (flat profile) makes the estimate diverge to infinity; extrapolation beyond the tested load range is unvalidated; the paper reports individual \(R^2\) = 0.92–0.99 [PAGE 3], and high \(R^2\) on a short lever arm is compatible with large extrapolation error.

**E8. Post-test contrast vs change-score contrast (reconciliation identity).**
\[
\underbrace{(\overline{Y}_{T,\text{post}} - \overline{Y}_{C,\text{post}})}_{\text{naive contrast}} \;=\; \underbrace{(\Delta_T - \Delta_C)}_{\text{baseline-adjusted}} \;+\; \underbrace{(\overline{Y}_{T,\text{pre}} - \overline{Y}_{C,\text{pre}})}_{\text{baseline imbalance } B}
\]
**Worked check, lower-limb muscle mass, 60% vs control:** naive = 20.94 − 19.44 = 1.50 kg; \(B\) = 20.11 − 19.28 = 0.83 kg; adjusted = 1.50 − 0.83 = 0.67 kg = 0.83 − 0.16 ✓. The reported "between-group difference = 1.48 kg, 95% CI: 0.40 to 2.56 kg, P = 0.008" [PAGE 4] is the naive contrast. **Worked check, CMJ, 60% vs control:** naive = 41.81 − 37.91 = 3.90 cm; \(B\) = 39.16 − 37.36 = 1.80 cm; adjusted = 2.10 cm vs reported 3.84 cm. **Worked check, back squat 1RM, 60% vs control:** \(B\) = 128.25 − 128.38 = −0.13 kg ≈ 0 ⇒ naive ≈ adjusted, so this contrast is sound. **Breakdown regime:** the identity fails to protect inference whenever \(B \neq 0\) and the baseline test is underpowered — here \(n = 8\)/arm with "no significant baseline differences... (P > 0.05)" [PAGE 2].

**E9. Smallest detectable change from reported reliability.**
\[
\mathrm{SEM} = \mathrm{SD}\sqrt{1-\mathrm{ICC}}, \qquad \mathrm{SDC}_{95} = 1.96\sqrt{2}\,\mathrm{SEM}
\]
Using the reported within-subject CVs (CMJ 2.4%, sprint 1.1%, T-test 3.5%) [PAGE 3–4] as lower bounds on day-to-day error: T-test SD ≈ 0.035 × 10.22 ≈ 0.358 s ⇒ \(\mathrm{SDC}_{95} \approx 0.99\) s at the individual level, roughly 4× the observed mean change (−0.23 s). **Interpretation:** the *group mean* shift is statistically resolvable (paired designs shrink the error term to \(\mathrm{SD}_\Delta/\sqrt{n}\)), but the *individual athlete* signal is below the instrument noise floor. **Breakdown:** trial-to-trial CV from three same-session attempts systematically underestimates true test-retest error.

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>

The intellectual lineage runs through four distinct strata, and each contributes a specific, inherited vulnerability.

**Stratum 1 — ischemic preconditioning and the "metabolic stress" hypothesis (1990s–2000s).** Sundberg et al. (1993) and Takarada et al. (2000, 2002) established that low-load exercise under tourniquet produces hypertrophy. The paper leans on Takarada directly [PAGE 6]. The inherited assumption is that a hypoxic/ischemic milieu is *sufficient*; the inherited blind spot is that early studies used absolute pressures (often 200–250 mmHg, or "tourniquet tightness") with no normalization to individual AOP — a practice the present study explicitly corrects via relative pressure [PAGE 2].

**Stratum 2 — the relative-pressure normalization project (2015).** Loenneke et al. (2015a) produced the circumference-and-systolic-pressure prediction equation that generates Table 2 [PAGE 3], and Loenneke et al. (2015b) established the 40–50% AOP "sufficient to maximize muscle activation" heuristic [PAGE 2]. This is the direct ancestor of the 40%-vs-60% design. The retrocausal trap: the 40–50% figure was derived from *acute muscle activation* (EMG), not chronic hypertrophy. Transplanting an acute-electromyographic optimum into a 6-week hypertrophy trial is a category substitution that the paper inherits without comment.

**Stratum 3 — the hormesis reframing (2014).** Loenneke et al. (2014) recast the pressure-response as non-monotonic. This licenses the paper's central hypothesis: "we hypothesized that 60% AOP would produce greater hypertrophic and strength adaptations compared to 40% AOP, whereas both pressures would yield comparable improvements in power-oriented performance measures" [PAGE 2]. But hormesis is a *shape* claim, and the design can only test two points on that shape (E6). The genealogy transmits a hypothesis the experiment structurally cannot falsify — a two-dose design can never locate the peak.

**Stratum 4 — the youth-safety consensus (2009–2022).** Faigenbaum, Lloyd's 2014 International Consensus, and Prue et al. (2022) supply the safety scaffolding: screening, qualified supervision, predefined stopping rules [PAGE 2]. The paper dutifully reports "No adverse events were reported in any group during the six-week intervention period" [PAGE 3]. The inheritance here is a *reporting* convention, not a surveillance system: "direct tolerability or safety outcomes were not assessed" [PAGE 7].

**Multi-week traps that this lineage sets:**
1. *The 6-week illusion.* Six weeks is long enough to capture neural adaptation and fluid shifts, short enough to miss the plateau and the detraining curve. The paper's own Table 3 shows control +0.16 kg muscle mass over 6 weeks — the maturational floor is barely above zero, so the window is too short to separate growth from training.
2. *The continuous-inflation inheritance.* Cuffs "remained inflated continuously throughout all four sets and the 60-second rest intervals" [PAGE 3], a total of 12–15 min per session. This descends from early tourniquet protocols, not from the intermittent-reperfusion literature; it inflates total ischemic dose in a way that makes the "%AOP" label an incomplete dose descriptor.
3. *The sprint null.* The paper honestly reports no sprint effect (d = 0.00–0.07) and correctly notes this replicates Deng et al. (2025) and Zhang et al. (2023) [PAGE 8]. The trap is multi-week persistence: practitioners will keep adding BFRT expecting sprint transfer that three independent meta-analyses say does not occur.
4. *The 80% ceiling.* Counts et al. (2016) supplies the >80% AOP discomfort ceiling [PAGE 2], which sits 20 percentage points above the highest dose tested. The genealogy implies a wide unexplored band between 60% and 80% that no youth study has entered.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>

Model the practitioner as an agent with three competing policies operating over a 6-week horizon plus a multi-year development horizon.

**Policy A — crisis habit regression.** When a strength plateau appears at week 4–5, the reflexive move is *escalate the pressure*. This is the regression-to-crisis habit: the coach reads "60% AOP beat 40% AOP for 1RM (P = 0.048)" [PAGE 6] as a monotone gradient and infers 70–80% will beat 60%. The paper explicitly arms this inference with its dose-response language ("suggestive of a potential dose-response relationship between occlusion pressure and hypertrophic outcomes" [PAGE 7]) before hedging it. Note that the very same page contains the counter-evidence: power outcomes plateaued (CMJ d = 0.43, T-test d = 0.09), and RPE already rose from 4.2 to 5.3 [PAGE 3]. Escalation buys hypertrophy at a measured comfort cost with no demonstrated power return.

**Policy B — the counter-trap.** The over-correction: read "40% AOP may therefore represent a more efficient and tolerable option for improving explosive performance" [PAGE 8] and universalize 40% AOP for all athletes and all goals. This discards the 60% arm's genuine advantage in segmental mass (+0.83 vs +0.55 kg) and 1RM (+9.25 vs +6.50 kg). It also ignores that the chart-derived AOP may already be mis-scaled for adolescents (E3), making the nominal 40% an unknown true percentage.

**Policy C — the clock.** The correct policy is time-indexed, not dose-indexed. The relevant clock is biological: mean age 16.4 years sits astride peak height velocity, and the authors concede they did not assess "hormonal concentrations or maturation status" [PAGE 8]. A practitioner reasoning correctly must ask *where in the maturational window is this athlete*, because a pre-PHV athlete's response to metabolic-stress loading is not the same as a post-PHV athlete's. The second clock is the within-session clock: 12–15 min of continuous inflation per session, 18 sessions total. The third is the detection clock: with individual-level SDC roughly 4× the observed mean change for agility (E9), six weeks is below the horizon at which a coach can *see* the effect in a single athlete without pooled data.

**Recursive inference.** The practitioner must model the *authors'* model of the practitioner — and the authors have modeled them as someone who needs an "efficacy-tolerability trade-off" answer [PAGE 2]. That framing is honest but incomplete: it offers a two-point menu (40% for power, 60% for mass/strength) when the correct output is a decision rule conditioned on (a) whether true AOP was measured or chart-estimated, (b) maturational status, and (c) whether the target outcome is force-dominant or velocity-dominant. The paper's own data imply the rule: *strength/mass target → higher relative pressure, capitalizing on the arterial-inflow channel (E4); power target → 40% is sufficient because the power channel saturates (Hop 5); sprint → neither, because the stimulus is wrong [PAGE 8].* A coach who collapses all three into "more pressure = better" has regressed to Policy A; one who collapses them into "40% is safer" has fallen into Policy B.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>

**Physical layer — veto sustained (partial).** The dose contrast is physiologically real but its magnitude is unmeasured. Venous outflow is abolished in both arms (E4), so the 40%-vs-60% difference is purely arterial. No Doppler, plethysmographic, or near-infrared measure of actual limb perfusion was taken; the "%AOP" labels are chart-derived from thigh circumference (E3), and the underlying equation is adult-validated with a systolic-pressure term that is lower in adolescents. **Verdict:** the directional claim (60% > 40% for mass and 1RM) survives; the *quantitative* claim (that the delivered difference was exactly 20 percentage points of true AOP) does not. Ambient/thermal control is also unaddressed — the school canteen and training logs are standardized [PAGE 3], but no ambient temperature or humidity is reported, and both affect fluid distribution, which feeds directly into the next layer.

**Biomechanical layer — veto sustained.** Three specific failures:
1. *No velocity monitoring during training.* The authors state "objective indicators (e.g., bar velocity, velocity loss) were not directly monitored" [PAGE 8]. The proposed fatigue-mediated ceiling at 60% AOP is therefore an inference from a Borg CR10 difference (4.2 ± 1.3 vs 5.3 ± 1.6) [PAGE 3] — a subjective, dimensionless scale with no criterion anchor.
2. *Predicted, not measured, 1RM.* The primary outcome was extrapolated to a 0.5 m·s⁻¹ threshold [PAGE 3]. Per E7, a 0.02 m·s⁻¹ anchor disagreement produces a 2.5 kg swing — the same size as the key between-group advantage. The method's own reported standard error (Thompson et al., <5 kg) [PAGE 3] is *larger* than the 2.94 kg effect being claimed.
3. *Agility signal below noise floor.* T-test CV was 3.5% [PAGE 4], giving individual SDC ≈ 0.99 s (E9) against a −0.23 s mean change.

**Body-composition/measurement-physics layer — veto sustained.** Lower-limb muscle mass came from multi-frequency bioimpedance, validated by an ICC "≥ 0.999 for whole-body mass measurements" [PAGE 3] — note that this is *whole-body mass*, not *segmental lean mass*, and the claim transfers a mass-reliability figure to a compartment-reliability question. The 2-C/4-C BIA model assumes constant tissue resistivity and a fixed hydration fraction of fat-free mass; BFR-induced cell swelling is a first-order violator. A 0.55–0.83 kg segmental lean gain in 6 weeks represents 3.0–4.1% of the 18.3–20.1 kg baseline [PAGE 4] — near the upper edge of plausible contractile accretion, and indistinguishable from edema without MRI/ultrasound CSA or DXA. The study reports no imaging.

**Weather/environment layer — veto not adjudicable.** No ambient conditions are reported. Indoor standardized conditions are asserted ("All experimental procedures were conducted at the China Football School under standardized conditions" [PAGE 2]) but not quantified. Given that the outcome is a hydration-sensitive compartment estimate, this is an unclosed loop rather than a demonstrated confound.

**Statistical layer — veto sustained on two claims.** (i) The 60%-vs-40% 1RM claim rests on P = 0.048 with a reported Bonferroni framework [PAGE 4]; across 15 pairwise contrasts the corrected threshold is 0.0033. (ii) The abstract's headline 1.48 kg muscle-mass difference is a baseline-unadjusted contrast; the adjusted value is 0.67 kg (E8). The 60%-vs-control 1RM contrast (6.86 kg) and the 60%-vs-40% 1RM contrast (2.94 kg) are *not* affected by this identity because baseline 1RM was balanced to within 0.13 kg.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

**Veto 1 — The sham-cuff veto (