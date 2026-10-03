# docs/ops/FULL_REPO_AUDIT_2026-07-29.md
## What it is (1-2 sentences)
A 2026-07-29 full-repo audit of Beexly/Sports (Galaxy Sports Edge) at commit 5ccc855 against a "world-class production OS" standard. Verdict: elite code and free multi-source data design, but cosplay until Production Neon proves live — overall B+ (ops C).
## Key metrics/methods (formulas where given, else "not specified")
- Scale: ~4,038 source-ish files, ~2,470 TS, 477 TSX, ~1,089 MD, 8 root MD, ~735 docs MD, ~220 handoff MD, 221 pages, 162 API routes, 34 cockpit pages, 18 cron routes / 13 scheduled, 20 packages, 98 Prisma models, 38 integrity systems, 24 platform sources (15 cleared), 15 DRAFT_ONLY Agent OS.
- Integrity scoreboard (38 systems): Built YES 33 / PARTIAL 4 / NO 1; Wired YES 13 / PARTIAL 6 / NO 19; Proven YES 25 / PARTIAL 7 / NO 6; Public-safe YES 6 / PARTIAL 8 / NO 24.
- Redundancy bar: critical need×sport dual+ = 49, single = 0, none = 0; critical gaps (<2 cleared) = 0; `redundancyGaps(2)`, `multi-source-scores.ts`; API `GET /api/cockpit/world-class-readiness`.
- Agent OS: DRAFT_ONLY 15, NOT_WIRED 8, MANUAL 3, REAL/PARTIAL 3; externalActions: NONE; ACTIVE autonomous: 0. Capability registry: DRAFT_ONLY 7, MANUAL 2, DESIGNED 2, NOT_WIRED 5, ACTIVE 0. Council (23): DRAFT_ONLY 7, MANUAL 3, NOT_WIRED 13.
## Data sources named
- Live score chains: NFL ESPN (+ nflverse stats dual); NCAAF/NCAAB ESPN + henrygd; NBA ESPN + BALLDONTLIE; MLB ESPN + MLB Stats API; NHL ESPN + NHL web API; MLS ESPN single (stats dual elsewhere).
- Free odds dual: Polymarket Gamma + Kalshi (`oddsApiRequired=false`, mustSpend=false); weather dual: Open-Meteo family. Free settle + free score persist without Odds key.
- Quote-plane with free odds + methodTag CLV; settleSport + durability (ingestion-pipeline).
## Findings (numbers and facts, not vibes)
- Grades: architecture A; operator OS A−; free multi-source data A−; prediction/quote/settle science A−; law/refuse-default A; agent prime B+; production proof (Neon) C/fail; doc discipline C+; observability D; public surface sprawl B−.
- Free multi-source bar is world-class: critical need×sport dual+ 49, zero gaps; free odds dual; score failovers across 6 leagues.
- Choke point: Production Neon unproven (dual URLs); `db-neon-sor` PROVEN PARTIAL with lastVerifiedAt null; free-settlement-path + free-first-data are code YES but production smoke NO; 19 integrity systems WIRED=NO; observability vacuum (obs-tracing/obs-alerts).
- Founder-blocking queue: production Neon dual URLs (gse-postgres), CRON_SECRET + redeploy, smoke tests (gamma · free settle · jarvis-snapshot · `npm run prove:neon`).
- Agent next: NFL/MLS second free score path if legal/free; archive handoff/ into ops archive; one observability path when key exists; keep registry/council/agent-OS statuses synced.
- Double-build kill list: /cockpit, Agent OS, free-first, multi-source scores, quote-plane CLV, ai-control-plane, CANONICAL, affiliate funnel.
- Exit line: neon_proven=NO; LIVE_BOARD=off; next=prove_neon_then_smoke_free_spine. Judgment: "a serious multi-source sports intelligence company codebase. The remaining shame is unproven Production DB, not missing architecture."
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- All items: OTHER (repo/infra audit; no player, coaching, or scheme content).
## Engine-actionable? (yes/no + one-line what)
No — audit of repo state, not engine modeling; the one modeling note is the free multi-source spine (dual free odds: Polymarket Gamma + Kalshi; per-sport score failovers) as the redundancy template for data pipelines.
