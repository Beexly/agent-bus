---
source: "2026 - A Bayesian bivariate conditional Poisson regression for goal dependence in the English Premier League - Nolan et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/preprints/arXiv/2026"
pages: 22
model: deepseek/deepseek-v4.1-flash-1017
words: 7095
---

<NATIVE_REASONING>
The user wants a deep, multi-section analysis of this paper. They've given a strict format with XML sections, minimum 1,000 words total, with specific requirements. Also invariants: no betting lines, no toy equations, formal LaTeX with units, cite [PAGE N] markers with verbatim quotes where source pages provided.

Let me map page numbers. The PDF pages: page 1 = title/abstract, page 2-3 = intro, page 4 = data, page 5 = descriptive stats/Table 1/Figure 1, page 6 = methodology BCP, page 7 = joint pf, regression, likelihood, page 8 = Bayesian inference, page 9 = PPC, page 10 = model selection/ELPD, page 11 = results Table 2, page 12 = Figure 3/PPC, page 13 = Figure 4/discussion, page 14 = discussion/conclusion, page 15 = conclusion/software/references start, page 16-17 = references.

Let me carefully note the page markers. Actually the text has page numbers embedded: "1" after abstract authors, then footnote... Let me count.

Page 1: title, authors, abstract, keywords, Section 1 Introduction begins "Football scores are naturally represented..."
Page 2: continuation "effort. Consequently..." through "Foul measures may provide additional inform-"
Page 3: "ation because they capture..." through "The remainder of this article..."
Page 4: "2 Data" ... "2.2 Preliminary insights" ... "Scoring was higher for both teams in 2023-24, mean home and away goals 1.80 and 1.48"
Page 5: Table 1, Figure 1, correlations
Page 6: "3 Methodology" ... BCP representation (1)
Page 7: joint pf, likelihood (2)
Page 8: 3.1 Bayesian inference, empirical Bayes priors
Page 9: prior independence, MCMC, Stan, 3.2 PPC
Page 10: 3.3 model selection, 4 Results, ELPD
Page 11: Table 2, Figure 2
Page 12: Figure 3, PPC discussion
Page 13: Figure 4, 4.1 Discussion
Page 14: covariate results discussion, Section 5 Conclusion
Page 15: extensions, software, references begin
Page 16: references
Page 17: references end

Good.

Now I need to write sections:

<THINK_TRACE> >=400 words multi-hop derivation & gray-zone audit.
<SOURCE_OPERATORS_AND_EQUATIONS> Formal LaTeX, units, page citations, breakdown regimes.
<RETROCAUSAL_GENEALOGY> Historical/scientific lineage & multi-week traps.
<RECURSIVE_THEORY_OF_MIND> Crisis habit regression vs counter-trap vs clock.
<CROSS_LAYER_VETO_ADJUDICATION> Physical/biomechanical/weather veto proof.
<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions.

Total >= 1000 words. Let's aim ~2,200-2,800 words.

Key math to be precise:

BCP: Y1 ~ Poisson(λ1), Y2|Y1=y1 ~ Poisson(μ2 e^{φ y1}), μ2 = λ2 exp{-λ1(e^φ -1)}.

Joint pmf: f(y1,y2) = (λ1^{y1} λ2^{y2}/(y1! y2!)) exp{-λ1(1 + y2(e^φ -1)) - λ2 exp[-λ1(e^φ -1) + φ y1] + φ y1 y2}.

Moments: E(Y1)=Var(Y1)=λ1. E(Y2)=λ2, Var(Y2)=λ2 + λ1 λ2 (e^φ -1)^2.

Cov = λ1 λ2 (e^φ -1).

Corr = (e^φ -1) sqrt{ λ1 λ2 / (1 + λ2 (e^{λ1(e^φ-1)^2} - 1)) }.

Hmm — the text as OCR'd: "Corr(Y1,Y2) = (e^φ − 1) sqrt{ λ1 λ2 / (1 + λ2 (e^{λ1(e^φ −1)^2} − 1)) }". That is the form implied. Let me derive: Var(Y1)=λ1, Var(Y2)=λ2+λ1λ2(e^φ-1)^2. Corr = λ1λ2(e^φ-1) / sqrt{λ1 · [λ2 + λ1λ2(e^φ-1)^2]} = (e^φ-1) · [λ1λ2 / sqrt{λ1 λ2 (1 + λ1(e^φ-1)^2)}] / ... let me do it carefully.

Cov = λ1λ2(e^φ-1).
Var(Y1)·Var(Y2) = λ1 [λ2 + λ1λ2(e^φ-1)^2] = λ1λ2 [1 + λ1(e^φ-1)^2].
So Corr = λ1λ2(e^φ-1) / sqrt{λ1λ2[1+λ1(e^φ-1)^2]} = (e^φ-1) sqrt{λ1λ2} / sqrt{1 + λ1(e^φ-1)^2}.

Hmm, that gives sqrt{λ1 λ2 / (1 + λ1 (e^φ -1)^2)}. The OCR shows "1 + λ2(e^{λ1(e^φ−1)^2} − 1)" which is garbled. The correct algebra: denominator 1 + λ1(e^φ-1)^2 under the radical... but with the sqrt{λ1λ2}... Actually let's be careful: Corr = (e^φ-1)·sqrt{λ1λ2} / sqrt{1+λ1(e^φ-1)^2}.

So Corr = (e^φ-1) sqrt{ λ1 λ2 / (1 + λ1 (e^φ -1)^2) }.

Hmm but with the generalization, some parameterizations have Var(Y2) = λ2 + λ1λ2(e^φ-1)^2 which is what's stated. So yes, my derivation is right, and I should note the OCR garbling and reconstruct. I'll flag that the machine conversion corrupted the denominator and give the algebraically consistent form, noting the source's stated Var(Y2) implies it. That's a good "gray-zone audit" point — honest.

Also note: since e^φ - 1 has the same sign as φ, sign(Corr) = sign(φ). And the correlation is bounded; as φ→0, Corr→0 but the "nonlinear" note: actually Corr ≈ φ·sqrt{λ1λ2} near φ=0 — so derivative nonzero; "values of φ closer to zero corresponding to stronger dependence" — that's the paper's claim, which seems odd; actually the paper says (citing Piancastelli 2023b Section 2) that the correlation as a function of φ is nonlinear with values of φ closer to zero corresponding to stronger dependence even though φ=0 is independence. Hmm, that's a bit of a strange statement — I should flag it as a gray zone. Actually in the BCP, |Corr| can be non-monotone in φ when λ1 is large: as φ grows, numerator ~ e^φ sqrt{λ1λ2}, denominator ~ sqrt{λ1} e^φ (for large φ), so Corr → sqrt{λ2}·... let me compute: for φ→∞, (e^φ-1) ~ e^φ; sqrt{1+λ1 e^{2φ}} ~ sqrt{λ1} e^φ. So Corr → sqrt{λ1λ2}/sqrt{λ1} = sqrt{λ2}. Hmm, that exceeds 1 if λ2 > 1. Wait that can't be. Let me recheck Var(Y2): Var(Y2) = λ2 + λ1λ2(e^φ-1)^2. Hmm, if λ2 is mean away goals ~1.3, sqrt{λ2} > 1 → Corr > 1. So the formula must be different. Let me reconsider.

Actually likely Var(Y2) = λ2 + λ1 λ2 (e^φ - 1)^2 ... hmm. Let's derive properly from the conditional representation.

Y2 | Y1 = y1 ~ Poisson(μ2 e^{φ y1}) with μ2 = λ2 exp{-λ1(e^φ - 1)}.

E[Y2] = E[μ2 e^{φ Y1}] = μ2 exp{λ1(e^φ -1)} = λ2. ✓.

E[Y2^2] = E[ μ2 e^{φY1} + μ2^2 e^{2φY1} ] = λ2 + μ2^2 exp{λ1(e^{2φ}-1)}.
Var = λ2 + μ2^2 e^{λ1(e^{2φ}-1)} - λ2^2 = λ2 + λ2^2 [ e^{-2λ1(e^φ-1) + λ1(e^{2φ}-1)} - 1 ].
Exponent: λ1(e^{2φ} - 1 - 2(e^φ -1)) = λ1(e^{2φ} - 2e^φ + 1) = λ1(e^φ - 1)^2. ✓
So Var(Y2) = λ2 + λ2^2 [ e^{λ1(e^φ-1)^2} - 1 ].

So the OCR's "λ2 + λ1λ2(e^φ-1)^2" is the first-order approximation, and the true form is λ2 + λ2^2(e^{λ1(e^φ-1)^2} - 1). Then Corr = λ1λ2(e^φ-1)/sqrt{λ1[λ2 + λ2^2(e^{λ1(e^φ-1)^2}-1)]} = (e^φ-1) sqrt{λ1λ2}/sqrt{1 + λ2(e^{λ1(e^φ-1)^2}-1)}.

That matches the OCR denominator "1 + λ2(e^{λ1(e^φ−1)^2} − 1)" — good. And the numerator sqrt{λ1λ2}. So:

Corr = (e^φ - 1) · sqrt{ λ1 λ2 / (1 + λ2 ( e^{λ1 (e^φ -1)^2} - 1 )) }.

Now check φ→∞: numerator e^φ sqrt{λ1λ2}; denominator sqrt{1 + λ2 e^{λ1 e^{2φ}}} ~ sqrt{λ2} e^{λ1 e^{2φ}/2} → super-exponential, so Corr→0. Good, bounded in [-1,1]. And Corr is non-monotone in |φ|: rises then falls. That explains "values of φ closer to zero corresponding to stronger dependence" — because for large |φ|, the variance of Y2 explodes (overdispersion), so the correlation attenuates toward zero. That's the nonlinearity. Great — that's a nice multi-hop derivation and a genuinely important gray-zone point: φ = -0.107 is NOT "strong"; the mapping φ → ρ depends on λ1, λ2. Let me compute the implied correlation at the estimates.

Under H→A: Y1 = Home goals, so λ1 = home mean ≈ 1.57-ish (2018-19) but across pooled sample maybe ~1.57. Let's use pooled mean home goals = (1.57+1.35+1.80)/3 = 4.72/3 = 1.5733. λ2 = away mean = (1.25+1.34+1.48)/3 = 4.07/3 = 1.3567.

φ = -0.107. e^φ = 0.89847. e^φ - 1 = -0.10153. (e^φ-1)^2 = 0.010308. λ1·that = 1.5733×0.010308 = 0.016217. e^{0.016217} - 1 = 0.016349. Times λ2 = 1.3567 → 0.022182. Denominator: sqrt{1+0.022182} = 1.011030. Numerator: (e^φ-1)·sqrt{λ1λ2} = -0.10153 × sqrt{1.5733×1.3567} = sqrt{2.1348} = 1.46110. → -0.10153×1.46110 = -0.14835. Divide by 1.01103 → -0.14673.

So implied ρ ≈ -0.147. So Cov = λ1λ2(e^φ-1) = 2.1348 × (-0.10153) = -0.21675 goals².

Also note: -0.147 is quite close to the observed sample correlation which the PPC figure 4 left panel refers to. Good grey-zone: the "one-goal increase multiplies conditional mean by 0.899" is correct: exp(-0.107)=0.8985 → -10.15%.

Also note the "elasticity" interpretation: β1,Att = 0.024 on log(Att+1) — the paper says "1% increase in attendance associated with ~0.024% increase in expected home goals". Careful: d log λ1/d log(Att) = β1,Att × Att/(Att+1) ≈ 0.024 × 0.99997 at Att = 38,181. So elasticity ≈ 0.024 exactly. ✓ good.

But note: a more meaningful number — from 462 to 38,181, log(38182)-log(463) = 10.55 - 6.138 = 4.412. Times 0.024 = 0.1059 → exp = 1.1117, i.e. +11.2% home goals across the full attendance swing. That's a physically modest effect. Meanwhile season means: 1.35 → 1.80 (2023-24). Hmm, the paper says home mean 1.35 in 2020-21 and 1.57 in 2018-19 — a ratio 1.57/1.35 = 1.163, +16.3%. So the attendance coefficient explains roughly 2/3 of that? Interesting cross-check. But confounded.

Away: β2,Att = 0.000, CI [-0.011, 0.011].

Intercepts: β01 = 0.146 with λ1 = exp(0.146 + 0.024·log(Att+1) + 0.012·FS1)... hmm, wait: which is β01? Table 2 lists β01, β1,Att, β1,AF, β02, β2,Att, β2,HF. Note φ is the third listed. Under H→A, Y1=Home. So β1,* corresponds to home. β1,AF = away fouls → home goals. ✓ consistent with discussion. β2,HF = home fouls → away goals. ✓.

Note: β1,AF mean 0.012 but 95% CI [−0.001, 0.025]; the text says "the results on the parameter β1,AF indicate that away team fouls positively impact home team goals" — but the CI includes zero. The paper itself then walks this back in the discussion: "includes zero... do not establish a decisive foul effect." That's an internal inconsistency between §4 narrative and §4.1/§5 — a good gray-zone audit item. Actually check page 11 text: "While the results on the parameter β1,AF indicate that away team fouls positively impact home team goals, the reverse is not decisive." Yes — asserts positive impact despite CI including zero. Then page 14: "The posterior mean ... is positive (0.012), but its 95% credible interval, [−0.001, 0.025], includes zero." Contradiction in evidential framing. Good catch.

Also note: β01 = 0.146, 95% CI [−0.022, 0.311] includes zero; yet λ1 must be positive... intercept at log(Att+1)=0 i.e. Att=0 (closed doors), FS=0. exp(0.146)=1.157. Center of the posterior for the closed-door baseline home scoring rate with zero fouls suffered. Fine.

Also units: goals per match for λ; φ is per-goal, dimensionless (units of inverse goals); β_Att is dimensionless elasticity; β_F is per foul (inverse fouls). Var units goals². Cov goals².

Now breakdown/singularity regimes:
1. φ → 0: independence; Corr = 0 exactly; BCP reduces to product of Poissons with λ2. Derivation: μ2 → λ2.
2. Large |φ| with fixed λ1: Var(Y2) blows up doubly-exponentially in λ1 e^{2φ}; Corr → 0; the model degenerates into an overdispersed marginal with vanishing correlation — the "dependence" parameter becomes unidentifiable from correlation but identifiable from higher moments. Breakdown regime: λ1(e^φ-1)^2 ≳ 1 → Var(Y2) ≥ λ2(1 + λ2·1.72) i.e. massive. For EPL λ1≈1.57, λ1(e^φ-1)^2 = 1 requires (e^φ-1)^2 = 0.636, |e^φ-1| = 0.7975, φ = ln(1.7975)=0.586 or ln(0.2025)=-1.597. So the usable φ window for the EPL marginal means is roughly (-1.6, 0.59) before overdispersion dominates. Nice quantitative breakdown regime.
3. λ1 → 0 (no home goals possible): the conditional dependence channel vanishes; φ unidentifiable. Fisher information for φ ∝ λ1 λ2 (e^φ)^... approximately. Actually ∂/∂φ log f involves y1 y2 - stuff; information ~ λ1λ2 e^φ. So with λ1λ2 ≈ 2.13, information per match is small; 1140 matches → SE 0.020 matches observed. Good consistency check: posterior SD of φ is 0.020. Let me sanity check: IF for φ ~ λ1λ2·(something). Var(φ̂) ≈ 1/(n·I). SD = 0.020 → n·I = 2500 → I = 2.19. And λ1λ2 = 2.13. Beautiful — I ≈ λ1λ2. That's a strong internal consistency check I can present: the posterior SD for φ is exactly what you'd expect from Fisher information ≈ λ1λ2 per match. Excellent multi-hop verification.
4. Attendance singularity: log(Att+1) is bounded below at Att=0 → log(1)=0; the +1 shift regularizes; without it, log(0) = -∞ diverges and the coefficient would be unidentifiable/driving λ→0. The paper notes this [PAGE 7].
5. Collinearity: attendance and season are nearly perfectly confounded — 2020-21 has mean 462. So the design matrix's condition number is large; β_Att and season effects not separately identified. Paper concedes [PAGE 14].
6. Prior: empirical Bayes with θ ~ N(0, se(θ̂)²) — double use of data (MLE informs prior, then data informs posterior) → posterior contraction underestimated; nominal 95% CIs not frequency-calibrated. That's a real gray zone: the CI for φ excludes zero possibly partly by prior-data double dipping. Good audit.

Also PPC: they check marginal means/variances, correlation, proportion of home losses. But not: draw proportion, scoreline frequencies like 0-0/1-1 (where Dixon-Coles low-score adjustment matters), or the excess of draws. The paper doesn't check draws — a known failure mode. Good counterfactual veto.

Now on the "traps" concept. The prompt mentions "multi-week traps", "crisis habit regression vs counter-trap vs clock", "physical/biomechanical/weather veto proof". These are sports-analytics decision-hygiene framings. I'll interpret them within a pure-modelling context (no betting lines): e.g., "multi-week trap" = treating a 3-season pooled panel as if seasonal regimes were exchangeable; "crisis habit regression" = reverting to independent-Poisson whenever a draw-heavy run occurs; "clock" = the season-boundary / attendance-regime boundary.

I must include "≥1,000-word depth across these exact XML sections". I'll write substantive prose.

Let me also do the retrocausal genealogy: Maher 1982 → Dixon-Coles 1997 → Karlis & Ntzoufras 2003 → Holgate 1964, Kawamura 1984 → Berkhout & Plug 2004 → Piancastelli et al. 2023a/2023b → Petretta et al. 2025 → Florez et al. 2025, Zhang et al. 2026, Michels et al. 2025, Philipson 2026, Koopman & Lit 2015, Egidi et al. 2018. Plus home advantage lineage: Clarke & Norman 1995, Pollard 2006, Nevill et al. 2002, Bryson et al. 2021, Scoppa 2021, Fischer & Haucap 2021, McCarrick et al. 2021.

"Retrocausal" angle: how a 2026 Bayesian paper rewrites the 2004 conditional Poisson as "anticipating" it; the prior-choice inheritance; how the COVID natural experiment retroactively becomes the identification strategy for a model whose lineage predates it by 16 years. Multi-week traps: e.g., the 2020-21 season is a single 380-match block; a model fit on the 2018-19 only would produce different φ; the trap of refitting weekly and chasing φ drift.

RLVR counterfactual vetoes: 3 verifiable scenarios with predictions. RLVR = reinforcement learning with verifiable rewards. So: counterfactual tests where a proposed claim would be vetoed by a checkable computation.

Veto 1: "away fouls positively impact home goals" — verifiable by recomputing 95% CI coverage; the CI includes zero → veto the causal verb.
Veto 2: "negative dependence is strong" — compute implied ρ = -0.147 from posterior means; veto any claim of |ρ| > 0.3 or "strong"; also check φ→ρ mapping non-monotonicity.
Veto 3: "attendance causes home advantage" — verifiable by within-season restricted comparison; prediction: refit with season fixed effects, β1,Att shrinks toward 0 and CI covers zero, because attendance is collinear with season regime (462 vs 38181 vs 38613).

Maybe also a PPC veto: draws. Let me pick three strongest and add predictions with numbers.

Also for RLVR verification: reproducibility checks — R̂ ≈ 1, ESS, 4 chains × 2000 iters, 1000 warmup. ELPD differences: -3552.0 vs -3552.1 (Δ=0.1, within PSIS-LOO SE which is typically ~10-20 for n=1140) → the direction preference from joint ELPD is noise; veto any claim that A→H and H→A differ jointly. Then ELPD2: -1721.8 vs -1817.2, Δ=95.4, which is large relative to SE → the conditional preference is real but it's a factorization artifact, not causality. Paper itself says this [PAGE 13]. Good.

Note also: ELPD2 numbers — -1721.8 for H→A. Sum of ELPD2 across... n=1140, so per-match -1.51 vs -1.59. Fine.

Also: the joint ELPD-LOO of -3552.0 for BCP vs -3565.0 for Poisson: Δ = 13.0, with SE of the difference maybe ~5-8; paper says "some indication of improvement" — appropriately hedged [PAGE 10].

Now writing. Need [PAGE N] citations with verbatim quotes. I'll quote accurately from the text.

Useful verbatim quotes:
- PAGE 6: "Observe that this particular model formulation can only accommodate non-negative dependence, which is not realistic when modeling competing teams' goal counts at the match level."
- PAGE 6: "Notably, the BCP model introduces a directional structure because the distribution of Y2 is conditional on Y1."
- PAGE 7: "the unit shift (log(Atti + 1)) ensures the transformation is well-defined during periods of zero attendance, i.e. closed doors matches that occurred during the 2020-21 season."
- PAGE 8: "we adopt the empirical Bayes approach, more specifically, letting the frequentist maximum likelihood estimates (MLEs) inform the π(·) distributional setup"
- PAGE 10: "The ELPD-LOO estimates were BCP A→H: −3552.0, BCP H→A: −3552.1 and Poisson: −3565.0."
- PAGE 11: "The posterior for ϕ is centered at −0.107, with a 95% credible interval that excludes zero, indicating a statistically significant negative relationship."
- PAGE 11: "While the results on the parameter β1,AF indicate that away team fouls positively impact home team goals, the reverse is not decisive."
- PAGE 13: "This direction should be interpreted as a predictive factorization of the joint distribution, however, rather than as evidence that home team goals causally determine away team goals."
- PAGE 13: "a one-goal increase in the home score multiplies the conditional expected number of away goals by exp(−0.107) ≈ 0.899"
- PAGE 14: "a 1% increase in attendance is associated with about a 0.024% increase in the expected number of home goals"
- PAGE 14: "attendance, pandemic conditions, and season are closely intertwined in these data, so the coefficient should be interpreted as an adjusted association rather than a causal crowd effect."
- PAGE 5: "Attendance and home fouls were weakly negatively correlated (r = −0.1097, p = 0.0002)"
- PAGE 4: "mean home goals declined from 1.57 to 1.35, whereas mean away goals increased slightly from 1.25 to 1.34."
- PAGE 14/15: "the current specification does not explicitly account for team-specific attacking and defensive strengths."
- PAGE 6: "which implies that the direction of dependence is determined by the sign of ϕ."
- PAGE 7: "the correlation structure as a function of ϕ is nonlinear, with values of ϕ closer to zero corresponding to stronger dependence even though ϕ = 0 is the independence case."

Wait, that last quote is on page 7: "In particular, we note that the correlation structure as a function of ϕ is nonlinear, with values of ϕ closer to zero corresponding to stronger dependence even though ϕ = 0 is the independence case." Yes, page 7.

Good — I can use that to justify the non-monotonicity discussion.

Let me make sure no betting lines (no odds/handicap/spread/totals). Avoid mentioning "over/under", "Asian handicap". I will mention "scorelines" which is fine. Avoid "market". Egidi et al. reference mentions bookmakers' odds — I'll avoid quoting that. Don't discuss betting.

Now let me write. I'll be careful with LaTeX and units.

Word count: I'll aim for ~2,600-3,000 words.

Let me draft.

<THINK_TRACE> — ≥400 words of multi-hop derivation & gray-zone audit.

Content: 
- Step 1: from independence to shared-component BP: Cov = λ0 ≥ 0 forces non-negative dependence — structurally wrong for "parking the bus".
- Step 2: BCP conditional factorization; derive μ2 by requiring E[Y2] = λ2 (tower property over Poisson mgf).
- Step 3: derive Var(Y2) exactly: λ2 + λ2²(e^{λ1(e^φ-1)²} −1); note the pdftotext mangles it; algebra dictates the exponential form; cross-check with Corr formula denominator.
- Step 4: Corr non-monotone in φ; explain "closer to zero ↔ stronger" claim.
- Step 5: plug posterior means → ρ̂ ≈ −0.147, Cov ≈ −0.217 goals².
- Step 6: Fisher information sanity check → posterior SD 0.020 ≈ 1/sqrt(n λ1λ2).
- Gray zones: prior double-dipping; collinearity attendance↔season; fouls CI contradiction; PPC omissions (draws, scorelines); ELPD Δ=0.1 within noise; directional factorizations not causal; no team strengths.

<SOURCE_OPERATORS_AND_EQUATIONS> — formal LaTeX with units, page cites, breakdown regimes.

<RETROCAUSAL_GENEALOGY> — lineage and multi-week traps.

<RECURSIVE_THEORY_OF_MIND> — crisis habit regression vs counter-trap vs clock.

<CROSS_LAYER_VETO_ADJUDICATION> — physical/biomechanical/weather veto.

<RLVR_COUNTERFACTUAL_VETOES> — three verifiable veto scenarios with predictions.

Let's write it out.

For the physics layer: worth noting — goals are the only observable; the "physical" channel is fouls (contact events), attendance (acoustic pressure ~ SPL dB, crowd noise raises referee arousal per Nevill et al.), and weather is absent from the model — so any weather claim is unidentifiable in this specification, i.e., a hard veto: the paper's design matrix contains exactly three covariates (FS1, FS2, log(Att+1)) [PAGE 7], so weather/pitch/temperature cannot be adjudicated. That's a clean cross-layer veto: unmodeled layer → claim not licensed.

Also biomechanical: no tracking data, no sprint distance, no player load; fouls are a crude proxy for physical duels. Also no rest-days, no travel (Pollard 2006 territorial factors). So cross-layer claims are vetoed by design.

Also the "+1" shift creates a nonlinearity: at Att = 462, Att/(Att+1) = 0.99784, so elasticity ≈ 0.02395 vs 0.024 at 38k — negligible, fine. But at Att=0 the elasticity is 0 — meaning the model cannot represent any crowd effect below Att≈1. Fine.

Let me now also compute: full swing 462→38,181 in the log-shift metric: log(38182) = 10.5501, log(463) = 6.1377, Δ = 4.4124, ×0.024 = 0.10590, exp = 1.1117. So +11.2% in expected home goals.

And a 10,000-seat increment (e.g., 28,000→38,000): log(38001)-log(28001) = 10.5454 - 10.2400 = 0.3054 ×0.024 = 0.00733 → +0.74%. So a 10k crowd increase → +0.74% home goals ≈ 1.573×0.00733 = +0.0115 goals. Tiny. Good quantitative veto on "crowd drives home advantage".

Compare: the observed home-goal difference between 2018-19 (1.57) and 2020-21 (1.35) is 0.22 goals. The attendance coefficient over the actual swing predicts 1.5733 × 0.1059 = 0.1666 goals... hmm wait careful, that's using a common baseline. Let me just say: model-implied attendance-attributable difference between the 462-crowd and 38,181-crowd regimes is ×1.112 on the home rate, i.e., 1.35 × 1.1117 = 1.501 vs 1.35 — so it accounts for ~0.15 of the 0.22 observed gap in the raw means, ~68%. But the paper explicitly says these are confounded with team composition and season scoring environment. Let me present that as a bracket: the coefficient can explain roughly two-thirds of the raw 1.35→1.57 gap but cannot separate that from the concurrent change in team quality and league scoring levels.

Hmm, but be careful with causal framing. I'll present as "arithmetic implication under the fitted coefficient, not an attribution."

Also, important: the model has no team effects, so λ1 is the same for all matches except covariates — but wait, λ1,i = exp(β0,1 + β1,Att log(Att+1) + β1,F FS1) where FS1 = fouls suffered by team 1. So home λ varies only with attendance and fouls suffered. With β1,Att=0.024 and β1,AF=0.012, the total variance in λ across matches is small: log(Att+1) ranges maybe 6.1 to 10.6 (sd ~ 1.8 during mixed seasons... actually bimodal). Let's not overdo.

Actually here's a strong point: with attendance bimodal (462 in 2020-21, ~38k otherwise), the "attendance" covariate is essentially a 2-level indicator for the COVID season. sd of log(Att+1): one third of matches at 6.14, two thirds at 10.56. Mean = (6.14 + 2×10.56)/3 = 9.087. Var = (1/3)(6.14-9.087)² + (2/3)(10.56-9.087)² = (1/3)(8.685) + (2/3)(2.170) = 2.895 + 1.447 = 4.342. sd = 2.084. Times β=0.024 → contribution to log λ sd = 0.050 → home rate ranges by factor exp(±0.05) → ±5%. That's the entire explanatory power of attendance: a ±5% swing in home scoring rate. Against Poisson noise: with λ≈1.57, the ML estimate of a single match's rate has relative SE ~ 1/sqrt(λ) = 0.80 — so 5% is buried. Over n=1140, SE of β1,Att = 0.005 (given) → the 0.024 effect is 4.8 SE from zero. Fine — detectable but small. Good.

Now, "clock" in RECURSIVE_THEORY_OF_MIND: the season boundary, the Aug–May cycle, and the 2020-21 compressed calendar (COVID fixture congestion) — the model has no time-varying parameters, so any within-season drift in φ is invisible. The "clock" is the 1,000-warmup/2,000-iteration MCMC clock too (stationarity), and the 90-minute match clock (the conditional mechanism is goal-state dependent, which is a within-match clock the model approximates with a single static φ).

Crisis habit regression: when a model's PPC fails (draws over-predicted), practitioners regress to the habit of independent Poisson or to hand-tuned Dixon-Coles τ adjustments; the counter-trap is to add covariates (xG, red cards) without re-testing the dependence parameter's identifiability. Predict: adding team random effects will inflate Var(Y2) and attenuate φ toward zero — a verifiable prediction.

Good. Let me write now, keeping it tight but deep.

I'll be careful to mention that the machine conversion lost equations ("equations, tables and figures are NOT preserved") and that I'm reconstructing from prose — good epistemic hygiene.

Let me write the final answer.

Word budget: THINK_TRACE ~600, SOURCE ~700, GENEALOGY ~350, TOM ~350, CROSS-LAYER ~350, RLVR ~450. Total ~2,800. Good.

Careful with the Corr formula reconstruction: state both the paper's stated Var(Y2) (as OCR'd) and the exact derivation, and note that the exact form is required for |ρ| ≤ 1. Actually I should present the exact form as the correct one and note the OCR degradation. Let me present:

Var(Y2) = λ2 + λ2²(exp{λ1(e^φ−1)²} − 1)  [exact, derived]
and note the printed text appears as "λ2 + λ1λ2(e^φ − 1)²" which is the φ→0 first-order limit; the exact form is required for boundedness.

Check first-order: λ2²(e^{λ1(e^φ-1)²}-1) ≈ λ2² λ1 (e^φ-1)² = λ1λ2²(e^φ-1)². The OCR has λ1λ2(e^φ-1)² — off by one power of λ2. So the OCR is doubly corrupted. I'll note the exact form and that the OCR string is algebraically inconsistent with the stated Corr denominator. Fine — but be measured: say "reconstructed".

Cov = λ1λ2(e^φ−1) — consistent.

Now write.

One more: units. λ1, λ2 in goals·match⁻¹. φ in goals⁻¹ (since φy1 must be dimensionless). μ2 goals·match⁻¹. β_Att dimensionless (elasticity). β_F in fouls⁻¹. Cov in goals²·match⁻². Corr dimensionless.

Breakdown regimes list:
(B1) φ→0: independence manifold; Corr = 0; ∂Corr/∂φ|₀ = sqrt{λ1λ2} ≠ 0 so φ=0 is a regular point of the map but a singular point of the dependence interpretation (zero correlation ≠ zero dependence? actually for this model zero correlation does mean independence since φ=0 ⇒ μ2=λ2 and Y2|Y1 independent of y1). Yes: φ=0 ⇔ independence exactly. Good.
(B2) Identifiability collapse when λ1λ2(e^φ−1)² ≳ 1: at λ1=1.573, threshold |e^φ−1| ≳ 0.797 ⇒ φ ∉ (−1.60, 0.59). Outside, Corr → 0 superexponentially and φ becomes weakly identified from second moments but still identified from the conditional mean structure. Actually it remains identified — the conditional mean depends on φy1. Fine; say "correlation-based identifiability collapses".
(B3) λ1→0: no home goals ⇒ φy1 ≡ 0 ⇒ φ unidentified (design singularity). Probability of not observing y1 ≥ 1 in a match is e^{-λ1}; with λ1 = 1.573 it's 0.207; across 1140 matches, essentially always identified.
(B4) Attendance: log(Att+1) → 0 as Att→0, no singularity; but without the +1, log(0) = −∞ ⇒ λ1 → 0, a hard breakdown.
(B5) Perfect collinearity attendance↔season: design matrix rank deficiency in the season-dummy extension.
(B6) Prior scaling: se(θ̂) → 0 ⇒ prior collapses to a point mass at 0, posterior → prior; empirical Bayes double-use.

Also numeric: the paper's own R̂ ≈ 1 and ESS "sufficiently large" but no numbers given — unverifiable claim (gray zone for RLVR).

Alright, writing.

Also in RLVR section, give "verifiable reward" style checks: each scenario has a computable statistic and a predicted outcome.

Veto A: Fouls claim. Test: recompute 95% credible interval for β1,AF; observed [−0.001, 0.025] straddles 0 by 0.001. Prediction: with a minimally informative N(0,1) prior instead of empirical Bayes, the lower bound moves further below zero; the "positive impact" statement fails. Also predict sign instability under season-stratified refit.

Veto B: "negative dependence is strong / ~10% suppression" — compute ρ = −0.147; also compute that the 0.899 multiplier applies to the conditional mean and only for y1→y1+1 at fixed covariates; and note that because E[Y2]=λ2 is fixed by construction, the marginal away mean is unchanged — so an unconditional read of "10% fewer away goals" is a category error. Predict: an analyst who aggregates over home-goal distribution finds E[Y2] identical across φ, verifying no marginal effect. That's a sharp, verifiable veto.

Veto C: Causal attendance. Test: add season fixed effects; predict β1,Att shrinks by ≥50% and CI covers zero, because attendance and season are near-collinear (mean 462 vs 38,181 vs 38,613). Also predict the PPC on home-loss proportion degrades similarly for all three models — paper reports BCP closer to observed, but does not report the draw proportion; predict the BCP still over-predicts 0-0/1-1 relative to observed because no low-score correction (Dixon-Coles τ) is included.

Maybe a 4th: ELPD Δ=0.1 between A→H and H→A is inside PSIS-LOO noise; predict refit with different seed yields sign flip. Good, but keep to three plus one bonus? The prompt says 3. I'll do exactly 3 with sub-predictions.

Write it.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a machine conversion with equations destroyed — "equations, tables and figures are NOT preserved - consult the PDF for those" — so the first duty is reconstruction from prose before any critique is licensed. Multi-hop chain:

**Hop 1 — why independence is structurally wrong.** The shared-component bivariate Poisson sets \(Y_1=Z_1+Z_0,\;Y_2=Z_2+Z_0\), so \(\mathrm{Cov}(Y_1,Y_2)=\lambda_0\ge 0\). The authors state the consequence precisely: [PAGE 6] *"Observe that this particular model formulation can only accommodate non-negative dependence, which is not realistic when modeling competing teams' goal counts at the match level."* Negative dependence is the *predicted* signature of in-match tactical substitution — a leading team lowers its own risk and suppresses the opponent's chance creation.

**Hop 2 — the normalising constant inside the conditional mean.** The BCP sets \(Y_1\sim\mathrm{Poisson}(\lambda_1)\) and \(Y_2\mid Y_1=y_1\sim\mathrm{Poisson}(\mu_2 e^{\phi y_1})\). Requiring \(\mathbb{E}[Y_2]=\lambda_2\) via the Poisson MGF gives \(\mu_2 e^{\lambda_1(e^\phi-1)}=\lambda_2\), hence \(\mu_2=\lambda_2\exp\{-\lambda_1(e^\phi-1)\}\). This is the only step that makes the marginal means covariate-interpretable; it is also where sign confusion is born, because \(\phi<0\) inflates \(\mu_2\) while deflating the conditional mean at high \(y_1\).

**Hop 3 — recovering the exact variance.** Conditioning: \(\mathbb{E}[Y_2^2]=\mathbb{E}[\mu_2 e^{\phi Y_1}]+\mathbb{E}[\mu_2^2 e^{2\phi Y_1}]\), and the exponent telescopes: \(\lambda_1(e^{2\phi}-1)-2\lambda_1(e^\phi-1)=\lambda_1(e^\phi-1)^2\). Therefore
\[
\mathrm{Var}(Y_2)=\lambda_2+\lambda_2^2\left(e^{\lambda_1(e^\phi-1)^2}-1\right).
\]
The OCR string "\(\lambda_2+\lambda_1\lambda_2(e^\phi-1)^2\)" is a first-order limit and is algebraically *inconsistent* with the surviving correlation denominator, which contains \(e^{\lambda_1(e^\phi-1)^2}\). Only the exponential form keeps \(|\rho|\le 1\).

**Hop 4 — the non-monotonicity the paper flags but does not explain.** [PAGE 7]: *"the correlation structure as a function of \(\phi\) is nonlinear, with values of \(\phi\) closer to zero corresponding to stronger dependence even though \(\phi = 0\) is the independence case."* The mechanism is now transparent: as \(|\phi|\to\infty\) the dispersion term \(e^{\lambda_1(e^\phi-1)^2}\) explodes super-exponentially, the denominator swamps the numerator \( (e^\phi-1)\sqrt{\lambda_1\lambda_2}\), and \(\rho\to 0\). Dependence is therefore *not* monotone in \(\phi\); \(\phi\) is a rate parameter, \(\rho\) a derived observable.

**Hop 5 — plugging in posterior means.** Pooled \(\bar\lambda_1=(1.57+1.35+1.80)/3=1.5733\), \(\bar\lambda_2=(1.25+1.34+1.48)/3=1.3567\) [PAGE 5, Table 1]. With \(\phi=-0.107\): \(e^\phi-1=-0.10153\), \(\lambda_1(e^\phi-1)^2=0.01622\), \(\lambda_2(e^{0.01622}-1)=0.02218\), so \(\rho = -0.10153\sqrt{2.1348}/\sqrt{1.02218}\approx -0.147\), and \(\mathrm{Cov}=\lambda_1\lambda_2(e^\phi-1)\approx -0.217\) goals² per match². So the reported dependence is **weak-to-moderate**, not strong.

**Hop 6 — a free consistency check on the posterior width.** Fisher information per match for the dependence parameter scales as \(\lambda_1\lambda_2\approx2.13\). With \(n=1140\), \(\mathrm{SE}(\hat\phi)\approx(n\lambda_1\lambda_2)^{-1/2}=(2428)^{-1/2}=0.0203\). The reported posterior SD is **0.020** [PAGE 11, Table 2]. The inference is internally coherent — a genuine green flag.

**Gray-zone audit.** (i) Empirical Bayes double-dips: [PAGE 8] *"letting the frequentist maximum likelihood estimates (MLEs) inform the \(\pi(\cdot)\) distributional setup"* — data set the prior scale, then the same data update it, so the nominal 95% interval for \(\phi=[-0.147,-0.066]\) is *not* frequency-calibrated and overstates precision. (ii) Attendance is nearly a two-level COVID indicator (462 vs 38,181 vs 38,613), so the design is near-collinear with season; the authors concede [PAGE 14] *"attendance, pandemic conditions, and season are closely intertwined in these data, so the coefficient should be interpreted as an adjusted association rather than a causal crowd effect."* (iii) Internal contradiction on fouls: [PAGE 11] asserts *"the results on the parameter \(\beta_{1,AF}\) indicate that away team fouls positively impact home team goals"* while the same table's interval \([-0.001,0.025]\) straddles zero, and [PAGE 14] retracts the verb: the interval *"includes zero."* (iv) The joint ELPD gap between directions is \(\Delta=0.1\) — inside PSIS-LOO noise — so [PAGE 13]'s caution that the H→A preference is *"a predictive factorization of the joint distribution... rather than... evidence that home team goals causally determine away team goals"* is the correct reading. (v) No team attack/defence effects, so \(\lambda_1,\lambda_2\) are constant across clubs; the model is a league-average scoring law, not a strength model.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**Generative operator (reconstructed; PDF equations not preserved).** With \(Y_1\sim\mathrm{Poisson}(\lambda_1)\) marginally and \(Y_2\mid Y_1=y_1\sim\mathrm{Poisson}(\mu_2 e^{\phi y_1})\),
\[
\mu_2=\lambda_2\exp\{-\lambda_1(e^{\phi}-1)\},\qquad \lambda_1,\lambda_2>0,\ \ \phi\in\mathbb{R},
\]
matching [PAGE 6] *"\(Y_2 \mid Y_1 = y_1 \sim \mathrm{Poisson}(\mu_2 e^{\phi y_1})\), \(Y_1 \sim \mathrm{Poisson}(\lambda_1)\)"*. **Units:** \(\lambda_1,\lambda_2,\mu_2\) in goals·match⁻¹; \(\phi\) in goals⁻¹ (so \(\phi y_1\) is dimensionless); \(\beta_{j,\mathrm{Att}}\) dimensionless (a log-log slope); \(\beta_{j,F}\) in fouls⁻¹.

**Joint mass function** [PAGE 7]:
\[
f(y_1,y_2)=\frac{\lambda_1^{y_1}\lambda_2^{y_2}}{y_1!\,y_2!}\exp\!\Big\{-\lambda_1\big[1+y_2(e^\phi-1)\big]-\lambda_2 e^{-\lambda_1(e^\phi-1)+\phi y_1}+\phi y_1y_2\Big\}.
\]

**Moment operators and the OCR corruption.** Stated in prose [PAGE 7]: \(\mathbb{E}[Y_1]=\mathrm{Var}(Y_1)=\lambda_1\), \(\mathbb{E}[Y_2]=\lambda_2\), and \(\mathrm{Cov}(Y_1,Y_2)=\lambda_1\lambda_2(e^\phi-1)\). The variance must be the exact conditional-variance form
\[
\mathrm{Var}(Y_2)=\lambda_2+\lambda_2^{2}\big(e^{\lambda_1(e^\phi-1)^2}-1\big),
\]
yielding
\[
\rho(\phi;\lambda_1,\lambda_2)=\frac{(e^\phi-1)\sqrt{\lambda_1\lambda_2}}{\sqrt{1+\lambda_2\big(e^{\lambda_1(e^\phi-1)^2}-1\big)}} .
\]
Because \(e^\phi-1\) shares the sign of \(\phi\), [PAGE 6] *"the direction of dependence is determined by the sign of \(\phi\)"* follows immediately. Evaluated at the reported posterior means, \(\rho=-0.147\) and \(\mathrm{Cov}=-0.217\) goals².

**Regression operator.** \(\log\lambda_{1,i}=\beta_{0,1}+\beta_{1,\mathrm{Att}}\log(\mathrm{Att}_i+1)+\beta_{1,F}\mathrm{FS}_{i,1}\) and analogously for \(\lambda_{2,i}\), where \(\mathrm{FS}_{i,j}\) is fouls *suffered* by team \(j\) [PAGE 7]. The shift is a regulariser: [PAGE 7] *"the unit shift (\(\log(\mathrm{Att}_i + 1)\)) ensures the transformation is well-defined during periods of zero attendance, i.e. closed doors matches that occurred during the 2020-21 season."*

**Posterior and sampling operator.** \(\pi(\beta,\phi\mid y,X)\propto f(y\mid\beta,\phi,X)\pi(\beta)p(\phi)\) with empirical-Bayes priors \(\theta\sim N(0,\widehat{\mathrm{se}}(\hat\theta)^2)\); four chains, 2,000 iterations, 1,000 warm-up, HMC via Stan [PAGES 8–10]. Selection by \(\mathrm{ELPD}_i=\mathbb{E}_{\theta\sim p(\theta\mid y_{-i})}[\log p(y_i\mid\theta)]\), total \(-3552.0\) (A→H), \(-3552.1\) (H→A), \(-3565.0\) (independent) [PAGE 10].

**Singularity and breakdown regimes.**
1. **Independence manifold \(\phi=0\)**: \(\mu_2=\lambda_2\), \(Y_2\perp Y_1\) exactly, \(\rho=0\). Regular point of the map but the *null* of the scientific hypothesis.
2. **Correlation-identifiability collapse** when \(\lambda_1(e^\phi-1)^2\gtrsim1\). At EPL \(\lambda_1=1.5733\) this excludes \(|\phi|>0.797\) in \(e^\phi-1\) terms, i.e. the usable window is \(\phi\in(-1.60,\,0.59)\); outside it, dispersion dominates and \(\rho\to0\) super-exponentially even as dependence strengthens. Any reading of \(\phi\) as "correlation strength" fails here.
3. **Design singularity \(\lambda_1\to0\)**: then \(\phi y_1\equiv0\) a.s. and \(\phi\) is unidentifiable. Here \(P(Y_1=0)=e^{-1.5733}=0.207\) per match, so 1,140 matches identify \(\phi\) comfortably.
4. **Attendance boundary**: without the \(+1\) shift, \(\mathrm{Att}=0\Rightarrow\log 0=-\infty\Rightarrow\lambda\to0\); the shift converts a hard divergence into a benign boundary. Elasticity is \(\beta_{1,\mathrm{Att}}\cdot \mathrm{Att}/(\mathrm{Att}+1)\to\beta_{1,\mathrm{Att}}\) for \(\mathrm{Att}\gg1\), reproducing [PAGE 14] *"a 1% increase in attendance is associated with about a 0.024% increase in the expected number of home goals."*
5. **Prior-degeneracy**: if \(\widehat{\mathrm{se}}(\hat\theta)\to0\) the prior becomes a point mass at zero and the posterior collapses onto the prior — empirical Bayes fails silently.
6. **Rank deficiency** under any season-fixed-effects extension, because \(\log(\mathrm{Att}+1)\) is a deterministic function of season in these three blocks (mean 462 vs 38,181 vs 38,613 [PAGE 5]).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage runs Holgate (1964) and Kawamura (1984) on bivariate-Poisson estimation → Maher (1982), whose attack/defence/home-effect decomposition is still the reference grammar of football score models → Dixon–Coles (1997), which patches low-score cells and is now retroactively readable as a crude dependence term → Karlis–Ntzoufras (2003), which imports the shared-component BP → **Berkhout & Plug (2004)**, the actual ancestor, whose conditional factorisation is exhumed here → Piancastelli et al. (2023a, 2023b), which supplies the mean-and-\(\phi\) reparameterisation that makes the model regressable → Koopman & Lit (2015) and Egidi et al. (2018) for the dynamic/state-space branch → Petretta et al. (2025), the immediate rival → the 2025–26 contemporaneous cluster (Florez et al.; Zhang et al.; Michels et al.; Philipson). The **retrocausal** structure is unmistakable: a 2004 count-data curiosity is re-narrated as having *anticipated* a 2020 natural experiment it could not have foreseen; the COVID closed-door season retroactively supplies the identification variation that justifies a 22-year-old factorisation. Parallel lineage on the crowd channel: Clarke & Norman (1995) on strength-adjusted home advantage, Pollard (2006) on regional variation, Nevill et al. (2002) on crowd noise and referee judgement, then the COVID quartet — Bryson et al. (2021), Scoppa (2021), Fischer & Haucap (2021), McCarrick et al. (2021) — whose heterogeneity (top division yes, second and third no) is precisely the kind of jurisdictional trap that should inhibit a single-league causal claim.

**Multi-week traps.** *Trap 1 — regime pooling.* Three seasons are three regimes; the pooled \(\phi=-0.107\) is a weighted compromise. A weekly refit will show \(\phi\) migrating toward zero as post-2023-24 data (1.80/1.48 scoring) enters, and an analyst tracking \(\phi\) week-to-week will misread sampling noise as tactical change. *Trap 2 — genealogy substitution.* Citing Dixon–Coles as if it already modelled negative dependence conflates a low-score inflation correction with a sign-flexible dependence parameter. *Trap 3 — eliding the rival.* [PAGE 8] notes Petretta et al.'s reciprocal specification yields marginals that *"lack finite moments, an unappealing theoretical property when modeling goal counts"* — a legitimate veto, but it applies only to the mixture variant, and over-generalising it into "the rival model is wrong" is a genealogy error.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
**Crisis habit regression.** When a dependence model's posterior predictive check on draws fails — as it must, since no \(\tau\) low-score correction exists here — the practitioner's reflex is to abandon structure and revert to independent Poisson, a habit that this paper *empirically refutes*: the independent model cannot reproduce the observed goal correlation and produces a worse home-loss distribution [PAGES 12–13]. The regression-to-habit failure mode is therefore concrete and documented, and the counter-trap is to *add covariates* (expected goals, red cards, rest, weather, referee identity — all listed as future work [PAGES 14–15]) rather than to re-ask whether \(\phi\) is identified at all. Adding a team-level random effect will inflate \(\mathrm{Var}(Y_2)\) through the dispersion exponential and mechanically attenuate \(\phi\) toward zero; the model-builder who reads that attenuation as "dependence vanished" has reproduced the trap.

**Counter-trap.** The disciplined counter is to hold the factorisation fixed and vary only the prior: replacing the empirical-Bayes \(N(0,\widehat{\mathrm{se}}^2)\) with a weakly informative \(N(0,1)\) should widen, not move, the \(\phi\) interval — the authors assert robustness (*"results are robust to the prior choice as investigated by the authors but not reported here"* [PAGE 10]) but publish no evidence, which is exactly where an adversary should push.

**Clock.** Three clocks operate and only one is modelled. The 90-minute clock is the causal mechanism — the conditional structure is a goal-state response — yet it is compressed into a single static \(\phi\), so early versus late goals are treated as exchangeable. The season clock (August–May, plus the compressed 2020-21 calendar) is absorbed into three season dummies that the specification does not even include. The sampler clock (1,000 warm-up, 2,000 iterations, four chains, \(\hat R\approx1\)) is the only one formally audited. Any claim about *when* suppression occurs is unlicensed by a static \(\phi\).
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
**Layer inventory.** The design matrix contains exactly three regressors — \(\mathrm{FS}_1\), \(\mathrm{FS}_2\), \(\log(\mathrm{Att}+1)\) [PAGE 7]. Everything else is unmodelled, and the veto rule is simple: *an unmodelled layer cannot adjudicate a claim.*

**Biomechanical layer — partial licence only.** Fouls are contact events, a coarse proxy for duels, tackling load, and defensive disruption; there is no distance-covered, sprint-count, or accelerometer data. The posterior is \(\beta_{1,AF}=0.012\,[-0.001,0.025]\) and \(\beta_{2,HF}=0.007\,[-0.008,0.022]\) [PAGE 11], both straddling zero. Veto: no biomechanical mechanism — fatigue, pressing intensity, injury return — can be confirmed or excluded, because fouls are simultaneously an *input* (disruption of attack) and an *output* (failed defensive intervention) of the same latent process. The paper is candid that *"more detailed measures of match events and team strength may be needed to separate the roles of attacking pressure, defensive disruption, and refereeing behavior"* [PAGE 14].

**Acoustic/officiating layer — directional licence, magnitude veto.** Attendance enters with \(\beta_{1,\mathrm{Att}}=0.024\,[0.013,0.034]\) for home and \(\beta_{2,\mathrm{Att}}=0.000\,[-0.011,0.011]\) for away. Arithmetic: the full 462→38,181 swing moves \(\log(\mathrm{Att}+1)\) by 4.412, i.e. a factor \(e^{0.1059}=1.112\) on the home rate — about +11% — which at \(\lambda_1=1.5733\) is ≈0.17 goals. A 10,000-seat increment yields only a \(1.0074\) multiplier, ≈0.012 goals. **Veto:** any claim that crowd size is a *large* driver of home advantage is arithmetically excluded by the model's own coefficient; the asymmetry of sign is supported, the magnitude is not. Note also that the descriptive foul correlation is tiny — [PAGE 5] *"Attendance and home fouls were weakly negatively correlated (\(r = −0.1097\), \(p = 0.0002\))"* — and [PAGE 5] *"Attendance and total fouls were also not significantly correlated at the 5% level"*, so the officiating channel is asserted, not measured.

**Weather layer — hard veto.** Temperature, precipitation, wind, pitch condition, and altitude are absent from the specification; no interaction with \(\phi\) is estimable. Any retrospective reading of a wet-weather match block as evidence for or against suppression is unfalsifiable within this model and must be rejected outright.

**Physical-travel layer — hard veto.** Pollard's territorial/travel factors have no covariate here; distance travelled and rest days are unavailable, so the \(\phi=-0.107\) estimate cannot be decomposed into tactical suppression versus travel fatigue.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
**Veto 1 — the fouls sentence.** *Claim under test:* [PAGE 11] *"away team fouls positively impact home team goals."* *Verifier:* recompute the 95% credible interval for \(\beta_{1,AF}\) from the posterior draws; the published interval is \([-0.001,0.025]\), lower bound \(0.001\) below zero. *Prediction:* (a) replacing the empirical-Bayes prior with \(N(0,1)\) pushes the lower bound further negative and the interval still covers zero; (b) a season-stratified refit flips the sign of the point estimate in at least one season; (c) the sentence is unsupportable at the stated evidential level, and the [PAGE 14] wording — the interval *"includes zero"* — is the only defensible text. Reward signal: pass iff the refitted interval excludes zero under both priors.

**Veto 2 — the "10% suppression" misreading.** *Claim under test:* that \(\phi=-0.107\) implies away teams score ~10% fewer goals. *Verifier:* by construction \(\mathbb{E}[Y_2]=\lambda_2\) for *all* \(\phi\) — the \(\mu_2\) normaliser is chosen precisely to preserve the marginal mean. *Prediction:* simulating the joint law across \(\phi\in\{-0.5,-0.107,0,0.107\}\) at fixed \(\lambda_2=1.3567\) returns a marginal away mean of \(1.357\) in every cell, while the conditional mean at \(y_1=0\) rises and at \(y_1\ge2\) falls; the implied correlation is \(\rho=-0.147\), not \(-0.10\). Any unconditional statement of the form "away scoring drops 10%" is vetoed; only [PAGE 13]'s conditional phrasing — *"a one-goal increase in the home score multiplies the conditional expected number of away goals by \(\exp(−0.107) \approx 0.899\)"* — passes.

**Veto 3 — the causal-crowd claim.** *Claim under test:* that attendance causes the home-scoring association. *Verifier:* add season fixed effects and recompute \(\beta_{1,\mathrm{Att}}\). *Prediction:* because attendance is essentially a three-level season indicator (462 / 38,181 / 38,613), the coefficient shrinks by at least half and its 95% interval covers zero; the same refit leaves \(\phi\) nearly unchanged (the dependence parameter is identified from the joint, not the covariate, structure). A secondary prediction: posterior predictive checks on the **draw proportion** — which this paper does *not* report, checking only marginal means, marginal variances, goal correlation, and home-loss proportion [PAGES 12–13] — will show persistent over-prediction of 0–0 and 1–1, since the specification carries no Dixon–Coles \(\tau\) correction and no low-score dependence term. Reward signal: three checks (coefficient attenuation, \(\phi\) stability, draw over-prediction), all computationally verifiable.
</RLVR_COUNTERFACTUAL_VETOES>