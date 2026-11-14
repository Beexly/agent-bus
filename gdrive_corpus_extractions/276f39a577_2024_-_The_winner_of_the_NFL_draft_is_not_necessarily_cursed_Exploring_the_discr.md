---
source: "2024 - The winner of the NFL draft is not necessarily cursed Exploring the discrepancy between NFL draft expected value curves and the observed tra - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Carnegie Mellon Sports Analytics Conference/2024"
pages: 11
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6210
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper about NFL draft value curves and produce a response with specific XML sections, each meeting certain criteria:

1. ZERO BETTING LINES: No spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must use formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting lines whatsoever.
- Formal LaTeX equations only, no invented fake ratios.
- Cite page markers [PAGE N] and verbatim quotes from the source text.
- Must be >= 1000 words total across sections.
- THINK_TRACE must be >= 400 words.

Let me carefully extract information from the source text page by page.

The source appears to be pages 1-11 of a PDF converted to markdown. I need to reference [PAGE N] markers.

Page 1: Abstract, Introduction, 1.1 Traditional NFL draft trade value charts. Ends around Figure 1 description.
Page 2: Figure 1 caption, text about Weibull/Jimmy Johnson curves, loser's curse, Section 1.2. Ends around "high threshold of team performance."
Page 3: Figure 2 caption, text about elite players, Tom Brady/Patrick Mahomes, nonlinear transformations.
Page 4: Section 2.1 Right tail probability, equation for bundle of elite players, Figure 3 description, cutoff r ≈ 0.15, 16 players ≈ 0.57%.
Page 5: Footnote 3 about Beta regression model details, Section 2.2 S curves, step function g_step, g_line, s curves.
Page 6: Figure 4 description, s curves parameterized by alpha and beta, Figure 5 description.
Page 7: Section 2.3 Surplus value, cost/compensation curve, Figure 6 description, loser's curse diminishes.
Page 8: Section 2.4 Adjusting for position, quarterbacks vs non-quarterbacks, Bayesian hierarchical model, Figure 7 description, Figure 8 description.
Page 9: Section 2.4 continued surplus value for qb/not qb, Figure 9 description, loser's curse disappears for qb nonlinear.
Page 10: Discussion, Acknowledgments.
Page 11: References.

Wait, the markdown text doesn't have explicit page breaks labeled [PAGE 1], [PAGE 2], etc. But the user says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." The source text is provided as one block but it's from an 11-page PDF. I should infer page numbers based on the content flow and the fact that the PDF has page numbers visible in the text (e.g., "1", "2", "3" appear at bottom of sections). Looking at the text:

- After Section 1.1 text, there's a "1" which is page number.
- Then Figure 1, text continues, "2" page number.
- Then Figure 2, text continues, "3" page number.
- Then Section 2.1, "4" page number.
- Then footnote 3, Section 2.2, "5" page number.
- Then Figure 4, text continues, "6" page number.
- Then Section 2.3, Figure 6, "7" page number.
- Then Section 2.4, Figure 7, "8" page number.
- Then Figure 8, text continues, "9" page number.
- Then Figure 9, text continues, "10" page number.
- Then Discussion, Acknowledgments, References "11".

Actually looking more carefully at the raw text:
- "1" appears after first paragraph block (end of page 1)
- "2" appears after Figure 1 discussion (end of page 2)
- "3" appears after Figure 2 discussion (end of page 3)
- "4" appears after Section 2.1 text (end of page 4)
- "5" appears after footnote 3 and Section 2.2 start (end of page 5)
- "6" appears after Figure 4 description (end of page 6)
- "7" appears after Section 2.3 (end of page 7)
- "8" appears after Section 2.4 start (end of page 8)
- "9" appears after Figure 8 (end of page 9)
- "10" appears after Figure 9 (end of page 10)
- "11" appears at References (end of page 11)

So I can cite [PAGE 1] through [PAGE 11] based on these markers.

Now let's plan each section:

<THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Derive how expected value curves fail to match trade market.
- Multi-hop: E[Y|x] decreases convexly, sd(Y|x) decreases convexly, right tail probability P(Y>r|x) decays even more steeply due to joint effect of mean and variance decay.
- Nonlinear g transforms make earlier picks disproportionately more valuable.
- Gray zones: the spike-plus-Beta model assumes Y ∈ [0,1] but Y can exceed 1? Actually second contract APY cap percentage could theoretically exceed 1 (100% of cap), though rare. The model uses spike at Y ≤ 0.005 and Beta for Y > 0.005. Breakdown regime: sparse Super Bowl outcomes, confounders unadjusted, position-specific data scarcity.
- Verbatim quotes with page citations.
- Gray-zone audit: the claim "general managers value eliteness" is inferred from trade market curve matching, not directly observed; endogeneity problem (teams that trade up might already have elite rosters); small sample of elite QBs.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
- Define Y: second contract APY cap percentage, dimensionless proportion of salary cap, Y ∈ [0,1] effectively (though could exceed 1, model truncates/spikes).
- x ∈ {1, ..., 256}, draft pick index, dimensionless ordinal.
- Conditional mean: E[Y|x], units: cap percentage (dimensionless ratio).
- Compensation: cost(x), deterministic function of x, units: cap percentage.
- Expected surplus: E[Y - cost(x)|x].
- Normalized curves: v_EV(x) = E[Y|x]/E[Y|x=1], etc.
- Jimmy Johnson curve and Weibull trade market curve implied by observed trades.
- Conditional standard deviation: sd(Y|x).
- Right tail probability: P(Y > r|x), r ≈ 0.15 cutoff, dimensionless probability.
- Elite value curve: v_elite(x) = P(Y>r|x)/P(Y>r|x=1).
- Beta regression: Y|x, Y>0.005 ~ Beta(µ(x), ϕ(x)), µ(x) = logistic(spline(x|β)), ϕ(x) = exp(γ0 + γ1·x).
- Bust spike: P(Y ≤ 0.005|x) = logistic(α0 + α1·x).
- Outcome valuation: v(x) ∝ E[g(Y)|x] = ∫₀¹ g(y)P(y|x)dy.
- Step function: g_step(y) = I(y > r).
- Identity: g_line(y) = y.
- S-curve: g_s = CDF of Beta(α, β).
- Surplus nonlinear: v(x) ∝ E[g(Y - cost(x))|x].
- Position adjustment: P(Y|x, pos), hierarchical shrinkage toward common mean.
- QB vs non-QB: non-QB first pick ≈ 10% of QB first pick for r=0.15, ≈1% for r=0.20; ≈60% for linear.
- Breakdown/singularity: Beta regression assumes Y bounded in (0,1); if APY cap % > 1, model misspecified. Spike threshold 0.005 is arbitrary. Stan posterior estimation with sparse data.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Massey & Thaler (2013) loser's curse [PAGE 1, 2, 7, 9].
- Jimmy Johnson chart (gut instinct, Mike McCoy) [PAGE 2].
- Stuart (2012), Baldwin (2024), Fitzgerald & Spielberger (2024), PFF (2024) traditional charts [PAGE 1].
- Ferrari & Cribari-Neto (2004) Beta regression [PAGE 5, 11].
- Eager (2020) PFF WAR [PAGE 8, 11].
- Multi-week traps: draft value is not static; rookie wage scale changes; salary cap growth assumption 7% [PAGE 1]; position scarcity shifts week-to-week; injury variance not modeled; the "curse" is retrospective labeling.
- Trade market curve implied by observed trades may reflect transaction costs, not pure value.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: GMs under pressure revert to familiar (steep) Johnson/Weibull curves despite analytics saying trade down.
- Counter-trap: If everyone believes top picks are overvalued (surplus value), trading down becomes crowded; the elite-right-tail premium may collapse if too many teams trade down from top spots, increasing supply of later picks.
- Clock: rookie contract window (4 years) vs second contract timing; the value of elite QB is compressed into the Super Bowl window; variance decay convex over draft means the "elite clock" ticks fastest at top picks.
- Theory of mind: GM thinks other GM values eliteness nonlinearly, so pays steep price; if GM wrong, they overpay for variance they can't convert to wins.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- This is tricky because the paper is about NFL draft economics, not physical/biomechanical/weather. But I need to address vetoes.
- Physical layer: salary cap is a hard nominal constraint; cost(x) is deterministic by CBA, not subject to weather.
- Biomechanical layer: player performance Y is mediated by biomechanical durability; the model ignores injury risk, which is position-dependent (QB vs others). The spike near zero captures busts but not mid-career injuries.
- Weather layer: not modeled in paper; outdoor vs dome performance not conditioned; however APY cap percentage is off-field contract value, so weather is indirect via performance.
- Veto proof: The model's core claim (nonlinear eliteness value matches trade market) is robust to physical/biomechanical/weather variation because it's based on observed contract outcomes ex-post. But the causal mechanism (Super Bowl win probability) is not physically modeled.
- Need to say no vetoes triggered? Or vetoes that don't invalidate? "Veto proof" means showing they don't overturn the conclusion. Since the paper uses realized second-contract APY, physical injury is already embodied in Y. Weather effects are averaged out over career.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I need 3 scenarios where the model's predictions would be falsified/vetoed.
- Scenario 1: If a top-5 non-QB pick is traded for a package whose implied value under linear surplus exceeds the right-tail elite value, but the trade still happens, that vetoes the pure eliteness hypothesis. Prediction: trades involving top non-QB picks will align closer to v_s or v_elite than v_EV.
- Scenario 2: If the salary cap growth rate assumption (7%) is violated and cap actually declines, cost(x) shifts; the surplus curves change shape. Prediction: under cap contraction, early-pick surplus collapses more than model predicts because cost(x) doesn't adjust downward fast enough.
- Scenario 3: If a drafted QB with Y > 0.15 fails to make the Super Bowl despite elite APY (e.g., due to roster/coaching confounders), the assumed link between elite Y and Super Bowl probability is weakened. Prediction: right-tail value curves will overprice picks on teams with poor supporting rosters.
- Each must be verifiable and include predictions.

Word count: Need >= 1000 words total. THINK_TRACE >= 400. I'll aim for roughly:
- THINK_TRACE: ~450 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~300 words
- RETROCAUSAL_GENEALOGY: ~200 words
- RECURSIVE_THEORY_OF_MIND: ~200 words
- CROSS_LAYER_VETO_ADJUDICATION: ~150 words
- RLVR_COUNTERFACTUAL_VETOES: ~200 words
Total: ~1500 words. Good.

Need to ensure no betting lines. I will not mention spreads, odds, moneylines, totals.

Need formal LaTeX equations. Use $...$ or \[...\]. Ensure no toy equations like Force/Fatigue.

Need verbatim quotes and [PAGE N] markers. Let me extract exact quotes:

Page 1: "Football analysts traditionally value a future draft pick position by its expected performance or surplus value. But, these expected value curves do not match the valuation implied by the observed trade market."
Page 1: "This phenomenon is the “loser’s curse” documented in Massey and Thaler (2013): the worst teams who pick at the beginning of the first round get less surplus value on average than better teams who pick later in the first round."
Page 1: "Expected performance value (blue) is less steep than compensation (red), indicating that players are underpaid on average in their first contracts."
Page 2: "The Weibull and Jimmy Johnson curves are quite similar. They are much steeper than the expected performance and surplus curves and aren’t even the same shape as the expected surplus curve."
Page 2: "Moreover, they decrease convexly. Since an earlier pick has a much higher expected value and variance than a later pick, it has a much fatter right tail."
Page 2: "Elite players have an outsize influence on winning the Super Bowl. Tom Brady or Patrick Mahomes won seven of the ten Super Bowls from 2014-2023 because they’re just that good."
Page 3: "Thus, if a general manager’s goal is to win a Super Bowl, then accepting a trade because it yields higher performance or surplus value on average is not necessarily optimal."
Page 3: "We suspect general managers value performance nonlinearly, place exponentially higher value on players as their eliteness increases."
Page 4: "We calculate right tail probability from the conditional density P( Y |x ), which we estimate using a Bayesian “spike plus Beta regression” model."
Page 4: "The right tail curves are much steeper than the expected value curve. To draft for eliteness, not expected value, earlier picks are much more valuable."
Page 4: "The way general managers trade resembles valuing picks by the number of elite players they are expected to produce."
Page 4: "The right tail curve with r ≈ 0.15 closely matches the Weibull curve."
Page 4: "This is a high bar: in our dataset of draft picks from 2013 to 2023, just 16 players ( ≈ 0.57%) satisfy Y ≥ 0.15."
Page 5: "Using the mean-precision parameterization of the Beta distribution (Ferrari and Cribari-Neto, 2004), we model Y |x, Y > 0.005 ∼ Beta( µ(x), ϕ(x)) where µ(x) = logistic(spline(x|β)) and ϕ(x) = exp(γ0 + γ1 · x)."
Page 5: "We model the spike near zero, the bust spike, using logistic regression, P( Y ≤ 0.005 |x ) = logistic( α0 + α1 · x )."
Page 6: "For example, g_s in Figure 4b assigns near failure to busts and near total success to elite players."
Page 7: "For each g, the corresponding performance curve is steeper than the corresponding surplus curve. This is because the compensation curve is itself steep, which reduces the relative value of earlier picks."
Page 8: "Quarterbacks have significantly higher conditional mean and variance curves (and hence fatter right tails) than non-quarterbacks."
Page 8: "For the curves derived from extreme right tail probabilities g_step( y ) = I( y > 0.15) (orange) and g_step( y ) = I( Y > 0.20) (blue), a non-quarterback first pick is worth about 10% and 1%, respectively, of a quarterback first pick."
Page 8: "For the traditional expected performance value curves (yellow) corresponding to g_line( y ) = y, a non-quarterback first pick is worth about 60% of a first pick quarterback."
Page 9: "For quarterbacks, the loser’s curse all but disappears for other nonlinear outcome valuations g_s and g_step."
Page 10: "To win a Super Bowl, elite players, and particularly elite quarterbacks, are exponentially more valuable than good or median players."

I will use these.

Now I must be careful with the XML sections exactly as named.

Let's draft.

THINK_TRACE (>=400 words):
Start with derivation. Then gray-zone audit. Use quotes and page numbers.

Drafting THINK_TRACE:

The paper's central discrepancy is mathematical: traditional draft charts normalize expected performance $v_{\mathrm{EV}}(x) = \mathbb{E}[Y\mid x]/\mathbb{E}[Y\mid x=1]$ and expected surplus $v_{\mathrm{S}}(x) = \mathbb{E}[Y - \mathrm{cost}(x)\mid x]/\mathbb{E}[Y - \mathrm{cost}(1)\mid x=1]$, where $Y$ is second-contract APY cap percentage and $x \in \{1,\dots,256\}$ is draft pick [PAGE 1]. Because $\mathbb{E}[Y\mid x]$ declines gently while $\mathrm{cost}(x)$ is steep, expected surplus is positive across most of the draft and peaks in the middle of the first round, producing the "loser's curse" documented by Massey and Thaler (2013): early-picking teams receive less surplus per pick than later first-round teams [PAGE 1][PAGE 2]. Yet the observed trade market, summarized by the Jimmy Johnson and Weibull curves, is "much steeper than the expected performance and surplus curves and aren’t even the same shape as the expected surplus curve" [PAGE 2].

Multi-hop derivation: (1) $\mathrm{sd}(Y\mid x)$ decreases convexly with $x$, paralleling $\mathbb{E}[Y\mid x]$ [PAGE 2][PAGE 3]. (2) Joint decay of mean and variance implies the right tail $P(Y>r\mid x)$ decays faster than the mean because both the location and dispersion of the conditional density shift leftward as the draft progresses [PAGE 2][PAGE 4]. (3) If a general manager's objective is Super Bowl victory rather than average surplus, then a nonlinear outcome valuation $g$ that assigns exponentially increasing weight to elite outcomes dominates linear surplus logic [PAGE 3]. (4) The induced pick value $v(x) \propto \mathbb{E}[g(Y)\mid x] = \int_0^1 g(y)P(y\mid x)\,dy$ therefore steepens dramatically for $g = g_{\mathrm{step}}$ or $g_s$ relative to $g_{\mathrm{line}}(y)=y$ [PAGE 5][PAGE 6]. Empirically, the right-tail curve with cutoff $r \approx 0.15$ "closely matches the Weibull curve," and just 16 players ($\approx 0.57\%$) in the 2013–2023 sample satisfy $Y \geq 0.15$ [PAGE 4].

Gray-zone audit: The inference that GMs "value eliteness" is reverse-engineered from trade prices, not measured from utility functions [PAGE 3][PAGE 4]. Endogeneity looms: teams trading up may already possess roster complements that make elite marginal value higher, confounding pick value with team context [PAGE 3]. The Bayesian "spike plus Beta regression" bounds $Y \in [0,1]$ via a bust spike at $Y \leq 0.005$ and a Beta component for $Y > 0.005$ [PAGE 5]; if a second contract exceeds 100% of the cap—a rare but non-impossible outlier—the bounded support assumption breaks down. Super Bowl win probability is acknowledged as too sparse and confounded to estimate directly, so the paper substitutes eliteness probability as a proxy [PAGE 3]. Position-specific estimates suffer from huge standard errors and require hierarchical shrinkage toward a common mean [PAGE 8], meaning QB/non-QB contrasts lean heavily on prior regularization rather than pure likelihood.

<SOURCE_OPERATORS_AND_EQUATIONS>:
Formal definitions and equations.

$Y$: realized second-contract average annual value as percentage of salary cap, dimensionless proportion in $[0,1]$ operationally; $x$: draft pick ordinal, dimensionless, $x \in \{1,\dots,256}$ [PAGE 1].
$\mathbb{E}[Y\mid x]$: conditional mean performance, cap-percentage units [PAGE 1].
$\mathrm{cost}(x)$: deterministic first-contract compensation converted to cap percentage using 2023 cap $\approx \$225$ million and 7% annual cap growth for 2024–2026, averaged over four rookie seasons [PAGE 1].
Expected surplus: $\mathbb{E}[Y-\mathrm{cost}(x)\mid x]$ [PAGE 1].
Normalized curves: $v_{\mathrm{EV}}(x) = \mathbb{E}[Y\mid x]/\mathbb{E}[Y\mid x=1]$, $v_{\mathrm{S}}(x) = \mathbb{E}[Y-\mathrm{cost}(x)\mid x]/\mathbb{E}[Y-\mathrm{cost}(1)\mid x=1]$ [PAGE 1].
Conditional dispersion: $\mathrm{sd}(Y\mid x)$, cap-percentage units [PAGE 2][PAGE 3].
Right-tail probability: $P(Y>r\mid x)$, dimensionless probability; elite cutoff $r \approx 0.15$ [PAGE 4].
Elite value curve: $v_{\mathrm{elite}}(x) = P(Y>r\mid x)/P(Y>r\mid x=1)$ [PAGE 4].
Bayesian spike-plus-Beta: $Y\mid x, Y>0.005 \sim \mathrm{Beta}(\mu(x),\phi(x))$, $\mu(x)=\mathrm{logistic}(\mathrm{spline}(x\mid\beta))$, $\phi(x)=\exp(\gamma_0+\gamma_1 x)$; bust spike $P(Y\leq 0.005\mid x)=\mathrm{logistic}(\alpha_0+\alpha_1 x)$ [PAGE 5].
General outcome valuation: $v(x) \propto \mathbb{E}[g(Y)\mid x] = \int_0^1 g(y)P(y\mid x)\,dy$ [PAGE 5].
$g_{\mathrm{step}}(y) = \mathbb{I}(y>r)$; $g_{\mathrm{line}}(y)=y$; $g_s(y) = \mathrm{CDF}_{\mathrm{Beta}(\alpha,\beta)}(y)$ [PAGE 5][PAGE 6].
Surplus nonlinear: $v(x) \propto \mathbb{E}[g(Y-\mathrm{cost}(x))\mid x]$ [PAGE 7].
Position hierarchy: $P(Y\mid x,\mathrm{pos})$ estimated with shrinkage of position-specific $\alpha^*,\beta^*,\gamma^*$ toward global means [PAGE 5][PAGE 8].
Non-QB vs QB: for $g_{\mathrm{step}}$ at $r=0.15$, non-QB first pick $\approx 10\%$ of QB first pick; at $r=0.20$, $\approx 1\%$; for $g_{\mathrm{line}}$, $\approx 60\%$ [PAGE 8].
Breakdown/singularity: Beta regression requires bounded $Y$; APY cap percentage $>1$ violates support. Stan posterior estimation with sparse elite observations yields wide credible intervals, especially for position-specific tails [PAGE 5][PAGE 8]. The $r=0.005$ bust threshold is arbitrary; varying it shifts the spike mass and hence $v_{\mathrm{elite}}$ near the top of the draft.

<RETROCAUSAL_GENEALOGY>:
Historical lineage. Massey & Thaler 2013 loser's curse [PAGE 1][PAGE 2][PAGE 7][PAGE 9]. Jimmy Johnson chart by Mike McCoy based on gut instinct and past trades [PAGE 2]. Weibull curve fit to observed trades [PAGE 2]. Traditional charts: Stuart (2012), Baldwin (2024), Fitzgerald & Spielberger (2024), PFF (2024) [PAGE 1]. Beta regression: Ferrari & Cribari-Neto (2004) [PAGE 5][PAGE 11]. PFF WAR: Eager (2020) [PAGE 8][PAGE 11].
Multi-week traps: The 7% cap growth assumption fixes cost(x) over a 3-year window, but actual cap evolution can deviate, making surplus curves stale week-to-week [PAGE 1]. The loser's curse is a retrospective label; a team picking early in Week 1 of the draft cycle faces different roster urgency than in Week 17. Injury variance is not explicitly modeled; the bust spike captures only $Y \leq 0.005$, not mid-contract degradation [PAGE 5]. Position scarcity shifts across the offseason as free agency moves, so a nonlinear curve fit on historical trades may misprice a specific draft class if QB depth changes.

<RECURSIVE_THEORY_OF_MIND>:
Crisis habit regression: GMs under draft-night pressure regress to the familiar Jimmy Johnson/Weibull steep curves because the cost of passing on a perceived franchise player is psychologically salient, even when expected surplus says trade down [PAGE 2][PAGE 10].
Counter-trap: If enough analysts adopt the surplus-value conclusion that early picks are overpriced, the market for trading down becomes crowded; the supply of later first-round picks rises, compressing their surplus and restoring the steepness of the elite curve—a reflexive correction.
Clock: The rookie contract window (four years) creates a fixed-time horizon; elite QB value is concentrated in the Super Bowl contention window, so the marginal utility of a top pick is nonlinear in time remaining on the roster clock. Variance decay over the draft means the elite-probability clock ticks fastest at $x=1$ and slows convexly thereafter [PAGE 2][PAGE 3].
Theory of mind: A GM trading up believes rival GMs also weight eliteness exponentially, so pays a steep price to preempt; if rivals actually use linear surplus, the trader overpays for variance they cannot convert into wins.

<CROSS_LAYER_VETO_ADJUDICATION>:
Physical layer: The salary cap is a hard nominal constraint; $\mathrm{cost}(x)$ is deterministic under the CBA and immune to weather or biomechanical variation [PAGE 1]. No veto.
Biomechanical layer: $Y$ is observed ex-post and already embodies injuries, durability, and playing-time loss. The model does not condition on biomechanical risk separately, so a pick with high $P(Y>r\mid x)$ but high injury propensity is not vetoed internally; however, because $Y$ is second-contract APY, injured players who never reach a second contract are censored into the bust spike at $Y \leq 0.005$ [PAGE 4][PAGE 5].
Weather layer: Not in the conditioning set. APY cap percentage is negotiated off-field, so weather effects enter only indirectly through on-field performance aggregation; the model treats this as averaged noise rather than a veto condition [PAGE 1].
Adjudication: None of these layers trigger a veto that falsifies the core claim—nonlinear eliteness valuation matches observed trade prices—because the dependent variable is realized contract value, which is downstream of all physical and biomechanical shocks. The unvetoed residual is causal attribution: the paper cannot prove GMs maximize Super Bowl probability rather than merely mimic historical trade patterns [PAGE 3][PAGE 10].

<RLVR_COUNTERFACTUAL_VETOES>:
1. Scenario: A top-5 non-quarterback pick is traded for a bundle whose linear expected-surplus value exceeds the bundle's implied right-tail elite value, yet the trade is accepted by the team trading down.
   Verifiable condition: Compare trade chart points pre-draft against $v_{\mathrm{S}}$ and $v_{\mathrm{elite}}$ for non-QB positions [PAGE 8][PAGE 9].
   Prediction: Under the eliteness hypothesis, such trades will be rare; most top non-QB trades will price closer to $v_{\mathrm{elite}}$ or $v_s$ than to linear $v_{\mathrm{S}}$, because teams will not accept linear-surplus losses for picks they view as low-eliteness.
2. Scenario: The salary cap contracts or grows at less than the assumed 7% for 2024–2026, invalidating the $\mathrm{cost}(x)$ conversion [PAGE 1].
   Verifiable condition: Recompute $\mathrm{cost}(x)$ with actual cap figures and compare predicted vs observed trade acceptances in the following draft cycle.
   Prediction: Under cap contraction, early-pick surplus will collapse more steeply than the model's fixed-growth curve predicts, because fixed nominal rookie costs become a larger cap percentage and the elite premium cannot compensate for the diminished cap space.
3. Scenario: A quarterback drafted in the top 10 with second-contract $Y > 0.15$ fails to reach a Super Bowl within his rookie contract due to roster/coaching confounders.
   Verifiable condition: Track top-10 QBs from 2013–2023 with $Y > 0.15$ and Super Bowl appearances [PAGE 4].
   Prediction: If the right-tail proxy is valid, most such QBs should appear in at least one Super Bowl; a systematic failure would veto the claim that far-right-tail $Y$ is the operative determinant of draft value, suggesting the trade market instead prices unobserved roster-fit variables.

Let me check word counts roughly. THINK_TRACE looks around 400-450. Total should be well over 1000.

Need to make sure no betting lines. Checked.

Need to make sure no toy equations. All equations are formal from the paper. No Force/Fatigue.

Need verbatim quotes - I included several.

Need page citations - included [PAGE 1] through [PAGE 11].

Need exact XML tags.

Let me review for any accidental "odds" or betting language. I used "probability" which is fine (not betting odds). I avoided "spread", "moneyline", "total", "over/under". Good.

One thing: The user said "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." I did state assumptions and breakdown regimes. Good.

Let me polish the writing to ensure it flows and meets depth requirements.

I should verify that THINK_TRACE is >= 400 words. Let me count roughly:
Paragraph 1: ~100 words.
Paragraph 2: ~160 words.
Paragraph 3: ~150 words.
Total ~410. Should be fine, but I can expand slightly to be safe.

Let me expand THINK_TRACE a bit more to ensure it's safely over 400.

Expanded THINK_TRACE:

The paper's central discrepancy is mathematical: traditional draft charts normalize expected performance $v_{\mathrm{EV}}(x) = \mathbb{E}[Y\mid x]/\mathbb{E}[Y\mid x=1]$ and expected surplus $v_{\mathrm{S}}(x) = \mathbb{E}[Y - \mathrm{cost}(x)\mid x]/\mathbb{E}[Y - \mathrm{cost}(1)\mid x=1]$, where $Y$ is second-contract APY cap percentage and $x \in \{1,\dots,256\}$ is draft pick [PAGE 1]. Because $\mathbb{E}[Y\mid x]$ declines gently while $\mathrm{cost}(x)$ is steep, expected surplus is positive across most of the draft and peaks in the middle of the first round, producing the "loser's curse" documented by Massey and Thaler (2013): early-picking teams receive less surplus per pick than later first-round teams [PAGE 1][PAGE 2]. Yet the observed trade market, summarized by the Jimmy Johnson and Weibull curves, is "much steeper than the expected performance and surplus curves and aren’t even the same shape as the expected surplus curve" [PAGE 2].

Multi-hop derivation: (1) $\mathrm{sd}(Y\mid x)$ decreases convexly with $x$, paralleling $\mathbb{E}[Y\mid x]$ [PAGE 2][PAGE 3]. (2) Joint decay of mean and variance implies the right tail $P(Y>r\mid x)$ decays faster than the mean because both the location and dispersion of the conditional density shift leftward as the draft progresses [PAGE 2][PAGE 4]. (3) If a general manager's objective is Super Bowl victory rather than average surplus, then a nonlinear outcome valuation $g$ that assigns exponentially increasing weight to elite outcomes dominates linear surplus logic [PAGE 3]. (4) The induced pick value $v(x) \propto \mathbb{E}[g(Y)\mid x] = \int_0^1 g(y)P(y\mid x)\,dy$ therefore steepens dramatically for $g = g_{\mathrm{step}}$ or $g_s$ relative to $g_{\mathrm{line}}(y)=y$ [PAGE 5][PAGE 6]. Empirically, the right-tail curve with cutoff $r \approx 0.15$ "closely matches the Weibull curve," and just 16 players ($\approx 0.57\%$) in the 2013–2023 sample satisfy $Y \geq 0.15$ [PAGE 4].

Gray-zone audit: The inference that GMs "value eliteness" is reverse-engineered from trade prices, not measured from utility functions [PAGE 3][PAGE 4]. Endogeneity looms: teams trading up may already possess roster complements that make elite marginal value higher, confounding pick value with team context [PAGE 3]. The Bayesian "spike plus Beta regression" bounds $Y \in [0,1]$ via a bust spike at $Y \leq 0.005$ and a Beta component for $Y > 0.005$ [PAGE 5]; if a second contract exceeds 100% of the cap—a rare but non-impossible outlier—the bounded support assumption breaks down. Super Bowl win probability is acknowledged as too sparse and confounded to estimate directly, so the paper substitutes eliteness probability as a proxy [PAGE 3]. Position-specific estimates suffer from huge standard errors and require hierarchical shrinkage toward a common mean [PAGE 8], meaning QB/non-QB contrasts lean heavily on prior regularization rather than pure likelihood. Finally, the 7% annual cap growth assumption fixes $\mathrm{cost}(x)$ over 2024–2026, but actual cap evolution can deviate, making surplus curves stale before they are used [PAGE 1].

That's definitely over 400 words now.

Total word count should be comfortable.

Let me finalize the response.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's central discrepancy is mathematical: traditional draft charts normalize expected performance $v_{\mathrm{EV}}(x) = \mathbb{E}[Y\mid x]/\mathbb{E}[Y\mid x=1]$ and expected surplus $v_{\mathrm{S}}(x) = \mathbb{E}[Y - \mathrm{cost}(x)\mid x]/\mathbb{E}[Y - \mathrm{cost}(1)\mid x=1]$, where $Y$ is second-contract APY cap percentage and $x \in \{1,\dots,256\}$ is draft pick [PAGE 1]. Because $\mathbb{E}[Y\mid x]$ declines gently while $\mathrm{cost}(x)$ is steep, expected surplus is positive across most of the draft and peaks in the middle of the first round, producing the "loser's curse" documented by Massey and Thaler (2013): early-picking teams receive less surplus per pick than later first-round teams [PAGE 1][PAGE 2]. Yet the observed trade market, summarized by the Jimmy Johnson and Weibull curves, is "much steeper than the expected performance and surplus curves and aren’t even the same shape as the expected surplus curve" [PAGE 2].

Multi-hop derivation: (1) $\mathrm{sd}(Y\mid x)$ decreases convexly with $x$, paralleling $\mathbb{E}[Y\mid x]$ [PAGE 2][PAGE 3]. (2) Joint decay of mean and variance implies the right tail $P(Y>r\mid x)$ decays faster than the mean because both the location and dispersion of the conditional density shift leftward as the draft progresses [PAGE 2][PAGE 4]. (3) If a general manager's objective is Super Bowl victory rather than average surplus, then a nonlinear outcome valuation $g$ that assigns exponentially increasing weight to elite outcomes dominates linear surplus logic [PAGE 3]. (4) The induced pick value $v(x) \propto \mathbb{E}[g(Y)\mid x] = \int_0^1 g(y)P(y\mid x)\,dy$ therefore steepens dramatically for $g = g_{\mathrm{step}}$ or $g_s$ relative to $g_{\mathrm{line}}(y)=y$ [PAGE 5][PAGE 6]. Empirically, the right-tail curve with cutoff $r \approx 0.15$ "closely matches the Weibull curve," and just 16 players ($\approx 0.57\%$) in the 2013–2023 sample satisfy $Y \geq 0.15$ [PAGE 4].

Gray-zone audit: The inference that GMs "value eliteness" is reverse-engineered from trade prices, not measured from utility functions [PAGE 3][PAGE 4]. Endogeneity looms: teams trading up may already possess roster complements that make elite marginal value higher, confounding pick value with team context [PAGE 3]. The Bayesian "spike plus Beta regression" bounds $Y \in [0,1]$ via a bust spike at $Y \leq 0.005$ and a Beta component for $Y > 0.005$ [PAGE 5]; if a second contract exceeds 100% of the cap—a rare but non-impossible outlier—the bounded support assumption breaks down. Super Bowl win probability is acknowledged as too sparse and confounded to estimate directly, so the paper substitutes eliteness probability as a proxy [PAGE 3]. Position-specific estimates suffer from huge standard errors and require hierarchical shrinkage toward a common mean [PAGE 8], meaning QB/non-QB contrasts lean heavily on prior regularization rather than pure likelihood. Finally, the 7% annual cap growth assumption fixes $\mathrm{cost}(x)$ over 2024–2026, but actual cap evolution can deviate, making surplus curves stale before they are used [PAGE 1].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal variable definitions and operators, with units and page citations:

- Outcome $Y$: realized second-contract average annual value as percentage of salary cap, dimensionless proportion operationally bounded to $[0,1]$ by the model's spike-and-Beta structure; $x$: draft pick ordinal, dimensionless, $x \in \{1,\dots,256}$ [PAGE 1].
- Conditional mean performance: $\mathbb{E}[Y\mid x]$, units of cap percentage [PAGE 1].
- Compensation: $\mathrm{cost}(x)$, deterministic first-contract compensation converted to cap percentage using the 2023 cap ($\approx \$225$ million) and 7% annual cap growth for 2024–2026, averaged across the four rookie seasons [PAGE 1].
- Expected surplus: $\mathbb{E}[Y-\mathrm{cost}(x)\mid x]$ [PAGE 1].
- Normalized traditional curves: $v_{\mathrm{EV}}(x) = \mathbb{E}[Y\mid x]/\mathbb{E}[Y\mid x=1]$ and $v_{\mathrm{S}}(x) = \mathbb{E}[Y-\mathrm{cost}(x)\mid x]/\mathbb{E}[Y-\mathrm{cost}(1)\mid x=1]$ [PAGE 1].
- Conditional dispersion: $\mathrm{sd}(Y\mid x)$, units of cap percentage [PAGE 2][PAGE 3].
- Right-tail probability: $P(Y>r\mid x)$, dimensionless probability; elite cutoff $r \approx 0.15$ [PAGE 4].
- Elite value curve: $v_{\mathrm{elite}}(x) = P(Y>r\mid x)/P(Y>r\mid x=1)$ [PAGE 4].
- Bayesian spike-plus-Beta density: $Y\mid x, Y>0.005 \sim \mathrm{Beta}(\mu(x),\phi(x))$ with $\mu(x) = \mathrm{logistic}(\mathrm{spline}(x\mid\beta))$ and $\phi(x) = \exp(\gamma_0 + \gamma_1 x)$; bust spike $P(Y\leq 0.005\mid x) = \mathrm{logistic}(\alpha_0 + \alpha_1 x)$ [PAGE 5].
- General outcome valuation: $v(x) \propto \mathbb{E}[g(Y)\mid x] = \int_0^1 g(y)P(y\mid x)\,dy$ [PAGE 5].
- Valuation functions: $g_{\mathrm{step}}(y) = \mathbb{I}(y>r)$; $g_{\mathrm{line}}(y)=y$; $g_s(y) = \mathrm{CDF}_{\mathrm{Beta}(\alpha,\beta)}(y)$ [PAGE 5][PAGE 6].
- Nonlinear surplus: $v(x) \propto \mathbb{E}[g(Y-\mathrm{cost}(x))\mid x]$ [PAGE 7].
- Position hierarchy: $P(Y\mid x,\mathrm{pos})$ estimated with shrinkage of position-specific $\alpha^*,\beta^*,\gamma^*$ toward global means [PAGE 5][PAGE 8].
- Empirical position contrast: for $g_{\mathrm{step}}$ at $r=0.15$, non-QB first pick $\approx 10\%$ of QB first pick; at $r=0.20$, $\approx 1\%$; for $g_{\mathrm{line}}$, $\approx 60\%$ [PAGE 8].

Singularity and breakdown regimes: Beta regression requires bounded support; an APY cap percentage strictly greater than 1 violates the assumed $(0,1)$ domain and is not modeled [PAGE 5]. The bust threshold $Y \leq 0.005$ is arbitrary; shifting it reallocates mass between spike and Beta components and materially changes $v_{\mathrm{elite}}$ near $x=1$ [PAGE 4][PAGE 5]. Stan posterior estimation over sparse elite observations yields wide credible intervals, particularly for position-specific right tails [PAGE 5][PAGE 8].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage begins with Massey and Thaler (2013), who documented the "loser's curse": worst teams picking at the top of the first round receive less surplus value than better teams picking later [PAGE 1][PAGE 2][PAGE 7][PAGE 9]. The Jimmy Johnson chart originated from gut instinct and past trades under Cowboys coach Jimmy Johnson and vice president Mike McCoy [PAGE 2]. The Weibull curve attempts to fit all observed trades as closely as possible under an additive trade-value assumption [PAGE 2]. Prior traditional charts cited include Stuart (2012), Baldwin (2024), Fitzgerald and Spielberger (2024), and Pro Football Focus (2024) [PAGE 1]. The statistical machinery draws on Ferrari and Cribari-Neto (2004) for Beta regression of rates and proportions [PAGE 5][PAGE 11], and positional importance is anchored by Eager (2020) PFF WAR evidence that quarterbacks dominate wins above replacement [PAGE 8][PAGE 11].

Multi-week traps: The 7% cap growth assumption locks $\mathrm{cost}(x)$ into a fixed 2024–2026 window, but actual cap evolution can deviate, causing pre-draft surplus curves to misprice trades executed later in the cycle [PAGE 1]. The loser's curse is a retrospective historical label; roster urgency in Week 1 of a rebuild differs from Week 17 of a win-now cycle, so a static curve cannot adapt week-to-week without re-estimation [PAGE 1][PAGE 2]. Injury variance is not explicitly conditioned on; the bust spike captures only $Y \leq 0.005$, leaving mid-contract degradation invisible to the value function [PAGE 5]. Finally, positional scarcity shifts across free agency and the draft cycle, so a nonlinear curve fit on historical trades may misprice a specific class if quarterback depth changes abruptly.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Under draft-night clock pressure, general managers regress to the familiar Jimmy Johnson and Weibull steep curves because the psychological cost of passing on a perceived franchise player outweighs analytic expected-surplus advice to trade down [PAGE 2][PAGE 10].

Counter-trap: If sufficient analysts and teams adopt the linear-surplus conclusion that top picks are overpriced, the market for trading down becomes crowded; increased supply of later first-round picks compresses their surplus, reflexively restoring the steepness of the elite-value curve and invalidating the original trade-down signal.

Clock: The rookie contract spans four seasons, creating a fixed-time horizon. Elite quarterback value is concentrated in the Super Bowl contention window, so marginal utility is nonlinear in remaining roster clock. Because variance decays convexly over the draft, the elite-probability clock ticks fastest at $x=1$ and slows thereafter, making early picks disproportionately valuable only within a narrow contention window [PAGE 2][PAGE 3].

Recursive theory of mind: A general manager trading up believes rival general managers also weight eliteness exponentially, so pays a steep price to preempt. If rivals actually use linear surplus, the trader overpays for variance they cannot convert into wins, and the market corrects on the next cycle.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The salary cap is a hard nominal constraint; $\mathrm{cost}(x)$ is deterministic under the collective bargaining agreement and immune to weather or biomechanical variation [PAGE 1]. No veto triggered.

Biomechanical layer: $Y$ is observed ex-post second-contract APY and therefore already embodies injuries, durability, and playing-time losses. The model does not condition separately on biomechanical risk, so a pick with high $P(Y>r\mid x)$ but high injury propensity is not internally vetoed. Injured players who never reach a second contract are censored into the bust spike at $Y \leq 0.005$ [PAGE 4][PAGE 5].

Weather layer: Weather is not in the conditioning set. Because APY cap percentage is negotiated off-field, weather affects value only indirectly through on-field performance aggregation; the model treats this as averaged noise rather than an independent veto condition [PAGE 1].

Adjudication: None of these layers falsifies the core claim that nonlinear eliteness valuation matches observed trade prices, because the dependent variable is realized contract value downstream of all physical and biomechanical shocks. The unvetoed residual is causal attribution: the paper cannot prove general managers maximize Super Bowl probability rather than mimic historical trade patterns [PAGE 3][PAGE 10].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. Scenario: A top-5 non-quarterback pick is traded for a bundle whose linear expected-surplus value exceeds the bundle's implied right-tail elite value, yet the team trading down accepts.
   Verifiable condition: Price observed pre-draft trades against $v_{\mathrm{S}}$ and $v_{\mathrm{elite}}$ for non-quarterback positions [PAGE 8][PAGE 9].
   Prediction: Under the eliteness hypothesis, such trades will be rare; most top non-quarterback trades will price closer to $v_{\mathrm{elite}}$ or $v_s$ than to linear $v_{\mathrm{S}}$, because teams will not accept linear-surplus losses on picks viewed as low-eliteness.

2. Scenario: The salary cap contracts or grows below the assumed 7% during 2024–2026, invalidating the $\mathrm{cost}(x)$ conversion [PAGE 1].
   Verifiable condition: Recompute $\mathrm{cost}(x)$ with actual cap figures and compare predicted versus observed trade acceptances in the subsequent draft cycle.
   Prediction: Under cap contraction, early-pick surplus will collapse more steeply than the fixed-growth model predicts, because fixed nominal rookie costs become a larger cap percentage and the elite premium cannot compensate for diminished cap space.

3. Scenario: A quarterback drafted in the top 10 with second-contract $Y > 0.15$ fails to reach a Super Bowl within the rookie contract due to roster or coaching confounders.
   Verifiable condition: Track top-10 quarterbacks from the 2013–2023 sample with $Y \geq 0.15$ and Super Bowl appearances [PAGE 4].
   Prediction: If the right-tail proxy is valid, most such quarterbacks should appear in at least one Super Bowl; systematic failure would veto the claim that far-right-tail $Y$ is the operative determinant of draft value, implying the trade market instead prices unobserved roster-fit variables.
</RLVR_COUNTERFACTUAL_VETOES>