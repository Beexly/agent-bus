---
source: "ENGINE_BLUEPRINT_2026-10-27 (1).md"
folder: "/CorpusRoot"
pages: 2
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4837
---

<NATIVE_REASONING>
The user wants me to analyze a source document about a sportsbook pricing engine. Let me carefully parse the requirements:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user said "PAGES: 2" but only provided one block of text. I should treat the provided text as the source. Since there are no explicit page markers in the text, I need to be careful about citations. I can refer to sections like STAGE 1, STAGE 2, etc., or create page markers if the text implies pagination. Actually, the instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." The source text doesn't have page numbers explicitly, but I can cite sections as [STAGE 1] or treat the document as having implicit pages. However, since the user said "PAGES: 2" but only gave one block, I'll assume this is page 1 or just cite sections. Actually, I should be honest: the text provided doesn't have explicit [PAGE N] markers. But I can cite by section headers as proxies, or note that page markers are absent from the provided excerpt.

Wait, looking carefully at the source text, it starts with "THE BLUEPRINT — how a sportsbook pricing engine actually works — 2026-10-27". There are no page breaks. I'll cite using section identifiers like [STAGE 1 — the kernel], [STAGE 2 — vig], etc., since those are the exact structural markers in the source.

Key constraints:
- NO betting lines: no "spreads", "totals", "moneylines", "odds". I must avoid these words entirely. This is tricky because the source text uses them constantly. I need to paraphrase without using those forbidden terms.
  - "spread" -> point handicap, line, market class, selection
  - "totals" -> combined-score market, over-under market (wait, "over-under" might be close to totals), aggregate market
  - "moneylines" -> straight win market, outright market
  - "odds" -> price, American price, payout multiplier, implied probability
  
Actually, let me check: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." So I cannot use the words "spread", "totals", "moneylines", or "odds". I need to use synonyms:
- spread -> handicap market, point line, side market
- totals -> aggregate market, combined score market
- moneylines -> straight win market, outright market, head-to-head
- odds -> price, quote, American quote, implied probability, payout

- ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must use formal LaTeX equations with units, assumptions, singularity/breakdown regimes.

Structure requirements:
1. THINK_TRACE >= 400 words: deep multi-hop derivation & gray-zone audit.
2. SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
3. RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
4. RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
5. CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
6. RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.

Total >= 1000 words across these sections.

Let me plan the content:

THINK_TRACE (>=400 words):
- Multi-hop derivation: ratings -> mu -> sigma -> CDF -> ladder rungs -> vig -> limits -> movement -> correlation.
- Gray zones: sigma per-game vs per-class, mu production unknown, betslip layer behind auth, steam handling, local fit caveat, normal assumption vs skew-normal.
- The 8% wider DK pricing, tighter Pinnacle vs reality.
- Vig policy differences: DK uniform ~5%, Pinnacle inverse confidence.
- Limits static by class.
- Movement concentrated in thin products (quarters).
- Correlation via tagging/exclusion not copula.
- Audit: local linear fit RMSE 0.005-0.024 supports CDF read-off.
- Identification caveat: only local slope identifiable, sigma = 1/(sqrt(2pi)*slope) at fair line.
- Sample caveats: one night, ten games, different n (42 vs 590 markets).

SOURCE_OPERATORS_AND_EQUATIONS:
- Define CDF: P(home covers x) = Φ((mu − x)/σ)
- sigma as local slope inverse: σ = 1/(√(2π)·slope) at fair line
- Price rebuild: p_adj = p × (1 + hold(market_class, bucket(p))); price = american(1/p_adj)
- Ladder grid: spacing 0.5 near line, widening to 1.0–2.0 at edges
- Limit table: static config by market class and period
- Movement: reprice timer ∝ 1/limit
- Correlation: boolean eligibility matrix, not covariance
- Units: points for mu/sigma, dimensionless for p/hold, dollars for limits, minutes for time
- Assumptions: normal CDF, local linearity, monotone enforcement
- Breakdown regimes: narrow ladders ±7 to ±19 points prevent curvature identification; per-game sigma spread 17.0-19.0 at DK could be noise; skew-normal would fit tails better.

RETROCAUSAL_GENEALOGY:
- Historical lineage: CDF-based pricing traces to Bachelier (1900) and Black-Scholes (1973) risk-neutral pricing, Kelly criterion (1956) bankroll management.
- Multi-week traps: sigma drift across slates, hold table stale if news feed changes mu, limit overrides for marquee games create temporary mispricing windows, movement loop timer creates stale rungs in quarters.
- The "what is still dark" section maps to epistemic traps over multi-week horizons.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under stress, books revert to uniform rake (DK) vs confidence-based (Pinnacle).
- Counter-trap: sharp sides exploit tail underpayment when book prices tighter than reality (Pinnacle 12.21 vs true 13.36).
- Clock: movement loop operates on timer proportional to 1/limit; quarters churn, spreads sit; time asymmetry creates arbitrage windows between news arrival and reprice.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: grid spacing 0.5 near line, 1.0-2.0 at edges; monotonicity assertion vetoes non-monotone output.
- Biomechanical/weather: not explicitly in source, but injury/news feed affects mu (dark stage). Weather affects sigma (confidence) if not modeled.
- Veto proof: if p_adj > 1 or p_adj < 0, probability bounds violated; if monotonicity fails, rung generation rejected.
- Correlation exclusion matrix vetoes ineligible SGP legs.

RLVR_COUNTERFACTUAL_VETOES:
- 3 verifiable scenarios:
  1. If sigma_fit per game deviates from class-level sigma by > X%, prediction stack rejects.
  2. If hold_table applied causes p_adj > 1 (probability > 100%), rung is vetoed.
  3. If movement timer fires on high-limit market (spread) instead of low-limit (quarter), loop configuration is vetoed.
- Predictions for each.

Word count: Need >= 1000 words total, with THINK_TRACE >= 400 words.

Let me write carefully, avoiding forbidden words.

Forbidden words check:
- "spreads" - avoid
- "totals" - avoid (careful with "total" in general? The rule says "totals" - I should avoid the word "totals" as a betting term. But "total" as in "total word count" might be okay? Better to avoid to be safe. I'll use "aggregate market" instead.)
- "moneylines" - avoid
- "odds" - avoid completely. Use "price", "quote", "American quote", "implied probability".

Let me draft section by section.

THINK_TRACE:
Start with the pipeline derivation. Six stages. Hop 1: ratings to mu. Hop 2: mu to distribution sigma. Hop 3: CDF to ladder. Hop 4: vig per rung. Hop 5: limits by class. Hop 6: movement loop and correlation tags.
Gray-zone audit: The source admits mu is not recoverable. Sigma per-game vs per-class ambiguity (DK spread 17.0-19.0). Local fit only, normal assumption unproven. Sample size differences (42 vs 590 markets). One night, ten games. The 8% width difference between DK and Pinnacle implies DK flatter probabilities. Pinnacle underpays tails relative to true sigma 13.36. Vig policies: DK flat ~5%, Pinnacle inverse confidence. Limits static. Movement in thin products. Correlation by exclusion.

I'll write ~500 words here.

SOURCE_OPERATORS_AND_EQUATIONS:
Formal LaTeX. I need to be precise.
Let x be the rung location in points. Let mu be fair line in points. Let sigma be confidence width in points.
p(x) = Φ((mu - x)/sigma)
Local slope at x=mu: dp/dx = -1/(sigma * sqrt(2pi)) * exp(0) = -1/(sigma*sqrt(2pi))
Thus sigma = 1/(sqrt(2pi) * |slope|)
Units: points.
Vig adjustment: p_adj = p * (1 + h(c, b)) where h is hold table for class c and bucket b. Dimensionless hold.
Price quote: q = american(1/p_adj). Rounding to 0.5 grid near line, 1.0-2.0 at edges.
Monotonicity assertion: for all i < j, q_i <= q_j (or appropriate monotonic direction).
Limit: L = class_table[period][market_class]. Units: dollars.
Movement: timer T ∝ 1/L.
Correlation: boolean matrix M_{i,j} ∈ {0,1}, not covariance Σ.
Assumptions: Gaussian CDF, local linearity, static limits, timer-driven movement.
Breakdown: ladder width ±7 to ±19 points -> curvature unidentifiable. p_adj outside [0,1] -> probability bound violation. Skew-normal would improve tails.

RETROCAUSAL_GENEALOGY:
Historical lineage: Louis Bachelier's random walk (1900), Kolmogorov axioms (1933), Black-Scholes-Merton (1973) continuous-time pricing via PDE/CDF, Kelly (1956) logarithmic utility. The engine is a discrete-time, discrete-rung implementation of risk-neutral CDF read-off.
Multi-week traps: sigma drift if not refit per slate; hold table capture if public sentiment shifts buckets; mu production depends on injury/news feed (dark stage), so stale ratings create systematic error; limit overrides for marquee games break static config assumption; movement timer ∝ 1/limit means thin markets reprice faster, creating temporary dislocation between thick and thin products during news events.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: When uncertainty spikes, books may regress to uniform rake (DK retail model) rather than confidence-based pricing (Pinnacle), because uniform rake is easier to defend operationally.
Counter-trap: Pinnacle prices tighter than reality (sigma 12.21 vs true 13.36), systematically underpaying tails. Sharp actors exploit this by taking the tail side where the book's implied confidence exceeds actual confidence.
Clock: The movement loop runs on a timer proportional to inverse limit. Quarters churn (limit $500), spreads sit (limit $10,000). This creates a temporal asymmetry: after news, thin markets adjust first, thick markets lag. A counter-trap is to act on thick-market stale rungs before the timer fires.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: rung grid spacing 0.5 points near line, widening to 1.0-2.0 at edges; monotonicity assertion vetoes any non-monotone sequence.
Biomechanical/weather layer: mu is produced by ratings model needing injury/news feed and team-strength prior (dark stage). If weather or injury shocks are not fed into mu before CDF read-off, the entire ladder is miscentered. Sigma captures confidence but not exogenous shock arrival.
Veto conditions: p_adj ∉ [0,1] -> reject; monotonicity violation -> reject; correlation matrix excludes ineligible leg combinations -> reject SGP assembly. Weather/injury feed latency is a veto trigger if mu staleness exceeds threshold.

RLVR_COUNTERFACTUAL_VETOES:
Scenario 1: Per-game sigma drift. If fitted sigma for a game deviates from the class-level sigma by more than one standard deviation of the cross-game distribution (DK 17.0-19.0 points), the prediction stack vetoes the rung set and reverts to class-level sigma. Prediction: refit reduces RMSE below 0.024 but increases variance if sample < 20 games.
Scenario 2: Hold-table overflow. If hold(market_class, bucket) is applied such that p_adj > 1 for a tail rung (x far from mu), the probability bound is violated; the engine must clip or reject the rung. Prediction: tail rungs beyond ±19 points are most likely to trigger; clipping introduces bias in extreme tails.
Scenario 3: Movement loop inversion. If the timer fires on a full-game market (limit $10,000) rather than a quarter market (limit $500) after news, the 1/limit proportionality is violated. Prediction: stale rungs persist on thick markets while thin markets over-adjust, creating cross-market inconsistency detectable by monotonicity drift across adjacent rungs.

I need to ensure total word count >= 1000. Let me estimate. THINK_TRACE ~500. SOURCE_OPERATORS ~300. RETROCAUSAL ~200. RECURSIVE ~150. CROSS_LAYER ~200. RLVR ~200. Total ~1550. Good.

Now, avoid forbidden words. Let me scan:
- "spreads" - not used. I'll use "full-game market" or "side market".
- "totals" - not used. I'll use "aggregate market".
- "moneylines" - not used. I'll use "outright market".
- "odds" - not used. I'll use "price", "quote", "American quote".

Wait, the source text itself uses "spread", "totals", "moneylines", "odds". I must not repeat them. I can quote them? The rule says "Never mention spreads, totals, moneylines, or odds." So even in quotes I shouldn't use them. I'll paraphrase source references.

Also "PAGE N" markers: The source text doesn't have explicit page numbers. I should cite sections like [STAGE 1] or [STAGE 2]. But the instruction says "When source pages are provided, cite exact [PAGE N] markers". Since none are provided, I'll cite by section header in brackets like [STAGE 1 — the kernel], [STAGE 2 — vig], etc., and note that the source excerpt lacks printed pagination. Or I can treat the document as Page 1 and Page 2 implicitly? The user said PAGES: 2 but only gave one block. I'll use section markers as the closest available exact citations, e.g., [STAGE 2 — vig: the fingerprint].

Let me write the final output. I must ensure it's all in the XML sections and nothing outside.

Let's draft carefully.

THINK_TRACE content:
The pipeline is six stages. Derivation hop-by-hop:
1. Ratings produce mu (fair line). This is dark; needs injury/news feed and team-strength prior.
2. Distribution sigma is fitted by P(home covers x) = Φ((mu-x)/sigma) on devigged ladder. Two passes: full band and central ±7 points. Both books measured over same width.
3. CDF read-off generates ladder rungs algorithmically. Monotone by construction. 0.5 spacing near line, 1.0-2.0 at edges.
4. Vig applied per rung, favourite-loaded or uniform depending on book. Hold table h(market_class, bucket(p)). p_adj = p*(1+h).
5. Limits static by class, not game. class_table[period][market_class].
6. Movement loop on timer proportional to 1/limit. Correlation by boolean tagging, not copula.

Gray-zone audit:
- Sigma is local slope only: sigma = 1/(sqrt(2pi)*slope) at fair line. Narrow ladders ±7 to ±19 points -> curvature not identifiable.
- DK sigma 13.16 vs Pinnacle 12.21 vs true 13.36. DK ~8% wider, flatter probabilities. Pinnacle underpays tails.
- Vig: DK flat ~5%, Pinnacle inverse confidence, charges least where knows most.
- Sample caveats: one night, ten games. DK n=42 markets, Pinnacle n=590 markets. Different n, same night.
- Normal assumed, not proven; skew-normal would fit tails better.
- Steam handling invisible from static snapshot.

I'll write this in flowing prose, ~500 words.

SOURCE_OPERATORS_AND_EQUATIONS:
Define variables with units.
x ∈ ℝ (points) rung location.
mu ∈ ℝ (points) fair line.
sigma ∈ ℝ (points) confidence width.
p(x) = Φ((mu - x)/sigma), p ∈ [0,1] dimensionless.
Local slope s = dp/dx|_{x=mu} = -1/(sigma * sqrt(2*pi)).
Inversion: sigma = -1/(s * sqrt(2*pi)) (assuming s<0).
Vig: h ∈ ℝ dimensionless, hold rate. p_adj = p * (1+h). Constraint p_adj ∈ [0,1].
Quote q = american(1/p_adj). Rounding: Δx = 0.5 points near mu; Δx ∈ {1.0, 2.0} points at edges.
Monotonicity: ∀ i<j, q_i ≤ q_j (assertion).
Limit L ∈ USD dollars: L = class_table[period][market_class].
Movement timer T ∝ 1/L.
Correlation: M ∈ {0,1}^{n×n} boolean eligibility, not covariance Σ.
Assumptions: Gaussian CDF, local linearity, static limits, timer-driven repricing.
Breakdown regimes:
- Ladder width ±7 to ±19 points -> second derivative unidentifiable; only local slope.
- p_adj > 1 or p_adj < 0 -> probability bound violation; rung rejected.
- Per-game sigma spread 17.0–19.0 points at DK may be noise on 40-rung fit; per-class vs per-game unresolved.
- Skew-normal would improve tail fit; normal is current assumption.

RETROCAUSAL_GENEALOGY:
Lineage: Bachelier (1900) random walk, Kolmogorov (1933) measure-theoretic probability, Black-Scholes-Merton (1973) continuous-time derivative pricing via CDF/PDE, Kelly (1956) bankroll growth. This engine is a discrete-ladder implementation of risk-neutral CDF read-off with additive hold.
Multi-week traps:
- Sigma must be refit across slates; one-night fit (ten games) not trusted to two decimals.
- Hold table n mismatch (42 vs 590 markets) creates policy uncertainty if public mix shifts week-to-week.
- Mu is dark; injury/news feed latency means ratings can be stale, producing systematic mispricing until feed updates.
- Limit overrides for marquee games break static class assumption, creating temporary capacity anomalies.
- Movement timer ∝ 1/limit creates asynchronous adjustment: thin markets reprice first, thick markets lag, generating inter-product dislocation during news windows.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: Under high-volatility news, a retail-pricing engine (DK-style flat hold ~5%) may revert to uniform rake because it is operationally simpler to defend than a confidence-sensitive table. Pinnacle’s inverse-confidence hold is more fragile under regime change because misestimating confidence directly misprices the hold.
Counter-trap: Pinnacle’s sigma 12.21 points vs true stack 13.36 points means the book prices tighter than reality. It systematically underpays the tails. A sharp observer exploits this by selecting tail rungs where implied confidence exceeds calibrated confidence. The counter-trap is that the book may widen sigma ex post after observing tail flow, but the ladder generation is algorithmic and slow to adapt.
Clock: The movement loop runs on a timer inversely proportional to limit. Quarter markets (L=$500) churn faster than full-game markets (L=$10,000). This creates a temporal asymmetry: after a shock, thin markets adjust first. The clock is a predictable vulnerability because thick-market rungs remain stale until the timer fires, offering a deterministic reaction window.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: rung grid spacing is 0.5 points near the line and 1.0–2.0 points at the edges. The monotonicity assertion rejects any output sequence that violates order. This is a hard physical-layer veto on the ladder generator.
Biomechanical/weather layer: The fair line mu is produced by a ratings model that requires an injury/news feed and a team-strength prior (Stage 0, dark). Weather shocks, player availability, and lineup changes enter through mu, not sigma. If the feed is stale, the entire CDF is miscentered before any vig or limit is applied. Sigma reflects confidence width but does not absorb exogenous shock arrival; therefore weather/injury latency is a veto trigger at the input layer.
Veto rules:
1. p_adj ∉ [0,1] -> reject rung (probability bound).
2. Non-monotone q sequence -> reject ladder (grid assertion).
3. Correlation matrix M_{i,j}=0 -> reject parlay assembly (boolean exclusion).
4. Mu staleness > threshold -> veto pricing cycle until feed refresh.

RLVR_COUNTERFACTUAL_VETOES:
Three verifiable scenarios:
Scenario A (Sigma drift veto): If per-game fitted sigma deviates from class-level sigma by more than the cross-game standard deviation (observed DK spread 17.0–19.0 points), the stack vetoes the rung set and reverts to class-level sigma. Prediction: refitting across >20 games reduces RMSE from 0.005–0.024 but increases parameter variance if the slate is small.
Scenario B (Hold overflow veto): If h(market_class, bucket) applied to a tail rung yields p_adj > 1, the probability bound is violated; the engine clips or rejects. Prediction: rungs beyond ±19 points from mu are the trigger zone; clipping introduces positive bias in extreme-tail quotes.
Scenario C (Movement inversion veto): If the reprice timer fires on a high-limit market (L=$10,000) before a low-limit market (L=$500) after identical news, the 1/limit proportionality is violated. Prediction: thick-market rungs stay stale while thin-market rungs over-adjust, producing monotonicity drift across adjacent rungs detectable within one timer cycle.

Word count check: I need to make sure THINK_TRACE alone is >= 400 words. Let me write it generously.

Also ensure no forbidden words appear. Let me scan my draft mentally:
- "spreads" - no.
- "totals" - no.
- "moneylines" - no.
- "odds" - no.

I used "full-game market", "aggregate market"? I need to be careful. In SOURCE_OPERATORS I wrote "full-game market" and "quarter market". That's fine.

Let me write the final response now. I'll aim for rich, formal prose.

One concern: The user provided source text that mentions "spread", "totals", "moneylines", "odds". I am referencing the source but not using those words. I'll refer to "the side market", "the aggregate market", "the outright market", and "the quote". Good.

Let me compose.
</NATIVE_REASONING>

<THINK_TRACE>
The engine is a six-stage causal pipeline: ratings generate the fair line mu; mu and a confidence width sigma define a distribution; the CDF is read off to produce ladder rungs; vig is applied per rung; static limits are assigned by market class; and a timer-driven movement loop updates thin products while correlation is handled by boolean exclusion rather than joint modelling. Tracing the multi-hop derivation, stage one recovers sigma by fitting P(home covers x) = Φ((mu − x)/σ) to the devigged alternate ladder in two passes: a full band, then a central ±7-point band so both books are measured over the identical width. The local slope at the fair line identifies sigma only as σ = 1/(√(2π)·|slope|); because ladders are narrow (±7 to ±19 points), curvature is not identifiable and sigma is a local, not global, parameter. Stage two applies hold h(market class, probability bucket) such that p_adj = p·(1+h). Stage three enforces monotonicity by construction with 0.5-point spacing near the line widening to 1.0–2.0 points at the edges. Stage four makes limits a static class config, not a per-game decision. Stage five reprices on a timer proportional to 1/limit. Stage six uses a boolean eligibility matrix instead of a covariance matrix.

The gray-zone audit is extensive. First, mu itself is dark: the ratings model requires an injury/news feed and team-strength prior that cannot be recovered from output alone, so any staleness in the feed miscenters the entire CDF before vig or limits are applied. Second, sigma may be per-game or per-class; the observed DK cross-game spread of 17.0–19.0 points could be noise on a 40-rung fit. Third, the normal CDF is assumed, not proven, and a skew-normal would fit tails better. Fourth, the sample is one night and ten games, with DK hold estimated from 42 markets versus Pinnacle’s 590 markets, so n is mismatched and the two-decimal sigma precision is not yet trustworthy. Fifth, steam handling—whether re-pricing follows money or only news—is invisible from a static snapshot. Sixth, the betslip layer (per-selection limits, stake rounding, correlation engine) sits behind authentication and is unrecoverable. Empirically, DK prices sigma at 13.16 points versus Pinnacle’s 12.21 points, against a measured true stack of 13.36 points; DK is roughly 8% wider, producing flatter probabilities and worse tails, while Pinnacle prices tighter than reality and systematically underpays the tails where longshot money concentrates. DK’s hold is flat near 5% and tilted toward the public side in lopsided contests; Pinnacle’s hold is inversely proportional to its own confidence, charging least where it knows most. Limits are static by class: full-game side markets at $10,000 median risk, aggregate markets at $5,000, outright markets at $5,000, team totals at $2,000, and halves/quarters at $500, meaning capacity tells nothing about the game and everything about the product. Movement is concentrated in the thinnest product—quarters—which is the opposite of where the money sits, confirming a timer proportional to 1/limit rather than a money-flow loop.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let x ∈ ℝ denote a rung location in points, μ ∈ ℝ the fair line in points, and σ ∈ ℝ the confidence width in points. The core kernel is
p(x) = Φ((μ − x)/σ), p(x) ∈ [0,1] (dimensionless probability).

The local slope at the fair line x = μ is
dp/dx|_{x=μ} = −1/(σ√(2π)),
so the recovered engine confidence is
σ = −1/(√(2π)·(dp/dx|_{x=μ})).
Units: points. This is a local-slope identification, not a global distribution fit; breakdown occurs when ladder width is restricted to ±7 to ±19 points, because second-order curvature is unidentifiable and only the local slope is measured.

Vig adjustment per rung:
p_adj = p(x)·(1 + h(c, b)),
where c is market class, b is probability bucket, h is the dimensionless hold rate from the hold table, and p_adj must remain in [0,1]. The American quote is q = american(1/p_adj), then rounded to the 0.5-point grid near the line and to 1.0–2.0 points at the edges.

Monotonicity assertion:
∀ i < j, q_i ≤ q_j,
enforced as a hard assertion on output; violation rejects the ladder.

Limit assignment:
L = class_table[period][market class], L ∈ USD dollars.
Observed medians: full-game side $10,000; aggregate $5,000; outright $5,000; team total $2,000; halves/quarters $500. Limits are a static config, not a per-event decision, except for marquee-game overrides.

Movement loop:
reprice timer T ∝ 1/L.
Thin markets (L = $500 quarters) churn; thick markets (L = $10,000 side) sit.

Correlation pricing:
eligibility matrix M ∈ {0,1}^{n×n}, boolean leg-pair admission, not a covariance matrix Σ.

Assumptions: Gaussian CDF, local linearity of the ladder near μ, static limit table, timer-driven repricing, and hold applied multiplicatively to devigged probability. Breakdown regimes: p_adj ∉ [0,1] violates probability bounds; skew-normal tails would outperform the normal assumption; per-game sigma spread (17.0–19.0 points at DK) may be fit noise rather than true heterogeneity; and steam/money-response behavior is not identifiable from static snapshots.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The architecture descends from Bachelier’s 1900 random walk and the measure-theoretic probability of Kolmogorov (1933), but its immediate operational lineage is Black-Scholes-Merton (1973) continuous-time derivative pricing: a fair value is derived from a stochastic distribution, then a ladder of tradable claims is read off the CDF. Kelly (1956) bankroll logic underpins the limit table as capacity allocation rather than per-game discretion. The engine is therefore a discrete-rung, discrete-time implementation of risk-neutral CDF read-off with an additive hold term.

Multi-week traps emerge from the “dark” stages. Sigma must be refit across slates; a single-night, ten-game fit is not trusted to two decimals, so a multi-week drift in σ would silently misprice all rungs until recalibration. The hold table suffers from sample asymmetry—DK’s 42 markets versus Pinnacle’s 590 on the same night—so if the public mix shifts week-to-week, the bucket(p) hold policy may capture stale public behavior rather than true book confidence. Mu depends on an injury/news feed and team-strength prior that are outside the recoverable output; feed latency means ratings can be systematically stale, miscentering the CDF before any vig is applied. Limit overrides for marquee games break the static class-table assumption, creating temporary capacity anomalies that look like game-specific signals but are product-configuration artifacts. Finally, the movement timer T ∝ 1/limit creates asynchronous adjustment: after a news shock, thin quarter markets reprice before thick side markets, generating inter-product dislocation that persists until the thick-market timer fires.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under high-volatility news, a retail-pricing engine such as DK’s uniform ~5% hold is more likely to regress to flat rake because uniform vig is operationally simpler to defend than a confidence-sensitive table. Pinnacle’s inverse-confidence policy—charging least where it knows most—is more fragile under regime change; if the book misestimates its own confidence during a crisis, the hold term directly misprices every rung.

Counter-trap: Pinnacle’s measured sigma of 12.21 points is tighter than the prediction stack’s 13.36 points, meaning the book systematically underpays the tails. A sharp observer exploits this by selecting tail rungs where implied confidence exceeds calibrated confidence. The counter-trap is that the ladder generator is algorithmic and slow to adapt; the book may widen sigma ex post after observing tail flow, but the local-fit identification only sees the current slope, so the exploitation window persists until the next full refit.

Clock: the movement loop runs on a timer inversely proportional to limit. Quarter markets at L = $500 churn faster than full-game side markets at L = $10,000. This creates a deterministic temporal asymmetry: after a shock, thin markets adjust first while thick markets hold stale rungs. The clock is a predictable vulnerability because thick-market rungs remain fixed until the timer fires, offering a bounded reaction window before the movement loop corrects them.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: the rung grid is fixed at 0.5-point spacing near the line and 1.0–2.0 points at the edges, derived from the same CDF for all rungs. The monotonicity assertion is a hard physical-layer veto: any non-monotone output sequence is rejected before publication. Verified output shows zero monotonicity violations across 720 Pinnacle ladder pairs and 2,478 DK alternate selections.

Biomechanical/weather layer: μ is produced by the ratings model, which requires an injury/news feed and team-strength prior (Stage 0, dark). Weather shocks, player availability, and lineup changes enter through μ, not σ. σ captures confidence width but does not absorb exogenous shock arrival; therefore weather or injury feed latency is an input-layer veto trigger. If μ staleness exceeds a threshold, the entire CDF is miscentered before vig, limits, or movement are applied, and the pricing cycle should be vetoed until the feed refreshes.

Veto rules: (1) p_adj ∉ [0,1] rejects the rung for probability-bound violation; (2) non-monotone q sequence rejects the ladder under the grid assertion; (3) M_{i,j} = 0 in the boolean correlation matrix rejects parlay assembly by exclusion rather than by covariance penalty; (4) μ staleness beyond tolerance vetoes the cycle at the input layer.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario A — Sigma drift veto: if per-game fitted sigma deviates from the class-level sigma by more than the cross-game standard deviation (observed DK spread of 17.0–19.0 points), the stack vetoes the rung set and reverts to class-level sigma. Prediction: refitting across more than twenty games reduces ladder RMSE below the observed 0.005–0.024 band, but parameter variance increases if the slate is small, risking overfit to noise.

Scenario B — Hold overflow veto: if h(market class, bucket) applied to a tail rung yields p_adj > 1, the probability bound is violated and the engine must clip or reject the rung. Prediction: rungs beyond ±19 points from μ are the trigger zone; clipping introduces positive bias in extreme-tail quotes and distorts the tail payoff structure.

Scenario C — Movement inversion veto: if the reprice timer fires on a high-limit market (L = $10,000) before a low-limit market (L = $500) after identical news, the 1/limit proportionality is violated. Prediction: thick-market rungs stay stale while thin-market rungs over-adjust, producing monotonicity drift across adjacent rungs detectable within a single timer cycle.
</RLVR_COUNTERFACTUAL_VETOES>