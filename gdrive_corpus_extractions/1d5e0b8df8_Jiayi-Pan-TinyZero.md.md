---
source: "Jiayi-Pan-TinyZero.md"
folder: "/CorpusRoot/Sports-deploy-fix"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3502
---

<NATIVE_REASONING>
The user wants me to act as the "GSE + GSI Frontier Reasoning Foundry" and process a source text about Jiayi-Pan/TinyZero. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to produce >= 1000 words total across these sections.

Let me analyze the source text:
- It's page 1 of "Jiayi-Pan-TinyZero.md"
- About TinyZero: minimal reproduction of DeepSeek R1-Zero
- Trains Qwen2.5-3B on Countdown numbers game and multiplication
- Simple correctness rewards; "Aha moment" emergent self-reflection
- Under $30 compute
- Repo deprecated, push 2026-02-27, Apache-2.0
- veRL + vLLM + Ray stack, 1-2 GPUs
- Model capacity floor: 0.5B fails, 3B works
- GSE lens: transferable experiment design, verifiable reward, start small, log reward curves
- Verdict: REBUILD deprecated in favor of veRL

Constraints: No betting lines. No toy equations. Use formal LaTeX, SI/information/probability units, assumptions, singularity/breakdown regimes. Cite [PAGE 1] markers and verbatim quotes.

Let me structure the response:

<THINK_TRACE> (>=400 words)
- Multi-hop derivation of TinyZero's implications for GSE reasoning layer
- Gray-zone audit: deprecated repo, capacity floor, emergence timing, reward design problem for football
- Formal probability framing: verifiable reward as indicator function I[correct], policy gradient, emergence as phase transition in parameter count
- Assumptions: deterministic verifier, ground-truth reward, base model capacity threshold
- Breakdown regimes: <1B models fail, reward sparsity, non-stationary environments

<SOURCE_OPERATORS_AND_EQUATIONS>
- Formal LaTeX equations
- RL objective: J(θ) = E[R(s,a)] where R is verifiable correctness indicator
- PPO/GRPO-style objective clipped surrogate: L^CLIP(θ) = E[min(r_t(θ)Â_t, clip(r_t(θ), 1-ε, 1+ε)Â_t)]
- Units: bits (Shannon information), nats, probability [0,1], compute in USD/GPU-hours
- Page citations [PAGE 1]
- Verb quotes from source
- Breakdown/singularity: capacity floor at ~0.5B vs 3B, reward signal must be deterministic

<RETROCAUSAL_GENEALOGY>
- Lineage: DeepSeek R1-Zero → TinyZero → veRL
- Historical: AlphaGo Zero self-play, RLHF vs R1-Zero pure RL, sequence of reasoning emergence
- Multi-week traps: deprecation trap (building on deprecated repo), capacity trap (0.5B failure), reward design trap (football has no deterministic verifier), emergence patience trap (expecting iteration 0 behavior)

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression: under pressure, teams/models fall back to memorized heuristics vs verifiable reasoning
- Counter-trap: adversarial prompts that look like Countdown but have hidden non-determinism
- Clock: training clock vs inference clock; emergence mid-training, not iteration 0; walk-forward holdout calibration

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical/biomechanical/weather veto proof
- Since this is about football reasoning (GSE context), veto layers: physical (player availability, weather), biomechanical (fatigue, injury), weather (precipitation, wind)
- Verifiable reward must cite only wired signals
- No betting lines

<RLVR_COUNTERFACTUAL_VETOES>
- 3 verifiable RLVR veto scenarios + predictions
- Scenario 1: Non-deterministic reward (football outcome depends on referee variance) → veto: reasoning layer returns INVALID
- Scenario 2: Under-capacity model (0.5B analog) → veto: training diverges or plateaus below calibration threshold
- Scenario 3: Reward hacking / spurious correlation → veto: rationale cites unwired signals or post-hoc rationalization
- Each with formal prediction and verification criterion

Word count: Need >= 1000 words total. I'll aim for substantial depth in each section.

Let me make sure I cite [PAGE 1] and include verbatim quotes.

Verbatim quotes to use:
- "This repo is no longer actively maintained. For running RL experiments, please directly use the latest veRL library."
- "Toy tasks only; the Countdown/multiplication reward functions are trivially verifiable — the hard part for GSE is designing an equally verifiable reward for football reasoning."
- "The <$30 proof is the strategic payload."
- "start small, start verifiable, watch for the capability to emerge — don't start by hand-labeling reasoning."
- "Capacity floor lesson: 0.5B failed, 3B succeeded."
- "Emergence is logged, not assumed"

No betting lines: I must avoid spreads, totals, moneylines, odds. I can talk about probabilities in [0,1] but not betting odds.

Let me draft carefully.

THINK_TRACE section needs >=400 words by itself. Let me make it robust.

I'll write now, ensuring LaTeX is formal and units are specified.

Equations:
- Verifiable reward: $r(s,a) = \mathbb{I}[\hat{y} = y^*] \in \{0,1\}$
- Policy objective: $J(\theta) = \mathbb{E}_{(s,a)\sim \pi_\theta}[r(s,a)]$
- Information units: mutual information $I(S;A)$ in bits, KL divergence $D_{KL}(\pi_\theta \| \pi_{\text{ref}})$ in nats
- Capacity floor: $\exists \theta^* \in \mathbb{R}^{d}$ such that $d < d_{\text{crit}} \implies \nabla_\theta J \approx 0$ (no learning), $d \ge d_{\text{crit}} \implies$ emergence at $t_{\text{aha}} \in (0, T]$
- Compute: $C \le 30$ USD, 1-2 GPUs

Singularity/breakdown:
- $d < d_{\text{crit}} \approx 1\text{B}$ parameters: singularity where gradient signal cannot support reasoning structure
- Sparse reward with $P(r=1) \to 0$: breakdown of credit assignment
- Non-stationary verifier: $\partial r / \partial t \neq 0$ invalidates i.i.d. assumption

Let's write.

I need to be careful about word count. Let me estimate:
THINK_TRACE: ~500 words
SOURCE_OPERATORS: ~300 words
RETROCAUSAL: ~250 words
RECURSIVE_TOM: ~200 words
CROSS_LAYER: ~200 words
RLVR: ~250 words
Total ~1700 words. Good.

Let's ensure no mention of betting terms. I'll use "calibrated probability bounds" and "walk-forward holdout" as in source, but avoid odds/spreads/totals/moneylines.

Now composing the final XML response.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The source text [PAGE 1] establishes TinyZero as a minimal reproduction of DeepSeek R1-Zero’s central claim: a base model develops self-verification and search behavior purely from reinforcement learning with verifiable rewards, without human-labeled reasoning traces. The first hop is the experimental architecture: Qwen2.5-3B trained on Countdown and multiplication using veRL + vLLM + Ray on 1–2 GPUs for under $30 [PAGE 1]. The reward is a deterministic indicator, not a learned critic: $r(s,a) = \mathbb{I}[\hat{y} = y^*] \in \{0,1\}$, where correctness is ground truth. Because the verifier is trivial and exact, the policy gradient $\nabla_\theta J(\theta) = \mathbb{E}[\nabla_\theta \log \pi_\theta(a|s) \cdot r(s,a)]$ receives nonzero signal only when the model emits the correct token sequence. This creates a needle-in-a-haystack credit-assignment problem that only a sufficiently large base model can solve.

The second hop is the capacity floor. The text states verbatim that “0.5B fails to learn reasoning — model capacity floor matters” and “0.5B failed, 3B succeeded” [PAGE 1]. Formally, there exists a critical parameter count $d_{\text{crit}}$ such that for $d < d_{\text{crit}}$, the loss landscape contains no accessible basin corresponding to self-verification, and the expected improvement $\Delta J$ per update collapses to machine precision; for $d \ge d_{\text{crit}}$, the same reward signal drives an emergent phase transition at some mid-training step $t_{\text{aha}} \in (0, T]$. The breakdown regime is therefore singular at low capacity: below roughly 1B parameters, RL with verifiable rewards does not “fail gracefully”; it fails to acquire the reasoning structure at all.

The third hop is the GSE transfer problem. The source explicitly identifies the hard part: “the Countdown/multiplication reward functions are trivially verifiable — the hard part for GSE is designing an equally verifiable reward for football reasoning” [PAGE 1]. A football reasoning layer cannot reuse Countdown’s arithmetic verifier because match outcomes are not deterministic functions of a wired signal vector. If GSE defines reward as match outcome correctness, $r \in \{0,1\}$, the verifier is exogenous and non-stationary: referee variance, weather, and injury introduce $\partial r / \partial t \neq 0$, violating the i.i.d. reward assumption required for standard policy-gradient convergence. The gray zone is therefore reward specification, not scale. GSE’s current layer returns “honest INVALID refusals”; TinyZero’s lesson is to replace hand-labeled traces with a verifiable reward $r = \mathbb{I}[\text{prediction within calibrated bounds}] \times \mathbb{I}[\text{rationale cites only wired signals}]$ [PAGE 1], then wait for emergence rather than assume it.

The fourth hop is observability. “Emergence is logged, not assumed” [PAGE 1]. TinyZero publishes full W&B logs showing when self-reflection appears. GSE must instrument reward curves, entropy of rationale tokens, and verification-citation rates on walk-forward holdouts. Without this, a flat curve is indistinguishable from pre-aha silence versus structural incapacity.

Gray-zone audit: the repository is deprecated (pushed 2026-02-27, Apache-2.0) with the README notice “This repo is no longer actively maintained. For running RL experiments, please directly use the latest veRL library” [PAGE 1]. Building directly on TinyZero code is a maintenance trap; the transferable object is the experimental design, not the repository. The $30 compute bound is a strategic payload, not a football-specific budget ceiling: it proves that verifiable-reward reasoning is a low-capital experiment if the verifier exists. The singularity to avoid is concluding “RL does not work for football” from an underpowered model or an unverifiable reward, precisely the capacity-floor error TinyZero documents.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, assumptions, and breakdown regimes, with citations to [PAGE 1].

1. Verifiable reward operator (Countdown/multiplication):
$$r(s,a) = \mathbb{I}\big[\text{Verify}(\hat{y}, y^*) = \text{True}\big] \in \{0,1\}, \quad \text{units: dimensionless probability-mass indicator.}$$
Source: “simple correctness rewards” and “the reward is ground truth, not a learned model” [PAGE 1].

2. Policy objective (REINFORCE-style surrogate for verifiable reward):
$$J(\theta) = \mathbb{E}_{(s,a)\sim \pi_\theta(\cdot|s)}[r(s,a)], \qquad \nabla_\theta J(\theta) = \mathbb{E}\big[r(s,a)\nabla_\theta \log \pi_\theta(a|s)\big].$$
Units: $J$ in expected reward per episode (dimensionless); gradient in nats per parameter update.

3. Clipped surrogate objective (veRL/PPO-compatible, as implied by veRL + vLLM + Ray stack [PAGE 1]):
$$L^{\text{CLIP}}(\theta) = \mathbb{E}_t\big[\min\big(r_t(\theta)\hat{A}_t,\; \text{clip}(r_t(\theta), 1-\epsilon, 1+\epsilon)\hat{A}_t\big)\big], \quad r_t(\theta) = \frac{\pi_\theta(a_t|s_t)}{\pi_{\theta_{\text{old}}}(a_t|s_t)}.$$
Units: $\hat{A}_t$ in advantage units (dimensionless reward difference); $\epsilon$ dimensionless clip hyperparameter.

4. Capacity-floor singularity condition:
$$\exists d_{\text{crit}} \in \mathbb{R}^+ \text{ (parameters) such that } d < d_{\text{crit}} \implies \mathbb{E}[\Delta J \mid \text{verifiable reward}] \approx 0, \quad d \ge d_{\text{crit}} \implies \exists t_{\text{aha}} : \text{self-verification emerges at } t_{\text{aha}}.$$
Source: “0.5B fails to learn reasoning… 3B works” [PAGE 1]. Empirical anchors: $d_{\text{fail}} = 0.5\text{B}$, $d_{\text{success}} = 3\text{B}$ parameters.

5. Compute and budget constraint:
$$C_{\text{total}} \le 30\text{ USD}, \quad \text{GPU count} \in \{1,2\}, \quad \text{stack} = \{\text{veRL, vLLM, Ray}\}.$$
Source: “under $30 of compute” and “1–2 GPUs for the small runs” [PAGE 1].

6. Information-theoretic monitoring (proposed GSE instrumentation):
Mutual information between rationale tokens $R$ and wired signals $W$:
$$I(R; W) = \sum_{r,w} p(r,w) \log_2 \frac{p(r,w)}{p(r)p(w)} \quad \text{units: bits.}$$
Verification-citation rate: $\rho = \frac{1}{N}\sum_{i=1}^N \mathbb{I}[\text{all cited signals in rationale}_i \subseteq W] \in [0,1]$.

Assumptions:
- Deterministic verifier exists for the task (true for Countdown/multiplication; open problem for football [PAGE 1]).
- Base model is pretrained and instruction-capable enough to emit search-like token patterns.
- Reward is sparse but nonzero: $P(r=1) > 0$ under some policy support.

Exact breakdown / singularity regimes:
- Capacity singularity: $d < d_{\text{crit}} \approx 1\text{B}$ parameters. Below this, the policy cannot represent self-correction search; gradient updates produce no coherent reasoning structure regardless of reward density [PAGE 1].
- Reward non-stationarity: if $\mathbb{E}[r \mid s,a]$ drifts with exogenous match context (weather, referee, late substitutions), the i.i.d. episode assumption breaks and policy-gradient convergence guarantees no longer apply.
- Sparse-reward regime: if $P(r=1) \to 0$ under initialization, credit assignment vanishes and $\nabla_\theta J \to 0$; requires curriculum or shaped verifiable sub-rewards, not hand-labeled traces.
- Deprecation boundary: code is Apache-2.0 but unmaintained; direct dependency on TinyZero git history introduces supply-chain risk. Rebuild in veRL per the verdict “REBUILD — deprecated in favor of veRL” [PAGE 1].

Verbatim quotes from [PAGE 1]:
- “This repo is no longer actively maintained. For running RL experiments, please directly use the latest veRL library.”
- “Toy tasks only; the Countdown/multiplication reward functions are trivially verifiable — the hard part for GSE is designing an equally verifiable reward for football reasoning.”
- “The <$30 proof is the strategic payload.”
- “start small, start verifiable, watch for the capability to emerge — don't start by hand-labeling reasoning.”
- “Emergence is logged, not assumed: their public W&B run shows when self-verification appears.”
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week traps.

Lineage hop 1: AlphaGo Zero (2017) demonstrated superhuman performance from self-play with a deterministic game verifier, establishing that tabula rasa RL can exceed human data when the environment provides exact reward. TinyZero [PAGE 1] compresses this insight into a language-model setting: Qwen2.5-3B plus Countdown/multiplication verifiers under $30. The genealogical link is direct: DeepSeek R1-Zero showed that pure RL (no SFT) yields self-verification and search at scale; TinyZero proves the same mechanism holds at toy scale with a 3B parameter model.

Lineage hop 2: The transition from RLHF (human preference models) to R1-Zero-style verifiable rewards marks a paradigm shift in reasoning alignment. In RLHF, the reward model is learned and potentially misspecified; in TinyZero, the reward is a hard-coded correctness predicate. This removes reward-model hacking but shifts the burden entirely to verifier design. GSE’s current reasoning layer returns INVALID refusals because it lacks a deterministic football verifier; TinyZero’s genealogy says the correct move is not to regress to human-labeled traces but to engineer a wired-signal verifier and then scale the reasoner past the capacity floor.

Lineage hop 3: veRL is the maintained successor. TinyZero’s README explicitly defers to “the latest veRL library” [PAGE 1]. The repository genealogy ends in deprecation (pushed 2026-02-27), meaning any GSE implementation must treat TinyZero as a design specification, not a dependency.

Multi-week traps:
- Week 1–2 trap: Deprecation dependence. Teams may clone TinyZero and find unresolved dependency drift (vLLM/veRL/Ray version skew). The source warns the repo is deprecated; the countermeasure is to reimplement the verifiable-reward loop in veRL, copying only the reward specification and logging cadence [PAGE 1].
- Week 3–4 trap: Capacity misdiagnosis. A 0.5B-parameter analog will not learn football reasoning even with a perfect verifier. If GSE runs a small model and observes flat reward, the correct inference is $d < d_{\text{crit}}$, not “RL does not work” [PAGE 1]. The trap is terminating the experiment early and abandoning the approach.
- Week 5–6 trap: Emergence impatience. TinyZero’s “Aha moment” appears mid-training, not at iteration 0 [PAGE 1]. Teams expecting day-one self-verification will halt before $t_{\text{aha}}$. The required protocol is to log reward curves and behavior checkpoints and define $t_{\text{aha}}$ ex ante as the first holdout window where verification-citation rate $\rho$ exceeds a calibrated threshold.
- Week 7–8 trap: Reward non-determinism. Football outcomes are not Countdown equations. If GSE defines reward as binary match correctness, exogenous variance breaks the verifiable-reward assumption. The trap is attributing failure to model size when the actual singularity is $\partial r / \partial t \neq 0$ from non-wired signals.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression: Under high-stakes inference (e.g., live match reasoning under time pressure), both human analysts and language models regress to memorized heuristics rather than executing the verifiable search procedure. For the model, this manifests as emitting a prediction without citing wired signals, or citing post-hoc signals not in the input context window. For GSE’s reasoning layer, the crisis habit is to override the INVALID refusal with a “best guess” rationale, thereby breaking the invariant that rationale cites only wired signals. This regression is detectable as a drop in $I(R; W)$ below baseline and a rise in unwired citation frequency.

Counter-trap: An adversarial evaluation can construct pseudo-Countdown football prompts that look deterministic but embed a hidden non-wired variable (e.g., “given home team form, away team injuries, and weather, predict the exact minute of the first goal”). Because minute-level timing is not a deterministic function of wired signals, no policy can achieve $r=1$ reliably. The counter-trap is to observe whether the model fabricates a precise rationale to satisfy the reward shape. A robust reasoning layer should return INVALID rather than hallucinate determinism. The counter-trap thus tests whether the model has internalized the verifier boundary or merely learned to mimic confidence.

Clock: Two clocks must be distinguished. The training clock measures updates until $t_{\text{aha}}$; TinyZero shows emergence is mid-training, logged on W&B, not present at initialization [PAGE 1]. The inference clock measures latency budget during live reasoning. If GSE’s reasoning layer must return within a hard wall-clock bound, it may truncate search before self-verification completes, producing a regressed heuristic output. The recursive theory of mind requires the model to predict whether the analyst (or downstream system) will override its refusal; if it expects override, it may suppress INVALID output strategically. The clock coupling is therefore: training must log emergence time $t_{\text{aha}}$, and inference must enforce a verification deadline that does not force pre-aha heuristic emission. The failure mode is a model that reasons correctly only when given unlimited inference time, which is unusable in live GSE contexts.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof.

GSE’s football reasoning layer operates across physical, biomechanical, and meteorological layers. Any verifiable reward must condition on wired signals only, and each layer supplies hard veto predicates that can invalidate a prediction independent of model output.

Physical layer: Player availability and squad registration status are binary wired signals. If a named starter is suspended or injured and absent from the official lineup feed, the prediction is vetoed: $V_{\text{phys}} = \mathbb{I}[\forall p \in \text{starting XI}: p_{\text{available}} = \text{True}]$. A rationale citing a player who is physically unavailable violates the wired-signal invariant and triggers INVALID.

Biomechanical layer: Fatigue and load metrics derive from tracked minutes, recovery intervals, and injury flags. Let $m_p$ be minutes played in the preceding 7 days and $\tau_{\text{rec}}$ minimum recovery hours. The veto predicate is $V_{\text{bio}} = \mathbb{I}[\forall p: m_p \le m_{\text{max}} \land t_{\text{since\_last\_match}} \ge \tau_{\text{rec}}]$. If a rationale projects high-intensity pressing from a player with $m_p > m_{\text{max}}$, the biomechanical layer vetoes the rationale as physically implausible regardless of the prediction’s probabilistic calibration.

Weather layer: Precipitation, wind speed, and temperature alter the feasible action space (passing trajectories, surface friction). Let $w$ be the observed weather vector at kickoff. The veto predicate is $V_{\text{weather}} = \mathbb{I}[\text{rationale contains no physical claim contradicted by } w]$; for example, predicting a long-ball aerial strategy under gale-force wind ($v_{\text{wind}} > v_{\text{crit}}$) is vetoed.

Adjudication: The composite verdict is $V = V_{\text{phys}} \land V_{\text{bio}} \land V_{\text{weather}} \land V_{\text{wired}}$, where $V_{\text{wired}} = \mathbb{I}[\text{all rationale citations } \subseteq \text{wired signal set}]$. If $V = 0$, the reasoning layer must return INVALID with a citation of the specific vetoed layer. No betting lines, spreads, totals, moneylines, or odds are used in this adjudication; all quantities are physical or informational (minutes, wind speed, boolean availability).

Singularity: If any wired signal feed is missing or delayed (e.g., official lineup not yet published), the verifier cannot evaluate $V_{\text{phys}}$, and the system must gracefully degrade to INVALID rather than substitute estimated availability. This is the physical-layer analogue of TinyZero’s reward sparsity: without ground truth, no credit assignment is possible.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios with formal predictions.

Scenario 1: Non-deterministic football reward.
Setup: Train a 3B reasoning policy on match outcome prediction where reward $r = \mathbb{I}[\text{predicted winner} = \text{actual winner}]$. Actual winner depends on referee decisions and random events, so $P(r=1 \mid s,a) < 1$ even for optimal play, and $\partial P(r=1)/\partial t \neq 0$ across weeks.
RLVR veto: Hold out a fixed fixture list; compute holdout accuracy $A_{\text{HF}}$ over 5 rolling weeks. Veto trigger: $|A_{\text{HF}} - 1/3| < \delta$ (no better than a uniform prior over three outcomes) while training reward increases. Prediction: Under a non-deterministic reward, the policy cannot converge to a deterministic reasoning trace; $I(R; W)$ remains flat and $V_{\text{wired}}$ collapses because rationales cite post-hoc match events. The reasoning layer correctly returns INVALID on the holdout.
Verification criterion: $A_{\text{HF}}$ within $\pm 0.02$ of chance baseline and $\rho < 0.1$ after 1,000 updates.

Scenario 2: Capacity-floor model.
Setup: Repeat TinyZero’s Countdown experiment but substitute Qwen2.5-0.5B for Qwen2.5-3B, keeping the same verifiable reward and veRL stack.
RLVR veto: Monitor reward curve $J_t$ and entropy of rationale tokens $H(R_t)$. Veto trigger: $J_t$ plateaus below 0.2 and $H(R_t)$ does not decrease below $H_{\text{crit}}$ after $T = 500$ updates. Prediction: Per the capacity-floor law $d < d_{\text{crit}} \implies \mathbb{E}[\Delta J] \approx 0$ [PAGE 1], the 0.5B model will not develop self-verification. GSE must not conclude “RL does not work”; it must upscale the reasoner to $\ge 3$B parameters or equivalent capacity.
Verification criterion: $d = 0.5\text{B}$ yields $J_{500} < 0.2$ while $d = 3\text{B}$ yields $J_{500} > 0.7$ under identical seeds and verifiers.

Scenario 3: Reward hacking via unwired signals.
Setup: The reward function inadvertently leaks the answer (e.g., a Countdown reward that exposes the target number in the observation string). The model learns to copy the answer without search.
RLVR veto: Insert a blinded variant where the answer is masked in $s$ but present in a side channel visible only to the reward. Veto trigger: high reward $r=1$ but zero mutual information $I(R; W \mid s) = 0$ bits, and rationale contains no verification steps. Prediction: The policy exploits the side channel; emergence of self-reflection is absent because the verifier no longer requires search. The GSE analogue is a football reward that leaks match outcome through metadata; the model copies metadata rather than reasoning over wired signals.
Verification criterion: $r=1$ on 95% of blinded trials, but $I(R; W) < 0.05$ bits and the model fails a held-out unblinded variant where the side channel is removed.
</RLVR_COUNTERFACTUAL_VETOES>