# intelligence/developer-innovation-layer.md
## What it is (1-2 sentences)
Doctrine-only (unimplemented) blueprint for the Sports OS Developer / Innovation Layer: operator-workbench vision, Intelligence Module Registry, gated public developer surfaces, Agent Tool Contracts, B2B API pathway prerequisites, the Responsible Intelligence public doctrine, and the internal Innovation Lab — credibility-building through transparency rather than marketing.
## Key metrics/methods (formulas where given, else "not specified")
- AgentToolContract (PROPOSAL, unimplemented): toolId, toolType (research|source_fetch|brain_query|calibration|output), inputSchema/outputSchema (JSON Schema), requiresApproval, publicSafe, rateLimit {maxCallsPerMinute}, failureBehavior (throw|return_empty|return_stale), auditRequired.
- B2B API design rules (future): every response carries sourceTier, retrievedAt, confidence, publicSafe; no fabrication/aggregation without source attribution; rate limiting at the API gateway; attribution required in ToS; no raw odds redistribution without explicit licensing from The Odds API.
- Calibration transparency page prerequisite: Signal Ledger + 30+ settled picks baseline. Otherwise not specified.
## Data sources named
docs/source-registry-spec.md (existing Source Registry foundation); Evidence Vault, Entity Graph, Signal Ledger (prerequisite components for the API lane); The Odds API (no raw redistribution without licensing).
## Findings (numbers and facts, not vibes)
- Lowest-friction public developer entries: `/intelligence/glossary` and `/intelligence/source-hierarchy` — documentation/copy work only, no new schema or routes.
- 8 proposed public surfaces with dependency chains (glossary, source hierarchy, methodology, calibration, entity graph, signal ledger, /docs/api, /docs/examples).
- "What Sports OS will never claim" list: no specific win rate without calibration data; no "sharp money is on X" without a specific verifiable source; no risk-free/guaranteed picks; no treating rumor as fact without Tier 1/2 confirmation.
- Claim enforcement tests named: `trust-claims.test.ts` (public claims backed by data), `no-fake-percentages.test.ts`, `brand-voice-vocabulary.test.ts` (blocks casino/hype language), `public-copy-scanner.test.ts` + `public-copy-scan-strong.test.ts`.
- Innovation Lab (cockpit-internal): /cockpit/jarvis/trend, /cockpit/calibration, /cockpit/market-twin, /cockpit/agent-runs. Rule: no agent tool publicly accessible; cockpit is the sandbox, public surface is the product.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] The Responsible Intelligence doctrine + five claim-enforcement test suites are the operational definition of trust signals for GSE.
- [TRUST-SIGNAL] "Every API response must carry sourceTier, retrievedAt, confidence, publicSafe" — source-provenance as a first-class engine contract.
- [OTHER] Source tiering (Tier 1/2 confirmation rules) governs which data may support public claims.
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the API-response contract (sourceTier, retrievedAt, confidence, publicSafe) as the provenance schema for every engine output.
