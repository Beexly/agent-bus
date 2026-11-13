---
source: "arxiv_2501.13994v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 9
model: baidu/ernie-5.5-flash-preview:free
words: 4615
---

<NATIVE_REASONING>
The user is asking me to analyze a paper (CSAOT: Cooperative Multi-Agent System for Active Object Tracking) using a specific framework with XML sections. This is an academic paper analysis task. Let me think about what's actually being requested here.

The system prompt sets up a "GSE + GSI Frontier Reasoning Foundry" with strict invariants about no betting lines, no toy equations, formal LaTeX, page citations, and specific XML sections. There's also an instruction about "Crisis habit regression vs counter-trap vs clock" and "CROSS_LAYER_VETO_ADJUDICATION."

Wait, let me think about this carefully. The framing here is a bit odd. The prompt talks about "betting lines," "spreads," "moneylines," "odds" — these are sports betting terms. The "RECURSIVE_THEORY_OF_MIND" section talks about "Crisis habit regression vs counter-trap vs clock." The "CROSS_LAYER_VETO_ADJUDICATION" talks about "Physical/biomechanical/weather veto proof."

This seems to be a framework designed for sports analysis or something similar, but being applied to a computer vision / multi-agent RL paper. The paper is about Active Object Tracking with a car in a simulated AirSim environment.

Actually, this is a legitimate technical paper analysis task. The user wants me to deeply analyze this arxiv paper on CSAOT. There are no betting lines to mention (and the invariant says never mention them, which is fine since this is an academic paper).

Let me just do a rigorous technical analysis of this paper. The framework asks for:
1. THINK_TRACE - deep multi-hop derivation and gray-zone audit
2. SOURCE_OPERATORS_AND_EQUATIONS - formal LaTeX, units, page citations, breakdown
3. RETROCAUSAL_GENEALOGY - historical/scientific lineage
4. RECURSIVE_THEORY_OF_MIND - crisis habit regression vs counter-trap vs clock
5. CROSS_LAYER_VETO_ADJUDICATION - physical/biomechanical/weather veto proof
6. RLVR_COUNTERFACTUAL_VETOES - 3 verifiable RLVR veto scenarios + predictions

The "veto adjudication" and "counterfactual vetoes" language seems borrowed from a sports/forecasting framework, but I can adapt it to the actual content: this is about whether the paper's claims hold up, what would falsify them, physical constraints of the car simulation, etc.

Let me note: the "weather veto" makes some sense since the paper mentions AirSim can simulate different weather conditions (page 6). The "biomechanical" doesn't really apply since there are no humans — it's a car. But I can adapt it to the vehicle dynamics.

Let me be careful and honest here. This is a legitimate technical request. I should produce a rigorous, deep analysis of the CSAOT paper. Let me actually engage with the real technical content:

Key elements of the paper:
- CSAOT: Cooperative Multi-Agent System for Active Object Tracking
- Uses MADRL (Multi-Agent Deep RL) + MoE (Mixture of Experts) → they call it MoP (Mixture of Policies)
- Single device, role-based collaboration
- Two-layer hierarchical system:
  - Layer 1 (subtasks): Detection agent (bounding box, a_d = (x_l, y_l, x_r, y_r)), Movement agent (center, a_n = (x_c, y_c)), Obstacle agent (distance, a_a = (x))
  - Layer 2: Action decision / navigation agent (a_i = (Δv, Δα))
- ResNet50 for feature extraction
- MLP + LSTM for encoding
- PPO for training
- DTDE (Decentralized Training - Decentralized Execution) — note they deviate from CTDE
- Dec-POMDP formulation
- AirSim simulation (built on Unreal Engine)
- 4 maps: SingleTurn, SimpleLoop, SharpLoop, Complex
- Metrics: Episode Length (EL), Cumulative Rewards (CR)

Reward functions:
- Collision: -50, episode ends
- R_track: min(S_mi/S_frame*0.25, 2 - S_mi/S_frame*0.25) * λ_track
- R_nav: negative normalized Manhattan distance * λ_nav
- R_move: -3 if speed=0 and Δv_i ≤ 0, else 0
- R_steer: -3 if speed=0 and Δα_i ≠ 0, else 0
- R_diff: |Δv_i - Δv_{i-1}| * λ_diff
- R_detect: IoU(m, a_d) * λ_detect
- R_obstacle: |a_a - d_true| * λ_obstacle
- R_movement: Manhattan(a_n, center(m)) * λ_movement

MoP formula:
MoP(o, K) = Σ_{i∈S_K} (w_i / Σ_{j∈S_K} w_j) · p_i(o; θ_i)

MoE formulas (preliminaries):
S_K = TopK(g(x; φ))
y(x) = Σ_{i∈S_K} (p_i / Σ_{j∈S_K} p_j) · f_i(x; θ_i)

PPO:
L^CLIP(θ) = E_t[min(r_t(θ) Â_t, clip(r_t(θ), 1-ε, 1+ε) Â_t)]
r_t(θ) = π_θ(a_t|s_t) / π_θ_old(a_t|s_t)

Results:
- Complex: EL 25±4, CR -150 (CSAOT) vs 18±5 (SingleAgent) → ~30% improvement
- SharpLoop: 30±3 vs 26±2
- SimpleLoop: 23±1 vs 21±2
- SingleTurn: 15±0, CR -25.46 (CSAOT) vs -31.37 (SingleAgent)

Hyperparameters:
- GPU: NVIDIA RTX 4060 6GB
- CPU: Intel i5-12400F
- RAM: 32GB
- Epoch per sample: 2
- Expert networks: 4
- K: 2
- Learning rate: 0.003
- ε: 0.99
- ε_decay: 0.9

Now let me think about the gray-zone issues and critical analysis:

1. The CR is almost always at the minimum (-150) because of the terminating condition. This means the tracking reward is essentially never positive enough to matter in most maps. The only map where CR > -150 is SingleTurn (-25.46). This is a significant issue — the reward signal is dominated by the episode termination condition.

2. The "Mixture of Policies" is essentially identical to the MoE formula. There's no real novelty distinction from MoE — the paper admits "The way w is calculated in this architecture is the same as the previously shown MoE method." So MoP = MoE applied to policy networks. This is a gray zone for the novelty claim.

3. The paper claims single-device multi-agent, but the "agents" all share the same observation source and are essentially sub-networks in a hierarchical pipeline. Is this really "multi-agent"? This is more like a modular/hierarchical single-agent architecture with separate reward signals. The "multi-agent" framing is debatable.

4. DTDE with separate reward functions — this is essentially independent PPO learners with shaped rewards. No actual communication/coordination mechanism between agents beyond the hierarchical feed-forward.

5. γ = 1 (discount factor set to 1) — this is problematic for infinite horizon, but they use finite episodes (EL caps), so it's a finite-horizon undiscounted return. This is defensible but worth noting.

6. The scaling constant 0.25 in R_track — where does it come from? It's the target ratio for bounding box area / frame area. The min(x, 2-x) structure creates a reward peak when S_mi/S_frame*0.25 = 1, i.e., S_mi/S_frame = 4, which is impossible (bounding box area can't exceed frame area). Wait, let me check: min(a, 2-a) is maximized when a = 2-a, i.e., a = 1. So it's maximized when S_mi/S_frame * 0.25 = 1, meaning S_mi/S_frame = 4. But S_mi/S_frame ≤ 1 always. So the reward is monotonically increasing in S_mi/S_frame over the feasible range [0, 1]. At S_mi/S_frame = 1, R_track = min(0.25, 1.75) = 0.25. Hmm, so actually the min's first argument (S_mi/S_frame*0.25) is always the binding one in feasible range since it's ≤ 0.25 < 1.75. So the min(x, 2-x) is a strange construction here — the second term never binds. This is a gray-zone design flaw worth pointing out. Actually the intent seems to be a reward that peaks when the target fills a "good" portion of the frame, but the math doesn't achieve that within feasible area ratios.

Wait, let me reconsider. Maybe the intent was S_frame/S_mi or something. As written, with S_mi/S_frame ∈ [0,1], then S_mi/S_frame*0.25 ∈ [0, 0.25], and 2 - that ∈ [1.75, 2]. min is always the first term. So R_track = (S_mi/S_frame)*0.25*λ_track, monotonically increasing — rewards getting as close as possible (largest bbox). This contradicts the stated motivation "to ensure the tracker keeps an appropriate distance from the object." The math says "get as close as possible," the prose says "keep appropriate distance." This is a genuine inconsistency.

7. The collision penalty of -50 and immediate episode end, combined with the CR minimum of -150, suggests 3 collisions or a mix ends the episode at -150. Actually -150 might be a floor. Let me think: the minimum CR is -150 for training termination. With -50 per collision, 3 collisions = -150. Or the behavioral penalties accumulate. Hard to say exactly.

8. Figure 5 and the convergence discussion — they admit PPO falls into local minima in Complex map, ε-greedy didn't help.

9. The comparison is only against a SingleAgent ablation of their own architecture, not against any published AOT baseline. This is a weak evaluation — no external SOTA comparison.

10. Statistical rigor: small number of trials, ± values are standard deviations presumably but n is not clearly stated. "average of the different trials" — number of trials unspecified.

Let me think about the "veto" framing. The prompt wants:
- CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. I can interpret this as: does the physical simulation setup (vehicle dynamics, weather) invalidate any claims? The car has acceleration limits [-0.5, 0.5] m/s² and steering [-0.5, 0.5] rad. These are quite small accelerations. Weather affects visual tracking (AirSim supports weather) but they only tested clear weather (Figure 2 "clear weather mode"). So a weather robustness claim is unsupported — this is a veto: they claim AirSim can simulate weather but only tested clear.

- RLVR_COUNTERFACTUAL_VETOES: RLVR = Reinforcement Learning from Verifiable Rewards. This is a stretch for this context, but I can interpret it as verifiable claims/falsifiable predictions. 3 scenarios where the method would fail and verifiable predictions.

Let me now write this up. I need to hit >= 1000 words across the sections, with THINK_TRACE >= 400 words. Let me use proper LaTeX for the equations and cite pages.

Let me be honest and rigorous. I should point out real strengths and real weaknesses. This is the "gray-zone audit" the prompt asks for.

Let me also note: the "biomechanical" veto is not applicable (no humans), but the vehicle dynamics are the analog. I'll note that honestly rather than forcing a fake biomechanical analysis.

I should write formal equations, cite pages, and give exact breakdown regimes. Let me be careful with the math.

Let me reconsider R_track more carefully:
$$R_{track} = \min\left(\frac{S_{mi}}{S_{frame}} \cdot 0.25,\ 2 - \frac{S_{mi}}{S_{frame}} \cdot 0.25\right) \cdot \lambda_{track}$$

Let u = S_mi/S_frame ∈ (0, 1] (ratio of target bbox area to frame area).
First arg: 0.25u ∈ (0, 0.25]
Second arg: 2 - 0.25u ∈ [1.75, 2)
min = 0.25u (always, since 0.25u ≤ 0.25 < 1.75 ≤ 2-0.25u)
So R_track = 0.25u · λ_track, strictly increasing in u.
Max at u=1: R_track = 0.25 λ_track.
The kink at u=4 (where 0.25u = 2-0.25u → 0.5u=2 → u=4) is outside feasible domain.
So the min() construction is dead code within the feasible regime — the "appropriate distance" motivation is not realized. This is a solid gray-zone finding.

Actually wait — maybe they intend S to be measured differently, e.g., the ratio could be frame/target so it can exceed 1? No, "R_track takes the area of the target's bounding box compared to the frame's area" and "S_mi" appears to be target and "S_frame" the frame. The notation "S_mi/S_frame" — mi might be "minibatch index i" or the target. In Eq 9 it's S_mi and S_frame. Given Eq 10 center(box) and the target box m = {(x_i,y_i)|i∈[1,n]}, m is the target bounding box, so S_mi = S_m = area of target box. So u = S_m/S_frame ∈ (0,1]. My analysis holds.

So R_track is monotonically increasing — it rewards the tracker for making the target as large as possible in frame, i.e., getting as close as possible. Combined with collision penalty -50, there's tension: get close for reward but not too close to collide. The "0.25" scaling and the min structure don't create the intended sweet spot. This is worth a full paragraph.

Now, R_diff penalizes |Δv_i - Δv_{i-1}| — sudden acceleration change. R_move and R_steer penalize braking/steering while stopped.

Let me think about the CR floor. Minimum CR = -150. If collision = -50 and ends episode, and if the tracker is passive... Actually the terminating threshold: "Limiting these two metrics during training also helps maintain meaningful samples." Table 2: Complex max EL 80, min CR -150; etc. During training, episode terminates if EL exceeds max or CR drops below min. During inference (Table 3), CR is -150 for all except SingleTurn.

Hmm, why is CR exactly -150 at inference for Complex, SharpLoop, SimpleLoop? The paper says "unless the tracker can track the target for the span of the maximum EL, the CR is always be the minimum value by default because of the terminating condition." So if the episode ends early (loses track), CR hits the -150 floor. Only SingleTurn (simplest) achieves positive-ish CR (-25.46).

Wait, but during inference, is the -150 a clamp/floor or an actual accumulated value? The text: "With CR, unless the tracker can track the target for the span of the maximum EL, the CR is always be the minimum value by default because of the terminating condition." This strongly implies CR is clamped/floored at -150 when the episode terminates early. So CR is basically a binary-ish signal: either you survive to max EL (and get a real accumulated value) or you're pinned at -150. This makes CR a poor continuous performance metric — it's essentially "% of maps where survival occurs."

This is a strong analytical point: the reward/metric design conflates "track duration" (EL) with a degenerate CR that's mostly saturated at the floor.

Now let me write. I'll aim for rigor and honesty, cite pages, use LaTeX, and satisfy the structural requirements. I won't force fake content. I'll adapt the "veto" and "counterfactual" framing sensibly to falsifiable technical claims.

For the sections, let me plan word counts:
- THINK_TRACE: ~450+ words
- SOURCE_OPERATORS_AND_EQUATIONS: ~350 words with LaTeX
- RETROCAUSAL_GENEALOGY: ~250 words
- RECURSIVE_THEORY_OF_MIND: ~250 words
- CROSS_LAYER_VETO_ADJUDICATION: ~250 words
- RLVR_COUNTERFACTUAL_VETOES: ~300 words

Total > 1000. Good.

Let me note about "recursive theory of mind" — the prompt frames it as "Crisis habit regression vs counter-trap vs clock." In this paper's context, I'll interpret it as the agent's decision dynamics under crisis (losing track), the reward-shaping "traps" (local minima), and the episode clock (EL cap). The paper explicitly discusses: "it can hardly get back on track if it loses track of the target" (page 7), PPO local minima (page 7), ε-greedy failing, AGAC suggestion. So I can map:
- "Crisis habit regression": the tracker, once it loses the target, regresses to a degenerate policy and can't recover (hysteresis). 
- "counter-trap": proposed fixes — ε-greedy (failed), AGAC, intrinsic rewards.
- "clock": the EL cap and CR floor terminating condition.

That's a genuine, grounded reading. Good.

Let me also be careful about the note that this is a car tracker, not pedestrian — so "biomechanical" veto becomes "vehicle-kinematic" veto. I'll be explicit that no biological agent is involved, correcting the frame honestly.

Let me write it now. I'll produce clean markdown with the XML section tags as headers (the prompt uses them as section delimiters). Since these are requested section markers, I'll use them literally as the prompt specifies the "exact XML sections."

One more check on the MoP novelty: Eq 18 (MoP) vs Eq 3 (MoE). 
Eq 3 (MoE): y(x) = Σ_{i∈S_K} [p_i / Σ_{j∈S_K} p_j] · f_i(x; θ_i)
Eq 18 (MoP): MoP(o,K) = Σ_{i∈S_K} [w_i / Σ_{j∈S_K} w_j] · p_i(o; θ_i)
These are structurally identical. MoP is just MoE where the experts f_i are policy networks p_i and input is observation o. The paper even states (page 6) "The way w is calculated in this architecture is the same as the previously shown MoE method." So the "novel mechanism" MoP is a relabeling/reapplication of Top-K MoE to policy networks. This is a legitimate gray-zone novelty claim. I'll flag it.

Also the term "Mixture of Policies" — there's actually prior work called "Mixture of Policies" (e.g., in RL). But within this paper's scope, they present it as novel. I'll note it's an application of MoE gating to an ensemble of PPO policy heads.

Also note: each agent has 4 expert networks, K=2 chosen. So it's a Top-2 of 4 gating. The gating network g(x;φ) is presumably a small MLP producing weights over 4 experts. Fine.

Let me also verify units:
- Action space: x ∈ [-0.5, 0.5] m/s² (acceleration), y ∈ [-0.5, 0.5] rad (steering). Note the paper says "acceleration rate (x∈[−0.5,0.5], negative values mean going in the reverse way) measured in m/s²" and "turning angle (y∈[−0.5,0.5]...) measured in radians."
- But then a_i = (Δv, Δα) — Δv is acceleration rate, Δα is steering angle. So Δv in m/s², Δα in rad. Slight inconsistency: earlier "a_i = (Δv, Δα) is used as the final action... Δv which is the acceleration rate, and Δα denotes the steering angle." OK consistent with units m/s² and rad.

Now write.

Actually, I realize I should double check the min() in R_track interpretation once more since it's my key quantitative claim. Eq 9:
R_track = min( S_mi/S_frame * 0.25, 2 - S_mi/S_frame * 0.25 ) · λ_track

Let r = S_mi/S_frame. Domain r ∈ [0,1].
f1(r) = 0.25r, f2(r) = 2 - 0.25r.
f1(0)=0, f1(1)=0.25.
f2(0)=2, f2(1)=1.75.
f1 < f2 for all r in [0,1] (since 0.25r ≤ 0.25 < 1.75 ≤ 2-0.25r).
min = f1(r) = 0.25r.
So R_track = 0.25 r λ_track. Monotone increasing, max 0.25λ at r=1. Kink point f1=f2 → 0.5r=2 → r=4, infeasible. Confirmed. Good, solid.

This means the min structure is vacuous and the reward just rewards maximizing target bbox area fraction — i.e., get close. The prose ("keep an appropriate distance") is not implemented. Also implies at full frame coverage reward saturates at 0.25λ. With λ_track presumably ~O(1), per-step reward ~0.25. Over an episode of, say, 25-80 steps, max positive accumulation ~6-20, which can't offset the -50 collision or reach the +side of -150 floor easily. So CR stays negative-dominated. This explains Table 3's -150 floors. Good, ties together.

Now let me write the full response. I'll keep it rigorous, cite pages, and be honest about what the paper does and doesn't show.

I need to make sure I don't mention betting lines (I won't — nothing to do with this paper anyway). I'll produce the XML sections as requested.

Let me write approximately 1200-1500 words total to be safe on the 1000-word depth requirement.
</NATIVE_REASONING>

<THINK_TRACE>
Reading CSAOT (arXiv:2501.13994v1, [PAGE 1]) as a control-learning system rather than a passive vision pipeline, the central design tension is credit assignment under a single shared observation source. The authors decompose the AOT objective into four role-specialized policies on one device — Detection ($a_d=(x_l,y_l,x_r,y_r)$), Movement ($a_n=(x_c,y_c)$), Obstacle ($a_a=(x)$), and a second-layer Navigator ($a_i=(\Delta v,\Delta\alpha)$) — and train them with Decentralized Training–Decentralized Execution (DTDE) rather than CTDE [PAGE 3]. The multi-hop question I need to resolve is whether "multi-agent" here is architecturally real or a relabeling of a modular single-learner, because the answer propagates into every performance and novelty claim.

Multi-hop chain: (1) All agents "operat[e] on the same device, receiving their observations $o_i$ from a common source" [PAGE 3]. (2) They share a ResNet50 trunk for feature extraction [PAGE 4]. (3) The Navigator consumes the first-layer outputs plus the encoded frame as feed-forward input. This is a hierarchical feed-forward graph with per-node reward shaping, not a system with peer-to-peer communication (no CommNet/DIAL-style channel, [PAGE 2-3]). Therefore the "cooperation" is realized through reward decomposition and a fixed topological ordering, not emergent coordination. I judge this a legitimate but weak sense of "multi-agent": it is closer to a mixture-of-experts control stack with independent PPO objectives.

Gray-zone audit on the reward algebra. Eq. (9) [PAGE 4] is $R_{track}=\min\!\big(\tfrac{S_{mi}}{S_{frame}}\cdot0.25,\;2-\tfrac{S_{mi}}{S_{frame}}\cdot0.25\big)\lambda_{track}$. Let $r=S_{mi}/S_{frame}\in(0,1]$ be the target-bbox area fraction. The two arguments are $f_1=0.25r\in(0,0.25]$ and $f_2=2-0.25r\in[1.75,2)$. Since $f_1\le0.25<1.75\le f_2$ over the entire feasible domain, $\min=f_1$ always; the kink ($f_1=f_2\Rightarrow r=4$) lies outside $[0,1]$. The min-construction is therefore dead code and $R_{track}=0.25r\,\lambda_{track}$ is strictly increasing — it rewards driving as close as possible, contradicting the stated motivation "to ensure the tracker keeps an appropriate distance" [PAGE 4]. This is a genuine design inconsistency, not a transcription artifact.

Second audit: the CR metric degeneracy. The paper states "unless the tracker can track the target for the span of the maximum EL, the CR is always be the minimum value by default because of the terminating condition" [PAGE 7]. Table 3 shows CR $=-150\pm0.00$ on Complex, SharpLoop, SimpleLoop and only $-25.46$ on SingleTurn [PAGE 7]. So CR is effectively a threshold survival indicator, not a continuous return; it collapses to a floor whenever the episode terminates early. Because the collision penalty is $-50$ and terminates the episode [PAGE 4], and per-step positive reward caps near $0.25\lambda_{track}$, the accumulated return cannot climb out of the floor without surviving to max EL. Hence the "30% EL improvement" on Complex (25 vs 18, Table 4) is the only informative number, and CR adds little signal.

Third audit: MoP novelty. Eq. (18) [PAGE 6] is algebraically identical to the Top-K MoE of Eq. (3) [PAGE 3]; the authors concede "the way $w$ is calculated ... is the same as the previously shown MoE method" [PAGE 6]. MoP = sparsely-gated MoE with policy networks as experts. The novelty is application, not mechanism.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Environment tuple (Dec-POMDP), Eq. (1) [PAGE 3]:
$$G=\langle S,A,P,O,\Omega,R,C,n,\gamma\rangle,\qquad \gamma=1\ \text{(set explicitly)}.$$
Note $\gamma=1$ is admissible only because episodes are finite-horizon (capped by EL in Table 2, [PAGE 6]); the undiscounted return is $G_t=\sum_{k=0}^{T-t} r_{t+k}$ with $T$ bounded.

Top-K gating, Eqs. (2)-(3) [PAGE 3]:
$$S_K=\mathrm{TopK}(g(x;\phi)),\qquad y(x)=\sum_{i\in S_K}\frac{p_i}{\sum_{j\in S_K}p_j} f_i(x;\theta_i).$$

Mixture of Policies, Eq. (18) [PAGE 6]:
$$MoP(o,K)=\sum_{i\in S_K}\frac{w_i}{\sum_{j\in S_K}w_j}\,p_i(o;\theta_i),\quad |{\rm experts}|=4,\ K=2\ \text{[PAGE 6, Table 1]}.$$

PPO clipped surrogate, Eqs. (4)-(5) [PAGE 4]:
$$L^{CLIP}(\theta)=\mathbb{E}_t\!\big[\min(r_t(\theta)\hat A_t,\ \mathrm{clip}(r_t(\theta),1-\epsilon,1+\epsilon)\hat A_t)\big],\quad r_t(\theta)=\frac{\pi_\theta(a_t|s_t)}{\pi_{\theta_{old}}(a_t|s_t)},$$
with $\epsilon=0.99$, $\epsilon_{decay}=0.9$, learning rate $3\times10^{-3}$ [Table 1, PAGE 6].

Reward stack [PAGE 4-5], units where stated:
$$R_{track}=\min\!\Big(\tfrac{S_{mi}}{S_{frame}}0.25,\ 2-\tfrac{S_{mi}}{S_{frame}}0.25\Big)\lambda_{track}\ \text{(dimensionless area ratio)};$$
$$R_{nav}=-\frac{\mathrm{Manhattan}(\mathrm{center}(m),\mathrm{center}(frame))}{\mathrm{Manhattan}((0,0),\mathrm{center}(frame))}\lambda_{nav}\in[-1,0]\cdot\lambda_{nav};$$
$$R_{move}=-3\,[\![\,\text{speed}=0\wedge\Delta v_i\le0\,]\!],\quad R_{steer}=-3\,[\![\,\text{speed}=0\wedge\Delta\alpha_i\ne0\,]\!],\quad R_{diff}=|\Delta v_i-\Delta v_{i-1}|\lambda_{diff};$$
$$R_{detect}=\mathrm{IoU}(m,a_d)\lambda_{detect}\in[0,1]\lambda_{detect},\quad R_{obstacle}=|a_a-d_{true}|\lambda_{obstacle}\ \text{[m]},\quad R_{movement}=\mathrm{Manhattan}(a_n,\mathrm{center}(m))\lambda_{movement}.$$

Action units [PAGE 3]: acceleration $x\in[-0.5,0.5]\,\mathrm{m/s^2}$, steering $y\in[-0.5,0.5]\,\mathrm{rad}$.

Breakdown/singularity regimes: (i) $R_{track}$ kink at $r=4$ is unreachable ⇒ min() vacuous; (ii) $R_{obstacle}$/$R_{movement}$ use raw magnitudes (no normalization) so their gradients scale with scene scale, risking reward imbalance across the four agents; (iii) $\gamma=1$ with unbounded horizon would diverge, but the EL cap $\{15,25,45,80\}$ [Table 2] enforces convergence; (iv) $R_{diff}$ is undefined at $t=0$ (no $\Delta v_{-1}$), an unaddressed boundary.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage is traceable through the paper's own citations. The active-vision root runs Denzler & Paulus (1994, [2]) → active feature selection Zhang et al. (2013, [31]) → end-to-end RL tracking Luo et al. (2019, [14]), whose EL/CR metric pair CSAOT reuses verbatim ("previously used to comprehensively assess AOT frameworks," [PAGE 6]). The multi-agent RL backbone descends from QMIX/VDN value-decomposition [20][27] and MAPPO/MADDPG policy-gradient lines [30][13], with the explicit observation that "MAPPO don't have the exact nature of our defined task" — motivating the DTDE deviation [PAGE 3]. The MoE component traces to Shazeer et al.'s sparsely-gated layer [22] and Ma et al.'s multi-gate MoE [15]; MoP is the direct descendant of [22] applied to policy heads.

Multi-week traps baked into this genealogy: (1) The CTDE→DTDE pivot sacrifices centralized value factorization, so classical credit-assignment guarantees from VDN/QMIX no longer hold — the authors compensate with hand-shaped per-agent rewards (Eqs. 15-17), which is exactly the "reward design that balances individual and group incentives is tricky" hazard flagged at [PAGE 3]. (2) The Luo et al. metric inheritance carries a hidden assumption: EL is only meaningful if reward is informative, but CSAOT's CR floor (Table 3) breaks that assumption — an inherited-metric trap. (3) The single-device, shared-observation choice (contrasted with auxiliary external agents [18], [PAGE 2]) is the paper's genuine lineage contribution, but it inherits the correlation risk of a shared ResNet50 trunk feeding all experts.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Mapped onto this paper, "crisis" = target loss. The authors report a hysteresis failure: "it can hardly get back on track if it loses track of the target ... on most maps, excluding the SingleTurn map" [PAGE 7], and in Complex it "can only track within the first 3 turns, then loses track of the target due to inappropriate turning" [PAGE 7]. Habit regression: once the target leaves the FOV, the Detection/Movement experts receive degenerate inputs, the gate collapses onto a poor expert, and the policy reverts to a pre-learned default (drive-forward bias from $R_{track}$'s "get closer" pressure) that cannot re-acquire — an absorbing state.

Counter-traps attempted vs proposed: (a) $\epsilon$-greedy was applied and "doesn't seem to work well" [PAGE 7]; (b) AGAC (Adversarially Guided Actor-Critic, [3]) is proposed for better exploration; (c) intrinsic reward with peer incentives [32] is floated for the first-layer agents [PAGE 7]. The stated root cause is PPO's "rapid convergence ... increases the probability of falling into local minima" observed in the Complex-map learning curve (Figure 5, [PAGE 7]).

Clock: the EL cap (Table 2) and CR floor ($-150$) form a hard episode clock. Because CR saturates on early termination [PAGE 7], the clock and the crisis are coupled: losing the target both ends the episode and pins CR, so the metric cannot distinguish "recovered briefly" from "never recovered." The theory-of-mind read: the system models the target's box kinematically (Detection+Movement) but has no belief-maintenance over occluded/absent targets, so its "model" of the adversary's intent is memoryless once the FOV is lost.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Correction to the frame: there is no biological/human agent in this system — the tracked "target" and tracker are vehicles in AirSim [PAGE 6], so a "biomechanical" veto reduces to a vehicle-kinematic veto. I evaluate three physical/weather cross-layer constraints.

Kinematic veto: action bounds are $\Delta v\in[-0.5,0.5]\,\mathrm{m/s^2}$ and $\Delta\alpha\in[-0.5,0.5]\,\mathrm{rad}$ [PAGE 3]. A $0.5\,\mathrm{m/s^2}$ acceleration ceiling is small; combined with the Complex map's "sharp turns" [PAGE 6], the achievable turn radius $R=v^2/(v\,\dot\theta)$ constrains whether the vehicle can physically match a fast target through a tight corner. This is a plausible mechanistic cause of the "inappropriate turning" loss at turn 3+ [PAGE 7]: the control authority may be kinematically insufficient, not merely under-trained. Veto stands as a candidate explanation the paper does not test (no ablation on action bounds).

Weather/visual veto: AirSim "can simulate diverse environmental conditions, such as different weather types and lighting" [PAGE 6], but Figure 2 is explicitly "clear weather mode" [PAGE 6] and every result (Tables 3-4) is under that single condition. Any robustness-to-weather claim is unsupported; the ResNet50 trunk was never stressed under rain/fog/low-light. This is a clean veto on external validity for adverse conditions.

Collision/feasibility veto: collision $= -50$ and immediate termination [PAGE 4], yet "collision rarely appears ... only ... in Complex map" [PAGE 7]. Low collision count under a car with $\pm0.5$ authority and an Obstacle expert regressing LIDAR distance (Eq. 16) is internally consistent — the obstacle channel is doing its job. No veto here; the physics layer and the obstacle-reward layer agree.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Interpreting RLVR as reinforcement learning from verifiable/falsifiable claims, I state three veto scenarios with concrete, checkable predictions.

Veto 1 — CR degeneracy is a metric artifact, not tracking quality. Verifiable claim: if you recompute performance using mean per-episode survival time and cumulative positive reward excluding the $-150$ clamp, CSAOT's Complex-map advantage should shrink relative to the reported "30% EL" framing. Prediction: re-plotting CR without the floor yields near-identical distributions between CSAOT and SingleAgent except on SingleTurn; falsifiable via released logs.

Veto 2 — MoP contributes nothing beyond a plain MLP policy at K=4. Because Eq. (18) = MoE and only $K=2$ of $4$ experts fire [Table 1], an ablation with $K\in\{1,2,4\}$ and a single-MLP control should show EL differences within the reported $\pm$ bands (e.g., Complex $25\pm4$ overlaps $K=1$). Prediction: no statistically significant EL gain from gating; the paper itself flags gating as unstudied ("we haven't considered the effect of the gating mechanism," [PAGE 7]), supporting this veto.

Veto 3 — Target-loss is absorbing due to memoryless belief, so longer EL caps won't help Complex. Prediction: increasing max EL beyond 80 [Table 2] leaves Complex EL flat near 25 (the policy re-enters the drive-forward attractor after turn 3), whereas adding belief-state memory (Mamba/S4, suggested at [PAGE 7]) is required to move it. Falsifiable by an EL-cap sweep and a memory-module swap.

Each veto is testable against the released code/logs and the paper's own tables; none require betting constructs — only recomputation of already-defined quantities (EL, CR, IoU-based rewards).
</RLVR_COUNTERFACTUAL_VETOES>