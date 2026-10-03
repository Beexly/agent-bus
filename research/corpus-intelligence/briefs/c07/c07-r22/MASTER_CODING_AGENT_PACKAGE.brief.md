# gse/MASTER_CODING_AGENT_PACKAGE.md
## What it is (1-2 sentences)
Single entrypoint / standing orders for the coding agent: binding-law rules, repo state, merge order for PRs #218–223, and a disposition taxonomy (production-wired vs pure-module vs research-only vs founder-only) for all in-flight engine work.
## Key metrics/methods (formulas where given, else "not specified")
Phase C baseline: `888|359|283|0 eval|(5b)=0|floor MLB|SPREAD|v5.1.0@180` (not specified what the fields mean). Cron `*/30` on main (#215). Odds gate: `MAX_CANDIDATE_ODDS_AGE_MS` = 6h; fetchedAt monitor thresholds warn 2h / stale 4h / gate-breach 6h. FetchedAt layers: market-correct batch selection; gate on age>6h or missing → STALE_ODDS; write real fetch time only, never on 402/empty. Otherwise not specified.
## Data sources named
Odds API (paid, required for cron #215 refresh + remeasure); StatsProvider (#217); Neon pool monitor (#222); offline odds adapter (#216); Toxiproxy chaos staging; Healthchecks ping URLs.
## Findings (numbers and facts, not vibes)
- Merge order (CI green): #220 DecisionCertificate stack, #218 402 circuit breaker, #219 Toxiproxy docker/chaos, #221 fetchedAt monitor + cron wire, #222 Neon pool monitor, #223 these docs.
- LIVE_BOARD_GATE_SLATE must stay off; LIVE_BOARD only goes live after (5b)≥1.
- Kelly is INTERNAL-only; full Kelly public UX is research-only; public win-rate claims prohibited (binding law #7: no invented ROI, quotes, win rates).
- pav.ts/ivap.ts may not be rewritten without proven bug + tests; selective-gate remains authority.
- Production-wired: selective-gate, pav/ivap (consume), 6h gate, cron */30, offline odds adapter, StatsProvider, healthcheck-ping, refresh-sla.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Binding-law no-claim rules (no invented ROI/quotes/win rates) operationalize refusal-native forecasting as repo law.
- [OTHER] Phase C eval baseline string is the current production benchmark identifier.
## Engine-actionable? (yes/no + one-line what)
No — standing orders/safeguards, no new engine mechanics; confirms what is already production-wired.
