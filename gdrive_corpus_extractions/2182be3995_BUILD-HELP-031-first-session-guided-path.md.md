---
source: "BUILD-HELP-031-first-session-guided-path.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/help-education-ux/claude-build-queue/cards"
pages: 1
model: alibaba_gse:qwen-plus-character
words: 1655
---

<THINK_TRACE>
The prompt initiates the execution of `BUILD-HELP-031`, targeting the immediate onboarding experience. The core objective is reducing the time-to-value for new users to under 10 seconds by injecting contextual, trust-safe guidance into the complex GSE proprietary surfaces. This directly extends `BUILD-113` but focuses strictly on the first-session friction points rather than generic documentation.

To execute this with maximum fidelity, I must first establish my environment and ensure no leakage of protected methodology occurs while fulfilling the user value proposition. The process begins with a strict audit of the repository: verifying the root, checking out the appropriate feature branch (e.g., `feature/BUILD-HELP-031`), ensuring a clean working tree, identifying the active framework (likely Next.js based on previous GSN architecture patterns), mapping the route structure, and locating the Design System token library. This prevents "hallucinated" file paths and ensures the UI components align with existing visual language.

Once the environment is secure, the logical progression moves to the specific "help pattern" implementation. We are not building a manual; we are embedding micro-lessons. For every major proprietary item (like the Frontier Reasoning output or Probability Heatmaps), we need a four-part atomic payload: 1) A one-sentence summary of "what this is", 2) a clear "next action" for the user, 3) a trust note explaining the boundary or risk (compliance/legal adherence), and 4) a visual anchor (video loop or motion graphic). 

Accessibility and responsiveness are non-negotiable in this P0 priority. The implementation requires adding `prefers-reduced-motion` media queries to ensure that the "trust-safe media" does not trigger vestibular disorders, defaulting to static illustrations or simple fade-ins. Mobile behavior needs explicit checks; the guided path cannot obscure primary navigation on smaller viewports. 

Furthermore, the integration of analytics is critical for the internal value proposition—measuring if the 10-second comprehension goal is actually met. We will instrument `impresion_help_tooltip` and `click_next_action` events. Finally, the QA phase will run automated screenshot comparisons (using Playwright or similar within the CI pipeline) and copy audits to verify tone-of-voice compliance, ensuring all text sounds "human" rather than robotic or overly academic. A robust rollback plan via feature flags (`isFirstSessionGuidedPathEnabled`) ensures zero risk to production stability. The entire operation balances deep product empathy with rigid engineering constraints.
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
We model the First-Session Guided Path as an optimization problem aimed at maximizing User Comprehension $C$ and minimizing Time-to-Value $\tau$, subject to strict Legal/Method Boundaries $L$ and Cognitive Load $K$.

**1. Definition of Atomic Help Payload ($\mathcal{A}$):**
Let $\mathcal{A}_i$ be the set of help assets associated with a major product surface $S_i$. Each payload must conform to the tuple:
$$ \mathcal{A}_i = \{ \Sigma, \alpha, \lambda, \mu \} $$
where:
*   $\Sigma$: Short Summary (Textual vector, max 15 words). Target: $P(\text{User understands } S_i | \Sigma) > 0.9$.
*   $\alpha$: Next Action (Interactive affordance). Maps to a specific route or modal expansion.
*   $\lambda$: Trust Note (Compliance/Risk disclosure). Must explicitly state boundaries (e.g., "Proprietary methodology, probabilistic outcomes only").
*   $\mu$: Media/Visual Slot (Video/Motion/Table). Provides rapid pattern recognition.

**2. Time-to-Value Constraint:**
The system aims to satisfy the condition:
$$ \tau_{comprehension} = \int_{0}^{t} \frac{dC}{dt} dt \leq 10s $$
This implies the information density of $\mathcal{A}_i$ must be calibrated such that the visual scan of $\Sigma$ and $\mu$ yields immediate grounding.

**3. Accessibility and Reduced Motion Metric:**
For users with vestibular preferences, we define the Motion Index $M$:
$$ M(u) = \begin{cases} 0 & \text{if } \exists p \in u.preferences : p = \text{'prefers-reduced-motion'} \\ 1 & \text{otherwise} \end{cases} $$
If $M(u) = 0$, then $\mu$ must default to a static representation $\mu_{static}$, avoiding any CSS animations exceeding $0.5s$ transitions without pause mechanisms.

**4. Cognitive Load vs. Legal Safety Boundary:**
We define a safety function $L(S_i)$ where $L(S_i) = 0$ indicates potential founder-methodology leakage or false certainty.
$$ \forall i \in \text{Surfaces}, \quad \text{Display}(\mathcal{A}_i) \iff L(\lambda) == 1 \land K(\Sigma, \mu) < K_{threshold} $$
Assumptions: Users operate with bounded rationality; the 10-second window assumes a typical reading speed of ~250 wpm and rapid visual processing of standard data visualization tropes.
Breakdown Regime: If $K(\Sigma) > K_{threshold}$ (summary too dense), the tooltip fails the acceptance criteria, triggering a fallback to a simplified icon-only indicator until the user explicitly clicks for more detail.
</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
This initiative traces its lineage directly back to the fundamental tension between highly sophisticated, proprietary algorithmic outputs (GSE's "black box" reasoning) and the raw, instinct-driven nature of sports decision-making. Historically, early GSE iterations relied heavily on dense documentation and video courses (the "Manual" era). While comprehensive, these created massive friction during the first session, leading to high drop-off rates before the user ever experienced the "aha!" moment of seeing a probability heatmap or a recursive theory of mind analysis.

`BUILD-113` attempted to address this by organizing the knowledge base, but it treated education as a separate destination—a library you visit when lost. `BUILD-HELP-031` recognizes the genealogical flaw: learning cannot happen *after* the user is confused; it must happen *as* they encounter the confusion. It borrows heavily from the "contextual onboarding" patterns pioneered in modern SaaS platforms (like Notion's command palette tips or Slack's inline prompts), adapting them specifically for the high-stakes, high-complexity domain of sports intelligence.

The multi-week trap this build avoids is the "over-documentation trap." Without a focused first-session path, the support team will inevitably get flooded with tickets asking basic questions like "What does this number mean?" or "Why is this team highlighted red?" By proactively placing the "smallest help pattern" right at the edge of the complex data visualization, we retrocausally alter the support ticket distribution, shifting queries from "how do I use this?" to advanced "why did the model weight this variable higher?"
</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
In the context of crisis habit regression, a new user encountering a dense, unfamiliar interface often defaults to a defensive posture: cognitive freezing or abandoning the tool entirely. They assume, "I'm not smart enough for this," or "This is just another overhyped betting scam." 

Our counter-trap relies on a precise Theory of Mind alignment. We anticipate their panic and immediately neutralize it with the "Trust-Safe" component of our atomic payload. When the user sees a flashy, proprietary metric like "Recursive EV Score," their internal monologue might be skeptical. Our $\lambda$ (trust note) steps in to say, effectively: "We don't predict the future, we calculate probabilities based on verified historical data boundaries. Here is exactly how much uncertainty exists."

This builds psychological safety in real-time. The "Next Action" ($\alpha$) gives them a sense of agency—not forcing them to read, but inviting them to click a button to see a simulation. We are guiding them through a micro-crisis of complexity by matching their emotional frequency (uncertainty) with an empathetic, concise explanation (clarity). The clock is ticking on their attention span; the 10-second limit isn't arbitrary, it's the physiological threshold for a user deciding whether a tool is "for them" before anxiety sets in.
</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
Physical and biomechanical constraints play a subtle but vital role in UI adoption. If our guided path involves rapid eye movements across disjointed screen areas (e.g., looking at a stat on the left, then jumping to a help bubble on the far right), we incur "saccadic fatigue." On mobile devices, this translates to awkward thumb stretches.

**Veto Proof 1: Biomechanics of Interaction.** 
The placement of the "Next Action" button must fall within the "Thumb Zone" for mobile users. If the proposed design places the guided path toggle in the top-right corner (hard to reach), the Physical Layer VETO triggers. The design must be adjusted to bottom-sheet or center-overlay paradigms.

**Veto Proof 2: Vestibular Sensitivity.**
As noted in the equations, users with `prefers-reduced-motion` have physical sensitivities to parallax or continuous looping videos. If the "trust-safe media" is a high-FPS spinning 3D model of a basketball court, it violates accessibility standards. The reduced-motion check acts as an adjudicator, instantly swapping this for a static SVG diagram upon initialization.

**Veto Proof 3: Cognitive Bandwidth & Lighting Conditions.**
While not strictly biomechanical, environmental perception matters. If the app is used in a bright stadium environment, low-contrast help text becomes invisible. The cross-layer check ensures our typography tokens inherit sufficient contrast ratios (WCAG AAA) regardless of the background data density. If the underlying GSE chart is extremely busy (high visual noise), the tooltip must adopt a solid, non-transparent background to prevent "visual vibration."
</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>
We simulate three Reinforcement Learning from Verified Reasoning (RLVR) scenarios to test the robustness of the First-Session Guided Path before deployment.

**Scenario 1: The "Skipper" Trap**
*Prediction:* 60% of power users (importing from CSV or using API) will aggressively click "Dismiss All" immediately, bypassing the 10-second path entirely.
*Veto Check:* Does the dismissal persistently annoy them? If they re-enter the dashboard after 24 hours, does the popup return? 
*Action:* Implement a persistent local storage flag `guided_path_dismissed_v1`. If set, the atomic payloads $\mathcal{A}_i$ are hidden by default but accessible via a "?" icon hover. We veto any design that forces a linear, unskippable tutorial for returning or expert users.

**Scenario 2: The "Misinterpretation" Feedback Loop**
*Prediction:* A user reads the short summary $\Sigma$ regarding "Implied Probability" and incorrectly believes it guarantees a win, ignoring the Trust Note $\lambda$.
*Veto Check:* Analytics show a spike in "High Confidence Bet Placed" immediately following the exposure to this specific tooltip, followed by a high rate of "Loss Reporting" complaints to support.
*Action:* The RLVR system detects a correlation between Tooltip A and negative sentiment in Support Ticket B. The VETO triggers a rewrite of $\lambda$, making the risk disclosure larger and bolding the word "Probabilistic".

**Scenario 3: The "Mobile Clutter" Overload**
*Prediction:* On an iPhone SE viewport, the overlay of the "Media/Visual Slot" $\mu$ combined with the standard nav bar completely covers the primary data table, rendering the tool unusable.
*Veto Check:* Automated screenshot QA on responsive breakpoints detects content occlusion > 40%.
*Action:* Immediate VETO of the visual slot on mobile viewports. The system falls back to text-only $\Sigma + \alpha + \lambda$ to preserve the usability of the core product surface.
</RLVR_COUNTERFACTUAL_VETOES>