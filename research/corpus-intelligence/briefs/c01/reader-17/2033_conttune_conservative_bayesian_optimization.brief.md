# arxiv-program/research/2026-09-21/arxiv-deep/2033-conttune-conservative-bayesian-optimization.md
## What it is (1-2 sentences)
Full-text read of arXiv:2309.12239v1 (Lian et al., 2023, PVLDB): ContTune, continuous tuning of distributed stream-data processing (Flink operator parallelism) via a Big phase (binary-lifting to clear backpressure, decoupling tuning from the DAG) plus a Small phase of conservative Bayesian optimization with a feasibility-gated acquisition function and history reuse across workload changes, proven O(1) average reconfiguration complexity. Ledger verdict: ADAPT the conservative-BO template (not the Flink domain) to GSE's compute-intensive batch jobs and engine hyperparameter search under a standing serving-SLA constraint.
## Key metrics/methods (formulas where given, else "not specified")
- Big phase: binary-lift under-provisioned operators until backpressure clears; decomposes the job into N concurrently-tunable sub-problems.
- Small phase (CBO): per-operator GP surrogate over PA(p) (processing ability at parallelism p); conservative acquisition argmax_{p_i} (p*_i − p_i)·I(μ(p_i) − λ_i), where the indicator filters parallelism levels whose GP-mean processing ability is below upstream data rate λ_i — feasibility first, resource minimization second (stricter than Constrained EI).
- Trade-off gate: if acquisition-suggested p^acq is farther than α from all observed parallelisms (d_nearest > α, unknown region), fall back to a linearity-based method (DS2) as conservative exploration; its observation also warms the GP.
- Noise: Top-K recent observations per operator + mean-reversion (environmental noise as positive additive).
- GP posterior: μ(p_i) = k_*^T K^−1 y; σ²(p_i) = k_*(p_i,p_i) − k_*^T K^−1 k_*; bounds l = μ − βσ, u = μ + βσ. Average complexity O(((log2 p^max + ρ) + ((χ·φ) + (ρ − χ) + ω))/ρ) → O(1).
## Data sources named
Real: Apache Flink WordCount + Nexmark Q1/Q2/Q3/Q5/Q8, 20-hour runs (72000s), vs Dhalion, DS2 (SOTA), Big+DS2, Dragster; synthetic: WordCount with three periodic workload patterns (per1/per2/per3). Artifacts: https://github.com/ljqcodelove/ContTune. Controller metrics: backPressuredTimeMsPerSecond, idleTimeMsPerSecond, busyTimeMsPerSecond, CPU usage.
## Findings (numbers and facts, not vibes)
- Avg reconfigurations per tuning: 1.29 vs 2.40 (DS2) → **−46.25%** (α=0: −35.42%). End-to-end tuning time −47.08%; end-to-end runtime −3.12%. Total CPU cost essentially identical to DS2 (−0.22%); +1.84% vs Dhalion (cheapest, slowest to converge).
- p99 latency equivalent to DS2 while using fewer CPU cores per query (WordCount/Q1/Q2/Q3/Q5/Q8: 1,1,1,0,3,1 fewer cores — e.g., Q5: 22 vs 25).
- Backlogged data: **−43.01% vs DS2, −89.09% vs Dhalion**; buffered-data processing time: −16.79% vs DS2, −88.10% vs Dhalion.
- Per-query under-provisioned rate: ContTune 0.63–6.48% vs DS2 1.52–8.03%, Dragster 2.52–7.97%.
- Synthetic: up to **60.75% fewer reconfigurations** vs DS2; real: up to 57.5%. The Big phase alone (Big+DS2) already cut backlogged data materially.
- Ledger's adoption gate: ≥25% reduction in weekly feature-build compute cost (executor-hours) or wall-clock vs 4-week baseline, zero build-SLA violations during the 2-week history-reuse period, ≤2 GP-suggested parameter changes per week.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: infra-tuning pattern — weekly Spark feature-build tuning (Big = binary-lift partitions on skewed stages until skew < 2×; Small = GP over ⟨parallelism, stage-throughput⟩ reused across weeks with feasibility indicator guarding the serving window) and engine hyperparameter sweeps that never violate the p99 ≤ 50 ms serving gate during online evaluation.
- TRUST-SIGNAL (INFERENCE): the feasibility-first template is a trust pattern for any tuning under hard SLA constraints — safety-gated exploration rather than unconstrained optimization; transferable to guarding calibration gates during hyperparameter search.
## Engine-actionable? (yes/no + one-line what)
Yes — build a weekly tuning controller for the Spark feature build (binary-lift skewed stages, then GP on ⟨parallelism, throughput⟩ with Top-K mean-reversion noise treatment, history reused across weeks) and use the CBO template for engine hyperparameter sweeps under the serving-SLA gate; grid-search α ∈ {0,1,2,3,5} offline on historical build logs to close the paper's open hyperparameter (medium effort, no Flink involved).
