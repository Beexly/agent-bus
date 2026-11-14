---
source: "2020 - Grinding the Bayes A Hierarchical Modeling Approach to Predicting the NFL Draft - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Carnegie Mellon Sports Analytics Conference/2020"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4080
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about Bayesian hierarchical modeling for predicting the NFL Draft. They've provided the source text and want me to follow strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the source text is about NFL Draft prediction. The XML sections seem somewhat mismatched with the content (e.g., "weather veto proof", "biomechanical", "crisis habit regression", "clock"). But I must include these exact sections. I need to adapt the content to fit these sections while staying true to the source material.

Key facts from source:
- Author: Benjamin Robinson, Grinding the Mocks LLC
- Date: October 19, 2020
- Case study: 2018 NFL Draft
- Method: Bayesian hierarchical modeling with MCMC simulations
- Data: 424 mock drafts, 414 draft-eligible players, 178 EDP-eligible players (10+ mock drafts) [Table 1, page 2]
- Log-adjusted EDP explains ~85% of variance in actual log-adjusted draft outcomes [Abstract, page 1]
- Gamma distribution with logarithmic link function [page 3]
- Model: Bayesian model run using mock draft pick as outcome variable with random effects for players and draft weight index values (random slopes) [page 3]
- MCMC: 4 chains and 5000 iterations [page 3]
- No fixed effects included [page 3]
- R-squared 0.8622545 for EDP Rank Logarithmic [Table 2, page 2]
- Baker Mayfield case study: EDP ~3.39, Q2.5 1.03, Q97.5 7.19 [Table 3, page 5]
- MAP ~2.62 or 2.59 (slight discrepancy in text) [page 5]
- HDI 0.7 - 6.51 [page 5]
- Cleveland Browns / Andrew Berry / Grant Delpit / Indianapolis Colts trade example [page 6-7]
- Approximate Value comparison: EDP doesn't predict future value much better than draft slot [page 7]

Structure requirements:
- THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words)
- SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown
- RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps
- RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock
- CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof
- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions

Important: No betting lines. The source mentions "probability density" and "credible interval" but I must not frame as odds/betting. I should stick to probability/statistical language.

Word count: Total >= 1,000 words across sections. THINK_TRACE alone >=400 words.

Let me draft each section carefully.

THINK_TRACE (>=400 words): Deep multi-hop derivation. I need to derive the hierarchical Bayesian model logic:
1. Observations: mock draft picks y_{ij} for player i in mock j.
2. Nested structure: mocks nested within players; time weights.
3. Likelihood: Gamma with log link because draft picks are positive continuous (discrete picks modeled continuously).
4. Linear predictor: log(μ_{ij}) = α_i + β_i * w_j + ε_{ij}, where α_i ~ N(μ_α, σ_α²), β_i ~ N(μ_β, σ_β²). Random intercepts and slopes.
5. No fixed effects because mock drafts already encode team needs and player quality.
6. Prior: non-informative/flat because only one year of data (page 3).
7. MCMC: 4 chains, 5000 iterations (page 3).
8. Posterior summarization: MAP, HDI, Q2.5/Q97.5.
9. Gray zones: log transformation constricts numerical space but implicitly values early picks higher (page 3 example: log(4)-log(1) vs log(104)-log(101), factor of 47). This is a nonlinearity that compresses late-round variance and amplifies early-round sensitivity. Breakdown when picks are near zero (log undefined at 0, hence +1 or similar though not specified). EDP-eligible threshold of 10 mocks creates selection bias (players with sparse coverage excluded).
10. 85% variance explained on log scale means 15% unexplained includes team-specific idiosyncratic trades, scheme fit, medical red flags not in public data.

SOURCE_OPERATORS_AND_EQUATIONS:
Formal LaTeX equations.
- Likelihood: y_{ij} | μ_{ij}, φ ~ Gamma(shape=φ, scale=μ_{ij}/φ) or with log link g(μ) = log(μ).
- Hierarchical: α_i ~ Normal(μ_α, σ_α²), β_i ~ Normal(μ_β, σ_β²).
- Posterior: p(θ|y) ∝ p(y|θ)p(θ).
- Log transform: z = log(y), Δz = log(4)-log(1) ≈ 1.386 vs log(104)-log(101) ≈ 0.0295, ratio ≈ 47.
- Weight index: inverse difference between mock date and draft day start.
- Units: picks (dimensionless count), log-picks (dimensionless), probability density (1/pick), days (time).
- Page citations: [PAGE 1], [PAGE 2], [PAGE 3], etc.
- Breakdown regimes: zero picks (log singularity), <10 mocks (exclusion threshold), single-year data (no prior informative), discrete picks modeled as continuous Gamma.

RETROCAUSAL_GENEALOGY:
Historical lineage:
- Massey & Thaler 2013 (loser's curse, draft value) [PAGE 1]
- Berri & Simmons 2009; Mulholland & Jensen 2014 [PAGE 1]
- Brian Burke 2014 Bayesian Draft Analysis Tool [PAGE 1-2]
- Caudill & Mixon 2013 (NFL Draftnikology, Euclidean distance, Spearman) [PAGE 1-2]
- Tetlock 2005/2008, Superforecasting 2015, Good Judgment Project, Brier scores [PAGE 2]
- Robinson 2020 prior frequentist work [PAGE 1-2]
- Lombardi 2019 (algorithm of all mocks not foolproof) [PAGE 8]
- ESPN NFL Draft Predictor 2020 [PAGE 1-2]
Multi-week traps: mock drafts collected July 2017 to April 2018 (Mayfield example) [PAGE 4-5]; temporal drift where early mocks are downweighted via linear weight based on inverse difference between mock date and day after draft start [PAGE 2]. Trap: assuming expert aggregation is stable when draft stock is path-dependent and stochastic.

RECURSIVE_THEORY_OF_MIND:
This is trickier. "Crisis habit regression vs counter-trap vs clock."
- Crisis habit regression: Under draft pressure, GMs revert to familiar heuristics (e.g., reaching for a QB at pick 1 despite model saying EDP=3) [PAGE 5-6 Mayfield].
- Counter-trap: Browns trading down example (Andrew Berry, Colts trade 41 for 44+160, Delpit still there) [PAGE 6-7]. This is a counter-trap: using probabilistic range (HDI) to accept trade down rather than picking out of fear.
- Clock: The draft clock picks proceed sequentially; path dependency means pick 1 affects pick 2 etc. Model is unconditional per player but draft is sequential stochastic optimization [PAGE 3]. The clock imposes finite decision windows; MCMC posterior doesn't encode clock constraints, creating a breakdown when picks fall outside modeled range due to earlier team decisions.

CROSS_LAYER_VETO_ADJUDICATION:
"Physical/biomechanical/weather veto proof." Since this is NFL draft (not game day), physical/biomechanical/weather layers are about prospect evaluation pre-draft.
- Physical layer: Combine/measurables not in mock draft data; model only uses public mock drafts [PAGE 2]. Veto: a player with poor combine testing may slide regardless of EDP.
- Biomechanical layer: Position-specific athletic thresholds (e.g., QB hand size, WR burst) not captured in mock aggregation [PAGE 7 discussion of player evaluation].
- Weather: Not applicable to draft itself (indoor event), but weather affects college tape evaluation which feeds mock drafts indirectly. However, draft room is climate-controlled; no weather veto on draft night.
- Proof: EDP only has access to public information [PAGE 6]; teams have private medical/scouting data that can veto model output. EDP R²=0.862 leaves 14% unexplained exactly where these vetoes operate.

RLVR_COUNTERFACTUAL_VETOES:
3 verifiable scenarios + predictions.
1. Scenario: A top-10 QB with EDP posterior concentrated at picks 1-4 suffers a season-ending injury in the final college game after last mock draft weight update. Veto: Medical red flag not in public mock data shifts actual draft to day 2. Prediction: Model's 95% HDI [1.03, 7.19] (Mayfield-like) excludes actual selection; posterior predictive check fails because conditioning set (pre-draft mocks) omitted post-weight-cutoff injury.
2. Scenario: Team with pick 5 has a private scheme fit (e.g., needs a specific defensive front) and trades up for a player whose EDP is 20. Veto: Team-specific utility function overrides public EDP. Prediction: Actual selection at 5 despite EDP Q97.5 < 10; logarithmic loss increases; model's assumption of no fixed effects (mock drafts encode team needs) breaks for idiosyncratic trades.
3. Scenario: Mock draft aggregation includes 424 mocks but 178 EDP-eligible players (10+ mocks). A late-riser with only 6 mocks is excluded from EDP but gets drafted in Round 1 due to combine performance. Vero: Selection bias from 10-mock threshold. Prediction: Player with <10 mocks selected in top 32; model has no posterior for them; coverage error for the EDP-eligible population is 100% for this player (outside model domain).

I need to make sure total word count is >=1000. Let me ensure each section is substantial.

Also, the user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I should include [PAGE N] markers corresponding to the PDF pages. The source text has page numbers embedded (1, 2, 3, etc.). I'll reference those.

Let me count words roughly. THINK_TRACE needs >=400 words. Others should be substantial too to reach 1000 total.

I must NOT mention betting lines. I will avoid "odds", "spread", "moneyline", "total". I can use "probability", "credible interval", "posterior density".

Let me write the response now.

I'll structure it exactly with the XML tags.

THINK_TRACE content:
- Start with the problem: path-dependent stochastic optimization.
- Data generating process: mock drafts as repeated noisy observations of latent draft stock.
- Hierarchical specification derivation.
- The log link and Gamma distribution justification.
- MCMC details.
- Variance explanation and gray zones.
- The factor of 47 calculation.
- Selection bias at n=10 mocks.
- Breakdown at zero.

Make sure to include verbatim quotes where appropriate:
- "This log-adjusted measure of Expected Draft Position (EDP) explains about 85 percent of variance in actual log-adjusted draft outcomes." [PAGE 1]
- "The hierarchical approach also benefits from the use of a Gamma distribution (with a logarithmic link function)..." [PAGE 3]
- "I chose not to include any fixed effects in the model because I believe that quite a lot of the issues that fixed effects would be used for are already accounted for in the mock drafts themselves." [PAGE 3]
- "The model is fit using a Markov Chain Monte Carlo simulation with 4 chains and 5000 iterations..." [PAGE 3]

SOURCE_OPERATORS_AND_EQUATIONS:
LaTeX block.
Define y_{ij} ∈ ℝ⁺ as mock draft pick for player i in mock j.
w_j ∈ [0,1] weight index based on inverse date difference.
log(μ_{ij}) = α_i + β_i w_j + ε_{ij}
α_i ~ N(μ_α, σ_α²), β_i ~ N(μ_β, σ_β²)
Likelihood: y_{ij} ~ Gamma(k, θ) with log link.
Posterior: p(θ|y) ∝ ∏ Gamma(y_{ij}|μ_{ij}, φ) × Normal priors.
MCMC: 4 chains × 5000 iterations.
Breakdown regimes: y=0 log singularity; n_i < 10 exclusion; single-year prior vacuity.

RETROCAUSAL_GENEALOGY:
- Tetlock wisdom of crowds → Burke Bayesian Draft Analysis Tool → Robinson hierarchical Bayes.
- Massey & Thaler market inefficiency context.
- Caudill & Mixon accuracy metrics.
- ESPN product 2020.
- Multi-week trap: July 2017 to April 2018 drift; downweighting early mocks may discard early signal that becomes relevant if player stock collapses late.
- Lombardi quote "not foolproof" [PAGE 8].

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: GM reverts to safe pick under clock pressure despite EDP range.
- Counter-trap: Berry trade down example, using HDI to accept risk.
- Clock: sequential pick dependency; model outputs independent marginal posteriors per player but actual draft is a matching without replacement. Breakdown when two players have overlapping HDIs and both are expected at same pick; only one can be selected.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical: Combine, medical. Not in model. Veto example: player slides due to medical.
- Biomechanical: Position-specific traits not in public mock data.
- Weather: Draft is indoors; zero direct weather veto. Indirect: college weather affects tape but model doesn't condition on weather.
- R²=0.862 means 13.8% variance unexplained; veto layer operates there.

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios as above.

Now, word count. I'll write generously.

Let's begin composing.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's central inferential problem is that the NFL Draft is a path-dependent stochastic optimization: each selection removes a player from the feasible set, conditionalizes the next team's information set, and alters the probability mass of all remaining prospects. Robinson treats the 424 mock drafts (2018 cycle) as noisy, nested observations of each prospect's latent draft stock [PAGE 2]. Because mocks are produced by heterogeneous Draftniks (media, experts, fans) across time—from July 2017 through April 2018 [PAGE 4-5]—the data-generating process has repeated measures within player and temporal non-stationarity within mock. A frequentist linear model would violate independence assumptions and produce imprecise intervals [PAGE 1], motivating the Bayesian hierarchical specification.

Derivation proceeds in three hops. First, the likelihood: mock draft picks are strictly positive and right-skewed, so Robinson employs a Gamma likelihood with a logarithmic link function [PAGE 3]. Let y_{ij} ∈ ℝ⁺ be the mock pick assigned to player i in mock j, and let w_j ∈ [0,1] be the draft-weight index based on the inverse difference between the mock date and the day after draft start [PAGE 2]. The linear predictor is log(μ_{ij}) = α_i + β_i w_j + ε_{ij}, where μ_{ij} is the conditional mean draft position. Second, the hierarchical layer: players receive random intercepts α_i ~ Normal(μ_α, σ_α²) and random slopes β_i ~ Normal(μ_β, σ_β²) on the time-weight covariate [PAGE 3]. This random-slope structure allows each player's stock trajectory—early mock skepticism versus late draft-night convergence—to vary individually rather than forcing a common temporal trend. Third, the prior and computation: because only one draft year is modeled, Robinson uses no informative prior [PAGE 3], and estimates the posterior via MCMC with 4 chains and 5,000 iterations [PAGE 3].

Gray-zone audit: The logarithmic transform constricts numerical space but implicitly overweights early picks [PAGE 3]. Robinson's own arithmetic shows log(4) − log(1) ≈ 1.386 versus log(104) − log(101) ≈ 0.0295, a sensitivity ratio of approximately 47× [PAGE 3]. This compresses late-round variance into near-indistinguishability while magnifying early-pick differences, meaning the model's 85% variance explanation [PAGE 1] applies primarily to the log-scale head of the distribution. Singularity regimes include y_{ij} = 0 (log undefined; the data use positive picks only) and n_i < 10 mocks, which excludes 236 of 414 draft-eligible players from EDP estimation [PAGE 2 Table 1]. The no-fixed-effects assumption [PAGE 3] rests on the claim that mock drafts already encode team needs and player quality; if a team makes an idiosyncratic scheme-driven reach unreflected in public mocks, the model cannot capture it. Finally, single-year data means posterior uncertainty is driven almost entirely by likelihood curvature rather than prior regularization, so credible intervals such as Baker Mayfield's [1.03, 7.19] [PAGE 5 Table 3] reflect mock-draft dispersion, not team-room private information.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and units:

Data operator: Let \mathcal{D} = {(i,j,y_{ij},w_j)} where i indexes 414 draft-eligible players, j indexes 424 mock drafts, y_{ij} ∈ ℕ⁺ is mock draft pick number (dimensionless count), and w_j is the temporal weight index derived from inverse date distance to the day after draft start [PAGE 2].

Likelihood operator: y_{ij} | μ_{ij}, φ ∼ Gamma(shape = φ, scale = μ_{ij}/φ) with canonical log link g(μ_{ij}) = log(μ_{ij}) [PAGE 3]. Units: μ_{ij} in picks; φ dimensionless precision.

Hierarchical random-effects operator:
α_i ∼ Normal(μ_α, σ_α²), β_i ∼ Normal(μ_β, σ_β²) [PAGE 3]
log(μ_{ij}) = α_i + β_i w_j + ε_{ij}, ε_{ij} ∼ Normal(0, σ²)

No fixed effects are included [PAGE 3].

Posterior operator: p(θ | \mathcal{D}) ∝ [∏_{i,j} Gamma(y_{ij} | μ_{ij}(θ), φ)] × p(θ), where θ = {α_i, β_i, μ_α, σ_α, μ_β, σ_β, φ} [PAGE 3].

Computation operator: MCMC with 4 chains × 5,000 iterations [PAGE 3]; posterior summaries: maximum a posteriori (MAP) estimate, 95% highest density interval (HDI), and quantiles Q2.5/Q97.5 [PAGE 5].

Log-transform sensitivity check [PAGE 3]:
Δz_{early} = log(4) − log(1) ≈ 1.386
Δz_{late} = log(104) − log(101) ≈ 0.0295
ratio = Δz_{early} / Δz_{late} ≈ 47.

Empirical fit [PAGE 1 Abstract; PAGE 2 Table 2]: log-transformed EDP Rank R² = 0.8622545, Adjusted R² = 0.8614197, AIC = 50.2533, BIC = 59.60728.

Verbatim quotes:
- "This log-adjusted measure of Expected Draft Position (EDP) explains about 85 percent of variance in actual log-adjusted draft outcomes." [PAGE 1]
- "The hierarchical approach also benefits from the use of a Gamma distribution (with a logarithmic link function)..." [PAGE 3]
- "I chose not to include any fixed effects in the model because I believe that quite a lot of the issues that fixed effects would be used for are already accounted for in the mock drafts themselves." [PAGE 3]
- "The model is fit using a Markov Chain Monte Carlo simulation with 4 chains and 5000 iterations to produce each prospect's posterior distributions." [PAGE 3]

Breakdown/singularity regimes: (1) y_{ij} → 0 violates the Gamma support ℝ⁺ and the log link; (2) players with fewer than 10 mocks are EDP-ineligible and receive no posterior [PAGE 2 Table 1 footnote]; (3) single-year conditioning yields a vacuous prior, so posterior intervals reflect mock dispersion only, not draft-room private information [PAGE 3]; (4) the model outputs independent marginal posteriors per player, but the actual draft is a sequential matching without replacement, so overlapping HDIs across prospects are not mutually exclusive in model space but are mutually exclusive in draft reality [PAGE 3, PAGE 5-6].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage of this work stretches from political-forecasting psychology into NFL front-office analytics. Philip Tetlock's Expert Political Judgment (2005/2008) and Superforecasting (2015 with Gardner) established that aggregating expert predictions via "wisdom of crowds" methods, scored with Brier metrics, can outperform individual subject-matter judgment [PAGE 2]. Brian Burke's 2014 Bayesian Draft Analysis Tool directly imported this logic into football: expert analyst rankings were weighted by each analyst's historical accuracy to produce a Bayesian draft forecast, later commercialized as ESPN's NFL Draft Predictor for 2020 [PAGE 1-2]. Caudill and Mixon (2013) preceded this by scoring individual mock-draft accuracy using Euclidean distance, Spearman rank-correlation, and salary-misallocation metrics, critiquing the industry's lack of statistical rigor [PAGE 1-2]. Robinson's own earlier frequentist work (Robinson 2020) proved the concept that mock-draft data associate with actual outcomes on a logarithmic basis, but suffered from imprecise intervals and no nested-data structure [PAGE 1].

The broader economic context includes Massey and Thaler's "Loser's Curse" (2013) on draft-pick trade inefficiency, Berri and Simmons (2009) on quarterback selection, and Mulholland and Jensen (2014) on tight-end career prediction [PAGE 1]. Robinson's paper is therefore a methodological bridge: it accepts the mock-draft aggregation premise of Tetlock/Burke but replaces point-estimate weighting with a full hierarchical Bayesian posterior, using MCMC to propagate uncertainty through path-dependent draft outcomes [PAGE 1-3].

Multi-week traps: The data span July 2017 to April 2018 [PAGE 4-5], and Robinson explicitly downweights early mocks via a linear weight based on inverse date difference [PAGE 2]. This creates a temporal selection trap: early mocks may capture durable trait evaluations (scheme fit, size, speed) that late mocks overlook in favor of recency bias (Senior Bowl, combine, pro day). A prospect whose stock is stable from July but dips in April because of a poor workout may be unfairly downgraded by the weighting scheme. Conversely, a late riser with only six mocks is excluded entirely by the n ≥ 10 EDP-eligibility rule [PAGE 2 Table 1], producing survivorship bias in the modeled population. Lombardi's 2019 observation that aggregating all mocks "is not foolproof" [PAGE 8] captures the residual risk: public mocks reflect consensus, not private team boards, medical red flags, or scheme-specific utility functions.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory of mind here concerns what a general manager believes about what other GMs believe, under time pressure. Crisis habit regression occurs when a decision-maker, facing the draft clock, abandons the probabilistic model and reverts to a familiar heuristic: drafting the highest-ranked player regardless of expected value, or reaching for a position of need outside the player's credible interval. Baker Mayfield illustrates this tension: mocks expected Sam Darnold first, yet the Browns selected Mayfield first overall even though his model EDP was 3.39 with a 95% credible interval spanning picks 1 to 7 [PAGE 5 Table 3]. A GM regressing to crisis habit would treat pick 1 as a fixed obligation rather than a draw from a posterior distribution.

The counter-trap is the Andrew Berry–Colts trade episode [PAGE 6-7]. Berry was offered pick 44 plus a fifth-rounder (pick 160) for his pick 41. Instead of selecting Grant Delpit out of fear of losing him, Berry consulted scouting staff on team needs ahead of Cleveland, asked his R&D staff for pick-by-pick probabilities, and accepted the trade. Delpit remained available three picks later. This is a counter-trap because it uses the model's full posterior (not merely the point estimate) to price the option value of waiting, then executes a trade down when the hazard rate of Delpit being selected is judged low relative to the acquired draft capital.

The clock layer introduces path dependency: the model estimates each player's marginal posterior independently [PAGE 3], but the draft proceeds sequentially without replacement. When two prospects have overlapping 95% HDIs (e.g., both centered on picks 3–6), the model cannot represent the mutual exclusion constraint that only one can occupy pick 3. Under clock pressure, a team must condition its choice on realized earlier picks—information the static hierarchical posterior does not recursively update. The breakdown regime is therefore a sequential-matching inconsistency: marginal HDIs are valid for individual prospects, but joint draft outcomes require a combinatorial assignment model the paper does not specify [PAGE 3, PAGE 6].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The EDP model conditions only on public mock-draft data [PAGE 2]; it does not observe NFL Combine measurements, medical red flags, or biomechanical testing. A prospect may have a tight posterior around picks 10–15 yet slide to day two because of a failed physical or anomalous combine result. The model has no physical-layer node, so any medical or athletic threshold constitutes a hard veto outside the likelihood.

Biomechanical layer: Position-specific athletic archetypes (e.g., edge-rusher burst, quarterback hand size, offensive-line anchor strength) are not variables in the model. Mock drafts may implicitly price these traits through Draftnik consensus, but the model treats them as latent noise. If a team's private scouting grades a player below biomechanical replacement level despite high mock-draft EDP, the team vetoes the model output.

Weather layer: The draft itself is conducted indoors under controlled conditions; there is zero direct weather veto on draft night [PAGE 6-7 describes an indoor trade-call scenario]. Indirectly, weather affects college-game tape quality and thus the public information available to Draftniks during the July–April mock season [PAGE 4-5], but Robinson's model does not condition on weather covariates. Because the likelihood is Gamma with a log link on mock picks only, weather enters only insofar as it alters mock-draft text, which is not modeled.

Adjudication proof: Table 2 reports R² = 0.8622545 for log-transformed EDP rank [PAGE 2]. The residual 13.8% of variance—and the gap between EDP and actual draft slot in future Approximate Value prediction [PAGE 7]—is precisely where physical, biomechanical, and private-scouting vetoes operate. EDP is therefore veto-proof only within the subspace of public-consensus draft outcomes; it cannot survive a veto from a team's private medical file, scheme-specific biomechanical requirement, or clock-driven idiosyncratic trade.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Post-weight-cutoff injury veto. A quarterback has an EDP posterior concentrated at picks 2–5 (HDI [2.1, 5.4]) based on mocks weighted through late April. In the final college game, after the last mock-draft weight update, he suffers a season-ending injury not yet reflected in public mocks. The model's conditioning set excludes the injury; the actual draft selection falls to the third day. Prediction: The player is selected outside the 99% posterior predictive interval; the model's coverage probability for this player is 0%, violating the assumption that all decision-relevant information is captured by public mock-draft weights [PAGE 2-3].

Scenario 2: Idiosyncratic trade-up fixed-effect veto. A team with pick 8 privately values a specific defensive scheme fit and trades up to select a player whose public EDP posterior centers on pick 24 (Q97.5 = 28). Robinson's assumption that fixed effects are unnecessary because mock drafts already encode team needs [PAGE 3] breaks here: the trade reflects private utility not in the mock consensus. Prediction: Actual selection at pick 8 exceeds the model's Q97.5 by 16 positions; logarithmic loss increases sharply because the log transform amplifies early-pick errors by roughly 47× relative to late-pick errors [PAGE 3].

Scenario 3: Eligibility-threshold exclusion veto. A late-riser participates in only six mock drafts, below the 10-mock EDP-eligibility threshold [PAGE 2 Table 1], and therefore receives no posterior distribution. He performs exceptionally at the combine and is selected in the first round (pick 28). Prediction: The model assigns this player zero prior predictive mass because he is outside the EDP-eligible population; for this player the model's domain coverage is null, and any claim of 85% variance explanation [PAGE 1] does not apply to the excluded 236 players [PAGE 2 Table 1].
</RLVR_COUNTERFACTUAL_VETOES>