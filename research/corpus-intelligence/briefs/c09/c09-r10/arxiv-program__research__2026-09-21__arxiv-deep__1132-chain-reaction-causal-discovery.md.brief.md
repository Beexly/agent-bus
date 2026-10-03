# arxiv-program/research/2026-09-21/arxiv-deep/1132-chain-reaction-causal-discovery.md
## What it is (1-2 sentences)
Deep-read ledger of panispani's Chain-Reaction Causal Discovery 2603.22620 (recovering a causal graph via blocking interventions: do(Xᵢ=0) reveals all descendants at once). Verdict: ADAPT — the blocking-intervention protocol is directly reusable for GSE's engine sandbox: zero one feature/source at a time and record which downstream outputs change, mapping the engine's empirical dependency DAG.
## Key metrics/methods (formulas where given, else "not specified")
- Blocking semantics: under do(Xᵢ=0), Xⱼ = 0 for all descendants j of i, so pᵢⱼ := P(Xⱼ=1 | do(Xᵢ=0)) = 0 ⟺ j ∈ descendants(i); decision rule Â(i,j)=1 iff p̂ᵢⱼ = 0
- False-positive bound: Pr(Â(i,j)=1) ≤ exp(−q_min · nᵢ); full-matrix recovery guarantee ≥ 1 − N(N−1)·exp(−q_min · n_min)
- Assumptions: directed tree (single parent), monotone binary activation, noiseless labels, perfectly blocking interventions
## Data sources named
- Synthetic chain-reaction environments in Pymunk (2D physics): 6 environments, N = 4–24 objects/nodes, 100 random seeds; code stated at https://github.com/panispani/chain-reaction-causal-discovery
## Findings (numbers and facts, not vibes)
- Exact graph recovery ≥95% across environments (100 seeds each); only 1–2 interventions per object required
- At maximal displacement, method F1 = 0.963–0.999 vs best observational baseline F1 = 0.686–0.825
- File is explicit that NFL/engine systems violate all four assumptions (tree, monotone, binary, noiseless) — use the descendant-recovery idea, not the exact tree algorithm
- File's implementation spec: ~30 sandbox runs (one blocked feature family each) on frozen historical slates; use the empirical DAG for (a) incident triage, (b) feature pruning, (c) testing LLM-proposed hypothesis orders; effort 2–4 days
- File's acceptance gate: recover all 5 known engine dependencies with zero false negatives AND identify ≥3 features with zero downstream effect (pruning candidates)
- Improvement experiment: noisy blocking (50% feature dropout instead of full blocking) to estimate graded descendant influence — a weighted dependency map prioritizing monitoring alerts
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (engine infra/observability: empirical dependency mapping of the prediction pipeline). No QB behavior, coaching, OL, trust-signal, or scheme content.
## Engine-actionable? (yes/no + one-line what)
Yes — build a frozen-slate sandbox harness that blocks one feature family at a time and assembles the engine's empirical dependency DAG for incident triage, feature pruning, and monitoring prioritization.
