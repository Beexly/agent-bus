---
source: "openalex_W2359113307.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 30
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4484
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper: "Nonparametric hierarchical Bayesian quantiles" by Bornn, Shephard, and Solgi (2016). The document is 30 pages and covers Bayesian nonparametric quantile inference, hierarchical models, and an application to cricket batting statistics.

I need to follow strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to produce a deep analysis with all these sections. Let me plan:

**THINK_TRACE**: Deep multi-hop derivation of the Bayesian nonparametric quantile model, hierarchical extension, censoring mechanism, and cricket application. Audit gray zones: singularity when τ equals cumulative θ masses, zero-measure events, Dirichlet truncation, right-censoring with "not out" in cricket, isolated missingness in Gibbs sampling. Must be >=400 words.

**SOURCE_OPERATORS_AND_EQUATIONS**: Formal LaTeX equations from the paper:
- Check function: ρ_τ(e) = |e|{(1-τ)1(e<0) + τ1(e≥0)} [PAGE 2]
- Quantile definition: β = argmin_b E{ρ_τ(Z-b)} [PAGE 3]
- Ψ(b, θ) = E_θ{ρ_τ(Z-b)} = Σ θ_j ρ_τ(s_j - b) [PAGE 3]
- Proposition 1: uniqueness condition τ ∉ {θ_1, θ_1+θ_2, ..., θ_1+...+θ_{J-1}}, ∂β/∂θ' = 0 [PAGE 5]
- Hausdorff measure definition [PAGE 5]
- Posterior: p(θ|D) ∝ p(β=t(θ), θ) Π θ_j^{n_j} [PAGE 6]
- Proposition 3: Pr(β=s_k|D) = [c_k(α+n)/c_k(α)] Pr(β=s_k) / C(α,n) [PAGE 8]
- Proposition 4 limit as α↓0 [PAGE 10-11]
- Hierarchical model: f(θ|β) = Π f(θ(i)|β_i) [PAGE 12]
- Gibbs sampler Algorithm 1 [PAGE 12]
- Censoring: right-truncated data, U_i ≥ s_li [PAGE 19]
- Algorithm 2 with censoring [PAGE 19-20]
- CLT for empirical quantile: √n(b̂β_τ - β_τ) d→ N(0, τ(1-τ)/f_Z(β_τ)^2) [PAGE 8]

Need page citations.

**RETROCAUSAL_GENEALOGY**: Historical lineage from Jefferys (1961) substitute likelihood [PAGE 1], Koenker & Bassett (1978) check function [PAGE 2], Yu & Moyeed (2001) asymmetric Laplace [PAGE 2], Hjort & Petrone (2007) Dirichlet process quantiles [PAGE 2], Stein (1966) hierarchical models [PAGE 2], Robbins (1956) empirical Bayes [PAGE 3], Federer (1969) area formula/Hausdorff measure [PAGE 5/6], Rubin (1981) Bayesian bootstrap [PAGE 10]. Multi-week traps: non-unique quantile at zero-measure boundaries, Dirichlet α↓0 singularity, isolated missingness in Gibbs sampler causing high correlation [PAGE 27-28].

**RECURSIVE_THEORY_OF_MIND**: Crisis habit regression vs counter-trap vs clock. This is a bit abstract. I should interpret it as: the model's shrinkage behavior under data scarcity (crisis habit regression toward population mean π), counter-trap being over-reliance on small-sample empirical quantiles (e.g., Steele's sample median 43 shrunk to 18.8), and the clock being sample size n_i determining when hierarchy stops mattering. Need to discuss Bayesian posterior mean vs empirical median, credible intervals, and how small n_i causes aggressive shrinkage while large n_i lets data dominate.

**CROSS_LAYER_VETO_ADJUDICATION**: Physical/biomechanical/weather veto proof. In cricket context: weather causes matches to end early, leading to right-censoring ("not out"). At least 9% of data must be right-censored [PAGE 13]. Batsmen can bat up to twice per test, weather or match situation prevents batting [PAGE 13]. This is a physical/weather veto on observation completeness. Biomechanical: batsman's skill distribution, heavy-tailed scores, right-censoring mechanism depends on match state (team declaration, etc.). Need to argue that ignoring censoring biases medians downward (Table 2 vs Table 3), e.g., R.G.S. Willis median inflated from 4.1 to 8.5 [PAGE 22, Table 3].

**RLVR_COUNTERFACTUAL_VETOES**: 3 verifiable RLVR veto scenarios + predictions. RLVR likely means Reinforcement Learning from Verifiable Rewards? Or some counterfactual verification framework. I should define 3 scenarios where the model would be vetoed:
1. Zero-measure singularity: τ exactly equals cumulative θ mass → non-unique β, posterior improper without prior? Actually posterior is proper but quantile set is interval. Veto: if τ ∈ {partial sums}, the unique minimizer assumption fails.
2. Isolated missingness in censored Gibbs sampler: if s_li > max observed z, then θ_j / Σ θ_k ≈ 1, chain sticks, high autocorrelation, effective sample size collapses [PAGE 27-28].
3. Dirichlet α↓0 limit: improper prior behavior, c_k(α) → 1/J, posterior collapses to Jeffrey's substitution likelihood which is non-integrable without proper priors [PAGE 10-11].

Predictions: what happens under each veto.

Word count: Need >=1000 words total across sections. THINK_TRACE alone >=400. I'll aim for substantial length in each.

No betting lines: The paper is about cricket statistics, not betting. I must not mention odds, spreads, moneylines, totals. I can mention cricket performance, runs, innings, averages, but not betting markets.

Let me draft carefully.

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

I need to include exact page citations [PAGE N] and verbatim quotes where appropriate. Since I have the full text, I can quote.

Let's write.

THINK_TRACE (>=400 words):
- Start with the core problem: inference on τ-quantile β of scalar Z under iid data.
- Derivation: check function ρ_τ(e) = |e|[(1-τ)1(e<0) + τ1(e≥0)], convex, non-differentiable at 0 [PAGE 2].
- β = argmin_b E[ρ_τ(Z-b)]. Finite support S={s_1,...,s_J}, probabilities θ.
- Ψ(b,θ) = Σ θ_j ρ_τ(s_j - b). Convex, differentiable except at b∈S.
- Proposition 1: unique β iff τ not in cumulative sums of θ. Zero-measure set N. If θ continuous wrt Lebesgue, unique with prob 1, and ∂β/∂θ' = 0 [PAGE 5]. This last point is crucial: it means the map from θ to β is locally constant almost everywhere, so posterior on θ induces posterior on β via area formula.
- Hausdorff measure used to define density on lower-dimensional manifold Θ_{β,θ} where β=t(θ) [PAGE 5-6].
- Likelihood: Π θ_j^{n_j}. Posterior p(θ|D) ∝ p(β=t(θ),θ) Π θ_j^{n_j} [PAGE 6].
- Conditional prior p(θ|β=s_k) = f_Δ(θ)/c_k * 1_{A_k}(θ). c_k computed via Proposition 2 [PAGE 7].
- Dirichlet case: f_D(θ;α), c_k(α) via incomplete beta. Proposition 3 gives closed-form posterior odds: Pr(β=s_k|D) ∝ [c_k(α+n)/c_k(α)] b_k / C(α,n) [PAGE 8].
- Monte Carlo: simulated data from -log χ²_1. CLT benchmark √n(b̂β_τ - β_τ) → N(0, τ(1-τ)/f_Z(β_τ)²) [PAGE 8]. Results: Bayesian discrete estimator most reliable, bootstrap poor in small tails [PAGE 9-10].
- Hierarchical extension: I subpopulations, θ(i), β_i = t(θ(i)). Crucial assumption f(θ|β) = Π f(θ(i)|β_i): only quantiles shared [PAGE 12].
- Prior on β_i iid from π, π ~ Dirichlet(λ). Gibbs sampler alternates Pr(β|D,π) and f(π|β) [PAGE 12].
- Cricket: 300 English test players, runs are non-negative integers, heavy-tailed, right-censored "not out". At least 9% censored [PAGE 13]. Support S={0,...,350}, J=351.
- Dirichlet prior α_j = 4~α_j + 1/J with ~α_j ∝ e^{-0.03 s_j}; π ~ Dirichlet(λ), ~λ_j ∝ e^{-0.5((s_j-15)/15)²}, sum ~λ_j = 5 [PAGE 14].
- Shrinkage: small n_i borrow strength; large n_i approach empirical. Steele example: empirical median 43, Bayes 18.8 [PAGE 15-16]. Barrington: empirical 46, Bayes 31.0, credible [25,46] because gap 36-44 empty [PAGE 15-16].
- Censoring extension: right-truncated U_i ≥ s_li. Gibbs sampler augments with U. Algorithm 2 [PAGE 19-20].
- Isolated missingness trap: if s_li > max observed, then θ_j / Σ_{k=l_i}^J θ_k ≈ 1, chain sticks [PAGE 27-28]. This is a numerical breakdown regime.
- Table 3: censoring adjustment inflates Willis median from 4.1 (ignored) to 8.5 (censored) because not-outs are treated as potentially higher [PAGE 22].
- Table 4: rankings change by quantile level. Bolus high 0.3 quantile (consistency) but short career [PAGE 22-23].

Gray zones: (1) α↓0 limit leads to Jeffrey's substitution likelihood which is piecewise constant, non-integrable without proper prior; our posterior remains proper because β∈S [PAGE 10-11]. (2) Non-uniqueness at τ = cumulative sums is probability zero but computationally relevant at boundaries. (3) Truncated Dirichlet sampling exact algorithms in Appendix C [PAGE 28-29]. (4) CLT poor in tails even for large n (Table 1, τ=0.9, n=10 coverage 0.645) [PAGE 10].

This is well over 400 words.

SOURCE_OPERATORS_AND_EQUATIONS: List all formal equations with page cites. Include units: runs (dimensionless count), innings (count), τ ∈ (0,1) dimensionless probability, θ simplex, β in runs.

RETROCAUSAL_GENEALOGY: Jeffreys 1961, Koenker & Bassett 1978, Yu & Moyeed 2001, Hjort & Petrone 2007, Stein 1966, Lindley & Smith 1972, Robbins 1956, Federer 1969, Rubin 1981. Multi-week traps: small-sample tail CLT failure, isolated missingness, α↓0 singularity.

RECURSIVE_THEORY_OF_MIND: Interpret as Bayesian hierarchical shrinkage as "crisis habit regression" toward population quantile distribution π when local evidence is weak (small n_i). Counter-trap: analyst over-trusts empirical median of small n_i (e.g., Steele's 43 vs 18.8). Clock: n_i (sample size in innings) determines when posterior concentrates and hierarchy washes out. For Barrington n_i=131, posterior still wide [25,46] due to data gap, showing clock isn't just n_i but local support density. For Khan n_i=0, posterior = prior π exactly [PAGE 15]. Discuss credible intervals Q5/Q95 and how they widen with censoring.

CROSS_LAYER_VETO_ADJUDICATION: Physical/weather veto: cricket innings can be incomplete due to weather or match situation; at least 9% right-censored [PAGE 13]. This is an exogenous censoring mechanism not ignorable if informative. Biomechanical/performance layer: batsman's true scoring distribution is heavy-tailed and skewed; not-outs are more common for weaker batsmen left not out at end of innings [PAGE 20]. Veto proof: ignoring censoring (Table 2) vs modeling it (Table 3) changes posterior means substantially (Willis 4.1→8.5, Steele 18.8→19.4 modest). The censored model widens intervals (Willis Q5-Q95: 7-10 vs 4-5). Because censored observations are augmented with U_i > s_li, the posterior shifts upward [PAGE 20-22]. The veto is that any analysis treating "not out" as completed innings is physically invalid because the innings was not completed; the counterfactual score is unknown and right-censored.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios:
1. Singularity veto: τ exactly equals a partial sum Σ_{j=1}^k θ_j. Then Ψ(b,θ) flat on [s_k, s_{k+1}], β non-unique. Prediction: posterior mass spreads over interval, credible intervals cover entire gap; any point estimate is arbitrary. Verifiable by checking if τ ∈ {partial sums} for posterior draws of θ.
2. Isolated missingness veto: censored threshold s_li exceeds all observed scores max(z). Then conditional draw U_i = s_j with prob ≈1 for j corresponding to s_li (or above), Gibbs chain mixes poorly, effective sample size → 0. Prediction: trace plots show sticking, R-hat > 1.1, posterior variance understated. Verifiable via Gelman-Rubin diagnostics on augmented U chain.
3. Prior-dominance / α↓0 veto: as Dirichlet concentration α→0, c_k(α)→1/J, posterior collapses toward Jeffrey's substitution likelihood which is improper on R without proper prior on β. Prediction: posterior for β becomes uniform over support regardless of data; coverage fails nominal 95%. Verifiable by simulating with α=10^{-6} and comparing to α=1.

I need to ensure no betting lines. Cricket runs are not betting.

I also need to ensure word count > 1000 total. I'll write generously.

Let's compose the final response with XML sections exactly as requested.

Check for verbatim quotes: I can include short quotes like "not out" and "right-censored". I'll cite pages.

Let's write carefully.
</NATIVE_REASONING>

<THINK_TRACE>
The core inferential object is the τ-quantile β of a scalar random variable Z, defined variationally as β = argmin_b E{ρ_τ(Z − b)}, where ρ_τ is the Koenker–Bassett check function ρ_τ(e) = |e|{(1 − τ)1(e < 0) + τ1(e ≥ 0)} [PAGE 2]. This loss is convex and continuous but non-differentiable at e = 0, which makes the quantile a nonsmooth M-estimand. Under a finite known support S = {s_1, ..., s_J} with cell probabilities θ_j = Pr(Z = s_j | θ), the expected loss becomes Ψ(b, θ) = Σ_{j=1}^J θ_j ρ_τ(s_j − b) [PAGE 3]. Proposition 1 establishes that β is unique if and only if τ ∉ {θ_1, θ_1 + θ_2, ..., θ_1 + ... + θ_{J−1}}; when θ has a continuous density relative to Lebesgue measure on the simplex, this failure set N has zero Lebesgue measure, so β = t(θ) is unique with probability one and ∂β/∂θ′ = 0 almost everywhere [PAGE 5]. The zero-gradient condition is the critical gray-zone axiom: it implies the map from the full distributional parameter θ to the scalar quantile β collapses dimensionality, so a prior on β must be constructed via the Hausdorff area formula on the lower-dimensional manifold Θ_{β,θ} = {(β, θ): β = t(θ)} rather than by naïve Lebesgue density on R × Δ [PAGE 5–6].

The likelihood for binned counts n_j = Σ_i 1(z_i = s_j) is L(θ | D) = Π_j θ_j^{n_j} [PAGE 6]. A conditional prior p(θ | β = s_k) is built by truncating a base density f_Δ(θ) to the cell A_k = {θ: t(θ) = s_k} and renormalizing by c_k = Pr_{f_Δ}(θ ∈ A_k) [PAGE 7]. Proposition 2 gives c_1 = Pr(θ_1 < τ), c_k = Pr(Σ_{j=1}^{k−1} θ_j < τ) − Pr(Σ_{j=1}^k θ_j < τ), and c_J = Pr(Σ_{j=1}^J θ_j < τ) [PAGE 7]. In the Dirichlet special case f_Δ(θ) = f_D(θ; α), Proposition 3 yields the exact posterior odds Pr(β = s_k | D) ∝ [c_k(α + n) / c_k(α)] b_k / C(α, n), where C(α, n) = Σ_k [c_k(α + n)/c_k(α)] b_k [PAGE 8]. As α ↓ 0, Proposition 4 shows c_k(α + n) → f_B(k − 1; J − 1, τ), recovering a Jeffrey’s-substitution-likelihood-like form, but crucially the Bornn–Shephard–Solgi posterior remains proper because β is constrained to the finite support S, whereas Jeffrey’s s(β) is piecewise constant and non-integrable on R without an external proper prior [PAGE 10–11].

The hierarchical extension posits I subpopulations with separate distributions θ(i) but a shared quantile law: β_i ∈ S i.i.d. from π, and f(θ | β) = Π_i f(θ(i) | β_i), meaning the quantiles are the sole conduit of information across subpopulations [PAGE 12]. The Gibbs sampler alternates between drawing Pr(β | D, π) = Π_i Pr(β_i | D_i, π) and drawing f(π | β), which under a Dirichlet prior on π is conjugate: π | β ~ Dirichlet(λ + ν), ν_j = Σ_i 1(β_i = s_j) [PAGE 12]. The cricket application uses I = 300 English test batsmen, support S = {0, ..., 350} runs (J = 351), and at least 9% of innings are right-censored "not out" because of weather or match termination [PAGE 13]. The Dirichlet hyperparameters are set so α_j ≈ 4~α_j + 1/J with ~α_j ∝ e^{−0.03 s_j}, centering the prior on the historical scoring pmf, while π ~ Dirichlet(λ) with ~λ_j ∝ exp{−0.5[(s_j − 15)/15]^2} and Σ ~λ_j = 5 [PAGE 14].

Gray-zone audit: (i) The CLT benchmark √n(b̂β_τ − β_τ) ⇒ N(0, τ(1−τ)/f_Z(β_τ)^2) performs poorly in thin tails even at n = 10 (coverage 0.645 for τ = 0.9) and only becomes adequate near the center by n = 40 [PAGE 10, Table 1]. (ii) The non-uniqueness set N is probability zero under continuous θ, but posterior computation can land near boundaries where credible intervals straddle empty support gaps—e.g., K. F. Barrington has only one innings in 36–44 runs, inflating his 90% interval to [25, 46] despite n_i = 131 [PAGE 15–16]. (iii) The censored Gibbs sampler suffers "isolated missingness" when a censoring threshold s_{li} exceeds all fully observed scores; then θ_j / Σ_{k ≥ l_i} θ_k ≈ 1, the augmented chain sticks, autocorrelation explodes, and effective sample size collapses [PAGE 27–28, Appendix B]. (iv) Ignoring censoring biases medians: R. G. D. Willis moves from empirical median 4 (ignoring not outs) to posterior mean 8.5 under the censored model, with Q5–Q95 widening from [4, 5] to [7, 10] [PAGE 22, Table 3]. These are exact breakdown regimes, not approximations.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Check function (asymmetric absolute loss) [PAGE 2]:
\[
\rho_\tau(e) = |e|\{(1-\tau)\mathbf{1}(e<0) + \tau\mathbf{1}(e\ge 0)\}, \quad e \in \mathbb{R}.
\]
Units: dimensionless; τ ∈ (0,1) is a probability level.

Quantile variational definition [PAGE 3]:
\[
\beta = \arg\min_{b} \mathbb{E}\{\rho_\tau(Z-b)\}.
\]

Expected loss on finite support S = {s_1, ..., s_J} [PAGE 3]:
\[
\Psi(b,\theta) = \mathbb{E}_\theta\{\rho_\tau(Z-b)\} = \sum_{j=1}^J \theta_j \rho_\tau(s_j - b), \quad \theta \in \Delta \subset \mathbb{R}^{J-1}.
\]
Units: ρ_τ is in the same units as Z (runs); Ψ is expected runs-loss.

Proposition 1 uniqueness and singularity [PAGE 5]:
\[
\beta \text{ unique} \iff \tau \notin \{\theta_1,\; \theta_1+\theta_2,\; \dots,\; \theta_1+\cdots+\theta_{J-1}\}.
\]
If θ has a Lebesgue-continuous distribution, then with probability one,
\[
\frac{\partial \beta}{\partial \theta'} = 0,
\]
so the quantile map β = t(θ) is locally constant almost everywhere on the simplex.

Hausdorff measure on the quantile manifold [PAGE 5–6]:
The joint space Θ_{β,θ} = {(β, θ): β = t(θ)} is lower-dimensional; densities are defined w.r.t. Hausdorff measure H^d on S × Δ, with H^n coinciding with Lebesgue measure on R^n [PAGE 5, footnote 4].

Likelihood for binned counts n_j = Σ_i 1(z_i = s_j) [PAGE 6]:
\[
L(\theta \mid D) = \prod_{j=1}^J \theta_j^{n_j}.
\]

Posterior [PAGE 6, Eq. (3)]:
\[
p(\theta \mid D) \propto p(\beta = t(\theta), \theta) \prod_{j=1}^J \theta_j^{n_j}, \qquad
p(\beta = s_k \mid D) = \int_{A_k} p(\theta \mid D)\,d\theta.
\]

Conditional prior and cell mass c_k [PAGE 7]:
\[
p(\theta \mid \beta = s_k) = \frac{f_\Delta(\theta)}{c_k}\mathbf{1}_{A_k}(\theta), \quad
c_k = \Pr_{f_\Delta}(\theta \in A_k).
\]
Proposition 2 [PAGE 7]:
\[
c_1 = \Pr(\theta_1 < \tau), \quad
c_k = \Pr\!\Big(\sum_{j=1}^{k-1}\theta_j < \tau\Big) - \Pr\!\Big(\sum_{j=1}^{k}\theta_j < \tau\Big), \quad
c_J = \Pr\!\Big(\sum_{j=1}^{J}\theta_j < \tau\Big).
\]

Dirichlet posterior closed form [PAGE 8, Proposition 3]:
\[
\Pr(\beta = s_k \mid D) = \frac{1}{C(\alpha,n)}\,\frac{c_k(\alpha+n)}{c_k(\alpha)}\,\Pr(\beta = s_k),
\quad
C(\alpha,n) = \sum_{k=1}^J \frac{c_k(\alpha+n)}{c_k(\alpha)} b_k.
\]

Asymptotic α ↓ 0 limit [PAGE 10–11, Proposition 4]:
\[
c_k(\alpha+n) \to f_B(k-1; J-1, \tau), \qquad
\Pr(\beta = s_k \mid D) \to \frac{1}{C(n)} f(k-1; J-1, \tau) b_k.
\]

CLT benchmark for empirical quantile [PAGE 8]:
\[
\sqrt{n}\,(\hat\beta_\tau - \beta_\tau) \xrightarrow{d} \mathcal{N}\!\Big(0,\; \frac{\tau(1-\tau)}{f_Z(\beta_\tau)^2}\Big).
\]
Units: β in runs; f_Z(β_τ) in runs^{-1}; variance in runs^2.

Hierarchical model factorization [PAGE 12]:
\[
f(\theta \mid \beta) = \prod_{i=1}^I f(\theta(i) \mid \beta_i), \qquad
\beta_i \overset{\text{iid}}{\sim} \Pr(\beta_i = s_j \mid \pi) = \pi_j.
\]
Gibbs conditionals [PAGE 12]:
\[
\Pr(\beta \mid D, \pi) = \prod_{i=1}^I \Pr(\beta_i \mid D_i, \pi), \qquad
\pi \mid \beta \sim \text{Dirichlet}(\lambda + \nu), \quad \nu_j = \sum_{i=1}^I \mathbf{1}(\beta_i = s_j).
\]

Right-censoring / truncation model [PAGE 19]:
Observed fully data D_1 = {z_1, ..., z_N}; right-truncated data D_2 = {s_{l_i}, ..., s_{l_{N'}}} with U_i ≥ s_{l_i}, U_i ∈ S, Pr(U = s_j | θ) = θ_j. Augmented Gibbs step samples U | (β, D, π) then β | (D, U, π) [PAGE 19–20].

Breakdown: isolated missingness [PAGE 27–28, Appendix B]: if s_{l_i} > max_k {z_1, ..., z_N}, then θ_j / Σ_{k=l_i}^J θ_k ≈ 1, causing the augmented chain to stick and effective sample size to collapse.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with Jeffreys (1961), Section 4.4, which proposed a “substitute likelihood” s(β) = binom(n, nβ) τ^{nβ}(1−τ)^{n−nβ} for quantile inference [PAGE 1]. Koenker and Bassett (1978) supplied the check function ρ_τ that underpins the modern variational definition [PAGE 2]; Yu and Moyeed (2001) introduced the asymmetric Laplace working likelihood, which the authors note is misspecified and yields overly optimistic inference [PAGE 2]. Chernozhukov and Hong (2003) and Lancaster and Jun (2010) pursued empirical-likelihood and M-estimator connections, while Chamberlain and Imbens (2003) used the Bayesian bootstrap (Rubin, 1981) without prior control over β [PAGE 2, 10]. Closest structurally is Hjort and Petrone (2007), who place a Dirichlet process on the distribution function and let the concentration parameter a ↓ 0; Bornn, Shephard, and Solgi differ by using an informative prior on β while keeping the distribution of Z nonparametric [PAGE 2]. The hierarchical component descends from Stein (1966) and Lindley and Smith (1972), and the empirical-Bayes flavor from Robbins (1956), Efron (2010), and Efron (2013) [PAGE 2–3]. The geometric device is Federer’s (1969) area formula and Hausdorff measure, borrowed to define densities on the lower-dimensional quantile manifold [PAGE 5–6].

Multi-week traps embedded in this genealogy: (1) the Jeffreys substitute likelihood is non-integrable on R and requires an external proper prior, whereas the present construction remains proper only because β is restricted to finite support S [PAGE 10–11]; (2) the Dirichlet concentration α ↓ 0 limit recovers a discrete uniform prior on observed support values, which is often inappropriate as an informative prior [PAGE 10–11]; (3) the empirical quantile’s CLT is unreliable in tails even for moderately large n (Table 1 shows coverage 0.805 at n = 10, τ = 0.9, improving only slowly) [PAGE 10]; (4) the bootstrap fails in small tails but solidifies with large n [PAGE 9–10]. These are not one-off numerical issues; they recur whenever the analyst operates near the boundary of the simplex, near zero-measure non-uniqueness sets, or with sparse subpopulations in the hierarchy.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory of mind here concerns how a Bayesian analyst should model the “mind” of the data-generating process when local evidence is in crisis. The hierarchical prior implements crisis habit regression: when subpopulation i has few innings (small n_i), the posterior for β_i regresses aggressively toward the population quantile distribution π, because f(θ(i) | β_i) shares only the quantile across subpopulations and all other distributional features remain nonparametric and unpooled [PAGE 12]. This is visible in Table 2: A. Khan never batted (n_i = 0), so his posterior is indistinguishable from E(π | D); A. C. S. Pigott with two innings has posterior median 7.8 with a wide 95% credible region [4, 19] [PAGE 15]. Conversely, when n_i is large, the hierarchy washes out and the posterior concentrates on the player’s own empirical record—D. I. Gower (n_i = 204) has posterior median 27.0 with tight interval [25, 28], nearly identical to his empirical median [PAGE 15–16, Table 2].

The counter-trap is over-trusting the empirical median of a small, skewed, possibly censored sample. D. S. Steele has empirical median 43 runs from only 16 innings; the naive read ranks him near K. F. Barrington, but the Bayesian posterior mean shrinks to 18.8 with Q5–Q95 [7, 35] [PAGE 15–16]. The paper’s interpretation: Steele was good but not great, and the small sample created an upward fluke. The “clock” is the effective sample size n_i combined with local support density. Figure 5 plots arrows from sample median to posterior mean: shrinkage is stronger for small n_i and for high empirical medians in a right-skewed distribution, because high scores can arise from chance as well as skill [PAGE 16]. However, the clock is not purely n_i: Barrington has n_i = 131 yet a 90% interval [25, 46] because the support gap 36–44 is empty, so even a long career leaves intrinsic quantile uncertainty [PAGE 15–16]. Under censoring, the clock slows further: R. G. D. Willis had 55 not outs in 128 innings; treating them as completed (Table 2) gives median 4.1, while the right-censored model inflates the posterior mean to 8.5 and widens Q5–Q95 to [7, 10] [PAGE 22, Table 3]. Thus the recursive regression is toward π when the local clock is weak, but the gap structure and censoring mechanism determine how fast the posterior ticks away from the prior.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/weather layer: In test cricket, at least 9% of innings are right-censored as “not out” because play ends due to weather, time, or match situation before the batsman is dismissed [PAGE 13]. This is an exogenous censoring mechanism: the counterfactual score U_i is constrained to lie above the observed threshold s_{l_i}, U_i ≥ s_{l_i}, and is not ignorable without modeling [PAGE 19]. Weaker batsmen are more often left not out at the close of their team’s innings, making censoring informative about skill [PAGE 20].

Biomechanical/performance layer: Batting scores are non-negative integers, highly skewed, heavy-tailed, and heterogeneous across players [PAGE 13]. The support S = {0, ..., 350} runs accommodates the possibility of very long innings; a batsman can remain not out for potentially a very long time [PAGE 13]. Because the quantile model only identifies β through the check function loss, the censored likelihood must augment D with U and sample from p(U | β, D, π) via truncated Dirichlet draws [PAGE 19–20].

Veto proof: Any analysis that treats a “not out” innings as a completed innings with score equal to the observed partial total is physically invalid. The paper demonstrates this by comparing Table 2 (ignoring censoring) with Table 3 (modeling right censoring). For R. G. D. Willis, the posterior mean of the median jumps from 4.1 (ignored) to 8.5 (censored), and the 90% credible interval widens from [4, 5] to [7, 10] [PAGE 22]. For M. R. Ramprakash, with only 6 not outs in 92 innings, the estimates barely move (18.6 vs 18.8) [PAGE 22]. Figure 8 shows quantile functions shifting upward under censoring, especially Allott’s upper tail, which remains imprecisely estimated [PAGE 20–22]. Because the censored draws U_i are sampled from the truncated support {s_{l_i}, ..., s_J} with probability proportional to θ_j / Σ_{k ≥ l_i} θ_k [PAGE 20], the posterior correctly places mass above the censoring threshold. A veto is therefore triggered whenever the censoring fraction is non-negligible (≥9% here) and the not-out mechanism correlates with batting position or skill; the censored Gibbs sampler (Algorithm 2) is the only admissible path, and the isolated-missingness breakdown [PAGE 27–28] defines the regime where even it fails numerically.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Singularity veto (zero-measure boundary hit). Condition: τ exactly equals a partial sum Σ_{j=1}^k θ_j for some posterior draw of θ, so Ψ(b, θ) is flat on [s_k, s_{k+1}] and β is non-unique [PAGE 5]. Veto: no point estimate of β is identifiable; the posterior spreads over the entire interval [s_k, s_{k+1}] and any scalar summary is arbitrary. Verifiable test: scan posterior draws of θ for membership in N = {θ: τ ∈ {partial sums}}; if detected, reject the run and report the interval rather than a posterior mean. Prediction: credible intervals will cover the gap with probability approaching one, and the effective dimension of β collapses from scalar to set-valued.

Scenario 2 — Isolated missingness veto (censoring threshold above all observed data). Condition: for some right-censored observation, s_{l_i} > max{z_1, ..., z_N}, placing it in a support block with no fully observed data [PAGE 27–28]. Veto: the augmented Gibbs sampler draws U_i = s_j with probability ≈1 because θ_j / Σ_{k ≥ l_i} θ_k ≈ 1, producing a near-sticky chain, autocorrelation → 1, and effective sample size → 0. Verifiable test: compute Gelman–Rubin R̂ and effective sample size on the augmented U chain; R̂ > 1.1 or ESS < 100 triggers veto. Prediction: posterior variance for β will be severely understated and trace plots will show prolonged sticking at a single support value.

Scenario 3 — Prior-collapse veto (Dirichlet concentration α → 0). Condition: the Dirichlet prior on θ becomes overly diffuse (α_j ↓ 0 for all j), so c_k(α) → 1/J and the likelihood c_k(α + n) → f_B(k−1; J−1, τ) [PAGE 10–11]. Veto: the posterior for β collapses toward a Jeffrey’s-substitution-likelihood form that is uniform over support and insensitive to the observed counts; coverage of nominal 95% intervals fails. Verifiable test: simulate data with known β_τ, fit the model with α = 10^{-6} versus α = 1_J, and compare empirical coverage across 1,000 replications. Prediction: with α ↓ 0, coverage drops well below nominal (e.g., toward the 0.645–0.805 range seen for small n in Table 1 at τ = 0.9) and posterior means cease to track the true quantile as n grows.
</RLVR_COUNTERFACTUAL_VETOES>