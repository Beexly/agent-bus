---
source: "2022 - In a Rush to Pass NFL Teams Pass on Rushing - Cramer et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Wharton Sports Analytics Journal/2022"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4862
---

<NATIVE_REASONING>
The user wants me to analyze a source document (Wharton Sports Analytics Journal paper) about NFL passing vs rushing. I need to follow strict invariants:

1. ZERO BETTING LINES - no spreads, totals, moneylines, odds
2. ZERO TOY EQUATIONS - no fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words)</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions</RLVR_COUNTERFACTUAL_VETOES>

Important notes about the source:
- It's page 1 only (PAGES: 1)
- The text is machine-converted with garbled sections ("ConRteunst hHinerge You cTahnesimpeplryciemnptraegsseyoouf..." etc.)
- It's a presentation/slideshow format, not a rigorous paper
- Key stats: Yards/Pass Attempt 2019 - 6.73, Yards/Carry 2019 - 4.4, NFL Teams 2019 only passed 57% of time
- Correlations: Success Rate vs Win % correlation 0.291 and 0.553 (unclear which is which due to garbling)
- Metrics: Passing Success Rate, Adjusted Sack Rate, Pass TD, Rushing Success Rate, Adjusted Line Yards, Rush TD
- Passing stats had effect 1.5x greater than rushing stats
- Conclusions: Passing more valuable, no diminishing returns found, no optimal run/pass ratio calculable yet
- Sources listed but no page numbers in the traditional sense since it's a single page document/markdown

Since PAGES: 1, I should cite [PAGE 1] for all source references.

I need to be careful not to invent fake ratios. I can use formal probability/information theory concepts:
- Expected Points Added (EPA) as a random variable
- Success rate as Bernoulli probability
- Play calling distribution as categorical distribution
- Mutual information or KL divergence for play distribution evenness
- Diminishing returns as concavity of EPA(w) where w is pass frequency

I should note the limitations: the source is a slide deck, garbled OCR, no preserved equations/tables/figures, small sample (2019 only), correlation not causation, etc.

Let me draft each section carefully.

THINK_TRACE (>=400 words): Deep multi-hop derivation. Analyze the paper's claims:
1. 6.73 yards/pass vs 4.4 yards/carry raw efficiency difference
2. 57% pass rate in 2019
3. Correlations 0.291 and 0.553 (ambiguous mapping due to garbled text)
4. 1.5x effect size of passing stats vs rushing stats
5. EPA not impacted by proportion of previous play calls
6. No diminishing returns detected
7. No optimal ratio calculable

Gray zones: correlation vs causation, survivor bias, game state confounding (teams pass when ahead), garbage time, OCR garbling making slide titles unreadable, small sample single season, no defensive adjustment in raw yards, etc.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
Let X_p ~ yards per pass attempt, X_r ~ yards per carry.
E[X_p] = 6.73 yards, E[X_r] = 4.4 yards (2019).
Pass frequency f_p = 0.57, f_r = 0.43.
Success rate S_p, S_r as Bernoulli trials.
Win probability correlation: ρ(S, W) ∈ {0.291, 0.553}.
Effect size ratio: β_pass / β_rush ≈ 1.5.
EPA model: EPA_i = α + β_p·I(pass) + β_r·I(rush) + γ·f_prev + ε.
Test for diminishing returns: ∂²EPA/∂f² = 0 (no concavity detected).
Breakdown: single season 2019, OCR garbage, no defensive EPA, no down-distance context, no game state.

RETROCAUSAL_GENEALOGY: Historical lineage from Al Davis/West Coast offense, Bill Walsh, modern expected points (Carroll, Palmer, Thorn 1988), Romer (2006) on fourth down, Burke (Advanced NFL Stats), nflscrapR, Football Outsiders DVOA. Multi-week traps: recency bias in play calling, defensive adjustment lag, injury regression to mean, weather-driven run/pass shifts.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression (teams revert to run under pressure despite passing efficiency), counter-trap (defenses key on run because offense historically run-heavy, creating passing windows), clock management (end-of-game constraints force run to bleed clock, confounding efficiency metrics).

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather vetoes.
- Weather: wind > X mph suppresses passing accuracy (but source doesn't give exact threshold, so I must not invent one; I can state that the source omits weather covariates, creating a veto layer).
- Biomechanical: QB throwing mechanics vs RB hitting the hole; offensive line pass protection vs run blocking are different skill sets; roster construction creates hard constraints.
- Physical: field surface, temperature, altitude (Denver).
The paper does not control for these, so its conclusion "no optimal ratio" is conditional on omitted variable bias.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios + predictions.
1. If a team increases pass frequency above 57% while holding roster constant, EPA per pass may decline due to defensive adjustment (negative cross-partial). Prediction: EPA_pass(f) concave for f > 0.65 in cold weather.
2. If offensive line is run-blocking specialized, forcing pass frequency > 0.70 increases sack rate and lowers success rate. Prediction: Adjusted Sack Rate rises nonlinearly.
3. If trailing by >14 points in 4th quarter, run rate collapses not by choice but by game state; comparing raw efficiency without game-state controls produces spurious "no diminishing returns." Prediction: within-game-state stratified analysis reveals diminishing returns in neutral script situations.

Word count: Need >=1000 words total across sections. THINK_TRACE alone >=400. I'll aim for substantial length in each.

Need to cite [PAGE 1] and verbatim quotes where possible. Verbatim quotes from source:
- "Yards/Pass Attempt in 2019 - 6.73"
- "Yards/Carry in 2019 - 4.4"
- "NFL Teams in 2019 only passed 57% of the time"
- "Correlation = 0.291"
- "Correlation = 0.553"
- "Passing stats had an effect 1.5 x greater than rushing stats"
- "Passing is far more valuable than rushing"
- "More evenly distributed run/pass play-calling does not lead to increased efficiency"
- "To the extent that teams increased pass frequency, there’s no indication yet of a frequency that leads to diminishing returns"
- "We cannot calculate an optimal run/pass ratio until there is data showing that there is such a thing as too much passing"

Since OCR is garbled, I must note that [PAGE 1] contains OCR-corrupted slide titles that are unreadable.

Let me write this out carefully. No betting lines. Formal LaTeX. Units in yards, probability, EPA (expected points added, dimensionless points). No fake ratios like Force/Fatigue.

I need to ensure total word count is at least 1000 words. Let me write generously.

Structure:
- Brief intro maybe outside XML? The user specified exact XML sections. I should probably just output the XML sections, perhaps with a minimal wrapper, but the instructions say "across these exact XML sections". I'll output exactly those sections, maybe in that order.

Let me draft each.

THINK_TRACE: I'll do a multi-hop derivation.
Hop 1: Raw efficiency disparity (6.73 vs 4.4) implies ~53% more yards per play on passes.
Hop 2: Yet pass rate only 57%, near coin-flip, suggesting under-allocation relative to mean yardage.
Hop 3: Correlations 0.291 and 0.553 are weak-to-moderate; cannot establish causation.
Hop 4: 1.5x effect size in predictive model suggests passing dominates in EPA model.
Hop 5: EPA independent of previous play-call proportion (per paper) suggests no within-game diminishing returns detectable at tested frequencies.
Hop 6: Gray-zone audit: single-season 2019, OCR garbage, no down-and-distance, no game state, no defensive adjustment in raw yardage, correlation not causation, survivor bias in play calling (good teams pass more because they're winning).

Make sure >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS:
Define:
- Let \mathcal{P} be set of pass plays, \mathcal{R} rush plays in 2019 NFL.
- Y_p: random variable for yards gained on pass attempt. \mathbb{E}[Y_p] = 6.73 yards [PAGE 1].
- Y_r: random variable for yards gained on rush carry. \mathbb{E}[Y_r] = 4.4 yards [PAGE 1].
- f_p = 0.57, f_r = 0.43 [PAGE 1].
- Success rate S \in \{0,1\}. Correlation \rho(S_p, W) and \rho(S_r, W) take values \{0.291, 0.553\}, ambiguous mapping due to garbled slide labels [PAGE 1].
- Linear predictive model: W_i = \alpha + \beta_p S_{p,i} + \beta_r S_{r,i} + \dots + \epsilon_i, with |\beta_p| \approx 1.5 |\beta_r| [PAGE 1].
- EPA model: \text{EPA}_i = \alpha + \sum_k \gamma_k X_{k,i} + \delta f_{\text{prev},i} + \eta_i. Paper claims \partial \text{EPA}/\partial f_{\text{prev}} \approx 0 [PAGE 1].
- Diminishing returns test: \partial^2 \text{EPA}/\partial f_p^2 < 0 would indicate concavity. Paper: no evidence [PAGE 1].
- Breakdown regimes: n=1 season, no regularization path shown, OCR-corrupted axis labels, missing confidence intervals.

RETROCAUSAL_GENEALOGY:
- Historical: Rush-dominated early NFL, 1970s vertical passing, 1990s West Coast, 2000s spread.
- Expected Points framework: Carroll, Palmer, Thorn (1988); Romer (2006) on fourth-down; Advanced NFL Stats (Burke) EP model; nflscrapR (added in sources).
- Football Outsiders DVOA and success rate over average (SROA) from sources.
- Multi-week traps: defensive schematic lag (defenses take weeks to adjust to heavy-pass looks), injury regression (RB/WR injury rates differ), opponent strength scheduling, weather seasonality (late-season run bias due to cold/wind).

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under pressure (close game, 4th quarter), coaches regress to run despite passing efficiency—habitual risk aversion.
- Counter-trap: Defense expects run because offense is habitually run-heavy in crisis; this creates a Bayesian window for play-action pass, but if offense passes too much, defense updates prior and the trap closes.
- Clock: End-of-half and end-of-game clock management imposes hard constraints on play selection independent of efficiency (run to bleed clock, pass to stop clock), generating selection bias in EPA-by-play-type comparisons.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: Wind speed, precipitation, temperature affect passing completion probability; the paper's 2019 aggregate ignores weather strata. Veto if any game in sample had extreme weather; no control reported.
- Biomechanical layer: Offensive line pass-protection vs run-blocking stances are distinct motor programs; QB throwing mechanics under duress; RB vision and hole exploitation. Roster construction means f_p cannot vary continuously without personnel packages.
- Weather veto proof: The paper lists no weather covariate; therefore its conclusion "no diminishing returns" is conditional on a homogenous weather assumption that is false for an NFL season spanning September to February.
- Breakdown: If temperature < 40°F or wind > threshold, passing efficiency distribution shifts left; source does not report this, so external validity is limited to fair-weather subsample.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.
1. Scenario: Team raises pass frequency from f_p = 0.57 to f_p = 0.75 in Week 10 with same roster. Veto: Defensive play-action recognition updates within 2-3 weeks; predicted EPA_pass declines by >10% while success rate falls below rush success rate. Prediction: Negative cross-partial \partial^2 EPA / \partial f_p \partial \text{DefAdjust} < 0.
2. Scenario: Offensive line is ranked bottom quintile in pass protection (adjusted sack rate high). Veto: Forcing f_p > 0.65 raises adjusted sack rate nonlinearly; sacks are negative EPA plays (-~3 to -6 EPA). Prediction: Expected EPA per dropback becomes negative when sack probability exceeds ~15%.
3. Scenario: Game state is trailing by 10+ points in Q4. Veto: Run rate collapses because clock management, not efficiency; comparing aggregate 2019 run vs pass efficiency without stratifying by score differential produces Simpson's paradox. Prediction: Within "+/- 7 points" stratum, diminishing returns appear at f_p > 0.60; aggregate analysis hides it.

Need to cite [PAGE 1] frequently. Use verbatim quotes.

Word count check: I'll write extensively.

Let me ensure no betting lines. No mention of odds, spreads, moneylines, totals.

No fake ratios: I won't invent "Force / Fatigue". I can use formal derivative notation \partial^2 EPA / \partial f_p^2 which is legitimate calculus, not a toy equation. I'll explicitly label assumptions and breakdown regimes.

Let's write.

I need to be careful: the instructions say "State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." I should include units (yards, seconds, points, probability [0,1], nats/bits if information theory). I'll stick to yards and probability mostly, maybe mention EPA in expected points (dimensionless but in points).

Also cite exact [PAGE 1] markers since only one page.

Let me write the final response now. I'll make it rich and detailed.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a single-page, machine-converted slide deck from the Wharton Sports Analytics Journal (Spring 2022), titled “In a Rush to Pass: NFL Teams Pass on Rushing” by Cramer, Karanjkar, Khurjekar, and Schwimmer. The conversion warning states that equations, tables, and figures are not preserved, and several slide titles are OCR-corrupted into unreadable character strings. Despite this degradation, the extractable claims form a multi-hop chain that must be audited for gray-zone epistemic leakage before any operational conclusion is drawn.

Hop 1: Baseline efficiency disparity. The deck reports “Yards/Pass Attempt in 2019 - 6.73” and “Yards/Carry in 2019 - 4.4” [PAGE 1]. Treating these as first moments of yardage random variables, Y_p and Y_r, the implied gap is E[Y_p] - E[Y_r] = 2.33 yards per play, or roughly a 53 percent mean-yardage advantage for passes relative to rushes. Because yards are an extensive, additive physical quantity measured in SI-compatible units (yards converted to meters if required), this gap is not itself a toy ratio; it is a difference in expected values of two distinct play-type distributions.

Hop 2: Allocation anomaly. The same source states “NFL Teams in 2019 only passed 57% of the time” [PAGE 1]. If passes dominate in raw expected yards, a myopic allocation model would suggest a pass frequency substantially above 0.57. The observed pass share f_p = 0.57 is therefore near a fair-coin allocation despite a 2.33-yard mean differential. This opens the primary research question the authors pose: “Why don’t teams pass more?” [PAGE 1].

Hop 3: Correlation weakness. The deck presents two correlation coefficients, “Correlation = 0.291” and “Correlation = 0.553,” adjacent to garbled slide titles about graphing success rate versus win percentage [PAGE 1]. Because the OCR-reflow obscures which coefficient attaches to passing versus rushing success rate, the mapping is ambiguous. Even taking the larger value, ρ = 0.553 explains only about 30.6 percent of variance (ρ² ≈ 0.306), leaving nearly 70 percent of win-variation unexplained by the plotted success-rate variable. Correlation is not causation; win percentage is jointly determined by offense, defense, special teams, and game-state, so a bivariate correlation cannot isolate play-call efficacy.

Hop 4: Predictive effect size. The metrics list includes Passing Success Rate, Adjusted Sack Rate on passing plays, Pass TD, Rushing Success Rate, Adjusted Line Yards on rushing plays, and Rush TD [PAGE 1]. The deck asserts “Passing stats had an effect 1.5 x greater than rushing stats” [PAGE 1]. Formally, if a linear predictive model for an outcome W is specified as W_i = α + β_p·S_{p,i} + β_r·S_{r,i} + ε_i, where S denotes success-rate covariates, the reported claim implies |β_p| ≈ 1.5·|β_r|. This is an effect-size comparison within a specific model, not a universal physical constant. Its external validity depends on omitted-variable controls (defensive quality, score differential, down-and-distance, weather), none of which are visible in the single-page extract.

Hop 5: EPA invariance claim. The conclusions state: “EPA of a play was not impacted by proportion of previous play-calls” [PAGE 1]. In dynamic notation, letting f_prev be the fraction of previous plays that were runs or passes, the claim is that ∂EPA/∂f_prev ≈ 0 over the observed domain. If true, this would imply no detectable within-game diminishing returns or strategic complementarity from sequential play calling at the frequencies observed in 2019.

Hop 6: Optimal-ratio impossibility. The final conclusion states: “We cannot calculate an optimal run/pass ratio until there is data showing that there is such a thing as too much passing” [PAGE 1]. This is an admission of identification failure: without observing the boundary of the feasible pass-frequency set where the EPA response curve turns concave (∂²EPA/∂f_p² < 0), no interior optimum f_p* can be solved from first-order conditions.

Gray-zone audit. The source is limited to one season (2019), which introduces survivor bias and season-specific confounding. The OCR conversion destroyed axis labels and figure captions, so the precise meaning of “Percent of Previous Plays (Run)” versus “Percent of Previous Plays (Pass)” across the four garbled slide panels cannot be verified from text alone. There are no confidence intervals, p-values, or regularization paths reported for the 1.5× effect claim. Game state is a severe confounder: teams pass more when trailing and run more when leading to manage clock, so aggregate pass frequency correlates with score differential rather than pure efficiency. Weather, altitude, and defensive schematic adjustments are absent as covariates. Consequently, the chain from 6.73 versus 4.4 yards to “passing is far more valuable” [PAGE 1] is suggestive but not causally identified. The valid inference is conditional: within the 2019 NFL sample and the authors’ specific model specification, passing stats carried greater predictive weight, and no diminishing-returns boundary was detected within the observed pass-frequency range. Any extrapolation beyond that range is outside the source’s demonstrated domain.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the 2019 NFL play universe be partitioned into pass attempts P and rush carries R. Define random variables for yards gained:
Y_p : yards per pass attempt, with reported sample mean E[Y_p] = 6.73 yards [PAGE 1].
Y_r : yards per rush carry, with reported sample mean E[Y_r] = 4.4 yards [PAGE 1].
The first-moment gap is Δ_Y = E[Y_p] - E[Y_r] = 2.33 yards per play. This is a difference in expected values, not an invented ratio; units are yards (convertible to SI meters via 1 yard = 0.9144 m).

Let f_p denote the observed pass share of all plays. The source reports “NFL Teams in 2019 only passed 57% of the time,” so f_p = 0.57 and f_r = 0.43 [PAGE 1]. These are empirical frequencies drawn from a categorical play-calling distribution over the 2019 season.

Success rate is modeled as a Bernoulli random variable S ∈ {0,1}. The deck reports two correlation coefficients against win percentage, “Correlation = 0.291” and “Correlation = 0.553” [PAGE 1]. Due to OCR-corrupted slide titles, the exact assignment of each coefficient to passing versus rushing success rate is unverifiable from the text alone. The coefficient of determination for the larger reported value is ρ² ≈ 0.553² ≈ 0.306, meaning roughly 30.6 percent of win-variance is linearly associated with the plotted success-rate metric; the remaining ~69.4 percent is attributable to other factors or noise.

The predictive model uses metrics: Passing Success Rate, Adjusted Sack Rate on passing plays, Pass TD, Rushing Success Rate, Adjusted Line Yards on rushing plays, Rush TD [PAGE 1]. The deck states “Passing stats had an effect 1.5 x greater than rushing stats” [PAGE 1]. Formally, for a linear specification W_i = α + β_p·S_{p,i} + β_r·S_{r,i} + γ·X_i + ε_i where W is the outcome and X contains controls, the claim is |β_p| ≈ 1.5·|β_r|. This is a model-specific standardized effect comparison, not a universal physical law. Assumption: the model is correctly specified and all relevant confounders are included. Breakdown regime: omitted variable bias (game state, defensive quality, weather, down-and-distance) invalidates the causal reading.

Expected Points Added (EPA) is an expected-value operator over future scoring states, measured in expected points (dimensionless point units). The deck claims “EPA of a play was not impacted by proportion of previous play-calls” [PAGE 1]. Let f_prev ∈ [0,1] be the fraction of previous plays of a given type. The invariance claim is ∂EPA/∂f_prev ≈ 0 for the observed range of f_prev. Testing for diminishing returns requires the second derivative: if ∂²EPA/∂f_p² < 0, the EPA response is concave and an interior optimum f_p* exists where ∂EPA/∂f_p = 0. The authors conclude no such frequency is indicated in the data [PAGE 1], so f_p* is not identified from this source.

Assumptions embedded in the source: (1) 2019 is representative; (2) raw yards-per-attempt and yards-per-carry are comparable without defensive adjustment; (3) success rate and win percentage correlations are stable across game states; (4) play-calling proportion does not induce defensive adaptation within the observed sample. Singularity/breakdown regimes: n = 1 season; OCR-destroyed figures prevent verification of axis scaling; no confidence intervals or standard errors are reported; no weather, temperature, wind, or altitude covariates are included, so the EPA-invariance claim is conditional on uncontrolled environmental variation. Any conclusion of “no optimal ratio” is therefore a statement about the absence of evidence within a restricted sample, not a proof of nonexistence of a boundary.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage of this deck traces through several layers of football analytics history. The raw efficiency comparison—6.73 yards per pass attempt versus 4.4 yards per carry [PAGE 1]—descends from the classic expected-points framework popularized by Carroll, Palmer, and Thorn in *The Hidden Game of Football* (1988), which established that passing yields higher expected points per play than running in most down-and-distance contexts. The source’s own bibliography cites Football Outsiders, Sharp Football Stats, and FiveThirtyEight articles on optimal pass/run ratios and running-back replaceability, situating the work within the 2010s advanced-stats wave that uses DVOA, Success Rate Over Average (SROA), and nflscrapR data [PAGE 1].

The broader historical arc runs from the run-dominated NFL of the 1930s–1960s, through the 1970s vertical-passing revolution, the 1990s West Coast offense, and the 2000s spread-offense proliferation, each phase shifting the equilibrium pass frequency upward while defensive coordinators lagged with schematic adjustments. The deck’s central puzzle—“Why don’t teams pass more?” given higher passing efficiency [PAGE 1]—echos Romer’s (2006) analysis of fourth-down decision-making, which documented systematic conservative deviation from expected-value-maximizing choices. The authors’ inability to calculate an optimal run/pass ratio [PAGE 1] mirrors the empirical problem that optimal control theory requires observing the boundary of the control set; in football, that boundary is obscured by roster constraints, salary-cap allocation, and defensive adaptation.

Multi-week traps embedded in this lineage include: (1) defensive schematic lag, where defenses require multiple weeks to adjust their base personnel and coverage rules to an offense’s increased pass frequency, meaning within-season EPA responses are non-stationary; (2) injury regression to mean, where rushing efficiency depends heavily on offensive-line health and running-back availability, both of which fluctuate week-to-week and differ from passing-game injury profiles; (3) opponent-strength scheduling, where early-season pass efficiency may be inflated by weak secondaries and regressed later in the season; and (4) weather seasonality, where late-season cold, wind, and precipitation suppress passing efficiency, creating a mechanical run-frequency increase unrelated to strategic optimization. Because the source aggregates the entire 2019 season without stratification by week or opponent [PAGE 1], these multi-week dynamic effects are averaged away, potentially masking week-specific diminishing returns or optimal-ratio boundaries that exist in narrower temporal windows.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory-of-mind problem here involves three nested layers: offensive habit regression under crisis, defensive counter-trapping based on expected offensive habits, and clock-imposed hard constraints that distort observed efficiency.

Crisis habit regression: Under high-leverage game states—close score, fourth quarter, or trailing—coaches exhibit risk-averse habit regression toward the run despite the source’s finding that passing stats carry greater predictive weight [PAGE 1]. This is a bounded-rationality response: the run is perceived as “safer” because it consumes clock and reduces variance, even if its mean EPA is lower. The recursive element is that coaches know other coaches regress to the run in crisis, so they game-plan defensively against run-heavy packages, which in turn alters the expected value of passing versus rushing in exactly those crisis states.

Counter-trap: Defenses maintain Bayesian priors about offensive play-calling. If an offense historically passes 57 percent of the time [PAGE 1], a defense sets its base front and coverage mixture to defend that mixture. If the offense suddenly increases pass frequency above the historical norm, the defense’s prior is momentarily wrong, creating a transient efficiency window for the pass. However, if the offense sustains an unusually high pass frequency, the defense updates its prior within a few weeks—substituting nickel/dime packages, adjusting pass-rush lanes, and disguising coverages—thereby closing the trap. The deck’s claim of “no diminishing returns” [PAGE 1] may reflect the fact that 2019 pass frequencies never stayed high enough long enough across enough teams to force a defensive equilibrium shift; the observed domain may simply be pre-adaptation.

Clock: End-of-half and end-of-game clock management imposes hard constraints independent of play efficiency. Running plays keep the clock moving; incomplete passes stop it. A team trailing late must pass not because passing is more efficient in that state, but because the clock forces it. A team leading late must run to bleed the clock, even if passing has higher EPA. This selection bias means aggregate 2019 run/pass efficiency comparisons [PAGE 1] conflate strategic choice with clock necessity. The recursive loop: coaches anticipate clock-driven pass/run splits, defenses anticipate those splits, and the observed EPA by play type is therefore an equilibrium outcome of a dynamic game, not a static efficiency ranking. The source’s cross-sectional correlation between success rate and win percentage [PAGE 1] cannot disentangle whether passing causes winning or whether winning causes passing (via game-state).
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Three veto layers—physical, biomechanical, and environmental—can invalidate the deck’s broad conclusion that passing is uniformly more valuable and that no pass-frequency boundary exists [PAGE 1].

Physical layer: The source reports aggregate 2019 yardage means without weather, temperature, wind, or altitude controls [PAGE 1]. Passing efficiency is physically sensitive to air density, wind velocity, and precipitation, which alter ball trajectory and receiver-catch probability. A veto is triggered if any material fraction of the 2019 sample occurred under adverse physical conditions that shift the passing yardage distribution left relative to the rushing distribution. Because no such stratification is reported, the claim “Passing is far more valuable than rushing” [PAGE 1] holds only for the fair-weather subsample and cannot be extended to cold-weather or high-wind games without additional evidence.

Biomechanical layer: Offensive-line pass protection and run blocking engage distinct motor programs, stance techniques, and muscle-group recruitment patterns. A roster built for a run-heavy scheme may lack the pass-protection technique and quarterback release mechanics required to sustain f_p = 0.70 or higher without a nonlinear rise in adjusted sack rate—a metric explicitly included in the authors’ model [PAGE 1]. Sacks carry strongly negative EPA (roughly −3 to −6 expected points depending on down and distance), so forcing pass frequency beyond the offensive line’s pass-protection capability can make the expected EPA per dropback negative. The deck does not report roster or offensive-line interaction terms, so its optimal-ratio indeterminacy [PAGE 1] is conditional on a fixed, average-quality offensive line.

Weather veto proof: An NFL season spans September through February, encompassing temperature extremes, wind events, and precipitation. The source’s bibliography includes no weather data source, and the one-page extract contains no temperature, wind, or precipitation covariate [PAGE 1]. Therefore, the conclusion that “there’s no indication yet of a frequency that leads to diminishing returns” [PAGE 1] is conditional on an unstated assumption of meteorological homogeneity. If passing EPA declines significantly below a temperature threshold or above a wind threshold, then the feasible optimal pass frequency f_p* is a function f_p*(weather), not a season-wide constant. The absence of weather controls creates a veto on external validity for any game played outside fair-weather conditions.

Cross-layer synthesis: Physical weather shocks reduce passing completion probability; biomechanical roster constraints limit how high f_p can be raised before adjusted sack rate [PAGE 1] increases nonlinearly; and clock constraints force run/pass mixes unrelated to efficiency. The veto proof is that any one of these layers, if active, shifts the EPA response curve such that the no-diminishing-returns finding [PAGE 1] cannot be generalized beyond the specific 2019, fair-weather, average-roster subsample implicit in the source.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning verification (RLVR) counterfactual veto scenarios are specified below. Each includes a concrete intervention, a veto condition, and a falsifiable prediction. No betting lines, spreads, totals, or odds are referenced.

Scenario 1: Pass-frequency escalation with roster fixed. A team increases its pass share from the 2019 baseline f_p = 0.57 [PAGE 1] to f_p = 0.75 over a four-week stretch while keeping the same offensive personnel and facing comparable defensive strength. Veto condition: defensive coordinators update their coverage priors within two to three weeks, increasing man-coverage rates and pass-rush frequency. Prediction: The expected EPA per pass play declines by more than 10 percent relative to baseline, and passing success rate falls below the team’s rushing success rate for at least two consecutive games. Formal veto signature: the cross-partial ∂²EPA / (∂f_p ∂DefensiveAdjustment) < 0, indicating that the marginal value of passing falls as defensive adaptation increases.

Scenario 2: Pass-protection constraint bind. A team whose offensive line ranks in the bottom quintile for adjusted sack rate [PAGE 1] is forced to raise pass frequency above f_p = 0.65 because of game script. Veto condition: adjusted sack rate rises nonlinearly once pass-block snaps exceed a recovery threshold, generating negative-EPA sack plays that erase positive passing yardage. Prediction: Expected EPA per dropback becomes negative when the sack probability exceeds approximately 15 percent, because each sack removes a potential positive-EPA play and incurs field-position loss. The team’s aggregate offensive EPA would be higher at f_p = 0.55 than at f_p = 0.70 under this constraint, falsifying the deck’s implication that more passing is always weakly better [PAGE 1].

Scenario 3: Game-state stratification and Simpson’s paradox. The aggregate 2019 finding that EPA is not impacted by previous play-call proportion [PAGE 1] is recomputed within a narrow game-state stratum: score differential within ±7 points, second and third quarters only, to remove clock-management and trailing-team passing bias. Veto condition: within this neutral-script stratum, the relationship between pass frequency and EPA reveals a concave interior maximum. Prediction: A statistically significant negative quadratic term appears in EPA_i = α + β_1·f_p,i + β_2·(f_p,i)² + ε_i with β_2 < 0, identifying an interior optimal pass share f_p* ≈ 0.60 to 0.65. This would demonstrate that the aggregate “no diminishing returns” conclusion [PAGE 1] was an artifact of pooling clock-driven and score-driven plays, and that a context-dependent optimal ratio exists but is hidden in the unstratified sample.
</RLVR_COUNTERFACTUAL_VETOES>