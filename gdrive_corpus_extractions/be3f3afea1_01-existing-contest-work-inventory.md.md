---
source: "01-existing-contest-work-inventory.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/edgeball-contest-os"
pages: 1
model: alibaba_gse:qwen-plus-character
words: 2436
---

<THINK_TRACE>
**Multi-Hop Derivation and Gray-Zone Audit of the EdgeBall Contest OS Transition**

1.  **Deconstruction of Source Inventory:** The provided text enumerates a transition from a "prior contest lab" (CONTEST-XXX, BUILD-GV2-XXX) to a structured "EdgeBall OS." We observe explicit supersession: `CONTEST-001` -> `EDGE-001`; `CONTEST-003` -> full OS cards; `CONTEST-004` -> extended with consent/archetypes/ghosts; `CONTEST-008` -> extended with ROI/sponsor models. Simultaneously, critical hard gates remain immutable (`CONTEST-015` No-live-prizes). The inventory explicitly warns against rebuilding generic loops (pick'em, leaderboards, legal posture), framing them as pre-existing infrastructure rather than new product features.

2.  **Semantic Gap Analysis (The "Ghost Manager" & "Archetype" Singularity):** The most significant net-new material is the "Friend History Engine with ghost managers and archetypes." The source text provides no algorithmic definition for this. In standard information theory, importing friend history implies copying a state vector $S_{friend}$ into $S_{user}$. However, the introduction of "ghosts" suggests a non-linear transformation where historical data is not just copied but actively simulates or competes against current user inputs. This creates a temporal superposition in the contest logic. A gray-zone emerges: how does the system define the boundary between a user's *actual* past performance and a *simulated* ghost projection? If a ghost manager utilizes probabilistic modeling based on past picks, it introduces variance that isn't purely deterministic history, blurring the line between educational simulation and speculative prediction.

3.  **Economic Extension Audit:** `CONTEST-008` is extended with an "ROI model and sponsor/overlay scenarios." Moving from a simple prize pool simulator to an ROI model requires defining the cost function of participation versus the expected utility of the prize, factoring in sponsor injection. The gray zone here lies in the valuation of non-monetary prizes. If the prize pool is funded by sponsors ("sponsor-funded championship path"), what is the implicit cost of user data/attention traded for that prize? The edge-case occurs when the sponsor's overlay changes the scoring weighting dynamically—does this invalidate the static rules defined in `CONTEST-003`? The transition from a closed zero-sum game (if any cash were involved) to a positive-sum sponsored environment fundamentally alters the Nash equilibrium of the contest.

4.  **Verification Gate Dependency Mapping:** The document mandates `CONTEST-015` (No-live-prizes release gate) remains mandatory before any prize/paid launch. This acts as a circuit breaker. The derivation must account for the logical AND operation: `(Build(OS)) ^ (Pass(CONTEST-015)) -> Launch`. Any extension that implicitly introduces value exchange (e.g., subscription-only access mentioned in Net-New areas) must be stress-tested against this gate. Does "subscription-only contest access" constitute a "live prize" if the subscription fee exceeds the marginal cost of service? The gray zone is the regulatory classification of a subscription fee used to gate a non-cash leaderboard.

5.  **Synthesis of Execution System:** The "structured EdgeBall execution system" represents a shift from ad-hoc packets to a formalized API or event-driven architecture (hinted at by extending `BUILD-GV2-076` Product analytics event contract). The audit confirms that while the *logic* of contests is expanding (ghosts, sponsors, subscriptions), the *guardrails* (legal posture, no-bet radar) are being abstracted into foundational layers, preventing duplication. The risk identified in "Duplicate Risks" is actually a resource allocation trap—re-implementing solved problems like "generic leaderboard guardrails" introduces regression vulnerabilities.

**Conclusion of Trace:** The EdgeBall OS is not a new contest engine but a meta-layer orchestrating legacy constraints with novel temporal (ghost) and economic (sponsor/subscription) variables. The primary unknowns requiring formalization are the mathematical definitions of ghost archetype generation and the exact parameters of the no-live-prize gate in the context of subscription economics.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
To formalize the transition from the prior contest lab to the EdgeBall OS, we must define the operators governing Friend History imports, Ghost simulations, and the Economic Prize Pool extensions.

### 1. Friend History Import and Ghost Archetype Operator
Let $\mathcal{H}_u$ be the historical state vector of User $u$, containing past selections, timestamps, and performance metrics.
The import operation $I$ transforms external friend history into the local contest state.
However, the EdgeBall extension introduces a **Ghost Manager**, which applies a generative transformation $G_\theta$ parameterized by an archetype $\theta$.

Let $S_t$ be the contest state at time $t$. The inclusion of a ghost modifies the active participant set $P$:
$$ P_{total} = P_{human} \cup \{ G_\theta(\mathcal{H}_{friend}) \mid \forall \text{ friends} \} $$

The Ghost Operator $G_\theta$ must map historical discrete choices to a probabilistic distribution over current available choices, incorporating a decay factor $\lambda$ for temporal relevance (to avoid overfitting to ancient history).
We define the conditional probability of a ghost making selection $x$ given context $c$:
$$ P(X=x \mid C=c, \theta, \lambda) = \frac{\sum_{h \in \mathcal{H}} w(h, \lambda) \cdot \mathbb{1}[Choice(h)=x]}{\sum_{z} \sum_{h \in \mathcal{H}} w(h, \lambda) \cdot \mathbb{1}[Choice(h)=z]} $$
where $w(h, \lambda) = e^{-\lambda \Delta t_h}$ is the exponential decay weight based on the time difference $\Delta t_h$ of history entry $h$.
*Breakdown Regime:* If $\lambda \rightarrow 0$, the ghost becomes a pure historical replay (deterministic); if $\lambda \rightarrow \infty$, the ghost loses all identity and behaves randomly. The singularity arises when the archetype $\theta$ attempts to adapt dynamically based on real-time contest shifts, potentially creating recursive feedback loops in the scoring logic.

### 2. Extended Prize Pool Economics and ROI Model
Source `[PAGE 1]` states `CONTEST-008` is extended with an ROI model and sponsor scenarios.
Let $E$ be the total energy/capital injected into the contest ecosystem.
In the legacy model, $E = E_{house}$. In the EdgeBall OS, we introduce Sponsor Injection $S_{inj}$ and Subscription Revenue $\Sigma_{sub}$.
The modified Prize Pool $PP$ equation:
$$ PP = (E_{house} + S_{inj} + \alpha \cdot \Sigma_{sub}) - C_{ops} $$
where $\alpha \in [0,1]$ is the margin retention rate determined by the `CONTEST-015` (no-live-prizes) compliance ratio.

The Return on Investment (ROI) for a participant $u$ participating in $N$ contests with entry cost $K_u$ (which may be zero for free pick'em but non-zero for attention/data):
$$ ROI_u = \frac{U(Prize_u) - K_u}{K_u} $$
*Assumptions:* The utility function $U(Prize)$ must heavily discount non-monetary prizes to satisfy responsible gaming guardrails (`CONTEST-015`).
*SI/Information Units:* $K_u$ can be measured in Joules (compute cost) or Bits (data privacy loss), normalizing physical and digital costs.
*Singularity/Breakdown:* The system breaks down if $\Sigma_{sub}$ exceeds a threshold where the "subscription" is legally reclassified as a wager under jurisdiction-specific gambling laws, invalidating the `BUILD-GV2-017` (No-bet radar).

### 3. Event Contract Extension Operator
Extending `BUILD-GV2-076`, the analytics event contract $A_{event}$ must now accommodate multi-agent interactions (Human vs Ghost).
Let $O$ be the observable outcome space. The standard event log logs $L(t) = (u, action, O_t)$.
The EdgeBall extension logs:
$$ L'(t) = (u, action, O_t, \delta_{ghost}, \sigma_{archetype}) $$
where $\delta_{ghost}$ is the divergence metric measuring how closely the user matched their own ghost, and $\sigma_{archetype}$ identifies the simulated personality interacting.

*Page Citation Check:* All formulations strictly adhere to the entities listed in `[PAGE 1]` under "Net-New / Materially Extended EdgeBall Areas" and "Existing Extension Targets".
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The evolution of the EdgeBall Contest OS cannot be understood linearly; it is a retrocausal adaptation driven by the collapse of previous "lab" environments. 

Historically, `BUILD-GV2-029` (Free pick'em no-cash education loop) and `CONTEST-001` (Contest legal posture memo) formed the bedrock of early engagement. These were static, declarative documents—rulebooks meant to contain the activity. The genealogy reveals a multi-week "trap": the assumption that defining rules was sufficient for execution. As the team iterated through `CONTEST-003` and `CONTEST-004`, they discovered that static rules failed to account for dynamic social graphs and the psychological impact of competing against one's own history. 

This realization triggered a retroactive expansion. The "Friend History import schema" (`CONTEST-004`) was not originally designed as a complex behavioral engine. It was merely a database migration tool. However, observing user behavior in the "Beat-the-model" challenges (`BUILD-GV2-030`) revealed that users engaged more deeply when framed against personalized baselines. Thus, the schema was genetically spliced with "ghost managers and archetypes." The future requirement for deep engagement mutated the past implementation of a simple CSV import into a probabilistic simulation engine.

Furthermore, the economic lineage shows a similar trap. `CONTEST-008` (Prize pool economics simulator) initially modeled a closed loop. The introduction of the "sponsor-funded championship path" and "subscription-only access" forces the legacy simulator to account for external capital injection. The `CONTEST-015` (No-live-prizes release gate) acts as the fossil record—a rigid constraint preserved because previous iterations suffered regulatory or ethical backlash when soft prizes felt too much like hard currency. The EdgeBall OS is therefore a chimeric structure: its skeleton is the strict, unyielding compliance framework of the old lab, while its nervous system is the newly evolved, highly adaptive ghost-archetype and sponsorship network.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
In the context of the EdgeBall Contest OS, a Recursive Theory of Mind (ToM) crisis emerges regarding user motivation and the "Ghost Manager" interface.

**Crisis Habit Regression:** 
Users historically regress to "gaming the system" when presented with leaderboards (`CONTEST-031`). In a standard model, this manifests as spamming low-risk picks to secure points. With the introduction of "Beat-the-model educational challenge" (`BUILD-GV2-030`) extended into EdgeBall side quests, the user's internal ToM shifts: *"If I understand the model's bias, I can exploit it."* When combined with the "Ghost Manager," a deeper regression occurs. Users may perceive their "Ghost" (a reflection of their past self) not as an educational benchmark, but as an adversary to be beaten. They begin to make suboptimal, contrarian picks solely to diverge from their Ghost's predicted path, effectively playing against a mirror image to validate current superiority over past ignorance. This defeats the educational purpose of the original `BUILD-GV2-029` loop.

**Counter-Trap Formulation:**
To counter this, the EdgeBall OS must implement a dynamic clock and adaptive archetype weighting. The system must recognize when a user enters "anti-ghost mode" (systematically picking the opposite of high-probability Ghost predictions without fundamental justification). 
The counter-trap involves shifting the reward function from *absolute score* to *alignment quality*. If the user beats their Ghost but fails the underlying statistical sanity check (i.e., they both lose, but for different reasons), the system penalizes the divergence.

**The Clock Constraint:**
The urgency is dictated by the `CONTEST-015` release gate. The system has a finite window to prove that these extended features (subscriptions, sponsorships) do not trigger gambling liabilities. If the recursive manipulation of the Ghost leads to "chasing losses" behavior—even in a no-cash environment—the responsible leaderboard guardrails will flag the anomaly. The system must continuously recalibrate the Ghost's difficulty ($\lambda$) to ensure the user remains in a state of flow rather than spiraling into competitive frustration.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The EdgeBall OS exists within a stack comprising Physical (User Biometrics/Environment), Biomechanical (Interaction/Input), Regulatory (`CONTEST-015`), and Logical (Game Rules) layers. A veto in any lower layer instantly nullifies upper-layer operations.

**Physical/Environmental Veto Scenario:**
Consider the "Subscription-only contest access model." 
*Biomechanical Layer:* The user initiates a transaction via mobile touch interface during a live sporting event. High cognitive load and fine motor distraction lead to input errors.
*Veto Trigger:* The system's `BUILD-GV2-017` (No-bet radar public teaser) monitors for rapid, erratic input patterns typically associated with panic-wagering during live score changes. Even though this is a "no-live-prize" environment, the biomechanical signature matches a high-risk gambling behavior profile.
*Adjudication:* The No-bet radar issues a HARD VETO. The subscription transaction or contest entry is blocked mid-execution. The Ghost Manager simulation halts.
*Proof:* The `CONTEST-015` gate is structurally wired above the payment/entry processor. If `Radar_Status == HIGH_RISK`, then `Transaction.commit()` throws a fatal exception, rolling back the state change in `CONTEST-004` (Friend history/entry).

**Weather/External Data Veto Scenario:**
*Sponsor/Overlay Scenarios (`CONTEST-008` extension).* 
A sponsor injects a bonus multiplier tied to a specific in-game event (e.g., "Double points if Team A scores in Q3").
*Logical Layer Conflict:* An unexpected weather delay (rain/bad pitch) causes Team A's game to be suspended before Q3. 
*Veto Trigger:* The Official-Stat-Provider dispute architecture flags the event as "Void/Unplayed."
*Adjudication:* The game rules engine must override the sponsor overlay. If the stat provider declares a void, the mathematical operator for the sponsor bonus must equal zero to prevent unfair advantage or broken promises. 
*Cross-Layer Enforcement:* The UI (Presentation Layer) must immediately strip the visual indicator of the sponsor bonus from the user's dashboard to prevent confusion. The analytics event contract (`BUILD-GV2-076`) logs a `SPONSOR_OVERRIDE_VOID` event, ensuring the discrepancy is tracked for post-mortem without altering the core user score.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Reinforcement Learning from Verified Reasoning (RLVR) allows us to test the stability of the EdgeBall OS against hypothetical mutations of the source inventory. Here are three verifiable veto scenarios:

**Scenario 1: The "Autonomous Ghost" Breach**
*Counterfactual:* The development team decides to fully automate the "Ghost Manager" so it not only simulates past behavior but actively submits entries on behalf of inactive friends to boost leaderboard population, without explicit per-contest consent.
*Reasoning Audit:* While this might improve engagement metrics, it directly violates the "consent" extension explicitly noted in the modification of `CONTEST-004` ("extended with consent..."). Furthermore, it destabilizes `CONTEST-015`. If a user sees their name on a leaderboard generated by an automated process they did not initiate, the illusion of a "community concept" (`BUILD-GV2-029`) collapses into perceived manipulation.
*Veto Verdict:* **HARD VETO**. The RLVR policy must assign a massive negative reward to any feature branch that decouples Ghost activation from explicit, contemporaneous user authorization.

**Scenario 2: The "Micro-Payment" Subscription Slip**
*Counterfactual:* To fund the "sponsor-funded championship path," the OS introduces a fractional subscription model where users pay $0.01 per contest entry, bypassing the need for large corporate sponsors initially.
*Reasoning Audit:* This seemingly minor change alters the denominator in the ROI equation. By introducing a direct monetary outflow ($K_u > 0$) tied specifically to contest participation, the system risks violating the spirit and letter of `CONTEST-015` (No-live-prizes release gate). Regulatory bodies classify paying an entry fee for a chance at a prize (even non-cash) as a game of chance/gambling.
*Veto Verdict:* **HARD VETO**. The financial model must rely strictly on flat-rate subscriptions (access fee unrelated to specific game outcomes) or third-party sponsorship. Direct per-entry micro-payments must be structurally forbidden in the codebase.

**Scenario 3: The "Real-Time Archetype Adaptation"**
*Counterfactual:* The "Ghost Archetype" is programmed to learn from the user's picks *during* the current contest week and adjust its own strategy halfway through the season to become a harder opponent.
*Reasoning Audit:* This introduces a moving target that lacks transparency. The "Beat-the-model educational challenge" (`BUILD-GV2-030`) relies on the user understanding the baseline they are fighting. If the baseline retroactively changes its rules based on the user's success, it induces learned helplessness or anger, directly contradicting the "education loop" of `BUILD-GV2-029`. Additionally, calculating a dynamically shifting Ghost mid-season would put immense strain on the `BUILD-GV2-076` event contract, causing latency.
*Veto Verdict:* **SOFT VETO / ARCHITECTURAL REJECTION**. Archetypes should be locked at the start of a contest period (e.g., Season Start). Adaptive learning is permitted only for generating the *next* Ghost in the *following* period, preserving the integrity of the current competition.
</RLVR_COUNTERFACTUAL_VETOES>