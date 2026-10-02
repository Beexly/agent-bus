# docs/ops/archive/prompts/GROK_BUILD_MASTER_PROMPT.md
## What it is (1-2 sentences)
An archived master prompt (source-of-truth playbook) for an autonomous coding agent working on the Beexly/Sports repo (Galaxy Sports Edge), covering session-open commands, already-shipped artifacts, the priority stack, and hard operating rules. It is product-operations history, not sports research.
## Key metrics/methods (formulas where given, else "not specified")
not specified — no sports metrics or formulas. Mentions a "Trials BH-FDR" (Benjamini-Hochberg false-discovery-rate control) in the `prediction-engine` edge-lab (+ package export), and a trust-gate script (`scripts/guardrails/trust-gate.mjs`), but no formulas are given.
## Data sources named
- Odds API (enrichment only, `oddsApiRequired:false`)
- `/api/cron/gamma` free path with optional `CLOSING_ARCHIVE_PATH` durable archive
- `RESEARCH_TO_LEVERAGE.md` (referenced, not in this file)
## Findings (numbers and facts, not vibes)
- Repo: Beexly/Sports, MAIN post-PR-#249. Product posture: "honesty not volume," Refusal-Native Forecasting, refuse-default, LIVE_BOARD off, no fake ROI, no sportsbook CPA.
- Shipped artifacts listed as contract: `cronAuthError` (HTTP cron SoT), `@sports/util` (pure secret + backoff), `@sports/quote-plane` (Gamma + archive + durable file store), `/api/cron/gamma` (free path, optional `CLOSING_ARCHIVE_PATH`), Stripe session tier on `/values`, Trials BH-FDR, `@sports/ai-council`, 12 Vercel crons (gamma + 11 priors).
- Priority stack: P0 keep MAIN green with lockfile on every new workspace; P1 durable archive blob/Redis once multi-instance proven (file path first), land/fix frontier PRs #248 (own-feed) and #247 (rebase after #249), Board classifyBoardState / own-feed refuse / prefire publicFire (shipped #251), Board / own-api design tokens; P2 wire `createTrialsRegistry` into new Phase-3 feature admit paths, port remaining packet (overlay, SSE, context-plane, competitive).
- Hard refuses: gate flips without YES, sportsbook affiliates, fake ROI, PQ-washing Pedersen, OCR-as-fire, mutating calibration certs, string `===` secret comparison, deleting refresh-odds.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: entirely product/ops material — no QB, coaching, OL, scheme, or trust-signal content about football. The Trials BH-FDR note is engine infra, not football analysis.
## Engine-actionable? (yes/no + one-line what)
no — pure ops history; the only engine-relevant note (BH-FDR trials registry in prediction-engine) has no method detail to act on.
