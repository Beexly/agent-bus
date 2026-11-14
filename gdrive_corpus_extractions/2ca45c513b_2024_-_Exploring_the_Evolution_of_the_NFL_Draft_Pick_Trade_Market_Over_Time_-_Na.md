---
source: "2024 - Exploring the Evolution of the NFL Draft Pick Trade Market Over Time - Nathanson.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Wharton Sports Analytics Journal/2024"
pages: 8
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4980
---

<NATIVE_REASONING>
The user wants a response based on the provided source text (Nathanson's paper on NFL draft pick trade market). They have strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive analysis following these sections, with at least 1000 words total, at least 400 words in THINK_TRACE. Must cite page markers [PAGE N] referencing the source text pages (the provided text has page markers embedded like "3", "4", etc. Actually the source text has page numbers inline: after "## INTRODUCTION" there is "3", after methods start there is "4", then "5", "6", "7", "8", "9", "10", "11", "12", "13". I should cite these exact page markers as [PAGE 3], etc.

Important: No betting lines. No toy equations. Use formal LaTeX equations. The source itself has equations that were not preserved (machine conversion). I need to reconstruct formal LaTeX based on the text description, but not invent fake ratios. I can state the Weibull model as described: value of nth pick in year y is something like V(n,y) = ... but the exact equation wasn't preserved. I should describe it formally based on the text: pick value decreases monotonically with draft position, modeled using Weibull distribution. Value of first overall pick in current year is 1. Parameter d is discount rate. Parameters lambda, beta, d estimated via least squares. I should not invent a specific formula if not in text, but I can write the general structure: V(n,y; λ,β,d) = ... hmm. The text says "The value of the nth pick in year y's draft is: where y0 is the current year and λ, β, and d are parameters to be estimated." The actual formula is missing due to conversion. I should not fabricate the exact Weibull formula. I can write it in a general form consistent with Weibull: V(n,y) = exp(-(n/λ)^β) * d^(y-y0) or something? But that might be inventing. Better to state: V(n,y) = f_Weibull(n; λ, β) · d^(y - y0), with V(1, y0) = 1, and note the exact closed form was not preserved in the machine-converted text, so I cite the textual definition on [PAGE 4]-[PAGE 5]. That's honest.

Also need to discuss rolling variables: trades per team, discount rate d, mean squared residuals (consensus), integral of best-fit curve from n=1 to n=336 (value decay). Eras: 1983-1994, 1995-2004, 2005-2014, 2015-2023. Table 1 values on [PAGE 10]-[PAGE 11].

Need to meet word count. Let's plan sections.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. Discuss how the dataset was compiled (856 trades), exclusions, Weibull model, rolling windows, parameter estimation, identifiability issues, discount rate context-dependency, moral hazard, small sample of future picks, singularity/breakdown regimes (e.g., when future pick position unknown beyond 2 years, when d approaches 1 or 0, when n approaches 336 max picks, when sample size small). Also gray zones: Massey-Thaler 2005 paper didn't immediately impact steepness; Jimmy Johnson chart adoption around 2000; 2011 CBA rookie wage scale; psychological biases; hot-seat GMs; fan pressure.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Define V(n,y), Weibull, discount factor, rolling window optimization, least squares objective, mean squared residuals, integral I = ∫_1^336 V(n) dn, trades per team T = N_trades / N_teams. Units: picks dimensionless, years dimensionless, value normalized to V(1,y0)=1 (dimensionless relative value), discount rate d dimensionless per year. Page citations: [PAGE 4], [PAGE 5], [PAGE 6], etc. Breakdown: assumptions, singularity regimes.

RETROCAUSAL_GENEALOGY: Historical lineage: Massey & Thaler 2005 "The Loser's Curse" [PAGE 3], Jimmy Johnson 1989 Cowboys [PAGE 3], Mike McCoy chart [PAGE 3], 1990s adoption, 2000 widespread adoption [PAGE 9], 2011 CBA rookie wage scale [PAGE 9], 2010 Sam Bradford contract [PAGE 9], 2023 record 41 trades [PAGE 8], 40-year period 1983-2023 [PAGE 2]. Multi-week traps: draft timing, future pick uncertainty, competitive window, GM job security, moral hazard.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Teams regress to Johnson chart under crisis (hot seat). Counter-trap: analytics arbitrage, consensus increasing liquidity. Clock: discount rate impatience, competitive window closing, rookie wage scale changed clock economics.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. This is odd for NFL draft paper, but I need to address it. Physical layer: player availability, injuries, combine, weather affecting scouting? Biomechanical: player projection, age, decline curves. Weather: draft timing (late April), outdoor combines? I need to veto certain causal claims: e.g., cannot attribute trade volume changes solely to weather or biomechanics; the paper's data are transactional, not physical. Veto proof: show that physical/biomechanical/weather factors are exogenous or controlled out; the model is market microstructure, not player performance. So any claim that weather caused trade patterns is vetoed. Also biomechanical limitations of rookies don't enter the Weibull value model directly except via surplus value (Massey-Thaler). Need to be careful.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I'll interpret as verifiable counterfactual scenarios. Need 3 scenarios with predictions. E.g., if a team ignores Johnson chart and uses Massey-Thaler, what happens? If discount rate drops further, future pick trades increase? If rookie wage scale removed, early pick value changes? Each scenario: setup, veto condition, prediction, verification method. No betting lines.

Need to ensure total words >= 1000. Let's write generously.

Need to avoid "odds", "spreads", "totals", "moneylines". Also avoid "probability" in betting sense. Probability units okay if information-theoretic, but better not mention betting.

Citations: Use [PAGE N] exactly. The source text has page numbers embedded. I'll reference them.

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

Word count check: Need >1000 total. THINK_TRACE alone >400. Others substantial.

Let's write carefully.

In THINK_TRACE: Start with data pipeline. 856 trades after exclusions. Exclusion criteria: picks 2024/2025, veteran players, forfeited supplemental, USFL 1984, coaching hires/free agency compensation, past considerations, reporting errors. Roughly 50% removed by veteran exclusion; latter cuts <=5%. Gray zone: Pro Sports Transactions Archive reliability; machine-converted PDF missing equations/tables; exact Weibull closed form unavailable, must infer from text. Multi-hop: dataset -> Weibull fit per rolling 10-year window -> four rolling variables -> era segmentation -> regression. Singularity/breakdown: n=336 max picks; y beyond y0+2 not tradable; d -> 1 means no time preference (breakdown of discounting); d -> 0 means future picks worthless (breakdown of intertemporal trade); small N for future-pick trades causing high variance in d; consensus proxy MSE could be driven by outliers not true consensus; integral lacks absolute units so only comparative shape matters. Gray-zone audit: the claim that Johnson chart reduced lopsided trades post-2000 is plausible but not causally identified; Massey-Thaler 2005 publication lacked immediate effect; 2011 CBA confounded with other changes; Belichick quote suggests chart stasis despite analytic proliferation.

Need to be formal but not fake equations. I'll write equations based on text description, marking exact preservation status.

LaTeX:

Let \(n \in \{1,\dots,336\}\) be draft position, \(y\) draft year, \(y_0\) current trade year. Relative market value:

\[
V(n,y;\lambda,\beta,d) = \phi_{\text{Weibull}}(n;\lambda,\beta)\, d^{\,y-y_0},
\quad V(1,y_0)=1.
\]

where \(\phi_{\text{Weibull}}\) is monotone decreasing in \(n\), \(\lambda,\beta>0\) shape/scale, \(d\in(0,1]\) annual discount factor. The exact closed form of \(\phi\) was not preserved in machine conversion [PAGE 4]-[PAGE 5], so the functional form is treated as textually specified only.

Trade equilibrium: For trade between A (trading up, receives \(s\) picks) and B (trading down, receives \(t\) picks):

\[
\sum_{i=1}^{s} V(n^A_i, y^A_i) = \sum_{j=1}^{t} V(n^B_j, y^B_j).
\]

Highest-ranked pick ordering: year first, then position [PAGE 5]. Least squares over rolling window \(W_{10}(y) = [y-9,y]\):

\[
(\hat\lambda,\hat\beta,\hat d) = \arg\min \sum_{\text{trades } \in W_{10}} \left( \text{LHS} - \text{RHS} \right)^2.
\]

Rolling variables:
1. Trades per team: \(\tau(y) = N_{\text{trades}}(W_{10}) / \bar N_{\text{teams}}(W_{10})\). Linear increase 4.21 (1983-1992) to 9.34 (2014-2023) [PAGE 8].
2. Discount rate: \(\hat d(y)\). Overall downward trend, high variance [PAGE 8]-[PAGE 9].
3. Consensus proxy: \(\text{MSE}(y) = \frac{1}{N}\sum \text{residual}^2\). 1983-1992 MSE=202.26 -> RMS deviation 14.22 picks; 2014-2023 RMS deviation 5.97 picks [PAGE 8].
4. Value-decay integral: \(\mathcal{I}(y) = \int_{1}^{336} \hat V(n,y_0;\hat\lambda,\hat\beta,\hat d=1) \, dn\). No absolute meaning; local max 1983-1992, min 1995-2004, peak 2005-2014, decline after [PAGE 9].

Eras: 1983-1994, 1995-2004, 2005-2014, 2015-2023 [PAGE 10]. Table 1 normalized values [PAGE 10]-[PAGE 11].

Singularity/breakdown regimes:
- \(d \to 1\): no intertemporal discount; model cannot separate current vs future value.
- \(d \to 0\): future picks have zero value; intertemporal trades vanish; estimation of \(d\) unstable.
- \(N_{\text{future}}\) small: high variance in \(\hat d\) [PAGE 9].
- \(n > 336\): outside domain; draft has max 336 picks in any year [PAGE 6].
- \(y - y_0 > 2\): trades not permitted by NFL rules (two-year lookahead) [PAGE 4].

Okay.

RETROCAUSAL_GENEALOGY: trace from Jimmy Johnson 1989 [PAGE 3], McCoy chart arbitrary 3000 for first pick [PAGE 3], Cowboys 42 players 1991-1993 [PAGE 3], spread to league [PAGE 3], Massey & Thaler 2005 [PAGE 3], Belichick quote [PAGE 3], adoption ~2000 [PAGE 9], 2011 CBA rookie wage scale [PAGE 9], Bradford $78M 2010 [PAGE 9], 2023 record 41 trades [PAGE 8], 40-year arc 1983-2023 [PAGE 2]. Multi-week traps: draft cycle annual but GMs on hot seat operate on shorter clock; future pick projection within 2-year window; competitive window of aging QB vs rebuild; moral hazard.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression: under pressure, GM reverts to Johnson chart (familiar, liquid) rather than bespoke analytics; counter-trap: other team may arbitrage using more accurate valuation; clock: discount rate impatience, rookie wage scale changed risk/reward of early picks, steepening after 2011 [PAGE 9]. Recursive reasoning: Team A thinks Team B uses Johnson chart, so A trades accordingly; B knows A knows, leading to consensus but also stale equilibrium; Massey-Thaler critique didn't break equilibrium because chart facilitates quick trading and least competent teams get top picks [PAGE 11].

CROSS_LAYER_VETO_ADJUDICATION: Physical layer: player injuries, combine measurements, pro days do not enter the transaction-value model; the paper models pick swaps, not player production. Biomechanical: rookie aging curves and snap counts are external to Weibull estimation; any claim that a specific player's biomechanics drove a trade is vetoed absent play-level data. Weather: draft held late April in NFL cities; weather could affect travel but not recorded in trade data; veto weather as a driver of trade volume. The only legitimate cross-layer link is contract economics (rookie wage scale) altering surplus value, which is a labor-market layer, not physical/biomechanical. Therefore the paper's conclusions about market maturation are robust to physical/biomechanical/weather veto because those factors are exogenous to the transaction price model.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.
1. Scenario: A team abandons Johnson chart for a Massey-Thaler-derived surplus-value model in 2025. Veto: If the counterparty still uses Johnson chart and the trade is intertemporal with \(d\) uncertain, the expected surplus is not verifiable ex ante. Prediction: Trade volume involving that team decreases by >15% over two years due to bargaining friction; verification via Pro Sports Transactions Archive trade counts.
2. Scenario: NFL eliminates the two-year advance-trade limit, allowing picks up to 4 years out. Veto: Weibull discount factor \(d^{y-y_0}\) would extrapolate beyond estimated domain; \(d\) estimated from <=2-year trades may not identify long-run discounting. Prediction: Estimated \(\hat d\) from rolling windows would become statistically unidentified (confidence interval includes 1); verification by re-estimating model on simulated longer-horizon trades.
3. Scenario: Rookie wage scale is repealed, restoring uncapped rookie contracts. Veto: The post-2011 steepening of value decay was attributed to reduced risk of high first-round contracts [PAGE 9]; without wage scale, early-pick surplus value falls. Prediction: Integral \(\mathcal{I}\) increases (flatter curve) and discount rate \(\hat d\) rises as teams impatiently avoid high-risk early picks; verification via Table 1-style normalized values shifting toward 1983-1992 shape.

Need to ensure no betting lines. None.

Word count: I'll write generously. Let's start composing final output. Must include exact XML section tags.

Check page citations: The source text shows page numbers: after Abstract page 2? Actually text shows "## 2 ABSTRACT" then content, then "3" before INTRODUCTION? Let's map:
- Page 2: Abstract (starts with ## 2 ABSTRACT)
- Page 3: INTRODUCTION (number 3 appears before INTRODUCTION)
- Page 4: METHODS (number 4 appears)
- Page 5: continues methods (number 5)
- Page 6: RESULTS (number 6)
- Page 7: continues results/plots description (number 7)
- Page 8: DISCUSSION (number 8)
- Page 9: continues discussion (number 9)
- Page 10: continues discussion/table (number 10)
- Page 11: table conclusion start (number 11)
- Page 12: conclusion references start (number 12)
- Page 13: references (number 13)

I will cite accordingly.

Make sure to use [PAGE 3] etc.

Need to avoid fake ratios. The Weibull formula I'm writing is a reasonable formalization but I must note exact closed form not preserved. That's okay; it's formal LaTeX based on textual description. I shouldn't invent "Force / Fatigue". I'm not.

Need to ensure >=1000 words. Let's aim for ~1600-2000 words.

Write now.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper constructs its empirical object from a raw transaction log and then subjects it to a sequence of modeling, windowing, and rolling-statistic operations. First, the data pipeline: all NFL draft-pick-only trades from 1983 to 2023 are pulled from the Pro Sports Transactions Archive [PAGE 4]. Trades involving picks in the 2024 and 2025 drafts are removed because draft order is unset and NFL rules permit trading only up to two years in advance [PAGE 4]. All trades involving veteran players or player rights are excluded, cutting roughly 50 percent of observations [PAGE 4]. Additional exclusions—forfeited supplemental picks, 1984 USFL draft picks, coaching-hire or free-agency compensation, "past considerations," and unreconcilable reporting errors—remove no more than 5 percent [PAGE 4]. The final dataset contains 856 trades [PAGE 4]. Gray zone: the archive's coding reliability is assumed but not independently audited here; machine-converted PDF text explicitly notes equations, tables, and figures were not preserved, so the exact Weibull closed form is unavailable from the supplied text [PAGE 4]-[PAGE 5].

Second, the value model. Under monotone decreasing value in draft position, pick value is modeled with a Weibull-type function. Let n be draft position (1 to 336, the maximum picks in any year) [PAGE 6], y the draft year, y0 the current trade year, and λ, β, d estimable parameters, where d is the annual discount rate [PAGE 4]-[PAGE 5]. The value of the first overall pick in the current year is normalized to 1 [PAGE 5]. Future-year picks are valued at their ultimate draft position, an assumption justified by the two-year projection window [PAGE 5]. For each trade, team A trading up receives s picks and team B trading down receives t picks; picks are ranked by year then position [PAGE 5]. Value equality implies the sum of values received by each side is equal [PAGE 5]. Least-squares regression over rolling ten-year windows yields best-fit λ, β, and d [PAGE 5]-[PAGE 6].

Third, the four rolling variables over 1992-2023 ten-year windows: trades per team τ(y) = N_trades / mean active teams; discount rate d̂(y); consensus proxy MSE(y) = mean squared residuals; and value-decay integral 𝒦(y) = ∫₁³³⁶ V̂(n) dn [PAGE 6]. The first three show linear trends; the integral is fit polynomially [PAGE 6]. Gray zone: MSE is interpreted as consensus, but it may also reflect outliers, sample composition, or model misspecification rather than genuine agreement [PAGE 8]. The integral has no absolute meaning, so only its comparative shape across eras is interpretable [PAGE 9].

Fourth, era segmentation. Based on inflection points of the integral, four eras are chosen: 1983-1994, 1995-2004, 2005-2014, 2015-2023 [PAGE 10]. Table 1 reports normalized pick values for each era [PAGE 10]-[PAGE 11].

Singularity and breakdown regimes. (1) d → 1 implies zero intertemporal discounting; current and future picks become perfect substitutes and d is not separately identified. (2) d → 0 implies future picks have zero value; intertemporal trades vanish and the discount parameter collapses. (3) The sample of trades involving future picks is small, creating high year-to-year variance in d̂ [PAGE 9]. (4) Trades beyond y − y0 = 2 are illegal under NFL rules, so the model's intertemporal domain is truncated [PAGE 4]. (5) n > 336 is outside the domain because no draft exceeds 336 picks [PAGE 6]. (6) Rolling-window optimization assumes parameter stationarity within each ten-year block; structural breaks at 2000 (Johnson chart adoption) and 2011 (rookie wage scale) violate this assumption if they occur mid-window [PAGE 9].

Gray-zone causal audit. The paper attributes part of the post-2000 flattening to widespread Johnson-chart reliance, but this is correlational: 2000 is identified as an inflection point, not a randomized intervention [PAGE 9]. The 2005 Massey-Thaler publication did not immediately change curve steepness [PAGE 10], suggesting scholarly critique is weak relative to institutional habit. The 2011 CBA rookie wage scale is confounded with other temporal trends, yet the paper links it to reduced early-pick risk and a steeper value dropoff [PAGE 9]. Finally, Belichick's observation that "everybody probably [still] uses about the same value chart" points to a Nash-like stasis: the chart persists because it facilitates liquid trade, not because it is optimal [PAGE 3]-[PAGE 11].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown.

Let draft position be n ∈ {1, …, 336}, where 336 is the maximum number of picks in any year [PAGE 6]. Let y be the draft year and y0 the year of the trade. The relative market value of the nth pick in year y is modeled as a monotone decreasing function of n with an intertemporal discount factor:

V(n, y; λ, β, d) = φ_Weibull(n; λ, β) · d^(y − y0),   V(1, y0) = 1,

where λ > 0 and β > 0 are Weibull scale/shape parameters, d ∈ (0, 1] is the annual discount factor (dimensionless, units of current-year value per future year), and φ_Weibull is the Weibull survival/value component described in the text [PAGE 4]-[PAGE 5]. The exact closed form of φ_Weibull was not preserved in the machine-converted source [PAGE 4]-[PAGE 5]; therefore it is treated here as textually specified rather than reconstructed.

For any trade, team A trading up receives s picks {(n_i^A, y_i^A)} and team B trading down receives t picks {(n_j^B, y_j^B)}. Picks are ordered first by year (current year first), then by draft position within year [PAGE 5]. The no-arbitrage / equal-value condition is:

∑_{i=1}^{s} V(n_i^A, y_i^A; λ, β, d) = ∑_{j=1}^{t} V(n_j^B, y_j^B; λ, β, d).      [PAGE 5]

Parameters are estimated by least squares over each rolling ten-year window W10(y) = [y − 9, y]:

(λ̂, β̂, d̂) = arg min_{λ, β, d} ∑_{trades ∈ W10(y)} [ LHS(trade) − RHS(trade) ]².      [PAGE 5]-[PAGE 6]

Four rolling operators:

1. Trade intensity: τ(y) = N_trades(W10(y)) / N̄_teams(W10(y)), measured in trades per team per ten-year window. It rises linearly from 4.21 (1983-1992) to 9.34 (2014-2023) [PAGE 8].

2. Discount rate: d̂(y), dimensionless per year. Overall negative trend with high variance [PAGE 8]-[PAGE 9]. Historical crude rule: "lose a year, gain a round" [PAGE 9].

3. Consensus proxy: MSE(y) = (1/N) ∑ residual², measured in squared normalized value units. RMS pick deviation falls from √202.26 = 14.22 picks (1983-1992) to 5.97 picks (2014-2023) [PAGE 8].

4. Value-decay integral: 𝒦(y) = ∫_{1}^{336} V̂(n, y0; λ̂, β̂, d̂=1) dn, measured in normalized-value · pick units. The absolute value has no meaning; only the shape across eras is interpreted [PAGE 9]. It exhibits a local maximum near 1983-1992, a minimum near 1995-2004, a maximum near 2005-2014, then decline [PAGE 9].

Eras and normalized table values (Table 1): 1983-1994, 1995-2004, 2005-2014, 2015-2023 [PAGE 10]. All eras normalize the 1st overall pick to 1.000; the 10th, 33rd, and 100th picks vary across eras, showing steeper dropoff in the 1990s and 2010s than in the 2000s [PAGE 10]-[PAGE 11].

Breakdown / singularity conditions:
- d → 1: no time preference; intertemporal discounting is not identified.
- d → 0: future picks worthless; intertemporal trade volume collapses and d̂ becomes unstable.
- N_future-pick-trades small: high variance in d̂; parameter estimate dominated by few observations [PAGE 9].
- y − y0 > 2: outside the legal trading window; model domain truncated [PAGE 4].
- n > 336: outside draft domain; extrapolation invalid [PAGE 6].
- Rolling-window stationarity violated by structural breaks at roughly 2000 and 2011 [PAGE 9].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week decision traps.

The genealogy begins with Jimmy Johnson's 1989 arrival in Dallas and Mike McCoy's construction of the first NFL draft pick trade value chart [PAGE 3]. McCoy assigned the first overall pick an arbitrary value of 3,000 and derived the rest from past trade behavior and gut instinct, not advanced analytics [PAGE 3]. The Cowboys then executed a high-volume draft-capital accumulation strategy, drafting 42 players from 1991 to 1993 and winning three Super Bowls [PAGE 3]. The chart diffused league-wide, replacing arbitrary pick trading with a quasi-scientific valuation ritual [PAGE 3]-[PAGE 4].

The critical counter-movement is Massey and Thaler's 2005 "The Loser's Curse" [PAGE 3]-[PAGE 4], which argued that teams overvalue early picks and that the discount rate for future picks was exorbitantly high [PAGE 3]. Despite this critique, Belichick reports that front offices still broadly use the same chart [PAGE 3]. Nathanson's data cover 1983-2023, spanning the Massey-Thaler sample and the post-publication era [PAGE 4].

Key institutional inflection points: around 2000, broad adoption of the Johnson chart may have reduced massive lopsided upward trades, flattening the value curve [PAGE 9]. The 2011 CBA introduced the rookie wage scale, ending exorbitant rookie contracts such as Sam Bradford's 2010 six-year, $78 million deal [PAGE 9]. This lowered the financial risk of early picks and increased surplus value from high-performing first-rounders, which Nathanson links to the post-2011 steepening of value decay [PAGE 9]. The 2023 draft set an all-time record of 41 draft-day trades [PAGE 8].

Multi-week traps embedded in the genealogy. NFL front offices operate on nested clocks: the annual draft cycle, the two-year maximum trade-ahead rule [PAGE 4], the typical GM tenure under performance pressure, and the competitive window of an aging quarterback versus a rebuild [PAGE 9]. A GM facing imminent firing may inflate d, overvaluing current picks and undervaluing future picks—a moral hazard problem [PAGE 9]. Future-pick trades are inherently uncertain because draft order is projected, not known; within two years teams can roughly project order based on performance and outlook, but error is nontrivial [PAGE 5]. The rookie wage scale altered the intertemporal calculus: pre-2011, early picks carried massive contract risk; post-2011, that risk is capped, changing the surplus-value equation that Massey and Thaler originally studied [PAGE 9]-[PAGE 11]. Thus the market's evolution is not a smooth rational update but a path-dependent accretion of chart habit, CBA labor economics, and individual job-security incentives.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock structure.

Recursive theory of mind in the draft market proceeds as follows. Team A believes Team B values picks according to the Johnson chart. Team A therefore offers trades that appear fair under that chart. Team B, anticipating A's chart-based behavior, accepts or counter-offers within the same frame. The equilibrium is self-reinforcing: because nearly everyone uses approximately the same chart [PAGE 3], trades execute quickly, liquidity rises, and no single team has a strong incentive to unilaterally deviate to a bespoke valuation model [PAGE 11]. Deviating creates bargaining friction: if A uses a sharper model but B anchors on Johnson, A's offers may be rejected as "too lopsided" even when they are value-improving.

Crisis habit regression. Under pressure—hot-seat GM, closing quarterback window, fan impatience—front offices regress to the familiar Johnson chart rather than executing nuanced analytics [PAGE 11]. The chart is a cognitive default: it is legible, fast, and socially validated by league-wide use [PAGE 3]. This regression is strongest when d is inflated by impatience: the team wants a proven player now, not a projected pick later [PAGE 9].

Counter-trap. The arbitrage opportunity lies in identifying when a counterparty is regressing to the chart under crisis. If Team B is desperate to move up this year because its coach is on the hot seat, Team A can demand a steeper discount rate d or additional future picks, exploiting B's inflated impatience [PAGE 9]. However, the counter-trap is limited by the two-year trading ceiling [PAGE 4] and by the small sample of future-pick trades, which makes precise d̂ estimation noisy [PAGE 9]. Moreover, if all teams become more consensus-driven (MSE falling), arbitrage margins compress [PAGE 8].

Clock structure. Three clocks interact. (1) The draft clock: picks lose value as n increases; the integral 𝒦 measures aggregate steepness [PAGE 6]-[PAGE 9]. (2) The contract clock: the rookie wage scale changed the payoff of early picks after 2011, steepening value decay [PAGE 9]. (3) The employment clock: GMs under imminent replacement pressure operate with high d, favoring immediate picks [PAGE 9]. The market has matured in volume and consensus (τ up, MSE down), but the value-decay rate fluctuates without a clear downward trend, indicating that psychological and institutional clocks dominate pure analytical optimization [PAGE 2]-[PAGE 11].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto adjudication.

Physical layer veto. The source paper models draft-pick transaction values, not player performance, injury outcomes, or combine measurements [PAGE 2]-[PAGE 13]. Any claim that a specific player's physical attributes—height, weight, 40-yard dash, injury history—caused a change in trade value is vetoed. The dataset excludes trades involving veteran players and player rights [PAGE 4], so physical player attributes are absent from the identifying variation. The Weibull model operates purely on pick position n and year y [PAGE 5]; physical traits enter only indirectly through team drafting preferences, which are not observed.

Biomechanical layer veto. Claims that rookie age curves, snap-count degradation, or positional biomechanical decline drive the discount rate d are vetoed absent play-level or medical data. The paper's discount rate is a market parameter estimated from trade equivalence, not a biological decay parameter [PAGE 5]-[PAGE 9]. While Massey and Thaler's original surplus-value logic connects rookie contracts to production [PAGE 11], Nathanson's rolling estimates of d reflect front-office impatience and context, not biomechanical projections [PAGE 9].

Weather layer veto. Weather at the draft site, travel conditions, or seasonal climate are not variables in the dataset [PAGE 4]. Any assertion that weather shocks explain changes in trades per team τ(y) or the discount rate d̂ is vetoed. The observed linear increase in trade activity [PAGE 8] is attributed to analytical confidence and valuation consensus, not meteorological factors [PAGE 8].

Permitted cross-layer link. The sole legitimate cross-layer influence is labor-economics: the 2011 CBA rookie wage scale altered the financial risk of high first-round picks [PAGE 9], which changed surplus value and therefore market value V(n,y) [PAGE 9]-[PAGE 11]. This is a contractual/institutional layer, not physical, biomechanical, or weather. Because the vetoed layers are exogenous to the transaction price model, the paper's core conclusions—rising trade volume, falling MSE, declining but volatile d, fluctuating value-decay integral—are robust to physical/biomechanical/weather challenges. No conclusion in the source depends on player physiology or climate.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with predictions.

Scenario 1: Selective chart abandonment. A single NFL team announces in 2025 that it will no longer use the Johnson chart and will instead trade solely on a Massey-Thaler surplus-value model, while all other teams continue using the shared chart.

Veto condition: If the counterparty in any proposed trade still anchors on the Johnson chart and the trade involves future picks with uncertain position, the expected surplus from the deviating team's model is not verifiable ex ante. Bargaining breakdown occurs because the two teams lack a common numéraire.

Prediction: The deviating team's draft-pick trade volume falls by at least 15 percent over the subsequent two drafts relative to its baseline, measured by Pro Sports Transactions Archive counts, while league-wide trade volume τ(y) continues its existing linear trend [PAGE 8].

Verification: Compare the team's annual draft-pick-only trade count for 2025-2026 against its 2020-2024 average; league-wide τ serves as a control trend.

Scenario 2: Extension of the trading horizon. The NFL rules committee permits trades of picks up to four years in advance, doubling the current two-year lookahead [PAGE 4].

Veto condition: The Weibull discount factor d̂ is estimated from trades with y − y0 ≤ 2 [PAGE 4]. Extrapolating d̂ to y − y0 = 4 assumes intertemporal discounting is stationary beyond the observed domain, which is a singularity risk: if d̂ is imprecisely estimated due to few future-pick trades [PAGE 9], long-horizon values are unidentified.

Prediction: After the rule change, re-estimation of rolling-window d̂ produces confidence intervals that include 1 (no discount) for at least two consecutive windows, indicating that long-run discounting cannot be statistically separated from current-value parity. The integral 𝒦 for current-year picks remains stable while intertemporal trades become sparse.

Verification: Refit the model on any available four-year-out trades; test whether d̂ confidence intervals widen to include unity.

Scenario 3: Repeal of the rookie wage scale. The NFL restores uncapped rookie contracts, reinstating the pre-2011 financial risk of high first-round picks (e.g., Bradford-type deals) [PAGE 9].

Veto condition: Nathanson attributes the post-2011 steepening of value decay to reduced early-pick contract risk [PAGE 9]. If the wage scale is repealed, the structural break at 2011 is reversed, invalidating the assumption that the 2005-2014 and 2015-2023 eras share the same value-decay technology [PAGE 10].

Prediction: The normalized value curve flattens back toward the 1983-1994 shape: the 10th pick value rises relative to the 1st overall (closer to 0.708 versus post-2011 levels near 0.644-0.715) [PAGE 10], the integral 𝒦 increases (less steep drop), and the discount rate d̂ rises as impatient teams avoid high-risk early picks.

Verification: Recompute Table 1-style normalized values under the new contract regime; compare the 10th-overall normalized value against the 1983-1994 benchmark of 0.708 [PAGE 10].
</RLVR_COUNTERFACTUAL_VETOES>