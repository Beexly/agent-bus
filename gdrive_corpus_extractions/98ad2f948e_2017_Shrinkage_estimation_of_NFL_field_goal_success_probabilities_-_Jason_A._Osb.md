---
source: "2017 Shrinkage estimation of NFL field goal success probabilities - Jason A. Osborne and Richard A. Levine.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 18
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4195
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper about shrinkage estimation of NFL field goal success probabilities. I need to produce a comprehensive response with specific XML sections, each meeting certain criteria:

1. ZERO BETTING LINES - no spreads, totals, moneylines, odds
2. ZERO TOY EQUATIONS - no fake ratios, must use formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>

I need to cite exact [PAGE N] markers and verbatim quotes from the source text.

Let me plan the content:

**THINK_TRACE (>=400 words):** Deep multi-hop derivation and gray-zone audit. I need to think through:
- The data: 17,104 attempts from K=111 kickers, 1998-2014
- Link functions: logit, probit, CLL (complementary log-log)
- Why CLL was selected: HL statistics, AUC, residuals
- Shrinkage estimators: midpoint (ω=0.5), inverse variance (IV), exponential weights (ω(n) = 1-e^(-nk/a))
- Cross-validation results (Table 6)
- Rankings and stadium effects
- Non-stationarity over time
- Gray zones: selection bias at long distances (only good kickers attempt long kicks), separability issues (kickers with 0% or 100% excluded), small sample variance for inexperienced kickers, snap/hold attribution problems, assumption of independent Bernoulli trials
- The mathematical tension between model-based MLE and empirical frequency

**SOURCE_OPERATORS_AND_EQUATIONS:** Formal LaTeX equations with units, page citations, breakdown regimes.
- Log-likelihood: log L(π₁,...,π_N|{o_j}) = Σ[o_j log(π_j) + (1-o_j)log(1-π_j)] [PAGE 4]
- GLM link: g(π_j) = β₀ + (Σβ_k X_jk) × d_j [PAGE 4]
- Three links: logistic, probit, CLL [PAGE 4]
- CLL inverse: π_k(d) = 1 - exp{-exp(β₀ + β_k d)} [PAGE 4]
- MLE: π̂_k(d) = 1 - exp{-exp(β̂₀ + β̂_k d)} [PAGE 5]
- Empirical frequency: π̂_EF(d) = (Σ_{j:d_j=d} o_j)/(Σ_{j:d_j=d} 1) [PAGE 5]
- Shrinkage: π̂(d) = ω·π̂_k(d) + (1-ω)·π̂_EF(d) [PAGE 5]
- Midpoint: π̂_M(d) = ½π̂_K(d) + ½π̂_EF(d) [PAGE 5]
- IV weight: ω = SE_EF/(SE_k + SE_EF) [PAGE 5]
- SE_EF = sqrt[π̂_EF(d)(1-π̂_EF(d))/N_d] [PAGE 5]
- Exponential: ω(n) = 1 - e^(-nk/a), a=670 [PAGE 6-7]
- Bayesian: β₀ ~ N(0,10), β_k ~ N(-0.05, 0.02) [PAGE 7]
- HL statistic: X = Σ(O_i-E_i)²/[E_i(1-π̂_i)] [PAGE 5-6]
- Quadratic model: log{-log(1-π_j)} = β₀ + Σβ^L_k x_jk d_j + Σβ^Q_k x_jk d²_j [PAGE 13]
- Stadium model: adds Σβ^S_s s_js [PAGE 14]
- Units: distance in yards, probability dimensionless [0,1], N=17,104 attempts, K=111 kickers

**RETROCAUSAL_GENEALOGY:** Historical/scientific lineage & multi-week traps.
- James-Stein (1961) multivariate normal mean estimation
- Efron & Morris (1975) batting averages
- Brown (2008) in-season batting averages
- Morris & Rolph (1981) logistic regression intro with FG data
- Berry & Berry (1985) customized GLM for FG
- Bilder & Loughin (1998) weather/distance, "interchangeable parts"
- Berry & Wood (2004) "icing the kicker"
- Pasteur & Cunningham-Rhoads (2014) CV variable selection
- McCullagh et al. (1989) link function comparison
- Carlin & Louis (1997) empirical Bayes
- Multi-week trap: Hartley/Carney 2010 Saints example [PAGE 1-2], personnel turnover Table 1 [PAGE 1-2], overreaction to small samples

**RECURSIVE_THEORY_OF_MIND:** Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: GMs cut kickers after missed game-deciding kicks (Hartley example), assuming replacement will be better, but regression to mean suggests the replacement may not be better [PAGE 1-2, 17]
- Counter-trap: shrinkage estimators borrow strength across kickers, reducing variance, preventing overreaction to small samples [PAGE 5-7]
- Clock: time span 1998-2014, non-stationarity, improving accuracy over last decade [PAGE 15-17], increasing long-distance attempts [PAGE 15]
- Recursive ToM: kicker thinks about being cut, GM thinks about kicker's psychology, shrinkage accounts for the base rate that individual variation is smaller than perceived

**CROSS_LAYER_VETO_ADJUDICATION:** Physical/biomechanical/weather veto proof.
- Physical layer: distance is single most important factor [PAGE 2]
- Biomechanical: quadratic distance effects (big leg vs accuracy trade-off), selection bias at long distances (only good kickers get long attempts) [PAGE 13-14]
- Weather: Pasteur & Cunningham-Rhoads (2014) found weather adds <2% MSE reduction beyond distance [PAGE 2]; authors explicitly exclude weather/pressure as not their aim [PAGE 2]
- Stadium effects: Heinz Field tough, χ²=112, p<0.0001, df=50 [PAGE 10-11]
- Veto proof: The paper explicitly states it does NOT model weather/psychological pressure/snap-hold attribution as primary aims, focusing on distance+kicker only. This is a boundary condition/veto on scope. The model breaks down at extremes: short misses due to mishandled snaps, long attempts selection bias [PAGE 4-5]

**RLVR_COUNTERFACTUAL_VETOES:** 3 verifiable RLVR veto scenarios + predictions.
Need 3 verifiable counterfactual veto scenarios with predictions.
1. Small-sample veto: If a kicker has n_k < 20 attempts and misses a 30-yarder, the raw MLE would suggest p≈0, but shrinkage pulls toward league average (~0.85 at 30 yards). Prediction: teams cutting such kickers will see replacement perform no better or worse, regressing to mean.
2. Distance-selection veto: At d=60+ yards, only elite kickers attempt, so empirical frequency is upwardly biased. Prediction: quadratic model without selection correction overestimates long-range success for average kickers.
3. Stadium-confounding veto: Kickers in domes appear better due to stadium effects, not ability. Prediction: unadjusted rankings overrate dome kickers; adjusted rankings (Table 12 vs Table 11) reorder kickers like Hollis/Dawson upward.

Now I need to make sure I have >=1,000 words total across all sections, with THINK_TRACE >=400 words.

I need to be careful about:
- No betting lines
- No toy equations (no Force/Fatigue fake ratios)
- Formal LaTeX
- Page citations [PAGE N]
- Verbatim quotes where appropriate

Let me draft carefully, ensuring word count and quality.

Word count check: I'll aim for roughly:
- THINK_TRACE: ~500 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~300 words
- RETROCAUSAL_GENEALOGY: ~300 words
- RECURSIVE_THEORY_OF_MIND: ~300 words
- CROSS_LAYER_VETO_ADJUDICATION: ~300 words
- RLVR_COUNTERFACTUAL_VETOES: ~200 words
Total should exceed 1,000 words.

Let me write it out.

For verbatim quotes, I should use exact text from the source.

Let's start composing.

THINK_TRACE section needs deep multi-hop derivation:
- Start with data generation: N=17,104 independent Bernoulli trials, K=111 kickers
- The link function problem: logistic vs probit vs CLL
- CLL selected because HL statistic and residual analysis
- The shrinkage problem: MLE variance large for small n_k
- Example: Vinatieri n=572 interval (0.69,0.78) vs Hartley n=115 interval (0.59,0.80) [PAGE 7]
- Weighting schemes: constant 0.5, IV, exponential CDF with a=670
- CV results: midpoint HL avg 7.06 vs CLL 20.12 vs EF 16.70 [PAGE 9 Table 6]
- Gray zones: separability (exclude 0/0 or 1/1 kickers like Jaret Holmes 5/5, Danny Boyd 5/5 [PAGE 3]), selection bias at long range, snap/hold attribution
- The recursive loop: estimation informs personnel decisions, which alter the data generating process

SOURCE_OPERATORS_AND_EQUATIONS:
- List equations with LaTeX
- Cite pages
- Specify units: yards (distance), dimensionless probability, counts
- Breakdown regimes: d→17 yards (CLL approaches 1 slowly), d→65 yards (SE_EF undefined if π̂_EF=0, they use sqrt(0.5*0.5/N_d)), separability when n_k small or 0/100% outcomes

RETROCAUSAL_GENEALOGY:
- James & Stein 1961 → Efron & Morris 1975 (baseball) → Brown 2008 → Osborne & Levine 2017 (NFL)
- Berry & Berry 1985 customized link
- Bilder & Loughin 1998 interchangeable parts
- Pasteur & Cunningham-Rhoads 2014 CV
- Multi-week trap: Hartley 2010 Saints, Carney replacement, Hartley rehired [PAGE 1-2]
- Table 1 turnover: >3 kickers/season released [PAGE 1-2]

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: GM observes miss → cuts kicker → expects improvement → but replacement faces same base rate → regression to mean
- Counter-trap: shrinkage estimator explicitly borrows information, recognizes that observed variance overstates true ability variance
- Clock: 1998-2014 panel, non-stationarity, log(frequency) increasing for 50, 55, 60 yard attempts [PAGE 15-16]
- Recursive depth: kicker knows job precarious → pressure → performance → GM observes → cuts → new kicker faces same pressure

CROSS_LAYER_VETO_ADJUDICATION:
- Physical: distance dominant [PAGE 2]
- Biomechanical: quadratic term β^Q_k d², big leg vs accuracy trade-off, clusters [PAGE 13-14]
- Weather: excluded by design, Pasteur found <2% MSE gain [PAGE 2]
- Stadium: Heinz Field, χ²=112, p<0.0001 [PAGE 10]
- Veto proof: model explicitly restricted to distance+kicker only; failures at extremes due to snaps/holds not modeled [PAGE 4-5]

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios:
1. Veto on raw MLE for rookie kicker: n_k=8, misses 29-yarder. Raw p̂=0. Shrinkage pulls to league empirical. Prediction: replacement kicker over next 4 weeks performs at league mean, not improved.
2. Veto on long-range empirical frequency: d=62 yards, only 3 attempts all by elite kickers. Raw π̂_EF=1.0 but selection bias. Prediction: average kicker attempting 62-yarder has true p < 0.3, not 1.0.
3. Veto on stadium-unadjusted ranking: outdoor cold-weather stadium kicker appears worse than dome kicker. Stadium-adjusted model moves Hollis/Dawson up [PAGE 14]. Prediction: signing dome kicker to outdoor team yields performance decline equal to stadium effect delta.

Let me write the actual response now, making sure to hit word counts and include all required elements.
</NATIVE_REASONING>

<THINK_TRACE>
The paper constructs a hierarchical inference problem from N = 17,104 independent Bernoulli field-goal attempts across K = 111 kickers during seasons 1998–2014 [PAGE 3]. The first derivation layer is the generalized linear model: for attempt j by kicker k at distance d_j, the binary outcome O_j ∈ {0,1} follows a Bernoulli(π_j) law, and the log-likelihood is ℓ(π₁,…,π_N | {o_j}) = Σ_{j=1}^N {o_j log(π_j) + (1−o_j)log(1−π_j)} [PAGE 4]. The central tension is that the maximum-likelihood estimator (MLE) π̂_k(d) = 1 − exp{−exp(β̂₀ + β̂_k d)} under the complementary log-log (CLL) link has sampling variance that scales inversely with kicker-specific exposure n_k. The paper illustrates this with Adam Vinatieri (n_k = 572 attempts, 95% interval at 45 yards: (0.69, 0.78)) versus Garrett Hartley (n_k = 115, interval: (0.59, 0.80)), more than twice as wide [PAGE 7]. This is a classic small-sample instability problem: personnel decisions are made on realized noise rather than latent ability.

The second layer is link-function selection. Three candidates are compared—logistic, probit, and CLL—using −2×maximized log-likelihood, Hosmer-Lemeshow (HL) goodness-of-fit, and area under the ROC curve [PAGE 4–5, Tables 2–5]. The CLL link is selected because its residuals show the least dependence on distance (Fig. 4), its HL statistic is non-significant (HL = 1.9, p = 0.9843 for kicker-specific slopes on all data; Table 4), and it achieves the largest AUC (0.7646; Table 5). A gray zone emerges at the extremes: misses at short distances are often attributable to mishandled snaps or holds rather than kicker ability, while long-distance attempts suffer selection bias because only the strongest-legged kickers are afforded them [PAGE 4–5]. The model therefore discards kickers with separable outcomes (0% or 100% conversion, e.g., Jaret Holmes 5/5, Danny Boyd 5/5 [PAGE 3]) to avoid infinite MLE estimates.

The third layer is shrinkage. Because the James–Stein theory for multivariate normal means does not directly apply to independent binary trials, the authors posit ad hoc convex combinations of the kicker-specific MLE and the distance-stratified empirical frequency π̂_EF(d) = (Σ_{j:d_j=d} o_j)/(Σ_{j:d_j=d} 1) [PAGE 5]. Three weighting functions are proposed: a constant midpoint (ω = 1/2), inverse-variance weights ω = SE_EF/(SE_k + SE_EF) [PAGE 5], and an exponential CDF ω(n_k) = 1 − exp(−n_k/a) with tuned a = 670 [PAGE 6–7]. Cross-validation reveals that both the midpoint and exponential estimators generalize better out-of-sample than either component alone (Table 6: midpoint CV-avg HL = 7.06 vs. CLL = 20.12 vs. EF = 16.70 [PAGE 9]).

The gray-zone audit must confront recursive personnel dynamics. The introduction documents that NFL teams cut non-injured kickers at a rate exceeding three per season (Table 1 [PAGE 1–2]), exemplified by the 2010 New Orleans Saints cycling Garrett Hartley and John Carney after identical 29-yard misses [PAGE 1]. This is a crisis-habit regression: a single missed attempt updates the team’s belief too aggressively, ignoring the sampling variance inherent in small binary samples. Shrinkage estimation is the statistical counter-trap: it explicitly borrows strength across kickers and distances to suppress overreaction. However, the model itself has bounded validity. It excludes weather and psychological pressure by design [PAGE 2], treats kicks as independent despite potential fatigue or momentum effects, and attributes all failed attempts to the kicker even when snaps or holds are faulty [PAGE 3]. The breakdown regime is therefore the extreme tail: d → 17 yards where CLL approaches one more slowly than logit/probit, and d → 65 yards where empirical frequency is zero or one and standard errors degenerate [PAGE 4–5]. Any deployment of these rankings must treat estimates near those boundaries as regularized artifacts rather than measured probabilities.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Notation: j = 1,…,N (N = 17,104 attempts), k = 1,…,K (K = 111 kickers), d_j in yards, O_j ∈ {0,1}, π_j = P(success) dimensionless in [0,1] [PAGE 3–4].

Log-likelihood for independent dichotomous data [PAGE 4]:
ℓ(π₁,…,π_N | {o_j}) = Σ_{j=1}^N [o_j log(π_j) + (1−o_j) log(1−π_j)].

GLM linear predictor with kicker-specific slopes [PAGE 4]:
g(π_j) = β₀ + (Σ_{k=1}^K β_k X_{jk}) d_j, where X_{jk} = I(attempt j by kicker k).

Candidate inverse link functions [PAGE 4]:
Logistic: π_k(d) = 1/{1 + exp(−β₀ − β_k d)}.
Probit: π_k(d) = Φ(β₀ + β_k d).
CLL: π_k(d) = 1 − exp{−exp(β₀ + β_k d)}.

Kicker-specific MLE under CLL [PAGE 5]:
π̂_k(d) = 1 − exp{−exp(β̂₀ + β̂_k d)}.

Distance-stratified empirical frequency [PAGE 5]:
π̂_EF(d) = (Σ_{j:d_j=d} o_j) / (Σ_{j:d_j=d} 1) = (Σ_{j:d_j=d} o_j) / N_d.

General shrinkage estimator [PAGE 5]:
π̂(d) = ω · π̂_k(d) + (1 − ω) · π̂_EF(d).

Midpoint estimator (superscript M) [PAGE 5]:
π̂_M(d) = ½ π̂_k(d) + ½ π̂_EF(d).

Inverse-variance weight [PAGE 5]:
ω = SE_EF / (SE_k + SE_EF), with SE_EF = √[π̂_EF(d)(1−π̂_EF(d)) / N_d]; if π̂_EF(d) = 0 (e.g., d = 65), SE_EF = √(0.5·0.5/N_d).

Exponential weighting function [PAGE 6–7]:
ω(n_k) = 1 − exp(−n_k / a), optimized at a = 670 via HL statistic HL = 9.32; weights for n_k = 10, 50, 100, 200, 400 are 0.02, 0.07, 0.14, 0.26, 0.45 respectively.

Bayesian empirical-Bayes hyperparameters [PAGE 7]:
β₀ ~ N(0, 10); β₁,…,β_K iid ~ N(−0.05, 0.02).

Hosmer-Lemeshow statistic [PAGE 5–6]:
X = Σ_{i=1}^{10} (O_i − E_i)² / [Ê_i(1 − π̂_i)], with Ê_i = n_i π̂_i; df = 8.

Quadratic distance extension for “big leg” analysis [PAGE 13]:
log{−log(1 − π_j)} = β₀ + Σ_{k=1}^K β^L_k x_{jk} d_j + Σ_{k=1}^K β^Q_k x_{jk} d²_j.

Stadium-effects extension [PAGE 14]:
log{−log(1 − π_j)} = β₀ + Σ β^L_k x_{jk} d_j + Σ β^Q_k x_{jk} d²_j + Σ_{s=1}^S β^S_s s_{js}.

Breakdown/singularity regimes: (1) separability when n_k attempts are all good or all missed, excluded from MLE [PAGE 3]; (2) d → 17 yards where CLL asymptote to π = 1 is slower than logit/probit, creating short-distance mismatch [PAGE 4]; (3) d ≥ 65 yards where N_d is small, π̂_EF ∈ {0,1}, and SE_EF requires the 0.5·0.5 plug-in [PAGE 5]; (4) quadratic fit restricted to K′ = 54 veteran kickers with n_k ≥ 100 because smaller samples induce separability [PAGE 13]. Units are yards for distance and dimensionless probability; no currency, betting, or implied odds units appear anywhere in the derivation.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The statistical lineage traces from James and Stein (1961) on estimation of multivariate normal means under quadratic loss, through Efron and Morris (1975) and Brown (2008), who applied shrinkage to end-of-season and in-season baseball batting averages [PAGE 5, 17]. Osborne and Levine transplant this empirical-Bayes logic to NFL place-kicking, noting explicitly that the classical James–Stein machinery does not directly apply to independent binary field-goal trials, though the variance-reduction principle carries over [PAGE 5]. The domain-specific antecedents include Morris and Rolph (1981), who used grouped field-goal data to introduce logistic regression; Berry and Berry (1985), who developed a customized GLM link from distance, left-right error, and non-goalpost error mechanisms; and Bilder and Loughin (1998), who studied weather and distance but treated kickers as “interchangeable parts” by omitting individual kicker effects [PAGE 2]. Berry and Wood (2004) examined “icing the kicker” while assuming common distance slopes across kickers [PAGE 2]. Pasteur and Cunningham-Rhoads (2014) used cross-validation to show that distance alone reduces predictive mean squared error by 14% relative to an intercept-only model, while adding seven further variables (temperature, wind, fatigue, defense quality, Denver altitude, etc.) yielded less than a 2% additional reduction [PAGE 2]. McCullagh et al. (1989) is cited for the observation that probit and logit are nearly linearly related over 0.1 ≤ π ≤ 0.9, making them difficult to discriminate, whereas CLL behaves differently near π → 1 and for small π [PAGE 4].

A multi-week trap is documented in the introduction and discussion. The 2010 New Orleans Saints released Garrett Hartley after a missed 29-yard overtime field goal, signed John Carney, who then missed a 29-yard attempt two weeks later, after which Hartley was rehired and made 16 of his final 18 attempts [PAGE 1–2, 17]. Table 1 quantifies the recurrence: 12 releases in 2001–2003, 10 in 2004–2006, 11 in 2007–2009, 6 in 2010–2012, and 10 in 2013–2015, averaging more than three mid-season non-injury kicker releases per year [PAGE 1–2]. This is a retrospective causal loop: a single miss triggers a personnel transaction, the replacement faces the same base-rate difficulty, and the original kicker often resurfaces elsewhere, implying that teams repeatedly overpay for sampling variance. The paper’s discussion identifies this as potentially arising from “misunderstanding of the sampling variability inherent in estimating success probabilities from a small number of binary trials” [PAGE 17]. The temporal scope also encodes non-stationarity: Figure 9 shows log(attempt frequency) increasing linearly with year for 50-, 55-, and 60-yard bins, indicating that the data-generating process itself drifts over the 16-year window [PAGE 15–16]. Thus any ranking static across 1998–2014 conflates cross-sectional ability with secular improvement in range and accuracy.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis-habit regression: A general manager observes a missed game-deciding kick and infers that the kicker’s latent ability has permanently dropped below replacement level. The recursive step is that the manager models the kicker as a fixed parameter θ_k estimated from n_k trials, but because n_k is small, the posterior variance of θ_k remains large. The decision to cut ignores the regression-to-the-mean property: conditional on an extreme miss, the next attempt by the same kicker, or by a replacement drawn from the same population, is more likely to be average than extreme. The 2010 Saints sequence—Hartley misses 29 yards, Carney misses 29 yards, Hartley returns and converts 16/18—is the empirical signature of this loop [PAGE 1–2, 17].

Counter-trap: Shrinkage estimation is the formal counter-trap. By forming π̂(d) = ω π̂_k(d) + (1−ω) π̂_EF(d), the estimator explicitly asserts that the kicker-specific parameter is drawn from a league-wide distribution and that extreme observed frequencies should be pulled toward the central value. The exponential weight ω(n_k) = 1 − exp(−n_k/670) implements a recursive belief update: a rookie with n_k = 10 receives only 2% weight on his own MLE and 98% on the league empirical frequency, while a veteran with n_k = 400 receives 45% self-weight [PAGE 6–7]. This prevents the organization from overreacting to a single missed 29-yarder.

Clock: The model operates over a 16-year panel (1998–2014) with an embedded temporal drift. Figure 9 demonstrates that the log-frequency of 50-, 55-, and 60-yard attempts increases with season, and the discussion confirms “over the last five years, there has been an increase in the distances at which field goals are attempted, most likely due to increases in kicker abilities” [PAGE 15–17]. This means the prior distribution over kicker ability is non-stationary; a shrinkage estimator fitted to 1998–2004 data would mis-calibrate 2012–2014 kickers because the league-wide mean π̂_EF(d) itself shifts upward at long distances. The recursive theory of mind thus nests three layers: the kicker knows his job is precarious after a miss (first-order belief), the general manager updates on the miss and cuts the kicker (second-order belief), and the league-wide distribution of ability drifts over seasons, invalidating static priors (third-order belief). Shrinkage mitigates the second-order overreaction but does not resolve the third-order non-stationarity unless the model is re-fit periodically or includes year effects, which the paper leaves to future work [PAGE 17].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The single most important predictor is distance; all prior work agrees on this, and Pasteur and Cunningham-Rhoads (2014) found that adding distance to an intercept-only model reduces predictive MSE by 14%, whereas seven additional variables (temperature, wind, kicker fatigue, defense quality, Denver) add less than 2% [PAGE 2]. Osborne and Levine therefore restrict the core model to distance and kicker identity only, explicitly declining to model weather or psychological pressure as primary aims [PAGE 2].

Biomechanical layer: Distance enters non-linearly. The quadratic extension log{−log(1−π_j)} = β₀ + β^L_k d_j + β^Q_k d²_j allows the success curve to bend, capturing the trade-off between “big leg” kickers (high π at d = 55) and “accurate, no leg” kickers (high π at d = 35 but low π at d = 55) [PAGE 13–14, Fig. 6]. Selection bias operates at the biomechanical edge: long attempts are only afforded to strong-legged kickers, so the empirical frequency at d = 55 or 60 is an upward-biased estimate of the average kicker’s true long-range ability [PAGE 4–5].

Weather layer: Excluded by design. The authors state their aim “is not to select variables for the best model, nor to account for the various subtle (in comparison to distance) effects of weather or psychological pressure” [PAGE 2]. This is an explicit scope veto: any claim that the model accounts for wind, temperature, or precipitation is invalid. Stadium effects, however, are modeled as fixed factorial terms and found highly significant (likelihood ratio χ² = 112, p < 0.0001, df = 50) [PAGE 10–11]. Heinz Field ranks among the most difficult venues (model-based π = 0.72, std. err. 0.03), while Lucas Oil Stadium ranks easiest (π = 0.88, std. err. 0.03) [PAGE 14, Table 11].

Veto adjudication: The model is veto-proof only within its declared boundaries. It fails at the extremes: short-distance misses are often snap or hold failures misattributed to the kicker, and long-distance attempts are selected on kicker quality [PAGE 3–5]. The independence assumption ignores temporal dependence (fatigue, icing), and the binary outcome discards information about whether a failure was a block, a fumble, or a pure miss [PAGE 3]. Therefore, any operational use of these rankings must apply three vetoes: (1) do not apply estimates at d > 60 yards to average kickers without correcting for selection bias; (2) do not ignore stadium marginal means when comparing kickers who played in different venues, because the unadjusted ranking overrates dome kickers and underrates outdoor kickers [PAGE 14]; (3) do not treat a single missed attempt as evidence of permanent ability decline, because the sampling variance for n_k < 200 is too large to support that inference [PAGE 7, Table 13 shows coefficient of variation dropping from 18.87 to 18.87 at 65 yards under shrinkage only in degenerate cases, but generally halving at mid-ranges].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Rookie small-sample veto. Counterfactual: A kicker with n_k = 8 career attempts misses a 29-yard field goal in Week 3. The raw MLE yields π̂_k(29) = 0.00 with an undefined or degenerate interval, prompting a release decision. RLVR veto: Because n_k = 8 lies in the sparse regime where SE_k dominates SE_EF, the inverse-variance weight places almost all mass on π̂_EF(29) ≈ 0.85–0.90 [PAGE 5–6]. Prediction: The replacement kicker, drawn from the same league population, will convert at the league mean for 29-yard attempts over the next four weeks, not at an improved rate; the original kicker’s next 10 attempts will regress to approximately 0.85. Verification: Track release/replacement pairs with n_k < 20 at the time of release; compare replacement 29–31 yard conversion rate to league mean.

Scenario 2 — Long-range selection-bias veto. Counterfactual: At d = 62 yards, three attempts are observed in the dataset, all by elite kickers, all successful, giving π̂_EF(62) = 1.00. An unadjusted ranking concludes an average kicker has a 100% chance from 62 yards. RLVR veto: The sample is selected on kicker quality (only strong legs are sent out at this distance), and N_d is too small for SE_EF to be stable; the paper restricts quadratic analysis to kickers with n_k ≥ 100 and notes selection bias explicitly [PAGE 13, 4–5]. Prediction: A league-average kicker forced to attempt a 62-yard field goal will have a true success probability materially below 1.00, likely below 0.40 given the quadratic trend (ML mean at 60 yards is 0.43, shrinkage mean 0.30; Table 13 [PAGE 14]). Verification: Compare observed long-distance conversion rates conditional on kicker experience tier (veteran n_k ≥ 100 vs. non-veteran) to test for selection effects.

Scenario 3 — Stadium-confounding veto. Counterfactual: Two kickers have identical raw overall percentages (0.84), but Kicker A played 70% of attempts in domes and Kicker B played 70% in outdoor cold-weather stadiums. The unadjusted ranking treats them as equal. RLVR veto: Stadium effects are significant (χ² = 112, p < 0.0001), and the stadium-adjusted ranking reorders kickers such that Mike Hollis and Phil Dawson move upward because they kicked in tougher venues (Alltel Stadium, Cleveland Browns Stadium), while Matt Bryant barely moves because his venues were average [PAGE 14]. Prediction: Signing Kicker B (outdoor, lower model-based π after adjustment) to a dome team will yield a performance increase roughly equal to the stadium effect delta (e.g., from π = 0.72 at Heinz Field-type conditions to π = 0.88 at Lucas Oil-type conditions), whereas signing Kicker A to an outdoor stadium will yield a corresponding decline. Verification: Track kickers who change franchises between stadium tiers and compare post-move conversion at matched distances to pre-move rates.
</RLVR_COUNTERFACTUAL_VETOES>