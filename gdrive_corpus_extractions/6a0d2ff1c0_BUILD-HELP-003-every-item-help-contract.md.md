---
source: "BUILD-HELP-003-every-item-help-contract.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/help-education-ux/claude-build-queue/cards"
pages: 1
model: alibaba_gse:qwen-plus-character
words: 2471
---

<THINK_TRACE>
The "Every item help contract" (BUILD-HELP-003) establishes a rigorous psychological and information-theoretic boundary condition for the Galaxy Sports Edge (GSE) product. It mandates that any interaction node within the system must achieve user comprehension and actionable value within a 10-second temporal window, while simultaneously enforcing strict legal boundaries to prevent proprietary methodology leakage and ensuring responsible play safeguards. To deeply evaluate this against the GSE + GSI Frontier Reasoning Foundry's invariants—specifically Zero Toy Equations, Zero Betting Lines, and >=1,000-word depth—we must deconstruct the 10-second constraint through the lens of human cognitive load, Shannon entropy, and Markovian state transitions.

First, the "10-second comprehension" metric is not an arbitrary UX heuristic; it maps directly to the physiological limits of human working memory and attention span. Cognitive science posits that conscious, sustained focus without external scaffolding decays exponentially over time. The contract requires transforming complex, proprietary frontier reasoning outputs into low-entropy signals that can be absorbed almost instantaneously. This necessitates a high signal-to-noise ratio in the UI presentation. If we model the user's cognitive state as a probability distribution over possible interpretations of the screen, the goal is to maximize the reduction in uncertainty (i.e., mutual information) between the interface element and the user's understanding within $t \le 10$ seconds. If the text is dense or ambiguous, the conditional entropy remains high, violating the core acceptance criterion.

Secondly, the explicit exclusion of "founder-only methodology leakage" and "fake certainty" introduces a profound epistemic challenge. The underlying GSE models might output high-confidence projections based on complex biomechanical vetoes or retrocausal genealogies, but the front-end "help contract" acts as a necessary lossy compression layer. It must communicate utility (e.g., "this metric indicates injury risk") without exposing the exact mathematical singularity or the specific recursive theory of mind algorithms driving the assessment. Furthermore, avoiding "fake certainty" means the help text must probabilistically qualify its statements, avoiding absolute predictions. This aligns perfectly with the Foundry's mandate against toy equations; the help text cannot simplify complex physics (like SI unit breakdowns or weather veto proofs) into reductive, deterministic rules. Instead, it must use precise natural language to describe the bounds of the prediction intervals, ensuring the user understands the stochastic nature of the analytics.

Third, the implementation plan demands "reduced-motion behavior" and "mobile readability." From a systems perspective, reducing motion is not merely an accessibility toggle; it is a modulation of the temporal frequency of information delivery. High-frequency visual updates increase the metabolic cost of processing for the user. By throttling these updates (reducing motion), the system effectively lowers the bandwidth requirement of the visual channel, relying more heavily on static textual cues, which ties back to the requirement that the text "sounds human" and provides a clear next action. Mobile constraints introduce spatial limitations, forcing a prioritization of the most salient features of the help contract—summary, action, trust note, media—requiring a tightly optimized layout algorithm.

Finally, the "Duplicate Gate" analysis notes that this extends existing items with "page-level teachability." This implies a shift from global documentation (a monolithic manual) to localized, contextual learning vectors. The gray-zone audit reveals a tension: how much detail can be provided contextually before overwhelming the 10-second limit? The contract resolves this by mandating a "media/visual path"—offloading complex explanations to videos or interactive tables, thereby keeping the immediate textual payload minimal while preserving deep explainability for motivated users. This creates a multi-layered information architecture where the surface layer guarantees rapid acquisition of intent, and the deeper layers provide the verifiable RLVR counterfactual evidence required for advanced analytical consumption.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
To formalize the "10-second comprehension" and "proprietary boundary" constraints of BUILD-HELP-003 [PAGE 1], we must establish rigorous information-theoretic and probabilistic operators. The source dictates: "Users need to find value in 10 seconds... No founder-only methodology leakage. No fake certainty."

**1. Temporal Mutual Information Bound**
Let $U(t)$ represent the user's knowledge state at time $t$, modeled as a discrete random variable over the semantic space of the GSE feature. Let $S$ represent the static content rendered by the help contract (summary, action, trust note, visual). The core objective is to maximize the mutual information transferred within the temporal bound $\tau = 10$ seconds.
$$ I(U(\tau); S) = H(U(\tau)) - H(U(\tau) | S) $$
where $H$ denotes the Shannon entropy in bits. The "10-second comprehension" criterion translates to requiring that the residual uncertainty $H(U(\tau) | S)$ falls below a critical threshold $\epsilon_{comp}$, i.e., the user has achieved operational clarity.
Assumption: Human reading speed averages 250 words per minute (wpm), meaning maximum lexical intake within 10 seconds is approx. 41 words. Thus, the vocabulary set $V$ utilized in the "short summary" and "next action" is strictly bounded.
Singularity Regime: As the complexity of the underlying GSI model approaches infinity (infinite parameters, unbounded retrocausal chains), the entropy $H(S)$ required to accurately represent it diverges. The compression ratio $C = H(Model) / H(S)$ approaches a singularity, demanding extreme lossy abstraction to fit the 10-second constraint.

**2. Epistemic Integrity and Certainty Bounds**
The prohibition against "fake certainty" and "methodology leakage" is enforced via a bounded confidence interval operator. Let $Y$ be the true outcome of a sporting event and $\hat{Y}$ be the GSE analytical output presented to the user. The system must avoid deterministic mappings ($P(Y|\hat{Y}) = 1$).
Instead, the help contract displays a probabilistic bound:
$$ P(Y \in [\hat{Y} - \delta, \hat{Y} + \delta] | \mathcal{D}_{public}) \geq 1 - \alpha $$
Here, $\mathcal{D}_{public}$ represents the explicitly shared, non-proprietary data subset used for the explanation. The parameter $\alpha$ (e.g., 0.05) ensures the statement is statistically sound without guaranteeing the result. 
Methodology Leakage Prevention: Let $\Theta_{founder}$ be the private, high-dimensional parameter space of the proprietary GSE model. The displayed equation or logic must satisfy the orthogonality condition:
$$ \frac{\partial}{\partial \Theta_{founder}} (\text{Displayed Logic}) = 0 $$
Meaning the user's interpretation of the help text is mathematically independent of the hidden weights. 

**3. Compliance Entropy Filter**
Given the "responsible-play-safe copy" requirement, we define a compliance penalty function $\mathcal{L}_{compliance}(T)$ applied to the generated text $T$:
$$ \mathcal{L}_{compliance}(T) = \lambda_1 \cdot \mathbb{I}(\text{gambling\_cue} \in T) + \lambda_2 \cdot \mathbb{I}(\text{deterministic\_promise} \in T) $$
Where $\mathbb{I}$ is the indicator function. The optimization target for the copy generation is minimizing $\mathcal{L}_{compliance}$ subject to maximizing $I(U(\tau); S)$.
Units: Entropy (bits), Probability (dimensionless scalar), Time (seconds). Breakdown occurs if the required visual complexity exceeds human saccadic tracking limits (~6 degrees of visual angle per fixation), rendering the 10-second bound physically impossible regardless of text optimization.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The architectural lineage of BUILD-HELP-003 does not stem purely from modern Agile development, but traces back to mid-20th-century information design and aviation safety protocols. Historically, the requirement for rapid comprehension under stress led to the development of checklists and illuminated push-button interfaces in early jet aircraft. A pilot flying into bad weather needed immediate, unambiguous status feedback without parsing complex engine telemetry—a direct ancestor to the "10-second comprehension" mandate.

In the realm of software, this philosophy evolved through the "direct manipulation" paradigm pioneered by Xerox PARC in the 1970s and 80s, moving away from command-line syntax toward iconographic affordances. However, the specific tension between providing value and hiding proprietary complexity—the "black box" problem—finds its scientific roots in the control theory of the 1960s and the subsequent rise of machine learning interpretability debates in the 2010s. As predictive models grew too complex for human reverse-engineering, the need for a "contract"—a simplified, safe interface layer—became paramount.

The "multi-week trap" associated with this build lies in the seductive ease of creating generic tooltips or static FAQ pages. Product teams often fall into the trap of writing lengthy, academic definitions for complex metrics. This violates the 10-second rule and fails the "human sound" test. Furthermore, there is a historical precedent in financial trading platforms where over-explaining proprietary algorithms led to regulatory scrutiny and strategy degradation (front-running). The GSE contract must navigate this by offering *utility* (what to do next) rather than *mechanism* (how we calculated it). Failing to rigorously enforce the "no methodology leakage" clause risks turning every help modal into a roadmap for competitors or a liability vector if the model fails, hence the strict retrocausal auditing of past help implementations to ensure they never promised "fake certainty."
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
From a crisis habit regression perspective, when a GSE user encounters a novel, highly abstract visualization (e.g., a recursive biomechanical fatigue heatmap), their default cognitive response is often panic or dismissal. They lack the frame of reference to map the visual data to their internal model of sports performance. This is a theory-of-mind mismatch: the system knows something the user doesn't, and the user senses this asymmetry, leading to distrust.

The "Every item help contract" serves as a real-time alignment mechanism. It forces the system to adopt the user's mental state. When the user hovers or focuses on an item, the system instantly deploys the contract: "Here is what you are seeing (summary), here is why it matters to your goals (value), and here is the safest next step (action)." This prevents the user from spiraling into confusion.

However, a sophisticated counter-trap exists. Advanced users or analysts might feel patronized by overly simplistic "human-sounding" copy. They might perceive the 10-second summary as a dumbing-down of the truth. To counter this, the contract includes the "media/visual slot" and the "trust note." The trust note explicitly states the bounds of the analysis ("This projection carries a 15% variance margin"), which appeals to the expert user's desire for precision.

Furthermore, the "clock" plays a crucial role in this psychological loop. The 10-second limit is not just a hard cap; it is a pacing mechanism. If the user reads the summary in 3 seconds and watches the 4-second micro-interaction, they reach the "next action" button exactly when their cognitive arousal is peaking, optimizing conversion or engagement. If the text is too long, the clock ticks out, attention dissipates, and the user bounces. Thus, the contract is a recursive game: the AI predicts the user's attention decay, tailors the information density to beat that decay, and constantly monitors eye-tracking or scroll metrics to refine the next iteration of the copy.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The "Every item help contract" is subject to severe cross-layer vetoes originating from physical, biomechanical, and environmental realities. The software cannot exist in a vacuum; it is ultimately constrained by the laws of physics governing both the human body and the devices they use.

**Physical/Biomechanical Veto:** The 10-second reading constraint is fundamentally tethered to human ocular physiology. Average adult saccadic velocity allows for the processing of roughly 10 to 12 characters per fixation, with a fixation duration of 200-300 milliseconds. If a "short summary" contains three sentences of average length, the cumulative time required to track line breaks and process semantic syntax will inevitably exceed the 10-second threshold. Therefore, the UI/UX framework must possess a "word count veto." If the drafted copy exceeds ~30 words, the component automatically flags a P0 violation, preventing deployment. Additionally, reduced-motion behaviors act as a neurological veto; users with vestibular disorders or migraines cannot process parallax scrolling or continuous animation. The contract's requirement for reduced-motion compatibility is a non-negotiable physical override—if a visual path induces nausea, the entire help module is bypassed for that user agent.

**Weather/Environmental Veto:** While seemingly tangential, the environment in which the GSE application is consumed dictates its viability. If a user is reviewing GSE analytics on a mobile device outdoors in bright sunlight (high ambient lux), standard CSS contrast ratios may fail. The "help contract" relies on high visibility and legibility. A cross-layer adjudication checks the client-side ambient light sensor (if accessible) or assumes worst-case glare conditions, forcing a higher contrast mode. If the "trust-safe media" (e.g., a subtle animated chart) relies on anti-aliased gradients, direct sunlight will wash them out, rendering the 10-second teaching moment useless. Thus, the implementation must include a "glare-resistant" styling override.

**Legal/Methodological Veto:** This is the ultimate logical veto. Even if a piece of copy is perfectly readable in 8 seconds and visually stunning, if it inadvertently describes a proprietary weighting factor in the GSI recursion engine, the Legal Layer issues an immediate kill-switch. The copy pipeline integrates a negative-constraint parser trained on the "founder-only methodology" dataset. Any overlap triggers a veto, reverting the text to a generic, safer placeholder until a redacted version is manually approved. This ensures that no matter how good the UX is, it never crosses the epistemic boundary of the organization's intellectual property.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
To ensure the robustness of the "Every item help contract," we apply Reinforcement Learning from Verifiable Reasoning (RLVR) to simulate counterfactual scenarios where the standard implementation fails or causes harm.

**Veto Scenario 1: The Over-Promising Hallucination**
*Scenario:* The LLM generating the help copy attempts to optimize for user excitement and writes: "This player will definitely score in the second half based on our exclusive fatigue model."
*RLVR Audit:* The verifiable reasoner calculates the probability of this statement being false and detects the presence of the word "definitely" alongside a proprietary model reference.
*Prediction & Action:* The reward function assigns a massive negative penalty (-1000). The system triggers a rollback, replacing the copy with: "Our analytics suggest elevated scoring probability in the second half due to favorable matchup dynamics. Past results vary." This enforces the "No fake certainty" and "No methodology leakage" constraints.

**Veto Scenario 2: The Accessibility Collapse**
*Scenario:* On a low-end Android device with a throttled CPU, the "motion" aspect of the help contract (a looping GIF showing how to interpret a stat) freezes after two seconds because the device cannot maintain 30fps. The user sees a frozen frame that looks broken.
*RLVR Audit:* A simulated resource-constrained environment runs the animation loop and detects a frame drop > 40%.
*Prediction & Action:* The RLVR agent recognizes that the visual path has failed, violating the "10-second comprehension" metric as the user now waits for a stuck animation. The veto activates, switching the component to serve only the static fallback image and the expanded text summary, bypassing the video entirely to preserve functionality.

**Veto Scenario 3: The Contextual Mismatch**
*Scenario:* A user is viewing a highly technical "Expected Goals (xG)" breakdown on a desktop. They hover over the xG definition. The standard help contract fires, providing a 10-second summary about "shot quality probability." However, the user is actually looking at a specific outlier shot that was influenced by a unique referee ruling—a nuance the standard macro-help cannot address.
*RLVR Audit:* The counterfactual simulation tracks user dwell time. The user dismisses the standard tooltip immediately and clicks "Learn More," navigating away from the live dashboard to read a full article, disrupting their workflow.
*Prediction & Action:* The RLVR realizes the generic contract caused friction for power users. The system adapts by injecting a dynamic variable into the "Next Action" slot: "See breakdown for this specific play ->". This maintains the 10-second surface but provides a hyper-contextual escape hatch, preventing the user from abandoning the active task.
</RLVR_COUNTERFACTUAL_VETOES>