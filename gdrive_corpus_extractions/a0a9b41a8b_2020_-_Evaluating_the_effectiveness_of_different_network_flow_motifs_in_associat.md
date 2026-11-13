---
source: "2020 - Evaluating the effectiveness of different network flow motifs in association football - H land et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Quantitative Analysis in Sports/2020"
pages: 13
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4639
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper about network flow motifs in association football. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive analysis covering all these sections. Let me go through the paper carefully.

Key facts from the paper:
- Paper: Håland, Wiig, Hvattum, Stålhane (2020), "Evaluating the effectiveness of different network flow motifs in association football", JQAS 16(4): 311-323.
- Data: Eliteserien (Norwegian top division), 4 seasons 2014-2017, Opta24Feed data, 960 matches, 749,859 passes by 831 players, 203,313 motifs initially, 203,208 in final model.
- Flow motifs: subsequences of passes, k=4 nodes (3 passes), 5 types: ABAB, ABCA, ABAC, ABCB, ABCD.
- Dependent variable YM: binary, 1 if motif leads to a shot within 15s of last pass, 0 otherwise.
- GAM with logit link: logit(Pi) = ln(Pi/(1-Pi)) = ηi = Xiβ + f1(x1i) + ... + fj(xji).
- Explanatory variables: SumYPi (sum of predicted probabilities from 3 GAMMs by Håland et al. 2020), centrality measures (Closeness, Betweenness, Clustering, PageRankRecipient i, PageRankPasser i), Motif Type (categorical), Zones (number of unique zones, pitch divided into 21 zones).
- Fixed effects selected via Wald test; smooth terms via GAM.
- Results: ABAB coefficient -0.111 (SE 0.046, p<0.05), ABCB coefficient -0.095 (SE 0.022, p<0.001), Intercept -0.503 (SE 0.067, p<0.001). ABCA and ABAC are reference with ABCD.
- Smooth terms all significant (mostly ***): SumYP1, SumYP2, SumYP3, Closeness (*), Betweenness (*), Clustering (***), PageRankRecipient 1-3 (***), PageRankPasser 1 and 3 (***), Zones (***).
- Average zones: ABAB 2.29, ABAC 2.88, ABCA 2.89, ABCB 2.94, ABCD 3.52.
- Table 6: distribution for 2017 season.
- AUC ROC acceptable, PR low due to skew. Hosmer-Lemeshow calibration good.
- Key findings: fewer distinct players -> less effective; bigger area -> more effective; compact motifs less likely to lead to shots.

I need to be careful about:
- No betting lines. The paper mentions shots per game but no betting odds. I must not invent any.
- No toy equations. Use real equations from the paper (logit, GAM additive predictor, inverse logit).
- Cite [PAGE N] markers.
- Verbatim quotes where appropriate.

Structure:
1. THINK_TRACE (>=400 words): Deep derivation, gray-zone audit. Discuss the causal chain from motif to shot, the GAM specification, endogeneity concerns (pass difficulty/risk/potential are model outputs used as inputs), the 15-second window, the 5-second pass gap, the zone counting, the reference category switching (ABCD initially reference, but ABCA and ABAC removed and added to reference), multicollinearity among centrality measures, league specificity (Eliteserien not top European), shot vs goal distinction.
2. SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations from the paper. Define YM, logit, ηi, inverse logit, SumYPi, centrality measures, zones variable, motif types, coefficients with SEs, sample sizes, AUC, Hosmer-Lemeshow procedure. Cite pages.
3. RETROCAUSAL_GENEALOGY: Milo et al. 2002 network motifs, Gyarmati et al. 2014 flow motifs, Peña & Navarro 2015 player level, Bekkers & Dabadghao 2019, Perdomo Meza 2017, Malqui et al. 2019, Håland et al. 2020 GAMMs, Wiig et al. 2019 networks, Pina et al. 2017. Multi-week traps: temporal stability of motif effectiveness, small-sample week-to-week noise, opponent adjustment, game state (goal difference smooth f5, f6).
4. RECURSIVE_THEORY_OF_MIND: Crisis habit regression (teams reverting to compact motifs under pressure), counter-trap (using effective motifs predictably makes them less effective), clock (15s shot window, 5s pass gap, game time smooth f3, match clock management). Discuss how managers might overcorrect after a loss.
5. CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather vetoes. Artificial grass (X14), month of play interacting with grass (f9), game time (fatigue), pass difficulty (spatial coordinates), 5-second constraint (biomechanical/temporal), 15-second shot window, pitch zones (spatial), weather not explicitly in paper but artificial grass and month are proxies. Veto proof: if weather degrades passing, SumYP1 drops; if artificial grass changes ball roll, coefficients shift.
6. RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios with predictions.
   - Veto 1: High SumYP2 but low zone count in defensive third -> model predicts low shot probability, but counter-attack break occurs -> veto if possession retained >15s.
   - Veto 2: ABCD motif in own half with high closeness sum -> model may predict low effectiveness due to defensive centrality, but long ball bypasses motif structure -> veto.
   - Veto 3: Red card / numerical disadvantage -> centrality measures computed for 11v11 break down; betweenness centrality singularities when a player is sent off; model not designed for 10v11.

Each scenario needs prediction (what happens if veto triggers).

Word count: Must be >= 1000 words total across XML sections, with THINK_TRACE alone >= 400 words.

Let me draft carefully.

THINK_TRACE: I'll write a deep derivation. Start with the data pipeline: Opta events -> passing sequences -> motifs (3 passes, 5s gap, same team, recipient=next passer). 749,859 passes -> 203,313 motifs -> 203,208 after dropping undefined probabilities. The dependent variable YM ~ Bernoulli with shot within 15s. GAM: η_i = X_iβ + Σ f_j(x_ji). The link is logit. Fixed effects selected by Wald test. The motif type fixed effects: ABAB (-0.111, SE 0.046, p<0.05), ABCB (-0.095, SE 0.022, p<0.001). Reference: ABCD plus ABCA and ABAC (because Wald test removed two motif types? Wait: "two of the motif types have been removed after applying the Wald test. Hence, three motif types form the reference... The initially chosen reference (ABCD)... Both the ABAB and ABCB motif types are left in the model..." So ABAC and ABCA are lumped with ABCD as reference). This is a gray zone: why are ABAC and ABCA indistinguishable from ABCD statistically? The paper says it's difficult to understand. This is a model specification gray zone.

Smooth terms: SumYP1 (difficulty), SumYP2 (risk), SumYP3 (potential). Counter-intuitive: higher SumYP1 (easier passes) decreases shot probability because easy passes happen far from goal. Higher SumYP2 (less risky, easier to follow up) decreases shot probability. Medium risk is optimal. SumYP3 positive. Closeness negative (defensive players involved). Betweenness concave (moderate is best). Clustering positive. PageRank: network 1 & 2 recipient/passer negative; network 3 positive. Zones positive (more area = more effective). Avg zones Table 5: ABAB 2.29 ... ABCD 3.52.

Gray zones: endogeneity of SumYP variables (generated regressors from Håland et al. 2020 GAMMs); measurement error propagates. The 15-second window allows non-immediate shots, so motif effectiveness is diluted by subsequent events not modeled. The 5-second gap excludes slower build-up. Zones counted discretely but treated as continuous smooth. Reference category arbitrary. Team/player random effects NOT in motif model (unlike GAMMs), so repeated motifs from same team/player are correlated (clustered standard errors not mentioned). Hosmer-Lemeshow with 100 random samples at 5% significance, <10 rejections = good fit. AUC-ROC acceptable, AUC-PR low due to skew (shots are rare).

SOURCE_OPERATORS_AND_EQUATIONS: Write LaTeX.
- Motif definition: sequence of nodes v1,v2,v3,v4 with arcs e12,e23,e34. Motif type M ∈ {ABAB, ABCA, ABAC, ABCB, ABCD}.
- YM = 1{shot within Δt=15s after pass 3}.
- GAM: logit(P(YM_i=1)) = ln(P_i/(1-P_i)) = η_i = X_iβ + Σ_{j=1}^J f_j(x_{ji}).
- P_i = e^{η_i}/(1+e^{η_i}).
- SumYP_k = Σ_{p=1}^3 ŶP_k^{(p)} for k=1,2,3, each in [0,1], so SumYP_k ∈ [0,3].
- Closeness, Betweenness, Clustering ∈ [0,4] (4 players). PageRankRecipient_i, PageRankPasser_i ∈ [0,3] (3 players).
- Table 4 coefficients: β_ABAB = -0.111 (0.046)*, β_ABCB = -0.095 (0.022)***, β_0 = -0.503 (0.067)***.
- Zones: Z = |{zones touched by passes 1..3}| ∈ [1,6], treated as continuous.
- Sample: N=203,208 motifs, N_matches=960, N_passes=749,859, N_players=831, seasons 2014-2017.
- Calibration: Hosmer-Lemeshow, B=100 bootstrap samples, α=0.05, reject if ≥10 samples reject H0.
- Cite pages: [PAGE 1] for abstract/motifs, [PAGE 3] for data, [PAGE 4] for GAMM outputs YP1-3, [PAGE 5] for Table 2 and centrality, [PAGE 6] for motif type and zones, [PAGE 7] for Table 4 and results, [PAGE 8] for smooth functions interpretation, [PAGE 10] for zones and counter-attack, [PAGE 11] for Table 6, [PAGE 12] for final evaluation, [PAGE 13] for limitations.

RETROCAUSAL_GENEALOGY: Milo et al. (2002) network motifs (Science). Gyarmati et al. (2014) flow motifs inspired by Milo, k=4 nodes. Peña & Navarro (2015) player level. Perdomo Meza (2017) optimal size four, spatial info. Bekkers & Dabadghao (2019) possession vs shot-leading motifs, ML for scouting. Malqui et al. (2019) visualization + trajectories. Håland et al. (2020) three GAMMs: pass difficulty (YP1), pass risk (YP2), pass potential (YP3). Wiig et al. (2019) networks + centrality. Pina et al. (2017) network metrics in logistic regression, density negative. Lineage: graph theory -> sports networks -> motif classification -> motif effectiveness -> GAM. Multi-week traps: week-to-week variance in centrality scores (players rotate, injuries), opponent Elo smooth f8, goal difference smooth f5/f6 (game state), month*grass f9 (seasonal fatigue/weather), 4-season single league limits external validity. The "trap" is assuming motif effectiveness is stationary across weeks when opponent quality and game state shift the smooth functions.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression: after a loss, managers regress to compact, "safe" motifs (ABAB, ABCB) to retain possession, but paper shows these are less effective (negative coefficients). Counter-trap: if a team overuses ABCD because it's effective, opponents press the high-betweenness players, reducing the smooth function value (betweenness concave: moderate best, high decreases success). Clock: 5-second inter-pass limit excludes slow build-up; 15-second shot window creates a recency bias; game time f3 and time since last event f7 mean late-game fatigue alters pass difficulty. The "clock" is the match clock interacting with the smooth terms.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical: pitch divided into 21 zones; passes must occur within 5s. Biomechanical limit: ball speed vs player running speed means large zone coverage in 5s implies counter-attack or transition. Veto: if a motif covers >4 zones but takes >12s total (violates 5s gaps? No, 5s is between passes, total could be 15s). Actually if 3 passes each within 5s, total motif duration ≤15s plus ball travel. Zones max 6.
- Biomechanical: player fatigue (time played f4 in GAMMs), game time f3. Artificial grass X14 changes ball roll and bounce, altering SumYP1 (difficulty). Month*grass f9 interacts seasonal weather with surface.
- Weather: not explicitly measured, but month of play and artificial grass are proxies. Veto proof: heavy rain reduces pass completion (lower YP1), shifts SumYP1 smooth left, making motifs less effective; model lacks explicit weather covariate, so it misattributes weather-driven difficulty to motif type.
- Adjudication: veto if (a) precipitation > threshold (not in data), (b) artificial grass + cold month interaction changes ball physics beyond training distribution, (c) 5s rule violated due to ball out of play (not an event).

RLVR_COUNTERFACTUAL_VETOES: Three verifiable scenarios with predictions.
1. Scenario: Motif type ABAB in defensive third, high SumYP1 (easy passes), low Zones (1-2). Model predicts low shot probability (negative β_ABAB, negative zone smooth). Veto condition: if next event after motif is a long ball (>40m) bypassing the compact structure, the shot probability rises independently of motif. Prediction: vetoed motifs show shot rate > model prediction by >2 pp (percentage points) within 15s.
2. Scenario: Betweenness centrality sum at maximum (≈4), all players are high-betweenness hubs. Model smooth is concave: high betweenness decreases effectiveness. Veto condition: red card to opponent removes a pressing player, making the high-betweenness motif temporarily effective despite concave prediction. Prediction: shot probability increases by ≥ smooth function drop magnitude between high and moderate betweenness.
3. Scenario: SumYP3 (potential) high, but match clock >75th minute. Model has f3 (game time) and f7 (time since last event) in pass GAMMs but motif model doesn't include match clock directly except through generated probabilities. Veto condition: fatigue-induced defensive errors late in game make high-potential motifs even more effective than smooth function predicts. Prediction: in last 15 min, the slope of SumYP3 smooth steepens (higher marginal effect) vs first 15 min.

I need to ensure total words >= 1000. Let me write generously. THINK_TRACE needs >=400 words by itself. I'll aim for ~500-600 there. Other sections ~150-250 each. Total should exceed 1000 easily.

Let's write.

Important: No mention of betting lines (spreads, totals, moneylines, odds). The word "odds" might slip in when discussing logistic regression odds. I should avoid saying "odds ratio" or "odds". I can say "probability", "logit", "coefficient". Avoid "odds".

Also avoid fake ratios. Only use equations from paper.

Citations: Use [PAGE N] exactly.

Let me draft the response now.
</NATIVE_REASONING>

<THINK_TRACE>
The data pipeline begins on [PAGE 3] with 960 Eliteserien matches from 2014–2017 recorded by Opta24Feed, containing 749,859 passes from 831 players. These are parsed into 203,313 three-pass motifs under strict graph constraints: sequential passes within the same passing sequence, recipient of pass n equals passer of pass n+1, all players from the same team, and each pass completed within 5 seconds of the previous event. After dropping motifs where predicted pass probabilities are undefined, the final estimation sample is N = 203,208 observations [PAGE 7]. The dependent variable YM is binary: 1 if the motif leads to a shot within 15 seconds of the final pass, 0 otherwise [PAGE 4]. This 15-second window introduces an attribution lag: the shot need not follow immediately, so unmodeled intermediate events (dribbles, fouls, defensive clearances) sit between motif completion and shot occurrence. This is a gray-zone measurement error: the model credits the motif for shots that may be several possessions removed.

The estimator is a generalized additive model with a Bernoulli conditional distribution and logit link [PAGE 3]: η_i = X_iβ + Σ_j f_j(x_ji), P_i = e^{η_i}/(1+e^{η_i}). Fixed effects were selected via Wald test; smooth terms were not tested as fixed effects [PAGE 6]. A crucial specification gray zone appears in Table 4 [PAGE 7]: although ABCD was the initial reference category (four distinct players), the Wald test removed two motif types, leaving ABCA and ABAC pooled with ABCD as the joint reference. ABAB (β = −0.111, SE 0.046, p<0.05) and ABCB (β = −0.095, SE 0.022, p<0.001) retain negative coefficients. The paper admits it is “difficult to understand” why ABCA and ABAC are statistically indistinguishable from ABCD [PAGE 8], indicating an arbitrary reference-category collapse that weakens causal interpretability of motif-type effects.

The generated-regressor problem is acute. SumYP_k (k=1,2,3) are sums of predicted probabilities from three GAMMs in Håland et al. (2020), measuring pass difficulty, pass risk, and pass potential [PAGE 4]. Each lies in [0,3] because three passes are summed [PAGE 5]. These are regressors in the motif model but are themselves estimated objects, so their standard errors ignore first-stage estimation error; Table 4’s significance stars therefore understate true uncertainty. Smooth-term interpretation reveals counter-intuitive but theoretically coherent patterns [PAGE 8]: higher SumYP1 (easier passes) reduces shot probability because easy passes occur farther from the opponent’s goal; higher SumYP2 (passes unlikely to lose possession) also reduces shot probability for the same spatial reason; the optimal risk level is intermediate. SumYP3 has a positive slope, as expected [PAGE 9].

Centrality measures are sums across the four players in the motif, bounded [0,4] for closeness, betweenness, and clustering, and [0,3] for PageRank passer/recipient terms [PAGE 5]. Betweenness shows a concave smooth: moderate betweenness maximizes effectiveness, while extreme values reduce it [PAGE 10]. Closeness is negatively sloped, suggesting defensive or central players appear in successful motifs more often than offensive hubs [PAGE 9]. Clustering is positive [PAGE 9]. PageRank effects are network-specific: negative for pass-difficulty and pass-risk networks, positive for pass-potential network [PAGE 10]. The zones variable counts unique pitch zones among the six pass start/end points (pitch divided into 21 zones), treated as continuous despite discreteness [PAGE 6], with average zones per motif type in Table 5: ABAB 2.29, ABAC 2.88, ABCA 2.89, ABCB 2.94, ABCD 3.52 [PAGE 7]. The positive zones smooth supports the compact-motif finding [PAGE 10].

Model validation: AUC-ROC is acceptable per Hosmer Jr et al. (2013) guidelines; AUC-PR is low because shots are rare [PAGE 7]. Hosmer–Lemeshow calibration uses B=100 random samples at α=0.05; good fit if fewer than 10 samples reject H0 [PAGE 7]. This passed for n=1000 and n=5000. No team or player random effects are included in the motif GAM despite repeated motifs nested within teams, violating independence and likely understating standard errors. External validity is limited to Eliteserien, which the authors explicitly state is not among Europe’s best leagues [PAGE 13]. Shots are used rather than goals; the authors note compact motifs might be more effective for goals specifically [PAGE 13]. These are the gray zones that bound the inference.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let a flow motif of size k=4 be an ordered tuple of player labels M = (v_1, v_2, v_3, v_4) with arcs e_{12}, e_{23}, e_{34}, where duplicate labels indicate a player recurs [PAGE 1]. Five types exist: ABAB, ABCA, ABAC, ABCB, ABCD [PAGE 1].

The dependent variable is defined on [PAGE 4]:
YM_i = 1 if motif i leads to a shot within Δt = 15 s after pass 3; 0 otherwise. Own goals count as shots for the attacking team.

The GAM uses the logit link [PAGE 3]:
logit(P_i) = ln( P_i / (1 − P_i) ) = η_i = X_i β + Σ_{j=1}^{J} f_j(x_{ji}),
with conditional mean
P_i = Pr(YM_i = 1 | η_i) = exp(η_i) / (1 + exp(η_i)) = 1 / (1 + exp(−η_i)).

Three GAMMs from Håland et al. (2020) generate predicted probabilities ŶP_k^{(p)} for pass p∈{1,2,3} and criterion k∈{1,2,3}: pass difficulty, pass risk (follow-up success), pass potential (shot within 15 s) [PAGE 4]. Motif-level sums:
SumYP_k = Σ_{p=1}^{3} ŶP_k^{(p)}, k∈{1,2,3}, each term ∈ [0,1], so SumYP_k ∈ [0,3] [PAGE 5].

Centrality sums [PAGE 5]: Closeness, Betweenness, Clustering ∈ [0,4] (four players). PageRankRecipient_i and PageRankPasser_i ∈ [0,3] (three players), for i∈{1,2,3} networks. PageRankPasser_2 is not used [PAGE 5].

Motif-type fixed effect: indicator MotifType_m for m∈{ABAB, ABCB}; reference category pools ABCD, ABCA, ABAC after Wald-test removal [PAGE 7]. Table 4 estimates [PAGE 7]: β_ABAB = −0.111 (SE 0.046, p<0.05); β_ABCB = −0.095 (SE 0.022, p<0.001); β_0 = −0.503 (SE 0.067, p<0.001). Negative fixed-effect coefficients imply reduced probability of a shot [PAGE 7].

Zones variable Z_i = |{unique pitch zones touched by passes 1–3}| ∈ [1,6], pitch divided into 21 zones [PAGE 6], entered as continuous smooth [PAGE 6]. Table 5 average zones [PAGE 7]: ABAB 2.29; ABAC 2.88; ABCA 2.89; ABCB 2.94; ABCD 3.52.

All smooth terms in Table 4 are significant [PAGE 7]: SumYP_1 (***), SumYP_2 (***), SumYP_3 (***), Closeness (*), Betweenness (*), Clustering (***), PageRankRecipient_1 (***), PageRankRecipient_2 (***), PageRankRecipient_3 (***), PageRankPasser_1 (***), PageRankPasser_3 (***), Zones (***).

Sample and validation [PAGE 3, PAGE 7]: N_matches = 960; N_passes = 749,859; N_players = 831; N_motifs_initial = 203,313; N_motifs_final = 203,208. AUC-ROC acceptable; AUC-PR low due to skewed positives. Hosmer–Lemeshow: B = 100 random samples, α = 0.05, good fit if <10 rejections; passed for n = 1,000 and n = 5,000 [PAGE 7].

No betting lines, spreads, totals, or moneylines appear in the source and are not referenced here.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage starts with Milo et al. (2002), who introduced network motifs as simple building blocks of complex networks [PAGE 1, References]. Gyarmati et al. (2014) adapted this to football by defining flow motifs over passing sequences with unlabeled nodes, fixing k=4 nodes (three passes) [PAGE 1]. Peña and Navarro (2015) extended motifs to player-level style identification [PAGE 2]. Perdomo Meza (2017) argued that four nodes and three passes is the optimal motif size and added spatial information [PAGE 2]. Malqui et al. (2019) layered ball-trajectory endpoints onto motif visualization [PAGE 2]. Bekkers and Dabadghao (2019) distinguished possession motifs from shot-leading motifs and used machine learning to identify unique players for scouting [PAGE 2]. Pina et al. (2017) regressed offensive-play success on network metrics and found team density negatively associated with success [PAGE 10].

The immediate methodological parents are Håland et al. (2020), who estimated three GAMMs for pass difficulty (YP_1), pass risk (YP_2), and pass potential (YP_3) [PAGE 4], and Wiig et al. (2019), who built weighted passing networks from those outputs and computed centrality measures per player relative to team [PAGE 4–5]. This paper combines both pipelines into a single motif-level GAM.

Multi-week traps arise from temporal non-stationarity. Centrality scores and PageRank values are computed for the season in which the motif occurs [PAGE 5], so week-to-week roster changes, injuries, and fixture congestion shift the underlying network topology without re-estimating the smooth functions. The pass-level GAMMs include smooth terms for game time (f_3), goal difference (f_5), their interaction (f_6), time since last event (f_7), opponent Elo rating (f_8), and month-of-play crossed with grass type (f_9) [PAGE 4, Table 1]. These imply that motif effectiveness is conditional on match state and calendar period; a motif effective in a tight August game on artificial grass may not transfer to a dead-rubber November match on natural grass. The four-season Eliteserien sample further limits external validity because the league is not among Europe’s strongest [PAGE 13], and opponent quality varies week to week via the Elo smooth f_8 [PAGE 4].

Another trap is the reference-category instability: ABCA and ABAC were merged into the reference with ABCD after Wald testing [PAGE 7], so the estimated negative coefficients for ABAB and ABCB are relative to a heterogeneous reference whose composition is not theoretically justified beyond statistical convenience [PAGE 8]. This creates a moving-target problem for week-over-week tactical planning: if the reference pool shifts in a new sample, the sign and magnitude of compact-motif penalties may invert.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression operates when a team concedes or falls behind: managers instinctively revert to compact, repetitive passing (ABAB, ABCB) to suppress turnovers [PAGE 8–10]. The model penalizes exactly these motifs (negative fixed coefficients) and associates them with fewer zones covered (Table 5: ABAB averages 2.29 zones versus ABCD 3.52) [PAGE 7]. Thus the crisis habit is counterproductive for shot generation under the model’s assumptions.

The counter-trap: if a team over-relies on ABCD because it carries the highest baseline probability, opponents can concentrate defensive pressure on the high-betweenness and high-PageRank nodes that anchor those sequences. The betweenness smooth is concave—effectiveness peaks at moderate sums and declines at extremes [PAGE 10]—so saturating the motif with the most central players actively reduces success. Likewise PageRank recipient/passer terms for the difficulty and risk networks have negative slopes [PAGE 10]; making the same “key players” the hub of every motif makes the pattern predictable and less effective. The model therefore contains an endogenous adjustment: motif effectiveness is not a fixed property but degrades with overuse because opponent targeting shifts the smooth-function arguments.

The clock is two-layered. Internally, the 5-second inter-pass gap and 15-second shot-to-motif window define a short-horizon causal graph [PAGE 3–4]. Externally, match clock enters via smooth terms in the parent GAMMs (game time f_3, time played f_4, time since last event f_7) [PAGE 4, Table 1]. Fatigue accumulates late in matches, altering pass difficulty and risk, which propagates into SumYP terms. A team down a goal in the 80th minute faces different SumYP distributions than the same team in the 20th minute, but the motif GAM does not include match minute directly; it inherits clock effects only through the predicted probabilities. This creates a recursive misalignment: the motif model treats a motif at t=10 and t=85 as exchangeable conditional on SumYP, even though defensive compactness and goalkeeper positioning differ systematically by clock time.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: the pitch is partitioned into 21 zones, and a motif may touch at most six zones (start and end of each of three passes) [PAGE 6]. Because each inter-pass gap is capped at 5 seconds, covering four or more zones within one motif implies high-velocity ball movement or player displacement consistent with counter-attacks or transitions rather than structured build-up [PAGE 10]. The positive zones smooth therefore partially proxies transition speed, which the model does not measure directly.

Biomechanical layer: player fatigue and surface interaction enter the parent models as smooth terms for game time, time played, and an indicator for artificial grass (X14), plus a month-by-grass interaction smooth [PAGE 4, Table 1]. Artificial grass changes ball roll, bounce, and sliding mechanics, altering pass completion probability YP_1 and thus SumYP_1. No explicit precipitation, temperature, or wind covariate appears in the motif model; weather is only indirectly proxied by month of play and surface type [PAGE 4, Table 1]. This is a veto boundary: if a match is played in heavy rain or sub-zero conditions, the ball physics shift outside the training distribution of the parent GAMMs, and SumYP_1/2/3 become miscalibrated for that match.

Weather veto proof: The motif GAM inherits all weather sensitivity through generated regressors from Håland et al. (2020), which were estimated on the same Eliteserien data but without explicit weather controls beyond month×grass [PAGE 4, Table 1]. Therefore a cold, wet November fixture on artificial grass will systematically depress pass difficulty and potential predictions relative to a dry summer fixture on natural grass, causing the motif model to understate shot probability for identical motif topology. The model cannot adjudicate this because weather is absent as a direct covariate [PAGE 4–6].

Adjudication rule: any inference about motif effectiveness is vetoed when (a) match weather deviates beyond the month×grass interaction support, (b) the 5-second rule is violated by an off-ball event not recorded in Opta24Feed (e.g., ball out of play), or (c) numerical disadvantage (red card) changes the passing network from 11v11 to 10v11, invalidating centrality scores computed for full-strength teams [PAGE 4–5]. In those regimes, Smooth terms and fixed coefficients lose external validity because the underlying network and pass-probability generators are no longer stationary.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Compact motif in defensive third with high pass difficulty and low zone coverage. Construct an ABAB motif in the defensive third with SumYP_1 near its upper bound (easy passes), Zones = 1–2, and Betweenness sum at the team median. Model prediction: negative β_ABAB plus negative zones smooth implies shot probability well below the intercept-derived baseline. Verifiable veto condition: if the event immediately after pass 3 is a long forward pass (>40 m) that bypasses the compact structure and leads to a shot within 15 s, the motif’s ex-post outcome contradicts the ex-ante model. Prediction: vetoed instances will exhibit shot rates at least 2 percentage points above model-predicted probability because the long ball transitions the sequence out of the low-effectiveness compact manifold before the 15-second window closes.

Scenario 2: Saturated centrality with opponent reduction to 10 players. Motif type ABCD with Betweenness sum near the observed maximum (≈4), PageRankPasser_1 and PageRankRecipient_1 near maximum, all in attacking third. Model prediction: concave betweenness smooth and negative high-PageRank slopes for network 1/2 imply reduced shot probability despite high SumYP_3. Verifiable veto condition: an opponent receives a red card immediately before the motif, creating numerical superiority. Prediction: with one fewer defender, the effective betweenness of the attacking hubs drops because alternative passing lanes open; the shot probability will exceed the model’s concave-smooth prediction by a margin equal to the smooth-function gap between maximum and moderate betweenness sums, verified within the same match before and after the red card.

Scenario 3: High-pass-potential motif late in match under fatigue. Motif with SumYP_3 in the upper decile, Closeness sum moderate, Zones ≥ 4, occurring after the 75th minute. Model prediction: positive SumYP_3 slope and positive zones slope imply elevated shot probability, but no direct match-minute term exists in the motif GAM; fatigue enters only via inherited SumYP estimates from parent GAMMs containing game-time smooths. Verifiable veto condition: compare the marginal effect of SumYP_3 in the first 15 minutes versus the last 15 minutes of matches using the same estimated smooth. Prediction: defensive fatigue late in matches steepens the SumYP_3 smooth, so the observed shot probability for high-SumYP_3 motifs in the final 15 minutes will exceed the model’s constant-smooth prediction by a measurable margin, indicating that the time-invariant smooth is misspecified for end-of-game contexts.
</RLVR_COUNTERFACTUAL_VETOES>