---
source: "Rao-Blackwellizing Field Goal Percentage.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 13
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4370
---

<NATIVE_REASONING>
The user wants me to analyze a research paper titled "Rao-Blackwellizing Field Goal Percentage" by Daniel Daly-Grafstein and Luke Bornn. I need to produce a response with specific XML sections, each meeting certain criteria:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

I need to be careful about page citations. The source text has page markers embedded (1, 2, 3... up to 20). I should cite them as [PAGE N] where N corresponds to the page numbers in the document.

Let me plan each section:

**THINK_TRACE (>=400 words):** Deep multi-hop derivation and gray-zone audit. I need to derive the Rao-Blackwell theorem application to FG%, explain the Beta-Bernoulli hierarchy, sufficiency of pi, variance reduction, shrinkage, empirical Bayes prior Beta(10,18), limitations (noisiness of SportVu Z coordinate, quadratic fit, Bayesian pseudo-data, 3-point only assumption, no bank shots, free throw homogeneity, sample size issues, LeBron example). Gray zones: bias introduced by modeling shot probabilities using entire set, individual priors not feasible, 2-point shots partially RB'd due to bank shots/insufficient data, FT% near Bernoulli limit. Must be >=400 words.

**SOURCE_OPERATORS_AND_EQUATIONS:** Formal LaTeX equations from the paper. Include:
- Bernoulli model: X_i ~ Bernoulli(θ)
- Beta-Bernoulli: X_i ~ Bernoulli(p_i), p_i ~ Beta(θv, (1-θ)v)
- Likelihood Π(X_i|θ,v)
- Joint Π(X_i, p_i|θ,v) = Π(X_i|p_i) Π(p_i|θ,v)
- Rao-Blackwell: E[θ_hat | pi] or θ_hat_RB = (1/n) sum p_i? Actually RB-FG% is average of estimated probabilities.
- Quadratic model: Z_i = β_0 + β_1 x_i + β_2 x_i^2 + ... wait need to infer from text. They model height as quadratic polynomial in x,y coordinates. The exact equation isn't fully rendered but described: least-squares regression for height.
- Bayesian update: posterior mean u_n, precision Λ_n, Normal prior for β, inverse gamma for σ^2.
- Logistic regression: logit(P(S_i=1)) = β_0 + β_1 D_i + β_2 LR_i + β_3 A_i.
- Variance raw: θ_hat(1-θ_hat)/n.
- Variance RB: (α̂β̂)/(n(α̂+β̂)^2(α̂+β̂+1)).
- Prior Beta(10,18).
- Confidence interval normal approximation: (0.264, 0.354) for LeBron raw; RB-FG% 34.7%, CI (0.321, 0.374).
- MAE table values.
- Discrimination values.

Units: probabilities dimensionless [0,1], depth in inches/feet, left-right in inches/feet, entry angle in radians or degrees, RMSE/MAE in percentage points (dimensionless proportion), sample counts N.

Breakdown regimes: when p_i is sufficient (always by construction), when variance reduction fails (FT% approaching pure Bernoulli), when sample size too small for player-specific priors, when trajectory data missing/noisy (2-point bank shots), when quadratic model fails (height noise).

**RETROCAUSAL_GENEALOGY:** Historical lineage: Kubatko et al. 2007 (starting point for advanced stats), True Shooting % (Kubatko), Cen et al. 2014/2015 (contextual covariates), Piette et al. 2010, Marty and Lucey 2017 (Noah System, practice shooting, guaranteed make zone >90%), Marty 2018 (Noahlytics, 9 spatial rim patterns), Franks et al. 2016 (discrimination/stability meta-metrics), Blackport 2014 (750 attempts for 3P% stabilization), Efron & Morris 1977 (Stein's paradox, empirical Bayes), Arkes 2010 (hot hand/free throws serial correlation), Young 2016/2017 (3-point revolution). Multi-week traps: small sample early season, variance illusion, mistaking noise for skill decline (LeBron 2015-16), over-reliance on raw FG% in free agency/draft.

**RECURSIVE_THEORY_OF_MIND:** Crisis habit regression vs counter-trap vs clock. This is a bit abstract. I need to interpret: How a coach/analyst might regress to crisis habits (using raw FG% after a bad game), counter-trap (RB-FG% suggests mean reversion, don't overreact), clock (sample size accumulation over season, stabilization at ~750 3PA, early season RB-FG% better). Crisis habit: after LeBron's 30.9% season, raw CI says real decline; counter-trap: RB-FG% CI includes previous levels, predicts reversion (which happened: 36.3% next season). Clock: as season progresses, raw eventually catches up but RB better early; 30% of games threshold.

**CROSS_LAYER_VETO_ADJUDICATION:** Physical/biomechanical/weather veto proof. Physical: hoop is 10 feet high, diameter 18 inches, center depth 9 inches (0.75 ft), optimal depth 11 inches, entry angle mid-40s degrees (~0.78 rad). Biomechanical: shooter height, release point (7 feet prior), shooting style differences mean player-specific priors ideal but infeasible due to few shots. Weather: indoor NBA arena, negligible weather, but optical tracking noise in Z coordinate (height) especially near basket; quadratic fit mitigates. Veto: if shot factor estimates deviate too far from raw data, assign probability 1 or 0 (hard veto). If trajectory missing (bank shots, close 2-pointers), veto from RB model and fall back to raw make/miss.

**RLVR_COUNTERFACTUAL_VETOES:** 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I need 3 scenarios where the model would be vetoed or fail, with predictions.
1. Scenario: Player attempts intentional bank shots (e.g., certain 2-point shots). Assumption in paper: all shooters aiming for center, no backboard. Veto triggers because depth/LR/entry angle model invalid for bank shots. Prediction: RB-FG% misestimates; raw FG% or contextual model better for those shots.
2. Scenario: Free throws perfectly Bernoulli (homogeneous, no defense, fixed distance). Veto: Rao-Blackwellization gives no improvement if p_i ~ Beta collapses or if FT attempts are iid Bernoulli with constant θ. Prediction: MAE improvement minimal (paper shows FT% shrunk raw 0.0702 vs shrunk RB 0.0691, tiny).
3. Scenario: Early season <5% games or player with <50 3PA. Sample size too small for Beta-Bernoulli MLE (Nelder-Mead unstable), empirical Bayes prior dominates. Prediction: shrunk RB relies heavily on Beta(10,18) league average; individual skill signal washed out, regression to mean too aggressive.

I need to ensure total word count >= 1000 across all sections. Let's aim for each section substantial.

Also need to avoid betting lines entirely. No mention of odds, spreads, etc.

Let's draft carefully.

Word count check: THINK_TRACE alone needs >=400 words. Total across all sections >=1000. I'll write richly.

Citations: Use [PAGE N] format. The source text has page numbers embedded like "1", "2", etc. at top/bottom. I'll reference those.

Let's write.

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

I must include formal LaTeX. Use \[ ... \] or inline \( ... \).

Let's ensure no toy equations. All equations must be from the paper or formally derived from it.

Detailed drafting:

THINK_TRACE:
Start with derivation: raw FG% treats X_i ~ Bern(θ). Var(θ_hat) = θ(1-θ)/n. For 3P%, need ~750 attempts for skill to dominate noise [PAGE 2]. Then Beta-Bernoulli: X_i | p_i ~ Bern(p_i), p_i ~ Beta(θv, (1-θ)v). The joint distribution factors; p_i is sufficient for θ. By Rao-Blackwell, θ_hat_RB = E[θ_hat | p_1...p_n] = (1/n) Σ p_i has variance no greater than θ_hat. The paper computes shot factors D_i, LR_i, A_i from SportVu [PAGE 5-7]. Because ball Z coordinate noisy, quadratic least-squares fit; Bayesian pseudo-data priors at release (7 ft) and rim (10 ft) to shrink trajectory [PAGE 6-7]. Logistic regression for make probability [PAGE 9]. Misclassification 0.204 Bayesian vs 0.246 OLR [PAGE 9]. RB-FG% = average p_i. Shrinkage with Beta(10,18) prior adds 10 league-average shots [PAGE 11]. Prediction: shrunk RB 3P% MAE 0.0572 vs raw 0.0790 [PAGE 15 Table 1]. Discrimination: RB-3P% 0.548 vs raw 0.432; RB-TS% 0.804 vs raw 0.713 [PAGE 18 Table 2]. Gray zones: bias from global shot probability model vs player-specific [PAGE 12]; 2-point bank shots excluded/insufficient [PAGE 14]; FT% near Bernoulli limit so little gain [PAGE 14-15]; small sample MLE instability; LeBron example shows raw CI (0.264,0.354) suggests decline but RB-FG% 34.7% CI (0.321,0.374) includes prior skill, and he shot 36.3% next year [PAGE 16-17]. Gray-zone audit: the sufficiency claim assumes shot factors capture all relevant context; paper argues defender distance and shot location add nothing conditional on D, LR, A [PAGE 18], but this is strong and untested for all contexts.

Need >=400 words. I'll expand.

SOURCE_OPERATORS_AND_EQUATIONS:
List equations with page cites.
Eq 1: X_i ~ Bernoulli(θ), θ_hat = (1/n) Σ X_i, Var = θ(1-θ)/n [PAGE 3-4, Figure 4].
Eq 2: p_i ~ Beta(θv, (1-θ)v), X_i | p_i ~ Bernoulli(p_i) [PAGE 3].
Eq 3: Π(X_i, p_i | θ, v) = Π(X_i | p_i) Π(p_i | θ, v); sufficiency p_i ⊥ θ | ... [PAGE 4].
Eq 4: θ_hat_RB = (1/n) Σ p̂_i [PAGE 10-11].
Eq 5: Var_RB = (α̂β̂) / [ n (α̂+β̂)^2 (α̂+β̂+1) ] [PAGE 11 Figure 4].
Eq 6: Prior shrinkage Beta(10,18) [PAGE 11].
Eq 7: Quadratic height model Z_i = β_0 + β_1 x_i + β_2 x_i^2 + ε? Actually text: "quadratic best fit line through trajectory data... estimate coefficients by least-squares regression" [PAGE 6]. Bayesian: β|σ² ~ N(u_0, σ²Λ_0^{-1}), σ² ~ IG(a_0,b_0) [PAGE 7]. Posterior updates u_n, Λ_n [PAGE 7].
Eq 8: Logistic: P(S_i=1) = σ(β_0 + β_1 D_i + β_2 LR_i + β_3 A_i), σ(x)=e^x/(1+e^x) [PAGE 9].
Eq 9: MAE table values [PAGE 15 Table 1].
Eq 10: Discrimination values [PAGE 18 Table 2].
Eq 11: LeBron raw CI (0.264, 0.354), RB-FG% 0.347, CI (0.321, 0.374) [PAGE 16].

Units: probabilities dimensionless; depth inches/feet; angle radians/degrees; counts dimensionless; MAE/RMSE in proportion points.

Breakdown: singularity when n→0 variance blows up; when p_i distribution collapses to point mass (FT% Bernoulli limit) Rao-Blackwell gain → 0; when trajectory missing, p̂_i ∈ {0,1} hard veto [PAGE 9].

RETROCAUSAL_GENEALOGY:
Lineage: Kubatko et al. 2007 TS%/eFG% [PAGE 1]; Blackport 2014 750 attempts [PAGE 2]; Franks et al. 2016 discrimination/stability [PAGE 2, 17]; Cen et al. 2014/2015 contextual covariates defender distance [PAGE 2, 9, 18]; Piette et al. 2010 [PAGE 2]; Marty & Lucey 2017 Noah System practice, >90% make zone [PAGE 2, 9, 10]; Marty 2018 Noahlytics 9 rim patterns [PAGE 17]; Efron & Morris 1977 Stein's paradox empirical Bayes [PAGE 11, 20]; Arkes 2010 free throw serial correlation [PAGE 14, 20]; Young 2016/2017 3-point revolution +50% attempts [PAGE 2]. Multi-week traps: early season n small, raw FG% unstable; mid-season overreaction to slump (LeBron); post-season sample still low for most players; 3-point volume increase makes raw FG% more variable [PAGE 2].

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: After bad shooting week, coach/GM reverts to raw FG% and concludes skill loss (LeBron 30.9%, raw CI excludes previous 36.5% [PAGE 16]). Counter-trap: RB-FG% uses shot quality; 34.7% estimate with CI (0.321,0.374) overlaps previous true skill; predicts reversion. Clock: Stabilization requires ~750 3PA [PAGE 2]; RB-FG% lowers RMSE with <30% of games [PAGE 12]; as season progresses raw catches up [PAGE 12]. Recursive loop: observing reversion validates counter-trap; ignoring it reinforces crisis habit.

CROSS_LAYER_VETO_ADJUDICATION:
Physical: rim 10 ft, radius 9 in, optimal depth 11 in (2 in behind center), entry angle mid-40s (~0.75 rad) [PAGE 5, 9]. Biomechanical: release height prior 7 ft [PAGE 7]; player height/style means ideal priors individual but infeasible due to few shots [PAGE 12]. Weather: indoor arena, negligible; but Sensor noise in Z (height) is primary physical veto [PAGE 6]. Quadratic fit mitigates. Hard veto: if modeled trajectory too far from raw data, p̂_i set to 1 or 0 [PAGE 9]. Bank shots and close 2-pointers excluded from RB [PAGE 14]. Thus RB-FG% is veto-proof only for standard jump shots, not bank-dependent or free-throw-limited contexts.

RLVR_COUNTERFACTUAL_VETOES:
1. Bank-shot specialist (e.g., player intentionally uses backboard on 2-pointers). Assumption violation: all shooters aim center, no backboard [PAGE 5]. Veto triggers: depth/LR/A relative to front of rim meaningless for bank. Prediction: RB-FG% biased; raw FG% or location-based model lower error; paper excludes many 2-point bank shots [PAGE 14].
2. Free-throw-only evaluation in empty arena (no defense, fixed distance). p_i ≈ θ constant; Beta-Bernoulli collapses to Bernoulli; sufficiency of makes/misses [PAGE 14-15]. Veto: Rao-Blackwellization yields no MSE reduction. Prediction: shrunk RB FT% MAE 0.0691 vs shrunk raw 0.0702 (negligible); any larger sample shows no gain.
3. Rookie / low-volume shooter in first 5% of games (n < ~50 3PA). Nelder-Mead MLE for α̂,β̂ unstable [PAGE 11]; empirical Bayes prior Beta(10,18) dominates [PAGE 11]. Veto: model over-shrinks to league mean. Prediction: RB-FG% ≈ 10/(10+18) = 0.357 league average regardless of actual early performance; raw FG% may be noisier but less biased; RMSE advantage only appears after sufficient n (paper shows biggest improvement at low sample but requires stable hyperparameter estimation).

Need to check word counts. Let's estimate. Each section will be maybe 200-300 words except THINK_TRACE which needs >400. Total likely >1000.

Let's write it out fully now. Ensure LaTeX formatting is correct. No markdown code blocks around equations? Just LaTeX inline or display. I'll use standard LaTeX.

Need to cite page numbers exactly as [PAGE N]. The source text shows page numbers at top of each page section. I'll cite them accordingly.

Double check no betting terms: "spreads, totals, moneylines, odds" - avoid. "probability" is fine. "prediction" fine. "error" fine.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation proceeds in three hops. First, the raw estimator treats every shot as an independent Bernoulli draw with a constant success probability θ, so the raw field-goal percentage is θ̂ = (1/n)ΣXᵢ with sampling variance θ(1−θ)/n. The paper notes that roughly 750 three-point attempts are required before more than half of the variation in 3P% is attributable to skill rather than noise [PAGE 2], which makes raw FG% unstable over the course of a season, especially as three-point volume has risen nearly 50% [PAGE 2].

Second, the Rao-Blackwell upgrade replaces the constant-θ assumption with a hierarchical Beta-Bernoulli model: Xᵢ | pᵢ ~ Bernoulli(pᵢ) and pᵢ ~ Beta(θv, (1−θ)v) [PAGE 3]. Because the joint likelihood factorizes as Π(Xᵢ, pᵢ | θ, v) = Π(Xᵢ | pᵢ)Π(pᵢ | θ, v), and because Xᵢ is conditionally independent of θ given pᵢ, the shot-make probability pᵢ is sufficient for θ [PAGE 4]. By the Rao-Blackwell theorem, conditioning the raw estimator on the sufficient statistics p̂₁…p̂ₙ produces θ̂_RB = (1/n)Σp̂ᵢ, an estimator with variance no greater than raw FG% [PAGE 4]. The paper implements this by estimating p̂ᵢ from optical-tracking shot factors: depth Dᵢ, left-right deviation LRᵢ, and entry angle Aᵢ [PAGE 5–9].

Third, the gray-zone audit identifies where the logic frays. The trajectory pipeline is noisy: SportVu reports ball X,Y,Z at 25 Hz, but the Z (height) coordinate is especially unreliable near the basket, so the authors fit a quadratic least-squares curve and cross the 10-ft plane to recover the ball’s position [PAGE 6]. A Bayesian pseudo-data prior anchors the trajectory at release height (7 ft) and rim center (10 ft) to reduce overfitting [PAGE 7]. The Bayesian regression yields lower shot-factor variance than OLS and a misclassification rate of 0.204 versus 0.246 for OLS [PAGE 9]. However, several breakdown regimes exist. The authors concede that shot probabilities are modeled using the entire shot population while player estimates are computed separately, introducing small bias [PAGE 12]. Player-specific priors are desirable—height and shooting style alter optimal trajectory—but individual shot volumes are too small to estimate separate hyperparameters reliably [PAGE 12]. Two-point shots are only partially Rao-Blackwellized because bank shots and close-range attempts lack clean trajectory information [PAGE 14]. Free throws are nearly homogeneous and approach a pure Bernoulli process, so Rao-Blackwellization offers little gain there [PAGE 14–15]. Finally, the LeBron James case illustrates the practical trap: raw 3P% of 30.9% yields a 90% normal-approximation confidence interval of (0.264, 0.354), seemingly excluding his prior 36.5% skill level and implying a real decline [PAGE 16]. RB-FG% instead estimates 34.7% with interval (0.321, 0.374), overlapping his established range; he subsequently shot 36.3% in 2016–17 [PAGE 16–17]. The variance reduction is real, but it rests on the strong assumption that depth, left-right accuracy, and entry angle are sufficient for all in-game contextual variables, including defender distance and shot location [PAGE 18].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Raw Bernoulli model: Xᵢ ~ Bernoulli(θ), θ̂ = n⁻¹ΣXᵢ, Var(θ̂) = θ(1−θ)/n [PAGE 3–4; Figure 4, PAGE 11].

Beta-Bernoulli hierarchy: Xᵢ | pᵢ ~ Bernoulli(pᵢ), pᵢ ~ Beta(θv, (1−θ)v) [PAGE 3].

Joint factorization and sufficiency: Π(Xᵢ, pᵢ | θ, v) = Π(Xᵢ | pᵢ)Π(pᵢ | θ, v); given pᵢ, Xᵢ ⊥ θ, so pᵢ is sufficient for θ [PAGE 4].

Rao-Blackwellized estimator: θ̂_RB = n⁻¹Σp̂ᵢ [PAGE 10–11].

Empirical-Bayes shrinkage: prior p ~ Beta(10, 18), equivalent to adding 10 league-average shots to each player’s estimate [PAGE 11].

RB variance (Beta approximation): Var(θ̂_RB) = (α̂β̂) / [ n(α̂ + β̂)²(α̂ + β̂ + 1) ], with α̂, β̂ estimated by Nelder-Mead maximum likelihood [PAGE 11, Figure 4].

Quadratic trajectory model: height Zᵢ modeled as a quadratic polynomial in tracking coordinates (xᵢ, yᵢ) via least squares; ball position at basket taken where fitted curve crosses 10 ft [PAGE 6].

Bayesian trajectory prior: β | σ² ~ N(u₀, σ²Λ₀⁻¹), σ² ~ IG(a₀, b₀); posterior updates yield uₙ, Λₙ after pseudo-data and tracking-data passes [PAGE 7].

Shot-make logistic regression: P(Sᵢ = 1) = σ(β₀ + β₁Dᵢ + β₂LRᵢ + β₃Aᵢ), σ(x) = exp(x)/(1 + exp(x)) [PAGE 9].

Misclassification rates: Bayesian shot factors → 0.204; OLS shot factors → 0.246 [PAGE 9].

Mean absolute error (MAE), prediction of second-half 2015–16 FG% [PAGE 15, Table 1]:
- 3-point: Raw 0.0790, RB 0.0590, Shrunk RB 0.0572.
- Free throws: Raw 0.0809, RB 0.0713, Shrunk RB 0.0691.
- 2-point: Raw 0.0549, RB 0.0502, Shrunk RB 0.0428.
- True shooting: Raw 0.0467, RB 0.0408, Shrunk RB 0.0379.

Discrimination meta-metric [PAGE 18, Table 2]: Raw 3P% 0.432 vs RB-3P% 0.548; Raw TS% 0.713 vs RB-TS% 0.804.

LeBron confidence intervals [PAGE 16]: raw 3P% 90% CI = (0.264, 0.354); RB-FG% = 0.347 with 90% CI = (0.321, 0.374).

Units: all probabilities are dimensionless in [0,1]; depth and left-right accuracy measured in inches relative to hoop center (center depth = 9 in; optimal depth ≈ 11 in) or feet in Figure 2; entry angle in radians or degrees (mid-40s°); MAE/RMSE in proportion points; sample counts are dimensionless integers.

Breakdown/singularity regimes: as n → 0, Var(θ̂) diverges; when pᵢ collapses to a point mass (free throws approaching pure Bernoulli), the Rao-Blackwell variance reduction tends to zero [PAGE 14–15]; when optical trajectory is missing or deviates too far from raw data, p̂ᵢ is hard-assigned to 1 or 0 [PAGE 9]; when player-specific shot counts are too few, Nelder-Mead hyperparameter estimation is unstable and the empirical-Bayes prior dominates [PAGE 11–12].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with Kubatko et al. (2007), who introduced true shooting percentage and effective field goal percentage as counting-based aggregates of 2-point, 3-point, and free-throw makes and misses [PAGE 1]. Blackport (2014) established that roughly 750 three-point attempts are required before 3P% stabilizes enough that skill explains more than half the variance [PAGE 2]. Franks et al. (2016) formalized the discrimination meta-metric—the share of between-player variance due to true shooting skill—and identified stability as a separate concern requiring multiple seasons of data [PAGE 2, 17]. Contextual modeling precedents include Cen et al. (2014/2015) and Piette et al. (2010), which used shot location and defender distance to predict makes, and Chang et al. (2014) on shot quality [PAGE 2, 9, 18]. Marty and Lucey (2017) demonstrated with Noah Shooting System hardware that precise practice-facility shot factors could define a guaranteed make zone above 90% and improve future-shooting prediction [PAGE 2, 9, 10]; Marty (2018) extended this to 9 spatial rim patterns using Noahlytics [PAGE 17]. Efron and Morris (1977) supplied the empirical-Bayes shrinkage logic (Stein’s paradox) that the paper applies via the Beta(10,18) prior [PAGE 11, 20]. Arkes (2010) examined serial correlation in free throws, relevant to the paper’s finding that free throws behave more like Bernoulli trials than field goals [PAGE 14, 20]. Young (2016/2017) documented the near-50% growth in three-point attempts over eight years, which mechanically increases raw FG% volatility [PAGE 2].

Multi-week traps embedded in this genealogy: (1) early-season small-sample illusion, where raw FG% overreacts to noise before the ~750-attempt stabilization threshold; (2) mid-season crisis regression, where a slump such as LeBron’s 30.9% three-point season is misread as a permanent skill drop because raw confidence intervals are wide; (3) the contextual-covariate trap, where models that add defender distance and shot location double-count information already encoded in the ball’s trajectory at the rim, a claim the paper makes strongly but does not fully prove for all defensive schemes [PAGE 18]; and (4) the free-throw homogeneity trap, assuming all shooting metrics respond equally to Rao-Blackwellization when free throws lack the spatial variation that makes depth and entry angle informative [PAGE 14–15].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: after a poor shooting stretch, a coach or front office tends to regress to raw FG% as the authoritative signal. In the paper’s LeBron example, raw 3P% of 30.9% produces a 90% confidence interval of (0.264, 0.354), which excludes his previous five-season norm and triggers a narrative of irreversible decline [PAGE 16]. The decision-maker’s theory of mind assumes the observed percentage is the true parameter, so they predict continued poor shooting and adjust roster or role decisions accordingly.

Counter-trap: RB-FG% reverses the causal attribution. By aggregating shot-make probabilities conditioned on trajectory, it estimates LeBron’s 2015–16 three-point skill at 34.7% with a 90% interval of (0.321, 0.374), which comfortably overlaps his established range [PAGE 16]. The counter-trap predicts mean reversion toward his prior true skill rather than a permanent step-down; indeed, he shot 36.3% from three in 2016–17 [PAGE 17]. The recursive structure is that observing this reversion validates the counter-trap and should weaken the crisis habit in future seasons, but only if the decision-maker retains the RB-FG% estimator rather than reverting to raw counts after a single bad game.

Clock: the paper shows RB-FG% has lower RMSE than raw FG% when less than 30% of the season’s games are used, with the largest gains at the smallest sample sizes [PAGE 12]. As the season accumulates games, raw FG% eventually becomes competitive because the binomial noise term θ(1−θ)/n shrinks [PAGE 12], but the clock never fully eliminates the advantage for low-volume shooters. The decision-relevant clock is therefore not calendar time but attempt volume: RB-FG% extracts skill information from trajectory earlier in the season, while raw FG% requires the slow accumulation of hundreds of attempts to overcome variance. A team that trusts RB-FG% in November can make shooting-based personnel decisions weeks before raw FG% becomes reliable, provided they do not suffer the recursive failure of switching back to raw counts after one cold week.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: the regulation rim is 10 ft high with an 18-in diameter; the center of the hoop is defined as depth 9 in, and the paper finds optimal makes cluster near 11 in depth (2 in behind center), zero left-right deviation, and entry angles in the mid-40s [PAGE 5, 9]. These are hard geometric constraints: shots outside the viable depth/angle window are physically unlikely to score regardless of shooter reputation.

Biomechanical layer: release height and shooting style vary by player, so the ideal Bayesian prior for trajectory estimation should be player-specific. The paper uses a single population prior because individual players take too few shots to support separate parameter estimates [PAGE 7, 12]. This is a biomechanical veto: tall and short shooters release from different heights, and the common 7-ft release prior [PAGE 7] mis-specifies their trajectories, introducing unmodeled bias that grows with player heterogeneity.

Weather layer: NBA games occur indoors, so atmospheric drag, wind, and humidity are negligible and do not enter the shot-factor model [PAGE 6]. The dominant environmental noise is instrumental: the SportVu Z-coordinate (ball height) is noisy near the basket [PAGE 6]. The paper’s quadratic least-squares fit and Bayesian pseudo-data anchor are physical-layer mitigations, not eliminations, of this sensor noise.

Veto proof: RB-FG% is veto-proof only for standard jump shots where trajectory data are clean and the shooter targets the center of the rim. The model explicitly hard-vetoes trajectories that deviate too far from raw optical data by assigning p̂ᵢ ∈ {0,1} [PAGE 9], and it excludes many two-point attempts—especially bank shots and close-range shots—because trajectory information is insufficient or inaccurate [PAGE 14]. Free throws pass the data-availability filter but fail the information filter, as they are nearly homogeneous and approach a Bernoulli process where makes and misses are already sufficient [PAGE 14–15]. Thus the estimator is physically robust for uncontested, center-targeted jump shots and biomechanically approximate for player-specific release variation, but it is not veto-proof for bank-shot specialists, low-volume shooters, or free-throw-dominated evaluations.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Intentional bank-shot specialist. The paper assumes all shooters aim for the center of the basket and excludes purposeful backboard shots from analysis [PAGE 5]. If a player routinely uses the backboard on two-point jumpers, the depth/left-right/entry-angle frame referenced to the front of the rim is geometrically invalid. Veto trigger: trajectory model outputs p̂ᵢ that contradict the known make/miss outcome; the hard-assignment rule p̂ᵢ ∈ {0,1} would dominate [PAGE 9]. Prediction: RB-FG% will be biased away from the player’s true bank-shot skill; raw FG% or a shot-location/context model will achieve lower mean absolute error for that player, consistent with the paper’s exclusion of many two-point bank shots [PAGE 14].

Scenario 2 — Free-throw-only evaluation under identical conditions. Free throws are taken from a fixed distance with no defense and minimal contextual variation [PAGE 14]. If a player’s free-throw attempts are a near-perfect Bernoulli sequence with constant θ, then the number of makes and misses is already a sufficient statistic for θ, and Rao-Blackwellization cannot reduce mean-squared error [PAGE 14–15]. Veto trigger: estimated p̂ᵢ values cluster tightly around a constant, making the Beta-Bernoulli hierarchy degenerate. Prediction: shrunk RB FT% MAE of 0.0691 versus shrunk raw FT% MAE of 0.0702 [PAGE 15, Table 1] indicates negligible gains; in a counterfactual with perfectly homogeneous free throws, RB-FG% and raw FG% would have identical error, and any claimed RB improvement would be numerical noise.

Scenario 3 — Low-volume rookie in first 5% of season games. The paper’s RB variance formula requires stable maximum-likelihood estimates of α̂ and β̂ via Nelder-Mead optimization [PAGE 11, Figure 4]. With very few attempts (e.g., fewer than 50 three-pointers), the likelihood surface is flat and hyperparameter estimates are unstable. Veto trigger: optimization fails to converge or the empirical-Bayes prior Beta(10,18) overwhelms the player’s few observed p̂ᵢ values [PAGE 11]. Prediction: RB-FG% collapses toward the league-average prior mean of 10/(10+18) ≈ 0.357 regardless of the rookie’s actual early performance, over-shrinking true skill. Raw FG% would be noisier but less biased in this regime; the paper’s reported RMSE advantage for RB-FG% at small sample sizes [PAGE 12] presumes stable hyperparameter estimation, which this scenario violates.
</RLVR_COUNTERFACTUAL_VETOES>