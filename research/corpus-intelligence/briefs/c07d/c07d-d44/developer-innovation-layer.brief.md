# intelligence/developer-innovation-layer.md
## What it is (1-2 sentences)
Doctrine-only plan (no implementation) for the Sports OS Developer / Innovation Layer: a future public developer surface (source hierarchy, methodology, calibration transparency, glossary, eventually a B2B API) plus internal structures (Intelligence Module Registry, Agent Tool Contracts, Innovation Lab) aimed at builders, investors, and future partners. Status is proposal-only; implementation requires an approved change proposal; the current cockpit implements only a subset of the envisioned panels.

## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas, equations, or statistical parameters anywhere in the file.

Numeric gates/thresholds stated:
- Calibration transparency page (`/intelligence/calibration`) requires a Signal Ledger plus a **30+ settled picks baseline** before the page can be built.
- Every API response must carry `sourceTier`, `retrievedAt`, `confidence`, and `publicSafe`.
- Rate limiting must be enforced at the API gateway, not the application layer.

Module declaration schema (Intelligence Module Registry) — each module must declare: module type (source adapter / research skill / signal processor / output generator / calibration plugin), source tier, input schema, output schema, freshness TTL, license and terms, allowed-use classification, test coverage requirement, failure behavior.

Agent tool contract type (proposed, TS, verbatim):
```ts
type AgentToolContract = {
  toolId: string;
  toolType: "research" | "source_fetch" | "brain_query" | "calibration" | "output";
  inputSchema: Record<string, unknown>;   // JSON Schema
  outputSchema: Record<string, unknown>;  // JSON Schema
  requiresApproval: boolean;
  publicSafe: boolean;
  rateLimit?: { maxCallsPerMinute: number };
  failureBehavior: "throw" | "return_empty" | "return_stale";
  auditRequired: boolean;
};
```
Rule stated: no agent tool may be publicly accessible; all agent tooling is cockpit-internal until an explicit public API is approved and governed.

## Data sources named
No data sources by name. References: `docs/source-registry-spec.md` (existing Source Registry, the foundation the Intelligence Module Registry extends), parent `docs/intelligence/SPORTS_OS_INTELLIGENCE_NETWORK_MASTER_PLAN.md`, and The Odds API (referenced only in the rule "No raw odds redistribution without explicit licensing from The Odds API").

## Findings (numbers and facts, not vibes)
- File status is "Doctrine only"; implementation requires an approved change proposal. Source: "Prompt 1 §3.5 · Prompt 4 VS Code / workbench doctrine".
- Three target audiences for the layer: (1) builders integrating via a future API, (2) investors evaluating technical depth/defensibility, (3) future partners (data providers, sports organizations, media companies, analytics firms).
- Operator Workbench Vision maps VS Code concepts to Sports OS: command palette → Operator Command Palette (Brain, research, triage actions); extension contributions → Intelligence Module Registry; settings hierarchy → Agent Tool Contracts; workspace panels → Cockpit panels (Sources, Calibration, Signal Ledger, Market Twin); terminal/task/debug → Brain Observability (agent runs, evidence retrieval, query trace); plugin marketplace → Source Provider Modules (register, inspect, score data sources).
- Intelligence Module Registry: BLOCKED — schema and route changes required. Proposal must reference `docs/source-registry-spec.md`.
- Eight proposed public developer surfaces, all BLOCKED until prerequisites exist (do not create any route without approval): `/intelligence/source-hierarchy` (existing doc; low-friction), `/intelligence/how-it-works` (needs claim governance + methodology content), `/intelligence/calibration` (needs Signal Ledger, **30+ settled picks baseline**), `/intelligence/entity-graph` (needs Entity Graph schema + docs), `/intelligence/signal-ledger` (needs Signal Ledger implementation), `/docs/api` (needs full API implementation, governance, rate limiting), `/docs/examples` (needs API complete), `/intelligence/glossary` (content-only, low dependency). Glossary and source-hierarchy page are the lowest-friction entries.
- B2B API Pathway (Component 15, "highest-dependency monetization lane") has 7 ordered prerequisites: (1) Evidence Vault implemented/tested/stable, (2) Entity Graph implemented/tested/stable, (3) Signal Ledger implemented/tested/stable, (4) Claim Governance implemented, all public claims traceable to evidence, (5) Source Transparency — public methodology pages complete, (6) API governance (rate limiting, auth, attribution policy, ToS), (7) Lanes 1–2 monetization operationally stable.
- API design principles: every response carries `sourceTier`, `retrievedAt`, `confidence`, `publicSafe`; no fabricated or aggregated data without source attribution; rate limiting at gateway; attribution required in ToS for public display; no raw odds redistribution without explicit licensing from The Odds API.
- Responsible Intelligence Doctrine (public-facing): what Sports OS is (governed intelligence network; source-aware, evidence-weighted, auditable; shows work, acknowledges uncertainty; tracks calibration, publishes accountability data), is not (guaranteed picks service; sharp money insider; replacement for your own judgment; a gambling product; a tout service), and will never claim (a specific win rate without calibration data; "sharp money is on X" without a specific verifiable data source; that any pick is risk-free/guaranteed; that a rumor is fact without Tier 1 or Tier 2 source confirmation).
- The doctrine is enforced by five named test files: `trust-claims.test.ts` (public trust claims backed by data), `no-fake-percentages.test.ts` (blocks fabricated win-rate stats), `brand-voice-vocabulary.test.ts` (blocks casino/hype language), `public-copy-scanner.test.ts` and `public-copy-scan-strong.test.ts` (scan all routes).
- Innovation Lab is internal-only with four current cockpit surfaces: `/cockpit/jarvis/trend` (Jarvis synthesizer trend view), `/cockpit/calibration` (model calibration cockpit), `/cockpit/market-twin` (market gravity cockpit), `/cockpit/agent-runs` (agent run history). Rule: no lab surface becomes public without completing the standard component dependency chain and receiving owner approval.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: The Responsible Intelligence Doctrine plus its five enforcement test files is the operational machinery behind Garrett's standing rules — gated win-rate (no win-rate claim without calibration data), "sharp money" claims require a specific verifiable data source, Tier 1/Tier 2 confirmation required before treating rumor as fact. Serves the trust-target intake / public-claims lane directly; it names the exact test files a wiring sweep should verify exist on main (trust-claims, no-fake-percentages, brand-voice-vocabulary, public-copy-scanner ×2).
- TRUST-SIGNAL: The 30+ settled-picks baseline for the public calibration page pairs with the founder-onepager's stricter 100-settled-signals threshold — two concrete, citable gates the calibration program can anchor on, the first one as an intermediate milestone. Serves the calibration/sizing lane.
- TRUST-SIGNAL: The B2B API rules ("every API response must carry sourceTier, retrievedAt, confidence, publicSafe"; no unattributed aggregation; rate limiting at gateway) are a ready-made response-contract schema for any internal tool or future surface that serves signals outward. Serves the trust-target intake lane.
- OTHER: The Intelligence Module Registry's required module declarations (source tier, freshness TTL, license/terms, allowed-use classification, test coverage requirement, failure behavior) read like a checklist for the MOTIF WIRING LANE source-intake inventory — a standard against which every adapter Garrett's fleet has built can be graded.

## Engine-actionable? (yes/no + one-line what)
Yes — verify the five doctrine-enforcement test files exist on main (trust-claims, no-fake-percentages, brand-voice-vocabulary, public-copy-scanner, public-copy-scan-strong) and adopt the API response contract (`sourceTier`, `retrievedAt`, `confidence`, `publicSafe`) as the standard for any internal signal-serving surface.
