# docs/arxiv-program/research/2026-09-21/arxiv-deep/0121-multiobjective-adaptive-rate-limiting-in-microservices.brief.md
## What it is (1-2 sentences)
A deep-RL (hybrid DQN-A3C) formulation of microservice rate limiting as a constrained MDP, jointly optimizing throughput, latency, and stability. The ledger verdict is ADAPT: the constrained-MDP idea is a reusable blueprint for throttling GSE's odds-API fetch harness, but the full neural training apparatus is overkill and the paper's headline numbers are internally inconsistent.
## Key metrics/methods (formulas where given, else "not specified")
- State: s_t = [r_t, c_t, m_t, θ_t, τ_t, q_t, e_t, f_t] (request rate, CPU util, memory util, current threshold, avg response time, queue length, error rate, temporal features incl. sinusoidal hour-of-day encoding + EWMA β=0.9).
- Action space: A = {−50%, −20%, −10%, 0, +10%, +20%, +50%} threshold change.
- Reward: r_t = w1·R_throughput + w2·R_latency + w3·R_stability; R_throughput = N_success/N_total; R_latency = 1 if τ_t ≤ τ_target else exp(−α(τ_t − τ_target)); R_stability = −|θ_{t+1} − θ_t|/θ_t; weights (0.5, 0.4, 0.1).
- Objective: π* = argmax_π E[Σ_{t=0}^T γ^t r_t], γ = 0.99.
- DQN: 8-dim input → FC 128-256-128 (ReLU) → 7 Q-values; Huber loss on TD error δ = r + γ max_a' Q(s',a';θ⁻) − Q(s,a;θ); replay buffer 100,000, batch 64; target sync every 1,000 steps; ε-greedy decay 1.0→0.05 over 50,000 steps.
- A3C: shared 2-layer (128, 256) extractor + actor/critic heads; n-step returns (text says n=20, Table 1 says n=5 — internally inconsistent); 16 async workers; L_total = −log π(a|s)A(s,a) + 0.5(V−V_target)² − 0.01·H(π).
- DQN–A3C fusion: weighted probabilistic choice with α scheduled 0.3→0.7 over training. Training: 100,000 steps, ~48 h. Decision latency 2–5 ms CPU, <1 ms GPU.
- Constraint targets (τ_max, ε_latency, ε_error, ρ_max, θ_min, θ_max) stated but values not given.
## Data sources named
- No public dataset. DeathStarBench benchmark (Social Network and Media Service applications, 30+ microservices) with Locust traffic generation: periodic (5:1 peak-to-valley daily), burst (random 30–120 s), mixed (periodic + bursts + Gaussian noise).
- "Production deployment" claim: 90 days, 500M daily requests — proprietary, provenance not described (file flags as implausible/unverifiable for a 5-person team).
## Findings (numbers and facts, not vibes)
- Paper's claims are internally inconsistent: abstract says +23.7% throughput and −31.4% P99 latency vs fixed-threshold; intro/conclusion say +30.9% throughput, −38.2% P99 latency, 98.7% SLA compliance, 2–5 ms decision latency. File flags this mismatch as sloppy/cherry-picked reporting.
- Per-pattern results (Section V-B): throughput 10,850 / 9,110 / 9,580 req/s for periodic/burst/mixed = +30.9% / +31.7% / +31.0% over fixed thresholds; P99 latency 410 / 710 / 550 ms.
- Ablation: removing experience replay −9.7%, target network −6.3%, A3C component −4.8%, temporal features −3.9%; hybrid beats DQN-only by 5%.
- Training: reward from ~−50 to >120, convergence near step 80,000.
- Production claim: 82% reduction in service-degradation incidents, 68% decrease in manual interventions over 90 days at 500M daily requests (unverifiable).
- Baselines were weak (fixed threshold, naive CPU-proportional, AIMD, PID, simple DQN); no comparison to modern adaptive limiters or model-based RL; no statistical significance on headline numbers.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: data-infrastructure lane — adaptive throttling of GSE's rate-limited API fetch harness (Odds API, nflverse, etc.), not engine prediction content. No QB/coaching/OL/scheme intelligence.
## Engine-actionable? (yes/no + one-line what)
Yes (narrowly) — adapt the constrained-MDP framing to a rule-based adaptive throttler (AIMD-style on 429s) for the fetch harness; reject the neural-RL component unconditionally at GSE's call volume.
