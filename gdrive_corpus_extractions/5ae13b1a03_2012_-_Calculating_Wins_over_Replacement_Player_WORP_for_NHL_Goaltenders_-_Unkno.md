---
source: "2012 - Calculating Wins over Replacement Player (WORP) for NHL Goaltenders - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Quantitative Analysis in Sports/2012"
pages: 18
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3640
---

<NATIVE_REASONING>
The user wants a deep analytical response to a specific sports research paper about WORP for NHL goaltenders. I must follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations.

Let's structure:

THINK_TRACE: Need >=400 words. Deep multi-hop derivation:
- Start from paper's model: wins = a*GF + b*GA + c [PAGE 4-5]
- GAS definition [PAGE 8]: GAS = SOG*(SV%_r - SV%_t) = (1-SV%_t)*SOG - GA_r
- WORP via regression eq (3): WORP = 0.14741 * GAS [PAGE 10]
- Pythagorean WORP: P(GP,GF,GA) - P(GP,GF,GA+GAS) [PAGE 11]
- TIWORP formula [PAGE 13]: TIWORP = b_t * min_rst / min_t * SOG_t * (SV%_t - SV%_rst)? Wait need to check exact formula from page 13.

Equation (15) on page 13:
TIWORP = (bt)minrst/mint SOGt(SV%t −SV%rst)?
Looking at text: 
TIWORP = (bt)minrst mint SOGt(SV%t −SV%rst), 
But formatting is ambiguous. Let's parse: "TIWORP = (bt)minrst mint SOGt(SV%t −SV%rst)". Actually it likely means:
TIWORP = (b_t) * (min_rst / min_t) * SOG_t * (SV%_t - SV%_r_st)
where min_rst is minutes played by goalie r, min_t is total minutes for goalies in season t, SOG_t is total shots on goal in season t.
This scales the league-average shot volume by the goalie's share of minutes, then applies save percentage differential.

Breakdown regimes:
- Pythagorean exponent x = 1.99063 for 1980-2007, mean error 3.050% ≈ 2.50 games in 82-game schedule [PAGE 6]
- SSE comparison: combined regression 12885.02 vs separate 3083.22 vs Pythagorean 5416.74 [PAGE 7]
- Rules change 2005-06 (ties vs OTL) affects total wins definition [PAGE 4]
- Empty net shots excluded [PAGE 7, 13]
- Goalie replacement = league average SV% [PAGE 13-14]

Gray zones:
- The regression coefficient b is negative (~ -0.147 to -0.18), meaning more GA reduces wins. In WORP derivation, adding GAS to GA increases GA (since GAS positive means goalie saved goals, so replacement would allow more goals: GA_replacement = GA_actual + GAS? Let's check page 10 equation: WORP = [regression with GA_st] - [regression with GA_st - GA_rst + (SOG_rst)(1-SV%_t)]. Wait:
GA_st - GA_rst + (SOG_rst)(1-SV%_t) = GA_st - GAS_rst? Let's derive:
GAS = (SOG)(SV%_r - SV%_t) = SOG*SV%_r - SOG*SV%_t
Also GA_r = SOG*(1-SV%_r)
(1-SV%_t)*SOG = projected GA by replacement.
So GA_st - GA_rst + SOG*(1-SV%_t) = GA_st - [SOG*(1-SV%_r)] + SOG*(1-SV%_t)
= GA_st - SOG + SOG*SV%_r + SOG - SOG*SV%_t
= GA_st + SOG*(SV%_r - SV%_t) = GA_st + GAS.
Wait if GAS is positive (better than average), then GA_st + GAS is higher GA, meaning replacement allowed more goals. But in equation (13) they have:
WORP = ... - ... (GA_st - GArst + (SOGrst)(1-SV%t)) ...
= -0.14741 [GArst - (SOGrst)(1-SV%t)] = 0.14741 [GASrst]
Let's verify: GArst - SOG*(1-SV%t) = SOG*(1-SV%_r) - SOG*(1-SV%_t) = SOG*(SV%_t - SV%_r) = -GAS.
Then -0.14741 * (-GAS) = 0.14741 * GAS. Yes.

So WORP = -b * GAS where b is negative coefficient on GA, so WORP positive coefficient times GAS.

Units: wins (dimensionless count, specifically "total wins" = wins + 0.5*ties/OTL). SOG count. SV% dimensionless probability [0,1]. GAS in goals (count). b in wins per goal.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown. I'll write out all equations from the paper with LaTeX, cite pages, define variables, units, assumptions, singularity/breakdown regimes (e.g., SOG=0 leads to GAS=0; SV%_t = SV%_r leads to GAS=0; Pythagorean denominator GF^x + GA^x = 0 if both zero, singular; regression extrapolation outside 1982-83 to 2009-10 range; empty net exclusion; tie/OTL rule change).

RETROCAUSAL_GENEALOGY: Historical lineage: Woolner VORP (baseball) [PAGE 2-3], Bill James Pythagorean 1980 [PAGE 5-6], Cochran & Blackstock 2009 NHL exponent 1.99063 [PAGE 6], Keri 2006 replacement level [PAGE 13], Neyer 2007 [PAGE 3, 13]. Multi-week traps: applying across eras without season-specific coefficients; using league-average SV% as replacement ignores backup quality (e.g., Tuukka Rask 2009-10 [PAGE 14]); shot quality omission [PAGE 17]; empty-net exclusion [PAGE 7, 13].

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Teams in crisis (bad goalie) regress to mean; WORP may overstate value if playing time is endogenous to performance (poor performance -> diminished playing time, but some teams stick with bad goalies like Billington [PAGE 11]).
- Counter-trap: TIWORP attempts to remove team/shot-volume dependence, but creates a new trap: assumes average shot rate and minutes share are exogenous; ignores shot quality and deployment.
- Clock: Season length (82 vs 48 in 94-95) affects accumulation opportunity; separate regressions per season account for rule/style changes but overfit small samples (e.g., 94-95 lockout shortened season, SE 3.10 vs typical ~2 [PAGE 5]).

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical: Goalie save percentage is a biomechanical outcome (reaction time, positioning, butterfly style). WORP treats it as a static rate, ignoring fatigue across games, back-to-backs, travel.
- Biomechanical: No adjustment for save difficulty/shot quality (Krzywicki 2010 noted but insufficient data [PAGE 17]). High-danger shots inflate GA independent of goalie skill.
- Weather: NHL is indoor, so weather veto is null; however, rink conditions (ice quality) vary by arena and are not modeled. Cold weather markets? Not relevant. So veto: indoor climate-controlled environment removes weather as a confounder, but ice temperature/humidity could affect puck behavior—unmodeled.
- The "veto proof" aspect: What would veto the WORP conclusion? If shot quality data shows systematic bias, or if the replacement player assumption (league average) is violated by elite backups (Rask). Also, the regression assumes linearity in GF/GA, which breaks down at extremes (teams with extreme goal differentials).

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
RLVR likely means Reinforcement Learning from Verifiable Rewards? Or some counterfactual framework. I'll interpret as verifiable counterfactual veto scenarios for the WORP model.
Scenario 1: Replacement SV% set to 0.90 * league average instead of league average (as discussed page 14). Prediction: WORP values scale by factor roughly 1/0.9 or change sign distribution; top goalies' WORP decreases because the baseline is worse, making GAS smaller? Actually if replacement SV% is lower (worse), then (SV%_r - SV%_replacement) is larger, so GAS larger, WORP larger. Wait: replacement SV% = 0.9 * SV%_t (worse). Then GAS' = SOG*(SV%_r - 0.9*SV%_t) > GAS = SOG*(SV%_r - SV%_t). So WORP increases for above-average goalies, decreases (more negative) for below-average. Prediction: spread of WORP widens; top-10 WORP increases by approx 10% relative to the gap between goalie and average.
Scenario 2: Include empty-net shots and goals. Paper excludes them [PAGE 7, 13]. Prediction: Goalie WORP decreases slightly because empty-net goals are often not the goalie's fault (pulled goalie), but including them penalizes goalies on bad teams who get pulled more often. This introduces team-quality endogeneity.
Scenario 3: Apply Pythagorean exponent x=2 instead of x=1.99063, or apply combined regression (eq 3) to a post-2010 season with different scoring environment. Prediction: systematic bias in WORP because coefficients are era-specific; for high-scoring eras, b magnitude may differ, causing miscalibration of wins per goal saved.

Need to ensure >=1000 words total across sections. Let's aim for each section substantial.

No betting lines anywhere.

No toy equations: all equations must be from the paper or formally defined, not invented ratios like Force/Fatigue. I can define new formal notation as long as it's LaTeX and grounded.

Citations: [PAGE N] markers.

Let's draft carefully.

Word count check: Need total >=1000. I'll write richly.

THINK_TRACE >=400 words.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's core derivation proceeds through three linked layers: (1) a wins prediction function f(GF, GA), (2) a goaltender-specific goals-against-saved counterfactual GAS, and (3) the substitution of the replacement-level goals-against into f to produce WORP. On page 4, the authors define total wins as wins plus one-half ties or overtime losses, thereby rendering the dependent variable dimensionally consistent across the 1982-83 to 2009-10 window despite the 2005-06 rule change that converted ties into overtime losses. The pooled multiple regression on page 5 yields Wins = 0.16422·GF − 0.14741·GA + 36.95095 with SE = 4.33 wins. Because the GA coefficient is negative, every additional goal against reduces expected wins by roughly 0.147 wins under the pooled model. The per-season regressions in Table 1 (page 5) show the GA coefficient b ranging from −0.1201 to −0.1823, confirming that the marginal win value of a goal is era-dependent and not a structural constant.

The gray-zone audit centers on equation (11) on page 8: GAS_rst = SOG_rst · (SV%_rst − SV%_t). This constructs a counterfactual in which the replacement goaltender faces the exact same shot volume as the observed goaltender but converts shots at the league-average save percentage. Substituting this into the pooled regression on page 10 produces WORP = −b · [GA_rst − SOG_rst(1 − SV%_t)] = 0.14741 · GAS_rst because b = −0.14741. Thus WORP inherits the linearity and sign of the regression coefficient. A breakdown regime occurs when SOG_rst = 0: GAS collapses to zero regardless of SV% differential, meaning a goaltender who faces no shots accumulates zero WORP even if theoretically "perfect." Another singularity arises if SV%_t = SV%_rst, yielding GAS = 0 and WORP = 0 by construction, which erases any value from a goaltender who matches the league average exactly even if their team's win total is extreme.

The Pythagorean path on page 7 defines wins ≈ P(GP, GF, GA) = GP · GF^x / (GF^x + GA^x), x = 1.99063. The WORP expression on page 11 is P(GP, GF, GA) − P(GP, GF, GA + GAS). Because GAS is positive for above-average goaltenders, the second term evaluates a higher GA and therefore fewer projected wins, producing a positive WORP. The Pythagorean denominator creates a singularity at GF = GA = 0, and the exponent x is only optimal for the 1980-2007 window (mean error 3.050%, roughly 2.50 games per 82-game season); applying it outside that era or to a 48-game lockout season (1994-95) miscalibrates the win-to-goal conversion.

TIWORP on page 13 attempts to strip team shot volume by scaling league-average SOG by the goaltender's share of minutes: TIWORP = b_t · (min_rst / min_t) · SOG_t · (SV%_t − SV%_rst). This removes the endogenously chosen SOG_rst but introduces a new assumption: that min_rst / min_t is exogenous and representative of the goaltender's true opportunity. The paper acknowledges this is not the only possible replacement definition (page 14) and explicitly rejects a 0.90 · league-average multiplier because it lacks statistical justification and would be arbitrary.

The multi-week trap is temporal misalignment. Cochran and Blackstock's exponent was fit on 1917-2007 data, while Shea and Baker restrict to 1982-83 through 2009-10. SSE values on page 7 show the pooled regression (12885.02) is far worse than per-season regressions (3083.22), which are better than Pythagorean (5416.74). Using a single coefficient across 28 seasons ignores rule changes (tie to OTL), scoring environment shifts, and equipment/style evolution. The 1994-95 lockout season (48 games) has SE = 3.10 in Table 1 versus typical values near 2.0, indicating small-sample instability that contaminates any multi-season aggregation.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All formal operators are drawn verbatim or by direct transcription from pages 2-18. Units are in wins, goals, shots on goal, minutes, or dimensionless probabilities.

Multiple regression (page 4, eq. 1):
\[\text{wins} = a \cdot GF + b \cdot GA + c\]
where \(GF\) = team goals for (count), \(GA\) = team goals against (count), \(a,b,c\) in wins per goal and wins intercept. Optimal pooled coefficients (page 5, eq. 3):
\[a = 0.16422,\quad b = -0.14741,\quad c = 36.95095\]
Standard error \(SE = 4.33\) wins.

Sum of squared errors (page 4, eq. 2):
\[SSE = \sum_{i=1}^{n} (W_i - W'_i)^2\]
\(W_i\) actual total wins, \(W'_i\) projected total wins. Pooled SSE = 12885.02; per-season SSE = 3083.22; Pythagorean SSE = 5416.74 (page 7).

Total wins definition (page 4): pre-2005-06, \(\text{total wins} = \text{points}/2\); post-2005-06, \(\text{total wins} = \text{wins} + 0.5 \cdot \text{overtime losses}\).

Save percentage (page 7, eq. 10):
\[SV\% = \frac{SOG - GA}{SOG}\]
dimensionless probability in \([0,1]\); empty-net shots and goals excluded (pages 7, 13).

Goals against saved over replacement (page 8, eq. 11):
\[GAS_{rst} = (1 - SV\%_t)(SOG_{rst}) - GA_{rst} = SOG_{rst}(SV\%_{rst} - SV\%_t)\]
Units: goals. \(SV\%_t\) = league average save percentage in season \(t\). \(SOG_{rst}\), \(GA_{rst}\), \(SV\%_{rst}\) for goaltender \(r\) on team \(s\) in season \(t\). Positive \(GAS\) means the goaltender outperformed the replacement baseline.

Pooled-regression WORP (page 10, eq. 13):
\[WORP = -b \cdot GAS_{rst} = 0.14741 \cdot GAS_{rst}\]
Units: wins. Derivation: \(WORP = [a GF_{st} + b GA_{st} + c] - [a GF_{st} + b(GA_{st} - GA_{rst} + SOG_{rst}(1 - SV\%_t)) + c]\).

Pythagorean win projection (page 7, eq. 12):
\[wins \approx P(GP, GF, GA) = GP \cdot \frac{GF^{1.99063}}{GF^{1.99063} + GA^{1.99063}}\]
Units: wins. \(GP\) = games played (count). Exponent \(x = 1.99063\) optimized for 1980-2007 (page 6); mean error = 3.050% ≈ 2.50 games in an 82-game schedule.

Pythagorean WORP (page 11, eq. 14):
\[WORP = P(GP_{st}, GF_{st}, GA_{st}) - P(GP_{st}, GF_{st}, GA_{st} + GAS_{rst})\]
The second term adds \(GAS\) to team \(GA\), simulating the replacement goaltender allowing the saved goals.

Cochran-Blackstock objective (page 6, eq. 8):
\[\min_x \sum_{t=1917}^{2007} \sum_{i=1}^{n_t} \left| wlpct_{it} - \frac{s_{it}^x}{s_{it}^x + a_{it}^x} \right| g_{it}\]
where \(wlpct\) = win percentage, \(g\) = games played, \(s\) = goals scored, \(a\) = goals allowed.

Team-independent WORP (page 13, eq. 15):
\[TIWORP = b_t \cdot \frac{min_{rst}}{min_t} \cdot SOG_t \cdot (SV\%_t - SV\%_{rst})\]
Units: wins. \(min_{rst}\) = goaltender minutes played; \(min_t\) = total goaltender minutes in season \(t\); \(SOG_t\) = total league shots on goal in season \(t\); \(b_t\) = season-specific GA coefficient from Table 1.

Breakdown regimes: (i) \(SOG_{rst}=0 \Rightarrow GAS=0\); (ii) \(SV\%_{rst}=SV\%_t \Rightarrow GAS=0, WORP=0\); (iii) \(GF=GA=0\) in Pythagorean denominator is undefined; (iv) \(x=1.99063\) is not transportable outside 1980-2007 without refit; (v) per-season regressions overfit shortened or rule-shifted seasons (e.g., 1994-95 SE = 3.10).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The statistical lineage is explicitly baseball-to-hockey. Page 2 credits Keith Woolner's value over replacement player (VORP) for MLB as the conceptual ancestor, and page 2-3 cites Bill James's 1980 Pythagorean Method, applied to the NHL by Cochran and Blackstock (2009). Page 3 traces run-based baseball valuation through James (1988), Woolner (2002), and Baseball Prospectus WAR, noting that baseball lacks consensus on WAR while hockey lacked any win-based goaltender metric. Page 7 imports Cochran and Blackstock's exponent optimization over 1917-2007, selecting x = 1.99063 for the 1980-2007 sub-period because it matches the paper's 1982-83 to 2009-10 focus. Page 13 invokes Keri (2006) on replacement-level fringe major leaguers and Neyer (2007) on replacement hitters at roughly 80% of average, which the authors reject for hockey because NHL backup quality is too variable to justify a fixed coefficient such as 0.90 · league average. Page 14 cites Tuukka Rask's 2009-10 backup performance (1.97 GAA, .931 SV%) as evidence that replacements can exceed league average, undermining a rigid replacement definition.

Multi-week traps: First, the replacement baseline is recalculated every season using league-average SV% (Table 2, page 8), which rose from .8757 in 1982-83 to .9113 in 2009-10. A static .890 threshold would be above average in the early 1980s and below average recently (page 14), so cross-era WORP comparisons require season-specific baselines. Second, the per-season regression coefficients in Table 1 (page 5) show \(b\) drifting from −0.1201 (1984-85) to −0.1823 (2006-07); pooling across weeks/seasons without re-estimation misprices the marginal goal. Third, the 2005-06 rule change (ties replaced by overtime losses) forced the authors to redefine total wins (page 4); ignoring this creates a structural break in the dependent variable. Fourth, shot quality is acknowledged as an open problem (page 17): Krzywicki (2010) analyzed 2009-2010 NHL shot quality, but insufficient historical data prevents a team-independent save percentage adjustment, leaving WORP exposed to shot-difficulty bias across any multi-week sample.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Teams experiencing goaltending crisis tend to regress toward league-average save percentage over time, but WORP treats each season as a static snapshot. A goaltender with a positive WORP in one season may simply be benefiting from mean-reverting variance rather than durable skill; the model does not regress SV% toward a career or multi-year mean, so a single hot month is weighted identically to sustained excellence.

Counter-trap: TIWORP was designed to counter the trap of shot-volume dependence—goaltenders on high-event teams accumulate more WORP simply because they face more shots (page 10). By substituting league-average SOG scaled by minutes share, TIWORP levels the playing field between, say, Dominik Hasek and Ed Belfour (page 11). However, this creates a reciprocal trap: it assumes the goaltender's minutes share and the league shot rate are independent of performance. In reality, coaches deploy better goaltenders in more minutes and against tougher opponents, so min_rst/min_t is endogenous. TIWORP therefore overcorrects by stripping away real strategic deployment value while failing to adjust for shot quality (page 17).

Clock: Season length acts as a hard clock on accumulation. Page 11 notes that Hasek's 1994-95 season ranks only 23rd by WORP because the lockout shortened the schedule to 48 games, limiting opportunity. The separate regressions in Table 1 (page 5) attempt to handle era-specific clocks, but the 1994-95 SE = 3.10 reveals small-sample instability: with fewer games, each goal has a larger proportional impact on win percentage, inflating the apparent precision of season-specific coefficients. A counter-trap to the clock trap is to normalize WORP per 82 games, but the paper does not do this, leaving lockout and expansion seasons incomparable to full seasons without manual adjustment.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: NHL games are played in climate-controlled indoor arenas, so outdoor weather (temperature, wind, precipitation) is a null confounder and cannot veto WORP on meteorological grounds. Ice quality varies by building and arena maintenance, but the model contains no ice-temperature or humidity covariate; a veto based on rink microclimate is theoretically possible but empirically unactionable from the provided data.

Biomechanical layer: Save percentage is the output of goaltender biomechanics—reaction time, lateral mobility, butterfly positioning, and rebound control. WORP treats SV% as a scalar rate and ignores within-game fatigue, back-to-back deployment, and save selection (e.g., high-danger versus low-danger shots). Page 17 explicitly states that shot quality data are insufficient for a team-independent save percentage, so WORP cannot distinguish a goaltender who faces many prime scoring chances from one who faces peripheral shots. A veto is triggered if shot-quality differentials systematically correlate with team defensive structure: a goaltender behind a strong defensive team may post a high SV% partly because of reduced shot danger, inflating WORP without corresponding individual biomechanical superiority.

Physical-team layer: Team goals against (GA) in the regression are a team-level outcome, not solely a goaltender output. Page 5 shows the regression uses team GF and GA, then attributes win differences to the goaltender via GAS. This commits a partial attribution error: skater defense, shot suppression, and penalty killing contribute to GA, yet WORP assigns the full marginal win value of goal prevention to the goaltender. The veto condition is met whenever team defensive quality covaries with goaltender SV%, which is structurally likely because good teams attract or retain good goaltenders.

Weather veto proof: Because all NHL venues are indoor and the paper excludes outdoor games (none in the 1982-83 to 2009-10 sample used here), no weather-based veto applies. The only environmental variable with possible physical effect—ice conditions—is unmodeled, but the data source provides no arena-level ice-quality series, so the veto cannot be operationalized from the manuscript.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Replacement baseline tightened to 0.90 · league-average SV%. Page 14 notes the authors considered but rejected this. Counterfactual: SV%_replacement = 0.90 · SV%_t. Prediction: For goaltenders with SV%_rst > SV%_t, GAS increases because the baseline is worse, so WORP = -b · GAS expands in magnitude; for goaltenders below average, negative WORP becomes more negative. Verifiable check: Recompute Table 3 (page 10) using SV%_replacement = 0.90 · SV%_t; top-10 WORP values should rise by roughly (SV%_t - 0.9·SV%_t) · SOG_rst · 0.14741 wins per goal, and the number of records with WORP ≥ 5 should exceed the observed 34 under the league-average baseline.

Scenario 2: Empty-net shots and goals included. Page 7 states empty-net shots and goals are excluded from SOG and GA. Counterfactual: include empty-net events. Prediction: Goaltenders on weak teams who are frequently pulled for extra attackers will accumulate empty-net goals against that are not attributable to their save skill. Including them will reduce their GA_rst, which by equation (11) reduces GAS (since GA_rst rises relative to replacement projection), lowering WORP for below-average teams and compressing the spread between top and bottom goaltenders. Verifiable check: Recompute bottom-5 WORP from Table 4 (page 10) with empty-net goals included; C. Billington's 1993-94 WORP of -9.58 should become less negative if empty-net goals are partially reassigned to team strategy rather than goaltending.

Scenario 3: Pooled regression applied to a post-sample season with different scoring ecology. Page 5's pooled coefficients (a = 0.16422, b = -0.14741) derive from 1982-83 to 2009-10. Counterfactual: apply equation (3) to a hypothetical 2024-25 NHL season with higher scoring and different rule emphasis. Prediction: Because b is era-specific, using the pooled coefficient will misestimate the win value of a saved goal. In a higher-scoring environment, the marginal win value of a goal typically falls (more goals are required to move win percentage), so |b| should be smaller in magnitude than 0.14741. Applying the historical pooled coefficient will overstate WORP for above-average goaltenders and understate the penalty for below-average goaltenders. Verifiable check: Fit a separate multiple regression to a post-2010 NHL season; compare its b coefficient to -0.14741 and recompute Hasek's 1996-97 WORP (8.02 wins, page 10) using the modern b. The modern WORP should deviate from 8.02 in proportion to the coefficient shift.
</RLVR_COUNTERFACTUAL_VETOES>