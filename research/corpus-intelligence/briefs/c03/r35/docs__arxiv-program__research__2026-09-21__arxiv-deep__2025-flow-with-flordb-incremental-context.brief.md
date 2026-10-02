# docs/arxiv-program/research/2026-09-21/arxiv-deep/2025-flow-with-flordb-incremental-context.md
## What it is (1-2 sentences)
Deep-read ledger of Garcia et al. (UC Berkeley, 2024) "Flow with FlorDB" (arXiv:2408.02498v2): systems position paper on "hindsight logging" - record cheap execution state, compute arbitrary new metadata post-hoc across pipeline versions via record-replay, resolving the metadata-first vs move-fast tension (the ABCs of context: Application, Behavioral, Change). Verdict: ADAPT - metadata-later lineage layer via append-only run log, minus the heavy record-replay machinery.
## Key metrics/methods (formulas where given, else "not specified")
- No equations stated; systems paper, zero numbers reported, no experiments.
- FlorDB API: flor.log(name, value), flor.arg(name, default), flor.loop(name, vals), flor.checkpointing(kwargs), flor.dataframe(*args) (pivoted relational view), flor.commit().
- Data model tables: loops, logs, ts2vid, git, obj_store, build_deps.
- Mechanism: multiversion hindsight logging with code-diffing injection of log statements into prior versions + differential incremental replay.
## Data sources named
- None (demo only: PDF Parser document-intelligence app; MLE interview study from Shankar et al. 2024).
## Findings (numbers and facts, not vibes)
- No numerical results: no experiments, baselines, or metrics; evidence is a usage scenario plus interview study; controlled usability validation remains future work per the authors.
- Paper's demonstrated roles: feature store (post-execution queries), model registry (best-checkpoint selection via flor.dataframe("acc","recall")), training data store, metric registry/TensorBoard-like viz, human-in-the-loop feedback with provenance (machine vs human label origin).
- Adversarial caveats noted: replay cost unanalyzed for heavyweight pipelines; checkpointing assumes deterministic checkpointable Python (not Spark/Delta/Redis distributed state); "sufficient execution state" for arbitrary future queries is asserted, not bounded; does not address point-in-time feature correctness.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Every pipeline stage emits structured JSON log lines (git sha, tstamp, stage, season/week) to a Delta run_context table; the log table IS the registry at GSE scale: TRUST-SIGNAL (provenance/audit layer for the engine)
- Hindsight queries answer unanticipated retroactive questions by SQL ("which code version generated Week N backtest numbers?"): TRUST-SIGNAL (debuggability/audit receipts)
- Content-addressed run manifests (code sha + input data hashes per run): TRUST-SIGNAL (reproducibility for public-record picks)
- Human corrections logged with origin tags (Garrett's manual overrides, auditor flags): TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
Yes - adopt the cheap half: an append-only run_context logging convention across all pipeline stages so retroactive lineage questions are SQL-answerable with zero re-runs; gate: 5/5 unanticipated questions answerable in <=1 analyst-hour each after 4 weeks and <2% pipeline overhead.
