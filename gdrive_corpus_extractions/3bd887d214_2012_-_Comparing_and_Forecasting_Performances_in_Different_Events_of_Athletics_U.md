---
source: "2012 - Comparing and Forecasting Performances in Different Events of Athletics Using a Probabilistic Model - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Quantitative Analysis in Sports/2012"
pages: 25
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4787
---

<NATIVE_REASONING>
The user wants a deep analysis of the provided source paper: "Comparing and Forecasting Performances in Different Events of Athletics Using a Probabilistic Model" by Brian Godsey (2012). The output must follow strict invariants:

1. Zero betting lines: No spreads, totals, moneylines, odds.
2. Zero toy equations: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-word depth across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully read and cite from the provided pages. The source text covers pages 1-25. I must include verbatim quotes where appropriate and [PAGE N] markers.

Let me plan each section:

**THINK_TRACE (>=400 words):** Deep multi-hop derivation. I need to trace the logical chain from the problem (comparing disparate athletic events) through the model (log-normal, truncated tail, empirical Bayes prior on N_k), to the scoring formula S_a, to the validation (Pearson correlations with future outcomes). I should audit gray zones: tail fitting assumptions, MCMC convergence issues, small lists (women's mile n=18), prior robustness (75% subset), population size estimation (N_k up to 2.71e16 unrestricted), the choice of 0.125 expected exceedances mapping to 1300 points, and the mile/1500m population borrowing. Also the 2012 Olympic predictions and world record probabilities.

**SOURCE_OPERATORS_AND_EQUATIONS:** Formal LaTeX equations from the paper with units and page citations.
- Eq 1: p_a = integral from -inf to a of N(x|mu_k, sigma_k^2) dx [PAGE 7]
- Eq 2: truncated normal pdf p_k(x | ...) [PAGE 7]
- Eq 3: posterior density l(mu, sigma^2 | X) ... [PAGE 7]
- Eq 4: F(w_k | mu, sigma^2) = n_k / N_k [PAGE 8]
- Eq 5, 6: mu_N and sigma_N^2 updates [PAGE 9]
- Eq 7: A_k(a | mu_k, N_k) = N_k / t_m * F(a | ...) [PAGE 10]
- Eq 8: posterior expectation \hat{n}_k(a) [PAGE 10]
- Eq 9: B_k(a | ...) = 1 - [1 - F(a|...)]^(t_f N_k / t_m) [PAGE 11]
- Eq 10: \hat{p}_k(a) posterior expectation [PAGE 11]
- Eq 11: \hat{y}_1 = integral y1 * d/dy1 \hat{p}_k(y1) dy1 [PAGE 11]
- Eq 12: Scoring formula S_a [PAGE 12]
Also units: log(performance), seconds, cm, years, dimensionless scores 0-1300, probabilities [0,1], Pearson correlations dimensionless.

**RETROCAUSAL_GENEALOGY:** Historical lineage: McMillan (2011), Cameron (1998), Riegel (1977), Daniels & Gilbert (1979), Purdy Points (Gardner & Purdy 1970), IAAF scoring tables (Spiriev 2008/2011), Gelman & Rubin (1992), Hastings (1970), MacKay (1999). Multi-week traps: using all data vs 5-year windows, women's marathon mixed-sex pacing, doping outliers (shot put/discus top-100 absent for ~10 years), event maturity (women's steeplechase Olympic since 2008), mile vs 1500m population borrowing.

**RECURSIVE_THEORY_OF_MIND:** Crisis habit regression vs counter-trap vs clock. This is a bit abstract but relates to how analysts/coaches might regress to crisis habits (over-relying on world records, IAAF tables), counter-traps (assuming recent dominance persists), and the clock (calendar year, Olympic year 2012). Need to discuss model's expectation of future performance, how observers might misread Bolt's 9.58 as statistical outlier vs inevitability, etc.

**CROSS_LAYER_VETO_ADJUDICATION:** Physical/biomechanical/weather veto proof. Discuss what the model cannot see: biomechanical limits, weather (wind, temperature, altitude), injury, equipment changes, doping shifts, pacers (mixed-sex races), track surface. These are exogenous vetoes that can invalidate the log-normal tail assumption. The paper itself notes women's marathon drop due to separate races, doping in throws, etc.

**RLVR_COUNTERFACTUAL_VETOES:** 3 verifiable RLVR veto scenarios + predictions.
Scenario 1: Sudden rule change (IAAF bans mixed-sex pacing for women's marathon records) -> model fitted on pre-2011 data overpredicts women's marathon performances post-rule because population/training context shifts.
Scenario 2: Equipment/technology discontinuity (e.g., new sprint spikes or javelin redesign) -> tail shape parameter sigma_k shifts, invalidating stationary log-normal assumption; expected exceedances \hat{n}_k(a) miscalibrated.
Scenario 3: Small-n event (women's mile n=18 prior to 2008, or women's shot put n=38) -> posterior over N_k unstable, Gelman-Rubin > 1.1 for 37/48 events without empirical prior; scoring table unreliable (paper explicitly discourages women's mile use).
Each with a prediction (verifiable in principle) about correlation collapse or score miscalibration.

Word count: Need >=1000 words total across sections. THINK_TRACE alone >=400. I'll aim for substantial depth in all sections.

Citations: Use [PAGE N] format exactly. Verbatim quotes should be enclosed in quotation marks and cited.

Let's draft carefully.

Important: Do not mention betting lines (spreads, totals, moneylines, odds). The word "odds" might appear colloquially; avoid it. Use "probability" instead.

Check for any toy equations: I will not invent Force/Fatigue. All equations must be from the paper or clearly derived formalisms.

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

I need to ensure total word count >= 1000. Let's write generously.

THINK_TRACE content:
- Start with the epistemic problem: comparing incommensurable events (100m vs shot put vs marathon).
- Hop 1: IAAF tables P = a(M-b)^c undisclosed, based on world records, small data, cannot compare records to each other [PAGE 3-4].
- Hop 2: Godsey's core idea: good performance = rare/improbable. Two reasons: few improve upon it, or close to best [PAGE 4].
- Hop 3: Model specification: log-normal per event k. Running: lower time better -> log(times). Field: higher better -> inverse log [PAGE 5]. Tail-only fitting because lists are best n_k marks [PAGE 5].
- Hop 4: Bayesian hierarchy with truncation at c_k (worst mark on list). Likelihood includes F(c_k) denominator [PAGE 7 Eq 2-3].
- Hop 5: Population size N_k uncertainty. Empirical Bayes: F(w_k) = n_k / N_k [PAGE 8 Eq 4]. Re-parameterize sigma^2 -> N_k. Log-normal prior on N_k [PAGE 8]. Update mu_N, sigma_N^2 via median and robust variance over 75% subset [PAGE 9 Eq 5-6].
- Hop 6: Predictive statistics. Expected exceedances per year A_k = N_k/t_m * F(a) [PAGE 10 Eq 7]. Record-break probability B_k = 1 - [1-F]^(t_f N_k/t_m) [PAGE 11 Eq 9]. Expected best performance order statistic [PAGE 11 Eq 11].
- Hop 7: Scoring formula anchored at \hat{n}_k(a)=0.125 -> a_0 = 1300 points. Log2 transform for times/distances [PAGE 12 Eq 12].
- Hop 8: Validation via Pearson correlations with future counts/improvements. Five-year data windows outperform all-data windows [PAGE 14-16 Tables 2-7]. Our tables beat IAAF: e.g., 10th best ref, 2008-2011 count correlation -0.43 vs IAAF -0.22; improvement -0.80 vs -0.69 [PAGE 17-18 Tables 9-10].
- Gray-zone audit: (1) Tail assumption: normal on log-tail may not hold if tail is heavy or discrete (sprints, jumps share marks) [PAGE 9]. (2) N_k unrestricted can explode: men's pole vault 2.71e16 vs empirical prior 3.8e7 [PAGE 14]. (3) Small lists: women's mile n=18 pre-2008, women's shot put n=38; paper discourages women's mile scoring [PAGE 7, 16]. (4) MCMC convergence: 37/48 events <1.1 without prior, all <1.1 with prior [PAGE 14]. (5) Non-stationarity: doping, rule changes (mixed-sex pacing), event maturity (steeplechase) [PAGE 21].

Need >400 words here. I'll write around 500-600.

SOURCE_OPERATORS_AND_EQUATIONS:
List each equation with LaTeX, units, assumptions, breakdown regimes, page citations.

RETROCAUSAL_GENEALOGY:
Historical lineage and multi-week traps. Mention Riegel 1977, Cameron 1998, McMillan 2011 (running only, physiological), Purdy 1970 (world records base), IAAF Spiriev 2008/2011 (undisclosed), Gelman & Rubin 1992, Hastings 1970, MacKay 1999. Multi-week traps: 5-year vs all-data windows; Olympic year clock; record rarity (need multi-year windows to estimate record probabilities reliably, correlations increase with time period length [PAGE 15]); women's steeplechase immaturity (Olympic since 2008, records fall often [PAGE 21]).

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: when a record is "weak" or under threat, analysts/coaches may regress to heuristic that recent dominance = permanent (Bolt 9.58 as inevitability vs outlier [PAGE 4]). Counter-trap: assuming old records (e.g., women's discus Reinsch 1988) are unbreakable because age, while model assigns tiny probability [PAGE 18 Table 11]. Clock: calendar-year and Olympic-year framing; 2012 predictions; model computes probability within t_f calendar years [PAGE 11 Eq 9]. Discuss how the model itself avoids some theory-of-mind traps by using base rates of exceedances rather than narrative impressiveness.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: biomechanical limits, muscle fiber, force-velocity; model assumes stationary log-normal, ignores absolute physical ceiling unless reflected in tail data.
Biomechanical: technique revolutions (Beamon 1968, Radcliffe 2003, Bolt 2009 [PAGE 4]) shift mu_k; model fitted pre-revolution underpredicts.
Weather: wind assistance, temperature, altitude, indoor vs outdoor not in model; all marks pooled.
Veto proof: The paper acknowledges exogenous shifts (doping decline, mixed-sex pacing ban, women's marathon separate races [PAGE 21]) but does not model them as covariates. Therefore any veto at these layers invalidates out-of-sample forecasts until tail is re-fit.

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios.
1. Rule-change veto: IAAF eliminates mixed-sex performances for women's road records post-2011. Model fitted on pre-Oct-2011 data (including Radcliffe's paced 2:15:25 [PAGE 18 Table 11, PAGE 21]) will overestimate probability of fast women's marathon marks. Prediction: posterior expected best performance \hat{y}_1 for women's marathon will exceed realized 2012-2014 best by a margin correlated with the share of historical top marks set with male pacers.
2. Equipment/technology veto: Introduction of a new javelin specification or spike technology shifts the tail location mu_k for throwing/sprinting. Because the model re-parameterizes sigma via N_k and fits a single normal tail, a step-change in mu is absorbed incorrectly into N_k or sigma. Prediction: scoring-table correlations (Table 9/10) collapse for affected events in the first 24 months post-adoption; Pearson correlation with actual improvement drops below 0.5.
3. Small-n/discreteness veto: Women's one-mile run list length n_k = 18 prior to 2008 [PAGE 7] and median 10 for five-year windows [PAGE 16]. Empirical prior on N_k cannot fix extreme discreteness where many athletes share identical marks (sprints, high jump, pole vault [PAGE 9]). Prediction: Gelman-Rubin diagnostic remains >1.1; \hat{n}_k(a) for world-record-proximate marks has high posterior variance; any 1300-point anchor for women's mile is not comparable to 1500m, confirming the paper's own discouragement [PAGE 16].

Each with "verifiable" in principle and prediction.

Now ensure no betting lines. I will not use "odds". Use "probability".

Word count check: I need to write enough. Let's draft fully.

Be careful with verbatim quotes: Use quotation marks and [PAGE N].

Examples of quotes to include:
- "A performance is good if few athletes improve upon it" [PAGE 4]
- "A performance is good if it is close to or improves upon the [previous] best performance." [PAGE 4]
- "All point values P in these tables can be calculated using a formula of the form P = a(M − b)c" [PAGE 3]
- "the most versatile and widely-used statistic is a set of scoring tables compiled by the IAAF" [PAGE 2]
- Eq citations.

Let's start writing. Ensure XML tags are exact.

I'll produce the final answer now.
</NATIVE_REASONING>

<THINK_TRACE>
The epistemic problem addressed by Godsey (2012) is the incommensurability of athletic performances across track, field, and road-running events. The paper opens by noting that existing methods are either event-specific (McMillan 2011; Cameron 1998; Riegel 1977; Daniels and Gilbert 1979, valid mainly for running), sex-specific, or overly dependent on a small number of world records (Purdy Points, Gardner and Purdy 1970). The dominant alternative, the IAAF scoring tables, uses “a formula of the form P = a(M − b)c” with constants “estimated by undisclosed methods,” and “it is impossible to compare world records to each other if the model is based on them” [PAGE 3]. Godsey’s multi-hop derivation therefore replaces undisclosed expert calibration with a direct probabilistic estimate of rarity.

Hop 1: Core definition of quality. “Two very common reasons why one might think that an athletic performance is good are: 1. A performance is good if few athletes improve upon it, or 2. A performance is good if it is close to or improves upon the [previous] best performance” [PAGE 4]. This motivates a model that estimates the improbability of a mark directly from the upper (or lower) tail of historical performances, rather than from world records alone.

Hop 2: Distributional specification. For each event k, the natural logarithms of performances are assumed normally distributed. Running times are logged directly because lower is better; for throwing and jumping, “we assume that the inverse (negative) of the natural logarithm is normally distributed” [PAGE 5]. Because the available data are lists of only the best n_k marks, the likelihood is a normal distribution truncated at the worst mark on the list, c_k: p_k(x | µ_k, σ²_k) = N(x|µ_k,σ²_k) / F(c_k|µ_k,σ²_k) for x ≤ c_k, zero elsewhere [PAGE 7, Eq. 2].

Hop 3: Bayesian inference and population-size uncertainty. The un-normalized posterior is ℓ(µ_k,σ²_k | X_k) = ∏ N(x | µ_k,σ²_k) p(µ_k)p(σ²_k) / F(c_k | µ_k,σ²_k) [PAGE 7, Eq. 3]. The model identifies a critical identifiability problem: the total elite population size N_k is weakly identified by the tail alone. The relation F(w_k | µ_k,σ²_k) = n_k / N_k [PAGE 8, Eq. 4] shows that many {µ_k, σ²_k} pairs imply wildly different N_k (unrestricted estimates range from 510.4 for the women’s mile to 2.71 × 10¹⁶ for men’s pole vault) [PAGE 14]. To regularize this, Godsey re-parameterizes σ²_k out in favor of N_k and places a log-normal prior on N_k with hyperparameters updated by an empirical-Bayes two-step procedure: µ_N = median({log(E[N_k])}) and σ²_N = min over 75% subsets K of var({log(E[N_k]) : k ∈ K}) [PAGE 9, Eq. 5–6]. The 75% subset is chosen “somewhat arbitrarily” to robustify against outliers in small or discrete events such as sprints, high jump, and pole vault [PAGE 9].

Hop 4: Predictive statistics and scoring. The expected number of performances better than mark a in one calendar year is A_k(a | µ_k,N_k) = N_k / t_m · F(a | µ_k,N_k) [PAGE 10, Eq. 7], with posterior expectation $\hat{n}_k(a)$ obtained by integrating over the posterior [PAGE 10, Eq. 8]. The probability that the best performance over t_f calendar years exceeds a is B_k(a | µ_k,N_k) = 1 − [1 − F(a | µ_k,N_k)]^(t_f N_k / t_m) [PAGE 11, Eq. 9], and the expected best performance is an order-statistic integral with no closed form, evaluated numerically [PAGE 11, Eq. 11]. The scoring formula anchors expected exceedances at 0.125 performances per year—chosen because it lies near current world records—and maps the corresponding mark a_0 to 1300 points: S_a = 1300 log_2(a_0) + 1 − log_2(a) for times, and the sign-inverted version for distances [PAGE 12, Eq. 12].

Hop 5: Validation and gray-zone audit. Predictions are scored by Pearson correlation with actual future counts and relative improvements over reference marks (10th, 25th, 50th, 100th best prior). A consistent pattern emerges: models fit on only the prior five years substantially outperform models fit on all historical data [PAGE 14–18, Tables 2–10]. For example, using the 10th best prior mark as reference, the paper’s five-year tables correlate at −0.43 with subsequent better-performance counts (2008–2011), versus −0.22 for the IAAF tables; for relative improvement, −0.80 versus −0.69 [PAGE 17–18]. Gray zones include: (i) tail normality may fail for highly discrete marks (sprints, jumps, throws where many athletes share identical marks) [PAGE 9]; (ii) MCMC convergence is fragile without the empirical prior—only 37 of 48 events achieve Gelman–Rubin < 1.1 using all data pre-2008, versus all events with the prior [PAGE 14]; (iii) small-n events such as the women’s one-mile run (n_k = 18 pre-2008; n_k = 10 in some five-year windows) produce unstable scores that the paper explicitly discourages using [PAGE 7, 16]; (iv) non-stationarity from doping eras, rule changes (mixed-sex pacing bans), and event immaturity (women’s steeplechase Olympic only since 2008) violate the stationary log-normal assumption [PAGE 21]. The model’s 2012 world-record probabilities illustrate the output: women’s steeplechase 0.952 and men’s 110m hurdles 0.662 are likely; women’s discus 7.44 × 10⁻⁶ and women’s 1500m 9.24 × 10⁻⁵ are effectively frozen [PAGE 18, Table 11].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All formal operators below are taken verbatim or adapted exactly from the source, with SI/information/probability units and exact [PAGE N] citations.

1. Truncated-tail normal likelihood [PAGE 7, Eq. 2]:
\[
p_k(x \mid \mu_k,\sigma_k^2) =
\begin{cases}
\dfrac{N(x \mid \mu_k,\sigma_k^2)}{F(c_k \mid \mu_k,\sigma_k^2)} & \text{for } x \le c_k \\[6pt]
0 & \text{elsewhere}
\end{cases}
\]
Units: x is log-performance (dimensionless log of seconds for running, or negative log of centimeters for field events); c_k is the worst mark on the top-n_k list (same units). Assumption: the observed list constitutes the lower tail of a normal distribution in log-space. Breakdown regime: fails if the empirical tail is heavy-tailed, multimodal, or highly discrete (shared identical marks in sprints/jumps) [PAGE 9].

2. Un-normalized posterior density [PAGE 7, Eq. 3]:
\[
\ell(\mu_k,\sigma_k^2 \mid X_k) =
\frac{\displaystyle \prod_{x \in X_k} N(x \mid \mu_k,\sigma_k^2)\, p(\mu_k)\, p(\sigma_k^2)}
{F(c_k \mid \mu_k,\sigma_k^2)}
\]
Units: likelihood is dimensionless probability density; X_k is the set of n_k logged performances. Assumption: independent performances conditional on parameters. Breakdown regime: N_k weakly identified when n_k is small relative to the tail extent.

3. Population-size identifying relation [PAGE 8, Eq. 4]:
\[
F(w_k \mid \mu_k,\sigma_k^2) = \frac{n_k}{N_k}
\]
Units: n_k and N_k are counts of performances (dimensionless integers); w_k is the worst logged mark on the list. Assumption: the list is complete through the worst mark. Breakdown regime: if the list is incomplete or contaminated by non-elite marks, N_k is biased; unrestricted estimates reached 2.71 × 10¹⁶ for men’s pole vault [PAGE 14].

4. Empirical-Bayes hyperparameter updates [PAGE 9, Eq. 5–6]:
\[
\mu_N = \text{median}\{\log(E[N_k]) : \text{for all } k\}, \qquad
\sigma_N^2 = \min_{K \subset \{\text{all } k\}} \text{var}\{\log(E[N_k]) : k \in K\}
\]
Units: µ_N in log-count; σ²_N in squared log-count. The subset K comprises 75% of all events. Assumption: population sizes across events are within an order of magnitude. Breakdown regime: small-list events (women’s mile n_k = 18; women’s shot put n_k = 38 pre-2008) distort the robust variance [PAGE 7].

5. Expected annual exceedances above mark a [PAGE 10, Eq. 7]:
\[
A_k(a \mid \mu_k,N_k) = \frac{N_k}{t_m}\, F(a \mid \mu_k,N_k)
\]
Units: A_k is a count per calendar year (events·year⁻¹); t_m is the fitting window in years. Assumption: the annual arrival of elite marks is a Poisson-like count with rate proportional to N_k F(a). Breakdown regime: seasonality, injury waves, or Olympic-year concentration violate the constant-rate assumption.

6. Posterior expected exceedance count [PAGE 10, Eq. 8]:
\[
\hat{n}_k(a) = \iint A_k(a \mid \mu_k,N_k)\, p(\mu_k,N_k \mid X_k)\, d\mu_k\, dN_k
\]
Units: dimensionless expected count. Assumption: 1000 posterior samples adequately approximate the integral.

7. Probability a mark is broken within t_f calendar years [PAGE 11, Eq. 9]:
\[
B_k(a \mid \mu_k,N_k) = 1 - \left[1 - F(a \mid \mu_k,N_k)\right]^{t_f N_k / t_m}
\]
Units: probability in [0,1]. Assumption: independent annual samples from the same fitted tail. Breakdown regime: as mark quality decreases, B_k → 1, making the statistic unsuitable for non-elite comparisons [PAGE 11].

8. Expected best performance of the year [PAGE 11, Eq. 11]:
\[
\hat{y}_1 = \int_{-\infty}^{\infty} y_1 \frac{d}{dy_1} \hat{p}_k(y_1)\, dy_1
\]
Units: y_1 in logged-performance units (seconds or inverse-cm); $\hat{y}_1$ transformed back to original units. Assumption: the yearly-best density is unimodal near historical annual bests. Breakdown regime: no closed form; numerical differentiation of $\hat{p}_k$ introduces discretization error if the y_1 grid is too coarse.

9. Performance scoring formula [PAGE 12, Eq. 12]:
\[
S_a =
\begin{cases}
1300\log_2(a_0) + 1 - \log_2(a) & \text{for times} \\[4pt]
1300\log_2(a_0) - 1 + \log_2(a) & \text{for distances}
\end{cases}
\]
Units: S_a in points (dimensionless, 0–1400+); a and a_0 in seconds or meters/cm. Anchor: $\hat{n}_k(a_0) = 0.125$ expected exceedances per year corresponds to 1300 points. Assumption: equal expected exceedance implies equal quality. Breakdown regime: population-size borrowing (mile set equal to 1500m) is arbitrary and the paper discourages women’s-mile scores [PAGE 12, 16].

10. Relative improvement metric for correlation validation [PAGE 13]:
\[
\text{improvement} = -\log(a_{\text{new}} / a_{\text{old}})
\]
Units: dimensionless log-ratio; inverted for field events. Reference marks a_old are the 10th, 25th, 50th, and 100th best prior marks [PAGE 13].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with physiological running models valid only within a sex and distance: McMillan (2011), Cameron (1998), Riegel (1977), and Daniels and Gilbert (1979), which rely on speed and running economy but cannot compare men to women or running to field events [PAGE 3]. Purdy Points (Gardner and Purdy, 1970) extended cross-event comparison but anchored scores to world records at a fixed historical date, creating two pathologies: (1) records cannot be compared to one another because they form the model’s basis, and (2) a “weak” record unfairly inflates scores in that event [PAGE 3]. The IAAF scoring tables (Spiriev and Spiriev, 2011; Spiriev, 2008) became the dominant cross-event standard, yet their update cycle (2008, 2011) and constants are “not fully disclosed,” and the combined-events formula P = a(M − b)c uses “constants estimated by undisclosed methods” [PAGE 3]. Godsey’s contribution is to replace this undisclosed expert calibration with a fully disclosed, data-driven probabilistic model.

Methodologically, the genealogy extends to Bayesian computation: Metropolis–Hastings (Hastings, 1970) via the mcmc package in R (Geyer, 2010), convergence diagnostics of Gelman and Rubin (1992), and empirical-Bayes hyperparameter tuning per MacKay (1999) [PAGE 7, 8, 9]. The multi-week traps are evident in the paper’s own temporal sensitivity analysis. Fits using “all prior data” systematically underperform fits using only the prior five years, because total participation has changed more dramatically over time than the quality of the very best performers [PAGE 14–15]. Correlations for record-breaking probabilities increase with the length of the forecast window (e.g., 0.712 for 2000–2005 versus 0.324 for 2000–2001 using five years of data), reflecting the rarity of records: short windows contain too few Bernoulli events to stabilize the probability estimate [PAGE 15, Table 4]. A second trap is event maturity: the women’s steeplechase became an Olympic event only in 2008, so its records “still fall quite often,” and the model’s stationary tail underestimates near-term record probability for immature events [PAGE 21]. A third trap is rule-induced non-stationarity: Paula Radcliffe’s women’s marathon world record was set with male pacers, a condition later ruled ineligible, yet previous marks were allowed to stand; the model pooled mixed-sex and single-sex performances, creating a structural break in the women’s marathon tail that the stationary log-normal cannot represent [PAGE 21]. Finally, doping-era contamination is a retro-causal trap: “no woman has produced a top-100 mark in the shot put or the discus in the past ten years,” suggesting historical outliers that distort population-size and tail inference unless removed or robustified [PAGE 21].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory of mind here concerns how analysts, coaches, and spectators model each other’s expectations of athletic quality, and how Godsey’s model intervenes in that recursive loop. Crisis habit regression occurs when a salient recent performance—Usain Bolt’s 9.58 s 100 m in Berlin 2009—is treated as either an unimprovable ceiling or an inevitable statistical outcome. The introduction explicitly questions this: “Usain Bolt’s 9.58 s mark… is certainly impressive, but we saw three men running 9.72 s or faster in the 100 m dash in 2008, all under the world record from 2007; so how impressive was 9.58 s really? Is it a statistical outlier, or is it the expected result of a general increase in performance level?” [PAGE 4]. A crisis-minded observer regresses to the heuristic that revolutionary performances rewrite the tail permanently; Godsey’s model instead treats 9.58 s as one draw from a fitted log-normal tail and asks how many athletes are expected to improve upon it in a calendar year.

The counter-trap is the opposite regression: assuming that long-standing records are immutable simply because they are old. Table 11 shows women’s discus (Reinsch, 1988) at 7.44 × 10⁻⁶ probability of being broken in 2012 and women’s 1500 m (Qu Yunxia, 1993) at 9.24 × 10⁻⁵, while recently set records such as women’s steeplechase (Galkina, 2008) are at 0.952 [PAGE 18]. An observer with a “record age = durability” heuristic would overrate the discus and underrate the steeplechase; the model’s base-rate of recent near-record marks corrects this. In the men’s 110 m hurdles, seven marks within five years are within 0.05 s of the record, making a 2012 break more likely than not [PAGE 18].

The clock layer is the calendar-year and Olympic-year framing. Equation 9 conditions on t_f calendar years, and the paper explicitly produces “expectations of what might happen in the coming Olympic year” [PAGE 2]. The model’s forecasts for 2012 are not deterministic predictions but posterior probabilities over a finite horizon. A recursive analyst might reason: “If the model says Bolt’s 100 m record has only a 0.123 chance of falling in 2012, then rivals will not train to beat it,” which itself changes the training effort distribution and thus the future tail—an unmodeled feedback loop. Godsey acknowledges this boundary by noting that including time as a covariate would allow detection of “eras of great improvement or change” [PAGE 21], but the current estimator is myopic to such strategic adaptation.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The model assumes a stationary log-normal tail per event. It contains no biomechanical constitutive equation (force–velocity, muscle-tendon dynamics, aerodynamic drag), so it cannot enforce an absolute physical ceiling. Any biomechanical discontinuity—e.g., a technique revolution such as Beamon’s 1968 long jump or Bolt’s 2009 sprinting mechanics [PAGE 4]—shifts µ_k abruptly. Because the fit is retrospective, pre-revolution data under-predict post-revolution performance until the tail is re-estimated.

Biomechanical/physiological layer: The model pools all elite marks regardless of athlete age, injury status, or training phase. It cannot veto a forecast on the grounds that the current top-100 list is depleted by injury or that a generational cohort is entering its prime. The MCMC posterior over N_k absorbs some participation variation, but not sudden biomechanical attrition.

Weather and environmental layer: Wind assistance, temperature, altitude, indoor versus outdoor tracks, and pacing configuration are not covariates. All marks are pooled as if exchangeable. This is a critical veto for sprints and horizontal jumps, where wind-read legality changes the effective tail, and for road running, where course elevation and weather alter times independently of athlete quality.

Veto adjudication: The paper itself identifies exogenous vetoes that break its assumptions. Women’s marathon performance declined after major races separated men’s and women’s fields, removing male pacers; Radcliffe’s record remains in the historical list though mixed-sex races are now ineligible [PAGE 21]. Doping-era outliers in the throws (no top-100 women’s shot put or discus mark in ~10 years) contaminate the tail [PAGE 21]. Because the model lacks a formal weather/biomechanics/rule-change layer, any such veto invalidates out-of-sample forecasts until the affected event’s tail is re-fit on post-veto data. The model is therefore “veto-proof” only within stationary, rule-stable, weather-averaged regimes; it is not robust to exogenous regime shifts.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Rule-change veto (women’s road racing and pacing). Counterfactual: The IAAF’s prohibition of mixed-sex performances for women’s road records is enforced strictly beginning in 2012, and all major marathons eliminate male pacers for women. Veto mechanism: The training data (through 1 October 2011) include Paula Radcliffe’s 2:15:25 set with male pacers [PAGE 18, Table 11; PAGE 21]. The fitted women’s-marathon tail therefore overstates the attainable rate of fast marks. Prediction: The posterior expected best performance $\hat{y}_1$ for the women’s marathon (Eq. 11) will exceed the realized annual best for 2012–2014 by a margin proportional to the historical fraction of top-100 marks set under mixed-sex conditions; Pearson correlation between pre-2012 scores and post-2012 counts will drop below the 0.605 observed for all-data fits [PAGE 17, Table 5].

Scenario 2 — Equipment/technology veto (javelin or sprint spikes). Counterfactual: A new javelin specification or a step-change in spike technology is introduced in 2013, shifting the location parameter µ_k for throwing or sprinting events by a fixed log-amount. Veto mechanism: Eq. 2 assumes a single normal tail; a step change in µ_k is misattributed to σ_k² or N_k because the model re-parameterizes variance through population size (Eq. 4–6). Prediction: For affected events, the scoring-table correlation with future performance improvement (Table 10) will collapse from approximately −0.80 to below −0.50 within 24 months of adoption, because the anchor $a_0$ at 1300 points no longer corresponds to 0.125 expected annual exceedances.

Scenario 3 — Small-n discreteness veto (women’s one-mile run). Counterfactual: An analyst attempts to compare women’s one-mile and 1500 m performances using the paper’s scoring tables. Veto mechanism: The women’s mile list has n_k = 18 prior to 2008 and n_k = 10 in the five-year window prior to 2012 [PAGE 7, 16], with many shared marks causing high discreteness [PAGE 9]. The empirical prior on N_k cannot stabilize the posterior; Gelman–Rubin diagnostics exceed 1.1 for 37 of 48 events without the prior even in larger datasets [PAGE 14]. Prediction: The posterior variance of $\hat{n}_k(a)$ for world-record-proximate mile marks will be large enough that the 1300-point anchor is not exchangeable with the 1500 m anchor, reproducing the paper’s own warning to discourage women’s-mile use in performance comparison [PAGE 16]. Any cross-event comparison invoking the women’s mile score will show a correlation with actual future mile counts near zero.
</RLVR_COUNTERFACTUAL_VETOES>