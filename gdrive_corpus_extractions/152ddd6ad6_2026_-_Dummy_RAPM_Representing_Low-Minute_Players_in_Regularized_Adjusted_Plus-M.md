---
source: "2026 - Dummy RAPM Representing Low-Minute Players in Regularized Adjusted Plus-Minus - Watts et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4504
---

<NATIVE_REASONING>
The user wants a deep analytical response based on the provided source text (a 10-page paper about Dummy RAPM). I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to produce at least 1000 words total across these sections. Each section must be present. I need to cite exact [PAGE N] markers and verbatim quotes from the source.

Let me plan the content:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). I'll derive the RAPM objective, the dummy augmentation, the penalty ratio interpretation, the validation grid, the statistical tests, and audit gray zones (e.g., lineup reconstruction from play-by-play, starter exclusions, garbage time inclusion, mean minutes per appearance vs total minutes, structural zeros, ρ not effective shrinkage due to non-standardization). Must be >=400 words.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations from the paper: stint response yi = 100∆i/qi, qi = (PH,i + PA,i)/2, filtered RAPM objective, dummy RAPM objective with γH, γA, ρ = λD/λP, RMSEs formula, R^2_oos,s formula, paired t-test stats, confidence interval, Table 2 numbers, Table 3/4 coefficients. Cite pages. Units: points per 100 team possessions, exposure qi in team possessions, λ ridge penalty. Breakdown regimes: when categories absent (structural zeros), rare 4-5 excluded players, 2019 starter exclusions, non-standardized predictors making ρ not literal shrinkage.

<RETROCAUSAL_GENEALOGY>: Historical lineage: Rosenbaum (2004) APM, WINVAL Sagarin/Winston, Hoerl & Kennard (1970) ridge, Sill (2010) RAPM, Fearnhead & Taylor (2011) Bayesian partial pooling, Deshpande & Jensen (2016) Bayesian win probability, Myers (2020) BPM. Multi-week traps: chronological windows Oct-Dec, Jan-Feb, Mar-Apr; adjacent seasons share players/coaches; 2019 starter exclusions; lockout 2011-12, disrupted 2019-20, COVID 2020-21 excluded. Mean minutes per appearance within training window vs Rosenbaum's 250 total minutes across two seasons.

<RECURSIVE_THEORY_OF_MIND>: This is a bit abstract but I need to interpret "crisis habit regression vs counter-trap vs clock" in the context of the paper/modeling decisions. Crisis habit regression: when models underperform, analysts revert to unfiltered RAPM or drop low-minute players entirely (crisis habit). Counter-trap: Dummy RAPM restores count info instead of estimating noisy individual coefficients. Clock: chronological validation, inner train/val/test, outer refit through February, test March-April; the "clock" of season phases and λP selection via cross-validated game-margin RMSE.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Since this is NBA basketball data, weather is largely irrelevant (indoor), but I can discuss physical layer: stint definitions, possession-ending events, garbage time/OT included, scoreboard margin reconstruction, technical free throws. Biomechanical: player substitutions, fatigue not modeled explicitly (no fake ratios), lineup continuity. Vetoes: what would invalidate the model? Official shift charts vs play-by-play reconstruction; starter metadata incomplete pre-2007; 2019 exclusions; garbage time inclusion may bias; no weather effect indoors.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? I need 3 scenarios where the model would fail/be vetoed, with predictions. Example: (1) if starter metadata incomplete in a season, model excludes games, prediction: RMSE improvement disappears or reverses; (2) if a season has many 4-5 low-minute player lineups (rare), structural zeros dominate, prediction: ρ=2.2 selection unstable; (3) if garbage time/OT removed, prediction: RMSE reduction changes because lineup-conditioned target changes; or if predictors standardized, ρ interpretation changes and selected ratio may shift.

Word count: Need >=1000 words total. I'll aim for ~1500-2000 words to be safe.

Let's draft carefully.

Important: No betting lines. No toy equations. Use real equations from the paper. Cite [PAGE N].

Let me write each section.

THINK_TRACE: I'll write a thorough derivation. Start with the stint setup. Define design matrix X. Show omitted variable bias intuition: if low-minute player columns removed, their stints remain but design incomplete. Correlated indicators cause omitted contributions attributed to retained players. Show dummy augmentation restores count information. Derive the objective functions. Show ridge solution coordinate descent. Discuss grid search: thresholds {0,5,...30}, ratios {0,0.1,...2}, then refined {1.0,...,2.5} selecting 2.2. Discuss statistical inference: paired t(15)=3.138 p=0.0068, CI [0.013,0.070], Wilcoxon W=120 p=0.0077, sign test p=0.0213. Gray zones: lineup reconstruction from play-by-play rather than official shift chart; starter exclusions concentrated in 2019 (19 games); mean minutes per appearance role-based; garbage time and overtime included; target is lineup-conditioned final margin not pregame forecast; ρ not effective shrinkage because predictors unstandardized and different frequencies; structural zeros for rare categories; adjacent seasons not independent.

Need to ensure >=400 words. I'll write generously.

SOURCE_OPERATORS_AND_EQUATIONS: Include LaTeX.

Equation 1: qi = (PH,i + PA,i)/2
Equation 2: yi = 100 ∆i / qi
Equation 3: filtered RAPM objective
Equation 4: dummy RAPM objective
Equation 5: ρ = λD/λP
Equation 6: b∆g = sum_i∈g ŷi qi /100
Equation 7: RMSEs formula
Equation 8: R^2_oos,s formula

Cite pages: model on pages 2-3, data on 3-4, selection/eval on 5, results on 6-8.

Breakdown regimes: absent categories structural zeros (home 3 in 2008,2009,2010,2011,2012? Actually table says Home 3 present in 12 seasons; Home 4 in 6; Home 5 in 4; Away similar), 2019 exclusions, non-standardized predictors.

RETROCAUSAL_GENEALOGY: Cite Rosenbaum 2004 [PAGE 1], Sagarin/Winston WINVAL [PAGE 1], Hoerl & Kennard 1970 [PAGE 1], Sill 2010 [PAGE 1], Friedman et al. 2010 [PAGE 2], Fearnhead & Taylor 2011 [PAGE 1], Deshpande & Jensen 2016 [PAGE 1], Myers 2020 [PAGE 1]. Multi-week traps: chronological windows Oct-Dec / Jan-Feb / Mar-Apr; lockout 2011-12 excluded; 2019-20 disrupted; 2020-21 COVID excluded; 2019 starter exclusions; adjacent seasons share players/coaches/league conditions so p-values approximate.

RECURSIVE_THEORY_OF_MIND: Interpret modeling as agents. Crisis habit regression: when low-minute players cause instability, analysts either keep all columns (unfiltered, noisy) or drop them (filtered, omitted variable bias). Counter-trap: Dummy RAPM pools count indicators with separate penalty, avoiding both traps. Clock: chronological validation respects causality; inner window Oct-Feb, outer Mar-Apr; λP via CV on game-margin RMSE; refit through February; test March-April. Also "theory of mind" of the model: it assumes lineup composition matters but individual low-minute player effects are unidentifiable; it theorizes that the opponent/teammate infer the presence of low-minute players via count.

CROSS_LAYER_VETO_ADJUDICATION: Physical layer: indoor arena, weather negligible; possession-ending events define exposure; scoring segments with no exposure merged; technical free throws captured by scoreboard margin. Biomechanical: substitutions partition stints; 5 unique players per side required; 33 games removed including 19 in 2019. Veto conditions: if official shift charts contradict play-by-play; if starter metadata incomplete (pre-2007); if garbage time/OT inclusion changes lineup-conditioned target; if 4-5 excluded player lineups become common (structural zeros). Prediction: under veto, RMSE reduction may vanish or reverse.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.
1. Starter metadata corruption: If a future season has incomplete starter flags (like pre-2007), the 5-unique-starter filter removes games, changing sample. Prediction: selected threshold may shift from 10 min; RMSE improvement likely <0.042 or sign-flips because dummy categories mis-specified.
2. Removal of garbage time/OT: If the data pipeline excludes garbage time and overtime (contrary to paper), the target is no longer full-game margin. Prediction: R^2_oos may rise but RMSE reduction from dummies likely shrinks because low-minute players cluster in garbage time; dummy signal diluted.
3. Standardization of predictors: If predictors are standardized before ridge (contrary to paper), ρ=2.2 no longer comparable; penalty applied to scaled counts vs players. Prediction: inner grid would select a different ρ (likely closer to 1.0) and the consistent 13-of-16 RMSE reduction may not replicate because count indicators have different exposure scales.

Need to ensure these are verifiable and have predictions.

Now word count check. I need to make sure total is >=1000. Let's write substantial content.

I must not mention betting lines. No spreads/totals/moneylines/odds. I can mention RMSE, R^2, p-values, confidence intervals. That's fine.

Let's begin drafting. I'll keep the XML tags exactly as specified.

Make sure to include verbatim quotes where useful with [PAGE N]. Example: "Dummy RAPM restores this information using five indicators for the number of excluded players on each lineup side." [PAGE 1]. And "The intercept is not penalized, and predictors are not standardized." [PAGE 2]. And "ρ = λD/λP" etc.

I will write in a formal analytical tone.

Let's produce the final output.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s central identification problem is omitted lineup information. In filtered RAPM, low-minute player columns are deleted from the design matrix, but the stints in which those players participated remain in the response vector. Let yi be the home-team margin per 100 team possessions for stint i, defined as yi = 100∆i / qi, where qi = (PH,i + PA,i)/2 counts home and away possession-ending events halved to convert to team possessions [PAGE 2]. The retained-player design xij takes values {1, −1, 0} for home, away, and out-of-lineup. Filtered RAPM solves minα,β Σ qi(yi − α − xT iβ)² + λP‖β‖₂² [PAGE 2]. Because the intercept is unpenalized and predictors are not standardized [PAGE 2], the ridge penalty operates on raw points-per-100-possession scales.

When low-minute columns are dropped, any stint containing such a player is still represented by the retained players on that lineup side. If those retained players’ indicators are correlated with the missing low-minute indicator, the ridge estimator attributes part of the low-minute player’s true contribution to the retained players. This is classical omitted-variable bias in a regularized, correlated design. Dummy RAPM repairs the design by appending ten count indicators: d(k)H,i = 1{home side has exactly k excluded players} and d(k)A,i = 1{away side has exactly k excluded players}, for k = 1,…,5, with zero excluded players as the reference [PAGE 2–3]. The augmented objective is minα,β,γH,γA Σ qi(yi − α − xT iβ − dT H,iγH − dT A,iγA)² + λP‖β‖₂² + λD(‖γH‖₂² + ‖γA‖₂²) [PAGE 3]. The ratio ρ = λD/λP governs how strongly count coefficients are shrunk relative to player coefficients [PAGE 3].

The tuning protocol is two-stage and strictly chronological. Stage 1 searches thresholds τ ∈ {0, 5, 10, 15, 20, 25, 30} mean minutes per appearance and ratios r ∈ {0, 0.1, 0.25, 0.5, 1, 2}, averaging inner-validation RMSE across the October–December training and January–February validation windows. The minimizing pair selects τ = 10 minutes per appearance [PAGE 4]. Stage 2 fixes τ and refines ρ over {1.0, 1.1, …, 2.5}, extending by 0.1 if the boundary is hit, selecting ρ = 2.2 [PAGE 5]. Both stages use model-averaged, season-averaged inner-validation RMSE; March–April games are held out and never used for selection [PAGE 5]. Final fits use all games through February; λP is chosen by five-fold game-level cross-validation minimizing game-margin RMSE [PAGE 5]. Predictions are converted back to points and summed per game: b∆g = Σ i∈g ŷi qi /100 [PAGE 5]. Season-level RMSEs are arithmetic averages across the 16 seasons, weighting each season equally [PAGE 5].

Inferential results: Dummy RAPM mean season RMSE = 12.856 versus filtered RAPM = 12.897, a reduction of 0.042 points (0.30%) [PAGE 6]. Paired t-test on 16 season-level differences: t(15) = 3.138, p = 0.0068; 95% CI for reduction [0.013, 0.070] points [PAGE 6]. Wilcoxon signed-rank W = 120.0, p = 0.0077; sign test 13 of 16 seasons, p = 0.0213 [PAGE 6]. Sensitivity: excluding 2019 (19 starter-data exclusions) leaves 15 seasons with average reduction 0.035 points, p = 0.0132 [PAGE 6]. Versus the unfiltered benchmark, filtered RAPM is +0.015 RMSE (p = 0.1129) while Dummy RAPM is −0.026 RMSE (p = 0.0626), indicating the gain comes from restoring count information, not from exclusion itself [PAGE 7].

Gray-zone audit. (1) Lineups are reconstructed from ESPN play-by-play and starter records, not an official shift chart [PAGE 3]. (2) Starter exclusions are concentrated in 2019 (19 games), though results survive without that season [PAGE 4, 6]. (3) Eligibility uses mean minutes per appearance within the training window, a role-based measure, rather than Rosenbaum’s fixed 250 total minutes across two seasons [PAGE 3–4]. (4) Garbage time and overtime remain in the sample so stint predictions aggregate to full-game margin; the target is lineup-conditioned final margin, not a pregame forecast [PAGE 3, 5]. (5) Categories with four or five excluded players are rare and sometimes structurally zero across seasons [PAGE 7–8]. (6) Because predictors are unstandardized and occur at different frequencies, ρ is not an effective shrinkage factor and should not be read as literal relative contraction; nearby ratios perform nearly identically [PAGE 8]. (7) Adjacent seasons share players, coaches, and league conditions, so nominal p-values treat seasons as independent observational units and are best interpreted as approximate across-season summaries [PAGE 5].

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown regimes.

Stint response and exposure (team possessions):
qi = (PH,i + PA,i) / 2   [PAGE 2]
yi = 100 ∆i / qi          [PAGE 2]
Units: yi in home-team margin points per 100 team possessions; qi in team possessions per stint; observation weight qi.

Filtered RAPM estimator:
(α̂, β̂) = arg minα,β Σ i=1ⁿ qi ( yi − α − xᵀi β )² + λP ‖β‖₂²    [PAGE 2]
xij = +1 if player j home, −1 if away, 0 otherwise. Intercept unpenalized; predictors unstandardized [PAGE 2].

Dummy RAPM estimator:
(α̂, β̂, γ̂H, γ̂A) = arg min Σ i=1ⁿ qi ( yi − α − xᵀi β − dᵀH,i γH − dᵀA,i γA )² + λP ‖β‖₂² + λD ( ‖γH‖₂² + ‖γA‖₂² )   [PAGE 3]
where d(k)H,i = 1{home lineup contains exactly k excluded players}, d(k)A,i = 1{away lineup contains exactly k excluded players}, k = 1,…,5 [PAGE 2–3].

Penalty ratio:
ρ = λD / λP   [PAGE 3]
Selected ρ = 2.2; place 2.2 times as much penalty weight on squared count coefficients as on squared player coefficients [PAGE 8].

Game-margin reconstruction and season loss:
b∆g = Σ i∈g ŷi qi / 100   [PAGE 5]
RMSEs = (1 / |Ts|) Σ g∈Ts ( ∆g − b∆g )²   [PAGE 5]
Units: points (final game margin), home-minus-away.

Out-of-sample R²:
R² oos,s = 1 − Σ g∈Ts ( ∆g − b∆g )² / Σ g∈Ts ( ∆g − ∆Ts )²   [PAGE 5]
where ∆Ts is the mean observed March–April margin for season s; denominator is test-set total sum of squares [PAGE 5].

Reported performance:
Dummy RAPM: mean season RMSE 12.856, mean season R² oos 0.178, lower RMSE in 13 of 16 seasons [PAGE 6].
Filtered RAPM: mean season RMSE 12.897, mean season R² oos 0.173 [PAGE 6].
Reduction: 0.042 points, 0.30% [PAGE 6].

Inference statistics:
Paired t: t(15) = 3.138, p = 0.0068; 95% CI [0.013, 0.070] points [PAGE 6].
Wilcoxon: W = 120.0, p = 0.0077 [PAGE 6].
Sign test: 13/16 seasons, p = 0.0213 [PAGE 6].
Excluding 2019: 15 seasons, mean reduction 0.035 points, p = 0.0132 [PAGE 6].
Unfiltered benchmark sensitivity: filtered +0.015 RMSE (p = 0.1129); Dummy −0.026 RMSE (p = 0.0626) [PAGE 7].

Dummy coefficient structure (points per 100 possessions, home-margin orientation):
Home 1 excluded: −1.59, negative in 16/16 seasons [PAGE 8].
Away 1 excluded: +0.82, positive in 13/16 seasons [PAGE 8].
Home 2 excluded: −0.59; Away 2 excluded: +0.24 [PAGE 8].
Higher counts shrink toward zero and are frequently structurally zero [PAGE 8].

Breakdown and singularity regimes.
(i) Structural zeros: When a count category is absent in a season, its coefficient is structurally zero rather than estimated [PAGE 7–8]. Table 3 shows Home 3 present in 12 seasons, Home 4 in 6, Home 5 in 4; Away 3 in 13, Away 4 in 7, Away 5 in 4 [PAGE 8]. (ii) Rare high-count regimes: Four- and five-excluded-player lineups occur in only a few seasons and contribute little to the substantive pattern [PAGE 8]. (iii) Non-standardized predictors: ρ = 2.2 is not an effective shrinkage factor because predictors occur at different frequencies and are not standardized; the precise value is less important than the preference for a distinct, relatively strong dummy penalty [PAGE 8]. (iv) Data reconstruction limits: lineups come from play-by-play and starter records rather than official shift charts; starter-data exclusions concentrate in 2019 [PAGE 3–4]. (v) Temporal dependence: adjacent seasons share players, coaches, and league conditions, so season-level p-values are approximate across-season summaries, not exact independent tests [PAGE 5].

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week chronological traps.

The methodological genealogy begins with Adjusted Plus-Minus (APM), associated with the WINVAL work of Jeff Sagarin and Wayne Winston and described publicly by Rosenbaum (2004), which regresses stint-level score differentials on player indicators to adjust for teammates and opponents [PAGE 1]. APM is unstable when players repeatedly share the floor with the same teammates and opponents or appear in few stints [PAGE 1]. Ridge regression, introduced by Hoerl and Kennard (1970), stabilizes correlated designs by shrinking coefficients [PAGE 1]. Sill (2010) applied ridge regularization to APM with emphasis on evaluation on future games, producing Regularized Adjusted Plus-Minus (RAPM) [PAGE 1]. The paper’s computational backbone uses cyclic coordinate descent over a decreasing sequence of λP values, following Friedman, Hastie, and Tibshirani (2010) [PAGE 2]. Related Bayesian partial-pooling responses to weak identification include Fearnhead and Taylor (2011), who estimated offensive and defensive abilities while borrowing information across seasons, and Deshpande and Jensen (2016), who modeled changes in win probability using Bayesian linear regression [PAGE 1]. Box Plus/Minus (Myers, 2020) represents a separate complementary line based on box-score and role information rather than stint-level margins [PAGE 1].

Dummy RAPM inherits Rosenbaum’s insight that low-minute players should be pooled rather than estimated individually, but it replaces Rosenbaum’s fixed cutoff of 250 total minutes across two seasons with a data-driven mean-minutes-per-appearance threshold selected by chronological validation [PAGE 3–4]. The selected threshold is 10 minutes per appearance [PAGE 4].

Multi-week traps are embedded in the temporal design. The sample contains 16 seasons: 2007–2011, 2013–2019, and 2022–2025, labeled by the calendar year in which they end [PAGE 4]. The series begins in 2007 because starter metadata is incomplete in earlier seasons [PAGE 4]. The lockout-shortened 2011–12 season, the disrupted 2019–20 season, and the COVID-shortened 2020–21 season are excluded because their schedules do not support the common October–April chronological split [PAGE 4]. Within each season, October–December games form inner training, January–February games form inner validation, and March–April games form the outer test; outer training is exactly the union of October–December and January–February [PAGE 4]. These windows are disjoint and strictly chronological [PAGE 4]. May–September games are in none of the four analysis sets [PAGE 4].

The multi-week trap is twofold. First, adjacent seasons share players, coaches, and league conditions, so the nominal paired t-test treats seasons as independent observational units even though they are not; p-values are approximate across-season summaries [PAGE 5]. Second, the 2019 season carries the heaviest starter-data exclusion burden (19 games removed), creating a season-specific structural break that the authors address via a sensitivity exclusion [PAGE 4, 6]. The result survives without 2019, but the concentration of starter exclusions in a single season is a retroactive data-quality trap: if future play-by-play pipelines change starter metadata completeness, the October–April split may no longer be cleanly replicable. The model’s causality is protected by the clock: selection uses only October–February data, refitting occurs through February, and evaluation occurs once on March–April games, so no information from the outer test leaks into hyperparameter choice [PAGE 5].

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and the clock.

A recursive theory of mind for this modeling problem treats the analyst as an agent who must form beliefs about how other analysts (and the data-generating process) will react to low-minute players. The default crisis habit is regression to one of two extremes when RAPM instability is observed: either retain every low-minute column and suffer high-variance, weakly identified coefficients (the unfiltered benchmark), or drop low-minute columns entirely and suffer omitted-variable bias (filtered RAPM). The paper documents that filtering without count indicators does not improve RAPM relative to the unfiltered benchmark; the selected filtered model has mean RMSE 0.015 points higher than unfiltered (p = 0.1129) [PAGE 7]. This is the crisis habit regression: under pressure to stabilize estimates, analysts discard information and make the model worse.

The counter-trap is Dummy RAPM’s recognition that the model does not need a separate, noisy coefficient for every low-minute player, but it benefits from knowing how many such players are on the floor [PAGE 8]. By pooling count coefficients with a distinct ridge penalty λD rather than estimating individual low-minute effects, Dummy RAPM avoids both traps simultaneously. It keeps the stints in the design matrix (so lineup completeness is preserved) while avoiding the curse of estimating dozens of weakly identified low-minute columns. The theory of mind embedded in the model is that teammates and opponents condition their behavior on lineup composition, and the count of low-minute players on each side is a sufficient statistic for the omitted contribution at the margin; individual identity matters less than the count’s sign and magnitude.

The clock enforces a recursive discipline. Inner validation on January–February selects the threshold and penalty ratio; outer training refits through February; outer test evaluates once on March–April [PAGE 4–5]. At each recursion, λP is re-chosen by five-fold game-level cross-validation minimizing game-margin RMSE within the corresponding training period [PAGE 5]. Because player eligibility is recomputed using only the training period [PAGE 5], the model’s “belief” about who is low-minute is reset each season, preventing look-ahead bias. If an analyst instead regressed to the crisis habit of pooling all data or ignoring chronological structure, the selected ρ = 2.2 and τ = 10 minutes would not be replicable, because the March–April holdout would leak into tuning and inflate apparent performance. The clock therefore protects the model from its own recursive overfitting habit.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto conditions.

Physical layer: NBA games are played indoors, so weather is a negligible exogenous variable; no meteorological veto applies. The physical measurement layer is the ESPN play-by-play and box-score record distributed through sportsdataverse (hoopR, Gilani 2026) [PAGE 3]. Stints are intervals over which neither lineup changes; starter flags identify opening lineups, and recorded substitutions partition the game [PAGE 3]. A game is retained only when both teams have five unique recorded starters and every modeled stint contains five unique home players and five unique away players; this removes 33 games, including 19 in 2019 [PAGE 3]. Stint scoring is reconstructed from changes in the reported home-minus-away scoreboard margin, capturing technical and other free throws even when the corresponding event is not marked as ending a possession [PAGE 3]. Scoring segments with no possession exposure are merged with the next positive-exposure stint, or with the preceding stint at end of game, and stint margins are verified to sum to the official final margin [PAGE 3]. Garbage-time and overtime possessions remain in the sample so stint predictions aggregate to full-game margin [PAGE 3].

Biomechanical / roster layer: Player eligibility is summarized by mean minutes per appearance within the training window, reflecting role when active rather than total games played [PAGE 3–4]. The five-player-per-side constraint is a hard roster-layer veto: any stint lacking five unique players on either side is excluded [PAGE 3]. Substitutions create stints; therefore the model’s resolution is bounded by the frequency and accuracy of recorded substitution events in play-by-play data.

Veto adjudication. The following conditions would veto or substantially qualify the Dummy RAPM result:
1. Official shift-chart contradiction: If play-by-play reconstruction systematically misassigns substitutions relative to official shift charts, the stint-level design matrix and dummy counts are mismeasured, breaking the exclusion-restriction intuition that count indicators proxy omitted lineup information.
2. Starter-metadata collapse: If a future season has incomplete starter flags (as before 2007), the five-starter filter removes games non-randomly; the chronological October–April split no longer holds, and the selected τ = 10 and ρ = 2.2 may not transfer [PAGE 4].
3. Garbage-time/OT excision: If a pipeline removes garbage time and overtime (contrary to this paper), the target shifts from full-game lineup-conditioned margin to a subset, and low-minute players—who disproportionately appear in those segments—would be underrepresented; the dummy signal would dilute and the RMSE reduction could vanish.
4. High-count regime shift: If four- and five-excluded-player lineups become common, structural zeros would no longer dominate [PAGE 8], and the ten-dummy parameterization with a shared λD may be too coarse; the model would require category-specific penalties or a return to individual low-minute estimation.

Environmental note: Because games are indoors, temperature, wind, and precipitation do not enter the response yi or exposure qi; no weather term is present in the objective, and no weather-based veto is applicable.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios and predictions.

RLVR (reinforcement learning from verifiable rewards) here means the model’s hyperparameters are selected by a verifiable reward signal—season-averaged inner-validation RMSE—under strict chronological constraints. A veto occurs when a counterfactual change to the data or estimation pipeline invalidates the selected reward-maximizing configuration.

Veto scenario 1: Starter-metadata corruption in a held-out season. Suppose a future season’s play-by-play feed lacks reliable starter flags, so the five-unique-starter filter excludes a non-random subset of games (analogous to the 19 excluded games in 2019) [PAGE 4]. The October–December / January–February / March–April split would no longer be strictly chronological or comparable across seasons [PAGE 4]. Prediction: The inner-validation grid would no longer reliably select τ = 10 minutes per appearance and ρ = 2.2; on held-out March–April games, Dummy RAPM’s mean RMSE reduction would fall below 0.042 points, likely to within noise of zero or become negative, because the count indicators would be constructed on a truncated, selected sample of games rather than the full population of stints.

Veto scenario 2: Removal of garbage-time and overtime possessions. Suppose the data pipeline excludes garbage time and overtime, violating the paper’s design choice to retain them so stint predictions aggregate to full-game margin [PAGE 3, 5]. Low-minute players are overrepresented in garbage-time lineups; excluding those possessions mechanically reduces the exposure of home/away count categories with k ≥ 1 [PAGE 8, Table 3]. Prediction: With the dummy signal concentrated in removed stints, the outer-test game-margin RMSE for both models would rise, but the relative advantage of Dummy RAPM over filtered RAPM would shrink below 0.042 points per game and the paired t-test on season differences would likely fail to reach p < 0.05; the 13-of-16 season RMSE advantage would not replicate.

Veto scenario 3: Standardization of predictors before ridge fitting. Suppose predictors are standardized (contrary to the paper’s explicit “predictors are not standardized” assumption [PAGE 2]). Because count dummies and player indicators occur at vastly different frequencies (e.g., Home 0 exposure 1,256,501.5 versus Home 5 exposure 202.0 team possessions [PAGE 8]), standardization would rescale the penalty such that ρ = 2.2 no longer represents the same relative shrinkage [PAGE 8]. Prediction: The inner grid over ρ would select a different value (likely nearer 1.0), and because nearby ratios perform nearly identically under the unstandardized scale [PAGE 8], the standardized model would lose the consistent 13-of-16 RMSE improvement; mean season R² oos would remain near 0.173–0.178 but the dummy coefficient signs for one excluded player (Home −1.59, Away +0.82 [PAGE 8]) would no longer be directly comparable across sides, degrading interpretability and held-out calibration.

</RLVR_COUNTERFACTUAL_VETOES>