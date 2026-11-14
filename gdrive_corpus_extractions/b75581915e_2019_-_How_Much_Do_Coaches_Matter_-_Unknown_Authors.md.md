---
source: "2019 - How Much Do Coaches Matter - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2019"
pages: 26
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4508
---

<NATIVE_REASONING>
The user wants a deep analytical response based on the provided source text (MIT Sloan 2019 paper "How Much Do Coaches Matter?" by Berry and Fowler). 

Constraints:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Need to avoid betting language entirely. No "spreads, totals, moneylines, or odds." Must be careful not to use "odds" in any context (e.g., "odds ratio" is banned if it references betting; but "odds" as probability might be risky. Better avoid "odds" entirely). Use probability units instead.

Need to cite page numbers from source. The source text includes page markers like "2019 Research Papers Competition Presented by: 1" etc. I need to cite exact [PAGE N] markers. Looking at the text, pages are marked at bottom like:
- Page 1: after footnote 1
- Page 2: after related lit
- Page 3: after footnote 2
- Page 4: after "suppose we observe an apparent"
- Page 5: after footnote 3
- Page 6: after footnote 4
- Page 7: after simple example
- Page 8: after Stata package
- Page 9: after power analyses Figure 1 mention
- Page 10: after wasted runs
- Page 11: after college football
- Page 12: after endogenous retention simulations start
- Page 13: after individual coaches
- Page 14: after Belichik simulation
- Page 15: after summary bullet MLB
- Page 16: after future research
- Page 17: references
- Page 18: references continued
- Page 19: Figure 1
- Page 20: Figure 2
- Page 21: Figure 3
- Page 22: Figure 4
- Page 23: Figure 5
- Page 24: Table 4
- Page 25: Table 5, 6, 7 (actually text says 24 then 25 at bottom)
- Page 26: end

I'll cite pages based on the visible page numbers in the text. Need verbatim quotes with [PAGE N].

Structure:

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. Discuss RIFLE mechanics, the identification strategy, permutation inference, why standard succession studies fail, the post-treatment player quality problem, endogenous retention bias, individual coach evaluation, small-sample breakdown, serial correlation blocking, etc. Gray zones: overfitting, researcher degrees of freedom, multiple testing, permutation p-value granularity with few coaches, endogenous turnover, college vs pro recruiting confound, pace/style confound in basketball, defensive vs offensive asymmetry in baseball/hockey.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations. RIFLE regression: Y_{it} = alpha_i + ... Actually coach fixed effects. r^2 = 1 - RSS/TSS. RSS definition. Permutation procedure. Endogenous retention simulation: Y_t = rho Y_{t-1} + epsilon_t. Turnover probability linear in lagged performance. False discovery rate. Effect size interpolation from Figure 2. Units: proportion of variance (dimensionless, [0,1]), p-values (dimensionless probability), seasons (unit: season), games (unit: game), points/runs/goals (unit: points/runs/goals), residuals dimensionless after standardization. Breakdown regimes: few coaches per team (p-value granularity), short tenures, no variation in service length, researcher specification hunting, endogenous retention high slope, serial correlation high, post-treatment bias if controlling for player quality. Page citations for equations and tables.

RETROCAUSAL_GENEALOGY: Historical lineage: Grusky (1960, 1963) leadership succession; Gamson & Scotch (1964) scapegoating; Cannella & Rowe (1995); Adler et al. (2013); Dohrn et al. (2015); Goff (2013) hierarchical random effects (8.5% MLB, 21% NFL); Berri et al. (2009) NBA coach dummies; Bradbury (2017) MLB manager dummies; Berry & Fowler (2018) political leaders RIFLE predecessor. Multi-week traps: small-sample early tenure overreaction (Walsh 1945 first season .412 residual victory, Seifert 1989-90 first two seasons), regression to mean, 5-season threshold for statistical significance in NFL, Belichik 17 seasons p=.0005 vs first-season illusions. The trap of firing after bad year (mean reversion) and transition costs.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Discuss how stakeholders regress to crisis habits (firing coach after bad season) vs counter-trap (keeping coach through regression), the clock of tenure needed to separate signal from noise (NFL 5 seasons threshold; Belichik 17 seasons; college football more data/power), recursive belief updating (management believes coaches matter -> endogenous retention -> bias -> RIFLE correction), theory of mind of coach (adapting to roster, opponent adjustments) vs statistical agnosticism.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. This is tricky because the paper is about coaches, not physical layers. But I can interpret "cross-layer veto" as layers of causal inference: data layer (game-team vs season-team aggregation), statistical layer (permutation inference), identification layer (endogenous retention), individual evaluation layer. Physical/biomechanical/weather: baseball pitching workload (arm fatigue, pitch counts), basketball pace (total points), football fumbles/penalties (biomechanical discipline), NHL goalie workload. Weather isn't in the paper explicitly, but home field advantage is residualized. I need to make it veto-proof by showing which effects survive controls: home field, opponent quality, year fixed effects are removed before coach regression. Breakdown: if weather/confounds correlate with coach tenure systematically (e.g., coach hired in a specific climate era), not addressed. I'll frame as causal layers that can veto naive coach-effect claims: (1) opponent-quality/home-field residualization vetoes schedule confounds; (2) permutation blocking vetoes serial-correlation false positives; (3) endogenous-retention Monte Carlo vetoes turnover confounds; (4) player-quality post-treatment vetoes roster-control bias. Physical layer: pitch allocation in baseball (wasted runs null), fumble/penalty discipline in NFL (biomechanical execution), pace in basketball (stylistic choice). Weather: not explicitly modeled; home field residualization partially accounts but not game-day weather. Cite pages.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. Need 3 scenarios where the model/prediction would be vetoed if counterfactual conditions hold. Must be verifiable. Predictions included. Examples:
1. If a sport has effectively one coach per team with invariant tenure (e.g., a league where coaches never change or all serve identical lengths), permutation p-values become granular/undefined (only 2 permutations possible per team), so RIFLE cannot reject null. Prediction: p-value can only take discrete values (1/k! or similar), test breaks down.
2. If coach turnover is perfectly endogenous to a single bad season (slope -> infinity in simulation) AND serial correlation is high, FDR inflates beyond .05, causing false positives. Prediction: with turnover probability linearly dependent on standardized lagged victories with slope magnitude > observed ~0.083, FDR > .05, RIFLE rejects null despite zero true coach effect.
3. If player quality is fully exogenous and coaches have zero influence on roster, but we fail to residualize opponent quality/home field, omitted variable bias can create spurious coach fixed effects because schedule difficulty correlates with coach tenure. Prediction: unadjusted game-level r-squared will exceed permuted r-squared even with true coach effect = 0, producing p < .05 falsely. Verifiable by comparing residualized vs unadjusted MLB runs allowed.

Need to ensure no betting lines. Avoid "odds", "spread", "total" as betting term (but "total points" in basketball is in paper; it's not betting, it's sum of points. That's fine. But avoid "totals" in betting sense. The user said "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." I should avoid the word "totals" entirely to be safe? The paper uses "Total Points" outcome. I can refer to it as "sum of points scored by both teams" but avoid the word "totals" if possible. I'll say "combined points". Avoid "odds" entirely. Use "probability", "likelihood", "p-value".

Need >=1000 words total across sections. THINK_TRACE alone >=400. I'll aim for each section substantial.

Citations: Use [PAGE N] exactly. For verbatim quotes, use quotation marks and cite page.

Let's draft carefully.

Page mapping from text:
- Page 1: Abstract/Intro start
- Page 2: Related literature
- Page 3: Intro continued
- Page 4: Methodology start
- Page 5: Method continued, footnote 3
- Page 6: Summary of procedure, footnote 4
- Page 7: RSS derivation, simple example
- Page 8: Player quality, Stata package
- Page 9: Results, power simulations Figure 1
- Page 10: Baseball results, Figure 3
- Page 11: Football results
- Page 12: Endogenous retention start
- Page 13: Individual coaches
- Page 14: Belichik simulation
- Page 15: Summary bullets
- Page 16: Conclusion
- Page 17: References
- Page 18: References cont.
- Page 19: Figure 1
- Page 20: Figure 2
- Page 21: Figure 3
- Page 22: Figure 4
- Page 23: Figure 5
- Page 24: Table 4
- Page 25: Table 5, 6, 7 (notes and tables)
- Page 26: end

I'll cite [PAGE 4], [PAGE 5], etc.

Equations to state formally:
- Outcome residualization: Y_{igt} = beta_0 + beta_1 OppQuality_{jt} + gamma_t + delta Home_{igt} + epsilon_{igt}; then aggregate residuals to season-team \bar{\epsilon}_{it}. [PAGE 5]
- Coach fixed-effects regression: \bar{\epsilon}_{it} = sum_{c} alpha_c 1{coach_{it}=c} + u_{it}. [PAGE 4-5]
- R-squared: r^2 = 1 - RSS/TSS, RSS = sum_i sum_t (Y_{it} - \hat{Y}_{it})^2, TSS = sum_i sum_t (Y_{it} - \bar{Y})^2. [PAGE 6]
- Constant coach effect RSS invariance: if Y_{it} = mu_c + eta_{it}, RSS unaffected by coach shifts within coach; under permutation mixing coaches, RSS increases because permuted coach mean mixes different mu_c. [PAGE 6-7]
- Permutation p-value: p = (1/B) sum_{b=1}^B 1{r^2_{perm,b} > r^2_{real}}. [PAGE 5]
- Endogenous retention simulation: Y_t = rho Y_{t-1} + epsilon_t; P(turnover_t) = intercept + slope * (Y_{t-1} standardized) + team FE. [PAGE 11-12]
- FDR: proportion of 1,000 (or 100) simulations with p < .05 under null. [PAGE 12]
- Effect size interpolation: map observed Delta r^2 = r^2_real - avg(r^2_perm) to proportion of variance via Figure 2 simulation grid. [PAGE 9]

Breakdown regimes:
- Few coaches per team: p-value granularity (e.g., 2 permutations => p in {0, 0.5, 1}). [PAGE 7]
- Short tenure / few seasons: low power, cannot detect individual coach effects until ~5 seasons in NFL. [PAGE 13-14]
- Researcher specification hunting: invalidates p-values. [PAGE 6 footnote 4]
- Endogenous retention: bias small but nonzero; FDR .049-.07 observed. [PAGE 12]
- College vs pro: recruiting confounds coach effect with player acquisition. [PAGE 11]

Now write the response. Must be purely analytical, no betting.

Check word count: THINK_TRACE needs >=400 words. Total across sections >=1000. I'll write generously.

Let's begin.

THINK_TRACE: I'll write around 500-600 words.

SOURCE_OPERATORS_AND_EQUATIONS: around 300 words with LaTeX.

RETROCAUSAL_GENEALOGY: around 250 words.

RECURSIVE_THEORY_OF_MIND: around 250 words.

CROSS_LAYER_VETO_ADJUDICATION: around 250 words.

RLVR_COUNTERFACTUAL_VETOES: around 250 words.

Total ~1800 words. Good.

Need to be careful: "odds" appears in paper? "5 percent ... by chance, at a conventional 5-percent level." No "odds" word. I will avoid it.

Also avoid "totals" as betting. In basketball section, paper says "total points scored in a game". I can say "combined points" or "aggregate points" but not "totals". I'll use "aggregate game points".

Let's draft.

Important: exact XML sections. No extra sections.

Let's write now.

For verbatim quotes, I'll pull short phrases:
[PAGE 4]: "we regress the outcome of interest on coach fixed effects and record the r-squared statistic"
[PAGE 5]: "The proportion of random permutations that produce an r-squared statistic greater than that from the real data is an estimated p-value"
[PAGE 6]: "r^2 ≡ 1 − RSS/TSS"
[PAGE 12]: "false discovery rates are all close to the ideal of .05"
[PAGE 13]: "coaches often explain 20-30 percent of the variation in a team’s success"
[PAGE 7]: "the p-value can only take one of two possible values"

Make sure to include [PAGE N] markers.

Now generate final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The RIFLE estimator rests on a permutation-inference logic that must be unpacked across four nested identification problems. First, the raw correlation between coach identity and team outcomes is contaminated by serial correlation: a coach who inherits a good roster or inherits a bad one will appear effective or ineffective regardless of actual coaching quality. Berry and Fowler address this by residualizing game-team observations for opponent quality, home-field advantage, and year fixed effects, then aggregating to the season-team level [PAGE 5]. The residualized outcome is regressed on coach fixed effects, and the r-squared is recorded [PAGE 4]. Second, because the r-squared mechanically rises with the number of regressors, standard inference would overstate coach effects. The authors’ solution is to hold the number of fixed effects and the distribution of tenure lengths constant while randomly permuting coach identifiers within each team as contiguous blocks [PAGE 5-6]. This preserves the overfitting structure and serial-correlation architecture under the null, so any excess r-squared in the real data relative to the permuted distribution is attributed to coach effects rather than noise or time trends.

A gray-zone emerges in the derivation of the r-squared under constant coach effects. If every coach adds a fixed shift to all observations under their tenure, the within-coach residual sum of squares (RSS) is unchanged by that shift; however, under permutation, a synthetic coach block that overlaps multiple historical coaches mixes observations with different true means, inflating RSS and depressing the permuted r-squared [PAGE 6-7]. This asymmetry is the engine of the test, but it breaks down when teams have few coaches or invariant tenure lengths: with only two possible permutations per team, the p-value can take only a handful of discrete values, making asymptotic refinement impossible without many teams [PAGE 7]. A second gray zone is player quality. The authors correctly note that controlling for roster quality directly is dangerous because player quality may be a post-treatment outcome of coaching (recruiting, development, deployment); RIFLE sidesteps this by treating coach-independent player quality as serial correlation that affects real and permuted data symmetrically, while coach-mediated player quality correlates more strongly with true than permuted fixed effects [PAGE 8]. This is elegant but implicitly assumes that any player-quality variation unrelated to the coach is uncorrelated with the permutation scheme—an assumption that could fail if, for example, front offices systematically assign rosters to coaches in ways that survive randomization.

The third gray zone is endogenous retention. Coaches are fired after poor performance, which can generate a spurious coach-outcome correlation even under the null. The authors run Monte Carlo simulations in which outcomes follow an AR(1) process with serial correlation estimated from the data, and turnover probability depends linearly on standardized lagged victories [PAGE 11-12]. The estimated false discovery rates range from .049 to .07, close to the nominal .05 [PAGE 12], but this relies on the linearity and stationarity of the turnover rule. If the true retention rule is convex—teams panic after one bad year but are patient after good years—the false discovery rate could exceed the simulated bounds. A fourth gray zone is the individual-coach inference problem. The paper explicitly rejects estimating individual coach effects because multiple testing and short tenures make false positives likely; instead, it evaluates whether a coach’s record is extreme relative to a null distribution conditioned on tenure length [PAGE 13-14]. This creates a “clock” problem: in the NFL, conventional significance is unattainable for any coach with fewer than five seasons [PAGE 13]. Early-career outliers (e.g., Adam Walsh’s .412 first-season residual victory) arise by chance 62 percent of the time in simulation [PAGE 14], so crisis-driven hiring and firing based on one or two seasons is statistically unjustified.

The final gray zone is cross-sport comparability. The paper finds larger effects in college football than the NFL, plausibly because college coaches control recruiting [PAGE 11], but this confounds coaching with roster acquisition authority. Similarly, basketball coaches affect aggregate game points, suggesting pace/style differences rather than pure efficiency [PAGE 11]. These are substantive mechanisms, not statistical artifacts, but they mean the “20-30 percent of variation” figure [PAGE 13] is not a portable constant; it is conditional on institutional structure, roster-control rights, and the degree of in-game strategic freedom.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let game-team observation be indexed by team i, opponent j, season t, and game g. The residualization step [PAGE 5] is:

Y_{igt} = \beta_0 + \beta_1 Q_{jt} + \gamma_t + \delta H_{igt} + \varepsilon_{igt},

where Q_{jt} is the season-average opponent quality excluding games against i, \gamma_t are year fixed effects, H_{igt} is a home/away indicator, and \varepsilon_{igt} is the residual performance. The season-team outcome is \bar{\varepsilon}_{it} = G_{it}^{-1} \sum_g \varepsilon_{igt}.

The coach fixed-effects regression [PAGE 4-5] is:

\bar{\varepsilon}_{it} = \sum_{c \in C_i} \alpha_c \mathbb{1}\{coach_{it} = c\} + u_{it},

and the fit statistic is

r^2 = 1 - \frac{RSS}{TSS}, \quad RSS = \sum_i \sum_t (Y_{it} - \hat{Y}_{it})^2, \quad TSS = \sum_i \sum_t (Y_{it} - \bar{Y})^2.

Units: r^2 and the proportion of variance explained (“prop”) are dimensionless probabilities in [0,1]; p-values are dimensionless probabilities; seasons and games are discrete count units; points, runs, goals, fumbles, and penalties are counts in their native scoring units.

Permutation inference [PAGE 5]: for b = 1,...,B, randomly shuffle coach identifiers within each team while preserving each coach’s tenure block, recompute r^{2}_{(b)}, and estimate

p = \frac{1}{B} \sum_{b=1}^B \mathbb{1}\{r^{2}_{(b)} > r^{2}_{real}\}.

The RSS asymmetry under genuine coach effects [PAGE 6-7]: if coach c contributes a constant shift \mu_c, then within-coach RSS is invariant to \mu_c in the real data, but under permutation a merged block containing observations from multiple coaches has RSS increased by between-coach mean differences. Thus r^{2}_{real} > E[r^{2}_{perm}] identifies coach effects.

Endogenous-retention simulation [PAGE 11-12]: outcomes follow Y_t = \rho Y_{t-1} + \varepsilon_t with \rho estimated from lagged residualized victories; turnover probability is P(turnover_t) = \text{Intercept} + \text{Slope} \times \widetilde{Y}_{t-1} + \text{team FE}. The false discovery rate [PAGE 12] is the fraction of 1,000 (professional) or 100 (college) simulations with p < .05 under the null. Observed FDRs: MLB .052, NFL .053, CFB .050, NBA .049, CBB .070, NHL .053 [PAGE 25].

Effect-size mapping [PAGE 9]: simulate outcomes with known coach-effect variance share \pi \in \{0.10, 0.20, 0.30\}; the observed \Delta r^2 = r^2_{real} - \text{avg}(r^2_{perm}) is interpolated against Figure 2 to recover \hat{\pi}.

Breakdown regimes: (i) few coaches per team yields coarse p-value granularity—e.g., two permutations imply p \in \{0, 0.5, 1\} [PAGE 7]; (ii) researcher specification hunting invalidates permutation p-values [PAGE 6, footnote 4]; (iii) NFL individual-coach significance requires \ge 5 seasons [PAGE 13]; (iv) if turnover slope or serial correlation exceeds observed bounds, FDR inflates above .05 [PAGE 12].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with Grusky’s (1960, 1963) work on administrative succession, which framed leadership change as an organizational event rather than a treatment effect [PAGE 2]. Gamson and Scotch (1964) pioneered the “scapegoating” hypothesis in MLB, finding little managerial impact [PAGE 2]. Subsequent succession studies—Canella & Rowe (1995), Fabianic (1994), Smart et al. (2008), Smart & Wolfe (2003) in MLB; Giambatista (2004) in the NBA; Rowe et al. (2005) in the NHL; Audas, Dobson, & Goddard (1997) in English soccer; Fizel & D’Itri (1999) in college basketball—generally concluded that coaching changes produced null or slightly negative average effects [PAGE 2]. Goff (2013) offered a partial dissent using hierarchical random effects, attributing 8.5 percent of MLB win-rate variance to managers and 21 percent to NFL coaches [PAGE 2]. Bradbury (2017) and Berri et al. (2009) used manager/coach dummy variables and found mostly interchangeable effects [PAGE 2].

Berry and Fowler’s contribution is methodological rather than purely empirical: they adapt RIFLE from their prior work on political leaders (Berry & Fowler 2018) [PAGE 4, 8]. The multi-week trap embedded in this genealogy is the fixation on average effects of coaching succession. If some coaches are better and some worse, the average effect of a change can be zero even while individual effects are large; detecting this requires variance-based inference, not mean-difference testing [PAGE 3]. A second trap is regression to the mean: teams fire coaches after extreme seasons, so subsequent performance reverts regardless of coaching [PAGE 3]. A third is transition cost: new systems impose short-run disruption that masks long-run quality [PAGE 3].

The genealogy also reveals a temporal trap in individual evaluation. Figure 4 shows that NFL coaches with one- or two-season tenures occupy both extremes of the residual-victory distribution [PAGE 13]. Early-career outliers are statistical mirages: Adam Walsh’s .412 first-season residual victory is exceeded by chance 62 percent of the time in null simulations, and George Seifert’s strong first two seasons are exceeded 57 percent of the time [PAGE 14]. Only after five seasons can conventional significance reject the null for any NFL coach, and Bill Belichik’s 17-season run yields p = .0005 [PAGE 13-14]. Thus the literature’s historical null findings are consistent with both true interchangeability and methodological insensitivity; RIFLE shifts the burden from “do coaching changes matter on average?” to “is the distribution of coach fixed effects wider than chance?” [PAGE 3].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Stakeholder reasoning about coaches exhibits a recursive structure: front offices believe coaches matter, which generates endogenous retention and firing rules; those rules generate data patterns that naïve regression misattributes to coaching; RIFLE corrects for this by simulating the null under the observed retention process [PAGE 11-12]. The crisis habit is to fire after a bad season; the counter-trap is that firing resets the tenure clock, sacrificing the statistical power needed to distinguish skill from luck. Because NFL coaches require roughly five seasons before their records become statistically interpretable [PAGE 13], a crisis-driven firing cycle of two or three years guarantees that almost no coach is ever evaluated with sufficient data. The clock therefore works against accurate assessment: the very instability caused by believing coaches matter makes it harder to verify whether they do.

Theory of mind enters at two levels. First, coaches are modeled as agents who influence outcomes through strategic choices—pitch allocation in MLB, pace in basketball, fumble and penalty discipline in the NFL [PAGE 10-11]. RIFLE is agnostic about which coach is better; it tests only whether the population of coaches is heterogeneous [PAGE 7]. Second, stakeholders attempt to infer individual coach quality from observed records, but this inference is recursive because the coach’s record depends on roster quality, opponent strength, and serial correlation, all of which are partially outside the coach’s control. The paper shows that a coach explaining 20-30 percent of variance still leaves 70-80 percent to other factors [PAGE 13], so a short winning streak is more likely noise than signal. Belichik’s case illustrates the correct recursive update: one should not ask how likely it is that a randomly selected coach looks like Belichik, but how likely it is that any coach in a league of many coaches looks that good by chance; the answer is very unlikely (p = .0005) [PAGE 14].

The multi-week implication is that hiring and firing decisions should condition on tenure length and simulated null distributions rather than raw win-loss records. A coach with a .18 average residual victory over 17 seasons is extraordinary; a coach with a .41 average over one season is not [PAGE 13-14]. Crisis habits that ignore this clock will overreact to regression-to-the-mean events and underreact to genuine, persistent skill.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Four causal layers can veto a naive claim that “coaches matter.” Layer 1 (schedule and venue): game-team residuals remove opponent quality, home-field advantage, and year effects before coach fixed effects are estimated [PAGE 5]. This vetoes the confound that a coach simply inherited an easy schedule or a string of home games. Layer 2 (serial correlation and overfitting): block permutation holds tenure length and the number of fixed effects constant, so the null distribution absorbs time trends and overfitting [PAGE 5-6]. Any veto here would require coach transitions to be correlated with team-specific time trends in a way that survives block permutation—possible but not demonstrated. Layer 3 (endogenous retention): Monte Carlo simulations with AR(1) outcomes and performance-dependent turnover show FDRs of .049-.070, close to the nominal .05 [PAGE 12]. This veto survives unless the true turnover rule is more aggressive than the observed linear slope (roughly -0.049 to -0.083 per standardized victory) [PAGE 25]. Layer 4 (player quality as post-treatment): RIFLE does not control for roster quality directly, avoiding post-treatment bias; coach-independent player quality acts as serial correlation affecting real and permuted data equally [PAGE 8].

Physical and biomechanical mechanisms that survive these vetoes include: MLB pitching workload and bullpen deployment, which affect runs allowed more than runs scored [PAGE 10]; NFL fumble and penalty discipline, where coaches explain roughly 30 percent of within-team variation [PAGE 11]; and basketball pace, where coaches influence aggregate game points through stylistic preferences for fast versus slow play [PAGE 11]. Weather is not explicitly modeled in the paper, but home-field residualization partially absorbs climate-related venue effects; game-day weather variation within a coach’s tenure remains unaddressed and could bias estimates if weather systematically covaries with coaching changes.

Null outcomes also provide boundary conditions: MLB managers do not affect wasted runs [PAGE 10], NFL coaches do not affect opponent penalties or passing-rush mix [PAGE 11], and these nulls are consistent with the veto structure—if coaches had unconstrained control over game flow, we would expect effects on opponent penalties and pace management, which are absent. The breakdown regime occurs when a confound operates at the same temporal grain as coach tenure and is not removed by residualization; for example, if a franchise’s ownership regime changes simultaneously with the coach and affects resources, the coach effect is confounded with ownership quality.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Degenerate permutation space. Suppose a league has teams with exactly one coach or all coaches serve identical, non-overlapping tenures so that within-team permutation yields only K possible arrangements. The p-value can take at most 1/(K+1) distinct values; with two coaches and two possible orders, p \in \{0, 0.5, 1\} [PAGE 7]. Prediction: RIFLE cannot achieve conventional significance (p < .05) regardless of the true effect size, and the test is statistically underpowered by construction. Verifiable by constructing a synthetic panel with one coach per team and confirming that no p-value below .5 is produced.

Scenario 2 — Hyper-endogenous retention. Suppose turnover probability is P(turnover_t) = \text{Intercept} + \beta \times \widetilde{Y}_{t-1} with \beta far more negative than the observed NFL slope of -0.069 [PAGE 25], such that teams fire coaches immediately after any below-average season. Under the null of zero coach effects but high serial correlation (\rho \approx 0.416 as in the NFL [PAGE 25]), the simulated false discovery rate will exceed .05. Prediction: with \beta \le -0.20 and \rho \ge 0.40, FDR > .10 in 1,000 Monte Carlo iterations, causing RIFLE to reject the null falsely. Verifiable by replicating the Table 7 simulation grid with steeper turnover slopes.

Scenario 3 — Omitted schedule confound without residualization. Suppose the analyst skips the opponent-quality and home-field residualization step [PAGE 5] and regresses raw game-team outcomes on coach fixed effects. If schedule difficulty is correlated with coach tenure—e.g., a new coach inherits a deliberately soft early-season schedule—the unadjusted r^2 will exceed the permuted r^2 even when the true coach effect is zero. Prediction: p < .05 will occur in a substantial share of null simulations, producing a false positive that disappears once residuals are computed per the paper’s procedure [PAGE 5]. Verifiable by comparing Table 1 MLB runs-allowed results using raw runs allowed versus residualized runs allowed; the residualized specification yields p < .001 and prop = .277 [PAGE 10], while an unadjusted specification should show attenuated or spurious significance depending on schedule-coach correlation.
</RLVR_COUNTERFACTUAL_VETOES>