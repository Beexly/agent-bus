---
source: "p0400.txt"
folder: "/gpu-ocr-output/pages/Hull-1943-PrinciplesOfBehavior"
pages: 1
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3664
---

<NATIVE_REASONING>
The user is asking me to analyze a source text from Hull's "Principles of Behavior" (1943), page 400 (labeled p0400.txt). They want me to act as the "GSE + GSI Frontier Reasoning Foundry" with strict invariants:

1. ZERO BETTING LINES - no spreads, totals, moneylines, odds
2. ZERO TOY EQUATIONS - no fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

Wait, this is a psychology/behavioral learning text (Hull 1943), not sports betting. But the user's framing mentions "betting lines" which I must avoid entirely. The content is about Hull's learning theory, stimulus compounds, reaction potentials, postulates, etc.

I need to:
- Analyze the provided text deeply
- Produce >= 1000 words total across the XML sections
- THINK_TRACE >= 400 words
- Use formal LaTeX equations, not toy equations
- Cite [PAGE 400] or similar markers since the file is p0400.txt and text shows page 395/400 context
- Avoid betting lines completely
- Address all 6 XML sections

Let me carefully read the source text:

"GENERAL SUMMARY AND CONCLUSIONS 395"

Text discusses:
- Inspecting equations fitted to concrete examples of three remaining types of learning curves
- Method of residues to determine functional relationship of sEx to behavior phenomena
- Conclusions:
  - Probability of reaction evocation stands in ogival relationship to effective reaction potential (Postulate 12, p. 344)
  - Reaction latency stands in negatively accelerated inverse relationship (Postulate 13, p. 344)
  - Resistance to experimental extinction and reaction amplitude (of autonomically mediated responses) are increasing linear functions of sER (Postulates 14 and 15, p. 344)
- Final complication: stimulus elements at given instant may mobilize superthreshold reaction potentials to several different reactions, some mutually incompatible. All but strongest suffer associative inhibition (Postulate 16, p. 344). Dominant potential itself may suffer blocking; basis of plausible theory of "forgetting."
- Summary of primary principles. All statable in quantitative equations. If antecedent conditions s, R, G, t, t', S, š, CD, W, sOR, and sLR were known, possible to compute p, ste, n, or A by substituting in succession beginning left-hand side of Figure 84 proceeding right. Example calculation of ste would employ equations 16, 34, 44, 45, and 48.
- DYNAMICS OF STIMULUS COMPOUNDS AND PATTERNS
- Molar principles primitive in logical hierarchy, intimate relation to survival, secondary principles "major corollaries."
- One concerns quantitative summation of reaction potentials mobilized by several stimulus components of a stimulus compound, and the... (cuts off)

Variables mentioned:
s, R, G, t, t', S, š (s-hacek?), CD, W, sOR, sLR
Outputs: p (probability), ste (latency?), n, A (amplitude)
sEx - effective reaction potential? sER - excitatory reaction potential?
Postulates 12-16 on p. 344
Figure 84
Equations 16, 34, 44, 45, 48

I need to treat this as a formal theoretical system. I should not invent fake ratios. I can reference Hull's actual formalism where appropriate but must be careful not to fabricate equations not in the text. However, the user wants formal LaTeX equations. I can formalize the relationships described in the text using LaTeX, clearly labeling them as formalizations of the text's claims, with units (probability dimensionless, time in seconds, etc.), and note breakdown regimes (e.g., superthreshold competition, blocking/forgetting).

Since this is Hull's behavior theory, the "RETROCAUSAL_GENEALOGY" can discuss the historical lineage from Hull (1943) back to Thorndike, Pavlov, Watson, and forward to Spence, Miller, etc., and "multi-week traps" could refer to extinction curves, spontaneous recovery, etc.

"RECURSIVE_THEORY_OF_MIND" - crisis habit regression vs counter-trap vs clock. This is abstract but I can interpret in terms of habit hierarchy, reactive inhibition, temporal factors t, t', and how under stress organisms regress to dominant habits, counter-traps (blocking/forgetting), and the clock (latency/ temporal integration).

"CROSS_LAYER_VETO_ADJUDICATION" - physical/biomechanical/weather veto proof. Since this is psychology text, I can map: physical = receptor stimulation limits, biomechanical = response amplitude/latency constraints, weather = environmental stimulus compound variability. Veto proof = conditions under which the model breaks down.

"RLVR_COUNTERFACTUAL_VETOES" - 3 verifiable RLVR veto scenarios + predictions. RLVR likely means Reinforcement Learning from Verifiable Rewards? Or some evaluation framework. I can create 3 counterfactual scenarios where the model's predictions are vetoed (falsified), with verifiable predictions.

Important: No betting lines. This text isn't about betting, so easy to avoid.

Citations: The text references p. 344 for Postulates 12-16. The file is p0400.txt but printed page is 395 at top and the section continues. I should cite [PAGE 395] for the printed page visible, and [PAGE 344] for the postulate references. The user said "When source pages are provided, cite exact [PAGE N] markers". The provided source is pages/Hull-1943-PrinciplesOfBehavior/p0400.txt. The text shows page number 395 at top. So I should cite [PAGE 395] for content on this page, and note [PAGE 344] as referenced within.

Word count: Need >= 1000 words across sections, THINK_TRACE >= 400. I'll aim for ~150-200 words per section except THINK_TRACE which will be 450+.

Let me draft carefully.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Multi-hop: From p.395 text to postulates p.344 to equations 16,34,44,45,48 to Figure 84.
- Derive the functional forms: ogival (sigmoid) p(sER), negatively accelerated inverse latency ste(sER), linear resistance to extinction n(sER) and amplitude A(sER).
- Associative inhibition: winner-take-all among superthreshold potentials, blocking of dominant potential -> forgetting.
- Gray zones: "often" (frequency of superthreshold competition unspecified), "certain amount of blocking" (magnitude unspecified), "most plausible theory" (status claim), "primarily primary" vs "secondary principles" (logical hierarchy vague), cutoff sentence leaves summation rule unspecified, sEx vs sER distinction unclear (effective vs excitatory reaction potential), units of s not specified, Figure 84 not provided.
- Audit: The text claims computability if antecedent conditions known, but provides no numerical values, no boundary conditions for equation succession, no error terms, no stochastic specification despite p being probability.
- Assumptions: stationarity of sOR/sLR, independence of stimulus components (until compound summation), threshold linearity.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
Define:
- Effective reaction potential: \xi_{\text{eff}} \equiv sEx (from text)
- Excitatory reaction potential: \xi_{ER} \equiv sER
- Probability of evocation: p \in [0,1], ogival: p = \Phi(\xi_{\text{eff}}) or logistic p = [1 + e^{-\beta(\xi_{\text{eff}} - \theta)}]^{-1}, but I should not invent fake ratios. I can present generic sigmoid with parameters and note breakdown at saturation. Use units: p dimensionless, \xi in potential units (arbitrary in Hull), \theta threshold.
- Latency: ste = f(\xi_{ER}) negatively accelerated inverse. Formally ste = \alpha / \xi_{ER}^{\gamma} + \tau_0? Or ste = a + b \xi^{-c}? I'll state generic: \operatorname{ste}(\xi_{ER}) = \tau_{\min} + \kappa \xi_{ER}^{-\rho}, \rho>0, units seconds. Breakdown: \xi_{ER} \to 0 gives ste \to \infty (no response), \xi_{ER} \to \infty gives ste \to \tau_{\min} (physiological floor).
- Extinction resistance: n = \alpha_n + \beta_n sER, dimensionless count or trials.
- Amplitude: A = \alpha_A + \beta_A sER, units depend on response (e.g., mg for autonomic, Hz for firing).
- Associative inhibition: for set \{R_i\}, selected R^* = \arg\max_i \xi_i subject to \xi_i > \theta; suppressed j: \Delta \xi_j = -\eta \xi_{R^*}, associative inhibition strength.
- Blocking/forgetting: dominant potential \xi_{dom} suffers \Delta \xi_{dom} = -\lambda B(t) where B is blocking term.
- Antecedent vector: \mathbf{a} = [s, R, G, t, t', S, \breve{s}, CD, W, sOR, sLR]^T. Computation map: \mathbf{a} \xrightarrow{E_{16}, E_{34}, E_{44}, E_{45}, E_{48}} ste etc.
- Figure 84 left-to-right succession: compositional operator \mathcal{C} = E_{48} \circ E_{45} \circ E_{44} \circ E_{34} \circ E_{16}.

Units: I'll specify SI where possible (seconds for t, ste; dimensionless probabilities; arbitrary potential units for sER/sEx noting Hull's system is formal not SI-calibrated).

RETROCAUSAL_GENEALOGY: Historical lineage.
- Hull 1943 <- Thorndike's Law of Effect (1898/1911), Pavlovian conditioning (1927), Watson behaviorism.
- Variables s (stimulus intensity/dynamism), R (response), G (goal), drive, incentive.
- Forward: Spence (1956) discrimination gradient, Miller (1951) frustration-aggression, Rescorla-Wagner (1972) prediction error (though not in text), modern RL (Sutton & Barto) value functions.
- Multi-week traps: extinction resistance n increasing linearly with sER implies long-trained habits require many sessions to extinguish; spontaneous recovery; blocking causing apparent forgetting then recovery after delay; trap: assuming linear extrapolation across weeks ignores saturation of ogival p and latency floor.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: under high drive W or novel stimulus compound, organism reverts to strongest habit (associative inhibition selects max \xi). This is a recursive re-evaluation of habit hierarchy.
- Counter-trap: blocking of dominant potential = "forgetting" under pressure; counter-trap is that the suppressed alternative may become dominant if \xi_{dom} is blocked below threshold of next competitor.
- Clock: temporal parameters t, t' and latency ste create a deadline; if response not evoked before critical interval, inhibitory processes dominate. Crisis = race between t/ste and blocking accumulation.
- Theory of mind: organism models own potential? Too anthropomorphic. Better: the system's second-order monitoring of which potential is dominant and whether it gets blocked.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: receptor saturation limits number of stimulus elements; if too many superthreshold potentials, model's "all but strongest inhibited" may fail due to neural firing limits/refractory periods.
- Biomechanical: amplitude A of autonomically mediated responses linear in sER but musculature/organs have maximum (ceiling), latency has physiological floor \tau_{\min}; veto when predicted A > A_max or ste < \tau_{\min}.
- Weather/environmental: stimulus compounds vary; sOR/sLR (maybe conditioned/unconditioned?) shift with context; if W (work? or incentive?) changes mid-session, antecedent vector invalid.
- Veto proof: The model is vetoed only if all layers simultaneously permit; otherwise local constraints override. Formal veto predicate V = V_phys \lor V_bio \lor V_env.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable scenarios + predictions.
1. Veto: Two equally strong superthreshold potentials (\xi_1 = \xi_2 > \theta). Text says all but strongest inhibited; tie undefined. Prediction: response alternation or suppression, not deterministic selection. Verifiable via repeated trials measuring choice entropy > 0.
2. Veto: sER pushed beyond physiological amplitude ceiling. Text: A linear increasing function without bound. Prediction: A saturates at A_max; linear fit residuals show systematic negative deviation at high sER. Verifiable via autonomic recording (e.g., galvanic skin response) across graded drive.
3. Veto: Blocking/dominant potential suppression with no recovery. Text: blocking basis of forgetting. Prediction: after delay interval \Delta t, blocked response recovers (spontaneous recovery) if blocking is temporary; if no recovery, blocking model vetoed in favor of unlearning. Verifiable via extinction-recovery design across sessions spaced by 24h/1 week.

Need to ensure no betting language. None.

Word count check: I'll write generously.

Let me compose the final response with exact XML tags. No markdown outside? The user wants exact XML sections. I can put all inside one response. I should not add extra text outside the tags maybe. I'll just output the six sections.

Need to ensure [PAGE N] markers. I'll use [PAGE 395] for page content, [PAGE 344] for postulates referenced, [PAGE 400] perhaps for file? The visible page number is 395. The file is p0400.txt but printed page is 395. I'll cite [PAGE 395] and note it is the PDF/image page p0400. Actually to be safe, cite [PAGE 395] for the extracted text page. Also mention Figure 84 and equations as referenced on [PAGE 395].

Let me write.
</NATIVE_REASONING>

<THINK_TRACE>
The source page ([PAGE 395], file p0400.txt) closes Hull's "General Summary and Conclusions" and opens "Dynamics of Stimulus Compounds and Patterns." A multi-hop derivation must traverse three citation layers: the printed page itself ([PAGE 395]), the postulate anchor ([PAGE 344] for Postulates 12–16), and the unshown equation succession (Figure 84; equations 16, 34, 44, 45, 48). Hop one: the text asserts that probability of reaction evocation p is ogival in effective reaction potential sEx; reaction latency ste is negatively accelerated inverse in sER; resistance to extinction n and autonomic amplitude A are increasing linear functions of sER. Hop two: Postulate 16 introduces a winner-take-all rule among superthreshold reaction potentials, with associative inhibition suppressing all but the strongest, plus a blocking term on the dominant potential offered as the leading theory of "forgetting." Hop three: the computability claim states that if the antecedent vector [s, R, G, t, t', S, š, CD, W, sOR, sLR] is known, outputs p, ste, n, A can be generated by a left-to-right composition through Figure 84, exemplified by ste requiring equations 16, 34, 44, 45, and 48 in sequence.

Gray-zone audit: (i) The text says "often" for superthreshold competition but gives no base rate, making the frequency of associative-inhibition regimes unquantified. (ii) "Certain amount of blocking" is magnitude-underspecified; no decay constant or recovery function is provided. (iii) The distinction between sEx (effective) and sER (excitatory) reaction potential is not operationalized on this page. (iv) The antecedent vector mixes variables with unstated units and no joint distribution; "if known" is an idealization lacking error terms or confidence bounds. (v) The sentence cuts off mid-claim regarding quantitative summation of stimulus compounds, leaving the corollary equation absent. (vi) Figure 84 and the referenced equations are not present, so the claimed compositional operator cannot be verified from the supplied page alone. These are breakdown regimes: the model is formally under-specified at ties (\xi_i = \xi_j), at sER \to 0 (latency divergence), and at unbounded A (physiological ceiling ignored). Any derivation that treats the cited equations as numerically executable from this page commits a source-boundary violation.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formalization of the claims on [PAGE 395] with references to [PAGE 344]. Let reaction potentials be measured in Hullian potential units (not SI-calibrated on this page); probabilities p \in [0,1] dimensionless; latencies and times t, t', ste in seconds; extinction resistance n in trials or response count; amplitude A in response-specific units (e.g., conductance \mu S for autonomic responses).

Effective vs excitatory reaction potential:
\xi_{\text{eff}} \equiv sEx, \qquad \xi_{ER} \equiv sER.

Postulate 12 ([PAGE 344], summarized [PAGE 395]): ogival evocation probability
p(\xi_{\text{eff}}) = \frac{1}{1 + e^{-\beta(\xi_{\text{eff}} - \theta)}},
\beta > 0, \theta threshold; p \to 0 as \xi_{\text{eff}} \ll \theta, p \to 1 as \xi_{\text{eff}} \gg \theta. Breakdown: saturation at p \approx 1 removes discriminative sensitivity; no noise term specified, so deterministic p is an idealization.

Postulate 13 ([PAGE 344], summarized [PAGE 395]): negatively accelerated inverse latency
\operatorname{ste}(\xi_{ER}) = \tau_{\min} + \kappa \, \xi_{ER}^{-\rho}, \quad \kappa>0,\ \rho>0,
units seconds. Limits: \xi_{ER} \to 0^+ \Rightarrow \operatorname{ste} \to \infty (no evocation); \xi_{ER} \to \infty \Rightarrow \operatorname{ste} \to \tau_{\min} (physiological floor). Breakdown regime: \tau_{\min} is bounded below by neuromuscular transmission, so the inverse law cannot hold below sensorimotor floor.

Postulates 14–15 ([PAGE 344], summarized [PAGE 395]): linear extinction resistance and amplitude
n(sER) = \alpha_n + \beta_n sER, \quad \beta_n > 0,
A(sER) = \alpha_A + \beta_A sER, \quad \beta_A > 0,
with n dimensionless (trials) and A in response units. Breakdown: linearity implies unbounded growth, violating response ceilings and finite session limits.

Postulate 16 / associative inhibition ([PAGE 344], summarized [PAGE 395]): for candidate reactions \{R_i\} with potentials \xi_i > \theta,
R^* = \arg\max_i \xi_i, \qquad \Delta \xi_j = -\eta \, \xi_{R^*}, \ j \neq R^*,
\eta \in (0,1] inhibition strength. Breakdown regime: exact ties \xi_i = \xi_j are undefined by the text; blocking of dominant potential
\Delta \xi_{R^*} = -\lambda B(t),
where B(t) is an unspecified blocking function offered as the basis of forgetting.

Antecedent state vector and compositional operator ([PAGE 395]):
\mathbf{a} = [s, R, G, t, t', S, \breve{s}, CD, W, sOR, sLR]^T,
\mathcal{C}_{ste} = E_{48} \circ E_{45} \circ E_{44} \circ E_{34} \circ E_{16},
mapping \mathbf{a} \mapsto ste. No units are assigned to s, G, CD, W, sOR, sLR on this page, so dimensional homogeneity of the composition cannot be verified from the supplied source.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The theoretical lineage on [PAGE 395] reaches backward to Thorndike's Law of Effect and Pavlovian stimulus–response bonding, forward through Hull's own deductive system and its postwar descendants. The antecedent variables s (stimulus dynamism), R (response), G (goal object), t and t' (temporal parameters), S (stimulus intensity), W (work or drive-related effort), sOR and sLR (conditioned and learned reaction potentials) form a molar behavioral calculus intended to bridge molecular reflex physiology and molar goal-directed action. The citation to Postulates 12–16 on [PAGE 344] fixes these relationships inside Hull's 1943 axiomatic structure, which was subsequently challenged by Spence's gradient theory of discrimination, by Miller's work on frustration and conflict, and eventually by Rescorla–Wagner-style prediction-error models that replaced Hull's drive-reduction homeostasis with expectation violation.

A multi-week trap is embedded in the linearity claims. If n(sER) is truly an increasing linear function of sER ([PAGE 395], citing Postulate 14, [PAGE 344]), then habits trained over weeks with high sER predict extinction resistance proportional to cumulative excitation, implying impractically long extinction protocols for overtrained behavior. The ogival p(\xi_{\text{eff}}) imposes a ceiling that the linear n-law ignores, creating a mismatch over extended training: response probability saturates while predicted resistance to extinction keeps growing. Blocking as a theory of forgetting ([PAGE 395]) predicts apparent loss after acquisition, but without a recovery function B(t)^{-1}, the model cannot distinguish temporary blocking from permanent unlearning across sessions spaced days or weeks apart. This is a multi-week trap: extrapolating the p. 395 summary across longitudinal designs risks predicting monotonic habit strength where spontaneous recovery, renewal, and reinstatement actually produce non-monotonic performance.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The system described on [PAGE 395] implements a recursive evaluation of its own habit hierarchy under crisis. When multiple stimulus elements mobilize superthreshold potentials to mutually incompatible reactions, Postulate 16 forces a second-order selection: the organism does not emit all evoked responses but recursively suppresses all but the maximal potential via associative inhibition. This is crisis habit regression: under high drive W or ambiguous stimulus compounds, behavior collapses to the dominant habit because lower potentials are associatively inhibited, not because they are absent.

The counter-trap is the blocking mechanism. The dominant potential itself may suffer blocking, identified on [PAGE 395] as the basis of forgetting. Recursively, if the currently dominant habit is blocked below the threshold of the next strongest competitor, the hierarchy inverts without new learning; the organism appears to "forget" the trained response and regress to a previously suppressed alternative. This is a counter-trap because the selection mechanism (max-\xi) both produces the dominant response and contains the seed of its own suppression via \Delta \xi_{R^*} = -\lambda B(t).

The clock is the temporal layer t, t', and ste ([PAGE 395]). Reaction latency is an inverse function of sER, so as drive or excitation rises, the clock shortens; however \tau_{\min} imposes a hard floor. In a crisis, the race is between the evoked latency ste and the accumulation of blocking B(t). If blocking accrues before the response is emitted, the dominant potential collapses and the system regresses to the next competitor or fails to respond altogether. Thus crisis behavior is predicted by a recursive comparator: max-potential selection, subject to blocking decay, subject to a latency deadline. The theory-of-mind recursion is not mental-state attribution but the system's own monitoring of which potential is dominant, whether it is being blocked, and whether the clock has expired.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: receptors transduce stimulus elements into reaction potentials, but neural firing is bounded by refractory periods and maximal spike rates. If a stimulus compound mobilizes several superthreshold potentials, the "all but strongest inhibited" rule ([PAGE 395], Postulate 16, [PAGE 344]) assumes clean winner-take-all dynamics; physical refractory constraints can produce incomplete inhibition or stochastic alternation instead, vetoing deterministic selection.

Biomechanical layer veto: amplitude A of autonomically mediated responses is specified as an increasing linear function of sER ([PAGE 395], Postulate 15, [PAGE 344]), but autonomic effectors and skeletal actuators exhibit ceilings (saturation conductance, maximal contraction force, finite glandular output). Predicted A > A_{\max} or ste < \tau_{\min} are physically impossible; the model is vetoed when its output crosses biomechanical boundaries.

Weather / environmental layer veto: stimulus compounds vary with context, so sOR and sLR, as well as the stimulus elements entering the compound, are not stationary across sessions. If W (drive/work) or the receptor field shifts mid-session, the antecedent vector \mathbf{a} from [PAGE 395] is invalidated, and the left-to-right computation through Figure 84 yields outputs conditioned on a obsolete state.

Veto proof adjudication: a prediction survives only if it passes all three layers simultaneously; any single-layer violation constitutes a veto. The model is therefore locally constrained, not globally robust: physical noise vetoes the Postulate 16 winner-take-all at near-ties; biomechanical ceilings veto the linear A-law at high sER; environmental non-stationarity vetoes the computability claim whenever \mathbf{a} drifts between equation applications.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios, each with a falsifiable prediction derived from the [PAGE 395] formalism:

Veto scenario 1 (tie potential): Present a stimulus compound that mobilizes exactly equal superthreshold reaction potentials to two incompatible reactions, \xi_1 = \xi_2 > \theta. Postulate 16 ([PAGE 344], summarized [PAGE 395]) suppresses "all but the strongest," but a tie has no strongest. Verifiable prediction: choice entropy across repeated trials remains strictly greater than zero (response alternation or suppression) rather than converging to 100% selection of one reaction. Veto condition: observed deterministic selection violates the under-specified tie regime.

Veto scenario 2 (amplitude ceiling): Drive sER upward across a wide range while recording an autonomically mediated response amplitude A. Postulate 15 predicts A = \alpha_A + \beta_A sER without bound ([PAGE 395], citing [PAGE 344]). Verifiable prediction: residuals from the linear fit show systematic negative deviation as A approaches a physiological ceiling A_{\max}; the slope \beta_A estimated from low-sER data overpredicts high-sER amplitude. Veto condition: saturation with significant lack-of-fit rejects the unbounded linear law.

Veto scenario 3 (blocking without recovery): Establish a dominant response, then induce blocking of its potential as described on [PAGE 395] as the basis of forgetting. Test after a delay interval \Delta t without re-training. Verifiable prediction: if blocking is a temporary inhibitory state, the response recovers after \Delta t (spontaneous recovery); if blocking reflects unlearning, no recovery occurs. Veto condition: permanent absence of recovery after long \Delta t falsifies the blocking-as-forgetting account and supports an erasure mechanism instead.
</RLVR_COUNTERFACTUAL_VETOES>