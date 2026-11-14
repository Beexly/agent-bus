---
source: "2024 - Expected Value Curves Don t Tell the Full Story Exploring NFL Draft Position Trade Value Curves - Zilberman et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Wharton Sports Analytics Journal/2024"
pages: 11
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4762
---

<NATIVE_REASONING>
The user wants a deep analytical response based on the provided source text (a Wharton Sports Analytics Journal paper about NFL draft position trade value curves). They have strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important notes:
- The source text provided is machine-converted from PDF; equations, tables and figures are NOT preserved. I should note this limitation.
- There are no explicit page numbers in the source text provided (it's a continuous text with markers but no [PAGE N] citations visible). I need to cite exact [PAGE N] markers. Since the user says "PAGES: 11" but the text doesn't have page breaks marked, I should infer or note that page markers aren't present in the machine-converted text. However, the invariant says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." The source text has HTML comments but no page numbers. I should be honest that page-level citation isn't possible from the provided conversion, but I can cite section numbers and maybe estimate pages? Better to say that the provided conversion lacks explicit page breaks, so I cite section headers and note this limitation. But the user might expect [PAGE N] markers. Since none are present, I'll note that page citations are unavailable in the provided machine-converted text and cite sections instead, while being careful not to hallucinate page numbers.

Wait, the source text starts with `<!-- source: library/journals/Wharton Sports Analytics Journal/2024/2024 - Expected Value Curves Don t Tell the Full Story Exploring NFL Draft Position Trade Value Curves - Zilberman et al.pdf -->` and then the text. No page markers. I should not invent them. I'll cite sections [Section I], [Section IV], etc. or note "page markers not preserved in conversion."

Let's structure the response:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). Discuss the paper's argument: EV curves vs trade market, variance decaying convexly, eliteness as right-tail probability, beta regression, limitations. Gray-zone: no position adjustment, second contract value proxy issues, team-specific factors, convexity assumptions, right-tail cutoff r=0.15 arbitrary, normalization to first pick, small sample in early picks, survivor bias in second contracts (only players who get second contracts?), APY cap percentage inflation adjustment, historical data 1997-2024, regime changes (rookie wage scale 2011 CBA), nonlinearity may be team-specific.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations from the text. Include:
- Beta regression: Y|x ~ Beta(µ(x), ϕ(x))
- shape1 = µ·ϕ, shape2 = (1−µ)·ϕ
- E[Y|x] = µ(x)
- Var(Y|x) = µ(x)(1−µ(x))/(1+ϕ(x))
- µ(x) = logistic(x·β~) (spline basis)
- ϕ(x) = exp(γ + γ·x) (text has gamma + gamma * x, likely typo but I'll reproduce as given)
- Value curve: E[v(Y)|x]
- Linear: v(y)=y
- Elite indicator: v(y)=1{y>r}, so E[v(Y)|x] = P(Y>r|x)
- Normalization: divide by value of first pick.
- Variance decay convexly across draft.
- Mention units: APY cap percentage (dimensionless proportion of salary cap), draft position x (ordinal integer 1-256 roughly), probability (unitless [0,1]).
- Mention limitations: no position adjustment, beta regression simplified, historical data.
- Since no page numbers, cite sections: [Section IV], [Section V], etc.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: Jimmy Johnson chart (intuition, arbitrary) -> Massey & Thaler 2013 (expected value/surplus value via spline regression, second contract compensation as proxy) -> PFF WAR, Chase Stuart AV (still expected value curves) -> Zilberman & Brill 2024 (nonlinear eliteness, variance, beta regression).
- Multi-week traps: NFL draft is a single annual event but trades happen over weeks; teams may overvalue early picks based on recency bias (e.g., 2021 49ers-Lance trade), rookie wage scale changes (2011 CBA) making historical second contracts non-stationary; team-specific window (championship window vs rebuild) changes optimal curve; the "loser's curse" (winner's curse in draft context).

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: GMs under pressure regress to familiar Johnson chart or expected value curves when facing draft clock pressure.
- Counter-trap: If all teams adopt eliteness-based steep curves, early pick prices inflate, creating arbitrage for teams that can use expected value (accumulate later picks).
- Clock: Draft clock imposes finite decision time; teams may not compute beta regression tail probabilities in real time, relying on heuristics; trade deadline pressure compresses analysis.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- This is tricky because the paper is about NFL draft economics, not physical/biomechanical/weather. I need to adapt: physical layer = player health/wear and tear (rookie contracts, fourth/fifth year options), biomechanical = position-specific physical decay (RB vs QB), weather = not applicable directly but could be team-specific (dome vs outdoor). Veto proof: if a player fails physical, draft value collapses regardless of curve; biomechanical position scarcity (elite QB vs elite K) means eliteness threshold r is not position-invariant (paper admits no position adjustment); weather doesn't affect draft value curves directly but affects player evaluation. I should note vetoes: failed physical = V=0; position-specific biomechanical ceiling invalidates position-agnostic beta model; salary cap structure (deferrals) invalidates gross APY cap percentage.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
RLVR likely means "Reinforcement Learning from Verifiable Rewards" or similar? In this context, probably counterfactual scenarios that can be verified. I need 3 scenarios with predictions.
1. Scenario: A team with existing elite QB (e.g., 2023 Chiefs) trades down using steep eliteness curve. Prediction: They accumulate mid-round picks; Super Bowl win probability unchanged or slightly increased because they need role players, not another elite player. Veto: If they trade away a top-5 pick without replacing elite talent, win probability drops.
2. Scenario: A rebuild team (e.g., 2023 Bears) trades up for top-3 pick using linear expected value curve instead of steep eliteness curve. Prediction: They undervalue the elite threshold and overpay relative to market, or pass on a generational talent; win probability remains low for 3+ years.
3. Scenario: Late-round pick (position >150) is valued by traditional EV curve as positive but right-tail eliteness probability is near zero. Prediction: Trading multiple late picks for one early pick is favorable under eliteness curve but unfavorable under linear curve; the market price will reflect eliteness premium, making late-pick bundles systematically overpriced in linear terms.

Word count: Need >=1000 words total across sections. THINK_TRACE alone >=400 words.

Let's draft carefully.

No betting lines: do not mention odds, spreads, moneylines, totals. I must avoid any gambling terminology. The paper mentions "trade market" but not betting. I'll avoid odds entirely.

Zero toy equations: No fake ratios. Use only equations from the text or clearly derived from them. LaTeX formatting.

Citations: Since no page markers in provided text, I'll say "[Page markers not preserved in machine-converted source; citations refer to section headers]" and cite sections. But the user explicitly says "cite exact [PAGE N] markers". I can't fabricate them. I'll note the absence and use section references as proxies, being transparent.

Let's start writing.

THINK_TRACE content (>=400 words):
- Multi-hop derivation: The paper starts from Massey-Thaler expected value curves. Step 1: performance value = second contract APY cap %. Step 2: expected value E[Y|x] = µ(x) decays convexly. Step 3: variance Var(Y|x) also decays convexly via beta regression precision ϕ(x). Step 4: Super Bowl win probability is nonlinear in player performance; elite players (right tail) have outsize impact. Step 5: Therefore value function v(y) should be nonlinear (indicator y>r or exponential). Step 6: Draft value curve = E[v(Y)|x] = P(Y>r|x) for elite indicator. Step 7: Normalize by first pick. Step 8: Compare to trade market; steeper curves match observed trades.
- Gray zones: 
  * The paper uses second contract APY cap percentage as proxy, but not all drafted players get second contracts (busts have zero or missing data). This induces selection bias/censoring at zero.
  * Beta regression models mean and precision but doesn't adjust for position (QB vs K), yet eliteness threshold r=0.15 of cap is position-invariant, which is physically nonsensical because a kicker cannot consume 15% of cap meaningfully and a QB can.
  * Data span 1997-2024 includes pre- and post-2011 CBA rookie wage scale; contract structures changed, making second contract value non-stationary across the sample.
  * Normalizing all curves to first pick =1 imposes an arbitrary anchor; if first pick value is misestimated, all relative values shift.
  * Convex decay of variance is assumed but not proven causal; outliers (e.g., Tom Brady picked 199th) violate the smooth density assumption.
  * Team-specific factors (championship window, positional need) are excluded by macro perspective.
  * The right-tail cutoff r is arbitrary; the paper tests various r but doesn't establish a decision-theoretic optimal r tied to Super Bowl win probability.
  * No uncertainty quantification on curve steepness (no confidence intervals on tail probabilities).
  * Trade market "observed" steepness is inferred, not directly measured from a revealed preference model.

Source operators & equations:
- List equations with LaTeX.
- Units: x ∈ ℕ (draft pick ordinal), Y ∈ [0,1] (cap percentage), µ(x) ∈ [0,1], ϕ(x) ∈ ℝ₊, v(y) ∈ {0,1} or ℝ₊, probability ∈ [0,1].
- Assumptions: Beta density adequate; spline basis sufficient; second contract value observable; independence across picks; stationarity 1997-2024.
- Breakdown regimes: r→0 collapses to linear expected value; r→1 makes probability zero for all but early picks; ϕ(x)→∞ collapses variance to zero (degenerate); µ(x)→0 makes tail probability zero regardless of variance; position heterogeneity breaks position-agnostic model; failed physical sets Y=0 atom not captured by continuous Beta.

Retrocausal genealogy:
- Jimmy Johnson chart (1990s, intuition) -> Massey & Thaler 2013 (Management Science, expected value + surplus value, spline regression, second contract salary proxy) -> PFF WAR / Chase Stuart AV (still conditional mean curves) -> Zilberman & Brill 2024 (nonlinear tail probability, beta regression, convex variance).
- Multi-week traps: Draft preparation spans weeks; scouting reports stale; combine/pro day noise recency bias; free agency timing interacts with draft value; rookie contract timing (4th year option) creates multi-year incentive distortion; teams may trade future picks (intertemporal discounting ignored by simple sum of points).

Recursive theory of mind:
- Crisis habit regression: Under draft clock pressure, GMs revert to Johnson chart or linear EV because it's cognitively available; abandon beta regression tail calculations.
- Counter-trap: If elite-seeking teams all use steep curves, price of top picks rises; a team using linear EV can acquire more picks and exploit variance diversification (portfolio effect) unless elite talent is non-substitutable.
- Clock: 10-minute (or whatever) picks force heuristic use; cannot compute P(Y>r|x) live; precomputed charts dominate; market disequilibrium persists because computation cost > trade benefit.

Cross-layer veto adjudication:
- Physical layer: Rookie contracts, wear and tear, fifth-year option. If player fails physical, value = 0; Beta continuous density has no atom at zero from injury, though empirical spike near zero includes busts/injuries.
- Biomechanical layer: Position-specific aging curves and injury risk (RB vs QB). The paper's no-position-adjustment limitation means a single r cutoff is invalid; elite RB (high injury risk) vs elite QB (longer elite window) have different Super Bowl marginal value.
- Weather layer: Not directly modeled in paper, but outdoor vs dome team stadium affects player evaluation (e.g., QB in cold weather); however draft value curves are team-agnostic, so weather is a veto only if team-specific Super Bowl win probability depends on weather-stadium interaction.
- Veto proof: Any physical failure (failed physical) voids curve; any biomechanical position mismatch invalidates position-agnostic Beta; any gross contract structuring (deferrals) invalidates APY cap percentage as proxy.

RLVR counterfactual vetoes:
Need 3 verifiable scenarios + predictions.
Scenario 1: Top-3 pick trade. A rebuilding team trades three future first-rounders for a top-3 pick (analogous to 2021 Dolphins-49ers). Under linear EV, the bundle may be fair; under steep eliteness, the top pick is undervalued by linear, so trading down is favorable for the Dolphins if they don't need a specific elite QB. Prediction: The team acquiring multiple picks will outperform the team trading up in Super Bowl win probability over 5 years unless the traded-up player becomes an elite QB (right-tail event p<0.10).
Scenario 2: Mid-tier team with elite QB (2023 Chiefs) trades down from late first to accumulate Day 2 picks. Linear EV says late first has decent expected surplus; eliteness curve says near-zero elite probability. Prediction: Trading down increases expected roster depth without changing elite probability materially; Super Bowl win probability stable if they retain Mahomes; if they trade away the elite QB, curve mismatch causes collapse.
Scenario 3: Late-round "lottery" pick (x>200) valued by linear EV as slightly positive but by eliteness curve as ~0. Prediction: Teams trading multiple late picks for a single mid-round pick are overpaying under eliteness but underpaying under linear; market will show a kink around early Day 3 where linear value is positive but tail probability is zero, creating arbitrage for teams that recognize the discontinuity.

Ensure >1000 words total. Let's count roughly. THINK_TRACE ~450. SOURCE_OPERATORS ~350. RETROCAUSAL ~300. RECURSIVE ~250. CROSS_LAYER ~200. RLVR ~200. Total ~1750. Good.

Avoid betting terms: "odds", "spread", "moneyline", "total", "line", "handicap". Use "probability", "value", "price", "market", "trade".

Now write the final answer with exact XML sections. No markdown outside? Just XML sections. I'll put LaTeX inside.

Check for verbatim quotes: I should include some verbatim quotes from source with section references since page numbers aren't available. Example: “Because variance decays convexly across the draft, eliteness (e.g., right tail probability) decays much more steeply than expected value.” (Abstract). “The density morphs into a spike near zero.” (Section IV). etc.

I will explicitly state: "[PAGE N] markers are not present in the supplied machine-converted text; all citations below refer to section headers and the Abstract/Conclusion as rendered." This is honest and doesn't violate the invariant as much as possible. The invariant says "When source pages are provided, cite exact [PAGE N] markers". They weren't provided, so I note absence.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s argument can be reconstructed as a chain of conditional dependencies. First, performance value Y is defined as second-contract compensation as a percentage of the salary cap (APY cap percentage), which puts all positions on a common dollar-denominated scale and adjusts for cap inflation. Second, the traditional expected value curve is E[Y|x] = µ(x), where x is draft position; Massey and Thaler (2013) estimate this via spline regression, and Zilberman and Brill confirm µ(x) decays convexly across the draft. Third, the paper introduces variance: Var(Y|x) = µ(x)(1−µ(x))/(1+ϕ(x)) under a Beta mean-precision parameterization, with ϕ(x) = exp(γ + γ·x), so precision declines and variance inflates early. Fourth, because both mean and variance decay convexly, the right-tail probability P(Y > r | x) decays much more steeply than the conditional mean. Fifth, the objective function is not expected surplus but Super Bowl win probability, which is plausibly nonlinear in player performance: an elite player (Patrick Mahomes, Tom Brady) can dominate the championship outcome whereas an above-average player cannot. Sixth, therefore the value function v(y) should overweight eliteness; the paper uses v(y) = 1{y > r}, making the draft value curve E[v(Y)|x] = P(Y > r | x). Seventh, each curve is normalized by dividing by the value of the first pick. Eighth, the resulting steep right-tail curves more closely resemble the observed NFL trade market than the shallow linear expected-value curve.

Gray-zone audit: (1) Censoring/selection bias. Not every drafted player receives a second contract; busts may have Y = 0 or missing contract data, and the Beta density on (0,1) may not cleanly accommodate a structural atom at zero without inflating the “spike near zero” described in Section IV. (2) Position invariance. The paper explicitly states the beta regression does not adjust for position, yet a cap-percentage elite threshold r = 0.15 is positionally nonsensical: no kicker reaches 15% of the cap, while elite quarterbacks routinely exceed it. A single r cutoff cannot be position-agnostic. (3) Non-stationarity. The sample spans 1997–2024, crossing the 2011 CBA rookie wage scale; second-contract compensation structures and cap percentages shifted across regimes, violating stationarity in µ(x) and ϕ(x). (4) Anchor dependence. Normalizing every curve to pick #1 = 1 imposes an arbitrary origin; if the first pick’s tail probability is misestimated, all relative values shift proportionally. (5) Convexity as assumption, not proof. The paper asserts convex decay of variance but treats it as empirical smoothing; outliers such as late-round Hall of Famers violate the smooth conditional density and are absorbed into the Beta approximation rather than modeled as regime switches. (6) No uncertainty bands. There are no confidence intervals on P(Y > r | x) or on curve steepness, so the claim that the trade market implies eliteness pricing is descriptive, not inferential. (7) Team-specific windows are excluded. A team with Mahomes may value role players more than eliteness; a rebuild team may value eliteness exponentially, but the macro curve averages these distinct objective functions.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX equations, units, assumptions, and breakdown regimes.

Draft position: x ∈ ℕ, ordinal pick index (approximately 1–256 across seven rounds). Performance outcome: Y ∈ [0,1], second-contract APY cap percentage, dimensionless proportion of salary cap.

Conditional density (Beta mean-precision parameterization), from Section IV:
Y | x ∼ Beta( µ(x), ϕ(x) )
shape₁ = µ · ϕ, shape₂ = (1 − µ) · ϕ.

Conditional mean:
E[Y | x] = µ(x).

Conditional variance:
Var(Y | x) = µ(x) (1 − µ(x)) / (1 + ϕ(x)).
Precision ϕ(x) is inversely proportional to variance; as ϕ(x) increases, variance collapses toward zero.

Mean and precision models (spline basis for µ, exponential for ϕ):
µ(x) = logistic( x · β~ ), where x is a spline basis vector.
ϕ(x) = exp( γ + γ · x ), fitted by maximum likelihood via the betareg package.

Draft value curve from a nonlinear transformation v:
Curve(x) ∝ E[ v(Y) | x ].
Linear (traditional): v(y) = y, so Curve_EV(x) = E[Y | x] = µ(x).
Elite indicator: v(y) = 1{ y > r }, so Curve_elite(x) = E[ 1{Y > r} | x ] = P( Y > r | x ), the right-tail probability that a player at draft position x exceeds cap-proportion threshold r.

Normalization:
Each curve is divided by its value at x = 1, so relative value = Curve(x) / Curve(1), rendering all curves unitless and anchored to the first pick.

Assumptions: (A1) Beta family adequately approximates the conditional density of cap percentage; (A2) spline basis and exponential precision capture all draft-position dependence; (A3) second-contract value is observable and accurately proxies first-contract performance; (A4) observations across 1997–2024 are drawn from a stable data-generating process; (A5) draft picks are valued independently in the curve construction (no portfolio covariance); (A6) the trade market’s implied steepness is taken as revealed preference for eliteness without a structural auction model.

Exact breakdown regimes: (R1) r → 0: the elite indicator collapses to the linear expected-value curve, eliminating the steepness advantage. (R2) r → 1: P(Y > r | x) → 0 for nearly all x, making only the earliest picks nonzero and creating a degenerate, all-or-nothing curve. (R3) ϕ(x) → ∞: variance → 0, the density becomes a point mass at µ(x), and right-tail probability reduces to 1{ µ(x) > r }, erasing the convex-variance argument. (R4) µ(x) → 0: even with high variance, P(Y > r | x) → 0 for late rounds, producing the empirical “spike near zero.” (R5) Position heterogeneity: because the model does not adjust for position, the position-agnostic r cutoff is invalid for positions with different cap-consumption ceilings and injury biologies. (R6) Failed physical or contract restructuring (deferrals): gross APY cap percentage misses present value and health contingencies, so Y is a biased proxy for true performance value.

[PAGE N] markers are not present in the supplied machine-converted text; all quotations above refer to section headers as rendered: Abstract (“Because variance decays convexly across the draft, eliteness (e.g., right tail probability) decays much more steeply than expected value.”), Section IV (“the density morphs into a spike near zero”), Section V (“the more v heavily values eliteness, the steeper its draft value curve becomes”), and Section VI (“our beta regression is a simplified model, and it doesn’t adjust for position”).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week decision traps.

The paper descends from three distinct strata of draft valuation. Stratum 1 is the Jimmy Johnson chart, devised in the 1990s by Dallas Cowboys personnel Mike McCoy; the paper characterizes it as intuition-based and arbitrary, assigning point values by feel rather than statistical modeling. Stratum 2 is Massey and Thaler (2013), “The Loser’s Curse,” published in Management Science, which replaced intuition with statistical modeling: expected performance value and expected surplus value (first-contract performance minus first-contract compensation) estimated as conditional mean curves via spline regression, using second-contract compensation as a market proxy for first-contract performance. Stratum 3 is the post-2013 discourse, in which analysts such as PFF (WAR) and Chase Stuart (Approximate Value) substituted alternative outcome variables but retained the same expected-value (conditional mean) architecture. Zilberman and Brill (2024) constitute Stratum 4: they keep the Massey-Thaler performance metric but replace the linear expectation with nonlinear transformations of the full conditional density, explicitly modeling convexly decaying variance and right-tail eliteness probability via Beta regression.

Multi-week traps embedded in this lineage. The NFL draft is a single annual event, but trade negotiations and board construction unfold over weeks. Trap A: recency bias. A team’s valuation in April is contaminated by combine performances, pro days, and senior-bowl tape from the preceding weeks, which may not stabilize into a reliable estimate of µ(x) or ϕ(x). Trap B: intertemporal mismatch. The paper’s static curve ignores the timing of future picks; trading a 2025 first for a 2026 first involves discounting and roster-window uncertainty that a sum-of-points chart cannot represent. Trap C: CBA regime shift. Because the data span 1997–2024, pre- and post-2011 rookie wage structures are pooled; a GM using the pooled curve in 2025 may be applying a post-2011 market price to a pre-2011 expectation of second-contract value, mispricing the surplus value of early picks. Trap D: the winner’s/loser’s curse. If all teams condition on the same expected-value curve, the team most eager to trade up (the highest bidder) is likely the one overestimating the right-tail probability of their target, systematically overpaying for eliteness that does not materialize.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and the draft clock.

Recursive theory of mind asks what a general manager believes another general manager believes about value, under time pressure. Crisis habit regression: when the draft clock is running and a trade offer arrives, GMs cognitively regress to the most available heuristic—the Johnson chart or a linear expected-value curve—rather than computing P(Y > r | x) from a fitted Beta regression. The steeper eliteness curve is analytically defensible but computationally distant; under crisis, the brain defaults to the shallow, familiar curve. Counter-trap: if a critical mass of teams adopts eliteness-based steep curves, the market price of early picks rises because every bidder is overweighting the right tail. A team that retains a linear expected-value model can then exploit the disequilibrium by trading down, accumulating multiple mid-round picks whose aggregate expected surplus exceeds the overpriced single elite pick—unless elite talent is non-substitutable for Super Bowl success, in which case diversification fails and the steep curve remains rational. The clock: the draft imposes a hard finite horizon on each pick. There is no time to refit a Beta regression, draw from the posterior predictive, or calculate position-specific r thresholds during the clock. Consequently, precomputed charts dominate, market disequilibrium can persist across multiple draft cycles, and the “observed trade market” steepness may reflect computational constraints and habit rather than a revealed, optimized objective function. The recursion stabilizes only when a team’s championship window interacts with its belief about rivals: a rebuilding team believes rivals are eliteness-maximizing, so it prices its early pick steeply; a contender believes rivals are overpaying, so it trades down and regresses to linear value.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto layers.

Physical layer (rookie contract health and wear-and-tear): the paper notes that rookie contracts are cheap relative to free agency and that players are young, but it does not model failed physicals or injury attrition as a discrete atom at Y = 0. Any failed physical vetoes the draft value curve outright: a player who cannot pass a team physical has zero effective performance value regardless of µ(x) or ϕ(x), and the continuous Beta density on (0,1) cannot represent this structural zero without misestimating the late-round spike.

Biomechanical layer (position-specific aging and injury risk): the paper’s Section VI limitation explicitly concedes the beta regression does not adjust for position. This is a hard veto for any position-agnostic r cutoff. An elite running back faces a short elite window, high collision load, and rapid biomechanical decay; an elite quarterback faces lower collision frequency and a longer elite window. A single cap-percentage threshold r = 0.15 cannot be simultaneously meaningful across positions, so the curve’s steepness is overstated for short-lived positions and understated for durable ones. Any trade valuation using this curve without position-specific stratification is biomechanically invalid.

Weather layer: the paper does not model stadium weather or climate, but team-specific Super Bowl win probability can interact with weather-dependent player profiles (e.g., outdoor cold-weather passing versus dome passing). Because the draft value curve is team-agnostic and macro-level, it cannot veto a trade on weather grounds directly; however, for a team whose roster is built around a dome climate, acquiring a player whose elite performance is weather-dependent introduces a context-specific veto not captured by E[v(Y)|x].

Adjudication rule: a physical failure sets value to zero and voids the curve; a biomechanical position mismatch invalidates the position-agnostic Beta model and the uniform r threshold; contract structuring (deferrals, guarantees) invalidates gross APY cap percentage as a present-value proxy. Only after all three veto layers are cleared does the nonlinear eliteness curve become a defensible input to a trade decision.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with predictions. RLVR here denotes reinforcement-learning-from-verifiable-results counterfactuals: each scenario specifies an intervention, the observable veto condition, and a falsifiable prediction.

Scenario 1 (Rebuild team trades up for top-3 pick). Intervention: a rebuilding team surrenders three future first-round picks for the third overall pick, analogous to the 2021 draft trade described in the paper. Veto condition: if the acquired player does not become an elite performer (second contract does not exceed the cap-proportion threshold r) within four years, the linear expected-value bundle was overpaid relative to the eliteness curve. Prediction: over a five-year horizon, the team trading down (accumulating multiple picks) achieves higher aggregate roster surplus value than the team trading up, unless the traded-up player is an elite quarterback; the eliteness curve predicts the trade-up is rational only in the right-tail event, which the fitted Beta density assigns low probability to any single pick.

Scenario 2 (Contending team with elite quarterback trades down). Intervention: a team already possessing an elite cornerstone quarterback (the paper’s 2023 Chiefs example) trades a late first-round pick for multiple Day 2 selections. Veto condition: if the team’s Super Bowl win probability remains stable or improves despite losing late-first expected value, the linear curve was misapplied to a team whose marginal utility of eliteness is saturated. Prediction: under the eliteness framework, the late first-round pick has near-zero right-tail elite probability, so trading it for depth is value-neutral or value-positive; the team’s championship probability is driven by retaining the existing elite player, not by the marginal pick, so the trade does not degrade win probability and may increase it through roster depth.

Scenario 3 (Late-round pick priced by linear curve vs eliteness curve). Intervention: a team offers a bundle of late-round picks (positions > 150) in exchange for one mid-round pick (position ≈ 80). Veto condition: if the linear expected-value curve assigns positive surplus to the late-round bundle but the eliteness curve assigns approximately zero elite probability to each late pick, the market exchange rate exposes a discontinuity. Prediction: the eliteness curve implies late-round picks have negligible expected elite-player yield, so a bundle of several late picks should not trade at par with one mid-round pick under eliteness pricing; if the observed market clears such bundles at linear parity, the market is using expected value, not eliteness, and teams recognizing the discontinuity can arbitrage by selling late-round bundles and buying mid-round picks until the price kink aligns with the tail probability.
</RLVR_COUNTERFACTUAL_VETOES>