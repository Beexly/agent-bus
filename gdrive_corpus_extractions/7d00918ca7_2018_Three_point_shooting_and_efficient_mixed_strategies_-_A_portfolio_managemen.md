---
source: "2018 Three point shooting and efficient mixed strategies - A portfolio management approach - Mark Fichman and John O’Brien.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 24
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5030
---

<NATIVE_REASONING>
The user wants a deep reasoning output based on the provided source text (Fichman & O'Brien 2018 paper on 3-point shooting and efficient mixed strategies). I need to produce all five XML sections:

1. THINK_TRACE (>=400 words) - Deep multi-hop derivation & gray-zone audit
2. SOURCE_OPERATORS_AND_EQUATIONS - Formal LaTeX, units, page citations, breakdown
3. RETROCAUSAL_GENEALOGY - Historical/scientific lineage & multi-week traps
4. RECURSIVE_THEORY_OF_MIND - Crisis habit regression vs counter-trap vs clock
5. CROSS_LAYER_VETO_ADJUDICATION - Physical/biomechanical/weather veto proof
6. RLVR_COUNTERFACTUAL_VETOES - 3 verifiable RLVR veto scenarios + predictions

Wait, the user listed exact XML sections:
<THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>

That's 6 sections, though the prompt says "across these exact XML sections" listing 6 tags but the intro said ">= 1,000-WORD DEPTH across these exact XML sections:". Wait, looking carefully:

<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

So 6 sections. Total >=1000 words. THINK_TRACE alone >=400 words. So I need substantial content in each.

Constraints:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.

The source text has page markers: 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120. I should cite [PAGE 107], [PAGE 108], etc. The text provided is a markdown extraction with page numbers interspersed. I need to map content to pages as best as possible.

Let me map content:

Page 107: Abstract, intro beginning, 3.05% to 28.4%, footnote 1 about Celtics.
Page 108: Fig 1 text, continued intro, variance discussion, Fig 2 text, Fig 3 text, correlation discussion.
Page 109: Introduction continued, risk aversion discussion, golfers/football coaches, section 2 begins, economic analysis overview.
Page 110: Section 2.1 continued, 4-tuple definitions, section 2.2 offensive investments.
Page 111: Section 2.2 continued, rule changes 1994-97, covariance, Fig 3, section 2.3 identifying efficient mixed strategy, equation (1) start.
Page 112: Equation (1) details, variance formula, CLT, p*(1-p)/n, Pearson r, covariance rσ2σ3, solution, individual team level, CAPM/SML.
Page 113: SML definition, betas, example Miami vs Orlando 2013, SR values, SML slopes.
Page 114: Interpretation of SR, SML slopes, section 3 Data, databasebasketball.com, nbastuffer.com.
Page 115: Section 4 application, results NBA whole, Fig 4, Fig 5, independence condition, section 4.1 results.
Page 116: Table 1 fractional regression, 2007-2014, coefficients.
Page 117: Table 1 continued, interpretation, section 4.2 out of sample post season, Table 2 playoff performance.
Page 118: Table 2 continued, section 4.3 linking to Oliver 2004 four factors, Table 3 correlation matrix (garbled).
Page 119: Table 3 continued/interpretation, correlations O-SML with EFG% 0.891, D-SML with opponent EFG% 0.817.
Page 120: Discussion and conclusions, references.

I need to be careful with verbatim quotes. I can quote short phrases exactly as they appear.

Let me draft each section.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Derive mean/variance portfolio optimization for 2 vs 3 point shots.
- μ = s^T ω p̄ = 2 α2 p2 + 3 α3 p3.
- σ = sqrt(ω^T Σ ω) with Σ entries: 4 α2² σ2² + 9 α3² σ3² + 12 α2 α3 r σ2 σ3. Wait, the paper says: σ = sqrt(4 α2² σ2² + 9 α3² σ3² + 12 α2 α3 r σ2 σ3). Actually text: "σ = �4 _α_<sup>2</sup> 2<sup>_σ_</sup> 2<sup>_2_</sup> 0 _._ 5 +9 _α_<sup>2</sup> 3<sup>_σ_</sup> 3<sup>2+ 12</sup><sup>_α_2</sup><sup>_α_3</sup><sup>_rσ_2</sup><sup>_σ_3</sup> �". This is garbled but means σ = sqrt(4 α2² σ2² + 9 α3² σ3² + 12 α2 α3 r σ2 σ3) where σ2, σ3 are standard deviations? Actually they say variance of p is p(1-p)/n. Let's parse: For 2- and 3-point shots, portfolio volatility: σ = sqrt(4 α2² σ2² + 9 α3² σ3² + 12 α2 α3 r σ2 σ3). Here 4=2², 9=3², 12=2*2*3. So σ2 and σ3 are standard deviations of point outcomes per shot? Variance of points from a 2-point shot: if success prob p2, points = 2 with prob p2, 0 with prob 1-p2. Mean = 2p2. Variance = 4 p2 (1-p2). So σ2² = 4 p2 (1-p2)? But the paper seems to treat σ2 as std dev of probability? Let's see: "variance of p is normally distributed and equal to p*(1-p)/n". Then they compute covariance r σ2 σ3. The formula in text: "4 equals 2 points squared, 9 equals 3-points squared and 12 is 2*2*3 to cover the off diagonal terms." So the volatility formula uses σ2 and σ3 as standard deviations of shot-type points? Actually if points per shot are Bernoulli scaled, variance of 2-point shot points = 4 p2 (1-p2), so σ2 = 2 sqrt(p2(1-p2)). Similarly σ3 = 3 sqrt(p3(1-p3)). Then portfolio variance = α2² σ2² + α3² σ3² + 2 α2 α3 cov = α2² (4 p2(1-p2)) + α3² (9 p3(1-p3)) + 2 α2 α3 r (2 sqrt(p2(1-p2))) (3 sqrt(p3(1-p3))) = 4 α2² p2(1-p2) + 9 α3² p3(1-p3) + 12 α2 α3 r sqrt(p2(1-p2) p3(1-p3)). The paper's formula writes σ2 σ3 where σ2, σ3 might be std devs of probabilities p2, p3 estimated as sqrt(p(1-p)/n)? Let's check: They say "variance of p is ... p*(1-p)/n". Then "covariance is then defined as rσ2 σ3". If σ2 = std dev of p2 estimate = sqrt(p2(1-p2)/n2), then portfolio volatility of expected points? Hmm. The paper's notation is a bit loose. I should present the formal LaTeX as given, note the interpretation, and identify breakdown regimes: n → small (CLT fails), r → ±1 (covariance matrix singular), p → 0 or 1 (variance vanishes), α2 + α3 = 1 constraint, αi ≥ 0 (no shorting shots), Sharpe ratio denominator σ → 0 (division by zero, risk-free rate = 0 origin), SML slope singular when offensive and defensive variances collapse.

Gray-zone audit: The paper treats shot outcomes as iid Bernoulli within a season, ignores shot clock, defender adjustment, spatial location (corner vs above break), player fatigue, game state (score, time remaining), and hot hand. It aggregates across possessions but says they are not asking per-possession choice. This creates an ecological fallacy risk: team-season efficient mix may not map to game-level possession decisions. Also defensive end: they treat defense as giving up shot types, but defense can influence opponent's shot type distribution (strategic substitution), which is a simultaneous game not captured by a passive portfolio. Correlation between 2 and 3 point made shots is negative (Fig 3), which affects diversification. The 1994-97 line change is a natural experiment showing immediate response to mean/variance shifts, validating MPT comparative statics.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
List variables:
- α2, α3: dimensionless proportions, α2 + α3 = 1, αi ∈ [0,1]. [PAGE 111]
- p2, p3: probabilities of successful shot, unitless [0,1]. Estimated from n shots; Var(p̂) = p(1-p)/n. [PAGE 112]
- s^T = [2, 3] points per made shot. [PAGE 111]
- μ = s^T ω p̄ = 2 α2 p2 + 3 α3 p3. Expected points per shot attempt (points/attempt). [PAGE 111]
- Σ: variance-covariance matrix of shot type points. Units: points².
- σ = sqrt(ω^T Σ ω) = sqrt(4 α2² σ2² + 9 α3² σ3² + 12 α2 α3 r σ2 σ3). Standard deviation of points per attempt (points). [PAGE 111]
- Sharpe Ratio SR = μ / σ. Units: 1/sqrt(points)? Actually points/points = dimensionless if σ in points, but paper treats as expected points per unit risk. [PAGE 110]
- Optimization: max_{ω} SR subject to α2 + α3 = 1, αi ≥ 0. [PAGE 111]
- CAPM/Shot Market Line: E(ρ_j) = β_j E(ρ_M) (risk-free rate = 0). β_j = Cov(ρ_j, ρ_M) / Var(ρ_M). [PAGE 112]
- Offensive 4-tuple: (SR, β2, β3, slope of SML). Defensive 4-tuple analogous. [PAGE 110]
- SML slope = [E(ρ_3) - E(ρ_2)] / (β_3 - β_2) or from regression. Units: points per beta unit. [PAGE 113]
- Correlation r: Pearson product-moment between team-level 2pt and 3pt expected points. Range -1 to 1. Fig 3 shows negative correlation. [PAGE 111]
- Table 1: fractional regression (Papke-Wooldridge 1996, logit link) predicting win % in [0,1]. N=240 team-seasons 2007-2014. Pseudo-R² up to 0.913 (2009). [PAGE 115-116]
- Table 2: multilevel logit for home win and multilevel linear for point differential, 670 games, 2007-2014 playoffs. Wald χ² = 50.35 and 77.92. [PAGE 116-117]
- Table 3: correlations. O-SML vs EFG% = 0.891; D-SML vs opponent EFG% = 0.817; D-SML vs defensive rebound % = -0.404; D-SR vs defensive rebound % = -0.250. [PAGE 118-119]

Breakdown regimes:
- CLT requires n large per team-season; early seasons n=22 teams, small n per shot type may violate normality.
- If σ → 0 (perfect shooting), SR → ∞, optimization singular.
- If r = ±1, covariance matrix singular, no unique diversification benefit.
- If p2 = p3 = 0 or 1, variance zero, mean-variance collapses.
- No short-selling constraint αi ≥ 0; if unconstrained, could imply negative shot proportions (nonsensical).
- Defensive SML: slope interpretation reverses because points given up; higher defensive SML means opponent gets more expected points per risk (weaker defense). [PAGE 113]

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Markowitz 1952 portfolio selection [PAGE 120 references]. Sharpe 1964 CAPM. Bodie et al. 2013. Elton & Gruber 1995.
- Applied to basketball: 3-point line introduced 1979 [PAGE 107]. Data 1979-2014 [PAGE 114].
- Rule changes: shot clock 1954 (79.5 → 93.1 ppg) [PAGE 107]. 3-point line moved 1994-97 (22 ft uniform then back to 23'9") [PAGE 110].
- Multi-week traps: The paper's season-long aggregation creates a "multi-week trap" if one assumes the efficient mix is static across a playoff series. Opponents adjust defensively within a series (multi-week adaptation), making pre-computed EMS ex post exploitable. The negative correlation between shot types (Fig 3) means defenses can crowd one line and suppress the other, but the paper's static covariance r estimated across teams may not hold within a specific matchup. The "learning curve" (post-1995 strategy driver) implies coefficients drift over weeks/months; using 2007-2014 pooled data for playoff prediction assumes stationarity across a decade of rule/strategy evolution, which is a trap if the 2014-15 Curry era changed the mean-variance frontier after the sample ends.
- Historical lineage: Romer 2006 (4th down risk aversion), Pope & Schweitzer 2011 (loss aversion in golf), Oliver 2004 four factors, Goldman & Rao, Skinner 2012 shot selection. [PAGE 109, 117, 120]

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Under playoff pressure (best-of-seven, elimination games), coaches regress to familiar shot mixes rather than the season EMS. Miami 2013 (80.48% win) vs Orlando (24.39%) [PAGE 112]: Miami had higher offensive SR (16.33 vs 13.34) and steeper offensive SML (1.03 vs 0.91). In crisis, high-SRM teams may revert to high-variance 3-point reliance if their stars are "hot," creating a recursive trap: defense anticipates the regression, crowds the 3-line, forcing inefficient 2-point attempts.
- Counter-trap: If a team knows the opponent will regress to 2-point "safe" shots under pressure, the defense can over-protect the paint, leaving the 3-line open. The team that recognizes this second-order belief can exploit by taking the rationally efficient 3s that the opponent's defensive regression vacated. This is the counter-trap: metastrategic layer where both teams model each other's crisis habit regression.
- Clock: The paper explicitly says they do not model per-possession choice; they model game/season mix [PAGE 109]. But playoff games have a shot clock and game clock. The "clock" introduces time-varying risk: trailing late increases variance preference (lottery-like 3s), leading early clock. The static EMS ignores clock state, so its predictions break down in end-of-game crisis possessions. Multi-week playoff series amplify this because adjustments occur between games (long clock) and within games (shot clock).

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical layer: Basketball court dimensions invariant; 3-point line distance 23'9" except corners 22 ft [PAGE 114]. This physical constraint sets the geometric variance: longer distance → higher release velocity variance → lower p3 and higher σ3. Weather is null (indoor arena, HVAC controlled), so no weather veto; altitude (Denver) could affect ball flight but NBA arenas are climate-controlled, negligible.
- Biomechanical layer: Shooting variance σ² = p(1-p) per attempt scaled by points². Human motor control imposes a lower bound on σ3 due to distance; fatigue over a game increases σ (not modeled). The paper assumes p estimated from season data is stationary within the season; fatigue and injury create non-stationarity, a veto if a key shooter is out.
- Veto proof: Any prediction using EMS must be vetoed if (a) the 3-point line is not at standard NBA distance (rule change), (b) a team's top 3-point shooter is unavailable (biomechanical personnel shock), (c) sample n per shot type is too small for CLT (early season), or (d) defensive scheme changes the covariance r mid-series (strategic veto). Since weather is constant indoors, no meteorological veto applies; the veto set is purely structural and personnel-based.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
Need 3 verifiable counterfactual veto scenarios. RLVR = Reinforcement Learning via Verifiable Rewards? Or just verifiable scenarios. I'll frame as counterfactual interventions that falsify the model's scope.
1. Veto: 1994-95 line shortening to 22 ft. Counterfactual: If the NBA had not moved the line, p3 mean would not have jumped and σ3 would not have dropped; the EMS would predict no surge in 3-point attempts. Verification: Fig 2/4 show immediate spike in 3-point % after 1994 [PAGE 110-111]. Prediction: seasons without the rule change (counterfactual) show flat 3-point share, violating the "skill-only" narrative.
2. Veto: Covariance singularity r → +1. Counterfactual: If 2-pt and 3-pt makes became perfectly correlated (e.g., all players shoot both equally well), diversification vanishes; EMS collapses to corner solution (100% of higher mean). Verification: Fig 3 shows r is negative, not +1, so diversification is real; if a future season shows r ≈ +1, the model's optimal mix breaks down. Prediction: a team with r > 0.8 between shot types should not hold an interior 2/3 mix; observed interior mix under high r falsifies mean-variance assumption.
3. Veto: Defensive endogeneity (Simultaneous game). Counterfactual: If defense can perfectly observe and crowd the offense's chosen mix before the game, the offense cannot unilaterally implement EMS; the Nash equilibrium differs from the portfolio optimum. Verification: The paper treats defensive shot distribution as exogenous ("shots given up") [PAGE 112-113], but playoff adjustments show defenses adapt [PAGE 116-117]. Prediction: in playoff series where a team radically changes its mix from regular season EMS, defensive SML slope should shift more than offensive SR; if offensive SR predicts playoff wins regardless of defensive adaptation, the endogeneity veto is falsified.

Also need to ensure total word count >=1000. THINK_TRACE >=400. Let's estimate. I'll write generously.

Need to avoid betting lines. No spreads, totals, moneylines, odds. I can mention "winning percentage", "point differential", "win probability"? The constraint says zero betting lines: never mention spreads, totals, moneylines, or odds. I should avoid "odds" entirely. I can mention probabilities (model probabilities) but not betting odds. Better to avoid the word "odds" completely. Use "likelihood", "probability", "winning percentage", "point differential".

No toy equations: no fake ratios like Force/Fatigue. All equations must be formal from the paper or standard math, with units and assumptions.

Cite exact [PAGE N] markers. Since source pages are provided in text (page numbers embedded), I'll cite them.

Verbatim quotes: include short exact quotes from source.

Let's write.

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

I need to be careful: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should include [PAGE 107] etc. and verbatim quotes like "the proportion of 3-point shots in this mixed strategy closely tracks risk and the change in expected points from 1979–2014" [PAGE 107].

Let's produce detailed content. Ensure no betting terms. Check for "odds" — avoid. "spreads" — avoid. "totals" — avoid. "moneylines" — avoid.

Word count target: THINK_TRACE ~500 words. Others ~200-250 each. Total ~1600-1800 words. Good.

Let's draft carefully.

THINK_TRACE content:
Start with the mean-variance setup. Define random variables. Derive portfolio expected points and variance. Discuss Sharpe ratio. Mention constraints. Gray zones: iid Bernoulli assumption, stationarity, defensive exogeneity, per-possession vs season aggregation, correlation estimation across teams vs within team, small n early seasons, risk-free rate zero. Use quotes.

I'll write now.

Need to make sure LaTeX is correct.
\mu = \mathbf{s}^{T}\boldsymbol{\omega}\,\bar{\mathbf{p}} = 2\alpha_2 p_2 + 3\alpha_3 p_3
\sigma = \sqrt{\boldsymbol{\omega}^{T}\boldsymbol{\Sigma}\boldsymbol{\omega}} = \sqrt{4\alpha_2^2\sigma_2^2 + 9\alpha_3^2\sigma_3^2 + 12\alpha_2\alpha_3 r\,\sigma_2\sigma_3}
SR = \mu/\sigma
\beta_j = \frac{\operatorname{Cov}(\rho_j,\rho_M)}{\operatorname{Var}(\rho_M)}
E(\rho_j) = \beta_j E(\rho_M)  (risk-free rate = 0)

Units: points, dimensionless proportions, points^2 for variance.

Breakdown: n small -> CLT fail; sigma=0 -> SR undefined; r=±1 -> covariance singular; alpha bounds.

Okay, proceed to final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper frames each NBA team's shot selection as a mean/variance portfolio over two risky assets: the 2-point shot and the 3-point shot. The derivation proceeds in three hops. Hop 1 defines the random payoff per attempt. For shot type j ∈ {2,3}, a made shot returns j points with probability p_j and zero otherwise, so the conditional mean is j·p_j and the per-attempt variance is j²·p_j(1−p_j). The portfolio expected points per attempt is μ = sᵀω p̄ = 2α₂p₂ + 3α₃p₃ [PAGE 111], where α₂+α₃ = 1, α_i ∈ [0,1] (no shorting of shot types), and sᵀ = [2,3] points. Hop 2 constructs portfolio volatility. Treating each team as an observation within a season, the authors estimate the Pearson correlation r between 2-point and 3-point expected points across teams, then define covariance as rσ₂σ₃ [PAGE 112]. The resulting standard deviation is σ = √(ωᵀΣω) = √(4α₂²σ₂² + 9α₃²σ₃² + 12α₂α₃ r σ₂σ₃), where the coefficients 4, 9, and 12 equal 2², 3², and 2·2·3 respectively [PAGE 111]. Hop 3 maximizes the Sharpe ratio SR = μ/σ subject to the weight constraints, yielding the efficient mixed strategy (EMS) [PAGE 110–111]. Because the basketball risk-free rate is zero, the Shot Market Line (SML) passes through the origin: E(ρ_j) = β_j E(ρ_M), with β_j = Cov(ρ_j,ρ_M)/Var(ρ_M) [PAGE 112].

Gray-zone audit. The authors explicitly state they are not optimizing any single possession but rather "over a series of possessions such as a game or a season" [PAGE 109]. This creates an aggregation gray zone: a season-level EMS need not be implementable possession-by-possession because defenses adjust within games. The estimator Var(p̂) = p(1−p)/n relies on the central limit theorem over large n [PAGE 112], yet early NBA seasons had only 22 teams and modest attempt counts per team, so small-n regimes violate the normality assumption and inflate estimation error in σ₂, σ₃, and r. The negative correlation plotted in Fig. 3 [PAGE 108–111] is treated as a stable exogenous input, but it is itself endogenous to defensive crowding: if a defense collapses to the paint, 2-point makes fall while open 3-point makes rise, mechanically driving r negative and making the EMS appear more diversified than it would be under a fixed defensive scheme. The 1994–97 line relocation provides a natural experiment: when the line moved to a uniform 22 ft, variance fell and expected points rose, and teams "immediately started shooting significantly more 3-point shots" [PAGE 110]; when the line moved back, attempts dropped. This validates comparative statics but also exposes a trap: the EMS parameters are not structural deep parameters; they shift discretely with rule changes and personnel acquisition, so pooling 2007–2014 playoff games assumes stationarity across a decade in which the 3-point frontier was still evolving (Curry-era accuracy vs. Dell Curry era) [PAGE 114–117]. Finally, the model omits shot-clock state, score differential, fatigue, and location (corner vs. above-the-break), all of which alter p_j and σ_j mid-game; therefore any playoff prediction that ignores these state variables commits a context-dropping error.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and units, with page citations.

Variables:
- α₂, α₃: dimensionless shot-type weights, proportions of 2-point and 3-point attempts; constraint α₂ + α₃ = 1, α_i ≥ 0 [PAGE 111].
- p₂, p₃: probabilities of successful shot, unitless [0,1]; estimated from n attempts; sampling variance Var(p̂) = p(1−p)/n under CLT [PAGE 112].
- sᵀ = [2, 3]: points per made shot; unit points [PAGE 111].
- μ: expected points per attempt from the mixed strategy; μ = 2α₂p₂ + 3α₃p₃; unit points/attempt [PAGE 111].
- Σ: variance–covariance matrix of shot-type point payoffs; unit points² [PAGE 111].
- σ: portfolio standard deviation of points per attempt; σ = √(4α₂²σ₂² + 9α₃²σ₃² + 12α₂α₃ r σ₂σ₃); unit points [PAGE 111]. Here σ₂ = 2√(p₂(1−p₂)) and σ₃ = 3√(p₃(1−p₃)) are implied by Bernoulli payoff scaling; the cross-term 12 = 2·2·3 captures off-diagonal covariance [PAGE 111].
- SR: Sharpe ratio = μ/σ; unit points per point of risk (dimensionless risk-price) [PAGE 110].
- r: Pearson product-moment correlation between team-level 2-point and 3-point expected points; unitless [−1,1]; Fig. 3 shows pronounced negative correlation [PAGE 108–111].
- β₂, β₃: shot-type betas relative to the efficient mixed strategy M; β_j = Cov(ρ_j,ρ_M)/Var(ρ_M); unitless [PAGE 112].
- Shot Market Line (SML): E(ρ_j) = β_j E(ρ_M), because the basketball risk-free rate equals zero (origin); slope measures expected points per unit of beta risk [PAGE 112–113].
- Team 4-tuples: offensive (SR, β₂, β₃, SML slope) and defensive (SR, β₂, β₃, SML slope) [PAGE 110].

Empirical models:
- Table 1: fractional-response regression (Papke–Wooldridge 1996, logit link) predicting regular-season winning percentage in [0,1]; 2007–2014, N = 240 team-seasons with year and team fixed effects; pseudo-R² = 0.833 pooled [PAGE 115–116]. Offensive SML coefficient = 9.81*** (pooled); defensive SML = −14.27*** (pooled) [PAGE 116].
- Table 2: multilevel playoff models, 670 games, 2007–2014; home-win logit Wald χ² = 50.35*** and point-differential linear model Wald χ² = 77.92*** [PAGE 116–117]. Home offensive SML = 11.268*** for point differential; road defensive SML = 14.616*** [PAGE 117].
- Table 3: correlation matrix linking economic variables to Oliver (2004) four factors; offensive SML vs. EFG% = 0.891; defensive SML vs. opponent EFG% = 0.817; defensive SML vs. defensive rebound % = −0.404; defensive SR vs. defensive rebound % = −0.250 [PAGE 118–119].

Exact singularity / breakdown regimes:
1. σ → 0 (perfect deterministic shooting, p_j ∈ {0,1}): SR = μ/0 undefined; optimization collapses.
2. r = +1 or r = −1: covariance matrix Σ singular; no unique interior diversification weight.
3. n small (early seasons, n = 22 teams): CLT approximation for p̂ invalid; σ₂, σ₃, r estimates unstable [PAGE 112].
4. Rule-change discontinuity (1994–97 line relocation): pre- and post-change means/variances are not drawn from the same distribution; pooled EMS is misspecified across the break [PAGE 110–111].
5. α_i = 0 corner solution: if mean–variance tradeoff favors one shot type exclusively, the no-shorting constraint binds and the interior EMS ceases to exist [PAGE 111].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage. The model descends directly from Markowitz (1952) portfolio selection and Sharpe (1964) CAPM, transmitted through Bodie, Kane & Marcus (2013) and Elton & Gruber (1995) [PAGE 120 references]. The basketball-specific triggering event is the NBA's 1979 introduction of the 3-point shot, after which 3-point share rose from 3.05% (1979–80) to 28.4% (2015–16) [PAGE 107]. An earlier rule analogue is the 1954 shot clock, which raised scoring from 79.5 to 93.1 points per game within one season [PAGE 107]. The 1994–97 three-point line relocation (to a uniform 22 ft, then back to 23 ft 9 in.) serves as the paper's quasi-experimental shift in mean and variance [PAGE 110].

Behavioral genealogy. The authors connect NBA risk aversion to Pope & Schweitzer (2011) on golfers' loss aversion and Romer (2006) on fourth-down conservatism in football [PAGE 109]. Unlike NFL coaches, who face few high-stakes decisions per season, NBA coaches face over 6,000 shot attempts per season, which the authors argue permits learning toward efficient risk management [PAGE 120].

Multi-week traps. Because the EMS is estimated at the team-season level, applying it to a best-of-seven playoff series creates a multi-week adaptation trap: defenses have days between games to observe the offense's mix and crowd the corresponding line, so the covariance r estimated across the regular season is not invariant to a specific playoff matchup. The paper acknowledges this only implicitly by treating defensive shots given up as a distribution rather than a strategic response [PAGE 112–113]. A second trap is parameter drift: the correlation between top accuracy and top attempts rose from r = 0.329 (1998–99) to r = 0.417 (2014–15) [PAGE 114], meaning the efficient frontier itself moved within the sample window; using fixed 2007–2014 coefficients to predict post-2014 games assumes a stationary frontier that the data reject. A third trap is the Oliver (2004) four-factor mapping: offensive SML tracks EFG% at 0.891 and defensive SML tracks opponent EFG% at 0.817 [PAGE 118–119], but EFG% is itself a function of the shot mix, so the economic variables and the accounting factors are jointly determined, not causally ordered.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression. In elimination or close-out games, coaches tend to regress to familiar, lower-variance habits rather than execute the season EMS. The paper's Miami–Orlando contrast illustrates the stakes: Miami's 2013 offensive SR was 16.33 versus Orlando's 13.34, and Miami's offensive SML slope was 1.03 versus Orlando's 0.91 [PAGE 112–113]. Under crisis pressure, a high-SRM team like Miami may abandon its optimal mix and over-rely on isolation 3-pointers from its stars, while a low-SRM team like Orlando may over-settle for contested 2-point shots in the paint. This first-order regression is exploitable.

Counter-trap. The second-order, recursive layer is that the defending team anticipates the regression. If Miami is expected to retreat to 2-point "safe" shots under pressure, Orlando's defense can over-protect the paint and concede the 3-point line. Miami, recognizing this, can counter by taking the efficiently priced 3s that Orlando's defensive regression vacated. The counter-trap is therefore metastrategic: each team models the other's crisis habit regression and selects the shot mix that exploits the anticipated misallocation. The paper's static SML cannot capture this recursion because it estimates betas and slopes from realized regular-season distributions, not from beliefs about beliefs [PAGE 110–113].

Clock. The paper explicitly restricts its scope to game- or season-level mixes and excludes per-possession clock state [PAGE 109]. Yet playoff games operate under a shot clock and game clock. Trailing late in a game raises the marginal value of variance: a team behind should prefer higher-variance 3-point attempts even if its season EMS favors more 2-pointers. Conversely, leading teams should reduce variance. Because the model has no clock state variable, its predictions systematically break down in end-of-game possessions and in series where game-to-game adjustments compress the adaptation timeline from weeks to minutes.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. The court geometry is invariant indoors: the 3-point line is 23 ft 9 in. from the basket except 22 ft in the corners, with the 1994–97 exception of a uniform 22 ft [PAGE 114]. This fixed distance sets the biomechanical variance floor: longer release distance increases velocity-angle error and lowers p₃ while raising σ₃. Weather is null—NBA arenas are climate-controlled—so no meteorological veto applies; altitude effects on ball flight are negligible under HVAC control and are not modeled.

Biomechanical layer. Shot success is Bernoulli with p_j estimated from season attempts; Var(p̂) = p(1−p)/n [PAGE 112]. Human motor control imposes a non-zero lower bound on σ₃ that cannot be diversified away by mixing with 2-pointers if r is insufficiently negative. Fatigue across a game and injury to primary shooters make p_j non-stationary within the season, violating the iid assumption and vetoing any prediction that treats the season EMS as fixed over 48 minutes.

Veto rules. Any inference from this model must be vetoed when: (a) the 3-point line distance is not the standard NBA configuration (rule-change regime); (b) a team's primary 3-point shooter is unavailable (personnel shock shifting p₃ and σ₃); (c) n per shot type is too small for the CLT (early-season or small-sample regime); (d) the defensive scheme changes r mid-series (strategic endogeneity); or (e) σ → 0 (perfect shooting) making SR undefined. Because the arena is indoors, weather never triggers a veto; the admissible veto set is purely structural, personnel-based, and statistical.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with predictions:

Veto 1 — Rule-change removal. Counterfactual: the NBA never moves the 3-point line to a uniform 22 ft in 1994–95. Under the paper's own comparative statics, p₃ mean does not jump and σ₃ does not fall, so the EMS predicts no surge in 3-point attempts. Verification: the paper documents that teams "immediately started shooting significantly more 3-point shots" after the line moved, and reduced attempts when it moved back [PAGE 110]; Fig. 4 and Fig. 5 show actual versus optimal 3-point proportions tracking the rule discontinuity [PAGE 114]. Prediction: in any counterfactual season without the line change, the 3-point share remains flat or declines, falsifying a "skill-only" explanation and confirming that mean/variance shifts, not merely accumulated skill, drive adoption.

Veto 2 — Covariance singularity. Counterfactual: 2-point and 3-point makes become perfectly correlated (r → +1) because all players shoot both types with identical conditional accuracy. Diversification value collapses to zero; the mean/variance problem has no interior solution and the optimal mix becomes a corner (100% of the higher-mean shot). Verification: Fig. 3 shows r is negative across 1979–2014, not near +1 [PAGE 108–111], so an interior mix is currently justified. Prediction: if a future team-season exhibits r > 0.85 while still maintaining an interior 2/3 mix, the mean/variance assumption is falsified; the observed mix would then be driven by non-CAPM factors (e.g., roster constraints) rather than risk–return optimization.

Veto 3 — Defensive endogeneity. Counterfactual: the defense observes the offense's chosen mix before the game and perfectly crowds the favored line, making the defensive shot distribution endogenous rather than exogenous. Verification: the paper treats defensive performance as shots given up from an estimated distribution and estimates defensive betas separately [PAGE 112–113], but playoff multilevel results show SML slopes predict outcomes across opponents [PAGE 116–117], implying defensive adaptation is real. Prediction: in playoff series where a team deviates sharply from its regular-season offensive EMS, the defensive SML slope of the opponent should shift more than the offensive SR; if offensive SR continues to predict wins regardless of defensive adjustment, the endogeneity veto is falsified and the offense's mix is treated as exogenously fixed.
</RLVR_COUNTERFACTUAL_VETOES>