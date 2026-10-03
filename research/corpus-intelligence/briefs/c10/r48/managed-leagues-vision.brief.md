# research/managed-leagues-vision.md
## What it is (1-2 sentences)
Vision/product doc for "Managed Leagues & the Glass-Box GM Autopilot": integrating real fantasy leagues with a five-level delegation dial (Manual -> Advisor -> Co-pilot -> Autopilot -> Full remote GM), differentiated by explained-before-acting, tamper-evident GM Ledger, reversibility, and teaching (GM IQ).
## Key metrics/methods (formulas where given, else "not specified")
not specified — product spec, no formulas. Delegation levels: L0 Manual; L1 Advisor (per-action advisory approval); L2 Co-pilot (one-tap per-action approve); L3 Autopilot (veto window); L4 Full remote GM (report-only). Built: `lib/fantasy/autonomy.ts` (levels, `proposeActions`, `executionNotice`) + 6 tests; `components/fantasy/gm-autopilot.tsx`; route `/fantasy/autopilot`. Binding doctrine gates: real-league execution is founder/consent-gated (OAuth + compliance, never autonomous); levels 2–4 flagged `founderGated` in code; league sync starts read-only; real-money leagues get an extra gate.
## Data sources named
Fantasy league platforms: Sleeper (public read API), Yahoo (OAuth), ESPN (unofficial). Internal consumers: League Twin, GM Ledger, GM Academy, The Beat, the prediction engine.
## Findings (numbers and facts, not vibes)
- Competitor teardown table: LeagueSync (aggregates ESPN/Yahoo/Sleeper; one-shot advisor, no record/teaching/accountability); Draft/Draft Hero (90-min draft tool, silent 25 weeks); propsfinder.app (props edge finder, hides reasoning); LineStar DFS (black-box optimizer, right math no why). Pattern: all are one-shot advisors; none act, explain before acting, keep a provable record, or teach.
- Claim: LineStar DFS "already surpassed by the DFS Optimizer: right objective per contest, leverage, full glass-box reasoning + DK-CSV import."
- The four defensibility guarantees no competitor offers together: (1) explained before acting, (2) provable tamper-evident record (AI can't cherry-pick its record any more than you can), (3) reversible/clearly flagged consequences, (4) teaches the user (GM IQ climbs even when AI drives).
- Next (founder-gated): real OAuth connectors in order Sleeper -> ESPN -> Yahoo; read-only roster import drives the Autopilot off a real roster; then human-approved write-back with the GM Ledger as audit log.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- GM Ledger: tamper-evident, provable record of every action — TRUST-SIGNAL (accountability mechanism; mirrors proof-hash/Merkle audit sealing in the capability matrix)
- Explain-before-acting + reversibility tagging (reversible lineup vs committing FAAB) — TRUST-SIGNAL
- Read-only-first sync doctrine, founder-gated write-back — TRUST-SIGNAL (outward-action safety posture)
- GM Academy / teaching layer tied to moves — COACHING
## Engine-actionable? (yes/no + one-line what)
Yes — but only as product strategy, not modeling: Sleeper->ESPN->Yahoo read-only roster sync is the designated first integration order, so any fantasy-roster ingestion work should follow that sequence.
