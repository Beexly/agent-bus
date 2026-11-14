---
source: "2023 - Aiming for Competitive Balance Designing Fair Handicap Systems for Darts using a Markov Decision Process Framework - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2023"
pages: 6
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5737
---

<NATIVE_REASONING>
The user wants a rigorous analysis of a provided research paper on handicap systems for darts using an MDP framework. I must follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. (I can talk about win probability, expected throws, etc., but not betting odds/lines).
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>

I need to produce at least 1,000 words total across these sections, with THINK_TRACE alone >=400 words.

Let me carefully extract source material with page markers. The text has page numbers embedded: 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 36. The prompt says PAGES: 6 but the content has slide/page numbers. I should cite [PAGE N] markers corresponding to the visible slide numbers in the text.

Key content:
- Rules: 501 start, race to zero, checkout must hit double exactly zero, bust if impossible checkout [PAGE 2].
- Double ring, single, bullseye, single, triple ring image [PAGE 2].
- Competitive imbalance and handicap systems [PAGE 3].
- 501 0 image [PAGE 3].
- Research goals [PAGE 4]: optimization-driven handicapping, fairness intuition, model novel dynamic credit handicap (Chan and Singal, 2016), Credit: deterministically choose outcome for single "throw" [PAGE 4].
- Model: MDP [PAGE 6].
- State s∈S [PAGE 6].
- State: 1. Player's Remaining Score {0,...,501}; 2. Player's Remaining Credits {0,...,9} [PAGE 7].
- Action a∈A [PAGE 8].
- A = A_aim ∪ A_hit (text has garbled A!"#$% ∪𝐀&#'()! but meaning: A contains 729 targets on board player may aim for; A contains 62 possible board regions player may "hit" with perfect execution) [PAGE 9].
- Transition probabilities p(s' | s, a) [PAGE 10].
- Uncertain Outcome: use professional player's skill model* N(μ, Σ) [PAGE 11].
- Deterministic Outcome: credit hit desired board region with certainty (Haugh and Wang, 2022) [PAGE 11].
- Cost c [PAGE 12, 13].
- Different skill levels: execution error multiplier ε (Chan et al, 2022). Strongest ε=1 N(μ, Σ). Weaker ε>1 N(ε μ? Actually text says N_ε(μ, Σ) maybe N(ε^2 μ, Σ)? Let's read: "𝒩(𝜇, Σ) Strongest Player 𝝐= 𝟏 𝒩 𝝐 2(𝜇, Σ) Weaker Players 𝝐> 𝟏". Likely N(ε^2 μ, Σ) or scaled covariance. I should quote verbatim carefully and note ambiguity. Actually text: "𝒩(𝜇, Σ) **Strongest Player** 𝝐= 𝟏 𝒩 𝝐 2(𝜇, Σ) **Weaker Players** 𝝐> 𝟏". This likely means N(ε^2 μ, Σ) but rendered poorly. I will quote as rendered and state assumption.
- Bellman Equation / Optimal Value [PAGE 15].
- Theorem 1: Value function is expected number of throws for a player to check out when using a given policy. [PAGE 16].
- Definition 1: weaker player has higher expected throws to check out from score 501 (no credits). [PAGE 16].
- Definition 2: competitive balance occurs when two players have equal number of expected throws to check out. [PAGE 16].
- Theorem 2: There exists a unique number of credits that gives weaker player needed advantage to check out with equal or less expected throws compared to stronger player. [PAGE 16].
- Results: solved more complex model including turn feature (players alternate every 3 throws) [PAGE 17? Actually text says Results* then [PAGE 17 missing?] then Solving without Dynamic Credits [PAGE 18].
- Solving without Dynamic Credits: N6(μ,Σ) N4(μ,2Σ) N5(μ,8Σ) N3(μ,9Σ) ε=1 ε=2 ... ε=8 ε=9 NoCredits ... Strongest Weakest [PAGE 18]. Wait ordering seems garbled: 𝜖=𝟏 strongest, 𝜖=𝟗 weakest.
- Results: Execution Error and Optimal Policy [PAGE 19]: Distribution of throw outcomes (top) vs optimal policy (bottom) for ε=1 (left) and ε=9 (right).
- Results: Sources of Imbalance: Main imbalance at end of game. Stronger player could dominate across all scores (head-start could never balance competition). Expected turns remaining at different scores for players with different execution error [PAGE 20].
- Results: Heuristic Head-Start Handicap [PAGE 21]: Current heuristic head-start handicaps do not balance competition. Heuristic spot point handicap when stronger player ε=1 (markers).
- Results: Optimized Head-Start Handicap [PAGE 22]: Optimized spot point handicap when stronger player ε=1 (markers).
- Testing Handicaps with Simulation [PAGE 23]: Solved MDP for Player 1, Simulate Match Win 10,000 Outcomes Probabilities matches, Solved MDP for Player 2...
- Results: Optimized Head-Start Handicap [PAGE 24]: Stronger player wins less than 50% of the time using this handicap. Probability stronger player wins after 10,000 simulated matches for different skill mismatches.
- Results: Optimized Head-Start Handicap [PAGE 25-27]: Number of turns for two mismatched players in simulation with 10,000 iterations.
- Adding Dynamic Credits [PAGE 28]: ε=1 ... ε=9, NoCredits, 1Credit ... 8Credits, 9Credits.
- Results: Dynamic Credits [PAGE 29]: Dynamic credit handicap finds number of credits where weaker and stronger player have same expected number of turns starting from score 501.
- Results: Dynamic Credit Handicap [PAGE 30]: Stronger and weaker players have ~equal probability of winning. Probability stronger player wins after 10,000 simulated matches.
- Results: Dynamic Credit Handicap [PAGE 31-32]: Number of turns... reshape distribution to equalize win probability.
- Revisiting Competitive Balance [PAGE 33]: Competitive balance when equal expected throws to check out. Fairness when equal probability of winning. One-player model ~2 million states, single MDP, <1 minute, regular RAM. Two-player model ~2 billion states, system of MDPs, 17 hours, high RAM.
- Conclusion [PAGE 34]: Existing head-start handicaps not fair. Main imbalance at end of game cannot be mitigated by head-start. Heuristic head-start leaves weaker at disadvantage. Optimized head-start leaves stronger at disadvantage. Finding fair head-start possible but computationally impractical. Still possible no optimal head-start exists. Dynamic credit handicap promising: guaranteed always has a value that can balance competition; alters distribution of turns to check-out of weaker player to mimic stronger player; can be accurately estimated with simplified modelling framework.
- References [PAGE 36]: Chan and Singal 2016; Haugh and Wang 2022; Chan et al 2022; Bertsekas and Tsitsiklis 2008.

Now, structure.

THINK_TRACE >=400 words. Deep multi-hop derivation & gray-zone audit. I need to derive the MDP formally, discuss state space, action space, transition kernel, cost structure, Bellman optimality, credit handicap as action augmentation, uniqueness theorem, computational complexity (2M vs 2B states), head-start vs dynamic credit, end-game imbalance, turn alternation every 3 throws, skill error multiplier ε, Gaussian skill model N(μ,Σ), deterministic credit outcome, singularity/breakdown regimes (ε→∞, credits saturation at 9, bust states, exact zero constraint, double-out requirement, credit determinism vs stochastic throw, two-player state explosion, non-stationarity of opponent policy, etc.). Must be >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, exact breakdown. I will define:
- State space S = { (r, c) : r ∈ {0,...,501}, c ∈ {0,...,9} } plus terminal. |S| ≈ 502×10 = 5,020 per player? But text says ~2 million states one-player, ~2 billion two-player. Wait: 502*10 = 5,020. That's not 2 million. Maybe the state includes more (e.g., turn, throws remaining in turn, board state, opponent state). The text says "Solved a more complex model formulation which includes the turn feature of the game (i.e., players alternate every 3 throws)" [PAGE 17/18]. And [PAGE 33] one-player ~2 million states, two-player ~2 billion states. So the state space is larger than just (score, credits). Perhaps includes whose turn, number of throws left in turn (3), maybe previous throws? I should note this discrepancy as a gray-zone: the slide text says state comprises remaining score and remaining credits [PAGE 7], yet computational results cite ~2M and ~2B states [PAGE 33], implying additional hidden state variables (turn counter, active player, throw index within turn). I must cite this.

Actions: A = A_aim ∪ A_hit? Actually text: A contains 729 targets player may aim for; A contains 62 possible board regions player may "hit" with perfect execution. This seems like A_aim (729) and A_hit (62) but garbled. I will define A = A_aim ∪ A_credit maybe? Wait: "Credit: deterministically choose outcome for single 'throw'" [PAGE 4]. So credits allow deterministic hit. The action space likely includes aiming at one of 729 targets (with stochastic outcome per N(μ,Σ)) or using a credit to deterministically hit one of 62 regions. But slide [PAGE 9] says A = A_aim ∪ A_hit with 729 targets and 62 regions. Hmm: maybe A_aim is where you aim (729 possible aim points), A_hit is where you actually hit (62 board regions) — but action is aim, outcome is hit region. The credit action overrides stochasticity. I'll formalize carefully and flag the notation rendering issue.

Transition: p(s' | s, a) = ∫ N(μ_a, Σ_ε) over region mapping to s'. For credit: p(s' | s, a_credit) = 1_{s' = T(s, region)} deterministic. Cost c(s,a) = 1 throw (unit: throws). Value V(s) = expected throws to checkout. Bellman: V*(s) = min_{a∈A(s)} [ c(s,a) + Σ_{s'} p(s'|s,a) V*(s') ], with V*(0) = 0. Terminal bust handled by cost/reset? Need to define bust: if score becomes negative or non-checkoutable, maybe penalty or state remains. The text says can bust by landing on score where checking out is impossible. I should define absorbing or penalty.

Skill model: strongest ε=1: throw ~ N(μ, Σ). Weaker ε>1: N(ε^2 μ? Σ?) — text garbled: "𝒩 𝝐 2(𝜇, Σ)". I will quote verbatim and state assumption that covariance scales as ε²Σ or mean precision degrades. Cite [PAGE 14] and Chan et al. 2022.

Competitive balance: V_weak(501, c*) = V_strong(501, 0) (expected throws equal). Theorem 2: unique c* exists. Fairness: P(win_weak) = P(win_strong) ≈ 0.5.

Breakdown/singularity: ε such that weaker cannot checkout even with 9 credits? If required credits > 9, no balance within credit cap (singularity at c_max=9). Also if head-start score difference needed exceeds 501 or negative, infeasible. Two-player MDP state space explosion (~2^31) makes exact solution intractable (>17 hours). Turn alternation every 3 throws introduces non-Markovianity unless throw index included in state. Bust states create absorbing loops if policy keeps aiming at impossible checkouts.

RETROCAUSAL_GENEALOGY: Historical lineage: Chan and Singal 2016 MDP handicap for tennis [PAGE 36]; Haugh and Wang 2022 darts dynamic zero-sum game [PAGE 11, 36]; Chan et al. 2022 tennis intention vs execution [PAGE 14, 36]; Bertsekas & Tsitsiklis 2008 [PAGE 36]. Multi-week traps: heuristic head-start static vs dynamic credit; optimizing head-start computationally impractical (17 hours, high RAM) and may not exist; dynamic credit solves single-player MDP (<1 min) then simulates; risk of overfitting to ε=1 stronger player assumption; simulation 10,000 matches has standard error ~0.5% for p=0.5, so "~equal probability" may hide bias; credit cap at 9 may be insufficient for large ε gaps; deterministic credit violates real-world motor control (no certainty), creating a model-reality gap.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is a strange section but I must interpret: players under pressure regress to habitual aiming (crisis habit regression); counter-trap is anticipating opponent's handicap exploitation; clock is the 3-throw turn limit and match length. I need to weave theory of mind: stronger player knows weaker has credits; weaker knows stronger knows; recursive beliefs about credit usage timing (end-game vs early-game). Crisis habit regression: under pressure, players revert to familiar targets (e.g., bullseye) rather than optimal checkout, violating MDP optimal policy. Counter-trap: stronger player may alter strategy to force weaker to burn credits early. Clock: turn-based alternation every 3 throws means credits must be allocated within temporal constraints; end-game imbalance dominates because fewer safe checkout paths remain.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Physical: dart board dimensions, double ring width, oche distance (2.37 m), gravity, drag. Biomechanical: tremor, grip release, fatigue across 10,000 simulated matches vs real human stamina; Gaussian error assumption may fail under fatigue (non-stationary Σ). Weather: air density, humidity affecting dart flight (not modeled). Veto: if any physical layer violates Gaussian i.i.d. assumption or credit determinism, the MDP policy is invalid. Weather veto: outdoor darts affected by wind; indoor assumed. Biomechanical veto: execution error multiplier ε constant across match ignores fatigue-induced ε(t) growth. Physical veto: 62 board regions vs 729 aim points discretization ignores continuous motor noise and board wear.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning Verifiable Rewards? I'll create three counterfactual veto scenarios that are verifiable:
1. Veto: Credit cap saturation. If ε_gap requires c* > 9 credits, dynamic credit cannot achieve balance. Prediction: For ε=9 weakest vs ε=1 strongest, required credits exceed 9, so win probability remains <0.5 for weaker; simulation at [PAGE 30] would show stronger still favored despite max credits.
2. Veto: Deterministic credit unrealizability. If human cannot execute deterministic hit (credit) with certainty, the MDP's credit transition p=1 is false. Prediction: Real-world win rate for credit-using player falls below simulated 0.5; variance increases; the "equal expected turns" equality breaks because credit throws have same ε as normal throws.
3. Veto: Two-player state explosion / non-stationarity. If exact two-player MDP (~2B states) is required for equilibrium policy but only single-player MDPs are solved (<1 min), the policies are not Nash equilibrium. Prediction: Simulated win rates from independent optimal policies (Player 1 MDP vs Player 2 MDP) will deviate from 0.5 when both adapt; stronger player can exploit weaker's credit timing, producing a counter-trap win rate >0.5 despite static balance.

Need predictions that are verifiable (falsifiable). Include units: throws, seconds, credits dimensionless, win probability dimensionless, states count dimensionless, RAM in GB maybe not in source, time 17 hours.

Word count: Need >=1000 total. THINK_TRACE >=400. I'll aim for THINK_TRACE ~600, SOURCE_OPERATORS ~350, RETRO ~250, RECURSIVE ~200, CROSS_LAYER ~200, RLVR ~200. Total ~1800. Good.

Citations: Use [PAGE N] exactly. Verbatim quotes: I'll include short quoted phrases with [PAGE N].

Betting lines: Avoid "odds", "spread", "moneyline", "total". Use "win probability", "expected throws", "expected turns". Do not mention betting. Good.

Toy equations: No fake ratios. Use real MDP Bellman, Gaussian, credit transition. Good.

Let's write.

Need to be careful with LaTeX formatting inside XML. Use \( ... \) or $$ ... $$? I'll use standard LaTeX.

Let's draft THINK_TRACE:

Start with state space derivation. The paper defines state s ∈ S with remaining score r ∈ {0,...,501} and remaining credits c ∈ {0,...,9} [PAGE 7]. Naively |S| = 502 × 10 = 5,020, yet [PAGE 33] reports ~2 million one-player states and ~2 billion two-player states. This implies omitted state variables: active player, throw index within the three-throw turn [PAGE 17], and possibly bust/history flags. I will derive the augmented state \tilde{s} = (r, c, τ, ι) where τ ∈ {1,2} active player and ι ∈ {0,1,2} throws remaining in turn, yielding |S| ≈ 502 × 10 × 2 × 3 ≈ 30,120 per player configuration, still far below 2×10^9; therefore the two-player state must be the joint product |S|² × turn/throw ≈ (3×10⁴)² × 6 ≈ 5.4×10⁹, consistent with the reported ~2 billion order of magnitude when symmetries and terminal states are pruned. This is a key gray-zone: slides [PAGE 7] and [PAGE 33] are not explicitly reconciled.

Action space: A = A_aim ∪ A_credit? Slide [PAGE 9] renders A = A_aim ∪ A_hit with 729 aim targets and 62 hit regions under perfect execution [PAGE 9]. Operationally, an aim action a ∈ A_aim induces a stochastic hit region via the skill model; a credit action \bar{a} ∈ A_credit deterministically selects a hit region [PAGE 4, 11]. I will treat A(s) = A_aim ∪ {credit actions feasible at (r,c)} with c>0.

Transition kernel: For aim action a at target μ_a, the observed landing is X ~ N(μ_a, Σ_ε) [PAGE 11, 14]. The board partition maps X to one of 62 regions; the score update is r' = r − value(region), with bust if r' < 0 or r' is not a valid checkout state (cannot finish on double) [PAGE 2]. For credit action, p(s' | s, \bar{a}) = 1{s' = T(s, region_\bar{a})} [PAGE 11]. Cost c(s,a) = 1 throw per decision epoch [PAGE 12-13]; terminal cost 0 at r=0 with valid double checkout [PAGE 2].

Bellman optimality: V*(s) = min_{a∈A(s)} { c(s,a) + Σ_{s'} p(s'|s,a) V*(s') } [PAGE 15-16]. Theorem 1: V is expected throws to checkout under policy [PAGE 16]. Definition 2: competitive balance ⇔ V_weak(501,0) = V_strong(501,c*) [PAGE 16]. Theorem 2: unique c* exists such that weaker with c* credits has expected throws ≤ stronger [PAGE 16]. Fairness (distributional) requires P(win_weak) = P(win_strong) ≈ 0.5, stronger than balance [PAGE 33].

Skill stratification: strongest ε=1 ⇒ throw ∼ N(μ, Σ); weaker ε>1 ⇒ degraded model [PAGE 14]. The slide rendering "𝒩 𝝐 2(𝜇, Σ)" is ambiguous; I assume covariance scales as ε²Σ or precision degrades quadratically, consistent with execution-error multiplier literature (Chan et al., 2022) [PAGE 14, 36]. As ε ↑, the density mass near high-value small regions (double ring, triple ring) collapses, increasing expected throws nonlinearly, especially near end-game where only few doubles allow exact zero [PAGE 20].

Head-start vs dynamic credit: A static head-start reduces the stronger player's starting score or gives weaker a score lead. Because imbalance is concentrated at end-game [PAGE 20], no fixed head-start can equalize expected throws across all scores; heuristic leaves weaker disadvantaged, optimized leaves stronger disadvantaged [PAGE 34]. Dynamic credits alter the transition kernel mid-match (deterministic hits) and reshape the entire turn distribution to mimic the stronger player [PAGE 29, 32]. This is the theoretical advantage: credits are state-contingent, not path-fixed.

Singularity/breakdown: (i) c* > 9: if the unique balancing credit exceeds cap 9, no feasible dynamic credit balance exists within the model [PAGE 7, 28]; (ii) ε → ∞: weaker cannot reach any double from 501 even with deterministic credits because score reduction per throw is bounded by max region value (60? bullseye 50, triple 20 = 60) and exact-zero constraint; expected throws diverge; (iii) two-player joint MDP exact solution is computationally singular at ~2×10⁹ states requiring 17 hours and high RAM [PAGE 33], so the reported results rely on decoupled single-player MDPs plus simulation, not a true Markov perfect equilibrium; (iv) credit determinism is a modeling idealization (Haugh and Wang, 2022) [PAGE 11] that violates human motor certainty.

This should be >400 words.

SOURCE_OPERATORS_AND_EQUATIONS: formalize everything with page citations.

RETROCAUSAL_GENEALOGY: lineage and traps.

RECURSIVE_THEORY_OF_MIND: crisis habit regression, counter-trap, clock.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios + predictions.

Let's write carefully with word counts. I'll now compose final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The paper defines the darts state as \(s \in S\) with two explicit components: remaining score \(r \in \{0,\dots,501\}\) and remaining credits \(c \in \{0,\dots,9\}\) [PAGE 7]. Taken literally, this yields only \(502 \times 10 = 5{,}020\) states per player, yet [PAGE 33] reports approximately \(2 \times 10^{6}\) one-player states and approximately \(2 \times 10^{9}\) two-player states. This is a primary gray-zone: the slide text never reconciles the minimal state tuple with the reported computational scale. The missing state variables must include the active player identity, the throw index within the three-throw turn [PAGE 17], and likely bust or checkout-eligibility flags. If each player carries \(\tilde{s} = (r,c,\tau,\iota)\) with \(\tau \in \{1,2\}\) and \(\iota \in \{0,1,2\}\), the single-player augmented space is roughly \(502 \times 10 \times 2 \times 3 \approx 30{,}120\), still orders of magnitude below \(10^{6}\), which suggests additional discretization of aim error, board-region occupancy, or opponent-score coupling is implicit but unstated. The two-player joint space is then approximately the Cartesian product of both players’ augmented states multiplied by turn/throw bookkeeping, landing in the \(10^{9}\) regime cited [PAGE 33], consistent only after pruning terminal states and score symmetries.

The action space is similarly garbled in the source rendering. Slide [PAGE 9] writes \(A = A_{\text{aim}} \cup A_{\text{hit}}\), where \(A_{\text{aim}}\) contains 729 targets a player may aim for and \(A_{\text{hit}}\) contains 62 board regions a player may “hit” with perfect execution. Operationally, an aim action \(a \in A_{\text{aim}}\) produces a stochastic landing region, whereas a credit action invokes the dynamic-credit mechanism introduced in the research goals: “Credit: deterministically choose outcome for single ‘throw’” [PAGE 4], grounded in Haugh and Wang (2022) [PAGE 11]. Thus the feasible action set at state \((r,c)\) is \(A(r,c) = A_{\text{aim}} \cup \{ \bar{a}_{k} : c > 0,\ k \in \text{regions} \}\), where each credit consumes one unit and deterministically transitions to the post-hit state.

Transition probabilities follow the skill model. For an aim action, the landing coordinate is \(X \sim \mathcal{N}(\mu_a,\Sigma_{\varepsilon})\) [PAGE 11, 14]. The board partition maps \(X\) to one of 62 regions; score updates as \(r' = r - v(\text{region})\), with a bust when \(r' < 0\) or when \(r'\) admits no valid double checkout [PAGE 2]. For a credit action, \(p(s' \mid s,\bar{a}) = \mathbf{1}\{s' = T(s,\text{region}_{\bar{a}})\}\), i.e. a deterministic transition [PAGE 11]. The per-decision cost is one throw, \(c(s,a) = 1\) [PAGE 12-13], and the terminal state \(r=0\) reached via a valid double has zero residual cost [PAGE 2].

The Bellman optimality equation is therefore
\[
V^{*}(s) = \min_{a \in A(s)} \Bigl\{ c(s,a) + \sum_{s'} p(s' \mid s,a)\,V^{*}(s') \Bigr\},
\]
with \(V^{*}(0)=0\) [PAGE 15-16]. Theorem 1 states that the value function is the expected number of throws to check out under a given policy [PAGE 16]. Definition 2 defines competitive balance as equality of expected throws to check out [PAGE 16]. Theorem 2 asserts the existence of a unique credit count \(c^{*}\) such that the weaker player, endowed with \(c^{*}\) credits, has expected throws to check out no greater than the stronger player starting from 501 with zero credits [PAGE 16]. Note that balance (equality of expectations) is weaker than fairness (equality of win-probability distributions); [PAGE 33] explicitly distinguishes them, and [PAGE 30] shows the dynamic-credit system achieves “~equal probability of winning” after 10,000 simulated matches.

Skill heterogeneity is modeled through an execution-error multiplier \(\varepsilon\) (Chan et al., 2022): strongest player \(\varepsilon=1\) with throw distribution \(\mathcal{N}(\mu,\Sigma)\); weaker players \(\varepsilon>1\) with a degraded rendering shown as \(\mathcal{N}_{\varepsilon 2}(\mu,\Sigma)\) [PAGE 14]. The slide text is typographically ambiguous—likely intended as \(\mathcal{N}(\varepsilon^{2}\mu,\Sigma)\) or a covariance inflation—but the qualitative effect is clear: as \(\varepsilon\) increases, probability mass near small high-value regions (double ring, triple ring) deteriorates, and expected throws to check out rise nonlinearly [PAGE 19-20]. The paper identifies the end of the game as the main source of imbalance: fewer valid doubles remain, so a fixed head-start cannot equalize expected throws across the full score path [PAGE 20, 34]. Heuristic head-starts leave the weaker player disadvantaged; optimized head-starts leave the stronger player disadvantaged; and finding a fair head-start is computationally impractical and possibly nonexistent [PAGE 34].

Breakdown regimes follow directly. First, if the unique balancing credit \(c^{*}\) exceeds the model’s credit cap of 9 [PAGE 7, 28], no feasible dynamic-credit balance exists within the stated state space—a boundary singularity at \(c_{\max}=9\). Second, as \(\varepsilon \to \infty\), the weaker player cannot reliably reach any checkout double even with deterministic credits because per-throw score reduction is bounded by the maximum region value and exact-zero is required [PAGE 2], so expected throws diverge. Third, the exact two-player joint MDP at \(\sim 2 \times 10^{9}\) states requires 17 hours and high RAM [PAGE 33], so the reported results use decoupled single-player MDPs solved in under one minute on regular RAM [PAGE 33], followed by 10,000-match simulation [PAGE 23-32]; this is not a computed Markov-perfect equilibrium, and the policy fixed-point may fail when both players adapt. Fourth, credit determinism is an idealization [PAGE 11]; real motor execution cannot guarantee a chosen region, so the \(p=1\) transition is a structural model-reality gap.

In summary, the derivation chain is: score + credits define a finite MDP; aim actions induce Gaussian-transition score decrements; credit actions insert deterministic transitions at a state-contingent cost of one credit; the Bellman operator yields expected throws to check-out; Theorem 2 guarantees a unique balancing credit under the model’s assumptions; and the computational tractability of the single-player formulation is what makes dynamic credits preferable to intractable head-start optimization.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
State space (explicit): \(S = \{ (r,c) : r \in \{0,\dots,501\},\ c \in \{0,\dots,9\} \}\) [PAGE 7]. Reported computational scale: one-player \(\approx 2 \times 10^{6}\) states, single MDP, \(<1\) minute, regular RAM; two-player \(\approx 2 \times 10^{9}\) states, system of MDPs, 17 hours, high RAM [PAGE 33]. Implied augmentation needed but unstated: active player \(\tau\), throw index \(\iota \in \{0,1,2\}\) within the alternating three-throw turn [PAGE 17].

Action space: slide rendering \(A = A_{\text{aim}} \cup A_{\text{hit}}\) with \(|A_{\text{aim}}| = 729\) aim targets and \(|A_{\text{hit}}| = 62\) perfect-execution hit regions [PAGE 9]; credit mechanism: deterministically choose outcome for a single throw [PAGE 4]; credit transition certainty attributed to Haugh and Wang (2022) [PAGE 11].

Skill model (strongest): throw outcome \(X \sim \mathcal{N}(\mu,\Sigma)\), \(\varepsilon = 1\) [PAGE 11, 14]. Skill model (weaker): execution-error multiplier \(\varepsilon > 1\), degraded Gaussian rendered in source as \(\mathcal{N}_{\varepsilon 2}(\mu,\Sigma)\) [PAGE 14]; assumed covariance/precision inflation quadratic in \(\varepsilon\) consistent with Chan et al. (2022) [PAGE 14, 36].

Transition kernel (aim): \(p(s' \mid s,a) = \Pr\bigl( r - v(\text{region}(X)) = r',\ \text{valid checkout or bust} \bigr)\), \(X \sim \mathcal{N}(\mu_a,\Sigma_{\varepsilon})\) [PAGE 11, 14]; bust defined as landing where check-out is impossible or score would go below zero [PAGE 2]. Transition kernel (credit): \(p(s' \mid s,\bar{a}) = \mathbf{1}\{s' = T(s,\text{region}_{\bar{a}})\}\) [PAGE 11].

Cost operator: \(c(s,a) = 1\) throw per decision epoch [PAGE 12-13]; terminal cost \(0\) at \(r=0\) reached via a double [PAGE 2].

Bellman optimality equation:
\[
V^{*}(s) = \min_{a \in A(s)} \Bigl\{ 1 + \sum_{s' \in S} p(s' \mid s,a)\,V^{*}(s') \Bigr\}, \qquad V^{*}(0)=0
\]
[PAGE 15-16]. Units: \(V\) measured in throws (dimensionless count).

Theorem 1: \(V(s;\pi)\) equals expected number of throws to check out under policy \(\pi\) [PAGE 16]. Definition 1: weaker player has higher expected throws to check out from 501 with zero credits [PAGE 16]. Definition 2: competitive balance \(\Leftrightarrow\) equal expected throws to check out [PAGE 16]. Theorem 2: \(\exists!\) credit count \(c^{*}\) such that weaker player with \(c^{*}\) credits has expected throws \(\le\) stronger player’s expected throws from \((501,0)\) [PAGE 16].

Fairness vs balance distinction [PAGE 33]: balance = equal expectations; fairness = equal win probability. Simulation protocol: solve MDP for Player 1, solve MDP for Player 2, simulate match win probabilities over 10,000 matches [PAGE 23]; outcome metric: probability stronger player wins after 10,000 simulated matches [PAGE 24, 30]; secondary metric: number of turns over 10,000 iterations [PAGE 25-27, 31-32].

Singularity/breakdown conditions: (i) credit cap \(c \le 9\) [PAGE 7, 28]; if required \(c^{*} > 9\), balance infeasible; (ii) \(\varepsilon \to \infty\): expected throws diverge because exact-zero checkout on a double becomes unreachable with bounded per-throw scoring [PAGE 2, 20]; (iii) two-player joint MDP \(\sim 2 \times 10^{9}\) states is computationally singular for exact solution (17 hours, high RAM), forcing decoupled single-player MDPs plus simulation [PAGE 33]; (iv) credit determinism \(p=1\) is an idealization not physically realizable by human motor control [PAGE 11].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage is explicitly cited: Chan and Singal (2016) introduced an MDP-based handicap system for tennis in the Journal of Quantitative Analysis in Sports [PAGE 36], establishing the template of aligning expected performance through state-contingent handicaps rather than static head-starts. Haugh and Wang (2022) provide the darts-specific foundation, “solving the game of darts as a dynamic zero-sum game,” and are the source for the deterministic credit hit assumption [PAGE 11, 36]. Chan et al. (2022) supply the execution-error multiplier framework used to stratify skill levels via \(\varepsilon\) [PAGE 14, 36]. Bertsekas and Tsitsiklis (2008) underpin the MDP and Bellman machinery [PAGE 36].

The multi-week trap embedded in this genealogy is the confusion between static handicap design and dynamic control. Tennis handicaps in Chan and Singal (2016) operate on discrete match states; darts adds a continuous, score-path-dependent structure where the imbalance concentrates at the end-game [PAGE 20]. A heuristic head-start—effectively a fixed score offset—cannot repair end-game imbalance because the set of reachable checkout doubles shrinks nonlinearly as score approaches zero [PAGE 2]. The paper demonstrates that optimized head-starts over-correct and penalize the stronger player, while heuristic head-starts under-correct and penalize the weaker player [PAGE 34]. This is a classic dynamic-programming trap: a time-invariant intervention cannot fix a time-varying deficiency unless the state space is augmented with a controllable, state-dependent resource.

The dynamic credit is the retrocausal correction: rather than fixing the starting score ex ante, the weaker player receives a budget of deterministic throws that can be deployed contingently, reshaping the full distribution of turns to check-out so that it mimics the stronger player’s distribution [PAGE 29, 32]. The historical trap is assuming that because a unique balancing credit exists in expectation [PAGE 16], fairness in win probability follows automatically; [PAGE 30] shows they achieve only “~equal probability” in simulation, not exact equality, leaving a residual gap attributable to distributional higher moments and the decoupled single-player solution concept rather than a true two-player equilibrium [PAGE 33].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The model treats each player as solving a single-player MDP for an optimal policy [PAGE 23], but real darts competition is recursive: Player 1’s optimal policy is computed against an abstract environment, not against Player 2’s actual adaptive policy [PAGE 33]. Crisis habit regression enters when either player, under end-game pressure, abandons the computed optimal aim policy and regresses to familiar, high-variance targets (e.g., repeated bullseye attempts) rather than the mathematically optimal checkout sequence [PAGE 19-20]. Because the MDP policy assumes stationary Gaussian execution \(\mathcal{N}(\mu,\Sigma_{\varepsilon})\) [PAGE 11, 14], any stress-induced shift in aim distribution invalidates the value function and the credit-allocation schedule.

The counter-trap is credit-timing exploitation. If the stronger player observes that the weaker player holds credits, the stronger can force a pace that compels early credit expenditure on non-critical scores, depleting the weaker player’s deterministic-resource buffer before the end-game where credits are most valuable [PAGE 20, 34]. Conversely, the weaker player may withhold credits to bluff strength, inducing the stronger player to over-attack risky doubles and bust [PAGE 2]. These second-order beliefs are absent from the single-player Bellman recursion [PAGE 15-16], which assumes the environment’s transition law is fixed and not strategically responsive to credit holdings.

The clock is the turn structure: players alternate every three throws [PAGE 17], so the state must include throw index within turn to remain Markovian [PAGE 33]. Credit deployment is therefore bounded by temporal granularity; a player cannot use a fractional credit mid-turn, and the three-throw cadence means credit value is highest when few throws remain to reach a double. The recursive equilibrium would require a two-player stochastic game with state \((s_1,s_2,\tau,\iota,c_1,c_2)\), which is precisely the computationally singular \(\sim 2 \times 10^{9}\)-state system solved only approximately via decoupled MDPs and 10,000-match simulation [PAGE 23, 33]. The reported “~equal probability of winning” [PAGE 30] is therefore a simulation estimate under fixed policies, not a verified Nash equilibrium under recursive theory of mind.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The model discretizes the board into 62 hit regions and 729 aim targets [PAGE 9], but a physical dartboard has continuous geometry governed by oche distance (2.37 m), dart mass, flight drag, and gravity. The Gaussian error model \(\mathcal{N}(\mu,\Sigma)\) assumes isotropic, stationary landing dispersion [PAGE 11, 14]; physical dart flight is subject to wobble, air turbulence, and non-Gaussian release noise, especially near the double ring where millimeter-level deviations determine bust versus checkout [PAGE 2]. Veto: if physical launch conditions violate the Gaussian i.i.d. assumption, the transition kernel \(p(s' \mid s,a)\) is misspecified and the Bellman-optimal policy is not physically implementable.

Biomechanical layer: The execution-error multiplier \(\varepsilon\) is treated as a fixed player trait [PAGE 14], but human motor performance exhibits fatigue, tremor drift, and grip-release variability across 10,000 simulated matches [PAGE 23-32]. A real match lasting many legs would see \(\varepsilon(t)\) increase with fatigue, invalidating the stationary skill model and the precomputed optimal policy. Veto: any fatigue-induced \(\dot{\varepsilon} > 0\) breaks the time-invariant MDP and invalidates the credit cap \(c \in \{0,\dots,9\}\) as a sufficient buffer [PAGE 7, 28].

Weather layer: Indoor competition is implied, but outdoor or environmentally uncontrolled venues introduce air density, humidity, and wind effects on dart trajectory [not modeled]. These are exogenous perturbations to \(\Sigma\) that are not included in the state. Veto: if ambient conditions alter \(\Sigma\) during a match, the transition probabilities computed from a fixed \(\mathcal{N}(\mu,\Sigma)\) no longer describe reality, and the “unique” balancing credit \(c^{*}\) from Theorem 2 [PAGE 16] ceases to be unique or even feasible.

Adjudication: The cross-layer veto is unanimous only if all three layers confirm stationary Gaussian execution, deterministic credit realizability, and environmental control. The paper explicitly acknowledges credit determinism as an idealization from Haugh and Wang (2022) [PAGE 11], so the veto is triggered at the biomechanical/physical interface: humans cannot hit a desired region with certainty. Therefore the dynamic-credit MDP is a normative benchmark, not a predictive physical law, and its fairness guarantees hold only within the simulation environment [PAGE 23-32].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Credit-cap saturation veto): Suppose the true skill gap requires \(c^{*} > 9\) credits for expected-throw equality [PAGE 16], but the model caps credits at \(c \in \{0,\dots,9\}\) [PAGE 7, 28]. Verifiable condition: for the strongest player \(\varepsilon=1\) versus the weakest player \(\varepsilon=9\), compute \(c^{*}\) via the single-player MDP; if \(c^{*} > 9\), the dynamic-credit system cannot achieve competitive balance within the stated state space. Prediction: even after assigning the maximum 9 credits, simulated win probability for the stronger player remains significantly above 0.5 after 10,000 matches [PAGE 30], and expected-turn distributions do not converge [PAGE 31-32].

Scenario 2 (Deterministic-credit unrealizability veto): Suppose human players cannot execute a credit throw with certainty; instead credit throws are subject to the same \(\mathcal{N}(\mu,\Sigma_{\varepsilon})\) error as aim throws, contradicting the \(p=1\) transition assumed in [PAGE 11]. Verifiable condition: run a physical or high-fidelity simulation in which “credit” throws retain execution error \(\varepsilon>0\); compare the empirical transition matrix to the deterministic \(T(s,\text{region}_{\bar{a}})\). Prediction: the weaker player’s expected throws to check out will exceed the MDP prediction, win probability will fall below the simulated “~equal” level [PAGE 30], and the credit advantage will decay nonlinearly with \(\varepsilon\), producing a systematic stronger-player bias.

Scenario 3 (Two-player non-stationarity veto): Suppose the exact two-player joint MDP at \(\sim 2 \times 10^{9}\) states [PAGE 33] is required for a Markov-perfect equilibrium, but the paper solves two decoupled single-player MDPs (<1 minute each) and simulates independent policies [PAGE 23, 33]. Verifiable condition: allow Player 2’s policy to adapt to Player 1’s observed credit usage across matches (a counter-trap best response) and recompute win rates over 10,000 matches. Prediction: the fixed-policy simulation’s “~equal probability of winning” [PAGE 30] collapses; the stronger player exploits credit-timing predictability and wins more than 50% of matches even under the nominally balancing credit allocation, falsifying the single-player decoupling assumption.
</RLVR_COUNTERFACTUAL_VETOES>