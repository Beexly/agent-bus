---
source: "p0093.txt"
folder: "/gpu-ocr-output/pages/Tolman-1932-PurposiveBehaviorInAnimalsAndMen"
pages: 1
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3168
---

<NATIVE_REASONING>
The user wants me to analyze a source text from Tolman's 1932 "Purposive Behavior in Animals and Men," specifically page 93 (p0093.txt). They have provided the source text and want me to follow strict invariants including:

1. ZERO BETTING LINES - no spreads, totals, moneylines, odds
2. ZERO TOY EQUATIONS - no fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

Wait, this source text is about Tolman's rat maze experiments and cognitive maps, expectancies, and reward change. The user hasn't actually asked a specific question beyond providing the source and saying "DRIVE SOURCE" and "PAGES: 1". They likely want an analysis/framework applied to this text using the GSE + GSI Frontier Reasoning Foundry framework.

I need to:
- Analyze the text about Elliott's experiment (1928) on change of reward in maze performance of rats
- Tolman's interpretation: disruption/searching behavior as empirical evidence for immanent expectation of previously obtained reward (bran mash)
- Two empirical features: (a) range of goal object qualities indistinguishable from bran mash cause no disruption; (b) disruption disappears with enough experience (docility with respect to new goal-object)
- Mention Tinklepaugh with monkeys

I need to apply the strict invariants. Even though this isn't sports betting, I must avoid betting lines entirely. I need formal LaTeX equations with units and breakdown. This is psychology/animal behavior, so I'll need to formalize concepts like expectancy, disruption, behavioral variance, etc., in information-theoretic or probabilistic terms.

Structure:
<THINK_TRACE> - Deep multi-hop derivation & gray-zone audit (>=400 words)
- Analyze Tolman's argument: expectancy as intervening variable
- Elliott's experiment details: bran mash -> sunflower seed, day 10 change, disruption increases over 6 days
- The "searching" as evidence of immanent expectation
- Two predictions: (a) similar foods no disruption, (b) extinction/adaptation to new goal
- Formalize expectancy as probability distribution over goal states
- Gray zones: OCR errors ("evıdences", "ayg.. 1..La", "dısruption"), Tolman's italics ours, inferred unobserved discoveries ("undoubtedly be discovered"), anthropomorphism risks
- Multi-hop: Tolman -> Elliott -> Tinklepaugh -> cognitive maps -> modern RL prediction error

<SOURCE_OPERATORS_AND_EQUATIONS> - Formal LaTeX, units, page citations, breakdown
- Cite [PAGE 93] or [PAGE N] - since it's p0093.txt and page number 74 in the book? Actually the text says "74" at top, then "The Rat in the Maze". The file is p0093. I should cite [PAGE 93] for the OCR page, or [PAGE 74] for the book page. The invariant says "When source pages are provided, cite exact [PAGE N] markers". I'll cite [PAGE 93] for the source file/page.
- Equations:
  - Expectancy E_t = P(G = g_old | H_t) where H_t is history
  - Disruption D_t = 1 - performance or entropy of trajectory
  - Behavioral variance σ²_behavior increases when goal changes
  - Kullback-Leibler divergence between old and new goal distributions D_KL(P_old || P_new)
  - Docility/drift: D_t -> 0 as t -> ∞ under new reward
  - Breakdown regime: when |g_new - g_old| < discrimination threshold δ, D ≈ 0; when distinguishable but novel, D > 0 transiently

<RETROCAUSAL_GENEALOGY> - Historical/scientific lineage & multi-week traps
- Tolman 1932, Purposive Behavior
- Edward C. Tolman, purposivism vs Watsonian behaviorism
- Elliott 1928 Univ Calif Publ Psychol 4:23
- Tinklepaugh monkeys (1928? 1932?)
- Latent learning, cognitive maps
- Connection to Rescorla-Wagner, TD learning, prediction error δ = r + γV(s') - V(s)
- Multi-week traps: long-term expectancy persistence, slow extinction, spontaneous recovery

<RECURSIVE_THEORY_OF_MIND> - Crisis habit regression vs counter-trap vs clock
- Crisis habit regression: under reward change, rat regresses to searching (old habit) rather than immediately adopting new policy
- Counter-trap: experimenter assumes disruption is just "temporary disturbance" but Tolman says it's systematic evidence of expectancy
- Clock: disruption increases over six days rather than decreases, violating simple habituation clock; timescale mismatch

<CROSS_LAYER_VETO_ADJUDICATION> - Physical/biomechanical/weather veto proof
- Physical: maze running biomechanics unaffected by reward type (same motor capacity)
- Biomechanical: eating vs searching time allocation, not motor failure
- Weather: N/A (lab setting), but could mention environmental stability controls
- Veto: disruption cannot be explained by fatigue, injury, or sensory deprivation because same maze, same rat, only goal object changed

<RLVR_COUNTERFACTUAL_VETOES> - 3 verifiable RLVR veto scenarios + predictions
- RLVR = Reinforcement Learning Verifiable Rewards? Or some framework. I'll interpret as verifiable counterfactual vetoes.
- Scenario 1: Switch to indistinguishable goal (bran mash mimic). Prediction: no disruption, D(t) ≈ baseline.
- Scenario 2: Switch to highly distinct, less desirable goal. Prediction: initial disruption D(0) > 0, asymptotic D(∞) → 0 but performance asymptote lower than old.
- Scenario 3: Switch back to original goal after extinction to new goal. Prediction: spontaneous recovery / faster reacquisition (savings), showing latent expectancy persisted.

Word count: Need >= 1,000 words across sections. THINK_TRACE alone >= 400 words. I'll make sure total is well over 1,000.

No betting lines. No toy equations like Force/Fatigue. Must use formal LaTeX with SI/information/probability units. Assumptions and exact singularity/breakdown regimes.

Verbatim quotes from source: I should quote exact text from the provided source.

Let me draft carefully.

Source text quotes:
- "The change in performance appears to be more than a mere temporary disturbance, since it increases rather than decreases during the course of six days"
- "On the day of the change of reward, the tenth day, the animals did not eat steadily while in the food box but divided their time between eating and random searching's"
- "such 'searching,' i.e., disruption, is to be taken as the empirical evidence for, and definition of, an immanent expectation of the previously obtained bran mash"
- "(a) that there was a definite range of goal object qualities, i.e., those of bran mash, or of foods so closely similar to such mash that the rat could not distinguish them from the latter, which would lead to no such disruption as long as they were found at the exit box"
- "(b) that, even when the new goal was at first distinguishable and did at first cause disruption, such a disruption would after enough experiences disappear"
- "The rats would never, perhaps, run as well for the new goal, if it were less desirable, as they did for the old, but the disruption in their behavior, qua disruption, would disappear"

Also reference page 44, 45, 56 of Elliott's experiment mentioned in text: "(see above, PP 44, 45, 56)".

Now let's write the response. I need to make sure I don't mention betting. The topic is animal cognition, so no issue.

I'll write in the required XML tags exactly.

Word count planning:
- THINK_TRACE: ~500 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~250 words
- RETROCAUSAL_GENEALOGY: ~200 words
- RECURSIVE_THEORY_OF_MIND: ~150 words
- CROSS_LAYER_VETO_ADJUDICATION: ~150 words
- RLVR_COUNTERFACTUAL_VETOES: ~150 words
Total ~1400 words. Good.

Need formal LaTeX. Use \( ... \) or \[ ... \]. Mention units: bits, seconds, probability (dimensionless), dimensionless divergence.

Breakdown regimes:
- Discrimination threshold δ_g: if ||g_new - g_old|| < δ_g then disruption D ≈ 0.
- Novelty regime: if distinguishable, D(t=0) > 0, decays with experience.
- Asymptotic performance ceiling: if g_new less desirable, max performance < old asymptote.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The source passage is Tolman (1932), p. 74 of *Purposive Behavior in Animals and Men*, OCR page p0093, within the chapter “The Rat in the Maze.” Tolman analyzes Elliott’s (1928) experiment in which rats, after practically learning a maze for bran mash, had the goal switched to sunflower seed on day ten. The core empirical observation is a “disrupted, searching sort of behavior” on trials immediately after the reward change. Elliott is quoted as saying the disruption “increases rather than decreases during the course of six days,” and that on the day of change the animals “did not eat steadily while in the food box but divided their time between eating and random searching’s.” Tolman’s inferential move is to treat this searching/disruption not as noise but as the operational definition of an immanent expectancy for the previously obtained bran mash.

Multi-hop derivation proceeds as follows. First, the rat’s pre-change behavior is governed by a learned policy π_old that maps maze states to trajectories terminating at the bran-mash goal box. The goal object g_old enters the value function V_old(s) as a terminal reinforcer. When g_old is replaced by g_new (sunflower seed), the animal’s internal model continues to generate predictions conditioned on g_old. The mismatch between expected and obtained goal properties generates a prediction-error signal. Behaviorally, this error is expressed as increased trajectory variance: the rat leaves the food box, engages in random searching, and fails to consume steadily. Tolman treats this as evidence that the rat “expected” bran mash, i.e., that the animal’s behavior is guided by a cognitive representation of the goal rather than by a simple stimulus-response habit.

Two counterfactual predictions are advanced as empirical features that “undoubtedly” would be discovered. Feature (a): if the new goal object falls within a discrimination-indistinguishable range of bran mash (||g_new − g_old|| < δ_disc), no disruption should occur. Feature (b): if g_new is initially distinguishable, disruption should appear transiently and then vanish with sufficient experience (docility to the new goal-object), although asymptotic running speed may remain lower if the new reward is less desirable. This anticipates modern distinction between performance asymptote (motivational value) and disruption transients (expectancy violation).

Gray-zone audit: The OCR text contains noise (“evıdences,” “ayg.. 1..La,” “dısruption,” “searching’s”), so verbatim quotation must be anchored to the visible tokens. Tolman explicitly marks interpretive emphasis with “(Italics ours)” regarding Elliott’s citation. The phrase “undoubtedly be discovered” refers to unperformed follow-up experiments within the 1932 text; thus claims (a) and (b) are theoretical commitments, not reported results in this passage. A further gray zone is the causal status of “immanent expectation”: Tolman infers an internal representational state from behavioral disruption, which risks affirming the consequent unless the two predicted boundary conditions (discrimination threshold and extinction) are independently verified. The passage also segues into Tinklepaugh’s monkey work, suggesting the disruption phenomenon was intended to generalize beyond rats.

The framework maps cleanly onto a prediction-error formalism: the disruption D(t) is a measurable readout of the divergence between the animal’s expected goal distribution and the experienced goal distribution. The six-day increase in disruption contradicts a simple fatigue or temporary-disturbance account, which would predict monotonic decay. Instead, the non-monotonic or sustained elevation implies an active expectancy maintenance process that only extinguishes after repeated exposure to the violated contingency.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Source: Tolman (1932), *Purposive Behavior in Animals and Men*, book p. 74, OCR file p0093.txt [PAGE 93]. Verbatim basis: “The change in performance appears to be more than a mere temporary disturbance, since it increases rather than decreases during the course of six days” [PAGE 93]; “On the day of the change of reward, the tenth day, the animals did not eat steadily while in the food box but divided their time between eating and random searching’s” [PAGE 93]; “such ‘searching,’ i.e., disruption, is to be taken as the empirical evidence for, and definition of, an immanent expectation of the previously obtained bran mash” [PAGE 93]; “(a) that there was a definite range of goal object qualities… which would lead to no such disruption… (b) that, even when the new goal was at first distinguishable and did at first cause disruption, such a disruption would after enough experiences disappear” [PAGE 93].

Formalization. Let g_old = bran mash and g_new = sunflower seed be goal objects in property space 𝒢. Let the rat’s expectancy at trial t be a probability distribution over goal states: E_t(g) = P(G = g | H_t), where H_t is the history of maze-run outcomes and G ∈ 𝒢. Under pre-change asymptote, E_t → δ(g − g_old) (a Dirac mass on the bran-mash goal). At t₀ = day 10, the experienced goal switches to g_new.

Disruption operator D(t) is defined as the expected trajectory deviation from the previously optimal path, measured in units of path-length variance (m²) or, equivalently, as the Shannon entropy of the time allocation between eating and searching within the goal box:  
\[D(t) = H[\pi_{\text{box}}(t)] = -\sum_{a \in \{\text{eat},\text{search}\}} p_a(t) \log_2 p_a(t) \quad [\text{bits}].\]  
Elevated D(t) relative to baseline D_base reflects the immanent expectancy violation.

Expectancy–reward mismatch is quantified by the Kullback–Leibler divergence between the pre-change expectancy and the post-change goal distribution:  
\[\mathcal{D}_{\text{KL}}(E_{t_0^-} \| P_{g_{\text{new}}}) = \sum_{g \in \mathcal{G}} E_{t_0^-}(g) \log_2 \frac{E_{t_0^-}(g)}{P(g = g_{\text{new}})} \quad [\text{bits}].\]  
When g_new is indistinguishable from g_old within the rat’s sensory discrimination threshold δ_disc, \(\|g_{\text{new}} - g_{\text{old}}\| < \delta_{\text{disc}}\), then \(\mathcal{D}_{\text{KL}} \approx 0\) and \(D(t) \approx D_{\text{base}}\) for all t. This is feature (a).

When g_new is distinguishable, \(\|g_{\text{new}} - g_{\text{old}}\| \ge \delta_{\text{disc}}\), then \(\mathcal{D}_{\text{KL}} > 0\) and \(D(t_0) > D_{\text{base}}\). With repeated experience n under the new contingency, expectancy updates via a Rescorla–Wagner/TD-style rule:  
\[E_{n+1}(g) = E_n(g) + \alpha \big[ \mathbb{I}(g = g_{\text{new}}) - E_n(g) \big],\]  
with learning rate α ∈ (0,1). Disruption decays as \(D(n) \to D_{\text{base}}\) as n → ∞ (feature b), but the performance asymptote may satisfy \(v_{\infty}(g_{\text{new}}) < v_{\infty}(g_{\text{old}})\) if sunflower seed is less desirable.

Breakdown/singularity regimes: (i) If α = 0 (no expectancy updating), D(n) remains elevated indefinitely—no docility. (ii) If δ_disc → 0 (perfect discrimination), any goal change yields maximal initial disruption. (iii) If the new goal is aversive rather than merely less desirable, the “searching” may become avoidance rather than approach, violating Tolman’s assumed monotonic value gradient. Units: probability is dimensionless; time in seconds (s); path variance in square meters (m²); information in bits.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage traces from Tolman’s purposive behaviorism (1932) back to Elliott’s 1928 University of California Publications in Psychology study (Vol. 4, p. 23) on change of reward in maze performance, cited at [PAGE 93] as “see above, PP 44, 45, 56.” Tolman positions his interpretation against Watsonian S-R behaviorism by treating disruption as evidence of a cognitive expectancy—an “immanent” goal representation—rather than a mere reflexive habit strength. The passage explicitly bridges to Tinklepaugh’s monkey experiments, noting the disruption phenomenon was “earlier shown by Tinklepaugh with overpowering con-” [PAGE 93], foreshadowing cross-species expectancy violation paradigms.

In the modern retrospective, this anticipates the Rescorla–Wagner model (1972) and temporal-difference learning, where a change in reward contingency generates a prediction error δ_t = r_t + γV(s_{t+1}) − V(s_t) [dimensionless] that drives updating of the state-value function. Tolman’s “searching” is the behavioral manifestation of a non-zero δ_t: the animal behaves as if the expected outcome (bran mash) should still obtain, producing exploratory variance until the value function converges to the new reward. The multi-week trap is embedded in Elliott’s observation that disruption “increases rather than decreases during the course of six days”: a naive short-run clock would predict immediate habituation, but the observed six-day escalation indicates that expectancy persistence operates on a timescale longer than a single session’s extinction. This creates a trap for experiments that measure only immediate post-shift performance; they would misattribute sustained disruption to stress or fatigue rather than to a slowly decaying internal model of the old goal.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: when the reward contingency shifts, the rat does not instantaneously switch policies. Instead, it regresses to the previously reinforced search pattern—leaving the food box, dividing time between eating and random searching—because the immanent expectancy for bran mash still governs action selection at t₀. This is a habit regression under crisis (reward withdrawal/substitution), not a motor failure.

Counter-trap: Elliott’s own framing risks treating the disruption as “a mere temporary disturbance,” which would imply rapid decay. Tolman’s counter-trap is to assert the opposite temporal signature: disruption increases over six days, violating the temporary-disturbance null hypothesis and forcing the inference of an active expectancy state. The trap for the experimenter is to assume that because behavior eventually recovers, the internal representation was never present; Tolman argues recovery (docility) is compatible with, and indeed evidence for, prior expectancy.

Clock: The six-day timescale sets an extinction clock τ_ext ≈ O(days), distinct from the within-session eating/searching clock τ_box ≈ O(seconds–minutes). If disruption were purely a within-session satiety or novelty effect, it should dissipate within the food box on day ten. Its multi-day course implies a trial-to-trial memory trace of the old goal that outlasts individual consummatory episodes. The recursive theory of mind thus attributes to the rat a second-order representation: “I expected bran mash, and its absence is surprising,” which is recursively updated only after repeated disconfirmation.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The maze apparatus, runway dimensions, and start-box conditions are identical before and after the goal switch [PAGE 93]. Therefore the disruption cannot be vetoed by physical obstruction, altered lighting, or changes in maze geometry. Biomechanical layer: The rats retain the capacity to run the maze and to eat; Elliott notes they “divided their time between eating and random searching,” indicating preserved locomotor and consummatory motor programs. A veto based on fatigue, injury, or sensory deprivation is rejected because the same animals ran well pre-change and only the goal object’s identity changed. Weather layer: Not applicable—the experiment is conducted in a controlled laboratory setting with no environmental weather variable; [PAGE 93] reports no temperature, humidity, or barometric confounds. Adjudication: The only manipulated variable across the phase boundary is goal-object quality g, so the disruption is causally localized to the expectancy–outcome mismatch layer, not to biomechanical degradation or exogenous physical interference.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios (RLVR = verifiable reward-shift prediction checks) with predictions:

Veto Scenario 1 — Indistinguishable goal substitution. Replace bran mash with a food physically within the rat’s discrimination threshold (||g_new − g_old|| < δ_disc), e.g., a bran-mash texture/odor mimic placed at the exit box. Prediction: D(t) ≈ D_base for all t; no increase in eating/searching entropy; no significant deviation from the pre-change path variance. This vetoes any account that attributes disruption to the mere act of reward change itself rather than to detectable goal-property mismatch.

Veto Scenario 2 — Distinguishable but equally desirable goal. Switch to a novel goal g_new that is discriminable yet matched for motivational value (v_new = v_old). Prediction per Tolman’s framework: initial disruption D(t_0) > D_base with \(\mathcal{D}_{\text{KL}} > 0\), but asymptotic running speed equals the old asymptote, and D(n) → D_base with experience. A finding of permanent disruption despite matched value would veto the expectancy-mismatch model and suggest a non-expectancy factor (e.g., neophobia) dominates.

Veto Scenario 3 — Reintroduction of the original goal after extinction. After the rat has become docile to sunflower seed (D(n) ≈ D_base), switch the goal back to bran mash. Prediction: latent expectancy for bran mash produces either immediate high performance (savings) or a smaller, shorter disruption than the original bran-mash→sunflower-seed shift, because E(g_old) was never fully erased, only suppressed. If reintroduction produces a full-magnitude disruption equal to the first shift, the original expectancy-extinction account is falsified, implying the earlier bran-mash representation was fully overwritten rather than retained.
</RLVR_COUNTERFACTUAL_VETOES>