# ops/REALTIME_HYDRATION.md
## What it is (1-2 sentences)
Architecture spec for GSE's real-time data hydration: honest edge computation requires three clocks (`featureAsOf`, `quoteAsOf`, `decisionAsOf`) instead of one, with plane-specific freshness strategies (SoR vs projection) and a refuse-default edge gate so no fake edge can be computed from stale or inconsistent inputs.

## Key metrics/methods (formulas where given, else "not specified")
Honest edge:
e = p(featureAsOf) − q(quoteAsOf)
with constraints:
1. both asOf ≤ decisionAsOf
2. |quoteAsOf − featureAsOf| ≤ consistencyBudget (default 15m)
3. quote within dynamic market freshness (tighter near kickoff)
4. feature within cold-plane budget
5. p,q ∈ [0,1] finite
6. refuse-default on any fail — no fake edge.
Topology health: `scoreTopologyHealth` → 0–100 + `readyForEdgeFire` + blockers.

## Data sources named
Planes by freshness: Markets (minutes, tighter near KO; strategy cron_delta + hybrid), Weather (15–30m; TTL/read_repair), Box/advanced (post-slate/weekly; batch → write_through), Edge/gate (on settle/gate event; write_through), Optical (eval only, DARK, on_demand), Cockpit UI (SoR delta stream, SSE iff LIVE_BOARD). Truth API: `GET /api/gse/v1/truth`, `POST /api/gse/v1/truth/edge`, `POST /api/gse/v1/truth/health`. PIT validation: `packages/stats-api/src/pit-validate.ts`, `packages/feature-store/src/pit-validate.ts`. Next hydrate force: Prisma PlayerGameStat → NflverseMemoryStore.put; refresh-odds → cron_delta runner; Session tier (Stripe) on value reads; Redis when multi-instance.

## Findings (numbers and facts, not vibes)
- The core architectural rule: an edge is only computed when feature and quote timestamps are mutually consistent within 15 minutes and both precede the decision timestamp; any failure returns refuse-default, never a fake edge
- Optical plane stays DARK unless pretending public — "score 100 when not pretending public" (aligns with NGS internal-only doctrine: eval data can be fully ingested while never published)
- Cockpit UI is offline when LIVE_BOARD is off — correct, not a failure

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: hydration architecture; no football content.
- OL (INFERENCE): the NflverseMemoryStore + cold-plane strategy is where box/advanced stats (including NGS pressure/time-to-throw once populated) land before they reach feature computation — the plumbing the OL pressure analysis would read from.

## Engine-actionable? (yes/no + one-line what)
No — already-owned hydration architecture; the 15-minute consistency budget and refuse-default edge gate are doctrine worth citing for any new edge-computation wiring but not new signal.
