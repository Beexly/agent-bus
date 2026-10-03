# docs/rejected-data-sources.md
## What it is (1-2 sentences)
A supply-chain audit log recording open-source repositories evaluated and REJECTED for Galaxy Sports Edge, with verdicts (LEGAL, SECURITY, QUALITY, FUTURE) and reasoning — a standing list future maintainers must consult before re-evaluating.
## Key metrics/methods (formulas where given, else "not specified")
not specified (no quantitative method; qualitative verdict legend).
## Data sources named
- Approved alternatives named in passing: `the-odds-api.com` (already integrated), `api-sports.io`, `docs/data-source-options.md`, `docs/launch-qa-checklist.md`.
- Evaluated repos: Upcoming-and-Live-Sports-Data (Monirul Islam); Stake-All-Games-Predictor-Latest (anonymous); Public-FotMob-API; claude-seo; Flat-UI-master (Designmodo 2014); design-blocks-dev (Froala); unravelsports (Bekkers & Sahasrabudhe 2023, MPL-2.0); sample-data-master (Metrica Sports); cc-switch; Front-End-Checklist (David Dias); DataScienceProjects (Tuan Nguyen-Doan — Maher 1982 / Dixon & Coles 1997 Poisson model).
## Findings (numbers and facts, not vibes)
- 11 repos reviewed: 2 LEGAL rejects (DRM keys/stream URLs; FotMob ToS-violating proxy), 2 SECURITY rejects (obfuscated PHP SEO-spam; FotMob unsigned-binary vector), 2 QUALITY rejects (Bootstrap 2.3/4 kits incompatible with Tailwind/Next.js 14), 1 NOT RELEVANT (cc-switch dev tool), 2 FUTURE (unravelsports GNN — Python-only, no tracking data; Metrica tracking data), 2 MINED-for-content/math (Front-End-Checklist → `docs/launch-qa-checklist.md`; Poisson model reimplemented in TypeScript at `packages/prediction-engine/src/poisson.ts` with full test coverage).
- Hard rule: never link to, reference, or use data derived from Upcoming-and-Live-Sports-Data (DMCA/Stripe/Cloudflare/Vercel exposure).
- Explicitly safe guidance: install claude-seo only via Claude Code's `/plugin marketplace add` mechanism, never `bash install.sh`.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the audit itself is a trust artifact — documented rejection criteria protect the launch from legal/security exposure; the mined-math record (Poisson reimplemented with tests, no runtime dependency) is the correct ingestion pattern.
- OTHER: documents the approved-source catalog pointer (`docs/data-source-options.md`).
## Engine-actionable? (yes/no + one-line what)
no — a standing guardrail log, not an engine input; its actionable value is "do not re-evaluate these sources."
