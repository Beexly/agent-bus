# docs/arxiv-program/research/2026-09-21/arxiv-deep/2089-sela-tree-search-enhanced-llm.md

## What it is (1-2 sentences)
SELA (arXiv:2410.17238): an LLM-agent AutoML framework that uses Monte Carlo Tree Search to allocate search over ML pipeline configurations — an insight-proposer LLM generates candidate pipeline insights, MCTS (selection → expansion → simulation → backpropagation) decides which configuration to try next, and an LLM executor codes and runs the chosen pipeline. Read verdict in the file: **ADAPT** — flagged as a MOVE-37-relevant compute-allocation policy for the discovery loop's nightly backtest budget.

## Key metrics/methods (formulas where given, else "not specified")
- Three components: (1) insight proposer (LLM reads problem description + dataset info, generates candidate insights for preprocessing/feature engineering/model); (2) MCTS search module over the configuration tree — per node x: v(x) = cumulative simulation score of node + descendants, n_visits(x) = total simulations of node + descendants, σ_sol(x) = final code from node simulation; cycle per rollout: selection (exploration/exploitation balance), expansion (add child), simulation (executor runs pipeline), backpropagation (score up the path); k rollouts per problem; final = best-scoring node. (3) LLM executor translates the tree path into executable code and runs it.
- Selection cites Coulom 2007 MCTS without restating UCB — no invented formula recorded in the file.
- Comparison metrics: average Normalized Score (NS, maps RMSE to [0,1] for cross-dataset comparison), average rank, average best rank, per-dataset Wins/Losses/Top-1 counts vs traditional AutoML (AutoGluon et al.) and agent-based AutoML frameworks.

## Data sources named
20 tabular datasets: 13 classification + 7 regression from the AutoML Benchmark (AMLB, OpenML-sourced) and Kaggle competitions. Split 6:2:2 train/valid/test. Metrics: RMSE (regression), F1 (binary), weighted-F1 (multiclass).

## Findings (numbers and facts, not vibes)
- SELA achieves a **win rate of 65–80% against each baseline** across all datasets; highest average NS and average best rank; most Top-1 finishes.
- Nuance: AutoGluon has a **marginally higher average rank** than SELA — but SELA's higher average NS means "it performs strongly in the datasets where it excels, while its losses in other datasets are relatively minor."
- The insight-proposer + MCTS combination is credited for escaping the "low-diversity code" trap of plain iterative LLM agents.
- Limitations noted by the reader: AMLB datasets likely in LLM pretraining (insight proposer may recall rather than reason — unmeasured); random 6:2:2 splits ignore temporal structure (wrong for sports); no cost-per-dataset reported; MCTS hyperparameters (k, exploration constant) not ablated.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — search-policy infrastructure: formalizing "spend compute where uncertainty × promise is highest" for the discovery loop's hypothesis portfolio (complements the 2085 experiment manager, which has no exploration/exploitation rule for what to try next).

## Engine-actionable? (yes/no + one-line what)
Yes — adapt SELA's MCTS as the **nightly scheduler** over the discovery loop's hypothesis tree: root = current production feature set, children = signal hypotheses, leaves = backtest simulations; node value = cumulative ΔBrier on 2025 holdout; k = 12 rollouts/night; persistent tree in SQLite doubling as the 2086 archive; insight proposer carries a hard no-future-information blocklist. ADOPT if MCTS finds ≥1.5× the gate-passing signals of round-robin at equal budget with ≥30% fewer wasted rollouts and Spearman ≥0.5 between tree value estimates and final holdout scores; improvement axis: hierarchical tree over signal families (matchup/weather/rest/market/special-teams) so thin lanes aren't starved.
