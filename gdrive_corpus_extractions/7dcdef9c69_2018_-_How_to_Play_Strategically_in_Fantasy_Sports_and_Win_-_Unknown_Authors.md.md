---
source: "2018 - How to Play Strategically in Fantasy Sports (and Win) - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2018"
pages: 30
model: alibaba_gse:qwen-plus-character
words: 1621
---

<THINK_TRACE>
The foundational shift in this source is the transition from static portfolio optimization to a game-theoretic, strategic framework. Traditional fantasy sports models (like Hunter et al.) assume opponents are passive noise or simply maximize expected points. This paper, however, treats the cutoff score for winning—$G^{(r')}$—as a stochastic benchmark dependent on the collective actions of $O$ opponents. The derivation hinges on the realization that maximizing probability of outperforming this random benchmark requires a delicate balance of mean and variance, formalized via Mean-Variance Optimization (MVO).

A critical gray-zone lies in Assumptions 5.1 and 5.2. Assumption 5.1 posits that for top-heavy contests, even the optimal portfolio is "out-of-the-money" in expectation ($\mu_{Y_w} < 0$). This forces the optimization into the high-variance regime (Proposition 4.1-i), where maximizing variance becomes paramount for a non-zero chance at the long tail. The breakdown occurs if the contest pays out below the top 20%, invalidating the assumption. Assumption 5.2, equating covariances across different percentiles, simplifies the complex interplay between portfolio choice and opponent distribution tails. If opponent stacking behavior drastically alters these covariances by percentile, the derived BQP (Binary Quadratic Program) may sub-optimally target a single variance metric rather than a percentile-specific one.

The modeling of opponents via Dirichlet-Multinomial processes introduces another layer of epistemic uncertainty. While marginal independence is used for tractability, real "sharks" engage in correlated strategies (stacking). The accept-reject algorithm with a minimum budget constraint ($B_{lb}$) attempts to capture behavioral realism but assumes uniform sophistication among opponents. A multi-hop trap emerges here: sophisticated players might anticipate the strategic model's preference for low-owned players and deliberately "fade" them, creating a second-order reaction not captured by historical marginals.

From a recursive theory of mind perspective, minnows operate at Level 0 (maximizing personal expected points), while sharks operate at Level 1 (modeling minnow behavior to select low-correlation portfolios). The proposed strategic model operates at Level 1.5, using statistical inference on past selections rather than pure game theory. However, it misses Level 2 dynamics where some opponents are also strategic. The numerical results, showing superior performance in top-heavy contests, suggest the market inefficiency (minnow dominance) is strong enough that even a Level 1 strategy yields massive alpha over a Level 0 approach. Yet, the high variance in NFL outcomes (injuries, weather) acts as a physical veto that can abruptly invalidate any probabilistic model, underscoring the fragility of purely information-theoretic advantages in physical domains.
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
**Core Strategic Operator:** The problem is formulated as maximizing the probability that the portfolio score $F = \mathbf{w}^T \boldsymbol{\delta}$ exceeds the $r'$-th order statistic of opponents' scores $G^{(r')}$. [PAGE 4]
$$ \max_{\mathbf{w} \in \mathbb{W}} \mathbb{P}\left( \mathbf{w}^T \boldsymbol{\delta} > G^{(r')}(\mathbf{W}_{op}, \boldsymbol{\delta}) \right) $$
This reduces to optimizing the standardized variable $Y_{\mathbf{w}} = \mathbf{w}^T \boldsymbol{\delta} - G^{(r')}$, assumed Normal $\mathcal{N}(\mu_{Y_{\mathbf{w}}}, \sigma^2_{Y_{\mathbf{w}}})$. [PAGE 11]

**Mean-Variance Reduction (Proposition 4.1):** For normal returns, maximizing $\mathbb{P}(Y_{\mathbf{w}} > 0)$ is equivalent to:
- If $\exists \mathbf{w}: \mu_{Y_{\mathbf{w}}} \ge 0$: Maximize Sharpe-like ratio $(\mu_{Y_{\mathbf{w}}} - \lambda \sigma^2_{Y_{\mathbf{w}}}) / \sigma_{Y_{\mathbf{w}}}$. [PAGE 10]
- If $\forall \mathbf{w}: \mu_{Y_{\mathbf{w}}} < 0$: Maximize $(\mu_{Y_{\mathbf{w}}} + \lambda \sigma^2_{Y_{\mathbf{w}}})$. [PAGE 10]
Units: $\mu$ in expected fantasy points, $\sigma^2$ in points-squared.

**Opponent Modeling (Dirichlet-Multinomial):** Positional selection probabilities $\mathbf{p}_{QB}$ follow a Dirichlet distribution with parameter $\boldsymbol{\alpha}_{QB}$, predicted via log-linear regression. [PAGE 7]
$$ \boldsymbol{\alpha}_{QB} = \exp(\mathbf{X}_{QB} \boldsymbol{\beta}_{QB}) $$
Assumptions: Observational features $\mathbf{X}$ (costs, projections) fully determine $\boldsymbol{\alpha}$. Breakdown: If opponent behavior is endogenous to current week's strategic landscape (e.g., reacting to known "shark" tendencies), the time-homogeneity of $\boldsymbol{\beta}$ fails.

**Top-Heavy Objective Function:** For payoffs $R_d$ at percentiles $r_d$, the expected reward is: [PAGE 13]
$$ \sum_{d=1}^D (R_d - R_{d+1}) \Phi\left( \frac{\mu_{Y_{\mathbf{w}} d}}{\sigma_{Y_{\mathbf{w}} d}} \right) $$
Under Assumptions 5.1 & 5.2, this simplifies to maximizing a quadratic form independent of $d$: [PAGE 14]
$$ \mathbf{w}^T \boldsymbol{\mu}_\delta + \lambda (\mathbf{w}^T \boldsymbol{\Sigma}_\delta \mathbf{w} - 2\mathbf{w}^T \boldsymbol{\sigma}_{\delta, G^{(r')}}) $$
Singularity Regime: If $\boldsymbol{\Sigma}_\delta$ is near-singular (highly correlated players) or budget constraints force extreme sparsity, the Hessian of the BQP may become ill-conditioned, causing solver instability.

**Value of Information (Insider Trading):** The incremental value of knowing true marginals $\mathbf{p}$ versus full portfolios $\mathbf{W}_{op}$ is quantified via decision tree analysis. [PAGE 23]
Unit: Expected Profit increment ($) per entry.
Breakdown: As the sophistication of non-insiders increases (better estimation of $\mathbf{p}$), the value of insider information asymptotically approaches zero.
</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
This research is a direct descendant of Morton et al.'s (2003) work on optimizing benchmark-based utility functions [21], transplanted from finance to gaming. It reacts against the earlier tradition of "office pool" optimization (Kaplan & Garstka [19]), which treated opponents as fixed rational actors in a static tournament bracket. The novelty is treating DFS as a *continuum* of simultaneous portfolio choices, bridging mean-field game theory and combinatorial optimization.

Historically, the field bifurcated: one branch focused on player performance projection (regression, ML), the other on portfolio construction under budget constraints (knapsack variants). This paper synthesizes them by injecting *behavioral econometrics* (Dirichlet regression of selection data) into the MVO framework. It learns from the failure of simple "maximize EV" heuristics in top-heavy contests, recognizing that beating a stochastic benchmark requires skewness, not just mean superiority.

A multi-week trap emerges in the calibration of stacking probability $q$. The model sets $q$ based on historical averages (e.g., 0.35 for top-heavy). However, if the population of "sharks" grows week-over-week, adopting this variance-seeking behavior, the equilibrium $q$ shifts upward. A model calibrated on last season's $q$ will systematically under-estimate current opponent correlation, leading to sub-optimal diversification. The genealogy shows a path dependence: early adopters of strategic models alter the very opponent distribution they seek to exploit, creating a moving target.
</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
The framework implicitly assigns cognitive levels:
- **Level 0 (Minnows):** Optimize $\mathbf{w}^T \boldsymbol{\mu}_\delta$. Ignore variance and opponents.
- **Level 1 (Benchmark Model 2):** Optimizes $\mathbf{w}^T \boldsymbol{\mu}_\delta$ subject to stacking constraint to increase variance. Recognizes need for high upside but uses a rigid, heuristic rule.
- **Level 1.5 (Strategic Model):** Uses inferred opponent distributions to optimize the exact probability of beating $G^{(r')}$. Dynamically adjusts mean-variance trade-off based on estimated $\mu_{Y_w}$.

Crisis habit regression manifests when facing a "boom" player (e.g., a quarterback with an unexpectedly huge game). Minnows (L0) flock to him the next week due to recency bias, driving up his cost and ownership. The L1.5 model detects this surge in projected ownership $\mathbf{p}$ and correctly avoids him, seeking uncorrelated value elsewhere. However, if *all* strategic models converge on the same low-owned alternative, they create a new crowded play, collapsing its edge.

Counter-trap vs Clock: The "clock" is the pre-game deadline. Last-minute injury news (e.g., Fournette questionable) causes a rapid update in $\boldsymbol{\mu}_\delta$ and a cascade in $\mathbf{p}$ as minnows swap players reactively. The L1.5 model, relying on stale inputs, suffers a "data latency penalty." A true Level 2 agent would model the *reaction function* of minnows to news, anticipating which backups will see inflated ownership due to panic-swapping, and instead target a less obvious beneficiary further down the depth chart. The strategic model lacks this meta-cognitive loop; it optimizes against the distribution observed at $t-1$ hour, not the distribution that will exist at lock time.
</RETROCAUSAL_GENEALOGY>
<CROSS_LAYER_VETO_ADJUDICATION>
**Physical/Biomechanical Veto:** NFL player performance is governed by physical laws and biological limits. A model projecting 25 fantasy points for a running back based on historical $\boldsymbol{\mu}_\delta$ and low ownership is vetoed instantly if the player suffers an ACL tear pre-game. This is a hard, binary veto that overrides all information-theoretic optimizations. The source acknowledges this high variance but treats it exogenously.

**Weather Veto:** Outdoor games in恶劣 weather (rain, wind, cold) impose a biomechanical filter. Passing efficiency drops, favoring ground games. The strategic model's covariance matrix $\boldsymbol{\Sigma}_\delta$ is static, derived from aggregate historical data. It does not dynamically re-weight correlations based on meteorological conditions. A QB-WR stack might be highly correlated in clear skies but negatively correlated in high winds (pass drops increase, completing fewer passes). The lack of a conditional covariance operator $\boldsymbol{\Sigma}_\delta(\text{weather})$ represents a cross-layer failure where physical context vetoes the statistical dependency structure.

**Proof of Non-Causality:** The paper's success relies on the assumption that financial payoffs are causally linked to statistical outperformance of a benchmark. However, if a key player is suspended (league policy veto) after lineup submission, the causal chain breaks. The portfolio was optimized for a set of feasible players $\mathbb{W}$, but the physical reality of the game removes an element from that set. The model has no mechanism for post-lock feasibility vetoes, exposing a brittleness in its formalization of $\mathbb{W}$ as static.
</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>
**Scenario 1: Universal Adoption of Strategic Model.**
*Veto:* If all participants adopt the L1.5 strategy, the market prices in all variance advantages. Ownership percentages $\mathbf{p}$ become uniform or counter-strategically clustered. The Dirichlet regression parameters $\boldsymbol{\beta}$ collapse as predictive power vanishes.
*Prediction:* The Sharpe ratio of the strategic model converges to the risk-free rate (house rake). Top-heavy contests become pure lotteries dominated by idiosyncratic variance (injuries), making the optimization problem ill-posed.

**Scenario 2: Real-Time Data Integration.**
*Veto:* The model uses $\boldsymbol{\mu}_\delta$ from FantasyPros 24h prior. If an oracle provides perfect, lock-time $\boldsymbol{\mu}_\delta$ and updated $\mathbf{p}$, the optimization window shrinks to minutes.
*Prediction:* The BQP must be solved in real-time. The computational complexity of solving 50 diversified BQPs within 60 seconds may be intractable with current solvers, forcing a rollback to greedy heuristics and reducing the theoretical advantage of the full model.

**Scenario 3: Opponents Use Anti-Stacking Algorithms.**
*Veto:* Suppose a subset of opponents employs a Level 2 strategy that explicitly minimizes portfolio variance by selecting players from opposing teams (anti-stacking).
*Prediction:* This would drastically reduce the realized variance of $G^{(r')}$, making it easier to beat. The strategic model's assumption of positive $\sigma^2_{Y_w}$ could lead to over-diversification. The optimal response would paradoxically be to increase stacking (higher variance) to exploit the now-compressed opponent distribution, flipping the sign of the optimal $\lambda$ in Algorithm 3.
</RLVR_COUNTERFACTUAL_VETOES>