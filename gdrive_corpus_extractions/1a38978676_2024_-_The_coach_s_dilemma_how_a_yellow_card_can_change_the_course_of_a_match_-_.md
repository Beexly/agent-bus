---
source: "2024 - The coach's dilemma how a yellow card can change the course of a match - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/Hudl StatsBomb/Research Competitions/2024"
pages: 19
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4661
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about yellow cards in football (soccer) from StatsBomb/Hudl research competition 2024. They have provided the full text of 19 pages.

I need to output a response with specific XML sections:
1. THINK_TRACE (>=400 words) - Deep multi-hop derivation & gray-zone audit
2. SOURCE_OPERATORS_AND_EQUATIONS - Formal LaTeX, units, page citations, breakdown
3. RETROCAUSAL_GENEALOGY - Historical/scientific lineage & multi-week traps
4. RECURSIVE_THEORY_OF_MIND - Crisis habit regression vs counter-trap vs clock
5. CROSS_LAYER_VETO_ADJUDICATION - Physical/biomechanical/weather veto proof
6. RLVR_COUNTERFACTUAL_VETOES - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes.
- When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
- >= 1,000-WORD DEPTH across these exact XML sections.

I need to be careful not to mention betting lines (spreads, totals, moneylines, odds). I can discuss probabilities in a scientific context (xYC, Brier Score, etc.) but not betting odds.

Let me analyze the source text deeply:

Key findings from paper:
- Dataset: StatsBomb event + 360 data, 2 seasons Italian Serie A + English Premier League, 1160 matches [PAGE 2]
- Players considered: played full match, received exactly one yellow card, not sent off [PAGE 2]
- Player control zones: pitch divided into 30 equal rectangles (6 length x 5 width) [PAGE 2]
- Heat map analysis: average 8.83 zones before yellow, 8.6 after; 6.16 overlap; ceased activity in 2.67 zones, active in 2.44 new zones [PAGE 2]
- Average yellow card between 60th and 70th minute - confounder with late-game tactical shifts [PAGE 2]
- xYC model: CatBoost gradient boosting [PAGE 3]
- Training: 2022/2023 seasons (580 matches), Test: 2023/2024 seasons (580 matches) [PAGE 3]
- Features: minute, visible opponents, visible teammates, distance to nearest defender, play pattern, defenders between actor and goal, player position, OBV against before, OBV for before, advantage after foul, visible opponents within 5m, visible teammates within 5m, number of fouls committed by player before current foul, number of fouls by team before current foul [PAGE 3]
- Limitations: no video files, no referee positioning in 360 data, missing jersey numbers in 360 data, focused solely on first foul per player [PAGE 4]
- Metrics: Brier Score [PAGE 4], RMSE [PAGE 5], Balanced Accuracy, F1 Score, ROC AUC [PAGE 5]
- Calibration: Platt Scaling [PAGE 5], Isotonic Regression [PAGE 5]
- Results: xYC feature importances [PAGE 7]: x coord 19.11, foul_committed_advantage 10.60, visible_opponents 10.53, play_pattern 7.78, position 6.86, minute 6.75, visible_teammates 5.63, obv_for_before 5.49, num_fouls_by_match 5.47, obv_against_before 4.55, y coord 4.28, distance_to_nearest_defender 3.53, num_defenders_on_goal_side_of_actor 3.41, visible_teammates_in_5_meters 2.45, num_fouls_by_team 2.24, visible_opponents_in_5_meters 1.25
- Metrics: Brier score 0.082, RMSE 0.287, Balanced Accuracy 0.67, F1 score 0.31, ROC AUC 0.67 [PAGE 8]
- Card overview: Foul 30677 (100%), Yellow card 3611 (11.77%), Second yellow 67 (0.21%), Red card 55 (0.17%) [PAGE 9]
- Mean number of fouls for receiving yellow card: Per player 1.67, Per team 8.86, Per match 16.54 [PAGE 10]
- Geographic: fouls most frequent in central areas and flanks; yellow cards most often issued in team's own half [PAGE 10-11]
- Danger categories: low/medium/high xYC based on quantile distribution [PAGE 6]
- Low danger games: more fouls required for yellow card; medium/high danger: single foul can lead to yellow [PAGE 12-13]
- Inverse relationship between number of fouls and average xYC value [PAGE 13]
- Main result: No significant difference in proportion of attacks through cautioned player's control zone before/after yellow card [PAGE 7]
- obv_for_net: 29.915% before vs 29.844% after - minimal difference [PAGE 7]
- Conclusion: Yellow card does not significantly affect player performance; coaches can avoid unnecessary substitutions [PAGE 15]
- VAR integration potential [PAGE 15]

Now I need to structure this into the required sections with proper LaTeX, page citations, and depth.

Important: No betting lines. I can mention probabilities (0.082 Brier score, 11.77% yellow card rate) but not as betting odds.

Let me draft each section.

THINK_TRACE (>=400 words):
- Multi-hop derivation: Connect xYC features -> model performance -> practical coaching implication -> substitution decision.
- Gray-zone audit: The 60th-70th minute confounding [PAGE 2], the full-match filter creating survivorship bias [PAGE 2], first-foul-only isolation [PAGE 4], absence of referee positioning [PAGE 4], missing jersey numbers [PAGE 4], no video [PAGE 4], F1 score 0.31 indicating poor positive class detection despite ROC AUC 0.67 [PAGE 8], Brier score 0.082 interpretation.
- Derive the coaching decision problem: P(2nd yellow | retained) vs substitution cost. But paper says performance doesn't change significantly.
- Multi-hop: xYC inputs include minute [PAGE 3], but yellow cards cluster 60-70 min [PAGE 2], so minute feature may encode game-state fatigue rather than foul risk.
- Quantitative: 30677 fouls, 3611 yellows = 11.77% [PAGE 9]. Mean fouls per player before yellow = 1.67 [PAGE 10]. This is a low base rate, so precision issues.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define control zone partition: Z = {z_ij | i=1..6, j=1..5}, |Z|=30 [PAGE 2]
- Heat map overlap: O = Z_before ∩ Z_after, |O|=6.16 avg; lost L = Z_before \ Z_after, |L|=2.67; gained G = Z_after \ Z_before, |G|=2.44 [PAGE 2]
- xYC model: \hat{p} = f_CatBoost(X) where X includes minute, visible_opponents, etc. [PAGE 3]
- Brier Score: BS = (1/N) Σ (y_i - \hat{p}_i)^2 [PAGE 4]
- RMSE: sqrt((1/N) Σ (y_i - \hat{p}_i)^2) [PAGE 5]
- Platt scaling: logistic regression on \hat{p}; Isotonic: monotonic nonlinear [PAGE 5]
- Feature importance table [PAGE 7-8]
- Offensive value net: obv_for_net [PAGE 7]
- Percent attacks through control zone [PAGE 7]
- Base rates: N_fouls=30677, N_YC=3611, P(YC|foul)=0.1177 [PAGE 9]
- Mean fouls to yellow: μ_player=1.67, μ_team=8.86, μ_match=16.54 [PAGE 10]
- Quantile danger categories Q_low, Q_med, Q_high [PAGE 6]
- Assumptions and breakdown regimes: small sample of single-YC players, survivorship bias, minute confounding.

RETROCAUSAL_GENEALOGY:
- Historical lineage: xG/xA -> xYC [PAGE 3]. Expected goals lineage.
- CatBoost gradient boosting.
- Platt scaling (1999), Isotonic regression.
- Multi-week traps: fixture congestion, accumulation of yellow cards across matches (suspension thresholds), referee leniency drift over season, tactical adaptation by opponents over weeks.
- Causal reversal: Does yellow card cause conservatism, or does conservative play lead to fewer cards? Paper finds no significant change.

RECURSIVE_THEORY_OF_MIND:
- Coach's belief about opponent's belief about cautioned player's risk.
- Crisis habit regression: Coach substitutes due to fear of second yellow (crisis habit).
- Counter-trap: Opponent pressures warned player to provoke second card [PAGE 2], but paper finds no increase in attacks through control zone [PAGE 7].
- Clock: Average card at 60-70 min [PAGE 2]; late-game fatigue vs card effect confounded. Substitution clock management.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: Pitch dimensions, 30 rectangles. No weather data in source. No physical/biomechanical data (speeds, accelerations) due to missing jersey numbers [PAGE 4].
- Biomechanical: Cannot validate contact intensity without video [PAGE 4]. No player speed data.
- Weather: Not in source; must be vetoed as unavailable.
- Veto: Any claim about physical fatigue causing the 60-70 min clustering is vetoed because source only observes minute, not physiological state.
- Veto: Claim about referee proximity influencing cards is vetoed because referee positioning absent [PAGE 4].

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable RLVR (Reinforcement Learning from Verifiable Rewards?) counterfactual veto scenarios + predictions. I should frame these as falsifiable scenarios based on the paper's data/limitations.

1. Minute confounding veto: If we stratify yellow cards by minute (e.g., <30 vs 60-70 vs >80), the apparent "performance stability" after yellow card disappears because early yellows have different substitution patterns than late yellows. Prediction: The null effect on control-zone overlap will reverse (significant drop) in early-card subsample.
2. Referee positioning veto: If referee 360 positioning were added, xYC Brier score would drop below 0.082 and feature importance of distance_to_nearest_defender would decrease as referee proximity absorbs variance. Prediction: Brier score improvement ΔBS < -0.01.
3. Full-match survivorship veto: Players substituted before yellow or sent off are excluded [PAGE 2]. If we include players forced off before first yellow (injury/tactical), the mean fouls-per-yellow (1.67) would rise because early exits truncate foul accumulation. Prediction: μ_player increases to >2.0 in full-intent-to-treat sample.

I need to ensure total word count >= 1000 across sections. Let me write comprehensively.

Also need verbatim quotes with [PAGE N] markers. Let me pull exact quotes:

[PAGE 2]: "On average, players were active in 8.83 zones before receiving a yellow card and 8.6 zones after. While 6.16 zones overlapped, players typically ceased activity in 2.67 zones and became active in 2.44 new zones after being cautioned."
[PAGE 2]: "It's worth noting that the average yellow card is given between the 60th and 70th minute, which may conflate the effects of the yellow card with typical late-game tactical shifts."
[PAGE 3]: "The model's input features include [1]:" followed by list.
[PAGE 4]: "No Video Files. One major limitation of our dataset is the absence of video files."
[PAGE 4]: "Lack of Referee Positioning in 360 Data. Another constraint is the unavailability of referee positioning data within the 360 dataset."
[PAGE 4]: "Missing Jersey Numbers in 360 Data. The absence of jersey numbers for players within the 360-degree data limits our ability to create reliable tracking information."
[PAGE 4]: "Cumulative Fouls and xYC Evaluation. Recognizing that fouls can be a cumulative factor in refereeing decisions, where yellow cards may be awarded based on an accumulation rather than a singular incident, we focused solely on the first foul committed by each player in a match to isolate and accurately assess expected yellow card (xYC) probabilities."
[PAGE 7]: "Contrary to our hypothesis, we found no significant difference in the proportion of attacks going through a player's control zone before and after they received a yellow card."
[PAGE 7]: "Before receiving a yellow card, an average of 29.915% of the opponent's offensive value (obv) was generated in the player's control zone."
[PAGE 7]: "After receiving a yellow card, this figure was 29.844%."
[PAGE 8]: Feature importances table and metrics.
[PAGE 9]: "Foul 30677 100% Yellow card 3611 11.77%"
[PAGE 10]: "Mean number of fouls for receiving yellow card Per player 1.67 Per team 8.86 Per match 16.54"

I need to be careful about format: exact XML sections. No markdown outside? I'll just output the XML sections.

Let me write the content now, ensuring depth and word count.

I'll structure:

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

No betting lines anywhere. I will not mention odds, spreads, etc.

Let's draft carefully.

Word count target: THINK_TRACE ~350-400 words, others ~150-200 each = total >1000. Let me aim for roughly:
- THINK_TRACE: 500 words
- SOURCE_OPERATORS: 250 words
- RETROCAUSAL: 200 words
- RECURSIVE: 200 words
- CROSS_LAYER: 200 words
- RLVR: 200 words
Total ~1550 words. Good.

Now write.

THINK_TRACE content:
Start with the coaching decision problem: retain cautioned player vs substitute. Formalize as a risk calculus under uncertainty. The paper filters to players who played full match, received exactly one yellow, not sent off [PAGE 2]. This creates a survivorship-conditioned sample: we only observe the "treated" players who survived the match, biasing toward robustness. The average card arrives at 60th-70th minute [PAGE 2], so the post-card window is short (20-30 min) and confounded with end-game fatigue, score effects, and tactical shifts.

Multi-hop derivation:
1. xYC is trained on first-foul-only events [PAGE 4] to isolate per-incident risk from cumulative referee tolerance.
2. Feature importance shows x-coordinate (19.11) dominates [PAGE 8], consistent with heatmaps showing yellows cluster in a team's own half [PAGE 11] and fouls in central/flank zones [PAGE 10].
3. The model achieves Brier 0.082, RMSE 0.287, ROC AUC 0.67, but F1 only 0.31 [PAGE 8]. The low F1 reveals poor positive-class detection despite decent discrimination; the model is calibrated but misses many actual yellows.
4. Behavioral results: zone activity barely changes (8.83 -> 8.6 zones; overlap 6.16; lost 2.67; gained 2.44) [PAGE 2]. Opponent attack share through the cautioned player's zone is statistically flat [PAGE 7]. Offensive value (obv_for_net) inside the zone is 29.915% before vs 29.844% after [PAGE 7], a 0.071 percentage-point difference.
5. Gray-zone audit: The minute feature in xYC [PAGE 3] may encode late-game referee tolerance rather than pure foul danger because cards cluster at 60-70 min [PAGE 2]. The absence of referee positioning [PAGE 4] means we cannot separate player risk from official sightline. Missing jersey numbers [PAGE 4] prevent speed/acceleration reconstruction, so biomechanical conservatism cannot be measured. No video [PAGE 4] means contact intensity and intent are unobserved.

Conclusion of trace: The null finding ("no significant impact") supports avoiding premature substitution, but the causal claim is weak because the treated sample is conditioned on full-match survival and the observation window overlaps with match-end tactical regimes.

SOURCE_OPERATORS_AND_EQUATIONS:
Define:
- Pitch partition \mathcal{Z} = \{z_{ij}\}_{i=1..6,j=1..5}, |\mathcal{Z}|=30 [PAGE 2].
- Pre-card active set A_pre, post-card A_post. |A_pre|=8.83, |A_post|=8.60, |A_pre ∩ A_post|=6.16, |A_pre \ A_post|=2.67, |A_post \ A_pre|=2.44 [PAGE 2].
- xYC: \hat{p}_{yc} = \text{CatBoost}(\mathbf{x}), \mathbf{x} \in \mathbb{R}^{15} [PAGE 3].
- Brier Score: \mathrm{BS} = \frac{1}{N}\sum_{k=1}^{N}(y_k - \hat{p}_k)^2 = 0.082 [PAGE 4,8].
- RMSE: \mathrm{RMSE} = \sqrt{\frac{1}{N}\sum_{k=1}^{N}(y_k - \hat{p}_k)^2} = 0.287 [PAGE 5,8].
- Platt scaling: \hat{p}^{\text{platt}} = \sigma(a\hat{p} + b); Isotonic: \hat{p}^{\text{iso}} = \text{monotonic fit}(\hat{p}) [PAGE 5].
- Offensive value share: \mathrm{OBV}_{\text{zone}}^{\text{pre}} = 29.915\%, \mathrm{OBV}_{\text{zone}}^{\text{post}} = 29.844\% [PAGE 7].
- Base rates: N_{foul}=30{,}677, N_{YC}=3{,}611, P(YC|foul)=0.1177 [PAGE 9].
- Foul accumulation: \mu_{\text{player}}=1.67, \mu_{\text{team}}=8.86, \mu_{\text{match}}=16.54 [PAGE 10].
Assumptions: first-foul isolation [PAGE 4]; full-match filter [PAGE 2]; 580-match train/test split by season [PAGE 3]. Breakdown: minute confounding [PAGE 2]; no referee sightline [PAGE 4]; no jersey numbers [PAGE 4]; no video [PAGE 4]; low F1 implies poor recall of yellow events [PAGE 8].

RETROCAUSAL_GENEALOGY:
Historical/scientific lineage. xYC descends from xG/xA expected-value framework [PAGE 3], itself rooted in probabilistic shot modeling. CatBoost gradient boosting handles categorical features (position, play pattern) and nonlinear dependencies [PAGE 3]. Calibration methods: Platt scaling (global logistic correction) and Isotonic regression (local monotonic correction) [PAGE 5], standard in probabilistic forecasting since the 1990s. The expected-card concept extends expected-goal logic to disciplinary events, treating a yellow card as a Bernoulli outcome with context-dependent probability.

Multi-week traps:
- Accumulation: Across a multi-week league season, yellow cards accumulate toward suspension thresholds; a single match's xYC is nested in a season-long survival process not modeled here.
- Referee leniency drift: Referee tolerance for high-xYC vs low-xYC fouls may vary across weeks and competitions [PAGE 6-13].
- Tactical adaptation: Opponents learn which players are cautioned and adjust pressure over successive fixtures; the paper's single-match snapshot cannot capture this iterative learning [PAGE 2,7].
- Fixture congestion: The 60th-70th minute card timing [PAGE 2] coincides with fatigue accumulation across a compressed fixture list, conflating within-match and between-match fatigue.

RECURSIVE_THEORY_OF_MIND:
Level 0: Player behavior after caution (does he play more conservatively?). Paper: no significant change [PAGE 2,7].
Level 1: Coach's belief about player risk (substitute to avoid second yellow?). Paper suggests coaches can retain players [PAGE 15].
Level 2: Opponent's belief about coach's retention decision. Opponent may pressure the warned player to provoke a dismissal [PAGE 2], but attack distribution through his zone does not shift [PAGE 7].
Level 3: Coach's belief about opponent's belief (double-bluff: keep player as bait, or substitute to deny opponent target?).

Crisis habit regression: Under pressure, coaches revert to the habit of substituting cautioned players ("crisis habit") to eliminate tail risk of a second yellow [PAGE 1]. Counter-trap: Retaining the player exploits the opponent's failure to adjust (no attack redistribution observed [PAGE 7]), preserving attacking potential [PAGE 1]. Clock: Cards average 60-70 min [PAGE 2], leaving limited match time; substitution clock consumes one of three windows, and premature substitution forfeits late-match tactical flexibility.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: Pitch geometry is fixed (30 rectangles) [PAGE 2]; weather data absent from source text, so any meteorological veto (rain, wind affecting foul propensity) is unverifiable and excluded.
Biomechanical layer: Missing jersey numbers in 360 data [PAGE 4] preclude player speed, acceleration, and inter-player distance reconstruction beyond event-level "distance to nearest defender" [PAGE 3]. No video [PAGE 4] means contact intensity, tackle technique, and player intent are unobserved; therefore any biomechanical claim about "conservative tackling" post-card is vetoed.
Weather veto: Not present in source; cannot adjudicate.
Physical/biomechanical veto proof: Because xYC uses event coordinates (x, y) [PAGE 8] and minute [PAGE 3] but lacks physiological load, the observed 60th-70th minute clustering cannot be decomposed into match-time fatigue vs referee leniency. Veto: any attribution of card timing to physical exhaustion is unsupported.
Referee layer: Lack of referee positioning [PAGE 4] voids claims that proximity/sightline drives carding; xYC feature distance_to_nearest_defender [PAGE 3] is a player-relative proxy, not an official-sightline variable.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios + predictions.

Scenario 1: Minute-stratified null-effect reversal. Counterfactual: Restrict analysis to yellow cards issued before minute 30 (early cards), where late-game fatigue is absent. Prediction: The post-card reduction in active zones will exceed the full-sample 2.67 lost / 2.44 gained [PAGE 2] because early cautioned players face a long remaining horizon and coaches substitute more readily. Verifiable via existing event data by filtering yellow_card.minute < 30.

Scenario 2: Referee-positioning augmentation. Counterfactual: Add referee (x,y) sightline to xYC features. Prediction: Brier score decreases from 0.082 by at least 0.005 and feature importance of distance_to_nearest_defender (currently 3.53 [PAGE 8]) drops by >20% because referee proximity absorbs carding variance. Verifiable if 360 referee data is released; currently vetoed by absence [PAGE 4].

Scenario 3: Intent-to-treat foul accumulation. Counterfactual: Include all players who received at least one yellow, removing the full-match and not-sent-off filters [PAGE 2], and count fouls until first yellow including players substituted/injured before any card. Prediction: Mean fouls per player to first yellow rises above 1.67 [PAGE 10] because early exits truncate the foul-count denominator, revealing that 1.67 is a survivor-biased estimand. Verifiable by expanding the data selection criteria.

I think this is solid. Let me make sure no betting lines. I mention probabilities but not betting odds. Good.

Let me check word counts mentally. THINK_TRACE seems robust. I'll write it out fully now.

One concern: The user says "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." I must not invent fake ratios. My equations are real from the paper (Brier, RMSE, partition). I should mention units: probability dimensionless [0,1], Brier score in squared probability units, zones count (dimensionless), minute in min. Good.

Also "exact singularity/breakdown regimes" - I'll mention where models break: small F1, minute confounding, missing referee data, etc.

I need verbatim quotes with page markers. I'll include them.

Let's write the final output.
</NATIVE_REASONING>

<THINK_TRACE>
The coaching decision problem is a sequential risk calculus under partial observability: after a caution at time t_card, the coach must choose between retaining a single-yellow player (exposing the team to second-yellow dismissal risk) or substituting him (consuming a substitution window and potentially degrading attacking structure). The source bounds this problem with a restrictive sample: only players who played the full match, received exactly one yellow card, and were not sent off are retained [PAGE 2]. This creates a survivorship-conditioned estimand; we observe only cautioned players who survived to the final whistle, which mechanically biases toward robustness and suppresses the tail risk of early second-yellow events.

A multi-hop derivation proceeds as follows. Hop 1: xYC is trained exclusively on first-foul events per player to isolate incident-level card probability from cumulative referee tolerance [PAGE 4]. Hop 2: feature importance ranks x-coordinate first at 19.11, followed by foul_committed_advantage (10.60) and visible_opponents (10.53) [PAGE 8], which aligns with spatial findings that fouls concentrate in central areas and flanks while yellow cards cluster in a team’s own half [PAGE 10–11]. Hop 3: model performance yields Brier Score 0.082, RMSE 0.287, ROC AUC 0.67, but F1 score only 0.31 [PAGE 8]. The depressed F1 signals poor positive-class recall despite acceptable discrimination; the model is calibrated but misses a large share of actual yellows. Hop 4: behavioral heat maps show almost no post-card restructuring—active zones move from 8.83 to 8.60, with 6.16 overlapping zones, 2.67 zones abandoned, and 2.44 zones newly entered [PAGE 2]. Opponent attack share through the cautioned player’s control zone is statistically invariant [PAGE 7], and offensive value generated inside that zone shifts from 29.915% before to 29.844% after, a 0.071 percentage-point difference [PAGE 7].

Gray-zone audit: the average yellow card arrives between the 60th and 70th minute [PAGE 2], so the post-card observation window overlaps with late-game fatigue, score-state effects, and tactical substitutions. The xYC model includes minute as a feature [PAGE 3], but minute may encode referee end-game tolerance rather than pure foul danger. Three hard data voids prevent causal decomposition: no video files [PAGE 4], no referee positioning in 360 data [PAGE 4], and missing jersey numbers in 360 data [PAGE 4]. Without jersey numbers, player speed, acceleration, and inter-player spacing beyond event-level distance-to-nearest-defender cannot be reconstructed; without video, contact intensity and referee sightline are unobserved. Consequently, the null finding that yellow cards do not significantly alter performance [PAGE 15] is associational within a survivor-biased, late-match-biased sample, not a causal license to ignore second-yellow risk.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the pitch be partitioned into 30 equal rectangles \mathcal{Z} = \{z_{ij}\}_{i=1..6,\,j=1..5}, |\mathcal{Z}|=30 [PAGE 2]. For a cautioned player, define pre-card active zone set A^{\text{pre}} and post-card active zone set A^{\text{post}}. Observed cardinalities are |A^{\text{pre}}|=8.83, |A^{\text{post}}|=8.60, |A^{\text{pre}} \cap A^{\text{post}}|=6.16, |A^{\text{pre}} \setminus A^{\text{post}}|=2.67, |A^{\text{post}} \setminus A^{\text{pre}}|=2.44 [PAGE 2].

The xYC model is a CatBoost gradient booster \hat{p}_{\text{yc}} = f_{\text{CatBoost}}(\mathbf{x}) over \mathbf{x} \in \mathbb{R}^{15}, where features include minute, visible_opponents, visible_teammates, distance_to_nearest_defender, play_pattern, num_defenders_on_goal_side_of_actor, player position, OBV against before, OBV for before, foul_committed_advantage, visible opponents/teammates within 5 m, num_fouls_by_match, and num_fouls_by_team [PAGE 3]. Training uses 580 matches from 2022/2023 Serie A and Premier League; testing uses 580 matches from 2023/2024 [PAGE 3].

Probabilistic calibration metrics: Brier Score \mathrm{BS} = \frac{1}{N}\sum_{k=1}^{N}(y_k - \hat{p}_k)^2 = 0.082 [PAGE 4, 8]; RMSE \mathrm{RMSE} = \sqrt{\frac{1}{N}\sum_{k=1}^{N}(y_k - \hat{p}_k)^2} = 0.287 [PAGE 5, 8]. Platt scaling applies a global logistic correction \hat{p}^{\text{platt}} = \sigma(a\hat{p}+b); isotonic regression applies a monotonic nonlinear correction [PAGE 5].

Behavioral metric: opponent offensive value share inside the cautioned player’s zone is \mathrm{OBV}^{\text{pre}}_{\text{zone}} = 29.915\% and \mathrm{OBV}^{\text{post}}_{\text{zone}} = 29.844\% [PAGE 7]. Disciplinary base rates: N_{\text{foul}}=30{,}677, N_{\text{YC}}=3{,}611, hence P(\text{YC}\mid \text{foul}) = 0.1177 [PAGE 9]. Foul accumulation to first yellow: \mu_{\text{player}}=1.67, \mu_{\text{team}}=8.86, \mu_{\text{match}}=16.54 [PAGE 10].

Assumptions: first-foul isolation to avoid cumulative-card confounding [PAGE 4]; full-match filter [PAGE 2]; season-wise train/test split [PAGE 3]. Breakdown/singularity regimes: minute confounding with end-game tactics [PAGE 2]; absence of referee sightline voids proximity-based causal claims [PAGE 4]; missing jersey numbers void biomechanical speed reconstruction [PAGE 4]; low F1 = 0.31 indicates poor recall of the positive yellow-card class [PAGE 8].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The xYC indicator descends from the expected-goals (xG) and expected-assists (xA) probabilistic valuation lineage [PAGE 3], transposing shot-quality logic onto disciplinary events: a yellow card is modeled as a context-dependent Bernoulli outcome rather than a deterministic referee act. The CatBoost gradient booster is selected for its handling of categorical inputs (position, play pattern) and nonlinear dependencies [PAGE 3]. Calibration methods follow established probabilistic forecasting practice: Platt scaling (global logistic correction) and isotonic regression (local monotonic correction) [PAGE 5], both dating to statistical calibration literature of the 1990s.

Multi-week traps arise because a single-match xYC is nested in longer temporal processes absent from the paper. First, accumulation: yellow cards accrue across a season toward suspension thresholds, so match-level caution probability is not independent of a player’s seasonal disciplinary stock; the paper’s first-foul isolation [PAGE 4] deliberately strips this multi-game memory. Second, referee leniency drift: tolerance for high-xYC versus low-xYC fouls may shift across weeks and competitions [PAGE 6–13], making a static xYC threshold unstable over a fixture cycle. Third, opponent adaptation: once an opponent identifies a cautioned player, pressure can be applied across successive fixtures to provoke dismissals; the paper’s cross-sectional snapshot cannot capture this iterative game-theoretic learning [PAGE 2, 7]. Fourth, fixture congestion: the 60th–70th minute card clustering [PAGE 2] coincides with fatigue accumulation across compressed match weeks, conflating within-match timing with between-match physiological load.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Level 0 concerns the cautioned player’s own behavior: does he become more conservative after the card? The paper finds negligible heat-map displacement (8.83 to 8.60 zones) and no significant shift in opponent attacks through his zones [PAGE 2, 7]. Level 1 is the coach’s belief about that player’s dismissal risk and the substitution trade-off between second-yellow exposure and lost attacking potential [PAGE 1]. Level 2 is the opponent’s belief about the coach’s retention decision: the opponent may pressure the warned player to provoke a second caution [PAGE 2], yet attack distribution through his control zone does not measurably change [PAGE 7], suggesting the opponent does not successfully exploit the caution. Level 3 is the coach’s second-order belief about the opponent’s failure to adjust, which justifies retaining the player as a strategic anchor.

Crisis habit regression describes the coach’s reflexive substitution of any cautioned player to eliminate tail risk, a habit rooted in loss aversion rather than the observed effect size. The counter-trap is to retain the cautioned player precisely because opponents fail to redistribute attacks toward his zone [PAGE 7] and offensive value inside that zone is unchanged to within 0.071 percentage points [PAGE 7], preserving attacking structure. The clock imposes a hard constraint: cards average the 60th–70th minute [PAGE 2], leaving only 20–30 minutes of match time; each premature substitution consumes one of the limited substitution windows and forfeits late-match tactical flexibility.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: pitch geometry is fixed and partitioned into 30 rectangles [PAGE 2]. Weather variables are absent from the source text, so any meteorological veto (precipitation, wind, temperature affecting foul propensity or carding) is unverifiable and excluded from adjudication.

Biomechanical layer: missing jersey numbers in 360 data [PAGE 4] preclude reconstruction of player speed, acceleration, and precise inter-player spacing; the only spatial proxy is event-level distance_to_nearest_defender [PAGE 3]. No video files exist [PAGE 4], so contact intensity, tackle technique, and player intent are unobserved. Therefore any biomechanical claim that cautioned players tackle more conservatively or alter their physical engagement is vetoed.

Referee/sightline layer: the absence of referee positioning in 360 data [PAGE 4] voids claims that official proximity or visual angle drives carding decisions. The xYC feature distance_to_nearest_defender [PAGE 3] is player-relative, not referee-relative, and cannot substitute for sightline.

Singularity/breakdown: because xYC conditions on minute [PAGE 3] but lacks physiological load data, the observed 60th–70th minute card clustering cannot be decomposed into match-end fatigue versus referee tolerance. Veto regime: any attribution of card timing to physical exhaustion is unsupported by the data. Any claim that xYC features fully capture foul risk is vetoed by the missing referee, video, and jersey-number layers [PAGE 4].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Minute-stratified null-effect reversal. Counterfactual: restrict the behavioral analysis to yellow cards issued before minute 30, removing late-game fatigue and end-game tactical confounding. Prediction: early-cautioned players will exhibit a post-card reduction in active zones exceeding the full-sample loss of 2.67 zones [PAGE 2], because a long remaining horizon raises coach substitution propensity and opponent targeting incentive. Verifiable from existing event data by filtering yellow_card.minute < 30; falsifies the paper’s blanket null effect if the early subsample shows significant zone contraction.

Scenario 2: Referee-positioning augmentation. Counterfactual: add referee (x,y) position and sightline to the xYC feature set. Prediction: Brier Score falls from 0.082 by at least 0.005, and the importance of distance_to_nearest_defender (currently 3.53 [PAGE 8]) drops by more than 20% because referee proximity absorbs carding variance currently misattributed to player-space features. Currently vetoed by the absence of referee 360 data [PAGE 4]; verifiable only if that data is released.

Scenario 3: Intent-to-treat foul accumulation. Counterfactual: remove the full-match and not-sent-off filters [PAGE 2] and compute fouls-to-first-yellow for all cautioned players, including those substituted or injured before any card. Prediction: mean fouls per player to first yellow rises above the survivor-biased 1.67 [PAGE 10], because early exits truncate the foul-count denominator and reveal that 1.67 conditions on survival. Verifiable by expanding the data selection criteria; falsifies the claim that 1.67 is an unbiased population estimand.
</RLVR_COUNTERFACTUAL_VETOES>