---
source: "2019 - Efficient Estimation of Distribution-free dynamics in the Bradley-Terry Model - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/Carnegie Mellon Sports Analytics Conference/2019"
pages: 13
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5363
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper: "Efficient Estimation of Distribution-free dynamics in the Bradley-Terry Model" by Bong, Li, and Shrotriya from Carnegie Mellon University (NeurIPS 2019 / CMSAC 2020).

The paper is about a time-varying (dynamic) Bradley-Terry model using convex optimization with various penalty norms (ℓ1, ℓ2, ℓ2²) for smoothing temporal dynamics in pairwise comparison data, applied to NFL rankings.

I need to produce a response with specific XML sections:
1. <THINK_TRACE> - Deep multi-hop derivation & gray-zone audit (>=400 words)
2. <SOURCE_OPERATORS_AND_EQUATIONS> - Formal LaTeX, units, page citations, breakdown
3. <RETROCAUSAL_GENEALOGY> - Historical/scientific lineage & multi-week traps
4. <RECURSIVE_THEORY_OF_MIND> - Crisis habit regression vs counter-trap vs clock
5. <CROSS_LAYER_VETO_ADJUDICATION> - Physical/biomechanical/weather veto proof
6. <RLVR_COUNTERFACTUAL_VETOES> - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: No spreads, totals, moneylines, odds.
- ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
- >= 1,000-word depth across sections.

Let me carefully extract content from the provided text.

Key content from pages:
- Page 1: Title, authors, abstract. Time-varying convex generalization of Bradley-Terry. Temporal dependence without explicit distribution assumptions. Discrete-time dynamic global rankings of N objects. Convex penalization controls smoothing. Sparse data. Weak necessary/sufficient condition for existence/uniqueness. Algorithms for ℓ2², ℓ2, ℓ1 norms. Tested on simulated and real NFL data (5 seasons).
- Page 2: Original Bradley-Terry model. P(i beats j) = s_i / (s_i + s_j). Parameterize s_i = exp(β_i). logit(P) = β_i - β_j. Independence assumption. Time-varying extension: logit(P(i beats j at time t)) = β(t)_i - β(t)_j. Equation (2).
- Page 3: Model formulation. Equation (3): min -sum ℓ_t(β(t)) + λ sum h(β(t+1)-β(t)), s.t. sum β(1)_i = 0. λ ≥ 0. Penalty functions: ∥·∥1, ∥·∥2, ∥·∥2². T=1, λ=0 reduces to static BT. Constraint ensures uniqueness and invariance to constant shifts.
- Page 3-4: Existence/uniqueness. Ford Jr. [8] 1957 conditions. Condition (1): every partition into two nonempty subsets, some object in second set preferred at least once to some in first. Condition (2): for each ordered pair (i,j), sequence i0=i,...,in=j such that x_{i_{k-1},i_k} > 0. Theorem 3.1: aggregated conditions over all time. If h continuous and h(x)→∞ as x→∞, solution attainable. With squared-ℓ2 penalty, uniqueness of solution classes. Weak data requirement: doesn't need conditions at each time point, just aggregated.
- Page 4: Optimization. Objective f(β) = g(β) + H(β). g = negative log-likelihood. H = convex penalty. PGD for ℓ2². ADMM for ℓ1 and ℓ2. Equation (5), (6). Equation (7) proximal operator. Equation (8) decomposition. Equation (9) linear system tri-diagonal O(n).
- Page 5: Newton's method vs PGD. ADMM details. Equation (10), (11).
- Page 6: Tuning λ. Heuristic approach with maximal ranking change α ∈ [N]. Data-driven: LOOCV. Sample splitting. Equation for LOOCV adapted.
- Page 7: Figure 1 description. Different penalties: ℓ2² smoothest, ℓ1 piecewise constant. Figure 2: LOOCV curve λ*=4.25.
- Page 8: NFL application. 5 seasons 2011-2015. N=32 teams, T=16 games each season. Sparse pairwise matrix (16 entries per time). Compared with NFL ELO ratings. Table 1 top 10 rankings. Average ranking difference. ELO uses location info too.
- Page 9: Table 1 (rankings 2011-2015). Conclusion.
- Page 10: References.
- Page 11: Appendix proof. Theorem proof. Hessian elements equations (14), (15), (16), (17). Graph Laplacian argument. Uniqueness up to constant shifts.
- Page 12: Existence proof. Equation (18) non-negative log-likelihood. Equation (19) upper bound. Equation (20) bound on dispersion. Equation (21). Condition (2) and constraint ensures boundedness.
- Page 13: Appendix continued. Oracle inequality, consistency in ranking, consistency in rank change detection.

Now I need to structure the response.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Derive from static BT to dynamic BT.
- The logit link: β(t)_i - β(t)_j.
- Convex optimization with temporal smoothing penalty.
- The identifiability constraint sum β(1)_i = 0.
- Existence/uniqueness via Ford's conditions aggregated over time.
- Hessian structure: graph Laplacian, zero column sums, positive diagonal.
- Sparse data implication: 32 teams, 16 games/week means only 16 pairwise observations per t out of C(32,2)=496 possible pairs. Extremely sparse. Aggregated condition saves identifiability.
- Gray zones: LOOCV computational cost O(N_comparisons * grid * optimization). The heuristic α trades λ subjectivity for α subjectivity. The ℓ1 penalty yields piecewise constant paths (trend filtering-like), ℓ2² yields smooth paths. Boundary regimes: λ→0 recovers static per-time or unstable Newton; λ→∞ collapses all β(t) equal. The paper doesn't address injury, home-field advantage, margin of victory, or weather—purely win/loss binary outcomes.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
- Equation (1): P(i beats j) = s_i/(s_i+s_j), s_i = exp(β_i), logit = β_i - β_j. [PAGE 2]
- Equation (2): logit(P(i beats j at t)) = β(t)_i - β(t)_j. [PAGE 2]
- Equation (3): min -Σℓ_t + λΣh(β(t+1)-β(t)) s.t. Σβ(1)_i = 0. [PAGE 3]
- Equation (4): Ford condition path x_{i_{k-1},i_k} > 0. [PAGE 3]
- Theorem 3.1 conditions. [PAGE 3-4]
- Equation (5)-(6): f = g + H. [PAGE 4]
- Equation (7)-(9): proximal operator, tri-diagonal system. [PAGE 4]
- Equation (10)-(11): ADMM formulation. [PAGE 5]
- Equation (14)-(17): Hessian elements, graph Laplacian. [PAGE 11]
- Equation (18)-(24): existence proof bounds. [PAGE 12]
- Units: β is log-odds (dimensionless, log-probability ratio). λ is dimensionless penalty weight but scales with log-likelihood units (nats). h has units of squared log-odds for ℓ2², absolute log-odds for ℓ1/ℓ2.
- Breakdown/singularity: Ford's condition fails if comparison graph disconnected (isolated teams, or teams that never win/lose). λ=0 with T>1 and sparse per-time data causes non-existence per time point. Aggregated condition required.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Zermelo 1929 [19], Bradley-Terry 1952 [3], Ford Jr. 1957 [8] necessary/sufficient uniqueness.
- State-space dynamic BT [7] Fahrmeir & Tutz 1994, Bayesian [9] Glickman 2012, Cattelan et al. 2012 [5].
- This paper: frequentist, distribution-free, convex penalization instead of state-space or Bayesian priors.
- Multi-week traps: In NFL, T=16 weekly games. If you fit static BT per week, Ford's condition likely fails weekly due to sparse schedule (not all pairs play, bye weeks, etc.). The paper's aggregated condition avoids per-week identifiability collapse but introduces temporal smoothing bias: a team's early-season performance bleeds into late-season rankings. The "clock" is the penalty λ controlling how fast rankings can adapt. Multi-week trap: over-smoothing (high λ) hides true regime shifts (injuries, coaching changes); under-smoothing (low λ) overfits noise in sparse binary outcomes.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- This is more abstract. I need to interpret "crisis habit regression" as teams reverting to mean under pressure? Or the model regressing to static BT under crisis (sparse data)?
- Counter-trap: The heuristic α vs λ subjectivity trade. The user thinks they control rank stability via α, but α is just a reparameterization of λ subjectivity.
- Clock: T discrete time points, t∈[T]. The smoothing penalty couples adjacent time steps. The recursive nature: estimate at t depends on t-1 and t+1 via the penalty (especially ℓ2² which is a second-difference-like smoother? Actually it's first difference squared, so random walk prior equivalent).
- Crisis habit regression: When data is sparse (crisis), the model relies on aggregated Ford condition and borrows strength across time, effectively regressing toward the temporal mean/path. Counter-trap: If a team has a sudden change (crisis week), high λ delays detection; low λ creates false positives from noise.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- The model uses only win/loss binary outcomes. No physical layers (player biomechanics, weather, venue, travel, injuries). ELO uses location; this BT model does not [PAGE 8].
- Veto: Any factor not encoded in pairwise win/loss is excluded by design. The model assumes exchangeability of comparisons conditional on β(t). Weather/injuries violate conditional independence if they systematically affect outcomes but are not in the model.
- Physical layer veto: The model cannot account for home-field advantage (unless explicitly modeled as separate parameter, which it isn't). Biomechanical fatigue across a 16-game season is ignored. Weather is ignored.
- Breakdown regime: If win/loss outcomes are confounded by unobserved covariates (e.g., dome vs outdoor, travel distance), β(t) estimates are biased. The paper acknowledges ELO uses location info and their model doesn't [PAGE 8].

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some verification framework. I need to create 3 counterfactual veto scenarios that are verifiable.
- Scenario 1: Disconnected comparison graph in a single week (e.g., bye week or isolated division). Veto: model fails per-week but succeeds aggregated. Prediction: With λ finite and aggregated condition met, solution exists; per-week static BT yields infinite β for winless/lossless teams.
- Scenario 2: λ→∞. Veto: All β(t) collapse to common value; rankings become static average. Prediction: rankings identical across all T, win-rate prediction nll increases if true dynamics exist.
- Scenario 3: Sudden regime shift (e.g., star QB injured week 8). Veto: High λ smooths over the shift; low λ detects it but with high variance. Prediction: ℓ1 penalty (piecewise constant) better captures abrupt shifts than ℓ2² (smooth), but ℓ1 may overfit sparse binary noise.

I need to ensure >=1000 words total. Let me draft carefully.

Also need to avoid betting lines. No spreads, totals, moneylines, odds. I can mention win probabilities, rankings, win rates, but not betting odds. The word "odds" appears in the paper (log-odds). I should avoid using "odds" in betting context. Log-odds is statistical, should be fine but I'll be careful.

Let me write the sections.

THINK_TRACE: I'll write a thorough derivation. Start from static BT, extend to dynamic, discuss the convex penalty, the constraint, identifiability, optimization algorithms, and the NFL application. Audit gray zones: sparsity, λ tuning subjectivity, penalty norm choice, missing covariates, computational cost of LOOCV. I'll aim for ~500-600 words here.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX blocks with page citations. List equations, units, assumptions, breakdown regimes. ~300-400 words.

RETROCAUSAL_GENEALOGY: Lineage from Zermelo to BT to Ford to dynamic extensions. Multi-week traps in NFL scheduling. ~250-300 words.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression (borrowing strength across time under sparsity), counter-trap (α heuristic vs λ), clock (discrete time coupling). ~250 words.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather exclusions. ELO comparison. Veto conditions. ~250 words.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios with predictions. ~250 words.

Total should exceed 1000 words.

Let me make sure I cite exact page markers [PAGE N] and use verbatim quotes where appropriate.

I need to be careful about the word "odds". The constraint says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." It says "odds" generally. However, the paper itself uses "logit" and "log-odds". To be safe, I will avoid the word "odds" entirely and use "logit" or "log-probability ratio" or "win probability". I will not mention betting odds.

Let's draft.

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

I will write in a formal, analytical tone.

Let me check word counts mentally as I write.

THINK_TRACE:
The static Bradley-Terry model assigns each object i a positive score s_i such that P(i beats j) = s_i/(s_i+s_j). By setting s_i = exp(β_i), the win probability becomes a logistic function of the score difference: logit(P(i beats j)) = β_i - β_j [PAGE 2]. The model assumes independent Bernoulli comparisons and requires the comparison graph to satisfy Ford's necessary and sufficient condition for uniqueness [PAGE 3].

The dynamic generalization promotes β to a time-indexed vector β(t) ∈ R^N for t ∈ [T], with logit(P(i beats j at t)) = β(t)_i - β(t)_j [PAGE 2, Equation (2)]. Rather than imposing a state-space or Bayesian prior on temporal evolution, the authors formulate a convex optimization problem that penalizes successive differences:

min_{ {β(t)} } -Σ_{t=1}^T ℓ_t(β(t)) + λ Σ_{t=1}^{T-1} h(β(t+1) - β(t)), subject to Σ_i β(1)_i = 0 [PAGE 3, Equation (3)].

The constraint anchors the gauge freedom inherent in Bradley-Terry scores (adding a constant to all β leaves win probabilities unchanged) and guarantees existence and uniqueness. The penalty h ∈ {∥·∥₁, ∥·∥₂, ∥·∥₂²} controls smoothing: ℓ₂² yields the smoothest paths, ℓ₁ imposes piecewise-constant structure [PAGE 7, Figure 1 discussion].

Gray-zone audit. The NFL application uses N=32 teams and T=16 weekly games per season. At each t, only 16 pairwise comparisons are observed out of C(32,2)=496 possible pairs, so the per-week comparison graph is extremely sparse [PAGE 8]. Ford's condition almost certainly fails within any single week, meaning a static Bradley-Terry fit per week would not have a unique finite solution (teams with no wins or no losses drift to ±∞) [PAGE 3]. The paper's key theoretical contribution is Theorem 3.1: it is sufficient that the aggregated comparison counts x_{i,j} = Σ_t x(t)_{i,j} satisfy Ford's connectedness condition over the full horizon, not at every t [PAGE 3-4]. This borrows strength across time but introduces a temporal bias: early-season performance influences late-season estimates through the penalty coupling. The penalty parameter λ acts as a clock-speed regulator; as λ → 0 the model decouples into unstable per-week fits, while as λ → ∞ all β(t) collapse to a common static vector, erasing genuine regime shifts such as mid-season injuries or coaching changes. LOOCV tuning of λ is recommended but computationally heavy: each candidate λ requires solving the convex program on nearly every held-out comparison [PAGE 6]. The heuristic alternative substitutes an integer α (maximum allowed rank change) for λ, merely relocating subjectivity from the penalty weight to the user-specified rank-stability target [PAGE 6].

Optimization details: For h = ∥·∥₂², the proximal operator reduces to solving a sparse tri-diagonal linear system per team in O(T) operations [PAGE 4, Equation (9)]. For ℓ₁ and ℓ₂, ADMM is required because no closed-form proximal operator exists [PAGE 4-5]. Newton's method is faster for moderate λ but unstable near λ ≈ 0 [PAGE 5].

Breakdown regimes: (i) If the aggregated comparison graph is disconnected (e.g., a team never plays anyone, or a subset never loses to the complement), the Hessian has a nontrivial nullspace beyond the constant-shift gauge and the solution is non-unique [PAGE 3, Theorem 3.1; PAGE 11, graph Laplacian argument]. (ii) If λ = 0 and T > 1 with sparse per-week data, per-time-point likelihoods are unbounded and no finite maximizer exists [PAGE 3]. (iii) If the win/loss outcomes are confounded by unobserved covariates (venue, weather, injuries), the conditional independence assumption is violated and β(t) estimates are biased [PAGE 2, independence assumption; PAGE 8, ELO uses location while BT does not].

This section is probably around 500 words. Good.

SOURCE_OPERATORS_AND_EQUATIONS:
I'll list formal equations with citations.

Equation (1) static BT: [PAGE 2]
Equation (2) dynamic BT: [PAGE 2]
Equation (3) optimization: [PAGE 3]
Equation (4) Ford path condition: [PAGE 3]
Theorem 3.1: [PAGE 3-4]
Equation (5)-(6) objective decomposition: [PAGE 4]
Equation (7)-(9) PGD proximal: [PAGE 4]
Equation (10)-(11) ADMM: [PAGE 5]
Equation (14)-(17) Hessian: [PAGE 11]
Equation (18)-(24) existence bounds: [PAGE 12]

Units: β is dimensionless log-probability ratio (logit scale). λ has units of negative log-likelihood per unit penalty (nats per squared log-ratio for ℓ₂², nats per absolute log-ratio for ℓ₁/ℓ₂). h output units match penalty. x(t)_{i,j} are counts (dimensionless integers).

Breakdown/singularity: Ford condition failure; λ=0 sparse; disconnected graph.

RETROCAUSAL_GENEALOGY:
Zermelo 1929 [19], Bradley-Terry 1952 [3], Ford 1957 [8]. Dynamic extensions: state-space [7] Fahrmeir & Tutz 1994, Bayesian [9] Glickman 2012, Cattelan et al. 2012 [5]. This paper: frequentist, distribution-free, convex penalization. Multi-week traps: NFL schedule sparsity, bye weeks, aggregated condition hiding within-season non-stationarity, λ as adaptation clock.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under data scarcity (crisis), the estimator regresses toward the temporally smoothed path because the penalty dominates the weak per-week likelihood. Counter-trap: the α heuristic pretends to remove λ subjectivity but merely trades a continuous regularization weight for an integer rank-stability constraint; the user still must choose α based on domain beliefs about how fast rankings "should" move. Clock: discrete t ∈ [T] with first-difference coupling means information flows bidirectionally in time (smoothing uses future and past), creating look-ahead bias if used for prospective ranking.

CROSS_LAYER_VETO_ADJUDICATION:
The model conditions only on pairwise win/loss identities and time stamps. It excludes venue (home/away), weather, travel, injuries, margin of victory, and player-level biomechanics [PAGE 8, ELO uses location while BT model "simply relies on the minimalist time-varying score information"]. Veto proof: any systematic effect of an unobserved covariate on win probability violates the assumed conditional independence of comparisons given β(t) [PAGE 2]. Physical layer: no kinetic or physiological state variables. Biomechanical layer: fatigue accumulation across a 16-game season is not represented. Weather layer: no atmospheric covariates. If such factors correlate with team quality or scheduling, the estimated β(t) absorbs their effect and misattributes it to team strength. Example: teams playing in domes may have different win patterns unrelated to latent strength; the model cannot disentangle this.

RLVR_COUNTERFACTUAL_VETOES:
1. Disconnected weekly graph veto: Suppose in week k, team A is on bye and no team in subset S plays any team outside S. Per-week static BT fails (infinite scores). Dynamic model with aggregated Ford condition satisfied across season still yields finite solution. Prediction: estimated β(k)_i for bye week remains well-identified via neighbors in adjacent weeks; per-week fit produces non-unique ±∞ estimates.
2. λ → ∞ veto: Set λ larger than the maximum likelihood gradient magnitude. All pairwise differences β(t+1)-β(t) are driven to zero. Prediction: rankings collapse to time-invariant vector; win-rate LOOCV nll rises relative to optimal λ*=4.25 found for NFL ℓ₂² data [PAGE 7, Figure 2].
3. Abrupt regime shift veto: Introduce an exogenous shock at week 8 (e.g., starting quarterback removed) that halves team i's win probability against all opponents. With ℓ₂² penalty and high λ, the estimate lags the shift by several weeks because squared differences penalize rapid changes quadratically. With ℓ₁ penalty, the path is piecewise constant and can jump, but sparse binomial noise may create spurious jumps. Prediction: ℓ₁ detects the level shift faster than ℓ₂² but with higher false-positive rate in weeks with few games; mean-squared error of β(t) is minimized by an intermediate λ selected by LOOCV.

I need to ensure total words >= 1000. Let me estimate:
THINK_TRACE: ~550
SOURCE_OPERATORS: ~350
RETROCAUSAL: ~250
RECURSIVE: ~250
CROSS_LAYER: ~250
RLVR: ~250
Total ~1900. Good.

I need to avoid saying "odds". I'll check. In THINK_TRACE I used "log-probability ratio". Good.

Also avoid "moneylines", "spreads", "totals". None used.

Cite verbatim quotes. I can include a few:
- "minimalist time-varying score information" [PAGE 8]
- "smoothing property of our model" [PAGE 7]
- "piecewise constant structure on the paths of β" [PAGE 7]
- "distribution-free frequentist manner" [PAGE 8]

Let me write the final output carefully with all XML sections exactly as named.

One concern: The user says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I have page markers. I will include some verbatim quotes.

Let me write it now.
</NATIVE_REASONING>

<THINK_TRACE>
The static Bradley-Terry model assigns each object i a positive score s_i such that P(i beats j) = s_i / (s_i + s_j). By parameterizing s_i = exp(β_i), the win probability becomes a logistic function of the score difference: logit(P(i beats j)) = β_i − β_j [PAGE 2, Equation (1)]. The model assumes independent Bernoulli comparisons and requires the comparison graph to satisfy Ford’s necessary and sufficient condition for uniqueness of the maximum-likelihood estimate [PAGE 3, citing Ford Jr. [8]].

The dynamic generalization promotes β to a time-indexed vector β(t) ∈ R^N for t ∈ [T], with logit(P(i beats j at time t)) = β(t)_i − β(t)_j [PAGE 2, Equation (2)]. Rather than imposing a state-space or Bayesian prior on temporal evolution, the authors formulate a convex optimization problem that penalizes successive differences:

min_{{β(t)}} − Σ_{t=1}^T ℓ_t(β(t)) + λ Σ_{t=1}^{T−1} h(β(t+1) − β(t)), subject to Σ_{i=1}^N β(1)_i = 0 [PAGE 3, Equation (3)].

The constraint anchors the gauge freedom inherent in Bradley-Terry scores (adding a constant to all β leaves win probabilities unchanged) and guarantees existence and uniqueness. The penalty h ∈ {∥·∥₁, ∥·∥₂, ∥·∥₂²} controls smoothing: ℓ₂² yields the smoothest paths, while ℓ₁ imposes a piecewise-constant structure on the paths of β [PAGE 7, Figure 1 discussion].

Gray-zone audit. The NFL application uses N = 32 teams and T = 16 weekly games per season. At each t, only 16 pairwise comparisons are observed out of C(32,2) = 496 possible pairs, so the per-week comparison graph is extremely sparse [PAGE 8]. Ford’s condition almost certainly fails within any single week, meaning a static Bradley-Terry fit per week would not have a unique finite solution (teams with no wins or no losses drift to ±∞) [PAGE 3]. The paper’s key theoretical contribution is Theorem 3.1: it is sufficient that the aggregated comparison counts x_{i,j} = Σ_t x(t)_{i,j} satisfy Ford’s connectedness condition over the full horizon, not at every t [PAGE 3–4]. This borrows strength across time but introduces a temporal bias: early-season performance influences late-season estimates through the penalty coupling. The penalty parameter λ acts as a clock-speed regulator; as λ → 0 the model decouples into unstable per-week fits, while as λ → ∞ all β(t) collapse to a common static vector, erasing genuine regime shifts such as mid-season injuries or coaching changes. LOOCV tuning of λ is recommended but computationally heavy: each candidate λ requires solving the convex program on nearly every held-out comparison [PAGE 6]. The heuristic alternative substitutes an integer α (maximum allowed rank change) for λ, merely relocating subjectivity from the penalty weight to the user-specified rank-stability target [PAGE 6].

Optimization details: For h = ∥·∥₂², the proximal operator reduces to solving a sparse tri-diagonal linear system per team in O(T) operations [PAGE 4, Equation (9)]. For ℓ₁ and ℓ₂, ADMM is required because no closed-form proximal operator exists [PAGE 4–5]. Newton’s method is faster for moderate λ but numerically unstable near λ ≈ 0 [PAGE 5].

Breakdown regimes: (i) If the aggregated comparison graph is disconnected (e.g., a team never plays anyone, or a subset never loses to the complement), the Hessian has a nontrivial nullspace beyond the constant-shift gauge and the solution is non-unique [PAGE 3, Theorem 3.1; PAGE 11, graph-Laplacian argument]. (ii) If λ = 0 and T > 1 with sparse per-week data, per-time-point likelihoods are unbounded and no finite maximizer exists [PAGE 3]. (iii) If win/loss outcomes are confounded by unobserved covariates (venue, weather, injuries), the conditional-independence assumption is violated and β(t) estimates are biased [PAGE 2, independence assumption; PAGE 8, ELO uses location while BT does not].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations extracted verbatim with page citations.

[PAGE 2, Equation (1)] Static Bradley-Terry:
P(i beats j) = s_i / (s_i + s_j), s_i = exp(β_i), logit(P(i beats j)) = β_i − β_j.
Units: β is dimensionless log-probability ratio (logit scale). No betting odds are implied; this is a statistical link function only.

[PAGE 2, Equation (2)] Time-varying Bradley-Terry:
logit(P(i beats j at time t)) = β(t)_i − β(t)_j.
Assumption: comparisons at each t are conditionally independent given β(t).

[PAGE 3, Equation (3)] Convex dynamic estimation problem:
min_{{β(t)}t∈[T]} − Σ_{t=1}^T ℓ_t(β(t)) + λ Σ_{t=1}^{T−1} h(β(t+1) − β(t)), s.t. Σ_{i=1}^N β(1)_i = 0.
Parameters: λ ≥ 0 regularizes temporal smoothness; h : R^N → R_{≥0} is convex.

[PAGE 3, Equation (4)] Ford path condition:
For each ordered pair (i, j), ∃ sequence i_0 = i, i_1, …, i_n = j such that x_{i_{k−1}, i_k} > 0 for k = 1, …, n.
Units: x are nonnegative integer comparison counts.

[PAGE 3–4, Theorem 3.1] Existence/uniqueness:
1. If h is continuous and h(x) → ∞ as x → ∞, solution β⋆ is attainable in R^{N×T}.
2. With h = ∥·∥₂², uniqueness of solution classes holds (up to the gauge constraint).
Requirement: aggregated counts x_{i,j} = Σ_t x(t)_{i,j} satisfy Ford’s condition over [T]; per-time-point satisfaction is NOT required.

[PAGE 4, Equations (5)–(6)] Objective decomposition:
f(β) = g(β) + H(β), where g(β) = −Σ_t ℓ_t(β(t)) (negative log-likelihood), H(β) = λ Σ_t h(β(t) − β(t+1)).

[PAGE 4, Equations (7)–(9)] PGD proximal operator for ℓ₂²:
prox_{s,H}(β′) = arg max_β { (1/2s)∥β − β′∥₂² + λ Σ_t ∥β(t+1) − β(t)∥₂² }.
Decomposes per team i into tri-diagonal linear system (9) solvable in O(T).

[PAGE 5, Equations (10)–(11)] ADMM for ℓ₁ and ℓ₂:
minimize −ℓ_T(β) + λ h̃(θ), subject to Aβ = θ.
ADMM updates alternate over β (Newton-type) and θ (proximal of penalty). No closed-form prox for ℓ₁/ℓ₂.

[PAGE 11, Equations (14)–(17)] Hessian elements for uniqueness proof:
∇²_{β(t)_i} L_t = Σ_{i≠j} (x(t)_{ij} + x(t)_{ji}) · [exp β(t)_i exp β(t)_j] / [exp β(t)_i + exp β(t)_j]².
Cross-partial ∇_{β(t)_j} ∇_{β(t)_i} L_t = −(x(t)_{ij} + x(t)_{ji}) · [same fraction].
The Hessian has zero column sums and positive diagonal; under Ford’s condition it is a graph Laplacian of a connected graph, so vᵀHv = Σ_{i<j} |X_{ij}|(v_i − v_j)² ≥ 0 with equality iff v = c·1.

[PAGE 12, Equations (18)–(24)] Existence bounds:
−ℓ_t(β_t) ≥ 0 [Equation (18)].
f⋆ ≤ (log 2) Σ_t Σ_{i≠j} x(t)_{ij} [Equation (19)].
∥β(t) − β(t+1)∥∞ ≤ sqrt( (1/λ)(log 2) Σ_{i≠j} x(t)_{ij} ) = B [Equation (20)].
∥β(t) − β̄∥∞ ≤ BT [Equation (21)].
Breakdown/singularity: if Π_t x(t)_{ij} = 0 for some ordered pair and Ford’s path condition fails, β_j − β_i is unbounded and the level set is not compact [PAGE 12].

Tuning: heuristic α ∈ [N] caps maximal rank change; data-driven LOOCV selects λ* minimizing average negative log-likelihood over held-out pairwise comparisons [PAGE 6]. For NFL ℓ₂², LOOCV yielded λ* = 4.25 [PAGE 7, Figure 2].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage runs from Zermelo’s 1929 tournament-result formulation [PAGE 1, citing [19]], through Bradley and Terry’s 1952 paired-comparison model [PAGE 1, citing [3]], to Ford Jr.’s 1957 necessary-and-sufficient uniqueness conditions [PAGE 3, citing [8]]. Modern dynamic extensions include state-space Bradley-Terry models for sports tournaments [PAGE 2, citing [7], Fahrmeir & Tutz 1994], Bayesian time-varying frameworks [PAGE 2, citing [9], Glickman 2012], and frequentist dynamic modeling such as Cattelan, Varin, and Firth [PAGE 2, citing [5]]. This paper departs from those by adopting a purely frequentist, distribution-free approach: it replaces stochastic transition densities or prior distributions with a convex temporal-penalty term, requiring only the aggregated Ford condition across all T periods rather than per-period identifiability [PAGE 3–4].

Multi-week traps specific to the NFL setting: each team plays only T = 16 games per season against 16 of 31 possible opponents [PAGE 8], so the weekly comparison graph is a sparse random subgraph of K₃₂. A naive recursive estimator that refits Bradley-Terry independently each week would encounter the “winless team” or “lossless team” singularity described by Ford: a team that has not yet lost (or won) by week k drives its β(t) toward ±∞, destroying the ranking [PAGE 3]. The paper’s temporal smoothing avoids this by borrowing evidence across adjacent weeks, but this creates a look-ahead trap: because the penalty couples β(t) to β(t−1) and β(t+1), the estimate at any week is contaminated by future outcomes. If the object is prospective ranking (e.g., predicting the next week from current information), the smoothed path is not causally filtered; it is a smoothed interpolation. The penalty norm selects the shape of this bias: ℓ₂² imposes a random-walk-like smoothness that penalizes acceleration of ranking changes, whereas ℓ₁ produces piecewise-constant plateaus that can mask a genuine mid-week regime shift until the evidence accumulates across multiple games [PAGE 7].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under data scarcity—the “crisis” of only 16 sparse pairwise observations per week for 32 teams—the likelihood term ℓ_t(β(t)) is weak relative to the penalty λΣh(Δβ). The estimator therefore regresses toward the temporally smooth path implied by neighboring weeks rather than trusting the current week’s sparse binary outcomes. In effect, a team’s early-season performance recursively informs its late-season rank, and vice versa, because the optimization is global over t ∈ [T] rather than a forward-only recursion.

Counter-trap: the heuristic tuning parameter α (maximum permissible rank change over all teams and all periods) appears to give the user direct control over ranking stability, but it is merely a reparameterization of λ subjectivity [PAGE 5–6]. Choosing α requires domain knowledge about how fast team rankings “should” move; if α is set too tight, the model suppresses genuine improvement or decline; if too loose, it admits week-to-week noise as signal. The user trades a continuous regularization weight for an integer stability budget without eliminating the underlying modeling judgment.

Clock: because the time index is discrete (t = 1, …, 16) and the penalty uses first differences β(t+1) − β(t), information propagates symmetrically in time. The model has no causal arrow; it estimates a smoothed field over the season. For a crisis such as a mid-season injury, the estimated β(t) will lag the true latent shift by an amount governed by λ and the penalty norm: ℓ₂² produces delayed, gradual adjustment; ℓ₁ permits abrupt jumps but risks spurious level changes from sparse Bernoulli noise [PAGE 7].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: the model conditions exclusively on pairwise win/loss identities and time stamps. It contains no variables for player biomechanics, collision load, snap counts, or physiological fatigue. The NFL application explicitly relies on “the minimalist time-varying score information” only [PAGE 8, conclusion]. Therefore any physical-layer effect that systematically alters win probability but is uncorrelated with the observed pair identity is omitted by design.

Biomechanical/weather veto: unlike NFL ELO, which “uses both the pairwise scores between teams … but also uses the location information of each game,” the Bradley-Terry specification here incorporates no home/away indicator, no weather covariate, no travel-distance term, and no margin-of-variance adjustment [PAGE 8]. If venue, weather, or accumulated fatigue correlates with team strength or schedule difficulty, the estimated β(t) absorbs their effect and misattributes it to intrinsic team power. The independence assumption at the core of the model [PAGE 2] is violated whenever an unobserved confounder influences multiple comparisons.

Veto proof: the Hessian graph-Laplacian argument [PAGE 11] guarantees identifiability only under Ford’s connectedness condition on the comparison graph; it makes no claim about causal sufficiency. The model is vetoed whenever win/loss outcomes are conditionally dependent given β(t) because of an omitted layer (weather, injuries, location). In the NFL context, this means the rankings should be interpreted as a benchmark for win/loss consistency, not as a complete physical account of team performance. ELO’s inclusion of location information produced systematically higher average ranks for the same teams relative to the Bradley-Terry model across all five seasons [PAGE 8, Table 1], consistent with an omitted-variable effect.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Disconnected weekly comparison graph: Suppose in week k a subset of teams S plays only within S (e.g., due to bye-week scheduling or conference isolation), so no team in S faces any team outside S in that week. A per-week static Bradley-Terry fit has no finite unique solution for teams in S that are undefeated or winless within S that week [PAGE 3]. Veto: the dynamic model still yields a finite solution provided the aggregated season-long comparison graph satisfies Ford’s condition [PAGE 3–4]. Prediction: estimated β(k)_i for teams in S remains bounded via smoothing from adjacent weeks, whereas an independent per-week fit returns ±∞ estimates and cannot rank those teams.

Veto Scenario 2 — Infinite-smoothing collapse (λ → ∞): Set λ larger than the maximum magnitude of the likelihood gradient across all comparisons. All successive differences β(t+1) − β(t) are driven to zero, collapsing the dynamic path to a static vector. Veto: any true within-season trend (improvement, decline, injury effect) is erased. Prediction: season-ending rankings become identical to a pooled static Bradley-Terry fit over all 16 weeks; LOOCV negative log-likelihood rises above the optimum found at λ* = 4.25 for the ℓ₂² NFL fit [PAGE 7, Figure 2], confirming over-smoothing.

Veto Scenario 3 — Abrupt mid-season regime shift: Introduce an exogenous shock at week 8 that halves team i’s win probability against every opponent (e.g., starting quarterback removal). With the ℓ₂² penalty, squared differences penalize rapid level changes quadratically, so the estimate lags the true shift by several weeks. With the ℓ₁ penalty, the path is piecewise constant and can jump, but sparse binomial outcomes (only 16 games per team per season) generate spurious jumps. Veto: neither norm is uniformly superior; the choice must be validated by LOOCV, not assumed. Prediction: ℓ₁ detects the level shift faster than ℓ₂² but exhibits a higher false-positive jump rate in weeks with few games; mean-squared error of β(t) is minimized at an intermediate λ selected by LOOCV rather than at the extremes λ = 0 or λ → ∞.
</RLVR_COUNTERFACTUAL_VETOES>