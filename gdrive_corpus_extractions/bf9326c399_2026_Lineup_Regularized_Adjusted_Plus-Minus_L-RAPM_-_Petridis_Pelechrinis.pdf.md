---
source: "2026 Lineup Regularized Adjusted Plus-Minus (L-RAPM) - Petridis, Pelechrinis.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 7
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5867
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on the provided source paper: "Lineup Regularized Adjusted Plus-Minus (L-RAPM): Basketball Lineup Ratings with Informed Priors" by Petridis and Pelechrinis (arXiv:2601.15000v1).

Constraints:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

I need to carefully analyze the paper and produce formal, academic-style content within these sections.

Key content from paper:
- Problem: NBA lineups sparse data (~25-30 possessions per lineup avg, actually 17 off/17 def per text, std dev 56). More than 600 lineups per team per season.
- Raw ratings (offensive/defensive/net per 100 possessions) noisy.
- Example: lineup λa 10 offensive possessions, 13 points -> 113.0 ORtg. One made 3 becomes miss (64% miss rate) -> 100.0. Difference same magnitude as best vs worst team.
- Opponent strength adjustment exists but basic: subtract average opponent player ratings (times 5).
- L-RAPM: two components: (1) player RAPM ratings from prior season, (2) lineup regression shrunk to informed priors from player ratings.
- Player RAPM optimization:
min_γ Σ_i (y_i - (γ_0 + Σ_j γ_j,off x_i,j,off + Σ_j γ_j,def x_i,j,def))^2 + λ_off Σ_j γ_j,off^2 + λ_def Σ_j γ_j,def^2
- x_i,p,off = 1 if on offense, x_i,p,def = -1 if on defense, else 0. y_i = points scored during possession i. γ_0 = league average points per possession.
- λ_off = 4000, λ_def = 6000 (2022-23 validation).
- Lineup prior: π_λa,off = league_ppp + Σ_{k=1..5} γ_k,off; π_λa,def = league_ppp + Σ γ_k,def.
- Lineup regression:
min_β Σ_i (y_i - (β_0 + Σ_j β_j,off x_i,j,off + Σ_j β_j,def x_i,j,def))^2 + λ Σ_j (β_j,off - π_j,off)^2 + λ Σ_j (β_j,def - π_j,def)^2
- l = number of lineups, n = number of data points. x indicates lineup on offense/defense/not involved.
- Data: 2022-23 for player ratings, 2023-24 for evaluation (regular + playoffs). Rookies/new players set to -1 each.
- Evaluation: expanding window. First 4 weeks predict week 5, then weeks 1..n-1 predict week n. Metric RMSE. Relative improvement δ_L-RAPM = (RMSE_L-RAPM - RMSE_baseline)/RMSE_baseline.
- Results: improvements larger with fewer data. Unseen lineups: δ ~5%. 1.5% improvement adds ~3.4 points per game (home edge ~2 points mentioned but I must not discuss betting lines/handicap? Wait, constraint says zero betting lines: never mention spreads, totals, moneylines, or odds. The paper mentions "home edge that betting markets incorporate in their handicap, which is about 2 points". I should avoid referencing betting markets/handicap/spreads. I can mention the 3.4 points per game as a raw scoring differential without invoking betting markets. Actually, mentioning "home edge" in context of betting markets might violate. Better to avoid that comparison entirely or reframe as "approximately 3.4 points per game" without betting market reference. I will not mention betting lines at all.
- Breakdown/singularity: small sample sizes, unseen lineups (cold start), rookies set to -1 (arbitrary prior), single regularization constant for offense/defense, player ratings from previous season stale.

I need to write >=1000 words total across sections. THINK_TRACE alone >=400 words.

Structure:
<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Discuss the math, the sparsity, the regularization path, the prior construction, the expanding window, RMSE sign convention (note δ is negative if L-RAPM better? They define δ = RMSE_L - RMSE_baseline / RMSE_baseline. If L-RAPM has lower RMSE, δ is negative. They say "improvement" but formula yields negative. I should note this sign convention gray zone. Also δ ~5% for unseen lineups but baseline uses league average, so RMSE_baseline is high; L-RAPM prior helps. Gray zones: rookies set to -1 (arbitrary, dimensionally points per possession? γ units are points per possession; setting -1 each means -5 ppp prior, huge shrinkage), single λ for both offense/defense despite different stabilization rates, prior season ratings stale (seasonal drift), expanding window overlaps? No, out-of-sample weekly. Possession-level y_i is points scored (0,1,2,3,4?). Linear regression on bounded count outcome—heteroscedasticity, Gaussian assumption breakdown. Also the basic adjustment multiplies by 5 (5 players) assuming additive opponent ratings.
<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations. Include equations from pages 3-4. Units: points per possession (ppp), per 100 possessions. Page citations [PAGE 3], [PAGE 4], etc. Breakdown regimes: n << l, unseen lineups, cold start rookies.
<RETROCAUSAL_GENEALOGY>: Historical lineage: APM (Rosenbaum 2004, Winston 2022), RAPM (Sill 2010), box-score priors (ESPN RPM, 538 RAPTOR), Deshpande & Jensen 2016, network embedding Linnet (Pelechrinis 2018), Partnow 2021 offense/defense stabilization. Multi-week traps: expanding window evaluation, seasonal drift, roster turnover.
<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. Coaches reacting to small samples (recency bias), raw rating overreaction to single possessions (the 3-point example), L-RAPM as counter-trap (shrinkage to prior), clock = expanding window / season timeline. Crisis habit: coaches experimenting with new lineups/injuries -> unseen lineups -> baseline league average vs L-RAPM prior.
<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Basketball is indoor controlled environment, weather null. Physical: player fatigue, injury, substitution patterns (not modeled). Biomechanical: player-specific shooting mechanics affecting the 64% miss rate example. Veto: L-RAPM assumes player ratings additive and stationary; veto if injury changes lineup chemistry, if player load management alters minutes, if officiating changes. Since indoor, weather veto is null/empty set.
<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning via Verifiable Rewards? Or just verifiable scenarios. I need 3 scenarios where model breaks, with predictions.
   1. Rookie/cold-start: new player not in prior season, set γ=-1. Prediction: L-RAPM prior severely biased downward (-5 ppp across 5 players if all rookies), RMSE worse than baseline for lineups with >2 rookies early season.
   2. Midseason trade/acquisition: player changes teams, prior from old team invalid. Prediction: δ_L-RAPM degrades relative to baseline after trade deadline; baseline raw ratings adapt faster with >50 possessions.
   3. Offensive/defensive asymmetry: single λ shrinks both equally, but offense stabilizes faster. Prediction: for lineups with <50 possessions, offensive β over-shrunk (biased toward prior), defensive β under-shrunk relative to optimal separate λ; RMSE_off > RMSE_def gap widens as sample decreases below 50.

Need to ensure no betting lines. The paper mentions betting markets handicap; I must not mention spreads/totals/moneylines/odds. I can mention "points per game" as raw scoring differential but avoid wagering context. Better to omit the home edge comparison entirely or just say "a 1.5% RMSE improvement aggregates to roughly 3.4 points per game across ~100 possessions" without mentioning betting.

Word count: Need >=1000 words total. THINK_TRACE >=400. I'll aim for substantial each.

Citations: Use [PAGE N] markers and verbatim quotes where appropriate. Since source pages provided, cite exact markers.

Let's draft carefully.

THINK_TRACE (>=400 words):
- Start with the identifiability problem: more than 600 lineups per team per season, average lineup ~25-30 possessions total (17 off + 17 def per page 1), std dev 56. Design matrix X is extremely sparse; l (number of lineups) large relative to n per lineup.
- Raw rating noise example: λa 10 off possessions, 13 points = 113.0 per 100. One possession flip (3pt made vs missed, 64% miss rate) -> 100.0. This is 13-point swing on small denominator. Variance of rating scales as 1/N.
- L-RAPM two-stage. Stage 1: player RAPM. Equation with γ. x_i,p,def = -1 coding (defense saves points). y_i points per possession. γ_0 league average ppp. Ridge penalties λ_off=4000, λ_def=6000 (2022-23 validation). Units: γ in points per possession. λ has units of (points per possession)^2 * n? Actually ridge λ scales penalty relative to SSE; units depend on data count. But we can state λ_off and λ_def are dimensionless regularization weights chosen by validation RMSE.
- Stage 2: lineup prior π = league_ppp + sum of 5 player γs. Units ppp. Then lineup regression shrinks β toward π rather than 0. Penalty λ Σ(β-π)^2. Gray zone: same λ for offense and defense despite Partnow (2021) note offense stabilizes faster. Single λ creates anisotropic shrinkage mismatch.
- Gray-zone audit: (1) sign convention of δ: δ=(RMSE_L - RMSE_base)/RMSE_base. Negative δ means improvement, but paper calls positive numbers "improvement"? Figure shows improvements. Need to check sign: if RMSE_L < RMSE_base, numerator negative, δ negative. They may report magnitude. This is a sign-convention gray zone. (2) Rookies set to -1 each: arbitrary prior of -1 ppp per player, -5 ppp lineup prior, far from league average (~1.1 ppp? Actually league average points per possession ~1.1). This is a breakdown regime for cold-start rookies. (3) Stale prior: player ratings from 2022-23 used for 2023-24; aging, injury, roster change not modeled. (4) Linear Gaussian regression on bounded integer points y_i ∈ {0,1,2,3,4} violates homoskedastic Gaussian assumption; possession points are discrete, skewed. Breakdown as possessions → 0.
- Multi-hop: shrinkage intensity depends on λ and sample size n_j per lineup. As n_j → ∞, β_j → raw OLS (data dominates). As n_j → 0, β_j → π_j (prior dominates). Crossover at effective sample size related to λ. For lineups >500 possessions raw converges; <50 prior dominates. This is the core bias-variance tradeoff.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define notation: possessions i=1..n, players p=1..m, lineups j=1..l.
- y_i ∈ ℝ_{≥0}, points scored on possession i. Units: points per possession (ppp).
- x_i,p,off ∈ {0,1}, x_i,p,def ∈ {-1,0,1}? Actually paper says if defense x=-1, else 0. So x_i,p,def = -1 if on defense, else 0. Not symmetric but okay.
- Equation 1 (Player RAPM): min_γ [ Σ_i (y_i - (γ_0 + Σ_j γ_j,off x_i,j,off + Σ_j γ_j,def x_i,j,def))^2 + λ_off Σ_j γ_j,off^2 + λ_def Σ_j γ_j,def^2 ]. [PAGE 3]
- γ_0: league average ppp. γ_p,off: ppp above league average. γ_p,def: ppp below league average saved (positive = better defense). [PAGE 3]
- λ_off=4000, λ_def=6000. [PAGE 3]
- Prior: π_λa,off = league_ppp + Σ_{k=1}^5 γ_k,off; π_λa,def = league_ppp + Σ γ_k,def. [PAGE 4]
- Equation 2 (Lineup L-RAPM): min_β [ Σ_i (y_i - (β_0 + Σ_j β_j,off x_i,j,off + Σ_j β_j,def x_i,j,def))^2 + λ Σ_j (β_j,off - π_j,off)^2 + λ Σ_j (β_j,def - π_j,def)^2 ]. [PAGE 4]
- x_i,j indicates lineup j on offense/defense/not involved. l number of lineups. [PAGE 4]
- Evaluation: expanding window; weeks 1..4 train, predict week 5; then 1..n-1 predict n. Metric RMSE. δ_L-RAPM = (RMSE_L - RMSE_base)/RMSE_base. [PAGE 5]
- Breakdown/singularity: n_j = 0 (unseen lineup): β undefined from data; fallback to π only; baseline uses league_ppp. Rookies: γ=-1 arbitrary. λ single for off/def. Lineup >500 possessions: raw converges, L-RAPM marginal benefit small. [PAGE 5-6]
- Closed form? Ridge regression closed form: β = (X^T X + λ I)^{-1} (X^T y + λ π) if intercept handled. Could mention but not necessary. Might be good to state formal operator.

RETROCAUSAL_GENEALOGY:
- Lineage: Rosenbaum (2004) APM, Winston et al. (2022) Mathletics, Sill (2010) RAPM (ridge to zero), Deshpande & Jensen (2016) box-score priors, ESPN RPM / 538 RAPTOR proprietary priors. [PAGE 2]
- Pelechrinis (2018) Linnet network embedding: nodes=lineups, edges=outperformance, node2vec; fails on unseen lineups (inductive gap) and small samples. [PAGE 3]
- Basic opponent adjustment: subtract 5 * average opponent player rating from raw defensive rating. Example 113.2 - (5*0.26) = 111.9. Still small sample/outlier prone. [PAGE 3]
- L-RAPM innovation: informed prior from player ratings, not shrinkage to zero; shrinkage to lineup-specific π. [PAGE 3-4]
- Multi-week traps: expanding window evaluation means early season all lineups sparse; later season mix of high/low possession lineups. No temporal trend in δ magnitude because composition changes weekly. [PAGE 5]
- Seasonal drift: using prior season ratings ignores within-season evolution; proposed fix: continual updating (increases compute). Rookies/overseas players set to -1. [PAGE 6]
- Offense/defense stabilization asymmetry (Partnow 2021): single λ suboptimal. [PAGE 6]

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Coach sees raw rating swing (113 vs 100 on one possession) and overreacts—benching lineup, changing rotation based on noise. This is recency/small-sample habit.
- Counter-trap: L-RAPM imposes shrinkage to player-informed prior, resisting overreaction to <50 possessions. It says "trust the players, not the 10-possession sample."
- Clock: The expanding window is the clock. Early season: all lineups in crisis regime (n small), L-RAPM advantage maximal. Late season: high-possession lineups exit crisis regime, raw ratings converge, L-RAPM edge narrows but unseen lineups (injuries, experiments) remain in crisis regime. [PAGE 5-6]
- Theory of mind: The model assumes the opposition's lineup strength is captured by covariates; coach's recursion: if I know L-RAPM rates my lineup highly against theirs, do I deploy it? Opponent adapts. Game-theoretic layer not modeled; L-RAPM is descriptive/predictive static, not dynamic equilibrium.
- Unseen lineups: coaches experiment due to injuries/acquisitions; baseline = league average (naive theory of mind: all unknown lineups are average). L-RAPM counter-trap: unknown lineup = sum of known player priors.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: Basketball is indoor, climate-controlled; weather veto = null set (no weather, no wind, no precipitation). No outdoor biomechanical interference.
- Biomechanical layer: Player shooting mechanics underlie the 64% three-point miss example; fatigue, load management, injury alter γ over time. L-RAPM treats γ as fixed from prior season—veto if player fatigue/injury changes true γ midseason.
- Roster/chemistry layer: Additive prior assumes lineup rating = sum of individual ratings; veto on synergy/antisyndrome (e.g., two ball-dominant guards), defensive communication, coach-specific schemes.
- Officiating layer: Possession points y_i depend on referee calling tendencies; not modeled; veto if officiating regime shifts (playoffs vs regular season—paper notes playoff outliers in last 2 weeks due to few games/lineups).
- Veto verdict: Model valid only for regular-season possession-level prediction with stable rosters and prior-season player ratings; vetoed for playoff small-sample outlier weeks, rookies (-1 prior), and midseason trades.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable veto scenarios + predictions. RLVR maybe "Reinforcement Learning Verifiable Rewards" but here likely just verifiable scenarios. I'll frame as verifiable counterfactuals.
Scenario 1: All-rookie lineup cold start. Five players absent from 2022-23 → γ=-1 each → π_off = league_ppp - 5, π_def = league_ppp - 5 (assuming -1 for both). Actual league average ~1.1 ppp; prior ≈ -3.9 ppp, absurd. Prediction: For any previously unseen lineup composed entirely of such players, L-RAPM prior RMSE will exceed baseline league-average RMSE by >20% in the first 10 possessions; veto triggers when n_j < 20 and ≥3 newcomers.
Scenario 2: Midseason trade. Player acquired after 2022-23 or changed teams; prior from old team invalid. Prediction: After trade deadline, for lineups containing the traded player with 20-100 possessions, δ_L-RAPM will be less negative (or positive) relative to baseline; raw rating adapts faster once n_j > 50. Veto if |δ| < 1% for n_j ∈ [50,200].
Scenario 3: Offense/defense regularization mismatch. Single λ shrinks both equally; offense stabilizes faster. Prediction: In bins n_j < 50, offensive β over-shrunk toward π_off (bias), defensive β under-shrunk relative to optimal λ_def < λ_off. Measurable as RMSE_off / RMSE_def ratio > 1.05 for n_j < 50, converging to 1 for n_j > 500. Veto if separate λ_off_lineup, λ_def_lineup reduce weekly RMSE by >3% relative to single λ.

Need to ensure total words >=1000. I'll write generously.

Also avoid any mention of betting. The paper mentions home edge/betting markets; I will not repeat.

Check for "toy equations": I won't invent fake ratios. All equations are from paper or standard ridge closed form (I can mention closed form as standard). Units specified: ppp, possessions, weeks. Breakdown regimes specified.

Page citations: [PAGE 1], [PAGE 2], [PAGE 3], [PAGE 4], [PAGE 5], [PAGE 6], [PAGE 7] as needed.

Verbatim quotes: I can quote short phrases with page markers. e.g., "an average lineup plays approximately 17 possessions on offense and 17 on defense" [PAGE 1]. "δ_L-RAPM ∼5%" [PAGE 6]. "more than 600 lineups" [PAGE 1]. "λ_off = 4000 and λ_def = 6000" [PAGE 3].

Let's compose final answer. Must use exact XML section tags. No markdown outside? User wants those sections. I will output only the XML sections with content. Ensure THINK_TRACE >=400 words.

Word count check: I'll estimate. THINK_TRACE maybe 500. SOURCE_OPERATORS maybe 300. RETROCAUSAL maybe 250. RECURSIVE maybe 250. CROSS_LAYER maybe 200. RLVR maybe 250. Total ~1750. Good.

Let's write.

One nuance: The formula for δ has numerator RMSE_L - RMSE_base. If L-RAPM is better, RMSE_L < RMSE_base, so δ < 0. The paper likely reports magnitude or negative values. I'll note this sign convention as gray-zone audit.

Be careful: "zero toy equations" means don't invent fake ratios like Force/Fatigue. I'm using real equations from paper. Good.

Let's draft content now.

THINK_TRACE content:

The central identifiability crisis in L-RAPM is cardinal, not merely statistical: an NBA team deploys more than 600 distinct lineups in a season, so the average lineup occupies the court for roughly 25–30 total possessions—specifically about 17 offensive and 17 defensive possessions, with a standard deviation of 56 [PAGE 1]. The design matrix is therefore radically underdetermined when l, the number of lineup coefficients, is set against n, the number of possession-level observations allocated to any single λ. The paper’s noise illustration is decisive: a lineup λa with 10 offensive possessions and 13 points has a raw offensive rating of 113.0 points per 100 possessions; converting one made three-pointer into a miss—which occurs roughly 64% of the time—collapses that rating to 100.0, a 13-point swing comparable to the gap between the league’s best and worst offensive teams [PAGE 1]. Because rating variance scales inversely with possession count, raw ratings are high-variance, low-signal estimators for the majority of lineups.

L-RAPM addresses this through a two-stage regularization cascade. Stage 1 estimates individual player ratings via Sill (2010) RAPM on the previous season’s data. For each possession i, y_i ∈ ℝ_{≥0} is the points scored; x_{i,p,off} = 1 if player p is on offense, x_{i,p,def} = −1 if p is on defense, and 0 otherwise. The objective [PAGE 3] is a ridge regression in which γ_0 is league-average points per possession, γ_{p,off} measures points per possession above league average contributed on offense, and γ_{p,def} measures points per possession below league average saved on defense. Separate penalties λ_off = 4000 and λ_def = 6000 are selected by validation-set error [PAGE 3]. Stage 2 constructs an informed lineup prior π_{λ,off} = league_ppp + Σ_{k=1}^5 γ_{k,off}, and analogously for defense [PAGE 4], then solves a lineup-level ridge problem shrunk toward π rather than toward zero [PAGE 4].

Gray-zone audit. (i) Sign convention: δ_{L−RAPM} = (RMSE_{L−RAPM} − RMSE_{baseline}) / RMSE_{baseline} [PAGE 5]; a genuine improvement yields δ < 0, yet the paper discusses “improvement” as a positive magnitude, creating a reporting-sign ambiguity. (ii) Cold-start singularity: players absent from the prior season (rookies, overseas acquisitions) are assigned γ = −1 on both offense and defense [PAGE 5]. A five-player lineup of such newcomers receives π ≈ league_ppp − 5 on each side, a prior so far from the empirical league mean (~1.1 points per possession) that it constitutes an arbitrary, non-identifiable anchor. (iii) Temporal staleness: player ratings are frozen from the previous season, ignoring aging, injury, and within-season role changes; the paper itself proposes continual updating as future work [PAGE 6]. (iv) Model misspecification: y_i is a bounded, discrete count (0–4 points) regressed with a linear Gaussian ridge operator; heteroskedasticity and non-Gaussian errors become severe as n_j → 0. (v) Anisotropic shrinkage: a single λ is applied to both offensive and defensive lineup coefficients [PAGE 4] despite the paper’s own citation that offensive performance stabilizes faster than defensive performance [PAGE 6], implying the penalty is mis-calibrated for at least one side of the ball.

The bias–variance crossover is governed by possession count. As n_j → ∞, the data term dominates and β_j converges toward the raw adjusted rating; as n_j → 0, the penalty dominates and β_j collapses to π_j. The paper identifies roughly 500 possessions as the threshold where raw ratings have converged and L-RAPM’s marginal benefit vanishes, whereas below 50 possessions the prior dominates [PAGE 5]. This is the exact regime in which most NBA lineups reside.

I need to ensure this is >=400 words. Let's count roughly: seems around 450-500. Good.

SOURCE_OPERATORS_AND_EQUATIONS content:
Include all formal equations with LaTeX and page citations. Define units. Breakdown regimes.

RETROCAUSAL_GENEALOGY content:
Lineage and multi-week traps.

RECURSIVE_THEORY_OF_MIND content:
Crisis habit, counter-trap, clock.

CROSS_LAYER_VETO_ADJUDICATION content:
Physical/biomechanical/weather veto.

RLVR_COUNTERFACTUAL_VETOES content:
3 scenarios + predictions.

No betting lines anywhere.

Let's write the final output carefully, ensuring all tags are present and closed properly.
</NATIVE_REASONING>

<THINK_TRACE>
The central identifiability crisis in L-RAPM is cardinal, not merely statistical: an NBA team deploys more than 600 distinct lineups in a season, so the average lineup occupies the court for roughly 25–30 total possessions—specifically about 17 offensive and 17 defensive possessions, with a standard deviation of 56 [PAGE 1]. The design matrix is therefore radically underdetermined when l, the number of lineup coefficients, is set against n, the number of possession-level observations allocated to any single λ. The paper’s noise illustration is decisive: a lineup λa with 10 offensive possessions and 13 points has a raw offensive rating of 113.0 points per 100 possessions; converting one made three-pointer into a miss—which occurs roughly 64% of the time—collapses that rating to 100.0, a 13-point swing comparable to the gap between the league’s best and worst offensive teams [PAGE 1]. Because rating variance scales inversely with possession count, raw ratings are high-variance, low-signal estimators for the majority of lineups.

L-RAPM addresses this through a two-stage regularization cascade. Stage 1 estimates individual player ratings via Sill (2010) RAPM on the previous season’s data. For each possession i, y_i ∈ ℝ_{≥0} is the points scored; x_{i,p,off} = 1 if player p is on offense, x_{i,p,def} = −1 if p is on defense, and 0 otherwise. The objective [PAGE 3] is a ridge regression in which γ_0 is league-average points per possession, γ_{p,off} measures points per possession above league average contributed on offense, and γ_{p,def} measures points per possession below league average saved on defense. Separate penalties λ_off = 4000 and λ_def = 6000 are selected by validation-set error [PAGE 3]. Stage 2 constructs an informed lineup prior π_{λ,off} = league_ppp + Σ_{k=1}^{5} γ_{k,off}, and analogously for defense [PAGE 4], then solves a lineup-level ridge problem shrunk toward π rather than toward zero [PAGE 4].

Gray-zone audit. (i) Sign convention: δ_{L−RAPM} = (RMSE_{L−RAPM} − RMSE_{baseline}) / RMSE_{baseline} [PAGE 5]; a genuine improvement yields δ < 0, yet the paper discusses “improvement” as a positive magnitude, creating a reporting-sign ambiguity. (ii) Cold-start singularity: players absent from the prior season (rookies, overseas acquisitions) are assigned γ = −1 on both offense and defense [PAGE 5]. A five-player lineup of such newcomers receives π ≈ league_ppp − 5 on each side, a prior so far from the empirical league mean (~1.1 points per possession) that it constitutes an arbitrary, non-identifiable anchor. (iii) Temporal staleness: player ratings are frozen from the previous season, ignoring aging, injury, and within-season role changes; the paper itself proposes continual updating as future work [PAGE 6]. (iv) Model misspecification: y_i is a bounded, discrete count (0–4 points) regressed with a linear Gaussian ridge operator; heteroskedasticity and non-Gaussian errors become severe as n_j → 0. (v) Anisotropic shrinkage: a single λ is applied to both offensive and defensive lineup coefficients [PAGE 4] despite the paper’s own citation that offensive performance stabilizes faster than defensive performance [PAGE 6], implying the penalty is mis-calibrated for at least one side of the ball.

The bias–variance crossover is governed by possession count. As n_j → ∞, the data term dominates and β_j converges toward the raw adjusted rating; as n_j → 0, the penalty dominates and β_j collapses to π_j. The paper identifies roughly 500 possessions as the threshold where raw ratings have converged and L-RAPM’s marginal benefit vanishes, whereas below 50 possessions the prior dominates [PAGE 5]. This is the exact regime in which most NBA lineups reside. A deeper multi-hop implication follows: because the prior is built from player ratings estimated on the prior season, L-RAPM implicitly assumes inter-seasonal stationarity of player impact. Any midseason trade, injury, or role change breaks the conditional independence between the prior π and the current possession outcomes y_i, which means the shrinkage target itself becomes a source of bias precisely when the sample size is too small for the data term to overwhelm it.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let i = 1,...,n index possessions, p = 1,...,m index players, and j = 1,...,l index lineups. The dependent variable y_i is points scored on possession i, measured in points per possession (ppp) at the possession level and rescaled to points per 100 possessions for reporting. The league-average intercept γ_0 is measured in ppp [PAGE 3].

Player RAPM (ridge-regularized adjusted plus-minus), optimized on the prior season:
min_{γ} Σ_{i=1}^{n} ( y_i − (γ_0 + Σ_{j=1}^{m} γ_{j,off} x_{i,j,off} + Σ_{j=1}^{m} γ_{j,def} x_{i,j,def}) )^2 + λ_off Σ_{j=1}^{m} γ_{j,off}^2 + λ_def Σ_{j=1}^{m} γ_{j,def}^2
where x_{i,p,off} ∈ {0,1} indicates offensive participation and x_{i,p,def} ∈ {−1,0} indicates defensive participation. γ_{p,off} is ppp above league average; γ_{p,def} is ppp below league average saved (positive = better defender). Empirically selected validation penalties: λ_off = 4000, λ_def = 6000 [PAGE 3]. λ carries units of squared ppp scaled by n relative to the sum-of-squares term, though it is treated as a tunable hyperparameter.

Informed lineup prior (in ppp):
π_{λ,off} = league_ppp + Σ_{k=1}^{5} γ_{k,off}
π_{λ,def} = league_ppp + Σ_{k=1}^{5} γ_{k,def}
[PAGE 4]. For unseen players, γ = −1 is assigned on both sides [PAGE 5].

Lineup L-RAPM (regularized regression for lineup matchups):
min_{β} Σ_{i=1}^{n} ( y_i − (β_0 + Σ_{j=1}^{l} β_{j,off} x_{i,j,off} + Σ_{j=1}^{l} β_{j,def} x_{i,j,def}) )^2 + λ Σ_{j=1}^{l} (β_{j,off} − π_{j,off})^2 + λ Σ_{j=1}^{l} (β_{j,def} − π_{j,def})^2
where x_{i,j} indicates whether lineup j is on offense, defense, or not involved in possession i [PAGE 4]. β_j are the final lineup ratings in ppp, adjusted for opposition through covariates and shrunk toward player-informed priors. A single λ is used for both offensive and defensive lineup coefficients [PAGE 4].

Evaluation protocol: expanding weekly windows; weeks 1–4 train, week 5 predicted; then weeks 1 through (n−1) predict week n [PAGE 5]. Metric: RMSE in ppp. Relative improvement:
δ_{L−RAPM} = (RMSE_{L−RAPM} − RMSE_{baseline}) / RMSE_{baseline} [PAGE 5]. For previously unseen lineups the baseline predicts league average ppp; L-RAPM reports δ_{L−RAPM} ≈ −5% (a 5% RMSE reduction) [PAGE 6]. A 1.5% RMSE improvement aggregates to roughly 3.4 points per game across roughly 100 possessions.

Exact breakdown and singularity regimes: (a) n_j = 0: lineup never observed in training; β_j is unidentified from data and collapses entirely to π_j; baseline falls back to league_ppp [PAGE 6]. (b) Rookies/newcomers: γ = −1 prior creates a biased anchor of approximately −5 ppp per five-player unit [PAGE 5]. (c) n_j ≥ 500: raw ratings converge; L-RAPM benefit approaches zero [PAGE 5]. (d) 0 < n_j < 50: prior dominates; posterior is sensitive to misspecification of π and λ [PAGE 5]. (e) Single λ across offense/defense: suboptimal because offense stabilizes faster than defense [PAGE 6]. (f) Last two weeks of season (playoffs): very few games and newly seen lineups produce outlier weekly RMSE [PAGE 6].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
L-RAPM descends from a well-documented lineage of NBA impact estimation. Adjusted plus-minus (APM) originates in Rosenbaum (2004) and Winston et al. (2022), where each possession is a data point and player coefficients divide credit for points scored or allowed while adjusting for teammates and opponents [PAGE 2]. Sill (2010) introduced RAPM, adding ridge regularization that shrank coefficients toward zero to improve predictive power over purely descriptive APM [PAGE 2]. Later proprietary systems (ESPN’s RPM, 538’s RAPTOR) replaced the zero prior with box-score-informed priors, but those are not publicly replicable, which motivated Petridis and Pelechrinis to use Sill’s public RAPM ratings as their lineup prior [PAGE 2]. Deshpande & Jensen (2016) represent the box-score prior tradition that L-RAPM adapts at the lineup level rather than the player level [PAGE 2].

On the lineup side, the dominant public baseline remains raw offensive, defensive, and net ratings per 100 possessions from nba.com, optionally adjusted by subtracting five times the average opponent player rating [PAGE 3]. That adjustment improves on raw ratings but remains sample-starved and outlier-sensitive: the paper’s example shifts a defensive rating from 113.2 to 111.9 via 113.2 − (5 × 0.26), yet the underlying possession count remains tiny [PAGE 3]. Pelechrinis (2018) proposed Linnet, a network-embedding approach in which lineups are nodes and edges are weighted by net rating outperformance, solved with node2vec; it cannot predict previously unseen lineups because they are absent from the training graph, and it inherits the same small-sample noise in edge weights [PAGE 3].

L-RAPM’s causal innovation is to treat the lineup rating as a partially identified quantity: the regression identifies opponent-adjusted effects, while the player-informed prior supplies identification for sparse cells. This is a Bayesian-frequentist hybrid—empirical Bayes shrinkage toward a data-derived, lineup-specific center rather than a global zero.

Multi-week traps are embedded in the evaluation clock. The expanding-window design means that early in the season every lineup is sparse (high L-RAPM benefit), while late in the season the pool mixes high-possession lineups (raw ratings converged) with low-possession lineups (prior dominant), so no monotonic trend in weekly δ emerges [PAGE 5]. A second trap is seasonal stationarity: using 2022-23 player ratings to prior 2023-24 lineups ignores roster turnover, aging, and role changes; the paper flags rookies set to −1 as an explicit patch for this gap [PAGE 5–6]. A third trap is the playoff boundary: the final two weeks contain few games, few newly seen lineups, and outlier RMSE behavior, so weekly δ estimates there are high-variance and not representative of the regular-season operating regime [PAGE 6].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the coach’s impulse to overreact to small-sample lineup noise. The paper’s central motivational example is precisely this habit: one possession flipping from a made three-pointer to a miss (a 64% base-rate event) swings a 10-possession raw offensive rating from 113.0 to 100.0, a difference as large as the best-to-worst team gap in the league [PAGE 1]. A coach observing that swing may bench the lineup, alter rotations, or change matchup assignments based on variance rather than signal. This is a recursive error: the coach treats the noisy observation as ground truth, conditions future lineup decisions on it, and thereby amplifies estimation error into playing-time allocation.

L-RAPM functions as a counter-trap to that recursion. By shrinking lineup coefficients β toward player-informed priors π, the model imposes a “trust the players, not the 10-possession sample” prior. For n_j < 50, the posterior mean is dominated by π; for n_j > 500, the data term overwhelms the prior and β approaches the raw adjusted rating [PAGE 5]. The counter-trap is therefore dosage-dependent: it intervenes most strongly precisely where the coach’s crisis habit is most active—small samples, new rotations, end-of-bench experiments, and injury replacements.

The clock is the expanding weekly window. Early-season crisis: every lineup has n_j ≈ 17–30 total possessions, so the prior dominates and L-RAPM’s edge over raw ratings is maximal [PAGE 1, 5]. Mid-season bifurcation: some lineups accumulate >500 possessions and exit the crisis regime (raw ratings suffice), while others remain below 50 and stay crisis-dependent; L-RAPM’s weekly δ therefore shows variability without a clean temporal trend [PAGE 5]. Late-season recursive layer: coaches experiment with new lineups due to injuries or acquisitions, generating previously unseen λ for which the baseline predicts league average ppp while L-RAPM predicts π from constituent player ratings [PAGE 6].

The theory-of-mind boundary is strategic opacity. L-RAPM predicts expected points per possession given a lineup matchup, but it does not model the opponent’s recursive response—if a coach deploys a high-rated lineup, the opposing coach may counter-deploy, changing λ_O and invalidating the static conditioning assumption. The model is predictive, not equilibrium-seeking; its recursive theory of mind stops at opponent adjustment via covariates and does not extend to dynamic adaptation within a game or across a playoff series.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: NBA games are played indoors under climate-controlled conditions, so weather, wind, precipitation, and altitude are null variables; the weather veto set is empty. No thermal or atmospheric degradation of the ball or player endurance enters the possession-level likelihood y_i.

Biomechanical layer: Player shooting mechanics and fatigue regimes underlie the paper’s three-pointer noise example, but L-RAPM treats γ_{p,off} and γ_{p,def} as fixed constants drawn from the prior season. A veto is triggered if in-season load management, injury, or fatigue materially shifts a player’s true impact away from the prior-season estimate, because the shrinkage target π is then stale. The model contains no minute-restriction, load-management, or fatigue covariate; thus any midseason deterioration or improvement in a player’s biomechanical state violates the stationarity assumption.

Roster-chemistry layer: The prior is strictly additive—π_{λ} = league_ppp + Σ γ_k. This assumes no synergy, no ball-dominance crowding, and no defensive communication effects among the five players. A veto applies to lineups featuring known non-additive chemistries (e.g., two high-usage ball-handlers, or defensive anchors whose value is conditional on a specific rim protector), because the linear sum of player RAPM coefficients cannot capture interaction effects.

Officiating and phase layer: Possession outcomes y_i depend on referee calling tendencies and game phase. The paper notes that the last two weeks (playoffs) produce outlier RMSE because of very few games and few newly seen lineups [PAGE 6], which constitutes a phase-transition veto: regular-season regularization parameters λ_off = 4000, λ_def = 6000, and lineup λ are not validated for playoff officiating intensity or shortened sample frames.

Verdict: L-RAPM is defensible for regular-season, possession-level prediction with stable rosters and prior-season player ratings; it is vetoed for playoff small-sample outlier weeks, all-rookie or heavy-newcomer lineups (γ = −1 anchor), lineups containing midseason acquisitions whose prior-team ratings do not transfer, and any context where offensive and defensive stabilization rates require separate penalties.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (all-rookie cold start): A previously unseen lineup composed entirely of players absent from the 2022-23 season receives γ = −1 on both offense and defense for each of five players, yielding π ≈ league_ppp − 5 ppp per side [PAGE 5]. Given that league-average points per possession is roughly 1.1, this prior is absurdly negative. Verifiable prediction: for n_j < 20 possessions, the RMSE of L-RAPM’s prior-only prediction for such lineups will exceed the league-average baseline RMSE by more than 20%; the veto fires and the model should revert to league_ppp or a less punitive newcomer prior.

Scenario 2 (midseason trade invalidation): A player acquired after the 2022-23 season carries a prior from a different team or no prior at all. Lineups containing that player with 20–100 current-season possessions have an L-RAPM posterior contaminated by an invalid π. Verifiable prediction: after the trade deadline, δ_{L−RAPM} for lineups with n_j ∈ [50, 200] will converge toward zero (no improvement over baseline) because raw ratings adapt faster than the stale prior; if the single-λ L-RAPM fails to beat baseline by at least 1% in that bin, the prior is vetoed for that player’s lineups.

Scenario 3 (offense–defense regularization mismatch): A single λ shrinks both offensive and defensive lineup coefficients equally [PAGE 4], yet the paper notes offense stabilizes faster than defense [PAGE 6]. Verifiable prediction: for lineups with n_j < 50, the offensive RMSE will exceed the defensive RMSE by more than 5% because β_off is over-shrunk toward π_off while β_def is under-shrunk relative to an optimal, lower defensive penalty; for n_j > 500 the ratio should converge to 1. If separate lineup-level penalties (λ_off,λ_def) do not reduce weekly RMSE by at least 3% relative to the single-λ specification in the n_j < 50 bin, the isotropic shrinkage assumption is vetoed.
</RLVR_COUNTERFACTUAL_VETOES>