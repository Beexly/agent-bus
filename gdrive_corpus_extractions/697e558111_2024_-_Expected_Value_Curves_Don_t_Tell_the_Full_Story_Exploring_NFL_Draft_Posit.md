---
source: "2024 - Expected Value Curves Don t Tell the Full Story Exploring NFL Draft Position Trade Value Curves - Zilberman et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Wharton Sports Analytics Journal/2024"
pages: 22
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3218
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper about NFL draft value curves using a very strict framework. Let me break down the requirements:

1. ZERO BETTING LINES - no spreads, totals, moneylines, odds
2. ZERO TOY EQUATIONS - no fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully analyze the provided paper text (22 pages) and construct a response that meets all these constraints.

Key content from the paper:
- NFL draft position trade value curves
- Traditional expected value curves vs nonlinear value functions
- Variance decays convexly across the draft
- Eliteness (right tail probability) decays more steeply than expected value
- Beta regression modeling conditional density of performance given draft position
- Y|x ~ Beta(µ(x), ϕ(x))
- Mean-precision parameterization
- Value functions: linear v(y)=y vs right tail v(y)=1{y>r}
- E[v(Y)|x] as draft value curve
- Right tail probability P(Y>r|x) is steeper than EV curve
- Data: 1997-2024 draft picks, second contract APY cap percentage
- Massey & Thaler 2013 foundation
- Limitations: historical data, second contract proxy, no position adjustment, macro perspective

Let me draft each section carefully.

<THINK_TRACE>: Need deep multi-hop derivation and gray-zone audit, >=400 words. I should trace the logic from Massey & Thaler -> expected value -> variance -> eliteness -> beta regression -> nonlinear value functions -> market implications. Gray zones: normalization by first pick, cutoff r selection, second contract as proxy, team-specific utility, market steepness vs model steepness. Multi-hop: draft position -> conditional mean -> conditional variance -> right tail probability -> draft value curve steepness -> observed trade market -> GM utility function inference.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations from the paper:
- Y|x ~ Beta(µ(x), ϕ(x))
- shape1 = µ·ϕ, shape2 = (1-µ)·ϕ
- E[Y|x] = µ(x)
- Var(Y|x) = µ(x)(1-µ(x))/(1+ϕ(x))
- µ(x) = logistic(x~ · β) where x~ is spline basis
- ϕ(x) = exp(γ₀ + γ₁·x)
- Draft value curve: E[v(Y)|x] where v is value function
- Linear: v(y)=y → E[Y|x]
- Right tail: v(y)=1{y>r} → P(Y>r|x)
- Normalization: divide by value of first pick
Units: APY cap percentage (dimensionless ratio [0,1]), draft position x (ordinal integer 1-257 roughly), probability (dimensionless [0,1]).
Page citations: [PAGE 12] for beta regression setup, [PAGE 16] for value functions, [PAGE 17] for right tail definition, [PAGE 5] for Massey & Thaler spline regression, [PAGE 9] for variance decay, [PAGE 18] for steepness.
Breakdown/singularity: Beta distribution requires Y in [0,1] - if second contract value is 0 or exactly 1, boundary issues. ϕ(x) -> 0 leads to infinite variance (precision goes to 0). µ(x) near 0 or 1 with low precision causes bimodality or spike near zero. Cutoff r selection is arbitrary (gray zone).

<RETROCAUSAL_GENEALOGY>: Historical lineage: Jimmy Johnson chart (intuition-based, 1990s) [PAGE 3] -> Massey & Thaler 2013 "Loser's Curse" (statistical modeling, expected value/surplus value, spline regression) [PAGE 4] -> PFF WAR, Chase Stuart AV [PAGE 5] -> Zilberman & Brill 2024 (variance-aware, nonlinear eliteness, beta regression). Multi-week traps: teams regressing to mean after draft, overvaluing early picks based on variance without accounting for team-specific utility, "loser's curse" (winning the trade but losing value), recency bias after 49ers/Dolphins Trey Lance trade [PAGE 3].

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression: GMs under pressure revert to Johnson chart or expected value despite knowing variance theory. Counter-trap: if all teams adopt steeper eliteness curves, early picks become overpriced relative to true elite probability, creating arbitrage in mid-round "value" picks. Clock: draft clock pressure forces heuristic (chart) use over Bayesian beta regression calculation. Team-specific: 2023 Chiefs with Mahomes need average players (shallow curve), 2023 Bears need elite player (steep curve) [PAGE 19].

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Since this is draft position theory, physical layer vetoes: player injury (biomechanical) means draft position value ex post differs from ex ante; weather doesn't directly affect draft (indoor event), but affects player evaluation (combines in weather). Veto proof: The model assumes second contract value is observable and exogenous to draft position; injury or holdout (biomechanical/physical) invalidates the APY cap percentage proxy. Weather is irrelevant to draft itself (not a game), so no weather veto on draft night. Biomechanical durability is not modeled [PAGE 20 limitations - wear and tear mentioned [PAGE 2], but not adjusted].

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some counterfactual framework. I'll interpret as verifiable counterfactual veto scenarios. Need 3 scenarios where the model's prediction would be vetoed/counterfactual, with predictions.
1. Scenario: Team with established elite QB (e.g., Chiefs with Mahomes) drafting early. Model says steep value curve (eliteness). Veto: team-specific utility is flat/shallow because elite slot filled. Prediction: They trade down or select non-QB, violating model's universal steepness.
2. Scenario: Late-round pick (x > 200) with r=0.15 cutoff. Beta regression µ(x) -> 0, density spike near zero [PAGE 11]. Voto: P(Y>r|x) becomes numerically zero due to underflow; model says pick worthless, but developmental players (e.g., undrafted free agent equivalents) can still contribute. Prediction: Model overstates worthlessness of late picks; actual trades show nonzero value.
3. Scenario: QB vs non-QB position. Model doesn't adjust for position [PAGE 20]. Veto: QB elite threshold r differs from defensive end; using same APY cap % and same r across positions misvalues QBs. Prediction: QB trades will deviate systematically from model-implied fair value because position-specific scarcity and elite impact are unmodeled.

Need to ensure word count >= 1000 total across sections. Let me write carefully.

No betting lines: must avoid spreads, totals, moneylines, odds. I can mention "probability" but not "odds" in betting sense. The paper itself mentions probability, which is fine.

No toy equations: Must use formal LaTeX from the paper. No invented ratios.

Citations: Use [PAGE N] format with verbatim quotes where relevant.

Let me draft.

THINK_TRACE: I'll write about 450-500 words. Cover:
- The paper's core inference problem: observed market trades imply steeper curves than EV models.
- Multi-hop: Draft position x determines conditional distribution Y|x. Beta regression parameterizes µ(x) and ϕ(x). Both decay convexly. Right tail P(Y>r|x) depends nonlinearly on both. As x increases, µ falls and ϕ falls (variance rises relative? Wait, paper says variance decays convexly. Let me check: Var = µ(1-µ)/(1+ϕ). If µ decays and ϕ decays (precision decreases), variance behavior is ambiguous but paper states variance decays convexly. Actually on [PAGE 9] they say both expected value and variance decays convexly. In beta regression, ϕ(x) = exp(γ0 + γ1·x). If γ1 < 0, precision decays exponentially, meaning variance increases relative to mean? But they say variance decays. Let's not overthink; just report what paper says.)
- Gray-zone audit: normalization arbitrary, cutoff r unspecified exact values in text (mentions r=0.15 as example), second contract APY as proxy ignores rookie contract surplus, team-specific utility not modeled, no position adjustment.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. I'll reproduce equations with page cites.

RETROCAUSAL_GENEALOGY: Jimmy Johnson -> Massey Thaler -> PFF/AV -> Zilberman Brill. Multi-week traps.

RECURSIVE_THEORY_OF_MIND: As above.

CROSS_LAYER_VETO_ADJUDICATION: Physical layer (injury), biomechanical (durability), weather (irrelevant to draft itself but relevant to evaluation). Veto proof conditions.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.

Need to make sure total words >= 1000. Each section substantial.

Let's write.

Important: Do not mention betting lines. Avoid "odds" except in mathematical "odds ratio" maybe? Better avoid entirely. The paper doesn't use betting odds.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The central inferential problem in Zilberman & Brill (2024) is a mismatch between observed NFL draft trade behavior and traditional expected-value (EV) draft charts. Traditional curves, originating with the intuition-based Jimmy Johnson chart [PAGE 3] and formalized by Massey & Thaler (2013) via spline regression on second-contract compensation [PAGE 4], treat draft value as E[Y|x], the conditional mean of player performance value (APY cap percentage) given draft position x [PAGE 5]. The paper’s multi-hop derivation proceeds as follows: (1) draft position x is an ordinal treatment; (2) the outcome Y lies in [0,1] as a percentage of the salary cap, motivating a Beta likelihood rather than Gaussian regression [PAGE 12]; (3) both the conditional mean µ(x) and the conditional variance decay convexly across the draft [PAGE 5, PAGE 9]; (4) because eliteness is defined as exceeding a high threshold r, P(Y>r|x) depends jointly on µ(x) and the precision ϕ(x), and the right-tail probability collapses much faster than the mean as x increases [PAGE 10, PAGE 18]; (5) therefore a nonlinear value function v(y)=1{y>r} yields a draft value curve E[v(Y)|x]=P(Y>r|x) that is steeply skewed toward early picks, more closely matching the observed trade market [PAGE 16-18].

Gray-zone audit: First, the exact elite cutoff r is treated as a free parameter; the text references r=0.15 illustratively [PAGE 18] but provides no sensitivity analysis across r, so the claimed "steepness" is conditional on an arbitrary threshold. Second, normalizing every curve by the value of the first pick [PAGE 17] is a scale choice with no decision-theoretic justification; it preserves ordinality but obscures cardinal tradeoffs. Third, second-contract APY cap percentage is used as a performance proxy despite known measurement error from contract deferrals, leadership intangibles, and position scarcity [PAGE 20]. Fourth, the model explicitly does not adjust for position [PAGE 20], yet a quarterback’s elite threshold and marginal Super Bowl win probability differ structurally from a linebacker’s. Fifth, the inference that GMs "value eliteness exponentially" is a reverse-engineered utility rationalization; observed trades could reflect transaction costs, roster constraints, or correlated errors rather than a coherent nonlinear value function. Finally, the beta regression assumes Y|x~Beta(µ(x),ϕ(x)) with ϕ(x)=exp(γ₀+γ₁x); if γ₁ approaches zero or the data near y=0 or y=1 are sparse, the precision parameter and variance formula Var(Y|x)=µ(x)(1−µ(x))/(1+ϕ(x)) become numerically unstable, and the density collapses to a spike near zero for late picks [PAGE 11-12], which may overstate the worthlessness of Day 3 capital.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal statistical operators from Zilberman & Brill (2024):

Let draft position be x∈{1,...,N} (ordinal, N≈256 across seven rounds) and let player performance outcome Y denote second-contract compensation as a percentage of the salary cap (APY cap percentage), so Y∈[0,1] in dimensionless cap-share units [PAGE 4, PAGE 12].

Beta regression conditional density [PAGE 12]:
Y | x ~ Beta(µ(x), ϕ(x))

Mean–precision parameterization mapping to traditional Beta shape parameters [PAGE 12]:
shape₁ = µ · ϕ
shape₂ = (1 − µ) · ϕ

Conditional first moment [PAGE 12]:
E[Y | x] = µ(x)

Conditional second central moment [PAGE 12]:
Var(Y | x) = µ(x) · (1 − µ(x)) / (1 + ϕ(x))

Conditional mean submodel via spline basis x~ [PAGE 12]:
µ(x) = logistic(x~ · β)

Conditional precision submodel [PAGE 12]:
ϕ(x) = exp(γ₀ + γ₁ · x)

Estimation: maximum likelihood via the betareg package in R (Zeileis, v3.1-4) [PAGE 12].

Draft value curve under a general value function v [PAGE 16]:
Value(x) ∝ E[v(Y) | x], x = draft position, Y = performance outcome, v = transformation of performance value.

Linear (traditional) value function [PAGE 16]:
v(y) = y → Value_EV(x) = E[Y | x] = µ(x)

Right-tail / elite indicator value function [PAGE 16-17]:
v(y) = 1{y > r}, where r is the elite cap-percentage cutoff [PAGE 17]
Value_elite(x) = E[1{Y > r} | x] = P(Y > r | x) [PAGE 17]

Normalization [PAGE 17]:
Each curve is divided by its value at the first pick so that Value(1) = 1.

Page citations and verbatim anchors:
- [PAGE 5]: "Both of these draft value curves are conditional mean curves – they consider the average outcome of a drafted player given the draft position."
- [PAGE 9]: "We see that both expected value and variance decays convexly across the draft."
- [PAGE 10]: "Because both the mean and variance of performance decays convexly across the draft... it makes sense that right tail draft value curves are so steep."
- [PAGE 12]: "We use beta regression to model the conditional density since the outcome variable lies in [0,1] and the densities look like beta densities."
- [PAGE 18]: "The more heavily [v] values eliteness, the steeper its draft value curve becomes."
- [PAGE 20]: "Finally, our beta regression is a simplified model, and it doesn't adjust for position."

Singularity / breakdown regimes:
1. Boundary degeneracy: as µ(x) → 0 for late-round picks, the Beta density morphs into a spike near zero [PAGE 11], making P(Y>r|x) numerically indistinguishable from zero for any fixed r>0.
2. Precision collapse: if ϕ(x) → 0 (γ₁ very negative), Var(Y|x) → µ(x)(1−µ(x)), maximizing dispersion; if ϕ(x) is misspecified, tail probability inference is unstable.
3. Threshold arbitrariness: no identified r from the model; varying r changes curve steepness without a likelihood-based selection criterion [PAGE 18].
4. Position non-invariance: a single (µ,ϕ) across positions violates positional heterogeneity in elite production functions [PAGE 20].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage is three-generational. Generation 1: the Jimmy Johnson chart (1990s Dallas Cowboys), built by GM Mike McCoy on intuition rather than mathematics; it presumes a fair trade when the sum of point values on each side is equal [PAGE 3]. Generation 2: Massey & Thaler (2013), "The Loser’s Curse," which replaced intuition with statistical modeling, mapping first-contract performance categories to second-contract compensation and fitting spline regressions for expected performance and surplus value [PAGE 4]. Generation 3: post-2013 discourse using Pro Football Focus WAR and Chase Stuart’s Approximate Value (AV), all still expected-value curves [PAGE 5]. Zilberman & Brill (2024) constitute Generation 4 by augmenting the conditional mean with the conditional variance and fitting a Beta regression for the full conditional density [PAGE 12], then deriving nonlinear draft value curves from right-tail probabilities [PAGE 16-18].

Multi-week traps embedded in this lineage: (a) the "Loser’s Curse" itself—teams overvalue early picks in expected-value terms and trade away future capital for marginal mean gains while ignoring right-tail scarcity [PAGE 4, PAGE 10]; (b) recency anchoring after the 2021 49ers–Dolphins Trey Lance trade, where three first-round picks were exchanged for the third overall selection [PAGE 3], causing league-wide overcorrection toward either aggressive trading up or rigid chart adherence; (c) the multi-week draft cycle in which GMs regress to habit under clock pressure, abandoning beta-regression tail calculations for heuristic point charts during the actual selection window. The paper explicitly notes team-specific heterogeneity: the 2023 Chiefs (Mahomes, Kelce, Jones) may need only average players, whereas the 2023 Bears have little Super Bowl hope without an elite player [PAGE 19], implying that a single market-implied steepness parameter cannot hold across roster states or across the weeks of free agency, training camp, and in-season injury attrition that alter a team’s marginal value of eliteness.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: When draft-night clock pressure mounts, GMs habitually regress from the paper’s variance-aware, eliteness-steep value function back to the linear expected-value curve or even the Johnson point chart [PAGE 3, PAGENULL], because the beta-regression tail probability P(Y>r|x) requires real-time computation of µ(x) and ϕ(x) that is cognitively unavailable under a 10-minute pick clock. Counter-trap: if a subset of teams systematically adopts steep right-tail value curves and overbids for early picks based on inflated P(Y>r|x), they create an arbitrage in mid-round capital; patient teams exploiting the convex decay of variance can accumulate more total expected elite probability per unit of traded capital by acquiring multiple later picks whose aggregate right-tail mass exceeds a single overpriced early pick. Clock interaction: the model is static (ex ante draft position only) and lacks an in-season updating mechanism; as injuries and depth-chart shocks arrive week by week, a team’s optimal r cutoff shifts endogenously, but the paper’s value curve remains fixed at the pre-draft cutoff, generating a theory-of-mind mismatch where Team A believes Team B values eliteness exponentially while Team B is actually risk-averse because it already holds an elite cornerstone [PAGE 19]. Recursive depth: Team A drafts assuming Team B uses a steep eliteness curve; Team B, knowing Team A will overpay for early picks, trades down repeatedly; Team A’s recursive model must therefore embed a belief distribution over Team B’s r cutoff, not a point estimate, or it will systematically overpay for top-10 capital.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The draft is a non-weather event (held indoors), so atmospheric vetoes do not apply to draft-night trade execution itself [PAGE 2]. However, player-level physical durability is unmodeled: rookie contracts are described as valuable because players "haven’t yet experienced the wear and tear of the NFL" [PAGE 2], yet the APY cap percentage outcome Y does not adjust for injury history, snap-count volatility, or biomechanical failure modes. A first-round pick with high µ(x) but high injury risk can have its ex post value vetoed by a torn ACL, rendering the ex ante Beta density [PAGE 12] misspecified. Biomechanical layer: position-specific collision load and recovery timelines are ignored because the model does not adjust for position [PAGE 20]; an elite edge rusher and an elite long snapper have different Super Bowl win-probability gradients but enter the same APY cap percentage scaling. Weather layer: irrelevant to the draft transaction but relevant to player evaluation (e.g., outdoor pro-day performance in cold weather), creating an information-layer veto that the historical dataset cannot correct. Veto proof conditions: The model’s claim that early picks are more valuable holds only if (i) second-contract APY is an unbiased proxy for on-field performance, (ii) contract deferrals and structuring do not systematically distort gross APY [PAGE 20], and (iii) the team’s objective is Super Bowl win probability rather than playoff berth or regular-season wins [PAGE 6]. Any violation voids the eliteness-steepness inference.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Established elite quarterback roster. Counterfactual: A team already holding an elite quarterback (e.g., a Mahomes-type) holds the first overall pick. The paper’s universal eliteness curve implies steep value for early picks because P(Y>r|x) is maximized at low x [PAGE 17-18]. Veto: team-specific marginal utility of eliteness is flat at the quarterback position [PAGE 19]; the team should use a shallow expected-value curve and trade down. Verifiable prediction: The team will trade the first pick for multiple Day 2 picks rather than selecting a non-quarterback at a high cap-percentage price, violating the model’s implied monotonic steepness.

Scenario 2 — Late-round precision collapse. Counterfactual: A Day 3 pick at x>200 where the fitted density has morphed into a spike near zero [PAGE 11]. Veto: under the beta regression, P(Y>r|x) → 0 for any r>0, implying zero draft value, yet undrafted and late-round players occasionally become starters or elite contributors. Verifiable prediction: Observed trades involving late-round picks will exhibit nonzero positive clearing prices even when the model assigns approximate zero value, falsifying the claim that only early picks possess substantial elite probability.

Scenario 3 — Position-blind elite threshold. Counterfactual: Applying a single cap-percentage cutoff r across all positions [PAGE 17] when quarterback elite production has a higher Super Bowl win-probability gradient than non-quarterback elite production. Veto: the model omits position adjustment [PAGE 20], so quarterback trades are systematically mispriced relative to the model’s fair-value frontier. Verifiable prediction: Quarterback trade packages will deviate systematically from model-implied fair value—specifically, quarterbacks will command steeper effective value curves than defensive backs at identical draft positions—because r and the win-probability transform are position-specific parameters not identified in the pooled beta regression.
</RLVR_COUNTERFACTUAL_VETOES>