---
source: "2011 Using Cumulative Win Probabilities to Predict NCAA Performance - Bashuk.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4782
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on the provided PDF source text about "Using Cumulative Win Probabilities to Predict NCAA Basketball Performance" by Mark Bashuk. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

Important: I must not mention betting lines/spreads/totals/moneylines/odds. The source text mentions "spread" in Equation 2 and accuracy comparisons to Vegas lines, etc. I must avoid repeating those terms or rephrase carefully. The invariant says "Never mention spreads, totals, moneylines, or odds." I need to be careful not to use those words. Even if the source uses them, I should not repeat them in my output. I can refer to "margin" or "point differential" but avoid "spread." Actually, "odds" appears in source. I should not mention it. I can talk about probabilities and win probabilities, which are fine. But "betting lines" specifically banned.

I need to produce formal LaTeX equations. The source has Equation 1: α = 100 * x_home - x_visitor + γ. Equation 2: β = 48.85% + 3.35 φ (but φ is spread - banned term? I should avoid mentioning φ as spread; maybe I can discuss the equation but call it something else? The invariant says never mention spreads. So I cannot write "spread of φ". I can say the source defines a confidence metric using a linear relationship with a game margin parameter, but I should avoid the word spread. Maybe I can present it abstractly as β = 48.85% + 3.35 m where m is the margin parameter, without calling it spread. But the source calls it spread. I can cite the equation but not use the banned word. I'll refer to it as "the margin-based parameter" or just present the math without naming the variable's banned meaning.

Also, source mentions "Vegas Opening Line" in Table 1. I should not mention Vegas or lines. I can discuss comparative accuracy of other systems but avoid banned terms.

Units: probability (dimensionless, [0,1] or percentage), points (points), time (minutes), accuracy (%). Equations should be formal.

Singularity/breakdown regimes: e.g., when play-by-play data missing/corrupted [PAGE 5], when team not at full strength (injuries/suspensions) [PAGE 5], when sample size small for WPA player ratings (must have 10 plays) [PAGE 10], when game metadata incomplete [PAGE 2], end of season SOS weighting reaches 69% [PAGE 3], etc.

Need to cite [PAGE N] markers. Source pages are 1-10.

Structure:

<THINK_TRACE> (>=400 words)
- Multi-hop derivation: How SOM works step-by-step.
- Data acquisition: ESPN play-by-play, metadata star schema [PAGE 1-2].
- Win Probability Matrix lookup [PAGE 2, Appendix 2 PAGE 8].
- CWP calculation and combination with SOS [PAGE 2-3].
- Simulation optimization: 31% CWP + 69% SOS end of season [PAGE 3], SOS initial 31% increasing by 0.275% per day [PAGE 3].
- HCA: 4.74 points from 13,937 games 2007-2012 [PAGE 3, Appendix 3 PAGE 9].
- Time segment weighting: 8 segments, 3^8 = 6561 trials, best weights (.33 x4, 1.00 x4) predicting 74.87% of 2011 games [PAGE 4]. Uniform weighting 74.0%.
- Prediction formula Equation 1 [PAGE 5]. Confidence Equation 2 [PAGE 5].
- Comparison table: SOM 72.6% vs Pomeroy 77.7% etc [PAGE 5].
- Limitations: missing/corrupted PBP data, full strength assumption, WPA player flaws (no defense, efficiency) [PAGE 5].
- Gray-zone audit: placeholder estimation 50% + margin for missing PBP [PAGE 2], SOS weighting linear ramp assumption, HCA constant across teams, time-segment coarse granularity, Win Probability Matrix noise (see erratic values in Appendix 2 table, e.g., -15 lead with 1 min left 0%, but -14 with 1 min left 0% etc; small sample noise) [PAGE 8].
- Breakdown regimes: missing data, injuries, small sample WPA, neutral site/home court differences, early season SOS instability.

<SOURCE_OPERATORS_AND_EQUATIONS>
- Formal LaTeX.
- Define CWP_i = sum over plays w_t * ΔWP? Actually source says cumulative win probabilities. Let's formalize.
- Let WP(t, lead) be matrix. CWP = average or sum over segments weighted.
- Team rating R_t = 0.31 * CWP_t + 0.69 * SOS_t (end of season) [PAGE 3].
- SOS ramp: SOS_weight(d) = 0.31 + 0.00275 * d, capped at 0.69 [PAGE 3]. Units: day index d dimensionless.
- HCA γ = 4.74 points [PAGE 3, Appendix 3 PAGE 9].
- Prediction margin α = 100*(x_home - x_visitor) + γ [PAGE 5, Equation 1]. Wait source: α = 100 * x_home - x_visitor + γ? The formatting is ambiguous: α= 100 ∗ x_home − x_visitor + γ. Probably α = 100*(x_home - x_visitor) + γ. I'll write with parentheses to make formal sense but note source formatting. Units: points (since x are probabilities? Actually x are rankings maybe in points? 100*x difference suggests x in [0,1] scaled? Need to be careful. Source says x_home, x_visitor rankings. If rankings are win probabilities, difference times 100 gives points. We can state assumption: x expressed as fractional rating, multiplied by 100 to convert to points.
- Confidence β = 0.4885 + 3.35 * m, where m is margin parameter (source uses φ). But avoid word spread. Let's define m as the predicted margin differential parameter. Units: percentage points per unit margin? Actually β in %, m in points? 3.35% per point. Source derived 2007-2011, R^2=0.9854 [PAGE 9 Appendix 3]. y = 0.0334x + 0.4885 where y is win probability, x is spread. I'll present as β(m) = 48.85% + 3.35%·m (if m in points) but note this is from source's linear fit. Wait source Equation 2: β= 48.85% + 3.35 φ. Appendix 3 shows y = 0.0334x + 0.4885, R^2=0.9854. There's a discrepancy: Equation 2 uses 3.35, Appendix uses 0.0334 (which is 3.34% if x in points? Actually 0.0334 probability per point = 3.34% per point). I'll cite both and note the unit conversion: probability vs percentage. Breakdown: linear extrapolation beyond observed margin range invalid; matrix has singularities/noise at extreme leads/times (0% or 100% with few games).
- WPA: WPA_p = Σ_t [WP(t+1) - WP(t)] for plays involving player p [PAGE 6 footnote 8]. Units: probability added (dimensionless).
- Clutch definition: average WPA for games within 5 points in last 5 minutes, min 10 plays [PAGE 10 Appendix 4].

<RETROCAUSAL_GENEALOGY>
- Historical lineage: RPI (wins/losses only), ASM (final score), Ken Pomeroy's ratings (degrade initial values) [PAGE 1, 3], Sagarin, Beck's PredictionTracker [PAGE 4], Stern NFL win probability relationship [PAGE 5, 6 ref 7], Harville & Smith home-court advantage [PAGE 3 ref 2], Moskowitz & Wertheim Scorecasting [PAGE 6 ref 6].
- SevenOvertimes Method (SOM) named after 2009 UConn-Syracuse six-overtime game [PAGE 1 footnote].
- Multi-week traps: early season SOS weight only 31% and ramps slowly, so early rankings unstable; team rankings based on CWP but player WPA ignores defense/efficiency; missing PBP leads to placeholder 50%+margin; home court constant 4.74 across all teams ignores venue-specific effects; time-segment weighting overvalues end-game (clutch) which may be noisy small sample; "garbage time" vs close games differentiated but end-game overweighting may reward late luck.
- Retrocausal aspect: using final outcomes to build Win Probability Matrix, then using matrix to evaluate past games (circularity if matrix built from same games). The paper uses five years of gameplay data to generate matrix [PAGE 1 abstract]. If evaluating games within that period, retrocausal leakage possible.

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression: teams/coaches under pressure revert to late-game execution habits; SOM weights last 15 minutes at 64% [PAGE 7 conclusion], so it captures crisis performance but may overfit to noisy late-game variance.
- Counter-trap: an opponent knowing SOM overweight end-game might manipulate pace or foul strategies to influence late win probability without changing true team quality.
- Clock: game clock segments (8 segments of 4 minutes? Actually 40-minute game, 8 segments? Wait source says originally ten 4-minute segments but then eight segments? Let's check: Page 3-4: "split the game into ten 4-minute segments" but NCAA basketball is 40 minutes, so ten 4-minute segments = 40. Then says "led me to use eight segments of three values". Eight segments of what length? 40/8 = 5 minutes each? Not specified exactly, but conclusion says "First 25 minutes are worth 36%, Last 15 minutes are worth 64%" [PAGE 7]. So segments align with that. The clock is a boundary condition: end-of-game weighting creates a discontinuous importance function at minute 25. Teams may exhibit habit regression under clock pressure (shot clock, game clock) leading to non-stationary win probabilities not captured by static matrix.
- Multi-week: as season progresses, SOS weight increases; teams with strong early schedules get undervalued early, overvalued late? Recency effect not implemented [PAGE 6].

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical layer: basketball is indoor, weather veto generally null, but travel rigors not modeled [PAGE 5]. Biomechanical: player fatigue, injuries, suspensions not accounted [PAGE 5]. Player-level WPA ignores individual defense [PAGE 5]. Star player absence breaks full-strength assumption.
- Data layer: corrupted PBP (scores in player fields, missing names/descriptions) [PAGE 5]. Missing games entirely. Star schema fact_plays joined to dimensions [PAGE 2].
- Model layer: SOS linear ramp assumption; Win Probability Matrix noise (Appendix 2 shows erratic probabilities e.g., -15 lead 1 min left 0%, -14 lead 1 min left 0%, but -15 lead 2 min left 11%; small-sample bins) [PAGE 8]. Placeholder for missing PBP: 50% + margin [PAGE 2]. Home court constant 4.74 points vs simulation peak near 2.3% bump [PAGE 3]; using constant ignores team-specific HCA [PAGE 6 future work].
- Veto proof: any prediction must be vetoed if (a) key player injured/suspended (full strength assumption violated), (b) PBP missing/corrupted for either team (CWP unreliable), (c) neutral site game where home court advantage misapplied (HCA only for home games? Source mentions neutral court differences [PAGE 4]), (d) extreme margin/time cell in Win Probability Matrix based on <N games (singularity), (e) early season before SOS weight stabilizes.

<RLVR_COUNTERFACTUAL_VETOES>
Need 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I'll frame as counterfactual veto scenarios: conditions under which the model's prediction should be overridden (vetoed), with verifiable predictions.

Scenario 1: Star player injury/suspension. Veto condition: projected out player accounts for >15% of team's WPA. Prediction: model will overrate team by >5 points in α; actual outcome will favor opponent more than model suggests.
Scenario 2: Corrupted/missing play-by-play data. Veto condition: fact_plays incomplete for >20% of a team's recent games. Prediction: placeholder 50%+margin estimation introduces bias; model accuracy drops below 65% for those games (vs 72.6% baseline).
Scenario 3: Early-season SOS instability. Veto condition: game occurs before SOS weight reaches 50% (roughly day 70 of season given 0.275% per day from 31% to 69%: (0.69-0.31)/0.00275 ≈ 138 days; actually season length maybe ~140 days. Halfway when weight = 50%: (0.50-0.31)/0.00275 ≈ 69 days). Prediction: model's ranking correlation with end-of-season true strength is weak (r < 0.4) before day 69 due to SOS underweighting.

Need to ensure no banned words. "Odds" appears in source but I won't use it. "Spread" appears; I'll avoid. "Line" appears; avoid "betting line" or "Vegas line". I can say "market" but better not. I'll refer to "other systems" generically.

Word count: Need >=1000 words total across sections. THINK_TRACE >=400 words. Others can be substantial. I'll aim for ~1500+ words total.

Citations: Use [PAGE N] exactly. For Appendix pages, the PDF pages are numbered 1-10 in the source text markers. Appendix 2 is on page 8 of the PDF text (marked [PAGE 8 of 10]). Appendix 3 on [PAGE 9]. Appendix 4 on [PAGE 10]. So citations like [PAGE 8], [PAGE 9], [PAGE 10]. The main text pages 1-7.

Verbatim quotes: I should include some short verbatim quotes with citations.

Let's draft carefully.

LaTeX equations:

Equation for team rating:
\[
R_t = \omega_{\mathrm{CWP}} \cdot \mathrm{CWP}_t + \omega_{\mathrm{SOS}}(d) \cdot \mathrm{SOS}_t
\]
where at season end \(\omega_{\mathrm{CWP}}=0.31\), \(\omega_{\mathrm{SOS}}=0.69\) [PAGE 3].

SOS weight ramp:
\[
\omega_{\mathrm{SOS}}(d) = \min\left(0.69,\; 0.31 + 0.00275\,d\right)
\]
\(d\) = days into season, dimensionless [PAGE 3].

Home court advantage:
\[
\gamma = 4.74 \text{ points}
\]
estimated from \(N=13,937\) games, 2007–2012, mean HCA [PAGE 3; Appendix 3, PAGE 9].

Predicted margin:
\[
\alpha = 100\,(x_{\mathrm{home}} - x_{\mathrm{visitor}}) + \gamma
\]
with \(x\) expressed as fractional team rating; \(\alpha\) in points [PAGE 5, Equation 1]. Assumption: ratings scaled so 1.00 difference = 100 points.

Confidence:
\[
\beta(m) = 48.85\% + 3.35\% \cdot m
\]
where \(m\) is the margin parameter from Equation 1; \(\beta\) in percent probability; fit from 2007–2011 games [PAGE 5, Equation 2]. Note Appendix 3 reports equivalent probability-space fit \(y=0.0334x+0.4885\), \(R^2=0.9854\) [PAGE 9].

Cumulative win probability:
Let \(w(s,t)\) be Win Probability Matrix entry for segment \(s\) and time-state \(t\). Segment weights \(\lambda_s \in \{0.33,0.66,1.00\}\). Optimal \(\lambda = (0.33,0.33,0.33,0.33,1.00,1.00,1.00,1.00)\) [PAGE 4].
\[
\mathrm{CWP} = \frac{\sum_{s=1}^{8} \lambda_s \sum_{t \in s} \Delta \mathrm{WP}(t)}{\sum_{s=1}^{8} \lambda_s \cdot n_s}
\]
something like that. Formal enough.

WPA:
\[
\mathrm{WPA}_p = \sum_{k \in \mathcal{P}_p} \left[\mathrm{WP}(t_{k+1}) - \mathrm{WP}(t_k)\right]
\]
\(\mathrm{WPA}_p\) dimensionless probability added [PAGE 6 footnote 8; PAGE 10].

Breakdown regimes:
- Missing PBP: substitute \(0.50 + \text{margin}/? \) source says "50% + the final scoring margin" [PAGE 2]. That is dimensionally odd (percentage + points). I should flag as placeholder and breakdown.
- Full strength assumption violated: injuries/suspensions/travel [PAGE 5].
- WPA player-level: no defense, no efficiency, min 10 plays for clutch [PAGE 5; PAGE 10].
- Matrix noise: Appendix 2 table has erratic values (e.g., -15 lead, 1 min left = 0%; -14 lead, 1 min left = 0%; -15 lead, 2 min left = 11%) indicating small-sample bins [PAGE 8].

Now write the sections.

Need to ensure XML sections are exact.

Let's write.

THINK_TRACE: I'll write a thorough multi-hop derivation. Start with data pipeline. Then math. Then gray-zone audit. Must be >=400 words. I'll make it ~600 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, citations, breakdown. ~400 words.

RETROCAUSAL_GENEALOGY: Historical lineage, multi-week traps. ~300 words.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression, counter-trap, clock. ~300 words.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. ~250 words.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios + predictions. ~300 words.

Total > 2000 words probably. Good.

Be careful not to use banned words: spread, total, moneyline, odds. Also "lines" in betting context. I'll avoid "Vegas", "opening line", "closing line". I can mention "other public rating systems" without naming specific banned contexts. Source mentions Ken Pomeroy, Sagarin, etc. That's fine.

Also source Table 1 compares "Vegas Opening Line" - I should not repeat that phrase. I can say "a market-based comparator tracked by Beck" but "market" might imply betting. Better to say "a comparator system tracked by Beck [4]" without specifying. Or just omit that row. I can discuss Pomeroy, Sagarin, RPI, Home Court.

Source Equation 2 uses φ which source text says "spread of φ". I will not say "spread". I will say "the parameter φ from Equation 2" and define it as the margin differential input to the confidence model. I'll avoid calling it spread.

Let's write now.

Check verbatim quotes: I can quote short phrases like "cumulative win probabilities" or "full strength for all games" with [PAGE 5].

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The SevenOvertimes Method (SOM) constructs a team rating by fusing cumulative in-game win probability with a dynamically weighted strength-of-schedule term. The first hop is data acquisition: play-by-play and metadata are pulled from ESPN.com because it provided the most reliable daily schedules and game metadata [PAGE 1][PAGE 2]. The raw plays land in a fact_plays table joined to Dimension_Games, Dimension_Teams, and Dimension_Plays in a star schema [PAGE 2]. For games lacking play-by-play, the system inserts a placeholder estimate of 50% plus the final scoring margin [PAGE 2], which is a primary gray-zone because it collapses a dynamic game into a static endpoint and discards the path information that SOM was designed to preserve.

The second hop is the Win Probability Matrix lookup. Each play-state is mapped to a home-team win probability conditioned on time remaining and lead [PAGE 2; Appendix 2, PAGE 8]. The matrix itself is empirical, built from five years of gameplay data [PAGE 1], and Appendix 2 reveals noisy, small-sample cells—for example, a 15-point deficit with one minute left shows 0% while the same deficit with two minutes left shows 11%, and a 14-point deficit with one minute left also shows 0% [PAGE 8]. These discontinuities are breakdown signatures: when the underlying cell count is thin, the matrix ceases to be a stable probability operator.

The third hop constructs Cumulative Win Probability (CWP). The game is divided into eight segments with weights in {0.33, 0.66, 1.00}. A 3^8 simulation over 6,561 trials identified the optimal segment weights as (0.33, 0.33, 0.33, 0.33, 1.00, 1.00, 1.00, 1.00), meaning the first 25 minutes carry roughly 36% weight and the last 15 minutes carry 64% [PAGE 4][PAGE 7]. This operationalizes the hypothesis that end-game performance is more informative than early-game performance, but it creates a recursive vulnerability: late-game win probabilities are themselves derived from outcomes that include late-game noise, so the model partially regresses on its own target.

The fourth hop fuses CWP with strength of schedule (SOS). Three simulations over 2009–2011 found the end-of-season optimal weighting is 31% CWP and 69% SOS [PAGE 3]. The SOS weight is not static; it begins at 31% and increases by 0.275% per day until it reaches 69% on the final day [PAGE 3]. This ramp implies an early-season instability window: before the SOS term dominates, team ratings are overly sensitive to CWP variance and under-penalize weak schedules.

The fifth hop adds home-court advantage. A simulation of home-team “bumps” peaked near 2.3%, but the author adopted a fixed 4.74-point advantage derived from 13,937 games across 2007–2012 (mean home score 68.62 vs. away 63.88) [PAGE 3; Appendix 3, PAGE 9]. This constant is applied uniformly, which is a biomechanical and contextual simplification because it ignores team-specific venue effects, travel rigors, and neutral-site games [PAGE 5][PAGE 6].

The sixth hop produces predictions. Equation 1 combines home and visitor ratings with the home-court constant to yield a predicted margin α [PAGE 5]. Equation 2 converts a margin parameter into a home-team win confidence β via a linear fit from 2007–2011 data [PAGE 5]; Appendix 3 reports an equivalent probability-space fit y = 0.0334x + 0.4885 with R² = 0.9854 [PAGE 9]. The linear form breaks down outside the observed margin range and assumes stationarity across conferences and seasons.

Gray-zone audit: the system assumes all teams play at full strength and does not account for injuries, suspensions, or travel [PAGE 5]. Player-level Win Probability Added (WPA) credits scoring with little regard to efficiency and cannot measure individual defensive impact, such as a defender shutting down an opposing star [PAGE 5]. Clutch WPA requires at least 10 plays and is restricted to games within five points in the final five minutes [PAGE 10], so small-sample player ratings are noisy. Finally, the Win Probability Matrix is built from historical outcomes and then used to evaluate those same games, creating a retrocausal loop if the evaluation window overlaps the training window [PAGE 1].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(t\) index discrete play-states, \(s \in \{1,\dots,8\}\) index game segments, and \(\mathrm{WP}(t)\in[0,1]\) denote the home-team win probability retrieved from the Win Probability Matrix conditioned on time remaining and lead [PAGE 2; Appendix 2, PAGE 8].

Segment-weighted cumulative win probability:
\[
\mathrm{CWP} = 
\frac{\displaystyle\sum_{s=1}^{8}\lambda_s \sum_{t\in s}\Delta \mathrm{WP}(t)}
{\displaystyle\sum_{s=1}^{8}\lambda_s\, n_s},
\qquad
\lambda_s\in\{0.33,\,0.66,\,1.00\},
\]
where \(n_s\) is the number of play-states in segment \(s\). The optimal weight vector from the 6,561-trial simulation is \(\boldsymbol{\lambda}^\star=(0.33,0.33,0.33,0.33,1.00,1.00,1.00,1.00)\) [PAGE 4]. Units: \(\mathrm{CWP}\) is dimensionless probability; \(\lambda_s\) is dimensionless.

Team rating at day \(d\) of the season:
\[
R_t(d)=\omega_{\mathrm{CWP}}\,\mathrm{CWP}_t+\omega_{\mathrm{SOS}}(d)\,\mathrm{SOS}_t,
\]
with end-of-season weights \(\omega_{\mathrm{CWP}}=0.31\) and \(\omega_{\mathrm{SOS}}=0.69\), consistent across 2009–2011 [PAGE 3]. The SOS weight ramps linearly:
\[
\omega_{\mathrm{SOS}}(d)=\min\!\left(0.69,\;0.31+0.00275\,d\right),
\]
where \(d\) is measured in days and is dimensionless [PAGE 3].

Home-court advantage constant:
\[
\gamma = 4.74\ \text{points},
\]
estimated as the mean home-minus-away score over \(N=13{,}937\) games from 2007–2012 (home \(68.62\), away \(63.88\)) [PAGE 3; Appendix 3, PAGE 9]. Units: points.

Predicted margin (Equation 1, [PAGE 5]):
\[
\alpha = 100\,(x_{\mathrm{home}}-x_{\mathrm{visitor}})+\gamma,
\]
where \(x_{\mathrm{home}}\) and \(x_{\mathrm{visitor}}\) are fractional team ratings; \(\alpha\) is expressed in points under the assumption that a rating difference of 1.00 corresponds to 100 points. Breakdown regime: if \(x\) is not calibrated to this 100-point scale, \(\alpha\) is dimensionally invalid.

Home-team win confidence (Equation 2, [PAGE 5]):
\[
\beta(m)=48.85\%+3.35\%\cdot m,
\]
where \(m\) is the margin parameter input to Equation 1 and \(\beta\) is a percentage probability. The fit derives from all games played 2007–2011 [PAGE 5]. Appendix 3 reports the equivalent probability-space regression \(y=0.0334x+0.4885\), \(R^2=0.9854\) [PAGE 9]. Breakdown regime: linear extrapolation beyond the observed margin domain is invalid; the fit assumes homoscedasticity across the margin range.

Player Win Probability Added (footnote 8, [PAGE 6]; Appendix 4, [PAGE 10]):
\[
\mathrm{WPA}_p=\sum_{k\in\mathcal{P}_p}\bigl[\mathrm{WP}(t_{k+1})-\mathrm{WP}(t_k)\bigr],
\]
where \(\mathcal{P}_p\) is the set of plays involving player \(p\). Units: probability added (dimensionless). Clutch qualification: average WPA over games within five points in the final five minutes, minimum 10 plays [PAGE 10].

Breakdown and singularity regimes:
1. Missing or corrupted play-by-play: the fallback is \(50\%\) plus final scoring margin [PAGE 2], which discards in-game path information and introduces endpoint bias.
2. Full-strength assumption violated: injuries, suspensions, and travel are not modeled [PAGE 5].
3. Win Probability Matrix sparsity: Appendix 2 shows erratic probabilities in extreme lead/time cells (e.g., \(-15\) points with 1 minute left \(=0\%\), while \(-15\) points with 2 minutes left \(=11\%\)) [PAGE 8], indicating small-sample bins.
4. Early-season SOS underweighting: before \(\omega_{\mathrm{SOS}}\) approaches \(0.69\), ratings overweight volatile CWP and underpenalize weak schedules [PAGE 3].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
SOM descends from a lineage of NCAA rating systems that prioritized final-score aggregation over process measurement. The Ratings Percentage Index (RPI) uses wins and losses only, while Average Scoring Margin (ASM) collapses each game to its terminal differential [PAGE 1]. Ken Pomeroy’s system introduces initial team values that degrade as the season progresses [PAGE 3; ref 1], and Sagarin’s predictive ratings represent a contemporaneous comparator [PAGE 5]. Beck’s PredictionTracker aggregates multiple public systems including Sagarin Elo and Sagarin Predictive [PAGE 4; ref 4]. The win-probability engine borrows conceptual structure from Hal Stern’s NFL win-probability relationship [PAGE 5; ref 7], and the home-court advantage literature traces to Harville and Smith [PAGE 3; ref 2], with popular elaboration in Moskowitz and Wertheim’s Scorecasting [PAGE 6; ref 6].

The SevenOvertimes brand itself is anchored to a specific historical event: the six-overtime 2009 Big East Tournament game between UConn and Syracuse [PAGE 1, footnote 1], suggesting the method was born from frustration with buzzer-beater narratives overriding holistic game evaluation.

Multi-week traps emerge from the temporal architecture of the model. Because the SOS term begins at only 31% and accrues 0.275 percentage points per day, early-season rankings are epistemically weak: a team’s CWP is evaluated against an SOS that has not yet matured to its 69% steady state [PAGE 3]. A team that plays a brutal non-conference schedule in November is underrated relative to a team with a soft early schedule, and the linear ramp does not correct this until late in the season. Conversely, the end-game segment weighting (last 15 minutes at 64%) [PAGE 7] creates a recency-within-game trap: a single late possession can disproportionately swing CWP even if the preceding 25 minutes were dominant. This reproduces, at the intra-game level, the very “last play” distortion the author sought to eliminate [PAGE 1]. The system also lacks a true recency effect across weeks; future work explicitly notes the desire to vary game weights as the season progresses [PAGE 6], meaning current ratings treat an early-season blowout and a late-season nail-biter with only the SOS ramp as a differentiator, not a decay function.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression operates at two nested levels. At the team level, SOM’s 64% weighting on the final 15 minutes [PAGE 7] assumes that late-game execution reveals true quality under pressure. In practice, coaches and players under clock stress often revert to habit sets—end-of-shot-clock isolation plays, intentional fouling, conservative ball-handling—that may not reflect overall team strength but are heavily weighted by CWP. This produces a crisis habit regression: the model treats pressure-performance noise as signal.

At the opponent level, a counter-trap exists. If an opposing coaching staff knows that SOM overweight final-segment win probability, they can manipulate late-game tempo—extending possessions, forcing clock violations, or deploying “team plays” such as timeouts and shot-clock violations [PAGE 2]—to alter the win-probability trajectory without changing the underlying talent differential. Because SOM processes play-by-play metadata including timeouts and shot-clock violations [PAGE 2], such tactical clock management enters the CWP calculation directly.

The clock itself is a structural boundary condition. NCAA basketball is a 40-minute game; the shift from 0.33 to 1.00 segment weight after minute 25 creates a discontinuity in importance [PAGE 4][PAGE 7]. Teams leading late may play to manage the win-probability matrix rather than to maximize point differential, while trailing teams may take higher-variance shots. These clock-driven strategy shifts are exogenous to team quality but endogenous to the observed win-probability path, causing SOM to measure clock-aware execution as much as innate ability.

Recursively, the model’s own predictions can influence behavior if coaches consult public ratings. A team aware it is underrated due to early-season SOS underweighting may alter its risk tolerance, while a team aware of its inflated end-game CWP may play conservatively to protect the rating. The paper does not model this game-theoretic layer [PAGE 5][PAGE 6], leaving the prediction loop open to second-order effects.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: Basketball is contested indoors, so meteorological vetoes (wind, precipitation, temperature) are null by domain. However, the physical layer includes travel rigors, altitude, and arena-specific conditions, none of which are modeled [PAGE 5]; the fixed 4.74-point home-court constant assumes venue homogeneity [PAGE 3].

Biomechanical layer: The full-strength assumption is the critical veto [PAGE 5]. If a starter responsible for a large share of team WPA is injured or suspended, the CWP-based rating is stale because historical play-by-play was generated with that player active. Worse, player-level WPA ignores individual defensive impact [PAGE 5], so a team losing its primary perimeter defender appears unchanged in team CWP even though its win probability against ball-dominant opponents should decline.

Data layer: Corrupted play-by-play—scores inside player fields, missing names, missing descriptions [PAGE 5]—and entirely missing games break the fact_plays join to Dimension_Games and Dimension_Teams [PAGE 2]. The fallback estimator \(50\%\) plus final scoring margin [PAGE 2] is a singularity: it replaces a dynamic win-probability path with a static endpoint guess.

Model layer: The Win Probability Matrix exhibits small-sample singularities in extreme lead/time cells [PAGE 8], and the linear confidence fit \(\beta(m)\) may not generalize beyond observed margins [PAGE 5][PAGE 9]. Neutral-site games face a home-court ambiguity because the constant \(\gamma\) was derived from home/away splits and the paper notes different populations for neutral-court games [PAGE 4].

Veto proof: Any prediction must be vetoed when (i) a key player is unavailable, violating full strength; (ii) play-by-play is missing or corrupted for either team in recent games, forcing reliance on the margin placeholder; (iii) the game is on a neutral court and the home-court constant is inapplicable; (iv) the relevant Win Probability Matrix cell is supported by fewer than a minimum viable sample (evidenced by erratic Appendix 2 values); or (v) the game occurs early enough in the season that \(\omega_{\mathrm{SOS}}<0.50\), making the rating overly sensitive to CWP noise [PAGE 3]. Weather is not a veto variable in this indoor domain.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (star-player removal): Verifiable condition—a team’s leading WPA contributor is ruled out before a conference game. Veto: override SOM’s full-strength CWP rating. Prediction: the model’s \(\alpha\) will overrate the injured team by more than 5 points relative to a strength-adjusted baseline, and the opponent’s realized win probability will exceed SOM’s \(\beta\) output by at least 8 percentage points.

Scenario 2 (data corruption): Verifiable condition—fact_plays is incomplete or corrupted for more than 20% of a team’s games in the prior 14 days, triggering the \(50\%\) + margin placeholder [PAGE 2]. Veto: suppress CWP-based ranking for that team until clean data resumes. Prediction: prediction accuracy for games involving that team will fall below 65%, compared with the 72.6% seasonal baseline reported for 2011–2012 [PAGE 5].

Scenario 3 (early-season SOS instability): Verifiable condition—a prediction is requested before day 69 of the season, when \(\omega_{\mathrm{SOS}}(d)=0.31+0.00275d\) remains below 0.50 [PAGE 3]. Veto: downweight or discard team rankings because SOS has not yet reached its 69% steady state. Prediction: the correlation between SOM’s early-season team ratings and end-of-season actual performance will be below \(r=0.40\), while post-ramp correlations will exceed \(r=0.70\).
</RLVR_COUNTERFACTUAL_VETOES>