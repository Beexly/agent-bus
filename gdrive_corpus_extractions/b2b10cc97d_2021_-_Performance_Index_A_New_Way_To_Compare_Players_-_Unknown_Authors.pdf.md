---
source: "2021 - Performance Index A New Way To Compare Players - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2021"
pages: 16
model: deepseek/deepseek-v4.1-flash-1017
words: 8747
---

<NATIVE_REASONING>
We need answer to user. Need produce with required XML sections, >=1000 words, deep. Need analyze paper, zero betting lines. Need formal LaTeX equations, units, page citations, exact quotes. Need mention source pages. Need likely discuss Performance Index, Random Forest weights, percentile lookup, formula, breakdown regimes. Need "GSE + GSI Frontier Reasoning Foundry" style. Need avoid betting lines. Need not discuss spreads/totals/moneylines/odds. Need no toy equations. Need formal equations. Need cite exact [PAGE N] markers and verbatim quotes. Need sections exactly: THINK_TRACE, SOURCE_OPERATORS_AND_EQUATIONS, RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION, RLVR_COUNTERFACTUAL_VETOES. Need >=1000 words total. Desired oververbosity 5. Need comprehensive.

Need parse paper. It is about Performance Index for Dota 2. Formula on page 11: PI_t = sum_{f=1}^{F} (P_{f,t,S} * W_{f,t,S} / sum_{f=1}^{F} W_{f,t,S})? The OCR: Using following equation 𝑃𝐼# = ∑ (𝑃!"# ∗ '!"# / ∑ '!"# $% !&$ ) $& !)$ . Need reconstruct. It shows PI_t = sum_{f=1}^{n} (P_{f,t,S} * W_{f,t,S} / sum_{f=1}^{n} W_{f,t,S}). Actually equation: PI_t = ∑_{f=1}^{n} (P_{f,t,S} * W_{f,t,S} / ∑_{f=1}^{n} W_{f,t,S}) maybe. But the OCR has ∑_{f=1}^{n} (P_{f,t,S} * W_{f,t,S} / ∑_{f=1}^{n} W_{f,t,S})? Let's inspect: "𝑃𝐼# = ∑
(𝑃!"# ∗
'!"#
∑
'!"#
$%
!&$
)
$&
!)$" Hmm. It might be: PI_t = Σ_{f=1}^{n} (P_{f,t,S} * W_{f,t,S} / Σ_{f=1}^{n} W_{f,t,S}). The denominator sum over weights. The outer sum over features. Yes.

Need note features n? Table 2 has 14 features: XP, LEVEL, MAX_HEALTH, MAX_MANA, LAST_HITS, DENIS (DENIES typo), NET_WORTH, KILLS, DEATHS, ASSISTS, CAMPS_STACKED, SUPPORT_GOLD_SPENT, HERO_DAMAGE = 13? Count: XP(1), LEVEL(2), MAX_HEALTH(3), MAX_MANA(4), LAST_HITS(5), DENIS(6), NET_WORTH(7), KILLS(8), DEATHS(9), ASSISTS(10), CAMPS_STACKED(11), SUPPORT_GOLD_SPENT(12), HERO_DAMAGE(13). So F=13 features. They say 7 non-performance metrics for playstyle archetype analysis. Need cite. They use 1000 professional matches patch 7.26, 10 playstyles, 250 RF models (10 playstyles * time steps between 5 and 30 inclusive? If 5-30 inclusive = 26 timesteps, 10*26=260, but paper says 250 maybe 5 to 30 exclusive? Let's check: "For each of the 10 playstyles and each time step, t, between 5 and 30 minutes, we build a Random Forest Classification model for a total of 250 models." If between 5 and 30 means 5..29? 25 timesteps *10=250. Or maybe 5,6,...29. Then after 30 use H/W at 30. They mention each minute from 5-30 repeating; after 30 use H_{f,t=30} and W_{f,t=30}. Could note potential off-by-one: 250 models implies 25 time steps if 10 playstyles, whereas "5–30 minutes" inclusive would be 26. This is gray-zone. Need audit.

Need discuss Random Forest classification: labels win/loss, features at time t, playstyle S. 80/20 split, 500 estimators, repeat 100, choose best. Permutation importance: baseline accuracy, permute feature, drop accuracy = importance. Weights W are importance? Formula normalizes weights.

Need formal units: PI dimensionless, percentile P in [0,100] or [0,1]? Paper says percentile. Histograms provide percentile. We can denote p ∈ [0,100]% or normalized p∈[0,1]. Weights are accuracy-drop in percentage points or probability units. If P as percentile in percent, W as fraction or pp, PI is weighted average of percentiles, dimensionless in percent. If P normalized [0,1], PI in [0,1]. Need state assumptions. The equation as written has W in denominator so scale cancels; P units determine PI units. We can define p_{f,t,S} ∈ [0,1] as empirical CDF percentile (dimensionless), w_{f,t,S} ≥0 in accuracy-drop units (probability points), then PI ∈ [0,1] dimensionless. Alternatively if p in percent, PI in percent. Need avoid invented fake ratios. This is source formula, not toy.

Need singularity/breakdown regimes: denominator sum W = 0 if all permutation importances zero or negative? Permutation importance can be negative. Paper doesn't specify handling negative weights. If sum weights zero, undefined / division by zero. If negative weights allowed, PI can leave [0,1], not monotonic. Also if feature count and histogram empty for playstyle/time, lookup undefined. If playstyle misclassified at 5 min, wrong histogram/weights, invalid cross-role comparison. Patch changes invalidate historical dataset. Model accuracy low early (Fig 3 0.5-0.85), cut at 30 min because accuracy falls off. Need mention exact quotes: page 6 "Even slight changes to gameplay can have a considerable impact on gameplay and which heroes are selected. Therefore, it is vital to collect and use data from within a single patch to perform any analytics." Page 10 "Early in the match, the models have a hard time predicting the winner, this is understandable as there is a lot of uncertainty. As time progresses, however, the models become more accurate." Page 10 "with limited data, the accuracy of the Random Forest Classifiers falls off rapidly." Page 11 formula. Page 11 "For each minute after 30 minutes the 𝐻!"&* and 𝑊!"&* are used" meaning freeze at 30. Page 13 "more than 200,000 people directly interacted..." Page 14 conclusion.

Need "retrocausal genealogy": historical/scientific lineage & multi-week traps. Need discuss lineage: Moneyball/sports analytics, game analytics, esports analytics, Random Forest Breiman, Archetype Analysis Cutler & Breiman, permutation importance Strobl et al. Multi-week traps: patch drift, role meta shifts, model staleness, distribution shift, sample size per playstyle, survivorship/selection bias, broadcast deployment feedback loops. Need connect to multi-week traps: if deployed across tournament weeks, patch and meta changes, stale histograms, playstyle label drift, model recalibration. Also "retrocausal" maybe means how future deployment assumptions contaminate historical model design? Need interpret. Need discuss historical/scientific lineage and multi-week traps. Could mention "retrocausal genealogy" as the paper's design choices are legible as descendants of prior work and future deployment feedback. Need include multi-week traps: 1) patch drift across weeks; 2) role/playstyle drift; 3) tournament meta adaptation; 4) model retraining cadence; 5) broadcast incentives (players altering behavior to optimize PI) - Goodhart. Need not betting.

Need "recursive theory of mind": crisis habit regression vs counter-trap vs clock. Need interpret: Crisis habit regression = under pressure players revert to habitual playstyles, causing PI to mislabel? Counter-trap = opponents exploit predictable role behavior? Clock = time-dependent model and 5-min playstyle detection cutoff. Need discuss recursive ToM: players know analysts use PI, opponents know players adapt, broadcasters know spectators interpret. Need examine: The PI uses playstyle detection at 5 min; if a player intentionally changes role after 5 min, the model's fixed S misrepresents. Counter-trap: opposing team may force role swaps or lane rotations to make PI invalid. Crisis habit regression: in losing games, players may regress to safe habits, affecting features like deaths, net worth, support gold; but these are outcome-correlated, not causal. Clock: early model uncertainty; 30 min cutoff; after 30 freeze. Need cite page 11 "at the five-minute mark" and page 11 "For each minute after 30 minutes..." and page 10 accuracy.

Need "cross-layer veto adjudication": physical/biomechanical/weather veto proof. This is esports, no physical biomechanics/weather. Need adjudicate that physical/biomechanical/weather vetoes are not applicable or have digital analogs. Need "veto proof": The paper is virtual; physical weather doesn't directly affect Dota 2 server/network? But there are cross-layer vetoes: hardware, network latency, server tick, patch, tournament rules. Need state physical/biomechanical/weather layer has no direct causal channel to in-game feature values except via infrastructure (power, network, player health). The model doesn't include physical variables. A weather veto cannot invalidate PI unless it affects live feed, player input latency, or tournament schedule. Biomechanical: no biomechanical model; only telemetry. Need "proof" by absence: Table 2 features are all in-game telemetry; no physical covariates. Cite page 8 Table 2. Cross-layer veto: if live feed unavailable, PI cannot be computed; paper says "The only limitation to the Performance Index's use in live matches is access to a live feed and delivery methods" [PAGE 14]. That is a stronger veto. Also patch changes [PAGE 6]. Need mention "physical/biomechanical/weather veto proof" maybe need demonstrate no such veto applies. Could say a physical/weather veto would require a mediating variable in feature vector or live feed; none exists. If a weather event disrupts network, it's an infrastructure veto, not a model-layer veto. Biomechanical layer absent because heroes are virtual avatars, not human bodies; player fatigue could alter inputs but not measured. Need cite page 8 features.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning with Verifiable Rewards? Need produce 3 scenarios that are verifiable and veto predictions. Need likely "RLVR counterfactual vetoes" means counterfactual tests with verifiable outcomes that would veto claims. Need be specific: Scenario 1: Patch 7.26 to next patch; retrain histograms/weights on new patch; predict PI rankings become non-comparable if using old patch. Verification: compare PI distributions and rank correlation; if old-patch PI vs new-patch PI Spearman < threshold, veto cross-patch comparability. Scenario 2: Playstyle misclassification at 5 min; inject role swap after 5 min; verify PI error. Prediction: fixed S causes systematic bias; if the player switches from support to core, PI underestimates? Need careful. Scenario 3: Negative/zero permutation importance; verify denominator. If all weights zero or negative, formula undefined or out-of-range; use ablation. Need "3 verifiable RLVR veto scenarios + predictions" - each with counterfactual intervention, measurable outcome, veto condition, prediction. Need avoid betting. Need maybe mention "RLVR" as verifiable reward: define a verifier function V. Need not overdo.

Need include exact page citations and verbatim quotes. Need cite all sections. Need ensure quotes exact. Let's gather exact quotes:

PAGE 1: "In team sports, it can be a non-trivial task to compare players and understand how much they contribute and in what way, especially when those players are fulfilling significantly different roles on a team." Good.
PAGE 2: "The Performance Index considers the playstyle of each player and operates in real-time, facilitating real-time storytelling and audience engagement." Good.
PAGE 2: "While developed for Dota 2, the principles behind the Performance Index is not limited to esports but can be applied in a similar way to other team-based, multi-role sports such as basketball, baseball, and football." Good.
PAGE 3: "In Dota 2 each player performs a different role as part of the team." Good.
PAGE 6: "Even slight changes to gameplay can have a considerable impact on gameplay and which heroes are selected. Therefore, it is vital to collect and use data from within a single patch to perform any analytics." Good.
PAGE 6: "We used 1000 professional matches from within this patch." Good.
PAGE 7 Table 1 playstyles. Could cite.
PAGE 8 Table 2 features. Cite.
PAGE 9: "The Histogram Dataset is built by first grouping each player's performance in every game in the Historic Game Dataset based on their playstyle, S." Good.
PAGE 9: "These histograms are used as a lookup table for the Performance Index equation, providing a percentile, 𝑃!"#, of the live player's current performance for a given feature and playstyle." Good.
PAGE 9: "These weights indicate how important each feature is for a playstyle in relation to winning the game." Good.
PAGE 10: "For each of the 10 playstyles and each time step, t, between 5 and 30 minutes, we build a Random Forest Classification model for a total of 250 models." Good.
PAGE 10: "We use 500 estimators (decision trees in the Random Forest) and train the model. We then test the model's accuracy against the test set and record the accuracy of the model. We repeat this 100 times and use the best model found as the final model for the time step and playstyle." Good.
PAGE 10: "Early in the match, the models have a hard time predicting the winner, this is understandable as there is a lot of uncertainty. As time progresses, however, the models become more accurate." Good.
PAGE 10: "with limited data, the accuracy of the Random Forest Classifiers falls off rapidly." Good.
PAGE 10: "The goal of this work is not to improve the accuracy of these models, instead, we use the accuracy as a measure of how confident we are in the level of importance of each of the features." Good.
PAGE 10: "we record a baseline accuracy by passing a validation set through the Random Forest model. We permute the column values of a single predictor feature, pass all samples back through the Random Forest model, and recompute the accuracy. The importance of the feature is recorded as the difference between the baseline and the drop in accuracy." Good.
PAGE 11 formula. Need quote "Using the following equation 𝑃𝐼# = ∑ (𝑃!"# ∗ '!"# ∑ '!"# $% !&$ ) $& !)$" maybe not exact due OCR. We can cite the formula's structure and quote nearby. Need not quote formula as verbatim? We can present reconstructed LaTeX and cite [PAGE 11]. Need mention OCR ambiguities. The exact formula in source text is garbled: "Using the following equation 𝑃𝐼# = ∑
(𝑃!"# ∗
'!"#
∑
'!"#
$%
!&$
)
$&
!)$" We can quote "Using the following equation" and show reconstructed equation. Need maybe state "OCR-transcribed as ...". Good.

PAGE 11: "We also use our playstyle Detection algorithm at the five-minute mark of the game to determine which playstyle each player is employing." Good.
PAGE 11: "For each minute, from 5 – 30 minutes repeating this process. For each minute after 30 minutes the 𝐻!"&* and 𝑊!"&* are used to calculate the Performance Index." Good.
PAGE 14: "The only limitation to the Performance Index's use in live matches is access to a live feed and delivery methods." Good.
PAGE 13: "more than 200,000 people directly interacted with the Performance Index in the Twitch version and the mobile version." Good.

Need maybe discuss "Performance Index" formula in detail:
Let F = {1,...,13} features from Table 2. Let S ∈ {1,...,10} playstyle labels Table 1. Let t ∈ {5,...,30} minutes. Let p_{f,t,S} ∈ [0,1] = empirical CDF percentile of feature f for playstyle S at time t. Let w_{f,t,S} ≥ 0 be permutation importance (accuracy drop) for feature f, playstyle S, time t. Then:
PI_{i,t} = Σ_{f=1}^{F} [ p_{f,t,S_i} * w_{f,t,S_i} / (Σ_{g=1}^{F} w_{g,t,S_i}) ]
= weighted average. If p in percent, PI in percent. If normalized, dimensionless. Need maybe include assumption w sum >0. If w negative, need clip or reject; paper doesn't specify. If all w=0, undefined. If histograms empty, undefined. If S_i misdetected, PI is not valid.

Need discuss Random Forest model:
For each (S,t), training set D_{S,t} = {(x_i^{S,t}, y_i)}. y_i ∈ {0,1}. RF classifier \hat{y} = majority vote of 500 trees. Accuracy A_{S,t} = Pr(\hat{y}=y) on 20% test. Repeat 100 times, select model m* = argmax A. Permutation importance: I_{f,S,t} = A_{baseline} - A_{permuted f}. Weight w = max(0, I) or I. But paper says "The importance of the feature is recorded as the difference between the baseline and the drop in accuracy." So w = A_baseline - A_perm. If A_perm > A_baseline, negative. The formula with denominator sum weights may be problematic. Need mention.

Need "source operators and equations" maybe formal operators: RF classifier, permutation importance, weighted sum, percentile lookup, empirical CDF. Need include units: accuracy in probability or percentage points; weights in same; p dimensionless; PI dimensionless. Need mention "no SI units apply; all quantities are information/probability/telemetry counts." Some features have units: XP points, LEVEL level (1-30), MAX_HEALTH health points, MAX_MANA mana points, LAST_HITS count, DENIES count, NET_WORTH gold, KILLS count, DEATHS count, ASSISTS count, CAMPS_STACKED count, SUPPORT_GOLD_SPENT gold, HERO_DAMAGE damage points. But after percentile transform, dimensionless. Good.

Need "gray-zone audit": off-by-one 250 models vs 5-30 inclusive; playstyle detection at 5 min but PI computed from 5; weights trained 5-30; after 30 frozen; no negative weight handling; no calibration of percentiles from different sample sizes; no cross-patch; no causal claim; accuracy used as confidence not model improvement; potential leakage? Need analyze: RF trained on historical dataset with labels win/loss. Features at time t include current game state. If model uses all features including net worth, XP, kills, deaths, etc., these are highly correlated with outcome; weights may reflect cumulative advantage, not independent contribution. The PI is descriptive, not causal. It may double-count correlated features. Random Forest permutation importance handles correlation poorly; Strobl et al. cited for conditional variable importance but they use permutation importance. They cite [36] for reliability over mean decrease impurity. Need mention. Also playstyle labels from Archetype Analysis on entire dataset using 7 non-performance metrics; potential label leakage? They use non-performance metrics to avoid outcome leakage. Good. But "entire dataset" and then labels used to train RF; could be unsupervised, not label leakage.

Need "retrocausal genealogy": Breiman 2001 random forests, Cutler et al. 2012, Breiman et al. 1984 CART, Cutler & Breiman 1994 archetypal analysis, Strobl et al. 2008 conditional variable importance, sports analytics Moneyball (Alamar & Mehrotra 2012), game analytics Drachen et al. 2013, esports analytics Schubert et al. 2016, Demediuk et al. 2019 role identification. Multi-week traps: patch 7.26 current; tournaments across Europe 2020; deployment at ESL Premiership Winter Skirmish 2019, ESL Germany 2020, ESL Thailand 2020, ESL Birmingham 2020. Across weeks, patch changes and meta adaptation. Need mention "multi-week traps" maybe from GSE? Could be about "multi-week traps" in tournament scheduling. We can define: week-to-week drift in playstyle prevalence and feature distributions; model trained on fixed 1000 matches; no online updating; retraining delay. Trap: if tournament spans patch or meta shift, PI values not comparable across weeks. Another trap: broadcast storytelling creates feedback; players/teams may optimize visible PI, causing Goodhart. Another: best model selected by test accuracy across 100 repeats, then permutation importance on validation set; possible overfitting to test. Need mention.

Need "recursive theory of mind": Need perhaps frame as nested beliefs:
- Level 0: model predicts win probability from features.
- Level 1: analyst/broadcaster interprets PI as performance.
- Level 2: player knows PI is computed and may alter behavior to appear good.
- Level 3: opponent knows player may alter behavior and can counter.
- Level 4: model designer knows this and may freeze/retrain.
Crisis habit regression: Under losing conditions, players may revert to habitual roles/playstyles; PI's fixed S from 5 min may not capture adaptive role changes. Counter-trap: an opposing team can force lane swaps or sacrifice objectives to bait a player into stat-padding features with high weights, making PI high but win probability low. Clock: early uncertainty and 30-min freeze. Need cite page 10 and 11. Need state PI is not a causal counterfactual; it measures percentile performance relative to historical playstyle, weighted by win-predictive importance. So if players game the metric, weights no longer reflect win importance.

Need "cross-layer veto adjudication": Need maybe use formal logic: A cross-layer veto V_L applies if a variable in layer L (physical, biomechanical, weather) has a causal path to PI that is not mediated by the model's feature vector or live feed, or if it breaks the assumptions. For physical/biomechanical/weather, no such variable in Table 2. The only cross-layer paths are infrastructure: power/network/server, player health/fatigue, tournament rules. Paper says only limitation live feed/delivery. Need "veto proof" maybe:
- Physical layer: in-game physics engine deterministic? Not measured. No physical weather variable.
- Biomechanical layer: no human motion data; heroes are avatars. Player biomechanics only affects input latency/accuracy, not included.
- Weather layer: no meteorological covariate; can affect network latency, power, event scheduling. If it does, it manifests as missing/lagged live feed, which is an infrastructure veto. Since paper states live feed is only limitation [PAGE 14], weather veto is not a model-layer veto.
Need mention "physical/biomechanical/weather veto proof" as a proof by feature-set closure: F ⊆ telemetry; no external covariates. But absence of evidence is not proof of no effect; it's proof of no modeled causal channel. Good.

Need "RLVR counterfactual vetoes": Need 3 scenarios with predictions and veto conditions. Could design:
1. Patch-drift counterfactual: Train on patch 7.26, evaluate on next patch. Intervention: replace historical histograms/weights with next-patch versions. Prediction: cross-patch PI rank correlation drops below acceptable; old PI over/understates. Veto: if old-patch PI and next-patch PI disagree on top/bottom quartile for >X% of player-minutes, cross-patch comparability is vetoed. Verifiable via replay data and retraining.
2. Playstyle misclassification counterfactual: At 5 min, artificially swap two players' playstyle labels while holding telemetry fixed. Prediction: PI values change systematically; if misclassification rate ε, expected PI error bounded by max difference in weights/percentiles. Veto: if label swap changes PI by more than within-playstyle variance, then PI is not robust to role detection. Verification: replay same match with swapped S and compare.
3. Zero/negative weight singularity counterfactual: For a given (S,t), set all w=0 or allow negative weights. Prediction: formula undefined or PI out of [0,1]; if negative weights occur naturally, normalizing by sum can invert rankings. Veto: if any (S,t) has Σw ≤ 0 or min w <0 and no clipping, PI is not a valid weighted average. Verification: compute permutation importances across all 250 models and count. Also check calibration: PI vs win probability should be monotonic; if not, veto.

Need maybe include "RLVR" formal: verifier V(τ) ∈ {0,1} for trajectory τ; reward = V. But not necessary. We can mention "RLVR-style verifiable checks" to avoid confusion.

Need structure. Need ensure word count >=1000. We can write substantial. Need not be too verbose but enough. Let's draft.

Need be careful with XML tags: include exact sections. Could start directly with <THINK_TRACE>...</THINK_TRACE> etc. Need no markdown? Can use LaTeX inside. Need cite [PAGE N]. Need exact quotes. Need not mention betting. Need no "odds" etc. Avoid words "spread", "total", "moneyline" entirely? The invariant says never mention spreads, totals, moneylines, or odds. We should avoid those words altogether, even in negation. Avoid "betting", "odds". Good.

Need maybe mention "GSE + GSI Frontier Reasoning Foundry" not necessary.

Need write in a professional analytic voice. Let's formulate.

Potential issue: "SOURCE_OPERATORS_AND_EQUATIONS" needs formal LaTeX, units, page citations, breakdown. We'll include definitions and equations. Need cite exact page markers and verbatim quotes. We'll use quotes with quotation marks.

Let's plan sections:

<THINK_TRACE> (>=400 words)
- Summarize problem: cross-role comparison in Dota 2. Paper's PI uses playstyle labels, historical histograms, RF permutation importance, weighted percentile sum.
- Multi-hop derivation: data collection patch 7.26 1000 matches; playstyle AA 10 labels; features 13; offline phase histograms H and weights W; RF per playstyle/time 250 models; 80/20, 500 trees, 100 repeats; permutation importance; online phase live feed, S detection at 5 min, lookup percentile, weights, formula; after 30 freeze.
- Gray-zone audit: 250 vs 5-30 inclusive; negative weights; denominator zero; playstyle misclassification; patch drift; sample imbalance; accuracy as confidence not causal; PI descriptive not causal; no cross-patch; no live feed. Cite quotes. Need mention exact quote "The goal of this work is not to improve the accuracy of these models..." [PAGE 10].
- Maybe discuss "cross-role comparator" claim. Need enough.

<SOURCE_OPERATORS_AND_EQUATIONS>
- Formal definitions. Use \mathcal{F}, \mathcal{S}, t. Equation:
\[
PI_{i,t} = \sum_{f=1}^{F} \left( p_{f,t,S_i} \frac{w_{f,t,S_i}}{\sum_{g=1}^{F} w_{g,t,S_i}} \right)
\]
with assumptions.
- Percentile via empirical CDF:
\[
p_{f,t,S} = \hat{F}_{f,t,S}(x_{i,f,t}) = \frac{1}{N_{f,t,S}}\sum_{j=1}^{N_{f,t,S}} \mathbf{1}\{x_{j,f,t,S} \le x_{i,f,t}\}
\]
if normalized. Or percent = 100 p. This is not in paper but formalizes lookup. Need cite [PAGE 9].
- RF accuracy:
\[
A_{m} = \frac{1}{|D_{test}|}\sum_{(x,y)\in D_{test}} \mathbf{1}\{\hat{y}_m(x)=y\}
\]
- Permutation importance:
\[
w_{f,t,S} = A_{m^*} - A_{m^*}^{\pi_f}
\]
where \pi_f permutes feature f. Units: accuracy points.
- Normalization denominator. If w sum >0. Breakdown: sum=0; negative; empty histogram; mislabel; patch.
- Features units: list. Cite [PAGE 8].
- Quote formula "Using the following equation" [PAGE 11]. Maybe note OCR ambiguity.
- Quote "These histograms are used as a lookup table..." [PAGE 9].
- Quote "The importance of the feature is recorded as the difference between the baseline and the drop in accuracy." [PAGE 10].
- Quote "We also use our playstyle Detection algorithm at the five-minute mark..." [PAGE 11].
- Quote "For each minute after 30 minutes..." [PAGE 11].
- Breakdown regimes: formal conditions:
1. \sum_g w_{g,t,S} = 0 => undefined.
2. \exists g: w_{g,t,S}<0 => PI not convex combination, range not bounded.
3. N_{f,t,S}=0 => p undefined.
4. S_i ≠ S_i^* => PI uses wrong conditioning.
5. t>30 => frozen weights/histograms, no new time-specific info.
6. patch p≠7.26 => distribution shift.
Need mention "singularity/breakdown regimes" exactly.

<RETROCAUSAL_GENEALOGY>
- Lineage: Moneyball, game analytics, esports analytics, RF, CART, archetypal analysis, permutation importance. Cite references in paper. Multi-week traps: patch drift, meta drift, deployment feedback, retraining delay, sample size. Cite page 6 quote patch; page 14 live feed limitation; page 13 deployment tournaments. Mention 2019-2020 deployments across weeks. "Retrocausal" maybe future deployments influence design: the need for broadcast overlays and mobile app shaped metric simplicity. The metric is not a pure scientific measure; it is a broadcast product. Goodhart trap. Need maybe 300-400 words.

<RECURSIVE_THEORY_OF_MIND>
- Nested reasoning. Crisis habit regression: losing players revert to habits, PI fixed playstyle; not causal. Counter-trap: opponents can force role swaps or stat-padding; clock: 5-min detection and 30-min freeze. Cite page 10 accuracy and page 11. Need maybe define "crisis habit regression" as players under pressure fall back to default playstyle; model may interpret as performance decline because features shift relative to historical playstyle. Counter-trap: a team can deliberately alter lane assignments to make opponent's PI misclassify or to bait. Clock: early model uncertain; late frozen. Need mention "recursive theory of mind" in esports: players, coaches, analysts, broadcasters, spectators. Need maybe 200 words.

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical/biomechanical/weather veto proof. Feature set closure. No external covariates. Table 2. If weather affects network, it's infrastructure. Paper says only limitation live feed. Biomechanics not modeled. Physical sports analogy not actual physical measurement. Need "veto proof" by mediation: For a cross-layer veto to apply, there must be a causal path L -> PI not mediated by F or feed. The paper's F contains only in-game telemetry; no L. Therefore physical/biomechanical/weather cannot directly veto PI; they can only veto via infrastructure or player health affecting input. Need cite page 8 and page 14. Maybe 200 words.

<RLVR_COUNTERFACTUAL_VETOES>
- 3 scenarios. Need be precise and verifiable. Use "Veto if ..." and "Prediction: ...". Maybe include equations? Could include:
Scenario 1 Patch drift:
Intervention: retrain H,W on patch 7.27 and compare PI_7.26 vs PI_7.27 on same replays. Prediction: rank correlation \rho < 0.7 or top-quartile disagreement >25%. Veto cross-patch comparability if true. This is verifiable because patch data exists. Need avoid arbitrary thresholds? RLVR requires verifiable reward; thresholds are test design. We can state thresholds as pre-registered. Fine.
Scenario 2 Playstyle label swap:
Intervention: swap S_i at t=5 for a random player; recompute PI. Prediction: mean absolute PI change exceeds within-playstyle standard deviation. Veto if PI not robust to playstyle detection. Verifiable by replay.
Scenario 3 Weight singularity/negative importance:
Intervention: audit all 250 models; count Σw≤0 or min w<0. Prediction: some models have negative permutation importance due to correlated features; formula can yield out-of-range PI. Veto if any model with Σw≤0 or if PI outside [0,1] for >0% of player-minutes. Verifiable by recomputation.
Maybe also mention "calibration" scenario? Need exactly 3. Good.

Need overall word count >1000. We can make ~2000. Need maintain clarity. Need not overuse quotes. Let's write.

Need ensure "ZERO BETTING LINES" - avoid words. We won't mention.

Need include exact [PAGE N] markers. Use [PAGE 11] etc. Good.

Need maybe mention "verbatim quotes" with exact spelling. Quotes:
- [PAGE 2] "The Performance Index considers the playstyle of each player and operates in real-time, facilitating real-time storytelling and audience engagement."
- [PAGE 6] "Even slight changes to gameplay can have a considerable impact on gameplay and which heroes are selected. Therefore, it is vital to collect and use data from within a single patch to perform any analytics."
- [PAGE 10] "The goal of this work is not to improve the accuracy of these models, instead, we use the accuracy as a measure of how confident we are in the level of importance of each of the features."
- [PAGE 10] "Early in the match, the models have a hard time predicting the winner, this is understandable as there is a lot of uncertainty. As time progresses, however, the models become more accurate."
- [PAGE 10] "with limited data, the accuracy of the Random Forest Classifiers falls off rapidly."
- [PAGE 11] "We also use our playstyle Detection algorithm at the five-minute mark of the game to determine which playstyle each player is employing."
- [PAGE 11] "For each minute after 30 minutes the 𝐻!"&* and 𝑊!"&* are used to calculate the Performance Index." The OCR has weird characters. We can quote as "For each minute after 30 minutes the ... are used to calculate the Performance Index." with ellipsis to avoid garbled. But invariant says exact quotes. Better quote only exact readable part: "For each minute after 30 minutes" and paraphrase rest. Or use quote with garbled? Could write: the paper states that after 30 minutes the frozen histogram and weight values are used; the source text reads "For each minute after 30 minutes the 𝐻!"&* and 𝑊!"&* are used to calculate the Performance Index" [PAGE 11]. That's exact enough including OCR. Good.
- [PAGE 14] "The only limitation to the Performance Index's use in live matches is access to a live feed and delivery methods." Good.
- [PAGE 13] "more than 200,000 people directly interacted with the Performance Index in the Twitch version and the mobile version." Good.
- [PAGE 9] "These histograms are used as a lookup table for the Performance Index equation, providing a percentile, 𝑃!"#, of the live player's current performance for a given feature and playstyle." Exact with OCR. Good.
- [PAGE 10] "The importance of the feature is recorded as the difference between the baseline and the drop in accuracy." Good.
- [PAGE 10] "For each of the 10 playstyles and each time step, t, between 5 and 30 minutes, we build a Random Forest Classification model for a total of 250 models." Good.
- [PAGE 10] "We use 500 estimators (decision trees in the Random Forest) and train the model. We then test the model's accuracy against the test set and record the accuracy of the model. We repeat this 100 times and use the best model found as the final model for the time step and playstyle." Good.

Need maybe quote "cross-role comparator" [PAGE 8]? The paper says "The Performance Index is a cross-role comparator, meaning it can fairly compare to all players' performance regardless of their role." [PAGE 8]. Exact: "The Performance Index is a cross-role comparator, meaning it can fairly compare to all players' performance regardless of their role." Good. Use.

Need formal equation. Let's make sure LaTeX is correct:
\[
PI_{i,t} = \sum_{f=1}^{F} \left( p_{f,t,S_i} \, \frac{w_{f,t,S_i}}{\sum_{g=1}^{F} w_{g,t,S_i}} \right)
\]
This places sum over f of p * w / sum w. But if denominator is inside outer sum, it's sum over f of p*w / sum w. That's equivalent to weighted average. The source formula might be sum over f of (P_{f,t,S} * W_{f,t,S} / sum_f W_{f,t,S}). Good.

Need if p in [0,100] percent, PI in percent. If p in [0,1], dimensionless. We can state. Weights are accuracy-drop in probability points. The denominator normalizes. Good.

Need maybe include "empirical CDF" formally:
\[
p_{f,t,S} = \frac{1}{N_{f,t,S}} \sum_{j=1}^{N_{f,t,S}} \mathbf{1}\{x_{j,f,t,S} \le x_{i,f,t}\}
\]
This is a percentile rank. If paper uses percentile, maybe p ∈ [0,100]. We can define p normalized. Good.

Need "Random Forest classifier" formula:
\[
\hat{y}_{m}(x) = \mathrm{mode}\{h_b(x)\}_{b=1}^{500}
\]
Maybe not necessary but formal. We can include.

Need "permutation importance" formula:
\[
w_{f,t,S} = A_{m^*} - A_{m^*}^{\pi_f}
\]
where \pi_f is random permutation of column f. Units: accuracy points. Good.

Need "breakdown regimes" list. Include:
- \(\sum_g w_{g,t,S}=0\): denominator zero.
- \(\min_f w_{f,t,S}<0\): not a convex combination; PI range not [0,1].
- \(N_{f,t,S}=0\): empty histogram.
- \(S_i \neq S_i^*\): misconditioning.
- \(t>30\): frozen H,W; model no longer time-specific.
- patch mismatch: distribution shift.
- correlated features: permutation importance may assign weight to proxies; double counting.
- small sample per playstyle: RF accuracy low; weights unstable.
Need cite sample imbalance [PAGE 10] "As there is not the same amount of playstyle performances in the dataset, so not all models are trained with the same number of datapoints." Exact. Good.

Need "retrocausal genealogy" maybe mention "retrocausal" as "the deployed broadcast context retroactively selects which model simplifications are acceptable." Could phrase: The paper's scientific lineage runs from CART/RF to permutation importance and archetypal analysis, but its product lineage runs from broadcast overlays and Twitch/mobile companion app. The metric's simplicity (single number, top-3 features) is a retrocausal pressure: the presentation layer shapes the modeling layer. Multi-week traps: patch 7.26 and tournament deployments across 2019-2020. Good.

Need "recursive theory of mind" maybe mention "crisis habit regression" explicitly. Define:
- Crisis habit regression: when a team is behind, players often revert to habitual farming/defensive patterns. The PI's historical histogram for their 5-min playstyle may score this as low percentile on aggressive features, but it may be rational adaptation. Thus PI can misread strategic adaptation as performance decline.
- Counter-trap: opposing team can exploit knowledge that PI uses fixed playstyle and feature weights. They can force a role swap after 5 min or bait a high-weight feature (e.g., hero damage) while conceding objectives. The PI may rise while win probability falls. This is a Goodhart/counter-trap.
- Clock: 5-min playstyle detection and 30-min freeze create temporal vulnerabilities. Early uncertainty, late staleness. The model's accuracy curve is a clock. Good.

Need "cross-layer veto adjudication" maybe use "veto proof" formal:
Let \(L\) be physical/biomechanical/weather layer. A veto \(V_L\) applies iff there exists a path \(L \to X \to PI\) not mediated by the source's feature vector \(F\) or live feed. The source's \(F\) is Table 2 [PAGE 8]; no \(L\) variable appears. Thus \(V_L\) is inactive. The only allowed veto is infrastructure: if live feed absent, PI cannot be computed [PAGE 14]. Player fatigue could be biomechanical but not measured; it affects input, not feature definition. Weather could affect network but manifests as feed loss. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" maybe mention "verifiable reward" but not necessary. Could frame:
RLVR verifier \(V(\tau) \in \{0,1\}\) accepts a claim only if a replayable intervention yields the predicted measurable outcome. Three veto scenarios:
1. Patch-drift counterfactual.
2. Playstyle-label swap counterfactual.
3. Weight-singularity/negative-importance counterfactual.
Each with prediction and veto condition. Need maybe include exact predictions:
- Scenario 1: Prediction: old-patch PI will fail to preserve rank order on new patch; top quartile disagreement >25%; Spearman <0.7. Veto cross-patch comparability.
- Scenario 2: Prediction: swapping S at 5 min changes PI by more than within-playstyle SD for >5% of player-minutes; veto robustness.
- Scenario 3: Prediction: at least one (S,t) has negative permutation importance or sum≤0; PI outside [0,1] or ranking inversion. Veto validity of normalized weighted average. If none, the formula passes. Good.

Need maybe mention "3 verifiable RLVR veto scenarios + predictions" exactly three. We'll number.

Need keep total >=1000 words. Our draft will be ~2500. Good.

Need ensure no "spreads, totals, moneylines, odds" words. Avoid "betting". Avoid "odds". "win probability" is okay? It's not a betting line. It's model classification. Fine.

Need maybe mention "win/loss label" not betting. Fine.

Need no "toy equations": The empirical CDF and permutation importance are source-grounded. The weighted sum is source. Good. Avoid inventing ratios like Force/Fatigue. We can mention "no physical fatigue ratio". Good.

Need maybe mention "SI/information/probability units": State no SI units; probabilities, percentiles, accuracy points, counts/gold/health points. Good.

Need exact page citations and verbatim quotes. We'll include.

Let's write final. Need XML sections. No markdown headings outside XML? Fine. Use paragraphs within tags. Need maybe include LaTeX. Let's produce.

Need be careful with "PAGE 11 formula" quote. We'll say "The source's OCR renders the equation as a weighted sum; I reconstruct the formal operator as ..." This is honest. Good.

Need maybe include "The Performance Index is a cross-role comparator..." quote [PAGE 8]. Good.

Need "source operators and equations" include "Histogram Dataset H_{f,t,S}" and "weights W_{f,t,S}". Good.

Let's draft in full.

Potential issue: "THINK_TRACE" must be >=400 words. We'll write ~600. Good.

Let's compose:

<THINK_TRACE>
The paper addresses... The derivation chain is:
1. Data: 1000 pro matches patch 7.26; replays parsed; telemetry.
2. Playstyle: 10 labels via Archetype Analysis using 7 non-performance metrics; Table 1.
3. Features: 13 from Table 2.
4. Offline: for each S,t build RF classifier to predict win/loss; 80/20, 500 trees, 100 repeats; best model; permutation importance.
5. Histograms: H_{f,t,S} lookup percentiles.
6. Online: at 5 min detect S; each minute lookup p; weights w; PI formula; after 30 freeze.
Then gray-zone: 250 models implies 25 timesteps, but "between 5 and 30" could be 26; source says 250; off-by-one. Negative permutation importance not handled; denominator zero. Playstyle fixed at 5 min; role swaps. Patch drift. Sample imbalance. Accuracy as confidence not model improvement. PI is descriptive not causal. Live feed limitation. Good.

Need include quotes. Good.

Now final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s derivation chain is a multi-stage measurement pipeline rather than a single formula. First, the authors restrict the historical dataset to professional Dota 2 matches within one patch; they state that “Even slight changes to gameplay can have a considerable impact on gameplay and which heroes are selected. Therefore, it is vital to collect and use data from within a single patch to perform any analytics” [PAGE 6]. They use “1000 professional matches from within this patch” [PAGE 6], with patch 7.26 as the current patch. Second, they reduce the five conventional Dota 2 positions into ten playstyles via Archetype Analysis using seven non-performance metrics, producing labels such as “Offlane Support,” “Midlane Carry (last-hitter),” and “Roaming Support” [PAGE 7, Table 1]. Third, they select thirteen telemetry features, including XP, LEVEL, MAX_HEALTH, MAX_MANA, LAST_HITS, DENIS/DENIES, NET_WORTH, KILLS, DEATHS, ASSISTS, CAMPS_STACKED, SUPPORT_GOLD_SPENT, and HERO_DAMAGE [PAGE 8, Table 2]. Fourth, in the Offline Phase they build histograms and Random Forest classifiers for each playstyle and time step. The paper says: “For each of the 10 playstyles and each time step, t, between 5 and 30 minutes, we build a Random Forest Classification model for a total of 250 models” [PAGE 10]. Each model uses an 80/20 train-test split, 500 trees, and 100 repetitions: “We use 500 estimators (decision trees in the Random Forest) and train the model. We then test the model's accuracy against the test set and record the accuracy of the model. We repeat this 100 times and use the best model found as the final model for the time step and playstyle” [PAGE 10]. Fifth, feature weights are obtained by permutation importance: “The importance of the feature is recorded as the difference between the baseline and the drop in accuracy” [PAGE 10]. Sixth, in the Online Phase, the system uses a live feed, detects playstyle at five minutes, looks up percentiles from the historical histograms, retrieves the weights, and computes the Performance Index. The paper states: “We also use our playstyle Detection algorithm at the five-minute mark of the game to determine which playstyle each player is employing” [PAGE 11]. After 30 minutes, the model freezes the 30-minute histograms and weights: “For each minute after 30 minutes the 𝐻!"&* and 𝑊!"&* are used to calculate the Performance Index” [PAGE 11].

The gray-zone audit is substantial. The paper claims a “cross-role comparator” that “can fairly compare to all players' performance regardless of their role” [PAGE 8], but the metric is a descriptive weighted percentile score, not a causal performance estimator. The Random Forest is trained to predict win/loss, and the paper explicitly says: “The goal of this work is not to improve the accuracy of these models, instead, we use the accuracy as a measure of how confident we are in the level of importance of each of the features” [PAGE 10]. That is an important limitation: high accuracy does not imply that permutation importance is causal, stable, or independent of correlated features. The timing is also a gray zone: “between 5 and 30 minutes” could be read as 26 integer time steps, but 10 playstyles × 25 time steps = 250 models. The source text is ambiguous about whether the interval is 5–29 or 5–30 inclusive. Early models are weak: “Early in the match, the models have a hard time predicting the winner, this is understandable as there is a lot of uncertainty. As time progresses, however, the models become more accurate” [PAGE 10]. Late models are data-limited: “with limited data, the accuracy of the Random Forest Classifiers falls off rapidly” [PAGE 10]. The playstyle label is fixed at five minutes, so a role swap after five minutes is not represented. The dataset is unbalanced across playstyles: “As there is not the same amount of playstyle performances in the dataset, so not all models are trained with the same number of datapoints” [PAGE 10]. Permutation importance can be negative, but the paper does not specify clipping or rejection. The denominator in the weighted sum can therefore be zero or negative, which breaks the convex-combination interpretation. The paper’s deployment claim is real but bounded: “more than 200,000 people directly interacted with the Performance Index in the Twitch version and the mobile version” [PAGE 13], yet live use depends on infrastructure: “The only limitation to the Performance Index's use in live matches is access to a live feed and delivery methods” [PAGE 14]. The audit therefore supports using the PI as a broadcast-oriented relative percentile summary, not as an absolute skill measure or a causal counterfactual.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(\mathcal{F}=\{1,\dots,F\}\) be the feature set from Table 2, with \(F=13\) in the described case study [PAGE 8]. Let \(\mathcal{S}=\{1,\dots,10\}\) be the playstyle set from Table 1 [PAGE 7]. Let \(t\) be the integer minute index, with the paper’s described range beginning at \(t=5\) and freezing after \(t=30\) [PAGE 11]. Let \(S_i\in\mathcal{S}\) be player \(i\)’s detected playstyle. Let
\[
p_{f,t,S_i}\in[0,1]
\]
be the historical percentile of player \(i\)’s current value on feature \(f\), conditioned on playstyle \(S_i\) and minute \(t\). The source describes the histograms as a lookup table: “These histograms are used as a lookup table for the Performance Index equation, providing a percentile, 𝑃!"#, of the live player's current performance for a given feature and playstyle” [PAGE 9]. Formally, if the historical feature values are \(x_{j,f,t,S}\), the empirical percentile can be written as
\[
p_{f,t,S}(x)=\frac{1}{N_{f,t,S}}\sum_{j=1}^{N_{f,t,S}}\mathbf{1}\{x_{j,f,t,S}\le x\},
\]
with \(N_{f,t,S}\) the number of historical observations for that feature, time, and playstyle. If percentiles are reported in percent rather than the unit interval, multiply by 100; the source’s “percentile” language is dimensionless either way.

Let
\[
w_{f,t,S}\ge 0
\]
be the permutation-importance weight for feature \(f\), playstyle \(S\), and minute \(t\). The source computes it as an accuracy drop:
\[
w_{f,t,S}=A_{m^*}-A_{m^*}^{\pi_f},
\]
where \(A_{m^*}\) is the baseline validation accuracy of the selected Random Forest model \(m^*\), and \(A_{m^*}^{\pi_f}\) is the accuracy after randomly permuting the values of feature \(f\). The paper states: “We permute the column values of a single predictor feature, pass all samples back through the Random Forest model, and recompute the accuracy. The importance of the feature is recorded as the difference between the baseline and the drop in accuracy” [PAGE 10]. The units of \(w_{f,t,S}\) are accuracy points or probability points, not SI units. The source’s formula is a normalized weighted sum:
\[
PI_{i,t}
=
\sum_{f=1}^{F}
\left(
p_{f,t,S_i}\,
\frac{w_{f,t,S_i}}
{\sum_{g=1}^{F}w_{g,t,S_i}}
\right).
\]
The source text presents this as “Using the following equation” and gives an OCR-transcribed weighted sum of percentile and weight terms [PAGE 11]. If \(p\) is in \([0,1]\), \(PI_{i,t}\in[0,1]\) is dimensionless; if \(p\) is in percent, \(PI_{i,t}\) is in percent. The equation is not an SI quantity; it is an information-aggregation operator over telemetry percentiles.

The Random Forest classifier itself is an ensemble operator. For \(B=500\) trees \(h_b(x)\),
\[
\hat{y}_{m}(x)=\operatorname{mode}\{h_1(x),\dots,h_B(x)\},
\]
with \(y\in\{0,1\}\) for loss/win. Accuracy on a test set \(D_{\text{test}}\) is
\[
A_m=\frac{1}{|D_{\text{test}}|}
\sum_{(x,y)\in D_{\text{test}}}
\mathbf{1}\{\hat{y}_m(x)=y\}.
\]
The paper uses 80% train, 20% test, 500 estimators, and 100 repeats [PAGE 10]. The weights are therefore empirical, sample-dependent, and time-dependent.

Breakdown and singularity regimes are exact:
1. \(\sum_{g=1}^{F}w_{g,t,S_i}=0\): the normalized weighted sum is undefined because the denominator is zero. This can occur if all permutation importances are zero, or if positive and negative importances cancel.
2. \(\min_f w_{f,t,S_i}<0\): the weights are no longer a convex combination. The denominator can be negative or near zero, and \(PI_{i,t}\) need not lie in \([0,1]\) or preserve percentile ordering.
3. \(N_{f,t,S}=0\): the histogram lookup has no support, so \(p_{f,t,S}\) is undefined. This is a cold-start regime for rare playstyles or early/late minutes.
4. \(S_i\neq S_i^*\): the playstyle detector returns the wrong label, so the percentile and weight tables are conditioned on the wrong role. The PI is then a role-misconditional score, not a cross-role comparator.
5. \(t>30\): the system uses frozen 30-minute histograms and weights, so the PI is no longer time-specific even though the match continues [PAGE 11].
6. Patch mismatch: because the paper requires “data from within a single patch” [PAGE 6], a patch change is a distribution-shift regime in which \(H_{f,t,S}\) and \(w_{f,t,S}\) may no longer describe the live game.
7. Correlated-feature regime: permutation importance can assign weight to proxy features and can be negative; the source cites Strobl et al. for reliability over mean decrease impurity [PAGE 11], but the paper does not specify a correlation-aware conditional importance estimator.
8. Sparse-playstyle regime: the paper notes unequal playstyle representation [PAGE 10], so low-\(N\) models have unstable accuracy and unstable permutation weights.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The PI’s scientific genealogy is visible in its citations and operators. It descends from CART and Random Forests [PAGE 4–5], from Breiman’s random forest work and Cutler et al.’s ensemble extension [PAGE 4], from Archetype Analysis [PAGE 6], and from permutation importance as discussed by Strobl et al. [PAGE 11]. Its sports-analytics genealogy is the Moneyball-to-advanced-metrics lineage, explicitly referenced through Alamar and Mehrotra [PAGE 2]. Its game-analytics genealogy includes Drachen et al.’s game analytics and esports analytics work, Schubert et al.’s encounter detection, and Demediuk et al.’s role identification [PAGE 2, PAGE 5, PAGE 15]. The PI is therefore a hybrid: a sports-analytics comparative metric, an esports telemetry pipeline, and a broadcast product. The “retrocausal” pressure is that the deployment context—broadcast overlays, Twitch overlays, and a companion mobile app [PAGE 11–13]—retroactively selects for a simple single-number output and a “top three most important features” explanation [PAGE 13]. The scientific layer is asked to produce a product layer that is legible in real time.

The multi-week traps are concrete. First, patch drift: the paper’s own rule is single-patch analytics [PAGE 6], but tournaments span weeks and patches. A model trained on patch 7.26 is not automatically valid on the next patch. Second, meta drift: playstyle prevalence and hero synergy can change week to week, so the ten Archetype Analysis labels may not have stable meanings. Third, retraining latency: the paper says previous-patch games are used until enough new-patch data is available [PAGE 6], which creates a window in which the deployed PI is historically conditioned but currently stale. Fourth, deployment feedback: once players and coaches see the PI, they may optimize visible features, creating a Goodhart trap in which the weights no longer track win-relevant behavior. Fifth, sample-size drift: rare playstyles have fewer historical examples, so their percentile tables and permutation weights are noisier across weeks. Sixth, broadcast comparability: the PI is presented as a cross-role comparator [PAGE 8], but cross-week comparison requires stable histograms and stable playstyle definitions. The paper’s 2019–2020 tournament deployments at ESL Premiership Winter Skirmish 2019, ESL Germany 2020, ESL Thailand 2020, and ESL Birmingham 2020 [PAGE 11–13] sit exactly in this multi-week trap: the product is real, but its historical conditioning is perishable.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The PI creates a recursive belief system. The model builder believes that historical percentile plus win-predictive weight measures performance. The broadcaster believes the PI is a storytelling shortcut. The spectator believes the number compares players fairly across roles. The player knows the number exists and may adapt behavior to it. The opponent knows the player may adapt and may counter-adapt. This is not a one-level measurement problem; it is a nested strategic problem.

Crisis habit regression appears when a team is behind and players revert to habitual farming, defensive positioning, or safe support play. The PI’s playstyle label is fixed at five minutes [PAGE 11], so a later crisis regression may be scored against a historical distribution that no longer matches the player’s current role behavior. The model may read rational adaptation as a percentile decline because the feature vector has shifted relative to the five-minute playstyle.

The counter-trap is that an opponent can exploit the PI’s feature weights. If a high-weight feature is, for example, hero damage or net worth, an opponent can bait fights or concede objectives in a way that inflates the visible feature while reducing actual win probability. Because the PI is a weighted percentile sum, not a causal win-probability estimator, a player can look better on the PI while making worse strategic choices. The paper’s own caution that model accuracy is used as confidence in feature importance, not as an improved predictor [PAGE 10], supports this reading.

The clock is the third layer. The playstyle detector runs at five minutes; the histograms and weights are time-indexed from five to thirty minutes; after thirty minutes the system freezes the 30-minute tables [PAGE 11]. Early in the match, the model is uncertain [PAGE 10]. Late in the match, the model is stale. The clock therefore creates two traps: premature role classification and late-game distribution mismatch. A recursive theory of mind must treat the PI as a time-stamped, role-conditioned, product-facing signal, not as a timeless skill score.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
For a physical, biomechanical, or weather veto to apply, there must be a causal path from that layer into the PI that is not mediated by the model’s feature vector or live feed. The source’s feature vector is explicitly in-game telemetry: XP, LEVEL, MAX_HEALTH, MAX_MANA, LAST_HITS, DENIS, NET_WORTH, KILLS, DEATHS, ASSISTS, CAMPS_STACKED, SUPPORT_GOLD_SPENT, and HERO_DAMAGE [PAGE 8, Table 2]. No physical, biomechanical, or meteorological variable appears in that table. Dota 2 heroes are virtual avatars; the paper does not model human biomechanics, ground reaction forces, fatigue, temperature, wind, or precipitation. The physical/biomechanical/weather layer is therefore not a direct covariate layer for the PI.

The veto proof is mediation-based. If a weather event affects the match, it must act through infrastructure—power, network latency, server availability, or tournament scheduling—and then through missing or lagged live telemetry. The paper itself says: “The only limitation to the Performance Index's use in live matches is access to a live feed and delivery methods” [PAGE 14]. That is an infrastructure veto, not a physical-layer veto. If player fatigue affects input precision, it is a biomechanical path, but the paper does not measure it; it would enter only as noisy telemetry. If a patch changes game physics, that is a software-layer distribution shift, already covered by the single-patch requirement [PAGE 6]. Thus the correct adjudication is: physical and weather variables are not admissible direct vetoes; they are admissible only as infrastructure or telemetry-quality vetoes. A biomechanical veto would require a measured variable in the feature set or a demonstrated causal path to those features, neither of which the paper provides.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
RLVR-style verification requires replayable interventions with measurable outcomes. Three counterfactual vetoes are sufficient to test the PI’s claimed validity.

1. Patch-drift counterfactual. Intervention: hold the same professional replays fixed, but recompute \(H_{f,t,S}\) and \(w_{f,t,S}\) on the next patch and compare the old-patch PI with the new-patch PI for the same player-minutes. Prediction: if the single-patch requirement is real [PAGE 6], cross-patch rank agreement will degrade; pre-register a threshold such as Spearman rank correlation below 0.7 or top-quartile disagreement above 25%. Veto condition: if the threshold is crossed, the PI cannot be used as a cross-patch comparator; it is a patch-local descriptive score. This is verifiable because both patch datasets and the same replay-derived features are available.

2. Playstyle-label swap counterfactual. Intervention: at \(t=5\), swap the detected playstyle \(S_i\) of a player with another playstyle while holding all telemetry fixed, then recompute \(PI_{i,t}\) using the swapped histogram and weight tables. Prediction: if the PI is robust to role detection, the induced change should be small relative to within-playstyle variance; if the five-minute detector is load-bearing, the change will be large. Veto condition: if the mean absolute PI change exceeds one within-playstyle standard deviation for more than a pre-registered fraction of player-minutes, the PI is not robust to playstyle misclassification. This directly tests the paper’s five-minute detection dependency [PAGE 11].

3. Weight-singularity and negative-importance counterfactual. Intervention: audit all 250 Random Forest models for \(\sum_f w_{f,t,S}\le 0\) and \(\min_f w_{f,t,S}<0\), then recompute the PI with and without clipping negative weights. Prediction: because permutation importance can be negative and correlated features can produce unstable drops, at least some models will violate the convex-combination assumption; the unclipped formula will produce out-of-range \(PI\) or rank reversals. Veto condition: if any deployed \((S,t)\) table has a non-positive denominator, or if unclipped \(PI\notin[0,1]\) for any player-minute while clipped \(PI\in[0,1]\), the normalized weighted-sum interpretation is vetoed until a negative-weight policy is specified. This is verifiable by recomputing permutation importance from the saved models and replay data [PAGE 10–11].
</RLVR_COUNTERFACTUAL_VETOES>