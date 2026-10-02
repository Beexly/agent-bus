# docs/arxiv-program/research/2026-09-21/arxiv-deep/2085-ai-scientist-v2-agentic-tree.md
## What it is (1-2 sentences)
Ledger deep-read of arXiv:2504.08066 (SakanaAI, 2025) on an end-to-end agentic system that produces fully AI-generated manuscripts via progressive agentic tree search with a dedicated Experiment Manager agent (best-node selection + replication statistics). Verdict: ADAPT — adopt the Experiment Manager + replication discipline as the upgrade over ledger 2082's linear executor for GSE's MOVE-37 backtesting loop.
## Key metrics/methods (formulas where given, else "not specified")
- Progressive agentic tree search: each node = a code checkpoint with an evaluation score; Experiment Manager agent selects best-performing node after each of 4 experimentation stages using a dedicated LLM evaluator with explicitly articulated criteria, then branches/refines from it (replaces linear refinement).
- Replication discipline: after each stage, manager launches multiple replications of selected best experiments to report statistics (mean ± std).
- GSE adaptation spec: 3 initial implementation variants per signal idea, each scored by deterministic evaluator (ΔBrier on 2025 holdout); manager keeps best node, branches 2 refinements, then 3 replications of winning variant with different random seeds (bootstrap resamples) to report mean ± std of ΔBrier.
- Hypothesis-first proposals: structured proposal (hypothesis, predicted direction, falsification condition, exact backtest spec) BEFORE code runs; proposals without a falsification condition are rejected without running.
## Data sources named
No fixed dataset (the "dataset" is the experimental process itself). Evaluation venue: three manuscripts submitted to the ICLR 2025 workshop "I Can't Believe It's Not Better" (ICBINB); human peer-review scores (/10). Open-source: https://github.com/SakanaAI/AI-Scientist-v2.
## Findings (numbers and facts, not vibes)
- One of three manuscripts achieved average reviewer score 6.33/10 (individual scores 6, 6, 7), placing it roughly in the top 45% of submissions, exceeding the average human acceptance threshold — the paper's claim of "the first instance of a fully AI-generated paper successfully navigating a peer review."
- The accepted paper investigated explicit compositional regularization on synthetic arithmetic-expression datasets; finding: no significant improvement, occasionally harmful.
- The other two manuscripts scored lower and were not accepted.
- Internal inspection: the system "occasionally introduced inaccuracies in citations" (hallucination) and "sometimes lacked the detailed methodological rigor and in-depth analysis typically required for acceptance at leading main conferences."
- v1 baseline never attempted real peer review (its reviewer was itself an LLM, NeurIPS scale 2–6, max observed 6.0 ≈ weak accept).
- The "best manuscript per seed" selection step is human-in-the-loop (careful inspection of coherence), so the pipeline is not fully hands-off at submission.
- Proposed acceptance gate for GSE: ≥80% of signals that pass under tree+replication still pass on an independent re-run with fresh bootstrap seeds (vs ≤60% for linear protocol); manager's best-node selection agrees with deterministic evaluator ranking on ≥90% of stages.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Experiment Manager as the missing middle layer between hypothesis (theorist) and execution lab (runs) — a role currently manual in GSE backtesting: OTHER.
- Replication statistics (mean ± std) replacing single-run backtests: OTHER.
- Budget-adaptive bandit allocation over the idea portfolio (manager allocates more branches to high-variance promising hypotheses, prunes low-variance losers): OTHER.
- No QB, coaching, OL, trust-signal, or scheme content present.
## Engine-actionable? (yes/no + one-line what)
Yes — upgrade the signal-backtest harness from linear single-run execution to tree search (3 roots × 2 refinements) with an Experiment Manager enforcing replications (mean ± std of ΔBrier) and hypothesis-first proposals with falsification conditions before any code runs.
