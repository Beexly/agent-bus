---
source: "2021 - Increasing the shot at a quality draft-decision A Bayesian approach to improve predicting three-point accuracy translation in the NBA Draft - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2021"
pages: 27
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4595
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper about Bayesian approach to predicting three-point accuracy translation in the NBA Draft. They've provided the full text of 27 pages.

I need to follow strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across these exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations like "Force/Fatigue". Must use formal LaTeX.

Let me structure the response:

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Need to discuss:
- Bayesian shrinkage from raw 3P% to empirical Bayes estimate
- The beta-binomial regression addressing attempt volume bias
- Multiple regression models M1-M4
- Gray zones: small sample instability, position bias (bigmen), external factors (system, teammates), data limitations (COVID cutoff June 2020, ongoing careers)
- Multi-hop: how prior alpha=114, beta=201 derived, how it updates to posterior Beta(alpha+makes, beta+misses), how 3P% estimate feeds into M1 and M4, how attempt rate model works
- Verbatim quotes with page citations

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations, units, page citations, breakdown.
- 3P% = 3PM/3PA [PAGE 10]
- X ~ Beta(alpha, beta) [PAGE 11], alpha≈114, beta≈201 [PAGE 11]
- Prior mean = alpha/(alpha+beta) ≈ 0.362 [PAGE 11]
- Posterior Beta(alpha+makes, beta+misses) [PAGE 11]
- Examples: 1+114 / 2+114+201 ≈ 0.363 vs 40+114 / 100+114+201 ≈ 0.371 [PAGE 12]
- Beta-binomial regression: pi_i ~ Beta(alpha, beta), 3PM_i ~ Binom(3PA_i, pi_i) [PAGE 13-14]
- M1: PostDraft3P% = beta0 + beta1 PreDraftFT% + beta2 PreDraft2PJ% + beta3 PreDraft3P%-Estimate [PAGE 16], adjusted R²=0.231, coefficients table [PAGE 16-17]
- M2: PostDraft3P% = beta0 + beta1 PreDraftFT% + beta2 PreDraft3P% + beta3 PreDraft3PAp40 [PAGE 16], adj R²=0.213
- M3: PostDraft3P% = beta0 + beta1 PreDraftFT% + beta2 PreDraft3PMp40 [PAGE 16], adj R²=0.216
- M4: PostDraft3PAp40 = beta0 + beta1 PreDraft3PMp40 + beta2 PreDraft2PJ% + beta3 PreDraft3P%-Estimate [PAGE 20], adj R²=0.588
- Filtering: N=47408 NCAA athletes 2012-2020, N=386 draftees, N=255 with at least 1 college 3PA and 50 NBA games [PAGE 8, 16]
- Units: percentages (dimensionless probabilities [0,1]), attempts (count), per 40 minutes (rate)
- Breakdown regimes: n < 750 attempts unstable [PAGE 8, 10]; small sample overvaluation [PAGE 13]; bigmen prediction problems [PAGE 19]; data cutoff June 2020 [PAGE 8]

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: beta-binomial from baseball batting average [61] Robinson 2017; Moneyball ideas [45, 46]; three-point line 1979 [PAGE 4]; NCAA line 1986 [PAGE 4]; NBA distance 7.24m vs college 6.75m [PAGE 7 footnote 1]
- Multi-week traps: draft cycle annual, small sample per draft class, recency bias from March Madness [PAGE 7], hot hand fallacy [75], status-quo bias in drafting non-shooting bigmen [PAGE 6]
- Historical context: draft as decisions under uncertainty [PAGE 3-4], biases (nationality, recency, availability, age, positional length) [PAGE 4]

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: GMs revert to familiar heuristics under draft pressure (drafting bigmen by height rather than shooting skill) [PAGE 6]
- Counter-trap: Bayesian model as counter-trap to subjective noise, but itself can be over-trusted; model says use as decision-informing tool not main argument [PAGE 22]
- Clock: ongoing nature of dataset, post-draft numbers still developing, data scraped June 2020 missing COVID resumption [PAGE 8]; players getting younger [PAGE 8]; need more data over coming years [PAGE 23]

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical/biomechanical: two-point jumper accuracy as proxy for shooting touch [PAGE 8-9, 16]; biomechanics of jump shot [80, 42]; heart rate effect on 3PT accuracy [3]; hypnosis/flow states [59]
- Weather: indoor sport, no weather veto per se, but arena conditions? Paper doesn't mention weather. Need to be careful. I can note indoor controlled environment means weather is not a veto layer, but biomechanical/physical layers are.
- Veto proof: model limitations - external factors (tactical system, injury, suspension, competition) not captured [PAGE 15, 22]; conservative college schemes suppressing bigmen [PAGE 22]; non-linear development [PAGE 22]

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
Need 3 verifiable counterfactual veto scenarios with predictions.
1. Small sample veto: If a prospect has < 50 college 3PA, empirical Bayes shrinkage collapses estimate toward prior (~0.362), overriding raw hot streak. Prediction: raw 3P% > 0.45 with n < 20 will be vetoed by model; post-draft 3P% will regress toward ~0.36 ± shrinkage.
2. Bigmen physical veto: If position = center/power forward and pre-draft 2PJ% < league median, model underpredicts post-draft 3PAp40 despite high 3PMp40 because scheme suppressed attempts. Prediction: M4 error for bigmen > 1.2 MAD (global mean absolute deviation) and systematic underestimation of volume.
3. Mechanical change / development counterfactual: If a prospect undergoes shooting mechanic overhaul between draft and NBA season, static pre-draft metrics fail. Prediction: M1/M4 residuals will show positive outlier bias (actual > predicted) for players with documented mechanic changes, violating the model's stationarity assumption.

Wait, the user said "3 verifiable RLVR veto scenarios + predictions." RLVR likely means Reinforcement Learning from Verifiable Rewards or similar, but in this context probably means verifiable rejection/veto scenarios. I'll frame them as model veto scenarios where the model's output should be overridden or flagged.

Need to ensure no betting lines. The paper doesn't mention betting anyway, but I must not mention spreads/totals/moneylines/odds.

Need to ensure >=1000 words total across sections. Each section should be substantial. THINK_TRACE >=400 words.

Let me write carefully with exact page citations and verbatim quotes.

Important: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I have all 27 pages. I'll cite heavily.

Let me draft each section.

THINK_TRACE (>=400 words):
Deep multi-hop derivation:
- Start with raw 3P% = 3PM/3PA [PAGE 10]
- Problem: 1/2 vs 40/100 same surface accuracy but different reliability [PAGE 10-11]
- Solution 1: Empirical Bayes shrinkage. Fit Beta distribution to all 3P% in database. alpha≈114, beta≈201 [PAGE 11]. Prior mean ≈0.362 [PAGE 11].
- Update rule: Beta(alpha+makes, beta+misses) [PAGE 11]. Example calculations [PAGE 12].
- Problem 2: One-size-fits-all prior overvalues low-volume shooters because weak shooters shoot less [PAGE 13].
- Solution 2: Beta-binomial regression. Individual priors based on 3PA. pi_i ~ Beta(alpha, beta), 3PM_i ~ Binom(3PA_i, pi_i) [PAGE 13-14].
- Then combine FT%, 2PJ%, and EB 3P% estimate into M1 multiple regression [PAGE 16].
- Compare M1 (adj R²=0.231) vs M2 (0.213) vs M3 (0.216) [PAGE 16-17]. M1 best, but margins small.
- Then M4 for attempt rate: adj R²=0.588 [PAGE 20]. Predictors: 3PMp40, 2PJ%, 3P%-Estimate [PAGE 20].
- Gray-zone audit: Data cutoff June 2020 [PAGE 8], N=255 filter [PAGE 16], 750 attempts stabilization threshold [PAGE 8, 10], bigmen problem [PAGE 19, 22], external factors omitted [PAGE 15, 22], COVID missing data [PAGE 8].
- Multi-hop chain: NCAA play-by-play -> Hoop-Math/Barttorvik -> NBA Basketball-Reference -> Beta prior -> shrinkage -> regression coefficients -> draft decision utility.

Need to include verbatim quotes. E.g.:
"three-point-percentage (3P%) as a metric stabilizes at around 750 attempts" [PAGE 8].
"The found prior is the head start basically every player gets assigned with before evaluating their actual performance." [PAGE 11]
"M1 proved to be a highly significant general model with an overall explanatory power of an adjusted R² of 0.231." [PAGE 16-17]

SOURCE_OPERATORS_AND_EQUATIONS:
List formal LaTeX.
- Let $X \sim \text{Beta}(\alpha, \beta)$ [PAGE 11]
- $\hat{\alpha} \approx 114$, $\hat{\beta} \approx 201$ [PAGE 11]
- Prior mean $\mu_0 = \frac{\alpha}{\alpha+\beta} \approx \frac{114}{315} \approx 0.362$ [PAGE 11]
- Posterior: $\text{Beta}(\alpha + \text{makes}, \beta + \text{misses})$ [PAGE 11]
- Numeric: $\frac{1+114}{2+114+201} \approx 0.363$ vs $\frac{40+114}{100+114+201} \approx 0.371$ [PAGE 12]
- Beta-binomial: $p_i \sim \text{Beta}(\alpha, \beta)$, $3PM_i \sim \text{Binomial}(3PA_i, p_i)$ [PAGE 13-14]
- M1: $\text{PostDraft3P\%} = \beta_0 + \beta_1 \text{PreDraftFT\%} + \beta_2 \text{PreDraft2PJ\%} + \beta_3 \text{PreDraft3P\%-Estimate} + \epsilon$ [PAGE 16]
- Coefficients: constant -0.134 (SE .052), FT% .153 (.062), 2PJ% .202 (.081), 3P%-Estimate .756 (.146) [PAGE 16-17]
- M2: $\text{PostDraft3P\%} = \beta_0 + \beta_1 \text{PreDraftFT\%} + \beta_2 \text{PreDraft3P\%} + \beta_3 \text{PreDraft3PAp40}$ [PAGE 16], adj R²=.213
- M3: $\text{PostDraft3P\%} = \beta_0 + \beta_1 \text{PreDraftFT\%} + \beta_2 \text{PreDraft3PMp40}$ [PAGE 16], adj R²=.216
- M4: $\text{PostDraft3PAp40} = \beta_0 + \beta_1 \text{PreDraft3PMp40} + \beta_2 \text{PreDraft2PJ\%} + \beta_3 \text{PreDraft3P\%-Estimate}$ [PAGE 20], adj R²=.588, MAD=1.2
- Filter: NCAA 2012-2020 N=47408; drafted N=386; analysis sample N=255 (≥1 college 3PA, ≥50 NBA games) [PAGE 8, 16]
- Units: probabilities dimensionless in [0,1]; counts dimensionless; rates per 40 minutes (min⁻¹ scaled)
- Breakdown: n_3PA < 750 unstable [PAGE 8, 10]; small-n overvaluation [PAGE 13]; bigmen residual bias [PAGE 19, 22]; temporal truncation June 2020 [PAGE 8]; omitted variables: tactical system, injury, competition [PAGE 15, 22]

RETROCAUSAL_GENEALOGY:
- Three-point line introduced NBA 1979 [PAGE 4], NCAA 1986 [PAGE 4]
- NBA distance 7.24m vs college/FIBA 6.75m [PAGE 7 footnote 1]
- Moneyball/Oakland A's data inefficiencies [45, 46] [PAGE 5]
- Bayesian batting average analogy [61] Robinson 2017 [PAGE 9-10]
- Draft as decisions under uncertainty [51] [PAGE 1]
- Biases: nationality [54], recency/availability [12,17,38], age/positional length [4,13,29], March Madness hot streak [12] [PAGE 4, 7]
- Multi-week traps: annual draft cycle means limited iterations; small sample per class; recency bias from conference tournaments; status-quo bias drafting non-shooting bigmen [PAGE 6]; hot hand fallacy [75]
- Lineage of shrinkage: baseball batting average -> basketball 3P% [50] [PAGE 9-10]

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under draft uncertainty, GMs regress to visible traits (height, position) rather than modeled shooting [PAGE 6: "still draft more non-shooting bigmen in higher spots... status-quo-bias"]
- Counter-trap: The Bayesian model itself can become a new authority; authors warn it should be "decision-informing tool... rather than being the main argument" [PAGE 22]
- Clock: Dataset ongoing; post-draft numbers still developing [PAGE 8]; players getting younger [PAGE 8]; more NCAA play-by-play data arriving [PAGE 23]; model validity decays as league style evolves (three-point revolution ongoing) [PAGE 5-6]
- Recursive ToM: GMs know other GMs use analytics; second-order inference on who will be drafted where; model must account for adversarial draft environment, not just prediction.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical/biomechanical layer: 2PJ% as proxy for shooting touch; same biomechanical capabilities [PAGE 8-9]; jump shot biomechanics [42, 80]; heart rate effect [3]; psychological flow/hypnosis [59]
- Weather layer: Indoor sport; no meteorological veto; arena conditions constant. However, travel/altitude not discussed. I can state weather is null set for this model because games are indoor controlled, but note that physical fatigue across back-to-backs is not modeled.
- Veto adjudication: The model explicitly omits tactical system, injury, suspension, competition [PAGE 15]; conservative college schemes suppressing bigmen shooting [PAGE 22]; non-linear development from coaching/mechanic change [PAGE 22]. These are veto conditions where model output must be discarded or flagged. Bigmen are the clearest veto class [PAGE 19, 22].

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios with predictions.
Scenario 1: Low-volume statistical veto. If college 3PA < 25 and raw 3P% > 0.42, model EB shrinkage pulls estimate toward 0.362 prior. Verifiable: compare pre-draft raw vs shrunken for n<25. Prediction: post-draft 3P% will be closer to shrunken estimate than raw; raw high% will overpredict by ≥0.08.
Scenario 2: Bigmen volume-accuracy decoupling veto. If position ∈ {C, PF} and pre-draft 3PMp40 > 1.0 but college scheme limited 3PA, M4 may underpredict NBA 3PAp40. Verifiable: examine M4 residuals for bigmen vs wings. Prediction: M4 MAD for bigmen > global MAD of 1.2; systematic negative residual (actual > predicted) when given NBA green light.
Scenario 3: Mechanical intervention veto. If documented shooting mechanic overhaul occurs between draft and rookie season, stationary pre-draft metrics fail. Verifiable: identify players with coaching changes/shot reconstruction; compare M1 residuals. Prediction: M1 will underestimate post-draft 3P% by >0.05 for improved mechanics; model requires retraining with biomechanical features.

I should make sure predictions are phrased carefully as model limitations rather than betting advice.

Word count: Need >=1000 words total. I'll aim for ~1500-2000 words across sections. THINK_TRACE alone >400.

Let's write it out.

Need to avoid "odds" word. I will not use it. No betting lines.

Check for accidental toy equations: None. All equations are from paper.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s core inference chain begins with the observation that raw three-point percentage, defined as 3P% = 3PM / 3PA [PAGE 10], is an unstable estimator at pre-draft sample sizes. The authors note that “three-point percentage (3P%) as a metric stabilizes at around 750 attempts” [PAGE 8], yet almost no draft-eligible college player accumulates such volume, creating a “draft projection dilemma” [PAGE 8]. The first multi-hop is therefore a move from a naive plug-in estimator to an empirical Bayes (EB) shrinkage estimator. The authors fit a Beta distribution to the full NCAA database of three-point percentages, obtaining α ≈ 114 and β ≈ 201 [PAGE 11], which implies a league-informed prior mean of α / (α + β) ≈ 0.362 [PAGE 11]. Each player’s observed makes and misses then update this prior via the conjugacy rule Beta(α + makes, β + misses) [PAGE 11]. Numerically, a shooter going 1/2 shrinks to approximately 0.363, while a shooter going 40/100 shifts to approximately 0.371 [PAGE 12], demonstrating that the model correctly ranks higher-volume evidence above a small-sample perfect or near-perfect raw percentage.

The second multi-hop addresses a selection bias in the first shrinkage pass: “weak shooters generally tend to shoot less than better long-range threats” [PAGE 13], so a single global prior systematically overvalues low-volume shooters [PAGE 13]. The authors adopt Robinson’s beta-binomial regression, in which each player’s true percentage pᵢ is drawn from a Beta prior whose hyperparameters are conditioned on that player’s attempt volume, and observed makes follow Binomial(3PAᵢ, pᵢ) [PAGE 13–14]. This produces individualized priors such that a player with only 10 college three-point attempts is treated as almost certainly worse than a player with 750 attempts, even at equal observed percentage [PAGE 14].

The third multi-hop combines this EB three-point estimate with free-throw percentage and two-point-jumper percentage into M1, a multiple linear regression for post-draft three-point percentage [PAGE 16]. The authors contrast M1 (adjusted R² = 0.231) against M2 and M3, which use unshrunk raw percentages or per-40-minute rates instead (adjusted R² = 0.213 and 0.216, respectively) [PAGE 16–17]. M1’s standardized coefficients show the EB three-point estimate carries the largest projection weight (β = 0.343), while FT% and 2PJ% contribute independently [PAGE 16–17]. The fourth multi-hop extends the framework to volume rather than accuracy: M4 projects post-draft three-point attempts per 40 minutes using pre-draft three-pointers made per 40 minutes, pre-draft 2PJ%, and the EB three-point estimate, achieving adjusted R² = 0.588 [PAGE 20].

Gray-zone audit: (1) Temporal truncation—the dataset was scraped in June 2020 and excludes the post-COVID-19 intermission resumption, while most players’ post-draft careers were still ongoing [PAGE 8]; (2) the analysis sample is restricted to N = 255 players with at least one college three-point attempt and 50 NBA games [PAGE 16], excluding low-volume or early-career cases; (3) the model explicitly omits tactical system, teammates, injury, suspensions, and competition difficulty [PAGE 15], leaving systematic error for conservative college schemes that suppress bigmen’s shooting [PAGE 22]; (4) position-specific residual bias is pronounced for bigmen, where the model offers “the most problems” even though position was not significant in initial M1 [PAGE 19–22]; (5) the EB prior assumes stationarity across the 2012–2020 window despite the ongoing three-point revolution [PAGE 4–6]. These regimes define exact breakdown conditions where model outputs must be vetoed rather than treated as draft authority.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX equations, units, page citations, and breakdown regimes.

Data operators:
- NCAA play-by-play source: Hoop-Math, 2012–2020, N = 47,408 athletes; matched to NBA draftees N = 386 via Basketball-Reference [PAGE 8].
- Analysis filter: drafted players with ≥1 college three-point attempt and ≥50 NBA games, N = 255 [PAGE 16].
- Units: all percentages are dimensionless probabilities in [0, 1]; attempt and make counts are dimensionless integers; per-40-minute rates are scaled counts min⁻¹.

Probability operators:
- Raw accuracy: $3P\% = \frac{3PM}{3PA}$ [PAGE 10].
- Global EB prior fit: $X \sim \text{Beta}(\alpha, \beta)$ with $\hat{\alpha} \approx 114$, $\hat{\beta} \approx 201$ [PAGE 11].
- Prior mean: $\mu_0 = \frac{\alpha}{\alpha + \beta} \approx \frac{114}{315} \approx 0.362$ [PAGE 11].
- Posterior update: $\text{Beta}(\alpha + \text{makes}, \beta + \text{misses})$ [PAGE 11].
- Numeric demonstration: $\frac{1+114}{2+114+201} \approx 0.363$ versus $\frac{40+114}{100+114+201} \approx 0.371$ [PAGE 12].
- Beta-binomial regression: $p_i \sim \text{Beta}(\alpha, \beta)$, $3PM_i \sim \text{Binomial}(3PA_i, p_i)$, where $3PA_i$ is fixed and known [PAGE 13–14].

Translation models:
- M1: $\text{PostDraft3P\%} = \beta_0 + \beta_1(\text{PreDraftFT\%}) + \beta_2(\text{PreDraft2PJ\%}) + \beta_3(\text{PreDraft3P\%-Estimate}) + \epsilon$ [PAGE 16]. Adjusted R² = 0.231. Coefficients: constant −0.134 (SE .052, p = .011); FT% .153 (SE .062, p = .015); 2PJ% .202 (SE .081, p = .013); 3P%-Estimate .756 (SE .146, p < .001) [PAGE 16–17].
- M2: $\text{PostDraft3P\%} = \beta_0 + \beta_1(\text{PreDraftFT\%}) + \beta_2(\text{PreDraft3P\%}) + \beta_3(\text{PreDraft3PAp40})$ [PAGE 16]. Adjusted R² = 0.213; raw Pre-Draft-3P% statistically insignificant (p = .640) [PAGE 17].
- M3: $\text{PostDraft3P\%} = \beta_0 + \beta_1(\text{PreDraftFT\%}) + \beta_2(\text{PreDraft3PMp40})$ [PAGE 16]. Adjusted R² = 0.216 [PAGE 17].
- Error comparison: M1 mean absolute deviation = 0.0447 vs M2 = 0.0466 and M3 = 0.0463 [PAGE 18].

Attempt-rate model:
- M4: $\text{PostDraft3PAp40} = \beta_0 + \beta_1(\text{PreDraft3PMp40}) + \beta_2(\text{PreDraft2PJ\%}) + \beta_3(\text{PreDraft3P\%-Estimate})$ [PAGE 20]. Adjusted R² = 0.588; mean absolute deviation = 1.2 attempts per 40 minutes [PAGE 20]. Stepwise coefficients: constant −3.830 (SE 1.488, p = .011); 3PMp40 .563 (SE .058, p < .001); 2PJ% 4.990 (SE 1.741, p = .005); 3P%-Estimate 11.955 (SE 4.352, p = .006) [PAGE 20].

Breakdown / singularity regimes:
- Small-sample instability: raw 3P% unreliable below ~750 attempts [PAGE 8, 10].
- Low-volume overvaluation: one-size EB prior overrates shooters with few attempts [PAGE 13].
- Bigmen regime: largest prediction errors for centers/power forwards; accuracy and attempt-rate models both show position-structured residuals [PAGE 19, 22].
- Temporal regime: data scraped June 2020, missing post-COVID resumption and ongoing career development [PAGE 8, 22].
- Omitted-variable regime: tactical system, injury, suspension, competition strength, biomechanical/psychological development not modeled [PAGE 15, 22].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week trap structure.

The paper’s intellectual lineage begins with the three-point rule itself: the NBA introduced the line in 1979 as a reaction to bigman dominance, and college basketball followed in 1986 [PAGE 4]. The NBA distance is 7.24 m, whereas college and FIBA use 6.75 m [PAGE 7, footnote 1], creating a translation boundary that the paper treats as a physical constraint on pre-draft projection [PAGE 7]. The strategic reframing of the three-pointer rests on the Moneyball tradition of exploiting statistical inefficiencies [45, 46] and the recognition that three-point volume drives offensive rating and winning [57] [PAGE 5–6].

The statistical lineage is explicitly trans-sport. The authors invoke empirical Bayes shrinkage as previously validated for baseball batting average [61] and already applied to pre-draft three-point percentage in basketball [50] [PAGE 9–10]. Their notation—$p_i \sim \text{Beta}(\alpha, \beta)$ with binomial likelihood—mirrors Robinson’s empirical Bayes framework for batting averages [61] [PAGE 9–10]. The draft itself is framed as a decision under uncertainty where outcome probabilities are “roughly estimated and are mostly unknowable” [78] [PAGE 3].

Historical biases create multi-week traps within the annual draft cycle. The literature cited covers nationality bias [54], recency and availability bias [12, 17, 38], and misjudgment of age and positional length as potential proxies [4, 13, 29] [PAGE 4]. A particularly acute trap is March Madness: small-sample hot streaks in the conference tournament can trigger recency and availability bias, causing evaluators to overvalue a prospect based on a few games [PAGE 7]. Because the draft occurs once per year, front offices cannot iterate rapidly enough to correct these biases within a single cycle; errors compound across draft classes. The authors also identify a status-quo trap in which NBA teams “still draft more non-shooting bigmen in higher spots than they should” despite the league-wide three-point trend [PAGE 6]. This is a multi-week organizational trap: scouting departments accumulate priors over years that are slow to update even as the on-court product changes [PAGE 5–6].

The Bayesian approach is positioned as a retrograde corrective to these traps: by forcing shrinkage toward a data-informed prior, it interrupts recency-driven overreaction to small college samples. However, the genealogy is not clean—batting-average stability assumptions do not perfectly transfer to basketball because shot creation, defensive spacing, and role assignment are context-dependent [PAGE 8, 15], and the prior itself is estimated from the same flawed historical decisions that produced the biases.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap architecture, and clock dynamics.

Under draft-night pressure, general managers exhibit crisis habit regression: they revert to legible, visible traits—height, position, college reputation—rather than modeled shooting competence. The paper documents this directly: teams continue drafting non-shooting bigmen in high slots despite the three-point revolution, which the authors attribute to “rigid underlying management structures and a potential status-quo-bias” [PAGE 6]. In cognitive terms, this is a regression to the evaluative and inferential processes that decision-makers draw on under uncertainty [43] [PAGE 4], where taste, preference, and philosophy dominate because basketball remains “not been ‘solved’ yet” [PAGE 4].

The Bayesian model functions as a counter-trap to this habit regression. By replacing raw 3P% with an EB estimate conditioned on attempt volume, it mechanically demotes small-sample mirages and resists the hot-hand fallacy [75] [PAGE 13]. Yet the model itself creates a second-order trap: front offices may over-trust the regression output and treat adjusted R² = 0.231 or 0.588 as decision authority rather than directional information. The authors explicitly resist this, stating the design “should rather be used as a valuable decision-informing tool during the draft process, triggering conversation and possibly closer investigations of prospects, rather than being the main argument for a choice” [PAGE 22]. A recursive theory of mind must therefore model not only the prospect’s true shooting curve but also the drafting organization’s likely reaction to the model—whether it will over-correct toward analytics, under-correct toward habit, or game the model by drafting prospects whose pre-draft metrics look strong but whose college systems suppressed their actual range.

The clock layer operates on three time scales. First, the dataset is temporally truncated: scraped in June 2020, missing the post-COVID-19 season resumption, while most post-draft careers were still developing [PAGE 8]. Second, the talent pool is getting younger, reducing pre-draft sample sizes further [PAGE 8]. Third, NCAA play-by-play coverage has only existed for a decade, so the two-point-jumper metric rests on a shallow historical base that will expand only as more seasons accumulate [PAGE 23]. Consequently, the model’s validity decays as league style evolves; the very three-point revolution the paper describes means that priors estimated from 2012–2020 NCAA data may misstate the translation function for players entering the league in later years. The clock is not neutral: every draft class shifts the reference distribution the model was trained on.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto proof.

Physical layer: The model treats two-point-jumper percentage (2PJ%) as an independent indicator of general “shooting touch,” assuming that two-point jumpers require many of the same biomechanical capabilities as three-pointers and free throws [PAGE 8–9]. This is grounded in jump-shot biomechanics literature [42, 80] and the claim that all scoring attempts share similar technique despite different game contexts [PAGE 8]. Free-throw percentage is similarly justified as a measure of shooting touch that enlarges the information base [PAGE 8]. These variables are significant in M1 (FT% p = .015; 2PJ% p = .013) and M4 (2PJ% p = .005), supporting their inclusion as physical proxies [PAGE 16–17, 20].

Biomechanical and physiological layer: The paper cites research showing heart rate affects three-point accuracy [3], and psychological factors such as hypnosis and flow states influence three-point performance [59] [PAGE 24–25 references]. None of these are in the regression. A prospect with high pre-draft metrics but poor conditioning, inconsistent mechanics, or low confidence will violate the stationarity assumption that pre-draft touch maps linearly to post-draft output. This is a veto layer: if biomechanical or psychological screening reveals a correctable flaw or high coachability, the model’s static coefficients understate upside [PAGE 22–23].

Environmental layer: Basketball is played indoors under controlled conditions, so meteorological weather is a null veto for this specific model; no wind, temperature, or precipitation terms exist or are relevant [PAGE 4–22]. However, the “environment” in the paper’s sense means tactical system, teammates, competition level, and role within team structure [PAGE 8, 15]. Conservative college schemes can suppress shooting aspirations of talented bigmen [PAGE 22], and varying degrees of attempt difficulty complicate projection [PAGE 7]. These are active vetoes: whenever a prospect’s college role was systemically suppressed or artificially inflated, the pre-draft metrics are non-transportable.

Veto adjudication summary: The largest empirical veto class is bigmen. The authors show that predicting bigmen’s shooting accuracy offers “the most problems” and that bigmen/non-big distinctions matter for both accuracy and attempt-rate residuals [PAGE 19, 22]. A veto rule is therefore triggered whenever position ∈ {center, power forward} and college three-point volume is low relative to physical profile: the model’s posterior should be treated as a floor, not a forecast, pending biomechanical and mechanical inspection.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning verifiable-reward (RLVR) veto scenarios with testable predictions.

Veto scenario 1 — Small-sample raw-percentage veto.
Counterfactual: A prospect shoots 45% (9/20) from three in college with only 20 attempts. Raw metrics would rank him elite. The EB estimator with α = 114, β = 201 produces a posterior mean of (9 + 114) / (20 + 114 + 201) ≈ 0.352 [PAGE 11–12], collapsing toward the prior mean of 0.362.
Verifiable check: Compare post-draft 3P% for all prospects with 20 ≤ 3PA ≤ 30 and raw 3P% > 0.42 versus those with EB estimate < 0.37.
Prediction: The raw-percentage group will overpredict post-draft accuracy by at least 0.08 relative to the EB-shrunken group, and the model error (|actual − predicted|) will exceed M1’s global mean absolute deviation of 0.0447 [PAGE 18]. The veto is triggered: draft boards should not overweight the raw streak.

Veto scenario 2 — Bigmen volume-accuracy decoupling veto.
Counterfactual: A power forward shoots 42% on 80 college three-pointers but plays in a conservative system that restricts his attempts. M4 uses pre-draft 3PMp40, 2PJ%, and EB estimate to project post-draft attempt rate [PAGE 20]. If his college 3PA is suppressed, M4 may underpredict his NBA attempt volume once he receives a green light.
Verifiable check: Partition M4 residuals by position. Compute mean absolute deviation for bigmen versus guards/wings.
Prediction: Because bigmen present “the most problems” [PAGE 19], M4’s MAD for frontcourt players will exceed the global MAD of 1.2 attempts per 40 minutes [PAGE 20], with systematic negative residuals (actual NBA 3PAp40 > predicted) when the player’s role expands. The veto is triggered: any bigman with high per-40 shooting metrics but low raw college volume requires manual scheme review before the M4 volume output is used.

Veto scenario 3 — Mechanical intervention veto.
Counterfactual: A prospect undergoes a documented shooting-mechanic overhaul between the draft and his rookie season (e.g., release-point correction, coaching change). M1 and M4 assume stationarity: pre-draft FT%, 2PJ%, and EB three-point estimate map linearly to post-draft outcomes [PAGE 16–20].
Verifiable check: Identify players with documented mechanic changes via scouting reports or film; compare M1 residuals (actual post-draft 3P% − predicted) against players without such changes.
Prediction: The intervention group will show positive residual bias exceeding +0.05 in post-draft 3P%, violating M1’s assumption that pre-draft metrics are sufficient [PAGE 16]. The model will systematically underestimate their improvement. The veto is triggered: M1 outputs for this subgroup must be discarded in favor of biomechanical re-assessment, because the counterfactual trajectory lies outside the training distribution’s stationarity regime.
</RLVR_COUNTERFACTUAL_VETOES>