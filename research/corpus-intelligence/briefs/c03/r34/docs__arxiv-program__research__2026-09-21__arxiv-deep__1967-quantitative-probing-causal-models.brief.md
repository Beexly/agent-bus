# docs/arxiv-program/research/2026-09-21/arxiv-deep/1967-quantitative-probing-causal-models.md
## What it is (1-2 sentences)
Read-notes on "Quantitative probing" (Grünbaum, Stern, Lang 2022, arXiv:2209.03013): a model-agnostic validation framework for causal discovery in which quantitative domain-knowledge expectations about non-target effects (probes) are stated before analysis, and the fraction recovered within tolerance (hit rate) is used to judge whether the learned graph and target-effect estimate can be trusted. Verdict in file: ADAPT as a release gate / QA layer for GSE's causal-graph features (ledgers 1962–1966).
## Key metrics/methods (formulas where given, else "not specified")
- Probe hit: |τ̂_probe − τ_probe| ≤ ε_probe counts as success; hit rate = fraction of probes recovered.
- Relative target error: |τ̂ − τ| / τ; graph error: structural Hamming distance (SHD: edges present in one graph only + reversed edges).
- Protocol: (1) state quantitative expectations about non-target causal effects before analysis; (2) run discovery + target estimation; (3) reuse the learned graph to identify probe estimands and estimate them (linear regression here); (4) compute hit rate — failing to falsify the model on probes increases trust; a failed probe triggers reexamination of graph, estimation, or expectations.
- No new theorems; the approximately-linear hit-rate/error relationship is empirical only ("theoretical foundation ... could not be established").
## Data sources named
- Sprinkler demo (Pearl's classic): m=10,000 samples, n=5 variables (Season binary-encoded, Sprinkler, Rain, Wet, Slippery), generated with pgmpy; discovery via fast greedy equivalence search (FGES) with qualitative domain knowledge (required/forbidden edges, 9 edges left to algorithm); effects via linear regression.
- Simulation: 1,378 runs; random DAGs with n=7 nodes, p_edge=0.1, random binary CPDs ~ U[0,1], m=1,000 samples; p_hint=0.3 (qualitative knowledge); p_probe=0.5; ε_probe=0.1; FGES + linear-regression ATEs; ground-truth ATEs from interventional simulation.
- Software: networkx, pgmpy, cause2e (https://github.com/MLResearchAtOSRAM/cause2e), qprobing (https://github.com/MLResearchAtOSRAM/qprobing).
## Findings (numbers and facts, not vibes)
- Sprinkler: correct knowledge → probes (0.62, 0.81) match positive expectations, target ATE 0.52 trusted; flipped knowledge → probe fails (0 vs expected positive), target 0 distrusted.
- 1,378 simulations: aggregated means show mean absolute/relative target error and mean SHD → 0 as hit rate → 1, "approximately linear" (raw scatter showed no trend due to trivially-recovered unconnected probe pairs).
- Outliers: 14 runs with perfect hit rate 1.0 yet absolute target error ≥ 0.2; root cause = disconnected graphs (probes in one component, target in another). Filtering to connected graphs (653 runs) leaves only 4 such runs. Lesson: probes must be in the same connected component as — ideally close to — the target.
- GSE probe-suite spec: ~25 versioned-YAML quantitative probes over team-week indicators, e.g. ATE(pressure rate +10pp → defensive EPA/play) negative with |effect| > 0.05 EPA/play; ATE(turnover margin +1 → win prob) positive in [0.08, 0.25]; ATE(rest days → offensive EPA) ≈ 0 (null probe); sign probes for injury counts → EPA; threshold probes for explosive-play rate → points.
- Acceptance gate: ADOPT as release gate iff (a) probe hit rate correlates with downstream Brier improvement (Spearman ρ ≤ −0.5); (b) flipped-knowledge adversarial test drops hit rate below 0.5; (c) null probes hold at ≥90%. Reject if |ρ| < 0.3 (probes are theater).
- Improvement experiment: adaptive probe selection — perturb the graph (edge flips/additions/deletions) and keep probes whose estimates move most, aiming for a 10-probe adaptive suite that discriminates better than a 25-probe hand suite.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: a formal QA layer for the engine's causal graphs — a passing probe suite (hit rate ≥ 0.8, all null probes holding) is publishable-domain-knowledge sanity evidence before graph-derived features or content ship; a failed probe names exactly where trust broke.
- COACHING: probes are football domain knowledge made falsifiable (pressure→EPA, rest→EPA null, turnover margin→win prob), which encodes coaching-relevant effect estimates into the validation gate.
- OTHER: statistical-methodology (causal discovery validation); pairs with ledgers 1962–1966 (NOTEARS/graph pipelines) as their acceptance protocol.
## Engine-actionable? (yes/no + one-line what)
Yes — build the ~25-probe versioned YAML suite and run it as a mandatory release gate after each quarterly causal-graph refresh (publish graph-derived features only if hit rate ≥ 0.8 and all null probes hold), at ~2 engineer-days of effort.
