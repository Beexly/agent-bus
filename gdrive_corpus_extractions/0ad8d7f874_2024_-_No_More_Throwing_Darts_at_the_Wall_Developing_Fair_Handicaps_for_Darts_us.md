---
source: "2024 - No More Throwing Darts at the Wall Developing Fair Handicaps for Darts using a Markov Decision Process - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2024"
pages: 14
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6081
---

<NATIVE_REASONING>
The user wants me to analyze a darts research paper using specific XML sections with strict invariants. Let me break down the requirements:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting lines whatsoever.
- No fake toy equations like Force/Fatigue.
- Formal LaTeX equations only.
- Cite [PAGE N] markers from the provided source text.
- Must be >= 1000 words total across sections.
- THINK_TRACE must be >= 400 words.

Let me analyze the source text carefully:

Pages visible: The source text has page markers. Let me track page numbers:
- Page 1: Introduction end ("1" appears)
- Page 2: Related Literature end ("2" appears)
- Page 3: Background on Game of Darts, existing handicaps, PPD formula (1), "3" appears
- Page 4: MDP Model, States, Actions ("4" appears)
- Page 5: Costs, Transition Probabilities, Transition Distributions ("5" appears)
- Page 6: Transition Dynamics, Transitions for Different Skill Levels ("6" appears)
- Page 7: Figure 3, Figure 4, execution error levels ("7" appears)
- Page 8: Optimal Policy and Execution Error, Figure 5 ("8" appears)
- Page 9: Figure 6, Optimal Value and Execution Error ("9" appears)
- Page 10: Figure 7, Optimal Policy and Value with Handicap Credits, Figure 9 ("10" appears)
- Page 11: Break-even points, Optimal Value and Heuristic Head-Start Handicaps ("11" appears)
- Page 12: Figure 10, Optimization-Based Handicaps, Optimized Head-Start Handicap ("12" appears)
- Page 13: Figure 11, Novel Dynamic Credit Handicap ("13" appears)
- Page 14: Evaluating Handicap Fairness, Figure 13, Figure 14 ("14" appears)
- Page 15: Figure 14 continued ("15" appears)
- Page 16: Conclusion ("16" appears)
- Page 17: References ("17" appears)
- Page 18: Appendix A, Table 1 ("18" appears)
- Page 19: Appendix B, Figure 15 ("19" appears)

Wait, let me re-read to get exact page markers. The text has page numbers embedded like "1", "2", etc. at certain points.

Looking at the text flow:
- After Introduction summary: "1" -> Page 1
- After Related Literature: "2" -> Page 2
- After PPD formula intro: "3" -> Page 3
- After Actions section: "4" -> Page 4
- After Transition Distributions: "5" -> Page 5
- After Transition Dynamics intro: "6" -> Page 6
- After Figure 4 description: "7" -> Page 7
- After Figure 5 description: "8" -> Page 8
- After Figure 6 description: "9" -> Page 9
- After Figure 9 description start: "10" -> Page 10
- After heuristic head-start start: "11" -> Page 11
- After Figure 10: "12" -> Page 12
- After Figure 11: "13" -> Page 13
- After Evaluating section start: "14" -> Page 14
- After Figure 14 description: "15" -> Page 15
- After Conclusion start: "16" -> Page 16
- After References start: "17" -> Page 17
- After Appendix A start: "18" -> Page 18
- After Appendix B start: "19" -> Page 19

Actually, looking more carefully at the raw text, there are standalone numbers:
- "1" appears after introduction contributions
- "2" appears after related literature
- "3" appears after PPD intro
- "4" appears after actions
- "5" appears after transition distributions
- "6" appears after transition dynamics intro
- "7" appears after Figure 4
- "8" appears after Figure 5
- "9" appears after Figure 6
- "10" appears after Figure 9 start
- "11" appears after heuristic head-start start
- "12" appears after Figure 10
- "13" appears after Figure 11
- "14" appears after Evaluating start
- "15" appears after Figure 14 start
- "16" appears after Conclusion start
- "17" appears after References start
- "18" appears after Appendix A start
- "19" appears after Appendix B start

But the user said PAGES: 14. However, the source text seems to have page markers up to 19. I'll cite based on the visible page markers in the text. Actually, the user said PAGES: 14 but the text goes beyond that. I should cite based on what's actually in the text. The standalone numbers in the text appear to be page numbers.

Let me cite pages accurately based on where content appears:
- PPD formula: Page 3 ("3" appears right before formula (1))
- States definition: Page 4 ("4" appears after actions section? Actually "4" appears after actions. States might be page 3-4.)
- Let me look more carefully:

Text: "This can be based on an individual game, a series of games, or a player’s lifetime. To determine the head start, it is common to use a simple heuristic: the ratio between the two players’ PPD values. Our framework allows us to understand..." then "3" appears. So page 3 contains PPD formula and heuristic.

Text: "### 4.2 Actions ... 4" appears after actions description. So states are on page 3-4.

Text: "### 4.3 Costs ... 5" appears after transition distributions? Let me check:
"### 4.3 Costs ... ### 4.4 Transition Probabilities ... ### 4.4.1 Transition Distributions ... 5" appears after transition distributions. So costs and transition probs start on page 4-5.

Text: "### 4.4.2 Transition Dynamics ... (2) ... ### 4.4.3 Transitions for Different Skill Levels ... 6" appears after section 4.4.3 start. So page 6 contains transition dynamics and skill levels.

Text: "### 4.5 Bellman Equation ... 7" Wait, looking at text: "Figure 4 ... Our analysis will hold shape constant ... ### 4.5 Bellman Equation ... Given the large sample state space ... ## 5. Properties ... 8" Actually, "7" appears after Figure 4 description. Then "8" appears after Figure 5. Let me trace:

After Figure 4 description: "7" appears. Then Section 4.5 Bellman Equation. Then Section 5 Properties. Then "8" appears after Figure 5 description.

Actually the page markers seem to be at the end of content blocks. I'll cite conservatively based on context.

Key equations:
1. PPD = Total Points Scored / Total Number of Darts Thrown [Page 3]
2. State s = (θ, β, i, u) where θ∈{0,...,501}, β∈{0,...,9}, i∈{1,2,3}, u∈{0,...,120} [Page 4]
3. Absorbing state s_terminal = (0, β, i, u) [Page 4]
4. Action set A = A_throw ∪ A_credit where |A_throw| = 729 targets, |A_credit| = 62 regions [Page 4]
5. Policy π: S → A [Page 4]
6. Cost c(s') = 1 for every case where i+ = 3 [Page 5]
7. P(z|a) for credit = 1 deterministic, 0 otherwise [Page 5]
8. For throw: P(z|a) from bivariate Gaussian N(μ, Σ) integrated over 2mm×2mm pixels [Page 5]
9. State transition function s+ = f(s, z) with 8 cases [Page 5-6]
10. Execution error scaling: N(μ, ϵΣ) [Page 6]
11. Bellman equation: V_π^-(s) as expected turns to check out [Page 7]
12. Policy iteration algorithm mentioned [Page 7]

Key findings:
- Heuristic head-start based on PPD ratio does NOT balance competition [Page 11]
- Optimized head-start: find starting score θ where weaker player has same V* as stronger player [Page 12]
- Dynamic credit handicap: find β credits where weaker player has same expected turns [Page 13]
- Simulation: 10,000 games, alternating starter [Page 14]
- Heuristic head start: stronger player has 70% win rate vs ε=9 handicapped player [Page 19/Appendix B]
- Dynamic credit achieves near 50% win probability [Page 14]
- Expected turns approach limit of 3 (9-dart finish in 3 turns) [Page 10]
- First credit brings most value [Page 10]
- Break-even points: ε=1 requires just under 6 turns, equivalent to ε=2 with ~3 credits [Page 10]

Now I need to write the response with the exact XML sections.

Word count check: Total must be >= 1000 words. THINK_TRACE >= 400 words.

Let me draft each section:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. I need to discuss:
- The MDP formulation derivation from states to Bellman equation
- Why heuristic PPD fails (doesn't distinguish execution error from policy)
- The singularity/breakdown regime: when head-start cannot compensate for checkout difficulty (large ϵ difference)
- Gray zones: fractional credits interpretation, state space explosion if opponent score included (>1 billion states), estimation of ε from only 30 throws at double-bullseye
- Multi-hop logic: execution error → optimal policy shift (T20 to T19 to center) → value function curvature → handicap equivalence → win probability equalization requires matching variance/skew, not just mean
- Audit: assumptions about optimal play by both players, alternating starter control, professional player Michael Smith as average, radial symmetry assumption not always valid

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations.
- State space: s = (θ, β, i, u) ∈ {0,...,501} × {0,...,9} × {1,2,3} × {0,...,120}, |S| > 1.8×10^6 [PAGE 4]
- Absorbing state: s_terminal = (0, β, i, u) ∀β,i,u ≥ 0 [PAGE 4]
- Action space: A = A_throw ∪ A_credit, |A_throw| = 729, |A_credit| = 62 [PAGE 4]
- Policy: π: S → A [PAGE 4]
- Cost: c(s') = 1 iff i⁺ = 3 (turn completion), units: turns [PAGE 5]
- Transition: P(z|a) deterministic for credits: P(z|a)=1 if z matches credit region else 0 [PAGE 5]
- Throw transitions: P(z|a) = ∫_{pixel(z)} N(μ, Σ) dA over 2mm×2mm pixels [PAGE 5]
- Skill scaling: N(μ, ϵΣ), ϵ=1 professional, ϵ increasing = less skilled [PAGE 6]
- Bellman: V_π^-(s) = E[turns to checkout | s, π, ϵ] [PAGE 7]
- PPD: PPD = Total Points Scored / Total Number of Darts Thrown [PAGE 3]
- Breakdown regime: head-start irreconcilable when E[turns to hit double for high ϵ] > E[turns for low ϵ from 501] [PAGE 12]
- State explosion with opponent score: >10^9 states [PAGE 16]

<RETROCAUSAL_GENEALOGY>: Historical lineage and multi-week traps.
- Kohler (1982) dynamic programming [PAGE 2]
- Tibshirani et al. (2011) EM algorithm for bivariate Gaussian execution error [PAGE 2]
- Haugh and Wang (2022) zero-sum game + MDP, opponent consideration adds 0.2-0.6% win prob [PAGE 2]
- Chan et al. (2022) tennis execution error ϵ scaling covariance [PAGE 2]
- Bingham and Swartz (2000) golf handicaps unfairness [PAGE 2]
- Chan and Singal (2016) MDP dynamic credit tennis handicap [PAGE 2]
- Multi-week traps: If a league implements heuristic head-start for a multi-week tournament, weaker players systematically disadvantaged (70% stronger win rate vs ε=9) [PAGE 19], causing attrition. Dynamic credits require per-game ε estimation; if a player's ε drifts week-to-week due to fatigue or pressure, the lookup table becomes stale. Fractional credits across multiple games assume ergodicity/skill stationarity.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Under pressure (checkout), players regress to conservative aiming (avoid bust) rather than optimal double targeting; the MDP assumes optimal policy π*, but humans under crisis revert to risk-averse heuristics.
- Counter-trap: The stronger player, knowing the weaker has credits, may alter their own checkout strategy (e.g., rush to finish before credits are used), but the model assumes independent MDPs without opponent state in the value function [PAGE 14].
- Clock: The 3-turn / 9-dart lower bound creates a hard clock; credits cannot reduce expected turns below 3 [PAGE 10]. In timed pub matches or tournament clocks, the credit handicap's endgame concentration interacts with shot clock pressure.
- Theory of mind recursion: Player A models Player B's credit usage; Player B models A's knowledge; without opponent score in state (simplification), the model is a single-player MDP, not a true zero-sum game like Haugh and Wang (2022).

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical layer: Dartboard pixel resolution 2mm×2mm; physical board wear, wire deflection (spider), bounce-outs not modeled [PAGE 5].
- Biomechanical: Bivariate Gaussian N(μ, Σ) assumes radial or fixed asymmetric error; Figure 4 shows Cullen, Chisnall, Price have different angular orientations [PAGE 7]. Execution error ϵ estimated from 30 throws at double-bullseye only [PAGE 18], may not capture fatigue-induced Σ drift over a match.
- Weather: Air density, humidity affect dart flight; not in model. Temperature affects grip and release consistency.
- Veto conditions: The model vetoes (breaks down) when (a) ϵ is so large that expected turns to hit any double exceeds the stronger player's total expected turns from 501 (head-start impossibility) [PAGE 12]; (b) non-Gaussian error (e.g., systematic yips); (c) board/piece physical damage altering P(z|a).
- No weather data in source; must state as external constraint.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning Verifiable Rollouts? Or just counterfactual veto scenarios. I need 3 scenarios with predictions.
1. Scenario: ε_mismatch > critical threshold where head-start cannot equalize. Prediction: For ε_strong=1 vs ε_weak=9, no head-start θ_start > 0 achieves win prob ≈ 0.5; simulation shows stronger wins >50% (heuristic gives 70%) [PAGE 11, 19]. Veto triggers: implement dynamic credits instead.
2. Scenario: State space augmentation with opponent score. Prediction: Including opponent score increases states to >10^9, making exact policy iteration intractable without approximation; approximate MDP will misestimate credit value in late-game races [PAGE 16].
3. Scenario: ε estimation drift across sessions. Prediction: If a player's true ε shifts from 3 to 5 between the 30-dart calibration (Appendix A) and match play due to fatigue, the assigned credits from lookup table will be miscalibrated by Δβ ≈ |V*(ε=5) - V*(ε=3)| / marginal credit value, causing systematic bias of >10% in win probability away from 0.5.

Need to ensure no betting lines. I must not mention odds, spreads, moneylines, totals. I can mention win probability but not betting odds.

Need to ensure no toy equations. All equations must be formal from the paper.

Need exact [PAGE N] markers. I'll use the page numbers visible in the text.

Let me estimate word counts to ensure >1000 total and THINK_TRACE >400.

THINK_TRACE: I'll write ~500 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~250 words.
RETROCAUSAL_GENEALOGY: ~200 words.
RECURSIVE_THEORY_OF_MIND: ~200 words.
CROSS_LAYER_VETO_ADJUDICATION: ~200 words.
RLVR_COUNTERFACTUAL_VETOES: ~200 words.

Total should exceed 1000 easily.

Let me write carefully with LaTeX.

For page citations, I need to be careful. The text has page numbers like "3", "4", etc. I'll cite them as [PAGE 3], [PAGE 4], etc.

Let me map content to pages more precisely:
- PPD formula (1): The text shows "3" right before the formula context, but actually looking at raw: "...simple heuristic: the ratio between the two players’ PPD values. Our framework..." then "3" appears. Wait, looking at the raw text:

"To determine the head start, it is common to use a simple heuristic: the ratio between the two players’ PPD values.


3

𝑇otal Points Scored 

(1) 
..."

So page 3 contains the PPD formula. [PAGE 3]

- States: "...s = (θ, β, i, u)... This results in over 1.8 million distinct states... 4" appears after Actions section. So states might be page 3 or 4. I'll say [PAGE 4] since the "4" marker comes after the actions description which is on the same conceptual page block. Actually to be safe, I can say [PAGE 3-4] but the instruction says exact [PAGE N]. I'll use [PAGE 4] for states since that's where the section concludes with "4". Or better, look at context:

"## 4. Markov Decision Process Model ... ### 4.1 States ... ### 4.2 Actions ... 4"

So states and actions are on page 4. [PAGE 4]

- Costs: "### 4.3 Costs ... 5" No, "5" appears after Transition Distributions. Let's see:

"### 4.3 Costs ... ### 4.4 Transition Probabilities ... ### 4.4.1 Transition Distributions ... 5"

So costs and transition probs start on page 4-5. I'll cite [PAGE 5] for cost and transition distributions since the marker "5" is at the end of that block. Actually "5" appears after transition distributions. So transition distributions are page 5. [PAGE 5]

- Transition Dynamics: "### 4.4.2 Transition Dynamics ... (2) ... ### 4.4.3 ... 6" So page 6 contains transition dynamics. [PAGE 6]

- Skill scaling: "### 4.4.3 ... 7" Wait, "7" appears after Figure 4 description. The text says:

"...re-solving for the optimal policy given P,(s′|s,a).

## 5. Properties ... 8"

Hmm, actually "7" appears after Figure 4 and before Section 4.5? Let me re-read:

Text: "Our analysis will hold shape constant and instead focus on how the optimal policy changes with ϵ by re-integrating P(z|a) for a∈Athrow and re-solving for the optimal policy given P,(s′|s,a).

## 5. Properties of Value Function and Optimal Policy ... 8"

Wait, where is "7"? Looking at raw: after Figure 4 description there's "7". Then Section 4.5 Bellman Equation. Then Section 5. Then "8" appears after Figure 5.

Actually the raw text shows:
"Figure 4 ... [description] ... 7

Our analysis will hold shape constant... ## 5. Properties ... Figure 5 ... 8"

So page 7 contains the end of Section 4.4.3 and Section 4.5 Bellman Equation? Let's check:

Text: "## 5. Properties ... ### 5.1 Optimal Policy ... Figure 5 ... 8"

Hmm, I see "8" after Figure 5. So Figure 5 is page 8. Then Section 5.2, Figure 6, "9" after Figure 6. Then Section 5.2 continued, Figure 7, "10" after Figure 7 start? Actually:

"### 5.2 Optimal Value ... Figure 7 ... 10"? Let me check:

Text: "Figure 7 shows... **Figure 7:** ... 10

### 5.3 Optimal Policy and Value with Handicap Credits"

So page 10 contains Figure 7 and start of 5.3.

This is getting complicated. I'll cite pages based on the visible standalone numbers in the text near the content. To be safe and accurate, I'll cite [PAGE N] where N is the number that appears in the text block containing that content.

Let me just assign based on best reading:
- PPD formula: [PAGE 3]
- State definition, action space, policy: [PAGE 4]
- Cost function c(s')=1, transition probabilities, Gaussian integration over 2mm×2mm pixels: [PAGE 5]
- Transition dynamics f(s,z), 8 cases, skill scaling N(μ, ϵΣ): [PAGE 6]
- Bellman equation V_π^-(s): [PAGE 7] (since Section 4.5 appears after page 6 marker and before page 8 marker? Actually page 7 marker appears after Figure 4. Section 4.5 is after that. So [PAGE 7])
- Optimal policy shifts T20→T19→center: [PAGE 8]
- Expected turns linear decrease, oscillation near end, limit of 3 turns: [PAGE 9] and [PAGE 10]
- Heuristic head-start failure, two more turns for ε=9: [PAGE 11]
- Optimized head-start, irreconcilable discrepancy: [PAGE 12]
- Dynamic credit lookup table: [PAGE 13]
- Simulation 10,000 games, win probabilities, Figure 13: [PAGE 14]
- Variance/skew argument, dynamic credit reshapes distribution: [PAGE 15]
- Conclusion, state space >1 billion with opponent: [PAGE 16]
- References: [PAGE 17]
- Appendix A, 30 throws, Table 1: [PAGE 18]
- Appendix B, heuristic 70% win rate: [PAGE 19]

I'll use these page citations.

Now let's write the content. I need to make sure it's formal, uses LaTeX, no betting lines, no toy equations.

Let's draft:

THINK_TRACE (~500 words):
Deep multi-hop derivation starts from the MDP state tuple s=(θ,β,i,u)... The gray-zone audit identifies that the model assumes both players follow optimal policies π* independently, which collapses the game into two single-player MDPs rather than a true zero-sum stochastic game. This is a theoretical simplification because darts is turn-based with no direct interference, yet the "starter advantage" and psychological pressure are ignored. The derivation chain: execution error ϵ scales covariance Σ → P(z|a) widens → optimal aiming migrates from T20 (highest expected value) to T19 (safer miss neighbors) to center (avoid board miss) as ϵ grows [PAGE 8]. This policy shift changes V*(s), the expected turns to checkout. Because the cost c(s')=1 is charged only when a turn completes [PAGE 5], V* measures turns, not darts. The handicap problem then becomes an inverse problem: given V*_strong and V*_weak(ϵ), find head-start Δθ or credits β such that V*_weak(501−Δθ,0) = V*_strong(501,0) or V*_weak(501,β) = V*_strong(501,0) [PAGE 12-13]. The gray zone is the breakdown regime: if the weaker player's expected turns to hit a double from low scores exceeds the stronger player's total expected turns from 501, no finite head-start can equalize expected turns [PAGE 12]. This singularity arises because the checkout phase has absorbing bust cycles: from score 2, any non-D1 result leaves the state unchanged, creating a geometric retry loop with success probability p_D1(ϵ) → 0 as ϵ → ∞ [PAGE 9]. Another gray zone is the ε estimation protocol: 30 throws at double-bullseye only [PAGE 18], which may not capture anisotropic error shown in Figure 4 for Cullen, Chisnall, and Price [PAGE 7]. Finally, fractional credits assume stationarity across multiple legs; if a player's ε drifts within a session, the lookup table becomes stale.

SOURCE_OPERATORS_AND_EQUATIONS (~250 words):
Formal definitions:
State space: \mathcal{S} = \{(θ,β,i,u) : θ∈\{0,...,501\}, β∈\{0,...,9\}, i∈\{1,2,3\}, u∈\{0,...,120\}\}, |\mathcal{S}| > 1.8×10^6 [PAGE 4].
Absorbing state: s_{\text{term}} = (0,β,i,u) ∀β,i,u ≥ 0 [PAGE 4].
Action space: \mathcal{A} = \mathcal{A}_{\text{throw}} ∪ \mathcal{A}_{\text{credit}}, |\mathcal{A}_{\text{throw}}| = 729, |\mathcal{A}_{\text{credit}}| = 62 [PAGE 4].
Policy: π: \mathcal{S} → \mathcal{A} [PAGE 4].
Cost (units: turns): c(s') = 1 iff i^+ = 3, else 0 [PAGE 5]. Thus V_π(s) = E[∑ c(s_t) | s_0=s, π] is expected turns to checkout.
Transition for credit action: P(z|a) = \mathbf{1}[z = z_{\text{credit}}] (deterministic) [PAGE 5].
Transition for throw action: P(z|a) = ∫_{\text{pixel}(z)} \mathcal{N}(\mu, Σ) \, dA over 2 mm × 2 mm board pixels [PAGE 5].
Skill scaling: \mathcal{N}(\mu, ϵΣ), ϵ=1 professional, ϵ↑ = less skilled [PAGE 6].
Bellman optimality: V^*(s) = \min_{a∈\mathcal{A}} \{ c(s) + \sum_{s'} P(s'|s,a) V^*(s') \} solved via policy iteration [PAGE 7].
PPD heuristic: \text{PPD} = \frac{\text{Total Points Scored}}{\text{Total Number of Darts Thrown}} [PAGE 3].
Breakdown regime: head-start infeasible when \min_{Δθ} V^*_{\text{weak}}(501-Δθ,0) > V^*_{\text{strong}}(501,0) due to checkout double scarcity [PAGE 12]. Opponent-augmented state explosion: >10^9 states [PAGE 16].

RETROCAUSAL_GENEALOGY (~200 words):
Lineage: Kohler (1982) dynamic programming for darts [PAGE 2]; Tibshirani et al. (2011) EM-fitted bivariate Gaussian execution error [PAGE 2]; Haugh and Wang (2022) zero-sum MDP showing opponent modeling adds only 0.2–0.6% win probability for professionals [PAGE 2]; Chan et al. (2022) tennis ϵ-scaled covariance [PAGE 2]; Bingham and Swartz (2000) golf handicap unfairness [PAGE 2]; Chan and Singal (2016) MDP dynamic credit tennis handicap [PAGE 2]. Multi-week trap: a league adopting heuristic PPD head-starts across a season systematically favors stronger players; simulation shows stronger wins 70% vs ε=9 handicapped opponent [PAGE 19], inducing weaker-player attrition. Dynamic credits require per-match ε estimation; if ε is reassessed weekly, non-stationarity from fatigue or pressure invalidates the lookup table. Fractional credits averaged over multiple games assume ergodic skill, violating the i.i.d. throw assumption if a player adapts within a session.

RECURSIVE_THEORY_OF_MIND (~200 words):
Crisis habit regression: under checkout pressure, human players regress to risk-averse aiming (avoiding bust) rather than executing the MDP-optimal double target; the model assumes π* is stationary, but crisis induces a policy π_crisis ≠ π* that increases expected turns asymmetrically for the weaker player. Counter-trap: the stronger player, aware of the weaker's credits, may accelerate their own checkout to deny credit usage in the final leg; because the state excludes opponent score [PAGE 14], the model cannot encode this strategic clock pressure. Clock: the 9-dart lower bound implies V^* ≥ 3 turns from 501 [PAGE 10]; credits asymptote to this floor, so in timed tournaments the credit advantage collapses as both players approach the physical minimum. Recursive depth: Level-0 plays π*; Level-1 models opponent's credit schedule; Level-2 models opponent's knowledge of one's own credits. The paper's single-player MDP is Level-0; Haugh and Wang (2022) is Level-1 [PAGE 2], but full Level-2 requires opponent score in state, which the authors deem computationally impractical [PAGE 16].

CROSS_LAYER_VETO_ADJUDICATION (~200 words):
Physical layer: the model integrates over 2 mm × 2 mm pixels [PAGE 5] but omits wire deflection ("spider") bounce-outs, board wear, and dart flight damage; these alter P(z|a) in ways not captured by \mathcal{N}(\mu, Σ). Biomechanical layer: Figure 4 shows Cullen, Chisnall, and Price exhibit anisotropic, angularly oriented covariances at ϵ=10 [PAGE 7]; assuming a single average professional (Michael Smith) with radially symmetric error [PAGE 6] vetoes player-specific geometry. Calibration uses only 30 throws at double-bullseye [PAGE 18], ignoring fatigue-induced Σ drift over a match. Weather layer: air density, humidity, and temperature affect dart trajectory and grip release; no term in the MDP accounts for environmental modulation of Σ. Veto conditions: (1) if empirical P(z|a) is non-Gaussian (e.g., systematic "yips" bias), the Bellman update loses validity; (2) if ϵ is so large that p(\text{double checkout}) < p(\text{bust}) recursively, expected turns diverge, creating the head-start impossibility [PAGE 12]; (3) if board physical state changes mid-session, the precomputed lookup table is invalid.

RLVR_COUNTERFACTUAL_VETOES (~200 words):
Scenario 1: ε_strong=1 vs ε_weak=9 with heuristic head-start. Prediction: stronger player win probability remains ≈ 0.70 regardless of head-start magnitude [PAGE 11, 19]. Verifiable veto: replace heuristic with dynamic credits; expected win probability converges to ≈ 0.50 after credit calibration [PAGE 14].
Scenario 2: Opponent score added to state (s → (θ_A, θ_B, β, i, u)). Prediction: state space exceeds 10^9 [PAGE 16]; exact policy iteration becomes intractable, and an approximate solver will misvalue credits in "race" states where both players are on checkout, causing credit allocation errors >1 credit. Verifiable veto: restrict to single-player MDP or use function approximation with explicit error bounds.
Scenario 3: ε calibration drift between 30-dart assessment and match play (e.g., ε=3 at calibration, ε=5 under tournament pressure). Prediction: lookup-table β assigned for ε=3 under-covers the true ε=5 need by Δβ ≈ |V^*(501,0;ϵ=5) − V^*(501,0;ϵ=3)| / (∂V^*/∂β), producing systematic win probability deviation >10 percentage points from 0.50. Verifiable veto: require re-calibration every 5 legs or use online ε estimation.

Now I need to count words roughly and ensure total >1000.

THINK_TRACE: Let me count roughly. The draft looks around 450-550 words. Good.
Others: each around 200-250. Total should be ~1400+. Good.

I must ensure no mention of betting lines (spreads, totals, moneylines, odds). I used "win probability" which is fine. I didn't mention odds or betting.

I must ensure no toy equations. All equations are from the paper or formal definitions.

Let me check if I mentioned anything like "Force / Fatigue" - no.

Let me verify page citations match content:
- [PAGE 3] PPD formula: yes, page marker "3" appears there.
- [PAGE 4] States/actions: yes, page marker "4" appears there.
- [PAGE 5] Costs/transition: yes, page marker "5" appears there.
- [PAGE 6] Skill scaling: yes, page marker "6" appears there.
- [PAGE 7] Bellman: actually Section 4.5 is on page 7? The text shows "7" after Figure 4, then Section 4.5 Bellman Equation. Then "8" after Figure 5. So Bellman is on page 7. [PAGE 7] is correct.
- [PAGE 8] Policy shifts: Figure 5 and ϵ discussion, page marker "8" appears after Figure 5. Correct.
- [PAGE 9] Expected turns oscillation/checkout difficulty: Figure 6 and 5.2 discussion, page marker "9" after Figure 6. The discussion of checkout difficulty is in 5.2 which spans pages 9-10. [PAGE 9] is fine for the oscillation discussion.
- [PAGE 10] Limit of 3 turns / first credit value: page marker "10" appears after Figure 7/5.3 start. The text about limit of 3 turns is in 5.3, which starts on page 10. Correct.
- [PAGE 11] Heuristic head-start failure / two more turns: page marker "11" after heuristic section start. Correct.
- [PAGE 12] Optimized head-start / irreconcilable: page marker "12" after Figure 10 / section 6.1. Correct.
- [PAGE 13] Dynamic credit lookup: page marker "13" after Figure 11 / section 6.2. Correct.
- [PAGE 14] Simulation 10,000 games / Figure 13: page marker "14" after section 7 start. Correct.
- [PAGE 15] Variance/skew: page marker "15" after Figure 14 discussion. Correct.
- [PAGE 16] Conclusion / state explosion >1 billion: page marker "16" after conclusion start. Correct.
- [PAGE 18] Appendix A 30 throws: page marker "18" after Appendix A start. Correct.
- [PAGE 19] Appendix B 70% win rate: page marker "19" after Appendix B start. Correct.

Everything looks solid. I'll format exactly with the XML tags.

One more check: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." I didn't invent any ratios. I used PPD which is in the paper. I used partial derivative notation ∂V*/∂β which is formal calculus, not a toy equation.

I should make sure the LaTeX is properly escaped or formatted. Since this is XML content, I'll just write LaTeX normally.

Let me assemble the final output.
</NATIVE_REASONING>

<THINK_TRACE>
The deep multi-hop derivation begins with the MDP state tuple \(s=(\theta,\beta,i,u)\), where \(\theta\in\{0,\dots,501\}\) is the remaining score, \(\beta\in\{0,\dots,9\}\) is the remaining credit count, \(i\in\{1,2,3\}\) is throws left in the current turn, and \(u\in\{0,\dots,120}\) is points accumulated in the turn [PAGE 4]. This yields more than \(1.8\times10^6\) distinct states. The absorbing terminal state \(s_{\text{term}}=(0,\beta,i,u)\) for all \(\beta,i,u\ge0\) encodes a completed checkout [PAGE 4]. The action space partitions into 729 stochastic throw targets and 62 deterministic credit regions [PAGE 4]. The cost structure charges \(c(s')=1\) turn-unit exactly when a turn completes (\(i^+=3\)), so the value function \(V_\pi(s)\) measures expected turns to checkout rather than expected darts [PAGE 5].

The derivation chain proceeds as follows. Execution error \(\epsilon\) scales the covariance matrix of the fitted bivariate Gaussian landing distribution: \(\mathcal{N}(\mu,\Sigma)\mapsto\mathcal{N}(\mu,\epsilon\Sigma)\), with \(\epsilon=1\) denoting professional-level accuracy [PAGE 6]. As \(\epsilon\) increases, the optimal aim migrates from T20 (maximum expected value per throw) to T19 (safer miss-neighbors: 7 and 3 versus 5 and 1) and finally toward the board center to avoid total miss [PAGE 8]. This policy drift reshapes \(V^*(s)\). Near the end of the game, \(V^*(s)\) oscillates because odd scores require an intermediate odd single before a double checkout, while even scores can attack a double immediately; from score 2, any non-D1 outcome returns the state to itself, producing a geometric retry loop whose success probability \(p_{\text{D1}}(\epsilon)\to0\) as \(\epsilon\to\infty\) [PAGE 9].

The gray-zone audit targets three structural weaknesses. First, the model assumes both players execute their independently computed optimal policies \(\pi^*\), collapsing a turn-based contest into two decoupled single-player MDPs; it omits the opponent's score from the state, so strategic pressure—such as the stronger player rushing a checkout to deny the weaker player credit usage—is not represented [PAGE 14, 16]. Second, the \(\epsilon\) estimation protocol relies on only 30 throws at double-bullseye [PAGE 18], yet Figure 4 documents anisotropic, angularly oriented covariances for Cullen, Chisnall, and Price [PAGE 7], so a single radial average professional (Michael Smith) misrepresents player-specific geometry [PAGE 6]. Third, the breakdown regime: when the weaker player's expected turns to hit a required double from low scores exceeds the stronger player's total expected turns from 501, no finite head-start can equalize expected turns, because the head-start cannot remove the absorbing bust cycle at the finish [PAGE 12]. Fractional credits assume ergodic skill across multiple legs, violating stationarity if \(\epsilon\) drifts within a session due to fatigue or pressure.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
State space:
\[
\mathcal{S}=\{(\theta,\beta,i,u):\theta\in\{0,\dots,501\},\ \beta\in\{0,\dots,9\},\ i\in\{1,2,3\},\ u\in\{0,\dots,120\}\},\quad |\mathcal{S}|>1.8\times10^{6}\quad\text{[PAGE 4]}.
\]
Absorbing checkout state:
\[
s_{\text{term}}=(0,\beta,i,u),\quad \forall\beta,i,u\ge0\quad\text{[PAGE 4]}.
\]
Action space:
\[
\mathcal{A}=\mathcal{A}_{\text{throw}}\cup\mathcal{A}_{\text{credit}},\quad |\mathcal{A}_{\text{throw}}|=729,\quad |\mathcal{A}_{\text{credit}}|=62\quad\text{[PAGE 4]}.
\]
Policy map:
\[
\pi:\mathcal{S}\rightarrow\mathcal{A}\quad\text{[PAGE 4]}.
\]
Turn-cost operator (units: turns):
\[
c(s')=
\begin{cases}
1,& i^{+}=3,\\
0,& \text{otherwise},
\end{cases}
\quad V_\pi(s)=\mathbb{E}\!\left[\sum_t c(s_t)\,\middle|\,s_0=s,\pi\right]\quad\text{[PAGE 5]}.
\]
Credit transition (deterministic):
\[
P(z\mid a)=\mathbf{1}[z=z_{\text{credit}}]\quad\text{for }a\in\mathcal{A}_{\text{credit}}\quad\text{[PAGE 5]}.
\]
Throw transition (stochastic, integrated over \(2\text{ mm}\times2\text{ mm}\) board pixels):
\[
P(z\mid a)=\int_{\text{pixel}(z)}\mathcal{N}(\mu,\Sigma)\,dA\quad\text{for }a\in\mathcal{A}_{\text{throw}}\quad\text{[PAGE 5]}.
\]
Skill scaling:
\[
\mathcal{N}(\mu,\epsilon\Sigma),\quad \epsilon=1\ \text{professional},\quad \epsilon\uparrow\Rightarrow\text{less skilled}\quad\text{[PAGE 6]}.
\]
Bellman optimality equation (solved by policy iteration):
\[
V^*(s)=\min_{a\in\mathcal{A}}\left\{c(s)+\sum_{s'}P(s'\mid s,a)V^*(s')\right\}\quad\text{[PAGE 7]}.
\]
Heuristic PPD (dimensionless points per dart):
\[
\text{PPD}=\frac{\text{Total Points Scored}}{\text{Total Number of Darts Thrown}}\quad\text{[PAGE 3]}.
\]
Head-start breakdown (singularity) condition:
\[
\min_{\Delta\theta}V^*_{\text{weak}}(501-\Delta\theta,0)>V^*_{\text{strong}}(501,0)\quad\text{[PAGE 12]}.
\]
Opponent-augmented state explosion:
\[
|\mathcal{S}_{\text{opp}}|>10^{9}\quad\text{[PAGE 16]}.
\]
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage begins with Kohler (1982), who applied dynamic programming to darts under simplifying assumptions [PAGE 2]. Tibshirani et al. (2011) introduced EM-fitted bivariate Gaussian execution-error models from throw data [PAGE 2]. Haugh and Wang (2022) extended this to a zero-sum MDP with opponent modeling, showing that accounting for the opponent raises professional win probability by only 0.2–0.6% [PAGE 2]. Chan et al. (2022) supplied the tennis \(\epsilon\)-scaled covariance framework that this paper imports for darts skill perturbation [PAGE 2]. Bingham and Swartz (2000) demonstrated the unfairness of traditional golf handicaps [PAGE 2], and Chan and Singal (2016) built an MDP dynamic-credit handicap for tennis [PAGE 2]. This paper bridges those three literatures—optimal darts strategy, execution-error modeling, and rigorous handicapping—to produce the first formal darts handicap framework [PAGE 2].

A multi-week trap is embedded in the heuristic status quo. If a league adopts PPD-ratio head-starts across a season, simulation establishes that the stronger player retains a structural edge: against an \(\epsilon=9\) handicapped opponent, the \(\epsilon=1\) player still wins approximately 70% of matches [PAGE 19]. Repeated exposure to this imbalance induces weaker-player attrition and depresses participation. Dynamic credits require per-match \(\epsilon\) estimation; if \(\epsilon\) is reassessed weekly, non-stationarity from accumulated fatigue, pressure, or technique drift invalidates the static lookup table [PAGE 12–13, 18]. Fractional credits averaged over multiple games tacitly assume ergodic, i.i.d. skill, which fails if a player adapts within a session or across a tournament week.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of human players, under checkout pressure, to abandon the MDP-optimal policy \(\pi^*\) in favor of risk-averse aiming that minimizes bust probability rather than maximizing checkout speed. Because the model assumes both agents play \(\pi^*\) stationarily [PAGE 14], it cannot capture the asymmetric increase in expected turns when the weaker player regresses under pressure near zero.

The counter-trap is strategic anticipation by the stronger player. Knowing the weaker player holds \(\beta\) credits, the stronger player may accelerate their own checkout to finish before credits become decisive in the final leg. Since the state excludes the opponent's score [PAGE 14], the single-player MDP cannot encode this clock pressure. The hard temporal floor is the 9-dart limit: from 501, \(V^*\ge3\) turns regardless of credits [PAGE 10], so in a timed match the credit advantage collapses as both players asymptote to the physical minimum.

The recursive theory of mind unfolds across levels. Level-0 agents play \(\pi^*\) as solved here. Level-1 agents, as in Haugh and Wang (2022), model the opponent's policy [PAGE 2]. Level-2 agents model the opponent's model of one's own credit schedule. The present paper's simplified MDP is Level-0; incorporating the opponent's score to reach Level-1 or Level-2 pushes the state space beyond \(10^9\), which the authors declare impractical without exploiting monotonic structure or approximation [PAGE 16].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: the transition model integrates probability mass over discrete \(2\text{ mm}\times2\text{ mm}\) pixels [PAGE 5], but it omits wire deflection ("spider") bounce-outs, board wear, and dart flight damage. These physical phenomena alter \(P(z\mid a)\) in ways a stationary \(\mathcal{N}(\mu,\Sigma)\) cannot represent.

Biomechanical layer: Figure 4 demonstrates that Cullen, Chisnall, and Price exhibit anisotropic, angularly oriented covariances even at \(\epsilon=10\) [PAGE 7]. The paper's reliance on a single average professional (Michael Smith) with radially symmetric error [PAGE 6] therefore vetoes player-specific geometry. Calibration uses only 30 throws at double-bullseye [PAGE 18], ignoring fatigue-induced \(\Sigma\) drift across a match and failing to capture angular miss tendencies.

Weather layer: air density, humidity, and temperature modulate dart flight and grip-release consistency; no environmental term enters the MDP transition kernel.

Veto conditions under which the framework breaks down: (1) empirical \(P(z\mid a)\) is non-Gaussian, e.g., systematic "yips" bias, invalidating the Gaussian integration and Bellman update; (2) \(\epsilon\) is so large that the probability of busting on a checkout attempt recursively exceeds the probability of success, driving expected turns to divergence and creating the head-start impossibility [PAGE 12]; (3) board or dart physical state changes mid-session, rendering precomputed lookup tables stale.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: \(\epsilon_{\text{strong}}=1\) versus \(\epsilon_{\text{weak}}=9\) under the heuristic PPD head-start. Prediction: stronger-player win probability remains approximately 0.70 regardless of head-start magnitude [PAGE 11, 19]. Verifiable veto: replace the heuristic with dynamic credits calibrated via \(V^*_{\text{weak}}(501,\beta)=V^*_{\text{strong}}(501,0)\); expected win probability converges toward 0.50 [PAGE 14].

Scenario 2: Opponent score added to the state, \(s\mapsto(\theta_A,\theta_B,\beta,i,u)\). Prediction: state space exceeds \(10^9\) [PAGE 16], rendering exact policy iteration intractable. An approximate solver will misvalue credits in race states where both players are on checkout, producing credit-allocation errors greater than one credit. Verifiable veto: retain the single-player MDP or deploy function approximation with explicit suboptimality bounds.

Scenario 3: \(\epsilon\) calibration drift between the 30-dart assessment and match play, e.g., \(\epsilon=3\) at calibration but \(\epsilon=5\) under tournament pressure. Prediction: the lookup-table \(\beta\) assigned for \(\epsilon=3\) under-covers the true \(\epsilon=5\) requirement by \(\Delta\beta\approx\left|V^*(501,0;\epsilon=5)-V^*(501,0;\epsilon=3)\right|\big/(\partial V^*/\partial\beta)\), shifting win probability more than 10 percentage points away from 0.50. Verifiable veto: mandate re-calibration every five legs or implement online \(\epsilon\) estimation during play.
</RLVR_COUNTERFACTUAL_VETOES>