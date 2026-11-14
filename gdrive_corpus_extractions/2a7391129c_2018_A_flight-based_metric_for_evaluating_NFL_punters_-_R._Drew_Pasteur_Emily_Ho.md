---
source: "2018 A flight-based metric for evaluating NFL punters - R. Drew Pasteur, Emily Howerton, Preston Pozderac, Stuart Young and Jonathan Moore.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 13
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 8031
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper: "A flight-based metric for evaluating NFL punters" by Pasteur et al. (2018), with 13 pages provided. I need to produce a response with specific XML sections:

1. THINK_TRACE (>=400 words) - Deep multi-hop derivation & gray-zone audit
2. SOURCE_OPERATORS_AND_EQUATIONS - Formal LaTeX, units, page citations, breakdown
3. RETROCAUSAL_GENEALOGY - Historical/scientific lineage & multi-week traps
4. RECURSIVE_THEORY_OF_MIND - Crisis habit regression vs counter-trap vs clock
5. CROSS_LAYER_VETO_ADJUDICATION - Physical/biomechanical/weather veto proof
6. RLVR_COUNTERFACTUAL_VETOES - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: No fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- >= 1,000-word depth across sections.
- Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.

Let me carefully read through the provided text to extract relevant details.

Key details from the paper:

Page 1: Abstract mentions nonlinear model using field position, touchbacks, hang time, coverage quality, environmental conditions. EPA total and per punt. Persistence of punting skill. Relationships between performance and salary.

Page 2: Traditional metrics: gross distance, net distance, touchback percentage, inside-20. Confounding variables: field position (midfield punts reduce power to avoid touchback), team quality (weak teams punt more from deep, higher gross averages). Coverage quality inhibits returns. Touchback credit issue (50 net yards credited on touchback vs actual 30-yard advance). Burke (2010) model accounted for field position.

Page 3: Data: 12,245 regular-season punts 2010-2014 from Pro Football Reference. Figure 1: gross, net, effective net by field position. Touchbacks significant when line of scrimmage beyond punting team's 40-yard line. Gross distance drops nearly linearly with slope less than one. Figure 2: touchback probability by field position. Figure 3: expected return distance. Figure 4: next line of scrimmage. Figure 5: improvement ~1 yard on long-field punts from 2010-11 to 2013-14.

Page 4: New approach: evaluate based on landing point. Data collected: 2,526 punts in 2013 regular season, except 16 blocked punts = 2,510 punts. Visually estimated landing point and endpoint to nearest yard. Hang time estimated by hand via stopwatch, mean of three measurements. Hourly weather data, game-time weather for first quarter punts, one hour later each subsequent quarter. Punt direction relative to home team's bench, stadium orientation via Google Maps, 16-point compass rose, decomposing wind into headwind/tailwind and crosswind via trigonometry. Penalties: 257 with enforced penalty. Over 70% against return team, average 9.3 penalty yards. Net effect 0.86 yards per punt against return team.

Page 5: Fly distance vs gross distance: about 1 yard less on average (extra yard is downfield roll). Figure 6. Figure 7: post-bounce yardage components. Figure 8: bounce probability drops between 5 and 10 yard lines. Figure 9: touchback 3x more likely on landing at 5-yard line than 10. Figure 10: punts landing between 5 and 10 have best outcomes. Figure 11: punts landing very near end zone tend to be long punts; between 10 and 15 tend to be short. Figure 12: at any given landing point, longer punts have inferior post-bounce outcomes (coverage must run farther). Figure 13: fair catches tend to have shorter flight distances for punts landing inside 30.

Page 6: EPA unit from Romer (2006) and Burke (2008). Table generated from graph in Burke (2014a). 81 fumbles by receiving team in 2013, 63 while attempting to catch, remainder during returns. Receiving teams recovered own fumbles two-thirds of time, but 27 recovered by punting team.

Page 7: Multi-factor models. Modified ridge estimator (d'Errico, 2005) to smooth empirical data. Model resulting next line of scrimmage. Contour plot Fig 14. Each extra yard of flight distance increases expected punt return by about half-yard, remaining half-yard net gain. EYA = actual downfield flight – (modeled post-bounce “return” + expected effective net distance). EPA model replaces distances by changes in expected points. Lateral landing point (edge distance). Two-fold cross validation with 10,000 repetitions. Long-field punts defined as touchback would require 60+ yards (line of scrimmage at or inside punting team's 40-yard-line).

Page 8: Hang time predictive only on long-field punts landing in-bounds between 10 and 30 yard lines. Fit adjustment to EPA: 0.180 · hangtime – 0.798. Constant ensures mean value zero across all punts. Extra second of hang time worth just over three yards (compared to 0.557 EP change per yard of field position away from end zones). Lateral landing point/sideline not sufficiently predictive. Table 1: coefficients. Temperature (°F)* –0.00173. Precipitation* 0.0924. DefPPG* 0.00720. Denver* –0.140. Constant1* 0.0671. Hang time (sec)# 0.180. Constant2# –0.798. One-yard-per-punt negative impacts for temperature drop of 33°F, or defense giving up additional 7.7 points per game. Precipitation reduces punt by about 1.7 yards. Crosswind strongest correlation but didn't improve predictive accuracy. Denver altitude: 2.1-yard effect on gross punting, 3.1-yard effect on net punting from 2010-14. Approximated Denver long effect at 2.5 yards on long-field punts, converted to 0.14 EP.

Page 9: Equation (1): EPA = ΔEP_fly − (model ΔEP_after landing) − (expected ΔEP_total) + adjustments. EPA per punt (EPA/P) and total EPA. EPA/P correlates +0.78 with gross punting average. +0.82 for effective gross average. YdsTEZc60: cap YdsTEZ at 60, average for each punter. Equation (2): EPA/P estimate = 0.0312 EffGross − 0.0263 YdsTEZc60 + 0.1182.

Page 10: 2013 leaders: Shane Lechler +12.6 EPA, +0.143 EPA/P. Gross 47.6 (5th), effective gross 46.2 (4th), fly 46.8 (3rd), hang time 4.60 sec (2nd). Team 2-14, allowed 26.8 PPG. 9th shortest field position. Ranked #1 by PFF. Followed by Matthew Bosher +5.86 EPA, +0.086 EPA/P and Thomas Morstead +4.48, +0.073. Marquette King and Brandon Fields top two in gross and net distance, King leader in fly distance. Near bottom in touchback percentage and hang time. Ranked 10th and 16th in EPA/P.

Page 11: Persistence: first half (weeks 1-9) vs second half (weeks 10-17) correlation +0.67 in EPA/P. Second only to hang time (+0.74). Other correlations: fly +0.66, gross +0.57, net +0.46, effective gross +0.36, touchback % +0.19, effective net +0.18. Replacement level: -0.050 EPA/P (roughly 20th percentile). Over 80 punts, -4 EPA. Lechler +12.61 EPA = 16.61 EPA better than replacement. Bosher +9.86 EPA better. 35 EPA = one win (Harvard, 2012). One marginal win = $15 million (Stuart, 2013). Lechler worth almost half a win, ~$7 million salary value. Replacement-level punter salary ~$500,000. Andy Lee highest paid $4.075 million, ranked 17th, +0.31 EPA. Seven highest-paid punters ($2M+) negative EPA in aggregate. Among 21 veterans, each additional million dollars salary associated with increase of 1.08 EPA. Less than half expected slope. Veterans averaged -0.75 EPA and $1.86M salary. Rookie contracts averaged +1.26 EPA and $0.48M salary.

Page 12: References.

Page 13: Appendix A table with 2013 punter metrics.

Now, I need to write the response. Since this is a reasoning foundry output, I need to adopt the persona and produce the exact XML sections. No betting lines. No toy equations.

Let me structure this carefully.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to derive the EPA model step by step, discuss gray zones (visual estimation of landing points to nearest yard, stopwatch hang time with mean of three, small sample sizes for Denver altitude, blocked punts excluded, etc.).

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations with units. Equation (1) and (2) from paper, plus derived relationships. Citations [PAGE N]. Breakdown of coefficients from Table 1. SI units: yards (yd), seconds (s), °F, EP (expected points), EPA (expected points added), yards per punt, etc.

RETROCAUSAL_GENEALOGY: Historical lineage: Romer (2006), Burke (2008, 2010, 2014a,b), Clark et al. (2013), Pasteur & Cunningham-Rhoads (2014), Berry & Berry (1985), Morrison & Kalwani (1993), Bilder & Loughin (1998), Tymins (2014), Beuoy (2012), Lisk (2008), Petti (2011), Berri & Burke (2012), Harvard (2012), Stuart (2013). Multi-week traps: first half vs second half correlation +0.67; persistence traps; salary vs performance trap.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is about how punters/coaches regress under pressure, the "crisis habit" of punting deep to avoid touchbacks vs the counter-trap of effective net yardage, and the clock/game situation. Also the recursive thinking of evaluators relying on gross distance while the model says EPA/P is better.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Temperature coefficient -0.00173 EP/°F. Precipitation +0.0924 EP (binary). DefPPG +0.00720 EP per point allowed. Denver -0.140 EP (altitude). Hang time +0.180 EP/s. Crosswind not included despite correlation. Physical principles: air density, drag, altitude. Breakdown regimes: small sample for Denver, blocked punts excluded, visual estimation error.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some counterfactual veto framework. I need to create 3 counterfactual scenarios that are verifiable (based on the paper's data/equations) and state predictions.

Word count: >= 1,000 words across sections. THINK_TRACE >= 400 words.

Let me draft carefully, ensuring no betting lines. I must avoid words like "spread," "total," "moneyline," "odds," "line" in betting context. The paper uses "line of scrimmage" which is fine—it's football terminology, not betting. I should be careful not to say "betting line" or "odds." I can mention "line of scrimmage" as it's in the source.

Let's start writing.

THINK_TRACE:

Need >=400 words. I'll write a dense multi-hop derivation.

Start with the raw data: 2,526 punts in 2013, 16 blocked excluded, 2,510 analyzed. Landing point estimated visually to nearest yard. Hang time by stopwatch, mean of 3 measurements. Weather decomposed via trigonometry into headwind/tailwind and crosswind on 16-point compass.

First hop: field position confounding. Gross distance constant beyond ~60 yards from end zone; touchback concerns start beyond punting team's 40-yard line [PAGE 3]. Net distance distorted by touchback credit rule [PAGE 2]. Effective net adjusts for touchbacks.

Second hop: landing point model. Punt fly distance about 1 yard less than gross (roll) [PAGE 5]. Post-bounce outcomes depend on landing point and fly distance [PAGE 7, Fig 12]. Modified ridge estimator smooths empirical data [PAGE 7]. Each extra yard of flight adds ~0.5 yard to expected return, ~0.5 yard net gain [PAGE 7].

Third hop: EPA conversion. EP table from Burke (2014a) [PAGE 6]. Yards near goal lines worth more [PAGE 6]. Equation (1): EPA = ΔEP_fly − modeled ΔEP_after landing − expected ΔEP_total + adjustments.

Fourth hop: covariates. Hang time only predictive on long-field punts landing in-bounds between receiving team's 10-30 [PAGE 8]. Fit: 0.180·hangtime − 0.798 EP. One second hang time worth just over 3 yards (0.557 EP per yard) [PAGE 8]. Temperature −0.00173 EP/°F; precipitation +0.0924 EP; DefPPG +0.00720 EP per PPG; Denver −0.140 EP [PAGE 8, Table 1].

Fifth hop: persistence. First-half vs second-half EPA/P correlation +0.67 [PAGE 11], second only to hang time +0.74. Replacement level −0.050 EPA/P [PAGE 11].

Gray-zone audit: visual estimation to nearest yard introduces ±0.5 yd systematic error; stopwatch mean of 3 has human reaction-time variance; Denver n small (roughly half punts by one punter); blocked punts excluded (selection bias); crosswind correlated but not predictive (omitted variable bias risk); lateral landing point/sideline not sufficiently predictive due to small sample near corners [PAGE 8].

I'll expand this to >400 words.

SOURCE_OPERATORS_AND_EQUATIONS:

Formal LaTeX. Define variables:
- \(x\): yards to end zone before punt (field position), yd
- \(d_f\): fly distance, yd
- \(l\): landing point, yd line from receiving team's end zone (0 = goal line)
- \(h\): hang time, s
- \(T\): temperature, °F
- \(P\): precipitation binary {0,1}
- \(D\): DefPPG, points/game
- \(A\): Denver altitude binary {0,1}

Equation from paper (1):
\[
\text{EPA} = \Delta EP_{\text{fly}} - \left(\text{model } \Delta EP_{\text{after landing}}\right) - \left(\text{expected } \Delta EP_{\text{total}}\right) + \text{adjustments}
\]

Table 1 coefficients:
\[
\Delta EP_{\text{adj}} = -0.00173\,T + 0.0924\,P + 0.00720\,D - 0.140\,A + 0.0671
\]
for long-field punts (\(x \ge 60\) yd from end zone, i.e., LOS at/inside own 40). Hang time term for \(l \in [10,30]\):
\[
\Delta EP_{\text{hang}} = 0.180\,h - 0.798
\]
Units: EP (expected points). \(0.180\ \text{EP/s}\). One second hang time \(\approx 3.23\) yd net gain (since \(0.557\ \text{EP/yd}\)). Temperature drop 33°F → \(-0.0571\ \text{EP} \approx -1\) yd. Precipitation → \(+0.0924\ \text{EP} \approx -1.7\) yd (wait, sign: coefficient is positive 0.0924 but text says precipitation reduces punt by about 1.7 yards. Let me check: Table says Precipitation 0.0924. But text: "The presence of precipitation reduces a punt by about 1.7 yards on average." Hmm, if coefficient is positive, it increases EPA? Wait, maybe the sign convention: coefficient 0.0924 means positive effect? But text says reduces. Let me re-read carefully.

Page 8: "The coefficients indicated that one-yard-per-punt negative impacts are expected for a temperature drop of 33°F, or for a defense giving up an additional 7.7 points per game. The presence of precipitation reduces a punt by about 1.7 yards on average, according to the model."

Table 1: Temperature –0.00173. Precipitation 0.0924. DefPPG 0.00720. Denver –0.140.

Wait, if precipitation coefficient is +0.0924, that would increase EPA, which contradicts "reduces a punt." Unless the dependent variable is something else or there's a sign flip in the text. But I must report what's in the source. The table says 0.0924. The text says reduces by 1.7 yards. There might be a sign inconsistency in the paper or I might be misreading. Let me check: maybe the coefficient is negative in the model but table shows absolute? No, table clearly says 0.0924. Actually, looking at the text again: "The coefficients indicated that one-yard-per-punt negative impacts are expected for a temperature drop of 33°F... The presence of precipitation reduces a punt by about 1.7 yards on average." If temperature coefficient is -0.00173, a 33°F drop gives -0.05709 EP. If 1 EP ≈ some yards... actually they compare to 0.557 EP per yard. So -0.0571 EP / 0.557 EP/yd ≈ -0.1025 yd? That doesn't match one yard. Wait, they say "one-yard-per-punt negative impacts are expected for a temperature drop of 33°F." Let's compute: -0.00173 * 33 = -0.05709 EP. If 1 yard of field position = 0.557 EP, then -0.05709 EP = -0.1025 yards, not one yard. So maybe the 0.557 is EP change per yard away from end zones? Let me re-read: "Comparing the hang time coefficient to the 0.557 EP change associated with yard of field position away from the end zones, we find that an extra second of hang time is worth just over three yards." 0.180 EP/s / 0.557 EP/yd = 0.323 yd/s? That doesn't match "just over three yards." Hmm, maybe 0.557 is EP per yard? 0.180 / 0.557 = 0.323. Not 3. Maybe it's 0.557 EP per something else? Or maybe they mean 0.557 EP per yard is wrong and it's actually different. Wait: "an extra second of hang time is worth just over three yards." If 1 second = 0.180 EP, and 3 yards = X EP, then X/3 = 0.180/3 = 0.06 EP/yd. So maybe it's 0.06 EP per yard, not 0.557. Let me re-read carefully.

Page 8: "Comparing the hang time coefﬁcient to the 0.557 EP change associated with yard of ﬁeld position away from the end zones, we ﬁnd that an extra second of hang time is worth just over three yards."

This seems mathematically inconsistent in the source text: 0.180 EP/s divided by 0.557 EP/yd = 0.323 yd/s, not 3 yards. Unless "0.557 EP change associated with yard" means something else, like 0.557 EP per 10 yards? Or perhaps there's a typo in the paper and it's 0.0557 EP/yd. 0.180 / 0.0557 ≈ 3.23 yards. That would match "just over three yards." So likely the paper meant 0.0557 EP/yd or there's a decimal issue. I should not "fix" it but can note the relationship as stated. Actually, I should report what the source says and perhaps note the dimensional relationship. I won't invent a correction, but I can state the source's claim: "an extra second of hang time is worth just over three yards" and cite [PAGE 8]. I'll avoid deriving a contradictory number.

For precipitation: +0.0924 EP. If 1 yard ≈ 0.06 EP (from the hang time logic), then 0.0924 / 0.06 ≈ 1.54 yards, close to "about 1.7 yards." So the text's yardage conversions use ~0.055-0.06 EP/yd, not 0.557. The 0.557 might be a typo for 0.0557. I'll cite the source's verbal claim and the table coefficient, and note the unit conversion as stated in the text.

Equation (2):
\[
\widehat{\text{EPA/P}} = 0.0312\,\text{EffGross} - 0.0263\,\text{YdsTEZc60} + 0.1182
\]
Units: EPA/P in EP per punt; EffGross in yd; YdsTEZc60 in yd (capped at 60).

Breakdown of Table 1 with applicability:
- Temperature: applies only to punts from at/inside punting team's 40-yard-line [PAGE 8].
- Precipitation: same applicability.
- DefPPG: same.
- Denver: same.
- Hang time: applies only to punts landing between receiving team's 10- and 30-yard-lines, inclusive [PAGE 8].

Singularity/breakdown regimes:
- Blocked punts (16 of 2,526) excluded from flight data [PAGE 4].
- Denver altitude sample small: roughly half of Denver punts by one punter; visiting punter samples small [PAGE 8].
- Lateral landing point/sideline: insufficient sample near goal-line/sideline corners [PAGE 8].
- Short-field punts: no considered factor substantially reduced predictive error [PAGE 8].

RETROCAUSAL_GENEALOGY:

Historical lineage:
- Romer (2006) and Burke (2008): expected points framework, non-linear value of yardage near goal lines [PAGE 6].
- Burke (2010): expected points per punt and win probability added accounting for field position [PAGE 2].
- Berry & Berry (1985), Morrison & Kalwani (1993), Bilder & Loughin (1998): field goal distance models [PAGE 1].
- Clark et al. (2013), Pasteur & Cunningham-Rhoads (2014): kicker evaluation with multiple seasons, weather, surface [PAGE 1].
- Beuoy (2012), Tymins (2014): punter improvement over seasons, touchbacks, economic value [PAGE 2].
- Lisk (2008): Pro Bowl punters on weak teams [PAGE 2].
- Petti (2011), Berri & Burke (2012): skill persistence [PAGE 10].
- Harvard Sports Analytics Collective (2012): 35 EPA = 1 win [PAGE 11].
- Stuart (2013): $15M per marginal win [PAGE 11].

Multi-week traps:
- First half vs second half 2013: EPA/P correlation +0.67 [PAGE 11]. This is a short-window persistence trap; half-season samples are small.
- Season-to-season correlations needed but unavailable with single season [PAGE 11].
- Salary trap: veteran regression shows $1M salary → +1.08 EPA, less than half expected slope [PAGE 11]. Rookies outperform veterans in 2013, likely non-representative [PAGE 11].

I should discuss how evaluating a punter based on one week or one game is a trap because of low persistence and high variance.

RECURSIVE_THEORY_OF_MIND:

This section is about crisis habit regression vs counter-trap vs clock.

Crisis habit regression: Coaches/punters under pressure (deep in own territory) revert to traditional habits: punting as far as possible to avoid touchbacks, ignoring that net distance overcredits touchbacks [PAGE 2]. Under crisis (e.g., backed up near goal line), coverage teams delay getting downfield [PAGE 5].

Counter-trap: The evaluator's recursive belief that gross distance = quality is a trap. The paper shows King and Fields led in gross/net/fly but ranked 10th and 16th in EPA/P because of touchback percentage, hang time, mild temperatures, routine long-field situations [PAGE 10]. The counter-trap is to use EPA/P and model-based expected next LOS.

Clock: Game situation, score, quarter affect weather data collection (game-time weather for 1Q, +1 hour each subsequent quarter) [PAGE 4]. Also time remaining affects punting aggressiveness. The "clock" as a recursive layer: field position value changes near end of half/game, but EPA table is static (from Burke 2014a). The model does not explicitly incorporate game clock/score state except via EP table which is situation-aware [PAGE 1].

I'll write this as a theory of mind: how the punter thinks (avoid touchback), how the coverage team thinks (get downfield), how the evaluator thinks (gross yards), and how the model thinks (expected points), and the recursive misalignments.

CROSS_LAYER_VETO_ADJUDICATION:

Physical layer:
- Air density/drag: temperature coefficient -0.00173 EP/°F [PAGE 8]. Colder air = denser = more drag = shorter flight. A 33°F drop = ~1 yard penalty per punt [PAGE 8].
- Altitude: Denver (~1,600 m) reduces air density; 2.1-yard gross, 3.1-yard net effect 2010-14; approximated 2.5 yards = 0.14 EP [PAGE 8]. Veto: small sample, binary variable, one punter takes half of Denver punts.
- Precipitation: binary, +0.0924 EP coefficient (text says reduces punt ~1.7 yards) [PAGE 8]. Wet ball, reduced grip, drag.
- Crosswind: strongest correlation among other factors but did not improve predictive accuracy; omitted from final model [PAGE 8].

Biomechanical layer:
- Hang time: 0.180 EP/s on long-field punts landing in-bounds 10-30 [PAGE 8]. Coverage needs time to run; longer flight → longer returns (~0.5 yd per extra flight yard) [PAGE 7].
- Punter rarely tackles; influence confined to kick [PAGE 4].
- Blocked/punted punts: excluded or misattributed [PAGE 2].

Weather veto proof:
- Model decomposes wind via 16-point compass rose and trigonometry into headwind/tailwind and crosswind [PAGE 4].
- Yet crosswind excluded despite correlation [PAGE 8] — a veto boundary: correlation ≠ prediction.
- Weather data aggregated hourly; game-time for 1Q, +1 hr per quarter [PAGE 4] — temporal mismatch veto.

Breakdown regimes:
- Short-field punts: environmental factors not predictive [PAGE 8].
- Punts landing outside 10-30: hang time term not applied [PAGE 8].
- Landing point near sideline/goal line corner: sample too small [PAGE 8].

RLVR_COUNTERFACTUAL_VETOES:

Need 3 verifiable RLVR veto scenarios + predictions. RLVR likely means Reinforcement Learning from Verifiable Rewards, or some counterfactual validation. I'll frame as verifiable counterfactual interventions using the paper's equations.

Scenario 1: Temperature veto. A punter kicks from own 40-yard-line (long-field) in 20°F vs 53°F. Using coefficient -0.00173 EP/°F, ΔT = -33°F → ΔEP = -0.00173 × (-33) = +0.05709 EP? Wait, coefficient is negative, so lower temperature reduces EPA. Let's compute: at 20°F vs 53°F, ΔT = -33. ΔEP = -0.00173 × (-33) = +0.05709? No: EPA change = coefficient × ΔT = -0.00173 × (-33) = +0.05709 EP. That would mean colder increases EPA? That contradicts text. Wait, coefficient is -0.00173. If T drops, ΔT is negative, so coefficient × ΔT = (-0.00173) × (negative) = positive. That would mean colder weather increases EPA. But text says "one-yard-per-punt negative impacts are expected for a temperature drop of 33°F." So maybe the sign convention in the model is such that the adjustment is subtracted? Equation (1) says "+ adjustments". If adjustment includes -0.00173*T, then lower T gives higher adjustment (less negative), meaning higher EPA? Let's not get bogged down. I'll state the coefficient as given and compute the magnitude: |−0.00173 EP/°F × 33 °F| ≈ 0.057 EP, which the paper equates to roughly one yard of field position. Prediction: in sub-freezing conditions, EPA/P should be depressed by ≈0.05 EP per punt relative to temperate conditions, all else equal. Verifiable via 2013 game logs: cold-weather games (e.g., Green Bay, Chicago, Minnesota late season) should show negative temperature residuals.

Scenario 2: Hang-time veto. A long-field punt landing in-bounds at the 20-yard-line with hang time 4.2 s vs 4.6 s. Δh = 0.4 s. ΔEP = 0.180 × 0.4 = 0.072 EP. Prediction: the 4.6 s punt should be worth ≈0.07 EP more than the 4.2 s punt, ceteris paribus. Verifiable via the paper's Figure 14 contours: at fixed landing point, extra flight yardage yields only 0.5 net yard due to return offset; hang time captures the coverage-pressure component not explained by distance alone.

Scenario 3: Altitude veto. Visiting punter at Denver (altitude binary = 1) vs at sea-level stadium, long-field punt. Coefficient -0.140 EP (Denver effect). Prediction: EPA should be depressed by 0.14 EP per long-field punt at Denver relative to sea level, equivalent to ≈2.5 yards. Verifiable via 2010-14 Broncos games: visiting punters' gross/net should be lower in Denver by 1.6-3.5 yards (paper's range), with the 2.5-yard point estimate. Veto: if a visiting punter outperforms in Denver by >0.14 EP, the altitude term is falsified for that observation.

I need to ensure these are "verifiable" — meaning they can be checked against the paper's data or equations. Yes.

Now I need to make sure total word count >= 1,000. Let me estimate. THINK_TRACE ~500 words. SOURCE_OPERATORS ~300 words. RETROCAUSAL ~300 words. RECURSIVE ~300 words. CROSS_LAYER ~300 words. RLVR ~200 words. Total ~1900. Good.

I must include [PAGE N] markers. Let's be precise.

Also, strict invariant: ZERO BETTING LINES. I will not mention spreads, totals, moneylines, odds. I will not say "line" in betting context. "Line of scrimmage" is fine.

ZERO TOY EQUATIONS: All equations must be formal LaTeX from source or derived clearly with units. No made-up ratios like Force/Fatigue.

Let me draft the response now.

I need to be careful about verbatim quotes. The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should include some verbatim quotes with page citations.

Let me include quotes:
- [PAGE 3]: "The average gross distance is relatively constant for punts taken more than roughly 60 yards from the end zone"
- [PAGE 4]: "we collected data on the landing point and eventual endpoint of each punt (visually estimating to the nearest yard, both downfield and laterally)"
- [PAGE 8]: "an extra second of hang time is worth just over three yards"
- [PAGE 11]: "a first-half-to-second-half correlation of +0.67 in EPA/P"

I'll write the XML sections exactly.

Structure:

<response>
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
</response>

Let me ensure each section is substantial.

I'll write now, monitoring word count mentally.

THINK_TRACE:

Deep multi-hop derivation:
Start with the sampling frame: 2,526 punts in 2013 regular season, 16 blocked excluded, leaving 2,510 [PAGE 4]. Landing point and endpoint visually estimated to nearest yard; hang time by stopwatch, mean of three measurements [PAGE 4]. This yields the flight distance \(d_f\), distinct from gross distance by ~1 yard of roll [PAGE 5].

Hop 1 — Field position confounding. Gross distance is approximately constant for punts from >60 yards from end zone; touchback concerns begin beyond the punting team's 40-yard line [PAGE 3]. Net distance is biased because the NFL credits touchbacks with 50 net yards even when the actual advance is only 30 yards [PAGE 2]. The authors define effective net distance to correct this.

Hop 2 — Landing-point model. Post-bounce adjustment is a function of landing point \(l\) and fly distance \(d_f\), smoothed with a modified ridge estimator [PAGE 7]. At any fixed landing point, longer punts yield inferior post-bounce outcomes because coverage must run farther; empirically, each extra flight yard adds about half a yard to expected return, leaving half a yard of net gain [PAGE 7, Fig. 12 & 14].

Hop 3 — EPA conversion. Expected points are non-linear in field position; yards near goal lines are worth more [PAGE 6; Romer 2006, Burke 2008]. The EP table is taken from Burke (2014a) [PAGE 6]. Equation (1) converts yardage into EPA:
\[
\text{EPA} = \Delta EP_{\text{fly}} - (\text{model }\Delta EP_{\text{after landing}}) - (\text{expected }\Delta EP_{\text{total}}) + \text{adjustments}.
\]

Hop 4 — Covariates. Hang time \(h\) (s) is predictive only for long-field punts landing in-bounds between the receiving team's 10- and 30-yard lines; fit: \(\Delta EP = 0.180h - 0.798\) [PAGE 8]. The authors state an extra second is worth just over three yards [PAGE 8]. Temperature \(T\) (°F): \(-0.00173\) EP/°F; precipitation \(P \in \{0,1\}\): \(+0.0924\) EP (text: reduces punt by ~1.7 yards); DefPPG: \(+0.00720\) EP per point allowed; Denver altitude: \(-0.140\) EP [PAGE 8, Table 1].

Gray-zone audit: (i) visual landing-point estimation to nearest yard introduces ±0.5 yd systematic error; (ii) stopwatch mean of three has human reaction-time variance and inter-observer reliability was not reported; (iii) Denver sample is thin — roughly half of Denver punts taken by one punter, visiting-punter samples small [PAGE 8]; (iv) 16 blocked punts excluded, inducing selection bias because blocks are not random [PAGE 4]; (v) crosswind had strongest correlation among ancillary factors but did not improve out-of-sample accuracy, so it was omitted — a potential omitted-variable veto under gusty conditions [PAGE 8]; (vi) lateral landing point/sideline lacked sufficient sample near goal-line corners [PAGE 8].

I think that's >400 words already. I'll expand slightly to be safe.

SOURCE_OPERATORS_AND_EQUATIONS:

Define variables with units. Then equations. Then Table 1 breakdown. Then breakdown/singularity.

RETROCAUSAL_GENEALOGY:

Lineage and traps.

RECURSIVE_THEORY_OF_MIND:

Three-layer ToM.

CROSS_LAYER_VETO_ADJUDICATION:

Physical/biomechanical/weather.

RLVR_COUNTERFACTUAL_VETOES:

Three scenarios with predictions.

Let me write the final output carefully, ensuring LaTeX is correct and page citations are accurate.

I will not use markdown code blocks; just raw XML text.

Double-check: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I will include quotes like "..." [PAGE N].

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

Hop 1 — Sampling and measurement frame. The authors begin with 2,526 regular-season punts from the 2013 NFL season; 16 blocked punts are excluded, leaving 2,510 punts for flight analysis [PAGE 4]. Landing point and eventual endpoint are visually estimated to the nearest yard, both downfield and laterally [PAGE 4]. Hang time is measured by hand via stopwatch, taking the mean of three measurements [PAGE 4]. This produces the key regressor, fly distance \(d_f\), which averages about one yard less than gross distance because the remaining yard is downfield roll [PAGE 5].

Hop 2 — Field-position confounding. Gross distance is approximately constant for punts taken from more than roughly 60 yards from the end zone; touchback concerns become significant once the line of scrimmage is beyond the punting team's 40-yard line [PAGE 3]. Net distance is statistically distorted: the NFL credits a touchback with 50 net yards even when the punt only advances the ball 30 yards (e.g., midfield line of scrimmage to the opponent's 20) [PAGE 2]. The authors therefore construct an effective net distance that adjusts for touchbacks, removing the gross/net paradox in which a touchback is credited more than a downed punt inside the 10 [PAGE 2].

Hop 3 — Landing-point and post-bounce modeling. Post-bounce net yardage is modeled as a function of landing point \(l\) and fly distance \(d_f\) using a modified ridge estimator (d'Errico, 2005) to smooth the empirical surface [PAGE 7]. Figure 14 shows expected next line of scrimmage as contours; moving up and left along a constant field-position line increases punt length [PAGE 7]. At any fixed landing point, longer punts have worse post-bounce outcomes because coverage must run farther [PAGE 7, Fig. 12]. Empirically, each extra yard of flight distance increases expected return by roughly half a yard, leaving the other half as net field-position gain [PAGE 7].

Hop 4 — Conversion to expected points. Because every yard of field position is not equally valuable — yards near the goal lines are worth more [PAGE 6; Romer 2006; Burke 2008] — the authors convert yardage into EPA using an expected-points table generated from Burke (2014a) [PAGE 6]. Equation (1) forms the core metric: EPA equals the expected-points change associated with the fly distance, minus the modeled expected-points change after landing, minus the expected total change, plus environmental and coverage adjustments [PAGE 9].

Hop 5 — Covariate layer. Hang time \(h\), in seconds, is predictive only on long-field punts landing in-bounds between the receiving team's 10- and 30-yard lines; the fitted EPA adjustment is \(0.180 \cdot h - 0.798\), with the constant centering the mean at zero across all punts [PAGE 8]. The authors state that an extra second of hang time is worth just over three yards [PAGE 8]. For long-field punts (line of scrimmage at or inside the punting team's 40-yard line), Table 1 supplies: temperature \(-0.00173\) EP per °F; precipitation \(+0.0924\) EP (binary; the prose says this reduces a punt by about 1.7 yards); DefPPG \(+0.00720\) EP per defensive point allowed per game; Denver altitude \(-0.140\) EP; intercept \(+0.0671\) EP [PAGE 8]. A 33°F temperature drop or a defense surrendering 7.7 more points per game each impose roughly a one-yard-per-punt negative impact [PAGE 8].

Gray-zone audit. (i) Visual landing-point estimation to the nearest yard carries an unquantified ±0.5 yard systematic error and no inter-rater reliability is reported [PAGE 4]. (ii) Stopwatch hang time, averaged over three trials, retains human reaction-time variance; the paper does not report measurement-error bounds [PAGE 4]. (iii) The Denver altitude effect rests on a thin sample: roughly half of Denver punts are taken by one punter, and visiting-punter samples in Denver are small; estimates range from 1.6 to 3.5 yards before the authors adopt a 2.5-yard approximation [PAGE 8]. (iv) Blocked and partially blocked punts are excluded or ambiguously attributed, creating selection bias because blocks are not randomly distributed across punters, snappers, and protection units [PAGE 2; PAGE 4]. (v) Crosswind exhibited the strongest correlation among ancillary weather factors yet failed to improve out-of-sample predictive accuracy and was omitted, leaving a potential omitted-variable veto under high-wind conditions [PAGE 8]. (vi) Lateral landing point (edge distance to sideline) lacked sufficient evidence, especially for punts near the goal-line/sideline corner, where sample sizes are small and outcomes are highly random [PAGE 8]. (vii) For short-field punts, none of the considered environmental or coverage factors substantially reduced cross-validated error, so the model's covariate layer applies conditionally, not universally [PAGE 8].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal notation and units. Let \(x\) be yards to the end zone before the punt (field position), in yards (yd). Let \(d_f\) be punt fly distance, in yd. Let \(l\) be landing point measured as yards from the receiving team's goal line (0 = goal line), in yd. Let \(h\) be hang time, in seconds (s). Let \(T\) be temperature in degrees Fahrenheit (°F). Let \(P \in \{0,1\}\) be the precipitation indicator. Let \(D\) be DefPPG, defensive points allowed per game, in points/game. Let \(A \in \{0,1\}\) indicate a game at Denver's altitude. Let EP denote expected points, in expected-points units; \(\Delta EP\) is a change in EP, also in EP units.

Core EPA model, Equation (1) [PAGE 9]:
\[
\text{EPA} \;=\; \Delta EP_{\text{fly}} \;-\; \bigl(\text{model } \Delta EP_{\text{after landing}}\bigr) \;-\; \bigl(\text{expected } \Delta EP_{\text{total}}\bigr) \;+\; \text{adjustments}.
\]
Positive EPA indicates the punter outperformed expectations; aggregation yields total EPA and EPA per punt (EPA/P), both in EP units, with EPA/P in EP/punt [PAGE 9].

Hang-time adjustment, valid only for punts landing between the receiving team's 10- and 30-yard lines inclusive [PAGE 8]:
\[
\Delta EP_{\text{hang}}(h) \;=\; 0.180\,h \;-\; 0.798, \qquad [0.180] = \text{EP/s}.
\]

Long-field environmental/coverage adjustment, valid only for punts from at or inside the punting team's 40-yard line (i.e., \(x \ge 60\) yd from the end zone) [PAGE 8]:
\[
\Delta EP_{\text{env}} \;=\; -0.00173\,T \;+\; 0.0924\,P \;+\; 0.00720\,D \;-\; 0.140\,A \;+\; 0.0671,
\]
with all coefficients in EP units per their respective variable units. The Denver term converts an approximated 2.5-yard long-field altitude effect into 0.14 EP [PAGE 8].

Simplified estimator, Equation (2) [PAGE 9], using effective gross average \(\text{EffGross}\) in yd and capped field position \(\text{YdsTEZc60}\) in yd (capped at 60):
\[
\widehat{\text{EPA/P}} \;=\; 0.0312\,\text{EffGross} \;-\; 0.0263\,\text{YdsTEZc60} \;+\; 0.1182.
\]

Unit-consistency checks and breakdown regimes stated in the source: (i) The hang-time coefficient implies roughly 0.072 EP per 0.4 s of hang time; the authors equate one extra second to just over three yards of net field position [PAGE 8]. (ii) A temperature drop of 33°F yields \(\left|-0.00173 \times 33\right| \approx 0.057\) EP, which the paper maps to approximately one yard of field-position penalty per punt [PAGE 8]. (iii) A defense allowing 7.7 more points per game yields \(0.00720 \times 7.7 \approx 0.055\) EP, likewise approximately one yard [PAGE 8]. (iv) Blocked punts (16 of 2,526) are excluded from flight data [PAGE 4]. (v) The Denver term is binary because Denver is the only NFL stadium at significant altitude, and roughly half of its punts are taken by one punter, making the effect estimate fragile [PAGE 8]. (vi) Short-field punts show no significant error reduction from any considered covariate [PAGE 8]. (vii) Crosswind was correlated but not predictive and was therefore excluded from the final model [PAGE 8].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper's intellectual lineage traces through several distinct waves of football analytics. The expected-points foundation descends from Romer (2006) and Burke (2008), which established that field-position value is non-linear and that yards near the goal lines carry disproportionate weight [PAGE 6]. Burke (2010) extended this to punts, generating expected-points-added per punt and win-probability-added while accounting for field position [PAGE 2]. Kicker-evaluation precedents include Berry & Berry (1985), Morrison & Kalwani (1993), and Bilder & Loughin (1998), which modeled field-goal success as a function of distance and situation; more recently Clark et al. (2013) and Pasteur & Cunningham-Rhoads (2014) incorporated multiple seasons, weather, and surface into generic kicker success probabilities [PAGE 1]. The present paper adapts that expectation-based framework to punting, a harder problem because a punt has a continuum of outcomes rather than a binary make/miss [PAGE 2].

Contemporaneous punter research cited includes Beuoy (2012) and Tymins (2014), who documented punter improvement over recent years, scrutinized touchbacks, and estimated economic value [PAGE 2]. Lisk (2008) identified the team-quality confound: punters on weak offenses punt more often from deep in their own territory, inflating gross averages and depressing touchback rates, which helps explain their overrepresentation on Pro Bowl teams [PAGE 2].

Persistence and economic reasoning draw on Petti (2011) and Berri & Burke (2012) regarding skill stability [PAGE 10], and on Harvard Sports Analytics Collective (2012), which sets 35 EPA as equivalent to one win, and Stuart (2013), which prices one marginal win at $15 million in added salary [PAGE 11].

Multi-week traps. The paper explicitly warns against single-season or single-half overconfidence. With only one season of EPA/P, the authors cannot compute season-to-season correlations; instead they split 2013 into weeks 1–9 and weeks 10–17 and find a first-half-to-second-half correlation of +0.67 in EPA/P [PAGE 11]. This is second only to hang time (+0.74) among their statistics, but the sample sizes are small — only punters with 16 or more punts in each half are retained [PAGE 11]. The broader correlation table shows fly +0.66, gross +0.57, net +0.46, effective gross +0.36, touchback percentage +0.19, and effective net +0.18 [PAGE 11]. The low persistence of touchback percentage (+0.19) and effective net (+0.18) is a multi-week trap: evaluators who weight these stats heavily are largely measuring week-to-week noise rather than stable skill. Similarly, the salary analysis reveals a short-sample trap: in 2013, punters on rookie contracts averaged +1.26 EPA and $0.48 million, while veterans averaged –0.75 EPA and $1.86 million, an anomalous inversion likely unrepresentative of longer-run truth because young players do not consistently outperform higher-paid veterans at a position where careers extend into the 40s [PAGE 11]. The veteran regression slope — roughly +1.08 EPA per additional million dollars of salary — is less than half of what the 35-EPA-per-win and $15-million-per-win calibration would predict, and it depends sensitively on the assumed replacement level of –0.050 EPA/P [PAGE 11]. Evaluating a punter after one game, one week, or even one half-season is therefore a trap: the signal-to-noise ratio in EPA/P is modest, and the replacement-level baseline is itself an assumption rather than an observed backup-player distribution [PAGE 11].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Theory-of-mind recursion operates across four nested agents: the punter, the coverage unit, the traditional evaluator, and the modeler.

First-order habit — the punter under crisis. When backed up near his own goal line, the punter faces a crisis of incentives: maximize distance to avoid a short field for the opponent, but avoid a touchback, which the official scoring rules perversely credit with 50 net yards even though the actual field-position gain may be only 30 yards [PAGE 2]. The resulting habit is to kick deep whenever possible, because there is no touchback risk from deep in one's own territory, while pulling back near midfield to avoid the end zone [PAGE 2]. This crisis habit inflates gross averages for punters on weak teams that frequently punt from deep, producing the Lisk (2008) Pro Bowl distortion [PAGE 2].

Second-order counter-trap — the coverage/returner interaction. The coverage unit's recursive problem is that longer hang time gives defenders more time to get downfield, yet each extra yard of flight distance also forces coverage to run farther, so at any fixed landing point, longer punts yield worse post-bounce outcomes [PAGE 7, Fig. 12]. The returner, in turn, decides whether to let the ball bounce based on landing point: bounce probability drops precipitously between the 5- and 10-yard lines, consistent with returners standing at their 10 and letting balls over their heads go for touchbacks [PAGE 5, Fig. 8]. A touchback is three times more likely on a landing at the 5-yard line than at the 10 [PAGE 5, Fig. 9]. Punts landing between the 5 and 10 produce the best next-line-of-scrimmage outcomes [PAGE 5, Fig. 10]. The counter-trap is that gross distance rewards the raw kick but ignores this landing-point game tree; effective net and EPA recover the value hidden in the bounce/touchback decision.

Third-order evaluator trap — traditional statistics vs. model. Traditional evaluators credit gross distance, net distance, inside-20 percentage, and hang time anecdotally. The paper shows this systematically misranks punters: Marquette King and Brandon Fields led the league in gross and net distance (and King in fly distance) but ranked 10th and 16th in EPA/P because they were near the bottom in touchback percentage and hang time and benefited from mild temperatures and routine long-field situations [PAGE 10]. By contrast, Shane Lechler (+12.61 EPA, +0.143 EPA/P) ranked first despite playing for a 2–14 team with the 9th-shortest average field position, which limited his deep-kick opportunities [PAGE 10]. The recursive trap is that Pro Bowl and traditional-yardage voters observe the wrong layer of the causal graph.

Fourth-order clock layer — game-state timing. The model's weather data collection itself is clock-sensitive: game-time weather is used for first-quarter punts, and weather from one hour later is used for each subsequent quarter [PAGE 4]. This acknowledges that temperature and precipitation evolve across the game clock, but the expected-points table is static and derived from general game situations rather than explicit score/time-remaining states beyond the EP framework [PAGE 1, PAGE 6]. A complete recursive model would nest the punter's clock-aware aggressiveness (e.g., more conservative punting when protecting a late lead) inside the coverage reaction function, inside the evaluator's credit assignment, inside the market's salary formation. The paper stops at one recursion: the punter's kick determines expected next line of scrimmage, and EPA scores the deviation from that expectation. Deeper recursion — coaching decisions on whether to punt at all, fake-punt frequency, and end-of-half clock management — lies outside the stated model's boundary [PAGE 4].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer — aerodynamics and atmospheric density. The temperature coefficient of \(-0.00173\) EP/°F encodes air-density drag: colder air is denser, increasing drag on the football and reducing flight distance [PAGE 8]. A 33°F drop is modeled as a one-yard-per-punt negative impact [PAGE 8]. Precipitation is a binary covariate with coefficient \(+0.0924\) EP in Table 1, though the accompanying prose states precipitation reduces a punt by about 1.7 yards on average [PAGE 8]; this sign tension between the table coefficient and the verbal interpretation is itself a veto flag requiring source-code verification before operational use. Wind is decomposed via a 16-point compass rose and trigonometry into headwind/tailwind and crosswind components relative to stadium orientation [PAGE 4], yet crosswind — despite having the strongest correlation among ancillary factors — did not improve out-of-sample predictive accuracy and was excluded [PAGE 8]. Thus the model admits a physical wind mechanism but vetoes its inclusion because correlation did not survive cross-validation.

Biomechanical layer — coverage timing and punter agency. Hang time enters only for long-field punts landing in-bounds between the receiving team's 10- and 30-yard lines, with fit \(0.180 h - 0.798\) EP [PAGE 8]. The coefficient implies that one extra second of hang time is worth just over three yards [PAGE 8], reflecting the biomechanical reality that coverage units need time to descend the field; the punter rarely makes tackles, so his influence is confined to the kick itself [PAGE 4]. At fixed landing point, each extra yard of flight adds roughly half a yard to expected return, canceling half the distance gain [PAGE 7]. Blocked punts are excluded from the flight dataset [PAGE 4], and partially blocked punts are counted as ordinary punts despite typically poor distances, introducing attribution error among punter, snapper, and blockers [PAGE 2].

Weather veto proof and breakdown regimes. The model's weather layer is conditionally valid: temperature, precipitation, and DefPPG apply only to long-field punts (\(x \ge 60\) yd from end zone); for short-field punts none of these factors substantially reduced cross-validated error [PAGE 8]. The Denver altitude term rests on a binary stadium variable with a thin sample — roughly half of Denver punts taken by one punter, and visiting-punter samples limited — with prior estimates ranging from 1.6 to 3.5 yards before the authors fix 2.5 yards (0.14 EP) [PAGE 8]. Hourly weather is interpolated to game time (game-time for first quarter, +1 hour per subsequent quarter), creating a temporal mismatch veto if a storm front moves through within a quarter [PAGE 4]. Lateral landing point and sideline proximity were considered but rejected for insufficient sample near goal-line/sideline corners [PAGE 8]. The complete veto boundary is therefore: (a) short-field punts — environmental layer void; (b) non-Denver altitude — no term exists; (c) crosswind — physically present but predictively null; (d) blocked-punt plays — excluded by selection; (e) sub-hourly weather discontinuities — unmodeled.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios, derived directly from the paper's equations and tabulated coefficients, with falsifiable predictions.

Veto Scenario 1 — Temperature intervention on long-field punts.
Counterfactual: Two otherwise identical long-field punts (line of scrimmage at or inside the punting team's 40-yard line) are struck at \(T_1 = 20^\circ\text{F}\) and \(T_2 = 53^\circ\text{F}\). Using the Table 1 coefficient \(\partial \text{EPA}/\partial T = -0.00173\ \text{EP}/^\circ\text{F}\) [PAGE 8], the EPA difference is \(\Delta \text{EPA} = -0.00173 \times (20 - 53) = +0.0569\) EP for the colder game under the literal table sign, or a 0.057-EP magnitude in either direction; the prose equates a 33°F temperature drop to approximately one yard of field-position penalty per punt [PAGE 8]. Verifiable prediction: In the 2013 game logs, cold-weather home games (e.g., Green Bay, Chicago, Minnesota, New England in December/January) should show negative temperature-residual EPA for long-field punts relative to temperate-weather games, with a magnitude on the order of 0.05–0.06 EP per punt, after controlling for fly distance and field position. Veto condition: if cold-weather long-field punts exhibit positive EPA residuals exceeding +0.03 EP per punt after covariate adjustment, the temperature coefficient's sign or magnitude is falsified for that subsample.

Veto Scenario 2 — Hang-time intervention at fixed landing point.
Counterfactual: Two long-field punts land in-bounds at the receiving team's 20-yard line with identical fly distance but hang times of \(h_1 = 4.2\) s and \(h_2 = 4.6\) s. The applicable model term is \(\Delta EP_{\text{hang}} = 0.180 h - 0.798\) [PAGE 8], so \(\Delta \text{EPA} = 0.180 \times (4.6 - 4.2) = +0.072\) EP in favor of the longer hang time. Verifiable prediction: Conditioning on landing point and fly distance, punts with hang time above 4.5 s should outscore those below 4.3 s by approximately 0.07 EP per punt (roughly one-third of an expected-point swing per ten punts). This is directly testable against Figure 14's contour structure: at fixed landing point, hang time captures coverage-pressure value not explained by distance alone [PAGE 7–8]. Veto condition: if the EPA difference between the hang-time bins is statistically indistinguishable from zero within the 10–30 yard landing band, the hang-time term is vetoed.

Veto Scenario 3 — Altitude intervention at Denver.
Counterfactual: A visiting punter executes a long-field punt at Empirical Field at Mile High (\(A = 1\)) versus the same punter in a sea-level stadium (\(A = 0\)). The model assigns \(\Delta EP_{\text{Denver}} = -0.140\) EP [PAGE 8], derived from an approximated 2.5-yard long-field altitude effect [PAGE 8]; prior unsmoothed estimates ranged from 1.6 to 3.5 yards on gross punting and 3.1 yards on net [PAGE 8]. Verifiable prediction: Using 2010–14 Broncos games, visiting punters' EPA on long-field punts in Denver should be depressed by roughly 0.14 EP per punt relative to their EPA in other road stadiums, after adjusting for field position and fly distance. Equivalently, visiting gross punting in Denver should be lower by about 2.1–2.5 yards and net by about 3.1 yards [PAGE 8]. Veto condition: if visiting punters at Denver post positive EPA residuals greater than +0.07 EP per punt on long-field attempts, the binary altitude term is too crude and the small-sample approximation (one punter taking roughly half of Denver's punts) is invalidated [PAGE 8].
</RLVR_COUNTERFACTUAL_VETOES>