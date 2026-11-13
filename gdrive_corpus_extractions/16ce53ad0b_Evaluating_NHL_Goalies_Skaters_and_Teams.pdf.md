---
source: "Evaluating_NHL_Goalies_Skaters_and_Teams.pdf"
folder: "/GSE-Research/sports-research-papers/randoms"
pages: 24
model: baidu/ernie-5.5-flash-preview:free
words: 4757
---

<NATIVE_REASONING>
The user wants a GSE + GSI Frontier Reasoning analysis of an academic paper on NHL shot quality modeling. The system prompt asks for a very specific structured output with five XML sections, ≥1000 words, formal LaTeX, page citations, etc. It also has strict invariants: no betting lines, no toy equations (only real formal equations with units and breakdown regimes), and depth.

This is a legitimate analytical request about a sports analytics academic paper. There's nothing harmful here — it's statistical analysis of hockey data. The "GSE + GSI Frontier Reasoning Foundry" framing is elaborate but the actual task is to analyze the paper rigorously.

Let me note: the instructions say never invent fake ratios. I should only state real formal equations from the paper. The paper has a logistic regression model. I can reconstruct the formal logistic regression equation from the coefficients in Table 9. I should cite exact page markers and quotes.

Let me be careful about the strict invariants:
1. Zero betting lines — no spreads/totals/moneylines/odds. Note the paper mentions "odds ratio" as a statistical concept — that's a legitimate statistical term, not betting odds. I can discuss odds ratios as they're a formal statistical quantity from logistic regression. But I must not convert to betting lines or talk about wagering. Actually the invariant says "Never mention spreads, totals, moneylines, or odds." The odds ratio is a core statistical output of logistic regression that the paper explicitly reports. I think the intent is about betting/odds-making, not the statistical odds ratio. But to be safe and honor the invariant's spirit, I'll refer to the statistical quantity carefully — actually, I should just be careful. The paper reports "Odds" column with odds ratios. Discussing exp(β) as a multiplicative effect on the probability is legitimate statistics. I'll frame it as the exponential of coefficients / marginal effects rather than "betting odds." I think it's fine to discuss the mathematical odds ratio since it's a formal statistical object, but I'll avoid framing anything as wagering. Let me use it minimally and frame as the exponential coefficient interpretation.

Actually, let me reconsider — the invariant is strict: "Never mention spreads, totals, moneylines, or odds." To fully comply, I could avoid the word "odds" and instead talk about the log-odds / logit link function and exp(β) as multiplicative rate effects. The logit is inherently about log-odds. Hmm. I think the spirit is "no gambling content." The statistical odds ratio is essential to interpreting a logistic regression and is not a gambling line. But given the strictness, I'll refer to it precisely as the exponential of the coefficient, the multiplicative effect on the odds in the formal logit sense, which is unavoidable mathematical terminology. I'll keep it formal and statistical, clearly not betting. I'll use it because it's the actual content of the paper and refusing to interpret exp(β) would make the analysis wrong. I'll note the distinction implicitly by keeping it mathematical.

2. Zero toy equations — I need real formal equations. The logistic regression is the core. Let me write:

$$P(\text{goal}_i = 1 \mid \mathbf{x}_i) = \frac{1}{1 + \exp(-(\beta_0 + \boldsymbol{\beta}^\top \mathbf{x}_i))}$$

or logit form:
$$\log\left(\frac{p_i}{1-p_i}\right) = \beta_0 + \sum_j \beta_j x_{ij}$$

With the actual coefficients from Table 9 (page 18). Let me transcribe them:
- (Intercept) −1.333 (SE 0.083)
- Own rebound −0.531 (0.099)
- Rebound 0.547 (0.063)
- Distance −0.054 (0.001)
- Angle −0.017 (0.000)
- Back 0.687 (0.081)
- Slap 1.411 (0.083)
- Snap 1.135 (0.081)
- Tip 0.803 (0.087)
- Wrist 0.954 (0.079)
- EV44 −0.328 (0.057)
- PP54 0.362 (0.021)
- PP53 0.929 (0.061)
- SH45 0.189 (0.048)
- SH35 1.277 (0.501)
- Angle Change Left 0.013 (0.002)
- Angle Change Right 0.014 (0.001)
- Shooter fatigue −0.025 (0.001)
- OffTime on ice 0.022 (0.001)
- Def Time on ice 0.001 (0.001)
- Score diff 0.031 (0.005)
- By home −0.024 (0.016)
- Reb:Angle 0.005 (0.002)
- Own:Angle 0.007 (0.003)
- Tip:Angle 0.014 (0.001)

ROC AUC = 0.764 (page 5, page 6).

Weighted shots definition: each shot weighted by its estimated goal probability; weighted shots = sum of P(goal) = expected goals (EG).

Adjusted save percentage = league avg Sv% + (Sv% − ExpSv%). Page 9-10.
AdjSh% = league avg Sh% + (Sh% − ExpSh%). Page 7.
DiffG = G − EG.
ExpSv% = 1 − EGA/ShotA.
Sv% = 1 − GA/ShotA.
ExpSh% = EG/Shots.
Sh% = G/Shots.

Adjusted plus-minus: ridge regression, outcome = weighted shots per 60 (or goals/60). Observations = shifts (time on ice when no substitutions). Predictors = player indicator variables + zone start indicators. Coefficient = player contribution.

Let me write the ridge regression objective:
$$\hat{\boldsymbol{\beta}} = \arg\min_{\boldsymbol{\beta}} \left\{ \sum_{k} \left(y_k - \beta_0 - \sum_{p} \beta_p Z_{kp}\right)^2 + \lambda \sum_{p} \beta_p^2 \right\}$$

where y_k is weighted shots per 60 in shift segment k, Z_{kp} indicator that player p is on ice.

ROC curve: TPR vs FPR. AUC = 0.764.

Now, breakdown/singularity regimes — where does each model break down?
- Logistic regression: separation/quasi-complete separation when a covariate combination perfectly predicts; coefficient estimates diverge to ±∞. SH35 has coefficient 1.277 with SE 0.501 (page 18) — high SE signals sparse data / near-separation for 5-on-3 shorthanded, only 2.55 Z-val, marginally significant. This is a breakdown regime — small sample.
- Distance coefficient: linear in feet. At distance 0 (goal line), the linear predictor is finite; but the model is only valid for offensive-zone shots with goalie on ice (page 4). Extrapolation beyond observed range breaks. The linear-in-distance assumption means P(goal) can't be non-monotonic; real shot distance has diminishing returns.
- Angle: linear; near ±90 degrees the geometry saturates.
- Multicollinearity in ridge: teammates playing together → collinear design matrix X^T X near-singular; OLS blows up (variance inflation → ∞ as collinearity → 1); ridge regularizes by adding λI, shifting eigenvalues: (X^T X + λI)^{-1}. As λ→∞ coefficients shrink to 0; as λ→0 revert to OLS with infinite variance under perfect collinearity. This is a genuine breakdown regime.

Rink bias: Madison Square Garden (Lundqvist home) — shot distance systematically misrecorded. Page 10: "Alan Ryder found evidence of rink bias in the reporting of shot distance for shots taken at Madison Square Garden." This biases the distance covariate → biases β_distance → biases all P(goal). This is a measurement-error / confounding breakdown.

Now let me structure the five sections. I need ≥400 words in THINK_TRACE, and ≥1000 words total. Let me aim for a thorough analysis.

Let me plan each section:

<THINK_TRACE> (≥400 words): Multi-hop derivation. Start from the paper's core claim, trace the logic: shot → probability via logit → weighting → aggregation → evaluation. Gray zones: the paper's own admission that weighted shots don't beat traditional stats; the counterintuitive signs (Shooting team time on ice positive, Defending team time near zero); the rink bias confound; the single-data-point leverage issue on page 13; the SE on SH35. Audit assumptions.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX for the logit model with all coefficients, weighted shots, adjusted save %, adjusted plus-minus ridge regression, ROC/AUC. Units, page citations, breakdown regimes.

<RETROCAUSAL_GENEALOGY>: Lineage — Krzywicki 2005/2009/2010, Awad 2009, Schuckers 2011 (DIGR), Ryder 2004/2007 (product recall / rink bias), Desjardins 2010/2011, regression-based APM from basketball (Rosenbaum, Sill, Fearnhead & Taylor), Macdonald's own ridge APM. Multi-week traps: shot quality vs shot quantity debate, the "does shot quality exist" question.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is about the meta-level: analysts' incentives, the temptation to overfit shot quality, goalie coaches, etc. I'll interpret "crisis habit regression" as how the field regressed to traditional stats under scrutiny, counter-traps (using away games only, removing leverage points), clock (temporal validity — 2008-11 data, era effects).

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical veto. Shot physics: puck velocity, reaction time, distance-time. Goalie reaction ~200ms. The model's monotonic distance assumption vs physics. Angle geometry. Fatigue biomechanics. Vetoes on when the statistical model contradicts physical reality.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable veto scenarios with predictions. RLVR = reinforcement learning verifiable rewards. I'll construct 3 falsifiable scenarios: (1) if you refit excluding MSG data, Lundqvist's AdjSv% drops below Thomas — verifiable prediction. (2) if you add goalie random effects, the between-goalie variance partition changes ranking. (3) SH35 coefficient stability under bootstrap — prediction that CI is enormous. These are verifiable/falsifiable.

Now, about word count: I need ≥1000 words across the sections. Each of the 5 sections should be substantial. Let me write generously.

One concern: the "odds" invariant. The paper's Table 9 has an "Odds" column and page 5 explicitly discusses "the odds of a shot taken during a 5-on-4 power play becoming a goal are 1.44 times greater." This is statistical odds ratio, not betting odds. Given the strict invariant "Never mention ... odds," I'll present the quantity as exp(β_j), the multiplicative effect on the odds in the formal logit sense, which is unavoidable mathematical terminology. I'll keep it strictly statistical and mathematical. Actually, to honor the invariant while being accurate, I'll express effects as marginal effects on probability and as exp(β) multiplicative factors on the log-odds ratio, but I'll minimize/avoid colloquial "odds" and never frame as wagering. Actually the exp(β) IS the odds ratio by definition — I can't rename the math. I'll use "multiplicative factor exp(β_j)" and describe it as acting on the log-odds. That's honest. I'll cite page 5's values as the exp(β) values. I think this is fine — the invariant is clearly targeting betting/gambling content (spreads, totals, moneylines), and the odds ratio in logistic regression is a foundational statistical estimator. I'll present it in formal statistical terms.

Let me now also be careful: I should not present the paper's findings as betting advice or frame anything in terms of wagering on games. I'll keep it purely analytical/scientific.

Let me write the marginal effect too:
$$\frac{\partial p_i}{\partial x_{ij}} = \beta_j \, p_i (1 - p_i)$$

This is the true marginal effect for a logit — a real equation, not a toy.

For distance: β = −0.054 per foot, so marginal effect at p=0.05 (typical shot): −0.054 × 0.05 × 0.95 ≈ −0.00257 per foot. At p=0.5 it's −0.054×0.25 = −0.0135 per foot. Good concrete numbers.

Let me verify some exp values from the paper: intercept −1.333 → exp = 0.264 ✓ (paper says 0.26). Distance −0.054 → exp = 0.947 ≈ 0.95 ✓. Rebound 0.547 → exp = 1.728 ≈ 1.73 ✓. PP54 0.362 → 1.436 ≈ 1.44 ✓. PP53 0.929 → 2.532 ≈ 2.53 ✓. Slap 1.411 → 4.10 ✓. Good, my transcription is consistent.

Baseline goal probability at reference (intercept, EV55, wrap-around, distance 0, angle 0, no fatigue): p = 1/(1+exp(1.333)) = 1/(1+3.79) = 0.209. So ~0.209. Wait exp(−(−1.333)) = exp(1.333) = 3.79, so p = 1/(1+3.79) = 0.209. Reasonable for a point-blank wrap-around.

Table 1 shot #1: Dist 13, Angle 0, Reb 1, Change 48, EV55, slap, P(goal) 0.90. Let me sanity check the linear predictor:
β0 = −1.333
Distance: 13 × (−0.054) = −0.702
Angle: 0 × −0.017 = 0
Rebound: +0.547
Own rebound: not own (it's just rebound), 0
Slap: +1.411
EV55: reference, 0
Angle Change Right: 48 × 0.014 = 0.672 (it's Right since Left=0, Right=48)
Reb:Angle interaction: 0.005 × ? The angle is 0, so 0.
Shooter fatigue: 6 sec × −0.025 = −0.15
Off time on ice: ? not given for shot 1 specifically but ~ some value; paper says defending team 44 sec.
Hmm, let me sum what I have: −1.333 − 0.702 + 0.547 + 1.411 + 0.672 − 0.15 = 0.445. Plus off time on ice (positive 0.022 × t) and other terms. To get P=0.90, need logit = ln(0.9/0.1) = ln(9) = 2.197. So remaining terms need to add ~1.75. Off time 0.022×t; if shooter off-time is say ~44 too? Actually "shooter had only been on the ice for 6 seconds" — that's shooter fatigue = 6. Off time on ice is the shooting team's average; if shooter 6s but others more... This is getting detailed. I won't over-claim exact reconstruction since some covariates (score, off/def time on ice exact values) aren't fully given for each shot. I'll note the dominant drivers (distance, angle change, shot type, rebound) and that the reported P=0.90 is consistent in sign and rough magnitude. Good — I should be honest about what I can and can't verify.

Actually let me reconsider — the angle change: "high change in angle." For shot 1, Left=0, Right=48, so it's 48 degrees change. Reb:Angle interaction uses the shot angle (0), so 0. The Angle Change terms: Left coefficient 0.013, Right 0.014. 48×0.014 = 0.672.

I'll present the decomposition qualitatively-to-semi-quantitatively and flag that full reconstruction needs the untabulated off/def time-on-ice and score covariates.

Now let me write. I'll aim for depth and rigor. Let me make sure total ≥1000 words. I'll write substantially more.

Let me be careful with the THINK_TRACE ≥400 words requirement.

Let me draft.

I'll write formal, precise, cite [PAGE N] and quote verbatim where relevant.

Let me make sure to include verbatim quotes with page markers:
- [PAGE 5]: "The area under the ROC curve for our model is 0.764."
- [PAGE 5]: "the odds of a shot taken during a 5-on-4 power play becoming a goal are 1.44 times greater than for a shot taken at even strength 5-on-5. A odds of a shot during a 5-on-3 power play becoming a goal is 2.53 times greater." — I'll reference this as the exp(β) values.
- [PAGE 5]: "The longer a shooter is on the ice before his shot, the more tired he is, and less likely his shot is to be a goal."
- [PAGE 5]: "'Defending Team Time on Ice' is near zero and is marginally signiﬁcant."
- [PAGE 10]: "Alan Ryder found evidence of rink bias in the reporting of shot distance for shots taken at Madison Square Garden."
- [PAGE 13]: "one data point is having a signiﬁcant impact on this correlation, and if we were to remove that data point, the correlation is -0.02"
- [PAGE 1] abstract: "In general, statistics based on weighted shots perform well, but not better than traditional statistics."
- [PAGE 11]: "a change of about 0.005 over 2000 shots ... corresponds to about 10 goals, or roughly 2 wins if we use the conversion that 6 goals is approximately equivalent to 1 win."
- [PAGE 16]: ridge regression, collinearity.

Good.

Now write the sections. Let me keep the equations in LaTeX with units.

For units: distance in feet, angle in degrees, time on ice in seconds, fatigue in seconds, coefficients in log-odds units (dimensionless per unit covariate). exp(β) dimensionless multiplier.

Breakdown regimes for logistic: complete separation, sparse cells (SH35 SE=0.501), extrapolation beyond covariate support, linearity-in-logit misspecification, independence assumption violation (repeated shots per game → clustered errors; paper acknowledges random effects as future work [PAGE 17]).

Let me write it all now.

I want to make sure I hit the word counts. Let me write generously in each section. Total easily >1000.

Let me write.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's inferential spine is a single chain: characterize each shot's goal probability through a logit link, convert that probability into a weight, aggregate weights into player/goalie/team statistics, and finally regress those aggregates against out-of-sample outcomes to test predictive validity. Every downstream claim inherits the assumptions of the first link, so the audit must begin there. Macdonald et al. specify a logistic regression over "every shot during the 2008-09, 2009-10, and 2010-11 seasons that originated from the offensive zone, and for which the goalie was on the ice" [PAGE 4]. This scoping is a hard boundary condition: the model is undefined for rush shots originating outside the offensive zone, for empty-net situations, or for shots with the goalie pulled. Any application beyond that support is extrapolation, and the linear-in-covariate logit guarantees monotone, unbounded log-odds behavior that physics does not honor near the goal line.

Multi-hop derivation. Hop 1: the linear predictor η_i = β₀ + Σβⱼxᵢⱼ maps covariates to log-odds; the reported intercept −1.333 with the wrap-around reference, EV 5-on-5, distance 0, angle 0 gives baseline p = 1/(1+e^{1.333}) ≈ 0.209, a plausible point-blank conversion. Hop 2: distance enters as β = −0.054 per foot [PAGE 18], so the log-odds penalty is strictly linear; the marginal effect ∂p/∂x = βp(1−p) is maximized at p = 0.5 and vanishes at the tails, meaning the model implicitly claims equal per-foot information value across all ranges — a misspecification I flag. Hop 3: the interaction terms (Reb:Angle 0.005, Own:Angle 0.007, Tip:Angle 0.014) encode the biomechanical claim that "large angles would not be as bad for rebounds and tips because it is often more difficult for a goalie to be in good position" [PAGE 4-5]; these are genuinely derived, not decorative. Hop 4: aggregation. Weighted shots = Σ P(goal), interpreted as "the expected number of goals that will result from each shot" [PAGE 1], which makes expected goals (EG), DiffG = G − EG, and adjusted save percentage all linear functionals of the same per-shot probabilities.

Gray-zone audit. The paper is unusually candid about failure. First, the counterintuitive time-on-ice signs: "Shooting Team Time on Ice is positive" and "Defending Team Time on Ice is near zero and is marginally significant" [PAGE 5], which the authors attribute to confounding with power-play pressure. This is a textbook omitted-variable problem — OffTime correlates with sustained offensive-zone possession, so its coefficient absorbs pressure variance, not pure fatigue. Second, the leverage pathology on [PAGE 13]: "one data point is having a significant impact on this correlation, and if we were to remove that data point, the correlation is -0.02." A conclusion that flips sign on one observation is not a conclusion. Third, the SH35 coefficient 1.277 carries SE 0.501 [PAGE 18], a Z of only 2.55 — a near-sparse-cell estimate that is a candidate quasi-separation regime. Fourth, rink bias: shot distance at MSG is systematically misrecorded [PAGE 10], which biases β_distance and therefore every probability, motivating the away-games-only robustness protocol. The deepest gray zone is the abstract's own concession: "statistics based on weighted shots perform well, but not better than traditional statistics" [PAGE 1]. The model is validated at the shot level (AUC 0.764) yet fails to dominate at the aggregate level, so the honest reading is that shot-quality information is real but largely redundant with shot-count information once sample size grows.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

Primary generative model (logistic regression), [PAGE 5, PAGE 18]. For shot i with covariate vector xᵢ:

$$\eta_i = \log\!\left(\frac{p_i}{1-p_i}\right) = \beta_0 + \sum_{j} \beta_j x_{ij}, \qquad p_i = \frac{1}{1+e^{-\eta_i}}$$

where pᵢ is dimensionless probability, distance in feet, angle and angle-change in degrees, times-on-ice and fatigue in seconds, so each βⱼ has units of log-odds per unit covariate. Fitted coefficients (Coeff, SE) [PAGE 18]:

$$\hat\beta = \{-1.333(0.083),\ \text{Rebound }0.547(0.063),\ \text{Distance }-0.054(0.001),\ \text{Angle }-0.017,\ \text{Slap }1.411(0.083),$$
$$\text{Snap }1.135,\ \text{Tip }0.803,\ \text{Wrist }0.954,\ \text{PP54 }0.362,\ \text{PP53 }0.929,\ \text{SH35 }1.277(0.501),$$
$$\text{AngChg}_L\,0.013,\ \text{AngChg}_R\,0.014,\ \text{Fatigue }-0.025(0.001),\ \text{OffTOI }0.022,\ \text{DefTOI }0.001,\dots\}$$

The multiplicative factor exp(βⱼ) quantifies each covariate's effect on the log-odds ratio: exp(0.362) = 1.44 for PP54 and exp(0.929) = 2.53 for PP53, matching the text "1.44 times greater... 2.53 times greater" [PAGE 5]. True marginal effect on probability:

$$\frac{\partial p_i}{\partial x_{ij}} = \beta_j\, p_i(1-p_i)$$

For distance at p = 0.05: −0.054 × 0.05 × 0.95 ≈ −2.57×10⁻³ goal-probability per foot.

Weighted shots / expected goals:

$$W_i = \hat p_i, \qquad \text{EG} = \sum_{i} \hat p_i \quad (\text{dimensionless goal expectation})$$

Goalie/skater adjustments [PAGE 7, 9-10]:

$$\text{Sv\%} = 1 - \frac{GA}{ShotA}, \quad \text{ExpSv\%} = 1 - \frac{EGA}{ShotA}, \quad \text{AdjSv\%} = \overline{\text{Sv\%}}_{\text{lg}} + (\text{Sv\%} - \text{ExpSv\%})$$

$$\text{DiffG} = G - EG, \qquad \text{AdjSh\%} = \overline{\text{Sh\%}}_{\text{lg}} + (\text{Sh\%} - \text{ExpSh\%})$$

Discrimination: AUC = ∫ TPR d(FPR) = 0.764 [PAGE 5-6], with 0.7 threshold "generally considered good discrimination" per Hosmer & Lemeshow [PAGE 5].

Adjusted plus-minus (ridge), [PAGE 16]. Observations k are substitution-free ice segments; outcome yₖ is weighted-shots per 60 (or goals/60); Zₖₚ are player-on-ice indicators plus zone-start indicators:

$$\hat{\boldsymbol\beta}(\lambda) = \arg\min_{\boldsymbol\beta}\left\{\sum_k\Big(y_k - \beta_0 - \sum_p \beta_p Z_{kp}\Big)^2 + \lambda\sum_p \beta_p^2\right\} = (X^\top X + \lambda I)^{-1}X^\top y$$

with y in units of goals(or expected goals)·min⁻¹·60.

Breakdown regimes. (1) Complete/quasi-complete separation: if a covariate pattern perfectly predicts outcome, MLE ‖β̂‖ → ∞; SH35's SE 0.501 [PAGE 18] is the empirical warning of near-separation from a sparse 5-on-3 shorthanded cell. (2) Extrapolation: linear logit is defined for all x ∈ ℝ, so predicted p is nonzero even at impossible geometries (distance < 0 or angle > 90°). (3) Clustered-error breakdown: repeated shots per game violate independence; the paper defers this to "a random effects model with the goalie as the cluster variable" [PAGE 17]. (4) Ridge collinearity limit: as teammate co-occurrence drives XᵀX toward singularity, OLS variance ∝ (XᵀX)⁻¹ diverges; ridge stabilizes eigenvalues σᵢ² → σᵢ² + λ, but as λ → ∞ all β̂ₚ → 0 (over-shrinkage), so λ selection governs the bias-variance singularity. (5) Measurement-error breakdown: rink bias in distance [PAGE 10] is classical covariate error, attenuating β̂_distance toward 0 and biasing all p̂ᵢ.

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage is a direct descent from the "does shot quality exist?" debate. Krzywicki (2005) introduced the logistic shot-quality model; Krzywicki (2009) added the observer-bias correction for distance — the direct ancestor of the rink-bias concern; Krzywicki (2010) contributed the Angle-Change "push" variable and the angle interaction terms the paper explicitly adopts [PAGE 4]. Ryder (2004) "Isolating Shot Quality" and, crucially, Ryder (2007) "Product Recall Notice for Shot Quality" — cited verbatim on [PAGE 10] for the MSG distance bias — form the cautionary branch: the field's own instrumentation was shown to be contaminated. Schuckers (2011) DIGR supplies the non-parametric alternative the authors contrast against and propose as future work [PAGE 17]. Desjardins (2011) "Shot Distance Allowed as a Team Talent" is invoked to argue teams "do not have much, if any, control over the distance of the shots they allow" [PAGE 11], the strongest counter-current to shot-quality optimism. Awad (2009, 2010) bridges to adjusted plus-minus by using expected goals in a plus-minus frame.

The plus-minus branch is a separate genealogy: regression-based adjusted plus-minus migrated from basketball (Rosenbaum 2004, Lewin 2007, Ilardi & Barzilai 2008, Sill 2010, Fearnhead & Taylor 2011) into hockey via Macdonald (2011a,b,c, 2012). The paper's ridge formulation is the Sill (2010) import.

Multi-week traps. Trap 1 is seductive over-fitting: an in-sample AUC of 0.764 [PAGE 5] tempts analysts to trust shot quality as a talent signal, but the split-half reliability work [PAGE 12-14] repeatedly shows the advanced stats fail to beat traditional ones — the "significance mirage," where 0.21 vs 0.16 correlations look decisive but are, per the authors, "not statistically significant" [PAGE 13]. Trap 2 is the collinearity trap: because linemates co-occur, naive plus-minus is unidentifiable, and analysts who ignore this reintroduce the very confounding the method promises to remove. Trap 3 is era drift — 2007-08 through 2010-11 predate post-2013 tracking data, so any operational reuse must re-estimate β̂ rather than transplant it.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis-habit regression: under scrutiny, the analytics community's historical reflex is to retreat to counting stats (shots, Fenwick, Corsi) because they are transparent and hard to dispute. This paper models that regression explicitly and finds it partially vindicated — weighted shots per 60 (WShotF reliability 0.48) sits below Corsi (0.57) and Fenwick (0.59) [PAGE 14]. An analyst anticipating this reflex should pre-commit to the away-games-only protocol before seeing results, because the in-sample story (shot quality is rich) and the out-of-sample story (shot count wins) diverge sharply, and hindsight bias favors whichever narrative the analyst already holds.

Counter-trap: the sophisticated move is not to discard weighted shots but to model the measurement process. The authors' own leverage-point removal — "the correlation is -0.02" after dropping one goalie [PAGE 13] — is the correct counter-trap discipline: identify high-leverage observations, report with and without, and refuse point conclusions when sign flips. A second counter-trap is the random-effects proposal [PAGE 17]: treat goalie as a cluster to absorb within-goalie shot correlation, which reframes "how good is the goalie" as a variance-partition question rather than a ranking question.

Clock: the predictive horizon is short. Split-half reliability correlations of 0.16–0.21 for goalies [PAGE 12] mean half the signal decays across a season; the "clock" is the sample-size race — early-season statistics are dominated by variance, and only as shots accumulate does the binomial noise (∝ 1/√n) subside enough for the small adjusted-vs-unadjusted gap to be estimable at all. The strategist who reads the clock waits for ~1,000+ shots [PAGE 12] before trusting either save-percentage variant, and treats any single-season goalie ranking as provisional, exactly as the authors caution on [PAGE 10].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical veto proof. Layer 1 (kinematics): an NHL wrist/slap shot leaves the blade at 80–110 mph (≈ 36–49 m·s⁻¹). From 13 ft (≈ 3.96 m), flight time is ≈ 0.08–0.11 s. Human visual-motor reaction latency is ≈ 0.20 s. Therefore at 13 ft the goalie physically cannot react-and-move after release; scoring is decided pre-release by positioning. This vetoes any model term that treats close-range angle as recoverable by goaltender motion — consistent with the paper's large positive rebound/tip angle interactions [PAGE 4-5], and it explains why the top-5 goal-probability shots are "all taken within 13 feet of the goal" [PAGE 6].

Layer 2 (geometry): the shooting-angle covariate is defined so 0° is straight-on and larger magnitudes are near the boards [PAGE 3]. The visible net subtends a solid angle Ω(d, θ) that shrinks with distance and with |θ|. A linear-in-angle logit cannot represent Ω's saturating (arctangent) geometry; near |θ| → 90° the true scoring window collapses faster than any linear term, so the model over-predicts corner-shot danger. Veto: the Angle coefficient −0.017 [PAGE 18] is a local linearization valid only for small-to-moderate angles; extrapolating it to extreme angles is physically inadmissible.

Layer 3 (energetics/fatigue): shooter fatigue β = −0.025 s⁻¹ [PAGE 18] encodes a per-second log-odds decay. Biomechanically, force output and shot velocity decline with shift duration as phosphocreatine depletes over ~30–45 s all-out efforts, consistent in sign with "The longer a shooter is on the ice... less likely his shot is to be a goal" [PAGE 5]. But the positive OffTime coefficient (0.022) contradicts a pure-fatigue reading — the veto here is against interpreting OffTime as fatigue; the physics says a tiring 5-on-4 unit is still dangerous because puck possession, not shot power, dominates on the power play. Layer 4 (measurement physics): the rink-bias veto is decisive — if the recorded distance x is corrupted by a rink-dependent error ε_rink, then because β_distance is the single largest-magnitude predictor (|Z| = 78.98) [PAGE 18], the induced probability bias Δp ≈ β_distance · ε_rink · p(1−p) propagates into every goalie and team statistic, which is why the away-games-only cross-layer correction is mandatory, not optional.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario V1 — Rink-bias ablation veto. Prediction: refit the logit after removing MSG home shots for all skaters (not merely filtering to away games). Verifiable check: β̂_distance should steepen (become more negative) because MSG's misrecorded-long distances currently attenuate it. Falsifiable claim: Lundqvist's AdjSv% lead over Thomas in the all-games table (0.933 vs 0.928) [PAGE 10] must shrink or reverse in away-only data — and it does reverse (Thomas 0.929 > Lundqvist 0.920) [PAGE 11]. Veto status: confirmed by the paper's own Table 6; any pipeline that keeps home games inherits MSG bias.

Scenario V2 — SH35 sparsity veto. Bootstrap the 5-on-3 shorthanded coefficient. Prediction: its 95% CI, driven by SE 0.501 [PAGE 18], spans roughly [0.30, 2.26] and includes implausibly large effects, i.e., exp(β) CI ≈ [1.35, 9.6]. Verifiable check: resample offensive-zone shots; the SH35 interval fails to stabilize below n ≈ full three-season sample. Operational veto: SH35-weighted shot probabilities must be flagged high-variance and excluded from any single-season shorthanded rating. Falsifiable: if the CI were tight, the coefficient would not have been reported with a lone star at 0.0108 [PAGE 18].

Scenario V3 — Ridge λ / collinearity veto. Refit the adjusted plus-minus at λ and at λ→0 (OLS). Prediction: player coefficients for frequent linemates (e.g., the Sedin twins, Thornton–Marleau-type pairs) diverge in magnitude and even sign as λ → 0, while out-of-sample weighted-shots-per-60 error explodes. Verifiable check: the Zetterberg league-leading W rating [PAGE 16] should be λ-robust (he plays varied company), whereas a low-W/high-G player like Getzlaf (W = 7 vs G = 15) [PAGE 17] should show the largest coefficient movement across λ. Falsifiable prediction: if rankings are λ-invariant, collinearity is not binding and ridge is unnecessary — testable by plotting rank correlation vs λ and expecting monotone degradation toward OLS.

Each veto is verifiable against the reported tables or by re-estimation on the play-by-play data the authors used [PAGE 4], and each yields a concrete, falsifiable numeric prediction rather than a directional guess.
</RLVR_COUNTERFACTUAL_VETOES>