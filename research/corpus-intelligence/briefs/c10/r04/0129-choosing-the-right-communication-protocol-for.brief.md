# arxiv-program/research/2026-09-21/arxiv-deep/0129-choosing-the-right-communication-protocol-for.md
## What it is (1-2 sentences)
A 7-page narrative literature review of web communication protocols (REST, SOAP, GraphQL, gRPC, WebSockets, SSE, HTTP/2/3, MQTT); the deep-read verdict is REJECT.

## Key metrics/methods (formulas where given, else "not specified")
No dataset, no experiments, no equations, no quantitative comparison, no code — narrative review only.

## Data sources named
None.

## Findings (numbers and facts, not vibes)
No actionable content — REJECT verdict. Only recommendation of note is a proposed replacement study: benchmark REST polling vs SSE vs WebSocket for GSE-shaped workloads (1 KB JSON odds snapshots at 1–10 s cadence, 1–50 consumers; measure median/p99 latency, bytes, CPU; adopt the winner only if ≥2× lower p99 at equal CPU). All findings tags n/a.

## Engine-actionable? (yes/no + one-line what)
No — zero quantitative evidence; do not port anything from this paper.
