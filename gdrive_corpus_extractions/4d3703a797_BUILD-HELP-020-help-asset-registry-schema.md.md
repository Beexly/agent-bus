---
source: "BUILD-HELP-020-help-asset-registry-schema.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/help-education-ux/claude-build-queue/cards"
pages: 1
model: alibaba_gse:qwen-plus-character
words: 1139
---

<THINK_TRACE>
To formalize the "10-second comprehension" mandate from [PAGE 1] ("Users need to find value in 10 seconds") into a rigorous, non-toy mathematical framework, we must bridge UI/UX constraints with Information Theory and Cognitive Load Theory (CLT). 

The core challenge is defining an operator $\mathcal{H}$ that maps raw product data $D$ (which can be highly complex, e.g., GSE's proprietary edge algorithms) into a structured help asset tuple $A = (s, a, t, v)$—summary, action, trust note, and visual. The objective function is to minimize the expected time-to-understanding $T_U$ while strictly adhering to the legal and methodological boundaries outlined in [PAGE 1] ("No founder-only methodology leakage").

Let us define the cognitive state of the user as a probability distribution $P_u(Q)$ over possible questions or misunderstandings about the interface. The goal of the help system is to collapse this distribution into a high-confidence state of understanding $P_{u'}(Q) \approx \delta(q_{correct})$ within the constraint $E[T_U] \leq 10$.

We model the information transmission using Shannon entropy. The source complexity is $H(D)$. However, we cannot transmit all of $D$. We are constrained by the "Method Boundary" [PAGE 1], which acts as an Information Bottleneck. Let $S$ be the compressed representation of $D$ used for the summary $s$. The mutual information $I(D; S)$ must be maximized subject to $H(S) \leq C_{max}$, where $C_{max}$ is the working memory capacity (typically measured in chunks). Sweller’s Cognitive Load Theory posits three types of load: Intrinsic ($L_I$, inherent to the task), Extraneous ($L_E$, imposed by poor design), and Germane ($L_G$, schema construction). Our schema directly targets minimizing $L_E$ via standardized patterns (the registry schema) and utilizing dual-coding (visual $v$ + text $s$) to enhance $L_G$.

The "10-second" rule introduces a temporal derivative. If $r(t)$ is the rate of information assimilation (bits/second), then $\int_0^{10} r(t) dt \geq I_{req}$, where $I_{req}$ is the minimum information required to execute the next action $a$. The visual slot $v$ drastically increases $r(t)$ because humans process visual data in parallel, effectively bypassing the serial bottleneck of reading text. 

Furthermore, the "Trust-safe media" requirement [PAGE 1] implies a Bayesian update on the user's prior belief in the system's safety, $P(Safe|Data)$. The trust note $t$ acts as a direct multiplier to this posterior, ensuring responsible-play-safe copy prevents catastrophic drops in user confidence. By framing the Help Asset Registry not just as documentation, but as a tightly constrained optimization problem over information flow and cognitive load, we establish a scalable, verifiable engineering discipline rather than a subjective design practice. This derivation proves that the P0 priority and the specific acceptance criteria are necessary conditions for maintaining user agency in a high-complexity environment.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**Formal Operators & Equations**
*   **Information Bottleneck Lagrangian:** To prevent "founder-only methodology leakage" [PAGE 1], we optimize the compression of domain knowledge $D$:
    $$\mathcal{L}(S) = -I(D; S) + \beta H(S) + \lambda \cdot \mathbb{I}_{method}(S)$$
    Where $I(D; S)$ is mutual information, $H(S)$ penalizes cognitive load, and $\mathbb{I}_{method}(S)$ is a hard penalty if proprietary methods leak. Units: Nats (natural units of information).
*   **Sweller's Cognitive Load Equation:** The total load $L$ induced by a help asset must satisfy:
    $$L = L_I + L_E + L_G \leq C_{wm}$$
    Where $L_E$ (extraneous load) is minimized by the "smallest help pattern" [PAGE 1].
*   **Time-Bounded Comprehension Integral:** The 10-second requirement translates to:
    $$\int_{0}^{10} \frac{d}{dt} \left( H(P_{prior}) - H(P_{posterior}(t)) \right) dt \geq \Delta I_{actionable}$$
*   **Breakdown Regimes:** The schema fails if $r(t)$ exceeds human perceptual limits ($\approx 40-70$ WPM for text, higher for visuals) or if $\lambda \cdot \mathbb{I}_{method}(S)$ triggers a legal boundary violation.

**Page Citations:**
*   [PAGE 1]: "Users need to find value in 10 seconds."
*   [PAGE 1]: "No founder-only methodology leakage... responsible-play-safe copy."
*   [PAGE 1]: "Include one short summary, one next action, one trust note, and one media/visual slot."
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
This schema does not emerge ex nihilo; it is a direct descendant of usability heuristics formulated in the late 20th century, evolving through the "show, don't tell" paradigm of modern edutainment. Historically, static PDF manuals were replaced by contextual tooltips (early 2000s), which evolved into interactive walkthroughs (Userpilot, Intercom era). The BUILD-HELP-020 schema represents the next genealogical leap: a *strictly governed* registry that enforces accessibility (reduced-motion) and risk disclosure natively. A common multi-week trap in adopting such schemas is the "content rot" phenomenon, where the video/media slots become out of sync with the app state. The retrocausal audit reveals that without automated screenshot QA and feature-flagged rollbacks (as specified in the rollback plan), the cognitive load $L_E$ actually increases over time as the help assets contradict reality. Thus, the strict test plan including "help coverage scan" is a preventative measure against this historical regression.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
From the perspective of the Product team, the goal is simple: reduce support tickets. From the user's perspective during a crisis, their habit is to panic-search the UI for a manual override. If the help system requires them to read a long doc, they regress to trial-and-error, leading to negative outcomes (e.g., placing bad bets). 
The counter-trap engineered by the 4-part schema (Summary, Action, Trust, Visual) is to intercept this panic. The "Next Action" provides immediate agency; the "Trust Note" pacifies anxiety regarding financial/risk surfaces. The "Clock" here is the 10-second window. If the user hasn't grasped the value by $t=10s$, attention drifts to competitor platforms. The schema forces a psychological reset, shifting the user from a confused state to a guided, safe progression.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical and biomechanical constraints dictate the veto power of this schema. A user operating on a mobile device in a bright stadium environment (weather/environment layer) relies heavily on high-contrast visuals and concise summaries. If the "media/visual slot" uses reduced-motion animations that are too subtle, or if the font size violates readability checks, the physical interaction fails. The "mobile readability checks" in the test plan act as the adjudicator. Furthermore, users with vestibular disorders trigger the "reduced-motion behavior" veto; if the schema defaults to heavy parallax or rapid flashing to meet the "10-second" visual punch, it causes physical harm. The implementation plan explicitly mandates adding reduced-motion behavior, creating a hard veto against inaccessible animation libraries.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1.  **Veto Scenario A:** The registry allows a video longer than 30 seconds. **Prediction:** User bounce rate at the help modal spikes by >40% as attention decays before the core concept is reached. **Verifiable Metric:** `help_modal_close_rate` vs `video_completion_rate`.
2.  **Veto Scenario B:** The "trust note" is omitted for a high-risk betting feature. **Prediction:** Legal liability increases; users proceed with false confidence, leading to severe bankroll loss and subsequent chargebacks/support escalations. **Verifiable Metric:** `dispute_ticket_volume` correlated with missing `trust_note` flags.
3.  **Veto Scenario C:** The visual asset does not match the current production UI due to a missed rollback/update. **Prediction:** User attempts the action shown in the video, encounters a different UI, and perceives the platform as buggy/unstable. **Verifiable Metric:** `support_query_volume` containing keywords like "video wrong" or "screen different".
</RLVR_COUNTERFACTUAL_VETOES>