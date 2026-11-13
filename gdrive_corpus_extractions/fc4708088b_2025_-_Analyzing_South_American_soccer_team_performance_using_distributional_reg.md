---
source: "2025 - Analyzing South American soccer team performance using distributional regression models - Rosa et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Quantitative Analysis in Sports/2025"
pages: 11
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5215
---

<NATIVE_REASONING>
The user wants me to act as the GSE + GSI Frontier Reasoning Foundry and produce a deep analysis based on the provided source paper. I must follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations. Use real equations from the paper (GAMLSS, beta/logit-normal, logit link, etc.) with proper citations [PAGE N]. Must be >=1000 words total across sections.

Let me carefully extract the key equations and details from the provided text:

Page 1: Abstract, intro, variables, points ratio definition: Points ratio_tls = Ptls / P*_ls where Ptls is total points, P*_ls is max possible points (matches * 3). Dataset 191 observations. Leagues: Argentina (27 rounds, single round robin), Chile (16 teams, 30 matches, double round robin), Brazil (20 clubs, 38 matches, double round robin). Covariates: 25 candidates.

Page 2: GAMLSS framework equation (1): Y ~ D(θ_k), g_k(θ_k) = η_k = X_k β_k + Σ h_kj(x_kj). Beta distribution equation (2): f_Y(y|μ,σ) = 1/B(α,β) y^(α-1)(1-y)^(β-1), α = μ(1-σ²)/σ², β = (1-μ)(1-σ²)/σ², 0<μ<1, 0<σ<1. Logit-normal equation (3): f_Y(y|μ,σ) = 1/(√(2πσ²) y(1-y)) × exp{-[log(y/(1-y)) - log(μ/(1-μ))]² / (2σ²)}. Strategy A steps. GAIC = -2×l̂ + κ×df.

Page 3: Table 1 stats: mean 0.4545, median 0.4444, sd 0.1089, skewness 0.2640, kurtosis -0.0800, min 0.1930, max 0.7531. Table 2: Logit-normal df 40.9264, GD -872.5483, AIC -790.6954. Beta df 21.4464, GD -810.9610, AIC -768.0683. Final fitted model equation (4): Y ~ Logit-Normal(μ, σ); logit(μ) = -0.271 -0.150·[League=Chilean] -0.118·[League=Argentine] + 1.106·goals scored -0.542·goals conceded -0.004·accurate passes percentage + 1.113·clean sheets + s_11(tackles) + s_12(saves) -0.035·fouls + s_13(red cards). log(σ) = -4.560 + 0.761·assists + s_21(dribbles) + 0.782·saves + s_22(yellow cards) + s_23(shots against).

Page 4-7: Discussion of coefficients. Median points ratio: Brazilian league reference, higher median than Argentine/Chilean. Goals scored positive. Goals conceded negative. Clean sheets positive. Accurate passes percentage negative (-0.004) - counterintuitive, explained by possession without attacking influence. Tackles peak at 17 tackles (Figure 3a). Saves sinusoidal pattern vs 2.5-4 saves per match (Figure 3b). Red cards fluctuating pattern (Figure 3c). Fouls negative.

Page 7-9: Dispersion. Assists positive (0.761). Dribbles erratic (Figure 3f): negative trend up to ~9 dribbles, increase to 14, sinusoidal with highest at 25. Saves positive on dispersion (0.782). Yellow cards roughly constant up to ~2.5 cards then linear increasing (Figure 3e). Shots against negative relationship with dispersion (Figure 3d).

Page 9-11: Conclusions, references.

Now I need to write the six XML sections with total >=1000 words. Let's plan word counts:
- THINK_TRACE: >=400 words (deep multi-hop derivation & gray-zone audit)
- SOURCE_OPERATORS_AND_EQUATIONS: formal LaTeX, units, citations
- RETROCAUSAL_GENEALOGY: historical/scientific lineage & multi-week traps
- RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock
- CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof
- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions

Important: No betting lines. No fake equations. Must cite [PAGE N] with verbatim quotes where appropriate.

Let's draft carefully.

THINK_TRACE (>=400 words): I need to do deep multi-hop derivation. I'll derive the points ratio standardization, the GAMLSS structure, the link functions, the parameterization of beta vs logit-normal, interpret the coefficients in equation (4), discuss the gray zones (e.g., why accurate passes percentage is negative despite possession literature; the sinusoidal saves pattern implies defensive weakness vs goalkeeping brilliance ambiguity; red card non-monotonicity; per-match standardization across leagues with different match counts; reference category Brazil; effective degrees of freedom differences; worm plot diagnostics). I'll audit assumptions: beta requires 0<y<1, logit-normal requires 0<μ<1, σ>0, GAMLSS assumes independence of observations but same team across seasons creates within-team correlation (panel structure ignored?). GAIC/AIC selection with κ=2. The dataset has 191 obs but 25 covariates + smooths → df 40.9 for logit-normal, risk of overfitting relative to N=191? Actually 191 observations, df ~41 is okay-ish but still. The response is bounded [0,1], so linear regression would be inappropriate; beta/logit-normal respect the unit interval. The response min 0.1930, max 0.7531 (not touching boundaries 0 or 1), so no boundary inflation needed. The gray zone: logit-normal μ is median, beta μ is mean. Interpretation shifts. The dispersion structure models log(σ), so coefficients are on log-dispersion scale. Positive coefficient on assists means higher assists → higher dispersion of points ratio (less consistent season). Negative shots against on dispersion: more shots against → lower dispersion (more predictable poor performance?). Need to trace multi-hop: goals scored → points ratio (direct), but goals scored correlated with assists, accurate passes, shots (not selected due to collinearity or redundancy). Clean sheets ↔ goals conceded. Saves in both μ and σ: in μ sinusoidal (nonlinear), in σ linear positive (0.782). This creates a cross-parameter identification tension: same variable affects location and scale differently.

SOURCE_OPERATORS_AND_EQUATIONS: Present equations (1)-(4) verbatim with citations. Define units: points ratio dimensionless [0,1]; covariates per-match (standardized per match, page 2). League dummy: Brazilian reference. Effective df. GAIC formula. Residuals formula r̂_i = Φ⁻¹[F(y|θ)]. Mention breakdown regimes: σ→0 in logit-normal (degenerate), μ→0 or 1 (boundary), n=191 vs df=40.9264 (ratio ~4.66 obs per df), smooth term identifiability when covariate range narrow (e.g., red cards per match 0 to 0.40). Cite pages.

RETROCAUSAL_GENEALOGY: Historical lineage: Rigby & Stasinopoulos 2005 GAMLSS; Ferrari & Cribari-Neto 2004 beta regression; Atchison & Shen 1980 logit-normal; Dunn & Smyth 1996 quantile residuals; van Buuren & Fredriks 2001 worm plots; Eilers & Marx 1996 P-splines; Nakamura et al. 2019 unit interval distribution for points ratio; Wang et al. 2024; Lago-Peñas et al. (2010, 2011); Liu et al. 2015 World Cup; Andrzejewski et al. 2022 Bundesliga. Multi-week traps: seasonal fatigue accumulation, red card suspensions affecting future matches (Lago-Peñas & Lago-Ballesteros 2011), goalkeeper saves pattern over 38-match Brazilian season vs 27-match Argentine season (different schedules), tactical fouls and substitutions (Sun et al. 2024) across a season.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Crisis habit: team conceding goals → negative coefficient on goals conceded; coach reacts by substituting fouling players (fouls negative) → disciplinary instability. Counter-trap: high tackles initially positive up to 17 then declines; over-aggressive tackling leads to cards/fouls; red cards non-monotonic (tactical fouls preventing goals vs disciplinary instability). Clock: match timing of red card (Caliendo & Radic 2006: no effect if end of first half or later), saves thresholds 2.5, 3, 3.5 per match, yellow cards threshold 2.5 then linear increase. Recursive ToM: opponent models your tackling intensity → you adjust; your red card changes opponent's numerical advantage expectation → game state shifts.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. The paper mentions climatic conditions (Aquino et al. 2017; Watanabe et al. 2017) as explanatory for league differences but does NOT include weather in the model (25 covariates listed, no weather). This is a veto: physical layer (climate, altitude in South America, travel distance) is omitted variable bias. Biomechanical: goalkeeper saves sinusoidal pattern could reflect physical fatigue or explosive capacity; red card → numerical disadvantage changes physical spacing. Weather veto: Copa Libertadores? No, domestic leagues. But South American leagues have varied climates (e.g., Brazilian Serie A teams from Manaus vs Porto Alegre; Chilean teams from Santiago vs coastal). Not modeled → veto on causal claims. Biomechanical veto: tackles per match peak at 17; beyond that, physical recovery limits (match congestion). Clean sheets depend on goalkeeper physical readiness. No load/injury data in SofaScore scraping. Thus model cannot veto physical fatigue/weather confounds; results are associative within observed covariate space.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios + predictions. Must be verifiable (falsifiable). 
1. Counterfactual: If a team increases clean sheets per match by Δ while holding goals conceded constant, the logit(μ) increases by 1.113·Δ. Prediction: teams in upper quartile of clean sheets should have median points ratio at least expit(logit(0.4444)+1.113·Δ_clean) above baseline; veto if no such separation in 2025 season holdout.
2. Counterfactual: Tackles nonlinearity: raising tackles from 10 to 17 raises partial effect; raising from 17 to 22 yields near-zero/negative change. Prediction: partial effect curve peaks near 17 tackles/match; teams exceeding 22 tackles/match should show no median points ratio gain; veto if linear positive effect persists.
3. Counterfactual: Yellow cards dispersion: log(σ) roughly constant below 2.5 yellows/match, then increases linearly. Prediction: season variance of points ratio should be statistically indistinguishable for teams with 1 vs 2 yellows/match, but significantly larger for teams with 4 vs 2 yellows/match; veto if dispersion monotonic from zero.

No betting. No toy equations. Use real equations.

Word count check: I need >=1000 words total. Let's aim for:
- THINK_TRACE: ~350-450 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~300-400 words
- RETROCAUSAL_GENEALOGY: ~200-300 words
- RECURSIVE_THEORY_OF_MIND: ~200 words
- CROSS_LAYER_VETO_ADJUDICATION: ~150-200 words
- RLVR_COUNTERFACTUAL_VETOES: ~150-200 words
Total should exceed 1000.

Let me write carefully with exact page citations and verbatim quotes.

I must be careful not to mention betting lines (spreads, totals, moneylines, odds). "Probability" is okay in information theory sense but I'll avoid betting context. I can mention probability of victory as discussed in paper (Kubayi 2020) since it's not a betting line.

Let's draft.

THINK_TRACE content:
Start with the response standardization: Points ratio_tls = Ptls / P*_ls, bounded [0,1]. Observed range 0.1930–0.7531, mean 0.4545, median 0.4444, skewness 0.2640 (page 3). Because support is unit interval and not touching boundaries, ordinary linear regression with identity link risks predictions outside [0,1] and heteroskedasticity; GAMLSS uses beta or logit-normal. Chose logit-normal because GD/AIC lower (Table 2, page 3: GD −872.5483 vs −810.9610; AIC −790.6954 vs −768.0683). Strategy A forward/backward selection with κ=2 (AIC), page 2.

Equation (4) coefficients: logit(μ) intercept −0.271. League dummies: Argentine −0.118, Chilean −0.150, Brazil reference. Positive goals scored +1.106, negative goals conceded −0.542, negative accurate passes −0.004, positive clean sheets +1.113, negative fouls −0.035. Smooths s11(tackles), s12(saves), s13(red cards). Dispersion log(σ): intercept −4.560, assists +0.761, saves +0.782, smooths dribbles, yellow cards, shots against.

Gray zone audit: 
1. Within-team temporal dependence: 191 observations, many same team across seasons; GAMLSS assumes independent observations conditional on covariates; no team random effect or AR term; standard errors may be understated (page 2 note). 
2. Covariate redundancy: shooting statistics, possession not selected; Yue et al. (2014) goal efficiency > quantity; possible collinearity with goals scored/assists (page 6). 
3. Accurate passes percentage negative contradicts possession literature (Kapsalis et al. 2023; Kubayi 2020); explanation: losing teams retain possession in non-dangerous areas (Jones 2004), so percentage is a compensatory rather than causal marker (page 7). 
4. Saves appear in both μ (sinusoidal) and σ (linear positive): same variable shifts location non-monotonically and scale monotonically; interpretation is context-dependent (defensive weakness vs elite goalkeeping, page 6). 
5. Per-match standardization across leagues with 27, 30, 38 matches (page 2): response already standardized by definition, but covariates standardized per-match assumes linear scaling with match count, which may break for count-like events (red cards per match bounded by matches played). 
6. Effective df 40.9264 vs n=191: ~4.6 observations per df; smoothing penalties control wiggliness but sparse covariate regions (e.g., red cards >0.34 per match) produce unstable partial effects (page 5 Figure 3c).

That's good, around 350 words. Let's expand to ensure >400.

SOURCE_OPERATORS_AND_EQUATIONS content:
List formal equations with citations:
- Points ratio definition page 2.
- GAMLSS equation (1) page 3.
- Beta pdf (2) page 3 with parameter constraints.
- Logit-normal pdf (3) page 3.
- GAIC page 2.
- Residuals page 3.
- Final model (4) page 4.
- Units: points ratio dimensionless [0,1]; covariates per-match; logit link for μ; log link for σ; σ dispersion dimensionless positive; effective df dimensionless.
- Breakdown regimes: beta/logit-normal require 0<y<1; observed min 0.1930, max 0.7531 so no boundary mass; if y→0 or 1, density behavior changes and zero/one-inflated extension needed (not modeled). σ→0+ degenerate; μ→0 or 1 makes logit undefined. n/df ratio ~4.66; smooth terms s_kj require sufficient covariate support; red cards per match range up to 0.40, sparse above 0.34.

RETROCAUSAL_GENEALOGY:
Historical/scientific lineage: GAMLSS Rigby & Stasinopoulos 2005 [PAGE 2]; beta regression Ferrari & Cribari-Neto 2004 [PAGE 3]; logit-normal Atchison & Shen 1980 [PAGE 3]; quantile residuals Dunn & Smyth 1996 [PAGE 3]; worm plots van Buuren & Fredriks 2001 [PAGE 3]; P-splines Eilers & Marx 1996 [PAGE 3]; Strategy A Ramires et al. 2021b, Nakamura et al. 2017 [PAGE 2]; prior soccer GAMLSS Nakamura et al. 2019 [PAGE 2], Wang et al. 2024 [PAGE 2]. Performance indicator lineage: Lago-Peñas et al. 2010/2011 [PAGES 6-8], Liu et al. 2015 [PAGES 6-8], Andrzejewski et al. 2022 [PAGE 6].
Multi-week traps: season-length mismatch (Argentina 27 matches vs Brazil 38 vs Chile 30) means late-season red card suspensions carry across matchweeks [PAGE 8]; goalkeeper saves accumulate fatigue across congested fixture lists [PAGE 6]; clean sheets are season-aggregated and thus conflate early-season form with late-season fatigue; no match-week index in the model, so temporal autocorrelation and "crisis habit regression" (teams regressing after a bad run) are unmodeled. This creates a multi-week trap: cross-sectional season aggregates hide within-season regime shifts (e.g., a team starting strong then decaying).

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: when goals conceded rises, median points ratio falls (−0.542). Coach responds with tactical fouls (fouls −0.035) and high tackles. Opponent observes this habit and adapts: draws fouls, wins penalties/free kicks (Sun et al. 2024 [PAGE 6]), or exploits numerical disadvantage after red cards (Lago-Peñas et al. 2010 [PAGE 8]). Counter-trap: tackles non-monotonic; up to 17 tackles/match positive, beyond that marginal effect declines/stabilizes [PAGE 5]. A team that over-commits to tackles after conceding triggers the red-card nonlinearity [PAGE 6 Figure 3c]: isolated red cards (~0.07/match) roughly constant, then effects fluctuate up to 0.40. Clock: timing of red card matters (Caliendo & Radic 2006 [PAGE 8]); yellow cards show dispersion threshold at ~2.5 cards/match then linear increase [PAGE 8 Figure 3e]; saves thresholds 2.5, 3.0, 3.5 per match create piecewise regime shifts [PAGE 6 Figure 3b]. Recursive ToM loop: my tackle intensity signals defensive desperation → opponent increases shots against → my shots against coefficient negative on dispersion → outcomes become more predictable (worse) → I increase fouls → further point ratio decay.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: The paper explicitly lists climatic conditions, travel distance, home-field factors as league differentiators (Aquino et al. 2017; Watanabe et al. 2017; Kubayi & Toriola 2019) [PAGE 5] but the 25 covariates contain no weather, altitude, temperature, or travel variables [PAGE 2]. Therefore any league coefficient (Argentine −0.118, Chilean −0.150 vs Brazil reference) is confounded by unmodeled physical geography; causal claim "Brazilian Championship higher median" cannot be vetoed against climate/travel. Biomechanical layer: goalkeeper saves enter μ nonlinearly and σ linearly [PAGE 4], but no goalkeeper physical readiness, match-load, or injury data are scraped from SofaScore [PAGE 2]; the sinusoidal saves pattern (2.5 → 3.0 → 3.5 → 4.0) may reflect physical fatigue or reflex capacity, not tactical quality alone. Tackle peak at 17 per match [PAGE 5] may mark a physical recovery threshold; beyond it, repeated high-intensity defensive actions degrade. Weather veto: South American leagues span tropical to temperate zones; home-field climatic advantage is acknowledged in literature but absent from the model. Hence cross-layer veto: the model's inference is valid only within the observed covariate space; it cannot adjudicate claims involving climate, altitude, travel load, or player physical load.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 scenarios + predictions.
Scenario 1 (Clean sheets location shift): Hold all covariates at sample median; increase clean sheets per match by 0.10. Δlogit(μ)=1.113×0.10=0.1113. Baseline μ≈0.4444 → logit(0.4444)=log(0.4444/0.5556)=log(0.8)=−0.2231. New logit=−0.1118 → μ=expit(−0.1118)=0.4721. Prediction: In a 2025 holdout, teams with clean-sheet rate ≥0.30/match should exhibit median points ratio ≥0.47; veto if observed median ≤0.45.
Scenario 2 (Tackle nonlinearity veto): From Figure 3(a) [PAGE 5], partial effect peaks near 17 tackles/match then stabilizes/declines. Counterfactual: Team A at 12 tackles/match, Team B at 22 tackles/match, all else equal. Prediction: μ_B − μ_A should be ≈0 (beyond peak), not positive linear; veto if a linear tackle model fits better than the spline (GAIC difference <0) or if high-tackle teams outperform.
Scenario 3 (Yellow-card dispersion threshold): log(σ) roughly constant up to ~2.5 yellows/match, then linear increasing [PAGE 8 Figure 3e]. Counterfactual: two teams identical in μ-structure, one averages 2 yellows/match, the other 4 yellows/match. Prediction: season variance of points ratio for the 4-yellow team should be significantly larger; specifically σ(4)/σ(2) >1 on log scale; veto if dispersion is monotonic from zero yellows or shows no threshold at 2.5.

All predictions are verifiable via out-of-season data. No betting lines.

Now let's assemble with XML tags exactly as specified. Ensure total words >=1000. Let's write.

I need to be careful about verbatim quotes. I can quote short phrases. E.g., "the median points ratio is signiﬁcantly higher in the Brazilian Championship" [PAGE 4]. "points ratio already considers the number of matches by deﬁnition" [PAGE 2]. "0.1930–0.7531" [PAGE 3]. Good.

Let's write out full response.
</NATIVE_REASONING>

<THINK_TRACE>
The response variable is defined on page 2 as Points ratio_tls = Ptls / P*_ls, where Ptls is total points earned by team t in league l during season s and P*_ls is maximum possible points (matches × 3). This yields a dimensionless quantity on the unit interval [0,1]. The observed sample spans 0.1930–0.7531 with mean 0.4545, median 0.4444, standard deviation 0.1089, skewness 0.2640, and kurtosis −0.0800 [PAGE 3]. Because the support is bounded and neither boundary is touched, ordinary least squares with an identity link risks inadmissible predictions outside [0,1] and heteroskedastic errors; the authors therefore fit GAMLSS with either a beta or a logit-normal distribution [PAGE 3]. Model selection via Strategy A (forward selection on μ with σ constant, then stepwise on σ, then backward on μ) using AIC (κ = 2 in GAIC = −2×l̂ + κ×df) selected the logit-normal specification: GD −872.5483 and AIC −790.6954 versus beta GD −810.9610 and AIC −768.0683 [PAGE 3, Table 2].

The final fitted model appears on page 4 as equation (4): logit(μ) = −0.271 −0.150·[League = Chilean] −0.118·[League = Argentine] + 1.106·goals scored −0.542·goals conceded −0.004·accurate passes percentage + 1.113·clean sheets + s11(tackles) + s12(saves) −0.035·fouls + s13(red cards), with log(σ) = −4.560 + 0.761·assists + s21(dribbles) + 0.782·saves + s22(yellow cards) + s23(shots against). Brazil is the reference league, so the negative league dummies imply the median points ratio is significantly higher in the Brazilian Championship [PAGE 4]. Several gray zones require audit. First, the dataset contains 191 observations across three leagues and three seasons, with repeated observations of the same team in different seasons within a league [PAGE 2]; GAMLSS as specified assumes conditional independence and includes no team random effect or autoregressive term, so standard errors may be understated and cross-season within-team correlation is unmodeled. Second, covariates were standardized on a per-match basis because leagues run 27 (Argentina), 30 (Chile), and 38 (Brazil) matches [PAGE 2], yet per-match linear scaling assumes count-like events scale proportionally with fixtures, which may break for bounded rates such as red cards per match. Third, the negative coefficient on accurate passes percentage (−0.004) contradicts possession-based success literature [PAGE 7]; the authors reconcile this by noting losing teams may retain possession in non-dangerous areas, making percentage a compensatory marker rather than a causal driver [PAGE 7]. Fourth, saves enter both structures: non-monotonically in μ (sinusoidal across 2.5–4.0 saves per match) and linearly positively in σ (+0.782) [PAGES 4, 6], so the same variable simultaneously shifts location non-linearly and scale monotonically, creating a cross-parameter identification tension between defensive weakness and goalkeeping brilliance. Fifth, effective degrees of freedom are 40.9264 for the logit-normal model against n = 191, approximately 4.66 observations per df; sparse regions of covariate space (e.g., red cards above 0.34 per match) produce unstable spline estimates [PAGES 5, 6]. Sixth, shooting statistics, possession, and crosses were not selected despite prior literature, possibly because goals scored and assists already capture their effect or because shot quality outweighs quantity [PAGES 6–7]. These are associative, not causal, estimands within the observed SofaScore covariate space.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations extracted verbatim with page citations:

Points ratio standardization [PAGE 2]:
Points ratio_tls = Ptls / P*_ls,
where Ptls ∈ ℕ₀ is total points and P*_ls = (number of matches) × 3 is the maximum possible points. Units: dimensionless proportion in [0,1].

GAMLSS general structure [PAGE 3, equation (1)]:
Y ∼ D(θ_k), g_k(θ_k) = η_k = X_k β_k + Σ_{j=1}^{J_k} h_kj(x_kj),
where D is the response distribution, θ_k = (θ_1, …, θ_p)ᵀ are distribution parameters, g_k(·) is a monotonic link (identity for −∞ < θ_k < ∞, logarithm for θ_k > 0, logit for 0 < θ_k < 1), X_k is the design matrix, β_k is the parameter vector, and h_kj(·) are smooth non-parametric functions (e.g., P-splines). Units: η_k is on the link scale; θ_k units depend on the distribution.

Beta density [PAGE 3, equation (2)]:
f_Y(y|μ, σ) = 1/B(α,β) y^{α−1}(1−y)^{β−1}, 0 < y < 1,
with α = μ(1−σ²)/σ², β = (1−μ)(1−σ²)/σ², α > 0, β > 0, implying 0 < μ < 1 and 0 < σ < 1. Here μ is exactly the mean and σ is a dispersion parameter. Units: μ dimensionless [0,1]; σ dimensionless (0,1).

Logit-normal density [PAGE 3, equation (3)]:
f_Y(y|μ, σ) = 1/(√(2πσ²) y(1−y)) × exp{ −[log(y/(1−y)) − log(μ/(1−μ))]² / (2σ²) },
where 0 < μ < 1 is exactly the median and σ > 0 is a dispersion parameter. Units: μ dimensionless [0,1]; σ dimensionless positive.

Model selection criterion [PAGE 2]:
GAIC = −2 × l̂ + κ × df, with κ = 2 giving AIC. Units: GAIC/AIC in log-likelihood points; df is effective degrees of freedom (dimensionless).

Normalized quantile residual [PAGE 3]:
r̂_i = Φ⁻¹[F(y|θ)], where Φ⁻¹ is the inverse standard normal CDF and F is the model CDF. Units: standard normal deviates.

Final fitted GAMLSS [PAGE 4, equation (4)]:
Y ∼ Logit-Normal(μ, σ),
logit(μ) = −0.271 −0.150·[League = Chilean] −0.118·[League = Argentine] + 1.106·goals scored −0.542·goals conceded −0.004·accurate passes percentage + 1.113·clean sheets + s11(tackles) + s12(saves) −0.035·fouls + s13(red cards),
log(σ) = −4.560 + 0.761·assists + s21(dribbles) + 0.782·saves + s22(yellow cards) + s23(shots against).
All covariates are standardized per-match [PAGE 2]. Units: coefficients on logit(μ) are dimensionless log-odds per per-match unit; coefficients on log(σ) are dimensionless log-dispersion per per-match unit.

Breakdown/singularity regimes: The beta and logit-normal densities require 0 < y < 1; observed min 0.1930 and max 0.7531 [PAGE 3], so no boundary mass at 0 or 1 is modeled, but if y → 0⁺ or y → 1⁻ the density behavior changes and zero/one-inflated extensions would be required (not present). The logit link is undefined at μ = 0 or μ = 1; σ → 0⁺ produces a degenerate distribution. With n = 191 and df_logit-normal = 40.9264 [PAGE 3], the observation-to-df ratio is ≈ 4.66; smooth terms s_kj require sufficient covariate support, and sparse regions (red cards > 0.34 per match [PAGE 5]) risk unstable partial effects.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The statistical lineage traces to Rigby and Stasinopoulos (2005), who introduced generalized additive models for location, scale, and shape [PAGE 2]; to Ferrari and Cribari-Neto (2004) for beta regression of rates and proportions [PAGE 3]; and to Atchison and Shen (1980) for the logit-normal distribution [PAGE 3]. Diagnostic machinery comes from Dunn and Smyth (1996) randomized quantile residuals and van Buuren and Fredriks (2001) worm plots [PAGE 3], with smoothing via Eilers and Marx (1996) P-splines [PAGE 3]. The covariate-selection Strategy A is attributed to Ramires et al. (2021b) and Nakamura et al. (2017) [PAGE 2]. Prior GAMLSS soccer applications are sparse: Nakamura et al. (2019) modeled points ratio on the unit interval, and Wang et al. (2024) applied distributional regression to FIFA World Cup viewership [PAGE 2].

Performance-indicator genealogy draws on Lago-Peñas et al. (2010, 2011) and Lago-Peñas and Lago-Ballesteros (2011) for winning/losing team statistics and game-location effects [PAGES 6–8]; Liu et al. (2015) for 2014 World Cup group-stage match statistics [PAGES 6–8]; Andrzejewski et al. (2022) for Bundesliga technical and running performance [PAGE 6]; and Kubayi (2020) for goal-scoring patterns [PAGE 7]. The multi-week trap emerges from season-length heterogeneity: Argentina runs a 27-match single round-robin, Chile 30 matches, and Brazil 38 matches [PAGE 2]. Because the response is a season-aggregated points ratio and the covariates are per-match averages, the model collapses temporal structure into cross-sectional means. Red-card suspensions and tactical fouls carry consequences across matchweeks [PAGE 8], goalkeeper save volume accumulates across congested fixture lists [PAGE 6], and clean sheets reflect season-long defensive solidity that can decay with fatigue. No match-week index, fixture congestion variable, or recovery covariate appears among the 25 SofaScore-scraped candidates [PAGE 2]. Consequently, the analysis cannot detect within-season regime shifts—such as a team that begins strongly and regresses after a crisis—and any inference about "success" is an average over the full calendar rather than a trajectory-sensitive estimate. This is the core multi-week vulnerability: seasonal aggregates conceal the clock-dependent causal ordering of disciplinary events, goalkeeper workload, and tactical adaptation.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression operates through the negative goals-conceded coefficient (−0.542): as conceded goals rise, the median points ratio falls, triggering a coach-level habit of increasing tactical fouling and defensive pressure [PAGES 4, 6]. The fouls coefficient (−0.035) captures the downstream performance cost: heavy fouling cedes match control, invites substitutions for player protection, and generates free-kick or penalty opportunities for opponents [PAGE 6]. An opponent with a recursive theory of mind observes this habit and adapts by drawing fouls, exploiting numerical disadvantage after red cards, or pressing in advanced areas [PAGES 6, 8].

The counter-trap is non-monotonic. Tackles display a positive partial effect up to approximately 17 tackles per match, beyond which the median points ratio slightly decreases and then stabilizes [PAGE 5]. A team that escalates tackling in response to a crisis therefore crosses into a regime of diminishing or negative returns, increasing exposure to red cards. Red cards exhibit a fluctuating spline: roughly constant up to ≈0.07 red cards per match, rising to ≈0.13, declining to ≈0.22, positive again to ≈0.34, and constant to ≈0.40 [PAGE 6]. This reflects the ambiguity between tactical expulsions that prevent goals and disciplinary instability that erodes performance [PAGE 6]. Timing moderates the effect: Caliendo and Radic (2006) find no red-card impact if issued at the end of the first half or later [PAGE 8], so the clock imposes a state-dependent veto on the red-card coefficient.

The clock is also visible in dispersion. Yellow cards show a roughly constant effect on log(σ) up to ≈2.5 cards per match, then a linear increasing trend [PAGE 8], indicating match instability accumulates only beyond a caution threshold. Goalkeeper saves shift the median non-monotonically across thresholds of ≈2.5, 3.0, 3.5, and 4.0 saves per match [PAGE 6], suggesting regime changes in defensive demand rather than a stable linear parameter. The recursive loop closes as follows: conceded goals raise foul intensity; foul intensity raises yellow-card accumulation; beyond 2.5 yellows per match dispersion rises; higher dispersion makes seasonal outcomes less predictable; the opponent anticipates this instability and adjusts shot volume, which enters negatively in the dispersion structure (shots against, Figure 3(d), page 7), rendering the crisis team’s point path increasingly deterministic in the negative direction.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The discussion explicitly acknowledges that league characteristics—competitiveness, style of play, average team quality, home-field factors, and climatic conditions—drive performance differences [PAGE 5], citing Aquino et al. (2017), Kubayi and Toriola (2019), Orchard (2002), and Watanabe et al. (2017). However, the 25 covariates scraped from SofaScore contain no weather, altitude, temperature, precipitation, or travel-distance variables [PAGE 2]. Therefore the league coefficients (Brazilian reference; Argentine −0.118; Chilean −0.150 on logit(μ)) are confounded by unmodeled physical geography. A cross-layer veto applies: the model cannot establish that the Brazilian Championship intrinsically yields a higher median points ratio independent of climate, altitude, or travel load. Causal claims about league differences are invalidated unless these physical-layer variables are conditioned upon.

Biomechanical layer: Goalkeeper saves enter the location structure through a non-monotonic spline (sinusoidal across 2.5–4.0 saves per match) and the dispersion structure through a positive linear coefficient (+0.782) [PAGE 4]. Yet no goalkeeper physical-readiness, match-load, injury, or recovery data are included [PAGE 2]. The observed save pattern may reflect reflex fatigue, explosive capacity, or cumulative load rather than tactical quality alone. Similarly, the tackle peak at 17 per match [PAGE 5] plausibly marks a biomechanical recovery threshold; repeated high-intensity defensive actions beyond that point may degrade tackle quality and elevate card risk. Without player-load or injury covariates, the model cannot veto a biomechanical confound explaining the nonlinear tackle and saves effects.

Weather veto: South American leagues span tropical, subtropical, and temperate zones, and home-field climatic advantage is an established contextual factor [PAGE 5]. Because weather is absent from the model, any inference about team performance that implicates match-day atmospheric conditions is outside the model’s identified set. Adjudication: the GAMLSS results are statistically coherent within the observed SofaScore covariate space, but they carry a cross-layer veto against any physical, biomechanical, or weather-related causal claim not encoded in the 25 covariates. The model is valid for description and prediction under the same data-generating process, not for causal attribution across physical strata.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with out-of-sample predictions. No betting lines are invoked; all statements are distributional and use the fitted equation (4) [PAGE 4].

Veto scenario 1 — Clean-sheets location shift. Hold all covariates at their sample medians and increase clean sheets per match by Δ = 0.10. From equation (4), Δlogit(μ) = 1.113 × 0.10 = 0.1113. Baseline median μ₀ = 0.4444 implies logit(μ₀) = log(0.4444/0.5556) ≈ −0.2231. The counterfactual logit is −0.1118, mapping to μ₁ = expit(−0.1118) ≈ 0.4721. Prediction: In a 2025 holdout season, teams with clean-sheet rates ≥ 0.30 per match should exhibit a median points ratio ≥ 0.47 relative to teams ≤ 0.15 per match, all else equal. Veto rule: if the observed holdout median for high clean-sheet teams is ≤ 0.45, the clean-sheets coefficient is not transportable and the structural claim is vetoed.

Veto scenario 2 — Tackle nonlinearity veto. Figure 3(a) [PAGE 5] shows the partial effect of tackles on logit(μ) peaks near 17 tackles per match and then stabilizes or slightly declines. Counterfactual: compare Team A at 12 tackles/match with Team B at 22 tackles/match, identical on all other covariates. Prediction: the spline-implied μ_B − μ_A should be approximately zero (or negative), not linearly positive; a linear-in-tackles specification should fit worse in GAIC than the spline model. Veto rule: if high-tackle teams (≥22/match) outperform moderate-tackle teams (12/match) in an independent season, or if a linear tackle term reduces GAIC relative to equation (4), the reported nonlinear tackle effect is not externally valid.

Veto scenario 3 — Yellow-card dispersion threshold. Equation (4) and Figure 3(e) [PAGE 8] indicate log(σ) is roughly constant up to ≈2.5 yellow cards per match, then increases linearly. Counterfactual: two teams matched on the μ-structure, one averaging 2 yellows/match and the other 4 yellows/match. Prediction: the season variance (dispersion) of the points ratio for the 4-yellow team should be significantly larger, with σ(4)/σ(2) > 1 on the log scale; teams below the 2.5 threshold should show statistically indistinguishable dispersion. Veto rule: if dispersion rises monotonically from zero yellows or shows no threshold behavior near 2.5 cards per match, the dispersion-structure selection for yellow cards is vetoed. Each scenario is falsifiable using league seasons not included in the 2022–2024 estimation window.
</RLVR_COUNTERFACTUAL_VETOES>