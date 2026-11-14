---
source: "BUILD-SITE-014-rating-badge-visual-language.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/site-war-room/claude-build-queue/cards"
pages: 1
model: alibaba_gse:qwen-plus-character
words: 1786
---

<THINK_TRACE>
The user wants a deep, rigorous derivation of the `BUILD-SITE-014-rating-badge-visual-language.md` directive. 
The source [PAGE 1] outlines a P0 goal: "Rating badge visual language" for the Galaxy Sports Edge (GSE) product surface. The goal is to provide "10-second clarity, trust, conversion... without exposing founder-only methodology."

First, I must audit the gray zones and multi-hop dependencies of this directive. The core tension lies in the "Public/Private Boundary." The public needs to understand risk and value ("where the risk is, and what to do next"), but the system strictly prohibits "method leakage" or "founder-only methodology." In information theory terms, we are trying to maximize the mutual information between the user's perception of value and the actual predictive power of the GSE rating, while keeping the entropy of the underlying algorithmic priors effectively zero to the observer. This creates a high-constraint optimization problem for the visual language. We cannot use raw probability distributions or complex Bayesian posteriors; we must map these into a low-dimensional, perceptual color/shape space that maintains the integrity of the signal without revealing the generation mechanism.

Next, the directive explicitly mandates a "premium sports intelligence command center" aesthetic with a "no casino/tout feel." This introduces a biomechanical and psychological veto layer. Casinos leverage intermittent variable rewards and high-arousal colors (red/gold/black) to induce a state of physiological excitation (the "zone of excitement"). GSE, conversely, targets a state of analytical calm. Therefore, any use of high-frequency flickering animations, excessive contrast on critical decision nodes, or specific gamified shapes (like chips or tickets) is automatically vetoed by the cross-layer compliance boundary. The "Legal / Compliance Boundary" further enforces this: no live affiliate links, no guaranteed wins.

We must also consider the retrocausal genealogy of why this build card exists now. The "Current Problem" states the workspace does not expose the runnable app, and route-level implementation needs a shipping clone. Historically, similar interfaces failed because they over-prioritized design tokens at the expense of data density, or they under-prioritized accessibility, causing cognitive load spikes. To avoid the "multi-week trap," this implementation must decouple the visual weight of the badge from the computational complexity of the rating. If the badge takes too long to render or causes layout shifts (CLS), the 10-second clarity rule fails, degrading activation metrics.

Finally, constructing the counterfactuals. We need to verify the robustness of this design. If we used a linear color gradient (e.g., red-to-green) without discrete steps, would colorblind users or users in bright sunlight lose the signal? Yes. Thus, a purely chromatic encoding is fragile. A dual-coding approach (color + iconography + explicit confidence text) is required to survive real-world physical constraints. The thinking process confirms that the visual language is not merely decorative; it is a highly constrained information compression engine designed to translate proprietary probabilistic models into actionable, legally compliant, accessible user signals within strict temporal bounds.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
To formalize the visual language of the GSE Rating badge, we define an Information Fidelity Function ($\mathcal{I}$) that maps internal model states to user-perceptible design tokens, subject to strict boundary conditions.

Let $M$ be the multidimensional vector of the private GSE proprietary model outputs (e.g., expected value, variance, historical coverage). Let $V$ be the 2D visual representation of the badge rendered on the DOM.
The objective is to maximize the mutual information between the user's extracted value estimate $\hat{y}$ and the true market edge $y_{true}$, while ensuring the Kullback-Leibler divergence between the revealed distribution and the full model remains above a privacy threshold $\tau$.

**1. Visual Signal Compression:**
$$ \mathcal{L}_{vis} = - \sum_{i \in C} p(i) \log_2 p(i) + \lambda \cdot D_{KL}(P_{public} || P_{model}) $$
Where $C$ is the set of discrete visual states (e.g., High Confidence, Moderate, Low/Volatility). The design must minimize entropy loss during compression without crossing the method leakage singularity where $\frac{\partial \mathcal{L}}{\partial M}$ allows reverse-engineering of the algorithm.

**2. Temporal Clarity Constraint (10-Second Rule):**
Following Fitts' Law and Hick's Law adaptations for dashboard scanning, the Time-to-Understand ($T_u$) must satisfy:
$$ T_u(V) = k \cdot \log_2(N_{choices} + 1) + RT \leq 10 \text{ s} $$
Where $N_{choices}$ is reduced via visual hierarchy. To maintain this, the Contrast Ratio ($CR$) of the badge against the background must strictly obey WCAG AAA standards:
$$ CR = \frac{L_1 + 0.05}{L_2 + 0.05} \geq 7:1 $$
Violation of this constraint triggers a Cross-Layer Veto due to reduced motion/accessibility failures.

**3. Psychological Arousal Suppression (Anti-Casino Metric):**
Casino UIs maximize arousal via frequency ($f$) and saturation ($S$). We define a Calm Index ($\chi$):
$$ \chi = \alpha \left(1 - \frac{S}{S_{max}}\right) + \beta \left(1 - \frac{f}{f_{threshold}}\right) $$
For GSE, $\chi$ must remain $> 0.8$ under standard viewing conditions. If a badge uses rapid pulsing animations or neon RGB values exceeding HSL saturation thresholds typical of Las Vegas signage, the equation diverges, triggering a hard legal/compliance stop.

*Assumptions:* User possesses baseline numeracy; device renders standard sRGB accurately; network latency does not exceed 300ms for static assets. *Breakdown Regime:* If the underlying GSE model enters a high-variance singularity (e.g., pre-game odds shifting rapidly), the mapping from $M$ to $V$ may become non-deterministic. The badge must default to a "Data Refreshing/Empty State" rather than presenting stale certainty.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The creation of `BUILD-SITE-014` is not an isolated design sprint; it is a reactive evolution born from the friction of earlier interface generations. Historically, early sports analytics platforms relied heavily on dense spreadsheets and raw decimal probabilities. While informationally rich, these suffered from massive cognitive load, failing the "10-second clarity" test and alienating non-professional bettors. 

In response, a secondary wave of competitors pivoted entirely toward hyper-gamification—adopting "tout" aesthetics, flashing lights, and casino-like progressive disclosures to drive dopamine hits. This increased short-term engagement but catastrophically eroded long-term trust and retention, as users eventually recognized the manipulative architecture (the "casino feel" explicitly banned in the Prompt). 

`BUILD-GV2-011` (the parent ID cited in the duplicate gate) likely addressed the macro-help/growth/trust documentation but lacked the granular, route-level execution required for a production environment. The current multi-week trap lies in the tendency of frontend engineers to treat "visual polish" as a CSS exercise, inadvertently introducing layout shifts or heavy WebGL shadows that degrade performance on mobile networks. By anchoring the lineage in both raw-data failure and casino-manipulation backlash, `BUILD-SITE-014` inherits a mandate to achieve a "sweet spot" of premium, cinematic calm. It represents a mature phase of product evolution where growth relies on transparency and defensible value extraction rather than deceptive urgency.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
When a user arrives at the GSE dashboard, their cognitive state fluctuates between high-stakes anxiety and a desire for intellectual validation. We must anticipate their crisis habit regressions. Under stress, users tend to regression-test any new visual aid against their past trauma of losing bets to "gurus" who promised guaranteed wins. If the rating badge uses overly confident copy (e.g., "SLAM DUNK LOCK"), the user's internal Theory of Mind detects manipulation, triggering distrust and immediate bounce.

Conversely, if the badge is too sterile or academic, the user experiences a different regression: the fear of missing out (FOMO) combined with a lack of actionable direction. They ask, "What do I do next?" 

Therefore, the counter-trap requires a UI that projects calm authority without guaranteeing outcomes. The copy direction—"Human, direct, grounded, no fake certainty"—is engineered specifically to disarm the user's defensive skepticism. By showing "last-verified/source cues" and offering reveal-less explanations of risk, the system aligns with the user's meta-cognition. It tells the user: "I know you don't trust opaque algorithms; here is the verifiable context of this rating, without me handing you the keys to break the bank." This establishes a recursive loop of trust: the more the badge transparently communicates its own limitations (via the public/private boundary), the higher the user's perceived reliability of the positive signals.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
This visual language is bound by rigid vetoes across physical, biomechanical, and legal layers. 

**Biomechanical/Visual Veto:** The human visual system is susceptible to specific frequencies of light and pattern repetition that can induce seizures or severe eye strain. Any implementation of the rating badge utilizing high-contrast alternating borders or rapid opacity transitions (common in "loading" states) will trigger a hard veto based on reduced-motion compliance. The design must utilize static, high-spatial-frequency typography or slowly transitioning gradients to ensure reading comfort over extended periods.

**Environmental/Weather Veto:** Users frequently access sports apps outdoors or in brightly lit stadiums. If the badge relies solely on subtle, low-saturation pastel colors to achieve the "calm" directive, it will fail the legibility threshold under direct sunlight. The system must dynamically adjust contrast ratios or enforce dark-mode defaults with sufficient luminance to survive high-glare environments without compromising the "no casino" (avoiding pure white on pure black) constraint.

**Compliance/Legal Veto:** The backend routing logic must strictly isolate the rendering of the badge from any affiliate link payloads. Even a micro-interaction, such as a hover state that subtly emphasizes a "Place Bet" CTA alongside the rating, risks violating the "No live sportsbook/casino affiliate links" rule. Furthermore, any dynamic copy generation that accidentally hallucinates phrases like "guaranteed return" or "risk-free profit" constitutes a fatal legal breach. The automated linting/test plan must include a regex-based semantic scan of all badge output strings to catch prohibited gambling vernacular before deployment.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. **Scenario: Over-Reliance on Chromatic Encoding.**
   *Prediction:* The initial implementation uses a green-to-red gradient bar to represent confidence levels, assuming all users can parse the exact hue.
   *Veto & Fix:* Approximately 8% of male users are deuteranopic (red-green colorblind). This violates the accessibility basics acceptance criteria. The RLVR agent must veto the purely chromatic design and enforce a dual-coding patch: adding distinct icons (e.g., shield for safe, lightning bolt for volatile) or text labels adjacent to the color block.

2. **Scenario: Methodology Leakage via Hover States.**
   *Prediction:* To add "trust," the dev team adds a tooltip on hover that displays the raw EV% (Expected Value) calculated by the private GSE algorithm down to three decimal places.
   *Veto & Fix:* This breaches the Public/Private Boundary by exposing the precision of the founder-only methodology. The system should only display binned categories (e.g., "Strong Value") or rounded integers. The RLVR agent detects the exposure of high-fidelity internal priors and halts the PR, forcing a truncation of the data payload exposed to the frontend.

3. **Scenario: Mobile Layout Shift (CLS Spike).**
   *Prediction:* The rating badge fetches data asynchronously after the initial paint to save TTI (Time to Interactive). When the data resolves, the badge expands, pushing the primary action button down by 40px.
   *Veto & Fix:* This induces a Cumulative Layout Shift that breaks the 10-second clarity rule, as the user might tap the old location of the button and miss it, increasing frustration. The vetoes require reserving a fixed-height skeleton container (`min-height`) for the badge prior to network resolution, ensuring spatial stability regardless of data fetch duration.
</RLVR_COUNTERFACTUAL_VETOES>