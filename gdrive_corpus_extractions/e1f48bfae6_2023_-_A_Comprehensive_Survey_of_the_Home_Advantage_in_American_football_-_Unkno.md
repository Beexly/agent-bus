---
source: "2023 - A Comprehensive Survey of the Home Advantage in American football - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2023"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4857
---

<NATIVE_REASONING>
The user wants me to analyze a source document about home advantage in American football using a very specific framework with strict invariants. Let me break down what's required:

1. ZERO BETTING LINES - no spreads, totals, moneylines, odds
2. ZERO TOY EQUATIONS - no fake ratios, must use formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes, cite exact [PAGE N] markers and verbatim quotes when source pages provided
3. >= 1,000-word depth across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

Source: single page document about home advantage survey in American football. Key details:
- Authors: Bliss, Luke Benz, Michael Thompson Lopez (affiliations NFL, Harvard TH Chan)
- Data: nearly two decades NFL, NCAA, high schools
- Method: STAN Bayesian linear regression paired-comparison models
- Models:
  - Constant HA: Y_ijt ~ N(θ_i - θ_j + α, σ²)
  - Linear HA: Y_ijt ~ N(θ_i - θ_j + α_0 + α_1 t, σ²)
  - Time-Varying HA: Y_ijt ~ N(θ_i - θ_j + α_t, σ²)
- Priors: Team strength θ_i ~ Normal(0, σ_θ²), σ_θ² ~ InverseGamma(1,1); Home advantage α ~ Normal(0, σ_α²), σ_α² ~ InverseGamma(1,1); Score variance σ² ~ InverseGamma(1,1)
- Results: Constant HA preferred in majority of states. 95% credible intervals for α_1 don't contain 0 in only 7/55. FBS decline roughly 0.11 points/year between 2004-2022. HA declined more in NCAA/NFL than high school. Confounding by team strength bias - Figure 2 shows observed home advantage much larger than model-based estimates.

Since only 1 page is provided, I must cite [PAGE 1] for all source references.

I need to be careful about:
- No betting lines
- No toy equations (no Force/Fatigue ratios etc.)
- Formal LaTeX equations only
- Exact page citations [PAGE 1]
- Verbatim quotes where appropriate
- 1000+ words total across sections
- THINK_TRACE >= 400 words

Let me structure the response carefully.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. I need to discuss the statistical framework, the confounding by team strength, the model comparison (ELPD/LOO), the temporal trends, the FBS decline, the difference between observed vs model-based HA, the attenuation in professional leagues due to playoff hosting, etc. Must be >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown. I'll write out the three models with proper LaTeX, the priors, define variables, units (points/year, score differential in points), assumptions (exchangeability, conditional independence given team effects, normality), breakdown regimes (small sample states, playoff selection bias, confounding when team strength not adjusted, non-stationarity).

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Discuss home advantage research lineage (Courneya & Carron, etc. but only if I can ground in source - actually I should stick to what's in source plus general scientific lineage clearly marked as context). The source cites Gelman and colleagues [1] Vehtari et al. 2017 LOO-CV. Discuss multi-week traps: temporal non-stationarity, schedule strength, playoff hosting.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is about how teams/coaches regress to crisis habits, counter-traps (adjusting for confounding), and the clock (temporal trends over 2004-2022).

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Since source doesn't discuss weather/biomechanics explicitly, I need to note that the statistical model lacks physical layer variables (travel, crowd noise, weather, fatigue) and these constitute veto layers not represented in the paired-comparison score differential model. I can discuss what would veto the conclusions if added.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? I need to create 3 counterfactual veto scenarios that are verifiable, with predictions. Must avoid betting lines.

Let me draft carefully, ensuring word count and no betting references.

Word count target: 1000+ words total. THINK_TRACE alone needs 400+.

Let me write THINK_TRACE first (~500 words):

The source text presents a Bayesian hierarchical paired-comparison framework for estimating home advantage (HA) in American football across NFL, NCAA, and high school levels from 2004-2022. The central identification problem is separating the causal effect of playing at home from the confounding effect of team strength. In the generative model, the observed score differential Y_ijt for team i visiting team j in year t is decomposed into latent team strengths θ_i and θ_j, a home term α (or α_t), and observation noise σ². Because better teams are more likely to host games—particularly in lower levels where facilities and budgets correlate with hosting, and in the NFL where playoff games are hosted by better teams—a naive difference in mean score differentials between home and away games conflates team quality with venue advantage.

The paper fits three nested specifications in STAN: a constant home advantage (Model 1), a linear temporal trend in home advantage (Model 2), and a fully time-varying home advantage (Model 3). Model comparison uses expected log pointwise predictive density (ELPD) via leave-one-out cross-validation (LOO-CV) as described by Vehtari, Gelman, and Gabry [1], cited on [PAGE 1]. Across 50 high school states, 4 NCAA divisions, and the NFL, the constant HA trend is preferred in the majority of jurisdictions. For the linear slope α_1, the 95% posterior credible interval excludes zero in only 7 of 55 state/league units, indicating that most contexts show no credible linear change in HA over the sample period.

However, the paper identifies a notable exception: FBS exhibits the largest estimated decline, approximately 0.11 points per year between 2004 and 2022. This implies a cumulative erosion of roughly 2 points over the two-decade window if the linear approximation holds. The authors also observe that raw, unadjusted "observed" home advantage (mean HOME minus AWAY score differential per league-season) is substantially larger than any model-based estimate, as visualized in Figure 2 on [PAGE 1]. This gap quantifies the magnitude of confounding bias from omitting team-strength parameters: strong teams host more often and win more often, so the raw home-away gap overstates the true venue effect.

A gray-zone issue involves attenuation in professional leagues. Because NFL playoff games are hosted by better teams, even with relatively balanced schedules, model-based HA estimates may be attenuated relative to empirical observations. This selection mechanism operates differently across levels: in college and high school, better teams host more home games due to facilities and budgets, whereas in the NFL the playoff hosting rule creates an endogenous venue assignment conditional on team quality. The model partially addresses this by including team-strength random effects with Normal(0, σ_θ²) priors and σ_θ² ~ InverseGamma(1,1), but the cross-level comparability of α remains limited by these distinct selection regimes.

Another gray zone is the breakdown of the linear trend assumption. If HA evolution is non-monotonic or exhibits regime shifts (e.g., rule changes, realignment, pandemic-era empty stadiums), a single linear slope α_1 or a constant α will misrepresent the dynamic. The time-varying model (Model 3) allows α_t to vary freely, yet the paper reports that constant HA is preferred in most places, suggesting the data do not strongly support complex temporal dynamics outside FBS. The boundary between "no credible trend" and "trend too noisy to detect" depends on statistical power within each state/league, especially for smaller high school samples where the posterior for α_1 may be diffuse.

Now SOURCE_OPERATORS_AND_EQUATIONS. Formal LaTeX.

Define:
- Y_ijt: score differential (points), unit: points
- θ_i: team i strength latent parameter, unit: points
- α: home advantage intercept, unit: points
- α_1: linear trend in home advantage, unit: points/year
- α_t: time-varying home advantage, unit: points
- σ²: score variance, unit: points²
- σ_θ²: team strength variance, unit: points²
- σ_α²: home advantage variance, unit: points²

Models from [PAGE 1]:
Constant HA:
Y_ijt ~ Normal(θ_i - θ_j + α, σ²)   (1)

Linear HA:
Y_ijt ~ Normal(θ_i - θ_j + α_0 + α_1 t, σ²)   (2)

Time-Varying HA:
Y_ijt ~ Normal(θ_i - θ_j + α_t, σ²)   (3)

Priors [PAGE 1]:
θ_i ~ Normal(0, σ_θ²)
σ_θ² ~ InverseGamma(1, 1)
α ~ Normal(0, σ_α²)
σ_α² ~ InverseGamma(1, 1)
σ² ~ InverseGamma(1, 1)

Assumptions: conditional independence of games given team and home parameters; exchangeability of teams within the prior; normality of score differentials; ignorable missingness (all games observed); temporal index t measured in years.

Breakdown regimes: 
- σ² → 0: degenerate, overconfident predictions
- Small N per state: posterior for α_1 dominated by prior, credible intervals wide
- Non-ignorable venue assignment: if home status is determined by team strength (playoff hosting), θ and α are not separately identified without strong assumptions
- Non-stationarity: structural breaks invalidate constant/linear α

Cite [PAGE 1] throughout.

RETROCAUSAL_GENEALOGY: lineage of home advantage research. The paper fits into tradition of paired-comparison models (Bradley-Terry, etc.) extended to score differentials with Bayesian hierarchical priors. Cites Vehtari et al. 2017 for LOO-CV [PAGE 1]. Historical trajectory: early HA work focused on crowd familiarity, travel fatigue, referee bias; modern work uses statistical adjustment for team quality. Multi-week traps: In a season, week-to-week HA may vary due to short-week games (Thursday night), travel across time zones, weather, and playoff seeding. The source's annual aggregation (t indexes year) masks intra-seasonal dynamics. A multi-week trap is assuming that an annual α_t captures venue effects that are actually concentrated in specific weeks (e.g., Week 1 vs. postseason). Another trap is survivor bias: teams that reach playoffs host games, so end-of-season HA estimates are conditional on success.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Coaches under pressure may revert to conservative play-calling (crisis habit regression) when away, which interacts with venue. Counter-trap: the statistical adjustment for team strength is itself a counter-trap against naive inference that raw home-away differences are causal. Clock: the 2004-2022 temporal window. If HA is declining at 0.11 points/year in FBS, the clock matters—a model fit to 2004 data misestimates 2022 HA. Recursive theory of mind: teams anticipate home advantage and adjust preparation; if coaches believe HA is eroding, they may change travel protocols or roster construction, which in turn changes the measured HA, creating a feedback loop not captured by the exogenous α in Equations (1)-(3).

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. The source model is purely statistical on score differentials; it contains no physical layer variables (air density, temperature, precipitation, wind speed), no biomechanical variables (player load, travel-induced circadian disruption, injury status), and no stadium variables (crowd noise decibel levels, field surface). A veto proof: if weather systematically differs between home and away games (e.g., domed vs. outdoor stadiums, or teams from warm climates playing in cold weather), then α absorbs weather effects, violating the exclusion restriction that α represents pure venue advantage. Similarly, if teams with better strength also play in better weather regimes or have home stadiums that reduce travel fatigue, θ and α are confounded beyond the team-strength random effect. The model is therefore veto-proof only under the strong assumption that all physical and biomechanical determinants of score differentials are orthogonal to venue assignment conditional on team strength—an assumption not tested in [PAGE 1].

RLVR_COUNTERFACTUAL_VETOES: Three verifiable veto scenarios with predictions.

Scenario 1: Confounding by playoff hosting. Prediction: If we restrict to NFL regular-season games only and exclude all playoff games, the posterior mean of α should increase relative to the full-sample estimate because the selection mechanism where better teams host postseason games is removed. Veto: if α does not increase or changes negligibly, the playoff-attenuation claim in [PAGE 1] is not supported by the data-generating process.

Scenario 2: Weather-venue interaction. Prediction: If home advantage is estimated separately for games played in enclosed domes versus open-air stadiums, and dome home teams show systematically higher α than open-air home teams after controlling for θ, then the pooled α in Equation (1) is a mixture parameter and the constant-HA preference is invalid for open-air subsets. Veto: if dome and open-air α estimates overlap within 95% credible intervals, weather does not veto the pooled model.

Scenario 3: Short-week temporal heterogeneity. Prediction: If α_t is estimated for Thursday-night games (short recovery) versus Sunday games (standard recovery), and Thursday games show a different sign or magnitude for α relative to Sunday games, then the annual time-varying model (Equation 3) masks intra-seasonal regime shifts. Veto: if posterior distributions for Thursday vs. Sunday α_t are statistically indistinguishable, the annual clock assumption holds.

Each scenario is verifiable because it depends on re-estimating the stated STAN model on subsets of the same NFL/NCAA/high school game logs described in [PAGE 1], using the identical priors and likelihood.

Need to ensure total >=1000 words. Let me estimate. THINK_TRACE ~500. SOURCE_OPERATORS ~300. RETRO ~200. RECURSIVE ~150. CROSS ~200. RLVR ~200. Total ~1550. Good.

Need exact [PAGE 1] citations and verbatim quotes where appropriate. I'll include quotes like "In particular, we are interested in the question of whether/how much home advantage has changed over time" [PAGE 1]. And "FBS exhibits the largest estimated decline in HA, with a drop of roughly 0.11 points/year between 2004-2022" [PAGE 1].

Check for betting lines: none.
Check for toy equations: none. Only the source's formal models.

Let me write the final output with proper XML tags.
</NATIVE_REASONING>

<THINK_TRACE>
The source text presents a Bayesian hierarchical paired-comparison framework for estimating home advantage (HA) in American football across the NFL, NCAA divisions, and high school leagues from 2004 to 2022. The central identification problem is separating the causal effect of playing at home from the confounding effect of team strength. In the generative model, the observed score differential Y_ijt for team i visiting team j in year t is decomposed into latent team strengths θ_i and θ_j, a home term α (or α_t), and observation noise σ². Because better teams are more likely to host games—particularly in lower levels where facilities and budgets correlate with hosting, and in the NFL where playoff games are hosted by better teams—a naive difference in mean score differentials between home and away games conflates team quality with venue advantage.

The paper fits three nested specifications in STAN: a constant home advantage (Model 1), a linear temporal trend in home advantage (Model 2), and a fully time-varying home advantage (Model 3). Model comparison uses expected log pointwise predictive density (ELPD) via leave-one-out cross-validation (LOO-CV) as described by Vehtari, Gelman, and Gabry [1], cited on [PAGE 1]. Across 50 high school states, 4 NCAA divisions, and the NFL, the constant HA trend is preferred in the majority of jurisdictions. For the linear slope α_1, the 95% posterior credible interval excludes zero in only 7 of 55 state/league units, indicating that most contexts show no credible linear change in HA over the sample period.

However, the paper identifies a notable exception: FBS exhibits the largest estimated decline, approximately 0.11 points per year between 2004 and 2022, as stated on [PAGE 1]. This implies a cumulative erosion of roughly 2 points over the two-decade window if the linear approximation holds. The authors also observe that raw, unadjusted "observed" home advantage (mean HOME minus AWAY score differential per league-season) is substantially larger than any model-based estimate, as visualized in Figure 2 on [PAGE 1]. This gap quantifies the magnitude of confounding bias from omitting team-strength parameters: strong teams host more often and win more often, so the raw home-away gap overstates the true venue effect.

A gray-zone issue involves attenuation in professional leagues. Because NFL playoff games are hosted by better teams, even with relatively balanced schedules, model-based HA estimates may be attenuated relative to empirical observations. This selection mechanism operates differently across levels: in college and high school, better teams host more home games due to facilities and budgets, whereas in the NFL the playoff hosting rule creates an endogenous venue assignment conditional on team quality. The model partially addresses this by including team-strength random effects with Normal(0, σ_θ²) priors and σ_θ² ~ InverseGamma(1,1), but the cross-level comparability of α remains limited by these distinct selection regimes.

Another gray zone is the breakdown of the linear trend assumption. If HA evolution is non-monotonic or exhibits regime shifts (e.g., rule changes, realignment, pandemic-era empty stadiums), a single linear slope α_1 or a constant α will misrepresent the dynamic. The time-varying model (Model 3) allows α_t to vary freely, yet the paper reports that constant HA is preferred in most places, suggesting the data do not strongly support complex temporal dynamics outside FBS. The boundary between "no credible trend" and "trend too noisy to detect" depends on statistical power within each state/league, especially for smaller high school samples where the posterior for α_1 may be diffuse. A further gray zone is prior sensitivity: the InverseGamma(1,1) hyperpriors on variance components are weakly informative but can exert non-negligible influence on the posterior for α when group-level data are sparse, which is common across the 50 high school states.

Finally, the temporal index t is modeled as calendar year, which assumes that home advantage changes smoothly with calendar time rather than with intra-seasonal scheduling structure. This annual aggregation may conceal week-specific venue effects (short-week games, travel across time zones, weather), meaning that a stable annual α could coexist with volatile within-season home/away differentials. The paper's conclusion that HA has declined more in NCAA/NFL than in high school rests on comparing heterogeneous populations under different venue-allocation rules, so cross-level trend comparisons require caution.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let Y_ijt denote the score differential of a game in which team i plays at team j in year t, measured in points. Let θ_i and θ_j denote latent team-strength parameters for the visiting and home teams, respectively, measured in points. Let α denote the home-advantage intercept in points, α_1 the linear temporal trend in home advantage in points per year, α_t the time-varying home advantage in points at year t, σ² the score differential variance in points², σ_θ² the team-strength variance in points², and σ_α² the home-advantage variance in points². All model specifications and priors are reproduced verbatim from [PAGE 1].

Constant home advantage (Model 1) [PAGE 1]:
\[
Y_{ijt} \sim \mathcal{N}\bigl(\theta_i - \theta_j + \alpha,\ \sigma^2\bigr)
\tag{1}
\]

Linear home advantage trend (Model 2) [PAGE 1]:
\[
Y_{ijt} \sim \mathcal{N}\bigl(\theta_i - \theta_j + \alpha_0 + \alpha_1 t,\ \sigma^2\bigr)
\tag{2}
\]

Time-varying home advantage (Model 3) [PAGE 1]:
\[
Y_{ijt} \sim \mathcal{N}\bigl(\theta_i - \theta_j + \alpha_t,\ \sigma^2\bigr)
\tag{3}
\]

Prior hierarchy [PAGE 1]:
\[
\theta_i \sim \mathcal{N}(0,\ \sigma_\theta^2), \qquad \sigma_\theta^2 \sim \operatorname{InverseGamma}(1,\,1)
\]
\[
\alpha \sim \mathcal{N}(0,\ \sigma_\alpha^2), \qquad \sigma_\alpha^2 \sim \operatorname{InverseGamma}(1,\,1)
\]
\[
\sigma^2 \sim \operatorname{InverseGamma}(1,\,1)
\]

Assumptions encoded in the likelihood: (i) conditional independence of game outcomes given team strengths and the home term; (ii) exchangeability of teams under the common Normal prior for θ_i; (iii) Gaussian observation noise with constant variance σ² across games and years; (iv) ignorable venue assignment conditional on θ and α. The authors explicitly note on [PAGE 1] that failure to adjust for team strength produces severely biased HA estimates and overstates temporal trends, as illustrated by Figure 2.

Breakdown and singularity regimes: (a) If σ² → 0, the likelihood becomes degenerate and the posterior collapses to point estimates, eliminating uncertainty quantification. (b) In small-N high school states, the likelihood provides weak identification of α_1, so the posterior is dominated by the InverseGamma(1,1) hyperprior and the 95% credible interval may contain zero by default. (c) If home status is endogenously determined by team strength (e.g., playoff hosting by better teams in the NFL), θ_i and α are not separately identified without strong exclusion restrictions; the authors acknowledge this attenuation mechanism for professional leagues on [PAGE 1]. (d) If HA follows a structural break rather than a linear or constant path, Models (1)-(3) are misspecified; Model (3) partially mitigates this by allowing α_t to vary freely, but the paper reports that constant HA is preferred in the majority of states and divisions based on ELPD/LOO-CV comparison [PAGE 1]. (e) The inference "drop of roughly 0.11 points/year between 2004-2022" for FBS [PAGE 1] assumes linearity over the full interval; if the true path is episodic, this slope is a weighted average that may misrepresent any sub-period.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The statistical lineage of this work traces paired-comparison modeling from early sports ranking literature into modern Bayesian hierarchical inference. The source situates itself within a tradition of estimating home advantage across sports, criticizing prior work for being "restricted to individual leagues in short time frames" [PAGE 1], which limits extrapolation and obscures the drivers of HA. By pooling nearly two decades of NFL, NCAA, and high school data, the paper extends the temporal and organizational scope beyond conventional single-league snapshots.

Methodologically, the paper adopts the STAN probabilistic programming framework to fit Bayesian linear regression paired-comparison models, with prior structure on team strength, home advantage, and score variance. It explicitly references Gelman and colleagues for out-of-sample model evaluation: the expected log pointwise predictive density (ELPD) estimated via the leave-one-out cross-validation (LOO) approach of Vehtari, Gelman, and Gabry (2017) [PAGE 1]. This places the work in the genealogical line of modern Bayesian model assessment, moving away from in-sample fit or classical hypothesis testing toward predictive accuracy as the arbiter among constant, linear, and time-varying HA specifications.

A critical multi-week trap embedded in this lineage is temporal aggregation. Because t indexes calendar year rather than game week, the model cannot distinguish whether home advantage is stable across a season or concentrated in particular weeks (e.g., opening weekend, short-week Thursday games, or postseason). Historical home-advantage research often attributes HA to crowd familiarity, travel fatigue, and officiating; those mechanisms operate at the game or week level, yet the source's annual α or α_t collapses them into a single seasonal parameter. If, for example, home advantage is large in Weeks 1-4 and negligible in the postseason, an annual estimate will misrepresent both extremes.

Another multi-week trap is selection bias induced by playoff progression. In the NFL, better teams host playoff games, so end-of-season home games are not a random sample of team-year observations; they are conditional on success. This creates a recursive selection loop: team strength influences venue, venue influences observed score differential, and observed score differential feeds back into estimates of team strength if the model is misspecified. The authors note this attenuation concern for professional leagues on [PAGE 1]. In college and high school, the selection mechanism differs—better teams host more home games because of facilities and budgets—so the same statistical model must confront distinct confounding architectures across levels.

The paper's finding that FBS shows the largest estimated decline (~0.11 points/year, 2004-2022) [PAGE 1] suggests a regime shift within college football that is absent from most high school states. Whether this reflects realignment, changes in transfer-portal dynamics, rule modifications, or conference-specific scheduling is not identified by the paired-comparison model alone. Thus the historical lineage reveals a gap: statistical estimation of HA trends does not, by itself, diagnose the physical or organizational mechanisms causing those trends.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
From a recursive theory-of-mind perspective, the statistical agents in this model—teams, coaches, and scheduling authorities—do not treat home advantage as an exogenous constant. Coaches form beliefs about venue effects and adjust preparation, travel protocols, and game-planning accordingly. If a coaching staff believes home advantage is eroding (as the FBS estimate of -0.11 points/year suggests), they may reduce the resources allocated to home-game preparation or alter roster construction for travel resilience; those behavioral changes then alter the very score differentials the model uses to estimate α. The model in Equations (1)-(3) treats α as exogenous to team decision-making, which is a strong assumption given that strategic adaptation is recursive.

Crisis habit regression enters when teams under pressure revert to established routines. Away from home, coaches and players may regress to conservative play-calling or familiar formations under stress, amplifying the observed venue effect beyond any physical or environmental factor. This behavioral regression is not separately parameterized in the source model; it is subsumed into α if it correlates with venue. Conversely, the counter-trap is the authors' insistence on adjusting for team strength θ_i. Without this adjustment, an analyst would infer that raw home-away differences are causal venue effects, overstating HA and manufacturing spurious temporal trends (the Tennessee example on [PAGE 1]). The team-strength random effect is thus a statistical counter-trap against naive causal inference, but it remains a trap if the prior InverseGamma(1,1) on σ_θ² is too tight to absorb genuine heterogeneity in team quality across the 50 states and four NCAA divisions.

The clock operates at two scales. First, the 2004-2022 window defines the temporal domain over which α_1 is estimated; a model fit to early-window data will misestimate late-window HA if the decline is real. Second, within-season scheduling creates a faster clock: short weeks, travel distances, and opponent quality vary week to week, yet the annual t index smooths over this variation. A recursive theory-of-mind model would posit that teams observe the estimated HA trend and adapt their home/away performance differentials in response, creating a feedback loop that violates the exogeneity of α in Equations (1)-(3). The source does not model this strategic adaptation, so its estimates are best interpreted as reduced-form descriptive statistics rather than structural causal parameters immune to agent reciprocation.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The source model is a purely statistical paired-comparison on score differentials; it contains no physical layer variables (air density, temperature, precipitation, wind speed), no biomechanical variables (player load, travel-induced circadian disruption, injury status, recovery time), and no stadium variables (crowd noise, field surface, altitude). A veto proof for the home-advantage estimates therefore requires showing that these omitted layers are orthogonal to venue assignment conditional on team strength—an assumption not tested in [PAGE 1] and likely false in practice.

Physical layer veto: If home teams systematically play in more favorable weather (e.g., warm-climate teams hosting cold-weather visitors, or dome teams avoiding outdoor elements), then α absorbs meteorological effects rather than pure venue advantage. Because the likelihood in Equations (1)-(3) assigns all unexplained home-team differential to α, a weather-venue correlation violates the exclusion restriction and biases α upward or downward depending on the sign of the weather effect. For example, if northern teams host southern teams in winter, cold temperature may reduce visiting-team performance, inflating α without any "home advantage" in the sociological sense.

Biomechanical layer veto: Travel across time zones induces circadian misalignment and fatigue in visiting teams. If travel distance correlates with home status (by definition it does: visitors travel, hosts do not), then α captures travel fatigue. Similarly, if teams with stronger strength θ_i also have better recovery facilities or shorter average travel, the team-strength prior may not fully absorb this because θ is a static seasonal parameter while fatigue is game-specific. The model's assumption of constant σ² across games further assumes homoskedasticity, which is violated if short-week games or long-distance travel produce larger score-variance dispersion.

Cross-layer adjudication rule: The estimated HA is veto-proof only if, conditional on θ_i and θ_j, venue status is independent of weather, travel burden, biomechanical state, and stadium characteristics. The source provides no balance tests on these covariates. Therefore, any policy or mechanistic conclusion drawn from α (e.g., "home advantage is declining") is vulnerable to veto by an omitted physical or biomechanical layer that covaries with venue over time. The robust interpretation is that α measures the residual home-visit score differential after adjusting for latent team strength, not a causally isolated venue effect.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-from-verifiable-rewards (RLVR) counterfactual veto scenarios. Each is verifiable by re-estimating the STAN models from [PAGE 1] on subsets of the same NFL/NCAA/high school game logs using identical priors.

Veto Scenario 1 — Playoff-hosting attenuation. Counterfactual: Restrict the NFL sample to regular-season games only and exclude all postseason games. Prediction: Because better teams host playoff games (an endogenous selection mechanism noted on [PAGE 1]), removing playoffs should reduce the attenuation of α; the posterior mean of α in the regular-season-only model should be greater than or equal to the full-sample α estimate. Veto condition: If the regular-season-only posterior for α is statistically indistinguishable from or lower than the full-sample estimate, the playoff-attenuation claim in [PAGE 1] is not supported by the data-generating process, and the cross-level comparison between professional and amateur leagues is confounded by selection.

Veto Scenario 2 — Weather-stadium heterogeneity. Counterfactual: Split games into enclosed dome stadiums versus open-air stadiums and estimate α separately for each subset while retaining the team-strength random effects. Prediction: If home advantage in domes systematically differs from open-air stadiums (e.g., dome α > open-air α because weather is neutralized indoors), then the pooled α in Equation (1) is a mixture parameter, and the preference for constant HA across all leagues [PAGE 1] is invalid for weather-exposed subsamples. Veto condition: If the 95% credible intervals for dome and open-air α overlap substantially, weather does not veto the pooled model; if they are disjoint, the constant-HA conclusion is vetoed for open-air contexts.

Veto Scenario 3 — Intra-week recovery heterogeneity. Counterfactual: Estimate α_t separately for Thursday-night games (short recovery, compressed turnaround) versus Sunday games (standard weekly cycle) within the NFL. Prediction: Short-week travel and fatigue may produce a different sign or magnitude for α relative to standard-week games. If Thursday games show α near zero or negative while Sunday games show positive α, then the annual time-varying model (Equation 3) masks intra-seasonal regime shifts, and the reported "constant HA preferred" result [PAGE 1] is an artifact of temporal aggregation. Veto condition: If the posterior distributions for Thursday vs. Sunday α_t are statistically indistinguishable, the annual clock assumption holds; if they diverge, the model's temporal resolution is insufficient and any claim about HA trends over 2004-2022 is vetoed by weekly heterogeneity.
</RLVR_COUNTERFACTUAL_VETOES>