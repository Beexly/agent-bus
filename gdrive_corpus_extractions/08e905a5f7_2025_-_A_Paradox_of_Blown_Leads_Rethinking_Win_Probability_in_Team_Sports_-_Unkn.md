---
source: "2025 - A Paradox of Blown Leads Rethinking Win Probability in Team Sports - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/New England Symposium on Statistics in Sports/2025"
pages: 127
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4847
---

<NATIVE_REASONING>
The user wants a deep analysis of the provided source text (a research paper about win probability in team sports, specifically focusing on blown leads). I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully read the source text and build a rigorous response.

Key content from source:
- Paper: "A Paradox of Blown Leads: Rethinking Win Probability in Team Sports" by Jonathan Pipping and Abraham J. Wyner (Wharton, NESSIS 2025).
- Case study: Super Bowl LVII, Eagles led 24-14 at start of 2nd half, 78.4% win probability, Chiefs won 38-35.
- Mathematical framework: W_i(t) = f(S_i, G, t), t ∈ [0, T]. Two-team game: W_A(t) + W_B(t) = 1.
- Quantity of interest: For eventual loser ℓ, M_ℓ = max_t W_ℓ(t).
- Simulation setup: Each team has equal possessions N. p_A, p_B fixed scoring probabilities. Ties broken by weighted coin flip.
- Win probability formula: W_PA(t) = P[Binom(n_t, p_A) + score_A(t) > Binom(n_t, p_B) + score_B(t)] + (p_A/(p_A+p_B)) P(A and B tie), where n_t = N - t.
- Simulation: Calculate win prob for each state, simulate 10,000 games, extract max win prob of eventual loser (M_ℓ).
- Case 1: p_A = p_B (symmetric). Case 2: p_A ≠ p_B (asymmetric).
- Symmetric case takeaways: Support of M_ℓ is [0.5, 1). Holding N constant, distribution identical for all p_A=p_B. Depends on difference. As N increases, distribution approaches continuous limit. In about half of all games, losing team attains win probability of at least 66% or more.
- Asymmetric case takeaways: Support [min{p_A, p_B}, 1). Distribution constant when |p_A - p_B| constant. Depends only on absolute difference |p_A - p_B|. Right-skewed as |p_A - p_B| increases. Larger strength differentials decrease proportion of games where losing team attains high win probability.
- Closed-form: Doob martingale p_k = E[Y | F_k], Y = 1{X_N ≥ 0}. M_A = max p_k. τ_x = min{k ≤ N : p_k ≥ x}. Optional stopping theorem.
- Theorem 1 (discrete): F_{M_A}(x) ≥ 1 - p_0/x, x ∈ [p_0, 1), equality when P(τ_x = N) = 0. Point mass p_0 at 1.
- Theorem 2 (conditional): F_{M_A|Y=0}(x) ≥ 1 - (p_0/(1-p_0)) * ((1-x)/x).
- Theorem 3: For even matchups, F_{M_ℓ}(x) ≥ 2 - 1/x, x ∈ [0.5, 1).
- Brownian limit: N → ∞, Donsker's Invariance Principle. X_{⌊Nt⌋} / (σ/√N) ⇒ B_t + μ*t, μ* = √N μ / σ.
- p_0 = Φ(μ*).
- Theorem 4 (continuous): F_{M_A}(x) = 1 - p_0/x = 1 - Φ(μ*)/x.
- Theorem 5: F_{M_A|Y=0}(x) = 1 - (p_0/(1-p_0)) * ((1-x)/x).
- Theorem 6: Piecewise distribution for M_ℓ.
- Even games: p_0 = 0.5, F_{M_ℓ}(x) = 2 - 1/x uniformly over [0.5, 1).
- Empirical validation: NFL games 2002-2024. Evenly matched (|Spread| < 2), unevenly matched (|Spread| = 3).
- Conclusion: Blown leads happen all the time, especially in even matchups. Conditioning on eventual loss changes distribution. Super Bowl LVII: Eagles max WP 78.4%, chance of losing from that position 21.6%, but event that eventual loser reached 78.4% is closer to 30%.

Wait, I need to be careful about "spreads" - the invariant says ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. The source text mentions "|Spread| < 2" and "|Spread| = 3". I cannot use the word "spread" or betting lines. I should refer to them as "point differential" or "pre-game win probability differential" or similar, but avoid the word "spread" entirely since it's a betting line term. Actually, the invariant says never mention spreads, totals, moneylines, or odds. So I must not repeat the word "spread" from the source. I can paraphrase as "pre-game team strength differential" or similar without using the prohibited term.

Also no toy equations: I must state formal LaTeX equations with proper units and assumptions. I should not invent fake ratios. The equations from the paper are formal (binomial, Brownian motion, martingale, optional stopping theorem). I need to cite page numbers exactly.

Let me plan each section:

<THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Derive from the binary possession model to the martingale.
- Show how optional stopping theorem yields inequality.
- Discuss the gray zones: discrete vs continuous (jumping over levels), N→∞ limit, point mass at x=1, piecewise mixture for underdog dominance region.
- Audit assumptions: equal possessions N, fixed p_A, p_B, binary scoring (score or no score), ties via weighted coin flip, independent possessions. Contrast with real sports: non-binary scoring, varying probabilities, unequal possessions, weather/injuries.
- Multi-hop: Super Bowl LVII example → 78.4% → conditional probability vs unconditional maximum → 21.6% vs ~30% paradox.

<SOURCE_OPERATORS_AND_EQUATIONS> (formal LaTeX, units, page citations, breakdown):
- W_i(t) = f(S_i, G, t) [PAGE 6]
- W_A(t) + W_B(t) = 1 [PAGE 7]
- M_ℓ = max_t W_ℓ(t) [PAGE 8]
- W_PA(t) = P[Binom(n_t, p_A) + score_A(t) > Binom(n_t, p_B) + score_B(t)] + p_A/(p_A+p_B) P(tie) [PAGE 16]
- n_t = N - t [PAGE 16]
- p_k = E[Y | F_k] Doob martingale [PAGE 43]
- Y = 1{X_N ≥ 0} [PAGE 42]
- X_k = score_A(k) - score_B(k) [PAGE 39]
- F_k = σ(X_0, ..., X_k) [PAGE 40]
- τ_x = min{k ≤ N : p_k ≥ x} [PAGE 46]
- Theorem 1 inequality [PAGE 47]
- Theorem 2 conditional [PAGE 48]
- Theorem 3 symmetric [PAGE 55]
- Brownian limit: X_{⌊Nt⌋}/(σ/√N) ⇒ B_t + μ*t [PAGE 70]
- p_0 = Φ(μ*) [PAGE 74]
- Theorem 4 continuous [PAGE 80]
- Theorem 6 piecewise [PAGE 86]
- Empirical: Super Bowl LVII 78.4% [PAGE 2], 21.6% vs 30% [PAGE 110].
- Units: probabilities dimensionless [0,1], time t ∈ [0,T] dimensionless or game-time normalized, N dimensionless count of possessions.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Doob martingales (Doob 1953) cited [PAGE 112].
- Donsker's Invariance Principle (Donsker 1951) [PAGE 112].
- Optional stopping theorem.
- Connection to gambler's ruin, ballot problem, Brownian meander, arc sine laws? The paper doesn't explicitly mention these but lineage is there.
- Multi-week traps: If analysts condition on "team had 78% WP" without conditioning on eventual loss, they misjudge rarity. Over a multi-week season, the look-elsewhere effect: many games, many leads blown, regression to mean.
- "In about half of all games, losing team attains WP ≥ 66%" [PAGE 30] - this is a trap for narrative-driven commentary.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Coaches/players regress to habitual play-calling when lead is blown? The paper doesn't discuss this directly, but I can frame it as the model assumes fixed p_A, p_B while real teams adapt strategically (game strategy mentioned as external factor [PAGE 99]).
- Counter-trap: The belief that a 78.4% WP means "only 21.6% chance to lose" is a static snapshot trap; the recursive realization is that the pathwise maximum over [0,T] conditional on loss is higher (~30%).
- Clock: t ∈ [0,T], terminal condition W_ℓ(T)=0. The finite-horizon martingale convergence. As N→∞, continuous paths eliminate jumps.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Vetoes that break the model assumptions:
  - Physical: unequal possessions (two-minute drill, overtime, onside kicks) [PAGE 99]
  - Biomechanical: injuries alter p_A, p_B mid-game; not fixed [PAGE 99]
  - Weather: affects scoring probabilities, not binary/fixed [PAGE 99]
  - Scoring often isn't binary (touchdowns vs field goals, safeties) [PAGE 96]
  - True scoring probabilities vary throughout game [PAGE 97]
- The model's breakdown regime: small N (discrete jumps), N=1 example [PAGE 59], p_0 near 0 or 1 (extreme mismatches), non-stationary p(t).

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I'll interpret as verifiable counterfactual veto scenarios where the model fails.
- Scenario 1: Weather-induced non-stationarity (e.g., heavy wind in fourth quarter). Veto: p_A, p_B not fixed → model invalid. Prediction: empirical M_ℓ distribution shifts right for underdog in adverse conditions, violating symmetric assumption.
- Scenario 2: Injuries to key playmakers mid-game. Veto: team strength S_i time-varying, violating f(S_i, G, t) with fixed S_i. Prediction: maximum win probability of losing team exceeds model bound when star player exits.
- Scenario 3: Unequal possessions due to overtime or clock management. Veto: equal N assumption fails. Prediction: in games with disparate possession counts, support of M_ℓ shifts below [min(p_A,p_B),1) or above depending on who gets last possession.

Word count: Need >= 1000 words total across sections. THINK_TRACE >= 400 words.

I must not mention betting lines. I will carefully avoid "spread", "total", "moneyline", "odds". I will say "pre-game win probability differential" or "team strength differential".

Let me draft carefully.

THINK_TRACE draft (aiming 500+ words):
- Start with the paradox: static conditional probability vs pathwise maximum.
- Super Bowl LVII: at halftime, Eagles 78.4%. If one conditions only on that state, P(loss) = 21.6%. But the event "eventual loser reaches at least 78.4% at some point" has probability closer to 30% [PAGE 110]. This is because M_ℓ = max_t W_ℓ(t) is a running maximum, not a terminal value.
- Derivation: binary possession model. Each team gets N possessions. Scoring indicator Bernoulli(p_i). X_k = cumulative differential. Win indicator Y = 1{X_N ≥ 0}. Doob martingale p_k = E[Y|F_k].
- Optional stopping at τ_x ∧ N gives p_0 = x P(τ_x < N) + P(τ_x = N). Since P(τ_x = N) ≥ 0, P(M_A ≥ x) ≤ p_0/x. This is an inequality because in discrete time the process can jump over x [PAGE 58-59].
- Gray zone 1: discrete jump-over. N=1, p_0=0.5: WPA(0)=0.5, WPA(1)∈{0,1}, so intermediate levels are skipped [PAGE 59]. Bound is not tight.
- Gray zone 2: continuous limit N→∞ via Donsker. X_{⌊Nt⌋}/(σ/√N) ⇒ B_t + μ*t. Continuous paths mean no jump-over, inequality becomes equality [PAGE 70, 80].
- Gray zone 3: point mass at x=1. MA has weight p_0 at 1 because if team wins, terminal prob is 1 [PAGE 47 footnote].
- Gray zone 4: asymmetric mixture. In region [1-p_0, p_0), M_ℓ comes entirely from underdog [PAGE 54]. This creates piecewise CDF [PAGE 55, 86].
- Gray zone 5: real-world violations. Scoring non-binary, probabilities time-varying, unequal possessions, weather/injuries [PAGE 96-99]. These veto the exact closed form but empirical NFL data still matches closely [PAGE 105-106].

SOURCE_OPERATORS_AND_EQUATIONS: List equations with page citations. I'll format LaTeX properly.

RETROCAUSAL_GENEALOGY: Cite Doob (1953) [PAGE 112], Donsker (1951) [PAGE 112]. Martingale theory, optional stopping, Brownian scaling. Multi-week trap: narrative fallacy of "inevitable collapse" vs base rate that half of even-matchup losers had ≥66% WP at some point [PAGE 30].

RECURSIVE_THEORY_OF_MIND: Contrast the static observer (78.4% → 21.6% loss chance) vs recursive observer (conditioning on eventual loss, running maximum). Crisis habit regression: coaches may abandon process under pressure; model assumes fixed p_i, so it cannot capture strategic deterioration. Counter-trap: the "blown lead" label is ex post; ex ante, reaching high WP then losing is statistically expected. Clock: finite horizon T, terminal absorption at 0 for loser.

CROSS_LAYER_VETO_ADJUDICATION: Physical (possession inequality), biomechanical (injury changes p_i), weather (non-stationary scoring). Breakdown regimes: N small (discrete), |p_A - p_B| large (skew), p_i time-varying.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.
1. Weather shock: high wind in Q4 reduces passing scoring probability non-stationarily. Veto: fixed p_i assumption broken. Prediction: empirical CDF of M_ℓ exhibits heavier right tail than piecewise formula for the passing team when it becomes underdog mid-game.
2. Mid-game injury: starting QB out after possession k. Veto: S_i fixed violated; p_i drops abruptly. Prediction: M_ℓ for injured team's opponent exceeds model bound because win probability path has downward discontinuity not captured by continuous Brownian limit.
3. Possession inequality: overtime or deliberate clock milking yields unequal N. Veto: equal N assumption fails. Prediction: team with final possession can have Wℓ(T) not equal to 0 if they win on last play, but more importantly the maximum can be reached at terminal step, increasing P(τ_x = N) and loosening the inequality bound.

Wait, the invariant says Wℓ(T) = 0 for eventual loser. If overtime, the model's N possessions might not apply. I'll frame it as violation of equal N and fixed game length.

Word count check: I need to write a lot. Let me ensure each section is substantial.

Let's write.

Important: I must include verbatim quotes where useful and cite [PAGE N]. I'll include some quotes.

Also, no invented ratios like Force/Fatigue. All equations must be from the source.

Let's produce the final answer in the exact XML structure.
</NATIVE_REASONING>

<THINK_TRACE>
The central paradox in Pipping & Wyner (2025) is the mismatch between a static conditional win probability and the pathwise maximum win probability of the eventual loser. In the Super Bowl LVII case study, the Eagles held a 78.4% win probability at the start of the second half [PAGE 2]. A static conditioning argument says the Eagles had only a 21.6% chance of losing from that state [PAGE 110]. However, the paper shows that the event “the eventual loser of this game reached 78.4% at some point” is provably closer to 30% [PAGE 110]. The gap arises because the quantity of interest is Mℓ = max_t Wℓ(t), a running maximum over t ∈ [0, T], not the terminal value Wℓ(T) = 0 [PAGE 8].

The derivation proceeds through a deliberately simplified binary-possession model. Each team receives exactly N possessions [PAGE 15]. Team strengths pA and pB are fixed probabilities of scoring on a given possession [PAGE 15]. The score differential Xk = scoreA(k) − scoreB(k) [PAGE 39] generates the filtration Fk = σ(X0, …, Xk) [PAGE 40]. The terminal win indicator is Y = 1{XN ≥ 0} [PAGE 42], and team A’s win probability is the Doob martingale pk = E[Y | Fk] [PAGE 43]. The stopping time τx = min{k ≤ N : pk ≥ x} [PAGE 46] allows application of the optional stopping theorem to the bounded martingale at τx ∧ N [PAGE 46], yielding p0 = x P(τx < N) + P(τx = N) [PAGE 114]. Since P(τx = N) ≥ 0, one obtains the inequality P(MA ≥ x) ≤ p0/x for x ∈ [p0, 1) [PAGE 115]. Equality holds only when P(τx = N) = 0, i.e., in the continuous limit [PAGE 47].

Several gray-zone regimes threaten the tightness of these bounds. First, discrete-time jump-over: because the win-probability process takes finitely many levels, it can jump over level x at the final step [PAGE 58]. The paper’s simplest example is N = 1 and p0 = 0.5, where WPA(0) = 0.5 and WPA(1) ∈ {0, 1}, skipping all intermediate values [PAGE 59]. This is a breakdown regime for the equality; only the inequality survives. Second, the continuous limit N → ∞ restores continuity via Donsker’s Invariance Principle [PAGE 70]: X⌊Nt⌋ / (σ/√N) converges in distribution to Bt + µ*t, with µ* = √N µ / σ and t ∈ [0, 1] [PAGE 70]. In this regime, continuous sample paths prevent level-skipping, and the inequalities in Theorems 1–3 become exact equalities [PAGE 80–86]. Third, there is a point mass of weight p0 at x = 1 for MA [PAGE 47 footnote], reflecting the fact that the eventual winner terminates at win probability 1. Fourth, in the asymmetric case, the support of Mℓ is [min{pA, pB}, 1) [PAGE 33], and in the interval [min{p0, 1−p0}, max{p0, 1−p0}), Mℓ receives contribution entirely from the underdog [PAGE 54], forcing a piecewise definition of FMℓ [PAGE 55].

Real-world violations are enumerated explicitly by the authors: scoring is often not binary [PAGE 96]; true scoring probabilities may vary throughout a game [PAGE 97]; teams often have unequal numbers of possessions [PAGE 98]; and weather, injuries, game strategy, and other external factors matter [PAGE 99]. Despite these violations, the empirical NFL distribution of Mℓ for 2002–2024 closely matches the closed-form solutions [PAGE 105–106], suggesting the simplified model captures first-order pathwise behavior even when its micro-assumptions are relaxed.

The multi-hop inference chain is therefore: static snapshot probability (21.6%) ≠ pathwise maximum conditioned on eventual loss (~30%); this gap is explained by the martingale maximal inequality; the inequality is tight only under continuous-path asymptotics; and real sports introduce veto layers (injury, weather, possession inequality) that shift the empirical distribution away from the idealized piecewise CDF while preserving its qualitative shape.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations from Pipping & Wyner (2025), NESSIS 2025:

1. Win probability functional (dimensionless probability, t ∈ [0, T]):
   \[
   W_i(t) = f(S_i, G, t), \qquad t \in [0,T]
   \]
   [PAGE 6]

2. Two-team complementarity (probability units):
   \[
   W_A(t) + W_B(t) = 1
   \]
   [PAGE 7]

3. Maximum win probability of eventual loser ℓ:
   \[
   M_\ell = \max_t W_\ell(t), \qquad W_\ell(T) = 0
   \]
   [PAGE 8]

4. Binary-possession win probability for state (G, t), where n_t = N − t possessions remain:
   \[
   WPA(t) = P\big[\text{Binom}(n_t, p_A) + \text{score}_A(t) > \text{Binom}(n_t, p_B) + \text{score}_B(t)\big] + \frac{p_A}{p_A+p_B} P(\text{A and B tie})
   \]
   [PAGE 16]

5. Score differential and filtration:
   \[
   X_k = \text{score}_A(k) - \text{score}_B(k), \qquad F_k = \sigma(X_0, \dots, X_k)
   \]
   [PAGES 39–40]

6. Terminal event and win-probability martingale:
   \[
   Y = \mathbf{1}\{X_N \geq 0\}, \qquad p_k = E[Y \mid F_k], \quad k = 0, \dots, N
   \]
   [PAGES 42–43]

7. Stopping time and maximal process:
   \[
   M_A = \max_{0 \leq k \leq N} p_k, \qquad \tau_x = \min\{k \leq N : p_k \geq x\}
   \]
   [PAGES 45–46]

8. Optional-stopping decomposition (discrete case):
   \[
   p_0 = x P(\tau_x < N) + P(\tau_x = N)
   \]
   [PAGE 114]

9. Theorem 1 inequality (dimensionless, x ∈ [p0, 1)):
   \[
   F_{M_A}(x) \geq 1 - \frac{p_0}{x}, \qquad \text{equality iff } P(\tau_x = N) = 0
   \]
   [PAGE 47]

10. Theorem 2 conditional distribution given loss Y = 0:
    \[
    F_{M_A \mid Y=0}(x) \geq 1 - \left(\frac{p_0}{1-p_0}\right)\left(\frac{1-x}{x}\right), \qquad x \in [p_0, 1)
    \]
    [PAGE 48]

11. Theorem 3 symmetric-case CDF for Mℓ:
    \[
    F_{M_\ell}(x) \geq 2 - \frac{1}{x}, \qquad x \in [0.5, 1)
    \]
    [PAGE 55]

12. Brownian scaling limit via Donsker’s Invariance Principle:
    \[
    \frac{X_{\lfloor Nt \rfloor}}{\sigma/\sqrt{N}} \xrightarrow{d} B_t + \mu^* t, \qquad \mu^* = \frac{\sqrt{N}\,\mu}{\sigma}, \quad t \in [0,1]
    \]
    \[
    \mu = p_A - p_B, \qquad \sigma^2 = p_A(1-p_A) + p_B(1-p_B)
    \]
    [PAGE 70]

13. Continuous win probability and initial favorite probability:
    \[
    p_0 = P(Y=1) = \Phi(\mu^*), \qquad p_t = E[Y \mid F_t], \quad t \in [0,1]
    \]
    [PAGES 74, 76]

14. Theorem 4 continuous distribution of MA:
    \[
    F_{M_A}(x) = 1 - \frac{p_0}{x} = 1 - \frac{\Phi(\mu^*)}{x}, \qquad x \in [\Phi(\mu^*), 1)
    \]
    [PAGE 80]

15. Theorem 6 piecewise CDF for Mℓ (favorite A, µ* ≥ 0):
    \[
    F_{M_\ell}(x) =
    \begin{cases}
    1 - \dfrac{1-p_0}{x}, & x \in [1-p_0, p_0) \\[6pt]
    2 - \dfrac{1}{x}, & x \in [p_0, 1)
    \end{cases}
    \qquad \text{where } p_0 = \Phi(\mu^*)
    \]
    [PAGE 86]

16. Evenly-matched specialization:
    \[
    p_0 = 0.5, \qquad F_{M_\ell}(x) = 2 - \frac{1}{x} \quad \text{uniformly over } x \in [0.5, 1)
    \]
    [PAGES 89]

17. Empirical Super Bowl LVII figures:
    \[
    W_{\text{Eagles}} = 0.784 \text{ at start of 2nd half}; \quad P(\text{loss} \mid \text{state}) = 0.216; \quad P(\text{eventual loser reached } 0.784) \approx 0.30
    \]
    [PAGES 2, 110]

Units: all probabilities are dimensionless elements of [0,1]; N is a dimensionless possession count; t and T are normalized game-time coordinates; µ and σ² are per-step scoring-process moments.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s mathematical genealogy traces directly to Doob’s theory of stochastic processes and martingales [Doob, 1953, cited on PAGE 112] and to Donsker’s Invariance Principle [Donsker, 1951, cited on PAGE 112]. The Doob martingale pk = E[Y | Fk] [PAGE 43] is the discrete-time analog of a Brownian martingale, and the optional stopping theorem at τx ∧ N [PAGE 46] is the classical tool used in gambler’s-ruin and ballot-problem derivations. The continuous limit X⌊Nt⌋ / (σ/√N) ⇒ Bt + µ*t [PAGE 70] places the scoring differential in the domain of Brownian motion with drift, so that the maximum win probability M becomes a Brownian excursion-type functional over t ∈ [0, 1].

A multi-week trap is embedded in the empirical claim that “in about half of all games, the losing team attains a win probability of at least 66% or more” [PAGE 30]. Over a season, commentators treat each blown lead as a discrete crisis narrative, but the base-rate distribution of Mℓ implies that reaching a high win probability and then losing is the modal path for evenly matched teams, not an anomaly. The retrospective labeling of a game as a “blown lead” is therefore a post hoc selection on the terminal outcome Y = 0, which inflates the perceived rarity of the trajectory. Recursively, because the conditioning event is “eventual loss,” the distribution of the running maximum is shifted upward relative to the unconditional snapshot probability; analysts who condition only on the observed state at time t (e.g., 78.4% at halftime) and forget to condition on the eventual loss commit a selection bias that persists week after week across the schedule.

The reference class problem is acute: the paper’s symmetric result FMℓ(x) = 2 − 1/x [PAGE 89] applies only when pA = pB, yet real NFL games are rarely perfectly even. The asymmetric piecewise form [PAGE 86] shows that even modest strength differentials compress the support to [min{pA, pB}, 1) [PAGE 33] and right-skew the distribution as |pA − pB| increases [PAGE 36], meaning that “blown leads” become less common in lopsided matchups. A multi-week model that ignores this asymmetry will systematically overestimate comeback probability in favorites’ losses and underestimate it in underdogs’ losses.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus the model’s fixed-parameter assumption: the authors explicitly note that “true team scoring probabilities may vary throughout a game” and that “weather, injuries, game strategy, and other external factors matter” [PAGES 97, 99]. In a recursive theory-of-mind framing, a coaching staff that recognizes its win probability is collapsing may regress to crisis habits—abandoning the process that generated the lead, changing play-calling aggressiveness, or altering substitution patterns. This time-variation in strategic intensity violates the model’s assumption that pA and pB are fixed [PAGE 15] and that team strengths SA and SB are static inputs to f(Si, G, t) [PAGE 6]. If crisis habits systematically depress the trailing team’s scoring probability p_i in the final possessions, the realized path of Wℓ(t) will depart from the Doob martingale implied by pre-game strengths.

The counter-trap is the static conditional probability fallacy. At the Super Bowl LVII halftime state, the Eagles’ win probability was 78.4%, so the instantaneous chance of losing was 21.6% [PAGE 110]. A first-order theory of mind treats this as the relevant risk assessment. A second-order recursive theory recognizes that the event under study is not “the Eagles lose from this state” but “the eventual loser attains at least this state at some point,” which the paper bounds near 30% [PAGE 110]. The counter-trap is therefore to treat any single high-win-probability snapshot as evidence of an unlikely collapse, when the pathwise maximum distribution says such collapses are statistically routine in even matchups.

Clock structure imposes a hard boundary: Wℓ(T) = 0 for the eventual loser [PAGE 8]. In discrete time, the terminal step can create a jump to absorption, generating the point mass at x = 1 for the winner [PAGE 47 footnote] and the possibility P(τx = N) > 0 that weakens the inequality to non-equality [PAGE 47]. As N → ∞, the clock becomes continuous [0, 1], sample paths are continuous, and τx is a true first-passage time of a Brownian martingale [PAGE 70], so the optional stopping theorem yields exact equalities rather than bounds. The recursive implication is that finite-possession sports (football, basketball) operate in the discrete, jump-prone regime, whereas the continuous approximation is most defensible for high-possession limits or when possession count is very large.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Three cross-layer vetoes can invalidate the closed-form solution even when the empirical distribution appears to match:

1. Physical-layer veto: unequal possession counts. The model assumes “each team has an equal number of possessions N” [PAGE 14]. In actual football, the team that receives the opening kickoff of the second half, overtime possession rules, or deliberate clock management can create unequal N between teams. If N_A ≠ N_B, the filtration is no longer symmetric across a common horizon k = 0, …, N, and the Doob martingale pk = E[Y | Fk] [PAGE 43] is defined on mismatched information sets. The terminal event Y = 1{XN ≥ 0} [PAGE 42] assumes a common terminal index N. Breakdown regime: whenever possession disparity exceeds one full scoring opportunity, the support [min{pA, pB}, 1) [PAGE 33] and the piecewise mixture weights (1 − p0) and p0 [PAGE 54] no longer apply, because the underdog’s maximum may occur at a terminal possession the favorite does not match.

2. Biomechanical/injury-layer veto: time-varying team strength. The model fixes pA and pB [PAGE 15]. An injury to a primary playmaker mid-game causes a downward step discontinuity in that team’s scoring probability. Let p_i(t) be the true time-dependent scoring probability. Then X_k is no longer a sum of i.i.d. Bernoulli increments with fixed parameter, so Donsker’s scaling limit X⌊Nt⌋ / (σ/√N) ⇒ Bt + µ*t [PAGE 70] fails because the Lindeberg condition and stationary increments assumption are violated. The drift µ = pA − pB [PAGE 69] becomes µ(t), and the Brownian approximation with constant µ* is invalid. Prediction: the empirical CDF of Mℓ for the injured team will exhibit a left-shifted support relative to the fixed-p formula, because the win-probability path can drop discontinuously and never recover to the levels predicted by pre-game p_i.

3. Weather-layer veto: non-stationary scoring environment. Weather (wind, precipitation, temperature) alters the binary scoring probability in a time-dependent way [PAGE 99]. If a storm arrives in the final quarter, p_A and p_B both change, breaking the fixed-parameter assumption [PAGE 15] and the homogeneity of the scoring process required for the binomial formulation [PAGE 16]. Moreover, scoring “often isn’t binary” [PAGE 96]: a possession can yield 0, 3, 6, or 7 points, so score_A(k) − score_B(k) is not a simple Bernoulli random walk. Breakdown regime: when weather-induced variance in per-possession scoring exceeds the Bernoulli variance p_i(1 − p_i) [PAGE 69], the σ² term in the Brownian scaling [PAGE 69] is misspecified, and the continuous-limit equality in Theorem 4 [PAGE 80] becomes an approximation whose error grows with the magnitude of the weather shock.

Verdict: the closed-form solution is robust only in the intersection of (a) equal fixed N, (b) stationary binary scoring probabilities, and (c) absence of exogenous shocks. Real games violate all three to some degree, which is why the authors frame their result as a close empirical match rather than an exact generative law [PAGE 105].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Weather-induced non-stationarity): A cold-weather game with sustained high winds beginning at possession k = N/2 reduces the passing-scoring probability for the pass-heavy team from p_fav to p_fav′ < p_dog for the remainder of the game. Veto: fixed p_i assumption [PAGE 15] and stationary Bernoulli increments [PAGE 69] are violated; the Brownian drift µ* is no longer constant. Verifiable prediction: the empirical distribution of Mℓ for games with verified in-game weather regime shifts will show a heavier right tail above x = 0.75 than the piecewise CDF in Theorem 6 [PAGE 86] predicts for pre-game strengths, because the underdog’s win probability can surge late when the favorite’s scoring probability collapses.

Scenario 2 (Mid-game biomechanical injury): The starting quarterback of the favorite exits after possession k = 0.4N, causing an immediate drop in that team’s possession scoring probability. Vetto: team strength S_i fixed [PAGE 6] and p_i fixed [PAGE 15] are violated; the martingale p_k = E[Y | Fk] [PAGE 43] is no longer driven by a time-homogeneous transition kernel. Verifiable prediction: in games with a confirmed star-player injury before the final two minutes, the conditional CDF F_{Mℓ | Y=0}(x) will exceed the model bound 1 − (p0/(1−p0))·((1−x)/x) [PAGE 48] for x > 0.8, because the losing favorite’s win-probability path attains a higher maximum before the injury-induced collapse than the fixed-parameter model allows.

Scenario 3 (Possession inequality via overtime clock structure): A game ends in regulation with unequal possession counts because the team winning the coin toss elects to defer and the other team runs out the clock, or because overtime grants one team a final possession the other never matches. Vetto: equal N assumption [PAGE 14] and common terminal index N [PAGE 42] are violated. Verifiable prediction: in games with verified possession disparity |N_A − N_B| ≥ 1, the support of Mℓ will extend below min{pA, pB} [PAGE 33] for the team with fewer possessions, because that team never receives the opportunity to push its win probability into the higher region; conversely, the team with the final possession can have a terminal Wℓ(T) = 1 that injects an atom at x = 1 not accounted for by the discrete inequality’s equality condition P(τx = N) = 0 [PAGE 47].
</RLVR_COUNTERFACTUAL_VETOES>