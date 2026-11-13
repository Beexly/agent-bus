---
source: "2022 - fRisbee An Open-Source Package for College and Professional Ultimate Frisbee Data and Modeling - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/Carnegie Mellon Sports Analytics Conference/2022"
pages: 9
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6235
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about fRisbee, an R package for Ultimate Frisbee data and modeling. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting lines whatsoever.
- No fake toy equations. Must use formal LaTeX, real equations from the paper, units, assumptions, singularity/breakdown regimes.
- Cite page markers [PAGE N] and verbatim quotes.
- Total >= 1000 words across sections.
- THINK_TRACE must be >= 400 words.

Let me carefully extract content from the provided PDF text (pages 1-9).

Key facts from the paper:
- fRisbee: open-source R package for college and professional Ultimate Frisbee rankings, results, historical data.
- Authors: Ben Wieland and Akiva Dienstfrey, University of Virginia.
- 650+ collegiate men's and women's teams in 2021-22 season.
- AUDL added 3 new franchises for 2021-22.
- Over 5,400 Ultimate Frisbee matches at collegiate level during 2021-22 season.
- Two pre-trained models: win probability and margin of victory projections.
- load_rankings_men()/load_rankings_women() functions built around frisbee-rankings website (Cody Mills 2022).
- tibble [403 x 11] for men's rankings.
- Columns: Rank, RegionRank, Team, Record, WinPct, Rating, Region, Conference, Division, SoS, PDC.
- Most competitive conferences can have average team ratings that double those of least competitive conferences.
- load_team_results_men/women: full info on every team result, uploaded to USA Ultimate's website.
- Includes score, result, opposing team's ranking, event, rating before/after game.
- tibble [32 x 21] for Virginia men's team results.
- Columns include OppRk, Opponent, Result, Effect, Status, PctOfRanking, Date, Event, Win, Pts, OppPts, GameScore, PtDiff, OpponentRating, TeamRatingPostgame, GameValue, TeamRatingPregame, GameValueUsed, RatingsImpact, Team, GameNum.
- Historical data: limited to games between top 100 teams during 2021-22 season, dataframes gamesM and gamesW.
- USA Ultimate Algorithm: postseason bids determined solely by algorithm, no selection committee.
- Team ratings are average of team's game ratings.
- Game rating formula:
  - r = losing score / (winning score - 1)
  - diff = 125 + 475 * sin(min(1, 1 - r^0.5) * 0.4π) / sin(0.4π)
  - Every one-goal game has value 125.
  - Max performance rating is 600, obtained only when team doubles opponent's score.
  - FinalRating = pregame + diff
- Weighted average of game ratings prioritizes recent games, removes impact of extreme competition differences.
- Key property: a win does not guarantee rating increase; loss does not guarantee rating decrease (differs from standard Elo).
- calculate_game_score(winning, losing) -> performance rating. Example: (15,11) -> 381.1648.
- calculate_game_score_adjusted(winner_rating, loser_rating, win_score, lose_score) -> final rating impact.
- Example: (1800, 1000, 15, 14): winner initial 1800, GameScore 1125, Difference -675, Increased FALSE. Loser initial 1000, GameScore 1675, Difference 675, Increased TRUE.
- calculate_game_score_adjusted_team(winner_team, loser_team, win_score, lose_score, league) pulls current ratings.
- Example: North Carolina (2179.26) beats Brown (2209.79) 13-11, mens: NC GameScore 2438.63, Difference 259.3704, Increased TRUE; Brown GameScore 1950.42, Difference -259.3704, Increased FALSE.
- calculate_win_probability(rating_A, rating_B, league) -> logistic regression. Example: 1500-rated women's vs 1300-rated women's -> 0.7219515.
- AUDL: larger fields, shorter stall clock, referees vs self-officiated.
- load_audl_games: game-level data, week, postseason, stadium, date/time, streaming URL.
- 2022 AUDL: home teams outscored away teams by ~1.21 points per game on average. avgHome 21.57333, avgAway 20.36667.
- load_audl_player_stats: basic and complex stats (offensive efficiency), totals, per-game, per-10-possession or per-10-points.
- Jordan Kerr and Ryan Osgar stand out as efficient playmakers.
- load_audl_team_stats: total and per-game, team_type option ("team" or "opponent").
- netRating = scoresFor - scoresAgainst.

Now I need to structure the response.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Discuss the USAU rating algorithm's mathematical properties.
- The sine-based performance rating function.
- Boundary conditions: r = losing score / (winning score - 1). Note singularity when winning score = 1 (division by zero). But in ultimate, scores are much higher, so practically not an issue, but mathematically singular at winning_score = 1.
- min(1, ...) caps the argument.
- When r -> 0 (blowout where loser scores 0), r^0.5 -> 0, 1 - 0 = 1, min(1, 1) = 1, sin(1 * 0.4π) = sin(0.4π), so diff = 125 + 475 * 1 = 600. Wait, let's check: if losing score = 0, r = 0/(W-1) = 0. r^0.5 = 0. 1 - 0 = 1. min(1, 1) = 1. sin(0.4π) / sin(0.4π) = 1. diff = 125 + 475 = 600. So max 600 when shutout? But the text says "maximum possible performance rating is 600, which can be obtained only in games where a team doubles their opponent's score." Let's check doubling: W = 2L. r = L/(2L - 1). For large L, r ≈ 0.5. r^0.5 ≈ 0.707. 1 - 0.707 = 0.293. min(1, 0.293) = 0.293. 0.293 * 0.4π ≈ 0.368 rad. sin(0.368) ≈ 0.36. sin(0.4π) = sin(72°) ≈ 0.951. Ratio ≈ 0.378. diff = 125 + 475 * 0.378 ≈ 125 + 179.6 ≈ 304.6. That's not 600. Hmm, maybe I need to re-read.
Wait: "r = losing score / winning score − 1". Is it losing score / (winning score - 1) or (losing score / winning score) - 1? The LaTeX in text shows:
r =
losing score
winning score−1
This is ambiguous in plain text but likely \frac{losing score}{winning score - 1}.
Then diff = 125 + 475 sin(min(1, 1−r^0.5) * 0.4π) / sin(0.4π).
Text says: "every one-goal game has a value of 125". One-goal game: W = L+1. r = L / ((L+1) - 1) = L/L = 1. r^0.5 = 1. 1 - 1 = 0. min(1, 0) = 0. sin(0) = 0. diff = 125 + 0 = 125. Correct.
"maximum possible performance rating is 600, which can be obtained only in games where a team doubles their opponent's score." Let's test W=2L. r = L/(2L-1). For L=1, W=2: r = 1/(2-1) = 1. That's a one-goal game actually (2-1). diff=125. Not max.
For large L, r → 0.5. 1 - sqrt(0.5) ≈ 0.2929. * 0.4π ≈ 0.3679. sin ≈ 0.3595. / sin(0.4π) (≈0.9511) ≈ 0.378. *475 ≈ 179.6. +125 = 304.6. Not 600.
Wait, maybe the formula is interpreted differently. Let's look at the raw text:
r =
losing score
winning score−1
Then:
diff = 125 + 475 sin(min(1, 1−r
0.5 )∗0.4π)
sin(0.4π)
The formatting is messy. Maybe r^0.5 means r to the power 0.5.
Could "doubles their opponent's score" mean something else? If W = 2L, and L is large, r ≈ 0.5. That gives ~305, not 600.
What if r = losing score / winning score, then minus 1 outside? No, the text says winning score−1 in denominator.
Maybe the max 600 is as r → 0? If losing score = 0, r = 0. Then diff = 600. But text says "only in games where a team doubles their opponent's score." That seems contradictory unless the formula in the paper is slightly different from what renders, or there's a specific interpretation.
Actually, wait. Let's re-read carefully: "the maximum possible performance rating is 600, which can be obtained only in games where a team doubles their opponent's score." Perhaps in the context of the formula, when W = 2L exactly and using integer scores? Let's test L=13, W=26 (double). r = 13/(26-1) = 13/25 = 0.52. sqrt(0.52) ≈ 0.721. 1-0.721 = 0.279. *0.4π = 0.350. sin ≈ 0.343. /0.951 = 0.361. *475 = 171.5. +125 = 296.5. Still not 600.
Maybe the formula is diff = 125 + 475 * sin(min(1, 1 - r) ^ 0.5 * 0.4π) / sin(0.4π)? The text formatting shows "1−r 0.5" which could mean (1-r)^0.5 or 1 - r^0.5.
If it's (1-r)^0.5: For one-goal game, r=1, (1-1)^0.5 = 0, diff=125. Good.
For blowout L=0, r=0, (1-0)^0.5=1, min(1,1)=1, diff=600. Good.
For double score W=2L, r = L/(2L-1) ≈ 0.5. (1-0.5)^0.5 = 0.707. min(1, 0.707)=0.707. *0.4π = 0.888. sin(0.888) ≈ 0.776. /0.951 = 0.816. *475 = 387.6. +125 = 512.6. Closer to 600 but not quite.
As L→∞, W=2L, r→0.5, same result ~513. Not 600.
What if r = losing score / winning score (no -1)? Then W=2L gives r=0.5. Same.
What if "doubles" means something else? Or maybe the text's claim about doubling is an approximation or specific property.
Actually, looking at the USAU algorithm documentation might clarify, but I must stick to the source text provided. I should note the apparent tension or just present the formula as given and its stated properties without over-interpreting. I can mention the stated property: max 600 at doubling, one-goal = 125.
I need to be careful not to invent fake ratios. I can analyze the given formula.

Breakdown regimes / singularities:
- winning score = 1 causes division by zero in r = L/(W-1). In ultimate, scores are typically much higher than 1, so this is outside the empirical domain but a mathematical singularity.
- r > 1 possible? If L > W-1, i.e., L >= W. But by definition W > L, so L <= W-1 (integer scores), so r <= 1. Equality when W = L+1 (one-goal game). So r ∈ [0, 1]. Good, no domain violation for sqrt.
- min(1, ...) ensures argument to sin is within [0, 0.4π], so sin is monotonic positive. No singularity there.
- Weighted average prioritizes recent games; exact weighting function not given in text (gray zone).
- Logistic regression for win probability: inputs are rating difference and league type. Coefficients not disclosed in paper (gray zone/proprietary pre-trained model).
- AUDL home-field advantage: 1.21 points per game average difference (21.57 vs 20.37). Small effect size relative to total scores (~21 points), roughly 5.7% relative difference.

SOURCE_OPERATORS_AND_EQUATIONS:
- Formal LaTeX for the USAU algorithm.
- Units: rating points (dimensionless but scaled), points (goals), probability [0,1].
- Page citations.
- Breakdown: singularity at W=1; logistic model coefficients unpublished; historical data limited to top-100 matchups.

RETROCAUSAL_GENEALOGY:
- Lineage: Elo ratings (chess), USAU Ultimate Rankings Algorithm (2018), nflreadr (Ho and Carl 2022), frisbee-rankings (Mills 2022).
- Multi-week traps: rating inertia, recency bias, strength of schedule confounding, conference rating disparities (double between most and least competitive conferences), one-goal game floor causing rating compression, win-not-guaranteed property creating perverse incentives (running up score? Actually in ultimate, score differential matters via r, so winning by more helps, but one-goal floor means close wins are minimally rewarded; blowouts capped at 600).

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: coaches under pressure may regress to heuristic sideline calculations; the paper notes coaches don't want trig functions mid-tournament.
- Counter-trap: fRisbee's calculate_ family automates this, but creates algorithmic dependency; teams may optimize for rating rather than actual win (rating gaming).
- Clock: in-season weighting recency, postseason bid algorithm is retrospective but determines future bids.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical/biomechanical: disc flight, stall clock (AUDL shorter), field size, referee vs self-officiated. These are not captured by rating algorithm.
- Weather: wind affects disc flight, not in model.
- Veto: any predictive model using only ratings must be vetoed when weather conditions deviate from historical norms (e.g., high wind), or when rule differences (AUDL vs USAU) create non-stationarity.
- Proof: home-field advantage in AUDL is only 1.21 points; environmental layers can swamp this.

RLVR_COUNTERFACTUAL_VETOES:
- 3 verifiable veto scenarios + predictions.
1. Scenario: AUDL game played in extreme wind (>15 mph). Veto: rating-based win probability invalid because disc flight physics alter scoring distribution. Prediction: actual home-field advantage or total scoring deviates from logistic model by >1 standard deviation.
2. Scenario: College top-100 team plays unranked team outside historical gamesM/gamesW scope. Veto: model extrapolates beyond top-100 support; rating difference may be nonlinear. Prediction: prediction error > 15% vs in-sample top-100 games.
3. Scenario: One-goal game between closely rated teams under USAU algorithm. Veto: win does not guarantee rating increase if heavy favorite wins by one; model treats win as positive but rating change negative. Prediction: favorite's rating decreases despite win, contradicting standard Elo assumptions.

Word count: Need >= 1000 words total across sections. THINK_TRACE >= 400 words.

Let me draft carefully, ensuring no betting lines (no spreads, moneylines, odds, totals). I must avoid words like "spread", "moneyline", "odds", "betting line", "total points" in betting context. I can mention "points scored" as game stats, not betting totals.

I need to include exact [PAGE N] markers and verbatim quotes.

Let's draft.

Structure:
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

No intro/outro outside these sections? The user says "across these exact XML sections". I'll just provide the sections.

Let me write THINK_TRACE first (~500 words).

THINK_TRACE content:
- Multi-hop derivation of rating dynamics from page 5.
- Start with r formula. Analyze boundary r=1 (one-goal). diff=125.
- Analyze r→0 (shutout). diff→600 per formula (though text claims doubling; I will note the textual claim vs formula evaluation as a gray-zone audit).
- Weighted average: recent games prioritized, extreme competition removed. Exact decay kernel unspecified → gray zone.
- calculate_game_score_adjusted example shows winner rating can decrease after win (1800→1125? Wait, example: winner initial 1800, GameScore 1125, Difference -675, Increased FALSE. Wait, FinalRating = pregame + diff. Difference column is sum of Initial (opponent rating) and GameScore? The text says: "this column is a sum of the Initial column (the opponent rating) and the GameScore column (the performance rating)." Wait, that seems weird. Let's look: calculate_game_score_adjusted(1800,1000,15,14). Winner: Initial 1800, GameScore 1125, Difference -675. If Difference = Initial + GameScore, that would be 1800 + 1125 = 2925, not -675. Wait, the text says: "From this, it calculates the final rating impact of a game in the Difference column; this column is a sum of the Initial column (the opponent rating) and the GameScore column (the performance rating)." Hmm, in the example output:
Team Initial GameScore Difference Increased
winner 1800 1125 -675 FALSE
loser 1000 1675 675 TRUE
This seems contradictory to "sum of Initial and GameScore". 1800+1125 ≠ -675. 1000+1675 ≠ 675. Maybe "Difference" is GameScore - Initial? 1125 - 1800 = -675. Yes! And 1675 - 1000 = 675. So Difference = GameScore - Initial rating of that team? But text says "sum of the Initial column (the opponent rating) and the GameScore column". That would be opponent rating + performance rating. For winner, opponent is loser with rating 1000. 1000 + 1125 = 2125, not -675. So the text description seems garbled or I'm misreading. Let's re-read verbatim: "From this, it calculates the final rating impact of a game in the Difference column; this column is a sum of the Initial column (the opponent rating) and the GameScore column (the performance rating)." Actually maybe for the winner, Initial is the opponent's rating? No, table shows Initial 1800 for winner. Hmm.
Wait, maybe the table columns are misaligned in my reading. Let's look: 
```
##
## Team Initial GameScore Difference Increased
## 1 winner
1800
1125
-675
FALSE
## 2
loser
1000
1675
675
TRUE
```
If Difference = GameScore - Initial: winner 1125 - 1800 = -675. Loser 1675 - 1000 = 675. That fits perfectly. So Difference is the change in that team's rating. The text description "sum of the Initial column (the opponent rating) and the GameScore column" might be wrong in the paper or refers to something else. But I must quote the text as-is. I can note the apparent inconsistency as a gray-zone audit. Actually, the formula earlier says FinalRating = pregame + diff, where diff is performance rating. But here GameScore for winner is 1125, which is not the diff from formula (diff would be around 125 for a 15-14 game? Let's check: W=15, L=14. r = 14/(15-1) = 14/14 = 1. diff = 125. So GameScore should be 125, not 1125. Wait, calculate_game_score(15,11) returns 381.1648. Let's check that formula: r = 11/(15-1) = 11/14 ≈ 0.7857. r^0.5 ≈ 0.886. 1 - 0.886 = 0.114. min(1, 0.114) = 0.114. * 0.4π ≈ 0.143. sin ≈ 0.143. / sin(0.4π≈0.951) ≈ 0.150. *475 ≈ 71.4. +125 = 196.4. But the paper says calculate_game_score(15,11) = 381.1648. That doesn't match my calculation. Something is off with my parsing of the formula.
Maybe r = losing score / winning score, then minus 1? No.
Maybe the formula is diff = 125 + 475 * sin(min(1, 1 - r) ^ 0.5 * 0.4π) / sin(0.4π)? Let's test r = 11/15 ≈ 0.733. 1-r = 0.267. ^0.5 = 0.517. min(1, 0.517)=0.517. *0.4π = 0.649. sin ≈ 0.604. /0.951 = 0.635. *475 = 301.6. +125 = 426.6. Not 381.
What if r = losing score / winning score - 1? r = 11/15 - 1 = -0.267. sqrt of negative? No.
Maybe the formula uses r = losing score / (winning score - 1) but the sin argument is different.
Given the output 381.1648 for (15,11), let's reverse engineer. (381.1648 - 125) / 475 = 0.5393. sin(x) = 0.5393 * sin(0.4π) ≈ 0.5393 * 0.9511 = 0.513. x = arcsin(0.513) ≈ 0.539 rad. x = min(1, something) * 0.4π. something = 0.539 / (0.4π) ≈ 0.429. If something = 1 - r^0.5, then r^0.5 = 0.571, r = 0.326. What gives r=0.326 for 15-11? 11/(15-1)=0.785. Not 0.326. 11/15=0.733. Not.
Maybe the formula is diff = 125 + 475 * sin(min(1, 1 - r) * 0.4π) / sin(0.4π) where r = losing/winning? r=11/15=0.733. 1-r=0.267. min=0.267. *0.4π=0.335. sin=0.329. /0.951=0.346. *475=164.4. +125=289. Not 381.
Maybe it's diff = 125 + 475 * (1 - r^0.5) ... no sin?
This is getting too deep into reverse engineering. The key is I should not invent equations. I will present the formula exactly as printed in the source, note the stated properties, and flag discrepancies between the printed example outputs and direct formula evaluation as a gray-zone audit without attempting to "fix" the math. I will not claim my own derived numeric outputs unless they are verbatim from the text.

I will quote verbatim from pages.

Let's plan citations:
[PAGE 1] for intro, 5,400 matches, 650 teams.
[PAGE 2] for tibble 403x11, columns, conference rating doubling claim.
[PAGE 3] for team results tibble 32x21, columns.
[PAGE 4] for historical data top-100 limitation.
[PAGE 5] for USAU algorithm, formulas, properties, calculate functions.
[PAGE 6] for calculate_game_score_adjusted_team example and calculate_win_probability example.
[PAGE 7] for AUDL home-field 1.21 points.
[PAGE 8] for player stats.
[PAGE 9] for team stats net rating.

Now write.

I must ensure total words >= 1000. Let's aim for roughly:
THINK_TRACE: 450-550 words
SOURCE_OPERATORS: 250-300 words
RETROCAUSAL: 150-200 words
RECURSIVE: 150-200 words
CROSS_LAYER: 150-200 words
RLVR: 150-200 words
Total ~1300+ words. Good.

Let's write carefully.

THINK_TRACE draft:

The fRisbee package implements the USA Ultimate (USAU) collegiate ranking algorithm, which determines postseason bids solely by algorithmic rating rather than selection committee [PAGE 4]. A multi-hop derivation begins with the per-game performance rating. Let W denote the winning score and L the losing score. The source defines the score-difference proportion as r = L / (W − 1) [PAGE 5]. The performance increment is then

diff = 125 + 475 · sin( min(1, 1 − r^0.5) · 0.4π ) / sin(0.4π),

and the final game rating is FinalRating = pregame + diff [PAGE 5]. Two anchor properties are stated explicitly: every one-goal game (W = L + 1) yields r = 1, collapsing the sine term to zero and fixing diff = 125; the maximum possible performance rating is 600, allegedly obtainable only when a team doubles its opponent's score [PAGE 5]. A gray-zone audit reveals tension between the printed formula and these verbal claims. Direct substitution of W = 2L into r = L / (2L − 1) does not produce diff = 600 for typical ultimate scores; the expression asymptotes toward a value well below 600 as L grows, while r → 0 (a shutout) drives the sine term toward its maximum. Thus either the printed formula omits a transformation, or the “doubling” property is an empirical approximation rather than an exact algebraic consequence. This discrepancy is material because fRisbee exposes calculate_game_score and calculate_game_score_adjusted to end users [PAGE 5].

The second hop is the season-long rating, described as a weighted average of game ratings that prioritizes recent games and down-weights extreme competition mismatches [PAGE 5]. The exact decay kernel, weight normalization, and handling of ignored games (Status factor with levels “Counts” and “Ignored” [PAGE 3]) are not specified in the paper, creating an underspecified recursion. The third hop is the pre-trained logistic regression for win probability, calculate_win_probability(rating_A, rating_B, league), which returned 0.7219515 for a 1500-rated versus 1300-rated women’s matchup [PAGE 6]. The model coefficients, feature scaling, and league-specific intercepts are unpublished in the source, so the probability surface is a black box conditional on package version.

A fourth hop concerns the zero-sum rating transfer illustrated by calculate_game_score_adjusted(1800, 1000, 15, 14): the heavy favorite’s rating decreases despite winning, while the underdog’s increases despite losing [PAGE 5]. This violates the monotonicity assumption of standard Elo and creates a strategic gray zone where winning a close game as a large favorite is penalized. The package’s team-level result tibble (32 × 21 for Virginia) exposes the raw Effect, GameScore, and RatingsImpact columns, allowing audit of whether post-game ratings align with the published formula [PAGE 3]. However, the historical data are restricted to top-100 matchups from 2021-22, so out-of-sample extrapolation to lower-rated teams is unverified [PAGE 4].

Word count check: roughly 380 words. Need >=400. I'll expand a bit more on the singularity at W=1 and the AUDL vs USAU rule divergence.

Add: "A mathematical singularity exists at W = 1, where the denominator W − 1 vanishes. In collegiate and AUDL play scores are typically an order of magnitude larger, so the singularity lies outside the empirical support; however, it renders the function undefined for any hypothetical or forfeited game ending 1-0 or 1-x, a breakdown regime the package documentation does not address [PAGE 5]."

Add: "The AUDL rule set introduces non-stationarity: larger fields, a shorter stall clock, and refereed rather than self-officiated play [PAGE 6]. Because fRisbee pools AUDL game-level data separately via load_audl_games but does not disclose whether the win-probability logistic model is re-fit for AUDL ratings or shares coefficients with the college model, cross-league inference is a gray zone."

Now THINK_TRACE should be >400 words.

SOURCE_OPERATORS_AND_EQUATIONS draft:
- Present LaTeX equations.
- Units: rating points (dimensionless index), score in goals (dimensionless count), probability in [0,1], points per game.
- Page citations.
- Breakdown regimes: W=1 singularity; logistic model coefficients unpublished; top-100 restriction; one-goal floor diff=125; max diff=600 claimed.

RETROCAUSAL_GENEALOGY draft:
- Lineage: Elo (chess, Arpad Elo), USAU Ultimate Rankings Algorithm (2018) [PAGE 4, 5], frisbee-rankings (Mills 2022) [PAGE 2], nflreadr (Ho & Carl 2022) [PAGE 4, 9].
- Multi-week traps: rating inertia from recency weighting; strength-of-schedule confounding (SoS column [PAGE 2]); conference stratification where top conferences average double the rating of bottom conferences [PAGE 2]; win-not-guaranteed property creating perverse weekly incentives; ignored games status creating data holes.

RECURSIVE_THEORY_OF_MIND draft:
- Crisis habit regression: coaches mid-tournament avoid trigonometric calculations [PAGE 5]; under pressure they revert to win/loss heuristics.
- Counter-trap: fRisbee automates calculation, but teams may game the rating by managing score differential (running up score to lower r? Actually lower r means bigger diff, so running up score helps until cap; but one-goal floor means close wins don't help much).
- Clock: postseason bids determined by retrospective ratings; weekly rating updates create a moving target; teams must maintain high level even against weak competition because a win doesn't guarantee rating increase [PAGE 5].

CROSS_LAYER_VETO_ADJUDICATION draft:
- Physical/biomechanical layer: disc flight affected by wind, humidity; stall clock (AUDL shorter) changes possession tempo; field size differences [PAGE 6]. These are not represented in rating or logistic model.
- Veto proof: The AUDL home-field advantage is only 1.21 points per game on average (21.57333 vs 20.36667) [PAGE 7], a small effect relative to environmental variance. Therefore, any rating-only prediction for an outdoor AUDL game must be vetoed when measured wind speed exceeds the historical envelope used to train the model, because wind alters disc stability and scoring distribution independently of team rating.
- Biomechanical: player fatigue over multi-game tournaments not in model.

RLVR_COUNTERFACTUAL_VETOES draft:
Three verifiable veto scenarios + predictions:
1. Extreme wind AUDL game. Veto condition: sustained wind > 20 km/h (or similar) not in training envelope. Prediction: actual scoring total deviates from rating-implied expectation by more than one standard deviation; home-field 1.21-point advantage is swamped.
2. College team outside top-100 historical scope. Veto condition: opponent not in gamesM/gamesW top-100 set [PAGE 4]. Prediction: out-of-sample win probability miscalibrated; Brier score degradation > 15% relative to top-100 in-sample.
3. Heavy favorite wins by one goal. Veto condition: pregame rating difference > 400 points and margin = 1 [PAGE 5 example]. Prediction: favorite’s rating decreases despite the win, contradicting monotonic Elo assumptions; users expecting rating gains will observe Negative Increased flag.

Make sure not to use betting terms. "Win probability" is fine (from paper). "Odds" - avoid. "Spread" - avoid. "Total" - avoid in betting context; I can say "scoring total" meaning points scored, not betting total. To be safe, I'll avoid "total" as a noun for game score sum. I'll say "combined points" or "scoring output".

Now I'll assemble the final output with exact XML tags. Ensure word count >= 1000. Let's write.

I need to be careful: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." I won't invent any. I'll only use equations from the paper.

I need to include [PAGE N] markers and verbatim quotes. I'll include several quotes.

Let's write the final response.
</NATIVE_REASONING>

<THINK_TRACE>
The fRisbee package operationalizes the USA Ultimate (USAU) collegiate ranking algorithm, which determines postseason bids solely by algorithmic rating rather than a selection committee [PAGE 4]. A multi-hop derivation begins with the per-game performance rating. Let W denote the winning score and L the losing score. The source defines the score-difference proportion as r = L / (W − 1) [PAGE 5]. The performance increment is then

diff = 125 + 475 · sin( min(1, 1 − r^0.5) · 0.4π ) / sin(0.4π),

and the final game rating is FinalRating = pregame + diff [PAGE 5]. Two anchor properties are stated explicitly: every one-goal game (W = L + 1) yields r = 1, collapsing the sine term to zero and fixing diff = 125; the maximum possible performance rating is 600, allegedly obtainable only when a team doubles its opponent's score [PAGE 5].

A gray-zone audit reveals tension between the printed formula and these verbal claims. Direct substitution of W = 2L into r = L / (2L − 1) does not produce diff = 600 for typical ultimate scores; as L grows, r approaches 0.5 and the sine term remains bounded well below its ceiling, while r → 0 (a shutout) drives the argument toward its maximum. Thus either the printed formula omits a transformation, or the “doubling” property is an empirical approximation rather than an exact algebraic consequence. This discrepancy is material because fRisbee exposes calculate_game_score and calculate_game_score_adjusted to end users [PAGE 5].

The second hop is the season-long rating, described as a weighted average of game ratings that prioritizes recent games and down-weights extreme competition mismatches [PAGE 5]. The exact decay kernel, weight normalization, and handling of ignored games (Status factor with levels “Counts” and “Ignored” [PAGE 3]) are not specified in the paper, creating an underspecified recursion. The third hop is the pre-trained logistic regression for win probability, calculate_win_probability(rating_A, rating_B, league), which returned 0.7219515 for a 1500-rated versus 1300-rated women’s matchup [PAGE 6]. The model coefficients, feature scaling, and league-specific intercepts are unpublished in the source, so the probability surface is a black box conditional on package version.

A fourth hop concerns the zero-sum rating transfer illustrated by calculate_game_score_adjusted(1800, 1000, 15, 14): the heavy favorite’s rating decreases despite winning, while the underdog’s increases despite losing [PAGE 5]. This violates the monotonicity assumption of standard Elo and creates a strategic gray zone where winning a close game as a large favorite is penalized. The package’s team-level result tibble (32 × 21 for Virginia) exposes the raw Effect, GameScore, and RatingsImpact columns, allowing audit of whether post-game ratings align with the published formula [PAGE 3]. However, the historical data are restricted to top-100 matchups from 2021-22, so out-of-sample extrapolation to lower-rated teams is unverified [PAGE 4].

A mathematical singularity exists at W = 1, where the denominator W − 1 vanishes. In collegiate and AUDL play scores are typically an order of magnitude larger, so the singularity lies outside the empirical support; however, it renders the function undefined for any hypothetical or forfeited game ending 1-0 or 1-x, a breakdown regime the package documentation does not address [PAGE 5]. The AUDL rule set introduces non-stationarity: larger fields, a shorter stall clock, and refereed rather than self-officiated play [PAGE 6]. Because fRisbee pools AUDL game-level data separately via load_audl_games but does not disclose whether the win-probability logistic model is re-fit for AUDL ratings or shares coefficients with the college model, cross-league inference is a gray zone. These layers must be audited before any rating-derived projection is treated as stable across rule sets or weather conditions.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators extracted from fRisbee documentation:

1. Score-difference proportion [PAGE 5]:
   r = L / (W − 1)
   Domain: integer scores with W > L ≥ 0, so r ∈ [0, 1]; singularity at W = 1 (division by zero). Units: dimensionless ratio of goals.

2. Performance rating increment [PAGE 5]:
   diff = 125 + 475 · sin( min(1, 1 − r^{0.5}) · 0.4π ) / sin(0.4π)
   Range: [125, 600] rating points per stated properties; one-goal games fix diff = 125. Units: USAU rating points.

3. Final game rating [PAGE 5]:
   FinalRating = pregame + diff
   Units: rating points (dimensionless index).

4. Weighted season rating [PAGE 5]:
   SeasonRating = Σ_t w_t · GameRating_t / Σ_t w_t, with w_t emphasizing recent games and attenuating extreme competition mismatches. Exact w_t functional form unpublished (gray zone).

5. Win probability [PAGE 6]:
   P(win | R_A, R_B, league) = LogisticRegression(R_A, R_B, league)
   Output unit: probability in [0,1]. Example: P(1500 vs 1300, womens) = 0.7219515. Coefficients and link-function calibration are proprietary to the package and not printed.

6. AUDL home-field scoring differential [PAGE 7]:
   Δ_home_away = mean(homeScore) − mean(awayScore) = 21.57333 − 20.36667 ≈ 1.21 points per game. Units: goals per game.

7. AUDL net rating [PAGE 8]:
   netRating = scoresFor − scoresAgainst. Units: goal differential per season.

Page-cited data structures:
- load_rankings_men(): tibble [403 × 11], columns Rank, RegionRank, Team, Record, WinPct, Rating, Region, Conference, Division, SoS, PDC [PAGE 2]. Claim: “most competitive conferences can have average team ratings that double those of the least competitive conferences” [PAGE 2].
- load_team_results_men(“Virginia”): tibble [32 × 21], columns OppRk, Opponent, Result, Effect, Status, PctOfRanking, Date, Event, Win, Pts, OppPts, GameScore, PtDiff, OpponentRating, TeamRatingPostgame, GameValue, TeamRatingPregame, GameValueUsed, RatingsImpact, Team, GameNum [PAGE 3–4].
- Historical gamesM / gamesW: limited to games between top-100 teams during 2021-22 [PAGE 4].

Breakdown regimes:
- r undefined at W = 1 [PAGE 5].
- Logistic model coefficients undisclosed; extrapolation beyond 2021-22 top-100 support unverified [PAGE 4–6].
- One-goal floor at diff = 125 compresses rating movement in close contests regardless of rating disparity [PAGE 5].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage of fRisbee traces through three distinct methodological strata. First is the Elo-family rating tradition originating in chess (Arpad Elo), adapted here into the USAU Ultimate Rankings Algorithm (2018), which the paper notes is unique among collegiate sports for determining postseason bids by algorithm alone, without a selection committee analogous to the College Football Playoff or March Madness [PAGE 4]. Second is the domestic data infrastructure layer: frisbee-rankings, developed by Cody Mills (2022), which powers load_rankings_men() and load_rankings_women() [PAGE 2], and USA Ultimate’s event results, which feed load_team_results_* [PAGE 3]. Third is the open-source sports-data package lineage, explicitly benchmarked against nflreadr (Ho and Carl 2022) for future expansion to all games rather than only top-100 matchups [PAGE 4, 9].

Multi-week traps embedded in this genealogy include: (a) rating inertia from recency-weighted season averages, which delays incorporation of early-season roster changes; (b) strength-of-schedule confounding, visible in the SoS column where team ratings are entangled with opponent quality [PAGE 2]; (c) conference stratification, where average ratings differ by a factor of two between the most and least competitive conferences [PAGE 2], creating a selection bias for wild-card bids; (d) the “Ignored” Status flag in team results, which excises certain games from the rating recursion without published criteria [PAGE 3]; and (e) the perverse incentive that a win does not guarantee a rating increase and a loss does not guarantee a decrease, differentiating the USAU formula from standard Elo and producing week-to-week non-monotonicity [PAGE 5]. Any model that assumes rating monotonicity will fail retroactively when applied to the 2021-22 collegiate season or the 2022 AUDL season captured by the package.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of coaches and analysts under temporal pressure to abandon formal computation and revert to win/loss heuristics. The paper explicitly notes that the USAU formula’s complexity “makes it difficult to use on the fly; the last thing a coach wants to be doing mid-tournament is computing trigonometric functions on the sideline” [PAGE 5]. Under this regression, a coach faced with a close-game decision may rely on the crude rule that winning always improves standing, ignoring the counter-example where an 1800-rated favorite winning 15-14 against a 1000-rated opponent experiences a rating decrease of −675 while the loser gains +675 [PAGE 5].

The counter-trap is automation dependency: fRisbee’s calculate_ family removes the sideline computation burden but introduces algorithmic opacity. Teams may optimize for rating-points extraction rather than match-winning behavior, manipulating score differential to shift r and exploit the sine-shaped diff curve, or avoiding close games against vastly inferior opponents to prevent rating loss. Because the win-probability logistic model conditions only on ratings and league type [PAGE 6], it cannot internalize this strategic adaptation, causing the model’s own predictions to become a counter-trap when teams behave strategically against the rating surface.

The clock layer operates at two frequencies. Within a season, recent-game weighting creates a moving target: a team’s rating at selection time reflects its trailing form more than its full body of work [PAGE 5]. Across the postseason, the algorithm’s retrospective rating determines future bid allocation, so the clock of selection is permanently lagged relative to the clock of play. A team peaking late may be underrated relative to its championship window, while a team fading late may retain an inflated rating from early-season results.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical and biomechanical layers absent from the fRisbee rating model include disc flight physics under wind and humidity, the AUDL’s shorter stall clock relative to USA Ultimate, larger field dimensions, and the shift from self-officiated to refereed play [PAGE 6]. Because these variables alter scoring tempo and disc-turnover rates independently of team rating, any projection conditioned solely on Rating, SoS, or win probability must be subjected to cross-layer veto.

Veto proof by effect-size bounding: The 2022 AUDL home-field advantage is approximately 1.21 points per game on average, with mean home score 21.57333 and mean away score 20.36667 [PAGE 7]. This effect is small relative to the total scoring output per game (~21 points per side) and is almost certainly smaller than the scoring variance introduced by extreme wind or by refereeing inconsistency. Therefore, for any outdoor AUDL contest where observed wind speed exceeds the historical envelope represented in the training data, the rating-only win probability must be vetoed: the physical layer (disc aerodynamics) dominates the statistical layer (rating differential), and no term in the logistic model accounts for atmospheric state.

Biomechanical fatigue across multi-game tournament weekends is likewise absent from the package’s game-level dataframes [PAGE 3]. A team playing its third game in eight hours cannot be distinguished in the rating model from a rested team of identical pregame rating, creating a veto condition whenever rest differentials exceed one full game within a 24-hour window.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Extreme-wind AUDL contest. Veto condition: sustained surface wind exceeds the 95th percentile of conditions in the 2022 AUDL game sample, making disc flight non-stationary relative to the load_audl_games training envelope [PAGE 6–7]. Prediction: actual combined scoring output deviates from the rating-implied expectation by more than one standard deviation, and the 1.21-point average home-field edge is statistically swamped by wind-driven scoring variance.

Scenario 2 — Collegiate matchup outside the top-100 historical support. Veto condition: either team is absent from gamesM or gamesW, which cover only games between top-100 teams during 2021-22 [PAGE 4]. Prediction: out-of-sample win probability is miscalibrated; Brier score or log-loss degrades by more than 15 percent relative to in-sample top-100 contests because the logistic surface has no empirical anchor for low-rated opponents.

Scenario 3 — Heavy favorite wins by exactly one goal. Veto condition: pregame rating difference exceeds 400 points and margin of victory is one goal, replicating the calculate_game_score_adjusted(1800, 1000, 15, 14) structure [PAGE 5]. Prediction: the favorite’s Rating decreases despite the win (Increased = FALSE), while the underdog’s Rating increases (Increased = TRUE), directly contradicting standard Elo monotonicity and invalidating any model that assumes rating gains are strictly positive after victory.
</RLVR_COUNTERFACTUAL_VETOES>