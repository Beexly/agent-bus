# docs/arxiv-program/research/2026-09-21/arxiv-deep/2093-experience-graphs-data-foundation-self-improving.md
## What it is (1-2 sentences)
Experience Graphs (arXiv:2606.29823, 2026; "Trellis") is an architecture paper arguing that long-horizon agentic search should be stored as first-class, governed, queryable database state — an "experience graph" of artifacts, tool outputs, rewards, sibling comparisons, and causal lineage — rather than disposable logs/checkpoints. File verdict: ADAPT — the thesis is the storage architecture the entire GSE discovery loop should be built on (MOVE-37 flagged).

## Key metrics/methods (formulas where given, else "not specified")
- No equations stated (architecture/position paper).
- Proposed schema: the experience graph = executable artifacts + tool outputs + objective rewards + sibling comparisons + mutable search statistics + causal lineage.
- Core access patterns mapped to database operations: recovery = a query against the frontier; cross-session reuse = vector-seeded graph traversal; training-data extraction = a materialized view; agent replay = an as-of temporal query.
- Two-loop architecture: inner loop of skill-driven agent sessions + outer loop of RSI tree search over a persistent data substrate that "renders agents stateless and serverless." Extended to multi-agent scientific societies sharing hypotheses, critiques, and distilled knowledge.
- Design points from sections read: governed view maintenance, bi-temporal memory (valid-time + transaction-time), crash recovery via frontier queries, cross-user/cross-session governed sharing.
- Thesis line: "databases made data reliable; experience graphs may make agents cumulative." File-based memory (declarative facts, procedural skills, episodic logs) is diagnosed as capturing "what an agent knows, not the reward-bearing experience graph of what its search tried."

## Data sources named
None — no empirical dataset; architecture paper with no experiments, tables, or baselines in the extracted sections. No code stated.

## Findings (numbers and facts, not vibes)
- No numerical results: the paper contains no experiments, tables, or baselines in the extracted sections (Abstract + Sections 1–2 + architecture sections). [OTHER]
- The access-pattern claims (recovery-as-query, replay-as-temporal-query) are asserted, not measured; no cost/latency analysis of storing full experience graphs; governance model is sketched, not specified; the "stateless/serverless agents" vision assumes infrastructure that doesn't exist yet. [TRUST-SIGNAL, OTHER]
- File's diagnosed fit to GSE: today's "experience" is scattered — gse-lab CSVs (static artifacts), dated research dirs (narrative reports), the agent-bus (task handoffs) — none of it queryable as a search graph; existing-map check found no unified queryable store of experimental experience (closest: wave5-dedup base flat ID list, coin-commitments.json). [OTHER]
- File's risk note (recorded in the ledger): over-engineering the store before the discovery loop produces enough experience to need it — start with the minimal graph (nodes = attempts, edges = parent/derived-from, rewards = gate scores). [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Thesis "databases made data reliable; experience graphs may make agents cumulative" and the access-pattern mapping → OTHER
- Bi-temporal memory (valid-time + transaction-time on every reward row) and governance (append-only rewards, content-hashed artifacts, locked split with access logging) → TRUST-SIGNAL
- Diagnosis of file-based memory capturing "what an agent knows, not the reward-bearing experience graph of what its search tried" → TRUST-SIGNAL, OTHER
- The beyond-paper automated experience miner (weekly graph queries detecting bad-implementation/good-idea hypotheses, dead lanes, recurring failure reflections) → TRUST-SIGNAL, OTHER
- No QB-BEHAVIOR, COACHING, OL, or SCHEME content: pure data-foundation architecture.

## Engine-actionable? (yes/no + one-line what)
Yes — build the minimal GSE experience graph (attempt/artifact/reward/comparison/reflection nodes; derived_from/sibling_of/supersedes edges; bi-temporal rewards; append-only governed rewards) as the discovery loop's substrate, adopted only if analyst query-time <2 min vs >30 min file search, crash recovery <5 min with zero duplicate backtests, 5/5 replay fidelity, and storage <10 GB after 30 nights.
