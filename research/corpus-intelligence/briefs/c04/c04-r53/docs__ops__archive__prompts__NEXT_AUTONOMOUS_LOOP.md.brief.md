# docs/ops/archive/prompts/NEXT_AUTONOMOUS_LOOP.md
## What it is (1-2 sentences)
A short archived handoff doc (generated 2026-05-29 by Claude Opus 4.8) summarizing the state entering the next autonomous build loop for Galaxy Sports Edge, naming the single highest-leverage unblocked item and an exact audit prompt for a follow-on agent. Product-operations history, not sports research.
## Key metrics/methods (formulas where given, else "not specified")
not specified — no sports metrics or formulas.
## Data sources named
Internal repo artifacts only: `docs/ops/ROUTE_SURFACE_CONTRACT.md`, `GOLDEN_PATH_PROOF.md`, `GALAXY_2026_WORLD_CLASS_SCORECARD.md`, `AUTONOMOUS_RELEASE_BOARD.md`, `reports/claude/CLAUDE_STATE_SYNC_*`.
## Findings (numbers and facts, not vibes)
- Operating backbone (route contract, golden path proof, scorecard, release board) existed as of 2026-05-29; branch `claude/awesome-sagan-LOyCa`; no open SEV0/SEV1.
- Next highest-leverage unblocked item: Release Board Pri 1 — in-content trust strip on `/picks` (compose existing `RiskDisclosure` card variant + methodology link near the paywall, plus a brand-safety test).
- The Codex audit prompt it hands over: verify `apps/web/app/room/[gameId]/page.tsx` renders onward links to `/ledger`, `/performance`, `/methodology`, `/responsible-play` with no banned phrases (via `node scripts/guardrails/trust-gate.mjs`); verify no protected engine value (weights/thresholds) is serialized to public props in `/room`, `/board`, `/picks`, `/performance` payloads; `npm run typecheck`, `npm test`, `npm run guardrails`, `npm run build` green after `npm run db:generate`; scorecard deltas match the diff.
- Loop hygiene: run `npm run db:generate` before typecheck/build in a fresh container (Prisma client not committed); owner gates (deploy/PR/launch-state flip) stay owner-only; prefer composition over rewrite.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: entirely product/ops material. One adjacent note: the audit prompt explicitly forbids serializing protected engine values (weights/thresholds) to public props — an early statement of the public/private doctrine, but no football content.
## Engine-actionable? (yes/no + one-line what)
no — archived build-loop handoff; no sports data, methods, or findings.
