---
source: "p0384.txt"
folder: "/gpu-ocr-output/pages/Tolman-1932-PurposiveBehaviorInAnimalsAndMen"
pages: 1
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5234
---

<NATIVE_REASONING>
The user wants me to analyze a source text about Tolman's 1932 work on purposive behavior in animals, specifically pages about motivation and learning involving rats in a maze with alleys. 

Let me break down the task:
1. Strict invariants: No betting lines, no toy equations, formal LaTeX equations, SI/information/probability units, assumptions, singularity/breakdown regimes, cite [PAGE N] markers and verbatim quotes when source pages provided.
2. >= 1,000-word depth across 6 XML sections:
   - THINK_TRACE (>=400 words)
   - SOURCE_OPERATORS_AND_EQUATIONS
   - RETROCAUSAL_GENEALOGY
   - RECURSIVE_THEORY_OF_MIND
   - CROSS_LAYER_VETO_ADJUDICATION
   - RLVR_COUNTERFACTUAL_VETOES

Wait, the user says "PAGES: 1" but the source text shows page 354? Actually the source text starts with "354" then "Motivation and Learning". The [PAGE N] markers - since it's a single page provided, I should cite [PAGE 1] or perhaps note the page number 354 from the source text. I'll use [PAGE 1] as the page marker since PAGES: 1 was specified, but also reference page 354 from the document.

Let me analyze the source text carefully:

The text describes an experiment by Tolman (1932) regarding motivation and learning in rats. 
- S = starting chamber, F = food chamber
- d1, d2, ds (probably d3?), d are blocks that close off right or left alley
- 18 preliminary training runs, only one alley open each time (either d or d2 closed)
- Could arrange relative frequency or recency on one side
- Then test period: both d1 and dg (probably d2?) out, but one side (left) made blind alley by block ds, other side true path
- Effects of proportions and arrangements of frequency and recency in training on later learning

First experiment by Dr Nyswander:
- Equal frequency: 9 right, 9 left runs during training
- 6 different training series arrangements of right/left runs:
  1. RRRLLL
  2. RRLRLL
  3. RRR江LL (probably OCR error, maybe RRRLLL? No wait, series 1 is RRRLLL. Series 3 might be RRRLLL? Let me look... The text shows "RRR江LL RRLR紅L R山RLW工RRLRRL RRLRRL RLRRLLR LRRLRR LR江ERR LLR江LR LRLRRR LLRLRR LLLRRR 123456 Senes z.."
  
This is OCR garbled. Let me try to parse:
1 RRRLLL
2 RRLRLL
3 RRR?LL (maybe RRRLLL? No, series 1 already)
Actually looking at typical Tolman/Nyswander experiments, these are sequences of R and L. The garbled characters:
- "RRR江LL" might be "RRRLLL"? No.
- "RRLR紅L" might be "RRLRLL"? No, series 2.
- "R山RLW工RRLRRL" - very garbled
- "RRLRRL" - series maybe 4 or 5?
- "RLRRLLR" - 7 chars?
- "LRRLRR"
- "LR江ERR" - garbled
- "LLR江LR" - garbled
- "LRLRRR"
- "LLRLRR"
- "LLLRRR"
Then "123456 Senes z.." meaning 6 series.

Anyway, the key point: For rats tested to the right, Series 1 (RRRLLL) had greatest recency (last runs were right? Wait, RRRLLL ends with LLL, so if tested to right, recency would be... actually recency of what? The text says "for the rats subsequently tested to the right, Series-arrangement 1 provided the greatest amount of preceding recency". Wait, RRRLLL ends with LLL. If they are tested to the right, why would RRRLLL give greatest recency to the right?

Hmm, let me re-read: "Part of the animals trained on each of these series-arrangements were then tested with the true path to the right and part with the true path to the left... for the rats subsequently tested to the right, Series-arrangement 1 provided the greatest amount of preceding recency"

Wait, maybe the series are listed in order of recency for the right side? Series 1 RRRLLL - if tested to right, the most recent training runs were left (LLL). That doesn't make sense for recency to right.

Unless... maybe the order is reversed? Or maybe "recency" here means recency of the *unrewarded* or *blind* side? Let me think.

Actually, in Tolman's framework, there's a distinction between frequency and recency. The experiment manipulates which side was recently run. If rats are tested with true path to the right, they need to go right. If their last training runs were to the left (LLL in RRRLLL), that's high recency of left, which would be negative transfer or proactive interference for going right. But the text says Series 1 provided greatest recency for rats tested to right. 

Wait, maybe I'm misreading the sequence direction. Or perhaps Series 1 is actually LLLRRR? No, text says "RRRLLL RRLRLL..." and then says Series 1 provided greatest recency for rats tested to right. If Series 1 is RRRLLL and they are tested to right... 

Actually, looking more carefully: maybe the text means that for rats tested to the right, the series are ordered by how much recency they have *toward the right*, but Series 1 RRRLLL would have low recency to right if read left-to-right chronologically. Unless the list is chronological right-to-left? Unlikely.

Alternatively, perhaps "recency" here refers to the recency of the *non-goal* side? No.

Let me not get too bogged down in the exact interpretation of the garbled OCR. The key theoretical point is Tolman's purpocivite behaviorism: rats form cognitive maps, expectancies, and learning is influenced by frequency (how often) and recency (how recently) of past paths. The Nyswander experiment equalized frequency (9R, 9L) and manipulated recency patterns to show effects on learning speed (criterion: 4 perfect runs out of 5).

Important theoretical concepts:
- Latent learning
- Cognitive maps
- Expectancy
- Purposive behavior (goal-directedness)
- Frequency vs recency in learning
- Maze experimentation with choice points
- Blocks creating blind alleys vs true paths

Now I need to write the response with 6 XML sections, >=1000 words total, THINK_TRACE >=400 words.

Section 1: THINK_TRACE - Deep multi-hop derivation & gray-zone audit. Need to discuss:
- The experimental apparatus: S (start), F (food), blocks d1, d2, ds, d controlling alley access
- Preliminary training: 18 runs, one alley open, manipulating frequency/recency
- Test phase: both d1 and d2 (dg?) removed, one side blind via ds, other true path
- Dependent variable: runs to criterion (4 perfect out of 5)
- Nyswander's equal-frequency design: 9 right, 9 left
- Six serial arrangements manipulating recency
- Hypothesis: recency affects learning independent of frequency
- Tolman's purposive behaviorism: rats aren't just S-R conditioned; they have expectancies and cognitive maps
- Gray zones: OCR errors in series arrangements (江, 紅, 山, W, 工), ambiguous block labels (ds vs d3, dg vs d2), unclear directionality of recency effect, small sample sizes implied by "part of the animals", criterion of 4/5 perfect runs is a binomial stopping rule
- Breakdown regimes: when recency is zero (completely randomized order), when frequency is extreme (18/0), when blocks fail (apparatus malfunction), when rats reach satiety (motivation decrement)

Section 2: SOURCE_OPERATORS_AND_EQUATIONS - Formal LaTeX, units, page citations.
- Define apparatus operator: Let B(t) ∈ {L, R, BLOCKED} be alley availability
- Training operator: T = sequence of 18 binary choices {R_i, L_i}, i=1..18
- Frequency operator: f_R = (1/18) Σ δ(choice_i = R), f_L = 1 - f_R. Here f_R = f_L = 0.5 (Nyswander groups)
- Recency operator: exponential decay weighting w_i = exp(-λ(18-i)) or simple recency rank r_i = 18-i+1
- Test outcome: N_c = number of runs to criterion C = 4 successes in last 5 trials (binomial quality control)
- Learning rate: λ_learn = -dP(error)/dn or trials-to-criterion
- Probability units: p ∈ [0,1], binomial P(X≥4|n=5,p) for criterion
- Cite [PAGE 1] / page 354
- Breakdown: λ → 0 (no memory decay), p → 0.5 (chance), n_criterion → ∞ (never stop), apparatus block failure P(block sticks) > 0

Section 3: RETROCAUSAL_GENEALOGY - Historical/scientific lineage & multi-week traps.
- Tolman 1932 "Purposive Behavior in Animals and Men"
- Nyswander 1926 PhD thesis (Univ of Calif)
- Lineage: Watsonian behaviorism → Tolman's cognitive behaviorism → latent learning (Tolman & Honzik 1930) → cognitive map → Hebb cell assemblies → modern reinforcement learning (Sutton & Barto) -> model-based vs model-free RL
- Multi-week traps: In longitudinal training, recency effects decay over inter-trial intervals; if training spans weeks, the recency manipulation from day 1 is overwritten by consolidation/sleep-dependent memory (not known in 1932), creating a confound where "recency" is actually "less retroactive interference"
- The trap: interpreting faster learning as "recency of reward" when it may be "reduced proactive interference" from the previously blind side

Section 4: RECURSIVE_THEORY_OF_MIND - Crisis habit regression vs counter-trap vs clock.
- This is a more speculative/theoretical section about theory of mind applied to the experimentalist and the rat.
- Crisis habit regression: Under stress/error crisis, rats may regress to habitual responses (most recent or most frequent). The experimenter's own hypothesis (recency matters) creates experimenter expectancy effects.
- Counter-trap: The experimenter might unconsciously handle rats differently based on which series they're in (clever Hans-type effects).
- Clock: The 18-trial training period creates a temporal cliff; the switch from training to test is a discontinuity. Rats must update expectancies when contingency reverses (one side now blind). This is a reversal learning task.
- Recursive ToM: The rat models the experimenter (where will food be?), the experimenter models the rat's model (does the rat expect right or left?), creating a fixed-point or oscillating dynamics. Crisis = when the true path switches sides; habit regression = reverting to the last training side; counter-trap = experimenter anticipating the rat's regression and altering block placement.

Section 5: CROSS_LAYER_VETO_ADJUDICATION - Physical/biomechanical/weather veto proof.
- Physical layer: Maze blocks d1, d2, ds must physically seal alleys. If blocks don't reach floor, rats can squeeze through (rats can pass through gaps > ~1.5 cm). Veto if block height < rat shoulder height (~3-4 cm) or gap > 2 cm.
- Biomechanical layer: Rat running speed ~0.5-1.0 m/s, turning radius in alley ~5-10 cm. If alleys are narrow (< body width ~5 cm), rats cannot turn; must back out. Veto if alley width < 6 cm.
- Weather/environmental: Vivarium temperature (22±2°C), humidity, light cycle. Rats are nocturnal; testing during light phase reduces motivation. Food deprivation level (typically 85-90% of free-feeding body weight) determines F (food chamber) incentive value. Veto if food deprivation < 12h or > 24h (satiety or distress).
- Since source text doesn't specify these, we note them as external vetoes that would invalidate the recency/frequency manipulation if unchecked.
- Formal veto condition: V = 1 if (gap > g_crit) ∨ (width < w_crit) ∨ (T_vivarium ∉ [20,26]°C) ∨ (deprivation ∉ [12,24] h), else V = 0. Experiment valid only if V=0.

Section 6: RLVR_COUNTERFACTUAL_VETOES - 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning from Verifiable Rewards? Or some kind of counterfactual veto. I'll interpret as verifiable counterfactual scenarios in an RL framework.
- Scenario 1: Block ds fails to seal left alley during test. Prediction: Rats choosing left find it open; error rate on left stays at chance; criterion not met; recency effect vanishes because both sides are viable. Verifiable by video tracking of alley entries.
- Scenario 2: Frequency manipulation not equalized (e.g., 12 right, 6 left due to experimenter error). Prediction: Frequency dominates recency; rats trained mostly right learn right true path faster regardless of serial order. Recency coefficient β_recency → 0 in logistic regression of errors on trial number.
- Scenario 3: Criterion changed from 4/5 to 2/2 (two consecutive perfect runs). Prediction: Trials-to-criterion decreases nonlinearly; variance increases; recency effect may appear larger because early lucky streaks end the experiment sooner, truncating the learning curve. Verifiable by simulating stopping-time bias.

Now word count: Need >= 1000 words total across sections. THINK_TRACE alone >= 400 words.

Let me draft carefully, ensuring no betting language. Use formal math. Cite [PAGE 1] and page 354 where appropriate. Use verbatim quotes from source.

Verbatim quotes to use:
- "S is the starting chamber and F the food chamber" [PAGE 1]
- "d1, d2, ds and d are blocks which in any given trial close off the right alley, or the left alley, at the pleasure of the experimenter" [PAGE 1]
- "In both sets of experiments the rats were first given 18 pre-liminary training runs, in each of which only one alley was open" [PAGE 1]
- "This 'training' period was then followed by a learning or 'test' period, in which both blocks d1 and dg were out, but in which one side, say the left, was now consistently made into a blind alley by the use of block ds, while the other side was made consistently into a true path" [PAGE 1]
- "nine runs to the right and nine to the left, so that the factor of frequency was equalized" [PAGE 1]
- "It is obvious that, for the rats subsequently tested to the right, Series-arrangement 1 provided the greatest amount of preceding recency, Series-arrangement 2 provided less, Series-arrangement 6 providing the least, while just the reverse held for the rats subsequently tested to the left" [PAGE 1]

Note OCR errors in text: "dg" likely d2, "ds" likely d3. "pre-liminary" hyphenation. "Univ of Calf" = California. "Senes z.." = Series.

I need to be careful not to invent fake ratios. I can use standard probability/statistics formulas (binomial, exponential decay) as formal equations, not "toy equations" invented for this context. These are standard formalisms.

Let me structure the response.

Word budget:
- THINK_TRACE: ~500 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~250 words
- RETROCAUSAL_GENEALOGY: ~200 words
- RECURSIVE_THEORY_OF_MIND: ~200 words
- CROSS_LAYER_VETO_ADJUDICATION: ~200 words
- RLVR_COUNTERFACTUAL_VETOES: ~200 words
Total ~1550 words. Good.

Now writing.

THINK_TRACE content:
Start by parsing the apparatus. S and F are chambers. d-blocks are binary gates. The design is a within-subjects or between-subjects manipulation of prior experience. The 18-run pretraining establishes a history H = {h_1...h_18}, h_i ∈ {L,R}. Frequency f_L = f_R = 0.5 for Nyswander groups. Recency is manipulated via serial position. Test period: one side blocked (blind), one open (true path). Criterion: 4/5 perfect runs.

Gray-zone audit:
1. OCR corruption: series arrangements are garbled ("RRR江LL", "RRLR紅L", etc.), so exact ordinal recency weights cannot be recovered from this page alone. This breaks exact replication of the recency variable.
2. Block labels: "d1, d2, ds and d" then later "both blocks d1 and dg were out... block ds". ds likely d3; dg likely d2. The notation is inconsistent across the paragraph, creating referential opacity.
3. Direction of recency: Text claims Series 1 (RRRLLL) gives greatest recency to right-tested rats, but RRRLLL terminates in LLL. Unless the list is read backwards or "recency" refers to the *opposite* side's recency as interference, the verbal claim conflicts with the written sequence. This is a gray zone requiring the original thesis (Nyswander 1926) to resolve.
4. Sample size: "part of the animals" gives no N. Statistical power is unknown.
5. Criterion: 4/5 perfect runs is a sequential probability ratio test boundary in disguise; if p (success prob) is low, expected trials to criterion diverge.

Breakdown regimes: When inter-trial interval exceeds memory retention time, recency → 0. When block mechanism fails, the independent variable (blind vs true) is not manipulable. When rats are satiated, F loses incentive value, motivation → 0, learning stops regardless of recency.

SOURCE_OPERATORS_AND_EQUATIONS:
Define:
- State space S = {start, left_alley, right_alley, food, blind_end}
- Action A = {enter_L, enter_R}
- Blocking operator β_t: A → {0,1}, where β_t(a)=1 means alley a is open at trial t.
- Training history: H_18 = {(a_t, r_t)}_{t=1}^{18}, r_t ∈ {0,1} reward? Actually text doesn't mention reward in training, just running to food chamber? It says S is start and F is food. Presumably food at end of open alley.
- Frequency: f_a = (1/18) Σ_{t=1}^{18} I(a_t = a). Constraint f_L = f_R = 1/2 [PAGE 1].
- Recency kernel: ρ_a(t) = Σ_{τ=1}^{t} κ(t-τ) I(a_τ = a), κ(Δ) = exp(-λΔ), units: trials^{-1} for λ, dimensionless for ρ. Or simple recency rank: the last occurrence position.
- Test phase: β_t(L)=0, β_t(R)=1 (or vice versa) [PAGE 1].
- Learning outcome: T_c = min{n: Σ_{j=n-4}^{n} I(success_j) ≥ 4, n≥5}, units: trials. Criterion event C_n = I(Σ_{j=n-4}^{n} success_j ≥ 4).
- Probability model: Under chance p=0.5, P(pass block of 5) = P(Bin(5,0.5) ≥ 4) = (5+1)/32 = 6/32 = 0.1875. Expected waiting time geometric.
- Breakdown: λ → ∞ (only last trial matters), λ → 0 (only frequency matters), block reliability r_block < 1 introduces observation noise.

RETROCAUSAL_GENEALOGY:
Tolman 1932 [PAGE 1] is the bridge between Watsonian S-R and cognitive expectancy. Nyswander 1926 thesis cited. Lineage: Tolman & Honzik 1930 latent learning → Edward Chace Tolman's cognitive map → O'Keefe & Nadel place cells (1978) → model-based RL (Daw et al. 2005). Multi-week trap: if the 18 training runs are distributed across days, sleep-dependent consolidation converts recent traces into long-term memory, flattening recency gradients. The 1932 design has no inter-trial interval control; a "recency" effect observed after a week could be a "reduced proactive interference" effect instead.

RECURSIVE_THEORY_OF_MIND:
Rat's ToM: expects food at F given alley choice, forms hypothesis H_rat: side ↔ food. Experimenter's ToM: believes rat expects based on recency/frequency. Crisis: when test contingency reverses (left blind, right true), rat faces expectancy violation. Habit regression: under stress, rat repeats last training response (recency habit). Counter-trap: experimenter anticipating regression might place blocks differently or handle rats differentially, creating experimenter expectancy. Clock: 18-trial training is a finite horizon; the switch to test is a non-stationarity at t=18. The rat must detect regime change; failure to detect yields perseveration errors.

CROSS_LAYER_VETO_ADJUDICATION:
Veto conditions independent of psychological interpretation:
1. Physical: Block ds must fully occlude alley. Rat skeletal width ~5 cm; if block leaves gap > 2 cm, rat passes. Veto if measured occlusion < 98%.
2. Biomechanical: Alley length and turning radius. Rats cannot execute >90° turn in < body length. If blind alley depth < 2× body length, rat may back out and be misclassified as error. Veto if blind_alley_length < 20 cm (typical rat length ~20 cm incl tail? Actually body ~15-20cm).
3. Environmental: Vivarium 20-26°C, 12:12 light/dark. Testing during inactive phase reduces running velocity v < 0.2 m/s vs normal 0.5-1.0 m/s, increasing trial duration and potentially altering motivation. Food deprivation 16-24h; if >24h, stress confounds; if <12h, food incentive weak.
Composite veto: V = 1 if any layer fails. Source text [PAGE 1] reports none of these controls, so psychological conclusions are conditionally valid only if V=0 in replication.

RLVR_COUNTERFACTUAL_VETOES:
1. Counterfactual: block ds is removed in test (both alleys open). Prediction: no blind alley exists; error rate drops to near zero for all series; recency-by-test-side interaction p > 0.05. Verifiable via automated door sensors.
2. Counterfactual: training frequency skewed to 15R/3L instead of 9/9. Prediction: main effect of frequency subsumes recency; series-arrangement order no longer predicts trials-to-criterion (β_recency ≈ 0, p > 0.1). Verifiable by re-randomizing block logs.
3. Counterfactual: stopping criterion changed to 2 consecutive perfect runs. Prediction: trials-to-criterion distribution becomes heavily right-skewed; early stopping truncates observation of late-phase recency decay; effect size of recency inflated by selection bias (stopping-time paradox). Verifiable by Monte Carlo simulation of the stopping rule.

Now ensure no betting lines. No mention of odds, spreads, etc. Good.

Word count check: I'll aim for rich content.

Let me write it out fully now, ensuring XML tags exactly as specified.

<THINK_TRACE>
...
</THINK_TRACE>
etc.

I need to include [PAGE 1] citations since only 1 page provided. The text itself shows page number 354 at top, but the instruction says cite exact [PAGE N] markers. Since PAGES: 1, I'll cite [PAGE 1]. I can also mention printed page 354.

Let's write.

Need to be careful: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." I will use standard binomial and exponential memory decay, which are not fake ratios. Good.

Also "State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." I will include these.

Let's compose the final response.

I will write in a formal analytical tone.

Double-check word count target: >=1000 words. I'll write generously.

Let's begin drafting each section mentally then produce final.

THINK_TRACE (~550 words):
Paragraph 1: Apparatus parsing, quotes.
Paragraph 2: Training/test logic, frequency equalization, recency manipulation.
Paragraph 3: Gray zones: OCR corruption, referential opacity (ds/dg), direction conflict, sample size, stopping rule.
Paragraph 4: Breakdown regimes: memory decay, block failure, satiety, non-stationarity at t=18.
Paragraph 5: Theoretical implication: purposive behavior, cognitive expectancy vs S-R.

SOURCE_OPERATORS_AND_EQUATIONS (~250 words):
Formal definitions with LaTeX, units, assumptions, breakdown.

RETROCAUSAL_GENEALOGY (~200 words):
Historical lineage, multi-week trap.

RECURSIVE_THEORY_OF_MIND (~200 words):
Rat and experimenter models, crisis, counter-trap, clock.

CROSS_LAYER_VETO_ADJUDICATION (~200 words):
Physical, biomechanical, weather/environmental vetoes.

RLVR_COUNTERFACTUAL_VETOES (~200 words):
3 scenarios.

Total should exceed 1000.

Let's write now.
</NATIVE_REASONING>

<THINK_TRACE>
The source page ([PAGE 1], printed p. 354) describes a maze apparatus in which "S is the starting chamber and F the food chamber; d1, d2, ds and d are blocks which in any given trial close off the right alley, or the left alley, at the pleasure of the experimenter" [PAGE 1]. The blocks are binary gate operators: when inserted, an alley is unavailable; when removed, it is available. The experimental protocol has two phases. First, an 18-run preliminary training period "in each of which only one alley was open" [PAGE 1]. Because either block d or d2 was always closed, the experimenter could construct any desired joint distribution of relative frequency and recency across the two sides. Second, a test period "in which both blocks d1 and dg were out, but in which one side, say the left, was now consistently made into a blind alley by the use of block ds, while the other side was made consistently into a true path" [PAGE 1]. The dependent variable is learning speed to criterion: animals "had to learn until they made four perfect runs out of five" [PAGE 1].

The critical manipulation, reported for Dr. Nyswander's data, equalizes frequency while varying serial order. "All her groups of animals received, during the training period, nine runs to the right and nine to the left, so that the factor of frequency was equalized" [PAGE 1]. Six series-arrangements are listed, though the OCR text is corrupted ("RRR江LL", "RRLR紅L", "R山RLW工RRLRRL", etc.), making exact ordinal recovery impossible from this page alone. The text asserts a directional hypothesis: "for the rats subsequently tested to the right, Series-arrangement 1 provided the greatest amount of preceding recency, Series-arrangement 2 provided less, Series-arrangement 6 providing the least, while just the reverse held for the rats subsequently tested to the left" [PAGE 1]. This predicts an interaction between serial-position history and test-side contingency that is independent of overall frequency.

Gray-zone audit. First, referential opacity: the paragraph introduces d1, d2, ds and d, then refers to "both blocks d1 and dg" and "block ds" [PAGE 1]. The labels dg and ds are almost certainly OCR or typographical variants of d2 and d3, but the source page does not resolve this, so the precise blocking topology in the test phase is under-specified. Second, the OCR corruption of the six series-arrangements means the recency weights cannot be recomputed verbatim; any quantitative claim about exact serial-position weighting requires Nyswander's 1926 thesis, not this page. Third, "part of the animals" gives no sample N, so statistical power and the reliability of the series-arrangement ranking are unknown. Fourth, the stopping rule (4 perfect runs out of 5) is a sequential boundary: if the underlying success probability p is low, the expected waiting time to criterion diverges, and early stopping truncates the learning curve, potentially inflating estimated recency effects. Breakdown regimes include: (a) inter-trial intervals long enough that the recency kernel decays to zero, rendering serial order irrelevant; (b) block failure (ds does not fully seal the blind alley), which removes the manipulation; and (c) satiety or deprivation extremes that collapse the incentive value of F, driving motivation to zero regardless of history. The theoretical stakes are Tolman's purposive behaviorism: the rats are treated as forming expectancies about which alley leads to food, not merely acquiring S-R habits, so frequency and recency are informational variables governing expectancy strength rather than reinforcement totals.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the alley-selection variable at trial t be $a_t \in \{L,R\}$, and the blocking operator be $\beta_t(a) \in \{0,1\}$, where $\beta_t(a)=1$ denotes an open alley. During training [PAGE 1], exactly one alley is open per run: $\beta_t(L)+\beta_t(R)=1$ for $t=1,\dots,18$. The training history is $H_{18}=\{(a_t)\}_{t=1}^{18}$. Frequency for side $a$ is $f_a = \frac{1}{18}\sum_{t=1}^{18}\mathbb{I}(a_t=a)$, with the Nyswander constraint $f_L=f_R=\frac{1}{2}$ [PAGE 1]. Units: dimensionless proportions in $[0,1]$.

Recency is modeled as an exponentially decayed memory trace $\rho_a(t)=\sum_{\tau=1}^{t}\kappa(t-\tau)\mathbb{I}(a_\tau=a)$, with kernel $\kappa(\Delta)=e^{-\lambda\Delta}$, $\lambda>0$ in units of trials$^{-1}$. As $\lambda\to 0$, only frequency survives (perfect integration); as $\lambda\to\infty$, only the most recent trial matters (singularity: zero-history Markov approximation). In the test phase, one side is made a blind alley: without loss of generality, $\beta_t(L)=0$, $\beta_t(R)=1$ for all test trials [PAGE 1]. The correct response is therefore $a^* = R$.

The learning outcome is the stopping time $T_c = \min\{n\ge 5 : \sum_{j=n-4}^{n}\mathbb{I}(a_j=a^*) \ge 4\}$, measured in trials. The criterion event is $C_n = \mathbb{I}\{\sum_{j=n-4}^{n}\text{success}_j \ge 4\}$. Under chance performance $p=0.5$, the probability of passing any 5-run block is $P(\text{Bin}(5,0.5)\ge 4) = \frac{6}{32}=0.1875$; expected trials to criterion under a geometric approximation are $E[T_c]\approx 1/0.1875 \approx 5.33$ blocks, though this is invalidated by learning-induced non-stationarity in $p$.

Assumptions: (i) block placement is perfectly reliable; (ii) rats perceive alley availability before entry; (iii) the food chamber F provides a constant incentive across trials. Breakdown regimes: if block occlusion probability $r_{\text{block}}<1$, the observed blind-alley variable is misclassified with probability $1-r_{\text{block}}$; if $f_L\neq f_R$ due to protocol drift, frequency confounds recency; if $\lambda$ is misspecified, the recency regressor is orthogonal to the true memory trace and the interaction test loses power. All citations refer to [PAGE 1].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The page is drawn from Tolman's 1932 *Purposive Behavior in Animals and Men* [PAGE 1], itself the transitional text between Watsonian stimulus-response behaviorism and cognitive expectancy theory. The specific experiment is attributed to "D B Nyswander, Recency, frequency and pattern factors in learning Ph.D Thesis, Univ of Calif, 1926" [PAGE 1]. The lineage runs: Thorndike's law of effect (frequency/repetition) $\rightarrow$ Tolman's purposive behaviorism (expectancy, cognitive map) $\rightarrow$ Tolman & Honzik (1930) latent learning $\rightarrow$ O'Keefe & Nadel (1978) hippocampal place cells $\rightarrow$ contemporary model-based reinforcement learning, in which an agent maintains a transition model $P(s'|s,a)$ distinct from a model-free value cache.

The multi-week trap is temporal: if the 18 preliminary runs are distributed across days or weeks rather than massed, sleep-dependent consolidation and retroactive interference transform the recency manipulation. A trace that is "recent" at the end of day 1 may be consolidated into long-term memory by day 5, erasing the serial-order gradient that the experimenter intended to isolate. Conversely, a trace from early in training may suffer proactive interference from later runs, so that "least recency" (Series 6) could reflect not absence of memory but maximal interference. Because Tolman's 1932 page [PAGE 1] specifies no inter-trial interval, no inter-session interval, and no control for time-of-day, the recency effect is confounded with consolidation dynamics. Any replication spanning multiple weeks must treat recency as a time-decaying latent variable $\rho_a(t)$ with unknown $\lambda$, not as a fixed serial-position property.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The experimental system contains two embedded agents with mutually recursive models. The rat constructs an expectancy $E_{\text{rat}}(a) = P(F \mid a, H_{18})$: given history $H_{18}$, what is the probability that alley $a$ leads to the food chamber? The experimenter constructs a second-order model $E_{\text{exp}}(E_{\text{rat}})$: what does the rat expect, based on frequency and recency? In the test phase, the contingency reverses for one side (blind vs. true path) [PAGE 1], producing a crisis: the rat's previously valid expectancy is violated. Under crisis, habit regression predicts reversion to the most recently reinforced response—the recency habit—rather than the globally most frequent one. This is precisely what Nyswander's design isolates by holding frequency constant at 9/9.

The counter-trap operates at the experimenter level. If the experimenter believes Series 1 produces strong recency to the right [PAGE 1], they may unconsciously handle those rats differently, alter block placement latency, or bias the criterion judgment of a "perfect run." This is a researcher-expectancy analogue of Clever Hans: the measured interaction between series-arrangement and test-side could be partly generated by the experimenter's model of the rat's model. The clock is the hard boundary at $t=18$: training terminates and the test regime begins. The rat must detect this non-stationarity. Failure to detect the switch produces perseveration on the formerly open alley; successful detection produces a rapid shift to the true path. The 4-out-of-5 criterion imposes a temporal compression: the rat has a finite number of post-switch trials to update $E_{\text{rat}}$ before the experiment ends, so the interaction between recency and test-side is also an interaction with the experimental clock.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Psychological interpretation is void unless three physical veto layers pass. 

Physical layer: blocks d1, d2, ds and d [PAGE 1] must fully occlude the alley. An adult laboratory rat has a shoulder width of roughly 3–4 cm and can squeeze through gaps greater than approximately 1.5–2 cm. If block ds leaves a gap $g > g_{\text{crit}} \approx 2$ cm, the "blind alley" is traversable and the independent variable (blind vs. true path) is not manipulable. Veto condition $V_{\text{phys}} = 1$ if measured occlusion $< 98\%$ or gap $g > 2$ cm.

Biomechanical layer: rats run at roughly $v \approx 0.5$–$1.0$ m/s and require a turning radius on the order of body length ($\sim 15$–$20$ cm). If the blind alley depth $d_{\text{blind}} < 2 \times L_{\text{body}}$, the rat can reverse out and re-enter the start chamber, generating an error that is motoric rather than cognitive. Veto condition $V_{\text{bio}} = 1$ if alley width $w < 6$ cm or blind-alley depth $< 20$ cm.

Environmental/weather layer: vivarium temperature outside $20$–$26^\circ$C, incorrect light-phase (rats are nocturnal; testing in the inactive phase reduces running velocity and food motivation), or food-deprivation duration outside roughly 12–24 hours collapses the incentive value of F. If deprivation $< 12$ h, the food chamber loses incentive salience; if $> 24$ h, stress confounds learning. Veto condition $V_{\text{env}} = 1$ if $T \notin [20,26]^\circ$C or deprivation $\notin [12,24]$ h.

Composite veto: $V = V_{\text{phys}} \lor V_{\text{bio}} \lor V_{\text{env}}$. The source text [PAGE 1] reports none of these controls; therefore the recency-by-frequency conclusion is conditionally valid only under the assumption $V=0$ in the original laboratory. Any failure at any layer vetoes the psychological inference regardless of the statistical significance of the series-arrangement effect.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios, each with a falsifiable prediction.

Scenario 1 (block failure): In the test phase, block ds fails to seal the left alley, so both alleys remain open ($\beta_t(L)=\beta_t(R)=1$). Prediction: no blind alley exists; error rate falls to near zero for all six series-arrangements; the interaction between series-arrangement and test-side disappears ($p > 0.1$), and recency cannot explain learning because there is no incorrect side to avoid. Verifiable via automated door-position sensors and video tracking of alley entries.

Scenario 2 (frequency drift): Due to protocol error, training is 15 runs right and 3 runs left rather than the stated 9/9 [PAGE 1]. Prediction: frequency dominates recency; trials-to-criterion are predicted by $f_R$ alone, and the series-arrangement order coefficient in a regression of $\log(T_c)$ on serial-position weights is indistinguishable from zero ($\beta_{\text{recency}} \approx 0$). Verifiable by auditing the block-log records.

Scenario 3 (stopping-rule truncation): The criterion is changed from "four perfect runs out of five" to "two consecutive perfect runs." Prediction: the stopping-time distribution becomes heavily right-skewed; early lucky streaks terminate the experiment before late-phase recency decay can be observed, inflating the apparent recency effect through selection bias. Verifiable by Monte Carlo simulation of the stopping rule under a known learning curve $p(n)$; the simulated effect size of recency should exceed the true generative effect.
</RLVR_COUNTERFACTUAL_VETOES>