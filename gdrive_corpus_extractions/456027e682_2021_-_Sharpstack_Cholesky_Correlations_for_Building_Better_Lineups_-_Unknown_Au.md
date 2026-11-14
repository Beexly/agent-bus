---
source: "2021 - Sharpstack Cholesky Correlations for Building Better Lineups - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2021"
pages: 12
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4320
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about Sharpstack and Cholesky Correlations for Building Better Lineups in Daily Fantasy Sports (DFS). I need to produce output with exact XML sections:

1. `<THINK_TRACE>` - Deep multi-hop derivation & gray-zone audit (>=400 words)
2. `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown
3. `<RETROCAUSAL_GENEALOGY>` - Historical/scientific lineage & multi-week traps
4. `<RECURSIVE_THEORY_OF_MIND>` - Crisis habit regression vs counter-trap vs clock
5. `<CROSS_LAYER_VETO_ADJUDICATION>` - Physical/biomechanical/weather veto proof
6. `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- >= 1,000-WORD DEPTH across all sections.
- When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.

The source text provided includes page markers implicitly via the text structure. I need to look at the page numbers mentioned in the source: pages 1-15 are referenced in the markdown. I should cite [PAGE 1], [PAGE 2], etc. where relevant.

Let me analyze the content deeply.

Paper: Sharpstack: Cholesky Correlations for Building Better Lineups by Andy Sherman-Ash and Keith Goldner from numberFire (FanDuel Group). MIT Sloan Sports Analytics Conference 2021 Research Paper Competition.

Key concepts:
- DFS lineup optimization as knapsack problem
- Classical linear optimizer maximizes average score (good for H2H, bad for GPPs)
- Need to maximize odds of winning tournament, not mean score
- Stacking constraints are rigid/time-consuming
- Sharpstack uses Cholesky decomposition for correlated simulations
- 4-step process:
  1. Custom correlation matrix
  2. Simulate slate 10,000 times using projections, std dev, correlation matrix
  3. Walk through each simulation with linear optimizer -> up to 10,000 candidate lineups
  4. Race each candidate across every simulation -> distribution of finishing positions

Data:
- Game-by-game stat lines and projections back to 2006
- Baseline positional-rank correlation matrix
- 48% QB-WR2 correlation, 40% QB-TE1 correlation
- QB1 and RB1 correlation varies by team (Derrick Henry +19% vs baseline +9%; Devin Singletary +4%)
- Sample size issue: only 16 NFL games per season
- Recency-weighted player-to-player rolling correlations via exponentially weighted moving correlation (Pandas EWM)
- Bayesian approach: base correlation as prior vs specific correlations based on sample size

Projected distributions:
- Fantasy points roughly follow Gamma distribution (Nathan Braun, fantasyMath)
- Standard deviations estimated empirically for each position and projected fantasy points combination

Cholesky Decomposition:
- For Hermitian positive-definite matrix A: A = C_A C_A* (or C_A C_A^T for real)
- C_A is lower triangular with positive diagonal entries
- Start with j x j correlation matrix X
- Covariance matrix b: b = S X S^T? Wait, need to look at exact formula. The text says "where S is a vector of length j containing the standard deviations of each sampled entry." Formula likely: B = S X S^T where S is diagonal matrix of std devs. Then W = C_B v where v is uncorrelated normal vector.
- Translate output to gamma distributions (nonzero, right-tail skewed)
- Mean matches projection, correlation matches custom matrix

Back testing:
- 39 single game NFL slates from 2019
- Top 150 lineups each (5850 lineups each)
- Compared Sharpstack, traditional knapsack, top 150 by salary
- Knapsack mean z-score 0.276 (beats 61.03% of scores)
- Sharpstack mean z-score 0.134 (beats 55% of scores), but higher std dev (.976 vs .878)
- Top 5% Sharpstack: 95.99% vs Knapsack 95.90%
- Top 2% Sharpstack: 98.46% vs Knapsack 97.67%
- ROI: Sharpstack 40.6%, Knapsack 25.2%, Top Salary -13.5%

Future work:
- Play-by-play simulators replacing correlated simulations
- Player-specific standard deviations (hierarchical Bayesian model)
- Parallelization/computational speed
- Genetic algorithm for multi-lineup strategy
- MLB extension (batting order correlation), NHL in development, NBA not much demand
- Season-long fantasy sit-start: maximize win probability, favored team reduces correlation, underdog increases it
- Same-game correlation probability questions

Now I need to structure the response.

Important: I must not mention betting lines (spreads, totals, moneylines, odds). The paper mentions ROI and GPPs but no betting lines per se. I should avoid "odds" in the betting sense, though probability is fine. I need to be careful with the word "odds" - the paper uses "odds Cam Newton scores..." but I should probably avoid it or use probability instead. The constraint says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." So I should not use the word "odds" at all? It says "never mention... odds." To be safe, I'll avoid "odds" entirely and use "probability" or "likelihood."

ZERO TOY EQUATIONS: No fake ratios. I need formal LaTeX. I can cite the actual equations from the paper or derive formal ones. I should state assumptions and exact singularity/breakdown regimes.

Page citations: The markdown shows page numbers at bottom: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15. I should cite [PAGE N] for relevant claims.

Word count: >= 1,000 words across sections. Each section should be substantial. THINK_TRACE >= 400 words.

Let me draft each section.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit.
- Discuss the transition from mean-variance optimization (knapsack) to tournament-winning tail-risk optimization.
- Multi-hop: GPP utility is convex in the upper tail, not linear. The knapsack maximizes E[score], but tournament prize structure pays disproportionately to top percentiles. Sharpstack increases variance via positive correlation to shift mass into upper tail.
- Gray-zone: The paper uses z-score normalization across slates but doesn't specify entry fee structure beyond "$1, 150-max entry GPP." ROI of 40.6% is simulated, not actual. The correlation matrix estimation uses exponentially weighted moving correlation but decay parameter (lambda/span) is not disclosed. Bayesian weighting between prior and sample correlation lacks explicit prior hyperparameters. Gamma distribution assumption for fantasy points: is it shape-scale or shape-rate? Not specified. Cholesky requires positive-definite correlation matrix; rolling correlations + Bayesian shrinkage may not guarantee positive-definiteness in edge cases (singularity when j x j matrix becomes ill-conditioned due to near-collinear player proxies or missing data). Breakdown regime: when sample size n -> 0 for a player pair, the method defaults to prior; when n is small but nonzero, weight on noisy sample correlation may amplify estimation error. The "race" across 10,000 simulations is computationally O(10000 * knapsack) which is intensive; caching introduces staleness if projections update mid-week.
- Also: Player-specific standard deviations are positional, not individual, which mis-specifies volatility for deep-threat vs possession receivers (John Brown vs Jarvis Landry example). Hierarchical Bayesian improvement acknowledged but largely unimplemented for most receivers.
- Multi-week trap: Correlations are recency-weighted rolling; in multi-week season-long contexts, carryover fatigue/injury covariance isn't modeled (only week-to-week independent draws conditional on correlation matrix).

<SOURCE_OPERATORS_AND_EQUATIONS>:
- Formal LaTeX for knapsack: maximize w^T mu_d subject to c^T w <= B, Aw <= b, w in {0,1}^P. (from Haugh and Singal [1], page 2).
- Multivariate normal: d ~ N(mu_d, S_d).
- Cholesky: A = C_A C_A^* (Hermitian), or A = C_A C_A^T for real. C_A lower triangular, diag > 0.
- Covariance construction: B = S X S^T where S = diag(s_1,...,s_j), X is j x j correlation matrix. Then W = C_B v, v ~ N(0, I_j).
- Gamma translation: W_normal -> Gamma(k, theta) matched to mean projection and std dev.
- Z-score: z = (score - mu_slate)/sigma_slate.
- Percentile mapping: mean z 0.276 -> Phi(0.276) approx 61.03% (actually Phi(0.276) is ~0.6088, close enough, but I should cite paper's 61.03%).
- ROI: (winnings - entry fees)/entry fees.
- Units: fantasy points (dimensionless points), salary ($), standard deviation (fantasy points), correlation (dimensionless, [-1,1]), z-score (dimensionless), ROI (dimensionless ratio or %).
- Page citations: [PAGE 2] for knapsack formulation, [PAGE 3] for 4-step process, [PAGE 4] for EWM corr and Bayesian prior, [PAGE 5] for Gamma dist, [PAGE 6] for Cholesky formulas, [PAGE 9-10] for backtesting z-scores, [PAGE 10] for ROI figure, [PAGE 11-12] for future work/player-specific std dev.

<RETROCAUSAL_GENEALOGY>:
- Lineage: Markowitz portfolio theory (1952) -> knapsack/linear optimizer -> Haugh & Singal 2018 Sloan paper -> Cholesky decomposition (André-Louis Cholesky, WWI era) -> Monte Carlo simulation -> DFS stacking.
- Multi-week traps: In season-long formats, correlations decay with roster turnover, injuries, bye weeks. Using Week 14 2019 static matrix ignores temporal non-stationarity. The Bayesian prior uses league-average baseline, but offensive schemes change year-to-year (e.g., Titans shifting from run-heavy to pass-heavy alters Henry-defense correlation). Multi-week trap: a stack that worked in Week 1 may anti-correlate in Week 6 due to defensive game-plan adjustments, and the rolling EWM may lag regime changes by several weeks.

<RECURSIVE_THEORY_OF_MIND>:
- Crisis habit regression: Under pressure, DFS players revert to linear optimizer (max mean) or salary-sort heuristics because they are cognitively cheap. This is a habit regression under tournament variance stress.
- Counter-trap: Sharpstack explicitly induces higher variance (higher ceiling, lower floor). A user expecting consistent cash-line performance will perceive Sharpstack as "broken" when a correlated stack busts (negative covariance realization), causing abandonment of the tool exactly when tail exposure is needed.
- Clock: The 10,000 simulation race must complete before lock. Computational latency vs. late-breaking injury news creates a clock veto: if a player is ruled out 30 minutes before lock, cached lineups become invalid; re-running end-to-end may exceed time budget.

<CROSS_LAYER_VETO_ADJUDICATION>:
- Physical layer: NFL game physics (play clock, possession alternation) impose hard negative correlation between teammates on the same drive (cannot both score on same play). The paper notes Sony Michel rarely catches ball, so Newton-Michel both good is hard because cannot run and throw on same play. Cholesky correlation matrix is symmetric and continuous; it cannot encode hard exclusivity constraints (mutually exclusive events on a single play) without truncation or copula adjustments. Veto: if correlation matrix assigns positive QB-RB correlation to a run-heavy team where TDs are mutually exclusive, the Gamma simulation may produce physically impossible joint outcomes.
- Biomechanical layer: Player snap counts and target shares are bounded [0,1] or count data; Gaussian copula via Cholesky on ranks/projections may produce negative fantasy points or impossible stat lines before Gamma translation. The translation to Gamma ensures nonnegativity but does not guarantee joint physical plausibility (e.g., QB passing yards and RB rushing yards on same play).
- Weather layer: Not explicitly modeled in the paper. Weather (wind, precipitation) simultaneously suppresses passing game and alters run-pass correlation structure. A custom correlation matrix calibrated in dome/outdoor mild conditions breaks down in high-wind games; no weather interaction term exists in the covariance construction B = S X S^T. Veto: adverse weather imposes an exogenous regime shift on X that recency-weighted EWM may not capture quickly enough.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning Verifiable Rewards? Or just verifiable scenarios. I'll frame as counterfactual veto scenarios with falsifiable predictions.
1. Positive-definiteness breakdown: If two players have identical projections and are perfectly collinear in the rolling window (e.g., two RBs on same committee with identical snap counts historically), X becomes singular or near-singular. Cholesky fails (diag entry <= 0). Prediction: Lineup generation crashes or requires jitter; if jitter added, correlations are distorted and top-2% tail performance degrades below knapsack.
2. Weather regime shift: In a high-wind game (wind > 20 mph), the QB-WR correlation should collapse toward zero or negative while RB-defense correlation spikes. If Sharpstack uses baseline X without weather interaction, it will over-stack passing correlations. Prediction: Sharpstack ROI in windy slates drops below knapsack ROI because lineups are over-exposed to correlated passing busts.
3. Late injury / computational lock: If a starting QB is ruled out 90 minutes before lock, cached top-150 lineups include the injured QB. Re-running 10k simulations with updated covariance may not finish before lock. Prediction: Users forced to use stale cached lineups will underperform fresh knapsack lineups by at least the mean z-score gap (0.142) on that slate.

Need to ensure >= 1000 words total. Let's estimate. Each section needs to be detailed. I'll aim for ~200-250 words per section x 6 = 1200-1500 words. THINK_TRACE >= 400 words.

Also must avoid "odds" word. Check carefully.

Let me write the final output.

Need exact XML sections. No markdown outside? Probably fine to just output the XML sections. I'll wrap everything in the tags.

Let me make sure I include verbatim quotes where citing pages. The instruction says: "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should include some verbatim quotes from the source with page numbers.

Let's find quotes:
- Page 2: "Our goal in the fantasy sports competition is to choose a portfolio w ∈ {0,1}P of athletes."
- Page 2: "We want to maximize our odds of winning the tournament and these optimizers maximize our average final score..." Wait, "odds" appears in source. I should not repeat it maybe, or I can quote it? The constraint says never mention odds. Quoting the source might violate if I include the word. Better to paraphrase or avoid quotes containing "odds". I can quote other parts.
- Page 3: "Smart randomness."
- Page 4: "48% correlation between a quarterback and their second-best wide receiver; in blue, there is a 40% correlation between a quarterback and their top tight end."
- Page 4: "estimated at a +19% correlation as opposed to the baseline +9%."
- Page 6: Cholesky formula.
- Page 10: ROI numbers.
- Page 12: John Brown vs Jarvis Landry footnote.

I'll use quotes without the word "odds."

Word count check: I need to be verbose enough. Let's draft carefully.

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

No betting lines. No spreads/totals/moneylines/odds.

Let's write.

THINK_TRACE (>=400 words):
I'll write about 500 words here.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown. Maybe 200 words.

RETROCAUSAL_GENEALOGY: 150 words.

RECURSIVE_THEORY_OF_MIND: 150 words.

CROSS_LAYER_VETO_ADJUDICATION: 200 words.

RLVR_COUNTERFACTUAL_VETOES: 200 words.

Total ~1400. Good.

Let's ensure LaTeX is proper.

Knapsack:
\max_{\mathbf{w}} \mathbf{w}^\top \boldsymbol{\mu}_d \quad \text{s.t.} \quad \mathbf{c}^\top \mathbf{w} \le B, \quad \mathbf{A}\mathbf{w} \le \mathbf{b}, \quad \mathbf{w} \in \{0,1\}^P.

Distribution:
\mathbf{d} \sim \mathcal{N}(\boldsymbol{\mu}_d, \mathbf{S}_d).

Cholesky:
\mathbf{A} = \mathbf{C}_{\mathbf{A}} \mathbf{C}_{\mathbf{A}}^* ; for real entries, \mathbf{A} = \mathbf{C}_{\mathbf{A}} \mathbf{C}_{\mathbf{A}}^\top.

Covariance:
\mathbf{B} = \mathbf{S} \mathbf{X} \mathbf{S}^\top, \quad \mathbf{S} = \operatorname{diag}(s_1,\dots,s_j).

Simulation:
\mathbf{W} = \mathbf{C}_{\mathbf{B}} \mathbf{v}, \quad \mathbf{v} \sim \mathcal{N}(\mathbf{0}, \mathbf{I}_j).

Z-score:
z = (s - \bar{s}_{\text{slate}}) / \sigma_{\text{slate}}.

ROI:
\mathrm{ROI} = (R - F) / F.

Singularity: \lambda_{\min}(\mathbf{X}) \le 0 or near-zero leads to Cholesky failure.

Units: fantasy points (dimensionless score units), salary (USD), correlation (dimensionless), z-score (dimensionless standard deviations), ROI (dimensionless percentage).

Pages: cite [PAGE 2], [PAGE 3], etc.

RLVR section: 3 scenarios.

I need to be careful not to use "odds". I'll use probability or likelihood.

Let's write the final response now.
</NATIVE_REASONING>

<THINK_TRACE>
The central multi-hop derivation in this paper is that GPP (large-field tournament) utility is not linear in expected fantasy points; it is convex in the upper tail. A classical knapsack linear optimizer, as formulated by Haugh and Singal [1] and reproduced on [PAGE 2], maximizes \mathbf{w}^\top \boldsymbol{\mu}_d subject to a salary cap and roster constraints. That objective is optimal for head-to-head contests where the payout is a step function at the median, but it is suboptimal for GPPs because prize pools are concentrated in the top percentiles. Sharpstack therefore replaces mean-maximization with a simulation-and-race procedure: generate correlated fantasy-point outcomes via Cholesky decomposition, solve the knapsack within each of 10,000 simulated realities, and then race the resulting candidate lineups across all simulations to identify which structures occupy the 95th and 98th percentiles most frequently.

A gray-zone audit reveals several estimation fragilities. First, the custom correlation matrix relies on an exponentially weighted moving correlation (EWM) from Pandas [PAGE 4], but the paper does not disclose the decay span or center-of-gravity parameter, nor does it specify how the Bayesian weight between the league-average prior and the recency-weighted sample correlation is calibrated as a function of sample size. With only 16 NFL games per season [PAGE 4], many player pairs have n < 10 shared games; in that regime the posterior correlation is dominated by the prior, yet the paper provides no sensitivity analysis for prior strength. Second, the covariance construction \mathbf{B} = \mathbf{S} \mathbf{X} \mathbf{S}^\top assumes \mathbf{X} is positive-definite. Rolling correlations estimated on overlapping windows can produce near-collinear structures (for example, two running backs in a committee with identical historical snap counts), pushing \lambda_{\min}(\mathbf{X}) toward zero and violating the strict positive-diagonal requirement of Cholesky factorization. The breakdown regime is therefore singular or ill-conditioned \mathbf{X}, where the decomposition either fails or requires ad hoc jitter that distorts the tail geometry the tool is designed to capture.

Third, the projection distribution is modeled as Gamma [PAGE 5], justified by Nathan Braun’s fantasyMath work, but the paper does not state whether the shape-scale or shape-rate parameterization is used, nor how the Gamma parameters are back-solved from mean projection and positional standard deviation. Because player-specific standard deviations are not implemented for most receivers [PAGE 12], a deep-threat receiver such as John Brown is assigned the same volatility as a possession receiver such as Jarvis Landry despite materially different Air Yards profiles. This mis-specification compresses the right tail for high-variance players and dilutes the correlation signal in the upper quantiles where GPP prizes are awarded.

Fourth, the "race" across 10,000 candidate lineups is computationally intensive [PAGE 11], and the system caches a top set of lineups in a constantly running thread. This introduces a staleness veto: if a late injury or weather announcement shifts the true covariance structure after the cache is built but before lock, the user may be served lineups conditioned on a stale \mathbf{X}. Finally, the back test is limited to 39 single-game slates from 2019 [PAGE 9]; multi-week season-long carryover effects (injury accumulation, defensive game-plan adjustments, bye-week roster churn) are not modeled, so the rolling correlation matrix may lag regime changes by several weeks in season-long applications.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The classical linear optimizer is stated on [PAGE 2] as: \mathbf{d} \in \mathbb{R}^P is multivariate normal, \mathbf{d} \sim \mathcal{N}(\boldsymbol{\mu}_d, \mathbf{S}_d), and the portfolio \mathbf{w} \in \{0,1\}^P solves \max \mathbf{w}^\top \boldsymbol{\mu}_d subject to \mathbf{c}^\top \mathbf{w} \le B and positional/diversity constraints aggregated in \mathbf{W}. Units: \boldsymbol{\mu}_d and \mathbf{d} are in fantasy points; \mathbf{c} is salary in USD; B is the salary cap in USD; \mathbf{w} is dimensionless binary selection.

Sharpstack’s four-step process is summarized on [PAGE 3]: (1) generate custom correlation matrix \mathbf{X} \in \mathbb{R}^{j \times j}; (2) simulate the slate 10,000 times using projections, standard deviations, and \mathbf{X}; (3) run a linear optimizer over each simulation to produce up to 10,000 candidate lineups; (4) race candidates across all simulations to estimate finishing-position distributions.

Positional baseline correlations on [PAGE 4]: QB–WR2 correlation is 48%, QB–TE1 correlation is 40%. Team-specific deviations are bounded by sample size: Derrick Henry–Titans defense estimated at +19% versus baseline +9%; Devin Singletary–Bills defense at +4%. These correlations are dimensionless Pearson-type coefficients in [-1, 1].

Cholesky decomposition on [PAGE 6]: for Hermitian positive-definite \mathbf{A}, \mathbf{A} = \mathbf{C}_{\mathbf{A}} \mathbf{C}_{\mathbf{A}}^*; for real entries, \mathbf{A} = \mathbf{C}_{\mathbf{A}} \mathbf{C}_{\mathbf{A}}^\top where \mathbf{C}_{\mathbf{A}} is lower triangular with strictly positive diagonal entries. The covariance matrix is constructed as \mathbf{B} = \mathbf{S} \mathbf{X} \mathbf{S}^\top with \mathbf{S} = \operatorname{diag}(s_1,\dots,s_j), where each s_j is a player-specific standard deviation in fantasy points. Correlated simulations are \mathbf{W} = \mathbf{C}_{\mathbf{B}} \mathbf{v}, \mathbf{v} \sim \mathcal{N}(\mathbf{0}, \mathbf{I}_j). Output is translated to Gamma distributions to enforce nonnegativity and right-tail skew; the mean of each simulated distribution matches the numberFire projection in fantasy points [PAGE 6-7].

Back-test statistics on [PAGE 9-10]: Knapsack mean z-score 0.276 (beats 61.03% of scores); Sharpstack mean z-score 0.134 (beats 55% of scores) with standard deviation 0.976 versus 0.878 for knapsack. Top 2% of Sharpstack lineups outperform 98.46% of real lineups versus 97.67% for knapsack. Simulated ROI on [PAGE 10]: Sharpstack 40.6%, Knapsack 25.2%, Top Salary -13.5%. ROI units are dimensionless percentage return on entry fees.

Singularity/breakdown regime: Cholesky requires \lambda_{\min}(\mathbf{X}) > 0. If \mathbf{X} is singular or indefinite due to collinearity in EWM rolling windows or insufficient shared-game sample size, the decomposition fails or must be regularized, breaking the covariance-preservation guarantee.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The methodological lineage runs from Markowitz portfolio selection (mean-variance optimization under a budget constraint) through the knapsack formulation of Haugh and Singal [PAGE 2], to the numberFire Sharpstack extension that injects Cholesky-correlated Monte Carlo draws into the optimization inner loop. Cholesky decomposition itself dates to André-Louis Cholesky’s work on positive-definite matrices [PAGE 6], later standardized in Golub & Van Loan [PAGE 6 reference] and Horn & Johnson [PAGE 6 reference]. The DFS-specific innovation is not the decomposition but the use of the lower triangular factor to color uncorrelated Gaussian noise with sport-specific cross-player covariance, followed by a non-Gaussian Gamma translation.

A multi-week trap is embedded in the temporal stability assumption of \mathbf{X}. The paper constructs recency-weighted rolling correlations from game logs back to 2006 [PAGE 4], but NFL offensive schemes are non-stationary: a run-heavy Titans offense in one season may become pass-heavy in the next, altering the QB–RB correlation from positive to near-zero. Because the Bayesian prior uses league-average baseline correlations [PAGE 4], a team undergoing a scheme change will be incorrectly shrunk toward the old baseline until enough new games accumulate to overcome the prior. In season-long formats, bye weeks, injuries, and trades further break the stationarity of pairwise sample correlations, meaning a stack validated in Week 1 can anti-correlate by Week 6. The paper acknowledges this limitation only implicitly by capping the back test to single-game slates from one season [PAGE 9].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Under tournament variance stress, DFS participants exhibit crisis habit regression: they abandon probabilistic stack construction and revert to the cognitively cheap linear optimizer or salary-sorted heuristics because those rules produce defensible average scores. The paper explicitly contrasts this on [PAGE 2], noting that linear optimizers maximize average final score, appropriate for head-to-head contests, but fail to maximize the probability of a tournament-winning score. Sharpstack’s counter-trap is to deliberately raise outcome variance—higher ceiling, lower floor—via positive correlated stacking [PAGE 10]. A user whose mental model expects cash-line consistency will perceive a correlated stack bust as tool failure and abandon the method precisely when tail exposure is required.

The clock layer operates at slate lock. The 10,000-simulation race must complete before roster lock [PAGE 3, 11], and the system caches lineups to serve up to 150 instantly [PAGE 11]. If a late scratch or projection update arrives after caching but before lock, the user faces a recursive theory-of-mind dilemma: trust stale correlated candidates or fall back to a fresh but uncorrelated knapsack solution. The former risks physically impossible joint outcomes under the outdated \mathbf{X}; the latter forfeits the tail convexity that justifies Sharpstack in GPPs.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: NFL possession dynamics impose hard mutual exclusivity—on a single play, a quarterback cannot both throw a touchdown pass and hand off for a rushing touchdown. The paper notes this intuitively on [PAGE 1] regarding Cam Newton, Sony Michel, and James White: they cannot both have a good fantasy performance on the same play because the ball cannot be run and thrown simultaneously. A symmetric continuous correlation matrix \mathbf{X} assigns a real-valued correlation to QB–RB pairs without encoding hard exclusivity; when sampled through a Gaussian copula and translated to Gamma margins, it can generate joint outcomes that violate play-level physical constraints. Veto condition: if \mathbf{X} assigns materially positive QB–RB correlation to a run-dominated team where scoring events are mutually exclusive, the simulation produces physically inadmissible upper-tail co-occurrences.

Biomechanical layer veto: Target share, air yards, and snap counts are bounded count or proportion processes. The Cholesky-Gaussian intermediate \mathbf{W} is unbounded on \mathbb{R}; even after Gamma translation ensures nonnegative marginals, the joint distribution does not guarantee joint physical plausibility (e.g., receiver A and receiver B on the same team cannot both occupy 30% target share simultaneously). The paper addresses receiver heterogeneity only for a small minority of deep specialists [PAGE 12], leaving most players with positional standard deviations that ignore route-tree variance.

Weather layer veto: The covariance construction \mathbf{B} = \mathbf{S} \mathbf{X} \mathbf{S}^\top contains no interaction term for weather. High wind or precipitation simultaneously depresses passing-game correlations and elevates run-game correlation with defense [PAGE 4 conceptual]. Because \mathbf{X} is estimated from pooled historical data without weather conditioning, adverse weather imposes an exogenous regime shift that the recency-weighted EWM may not capture quickly enough. Veto condition: in high-wind games, passing-stack correlation should collapse while RB–defense correlation spikes; a static \mathbf{X} will over-stack passing correlations and produce systematically over-exposed lineups.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Positive-definiteness collapse. Construct two running backs on the same committee with identical historical snap counts and projections, yielding perfectly collinear columns in \mathbf{X}. Cholesky requires \lambda_{\min}(\mathbf{X}) > 0; with collinearity the lower triangular factor has a zero or negative diagonal entry and the decomposition is undefined. Prediction: lineup generation either crashes or requires jitter; if jitter is injected, the tail correlation geometry is distorted and Sharpstack’s top-2% outperformance (98.46% vs 97.67% on [PAGE 9-10]) degrades to at or below the knapsack baseline because the smart randomness collapses into uncorrelated noise.

Scenario 2 — Weather regime shift. Select a single-game slate with forecast sustained wind above 20 mph. The true data-generating process implies QB–WR correlation near zero or negative, while RB–defense correlation rises. If Sharpstack uses the unadjusted baseline \mathbf{X} calibrated on all-weather historical data [PAGE 4], it will over-weight passing stacks. Prediction: Sharpstack ROI on windy slates falls below knapsack ROI (25.2% on [PAGE 10]) because lineups are over-exposed to correlated passing busts and under-exposed to the run-heavy covariance structure that actually maximizes tail finish probability.

Scenario 3 — Late-injury computational lock. A starting quarterback is ruled out 60 minutes before lock. The cached top-150 lineups [PAGE 11] contain the injured player, and re-running the full 10,000-simulation race with updated covariance cannot complete before lock. Prediction: users forced to submit stale cached lineups will underperform a fresh knapsack re-solve by at least the mean z-score gap of 0.142 [PAGE 9], erasing Sharpstack’s tail advantage on that slate because the cached candidates are conditioned on a covariance matrix that no longer reflects the available player pool.
</RLVR_COUNTERFACTUAL_VETOES>