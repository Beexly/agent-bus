---
source: "2012 - Calculating Wins over Replacement Player (WORP) for NHL Goaltenders - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Journal of Quantitative Analysis in Sports/2012"
pages: 15
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5687
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper about WORP (Wins Over Replacement Player) for NHL Goaltenders. They've provided the source text and want me to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user said "DRIVE SOURCE" and provided a markdown file that appears to be the full text of the paper. The pages are marked as 1-16 in the source text (page numbers visible in the text). I need to cite exact [PAGE N] markers.

Let me structure this carefully.

First, let me identify the key content:
- Paper: Shea & Baker (2012), "Calculating Wins over Replacement Player (WORP) for NHL Goaltenders"
- Journal of Quantitative Analysis in Sports
- DOI: 10.1515/1559-0410.1358
- Pages: 1-16 (from the text)

Key equations:
1. Multiple regression: Wins = a*GF + b*GA + c
   - Combined: W' = 0.16422*GF - 0.14741*GA + 36.95095 (eq 3)
   - Per-season coefficients in Table 1
   - SSE combined: 12885.02, avg squared error 18.67
   - SSE per-season: 3083.22, avg squared error 4.47
   - SSE Pythagorean: 5416.74, avg squared error 7.85

2. Pythagorean Method (Cochran & Blackstock 2009):
   - W% = GF^x / (GF^x + GA^x), x = 1.99063 for 1980-2007
   - Or W' = GP * GF^x / (GF^x + GA^x)

3. Save Percentage:
   - SV% = 1 - GA/SOG (implied, though formula shown as image placeholder)
   - GAS = SOG * (SV%_rst - SV%_t)
     Wait, looking at text: "multiplying the shots on goal a given goalie faced by the difference between the save percentage of the goalie and the league save percentage"
     Actually text says: (1 - SV%_t)(SOGrst) represents projected goals allowed by replacement. So GAS = SOGrst * SV%_rst? No wait.
     Let's parse: GAS is goals against saved over replacement.
     Replacement goals allowed = SOGrst * (1 - SV%_t)
     Actual goals allowed = GArst = SOGrst * (1 - SV%_rst)
     So GAS = Replacement GA - Actual GA = SOGrst*(1-SV%_t) - SOGrst*(1-SV%_rst) = SOGrst*(SV%_rst - SV%_t)
     Yes, that matches.

4. WORP formula using combined multiple regression (eq 13):
   WORP = [0.16422*GFst - 0.14741*GAst + 36.95095] - [0.16422*GFst - 0.14741*(GAst - GArst + SOGrst*(1-SV%_t)) + 36.95095]
   
   Wait, looking carefully at eq 13:
   WORP = [(0.16422)GFst + (-0.14741)GAst + 36.95095] - [(0.16422)GFst + (-0.14741)(GAst - GArst + (SOGrst)(1-SV%_t)) + 36.95095]
   
   Hmm, that seems odd. If GAst is team goals against, and GArst is goals allowed by player r... Actually the text says:
   "GArst are the goals allowed by player r on team s in season t"
   
   But GAst is team goals against. So the replacement scenario changes GAst to GAst - GArst + (projected replacement goals). That is: remove the actual goalie's goals allowed, add replacement's projected goals allowed.
   
   Projected replacement goals = SOGrst * (1 - SV%_t)
   
   So new GA = GAst - GArst + SOGrst*(1-SV%_t)
   
   Then WORP = f(GAst, GFst) - f(GAst - GArst + SOGrst*(1-SV%_t), GFst)
   
   Since b is negative (-0.14741), reducing GA increases predicted wins.

5. Pythagorean WORP (eq 14):
   WORP = GPst * [GFst^x / (GFst^x + GAst^x) - GFst^x / (GFst^x + (GAst - GArst + SOGrst*(1-SV%_t))^x)]
   
   Actually need to reconstruct from text.

6. TIWORP:
   Uses average shots on goal rate instead of actual SOG faced.
   TIWORP formula involves minrst, mint, SOGt, bt (from Table 1).

Sections:
- Page 1: Title, abstract, intro
- Page 2: Multiple regression section, equation setup
- Page 3: Table 1 (season regressions)
- Page 4: Pythagorean method, Cochran & Blackstock
- Page 5: Save percentage, GAS definition, Table 2
- Page 6: WORP Hasek example
- Page 7: Eq 13 combined regression WORP, Tables 3-4
- Page 8: Eq 14 Pythagorean WORP, Tables 5-6
- Page 9: Season-specific WORP, Table 7-8, Table 9 percentiles
- Page 10: Team Independent WORP section
- Page 11: TIWORP results Table 10-12
- Page 12: Replacement player choice discussion
- Page 13: Continuation of replacement discussion
- Page 14: Remarks and future directions
- Page 15: References
- Page 16: (end)

Wait, looking at the page numbers in the source:
- "1 Submission..." appears after intro
- Page numbers visible: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16

Let me map content to pages more carefully based on the text markers:
- Page 1: Abstract, Introduction start
- Page 2: Multiple Regression section start, equation setup
- Page 3: Table 1 continues? Actually Table 1 is on page 3 based on "Table 1: Multiple Regression by Season" appearing after page 2 content.
- Page 4: Pythagorean Method
- Page 5: Save Percentage and GAS, Table 2 start
- Page 6: WORP Hasek example
- Page 7: Eq 13, Tables 3-4
- Page 8: Eq 14, Tables 5-6
- Page 9: Season-specific, Table 7-8, Table 9
- Page 10: TIWORP section
- Page 11: Tables 10-12
- Page 12: Replacement player choice
- Page 13: Continuation
- Page 14: Remarks
- Page 15: References
- Page 16: (end of references/submission)

Actually looking at the text, page numbers are explicitly shown as standalone numbers like "1", "2", etc. before "_Submission to Journal..." headers. Let me trace:

- After abstract/intro: "1 _Submission to Journal..." → Page 1
- Then "2 Shea and Baker..." → Page 2
- Then "3 _Submission..." → Page 3
- Then "4 Shea and Baker..." → Page 4
- Then "5 _Submission..." → Page 5
- Then "6 Shea and Baker..." → Page 6
- Then "7 _Submission..." → Page 7
- Then "8 Shea and Baker..." → Page 8
- Then "9 _Submission..." → Page 9
- Then "10 Shea and Baker..." → Page 10
- Then "11 _Submission..." → Page 11
- Then "12 Shea and Baker..." → Page 12
- Then "13 _Submission..." → Page 13
- Then "14 Shea and Baker..." → Page 14
- Then "15 _Submission..." → Page 15
- Then "16" → Page 16

Good. I'll cite these.

Now for the XML sections:

1. <THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to derive the WORP logic step by step, audit assumptions, identify gray zones (e.g., replacement = league average vs fringe player, ties counted as 0.5 wins, empty net exclusion, shot quality ignored, goalie-team confounding, small sample for backups).

2. <SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations, units, page citations, verbatim quotes. I need to write out equations in LaTeX, cite pages, include units (wins, goals, shots, minutes, save percentage dimensionless).

3. <RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Trace from James (1980) Pythagorean, Woolner (2002) VORP, Cochran & Blackstock (2009) NHL Pythagorean, Keri (2006), Neyer (2007), Krzywicki (2010) shot quality. Multi-week traps could refer to how early-season small samples mislead WORP, or how goalie usage over weeks/months affects accumulation.

4. <RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is a strange section title but I need to interpret it. "Crisis habit regression" = teams regressing to mean under pressure? "Counter-trap" = the assumption that replacement is average might be wrong because backups can be better (Rask example). "Clock" = season length, game count, accumulation of WORP over time, overtime loss rule change in 2005-06.

5. <CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. This means identifying physical constraints that veto the model: empty net situations excluded, shot quality (biomechanical/physical shot difficulty), weather (outdoor games? NHL mostly indoor but travel), goalie fatigue over season, rule changes (tie to OTL), equipment changes. The model assumes all shots equal, which is physically false.

6. <RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just "verifiable counterfactual vetoes." I need to create 3 scenarios where the WORP model would be vetoed (invalidated) based on counterfactuals, with predictions.

Constraints:
- No betting lines (spreads, totals, moneylines, odds). I must avoid any gambling terminology.
- No toy equations. Only formal LaTeX from the paper or clearly derived from it.
- >= 1000 words total across sections. THINK_TRACE alone >= 400 words.

Let me draft content.

THINK_TRACE (>=400 words):
- Start with the core problem: valuing goalies in wins.
- Multi-hop: GF/GA → wins via regression/Pythagorean → goalie's marginal contribution via GAS → WORP.
- Gray zones: 
  - Replacement defined as league average save percentage, but Section 7 acknowledges this is debatable (could be 90% of average). Rask example shows backups can exceed league average.
  - Team goals against (GAst) is a team stat confounded by skaters; subtracting GArst and adding replacement GA assumes goalie is separable from team defense.
  - Empty net shots excluded but empty net goals? Text says SOG excluding empty net shots, GA excluding empty net goals. This creates a selection bias: goalies pulled late face different shot profiles.
  - Tie/OTL rule change mid-sample (2005-06) handled by counting OTL as tie, but points system changed (shootout introduced? text doesn't mention shootout but NHL did introduce it. Text says OTL gets 1 point same as tie pre-2005-06. Actually post-2005-06 NHL gives loser point for OTL and shootout loss. Text says count overtime loss as tie. But what about shootout losses? The text says "overtime loss" - might include shootout? Not specified.)
  - Pythagorean exponent fixed at 1.99063 across all teams/seasons; no team-specific adjustment.
  - WORP linear in GA via regression coefficient b (~ -0.147 to -0.18), but Pythagorean is nonlinear. Divergence between methods at extremes.
  - TIWORP assumes average SOG rate, removing volume advantage/disadvantage.
- Derive Hasek example: 1996-97, SV% .930 vs league .9047, SOG 2177. GAS = 2177*(.930-.9047) = 2177*0.0253 = 55.0781? Text says 54.41 more goals. Let me check: 2177*(0.930 - 0.9047) = 2177 * 0.0253 = 55.0781. Wait text says "approximately 54.41 more goals". Let me recalculate: Maybe they computed replacement goals = 2177*(1-0.9047) = 2177*0.0953 = 207.4681. Actual goals = 2177*(1-0.930) = 2177*0.07 = 152.39. Difference = 55.08. Text says 54.41. Hmm, maybe they used unrounded numbers or slightly different SOG. Anyway, I'll cite the text's number 54.41.

Actually wait: text says "Had a goalie with the average save percentage of .9047 faced 2177 SOG, he would have given up approximately 54.41 more goals that season than Hasek." So difference is 54.41. Let's see: if Hasek allowed G = 2177*(1-.930) = 152.39 ≈ 152. Replacement allowed = 152 + 54.41 = 206.41. Replacement SV% = 1 - 206.41/2177 = 1 - 0.0948 = 0.9052. Close to 0.9047. Rounding differences.

- Gray zone: WORP can be negative but poor goalies get less playing time (survivorship bias), yet Billington played 63 games despite poor stats.

SOURCE_OPERATORS_AND_EQUATIONS:
Need formal LaTeX.

Equation (1) implied: total wins definition.
For pre-2005-06: \(W_i = \text{wins}_i + 0.5 \times \text{ties}_i = \frac{\text{points}_i}{2}\)
For post-2005-06: \(W_i = \text{wins}_i + 0.5 \times \text{OTL}_i\)

Multiple regression (Page 2):
\[
\hat{W}_i = a \cdot GF_i + b \cdot GA_i + c
\]
Minimize \(SSE = \sum_i (W_i - \hat{W}_i)^2\)

Combined coefficients (Page 2, eq 3):
\[
\hat{W} = 0.16422 \cdot GF - 0.14741 \cdot GA + 36.95095
\]
SE = 4.33 wins.

Per-season coefficients Table 1 (Page 3): \(a_t, b_t, c_t, SE_t\)

Pythagorean (Page 4):
\[
W\% = \frac{GF^x}{GF^x + GA^x}
\]
Cochran & Blackstock optimal \(x = 1.99063\) for 1980-2007 (Page 4).
Mean error 3.050% ≈ 2.50 games in 82-game schedule.

Wins version (Page 4/8):
\[
\hat{W} = GP \cdot \frac{GF^x}{GF^x + GA^x}
\]

Save percentage (Page 5):
\[
SV\% = 1 - \frac{GA}{SOG}
\]
(implied verbatim structure though image placeholder in text)

GAS (Page 5):
\[
GAS_{rst} = SOG_{rst} \cdot (SV\%_{rst} - SV\%_t)
\]
Units: goals. Replacement projected GA: \(SOG_{rst}(1 - SV\%_t)\).

WORP combined regression (Page 7, eq 13):
\[
WORP = \left[0.16422\,GF_{st} - 0.14741\,GA_{st} + 36.95095\right] - \left[0.16422\,GF_{st} - 0.14741\left(GA_{st} - GA_{rst} + SOG_{rst}(1 - SV\%_t)\right) + 36.95095\right]
\]
Simplifies to:
\[
WORP = -0.14741 \cdot \left[ - GA_{rst} + SOG_{rst}(1 - SV\%_t) \right] \cdot (-1)?
\]
Let's simplify carefully:
Term1 = A - b*GAst where A = 0.16422*GF + c (since b is negative)
Actually let b = -0.14741.
f(GA) = m*GF + b*GA + c.
f(GAst) - f(GAst - GArst + SOGrst*(1-SV%t))
= b*GAst - b*(GAst - GArst + SOGrst*(1-SV%t))
= b*(GArst - SOGrst*(1-SV%t))
Since b is negative, and GArst = SOGrst*(1-SV%rst),
= b*SOGrst*((1-SV%rst) - (1-SV%t))
= b*SOGrst*(SV%t - SV%rst)
= (-0.14741)*SOGrst*(SV%t - SV%rst)
= 0.14741*SOGrst*(SV%rst - SV%t)
= 0.14741 * GAS

Wait, that means WORP ≈ 0.14741 * GAS using combined regression? Let's check Hasek 96-97: GAS = 54.41. 0.14741 * 54.41 = 8.02. Yes! Table 3 shows Hasek 96-97 WORP = 8.02. Perfect. So the combined regression WORP is linearly proportional to GAS with coefficient |b|.

Pythagorean WORP (Page 8, eq 14):
\[
WORP = GP_{st} \left[ \frac{GF_{st}^x}{GF_{st}^x + GA_{st}^x} - \frac{GF_{st}^x}{GF_{st}^x + (GA_{st} - GA_{rst} + SOG_{rst}(1 - SV\%_t))^x} \right]
\]
With x = 1.99063.

TIWORP (Page 10):
\[
TIWORP_{rst} = |b_t| \cdot \left( \frac{min_{rst}}{min_t} \cdot SOG_t \right) \cdot (SV\%_{rst} - SV\%_t)
\]
Wait need to reconstruct. Text: "we suppose the given goalie has seen the average shots on goal rate in the given season for the amount of time that the goalie played. We then multiply this number of shots on goal by the difference in the given goalie’s save percentage and the league save percentage."
Average SOG rate = SOG_t / min_t (shots per minute).
Projected SOG for goalie = (min_rst / min_t) * SOG_t.
Then TIWORP uses b_t from Table 1 and converts goal difference to wins.
Actually since WORP ≈ |b_t| * GAS (from regression), and TIWORP replaces actual SOG with expected SOG based on minutes:
\[
TIWORP = |b_t| \cdot \left( \frac{min_{rst}}{min_t} SOG_t \right) \cdot (SV\%_{rst} - SV\%_t)
\]
But need to check sign and exact formula. The text says formula is shown as image placeholder. I'll reconstruct logically and note it's derived from Table 1 coefficient \(b_t\).

Percentiles Table 9 (Page 9).

RETROCAUSAL_GENEALOGY:
- James (1980) Pythagorean expectation in baseball.
- Woolner (2002) VORP in baseball, replacement level concept.
- Cochran & Blackstock (2009) NHL Pythagorean, x=1.99063, ties as half wins.
- Shea & Baker (2012) adapt to NHL goalies, WORP.
- Keri (2006) replacement = fringe major leaguer ~30th best.
- Neyer (2007) replacement hitter ~80% of average.
- Krzywicki (2010) shot quality, limited history.
- Multi-week traps: early season variance in SV% (small sample SOG), goalie workload accumulation over weeks, back-to-backs, fatigue not modeled. The "multi-week trap" is that WORP accumulates linearly with SOG, so a hot streak over 3-4 weeks can inflate value; conversely, a cold streak can deflate. The model has no temporal decay.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: When a team is in crisis (losing streak), they may bench a goalie. The model assumes the goalie continues to face SOG at observed rate. But coaches regress to the mean by pulling goalies, creating selection bias.
- Counter-trap: The assumption that replacement = league average is a trap because actual backups can be better (Rask .931 in 2009-10) or worse. If you replace Hasek with Rask, you might gain wins, not lose them. The model can't capture this because it fixes replacement at average.
- Clock: The season schedule clock (82 games, 48 in lockout season). OTL rule change in 2005-06 reset the clock. WORP is bounded by games played; goalie cannot exceed team's total wins. The "clock" also means late-season injuries force backups into action, violating replacement assumption.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: Shots are not equal. A breakaway vs point shot. Krzywicki (2010) shot quality. Model treats all SOG equally → veto when shot quality distribution deviates materially.
- Biomechanical layer: Goalie fatigue over 70+ games, back-to-backs, equipment size changes (not modeled), injury replacement.
- Weather layer: NHL is primarily indoor, but outdoor games (Winter Classic) and travel/time zones could affect performance. Not in model.
- Veto rule: If empty-net exclusion materially changes GA/SOG relationship, or if goalie faces >2 SD deviation in shot distance/quality, model is vetoed.
- The model is "weather-proof" only in the sense that indoor arenas control climate, but not "veto-proof" against shot quality.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable veto scenarios + predictions.

Scenario 1: Backup outplays starter (Rask vs Thomas 2009-10).
- Counterfactual: Replace Thomas with Rask for all Thomas's minutes. Model predicts WORP change based on Rask's actual SV% vs league average. But if Rask is the replacement, the "replacement" is not league average; it's Rask. Veto: Model's replacement assumption fails when backup SV% > starter SV%.
- Prediction: WORP for Thomas would be overstated relative to actual team value if Rask is available.

Scenario 2: Empty-net skewed workload.
- Counterfactual: Goalie plays many minutes but team pulls him frequently for empty net. SOG excluded but GA excluded too. If goalie faces high-quality empty-net shots in limited time, SV% is based on non-empty-net only. Veto: SOG/GA mismatch due to empty net strategy.
- Prediction: WORP misestimates value for goalies on teams with aggressive empty-net pulling.

Scenario 3: Rule change discontinuity (2005-06 OTL/tie change).
- Counterfactual: Compare 2004-05 (lockout, no season) to 2005-06. The model treats OTL as tie across all post-lockout seasons, but shootout losses also give 1 point. If shootout losses are not distinguished from OT losses, win projection is biased.
- Prediction: SE for post-2005-06 regressions (Table 1 shows SE 3.25 for 05-06, higher than neighbors) indicates structural break; model vetoed for seasons adjacent to rule change unless separate intercept.

I need to make sure total words >= 1000. Let me ensure each section is substantial.

Word count estimation:
THINK_TRACE: 500+ words
SOURCE_OPERATORS_AND_EQUATIONS: 300+ words
RETROCAUSAL_GENEALOGY: 200+ words
RECURSIVE_THEORY_OF_MIND: 200+ words
CROSS_LAYER_VETO_ADJUDICATION: 200+ words
RLVR_COUNTERFACTUAL_VETOES: 200+ words
Total should exceed 1000 easily.

No betting terms: I will not use spread, total, moneyline, odds, line, vig, etc.

Citations: Use [PAGE N] format exactly.

Let me draft carefully.

One thing: The source text uses "Pythagorean Method" equation with image placeholders. I need to reconstruct equations from the text description and cite pages.

For Pythagorean:
Page 4: "Cochran and Blackstock (2009) found the optimal coefficient to be x = 1.99063... yielding the equation..." Then equation image. Standard form:
\[
W\% = \frac{GF^x}{GF^x + GA^x}
\]
I'll state this is the standard James/Pythagorean form as applied on Page 4.

For GAS formula:
Page 5: image placeholder but text describes it clearly. I'll write:
\[
GAS_{rst} = SOG_{rst} \times (SV\%_{rst} - SV\%_t)
\]

For WORP eq 13:
Page 7 explicitly gives the formula textually. I'll reproduce in LaTeX.

For TIWORP:
Page 10 formula is image placeholder but text describes it. I'll present the logical reconstruction and flag it as reconstructed from Section 6 description.

Let's write.

I must be careful not to mention odds or betting. Words like "probability" are okay? The invariant says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." So I should avoid the word "odds" in betting context. Probability is mathematical, should be fine, but I'll avoid "odds" entirely to be safe.

Let's compose the final response.

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

I'll write detailed content now.

THINK_TRACE content plan:
- Derive WORP from first principles in the paper.
- Step 1: Map team goals to wins (regression/Pythagorean).
- Step 2: Isolate goalie marginal effect via GAS.
- Step 3: Counterfactual substitution: actual goalie vs replacement.
- Step 4: Team independence via TIWORP.
- Gray zone audit: replacement choice (average vs fringe), team-confounded GA, empty net exclusion, survivorship bias, shot quality, rule change discontinuity.
- Specific numbers: Hasek 1996-97, 54.41 GAS, WORP 8.02 (combined), 9.44 (Pythagorean). SSE comparisons.

SOURCE_OPERATORS_AND_EQUATIONS content plan:
- Define total wins piecewise (Page 2).
- Regression objective and combined coefficients (Page 2).
- Per-season coefficients Table 1 (Page 3).
- Pythagorean exponent and mean error (Page 4).
- Save percentage and GAS (Page 5).
- Eq 13 WORP combined (Page 7).
- Eq 14 WORP Pythagorean (Page 8).
- TIWORP reconstruction (Page 10).
- Percentiles Table 9 (Page 9).

RETROCAUSAL_GENEALOGY:
- Lineage: James 1980 -> Cochran & Blackstock 2009 -> Shea & Baker 2012.
- VORP/WAR influence: Woolner 2002, Keri 2006, Neyer 2007.
- Shot quality frontier: Krzywicki 2010.
- Multi-week traps: small-sample SV% early season, workload accumulation, goalie carousel.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: coach pull goalie after bad stretch -> selection bias in SOG.
- Counter-trap: replacement = league average fails when backup > average (Rask).
- Clock: 82-game schedule, lockout 48-game season, OTL rule change.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical: shot quality not modeled (Krzywicki 2010).
- Biomechanical: fatigue, back-to-backs, equipment.
- Weather: mostly indoor, but outdoor games/travel unmodeled.
- Veto conditions.

RLVR_COUNTERFACTUAL_VETOES:
- 3 scenarios with predictions.

Let me write now, ensuring LaTeX is correct and page citations are [PAGE N].

I need to check page numbers again. The text shows page numbers embedded like:
"1 _Submission to Journal of Quantitative Analysis in Sports"
"2 Shea and Baker: Calculating WORP for NHL Goaltenders"
"3 _Submission..."
So yes, [PAGE 1], [PAGE 2], etc.

I'll write out everything. Need to ensure total length is sufficient. Let me be verbose but precise.

I'll avoid the word "odds" completely.

Let's draft.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's central derivation proceeds through four linked operations. First, team-level goals for (GF) and goals against (GA) are mapped to total wins using either a pooled multiple regression or a season-specific multiple regression. The dependent variable is defined as total wins = wins + 0.5 × ties prior to 2005-06, and total wins = wins + 0.5 × overtime losses thereafter, maintaining the identity total wins = points / 2 across the rule change [PAGE 2]. The pooled regression yields \(\hat{W} = 0.16422\,GF - 0.14741\,GA + 36.95095\) with standard error 4.33 wins [PAGE 2]. Separate season regressions dramatically reduce sum of squared errors from 12,885.02 (pooled) to 3,083.22 (per-season), average squared error 4.47 versus 18.67 [PAGE 4].

Second, the Pythagorean Method is imported from baseball via Cochran and Blackstock (2009), with optimal exponent \(x = 1.99063\) for the 1980-2007 window and mean error approximately 3.050%, or about 2.50 games on an 82-game schedule [PAGE 4]. This provides a nonlinear alternative \(\hat{W} = GP \cdot GF^x / (GF^x + GA^x)\).

Third, goalie value is isolated through goals against saved (GAS). For goalie \(r\) on team \(s\) in season \(t\), \(GAS_{rst} = SOG_{rst} \times (SV\%_{rst} - SV\%_t)\), where \(SV\%_t\) is the league average save percentage used as the replacement baseline [PAGE 5]. The replacement's projected goals allowed are \(SOG_{rst}(1 - SV\%_t)\). The Hasek 1996-97 example illustrates the chain: league \(SV\%_t = 0.9047\), Hasek \(SV\%_{rst} = 0.930\), \(SOG_{rst} = 2,177\), yielding a reported 54.41 goals saved relative to replacement [PAGE 6].

Fourth, WORP is the counterfactual win difference \(f(GA_{st}, GF_{st}) - f(GA_{st} - GA_{rst} + SOG_{rst}(1 - SV\%_t), GF_{st})\). Using the pooled regression coefficient \(b = -0.14741\), this collapses algebraically to \(WORP \approx 0.14741 \times GAS\), which reproduces Hasek's 8.02 WORP for 1996-97 exactly (0.14741 × 54.41 ≈ 8.02) [PAGE 7]. The Pythagorean variant applies the same substitution inside the nonlinear win function and multiplies by games played [PAGE 8].

Gray-zone audit. (1) Replacement definition: Section 7 admits the league-average save percentage is one choice among many; a fringe replacement at 90% of league average, as in baseball VORP, was considered but rejected as arbitrary [PAGE 12-13]. Yet the 2009-10 Boston Bruins' Tuukka Rask posted a .931 save percentage as a backup, proving actual replacements can exceed league average and invalidating the average-replacement assumption for specific teams [PAGE 13]. (2) Team confounding: \(GA_{st}\) is a team statistic shaped by skaters; subtracting \(GA_{rst}\) and inserting replacement goals assumes separability between goaltending and team defense that may not hold. (3) Empty-net exclusion: both SOG and GA exclude empty-net situations [PAGE 5], creating selection bias because coaches pull goalies in predictable game states. (4) Survivorship: poor goalies usually lose playing time, yet Craig Billington played 63 games for Ottawa in 1993-94 despite a 4.59 GAA and .859 save percentage [PAGE 8], indicating management inertia can force exposure that the model treats as voluntary. (5) Rule discontinuity: the 2005-06 overtime-loss rule change is absorbed by counting OTL as a half-win, but the standard error jumps to 3.25 for 05-06 versus roughly 2.0 for adjacent seasons [PAGE 3], suggesting a structural break not fully modeled. (6) Shot quality: all shots are weighted equally [PAGE 5], despite Krzywicki (2010) documenting meaningful shot-quality variation [PAGE 14].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All units are dimensionless probabilities for save percentage, counts for goals/shots/games, and wins for the value output. No betting lines, spreads, totals, moneylines, or odds are referenced.

Total wins definition [PAGE 2]:
\[
W_i =
\begin{cases}
\text{wins}_i + 0.5\,\text{ties}_i = \frac{\text{points}_i}{2}, & \text{pre-2005-06} \\[4pt]
\text{wins}_i + 0.5\,\text{OTL}_i = \frac{\text{points}_i}{2}, & \text{post-2005-06}
\end{cases}
\]

Multiple regression objective [PAGE 2]:
\[
\hat{W}_i = a\,GF_i + b\,GA_i + c, \qquad
\min_{a,b,c} \sum_i \left(W_i - \hat{W}_i\right)^2
\]
Pooled coefficients, 1982-83 through 2009-10 [PAGE 2]:
\[
\hat{W} = 0.16422\,GF - 0.14741\,GA + 36.95095, \qquad SE = 4.33 \text{ wins}
\]
Per-season coefficients \(a_t, b_t, c_t, SE_t\) appear in Table 1 [PAGE 3]; e.g., 1996-97: \(a=0.1608, b=-0.1607, c=41.0, SE=1.77\).

Pythagorean Method [PAGE 4]:
\[
W\% = \frac{GF^x}{GF^x + GA^x}, \qquad
\hat{W} = GP \cdot \frac{GF^x}{GF^x + GA^x}
\]
Cochran-Blackstock optimal exponent for 1980-2007: \(x = 1.99063\), mean absolute error 3.050% \(\approx\) 2.50 games per 82-game schedule [PAGE 4].

Save percentage [PAGE 5]:
\[
SV\% = 1 - \frac{GA}{SOG}
\]
Goals against saved over replacement [PAGE 5]:
\[
GAS_{rst} = SOG_{rst}\,\bigl(SV\%_{rst} - SV\%_t\bigr), \qquad
\text{units: goals}
\]
Replacement projected goals allowed: \(SOG_{rst}\,(1 - SV\%_t)\).

WORP via pooled multiple regression, equation (13) [PAGE 7]:
\[
\begin{aligned}
WORP = {} &
\Bigl[0.16422\,GF_{st} - 0.14741\,GA_{st} + 36.95095\Bigr] \\
&- \Bigl[0.16422\,GF_{st} - 0.14741\bigl(GA_{st} - GA_{rst} + SOG_{rst}(1 - SV\%_t)\bigr) + 36.95095\Bigr]
\end{aligned}
\]
which simplifies to \(WORP = 0.14741 \times GAS_{rst}\) for this specification.

WORP via Pythagorean Method, equation (14) [PAGE 8]:
\[
WORP = GP_{st}\left[
\frac{GF_{st}^{x}}{GF_{st}^{x} + GA_{st}^{x}}
-
\frac{GF_{st}^{x}}{GF_{st}^{x} + \bigl(GA_{st} - GA_{rst} + SOG_{rst}(1 - SV\%_t)\bigr)^{x}}
\right], \qquad x = 1.99063
\]

Team-independent WORP (TIWORP) reconstruction [PAGE 10], replacing actual \(SOG_{rst}\) with minutes-proportional league-average exposure:
\[
\widetilde{SOG}_{rst} = \frac{min_{rst}}{min_t}\,SOG_t,
\qquad
TIWORP_{rst} = |b_t|\,\widetilde{SOG}_{rst}\,\bigl(SV\%_{rst} - SV\%_t\bigr)
\]
where \(b_t\) is the season-specific GA coefficient from Table 1.

Model comparison by sum of squared errors over 690 team-seasons [PAGE 4]: pooled regression SSE 12,885.02 (avg 18.67); per-season regression SSE 3,083.22 (avg 4.47); Pythagorean SSE 5,416.74 (avg 7.85). Percentiles [PAGE 9, Table 9]: pooled method 75th percentile 0.5289 WORP, median -0.1326, minimum -9.38; Pythagorean maximum 10.91, minimum -5.38.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage is explicitly recursive. Bill James (1980) introduced the Pythagorean Method in baseball, relating runs scored and runs allowed to win percentage [PAGE 1, 4]. Keith Woolner (2002) extended baseball valuation with Value Over Replacement Player (VORP), shifting the reference from absolute production to production above a hypothetical replacement player [PAGE 1]. Shea and Baker (2012) transplant this structure to NHL goaltending, replacing runs with goals and adopting Cochran and Blackstock's (2009) NHL-specific Pythagorean exponent \(x = 1.99063\) [PAGE 1, 4]. The genealogical anchors continue into Section 7: Keri (2006) defines replacement level as a fringe major leaguer, roughly the thirtieth-best available player [PAGE 13], and Neyer (2007) notes Woolner's replacement hitter is approximately 80% as good as a position average [PAGE 13]. Shea and Baker deliberately reject a fixed coefficient such as 0.90 applied to league save percentage because no statistical justification supports an arbitrary scalar [PAGE 13].

A multi-week trap is embedded in the accumulation mechanics. WORP scales linearly with shots on goal faced through GAS, so a goalie who enjoys a hot four-week stretch with elevated save percentage and heavy workload accrues disproportionate value relative to a goalie with identical true talent but average weekly distribution. The model contains no temporal decay, no regression-to-the-mean adjustment for early-season save-percentage noise, and no workload-fatigue interaction. Consequently, cross-season comparisons of WORP are valid only if replacement-level save percentage is seasonally recalibrated—as Table 2 shows average save percentage rose from 0.8757 in 1982-83 to 0.9113 in 2009-10 [PAGE 5]—but within-season comparisons remain vulnerable to small-sample save-percentage volatility over the first two to three weeks of play. The 1994-95 lockout-shortened 48-game season further distorts accumulation: Hasek's 1994-95 season ranks 23rd with WORP 6.32 under the Pythagorean method, constrained by fewer games [PAGE 8].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression operates as follows: when an NHL team enters a losing streak, the head coach frequently pulls the starting goaltender after a few goals, redistributing shots on goal to the backup. Because WORP is computed conditional on observed \(SOG_{rst}\) and \(GA_{rst}\) [PAGE 5], this coaching reflex creates selection bias. The goalie who remains in net during crisis moments is not a random draw from the team's goaltending pool; he is the one the coach trusts, which means his observed save percentage may reflect usage patterns as much as innate ability.

The counter-trap is the replacement-level assumption itself. Section 7 acknowledges that the league-average save percentage is a modeling convenience, not an empirical truth about available replacements [PAGE 12-13]. The 2009-10 Boston Bruins provide a falsifying case: backup Tuukka Rask posted a .931 save percentage and 1.97 goals-against average, exceeding league averages and outperforming starter Tim Thomas in several categories [PAGE 13]. If Thomas were replaced by Rask, the team might gain wins rather than lose them, yet the WORP formula forces the counterfactual replacement to perform at exactly \(SV\%_t\). This is a counter-trap because the model's baseline is simultaneously too high (for teams with elite backups like Rask) and too low (for teams with true fringe backups), rendering team-specific WORP unverifiable without knowing the actual backup's save percentage.

The clock governs season length and rule regimes. Pre-2005-06 ties were worth one point; post-2005-06 overtime losses are worth one point and are counted as half-wins [PAGE 2]. The 2004-05 lockout removed an entire season, and the 1994-95 lockout compressed play to 48 games [PAGE 8]. Because WORP is bounded by the team's total games played and by the regression's win scale, a goalie in a 48-game season cannot accumulate WORP at the same rate as in an 82-game season even with identical per-game performance. The model handles this by using season-specific regressions (Table 1) [PAGE 3] and by reporting TIWORP to remove exposure bias [PAGE 10], but it does not model the intra-season clock: back-to-back games, fatigue across a month, or playoff intensity. WORP is therefore a regular-season, clock-unadjusted cumulative statistic.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The model treats every shot on goal as identical [PAGE 5]. Krzywicki (2010) demonstrates that shot quality in the NHL is heterogeneous, with material differences in expected-goal value by shot location and type [PAGE 14]. Veto condition: if a goalie's shot-quality distribution deviates by more than one standard deviation from the league mean for that season, the equal-weight SOG assumption is violated and WORP is physically unjustified.

Biomechanical layer: Goaltending imposes acute biomechanical load—lateral movement, butterfly recovery, and reaction time—that accumulates over games and minutes. The model uses total minutes only to compute TIWORP exposure [PAGE 10] and contains no fatigue term, no back-to-back interaction, and no injury-replacement state. Veto condition: for goalies exceeding 65 games or 4,000 minutes in a season, unmodeled fatigue may depress late-season save percentage, biasing WORP downward for workhorses such as Hasek (72 games in 1997-98) [PAGE 9, Table 7].

Weather layer: The NHL is predominantly an indoor league, but outdoor games (e.g., the Winter Classic) and cross-time-zone travel introduce environmental variance not represented in \(GF, GA, SOG,\) or \(SV\%\) [PAGE 5]. Because the data exclude empty-net situations but not outdoor-game situations, any climate-related save-percentage shift is absorbed into the residual. Veto condition: seasons or teams with disproportionate outdoor-game exposure cannot be fairly compared to indoor-only schedules under the current specification.

Cross-layer adjudication rule: A WORP estimate is admissible only if (a) empty-net exclusion does not remove more than 5% of team shots, (b) the goalie's game count is within one standard deviation of the positional mean for that season, and (c) no rule-change discontinuity (e.g., 2005-06 OTL adjustment) falls inside the estimation window without a separate seasonal intercept [PAGE 3]. The pooled regression fails condition (c), with SE 4.33 wins versus per-season SEs of 1.66-3.25 [PAGE 3], so pooled WORP is vetoed for cross-era comparisons; per-season regression or Pythagorean WORP is preferred.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Elite backup outplays starter. Counterfactual: Replace 2009-10 Boston starter Tim Thomas with backup Tuukka Rask for all of Thomas's minutes. Rask's .931 save percentage exceeded the league average and Thomas's own mark in some stretches [PAGE 13]. Veto: Because WORP forces the replacement to \(SV\%_t = 0.9113\) for 2009-10 [PAGE 5], the model cannot value Rask as the replacement; it would assign Thomas a positive WORP relative to an average replacement even though the actual marginal alternative was superior. Prediction: Team win projection using WORP would understate Boston's true win potential with Rask in net and misattribute Thomas's value.

Scenario 2: Empty-net workload distortion. Counterfactual: A goalie on a trailing team is pulled early and often, so his non-empty-net SOG are biased toward even-strength and power-play situations while empty-net GA are excluded [PAGE 5]. Veto: The SOG denominator no longer represents all dangerous shots, so GAS and WORP misstate the goalie's marginal effect on team GA. Prediction: Goaltenders on coaches with aggressive empty-net pull thresholds will show inflated WORP relative to their actual contribution to team winning.

Scenario 3: Rule-change structural break. Counterfactual: Pool 2004-05 (missing due to lockout) and 2005-06 data into one regression without a seasonal intercept shift. The OTL rule change alters the mapping from points to total wins [PAGE 2]. Veto: The pooled regression's SE of 4.33 wins and SSE of 12,885.02 [PAGE 2, 4] versus per-season SSE of 3,083.22 [PAGE 4] indicate the rule change is not neutral. Prediction: Pooled-model WORP for 2005-06 and 2006-07 will exhibit systematic bias because the win-per-goal coefficient \(b\) shifts across the regime boundary; separate seasonal regressions are required to avoid veto.
</RLVR_COUNTERFACTUAL_VETOES>