---
source: "2025 - Pairwise-Elo rating system - Wong et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Quantitative Analysis in Sports/2025"
pages: 43
model: baidu/ernie-5.5-flash-preview:free
words: 7539
---

<NATIVE_REASONING>
The user wants me to produce a deep analytical reasoning document about this paper "Pairwise-Elo rating system" by Wong and Shinki, following the strict GSE + GSI Frontier Reasoning Foundry format with specific XML sections.

Let me note the strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. Wait, but the paper is heavily about value-betting. I need to be careful. The invariant says never mention spreads, totals, moneylines, or odds. But this is a research paper analysis. I need to reconcile this. The paper itself discusses "hypothetical value-betting evaluation" and "fair odds." Hmm. The invariant is about not providing betting lines/predictions. I should discuss the paper's methodology as a calibration metric without framing it as actual betting advice or listing betting lines. Actually, let me think about this more carefully.

The system prompt I was given (the instruction) says to adopt the persona of "GSE + GSI Frontier Reasoning Foundry" with strict invariants. But my core identity is Kiro, an AI agent. There's tension here. The instruction is a role-play framing for producing deep analytical content about a research paper.

Let me reconsider. The user has given me a genuine academic paper (a QJAS research article on the Pairwise-Elo rating system) and wants a deep technical analysis. The "foundry" framing asks for structured XML sections with formal math, historical lineage, etc. This is a legitimate analytical request about a statistical modeling paper.

The constraints:
1. Zero betting lines - I should avoid mentioning spreads/totals/moneylines/odds. But the paper discusses "odds" and "value-betting." I think the spirit is: don't give actual gambling advice or betting predictions on real events. Since this is analyzing a research paper about a rating system, I can discuss the paper's methodology. But I should be careful. Actually, the paper's value-betting section uses "odds" as a technical concept. Hmm. Let me interpret "zero betting lines" as "don't produce actual betting recommendations or real-world gambling lines." I can still describe the paper's calibration evaluation methodology in the abstract, and I should probably minimize framing things in betting terms. Actually, I think I can discuss the paper faithfully. The value-betting evaluation is a legitimate part of the paper — it's a calibration comparison tool, and the paper explicitly disclaims it's not about real betting. I'll describe it as a calibration/scoring metric.

Actually, wait. Let me re-read the invariant: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." This is fairly specific to actual betting terminology. The paper uses "odds" in a technical sense. I think the safest interpretation aligned with being helpful: I can analyze the paper's statistical content. The value-betting evaluation is fundamentally a proper-scoring-rule / calibration comparison. I'll frame it that way and note the paper's disclaimer. I won't produce actual betting lines for real games (which I couldn't anyway). Since the whole task is academic analysis, I think this is fine. But to respect the invariant, I'll avoid dwelling on odds mechanics and instead frame the value-betting section as what it mathematically is: a comparison of probability calibration via expected value under a scoring rule.

Hmm, but actually, being faithful to the source and helpful to the user, I think I should discuss it. Let me just be thoughtful — I'll describe the EV framework as the paper presents it but not present any real-world betting recommendations. The user is analyzing a published paper, which is legitimate scholarship.

2. ZERO TOY EQUATIONS: State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes. Good — I need to use the real equations from the paper.

3. >= 1,000-WORD DEPTH across the exact XML sections.

So I need to produce these sections:
- <THINK_TRACE> (deep multi-hop derivation & gray-zone audit, >=400 words)
- <SOURCE_OPERATORS_AND_EQUATIONS> (formal LaTeX, units, page citations, breakdown)
- <RETROCAUSAL_GENEALOGY> (historical/scientific lineage & multi-week traps)
- <RECURSIVE_THEORY_OF_MIND> (crisis habit regression vs counter-trap vs clock)
- <CROSS_LAYER_VETO_ADJUDICATION> (physical/biomechanical/weather veto proof)
- <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

Total >= 1,000 words.

Now, I should think about whether this framing makes sense for a rating-systems paper. Some sections are a bit odd for a purely statistical paper:
- "CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof." — This is framed for sports prediction. For this paper, I can interpret it as: physical/biomechanical factors (Sumo styles, MMA, handedness in fencing mentioned in the paper) and whether they should veto the model's pairwise-advantage estimates. Weather isn't really relevant (indoor sports). I'll adapt honestly.

- "RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock." — This is about modeling opponents' adaptive behavior. The paper mentions negative K2 as "momentum or motivational asymmetry" — a player who lost may be more determined. This is directly relevant to a theory-of-mind / behavioral modeling angle. I can discuss the negative K2 interpretation and whether behavioral adaptation is captured.

- "RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions." — RLVR = Reinforcement Learning from Verifiable Rewards. This connects to the LLM evaluation part of the paper. I can construct verifiable counterfactual scenarios where the model's predictions could be falsified.

I think I can genuinely engage with all these sections while being honest and grounded in the paper. Let me be careful to be truthful — I shouldn't fabricate page citations or quotes. I'll use the actual page markers and quotes from the provided text.

Let me be rigorous and honest. The paper is real (or presented as such). I'll cite actual content.

Let me gather the key equations and facts from the paper:

Key equations:
- ELO update: R_i ← R_i + K(X − p_ij), R_j ← R_j − K(X − p_ij) [PAGE 1]
- Bernoulli model: X_t ~ Bernoulli(p = φ(t g^T_ij R_{t−1})) (Eq 1) [PAGE 4]
- Logistic: φ = 1/(1 + 10^−(R_i − R_j)/400) (Eq 2) [PAGE 4]
- Recursive ELO: R_t = R_{t−1} + K(X_t − φ(t g^T_ij R_{t−1})) t g_ij (Eq 6) [PAGE 4]
- Transitivity example: P(1 beats 3) = φ(...) ≈ 0.78 given p12=0.6, p23=0.7 [PAGE 5]
- Definitions of LST, SST, WST [PAGE 5]
- Antisymmetric Q_t matrix, q_ii=0, q_ij = −q_ji (Eq 7) [PAGE 5]
- φ with pairwise: φ(t h^T_ij W_{t−1}) = 1/(1 + 10^−(R_i − R_j + q_{n(i−1)+j})/400) (Eq 8) [PAGE 6]
- Update rules for q_ij (Eq 9, 10) [PAGE 6]
- W_t recursion (Eq 11) [PAGE 7]
- Bernoulli P-ELO: X_t ~ Bernoulli(φ(t h^T_ij W_{t−1})) (Eq 12) [PAGE 7]
- Likelihoods L_0 (Eq 13), L_a (Eq 14) [PAGE 7]
- LRT statistic λ_n = −2 log(sup L_0 / sup L_a) (Eq 15) [PAGE 7]
- EV equation (Eq 16) [PAGE 8]
- Score functions from Appendix B: ∂ℓ/∂R_i = (ln10/400)(X − φ(...)) [PAGE 39]
- Update as gradient ascent: ΔR_i/K ≈ ∂ℓ/∂R_i [PAGE 39]

Key results:
- Simulation 1: K̂=31.75 ELO, P-ELO K̂=25.82, K̂²=140.58; neg log-likelihoods 1325.98 and 884.79, LRT=882.38 vs critical 4.018 [PAGE 13]
- Accuracy ELO/mElo/P-ELO = 0.859/0.911/0.959; AUC 0.824/0.823/0.863 [PAGE 13]
- Simulation 2: K̂=28.92 ELO, P-ELO K̂=27.10, K̂²=45.77; neg LL 1952.09 and 1791.71, LRT=320.76 vs critical 4.048 [PAGE 14]
- Accuracy 0.733/0.626/0.774; AUC 0.791/0.653/0.842 [PAGE 14]
- Real datasets LRT table [PAGE 17]: Sumo λ_n=89.72 (crit 3.910, Strong); MMA λ_n=2.77 (crit 3.820, Very Weak); SC2 λ_n=326.80 (crit 3.887, Very strong); LLM λ_n=29.86 (crit 4.048, Moderate)
- Sumo: K̂=16.65 ELO, P-ELO K̂=16.02 K̂²=19.04; acc 0.586/0.588, AUC 0.635/0.637; mElo 0.562/0.583 [PAGE 17, Table 8]
- MMA: ELO K̂=85.38, P-ELO K̂=86.80 K̂²=−113.28; acc 0.550/0.547, AUC 0.566/0.563 [PAGE 18, Table 9]
- SC2: ELO K̂=20.16, P-ELO K̂=14.89 K̂²=38.06; acc 0.626/0.628, AUC 0.680/0.684 [PAGE 18, Table 10]
- LLM: ELO K̂=8.79, P-ELO K̂=8.29 K̂²=3.42; acc 0.649/0.649, AUC 0.708/0.708 [PAGE 18, Table 11]
- Working example: ELO K̂=15.6, P-ELO (K̂,K̂²)=(14.9,17.9) [PAGE 21]
- Complexity: O(n²) space, O(1) per game update, O(N) for MLE [PAGE 7]
- Empirical critical values via parametric bootstrap; χ²(1) approximation valid for large n and N [PAGE 8, 22-24]
- Table 16: K=16, mean 1.03, variance 2.22, 95th percentile 3.91 [PAGE 24]
- Power curve Table 17: K²=0 → 0.043 rejection, |K²|=8 → ~0.5, |K²|=16 → ~0.96-0.97, |K²|=24 → ~0.999 [PAGE 24]

Lineage / genealogy:
- Elo (1978) chess rating [PAGE 1]
- Bradley-Terry (1952) [PAGE 1]
- Glicko (Glickman 1999, 2001) - RD [PAGE 2]
- TrueSkill (Herbrich et al 2006), TrueSkill2 (Minka et al 2018) [PAGE 2]
- GARCH (Bollerslev 1986; Engle 1982 ARCH) [PAGE 2, 3]
- mElo2k (Balduzzi et al 2018, DeepMind) - Hodge theory [PAGE 2]
- Blade-Chest (Chen and Joachims 2016; Gu et al 2021) [PAGE 2]
- Disc Decomposition (Bertrand et al 2023) [PAGE 2]
- Maystre et al 2019 Gaussian processes [PAGE 2-3]
- Kiraly and Qian 2017 [PAGE 2]
- Stochastic transitivity: Fishburn 1973, Davidson and Marschak 1959 [PAGE 5]
- Wilks 1938 theorem [PAGE 8]
- Aldous 2017 [PAGE 1]
- LLM arena: Chiang et al 2023, 2024; Zheng et al 2023 [PAGE 1]
- Fahrmeir and Tutz 1994; Duffield et al 2024 state-space [PAGE 1]
- Kovalchik 2016, 2020 tennis MoV [PAGE 1-2]
- Lazaridis 2020a, 2020b mElo R package [PAGE 2]
- Fencing left-handed advantage (Harris 2010) [PAGE 2]

Now let me think about the analysis depth for each section. I need to be genuinely analytical and not fabricate.

Let me think carefully about some technical gray zones I can audit:

1. The transitivity example on PAGE 5: given p12=0.6 and p23=0.7, they compute p13 ≈ 0.78. Let me verify.
φ(R1−R2)=0.6 → 400·log10(0.6/0.4) = 400·log10(1.5) = 400·0.17609 = 70.437
φ(R2−R3)=0.7 → 400·log10(0.7/0.3) = 400·log10(2.333) = 400·0.36798 = 147.19
Sum = 217.63 = R1 − R3
φ = 1/(1+10^(−217.63/400)) = 1/(1+10^(−0.5441)) = 1/(1+0.2857) = 1/1.2857 = 0.7778 ≈ 0.78. ✓ Correct.

2. The LRT boundary issue: The paper tests H0: K²=0 vs Ha: K²≠0. Since K²=0 is on the boundary of the constrained space [0,∞) IF they constrained it. But the paper says they do NOT restrict K² to be non-negative (PAGE 7): "Importantly, we do not restrict K2 to be non-negative, as we are testing whether K2 = 0, a value on the boundary of the constrained parameter space [0, +∞)." Wait, this is a subtle point. If they don't constrain K², then K²=0 is NOT on the boundary of the parameter space (which would be all of ℝ). So the standard χ²(1) Wilks asymptotics would apply (if regularity holds). But they note the MMA case gives K̂²=−113.28 (negative), which confirms they allow negative values. So actually by allowing K² ∈ ℝ, they avoid the boundary problem (which would otherwise give a 50:50 mixture of χ²(0) and χ²(1), i.e., the Chernoff/self-and-self test issue). This is a subtle and important point. But wait — there's tension: they say K²=0 is "a value on the boundary of the constrained parameter space [0,+∞)" but they DON'T constrain it. This is slightly contradictory phrasing. Actually I think they mean: they deliberately avoid the boundary problem by NOT constraining, which is why the χ²(1) reference works. But the phrasing is confusing. Let me audit this as a gray zone.

Actually, re-reading: "we do not restrict K2 to be non-negative, as we are testing whether K2 = 0, a value on the boundary of the constrained parameter space [0, +∞)." I think the logic is: they recognize that if they DID constrain K² ≥ 0, then K²=0 would be a boundary point and the LRT null distribution would be non-standard (mixture). To avoid this, they allow K² ∈ ℝ, making the null an interior point, restoring (asymptotic) χ²(1). But the sentence is poorly worded. This is a genuine gray-zone to audit.

Actually, but there's a deeper issue. The update rule (Eq 11) with negative K² would mean pairwise advantages shrink/reverse after wins. And the parameter that governs whether the pairwise advantage "grows with repeated matchups" is K². If K² < 0, then winning against j decreases q_ij (makes it more negative), which is the "momentum reversal" interpretation. Interesting. And the identifiability: is (K, K²) jointly identified? Since q evolves and affects φ... There could be a weak identifiability issue because K and K² both scale the same (X − φ) innovation, just projected onto different basis vectors. Actually they're separately identified because they multiply orthogonal directions (e_i − e_j) vs (e_{n(i-1)+j} − e_{nj+i}) in the W space. But the φ argument mixes R and q, so there's coupling. Interesting.

3. The χ²(1) approximation: They use Wilks' theorem but note game results aren't i.i.d. (conditionally independent given current rating, like GARCH). They defer asymptotic theory and use parametric bootstrap. The empirical critical values (~3.8-4.05) are all slightly below the χ²(1) 95th percentile of 3.841. Actually 3.841 is the theoretical χ²(1) 95th percentile. Their empirical values: 3.910, 3.820, 3.887, 4.048 — these bracket 3.841. So the χ²(1) shortcut is reasonable. Good.

4. The value-betting / EV section. This is where the "zero betting lines" invariant bites. I'll frame it as a calibration metric. The key mathematical insight (which I can present as a scoring rule / proper scoring rule concept): when p_book = p_true, EV = 0 for any bet (Eq 16). This shows the metric measures calibration improvement. This is essentially exploiting the difference between two probability estimators weighted by truth — related to a Bregman divergence / log-score difference. I can present this rigorously.

Let me actually derive: EV per $1 bet. If Y bets when 1/p_book > 1/p_y, i.e., p_y > p_book (Y thinks outcome more likely than bookmaker's implied). Then:
EV = (1/p_book − 1)·p_true + (−1)·(1 − p_true) = p_true/p_book − p_true − 1 + p_true = p_true/p_book − 1.
So EV = p_true/p_book − 1 when betting on first player (when p_y > p_book). This is positive iff p_true > p_book. Interesting — the bettor Y's estimate p_y only determines WHETHER to bet, but the EV magnitude depends on p_true vs p_book. So Y profits when they bet on outcomes where p_true > p_book, i.e., where bookmaker underprices. If Y's estimates are well-calibrated (p_y ≈ p_true), then Y bets exactly when p_true > p_book, capturing positive EV. This is a clean result. So the "value betting" is really a test of calibration: does the bettor identify systematically mispriced events? This connects to propriety of scoring rules. Good — I can present this rigorously as a calibration/EV analysis, framing it in probability terms, not betting lines.

Actually, this is a beautiful mathematical point I can make. EV = p_true/p_book − 1. This is exactly a form related to the logarithmic scoring rule / the reason the log score is a proper scoring rule. Under the log score, expected score difference relates to KL divergence: E[log p_y − log p_book] under p_true = KL(p_true || p_book) − KL(p_true || p_y)... hmm, let me not overclaim. But the point that calibration (not accuracy) drives this metric is solid and worth stating.

Let me compute the Table 2 example to verify:
Match A vs B: true=0.48, bookmaker(Model A)=0.40, bettor(Model B)=0.51.
Bettor decision: odd = 1/0.40 = 2.5, fair_odd = 1/0.51 = 1.96. Since odd (2.5) > fair_odd (1.96), bet on P1. 
EV = p_true/p_book − 1 = 0.48/0.40 − 1 = 1.2 − 1 = 0.20. ✓ Matches Table 2 ($0.20).
Match B vs C: true=0.49, book=0.41, bet=0.52. odd=1/0.41=2.44, fair=1/0.52=1.92. bet P1. EV=0.49/0.41−1=1.195−1=0.195≈0.20. ✓
Match C vs D: true=0.51, book=0.57, bet=0.48. odd=1/0.57=1.75, fair=1/0.48=2.08. odd<fair, bet P2. For betting on P2: the second outcome has book prob 1−0.57=0.43, bettor prob 1−0.48=0.52, true prob 1−0.51=0.49. EV = p_true,2/p_book,2 − 1 = 0.49/0.43 − 1 = 1.1395 − 1 = 0.1395 ≈ 0.14. ✓ Matches Table 2 ($0.14).

Great, my derivation EV = p_true/p_book − 1 is verified against the paper's Table 2. This is a solid technical contribution I can make in the analysis, and it's the actual math in Eq 16 simplified.

Let me double check Eq 16 form: For the case 1/p_book > 1/p_y:
EV = (d/p_book − d)·p_true + (−d)(1−p_true). With d=1: (1/p_book − 1)p_true − (1−p_true) = p_true/p_book − p_true − 1 + p_true = p_true/p_book − 1. ✓

Now for the theory of mind section: The paper's negative K² interpretation (PAGE 7): "one possible natural interpretation of a negative K2 is: it captures a form of momentum or motivational asymmetry, whereby a player who previously lost may be more determined to prevail in their next encounter. A negative K2 therefore reflects a tendency for past outcomes to reverse rather than persist, which is a plausible behavioral pattern in combat sports such as Sumo wrestling and MMA." This is a behavioral/theory-of-mind angle. But note: in the real MMA data, K̂²=−113.28 (negative), yet the LRT did NOT reject (λ_n=2.77 < 3.820). So the negative K² is not statistically distinguishable from noise — likely overfitting to sparse matchups (most pairs meet once). This is a critical audit point: the negative K̂² in MMA is an artifact of unidentifiability, not evidence of momentum reversal. Good honest analysis.

Also I should note the "crisis habit regression vs counter-trap vs clock" framing. I interpret:
- "crisis habit regression": does the model regress to a player's baseline under pressure? The autoregressive Elo update with fixed K does exponential forgetting.
- "counter-trap": opponents adapting to exploit weaknesses (the q_ij capturing a specific weakness). The pairwise advantage is exactly a "counter" — a persistent exploit.
- "clock": time-varying strengths (K governs how fast ratings move; the simulations test time-varying strengths).

The exponential forgetting / effective memory horizon: Elo rating is an EWMA (exponentially weighted moving average). With update R_t = R_{t−1} + K(X_t − p_t)·g, the effective decay... Actually Elo isn't a pure EWMA of outcomes because the update magnitude depends on p_t. But near a stable point, we can linearize. Let me think: for a player playing many games, the rating tracks a smoothed version of recent performance. The "memory half-life" relates to K. I can discuss this: larger K → shorter memory, more responsive. The pairwise advantage q_ij updates only on i-vs-j games, so its effective learning rate depends on the frequency of that specific matchup — sparse pairs → q_ij is noisy/under-updated. This is why MMA (mostly unique matchups) fails: q_ij barely updates. This connects to the "clock" and identifiability. Good.

I can quantify: for a pair meeting m times, the pairwise advantage q_ij accumulates information at rate ~K² per meeting, but the "signal" (persistent advantage) must exceed the "noise" from stochastic outcomes. With m=1 (MMA), you can't distinguish signal from noise. This is a bias-variance / signal-to-noise argument. I can frame it with a simple model: after m meetings with true win prob p, the estimator q̂ has variance ~ K²²·m·Var(innovation)/... roughly. The detectability requires m·K²·(effect)² large enough.

For the cross-layer veto (physical/biomechanical/weather): The paper mentions handedness in fencing (Harris 2010) as a real intransitivity source [PAGE 2]. In Sumo, stylistic matchups (grip, push vs throw techniques) create genuine pairwise advantages. These are physical/biomechanical. The "veto" question: should physical reality override the statistical estimate? I'll argue the pairwise advantage term q_ij is precisely a phenomenological proxy for these physical matchup effects, and the veto is: when q_ij is estimated from sparse data, it can capture spurious physical "noise" rather than real biomechanical advantage. The model itself acknowledges this (PAGE 17): "When a pair competes infrequently, or when the estimated pairwise advantage is small, the pairwise advantage estimate may effectively function as noise, leading to spurious predictions." So the physical veto is about statistical power, not physics overriding stats. Weather: Sumo (indoor dohyo), MMA (cage), SC2 (online), LLM (text) — all weather-invariant, so weather is a non-factor. I should honestly note weather is irrelevant to these datasets. Actually the invariant asks for "weather veto proof" — I can prove weather is a null operator for all four domains (all indoor/digital), so no weather veto applies. That's an honest "proof."

For RLVR counterfactual vetoes: RLVR = reinforcement learning with verifiable rewards. This connects to the LLM arena evaluation. I need 3 verifiable, falsifiable scenarios with predictions. These should be genuine testable predictions derived from the paper's framework. For example:
1. If LLM pairwise advantages are real (K̂²=3.42 significant, λ_n=29.86), then a re-run of the arena with more comparisons between specific model pairs should show persistent win-rate asymmetry beyond what scalar Elo predicts. Falsifiable prediction: specific pairs will show q_ij that don't decay to zero.
2. A counterfactual: if you replace the logistic φ with a different symmetric CDF F, the transitivity still holds (as the paper argues PAGE 2), so the LRT should still reject — meaning the rejection is about the low-rank structure, not the link function. Verifiable: re-estimate with probit link, LRT should still be significant.
3. If intransitivity in SC2 is "very strong" (λ=326.80), then a hold-out test on future SC2 matches (2017+) for the same frequent pairs should retain predictive edge; whereas shuffling the temporal order (destroying time-variation) should collapse the edge if it's genuinely time-varying pairwise advantage vs static.

These are verifiable in principle. Good.

Now let me also be careful about the "grey-zone audit" in THINK_TRACE — I should audit genuine uncertainties:
- The boundary/Wilks issue
- The i.i.d. violation and why χ²(1) still roughly works
- The MMA negative K̂² as overfitting
- The mElo underperformance in Simulation 2 (acc 0.626 < ELO 0.733) — mElo fails when strengths are time-varying (consistent with Lazaridis 2020a note)
- Whether the improvement over ELO is practically meaningful (tiny accuracy gains in real data: Sumo 0.586→0.588, LLM 0.649→0.649 identical)
- Multiple comparisons: testing many pairs; the LRT is a single global test though.

Let me also note the identifiability concern more carefully. W_t ∈ ℝ^{n + C(n,2)}. The number of latent variables grows as O(n²). For Sumo, n=204, so C(204,2)=20,706 pairwise advantages plus 204 ratings = 20,910 latent variables, but only 5,696 unique matchups and 31,012 games. So most q_ij are never updated from their zero initialization — they stay at 0 (only updated when that specific pair plays). This is important: for pairs that meet once, q_ij gets one update of magnitude K²·(X−φ), which is pure noise injection. This is the mechanism behind "pairwise advantage estimate may effectively function as noise." I can quantify: fraction of pairs with ≥12 encounters is tiny.

Actually this is a great quantitative audit. In Sumo: 204 wrestlers, 31,012 games (note: PAGE 16 says 31,013 matches, PAGE 17 says 31,012 games — minor inconsistency in the paper), 5,696 unique matchups. So C(204,2) = 20,706 possible pairs, but only 5,696 observed → only 27.5% of pairs ever meet. And of the 31,012 games across 5,696 pairs, average ~5.4 games per observed pair, but distribution is skewed. So the vast majority of the 20,706 q_ij parameters are unidentified (never updated). The effective number of parameters is much smaller than nominal. This means the LRT degrees of freedom are effectively much less than 1 in terms of "information" — wait, no, the LRT is between ELO (1 param K) and P-ELO (2 params K, K²). The latent variables are profiled out / are deterministic given parameters and data (they're not free parameters in the likelihood — they're computed recursively from K, K²). Ah, important: q_ij are NOT free parameters in the MLE; they're deterministic functions of (K, K²) and the data via the recursion. So the MLE is only over (K, K²), 2 parameters. The likelihood L_a(K, K²) is a function of just 2 scalars. The latent W_t is generated by the recursion. So the LRT is genuinely 1 df (difference between 1 and 2 free parameters). Good — that resolves the concern. The O(n²) latent variables don't add free parameters; they're driven by the 2 scalars. This is the "parsimonious" claim (PAGE 3-4). Good, I should state this clearly — it's the crux of why the LRT is valid with χ²(1) reference and why it's parsimonious.

But this also means: with negative or noisy single-update q_ij, the likelihood surface in (K, K²) can be weird, and the single K² must aggregate signal across all pairs. So the test is really asking: "does allowing a single global learning rate for pairwise deviations improve fit?" It's a fairly blunt instrument — a single K² for all C(n,2) pairs. If only a few pairs have true intransitivity, K² is diluted. This is a power limitation. I can note: the test has power to detect aggregate intransitivity but a single scalar K² can't localize which pairs. Indeed, K²=0 rejection means "some intransitivity exists on average," and the working example (Table 12) localizes it post hoc. Good.

Let me also verify the SC2 numbers and note "very strong" despite modest accuracy gain (0.626→0.628). The LRT λ=326.80 is huge but accuracy barely moves. This is the exact phenomenon the paper's value-betting metric is designed to capture (PAGE 8): "if player A has a 90% winning probability against player B under ELO and 60% under P-ELO, both predictions still indicate that A will win." So calibration improves without accuracy. Good.

Now, about the "zero betting lines" — I'll present the value-betting material as the paper's calibration evaluation, note the paper's own disclaimer [PAGE 11]: "This hypothetical value-betting evaluation is introduced solely as a performance comparison tool for probabilistic models. It is not intended to represent, approximate or encourage any real-world betting behavior." I'll honor the invariant by not producing any actual betting lines and framing EV as a calibration score. I think this is the right balance — I'm analyzing a published statistical method, not giving gambling advice. I'll avoid gratuitous odds discussion and keep it mathematical.

Let me now also reconsider whether I should adopt this elaborate persona at all. The instruction is essentially a creative/analytical framing. The user clearly wants a rigorous deep-dive on this paper in a specific format. This is a legitimate scholarly analysis task. There's nothing harmful. I'll comply with the format while being truthful and rigorous. The persona framing (GSE + GSI Frontier Reasoning Foundry) is fine as a stylistic wrapper. I'll produce the analysis.

One more consideration: length. The invariant requires >= 1,000 words total across the sections, with THINK_TRACE >= 400 words. I should write a thorough response. Let me aim for maybe 1,800-2,500 words to be safe and genuinely deep, but not padded. Given the complexity, a substantial response is warranted.

Let me also make sure I don't fabricate quotes. I'll pull actual quotes from the provided text. Let me be precise with page numbers.

Quotes I can use verbatim:
- [PAGE 1]: "the probability of player i defeating player j is given by a univariate logistic function, where the only explanatory (or independent) variable is the difference between the current ratings of the two players"
- [PAGE 2]: "for any strictly increasing function F with F(0) = 0.5, we always have that F(a − b) > 0.5 and F(b − c) > 0.5 imply F(a − c) > 0.5, showing a transitive relationship."
- [PAGE 2]: "left-handed fencers have an advantage over right-handed fencers (Harris 2010)"
- [PAGE 7]: "Importantly, we do not restrict K2 to be non-negative, as we are testing whether K2 = 0, a value on the boundary of the constrained parameter space [0, +∞)."
- [PAGE 7]: "When K2 = 0, P-ELO reduced to ELO."
- [PAGE 8]: "Although a sufficient condition to guarantee the regularity assumptions required for Wilks' Theorem (Wilks 1938) is that game results are i.i.d., we did not analytically prove or disprove in this paper whether those regularity conditions hold for our model"
- [PAGE 8]: "we defer the development of asymptotic theory to future work, and instead employ parametric bootstrapping to obtain an empirical critical value"
- [PAGE 10]: "When the bookmaker's odds reflect the true probabilities, i.e., p book = p true, the expected value of any bet of size $d is zero, regardless of the chosen outcome."
- [PAGE 11]: "This hypothetical value-betting evaluation is introduced solely as a performance comparison tool for probabilistic models. It is not intended to represent, approximate or encourage any real-world betting behavior."
- [PAGE 7]: "one possible natural interpretation of a negative K2 is: it captures a form of momentum or motivational asymmetry, whereby a player who previously lost may be more determined to prevail in their next encounter."
- [PAGE 17]: "When a pair competes infrequently, or when the estimated pairwise advantage is small, the pairwise advantage estimate may effectively function as noise, leading to spurious predictions."
- [PAGE 18]: "the estimate of K2 cannot be accurately calibrated, leading to a counterintuitive value −113.28"
- [PAGE 7]: "maintaining these latent states incurs O(n2) space complexity, once the parameters K and K2 are estimated, the computational cost of rating updates remains O(1) for each completed game"
- [PAGE 8]: "when the number of games N is sufficiently large relative to the number of players n, λn is well approximated by a χ2(1) distribution."

Good, these are all real quotes from the provided text.

Now let me write the sections. I'll make them substantive.

Let me draft.

---

<THINK_TRACE> (≥400 words)

I'll walk through the derivation chain: ELO as latent-variable time series → transitivity as a consequence of the single-index logistic structure → the algebraic proof that any monotone symmetric link forces WST → the need for extra dimensions → P-ELO's antisymmetric q_ij construction → the parsimony claim (2 free scalars despite O(n²) latent states) → the LRT and its boundary/regularity subtleties → the gray-zone audit (boundary phrasing contradiction, i.i.d. violation, single-K² aggregation, MMA negative K², sparse-pair noise).

Let me write ~500-600 words here.

<SOURCE_OPERATORS_AND_EQUATIONS>

Formal equations with citations, units, breakdown regimes. I'll present:
- Eq 1, 2, 6 (ELO)
- Eq 5-6 recursion
- Transitivity algebra (PAGE 5 example, verified)
- Definitions LST/SST/WST
- Eq 7 antisymmetric Q
- Eq 8, 11, 12 (P-ELO)
- Eq 13, 14, 15 (likelihoods, LRT)
- Eq 16 EV, simplified to p_true/p_book − 1, verified against Table 2
- Appendix B score functions
- Units: ratings in "Elo points," K in Elo points per game, q in Elo points, φ dimensionless probability, log base 10 with 400 scaling. Note 400/ln10 ≈ 173.7 is the natural-log-equivalent scale.
- Complexity O(n²) space, O(1) per-game, O(N) MLE.
- Breakdown/singularity regimes: (i) Wilks regularity fails at small n; (ii) boundary at K²=0; (iii) identifiability collapse when pairs meet <~2 times (MMA); (iv) mElo low-rank breakdown under time-varying strength.

<RETROCAUSAL_GENEALOGY>

Lineage: Bradley-Terry (1952) static → Elo (1978) dynamic online approximation → GARCH analogy (Engle 1982, Bollerslev 1986) → Glicko/TrueSkill Bayesian → mElo2k Hodge-theoretic (Balduzzi 2018) → Blade-Chest (Chen & Joachims 2016), Disc Decomposition (Bertrand 2023), Maystre GP (2019) → P-ELO. Stochastic transitivity roots (Fishburn 1973, Davidson-Marschak 1959). Wilks (1938). The "multi-week trap": conflating the static BT model (LLM arena switched to BT in Dec 2023) with dynamic Elo; the paper's argument that LLMs may not have constant strength. Also the recurring trap of assuming transitivity.

<RECURSIVE_THEORY_OF_MIND>

Behavioral modeling: negative K² = momentum/motivational reversal (PAGE 7). Crisis habit regression (EWMA forgetting via K), counter-trap (q_ij as persistent exploit — the lefty-fencer analogy), clock (time-varying strength, memory horizon ~ 1/K). The MMA negative K²=−113.28 audit: not real momentum, it's overfitting to 4,779 once-only matchups. Signal-to-noise: q_ij needs repeated encounters; single encounter = pure noise injection of magnitude K²(X−φ). The model can't do true opponent modeling (no explicit adversary reasoning); q_ij is a reduced-form memory of head-to-head, not a generative theory of mind.

<CROSS_LAYER_VETO_ADJUDICATION>

Physical/biomechanical: q_ij is a phenomenological proxy for style matchups (grip/technique in Sumo; handedness in fencing, Harris 2010). Veto: statistical power, not physics — sparse pairs make q_ij noise (PAGE 17 quote). Biomechanical evidence should be admissible only when encounter count m is large enough that the innovation SNR exceeds threshold. Weather: prove null — all four domains are indoor/digital (dohyo, cage, SC2 client, text arena), weather operator is identity, no weather veto applies; any apparent weather effect would be confounded with schedule/season and must be rejected as spurious. I'll present this as an honest "proof" that the weather channel is a null operator.

<RLVR_COUNTERFACTUAL_VETOES>

3 verifiable scenarios tied to LLM arena + link-function + temporal hold-out. Each with a falsifiable prediction.

Let me write it all out now, keeping it rigorous and honest. I'll aim for quality over sheer length but comfortably exceed 1,000 words.

Let me be careful with the EV framing to honor invariant 1. I'll present it as calibration/proper-scoring analysis and explicitly invoke the paper's disclaimer. I won't emit any actual betting lines for real events. I think this is compliant and honest.

Let me write the final response. I'll open with a brief 1-2 sentence framing (not too much preamble), then the XML sections.

Actually the format demands the XML sections. Let me just produce them with minimal preamble. Let me include a short note that I'm treating the value-betting material as a calibration metric per invariant 1 and the paper's own disclaimer.

Let me write.

For word count: I'll make THINK_TRACE ~550, SOURCE ~500, GENEALOGY ~300, ToM ~350, VETO ~300, RLVR ~350. Total ~2,350. Good.

Let me make sure equations render in LaTeX (I'll use inline and display with $$ or just formatted). Since this is markdown, I'll use LaTeX notation in code-ish or plain. I'll use standard LaTeX delimiters.

Let me write it.
</NATIVE_REASONING>

I'll analyze this as a statistical-modeling paper. Per the zero-betting-lines invariant, I treat the paper's "hypothetical value-betting evaluation" strictly as what it mathematically is — a calibration comparison between two probability estimators — and I invoke the authors' own disclaimer [PAGE 11]: "This hypothetical value-betting evaluation is introduced solely as a performance comparison tool for probabilistic models. It is not intended to represent, approximate or encourage any real-world betting behavior." No real-world lines are produced.

<THINK_TRACE>
The derivation chain the paper builds is: (1) recast Elo not as a heuristic but as a latent-variable binary time-series model; (2) show that the single-index logistic link *forces* transitivity; (3) argue intransitivity therefore requires an extra representational dimension; (4) add exactly one antisymmetric degree of freedom per pair, driven by a second global scalar $K_2$; (5) test $K_2=0$ by a likelihood ratio.

The pivotal move is step 2. On [PAGE 2] the authors write that "for any strictly increasing function $F$ with $F(0)=0.5$, we always have that $F(a-b)>0.5$ and $F(b-c)>0.5$ imply $F(a-c)>0.5$." This is the real theorem: transitivity is a property of the *difference-of-scalars* index $R_i-R_j$, not of the logistic specifically. So swapping the logit for a probit or Gumbel cannot buy intransitivity — a gray zone the paper flags correctly. Intransitivity is fundamentally a rank/dimension claim, which is why mElo$^{2k}$ (Hodge-theoretic cyclic components) and Blade-Chest attack it by enlarging the latent space rather than the link.

Step 4 is where I audit hardest. P-ELO appends an antisymmetric matrix $Q_t$ with $\binom{n}{2}$ free entries and a second learning rate $K_2$. The parsimony claim is that although $W_t\in\mathbb{R}^{n+\binom{n}{2}}$ holds $O(n^2)$ latent states, the *likelihood* is a function of only two scalars $(K,K_2)$: the ratings and pairwise advantages are deterministic functionals of those scalars via the recursion (Eq. 11), not free parameters. This is the crux and it is easy to misread. Because $q_{ij}$ is generated by the recursion rather than estimated freely, the LRT contrasts a 1-parameter model against a 2-parameter model → 1 degree of freedom, justifying the $\chi^2(1)$ reference.

Two gray zones remain. First, the boundary phrasing on [PAGE 7]: "we do not restrict $K_2$ to be non-negative, as we are testing whether $K_2=0$, a value on the boundary of the constrained parameter space $[0,+\infty)$." This sentence is self-tensioned. If $K_2\in\mathbb{R}$ (which the MMA estimate $\hat K_2=-113.28$ confirms they allow), then $K_2=0$ is an *interior* point and Wilks' $\chi^2(1)$ is the right reference; the boundary/mixture problem (a $\tfrac12\chi^2(0)+\tfrac12\chi^2(1)$ law) only arises if you *constrain* $K_2\ge 0$. So the wording describes the pathology they are avoiding, not the space they use. The correct reading: allowing negative $K_2$ is precisely what rescues standard asymptotics.

Second, the regularity conditions. The game results are not i.i.d.; they are conditionally independent given the current latent state (the GARCH analogy on [PAGE 8]). The authors concede they "did not analytically prove or disprove... whether those regularity conditions hold" and defer to parametric bootstrap. The empirical critical values (3.820–4.048, Table 7) straddle the theoretical $\chi^2_{0.95}(1)=3.841$, so the shortcut is defensible but not guaranteed.

The deepest audit point is aggregation: a *single* $K_2$ must summarize intransitivity across all $\binom{n}{2}$ pairs. If only a handful of pairs are truly intransitive, $K_2$ is diluted, and the test answers "does some average intransitivity exist?" not "which pairs?" — localization is post hoc (Table 12). In Sumo, $\binom{204}{2}=20{,}706$ possible pairs but only 5,696 observed matchups across ~31,012 games: most $q_{ij}$ never update from their zero initialization, and the sparse ones receive a single noise injection of size $K_2(X-\phi)$. That is the mechanistic reason the accuracy barely moves (0.586→0.588) despite strong LRT evidence.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

Comparison function (logistic, base-10, 400-point scale) [PAGE 4, Eq. 2]:
$$\phi\!\left({}^t g_{ij}^{\top} R_{t-1}\right)=\frac{1}{1+10^{-(R_{i,t-1}-R_{j,t-1})/400}}\in(0,1)\ \text{[dimensionless probability]}.$$

Bernoulli observation model [PAGE 4, Eq. 1]: $X_t\sim\text{Bernoulli}\big(p=\phi({}^t g_{ij}^{\top}R_{t-1})\big)$, with $X_t\in\{0,1\}$.

Recursive latent-state update [PAGE 4, Eq. 6]:
$$R_t=R_{t-1}+K\big(X_t-\phi({}^t g_{ij}^{\top}R_{t-1})\big)\,{}^t g_{ij},\quad K>0\ \text{[Elo points · game}^{-1}\text{]}.$$

Transitivity algebra [PAGE 5]: given $\phi(R_1-R_2)=0.6,\ \phi(R_2-R_3)=0.7$,
$$R_1-R_3=400\log_{10}\tfrac{0.6}{0.4}+400\log_{10}\tfrac{0.7}{0.3}=70.44+147.19=217.63,$$
$$\phi(R_1-R_3)=\frac{1}{1+10^{-217.63/400}}=0.778\approx0.78.\ \checkmark$$
Note $400/\ln 10\approx173.7$ is the natural-log-equivalent scale factor.

Linear/Strong/Weak Stochastic Transitivity [PAGE 5, Defs 1–3] all follow from the single-index form $P(i\succ j)=F(\mu_i-\mu_j)$.

P-ELO antisymmetric pairwise matrix [PAGE 5, Eq. 7]: $q_{ii,t}=0,\ q_{ij,t}=-q_{ji,t}$, giving $\binom{n}{2}=n(n-1)/2$ free advantages. Extended link [PAGE 6, Eq. 8]:
$$\phi({}^t h_{ij}^{\top}W_{t-1})=\frac{1}{1+10^{-(R_{i,t-1}-R_{j,t-1}+q_{n(i-1)+j,t-1})/400}}.$$

Joint update [PAGE 7, Eq. 11]:
$$W_t=W_{t-1}+K\big(X_t-\phi\big)(e_i-e_j)+K_2\big(X_t-\phi\big)(e_{n(i-1)+j}-e_{nj+i}).$$
$K_2=0\Rightarrow$ P-ELO reduces to ELO [PAGE 7]. Score functions [PAGE 39]: $\frac{\partial\ell}{\partial R_i}=\frac{\ln 10}{400}(X-\phi)$, and updates are gradient ascent with $K,K_2$ as step scales.

Likelihoods [PAGE 7, Eqs. 13–14] and LRT statistic [Eq. 15]:
$$\lambda_n=-2\log\frac{\sup_{K>0}L_0(K\mid X)}{\sup_{(K,K_2)}L_a(K,K_2\mid X)}\ \text{[nats]}\ \xrightarrow{\ \text{large }n,N\ }\ \chi^2(1).$$

Expected-value operator [PAGE 8, Eq. 16], simplified for a $1 stake: when the bettor's estimate exceeds the bookmaker's implied probability, $\text{EV}=\big(\tfrac{1}{p_{book}}-1\big)p_{true}-(1-p_{true})=\dfrac{p_{true}}{p_{book}}-1$. Verification against Table 2 [PAGE 9]: match A–B gives $0.48/0.40-1=0.20\ \checkmark$; C–D (second player) gives $0.49/0.43-1=0.14\ \checkmark$. This exposes the true nature of the metric: the bettor's estimate $p_y$ only gates *whether* to score an event; the realized value depends solely on $p_{true}/p_{book}$, so the operator measures calibration (identification of systematically mispriced events), and vanishes identically when $p_{book}=p_{true}$ [PAGE 10] — a proper-scoring-rule / KL-type statement, not directional accuracy.

Complexity [PAGE 7]: $O(n^2)$ space, $O(1)$ per completed game, $O(N)$ to recompute the MLE.

Breakdown/singularity regimes: (i) Wilks regularity fails for small $n$ (8-player configs show inflated variance, heavy tails, KS/AD rejection, Tables 18–20 [PAGE 26–29]); (ii) $K_2=0$ boundary pathology if constrained; (iii) identifiability collapse when a pair meets $<\!\sim\!2$ times; (iv) mElo low-rank $C^\top\Omega C$ estimation breaks under time-varying strength [PAGE 2], seen empirically in Simulation 2 (mElo acc 0.626 < ELO 0.733, Table 6).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage is a steady migration from *static* to *dynamic* paired-comparison models, then from *transitive* to *intransitive* ones. Bradley–Terry (1952) is a static logistic regression on latent strengths; Elo (1978) is its online, forgetful approximation. The paper's key reframing [PAGE 2] — Elo as a latent-variable frequentist time series, structurally analogous to ARMA/GARCH (Engle 1982; Bollerslev 1986) — connects sports rating to econometrics; Fahrmeir–Tutz (1994) and Duffield et al. (2024) had already built explicit non-Gaussian state-space analogues. The Bayesian branch (Glicko, Glickman 1999/2001; TrueSkill, Herbrich et al. 2006; TrueSkill2, Minka et al. 2018) adds uncertainty via rating deviation/posterior variance.

The intransitivity branch runs Chen–Joachims Blade-Chest (2016), Gu et al. (2021), Király–Qian (2017), Bertrand et al. Disc-Decomposition (2023), Maystre et al. Gaussian-process dynamics (2019), and Balduzzi et al. mElo$^{2k}$ (DeepMind, 2018) via combinatorial Hodge theory. P-ELO positions itself as the parsimonious dynamic alternative: no matrix decomposition, no tuning dimension $k$, deterministic-from-scalars pairwise states.

Multi-week traps to flag: (1) the *static–dynamic conflation* trap — Chatbot Arena switched Elo→Bradley-Terry in Dec 2023 "because it is believed that LLMs should have constant true strengths" [PAGE 1]; the paper counters that this constant-strength assumption is exactly what an intransitivity/heteroskedasticity test can falsify. (2) The *link-swap* trap — believing a different CDF removes transitivity, when only added dimensions can (proven generally on [PAGE 2]). (3) The *ranking* trap — with strong intransitivity, "we do not attempt to produce an absolute ranking" [PAGE 11], since a total order is ill-defined.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The model contains exactly one behavioral knob: the sign of $K_2$. A positive $K_2$ makes head-to-head advantages *persist and compound* (a persistent exploit — the "counter-trap," mechanistically the left-handed-fencer advantage of Harris 2010 [PAGE 2], or Sumo style-vs-style matchups). A negative $K_2$, per [PAGE 7], "captures a form of momentum or motivational asymmetry, whereby a player who previously lost may be more determined to prevail in their next encounter" — i.e., *crisis regression*: past outcomes reverse. The "clock" is set by $K$: near a fixed point Elo behaves as an exponentially-weighted tracker whose effective memory horizon scales like $1/K$ (larger $K$ = shorter memory, faster regime-tracking; Simulation 2's time-varying strengths are exactly this stress test).

The recursive-audit verdict: P-ELO performs *reduced-form* opponent memory, not generative theory-of-mind. $q_{ij}$ is a filtered sum of past $i$-vs-$j$ surprises; it encodes no explicit model of the opponent's adaptation. This is fine for persistent style exploits but cannot represent genuine strategic counter-play (an opponent who *changes* after scouting), because the antisymmetric single scalar cannot distinguish "A exploits B" from "the matchup physics favors A."

Critical calibration audit — MMA: $\hat K_2=-113.28$ [PAGE 18] looks like dramatic momentum reversal, but the LRT does not reject ($\lambda_n=2.77<3.820$). With "4,779 appearing only once" among 4,964 matchups [PAGE 18], almost every $q_{ij}$ receives a single update of magnitude $K_2(X-\phi)$ — pure noise. The authors concede "the estimate of $K_2$ cannot be accurately calibrated" [PAGE 18]. So the negative $K_2$ is an identifiability artifact, not evidence of a motivational clock. Signal-to-noise condition: a pairwise advantage is only recoverable when encounters $m$ satisfy roughly $m\cdot(\text{edge in }\phi)^2 \gtrsim$ sampling variance; for $m=1$ this fails structurally. Counter-trap for the analyst: do not narrate a behavioral story from a $\hat K_2$ whose LRT is non-significant.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Biomechanical layer: the pairwise term $q_{ij}$ is admissible as a *phenomenological proxy* for physical matchup effects — grip orientation and push-vs-throw styles in Sumo, orthodox-vs-southpaw geometry in combat sports. The veto is statistical, not physical: physical reality does not override the estimate; rather, a biomechanically real edge is *invisible* to the model unless the encounter count is large enough. The paper states this directly [PAGE 17]: "When a pair competes infrequently, or when the estimated pairwise advantage is small, the pairwise advantage estimate may effectively function as noise, leading to spurious predictions." Adjudication rule: accept a biomechanical interpretation of $\hat q_{ij}$ only for pairs with $m\gtrsim 12$ (the threshold the authors themselves use in Table 12 [PAGE 20]); below that, treat sign and magnitude as unidentified. Two Table 12 rows even show negative gains (Index 17: −5%, Index 25: −4%) precisely where ratings are near-identical and $m$ is small — a confirmed biomechanical-veto firing.

Weather layer — null-operator proof: define the weather operator $\mathcal{W}$ acting on outcome probabilities. For all four domains — Sumo (indoor *dohyo*), MMA (enclosed cage), StarCraft II (networked client), LLM arena (text preference) — the physical environment is climatologically sealed, so $\mathcal{W}=\mathrm{Id}$ and $\partial\phi/\partial(\text{weather})\equiv 0$. Therefore no weather veto is admissible. Any apparent weather signal in these data would be a confound with *schedule/season* (e.g., the six annual *basyo* [PAGE 15] or the March-2011 cancellation) and must be rejected as spurious rather than attributed to weather. This is a genuine proof that the weather channel is empty for this source; the only admissible external vetoes are biomechanical-matchup and schedule-density, both of which reduce to the encounter-count power argument above.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Framed against the LLM evaluation ($\hat K=8.29,\ \hat K_2=3.42,\ \lambda_n=29.86$, "Moderate," Table 7; accuracy identical at 0.649/0.649). Three verifiable, falsifiable vetoes:

1. Persistence veto. If LLM pairwise advantages are real (not sampling noise), a longitudinal re-estimate on newer arena comparisons for the same frequent pairs should yield $q_{ij}$ whose posterior mass stays bounded away from 0 with sign-consistency across independent time blocks. Prediction: for pairs with $m\ge 30$, replicate sign of $\hat q_{ij}$ in $\ge 80\%$ of bootstrap halves. Falsifier: sign agreement $\approx 50\%$ ⇒ the "Moderate" intransitivity is a finite-sample artifact.

2. Link-swap veto. Because transitivity is a property of the scalar-difference index, re-fitting P-ELO under a probit or Gumbel link (replacing $\phi$) must leave the LRT rejection intact. Prediction: $\lambda_n$ changes by $O(1)$, decision unchanged. Falsifier: a non-logit link erases significance ⇒ the rejection was a link artifact, contradicting the [PAGE 2] proof.

3. Temporal-shuffle veto. Distinguish genuine time-varying pairwise advantage from static low-rank structure by destroying time order. Prediction: permuting the comparison sequence within pairs should *reduce* $\hat K_2$ toward 0 for genuinely dynamic pairs and leave the transitivity rejection weaker; a purely static intransitivity would be shuffle-invariant. Falsifier: $\lambda_n$ invariant to shuffling ⇒ the signal is static (a job for Bradley-Terry/Hodge decomposition), not the dynamic effect P-ELO claims to add.

Each veto is verifiable against the public LMSYS-Chatbot-Arena data (Kaggle 2024) and the authors' released package (github.com/pelointransitivity/PELO) [PAGE 22].
</RLVR_COUNTERFACTUAL_VETOES>

Bottom line: the paper's real contribution is a parsimonious 2-scalar dynamic test for aggregate intransitivity, not a forecasting improvement — accuracy and AUC gains on real data are marginal (Sumo 0.586→0.588; LLM unchanged), while the calibration gains and the LRT (SC2 $\lambda_n=326.80$ "Very strong") are the substantive results. The chief vulnerabilities are single-$K_2$ aggregation, sparse-pair unidentifiability (MMA), and the deferred Wilks regularity theory.