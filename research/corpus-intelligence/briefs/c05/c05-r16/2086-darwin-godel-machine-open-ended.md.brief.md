# arxiv-program/research/2026-09-21/arxiv-deep/2086-darwin-godel-machine-open-ended.md
## What it is (1-2 sentences)
Research ledger for the Darwin Gödel Machine (arXiv:2505.22954), a system that iteratively rewrites its own coding agent's code and validates each change on SWE-bench/Polyglot, sustaining open-ended improvement. The portable design (flagged in-file as a MOVE-37 precedent): an archive of ALL generated variants (not just winners — "stepping stones"), parent selection ∝ performance × modifiability (children-with-editing-functionality), and staged cheap-to-expensive evaluation (10 → 50 → 200 tasks). Ledger verdict: ADAPT the archive-of-stepping-stones + parent-selection + staged-evaluation design into GSE's signal discovery loop; the self-modifying-agent machinery itself is overkill for GSE.
## Key metrics/methods (formulas where given, else "not specified")
- No equations stated (systems paper; pseudocode in Appendix A.4).
- Archive: initialized with one agent; accumulates ALL variants including suboptimal-but-interesting ones.
- Parent selection (A.2): roughly proportional to each agent's performance score AND the number of its children with codebase-editing functionality (rewards modifiable lineages).
- Self-modification (A.3): parent analyzes its own benchmark logs, proposes next feature as a problem statement, implements it into its own codebase → new agent.
- Staged evaluation (4.2): 10 tasks (verify editing ability; non-editors discarded, never archived) → 50 tasks → if >40% on the 60-task subset AND top-2 in archive → 200 tasks.
- Open-endedness guard: the archive/parent-selection machinery itself is fixed, not self-modifiable. Safety: sandboxed execution, strict time limits, traceable lineage. Code: https://github.com/jennyzzt/dgm.
## Data sources named
- SWE-bench Verified (human-filtered solvable Python multi-file repo tasks); Polyglot (C++, Rust, Python; single-file; pass@1 — stricter than leaderboard pass@2). Initial agent: foundation model + Bash tool + whole-file edit/view tool. Self-modification FM: Claude 3.5 Sonnet (New); evaluation FM: Claude 3.5 Sonnet (New) for SWE-bench, o3-mini for Polyglot. 80 iterations (2 parallel SWE-bench, 4 Polyglot).
## Findings (numbers and facts, not vibes)
- SWE-bench: 20.0% → 50.0% over 80 iterations; best DGM agent comparable to checked open-source SoTA (still below closed-source SoTA).
- Polyglot: 14.2% → 30.7% on full benchmark (subset trajectory 14.0% → 38.0%); "far surpasses Aider" despite starting below it.
- Ablations (Figure 2): both DGM w/o self-improve and DGM w/o open-ended exploration underperform full DGM — "both components are essential."
- Key qualitative finding (Figure 3): "many paths to innovation traverse lower-performing nodes" — the final best agent's lineage includes two performance dips; key innovations (e.g., node 24) trigger explosions of follow-on innovations.
- Discovered improvements: line-level view + string-replacement editing (vs. whole-file), multi-attempt workflows, peer-review selection among candidates, conditioning on previous attempts.
- Transfer: FM swap preserves gains (19.0%→59.5% with Claude 3.7 Sonnet on SWE-bench/200); Python-trained agent transfers to unseen languages "substantially outperforming both the initial agent and Aider."
- Cost: a single SWE-bench run ≈ 2 weeks + "significant API costs" (B.1). Authors' own caveat: SWE-bench is "likely included in the training sets of FMs."
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — discovery-loop memory architecture: keep an archive of ALL tried signals (not winners only), select mutation parents by performance × lineage productivity, staged evaluation (10-game smoke test → full 2015–2024 backtest → 2025 holdout ΔBrier gate → locked never-touched season before production); guards against hill-climbing on the holdout (the paper's contamination failure mode = GSE's backtest-overfitting risk).
## Engine-actionable? (yes/no + one-line what)
Yes — build a SQLite signal archive (code, hypothesis, stage scores, parent id, interestingness note) with A.2-style parent sampling for compose/mutate ideas and staged evaluation on top of the 2082/2085 discovery harness (~2 days); run a 30-night A/B (winner-only memory vs. full archive) and adopt iff arm (b) produces ≥2× Stage-3-passing signals with ≥1 winner having a failed node in its lineage and Stage-0/1 screening discards ≥70% of ideas pre-holdout; improvement experiment: multi-objective MAP-Elites-style parent selection (gate margin, novelty vs. archive embedding, lineage productivity) to fill thin lanes (special teams, referees).
