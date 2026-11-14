---
source: "p0539.txt"
folder: "/gpu-ocr-output/pages/James-1890-PrinciplesOfPsychology-Vol2"
pages: 1
model: nvidia_2:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3775
---

<NATIVE_REASONING>
The user has provided a source text from James's Principles of Psychology Vol 2, page 529 (OCR output says p0539.txt but content shows page 529). They want me to analyze it according to the strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - THINK_TRACE (>=400 words)
   - SOURCE_OPERATORS_AND_EQUATIONS
   - RETROCAUSAL_GENEALOGY
   - RECURSIVE_THEORY_OF_MIND
   - CROSS_LAYER_VETO_ADJUDICATION
   - RLVR_COUNTERFACTUAL_VETOES (3 verifiable RLVR veto scenarios + predictions)

The source text is about will, deliberation, decision-making, vacillation, equilibrium, dam breaking, irrevocable discharge, etc.

I need to write a deep analysis treating this as a dynamical systems / decision theory problem, using formal language, citing [PAGE 529] (the visible page number in the text). The OCR filename says p0539 but the text content header shows "529". I should cite [PAGE 529] since that's the printed page number visible in the source text.

Key concepts from text:
- Oscillations of attention, associative flow of ideas
- Foreground reasons vs background (dimly felt) check on irrevocable discharge
- Deliberation may last weeks or months
- Motives wax and wane (urgency/blood/life vs weak/pale/dead)
- Question finally resolved: equilibrium unreached; testing reasons, not obeying them
- Inclining first to one then another future, both represented as possible
- Resembles oscillations of material body within limits of elasticity
- Inward strain, no outward rupture
- Susceptible of indefinite continuance (physical mass and mind)
- If elasticity gives way / dam breaks / currents burst crust: vacillation over, decision irrevocably there
- Decision may come in many modes
- Introspective account of symptoms/phenomena; causal agency (neural or spiritual) relegated to later page
- Impatience of deliberative state; proneness to act/decide merely because action and... (text cuts off)

I need to avoid toy equations. I can use formal LaTeX for:
- A bistable potential / double-well model for deliberation (but must be formal, not fake ratios)
- Stochastic differential equation for evidence accumulation / decision threshold
- Information units (bits, nats), SI units (seconds, Joules if appropriate)
- Singularity/breakdown: when potential barrier vanishes (saddle-node / bifurcation), when dam breaks (threshold crossing), when elasticity limit exceeded (material failure / fracture)

I must be careful not to invent fake ratios like Force/Fatigue. Instead, use established formalisms: Langevin equation, Fokker-Planck, potential landscape U(x), bifurcation parameter, hysteresis, critical slowing down, mean first passage time (Kramers rate), etc. These are legitimate formal frameworks, not "toy equations" invented by me. I should state assumptions clearly and exact breakdown regimes (e.g., when noise amplitude D exceeds barrier height ΔU, or when control parameter μ crosses bifurcation point μ_c).

Word count: >=1,000 words total across sections, with THINK_TRACE >=400 words.

Structure:
<THINK_TRACE> ... >=400 words ... </THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS> ... </SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY> ... </RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND> ... </RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION> ... </CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES> ... </RLVR_COUNTERFACTUAL_VETOES>

I need to ensure no betting lines. The topic is psychology/decision, so no issue.

Citations: [PAGE 529] with verbatim quotes. Since only one page is provided, cite that.

Let's draft content.

THINK_TRACE (>=400 words): Deep multi-hop derivation and gray-zone audit.
- Parse James's text as description of a metastable deliberative state.
- Multi-hop: foreground reasons -> attentional oscillation -> associative flow -> background check -> irrevocable discharge -> deliberation duration -> waxing/waning motives -> provisional character -> equilibrium unreached -> testing vs obeying -> oscillation between possible futures -> material body elasticity analogy -> inward strain/no outward rupture -> indefinite continuance -> elasticity give way/dam break/burst crust -> irrevocable decision.
- Gray zones: introspective account only; causal agency (neural/spiritual) explicitly relegated later; text cuts off at "action and"; the boundary between "testing" and "obeying" is unspecified; the material elasticity analogy is qualitative, not quantitative; no units given for "weeks or months"; no metric for inward strain; the exact mechanism of dam breaking is undefined.
- Derivation: Let x(t) represent decision inclination. Potential U(x; μ) with two minima (action A and inaction B) separated by barrier. Attentional oscillations and associative flow act as stochastic forcing ξ(t). Background motive acts as a time-dependent bias or constraint that suppresses discharge while indecision lasts. When barrier vanishes (elasticity gives way), saddle-node bifurcation; decision becomes irrevocable.
- Breakdown regimes: D >> ΔU (noise-dominated, no stable vacillation); μ -> μ_c (critical slowing down; deliberation diverges in time); t_delib -> ∞ if equilibrium truly unreached.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
- State variable: x ∈ [-1,1] (dimensionless decision coordinate).
- Potential: U(x; μ) = a(μ) x^4 - b(μ) x^2 + c(μ) x. Or double well U(x) = (ΔU/4)(1 - x^2)^2 - h x.
- Dynamics: dx/dt = -∂U/∂x + ξ(t), <ξ(t)ξ(t')> = 2D δ(t-t'). Units: x dimensionless, t in seconds [s], D in [s^-1] (if x dimensionless), U in Joules [J] or k_B T [J] if thermal; here cognitive "energy" is abstract, use arbitrary cognitive potential units [cpu] but label as information [nats] or [bits] via Landauer k_B T ln 2. Better: frame free energy F in [J], or information-theoretic potential in [nats] with k_B T conversion. Since cognitive, state that U is in units of effective cognitive free energy [J] per decision coordinate, or use dimensionless U/k_B T.
- Background check operator: B(t) multiplicative gating on motor discharge M: M = g(x) · σ(θ - B(t)) where B(t) > θ blocks discharge.
- Kramers escape rate: Γ = (ω_0 ω_b / 2π γ) exp(-ΔU / D). Units [s^-1]. Breakdown when ΔU -> 0 (barrier vanishes) => Γ diverges, decision instantaneous/irrevocable.
- Critical slowing down: relaxation time τ ~ |μ - μ_c|^(-1/2) near saddle-node. Breakdown at μ = μ_c (elasticity limit).
- Verbatim quotes with [PAGE 529].

RETROCAUSAL_GENEALOGY: Historical/scientific lineage.
- James 1890, stream of consciousness, voluntarism vs intellectualism.
- Lineage to: Helmholtz (unconscious inference), Fechner (psychophysics), Wundt (apperception), Freud (repression/delayed decision?), Breuer, later: Lewin (field theory, quasi-stationary states), Janis (groupthink/vacillation), Tversky & Kahneman (prospect theory, conflict), Ratcliff diffusion decision model, Churchland, Damasio (somatic marker).
- Multi-week traps: deliberation lasting weeks/months; motives weakening then strengthening; false resolution; "for good and all" as narrative closure that may be retrospective confabulation. Trap: assuming past weakness predicts future strength (reversal trap). Trap: interpreting current quiescence as settled when it is only elastic deformation below fracture point.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: under stress, revert to habitual decision modes (impatience of deliberative state). James mentions proneness to act merely because action... (cut off). Regression to action to escape deliberative discomfort.
- Counter-trap: forced decision before equilibrium; false closure; "dam break" manufactured by deadline rather than genuine resolution.
- Clock: deliberation may last weeks/months; time itself becomes a motive (impatience). The clock imposes external boundary; internal equilibrium may never be reached. Meta-cognitive loop: monitoring one's own vacillation changes the vacillation (recursive). Theory of mind applied to self: representing future selves as possible, inclining to one then another; each representation alters the weighting of the other.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- This section should treat James's analogy literally and physically: material body within elasticity limits. Hooke's law regime vs fracture. Weather veto: environmental stressors as noise ξ(t) pushing system over barrier. Biomechanical: fatigue, circadian, neuromuscular noise as D. Physical veto: if the organism's physical substrate cannot sustain inward strain (allostatic load), the "dam" breaks irrespective of cognitive equilibrium.
- Veto conditions: (1) ΔU_eff <= 0 due to physiological fatigue; (2) external deadline imposes t_max < mean first passage time; (3) pharmacological/neural modulation changes D or bias h. These are vetoes that override the introspective "testing" regime.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. Need 3 scenarios where intervention vetoes the natural decision process, with verifiable predictions.
Scenario 1: Pharmacological damping of noise D (e.g., anxiolytic reduces attentional oscillation). Prediction: mean deliberation time increases as exp(ΔU/D); if D reduced by factor k, MFPT increases by exp(ΔU(1/D_low - 1/D_high)). Verifiable via reaction-time distributions in forced-choice tasks.
Scenario 2: Artificial deadline (hard clock) truncating deliberation at t_max < τ_escape. Prediction: choice distribution reflects initial bias h at t_max rather than asymptotic equilibrium; fraction of "dam-break" decisions becomes deadline-locked rather than motive-locked.
Scenario 3: Background motive amplification (subliminal priming of the dimly felt background). Prediction: effective barrier asymmetry increases; switch probability to primed option rises sigmoidally with priming strength; vacillation duration shortens according to Kramers rate with tilted potential.

Each must be verifiable and include prediction.

Need to reach >=1000 words. Let's ensure each section is substantial.

Check for "toy equations": I will use standard stochastic dynamics, Kramers rate, saddle-node bifurcation, critical slowing down. State assumptions. State units. State exact breakdown regimes. No fake ratios like Force/Fatigue.

No betting lines.

Cite [PAGE 529] and verbatim quotes.

Let's write.

Word count estimation: THINK_TRACE ~500 words. SOURCE ~300. RETRO ~250. RECURSIVE ~250. CROSS ~250. RLVR ~250. Total ~1800. Good.

Need to ensure XML sections exact names.

Be careful with LaTeX in XML: fine.

Let's produce final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The source passage from James’s Principles of Psychology, Vol. 2, [PAGE 529], describes deliberation not as a linear computation but as a sustained, oscillatory, metastable condition in which “foreground-reasons” and a “dimly felt” background motive coexist. The text explicitly states that “the background, however dimly felt, is always there; and its presence (so long as the indecision actually lasts) serves as an effective check upon the irrevocable discharge.” This is a gating function: a latent inhibitory operator that suppresses motor output while the system remains in the deliberative basin. The passage further notes that deliberation “may last for weeks or months,” that motives “wax strong again, and the stronger weaken,” and that “equilibrium is unreached.” These are signatures of a system hovering near a bifurcation without crossing it: a double-well potential in which the control parameter has not yet passed the critical value at which the barrier between wells vanishes.

The multi-hop derivation proceeds as follows. (1) Attentional oscillation and associative flow act as a stochastic forcing term ξ(t) on the decision coordinate x(t). (2) The background motive supplies a time-dependent bias or constraint B(t) that raises the effective barrier to discharge. (3) The “inclining, first to one then to another future, both of which we represent as possible” corresponds to trajectory hopping in a symmetric or weakly biased double-well U(x; μ). (4) James’s analogy to “the oscillations to and fro of a material body within the limits of its elasticity” maps the deliberative state onto Hookean deformation: inward strain accumulates without outward rupture, meaning the state variable remains bounded within the elastic regime |x| < x_elastic. (5) The breakdown condition—“if the elasticity give way, however, if the dam ever do break”—is the precise instant at which the potential barrier ΔU → 0, i.e., a saddle-node or spinodal bifurcation at which the metastable well ceases to exist and discharge becomes irreversible.

Gray-zone audit. James explicitly limits his account to “an introspective account of symptoms and phenomena” and relegates “all questions of causal agency, whether neural or spiritual, to a later page” [PAGE 529]. Therefore any neural implementation (e.g., drift-diffusion, attractor networks, basal ganglia gating) is an extrapolation, not a licensed inference from this page. The text cuts off mid-sentence at “proneness to act or to decide merely because action and” [PAGE 529], so the terminal clause of the impatience motive is unavailable. The analogy to material elasticity is qualitative; James provides no spring constant, no strain tensor, no fracture toughness, and no units for “inward strain.” The temporal scale “weeks or months” is not converted into a relaxation time τ or a mean first-passage time. Consequently, any equation introduced below must be clearly marked as a formal modeling frame imposed on the text, with explicit assumptions and breakdown regimes, not as a claim that James endorsed these mathematics.

Exact breakdown regimes to be specified later: (i) barrier collapse ΔU → 0 when the elasticity limit is exceeded; (ii) noise-dominated regime where the diffusion amplitude D satisfies D ≫ ΔU, abolishing stable vacillation; (iii) critical slowing down as the control parameter μ → μ_c, where the relaxation time τ diverges and deliberation can, in principle, continue indefinitely, matching James’s claim that the condition is “susceptible of indefinite continuance.”
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the decision coordinate be x ∈ [−1, 1], dimensionless, where x = −1 denotes inaction and x = +1 denotes action. Following [PAGE 529], define an effective cognitive free-energy potential U(x; μ, h, t) in joules [J], or equivalently in information units via Landauer conversion U/[k_B T ln 2] in bits:

U(x; μ, h) = (ΔU/4)(1 − x²)² − h x + μ x³   (1)

The quartic term creates two metastable wells (deliberation’s “one then another future”). The linear term h x is the static motive bias. The cubic term μ x³ breaks perfect symmetry and allows one well to weaken as the other strengthens, capturing James’s observation that “the weakened reasons will wax strong again, and the stronger weaken” [PAGE 529]. The control parameter μ governs proximity to the elasticity limit.

The stochastic dynamics of attention and association are modeled by an overdamped Langevin equation:

dx/dt = −∂U/∂x + ξ(t),   ⟨ξ(t)⟩ = 0,   ⟨ξ(t)ξ(t′)⟩ = 2D δ(t − t′)   (2)

where t is in seconds [s], x is dimensionless, and the noise intensity D carries units [s⁻¹] when x is dimensionless (or [J²·s] if x carries physical units). ξ(t) represents the “oscillations of our attention” and the “associative flow of our ideas” [PAGE 529].

The background check is a gating operator G[B(t)] that multiplies the motor-discharge flux M(x):

M_eff = M(x) · Θ(B_crit − B(t))   (3)

where Θ is the Heaviside step function and B(t) is the “dimly felt” background motive. As long as B(t) < B_crit, the “irrevocable discharge” is checked [PAGE 529]. Discharge becomes irrevocable only when B(t) ≥ B_crit or when the potential barrier collapses.

The escape rate from one well to the other under weak noise is given by Kramers’ formula:

Γ = (ω₀ω_b / 2πγ) exp(−ΔU_eff / D)   [s⁻¹]   (4)

where ΔU_eff is the barrier height [J], ω₀ and ω_b are attempt and barrier frequencies [s⁻¹], and γ is a damping coefficient [s⁻¹]. Mean deliberation time is τ_delib ≈ 1/Γ.

Breakdown regimes:
1. Elasticity/fracture limit: as the material-body analogy approaches its limit, ΔU_eff → 0. Then exp(−ΔU_eff/D) → 1 and Γ diverges; the “dam breaks” and “vacillation is over and decision is irrevocably there” [PAGE 529]. This is a saddle-node (spinodal) singularity at μ = μ_c.
2. Noise saturation: if D ≫ ΔU_eff, the system no longer resides in either well; vacillation loses meaning because the coordinate is noise-dominated.
3. Critical slowing: near μ → μ_c from below, the relaxation time τ ∼ |μ − μ_c^(−1/2) diverges, permitting the “indefinite continuance” James describes [PAGE 529].

All equations are formal impositions on [PAGE 529]; James supplies no numerical values for ΔU, D, γ, or μ_c, and no neural or spiritual causal mechanism is licensed by this page.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
James’s [PAGE 529] text sits at a historical crossroads. Its lineage runs backward through 19th-century psychophysics and forward into 20th- and 21st-century decision science. Backward: the “oscillations of our attention” and “associative flow of our ideas” echo Wundt’s apperception and Helmholtz’s unconscious inference, while the “background” check anticipates Freud’s later notion of repressed counter-motives that delay action without disappearing. The image of a “dam” holding back “motor consequences” recalls the hydraulic models of nervous energy current in the 1890s, in which psychic energy was treated as a fluid under pressure.

Forward: the double-well potential formalization maps directly onto Lewin’s field-theory quasi-stationary states and onto Janis’s analysis of group conflict and vacillation. The Kramers escape framing connects to Ratcliff’s diffusion decision model and to modern attractor-network accounts of cortical decision circuits. Most importantly, James’s distinction between “testing our reasons, not obeying them” [PAGE 529] prefigures the somatic-marker hypothesis: the body (the “material body within the limits of its elasticity”) registers inward strain before the mind declares a verdict.

Multi-week traps embedded in this genealogy: (1) the “weakness–strength reversal trap,” in which an observer interprets today’s pale motive as permanently dead, ignoring James’s warning that weakened reasons “will wax strong again” [PAGE 529]; (2) the “false closure trap,” in which a deadline or external pressure is mistaken for genuine equilibrium, producing a decision that feels irrevocable but is merely an elasticity-limit breach induced by time rather than motive resolution; (3) the “retrospective narrative trap,” in which the subject, after the dam breaks, reconstructs the deliberation as having been “for good and all” [PAGE 529], when in fact the transition was a stochastic barrier crossing enabled by noise and fatigue, not by rational weighing. These traps recur across weeks-long deliberations because the internal clock of motive waxing and waning operates on a different cadence than the calendar clock of external events.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory of mind here is second-order: the subject represents not only alternative futures but also represents herself as deliberating between them. James writes that “both of which we represent as possible,” which is a metarepresentational state—the mind holds two future selves in working memory and monitors its own inclination toward each [PAGE 529]. This monitoring changes the object monitored: each act of “testing” reweights the motives, producing the waxing and waning James describes.

Crisis habit regression operates as follows. Under prolonged inward strain, the organism becomes prone to “impatience of the deliberative state” [PAGE 529], a regress to motor discharge not because the reasons have been resolved but because the cost of maintaining the elastic deformation exceeds the subject’s tolerance. The habit is to act merely to terminate the discomfort of vacillation. This is a regressive policy: under stress, the decision system defaults to an escape-from-uncertainty action rather than a continue-deliberating policy.

The counter-trap is premature closure manufactured by an artificial clock. If an external deadline forces B(t) to cross B_crit or tilts h until ΔU_eff collapses before internal equilibrium is reached, the resulting decision is not “irrevocably there” in James’s sense of mature resolution; it is a deadline-induced fracture. The subject then experiences post-decision dissonance because the background motive was never genuinely integrated.

The clock itself is a recursive actor. Deliberation “may last for weeks or months” [PAGE 529], but calendar time exerts pressure through the impatience motive. As the clock advances, the utility of further testing declines, which changes B(t), which alters the gating operator in Eq. (3), which changes the probability of discharge. This forms a closed loop: self-model → time pressure → background motive → discharge probability → outcome → updated self-model. In crisis, the loop tightens; the subject regresses to the habit of acting simply because “action and…” [PAGE 529, sentence cut off], presumably “inaction is unbearable.” The counter-trap is to recognize that impatience is itself a motive, not evidence that equilibrium has been reached.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
James’s analogy to a material body “within the limits of its elasticity” [PAGE 529] invites a literal cross-layer veto analysis. A physical veto occurs when the biological substrate cannot sustain the inward strain of prolonged deliberation. Three layers can independently veto the “testing” regime:

1. Biomechanical/physiological layer: Allostatic load and neuromuscular fatigue increase the effective noise intensity D in Eq. (2) and reduce the barrier height ΔU_eff by degrading the precision of attentional gating. If fatigue drives D such that D ≥ ΔU_eff, the Kramers rate Γ in Eq. (4) rises exponentially and the dam breaks spontaneously, regardless of whether cognitive equilibrium has been reached. Units: D [s⁻¹], ΔU_eff [J]. Veto condition: D/ΔU_eff ≥ 1.

2. Circadian/metabolic layer: Glucose depletion and sleep pressure modulate the gain of the background check B(t) in Eq. (3). If metabolic state lowers B_crit or raises B(t) above threshold, discharge is enabled prematurely. This is a chemical veto on the introspective symptom layer.

3. Environmental/weather layer: External stressors (deadlines, social observation, ambient threat) act as an additive forcing term f_env(t) in dx/dt = −∂U/∂x + f_env(t) + ξ(t), with f_env in [J·m⁻¹] if x is spatialized, or in equivalent cognitive force units. A sufficiently large sustained f_env can tilt the potential until one well disappears (saddle-node at μ = μ_c), producing an environment-forced decision that feels internal but is externally vetoed.

Adjudication rule: When any layer’s veto condition is satisfied, the subjective experience of “testing our reasons, not obeying them” [PAGE 529] is overridden. The decision is still phenomenologically “irrevocable” once the dam breaks, but its causal provenance is physical/environmental rather than rational-equilibrative. James explicitly excludes causal agency from this page [PAGE 529], so these veto mechanisms are cross-layer extensions, not exegesis.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with falsifiable predictions. RLVR here denotes a reinforcement-learning verification regime in which an intervenor manipulates a control variable and observes whether the natural deliberative trajectory is vetoed.

Scenario 1 — Pharmacological damping of attentional noise. Intervention: administer a low-dose noradrenergic suppressor intended to reduce D in Eq. (2) by a measurable factor k > 1 during a multi-alternative forced-choice task with a known motivation conflict. Veto condition: D_post = D_pre/k. Prediction: mean deliberation time increases by the Kramers factor exp[ΔU_eff(1/D_post − 1/D_pre)] = exp[ΔU_eff(k − 1)/D_pre]. Verifiable via reaction-time distributions: right-skew should grow and the fraction of fast “impatience” errors should decline. If instead deliberation time does not change, the noise-damping assumption is falsified and the Jamesian background check is not the rate-limiting step.

Scenario 2 — Hard deadline truncation. Intervention: impose an exogenous deadline t_max shorter than the unperturbed mean first-passage time τ_delib from Eq. (4). Veto condition: t_max < τ_delib. Prediction: choice probabilities at t_max will reflect the instantaneous bias h and the initial well occupancy rather than the asymptotic equilibrium distribution. The “dam break” will be timestamp-locked to the deadline, not motive-locked. Verifiable by comparing psychometric curves under deadline vs. no-deadline: under deadline, the curve shifts according to initial h; under no deadline, it converges to the equilibrium set by the final motive balance. A mismatch falsifies the claim that the decision was “for good and all” [PAGE 529].

Scenario 3 — Background-motive amplification. Intervention: deliver subliminal primes that selectively amplify the “dimly felt” background motive B(t) for one alternative without changing foreground reasons. Veto condition: B(t) crosses B_crit in Eq. (3) before foreground equilibrium. Prediction: the switch probability to the primed alternative should rise sigmoidally with priming strength, and mean vacillation duration should fall according to Γ ∝ exp(−ΔU_eff(B)/D), where ΔU_eff(B) decreases linearly with B near the bifurcation. Verifiable via eye-tracking or mouse-tracking in a conflict task: increased priming should reduce time-in-state and increase first-passage probability to the primed option. If priming changes choice but not response time, the barrier-collapse mechanism is not operative.
</RLVR_COUNTERFACTUAL_VETOES>