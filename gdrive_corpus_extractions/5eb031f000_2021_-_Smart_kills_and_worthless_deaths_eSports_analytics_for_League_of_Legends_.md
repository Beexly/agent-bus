---
source: "2021 - Smart kills and worthless deaths eSports analytics for League of Legends - Maymin.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Quantitative Analysis in Sports/2021"
pages: 17
model: baidu/ernie-5.5-flash-preview:free
words: 8467
---

<NATIVE_REASONING>
The user has provided a research paper and wants me to analyze it through the lens of the "GSE + GSI Frontier Reasoning Foundry" with specific XML sections. Let me look at what's being asked.

The instructions specify a particular output format with strict invariants:
1. ZERO BETTING LINES: No spreads, totals, moneylines, or odds
2. ZERO TOY EQUATIONS: No fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across specific XML sections.

The XML sections required:
- <THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words)
- <SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown
- <RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps
- <RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock
- <CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof
- <RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions

This is a legitimate analytical task. The paper is a peer-reviewed quantitative sports analytics paper by Philip Maymin about League of Legends analytics, published in the Journal of Quantitative Analysis in Sports. There's nothing harmful here—it's academic analysis of a data science paper.

Let me think about whether there's anything problematic. The "frontier reasoning foundry" framing is unusual but the actual task is: analyze a research paper rigorously using formal math, cite pages, be thorough. The invariants actually push toward MORE rigor and against fabrication, which is good. There are no betting lines to worry about (and the invariant explicitly forbids them, which aligns with content safety around gambling).

The word "veto" in section names like CROSS_LAYER_VETO_ADJUDICATION and RLVR_COUNTERFACTUAL_VETOES — these seem to be about identifying failure modes, breakdown regimes, and counterfactual tests. This is legitimate analytical framing. "RLVR" likely means "Reinforcement Learning from Verifiable Rewards" — the counterfactual veto scenarios would be verifiable predictions/tests that could falsify claims.

Let me just do a genuinely rigorous analysis of this paper. Let me engage deeply with the actual content.

Let me extract the key equations and claims from the paper:

1. In-Game Win Probability Model (Page 7):
logit(WinLoss) = β0 + β1·Minutes Elapsed + β2·Red Kills + β3·Blue Kills + β4·Red Towers + β5·Blue Towers + β6·Red Monsters + β7·Blue Monsters + ϵ

2. Loss function minimized by SGD (Page 7):
∑_{i=1}^{n} [−log(β(i)x_i^T) Y_i=1 − log(1−β(i)x_i^T) Y_i=0]

Wait, this notation is a bit odd. The standard logistic loss should be:
∑ [−Y_i log(σ(x_i^T β)) − (1−Y_i) log(1−σ(x_i^T β))]

The paper writes it a bit loosely as −log(β(i)x_i^T) for Y=1 and −log(1−β(i)x_i^T) for Y=0. This is actually a notational issue — the sigmoid function should wrap the linear predictor. Let me note this as a gray-zone audit item.

3. Full-game win probability (Page 8):
logit(WinLoss) = β0 + β1·Tier + β2·Kills Percentile + ϵ

4. Worthless deaths and smart kills definitions (Page 8): based on whether π (win probability) increased or decreased following the event.

5. The final logistic regression model (Page 11):
y = 1/(1 + e^−(β0 + β1·f1 + β2·f2 + ... + β10·f10))

6. Table 4 estimates:
- Constant: 0.? (obscured but there)
- Favorable fights: 0.0?? z=99.90, effect size 9.42%
- Deaths: 0.0?? z=127.45, effect size −14.78%
- Vision: −0.00?? z=−23.63, effect size −2.21%
- Vision denial: −0.00?? z=−8.26, effect −0.44%
- Carry focus: −0.00?? z=−13.70, effect −0.88%
- Time management: 0.0?? z=102.87, effect 12.41%
- Survivability: −0.0?? z=−55.90, effect −5.71%
- Laning: −0.00?? z=−4.68, effect −0.57%
- Gold: 0.00?? z=19.30, effect 1.46%
- Abilities: 0.00?? z=2.21, effect 0.16%

McFadden pseudo-R² = 0.42

7. Tilt proxy (Page 10): time spent dead by player over preceding 3 min / total time spent dead by anyone on team over same period. Starts at 0.2 by convention.

8. Engagement definition (Page 9): continuous sequence of champion-on-champion damage until 5s elapse with no damage.

9. FFT (Page 13): 80% accuracy, 13% false positive rate, three metrics (worthless deaths percentile, smart kills percentile, map coverage).

Now let me think about the effect size computation. The paper says: "The Effect Size column computes the difference in the probability of winning if the respective factor is 55 versus 45% while all the other input factors are fixed at 50%."

So for a logistic model, effect size = σ(β0 + β_i·0.55 + Σothers·0.50) − σ(β0 + β_i·0.45 + Σothers·0.50). Actually since percentiles are the features, and they're scaled... let me think. The features f_i are percentiles (0 to 1 presumably, or 0 to 100). If f_i is in [0,1], then a 10-point change is 0.10.

For Favorable fights: β = the estimate. Effect size = 9.42% for a 10 percentage point change (0.45 to 0.55). 

Let me verify: in a logistic model, dP/dx = β·P(1−P). At P=0.5, dP/dx = β·0.25. For a Δx of 0.10, ΔP ≈ β·0.25·0.10 = 0.025β. If effect size is 0.0942, then β ≈ 3.77. Hmm, but the estimate for favorable fights should be readable. Actually the estimates are garbled in the OCR (shown as blank). Let me not over-claim exact betas since they're obscured. But I can back them out approximately.

Actually, let me reconsider. If effect size = σ(logit(0.5) + β·0.55 + other_terms) − σ(...β·0.45...). With all others at 0.5, and if the constant + Σ β_j·0.5·(others) sets a baseline. Actually the cleanest: at the midpoint all features = 0.5. Let base = β0 + Σ_{j≠i} β_j·0.5 + β_i·0.5. Then:
- P_high = σ(base + β_i·0.05)  [since 0.55 − 0.5 = 0.05]
- P_low = σ(base + β_i·(−0.05))
- effect = P_high − P_low

Hmm, this depends on base. If features are 0.5 across the board and the model is roughly balanced, base ≈ 0 (logit(0.5)=0). Then effect = σ(0.05 β_i) − σ(−0.05 β_i) = 2·(σ(0.05β_i) − 0.5) ≈ 2·(0.05β_i·0.25) = 0.025 β_i for small β_i.

For favorable fights effect 0.0942: β_i ≈ 3.77. Let me check with deaths: effect −0.1478 → β ≈ −5.9. Hmm, but wait, these could be at 55 vs 45 so the delta is 0.10 not 0.05. Let me redo.

Actually "55 versus 45%" means Δx = 0.10 (from 0.45 to 0.55). So:
- effect = σ(base' + β_i·0.55) − σ(base' + β_i·0.45) where base' excludes the i-th term.
- With everything else at 0.50, base' = β0 + Σ_{j≠i} β_j·0.5.

This is getting complicated because base' isn't necessarily 0. Let me just say the effect sizes are consistent with moderate β values and I can back out approximate β using the derivative approximation at the relevant operating point. I'll present this carefully as a gray-zone reconstruction, noting the OCR obscured the exact estimates.

Actually, I realize I should be careful. Let me use the linearization: effect ≈ β_i · 0.10 · P(1−P) evaluated near P=0.5, so P(1−P)=0.25, giving effect ≈ 0.025 β_i.

Favorable fights: 0.0942 / 0.025 = 3.77
Deaths: −0.1478 / 0.025 = −5.91
Time management: 0.1241 / 0.025 = 4.96
Survivability: −0.0571 / 0.025 = −2.28
Vision: −0.0221 / 0.025 = −0.88
Gold: 0.0146 / 0.025 = 0.58
Carry focus: −0.0088 / 0.025 = −0.35
Laning: −0.0057 / 0.025 = −0.23
Vision denial: −0.0044 / 0.025 = −0.18
Abilities: 0.0016 / 0.025 = 0.064

These are plausible logistic coefficients on percentile-scaled (0-1) features. The z-statistics / β give standard errors: e.g., deaths z=127.45, β≈−5.91 → SE ≈ 0.046. Favorable fights z=99.90, β≈3.77 → SE≈0.038. These are tiny SEs consistent with n≈150,000. Good, internally consistent.

Let me verify with z-stat = β/SE. If β_deaths ≈ −5.91 and z = −127.45, SE ≈ 0.0464. For a sample of 150,000, SE of a logistic coefficient on a [0,1] uniform-ish variable: SE ≈ 1/sqrt(n·Var(x)·P(1−P)) roughly. Var(x) for a percentile ≈ 1/12 ≈ 0.083. n=150000. So SE ≈ 1/sqrt(150000·0.083·0.25) = 1/sqrt(3112) = 1/55.8 = 0.0179. Hmm, that gives SE ≈ 0.018, but we backed out 0.046. Off by ~2.5x. This could be due to correlation among features inflating SE (VIF), or the feature scaling being different, or base ≠ 0. Let me not over-index on this. The order of magnitude is right. Actually the discrepancy might be because features aren't uniform percentiles in the regression—they're actual percentile values which after the model might have different variance. Or the effect size calc uses a different base point. I'll note the reconstruction is approximate.

Actually, let me reconsider the effect size. Maybe base is not 0.5-centered. Let me reconsider: if the intercept makes baseline win prob around 0.5 for average player, then base' (excluding term i, others at 0.5) ≈ β0 + 0.5·Σ_{j≠i}β_j. 

Given the coefficients I backed out: Σβ_j (all 10) ≈ 3.77 −5.91 +4.96 −2.28 −0.88 −0.35 −0.23 −0.18 +0.58 +0.064 = let me add: 3.77−5.91=−2.14; −2.14+4.96=2.82; 2.82−2.28=0.54; 0.54−0.88=−0.34; −0.34−0.35=−0.69; −0.69−0.23=−0.92; −0.92−0.18=−1.10; −1.10+0.58=−0.52; −0.52+0.064=−0.456. So Σβ_j ≈ −0.456. Half of that (0.5·Σ) ≈ −0.228. Plus β0. For the constant, if it's around... the OCR shows the constant estimate is obscured. For base ≈ 0, β0 ≈ +0.228. That's plausible. OK so the reconstruction is roughly self-consistent. Good enough for a gray-zone analysis. I'll present the approximate betas but flag the OCR obscuring.

Now, information-theoretic and probability framing. Let me think about what's genuinely interesting to derive here:

1. Mutual information between the advanced stats and win outcome vs basic stats. The paper shows qualitatively that basic stats have flat/sloped relationship and advanced stats have near-linear relationship. I can frame this in terms of I(Stat; Win) — mutual information.

2. The 5-second engagement window is a specific parameterization. Breakdown regime: what if fights have sub-5s lulls?

3. The tilt metric: fraction = (player dead time in 3min)/(team dead time in 3min). Singularity: when team dead time = 0, undefined → they set 0.2 by convention. This is a genuine breakdown regime worth noting.

4. Win probability model breakdown: at game end, terminal WP < 100% because last partial minute excluded (Page 10). Singularity at boundaries.

5. The multicollinearity check: max positive corr 0.51 (carry focus vs favorable fights), max negative −0.75 (vision denial vs gold). VIF considerations.

6. Negative marginal contributions — the survivability paradox. Two explanations: passivity proxy or multicollinearity. But Table 5 shows low multicollinearity, so passivity/aggressiveness explanation is favored. This is a subtle causal inference point — the sign flip between marginal and isolated (Table 7 survivability isolated corr is +0.34 across roles, but marginal is negative). This is a Simpson's-paradox-like / suppression effect. Very interesting.

Let me think about the "sign flip" carefully. Table 7 (isolated correlations): Survivability is positive (~0.34) with win prob. But Table 4 (marginal in logistic) shows survivability coefficient negative (−5.71% effect). This is a classic suppression / confounding-by-collinearity-with-unmeasured-aggressiveness phenomenon. Since Table 5 shows survivability has low pairwise correlation with other included bundles (max 0.14 with carry focus), the sign flip can't be explained by linear multicollinearity among the included features. It must be that conditioning on the other bundles (especially favorable fights, deaths, time management) changes the interpretation: holding fight selection and time usage fixed, extra survivability means passive play. This is a conditional-vs-marginal distinction, an omitted-variable / collider structure question.

Actually this is subtle and worth a rigorous treatment. The isolated correlation includes the indirect path: survivability ↑ because you win (winning teams snowball, take fewer risks, die less). Conditioning on deaths (worthless deaths) and favorable fights blocks the "good team" pathway, leaving only the within-context effect: given you took good fights and managed time, dying less additionally means you're not creating pressure. So survivability becomes a marker of passivity conditional on the rest.

This connects to a causal DAG: Skill → {Favorable fights, Low worthless deaths, Good time mgmt, Win}; and Passivity → {High survivability, Low pressure, → Win}. Conditional on the fight/death/time bundle, survivability loads on passivity.

OK this is genuinely rich. Let me now also think about the "CROSS_LAYER_VETO_ADJUDICATION" — physical/biomechanical/weather veto proof. For eSports there's no weather or biomechanics in the traditional sense, but there ARE analog "physical layer" constraints: patch versions (the game rules change every few weeks — Page 2, Page 7), network latency, the 3-minute spectate delay (Page 5), hardware (GPU), human reaction time / APM (actions per minute). These are the "cross-layer" confounders that could veto a naive reading of the stats. The paper explicitly controls for patch by restricting to the latest patch (~150,000 games, Page 7). So the "veto" is: any cross-patch comparison is confounded because patches change the rules. This is a real breakdown regime.

Let me also note the survivorship/selection in data collection: they start from top-200 Challenger and iteratively expand, only spectating FUTURE games, not importing history (Page 7). This creates a selection bias — the corpus is not a random sample. The tier distribution (half Bronze, quarter Silver, etc., Page 7) reflects the snowball sampling from the top. This is a sampling/identification concern.

Now RLVR counterfactual vetoes — I need 3 verifiable, falsifiable predictions/tests. Let me design genuine ones:

Veto 1: If smart kills / worthless deaths are merely proxies for the un-modeled "team strength" (i.e., endogeneity — good players on good teams both accumulate smart kills AND win), then a within-game, within-team analysis should show the effect. Testable prediction: condition on the in-game WP model; the smart-kill/worthless-death refinement should add explanatory power for the FINAL outcome beyond raw kills/deaths even after controlling for early-game WP. If smart kills have no incremental predictive power beyond early WP × raw stats, the causal claim is vetoed. This is verifiable with the open-sourced data.

Actually, let me make these sharper and genuinely verifiable with the paper's own framework/data (which is open-sourced).

Veto 1 (Reflexivity/Endogeneity): The near-perfect correlation between smart kills+worthless deaths and team WP could be tautological — since smart kills are DEFINED as kills that increase WP, and worthless deaths DEFINED as deaths that decrease WP, then summing them mechanically reconstructs WP change. The FFT and figures could be near-tautological. Falsifiable test: hold out the WP-model; compute smart kills using a WP model trained on a DISJOINT set of features/games, then test out-of-sample correlation with the actual binary win/loss. Prediction: if the correlation collapses out-of-sample (from "practically a straight line" to weak), then the original relationship was overfit/tautological. This is verifiable.

Veto 2 (Patch-nonstationarity): Because the game changes every few weeks (Page 2: "new patches changing or modifying rules or champions approximately every few weeks"), a win-probability model and the coefficient estimates are non-stationary. Falsifiable prediction: re-estimate Table 4 coefficients on games from different patch windows; if coefficients (especially signs of survivability, vision) flip or magnitudes shift beyond CI, the "universal" advice ("don't die, fight good fights, don't waste time") is patch-contingent, not fundamental. Verifiable with time-stamped data.

Veto 3 (Suppression artifact / Simpson reversal): The negative survivability coefficient is claimed to reflect passivity, not multicollinearity (since pairwise corr is low). But suppression can arise even with low pairwise correlation when the suppressor correlates with the OUTCOME and the other predictors jointly. Falsifiable test: add an explicit aggression/passivity proxy (e.g., damage dealt per minute, forward positioning, engage frequency — all in Table 1/3 data) to the regression. Prediction: if survivability's coefficient moves toward zero or positive once aggression is explicitly included, the negative sign was a suppression artifact of an omitted aggression variable (confirming passivity hypothesis but also showing the model was underspecified). If survivability stays negative even with aggression controlled, the passivity story needs revision. Verifiable with the tracked data.

These are good, genuine, falsifiable.

Let me also design the "predictions" more concretely — numeric where possible.

Let me also reconsider the loss function notation issue on Page 7:
The paper writes:
∑_{i=1}^{n} [−log(β(i)x_i^T) Y_{i=1} − log(1−β(i)x_i^T) Y_{i=0}]

This is missing the sigmoid. The correct log-loss (negative log-likelihood) for logistic regression is:
L = −∑ [Y_i log σ(x_i^T β) + (1−Y_i) log(1 − σ(x_i^T β))]
where σ(z) = 1/(1+e^{−z}).

The paper's rendering seems to have dropped the σ(·) and the model definition it references (Wolfram 2017) does wrap in logistic. This is an OCR/typesetting artifact most likely, but I should note it as a gray-zone notation audit. The logit link means the linear predictor is the log-odds; the probability is the sigmoid. Writing the loss as −log(linear predictor) is dimensionally wrong (a linear predictor can be negative, making log undefined) — so it MUST be the sigmoid. Good gray-zone catch.

Also units: the linear predictor β0 + Σβ_j f_j is in log-odds (nats if natural log, which is standard; or the log-odds unit "logit"). The probability is dimensionless in [0,1]. The features f_j for the WP model are counts (kills, towers, monsters) — dimensionless integers — and minutes (in minutes, unit of time). For the full-game model, f_j are percentiles — dimensionless in [0,1] or [0,100]. Need to be careful: the paper says "percentile" and effect sizes computed at 55 vs 45%, suggesting [0,1] scaling with 0.55, 0.45. So β is in log-odds per unit-percentile.

Information units: The McFadden pseudo-R² = 0.42 = 1 − LL(model)/LL(null). In information terms, LL is in nats (natural log). This relates to the reduction in cross-entropy / KL divergence from the null (intercept-only) model. I can express: pseudo-R² = 1 − [H(Y|X)/H(Y)] approximately in the log-loss sense, i.e., the fraction of predictive uncertainty (entropy) resolved. Actually McFadden's is exactly 1 − LL_full/LL_null where LL is the maximized log-likelihood. In terms of KL: LL_full/LL_null... hmm, let me be careful.

LL_null = −n·H(Y) where H(Y) is the entropy of Y under the marginal (in nats, using natural log, and if using MLE the null predicts p̂ = mean). Actually LL_null = n[p̂ log p̂ + (1−p̂)log(1−p̂)] = −n·H_b(p̂) where H_b is binary entropy in nats. For balanced p̂=0.5, H_b = ln 2 ≈ 0.693 nats. LL_full = −n·(cross-entropy of model). So pseudo-R² = 1 − CE_full/H(Y). This is the proportional reduction in average code length (nats per game) achieved by conditioning on X. So 0.42 means the features reduce the per-game predictive log-loss by 42% relative to the base rate. That's a nice information-theoretic reading. I'll present this.

The mutual information I(X;Y) = H(Y) − H(Y|X). And the achievable reduction in cross-entropy ≈ I(X;Y) if the model were perfect. McFadden's 0.42 is a lower bound-ish proxy (it's 1 − CE_model/H(Y), and CE_model ≥ H(Y|X), so pseudo-R² ≤ I(X;Y)/H(Y)). So the true mutual information fraction is ≥ 0.42. Interesting.

Now, let me also handle the FFT: 80% accuracy, 13% false positive rate. Base rate matters. If win base rate is ~50%, then 80% accuracy with 13% FPR. I can compute implied sensitivity/specificity. Actually "false positive rate 13%" — need to define positive. If positive = predicting win. FPR = P(predict win | actually loss) = 0.13. For 80% accuracy with balanced classes: accuracy = 0.5·TPR + 0.5·(1−FPR) = 0.5·TPR + 0.5·0.87 = 0.8 → 0.5·TPR = 0.8 − 0.435 = 0.365 → TPR = 0.73. So sensitivity 73%, specificity 87%. That's a coherent operating point. But LoL win rate isn't exactly 50% per player-game — actually across all player-games it's close to 50% (every game has 5 winners and 5 losers, so pooled win rate = exactly 50%!). Nice — so balanced classes is exact for player-game rows. Good, the FFT arithmetic is clean.

Wait, is it exactly 50%? Each game contributes 5 winners and 5 losers at the player-game level, so yes, the marginal win rate across all player-game rows is exactly 0.5. That's a nice invariant I can state. So H(Y) = ln 2 exactly (1 bit) at the player-game level.

Now let me also think about the effect sizes and information. The largest single-factor effect is Deaths (−14.78% for 55 vs 45 percentile). In nats, near P=0.5, ΔP=0.1478 corresponds to Δlogit ≈ ΔP/(P(1−P)) = 0.1478/0.25 ≈ 0.59 nats ≈ 0.85 bits. So moving from 45th to 55th percentile in worthless-deaths bundle shifts the log-odds by ~0.59 nats. Consistent with β≈−5.9 over a full 0→1 range (0.59 per 0.1 → 5.9 per 1.0). 

Let me also compute the combined information of the three "big" bundles: favorable fights (0.0942), deaths (0.1478), time management (0.1241). These dominate.

Now let me structure the response. The required sections and minimums:

1. <THINK_TRACE> (≥400 words) — multi-hop derivation, gray-zone audit
2. <SOURCE_OPERATORS_AND_EQUATIONS> — formal LaTeX, units, page citations, breakdown regimes
3. <RETROCAUSAL_GENEALOGY> — historical/scientific lineage & multi-week traps (patch cycles!)
4. <RECURSIVE_THEORY_OF_MIND> — crisis habit regression (tilt!) vs counter-trap vs clock
5. <CROSS_LAYER_VETO_ADJUDICATION> — physical/biomechanical/weather veto proof (analog: patch, latency, reaction time, hardware)
6. <RLVR_COUNTERFACTUAL_VETOES> — 3 verifiable RLVR veto scenarios + predictions

Total ≥ 1000 words. Let me aim for a thorough, genuinely rigorous piece. This is a legitimate academic analysis task. The "no betting lines" invariant is naturally satisfied — I won't mention odds/spreads, which is appropriate anyway. The "no toy equations" invariant pushes me toward real LaTeX and real units, which is exactly good scholarship.

Let me be careful with citations — use [PAGE N] and verbatim quotes where I can. Let me pull exact quotes:

- [PAGE 1]: "Nothing else ultimately matters: not the number of kills or deaths of each player, or how much gold was earned, or even how many total turrets or inhibitors were destroyed."
- [PAGE 1]: "regular kills and deaths do not nearly explain as much as smart kills and worthless deaths."
- [PAGE 2]: "It is also constantly evolving, with new patches changing or modifying rules or champions approximately every few weeks."
- [PAGE 5]: "To avoid cheating, Riot broadcasts spectated games on a 3 min delay."
- [PAGE 7]: the logistic regression equation and loss function
- [PAGE 7]: "we chose a random minute from each game, leaving us with millions of independent rows"
- [PAGE 7]: "Only future played games are spectated, so a player's history is not imported."
- [PAGE 8]: "let us call a worthless death one that did not increase your team's estimated win probability and a smart kill one that did."
- [PAGE 8]: the full-game logit equation
- [PAGE 9]: engagement definition "an engagement is a continuous sequence of champion-on-champion damage until 5 s elapse with no damage."
- [PAGE 9]: "an otherwise uninvolved ally is deemed part of the engagement if and only if they are within XP range."
- [PAGE 10]: tilt metric "calculating the time spent dead by the player over the preceding 3 min and dividing it by the total time spent dead by anyone on his team over the same period."
- [PAGE 10]: "starting by convention at 0.2 instead of 0.0 to indicate balance because there were zero individual deaths and zero team deaths."
- [PAGE 10]: terminal WP "The terminal win probability shown is below 100% because the last partial minute of game play is not included."
- [PAGE 11]: "the logistic model y = 1/(1 + e^−(β0+β1f1+β2f2+…+β10f10))"
- [PAGE 12]: "The McFadden (1974) likelihood ratio index or pseudo-R-squared for the regression is 0.42"
- [PAGE 12]: effect size definition "The Effect Size column computes the difference in the probability of winning if the respective factor is 55 versus 45% while all the other input factors are fixed at 50%"
- [PAGE 12]: "several of the bundles have negative marginal contributions, including survivability"
- [PAGE 12]: two explanations "One is that those metrics tend to correspond to a measure of passivity rather than aggressiveness... The other possibility is of multicollinearity among the features."
- [PAGE 12]: "The biggest positive correlation is 0.51 between carry focus and favorable fights... The biggest negative correlation is −0.75 between vision denial and gold."
- [PAGE 13]: FFT "It makes the correct prediction about 80% of the time despite only using three metrics." and "the overall FFT accuracy is 80% with a false positive rate of only 13%."
- [PAGE 13]: FFT decision rule "don't die for no reason; if you do, try for some smart kills; if you can't do that either, at least roam and have decent map coverage."

Let me verify the tilt 0.2 convention. If player has 0 dead time and team has 0 dead time, ratio is 0/0, undefined. They set it to 0.2 "to indicate balance." Why 0.2 not 0.1? Hmm. If there are 5 players on a team and deaths are balanced, each player accounts for 1/5 = 0.2 of team dead time. So 0.2 = the neutral/expected share for one player among five. That's why 0.2 indicates balance, not 0.1 (which would be 1/10, confusing player with all 10). Good catch — 0.2 = 1/5, the fair share for one of five teammates. Let me verify: "dividing it by the total time spent dead by anyone on his team" — team = 5 players. So expected share under balance = 1/5 = 0.2. Yes. This is a nice derivation to include. The 0/0 singularity is resolved by the symmetry prior of 1/N_team = 1/5.

Let me now write this. I'll make it rigorous and well-cited. I'll aim for depth well over 1000 words total across sections. Let me make sure THINK_TRACE is ≥400 words on its own.

Let me draft the effect-size back-calculation cleanly for the equations section. I'll present the general relation:

For a logistic model with feature f_i on percentile scale [0,1] and all other features fixed at 0.5:
effect_size_i = σ(α_{-i} + 0.55 β_i) − σ(α_{-i} + 0.45 β_i)
where α_{-i} = β0 + 0.5 Σ_{j≠i} β_j.

Linearizing about the operating point P̄ = σ(α_{-i} + 0.5β_i):
effect_size_i ≈ 0.10 · β_i · P̄(1−P̄).

If the composite sits near P̄ ≈ 0.5, then P̄(1−P̄) ≈ 0.25 and effect_size_i ≈ 0.025 β_i, so β_i ≈ 40 · effect_size_i.

I'll present the reconstructed β table with the caveat that the OCR obscured the exact printed estimates (the table shows z-stats and effect sizes clearly but the estimate column is garbled in the provided text). I should be honest that I'm reconstructing from the effect size and z-stat, not reading the printed β. Let me note this transparency.

Actually the z-statistics are printed clearly. And effect sizes clearly. So I have two equations per row: effect ≈ 0.025β and z = β/SE. I can get β from effect size (approx) and SE from z. Let me present β ≈ 40·effect and SE = β/z.

Deaths: β ≈ 40·(−0.1478) = −5.91; SE = 5.91/127.45 = 0.0464
Favorable fights: β ≈ 40·0.0942 = 3.77; SE = 3.77/99.90 = 0.0377
Time mgmt: β ≈ 40·0.1241 = 4.96; SE = 4.96/102.87 = 0.0482
Survivability: β ≈ 40·(−0.0571) = −2.28; SE = 2.28/55.90 = 0.0408
Vision: β ≈ 40·(−0.0221) = −0.88; SE = 0.88/23.63 = 0.0373
Gold: β ≈ 40·0.0146 = 0.58; SE = 0.58/19.30 = 0.0302
Carry focus: β ≈ 40·(−0.0088) = −0.35; SE = 0.35/13.70 = 0.0256
Laning: β ≈ 40·(−0.0057) = −0.23; SE = 0.23/4.68 = 0.0491
Vision denial: β ≈ 40·(−0.0044) = −0.18; SE = 0.18/8.26 = 0.0212
Abilities: β ≈ 40·0.0016 = 0.064; SE = 0.064/2.21 = 0.0290

These SEs (0.02–0.05) are internally plausible for n≈150k. Good.

Note the approximation "β ≈ 40·effect" assumes P̄=0.5. For large |β_i|, the linear approximation degrades. For deaths β=−5.91, at f=0.45 vs 0.55 the logit changes by 5.91·0.10=0.591, so σ moves from σ(α−0.05·5.91) ... the nonlinearity matters somewhat, meaning the true β is a bit larger than the linear estimate. I'll flag that the linear reconstruction underestimates |β| for the large coefficients. Good gray-zone honesty.

Now let me write everything. I want this to be genuinely high quality. Let me write each section with real substance.

For RETROCAUSAL_GENEALOGY: lineage of the ideas. Win probability models (Lock & Nettleton 2015 NFL, cited [PAGE 4]); Cervone et al. 2014 POINTWISE NBA [PAGE 4]; Duch et al. 2010 soccer [PAGE 4]; ELO process for ranking [PAGE 6]; fast-and-frugal trees from Gigerenzer/Phillips 2016 [PAGE 13]; McFadden 1974/1978 discrete choice [PAGE 12]. The "multi-week traps": the patch cadence (every few weeks, [PAGE 2]) means any model trained now is stale within weeks — a genealogy of non-stationarity. Also the lineage of "box score vs advanced stats" mirrors baseball's sabermetrics (though not cited). The multi-week trap is the meta point: eSports' fast patch cycle is an accelerated version of the roster/rule drift in traditional sports. I'll frame the genealogy as: discrete-choice econometrics → sports WP models → eSports, and the "trap" is temporal non-stationarity baked into the domain.

For RECURSIVE_THEORY_OF_MIND: The tilt analysis [PAGE 10] is literally a model of a player modeling their own emotional state and opponents modeling it. "Crisis habit regression" = tilt (dying, returning, dying again aggressively — "inting"). The theory of mind: opponent anticipates tilt and exploits; player must model that they're being modeled. "Counter-trap": the 3-minute window is designed so "inting... will quickly show up on this metric" [PAGE 10]. The "clock" = the 3-minute rolling window, the 60s death timers, 30s walk-back. I'll do a recursive ToM analysis of tilt as an information game, and audit the metric's exploitability (a player aware of the metric could mask tilt by timing deaths > 3min apart). This is a genuine game-theoretic gray zone.

For CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather analogs. In LoL: 
- "Weather" analog = patch/ruleset (the exogenous environment that shifts).
- "Biomechanical" analog = human reaction time, APM, the GPU/hardware rendering the client, network latency.
- The 3-minute spectate delay [PAGE 5] and the requirement that the client be running to decode traffic [PAGE 5].
Veto proof: any inference that treats cross-patch aggregates as homogeneous is vetoed because the data-generating process (rules) changes. The paper's own defense: restrict to latest patch (~150k games, [PAGE 7]). I'll formalize a "patch stratum" random effect and show the pooled estimator is biased if patch effects correlate with feature distributions. Also the survivorship of the iterative snowball sampling [PAGE 7] as a selection veto.

Let me write the veto as a proof sketch: Let Y = win, X = stat bundle, P = patch. Pooled model estimates E[Y|X] averaging over P. If the true model is Y = f(X, P) with f varying by P (rule changes), then the pooled β̂ is a variance-weighted average of patch-specific β_p, and out-of-patch prediction is biased. Verifiable via patch-stratified re-estimation.

For RLVR_COUNTERFACTUAL_VETOES: I designed 3 above. Let me finalize with concrete, verifiable predictions tied to the open-sourced data and the paper's own numbers. I'll phrase each as a testable null and a predicted outcome under the paper's thesis vs under the veto.

Let me make sure the predictions are numeric/verifiable:
1. Tautology/out-of-sample: If smart-kill/worthless-death refinement is tautological (defined via WP model), then predicting the binary outcome from a WP model trained on DISJOINT features should collapse the "straight line." Prediction: out-of-sample rank correlation between refined metrics and outcome drops from ~0.9 (in-sample "practically a straight line") toward the raw-stat correlation (~modest). Verifiable: split by patch or by random game partition.

Actually, more carefully: the WP model uses kills/towers/monsters per minute. Smart kills/worthless deaths are derived from that same WP model. Then the full-game regression predicts win/loss from percentiles of these derived metrics. The concern: circularity. But the full-game outcome (win/loss) is NOT the same as the WP trajectory, so it's not fully tautological — a player could have great smart-kill count in a losing effort. Still, the concern about the "straight line" in Figure 2 being partly mechanical is worth a test. Prediction: if you predict win/loss from a WP model whose coefficients were fit on the SAME games, the smart-kill/worthless-death percentiles will over-predict; using cross-fit (train WP on games A, evaluate smart-kill metrics on games B) the relationship weakens measurably (e.g., pseudo-R² of the FFT drops below 0.42-equivalent). Verifiable.

2. Patch non-stationarity: re-estimate Table 4 on ≥2 disjoint patch windows. Prediction under paper's thesis: signs and rough magnitudes of the big three (favorable fights +, worthless deaths −, time management +) are stable; but the small/negative ones (survivability, vision, laning, abilities) will show sign instability across patches (because they're near zero, SE-crossing-zero). Verifiable and specific: survivability effect size −5.71% ± CI; predict CI overlaps 0 in at least one patch stratum.

3. Suppression/aggression omission: add explicit aggression proxies (damage/min, engage count — all in Table 1) to the Table 4 regression. Prediction: survivability coefficient (currently β≈−2.28, effect −5.71%) attenuates toward 0 (e.g., |effect| < 2%) once aggression is controlled, confirming the passivity/suppression hypothesis [PAGE 12]. If it does NOT attenuate, the "passivity" explanation [PAGE 12] is falsified and the negative sign reflects something else (e.g., genuine causal harm of over-investing in defense). Verifiable with tracked data.

These are three crisp, falsifiable, verifiable vetoes with numeric predictions. 

Now let me write it all up. I'll keep it rigorous, cite pages, use LaTeX. Let me make sure I use proper notation. I'll write the math inline with LaTeX-style since that's what's requested.

Let me be mindful of length and quality. I'll write substantial sections. Let me begin.

One more: units. Log-odds/logit is dimensionless but measured in nats (natural log). Percentiles dimensionless [0,1]. Minutes in minutes (SI: 60 s). Kills/towers/monsters: dimensionless counts. Effect size: probability points (dimensionless, [−1,1]). McFadden R²: dimensionless [0,1], interpretable as fraction of nats resolved. Entropy H(Y) = ln 2 nats ≈ 0.693 nats = 1 bit at balanced classes.

Let me write. I'll produce a strong answer. I won't use tools since this is pure analysis of provided text. I'll produce the XML sections.

Let me make sure I don't exceed reasonable bounds but hit the depth requirement (≥1000 words total, THINK_TRACE ≥400). I'll write generously.

Let me write the final response now.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's spine is a single inferential move: replace raw event counts with win-probability-conditioned counts, then claim the conditioned version explains outcomes "almost perfectly" [PAGE 1]. I need to audit whether that is a discovery or a definitional artifact, and where the numeric apparatus breaks.

Multi-hop reconstruction. Step 1: the in-game win-probability (WP) model is a logistic regression on seven integer counts plus elapsed time [PAGE 7]: logit(WinLoss) = β₀ + β₁·Minutes + β₂·RedKills + β₃·BlueKills + β₄·RedTowers + β₅·BlueTowers + β₆·RedMonsters + β₇·BlueMonsters + ϵ. Step 2: an "event" (kill/death) is stamped with the sign of Δπ, the change in fitted WP: a smart kill is one where Δπ > 0, a worthless death where Δπ ≯ 0 ("a worthless death one that did not increase your team's estimated win probability and a smart kill one that did," [PAGE 8]). Step 3: these per-player counts are converted to within-tier percentiles and fed to a second logistic regression on the binary final outcome [PAGE 8, PAGE 11]. The headline result is that percentile(smart kills, worthless deaths) traces a near-straight line against team win probability, while raw kills/deaths slope weakly [PAGE 3, PAGE 10].

Here is the gray zone. The WP model at step 1 is itself built from kills, towers, and monsters — the very events being re-scored at step 2. So Δπ is a deterministic function of the same count variables that raw "kills" already encode. The refinement is not injecting new information; it is applying a learned, monotone reweighting (β₂…β₇) to the event stream and then relabeling events by the sign of a local derivative of that reweighting. That the reweighted version correlates better with the final outcome than the raw count is close to guaranteed whenever the β's have the "correct" signs (more own kills/towers/monsters raise WP). The genuinely non-trivial empirical claims are therefore (a) that Δπ conditioning beats raw counts by the specific margins shown, and (b) that the *marginal* logistic coefficients in Table 4 line up as "fight good fights, don't die, don't waste time" [PAGE 13]. Claim (a) risks partial tautology; claim (b) contains a real surprise.

The surprise is the sign reversal. Isolated (bivariate) correlations of Survivability with winning are solidly positive across all five roles — roughly +0.34 top, +0.34 jungle, +0.35 mid, +0.38 adc, +0.34 support (Table 7 [PAGE 13]). Yet in the joint model Survivability enters *negative* (effect size −5.71%, z = −55.90, Table 4 [PAGE 12]). The same reversal hits Vision, Vision denial, Carry focus, and Laning. The author offers two explanations [PAGE 12]: passivity-proxy or multicollinearity. But Table 5 [PAGE 13] shows Survivability's largest pairwise correlation with any included bundle is ≈ 0.14 (with Carry focus), and the two flagged large correlations are +0.51 (carry focus ↔ favorable fights) and −0.75 (vision denial ↔ gold). Low pairwise collinearity does *not* rule out suppression: a variable can flip sign under conditioning even with near-zero marginal correlation when it proxies an omitted construct (aggression) that the included bundles jointly absorb. So the passivity story is plausible but under-identified by the reported diagnostics — a point I convert into a falsifiable test below.

Sampling and stationarity audit. The corpus is not random: it is grown by snowball sampling from the top-200 Challenger list, spectating only *future* games and never importing history [PAGE 7]. That fixes the marginal win rate of the player-game rows at exactly 1/2 (every game contributes five winners and five losers), which conveniently makes the base-rate entropy H(Y) = ln 2 nats = 1 bit and validates the balanced-class reading of the FFT's "80% accuracy / 13% false-positive rate" [PAGE 13]. Finally, the whole apparatus sits on a moving substrate: patches alter rules "approximately every few weeks" [PAGE 2], so any coefficient vector β̂ is a snapshot of a non-stationary data-generating process. The author's mitigation is to restrict to the latest patch (~150,000 games, [PAGE 7]) — sound, but it means the fitted β's are patch-conditional, not universal.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**1. In-game win-probability operator (logit link).** From [PAGE 7], verbatim structure:
$$\operatorname{logit}(\text{WinLoss}) = \beta_0 + \beta_1 M + \beta_2 K_R + \beta_3 K_B + \beta_4 T_R + \beta_5 T_B + \beta_6 N_R + \beta_7 N_B + \epsilon$$
Units: the linear predictor is in **log-odds (nats, natural log)**; $M$ in minutes (SI base: 60 s); $K,T,N$ are dimensionless event counts. The probability is $\pi = \sigma(\eta) = (1+e^{-\eta})^{-1}$, dimensionless on $[0,1]$.

**Loss / gray-zone notation audit.** [PAGE 7] renders the SGD objective as $\sum_i [-\log(\beta^{(i)}x_i^\top)Y_{i=1} - \log(1-\beta^{(i)}x_i^\top)Y_{i=0}]$. As written this is ill-posed: a raw linear predictor $\beta^\top x$ can be negative, so $\log(\beta^\top x)$ is undefined. The referenced implementation (Wolfram 2017) wraps it in the logistic, so the correct negative log-likelihood is
$$\mathcal{L}(\beta) = -\sum_{i=1}^n \Big[Y_i \log \sigma(x_i^\top\beta) + (1-Y_i)\log\big(1-\sigma(x_i^\top\beta)\big)\Big]\quad[\text{nats}].$$
The printed form is an OCR/typesetting drop of the $\sigma(\cdot)$; the intended operator is the sigmoid-composed log-loss. Flagged as a notation breakdown, not a substantive error.

**2. Event-conditioning (smart kill / worthless death).** [PAGE 8]: classify event $e$ at time $t$ by $\operatorname{sign}(\Delta\pi_e)$ where $\Delta\pi_e = \pi(t^+) - \pi(t^-)$ from operator (1). Breakdown regime: any event occurring while $\pi \approx$ constant (mid-game plateaus) yields $\Delta\pi_e \approx 0$, so the smart/worthless label is dominated by numerical noise in $\hat\beta$; the binary relabeling is ill-conditioned exactly where $|\partial\pi/\partial(\text{count})|$ is smallest.

**3. Full-game regression.** [PAGE 8], [PAGE 11]:
$$\operatorname{logit}(\text{WinLoss}) = \beta_0 + \beta_1\,\text{Tier} + \beta_2\,\text{MetricPercentile} + \epsilon,\qquad y = \frac{1}{1+e^{-(\beta_0 + \sum_{k=1}^{10}\beta_k f_k)}}.$$
$f_k \in [0,1]$ (percentiles), dimensionless; $\beta_k$ in nats per unit percentile.

**4. Effect-size operator and back-reconstruction.** [PAGE 12] defines effect size as $\Delta P = \sigma(\alpha_{-k} + 0.55\beta_k) - \sigma(\alpha_{-k} + 0.45\beta_k)$ with others fixed at 0.50, $\alpha_{-k} = \beta_0 + 0.5\sum_{j\ne k}\beta_j$. Linearizing at operating point $\bar P$: $\Delta P \approx 0.10\,\beta_k\,\bar P(1-\bar P)$; with $\bar P \approx 0.5$, $\Delta P \approx 0.025\,\beta_k \Rightarrow \beta_k \approx 40\,\Delta P$. The provided text garbles the printed Estimate column, so I reconstruct from the legible effect sizes and z-statistics (transparent caveat: the linear inversion *underestimates* $|\beta_k|$ for the largest coefficients because $\sigma$ is convex there):

| Bundle | Effect size [PAGE 12] | $\hat\beta_k \approx 40\Delta P$ | z | $\mathrm{SE}=\hat\beta/z$ |
|---|---|---|---|---|
| Deaths | −14.78% | −5.91 | 127.45 | 0.046 |
| Time mgmt | +12.41% | +4.96 | 102.87 | 0.048 |
| Favorable fights | +9.42% | +3.77 | 99.90 | 0.038 |
| Survivability | −5.71% | −2.28 | 55.90 | 0.041 |
| Vision | −2.21% | −0.88 | 23.63 | 0.037 |
| Gold | +1.46% | +0.58 | 19.30 | 0.030 |
| Carry focus | −0.88% | −0.35 | 13.70 | 0.026 |
| Laning | −0.57% | −0.23 | 4.68 | 0.049 |
| Vision denial | −0.44% | −0.18 | 8.26 | 0.021 |
| Abilities | +0.16% | +0.06 | 2.21 | 0.029 |

**5. Information accounting.** McFadden pseudo-$R^2 = 1 - \mathcal{L}_{\text{full}}/\mathcal{L}_{\text{null}} = 0.42$ [PAGE 12]. In nats this is the fraction of base-rate log-loss resolved: since $\mathcal{L}_{\text{null}} = -n H(Y) = -n\ln 2$ (balanced classes) and $\mathcal{L}_{\text{full}} = -n\,\mathrm{CE}(Y\mid X)$, we get $R^2_{\text{McF}} = 1 - \mathrm{CE}(Y\mid X)/H(Y) \le I(X;Y)/H(Y)$. Thus the features resolve $\ge 0.42\times 1\,\text{bit} = 0.42$ bit per player-game, and true mutual information $I(X;Y) \ge 0.42$ bit. Largest single contribution: Deaths, $\Delta P = 0.1478 \Rightarrow \Delta\,\text{logit} \approx 0.1478/0.25 = 0.59$ nats $\approx 0.85$ bit for a 45→55 percentile shift.

**6. Tilt operator and its singularity.** [PAGE 10]: $\text{Tilt} = D_{\text{player}}^{[t-3,t]}/D_{\text{team}}^{[t-3,t]}$ (dead-time seconds). Singularity at $D_{\text{team}}=0$: $0/0$. Resolution: set to $0.2$ "by convention" — which equals $1/N_{\text{team}} = 1/5$, the fair-share prior for one of five teammates, not $1/10$. Correct neutral value.

**7. Engagement operator.** [PAGE 9]: an engagement is "a continuous sequence of champion-on-champion damage until 5 s elapse with no damage," with membership by XP-range. Breakdown: sub-5-s tactical disengages merge distinct fights (over-counting); the 5 s constant is borrowed from the in-game "in-combat" powerup timer (Boots of Mobility), so it inherits a *game-mechanic* rather than an empirically fitted timescale.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage is discrete-choice econometrics → sports win-probability → eSports. The estimation backbone is McFadden's conditional logit (1974) and its travel-behavior refinement (1978) [PAGE 12, references], imported wholesale as the "excellent fit" benchmark (0.20–0.40). The win-probability wrapper descends from Lock & Nettleton's NFL random-forest WP (2015) and Cervone et al.'s POINTWISE NBA optical-tracking valuation (2014), plus Duch, Waitzman & Amaral (2010) on individual contribution to team outcome in soccer [PAGE 4]. Maymin's declared novelty over Hodge et al. (2017) is deliberate *model simplicity*: a single pooled model across all minutes rather than one model per minute, because "our metrics needed to be the simplest possible" and extra features "did not substantively improve the win probability model" [PAGE 4]. The rating substrate is explicitly ELO ("Ranks are determined essentially via an ELO process… much like a chess rating," [PAGE 6]), and the decision-rule layer is Gigerenzer-school fast-and-frugal heuristics via the FFTrees implementation (Phillips 2016) [PAGE 13].

The multi-week trap is the domain's own clock. The paper states patches change rules "approximately every few weeks" [PAGE 2] and that the corpus "spanned several LoL patches, each of which can significantly affect gameplay" [PAGE 7]. This is the accelerant that makes eSports attractive (millions of games) and treacherous (non-stationary rules) at once. Formally, the estimand is $\beta^{(p)}$ indexed by patch $p$; the pooled estimate is a variance-weighted average $\bar\beta = \sum_p w_p \beta^{(p)}$. If patch changes shift feature distributions (e.g., a monster/objective rework alters the value of the Monsters counts in operator 1), then $w_p$ correlates with $\beta^{(p)}$ and $\bar\beta$ is a Simpson-weighted blend that predicts poorly out-of-patch. The genealogy's lesson: the same "more data" advantage that separates eSports from traditional sports (a "full century of NBA seasons" in ~150k games, [PAGE 7]) is precisely what lulls an analyst into treating a fast-mutating process as stationary. Sabermetrics spent decades on baseball's near-frozen rulebook; LoL compresses that drift into weeks. The lineage thus carries a built-in expiry date on every coefficient.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Tilt is the paper's only explicit model of an agent modeling minds, and it is a genuine recursive game. Definition [PAGE 10]: tilt is "situations where a player plays suboptimally because of emotional turmoil," the extreme being death-in-lane → immediate aggressive re-engage → death again ("inting"). The metric — dead-time share over a rolling 3-minute window, chosen because "death timers range up to around 60 s, and it takes approximately 30 s to walk back to the middle of the map" [PAGE 10] — is a *behavioral readout of an internal state*, observed by an analyst and, in principle, by opponents.

Level-0: the tilted player acts on raw affect. Level-1: the opponent infers tilt from the death pattern and baits further aggression. Level-2: a self-aware player infers that the opponent has inferred tilt, and suppresses it. The published metric is a level-1 instrument; a sophisticated player performs level-2 masking. This yields the counter-trap: because tilt is defined on a *3-minute* window with a hard 60 s death-timer ceiling, a player who understands the metric can defeat it by spacing deaths more than 3 minutes apart, or by manufacturing "productive" deaths (taking an inhibitor on the way out, which [PAGE 8] says is "virtually always 'worth'") to launder a tilt spiral into worthless-death-neutral events. The metric is thus gameable at the timescale boundary — its 180 s window is simultaneously its detection power and its exploit surface.

Crisis-habit regression vs clock. Under emotional load, players regress to habitual (higher-frequency, lower-variance) action patterns — the "crisis habit" prior. The 3-minute clock is calibrated to the game's death-timer physics (≈60 s) plus rotation time (≈30 s), so it captures at most ~2–3 death cycles. That is short enough to flag acute inting but long enough that chronic low-grade tilt (one avoidable death every ~4 minutes) never accumulates a high share, because the numerator and denominator both grow. The metric has a blind spot exactly at the frequency where tilt is most corrosive over a full game. The paper half-acknowledges this: the raw share "by itself provides little context," and only the overlay of *what kinds of team fights* the deaths occurred in (favorable → balanced → three unfavorable in the example, [PAGE 10]) disambiguates tilt from legitimate losses. That overlay is the counter-trap's counter: it forces the analyst to model *why* the player died, not merely *how often*, converting a gameable scalar into a context-conditioned trajectory that is far harder to spoof because fight-type is inferred from the optical-tracking layer, not self-reported.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Traditional sports vetoes come from biomechanics and weather; eSports has structural analogs that must be adjudicated before any stat is trusted.

**Weather analog = the patch/ruleset.** This is an exogenous shock to the data-generating process. Proof sketch of the veto: let the true outcome model be $Y = f(X, P) + \varepsilon$ with $P$ the patch. The paper estimates a single $\bar\beta$ over mixed patches [PAGE 7]. If $\exists\, p,p'$ with $\beta^{(p)} \ne \beta^{(p')}$ (a rework that changes the marginal value of, say, monster counts in operator 1), then $\bar\beta$ is a biased predictor for any specific patch, and the "universal advice" ("fight good fights, don't die, don't waste time," [PAGE 13]) is only the majority-patch projection. Verdict: veto *sustained* against cross-patch pooling; *overridden* within the single latest patch the author actually uses (~150k games, [PAGE 7]). Any claim of temporal generality is vetoed.

**Biomechanical analog = human reaction time and APM.** All input data are human motor outputs capped by reaction latency and actions-per-minute. The "activity" bundle (attacks/min, ability counts Q/W/E/R, combo damage/min, Table 3 [PAGE 8]) is bounded above by neuromuscular throughput, which is itself rank-dependent. This confounds "productivity" metrics with raw mechanical speed: a Challenger's higher attacks/min is partly physiology, not decision quality. Veto *partially sustained*: activity-bundle coefficients (Abilities is only significant at p<0.05, z=2.21, [PAGE 12]) may absorb a mechanical-speed component rather than a strategic one. This is consistent with Abilities being the weakest predictor in Table 4.

**Hardware/network layer = rendering and latency.** The extraction pipeline requires a GPU-backed game client "running and decoding the network traffic" [PAGE 5], and spectated games are broadcast "on a 3 min delay" [PAGE 5]. Two consequences: (i) the 3-minute delay forbids real-time causal readout — the WP annotations are post-hoc, so any "in-the-moment" decision value (POINTWISE-style) is reconstructed, not live; (ii) frame-sampling of the minimap for champion positions is bounded by render rate, so sub-frame events (instantaneous burst combos) can be under-resolved. Veto *sustained* on real-time causal claims; *overridden* on retrospective analytics, which is the paper's actual scope.

**Selection layer = snowball sampling.** Starting from top-200 Challenger and adding only future opponents/teammates [PAGE 7] yields a corpus whose tier mix (half Bronze, quarter Silver, <1% Master/Challenger) is a sampling artifact, not the ranked population. Any percentile computed "within tier" is internally valid but the *cross-tier* structure is not representative. Veto *sustained* against population-level generalization of Tier effects; *overridden* for within-tier percentile logic, which is how the metrics are actually used.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable, falsifiable vetoes, each with a numeric prediction testable on the paper's open-sourced data.

**Veto 1 — Tautology of the WP-conditioned refinement.** Because smart kills / worthless deaths are *defined* by $\operatorname{sign}(\Delta\pi)$ from a WP model whose inputs are the same kill/tower/monster counts [PAGE 7, PAGE 8], the near-straight line in Figure 2 may be partly mechanical. *Null (paper's thesis):* the refinement adds genuine out-of-sample signal. *Test:* fit the WP model (operator 1) on gameset A, apply it to score events in a disjoint gameset B, then regress final win/loss on the resulting smart-kill/worthless-death percentiles. *Prediction:* if tautological, the FFT pseudo-fit and the Figure-2 slope *degrade materially* out-of-fit — specifically the FFT accuracy falls below its in-sample 80% [PAGE 13] toward the raw-kills baseline, and the smart/worthless-vs-outcome rank correlation drops from "practically a straight line" toward the weak raw-stat slope. *Falsifier:* if accuracy holds ≥ 80% out-of-fit, the refinement is real and the tautology veto fails.

**Veto 2 — Patch non-stationarity of the coefficients.** *Null:* Table 4 β's are stable across patches. *Test:* re-estimate the ten-bundle logistic regression on ≥2 disjoint patch windows within the corpus [PAGE 7]. *Prediction:* the three dominant coefficients keep sign and rough magnitude — Deaths $\Delta P \approx -14.8\%$, Time management $\approx +12.4\%$, Favorable fights $\approx +9.4\%$ [PAGE 12] — while the near-zero negatives (Survivability $-5.71\%$, Laning $-0.57\%$, Vision denial $-0.44\%$, Abilities $+0.16\%$) exhibit *sign instability*, with at least one 95% CI crossing 0 in at least one patch stratum. *Falsifier:* if all ten signs are patch-invariant, the "universal advice" survives; if the big three themselves flip, the whole framework is patch-contingent and the generality claim is vetoed.

**Veto 3 — Suppression vs passivity for the negative Survivability coefficient.** Isolated correlation of Survivability with winning is ~+0.34 across all roles (Table 7 [PAGE 13]) yet the joint coefficient is negative ($\beta \approx -2.28$, $\Delta P = -5.71\%$, [PAGE 12]). The author attributes this to passivity, arguing it is not multicollinearity [PAGE 12], but low pairwise correlation (max 0.14) does not exclude classical suppression by an omitted aggression variable. *Test:* augment Table 4 with an explicit aggression proxy already in the tracked data — damage-to-champions/min and engage/combat frequency (Table 1 & 3, [PAGE 6, PAGE 8]). *Prediction:* under the suppression hypothesis, Survivability's coefficient *attenuates toward 0* (|effect| shrinking from 5.71% to under ~2%) once aggression is controlled, and the same attenuation appears for Vision/Carry focus. *Falsifier:* if Survivability stays significantly negative (≈ −5%) with aggression held fixed, the passivity explanation [PAGE 12] is falsified and the negative sign is a genuine causal signal that over-investing in defense *reduces* win probability conditional on the other bundles — a much stronger and more surprising claim than the paper asserts.
</RLVR_COUNTERFACTUAL_VETOES>