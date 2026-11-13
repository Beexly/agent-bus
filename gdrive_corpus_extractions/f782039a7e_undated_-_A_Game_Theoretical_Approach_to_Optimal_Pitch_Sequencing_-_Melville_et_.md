---
source: "undated - A Game Theoretical Approach to Optimal Pitch Sequencing - Melville et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/undated"
pages: 26
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4629
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper: "A Game Theoretical Approach to Optimal Pitch Sequencing" by Melville et al. They've provided the full text across 26 pages.

Constraints:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations. Use LaTeX. Cite pages. Each section must be present. Total >= 1000 words. THINK_TRACE >= 400 words.

Let me structure this carefully.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. I need to discuss the game-theoretic formulation, the three games (simultaneous/Nash, sequential/Stackelberg, decision-point), the utility function with expected run value, the OptimusPitch RNN, pitcher accuracy estimation (TBA), and audit the assumptions/gray zones (instantaneous calculation, batters not behaving optimally, execution error modeled as Gaussian, decision point at 24 feet, tunneling, etc.). Must be >= 400 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations from the paper. U, argmin/argmax, equation (1a)(1b), equation (2), (3), (4), (5a)(5b), TBA equation on page 16, linear programming in section 8. Units: feet, inches, expected run value (runs), probability distributions. Citations [PAGE N]. Breakdown regimes: when sigma > 1 ft optimal converges to middle, etc.

RETROCAUSAL_GENEALOGY: Historical lineage: Douglas et al. [15] simultaneous game with OBP utility; Healey intrinsic value [16]; Moore expected run value [20]; Alan Nathan physics [18][22][23]; Prospectus pitch tunnels [27]; Sheehan run values [28]; Tango run values by count [29]; Alcorn (batter|pitcher)2vec [6]; Roegele sequencing [25]; Arthur predictability [9]; Prasad graph embeddings [24]. Multi-week traps: overfitting to equilibrium against perfect batter, ignoring batter suboptimality (70% optimal in sequential, 71% in decision point), TBA hypothesis sigma range 0.17 to 2.81 ft, beta tuning, validation set 2021-2022 Statcast, cross entropy 1.11 vs 1.12.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Discuss how batters regress to heuristics under pressure (crisis habit), pitchers counter-trap by exploiting non-optimal swing decisions (deGrom/Soto, Nola/Altuve), and the clock constraint (fraction of second to sample Bernoulli mixed strategy). The paper acknowledges batters cannot compute instantaneous mixed strategies.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Discuss physical constraints: decision point 24 feet from home plate based on [27]; swing time; release speed, spin rate, movement inputs; Gaussian execution noise sigma; strike zone grid 1.5 inch squares; weather not explicitly modeled but movement depends on physics; biomechanical limit of batter reaction time. Veto: if pitch arrives before decision point, model invalid; if sigma too high (>1 ft), optimal converges to middle of zone.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
1. Veto: Batter does not observe decision point perfectly / reaction time exceeds available time. Prediction: Decision Point Game equilibrium collapses to Sequential or Simultaneous; actual swing rate deviates from pure/mixed equilibrium.
2. Veto: Pitcher execution error is non-Gaussian or state-dependent (fatigue, injury). Prediction: TBA sigma estimate invalid; optimal location shifts away from predicted equilibrium; actual utility worse than model.
3. Veto: Batter adapts within plate appearance faster than RNN hidden state can capture (non-stationarity). Prediction: OP cross-entropy loss increases for later pitches if batter adapts; memoryless model may perform comparably or better in short at-bats.

Need to ensure no betting language. No "odds", "spread", "moneyline", "total". Use "probability", "expected run value", "expected utility".

Let's draft with careful page citations. I have pages 1-26. I'll cite specific pages for equations.

Equation (1a)(1b) on page 4.
Equation (2) on page 6.
Equation (3) on page 6.
Equation (4) on page 7.
Equation (5a)(5b) on page 10.
TBA equation on page 16.
Linear programming in section 8 on page 22.
Figure 2 values page 6.
Decision point defined 24 feet page 21.
OP cross entropy page 12-13.
Batters optimal 70% page 20, 71% page 22.
Pitcher optimal pitch type 48% page 20.
Sigma hypotheses page 16.

Word count check: Need >= 1000 words total across sections. THINK_TRACE >= 400. I'll write substantial content.

Let's compose. I must not include any betting lines. I'll avoid words like "odds", "spread", "moneyline", "over/under", "total" in betting context. "Total" as in total pitches is fine but better avoid ambiguity. I'll use "count" or "sum".

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

I need to make sure the XML tags are exact as specified.

Let's write.

THINK_TRACE content (>=400 words):
- Start with the zero-sum formulation: U: P x Delta S x C -> R, negative favors pitcher, positive batter. Page 3-4.
- Multi-hop: pitcher chooses p in Delta P, batter chooses s in Delta S. Equilibrium conditions (1a)(1b). Asymmetry: pitcher minimizes expected value over pi, batter chooses based on observed pi_o. Page 4.
- Three games: Game 1 simultaneous Po=empty, Pu=T x L -> Nash. Game 2 sequential Po=T x L, Pu=empty -> Stackelberg. Game 3 decision point Po=D, Pu=T -> decision-point equilibrium. Page 5.
- Gray zone 1: Instantaneous calculation assumption. Page 5: "we note that this formulation assumes the batter can calculate the solution to (1b) and then sample from his chosen probability distribution almost instantaneously. Clearly this is not a realistic assumption..." Yet they justify it as best-case bound.
- Gray zone 2: Batter suboptimality. Page 20: batters made optimal decision 70% of validation pitches; pitchers chose optimal pitch type 48% of time. Page 22: 71% in decision point, none perfect. This undermines equilibrium as predictive but they argue it's an upper bound on batter response.
- Gray zone 3: Execution error modeled as symmetric 2D Gaussian N(0, sigma I_2). Page 15-16. TBA estimates sigma per pitcher/pitch type. Hypothesis sigma 0.17 ft to 2.81 ft. Page 16: if sigma > 1 ft, best location doesn't change, remains near middle; if sigma lower than 1 ft, best location can vary. Breakdown regime.
- Gray zone 4: Decision point fixed at 24 feet based on [27], page 21. Physical reaction time not modeled explicitly; tunneling mapping f: T x L -> D via Alan Nathan physics, page 21.
- Gray zone 5: Utility based on expected run value from Figure 2 (Sheehan [28], Tango [29]), context only ball-strike count, not base runners/outs/inning. Page 6: "relevant game context c is simply the ball and strike count." This is a major limitation: run value of a home run differs with bases empty vs bases loaded, but table only conditions on count.
- Gray zone 6: OP RNN cross entropy 1.11 vs memoryless 1.12 overall, but better on later pitches. Page 12-13. Small improvement suggests sequence effect is weak at aggregate level.

I will write this in a cohesive >400 word trace.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define sets: P_o observable, P_u unobservable, C context, S={swing,take}. Page 3-4.
- Utility: U(pi_o, p_u, s, c) = E_{pi_u, tau}[R(...)] = sum sum p_u(pi_u) s(tau) R(...). Equation (2), page 6.
- R includes accuracy: R = sum_{tilde pi_o, tilde pi_u} P(tilde|intended) sum_{x in X} P(x | tilde, tau, c) v(x,c). Equation (3), page 6.
- Outcome categories X = {B, CS, SS, F, 1B, 2B, 3B, HR, O}. Page 6.
- Run value rv equation (4), page 7.
- Equilibrium (1a)(1b), page 4.
- Game 1 matrix form (5a)(5b), page 10. A is |P_u| x |S| matrix.
- Game 3 linear program, page 22: max v s.t. A s >= v, s_i + s_{i+1} = 1, s >= 0.
- TBA: P(sigma | z) proportional to [ beta (1/m sum_f P(z|f,sigma)) + (1-beta) W ] P(sigma). Page 16. Noise N(mu, Sigma), mu=[0,0], Sigma=sigma I_2. Page 15.
- Units: locations in feet; grid 1.5 inch squares; horizontal -1.5 to 1.5 ft, vertical 1 to 4 ft (page 7 example); TBA grid horizontal -2.13 to 2.13 ft, vertical -2.5 to 6.6 ft, resolution 0.5 inches (page 16). Decision point 24 ft from home plate (page 21). Expected run value in runs.

RETROCAUSAL_GENEALOGY:
- Lineage: Douglas et al. [15] simultaneous zero-sum with OBP utility; criticized page 3 for simultaneous assumption and OBP equating HR and single.
- Healey intrinsic value [16], Moore expected run value [20], Bay stuff+ [26]; paper improves by batter-specific and sequence-dependent.
- Alcorn (batter|pitcher)2vec [6] inspired batter embedding.
- RNN next pitch type [31][33][21] vs OP outcome prediction.
- Physics: Alan Nathan trajectory/movement calculators [18][22][23] for tunneling map.
- Run values: Sheehan [28], Tango [29] adapted in Figure 2.
- Prospectus pitch tunnels [27], decision point 24 ft.
- Multi-week traps: (1) validating on 2021-2022 Statcast only, no temporal holdout for rule/umpire changes; (2) cross entropy difference small (1.11 vs 1.12) may not generalize to new pitch designs; (3) TBA beta values {0.5,...0.99} yielded similar estimates, but sigma hypothesis cap 2.81 ft chosen because strike zone hit rate 20%—this is an expert prior, not data-driven upper bound; (4) context c excludes runners/outs/inning, so run values are count-conditioned only, causing systematic mispricing in high-leverage states; (5) equilibrium assumes opponent computes Nash/Stackelberg/decision-point strategy, but batters optimal only 70-71%, making equilibrium exploitable in practice.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under pressure, batters revert to heuristics rather than compute mixed strategies. Example Jansen/Phillips: Phillips actual swing likelihood <13% at a slider below zone, but equilibrium prescribed 54% swing in simultaneous game (page 7-8).
- Counter-trap: pitcher exploits known batter suboptimality. deGrom/Soto: equilibrium changeup down middle gives -0.02 run value, but actual outside fastball gave -0.08 because Soto chased (page 20-21). Nola/Altuve: equilibrium -0.01, actual cutter outside zone -0.16 because Altuve swung (page 22-23).
- Clock: batter has fraction of second between decision point (24 ft) and catcher's glove; cannot sample Bernoulli(p) or identify tunnel and mixed strategy (page 23). Pitcher has more time to sample equilibrium mixed strategy before next pitch (page 23-24). Asymmetric clock advantage to pitcher.
- Pitcher's theory of mind: models batter as optimal best responder; when batter fails, pitcher should deviate from equilibrium. Paper explicitly validates this: "if deGrom had some reason to believe that Soto would choose the suboptimal action... it was actually rational for deGrom to deviate" (page 20-21).

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: pitch travels from release to plate; decision point at 24 ft from home plate (page 21) derived from [27]. If actual decision point differs due to pitch velocity (higher velocity = later decision point physically), fixed 24 ft assumption introduces bias.
- Biomechanical layer: batter swing initiation and completion time not explicitly modeled; tunneling map f: T x L -> D uses Nathan physics calculators but ignores pitcher release point variation and batter stride timing. Grid L defined 1.5 inch squares (page 7), TBA grid 0.5 inch resolution (page 16). Weather (air density, temperature, humidity) affects movement and thus trajectory mapping; not included in inputs (release speed, spin rate, movement, location, count, handedness; page 11). Movement is an input, so weather effects are partially proxied but not explicitly decomposed.
- Veto conditions: (a) If observed decision point lies outside physically reachable set given velocity and release point, model inputs invalid. (b) If sigma > 1 ft, expected utility landscape flattens and optimal converges to center of zone (page 17-18 Figure 11 discussion), so fine-grained location recommendations are vetoed by execution noise. (c) If pitcher's actual release point shifts due to fatigue or injury, TBA sigma estimated from last 1000 pitches (page 16) becomes stale; command error no longer stationary Gaussian.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios + predictions.
1. Scenario: Batter reaction latency exceeds available time after decision point. Verifiable via high-speed tracking: measure time from pitch crossing 24 ft plane to swing initiation. If mean latency > time remaining to plate, Decision Point Game is physically infeasible. Prediction: batters will swing at rates independent of tunnel-specific equilibrium; observed swing rate in "pure swing" tunnels will be significantly below 100%, and in "pure take" tunnels significantly above 0%, collapsing the decision-point equilibrium toward simultaneous-game behavior.
2. Scenario: Pitcher execution error is non-Gaussian with state-dependent variance (e.g., sigma increases under fatigue or after high-effort pitches). Verifiable by stratifying TBA sigma estimates by pitch count within game or by innings. Prediction: as sigma crosses 1 ft threshold (page 16), optimal target location migrates from corners to center; equilibrium pitch locations predicted by model will systematically over-target edges late in games, yielding higher actual run values than model-estimated utility.
3. Scenario: Batter adapts within a plate appearance faster than OP hidden state captures, violating stationarity of sequence effect. Verifiable by comparing OP cross-entropy loss on first-pitch-of-at-bat vs later pitches within same at-bat, controlling for count. Prediction: if adaptation dominates, memoryless model will match or outperform OP on early pitches (1-2), while OP's advantage only emerges on pitches 4+; in short at-bats (<=3 pitches), OP provides no expected run value improvement over memoryless baseline. This directly tests the paper's claim that sequence depth improves prediction (page 13).

Now let's write it all out, ensuring total words >1000 and THINK_TRACE >400. I'll write generously.

Check for banned betting terms: none. "Odds" not used. "Spread" not used. "Moneyline" not used. "Total" - I'll avoid using "total" as a betting term. I might say "sum" instead.

Citations: Use [PAGE N] exactly.

Let's draft carefully.
</NATIVE_REASONING>

<THINK_TRACE>
The paper formulates the batter–pitcher matchup as a zero-sum game in which the pitcher minimizes expected run value U and the batter maximizes it, with U mapping from the joint strategy space and game context C to real-valued runs: U : P × ∆S × C → ℝ, where negative U favors the pitcher and positive U favors the batter [PAGE 3]. The pitcher selects a distribution p over mixed strategies π ∈ P = P_o × ∆P_u, while the batter selects s ∈ ∆S over S = {swing, take}. The equilibrium conditions in equation (1) are asymmetric: the pitcher optimizes the expected value over π, whereas the batter conditions on the actually observed portion π_o [PAGE 4]. This asymmetry is the crux of the three game models. Game 1 sets P_o = ∅ and P_u = T × L, yielding a Nash equilibrium in which the batter commits to a fixed swing probability before observing anything [PAGE 5]. Game 2 sets P_o = T × L and P_u = ∅, yielding a Stackelberg equilibrium in which the batter observes the full pitch trajectory and best-responds deterministically [PAGE 5]. Game 3 sets P_o = D and P_u = T, where D is the decision-point set; this models tunneling, where multiple pitch types share an observable trajectory up to d ∈ D but diverge afterward [PAGE 5, PAGE 21].

A deep multi-hop derivation follows from the utility decomposition. Equation (2) expresses U as an expectation over the pitcher’s unobservable choice π_u and the batter’s swing choice τ [PAGE 6]. Equation (3) then nests pitcher execution error inside R: the intended location (π_o, π_u) is corrupted by noise to (π̃_o, π̃_u), and each realized outcome x ∈ X = {B, CS, SS, F, 1B, 2B, 3B, HR, O} is valued by v(x, c) adapted from Sheehan run values [PAGE 6, PAGE 28 reference]. The run-value function r_v in equation (4) averages over outcome probabilities [PAGE 7]. Critically, the context c in Figure 2 is restricted to the ball–strike count only; it does not condition on outs, inning, or base-runners, which is a major gray zone because run value of a home run differs radically between bases-empty and bases-loaded states [PAGE 6].

Gray-zone audit: (1) The paper explicitly admits the instantaneous-computation assumption is unrealistic: batters cannot solve (1b) and sample from a mixed strategy in the fraction of a second between decision point and contact [PAGE 5]. It justifies this as a best-case bound for the pitcher, but this means the equilibrium is normative for the pitcher, not descriptive of the batter. (2) Empirical validation shows batters make the optimal swing decision only 70% of the time in the sequential game and 71% in the decision-point game, with no batter perfect across all observed pitches [PAGE 20, PAGE 22]. Pitchers choose the optimal pitch type only 48% of the time [PAGE 20]. Thus both sides deviate from equilibrium, yet the paper still treats equilibrium as a viable sequencing strategy because it minimizes the upper bound of batter utility against a perfect best-responder [PAGE 20, PAGE 23–24]. (3) Execution error is modeled as a symmetric two-dimensional Gaussian N(0, σI₂), estimated per pitcher–pitch-type via the Bayesian Approach (TBA) over σ hypotheses from 0.17 ft to 2.81 ft [PAGE 15–16]. The paper notes that for σ > 1 ft the optimal location converges to the middle of the strike zone, while for σ < 1 ft the best location can vary [PAGE 16]. This is an exact breakdown regime: fine-grained location recommendations are vetoed when command noise exceeds approximately one foot. (4) The decision point is fixed at 24 feet from home plate based on [27] [PAGE 21], ignoring that physical reaction windows vary with pitch velocity and release-point extension. (5) OptimusPitch (OP) uses an RNN with batter embeddings and a hidden state carrying prior pitch outcomes [PAGE 11], but its aggregate cross-entropy advantage over a memoryless baseline is slight (1.11 vs. 1.12) and only clearly emerges on later pitches in a plate appearance [PAGE 12–13], suggesting the sequence effect is weak at short horizons.

These gray zones imply that the equilibrium strategies are best interpreted as robustness benchmarks rather than prescriptions guaranteed to generalize, especially under count-dependent run-value mispricing and non-stationary pitcher command.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Strategy spaces and utility: Let P_o denote observable pitch properties and P_u unobservable properties. The pitcher’s strategy set is P = P_o × ∆P_u; the batter’s is ∆S where S = {swing, take}. Game context c ∈ C includes batter, pitcher, ball–strike count, and prior pitches [PAGE 3–4]. The utility function is U(π_o, p_u, s, c) = E_{π_u, τ}[R(π_o, π_u, τ, c)] = Σ_{π_u ∈ P_u} Σ_{τ ∈ S} p_u(π_u) s(τ) R(π_o, π_u, τ, c), measured in expected runs [PAGE 6, Eq. (2)]. Negative values favor the pitcher, positive values favor the batter [PAGE 3–4].

Execution-error-augmented value: R(π_o, π_u, τ, c) = Σ_{π̃_o ∈ P_o, π̃_u ∈ P_u} P(π̃_o, π̃_u | π_o, π_u) Σ_{x ∈ X} P(x | π̃_o, π̃_u, τ, c) v(x, c) [PAGE 6, Eq. (3)], where X = {B, CS, SS, F, 1B, 2B, 3B, HR, O} [PAGE 6] and v(x, c) comes from the count-conditioned run-value table adapted from [28] [PAGE 6]. The pure pitch run value is r_v(π_o, π_u, τ, c) = Σ_{x ∈ X} P(x | π_o, π_u, τ, c) v(x, c) [PAGE 7, Eq. (4)].

Equilibrium conditions [PAGE 4, Eq. (1)]:
p* ∈ argmin_{p ∈ ∆P} max_{s ∈ ∆S} E_π[U(π, s, c)]
s* ∈ argmax_{s ∈ ∆S} min_{p_u ∈ ∆P_u} U(π_o*, p_u, s, c)

Game 1 (simultaneous, Nash) [PAGE 10, Eq. (5)]: p_u* ∈ argmin_{p_u} max_s p_u^T A s and s* ∈ argmax_s min_{p_u} p_u^T A s, where A is the |P_u| × |S| matrix with entries R(p_i, τ_j, c).

Game 3 (decision point) linear program [PAGE 22]: max_{s, v} v subject to A s ≽ v, s_i + s_{i+1} = 1 ∀ i ∈ D, s ≽ 0. The batter’s vector s has length 2|D|, with adjacent entries summing to one for each tunnel [PAGE 21–22]. The pitcher’s strategy p* is recovered from the dual [PAGE 22].

Pitcher accuracy estimation [PAGE 15–16]: Error noise ~ N(μ, Σ) with μ = [0, 0] and Σ = σI₂. TBA update: P(σ | z) ∝ [ β(1/m Σ_{f ∈ F} P(z | f, σ)) + (1 − β) W ] P(σ), with σ hypotheses spanning 0.17 ft to 2.81 ft and β = 0.95 selected [PAGE 16]. The TBA target grid spans horizontally −2.13 ft to 2.13 ft and vertically −2.5 ft to 6.6 ft at 0.5-inch resolution [PAGE 16].

Units and physical constants: Plate-location grid L uses 1.5-inch squares over −1.5 to 1.5 ft horizontally and 1 to 4 ft vertically from the pitcher’s perspective [PAGE 7]. The decision point is fixed at 24 ft from home plate [PAGE 21]. Pitch inputs to OptimusPitch include release speed, spin rate, movement, plate location, count, and handedness [PAGE 11]. OP validation cross-entropy: 1.11 (sequence-aware) vs. 1.12 (memoryless) overall, with separation growing by pitch number [PAGE 12–13].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with Douglas, Witt, Bendy, and Vorobeychik [15], who modeled the batter–pitcher matchup as a simultaneous zero-sum game but used on-base percentage as utility, thereby equating a home run with a single and assuming simultaneous moves [PAGE 3]. Melville et al. reject the simultaneity assumption as unreasonable and replace the utility with expected run value [PAGE 3]. The run-value foundation draws on Healey’s intrinsic pitch value [16], Moore’s random-forest expected run value [20], and Bay’s stuff+ [26], but Melville et al. extend these by making values batter-specific (via Alcorn’s (batter|pitcher)2vec embedding logic [6]) and sequence-dependent (conditioning on prior pitches via an RNN) [PAGE 3].

The sequence model OP differs from prior RNN work that predicts next pitch type rather than pitch outcome [31][33][21] [PAGE 3]. Tunneling and decision-point physics rely on Alan Nathan’s trajectory and movement calculators [18][22][23] and the Prospectus pitch-tunnels feature [27], with the decision point set at 24 ft [PAGE 21]. Run values v(x, c) are adapted from Sheehan [28] and Tango [29] and tabulated solely by ball–strike count in Figure 2 [PAGE 6]. Prior predictability work by Arthur, Bock, and Healey & Zhao found that sequence predictability correlates with worse performance, but none offered batter-specific next-pitch recommendations across full sequences [PAGE 2].

Multi-week traps: (1) Temporal validity is limited to Statcast data from 2021–2022, with a 75/25 train–validation split; no out-of-season holdout tests for rule changes, ball modifications, or umpire-zone drift [PAGE 11–12]. (2) The TBA σ-hypothesis upper bound of 2.81 ft is justified by an expert prior—that a 20% strike-zone hit rate is too low for a major-league pitcher—rather than by an empirical upper tail [PAGE 16]. β values from {0.5, 0.75, 0.85, 0.9, 0.95, 0.99} produced similar estimates, but this robustness check does not validate the Gaussian assumption itself [PAGE 16]. (3) Context c excludes runners, outs, and inning, so the Figure 2 run values misprice high-leverage states (e.g., a home run with bases loaded vs. bases empty) [PAGE 6]. (4) Equilibrium strategies presume opponents compute best responses, yet batters are optimal only 70–71% of the time and pitchers select the optimal pitch type only 48% of the time [PAGE 20, PAGE 22], meaning the equilibrium is exploitable in real time if either side detects the other’s deviation.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Under pressure, batters regress to fixed heuristics instead of solving (1b) instantaneously. In the Jansen–Phillips example, the Nash equilibrium prescribed a 54% swing rate, but OP estimated Phillips’s actual swing likelihood at less than 13% for a slider well outside the zone [PAGE 7–8]. This habit regression collapses the pitcher’s incentive to mix toward extremes: Jansen’s equilibrium mixed strategy included a slider as far outside the zone as possible, predicated on Phillips swinging at it—a behavior real hitters rarely exhibit [PAGE 7].

Counter-trap: Pitchers can exploit measured batter suboptimality. Against Juan Soto, the Stackelberg equilibrium recommended a changeup down the middle with an upper-bound run value of −0.02 for the batter, but deGrom threw an outside fastball that Soto chased, achieving −0.08 [PAGE 20–21]. The paper explicitly reasons that if deGrom believed Soto would choose the suboptimal action, deviating from equilibrium was rational [PAGE 20–21]. Similarly, Aaron Nola’s decision-point equilibrium had value −0.01, but his actual cutter a foot outside the zone earned −0.16 because Altuve swung at a take tunnel [PAGE 22–23]. The pitcher’s theory of mind thus includes a meta-layer: model the batter as an imperfect best responder, then deviate from the equilibrium when the error is predictable.

Clock asymmetry: The batter must identify the tunnel and execute a swing decision within the fraction of a second between the decision point (24 ft from home plate) and arrival at the catcher’s glove [PAGE 21, 23]. The paper notes that a batter cannot realistically identify the tunnel, sample from Bernoulli(p), and act within that window [PAGE 23]. By contrast, the pitcher has the interval between pitches to sample from their equilibrium mixed strategy [PAGE 23–24]. This creates a recursive temporal advantage: the pitcher can compute offline or between pitches, while the batter must act under a hard real-time constraint, making mixed strategies feasible for the pitcher but not the batter.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The decision point is fixed at 24 ft from home plate based on [27] [PAGE 21]. Because pitch velocity determines the time available after that point, a single fixed decision point introduces a physical bias: higher-velocity pitches afford less reaction time than the model assumes, while slower pitches afford more. If the empirically relevant decision point shifts with velocity, the tunneling map f: T × L → D built from Nathan’s physics calculators [PAGE 21] misassigns tunnels and invalidates the decision-point equilibrium rows of matrix A [PAGE 21–22].

Biomechanical layer: OP’s inputs are release speed, spin rate, movement, plate location, count, and handedness [PAGE 11]. Weather parameters (air density, temperature, humidity) are not explicit inputs, though movement partially proxies their aerodynamic effects. The plate-location grid uses 1.5-inch squares [PAGE 7], and the TBA target grid uses 0.5-inch resolution [PAGE 16]; below this resolution, pitcher release-point variability and batter stride timing dominate, so sub-inch location recommendations are not biomechanically identifiable.

Veto regimes: (a) Execution-noise veto: when σ exceeds roughly 1 ft, the expected-utility landscape flattens and the optimal aim point converges to the center of the strike zone regardless of batter [PAGE 16–18, Figure 11 discussion]; fine-grained edge-targeting equilibria are physically vetoed for low-command pitchers. (b) Release-point drift: TBA estimates σ from up to the 1000 most recent pitches per pitcher–type [PAGE 16]; fatigue, injury, or mechanical changes that shift the release point make the stationary Gaussian noise assumption invalid and the equilibrium stale. (c) Weather/movement veto: if environmental conditions alter movement enough that the observed pitch no longer passes through the modeled decision point, the Po/P_u partition in Game 3 fails and the batter’s information set is misspecified.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto scenario 1 — Batter reaction latency exceeds the post-decision-point window. Verifiable measurement: Use high-speed tracking to measure the interval from pitch crossing the 24-ft decision-point plane to swing initiation across many pitches. If mean latency exceeds the remaining flight time to the plate, Game 3 is physically infeasible. Prediction: Observed swing rates in tunnels assigned a pure-swing equilibrium will fall significantly below 100%, and in pure-take tunnels will rise significantly above 0%, causing the decision-point equilibrium to lose predictive power and collapse toward simultaneous-game behavior.

Veto scenario 2 — Non-Gaussian, state-dependent execution error. Verifiable measurement: Stratify TBA σ estimates by game state (e.g., innings pitched, pitch count in the current outing, or days since last appearance). If σ systematically increases under fatigue, the Gaussian noise assumption is violated. Prediction: Once σ crosses the approximately 1-ft threshold where optimal aim converges to the zone center [PAGE 16], model-predicted edge locations will systematically over-target the corners late in games, producing higher actual run values than the model’s estimated utility.

Veto scenario 3 — Within-plate-appearance batter adaptation outruns the RNN hidden state. Verifiable measurement: Compare OP cross-entropy loss against the memoryless baseline separately for at-bats of length ≤3 pitches versus length ≥4 pitches, controlling for count. Prediction: If batters adapt faster than the hidden state captures, OP will not outperform the memoryless model on pitches 1–2 of short at-bats; its advantage will emerge only on later pitches (4+), contradicting a uniform sequence-depth benefit and limiting OP’s value in quick at-bats despite the paper’s claim that prior pitches improve later-pitch predictions [PAGE 13].
</RLVR_COUNTERFACTUAL_VETOES>