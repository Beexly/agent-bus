---
source: "2025 - A Paradox of Blown Leads Rethinking Win Probability in Team Sports - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2025"
pages: 24
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5082
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on the provided source text (a paper by Pipping & Wyner about blown leads and win probability). I must follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important notes:
- The source text mentions "| Spread |" but I must not mention spreads, totals, moneylines, or odds. I should avoid those terms entirely. The source mentions data via nflfastR and matchup categorization by spread magnitude, but I cannot use betting terminology. I'll refer to them as "strength-differential tiers" or similar without using the banned words.
- Need exact [PAGE N] citations. The source text has page markers like <mark>1 / 30</mark>, etc. I should cite these.
- Need formal LaTeX equations. I can reproduce the paper's equations and add formal definitions.
- Word count: total across sections >= 1000 words, with THINK_TRACE alone >= 400 words.

Let me structure:

<THINK_TRACE>: Deep multi-hop derivation. Discuss the paradox: conditional vs unconditional win probability. The maximum win probability of eventual loser M_l. Symmetric case support [0.5, 1). Asymmetric case support [min(pA,pB), 1). Doob martingale, optional stopping theorem. Donsker's principle, Brownian limit N->infty. Theorems 1-6. Empirical validation with NFL data. Gray zones: discrete jump-over, binary scoring assumption, non-stationary p(t), unequal possessions, external factors. At least 400 words.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX. Define W_i(t) = f(S_i, G, t). M_l = max_t W_l(t). Binomial model: WP_A(t) = P[Binom(n_t, p_A) + score_A(t) > Binom(n_t, p_B) + score_B(t)]. Doob martingale p_t = E[Y|F_t]. Optional stopping theorem decomposition p_0 = x P(τ_x < N) + P(τ_x = N). Theorems. Continuous limit with Brownian motion B_t, µ = p_A - p_B, σ^2 = ... Donsker. Empirical distribution F_{M_l}(x) = 2 - x for evenly matched. Cite pages exactly: [PAGE 4], [PAGE 5], etc. Need to map page markers. The text has markers like "1 / 30", "2 / 30" etc. I'll cite as [PAGE 1/30] or just [PAGE N] where N is the slide number? The instruction says exact [PAGE N] markers. Since the source is a PDF with slide numbers like "1 / 30", I'll cite [PAGE 1], [PAGE 2]... up to [PAGE 30], and also the proof appendix [PAGE 1/15] etc. I should be careful. Let's cite the main slide numbers. Verbatim quotes from source.

<RETROCAUSAL_GENEALOGY>: Doob (1953) Stochastic Processes, Donsker (1951) invariance principle, nflfastR (Carl & Baldwin 2025). Historical lineage: martingale theory, optional stopping, Brownian motion, win probability models. Multi-week traps: assuming stationarity across a season, ignoring roster changes, weather, injuries.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but I need to interpret in context of teams/coaches. When a team blows a lead, do they regress to crisis habits? Counter-trap: the leading team becomes conservative. Clock management. The paper doesn't discuss this directly, but I can reason about it as a layer above the model, noting it's outside the paper's scope but relevant to real-game application.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. The paper explicitly lists limitations on page 22: scoring isn't binary, scoring probabilities vary, unequal possessions, weather, injuries, game strategy. I need to adjudicate which factors veto the model's applicability. Weather: affects p_A, p_B, σ² non-stationarity. Biomechanical: player fatigue, injuries change team strength mid-game. Physical: possession count differences due to clock, turnovers, overtime. These are veto conditions where the Brownian/iid assumption breaks down.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I'll create 3 counterfactual scenarios where the model's assumptions are violated and predict the deviation. Must be verifiable (e.g., using nflfastR data). Predictions should be quantitative where possible but not betting lines. No odds.

Word count check: I need to ensure >= 1000 words total. THINK_TRACE >= 400. I'll aim for ~1500-2000 words total.

Banned words: spread, total, moneyline, odds. I must avoid them. The source text uses "| Spread |" but I will not repeat that term. I'll say "strength differential" or "preseason strength gap" etc. Actually, the user said "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." So I cannot use those words at all. I'll refer to the NFL data stratification as "matchup tiers based on pre-game strength differential" without using the banned word.

Let's draft carefully.

Page citations:
- Page 1: Title, authors.
- Page 2: Super Bowl LVII case study, 78.4%.
- Page 3: How Often Do Blown Leads Occur, 21.6% intuition.
- Page 4: Mathematical Framework W_i(t) = f(S_i, G, t), W_A + W_B = 1, M_l definition.
- Page 5: Simulation Setup, N possessions, p_A, p_B, binomial formula.
- Page 6: Simulation steps, 10,000 games, M_l extraction, cases.
- Page 7-9: Symmetric case, support [0.5,1), about half games loser attains >= 66%.
- Page 10-12: Asymmetric case, support [min(pA,pB), 1), right-skewed as |pA-pB| increases.
- Page 13: Towards Closed-Form, X_k, F_k, Y, Doob martingale, M_A, τ_x.
- Page 14: Theorem 1 discrete inequality, point mass.
- Page 15: Theorem 3 mixture, piecewise.
- Page 16: Brownian limit, N->infty, continuous paths, Donsker.
- Page 17-18: Continuous closed-form, µ, σ², p_t = E[Y|F_t], M, τ_x.
- Page 19: Theorem 4 continuous distribution.
- Page 20: Theorem 6, piecewise M_l.
- Page 21: Closed-form examples, F_{M_l}(x) = 2 - x for even matchups.
- Page 22: But Wait... limitations: scoring not binary, varying probabilities, unequal possessions, weather, injuries, strategy.
- Page 23-26: Empirical NFL games 2002-2024.
- Page 27: Conclusions, blown leads happen all the time, Super Bowl LVII 78.4% vs 30% provable.
- Page 28: Same conclusion details.
- Page 29-30: Acknowledgements, References, Proofs.

Proof appendix pages: [PAGE 1/15] to [PAGE 15/15]. I'll cite a few.

Now, let's write.

THINK_TRACE (>=400 words):
I need to do deep multi-hop derivation.
- Start from W_i(t) definition.
- M_l = max W_l(t). Since eventual loser ends at 0, M_l captures the peak false confidence.
- In symmetric case p_A = p_B, support [0.5, 1). Why? Because at start both have 0.5, and the loser must have been ahead at some point? Actually, if p_A = p_B, the loser's win probability starts at 0.5 (if we label the loser randomly?) Wait, need to think carefully.
The paper says: When p_A = p_B, support of M_l is [0.5, 1). And holding N constant, distribution identical for all p_A = p_B. Implies depends only on difference.
In about half of all games, losing team attains WP >= 66%.
This is the paradox: people think a 78.4% WP means only 21.6% chance to lose (unconditional), but conditional on being the eventual loser, the distribution of maximum WP is different. The event "eventual loser reached x" is closer to 30% for x=0.784.
Mathematically, this comes from the mixture of conditional distributions and the optional stopping theorem.
Discrete case has inequality because of jump-over; continuous limit N->infty gives equality via Brownian motion.
Gray zones: The model assumes binary scoring, fixed p, equal possessions, no external factors. Real NFL violates these. The empirical match on pages 23-26 suggests robustness, but the paper admits limitations on page 22.
Multi-hop: Doob martingale -> optional stopping -> distribution of maximum -> mixture for eventual loser -> piecewise definition -> Brownian approximation -> closed form CDF -> empirical calibration.

Word count for THINK_TRACE: I'll write ~500 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
I'll list equations with citations.
- W_i(t) = f(S_i, G, t), t ∈ [0, T] [PAGE 4]
- W_A(t) + W_B(t) = 1 [PAGE 4]
- M_ℓ = max_t W_ℓ(t) [PAGE 4]
- WP_A(t) = P[Binom(n_t, p_A) + score_A(t) > Binom(n_t, p_B) + score_B(t)] where n_t = N - t [PAGE 5]
- X_k = score_A(k) - score_B(k) [PAGE 13]
- F_k = σ(X_0, ..., X_k) [PAGE 13]
- Y = 1_{X_N ≥ 0} [PAGE 13]
- p_k = E[Y | F_k] (Doob martingale) [PAGE 13]
- M_A = max_{0≤k≤N} p_k [PAGE 13]
- τ_x = min_{k ≤ N : p_k ≥ x} [PAGE 13]
- Optional stopping decomposition: p_0 = x P(τ_x < N) + P(τ_x = N) [PAGE 14 proof]
- Theorem 1: F_{M_A}(x) ≥ 1 - p_0/x? Wait, the text says F_{M_A}(x) ≥ 1 - p_0 / x? Let's read carefully.
The text says: **Theorem 1:** The distribution of M_A satisfies: F_{M_A}(x) ≥ 1 - p_0 / x? Actually the OCR is messy: "FMA ( x ) ≥ 1 − p0 x ∈ [ p0 , 1) x ," with equality when P(τ_x = N) = 0. Wait, looking at proof page 3: "For x < 1, P(τ_x = N) ≥ 0 and we have: ... with equality exactly when P(τ_x = N) = 0." The inequality derived is likely P(M ≥ x) ≤ p_0 / x? Let's derive from optional stopping:
p_0 = x P(τ_x < N) + P(τ_x = N)
P(M ≥ x) = P(τ_x < N) + P(τ_x = N)
So P(τ_x < N) = P(M ≥ x) - P(τ_x = N)
Substitute: p_0 = x [P(M ≥ x) - P(τ_x = N)] + P(τ_x = N) = x P(M ≥ x) - (x-1) P(τ_x = N)
Since x < 1, -(x-1) = (1-x) > 0.
So p_0 = x P(M ≥ x) + (1-x) P(τ_x = N)
Thus x P(M ≥ x) = p_0 - (1-x) P(τ_x = N) ≤ p_0
So P(M ≥ x) ≤ p_0 / x.
Then F_{M_A}(x) = P(M ≤ x) = 1 - P(M ≥ x) ≥ 1 - p_0 / x.
Wait, the text says "FMA ( x ) ≥ 1 − p0 x" maybe missing division. In proof page 3 they likely show F_M(x) ≥ 1 - p_0/x. But in the continuous case Theorem 4: F_{M_A}(x) = 1 - p_0/x, x ∈ [Φ(µ*), 1). Yes that makes sense: for a martingale starting at p_0, the maximal inequality (Doob's) gives P(sup p_t ≥ x) ≤ p_0/x. So CDF F(x) ≥ 1 - p_0/x. In continuous case equality holds because no jump-over.
Wait, but if p_0 = 0.5 and x = 0.784, then P(M ≥ 0.784) ≤ 0.5/0.784 ≈ 0.637. That's an upper bound. But the paper says the event that eventual loser reached 78.4% is closer to 30%. That's conditional on losing. So conditional distribution is different.
Theorem 2 conditional on Y=0: similar.
Theorem 3 mixture.
Continuous case: F_{M_A}(x) = 1 - p_0/x for x ∈ [p_0, 1). Wait, page 19 says: "FMA ( x ) = 1 − p0/x , x ∈ [Φ(µ*), 1)". Yes.
For evenly matched p_0 = 0.5, F_{M_l}(x) = 2 - x? Let's check: if p_0 = 0.5, then F_{M_l}(x) = 2 - x? That would mean P(M_l ≤ x) = 2 - x. Then P(M_l ≥ x) = x - 1? No, that doesn't make sense for x ∈ [0.5, 1). Wait, if F(x) = 2 - x, then at x=0.5, F=1.5 >1. Impossible. Let's re-read page 21: "F_{M_l} ( x ) = 2 - x uniformly over all x ∈ [0.5, 1)." Hmm, maybe it's the survival function? Or maybe it's 1 - something. Let's not over-interpret the possibly garbled OCR. I'll cite what's there but note the support.
Actually, looking at proof page 7: "F_{M_l}(x) ≥ 0.5 · F_{M_A|Y=0}(x) + 0.5 · F_{M_B|Y=1}(x) = 1 - 1/x = 2 - x?" Wait, 1 - 1/x? No, they wrote "= 1 − 1/x = 2 − x"? That seems like OCR error. Maybe it's 1 - (1/x)? No.
I'll reproduce carefully and flag any OCR ambiguity, citing the page. But I should not invent equations. I'll state what is visible and note assumptions.
For the continuous case Theorem 4: F_{M_A}(x) = 1 - p_0/x. That's standard Doob maximal inequality equality for continuous martingale (Brownian). Actually Doob's L1 maximal inequality: P(sup_{t≤1} M_t ≥ x) ≤ E[M_1]/x = p_0/x for non-negative martingale. Equality in continuous case? For Brownian motion based martingale, the distribution of running maximum has P(sup ≥ x) = p_0/x for x ≥ p_0? Let's see: if p_t is a martingale with terminal 0 or 1, starting p_0. The probability it ever hits x before terminating is p_0/x (for x ≤ 1) by optional stopping on the hitting time. Yes, that's correct: P(τ_x < 1) = p_0/x. Then P(M ≥ x) = p_0/x (since if it hits x, max ≥ x). So CDF F(x) = 1 - p_0/x. Yes.
So for p_0 = 0.5, x = 0.784: P(M_A ≥ 0.784) = 0.5/0.784 ≈ 0.6377. But this is unconditional on team A losing or winning? M_A is max win prob of team A. If team A is eventual loser, we condition on Y=0.
The paper's conclusion: "the event that the eventual loser of this game reached 78.4% is provably closer to 30%." That's P(M_l ≥ 0.784) maybe around 0.3. Let's see: in even matchup, the distribution of M_l might be uniform? If F_{M_l}(x) = something.
Anyway, I'll stick to citing the source's claims.

For SOURCE_OPERATORS_AND_EQUATIONS, I'll present LaTeX blocks.

RETROCAUSAL_GENEALOGY:
- Doob (1953) Stochastic Processes: martingales, optional stopping.
- Donsker (1951): invariance principle, Brownian approximation of random walks.
- nflfastR (Carl & Baldwin 2025): empirical data source.
- Historical lineage: from De Moivre/Pascal problem of points to modern win probability models.
- Multi-week traps: applying single-game stationary model across a season; ignoring that p_A, p_B drift due to injuries, weather, roster turnover; assuming equal possessions when clock management and overtime create asymmetry.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: When a team holds a lead, play-calling may become conservative (prevent defense), reducing scoring probability p and increasing variance? This violates fixed p assumption.
- Counter-trap: The trailing team becomes more aggressive, increasing p_B non-stationarily. The model assumes fixed p_A, p_B.
- Clock: Possession count N is not fixed; game clock, timeouts, two-minute drill change effective N. The model assumes equal N and discrete possession steps.
- Theory of mind: Coaches model each other's win probability trajectories; this game-theoretic layer is absent from the exogenous f(S_i, G, t).
- I should note these are outside the paper but represent recursive reasoning traps when deploying the model in real time.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: possession count inequality due to clock management, turnovers, overtime. Veto when N_A ≠ N_B.
- Biomechanical layer: player fatigue/injury changes p_i(t) within game. Veto when |dp_i/dt| > ε or key player out.
- Weather layer: wind, precipitation alter scoring probabilities and variance σ². Veto when exogenous conditions shift p outside pre-game estimate.
- The paper itself on page 22 lists these exact vetoes: scoring not binary, true probabilities vary, unequal possessions, weather, injuries, game strategy.
- Adjudication: The model is valid only when these layers are stationary or negligible. Empirical match on pages 23-26 suggests average-case robustness, but individual games (e.g., extreme weather) violate assumptions.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable RLVR veto scenarios + predictions. RLVR likely means "Reinforcement Learning from Verifiable Rewards" or just "verifiable". I'll frame as verifiable counterfactuals using nflfastR data.
Scenario 1: Weather-induced non-stationarity. Select games with high wind/precipitation from nflfastR. Prediction: Empirical F_{M_l}(x) will deviate from continuous closed-form, showing thicker tails (more blown leads) because p_i(t) becomes more volatile and scoring less binary (e.g., field goals vs touchdowns).
Scenario 2: Possession asymmetry (overtime or clock drain). Identify games with unequal possessions (e.g., one team runs clock, other has fewer drives). Prediction: The support of M_l shifts downward for the team with fewer possessions; the mixture weights in Theorem 3 no longer apply symmetrically; empirical CDF will lie outside the piecewise bounds derived for equal N.
Scenario 3: Mid-game injury to key play-caller (e.g., starting QB). Use games with QB injury in first half. Prediction: p_A or p_B drops abruptly, violating fixed-strength assumption; the Doob martingale property fails because the filtration no longer captures a time-homogeneous transition kernel; maximum win probability of eventual loser will exceed the model's predicted quantile (e.g., > 80% in more than X% of such games).

Need to avoid betting terms. Predictions should not be odds.

Now, word count. I need to make sure total >= 1000 words. Let's draft each section generously.

Let's write.

I'll start with THINK_TRACE.

--- THINK_TRACE ---
(Deep multi-hop derivation...)
I'll write about 500-600 words.

--- SOURCE_OPERATORS_AND_EQUATIONS ---
Formal LaTeX, units, citations.

--- RETROCAUSAL_GENEALOGY ---
Historical lineage.

--- RECURSIVE_THEORY_OF_MIND ---
Crisis habit regression vs counter-trap vs clock.

--- CROSS_LAYER_VETO_ADJUDICATION ---
Physical/biomechanical/weather veto proof.

--- RLVR_COUNTERFACTUAL_VETOES ---
3 scenarios.

Let's ensure no banned words: spread, total, moneyline, odds. I will not use them.

Page citations: I'll use [PAGE 4], [PAGE 5], etc. referring to the slide numbers shown in <mark>N / 30</mark>. For proof appendix, [PAGE 1/15] etc.

Verbatim quotes: I need to include some exact quotes from source.
Examples:
- "The win probability of a team i at time t is a function of team strength Si and game state (G, t). Symbolically, Wi(t) = f(Si, G, t), t ∈ [0, T]" [PAGE 4]
- "For the eventual loser ℓ, we know that Wℓ(T) = 0. So the quantity of interest (the maximum win prob. of the losing team) is given by the random variable Mℓ = max Wℓ(t) t" [PAGE 4]
- "Each team has an equal number of possessions N." [PAGE 5]
- "Team strengths pA and pB are fixed and correspond to each team’s probability of scoring on a given possession." [PAGE 5]
- "In about half of all games, the losing team attains a win probability of at least 66% or more." [PAGE 9]
- "Blown leads happen all the time, especially in even matchups!" [PAGE 27]
- "In Super Bowl LVII, the Eagles reached a maximum win probability of 78.4% before ultimately losing." [PAGE 28]
- "However, the event that the eventual loser of this game reached 78.4% is provably closer to 30%." [PAGE 28]
- "Scoring often isn’t binary! True team scoring probabilities may vary throughout a game! Teams often have an unequal number of possessions! Weather, injuries, game strategy, and other external factors matter!" [PAGE 22]

I'll include these quotes.

Let's write the response now.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s central multi-hop derivation begins with the definition of win probability as a function of team strength and game state, \(W_i(t)=f(S_i,G,t)\), \(t\in[0,T]\) [PAGE 4]. Because the eventual loser \(\ell\) terminates at \(W_\ell(T)=0\), the object of study is the pathwise maximum \(M_\ell=\max_t W_\ell(t)\) [PAGE 4]. This immediately separates two distinct probability statements: the unconditional chance of losing from a given state (e.g., 21.6% after a 78.4% win-probability mark in Super Bowl LVII [PAGE 2]) versus the conditional distribution of the maximum win probability attained by a team that ultimately loses [PAGE 28]. The paper’s paradox is that conditioning on eventual loss reshapes the distribution of \(M_\ell\); a 78.4% peak is “provably closer” to a 30% occurrence rate among eventual losers than the naive 21.6% complement suggests [PAGE 28].

To make the problem tractable, the authors impose a possession-based generative model: each team receives exactly \(N\) possessions, scoring probabilities \(p_A,p_B\) are fixed per possession, and ties are resolved by a weighted overtime coin flip [PAGE 5]. The win probability at state \((G,t)\) is then expressible as a tail probability of two binomial random variables plus current scores [PAGE 5]. Simulating 10,000 games per parameter set and extracting \(M_\ell\) for the eventual loser reveals that, in the symmetric case \(p_A=p_B\), the support of \(M_\ell\) is \([0.5,1)\), and for fixed \(N\) the law is invariant to the common value of \(p_A=p_B\) [PAGE 9]. The striking takeaway is that in roughly half of all evenly matched contests, the losing team reaches a win probability of at least 66% at some point [PAGE 9].

In the asymmetric case, the support shifts to \([\min(p_A,p_B),1)\), the law depends only on \(|p_A-p_B|\) for fixed \(N\), and larger strength differentials right-skew the distribution, reducing the frequency of high-water marks by the eventual loser [PAGE 12]. The theoretical backbone is the Doob martingale \(p_k=\mathbb{E}[Y\mid\mathcal F_k]\), where \(Y=\mathbf 1_{\{X_N\ge0\}}\) is the terminal win indicator and \(X_k\) is the score differential [PAGE 13]. Applying the optional stopping theorem at the hitting time \(\tau_x=\min\{k\le N:p_k\ge x\}\) yields the decomposition \(p_0=x\,\mathbb P(\tau_x<N)+\mathbb P(\tau_x=N)\) [PAGE 14 proof], which implies the discrete maximal inequality \(F_{M_A}(x)\ge 1-p_0/x\), with equality only when \(\mathbb P(\tau_x=N)=0\) [PAGE 14]. The gap is caused by “jump-over” in discrete time: with finitely many win-probability levels, the process can skip across \(x\) at the final step [PAGE 16].

Sending \(N\to\infty\) supplies continuous sample paths via Donsker’s Invariance Principle, approximating the scoring random walk by Brownian motion [PAGE 16]. In this limit, \(\mu=p_A-p_B\) and \(\sigma^2=p_A(1-p_A)+p_B(1-p_B)\) [PAGE 17], and the running maximum of the martingale satisfies the exact continuous distribution \(F_{M_A}(x)=1-p_0/x\) for \(x\in[\Phi(\mu^*),1)\) [PAGE 19]. The eventual-loser law \(M_\ell\) becomes a piecewise mixture of the two conditional laws, weighted by the pre-game win probabilities, with a region where only the underdog contributes [PAGE 15, PAGE 20, PAGE 21].

Gray-zone audit: the model assumes binary scoring, time-invariant scoring probabilities, equal possession counts, and exogeneity from weather, injuries, and strategy [PAGE 22]. Each assumption is a potential breakdown regime. The empirical validation on 2002–2024 nflfastR data shows close agreement in aggregate [PAGE 27], but the paper explicitly concedes that real games violate the simplified mechanics [PAGE 22]. Therefore the continuous closed form should be treated as a benchmark, not a universal exact law; its validity domain shrinks whenever possession counts diverge, scoring probabilities drift mid-game, or non-scoring events (turnovers, clock management, overtime structure) alter the effective \(N\).
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations from the source, with page citations.

Core state definition:
\[
W_i(t)=f(S_i,G,t),\qquad t\in[0,T]
\]
where \(S_i\) is team strength, \(G\) is game state, and \(i\in\{A,B\}\). In a two-team contest,
\[
W_A(t)+W_B(t)=1.
\]
[PAGE 4]

Eventual-loser maximum:
\[
M_\ell=\max_t W_\ell(t),\qquad W_\ell(T)=0.
\]
[PAGE 4]

Simplified possession model:
\[
\operatorname{WP}_A(t)=\mathbb P\!\left[\operatorname{Binom}(n_t,p_A)+\operatorname{score}_A(t)>\operatorname{Binom}(n_t,p_B)+\operatorname{score}_B(t)\right],
\]
with \(n_t=N-t\) possessions remaining. Assumptions: equal possessions \(N\) per team; fixed scoring probabilities \(p_A,p_B\) per possession; ties broken by weighted overtime coin flip.
[PAGE 5]

Score-differential filtration:
\[
X_k=\operatorname{score}_A(k)-\operatorname{score}_B(k),\qquad
\mathcal F_k=\sigma(X_0,\dots,X_k),\qquad
Y=\mathbf 1_{\{X_N\ge0\}}.
\]
[PAGE 13]

Doob martingale and stopping time:
\[
p_k=\mathbb E[Y\mid\mathcal F_k],\qquad
M_A=\max_{0\le k\le N}p_k,\qquad
\tau_x=\min\{k\le N:p_k\ge x\}.
\]
[PAGE 13]

Optional-stopping decomposition (discrete):
\[
p_0=x\,\mathbb P(\tau_x<N)+\mathbb P(\tau_x=N),
\]
which implies, for \(x<1\),
\[
\mathbb P(M_A\ge x)\le \frac{p_0}{x},\qquad
F_{M_A}(x)\ge 1-\frac{p_0}{x},
\]
with equality exactly when \(\mathbb P(\tau_x=N)=0\).
[PAGE 14 proof]

Discrete-eventual-loser mixture:
\[
F_{M_\ell}(x)=(1-p_0)F_{M_A\mid Y=0}(x)+p_0F_{M_B\mid Y=1}(x),
\]
piecewise because on \([\min(p_0,1-p_0),\max(p_0,1-p_0))\) only the underdog’s maximum contributes.
[PAGE 15]

Continuous limit via Donsker:
\[
\frac{X_{\lfloor Nt\rfloor}-N\mu t}{\sigma\sqrt N}\Rightarrow B_t,
\]
with
\[
\mu=p_A-p_B,\qquad
\sigma^2=p_A(1-p_A)+p_B(1-p_B).
\]
[PAGE 17]

Continuous martingale:
\[
p_t=\mathbb E[Y\mid\mathcal F_t],\qquad t\in[0,1],\qquad
p_0=\Phi(\mu^*).
\]
[PAGE 18]

Continuous maximal distribution (Theorem 4):
\[
F_{M_A}(x)=1-\frac{p_0}{x},\qquad x\in[\Phi(\mu^*),1).
\]
[PAGE 19]

Evenly matched closed form:
\[
p_0=0.5,\qquad \text{support of }M_\ell\text{ is }[0.5,1).
\]
[PAGE 9, PAGE 21]

Empirical claim from source:
> “In Super Bowl LVII, the Eagles reached a maximum win probability of 78.4% before ultimately losing. From this position (assuming a well-calibrated model) it’s true that the Eagles only had a 21.6% chance of losing the game. However, the event that the eventual loser of this game reached 78.4% is provably closer to 30%.”
[PAGE 28]

Explicit model limitations:
> “Scoring often isn’t binary! True team scoring probabilities may vary throughout a game! Teams often have an unequal number of possessions! Weather, injuries, game strategy, and other external factors matter!”
[PAGE 22]
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The theoretical lineage traces to Doob’s *Stochastic Processes* (1953), cited in the references, which establishes the martingale and optional-stopping machinery used to bound the running maximum of win probability [PAGE 30]. Donsker’s Invariance Principle (1951) provides the bridge from the discrete possession-level random walk to continuous Brownian sample paths, removing the discrete “jump-over” defect that creates the inequality gap in Theorems 1–3 [PAGE 16, PAGE 30]. The empirical layer relies on nflfastR (Carl & Baldwin, 2025), which supplies play-by-play observations for the 2002–2024 NFL validation [PAGE 23–26, PAGE 30].

Historically, this work sits in the tradition of the “problem of points” and modern in-game win-probability models, but it shifts the estimand from \(W_i(t)\) at a fixed time to the pathwise supremum \(M_\ell\) of the eventual loser. That shift is retrocausal in the epistemic sense: the distribution of \(M_\ell\) can only be interpreted after the terminal outcome \(Y\) is known, yet it conditions the observer’s assessment of how “safe” a lead ever was.

Multi-week traps arise when this single-game, stationary model is transplanted onto a season-long context. The paper assumes fixed \(p_A,p_B\) and equal \(N\) within a game [PAGE 5], but across weeks these parameters drift with injuries, weather, roster turnover, and coaching adjustments. Applying the continuous closed form \(F_{M_A}(x)=1-p_0/x\) to a sequence of games without re-estimating \(\mu\) and \(\sigma^2\) per contest commits a stationarity error: the Brownian approximation presumes time-homogeneous increments, which fails whenever a team’s scoring probability is not constant over the game or across opponents [PAGE 22]. Another trap is the equal-possession assumption; in real football, clock management, turnovers, and overtime create unequal effective \(N\), invalidating the exact mixture weights in Theorem 6 [PAGE 15, PAGE 22].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The paper models win probability as an exogenous function \(f(S_i,G,t)\) [PAGE 4], but real-time coaching decisions introduce recursive theory-of-mind layers that the model does not capture. Three interacting traps are relevant:

(1) Crisis habit regression. When a team builds a lead, play-calling often regresses to conservative “prevent” habits, lowering the scoring probability \(p\) and altering the variance structure of subsequent possessions. This violates the fixed-\(p\) assumption [PAGE 5] and drifts the process off the Doob martingale path assumed in Theorem 4 [PAGE 19].

(2) Counter-trap. The trailing team, recognizing the conservative shift, may increase aggression (fourth-down attempts, onside kicks, hurry-up offense), endogenously raising its own scoring probability while depressing the leader’s. Because the model treats \(p_A,p_B\) as fixed primitives [PAGE 5], this strategic adaptation is outside the filtration \(\mathcal F_k\) [PAGE 13], making the martingale property fail exactly when the counter-trap is executed.

(3) Clock. The possession count \(N\) is not an exogenous constant; game clock, timeouts, and two-minute-drill dynamics change the effective number of remaining possessions asymmetrically [PAGE 5, PAGE 22]. A team that bleeds the clock reduces \(N\) for its opponent, truncating the opponent’s opportunity to erase a lead and thereby distorting \(M_\ell\) relative to the equal-\(N\) simulation [PAGE 6].

These recursive layers mean that \(M_\ell\) in live games is not merely a function of pre-game strengths \(S_A,S_B\) and state \((G,t)\) [PAGE 4], but of the opponents’ beliefs about each other’s win-probability trajectories. The paper’s closed-form results are therefore best interpreted as equilibrium benchmarks under stationary, myopic play, not as exact descriptions of adaptive coaching behavior.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The paper itself enumerates the veto conditions on [PAGE 22]: scoring is often not binary, scoring probabilities vary during a game, possession counts are unequal, and weather, injuries, game strategy, and other external factors matter. I adjudicate these by layer:

Physical layer (clock and possession asymmetry): The model requires equal \(N\) for both teams [PAGE 5]. In actual games, time-management decisions, turnovers, and overtime create unequal possession counts. Veto rule: if \(|N_A-N_B|>0\) materially, the binomial formulation and the equal-\(N\) mixture weights in Theorem 6 [PAGE 15] are invalid; the empirical CDF of \(M_\ell\) will deviate from the piecewise closed form [PAGE 21].

Biomechanical layer (injury and fatigue): Fixed \(p_A,p_B\) assumes constant team strength [PAGE 5]. A mid-game injury to a primary play-caller or skill-position player changes the scoring kernel abruptly. Veto rule: if a key player is removed before \(t=T\), the process is no longer a time-homogeneous martingale with fixed transition probabilities; Doob’s optional stopping decomposition \(p_0=x\,\mathbb P(\tau_x<N)+\mathbb P(\tau_x=N)\) [PAGE 14 proof] ceases to describe the actual path distribution.

Weather layer (exogenous scoring shifts): Wind, precipitation, and temperature alter the scoring probabilities and their variance \(\sigma^2=p_A(1-p_A)+p_B(1-p_B)\) [PAGE 17]. Veto rule: when weather shifts \(p_A,p_B\) outside pre-game estimates, the Brownian drift \(\mu=p_A-p_B\) and diffusion coefficient \(\sigma^2\) become stochastic, breaking the Donsker approximation \(X_{\lfloor Nt\rfloor}\Rightarrow \mu t+\sigma B_t\) [PAGE 16–17].

Adjudication outcome: The continuous closed form \(F_{M_A}(x)=1-p_0/x\) [PAGE 19] is valid only in the intersection of the null veto set: stationary scoring probabilities, equal expected possessions, binary scoring outcomes per possession, and no material weather/injury shocks. The empirical match on 2002–2024 nflfastR data [PAGE 23–27] suggests average-case robustness across the NFL population, but individual games in the tails of the veto distribution (extreme weather, mid-game QB injury, severe possession asymmetry) fall outside the model’s proven regime.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios, each falsifiable using nflfastR play-by-play data [PAGE 23–26, PAGE 30], with predictions about where the paper’s closed form fails.

Scenario 1: High-wind exogenous volatility. Select games from the nflfastR sample with sustained wind speed above a threshold that materially affects passing (verifiable from game metadata). Prediction: Because wind changes \(p_A,p_B\) heteroskedastically across possessions and makes scoring less binary (more field-goal dependence, fewer touchdowns), the empirical distribution of \(M_\ell\) will exhibit thicker upper tails than the continuous closed form \(F_{M_A}(x)=1-p_0/x\) predicts [PAGE 19]. Specifically, the conditional probability that an eventual loser exceeds \(x=0.75\) will exceed the model’s bound in wind games relative to calm-weather controls.

Scenario 2: Possession asymmetry via clock drain. Identify games where one team runs a clock-control offense and ends with at least two fewer possessions than its opponent (verifiable from possession logs). Prediction: The equal-\(N\) assumption [PAGE 5] is violated, so the mixture weights \((1-p_0)\) and \(p_0\) in Theorem 6 [PAGE 15] are misspecified. The model will systematically understate \(M_\ell\) for the team with fewer possessions and overstate it for the team with more; the empirical piecewise CDF will lie outside the \([p_0^{(\text{dog})},p_0^{(\text{fav})})\) and \([p_0^{(\text{fav})},1)\) regimes described on [PAGE 21].

Scenario 3: Mid-game starting-quarterback injury. Use injury reports and play-by-play to find games where a starting QB exits before halftime and does not return. Prediction: The fixed-strength assumption \(p_A,p_B=\text{const.}\) [PAGE 5] breaks at the exit time, so the path \(\{p_k\}\) is no longer a Doob martingale with a single terminal filtration \(\mathcal F_k\) [PAGE 13]. The optional-stopping equality \(p_0=x\,\mathbb P(\tau_x<N)+\mathbb P(\tau_x=N)\) [PAGE 14 proof] fails because the post-exit scoring kernel differs from the pre-exit kernel. Consequently, in games where the injured team is the eventual loser, the observed \(M_\ell\) will exceed the quantile predicted by the continuous Brownian limit [PAGE 16–19], indicating that blown leads are more frequent than the stationary model allows after a strength shock.
</RLVR_COUNTERFACTUAL_VETOES>