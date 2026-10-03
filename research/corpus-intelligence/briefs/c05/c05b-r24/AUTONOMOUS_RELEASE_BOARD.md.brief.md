# ops/archive/prompts/AUTONOMOUS_RELEASE_BOARD.md
## What it is (1-2 sentences)
An autonomous release board (generated 2026-05-29 by Claude Opus 4.8, branch `claude/awesome-sagan-LOyCa`) tracking what shipped that pass, the next unblocked queue, owner-gated items, deferred items, and standing invariants — with a severity legend showing zero open SEV0/SEV1 issues.

## Key metrics/methods (formulas where given, else "not specified")
- **Odds API retry**: bounded exponential backoff with jitter for 429/5xx, preserving the 15s timeout.
- **Public-picks quality floor**: public picks and daily-slate counts require data quality >= 70.
- **Pricing**: live Stripe sandbox weekly prices — Pro $9.99/week, Elite $13.99/week.
- **Mobile tap targets**: >= 44px for evidence drawer actions.
- **Classification tags**: CODEX-SAFE-PATCH, CLAUDE-BUILD-REPAIR, OWNER-GATED, PREVIEW-ONLY, DEFERRED-NONBLOCKING, UNKNOWN-REQUIRES-STATE-VERIFICATION.
- **Severity legend**: SEV0 trust/security/legal/data/compliance breach; SEV1 core user blocked/release impossible; SEV2 major degradation; SEV3 feature-specific; SEV4 polish. Open SEV0/SEV1: none.

## Data sources named
- Odds API (retry + quality floor).
- Stripe sandbox weekly pricing (Pro $9.99/week, Elite $13.99/week).

## Findings (numbers and facts, not vibes)
- 10 items done this pass: Decision Room onward wayfinding + No-Bet/restraint framing (apps/web/app/room/[gameId]/page.tsx + test); operating backbone (state sync, route contract, golden-path proof, scorecard); picks-evidence a11y quick win (pinned `pick-card-a11y`, `audit-drawer-shape` tests); `/picks` in-content trust strip (RiskDisclosure card + methodology link near free-tier paywall, pinned `picks-page-policy-gate`); weekly pricing alignment (pinned `pricing-honesty`); design-token color migration (pinned `picks-design-token-integrity`); mobile tap targets (pinned `picks-mobile-tap-targets`); Odds API retry + quality floor (pinned `odds-api-client`, `public-picks-quality-floor`); settlement snapshot durability (idempotent already-settled rows, fallback learning record when prediction-time snapshot missing, pinned `settlement-snapshot-durability`); homepage finish doctrine polish (tokenized methodology/responsible close surfaces, Instrument Serif ethos).
- 5-item next queue, recommended order: Today's Board doctrine redesign (3 telemetry lanes, visible No-Bet/restraint state, freshness/trust context); Decision Room doctrine redesign (evidence timeline, Market Pulse, Lens Switcher, pre-mortem, Galaxy Memory close); `/picks` conversion polish; trust+conversion surfaces one by one (Methodology, Performance, Ledger, Pricing, Responsible-Play); global chrome doctrine pass.
- Owner-gated (do not implement without approval): public Coach, payments activation, public-picks activation, launch-state flip, preview URL, production env vars, Prisma ADR approval, data-rights/legal approval; plus the 6 Zone-3 items from the wave completion report.
- Deferred (non-blocking): Parlay MRI, Academy, dedicated guided Demo route.
- Standing invariants: no fake/stale data; server-side paywall only; no secrets in code; types strict; tests required; guardrails green; protected engine never client-side.
- Settlement durability detail: retries PickSignalSnapshot outcome writes; already-settled rows treated as idempotent; minimal fallback learning record created when prediction-time snapshot is missing.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL**: public-picks data-quality floor (>= 70), RiskDisclosure card with methodology link at the free-tier paywall, No-Bet/restraint framing as a first-class surface — the board treats restraint/no-bet as a visible trust state.
- **TRUST-SIGNAL**: settlement snapshot durability with idempotency — evidence pipeline integrity for the learning loop.
- **OTHER**: classification tag system (CODEX-SAFE-PATCH vs CLAUDE-BUILD-REPAIR vs OWNER-GATED) as an agent-work routing discipline; SEV0/SEV1 all-clear status.

## Engine-actionable? (yes/no + one-line what)
Yes — the >=70 data-quality floor for public picks and the idempotent settlement-snapshot pattern (fallback learning record when prediction-time snapshot is missing) are directly reusable engine pipeline rules.
