# docs/ai/jarvis/JARVIS_AGENT_COUNCIL_BUILD_SPEC_2026-06-12.md
## What it is (1-2 sentences)
Owner build spec (verbatim, 2026-06-12) for the Jarvis Agent Council: 23 governed agent "seats" across 6 departments with authority tiers 0–4, seat-vs-subagent distinction, routing rules, review gates, and an owner-approval doctrine — currently 6 draft-only, 3 manual, 14 not wired.
## Key metrics/methods (formulas where given, else "not specified")
- Seat counts: 23 total = 6 registered cockpit agents draft-only (JARVIS, SCOUT, TAL, SARAH, AVA, BOBBY) + 3 manual (LEDGER, AUDIT, METER) + 14 designed-but-not-wired (DELTA, ARCHIVE, RELAY, PILOT, ECHO, CHAIN, GAUGE, QUILL, FLARE, PULSE, VECTOR, MINT, PRISM, ASCEND).
- Authority tiers: 0 Read Only · 1 Draft Only · 2 Safe Internal Action · 3 Approval Required · 4 Human Only; default everyone 0/1 unless wired and approved.
- Acceptance criteria: 20 numbered checks (all seats registered; AUDIT independent of SCOUT/DELTA/PRISM/ASCEND; ASCEND a standing subagent under PRISM; no simulated/not-wired capability presented as real).
## Data sources named
None named as data sources — governance/ops doc. References prior protocol docs in the same directory (JARVIS_MEMORY_PROTOCOL etc.).
## Findings (numbers and facts, not vibes)
- Pipeline law: AVA drafts → QUILL rewrites voice → GAUGE audits → SARAH owns surface → JARVIS decides owner-readiness → humans publish; owner (Garrett/Beex) is final authority on public claims, spending, legal-sensitive language, betting/gambling-sensitive claims, production changes.
- AUDIT (performance & calibration auditor) must stay independent of pick/metric producers (SCOUT, DELTA, PRISM, ASCEND).
- Routing rules documented for: pick research (SCOUT→DELTA→TAL→JARVIS), settlement (LEDGER→AUDIT→JARVIS), public content, data incidents, memory decisions, tool/browser, workflow automation, marketing, revenue/pricing, forecasting, stat R&D (PRISM→ASCEND→AUDIT→JARVIS).
- Subagents never take external action, publish, confirm memory, approve claims, override parents, or write canonical data without review; output is draft until parent review.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: AUDIT independence doctrine and the "no simulated/not-wired capability presented as real" acceptance criterion — integrity scaffolding around calibration/display safety.
## Engine-actionable? (yes/no + one-line what)
No — governance org chart for the agent fleet; no engine signal or metric content.
