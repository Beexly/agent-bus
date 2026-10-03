# ai/jarvis/JARVIS_MEMORY_BUILD_SPEC_2026-06-12.md
## What it is (1-2 sentences)
Owner build spec (2026-06-12, verbatim, queued not built) for wiring persistent memory into Jarvis: an evidence-based, typed, timestamped, source-linked, reviewable, reversible memory system over a Postgres episodic store, with vector/mem0 strictly as recall index, never the source of truth.
## Key metrics/methods (formulas where given, else "not specified")
- Memory hierarchy: version-controlled markdown (architectural truth) > Postgres episodic store (decisions/events truth) > vector/mem0 (index only) > runtime context (session only).
- Memory states: candidate · confirmed · repeated_pattern · conflicted · stale · superseded · rejected · expired. Candidates require confirmation/repeated evidence/owner approval — never promoted by inference.
- Schema: `jarvis_memory_events` (id, memory_type, memory_state, scope, title, summary, source_type, source_ref, actor, owner, confidence, sensitivity, tags, supersedes_memory_id, expires_at, timestamps, embedding_ref, metadata jsonb) + `jarvis_decisions` ledger (every major owner decision creates BOTH a ledger entry and a linked memory event).
- Memory hygiene flags: unused 90 days, contradicted, low confidence, missing source refs, tied to deprecated docs, should-expire.
- 12 acceptance criteria incl. "Confirmed memory persists across reloads," "Conflicts are surfaced, never overwritten," mock data labeled simulated.
## Data sources named
None external; sources are owner decisions, agent runs, operational events, and the protocol docs in `docs/ai/jarvis/` (JARVIS_MEMORY_PROTOCOL, ARCHITECTURE, CAPABILITY_REGISTRY, AGENT_COUNCIL, OPERATOR_BRIEF).
## Findings (numbers and facts, not vibes)
- Current state at spec time: memory not wired — operational truth rebuilt from DB on every load, architectural truth in markdown, nothing recalled across sessions.
- Agent memory tracks trust score by task type, failure history, escalation history, common weaknesses, approved/blocked use cases — relevant to Model Council integration.
- Non-negotiables: no fabricated memory, no silent candidate promotion, no overwriting confirmed memory without a supersession trail, no chat history as operating truth.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the candidate-vs-confirmed discipline is the same evidence hygiene the engine needs for ingesting external signals — never treat unverified input as truth.
- OTHER: platform AI-ops architecture, not sports modeling.
## Engine-actionable? (yes/no + one-line what)
No — queued build spec for Jarvis operator memory; engine relevance only via the trust-score-per-task-type agent-memory pattern for model council use.
