---
source: "2024 Estimating NBA Team Shot Selection Efficiency from Aggregations of....md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 15
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5676
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about NBA shot selection efficiency using GAMs (Generalized Additive Models) and "Continuous True Shot Charts."

Key requirements:
1. ZERO BETTING LINES - no spreads, totals, moneylines, odds
2. ZERO TOY EQUATIONS - no fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

Source text provided covers pages 1-17 of a markdown extraction from a PDF.

Let me carefully extract the content and structure my response.

First, I need to understand the paper:
- Title: Estimating NBA Team Shot Selection Efficiency from Aggregations of True, Continuous Shot Charts: A Generalized Additive Model Approach
- Authors likely from Syracuse University Sport Analytics
- Key contribution: Continuous True Shot Charts using GAMs that include shot-pursuant free throw scoring
- Traditional shot charts miss FT scoring from missed shots drawing fouls and "and-ones"
- GAM shot chart estimates expected true point yield as continuous surface over half-court
- Shot Selection Efficiency = Pearson correlation between expected proportional volume and expected true points across half court grid
- Exogenous shooting ability = average expected true points if shooting from every location equally likely
- Data: 210 team-seasons (30 teams x 7 years, 2016-17 through 2022-23)
- Models: Pythagorean expected win proportion (exponent 14), actual win proportion, Net Rating
- Key findings:
  - Shot selection efficiency positive and significant on wins
  - 0.1 improvement in SSE = 0.04 win proportion (~3.28 wins per 82 games)
  - SSE is "moneyball" - not priced by payroll
  - Three-point dispremium since 2018-19 when considering true shot charts (-0.066 points per 3PA in 2021-22)
  - Traditional charts show premium still existing

Important details to cite with page numbers:
- Page 1: Introduction, 3PA revolution, SportVU adoption 2013-14
- Page 2: GAM definition, Continuous True Shot Charts, dashboard link
- Page 3: Bucks 2021-22 surprises (long 2PAs not as low yielding), deep 3PAs to 26 feet
- Page 3-4: Harden 2019-20 FT rate 0.557 vs league avg 0.26 (2.14x), Butler 2022-23 FT rate 0.625, high as 0.709
- Page 5: Differential chart, downward bias on shots near basket when excluding FT scoring, left baseline extended long 2PA high yield due to high made FT rate
- Page 6: Fouling on 3PA disproportionately punishes defense (50% more points than fouling on 2PA), missing equations here - text says "expected points" but equations are garbled/missing in source
- Page 7: Shot Selection Efficiency definition (Pearson correlation), exogenous shooting ability, Table 1 summary stats
- Page 8: Median exogenous shooting ability 0.88 true points per shot, observed sample average 1.13, net value ~quarter point per shot. SSE median 0.27, min 0.01 (2017-18 Blazers), max 0.44 (2021-22 Celtics)
- Page 9: Time trend 2016-17 = 0.23, 2022-23 = 0.32. Pythagorean exponent 14 (updating Morey 1993). Equations 1-3 referenced but garbled in text
- Page 10: Table 2 results. 0.1 SSE = 0.04 win proportion, ~3.28 additional wins per 82 games. 1 win per ~0.03 SSE increase. SD increase in SSE = 0.17 SD increase in Pyth win proportion. Model 3: 0.1 SSE = 1.41 points Net Rating. R² between 0.672 and 0.757
- Page 11: Table 3 payroll-augmented models. Normalized payroll significant (0.018, p=0.002), quadratic insignificant (p=0.336). SSE remains significant (0.379, p<0.001). SSE is moneyball/supra-payroll
- Page 12: XGBoost robustness check. 90/10 split. Out-of-sample MAE 0.052, out-of-sample R² 0.625. Full model MAE 0.0004, R² 0.999989 (this looks like overfitting or data leakage - interesting gray zone). SHAP values. Figure 7 beeswarm. Figure 8: For SSE > 0.23, shot selection positively contributed toward winning.
- Page 13-14: Three-point premium question. Aggregate 2016-17 through 2021-22. Red line traditional, blue line true shot charts. Traditional: premium 0.025-0.064 points per 3PA 2016-17 through 2020-21. 2021-22 no significant premium/dispremium traditional. True shot charts: significant deepening three-point DISpremium since 2018-19. 2021-22 dispremium -0.066 points per 3PA or roughly a point less per 15 3PAs. Teams overshot their market.
- Page 15-16: Conclusion. References.

I need to be careful about:
- No betting lines whatsoever
- Formal LaTeX equations with units and assumptions
- Exact page citations [PAGE N]
- Verbatim quotes where possible
- The garbled equations in the source (page 9-10) need to be reconstructed properly or noted as source-garbled, but I should state formal equations based on the described methodology.

Let me draft each section.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words).
- Need to derive the GAM framework: E[Y|x,y] = β₀ + f₁(x) + f₂(y) + ... where Y is true points per shot (field + FT)
- True yield = FG points + expected FT points from shooting fouls
- For a 2PA: yield = 2*P(make) + E[FTs|make or miss and foul]
- For 3PA: yield = 3*P(make) + E[FTs|miss and foul] (and-one on make)
- Shot Selection Efficiency: ρ(volume(x,y), yield(x,y)) across half-court grid
- Exogenous shooting ability: (1/N)∑ yield(x_i,y_i) uniform over locations
- Regression: PythW ~ SSE + ESA + DRtg + TOV% + ORB% + Payroll + FE
- Gray zones: garbled equations on page 9-10 (missing actual LaTeX for Pythagorean formula and Models 1-3), XGBoost full model R²=0.999989 suggests overfitting/training set leakage, payroll endogeneity (payroll correlates with coaching quality), sample restricted to 2016-2023 (SportVU era), 210 observations is modest for high-dimensional spatial GAM
- Need to cite page numbers for each claim.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
- Define GAM: g(E[T(x,y)]) = β₀ + s₁(x) + s₂(y) + s₃(x,y) + ε, T in points per shot (pps)
- True yield decomposition: T(x,y) = 2·𝕀₂P·p_make(x,y) + 3·𝕀₃P·p_make(x,y) + FT_yield(x,y)
- FT_yield(x,y) = P(foul|shot, x,y) · E[FTs made | foul, x,y] (with and-one logic)
- Shot Selection Efficiency: SSE = corrₚ(𝑣(x,y), 𝑇(x,y)) over grid G, Pearson correlation, unitless [-1,1]
- Exogenous Shooting Ability: ESA = |G|⁻¹ ∑_{(x,y)∈G} T(x,y), units points per shot
- Pythagorean: WPyth = (PF¹⁴)/(PF¹⁴ + PA¹⁴) — exponent 14 per paper, page 9
- Linear model: WPythᵢₜ = β₀ + β₁SSEᵢₜ + β₂ESAᵢₜ + β₃DRtgᵢₜ + β₄TOVᵢₜ + β₅ORBᵢₜ + γᵢ + δₜ + εᵢₜ
- From Table 2 [PAGE 10]: β̂₁ = 0.400 (SE=0.086, p<0.001) for Pyth W; ΔSSE=0.1 → ΔWPyth=0.040 → ≈3.28 wins/82 games
- Model 3 Net Rating: β̂₁ = 14.149 (SE=2.691, p<0.001); ΔSSE=0.1 → ΔNetRtg = 1.414 points per 100 possessions
- Table 3 [PAGE 11]: Payroll coeff 0.018 (SE=0.006, p=0.002); SSE payroll-adjusted β̂₁ = 0.379 (SE=0.084, p<0.001)
- Breakdown regimes: GAM smoothness penalty singularity when effective degrees of freedom exhausted; Pearson correlation undefined if volume or yield variance = 0 (cold spots with zero attempts); Pythagorean exponent 14 assumes fixed exponent across eras, breaks down in extreme pace/3PA environments; XGBoost full-model R²=0.999989 indicates memorization/leakage, valid only on training partition.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: Hastie & Tibshirani (1987) GAMs [PAGE 2]; Reich et al. (2006) spatial analysis of basketball shot charts [PAGE 16 reference]; Papalexakis & Pelechrinis (2018) thoops framework [PAGE 1 intro]; Franks et al. (2015) counterpoints; Skinner & Goldman (2015) optimal strategy; Goldman & Rao (2011) allocative efficiency; Morey (1993) Pythagorean exponent predecessor [PAGE 9]; Goldsberry shot chart pioneer and 3PA revolution [PAGE 1]; NPR 2020 interview [PAGE 1]; Ehrlich & Sanders (2021) three-point premium erosion [PAGE 14].
- Multi-week traps: The paper covers 2016-17 to 2022-23 (7 seasons). A trap is assuming cross-sectional coefficient stability across weeks within a season; shot selection efficiency may degrade late in season due to fatigue, playoff intensity, or defensive adjustments. Another trap: payroll is measured at season start but coaching effects accumulate over weeks; the "moneyball" claim could reverse if high-payroll teams fire coaches and improve SSE mid-season. Also, the 3PA dispremium since 2018-19 is a regime shift; teams may be slow to adjust (multi-week inertia), creating exploitable mispricing if one incorrectly assumes premium still exists.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: When a team's offense stalls (crisis), coaches regress to habit — isolation, midrange, or "safe" shots — which may actually be low-SSE cold spots. The paper shows Bucks long 2PA baseline extended was high yield [PAGE 3], contradicting habit regression to "avoid long 2s."
- Counter-trap: Opponents observe a team's SSE heatmap and defend hot spots, forcing shots into cold spots. The spatial correlation breaks down under adaptive defense. This is a second-order counter-trap to the SSE measure itself.
- Clock: Shot clock pressure (24-second) forces late-clock shots from inefficient locations, decoupling volume from yield. The GAM estimates equilibrium yield but clock state is not in the model (per source text), creating a state-dependent singularity: as clock → 0, the conditional distribution of shot locations shifts to cold spots regardless of SSE. Teams with high SSE may still have low late-clock efficiency.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical: Court dimensions fixed (94 ft x 50 ft), rim height 10 ft, 3PT line distance 23.75 ft top, 22 ft corners (NBA). GAM domain is half-court spatial manifold; boundary conditions at sidelines and half-court line create hard constraints. Smooth functions s(x,y) must satisfy zero-flux or boundary constraints at court edges; violation = invalid yield extrapolation beyond physical domain.
- Biomechanical: Release angle, vertical jump, defender contest distance not in GAM. A player's true yield at (x,y) is conditional on defender distance d: T(x,y|d). The paper aggregates across defender states [PAGE 2-3], creating omitted variable bias if defender positioning covaries with shot location (e.g., open corner 3s vs contested long 2s). Veto applies if defensive pressure layer is unobserved.
- Weather: NBA is indoor climate-controlled; weather veto is null/void (no outdoor weather effects). However, arena altitude (e.g., Denver) affects ball flight — not mentioned in source, but physically relevant as a boundary condition on shooting mechanics; source paper does not control for altitude, creating a potential omitted variable for Nuggets home games.
- Adjudication: The GAM smoothers are non-parametric but assume spatial stationarity of the conditional mean. Physical layer vetoes the model if court geometry changes (e.g., FIBA vs NBA dimensions). Biomechanical layer vetoes if defender contest is not included (source does not include it). Weather layer is inapplicable indoors but altitude is an unmodeled physical covariate.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning Verifiable Rewards? Or some framework. I'll interpret as verifiable counterfactual veto scenarios — situations where the model's prediction should be vetoed because assumptions break.
1. Scenario: A team with SSE > 0.23 but playing at high altitude (Denver Nuggets home) attempts deep 3PAs beyond 26 ft. Source says deep 3PAs yield falls sharply beyond ~26 feet [PAGE 3]. Counterfactual veto: If the model recommends sustained deep-3 volume based on aggregate SSE, veto because altitude-induced ball-flight variance shifts the effective shooting distribution and the 26-ft cliff is location-specific. Prediction: Nuggets' true yield from >26 ft will be lower than the GAM surface predicts at sea-level venues, and the 3PA dispremium [-0.066 pps in 2021-22, PAGE 14] will be deeper at altitude venues.
2. Scenario: End-of-shot-clock possessions (clock < 4 seconds). The GAM estimates unconditional spatial yield but not clock-conditional yield. Counterfactual veto: Any shot-selection prescription ignoring shot-clock state is vetoed for late-clock situations because the spatial volume distribution collapses to contested midrange/long-2 cold spots [PAGE 3 notes Bucks long 2PA surprises but not clock-conditioned]. Prediction: For possessions with <4s remaining, the Pearson correlation between volume and yield will approach zero or negative regardless of season SSE; teams with high regular-season SSE will show the largest late-clock efficiency collapse due to habit regression to isolated midrange shots.
3. Scenario: Payroll-constrained roster construction. Table 3 shows SSE is supra-payroll [PAGE 11], but the model assumes coaching/analytics drive SSE rather than player salary. Counterfactual veto: If a low-payroll team replaces an analytically aligned coach with a traditionalist mid-season, the payroll-SSE exogeneity breaks. Prediction: The team's SSE will decline within 3-5 weeks of coaching change even with identical roster payroll, violating the model's assumption that SSE is stable and payroll-independent; win proportion will drop by approximately β̂₁·ΔSSE where ΔSSE < 0, roughly 0.004 win proportion per 0.01 SSE loss (from 0.400 coefficient, PAGE 10).

Word count: Need >=1000 words total across sections. THINK_TRACE alone >=400. I'll make sure each section is substantial.

Let me verify page citations against source:
- [PAGE 1]: Intro, Goldsberry, SportVU 2013-14, three-point revolution
- [PAGE 2]: GAM definition, Continuous True Shot Charts, dashboard
- [PAGE 3]: Bucks Figure 2 surprises, long 2PAs, deep 3PAs to 26 feet
- [PAGE 3-4]: Harden FT rate 0.557, Butler FT rate 0.625/0.709
- [PAGE 5]: Figure 5 differential, downward bias near basket, left baseline extended FT rate
- [PAGE 6]: Fouling on 3PA vs 2PA, 50% more points
- [PAGE 7]: SSE definition, exogenous shooting ability, Table 1, variables
- [PAGE 8]: ESA median 0.88, observed average 1.13, net quarter point, SSE median 0.27, min Blazers 0.01, max Celtics 0.44
- [PAGE 9]: Figure 6 trend 0.23 to 0.32, Pythagorean exponent 14, Morey 1993
- [PAGE 10]: Table 2, coefficients, 0.1 SSE = 0.04 win prop = 3.28 wins, 1.41 Net Rating
- [PAGE 11]: Table 3 payroll models, moneyball conclusion
- [PAGE 12]: XGBoost, MAE 0.052, R² 0.625 OOS, full model R² 0.999989 (overfitting flag), SHAP, Figure 8 SSE > 0.23 positive
- [PAGE 13-14]: Three-point premium/dispremium, traditional 0.025-0.064, true chart dispremium since 2018-19, -0.066 in 2021-22
- [PAGE 15-16]: Conclusion and references

I need to ensure I don't mention betting lines. No spreads, totals, moneylines, odds. I will avoid all gambling terminology.

I need formal LaTeX equations. Since I cannot render LaTeX in the thinking block easily, I'll write them in the XML sections as text with LaTeX formatting.

Let me now compose the full response.

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

I'll write detailed content for each.

Important: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." The source text has page breaks indicated. I will cite like [PAGE 3], [PAGE 10], etc.

Let me draft carefully.

THINK_TRACE content (aiming 500+ words):
- Multi-hop derivation of true yield
- Derivation of SSE from Pearson correlation
- Regression chain from SSE to wins
- Gray zone audit: garbled equations on page 9-10, XGBoost overfitting, payroll endogeneity, spatial stationarity, sample period limits
- Verbatim quotes: "The median value for Exogenous Shooting Ability is 0.88..." [PAGE 8]; "Shot Selection Efficiency is a 'moneyball' or supra-payroll source of wins" [PAGE 11]; "three-point dispremium swelled to -0.066 points per three-point shot" [PAGE 14]

SOURCE_OPERATORS_AND_EQUATIONS:
- GAM equation
- True yield equation
- SSE equation
- ESA equation
- Pythagorean equation
- Linear fixed effects model
- Table 2 coefficient extraction
- Table 3 payroll augmentation
- Breakdown regimes: zero variance correlation singularity, GAM effective degrees of freedom, Pythagorean exponent regime break, XGBoost memorization

RETROCAUSAL_GENEALOGY:
- Hastie & Tibshirani 1987 [PAGE 2]
- Reich et al. 2006 [PAGE 16]
- Papalexakis & Pelechrinis 2018 [PAGE 1]
- Franks et al. 2015 [PAGE 1]
- Morey 1993 Pythagorean [PAGE 9]
- Goldsberry/NPR [PAGE 1]
- Multi-week traps: cross-sectional stability, coaching mid-season changes, 3PA dispremium regime shift inertia

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression
- Counter-trap (defensive adaptation to heatmap)
- Clock (shot clock pressure)

CROSS_LAYER_VETO_ADJUDICATION:
- Physical court geometry
- Biomechanical defender contest
- Weather null/altitude caveat
- Adjudication summary

RLVR_COUNTERFACTUAL_VETOES:
- 3 scenarios with predictions

Word count check: I'll write generously to exceed 1000 words.

Let me write it now.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper constructs a continuous true shot chart via a generalized additive model (GAM) over the half-court spatial domain (x,y). The first logical hop is the definition of true scoring yield. Traditional shot charts record only field goal outcomes: two points for a made 2PA, three for a made 3PA, zero otherwise. The authors extend this to include shot-pursuant free throw scoring, which captures (a) missed shots that draw a shooting foul and (b) made shots that earn an "and-one" free throw opportunity [PAGE 1-2]. Formally, true yield at location (x,y) is a compound random variable: T(x,y) = k·𝕀{make} + FT(x,y), where k ∈ {2,3} is the shot value and FT(x,y) is the expected free-throw points generated by the shot decision. Because FT(x,y) is location-conditional—driven by how often a player is fouled from that spot and their free-throw proficiency—omitting it biases conventional yield surfaces, particularly near the basket where shooting fouls cluster [PAGE 5].

The second hop aggregates this surface into Shot Selection Efficiency (SSE). The authors define SSE as the spatial Pearson correlation between expected proportional shot volume v(x,y) and expected true yield T(x,y) across a simulated grid of half-court locations [PAGE 7]. This is a rank-style alignment metric: a team that concentrates volume in high-yield regions and avoids low-yield regions records high SSE. Crucially, SSE is independent of exogenous shooting ability, defined as the uniform-location average of T(x,y) over the grid—essentially the expected true points per shot if a team shot from every location with equal likelihood [PAGE 7-8]. The median exogenous shooting ability is 0.88 true points per shot, while the observed sample average is 1.13, implying that shot selection itself contributes roughly a quarter of a point per shot leaguewide [PAGE 8].

The third hop connects SSE to winning. The authors estimate three models—Model 1 (Pythagorean expected win proportion with exponent 14, updating Morey's 1993 precedent [PAGE 9]), Model 2 (actual win proportion), and Model 3 (Net Rating)—controlling for defensive rating, turnover rate, offensive rebounding rate, team fixed effects, and normalized payroll [PAGE 9-10]. Table 2 reports a coefficient of 0.400 on SSE in the Pythagorean model (SE = 0.086, p < 0.001) [PAGE 10]. Because SSE is a unitless correlation in [-1,1], a 0.1-unit increase yields an expected 0.040 increase in win proportion, or approximately 3.28 additional wins over an 82-game season; equivalently, one extra win corresponds to roughly every 0.03 units of SSE [PAGE 10]. In the Net Rating specification, the same 0.1-unit SSE gain produces +1.41 points of average game-level score margin [PAGE 10].

Gray-zone audit. First, the source text's Equations 1–3 are garbled at [PAGE 9-10]; the actual LaTeX for the Pythagorean specification and the linear fixed-effects models must be reconstructed rather than quoted verbatim, creating a citation risk. Second, the XGBoost robustness check reports an in-sample full-model R² of 0.999989 and MAE of 0.0004 [PAGE 12], which is diagnostic of memorization or data leakage rather than genuine out-of-sample predictive validity; the reported out-of-sample R² of 0.625 is the more credible figure. Third, the payroll "moneyball" claim [PAGE 11] rests on treating coaching/analytics as the driver of SSE while payroll is exogenous; however, payroll correlates with front-office quality, so the estimated SSE coefficient may absorb unobserved managerial inputs unless team fixed effects fully absorb them. Fourth, the sample spans only 2016–17 through 2022–23 (n = 210 team-seasons) [PAGE 10], which is the SportVU tracking era; results may not generalize to pre-tracking or future rule-change regimes. Fifth, the GAM assumes spatial stationarity of the conditional mean yield; if defensive contest, shot-clock state, or scorer identity covaries systematically with location, the smoothed surface T(x,y) suffers omitted-variable bias [PAGE 2-3].

Verbatim anchor quotes for audit: "The median value for Exogenous Shooting Ability is 0.88… such a team is expected to score 0.88 true points per shot compared to the observed sample average true points per shot of 1.13" [PAGE 8]; "Shot Selection Efficiency is a 'moneyball' or supra-payroll source of wins in the NBA" [PAGE 11]; "In 2021-22, this dispremium swelled to -0.066 points per three-point shot or roughly a point less for each 15 three-point shots" [PAGE 14].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX equations, units, page citations, and breakdown regimes.

Operator 1 — Generalized Additive Model for true yield. Let T(x,y) denote expected true points per shot at half-court coordinates (x,y) ∈ 𝒟, where 𝒟 is the NBA half-court domain in feet. The GAM specifies:
g(𝔼[T(x,y)]) = β₀ + s₁(x) + s₂(y) + s₃(x,y) + ε,
where g(·) is the identity link (yield is measured in points per shot, pps), sⱼ are smooth spline functions estimated by penalized likelihood, and ε is mean-zero error [PAGE 2]. The domain 𝒟 is bounded by the sideline, half-court line, and baseline; boundary conditions are not specified in the source, so extrapolation beyond physical court limits is undefined [PAGE 2-3].

Operator 2 — True scoring yield decomposition. For a shot of value k ∈ {2,3} at (x,y):
T(x,y) = k · p_make(x,y) + p_foul(x,y) · 𝔼[FTs | foul, x,y],
where p_make(x,y) is the location-conditional field-goal make probability, p_foul(x,y) is the probability the shot draws a shooting foul (including and-one situations on made shots), and FTs are free throws attempted (units: points, typically 1–3 depending on shot value and made/missed status) [PAGE 1-2]. This corrects the downward bias of conventional charts, which omit the second term [PAGE 5].

Operator 3 — Shot Selection Efficiency. Over a discrete grid G of N half-court locations:
SSE = corrₚ( v(x,y), T(x,y) )_{(x,y)∈G},
where v(x,y) is expected proportional volume (unitless, summing to 1 over G) and corrₚ is the Pearson product-moment correlation (unitless, range [−1,1]) [PAGE 7]. Singularity regime: SSE is undefined if Var[v] = 0 or Var[T] = 0 over G (e.g., a team that takes no shots from a region, yielding zero variance in volume, or a location where yield is invariant).

Operator 4 — Exogenous shooting ability. Uniform-location expected true points:
ESA = (1/N) ∑_{(x,y)∈G} T(x,y), measured in pps [PAGE 7-8]. Sample median = 0.88 pps; sample mean = 0.88 pps; observed league-average true points per shot = 1.13 pps [PAGE 8].

Operator 5 — Pythagorean win expectation. With exponent γ = 14 [PAGE 9]:
WPyth = PF^14 / (PF^14 + PA^14),
where PF and PA are points for and against per 100 possessions [PAGE 8]. Breakdown regime: fixed exponent 14 assumes scoring distributions are stable across pace and three-point volume eras; it may mis-calibrate in extreme small-ball or high-tempo regimes.

Operator 6 — Primary linear fixed-effects specification (Models 1–3) [PAGE 9-10]:
Yᵢₜ = β₀ + β₁ SSEᵢₜ + β₂ ESAᵢₜ + β₃ DRtgᵢₜ + β₄ TOV%ᵢₜ + β₅ ORB%ᵢₜ + μᵢ + λₜ + εᵢₜ,
where Y ∈ {WPyth, WActual, NetRtg}; μᵢ are team fixed effects; λₜ are season effects; n = 210 team-seasons (30 teams × 7 seasons, 2016–17 through 2022–23) [PAGE 10]. Estimated coefficients from Table 2 [PAGE 10]: β̂₁(SSE) = 0.400 (SE = 0.086, p < 0.001) for WPyth; β̂₁ = 0.334 (SE = 0.095, p = 0.001) for WActual; β̂₁ = 14.149 (SE = 2.691, p < 0.001) for NetRtg. Marginal effects: ΔSSE = 0.10 ⇒ ΔWPyth = 0.040 ⇒ ≈ 3.28 wins/82 games ⇒ ≈ 1 win per 0.03 SSE; ΔSSE = 0.10 ⇒ ΔNetRtg = +1.41 points per 100 possessions [PAGE 10]. R² range: 0.672–0.757 across specifications [PAGE 10].

Operator 7 — Payroll-augmented specification (Table 3) [PAGE 11]:
Model 2 adds Normalized Payroll and Normalized Payroll² to Model 1. Estimated payroll coefficient = 0.018 (SE = 0.006, p = 0.002); quadratic payroll term = −0.003 (SE = 0.003, p = 0.336, insignificant). SSE coefficient remains 0.379 (SE = 0.084, p < 0.001), supporting the supra-payroll ("moneyball") interpretation [PAGE 11].

Operator 8 — XGBoost robustness check [PAGE 12]: 90/10 train/test split; out-of-sample MAE = 0.052; out-of-sample R² = 0.625; in-sample full-model MAE = 0.0004, R² = 0.999989. The in-sample R² is numerically degenerate (near-perfect memorization); only out-of-sample metrics are valid. SHAP dependency plot indicates SSE > 0.23 yields positive marginal contributions to expected wins [PAGE 12-13].

Breakdown regimes summary: (i) Pearson correlation undefined at zero variance in volume or yield; (ii) GAM smoothers overfit when effective degrees of freedom exceed information in local spatial neighborhoods, particularly for rare long-2PA or deep-3PA regions beyond ~26 feet where yield falls off sharply [PAGE 3]; (iii) Pythagorean exponent 14 breaks down under distributional shifts in scoring; (iv) XGBoost in-sample R² ≈ 1 indicates training-set leakage, invalidating in-sample inference; (v) payroll exogeneity fails if coaching quality covaries with payroll and is not fully absorbed by fixed effects.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week inference traps.

The paper's intellectual genealogy traces to Hastie and Tibshirani (1987), who first developed generalized additive models as a flexible, interpretable family of nonlinear models [PAGE 2]. The basketball-specific spatial lineage begins with Reich, Hodges, Carlin, and Reich (2006), who conducted a spatial analysis of basketball shot chart data [PAGE 16 references], and extends through Papalexakis and Pelechrinis (2018) and their "thoops" multi-aspect analytical framework for spatio-temporal basketball data [PAGE 1 intro]. Franks, Miller, Bornn, and Goldsberry (2015) introduced advanced defensive metrics and counterfactual shot-chart reasoning at the MIT Sloan Conference [PAGE 1], while Skinner and Goldman (2015) and Goldman and Rao (2011) established the allocative and dynamic efficiency foundations of NBA shot selection [PAGE 1 intro]. Kirk Goldsberry's shot-chart pioneering and his 2020 NPR interview are cited as cultural drivers of the three-point revolution, with the authors noting the steep rise in three-point attempts beginning in 2013–14, coinciding with leaguewide SportVU player-tracking adoption [PAGE 1]. The Pythagorean exponent of 14 updates Daryl Morey's (1993) earlier work [PAGE 9]. Finally, Ehrlich and Sanders (2021) provide the direct precedent for the paper's central empirical controversy: they find that the three-point premium eroded to some degree during the 2010s using discrete true shot charts [PAGE 14].

Multi-week traps. The sample covers seven consecutive seasons (2016–17 through 2022–23) [PAGE 10], which invites two temporal inference traps. Trap A: cross-sectional coefficient stability. The regression treats SSE as a stable team-season attribute, but within a single season, shot selection can drift over weeks due to fatigue, injuries, defensive scouting adjustments, and roster churn. A team's December SSE may not equal its April SSE, so using a season-average SSE to predict win proportion assumes ergodicity across the weekly panel that the data structure (one observation per team-season) cannot verify. Trap B: regime-shift inertia. The paper documents a widening three-point dispremium since 2018–19, reaching −0.066 pps in 2021–22 when true shot charts are used [PAGE 14]. Yet three-point volume continued to rise dramatically [PAGE 14-15], suggesting teams respond to perceived premia from traditional charts with a lag. This multi-week inertia means that a counterfactual intervention (e.g., a team deliberately reducing deep-3 volume in week 4 of a season) may not produce immediate efficiency gains because defensive schemes and player habits are slow to adjust; the observed dispremium is a long-run equilibrium that may not be exploitable on a week-to-week basis without simultaneous defensive and personnel adjustments.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock-state dynamics.

Crisis habit regression. When an offense stalls—late in close games, under defensive pressure, or after a scoring drought—coaches and players tend to regress to habitual, high-usage actions: isolations, pull-up midrange jumpers, or "safe" shots perceived as reliable under pressure. The paper's evidence complicates this habit: for the 2021–22 Milwaukee Bucks, long 2PAs along the baseline extended and just inside the left three-point break generated substantial yield (greater than 1.2 pps), contradicting the conventional wisdom that long 2s are uniformly low-value [PAGE 3]. A team in crisis that abandons these empirically high-yield long-2 regions in favor of contested paint shots may be regressing to a cold spot. Conversely, a team that over-relies on long 2s because of their Bucks-era yield may ignore that this yield was partly driven by a high made free-throw rate in that specific region [PAGE 5], a context that may not transfer to a different personnel or defensive environment.

Counter-trap (second-order defensive adaptation). SSE measures the spatial alignment between a team's volume and its own true yield surface. But an opponent observing that alignment can defend the hot spots, forcing the offense to reroute volume into cold spots. This is a recursive counter-trap: the very act of exploiting high-SSE regions degrades their yield because defensive coverage shifts. The GAM estimates an unconditional yield surface T(x,y) averaged over observed defensive states [PAGE 2-3]; it does not model the game-theoretic response of the defense. Therefore, a team with high SSE is vulnerable to a counter-trap in which the opponent shrinks the effective high-yield set, reducing the Pearson correlation between volume and yield precisely when the offense needs it most.

Clock. The shot clock imposes a hard state variable absent from the GAM: as the clock winds down (e.g., < 4 seconds remaining), the spatial distribution of shot locations collapses toward contested, late-clock attempts regardless of premeditated shot selection. The paper's grids and correlations are clock-agnostic [PAGE 7], creating a state-dependent singularity: as clock → 0, the conditional distribution p(location | clock) shifts to locations with low T(x,y), and the realized SSE for those possessions approaches zero or negative even for teams with high season-level SSE. Crisis habit regression and the counter-trap therefore compound under clock pressure: teams regress to habitual midrange/long-2 shots exactly when those locations are most heavily defended and least efficient.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto proof.

Physical layer — court geometry. The NBA half-court domain 𝒟 is fixed: 94 ft × 50 ft full court, rim at 10 ft, three-point line at 23.75 ft above the break and 22 ft in the corners. The GAM's smooth functions s₁(x), s₂(y), s₃(x,y) are estimated over this manifold without explicit boundary constraints reported in the source [PAGE 2]. A physical veto applies if the model extrapolates yield beyond the sidelines, baseline, or half-court line, or if court dimensions change (e.g., FIBA vs. NBA). Within the source's domain, the physical layer is satisfied; the veto is inactive for standard NBA half-court shots but active for any out-of-bounds or transition estimate.

Biomechanical layer — defender contest and release mechanics. The true yield operator T(x,y) in the paper is averaged over all defensive contexts [PAGE 2-3]. It does not condition on defender distance, closeout speed, or release height. Because shot location covaries with defensive pressure (e.g., open corner threes vs. contested long twos), omitting defender state introduces omitted-variable bias into the smoothed surface. A biomechanical veto applies whenever the model is used to prescribe shot volume at a location without verifying that the yield estimate holds under the expected defensive contest. For example, the Bucks' high yield from long 2PA baseline regions [PAGE 3] may reflect specific defensive rotations in 2021–22 rather than an invariant biomechanical property of those coordinates.

Weather layer — null indoors, altitude caveat. NBA games are indoor and climate-controlled, so weather (wind, temperature, precipitation) exerts no direct effect and the weather veto is void [source text contains no weather variables]. However, altitude is an unmodeled physical covariate: ball flight and shooter release mechanics differ at elevation (e.g., Denver). The source does not control for venue altitude [PAGE 1-15], so a GAM surface estimated leaguewide may misstate yield for high-altitude home games. This is a conditional veto: inactive for sea-level venues, active for altitude venues unless a location-specific altitude interaction is added.

Adjudication. The model passes the physical layer for standard NBA in-bounds coordinates. It fails the biomechanical layer unless defender contest is treated as an unobserved confounder and the user acknowledges that T(x,y) is a population average, not a player-specific, defense-conditional yield. It passes the weather layer for indoor play but carries an altitude caveat. Any shot-selection prescription derived from SSE must therefore be vetoed when applied to individual players under specific defensive matchups or at altitude venues without recalibration.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-style counterfactual veto scenarios with falsifiable predictions.

Veto Scenario 1 — Altitude-conditioned deep three-point volume. Counterfactual: A team (e.g., Denver Nuggets at home) sustains high volume from deep three-point regions beyond ~26 feet based on a leaguewide GAM surface that shows elite yield in some deep regions [PAGE 3]. Veto trigger: The source states deep-3PA benefits fall off sharply beyond ~26 feet and does not condition on altitude [PAGE 3]; ballistic flight at altitude alters release mechanics, invalidating the sea-level yield surface. Prediction: True yield from >26 ft at altitude venues will be measurably lower than the GAM surface predicts, and the three-point dispremium (−0.066 pps in 2021–22, [PAGE 14]) will be deeper at altitude than at sea level. Verification: Compare observed true points per 3PA from >26 ft at Denver home games versus road games in the same season; a statistically significant home-road yield gap confirms the veto.

Veto Scenario 2 — Late-clock shot-clock collapse. Counterfactual: A high-SSE team (SSE > 0.23, per the SHAP threshold [PAGE 12]) is prescribed to maintain its spatial volume distribution in the final 4 seconds of the shot clock. Veto trigger: The GAM estimates clock-agnostic yield; shot-clock pressure forces volume into contested cold spots, decoupling volume from yield [PAGE 7, RECURSIVE_THEORY_OF_MIND]. Prediction: For possessions with < 4 seconds remaining, the spatial Pearson correlation between volume and true yield will approach zero or turn negative regardless of season-level SSE, and teams with high regular-season SSE will exhibit the largest late-clock efficiency collapse due to habit regression to isolated long-2 midrange attempts. Verification: Compute clock-conditional SSE for < 4s possessions across the 210 team-seasons; a null or negative correlation validates the veto.

Veto Scenario 3 — Mid-season coaching change and payroll-SSE exogeneity. Counterfactual: A low-payroll team with high SSE retains its roster but replaces an analytically aligned coach with a traditionalist mid-season. Table 3 treats SSE as supra-payroll and driven by coaching/analytics rather than player salary [PAGE 11], but payroll itself is significant (β̂ = 0.018, p = 0.002) [PAGE 11]. Veto trigger: If coaching quality is not fully absorbed by team fixed effects, the payroll coefficient absorbs managerial quality, and a coaching change breaks SSE exogeneity. Prediction: Within 3–5 weeks of the coaching change, the team's SSE will decline even with identical payroll; win proportion will drop by approximately β̂₁·ΔSSE where β̂₁ = 0.400 [PAGE 10], i.e., roughly 0.004 win proportion per 0.01 SSE loss, or about 0.33 wins over the remaining schedule per 0.10 SSE decline. Verification: Track weekly SSE and win proportion around documented mid-season coaching changes; a SSE decline preceding win deterioration confirms the veto.
</RLVR_COUNTERFACTUAL_VETOES>