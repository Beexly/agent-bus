---
source: "2023 - Are Surprise Teams in the MLB in 2023 More Surprising - Federico et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Wharton Sports Analytics Journal/2023"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 2911
---

<NATIVE_REASONING>
The user wants me to analyze a source document about surprise MLB teams in 2023. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting lines whatsoever.
- No toy equations. Must use formal LaTeX equations with units, assumptions, breakdown regimes.
- Cite [PAGE 1] since only 1 page provided.
- Verbatim quotes from source text.
- >= 1000 words total across sections.
- THINK_TRACE must be >= 400 words.

Let me analyze the source text carefully:

Source: Wharton Sports Analytics Journal, Fall 2023. Authors: Chad Federico, Kotaro Nagano, Alejandro Wick. Title: "Are Surprise Teams in the MLB in 2023 More Surprising?"

Key data:
- Data from 2021-2023 MLB seasons as of June 29th for each season (roughly 80 games or half a season)
- Found relative payrolls (full team payroll / median team payroll) for each team each season
- To account for injuries, also found relative active payrolls (active man payroll / median active man payroll)
- Slightly different amount of games played depending on year, so used win %
- To account for "luck", used Pythagorean win %
- Plotted Raw and Pythagorean Win Percentages vs Relative Payrolls and Relative Active Payrolls
- Created graph comparing correlation coefficient for all 4 relationships for each year

Correlation coefficients table:
Season: 2021, 2022, 2023
Raw vs Yearly: 0.5261730, 0.6829967, 0.1506257
Pyth vs Yearly: 0.5338243, 0.6822396, 0.3002661
Raw vs Active: 0.5691161, 0.7233854, 0.1812102
Pyth vs Active: 0.5721851, 0.6907564, 0.3490120

Key findings:
- Steep drop in 2023, indicating greater variability in "surprise teams"
- Significant gap caused by "luck" factor, or Pythagorean win %
- Surprise teams of 2023 MLB season are indeed more surprising than previous years
- Correlations between win percentages and relative payrolls are significantly less in 2023 (moderate to weak relationship)
- Factors such as injuries (active man payroll) and being "lucky" (Pythagorean win %) play some role. Slope of line of best fit for 2023 becomes closer to previous years as luck and injuries are factored out.

Pythagorean win percentage formula (from baseball analytics, not invented by me - this is Bill James's formula):
WP_pyth = RS^α / (RS^α + RA^α), typically α ≈ 2 or 1.83

Since equations aren't preserved in the source text, I should state formal equations based on standard definitions referenced in the paper, but clearly mark assumptions. I cannot invent toy equations like Force/Fatigue. But Pythagorean win % is mentioned in source, so I can formalize it.

Pearson correlation coefficient:
r = Σ[(x_i - x̄)(y_i - ȳ)] / sqrt(Σ(x_i - x̄)² Σ(y_i - ȳ)²)

Units: correlation coefficient is dimensionless [-1, 1]. Win % is dimensionless [0,1]. Relative payroll is dimensionless ratio.

Breakdown regimes: n=30 teams (MLB), correlation with small sample, as of June 29 (~80 games), halfway point.

Let me structure the response:

<THINK_TRACE> (>=400 words)
- Deep multi-hop derivation: why correlation drop means more surprise teams
- Gray-zone audit: limitations (only 3 seasons, halfway point, no confounding variables factored out per text, pdftotext issues, missing equations/tables/figures)
- Multi-hop: payroll -> expected performance -> residual variance -> surprise
- Audit of the correlation table values

<SOURCE_OPERATORS_AND_EQUATIONS>
- Formal LaTeX for Pearson r
- Pythagorean expectation: w_pyth = (RS^γ)/((RS^γ)+(RA^γ)) 
- Relative payroll: ρ_yearly = T_i / median(T), ρ_active = A_i / median(A)
- Units: dimensionless
- Page citation [PAGE 1]
- Breakdown: n=30 teams, June 29 snapshot, ~80 games
- Verbatim quotes

<RETROCAUSAL_GENEALOGY>
- Historical lineage: Bill James Pythagorean expectation, Moneyball, payroll-win correlation literature
- Multi-week traps: small sample at halfway, regression to mean, injury timing, new 2023 rules (pitch clock, shift ban, bigger bases)

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression: teams overreacting to early surprise
- Counter-trap: betting on regression based on payroll correlation
- Clock: June 29 snapshot timing

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical/biomechanical/weather veto proof: injuries, active payroll, weather not in dataset, new rules

<RLVR_COUNTERFACTUAL_VETOES>
- 3 verifiable veto scenarios with predictions

Word count check: Need >= 1000 words total across all sections. THINK_TRACE >= 400 words.

Let me draft carefully, ensuring no betting language. No spreads, totals, moneylines, odds. I can mention correlation, probability, win percentage, but not betting odds.

Let's write.

THINK_TRACE section needs >= 400 words. I'll write a detailed derivation.

Source page citation: Since there's only one page provided in the prompt, I'll cite [PAGE 1] for all verbatim quotes.

Verbatim quotes to use:
- "Many teams, about halfway through the 2023 season, are playing much better (Rays, Reds, Diamondbacks, Marlins) or worse (Mets, Padres) than expected, especially considering team payrolls."
- "Injuries have also led to unexpected team performances on the field."
- "Surprise teams usually have a pythagorean win percentage (based on the total amount of runs scored and allowed) quite different than their actual win percentage."
- "Data from 2021- 2023 MLB Seasons as of June 29th for each season (roughly 80 games or half of a season)"
- "Found relative payrolls (full team payroll/ median team payroll) for each team in each season - To account for injuries, we also found relative active payrolls (active man payroll/ median active man payroll)"
- "To account for 'luck', we also used the pythagorean win %"
- "No con founding variable factored out" (sic)
- "Steep drop in 2023, indicating greater variability in 'surprise teams'"
- "Significant gap caused by the 'luck' factor, or the pythagorean win %"
- "The 'Surprise Teams' of the 2023 MLB Season are indeed more surprising than previous years"
- "Correlations between win percentages and relative payrolls are significantly less in 2023 (goes from moderate to weak relationship)"

Equations:
Pearson product-moment correlation:
r_{XY} = \frac{\sum_{i=1}^{n} (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=1}^{n} (x_i - \bar{x})^2 \sum_{i=1}^{n} (y_i - \bar{y})^2}}

Pythagorean expected win fraction (Bill James form, as referenced by "pythagorean win % based on total runs scored and allowed"):
\hat{w}_{i} = \frac{RS_i^{\gamma}}{RS_i^{\gamma} + RA_i^{\gamma}}, \quad \gamma \approx 1.83 \text{ (baseball calibration)}

Relative payroll operators:
\rho^{yearly}_i = \frac{P_i}{\mathrm{median}(P)}, \quad \rho^{active}_i = \frac{A_i}{\mathrm{median}(A)}

Residual surprise operator:
S_i = w^{actual}_i - \hat{w}_i or S_i = w^{actual}_i - f(\rho_i)

n = 30 MLB teams. Time t = June 29, \approx 80 games, \approx 1/2 of 162-game season.

Breakdown regimes: small-n correlation inference (n=30), midpoint sampling bias, missing confounding variables explicitly stated.

Now let's write the full response with proper XML tags. I need to make sure total word count >= 1000. Let me estimate each section.

THINK_TRACE: ~500 words
SOURCE_OPERATORS_AND_EQUATIONS: ~250 words
RETROCAUSAL_GENEALOGY: ~200 words
RECURSIVE_THEORY_OF_MIND: ~200 words
CROSS_LAYER_VETO_ADJUDICATION: ~150 words
RLVR_COUNTERFACTUAL_VETOES: ~150 words

Total should be ~1450 words. Good.

Let's ensure no betting terms. Words like "line of best fit" are fine (from source). "Odds" - avoid. "Spread" - avoid. "Moneyline" - avoid. "Total" - avoid in betting context.

I'll write now.
</NATIVE_REASONING>

<THINK_TRACE>
The source text reports Pearson correlation coefficients between raw/Pythagorean win percentage and two payroll operators (full-season relative payroll and active-man relative payroll) across three seasons sampled at the June 29 midpoint (~80 games, roughly half a 162-game MLB season). The multi-hop derivation proceeds as follows: payroll is treated as a proxy for expected roster talent; win percentage is realized performance; the residual between realized performance and payroll-predicted performance defines “surprise.” If payroll strongly predicts wins, surprise is low and predictable. If the correlation collapses, realized wins are decoupled from payroll, meaning teams are over- or under-performing relative to resource investment—i.e., greater surprise.

The table on [PAGE 1] shows a structurally sharp discontinuity in 2023. Raw vs Yearly payroll correlation falls from 0.5261730 in 2021 and 0.6829967 in 2022 to 0.1506257 in 2023. Pyth vs Yearly falls from 0.5338243 and 0.6822396 to 0.3002661. Raw vs Active falls from 0.5691161 and 0.7233854 to 0.1812102. Pyth vs Active falls from 0.5721851 and 0.6907564 to 0.3490120. The authors characterize 2021–2022 as “moderate” and 2023 as “weak,” concluding the 2023 surprise teams are “indeed more surprising than previous years” [PAGE 1].

Gray-zone audit: (1) The machine-converted PDF explicitly states “equations, tables and figures are NOT preserved” and “No con founding variable factored out” [PAGE 1], so the correlation table is descriptive, not causal. (2) n = 30 MLB teams per season; Pearson inference at n = 30 with a single cross-sectional midpoint is statistically fragile, especially when slicing by four operator pairs across three years. (3) The sample is censored at ~80 games; early-season variance (injury shocks, scheduling luck, new-rule adaptation) has not yet mean-reverted. (4) The source text names the Rays, Reds, Diamondbacks, Marlins as over-performing and the Mets, Padres as under-performing “about halfway through the 2023 season” [PAGE 1], but provides no team-level residuals, confidence intervals, or significance thresholds. (5) Because the pdftotext conversion dropped equations and figures, the Pythagorean exponent and regression slopes cannot be verified from the text alone; any exponent assumed here must be treated as an external calibration, not a source-derived parameter.

The logical chain is therefore: correlation payroll→win is a measure of performance predictability; its 2023 collapse increases the variance of the surprise residual; partialling out luck (Pythagorean differential) and injuries (active payroll) moves the 2023 slope closer to prior years, implying that the excess surprise is concentrated in the raw win/payroll gap rather than in run-differential efficiency.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(i \in \{1,\dots,n\}\) index MLB teams, \(n=30\), and \(t \in \{2021,2022,2023\}\). The data are sampled at a fixed calendar cutoff \(t_{cut} = \text{June 29}\), corresponding to approximately \(G \approx 80\) games, or roughly one-half of a standard 162-game season [PAGE 1].

Payroll operators (dimensionless ratios):
\[
\rho^{\text{yearly}}_{i,t} = \frac{P_{i,t}}{\operatorname{median}_j(P_{j,t})}, \qquad
\rho^{\text{active}}_{i,t} = \frac{A_{i,t}}{\operatorname{median}_j(A_{j,t})}
\]
where \(P_{i,t}\) is full team payroll and \(A_{i,t}\) is active-man payroll [PAGE 1].

Win percentage operators (dimensionless, \([0,1]\)):
\[
w^{\text{raw}}_{i,t} = \frac{W_{i,t}}{G_{i,t}}, \qquad
\hat{w}^{\text{pyth}}_{i,t} = \frac{RS_{i,t}^{\gamma}}{RS_{i,t}^{\gamma} + RA_{i,t}^{\gamma}}
\]
The source defines Pythagorean win percentage as “based on the total amount of runs scored and allowed” [PAGE 1]. The exponent \(\gamma\) is not preserved in the machine-converted text; a standard baseball calibration is \(\gamma \approx 1.83\), but this is an external assumption, not a source-derived value.

Pearson product-moment correlation (dimensionless, \([-1,1]\)) between win percentage operator \(w\) and payroll operator \(\rho\):
\[
r_{w,\rho} = \frac{\displaystyle\sum_{i=1}^{n} (w_i - \bar{w})(\rho_i - \bar{\rho})}{\displaystyle\sqrt{\sum_{i=1}^{n}(w_i - \bar{w})^2 \sum_{i=1}^{n}(\rho_i - \bar{\rho})^2}}
\]

Source-reported correlation coefficients [PAGE 1]:
\[
\begin{array}{c|ccc}
\text{Relationship} & 2021 & 2022 & 2023 \\
\hline
\text{Raw vs Yearly} & 0.5261730 & 0.6829967 & 0.1506257 \\
\text{Pyth vs Yearly} & 0.5338243 & 0.6822396 & 0.3002661 \\
\text{Raw vs Active} & 0.5691161 & 0.7233854 & 0.1812102 \\
\text{Pyth vs Active} & 0.5721851 & 0.6907564 & 0.3490120 \\
\end{array}
\]

Surprise residual operator (dimensionless):
\[
S_{i,t} = w^{\text{raw}}_{i,t} - \mathbb{E}[w \mid \rho_{i,t}]
\]
where \(\mathbb{E}[w \mid \rho]\) is the conditional expectation from the line of best fit. The source notes that “[t]he slope of the line of best fit for 2023 becomes closer to the previous years as luck and injuries are factored out” [PAGE 1].

Units: all ratios are dimensionless. Correlations carry no SI unit. Breakdown regimes: (a) small-sample correlation regime \(n=30\) per season, where sampling error in \(r\) is large; (b) midpoint censoring regime at \(G \approx 80\), where early-season injury and scheduling variance have not regressed; (c) missing-confounder regime, because the source explicitly states “No con founding variable factored out” [PAGE 1]; (d) text-conversion regime, where equations, tables, and figures are absent from the provided markdown and must be treated as unrecoverable from this source alone.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The analytical lineage traces to Bill James’s Pythagorean expectation, which posits that a team’s run differential better encodes true talent than raw win-loss records over finite samples. The source operationalizes this exact distinction by comparing “raw” win % against Pythagorean win % to isolate “luck” [PAGE 1]. This sits within the broader sabermetric tradition inaugurated by Moneyball-era front offices: payroll as a resource input, wins as output, and the residual as market inefficiency or surprise.

Historically, payroll-win correlations in MLB have been moderate because revenue disparities are large but not deterministic; the 2021–2022 coefficients (0.526–0.723 depending on operator) fall in the moderate-to-strong descriptive range. The 2023 collapse to 0.150–0.349 represents a regime shift in the payroll-performance coupling. Multi-week traps specific to this dataset include: (1) the June 29 cutoff captures teams before midseason trade-deadline roster equalization, amplifying payroll mismatch; (2) 2023 introduced new rules (pitch timer, shift restrictions, larger bases) whose uneven adoption could transiently decouple payroll from performance, though the source only flags this as a proposed “Next Steps” examination [PAGE 1]; (3) injury volatility is heightened at the season’s midpoint, which is why the authors construct active-man payroll [PAGE 1]; (4) regression-to-the-mean traps: early surprise teams (Rays, Reds, Diamondbacks, Marlins over-performing; Mets, Padres under-performing [PAGE 1]) may simply be sampled from the upper/lower tails of a distribution that has not yet stabilized.

The genealogy therefore runs: Pythagorean residual → payroll-win correlation → surprise-team identification → 2023 structural break → hypothesis that rule changes, injury timing, and small-sample luck jointly produced a historically weak payroll signal.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
A crisis-habit regression model for front offices facing 2023 surprise teams would posit the following recursion: when raw win % diverges sharply from payroll prediction (low \(r\)), decision-makers experience attribution ambiguity—was the surge skill or luck? The recursive habit is to over-weight the most recent 80-game sample and extrapolate the surprise trajectory forward. The counter-trap is to recognize that the Pythagorean gap partially absorbs the anomaly: when Pyth vs Yearly (0.3002661) exceeds Raw vs Yearly (0.1506257) in 2023, run-differential efficiency retains more payroll signal than raw outcomes, implying that raw-win surprise contains a large transitory luck component [PAGE 1].

The clock variable is the June 29 midpoint: roughly half the season remains, so the residual surprise \(S_i\) has maximal mean-reversion runway. A team at the positive tail of \(S_i\) in late June faces two recursive pressures: (a) opponents adjust scouting and deployment, eroding the surprise advantage; (b) regression toward the payroll-predicted win % pulls performance downward if the early outlier was luck-driven. Conversely, negative-tail surprise teams (e.g., Mets, Padres [PAGE 1]) may experience the opposite regression if injuries resolve and active payroll returns toward full payroll.

Theory-of-mind failure modes: assuming the 2023 correlation collapse is permanent when it may be a midpoint artifact; treating active payroll as fully exogenous when injuries are themselves performance-correlated; and ignoring that the machine-converted source lacks significance tests, so “moderate to weak” is a qualitative judgment, not a statistical verdict [PAGE 1].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: The source data contain no biomechanical, pitch-clock exposure, or weather variables. Because 2023 introduced new rules and the source proposes examining them only as “Next Steps” [PAGE 1], any causal claim that weather or physical rule changes drove the 2023 surprise surge is vetoed by absence of evidence in the text.

Biomechanical layer veto: Injury effects are proxied only by active-man payroll \(A_{i,t}\). No player-level injury lists, days lost, or workload metrics are provided [PAGE 1]. Therefore the claim that “injuries have also led to unexpected team performances” [PAGE 1] is an associative label, not a biomechanically verified mechanism.

Weather layer veto: No temperature, precipitation, dome-vs-open-air, or travel-distance variables appear in the source [PAGE 1]. The correlation table cannot be conditioned on climate, so weather-based explanations for the 2023 breakdown are excluded from the model.

Veto adjudication outcome: The only admissible operators from [PAGE 1] are raw win %, Pythagorean win %, full relative payroll, and active relative payroll, all measured at the June 29 midpoint for n=30 teams across three seasons. Any physical, biomechanical, or weather factor introduced beyond this set is extraneous to the source and must be treated as an out-of-sample veto.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1: If the 2023 correlation collapse were an artifact of the June 29 midpoint rather than a true seasonal regime shift, then computing the same four correlations at the season end (162 games) should restore 2023 coefficients toward the 2021–2022 range. Prediction: \(r_{\text{Raw vs Yearly}}^{2023}\) and \(r_{\text{Raw vs Active}}^{2023}\) will rise substantially above 0.1506257 and 0.1812102, respectively, while Pyth-based coefficients remain stable, confirming midpoint censoring as the primary veto.

Veto Scenario 2: If active-man payroll fully absorbs injury-driven surprise, then the gap between Raw vs Active and Raw vs Yearly in 2023 should vanish or invert. In the source, Raw vs Active (0.1812102) remains far below Raw vs Yearly (0.1506257) only marginally higher, and Pyth vs Active (0.3490120) exceeds Pyth vs Yearly (0.3002661) [PAGE 1]. Prediction: When full-season active payroll replaces the June 29 snapshot, the Raw vs Active coefficient will approach the Raw vs Yearly coefficient, vetoing the hypothesis that payroll-active adjustment alone explains the 2023 surprise anomaly.

Veto Scenario 3: If Pythagorean run differential is the true talent carrier and raw win % is pure noise, then teams with high \(S_i = w^{\text{raw}} - \hat{w}^{\text{pyth}}\) at June 29 should show no persistent second-half advantage over teams with low \(S_i\) once payroll is controlled. Prediction: A second-half regression of \(w^{\text{raw}}\) on \(\hat{w}^{\text{pyth}}\) and \(\rho^{\text{yearly}}\) will yield a coefficient on \(S_i\) indistinguishable from zero at conventional thresholds, vetoing the narrative that 2023 surprise teams possessed durable non-payroll skill not captured by run differential.
</RLVR_COUNTERFACTUAL_VETOES>