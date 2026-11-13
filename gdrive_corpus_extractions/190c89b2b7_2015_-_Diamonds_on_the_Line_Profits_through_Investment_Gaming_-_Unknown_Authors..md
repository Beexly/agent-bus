---
source: "2015 - Diamonds on the Line Profits through Investment Gaming - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2015"
pages: 9
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4879
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about baseball betting/investment gaming. However, I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important: The paper talks about betting lines, money lines, vig, etc. But invariant 1 says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." This is tricky because the source text itself contains these terms. I think the invariant means I should not *introduce* new betting lines or discuss them as recommendations/analysis, but I may need to reference the source's discussion of them critically? Actually, looking carefully: "Never mention spreads, totals, moneylines, or odds." This seems to be a strict output constraint. I should avoid using those terms in my response entirely, or at least not present them as actionable. Since the source text is about "investment gaming" and money lines, I need to be careful. I can refer to them as "market price signals" or "implied probabilities" without saying "moneyline" or "odds". But if I quote the source verbatim, I might have to include them. The invariant says "Never mention" - so I should probably paraphrase and avoid those exact words, or use neutral terms like "market-implied probability" without calling it a moneyline/odds. I will avoid the forbidden terms entirely in my own writing.

Also invariant 2: No toy equations. Use real LaTeX, SI units, probability units, assumptions, singularity/breakdown regimes. Cite [PAGE N].

Word count: >=1000 words across sections. THINK_TRACE alone >=400 words.

Let me structure this carefully.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. I need to derive the production function chain: inputs (singles, doubles, triples, HR, BB) -> % of PPA -> Runs/Out via Eq 2.12 -> EVR/9I via Eq 2.13 -> Gamma distribution parameters -> Pythagorean expectation -> Monte Carlo -> Park factor adjustment -> Economic consequence (EVROI, Edge) -> Investment function (Kelly-like but exponential) -> Filter criteria. Gray zones: zero-intercept regression (forcing through origin), Gamma approximation of discrete run distribution, park factor averaging assumption, starter innings assumption (6 IP, 91% run rate in last 3), small-sample matchup stats, genetic programming overfit risk, bankroll growth claim (factor of 14 in 4 months) with only 23% investment rate and 68% win rate—survivorship bias, look-ahead bias in dynamic age DB, no transaction costs, no market impact, stationarity assumption.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. I'll write out equations 2.12, 2.22, 2.31-2.35, 2.41-2.44, 2.51-2.52, 4.11, 4.12, 5.11. Cite pages. Units: runs/out (dimensionless rate), runs per 9 innings (runs/game), probability (dimensionless [0,1]), bankroll fraction (dimensionless), edge (probability difference, dimensionless). Breakdown regimes: Gamma shape/scale singularities when mean→0 or variance→0; division by zero in implied probability when payout=0; EVROI denominator @Risk=0; park factor average singularity if PF undefined; investment function overflow if EDGE large.

RETROCAUSAL_GENEALOGY: Lineage from Alexander Cartwright 1845, Bill James Pythagorean, Gamma moment matching, Joe Peta Trading Bases, Jeffrey Ma House Advantage, Wayne Winston Mathletics. Multi-week traps: dynamic data age (lookback window), 30-day profit maximization genetic programming, park factors 2011-2013 applied to 2014 games, starter workload decay.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. The model assumes market inefficiency persists. Counter-trap: if everyone uses this, edge decays. Clock: 30-day recalibration, dynamic age DB. Crisis habit: after losses, filters tighten or loosen? The paper says filters recalculated daily via genetic programming over recent 30 days. That's a feedback loop.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Paper ignores weather, wind, temperature, humidity, pitcher fatigue beyond 6 innings, injury, umpire strike zone, ballpark atmospheric density (Coors vs Seattle), travel fatigue. These are cross-layer vetoes that can invalidate predictions. I need to show where model lacks vetoes.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR (Reinforcement Learning from Verifiable Rewards?) counterfactual veto scenarios + predictions. I'll create 3 scenarios: (1) starting pitcher removed before 6 innings due to injury, invalidating 6*100 + 3*91 weighting; (2) extreme weather (wind > 15 mph, temp < 40°F) altering run distribution away from Gamma fit; (3) market-implied probability shifts due to late lineup changes (star batter scratched), making NIP stale and Edge sign-flip. For each, prediction of model failure mode.

Need to be careful with word count. Let's aim for:
- THINK_TRACE: ~500 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~300 words
- RETROCAUSAL_GENEALOGY: ~250 words
- RECURSIVE_THEORY_OF_MIND: ~250 words
- CROSS_LAYER_VETO_ADJUDICATION: ~250 words
- RLVR_COUNTERFACTUAL_VETOES: ~250 words
Total: ~1800 words. Good.

Now, constraint 1: ZERO BETTING LINES. I must not say "spreads, totals, moneylines, or odds." I will not use those words. Instead: "market price", "implied probability", "wagering price", "vigorish" (is vig okay? It says moneylines or odds. Vig is related but maybe avoid). I'll avoid "money line" and "odds". I can say "market quote" or "bookmaker quote". The source text uses "Money Line" and "Implied Winning Probability". I should paraphrase without repeating the forbidden terms. When citing page 5 table, I'll say "the tabulated market quote terms" without saying moneyline.

Let's draft.

THINK_TRACE:

Start with derivation chain. Mention Eq 2.12 on page 2. Inputs: singles, doubles+triples, home runs, base on balls as percentages of productive plate appearances (PPA). Runs/Out = linear combination, zero intercept. Then EVR/9I = 27 * Runs/Out. Then Pythagorean EW% = RS^2/(RS^2+RA^2) page 2. Then Gamma distribution fitting via moments: mean μ=αβ, variance δ²=β²α (page 2-3). Solve α=μ²/δ², β=δ²/μ. EW% as combination of Gamma densities Eq 2.35 page 3. Monte Carlo simulation. Park factor adjustment Eq 2.51-2.52 page 4: average of road/home PF, weighting 6 innings at 100% and 3 innings at 91% run rate, factor .97. Then economic side: EVROI Eq 4.11 page 5-6, Edge Eq 4.12 page 6. Investment function %Bankroll = Shift * 0.0061 * e^(0.484*EDGE) page 6. Filters Table 2 page 7.

Gray-zone audit:
1. Zero-intercept regression: assumes no baseline scoring without events; invalid if shutouts or non-linear interactions matter.
2. Gamma distribution: continuous approximation to discrete integer run counts; breaks down at low means (shutouts) where P(X=0) is mismatched; variance derived from season data may not reflect single-game variance.
3. Park factor: averaging road/home PF assumes symmetry; ignores directional effects (left/right handed hitters, wind). The .97 factor conflates starter innings with bullpen run suppression.
4. Starter assumption: ~6 innings per game from 2011-2013 logs (page 4). Modern bullpen usage makes this stale; breakdown when opener strategy or early removal occurs.
5. Matchup stats: equations 2.41-2.44 require n batters with relevant data; small n causes high variance in %1, %2+3, etc.; plate appearance thresholds (PARD/PAHM) are optimization-derived, risking overfit.
6. Filter set: 10 criteria recalculated daily via genetic programming over 30-day profit maximization. Classic look-ahead / curve-fit trap; parameter count high relative to sample; edge upper bound (criterion 7) is ad hoc "too good to be true" with no statistical basis.
7. Results claim: 23% investment rate, 68% win rate, average return 35%, bankroll factor 14 in 4 months. No confidence intervals, no transaction costs, no slippage, no market impact. Survivorship bias in historical backtest.
8. Dynamic age DB: lookback window optimized; non-stationarity of team rosters means older data may be irrelevant.

Need >=400 words here. I'll write substantial.

SOURCE_OPERATORS_AND_EQUATIONS:

List equations with LaTeX, page citations, units.

Eq 2.12 page 2:
\[
\text{Runs/Out} = 0.3928 \cdot \%1 + 0.9053 \cdot (\%2+\%3) + 1.7361 \cdot \%HR + 0.1716 \cdot \%BB
\]
Units: runs per out (dimensionless rate). % variables are percentages of PPA (dimensionless [0,100]).

Eq 2.13 page 2:
\[
\text{EVR/9I} = 27 \cdot \text{Runs/Out}
\]
Units: expected runs per 9 innings (runs/game).

Eq 2.22 page 2:
\[
\text{EW\%} = \frac{RS^2}{RS^2 + RA^2}
\]
Dimensionless probability.

Eq 2.31-2.32 page 2-3:
\[
\mu = \alpha \beta, \quad \delta^2 = \beta^2 \alpha
\]
Units: runs (mean), runs² (variance).

Eq 2.33-2.34 page 3:
\[
\alpha = \mu^2 / \delta^2, \quad \beta = \delta^2 / \mu
\]
Units: α dimensionless shape, β in runs scale.

Eq 2.35 page 3:
\[
\text{EW\%} = \frac{(\Gamma(\alpha_{RS},\beta_{RS}))^2}{(\Gamma(\alpha_{RS},\beta_{RS}))^2 + (\Gamma(\alpha_{RA},\beta_{RA}))^2}
\]
Note: This notation is mathematically sloppy in source (Γ used as random variable rather than CDF/pdf), but I'll cite it as written.

Eq 2.41-2.44 page 3:
\[
\%1 = 100 \cdot \frac{\sum 1B_i}{n} / \text{PPA}, \dots
\]
Units: percent of PPA.

Eq 2.51-2.52 page 4:
\[
\text{PF adjustment} = \text{Average}(PF_{RD}, PF_{HM}) \cdot \frac{6 \cdot 100 + 3 \cdot 91}{9}
\]
\[
\text{normalized expected runs/game} = (\text{EVR/9I}) \cdot \text{average}(PF_{RD}, PF_{HM}) \cdot 0.97
\]
Units: runs/game.

Eq 4.11 page 6:
\[
\text{EVROI}_{HM} = \frac{[P(W_{HM}) \cdot \text{Payout}_{HM}] - [(1-P(W_{HM})) \cdot @\text{Risk}_{HM}]}{@\text{Risk}_{HM}}
\]
Dimensionless return per unit risk.

Eq 4.12 page 6:
\[
\text{Investment Edge}_{HM} = P(W_{HM}) - \text{NIP}(W_{HM})
\]
Units: probability difference (dimensionless).

Eq 5.11 page 6:
\[
\%\text{Bankroll} = \text{Shift} \cdot 0.0061 \cdot e^{0.484 \cdot \text{EDGE}}
\]
Units: fraction of bankroll (dimensionless). Shift = 7.9 in sample.

Breakdown regimes: division by zero when @Risk=0 in Eq 4.11; β→0 when μ→0 in Gamma; park factor undefined; EDGE singularity in exponential if overflow (not realistic but mathematically unbounded).

RETROCAUSAL_GENEALOGY:

Lineage: Cartwright 1845 (page 1), Bill James Pythagorean (page 2), Winston Mathletics [1] exponents 1.83-2.0, Gamma moment matching (classical statistics), Palisade Decision Tools Monte Carlo (page 3), Joe Peta Trading Bases [2] (page 6), Jeffrey Ma The House Advantage [3] (page 6-7). Retrocausal angle: The paper frames modern investment gaming as continuous with 19th-century wagering, but the mathematical lineage is actually 1980s sabermetrics + 2010s trader narratives. Multi-week traps: 30-day filter recalibration (page 7) creates a short feedback loop; dynamic age DB (criterion 10) means lookback window chases recent performance, causing regime-change blindness; park factors from 2011-2013 applied to August 2014 games assume stadium effects are stationary over multi-year spans; starter innings assumption from 2011-2013 logs (page 4) ignores bullpenning trends visible by 2014-2015.

RECURSIVE_THEORY_OF_MIND:

Crisis habit regression: When the model hits a losing streak, the genetic programming re-optimizes filters over the most recent 30 days (page 7). This is regression to crisis habits: tightening edge thresholds, altering PARD/PAHM, changing dynamic age. The model assumes its own past success is replicable; counter-trap is that the market adapts or the edge was spurious. Clock: The "clock" is the 30-day rolling window and the daily recalculation. If the underlying team performance shifts (injuries, trades, roster expansions in September), the clock resets on stale data. Recursive theory of mind: the modeler must anticipate that other market participants are also running similar models; the edge upper bound (criterion 7) acknowledges "too good to be true" but provides no game-theoretic equilibrium analysis. The paper treats the market as a static price-setter rather than an adaptive opponent.

CROSS_LAYER_VETO_ADJUDICATION:

Physical layer: The model assumes average pitcher goes 6 innings and bullpen run suppression is 91% of starter rate (page 4). No pitch-count, velocity, or injury data. Biomechanical layer: no batter/pitcher handedness platoon splits beyond aggregate matchup stats; no fatigue accumulation within game. Weather layer: park factors capture long-term park effects but not game-day wind, temperature, humidity, or precipitation, all of which alter run distribution and invalidate the Gamma fit calibrated on 2011-2013 gamelogs (page 2-3). Cross-layer veto: If wind is blowing out at Wrigley or temperature exceeds 90°F, the expected run production shifts outside the Gamma parameter space derived from historical mean/variance. The model has no veto mechanism for these exogenous shocks; it will generate a probability and edge even when physical conditions violate stationarity. Thus, the model is not veto-proof; it is veto-blind.

RLVR_COUNTERFACTUAL_VETOES:

Need 3 verifiable RLVR veto scenarios + predictions. RLVR likely means we can verify via environment. Scenarios:

Scenario 1: Starting pitcher injury/early exit. Verifiable: MLB pitch-by-play data shows starting pitcher removed before completing 5 innings (or before 6). Prediction: Model's 6-inning/100% + 3-inning/91% weighting (Eq 2.51) overstates starter contribution and understates bullpen exposure; predicted run distribution mean shifts, EW% miscalibrated; investment placed on wrong side.

Scenario 2: Extreme weather. Verifiable: Game-time wind speed > 15 mph or temperature outside historical range used for Gamma fitting. Prediction: Gamma distribution fitted to 2011-2013 gamelogs (page 2-3) fails; actual run variance exceeds model variance; Monte Carlo winning probabilities become overconfident; edge sign flips relative to realized outcome.

Scenario 3: Late lineup change / star batter scratched. Verifiable: Official lineup posted <60 minutes before first pitch removing a batter with >15% weight in %1/%HR calculations (Eq 2.41-2.44). Prediction: Matchup-derived % inputs are stale; normalized expected runs/game (Eq 2.52) is computed with incorrect personnel; EVROI and Edge computed against obsolete implied probability; capital allocated to a team with degraded offensive production.

Need to ensure no forbidden terms. I won't use spreads, totals, moneylines, odds. I'll use "market quote" or "implied probability". I should check if "vig" counts? It's not in the list but safer to avoid or minimize. I'll refer to "house margin" maybe.

Also ensure LaTeX is formal. Use \[ \] or inline $.

Citations: [PAGE 1], [PAGE 2], etc. Must include exact markers and verbatim quotes when source pages are provided. I need to include some verbatim quotes from the source to satisfy "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I should include a few verbatim quotes.

Let's incorporate verbatim quotes:
- Page 2: "Runs/Out = .3928 * %1 + .9053 * (%2+3) + 1.7361 * %HR + .1716 * %BB"
- Page 2: "Expected Winning Percentage = Runs Scored2 / (Runs Scored2 + Runs Allowed2)"
- Page 3: "α = μ2 / δ2" and "β = δ2 / μ"
- Page 4: "park factor adjustment = (Average(PFRD, PFHM) * (6*100 + 3*91)/9"
- Page 6: "Investment EdgeHM = P(WHM) – NIP(WHM)"
- Page 6: "%Bankroll = Shift * .0061*(e.484*EDGE)"
- Page 7: "Only 23% of all games warranted investment. Overall winning percent was 68%. Average return on capital at risk was 35 % In about four months, the bankroll grew by a factor of fourteen."

Wait, invariant says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I think I need to include verbatim quotes where I reference specific content. I will do that.

Word count check: Need >=1000 total. I'll write generously.

Let's write the final output. No preamble outside XML? The user wants exact XML sections. I will output only the XML sections.

Let's draft carefully.

THINK_TRACE:

Word target ~550.

I will write deep derivation and gray-zone audit.

SOURCE_OPERATORS_AND_EQUATIONS: ~350 words with LaTeX.

RETROCAUSAL_GENEALOGY: ~250.

RECURSIVE_THEORY_OF_MIND: ~250.

CROSS_LAYER_VETO_ADJUDICATION: ~250.

RLVR_COUNTERFACTUAL_VETOES: ~250.

Total should exceed 1000.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's derivation chain proceeds through four linked operators. First, a zero-intercept linear production function maps batting-event frequencies to runs per out. On [PAGE 2], Equation 2.12 states verbatim: "Runs/Out = .3928 * %1 + .9053 * (%2+3) + 1.7361 * %HR + .1716 * %BB". The inputs are percentages of productive plate appearances (PPA); the output is a continuous rate with units of runs per out. Because the expected outs per game is fixed at 27, Equation 2.13 converts this to expected runs per nine innings: EVR/9I = 27 × Runs/Out. This collapses variable-length games (extra innings, shortened games) into a common scale, but it imposes stationarity on the run-scoring process across the full 27-out horizon.

Second, the paper converts expected runs into a win probability using the Bill James Pythagorean form. On [PAGE 2], verbatim: "Expected Winning Percentage = Runs Scored² / (Runs Scored² + Runs Allowed²)". The exponent is fixed at 2 despite the cited range of 1.83 to over 2.0. Because single-game run totals are discrete and skewed, the authors overlay a Gamma distribution on runs per 9 innings. On [PAGE 2]-[PAGE 3], the moment-matching relations are given as μ = αβ and δ² = β²α, solved for α = μ²/δ² and β = δ²/μ. Equation 2.35 then expresses expected winning percentage as a functional of two Gamma random variables. The Gamma assumption is a gray zone: run scoring is a discrete non-negative integer process with a non-trivial mass at zero (shutouts), whereas the Gamma density is continuous and assigns positive density to arbitrarily small non-integer values. When mean run production is low (e.g., dominant pitching matchups), the shape parameter α collapses toward zero and the variance estimate δ² becomes unstable, breaking the moment inversion.

Third, park and matchup adjustments are layered on. On [PAGE 4], the park factor adjustment is verbatim: "park factor adjustment = (Average(PFRD, PFHM) * (6*100 + 3*91)/9" followed by normalized expected runs/game = (EVR/9I) × average(PFRD, PFHM) × 0.97. This embeds two strong assumptions: (1) the starting pitcher works six innings and the bullpen three, with the latter suppressing runs to 91% of the starter's rate, drawn from 2011–2013 game logs; (2) park effects are symmetric and additive via a simple average of road and home park factors. Modern bullpen usage, openers, and early pitcher removal invalidate the six-inning anchor; directional park effects (wind, handedness) are erased by averaging.

Fourth, the economic layer computes expected return and edge. On [PAGE 6], Equation 4.11 defines EVROI using payout, @Risk, and modeled win probability; Equation 4.12 defines Edge as modeled win probability minus normalized implied market probability. The investment function on [PAGE 6] is "%Bankroll = Shift * .0061*(e^.484*EDGE)" with Shift = 7.9, producing an exponential staking rule. Filters in Table 2 on [PAGE 7] gate investment using net rank, expected run delta, strikeout-to-walk delta, OPS delta, normalized win probability, edge bounds, plate-appearance minimums, and a dynamic lookback window re-optimized every 30 days via genetic programming.

Gray-zone audit: The claimed results—23% investment rate, 68% win rate, 35% average return, fourteen-fold bankroll growth in four months on [PAGE 8]—are reported without confidence intervals, transaction costs, slippage, or market-impact terms. The genetic programming over a 30-day window creates a look-ahead/curve-fit trap: filter thresholds are optimized on the same recent returns they are meant to predict. The "EDGE Upper" bound is justified only as protection against "too good to be true" situations, with no statistical distribution or equilibrium basis. The dynamic age database (criterion 10) non-stationarily reweights history, meaning roster turnover, injuries, and September call-ups can make older matchup statistics irrelevant while the model continues to weight them. Finally, the zero-intercept regression forces the production function through the origin, denying baseline run creation from errors, defensive indifference, or non-linear batter–pitcher interactions; in low-event games this systematically misestimates runs/out.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All formal operators below are extracted from the source with page citations. Units are dimensionless unless noted.

[PAGE 2] Production regression (verbatim):  
\[
\mathrm{Runs/Out} = 0.3928 \cdot \%1 + 0.9053 \cdot (\%2+\%3) + 1.7361 \cdot \%HR + 0.1716 \cdot \%BB
\]  
Inputs \(\%1, \%2+\%3, \%HR, \%BB\) are percentages of productive plate appearances (PPA), dimensionless on \([0,100]\). Output unit: runs per out (dimensionless rate). Zero intercept is forced, so the model has no autonomous constant term.

[PAGE 2] Conversion to per-game expectation:  
\[
\mathrm{EVR/9I} = 27 \times \mathrm{Runs/Out}
\]  
Unit: expected runs per 9 innings (runs/game). Assumes exactly 27 expected outs; breaks down for shortened or extra-inning games where the actual out count deviates.

[PAGE 2] Pythagorean expectation (verbatim):  
\[
\mathrm{EW\%} = \frac{RS^{2}}{RS^{2} + RA^{2}}
\]  
Unit: probability on \([0,1]\). Exponent fixed at 2; cited literature range 1.83–2.0+ is ignored for simplicity.

[PAGE 2]–[PAGE 3] Gamma moment matching:  
\[
\mu = \alpha\beta, \qquad \delta^{2} = \beta^{2}\alpha
\]  
\(\mu\): mean runs per 9 innings (unit: runs). \(\delta^{2}\): variance (unit: runs²). Solved:  
\[
\alpha = \frac{\mu^{2}}{\delta^{2}}, \qquad \beta = \frac{\delta^{2}}{\mu}
\]  
\(\alpha\): dimensionless shape. \(\beta\): scale in runs. Singularity regimes: as \(\mu \to 0\), \(\beta \to 0\) and \(\alpha \to \infty\) if \(\delta^{2}\) does not scale proportionally; as \(\delta^{2} \to 0\), \(\alpha \to \infty\), collapsing the distribution to a point mass and eliminating stochastic variance needed for Monte Carlo.

[PAGE 3] Win-probability functional (source notation preserved):  
\[
\mathrm{EW\%} = \frac{(\Gamma(\alpha_{RS},\beta_{RS}))^{2}}{(\Gamma(\alpha_{RS},\beta_{RS}))^{2} + (\Gamma(\alpha_{RA},\beta_{RA}))^{2}}
\]  
The source treats \(\Gamma(\cdot)\) as a Gamma-distributed random quantity rather than a CDF/PDF; this is a notational ambiguity. Execution is via Monte Carlo simulation.

[PAGE 3] Matchup input construction:  
\[
\%1 = 100 \cdot \frac{\sum_{i=1}^{n} 1B_i}{n} / \mathrm{PPA}, \quad
\%2+\%3 = 100 \cdot \frac{\sum_{i=1}^{n}(2B_i+3B_i)}{n} / \mathrm{PPA}
\]  
\[
\%HR = 100 \cdot \frac{\sum HR_i}{n} / \mathrm{PPA}, \quad
\%BB = 100 \cdot \frac{\sum BB_i}{n} / \mathrm{PPA}
\]  
Unit: percent of PPA. Requires \(n\) batters with relevant data; small \(n\) induces high sampling variance in the coefficients fed to Equation 2.12.

[PAGE 4] Park normalization:  
\[
\mathrm{PF\ adjustment} = \mathrm{Average}(PF_{RD}, PF_{HM}) \cdot \frac{6 \cdot 100 + 3 \cdot 91}{9}
\]  
\[
\mathrm{normalized\ expected\ runs/game} = (\mathrm{EVR/9I}) \cdot \mathrm{Average}(PF_{RD}, PF_{HM}) \cdot 0.97
\]  
Unit: runs/game. The factor \((600+273)/9 \approx 97\) assumes 6 innings at starter run rate and 3 innings at 91% of that rate. Breakdown if starter leaves early or bullpen usage deviates from the 2011–2013 log average cited on [PAGE 4].

[PAGE 6] Economic return operator:  
\[
\mathrm{EVROI}_{HM} = \frac{[P(W_{HM}) \cdot \mathrm{Payout}_{HM}] - [(1 - P(W_{HM})) \cdot @\mathrm{Risk}_{HM}]}{@\mathrm{Risk}_{HM}}
\]  
Unit: dimensionless return per unit risk. Singularity at \(@\mathrm{Risk}_{HM} = 0\).

[PAGE 6] Edge operator:  
\[
\mathrm{Investment\ Edge}_{HM} = P(W_{HM}) - \mathrm{NIP}(W_{HM})
\]  
Unit: probability difference (dimensionless). Positive indicates model-implied win probability exceeds normalized market-implied probability.

[PAGE 6] Staking function:  
\[
\%\mathrm{Bankroll} = \mathrm{Shift} \cdot 0.0061 \cdot e^{0.484 \cdot \mathrm{EDGE}}
\]  
Unit: fraction of bankroll (dimensionless). With \(\mathrm{Shift} = 7.9\), the function grows unbounded as EDGE increases; no explicit cap is shown in the equation text, though operational maximums are noted as constraints elsewhere.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper traces its intellectual origin to Alexander Cartwright and the 1845 Knickerbockers [PAGE 1], framing modern investment gaming as a continuation of historical wagering. The mathematical lineage, however, is distinctly modern: Bill James's Pythagorean expectation [PAGE 2], Wayne Winston's Mathletics exponent discussion [PAGE 2, Reference 1], classical Gamma moment matching, Palisade Decision Tools Monte Carlo simulation [PAGE 3], Joe Peta's trader-oriented staking curves [PAGE 6, Reference 2], and Jeffrey Ma's blackjack-and-baseball investment narrative [PAGE 6, Reference 3]. This retrocausal genealogy fuses 1980s sabermetrics with 2010s quantitative trading folklore, presenting a continuous thread from 19th-century baseball to algorithmic staking.

Multi-week traps are embedded in the temporal operators. The filter set in Table 2 [PAGE 7] is recalculated daily via a genetic programming algorithm optimizing profit over the most recent 30 days. This creates a short-horizon feedback loop: the model is always fighting the last four weeks of results, which is exactly the regime where non-stationarity (injuries, trades, roster expansion, bullpen role changes) is most severe. Criterion 10, the "Dynamic Age DB," optimizes how many days of history to retain; if the lookback window shrinks during a winning streak and lengthens during a slump, the model effectively chases its own tail, overweighting recent noise and underweighting structural shifts.

Park factors are drawn from 2011–2013 [PAGE 4] and applied to an August 16, 2014 game [PAGE 5], assuming stadium effects are stationary across a multi-year span while run environments trended downward [PAGE 1 Figure 1]. The starter-inning assumption (roughly six innings per game) is likewise tabulated from 2011–2013 logs [PAGE 4]. By 2014–2015, opener strategies and bullpen-driven matchups were already eroding the six-inning norm, so the park/inning operator was operating on a stale physical prior. The historical lineage thus imports pre-Statcast, pre-Opener assumptions into a framework that claims to adapt dynamically, creating a retrocausal mismatch: the model looks forward using parameters calibrated on a different tactical era of baseball.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The paper's decision architecture contains an implicit theory of mind about the market: it treats the quoted market-implied probability as a static price signal generated by research, contacts, and intuition [PAGE 5], rather than as the equilibrium output of other adaptive modelers. The recursive problem arises because the staking function and filter set are themselves adaptive. When performance degrades, the genetic programming re-optimizes criteria over the trailing 30 days [PAGE 7], which is a crisis-habit regression: under drawdown, the model tightens or loosens edge thresholds, changes PARD/PAHM plate-appearance minimums, and alters the dynamic age lookback, all in response to its own recent losses rather than to an independent structural signal.

The counter-trap is that if the edge were genuine and scalable, other participants running similar production functions would arbitrage it away, compressing the gap between modeled win probability and market-implied probability. The paper acknowledges this only through the ad hoc "EDGE Upper" bound [PAGE 7, criterion 7], described as protection when things look "too good to be true," but offers no game-theoretic equilibrium analysis, no capacity constraint, and no model of how its own order flow would move quotes. The 23% investment rate [PAGE 8] suggests selectivity, but selectivity alone does not prevent edge decay in a competitive ecosystem.

The clock is the daily recalibration cycle and the 30-day profit-maximization window. Each cycle resets the filter parameters, but it also resets the model's memory of regime changes. A starting pitcher injury, a September roster expansion, or a shift in umpire strike-zone enforcement can invalidate the historical matchup statistics in Equations 2.41–2.44 [PAGE 3] faster than the 30-day window can re-learn them. The model thus regresses to crisis habits exactly when the clock demands the most structural conservatism, creating a recursive vulnerability: the more the model loses, the more it overfits its immediate past, and the less it anticipates that other market participants are undergoing the same regression.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The model lacks any cross-layer veto for physical, biomechanical, or weather shocks, making it veto-blind rather than veto-proof.

Physical layer: The park and innings operator [PAGE 4] assumes a six-inning starter followed by a three-inning bullpen segment at 91% of the starter's run-suppression rate. No veto exists for early pitcher removal, opener strategies, or bullpen games. If a starter exits in the second inning, the 6×100 + 3×91 weighting misallocates run expectation between starter and reliever, shifting the Gamma mean and variance used in Equation 2.35 [PAGE 3].

Biomechanical layer: Matchup inputs are built from aggregate batter/pitcher histories [PAGE 3, Equations 2.41–2.44]. There is no platoon split for handedness, no pitch-velocity or spin-term, no cumulative fatigue term within the game, and no injury status check. A batter with a high historical %HR against right-handed pitchers can be inserted into a lefty matchup without penalty, violating the production function's own matchup premise.

Weather layer: Park factors [PAGE 4] capture long-term stadium averages but not game-day wind velocity, temperature, humidity, or precipitation. The Gamma distribution is fitted to 2011–2013 gamelogs [PAGE 2–3] under whatever weather conditions prevailed in that sample. A high-wind day at Wrigley Field or a cold night in Denver shifts the actual run distribution away from the calibrated Gamma shape α and scale β; because the Monte Carlo simulation draws from the historical parameterization, the resulting win probability is overconfident and miscalibrated.

Adjudication rule: Any veto condition—verified early starter removal, wind exceeding the historical range used for Gamma fitting, or a late scratch of a batter weighted heavily in the PPA inputs—should force the Edge and EVROI to zero and trigger a no-investment state. The paper contains no such veto logic; it will compute a positive Edge and allocate bankroll even when physical conditions invalidate the stationarity assumptions of Equations 2.51–2.52 [PAGE 4].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with model predictions:

Scenario 1 — Verified early starter removal. Verifiable via official pitch-by-play data: the starting pitcher for either team is removed before completing five innings. Prediction: The park/inning operator [PAGE 4] overweighted the starter's contribution (six innings at 100% run rate) and underweighted bullpen exposure. The normalized expected runs/game [Equation 2.52] will be biased toward the starter's historical run suppression. The model will issue a non-zero Edge and allocate capital according to Equation 5.11 [PAGE 6] based on a misallocated mean; the realized run distribution will have higher variance and a shifted mean, causing the investment to be placed on the wrong side of the actual outcome with probability tending toward 50% conditional on the removal.

Scenario 2 — Verified extreme weather. Verifiable via stadium weather observations: game-time wind speed exceeds 15 mph blowing out, or temperature falls outside the range represented in the 2011–2013 Gamma calibration sample. Prediction: The Gamma shape α = μ²/δ² and scale β = δ²/μ [PAGE 3] were derived under historical weather regimes. Under extreme wind or temperature, actual run variance δ² inflates while the model's δ² remains fixed, producing an over-dispersed real process relative to the simulated one. The Monte Carlo win probability [Equation 2.35] will be overconfident (narrower than reality), the Edge sign will be computed against a stale implied probability, and the expected return [Equation 4.11] will diverge from realized return; model predictions fail directionally in >50% of such games.

Scenario 3 — Verified late lineup scratch. Verifiable via official lineup posting less than 60 minutes before first pitch: a batter contributing materially to the team's %1, %HR, or %BB inputs [Equations 2.41–2.44, PAGE 3] is scratched and replaced by a bench player with lower historical productive-event frequency. Prediction: The matchup-derived production inputs are computed with obsolete personnel. Equation 2.12 [PAGE 2] generates an inflated Runs/Out for the affected team, propagating through EVR/9I [PAGE 2] and the Gamma mean μ [PAGE 3]. The model will assign that team an inflated win probability and potentially a positive Edge, allocating bankroll to a team whose offensive production has been degraded by the scratch; the economic consequence is systematic capital loss on the mis-specified side.
</RLVR_COUNTERFACTUAL_VETOES>