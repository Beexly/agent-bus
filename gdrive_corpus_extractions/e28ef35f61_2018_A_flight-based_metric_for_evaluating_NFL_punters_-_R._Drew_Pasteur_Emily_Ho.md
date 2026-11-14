---
source: "2018 A flight-based metric for evaluating NFL punters - R. Drew Pasteur, Emily Howerton, Preston Pozderac, Stuart Young and Jonathan Moore.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 20
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 8541
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper about NFL punting metrics. They have provided the full text of the paper "A flight-based metric for evaluating NFL punters" by Pasteur et al. (2018).

I need to follow strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_TORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, I need to check the exact section names:
- <THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>

I must produce at least 1,000 words total across these sections, with THINK_TRACE alone being >=400 words.

I need to cite exact [PAGE N] markers from the source text. Looking at the provided text, page numbers are visible:
- Page 201 (journal page): Abstract, Introduction start
- Page 202: Section 1.2 continues
- Page 203: Section 2.1, Figure 1, Figure 2, Figure 3
- Page 204: Figure 4, Figure 5, Section 2.2
- Page 205: Section 2.2 continued, Section 2.3, Figure 6, Figure 7
- Page 206: Figure 8, Figure 9, Figure 10, Figure 11, Figure 12
- Page 207: Figure 13, Section 3
- Page 208: Section 3.1, Table 1, Section 3.2
- Page 209: Equation (1), Section 3.3, Figure 15, Figure 16
- Page 210: Section 4.1, Section 4.2
- Page 211: Figure 17, Section 5 Conclusion
- Page 212: References continued
- Page 213: Appendix A table

Let me carefully map citations:
- Page 201: Introduction, quarterback metrics, field goal kickers evaluation
- Page 202: Existing punter metrics, gross/net distance, touchback, inside-20, hang time, confounding variables, Burke (2010)
- Page 203: Five seasons of punts, 12,245 punts 2010-2014, Figure 1, Figure 2, Figure 3, touchback probability, expected return
- Page 204: Figure 4 next LOS, Figure 5 improvement, Section 2.2 new approach, flight-based metric, data collection 2,526 punts 2013, 16 blocked punts excluded, hang time stopwatch, weather data, wind decomposition
- Page 205: 2510 punts dataset, penalties, Section 2.3 fly distance and landing point, Figure 6, Figure 7
- Page 206: Figure 8 bounce probability, Figure 9 touchback probability, Figure 10 next LOS, Figure 11 fly distance by landing point, Figure 12 post-bounce returns
- Page 207: Figure 13 fair catches, EPA section, Romer (2006), Burke (2008), fumbles 81 receiving team fumbles
- Page 208: Section 3.1 multi-factor models, modified ridge estimator d'Errico (2005), Figure 14 contour plot, EYA formula, two-fold cross validation, hang time coefficient 0.180, constant -0.798, 0.557 EP per yard, extra second hang time worth just over three yards, lateral landing point edge distance, Table 1
- Page 209: Table 1 coefficients: Temperature -0.00173, Precipitation 0.0924, DefPPG 0.00720, Denver -0.140, Constant1 0.0671, Hang time 0.180, Constant2 -0.798; altitude Denver 2.1-yard gross, 3.1-yard net, approximate 2.5 yards, 0.14 EP; Equation (1) final metric; Section 3.3 data availability, EPA/P correlates +0.78 with gross average, +0.82 effective gross, YdsTEZc60, Equation (2)
- Page 210: Section 4.1 2013 punting leaders, Shane Lechler +12.6 EPA +0.143 EPA/P, 2-14 team 26.8 points allowed, Matthew Bosher +5.86, Thomas Morstead +4.48, Marquette King and Brandon Fields ranked 10th and 16th in EPA/P despite top gross/net
- Page 211: Section 4.2 salaries, first half-second half correlation +0.67 EPA/P, hang time +0.74, fly +0.66, gross +0.57, net +0.46, effective gross +0.36, touchback % +0.19, effective net +0.18; replacement level -0.050 EPA/P; 80 punts = -4 EPA; 35 EPA = one win (Harvard 2012); $15 million per marginal win (Stuart 2013); Lechler worth ~$7 million; Andy Lee $4 million salary ranked 17th +0.31 EPA; veteran regression 1.08 EPA per million dollars; veterans -0.75 EPA $1.86M salary, rookies +1.26 EPA $0.48M salary
- Page 212: References
- Page 213: Appendix A table with full 2013 punter metrics

Now let me structure the response.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. I need to derive the EPA model from the paper, trace assumptions, identify gray zones (e.g., visual estimation to nearest yard, stopwatch hang time mean of three, Denver altitude small sample size, replacement level arbitrary at -0.050 EPA/P, 35 EPA = 1 win assumption, cross-validation 10,000 repetitions two-fold, etc.).

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations from the paper or derived from it, with units, page citations, exact breakdown. I should write out:
- EYA = actual downfield flight - (modeled post-bounce "return" + expected effective net distance)
- Hang time adjustment: 0.180 · hangtime - 0.798 (EP units)
- Temperature coefficient: -0.00173 EP/°F
- Precipitation: +0.0924 EP (binary)
- DefPPG: +0.00720 EP per point per game allowed
- Denver: -0.140 EP
- Constant1: 0.0671
- Constant2: -0.798
- 0.557 EP change per yard of field position away from end zones
- Extra second hang time worth just over 3 yards (since 0.180 / 0.557 ≈ 0.323 EP per second? Wait, paper says "an extra second of hang time is worth just over three yards." Let me check: 0.180 EP per second / 0.557 EP per yard = 0.323 yards? That doesn't match. Wait: 0.180 EP/sec divided by 0.557 EP/yard = 0.323 yards/sec? No, EP per second divided by EP per yard = yards per second. 0.180/0.557 = 0.323 yards. That's not "just over three yards." Let me re-read the paper carefully.

Page 208: "Hang time is a predictive factor only on long-field punts landing in-bounds between the 10-yard-line and 30-yard-line, and the fit adjustment to EPA is 0.180 · hangtime – 0.798, with the constant term ensuring a mean value of zero across all punts. Comparing the hang time coefficient to the 0.557 EP change associated with yard of field position away from the end zones, we find that an extra second of hang time is worth just over three yards."

Wait: 0.180 EP per second. 0.557 EP per yard. So 1 second = 0.180 EP = 0.180 / 0.557 yards = 0.323 yards. That's not three yards. Did I misread? Maybe the coefficient is different? Let me check Table 1 on page 209: Hang time (sec)# | 0.180. And constant -0.798.

Maybe the paper means that the *range* of hang times (e.g., 4.0 to 4.6 seconds, difference 0.6 sec) times 0.180 = 0.108 EP, divided by 0.557 = 0.194 yards? Still not three.

Wait, maybe I need to read it differently. "Comparing the hang time coefficient to the 0.557 EP change associated with yard of field position away from the end zones, we find that an extra second of hang time is worth just over three yards." Perhaps there is a typo in my reading or the paper. Let's compute: if 1 yard = 0.557 EP, then 3 yards = 1.671 EP. 1.671 / 0.180 = 9.28 seconds. That doesn't make sense.

Alternatively, maybe the coefficient is per 0.1 seconds? No, table says Hang time (sec) 0.180.

Perhaps the paper meant "just over three-tenths of a yard" or there's a misprint. However, I must faithfully report what the paper says without inventing fake equations. I should cite the paper's claim exactly and note the dimensional analysis if needed, but I shouldn't "correct" it with a toy equation. I can state the paper's claim verbatim and note the units.

Actually, looking carefully: "0.557 EP change associated with yard of field position" — maybe this is EP per *something else*? No, it says yard. Let me just quote it exactly and not resolve the apparent dimensional discrepancy, or note it as a gray zone. Actually, 0.180 EP/sec. If hang time varies by about 1 second (e.g., 4.0 vs 5.0), that's 0.180 EP. At 0.557 EP/yard, that's 0.323 yards. So the paper's verbal claim "just over three yards" seems inconsistent with the printed coefficient unless there's a missing factor of 10 or the coefficient is actually 1.80. But Table 1 clearly says 0.180. I should flag this as a gray-zone audit item in THINK_TRACE without inventing a correction.

Other equations:
- EPA/P correlation with gross average: +0.78
- Effective gross: +0.82
- YdsTEZc60: cap at 60, negative correlation
- Equation (2) estimated EPA/P from EffGross and YdsTEZc60 (not explicitly given as formula, but referenced)
- Season half correlation: +0.67 EPA/P
- Replacement level: -0.050 EPA/P
- 80 punts * -0.050 = -4 EPA
- 35 EPA = 1 win (Harvard 2012)
- $15 million per win (Stuart 2013)
- Lechler: +12.61 EPA, 16.61 EPA above replacement, ~0.47 win, ~$7 million value
- Veteran regression: +1.08 EPA per $1 million salary

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Trace from Berry & Berry (1985), Morrison & Kalwani (1993), Bilder & Loughin (1998), Clark et al. (2013), Pasteur & Cunningham-Rhoads (2014), Burke (2010, 2014a, 2014b), Romer (2006), Lisk (2008), Beuoy (2012), Tymins (2014). Multi-week traps: first-half vs second-half 2013 correlation, season-to-season persistence needed but only single season available, small sample sizes for Denver altitude, blocked punts excluded, visual estimation errors.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is a more abstract section. I need to interpret "crisis habit regression" as punters reverting to traditional stats (gross/net) under pressure (Pro Bowl selections based on yardage), "counter-trap" as the EPA model correcting for coverage/field position, "clock" as half-season split and persistence over time. Discuss how GMs/coaches regress to habit (raw distance) when evaluating punters (crisis = Pro Bowl selection, contract negotiations), while the model offers a counter-trap (EPA/P), and the clock is the week-to-week/season-to-season reliability.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Discuss physical principles: altitude air density affects drag (Denver), wind decomposition headwind/tailwind/crosswind, temperature effect on ball pressure/distance, precipitation reducing distance, biomechanics of hang time vs coverage, landing point near sideline/goal line, visual estimation to nearest yard introduces error, hang time stopwatch mean of three measurements has human reaction time limits, blocked punts excluded creates survivorship bias.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some kind of counterfactual veto. I need to create 3 scenarios that are verifiable and make predictions. They should relate to the paper's model. For example:
1. Veto: If a punt lands inside the 10 with fly distance < 40 yards, the model's post-bounce adjustment from Fig 12/Fig 14 should predict a specific next LOS; verify against play-by-play. Prediction: punts landing 5-10 yard line have best outcomes (Fig 10), but if fly distance is 50+ to same spot, return is longer by ~0.5 yard per extra flight yard.
2. Veto: Hang time coefficient only applies to punts landing between receiving team's 10-30 yard lines on long-field punts. If applied to short-field punts, predictive error increases (cross-validation showed not predictive). Prediction: adding hang time to short-field model does not reduce out-of-sample MSE.
3. Veto: Denver altitude effect (+2.5 yards gross, +3.1 yards net long-field) applies only to Denver; visiting punters at Denver should show ~0.14 EP boost, but if a dome team (no wind/precipitation) punter plays in Denver, the temperature/precipitation coefficients should not apply, only altitude. Prediction: the model overestimates penalty for cold/precip in Denver if altitude not separated.

I need to ensure total word count >= 1000 words across all sections. THINK_TRACE alone >=400.

Let me draft carefully, ensuring no betting lines. No spreads, totals, moneylines, odds. I can mention salaries, EPA, wins, but not betting odds.

I need to include [PAGE N] citations. The source text has page numbers in the header/footer. I'll cite them like [PAGE 208], etc.

Let's write.

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

I must be careful with LaTeX formatting. Use proper math mode.

Let's estimate word counts:
THINK_TRACE: 450-500 words
SOURCE_OPERATORS_AND_EQUATIONS: 250-300 words
RETROCAUSAL_GENEALOGY: 200-250 words
RECURSIVE_THEORY_OF_MIND: 200-250 words
CROSS_LAYER_VETO_ADJUDICATION: 200-250 words
RLVR_COUNTERFACTUAL_VETOES: 150-200 words

Total should be ~1400-1700 words. Good.

Now, writing content.

THINK_TRACE: Deep derivation.
- Start with the problem: traditional metrics (gross, net, inside-20, TB%) confound punter skill with coverage, field position, touchback NFL scoring rule.
- Paper's solution: flight-based metric using landing point and fly distance.
- Data: 2,526 punts 2013, minus 16 blocked = 2,510. Video + stopwatch (mean of 3), weather hourly, wind decomposition via 16-point compass and stadium orientation.
- Stage 1: Model post-bounce net yardage as function of landing point and fly distance using modified ridge estimator (d'Errico 2005) to smooth empirical data [PAGE 208]. Contour plot Fig 14 [PAGE 208]. Key result: each extra yard of flight distance increases expected return by ~0.5 yard, remaining 0.5 yard net gain [PAGE 208]. This is the core "flight-based" insight: distance alone overcredits long punts because coverage has farther to run.
- Stage 2: EYA = actual downfield flight – (modeled post-bounce "return" + expected effective net distance) [PAGE 208]. Then EPA by mapping yardage to expected points table from Burke (2014a) [PAGE 207].
- Stage 3: Add controls in punter's control: hang time (only predictive for long-field punts landing in-bounds between receiving 10-30; adjustment 0.180·hangtime – 0.798 EP [PAGE 208]), lateral edge distance (insufficient evidence, excluded [PAGE 208]).
- Stage 4: Add exogenous controls for long-field punts only (at/inside punting team's 40): temperature (–0.00173 EP/°F), precipitation (+0.0924 EP binary), DefPPG (+0.00720 EP per point allowed), Denver altitude (–0.140 EP, approx 2.5 yards) [PAGE 208-209, Table 1].
- Gray zones: visual estimation to nearest yard introduces ±0.5 yd systematic error; hang time stopwatch mean of 3 has human reaction lag (~0.1-0.2 s) but averaged; Denver sample small (roughly half punts by one punter), altitude effect estimated 1.6-3.5 yards, settled on 2.5 yards [PAGE 209]; replacement level set arbitrarily at –0.050 EPA/P (~20th percentile) [PAGE 210]; 35 EPA = 1 win and $15M/win are external assumptions from Harvard (2012) and Stuart (2013) [PAGE 210]; single-season 2013 only, half-season correlation +0.67 not full season-to-season persistence [PAGE 211].
- Dimensional flag: Table 1 hang time coefficient 0.180 EP/sec vs 0.557 EP/yard implies ~0.32 yd/sec, yet text claims "just over three yards" per extra second [PAGE 208]; unreconciled in source, treat as gray zone.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
List equations with units and page cites.
- EYA equation
- Hang time adjustment
- Environmental coefficients table in LaTeX array
- EP per yard 0.557
- Correlations
- Replacement level calculation
- Veteran salary slope

RETROCAUSAL_GENEALOGY: Lineage.
- Berry & Berry 1985, Morrison & Kalwani 1993, Bilder & Loughin 1998 for FG.
- Clark et al. 2013, Pasteur & Cunningham-Rhoads 2014 for kicker EPA.
- Burke 2010 for punt field position model.
- Romer 2006, Burke 2008 for EP valuation.
- Lisk 2008, Beuoy 2012, Tymins 2014 for punter context.
- Multi-week traps: only 2013 flight data; half-season split +0.67; no multi-season flight dataset; Denver small sample; blocked punts excluded creating survivorship bias.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit: GMs and Pro Bowl voters regress to gross/net yardage under uncertainty; King/Fields top gross/net but ranked 10th/16th EPA/P; Andy Lee highest salary $4.075M ranked 17th +0.31 EPA [PAGE 210-211].
- Counter-trap: EPA/P strips coverage and field position; Lechler +12.61 EPA on 2-14 Texans recognized by PFF #1 [PAGE 210].
- Clock: half-season reliability +0.67 EPA/P, second only to hang time +0.74; but full season-to-season skill persistence untested [PAGE 211]. Rookie contracts vs veterans: rookies +1.26 EPA at $0.48M vs veterans –0.75 EPA at $1.86M [PAGE 211], suggesting market inefficiency/clock mismatch.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical: altitude air density reduces drag → longer flight; Denver binary variable [PAGE 209].
- Wind: headwind/tailwind/crosswind via trigonometry from 16-point compass and stadium orientation [PAGE 204]; crosswind strongest correlation but did not improve predictive accuracy [PAGE 209].
- Weather: temperature –0.00173 EP/°F (1°F drop = tiny; 33°F drop = 1 yard negative), precipitation +0.0924 EP (wait sign? Table says Precipitation 0.0924. Text says "presence of precipitation reduces a punt by about 1.7 yards" — wait sign? Coefficient positive 0.0924 but text says reduces punt? Let's check page 209: "The coefficients indicated that one-yard-per-punt negative impacts are expected for a temperature drop of 33° F, or for a defense giving up an additional 7.7 points per game. The presence of precipitation reduces a punt by about 1.7 yards on average, according to the model." Table 1 says Precipitation coefficient 0.0924. This is another sign/gray zone: positive coefficient in EP model but text says reduces punt? Actually EPA model: positive EPA means outperformed expectations. Precipitation coefficient 0.0924 might mean precip increases EPA? That contradicts text. I should flag this as a gray zone/sign inconsistency without resolving it. Or maybe I misread. Let me check: Table 1: Precipitation* | 0.0924. Text: "presence of precipitation reduces a punt by about 1.7 yards". If coefficient is positive in EPA model, that would mean precip increases expected points added? That seems wrong physically. Could be that the variable is coded as "no precipitation = 1"? Unclear. I'll cite both and note the sign/gray zone.
- Biomechanical: hang time gives coverage time to get downfield; each extra yard of flight adds ~0.5 yard return [PAGE 208]; punts landing 5-10 best outcomes [PAGE 206 Fig 10]; fair catches have shorter flight inside 30 [PAGE 207 Fig 13].
- Measurement veto: visual estimation nearest yard; stopwatch mean of three; penalties adjusted via next play LOS [PAGE 205].

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.
Scenario 1: Hang time domain restriction. Veto: model applies hang time term only to long-field punts landing in-bounds between opponent 10-30. Counterfactual: apply same 0.180·hangtime – 0.798 adjustment to short-field punts (outside 40-yard line or landing outside 10-30). Prediction: out-of-sample cross-validation MSE increases; two-fold cross validation with 10,000 repetitions [PAGE 208] showed hang time not predictive for short-field. Verifiable by re-running ridge estimator on 2013 short-field subset.
Scenario 2: Denver altitude isolation. Veto: if a game is in Denver, temperature and precipitation coefficients should not be stacked with altitude without controlling for air density interactions; the model approximates Denver long effect at 2.5 yards (0.14 EP) from 2010-14 Broncos games [PAGE 209]. Counterfactual: compare visiting punter at Denver vs same punter at sea-level road game with identical temperature/precip. Prediction: residual EPA for Denver games remains systematically positive by ~0.14 EP after removing weather terms; small sample (roughly half by one punter) means confidence interval wide [PAGE 209].
Scenario 3: Replacement-level salary arbitration. Veto: replacement level set at –0.050 EPA/P (~20th percentile) [PAGE 210]. Counterfactual: if actual replacement baseline were the observed worst starter (Zoltan Mesko –0.171 EPA/P before release [PAGE 210]) or the 34-punter average, Lechler's surplus value changes. Prediction: using Mesko as baseline instead of –0.050 increases Lechler's EPA-over-replacement from 16.61 to ~18.4 EPA (since –0.171 vs –0.050 difference = 0.121 * 80 punts ≈ 9.7 EPA added? Wait, if baseline is lower, surplus is larger. But I shouldn't invent exact calculation unless I frame it as prediction). Better: prediction that teams paying >$2M to veterans with negative EPA (7 highest paid had negative aggregate EPA [PAGE 211]) are overpaying relative to replacement-level rookie alternatives averaging +1.26 EPA at $0.48M [PAGE 211]. Verifiable by comparing 2014-2015 salaries and EPA/P if data existed, but within paper it's a counterfactual market veto.

I need to be careful not to invent fake ratios. I can do simple arithmetic based on paper's numbers as long as I don't present it as a new physical law. The user said "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." Simple arithmetic derivations from stated coefficients are okay if clearly derived. But I'll avoid deriving new composite metrics.

Let's write it out fully now, ensuring citations.

Word count check as I write.

I will now compose the final response.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s central derivation proceeds in four nested layers, each removing a confound that plagued traditional punting statistics. First, the authors reject gross distance, net distance, inside-20 percentage, and touchback percentage because these metrics entangle punter kick quality with coverage-unit quality, returner skill, field position at the snap, and the NFL’s touchback scoring rule [PAGE 202]. A punt from midfield caught at the 10 and returned to the 15 is credited as 40 gross / 35 net, while a touchback from the same spot is credited as 50 gross / 50 net even though the first outcome is clearly superior [PAGE 202]. The paper’s remedy is to treat the punt’s influence as ending at the ball’s landing point, making downfield flight distance the primary measure [PAGE 204].

The data layer required original collection because the NFL does not publish punt flight distance. From the 2013 season, 2,526 punts were tracked via video, excluding 16 blocked punts, leaving 2,510 usable observations [PAGE 204]. Landing point and endpoint were visually estimated to the nearest yard; hang time was captured by stopwatch as the mean of three measurements [PAGE 204]. Hourly weather was matched to game quarters, and wind was decomposed into headwind/tailwind and crosswind components using a 16-point compass rose and stadium orientation from Google Maps [PAGE 204]. Penalties were reconciled by examining the next play’s line of scrimmage; 257 of the 2,510 punts carried an enforced penalty, with net effects of +0.32 yards against the punting team, –0.69 yards against the receiving team, and –0.49 yards of negated returns per punt [PAGE 205].

The modeling layer begins with a modified ridge estimator (d’Errico, 2005) to smooth empirical post-bounce outcomes over landing point and fly distance [PAGE 208]. The resulting contour surface (Fig. 14) shows that expected next line of scrimmage depends on both variables [PAGE 208]. Critically, each additional yard of flight distance increases the expected return by approximately half a yard, leaving the other half as net field-position gain [PAGE 208]. This yields Expected Yards Added (EYA) as actual downfield flight minus the modeled post-bounce “return” plus expected effective net distance for that field position [PAGE 208]. Distances are then converted to Expected Points Added (EPA) using Burke’s (2014a) expected-points table, because yards near the goal lines are worth more than midfield yards [PAGE 207].

The refinement layer adds controls. Hang time is predictive only for long-field punts landing in-bounds between the receiving team’s 10- and 30-yard lines, with an EPA adjustment of 0.180 · hangtime – 0.798 [PAGE 208]. The constant forces a mean-zero adjustment across all punts [PAGE 208]. Lateral landing point (edge distance to sideline) was tested but excluded for insufficient evidence [PAGE 208]. Exogenous factors matter only for long-field punts (line of scrimmage at or inside the punting team’s 40): temperature (–0.00173 EP/°F), precipitation (+0.0924 EP binary), DefPPG coverage proxy (+0.00720 EP per point allowed per game), and Denver altitude (–0.140 EP, approximated at 2.5 yards) [PAGE 208–209, Table 1].

Gray-zone audit: (1) visual estimation to the nearest yard introduces unquantified rounding error; (2) stopwatch hang time as a mean of three human measurements carries reaction-lag bias; (3) the Denver altitude effect is based on small samples, with estimates ranging from 1.6 to 3.5 yards before the authors fix 2.5 yards [PAGE 209]; (4) replacement level is set arbitrarily at –0.050 EPA/P, roughly the 20th percentile of starters [PAGE 210]; (5) the win valuation (35 EPA = 1 win; $15 million per win) is imported from Harvard (2012) and Stuart (2013), not derived from the punt data [PAGE 210]; (6) only one season (2013) of flight data exists, so the half-season correlation of +0.67 in EPA/P is a proxy for, not proof of, year-to-year skill persistence [PAGE 211]; (7) a dimensional tension appears between the printed hang-time coefficient (0.180 EP/sec) and the text’s claim that one extra second is worth “just over three yards,” given 0.557 EP per yard of field position [PAGE 208]. These are not fatal flaws, but they bound the model’s domain of validity.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(x\) denote pre-punt field position measured as yards to the opponent’s end zone, \(f\) the measured fly distance in yards, and \(l\) the landing point as a yard line relative to the receiving team’s goal line.

Post-bounce expected next line of scrimmage, smoothed via modified ridge estimator [PAGE 208]:
\[
\widehat{\mathrm{NOS}} = \mathcal{S}(l, f) \quad \text{[yards]}
\]
where \(\mathcal{S}\) is the smoothed contour surface from Fig. 14. Empirically, \(\partial \mathbb{E}[\text{return}]/\partial f \approx 0.5\) yard per yard of flight, implying a 0.5-yard net field-position gain per extra yard of flight [PAGE 208].

Expected Yards Added per punt [PAGE 208]:
\[
\mathrm{EYA} = f - \left( \widehat{\mathrm{post\text{-}bounce\ return}} + \widehat{\mathrm{effective\ net\ distance}}(x) \right) \quad \text{[yards]}
\]

Expected Points conversion using Burke (2014a) EP table [PAGE 207]:
\[
\mathrm{EPA} = \Delta \mathrm{EP}(\text{field position change}) \quad \text{[expected points]}
\]
with marginal valuation of \(0.557\) EP per yard of field position away from the end zones [PAGE 208].

Hang-time adjustment, active only for long-field punts landing in-bounds at receiving-yard lines 10 through 30 inclusive [PAGE 208]:
\[
\Delta \mathrm{EPA}_{\mathrm{hang}} = 0.180 \cdot h - 0.798 \quad \text{[EP]}, \quad h \text{ in seconds}
\]
Constant term \(-0.798\) enforces zero mean across all punts [PAGE 208]. Table 1 units: EP per second of hang time.

Environmental and coverage adjustments, active only for punts from at/inside the punting team’s 40-yard line [PAGE 208–209, Table 1]:
\[
\Delta \mathrm{EPA}_{\mathrm{env}} =
-0.00173\,T + 0.0924\,P + 0.00720\,D - 0.140\,\mathbb{I}_{\mathrm{Denver}} + 0.0671
\]
where \(T\) is temperature in °F, \(P \in \{0,1\}\) is precipitation, \(D\) is defensive points per game allowed (DefPPG), and \(\mathbb{I}_{\mathrm{Denver}}\) is the altitude indicator [PAGE 209]. Coefficient units: EP/°F, EP (binary), EP per DefPPG point, EP (Denver), EP (intercept).

A one-yard-per-punt negative impact corresponds to a 33°F temperature drop or a 7.7-point increase in DefPPG [PAGE 209]. Precipitation is associated with roughly a 1.7-yard reduction in the text despite the positive table sign, a source-level sign tension flagged for audit [PAGE 209].

Denver altitude: 2.1-yard gross and 3.1-yard net effect on long-field punts from 2010–14 Broncos games; approximated at 2.5 yards or 0.14 EP [PAGE 209]. No hang-time impact detected at altitude [PAGE 209].

Alternative accessible-statistic estimator [PAGE 209]:
\[
\mathrm{EPA/P} \approx \beta_0 + \beta_1(\mathrm{EffGross}) + \beta_2(\mathrm{YdsTEZc60})
\]
with \(\mathrm{YdsTEZc60} = \min(100 - \text{LOS}, 60)\) averaged per punter; correlation with EPA/P is +0.78 for gross average and +0.82 for effective gross average [PAGE 209].

Reliability and valuation [PAGE 210–211]:
\[
r(\text{first-half EPA/P, second-half EPA/P}) = +0.67
\]
Comparison half-season correlations: hang time +0.74, fly +0.66, gross +0.57, net +0.46, effective gross +0.36, touchback percentage +0.19, effective net +0.18 [PAGE 211].

Replacement level: \(-0.050\) EPA/P; over 80 punts this equals \(-4\) EPA [PAGE 210]. External valuation anchors: 35 EPA \(\approx\) 1 win [PAGE 210]; 1 marginal win \(\approx\) $15 million salary [PAGE 210].

Veteran salary regression [PAGE 211]:
\[
\Delta \mathrm{EPA} = 1.08 \times \Delta(\text{salary in \$ millions})
\]
among 21 non-rookie punters. Veterans averaged –0.75 EPA at $1.86M salary; rookies averaged +1.26 EPA at $0.48M salary [PAGE 211].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits inside a multi-decade analytic lineage for kicking evaluation. The earliest cited models for placekickers are Berry & Berry (1985) and Morrison & Kalwani (1993), which modeled field-goal success probability as a function of distance [PAGE 201]. Bilder & Loughin (1998) added weather and game situation once play-by-play accounts became widely available [PAGE 201]. Clark et al. (2013) and Pasteur & Cunningham-Rhoads (2014) extended this to multiple seasons, estimating generic kicker success probability per attempt and converting to EPA [PAGE 201–202]. For punting specifically, Burke (2010) generated expected-points-per-punt and win-probability-added models using five seasons (2000–2009) and field-position adjustment [PAGE 202]. Beuoy (2012) and Tymins (2014) documented punter improvement and touchback behavior over multiple seasons [PAGE 202]. Romer (2006) and Burke (2008) supplied the expected-points foundation that makes EPA the common unit across positions [PAGE 207].

A central multi-week trap is that the flight-based model is built entirely from the 2013 season. The authors explicitly state that “a study of several consecutive seasons is needed” to quantify factor impacts and to compute season-to-season correlations [PAGE 212]. The only temporal reliability evidence available is a within-season split: weeks 1–9 versus weeks 10–17 of 2013, yielding +0.67 correlation in EPA/P [PAGE 211]. This is suggestive of skill persistence but is not equivalent to year-over-year stability, and the sample sizes are small (punters with 16+ punts in each half) [PAGE 211]. Another trap is survivorship: blocked punts are excluded from the dataset, yet blocked and partially blocked punts are precisely the mishaps where blame allocation among punter, snapper, and blockers is most ambiguous [PAGE 202]. The Denver altitude variable is a binary trap because only one NFL stadium sits at significant altitude, roughly half of Denver punts are taken by one punter, and the visiting-versus-home comparison suffers from small samples [PAGE 209]. Finally, the replacement-level baseline (-0.050 EPA/P) is a cross-sectional percentile choice, not a longitudinal estimate derived from backup punters, because teams carry only one punter and mid-season changes are uncommon [PAGE 210]. Any multi-week projection of punter value that ignores these traps will overstate the precision of EPA/P.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: when evaluation stakes are high—Pro Bowl selection, contract negotiation, starting-job security—decision-makers tend to regress to the most legible traditional statistics: gross distance, net distance, and hang time as broadcast anecdote [PAGE 202]. The paper documents exactly this failure mode: Marquette King and Brandon Fields ranked first and second in the league in gross and net distance, with King also leading in fly distance, yet both ranked only 10th and 16th in EPA/P because they benefited from mild temperatures, routine long-field situations, low touchback percentages, and low hang time [PAGE 210]. Andy Lee, the highest-paid punter at just over $4 million in cap hit, ranked 17th in EPA/P with +0.31 EPA [PAGE 210–211]. Seven of the highest-paid veterans (salary ≥ $2 million) produced negative EPA in aggregate [PAGE 211]. The market habitually overweights raw yardage and underweights field-position context and coverage independence.

Counter-trap: the EPA/P model is designed to break that habit by isolating the punter’s contribution to the kick itself—landing point, flight distance, hang time—while statistically removing coverage quality, returner randomness, and field-position confounding [PAGE 204–208]. Shane Lechler exemplifies the counter-trap: on a 2–14 Texans team that allowed 26.8 defensive points per game, he ranked 13th in net yardage but first in EPA (+12.61) and EPA/P (+0.143), and was independently ranked #1 by Pro Football Focus [PAGE 210]. The model reveals that traditional net yardage undercredited him because his defense’s poor field position forced more short-field punts where touchback risk constrained gross distance [PAGE 210].

Clock: the relevant time axis is not a single game but half-season and season-to-season reliability. The first-half-to-second-half EPA/P correlation of +0.67 is second only to hang time (+0.74) among the paper’s statistics, suggesting EPA/P captures a persistent skill rather than noise [PAGE 211]. However, the clock has not run long enough: only one season of flight data exists, so multi-year convergence of the metric cannot yet be adjudicated [PAGE 212]. The contract-structure clock also distorts the market: rookies averaged +1.26 EPA at $0.48 million while veterans averaged –0.75 EPA at $1.86 million [PAGE 211], indicating that salary is poorly aligned with measured output and that the “crisis habit” of paying veterans on reputation persists even when the clock says the skill is measurable and somewhat stable.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: altitude is treated as a binary Denver variable because it is the only NFL stadium at significant elevation; reduced air density should decrease drag and lengthen flight, a principle supported by field-goal kicking research [PAGE 209]. The authors estimate a 2.1-yard gross and 3.1-yard net effect at Denver from 2010–14, approximated as 2.5 yards (0.14 EP) for long-field punts [PAGE 209]. A veto condition: if air-density physics does not translate to punting because punters adjust power rather than launch for maximum distance, the Denver term is a spurious confounder. The paper found no hang-time impact at Denver (home punter slightly more hang time at home, visiting punters marginally less in Denver), which partially vindicates the altitude term as a distance effect rather than a flight-time effect [PAGE 209].

Biomechanical layer: hang time matters because it grants the coverage unit time to get downfield; each extra yard of flight distance forces coverage to run farther, increasing expected return by about 0.5 yard and netting only 0.5 yard of field position [PAGE 208]. Punts landing between the 5- and 10-yard lines produce the best next-line-of-scrimmage outcomes [PAGE 206, Fig. 10]; punts landing very near the end zone tend to be long punts, while those landing between the 10 and 15 tend to be short, suggesting over-kicking and under-kicking respectively [PAGE 206, Fig. 11]. Fair catches are associated with shorter flight distances for punts landing inside the 30 [PAGE 207, Fig. 13]. A biomechanical veto: if hang time is correlated with leg speed rather than coverage-relevant loft, the 0.180 EP/sec coefficient may capture a different physical phenomenon than advertised.

Weather layer: wind is decomposed into headwind/tailwind and crosswind via 16-point compass and stadium orientation [PAGE 204]. Crosswind had the strongest correlation among environmental factors but did not improve predictive accuracy when added to the temperature/precipitation/DefPPG model [PAGE 209]. Temperature coefficient is –0.00173 EP/°F; a 33°F drop yields a one-yard-per-punt negative impact [PAGE 209]. Precipitation reduces a punt by about 1.7 yards on average according to the text, though Table 1 lists a positive coefficient, creating a sign inconsistency that vetoes clean physical interpretation until the coding convention is clarified [PAGE 209].

Measurement layer: landing point and endpoint were visually estimated to the nearest yard [PAGE 204]; hang time was a stopwatch mean of three measurements [PAGE 204]. These human-observation bounds introduce ±0.5-yard and reaction-lag uncertainty that are not propagated into the EPA confidence intervals. Penalties were adjusted by reading the next play’s line of scrimmage [PAGE 205]. Because the model conditions on landing point and fly distance, any systematic error in visual estimation biases the EYA surface nonlinearly, especially near the goal line where touchback probability changes precipitously between the 5 and 10 yard lines [PAGE 206, Fig. 8–9].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Hang-time domain misapplication. The hang-time term (0.180 · hangtime – 0.798 EP) is valid only for long-field punts landing in-bounds between the receiving team’s 10- and 30-yard lines [PAGE 208]. Counterfactual: apply the same linear hang-time adjustment to short-field punts or to punts landing outside the 10–30 interval. Verifiable prediction: in a two-fold cross-validation with 10,000 repetitions [PAGE 208], out-of-sample mean-squared prediction error will increase relative to the restricted model, because the paper reports hang time was not predictive for short-field punts. If a re-fit on the 2013 short-field subset yields a statistically indistinguishable-from-zero hang-time coefficient, the domain restriction is confirmed.

Veto Scenario 2 — Denver altitude stacking. The model approximates the Denver long-field effect at 2.5 yards (0.14 EP) derived from 2010–14 Broncos games, while also including temperature and precipitation coefficients for long-field punts [PAGE 209]. Counterfactual: compare a visiting punter’s EPA at Denver versus the same punter at a sea-level road game with identical temperature and precipitation, then subtract the modeled weather terms. Verifiable prediction: the residual Denver effect should be systematically near +0.14 EP; because the sample is small and roughly half of Denver punts involve one punter [PAGE 209], the confidence interval will be wide, and any claim of precision beyond ±0.05 EP is unsupported. If the residual is indistinguishable from zero, the altitude binary is vetoed as a confounder of unmeasured stadium or punter-specific effects.

Veto Scenario 3 — Replacement-level salary arbitration. The paper sets replacement level at –0.050 EPA/P (~20th percentile of starters) and values Shane Lechler at +12.61 EPA, or 16.61 EPA above replacement [PAGE 210]. Counterfactual: re-baseline replacement at the observed worst starter, Zoltan Mesko at –0.171 EPA/P before release [PAGE 210], or at the 34-punter sample mean. Verifiable prediction: under a lower replacement baseline, Lechler’s surplus EPA increases and the implied salary value (at $15M per 35 EPA [PAGE 210]) rises above the ~$7 million figure; conversely, teams paying ≥$2 million to veterans with negative aggregate EPA [PAGE 211] are overpaying relative to rookie-contract punters averaging +1.26 EPA at $0.48 million [PAGE 211]. A season in which a replacement-level rookie outperforms a $2M+ veteran on EPA/P would falsify the salary-skill slope of 1.08 EPA per million dollars as a stable pricing rule.
</RLVR_COUNTERFACTUAL_VETOES><THINK_TRACE>
The paper’s central derivation proceeds in four nested layers, each removing a confound that plagued traditional punting statistics. First, the authors reject gross distance, net distance, inside-20 percentage, and touchback percentage because these metrics entangle punter kick quality with coverage-unit quality, returner skill, field position at the snap, and the NFL’s touchback scoring rule [PAGE 202]. A punt from midfield caught at the 10 and returned to the 15 is credited as 40 gross / 35 net, while a touchback from the same spot is credited as 50 gross / 50 net even though the first outcome is clearly superior [PAGE 202]. The paper’s remedy is to treat the punt’s influence as ending at the ball’s landing point, making downfield flight distance the primary measure [PAGE 204].

The data layer required original collection because the NFL does not publish punt flight distance. From the 2013 season, 2,526 punts were tracked via video, excluding 16 blocked punts, leaving 2,510 usable observations [PAGE 204]. Landing point and endpoint were visually estimated to the nearest yard; hang time was captured by stopwatch as the mean of three measurements [PAGE 204]. Hourly weather was matched to game quarters, and wind was decomposed into headwind/tailwind and crosswind components using a 16-point compass rose and stadium orientation from Google Maps [PAGE 204]. Penalties were reconciled by examining the next play’s line of scrimmage; 257 of the 2,510 punts carried an enforced penalty, with net effects of +0.32 yards against the punting team, –0.69 yards against the receiving team, and –0.49 yards of negated returns per punt [PAGE 205].

The modeling layer begins with a modified ridge estimator (d’Errico, 2005) to smooth empirical post-bounce outcomes over landing point and fly distance [PAGE 208]. The resulting contour surface (Fig. 14) shows that expected next line of scrimmage depends on both variables [PAGE 208]. Critically, each additional yard of flight distance increases the expected return by approximately half a yard, leaving the other half as net field-position gain [PAGE 208]. This yields Expected Yards Added (EYA) as actual downfield flight minus the modeled post-bounce “return” plus expected effective net distance for that field position [PAGE 208]. Distances are then converted to Expected Points Added (EPA) using Burke’s (2014a) expected-points table, because yards near the goal lines are worth more than midfield yards [PAGE 207].

The refinement layer adds controls. Hang time is predictive only for long-field punts landing in-bounds between the receiving team’s 10- and 30-yard lines, with an EPA adjustment of 0.180 · hangtime – 0.798 [PAGE 208]. The constant forces a mean-zero adjustment across all punts [PAGE 208]. Lateral landing point (edge distance to sideline) was tested but excluded for insufficient evidence [PAGE 208]. Exogenous factors matter only for long-field punts (line of scrimmage at or inside the punting team’s 40): temperature (–0.00173 EP/°F), precipitation (+0.0924 EP binary), DefPPG coverage proxy (+0.00720 EP per point allowed per game), and Denver altitude (–0.140 EP, approximated at 2.5 yards) [PAGE 208–209, Table 1].

Gray-zone audit: (1) visual estimation to the nearest yard introduces unquantified rounding error; (2) stopwatch hang time as a mean of three human measurements carries reaction-lag bias; (3) the Denver altitude effect is based on small samples, with estimates ranging from 1.6 to 3.5 yards before the authors fix 2.5 yards [PAGE 209]; (4) replacement level is set arbitrarily at –0.050 EPA/P, roughly the 20th percentile of starters [PAGE 210]; (5) the win valuation (35 EPA = 1 win; $15 million per win) is imported from Harvard (2012) and Stuart (2013), not derived from the punt data [PAGE 210]; (6) only one season (2013) of flight data exists, so the half-season correlation of +0.67 in EPA/P is a proxy for, not proof of, year-to-year skill persistence [PAGE 211]; (7) a dimensional tension appears between the printed hang-time coefficient (0.180 EP/sec) and the text’s claim that one extra second is worth “just over three yards,” given 0.557 EP per yard of field position [PAGE 208]. These are not fatal flaws, but they bound the model’s domain of validity.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(x\) denote pre-punt field position measured as yards to the opponent’s end zone, \(f\) the measured fly distance in yards, and \(l\) the landing point as a yard line relative to the receiving team’s goal line.

Post-bounce expected next line of scrimmage, smoothed via modified ridge estimator [PAGE 208]:
\[
\widehat{\mathrm{NOS}} = \mathcal{S}(l, f) \quad \text{[yards]}
\]
where \(\mathcal{S}\) is the smoothed contour surface from Fig. 14. Empirically, \(\partial \mathbb{E}[\text{return}]/\partial f \approx 0.5\) yard per yard of flight, implying a 0.5-yard net field-position gain per extra yard of flight [PAGE 208].

Expected Yards Added per punt [PAGE 208]:
\[
\mathrm{EYA} = f - \left( \widehat{\mathrm{post\text{-}bounce\ return}} + \widehat{\mathrm{effective\ net\ distance}}(x) \right) \quad \text{[yards]}
\]

Expected Points conversion using Burke (2014a) EP table [PAGE 207]:
\[
\mathrm{EPA} = \Delta \mathrm{EP}(\text{field position change}) \quad \text{[expected points]}
\]
with marginal valuation of \(0.557\) EP per yard of field position away from the end zones [PAGE 208].

Hang-time adjustment, active only for long-field punts landing in-bounds at receiving-yard lines 10 through 30 inclusive [PAGE 208]:
\[
\Delta \mathrm{EPA}_{\mathrm{hang}} = 0.180 \cdot h - 0.798 \quad \text{[EP]}, \quad h \text{ in seconds}
\]
Constant term \(-0.798\) enforces zero mean across all punts [PAGE 208]. Table 1 units: EP per second of hang time.

Environmental and coverage adjustments, active only for punts from at/inside the punting team’s 40-yard line [PAGE 208–209, Table 1]:
\[
\Delta \mathrm{EPA}_{\mathrm{env}} =
-0.00173\,T + 0.0924\,P + 0.00720\,D - 0.140\,\mathbb{I}_{\mathrm{Denver}} + 0.0671
\]
where \(T\) is temperature in °F, \(P \in \{0,1\}\) is precipitation, \(D\) is defensive points per game allowed (DefPPG), and \(\mathbb{I}_{\mathrm{Denver}}\) is the altitude indicator [PAGE 209]. Coefficient units: EP/°F, EP (binary), EP per DefPPG point, EP (Denver), EP (intercept).

A one-yard-per-punt negative impact corresponds to a 33°F temperature drop or a 7.7-point increase in DefPPG [PAGE 209]. Precipitation is associated with roughly a 1.7-yard reduction in the text despite the positive table sign, creating a sign inconsistency that vetoes clean physical interpretation until the coding convention is clarified [PAGE 209].

Denver altitude: 2.1-yard gross and 3.1-yard net effect on long-field punts from 2010–14 Broncos games; approximated at 2.5 yards or 0.14 EP [PAGE 209]. No hang-time impact detected at altitude [PAGE 209].

Alternative accessible-statistic estimator [PAGE 209]:
\[
\mathrm{EPA/P} \approx \beta_0 + \beta_1(\mathrm{EffGross}) + \beta_2(\mathrm{YdsTEZc60})
\]
with \(\mathrm{YdsTEZc60} = \min(100 - \text{LOS}, 60)\) averaged per punter; correlation with EPA/P is +0.78 for gross average and +0.82 for effective gross average [PAGE 209].

Reliability and valuation [PAGE 210–211]:
\[
r(\text{first-half EPA/P, second-half EPA/P}) = +0.67
\]
Comparison half-season correlations: hang time +0.74, fly +0.66, gross +0.57, net +0.46, effective gross +0.36, touchback percentage +0.19, effective net +0.18 [PAGE 211].

Replacement level: \(-0.050\) EPA/P; over 80 punts this equals \(-4\) EPA [PAGE 210]. External valuation anchors: 35 EPA \(\approx\) 1 win [PAGE 210]; 1 marginal win \(\approx\) $15 million salary [PAGE 210].

Veteran salary regression [PAGE 211]:
\[
\Delta \mathrm{EPA} = 1.08 \times \Delta(\text{salary in \$ millions})
\]
among 21 non-rookie punters. Veterans averaged –0.75 EPA at $1.86M salary; rookies averaged +1.26 EPA at $0.48M salary [PAGE 211].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits inside a multi-decade analytic lineage for kicking evaluation. The earliest cited models for placekickers are Berry & Berry (1985) and Morrison & Kalwani (1993), which modeled field-goal success probability as a function of distance [PAGE 201]. Bilder & Loughin (1998) added weather and game situation once play-by-play accounts became widely available [PAGE 201]. Clark et al. (2013) and Pasteur & Cunningham-Rhoads (2014) extended this to multiple seasons, estimating generic kicker success probability per attempt and converting to EPA [PAGE 201–202]. For punting specifically, Burke (2010) generated expected-points-per-punt and win-probability-added models using five seasons (2000–2009) and field-position adjustment [PAGE 202]. Beuoy (2012) and Tymins (2014) documented punter improvement and touchback behavior over multiple seasons [PAGE 202]. Romer (2006) and Burke (2008) supplied the expected-points foundation that makes EPA the common unit across positions [PAGE 207].

A central multi-week trap is that the flight-based model is built entirely from the 2013 season. The authors explicitly state that “a study of several consecutive seasons is needed” to quantify factor impacts and to compute season-to-season correlations [PAGE 212]. The only temporal reliability evidence available is a within-season split: weeks 1–9 versus weeks 10–17 of 2013, yielding +0.67 correlation in EPA/P [PAGE 211]. This is suggestive of skill persistence but is not equivalent to year-over-year stability, and the sample sizes are small (punters with 16+ punts in each half) [PAGE 211]. Another trap is survivorship: blocked punts are excluded from the dataset, yet blocked and partially blocked punts are precisely the mishaps where blame allocation among punter, snapper, and blockers is most ambiguous [PAGE 202]. The Denver altitude variable is a binary trap because only one NFL stadium sits at significant altitude, roughly half of Denver punts are taken by one punter, and the visiting-versus-home comparison suffers from small samples [PAGE 209]. Finally, the replacement-level baseline (-0.050 EPA/P) is a cross-sectional percentile choice, not a longitudinal estimate derived from backup punters, because teams carry only one punter and mid-season changes are uncommon [PAGE 210]. Any multi-week projection of punter value that ignores these traps will overstate the precision of EPA/P.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: when evaluation stakes are high—Pro Bowl selection, contract negotiation, starting-job security—decision-makers tend to regress to the most legible traditional statistics: gross distance, net distance, and hang time as broadcast anecdote [PAGE 202]. The paper documents exactly this failure mode: Marquette King and Brandon Fields ranked first and second in the league in gross and net distance, with King also leading in fly distance, yet both ranked only 10th and 16th in EPA/P because they benefited from mild temperatures, routine long-field situations, low touchback percentages, and low hang time [PAGE 210]. Andy Lee, the highest-paid punter at just over $4 million in cap hit, ranked 17th in EPA/P with +0.31 EPA [PAGE 210–211]. Seven of the highest-paid veterans (salary ≥ $2 million) produced negative EPA in aggregate [PAGE 211]. The market habitually overweights raw yardage and underweights field-position context and coverage independence.

Counter-trap: the EPA/P model is designed to break that habit by isolating the punter’s contribution to the kick itself—landing point, flight distance, hang time—while statistically removing coverage quality, returner randomness, and field-position confounding [PAGE 204–208]. Shane Lechler exemplifies the counter-trap: on a 2–14 Texans team that allowed 26.8 defensive points per game, he ranked 13th in net yardage but first in EPA (+12.61) and EPA/P (+0.143), and was independently ranked #1 by Pro Football Focus [PAGE 210]. The model reveals that traditional net yardage undercredited him because his defense’s poor field position forced more short-field punts where touchback risk constrained gross distance [PAGE 210].

Clock: the relevant time axis is not a single game but half-season and season-to-season reliability. The first-half-to-second-half EPA/P correlation of +0.67 is second only to hang time (+0.74) among the paper’s statistics, suggesting EPA/P captures a persistent skill rather than noise [PAGE 211]. However, the clock has not run long enough: only one season of flight data exists, so multi-year convergence of the metric cannot yet be adjudicated [PAGE 212]. The contract-structure clock also distorts the market: rookies averaged +1.26 EPA at $0.48 million while veterans averaged –0.75 EPA at $1.86 million [PAGE 211], indicating that salary is poorly aligned with measured output and that the “crisis habit” of paying veterans on reputation persists even when the clock says the skill is measurable and somewhat stable.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: altitude is treated as a binary Denver variable because it is the only NFL stadium at significant elevation; reduced air density should decrease drag and lengthen flight, a principle supported by field-goal kicking research [PAGE 209]. The authors estimate a 2.1-yard gross and 3.1-yard net effect at Denver from 2010–14, approximated as 2.5 yards (0.14 EP) for long-field punts [PAGE 209]. A veto condition: if air-density physics does not translate to punting because punters adjust power rather than launch for maximum distance, the Denver term is a spurious confounder. The paper found no hang-time impact at Denver (home punter slightly more hang time at home, visiting punters marginally less in Denver), which partially vindicates the altitude term as a distance effect rather than a flight-time effect [PAGE 209].

Biomechanical layer: hang time matters because it grants the coverage unit time to get downfield; each extra yard of flight distance forces coverage to run farther, increasing expected return by about 0.5 yard and netting only 0.5 yard of field position [PAGE 208]. Punts landing between the 5- and 10-yard lines produce the best next-line-of-scrimmage outcomes [PAGE 206, Fig. 10]; punts landing very near the end zone tend to be long punts, while those landing between the 10 and 15 tend to be short, suggesting over-kicking and under-kicking respectively [PAGE 206, Fig. 11]. Fair catches are associated with shorter flight distances for punts landing inside the 30 [PAGE 207, Fig. 13]. A biomechanical veto: if hang time is correlated with leg speed rather than coverage-relevant loft, the 0.180 EP/sec coefficient may capture a different physical phenomenon than advertised.

Weather layer: wind is decomposed into headwind/tailwind and crosswind via 16-point compass and stadium orientation [PAGE 204]. Crosswind had the strongest correlation among environmental factors but did not improve predictive accuracy when added to the temperature/precipitation/DefPPG model [PAGE 209]. Temperature coefficient is –0.00173 EP/°F; a 33°F drop yields a one-yard-per-punt negative impact [PAGE 209]. Precipitation reduces a punt by about 1.7 yards on average according to the text, though Table 1 lists a positive coefficient, creating a sign inconsistency that vetoes clean physical interpretation until the coding convention is clarified [PAGE 209].

Measurement layer: landing point and endpoint were visually estimated to the nearest yard [PAGE 204]; hang time was a stopwatch mean of three measurements [PAGE 204]. These human-observation bounds introduce ±0.5-yard and reaction-lag uncertainty that are not propagated into the EPA confidence intervals. Penalties were adjusted by reading the next play’s line of scrimmage [PAGE 205]. Because the model conditions on landing point and fly distance, any systematic error in visual estimation biases the EYA surface nonlinearly, especially near the goal line where touchback probability changes precipitously between the 5 and 10 yard lines [PAGE 206, Fig. 8–9].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Hang-time domain misapplication. The hang-time term (0.180 · hangtime – 0.798 EP) is valid only for long-field punts landing in-bounds between the receiving team’s 10- and 30-yard lines [PAGE 208]. Counterfactual: apply the same linear hang-time adjustment to short-field punts or to punts landing outside the 10–30 interval. Verifiable prediction: in a two-fold cross-validation with 10,000 repetitions [PAGE 208], out-of-sample mean-squared prediction error will increase relative to the restricted model, because the paper reports hang time was not predictive for short-field punts. If a re-fit on the 2013 short-field subset yields a statistically indistinguishable-from-zero hang-time coefficient, the domain restriction is confirmed.

Veto Scenario 2 — Denver altitude stacking. The model approximates the Denver long-field effect at 2.5 yards (0.14 EP) derived from 2010–14 Broncos games, while also including temperature and precipitation coefficients for long-field punts [PAGE 209]. Counterfactual: compare a visiting punter’s EPA at Denver versus