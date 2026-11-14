---
source: "2022 - fRisbee An Open-Source Package for College and Professional Ultimate Frisbee Data and Modeling - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Carnegie Mellon Sports Analytics Conference/2022"
pages: 9
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5828
---

<NATIVE_REASONING>
The user wants a deep analytical response based on the provided source text about fRisbee, an R package for Ultimate Frisbee data and modeling. The response must follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

I need to carefully parse the source text, which is 9 pages.

Key source content:
- Page 1: Introduction. fRisbee R package, Ben Wieland and Akiva Dienstfrey, UVA. Over 650 collegiate men's/women's teams 2021-22. AUDL added 3 franchises. Package provides access to 5,400+ collegiate matches 2021-22. Two pre-trained models for win probability and margin of victory projections. CRAN submission pending. GitHub install.
- Page 2: load_rankings_men/women. Functions built around frisbee-rankings website (Cody Mills 2022). Filter Division I, simple table. Tibble 403x11 with columns Rank, RegionRank, Team, Record, WinPct, Rating, Region, Conference, Division, SoS, PDC. Example plot conference strength. Note: text mentions "most competitive conferences can have average team ratings that double those of the least competitive conferences."
- Page 2-3: load_team_results_men/women. Tibble 32x21 for Virginia. Columns: OppRk, Opponent, Result, Effect, Status, PctOfRanking, Date, Event, Win, Pts, OppPts, GameScore, PtDiff, OpponentRating, TeamRatingPostgame, GameValue, TeamRatingPregame, GameValueUsed, RatingsImpact, Team, GameNum. Data initially uploaded to USA Ultimate's website.
- Page 4: Historical collegiate data. Limited to games between top 100 teams during 2021-22. Dataframes gamesM and gamesW. Game-level format same as load_team_results_. Future: all games like nflreadr.
- Page 4-5: USA Ultimate Algorithm Implementation. College Ultimate uses algorithm alone for postseason bids (wild-card via USAU Ultimate Rankings). Team ratings = average of game ratings. Each game rating function of opponent rating and performance.
   Formula (verbatim from source, though OCR is messy):
   r = winning score / losing score - 1 (score difference proportion)
   diff = 125 + 475 * sin^(min(sin^(1(0 < u, 1 . 0 − 4 . 5 π^r ) * 0 . 4 π)))
   Wait, need to reconstruct properly. The source says:
   "diff = 125 + 475^sin ... min sin^1(0 < u, 1 . 0 − 4 . 5 π^r ) * 0 . 4 π)"
   Actually, looking at the source text:
   ```
   _diff_ = 125 + 475<sup>_sin_</sup><sup><u>(</u></sup><sup>_min_</sup> _sin_<sup><u>(1</u></sup> (0<sup>_<u>,</u>_1</sup> _._ <u>0</u><sup>_−_</sup> 4 <u>.</u> <u>5</u> _π_<sup>_r_</sup> )<sup><u>)</u></sup><sup>_∗_0</sup><sup>_._4</sup><sup>_π_</sup><sup><u>)</u></sup> 
   ```
   This is garbled OCR. But the prose clarifies properties: every one-goal game has value 125, goal differences worth more in close games than blowouts, max possible performance rating 600 obtained only when team doubles opponent's score. FinalRating = pregame + diff. Season rating weighted average prioritizing recent games and removing extreme competition differences. Quirk: win can decrease rating, loss can increase rating (unlike Elo). Three calculate_ functions + calculate_win_probability.
   Example: calculate_game_score(15,11) = 381.1648.
   calculate_game_score_adjusted(1800,1000,15,14): winner initial 1800, game score 1125, difference -675, increased FALSE. Loser initial 1000, game score 1675, difference 675, increased TRUE.
   calculate_game_score_adjusted_team("NorthCarolina","Brown",13,11,"mens"): NC winner 2179.26, game score 2438.63, difference 259.3704 TRUE. Brown loser 2209.79, game score 1950.42, difference -259.3704 FALSE.
   calculate_win_probability(1500,1300,"womens") = 0.7219515. Pre-trained logistic regression models.
- Page 5-6: AUDL data. Rules differ: larger fields, shorter stall clock, referees vs self-officiated. Three load_audl_ functions: games, player stats, team stats. Home field advantage 2022: home teams outscored away by ~1.21 points per game (avgHome 21.57333, avgAway 20.36667). Player stats include goals, assists, blocks, offensive efficiency, per-10-possession or per-10-points. Team stats net rating = scoresFor - scoresAgainst.
- Page 6-9: Bibliography, glossary_AUDL_teams.

Now I need to write the response. It must be >=1000 words total across sections. THINK_TRACE >=400 words.

Constraints:
- No betting lines. I must avoid mentions of spreads, totals, moneylines, odds. The source mentions win probability (0.7219515) — that's a probability, not betting odds. I can discuss probability models but must not frame as betting lines or odds. I should be careful not to say "odds" anywhere. Use "win probability" or "logistic regression probability" but not "odds" in the betting sense. Actually "odds" as a mathematical term might be risky given invariant says zero betting lines: never mention spreads, totals, moneylines, or odds. Better avoid the word "odds" entirely to be safe.
- No toy equations. I must use formal LaTeX equations. I can reconstruct the USAU formula based on the prose description and the garbled OCR, but I must be careful: I shouldn't invent fake ratios. I can state the formal equation as described in the source with assumptions and breakdown regimes. Since the OCR is garbled, I can present a normalized interpretation based on the verbal properties given: one-goal game = 125, max 600 when doubling score, monotonic in score ratio, etc. But I need to be honest about the OCR garble. I can cite [PAGE 4]-[PAGE 5] for the algorithm description and present the equation in a cleaned LaTeX form with explicit assumptions, noting the source's OCR artifacts and the verbal invariants that constrain it. That seems acceptable—it's not inventing a toy ratio; it's formalizing the source's stated algorithm.
- Cite exact [PAGE N] markers and verbatim quotes.

Structure:
<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Word count: Need >=1000 words across sections. THINK_TRACE alone >=400. Let's aim for ~200-300 words per other section, total maybe 1400-1800 words.

Let's draft content.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit.
- Discuss data pipeline: fRisbee scrapes frisbee-rankings (Cody Mills) and USA Ultimate events. Collegiate data 5,400+ matches 2021-22. Rankings tibble 403x11. Team results 32x21 for Virginia. Historical limited to top-100 games only. Multi-hop: from raw game results -> game rating (USAU algorithm) -> team rating (weighted average) -> win probability (logistic regression) -> postseason bids (algorithm alone). Gray zones: OCR garbling of the trigonometric formula; weighted average recency decay unspecified; logistic regression features unspecified (only rating and league type); "Status" Counts/Ignored filter unclear criteria; top-100 historical restriction creates survivorship bias; AUDL vs USAU ruleset differences (field size, stall clock, referees) mean models trained on one may not transfer to the other; home-field advantage 1.21 points in AUDL 2022 but no collegiate HFA quantified; win can lower rating (non-Elo quirk) creates non-monotonic rating updates; rating can double across conferences indicating non-stationarity.
- Audit: no betting lines mentioned; avoid odds. No toy equations; formalize only what source supports.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define operators:
  - load_rankings_men/women: R_t = (Rank, RegionRank, Team, Record, WinPct, Rating, Region, Conference, Division, SoS, PDC) ∈ ... [PAGE 2]
  - load_team_results: tibble 32x21 [PAGE 3] with columns.
  - USAU score-difference proportion: r = S_w / S_l − 1 [PAGE 4]
  - Performance rating: Δ = 125 + 475 · [some trigonometric function of r]. Need to formalize based on prose: Δ(1) = 125 (one-goal game), lim_{S_w → 2S_l} Δ = 600 (doubling), monotonic, close games weighted more than blowouts. I'll present a cleaned equation and explicitly state it's a normalized reconstruction constrained by source properties, citing [PAGE 4]-[PAGE 5]. The OCR is garbled so I note that.
  - Final game rating: R_game = R_pregame_opponent + Δ [PAGE 5]. Wait source says "that performance rating is added to the opponent’s pregame rating." So FinalRating = pregame + diff. Whose pregame? The opponent's pregame rating. For the winner, final rating = loser's pregame + performance? Let's check example: calculate_game_score_adjusted(1800,1000,15,14). Winner initial 1800, game score 1125, difference -675. If FinalRating = opponent pregame + diff = 1000 + 1125 = 2125. Change for winner = 2125 - 1800 = +325? But output says Difference -675, Increased FALSE. Hmm. Let's parse: The output table has columns Team, Initial, GameScore, Difference, Increased. For winner: Initial 1800, GameScore 1125, Difference -675. So Difference = GameScore - Initial? 1125 - 1800 = -675. Yes! So Difference column is GameScore - Initial (i.e., impact on that team's rating relative to its own initial). And FinalRating = Initial + Difference = GameScore. Wait but source says "FinalRating = pregame + diff" where pregame is opponent's rating? Let's re-read: "To calculate a final game rating, that performance rating is added to the opponent’s pregame rating. FinalRating = pregame + diff". Then "A team’s season-long rating is calculated as a weighted average of their game ratings". And the adjusted function: "this column is a sum of the Initial column (the opponent rating) and the GameScore column (the performance rating)." Wait: "Difference column; this column is a sum of the Initial column (the opponent rating) and the GameScore column (the performance rating)." But in example, winner Initial 1800, GameScore 1125, Difference -675. 1800 + 1125 = 2925, not -675. So the text description and example conflict, or I'm misreading columns. Let's look: "calculate_game_score_adjusted(1800,1000,15,14)" output:
   ##TeamInitialGameScoreDifferenceIncreased
   ##1winner18001125-675FALSE
   ##2loser10001675675TRUE
   So Difference = GameScore - Initial? Winner: 1125 - 1800 = -675. Loser: 1675 - 1000 = 675. Yes. So Difference is the change relative to that team's own initial rating. But the text says Difference is sum of Initial (opponent rating) and GameScore. That's contradictory with the numeric output unless the columns are labeled differently. Actually maybe the function returns two rows: one for winner, one for loser. For winner row: Initial = winner's pregame (1800), GameScore = performance rating based on scores (1125), Difference = 1125 - 1800 = -675 (impact on winner). For loser row: Initial = loser's pregame (1000), GameScore = 1675? Wait performance rating should be same for both? No, the performance rating is for the winning team. For the loser, maybe game score is computed differently (as if they won? or negative?). 1675 - 1000 = 675. Hmm. The loser's "GameScore" 1675 is weird. Maybe for the loser, it's computed from the loser's perspective with inverted scores? Not clear. The source text itself says: "this column is a sum of the Initial column (the opponent rating) and the GameScore column (the performance rating)." If Initial = opponent rating: for winner, opponent is loser (1000). 1000 + 1125 = 2125, not -675. So the example output contradicts the prose. This is a gray zone to flag.

   I should present the equations as stated in prose and note the numeric example's internal convention (Difference = GameScore − Initial for the focal team) while flagging the inconsistency as a breakdown regime / documentation gray zone. That's good for THINK_TRACE and SOURCE_OPERATORS_AND_EQUATIONS.

- Units: Rating points (dimensionless index), score difference proportion r dimensionless, win probability in [0,1], points per game (AUDL home-field 1.21), game count dimensionless.
- Assumptions: logistic regression uses only rating differential and league type; USAU algorithm alone determines bids; game rating weighted average with unknown decay kernel.
- Breakdown/singularity: r undefined when S_l = 0 (division by zero); doubling condition S_w = 2S_l gives max 600; one-goal games fix Δ=125 creating a kink/discontinuity in derivative at r corresponding to 1 goal; weighted average requires specifying recency weights (not provided), so season rating is under-specified; top-100 historical filter creates selection bias; AUDL/USAU rule differences break cross-league transfer.

RETROCAUSAL_GENEALOGY:
- Lineage: Elo ratings (chess), nflreadr (Ho and Carl 2022), frisbee-rankings (Cody Mills 2022), USA Ultimate Rankings Algorithm (USAUltimate 2018), AUDL rules (Krucoff 2018). Multi-week traps: recency weighting in season rating means early-season games decay; teams peaking late benefit; "win does not guarantee rating increase" means teams can schedule weak opponents and still lose rating if they don't dominate; conference strength doubling means cross-conference comparisons are non-stationary; top-100 historical restriction means pre-2022 or non-top-100 games are missing, creating a retroactive data hole. Multi-week trap: a team's rating in week N depends on weighted average of prior game ratings, so a single blowout loss weeks ago can suppress current rating even if form improved (hysteresis), or a weak early schedule can inflate rating until strength-of-schedule catches up (SoS column exists but its role in rating is unclear).

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: coaches mid-tournament cannot compute trig functions on sideline (source explicitly says this) -> they rely on heuristics; under pressure they regress to simple win/loss counting rather than score-difference management. Counter-trap: because USAU formula rewards dominating weaker opponents and punishes close wins by heavy favorites, a coach who knows the algorithm might intentionally run up score (within spirit of game?) or manage substitutions to preserve rating. But self-officiated college ultimate and "spirit of the game" may constrain. Clock: game clock / stall clock differences in AUDL (shorter stall) vs college; end-of-game clock management affects score differential and thus ratings. Recursive ToM: Team A anticipates Team B's rating-management strategy; Team B anticipates A's anticipation; leads to meta-gaming on margin of victory. Since margin projections are a pre-trained model output, teams could game the model if features are known (rating only), but model is pre-trained and opaque.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical/biomechanical: disc flight physics, wind, field size (AUDL larger), stall clock (shot clock) affects tempo and possession count, hence per-10-possession stats are pace-free. Weather: wind affects passing game and scoring, not modeled in fRisbee (rating only uses score and opponent rating). Veto: any predictive model using only ratings cannot account for weather-induced variance, wind direction, field conditions, player fatigue across tournament weekends, or referee vs self-officiated rule differences. These are exogenous veto layers that invalidate pure rating-based win probability in specific regimes (high wind, extreme heat/tournament fatigue, cross-league AUDL vs college).

RLVR_COUNTERFACTUAL_VETOES:
- 3 verifiable veto scenarios + predictions. Must be verifiable (falsifiable).
  1. Weather veto: If a collegiate match is played in sustained wind > X (say 15 mph), the win probability from calculate_win_probability (rating-only logistic) will be miscalibrated because wind suppresses scoring and amplifies variance, breaking the assumption that score difference proportion r is solely skill-determined. Prediction: under high wind, the rating favorite's win probability will deviate from logistic prediction toward 0.5 (increased upset rate), particularly when the favorite relies on passing game. Verifiable: compare predicted vs actual outcomes in top-100 games (gamesM/gamesW) matched to historical weather data from game dates/locations.
  2. Non-monotonic rating veto: A heavy favorite (e.g., 800-point differential as in source example) winning by one goal (15-14) suffers a rating decrease (Difference −675). Prediction: teams with large rating advantages have an incentive to avoid close games; in tournament play, a favored team that wins narrowly will see its postseason bid probability drop despite winning, creating a perverse incentive to manage margins. Verifiable: inspect `load_team_results` for games where favorite won by 1 goal and check `RatingsImpact` < 0; the source example explicitly shows this for 1800 vs 1000, 15-14 [PAGE 5].
  3. Cross-league rule veto: AUDL home-field advantage 1.21 points/game in 2022 [PAGE 6] and different rules (referees, stall clock, field size) mean a model trained on college USAU data will fail when applied to AUDL or vice versa. Prediction: applying the collegiate win-probability logistic model (trained on college ratings) to AUDL matchups will produce systematic miscalibration because AUDL scoring is higher (avg ~21 points) and home-field advantage exists; the model lacks a home-field term and league-specific intercept. Verifiable: backtest calculate_win_probability on AUDL 2022 games using AUDL team ratings (if available) or college ratings; expect Brier score degradation and calibration slope ≠ 1.
   For each: veto condition, counterfactual prediction, verification method.

Need to ensure no mention of spreads, totals, moneylines, odds. Avoid "odds" word. Use "probability", "likelihood", "rating", "proportion". Be careful.

Citations: [PAGE 1], [PAGE 2], etc. Must include verbatim quotes where citing. I'll include short verbatim quotes.

Word count check: THINK_TRACE needs >=400 words. Let's write robustly.

Let's draft each section carefully.

I'll write now.

Potential issue: The user says "STRICT INVARIANTS" and ">= 1,000-WORD DEPTH across these exact XML sections". So total across all sections >= 1000 words. THINK_TRACE >= 400. I'll ensure each section has decent length.

Let's compose.

Need to include formal LaTeX equations. Use $$ or \( \). Since it's XML, LaTeX is fine.

Equation reconstruction: I need to be honest about OCR. The source says:

r = winning score / losing score − 1 (score difference proportion)

diff = 125 + 475 * sin^( min( sin^1( ... ) ) ... )

I will write:

Let \(S_w\) be the winning score and \(S_l\) the losing score. The score-difference proportion is
\[
r = \frac{S_w}{S_l} - 1, \quad S_l > 0.
\]
The performance rating \(\Delta\) is a function of \(r\) satisfying, per the source's stated design properties [PAGE 4]–[PAGE 5]:
1. \(\Delta(r)\) for a one-goal game equals 125 points.
2. \(\Delta\) increases with goal difference in close games but saturates for blowouts.
3. \(\Delta_{\max}=600\) points, attained only when \(S_w = 2S_l\) (the winner doubles the loser).
4. The final game rating adds \(\Delta\) to the opponent's pregame rating \(R^{\text{pre}}_{\text{opp}}\):
\[
R^{\text{game}} = R^{\text{pre}}_{\text{opp}} + \Delta(r).
\]
The season rating \(R^{\text{season}}\) is a weighted average of game ratings with a recency kernel \(w_t\) that is not specified in the source:
\[
R^{\text{season}} = \frac{\sum_{t=1}^{T} w_t R^{\text{game}}_t}{\sum_{t=1}^{T} w_t}, \quad w_t \text{ unspecified}.
\]
Win probability \(p\) from `calculate_win_probability` is a pre-trained logistic regression mapping \((R_A, R_B, \ell)\) to \(p \in [0,1]\), where \(\ell \in \{\text{mens}, \text{womens}\}\) [PAGE 5]. The example yields \(p(1500,1300,\text{womens}) = 0.7219515\) [PAGE 5].

Note on OCR: the printed LaTeX in the source PDF is garbled at the `diff` line [PAGE 4], so the above is a normalization constrained by the verbal invariants supplied in the same paragraph; the exact trigonometric argument cannot be recovered verbatim from the OCR text.

This is good.

Also mention the `calculate_game_score_adjusted` example: winner 1800, loser 1000, score 15-14. Output table: Difference −675 for winner, +675 for loser [PAGE 5]. This implies the `Difference` column is computed as GameScore − Initial for the focal row, which conflicts with the prose line "Difference ... is a sum of the Initial column ... and the GameScore column" [PAGE 5]. Flag as documentation inconsistency / gray zone.

Now word counts. Let's estimate. THINK_TRACE ~500 words. SOURCE_OPERATORS ~400. RETROCAUSAL ~300. RECURSIVE ~300. CROSS_LAYER ~250. RLVR ~250. Total ~2000. Good.

Let's write in final. Make sure XML tags exactly as specified. No extra text outside.

Need to be careful: The user wants these exact XML sections. I will output only the sections.

Let's draft carefully with citations and verbatim quotes.

Verbatim quotes to use:
- [PAGE 1]: "over 650 collegiate men’s and women’s teams competed in the 2021-22 season"
- [PAGE 1]: "access to aggregated game-by-game information on over 5,400 Ultimate Frisbee matches at the collegiate level during the 2021-22 season"
- [PAGE 2]: "tibble[403x11](S3:tbl_df/tbl/data.frame)"
- [PAGE 3]: "tibble[32x21](S3:tbl_df/tbl/data.frame)"
- [PAGE 4]: "wild-card bid allocation for the USAU College Championships is conducted solely based on the ‘USAU Ultimate Rankings’"
- [PAGE 4]: "every one-goal game has a value of 125, goal differences are “worth” more rating points in close games than blowouts, and the maximum possible performance rating is 600, which can be obtained only in games where a team doubles their opponent’s score."
- [PAGE 5]: "a win does not guarantee a rating increase!"
- [PAGE 5]: "calculate_win_probability(1500,1300,"womens") ##[1]0.7219515"
- [PAGE 6]: "home teams outscored away teams by approximately 1.21 points per game on average" and avgHome 21.57333 avgAway 20.36667.

Good.

Now compose final answer.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The fRisbee pipeline implements a multi-hop inference chain: raw game results are ingested from USA Ultimate’s event pages and the frisbee-rankings website (Cody Mills, 2022) [PAGE 1]-[PAGE 2]; those results are converted into per-game ratings via the USA Ultimate algorithm; game ratings are aggregated into a team season rating via an unspecified weighted average; and finally, team ratings feed a pre-trained logistic regression that emits a win probability for a hypothetical matchup [PAGE 5]. Each hop introduces a distinct gray zone.

Hop one—data access. The package exposes 5,400+ collegiate matches from 2021-22 [PAGE 1], but the historical dataframe is explicitly limited to “only games between top 100 teams during the 2021-22 season” [PAGE 4]. This creates a survivorship/selection hole: any model trained on `gamesM` or `gamesW` cannot see games involving unranked teams, and the top-100 cutoff is applied retroactively, so a team that entered the top 100 mid-season has a truncated observable history. The current-season `load_team_results_` tibble for Virginia is 32 rows by 21 columns [PAGE 3], including `Status` with levels “Counts” and “Ignored” [PAGE 3], yet the source never defines the rule that assigns a game to “Ignored,” making the effective sample of rated games opaque.

Hop two—the USAU rating algorithm. The source states that team ratings are the average of game ratings, and each game rating depends on opponent rating and performance [PAGE 4]. The score-difference proportion is r = S_w / S_l − 1 [PAGE 4], which is singular when S_l = 0; a shutout therefore breaks the proportion unless a special case is hard-coded elsewhere and not disclosed. The performance rating Δ(r) is described only through design properties: every one-goal game is worth 125 points, close games are worth more than blowouts, and the ceiling is 600 points, reached only when the winner doubles the loser’s score [PAGE 4]-[PAGE 5]. The printed equation in the PDF is OCR-garbled at the `diff` line [PAGE 4], so the exact trigonometric argument is unrecoverable verbatim; I normalize it in SOURCE_OPERATORS_AND_EQUATIONS strictly from these stated invariants.

Hop three—season aggregation. The season rating is a weighted average “designed to prioritize recent games and remove the impact of games with extreme differences in competition” [PAGE 4], but the recency kernel w_t and the extreme-competition filter are not specified. Without w_t, R_season is under-identified: two teams with identical game ratings can receive different season ratings depending on unobserved timing weights.

Hop four—win probability. `calculate_win_probability` uses “pre-trained logistic regression models” taking two ratings and a league type [PAGE 5]. The worked example returns 0.7219515 for a 1500-rated versus 1300-rated women’s team [PAGE 5]. Because the model conditions only on rating and league, it omits venue, weather, player availability, and tournament fatigue. A one-point logistic shift in rating does not have a stable meaning across the season because the rating scale itself is non-stationary: the source notes that “the most competitive conferences can have average team ratings that double those of the least competitive conferences” [PAGE 2]. Thus a 2000-rated team in a weak conference is not comparable to a 2000-rated team in a strong conference, violating exchangeability assumptions of any pooled logistic model.

Gray-zone summary: (1) OCR-corrupted trigonometric formula; (2) unspecified recency weights and ignored-game rule; (3) top-100 historical survivorship bias; (4) non-Elo quirk where a win can lower a rating and a loss can raise it [PAGE 5]-[PAGE 5]; (5) cross-league rule mismatch between college (self-officiated, smaller field, longer stall) and AUDL (referees, larger field, shorter stall clock) [PAGE 5]; (6) rating non-stationarity across conferences [PAGE 2]. No betting lines, spreads, totals, moneylines, or wagering odds appear in the source, and none will be introduced here; all probability statements are strictly model win probabilities in [0,1].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown regimes.

Operator 1: Collegiate rankings access.
`load_rankings_men()` and `load_rankings_women()` return a tibble of dimension 403 × 11 [PAGE 2]:
\[
\mathcal{R} = \{\text{Rank},\text{RegionRank},\text{Team},\text{Record},\text{WinPct},\text{Rating},\text{Region},\text{Conference},\text{Division},\text{SoS},\text{PDC}\}.
\]
Units: `WinPct` is a unitless proportion in [0,1]; `Rating`, `SoS`, and `PDC` are rating-index points (dimensionless). Verbatim: the console print is `tibble[403x11](S3:tbl_df/tbl/data.frame)` [PAGE 2].

Operator 2: Team-level results.
`load_team_results_men("Virginia")` returns a 32 × 21 tibble [PAGE 3] containing, among others, `OppRk`, `Opponent`, `Result`, `Pts`, `OppPts`, `GameScore`, `PtDiff`, `OpponentRating`, `TeamRatingPregame`, `TeamRatingPostgame`, `RatingsImpact`, and `Status ∈ {Counts, Ignored}` [PAGE 3]. Units: `Pts`/`OppPts` are integer goals; `PtDiff` is goal difference; ratings are index points.

Operator 3: USA Ultimate score-difference proportion.
Let \(S_w\) be the winning score and \(S_l\) the losing score, with \(S_l > 0\) to avoid division by zero. The source defines [PAGE 4]:
\[
r = \frac{S_w}{S_l} - 1.
\]
Singularity: if \(S_l = 0\), \(r\) is undefined; the source does not disclose a shutout convention.

Operator 4: Performance rating \(\Delta(r)\) (normalized reconstruction from stated invariants).
The printed LaTeX in the PDF is OCR-corrupted at the `diff` line [PAGE 4], so the following is constrained only by the verbal properties printed in the same paragraph [PAGE 4]-[PAGE 5]: (i) a one-goal game yields \(\Delta = 125\) points; (ii) \(\Delta\) is increasing in goal difference for close games but saturates for blowouts; (iii) \(\Delta_{\max} = 600\) points, attained only when \(S_w = 2S_l\), i.e., \(r = 1\). A monotone saturating map consistent with these bounds is one admissible normalization, but the exact trigonometric form cannot be verified from the OCR text.

Operator 5: Final game rating and season rating.
The source states verbatim: “To calculate a final game rating, that performance rating is added to the opponent’s pregame rating” [PAGE 5]:
\[
R^{\text{game}} = R^{\text{pre}}_{\text{opp}} + \Delta(r).
\]
Season rating is a weighted average with recency kernel \(w_t\) [PAGE 4]:
\[
R^{\text{season}} = \frac{\sum_{t=1}^{T} w_t R^{\text{game}}_t}{\sum_{t=1}^{T} w_t},
\]
where \(w_t\) is unspecified—an under-identification breakdown regime.

Operator 6: Win-probability model.
`calculate_win_probability` implements a pre-trained logistic regression mapping \((R_A, R_B, \ell)\) to \(p \in [0,1]\), where \(\ell \in \{\text{mens},\text{womens}\}\) [PAGE 5]. Worked example verbatim [PAGE 5]:
\[
\texttt{calculate\_win\_probability(1500,1300,"womens")} \;\Rightarrow\; 0.7219515.
\]

Documentation inconsistency (gray zone). In `calculate_game_score_adjusted(1800,1000,15,14)` the printed table gives Difference = −675 for the winner and +675 for the loser [PAGE 5], which is algebraically consistent with \(\text{Difference} = \text{GameScore} - \text{Initial}\) for the focal row. The prose, however, states that Difference “is a sum of the Initial column (the opponent rating) and the GameScore column” [PAGE 5], which would yield positive sums, not −675. This contradiction between code output and prose description is a breakdown regime for any implementation that relies on the textual specification rather than the executed function.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week traps.

The fRisbee design descends from three lineages. First, the rating methodology inherits from Elo-style paired-comparison scoring (chess) but deliberately departs from it: unlike standard Elo, “a win does not guarantee a rating increase” [PAGE 5], because the USAU formula can penalize a heavy favorite that wins narrowly [PAGE 5]. Second, the data-engineering pattern mirrors `nflreadr` (Ho and Carl 2022), which the authors cite as the future model for collecting all games rather than only top-100 contests [PAGE 4]. Third, the rankings source is the independent frisbee-rankings website by Cody Mills (2022) [PAGE 2], which itself aggregates USA Ultimate results [PAGE 2]. The postseason mechanism is unusual among collegiate sports: wild-card bids to the USAU College Championships are allocated “solely based on the ‘USAU Ultimate Rankings’” [PAGE 4], with no selection committee, making the rating algorithm a deterministic gatekeeper rather than an advisory input.

Multi-week traps arise from the interaction of recency weighting, the top-100 historical filter, and conference heterogeneity. Because the season rating weights recent games more heavily [PAGE 4], a team’s week-N rating is hysteretic: a blowout loss in week 2 can suppress a week-8 rating even if current form has improved, while a soft early schedule can inflate a rating until strength-of-schedule (SoS, a column in the rankings table [PAGE 2]) catches up. The top-100-only historical archive [PAGE 4] means that retrospective model validation cannot condition on the full game graph; any “backtest” is necessarily truncated at the selection boundary. Because average team ratings can double between the most and least competitive conferences [PAGE 2], a cross-conference matchup in week 3 compares ratings generated on non-identical scales, so early-season postseason projections are non-stationary and prone to retrospective revision as inter-conference games accumulate. Finally, the “Ignored” status flag [PAGE 3] implies that some results are excised from the rating recursion without a disclosed rule, so a team’s week-over-week rating delta can change because of a hidden reclassification rather than a new game.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression. The source explicitly notes that the USAU formula’s complexity makes sideline calculation impractical: “the last thing a coach wants to be doing mid-tournament is computing trigonometric functions on the sideline” [PAGE 5]. Under tournament time pressure, coaches and players therefore regress to low-complexity heuristics—win/loss counting and score observation—rather than optimizing the rating functional. Because the rating update is non-monotonic in outcome (a win can reduce rating [PAGE 5]), the habit regression is dangerous: a team that trusts the heuristic “winning is always good” may play conservatively to protect a lead, win by one goal, and inadvertently trigger a rating decrease that harms its postseason bid.

Counter-trap. A team with recursive theory of mind about the algorithm can invert the incentive. The worked example shows an 1800-rated favorite beating a 1000-rated underdog 15-14 suffers Difference = −675, while the loser gains +675 [PAGE 5]. A sophisticated favorite therefore faces a counter-trap: winning narrowly is rating-punishing, so the rational rating-preserving strategy is to dominate weaker opponents decisively, constrained only by the “spirit of the game” and self-officiating norms of college ultimate [PAGE 5]. A second-order counter-trap is that the underdog, knowing the favorite may conserve or that the favorite’s rating is fragile, can play for a close loss to extract rating points. Because `calculate_win_probability` conditions only on ratings and league [PAGE 5], it does not encode these strategic adaptations; its 0.7219515 probability for a 1500 vs 1300 women’s matchup [PAGE 5] assumes fixed team behavior, not rating-manipulating behavior.

Clock. Two clock layers intervene. The game-level clock determines whether a trailing team can compress enough possessions to alter the score-difference proportion \(r = S_w/S_l - 1\) [PAGE 4]; in college ultimate there is no game clock in the same sense as timed sports, but the stall clock (possession clock) governs tempo [PAGE 5]. The AUDL variant uses a shorter stall clock and referees [PAGE 5], which changes possession counts and scoring tempo relative to college; indeed AUDL 2022 home teams averaged 21.57333 points versus 20.36667 for away teams, a 1.21-point-per-game home-field edge [PAGE 6]. This clock/rule divergence means a model trained on college self-officiated data is recursively mismatched when an opponent’s strategy is conditioned on AUDL officiating and tempo. The recursion closes on the model itself: if teams learn that the public logistic model uses only ratings, they can manipulate ratings through margin management, invalidating the model’s fixed-behavior assumption in future weeks.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

The fRisbee rating and win-probability stack is a univariate, rating-only system. It receives no physical-layer inputs, so several veto conditions are structurally unmodeled and can invalidate predictions in specific regimes.

Weather veto. Wind speed and direction alter disc flight stability, passing completion rates, and scoring variance. Because \(r\) is computed solely from final scores [PAGE 4] and the logistic model conditions only on ratings [PAGE 5], a high-wind game that suppresses scoring and increases upset frequency is indistinguishable from a low-wind game with the same rating inputs. Veto condition: sustained surface wind above a threshold where passing efficiency degrades (e.g., >15 mph, to be calibrated empirically). Under this veto, `calculate_win_probability` is miscalibrated because the latent skill-to-score mapping is environment-dependent; the model’s assumption that score difference is determined by team strength alone breaks down.

Physical/field veto. AUDL fields are larger than college fields, and AUDL uses referees rather than self-officiation [PAGE 5]. Field dimensions change the physical cost of long throws and the spatial distribution of scoring; officiating changes foul calls and turnover frequency. Because the collegiate rating algorithm was built for USA Ultimate rules [PAGE 4]-[PAGE 5], cross-league application to AUDL is vetoed by a rule-set mismatch. The 2022 AUDL home-field advantage of approximately 1.21 points per game (21.57333 vs 20.36667) [PAGE 6] is itself evidence of a venue/rule effect that the collegiate model lacks entirely.

Biomechanical/fatigue veto. Collegiate tournaments are played over weekends with multiple games per day. Player fatigue, substitution depth, and recovery accumulate across games within a tournament, but the game-rating formula treats each game as independent and the season rating as a weighted average with no explicit fatigue state [PAGE 4]. A team playing its fourth game in 18 hours is physically distinct from the same team fresh, yet \(R^{\text{game}}\) contains no fatigue term. Veto condition: late-tournament elimination games where one team has a one-game advantage in rest. The model cannot discriminate this state; prediction error rises as the fatigue asymmetry grows.

Adjudication hierarchy. When any veto condition is active, the rating-only win probability is not merely uncertain—it is structurally misspecified. The correct order of precedence is: (1) physical rule-set (college vs AUDL) veto; (2) weather veto; (3) fatigue/rest veto; only if all three are inactive does the pure rating model remain admissible. No betting-line quantities are invoked in this adjudication; all statements concern model validity and prediction error.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios with counterfactual predictions.

Scenario 1 — Weather veto on collegiate win probability.
Veto condition: a top-100 collegiate match in `gamesM` or `gamesW` [PAGE 4] played under sustained wind exceeding the empirically calibrated passing-degradation threshold. Counterfactual prediction: for rating favorites, the realized win frequency will be significantly closer to 0.5 than the logistic model’s `calculate_win_probability` output [PAGE 5], because wind suppresses the favorite’s passing attack and increases score variance, breaking the assumption that \(r\) is skill-determined [PAGE 4]. The favorite’s predicted probability (e.g., 0.72 style for a 200-point gap [PAGE 5]) will be overconfident. Verification: match game dates and locations in `gamesM`/`gamesW` to historical weather records; compute calibration error (predicted vs observed win rate for favorites) stratified by wind threshold; reject the null of no miscalibration if high-wind favorites underperform the model by a statistically significant margin.

Scenario 2 — Non-monotonic rating veto (close-win penalty).
Veto condition: a heavy college favorite (rating gap ≥ 600 points, mirroring the source’s 1800 vs 1000 example [PAGE 5]) wins by exactly one goal. Counterfactual prediction: the favorite’s `RatingsImpact` will be negative despite the win, replicating the documented quirk where “a win does not guarantee a rating increase” [PAGE 5] and where an 800-point favorite winning 15-14 records Difference = −675 [PAGE 5]. The loser’s rating will increase [PAGE 5]. Verification: query `load_team_results_men/women` [PAGE 3] for all games satisfying the favorite/narrow-win filter; assert that at least one instance shows `RatingsImpact < 0` for the winner and `> 0` for the loser, confirming the source’s example is not an isolated OCR artifact but a general property of the algorithm. This falsifies any model that assumes rating updates are monotone in game outcome.

Scenario 3 — Cross-league rule veto (college model applied to AUDL).
Veto condition: applying `calculate_win_probability` [PAGE 5], trained on collegiate USA Ultimate data, to AUDL matchups using AUDL team ratings or mapped college ratings. Counterfactual prediction: systematic miscalibration because AUDL differs by larger fields, referees, shorter stall clock, and a measured home-field edge of ~1.21 points per game (21.57333 home vs 20.36667 away in 2022) [PAGE 5]-[PAGE 6]. The collegiate logistic model has no home-field term and no league-specific intercept, so its AUDL predictions will exhibit a calibration slope ≠ 1 and elevated Brier score relative to within-college backtests. Verification: backtest the model on 2022 AUDL games from `load_audl_games(2022)` [PAGE 6] using the best available AUDL team ratings; compare calibration and discrimination to the collegiate `gamesM`/`gamesW` domain [PAGE 4]. A significant degradation confirms the veto: cross-league transfer is invalid without rule-set and venue covariates.
</RLVR_COUNTERFACTUAL_VETOES>