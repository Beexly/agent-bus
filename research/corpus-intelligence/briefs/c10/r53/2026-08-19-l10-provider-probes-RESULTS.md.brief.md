# docs/ops/calibration/2026-08-19-l10-provider-probes/RESULTS.md
## What it is (1-2 sentences)
Results of a 2026-08-19 L-10 probe run testing 7 candidate data providers (max 2 live calls each, no signups/scraping) against the source-rights registry, recording latency, HTTP status, payload size, and clearance status.
## Key metrics/methods (formulas where given, else "not specified")
- Probe constraint: ≤2 live calls per candidate; measured per-call latency, HTTP code, byte size, JSON shape.
- Latencies recorded: nflverse 261.2/298.8ms; Open-Meteo 558.5/540.2ms; TheSportsDB 167.3/191.5ms; MLB Stats API 234.9/155.7ms; Sleeper 27.9/26.1ms; ESPN 81.9/41.4ms; FFC-ADP 10.4ms (DNS fail).
## Data sources named
nflverse (schedules/games.csv ~2.1MB, timestamp.json), ESPN unofficial NFL scoreboard/teams API, Open-Meteo forecast + archive, TheSportsDB, MLB Stats API, Sleeper API (players/nfl/0, trending adds), Fantasy Football Calculator ADP REST API, The Odds API (cleared paid source).
## Findings (numbers and facts, not vibes)
- Cleared for immediate no-spend use: nflverse, ESPN, Open-Meteo, Sleeper (INFERENCE: the classification section claims ESPN probes returned 200 with JSON, but the detailed probe section records both ESPN calls as HTTP 403 via Akamai — an internal contradiction in the file; actual observed results were 403 FAILs).
- The Odds API: cleared paid source, already licensed and in production.
- GATED (need registry promotion + terms clearance before automation): TheSportsDB (team search OK 200; season events 404 on wrong season id=4387), MLB Stats API (schedule 200 18,950 bytes; teams 200 547,620 bytes).
- FFC-ADP probe FAILED: DNS resolution error `getaddrinfo failed` for api.fantasyfootballcalculator.com — needs retry from a different network (INFERENCE: possibly transient DNS or domain change).
- nflverse: no rate-limit headers, no key required, CC-BY-4.0 attribution; timestamp.json exposes `last_updated` for freshness checks. Open-Meteo: no key, ~560ms latencies, CC-BY-4.0. Sleeper trending: returns 50-element array of {count, player_id}, attribution required.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: Source-rights registry gating (`approved_open_license` / `approved_public_logged_off` / `vendor_candidate`) as the standing mechanism for legal data sourcing — ingest-only from cleared sources, commercial use restricted.
- OTHER: Open-Meteo archive API provides historical temperature/wind/precipitation hourly — usable as a weather signal input for outdoor games.
- OTHER: Sleeper trending adds endpoint = direct market-popularity signal (add counts) for DFS/fantasy ownership relevance.
- OTHER: nflverse GitHub-release CSV pattern (games.csv 2.1MB, timestamp.json freshness check) is the established free historical schedule source.
## Engine-actionable? (yes/no + one-line what)
Yes — source inventory: nflverse (schedules/history), Open-Meteo archive (historical weather), Sleeper trending (market popularity), ESPN 403-blocked (treat as unusable per observed results); FFC-ADP ADP data still unprobed and owed.
