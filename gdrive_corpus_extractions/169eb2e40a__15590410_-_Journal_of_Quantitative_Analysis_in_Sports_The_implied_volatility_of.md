---
source: "[15590410 - Journal of Quantitative Analysis in Sports] The implied volatility of a sports game.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 9
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5481
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about implied volatility of sports games. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraint: ZERO BETTING LINES. I must not mention spreads, totals, moneylines, or odds. But the source text discusses these extensively. I need to talk about the model without using those banned terms. Wait, the invariant says "Never mention spreads, totals, moneylines, or odds." This is tricky because the paper is about using market information (point spread and money line) to calculate implied volatility. However, I must obey the invariant. I can refer to "market-implied expected margin", "market-implied win probability", "market prices", "contract prices", "betting market assessments" but I cannot use the specific banned words: spreads, totals, moneylines, odds. Let me be careful.

Actually, re-reading: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." So I should avoid those exact words. I can use synonyms like "market line", "market price", "contract price", "probability assessment", "expected margin", etc. But I should avoid the banned terms.

Also need to cite exact [PAGE N] markers and verbatim quotes when source pages are provided. I have pages 1-9. I should cite them.

Let me structure the response:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). Discuss the Brownian motion model, how μ and p map to σIV, the time-varying extension, the Super Bowl application, singularity at μ=0,p=0.5, normality assumptions, jump extensions, vig adjustments, etc. Gray zones: market vig adjustment ambiguity, constant drift assumption, ill-posed inverse problem with jumps, normality breakdown in low-scoring sports, Markov assumption, halftime volatility discrepancy.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations. Units: points for score difference, dimensionless time t∈[0,1], σ in points, p dimensionless probability. Citations [PAGE 1], [PAGE 2], etc. Verbatim quotes where appropriate. Breakdown regimes: singularity when μ=0 and p=0.5; normality breakdown; jump component ill-posedness; t→1 volatility goes to zero.

<RETROCAUSAL_GENEALOGY>: Historical lineage: Stern 1994 Brownian motion model [PAGE 1], Black-Scholes analogy [PAGE 2], Hull 2005 [PAGE 2], Merton 1976 jump model [PAGE 5], Rosenfeld 2012 logistic extension [PAGE 4], Glickman & Stern 1998 [PAGE 5], Kelly 1956 [PAGE 7], Snowberg et al. 2012 [PAGE 8], etc. Multi-week traps: model calibration drift, regime shifts, market efficiency decay.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. Discuss how bettors/analysts regress to crisis habits (constant vol assumption), counter-trap (market-implied vol at halftime suggests different regime), clock (time decay σ/√(1-t)). The paper shows at halftime the market implied vol was 14 vs pregame 10.6, suggesting the market anticipated regime change. Recursive theory of mind: what does the market think I think? If I use constant vol but market uses time-varying, I misprice.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. The paper mentions weather and game conditions as reasons σ may vary [PAGE 4]. Physical layer: power outage (34 min blackout) [PAGE 6] is an exogenous shock not in the model. Biomechanical: player fatigue, injuries not modeled. Weather: not specifically in Super Bowl example but mentioned as possible cause for time-varying vol. Veto: any model assuming constant σ is vetoed by exogenous shocks like blackout. Also discrete scoring events (touchdowns ±7) violate normal continuity [PAGE 5].

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
1. Constant-σ veto: If σ is assumed constant 10.6 but market halftime price implies 14, then a bet based on constant-σ model is vetoed. Prediction: model-implied win prob 0.96 vs market 0.90; the market price will converge to realized outcome more often than the constant-σ model.
2. Normality/jump veto: In low-scoring or discrete-score regimes (football touchdowns), normal approximation fails near end-of-game. Prediction: as t→1, actual win prob exhibits step changes not captured by smooth Brownian conditional CDF.
3. Exogenous shock veto: A 34-minute power outage [PAGE 6] changes regime; model has no state variable for stoppage. Prediction: during and after blackout, market-implied vol spikes and mean reversion breaks; Brownian bridge interpolation between pre-blackout and post-blackout states fails.

Need to ensure total words >= 1000 across sections. Let's aim for each section substantial.

Also, I must not use banned words. Let me scan my planned text for "spread", "total", "moneyline", "odds". I will avoid them. Use "market line" maybe? But "spread" is banned. I'll say "point advantage", "market-implied expected margin", "contract price", "win probability implied by market prices", etc.

Let's draft carefully.

Word count check: Need >=1000 words total. I'll write generously.

Citations: Use [PAGE N] format.

Verbatim quotes: I can quote short phrases from the source, e.g., "the market-implied volatility of the outcome" [PAGE 1], "dX_t = μ dt + σ dB_t" [PAGE 2], etc.

Let's write.

Section 1: THINK_TRACE (>=400 words). I'll do multi-hop: Brownian motion -> conditional distribution -> implied vol inversion -> time-varying -> Super Bowl application -> gray zones.

Gray zones:
- The inversion σIV = μ / Φ⁻¹(p) is undefined when μ=0 and p=0.5 (singularity) [PAGE 4].
- Vig adjustment: probabilities sum to 1.078, midpoint used [PAGE 6]. This is arbitrary; using midpoint vs normalization changes p and thus σIV nonlinearly.
- Drift μ assumed constant [PAGE 4]; if μ varies (strategy changes), cannot infer both μ and σ from single p [PAGE 4].
- Jump extension makes inverse problem ill-posed (4 parameters, 2 market inputs) [PAGE 5].
- Normality questionable in football due to discrete scoring [PAGE 4-5].
- Markov assumption: only current lead matters; history ignored [PAGE 8].
- Halftime discrepancy: model 0.96 vs market 0.90 [PAGE 7].

Section 2: SOURCE_OPERATORS_AND_EQUATIONS. LaTeX.
- dX_t = μ dt + σ dB_t [PAGE 2]
- X(t) ~ N(μt, σ²t) [PAGE 2]
- X(1) ~ N(μ, σ²) [PAGE 2]
- p = Φ(μ/σ) [PAGE 2]
- Conditional: X(1)|X(t)=l ~ N(l + μ(1-t), σ²(1-t)) [PAGE 2]
- Conditional win prob: p_{t,l} = Φ( (l + μ(1-t)) / (σ√(1-t)) ) [PAGE 2] (need to match paper's notation)
- Remaining volatility: σ / √(1-t) [PAGE 2]
- Implied vol: σIV = μ / Φ⁻¹(p) [PAGE 4]
- Time-varying: σIV,t = (l + μ(1-t)) / ( √(1-t) Φ⁻¹(p_{t,l}) ) [PAGE 4] (check paper's exact formula)
- Vig: p_SF + p_Bal = 1.078 [PAGE 6]; p_Bal = (p_Bal + (1 - p_SF))/2 = 0.353 [PAGE 6]
- Kelly: ω_bet = (p - q)/O ... but I shouldn't get too deep into betting maybe. But it's in the paper. I can mention it as a formal equation without banned terms? The paper uses "odds". I can refer to "market offered return" O_mkt. But careful not to say "odds". I'll say "market payout multiplier" or similar. Actually the invariant says never mention odds. So I will avoid discussing Kelly in detail or use euphemism. Better to mention it as "capital allocation rule" with formula but avoid the word "odds". I'll say "market return multiplier" instead.

Units: X in points, t dimensionless [0,1], σ in points, p dimensionless [0,1].

Breakdown regimes:
- Singularity: μ=0, p=0.5 => division by zero / undefined quantile ratio [PAGE 4].
- t→1: conditional volatility → 0; any nonzero lead implies deterministic win [PAGE 2].
- Normality breakdown: low-scoring or discrete events [PAGE 4-5].
- Jump ill-posedness: 4 unknowns, 2 market pins [PAGE 5].

Section 3: RETROCAUSAL_GENEALOGY. Lineage from Stern 1994 [PAGE 1], Black-Scholes/Hull 2005 [PAGE 2], Merton 1976 [PAGE 5], Rosenfeld 2012 [PAGE 4], Glickman & Stern 1998 [PAGE 5], Kelly 1956 [PAGE 7], Snowberg et al. 2012 [PAGE 8]. Multi-week traps: parameter drift over a season, regime shifts after injuries, market efficiency decay as information diffuses.

Section 4: RECURSIVE_THEORY_OF_MIND. Crisis habit regression: analysts revert to pre-game σ=10.6 and constant drift. Counter-trap: market at halftime prices in σ=14, anticipating comeback; if analyst ignores this, they misread market probability 0.90 as mispriced when it reflects regime change. Clock: σ/√(1-t) decays deterministically under constant σ, but market clock can speed up (blackout) or slow down. Recursive depth: Level 0: use model. Level 1: infer market thinks σ is time-varying. Level 2: infer market thinks I will use constant σ and therefore offers contracts to exploit that. Level 3: decide whether to follow market-implied σ or stick to physical model.

Section 5: CROSS_LAYER_VETO_ADJUDICATION.
Physical: 34-minute power outage [PAGE 6] is exogenous state reset; Brownian motion has no jump for stoppage; market probability ticked 0.95→0.94 during blackout [PAGE 6] but model has no variable for outage duration.
Biomechanical: player fatigue, injuries, substitution patterns alter μ and σ mid-game; model assumes μ constant [PAGE 4].
Weather: paper explicitly notes σ may vary because of weather [PAGE 4]; no weather state in Super Bowl (indoor Superdome) but generally a veto.
Veto proof: any calibration that holds σ fixed across the blackout is invalidated because the physical process is interrupted and resumed; conditional Brownian bridge between pre- and post-blackout leads is not justified without a stoppage state.

Section 6: RLVR_COUNTERFACTUAL_VETOES. Three scenarios.
1. Scenario A: Constant-σ calibration. Pre-game μ=-4, p=0.353 => σIV=10.6 [PAGE 7]. At halftime l=15, t=0.5. Constant-σ model gives p=0.96 [PAGE 7]. Market price p_mkt=0.90 [PAGE 7]. Veto: if a strategy bets on Ravens assuming model p=0.96 is correct and market p=0.90 is wrong, the veto triggers because market-implied σ for second half is 14 > 10.6 [PAGE 7], indicating the market already priced a regime shift. Prediction: realized win probability will track the market-implied time-varying σ path more closely than the fixed-σ Brownian bridge; the fixed-σ model will overestimate the favorite's win probability in comeback-prone regimes.
2. Scenario B: Normality/discrete-score veto. Football scores arrive in discrete jumps (±2, ±3, ±7) [PAGE 5]. Near t→1, the Brownian conditional distribution is continuous and smooth, but actual win probability changes discretely after scoring events. Veto: any strategy relying on smooth conditional CDF p_{t,l} in the final 5% of game time is invalidated by jump risk. Prediction: in the final quarter, realized win probability will exhibit step-function discontinuities correlated with scoring events, violating the Brownian martingale property; the model's implied vol will appear to spike artificially as it tries to fit discrete moves with continuous diffusion.
3. Scenario C: Exogenous stoppage veto. The 34-minute power outage [PAGE 6] removes game clock time but not model time t; the paper treats t as fraction of game elapsed [PAGE 2], but during the outage no scoring occurs while t continues. Veto: if t is advanced during the stoppage, the conditional volatility σ/√(1-t) artificially decays even though no Brownian motion occurs. Prediction: market contracts traded during blackout (42,760 contracts) [PAGE 6] will show a volatility regime change immediately after power restoration that the time-homogeneous Brownian model cannot reproduce; the model will underestimate conditional variance in the post-stoppage segment because it has already "spent" volatility during the outage.

Wait, I need to be careful: the paper says "the game begins at time zero... ends at time one" [PAGE 1]. The power outage is a real-time stoppage. If t is real-time fraction, then during outage t still passes but X(t) is frozen, violating dX=μdt+σdB because dX=0 but dt>0. So it's a veto.

Now word count. Let's write fully. I'll aim for ~1500+ words total.

Need to ensure no banned words. Let me check: "spread" - I won't use it. "total" - avoid as a betting term; "total points" maybe okay? The invariant says "totals" as a betting line. I'll avoid "total" in betting context. "moneyline" - avoid. "odds" - avoid. I'll use "market price", "contract price", "probability assessment", "expected margin", "point advantage", "win probability".

Let's compose the final output with exact XML tags.

I should include verbatim quotes with page markers. Example:
- "dX_t = μ dt + σ dB_t" [PAGE 2]
- "the volatility is a decreasing function of t" [PAGE 2]
- "the market was expecting a more volatile second half" [PAGE 7]
- "a 34 min power outage" [PAGE 6]

Make sure to include [PAGE N] markers throughout.

Let's start writing.

THINK_TRACE section:

The core mathematical object is the lead process X(t), measured in points, defined on t∈[0,1] with X(0)=0 and X(1) the final margin [PAGE 1]. The paper adopts Stern’s (1994) Brownian motion specification dX_t = μ dt + σ dB_t, where μ is the drift in points per unit game time and σ is the volatility in points per square-root unit time [PAGE 2]. This yields X(t) ~ N(μt, σ²t) and, at the terminal horizon, X(1) ~ N(μ, σ²) [PAGE 2]. The win probability for team A is p = P(X(1) > 0) = Φ(μ/σ) [PAGE 2].

A multi-hop derivation proceeds as follows. First, market inputs deliver two numbers: the expected final margin μ (in points) and the win probability p (dimensionless). Second, because the normal CDF is monotonic, the pair (μ,p) identifies a unique volatility σIV through the scalar equation p = Φ(μ/σIV), or equivalently σIV = μ / Φ⁻¹(p) [PAGE 4]. Third, conditional on an intermediate state X(t)=l, the Brownian bridge property gives X(1)|X(t)=l ~ N(l + μ(1-t), σ²(1-t)) [PAGE 2], so the conditional win probability is p_{t,l} = Φ( [l + μ(1-t)] / [σ√(1-t)] ) [PAGE 2]. Fourth, replacing p by the real-time market assessment p_{t,l} and solving for σ yields the time-varying implied volatility σIV,t = [l + μ(1-t)] / [ √(1-t) Φ⁻¹(p_{t,l}) ] [PAGE 4]. This is not a separate physical model; it is a recalibration of the diffusion coefficient to the market’s conditional price at each clock time.

Gray-zone audit. (i) Singularity: when μ=0 and p=0.5, Φ⁻¹(p)=0 and the ratio μ/Φ⁻¹(p) is 0/0; the paper explicitly notes that no market information about volatility exists in this evenly matched case [PAGE 4]. (ii) Vig adjustment: pre-game market probabilities summed to 1.078, and the paper took the midpoint to back out p=0.353 for Baltimore [PAGE 6]. This midpoint rule is ad hoc; a different normalization (e.g., proportional rescaling) shifts p nonlinearly and therefore changes σIV because Φ⁻¹ is convex for p<0.5. (iii) Drift stationarity: the time-varying inversion assumes μ is constant [PAGE 4]; if coaching strategy or in-game adjustments alter μ, a single p_{t,l} cannot separately identify μ and σ, making the system under-identified. (iv) Jump ill-posedness: adding a Merton-style jump component dJ_t with rate λ and jump-size distribution g(θJ) introduces four parameters (μ,σ,λ,θJ) but only two market pins [PAGE 5], so the inverse problem is ill-posed without subjective or historical jump priors. (v) Normality breakdown: Rosenfeld (2012) finds heavier-than-normal tails and end-of-game non-normality [PAGE 4]; football’s discrete scoring events (±2, ±3, ±7) violate the continuous diffusion assumption, especially near t→1 where conditional volatility σ/√(1-t) collapses to zero [PAGE 2]. (vi) Markov truncation: the model conditions only on the current lead l, discarding path history [PAGE 8], which is questionable in sports with momentum, possession, or fatigue states. (vii) Halftime regime conflict: the pre-game calibrated σ=10.6 implies a halftime win probability of 0.96 for a 15-point lead [PAGE 7], whereas the market price was 0.90 [PAGE 7]; this gap signals that the market was pricing a different diffusion regime than the constant-σ physical model.

This section is already long. I'll expand a bit more to ensure >400 words.

SOURCE_OPERATORS_AND_EQUATIONS section:

List equations with units and citations. Include breakdown regimes.

RETROCAUSAL_GENEALOGY section:

Historical lineage. Stern 1994 Brownian motion for sports scores [PAGE 1]; Black-Scholes analogy via Hull 2005 [PAGE 2]; Merton 1976 jump-diffusion [PAGE 5]; Rosenfeld 2012 logistic extension [PAGE 4]; Glickman & Stern 1998 state-space NFL model [PAGE 5]; Kelly 1956 capital growth [PAGE 7]; Snowberg, Wolfers, Zitzewitz 2012 prediction markets [PAGE 8]. Multi-week traps: parameter estimates from pre-game markets decay as team rosters change over weeks; volatility regimes shift after injuries; market efficiency improves as information diffuses, making early-week implied vol stale.

RECURSIVE_THEORY_OF_MIND section:

Define levels. Level 0: analyst trusts pre-game σ=10.6 constant. Level 1: analyst observes market halftime price p_mkt=0.90 and infers σ_IV,0.5=14 [PAGE 7]. Level 2: analyst reasons that the market knows many analysts are stuck at Level 0, so the market offers contracts that exploit constant-σ assumptions. Level 3: analyst decides whether to adopt σ=14 or remain with 10.6. Crisis habit regression: under pressure (e.g., large lead, late game), analysts regress to the simplest calibration (constant σ) because it requires only one market input. Counter-trap: the market’s implied volatility at halftime was explicitly “more consistent with the value typical for regular season games” [PAGE 7], meaning the crowd anticipated a regime shift; betting against it on the basis of the pre-game σ is a trap. Clock: the deterministic decay σ/√(1-t) assumes continuous trading; the power outage froze the physical process while t advanced, decoupling the model clock from the physical clock [PAGE 6]. Therefore the recursive best response is to treat the clock as possibly stopped and to weight the time-varying implied σ more heavily than the pre-game constant after any exogenous interruption.

CROSS_LAYER_VETO_ADJUDICATION section:

Physical layer: The Super Bowl featured a 34-minute power outage [PAGE 6]. During the outage dX_t=0 but dt>0, violating dX_t=μdt+σdB_t. The market probability ticked from 0.95 to 0.94 during the blackout [PAGE 6], showing price discovery without scoring. A Brownian bridge that ignores stoppage time is physically invalid. Veto: any calibration that advances t through the outage without adding a stoppage state is rejected.

Biomechanical layer: player fatigue, injuries, and substitution alter μ and σ intra-game [PAGE 4]. The model holds μ fixed [PAGE 4], so a key injury mid-game is an unmodeled drift shift. Veto: if a starter is removed, the pre-game μ no longer describes the remainder of the game.

Weather layer: the paper explicitly states σ may vary because of weather [PAGE 4]. Super Bowl XLVII was indoors at the Superdome [PAGE 6], so weather was not the driver there, but in outdoor venues a weather front changes scoring volatility. Veto: outdoor games with precipitation or wind shifts invalidate constant σ.

Adjudication: The cross-layer veto is unanimous for the blackout event. The model’s assumption of continuous, time-homogeneous diffusion is physically false during the stoppage; therefore the implied volatility calculated from prices bracketing the outage reflects a mixture of regimes, not a single σ.

RLVR_COUNTERFACTUAL_VETOES section:

Scenario 1: Fixed-σ betting trap. Calibrate σIV=10.6 from pre-game μ=-4 and p=0.353 [PAGE 7]. At halftime, l=15, t=0.5, the constant-σ model predicts p=0.96 [PAGE 7], while the market price was 0.90 [PAGE 7]. The market-implied second-half volatility was 14 points [PAGE 7]. Veto: wagering on the favorite because the model says 0.96 > market 0.90 is vetoed; the market has already repriced σ upward. Prediction: the realized win path will track the time-varying σ=14 bridge more closely than the fixed σ=10.6 bridge, and the fixed-σ model will overstate the favorite’s win probability in comeback regimes.

Scenario 2: Continuous-diffusion endgame veto. Football scoring is discrete (±2, ±3, ±7) [PAGE 5], and Rosenfeld (2012) documents end-of-game non-normality [PAGE 4]. As t→1, σ/√(1-t) → 0 [PAGE 2], so the model predicts deterministic outcomes from any nonzero lead. Veto: any strategy that treats the conditional win probability in the final 5% of game time as a smooth Brownian CDF is invalidated by discrete scoring jumps. Prediction: win probability will exhibit step discontinuities after scoring events in the final minutes, violating the Brownian martingale and causing the model’s implied volatility to spike spuriously as it attempts to fit jumps with diffusion.

Scenario 3: Exogenous stoppage clock veto. During the 34-minute outage, game clock advanced but score did not [PAGE 6]; 42,760 contracts traded [PAGE 6]. If t is defined as fraction of total game time [PAGE 1], the model spends volatility during a period with zero physical motion. Veto: calibrating σ continuously through the stoppage underestimates post-stoppage conditional variance because the diffusion clock was run without a Brownian increment. Prediction: immediately after power restoration, realized volatility will exceed the model’s interpolated σ/√(1-t), and market-implied σ will show a discontinuous jump that the time-homogeneous model cannot reproduce without a stoppage state variable.

Now I need to make sure total words >= 1000. Let's estimate. THINK_TRACE ~450. SOURCE_OPERATORS ~400. RETROCAUSAL ~250. RECURSIVE ~300. CROSS_LAYER ~300. RLVR ~350. Total ~2050. Good.

I must not mention banned words. Let me scan my draft mentally: "spread" - I see "point spread" in my thought but I won't include it in final. "moneyline" - won't use. "odds" - won't use. "totals" - won't use. I'll use "market price", "contract price", "probability assessment".

Also need verbatim quotes. I'll include a few exact quotes with page markers.

Let's write final output now.
</NATIVE_REASONING>

<THINK_TRACE>
The core mathematical object is the lead process X(t), measured in points, defined on normalized game time t∈[0,1] with X(0)=0 and X(1) equal to the final score difference [PAGE 1]. The paper adopts Stern’s (1994) Brownian motion specification dX_t = μ dt + σ dB_t, where μ is the drift in points per unit game time and σ is the volatility in points per square-root unit of time [PAGE 2]. This yields X(t)∼N(μt, σ²t) and, at the terminal horizon, X(1)∼N(μ, σ²) [PAGE 2]. The win probability for team A is p = P(X(1)>0) = Φ(μ/σ) [PAGE 2].

A multi-hop derivation proceeds as follows. First, market inputs deliver two numbers: the expected final margin μ (in points) and the win probability p (dimensionless). Second, because the standard normal CDF is monotonic, the pair (μ,p) identifies a unique volatility σIV through the scalar equation p = Φ(μ/σIV), equivalently σIV = μ / Φ⁻¹(p) [PAGE 4]. Third, conditional on an intermediate state X(t)=l, the Brownian bridge property gives X(1)|X(t)=l ∼ N(l + μ(1−t), σ²(1−t)) [PAGE 2], so the conditional win probability is p_{t,l} = Φ( [l + μ(1−t)] / [σ√(1−t)] ) [PAGE 2]. Fourth, replacing p by the real-time market assessment p_{t,l} and solving for σ yields the time-varying implied volatility σIV,t = [l + μ(1−t)] / [ √(1−t) Φ⁻¹(p_{t,l}) ] [PAGE 4]. This is not a new physical dynamics; it is a recalibration of the diffusion coefficient to the market’s conditional price at each clock time.

Gray-zone audit. (i) Singularity: when μ=0 and p=0.5, Φ⁻¹(p)=0 and the ratio μ/Φ⁻¹(p) is 0/0; the paper explicitly notes that no market information about volatility exists in this evenly matched case [PAGE 4]. (ii) Vig adjustment: pre-game market probabilities summed to 1.078, and the paper took the midpoint to back out p=0.353 for Baltimore [PAGE 6]. This midpoint rule is ad hoc; a different normalization shifts p nonlinearly and therefore changes σIV because Φ⁻¹ is convex for p<0.5. (iii) Drift stationarity: the time-varying inversion assumes μ is constant [PAGE 4]; if coaching strategy or in-game adjustments alter μ, a single p_{t,l} cannot separately identify μ and σ, making the system under-identified. (iv) Jump ill-posedness: adding a Merton-style jump component dJ_t with rate λ and jump-size distribution g(θJ) introduces four parameters (μ,σ,λ,θJ) but only two market pins [PAGE 5], so the inverse problem is ill-posed without subjective or historical jump priors. (v) Normality breakdown: Rosenfeld (2012) finds heavier-than-normal tails and end-of-game non-normality [PAGE 4]; football’s discrete scoring events (±2, ±3, ±7) violate the continuous diffusion assumption, especially near t→1 where conditional volatility σ/√(1−t) collapses to zero [PAGE 2]. (vi) Markov truncation: the model conditions only on the current lead l, discarding path history [PAGE 8], which is questionable in sports with momentum, possession, or fatigue states. (vii) Halftime regime conflict: the pre-game calibrated σ=10.6 implies a halftime win probability of 0.96 for a 15-point lead [PAGE 7], whereas the market price was 0.90 [PAGE 7]; this gap signals that the market was pricing a different diffusion regime than the constant-σ physical model.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal model operators and units. Let X(t) denote the score lead of team A over team B in points, with time normalized to t∈[0,1] (dimensionless), X(0)=0, and terminal X(1) representing the final margin [PAGE 1]. Let B(t) be standard Brownian motion with B(t)∼N(0,t) [PAGE 2].

Primary stochastic differential equation [PAGE 2]:
dX_t = μ dt + σ dB_t, μ in points per unit time, σ in points per √time.

Marginal distribution at time t [PAGE 2]:
X(t) ∼ N(μt, σ²t).

Terminal distribution [PAGE 2]:
X(1) ∼ N(μ, σ²).

Win probability for team A [PAGE 2]:
p = P(X(1) > 0) = Φ(μ/σ), p dimensionless in [0,1], Φ standard normal CDF.

Conditional distribution given X(t)=l [PAGE 2]:
X(1) | X(t)=l ∼ N( l + μ(1−t), σ²(1−t) ).

Conditional win probability [PAGE 2]:
p_{t,l} = Φ( [l + μ(1−t)] / [σ√(1−t)] ).

Conditional (remaining) volatility [PAGE 2]:
σ_rem(t) = σ / √(1−t), points; strictly decreasing in t, tending to 0 as t→1.

Implied volatility inversion from pre-game market inputs [PAGE 4]:
σIV = μ / Φ⁻¹(p), where Φ⁻¹(p) = qnorm(p). Units: points.

Breakdown (singularity) regime [PAGE 4]: if μ=0 and p=0.5, then Φ⁻¹(p)=0 and σIV = 0/0 is undefined; the model carries no market information about volatility for an evenly matched contest.

Time-varying implied volatility from real-time market price p_{t,l} [PAGE 4]:
σIV,t = [l + μ(1−t)] / [ √(1−t) Φ⁻¹(p_{t,l}) ], points.

Assumption embedded in time-varying inversion [PAGE 4]: μ is held constant over [t,1]; only σ is allowed to vary with game conditions such as weather or score state.

Vig normalization example from Super Bowl XLVII [PAGE 6]: raw market-implied probabilities for the two sides summed to 1.078; the paper used the midpoint to derive p=0.353 for the underdog perspective.

Numerical calibration [PAGE 7]: with μ=−4 points and p=0.353, Φ⁻¹(p)=−0.377, giving σIV = (−4)/(−0.377) = 10.60 points. The paper notes this is historically low versus a typical NFL game volatility of 13–14 points [PAGE 7].

Jump-extension model [PAGE 5]:
dX_t = μ dt + σ dB_t + dJ_t, with P(dJ_t=1)=λ dt and jump sizes ξ_t∼g(θ_J). This introduces four free parameters but only two market observables, yielding an ill-posed inverse problem.

Model validity boundary [PAGE 4–5]: the normal/Brownian assumption is plausible for high-scoring basketball but questionable for football because discrete scoring events (e.g., touchdowns) produce large score jumps, especially near the end of the game.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with Stern (1994), “A Brownian Motion Model for the Progress of Sports Scores,” which supplies the baseline diffusion for X(t) [PAGE 1]. Polson and Stern explicitly draw the analogy to the Black–Scholes framework as described in Hull (2005), noting the difference that sports scores follow arithmetic Brownian motion rather than geometric Brownian motion [PAGE 2]. The jump extension invokes Merton (1976), “Option Pricing when Underlying Stock Returns are Discontinuous,” treating touchdowns and other discrete scoring events as jump shocks to the score difference [PAGE 5]. The normality critique follows Rosenfeld (2012), who documents heavier-than-normal tails and non-normal score changes late in NBA games [PAGE 4]. Alternative score models referenced include Glickman and Stern (1998) for NFL state-space scoring [PAGE 5] and bivariate Poisson approaches for soccer/hockey [PAGE 5]. Capital-allocation discussion cites Kelly (1956) [PAGE 7]. Market-efficiency context cites Snowberg, Wolfers, and Zitzewitz (2012) on prediction markets [PAGE 8].

Multi-week traps embedded in this genealogy. First, parameter drift: μ and σ estimated from pre-game markets reflect roster and strategic conditions at kickoff; over a multi-week window, injuries, weather trends, and tactical adjustments make the pre-game calibration stale. Second, regime misidentification: the paper itself shows that pre-game σ=10.6 implied a halftime win probability of 0.96, while the market price was 0.90 [PAGE 7]; an analyst who recurses only on the pre-game parameter set will misread the market’s halftime repricing as a mispricing rather than a regime shift. Third, market efficiency decay: as information diffuses through online contracts, early-week implied volatility loses predictive content because the market price path already incorporates public news [PAGE 8]. Fourth, jump-parameter subjectivity: because the jump-diffusion inverse problem is ill-posed [PAGE 5], analysts who impose subjective λ or θ_J over a season introduce look-ahead bias that is not falsifiable from the two market inputs alone.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Level 0 (crisis habit regression): under pressure—large lead, late clock, or exogenous shock—an analyst reverts to the simplest calibration: constant σ estimated pre-game (10.6 points) and constant μ [PAGE 7]. This is cognitively cheap because it requires only one market input pair and ignores time variation.

Level 1 (market inference): observing the real-time market price p_{t,l}, the analyst inverts for σIV,t. At halftime of Super Bowl XLVII, with l=15 and t=0.5, the market price of 0.90 implied σIV,0.5=14 points, explicitly “more consistent with the value typical for regular season games” [PAGE 7]. The market therefore anticipated a more volatile second half, possibly pricing a comeback.

Level 2 (counter-trap): the analyst reasons that the market knows many participants are stuck at Level 0 (constant σ=10.6). Consequently, the market’s offered price of 0.90 may not be an error to exploit; it may be the equilibrium price under a time-varying diffusion that the Level 0 analyst ignores. Betting on the favorite because the Level 0 model says 0.96 > market 0.90 is the counter-trap: the market has already repriced volatility upward.

Level 3 (clock recursion): the Brownian clock assumes continuous scoring while t advances. The 34-minute power outage [PAGE 6] froze physical scoring while market time continued, and 42,760 contracts changed hands during the blackout [PAGE 6]. A recursive best response must treat t as possibly decoupled from physical play and weight σIV,t after the interruption more heavily than the pre-game constant. The depth of recursion therefore determines whether the analyst trusts the physical Brownian bridge (Level 0), the market-implied volatility surface (Level 1), or a meta-model of what the market believes about the analyst’s own Level 0 bias (Level 2).
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. The game was held at the Superdome in New Orleans and experienced a 34-minute power outage [PAGE 6]. During the outage the score did not change while model time t advanced, so dX_t=0 but dt>0, violating dX_t=μdt+σdB_t. The market price moved from 0.95 to 0.94 during the blackout [PAGE 6], demonstrating price discovery under zero scoring. Any calibration that advances the Brownian clock through the stoppage without adding a stoppage state is physically invalid and is vetoed.

Biomechanical layer. Player fatigue, injuries, and substitution patterns alter the drift μ and diffusion σ intra-game [PAGE 4]. The model explicitly assumes μ remains constant [PAGE 4]. A mid-game injury to a primary ball-handler or quarterback is an unmodeled drift shift; holding the pre-game μ fixed after such an event is a biomechanical veto.

Weather layer. The paper states that σ may vary because of weather conditions [PAGE 4]. Super Bowl XLVII was indoors, so weather was not the active driver in this instance [PAGE 6], but for outdoor venues a precipitation front or wind shift changes scoring volatility and invalidates constant σ.

Adjudication result. The cross-layer veto is unanimous for the blackout event. Because the physical process is interrupted and resumed, the implied volatility calculated from prices bracketing the outage reflects a mixture of regimes rather than a single time-homogeneous σ. The model’s Markov assumption (only current lead matters, history irrelevant) [PAGE 8] is also violated by the stoppage because the duration of the outage is a path-dependent state variable not captured by l alone.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario A — Fixed-σ calibration veto. Pre-game inputs μ=−4 points and p=0.353 yield σIV=10.60 points [PAGE 7]. At halftime, l=15 points and t=0.5, the constant-σ Brownian model implies a conditional win probability of 0.96 [PAGE 7], while the market price was 0.90 [PAGE 7]. The market-implied second-half volatility was 14 points [PAGE 7]. Veto: a strategy that wagers on the favorite because the Level 0 model probability (0.96) exceeds the market price (0.90) is vetoed; the market has already incorporated a higher diffusion regime. Prediction: the realized win path will track the time-varying σ=14 bridge more closely than the fixed σ=10.6 bridge, and the fixed-σ model will systematically overstate the favorite’s win probability in comeback-prone regimes.

Scenario B — Continuous-diffusion endgame veto. Football scoring occurs in discrete jumps (approximately ±2, ±3, ±7 points) [PAGE 5], and Rosenfeld (2012) documents end-of-game non-normality [PAGE 4]. As t→1, σ/√(1−t)→0 [PAGE 2], so the model predicts deterministic outcomes from any nonzero lead. Veto: any strategy that treats the conditional win probability in the final 5% of game time as a smooth Brownian CDF is invalidated by discrete scoring risk. Prediction: in the final minutes, realized win probability will exhibit step discontinuities after scoring events, violating the Brownian martingale; the model’s implied volatility will spike spuriously as it attempts to fit jumps with a continuous diffusion.

Scenario C — Exogenous stoppage clock veto. During the 34-minute power outage, game clock advanced but no scoring occurred [PAGE 6], and 42,760 contracts traded [PAGE 6]. If t is defined as fraction of total game time [PAGE 1], the model spends volatility during a period of zero Brownian motion. Veto: calibrating σ continuously through the stoppage underestimates post-stoppage conditional variance because the diffusion clock ran without an increment. Prediction: immediately after power restoration, realized volatility will exceed the model’s interpolated σ/√(1−t), and market-implied σ will show a discontinuous jump that the time-homogeneous model cannot reproduce without an explicit stoppage state variable.
</RLVR_COUNTERFACTUAL_VETOES>