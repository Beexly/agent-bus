---
source: "2025 - One x G model to rule them all Robert Bajons Tobias Harringer - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Hudl StatsBomb/Research Competitions/2025"
pages: 22
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3599
---

<NATIVE_REASONING>
The user wants a deep analysis of the provided research paper about xG models. The output must follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations. Use real formalism from the paper.

I need to write at least 1000 words total across sections. Each section must be present. I should cite page markers [PAGE N] based on the text (the PDF page numbers seem to be 1-25, with content starting at page 1). The markdown shows **1**, **2**, etc. I'll cite as [PAGE 1], [PAGE 3], etc.

Structure:
- THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Discuss the paper's claims, the Poisson-Binomial assumption, feature sufficiency, conditional independence, GAX formula, etc. Gray zones: rebound definition uncertainty, game state capping, league-specific stacking train/test leakage, small sample bias.
- SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. xG_i, Poisson-Binomial G ~ Poisson-Binomial(xG_1,...,xG_n), GAX formula avg over category, defender Gaussian p_i = N(p_i, sigma_i^2 I) with sigma_i = sigma_0(1+alpha d_i), weight w_i = max(1-beta d_i, 0), integration over subfields, XGBoost logloss minimization, early stopping, GCM test conditional independence Y ⟂ X | Z, bivariate Poisson for team strengths, multinomial regression for match outcome, stacking via logistic regression on logit transforms, residualized GAX. Units: probability [0,1], logloss dimensionless nats, AUC dimensionless, distance in meters (pitch coords), time in minutes.
- RETROCAUSAL_GENEALOGY: Historical lineage: Reep & Pollard 1997, Robberechts & Davis 2020, Vatvani 2022, ElHabr 2023a/b, Hewitt & Karakus 2023, Mead et al. 2023, Shah & Peters 2020 GCM, Karlis & Ntzoufras 2003 bivariate Poisson, Litwitz et al. 2024 rebounds, Baron et al. 2024, Davis & Robberechts 2024, Bajons & Kook 2025 rGAX, Cinelli et al. 2024 bad controls. Multi-week traps: small league data N<10000 overfitting, feature selection via GCM on same data used for evaluation (double-dipping risk), stacking meta-learner trained on other leagues but applied to target (distribution shift), game state late-game pressure confounding with fatigue (not modeled physically).
- RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but relates to how analysts/models regress under pressure. Analyst habit: default to global xG (H-SB) even when biased. Counter-trap: adding team strengths for match prediction but not player eval (bad control). Clock: time intervals 0-45, 45-75, 75+; late game neutral state underperformance; rebound within 3 seconds. Also model recursion: using xG to predict match outcomes using xG features (average xG for/against last 5 matches). Crisis habit regression: when trailing late, shooters underperform; model without game state feature misses this. Counter-trap: including attacking strength in player evaluation obscures individual contribution (Messi rGAX flips sign).
- CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. The paper explicitly says home/away and physical metrics (sprint distance, total running distance over 15-75 min) had no meaningful effect on GAX [PAGE 8]. No weather data in features. Biomechanical: foot used (strong/weak/other) is included. Veto: physical fatigue metrics vetoed as non-predictive; weather absent so cannot veto; strong/weak foot is a biomechanical veto that passes (significant GAX difference). Distance to goalkeeper, angle, etc. are spatial/biomechanical.
- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios + predictions.
  1. Rebound feature omission: If a model trained without rebound indicator is deployed on leagues with high pressing/chaos, systematic overperformance bias remains; prediction: avg GAX for rebound shots > +0.008 vs non-rebound ~0.000 [TABLE 6, PAGE 13].
  2. Game state exclusion in late minutes: Model omitting game_state and time_interval interaction will mis-calibrate in 75+ min when trailing/leading; prediction: GAX slope vs game state steepens after 75 min [PAGE 6, FIGURE 4].
  3. Attacking strength as control in player eval: Including attacking team strength in rGAX for a star forward creates bad control; prediction: rGAX for top attacker becomes negative or non-significant while GAX positive (Messi case) [PAGE 18, FIGURE 12D].

Need to ensure no betting lines. The paper mentions match outcome prediction (home win/draw/away win) but that's not betting lines; it's classification. I must avoid spreads/totals/moneylines/odds. I can mention probabilities of outcomes but not odds.

Word count: Need >=1000 words across sections. I'll aim for ~1500+ words.

Citations: Use [PAGE N] exactly. Verbatim quotes where helpful. The source text has page markers **1** through **27**. I will reference them.

Let's draft carefully.

THINK_TRACE: Must be >=400 words. I'll write a thorough audit.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Need to be careful not to invent toy equations. Use equations actually in or directly implied by the paper.

Equation list:
- Shot outcome y_i ∈ {0,1}. xG_i = P(y_i=1 | features).
- Naïve baseline p0 = 0.096 [PAGE 3].
- Accuracy, AUC, logloss: L = -1/n Σ [y_i log(xG_i) + (1-y_i) log(1-xG_i)].
- GAX_c = (1/n_c) Σ_{i∈c} (y_i - xG_i).
- Poisson-Binomial: G = Σ y_i ~ Poisson-Binomial(xG_1,...,xG_n).
- Defender representation: p_i = (x_i,y_i); d_i = ||p_i - p_shot||; sigma_i = sigma_0 (1 + alpha d_i); Gaussian N(p_i, sigma_i^2 I_2). Mass in subfield s: g_i(s) = ∫_s N(z; p_i, sigma_i^2 I) dz. Weighted mass: M(A) = Σ_i w_i Σ_{s∈A} g_i(s), w_i = max(1 - beta d_i, 0). Chosen sigma_0=0.2, alpha=0.03, beta=0.05 [PAGE 9].
- XGBoost: minimize binary cross-entropy via gradient boosting; early stopping 20 rounds [PAGE 10].
- GCM test: tests H0: Y ⟂ X | Z [PAGE 15].
- Bivariate Poisson for team strengths: Karlis & Ntzoufras 2003 [PAGE 14].
- Multinomial regression for match outcome: P(outcome | xG_for_home, xG_against_home, xG_for_away, xG_against_away) [PAGE 16].
- Stacking: logit(p_stack) = logistic regression on logit(p_HSB), logit(p_own) [PAGE 21].
- rGAX: residualized GAX from Bajons & Kook 2025 [PAGE 17].

Units: probabilities dimensionless; logloss in nats (natural log); distances in meters (pitch coordinates normalized? StatsBomb pitch is 120x80 typically, but units not specified; I'll say pitch coordinate units). Time in minutes.

RETROCAUSAL_GENEALOGY: Lineage and traps.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression etc.

CROSS_LAYER_VETO_ADJUDICATION: Veto proof.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

I must not mention odds/spreads/totals/moneylines. I can mention classification probabilities for match outcomes but phrase carefully.

Let's write.

Ensure word count. I'll write generously.

Check for any accidental betting language: "predicting match results", "simulating league outcomes", "predict the outcome of a match (home win/draw/away win)" - this is fine, not betting lines. Avoid "odds", "spread", "total", "moneyline".

Let's compose the final output.
</NATIVE_REASONING>

<THINK_TRACE>
The paper makes a multi-layered claim: Hudl-Statsbomb’s (H-SB) global xG model is strong but not universally optimal, and a purpose-built variant can improve on it across predictive accuracy, calibration, and the Poisson-Binomial feature-sufficiency assumption. My derivation proceeds in four hops. Hop 1 is the statistical null. Every shot i yields a binary outcome y_i ∈ {0,1} and a predicted probability xG_i. Under conditional independence and feature sufficiency, the season total G = Σ y_i follows a Poisson-Binomial distribution parameterized by the vector of predicted probabilities [PAGE 4]. The authors show H-SB’s observed total lies to the right of the 95% prediction interval [PAGE 5], which is a formal rejection of feature sufficiency: the feature set omits variables that systematically shift goal probability. Hop 2 identifies the omitted variables through category-wise Goals Above Expectation (GAX), defined as avg. GAX_c = (1/n_c) Σ_{i∈c} (y_i − xG_i) [PAGE 5]. The paper finds significant non-zero GAX for game state, dominant foot, and rebound situations [PAGES 6–8], which constitutes a bias audit: if xG_i were the true pre-shot probability, conditional on the model’s features, these category residuals should average to zero. Hop 3 is the model construction. They adopt XGBoost minimizing binary cross-entropy with 10-fold cross-fitting and early stopping [PAGE 10], augmenting standard spatial features with the bias-correcting covariates and a smoothed defender-pressure representation: defender i at p_i is modeled as a bivariate Gaussian N(p_i, σ_i²I₂) with σ_i = σ₀(1 + α d_i), d_i = ||p_i − p_shot||, and influence weight w_i = max(1 − β d_i, 0), with tuned constants σ₀ = 0.2, α = 0.03, β = 0.05 [PAGE 9]. This smooths the integer “defender-in-area” step function that causes unrealistic xG jumps under small positional perturbations [PAGE 9]. Hop 4 is the use-case fork. For match prediction, adding team strengths (attacking/defensive via bivariate Poisson MLE) improves AUC and logloss and passes a Generalised Covariance Measure (GCM) conditional-independence test [PAGES 14–16]. For player evaluation, however, attacking strength is a “bad control” because elite attackers mechanically inflate their own team’s attacking strength, inducing circularity; residualized GAX (rGAX) for Lionel Messi flips sign when attacking strength is included [PAGES 17–18]. For small-league regimes (N < 10,000), a GCM-guided forward stagewise selection reduces the feature set from 29 to 19 and improves generalization in four of five leagues, with the exception of the Championship, which has the largest sample [PAGES 19–20]. Finally, stacking the global H-SB model with the league-specific model via logistic regression on logit-transformed probabilities outperforms H-SB alone in all five competition leagues [PAGES 21–22].

Gray-zone audit: (1) The rebound definition is probabilistic rather than physically observed: a shot is labeled a rebound if it occurs within 3 seconds of a prior shot in the same possession sequence [PAGE 2], which cannot identify true rebounds with certainty and may mislabel new build-up play. (2) Game state is capped at ±3 [PAGE 6], discarding information in extreme blowouts and potentially attenuating the bias estimate in those rare states. (3) Physical metrics over the preceding 15–75 minutes (sprint distance, total running distance) were tested and found meaningless [PAGE 8], but no weather, pitch condition, or goalkeeper-specific fatigue layer exists in the feature set, so biomechanical vetoes cannot be fully adjudicated. (4) The stacking meta-learner for league j is trained on all other leagues [PAGE 21], which introduces a distribution-shift risk: if league j has idiosyncratic shot-generation dynamics not present in the donor leagues, the learned stacking weights may be mis-specified. (5) GCM-based feature selection on the same data used for performance evaluation risks optimistic bias, though the authors mitigate this by reporting out-of-sample cross-fitted predictions for the main model [PAGE 10].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let shot i have feature vector φ_i and binary outcome y_i ∈ {0,1}. The xG model outputs xG_i = P(y_i = 1 | φ_i) ∈ [0,1], a dimensionless probability. The naïve baseline uses the empirical goal rate p₀ = 0.096 [PAGE 3]. Logloss (binary cross-entropy) is L = −(1/n) Σ_i [y_i ln(xG_i) + (1 − y_i) ln(1 − xG_i)], measured in nats; H-SB achieves 0.2535 versus the own model’s 0.2523 [PAGE 11, Table 4]. AUC is threshold-independent discrimination; H-SB = 0.8053, own model = 0.8098 [PAGE 11]. Accuracy at an unstated cutoff is 0.9108 versus 0.9105 [PAGE 11].

Category bias is quantified by average Goals Above Expectation: GAX̄_c = (1/n_c) Σ_{i: c_i = c} (y_i − xG_i) [PAGE 5]. For H-SB: strong foot GAX̄ = +0.0091 (n = 57,485), weak foot = −0.0106 (n = 15,746), other = −0.0078 (n = 15,506) [PAGE 7, Table 2]; rebound = +0.0104 (n = 4,293), no rebound = +0.0023 (n = 84,444) [PAGE 8, Table 3]. The own model reduces these to strong +0.0014, weak +0.0024, other −0.0054 [PAGE 13, Table 5], and rebound +0.0081, no rebound exactly 0.0000 [PAGE 13, Table 6], indicating residual rebound bias persists.

Under feature sufficiency and conditional independence, total goals G = Σ_i y_i follow a Poisson-Binomial distribution G ~ Poisson-Binomial(xG_1, ..., xG_n), where xG_i are treated as the true pre-shot probabilities [PAGE 4]. A 95% prediction interval is derived from the CDF; H-SB’s observed total lies right of the upper bound [PAGE 5, Figure 2], violating sufficiency, whereas the own model’s observed total falls inside the interval [PAGE 12, Figure 7].

Defender pressure is represented as p_i ~ N(p_i, σ_i² I₂) with σ_i = σ₀(1 + α d_i), d_i = ||p_i − p_shot||, and aggregated mass over subfields s ∈ A as M(A) = Σ_i w_i Σ_{s∈A} g_i(s), w_i = max(1 − β d_i, 0), g_i(s) = ∫_s N(z; p_i, σ_i² I₂) dz [PAGE 9]. Tuned via grid search to maximize correlation with blocked shots: σ₀ = 0.2, α = 0.03, β = 0.05 [PAGE 9]. The same computation is repeated for attackers [PAGE 10].

Model fitting uses XGBoost with 10-fold cross-fitting; hyperparameters tuned by grid search over learning rate η ∈ {0.01, 0.05, 0.1, 0.2, 0.5}, max depth ∈ {4, 5, 6}, min child weight ∈ {10, 20}, subsample ∈ {0.8, 1}, colsample ∈ {0.6, 0.8}, minimizing logloss with early stopping after 20 non-improving rounds [PAGE 10].

Team strengths are estimated via a bivariate Poisson model (Karlis & Ntzoufras, 2003) on historical match data, yielding attacking and defensive parameters [PAGE 14]. Their conditional predictive contribution is tested with the Generalised Covariance Measure (GCM) of Shah & Peters (2020), testing H₀: Y ⟂ X | Z where Y is the shot outcome, X is the team-strength parameter, and Z is the full covariate set [PAGE 15]; all tests are highly significant [PAGE 15]. Match outcome (home win / draw / away win) is modeled by multinomial regression on four predictors: average xG for and against for home and away over the last five matches [PAGE 16].

Stacking combines p_HSB and p_own via logistic regression on the logit transform: logit(p_stack) = β₀ + β₁ logit(p_HSB) + β₂ logit(p_own), with parameters learned from donor leagues and applied to the target league [PAGE 21]. For player evaluation, residualized GAX (rGAX) from Bajons & Kook (2025) is used instead of raw GAX to provide uncertainty quantification and robustness to selection effects [PAGE 17]. All distances are in pitch coordinate units; time intervals are 0–45, 45–75, and 75+ minutes [PAGE 6].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage traces from Reep & Pollard (1997) on playing-strategy effectiveness [PAGE 25], through Robberechts & Davis (2020) on how data availability shapes xG learnability [PAGE 25], to Vatvani (2022)’s bivariate-Gaussian defender representation at Hudl [PAGE 9]. The authors extend Vatvani by making σ distance-dependent and down-weighting distant defenders [PAGE 9]. Calibration critique draws on ElHabr (2023a, 2023b), who documented Opta’s overprediction in high-probability regions—the mirror image of H-SB’s underprediction in the 0.1–0.3 band [PAGE 4]. The rebound operationalization follows Litwitz, Memmert & Wunderlich (2024) [PAGE 2], though their work concerns Premier League goals after rebounds, whereas this paper proxies rebounds via a 3-second possession-sequence window. The GCM test is imported from Shah & Peters (2020) [PAGE 15], and team strengths from Karlis & Ntzoufras (2003) bivariate Poisson modeling [PAGE 14]. The bad-control argument for player evaluation invokes Cinelli, Forney & Pearl (2024) and the rGAX framework of Bajons & Kook (2025) [PAGES 17–18].

Multi-week traps are embedded in the temporal design. The dataset spans 2015/16 top-five leagues plus 2024/25 competition leagues [PAGE 1], mixing eras with potentially different ball aerodynamics, tactical structures, and goalkeeper techniques without an explicit temporal decay or regime-shift test. The game-state analysis splits matches into 0–45, 45–75, and 75+ minute intervals [PAGE 6], creating a within-match clock trap: late-game neutral-state underperformance [PAGE 6] may reflect physical fatigue, yet the physical metrics tested (15–75 minute aggregates) showed no GAX relationship [PAGE 8], leaving the biomechanical mechanism unidentified. The stacking procedure trains the meta-learner on four leagues to predict the fifth [PAGE 21]; over a multi-week season, league-specific tactical evolution would invalidate static stacking weights unless retrained periodically. Finally, the league-specific feature selection uses GCM on limited N (as low as 4,987 for Allsvenskan) [PAGE 20], where small-sample conditional-independence tests can over-select noise variables that appear significant by chance, producing a selection trap that reverses when more data arrives.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: when an analyst faces a high-stakes shooting decision (e.g., evaluating a striker in a relegation run-in), the default habit is to reach for the global, “most accurate” xG model [PAGE 1]. The paper demonstrates this habit is mis-calibrated precisely under pressure: H-SB underpredicts in the 0.1–0.3 probability band [PAGE 4], and trailing teams underperform relative to xG, with the gap widening after 75 minutes [PAGES 6–6]. A model that omits game state and time interval regresses to the mean in crisis moments, mispricing high-leverage shots.

Counter-trap: the obvious fix—add every contextual variable—creates its own trap. For match prediction, team strengths improve out-of-sample classification [PAGES 15–16], but for player evaluation, adding attacking strength is a recursive trap: the star player’s own finishing inflates the team attacking strength parameter, which then deflates that same player’s rGAX [PAGES 17–18]. Messi’s rGAX flips from significantly positive to negative solely because attacking strength was included [PAGE 18], a case of the coefficient estimating a different estimand than intended (bad control, Cinelli et al., 2024 [PAGE 18]). The counter-trap is therefore use-case-specific: team-strength xG for match simulation, non-team-strength (or defensive-strength-only) xG for shooter skill assessment.

Clock: the model partitions match time into three intervals [PAGE 6] and rebound into a 3-second window [PAGE 2], embedding a short-term memory structure. The recursive hazard is that late-game pressure and rebound chaos co-occur—trailing teams generate more rebounds under pressure—but the model treats rebound as a static Boolean and game state as a capped integer, so the interaction of clock × state × rebound is only partially captured. The own model’s rebound GAX of +0.0081 [PAGE 13] signals the clock-trap remains open: a dynamic, decay-weighted rebound feature (e.g., influence fading exponentially with seconds since prior shot) would likely capture residual variance that a hard 3-second cutoff misses.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: the authors explicitly tested home/away and aggregated physical metrics (sprint distance, total running distance over the 15–75 minutes preceding the shot) and found no meaningful effect on GAX [PAGE 8]. This is a formal veto: physical fatigue proxies available in the dataset do not enter the causal pathway of shot conversion conditional on the spatial and contextual features, so they are excluded from the final model. No weather, pitch temperature, or grass-layer variables exist in the event data, so a weather veto cannot be adjudicated from this source; any claim that weather modifies xG would be unsupported by these pages.

Biomechanical layer veto: footedness passes the veto. Strong-foot shots overperform by +0.0091 GAX under H-SB and the bias is nearly eliminated (+0.0014) when strong_foot is included [PAGES 7, 13]. This is a biomechanical veto that survives: the shooter’s dominant foot is a real, player-specific motor-control variable not reducible to (x,y) location or body part alone, and omitting it induces systematic underperformance for weak-foot shots (−0.0106) and other body parts (−0.0078) [PAGE 7].

Spatial/pressure layer veto: exact defender coordinates are vetoed in favor of the smoothed Gaussian mass because integer “defender-in-cone” counts create discontinuous xG jumps under marginal positional changes [PAGE 9]. The veto is replaced by a continuous field with σ scaling in distance and β down-weighting, which is differentiable with respect to defender position and robust to small measurement noise in tracking data. This passes as a biomechanical realism veto: a defender’s zone of influence is not a point but a diffusible pressure region that widens with distance from the shooter [PAGE 9].

Residual veto that remains open: the rebound Boolean leaves +0.0081 GAX [PAGE 13], meaning the physical chaos of a rebound (goalkeeper out of position, defender recovery lag) is not fully captured by spatial freeze-frame features alone. The veto is partial: the model acknowledges the layer but under-corrects it, leaving a small systematic bias that a higher-frequency or physics-based rebound model (e.g., explicit goalkeeper recovery time) might remove.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Omitted rebound feature under high-press leagues: If an xG model is deployed in a league with high defensive pressure and frequent shot chaos without a rebound indicator, the counterfactual prediction is systematic overperformance bias in rebound situations. From Table 3, H-SB rebound shots average GAX +0.0104 versus +0.0023 for non-rebound shots [PAGE 8, Table 3]. Verifiable prediction: in any held-out season where rebound frequency exceeds the sample mean (4,293 of 88,737 shots ≈ 4.8%), the model’s cumulative GAX will be positively biased by roughly +0.008 per rebound shot, and the Poisson-Binomial total-goal test will reject feature sufficiency (observed goals above the upper 95% bound) exactly as observed for H-SB [PAGE 5].

Veto Scenario 2 — Game-state omission in the final quarter: If game state and time interval are excluded, the counterfactual model miscalibrates in the 75+ minute window when trailing. Figure 4 shows the game-state GAX gradient strengthens late in the match for both leading and trailing states, with slight neutral-state underperformance after 75 minutes [PAGE 6]. Verifiable prediction: stratified by minute 75–90, the excluded model will show trailing-team GAX below −0.005 and leading-team GAX above +0.005, whereas the own model (which includes game_state and time_interval) drives these toward zero [PAGE 12, Figure 8], reducing logloss in the late-minute subset relative to the excluded baseline.

Veto Scenario 3 — Attacking strength as a control in player evaluation: If attacking team strength is included when estimating rGAX for a primary attacker, the bad-control trap recursively attenuates the player’s apparent finishing skill. From Figure 12D, Lionel Messi’s GAX is positive but his rGAX turns negative once attacking strength enters the model, whereas with defensive strength only his rGAX is significantly positive [PAGES 17–18]. Verifiable prediction: for any top-10 attacker whose team attacking strength is dominated by that player’s own offensive output, including attacking strength in the rGAX model will produce a negative or statistically indistinguishable-from-zero rGAX despite a positive raw GAX, and the correlation between GAX and rGAX across players will drop relative to the defensive-strength-only specification (as observed: correlation remains high but lower for the dual-strength model [PAGE 18]).
</RLVR_COUNTERFACTUAL_VETOES>