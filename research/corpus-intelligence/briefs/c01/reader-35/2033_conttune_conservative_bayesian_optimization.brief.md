# arxiv-program/research/2026-09-21/arxiv-deep/2033-conttune-conservative-bayesian-optimization.md
## What it is (1-2 sentences)
GSE ledger note (verdict: ADAPT) on ContTune (Lian et al., PVLDB 14(1), arXiv:2309.12239) — continuous tuning for distributed stream processing (Apache Flink operator parallelism) via a "Big phase" (binary-lifting to clear backpressure, decoupling tuning from the DAG) followed by a conservative Bayesian Optimization "Small phase" with a feasibility-gated acquisition and history reuse across workload changes; proven O(1) average reconfiguration complexity.
## Key metrics/methods (formulas where given, else "not specified")
- Big phase: binary lifting on under-provisioned jobs to clear backpressure → N concurrently-tunable sub-problems (shifting-bottleneck fix).
- CBO acquisition: argmax_{p_i} (p*_i − p_i)·I(μ(p_i) − λ_i), indicator filters parallelism levels whose GP-mean processing ability is below upstream data rate λ_i (feasibility first; stricter than Constrained EI).
- GP posterior: μ(p_i) = k_*^T K^−1 y; σ²(p_i) = k_*(p_i,p_i) − k_*^T K^−1 k_*; bounds l = μ − βσ, u = μ + βσ.
- Trade-off gate: if nearest observed parallelism is farther than α from suggestion (unknown region), fall back to linearity-based DS2 as conservative exploration; warms the GP.
- Noise: Top-K recent observations + mean-reversion (environmental noise treated as positive additive).
- Average complexity: O(((log2 p^max + ρ) + ((χ·φ) + (ρ − χ) + ω))/ρ) → O(1) as tuning count ρ grows.
- Code: github.com/ljqcodelove/ContTune.
## Data sources named
Flink workloads: WordCount, Nexmark Q1/Q2/Q3/Q5/Q8 (20h runs, 72000s ideal, 600s sources); synthetic WordCount under three periodic patterns. Metrics: backPressuredTimeMsPerSecond, idleTimeMsPerSecond, busyTimeMsPerSecond, CPU usage; controller states backpressure vs non-backpressure, cpuLow/cpuNormal/cpuHigh. Baselines: Dhalion, DS2, Big+DS2, Dragster.
## Findings (numbers and facts, not vibes)
- Real workloads (ContTune α=3 vs DS2): avg reconfigurations per tuning 1.29 vs 2.40 (−46.25%; α=0: −35.42%); end-to-end tuning time −47.08%; end-to-end runtime −3.12%; total CPU cost −0.22% (essentially identical), +1.84% vs Dhalion (cheapest but slowest to converge).
- p99 latency equivalent to DS2 at same max workload while using fewer cores per query (WordCount/Q1/Q2/Q3/Q5/Q8: 1,1,1,0,3,1 fewer — Q5: 22 vs 25 cores).
- Backlogged data: −43.01% vs DS2, −89.09% vs Dhalion; buffered-data processing time −16.79% vs DS2, −88.10% vs Dhalion.
- Under-provisioned rate per query: ContTune 0.63–6.48% vs DS2 1.52–8.03%, Dragster 2.52–7.97%. Big phase alone (Big+DS2) already cut backlogged data materially.
- Synthetic: up to 60.75% fewer reconfigurations vs DS2; real workloads up to 57.5%. Limitations: no significance testing; α reported only at {0,3} with no selection procedure; domain is Flink, not GSE — transfers as a pattern, not settings.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: compute-tuning pattern for GSE's batch compute — weekly feature-build stage parallelism tuning and engine hyperparameter search under a p99 ≤ 50 ms serving SLA.
## Engine-actionable? (yes/no + one-line what)
Yes — port the Big-small skeleton to weekly feature-build tuning (binary-lift skewed stages; GP over ⟨parallelism, throughput⟩ reused across weeks with SLA feasibility gate; gate ≥25% cost/wall-clock cut, zero SLA violations).
