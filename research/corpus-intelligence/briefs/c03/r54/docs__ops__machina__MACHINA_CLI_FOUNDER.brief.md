# docs/ops/machina/MACHINA_CLI_FOUNDER.md
## What it is (1-2 sentences)
Founder runbook for the Machina CLI (v0.8.0) + sports-skills (0.30.1), documenting install, auth (founder-only browser SSO or project API key), and the zero-key sports data commands usable without a Machina login.
## Key metrics/methods (formulas where given, else "not specified")
not specified — operational runbook, no metrics or formulas.
## Data sources named
Machina platform (machina.gg); machina-sports/machina-cli GitHub; Clerk SSO; sports-skills package (public Kalshi / ESPN-family modules); live snapshot 2026-08-09: Kalshi exchange `trading_active=true`, 18 sports in `get_sports_config` (NFL/NBA/MLB/NHL/WNBA/CFB/CBB + EPL/MLS/UCL/… + World Cup + esports), saved to `docs/ops/machina/kalshi-sports-config-live.json` and `kalshi-sports-series-map.json`; GSE `packages/data-ingestion/src/kalshi-series.ts` `KALSHI_SERIES` mirrors that map.
## Findings (numbers and facts, not vibes)
- `machina sports kalshi *` commands work with no Machina account (fair values, series search, live quotes, sports config map).
- Auth secrets live in `~/.machina/credentials.json` (mode 600), never committed; agents cannot complete browser SSO — founder-only.
- Integrity constraints noted: Polymarket product hold applies even if Machina templates expose Gamma; ranking floors / AUTO_PUBLISH / maps unchanged.
- High-leverage surfaces for GSE: `machina sports kalshi *`, `machina sports markets` (cross-market matching research), `machina connect` (MCP bridge), `machina org usage` (token cost control).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Kalshi series map already mirrored in GSE ingestion code as independent fair-value input. [OTHER — data infrastructure / tooling]
- Integrity note: Polymarket hold and ranking floors apply inside GSE regardless of Machina template exposure. [TRUST-SIGNAL — governance guardrail]
## Engine-actionable? (yes/no + one-line what)
No — intake only; founder-only auth blocks agent use, and the zero-key sports commands are tooling references, not engine inputs.
