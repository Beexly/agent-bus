---
source: "2013 Testing the Utility of the Pythagorean Expectation Formula on Division One CFB - Cary Caro, Ryan Machtmes.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 10
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5069
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about the Pythagorean Expectation Formula applied to Division I College Football. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully read the source text and cite exact page numbers. Looking at the provided markdown, page numbers appear to be 537-542 based on the footer markers.

Let me structure the response:

1. THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Need to derive the Pythagorean expectation formula as used in the paper, explain the variance calculation, discuss assumptions (Normal distribution of residuals, population vs sample), gray zones (retrospective only, no future forecasting, simplicity limitations, rule differences between college and pro, exponent choice of 2 vs Morey's 2.37). Must be >=400 words.

2. SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations:
- PE formula: PWR = SO^k / (SO^k + SD^k) where k=2 or k=2.37
- Winning Ratio WR = W / (W + L)
- Residual variance: σ² = (1/N) Σ (PWR_i - AWR_i)²
- Units: dimensionless probability [0,1], variance dimensionless squared probability
- Page citations: [PAGE 537], [PAGE 538], [PAGE 539], [PAGE 540], [PAGE 541]
- Breakdown regimes: when SO=0 or SD=0 (singularity), small sample? N=118-120 is population. Breakdown when scoring is zero (division by zero if both zero? Actually if SD=0, PWR=1. If SO=0, PWR=0). If both zero, 0/0 undefined.
- Verbatim quotes from source.

3. RETROCAUSAL_GENEALOGY: Historical lineage: Bill James 1980s baseball -> Miller 2007 -> Morey 2003 NFL (2.37), NBA (13.91), Oliver basketball (14), Cochran & Blackstock hockey (1.927), Dayaratna & Miller (2012), Rosenfeld et al overtime, Vogel 2012 Nebraska college football, Caro & Machtmes 2013 this study. Multi-week traps: retrospective nature means it cannot forecast future performance; using it for hiring/firing decisions assumes stationarity of team quality which may not hold across weeks/seasons; over/under achievement labels may be luck-driven regression to the mean.

4. RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but I need to interpret: coaches/Athletic Directors using PE to evaluate coaches may fall into crisis habit regression (firing coach after underperformance based on retrospective metric), counter-trap (hiring coach who over-performed PE but may be lucky), clock (end-of-game clock management differences between college and NFL affecting scoring, last two minutes clock stoppages, overtime rules). Need to discuss how the model's retrospective nature creates a recursive loop: AD fires coach based on PE residual, new coach inherits same structural factors, regression to mean makes new coach look good regardless.

5. CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Need to discuss factors that veto the model's applicability: weather (not in model), overtime rules (college vs NFL), pass interference rule differences (15 yards vs spot foul), clock management in last 2 minutes, possession maximization (fourth down decisions), turnovers, scoring offense/defense don't capture strength of schedule, injuries, home/away. These are physical/biomechanical/weather vetoes that the simple PE model ignores. Must be "veto proof" meaning show where the model breaks down.

6. RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I need to create 3 counterfactual veto scenarios with verifiable predictions. Must not mention betting lines. Examples:
- Scenario 1: Team with SD=0 (shutout every game) but SO=0 too? Undefined. Better: Team with SO >> SD but loses close games due to turnovers. Veto: turnover margin not captured. Prediction: high PWR but low AWR persists.
- Scenario 2: College overtime game (e.g., 7 OT Arkansas-Ole Miss 2001) where scoring explodes, violating normal scoring distribution. Veto: overtime scoring rules create non-stationary point totals. Prediction: residual variance spikes in seasons with multiple multi-OT games.
- Scenario 3: Coaching change mid-season or roster turnover. Veto: model assumes team identity stability across season. Prediction: teams with new head coach show larger residuals than returning coaches.

Need to ensure >=1000 words total across sections. No betting lines. No toy equations.

Let's count roughly: each section needs substantial content. THINK_TRACE >=400 words. Others should be detailed too.

Let's write carefully with page citations. Page markers from the source: I see 537, 538, 539, 540, 541, 542. I'll cite them as [PAGE 537] etc.

Important: "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I need verbatim quotes with page numbers.

Let's draft.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit.
- Start with Bill James formula: Win% = RS^2 / (RS^2 + RA^2). Adapted: PWR = SO^k / (SO^k + SD^k).
- Caro & Machtmes chose k=2 for simplicity, though Morey found 2.37 for pro football.
- Data: 835 team-seasons, 2005-2011, N=118-120 per year.
- Metric: Residual variance = (1/N) Σ (PWR - AWR)^2.
- Results: PE variance 0.006753 to 0.008709; Morey 0.006219 to 0.008621. Both order 10^-3.
- Gray zones: population vs sample assumption of Normal residuals; retrospective only [PAGE 541]; cannot forecast future; exponent sensitivity untested (they fixed k=2); omitted variables (strength of schedule, turnovers, fourth down, weather); USF example shows coach fired based on underperformance [PAGE 540].
- Word count target >400.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
Define:
\[
\mathrm{PWR}_i = \frac{\mathrm{SO}_i^k}{\mathrm{SO}_i^k + \mathrm{SD}_i^k}, \quad k \in \{2, 2.37\}
\]
where SO = scoring offense (points per game? or total points? The paper says scoring offense and scoring defense collected; likely points per game or total points. I'll state units: points per game or total seasonal points, dimensionless ratio output [0,1]).
\[
\mathrm{AWR}_i = \frac{W_i}{W_i + L_i}
\]
\[
\sigma^2_{\mathrm{res}} = \frac{1}{N}\sum_{i=1}^{N} (\mathrm{PWR}_i - \mathrm{AWR}_i)^2
\]
Units: probability^2 (dimensionless squared). Breakdown: SO=0 and SD=0 => 0/0 undefined; if SD=0, PWR=1; if SO=0, PWR=0. Normality assumption breakdown if residuals skewed by overtime blowouts.
Cite pages: formula introduced [PAGE 537]; Morey 2.37 [PAGE 537]; methods [PAGE 538]; results/table [PAGE 539]; limitations retrospective [PAGE 541]; USF example [PAGE 540].

RETROCAUSAL_GENEALOGY: Lineage and multi-week traps.
- James 1980s baseball [PAGE 537]
- Miller 2007 derivation [PAGE 537]
- Morey 2003 NFL 2.37, NBA 13.91 [PAGE 537]
- Oliver 2004 basketball 14 [PAGE 537]
- Cochran & Blackstock hockey 1.927 [PAGE 537]
- Vogel 2012 Nebraska college football [PAGE 537-538]
- Caro & Machtmes 2013 [PAGE 537-542]
Multi-week traps: retrospective metric used for prospective personnel decisions creates a fundamental mismatch; weekly variance in CFB due to injuries, weather, opponent strength means seasonal aggregation hides within-season trajectory; a team can underperform PE early and overperform late, canceling in residual but misleading AD.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: AD observes negative residual (AWR < PWR), fires coach ("crisis"), regresses to mean next season regardless of coach quality.
- Counter-trap: AD hires coach with positive residual (AWR > PWR), believing skill, but may be luck/schedule; new team reverts to PWR mean.
- Clock: College clock rules (first down stoppages in last 2 minutes? Actually paper says clock stoppages after first downs do not occur in NFL, implying they do in college? Let's check text: "clock stoppages after first downs do not occur in the NFL, which potentially shortens the game". So college DOES stop clock after first downs? Actually in college, clock stops on first downs until the ball is ready for play. In NFL it doesn't stop except last 2 minutes? The paper says game clocks same but managed differently last two minutes; clock stoppages after first downs do not occur in NFL. This implies college has them. This affects scoring and possession count. Overtime rules: college each team gets possession, third overtime no PAT kick, must go for 2 [PAGE 538]. These clock/possession rules mean points scored are not purely a function of team quality but of rule structure, violating the assumption that SO/SD capture all relevant scoring production.
Need to discuss how a coach's in-game clock management influences SO, which feeds PWR, creating a recursive loop where the metric evaluates decisions that the metric itself assumes are exogenous.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
Need to show physical/biomechanical/weather factors that veto model validity.
- Weather: wind, precipitation, temperature affect scoring offense/defense but not in model. Cold/windy games reduce passing, lower SO/SD asymmetrically.
- Biomechanical: player fatigue, injury status, travel across time zones, rest days between games. Not captured by aggregate SO/SD.
- Physical: field conditions (turf vs grass, dome vs outdoor), altitude.
- Rule-based vetoes: pass interference 15-yard college vs spot NFL [PAGE 538]; overtime possession rules [PAGE 538]; fourth-down decisions and clock management [PAGE 540].
- Veto proof: because SO and SD are reduced-form outcomes, they embed these vetoes but do not identify them; two teams with identical SO/SD can have different win probabilities due to veto layers. The model cannot distinguish skill from rule/context variance. Thus residuals are not "luck" but unmodeled physical/contextual variance.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
Need to define RLVR? Probably just "Reinforcement Learning Verifiable Reward" or similar. I'll treat as scenarios where the model would be vetoed by a verification layer.
Scenario 1: Zero-defense singularity. Team allows zero points (SD=0) in a season. Model yields PWR=1 regardless of SO. Verification: any team with a shutout season (rare in FBS) breaks the probabilistic interpretation. Prediction: if SD_i = 0 and SO_i > 0, PWR_i = 1.0, but actual wins may be < N if they tie or forfeit? In CFB no ties since overtime. Actually if they allow zero points they win every game, so AWR=1. Not a veto unless SO=0 too. Let's pick: Team scores zero points (SO=0) but wins via defensive touchdowns? If SO=0 (offense scores zero) but defense scores and wins? Scoring offense typically means points scored by offense? In NCAA stats, scoring offense is total points scored by team per game? Usually "scoring offense" is points per game scored by team. If a team wins 1-0 on a safety? Impossible in CFB? Actually a team can win with 0 offensive points if defense/special teams scores. But scoring offense in NCAA team stats usually means total points scored by the team. Let's avoid singularity and pick more realistic.

Scenario 1: Overtime scoring explosion veto. College overtime rules guarantee possession and can produce high scoring [PAGE 538]. Counterfactual: Two teams with identical regulation SO/SD but one plays multiple overtimes. Model predicts same PWR, but overtime inflates both SO and SD symmetrically? Actually OT adds points to both maybe not symmetric. Prediction: In seasons with ≥5 multi-overtime games among sample, residual variance increases because OT outcomes are closer to coin flips and break the Pythagorean power law. Verifiable: compare residual variance in 2005-2011 seasons stratified by number of games exceeding 4 quarters.

Scenario 2: Coaching-change instability veto. Model assumes team identity fixed across season [PAGE 538 defines observation as individual team for given year]. Counterfactual: Team fires coach mid-season; SO/SD from first half reflect old system, second half new system. Aggregate SO/SD is a mixture of two regimes. Prediction: teams with mid-season coaching changes exhibit |PWR - AWR| > 2σ_residual of stable teams. Verifiable: identify FBS coaching changes 2005-2011 and test residual outliers.

Scenario 3: Strength-of-schedule veto. SO/SD are not adjusted for opponent quality [PAGE 538-539]. Counterfactual: Team A plays FCS cupcakes, Team B plays all top-10 opponents. Same raw SO/SD but different true win probability. Model predicts same PWR. Prediction: residuals correlate with SOS (strength of schedule); high-SOS teams underpredict (negative residual) and low-SOS teams overpredict (positive residual). Verifiable: regress residuals on an independent SOS metric; slope significantly ≠ 0 vetoes the model's sufficiency.

Make sure no betting terms. No odds, spreads, moneylines, totals.

Need verbatim quotes. I'll include some:
- [PAGE 537]: "The Pythagorean Theorem Win/Loss formula, or the Pythagorean Expectation (PE), was first introduced by Bill James in the 1980’s to estimate the winning percentage for Major League baseball teams at a particular point in the season."
- [PAGE 537]: "Morey (2003), in a publication for STATS, Inc., reported the optimal exponential value in basketball to be 13.91."
- [PAGE 538]: "Statistics for the Division I teams participating in college football for the 2005 to 2011 seasons were obtained from the NCAA online database."
- [PAGE 538]: "The value of 2 for the exponent was chosen for simplicity in this formative study of this new model, as it is in reasonable keeping with previous work by Morey (2003) for professional football."
- [PAGE 539]: "Performance of the Pythagorean Expectation formula-based model was found to have a total variance each year between 2005 and 2011 between 0.00675 and 0.00871, while the Morey model for professional football as applied to collegiate football data was found to have a total variance for the given years between 0.00621 and 0.00862."
- [PAGE 540]: "If the predicted PE winning percentage is less than the actual winning percentage, a coach can come to understand if his team has 'overachieved' given the expectations of the PE model. Conversely, if the PE forecast is greater than the actual winning percentage, this can be an indicator of an 'underachieving' team."
- [PAGE 541]: "As previously noted, the PE model is strictly a retrospective model and cannot forecast future performance; thus, the utility of the model is severely limited."
- [PAGE 538]: "In college football, each team receives one possession to begin overtime play. Should the score remain tied after the first possession, the game continues under the same rules until the third overtime. In the third overtime, teams are no longer allowed to attempt a point-after-touchdown field goal, and instead, must try for a two-point conversion."

Now word count. I need to make sure total >=1000 words. Let's aim for ~1500-1800 words total. THINK_TRACE alone >400.

I must not mention betting lines. Be careful not to say "expected wins" in a betting context, but the paper itself talks about expected winning percentage. That's fine, it's not betting lines.

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

Check for any accidental "odds", "spread", "moneyline", "total" as betting term. The word "total" appears in paper ("wins plus losses"), but I should avoid using it as betting total. I can use "sum" instead.

Let's draft content carefully.

THINK_TRACE content:
- Derive from James formula.
- Morey exponent 2.37 vs chosen 2.
- Variance calculation.
- Population assumption and Normality.
- Gray zones: retrospective limitation, exponent not optimized for CFB, omitted variable bias (SOS, turnovers, fourth down), USF case study as decision rule.
- 400+ words.

SOURCE_OPERATORS_AND_EQUATIONS:
- LaTeX block.
- Units and definitions.
- Page citations.
- Breakdown/singularity regimes.
- Verbatim quotes.

RETROCAUSAL_GENEALOGY:
- Lineage chain.
- Multi-week traps: seasonal aggregation hides weekly variance, injury accumulation, opponent strength changes.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression (firing based on negative residual).
- Counter-trap (hiring based on positive residual).
- Clock (college clock/OT rules, last two minutes).
- Recursive loop: AD uses PE to evaluate coach, coach changes strategy to maximize points (fourth down attempts), which changes SO, which changes PWR, making metric self-referential.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: weather, altitude, field surface.
- Biomechanical: fatigue, injury, travel, rest.
- Rule/Context layer: PI penalty, clock management, overtime rules.
- Veto proof: two teams same SO/SD different outcomes; residuals not luck but unmodeled vetoes.

RLVR_COUNTERFACTUAL_VETOES:
- 3 scenarios with predictions.
- Verifiable.

Let's write now, watching word count.

I will produce the final output with only the XML sections and content, no extra preamble.
</NATIVE_REASONING>

<THINK_TRACE>
The Caro & Machtmes (2013) study adapts Bill James’s Pythagorean Expectation (PE) from Major League Baseball to NCAA Division I college football. The derivation begins with James’s original win-probability operator, in which a team’s expected winning percentage is a power function of offensive production relative to defensive production: PWR = SO^k / (SO^k + SD^k). In baseball, SO maps to runs scored and SD to runs allowed; in this college-football adaptation, SO is scoring offense and SD is scoring defense, both drawn from the NCAA online database for the 2005–2011 population of 835 team-seasons [PAGE 538]. The authors deliberately fix k = 2 rather than re-estimating an optimal exponent, citing simplicity and proximity to Morey’s (2003) professional-football value of 2.37 [PAGE 538]. This is a critical gray-zone choice: by not performing a grid search or maximum-likelihood optimization over k for the college sample, the study leaves open whether k = 2 is the minimizer of residual variance or merely a convenient anchor borrowed from a different sport and a different rule regime.

The performance operator is a population residual variance, not a sample statistic. For each team-season i, actual winning ratio AWR_i = W_i / (W_i + L_i) is compared to predicted winning ratio PWR_i. The squared deviation (PWR_i − AWR_i)^2 is summed across all N teams in a season and divided by N, yielding σ²_res = (1/N) Σ_i (PWR_i − AWR_i)^2 [PAGE 538–539]. Because the data cover all Division I teams rather than a random sample, the authors treat the distribution as a Normal population and assume the PE predictor is unbiased, so that deviations occur randomly toward over- or under-performance and decrease in frequency with extremity [PAGE 538]. This assumption is a gray zone: the Normality of residuals is asserted as a first approximation, not tested with a goodness-of-fit statistic, and the power-law structure of the PE formula may generate heteroscedastic errors when SO and SD are small or highly skewed (e.g., option-offense teams with low variance in scoring).

The reported results place both models in the same order of magnitude. The adapted PE model yields annual residual variances between 0.006753 (2008) and 0.008709 (2011); the Morey model yields 0.006219 (2007) to 0.008621 (2011) [PAGE 539]. Both are O(10^-3), leading the authors to conclude the formula is accurate enough for retrospective program evaluation [PAGE 539–540]. However, the paper explicitly states the model is strictly retrospective and cannot forecast future performance, severely limiting prospective utility [PAGE 541]. A further gray zone is the use of the residual to label coaches as over- or under-achieving: the paper’s South Florida example traces predicted versus actual winning percentages across 2010–2012 and connects the pattern to a coaching dismissal [PAGE 540], yet the residual conflates luck, strength of schedule, turnover variance, and in-game decision noise with coaching quality. Because no strength-of-schedule adjustment or turnover variable enters the model, the attribution of residual variance to the coach is causally unidentified.

Another gray zone is the cross-sport transplant of the exponent. Morey’s 2.37 was estimated for NFL football, where pass-interference is a spot foul, clocks do not stop after first downs outside the final two minutes, and overtime uses modified sudden death [PAGE 538]. College football differs on all three dimensions, plus its overtime possession format and third-overtime two-point conversion mandate [PAGE 538]. These rule differences alter the mapping between points scored/allowed and wins, meaning k = 2.37 may be misspecified for college football even before considering that the authors chose k = 2 instead. The study acknowledges these rule differences but does not estimate separate college-specific exponents or interact the exponent with rule-induced scoring regimes, leaving the functional form vulnerable to omitted-variable bias at the rule-structure layer.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators from Caro & Machtmes (2013), with units and page anchors.

1. Pythagorean Expectation operator (adapted):
\[
\operatorname{PWR}_i(k) = \frac{(\mathrm{SO}_i)^k}{(\mathrm{SO}_i)^k + (\mathrm{SD}_i)^k}, \qquad k \in \{2,\; 2.37\}
\]
where \(\mathrm{SO}_i\) is scoring offense and \(\mathrm{SD}_i\) is scoring defense for team-season \(i\); output is a dimensionless probability in \([0,1]\). The paper notes Bill James introduced the formula for baseball using runs scored and runs allowed [PAGE 537]; Morey’s professional-football adaptation used \(k=2.37\) [PAGE 537]; the present study fixes \(k=2\) “for simplicity” [PAGE 538].

2. Actual winning ratio:
\[
\operatorname{AWR}_i = \frac{W_i}{W_i + L_i}
\]
dimensionless, in \([0,1]\).

3. Residual variance (population):
\[
\sigma^2_{\mathrm{res}} = \frac{1}{N}\sum_{i=1}^{N}\left(\operatorname{PWR}_i(k) - \operatorname{AWR}_i\right)^2
\]
units: squared probability (dimensionless\(^2\)); \(N\) is the number of Division I teams that season (118–120) [PAGE 538–539].

Singularity and breakdown regimes:
- If \(\mathrm{SO}_i = 0\) and \(\mathrm{SD}_i = 0\), the operator evaluates \(0/0\), undefined.
- If \(\mathrm{SD}_i = 0\) and \(\mathrm{SO}_i > 0\), \(\operatorname{PWR}_i = 1\) exactly, regardless of the magnitude of offense; the model cannot distinguish a dominant offense from a trivial one when defense concedes nothing.
- If \(\mathrm{SO}_i = 0\) and \(\mathrm{SD}_i > 0\), \(\operatorname{PWR}_i = 0\) exactly.
- Normality assumption breakdown: residuals are assumed Normal and unbiased [PAGE 538], but overtime rules in college football guarantee each team a possession and, in the third overtime, require two-point conversion attempts instead of point-after-touchdown kicks [PAGE 538], which can generate heavy-tailed scoring events that violate the light-tail assumption.

Reported empirical variances from Table 1 and Table 2 [PAGE 539]:
- PE model: 2005 \(\sigma^2 = 0.007820\); 2006 \(0.008115\); 2007 \(0.006819\); 2008 \(0.006753\); 2009 \(0.008699\); 2010 \(0.008014\); 2011 \(0.008709\).
- Morey model: 2005 \(0.008218\); 2006 \(0.008468\); 2007 \(0.006219\); 2008 \(0.006872\); 2009 \(0.008389\); 2010 \(0.008290\); 2011 \(0.008621\).
Both are characterized as “error of magnitude \(10^{-3}\)” [PAGE 540].

Verbatim source anchors:
- “The Pythagorean Theorem Win/Loss formula, or the Pythagorean Expectation (PE), was first introduced by Bill James in the 1980’s to estimate the winning percentage for Major League baseball teams at a particular point in the season.” [PAGE 537]
- “The value of 2 for the exponent was chosen for simplicity in this formative study of this new model, as it is in reasonable keeping with previous work by Morey (2003) for professional football.” [PAGE 538]
- “Performance of the Pythagorean Expectation formula-based model was found to have a total variance each year between 2005 and 2011 between 0.00675 and 0.00871…” [PAGE 539]
- “As previously noted, the PE model is strictly a retrospective model and cannot forecast future performance; thus, the utility of the model is severely limited.” [PAGE 541]
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage runs from Bill James’s 1980s baseball insight through a chain of sport-specific exponents. Miller (2007) derived the baseball won-loss formula [PAGE 537]; Morey (2003) exported the framework to professional football with \(k=2.37\) and to basketball with \(k=13.91\) [PAGE 537]; Oliver (2004) independently found \(k=14\) for basketball [PAGE 537]; Cochran and Blackstock (2009) estimated \(k=1.927\) for hockey, while Dayaratna and Miller (2012) accepted exponents slightly above 2 for hockey [PAGE 537]; Rosenfeld et al. (2005) extended the formula to overtime outcomes across football, basketball, and baseball [PAGE 537]. Vogel (2012) first tested the PE formula on college football, applying Morey’s 2.37 to twenty years of Nebraska football and computing annual “luck” values [PAGE 537–538]. Caro & Machtmes (2013) complete this genealogy by testing the original James exponent \(k=2\) across the full Division I population from 2005 to 2011 [PAGE 537–542].

Multi-week traps emerge when this retrospective, season-aggregated genealogy is applied to a weekly college-football environment. First, the model collapses an entire season into two scalars (SO and SD), erasing the trajectory of team quality. A team that loses its starting quarterback in week 4 and plays conservatively thereafter will have a season SO that blends two distinct regimes; the residual cannot attribute the decline to the injury because the model contains no injury or quarterback variable [PAGE 538]. Second, strength of schedule is absent: a team that pads its scoring offense against FCS opponents and a team that plays a top-ten schedule every week may record identical raw SO and SD, producing identical PWR despite different latent win probabilities. Third, college football’s overtime structure introduces non-stationarity: because each team receives a possession and the third overtime mandates two-point conversions [PAGE 538], a single multi-overtime game can distort seasonal scoring totals in a way the power law does not anticipate. Fourth, the clock rules differ from the NFL—college football stops the clock after first downs, while the NFL does not outside the final two minutes [PAGE 538]—which changes possession counts and scoring opportunities week to week. These multi-week traps mean that a coach hired or fired based on a single-season PE residual is being evaluated on a measure that cannot disentangle within-season attrition, schedule difficulty, or overtime variance from persistent coaching skill.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The decision loop around the PE model contains three interlocking dynamics: crisis habit regression, counter-trap hiring, and clock-induced recursion.

Crisis habit regression occurs when an athletic director observes \(\operatorname{PWR} > \operatorname{AWR}\), labels the team “underachieving,” and terminates the coach [PAGE 540]. Because the residual mixes luck, schedule, turnovers, and coaching, the dismissal targets a partially exogenous signal. The successor inherits the same roster, schedule, and institutional constraints; regression toward the mean in the residual will often make the new coach look competent even if nothing structural changed. The PE metric therefore generates a self-fulfilling narrative: the old coach is blamed for variance the model cannot explain, and the new coach receives credit for mean reversion.

The counter-trap is the symmetric error: hiring a coach whose team shows \(\operatorname{AWR} > \operatorname{PWR}\) (“overachieving”) under the assumption that the positive residual reflects reproducible skill [PAGE 540]. If the overperformance was driven by close-game luck, turnover margin, or a weak schedule, the new hire will likely revert to the Pythagorean mean, leaving the athletic director with a costly misattribution.

Clock-induced recursion operates at the in-game level. The paper argues that fourth-down decisions, field-goal versus fourth-down attempts, and pace/tempo affect scoring offense, which is an input to PWR [PAGE 540]. Yet the model treats SO and SD as given inputs that summarize coaching quality, while simultaneously recommending that coaches use PWR to inform those same in-game decisions. This creates a recursive loop: the coach adjusts fourth-down aggression to maximize points and thereby improve PWR; the improved PWR then validates the coach’s decisions ex post, even though the causal contribution of those decisions to wins is confounded by opponent strength and game state. College-specific clock management—particularly first-down clock stoppages and the final-two-minutes differential [PAGE 538]—means that the same coaching decision can yield different point totals depending on when it occurs, further weakening the assumption that SO is a stable measure of offensive capability independent of clock context.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The PE model’s claim of accuracy is vetoed at three cross-layer strata: physical, biomechanical, and rule/contextual.

Physical layer: Weather, altitude, and field surface are not represented in SO or SD. A cold, windy November game in the Midwest suppresses passing efficiency and can depress scoring offense asymmetrically relative to a dome game; a team playing at altitude may experience different fatigue and scoring patterns. Because the model uses only aggregate points scored and allowed, two teams with identical SO and SD but different weather exposure receive identical PWR despite different physical scoring environments. The residual therefore absorbs weather variance as if it were coaching “luck.”

Biomechanical layer: Player fatigue, injury accumulation, travel across time zones, and short-week rest are omitted. A team playing its fifth road game in six weeks with a depleted secondary will allow more points, raising SD and lowering PWR, yet the model cannot distinguish scheme failure from personnel unavailability. Since the observation is defined as a single team-season aggregate [PAGE 538], within-season injury shocks are averaged away, but their impact on wins remains in AWR, inflating residual variance without improving causal identification.

Rule/contextual layer: The paper itself identifies rule differences that break the NFL-to-college transplant. College pass interference is a 15-yard penalty from the line of scrimmage, whereas the NFL marks it at the spot of the foul [PAGE 538], directly affecting field position and scoring probability. Clock management differs in the last two minutes of each half, with college stoppages after first downs that the NFL lacks [PAGE 538]. Overtime rules guarantee each team a possession and, by the third overtime, require two-point conversions instead of kicks [PAGE 538], producing scoring outcomes closer to a possession lottery than the power-law scoring process assumed by PE.

Verdict: the model is not veto-proof. The residual variance of order \(10^{-3}\) [PAGE 539–540] does not isolate coaching quality; it is a composite of unmodeled physical conditions, biomechanical attrition, and rule-induced scoring noise. Any personnel decision that treats the residual as a purified measure of coach performance commits an attribution error: the veto layers demonstrate that identical SO/SD pairs can map to different win probabilities, so the PE operator is insufficient for causal adjudication.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios, each with a falsifiable prediction.

Scenario 1: Overtime explosion veto.
Counterfactual: In a given season, the number of games extending beyond regulation increases sharply because college overtime guarantees possessions and third-overtime two-point conversion attempts [PAGE 538]. These games inflate SO and SD in ways unrelated to the teams’ regulation scoring power.
Verification: Stratify the 2005–2011 sample by the count of multi-overtime games per season and compare residual variance \(\sigma^2_{\mathrm{res}}\) between high-overtime and low-overtime years.
Prediction: Seasons in the top quartile of multi-overtime frequency will exhibit \(\sigma^2_{\mathrm{res}}\) significantly above the 0.00675–0.00871 band reported in Table 1 [PAGE 539], because overtime scoring is closer to a coin flip and violates the power-law scoring assumption.

Scenario 2: Mid-season coaching-change mixture veto.
Counterfactual: A team fires its head coach mid-season. The first half of the season reflects System A (one offensive/defensive identity), and the second half reflects System B. The seasonal SO and SD are a mixture of two distinct regimes, but the model assumes one team-season observation [PAGE 538].
Verification: Identify FBS teams with mid-season coaching changes from 2005 to 2011 and test whether their absolute residuals \(|\operatorname{PWR} - \operatorname{AWR}|\) exceed the population residual standard deviation \(\sqrt{0.008} \approx 0.089\) more often than teams with no coaching change.
Prediction: Mid-season coaching-change teams will be over-represented among residual outliers (|residual| > 2\(\sigma\)), demonstrating that the model cannot accommodate intra-season regime switches.

Scenario 3: Strength-of-schedule veto.
Counterfactual: Team A plays a schedule dominated by FCS cupcakes and non-power-conference opponents; Team B plays exclusively top-25 opposition. Both teams finish with identical raw SO and SD because Team A inflates statistics against weak foes while Team B’s scoring is depressed by elite defenses.
Verification: Regress the PE residual \((\operatorname{PWR} - \operatorname{AWR})\) on an independent strength-of-schedule measure (e.g., opponent winning percentage) for the 835 team-seasons.
Prediction: The regression slope will be significantly negative, meaning high-SOS teams systematically underpredict (negative residual) and low-SOS teams overpredict (positive residual). A nonzero slope falsifies the claim that SO and SD alone suffice for expected winning percentage [PAGE 538–539].
</RLVR_COUNTERFACTUAL_VETOES>