---
source: "2026 - Beyond Match Results Bayesian Mediation of Ability, Performance, and Winning in Professional Tennis - Hu et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 35
model: deepseek/deepseek-v4.1-flash-1017
words: 8222
---

<NATIVE_REASONING>
The user wants me to build a GSE + GSI frontier reasoning treatment of this paper, using the strict XML sections, minimum 1000 words total (with THINK_TRACE >= 400 words), formal LaTeX, unit annotations, page citations with verbatim quotes, zero betting lines, no toy equations, singularity/breakdown regimes, retrocausal genealogy, recursive theory of mind, cross-layer veto adjudication, and three RLVR counterfactual vetoes with predictions.

The "DRIVE SOURCE" is the paper itself. So I need to treat this as a source-grounded derivation: Bayesian mediation, Bradley–Terry, cut posteriors, measurement windows, point-count-matched control, decomposition P_s and W_s, reliability attenuation, boundary/singularity regimes (κ→0, mediated share → 1, TE→0, stopping-time violations, dependent-point covariance floor, zero-sum constraint coupling, incumbent on prior scale).

Let me plan sections.

THINK_TRACE (>=400 words): Multi-hop derivation. Chain: ability θ⁻ (pre-match, expanding window) → service performance mediator X^(w) → outcome Y. Three constructions w ∈ {set1, ctrl, full}. Define g_s = β^own − β^opp. Then DE, IE, TE via expit integrals over e ~ N(0, 2σ_X²(1−ρ)). Mediated share S = IE/TE. Decomposition G = P + W. Gray-zone audits: (i) S can exceed 1 (paper reports 1.07 on hard unrestricted refit) — boundary; (ii) TE→0 makes S undefined/infinite — singularity; (iii) reliability κ → 0 makes bc_s → c_s + λ_s g_s, i.e. all effect transfers to direct coefficient, and regression calibration D_s = bc_s − (bλ_s/κ_s) g_s(1−κ_s) diverges as κ_s → 0 — breakdown; (iv) dependent points variance floor v/n + (1−1/n) q with q > 0 gives floor q, so target reliability unattainable at any n; (v) zero-sum Helmert coupling means the δ prior is not coordinatewise; (vi) cut posterior: no feedback, but calibration ≠ joint posterior; (vii) stopping time: set ends on outcome-dependent event → exchangeability violated; (viii) first-set mediator is inside outcome window → temporal ordering ≠ no overlap. Also the arithmetic of S: if λ_s g_s large, expit saturates → IE → 1 − expit(λ e) and DE → expit(c + λ e) − expit(λ e); at saturation DE → 0 unless c large. Actually as λg → ∞, IE → 1 − expit(λe), TE → 1 − expit(λe), so S → 1. That's the mechanism behind 0.95 — saturation/overlap. Good multi-hop derivation.

Also the point-count decomposition: E[R^ctrl | R] = R^full (inclusion prob n/N) — martingale/ Hájek ratio argument. Var equal under exchangeability.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX with page cites and verbatim quotes. Include:
- Eq (1) service performance [PAGE 7]
- Eq (2) θ = μ + δ, random walk [PAGE 10]
- Eq (3) logit Bradley–Terry with discrimination a_s [PAGE 11]
- Eq (4) zero-sum, Eq (5) exposure propagation, Eq (6) standardization [PAGE 11–13]
- Eq (8)–(10) bivariate normal [PAGE 14]
- Eq (11) outcome logit [PAGE 14]
- Eq (12)–(14) cut distribution / comparison distribution [PAGE 15–16]
- Eq (15)–(19) estimands [PAGE 16–17]
- Eq (20) decomposition [PAGE 17]
- Prop 1 & 2 [PAGE 18–19]
- Eq (21) attenuation, Eq (22) regression calibration [PAGE 19, 29]
- Table 2 & 3 numbers [PAGE 26]
- Units: probabilities dimensionless, ability in window-specific SD units (ς_T), λ per SD of ΔX, log-odds (nats), log loss in nats, Brier in probability² , ESS (count), rank-normalized split-R̂ (dimensionless).

Breakdown regimes: κ→0, TE→0, q floor, n→0, saturation λg → ±∞, boundary c_s > 0 restriction violated (10/12 cells), prior scale anchoring ς_T.

RETROCAUSAL_GENEALOGY: Zermelo 1929 → Bradley–Terry 1952 → Glickman 1999 dynamic → Cattelan 2013 → Kovalchik Elo → Klaassen & Magnus point independence → Ingram 2019 point-level hierarchical → Baron & Kenny 1986 → Robins & Greenland 1992 → Pearl 2001 → Imai et al. 2010 → VanderWeele 2015 → Cinelli & Hazlett 2020 → Suissa 2008 immortal time bias → Carroll et al. 2006 measurement error → Rubin 1987 MI → Plummer 2015 cuts → Jacob et al. 2017. Multi-week traps: treating full-match serve % as a cause-of-win; "clutch" narratives built on cumulative stats; the 1.6–2.2× mediated-share inflation as a recurring trap; equal-n fairness criterion; second-set positive control; retirement censoring; rank vs latent ability conflation.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Analysts under time pressure regress to "the winner served better" — the full-match mediator. Counter-trap: over-correcting to first-set only, which is precise-poor and still inside outcome window. Clock: season boundary, expanding window t < T, second-set outcome as the true out-of-window clock. Also model the analyst's belief hierarchy: analyst believes practitioner believes full-match = mechanism; the paper's meta-move: measure the measurement. Also referee/reader recursion: what a bettor/broadcaster "sees".

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto. Vetoes: (1) serve speed/fatigue over match — first set systematically higher velocity, so segment-level shock ς ≠ 0 → construct change confounds W_s; (2) surface friction/skid and weather (wind, heat rule, roof) shifting λ_s and ρ; clay rallies longer → point dependence q larger → variance floor binds, κ_s lower; (3) retirement/injury censoring — outcome not generated by mediator, high-surprise scan [PAGE 25]; (4) schedule density / back-to-back matches → latent form not captured by season random walk σ_ω; (5) altitude/ball type — hard-court heterogeneity. These veto the causal reading of W_s but not the design contrast.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable scenarios with predictions.

Scenario A: Permute Y within surface (paper says "permuting outcomes within surface removes both components") — prediction: P_s and W_s credible intervals contain 0, S^(full) ≈ S^(set1) ≈ S^(ctrl) ≈ 0.5 under null? Actually under permutation, IE→0 so S→0. Predict |P_s|,|W_s| < 0.02, and 90% CI coverage of 0 ≥ 90% across 1000 permutations. Verifiable via reproduction archive.

Scenario B: Reliability-matched control — multiply control point count by factor equating κ. Paper: hard window component moves 0.127 → 0.215, clay 0.177 → 0.329 [PAGE 29]. Prediction: reliability-matched W_s strictly increases on hard and clay, and the increase is monotone in the inverse-variance factor; on grass the CI widens and may cross zero. Veto if W_s decreases or CI collapses.

Scenario C: Second-set outcome — W_s rises ~2.5× hard (0.127→0.311) and clay 0.328 [PAGE 28]. Prediction: W_s^(set2) − W_s^(match) > 0 with 90% CI excluding 0 on hard and clay; and for WTA hard, 0.109 → 0.316 [PAGE 28]. Veto if the sign flips or if the increment is not concentrated in the window component (i.e., P_s unchanged).

Maybe a fourth: simulation dial γ (overlap) and ς (construct change) — with both off, W covers zero; with ς alone positive component. Prediction gradations. But 3 required; I can add a 4th briefly or keep 3 strict. I'll do exactly 3 main, maybe with sub-predictions.

Word count: need ≥1000 across sections; THINK_TRACE ≥400. I'll write substantially, maybe 2500-3500 words total. Let's aim for ~3000-3800 words. Keep it dense and formal. No betting lines — avoid mentioning odds/moneyline/spreads. Note the paper mentions "betting markets" and "betting lines" — I should avoid reproducing those phrases; I'll say "market-facing summaries" if needed, or just avoid. Actually quoting verbatim from page 4 "Statistics such as service points won drive broadcasts, betting lines and player..." — that contains "betting lines". Invariant 1 says zero betting lines: never mention spreads, totals, moneylines, or odds. Quoting "betting lines" might violate. Avoid that quote; use other quotes.

Verbatim quotes to use (exact):
- [PAGE 1] "the hard-court mediated share rises from 0.52 with a first-set mediator to 0.95 with a full-match mediator; the point-count contrast accounts for 0.30 of this gap and the window contrast for 0.13."
- [PAGE 8] "the full-match mediator is assembled from the very points through which the result is realized, so part of its association with winning is mechanical rather than behavioral."
- [PAGE 8] "comparing the two confounds a change in window with a change in precision, and more matches cannot resolve a confound built into how the statistics are defined."
- [PAGE 18] "Proposition 1 (Common target of the full and control mediators)." E(Rctrl|R) = Rfull.
- [PAGE 19] "Var(Rset1 | π) = Var(Rctrl | π) = v/n + (1 − 1/n) q."
- [PAGE 19] "a set ends when one player wins it, making the number of service points an outcome-dependent stopping time"
- [PAGE 27] "Temporal ordering and freedom from outcome overlap are therefore distinct properties of a mediator, and an analysis can have the first without the second."
- [PAGE 27] "most of the apparent difference between an early-window and a full-match analysis is the arithmetic of counting more points."
- [PAGE 30] "A share above one signals that the restricted model is at its boundary, so the near-boundary full-match share is sensitive to the restriction and prior rather than evidence of complete mediation."
- [PAGE 29] "Equal n does not imply equal information, so the point-count component is not an identified measurement-error effect."
- [PAGE 26] "the main empirical finding is therefore negative"
- [PAGE 28] "This is a positive-control analysis for outcome overlap, not an estimate of how much overlap occurs naturally."
- [PAGE 24] "we report this as evidence that the pre-match abilities are credible, not as a forecasting claim."
- [PAGE 11] "The likelihood in (3) depends only on ability differences, and the decomposition in (2) introduces an additional invariance between overall ability and surface specialization."
- [PAGE 12] "A trajectory fitted to all seasons fails this, because the random walk smooths an earlier state using later results."
- [PAGE 20] "Latent ability is also a model-defined exposure rather than a manipulable treatment."
- [PAGE 13] "one unit of θ− is one window-specific standard deviation in the historical ability field"
- [PAGE 19] "The first relation attenuates the estimated mediator coefficient; the second transfers the omitted part of the pathway to the ability coefficient"
- [PAGE 23-24] forecast stats: log loss, Brier, t = 3.80, 2.62, 3.53 etc.
- [PAGE 24] "0.3128 observed against 0.3122 replicated with a posterior predictive p-value of 0.440"
- [PAGE 21] "At no stage can the pathway data update the ability distribution." — actually that's page 22: "At no stage can the pathway data update the ability distribution." Yes page 22.
- [PAGE 22] "a different control realization is paired with each ability draw and standardized within surface before fitting"
- [PAGE 31] "the mediated share rose by a factor of 1.6 to 2.2 between the first-set and full-match constructions" — that's page 30 actually. Page 30: "the mediated share rose by a factor of 1.6 to 2.2 between the first-set and full-match constructions across both tours and all surfaces".

Let me be careful with page numbers. Page 30 text: "Third, the decomposition of Section 4.2 cautions any mediation-style analysis whose mediator is measured on a window overlapping the outcome: the mediated share rose by a factor of 1.6 to 2.2 between the first-set and full-match constructions across both tours and all surfaces, and matching on sample size does not fix it, since equal counts are not equal reliability (Table S18)." Yes PAGE 30.

Now the formal math.

Key derived chain: Let Δθ⁻ = θ_a − θ_b. Under (8)-(9): E[ΔX | Δθ = d] = g_s d, g_s = β^own_s − β^opp_s > 0. Var(e) = 2σ_X²(1−ρ).

Outcome: logit p = c_s d + λ_s ΔX.
DE = E_e[expit(c_s + λ_s e) − expit(λ_s e)]
IE = E_e[expit(c_s + λ_s(g_s + e)) − expit(c_s + λ_s e)]
TE = E_e[expit(c_s + λ_s(g_s + e)) − expit(λ_s e)]

Check TE = DE + IE by telescoping. Yes.

Saturation analysis: as λ_s g_s → +∞ with c_s fixed, IE → E[1 − expit(c_s + λ_s e)] and TE → E[1 − expit(λ_s e)], so S → E[1−expit(c_s+λ_s e)] / E[1−expit(λ_s e)]. If also c_s → 0+, S → 1. So the 0.95 arises from λ g large + c small — mechanically, since ΔX^(full) contains the outcome-determining points. Good derivation connecting S→1 to overlap. Note: with c_s > 0 restriction, DE ≥ 0 bounded; the observed DE^(full) = 0.005 [0.003, 0.008] is essentially at the boundary — a "shrunken to boundary" signature consistent with saturation.

Also note the derivative of S wrt λ g: it's not monotone generally; there's a curvature term. The paper says "For the logistic outcome the result is local, because both the residual scale and the curvature of the link affect probability-scale estimands" [PAGE 20].

Gray-zone: the 0.52 vs 0.41 vs 0.47 shares on hard/clay/grass; clay highest direct — clay's slower surface, longer rallies, more return influence → maybe λ larger? Actually clay direct 0.065, mediated 0.044. Hmm.

Units discussion: θ in window SD units (ς_T from Eq 6), so d=1 is one historical-ability SD; λ_s units: nats per SD of ΔX (ΔX standardized within surface by S_sm); c_s nats per SD of Δθ. DE, IE, TE in win-probability units (dimensionless, range [0,1]... could be negative pre-restriction but restricted ≥ 0). S dimensionless ratio. σ_ω in ability units per √season; note (t−t')σ_ω² variance linear in seasons. γ, ς simulation dials dimensionless. κ dimensionless reliability ∈ (0,1]. ESS counts. R̂ dimensionless. Log loss nats; Brier in squared probability units.

Breakdown/singularity regime list:
1. TE → 0: S = IE/TE undefined (0/0) — occurs when g_s λ_s → 0 or ability contrast has no probability-scale consequence; paper's null simulation "where the truth is zero, an interval excludes it in 0–2% of datasets" [PAGE 23] — S has no stable value; estimand must be reported as IE, TE separately.
2. c_s restriction violated → S > 1 (observed 1.07 hard unrestricted) — boundary, prior-sensitive [PAGE 30].
3. κ_s → 0: bc_s → c_s + λ_s g_s; D_s = bc_s − (bλ_s/κ_s) g_s(1−κ_s) diverges as −(λ_s g_s/κ_s)(1−κ_s)... let's compute: with bλ = κλ, bc = c + λg(1−κ): D = c + λg(1−κ) − (κλ/κ) g (1−κ) = c + λg(1−κ) − λg(1−κ) = c. Hmm that's exact — the calibration is consistent at the true κ. So D_s = c_s exactly when κ is known. The paper says D_s is negative in 10/12 cells → so the plug-in κ̂ is wrong (because variance estimate p(1−p)/n assumes independence and fixed n). So the breakdown is: with κ̂ misspecified, D_s = c + λg(1−κ̂) − λg(κ/κ̂)(1−κ̂) = c + λg(1−κ̂)(1 − κ/κ̂). Negative iff κ̂ > κ. And 1 − κ/κ̂ < 0 → D < c, can go negative. So D_s < 0 ⟺ κ̂ > κ (over-estimated reliability). Good derivation — that's a real multi-hop result. And as κ̂ → 1, D → c. As κ̂ → κ, D → c. So negativity diagnoses over-estimated reliability, i.e. the plug-in p(1−p)/n understates true error because of dependence and stopping. Excellent.
4. Variance floor: Var = v/n + (1 − 1/n) q → q as n → ∞. Target reliability Var_true/(Var_true + q) cap; if required κ* exceeds cap, no n attains it → reliability matching has no solution. Singularity in the matching equation.
5. Exchangeability failure: stopping time at set end correlates n with π → E[R^ctrl|π] ≠ π; Prop 1's second sentence fails; control biased toward the first-set rate direction (since n small when set is lopsided... actually a set won 6-0 has ~ fewer points for the loser). So E[R^ctrl|π] biased.
6. Zero-sum Helmert: (t−t')σ_ω² marginal is a building block not a conditional — the paper explicitly warns [PAGE 11]. Treating it as the conditional distribution of a constrained coordinate is a breakdown.
7. Cut posterior: no feedback but frequentist calibration may not match joint [PAGE 32].

Also the 2026 holdout: grass untested, two comparators saw the holdout season → claims limited [PAGE 24].

Now write. Use XML tags exactly as given. Ensure >=1000 words total (easily), THINK_TRACE >=400 words (aim ~700).

Let me write with headers and LaTeX. Avoid marking things as betting. Avoid "odds" word entirely. Note "log-odds" is a statistical term — invariant says never mention odds (betting lines). "logit" is safer; use "logit" and "log-odds scale" → I'll use "logit scale" to be safe. Also "nats" for log loss is fine.

Also avoid the word "moneyline", "spread", "total". Fine.

Write now.

Structure:

<THINK_TRACE> ~750 words.
<SOURCE_OPERATORS_AND_EQUATIONS> ~900 words with equations and quotes.
<RETROCAUSAL_GENEALOGY> ~450 words.
<RECURSIVE_THEORY_OF_MIND> ~400 words.
<CROSS_LAYER_VETO_ADJUDICATION> ~400 words.
<RLVR_COUNTERFACTUAL_VETOES> ~450 words.

Total ~3300 words. Good.

Careful: "GSI" and "GSE" mentioned in the frame — I can reference "gray-zone" audits and "veto" language.

Let me draft THINK_TRACE.

Multi-hop chain:
Hop 0: What is the drive? Not a pick; it's a measurement-design theorem. The object is the mediated share S_s.
Hop 1: Ability is unobservable and non-manipulable → θ⁻ is an imputation, not a treatment. Expanding window gives temporal ordering only.
Hop 2: Mediator has three constructions; each is a different functional of the same point sequence R_im = (W_1..W_N).
Hop 3: The contrast G = S^full − S^set1 = P + W is an algebraic identity, so any "finding" about mediation is a finding about (window, count).
Hop 4: Proposition 1 gives a martingale/Hájek argument: inclusion probability n/N equal for all points → E[R^ctrl | R] = R^full. So ctrl and full share a finite-record target; difference is measurement dispersion and conditional distribution shape, not construct. But Prop 2 needs exchangeability + fixed n → fails under stoppage.
Hop 5: Nonlinearity: S depends on full conditional distribution not just variance (paper says so explicitly).
Hop 6: Saturation derivation → S → 1 limit. Let me do it carefully.

Define for brevity u = λ_s, and the mapping. As ug → ∞:
IE = E[σ(c + u g + u e) − σ(c + u e)] where σ = expit. Since u g → ∞, σ(c+ug+ue) → 1 for all finite e. So IE → 1 − E[σ(c + u e)].
TE = E[σ(c + ug + ue) − σ(ue)] → 1 − E[σ(ue)].
DE = E[σ(c + ue) − σ(ue)].
Note DE + IE = E[σ(c+ue) − σ(ue)] + 1 − E[σ(c+ue)] = 1 − E[σ(ue)] = TE ✓.
S = IE/TE = [1 − Eσ(c+ue)]/[1 − Eσ(ue)].
If c → 0, both numerators equal → S → 1. If c > 0, 1−Eσ(c+ue) < 1−Eσ(ue) (since σ(c+ue) > σ(ue) pointwise), so S < 1. Good: S = 1 − DE/TE and DE/TE > 0. So S^full = 0.95 means DE/TE = 0.05, i.e., the direct path is squeezed. And DE^full = 0.005 with TE = 0.106 → ratio 0.047. Consistent (0.95). Nice internal consistency check: 1 − 0.005/0.106 = 0.953 ✓ matches reported 0.95. Similarly first-set hard: 1 − 0.050/0.104 = 0.519 ✓ = 0.52. Clay: 1 − 0.065/0.109 = 0.404 ✓ = 0.41. Grass: 1 − 0.055/0.104 = 0.471 ✓ = 0.47. Control hard: 1 − 0.036/0.103 = 0.650 ✓ = 0.65. Clay ctrl: 1 − 0.044/0.105 = 0.581 ✓ = 0.58. Grass ctrl: 1−0.047/0.104 = 0.548 ✓ = 0.55. Excellent — exact arithmetic verification of S = 1 − DE/TE identity from Table 2. That's a strong "coding check" multi-hop audit. Include it.

Also check G = P + W: hard: 0.950 − 0.522 = 0.428; P = 0.301, W = 0.127; sum = 0.428 ✓. Clay: 0.899 − 0.405 = 0.494; P=0.317, W=0.177 → 0.494 ✓. Grass: 0.872 − 0.473 = 0.399; P=0.319, W=0.080 → 0.399 ✓. Beautiful. Include these as verification of the algebraic identity (not evidence, per paper: "Numerical verification of the identity is a coding check, not evidence for the model" [PAGE 17]).

Also 0.30/0.13 in abstract for hard: 0.301 and 0.127 round to 0.30/0.13 ✓.

Hop 7: Reliability: bc_s + bλ_s g_s = c_s + λ_s g_s (total preserved). Derivation: κλ g + c + λg(1−κ) = c + λg ✓. And D_s negativity ⟺ κ̂ > κ derivation above. 

Hop 8: Gray-zone: what's NOT identified — overlap vs construct change. Paper: "How much of it is outcome overlap this design does not say, since the component combines overlap with a change in the measured construct." [PAGE 27].

Great. Now write everything.

For CROSS_LAYER_VETO: physical/biomechanical/weather.
- Biomechanical: fatigue-induced serve velocity decay across a match means E[X^full] ≠ E[X^set1] at fixed latent rate → ς ≠ 0; then W_s conflates overlap + physiology. Veto scope: vetoes causal reading of W_s as overlap; does not veto P_s.
- Surface friction: clay → longer rallies → higher point-to-point dependence q → variance floor (1−1/n)q binds → κ_s lower on clay than hard at equal n; predicts Table S18 pattern and larger W_s on clay (0.177 vs 0.127) which the paper attributes partly to sample size. Testable prediction.
- Weather: wind/heat rule/roof; heat policy adds extended breaks → within-match shock; roof closes → serve dominance up → λ_s nonstationary within match; grass season short → partial pooling dominates → widest CIs (grass W_s CI [−0.090, 0.247] crosses zero).
- Censoring: retirement (mediator not the generator of Y) — paper's outlier scan [PAGE 25]; vetoes those rows.
- Calendar/scheduling: σ_ω random walk assumes one innovation per season; congested scheduling and injury produce within-season level shifts → θ⁻ mis-specified; but because the pathway contrasts share the same θ⁻ draws, this cancels in P_s and W_s (common-ability-draw coupling in Eq 14). That's the key veto-adjudication: cross-layer shocks that act on ability are common-mode and cancel in the contrasts; shocks that act on the mediator's conditional distribution (fatigue, wind, q) are differential-mode and do NOT cancel. Excellent adjudication rule.

Now RLVR vetoes with verifiable predictions.

Veto 1 (permutation null): Run 1,000 within-surface permutations of Y. Prediction: posterior mean |P_s| < 0.02 and |W_s| < 0.02 on hard; 90% intervals cover 0 in ≥ 90% of replicates; S^(w) collapse toward 0 for all w because IE → 0 (note: with Y permuted, λ_s → 0, so IE → 0 and S → 0, not 0.5). Careful: S = IE/TE; if λ→0 then IE→0 and TE→0 → 0/0. Actually with Y independent of X, λ_s ≈ 0, so IE and TE both → 0; S undefined. Better prediction: report IE and TE, both with 90% CI containing 0; and DE ≈ 0 too since c_s → 0 (Y independent of θ). So prediction: DE, IE, TE all ≈ 0 with CIs covering 0; the ratio S is undefined and must not be reported. That's a real veto: if the pipeline reports a stable S ≈ 0.5 under permutation, the estimand is broken. Paper says "permuting outcomes within surface removes both components" [PAGE 28] — so P and W → 0. Prediction: |P_s|, |W_s| < 0.03 and the point estimate sign random across seeds.

Veto 2 (reliability-matched reallocation): Apply the inverse-variance count factor. Prediction: W_hard: 0.127 → 0.215 (+0.088), W_clay: 0.177 → 0.329 (+0.152) [PAGE 29], both same sign as reported and monotonically increasing in the factor; P_s must decrease by the same amount (since G fixed at 0.428/0.494) → P_hard 0.301 → 0.213, P_clay 0.317 → 0.165. That's a derived prediction not stated in paper! G is fixed by the three shares which are unchanged by re-matching the control... wait, no: reliability matching changes the control mediator, hence S^ctrl changes, hence W and P change but G = S^full − S^set1 unchanged. Yes! So P_hard → 0.428 − 0.215 = 0.213, P_clay → 0.494 − 0.329 = 0.165. Verifiable arithmetic prediction. Veto if G drifts > 0.01.

Veto 3 (outcome-window displacement): second-set outcome. Predictions: W_hard 0.127 → 0.311 (CI [0.229, 0.396]), W_clay 0.177 → 0.328; WTA hard 0.109 → 0.316 [PAGE 28]. And P_s should change little... actually P depends on window too; but prediction: the increment ΔW = W_set2 − W_match > 0 with 90% CI excluding 0; and sign consistency across tours (ATP, WTA). Also predict the mediation share spread S^full − S^set1 shrinks or stays because both constructions now partly outside? Hmm — with second-set outcome, full-match mediator now overlaps the outcome even more (includes set 2). So G may grow. Prediction: G_set2 > G_match on hard. Verifiable.

Maybe add a 4th "simulation dial" as sub-item within veto 3? Keep 3 with sub-predictions (a)/(b).

Also mention: veto conditions that would falsify the paper's central negative claim: if a mediator measured strictly before the outcome window (e.g., first-set performance predicting second-set winner with the control built only from first-set points, so no overlap at all) still yields S ≈ 0.95, then the construction account fails and the "serving dominates" reading survives. Prediction: such an arm yields S well below 0.95, closer to the set-1/ctrl range 0.4–0.65. Good falsifier.

Now write it all out. Keep verbatim quotes accurate.

Check quote on PAGE 27: "The control spans the whole match, so it carries whatever outcome overlap the conventional mediator carries, but is computed from the opening set's number of service points;" and "How much of it is outcome overlap this design does not say, since the component combines overlap with a change in the measured construct." ✓

PAGE 8 quote: "The full-match mediator is assembled from the very points through which the result is realized, so part of its association with winning is mechanical rather than behavioral." ✓

PAGE 19: "The conditions of Proposition 2 should not be taken for granted in tennis, since a set ends when one player wins it, making the number of service points an outcome-dependent stopping time; matching the observed count does not establish that the two statistics have the same conditional error distribution." ✓

PAGE 22: "At no stage can the pathway data update the ability distribution." ✓

PAGE 32: "the modular procedure targets a cut posterior, which protects the pre-match meaning of ability but whose frequentist calibration need not match a joint posterior's." ✓

PAGE 23: "where the truth is zero, an interval excludes it in 0–2% of datasets against a nominal 10%." ✓

Write now. I'll keep the tone analytic.

One more: units of θ: Eq (6) standardization ς_T = sd over players and surfaces of E[θ̃⁻ | D_<T]; so θ⁻ dimensionless SD units. σ_ω in those units per √season... Actually σ_ω is in raw ability units before standardization; note both.

Also a_s discrimination parameter: dimensionless (per ability unit), and after standardization a_s is per window-SD.

OK writing.
</NATIVE_REASONING>

<THINK_TRACE>
**Drive decomposition, hop by hop.** The document under analysis is not a prediction artifact; it is a measurement-design theorem wearing a sports dataset. The dependent object is a mediated share $S_s^{(w)}$ indexed by surface $s\in\{H,C,G\}$ and mediator construction $w\in\{\text{set1},\text{ctrl},\text{full}\}$. Every downstream claim in the paper is a statement about how $S_s^{(w)}$ moves when $w$ moves, holding matches, abilities and outcome model fixed. The audit therefore has to establish (i) what the estimand is algebraically, (ii) which invariances are imposed and which are not, (iii) where the estimand degenerates, and (iv) which cross-layer shocks are common-mode (and cancel in contrasts) versus differential-mode (and do not).

**Hop 1 — exposure is an imputation, not a treatment.** Ability enters through an expanding-window fit; the paper states at [PAGE 12] "A trajectory fitted to all seasons fails this, because the random walk smooths an earlier state using later results," and at [PAGE 20] "Latent ability is also a model-defined exposure rather than a manipulable treatment." The symmetric intervention $\theta_a(d)=d/2,\ \theta_b(d)=-d/2$ [PAGE 16, Eq. 15] is a *contrast device*, holding the pair mean fixed so that $d$ is not a change in match standard. Units: $d$ is measured in $\varsigma_T$, since [PAGE 13] states "one unit of $\theta^-$ is one window-specific standard deviation in the historical ability field."

**Hop 2 — the mediator is a functional of one point sequence.** For player $i$ in match $m$, let $R_{im}=(W_{im1},\dots,W_{imN_{im}})$. Then $R^{\text{full}}_{im}=N_{im}^{-1}\sum_k W_{imk}$; $R^{\text{set1}}_{im}$ uses the opening set's points; $R^{\text{ctrl}}_{im}$ is the mean of $n_{im}$ entries drawn uniformly without replacement from $R_{im}$. All three are different functionals of the *same* finite record. This is why the contrast is design-based: no new data can break it.

**Hop 3 — the identity that makes the paper's negative claim arithmetic.** From [PAGE 17, Eq. 20], $G_s=S_s^{(\text{full})}-S_s^{(\text{set1})}$, $P_s=S_s^{(\text{full})}-S_s^{(\text{ctrl})}$, $W_s=S_s^{(\text{ctrl})}-S_s^{(\text{set1})}$, with $G_s=P_s+W_s$ by construction. Auditing Table 2/3 [PAGE 26] arithmetically: hard $0.950-0.522=0.428$ and $0.301+0.127=0.428$; clay $0.899-0.405=0.494$ and $0.317+0.177=0.494$; grass $0.872-0.473=0.399$ and $0.319+0.080=0.399$. The identity closes to three decimals on all three surfaces. Per [PAGE 17], "Numerical verification of the identity is a coding check, not evidence for the model" — so this confirms only that the decomposition is not mis-assembled; it says nothing about overlap.

**Hop 4 — the share is a ratio identity in the direct effect.** Since $\mathrm{TE}=\mathrm{DE}+\mathrm{IE}$ term by term from (17)–(19) [PAGE 17], $S=\mathrm{IE}/\mathrm{TE}=1-\mathrm{DE}/\mathrm{TE}$. Checking reported cells: hard set-1, $1-0.050/0.104=0.519$ (reported 0.52); clay $1-0.065/0.109=0.404$ (0.41); grass $1-0.055/0.104=0.471$ (0.47); hard ctrl $1-0.036/0.103=0.650$ (0.65); clay ctrl $0.581$ (0.58); grass ctrl $0.548$ (0.55); hard full $1-0.005/0.106=0.953$ (0.95). So the entire "0.95 versus 0.52" phenomenon *is* the collapse of $\mathrm{DE}$ from 0.050 to 0.005 at nearly constant $\mathrm{TE}\approx 0.10$. That is a two-line diagnosis a practitioner can run on any published decomposition table.

**Hop 5 — saturation limit (the mechanistic source of $S\to1$).** With $\sigma(x)=(1+e^{-x})^{-1}$, $u=\lambda_s$, $g=g_s$: $\mathrm{DE}=\mathbb{E}[\sigma(c+ue)-\sigma(ue)]$, $\mathrm{IE}=\mathbb{E}[\sigma(c+ug+ue)-\sigma(c+ue)]$, $\mathrm{TE}=\mathbb{E}[\sigma(c+ug+ue)-\sigma(ue)]$. As $ug\to+\infty$, $\mathrm{IE}\to1-\mathbb{E}\sigma(c+ue)$, $\mathrm{TE}\to1-\mathbb{E}\sigma(ue)$, hence $S\to\big[1-\mathbb{E}\sigma(c+ue)\big]/\big[1-\mathbb{E}\sigma(ue)\big]\to1$ as $c\to0^+$. So near-unit shares are the *expected* signature of a large mediator slope combined with a collapsed direct slope — exactly what a mediator built from outcome-bearing points produces. This is the formal content of [PAGE 8]: "part of its association with winning is mechanical rather than behavioral."

**Hop 6 — why the control is legitimate but not sufficient.** Proposition 1 gives $\mathbb{E}(R^{\text{ctrl}}\mid R)=R^{\text{full}}$ because inclusion probability is $n/N$ for every point [PAGE 18]. That is a Hájek-type equality, not a variance equality. Proposition 2 imposes $\mathrm{Var}=v/n+(1-1/n)q$ [PAGE 19], which needs exchangeability and a fixed $n$ — and [PAGE 19] concedes "a set ends when one player wins it, making the number of service points an outcome-dependent stopping time." Also [PAGE 18]: "it establishes a common finite-record target, but not a pure precision effect."

**Hop 7 — reliability algebra and the sign of the diagnostic.** Equation (21) [PAGE 19] gives $\hat\lambda=\kappa\lambda$, $\hat c=c+\lambda g(1-\kappa)$, whence $\hat c+\hat\lambda g=c+\lambda g$ (total preserved along the attenuation path). The regression-calibration diagnostic (22) [PAGE 29] is $D_s=\hat c_s-\frac{\hat\lambda_s}{\hat\kappa_s}g_s(1-\hat\kappa_s)$. Substituting with a *plug-in* $\hat\kappa$ while truth is $\kappa$: $D_s=c_s+\lambda_s g_s(1-\hat\kappa)\big(1-\kappa/\hat\kappa\big)$. Therefore $D_s<c_s$ **iff $\hat\kappa>\kappa$**, and $D_s=0$ when $\hat\kappa=\kappa$ or $\hat\kappa=1$. The paper's finding that $D_s$ "is negative in 10 of the 12 mediator-by-surface cells" [PAGE 29–30] is thus a *proof of reliability overstatement* by the independence-based plug-in $p(1-p)/n$, not evidence that the direct effect is truly negative. This is the sharpest derivable result in the source and the one most likely to be reproduced incorrectly downstream.

**Hop 8 — what is not identified, stated by the source itself.** [PAGE 27]: "How much of it is outcome overlap this design does not say, since the component combines overlap with a change in the measured construct." And [PAGE 27]: "Temporal ordering and freedom from outcome overlap are therefore distinct properties of a mediator, and an analysis can have the first without the second." Gray-zone residue: overlap, construct change, and differential precision remain partly collinear; only the count channel is cleanly separated.

**Hop 9 — boundary and degeneracy inventory.** (a) $\mathrm{TE}\to0$: $S$ is $0/0$ — the paper's null cells show intervals excluding zero in "0–2% of datasets against a nominal 10%" [PAGE 23], meaning $S$ must not be reported when $\mathrm{TE}$ straddles zero. (b) Positivity violation: unrestricted hard-court full-match direct coefficient $-0.091\,[-0.175,-0.009]$ and share $1.07$ [PAGE 30], with [PAGE 30] "A share above one signals that the restricted model is at its boundary." (c) $\kappa\to0$: $\hat c\to c+\lambda g$, all pathway mass migrates to the direct term. (d) $q>0$: variance floor $q$; a required reliability $\kappa^\ast>v/(v+q)$ is unattainable at any $n$ — the matching equation has no solution. (e) The marginal $\mu_{i,t}\mid\mu_{i,t'}\sim N(\mu_{i,t'},(t-t')\sigma_\omega^2)$ is explicitly *not* a constrained-coordinate conditional [PAGE 11]. (f) Cut posterior: [PAGE 32] "whose frequentist calibration need not match a joint posterior's."

**Hop 10 — the inversion of the headline.** The paper's own verdict at [PAGE 26] is "the main empirical finding is therefore negative": near-complete mediation is a property of mediator construction, since [PAGE 27] "most of the apparent difference between an early-window and a full-match analysis is the arithmetic of counting more points." Any downstream narration of "winning is almost entirely serving" is therefore inverted at the source.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**Operator 1 — service performance functional.** [PAGE 7, Eq. 1]:
$$X_{im}(W)=\frac{\text{first-serve points won}+\text{second-serve points won}}{\text{service points played}},\qquad X\in[0,1]\ \text{(dimensionless)}.$$
Scope note from source: "This is the proportion of all points won while serving, not the percentage of first serves placed in play." Breakdown: $X$ is bounded and its denominator is an outcome-dependent stopping time, so binomial standard errors on $X$ are mis-scaled.

**Operator 2 — dynamic surface-specific ability.** [PAGE 10, Eq. 2]:
$$\theta_{i,s,t}=\mu_{i,t}+\delta_{i,s},\qquad \mu_{i,t}=\mu_{i,t-1}+\omega_{it},\qquad \omega_{it}\sim N(0,\sigma_\omega^2).$$
Units: $\theta,\mu,\delta$ in latent ability units (later rescaled to $\varsigma_T$); $\sigma_\omega^2$ in ability$^2$ per season, so $\mathrm{Var}(\mu_{i,t}\mid\mu_{i,t'})$ grows linearly in season count $(t-t')$.

**Operator 3 — Bradley–Terry outcome layer.** [PAGE 11, Eq. 3]:
$$Y_m\mid\theta,a\sim\mathrm{Bernoulli}(p_m),\qquad \mathrm{logit}(p_m)=a_{s_m}\big(\theta_{a(m),s_m,t_m}-\theta_{b(m),s_m,t_m}\big),\quad a_s>0.$$
Units: $a_s$ is dimensionless inverse-ability (ability units$^{-1}$); $\mathrm{logit}(p_m)$ in nats. The source flags the invariance: "The likelihood in (3) depends only on ability differences, and the decomposition in (2) introduces an additional invariance between overall ability and surface specialization" [PAGE 11].

**Operator 4 — identifying restrictions and Helmert parameterization.** [PAGE 11, Eq. 4]: $\sum_{i\in A_t}\mu_{i,t}=0\ \forall t$; $\sum_{i=1}^{N}\delta_{i,s}=0\ \forall s$; $\sum_{s\in S}\delta_{i,s}=0\ \forall i$; realized as $\mu_t=H_t z_t$, $\delta=\sigma_\delta H_N\,\mathrm{Draw}\,H_3^\top$, $\mathrm{vec}(\mathrm{Draw})\sim N(0,I)$. Breakdown regime: the marginal random-walk transition is "a building block of the constrained Gaussian prior rather than the conditional distribution of one constrained coordinate" [PAGE 11]; conditioning on it as if it were a free coordinate is a specification error.

**Operator 5 — pre-match exposure with gap propagation.** [PAGE 12, Eq. 5]:
$$\tilde\theta^-_{i,s}(T)=\mu_{i,t_i^\ast(T)}+\delta_{i,s}+\sigma_\omega\sqrt{g_i(T)}\,Z_i,\qquad Z_i\sim N(0,1),\ g_i(T)=(T-1)-t_i^\ast(T).$$
Note: "The extra innovation term vanishes for a player observed in the preceding season"; "a one-step forecast of the season-$T$ state would use $T-t_i^\ast(T)$ instead, which is not the exposure here."

**Operator 6 — window-specific standardization.** [PAGE 13, Eq. 6]: $\theta^-_{i,s}(T)=\tilde\theta^-_{i,s}(T)/\varsigma_T$ with $\varsigma_T=\mathrm{sd}_{i,s}\big[\mathbb{E}\{\tilde\theta^-_{i,s}(T)\mid\mathcal{D}_{<T}\}\big]$. Units: $\theta^-$ is dimensionless, one unit $=$ one historical-ability SD.

**Operator 7 — mediator standardization.** [PAGE 13, Eq. 7]: $X^{(w)}_{im}=\big(R^{(w)}_{im}-\bar R^{(w)}_{s_m}\big)/S^{(w)}_{s_m}$, standardized within surface, pooling both players; for the control, "the standardization is repeated within each imputation" [PAGE 13]. Units: $\Delta X$ dimensionless SD units, so $\lambda_s$ is nats per SD of performance difference.

**Operator 8 — bivariate performance model.** [PAGE 14, Eqs. 8–10]:
$$X_{a(m)m}=\alpha_{s_m}+\beta^{\text{own}}_{s_m}\theta^-_{a(m),s_m}+\beta^{\text{opp}}_{s_m}\theta^-_{b(m),s_m}+\varepsilon_{am},$$
$$X_{b(m)m}=\alpha_{s_m}+\beta^{\text{own}}_{s_m}\theta^-_{b(m),s_m}+\beta^{\text{opp}}_{s_m}\theta^-_{a(m),s_m}+\varepsilon_{bm},\qquad \varepsilon_m\sim N_2\!\left(0,\ \sigma_X^2\begin{pmatrix}1&\rho\\\rho&1\end{pmatrix}\right),$$
with $\beta^{\text{own}}_s>0$, $\beta^{\text{opp}}_s<0$, $\rho$ unrestricted. Empirics [PAGE 25]: posterior probability that $|\beta^{\text{opp}}_s|>\beta^{\text{own}}_s$ is 0.83 (hard), 0.87 (clay), 0.07 (grass) — so "a player's serve statistics are largely a statement about who that player has faced."

**Operator 9 — outcome layer with realized performance.** [PAGE 14, Eq. 11]:
$$Y_m\sim\mathrm{Bernoulli}(p_m),\qquad \mathrm{logit}(p_m)=c_{s_m}\Delta\theta^-_m+\lambda_{s_m}\Delta X_m,$$
$\Delta\theta^-_m=\theta^-_{a,s}-\theta^-_{b,s}$, $\Delta X_m=X_{a m}-X_{b m}$, with $c_s>0$, $\lambda_s>0$. Units: $c_s$ nats per ability SD; $\lambda_s$ nats per performance SD.

**Operator 10 — cut/comparison distributions.** [PAGE 15–16, Eqs. 12–14]:
$$p^{\text{cut}}(\psi,\theta^-\mid\mathcal{D}_A,\mathcal{D}_P)=p(\psi\mid\theta^-,\mathcal{D}_P)\,p(\theta^-\mid\mathcal{D}_A),\qquad q^{\text{cmp}}\big(\theta^-,\{\psi^{(w)}\}_{w\in W}\big)=p(\theta^-\mid\mathcal{D}_A)\prod_{w\in W}p\big(\psi^{(w)}\mid\theta^-,D_P^{(w)}\big).$$
Operational invariant [PAGE 22]: "At no stage can the pathway data update the ability distribution."

**Operator 11 — symmetric intervention and mediator gradient.** [PAGE 16, Eqs. 15–16]: $\theta_a(d)=d/2$, $\theta_b(d)=-d/2$, $\Delta\theta(d)=d$, and
$$g_s=\frac{\partial}{\partial d}\mathbb{E}\{\Delta X_m(d)\mid s\}=\beta^{\text{own}}_s-\beta^{\text{opp}}_s>0.$$

**Operator 12 — probability-scale pathway summaries.** [PAGE 17, Eqs. 17–19], with $\Delta X^{(w)}_m(d)=g^{(w)}_s d+e^{(w)}$, $e^{(w)}\sim N\big(0,2\{\sigma^{(w)}_X\}^2\{1-\rho^{(w)}\}\big)$:
$$\mathrm{DE}^{(w)}_s=\mathbb{E}_{e}\big[\sigma\{c^{(w)}_s+\lambda^{(w)}_s e\}-\sigma\{\lambda^{(w)}_s e\}\big],$$
$$\mathrm{IE}^{(w)}_s=\mathbb{E}_{e}\big[\sigma\{c^{(w)}_s+\lambda^{(w)}_s(g^{(w)}_s+e)\}-\sigma\{c^{(w)}_s+\lambda^{(w)}_s e\}\big],$$
$$\mathrm{TE}^{(w)}_s=\mathbb{E}_{e}\big[\sigma\{c^{(w)}_s+\lambda^{(w)}_s(g^{(w)}_s+e)\}-\sigma\{\lambda^{(w)}_s e\}\big],\qquad S^{(w)}_s=\mathrm{IE}^{(w)}_s/\mathrm{TE}^{(w)}_s,$$
with $\sigma$ the expit link. Units: DE, IE, TE in win-probability (dimensionless, $[0,1]$ under positivity); $S$ dimensionless. Degenerate regime: $\mathrm{TE}^{(w)}_s\to0$ makes $S$ a $0/0$ ratio; the correct reporting fallback is the $(DE,IE,TE)$ triple.

**Operator 13 — construction decomposition.** [PAGE 17, Eq. 20]: $G_s=S^{(\text{full})}_s-S^{(\text{set1})}_s$, $P_s=S^{(\text{full})}_s-S^{(\text{ctrl})}_s$, $W_s=S^{(\text{ctrl})}_s-S^{(\text{set1})}_s$, $G_s=P_s+W_s$. Reported values [PAGE 26, Table 3]: hard $S=(0.522,0.649,0.950)$, $W=0.127\,[0.053,0.203]$, $P=0.301\,[0.236,0.364]$, window fraction 30%; clay $(0.405,0.582,0.899)$, $W=0.177\,[0.066,0.288]$, $P=0.317\,[0.213,0.420]$, 36%; grass $(0.473,0.553,0.872)$, $W=0.080\,[-0.090,0.247]$, $P=0.319\,[0.173,0.464]$, 20%. Grass $W$ crosses zero — the marked non-identification cell.

**Operator 14 — control target and matched variance.** [PAGE 18–19, Props. 1–2]:
$$\mathbb{E}\big(R^{\text{ctrl}}_{im}\mid R_{im}\big)=R^{\text{full}}_{im};\qquad \mathrm{Var}\big(R^{\text{set1}}\mid\pi\big)=\mathrm{Var}\big(R^{\text{ctrl}}\mid\pi\big)=\frac{v}{n}+\Big(1-\frac{1}{n}\Big)q\ \xrightarrow[n\to\infty]{}\ q.$$
Assumptions: exchangeability conditional on latent rate $\pi$; $n$ fixed given $\pi$; without-replacement sampling. Breakdown: outcome-dependent stoppage breaks the first assumption; $q>0$ caps achievable reliability at $v/(v+q)$, so reliability matching can be infeasible; with-replacement sampling raises variance above the target and is excluded by design.

**Operator 15 — measurement-error algebra.** [PAGE 19, Eq. 21] and [PAGE 29, Eq. 22]:
$$\hat\lambda_s=\kappa_s\lambda_s,\qquad \hat c_s=c_s+\lambda_s g_s(1-\kappa_s),\qquad \kappa_s=\frac{\mathrm{Var}(\Delta X_{\text{true}}\mid\Delta\theta)}{\mathrm{Var}(\Delta X_{\text{obs}}\mid\Delta\theta)},$$
$$D_s=\hat c_s-\frac{\hat\lambda_s}{\hat\kappa_s}g_s(1-\kappa_s).$$
Derived sign rule: $D_s-c_s=\lambda_s g_s(1-\hat\kappa)\big(1-\kappa/\hat\kappa\big)$, so $D_s>0\iff\hat\kappa<\kappa$ and $D_s<0\iff\hat\kappa>\kappa$. Since $D_s$ "is negative in 10 of the 12 mediator-by-surface cells" [PAGE 29–30], the plug-in reliability exceeds the conditional reliability — the quantitative statement of "Equal $n$ does not imply equal information, so the point-count component is not an identified measurement-error effect" [PAGE 29]. Reported reliability-matched sensitivity: hard $W:0.127\to0.215$, clay $0.177\to0.329$ [PAGE 29].

**Operator 16 — positive control by outcome displacement.** [PAGE 28]: second-set outcome, "This is a positive-control analysis for outcome overlap, not an estimate of how much overlap occurs naturally." Hard $W:0.127\,[0.053,0.203]\to0.311\,[0.229,0.396]$; clay $0.328\,[0.217,0.442]$; WTA hard $0.109\,[-0.004,0.223]\to0.316\,[0.192,0.436]$.

**Diagnostics and their units.** Rank-normalized split-$\hat R$ max 1.012 (dimensionless); minimum bulk ESS 720 (draw counts); zero divergent transitions among retained draws [PAGE 30]; posterior predictive upset rate 0.3128 observed vs 0.3122 replicated, $p=0.440$ [PAGE 24]; log loss in nats, Brier score in squared-probability units, accuracy dimensionless, calibration slope 0.857 (dimensionless) [PAGE 24]; paired $t$ statistics 3.80 / 2.62 / 3.53 against frozen Elo, surface-blended Elo and static Bradley–Terry, and 1.06 / 0.32 / 1.24 against ranking baselines and prequential Elo [PAGE 24]. Interpretation limit, verbatim: "we report this as evidence that the pre-match abilities are credible, not as a forecasting claim" [PAGE 24].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage runs on two rails that the paper fuses, and the fusion point is where the trap lives.

**Rail A — paired comparison.** Zermelo (1929) framed tournament results as a maximum-likelihood problem over paired comparisons; Bradley & Terry (1952) supplied the logistic form now used in Eq. (3). Hunter (2004) gave MM computation; Glickman (1999) and Glickman & Stern (1998) made ability dynamic; Cattelan, Varin & Firth (2013) extended dynamic Bradley–Terry to sports tournaments. In tennis specifically, Kovalchik (2016, 2020) established Elo-family baselines and margin-of-victory extensions, and Radicchi (2011) used network analysis for all-time ranking. **Rail A's inherited habit:** strength is a latent scalar inferred to exhaustion from results. When a pathway question is asked of Rail A, there is no vocabulary for "expressed how" — only "how strong."

**Rail B — mediation and its measurement hazards.** Baron & Kenny (1986) supplied the regression template; Robins & Greenland (1992) and Pearl (2001) supplied counterfactual definitions; Imai, Keele & Tingley (2010), Imai, Keele & Yamamoto (2010) and VanderWeele (2015) supplied identification, estimation and sensitivity; VanderWeele (2010) and Cinelli & Hazlett (2020) quantified unmeasured mediator–outcome confounding; Suissa (2008) named immortal time bias; Carroll et al. (2006) systematized measurement error in mediators and outcomes; Rubin (1987) supplied the imputation logic; Plummer (2015) and Jacob et al. (2017) supplied modular/cut posteriors. **Rail B's inherited habit:** timing and precision are separate literatures. Suissa handles "information from inside the outcome period"; Carroll handles "the mediator is noisy." Nothing in either canon handles the case where shortening the window *simultaneously* removes outcome overlap and destroys precision — and where the two are mechanically coupled because the number of points is itself an outcome.

**The junction.** Klaassen & Magnus (2001) proved points are neither independent nor identically distributed; Barnett & Clarke (2005) used service statistics for forecasting; Ingram (2019) built a point-level hierarchical model. These put point-level structure next to Bradley–Terry but never asked how a pre-match advantage is *expressed* through a within-match statistic whose construction is itself a design choice. The paper's contribution is precisely the missing crossing: a mediator-shaped question asked of a paired-comparison model, with the measurement literature's two hazards (timing, precision) shown to be one hazard in this domain.

**Multi-week traps that will persist.**

1. **The 0.95 trap.** A full-match service share near 0.95 reads as "winning is serving." It will keep being reported because the number is stable-looking, high-precision and narratively satisfying — and because the counter-construction costs an extra refit. Countermeasure: publish $\mathrm{DE}$ alongside $S$; the collapse from 0.050 to 0.005 is the tell.
2. **The window fix that isn't.** Analysts who learn trap 1 will regress to first-set-only mediators. That trades an overlap problem for a precision problem and *still* sits inside the outcome window — [PAGE 27]: "an analysis can have the first without the second."
3. **The equal-$n$ fairness trap.** [PAGE 29]: "Equal $n$ does not imply equal information." Matching on sample size is the default fairness heuristic across evaluation workflows; it is now shown to be wrong on every surface.
4. **The "clutch/pressure" re-description.** Any within-match segmentation (pressure points, tie-breaks, deciding sets) inherits the same overlap-versus-count entanglement; the genealogy predicts a wave of such analyses reproducing the 1.6–2.2× inflation [PAGE 30] without the control arm.
5. **The retirement censoring trap.** [PAGE 25] records that high-predictive-surprise matches "end in retirement, where the outcome is not produced by the play the mediator measures" — a censoring event masquerading as a sporting anomaly.
6. **The season-boundary trap.** Ratings frozen at a season boundary being "indistinguishable in accuracy from ratings updated after every match" [PAGE 31] will be misread as "updating is unnecessary"; the paper's own hedge (grass untested, two comparators read the holdout season) constrains this severely.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
**Level 0 (the practitioner's habit).** Under time pressure, the analyst reaches for the statistic that is already on the screen: full-match service points won. The belief is not "overlap is fine" — it is "I am reading the mechanism." The regression is *availability-driven*, not theory-driven, which is why it survives correction attempts: the corrected statistic (first set) feels less authoritative precisely because it is noisier.

**Level 1 (crisis habit regression).** When a decomposition produces an implausible near-unit share, the reflexive repair is to shrink the mediator window. This is a habit regression to a *seemingly* conservative choice, and it fails on two counts: precision loss attenuates $\hat\lambda_s$ via $\kappa_s$ [Eq. 21], and the shortened window remains inside the outcome. The crisis repair therefore moves the number in the desired direction for the *wrong reason*, which is worse than no repair because it produces a defensible-looking 0.52 that is still construction-driven.

**Level 2 (counter-trap construction).** The paper's counter-move requires modelling the *analyst's degrees of freedom* as an explicit factor: window $\times$ count, with a control that fixes one while varying the other. This is a theory-of-mind move about the analytic pipeline, not about tennis: it assumes a future reader will vary the window and mistake the resulting movement for a substantive finding. The control is the inoculation.

**Level 3 (the clock).** Three clocks operate and must not be conflated. (i) *Season clock*: expanding window $t<T$, exposure at $T-1$, extra innovation $\sigma_\omega\sqrt{g_i(T)}$ [Eq. 5] — this clock establishes temporal ordering of ability. (ii) *Match clock*: first set precedes the final result but is inside its window; only the second-set outcome places the mediator entirely before the modelled outcome [PAGE 28]. (iii) *Sampling clock*: $n_{im}$ points drawn without replacement — this clock controls precision, and it is corrupted by the set-termination stopping time. The recursive error is treating clock (i)'s success as establishing clock (ii)'s property. The paper names this exactly: "Temporal ordering and freedom from outcome overlap are therefore distinct properties of a mediator."

**Level 4 (adversarial reader recursion).** A downstream consumer reasons: "the paper says the mediated share rises 1.6–2.2× between constructions, so the low construction is the honest one." That inference is also wrong — the low construction is not overlap-free, only *less* overlapped by an unknown amount, and it is measured worse. The correct consumer belief is a *set*: $\{S^{(\text{set1})},S^{(\text{ctrl})},S^{(\text{full})}\}$ with the two components, never a point. The paper's grammar enforces this — Table 3 reports the components with intervals, not a single corrected share.

**Failure mode of the counter-trap itself.** The control invites over-trust: because Proposition 1 guarantees a common finite-record target, a reader may believe the control is overlap-free. It is not — the control spans the whole match and therefore "carries whatever outcome overlap the conventional mediator carries" [PAGE 26–27]. The recursion terminates only when the reader holds three facts simultaneously: control matches *count*, not *window*; second-set outcome matches *window*, not *count*; and neither isolates overlap from construct change.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
**Adjudication rule (derived, not asserted).** Because all three constructions are evaluated on the same ability draws under Eq. (14), any cross-layer shock that enters through $\theta^-$ is **common-mode** and cancels in $G_s$, $P_s$, $W_s$. Any shock that enters through the mediator's conditional distribution — $(\alpha_s,\beta_s,\sigma_X,\rho)$, the point count, or the exchangeability of points — is **differential-mode** and does *not* cancel. Veto scope therefore attaches only to the differential channel.

**Veto 1 — biomechanical fatigue (differential; partial veto of $W_s$).** Serve velocity and first-serve percentage decline across a match; if the latent service rate $\pi_{im}$ is segment-dependent, the simulation's construct-change dial $\varsigma\neq0$ [PAGE 22–23], and $W_s$ mixes overlap with physiology. Veto: $W_s$ cannot be read as an overlap share. Non-veto: $P_s$, which compares two full-window constructions at different counts and is insensitive to monotone within-match drift in expectation.

**Veto 2 — surface friction and point dependence (differential; hard veto on reliability matching).** Clay lengthens rallies, raising pairwise point covariance $q$. Under Prop. 2 the variance floor $(1-1/n)q$ binds harder on clay, so equal $n$ yields *lower* $\kappa_s$ on clay. Testable consequence: clay should show the largest reliability-matched correction, and it does — $0.177\to0.329$ versus hard $0.127\to0.215$ [PAGE 29]. Grass, with the shortest season and heaviest partial pooling, shows $W=0.080\,[-0.090,0.247]$, an interval spanning zero: the cross-layer veto is *not* adjudicable on grass at current sample size, and the paper's own hedge ("the grass ratings are not tested out of sample" [PAGE 24]) concurs.

**Veto 3 — weather and playing environment (differential; scope limit).** Wind, heat rules, roof closure and ball change alter $\lambda_s$ and $\rho$ within and across matches. Because $\lambda_s$ is fit per surface but assumed constant within surface-season, an unmodelled environment shock biases $\lambda_s$ and hence both $\mathrm{IE}$ and $S$. Veto: absolute claim of a "surface-specific" mediated share. Non-veto: the sign of $P_s$, which is driven by count arithmetic and is robust to moderate $\lambda$ misspecification.

**Veto 4 — medical censoring (hard veto on specific rows).** Retirements and walkovers mean $Y$ is not generated by the play $X$ measures. [PAGE 25]: high-surprise results "end in retirement, where the outcome is not produced by the play the mediator measures." These rows must be dropped, and the source confirms the refit without them preserves conclusions [PAGE 28].

**Veto 5 — scheduling and form (common-mode; no veto).** Congested calendars, travel, injury and confidence produce within-season level shifts that a one-innovation-per-season random walk misses. But because every construction shares the same $\theta^-$ draw, this error is common-mode across $w$ and largely cancels in $P_s$ and $W_s$ — it inflates uncertainty in the levels (and hence in $\mathrm{TE}$) without manufacturing the construction contrast. This is the single most important adjudication: the paper's central claim is *protected* by the modular cut, while its *level* estimates are not.

**Residual non-adjudicable zone.** Overlap versus construct change is not separated by any physical layer available here; the source states it directly: "How much of it is outcome overlap this design does not say" [PAGE 27]. Any external claim that assigns a specific overlap percentage from these data is vetoed by construction.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Each veto is executable against the paper's stated pipeline and the accompanying reproduction archive (provenance manifest with URL, retrieval date and SHA-256 digest [PAGE 32]), and each carries a pre-registered prediction with an explicit falsification condition.

**Veto A — within-surface outcome permutation (null-generator test).** Procedure: permute $Y_m$ within surface, refit all three constructions under Eq. (14), repeat $R=1{,}000$ times. Prediction: (i) $|\bar P_s|<0.03$ and $|\bar W_s|<0.03$ on hard, with the sign of the point estimate random across seeds; (ii) 90% intervals cover zero in $\ge 90\%$ of replicates on hard and clay; (iii) the $(\mathrm{DE},\mathrm{IE},\mathrm{TE})$ triple is reported with all three intervals covering zero, and $S$ is *suppressed*, because $\mathrm{TE}\to0$ makes it a $0/0$ ratio. Falsifier: if the pipeline reports a stable $S\approx0.5$ under permutation, the estimand implementation is broken and every reported share is void. Anchors: [PAGE 28] "permuting outcomes within surface removes both components"; [PAGE 23] null coverage "0–2% of datasets against a nominal 10%."

**Veto B — reliability-matched reallocation (conservation test).** Procedure: multiply the control's point count by the inverse-variance factor equating $\kappa_{\text{ctrl}}$ to $\kappa_{\text{set1}}$, then recompute. Prediction: $W_{\text{hard}}:0.127\to0.215$ and $W_{\text{clay}}:0.177\to0.329$ [PAGE 29], and — because $G_s$ is fixed by the two endpoint constructions, neither of which the re-matching touches — the point-count component must absorb the entire change: $P_{\text{hard}}:0.301\to0.213$ and $P_{\text{clay}}:0.317\to0.165$, since $0.428-0.215=0.213$ and $0.494-0.329=0.165$. Falsifier: if $|G_s^{\text{re-matched}}-G_s^{\text{primary}}|>0.01$, the claim that re-matching touches only the control is false and the decomposition is not a partition. Secondary prediction: on grass, where $q$ is largest relative to $n$, the required $\kappa^\ast$ may exceed the floor $v/(v+q)$ and no count factor exists — the routine must return "infeasible," not a number.

**Veto C — outcome-window displacement (positive-control monotonicity test).** Procedure: re-define $Y$ as winning the second set, keeping all three mediator constructions unchanged, and refit on ATP and WTA. Prediction: (i) $W_s$ increases on every surface where the mediator's window is strictly inside the displaced outcome's complement: hard $0.127\,[0.053,0.203]\to0.311\,[0.229,0.396]$ and clay $\to0.328\,[0.217,0.442]$ [PAGE 28], a factor of roughly 2.5; (ii) the increment $\Delta W_s=W_s^{(\text{set2})}-W_s^{(\text{match})}$ has a 90% interval excluding zero on hard and clay; (iii) the sign replicates on the independently constructed WTA sample, hard $0.109\,[-0.004,0.223]\to0.316\,[0.192,0.436]$ [PAGE 28]; (iv) as a corollary, $G_s^{(\text{set2})}>G_s^{(\text{match})}$ on hard, because the full-match mediator now overlaps the second-set outcome more heavily. Falsifier: sign reversal of $\Delta W_s$ on either tour, or an increment concentrated in $P_s$ rather than $W_s$ — either would mean the displacement acts through count, not window, and the paper's positive-control interpretation collapses.

**Cross-veto invariant (the decisive falsifier for the central claim).** Construct a fourth arm in which the mediator is built