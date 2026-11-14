---
source: "2025 - Analyzing South American soccer team performance using distributional regression models - Rosa et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Journal of Quantitative Analysis in Sports/2025"
pages: 21
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3967
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about South American soccer team performance using distributional regression models. They've provided the full source text and want a detailed response with specific XML sections.

Key constraints:
1. ZERO BETTING LINES - never mention spreads, totals, moneylines, or odds
2. ZERO TOY EQUATIONS - state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words)</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions</RLVR_COUNTERFACTUAL_VETOES>

I need to be careful not to mention any betting terminology. The paper is about soccer performance analysis using GAMLSS.

Let me structure this carefully.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Need to analyze the paper's methodology, assumptions, potential issues. >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations from the paper, units, page citations. Need to cite [PAGE N] markers. The text provided has page markers like >2—, >3—, etc. Actually looking at the text, there are page indicators like "> **2 —**" which means page 2. I should cite these.

Key equations from paper:
1. Points ratio: Pts_ls / P*_ls where Ptls is total points, P* is max possible points
2. GAMLSS: g_k(θ_k) = η_k = X_k^T β_k + Σ h_kj(x_kj)
3. Beta distribution pdf: f(y; α, β) = y^(α-1)(1-y)^(β-1) / B(α, β)
   with α = μ(1-σ²)/σ², β = (1-μ)(1-σ²)/σ²
4. Logit-normal pdf
5. GAIC = -2l + κ×df
6. Logit(μ) equation (not fully shown but referenced as equation (4) area)
7. log(σ) = -4.560 + 0.761·assists + s_21(dribbles) + 0.782·saves + s_22(yellowcards) + s_23(shotsagainst)

Page citations: The text has page breaks marked. I need to reference [PAGE 2], [PAGE 3], etc. Let me map them:
- Page 1: Title/abstract/intro start
- Page 2: Intro continued
- Page 3: Dataset overview continued
- Page 4: Statistical modeling
- Page 5: Results, Table 2, Figure 1
- Page 6: Figure 2, Discussion 5.1
- Page 7: Figure 3, continued discussion
- Page 8: Discussion continued
- Page 9: Discussion 5.2 continued
- Page 10: Conclusions, References
- Page 11: References continued

Wait, looking at the source text markers:
"> **2 —**" appears early (after abstract/intro start)
"> **3 —**" appears mid dataset
"> **4 —**" appears before modeling section
"> **5 —**" appears results/table
"> **6 —**" appears figure 2/discussion
"> **7 —**" appears figure 3
"> **8 —**" appears discussion
"> **9 —**" appears discussion 5.2
"> **10 —**" appears conclusions
"> **11 —**" appears references

I should cite these as [PAGE 2] etc. based on the markers in the text.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Discuss GAMLSS lineage (Rigby & Stasinopoulos 2005), beta regression (Ferrari & Cribari-Neto 2004), previous soccer applications (Nakamura et al. 2019, Wang et al. 2024), and how this builds on that. Multi-week traps could refer to seasonal stability issues, small sample sizes (191 observations), per-match standardization.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is more abstract/metaphorical but should connect to how teams adapt (crisis habits), counter-strategies (counter-trap), and temporal dynamics (clock/match time, season progression).

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. The paper doesn't explicitly cover weather/biomechanics much, but mentions climatic conditions in discussion. I need to analyze what physical constraints might veto the statistical findings (e.g., red cards leading to numerical disadvantage is a physical/biomechanical constraint; goalkeeper saves relate to biomechanics; weather affects play but isn't in model).

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? I need to create 3 counterfactual scenarios where the model's predictions would be vetoed/broken, with verifiable conditions and predictions.

Word count: Need >=1000 words total across all sections, with THINK_TRACE >=400 words.

Let me write this carefully, ensuring no betting language. Avoid "odds", "spread", "moneyline", "total", "line", "bet", "wager", etc.

Let me draft:

THINK_TRACE: Deep analysis of GAMLSS implementation, distributional assumptions, per-match standardization, stepwise selection issues (Strategy A), AIC vs GAIC penalty κ=2, effective df vs nominal df, logit-normal vs beta selection, worm plot diagnostics, nonlinear smoothing functions, interpretation of dispersion parameters, small sample concerns (191 observations across 3 leagues × 3 seasons), league as categorical with Brazil reference, median vs mean distinction for logit-normal, etc.

SOURCE_OPERATORS_AND_EQUATIONS: Write out LaTeX for points ratio, GAMLSS additive predictor, beta pdf parameterization, logit-normal median parameterization, GAIC, final log(σ) equation, mention Page citations.

RETROCAUSAL_GENEALOGy: Rigby & Stasinopoulos 2005 GAMLSS, Heller et al. 2022 distributional regression, Ferrari & Cribari-Neto 2004 beta, Atchison & Shen 1980 logit-normal, Nakamura et al. 2019 unit interval distribution, Lago-Peñas et al. performance indicators, multi-week traps = seasonal non-stationarity, transfer windows, fixture congestion, coaching changes.

RECURSIVE_THEORY_OF_MIND: Teams in crisis regress to habitual formations (defensive low blocks after red cards), opponents develop counter-traps (pressing teams that overcommit tackles), clock effects (red card timing per Caliendo & Radic 2006, match status effects).

CROSS_LAYER_VETO_ADJUDICATION: Physical vetoes: red card → numerical inferiority is hard physical constraint that statistical correlation cannot override; goalkeeper saves require biomechanical reaction time; weather/climatic conditions (Orchard 2002; Watanabe et al. 2017) not in model but can veto possession-based strategies; altitude in South America (though not explicitly mentioned, implied by climatic conditions).

RLVR_COUNTERFACTUAL_VETOES: 
1. Scenario: Team with >0.40 red cards per match (observed range cap) — model says relationship constant after 0.40, but physical reality of playing 10 vs 11 for extended duration vetoes this plateau; prediction: points ratio collapse.
2. Scenario: Saves per match >4 with low shots against — model sinusoidal says positive after 3.5, but if saves high because defensive structure collapsed (biomechanical veto: goalkeeper isolated), prediction: dispersion σ increases, median drops.
3. Scenario: Accurate passes percentage high but in defensive third only — model negative effect, counter-trap: opponent allows possession in non-dangerous zones; prediction: median points ratio declines despite high pass accuracy.

Need to ensure 1000+ words total. Let me write comprehensively.

I must be careful with citations. The text has page markers. I will cite as [PAGE 2], [PAGE 3], etc. Let me verify which content is on which page based on markers:

- Page 1: Title through "predicting championship results..." (before >2--)
- Page 2: Starts with "> **2 —**" ... through "...used in Hewitt and Karakuş (2023)..." wait, actually >2— appears after "Understanding or" and before "predicting championship results". Let me re-read.

Looking at text:
"...understanding or [PAGE 2 marker] predicting championship results..."
Actually: "with the aim of understanding or 
\n\nOpen Access... \n\n> **2 —** L. F. Rosa et al.: Analyzing South American soccer team performance\n\npredicting championship results..."

So page 2 starts after that marker.

Page 2 content: intro continuation, literature review, GAMLSS introduction.

Page 3 marker: "> **3 —**" appears after "This adjustment ensures that analyses This adjustment ensures that analyses are conducted..." So page 3 contains end of dataset section and start of statistical modeling? Wait:

"...taking into account differences in the number of teams and matches within each competition.\n\nL. F. Rosa et al.: Analyzing South American soccer team performance **— 3**\n\n## **3 Statistical modeling..."

So page 3 has the header and start of Section 3.

Page 4 marker: "> **4 —**" appears after "Strategy A..." paragraph and before "It is worth noting that the inclusion of smooth functions..." So page 4 has end of Section 3 and start of diagnostics.

Page 5 marker: "> **5 —**" appears after Table 2 and before Figure 1? Wait:
"...Table 2 summarizes... [PAGE 5 marker?]"
Actually: "...presenting the GD and AIC values. Although the numbers were close... [then] > **5 —** L. F. Rosa et al.: ... Table 2... Figure 1..."

Wait, let me look:
"...We proceeded with the covariate selection... Table 2 summarizes... reflecting the final fitted models... GD and AIC values... degrees of freedom... A detailed discussion... Hodges and Sargent (2001).\n\nThe worm plot show... Figure 2... Consequently... final fitted GAMLSS... equation...\n\nL. F. Rosa et al.: Analyzing South American soccer team performance **— 5**\n\n<!-- Start of picture text -->\nA B<br>Beta<br>Logit−Normal...\n\n**Figure 1:** Distribution..."

Hmm, actually the >5— appears before Figure 1/picture text. Let me trace carefully:

After the logit-normal pdf discussion:
"...Within the GAMLSS framework... Strategy A... [steps]... At the end... [PAGE 4 marker]"
Then:
"It is worth noting that the inclusion of smooth functions... [PAGE 4 content continues]\n\nFor diagnostic analysis... worm plots... ri = ... [end of Section 3?]"
Then:
"> **4 —** ... no wait, I need to look at actual text.

Actually, re-reading:
"...GAIC = ... [PAGE 4? no]"
Then: "For two-parameter distributions such as beta or logitnormal, Strategy A is described by Nakamura et al. (2017) as follows: [steps]"
Then: "At the end of the steps... [PAGE 4 marker appears here?]"

Looking: "At the end of the steps, the final model may have different covariates for each of the fitted regression structures.\n\n> **4 —** L. F. Rosa et al.: Analyzing South American soccer team performance\n\nIt is worth noting that the inclusion of smooth functions..."

So page 4 starts with "It is worth noting..." and includes smooth functions discussion, diagnostics, then Section 4 Results start? Let's see:
"...worm plots... ri = ... [end of page 4?]\n\n## **4 Results**\n\nFigure 1 displays..." Wait, that would be page 5?

Actually the text says:
"For diagnostic analysis... [equation] ... [PAGE 4 marker?]"

Let me not overthink exact page boundaries but use the visible markers:
- >2— after intro first paragraph
- >3— before Section 3
- >4— after Strategy A steps, before smooth functions discussion
- >5— before Figure 1 / Table 2 discussion? Actually >5— appears before Table 2 image text.
- >6— before Figure 2
- >7— before Figure 3
- >8— before discussion of red cards continued
- >9— before discussion 5.2 continued
- >10— before Conclusions
- >11— before References continued

I will cite generically as [PAGE 2], [PAGE 3], etc. corresponding to these markers, and make sure the cited content is approximately on those pages.

Actually, to be safe and accurate, I should cite based on the explicit bold page markers in the text. Let me use them as anchors.

Let me write the response now. Need to ensure formal LaTeX and no toy equations. All equations must be real from the paper or standard statistical notation.

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

I'll write detailed content for each. Need to watch word count. Let me estimate: each section 200-250 words should get me over 1000. THINK_TRACE needs >=400 alone.

Let me write.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit of Rosa et al. (2026), Journal of Quantitative Analysis in Sports.

The paper models the standardized points ratio \(Y_{tls} = Pt_{ls} / P^*_{ls}\) for \(t\) teams across three South American leagues (Argentina, Brazil, Chile) and three seasons (2022–2024), yielding \(N=191\) team-season observations. The response is bounded in \([0,1]\), which motivates the use of GAMLSS (Rigby and Stasinopoulos, 2005) with either a beta or logit-normal distribution. A first gray zone is the sample-size-to-covariate ratio: 25 candidate covariates are initially screened against only 191 observations. Strategy A (Ramires et al., 2021b) performs forward selection on the location parameter \(\mu\) while holding \(\sigma\) constant, then stepwise selection on \(\sigma\), then backward elimination on \(\mu\). Because the effective degrees of freedom for the selected logit-normal model reach 40.9264 (Table 2, [PAGE 5]), the nominal sample size is substantially eroded by smoothing terms and categorical league indicators, raising overfitting risk despite AIC selection with penalty \(\kappa=2\).

A second gray zone concerns the per-match standardization of covariates. Because Argentina plays 27 matches (single round-robin), Brazil 38, and Chile 30, raw counts are divided by matches played. However, the response already incorporates match count via \(P^*_{ls}\). Standardizing covariates on a per-match basis while the response is a ratio of points to maximum possible points creates a potential double-counting of season length, though the authors note this follows Nakamura et al. (2019) [PAGE 3]. The median interpretation of \(\mu\) under the logit-normal distribution (rather than the mean under beta) is statistically convenient but changes the estimand: coaches optimizing for median performance may accept higher tail risk, which the dispersion sub-model partially addresses but does not fully optimize.

A third gray zone involves nonlinear smoothing. Six P-spline terms are used across the final logit-normal model (three in \(\mu\), three in \(\sigma\), plus linear terms). Worm plots show residuals within 95% bands [PAGE 4], but with only two outliers noted in the raw response [PAGE 4], diagnostic power in the tails is weak. The sinusoidal pattern for goalkeeper saves (positive 2.5–3.0 saves, decline 3.0–3.5, positive again after 3.5 [PAGE 7]) is plausible defensively but could also reflect selection bias: teams conceding many shots force more saves yet lose more often, so the save variable is endogenous to defensive pressure. The model treats saves as exogenous, violating a strict causal ordering.

A fourth gray zone is league comparability. The Brazilian league is the reference category, with Argentine and Chilean league indicators entering \(\mu\) with negative coefficients, implying a higher median points ratio in Brazil [PAGE 6]. Yet the authors attribute this to competitiveness, style, quality, home-field, and climate without modeling interleague strength directly (e.g., via Copa Libertadores performance or player-market valuations), so the league effect may absorb unobserved cross-league quality differences rather than pure competition format.

Finally, the temporal structure is static: team-season observations are treated as exchangeable despite multi-season repeats of the same club. There is no autoregressive term, no coaching-change dummy, and no fixture-congestion covariate, so intertemporal adaptation and crisis-response dynamics are outside the model's information set.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal statistical operators and equations from Rosa et al. (2026), with units and page citations.

Standardized points ratio (dimensionless, unit interval):
\[
Y_{tls} = \frac{Pt_{ls}}{P^{\ast}_{ls}}, \qquad 0 \le Y_{tls} \le 1,
\]
where \(Pt_{ls}\) is total points earned by team \(t\) in league \(l\) season \(s\), and \(P^{\ast}_{ls}\) is maximum possible points (matches \(\times\) 3). Descriptive statistics: mean \(0.4545\), median \(0.4444\), standard deviation \(0.1089\), skewness \(0.2640\), range \([0.1930, 0.7531]\) [PAGE 4, Table 1].

GAMLSS additive predictor for distribution parameter \(\theta_k\) [PAGE 3]:
\[
g_k(\theta_k) = \eta_k = \mathbf{X}_k^{\top}\boldsymbol{\beta}_k + \sum_j h_{kj}(x_{kj}),
\]
with link functions: identity for \(-\infty < \theta_k < \infty\), logarithm for \(\theta_k > 0\), logit for \(0 < \theta_k < 1\) [PAGE 3]. Smooth terms \(h_{kj}(\cdot)\) are P-splines (Eilers and Marx, 1996) [PAGE 3].

Beta distribution parameterization (Rigby et al., 2019) used in the paper [PAGE 3]:
\[
f(y;\alpha,\beta) = \frac{y^{\alpha-1}(1-y)^{\beta-1}}{B(\alpha,\beta)}, \quad
\alpha = \mu\frac{1-\sigma^2}{\sigma^2}, \quad
\beta = (1-\mu)\frac{1-\sigma^2}{\sigma^2},
\]
with \(0<\mu<1\), \(0<\sigma<1\), \(\alpha>0\), \(\beta>0\). Here \(\mu\) is the mean and \(\sigma\) is dispersion [PAGE 3].

Logit-normal alternative [PAGE 3]:
\[
0<\mu<1 \text{ is the median}, \quad \sigma>0 \text{ is dispersion}.
\]

Generalized AIC for covariate selection (Strategy A) [PAGE 4]:
\[
\text{GAIC} = -2\ell + \kappa \times df,
\]
with \(\kappa=2\) reducing to AIC; \(\ell\) is log-likelihood and \(df\) effective degrees of freedom [PAGE 4].

Selected logit-normal dispersion equation (4) [PAGE 5]:
\[
\log(\sigma) = -4.560 + 0.761\cdot\text{assists} + s_{21}(\text{dribbles}) + 0.782\cdot\text{saves} + s_{22}(\text{yellowcards}) + s_{23}(\text{shotsagainst}).
\]
Units: assists, saves, yellow cards, shots against are per-match standardized counts; dribbles per match; \(\sigma\) is dimensionless dispersion on log scale.

Location structure median covariates: league, goals scored, goals conceded, accurate passes percentage, clean sheets, tackles, saves, fouls, red cards; Brazil is reference category [PAGE 5]. Model fit: logit-normal GD \(-872.5483\), AIC \(-790.6954\), df \(40.9264\); beta GD \(-810.9610\), AIC \(-768.0683\), df \(21.4464\) [PAGE 5, Table 2].

Normalized quantile residual diagnostic [PAGE 4]:
\[
r_i = \Phi^{-1}\!\left[F(y_i \mid \boldsymbol{\theta})\right],
\]
where \(\Phi^{-1}\) is the inverse standard normal CDF and \(F\) is the model CDF [PAGE 4].

Breakdown/singularity regimes: beta and logit-normal densities degenerate at boundaries \(y \in \{0,1\}\); observed minimum \(0.1930\) and maximum \(0.7531\) keep data interior [PAGE 4]. GAMLSS assumes conditional independence of team-season observations; repeated observations of the same club across seasons violate strict i.i.d. assumptions unless cluster-robust inference is applied, which is not reported.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The statistical lineage traces from Rigby and Stasinopoulos (2005), who introduced GAMLSS as a framework for modeling location, scale, and shape parameters independently, extended by Heller et al. (2022) as "distributional regression" [PAGE 1]. The unit-interval response draws on Ferrari and Cribari-Neto (2004) beta regression and Atchison and Shen (1980) logit-normal distributions [PAGE 3]. Direct soccer antecedents include Nakamura et al. (2019), which applied a new continuous distribution on the unit interval to football points ratios, and Wang et al. (2024), which used GAMLSS for FIFA World Cup viewership [PAGE 1]. The performance-indicator genealogy reaches back to Lago-Peñas et al. (2010, 2011), Lago-Peñas and Lago-Ballesteros (2011), and Liu et al. (2015), which linked shots, tackles, red cards, and match location to outcomes [PAGE 6–8].

A multi-week trap is embedded in the seasonal aggregation: team-season points ratios smooth over week-to-week volatility. A club can post a high median points ratio while exhibiting catastrophic variance in individual match weeks (e.g., after a red card or goalkeeper injury), which the dispersion sub-model captures only at the season level, not the match-week level. Transfer windows between the 2022, 2023, and 2024 seasons alter squad composition, yet the model treats team-season observations as exchangeable repeats without a transfer-activity covariate. Coaching mid-season changes create structural breaks in tactical identity that a static GAMLSS cannot attribute; a team under a new manager in week 15 is statistically the same unit as in week 1. Fixture congestion (Copa Libertadores, domestic cups, international breaks) introduces recovery constraints unmodeled here, though climatic conditions are mentioned qualitatively as a league differentiator [PAGE 6]. These multi-week traps imply that the median and dispersion estimates are season-average objects, not rolling week-ahead forecasts, and their external validity decays rapidly across a transfer window or a coaching change.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes how teams under pressure revert to established tactical defaults: after conceding an early goal, a possession-dominant side may drop into a low block, increasing tackles and fouls while reducing accurate passes in dangerous zones. The model captures this statically: fouls have a negative linear effect on median points ratio [PAGE 7], and tackles peak at 17 per match before declining [PAGE 7], suggesting that excessive defensive activity signals loss of control rather than dominance.

The counter-trap is the opponent's recursive adaptation: if Team A regresses to a crisis habit of high foul volume and deep defending, Team B anticipates the low block and adjusts by shooting from outside the box or switching play to wings, rendering Team A's tackle and foul statistics less predictive. Because shots and possession were not selected as significant covariates [PAGE 8], the model may underestimate the strategic countermove in which an opponent concedes possession in non-dangerous areas (Jones, 2004) to neutralize accurate passes [PAGE 8].

The clock operates at two scales. Within a match, Caliendo and Radic (2006) find red-card timing determines impact, with ejections late in the first half or later having no effect [PAGE 8], yet Rosa et al. model red cards as a per-match rate without timing resolution, averaging away the clock condition. Across the season, the dispersion sub-model shows yellow-card effects becoming linearly increasing only beyond approximately 2.5 cards per match [PAGE 9], implying a disciplinary tipping point where accumulated cautions interact with suspensions and squad rotation over subsequent match weeks—a recursive feedback loop absent from the static regression. The sinusoidal saves curve (positive 2.5–3.0, negative 3.0–3.5, positive after 3.5 [PAGE 7]) likewise reflects goalkeeper workload as a clock of defensive pressure: early saves stabilize, mid-range saves indicate defensive breakdown, and high-volume saves later indicate elite shot-stopping under siege. The model does not encode match-minute timing, so these recursive habit loops are inferred indirectly through nonlinear smooths rather than explicitly modeled as state transitions.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical and biomechanical constraints can veto statistical inferences even when coefficients are significant at the 5% level [PAGE 6].

Veto 1 — Numerical inferiority (red cards). The red-card smooth is roughly constant up to 0.07 cards per match, fluctuates between 0.13 and 0.40, and stabilizes afterward [PAGE 8]. A physical veto operates here: a red card removes a player, creating an 11v10 situation that imposes a hard biomechanical constraint on pitch coverage and defensive dueling. No statistical coefficient can override the geometric reduction in player density. If a team crosses 0.34 red cards per match, the model indicates a positive marginal effect again [PAGE 8], but this likely reflects selection bias (teams in desperate situations commit tactical fouls) rather than a causal benefit. Physical veto: extended numerical inferiority dominates all statistical tendencies.

Veto 2 — Goalkeeper reaction-time bound. The saves curve is sinusoidal: approximately constant up to 2.5 saves/match, positive until 3.0, declining 3.0–3.5, positive after 3.5 [PAGE 7]. A biomechanical veto operates at extreme save volumes: a goalkeeper facing more than approximately 4–5 shots on target per match is operating under reaction-time and decision-load constraints that degrade save probability. The model treats saves as explanatory of points ratio, but high save counts are partly an effect of defensive weakness (more shots faced), creating an endogeneity veto where the statistic signals vulnerability rather than strength.

Veto 3 — Weather and altitude (climatic layer). The discussion cites climatic conditions as a league differentiator [PAGE 6], yet no weather covariate enters the model. In South American competitions, high-altitude venues (e.g., certain Bolivian or Ecuadorian-adjacent contexts, though not in these three leagues) and extreme heat/humidity impose physiological vetoes on pressing intensity, high defensive lines, and accurate passing percentages. The negative coefficient on accurate passes percentage [PAGE 8] could be vetoed by altitude-induced aerobic limitation: a team attempting high possession at altitude may fatigue, turning high pass volume into turnovers. The model's omission of temperature, humidity, and altitude means its climate-agnostic coefficients are conditional on unobserved environmental moderation.

Adjudication rule: any statistical recommendation (e.g., "increase tackles to 17/match" or "raise accurate passes") is void if it conflicts with a hard physical layer (numerical inferiority, reaction-time saturation, or environmental exhaustion). The GAMLSS identifies correlational structure; the cross-layer veto determines whether the structure is actionable.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with testable predictions:

Veto Scenario 1 — Red-card plateau collapse. Condition: a team sustains >0.40 red cards per match over a 5-match window (verifiable via match official reports). Model claim: the red-card smooth is roughly constant beyond 0.40 [PAGE 8], implying no further marginal penalty. Veto prediction: playing 10v11 for extended cumulative minutes imposes a physical coverage constraint; the team's points ratio over the window will decline by at least 0.10 relative to its season median, violating the model's flat-tail assumption. Verifiable observable: points per match in the 5-match window vs. season median.

Veto Scenario 2 — Save-volume endogeneity reversal. Condition: a goalkeeper records >4.0 saves per match while the team faces <3.0 shots against per match (verifiable via shot-location data). Model claim: saves enter both median and dispersion positively; after 3.5 saves/match, the median relationship turns positive again [PAGE 7]. Veto prediction: high saves with few shots against implies shot-stopping of very high difficulty or defensive disorganization preceding saves; the team's points ratio will be at or below the lower 5% quantile of the beta/logit-normal predictive distribution, and dispersion \(\sigma\) will spike above the model's upper 95% band. Verifiable observable: save quality (post-shot xG saved) and team points ratio over the next 3 matches.

Veto Scenario 3 — Accurate-pass accuracy trap in defensive third. Condition: a team records accurate passes percentage in the top quartile but >60% of accurate passes occur in the defensive third (verifiable via passing-network zone data). Model claim: accurate passes percentage has a negative effect on median points ratio [PAGE 8]. Counter-trap prediction: an opponent conceding possession in non-dangerous zones (Jones, 2004) will neutralize the pass-volume effect; the high-accuracy team's points ratio over a 4-match block against deep-lying opponents will fall below its season median by >0.05, despite the covariate's statistical significance. Verifiable observable: passes into final third per match and points earned against top-5 defensive-block teams.
</RLVR_COUNTERFACTUAL_VETOES>