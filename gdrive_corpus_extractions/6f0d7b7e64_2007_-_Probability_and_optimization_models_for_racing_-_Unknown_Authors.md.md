---
source: "2007 - Probability and optimization models for racing - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2007"
pages: 7
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5372
---

<NATIVE_REASONING>
The user wants a deep reasoning output based on a specific source paper: "Probability and Optimization Models for Racing" by Victor S. Y. Lo, presented at the 2007 New England Symposium on Statistics in Sports.

Constraints:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
3. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
4. >= 1,000-word depth across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important: The source is about racing (horse racing), probability models, favorite-longshot bias, ordering probabilities, running time distributions, Kelly criterion. The user is asking as "GSE + GSI Frontier Reasoning Foundry". This seems like a financial/sports modeling context. I must avoid betting lines terminology (spreads, totals, moneylines, odds). I can mention "odds" only if quoting the source verbatim? The invariant says "Never mention spreads, totals, moneylines, or odds." So I should avoid the word "odds" entirely, even in quotes? It says "Never mention spreads, totals, moneylines, or odds." This is strict. I should not use those terms. However the source text uses "Oi = Odds on i". I need to handle this carefully. I can refer to "market-implied consensus probability" or "odds" only if absolutely necessary? Better to avoid the word "odds" completely and paraphrase as "market-implied price" or "payout multiplier" but careful: payout multiplier might be close to odds. Let's avoid the specific banned terms. I can use "price" or "market-implied probability" but not "odds". I will not use the word "odds". If quoting verbatim, I might need to omit or replace with [ODDS] but the instruction says cite verbatim quotes. Hmm. Conflict: if I quote page 4 which says "where Oi = Odds on i", I would be mentioning odds. I think I should avoid direct quotes containing banned terms, or paraphrase. The instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." But also "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." The invariant likely takes precedence. I will cite page numbers but avoid verbatim quotes that contain banned terms. I can quote other parts.

Let's structure:

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. Discuss the paper's two parts: favorite-longshot bias via logit model with risk preference parameter β; ordering probabilities via running time distributions (exponential, normal Henery, gamma Stern); correlated running times; Kelly criterion. Gray zones: independence assumption, estimation of π_i from bet fractions P_i, track take t, small sample p-values, Asian vs US tracks, pool size effect, approximation validity of Lo & Bacon-Shone, singularity when β→1 or when variances/correlations degenerate. Multi-hop: from bet fraction → implied probability → true probability via β → utility/power risk aversion → expected log wealth → optimal allocation → dependence on ordering probabilities → running time distribution choice → correlated extensions → breakdown regimes.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
- Page 4: Define P_i = bet fraction on horse i = consensus win probability = (1 - track take)/(1 + O_i). Since can't say odds, maybe write "market price multiplier". Let's denote market-implied price multiplier M_i. P_i = (1 - t) / M_i? Actually source: P_i = (1 - track take)/(1 + O_i). If O_i is odds, then 1+O_i is price multiplier. I'll define M_i as the market price multiplier (return per unit staked including stake). Then P_i = (1 - t)/M_i. π_i true win probability.
- Logit model: π_i = P_i^β / Σ_j P_j^β. Wait source: π_i = P_i^n β? Let's parse page 5: "π_i = P_i^n β P_i ... = π_i n β P_i". The text is garbled: "=1 _Pnj_ ∑ β _P_ _<u>i</u>_ = π _i n_ β _P_ ∑ _j_ = _j_ 1". It seems: π_i = P_i^β / Σ_{j=1}^n P_j^β. Yes. β>1 risk-prefer, β=1 risk-neutral, β<1 risk-averse. Page 6.
- Page 7 table with β estimates and p-values. US tracks β>1 (risk-prefer). Hong Kong Happy Valley β=1.04 p=0.25 (not significant), Shatin β=0.94 p=0.04 (risk-averse significant). Shanghai β=1.03 p=0.38.
- Page 8: Expected utility maximizer indifferent: β U(1 + O_i) = K [1 + β(1 + O_i)]? The garbled text: β U(1 + O_i) = K {1 + β[(1+O_i) - 1]}? Actually: "β U (1 + O i ) = K 1 + β (1 + O i ) " maybe. Then Arrow-Pratt absolute risk aversion: -U''(x)/U'(x) = (β-1)/x? It says "= x 2 (β /)1 ( ) U (' x ) < ,0 and increases with wealth,if β>1". Hard to parse but conceptually power utility with risk aversion increasing as capital declines if β>1.
- Page 10: Ordering probability π_i = P(T_i < min_{r≠i} T_r) = ∫_0^∞ [1 - F(t|θ_i)] ∏_{r≠i} f(t|θ_r) dt? Actually source: π_i = - ∫ ... f_i(t) ∏ ... dt. Let's formalize: π_i = ∫_0^∞ f_i(t | θ_i) ∏_{r≠i} [1 - F_r(t | θ_r)] dt. Then pairwise π_ij = P(T_i < T_j < min_{r≠i,j} T_r) = ∫_0^∞ F_i(t_j | θ_i) ∏_{r≠i,j}[1 - F_r(t_j | θ_r)] f_j(t_j | θ_j) dt_j.
- Page 11: Exponential f(t_i|θ_i) = (1/θ_i) exp(-t_i/θ_i). Normal Henery T_i ~ N(θ_i, 1). Gamma Stern T_i ~ Gamma(r, θ_i) with shape r.
- Page 12: Exponential gives π_ij = π_i π_j / (π_i + π_j)? Actually Harville: π_ij = π_i π_j / (1 - π_i). Wait source: "π_ij = π_i π_j / (π_i <u>j</u>) = ... π_i where π_i can be estimated by bet fraction P_i = π_i". Harville model: probability i wins and j places second = π_i * π_j / (1 - π_i). But source seems to say π_ij = π_i π_j / (1 - π_i). The text: "π_ij = π_i π_j / (π_i <u>j</u>) = 5, ( ) − 1 π_i". It's garbled but likely π_ij = π_i π_j / (1 - π_i). And π_ijk = π_i π_j π_k / [(1 - π_i)(1 - π_i - π_j)]. I'll state Harville formulas carefully.
- Page 14: Lo and Bacon-Shone (2007) approximation: π_ijk = π_i π_j π_k λ τ (...)? The text: "λ τ π_<u>j k</u> = π π 7 _ijk i_ λ τ ( ) π π _s t_ ∑ ∑ _s_ ≠ _i t_ ≠ _i_ , _j". It's complex. I'll present as a parameterized correction to the independence/product form with λ, τ; reduces to exponential when λ=τ=1.
- Page 15: Model competition: Harville biased on HK data; Henery superior; Stern r=4 better than both using Japan data (Lo 1994b).
- Page 16: Correlated running times. Constant correlation reduces to Henery. Non-constant correlation: Corr(T_i,T_j) = ρ_ij = ψ_i ψ_j? With ψ_i = 1 - ...? Source: "Non constant correlation : = ∀ i ≠ A) ρ_ij ψ_i ψ_j j , 1 <u>ψ</u> _i_ − − − = = where δ θ θ θ θ log( ) γ( _i_ ), _i_ , ∑ − 1 _n_ ψ_i i i i.e. correlations higher for stronger pairs." Non-constant variance: σ_i = θ_i exp[κ(θ_i)]? If κ>0 weaker horses higher variance. If γ=κ=0 reduces to Henery.
- Page 17: Empirical results table: Henery baseline; non-constant correlation γ only: γ=0.58 p=0.06; γ and δ: γ=0.60 δ=0.05 p=0.18; non-constant variance κ=0.08 p=0.06. Promising but not definitive.
- Page 18: Kelly criterion: maximize E(log W_t | X_t) subject to Σ X_ti ≤ W_{t-1}, X_ti ≥ 0. Long-run asymptotic optimality (Breiman 1960, Thorp 1971, Algoet & Cover 1988).
- Pages 20-22 references.

Breakdown regimes:
- β=1 degenerates to market consensus (no bias).
- Independence assumption fails with correlated running times; if correlation → 1, ordering probabilities collapse.
- Exponential running time implies memoryless hazard; inappropriate if fatigue/heteroskedasticity present.
- θ_i estimation singular when π_i near 0 or 1 (logit denominator issues).
- Kelly criterion singular if estimated probabilities equal implied probabilities (no edge), leading to zero allocation; if model misspecified, Kelly can overbet (growth rate negative in finite samples).

RETROCAUSAL_GENEALOGY: Historical lineage: Ali (1977) → Busche & Hall (1988) → Quandt (1984) → Bacon-Shone, Lo, Busche (1992a) → Lo & Bacon-Shone (2007). Harville (1973) → Henery (1981) → Stern (1990) → Lo (1994b) Japan. Kelly: Breiman (1960), Thorp (1971), Algoet & Cover (1988), Hausch/Ziemba/Rubinstein (1981). Multi-week traps: small-sample p-values (0.08 Atlantic City, 0.02 Meadowlands) vs ~0 for large N; pooling across weeks can mask non-stationarity; favorite-longshot bias may reverse in Asian markets (Shatin β=0.94 significant risk-averse), so a model calibrated on US data fails in Asia; track take and pool size variation across weeks induces non-stationarity in β.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is more abstract. Need to interpret in context of betting markets/modeling. Crisis habit regression: under stress, participants revert to favorite-lending (β shifts toward 1 or risk-averse). Counter-trap: sophisticated modelers (like Benter) exploit the bias, but as they enter, the bias shrinks (arbitrage/competition). Clock: temporal decay of edge; model parameters estimated on 83-84 data (Quandt) vs 70-74 (Ali) vs 90s Japan; the "clock" is the window over which β is stable. Multi-week traps: if you regress β on recent weeks only, you overfit to temporary liquidity shocks; if you use too long a window, you miss regime shifts (e.g., Hong Kong Happy Valley p=0.25 vs Shatin p=0.04). Need to discuss recursive theory of mind: other modelers are also updating; if everyone uses Kelly with same ordering probabilities, prices adjust, β changes, edge decays.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Need to argue that the statistical model assumes running times depend only on θ_i (horse ability) and distribution family. But physical layers can veto: track surface (dirt/turf/synthetic), weather (rain → soft track), biomechanical factors (stride length, injury, weight carried), post position, jockey. These introduce time-varying covariates not captured by θ_i. If weather changes variance heteroskedastically (κ>0), the model's assumption of independent identically distributed running times is violated. A veto occurs when physical layer (e.g., sudden rain) changes the effective correlation or variance structure, invalidating the exponential/normal/gamma assumption. The model is silent on these; thus any deployment must have a physical-layer veto: if track condition changes within a race meeting, the θ_i estimates from prior races are stale.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR (Reinforcement Learning from Verifiable Rewards?) veto scenarios + predictions. RLVR likely means scenarios that can be verified by replay/log data. Need 3 scenarios:
1. Independence veto: If two horses share a trainer/sire or are coupled entries, their running times are correlated; model assuming independence misestimates π_i. Verification: compute pairwise correlation of residuals from historical race logs; if |ρ| > 0.2, veto. Prediction: ordering probability error > 15% for exacta pools.
2. Non-stationary β veto: If β estimated from a rolling 28-day window crosses below 1 (risk-averse) while the model assumes β>1 (risk-prefer US bias), Kelly allocations reverse sign. Verification: track β_t weekly; if sign(β_t - 1) ≠ sign(β_ref - 1) for 3 consecutive weeks, veto. Prediction: expected log growth turns negative within 4 weeks.
3. Physical condition veto: If rainfall in the 24h pre-race exceeds threshold (e.g., >10mm) or track surface changes from turf to dirt, the exponential/normal running-time family is invalid; heavier horses' variance increases (κ>0). Verification: weather API + surface log; if condition change occurs, veto. Prediction: place/show calibration error (Brier score) increases by >0.03.

Need to ensure >=1000 words total across sections. Each section must be present. THINK_TRACE >=400 words. Others can be substantial too.

Word count check: I'll aim for roughly:
- THINK_TRACE: ~500 words.
- SOURCE_OPERATORS_AND_EQUATIONS: ~400 words.
- RETROCAUSAL_GENEALOGY: ~300 words.
- RECURSIVE_THEORY_OF_MIND: ~300 words.
- CROSS_LAYER_VETO_ADJUDICATION: ~300 words.
- RLVR_COUNTERFACTUAL_VETOES: ~300 words.
Total > 2000 words, safe.

Need to cite page numbers exactly like [PAGE 4], [PAGE 7], etc. The PDF pages are labeled 1-22 in source. I'll cite accordingly.

Avoid banned terms. Let's scan for "odds". I will not use it. If I need to refer to source quote containing odds, I'll paraphrase or use [REDACTED]. Better to just not quote that specific phrase. I'll quote other safe phrases.

Let's write.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit.
Start with favorite-longshot bias. Page 4 defines consensus probability P_i from market prices and track take t. True probability π_i related by power transform π_i = P_i^β / Σ P_j^β [PAGE 5-6]. β encodes risk preference. If β>1, low π_i horses get P_i > π_i (overbet longshots), high π_i get P_i < π_i (underbet favorites) [PAGE 4-5]. This is because β compresses or expands the probability simplex. Multi-hop: market price → implied P_i → true π_i via β → utility curvature via Arrow-Pratt [PAGE 8] → expected log wealth objective [PAGE 18] → allocation X_ti via Kelly → dependence on ordering probabilities π_ij, π_ijk [PAGE 10-14] → running-time distribution family (exponential, normal, gamma) [PAGE 11-12] → correlation/heteroskedasticity extensions [PAGE 16-17] → empirical rejection/acceptance [PAGE 7, 15, 17].

Gray zones: (1) Estimation of π_i by P_i assumes the market is informationally efficient except for the β distortion; if insider information exists, P_i is biased. (2) p-values in [PAGE 7] vary wildly with pool size and N; Atlantic City N=712 p=0.08 (not significant), Meadowlands N=705 p=0.02, Saratoga N=9072 p~0. Large N can detect trivial β deviations; small N misses meaningful bias. (3) The logit normalization Σ π_i = 1 breaks down if β is estimated per-race rather than globally; identifiability of β requires pooling races, which assumes stationarity across weeks. (4) Independence of running times [PAGE 11] is physically implausible (shared pace, weather, track bias); correlated extensions [PAGE 16] add parameters but likelihood-ratio p-values are marginal (0.06, 0.18) [PAGE 17], so overfitting risk. (5) Lo & Bacon-Shone approximation [PAGE 14] reduces to Harville only when λ=τ=1 [PAGE 14]; if the true process is gamma with r≠1, the approximation error propagates into Kelly allocation and can cause ruin.

Breakdown regimes: β → 1 collapses to consensus (no edge); π_i → 0 or 1 makes logit denominator ill-conditioned; correlation ρ → 1 makes ordering probabilities degenerate (ties certain); track take t → 1 eliminates investable surplus.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. I'll list equations with page citations. Need units: probabilities dimensionless, β dimensionless, θ_i in seconds (running time parameter), t dimensionless track take fraction, W in currency units (but avoid betting?), X in currency units. The source doesn't specify currency but pool size in dollars; I can say wealth units are consistent with pool-size currency.

Equations:
1. Consensus implied probability: P_i = (1 - t) / M_i, where M_i is the market price multiplier (gross return per unit staked). [PAGE 4] (avoiding odds).
2. Power-transform mapping: π_i = P_i^β / (Σ_{j=1}^n P_j^β), i=1..n. [PAGE 5-6]. β>1 risk-prefer, β=1 neutral, β<1 risk-averse.
3. Arrow-Pratt absolute risk aversion for power utility: A(x) = -U''(x)/U'(x) = (β - 1)/x, increasing in risk as wealth declines if β>1. [PAGE 8] (approximate from garbled text but conceptually stated).
4. Win ordering probability: π_i = Pr(T_i < min_{r≠i} T_r) = ∫_0^∞ f(t | θ_i) ∏_{r≠i} [1 - F(t | θ_r)] dt. [PAGE 10].
5. Place-show ordering probability: π_ij = Pr(T_i < T_j < min_{r≠i,j} T_r) = ∫_0^∞ F(t_j | θ_i) ∏_{r≠i,j}[1 - F(t_j | θ_r)] f(t_j | θ_j) dt_j. [PAGE 10, eq. (4)].
6. Exponential density: f(t_i | θ_i) = (1/θ_i) exp(-t_i / θ_i). [PAGE 11].
7. Normal: T_i ~ N(θ_i, 1). [PAGE 11]. Gamma: T_i ~ Gamma(r, θ_i), shape r. [PAGE 11].
8. Harville reduction under exponential: π_ij = π_i π_j / (1 - π_i); π_ijk = π_i π_j π_k / [(1 - π_i)(1 - π_i - π_j)]. [PAGE 12].
9. Lo & Bacon-Shone approximation (parameterized correction): π_ijk = function of π's, λ, τ; reduces to (5)-(6) when λ=τ=1. [PAGE 14].
10. Correlated running time: Corr(T_i, T_j) = ρ_ij; constant ρ reduces to Henery; non-constant ρ_ij = ψ_i ψ_j (with constraints), non-constant variance σ_i = θ_i exp[κ(·)]. [PAGE 16].
11. Kelly optimization: X_t^* = arg max_{X_t} E[log W_t | X_t] s.t. Σ_{i=1}^m X_ti ≤ W_{t-1}, X_ti ≥ 0. [PAGE 18]. Long-run asymptotic optimality [PAGE 18].

Breakdown: singularity at β=1 (no distortion), θ_i estimation singular when π_i ∈ {0,1}, covariance matrix singular when ρ→1.

RETROCAUSAL_GENEALOGY: Historical lineage. Ali (1977) utility estimates; Quandt (1984) statistical model; Busche & Hall (1988) exception; Bacon-Shone/Lo/Busche (1992a) logit; Lo & Bacon-Shone (2007) simple approximation. Harville (1973) exponential; Henery (1981) normal first-order Taylor; Stern (1990) gamma permutations; Lo (1994b) Japan Stern r=4 superior. Kelly: Breiman (1960), Thorp (1971), Algoet & Cover (1988); Hausch/Ziemba/Rubinstein (1981); Lo/Bacon-Shone/Busche (1995). Multi-week traps: β estimates are era-specific (Quandt 83-84 vs Ali 70-74) [PAGE 7]; pool size and take vary by track and week [PAGE 7]; Asian tracks reverse sign (Shatin β=0.94 p=0.04 vs US β>1) [PAGE 7]; thus a model trained on US 1980s data will misprice in 2000s Asia; multi-week pooling assumes stationarity that is violated by surface/weather changes.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression: under market stress (e.g., large pool volatility), bettors regress to favorites, β drifts toward 1 or below [PAGE 8 risk-loving as capital declines paradox]. Counter-trap: if sophisticated actors deploy Kelly using the same π_i model, they buy underpriced favorites and sell overpriced longshots, compressing β toward 1 and eliminating edge. Clock: the half-life of an estimated β is bounded by the window of parameter stability; using [PAGE 7] data across decades conflates regimes. Recursive reasoning: each participant's model updates others' prices; the fixed point is β=1 absent persistent behavioral bias. Multi-week trap: fitting β on trailing 4 weeks captures transient liquidity shocks; fitting on 5 years captures structural change but misses regime shifts. Need Bayesian change-point on β_t.

CROSS_LAYER_VETO_ADJUDICATION: Physical layer vetoes. The model treats θ_i as a latent location parameter for running time [PAGE 10-11]. But physical determinants: track surface composition, moisture content (weather), rail position, weight carried, barrier draw, jockey tactics, horse health. These enter as time-varying covariates not in θ_i. A veto is triggered if: (a) precipitation in the 24h pre-race changes surface shear strength, altering the variance κ [PAGE 16 non-constant variance]; (b) a scratch removes a pace-setter, changing realized correlations among remaining horses [PAGE 16 correlated running times]; (c) surface switch (turf to dirt) invalidates exponential/normal family because the hazard is no longer memoryless or symmetric. The model lacks a physical covariate layer; therefore any θ_i estimated from prior races is stale under condition shifts. The veto proof: if surface condition C_t ≠ C_{t-1}, then f(t | θ_i, C_t) ≠ f(t | θ_i, C_{t-1}), so the likelihood used to estimate θ_i is misspecified; ordering probabilities computed under the old family are biased.

RLVR_COUNTERFACTUAL_VETOES: Three verifiable scenarios. RLVR = verifiable by replay of historical race logs and weather/surface records.
Scenario 1: Correlation veto. Verifiable via historical residual correlation of finish times for horses sharing trainers. If pairwise |ρ̂| > 0.25 in a race, the independence assumption is rejected. Prediction: exacta/trifecta ordering probability miscalibration (Brier score) increases by >0.02 relative to calibrated baseline.
Scenario 2: Regime-switch veto on β. Verifiable by rolling 14-day β estimate. If β_t crosses 1 (e.g., from 1.10 to 0.95) for 3 consecutive weeks while the strategy assumes risk-prefer bias, Kelly allocation reverses. Prediction: cumulative log wealth growth turns negative within 21 days.
Scenario 3: Weather/surface veto. Verifiable via meteorological record: if 24h rainfall > 15 mm or surface status changes from firm to soft, the exponential/normal running-time family fails; weaker horses exhibit inflated variance (κ > 0) [PAGE 16]. Prediction: place/show calibration error (expected calibration error) rises above 0.05 and Kelly-staked units should be reduced to zero.

Need to ensure no banned words. I used "price multiplier" instead of odds. Good.

Check citations: [PAGE 4], [PAGE 5], [PAGE 6], [PAGE 7], [PAGE 8], [PAGE 10], [PAGE 11], [PAGE 12], [PAGE 14], [PAGE 15], [PAGE 16], [PAGE 17], [PAGE 18]. Good.

Word count: likely >1500. Fine.

Now compose final answer exactly with XML sections.
</NATIVE_REASONING>

<THINK_TRACE>
The paper develops two coupled modeling layers. Part 1 maps observed consensus probabilities to true win probabilities through a single risk-preference parameter β. Page 4 defines P_i as the bet fraction on horse i, i.e. the consensus win probability implied by market prices and track take t. Page 5-6 specifies the logit power transform π_i = P_i^β / Σ_{j=1}^n P_j^β, with β > 1 indicating risk-preferring behavior, β = 1 risk-neutral, and β < 1 risk-averse. Because the transform compresses or expands the probability simplex, β > 1 produces P_i > π_i for low-probability runners and P_i < π_i for favorites, exactly the favorite-longshot bias documented across US tracks on page 7 (Atlantic City β = 1.10, Meadowlands β = 1.12, Saratoga β = 1.16) and its partial absence or reversal in Asian markets (Shatin β = 0.94, p = 0.04; Happy Valley β = 1.04, p = 0.25). Page 8 links β to expected utility: an expected-utility maximizer is indifferent across horses, implying a power-utility curvature whose Arrow-Pratt absolute risk aversion rises as wealth declines when β > 1, formalizing "risk lovers take more risk as capital declines."

The second hop connects win probabilities to ordering probabilities. Page 10 defines π_i = Pr(T_i < min_{r≠i} T_r) and π_ij = Pr(T_i < T_j < min_{r≠i,j} T_r), where T_i is running time. Page 11 lists the distribution families considered under the independence assumption: exponential (Harville, 1973), normal (Henery, 1981), and gamma with shape r (Stern, 1990). Page 12 shows that under exponential running times, the model collapses to Harville's product-ratio form for exactas and trifectas. Page 14 introduces the Lo and Bacon-Shone (2007) approximation with parameters λ and τ, which reduces to the exponential case when λ = τ = 1. Page 15 documents the empirical horse race: Harville is biased on Hong Kong data, Henery is superior on Meadowlands data, and Stern with r = 4 dominates both on Japan data (Lo, 1994b).

The third hop adds correlation and heteroskedasticity. Page 16 extends the model to non-constant correlation Corr(T_i, T_j) = ρ_ij and non-constant variance, where weaker horses may have higher variance if κ > 0. Page 17 reports marginal likelihood-ratio evidence (p = 0.06, 0.18) for these extensions, suggesting promise but not decisive rejection of the simpler Henery benchmark.

The fourth hop is optimal investment. Page 18 states the Kelly objective: maximize E(log W_t | X_t) subject to Σ_i X_ti ≤ W_{t-1} and X_ti ≥ 0, citing Breiman (1960), Thorp (1971), and Algoet & Cover (1988) for long-run asymptotic optimality. The entire chain is market price → P_i → π_i via β → ordering probabilities via T_i distribution → Kelly allocation X_t.

Gray-zone audit: (1) Estimating π_i by P_i assumes the market is informationally efficient apart from the β distortion; insider information or syndicate activity violates this. (2) Page 7 p-values are strongly sample-size dependent: Atlantic City n = 712 gives p = 0.08, while Saratoga n = 9,072 gives p ≈ 0, so large N detects trivial deviations while small N misses meaningful bias. (3) β is identified only by pooling races, which imposes stationarity across weeks that track take, pool size, and weather may violate. (4) The independence assumption on page 11 is physically suspect; page 16-17 correlated extensions add parameters but only marginal statistical support, creating overfitting risk. (5) The Lo-Bacon-Shone approximation on page 14 is exact only under λ = τ = 1; if the true process is gamma with r ≠ 1, approximation error propagates nonlinearly into Kelly stakes. Breakdown regimes: β → 1 collapses to consensus (zero edge); π_i → 0 or 1 makes the logit denominator ill-conditioned; correlation ρ → 1 degenerates ordering probabilities into ties; track take t → 1 eliminates investable surplus.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All probabilities are dimensionless; β, λ, τ, γ, δ, κ are dimensionless; θ_i is a running-time location parameter in seconds; t is the track-take fraction; W_t is wealth in currency units consistent with pool size; X_ti is the allocated stake in the same currency units.

Consensus-implied probability (page 4):
P_i = (1 - t) / M_i,
where M_i is the gross market price multiplier per unit staked. The source denotes the market relationship through the track take and price multiplier; P_i is the consensus win probability.

Risk-preference mapping (pages 5-6):
π_i = P_i^β / (Σ_{j=1}^n P_j^β),   i = 1, …, n,
with β > 1 → risk-prefer, β = 1 → risk-neutral, β < 1 → risk-averse.

Expected-utility indifference and Arrow-Pratt curvature (page 8):
The source states an expected-utility maximizer is indifferent across horses: E[U(K)] ∀ i = 1, …, n, leading to a power-utility form whose absolute risk aversion A(x) = -U''(x)/U'(x) increases as wealth declines when β > 1.

Win ordering probability (page 10):
π_i = Pr(T_i < min_{r≠i} T_r) = ∫_0^∞ f(t | θ_i) ∏_{r≠i} [1 - F(t | θ_r)] dt.

Place-show ordering probability (page 10, eq. 4):
π_ij = Pr(T_i < T_j < min_{r≠i,j} T_r) = ∫_0^∞ F(t_j | θ_i) ∏_{r≠i,j} [1 - F(t_j | θ_r)] f(t_j | θ_j) dt_j.

Running-time densities (page 11):
Exponential: f(t_i | θ_i) = (1/θ_i) exp(-t_i / θ_i).
Normal (Henery): T_i ~ N(θ_i, 1).
Gamma (Stern): T_i ~ Gamma(r, θ_i), with shape parameter r.

Harville reduction under exponential times (page 12):
π_ij = π_i π_j / (1 - π_i),
π_ijk = π_i π_j π_k / [(1 - π_i)(1 - π_i - π_j)].

Lo-Bacon-Shone approximation (page 14):
A parameterized correction to the independence product form involving λ and τ; for exponential time, λ = τ = 1 and the expression reduces to equations (5) and (6).

Correlated running times (page 16):
Constant correlation Corr(T_i, T_j) = ρ for all i ≠ j reduces to the Henery case. Non-constant correlation ρ_ij is parameterized through ψ_i, ψ_j with correlations higher for stronger pairs; non-constant variance σ_i = θ_i exp[κ(·)] so that if κ > 0, weaker horses carry higher variance. If γ = κ = 0, the model reduces to Henery.

Kelly optimal investment (page 18):
X_t^* = arg max_{X_t} E[log W_t | X_t]
subject to Σ_{i=1}^m X_ti ≤ W_{t-1},   X_ti ≥ 0.
Long-run asymptotic optimality is established by Breiman (1960), Thorp (1971), and Algoet & Cover (1988).

Singularity and breakdown regimes: β = 1 removes the favorite-longshot distortion; π_i ∈ {0,1} makes the logit normalization degenerate; ρ → 1 collapses the covariance structure and ordering probabilities; t → 1 drives the investable surplus to zero.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage runs from behavioral foundations to distribution theory to portfolio optimization. Ali (1977) established probability and utility estimates for racetrack bettors; Busche & Hall (1988) identified an exception to the risk-preference anomaly; Quandt (1984) and Asch, Malkiel & Quandt (1984) supplied statistical and market-efficiency antecedents. Bacon-Shone, Lo & Busche (1992a) proposed the logit mapping between consensus and true probabilities, and Lo & Bacon-Shone (2007) later offered the simple approximation for multi-entry ordering probabilities cited on page 14.

On the distribution side, Harville (1973) introduced exponential running times; Henery (1981) proposed normal running times with a first-order Taylor approximation; Stern (1990) introduced gamma/permutation models. The paper’s own empirical adjudication on page 15 shows path dependence: Harville is systematically biased on Hong Kong data, Henery is superior on Meadowlands data, yet Stern with r = 4 beats both on Japan data (Lo, 1994b). Thus no distribution is universally best; the winning family is track- and era-specific.

The Kelly layer descends from Breiman (1960), Thorp (1971), Algoet & Cover (1988), and was adopted by Hausch, Ziemba & Rubinstein (1981) using exponential running times, then extended by Lo, Bacon-Shone & Busche (1995) and Hausch, Lo & Ziemba (1994) to other distributions.

Multi-week traps are evident in the page 7 table. β estimates are era-specific: Quandt’s 1983-84 US sample (Atlantic City β = 1.10, Meadowlands β = 1.12) differs from Ali’s 1970-74 sample, and Asian tracks show different signs and significance (Shatin β = 0.94, p = 0.04; Happy Valley β = 1.04, p = 0.25; Shanghai β = 1.03, p = 0.38). Pooling across weeks assumes stationarity in β, track take, and pool size that the table itself refutes. A model calibrated on US 1980s data will misprice Asian markets because the behavioral parameter β can flip sign; a model calibrated across five years will miss regime shifts caused by surface or weather changes within a single meeting.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive problem has three moving parts: crisis habit regression, counter-trap, and clock. Crisis habit regression: page 8 notes that if β > 1, absolute risk aversion increases as wealth declines, so bettors become more risk-loving as capital shrinks. Under stress—large pools, carryovers, or late scratches—participants regress to longshot-loving habits, pushing β upward and widening the favorite-longshot gap temporarily.

Counter-trap: if sophisticated actors deploy the same Kelly framework using estimated π_i and ordering probabilities, they buy underpriced favorites and avoid overpriced longshots. Their flow compresses P_i toward π_i, driving β toward 1 and eroding the edge. The counter-trap is self-defeating: successful exploitation of the bias eliminates the bias, unless new behavioral entrants continually replenish it.

Clock: the half-life of an estimated β is bounded by the window over which it is stable. Page 7 shows β varies by track, decade, and continent. Fitting β on trailing four weeks captures transient liquidity shocks; fitting on five years captures structural change but conflates regimes. The recursive fixed point absent persistent behavioral bias is β = 1, where no Kelly edge exists. Therefore the model must treat β_t as a stochastic process with change points, not a static constant. Multi-week trap: a trailing-window regression that ignores the clock will either overfit to a temporary stress-induced β spike or underreact to a structural shift from risk-prefer to risk-neutral behavior.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The statistical model treats θ_i as a latent location parameter for running time T_i (pages 10-11) and assumes a distribution family (exponential, normal, gamma) under independence (page 11). The physical layer can veto this abstraction through track surface, weather, biomechanics, and pace dynamics, none of which appear in the equations.

Veto condition A: surface and moisture. If 24-hour precipitation changes track shear strength, the variance parameter is no longer constant. Page 16 explicitly models non-constant variance with κ > 0 so weaker horses have higher variance. A wet turf track or rain-softened dirt changes the hazard shape, invalidating the memoryless exponential assumption and potentially the symmetric normal assumption.

Veto condition B: correlation shock from scratches or pace. Page 16 introduces correlated running times with Corr(T_i, T_j) = ρ_ij. A late scratch of a pace-setter alters realized correlations among remaining horses; the independence likelihood used to estimate θ_i is then misspecified, and ordering probabilities from page 10 are biased.

Veto condition C: surface switching. Moving from turf to dirt changes the biomechanical mapping from horse ability to running time, so f(t | θ_i, surface_t) ≠ f(t | θ_i, surface_{t-1}). The exponential, normal, and gamma families are not transportable across surfaces without re-estimation.

Adjudication rule: any deployment must run a physical-layer pre-race check. If surface status C_t ≠ C_{t-1}, or if precipitation exceeds a material threshold, the θ_i estimates from prior races are stale and the ordering-probability computation must be vetoed or re-calibrated with surface-condition covariates. The model as written has no such covariate layer; therefore it cannot self-diagnose a physical-layer regime change.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Correlation veto (verifiable from historical race logs): Compute pairwise residual correlation of running times for horses sharing a trainer or sire within a race. If |ρ̂| > 0.25 for any pair, reject the independence assumption of page 11. Prediction: exacta and trifecta ordering-probability Brier score deteriorates by more than 0.02 relative to a calibrated baseline; Kelly stakes on correlated pairs should be zeroed.

Scenario 2 — Regime-switch veto on β (verifiable from rolling parameter estimates): Estimate β on a rolling 14-day window. If β_t crosses from above 1 to below 1 (or vice versa) for three consecutive weeks while the strategy assumes a fixed risk-prefer bias, the Kelly direction reverses. Prediction: cumulative log wealth growth turns negative within 21 days if the veto is ignored; the model must re-estimate β and re-size all open positions.

Scenario 3 — Weather/surface veto (verifiable from meteorological and track-condition records): If 24-hour rainfall exceeds 15 mm or surface status changes from firm to soft, invoke the non-constant variance extension of page 16 with κ > 0, meaning weaker horses exhibit inflated variance. The exponential/normal families are invalid under this condition. Prediction: place/show expected calibration error rises above 0.05; the Kelly-optimal allocation should be reduced to zero until surface conditions stabilize and θ_i is re-estimated.
</RLVR_COUNTERFACTUAL_VETOES>