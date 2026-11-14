---
source: "2015 - Diamonds on the Line Profits through Investment Gaming - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2015"
pages: 9
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4779
---

<NATIVE_REASONING>
The user wants a deep analysis of the provided research paper "Diamonds on the Line: Profits through Investment Gaming" by Clayton Graham. They have provided the full source text (9 pages).

Constraints:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. Wait, the user explicitly says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." However, the source text is all about money lines, implied probabilities, etc. I need to be careful here. The instruction says never mention spreads, totals, moneylines, or odds. I must avoid using those specific terms? Or avoid providing betting lines? Let's re-read: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." This is a strict invariant. So I should not mention moneylines or odds. I can refer to "the wagering quote" or "market price" or "implied probability" but avoid the specific prohibited words. Actually, "implied probability" is not odds per se, but it's close. I should probably avoid saying "money line" and "odds". I can talk about "pricing", "implied winning probability", "cost of the position", "payoff structure", etc. But I must not use the words spreads, totals, moneylines, odds. Let's be safe and avoid those exact terms.

2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.

3. >= 1,000-WORD DEPTH across these exact XML sections:
<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to produce all these XML sections with substantial content. Total words >= 1000 across sections. THINK_TRACE alone >= 400 words.

Let's plan the content.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Discuss the derivation from runs/out to regression coefficients, Gamma distribution parameters, Monte Carlo simulation, park factor adjustment, implied probability normalization, EVROI, Edge, investment function, Kelly-like staking, filters, genetic programming optimization. Gray zones: forced zero intercept, Gamma approximation of discrete run distribution, park factor averaging simplistic assumption, starting pitcher 6 innings assumption, 91% runs/out in last 3 innings, "too good to be true" edge upper bound subjectivity, dynamic age DB lookback window, overfitting risk with 30-day profit maximization genetic programming, small sample of 23% games wagered, 68% win rate possibly overfit, bankroll growth factor of 14 in 4 months implying extreme leverage or survivorship bias, lack of transaction costs, slippage, market impact, liquidity constraints. Also cite pages.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations from the paper with page citations. Units: runs/out (dimensionless runs per out), percentage contribution (dimensionless %), plate appearances (count), expected runs per 9 innings (runs/game), Gamma shape alpha (dimensionless), scale beta (runs), probability dimensionless, EVROI dimensionless return per unit risk, Edge dimensionless probability difference, %Bankroll dimensionless fraction. Breakdown regimes: alpha, beta <=0 undefined; variance zero leads to beta=0 singularity; PPA=0 division by zero; EVROI denominator @Risk = 0 undefined; Edge upper bound <21% road, <17% home per Table 2; maximum investment per bet and daily caps unspecified numerically; Gamma shape parameter constraints.

RETROCAUSAL_GENEALOGY: Historical lineage: Alexander Cartwright 1845, Bill James Pythagorean expectation (exponent 2, range 1.83-2.0+), Joe Peta Trading Bases (2013), Jeffrey Ma The House Advantage (2010), Wayne Winston Mathletics (2009), Retrosheet gamelogs 2011-2013, Palisade Decision Tools Suite. Multi-week traps: dynamic age DB lookback (days), 30-day rolling optimization window, park factors 2011-2013 static, pitcher ~6 innings per game assumption from 2011-2013 logs, stale data regimes, seasonal trend downward runs/game (Figure 1), regime shift when offensive environment changes.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Discuss how the model assumes market inefficiency persists; when edge is detected, other investors/models may regress to similar habits (copycat quant strategies), causing the edge to decay. Counter-trap: the "too good to be true" upper edge filter (Table 2 col 6/7) is a meta-cognitive guard against adversarial market mispricing or data errors. Clock: dynamic age DB and 30-day genetic programming recalibration act as a clock; crisis habit regression occurs when recent performance degrades (e.g., losing streak), causing over-reduction of stake or abandonment. Need to model the opponent's model.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. The paper ignores weather (wind, temperature, humidity), park factor only adjusts for park, not day-of-game weather; biomechanical fatigue (pitcher pitch count, days rest), starting pitcher only ~6 innings then bullpen; physical condition of players (injuries not in %1, %2+3, %HR, %BB). Veto proof means if physical layer says no (e.g., starting pitcher scratched, extreme wind), the model has no mechanism to veto because inputs are only historical aggregate stats. Need to prove veto is absent or insufficient.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. Need 3 scenarios where the model would be vetoed, with predictions.
1. Starting pitcher scratched late (lineup change) -> model inputs based on historical pitcher matchup invalid -> veto; prediction: actual win probability deviates from Gamma MC by >X%, EVROI collapses.
2. Park factor extreme weather (wind blowing out at Wrigley) not captured by average PFRD/PFHM -> veto; prediction: runs/out regression underestimates variance, Gamma tail miscalibrated, over/under on total runs (but can't mention totals? maybe "run-scoring environment").
3. Genetic programming overfit to 30-day window -> regime shift (e.g., dead-ball period) -> veto; prediction: edge upper bound filter triggers false positives, bankroll drawdown >Y% within Z days.

Make sure to cite [PAGE N] markers. The source text has page markers like "Page | 3", "Page | 4", etc. I should reference them as [PAGE 3], [PAGE 4], etc.

Also need to avoid prohibited betting terms. I will not use "moneyline", "spread", "total", "odds". I can use "wagering quote", "market-implied probability", "price", "risk", "payoff", "implied winning probability" (NIP(W) is in the paper, but "implied probability" might be okay; the prohibition is on "odds" specifically). I'll avoid "money line" and use "wagering quote" or "the line" generically? Better to avoid "line" too? The invariant says "Never mention spreads, totals, moneylines, or odds." It doesn't ban "line" but to be safe I'll say "market quote" or "pricing".

Word count: Need >=1000 words total. THINK_TRACE >=400. I'll aim for ~2000+ words total across sections.

Let's draft.

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

Citations: [PAGE 1] through [PAGE 9]. Need exact page markers. The text has "Page | 1" etc? Let's check: After abstract and intro, there is "Page | 3" then "Page | 4", "Page | 5", "Page | 7", "Page | 8", "Page | 9". Page 1 and 2 seem implicit. I can cite [PAGE 1] for abstract/intro since it's at the start. [PAGE 2] for production function start. [PAGE 3] for Figure 3 and park factor. [PAGE 4] for Table 1 and Section 3. [PAGE 5] for Economics section 4. [PAGE 6] for Investment section 5 and Table 2? Actually Table 2 appears after "Page | 4"? Let's scroll: The text shows "Page | 4" then Section 3, Table 1. Then Section 4 on "Page | 5". Then Section 5, Figure 5, Figure 6, equation 5.11, Table 2. It seems Table 2 is on Page 6 perhaps but not marked. Then "Page | 7" before Results. Then "Page | 8" Conclusions, "Page | 9" References. I will cite approximate pages based on the visible markers, being careful not to fabricate exact quotes from unmarked pages. I can say [PAGE 4] for Table 1, [PAGE 5] for Eq 4.11/4.12, [PAGE 6] for Eq 5.11 and Table 2 if I infer, but safer to use only marked pages: [PAGE 3], [PAGE 4], [PAGE 5], [PAGE 7], [PAGE 8], [PAGE 9]. For earlier content (Eq 2.12 etc.) it's before Page 3 marker, likely [PAGE 1] or [PAGE 2]. I'll cite [PAGE 1] for abstract/intro and [PAGE 2] for production function equations, noting they appear before the first explicit page footer. Actually the first explicit footer is "Page | 3". So pages 1-2 are unmarked but I can refer to them as [PAGE 1] and [PAGE 2] by logical sequence. That's acceptable.

Need verbatim quotes? The instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should include some verbatim quotes with page citations.

Let's write.

THINK_TRACE content (>=400 words):
- Derive production function: inputs %1, %2+3, %HR, %BB per PPA. Regression Eq 2.12: Runs/Out = .3928*%1 + .9053*(%2+3) + 1.7361*%HR + .1716*%BB. Zero intercept. Units: runs/out dimensionless.
- Convert to EVR/9I = 27 * Runs/Out [PAGE 2].
- Pythagorean EW% = RS^2/(RS^2+RA^2) [PAGE 2]. Exponent fixed at 2 despite range 1.83-2.0.
- Gamma distribution: mu = alpha*beta, delta^2 = beta^2*alpha [PAGE 2]. Solve alpha = mu^2/delta^2, beta = delta^2/mu.
- EW% as combination of Gamma densities Eq 2.35 [PAGE 2/3]. Monte Carlo simulation yields 56% vs 62% discrepancy for Mariners/Tigers [PAGE 3].
- Park factor adjustment: avg(PFRD, PFHM) * (6*100 + 3*91)/9 = avg(PF)*0.97 [PAGE 3]. Normalized expected runs/game = EVR/9I * avg(PF) * 0.97 [PAGE 3].
- Implied probability normalization: IP(W) sums to 101.83%, NIP(W) divides by 1.0183 [PAGE 4]. Vig ~5% [PAGE 4].
- EVROI formula Eq 4.11 [PAGE 5]. Edge = P(W) - NIP(W) [PAGE 5].
- Investment function: %Bankroll = Shift * .0061 * e^(0.484*EDGE), Shift=7.9 [PAGE 5/6]. Filters Table 2 [PAGE 6].
- Gray zones: forced zero intercept omits sacrifice hits, errors; Gamma continuous approximation of discrete runs; park factor assumes symmetry and ignores weather/wind; starting pitcher 6 innings assumption ignores bullpen variance; 91% runs/out in last 3 innings is static; edge upper bound subjective ("too good to be true"); 30-day genetic programming window overfits noise; 23% investment rate and 68% win rate may be curve-fit; bankroll growth 14x in 4 months implies unrealistic compounding or survivorship; no transaction costs/slippage/liquidity.

SOURCE_OPERATORS_AND_EQUATIONS: List equations in LaTeX with page cites and units.
Eq 2.12: \frac{\text{Runs}}{\text{Out}} = 0.3928\,\%_1 + 0.9053\,(\%_2+\%_3) + 1.7361\,\%_{\text{HR}} + 0.1716\,\%_{\text{BB}} [PAGE 2]
Eq 2.13: \text{EVR}/9I = 27 \times \text{Runs/Out} [PAGE 2]
Eq 2.22: \text{EW}\% = \frac{RS^2}{RS^2+RA^2} [PAGE 2]
Eq 2.31-2.32: \mu = \alpha\beta, \delta^2 = \beta^2\alpha \implies \alpha = \mu^2/\delta^2, \beta = \delta^2/\mu [PAGE 2]
Eq 2.35: \text{EW}\% = \frac{[\Gamma(\alpha_{RS},\beta_{RS})]^2}{[\Gamma(\alpha_{RS},\beta_{RS})]^2 + [\Gamma(\alpha_{RA},\beta_{RA})]^2} [PAGE 3]
Eq 2.51: \text{PF}_{\text{adj}} = \text{avg}(PF_{RD},PF_{HM}) \times \frac{6\times100 + 3\times91}{9} [PAGE 3]
Eq 2.52: \text{Norm. Runs/Game} = \text{EVR}/9I \times \text{avg}(PF_{RD},PF_{HM}) \times 0.97 [PAGE 3]
Eq 4.11: \text{EVROI}_{HM} = \frac{P(W_{HM})\times\text{Payout}_{HM} - (1-P(W_{HM}))\times@Risk_{HM}}{@Risk_{HM}} [PAGE 5]
Eq 4.12: \text{Edge}_{HM} = P(W_{HM}) - \text{NIP}(W_{HM}) [PAGE 5]
Eq 5.11: \%Bankroll = \text{Shift} \times 0.0061 \times e^{0.484 \times \text{EDGE}}, \text{Shift}=7.9 [PAGE 6]
Table 1: NIP(W) normalization [PAGE 4]
Table 2: filter boundaries [PAGE 6]

Breakdown regimes: @Risk=0 => EVROI undefined; delta^2=0 => beta=0 => Gamma degenerate; PPA=0 => % inputs undefined (div by zero); EDGE > upper bound => veto despite positive EVROI; Shift parameter unconstrained outside optimization.

RETROCAUSAL_GENEALOGY: Cartwright 1845 [PAGE 1], Bill James Pythagorean [PAGE 2], Winston Mathletics 2009 [PAGE 9], Peta Trading Bases 2013 [PAGE 9], Ma House Advantage 2010 [PAGE 9], Retrosheet 2011-2013 [PAGE 2/3], Palisade Decision Tools [PAGE 3]. Multi-week traps: dynamic age DB lookback in days [PAGE 6], 30-day rolling genetic programming [PAGE 6], park factor 2011-2013 static window [PAGE 3], offensive trend downward [PAGE 2 Figure 1]. Regime shift risk when league scoring environment changes.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression: after drawdown, model may over-shrink stake or abandon edge; counter-trap: Edge upper bound filter (Table 2 col 7) prevents "too good to be true" bets that may be adversarial mispricing or data error; clock: dynamic age DB and 30-day recalibration act as temporal governor, but if clock is misaligned with regime shift, model chases stale patterns. Need to model other quant investors copying the same filters, causing edge decay (anti-inductive market).

CROSS_LAYER_VETO_ADJUDICATION: Physical layer: starting pitcher health/scratch, bullpen fatigue, pitch count; biomechanical: batter/pitcher matchup stats ignore platoon splits, injury, weather (wind direction/speed, temperature, humidity, precipitation) affecting ball flight and run scoring; paper only adjusts for park factor average, not day-of-game weather [PAGE 3-4]. Veto proof: model lacks any veto input for scratch, weather, or umpire zone; if physical layer says "do not bet", the model cannot know. Therefore veto is external and manual, not algorithmic.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.
1. Late starting pitcher scratch: inputs %1..%BB derived from scheduled pitcher [PAGE 3, Appendix D] become invalid. Veto triggered if actual pitcher differs from scheduled. Prediction: simulated win probability deviates by >10 percentage points from Gamma MC; EVROI turns negative within one game; bankroll drawdown accelerates if not vetoed.
2. Extreme weather not captured by park factor: e.g., wind blowing out >15 mph at Wrigley. Park factor is historical average [PAGE 3]. Veto if weather index exceeds threshold. Prediction: Gamma shape alpha calibrated on calm days underestimates run variance, causing mispriced Edge; expected runs/game error >0.5 runs/9I; investment function over-allocates because Edge appears positive.
3. Genetic programming overfit to 30-day profit window: regime shift (e.g., league-wide scoring decline per Figure 1 [PAGE 2]) invalidates filter boundaries. Veto if rolling 30-day profit < threshold or Edge > upper bound repeatedly. Prediction: bankroll growth factor of 14 [PAGE 7] collapses to drawdown >20% within 2 weeks; 68% win rate [PAGE 7] reverts to ~50% as edge decays.

Make sure no banned terms. I will avoid "moneyline", "spread", "total", "odds". I might say "wagering quote" or "market price". I will use "implied winning probability" as in paper but not "odds". Good.

Now ensure word count. THINK_TRACE should be >=400 words. Let's write robustly.

I need to include verbatim quotes. Example: "A zero intercept is forced so as to assure credence to only actual factors of production." [PAGE 2]. "The Edge is our measure of competitive advantage." [PAGE 5]. "Only 23% of all games warranted investment." [PAGE 7]. etc.

Let's compose the final answer.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper constructs a baseball production function whose atomic inputs are normalized offensive events per productive plate appearance (PPA): singles (%1), doubles plus triples (%2+3), home runs (%HR), and base on balls (%BB) [PAGE 2]. Equation 2.12 regresses runs/out on these shares with a forced zero intercept: Runs/Out = 0.3928·%1 + 0.9053·(%2+3) + 1.7361·%HR + 0.1716·%BB [PAGE 2]. The zero-intercept assumption is a structural restriction; it excludes sacrifice bunts, errors, hit-by-pitch, and dropped third strikes as “noise,” which is defensible for prediction but creates a gray zone when a team’s run environment is heavily driven by non-PPA events such as defensive errors or balks. Equation 2.13 scales runs/out to expected runs per nine innings by multiplying by 27 outs [PAGE 2], yielding EVR/9I. The linear mapping assumes constant outs per game and ignores extra-inning variability and shortened games.

The winning-probability layer uses Bill James’s Pythagorean form with exponent fixed at 2, despite the cited range of 1.83 to over 2.0 [PAGE 2]. Equation 2.22 converts team-level runs scored and allowed into an expected winning percentage: EW% = RS² / (RS² + RA²) [PAGE 2]. To apply this to a single game, the paper extrapolates the density of runs per nine innings from runs/out using a Gamma distribution whose moments satisfy μ = αβ and δ² = β²α [PAGE 2]. Solving simultaneously gives α = μ²/δ² and β = δ²/μ. Because runs are discrete and bounded below by zero, the continuous Gamma approximation is convenient but not exact; the singularity regime occurs when variance δ² → 0, which forces β → 0 and collapses the distribution to a degenerate point mass, eliminating tail risk representation.

Equation 2.35 expresses expected winning percentage as a squared ratio of Gamma densities for the home and road teams [PAGE 3]. A Monte Carlo simulation is then used to generate the distribution of scoring differences. For the illustrative Mariners–Tigers matchup, simulation produces a 56% home-win probability versus 62% from the deterministic Pythagorean equation [PAGE 3]. The divergence is attributed to Gamma-distribution shape differences between the two clubs, highlighting that the deterministic Pythagorean point estimate can be materially biased when run distributions are asymmetric.

Park-factor normalization introduces Eq. 2.51 and Eq. 2.52 [PAGE 3]. The adjustment averages road and home park factors and multiplies by a fixed innings-weighting factor (6·100 + 3·91)/9 ≈ 0.97, premised on starters pitching roughly six innings and run production in innings 7–9 being 91% of the first-six rate [PAGE 3]. This is a strong homogeneity assumption: it ignores bullpen quality, park-specific weather on game day, and platoon effects. The model then computes market-implied winning probability from the wagering quote, normalizes it so implied probabilities sum to 100%, and reports a house vig of approximately 5% for the illustrative quote [PAGE 4].

The economics layer defines EVROI in Eq. 4.11 [PAGE 5] and Edge in Eq. 4.12 as P(W) − NIP(W) [PAGE 5]. Edge is treated as the primary competitive-advantage metric. The investment function in Eq. 5.11 is exponential in Edge: %Bankroll = Shift · 0.0061 · e^(0.484·EDGE), with Shift = 7.9 derived by optimization [PAGE 6]. Table 2 imposes filters on net rank, expected-run differential, strikeout/walk differential, OPS differential, normalized win probability, lower and upper Edge bounds, plate-appearance thresholds, and dynamic database age [PAGE 6]. The upper Edge bound (<21% road, <17% home) is an explicit anti-overfit guard against “too good to be true” quotes [PAGE 6].

Gray-zone audit: (1) The 30-day rolling genetic programming recalibration of filter boundaries risks overfitting to recent noise [PAGE 6]; (2) claimed performance—23% investment rate, 68% win rate, 35% average return on capital at risk, fourteenfold bankroll growth in four months [PAGE 7]—omits transaction costs, slippage, market impact, and liquidity constraints; (3) the static park-factor window (2011–2013) and static pitcher-innings assumption create regime-shift vulnerability when offensive environments change, as Figure 1 shows a downward trend in runs per game per team [PAGE 2]; (4) the “too good to be true” Edge upper bound is subjective and lacks a formal false-discovery-rate control.

No executable betting-line recommendation is provided here; the analysis is limited to structural model audit.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and verbatim references.

1. Runs/Out regression (Eq. 2.12) [PAGE 2]:
\[
\frac{\text{Runs}}{\text{Out}} = 0.3928\,\%_{1} + 0.9053\,(\%_{2} + \%_{3}) + 1.7361\,\%_{\text{HR}} + 0.1716\,\%_{\text{BB}}
\]
Units: runs per out (dimensionless rate). Each % is a percentage of productive plate appearances (dimensionless share). Verbatim constraint: “A zero intercept is forced so as to assure credence to only actual factors of production” [PAGE 2].

2. Expected runs per nine innings (Eq. 2.13) [PAGE 2]:
\[
\text{EVR}/9I = 27 \times \frac{\text{Runs}}{\text{Out}}
\]
Units: expected runs per 9 innings (runs/game).

3. Pythagorean expected winning percentage (Eq. 2.22) [PAGE 2]:
\[
\text{EW}\% = \frac{RS^{2}}{RS^{2} + RA^{2}}
\]
Units: probability (dimensionless, [0,1]). Exponent fixed at 2; cited alternatives range from 1.83 to over 2.0 [PAGE 2].

4. Gamma moment operators (Eqs. 2.31–2.32) [PAGE 2]:
\[
\mu = \alpha\beta, \qquad \delta^{2} = \beta^{2}\alpha
\]
Units: μ in runs; δ² in runs²; α dimensionless shape; β in runs scale. Inversion:
\[
\alpha = \frac{\mu^{2}}{\delta^{2}}, \qquad \beta = \frac{\delta^{2}}{\mu}.
\]
Singularity: if δ² → 0 then β → 0 and α → ∞, collapsing the Gamma to a deterministic point and removing tail variance.

5. Game-winning probability via Gamma density combination (Eq. 2.35) [PAGE 2–3]:
\[
\text{EW}\% = \frac{[\Gamma(\alpha_{RS},\beta_{RS})]^{2}}{[\Gamma(\alpha_{RS},\beta_{RS})]^{2} + [\Gamma(\alpha_{RA},\beta_{RA})]^{2}}
\]
Units: probability. Implemented by Monte Carlo simulation; illustrative output 56% simulated vs. 62% deterministic for Mariners at Tigers [PAGE 3].

6. Park-factor adjustment (Eqs. 2.51–2.52) [PAGE 3]:
\[
\text{PF}_{\text{adj}} = \text{avg}(PF_{RD}, PF_{HM}) \times \frac{6 \times 100 + 3 \times 91}{9} \approx 0.97 \times \text{avg}(PF_{RD}, PF_{HM})
\]
\[
\text{Normalized Runs/Game} = \text{EVR}/9I \times \text{avg}(PF_{RD}, PF_{HM}) \times 0.97
\]
Units: park factor is an index (dimensionless); output runs/game. Assumption: starter ≈ 6 innings; last-3-innings run rate = 91% of first-6 rate [PAGE 3].

7. Normalized implied winning probability [PAGE 4]:
Raw IP(W) sums to 101.83%; normalized NIP(W) divides by 1.0183 so that total = 100.0% [PAGE 4]. House vig ≈ (213 − 202.5)/213 ≈ 5% [PAGE 4].

8. Expected Value Return on Investment (Eq. 4.11) [PAGE 5]:
\[
\text{EVROI}_{HM} = \frac{P(W_{HM}) \times \text{Payout}_{HM} - (1 - P(W_{HM})) \times @Risk_{HM}}{@Risk_{HM}}
\]
Units: dimensionless return per unit of capital at risk. Breakdown if @Risk = 0 (undefined division).

9. Investment Edge (Eq. 4.12) [PAGE 5]:
\[
\text{Edge}_{HM} = P(W_{HM}) - \text{NIP}(W_{HM})
\]
Units: probability difference (dimensionless). Verbatim: “The EDGE is our measure of competitive advantage” [PAGE 5].

10. Nonlinear staking function (Eq. 5.11) [PAGE 6]:
\[
\%\text{Bankroll} = \text{Shift} \times 0.0061 \times e^{0.484 \times \text{EDGE}}, \quad \text{Shift} = 7.9
\]
Units: fraction of bankroll (dimensionless). Subject to maximum investment per bet and maximum daily investment, numerically unspecified in text [PAGE 6].

11. Filter boundaries (Table 2) [PAGE 6]: e.g., Road EDGE Lower > 0%, EDGE Upper < 21%; Home EDGE Lower > 0%, EDGE Upper < 17%; PARD EDGE > 71 plate appearances; PAHM EDGE > 52 plate appearances; Dynamic Age DB ≈ 65 days [PAGE 6].

Breakdown regimes: PPA = 0 causes division by zero in Eqs. 2.41–2.44; Edge above upper bound triggers veto regardless of positive EVROI; δ² = 0 collapses Gamma; @Risk = 0 invalidates EVROI; Shift parameter has no closed-form bound outside the optimization routine.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage. The paper opens by locating baseball wagering analysis in the era of Alexander Cartwright’s 1845 Knickerbockers [PAGE 1], grounding the production function in the twin batter purposes of getting on base and driving runners in [PAGE 2]. The Pythagorean expectation traces directly to Bill James, with the author deliberately freezing the exponent at 2 despite published recalculations between 1.83 and above 2.0 [PAGE 2]. The methodological references at the close anchor the work in three applied texts: Winston’s Mathletics (2009), Peta’s Trading Bases (2013), and Ma’s The House Advantage (2010) [PAGE 9]. Empirical inputs are drawn from Retrosheet game logs (2011–2013) for park factors and pitcher-innings assumptions, and MLB.com / ESPN park-factor data for the 2011–2013 window [PAGE 2–3]. Distribution fitting and Monte Carlo graphics were produced in Palisade’s Decision Tools Suite [PAGE 3].

Multi-week traps. The model embeds several temporal tripwires. First, the park-factor calibration is locked to a 2011–2013 historical average [PAGE 3]; if the offensive environment shifts—as Figure 1 documents in the downward trend of average runs per game per team—the static park factor mis-scores current games [PAGE 2]. Second, the starter’s six-inning norm and the 91% late-inning run-rate adjustment are tabulated from 2011–2013 logs [PAGE 3], so bullpen-heavy eras or rule changes (e.g., extra-innings runner-on-second rules) break the innings-weighting. Third, the “Dynamic Age DB” filter sets a lookback window in days, derived during optimization [PAGE 6]; too short a window overfits recent noise, too long a window includes stale personnel. Fourth, the filter boundaries are recalculated daily via a genetic programming algorithm maximizing profit over the most recent 30 days [PAGE 6], creating a 30-day lookback trap: in a regime shift, the optimizer re-tunes filters to the losing regime and accelerates capital erosion before the regime is recognized. Fifth, the claimed fourteenfold bankroll growth over approximately four months [PAGE 7] implies compounding assumptions that may not survive a multi-week drawdown; no stop-loss or circuit-breaker is specified in the text.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock. The model assumes that its estimated Edge represents a durable competitive advantage over the market quote [PAGE 5]. In recursive theory-of-mind terms, this presumes that other participants are not running identical or superior production functions. If multiple investors adopt the same filters—net rank, %Δ EVR, %Δ K/BB, %Δ OPS, NP(W), Edge bounds [PAGE 6]—the perceived inefficiency decays anti-inductively: capital flows into the same detected edges, moving the quote until NIP(W) converges toward P(W). The paper acknowledges this indirectly through the “too good to be true” upper Edge bound (road < 21%, home < 17%) [PAGE 6], which functions as a counter-trap: when Edge appears anomalously large, the model refrains from investing rather than assuming it has found a persistent anomaly. This is a meta-cognitive guard against adversarial quotes or data errors.

Crisis habit regression appears in the staking rule. Eq. 5.11 scales investment exponentially with Edge [PAGE 6]. After a drawdown, a human operator may habitually regress to smaller bets or abandon the system entirely, precisely when the model’s filters might be most robust if the drawdown was variance rather than regime failure. Conversely, after a winning streak, the operator may habitually increase the Shift parameter beyond the optimized 7.9, violating the maximum investment constraints and risking ruin. The clock is the Dynamic Age DB and the 30-day genetic programming recalibration [PAGE 6]. If the clock is misaligned with the true regime-change frequency—say, the league scoring environment changes over six weeks but the optimizer re-fits every 30 days—the model chases stale patterns. The paper’s reported 68% winning percentage and 23% investment rate [PAGE 7] are consistent with a system that is selective but not necessarily adaptive to adversarial adaptation; no mechanism is described for detecting that other investors have copied the filter set.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. The production function’s inputs are limited to historical aggregate batting and pitching event shares per PPA (%1, %2+3, %HR, %BB) [PAGE 2], park factors [PAGE 3], and team-level ranks [PAGE 6]. It contains no veto node for physical-layer disruptions: a late starting-pitcher scratch, a bullpen fatigued by extra-inning work the previous day, a batter’s oblique strain, or an umpire’s strike-zone tendency. Because Appendix D tabulates matchup statistics for the scheduled starting pitcher and batters [PAGE 3], a scratch invalidates the entire input vector for that team, yet the model has no automatic override to set investment to zero.

Biomechanical fatigue is partially acknowledged only through the assumption that pitchers average about six innings [PAGE 3]; pitch count, days of rest, and velocity decline are absent. Weather is absent entirely: park factor normalizes for the stadium’s long-run scoring tendency but does not adjust for game-day wind direction and speed, temperature, humidity, or precipitation, all of which materially alter run scoring and the Gamma distribution’s tail behavior [PAGE 3]. The paper’s park-factor adjustment uses a fixed 0.97 scalar derived from starter innings and late-inning run rates [PAGE 3], leaving no degree of freedom for atmospheric conditions.

Verdict: the veto layer is not algorithmically embedded; it is external and manual. A “veto proof” design would require hard constraints rejecting any bet when (a) the scheduled starter is scratched, (b) game-day wind exceeds a threshold at an open park, or (c) key position players are absent from the lineup. None of these appear in Eqs. 2.12–2.52, 4.11–4.12, or 5.11, nor in Table 2. Therefore, under physical-layer stress, the model will issue an investment signal based on stale matchup statistics, producing an unhedged false positive.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-from-verifiable-rewards (RLVR) veto scenarios with counterfactual predictions.

Scenario 1: Late starting-pitcher scratch. Inputs for Eqs. 2.41–2.44 are tabulated for the scheduled starter and projected batters [PAGE 3]. Veto rule: if the official lineup confirms a different starting pitcher within two hours of first pitch, set %Bankroll = 0 for that game. Counterfactual prediction: The Gamma MC simulation conditioned on the scratched pitcher will misstate P(W) by more than 8 percentage points relative to the simulation conditioned on the actual starter; realized EVROI on non-vetoed analogous games will turn negative, and the bankroll trajectory will exhibit a drawdown exceeding 10% over the subsequent week if the veto is not enforced.

Scenario 2: Extreme game-day wind at an open park. Park factor is a static 2011–2013 average [PAGE 3]; Eq. 2.52 applies no weather scalar. Veto rule: if sustained wind at the park exceeds 12 mph with an outward component, reject the bet regardless of Edge. Counterfactual prediction: On high-wind-out days, the Gamma-distributed run variance is understated because α and β are derived from calm-day mean and variance; the model will overstate EW% for the offense-favored team, producing a spurious positive Edge and over-allocation under Eq. 5.11. Expected prediction error in normalized runs/game will exceed 0.4 runs per 9 innings, and the upper Edge filter (< 21% road, < 17% home [PAGE 6]) will fail to catch it because the error enters through P(W), not through the quote.

Scenario 3: Regime-shift-induced genetic programming overfit. Filter boundaries are re-optimized every 30 days on rolling profit [PAGE 6]. Veto rule: if rolling 30-day profit is negative and more than 40% of filters hit their upper or lower bounds simultaneously, suspend new investments for 14 days and revert to the last validated parameter set. Counterfactual prediction: At the onset of a league-wide scoring decline (as suggested by Figure 1 [PAGE 2]), the optimizer will loosen filters to chase recent winners, causing the investment rate to rise above the historical 23% [PAGE 7] while Edge deteriorates. The claimed 68% win rate [PAGE 7] will revert toward 50–52% within two weeks, and the fourteenfold bankroll growth narrative will collapse into a drawdown greater than 20% if the veto is not triggered.
</RLVR_COUNTERFACTUAL_VETOES>