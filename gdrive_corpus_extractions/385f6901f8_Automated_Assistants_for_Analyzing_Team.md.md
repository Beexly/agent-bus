---
source: "Automated_Assistants_for_Analyzing_Team.md"
folder: "/GSE-Research/sports-research-papers/md/randoms"
pages: 51
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3696
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on a provided source document (a 53-page PDF text about ISAAC, an automated team analyst). They have strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive response that:
- Does NOT mention any betting terminology.
- Uses formal LaTeX equations where appropriate, citing page numbers from the source text.
- Covers all XML sections with sufficient word count.
- The source is about ISAAC (Automated Assistants for Analyzing Team Behaviors) by Nair, Tambe, Marsella, Raines.

Let me plan the content:

**THINK_TRACE (>=400 words):**
Deep multi-hop derivation and gray-zone audit.
- Discuss ISAAC's three models: individual agent model (C5.0 decision trees), multiple agent model (PFA/finite automata), global team model (decision trees + NL generation).
- Derivation: bottom-up data traces -> feature selection -> rule extraction -> perturbation analysis -> near misses -> Chi-Square comparison.
- Gray zones: correlation vs causation (p.7: "by design, ISAAC’s analysis and advice relies on strong correlational patterns"), bottom-up vs top-down (p.3), class imbalance and cost-sensitive C5.0 (p.14-15: 3:1 misclassification cost ratio), window size tradeoffs (p.20-21), bounded structural generalization (p.19-20), Chi-Square null hypothesis with variance-based underlying distribution (p.21-22), natural language summary template matching and "surprise" when outcome mismatch (p.30-31).
- Multi-hop: How perturbation of one condition in individual model leads to explicit advice (p.12-13), how near misses in multiple agent model identify last-step attribute changes (p.23-24), how global team model matches rules and generates NL summary (p.28-30).
- Audit: limitations: small data traces, non-team-specific global model due to data scarcity (p.27), error rates 13% train / 28% test (p.37-38), reliance on human-defined critical events and features (p.10), inability to handle causal absence (p.7).

**SOURCE_OPERATORS_AND_EQUATIONS:**
Formal LaTeX, units, page citations.
- Individual Agent Model: Rule R = T1 ∧ T2 ∧ ... ∧ TN (p.12). Perturbation: invert exactly one condition -> N perturbed rules. Subset count = 2^N - 1 but restricted to N single-condition inversions (p.12).
- C5.0 cost-sensitive: cost(success misclassification) = 3 × cost(failure misclassification) default (p.14-15).
- PFA definition: G = <S, A, L, a0, g> (p.19-20). States ai with symbol ai^s, start state a0 with symbol ∅, goal symbol g, links li with frequency li^Σ (p.19-20).
- Window size: sequence σ = s1...sig, window k: si-k+1...sig (p.20).
- Bounded structural generalization: no repeating subsequence of length m ≤ k2 (p.20).
- Pattern frequency: frequency of link from start state to next state on path (p.20).
- Chi-Square: χ² = Σ (Oi - Ei)² / Ei. Null hypothesis: observed distribution drawn from underlying distribution (higher variance as underlying). Threshold χ² for 95% certainty (p.21-22). Example: AT Humboldt97 vs 98 χ² = 81.34 vs threshold 15.51 (p.26).
- Global team model: seven classes (big win, moderate win, close win, tie, close loss, moderate loss, big loss) (p.29-30).
- Evaluation: 70% predictive accuracy wins/losses RoboCup-99 (p.34-35). 87% train correct (70% exact, 17% close), 72% test correct (39% exact, 33% close), error rates 13% and 28% (p.37-38).
- NL generation: Reiter architecture (content determination, sentence planning, surface generation) (p.28).
- Units: meters per time step for ball velocity (p.15), meters for distance (p.14), degrees for angles (p.14).

Need exact page markers [PAGE N]. The text has page numbers embedded like "ISAAC-final.tex; 13/10/2002; 4:03; p.14". I'll cite those.

**RETROCAUSAL_GENEALOGY:**
Historical/scientific lineage & multi-week traps.
- Lineage: Debrief [15] (individual agent explanation), ROCCO [3] and MIKE [39] (real-time commentary), Advanced Scout [5] (NBA data mining), PROBES [18] (top-down instructor assistant), SEEK [23] (knowledge base refinement), C4.5/C5.0 decision trees [24, 40], PFA learning algorithms APFA [28], Crutchfield [9], Bayesian state merging [31], Augmented Markov Model [12], Reiter NLG [27].
- Multi-week traps: In RoboCup preparation, teams iteratively tune agents over weeks; ISAAC's correlational advice may trap developers into optimizing surface features (e.g., shot aim) while missing deeper causal architecture (p.15-16 perturbation analysis warns about minimal effort changes). The "near miss" concept can cause overfitting to last-step attributes when the real failure is earlier in the sequence (p.23-24). Cost-sensitive tuning over multiple tournaments can drift from 3:1 to extreme values, making rules overly specific or too general (p.14-15).

**RECURSIVE_THEORY_OF_MIND:**
Crisis habit regression vs counter-trap vs clock.
- Theory of mind: How ISAAC models the "mind" of the team developer/analyst. Crisis habit regression: when a team faces repeated failure, developers revert to hand-coded heuristics; ISAAC's bottom-up approach resists this but can itself regress if data traces are sparse (p.7).
- Counter-trap: The system presents "implicit advice" via perturbation; a developer might game the system by selecting features that produce desired rules rather than discovering truth (p.10 feature selection bias).
- Clock: Real-time vs post-hoc. ISAAC is post-hoc, off-line (abstract p.1). During RoboCup-99, analysis projected continuously (p.38-39). The "clock" of tournament play means summaries must be generated minutes after games (p.38). Recursive ToM: ISAAC infers developer intent from feature choice; developer interprets ISAAC's rules; ISAAC's NL summary must match developer's mental model of the game (p.28-30).

**CROSS_LAYER_VETO_ADJUDICATION:**
Physical/biomechanical/weather veto proof.
- Since this is simulated agents (RoboCup soccer server, evacuation simulation), there is no physical weather or biomechanics in the strict sense, but I can discuss the simulation layer constraints: soccer server noise (p.4: complex, dynamic, noisy environment), heterogeneous agent capabilities (p.39-40 evacuation: helicopter pilots vs web-querying agent), message bandwidth limits (p.42-43 sensor domain), frequency counts vs state explosion (p.41 Figure 20), window size and structural generalization tradeoffs (p.20-21).
- Veto proof: The finite automaton learning vetoes patterns that violate frequency distribution accuracy; bounded structural generalization vetoes over-generalization; cost-sensitive C5.0 vetoes majority-class bias; Chi-Square vetoes false equivalence between teams (p.21-22).
- I should be careful not to invent physical/biomechanical details not in source. I can discuss "weather" analogically as environmental noise in the soccer server, but must not claim real weather. Better to discuss simulation-level vetoes: noisy environment (p.4), limited window size, bounded structural generalization, frequency accuracy constraint.

**RLVR_COUNTERFACTUAL_VETOES:**
3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some counterfactual framework. I'll define 3 scenarios where ISAAC's analysis would be vetoed by counterfactual checks:
  1. Scenario: Individual agent model recommends inverting shot-aim condition to improve scoring. Counterfactual: If goalkeeper positioning is unchanged and defender distance > 13.6m, does inverting aim actually increase goals? Veto if perturbed rule covers few success cases (p.15-16 example: velocity perturbation only 2 successes vs 7 failures). Prediction: Andhill97's aim improvement yields +X goals but velocity change yields negligible change.
  2. Scenario: Multiple agent model compares two teams via Chi-Square and suggests emulation. Counterfactual: Same team, different environment (opponent strength). Veto if χ² difference is due to opponent distribution not team strategy (p.26: environments must be same). Prediction: AT Humboldt98's improvement may be due to rule changes, not just opponent quality.
  3. Scenario: Global team model NL summary matches rule with 28% test error. Counterfactual: Unseen RoboCup-99 game with novel feature combination. Veto if no rule matches closely and ISAAC flags "surprise" (p.30-31, p.37-38). Prediction: Error rate remains >25% on novel tactical formations.

Need to ensure >=1000 words total. I'll write substantial content in each section.

Formatting: Use exact XML tags. No betting terms. Use LaTeX. Cite [PAGE N].

Let me draft carefully, checking word counts mentally.

THINK_TRACE: I'll aim for ~500+ words.
SOURCE_OPERATORS_AND_EQUATIONS: ~300-400 words with equations.
RETROCAUSAL_GENEALOGY: ~200-300 words.
RECURSIVE_THEORY_OF_MIND: ~200-300 words.
CROSS_LAYER_VETO_ADJUDICATION: ~200-300 words.
RLVR_COUNTERFACTUAL_VETOES: ~200-300 words.

Total should exceed 1000 words easily.

Let's write.

Important: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I should include verbatim quotes where useful, with [PAGE N].

Let's ensure I don't use "odds", "spread", "moneyline", "total", "bet", etc. I'll avoid all gambling language.

Now, let's compose the final output.
</NATIVE_REASONING>

<THINK_TRACE>
The ISAAC architecture proceeds through a three-layered epistemic pipeline that must be traced hop-by-hop to avoid treating correlational output as causal prescription. Hop 1: raw external behavior traces are ingested without access to agent source code, satisfying the architecture-independence constraint [PAGE 3]. Hop 2: at the individual-agent granularity, C5.0 induces a decision tree from positive and negative examples of critical events (e.g., shots on goal). Each root-to-leaf path becomes a rule R = T1 ∧ T2 ∧ ... ∧ TN, where N conditions partition success from failure [PAGE 12]. Because RoboCup shot data are heavily imbalanced (far more failures than successes), plain C4.5 overfits the majority class; ISAAC instead assigns a default misclassification cost ratio of 3:1 favoring success cases [PAGE 14–15]. This cost weighting is a gray-zone control: raising it makes the model defensively exhaustive (covering nearly all successes plus many misclassified failures), lowering it makes it selectively conservative [PAGE 15]. Hop 3: perturbation analysis inverts exactly one condition Ti → ¬Ti, yielding N candidate perturbed rules rather than the full 2^N − 1 combinatorial space, because multi-condition inversions explode the search and violate the minimal-effort improvement principle [PAGE 12]. The perturbed cases are mined from the same historical logs, guaranteeing that recommended changes remain inside the agent’s demonstrated skill set [PAGE 12–13]. The Andhill97 example shows the trap: inverting ball-velocity threshold produced only 2 successes against 7 failures, whereas inverting shot-aim produced 51 successes against 96 failures, indicating that aim, not velocity, was the leverage point [PAGE 15–16]. Hop 4: the multiple-agent model learns a reversed prefix-tree probabilistic finite automaton G = ⟨S, A, L, a0, g⟩ over symbol sequences terminating in a goal symbol g, with window size k bounding how many pre-goal kicks are retained [PAGE 19–20]. Bounded structural generalization eliminates repeated subsequences of length m ≤ k2 to prevent state explosion, while the frequency-distribution accuracy constraint forbids inventing patterns absent from the data [PAGE 19–20]. Hop 5: team comparison uses a Chi-Square goodness-of-fit test where the higher-variance distribution is treated as the underlying null and the lower-variance as observed; rejection of the null at the 95% certainty threshold certifies strategic dissimilarity [PAGE 21–22]. The AT Humboldt97 vs. AT Humboldt98 comparison (χ² = 81.34 vs. threshold 15.51) reveals a shift from opportunistic reliance on opponent error to controlled ball progression [PAGE 26]. Gray-zone audit: ISAAC explicitly disclaims causality, resting on correlational patterns [PAGE 7]; the global team model cannot be team-specific because a single engagement yields only one data point, forcing reliance on cross-team statistics [PAGE 27]; test-set error rose from 13% (training) to 28% (unseen RoboCup-99 games), signaling distribution shift or feature poverty [PAGE 37–38]. Human feature selection and critical-event definition introduce analyst bias at the input layer [PAGE 10], and the natural-language summary layer inherits any rule-matching error, emitting a “surprise” template when no rule fits closely [PAGE 30–31].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
ISAAC’s formal operators and units, with page citations:

Individual Agent Model (C5.0 decision trees)
- Rule form: R = T1 ∧ T2 ∧ ... ∧ TN, N = number of conditions; non-empty test subsets number 2^N − 1, but ISAAC restricts perturbation to exactly one inverted condition, yielding precisely N perturbed rules [PAGE 12].
- Perturbation operator: PerturbRule(condn_to_perturb, original_rule) returns rule with test Ti inverted to ¬Ti, guaranteeing zero overlap between original and perturbed case sets [PAGE 12].
- Cost-sensitive C5.0: default cost(misclassify success) = 3 × cost(misclassify failure), adjustable by user to tune defensiveness vs. aggressiveness [PAGE 14–15].
- RoboCup feature units (Appendix A): Ball Velocity in meters per time step [PAGE 15]; Distance to goal and Distance of Closest Defender in meters [PAGE 14]; Angle of Closest Defender wrt Goal, Angle from Center of Field, Angle of Defender from shot in degrees [PAGE 14]. Example rule: Distance of Closest Defender > 13.6 m ∧ Angle ≤ 8.981711° ∧ Angle from Center of Field > 40.77474° → Successful Defense [PAGE 14].

Multiple Agent Model (probabilistic finite automaton)
- Automaton: G = ⟨S, A, L, a0, g⟩, where S is symbol set, A states with symbol ai^s ∈ S, a0 start state with a0^s = ∅, g goal symbol, L directed links [PAGE 19–20].
- Link frequency: li^Σ = number of times link i traversed while adding sequences; pattern probability derived from frequencies of links emanating from start state [PAGE 20].
- Window size k: for symbol string σ = s1 s2 ... sig ending in goal g, retained sequence is si−k+1 ... sig [PAGE 20].
- Bounded structural generalization k2: forbids any adjacent repeated subsequence of length m ≤ k2 within a pattern [PAGE 20].
- Chi-Square comparison: χ² = Σ_i (Oi − Ei)² / Ei, where Oi = observed frequencies from lower-variance team, Ei = expected under higher-variance distribution treated as null; null rejected if χ² exceeds 95% certainty threshold [PAGE 21–22]. Empirical threshold example: χ² = 15.51 for 95% limit [PAGE 26]; observed χ² = 81.34 (AT Humboldt97 vs. 98) and χ² = 150.0 vs. threshold 21.3 in evacuation domain [PAGE 26, 42].

Global Team Model
- Seven outcome classes: big win (≥5 goal margin), moderate win (2–4), close win (1), tie, close loss (1), moderate loss (2–4), big loss (≥5) [PAGE 29–30].
- Matching heuristic: if multiple rules satisfy an engagement, select rule covering most training examples; if outcome mismatch, select closest-outcome rule and flag surprise in template [PAGE 30].
- Natural language generation follows Reiter’s architecture: content determination, sentence planning (rule conditions ordered by decision-tree depth), surface generation via templates [PAGE 28].

Evaluation metrics
- Predictive accuracy for RoboCup-99 win/loss: 70% [PAGE 34–35].
- Classification error: training 13% (70% exact, 17% close match); test set 28% (39% exact, 33% close match) [PAGE 37–38].
- Survey: 75% of 20 RoboCup-99 participants rated automated summaries “very good” [PAGE 37, Figure 17].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
ISAAC descends from a lineage of agent-explanation and team-analysis systems that progressively shifted from single-agent introspection to multi-agent, bottom-up correlation mining. Direct antecedents include Debrief, which lets individual agents explain actions from internal state but lacks team-level analysis [PAGE 2, PAGES 46–47], and ROCCO / MIKE, RoboCup commentary systems that generate real-time reports without ISAAC’s multi-granular models or perturbation capability [PAGE 44–45]. The decision-tree core inherits Quinlan’s C4.5 and the cost-sensitive extensions of Ting, repurposed here from prediction to explanation of observed behavior [PAGE 24, PAGES 14–15]. The probabilistic finite automaton layer draws on APFA, Crutchfield, Bayesian state merging, and Augmented Markov Model literature, but ISAAC deliberately retreats from arbitrary automaton learning to a reversed prefix-tree representation that admits explicit control over window size, bounded structural generalization, and frequency-distribution accuracy [PAGE 18–20]. The global team model’s natural-language generation module is grounded in Reiter’s consensus NLG architecture [PAGE 28].

Multi-week traps emerge when development teams iterate on agent code across tournament cycles. First, because ISAAC is correlational, a team may overfit to surface features that co-vary with success in one season but vanish when opponents adapt—a gray zone the paper acknowledges by noting that patterns “may uncover interactions ... that come as a surprise” without establishing cause [PAGE 7]. Second, the cost-sensitive ratio in C5.0 can be tuned aggressively across weeks, drifting from the default 3:1 toward extremes that either bloat rule coverage with misclassified failures or prune success rules into irrelevance [PAGE 14–15]. Third, the multiple-agent model’s near-miss perturbation isolates the last step of a successful sequence; over successive weeks, developers may regress to optimizing only terminal attributes (e.g., shot angle) while neglecting earlier interaction structure that the finite automaton treats as equally significant [PAGE 23–24]. Fourth, the evacuation-domain experiment shows that changing bounded structural generalization from 0 to 2 collapses automaton state count without further reduction, indicating a hidden plateau where additional generalization yields no compression—teams iterating weekly might mistake this plateau for convergence [PAGE 41, Figure 20]. These traps are retro-causal in the sense that later performance is attributed to earlier patterns discovered by ISAAC, even when the true driver was opponent composition, environmental noise in the soccer server, or unmeasured architectural changes [PAGE 4, PAGES 39–43].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
ISAAC embeds a recursive theory of mind across three agents: the human developer, the synthetic team, and the analyst itself. At level zero, the developer supplies choiceOfCriticalEvents and features, thereby encoding a tacit model of what constitutes team success [PAGE 10]. ISAAC infers the developer’s goals from feature selection, but this inference is one-shot and brittle: if the developer omits a causally relevant feature, ISAAC cannot recover it because its learning is bottom-up and knowledge-lean [PAGE 3, PAGES 10–11]. At level one, ISAAC models the synthetic team via rules and automata; at level two, it models the developer interpreting those rules. Crisis habit regression occurs when a team under sustained failure reverts to hand-crafted heuristics, distrusting ISAAC’s correlational advice. ISAAC resists this by restricting perturbations to conditions already present in learned rules, guaranteeing that recommended changes are within the agent’s demonstrated skill set [PAGE 12]. However, the counter-trap is that a developer can select features strategically to produce rules that confirm pre-existing biases, converting ISAAC’s “what-if” engine into a rationalization engine rather than a discovery engine [PAGE 10].

The clock operates at tournament granularity: ISAAC is post-hoc and off-line by design [PAGE 1], yet at RoboCup-99 it ran continuously with summaries projected minutes after each game [PAGES 38–39]. This creates a recursive deadline pressure: the NL summary must be generated fast enough to influence the next match, but the global team model requires many engagements to train, forcing reliance on cross-team data that may not reflect the current roster [PAGE 27]. Recursive theory of mind failure modes include (a) the developer assuming ISAAC’s rules are causal when they are correlational [PAGE 7], and (b) ISAAC assuming the developer’s feature choices are complete when they are domain-biased [PAGE 10]. The natural-language summary layer attempts to close the loop by linking summary sentences back to multimedia cases, allowing the developer to validate or refute the analysis [PAGES 28–30], but if the best-matching rule has low coverage or the outcome is a close match rather than exact, the summary’s explanatory authority degrades [PAGE 30].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The veto architecture operates across three layers: physical simulation, biomechanical agent limits, and environmental noise. At the physical layer, RoboCup agents operate in a “complex, dynamic, noisy environment managed by a soccer server” [PAGE 4], which vetoes any analysis assuming deterministic ball propagation; ISAAC’s individual-agent features therefore include ball velocity in meters per time step and defender distance in meters, acknowledging continuous physical uncertainty [PAGE 14–15]. At the biomechanical layer, agent capabilities are bounded by demonstrated behavior: perturbation analysis only proposes changes to conditions that already discriminate in the data, so no recommendation can demand a skill outside the agent’s historical trace [PAGE 12]. This is a hard veto against physically impossible advice. At the environmental layer, the evacuation domain introduces heterogeneous agents (helicopter pilots, route planners, web-querying agents) communicating over message sequences, where the veto is semantic: if bounded structural generalization is set to zero, the automaton state count explodes (Figure 20 shows states remaining flat beyond generalization level 2), vetoing over-generalization [PAGES 40–41]. Frequency-distribution accuracy constitutes a further veto: the learning algorithm must not create non-existent interaction patterns modulo bounded structural generalization [PAGE 19].

Weather is not modeled as an exogenous variable in the source; the relevant environmental veto is the soccer server’s noise and the absence of top-down causal models in domains where “causal models may be impoverished or missing” [PAGE 7]. Cross-layer adjudication proceeds as follows: if the Chi-Square test rejects distributional equivalence between two teams at 95% confidence [PAGES 21–22], the multiple-agent model vetoes the hypothesis that they share a strategy; if a perturbed individual rule covers an empty case set, C5.0 would not have included that condition, so the perturbation is vetoed as non-informative [PAGE 12]; if global team model test error reaches 28% on unseen games [PAGES 37–38], the NL summary layer vetoes confident explanation and substitutes a surprise template [PAGE 30]. These vetoes are computable from the source’s formal constraints and require no external betting-market or odds-based signals.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Individual-agent aim perturbation counterfactual. ISAAC’s perturbation analysis on Andhill97 recommends inverting the shot-aim condition from “greater than 6.7 m from center of goal” to “≤ 6.7 m,” because perturbed cases show 51 successes vs. 96 failures versus 0 successes in the original failure rule [PAGES 15–16]. RLVR counterfactual veto: hold defender distance and ball velocity fixed while simulating a goalkeeper who adjusts positioning based on shooter approach angle (a variable not in ISAAC’s 8-feature set [PAGE 49]). Prediction: if the goalkeeper’s lateral coverage nullifies central aim, the actual goal-conversion increase will fall below ISAAC’s mined success rate, vetoing the recommendation. Verifiable check: compare Andhill97’s post-intervention game log against the perturbed-rule success frequency; divergence >15 percentage points triggers veto.

Scenario 2 — Multiple-agent team-emulation counterfactual. ISAAC compares AT Humboldt97 and AT Humboldt98 via Chi-Square (χ² = 81.34 vs. threshold 15.51) and suggests AT Humboldt97 emulate AT Humboldt98’s ball-control patterns [PAGE 26]. RLVR counterfactual veto: run the same comparison holding opponent-team identity fixed across both seasons; if the χ² difference collapses below threshold when opponent strength is controlled, the original dissimilarity was environment-driven, not strategy-driven [PAGES 21–22]. Prediction: AT Humboldt98’s improved tournament rank (second vs. lower than 16th) is partially attributable to weaker opposition in its match pool, not solely to scoring-pattern changes; veto triggered if controlled-opponent χ² < 15.51.

Scenario 3 — Global-team summary counterfactual. ISAAC’s global model achieves 72% correct classification on unseen RoboCup-99 games, with 28% error (39% exact, 33% close match) [PAGES 37–38]. RLVR counterfactual veto: inject a novel tactical formation not represented in training logs (e.g., a 5-defender low-block not seen in prior engagements) and request a summary. If ISAAC must select a “closest-outcome” rule rather than an exact match and emits a surprise template [PAGE 30], the summary’s causal claims are vetoed as unreliable. Prediction: error rate on novel formations exceeds 40%, causing the natural-language module to default to surprise framing in a majority of cases, thereby reducing actionable advice to near zero.
</RLVR_COUNTERFACTUAL_VETOES>