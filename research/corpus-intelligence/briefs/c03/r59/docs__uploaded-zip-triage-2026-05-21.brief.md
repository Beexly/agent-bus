# docs/uploaded-zip-triage-2026-05-21.md
## What it is (1-2 sentences)
A 2026-05-21 triage of 29 uploaded zips against the project's integrity rules (no fake data, no fabricated stats, tests required), flagging one suspected-malware repo and two piracy/TOS-violation risks while queuing useful items like the Neon serverless driver and the unravelsports tracking-analytics code.
## Key metrics/methods (formulas where given, else "not specified")
not specified
## Data sources named
None (code/tooling zips, not data sources).
## Findings (numbers and facts, not vibes)
- 29 zips reviewed; integrity bar: does this improve the launch without compromising "no fake data, no fabricated stats, no frontend-only paywalls, tests required, types required."
- Directly useful: `serverless-main.zip` (@neondatabase/serverless, MIT) — post-launch swap planned (docs plan written at `docs/launch-prep/post-launch-neon-serverless-swap.md`); Front-End-Checklist (CC0) items appended to launch QA; claude-seo (MIT, 25 sub-skills + 18 sub-agents) queued as post-launch plugin.
- Long-horizon sports references shelved: unravelsports (MPL 2.0) — Polars + GNNs for soccer (Kloppy-compatible) and American football (BigDataBowl), pressing-intensity model, formation/position identification; Metrica Sports sample data (2–3 anonymized soccer matches, 25fps tracking + events); DataScienceProjects (Poisson football match-prediction model, empirical-Bayes penalty taker analysis).
- Integrity-risk flags: `Stake-All-Games-Predictor-Latest-main.zip` — suspected malware/typosquat (randomized filenames, obscured workflow), do not extract/execute/commit; `Public-FotMob-API.zip` — unauthorized scraper of commercial FotMob data, do not use; `Upcoming-and-Live-Sports-Data` — IPTV video-piracy infrastructure, do not use.
- Naming collision noted: four "neon" zips are Intel Nervana DL framework, Neon JS native add-ons, Neon Postgres internals, and an iOS auto-layout lib — none are the Neon Postgres credential; real path is signup at console.neon.tech.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- unravelsports pressing-intensity model, formation/position identification (BigDataBowl): SCHEME
- Metrica Sports 25fps tracking + events sandbox: OTHER
- Poisson football match-prediction model, empirical-Bayes penalty taker analysis: OTHER
- Suspected-malware and TOS-violating scraper flags: TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
yes — unravelsports (pressing intensity, formation/position ID via GNNs on BigDataBowl data) and the Poisson match-prediction + empirical-Bayes notebooks are license-clean modeling references to queue for the deep-analytics lane.
