# strategy/vision-tracker.md
## What it is (1-2 sentences)
The single commitment ledger for everything the owner directed in the 2026-06-12 session dumps (analyst standard, NFL House, data doctrine, Jarvis core, polish backlog), with per-item DONE/QUEUED/OWNER/STAGED/PARKED states plus a 2026-06-12/13 reconciliation sweep and consolidation onto the `claude/eloquent-goldberg-der80z` launch line.
## Key metrics/methods (formulas where given, else "not specified")
Formulas named for shipped metrics: No-vig implied probability engine (`market-read.ts`: Shin, consensus, disagreement, gravity); Market Gravity Index = conviction x book agreement x coverage/liquidity (measures market CONVICTION, never correctness); Line Death Clock = fair-price drift capture-window + pp/hr decay rate; Protection Stress index (0-100, pressure+sacks); Parlay MRI Dependency Coefficient = bound-leg share (labeled structural-not-statistical); Fragility Check premortem with formal 0-100 score and published weights.
## Data sources named
nflverse ecosystem (live); guard:nflverse-currency check (`scripts/check-nflverse-currency.ts`); candidate CFBD, nba_api, pybaseball, StatsBomb, MoneyPuck (OWNER+legal gated, NFL-first says not now); DraftKings Network + ESPN + Pick6 + Predictions context; Jeff Mans weekly-show feed rights entry (`jeff-mans-one-mans-opinion` vendor_candidate, `jeff-mans-weekly-show` manual_research_only).
## Findings (numbers and facts, not vibes)
- Verification state (baseline): 4,349 web tests + 392 engine tests (4,898 total), tsc clean, lint clean, `next build` exit 0 (130 pages pre-StatKing); two adversarial code-review passes fixed all 3+1 CRITICAL + MAJOR findings.
- Analyst law: calibration over accuracy; probabilities calibrated before EV; timestamps + freshness on outputs; five analyst questions test-pinned (`lib/voice/analyst-standard.ts`); five stat questions publish gate; stat commandment (source/timestamp/definition/n/weakness/decision-use) contract live via MetricTerm.
- Jarvis Memory Protocol Stage 1: jarvis_memory_events + jarvis_decisions schema, 8-state machine + transition law, 45 tests; prod migration OWNER-gated.
- Jarvis Agent Council: 23 seats with charters (6 draft-only / 3 manual / 14 not-wired), 13 routing rules, 10 guardrails.
- Newly tracked QUEUED queue cleared 2026-06-13 (ML estimator scaffold, `/proof` proof-of-record, `/accountability` loss autopsies, Sentry/OTel, memory review-queue UI, council ledgers — all DONE).
- PARKED: Script Elasticity / False Favorite / Narrative Risk / Public Comfort until defensible math exists; QB pressure-sensitivity (needs clean-vs-pressured splits); Kelly/stake from public surfaces.
- 10 product modules shipped (Signal Card, Market Disagreement, Driver Stack, Fragility Check, Parlay MRI, Simulation Cloud, Calibration Panel + Honest Band, CLV Tracker, Human Explainer, No-Bet Gate).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: OL — Protection Stress index (0-100 pressure+sacks) is a live metric; QB pressure-sensitivity PARKED awaiting clean-vs-pressured efficiency splits — an explicit engine data gap.
- OTHER: QB-BEHAVIOR — the clean-vs-pressured splits gap directly blocks QB-under-pressure modeling.
- OTHER: TRUST-SIGNAL — Human Explainer in 3 registers, desk-voice law, "when NOT to trust us" uncertainty bands: the calibration-over-accuracy doctrine engine outputs must obey.
- OTHER: engineering process — adversarial review gates, commitment ledger with artifact verification ("zero DONE-claims failed artifact verification").
## Engine-actionable? (yes/no + one-line what)
Yes — enumerates shipped-but-partially-gated engine math (gravity index, Line Death Clock, fragility 0-100) and names the concrete blocking input for QB pressure modeling: clean-vs-pressured efficiency splits.
