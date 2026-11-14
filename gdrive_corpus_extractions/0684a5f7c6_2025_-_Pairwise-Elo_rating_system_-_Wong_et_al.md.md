---
source: "2025 - Pairwise-Elo rating system - Wong et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Journal of Quantitative Analysis in Sports/2025"
pages: 46
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4526
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper about Pairwise-Elo rating system and produce a response following strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to be careful about:
- No betting lines/spreads/totals/moneylines/odds. The paper discusses "hypothetical value-betting evaluation" but I must not use betting terminology as if giving advice. I can mention it as a model evaluation metric but carefully.
- Must cite exact page markers [PAGE N] from the source text. The source text has page markers like "> **2 —**", "> **3 —**", etc. I should reference these.
- Must include formal LaTeX equations from the paper, not fake ones.
- Each section needs substantial depth, total >= 1000 words, with THINK_TRACE >= 400 words.

Let me structure the response:

THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words). I'll derive the P-ELO model, compare to ELO, analyze the transitivity breakdown, the LRT, the sparse data problem, the negative K2 interpretation, etc.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations from the paper (ELO update, P-ELO update, likelihood, LRT, logistic function, etc.), units, page citations [PAGE N], breakdown of singularity/breakdown regimes (sparse matchups, boundary K2=0, Wilks theorem conditions not proven, etc.).

RETROCAUSAL_GENEALOGY: Historical lineage from Elo 1978, Bradley-Terry 1952, GARCH/ARCH, mElo2k, Blade-Chest, TrueSkill, etc. Multi-week traps: temporal non-stationarity, initialization sensitivity, sparse matchup regimes causing spurious pairwise advantages.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but I can interpret it as: how the model handles crises (upsets), recursive belief updating, counter-traps (overfitting pairwise noise), clock (time-varying strengths, K parameter speed).

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Since this is a paper about rating systems, physical/biomechanical vetoes would be things like handedness in fencing (mentioned in paper), race matchups in SC2, fighting styles in Sumo/MMA, etc. Weather isn't really in the paper but I can discuss how external factors veto the pure rating model. I need to be careful not to invent too much but can reference the paper's mention of left-handed fencers and SC2 races.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR likely means Reinforcement Learning from Verifiable Rewards or similar. I need to propose 3 counterfactual scenarios where the model would be vetoed, with predictions.

Let me count words carefully. I need >= 1000 words total across all sections, with THINK_TRACE >= 400 words.

I need to cite page markers. Looking at the source text:
- Page 2: Introduction, ELO basics
- Page 3: More intro, transitivity
- Page 4: Methodology start
- Page 5: Example, definitions
- Page 6: P-ELO model, Q matrix
- Page 7: Wt vector, update rules
- Page 8: Estimation, testing
- Page 9: Value betting
- Page 10: Table 2, Figure 1
- Page 11: Figure 2, Simulation 1
- Page 12: Simulation 2
- Page 13: Simulation 1 results
- Page 14: Simulation 2 results
- Page 15: Real-life examples start
- Page 16: Sumo data
- Page 17: MMA, SC2, LLM
- Page 18: LRT table, Sumo results
- Page 19: MMA results, SC2, LLM
- Page 20: Value betting results
- Page 21: Table 12
- Page 22: Table 13, 14, conclusions
- Page 23: Appendix A start
- Pages 24-42: Appendix tables and figures

I'll cite pages like [PAGE 2], [PAGE 6], etc.

Let me draft the content.

THINK_TRACE (>=400 words):
- Derive ELO as latent time series: p_ij,t = φ(R_i,t-1 - R_j,t-1), update R_i ← R_i + K(X - p_ij).
- P-ELO extends by replacing rating difference with R_i + q_ij - R_j. q_ij is antisymmetric.
- State vector W_t = (R_t, Q_t) in R^(n + n(n-1)/2) effectively n + n^2 but antisymmetric means n(n-1)/2 independent entries? Actually paper says n^2 entries but antisymmetric so n(n-1)/2 independent. They flatten row-major length n^2.
- Update governed by K and K_2. K_2 can be negative (momentum/reversal).
- LRT: λ_n = 2(log L_PELO - log L_ELO). Null K_2 = 0 on boundary [0, ∞). Wilks theorem regularity not proven; use parametric bootstrap.
- Gray zones: (1) sparse matchups -> pairwise advantage estimates act as noise; (2) K_2 negative interpretation as behavioral reversal in combat sports; (3) boundary problem for LRT; (4) mElo2_k global updates vs P-ELO localized updates; (5) accuracy/AUC insensitivity to probability calibration; value betting exposes calibration differences.
- Multi-hop: ELO -> Bradley-Terry static -> GARCH dynamic -> P-ELO pairwise latent -> LRT detection -> value betting calibration.

SOURCE_OPERATORS_AND_EQUATIONS:
- Logistic: p_ij,t = φ(R_i,t-1 - R_j,t-1) [PAGE 4]
- ELO update: R_i ← R_i + K(X - p_ij), R_j ← R_j - K(X - p_ij) [PAGE 2]
- P-ELO: p_ij,t = φ(R_i,t-1 + q_ij,t-1 - R_j,t-1) [PAGE 6]
- Q_t antisymmetric: q_ii,t = 0, q_ij,t = -q_ji,t [PAGE 6]
- W_t = (R_t, Q_t) ∈ R^(n + n^2) [PAGE 6-7]
- Likelihood ELO: product over t of p_ij,t^X (1-p_ij,t)^(1-X) [PAGE 8]
- LRT: λ_n = 2(ℓ_PELO - ℓ_ELO) [PAGE 8]
- Null: H_0: K_2 = 0 vs H_1: K_2 ≠ 0 [PAGE 8]
- Bootstrap critical values e.g., Sumo empirical critical value 3.910 [PAGE 18]
- Breakdown: sparse N/(n choose 2) small -> Wilks fails [PAGE 8, Appendix A pages 23-24]; K_2=0 boundary [PAGE 8]; K_2 negative momentum [PAGE 8].

RETROCAUSAL_GENEALOGY:
- Elo (1978) chess [PAGE 2]
- Bradley-Terry (1952) static logistic regression [PAGE 2]
- GARCH (Bollerslev 1986; Engle 1982) analogy [PAGE 2-3]
- Glicko (Glickman 1999, 2001) Bayesian RD [PAGE 3]
- TrueSkill (Herbrich et al. 2006) [PAGE 3]
- mElo2_k (Balduzzi et al. 2018) Hodge theory cyclic components [PAGE 3-4]
- Blade-Chest (Chen and Joachims 2016) [PAGE 3]
- Maystre et al. (2019) Gaussian processes [PAGE 3]
- Multi-week traps: initialization R0=1500, Q0=0 [PAGE 8]; sparse pairings MMA [PAGE 17]; LLM replacement of ELO by Bradley-Terry Dec 2023 [PAGE 2]; time-varying strengths requiring K large but volatility [PAGE 2].

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: after upsets, K drives rapid rating adjustment; K_2 captures pairwise "revenge" or stylistic mismatch.
- Counter-trap: overfitting pairwise noise when encounters infrequent (MMA: 4,779 matchups appear once [PAGE 17]); negative K_2 as spurious mean reversion.
- Clock: time-varying strengths, sequential updates, path dependence [PAGE 8]; 6 basyo per year Sumo [PAGE 16].
- Recursive ToM: bettor Y models bookmaker X who uses ELO; Y uses P-ELO; edge from calibration not direction [PAGE 9-10].

CROSS_LAYER_VETO_ADJUDICATION:
- Physical/biomechanical: handedness in fencing (Harris 2010) [PAGE 3]; Sumo styles, physical characteristics [PAGE 16]; SC2 races T/P/Z asymmetric [PAGE 17].
- Weather: not in paper explicitly, but outdoor sports absent; Sumo indoor, MMA controlled environment, SC2 digital, LLM text. Veto: environmental confounders absent from latent state W_t.
- Biomechanical veto: weight class, reach, stance not in model; only match results used.
- If pairwise advantage aligns with stronger player, ELO already good, P-ELO marginal [PAGE 22].
- Breakdown: small Q entries or limited encounters -> accuracy decrease [PAGE 22].

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable veto scenarios + predictions.
1. Sparse pair veto: If a pair has < 5 encounters, P-ELO's q_ij update is dominated by noise; prediction reverts to ELO or worse. Prediction: MMA accuracy 0.547 < ELO 0.550 [PAGE 19].
2. Boundary K2=0 veto: If true K_2 = 0 (transitive), LRT with bootstrap critical value controls type I; but if N small relative to n, empirical critical value inflated; prediction: 8 players 20 games KS/AD reject chi-square [PAGE 23-24, Table 18].
3. Negative K_2 behavioral veto: If K_2 < 0 interpreted as momentum reversal, but in stable strength environments (LLM) K_2 small positive 3.42 [PAGE 19]; if applied to LLM, no gain, accuracy identical 0.649 [PAGE 19].

I must avoid betting lines. I can mention "hypothetical value-betting evaluation" as the paper does, but not as actual betting advice. I will not mention spreads, totals, moneylines, odds. I might mention "implied probabilities" but carefully. Actually the invariant says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." So I should avoid the word "odds" entirely if possible, or only in the context of the paper's hypothetical evaluation but not as a line. Better to avoid "odds" completely. I can refer to "implied probabilities" or "fair odds" only if quoting the paper? The invariant says never mention odds. I'll avoid it. I can say "implied win probabilities" instead.

Now word count. I need to be verbose enough. Let's write.

I will produce the XML sections exactly.

Let me draft each section with attention to word count and citations.

THINK_TRACE: I'll aim for ~500 words.

SOURCE_OPERATORS_AND_EQUATIONS: ~250 words.

RETROCAUSAL_GENEALOGY: ~200 words.

RECURSIVE_THEORY_OF_MIND: ~200 words.

CROSS_LAYER_VETO_ADJUDICATION: ~200 words.

RLVR_COUNTERFACTUAL_VETOES: ~150 words.

Total ~1500 words. Good.

Let's write carefully with LaTeX.

Important: cite exact page markers from the text. The text uses markers like "> **2 —**". I'll cite as [PAGE 2], [PAGE 6], etc.

Let's compose.

Need to ensure no fake equations. All equations must be from the paper or standard definitions clearly attributed. I'll use the paper's notation.

Double check: The paper uses _Ri,t_ etc. I'll write in LaTeX.

Let's start.

THINK_TRACE:

The Pairwise-Elo (P-ELO) model extends classic Elo by relaxing linear stochastic transitivity. In classic ELO, the win probability for player i against j at time t is p_{ij,t} = \phi(R_{i,t-1} - R_{j,t-1}), where \phi is the logistic CDF [PAGE 4]. Ratings update via R_i \leftarrow R_i + K(X - p_{ij}) and R_j \leftarrow R_j - K(X - p_{ij}) [PAGE 2]. This structure imposes transitivity: if p_{12} > 0.5 and p_{23} > 0.5, then p_{13} > 0.5 for any strictly increasing \phi with \phi(0)=0.5 [PAGE 3]. P-ELO replaces the rating difference with R_{i,t-1} + q_{ij,t-1} - R_{j,t-1}, introducing an antisymmetric pairwise-advantage matrix Q_t with q_{ij,t} = -q_{ji,t} and q_{ii,t}=0 [PAGE 6]. The joint latent state is W_t = (R_t, Q_t) \in \mathbb{R}^{n+n^2}, though antisymmetry means only n(n-1)/2 entries are independent [PAGE 6-7]. Updates are localized: after i plays j, only R_i, R_j, q_{ij}, and q_{ji} move, governed by K and K_2 respectively [PAGE 6-7].

Gray-zone audit. First, the likelihood-ratio test H_0: K_2 = 0 versus H_1: K_2 \neq 0 places the null on the boundary of [0,+\infty) if K_2 is restricted non-negative, but the authors allow K_2 \in \mathbb{R}, including negative values interpreted as motivational asymmetry or outcome reversal in combat sports [PAGE 8]. Because game results are conditionally independent but not i.i.d., Wilks’ theorem is not analytically verified; the paper uses parametric bootstrapping for empirical critical values [PAGE 8]. Second, sparsity breaks the model: with n=204 Sumo wrestlers there are 5,696 unique matchups, many infrequent, so q_{ij} estimates function as noise and accuracy/AUC barely move [PAGE 18]. MMA is the extreme case: 4,779 of 4,964 matchups appear once, yielding an unstable K_2 = -113.28 and no rejection of H_0 [PAGE 17-19]. Third, accuracy and AUC are blind to calibration: ELO at 90% and P-ELO at 60% both predict the same winner, yet P-ELO may be better calibrated, which the hypothetical value-betting evaluation captures [PAGE 9-10]. Fourth, mElo2_k uses global low-rank updates that diffuse a single match result across all pairs involving a player, whereas P-ELO updates are pairwise-local, avoiding orthogonalization but requiring O(n^2) memory [PAGE 6].

SOURCE_OPERATORS_AND_EQUATIONS:

Formal operators from the paper:
- ELO comparison function: p_{ij,t} = P(i beats j at t) = \phi(R_{i,t-1} - R_{j,t-1}), \phi = logistic [PAGE 4].
- ELO update: R_{i,t} = R_{i,t-1} + K(X_t - p_{ij,t}), R_{j,t} = R_{j,t-1} - K(X_t - p_{ij,t}) [PAGE 2, Appendix B].
- P-ELO comparison function: p_{ij,t} = \phi(R_{i,t-1} + q_{ij,t-1} - R_{j,t-1}) [PAGE 6].
- Antisymmetry constraints: q_{ii,t} = 0, q_{ij,t} = -q_{ji,t} \ \forall i,j,t [PAGE 6].
- Augmented state: W_t = (R_t, Q_t) \in \mathbb{R}^{n+n^2}; row-major flattening Q_t = vec(Q_t) [PAGE 6-7].
- Pairing vector extension: t h_{ij} = e_i - e_j + e_{n+i} - e_{n+j}? Actually paper says e_i - e_j + e_{n+i} + e_{n+j} with dimension n + n^2 [PAGE 6]. I will quote carefully: "we extend the game pairing column vector t g_{ij} to t h_{ij} of the form e_i - e_j + e_{n+i} + e_{n+j}" [PAGE 6]. Hmm the text says e_i - e_j + e_{n+i} + e_{n+j}? Let me check: "we extend the game pairing column vector t gij to thij of the form ei − ej + eni + nj". Yes. I'll cite [PAGE 6].
- Likelihood ELO: \mathcal{L}_{ELO}(K) = \prod_{t=1}^N p_{ij,t}^{X_t}(1-p_{ij,t})^{1-X_t} [PAGE 8].
- Likelihood P-ELO: \mathcal{L}_{P-ELO}(K,K_2) similarly with p_{ij,t} depending on q [PAGE 8].
- LRT statistic: \lambda_n = 2(\ell_{P-ELO} - \ell_{ELO}) [PAGE 8].
- Critical values: Sumo empirical critical value 3.910 [PAGE 18]; Simulation 1 critical value 4.018 [PAGE 13]; Simulation 2 critical value 4.048 [PAGE 14].
- Breakdown/singularity: \chi^2_1 approximation fails when N / \binom{n}{2} is small (e.g., 8 players, 20 games: mean 1.047 but variance 1.518 vs theoretical 2; KS/AD reject) [PAGE 23-24, Table 18]. Boundary K_2=0 invalidates standard Wilks; bootstrap required [PAGE 8]. Units: ratings in Elo points (initial 1,500), K and K_2 dimensionless adjustment speeds, probabilities dimensionless in [0,1] [PAGE 2, 8].

RETROCAUSAL_GENEALOGY:

Lineage: Elo (1978) chess zero-sum ratings [PAGE 2]; Bradley–Terry (1952) static paired comparisons [PAGE 2]; GARCH/ARCH time-series analogy (Engle 1982; Bollerslev 1986) motivating latent volatility-style updates [PAGE 2-3]; Glicko (Glickman 1999, 2001) Bayesian ratings deviation [PAGE 3]; TrueSkill (Herbrich et al. 2006) Gaussian skill with expectation propagation [PAGE 3]; Blade–Chest and generalized Blade–Chest (Chen & Joachims 2016; Gu et al. 2021) adding pairwise parameters to Bradley–Terry [PAGE 3]; Disc Decomposition (Bertrand et al. 2023) additive plus transitive components [PAGE 3]; mElo2_k (Balduzzi et al. 2018) combinatorial Hodge theory cyclic components [PAGE 3-4]; Maystre et al. (2019) continuous-time Gaussian processes for time-varying paired comparisons [PAGE 3].

Multi-week traps: (1) LLM leaderboard switched from ELO to Bradley–Terry in Dec 2023 because LLM strengths were assumed static [PAGE 2]; applying P-ELO there assumes time-varying q_ij that may not exist [PAGE 19]. (2) Sumo has 6 basyo per year, 15 matches each, top division ~40 wrestlers; cross-divisional matches are rare [PAGE 16]. (3) MMA fighters appear infrequently; 4,779 matchups occur once, so pairwise advantages cannot be estimated reliably [PAGE 17]. (4) SC2 has race asymmetry (Terran/Protoss/Zerg) creating context-dependent interactions not captured by scalar ratings alone [PAGE 17]. (5) Initialization R_0 = 1,500, Q_0 = 0 fixes the origin; early-match noise propagates through K [PAGE 8, 13].

RECURSIVE_THEORY_OF_MIND:

Crisis habit regression: after an upset (X=1 against high p), ELO increases the underdog’s rating by K(1-p); P-ELO simultaneously inflates q_{underdog,favorite} by K_2(1-p), creating a recursive belief that the stylistic mismatch persists [PAGE 6-7]. Counter-trap: if encounters are sparse, q_{ij} overfits random variance; the model learns "revenge" momentum from negative K_2 where none exists (MMA K_2 = -113.28) [PAGE 19]. Clock: W_t is path-dependent; current rating summarizes all past results, so a player’s strength is a moving window whose decay rate is set by K [PAGE 2, 8]. In Sumo, a wrestler’s rank division and 15-day basyo create a seasonal clock absent from the latent state [PAGE 16]. Recursive theory of mind in the value-betting frame: bookmaker X prices with ELO; bettor Y prices with P-ELO; Y profits only if Y’s probabilities are better calibrated than X’s, regardless of directional accuracy [PAGE 9-10]. This is a second-order inference: Y models X’s misspecification (transitivity) and exploits it when pairwise advantages are real and frequently observed.

CROSS_LAYER_VETO_ADJUDICATION:

Physical/biomechanical veto: the model ingests only match outcomes; it cannot see handedness (the paper notes left-handed fencers enjoy an advantage over right-handers, Harris 2010 [PAGE 3]), weight class, reach, stance, or injury status. If a Sumo pairing’s advantage is purely stylistic (e.g., oshi-zumo vs. yotsu-zumo), Q_t captures it statistically but offers no causal mechanism [PAGE 16]. SC2 race matchups (T vs P vs Z) introduce asymmetric gameplay that a scalar rating plus pairwise term approximates without representing build orders or map pools [PAGE 17]. Weather veto: all four datasets (Sumo indoor, MMA controlled cage, SC2 digital, LLM text) are effectively weather-invariant; the model has no environmental state, so any sport where weather materially alters p_{ij,t} is outside its domain. Veto condition: when estimated |q_{ij}| is small relative to rating noise or match count < threshold, P-ELO perturbations reduce accuracy (Table 12 indices 17 and 25 show -5% and -4% when ratings are nearly equal) [PAGE 22]. Breakdown regime: K_2 dominates K only when intransitivity is strong and encounters frequent; otherwise K dominates and P-ELO collapses toward ELO [PAGE 4].

RLVR_COUNTERFACTUAL_VETOES:

Scenario 1 (Sparse-pair veto): Verifiable condition: a player pair with m \leq 3 observed encounters. Prediction: P-ELO’s q_{ij} posterior is dominated by initialization noise; out-of-sample accuracy does not exceed ELO and may fall below it. Evidence: MMA has 4,779 single-encounter matchups; P-ELO accuracy 0.547 vs ELO 0.550 and LRT fails to reject H_0 (\lambda_n = 2.77 < 3.820) [PAGE 17-19].

Scenario 2 (Boundary null veto): Verifiable condition: true generative process is transitive (K_2 = 0) but N / \binom{n}{2} is in the small regime (\approx 0.7 appearances per pair). Prediction: parametric bootstrap critical value exceeds the \chi^2_1 nominal 3.84; the empirical null exhibits heavy tails and KS/AD reject \chi^2_1. Evidence: 8 players, 20 games shows mean 1.047, variance 1.518, KS p = 0.0032, AD p = 0.0 for K=0 [PAGE 23-24, Table 18].

Scenario 3 (Negative-K_2 behavioral veto): Verifiable condition: strengths are static and pairwise advantages are absent or positive only (LLM-like). Prediction: MLE K_2 will shrink toward zero or take small positive values; P-ELO accuracy and AUC will be indistinguishable from ELO, and hypothetical value-betting mean profit will not exceed zero systematically. Evidence: LLM MLEs K=8.29, K_2=3.42; accuracy 0.649 for both ELO and P-ELO; AUC 0.708 identical [PAGE 19]. In Sumo, where K_2=19.04 > K=16.02, P-ELO mean profit +$174.08 with 99.65% profitability; in LLM, +$149.30 with 96.8% profitability; in MMA, -$2.33 with 45.72% profitability [PAGE 20].

This looks good. Need to ensure total words >= 1000. Let's estimate: THINK_TRACE ~450, SOURCE ~250, RETRO ~220, RECURSIVE ~220, CROSS ~200, RLVR ~180. Total ~1520. Good.

I should double check that I didn't mention "odds". I used "hypothetical value-betting evaluation" but avoided the word odds. I mentioned "implied probabilities"? I didn't use that. I used "prices" metaphorically? I said "bookmaker X prices with ELO" - that's okay, not "odds". I did not mention spreads, totals, moneylines. Good.

Check page citations: [PAGE 2], [PAGE 3], [PAGE 4], [PAGE 6], [PAGE 7], [PAGE 8], [PAGE 9], [PAGE 10], [PAGE 13], [PAGE 14], [PAGE 16], [PAGE 17], [PAGE 18], [PAGE 19], [PAGE 20], [PAGE 22], [PAGE 23-24]. These correspond to the page markers in the text. Good.

Make sure the XML sections are exactly named.

I will write the final output now.
</NATIVE_REASONING>

<THINK_TRACE>
The Pairwise-Elo (P-ELO) model extends classic Elo by relaxing linear stochastic transitivity. In classic ELO, the win probability for player i against j at time t is p_{ij,t} = P(i beats j at t) = \phi(R_{i,t-1} - R_{j,t-1}), where \phi is the logistic CDF [PAGE 4]. Ratings update via R_i \leftarrow R_i + K(X - p_{ij}) and R_j \leftarrow R_j - K(X - p_{ij}) [PAGE 2]. This structure imposes transitivity: if p_{12} > 0.5 and p_{23} > 0.5, then p_{13} > 0.5 for any strictly increasing \phi with \phi(0) = 0.5 [PAGE 3]. P-ELO replaces the rating difference with R_{i,t-1} + q_{ij,t-1} - R_{j,t-1}, introducing an antisymmetric pairwise-advantage matrix Q_t with q_{ij,t} = -q_{ji,t} and q_{ii,t} = 0 [PAGE 6]. The joint latent state is W_t = (R_t, Q_t) \in \mathbb{R}^{n+n^2}, though antisymmetry means only n(n-1)/2 entries are independent [PAGE 6-7]. Updates are localized: after i plays j, only R_i, R_j, q_{ij}, and q_{ji} move, governed by K and K_2 respectively [PAGE 6-7].

Gray-zone audit. First, the likelihood-ratio test H_0: K_2 = 0 versus H_1: K_2 \neq 0 places the null on the boundary of [0,+\infty) if K_2 is restricted non-negative, but the authors allow K_2 \in \mathbb{R}, including negative values interpreted as motivational asymmetry or outcome reversal in combat sports [PAGE 8]. Because game results are conditionally independent but not i.i.d., Wilks’ theorem is not analytically verified; the paper uses parametric bootstrapping for empirical critical values [PAGE 8]. Second, sparsity breaks the model: with n = 204 Sumo wrestlers there are 5,696 unique matchups, many infrequent, so q_{ij} estimates function as noise and accuracy/AUC barely move [PAGE 18]. MMA is the extreme case: 4,779 of 4,964 matchups appear once, yielding an unstable K_2 = -113.28 and no rejection of H_0 [PAGE 17-19]. Third, accuracy and AUC are blind to calibration: ELO at 90% and P-ELO at 60% both predict the same winner, yet P-ELO may be better calibrated, which the hypothetical value-betting evaluation captures [PAGE 9-10]. Fourth, mElo2_k uses global low-rank updates that diffuse a single match result across all pairs involving a player, whereas P-ELO updates are pairwise-local, avoiding orthogonalization but requiring O(n^2) memory [PAGE 6].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators from the paper:
- ELO comparison function: p_{ij,t} = P(i beats j at t) = \phi(R_{i,t-1} - R_{j,t-1}), \phi = logistic [PAGE 4].
- ELO update: R_{i,t} = R_{i,t-1} + K(X_t - p_{ij,t}), R_{j,t} = R_{j,t-1} - K(X_t - p_{ij,t}) [PAGE 2, Appendix B].
- P-ELO comparison function: p_{ij,t} = \phi(R_{i,t-1} + q_{ij,t-1} - R_{j,t-1}) [PAGE 6].
- Antisymmetry constraints: q_{ii,t} = 0, q_{ij,t} = -q_{ji,t} \ \forall i,j,t [PAGE 6].
- Augmented state: W_t = (R_t, Q_t) \in \mathbb{R}^{n+n^2}; row-major flattening Q_t = vec(Q_t) [PAGE 6-7].
- Pairing vector extension: t h_{ij} = e_i - e_j + e_{n+i} + e_{n+j}, dimension n + n^2 [PAGE 6].
- Likelihood ELO: \mathcal{L}_{ELO}(K) = \prod_{t=1}^N p_{ij,t}^{X_t}(1-p_{ij,t})^{1-X_t} [PAGE 8].
- Likelihood P-ELO: \mathcal{L}_{P-ELO}(K,K_2) similarly with p_{ij,t} depending on q [PAGE 8].
- LRT statistic: \lambda_n = 2(\ell_{P-ELO} - \ell_{ELO}) [PAGE 8].
- Critical values: Sumo empirical critical value 3.910 [PAGE 18]; Simulation 1 critical value 4.018 [PAGE 13]; Simulation 2 critical value 4.048 [PAGE 14].
- Breakdown/singularity: \chi^2_1 approximation fails when N / \binom{n}{2} is small (e.g., 8 players, 20 games: mean 1.047 but variance 1.518 vs theoretical 2; KS/AD reject) [PAGE 23-24, Table 18]. Boundary K_2 = 0 invalidates standard Wilks; bootstrap required [PAGE 8]. Units: ratings in Elo points (initial 1,500), K and K_2 dimensionless adjustment speeds, probabilities dimensionless in [0,1] [PAGE 2, 8].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Lineage: Elo (1978) chess zero-sum ratings [PAGE 2]; Bradley–Terry (1952) static paired comparisons [PAGE 2]; GARCH/ARCH time-series analogy (Engle 1982; Bollerslev 1986) motivating latent volatility-style updates [PAGE 2-3]; Glicko (Glickman 1999, 2001) Bayesian ratings deviation [PAGE 3]; TrueSkill (Herbrich et al. 2006) Gaussian skill with expectation propagation [PAGE 3]; Blade–Chest and generalized Blade–Chest (Chen & Joachims 2016; Gu et al. 2021) adding pairwise parameters to Bradley–Terry [PAGE 3]; Disc Decomposition (Bertrand et al. 2023) additive plus transitive components [PAGE 3]; mElo2_k (Balduzzi et al. 2018) combinatorial Hodge theory cyclic components [PAGE 3-4]; Maystre et al. (2019) continuous-time Gaussian processes for time-varying paired comparisons [PAGE 3].

Multi-week traps: (1) LLM leaderboard switched from ELO to Bradley–Terry in Dec 2023 because LLM strengths were assumed static [PAGE 2]; applying P-ELO there assumes time-varying q_{ij} that may not exist [PAGE 19]. (2) Sumo has 6 basyo per year, 15 matches each, top division ~40 wrestlers; cross-divisional matches are rare [PAGE 16]. (3) MMA fighters appear infrequently; 4,779 matchups occur once, so pairwise advantages cannot be estimated reliably [PAGE 17]. (4) SC2 has race asymmetry (Terran/Protoss/Zerg) creating context-dependent interactions not captured by scalar ratings alone [PAGE 17]. (5) Initialization R_0 = 1,500, Q_0 = 0 fixes the origin; early-match noise propagates through K [PAGE 8, 13].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: after an upset (X=1 against high p), ELO increases the underdog’s rating by K(1-p); P-ELO simultaneously inflates q_{underdog,favorite} by K_2(1-p), creating a recursive belief that the stylistic mismatch persists [PAGE 6-7]. Counter-trap: if encounters are sparse, q_{ij} overfits random variance; the model learns “revenge” momentum from negative K_2 where none exists (MMA K_2 = -113.28) [PAGE 19]. Clock: W_t is path-dependent; current rating summarizes all past results, so a player’s strength is a moving window whose decay rate is set by K [PAGE 2, 8]. In Sumo, a wrestler’s rank division and 15-day basyo create a seasonal clock absent from the latent state [PAGE 16]. Recursive theory of mind in the value-betting frame: bookmaker X prices with ELO; bettor Y prices with P-ELO; Y profits only if Y’s probabilities are better calibrated than X’s, regardless of directional accuracy [PAGE 9-10]. This is a second-order inference: Y models X’s misspecification (transitivity) and exploits it when pairwise advantages are real and frequently observed.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical veto: the model ingests only match outcomes; it cannot see handedness (the paper notes left-handed fencers enjoy an advantage over right-handers, Harris 2010 [PAGE 3]), weight class, reach, stance, or injury status. If a Sumo pairing’s advantage is purely stylistic (e.g., oshi-zumo vs. yotsu-zumo), Q_t captures it statistically but offers no causal mechanism [PAGE 16]. SC2 race matchups (T vs P vs Z) introduce asymmetric gameplay that a scalar rating plus pairwise term approximates without representing build orders or map pools [PAGE 17]. Weather veto: all four datasets (Sumo indoor, MMA controlled cage, SC2 digital, LLM text) are effectively weather-invariant; the model has no environmental state, so any sport where weather materially alters p_{ij,t} is outside its domain. Veto condition: when estimated |q_{ij}| is small relative to rating noise or match count is below threshold, P-ELO perturbations reduce accuracy (Table 12 indices 17 and 25 show -5% and -4% when ratings are nearly equal) [PAGE 22]. Breakdown regime: K_2 dominates K only when intransitivity is strong and encounters frequent; otherwise K dominates and P-ELO collapses toward ELO [PAGE 4].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Sparse-pair veto): Verifiable condition: a player pair with m \leq 3 observed encounters. Prediction: P-ELO’s q_{ij} posterior is dominated by initialization noise; out-of-sample accuracy does not exceed ELO and may fall below it. Evidence: MMA has 4,779 single-encounter matchups; P-ELO accuracy 0.547 vs ELO 0.550 and LRT fails to reject H_0 (\lambda_n = 2.77 < 3.820) [PAGE 17-19].
Scenario 2 (Boundary null veto): Verifiable condition: true generative process is transitive (K_2 = 0) but N / \binom{n}{2} is in the small regime (\approx 0.7 appearances per pair). Prediction: parametric bootstrap critical value exceeds the \chi^2_1 nominal 3.84; the empirical null exhibits heavy tails and KS/AD reject \chi^2_1. Evidence: 8 players, 20 games shows mean 1.047, variance 1.518, KS p = 0.0032, AD p = 0.0 for K=0 [PAGE 23-24, Table 18].
Scenario 3 (Negative-K_2 behavioral veto): Verifiable condition: strengths are static and pairwise advantages are absent or positive only (LLM-like). Prediction: MLE K_2 will shrink toward zero or take small positive values; P-ELO accuracy and AUC will be indistinguishable from ELO, and hypothetical value-betting mean profit will not exceed zero systematically. Evidence: LLM MLEs K=8.29, K_2=3.42; accuracy 0.649 for both ELO and P-ELO; AUC 0.708 identical [PAGE 19]. In Sumo, where K_2=19.04 > K=16.02, P-ELO mean profit +$174.08 with 99.65% profitability; in LLM, +$149.30 with 96.8% profitability; in MMA, -$2.33 with 45.72% profitability [PAGE 20].
</RLVR_COUNTERFACTUAL_VETOES>