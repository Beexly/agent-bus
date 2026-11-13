---
source: "2023 - Are Surprise Teams in the MLB in 2023 More Surprising - Federico et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Wharton Sports Analytics Journal/2023"
pages: 8
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4747
---

<NATIVE_REASONING>
The user wants me to analyze a research paper from the Wharton Sports Analytics Journal. Let me carefully review the source text provided.

The paper: "Are 'Surprise Teams' in the MLB in 2023 More Surprising?" by Chad Federico, Kotaro Nagano, and Alejandro Wick. Moneyball Academy Training Camp, 2023. Pages 1-8.

Key content:
- Examines whether surprise teams in MLB 2023 are more surprising than recent years (2021-2023).
- Data from 2021-2023 MLB seasons as of June 29th for each season (roughly 80 games/half season).
- Found relative payrolls (full team payroll / median team payroll).
- To account for injuries: relative active payrolls (active man payroll / median active man payroll).
- Used win% (different games played by year).
- Used Pythagorean win% to account for luck.
- Plotted Raw and Pythagorean Win Percentages vs Relative Payrolls and Relative Active Payrolls.
- Correlation coefficients for all 4 relationships for each year.

Results table:
Season | Raw vs Yearly | Pyth vs Yearly | Raw vs Active | Pyth vs Active
2021 | 0.5261730 | 0.5338243 | 0.5691161 | 0.5721851
2022 | 0.6829967 | 0.6822396 | 0.7233854 | 0.6907564
2023 | 0.1506257 | 0.3002661 | 0.1812102 | 0.3490120

Conclusion: Surprise teams in 2023 are indeed more surprising. Correlations between win percentages and relative payrolls significantly less in 2023 (moderate to weak). Injuries and luck play some role. Slope becomes closer to previous years as luck and injuries factored out.

Next steps: stronger model, longer data, more confounding variables, examine rule changes in 2023, what causes surprise team to emerge.

Now I need to produce the response with strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting lines whatsoever.
- No toy equations (no Force/Fatigue type fake ratios). Must use formal LaTeX equations with units, assumptions, singularity/breakdown regimes.
- Must cite exact [PAGE N] markers and verbatim quotes from source.
- Must hit word count >=1000 across sections. THINK_TRACE must be >=400 words alone.

Let me think about how to structure this.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. I need to derive the logical implications of the correlation coefficients dropping from ~0.5-0.72 to ~0.15-0.35. Discuss Pythagorean expectation formula: WP = RS^2 / (RS^2 + RA^2) or exponent variants. The paper uses Pythagorean win% as "luck" adjustment. Gray zones: small sample (80 games, half season), payroll data as of June 29, relative payroll ratios, active man payroll injury adjustment, correlation vs causation, survivor bias, rule changes (pitch clock, shift ban, larger bases in 2023), the fact that correlation dropping doesn't necessarily mean more "surprise" teams but weaker payroll-win relationship. Also the breakdown regimes: when sample size is too small for correlation stability, when payroll is non-stationary mid-season, when active payroll misclassifies injured players on IL vs active roster, when Pythagorean residual conflates luck with bullpen management / one-run game skill.

Need to cite [PAGE 1] through [PAGE 8] with verbatim quotes.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Define:
- Relative payroll: \( r_{i,y} = \frac{P_{i,y}}{\tilde{P}_y} \) where \( P \) is full team payroll, \( \tilde{P}_y \) median team payroll in season y. Dimensionless.
- Relative active payroll: \( r^{act}_{i,y} = \frac{P^{act}_{i,y}}{\tilde{P}^{act}_y} \).
- Raw win percentage: \( WP^{raw}_{i,y} = \frac{W_{i,y}}{G_{i,y}} \), dimensionless probability [0,1].
- Pythagorean win percentage: \( WP^{pyth}_{i,y} = \frac{RS_{i,y}^\gamma}{RS_{i,y}^\gamma + RA_{i,y}^\gamma} \), commonly \( \gamma \approx 2 \) (Bill James) or Pythagenpat \( \gamma = (RS+RA)^{0.287} \) per game. Dimensionless.
- Pearson correlation: \( \rho(X,Y) = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} \).
- The four relationships per season: \( \rho(WP^{raw}, r) \), \( \rho(WP^{pyth}, r) \), \( \rho(WP^{raw}, r^{act}) \), \( \rho(WP^{pyth}, r^{act}) \).

Table values as given. Drop in 2023: e.g. Raw vs Yearly from 0.6829967 (2022) to 0.1506257 (2023). That's a ~78% relative decline. Pyth vs Active from 0.6907564 to 0.3490120 (~49% decline).

Assumptions: payroll measured at June 29 snapshot; win% comparable across seasons despite slightly different games played; Pythagorean residual isolates "luck"; active payroll isolates injury effect; 3 seasons sufficient for comparison.

Breakdown/singularity regimes: n=30 teams per season (MLB), df=28 for correlation significance; at n=80 games, binomial standard error of win% is sqrt(p(1-p)/80) ≈ 0.055 for p=0.5, so observed win% has ~±11 percentage points 95% margin, causing attenuation bias in correlation. When \( \sigma_X \to 0 \) (payroll compression), correlation undefined. When payroll and wins are confounded by mid-season trades, snapshot payroll misrepresents roster that produced wins.

RETROCAUSAL_GENEALOGY: Historical lineage. Bill James Pythagorean expectation (1970s/1980s), Baseball Prospectus, "luck" vs skill decomposition. Moneyball (Lewis 2003), payroll-win relationship literature (e.g., Zimbalist, Fort, Vrooman). The paper's lineage: Moneyball Academy Training Camp 2023. Multi-week traps: small-sample trap (June 29 snapshot), regression to mean trap (early surprise fades by September), payroll stickiness trap (payroll set in March/April, injuries accumulate), rule-change confound (2023 pitch timer, shift restrictions, bigger bases) affecting scoring environment and win distribution independently of payroll.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is a specific theoretical framing. Teams that are "surprise" good (Rays, Reds, D-backs, Marlins) or bad (Mets, Padres) face recursive expectations: market/public adjusts, opposing teams game-plan differently, trade deadline behavior changes. Crisis habit regression: underperforming high-payroll teams (Mets, Padres) regress via panic trades, roster churn, coaching changes; overperforming low-payroll teams face regression as opponents adapt and injury luck normalizes. Counter-trap: the belief that "2023 is more surprising" may itself be a trap—checking whether correlation collapse is real or an artifact of payroll dispersion compression and small-n sampling. Clock: June 29 snapshot vs full season; the paper explicitly notes only half season. Predictions about second half: correlations likely to partially rebound toward 2021/2022 levels as luck regresses, unless structural rule changes persist.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Need to argue physical/biomechanical/weather factors that veto simple payroll-win narratives. Pitch clock (2023 rule change) affects pitcher recovery time, biomechanical load, injury rates (elbow/shoulder), bullpen usage. Weather (heat, humidity, wind) affects run scoring and Pythagorean residuals; stadium-specific factors. Biomechanical: pitcher workload, sprint speed, defensive positioning (shift ban affects infield positioning and BABIP). These veto layers mean payroll alone cannot explain surprise; physical constraints and weather introduce variance uncorrelated with payroll.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. Need 3 counterfactual veto scenarios that are verifiable, with predictions.
1. Veto: If 2023 full-season correlations (through end of season) are recomputed and remain below 0.4, then the June snapshot surprise is not purely small-sample attenuation; prediction: full-season 2023 Raw vs Yearly < 0.45.
2. Veto: If we control for 2023 rule changes (pitch clock, shift ban) by comparing 2023 to a synthetic control of 2022 teams under 2023 rules, and the correlation drop disappears, then the surprise is rule-change driven not payroll-driven; prediction: adjusted 2023 correlation ≈ 2022 levels.
3. Veto: If active payroll adjustment does not significantly narrow the gap between Raw vs Yearly and Raw vs Active in 2023 (gap remains >0.10), then injuries are not a primary driver; prediction: \(|\rho(WP^{raw}, r) - \rho(WP^{raw}, r^{act})| > 0.10\) in 2023.

I must not mention betting lines. Must not use toy equations. Must use formal LaTeX with units and assumptions.

Word count: Need >=1000 words total. THINK_TRACE >=400 words. Let me make sure each section is substantial. I'll aim for roughly:
- THINK_TRACE: ~500 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~300 words
- RETROCAUSAL_GENEALOGY: ~250 words
- RECURSIVE_THEORY_OF_MIND: ~250 words
- CROSS_LAYER_VETO_ADJUDICATION: ~200 words
- RLVR_COUNTERFACTUAL_VETOES: ~200 words
Total ~1700 words. Good.

Need verbatim quotes and [PAGE N] markers. Let me pull exact quotes:
[PAGE 1]: Title and authors. "By:Chad Federico, Kot aro Nagano, and Alejandro Wick" and "Moneyball Academy Training Camp, 2023".
[PAGE 2]: "Many teams, about halfway through the 2023 season, are playing much better (Rays, Reds, Diamondbacks, Marlins) or worse (Mets, Padres) than expected, especially considering team payrolls." Also "Surprise teams usually have a pythagorean win percentage (based on the total amount of runs scored and allowed) quite different than their actual win percentage." Also "Luck/ chance is always a factor in “surprise teams” such as these, but is the extent to which we’re seeing these teams surprise is greater in 2023 than recent years?"
[PAGE 3]: "Data from 2021-2023 MLB Seasons as of June 29th for each season (roughly 80 games or half of a season)". "Found relative payrolls (full team payroll/ median team payroll) for each team in each season". "To account for injuries, we also found relative active payrolls (active man payroll/ median active man payroll)". "Slightly different amount of games played depending on the year, so we used win %". "To account for “luck”, we also used the pythagorean win %". "Plotted Raw and Pythagorean Win Percentages vs. Relative Payrolls and Relative Active Payrolls". "Created a graph comparing the correlation coefficient for all 4 relationships for each year".
[PAGE 4]: Headers: "Win % vs Relative Payroll", "Pyth. Win % vs Relative Payroll", etc. "No confounding variables factored out", "Factored out “luck”", "Factored out injury", "Factored out injury and “luck”".
[PAGE 5]: Table values. "Correlation Coefficient of Relationship Between Raw/Pythagorean Win % and Yearly/Active Man Relative Payroll".
[PAGE 6]: "Significant gap caused by the “luck” factor, or the pythagorean win %". "Steep drop in 2023, indicating greater variability in “surprise teams”".
[PAGE 7]: Conclusion: "The “Surprise Teams” of the 2023 MLB Season are indeed more surprising than previous years". "Correlations between win percentages and relative payrolls are significantly less in 2023 (goes from moderate to weak relationship)". "Factors such as injuries (active man payroll) and being “lucky” (pythagorean win%) do play some role. The slope of the line of best fit for 2023 becomes closer to the previous years as luck and injuries are factored out."
[PAGE 8]: Next steps bullets. "Create a stronger, more accurate model to justify the definition of a “surprise team”". "Take the data back longer than 3 seasons". "Factor out as many other confounding variables as possible". "Examine if new rule changes newly implement ed for the 2023 season have also led to the greater surprise we’ve seen". "What causes a “surprise team” to emerge?".

I will cite these.

Now let's draft carefully.

Structure:
```xml
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
</RECURSO...>
...
```

I need to ensure no betting language. Avoid "spread", "total", "moneyline", "odds", "favorite", "underdog" in betting context. It's okay to say teams expected to perform better/worse based on payroll, but avoid betting terminology.

Also avoid toy equations like Force/Fatigue. All equations formal with LaTeX, units, assumptions, breakdown regimes.

Let's write.

THINK_TRACE content plan:
- Open with the empirical shock: correlation collapse in 2023. Multi-hop: raw vs yearly payroll 0.6829967 (2022) -> 0.1506257 (2023); Pyth vs Active 0.6907564 -> 0.3490120.
- Derive what this means: payroll explains ~46% of variance in 2022 (r^2 ~0.466) vs ~2.3% in 2023 (r^2 ~0.023) for raw vs yearly. That's a massive attenuation.
- Discuss the chain: payroll -> roster talent -> run differential -> wins. In 2023, this chain broke.
- Gray-zone audit: (1) n=30, df=28, correlation significance threshold ~0.36 for p<0.05; 2023 raw vs yearly 0.1506 is below threshold, so statistically indistinguishable from zero at n=30. (2) Small sample: 80 games, binomial SE ~0.055, measurement error in win% attenuates correlation (classical errors-in-variables). (3) Snapshot payroll on June 29 [PAGE 3] does not equal payroll of roster that produced those wins (injuries, call-ups, trades). (4) Pythagorean "luck" residual [PAGE 2] conflates true luck with bullpen leverage management, one-run game skill, and sequencing. (5) Active payroll [PAGE 3] is a proxy, not a direct injury count. (6) Only 3 seasons [PAGE 5, 8], cannot establish time series. (7) 2023 rule changes [PAGE 8] are a confound the authors themselves flag.
- Conclusion of audit: The claim "more surprising" is supported descriptively but the causal attribution is under-identified; the gray zone is between "genuine competitive parity increase" and "measurement artifact + rule-change shock".

Need to keep >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS:
Define all variables with LaTeX.
\( r_{i,y} = P_{i,y} / \tilde{P}_y \) dimensionless.
\( r^{act}_{i,y} = P^{act}_{i,y} / \tilde{P}^{act}_y \).
\( WP^{raw}_{i,y} = W_{i,y} / G_{i,y} \in [0,1] \).
\( WP^{pyth}_{i,y} = RS_{i,y}^{\gamma} / (RS_{i,y}^{\gamma} + RA_{i,y}^{\gamma}) \in [0,1] \). Note: standard Bill James exponent \(\gamma=2\); Pythagenpat \(\gamma = ((RS+RA)/G)^{0.287}\) (if using per-game runs). The paper doesn't specify exponent, so I must state assumption: assuming \(\gamma=2\) unless otherwise specified, but note this is a modeling assumption not in source. Actually, the source doesn't give formula. I can state "The paper references 'pythagorean win percentage (based on the total amount of runs scored and allowed)' [PAGE 2] but does not print the exponent; I adopt the canonical Jamesian form \(\gamma=2\) as an assumption, with breakdown if the true exponent deviates."
- Pearson \( \rho \).
- Table reproduced.
- Breakdown regimes: \( \sigma_r \to 0 \) correlation undefined; \( G \to 0 \) win% variance dominated by binomial noise; \( n=30 \) df=28, critical |r| ≈ 0.361 for α=0.05 two-tailed (standard table). 2023 values below this.

RETROCAUSAL_GENEALOGY:
- Lineage: Bill James Pythagorean expectation (abstracted from baseball, 1970s-80s), formalized as win probability from run differential. Moneyball (payroll inefficiency, market inefficiencies). Literature on payroll-win correlation in MLB (typically moderate positive). The paper is a Moneyball Academy Training Camp artifact [PAGE 1].
- Multi-week traps: small-sample trap (June 29 snapshot), regression-to-the-mean trap (surprise teams revert), payroll-stickiness trap (payroll fixed pre-season but wins accrue mid-season under injuries/trades), rule-change trap (2023 pitch timer, shift ban, larger bases [PAGE 8] alters scoring and win distribution independently of payroll).

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: high-payroll underperformers (Mets, Padres [PAGE 2]) face recursive pressure: trade deadline sell-off, managerial scrutiny, roster churn -> further performance deviation from payroll expectation. Low-payroll overperformers (Rays, Reds, D-backs, Marlins [PAGE 2]) face opponent adaptation and injury normalization.
- Counter-trap: The narrative "2023 is uniquely surprising" may be a self-confirming trap; the correlation drop could be statistical artifact rather than structural change.
- Clock: June 29 vs season end [PAGE 3]; second-half regression likely to push correlations back toward historical norms unless rule effects persist.
- Predictions: (a) September correlations for 2023 will partially recover vs June snapshot but likely remain below 2021-2022 if rule-change variance is structural; (b) teams identified as surprise at June 29 will show greater second-half win% regression than payroll-matched controls.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical/biomechanical: 2023 pitch clock reduces between-pitch recovery, increasing pitcher biomechanical load (elbow varus torque, shoulder fatigue), shifting run prevention away from payroll-heavy starters toward bullpen depth; this vetoes payroll-only explanations because bullpen depth is not linearly payroll-scaled.
- Weather: temperature, humidity, wind, and park factors affect RS and RA [PAGE 2 Pythagorean basis] independently of payroll, inflating Pythagorean residuals in warm months.
- Biomechanical/defensive: shift ban alters infielder positioning and BABIP; larger bases affect stolen base rates and defensive indifference; these change run differential without payroll changes.
- Conclusion: veto proof requires showing payroll-win correlation remains low after conditioning on pitch-clock exposure, weather-adjusted park factors, and shift-ban BABIP residuals. Paper does not do this [PAGE 8 next steps].

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable RLVR veto scenarios + predictions. RLVR likely means we need scenarios where if condition X holds, the conclusion is vetoed, with a verifiable prediction.
Scenario 1: Full-season attrition veto. If end-of-season 2023 Raw vs Yearly correlation (computed over 162 games) is ≥ 0.40, then the June 29 collapse is a small-sample artifact, not evidence that 2023 teams are inherently more surprising. Prediction: end-of-season correlation > June snapshot 0.1506257.
Scenario 2: Rule-change counterfactual veto. If a matched-pair comparison of 2022 teams simulated under 2023 rules (pitch clock, shift ban, larger bases) reproduces the 2023 correlation drop to ~0.15-0.35, then rule changes, not payroll decoupling, explain the surprise. Prediction: simulated 2022-under-2023-rules Raw vs Yearly ≤ 0.25.
Scenario 3: Injury-proxy veto. If the gap between Raw vs Yearly and Raw vs Active in 2023 remains statistically indistinguishable from zero (i.e., \(|\rho(WP^{raw},r) - \rho(WP^{raw},r^{act})| < 0.05\)), then active payroll/injuries are not a material confounder and the authors' claim that injuries "play some role" is unsupported. Prediction: observed gap 0.1812102 - 0.1506257 = 0.0305845, which is below 0.05, so this veto may actually hold—meaning injuries barely matter in this dataset.

Wait, I need to be careful: The paper says active payroll difference: Raw vs Yearly 0.1506257 vs Raw vs Active 0.1812102, gap ~0.0306. Very small. So injuries barely matter for raw. Pyth vs Yearly 0.3002661 vs Pyth vs Active 0.3490120, gap ~0.0487. So Pythagorean vs active payroll shows slightly larger gap but still modest.

I will formulate these clearly.

Now word count check. I need to write enough. Let's compose.

I must not mention betting lines. I'll avoid words like "odds", "spread", "total", "moneyline". I'll use "win probability", "correlation", "payroll", etc.

Let's write the final output. I'll aim for rich, formal prose.

Make sure XML tags are exact. No markdown code blocks around them? Just raw XML sections. I'll include LaTeX inside.

Let's draft.
</NATIVE_REASONING>

<THINK_TRACE>
The empirical core of the source is a correlation collapse between payroll and performance in 2023 relative to 2021–2022. The paper reports Pearson correlation coefficients for four payroll–win relationships across three seasons [PAGE 5]. For Raw Win % vs Yearly Relative Payroll, the coefficient falls from 0.5261730 in 2021 and 0.6829967 in 2022 to 0.1506257 in 2023. For Pythagorean Win % vs Active Relative Payroll, it falls from 0.5721851 (2021) and 0.6907564 (2022) to 0.3490120 (2023) [PAGE 5]. A multi-hop derivation proceeds as follows. First, squaring the coefficients approximates the share of variance in win percentage explained by relative payroll: in 2022, Raw vs Yearly explains roughly 0.466 (46.6%) of variance, whereas in 2023 it explains only about 0.023 (2.3%). Second, the paper’s own summary states the relationship “goes from moderate to weak” in 2023 [PAGE 7], and the results section describes a “Steep drop in 2023, indicating greater variability in ‘surprise teams’” [PAGE 6]. Third, the authors conclude that surprise teams are “indeed more surprising than previous years” [PAGE 7], while acknowledging that injuries and luck play some role and that the slope of the line of best fit normalizes somewhat once those factors are factored out [PAGE 7].

The gray-zone audit must address identification limits. The sample is n = 30 MLB teams per season, yielding df = 28 for a Pearson correlation; at α = 0.05 two-tailed, the critical |r| is approximately 0.361. The 2023 Raw vs Yearly coefficient of 0.1506257 lies below that threshold, so it is statistically indistinguishable from zero at the team level in this snapshot [PAGE 3, PAGE 5]. The data are limited to roughly 80 games as of June 29th for each season [PAGE 3]. At G = 80 and true p = 0.50, the binomial standard error of observed win % is sqrt[p(1−p)/G] ≈ 0.0559, implying a ±11 percentage-point 95% sampling band around any team’s raw win %. Classical errors-in-variables in the dependent variable attenuate the observed correlation toward zero, meaning part of the 2023 drop may be measurement noise rather than structural decoupling. The payroll snapshot is taken mid-season [PAGE 3], so relative payroll does not necessarily reflect the payroll of the roster that produced the observed wins; injuries, call-ups, trades, and service-time manipulation introduce mismatch between the exposure (payroll) and the outcome (win %). The “active man payroll” injury adjustment [PAGE 3] is a proxy, not a direct injury count or games-missed metric. The Pythagorean residual [PAGE 2] is labeled “luck,” but it conflates sequencing variance, bullpen leverage management, one-run-game outcomes, and park effects with true randomness. Finally, the series covers only three seasons [PAGE 5, PAGE 8], too short to separate a one-year regime shift from sampling variation, and the authors themselves flag 2023 rule changes as an unexamined confound [PAGE 8]. The derivatively correct position is therefore: the descriptive claim that 2023 payroll explains less win variance is supported by the coefficients, but the causal attribution to “greater surprise” is under-identified until small-sample attenuation, injury misclassification, Pythagorean misspecification, and rule-change confounds are ruled out.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let season index y ∈ {2021, 2022, 2023} and team index i ∈ {1,…,30}. Define all quantities as dimensionless ratios or probabilities unless noted.

Relative yearly payroll:
\[ r_{i,y} = \frac{P_{i,y}}{\tilde{P}_{y}} \]
where P_{i,y} is full team payroll and \tilde{P}_{y} is the median team payroll in season y [PAGE 3]. Unit: none (ratio).

Relative active payroll (injury adjustment):
\[ r^{\mathrm{act}}_{i,y} = \frac{P^{\mathrm{act}}_{i,y}}{\tilde{P}^{\mathrm{act}}_{y}} \]
where P^{\mathrm{act}}_{i,y} is active-man payroll [PAGE 3]. Unit: none.

Raw win percentage:
\[ WP^{\mathrm{raw}}_{i,y} = \frac{W_{i,y}}{G_{i,y}} \in [0,1] \]
with W wins and G games played [PAGE 3]. Unit: probability.

Pythagorean win percentage (canonical Jamesian form assumed because the source names the concept but does not print the exponent [PAGE 2]):
\[ WP^{\mathrm{pyth}}_{i,y} = \frac{RS_{i,y}^{\gamma}}{RS_{i,y}^{\gamma} + RA_{i,y}^{\gamma}} \in [0,1] \]
where RS is runs scored, RA is runs allowed, and γ is the Pythagorean exponent (assumption: γ = 2 unless Pythagenpat form γ = [(RS+RA)/G]^{0.287} is substituted; breakdown if true γ deviates materially from the assumed value, which would mislabel skill as luck). Unit: probability.

Pearson correlation operator for each of the four relationships per season:
\[ \rho(X,Y) = \frac{\mathrm{Cov}(X,Y)}{\sigma_X \sigma_Y} \]
applied to (X,Y) ∈ { (WP^{\mathrm{raw}}, r), (WP^{\mathrm{pyth}}, r), (WP^{\mathrm{raw}}, r^{\mathrm{act}}), (WP^{\mathrm{pyth}}, r^{\mathrm{act}}) } [PAGE 3, PAGE 4, PAGE 5].

Reported coefficients [PAGE 5]:

| Season | ρ(WP^{raw}, r) | ρ(WP^{pyth}, r) | ρ(WP^{raw}, r^{act}) | ρ(WP^{pyth}, r^{act}) |
|---|---|---|---|---|
| 2021 | 0.5261730 | 0.5338243 | 0.5691161 | 0.5721851 |
| 2022 | 0.6829967 | 0.6822396 | 0.7233854 | 0.6907564 |
| 2023 | 0.1506257 | 0.3002661 | 0.1812102 | 0.3490120 |

Assumptions: payroll measured at the June 29 snapshot is comparable across seasons [PAGE 3]; win % is comparable despite slightly different games played [PAGE 3]; Pythagorean residual isolates “luck” [PAGE 2, PAGE 4]; active payroll isolates injury effects [PAGE 3]; three seasons suffice for cross-year comparison [PAGE 5, PAGE 8].

Breakdown / singularity regimes: (1) If σ_r → 0 (payroll compression across teams), correlation is undefined. (2) If G → 0, win % is dominated by binomial noise and ρ → 0 by attenuation. (3) With n = 30 and df = 28, |r| < 0.361 is not statistically distinguishable from zero at α = 0.05; the 2023 raw coefficients (0.1506257 and 0.1812102) fall in this regime [PAGE 5]. (4) Mid-season roster churn invalidates the payroll snapshot as a fixed exposure [PAGE 3].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits in a lineage beginning with Bill James’s Pythagorean expectation, which decomposes win percentage into runs scored and allowed to isolate performance from sequencing luck [PAGE 2 concept; formalization external to source but historically prior]. It continues the Moneyball research tradition of testing whether payroll predicts wins in MLB [PAGE 1: Moneyball Academy Training Camp, 2023], a literature that generally finds a moderate positive payroll–win relationship, making the 2023 collapse to r ≈ 0.15–0.35 anomalous [PAGE 5]. The authors extend this by adding an active-payroll injury layer [PAGE 3] and a Pythagorean “luck” layer [PAGE 2, PAGE 4], creating a 2×2 factorial of confounders per season [PAGE 4].

Multi-week traps specific to this design: (1) The small-sample trap—data end June 29 at roughly 80 games [PAGE 3], so early-season variance has not yet regressed toward the mean. Surprise teams identified at midseason (Rays, Reds, Diamondbacks, Marlins overperforming; Mets, Padres underperforming [PAGE 2]) may simply be binomial outliers that normalize by September. (2) The regression-to-the-mean trap—teams farthest from payroll expectation at week 15 face the strongest reversion pressure in the second half. (3) The payroll-stickiness trap—payroll is set before the season, but wins accrue under midseason injuries, call-ups, and trades [PAGE 3], so the exposure and outcome are misaligned temporally. (4) The rule-change trap—the authors explicitly flag that newly implemented 2023 rules may explain greater surprise [PAGE 8], meaning the payroll–win correlation could be destabilized by a common shock (pitch timer, shift ban, larger bases) rather than by a genuine erosion of payroll predictive power. Without pre-2021 data and without modeling rule changes [PAGE 8 next steps], the genealogy cannot determine whether 2023 is a regime shift or a transitory outlier.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes how teams respond when realized performance diverges from payroll expectation. High-payroll underperformers (Mets, Padres [PAGE 2]) enter a recursive crisis loop: front-office pressure triggers trade-deadline sell-offs, roster churn, and coaching scrutiny, which further depress win % relative to payroll and widens the surprise residual. Low-payroll overperformers (Rays, Reds, Diamondbacks, Marlins [PAGE 2]) face the inverse recursion: opponents adjust scouting and game-planning, regression to the mean injures unsustainable run differentials, and the trade deadline may strip away rental talent, collapsing the surprise.

The counter-trap is the belief that “2023 surprise teams are more surprising” [PAGE 7] as a structural claim. A counter-trap reading holds that the narrative itself is a self-confirming trap: because observers are primed to label deviations as surprising, normal small-sample variation is cataloged as evidence of a regime change. The correlation drop from 0.6829967 to 0.1506257 [PAGE 5] could be entirely generated by June-29 sampling noise and payroll-snapshot mismatch rather than by an actual weakening of the payroll–win causal channel.

The clock is the June 29 midpoint [PAGE 3]. Because only half the season is observed, the clock implies a specific prediction: second-half win % for surprise teams should regress toward payroll-implied expectations, and end-of-season correlations should partially recover toward 2021–2022 levels unless the 2023 rule changes [PAGE 8] inject persistent variance. If the clock prediction fails—i.e., full-season 2023 correlations remain depressed—then the crisis habit regression is incomplete and the surprise is structural rather than temporary.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: the 2023 pitch timer [implied by “new rule changes newly implement ed for the 2023 season,” PAGE 8] reduces between-pitch recovery time, increasing pitcher biomechanical load (elbow varus torque, shoulder fatigue) and shifting run prevention from high-payroll starting rotations toward bullpen depth. Because bullpen depth is not linearly payroll-scaled, this physical constraint vetoes any payroll-only explanation of surprise.

Biomechanical layer: the shift ban changes infielder positioning and therefore BABIP and defensive efficiency; larger bases alter stolen-base frequency and defensive indifference. These rule-induced mechanical changes affect runs scored and allowed [PAGE 2 Pythagorean inputs] independent of payroll, introducing variance uncorrelated with r_{i,y}.

Weather layer: temperature, humidity, wind, and park factors modulate RS and RA [PAGE 2] and therefore Pythagorean residuals [PAGE 2, PAGE 4]. Warm-weather months inflate scoring and can inflate “luck” residuals for teams in hitter-friendly parks, again decoupling win % from payroll without a genuine surprise mechanism.

Verdict: the paper’s claim that injuries and luck “play some role” [PAGE 7] is not veto-proof. To establish that surprise is not an artifact of these layers, one must condition on pitch-clock exposure, weather-adjusted park factors, shift-ban BABIP residuals, and full-season roster continuity. The authors reserve these as next steps [PAGE 8], so the current evidence is physical-layer incomplete.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with predictions:

Veto 1 — Full-season attrition veto. Recompute all four correlations using end-of-season (162-game) 2023 data instead of the June 29 snapshot [PAGE 3]. If ρ(WP^{raw}, r) for 2023 rises to ≥ 0.40, then the midseason collapse is a small-sample attenuation artifact, and the conclusion that 2023 teams are inherently more surprising is vetoed. Prediction: end-of-season 2023 Raw vs Yearly correlation will exceed 0.1506257 but remain below 0.40 if rule-change variance is structural.

Veto 2 — Rule-change counterfactual veto. Construct a matched synthetic control by applying 2023 rules (pitch timer, shift ban, larger bases [PAGE 8]) to 2022 team rosters and payrolls, then recompute ρ(WP^{raw}, r). If the simulated 2022-under-2023-rules coefficient falls to ≈ 0.15–0.25, then rule changes, not payroll decoupling, explain the surprise, and the paper’s causal claim is vetoed. Prediction: simulated coefficient ≤ 0.25.

Veto 3 — Injury-proxy veto. Test whether active payroll materially changes the raw relationship in 2023. If |ρ(WP^{raw}, r) − ρ(WP^{raw}, r^{act})| < 0.05, then active payroll/injuries are not a meaningful confounder and the authors’ statement that injuries “play some role” [PAGE 7] is unsupported for raw win %. From the table [PAGE 5], the observed gap is 0.1812102 − 0.1506257 = 0.0305845, which is below 0.05; therefore this veto condition is already met in the published data, indicating injuries barely move the raw payroll–win correlation in 2023.
</RLVR_COUNTERFACTUAL_VETOES>