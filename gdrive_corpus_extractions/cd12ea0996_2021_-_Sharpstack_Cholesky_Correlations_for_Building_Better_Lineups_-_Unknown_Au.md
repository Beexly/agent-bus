---
source: "2021 - Sharpstack Cholesky Correlations for Building Better Lineups - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2021"
pages: 15
model: auto
words: 1412
---

<THINK_TRACE>
The fundamental tension identified in the Sharpstack research is the divergence between two optimization objectives: maximizing the expected value (mean) of a score versus maximizing the probability of achieving extreme outliers in a high-variance environment. The authors distinguish between the "Classic Linear Optimizer," which solves a combinatorial knapsack problem to maximize $\mu_d$ (mean performance), and the requirements of Guaranteed Prize Pool (GPP) tournaments, where the objective function shifts toward the right tail of the distribution.

The derivation follows a multi-stage stochastic pipeline:
1. **Correlation Mapping**: Establishing a baseline positional-rank correlation matrix $X$, then adjusting via recency-weighted Bayesian approaches. The authors note that "on some teams the QB1 and RB1 are highly correlated, but on other teams they are not" [PAGE 4], necessitating a move away from rigid, manual stacking constraints.
2. **Covariance Construction**: Constructing the covariance matrix $b$ using the relationship $b = S \times X \times S$ [PAGE 6], where $S$ represents the vector of standard deviations.
3. **Cholesky Decomposition**: Applying $A = C_A C_A^*$ [PAGE 6] to the covariance matrix to derive the lower triangular matrix $C_A$. This allows for the transformation of an uncorrelated Gaussian vector $v$ into a correlated vector $W$ via $W = C_A \times v$ [PAGE 6].
4. **Non-Gaussian Mapping**: A critical "gray-zone" audit reveals that while the simulation engine uses multivariate normal distributions for the correlation structure, the final outputs must be mapped to a Gamma distribution. This is required because "Fantasy points roughly follow a Gamma distribution" [PAGE 5] and must exhibit "nonzero, right-tail skewed" [PAGE 7] properties. A pure Gaussian model would erroneously assign probability mass to negative point totals, which is physically impossible in the scoring domain.
5. **The "Race" Meta-Heuristic**: Unlike standard optimizers that select the single best lineup per slate, Sharpstack performs a temporal-simulated "race." It generates 10,000 candidate lineups through individual simulations and then evaluates their relative performance across the *entire* set of 10,000 simulations. This effectively identifies lineups with the highest "ceiling" (z-score standard deviation), as evidenced by Sharpstack's z-score standard deviation of $.976$ compared to the knapsack's $.878$ [PAGE 10].

The breakdown regime for this model occurs when the correlation matrix $X$ is not positive-definite. If $X$ fails this condition, the Cholesky decomposition $C_A$ cannot be uniquely determined as a real lower triangular matrix, leading to a failure in the simulation pipeline.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The Sharpstack framework operates through the following formal mathematical constructs:

**1. The Combinatorial Knapsack Constraint Set:**
For a set of players $P$, the selection vector $w \in \{0,1\}^P$ is constrained by:
$$\sum_{p=1}^{P} w_p = C$$
$$\sum_{p=1}^{P} c_p w_p \leq B$$
where $C$ is the required number of players, $c_p$ is the cost of the $p$-th player, and $B$ is the total budget [PAGE 2].

**2. Multivariate Normal Performance Assumption:**
Player performance $d \in \mathbb{R}^P$ is modeled as:
$$d \sim N(\mu_d, S_d)$$
where $\mu_d$ is the mean vector and $S_d$ is the variance-covariance matrix [PAGE 2].

**3. Covariance Matrix Generation:**
The covariance matrix $b$ is derived from the correlation matrix $X$ and the standard deviation vector $S$:
$$b = S \times X \times S$$
[PAGE 6].

**4. Cholesky Decomposition (Factorization):**
For a Hermitian, positive-definite matrix $A$, the decomposition is:
$$A = C_A C_A^*$$
where $C_A$ is a lower triangular matrix with strictly positive diagonal entries, and $C_A^*$ is the conjugate transpose [PAGE 6].

**5. Correlated Sample Generation:**
Correlated random variables $W$ are produced by the dot product:
$$W = C_A \times v$$
where $v$ is an uncorrelated normally distributed vector of random variables [PAGE 6].

**Breakdown Regimes & Units:**
- **Units:** The outputs are measured in fantasy points (dimensionless score units derived from game statistics) and z-scores (standard deviations from the mean).
- **Singularity/Breakdown:** The decomposition fails if $A$ is not positive-definite. The model's efficacy is sensitive to the accuracy of $\mu_d$ and $S_d$; as noted, "The better the projections are, the better the lineups will perform" [PAGE 5].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage of Sharpstack traces back to the mid-20th-century development of Monte Carlo methods and André-Louis Cholesky's work on matrix factorization. The methodology represents a transition from **Deterministic Optimization** (solving the knapsack problem via linear programming) to **Stochastic Portfolio Optimization** (treating player lineups as a portfolio of correlated assets).

Historically, DFS optimization relied on "rigid stacking constraints" [PAGE 3], a manual approach that attempted to approximate correlation through Boolean rules (e.g., "If QB, then WR"). This created a "steep learning curve" [PAGE 3] and lacked the fluidity to capture nuanced relationships, such as the +19% correlation between a specific running back and his team's defense [PAGE 4]. 

The multi-week trap in this lineage is the "mean-maximization trap." Early researchers focused on maximizing the average score, which is optimal for head-to-head contests but catastrophic in large-field tournaments. Sharpstack breaks this lineage by optimizing for the **distribution of outcomes** rather than the **expected value**. By utilizing the "Race" mechanism [PAGE 8], the system recognizes that a lineup with a lower mean $\mu$ but a higher variance $\sigma^2$ is mathematically superior in GPP contexts, a realization validated by the comparison of Sharpstack's 40.6% ROI against the Knapsack's 25.2% ROI [PAGE 11].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive complexity of Sharpstack lies in the interaction between the **Optimizer's Intent** and the **Tournament's Architecture**. 

1. **The Optimizer's Level 0:** Solves for $\max(\sum E[points])$. This is the "Classic Linear Optimizer" [PAGE 2]. It views players as independent variables under a budget constraint.
2. **The Optimizer's Level 1 (Sharpstack):** Solves for $\max(P(\text{Score} > \text{Threshold}))$. It understands that players are not independent; it models the "smart randomness" [PAGE 3] required to simulate the covariance of a real-world game.
3. **The Tournament Level (The Counter-Trap):** The tournament structure (GPP) rewards the "outlier." The human user often falls into "crisis habit regression," attempting to build stacks manually, which is "cumbersome and time consuming" [PAGE 3].

The Sharpstack "Race" [PAGE 8] acts as a recursive feedback loop. By running "candidate" lineups back through the original 10,000 simulations, the system performs a meta-analysis of its own optimization. It asks: "Of the lineups that were optimal in individual slices of reality, which ones are robust across the entire probability space?" This bypasses the human tendency to over-index on a single high-projection player and instead favors the "highly correlated" clusters that drive tournament-winning scores [PAGE 9].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
**Veto 1: The Gaussian-Only Veto.**
A proposal to use pure Multivariate Normal distributions for scoring is **VETOED**. The research confirms that "Fantasy points roughly follow a Gamma distribution" [PAGE 5] to ensure "nonzero, right-tail skewed" [PAGE 7] outcomes. A pure Gaussian model would allow for negative scores and fail to capture the "ceiling" required for GPP wins.

**Veto 2: The Manual Constraint Veto.**
The use of manual stacking rules (e.g., "always pair QB with WR") is **VETOED**. The paper demonstrates that these are "extremely arbitrary and time consuming" [PAGE 2] and cannot be "dynamic enough to capture all of the possible correlations" [PAGE 3]. The Sharpstack Cholesky approach is the superior adjudication of player relationships.

**Veto 3: The Mean-Centric Veto.**
The strategy of maximizing the mean score $\mu$ for tournament play is **VETOED**. The backtesting data shows that while the Knapsack method has a higher mean z-score (0.276), Sharpstack captures a higher percentage of the 95th and 98th percentiles [PAGE 10]. For GPPs, the objective must be variance-driven, not mean-driven.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
**Scenario 1: The Identity Correlation Matrix ($X = I$).**
*If the correlation matrix were forced to the Identity matrix (all off-diagonal elements = 0):*
**Prediction:** The Sharpstack simulation would collapse into the performance profile of the "Classical Linear Optimizer." The "Race" would yield no advantage, as no player combinations would benefit from shared variance. The ROI would drop from 40.6% toward the Knapsack's 25.2% [PAGE 11].

**Scenario 2: The Singular Covariance Matrix (Rank Deficiency).**
*If two players are perfectly correlated ($r = 1.0$), causing the covariance matrix $b$ to be singular:*
**Prediction:** The Cholesky decomposition $A = C_A C_A^*$ would encounter a breakdown regime where $C_A$ cannot be computed with strictly positive diagonal entries. The simulation engine would fail to generate the $W$ vector, effectively vetoing the entire lineup generation process.

**Scenario 3: The Zero-Variance Projection ($S = 0$).**
*If player standard deviations are set to zero (deterministic projections):*
**Prediction:** The entire stochastic "Race" becomes moot. Every simulation would yield the exact same "optimal" lineup. The z-score distribution would collapse to a single point, and the distinction between "high ceiling" and "high floor" lineups would vanish, rendering the Sharpstack methodology redundant compared to simple linear programming.
</RLVR_COUNTERFACTUAL_VETOES>