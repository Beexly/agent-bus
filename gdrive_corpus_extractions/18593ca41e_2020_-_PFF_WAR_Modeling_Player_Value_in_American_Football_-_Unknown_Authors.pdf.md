---
source: "2020 - PFF WAR Modeling Player Value in American Football - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2020"
pages: 14
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4112
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about PFF WAR (Wins Above Replacement) in American Football. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user provided a source document about football analytics. But the sections they require (RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION, RLVR_COUNTERFACTUAL_VETOES) seem like they come from a different framework (possibly AI safety or something). However, I must include these exact XML sections with the specified content themes applied to this football paper context, while maintaining the >=1000 word depth total and >=400 words in THINK_TRACE.

I need to:
- Not mention betting lines (spreads, totals, moneylines, odds). The paper mentions "expected value" in draft trades but not betting lines per se. I should avoid odds language.
- No toy equations. Use real LaTeX from the paper: M r = f, WAR = player wins - replacement player wins, etc.
- Cite [PAGE N] markers and verbatim quotes where appropriate.
- Total words >= 1000 across sections.
- THINK_TRACE >= 400 words.

Let me structure this carefully.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. I need to derive how PFF WAR works from Massey matrix, normalization, random forest scaling, WAA computation, replacement level baseline (8 wins average, 3 wins replacement, 171 total WAR), snap apportionment, stability metrics, draft position analysis. Audit gray zones: normalization by season/position, random forest variable importance, replacement level assumptions, special teams exclusion, snapped-weighted apportionment, MVP table discrepancies (Table 3 has typos like 2009 Peyton Manning GB - should be IND; 2010 Tom Brady IND - should be NE; 2015 Cam Newton CAR etc.), year-to-year correlation issues for defensive backs.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations from the paper. Massey matrix M (n x n), diagonal = games played, off-diagonal = -games between i,j. Mr=f. f built from normalized PFF grades scaled by random forest variable importance relative to adjusted team wins. Adjusted records: full win/loss if score differential >=9, half otherwise. Equation (2) decomposition. WAA computed by replacing player grades with 0. Replacement: 8 wins avg team, 3 wins replacement, 171 total WAR. Apportioned per-snap by facet weights. Tables with correlations. Cite pages 1-5 especially.

RETROCAUSAL_GENEALOGY: Historical lineage from Massey 1997 thesis [15], Massey & Thaler 2013 [16] loser's curse, Jimmy Johnson draft chart, Yurko et al. nflWAR [25], Pro Football Reference AV [20], ESPN QBR [10], basketball win shares [2], baseball WAR [1]. Multi-week traps: rookie contract WAR falloff with draft position, trading up negative EV except QB, stability vs actual wins.

RECURSIVE_THEORY_OF_MIND: This is tricky. I need to interpret "crisis habit regression vs counter-trap vs clock" in the context of NFL teams/front offices. Crisis habit regression: teams regressing to mean after over/underperformance (e.g., 2006 Bears, 2007 Packers failing to win 8 games next year; 2006 Lions/2017 Browns winning 7 next year). Counter-trap: draft trade where both sides win (Jets-Colts 2018) due to differential utility (QB need vs volume). Clock: rookie contract window, four-year WAR accumulation, draft position monotonic decline.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. This section should discuss physical constraints that veto the model's assumptions: snap counts don't capture snap intensity, biomechanical load differences (edge rusher vs interior), weather effects on passing grades not modeled, special teams excluded (assumed replacement-level), surface/turf not included, injury replacement not modeled, PFF grade normalization across eras as grading system evolved. The model assumes replacement team wins 3 games regardless of injuries/weather—vetoed by physical reality of attrition.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? I need to create 3 counterfactual scenarios where the PFF WAR model would fail/be vetoed, with verifiable predictions.
1. Scenario: Quarterback injury replacement mid-season. Model assumes fixed snap count and average player substitution for WAA, but actual backup QB has different grade distribution. Prediction: WAA for injured starter overestimated by >0.5 WAR; team actual wins deviate from WAR-implied wins by >1 game.
2. Scenario: Extreme weather game (wind/snow) suppressing passing grades. Model normalizes grades by season but not by game weather. Prediction: Passing facet grades in games with wind >15mph are systematically deflated by ≥0.3 points, causing offensive WAR misallocation correlated with weather, not skill.
3. Scenario: Special teams touchdown or defensive touchdown noise. Massey model counts special teams TDs on offensive side. Prediction: Teams with ≥2 special teams/defensive TDs in a season show offensive Massey rating inflated by ≥0.15 ratings units relative to play-grade-adjusted expectation, violating the paper's own correction claim.

Need to ensure no betting lines. "Expected value" is fine if not betting. Avoid "odds", "spread", "moneyline", "total".

Word count: Need >=1000 words total. THINK_TRACE alone >=400. I'll aim for roughly:
- THINK_TRACE: ~500 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~300 words
- RETROCAUSAL_GENEALOGY: ~250 words
- RECURSIVE_THEORY_OF_MIND: ~250 words
- CROSS_LAYER_VETO_ADJUDICATION: ~200 words
- RLVR_COUNTERFACTUAL_VETOES: ~200 words
Total ~1700 words. Good.

Need to include verbatim quotes with [PAGE N]. Let me find good quotes.

Page 1: "A quarterback with a 67 PFF grade as a passer is not worth the same to his team as a running back with a 67 grade as a rusher. Furthermore, a left tackle with a 67 grade in 100 snaps is not worth the same to his team as a left tackle with the exact same grade in 1000 snaps."
Page 1: Equation (2): WAR = player wins - replacement player wins = player wins - average player wins + average player wins - replacement player wins.
Page 2: Table 1 correlations. Page 3: PFF grades between -2 and 2, increments of 0.5.
Page 4: WAA computation twice, replace grades with 0. Page 4: replacement team 3 wins, average 8 wins, 171 total WAR.
Page 5: Table 2 stats. QB WAR 1.63 mean, 0.62 year-to-year. CB 0.29 correlation.
Page 6: league-wide WAR correlation 0.74 with 250 snap threshold.
Page 7: Approximate Value 0.64 since 1960, 0.65 PFF era.
Page 8: wins implied by PFF WAR r=0.50 stability vs actual wins 0.36. Pythagorean r=0.43 vs r=0.42.
Page 9: Jets-Colts trade details.
Page 10: Seahawks most WAR above expectation, Browns least.
Page 11: Table 2 (actually top 5 players). Page 12: Table 3 MVPs with typos. Page 12: Table 4 highest WAR by position.

Let's draft carefully.

Important: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should quote text and cite page numbers.

Now write the response with exact XML tags. No markdown outside? The user wants XML sections. I'll put content inside the tags. I can use LaTeX inside.

Check for betting lines: The paper mentions "negative-expected-value move" regarding trading up. I can mention expected value in draft context but not betting odds. Avoid "spread", "total", "moneyline", "odds". I will not use those words.

Check for toy equations: I will only use equations from the paper or standard definitions clearly attributed. No invented ratios like Force/Fatigue.

Let's compose.

THINK_TRACE section: Derive the math. Start from Massey matrix M. M is n x n. Diagonal M_ii = total games played by team i. Off-diagonal M_ij = -1 * games between i and j. Columns sum to zero, symmetric. Mr = f. f originally net points. Then they replace f with PFF grade-based vector. Normalize grades by season fixed effect and position random effect. Average player at position earns zero cumulative grade per facet. Random forest scales facet grades by variable importance relative to adjusted team wins. Adjusted record: full win/loss if score differential >= 9, half otherwise. Top 3 facets: passing, WR receiving, DB coverage. Offensive penalty > defensive penalty. Then WAA: compute team Massey rating with player grades and with 0-grade player same snaps. Difference in implied wins via linear regression. WAR = WAA + replacement baseline. Baseline: average team 8 wins, replacement 3 wins, 171 total WAR per season. Apportioned per snap by facet weights. Stability: league-wide 0.74 with 250 snap threshold; QB 0.62; CB/S ~0.29-0.30. Team wins implied r=0.50 vs actual 0.36.

Gray-zone audit: The paper asserts 171 wins above replacement allocated only to offense/defense, special teams = replacement. This is an assumption, not derived. Replacement level fixed at 3 wins regardless of era or injury attrition. Normalization by season fixed effect assumes grading evolution is purely additive/seasonal, not interacting with rule changes. Random forest importance is correlational, not causal; variable importance can be biased by facet prevalence. MVP table has data entry errors (2009 Manning listed as GB, 2010 Brady as IND) suggesting manual curation risk. Defensive back instability (0.29-0.30) means single-season WAR for CB/S is noisy. The 250-snap threshold excludes situational players and special teamers, biasing position means.

SOURCE_OPERATORS_AND_EQUATIONS: List LaTeX.

Equation Massey: M r = f, M_{ii} = g_i, M_{ij} = -g_{ij}. \sum_j M_{ij} = 0. r_i = team strength. f from net points originally; then PFF grade vector. Normalization: g_{p,f,s} normalized by season s and position random effect. \bar{g}_{pos,facet}=0 over season. Adjusted win: w_{adj} = 1 if |diff|>=9 else 0.5. Equation (2): WAR = WAA + (avg - replacement). WAA = Wins(team with player) - Wins(team with average player same snaps). Baseline: W_{avg}=8, W_{rep}=3, \sum WAR = 171. Per-snap apportionment: WAR_i = WAA_i + \sum_{facet} (weight_facet * snaps_{i,facet}) * (171 / total snaps?) Actually paper: "sum of all his per-snap apportionment of the 171 total WAR multiplied by his number of snaps in each facet." So WAR_i = WAA_i + \sum_f (c_f * snaps_{i,f}) where c_f are per-snap weights summing such that total allocation = 171. Correlations: Corr(WAR_n, WAR_{n+1}) = 0.74 league-wide (250 snap threshold in first season). QB 0.62. WR 0.52. CB 0.29, S 0.30. Team implied wins stability r=0.50; actual wins 0.36; Pythagorean 0.42 predictive.

RETROCAUSAL_GENEALOGY: Massey 1997 thesis [15], Massey & Thaler 2013 [16] loser's curse, Jimmy Johnson chart, Yurko nflWAR [25], PFR AV [20], ESPN QBR [10], basketball win shares [2], baseball WAR [1]. Multi-week traps: rookie contract WAR monotonic falloff with draft position; trading up negative EV except QB; Jets-Colts 2018 differential utility.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression: 2006 Bears 8.3 implied vs 15 actual, next year <8 wins; 2007 Packers 8.8 vs 14, next year <8; 2006 Lions 8.2 vs 3, next year 7 wins; 2017 Browns 6.0 vs 0, next year 7 wins. Front office overreacts to outliers. Counter-trap: draft trade where both win due to positional utility mismatch (QB need vs volume). Clock: 4-year rookie contract window; WAR accumulates early; QB exception to Massey-Thaler.

CROSS_LAYER_VETO_ADJUDICATION: Physical vetoes: special teams assumed replacement (vetoed by special teams TDs counted offensively per page 3). Biomechanical: edge vs interior pressure value differs (page 5), but model uses per-snap facet weights not snap intensity. Weather: passing grades not weather-adjusted; season normalization ignores game-level wind/snap. Injury: replacement player same snaps with 0 grade assumes linear injury replacement, but backup grade distribution differs. Surface/turf not in model. 171 WAR fixed regardless of schedule strength or playoff expansion.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.
1. QB season-ending injury after Week 6. Model computes WAA by replacing starter with 0-grade average for all snaps, but actual backup plays. Verifiable prediction: For teams losing starting QB to IR, actual wins minus WAR-implied wins < -0.8 in the injury season (p<0.05), and starter's WAR is inflated by 0.4-0.8 relative to true marginal value.
2. High-wind passing games (wind >= 15 mph). PFF grades normalized by season only. Verifiable prediction: Passing facet grades in high-wind games are shifted downward by >= 0.25 points relative to low-wind games for identical completion probability, causing offensive WAR misallocation correlated with weather (r(weather, passing grade residual) <= -0.20).
3. Special teams/defensive touchdown seasons. Page 3 notes special teams TDs counted on offensive side. Verifiable prediction: Teams with >= 3 non-offensive touchdowns in a season show offensive Massey rating bias >= +0.12 ratings units relative to grade-only prediction, violating the claim that PFF grades remove this noise (paired t-test, p<0.01).

Need to ensure word count. I'll write generously.

Let's write the final output.
</NATIVE_REASONING>

<THINK_TRACE>
The PFF WAR model is derived through a multi-hop chain that begins with the original Massey rating system and terminates in a position-specific, snap-weighted wins-above-replacement allocation. First, the Massey matrix M is an n×n symmetric Laplacian-like construct where M_ii equals total games played by team i and M_ij equals −1 times games between team i and team j; every column sums to zero, and the rating vector r solves Mr = f [PAGE 2]. In the original formulation, f is the vector of net points. PFF replaces this with a play-grade-derived strength vector. PFF grades range from −2 to +2 in 0.5 increments across facets such as passing, receiving, coverage, run blocking, and pass rushing [PAGE 3]. Grades are normalized by season fixed effect and season-long position random effect so that the average player at a position earns zero cumulative grade per facet over a season [PAGE 3]. A random forest then scales facet grades by variable importance relative to adjusted team wins, where an adjusted record awards a full win or loss for score differentials ≥ 9 points and half a win/loss otherwise [PAGE 3]. The three most important facets are passing, wide-receiver receiving, and defensive-back coverage; offensive penalty grade exceeds defensive penalty grade, consistent with offense being more important than defense [PAGE 3].

The player-valuation step decomposes WAR via Equation (2): WAR = player wins − replacement player wins = player wins − average player wins + average player wins − replacement player wins [PAGE 4]. WAA is computed by calculating PFF Massey ratings for a team twice: once with the player’s actual grades and once with those grades replaced by a 0-grade average player with identical snap counts in each facet; the difference in implied wins from a linear regression is WAA [PAGE 4]. The replacement baseline assumes an average team wins 8 games and a replacement-level team wins 3 games, leaving 171 total WAR to allocate per season including playoffs [PAGE 4]. All 171 wins are assigned to offense or defense only; special teams players are treated as replacement-level. Each player’s WAR is his WAA plus his per-snap apportionment of the 171 total WAR multiplied by his snaps in each facet [PAGE 4]. Because 8 > 3, WAR always exceeds WAA, with the gap increasing for players with more snaps and more important roles [PAGE 4].

Gray-zone audit reveals several structural vulnerabilities. The 171-WAR total and the 8-vs-3 win assumption are imposed, not derived from the data, creating a fixed-point vulnerability if era-specific replacement levels shift [PAGE 4]. Normalization by season fixed effect assumes grading evolution is additive across seasons and does not interact with rule changes or emphases; this is untested within the paper [PAGE 3]. Random forest variable importance is correlational, not causal, and can be biased by facet prevalence and grade distribution skew [PAGE 3]. The 250-snap threshold used for stability reporting excludes situational and special-teams players, biasing position means toward starters [PAGE 5]. Defensive back instability is extreme: cornerback year-to-year WAR correlation is 0.29 and safety is 0.30, meaning single-season WAR for these positions is mostly noise [PAGE 5]. The MVP table contains curation errors (e.g., 2009 Peyton Manning listed with GB, 2010 Tom Brady listed with IND), indicating manual entry risk in downstream datasets [PAGE 12]. Finally, league-wide WAR stability of 0.74 requires a 250-snap threshold in the first season of a year-to-year comparison, a condition that truncates the sample and inflates reliability estimates relative to all-player analysis [PAGE 6].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Massey matrix definition [PAGE 2]: M is n×n, symmetric, with M_ii = g_i (games played by team i) and M_ij = −g_ij for i ≠ j (games between teams i and j). Columns sum to zero: ∑_j M_ij = 0.

Original Massey rating equation [PAGE 2]:
\[
M r = f
\]
where r is the n-dimensional team-strength vector and f is net points. Offensive and defensive ratings are extracted via positive and negative parts of f.

PFF-adjusted f construction [PAGE 3]: PFF grade g ∈ [−2, 2] in increments of 0.5 across facets F = {passing, rushing, receiving, run blocking, pass blocking, screen blocking, run defense, pass rushing, coverage, special teams, penalties}. Normalize by season s and position p (random effect): after normalization, average player at position p earns zero cumulative grade per facet over season s.

Adjusted win operator [PAGE 3]:
\[
w_{adj} = \begin{cases}
1 \text{ or } 0 & \text{if } |\Delta \text{score}| \ge 9 \\
0.5 \text{ and } 0.5 & \text{otherwise}
\end{cases}
\]
Random forest scales facet grades by variable importance relative to adjusted team wins including playoffs.

WAR decomposition [PAGE 4, Equation (2)]:
\[
\text{WAR} = W_{\text{player}} - W_{\text{replacement}} = W_{\text{player}} - W_{\text{average}} + W_{\text{average}} - W_{\text{replacement}}
\]
The first two terms define WAA; the last two are league-wide constants given fixed snap counts.

WAA computation [PAGE 4]:
\[
\text{WAA}_i = \text{Wins}(\text{team with player } i) - \text{Wins}(\text{team with average player, same snaps per facet})
\]
Implied wins come from a linear regression on PFF Massey ratings.

Replacement baseline [PAGE 4]: W_avg = 8 wins, W_rep = 3 wins, total allocatable WAR = 171 per season (including playoffs). Special teams = replacement-level.

Player WAR allocation [PAGE 4]:
\[
\text{WAR}_i = \text{WAA}_i + \sum_{f \in F} \left( w_f \times \text{snaps}_{i,f} \right)
\]
where w_f are per-snap facet weights calibrated so total allocation equals 171.

Empirical stability metrics [PAGE 5, Table 2; PAGE 6]: league-wide year-to-year WAR correlation = 0.74 with 250-snap threshold in season n. QB: mean WAR 1.63, CV 0.70, correlation 0.62. WR: 0.28, 0.84, 0.52. CB: 0.23, 0.91, 0.29. S: 0.23, 0.77, 0.30. DI: 0.06, 1.34, 0.68. ED: 0.06, 1.54, 0.61.

Team-level validation [PAGE 8]: wins implied by PFF WAR stability r = 0.50; actual wins r = 0.36; total team AV r = 0.42. Predictive R for next-season total wins: WAR-implied > raw wins; roster-adjusted WAR > Pythagorean (r = 0.43 vs r = 0.42).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage traces to Massey’s 1997 Bluefield College honors thesis on statistical models for rating sports teams [PAGE 13, ref 15], extended by Massey and Thaler’s 2013 Management Science work on the “Loser’s Curse” and market inefficiency in the NFL draft [PAGE 13, ref 16]. The Jimmy Johnson draft chart, based on monetary pick cost, is explicitly challenged [PAGE 1]. Predecessor player-value frameworks include baseball WAR [PAGE 13, refs 1, 23], basketball win shares [PAGE 13, ref 2], hockey WAR [PAGE 13, refs 6, 13, 24], Yurko et al.’s nflWAR using public play-by-play [PAGE 1, ref 25], punting WAR [PAGE 1, ref 4], ESPN’s college-football +/- approach [PAGE 1, ref 9], and Pro Football Reference’s Approximate Value [PAGE 1, ref 20]. The paper positions PFF grades as the missing data layer for offensive-line and special-teams positions previously invisible to public models.

A multi-week trap is embedded in the draft-position analysis: player WAR over a rookie contract falls off monotonically with draft position [PAGE 1], and trading up is negative expected value except when the acquiring team targets a quarterback [PAGE 1, PAGE 10]. The 2018 Jets–Colts trade illustrates differential utility: the Colts won >75% of simulations absent a quarterback assumption, while the Jets won >65% when assuming a quarterback selection [PAGE 9]. This reopens Massey–Thaler’s conclusion as position-contingent rather than universal. Another temporal trap is the stability asymmetry: offensive skill positions are more valuable on average but less stable year-to-year than trench players, meaning front offices that overpay for volatile wide receivers or cornerbacks repeat a regressive error cycle [PAGE 2, PAGE 5].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression appears in the implied-team-wins application: teams that massively overperform their WAR-implied wins subsequently collapse, while underperforming teams rebound. The 2006 Chicago Bears (8.3 implied vs. 15 actual) and 2007 Green Bay Packers (8.8 vs. 14) both failed to win eight games the following season; the 2006 Detroit Lions (8.2 vs. 3) and 2017 Cleveland Browns (6.0 vs. 0) both won seven games the next year [PAGE 7]. This is a mean-reversion habit: organizations overcredit coaching after lucky seasons and undercredit it after unlucky ones, misdiagnosing player quality as schematic durability.

The counter-trap is the differential utility of draft capital. A team with a franchise quarterback (Colts with Andrew Luck) should trade down for volume; a team lacking one (Jets) should trade up for a quarterback even at a premium, because both sides can “win” the same trade [PAGE 9]. Front offices that apply a single Jimmy Johnson chart to all positions fall into the trap of treating draft picks as fungible currency rather than position-specific options.

The clock is the rookie-contract window: WAR accumulation is measured over the first four years, and expected WAR declines monotonically with draft position [PAGE 9, PAGE 10]. Teams drafting after 2015 are excluded from full four-year analysis because rookie contracts are incomplete [PAGE 9]. The temporal boundary condition is that WAR value is front-loaded; late-round positional value only materializes if the player survives the initial roster cutdown and earns snaps, which the model does not explicitly model as a survival probability.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto 1—special teams exclusion: the model assumes all 171 WAR resides on offense or defense and that special teams players are replacement-level [PAGE 4]. Yet page 3 explicitly notes that special teams touchdowns are counted on the offensive side of the Massey ledger even when driven by defense [PAGE 3]. This is a physical-layer contradiction: special teams are not replacement-level in touchdown production, and the model’s own Massey correction admits the noise source it claims to remove.

Biomechanical veto 2—snap count vs. snap intensity: WAR apportionment scales linearly with snaps per facet [PAGE 4]. It does not weight snaps by intensity, pressure rate, route complexity, or blocking duration. Edge and interior defensive linemen have similar mean WAR but different variation because edge pressure is more valuable than interior pressure [PAGE 5]. A per-snap linear weight cannot capture the nonlinear marginal value of a game-sack versus a routine snap, so high-leverage snaps are systematically underpriced relative to volume snaps.

Weather veto 3—grade normalization ignores game-state environmental confounds: grades are normalized by season fixed effect, not by game-level weather, wind, temperature, or precipitation [PAGE 3]. Passing grades in high-wind games are physically degraded independent of quarterback skill, yet the model treats them as comparable to dome or calm-weather grades. Because passing is the top-ranked facet by variable importance [PAGE 3], this introduces a systematic environmental bias into offensive WAR that season-level normalization cannot remove.

Injury replacement veto 4—zero-grade substitute assumption: WAA is computed by replacing a player with a 0-grade average player at identical snaps [PAGE 4]. Real replacement players are not average; backups have skewed grade distributions and reduced snap efficiency. During quarterback injuries, the model overestimates starter marginal value because it compares against a fictional average backup rather than the actual backup’s grade trajectory.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Season-ending quarterback injury after Week 6. The model computes the starter’s WAA by replacing all his snaps with a 0-grade average player [PAGE 4], but the team actually plays a backup with a non-zero, typically negative grade distribution. Verifiable prediction: In seasons where a starting QB is placed on IR after Week 6, the starter’s PFF WAR will overstate his true marginal value by 0.4–0.8 wins, and the team’s actual wins will fall below WAR-implied wins by at least 0.8 games (paired difference, p < 0.05).

Scenario 2: High-wind passing games (surface wind ≥ 15 mph). PFF grades are normalized by season only, with no game-level weather covariate [PAGE 3]. Passing is the most important facet [PAGE 3]. Verifiable prediction: Conditional on identical completion probability and air yards, passing facet grades in high-wind games will be depressed by ≥ 0.25 points relative to low-wind games, generating a statistically significant negative correlation between wind speed and passing-grade residuals (r ≤ −0.20, p < 0.01) that the model misattributes to quarterback performance.

Scenario 3: Special-teams and defensive touchdown noise. The Massey framework counts special teams touchdowns on the offensive side, which the paper acknowledges distorts offensive ratings [PAGE 3], yet it claims PFF grades fix this noise [PAGE 3]. Verifiable prediction: Teams with ≥ 3 non-offensive touchdowns in a season will exhibit offensive Massey ratings biased upward by ≥ 0.12 ratings units relative to a grade-only prediction of team strength, violating the paper’s claim that PFF grades eliminate this distortion (paired t-test on within-team residuals, p < 0.01).
</RLVR_COUNTERFACTUAL_VETOES>