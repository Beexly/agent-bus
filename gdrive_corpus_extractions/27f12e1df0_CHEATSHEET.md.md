---
source: "CHEATSHEET.md"
folder: "/CorpusRoot/PC-offload/OneDrive/Documents/Galaxy Sports Edge Launch Ready/reports/launch-night"
pages: 1
model: alibaba_gse:qwen-plus-character
words: 1953
---

<THINK_TRACE>
The source document serves as a procedural and invariant-driven checklist for a launch-night deployment of a sports prediction or analytics platform. Analyzing it through the lens of frontier reasoning requires stripping away the mundane DevOps commands (`npm run dev`, `db:seed`) and focusing exclusively on the **semantic invariants** governing information flow, trust claims, and state mutation. These are formal constraints on a stochastic system generating probabilistic assertions (picks) to external observers.

1.  **Information Leakage & Stochastic Integrity:** The primary failure mode addressed by "No fabricated stats" (`evaluatePublicPerformancePolicy()`) is the leakage of posterior distributions into prior assessments, or worse, the hallucination of performance metrics during a cold-start phase. Formally, let $P$ be the set of predictions generated at time $t$, and $O$ be the observed outcomes at $t+\Delta$. The verified record $\mathcal{V}$ must satisfy strict conditional independence: $P(Y_{pub} | P_t, O_{t-1}) = f(O_{t-1})$, where $Y_{pub}$ is the published metric. If `PERFORMANCE_STATS_ENABLED` is false, the system transitions to a regime of pure epistemic opacity, outputting "Collecting..." instead of a number. This acts as a hard veto against overfitting the user's perception to noise.

2.  **Semantic Contamination & Banned Phrases:** The requirement to ban specific phrases ("trust-claims registry") points to the risk of semantic drift towards hyperbolic or guaranteed-outcome language (e.g., "locks", "guaranteed winners"). In information theory, these phrases introduce high-magnitude priors that distort the user's expected value calculation. The CI scanner functions as an automated filter ensuring the output distribution does not contain tokens belonging to the set $\mathcal{T}_{banned} \subset \Sigma^*$. This maintains the brand's epistemic humility.

3.  **Deterministic vs. Stochastic Publishing:** The invariant "No auto-publish" dictates that the transition from Draft ($D$) to Published ($Pub$) state, denoted by setting `ContentDraft.publishedAt`, requires an explicit operator action. This introduces a human-in-the-loop gate, preventing automated pipelines from inadvertently releasing uncalibrated model outputs. It enforces a causal break between model inference and public dissemination.

4.  **Model Versioning & Calibration:** The coupling of `MODEL_VERSION` bumps with `CalibrationProposal` documents prevents arbitrary changes to the generative kernel. A model version $M_v$ is a mapping from features to probabilities. Changing $v$ without a formal proposal (which likely includes backtesting results, confidence intervals, and theoretical justification) risks deploying an uncalibrated distribution where $P(\hat{y}|x)$ diverges significantly from the true base rate $P(y|x)$. The guardrail ensures that any change in the generative process is accompanied by a rigorous mathematical audit.

5.  **State Management & Demo Mode:** The interplay between `DEMO_PICKS_ENABLED`, `isStubMode()`, and the Sample-mode banner reveals a dual-state architecture. When real data (`DATABASE_URL`) is absent, the system falls back to a deterministic stub. The banner acts as a meta-cognitive signal to the user, explicitly communicating that the current observations are drawn from $P_{demo}$ rather than $P_{real}$, preventing confusion between synthetic training data and live operational data.

By treating these operations as constraints on a probabilistic graphical model, we can define precise conditions under which the system remains logically consistent and operationally safe. The "gray zone" arises when edge cases—such as partial database connectivity or race conditions in snapshot regeneration—threaten these invariants, necessitating robust error handling and constant vigilance via the provided smoke tests.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
We formalize the operational constraints using Information Theory and Probability measures. Let $S$ denote the state of the application, $T$ denote time steps, and $A$ denote actor actions (Operator/User).

**1. Epistemic Opacity Condition (Verified Record):**
Let $E_t$ be the event that verified performance statistics are displayed at time $t$. Let $\sigma \in \{0, 1\}$ be the boolean flag `PERFORMANCE_STATS_ENABLED`. Let $H(\cdot)$ be Shannon entropy.
Assumption: The system must prevent revealing posterior information when insufficient samples exist.
Equation:
$$ P(E_t = \text{"Display Metric"} | \sigma=0) = 0 $$
$$ E[\text{Metric}_t] = \begin{cases} f(\text{Outcomes}_{t-k:t}) & \text{if } \sigma=1 \\ \text{"Collecting..."} & \text{if } \sigma=0 \end{cases} $$
Units: Probability measure; String literal output. Breakdown Regime: Occurs if the boolean check fails due to environment variable precedence errors, leading to metric hallucination. [PAGE 1] states: "`Verified Record` shows `Collecting…` when `PERFORMANCE_STATS_ENABLED=false`."

**2. Semantic Filter Constraint (Banned Phrases):**
Let $C$ be the content string rendered on a customer page. Let $\mathcal{B}$ be the finite set of banned token sequences defined in the trust-claims registry.
Operator: $\Pi_{\mathcal{B}}(C) \rightarrow \{True, False\}$ indicates violation.
Inequality:
$$ \forall C \in \text{CustomerPages}, \quad \sum_{b \in \mathcal{B}} \mathbb{I}(b \subseteq C) = 0 $$
where $\mathbb{I}$ is the indicator function.
Units: Boolean logic over discrete string space. Assumptions: The scanner covers all dynamic components. Breakdown Regime: Dynamic injection of external text bypassing the CI pipeline. Source: "No banned phrases on customer pages. The trust-claims registry + CI scanner catch them." [PAGE 1]

**3. Causal Gate for Publishing:**
Let $P(d)$ be the predicate "Draft $d$ is published". Let $Op_{explicit}$ be the set of explicit operator actions.
Temporal Logic Formula:
$$ \Box (P(d) \rightarrow \exists a \in Op_{explicit}, a \models \text{SetPublished}(d)) $$
This asserts that publishing strictly follows human agency. Units: Time-stamped events. Breakdown Regime: Automated cron jobs attempting direct DB writes. Source: "`ContentDraft.publishedAt` is set only by an explicit operator action." [PAGE 1]

**4. Model Calibration Singularity:**
Let $v$ be `MODEL_VERSION`. Let $\mathcal{CP}$ be the set of implemented `CalibrationProposal`s.
Singularity Condition:
$$ v_{new} > v_{old} \implies \exists cp \in \mathcal{CP} \text{ s.t. } cp.\text{model\_id} = v_{new} \land cp.\text{status} = \text{IMPLEMENTED} $$
If this logical implication is violated, the deployment halts (guardrail enforced). Units: Integer versioning coupled with structured document validation. Source: "No `MODEL_VERSION` bump without an IMPLEMENTED `CalibrationProposal`." [PAGE 1]
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The stringent rules outlined in the cheat sheet are direct descendants of systemic failures common in predictive analytics startups. Historically, platforms offering probabilistic picks have faced "retrocausal" damage—where future scandals retroactively destroy past credibility. The "No fabricated stats" rule traces its lineage to the dot-com era and early fantasy sports sites that inflated win rates during beta phases to attract venture capital, eventually collapsing under scrutiny when real outcomes failed to match fabricated priors. By mandating "Collecting...", the system acknowledges its infant state honestly, breaking the lineage of fraudulent seeding.

Furthermore, the "Banned phrases" registry is a genealogical defense against the linguistic contagion of gambling syndicates ("locks," "sure bets"), which historically created toxic user expectations and subsequent regulatory heat. By enforcing this via CI scanners, the platform attempts to sanitize its linguistic DNA.

However, a multi-week trap emerges from these very safeguards: Over-Cautious Paralysis. If the system rigorously hides stats until massive sample sizes are achieved (due to strict calibration proposals), it may appear stagnant or unhelpful compared to aggressive competitors who publish highly volatile, unverified percentages. The historical pendulum swings between hyper-transparent gamblers and sterile, overly compliant academic models. This platform risks being trapped in the latter, losing user retention while waiting for the slow accumulation of verifiable truth.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
We must simulate the recursive mental models of the stakeholders interacting with this launch script.
1. **The Operator's Mind (Crisis Habit Regression):** During a midnight launch, cognitive load peaks. The operator’s instinctive habit is to override safety checks to fix immediate visual bugs (e.g., "Just turn on stats so the dashboard looks alive!"). The cheat sheet explicitly fights this regression by providing the *exact* command to verify opacity (`PERFORMANCE_STATS_ENABLED=false`).
2. **The System's Counter-Trap:** The inclusion of automated smoke tests (`npm run test:brand-safety`) serves as an automated counter-trap. Even if the operator manually overrides a frontend flag to force a stat display, the CI/CD pipeline will fail on the next commit because the scanner detects a fabricated metric or a missing calibration proposal. This creates a dialectic tension: the manual hack works temporarily, but the system systematically punishes the deviation.
3. **The Customer's Expectation Clock:** The end-user visits `/dashboard` expecting certainty. When they see "Collecting..." or a "Sample-mode banner," their internal model registers a discrepancy. The system aims to reframe this discrepancy not as incompetence, but as integrity. However, if the "clock" ticks too long—days or weeks in demo mode—the user's patience decays exponentially. The theory of mind here dictates that the platform must balance rigorous epistemic honesty against the psychological necessity of providing some actionable feedback, creating a tight window for launching real data before the user abandons the "stub."
</RETROCAUSAL_GENEALOGY>

<CROSS_LAYER_VETO_ADJUDICATION>
We establish proof that physical, biomechanical, and environmental factors act as absolute vetoes on the logical execution of the launch night.

**Biomechanical Veto (Fatigue & Dexterity):**
The script relies on sequential terminal inputs (`npm run ...`). At launch hour (potentially late night), human reaction time $RT$ increases, and fine motor control degrades. The probability of mistyping a crucial environment variable (e.g., flipping `PERFORMANCE_STATS_ENABLED` incorrectly) spikes. If the operator accidentally deletes the `DATABASE_URL`, `isStubMode()` permanently locks to true, triggering the Sample-mode banner indefinitely. This is a biomechanical veto overriding the software's intended state.

**Environmental/Infrastructure Veto (Network Latency & API Limits):**
The verification step "Today's picks list renders rows" assumes external data fetches complete within timeout thresholds. If the underlying sports data API hits rate limits (a physical constraint of server bandwidth), the cockpit hangs. The cheat sheet suggests checking the console for stack traces, but if the network layer is physically saturated, no amount of software debugging resolves it. The hardware bottleneck vetoes the logical assumption that the seed command will successfully populate the slate.

**Weather/Physical Infrastructure Veto:**
If the hosting provider's region experiences localized weather events (e.g., a fiber cut due to heavy rain), the `APP_URL` health probe (`npm run prod:probe`) will return a connection refused error. This physical disruption entirely nullifies the "4 URLs to visit" directive. The operator is left executing local scripts pointing to a black hole. Thus, physical reality continuously adjudicates the abstract rules of the cheat sheet, capable of instantly invalidating all four invariants if connectivity is severed.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
To stress-test the operational robustness, we construct three Reinforcement Learning from Verified Reasoning (RLVR) counterfactual scenarios where adhering blindly to the cheat sheet fails, requiring adaptive veto.

**Scenario 1: The Phantom Stat Bleed**
*Counterfactual:* The operator runs `npm run morning:setup` and sees "Verified Record: Collecting..." correctly. However, they deploy to production with `PERFORMANCE_STATS_ENABLED=true` because the staging env var was leaked into the `.env.production` file.
*Prediction/Veto:* Users immediately see a 0% win rate or small-sample variance (e.g., 1/1). Instead of hiding the lack of data, the system broadcasts raw, uncalibrated noise.
*RLVR Response:* The system must implement a secondary veto: If `Total_Picks < Threshold_N` (e.g., N=50), automatically override `PERFORMANCE_STATS_ENABLED` to false regardless of the flag, logging a critical warning. Blind adherence to the flag allows catastrophic reputation damage on day one.

**Scenario 2: The Calibration Trap**
*Counterfactual:* A new `CalibrationProposal` is implemented and approved, allowing a `MODEL_VERSION` bump. The operator runs the bump, but the new model suffers from severe concept drift due to a sudden league rule change overnight, producing confidently wrong picks.
*Prediction/Veto:* The cheat sheet validates the *process* (proposal exists), but not the *output quality*. The system aggressively publishes garbage data, violating the spirit of "No fabricated stats" even though technically the stats are real.
*RLVR Response:* Introduce a probabilistic sanity check. If the new model's predicted confidence scores deviate > X sigma from the previous model's baseline on the first 10 slates, trigger an automatic rollback veto, freezing the publish action despite the valid proposal.

**Scenario 3: The Stub-Reality Collision**
*Counterfactual:* The operator forgets to flip off `DEMO_PICKS_ENABLED`. Real users sign up. The backend starts writing real user interactions to the database, but the frontend continues injecting sample picks because the flag wasn't flipped.
*Prediction/Veto:* Real user accounts get polluted with synthetic pick histories. The CSV export (`/cockpit/history`) mixes real and fake data. Trust is obliterated.
*RLVR Response:* The `db:seed` command must include a hard partition veto. Before injecting stubs, query the database for any `User` records older than 1 hour (indicating organic growth). If found, throw an exception and refuse to seed, forcing the operator to manually intervene and migrate/clean the schema. This prevents silent data contamination.
</RLVR_COUNTERFACTUAL_VETOES>