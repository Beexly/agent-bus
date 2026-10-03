# docs/arxiv-program/research/2026-09-21/arxiv-deep/0122-rethinking-http-api-rate-limiting-a.md
## What it is (1-2 sentences)
Deep read of Farkiani, Liu & Crowley (2025), *Rethinking HTTP API Rate Limiting: A Client-Side Approach* (arXiv:2510.04516v3). Verdict in file: ADOPT — the Adaptive Token Bucket (ATB) algorithm as the client-side retry/backoff policy for GSE's data-fetch harness against rate-limited APIs (Odds API, FreePublicAPIs, TheSportsDB).
## Key metrics/methods (formulas where given, else "not specified")
Oracle: MILP minimizing total request completion delay subject to token-bucket capacity + FIFO ordering (upper bound, small instances). ATB: per-client local token bucket; on 429, local rate r ← r × (1 − β) (β = backoff factor); slow recovery r ← r + α per success; exact α, β not numerically stated in paper — must be read from the code. AATB: ATB + aggregate UDP telemetry (coarse rate/limit state, not per-request data). Token-bucket constraint (verbal): tokens consumed up to time t ≤ capacity + rate × t. Assumptions: independent clients sharing one quota; server returns HTTP 429 on overload; exactly 1 token per request (variable token costs excluded). Metrics: HTTP 429 count per 1,000 requests; total pull completion time.
## Data sources named
Real: search API log — avg 131K requests/day, 27K unique IPs; test scales 400/500/600/700/800 requests with 18/22/23/25/27 users. Synthetic: Poisson traffic via wrk2, 5-client and 100-client scenarios, 400–800 requests per 5-minute window. Envoy token bucket: capacity 100, rate 80/min (≈500 accepted per 5 min). Results averaged over ≥30 runs. Code: https://github.com/Bfarkiani/ratelimiter (raw search log proprietary, not released).
## Findings (numbers and facts, not vibes)
- Real 800-request scenario vs WB (wait-backoff) baseline: WB = 62.70% fewer errors, 25.45% longer duration; ATB = 70.13% fewer errors, 21.26% longer duration; AATB = 93.23% fewer errors, 27.62% longer duration, 276.25 telemetry messages.
- Synthetic 5-client at 500/800: AATB errors −96.9%/−97.3%, duration +13.3%/+19.8%. 100-client: ATB errors −91.5%/−90.5%, duration +24.3%/+23.1%; AATB errors −77.8%/−91.7%, duration +26.4%/+11.7%.
- Overall conclusion (Section VI): ATB/AATB reduce errors 70.13%–97.3% at cost of 11.7%–27.62% longer completion time vs WB.
- Uniform 1-token-per-request assumption — variable token costs (OpenAI-style) break the fairness math; no adversarial-client analysis; compared only against own WB baseline, not standard backoff-with-jitter or Netflix concurrency-limits.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- ATB adaptive token bucket: 70.13% fewer 429s on a real trace, fully decentralized, no server cooperation — directly slots into GSE's rate-limited fetch harness (Odds API 20K credits/mo). Tag: OTHER (data-fetch infra)
- Client-side coordination from 429 feedback alone (no server changes) — decentralized convergence to fair quota share. Tag: OTHER
- Duration trade-off: error reduction costs 11.7–27.6% longer completion — time-sensitive Sunday line pulls must budget this. Tag: OTHER
- AATB's UDP telemetry unnecessary on a single VM (ATB alone gives most of the gain) — simplification insight from the file's own limitations section. Tag: OTHER
- Quota-aware improvement idea in file: feed published quotas (e.g., Odds API 20K/mo) as priors to eliminate cold-start convergence. Tag: OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — replace naive fixed-sleep retries in GSE fetch scripts with ATB (α/β from the GitHub code), keyed per endpoint; AATB telemetry skipped on single VM.
