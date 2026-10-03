# research/SUNDAY_FRONTIER_R_AND_D_MAP_2026-07-05.md
## What it is (1-2 sentences)
A 2026-07-05 R&D roadmap for Galaxy Sports Edge identifying aggressive-but-lawful research lanes (open data, open methods, shadow architecture, commercial guardrails) with explicit legal boundaries on what is allowed, forbidden, or requires owner/counsel approval.
## Key metrics/methods (formulas where given, else "not specified")
Methods named as high-value to explore (no formulas given): proper scoring rules (Brier, log loss, calibration error, sharpness), conformal prediction for uncertainty intervals, Elo/Glicko/TrueSkill, Bradley-Terry/Plackett-Luce, hierarchical/empirical Bayes shrinkage, Kalman filters and state-space models, hidden Markov models for usage regimes, splines/GAMs, hurdle and Tweedie models for zero-inflated fantasy/yardage outcomes, model parliament with vetoes, drift detection (PSI, KL divergence, chi-square, ECE drift, segment parity).
## Data sources named
nflverse and other open football data; public schedules, rosters, depth charts, injuries, snap counts, play-by-play where licenses permit; synthetic fixtures; terms-approved odds inputs; funding candidates listed unverified (AWS Activate, Google Cloud for Startups, Microsoft for Startups, NVIDIA Inception, DigitalOcean Hatch, Neon startup, Databricks startup, Vercel startup) — not live-refreshed.
## Findings (numbers and facts, not vibes)
- Decision doctrine: "Confidence is not win probability. GSE Signal Score is decision quality, not win probability. No bet is a decision. High EV cannot override missing data, stale inputs, unclear rights, drift, or calibration debt."
- Every method must become a deterministic, tested, documented shadow primitive before influencing public claims.
- Source-rights architecture required: source-rights envelope per input, payload-rights classification per API response, metric birth certificate per proprietary metric, metric/model/validation/drift cards before promotion, public/private exposure level per metric; restricted/unclear/stale/raw inputs fail closed.
- Market lanes: stale-line risk scoring, book dispersion scoring, playable-window scoring, market-mirage detection; hard bans on claiming market-beating/CLV performance without settled evidence and on exposing raw paid odds payloads against terms.
- 10 next experiments listed, including: no-bet governor tests proving stale inputs/drift/calibration debt veto high EV; Receiver Difficulty and Expected YAC with birth certificates; API auth pure seam with hashed key comparison; model/drift card generator.
- Success metric stated as "every public claim can point to code, docs, tests, or settled evidence."
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: program-level R&D doctrine — calibration hierarchy, rights-fenced ingestion, no-bet discipline, and the metric birth-certificate regime that all downstream QB/coaching/scheme intelligence must pass through before publication.
## Engine-actionable? (yes/no + one-line what)
Yes — the zero-inflated hurdle/Tweedie recommendation for fantasy/yardage outcomes is a direct modeling-lane directive, and the no-bet governor + metric birth-certificate requirements are standing gate patterns for any calibration work.
