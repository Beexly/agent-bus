# gse/TOXIPROXY_FAILURE_INJECTION_MAX.md
## What it is (1-2 sentences)
A staging/local-only chaos-engineering plan using a mock odds API plus Toxiproxy to prove the odds client fails closed: no invented quotes, no LIVE_BOARD, no widening on upstream failure.
## Key metrics/methods (formulas where given, else "not specified")
not specified (fault types listed, no thresholds): toxics = latency/jitter, timeout ms, bandwidth rate KB/s, slicer (average_size, delay), limit_data bytes, slow_close delay, reset_peer timeout, toxicity 0.3 intermittent; mock modes = HTTP 402/401/429/500/empty/timeout. Combined matrix: 402+none, ok+latency, empty+latency, 500+reset.
## Data sources named
mock-odds-api (HTTP 402/401/429/500/empty/timeout), Toxiproxy proxy :22220 → mock; commands: `docker compose -f docker/chaos/docker-compose.chaos.yml up -d`, `bootstrap-toxiproxy.sh`, `ODDS_API_BASE_URL=http://127.0.0.1:22220/v4`, `smoke-402.sh`.
## Findings (numbers and facts, not vibes)
- Five fail-closed assertions: no fabricated prices on upstream fail; `fetchedAt` does not advance on hard fail; circuit opens on repeated 402; stats plane bulkheaded if designed; LIVE_BOARD stays off.
- 402 mode requires the mock (not the proxy alone); 402 needs the mock.
- Follow-ons: scheduled CI chaos job, property test fail⇒no invent, formal-regression suite — never production Toxiproxy.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
OTHER: odds-feed resilience testing doctrine; relevant to data-freshness guarantees for the engine's odds ingestion.
## Engine-actionable? (yes/no + one-line what)
Yes (marginal) — codifies the fail-closed invariant (no invented quotes, fetchedAt frozen on hard fail, circuit on repeated 402) that any odds-ingestion pipeline for the engine must honor.
