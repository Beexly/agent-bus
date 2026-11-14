---
source: "2023 Analytics have some humility a statistical view of fourth-down decision making - Brill.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 45
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5308
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on the provided source text (a 45-page PDF about fourth-down decision making in football, by Brill and Wyner). The response must follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting lines whatsoever. The source text mentions point spread as a covariate for team quality, but I must be careful not to present it as a betting line or odds. I can mention "point spread" only as a team-quality proxy/covariate if necessary, but better to avoid framing it as betting. Actually the invariant says "Never mention spreads, totals, moneylines, or odds." So I should not mention "point spread" at all, or if I do, it might violate. The source text uses "posteam_spread" as a covariate. I can refer to it as "pre-game strength differential covariate" without using the word "spread" if possible, or just avoid it. Safer to avoid the word entirely.
- No toy equations. Must use formal LaTeX from the paper or derived rigorously.
- Page citations: use [PAGE N] markers. The source text has page numbers embedded (1, 2, ... 55). I should cite exact page markers.
- Verbatim quotes where appropriate.

Let's plan the content.

THINK_TRACE (>=400 words): Deep multi-hop derivation and gray-zone audit. Need to discuss:
- The statistical flaws: selection bias from not adjusting for team quality, overfitting of XGBoost, autocorrelation in WP models, effective sample size between plays (511,264) and games (4,101), uncertainty quantification via bootstrap voting.
- The decision procedure: bootstrap percentage as data reliability, confidence intervals on WP gain.
- Gray zones: catalytic prior hyperparameters (M, MU, U), bootstrap B=26 small for speed, limited data near extremes of WP (0 and 1), model uncertainty not captured (unobserved confounders like Tom Brady's sleep), conversion probability model delicate, state-space models vs statistical models.
- Multi-hop: how EP model errors propagate to WP model errors to fourth-down decisions; how autocorrelation reduces effective N; how catalytic prior smooths XGBoost but introduces synthetic data bias; how bootstrap percentage thresholds (85%) classify nebulous vs obvious decisions; how 24% of previously obvious decisions become nebulous.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
- Define EP(x) = sum_{e in outcomes} v_e * P(e|x) [PAGE 3-4]
- WP(x) = P(team with possession wins | x) [PAGE 11-12]
- Selection bias: E[EP_random] != E[EP_average] because good teams have more plays and score more [PAGE 5-6]
- Catalytic prior: generate X* by sampling columns with replacement + Gaussian jitter; y* from catalytic prior model; combine (X, X*), (y, y*) and fit complex model [PAGE 8-9]
- Hyperparameters M (synthetic count), MU (under U seconds), U (half seconds remaining threshold) [PAGE 10]
- Effective sample size: between 511,264 plays and 4,101 non-tied games [PAGE 12]
- Random walk football: X_{gn} = X_{g,n-1} +/- 1 with prob 0.5; touchdown at ±L; reset to midfield; fair coin tiebreak [PAGE 13, Appendix B.4 PAGE 43-44]
- Bootstrap CI: 2.5th and 97.5th quantiles of {WP_1(x), ..., WP_B(x)}, B=26 [PAGE 14]
- Bootstrap percentage: percent of bootstrapped models reporting decision d as optimal [PAGE 16-17]
- Nebulous threshold: bootstrap percentage > 85% = obvious; previously obvious if WP gain > 0.015 [PAGE 22]
- Decision values: V_punt = -V_1(y'), V_FG = p_make * V(make FG) + (1-p_make)*V(miss FG), V_Go = p_conv * V(convert) + (1-p_conv)*V(fail) [PAGE 46-47 Appendix C.1]
- Breakdown regimes: end-of-half EP convergence to 0, monotonicity violations in XGBoost classification at yardlines 92-94 [PAGE 7], WP CI width up to 12% near extremes [PAGE 15], model uncertainty vs sampling uncertainty [PAGE 24], small sample for conversion probability: only 8,258 fourth down attempts [PAGE 50]

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Carter & Machol (1971) expected points [PAGE 29]
- Romer (2006) instrumental variables regression, EP for fourth down [PAGE 1, 29]
- Burke (2009a) cubic spline regression on first downs [PAGE 4, 32]
- Yurko et al. (2018) multinomial logistic regression, nflWAR [PAGE 4, 29]
- Baldwin (2021a, 2021b) XGBoost EP/WP, nflFastR [PAGE 4, 10, 39]
- Huang et al. (2020, 2022) catalytic prior for linear models, extended here to ML [PAGE 8, 24]
- Candes et al. (2016) knockoffs, Ren et al. (2020) derandomized knockoffs [PAGE 37-38]
- Multi-week traps: EP model fit on hold-out 1999-2005 to avoid data bleed when crafting team quality metrics [PAGE 34]; epoch-based splitting to preserve autocorrelation [PAGE 10]; week-to-week team quality shrinkage gamma at start of season [PAGE 34-35]; coach conservatism over multiple seasons (2018-2022: 91% right on obvious kicks, 55% on obvious goes) [PAGE 22]

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- This is a theory-of-mind section about coaches and analysts.
- Coaches under pressure regress to conservative habits (punt/FG) even when data says go. [PAGE 22]
- Analysts overconfident in point estimates; counter-trap is to recommend decisions only when uncertainty low, defer to coach otherwise.
- Clock: end-of-half EP should converge to 0 far from endzone; XGBoost regression fails this, classification succeeds [PAGE 7]; late-game WP sensitivity increases then decreases near end? Actually footnote 19: uncertainty diminishes towards end of game [PAGE 12]. But end-of-half clock behavior creates singularity in EP modeling.
- Crisis habit regression: when WP CI is wide (e.g., [-3.7%, 4.5%]), analysts should not override coach; coach's private info (injured lineman) matters [PAGE 22-23].
- Counter-trap: analysts evaluating coaches only on low-uncertainty plays [PAGE 23].
- Clock: time remaining as covariate, two-minute indicator, half seconds remaining [PAGE 10, 29, 39].

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- The paper doesn't discuss weather or biomechanics much, but I need to address physical/biomechanical/weather vetoes.
- Physical layer: field position (yardline), conversion probability depends on yardline and play call, space constricted near endzones [PAGE 52].
- Biomechanical: individual player quality (kicker, punter, QB) modeled via exponentially decayed EPA/PYOE/FGPA [PAGE 34-35, 48-49]. Justin Tucker example: 70-yard FG epsilon > 0 vs average kicker 0 [PAGE 5]. Conversion probability depends on offensive/defensive play call and individual characteristics [PAGE 24, 52].
- Weather: roof type in Baldwin's EP features (retractable, dome, outdoors) [PAGE 4]; neutral weather conditions in thought experiment [PAGE 5]. The paper doesn't model weather explicitly in final models but acknowledges it as unobserved confounder (Tom Brady's sleep) [PAGE 24].
- Veto proof: if kicker quality is extreme (Tucker), FG value changes; if punter quality high, punt value changes; if offensive line injured (coach observation), not in data, vetoes statistical recommendation. Weather (roof type) was a feature in Baldwin but not necessarily in authors' final catalytic model? Actually Baldwin+ uses era, home, roof type? Let's check: Baldwin's original uses roof type. Baldwin+ (best XGBoost) uses yardline, half seconds remaining, half, score differential, point spread, timeouts, era. No roof type mentioned for Baldwin+. But Baldwin's original includes roof type. I can mention roof type as a physical covariate in Baldwin's model [PAGE 30, 40]. But the authors' team quality metrics don't include weather. I should note that weather/roof type is a physical covariate omitted from their final team-quality-adjusted EP, representing a model uncertainty/veto layer.
- The veto: if physical conditions (weather, roof, injuries, player-specific biomechanics) are outside training distribution, statistical EP/WP estimates are invalid; defer to coach.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. The user wants 3 verifiable counterfactual veto scenarios with predictions. I need to invent scenarios grounded in the paper that are verifiable (falsifiable).
Scenario 1: High-uncertainty fourth down (bootstrap percentage < 85%, CI includes zero) where coach goes against statistical recommendation. Prediction: outcome not significantly different from random; statistical model has no calibrated advantage.
Scenario 2: End-of-half EP singularity: XGBoost regression EP doesn't converge to 0 far from endzone with little time left. Prediction: on fourth down with < 2 minutes left in half and yardline > 90, statistical EP model recommends FG but true EP ~0; veto the model, go for it or punt based on WP.
Scenario 3: Extreme kicker quality (e.g., Tucker) attempting 70-yard FG. The paper says average kicker 0 probability, Tucker epsilon > 0, randomly drawn kicker positive. Prediction: a statistical EP model without kicker quality will underestimate FG value for elite kickers and overestimate for poor kickers; veto team-average EP, use kicker-specific model.
Maybe a fourth: Autocorrelation/Veto on standard bootstrap CIs too narrow (73% coverage). Prediction: standard bootstrap will claim obvious decision on a play where randomized cluster bootstrap says nebulous; actual coach outcome shows no persistent edge.

I need exactly 3 scenarios + predictions.

Word count: Must be >= 1,000 words total across sections. Each section should be substantial. THINK_TRACE >= 400 words.

Format: Exact XML section tags. No markdown outside? The user didn't forbid markdown but wants XML sections. I should output only the XML sections or can I have text outside? The instruction says "across these exact XML sections". So I should output those sections, possibly wrapped in a root or just the sections. I'll output just the six sections in order.

Citations: Use [PAGE N] format. The source text pages are numbered 1-55 at bottom/top. I'll reference them.

No betting lines: Avoid "spread", "total", "moneyline", "odds". I will not use these words. When referring to the covariate, I will say "pre-game team strength differential" or "point differential covariate" but avoid the word spread? The invariant says never mention spreads. So I cannot write "point spread". I will write "pre-game strength differential" or "team quality differential". I must scan for the word "spread" and avoid it. The source uses "posteam_spread". I will refer to it as "the pre-game strength differential covariate" without quoting the variable name if it contains "spread". Or I can say "the authors' team-quality covariate (denoted posteam_spread in the source)"—but that contains the word spread. Better to paraphrase: "the pre-game strength differential used as a team-quality proxy."

Also avoid "odds". Avoid "likely" in betting sense? "Probability" is fine. "Likely" is okay in general English but might be borderline. I'll use "probability" and "chance" but not "odds".

No toy equations: I will use LaTeX from the paper: EP formula, WP definition, catalytic prior steps, bootstrap CI quantiles, random walk equations, decision values. All formal.

Let's draft each section carefully.

THINK_TRACE:
Start with deep derivation. Mention multi-hop chain:
1. EP is a regression/classification over 7 outcomes.
2. Statistical EP models suffer selection bias because they condition on randomly drawn plays, not average teams. Good teams have more plays and score more [PAGE 6].
3. To fix, include team quality covariates. But this adds dimensions and interactions, worsening overfitting in XGBoost [PAGE 8-9].
4. Catalytic prior: synthetic data from simpler MLR/linear model shrinks XGBoost [PAGE 8-9].
5. WP is correct objective, not EP [PAGE 11, Figure 4 example: down by 6, 1 minute left, FG gives more EP but guarantees loss].
6. WP models suffer autocorrelation: every game one winner, effective N between 511,264 plays and 4,101 games [PAGE 12].
7. Random walk sim shows MAE < 2% but CIs need width 8% for 90% coverage [PAGE 13-15].
8. Bootstrap voting: B=26, randomized cluster bootstrap, bootstrap percentage [PAGE 16-17].
9. Decision changes: example play 1 (AFC Championship) CI [-3.7%, 4.5%], about half models say Go [PAGE 18]. Example play 5 (Raiders): 100% models say Go, CI [0.30%, 5.23%] [PAGE 20].
10. 24% of previously obvious decisions become nebulous [PAGE 22].
Gray zones: catalytic hyperparameters M=3M for EP, M=25,000 for WP; MU=100 under U=30 seconds [PAGE 10, 42]; B=26 chosen for speed not statistical optimality [PAGE 14, 16]; model uncertainty not captured (unobserved confounders like sleep) [PAGE 24]; conversion probability only 8,258 attempts [PAGE 50]; coach private info (injured lineman) not in data [PAGE 22-23].
Word count target: ~500-600 words.

SOURCE_OPERATORS_AND_EQUATIONS:
List equations with page citations.
- EP definition: \mathrm{EP}(\mathbf{x}) = \sum_{e \in \mathcal{E}} v_e \, \Pr(e \mid \mathbf{x}), \mathcal{E} = \{7,3,2,0,-2,-3,-7\} [PAGE 3-4]
- WP definition: \mathrm{WP}(\mathbf{x}) = \Pr(Y=1 \mid \mathbf{x}), Y \in \{0,1\} [PAGE 11-12]
- Selection bias: \mathbb{E}[\mathrm{EP}_{\text{random}}] \neq \mathbb{E}[\mathrm{EP}_{\text{average}}] \text{ ceteris paribus} [PAGE 5-6]
- Catalytic prior: (\mathbf{X}^*, \mathbf{y}^*) generated by column resampling + Gaussian jitter; \mathbf{y}^* \sim \hat{f}_{\text{catalytic}}(\mathbf{X}^*); fit \hat{f}_{\text{complex}} on \{(\mathbf{X},\mathbf{y}),(\mathbf{X}^*,\mathbf{y}^*)\} [PAGE 8-9]
- EP hyperparameters: M=3,000,000 synthetic outcomes; MU=100 under U=30 half-seconds [PAGE 10]
- Effective sample size: 4,101 \le N_{\text{eff}} \le 511,264 [PAGE 12]
- Random walk: X_{gn} = X_{g,n-1} + \xi_{gn}, \xi_{gn} \in \{-1,+1\}, p=0.5; touchdown at X = \pm L; reset to midfield; tiebreak fair coin [PAGE 13, 43-44]
- Bootstrap CI: [q_{0.025}, q_{0.975}] of \{\widehat{\mathrm{WP}}_b(\mathbf{x})\}_{b=1}^B, B=26 [PAGE 14]
- Bootstrap percentage: \beta_d(\mathbf{x}) = \frac{1}{B}\sum_{b=1}^B \mathbb{I}\{d = \arg\max_{d' \in \{\text{Go,FG,Punt}\}} \widehat{\mathrm{WP}}_b(d')\}; obvious if \beta_d > 0.85 [PAGE 16-17, 22]
- Nebulous threshold legacy: \Delta \mathrm{WP} > 0.015 [PAGE 22]
- Decision values (Appendix C.1): V_{\text{punt}} = -V_1(y'), V_{\text{FG}} = p_{\text{make}} V(\text{make FG}) + (1-p_{\text{make}}) V(\text{miss FG}), V_{\text{Go}} = p_{\text{conv}} V(\text{convert}) + (1-p_{\text{conv}}) V(\text{fail}) [PAGE 46-47]
- Breakdown: end-of-half EP \to 0 far from endzone; XGBoost regression violates [PAGE 7]; monotonicity violation yardlines 92-94 in classification [PAGE 7]; WP CI length up to 12% near extremes [PAGE 15]; model uncertainty vs sampling uncertainty [PAGE 24].
Units: probability (dimensionless [0,1]), expected points (points), time (seconds/half-seconds), yardline (yards), CI width (percentage points of WP).

RETROCAUSAL_GENEALOGY:
- Carter & Machol (1971) first EP [PAGE 29].
- Romer (2006) IV regression, EP for fourth down [PAGE 1, 29].
- Burke (2009a) cubic spline yardline, first downs only [PAGE 4, 32].
- Yurko et al. (2018) MLR, transformations of yardline, down, yards to go, time [PAGE 4, 29].
- Baldwin (2021a,b) XGBoost EP/WP, nflFastR [PAGE 4, 10, 30, 39].
- Huang et al. (2020, 2022) catalytic prior for GLMs, extended to tree ML here [PAGE 8, 24].
- Candes et al. (2016) knockoffs; Ren et al. (2020) derandomized knockoffs adapted to autocorrelated EPA vector [PAGE 37-38].
- Multi-week traps: hold-out 1999-2005 for EP^(0) to prevent data bleed in team quality [PAGE 34]; epoch-level train/test split [PAGE 10]; seasonal shrinkage gamma at season start (QB 3/4, non-QB offense 1/2, defense 1/3) [PAGE 34-35]; coach conservatism measured over 2018-2022 (91% obvious kicks correct, 55% obvious goes) [PAGE 22]; recursive week-to-week quality updates via exponential decay alpha=0.995 [PAGE 34].

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: coaches under pressure revert to punt/FG conservatism. Data: coaches correct on 91% of obvious kicks but only 55% of obvious goes [PAGE 22].
- Analyst overconfidence: treating WP point estimates as known quantities; counter-trap is to defer to coach when bootstrap percentage low or CI straddles zero [PAGE 16-17, 22-23].
- Private information: coach notices injured lineman not in data; statistical model cannot condition on it [PAGE 22-23].
- Clock: end-of-half singularity where EP \to 0 far from endzone; time remaining and two-minute indicator are critical covariates [PAGE 7, 29, 39]; uncertainty diminishes toward game end (footnote 19) [PAGE 12].
- Recursive ToM: analyst models coach, coach models analyst's public recommendations, both update beliefs week-to-week via team quality shrinkage; when model says "nebulous," the optimal ToM move is to respect coach's private information set rather than override.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: yardline, roof type (Baldwin's original features: retractable/dome/outdoors) [PAGE 30, 40]; endzone space constraints affect conversion probability [PAGE 52].
- Biomechanical: kicker quality (Tucker epsilon > 0 for 70-yard FG vs average kicker 0) [PAGE 5]; punter quality (Hekker highest) [PAGE 48]; QB quality largest impact on conversion probability [PAGE 51-52]; exponential decay alpha=0.995 for player quality [PAGE 34-35, 48-49].
- Weather: neutral weather in thought experiment [PAGE 5]; unobserved confounders like sleep/weather not in statistical model [PAGE 24]; roof type as physical covariate omitted from final catalytic EP? Actually Baldwin+ doesn't list roof type; Baldwin original does. I'll say weather/roof was a feature in prior open-source models but not explicitly in the authors' final team-quality EP, representing an unmodeled physical veto [PAGE 30, 40, 24].
- Veto rule: if physical condition outside training support (e.g., extreme weather, elite kicker long FG, injured starter), statistical EP/WP lacks external validity; defer to coach. The model itself admits it cannot capture unobserved confounders [PAGE 24].

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios + predictions.
Scenario 1: Fourth-and-1 at own 40, tied game, 3rd quarter. Statistical model says Go with ΔWP = +0.02 but bootstrap percentage = 60% (nebulous). Coach punts. Veto: do not second-guess coach. Prediction: subsequent win rate for the punting team will not be statistically distinguishable from the going-for-it counterfactual because the decision CI [-0.01, +0.05] includes null; the model cannot reject the coach's choice.
Scenario 2: End of 2nd quarter, 30 seconds left, offense at own 95-yardline, 4th-and-5. XGBoost regression EP model fails to converge to 0 far from endzone [PAGE 7]; it assigns positive EP and recommends FG. Veto: physical clock singularity makes EP meaningless; true EP \approx 0 because no score before half. Prediction: any field goal attempt here yields expected points near zero; the model's positive EP recommendation is falsified by clock boundary condition.
Scenario 3: Elite kicker (top decile quality) attempting 65-yard FG in neutral conditions. Team-average EP model (no kicker quality) assigns near-zero make probability; kicker-adjusted model assigns epsilon > 0 [PAGE 5]. Veto: team-average EP is invalid for extreme player quality. Prediction: the kicker's actual make probability will exceed the team-average model's prediction by a margin statistically distinguishable from zero; using unadjusted EP will systematically undervalue FG for elite kickers and overvalue it for weak kickers.

Need to ensure no "odds", "spread", etc.

Word count check: I need to ensure total > 1000 words. I'll write generously.

Let's write.

Be careful with [PAGE N] markers. The source text pages: I see page numbers at top/bottom: 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55. I'll use these.

Double-check invariant: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." I must not invent equations. Use only those from source or direct logical consequences. All equations I listed are from source. Good.

Double-check invariant: "ZERO BETTING LINES". I will not use spread, total, moneyline, odds. I might use "probability" which is fine. I will not say "likely" in betting context but it's okay generally. I'll avoid it to be safe? "Likely" is not a betting line per se, but I'll minimize.

Now produce final output with the six XML tags. No extra text outside. Ensure each tag is properly closed. Use LaTeX.

Let's draft with attention to word count.

THINK_TRACE: I'll write ~600 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~400 words.
RETROCAUSAL_GENEALOGY: ~300 words.
RECURSIVE_THEORY_OF_MIND: ~300 words.
CROSS_LAYER_VETO_ADJUDICATION: ~300 words.
RLVR_COUNTERFACTUAL_VETOES: ~300 words.

Total ~2200 words. Good.

Let's write carefully.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s central statistical chain is a multi-hop cascade of identifiability failures. Expected points (EP) is defined as the weighted sum over seven possible next-scoring outcomes, \mathrm{EP}(\mathbf{x}) = \sum_{e \in \mathcal{E}} v_e \Pr(e \mid \mathbf{x}), where \mathcal{E} = \{7,3,2,0,-2,-3,-7\} [PAGE 3-4]. Open-source EP models condition on randomly drawn plays rather than average teams, which induces selection bias because good teams contribute more plays and score more points conditional on field position [PAGE 5-6]. The consequence is not merely academic: an “average” kicker has zero probability of a 70-yard field goal, Justin Tucker has \varepsilon > 0, and a randomly drawn kicker inherits a positive probability simply because Tucker can be drawn [PAGE 5]. Therefore EP for a randomly drawn team is not EP for the 2022 Philadelphia Eagles, and any fourth-down recommendation built on that biased value function is structurally mis-specified.

Correcting for team quality adds covariates—score differential, offensive and defensive quality metrics—which expands the feature space and exacerbates overfitting in flexible learners such as XGBoost [PAGE 8-9]. The authors counter this with a catalytic prior: fit a simpler multinomial logistic regression to observed plays (\mathbf{X},\mathbf{y}), generate synthetic states \mathbf{X}^* by column resampling with Gaussian jitter, impute synthetic responses \mathbf{y}^* from the simpler model, and fit the complex XGBoost on the pooled data \{(\mathbf{X},\mathbf{y}),(\mathbf{X}^*,\mathbf{y}^*)\} [PAGE 8-9]. For EP the synthetic budget is M = 3,000,000 outcomes, with only MU = 100 draws under U = 30 half-seconds remaining because XGBoost already fits end-of-half behavior better than the smoother prior [PAGE 10].

Win probability (WP) is the correct objective because EP ignores variance; a field goal can maximize expected points while guaranteeing loss when trailing by six with one minute left [PAGE 11, Figure 4]. WP models inherit the same autocorrelation pathology: every game has exactly one winner, so all plays within a game share the same binary draw, collapsing the effective sample size somewhere between 511,264 plays and 4,101 non-tied games [PAGE 12]. In a calibrated random-walk simulation, XGBoost recovers the general WP trend with mean absolute error below 2% WP, but achieving 90% coverage requires bootstrap confidence intervals averaging 8% WP wide, and up to 12% near the extremes [PAGE 13-15].

The gray zones are substantial. The bootstrap uses only B = 26 resamples, chosen for in-game speed rather than statistical saturation [PAGE 14, 16]. Bootstrap percentage—the fraction of resamples selecting decision d—is the reliability metric; a decision is “obvious” only if this percentage exceeds 85% [PAGE 16-17, 22]. Under that rule, 24% of decisions previously deemed obvious by win-probability gain alone become nebulous [PAGE 22]. The catalytic prior itself introduces synthetic-data bias whose magnitude is not bounded by the paper, and model uncertainty from unobserved confounders (e.g., a quarterback’s sleep, an injured offensive line visible to the coach but absent from play-by-play) is explicitly acknowledged as uncaptured [PAGE 22-24]. Conversion probability rests on only 8,258 fourth-down attempts, and the model assumes a conversion gains exactly the yards-to-go and a failure turns the ball over at the initial spot—strong simplifications that break down near the endzones where space is constricted [PAGE 47, 50-52]. Thus the decision procedure does not eliminate uncertainty; it makes the opacity legible, and in many game-states the correct inference is to defer to the coach’s private information set.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Expected points operator: \mathrm{EP}(\mathbf{x}) = \sum_{e \in \{7,3,2,0,-2,-3,-7\}} v_e \, \Pr(e \mid \mathbf{x}), with net points relative to the team in possession [PAGE 3-4].

Win probability operator: \mathrm{WP}(\mathbf{x}) = \Pr(Y=1 \mid \mathbf{x}), Y \in \{0,1\}, where Y indicates whether the team with possession wins [PAGE 11-12].

Selection-bias identity: \mathbb{E}[\mathrm{EP}_{\text{random}}] \neq \mathbb{E}[\mathrm{EP}_{\text{average}}] \, \text{ceteris paribus}, because good teams appear more frequently in play-by-play data and score more points conditional on yardline [PAGE 5-6].

Catalytic prior algorithm: (1) fit smoother model \hat{f}_{\text{cat}} on observed (\mathbf{X},\mathbf{y}); (2) synthesize \mathbf{X}^* by resampling each covariate column with replacement and jittering continuous variables with Gaussian noise; (3) impute \mathbf{y}^* = \hat{f}_{\text{cat}}(\mathbf{X}^*); (4) fit complex model \hat{f}_{\text{complex}} on pooled data [PAGE 8-9].

EP catalytic hyperparameters: M = 3,000,000 synthetic outcomes; MU = 100 synthetic draws under U = 30 half-seconds remaining, reflecting reduced shrinkage at end of half [PAGE 10].

Effective sample size for WP: 4,101 \le N_{\text{eff}} \le 511,264, bounded by number of non-tied games and number of plays [PAGE 12].

Random-walk football specification: X_{gn} = X_{g,n-1} + \xi_{gn}, \xi_{gn} \sim \text{Uniform}\{-1,+1\}; touchdown at X = \pm L resets to midfield; game ends after N plays with fair-coin tiebreak [PAGE 13, Appendix B.4 at PAGE 43-44].

Bootstrap confidence interval for WP at state \mathbf{x}: [q_{0.025}, q_{0.975}] of \{ \widehat{\mathrm{WP}}_b(\mathbf{x}) \}_{b=1}^{B}, B = 26 [PAGE 14].

Bootstrap percentage (decision reliability): \beta_d(\mathbf{x}) = \frac{1}{B}\sum_{b=1}^{B} \mathbb{I}\left\{ d = \arg\max_{d' \in \{\text{Go, FG, Punt}\}} \widehat{\mathrm{WP}}_b(d') \right\} [PAGE 16-17].

Obviousness thresholds: legacy obvious if estimated WP gain \Delta \mathrm{WP} > 0.015; new obvious if \beta_d > 0.85 [PAGE 22].

Fourth-down value operators (Appendix C.1): V_{\text{punt}} = -V_1(y'), \quad V_{\text{FG}} = p_{\text{make}} V(\text{make FG}) + (1-p_{\text{make}}) V(\text{miss FG}), \quad V_{\text{Go}} = p_{\text{conv}} V(\text{convert}) + (1-p_{\text{conv}}) V(\text{fail}), where V_1 is the value of a first down for the possessing team [PAGE 46-47].

Breakdown and singularity regimes: EP must converge to 0 far from the opponent’s endzone as half-seconds remaining \to 0; XGBoost regression violates this boundary condition [PAGE 7]. XGBoost classification is non-monotonic in yardline at yardlines 92-94 despite EP requiring monotonicity [PAGE 7]. WP confidence interval length reaches at most 12 percentage points near true WP extremes and shrinks toward the boundaries [PAGE 15]. Model uncertainty (bias from misspecification and unobserved confounders) is not quantified by the bootstrap, which captures sampling variance only [PAGE 24]. All probabilities are dimensionless on [0,1]; EP is in points; time is in seconds or half-seconds; yardline is in yards.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The methodological lineage begins with Carter and Machol (1971), who originated expected points, followed by Carroll et al. (1989) with the first linear EP model [PAGE 29]. Romer (2006) introduced instrumental-variables regression and was the first to use EP for fourth-down decision-making, averaging across all downs [PAGE 1, 29]. Burke (2009a) restricted estimation to first-down plays and modeled EP as a cubic spline in yardline, a choice later criticized for discarding second- and fourth-quarter plays and for being unable to handle score differential and time remaining jointly [PAGE 4, 32]. Yurko et al. (2018) moved to multinomial logistic regression over seven next-score outcomes, using transformations of yardline, down, yards to go, and time remaining [PAGE 4, 29]. Baldwin (2021a, 2021b) brought XGBoost to both EP and WP, expanding the feature set to include home indicator, roof type, era, and timeouts [PAGE 4, 30, 39].

The catalytic prior, originally developed for generalized linear models by Huang et al. (2020, 2022), is extended here for the first time to a tree-based machine-learning context [PAGE 8, 24]. Knockoff inference, from Candes et al. (2016) and derandomized by Ren et al. (2020), is adapted to autocorrelated EPA vectors by retaining every fifth observation to induce approximate independence [PAGE 37-38].

Multi-week traps are embedded in the data engineering. To avoid data bleed when constructing team-quality metrics, the authors fit a baseline EP model EP^{(0)} on hold-out data from 1999-2005, then derive exponentially decayed quarterback, offensive, and defensive quality scores using \alpha = 0.995 per prior play, with start-of-season shrinkage factors \gamma (3/4 for quarterback quality, 1/2 for non-quarterback offense, 1/3 for each defensive metric) [PAGE 34-35]. Train-test splits occur at the epoch level for EP and the game level for WP to preserve autocorrelation structure [PAGE 10, 42]. Over the multi-week horizon 2018-2022, coaches made the statistically correct choice on 91% of obvious kicking decisions but only 55% of obvious going-for-it decisions, revealing a persistent conservative habit that recurs week after week despite analytical pressure [PAGE 22].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the coach’s tendency, under high-leverage fourth-down pressure, to revert to punt or field-goal conservatism even when statistical point estimates favor going for it [PAGE 22]. The counter-trap is the analyst’s overconfidence in treating win-probability point estimates as known quantities; the paper’s corrective is to evaluate coaches only on plays where uncertainty is low, and to leave high-uncertainty decisions to the coach’s discretion [PAGE 22-23]. This creates a recursive theory-of-mind loop: the analyst models the coach’s decision rule, the coach knows the analyst’s public recommendations are uncertain, and both update their beliefs week-to-week through the same team-quality shrinkage machinery (\alpha = 0.995 decay, seasonal \gamma shrinkage) [PAGE 34-35].

The clock introduces a hard singularity. Near the end of a half, expected points must converge to zero far from the opponent’s endzone because neither team is likely to score before time expires; XGBoost regression fails this boundary condition while XGBoost classification satisfies it by explicitly modeling the probability of no next score [PAGE 7, footnote 11 at PAGE 7]. Time remaining, half-seconds remaining, and the under-two-minutes indicator are therefore non-negotiable covariates [PAGE 10, 29, 39]. Footnote 19 notes that uncertainty in the fourth-down decision diminishes toward the end of the game, but this does not rescue end-of-half EP models that violate the zero-point clock boundary [PAGE 12, 7].

When the bootstrap percentage is split—e.g., about half of resamples prefer Go over FG with a confidence interval of [-3.7%, 4.5%]—the recursive move is not to override the coach but to acknowledge that the coach’s private information (an injured lineman, a specific defensive substitution) occupies an information set the statistical model cannot access [PAGE 18, 22-23]. The optimal recursive response is epistemic humility: recommend deference when \beta_d < 0.85 or when the WP-gain interval straddles zero, and reserve analyst intervention for low-uncertainty states where the decision is robust across bootstrap resamples.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: field position (yardline) and stadium roof type (retractable, dome, outdoors) are physical covariates in Baldwin’s original open-source EP feature set, though the authors’ final catalytic EP specification emphasizes yardline, time remaining, score differential, and team-quality proxies [PAGE 30, 40]. Near either endzone, space is constricted and conversion probability spikes for short yardage (notably one yard), a geometric constraint the model acknowledges but does not fully parameterize continuously [PAGE 52].

Biomechanical layer: player-specific quality is modeled via exponentially decayed play-level metrics. Kicker quality separates Justin Tucker—assigned \varepsilon > 0 probability of a 70-yard field goal—from an average kicker assigned zero, and from a randomly drawn kicker who inherits positive probability through the possibility of drawing Tucker [PAGE 5]. Punter quality (Johnny Hekker highest) shifts expected next yardline after a punt [PAGE 48]. Quarterback quality has the largest impact on fourth-down conversion probability, while other team-quality metrics have minimal impact [PAGE 51-52]. All player-quality scores use \alpha = 0.995 exponential decay and are standardized to mean zero, standard deviation 1/2 [PAGE 34-35, 48-49].

Weather layer: the thought experiment explicitly neutralizes weather to isolate kicker ability, indicating weather is treated as a conditioning context rather than a modeled covariate in the authors’ final framework [PAGE 5]. The paper concedes unobserved confounders—such as a quarterback’s sleep or game-day weather—are not captured by statistical win-probability models, constituting model uncertainty beyond the bootstrap’s sampling-variance scope [PAGE 24].

Veto proof: any game-state falling outside the training support of these physical and biomechanical layers—extreme weather conditions, an elite kicker attempting a historically long field goal, a punter with outlier quality, or an injured starter invisible to play-by-play data—invalidates the external validity of the EP/WP estimate. In those states the model must issue a structural veto and cede the decision to the on-field expert, whose information set dominates the statistical point estimate [PAGE 22-24].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Fourth-and-1 at the offense’s own 40-yard line, tied game, third quarter. The win-probability point estimate favors Go by \Delta \mathrm{WP} = +0.02, but bootstrap percentage is 60% and the confidence interval for the gain is [-0.01, +0.05], straddling zero. The statistical model therefore issues a veto: the decision is nebulous and the coach’s punt should not be second-guessed. Verifiable prediction: the ex-post win rate of the punting team will not be statistically distinguishable from the counterfactual going-for-it branch, because the model cannot reject the null that the two decisions have equal win probability.

Scenario 2: End of the second quarter, 30 seconds remaining, offense at its own 95-yard line, fourth-and-5. XGBoost regression EP fails the clock boundary condition—it does not converge to zero far from the endzone as time expires—and may assign positive expected points to a field goal [PAGE 7]. The clock singularity vetoes the EP-based recommendation; true expected points are approximately zero because no score is probable before halftime. Verifiable prediction: any field goal attempt in this state yields realized expected points indistinguishable from zero, falsifying the regression model’s positive EP assignment.

Scenario 3: Elite kicker in the top decile of kicker quality attempts a 65-yard field goal in neutral conditions. A team-average EP model without kicker-quality adjustment assigns near-zero make probability, whereas the kicker-adjusted model assigns \varepsilon > 0 [PAGE 5]. The unadjusted team-average EP model is vetoed for this player-quality extreme. Verifiable prediction: the kicker’s observed make probability will exceed the unadjusted model’s prediction by a margin statistically distinguishable from zero; consequently, unadjusted EP will systematically undervalue field goals for elite kickers and overvalue them for weak kickers across a validation sample of long-distance attempts.
</RLVR_COUNTERFACTUAL_VETOES>