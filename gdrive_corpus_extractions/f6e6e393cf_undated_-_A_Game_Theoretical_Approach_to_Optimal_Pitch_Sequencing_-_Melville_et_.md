---
source: "undated - A Game Theoretical Approach to Optimal Pitch Sequencing - Melville et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/undated"
pages: 26
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6146
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about pitch sequencing using game theory. I need to produce output with strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations. Use real formal LaTeX from the paper. Cite page markers [PAGE N] where relevant (the text has page numbers embedded like 1, 2, 3... up to 26). Need exact verbatim quotes when citing.

I need to ensure total word count >= 1000 words across sections. THINK_TRACE alone >=400 words.

Let me structure the response carefully.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Discuss the three games, Nash vs Stackelberg vs decision-point equilibrium. Discuss the utility function, OptimusPitch RNN, TBA accuracy estimation. Gray zones: equilibrium existence vs behavioral realism, the impossibility of mixed strategies for batters in real time, the sequential game's upper bound vs actual performance, the decision point at 24 feet, tunneling physics. At least 400 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations from the paper. Define sets P_o, P_u, P, C, U, equilibrium conditions (1a), (1b). Game 1, 2, 3 definitions. Utility expectation equation (2), (3), (4). RNN architecture equations? The paper describes OP but doesn't give explicit LaTeX for RNN, but I can formalize based on description: x_t, h_t, batter embedding B, y_t ∈ X. TBA Bayesian update equation. Linear programming for Game 3. Page citations [PAGE 3], [PAGE 4], [PAGE 5], [PAGE 6], [PAGE 10], [PAGE 14], [PAGE 15], [PAGE 21]. Include units: feet, inches, run value (expected runs), probability dimensionless, cross entropy loss nats? Softmax output. Breakdown regimes: sigma > 2.81 ft upper limit, decision point at 24 ft, strike zone grid 1.5 inch squares.

RETROCAUSAL_GENEALOGY: Historical lineage: Douglas et al. [15] simultaneous zero-sum game using OBP utility; Healey intrinsic value [16]; Moore expected run value [20]; Tango run values by count [29]; Sheehan run values [28]; Alan Nathan physics [18][22][23]; Prospectus pitch tunnels [27]; Alcorn (batter|pitcher)2vec [6]; Prasad graph embeddings [24]; Yoshihara & Takahashi topic model [32]; Arthur, Bock, Healey & Zhao predictability; Roegele tunneling [25]. Multi-week traps: overfitting to equilibrium against perfect batter; assuming batter can compute mixed strategy Bernoulli in <400ms; ignoring count-specific run value nonlinearity; TBA hypothesis sigma upper bound 2.81 ft may exclude wild pitchers; validation data 2021-2022 may not generalize to 2024+ due to rule changes (shift restrictions, pitch clock, larger bases). Need multi-week traps: e.g., relying on Game 1 Nash in a single series leads to predictable outside-zone sliders that batters stop swinging at after 3-4 exposures; Game 2 Stackelberg assumes batter optimal 70% of time, so 30% deviation creates exploitable drift over a week; Game 3 mixed strategy requires randomization impossible for humans, causing pitcher to over-rely on equilibrium while batter adapts over multiple at-bats in a series.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Crisis habit regression: under pressure (bottom 9th, walk-off scenario), pitchers revert to heuristics (hard in, soft away) rather than equilibrium; example Jansen vs Phillips Oct 24 2020 [PAGE 6]. Counter-trap: batter anticipates pitcher's deviation from equilibrium (e.g., Soto swinging at deGrom's outside fastball because he expects deGrom to exploit Soto's patience; deGrom gets swing and miss). Clock: physical decision point 24 ft from home plate [PAGE 20], time window ~0.4s; batter must sample Bernoulli(p) within fraction of second; pitcher samples mixed strategy between pitches. Recursive theory of mind: pitcher models batter modeling pitcher; depth-K reasoning; equilibrium collapses when K=0 (habit) vs K=∞ (Nash). Breakdown: crisis reduces K to 0, causing regression to heuristic, making Stackelberg upper bound invalid because batter not best-responding.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Physical: pitch release speed, spin rate, movement, plate location (x_t vector [PAGE 10]); 24 ft decision point based on Nathan physics [PAGE 20]; tunneling mapping f: T×L→D using trajectory calculators [PAGE 20]. Biomechanical: batter swing completion time, decision point, inability to execute mixed strategy Bernoulli in real time [PAGE 22]; pitcher execution error sigma Gaussian N(0, σI_2) [PAGE 14]; TBA sigma hypothesis range 0.17 ft to 2.81 ft [PAGE 14]; 2.81 ft upper limit means strike zone hit only 20% of time [PAGE 14]. Weather: not explicitly in paper, but I can discuss how air density affects spin/movement and thus tunneling decision points; however must stay grounded. Veto layers: if physical sigma > 1 ft, optimal location converges to middle [PAGE 16-17], vetoing corner-picking equilibria; if batter optimal rate < 70% [PAGE 19], Stackelberg vetoed; if mixed strategy sampling impossible [PAGE 22], decision point equilibrium vetoed as batter-side implementation but kept as pitcher-side upper bound. Need exact citations.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning via Verifiable Rewards? Probably means scenarios where we can verify counterfactuals. Need 3 scenarios:
1. Veto: Pitcher follows Game 1 Nash equilibrium throwing slider 0.37 outside zone vs Phillips. Counterfactual: batter learns after 3 exposures and stops swinging (actual swing likelihood <13% [PAGE 7]). Prediction: equilibrium collapses; pitcher's expected utility rises above -0.07; RLVR veto triggers on observed swing rate deviation >15 percentage points from equilibrium 0.54 over a 7-day rolling window.
2. Veto: Game 2 Stackelberg assumes batter best response. Validation shows batters optimal only 70% [PAGE 19]. Counterfactual: deGrom throws changeup down middle (equilibrium) vs actual outside fastball; if Soto takes changeup (optimal), run value -0.02, but deGrom's actual pitch got -0.08 due to Soto error [PAGE 19-20]. Prediction: RLVR veto triggers when batter chase rate outside zone > league average + 2 SD; pitcher should deviate from Stackelberg to exploit systematic suboptimality.
3. Veto: Game 3 decision point mixed strategy requires batter to randomize swing/take per tunnel (e.g., Altuve swing 12% at FF tunnel [PAGE 22]). Counterfactual: impossible human execution; Nola threw cutter outside zone not in equilibrium, got -0.16 vs equilibrium -0.01 [PAGE 22]. Prediction: RLVR veto triggers when tunnel entropy > threshold or when observed batter pure-strategy compliance < 71% over 255-pitch sample [PAGE 22]; pitcher should treat equilibrium as upper bound only, not target.

Need to ensure no betting lines. No mention of odds, spreads, etc. "Odds" appears in source? Not really, but I won't mention betting. "Probability" is fine. Avoid "odds" word.

Need >=1000 words total. Let me draft each section with substantial length.

Important: cite exact [PAGE N] markers. The text provided has page numbers at bottom: 1 through 26. I should reference them like [PAGE 3], [PAGE 4], etc. Verbatim quotes in quotes.

Need formal LaTeX equations. I'll reproduce key ones from the paper.

Equations from paper:
- Equilibrium definition (1): on page 3-4. The image/text says:
where we abuse notation of U, since (πo, pu) ∈ P. Note asymmetry... For settings in this paper, such equilibrium always exists...
I can write:
\[
(p^*, s^*) \text{ is an equilibrium } \iff
\begin{cases}
p^* \in \arg\min_{p \in \Delta P} \mathbb{E}_{(πo,pu)\sim p}[U((πo,pu), s^*, c)] \\
s^* \in \arg\max_{s \in \Delta S} U((πo, pu), s, c) \quad \text{for observed } πo
\end{cases}
\]
Actually the paper defines given observed portion πo. Let's keep it formal but accurate.

- Game 1: Po = ∅, Pu = T × L. Nash equilibrium. Matrix A entry R(pi, τj, c) [PAGE 18].
- Game 2: Po = T × L, Pu = ∅. Stackelberg. Batter deterministic best response [PAGE 18-19].
- Game 3: Po = D, Pu = T. Decision point 24 feet [PAGE 20]. Matrix A is |D||T| × 2|D| [PAGE 20]. LP: max s,v v s.t. As ⪰ v, s_i + s_{i+1} = 1, ∀i∈D, s ⪰ 0 [PAGE 21].

- Utility: U : P × ΔS × C → ℝ [PAGE 3]. Negative favors pitcher, positive favors batter.
- Outcome mapping X = {B, CS, SS, F, 1B, 2B, 3B, HR, O} [PAGE 5].
- v(x,c) from Figure 2 [PAGE 5]. Example row 0-0: B=0.034, CS=-0.043, ..., HR=1.407, O=-0.289.
- R formulation expected value [PAGE 5].
- Equation (4): run value = average change in run potential + average runs scored [PAGE 6].
- OP: x_t vector release speed, spin rate, movement, plate location, count, handedness [PAGE 10]. h_1 zeros. Five linear layers ReLU, softmax over X [PAGE 10]. Cross entropy loss OP 1.11 vs memoryless 1.12 [PAGE 11-12].
- TBA: noise N(μ, Σ), μ=[0,0], Σ=σI_2 [PAGE 14]. Hypothesis σ values 66 between 0.17 ft and 2.81 ft [PAGE 14]. β=0.95 used [PAGE 15]. Grid -2.13 to 2.13 ft horizontal, -2.5 to 6.6 ft vertical, 0.5 inch resolution [PAGE 15].
- Grid L: 1.5 inch squares from -1.5 to 1.5 ft horizontal, 1 to 4 ft vertical [PAGE 6].
- Decision point: 24 feet from home plate [PAGE 20].
- Jansen example: optimal mixed strategy cutter (0.19, 2.69) prob 0.63, slider (-1.46, 1.04) prob 0.37; Phillips swing prob 0.54; expected utility -0.07; actual pitch run value 0.037 [PAGE 6-7]. Actual swing likelihood at that slider <13% [PAGE 7].
- Sequential example: deGrom vs Soto, optimal changeup down middle run value -0.02 if best response, actual outside fastball -0.08 because Soto swung [PAGE 19-20]. Batters optimal 70% [PAGE 19]. Pitchers optimal pitch type 48% [PAGE 19].
- Decision point example: Nola vs Altuve, cutter foot outside, expected run value -0.16 vs equilibrium -0.01 [PAGE 22]. Altuve needs Bernoulli(0.12) [PAGE 22]. 255 pitches, 71% optimal [PAGE 22].

Now word count. I need to be verbose enough. Let's write.

I must not include any betting lines. No spreads, totals, moneylines, odds. Avoid "odd" too maybe? "Odds" specifically. I'll avoid "odds".

Structure:

<THINK_TRACE>
... >=400 words ...
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
... formal LaTeX, units, page citations, breakdown ...
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

I need to ensure total >=1000 words. Let's aim for ~1500-1800 words total to be safe.

Let's draft carefully.

THINK_TRACE content:
- Multi-hop derivation: start from utility U, through outcome probabilities P(x|πo,πu,τ,c), through RNN OP hidden state h_t, through accuracy σ via TBA, through game equilibrium.
- Gray-zone audit: equilibrium existence claim vs behavioral reality; the "instantaneous calculation" assumption [PAGE 4]; the impossibility of Bernoulli(0.12) in <400ms [PAGE 22]; Game 1 Nash leading to outside-zone sliders that batters won't swing at [PAGE 7]; Game 2 Stackelberg as upper bound not achievable [PAGE 19-20]; Game 3 as pitcher-only implementable [PAGE 23]; TBA sigma upper bound 2.81 ft excludes high-variance pitchers [PAGE 14]; validation split 75/25 from 2021-2022 may not capture pitch-clock era timing changes.
- Also mention that paper admits batters optimal only 70% and pitchers optimal 48% [PAGE 19], which undermines equilibrium assumptions.

Let's write it out.

SOURCE_OPERATORS_AND_EQUATIONS:
List equations with LaTeX.
1. Strategy sets and utility: P = P_o × ΔP_u, U: P × ΔS × C → ℝ [PAGE 3].
2. Equilibrium condition (1) [PAGE 3-4].
3. Game 1/2/3 definitions [PAGE 4].
4. Expected utility decomposition [PAGE 5]: sum over pu, s, R.
5. Run value equation (4) [PAGE 6].
6. OP RNN: h_{t+1} = h_t + FFN([x_t; emb(y_t)]); output softmax(FFN([x_t; emb(B); h_t])) over X [PAGE 10].
7. TBA Bayesian update [PAGE 15] — equation from text: P(σ|z,f) ∝ ... I'll write formal version based on description.
8. Game 3 LP [PAGE 21]: max s,v v s.t. As ⪰ v, s_i+s_{i+1}=1, s⪰0.
Units: feet for location, inches for grid resolution, seconds implicit for decision point, run value in expected runs (dimensionless runs), probability dimensionless, cross entropy in nats.
Breakdown regimes: σ > 1 ft optimal converges to middle [PAGE 16-17]; σ = 2.81 ft strike zone hit 20% [PAGE 14]; decision point 24 ft [PAGE 20]; batter optimal rate 70% [PAGE 19]; swing rate equilibrium 0.54 vs actual <0.13 [PAGE 7].

RETROCAUSAL_GENEALOGY:
Historical/scientific lineage: cite [15] Douglas et al. simultaneous zero-sum OBP utility [PAGE 2]; [16] Healey intrinsic value [PAGE 2]; [20] Moore expected run value random forest [PAGE 2]; [29] Tango run values by count [PAGE 5, 26]; [28] Sheehan run values [PAGE 5, 25]; [6] Alcorn (batter|pitcher)2vec [PAGE 2]; [18][22][23] Alan Nathan physics/trajectory [PAGE 14, 20]; [27] Prospectus pitch tunnels [PAGE 20, 26]; [25] Roegele tunneling [PAGE 2]; [24] Prasad graph embeddings [PAGE 2]; [32] Yoshihara & Takahashi topic model [PAGE 2]; [13] Carleton velocity change [PAGE 2]. Multi-week traps: over a week/series, batters update beliefs about pitcher mixing; Game 1 Nash exploited if slider outside zone not swung at after repeated exposure [PAGE 7]; Game 2 Stackelberg degrades if batter best-response rate falls below 70% over multiple at-bats [PAGE 19]; Game 3 tunneling requires pitch physics consistency; if release point varies due to fatigue or weather, tunnel mapping f:T×L→D breaks [PAGE 20]. Validation data 2021-2022 [PAGE 11] predates full pitch clock adoption; timing assumptions at decision point may shift.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under high leverage (bottom 9th, down 7-6, runners on) Jansen/Pitchers revert to heuristics rather than equilibrium [PAGE 6]. Phillips example: Jansen actual cutter vs equilibrium mixed strategy [PAGE 6-7]. Counter-trap: batter anticipates deviation; deGrom/Soto: Soto swings at outside fastball because he expects deGrom to exploit patience, but deGrom actually throws optimal changeup? Wait paper says deGrom threw outside fastball and Soto swung; equilibrium was changeup down middle. So counter-trap: deGrom expects Soto to take (optimal), but Soto swings (suboptimal), so deGrom's deviation is rewarded [PAGE 19-20]. Clock: 24 ft decision point, fraction of second between decision point and plate [PAGE 20, 22]; batter cannot execute mixed strategy Bernoulli(p) in real time [PAGE 22]; pitcher can sample mixed strategy between pitches [PAGE 23]. Recursive depth: K=0 habit regression, K=1 best response, K=∞ Nash. Breakdown: crisis collapses K to 0, invalidating Stackelberg upper bound because batter not best-responding; pitcher's deviation becomes rational only if batter's error rate is predictable.

CROSS_LAYER_VETO_ADJUDICATION:
Three veto layers.
Physical layer: pitch kinematics x_t = [release speed, spin rate, movement, plate location, count, handedness] [PAGE 10]; decision point at 24 ft from Alan Nathan physics [PAGE 20]; grid L 1.5 inch squares [-1.5,1.5] ft horizontal, [1,4] ft vertical [PAGE 6]. Veto: if σ > 1 ft, expected utility landscape flattens and optimal location converges to center [PAGE 16-17], vetoing corner equilibria.
Biomechanical layer: batter swing completion time; decision point is last point to initiate swing [PAGE 20]; mixed strategy Bernoulli(0.12) impossible for Altuve in <400ms [PAGE 22]; pitcher execution error N(0, σI_2) [PAGE 14]. Veto: if observed batter pure-strategy compliance < 71% over 255-pitch sample [PAGE 22], decision point equilibrium is not implementable by batter; only pitcher-side upper bound valid.
Weather/environmental layer: not explicitly modeled in paper; air density/temperature affects spin-induced movement and thus tunnel equivalence classes f:T×L→D [PAGE 20]; TBA trained on 2021-2022 Statcast [PAGE 11] may not capture seasonal weather shifts. Veto: if atmospheric conditions alter movement enough that tunnels no longer overlap, Game 3 tunneling assumptions break.
Adjudication: hierarchy — physical veto (σ) overrides strategic recommendation; biomechanical veto (mixed-strategy impossibility) overrides batter-side equilibrium but preserves pitcher-side upper bound; weather veto requires recalibrating f and g before applying Game 3.

RLVR_COUNTERFACTUAL_VETOES:
3 scenarios.
Scenario 1: Jansen/Phillips Game 1. Verifiable: equilibrium swing probability 0.54 [PAGE 6]; actual model-estimated swing likelihood <13% for the specific slider [PAGE 7]. Veto trigger: rolling 7-day swing rate at equilibrium-recommended outside-zone location deviates >15 percentage points from 0.54. Prediction: expected utility rises above -0.07; Nash mix collapses; pitcher should reduce outside-zone slider frequency.
Scenario 2: deGrom/Soto Game 2. Verifiable: batters optimal best-response 70% [PAGE 19]; equilibrium changeup down middle value -0.02 vs actual outside fastball -0.08 due to Soto error [PAGE 19-20]. Veto trigger: observed chase rate outside zone exceeds league mean by >2 SD over a weekly window. Prediction: Stackelberg equilibrium is dominated by exploitative deviation; pitcher should target batter-specific systematic error rather than minimax upper bound.
Scenario 3: Nola/Altuve Game 3. Verifiable: decision point equilibrium -0.01 vs actual cutter outside zone -0.16 [PAGE 22]; Altuve required Bernoulli(0.12) mixed strategy [PAGE 22]; sample 255 pitches, 71% compliance [PAGE 22]. Veto trigger: tunnel entropy high and batter pure-strategy adherence < 71% across matchup sample. Prediction: pitcher cannot rely on batter executing mixed strategy; treat decision point equilibrium as ceiling only, and deviate toward pitches that exploit observed batter misclassification (e.g., well-outside cutter).

Need to make sure no toy equations. All equations are from paper or formal restatements. No invented ratios like Force/Fatigue.

Word count: Let's estimate. THINK_TRACE ~450. SOURCE_OPERATORS ~500. RETROCAUSAL ~300. RECURSIVE ~300. CROSS_LAYER ~250. RLVR ~250. Total ~2050. Good.

Need to cite verbatim quotes where page markers used. I'll include short quoted phrases with [PAGE N].

Let's write the final output. Ensure XML tags exact. No markdown outside? It's fine to use markdown inside but keep tags.

Double-check: "ZERO BETTING LINES" — I won't mention spreads, totals, moneylines, odds. Avoid "odds". I might use "probability" which is fine. I will not say "odds".

Also "ZERO TOY EQUATIONS" — no invented ratios. All equations cited from source.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper models the batter-pitcher confrontation as a zero-sum game with utility function U : P × ΔS × C → ℝ, where negative values favor the pitcher and positive values favor the batter [PAGE 3]. The pitcher selects a mixed strategy p ∈ ΔP over P = P_o × ΔP_u, while the batter selects s ∈ ΔS over S = {swing, take}. The equilibrium condition given observed pitch portion πo requires p* to minimize expected utility and s* to best-respond to the actually observed πo [PAGE 3-4]. This asymmetry is the crux of the three model variants.

Game 1 sets P_o = ∅ and P_u = T × L, yielding a Nash equilibrium in which the batter commits to a fixed swing probability before observing anything [PAGE 4]. The Jansen-Phillips example shows the Nash mix prescribes a cutter at (0.19, 2.69) with probability 0.63 and a slider at (−1.46, 1.04) with probability 0.37, while Phillips swings with probability 0.54 [PAGE 6]. The expected utility is −0.07, yet the actual pitch Jansen threw had run value 0.037 [PAGE 6-7]. Critically, the paper’s own outcome model estimates Phillips’ actual swing likelihood on that particular slider at less than 13% [PAGE 7], which means the Nash prescription would induce Jansen to throw a pitch the batter will almost certainly take—destroying the equilibrium because Jansen would deviate. This is a gray-zone failure: the equilibrium exists mathematically but is behaviorally unstable.

Game 2 sets P_o = T × L and P_u = ∅, producing a Stackelberg equilibrium where the batter observes the full pitch and best-responds deterministically [PAGE 4]. The deGrom-Soto example illustrates the binding constraint: batters made the optimal swing decision on only 70% of validation pitches, and pitchers chose the optimal pitch type just 48% of the time [PAGE 19]. The Stackelberg value therefore serves as an upper bound on batter performance rather than a realistic prediction [PAGE 20]. If Soto swings at a pitch he should take, deGrom’s deviation from equilibrium is rewarded [PAGE 19-20], which means recursive theory-of-mind depth collapses from ∞ to 0 under pressure.

Game 3 sets P_o = D and P_u = T, with the decision point defined as 24 feet from home plate based on Alan Nathan’s trajectory work [PAGE 20]. The linear program imposes s_i + s_{i+1} = 1 for every tunnel i ∈ D, forcing the batter to randomize swing/take within each observed tunnel [PAGE 21]. The paper concedes this is impossible for a human: Altuve would need to sample Bernoulli(0.12) in the fraction of a second between the decision point and the plate [PAGE 22]. Across 255 analyzed pitches, batters complied with the pure-strategy equilibrium only 71% of the time, and no batter was perfect [PAGE 22]. Thus Game 3 is implementable for the pitcher (who can sample between pitches) but not for the batter [PAGE 23].

Gray-zone audit summary: (1) the TBA accuracy model caps σ at 2.81 ft because beyond that a pitcher hits the strike zone only 20% of the time when aiming center [PAGE 14], which excludes high-variance arms from the model’s domain; (2) training data span 2021–2022 Statcast [PAGE 11], predating full pitch-clock enforcement, so the 24-foot decision-point timing may not transfer to later seasons; (3) the OP RNN’s sequence-dependence advantage only appears on later pitches in an at-bat, with cross-entropy loss 1.11 vs. 1.12 for the memoryless baseline overall, but meaningfully lower loss deeper into the sequence [PAGE 11-12], implying early-count equilibria are less reliable than late-count ones; (4) the claim that “such an equilibrium always exists” [PAGE 4] holds for the abstract game but not for the behavioral instantiation, because human batters cannot compute instantaneous best responses or mixed strategies under real-time constraints.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX restatements, units, page citations, and breakdown regimes.

1. Strategy and utility spaces [PAGE 3]:
   - Pitching strategy set: P = P_o × ΔP_u, where ΔP_u is the simplex over unobservable pitch properties.
   - Batting strategy set: s ∈ ΔS, S = {swing, take}.
   - Context set: C = {(batter, pitcher, ball-strike count, previous pitches)}.
   - Utility: U : P × ΔS × C → ℝ. U < 0 favors pitcher; U > 0 favors batter.

2. Equilibrium definition (1) [PAGE 3-4]:
   Given context c ∈ C and observed portion πo ∈ P_o, (p*, s*) is an equilibrium iff
   p* ∈ arg min_{p ∈ ΔP} E_{(πo,πu)~p}[ U((πo,πu), s*, c) ],
   s* ∈ arg max_{s ∈ ΔS} U((πo,πu), s, c) for the actually observed πo.
   The pitcher optimizes over expected utility; the batter optimizes conditional on observed πo. Existence is asserted for all settings in the paper, with multiple equilibria possible but equal in value [PAGE 4].

3. Game variants [PAGE 4]:
   - Game 1 (Simultaneous/Nash): P_o = ∅, P_u = T × L. Batter observes nothing; equilibrium is the standard zero-sum Nash equilibrium.
   - Game 2 (Sequential/Stackelberg): P_o = T × L, P_u = ∅. Batter observes full pitch and best-responds deterministically; pitcher chooses deterministically to minimize the batter’s best response.
   - Game 3 (Decision Point): P_o = D, P_u = T. Batter observes decision point d ∈ D but not pitch type; pitcher mixes over pitch types through common tunnels.

4. Utility decomposition [PAGE 5]:
   U is an expectation over pitcher and batter randomization:
   U = Σ_{πu ∈ P_u} p_u(πu) Σ_{τ ∈ S} s(τ) R(πo, πu, τ, c),
   where R : P_o × P_u × S × C → ℝ. The outcome space is X = {B, CS, SS, F, 1B, 2B, 3B, HR, O} [PAGE 5].

5. Run-value table v(x,c) [PAGE 5, Figure 2]:
   Values depend only on count c. Example row 0-0: v(B,0-0)=0.034, v(CS,0-0)=−0.043, v(HR,0-0)=1.407, v(O,0-0)=−0.289. Units are expected runs (dimensionless run units).

6. Pitch run value [PAGE 6, Eq. (4)]:
   Run value = average change in run potential + average runs scored as a result of the pitch outcome. Cited from [29].

7. OptimusPitch (OP) RNN [PAGE 10]:
   - Input x_t = [release speed, spin rate, movement, plate location, ball-strike count, batter/pitcher handedness].
   - Hidden state h_1 = 0 vector.
   - Outcome estimator: softmax( FFN_5([ x_t ; emb(B) ; h_t ]) ) → distribution over X.
   - Hidden-state update: h_{t+1} = h_t + FFN_5([ x_t ; emb(y_t) ]), where y_t ∈ X is the realized outcome.
   - Five linear layers with ReLU activations in each feed-forward network.
   - Validation cross-entropy: OP = 1.11, memoryless = 1.12 [PAGE 11-12]; sequence advantage emerges on later pitches [PAGE 12].

8. Pitcher accuracy / TBA [PAGE 14-15]:
   - Execution error modeled as π̃ = (π̃o, p̃u) with noise N(μ, Σ), μ = [0, 0], Σ = σI_2 [PAGE 14].
   - Hypothesis set: 66 values of σ distributed between 0.17 ft and 2.81 ft [PAGE 14]. Upper limit 2.81 ft chosen because strike-zone hit rate from center drops to 20% [PAGE 14].
   - Bayesian update over hypothesis σ values using executed action z, focal targets f ∈ F, total targets W, tuning parameter β [PAGE 15]. β = 0.95 selected [PAGE 15].
   - Spatial grid: horizontal [−2.13, 2.13] ft, vertical [−2.5, 6.6] ft, resolution 0.5 inches [PAGE 15].
   - Location grid L used in games: 1.5-inch squares, horizontal [−1.5, 1.5] ft, vertical [1, 4] ft from home-plate tip [PAGE 6].

9. Game 3 linear program [PAGE 21]:
   Matrix A ∈ R^{|D||T| × 2|D|}, with rows indexed by (πo^i, πu^i) and columns paired per tunnel (swing/take). Solve:
   max_{s,v} v
   s.t. A s ⪰ v 1,
        s_i + s_{i+1} = 1, ∀ i ∈ D,
        s ⪰ 0.
   The equality constraint enforces that swing and take probabilities sum to one within each observed tunnel. Pitcher strategy p* recovered from the dual [PAGE 21].

Breakdown regimes:
- σ > 1 ft: optimal aiming location converges to the center of the strike zone; corner-picking equilibria vanish [PAGE 16-17].
- σ = 2.81 ft: strike-zone hit probability from center ≈ 20%, below major-league viability; model domain excludes such pitchers [PAGE 14].
- Batter best-response rate = 70% [PAGE 19]: Stackelberg upper bound is not achieved in practice; deviation becomes rational when systematic batter error is detectable.
- Jansen slider case: equilibrium swing probability 0.54 [PAGE 6] vs. model-estimated actual swing likelihood < 0.13 [PAGE 7]; Nash prescription is unstable under observed batter response.
- Decision point at 24 ft [PAGE 20]: bounds the physical time available for the batter to initiate a swing; beyond this point, pitch-type uncertainty remains unresolved.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week strategic traps.

The paper descends from a sequence of sabermetric and game-theoretic precursors. Douglas, Witt, Bendy, and Vorobeychik [15] previously modeled the matchup as a zero-sum game but assumed simultaneous decisions and used on-base percentage as utility, weighting a home run identically to a single [PAGE 2]. Melville et al. reject that utility in favor of expected run value derived from Sheehan [28] and Tango [29], which properly weights home runs relative to singles by count [PAGE 2, 5]. Healey’s intrinsic pitch value [16] and Moore’s random-forest expected run value [20] are cited as prior pitch-valuation work, but neither is batter-specific or sequence-aware [PAGE 2]. Alcorn’s (batter|pitcher)2vec embedding supplies the batter-specific representation used in OP [PAGE 2, 10].

On sequencing heuristics, Roegele [25] found that back-to-back different pitch types on similar trajectories raise swing-and-miss rates; Bonney [12] found lower-velocity pitches after fastballs benefit the pitcher; Carleton [13] showed velocity-change effects are batter-specific [PAGE 2]. Arthur, Bock, and Healey & Zhao linked sequence predictability to worse performance [PAGE 2]. Prasad’s directed-graph embeddings [24] and Yoshihara & Takahashi’s topic models [32] analyze full sequences but do not produce specific recommendations for a given batter-pitcher-state [PAGE 2]. Melville et al. extend these by modeling the full sequence regardless of length and by incorporating all pitch characteristics, not merely velocity or trajectory [PAGE 2].

The physical foundation is Alan Nathan’s trajectory and movement calculators [18, 22, 23], used to define the mapping f : T × L → D between pitch type/location and decision point [PAGE 20]. The “tunnel” concept is borrowed from Prospectus research [27], where consecutive pitches share a trajectory up to the decision point [PAGE 20, 25].

Multi-week traps embedded in this lineage:
1. Equilibrium decay under repetition. Game 1’s Nash mix prescribes throwing an outside-zone slider with probability 0.37 against Phillips [PAGE 6]. Over a week or series, a smart batter who observes that the pitch is rarely struck will reduce swing probability below the equilibrium 0.54; the paper’s own model puts actual swing likelihood on that slider below 13% [PAGE 7]. The pitcher must then deviate or the Nash strategy becomes a dominated loss.
2. Stackelberg brittleness. Game 2 assumes the batter best-responds, yet validation shows batters are optimal only 70% of the time and pitchers choose the optimal pitch type only 48% of the time [PAGE 19]. Over multiple at-bats in a series, a batter like Soto may systematically swing at pitches he should take, as in the deGrom example [PAGE 19-20]. A pitcher who rigidly plays Stackelberg forfeits exploitable gains.
3. Decision-point impossibility. Game 3 requires the batter to execute a mixed strategy inside a tunnel (e.g., Bernoulli(0.12) for Altuve [PAGE 22]), which cannot be performed in the sub-second interval between the 24-foot decision point and the plate [PAGE 20, 22]. Over a multi-game series, batters will revert to pure heuristics, leaving only the pitcher-side upper bound meaningful [PAGE 23].
4. Data-window drift. OP and TBA are trained on 2021–2022 Statcast [PAGE 11], before the full pitch-clock and shift-restriction environment; timing at the decision point and release-point consistency may have shifted, invalidating the 24-foot assumption and TBA σ estimates if not recalibrated.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap structure, and the decision clock.

Recursive theory of mind in this game is the nesting of beliefs: the pitcher chooses p believing the batter will best-respond s, while the batter chooses s believing the pitcher will play p*. Equilibrium is the fixed point at infinite recursion depth K = ∞. Three behavioral regimes break this nesting.

Crisis habit regression. Under high leverage, pitchers abandon computed equilibria for simple heuristics. The paper’s central example is Jansen vs. Phillips on October 24, 2020, bottom of the ninth, down 7-6 with runners on first and second and two out [PAGE 6]. Jansen threw an actual cutter rather than sampling his optimal mixed strategy (cutter at (0.19, 2.69) with probability 0.63, slider at (−1.46, 1.04) with probability 0.37) [PAGE 6]. The result was a walk-off single with run value 0.037 versus an equilibrium expected utility of −0.07 [PAGE 6-7]. This is habit regression to a predictable fastball/slider pattern under crisis pressure, exactly the exploitability the paper warns smart hitters can anticipate [PAGE 1].

Counter-trap. The batter can profit by anticipating that the pitcher will deviate from equilibrium to exploit perceived batter passivity. In the deGrom-Soto example, the Stackelberg equilibrium prescribes a changeup down the middle with value −0.02 if Soto best-responds [PAGE 19-20]. DeGrom instead threw a 102 mph fastball outside the zone; Soto swung and missed, producing −0.08 [PAGE 19]. DeGrom’s deviation was rational only because he correctly modeled Soto as likely to make a suboptimal swing. The counter-trap is inverted: if Soto expected deGrom to throw the equilibrium changeup and took it, deGrom’s outside fastball would be punished. Because batters best-respond only 70% of the time [PAGE 19], pitchers face a second-order guessing game over whether the batter will regress to habit or play the counter-trap.

The clock. The physical recursion limit is the decision point at 24 feet from home plate [PAGE 20]. Beyond that point, the batter cannot incorporate new trajectory information before committing to the swing. Game 3’s requirement that Altuve sample Bernoulli(0.12) within a tunnel [PAGE 22] is computationally impossible in the fraction of a second available [PAGE 22]. The pitcher, however, can sample p* between pitches [PAGE 23], creating an asymmetry in recursion depth: the pitcher operates at K ≥ 1 between deliveries, while the batter is forced toward K = 0 at the moment of decision.

Breakdown rule: when crisis collapses batter recursion depth to K = 0 (pure habit), the Stackelberg upper bound and decision-point equilibrium lose predictive force. The pitcher’s optimal response shifts from minimax equilibrium to direct exploitation of the observed, crisis-induced bias. The paper acknowledges this implicitly by treating Game 2 and Game 3 values as upper bounds on batter performance rather than realized outcomes [PAGE 20, 23].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto layers with adjudication hierarchy.

Physical layer (pitch kinematics and tunneling). Each pitch is represented by x_t = [release speed, spin rate, movement, plate location, count, handedness] [PAGE 10]. The decision point d ∈ D is fixed at 24 feet from home plate using Alan Nathan’s physics models [PAGE 20]. The mapping f : T × L → D assigns pitch types and plate locations to tunnels, and g : T × D → L inverts it for run-value calculation [PAGE 20]. The spatial grid L uses 1.5-inch squares over horizontal [−1.5, 1.5] ft and vertical [1, 4] ft [PAGE 6].

Veto condition: pitcher execution error is N(0, σI_2) [PAGE 14]. As σ grows beyond 1 ft, the expected-utility landscape flattens and the optimal aiming point converges to the center of the strike zone [PAGE 16-17]. Any Game 2 or Game 3 recommendation that targets a corner location is vetoed for pitchers with σ > 1 ft. The TBA hypothesis ceiling σ = 2.81 ft corresponds to a 20% center-zone hit rate, below major-league viability [PAGE 14], excluding high-error arms from the model’s admissible domain.

Biomechanical layer (batter execution and timing). The batter must initiate the swing before the ball passes the 24-foot decision point; after that, no new information can be incorporated [PAGE 20]. Game 3’s mixed-strategy requirement (e.g., Altuve swinging with probability 0.12 on a fastball tunnel) demands Bernoulli sampling in under half a second [PAGE 22], which is biomechanically impossible [PAGE 22]. Validation shows batters follow pure-strategy equilibria only 71% of the time across 255 pitches, and no batter is perfect [PAGE 22].

Veto condition: if observed batter pure-strategy adherence in a tunnel falls below ~70% over a matchup sample, the decision-point equilibrium cannot be treated as a batter-implementable strategy; it survives only as a pitcher-side ceiling [PAGE 23]. The pitcher may still sample p* between pitches, but cannot rely on the batter randomizing correctly.

Weather/environmental layer (atmospheric and temporal drift). The paper does not explicitly model weather, but the tunnel mapping f : T × L → D depends on spin-induced movement, which is sensitive to air density, temperature, and humidity [PAGE 20, via Alan Nathan citations]. The training window is 2021–2022 Statcast [PAGE 11], predating universal pitch-clock enforcement; if the inter-pitch timing changes, the batter’s available decision window and the 24-foot assumption may require recalibration.

Veto condition: if seasonal weather or rule changes alter measured movement enough that distinct pitch types no longer share the same observed decision point, Game 3’s tunnel equivalence classes break down and Game 3 recommendations must be recomputed with updated f and g.

Adjudication hierarchy. When layers conflict, the physical veto takes precedence: no strategic recommendation overrides σ > 1 ft convergence to the zone center [PAGE 16-17]. The biomechanical veto overrides the batter-side of Game 3 but preserves the pitcher-side upper bound [PAGE 23]. The weather veto triggers model recalibration before any Game 2 or Game 3 output is trusted. Equilibrium strategies are therefore conditional: valid only when (i) σ is below the convergence threshold, (ii) batter response rates are near validation levels (~70%), and (iii) tunnel physics remain stationary.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-via-verifiable-rewards (RLVR) counterfactual veto scenarios with predictions.

Scenario 1: Jansen–Phillips Game 1 Nash collapse.
Verifiable facts: Nash mixed strategy swing probability for Phillips = 0.54 [PAGE 6]; OP-estimated actual swing likelihood on the prescribed outside-zone slider < 13% [PAGE 7]; equilibrium expected utility = −0.07 vs. actual pitch run value = 0.037 [PAGE 6-7].
Veto trigger: rolling 7-day swing rate at the equilibrium-recommended outside-zone location deviates more than 15 percentage points below 0.54.
Counterfactual prediction: if the batter stops chasing, the pitcher’s Nash mix becomes dominated; expected utility rises above −0.07 toward the take value of that location. The RLVR veto forces the pitcher to reduce outside-zone slider frequency below 0.37 and shift mass to the cutter at (0.19, 2.69).

Scenario 2: deGrom–Soto Game 2 exploitative deviation.
Verifiable facts: batters best-respond optimally on only 70% of validation pitches [PAGE 19]; Stackelberg equilibrium changeup down the middle yields −0.02 if Soto takes, but deGrom’s actual outside fastball yielded −0.08 because Soto swung [PAGE 19-20].
Veto trigger: observed chase rate outside the strike zone exceeds the league mean by more than 2 standard deviations over a weekly window.
Counterfactual prediction: the Stackelberg equilibrium is no longer the pitcher’s optimal strategy; rational deviation toward pitches that induce systematic swings-and-misses dominates the minimax upper bound. The RLVR veto prescribes targeting the batter’s measurable chase bias rather than the equilibrium changeup.

Scenario 3: Nola–Altuve Game 3 mixed-strategy infeasibility.
Verifiable facts: decision-point equilibrium expected utility = −0.01; Nola’s actual cutter a foot outside the zone produced −0.16 because Altuve swung [PAGE 22]; Altuve’s equilibrium required Bernoulli(0.12) swing randomization in a tunnel [PAGE 22]; across 255 pitches batters complied with pure-strategy equilibria 71% of the time [PAGE 22].
Veto trigger: tunnel-level batter pure-strategy adherence falls below 71% in a matchup sample, or observed swing/take entropy in a tunnel deviates from the equilibrium mix by more than 0.2 nats.
Counterfactual prediction: the batter cannot execute the required mixed strategy, so the decision-point equilibrium is not a feasible target for the batter side. The pitcher should treat −0.01 as an upper bound only and deviate toward pitches like the well-outside cutter that exploit observed batter misclassification, expecting realized utility to exceed the equilibrium ceiling when the batter chases.
</RLVR_COUNTERFACTUAL_VETOES>