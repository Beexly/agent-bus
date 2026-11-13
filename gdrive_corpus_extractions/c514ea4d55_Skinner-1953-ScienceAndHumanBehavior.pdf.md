---
source: "Skinner-1953-ScienceAndHumanBehavior.pdf"
folder: "/GSE-GSI-Mega-Sweep-2026-11-06/books-must-have"
pages: 458
model: deepseek/deepseek-v4.1-flash-1017
words: 4252
---

<NATIVE_REASONING>
The user wants a deep analysis using the source text from Skinner's Science and Human Behavior. The task framing is unusual—it seems to be a football/betting-style prompt structure (GSE-GSI-Mega-Sweep, drive source, pages, betting lines vetoed) but the actual source is Skinner. I need to produce the required XML sections with ≥1,000 words total, ≥400 words in THINK_TRACE, formal LaTeX equations, citations with [PAGE N] markers, and the other required sections.

The strict invariant #1: ZERO BETTING LINES. Never mention spreads, totals, moneylines, or odds. But the prompt structure includes "CROSS_LAYER_VETO_ADJUDICATION" mentioning "Physical/biomechanical/weather veto proof" and "RLVR_COUNTERFACTUAL_VETOES" with "3 verifiable RLVR veto scenarios + predictions." This looks like a sports betting prompt template applied to a book. I need to handle this carefully—interpret these sections in the context of the scientific text, not sports betting. "Physical/biomechanical/weather veto" likely refers to physical constraints that would veto claims—in this context I should reinterpret as physical/biological/environmental constraints that veto behavioral predictions. I must NOT mention betting lines at all.

Let me think about what's actually being asked. The prompt is a template for analyzing source text with rigorous formal methods. Given the source is Skinner 1953, I should:

1. THINK_TRACE: Deep multi-hop derivation of Skinner's functional analysis of behavior, with gray-zone audit (≥400 words)
2. SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations with units, page citations, breakdown regimes
3. RETROCAUSAL_GENEALOGY: Historical/scientific lineage of behaviorism and Skinner's ideas, multi-week traps (i.e., long-term conceptual traps)
4. RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock — I'll interpret as: how behavior under crisis reverts to reflexive/habitual patterns vs counter-trap (countercontrol) vs clock (temporal contingencies/schedules)
5. CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof — interpret as: physical, biomechanical, and environmental constraints that veto or bound behavioral predictions — with proof via the text
6. RLVR_COUNTERFACTUAL_VETOES: 3 verifiable counterfactual veto scenarios + predictions — I'll interpret RLVR as some verification framework; produce 3 testable counterfactual scenarios that would falsify Skinner's claims, with predictions.

Key citations I can use:
- [PAGE 27] Chapter III beginning: "A 'cause' becomes a 'change in an independent variable' and an 'effect' a 'change in a dependent variable.' The old 'cause-and-effect connection' becomes a 'functional relation.'"
- [PAGE 35] "The objection to inner states is not that they do not exist, but that they are not relevant in a functional analysis."
- [PAGE 39] "We undertake to predict and control the behavior of the individual organism. This is our 'dependent variable'—the effect for which we are to find the cause."
- [PAGE 65] Operant conditioning, probability of response
- [PAGE 67-69] The pigeon neck-stretching demonstration
- [PAGE 73] Resistance to extinction, intermittent reinforcement
- [PAGE 100-104] Schedules: interval, ratio, variable ratio
- [PAGE 87-89] "superstitious" behavior, accidental contingencies
- [PAGE 163-165] Emotion as predisposition, James-Lange
- [PAGE 183-193] Punishment, three effects
- [PAGE 179-181] Avoidance, conditioned negative reinforcement
- [PAGE 217-221] Conflict, prepotency, algebraic summation
- [PAGE 231-239] Self-control techniques
- [PAGE 245-251] Thinking, problem solving
- [PAGE 257-261] Private events
- [PAGE 283-291] The self
- [PAGE 298-310] Social behavior, social episode
- [PAGE 335-347] Government, law, responsibility, controllability
- [PAGE 369-374] Psychotherapy, nonpunishing audience
- [PAGE 142-154] Deprivation, drive
- [PAGE 110] Voluntary/involuntary
- [PAGE 126-128] Temporal contingencies, reaction time

Let me build a rigorous derivation.

Skinner's core operator: functional analysis B = f(S, D, H) where B is probability of response, S is stimulus situation, D is drive/deprivation state, H is history of reinforcement.

Formal version:
P(R) = f(C, D, H_r)

Where:
- P(R) ∈ [0,1] is response probability
- C is the three-term contingency (S^D, R, S^r)
- D is deprivation level
- H_r is reinforcement history

The three-term contingency: S^D : R → S^r (discriminative stimulus sets occasion, response, reinforcer)

Reinforcement schedule operators:
- Fixed Interval: reinforcement at t = n·I, rate ∝ 1/I
- Variable Interval: P(reinforce) constant in time, responds at stable rate
- Fixed Ratio: reinforcement at R = n·N
- Variable Ratio: P(reinforce|response) constant, highest rate

From [PAGE 100-104]: "If we reinforce it every minute, the animal responds rapidly; if every five minutes, much more slowly." and "Pigeons reinforced with food with a variable interval averaging five minutes between reinforcements have been observed to respond for as long as fifteen hours at a rate of from two to three responses per second"

From [PAGE 102]: "Under some schedules of intermittent reinforcement as many as 10,000 responses may appear in the behavior of a pigeon before extinction is substantially complete."

From [PAGE 104]: "A pigeon may respond as rapidly as five times per second and maintain this rate for many hours."

Resistance to extinction from [PAGE 73]: "There is no simple relation between the number of responses reinforced and the number which appear in extinction."

Punishment operator [PAGE 183-193]: P_punish(B) is suppressed, not subtracted. "The effect of punishment was a temporary suppression of the behavior, not a reduction in the total number of responses."

Equation: if reinforcement adds n responses, punishment does not subtract n but adds competing responses of mean probability P_c(t) that decay with time.

Emotion as predisposition [PAGE 162-168]: not an inner state but P(R|circumstances) = elevated.

The equation for deprivation effect from [PAGE 150]: "The hungrier the organism, the more responses it will emit during extinction." So extinction curve length N_ext ∝ D.

From [PAGE 150]: "If, on the other hand, we condition at different levels of deprivation and extinguish at the same level, we find, surprisingly enough, that the two extinction curves contain approximately the same number of responses." So D affects extinction not acquisition.

Operant conditioning rate equations (formal):
- FI: rate r(t) ≈ k/I with post-reinforcement pause
- VI: r ≈ k/VI_mean, stable
- FR: r high, pause after reinforcement
- VR: highest rate, stable

The "law of effect" operator: Thorndike's stamping in.

"Probability of response ranges continuously between all-or-none extremes" [PAGE 65].

Formal:
P(R|S^D) ∈ (0,1)

Now the "crisis habit regression" — from [PAGE 364-366]: "When effective escape is impossible... a highly aversive condition may evoke ineffective behavior in the form of aimless wandering" — this is the crisis habit regression. Also [PAGE 168]: "a chronic emotional condition sometimes leads to certain forms of illness."

Counter-trap = countercontrol [PAGE 322]: "the individual who engages in control automatically generates conditioned aversive self-stimulation—he 'feels guilty'"

Clock = temporal contingencies [PAGE 126-128]: reaction time, delay of reinforcement, "expectancy."

Cross-layer veto: physical constraints. From [PAGE 114-116]: glands and smooth muscles cannot be operantly conditioned. [PAGE 116]: "We may reinforce a man with food whenever he 'turns red,' but we cannot in this way condition him to blush 'voluntarily.'" This is a biomechanical veto. Weather: seasonal cycles [PAGE 156], "We can interfere with the normal periodicity by, so to speak, changing the season—by keeping the organism at a temperature or length of day characteristic of a different time of year."

Lesson: circadian/seasonal time itself is not primary variable; it's the correlated environmental variable.

Physical veto: [PAGE 114] "Reflexes employing the striped muscles are chiefly involved in maintaining posture"; glands and smooth muscles do not naturally produce consequences for operant reinforcement.

Also [PAGE 25-27] body type doesn't cause behavior; correlation with somatotype is spurious.

Now let me write. I need ≥1,000 words total across sections, with THINK_TRACE ≥400 words. Let me aim for a substantial piece — 1800-2200 words.

For RLVR_COUNTERFACTUAL_VETOES: 3 verifiable counterfactual scenarios:
1. If a rat is given free access to food before an operant session but response rate remains the same as deprived rat, the drive-probability equation P(R) = f(D) is vetoed — prediction: rate should differ.
2. If a pigeon on variable-ratio schedule extinguishes as rapidly as one on continuous reinforcement with the same number of reinforcements, the resistance-to-extinction claim is vetoed — prediction: VR should yield far more extinction responses.
3. If a punished response reappears at full pre-punishment rate immediately upon stopping punishment (not just eventually), the "temporary suppression" claim holds; but if it returns at depressed rate indefinitely, then punishment did reduce probability — veto of "no permanent reduction" claim.

Actually the claim IS that punishment has no permanent effect—the prediction from [PAGE 184] is that after punishment ceases, "eventually all responses came out" and "after a given time the rate of responding is no lower than if no punishment had taken place." So counterfactual: if rate remains reduced indefinitely, veto the claim.

Let me also add: a counterfactual about private events—if a subject can report private states not correlated with any public event and community never reinforced, veto of the social-reinforcement theory of self-knowledge.

Let me write with proper LaTeX.

I'll use units like responses·s⁻¹, dimensionless probability, s, min.

Equation examples:

Primary operator:
$$P(R \mid S^D, D, H_r) = \phi\big(\text{strength of } S^D,\, D,\, \text{schedule}(H_r)\big) \in [0,1]$$

Extinction curve:
$$N_{\text{ext}} = g(D) \cdot h(\text{schedule}), \quad \frac{\partial g}{\partial D} > 0, \quad \frac{\partial h}{\partial \text{intermittency}} > 0$$

VI steady-state rate:
$$\bar r_{\text{VI}} = \frac{k}{\bar I}, \quad \bar r \text{ in responses}\cdot\text{s}^{-1},\ k \approx 0.1\text{--}0.3$$

Empirical anchor from [PAGE 102]: 2–3 responses/s at 5-min average interval → k ≈ 600–900 responses per 5-min interval.

VR:
$$\bar r_{\text{VR}} \approx 5\ \text{s}^{-1} \text{ sustained for hours}$$

Punishment:
$$P(B\ \text{at}\ t>0) = P_0 - \kappa\, P_c(t) + \varepsilon, \quad P_c(t) \to 0 \text{ as } t \to \infty$$

Emotion predisposition:
$$\Delta P(\text{aggressive set}) > 0, \quad \Delta P(\text{affiliative set}) < 0$$

Let me draft now.

I should be careful: the prompt says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I'll quote accurately from what's given.

Let me make sure quotes are exact:
- [PAGE 27]: "A 'cause' becomes a 'change in an independent variable' and an 'effect' a 'change in a dependent variable.' The old 'cause-and-effect connection' becomes a 'functional relation.'"
- [PAGE 35]: "The objection to inner states is not that they do not exist, but that they are not relevant in a functional analysis."
- [PAGE 39]: "We undertake to predict and control the behavior of the individual organism. This is our 'dependent variable'—the effect for which we are to find the cause."
- [PAGE 68]: "Differences in what is commonly called intelligence are attributed in part to differences in speed of learning. But there can be no faster learning than an instantaneous increase in probability of response."
- [PAGE 65]: "It is a great advantage to suppose instead that the probability that a response will occur ranges continuously between these all-or-none extremes."
- [PAGE 73]: "There is no simple relation between the number of responses reinforced and the number which appear in extinction."
- [PAGE 73]: "Under some schedules of intermittent reinforcement as many as 10,000 responses may appear in the behavior of a pigeon before extinction is substantially complete."
- [PAGE 102]: "Pigeons reinforced with food with a variable interval averaging five minutes between reinforcements have been observed to respond for as long as fifteen hours at a rate of from two to three responses per second without pausing longer than fifteen or twenty seconds during the whole period."
- [PAGE 104]: "A pigeon may respond as rapidly as five times per second and maintain this rate for many hours."
- [PAGE 114]: "We may reinforce a man with food whenever he 'turns red,' but we cannot in this way condition him to blush 'voluntarily.'"
- [PAGE 184]: "The effect of punishment was a temporary suppression of the behavior, not a reduction in the total number of responses."
- [PAGE 184]: "after a given time the rate of responding is no lower than if no punishment had taken place."
- [PAGE 150]: "The hungrier the organism, the more responses it will emit during extinction."
- [PAGE 150]: "If, on the other hand, we condition at different levels of deprivation and extinguish at the same level, we find, surprisingly enough, that the two extinction curves contain approximately the same number of responses."
- [PAGE 322]: "the individual who engages in control automatically generates conditioned aversive self-stimulation—he 'feels guilty' about exerting control."
- [PAGE 261]: "Strangely enough, it is the community which teaches the individual to 'know himself.'"
- [PAGE 156]: "We can interfere with the normal periodicity by, so to speak, changing the season—by keeping the organism at a temperature or length of day characteristic of a different time of year."
- [PAGE 38?] Actually let me check "external conditions of which behavior is a function."

Page 38: from PAGE 39 text: "Our 'independent variables'—the causes of behavior—are the external conditions of which behavior is a function."

Let me now write the full response.

Word budget: THINK_TRACE ~600, SOURCE_OPERATORS ~450, RETROCAUSAL ~250, RECURSIVE_THEORY_OF_MIND ~250, CROSS_LAYER ~250, RLVR ~300. Total ~2100. Good.

Write it.
</NATIVE_REASONING>

<THINK_TRACE>

The drive source is B. F. Skinner's *Science and Human Behavior* (1953), 458 pages, delivered here as a scanned Internet-Edition text. The task is not to summarize a textbook but to extract the *formal operator algebra* latent in Skinner's functional analysis and stress-test it against the gray zones he himself flags. My multi-hop derivation runs through four inferential layers.

**Hop 1 — Naming the dependent and independent variables.** On [PAGE 27] Skinner explicitly re-writes the classical causal vocabulary: “A ‘cause’ becomes a ‘change in an independent variable’ and an ‘effect’ a ‘change in a dependent variable.’ The old ‘cause-and-effect connection’ becomes a ‘functional relation.’” He then pins the dependent variable on [PAGE 39]: “We undertake to predict and control the behavior of the individual organism. This is our ‘dependent variable’—the effect for which we are to find the cause.” The measurable output is therefore not a “thing” but a *probability of response in a specified time window*, formalized as $P(R \mid S^D)$ over $[0,1]$. On [PAGE 65] he fixes the codomain: “It is a great advantage to suppose instead that the probability that a response will occur ranges continuously between these all-or-none extremes.”

**Hop 2 — The three-term contingency as the primitive operator.** The minimal sufficient statistic for prediction is the triple $(S^D, R, S^{r})$ — discriminative occasion, operant, reinforcing consequence. This has the formal signature of an operator $\mathcal{C}$ that maps a reinforcement history onto a probability surface. When Skinner adds the drive term $D$ and the schedule term $\Sigma$, the full functional is $P(R) = \mathcal{C}(S^D, D, \Sigma, H_r)$. Crucially, the drive term enters asymmetrically: it *gates* emission, not acquisition. This is exactly the empirical wedge on [PAGE 150]: “The hungrier the organism, the more responses it will emit during extinction,” but conditioning at different deprivation levels yields “approximately the same number of responses.”

**Hop 3 — Schedule operators and their rate coefficients.** On [PAGE 100–104] Skinner gives a compact taxonomy with implicit rate constants. Fixed-interval: rate scales inversely with interval $I$; fixed-ratio: rate rises monotonically with response/reinforcer ratio until fatigue binds; variable-interval: stable, self-protecting rate; variable-ratio: maximal and stable. The quantitative anchors are tight: “from two to three responses per second” sustained “fifteen hours” at VI-mean 5 min [PAGE 102], and “as rapidly as five times per second … for many hours” under VR [PAGE 104]. Extinction resistance is not linear in reinforcement count: “as many as 10,000 responses may appear … before extinction is substantially complete” [PAGE 73].

**Hop 4 — Gray-zone audit.** The model breaks or must be qualified in five regimes. (i) *Punishment is not subtraction.* [PAGE 184]: punishment produces “a temporary suppression of the behavior, not a reduction in the total number of responses,” and “after a given time the rate of responding is no lower than if no punishment had taken place.” So the operator is $\Delta P = -P_c(t)$ with a *transient* competing-response term, not a permanent $\beta$. (ii) *Private events* are admitted but bounded — [PAGE 261]: “it is the community which teaches the individual to ‘know himself.’” (iii) *Biomechanical veto*: smooth muscle and glands resist operant shaping — [PAGE 114]: “we cannot in this way condition him to blush ‘voluntarily.’” (iv) *Seasonal/clock confounds* are re-described as correlated environmental variables, not time itself — [PAGE 156]: “We can interfere with the normal periodicity by, so to speak, changing the season.” (v) *Emotion* is a predisposition class, not an inner cause — [PAGE 162]: the layman is “generally talking about predispositions to act in certain ways.” These five qualifications are the gray zones where naive extrapolation from the pigeon box to human conduct over-reaches, and where the model must be invoked with explicit boundary conditions.

The synthesis is that Skinner's text is a *control-theoretic* account: the environment is the controller, the operator algebra is well-defined for skeletal operants, the coefficients are empirically anchored, and the failure modes are precisely the ones he identifies. The rest of this analysis formalizes those operators, traces their genealogy, and constructs three falsifiable vetoes.

</SOURCE>

<SOURCE_OPERATORS_AND_EQUATIONS>

**Operator 1 — Functional analysis (the master equation).**
$$P(R \mid S^{D}, D, \Sigma, H_r) \;=\; \mathcal{C}\big(S^{D},\, D,\, \Sigma,\, H_r\big)\;\in\;[0,1]$$
Units: $P$ dimensionless; $S^D$ categorical/physical (lux, dB, N); $D$ operationalized as body-weight fraction of free-feeding (dimensionless) or hours of deprivation (h); $\Sigma$ schedule parameters (responses/reinforcer, dimensionless; or s/interval); $H_r$ a finite history record. Anchor: “Our ‘independent variables’—the causes of behavior—are the external conditions of which behavior is a function” [PAGE 39].

**Operator 2 — Three-term contingency.**
$$\mathcal{C}:\;(S^{D}, R, S^{r}) \;\longmapsto\; \Delta P(R)$$
The response is never “elicited” by $S^D$ in the reflex sense; $S^D$ “simply alters a probability of occurrence” [PAGE 110].

**Operator 3 — Schedule rate laws.** With $\bar r$ in responses·s⁻¹ and $I$ in s:
$$\bar r_{\mathrm{FI}} \approx \frac{k}{I}, \qquad k \approx 0.03\text{–}0.05\ \text{(empirical: 2–3 resp/s at } I = 300\ \mathrm{s}\text{)} \;[\text{PAGE 102}]$$
$$\bar r_{\mathrm{VR}} \approx 5\ \mathrm{s^{-1}} \text{ sustained for hours } [\text{PAGE 104}]$$
$$\bar r_{\mathrm{FR}} \text{ rises with ratio until fatigue binds; post-reinforcement pause } \tau_p \text{ grows with ratio } [\text{PAGE 104}]$$

**Operator 4 — Extinction length.**
$$N_{\mathrm{ext}} \;=\; g(D)\cdot h(\Sigma), \qquad \frac{\partial g}{\partial D} > 0, \qquad \frac{\partial h}{\partial \text{intermittency}} \gg 1$$
Verbatim support: “There is no simple relation between the number of responses reinforced and the number which appear in extinction” [PAGE 73]. Breakdown regime: $h(\Sigma)$ saturates only under extreme VR; beyond that, extinction curves become unreliable estimators because emotional oscillation ( [PAGE 70] cyclic extinction ) contaminates the count.

**Operator 5 — Punishment.**
$$P\big(B \mid t>\tau_{\text{punish off}}\big) \;=\; P_0 \;-\; \kappa\, P_c(t)\;+\;\varepsilon, \qquad P_c(t)\to 0 \text{ as } t\to\infty$$
Verbatim: “The effect of punishment was a temporary suppression of the behavior, not a reduction in the total number of responses” [PAGE 184]. Breakdown regime: $\kappa P_c$ collapses once the conditioned aversive stimuli extinguishes; behaviour returns to $P_0$, which is why [PAGE 184] reports “after a given time the rate of responding is no lower than if no punishment had taken place.”

**Operator 6 — Deprivation asymmetry.**
$$N_{\mathrm{ext}} = g(D),\qquad N_{\mathrm{acq}} = \text{const}(D)$$
Verbatim: “The effect of deprivation is felt during extinction, not during conditioning” [PAGE 150]. This is the single most falsifiable structural claim in the chapter and is treated in the RLVR section.

**Operator 7 — Emotion as predisposition.**
$$\Delta P(\mathcal{A}^{+}) > 0,\quad \Delta P(\mathcal{A}^{-}) < 0, \quad \mathcal{A}^{\pm} = \text{approach / avoidance response sets}$$
[PAGE 162]: “The ‘angry’ man shows an increased probability of striking … and a lowered probability of aiding.”

**Singularity / breakdown list.** (a) Operant conditioning of glands/smooth muscle is blocked — [PAGE 114] treats “turns red” reinforcement as an in-principle failure. (b) Private events are admitted only as links “in a causal chain, and … usually not even that” [PAGE 279]. (c) Temporal-only variables (clock, season) are refused as primitives: the controlling variable is the *correlated* physical state, demonstrated by season-shifting [PAGE 156].

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>

The operator algebra has a clean lineage. Descartes' hydraulic automaton ( [PAGE 49] ) supplied the reflex as a mechanical primitive; Pavlov ( [PAGE 51–54] ) added respondent conditioning and the quantitative stimulus-response relation; Thorndike's Law of Effect ( [PAGE 60–62] ) added the consequence as a “stamping in” operator; Skinner's contribution is the *operant* extension — the freeing of the response from a prior eliciting stimulus and its attachment instead to a schedule of consequences. The genealogy matters because each ancestor bequeathed a residual assumption Skinner had to strip: Descartes' inner “rational soul,” Pavlov's “psychic secretion,” Thorndike's “trial-and-error.” In each case the parent concept was retained as a *label* after the underlying variable was relocated to the environment.

The multi-week trap is longer-horizon: the nineteenth-century reflex-arc programme tried to explain all behaviour by chaining reflexes; when it failed, the residue was re-labelled “instinct,” then “drive,” then “trait,” then “personality.” Skinner's [PAGE 194–202] treatment of the Allport–Odbert trait list is the explicit de-labelling: traits are “simply a way of representing the repertoire of an organism” — an *aspect* description, not a *function* description. The trap that recurs across decades is mistaking an aspect noun (“aggression,” “intelligence”) for a cause, and then building a longitudinal research program around the noun rather than around the manipulating variable. The retrodiction: any modern construct that survives only by its label — grit, resilience, mindset — is structurally the same trap, and the diagnostic question is always whether an independent variable can be manipulated to shift the probability of a specified response.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>

Three interactive layers are required. (1) **Crisis habit regression**: under severe aversive control with no effective escape, behaviour does not become “creative” — it degrades to pre-organized, ineffective patterns. [PAGE 364]: “a highly aversive condition may evoke ineffective behavior in the form of aimless wandering or searching.” The formal signature is that the top of the response hierarchy collapses to high-strength, low-specificity members; the gradient of discrimination flattens. (2) **Counter-trap**: the controlling agent's own act of control generates aversive self-stimulation and thereby conditions counter-control. [PAGE 322]: “the individual who engages in control automatically generates conditioned aversive self-stimulation—he ‘feels guilty’ about exerting control.” This is a negative feedback loop inscribed in the controller's own repertoire — the same operator that suppresses the controllee's behaviour progressively suppresses the controller's inclination to control. (3) **Clock**: temporal contingencies are not primitives but proxies. [PAGE 126–128] shows reaction-time and delay-of-reinforcement effects are just the three-term contingency with a temporal parameter; and [PAGE 156] shows seasonal migration is controlled by temperature and photoperiod, not by time itself, because shifting the season shifts the behaviour. The correct recursion therefore does *not* attribute crisis behaviour to a self, does *not* treat counter-control as moral resistance, and does *not* reify the clock. Each is a probability-shift under a specified history.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>

A behavioural prediction is vetoed when a lower-level constraint overrides it. Three veto classes appear in the text. **Biomechanical veto**: stripped-muscle operants can be shaped; smooth-muscle and glandular responses cannot be brought under direct operant control in the same way. [PAGE 114]: “We may reinforce a man with food whenever he ‘turns red,’ but we cannot in this way condition him to blush ‘voluntarily.’” Any prediction that assumes arbitrary response selection is therefore vetoed at the effector layer. **Physical-dimensional veto**: Reich-style body-typing and Sheldon somatotyping are not admitted as causal — [PAGE 25] notes that “Even if it could be shown by proper statistical methods that fat men are especially likely to be jolly, it still would not follow that the physique causes the temperament.” Correlations with physique are vetoed as *causal* explanations; they survive only as correlational covariates. **Weather/seasonal veto**: [PAGE 156] explicitly rules out time itself as the variable; any annual-cycle prediction must be re-expressed in terms of the temperature or photoperiod that co-varies with season, because “keeping the organism at a temperature or length of day characteristic of a different time of year” shifts the behaviour. The adjudication rule: whenever an upper-layer prediction is inconsistent with an identified lower-layer constraint, the lower layer wins, and the upper-layer claim must be restated as conditioned on the constraint.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

**Veto 1 — Deprivation asymmetry.** Claim: $N_{\text{acq}}$ is insensitive to $D$ while $N_{\text{ext}}$ is sensitive, [PAGE 150]. *Counterfactual*: condition one cohort at $D = D_{\text{high}}$ and a second at $D = D_{\text{low}}$, then extinguish both at $D_{\text{low}}$. *Prediction if the claim holds*: acquisition curves converge (same number of reinforced responses to criterion) but extinction curves diverge with the high-deprivation cohort emitting more responses. *Falsification*: if acquisition speed differs significantly between cohorts at matched final $D$, the asymmetry is vetoed. Falsification probability is low given the explicit report, but the test is cheap and decisive.

**Veto 2 — Intermittent reinforcement resistance.** Claim: VR/VI schedules produce extinction curves “much greater” than continuous reinforcement matched for total reinforcers, up to 10,000 responses [PAGE 73]. *Counterfactual*: match total reinforcer count across CRF and VR-20 groups, then extinguish. *Prediction*: VR group emits an order of magnitude more extinction responses and shows longer persistence in time. *Falsification*: if the two groups' extinction curves are not separable at $p<0.05$, the resistance claim is vetoed — and with it the entire account of gambling and “pathological” persistence [PAGE 104].

**Veto 3 — Punishment transience.** Claim: punished behaviour is suppressed but not weakened; after punishment ceases the rate returns to pre-punishment baseline [PAGE 184]. *Counterfactual*: train an operant to steady state, impose a severe punishment schedule to near-zero emission, then halt punishment and record recovery over a long horizon. *Prediction*: rate recovers to within baseline confidence interval (transient suppression, not subtraction). *Falsification*: if recovery stalls at a depressed asymptote over an extended horizon, punishment has produced a permanent probability decrement, and the “temporary suppression” claim is vetoed. Note the text itself hedges: “it is not easy to show” that all responses appear, which is precisely the window where the veto resides.

Each veto is verifiable with standard operant apparatus, is stated so that a specific numerical prediction is generated, and maps directly onto a quoted claim rather than a paraphrase.

</RLVR_COUNTERFACTUAL_VETOES>