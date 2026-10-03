# docs/source-providers/commercial-crawling-approval-gate.md
## What it is (1-2 sentences)
A doctrine document (Prompt 4 — Final Wave) defining a seven-gate approval process that must be satisfied in order before any web crawling is implemented in the Sports OS data pipeline.

## Key metrics/methods (formulas where given, else "not specified")
not specified. Process rules (not formulas):
- Default position: ALL crawling is PROHIBITED until approved.
- Gate 5 rule: rate limits must operate at 50% of a site's documented limit.
- Post-approval: if a site's ToS changes to prohibit crawling, crawling must stop within 48 hours of discovery.
- Post-approval: license terms must be reviewed annually or on ToS change.

## Data sources named
- Cross-references: `docs/audit/final-wave-source-risk-register.md`, `docs/audit/piracy-malware-do-not-use-register.md`, `docs/source-providers/scores24-source-review.md` (example ORANGE provider), `docs/audit/prompt-leak-and-sensitive-source-policy.md`, `docs/intelligence/SPORTS_OS_INTELLIGENCE_NETWORK_MASTER_PLAN.md`.

## Findings (numbers and facts, not vibes)
- Seven gates in order: (1) robots.txt review, (2) ToS review, (3) API/licensing review, (4) commercial-use permission decision, (5) rate limit plan, (6) attribution and storage policy, (7) owner approval.
- Gate 2 FAIL blocks crawling unless a commercial license resolves it; Gate 4 FAIL blocks until explicit authorization; Gate 7 requires owner approval in writing before any crawling code is written.
- Blocked until all gates pass: HTTP client code, HTML parsers, scheduled jobs, `packages/data-ingestion/` adapters, worker configs targeting the site; prototypes are not an exception.
- Forbidden: treating absence of ToS prohibition as permission; robots.txt bypass techniques; storing raw HTML dumps beyond license; redistributing raw data.
- Attribution rule: public output derived from crawled data must cite "[Site name] (accessed [date])"; raw data never republished — only derived intelligence.
- Codex audit P0: any HTTP client in `packages/data-ingestion/` targeting a source not ADMITTED in the Source Acquisition Mesh.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — legal/compliance process doctrine; no QB, coaching, OL, trust-signal, or scheme intelligence.

## Engine-actionable? (yes/no + one-line what)
No — compliance/process doctrine, not predictive signal; relevant only to data-acquisition policy, not the prediction engine.
