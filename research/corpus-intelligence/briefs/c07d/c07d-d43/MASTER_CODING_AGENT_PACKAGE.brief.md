# gse/MASTER_CODING_AGENT_PACKAGE.md

## What it is (1-2 sentences)
The single entrypoint "binding law" for the coding agent on the GSE repo (Beexly/Sports), declaring the Phase C baseline, merge order, disposition classes (production-wired vs research-only vs founder-only), staleness gates, and circuit/chaos rules.

## Key metrics/methods (formulas where given, else "not specified")
- Phase C baseline string: `888|359|283|0 eval|(5b)=0|floor MLB|SPREAD|v5.1.0@180` (baseline before remeasure).
- Odds staleness: age > 6h or missing fetchedAt → `STALE_ODDS`; fetchedAt monitor tiers: max(fetchedAt) warn 2h / stale 4h / gate_breach 6h.
- MAX_CANDIDATE_ODDS_AGE_MS: hard cap 6h, must NOT be widened.
- Cron cadence: `*/30` (every 30 minutes) on main, PR #215.
- merge order (CI green): #220 DecisionCertificate → #218 402 circuit breaker → #219 Toxiproxy chaos → #221 fetchedAt monitor + cron wire → #222 Neon pool monitor → #223 these docs.
- Circuit: Odds breaker trips on HTTP 402; separate stats plane; fail-closed offline; no synthetic prices written.
- Kelly: "kelly INTERNAL" is production-adjacent but full Kelly public UX is RESEARCH-ONLY (do not production-wire).

## Data sources named
- The Odds API (paid; "unpaid odds" is the remaining blocker for Phase C remeasure).
- Neon Postgres (pool monitor); #216 offline odds adapter; #217 StatsProvider.
- `docs/gse/CI_MERGE_CHECKLIST.md` (referenced merge checklist).
- Modules named: selective-gate (authority), pav.ts / ivap.ts (do not rewrite without proven bug + tests), DecisionCertificate, bridge, stratum-coverage, selective-abstention helpers, proper-scoring, fetchedAt classifier/monitor, neon-pool-monitor, healthcheck-ping, refresh-sla, Kafka/CDC (research-only).

## Findings (numbers and facts, not vibes)
- Repo state at tip `~35afb788` ("pull first"); main already carries #215 (cron */30), #216 (offline odds adapter), #217 (StatsProvider).
- Binding prohibitions: do NOT enable/commit `LIVE_BOARD_GATE_SLATE=1`; do NOT widen the 6h candidate-odds age gate; do NOT rewrite pav.ts/ivap.ts without a proven bug plus tests; "No invented ROI, quotes, or win rates."
- Disposition classes: PRODUCTION-WIRED = selective-gate, pav/ivap (consume), 6h gate, cron */30, offline odds adapter, StatsProvider, healthcheck-ping, refresh-sla. PURE-MODULE+TESTS (merge #220–222) = DecisionCertificate, bridge, stratum-coverage, selective-abstention helpers, proper-scoring, kelly INTERNAL, fetchedAt classifier/monitor, neon-pool-monitor, 402 circuit, chaos staging. RESEARCH-ONLY (do not production-wire) = Adaptive CP, CVAP, Venn multicalibration depth, Chow/NP formal, prospect theory models, mental accounting optimizers, Plackett-Luce for binary FIRE, full Kelly public UX, BLIS/CUTLASS/Rabin/matrix-mult session science, Kafka/CDC. FOUNDER-ONLY = Stripe, DNS, prices, claim policy, PUBLISH_LEDGER, LIVE_BOARD after (5b)≥1, Odds API payment, password rotation.
- FetchedAt write rule: "real fetch time only; never on 402/empty" (prevents poisoning staleness metadata with synthetic times).
- Post-merge steps: optional HC_REFRESH_PING_URL / HC_ODDS_FETCHEDAT_PING_URL; SQL MAX(fetchedAt) age check; `npm run gate:phase-c` when quotes live; wire certificates only after the gate passes.
- Completion report template: `MAIN sha:`, `FLAG LIVE_BOARD: off`, `PHASE C old→new: 888|359|283|0|(5b)=0 → ?`, `SHIPPED:`, `BLOCKERS:`, `NEXT ONE ACTION:`.
- Done criteria: PRs merged or CI-fixed; LIVE_BOARD off; 6h intact; Phase C remeasured OR blocker = unpaid odds.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: This file is the honesty-control plane. "Sell honesty, not pick volume. Refusal-Native Forecasting" plus the ban on invented ROI/quotes/win rates is the trust-signal intake contract: published numbers only from measured baselines (the 888|359|283|0 baseline string), and selective-gate "remains authority" — the gate that decides whether a pick is fit to publish is the serving constraint for the trust lane.
- OTHER: The fetchedAt staleness layers (warn 2h / stale 4h / gate_breach 6h; real fetch time only, never on 402/empty) are the calibration/sizing program's data-quality layer — stale quotes must degrade the published pick to STALE_ODDS rather than silently sizing off dead numbers.
- OTHER: Kelly sizing is INTERNAL-only; public Kelly UX is research-only. Any future bankroll/sizing lane must respect this boundary.
- OTHER: The `(5b)≥1` gating on LIVE_BOARD means the board goes live only after a measured count threshold is met — a calibration gate, not a calendar date.

## Engine-actionable? (yes/no + one-line what)
Yes — the disposition inventory (what's production-wired vs research-only) is the canonical list of which methods may be wired vs only read; any wiring pass must honor the selective-gate/6h/fetchedAt constraints verbatim.
