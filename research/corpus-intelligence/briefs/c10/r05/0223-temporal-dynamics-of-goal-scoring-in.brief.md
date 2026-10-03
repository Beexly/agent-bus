# arxiv-program/research/2026-09-21/arxiv-deep/0223-temporal-dynamics-of-goal-scoring-in.md
## What it is (1-2 sentences)
A descriptive null-model study (Ayana et al., 2025; full-text read) testing whether soccer goal timing deviates from a uniform-rate process, using 3,433 matches of StatsBomb event data and a 6,000,000-game simulated null. The ledger's verdict is ADAPT — the uniform-rate null-model methodology (same-team vs opposing-team next-goal split) ports to NFL scoring events for testing within-game burstiness; the soccer timing findings themselves do not transfer.
## Key metrics/methods (formulas where given, else "not specified")
- Average goals-per-minute rate: Ḡ = (1/N) Σ_{i=1}^N (G_i / T_i), where G_i, T_i, N are goals, duration in minutes of match i, and number of matches (Eq. 1 — the paper's only equation).
- Null construction: simulate 6,000,000 games with goals scored at rate Ḡ, game lengths set to the average game length T̄; each simulated goal randomly assigned 50/50 to the two teams.
- Comparisons vs null: goal-timing histogram (χ²); inter-goal time distribution (games with ≥2 goals) via exponential-decay fit and χ²; inter-goal times split by same-team vs opposing-team scorer; time remaining when the last goal is scored vs null.
## Data sources named
StatsBomb open event data (https://github.com/statsbomb/open-data): 3,433 matches across 21 leagues/competitions (FIFA World Cup, AFCON, Premier League, Bundesliga, La Liga, Serie A, Champions League, MLS, NWSL, others), various seasons; 20 attributes per event, 34 event types. Code: "Code to reproduce the analyses in this work will be available upon publication" — no link stated.
## Findings (numbers and facts, not vibes)
- Goal timing: frequency increases as the match progresses, r ≈ 0.438, p ≈ 7.13×10⁻⁶; χ² ≈ 288.62, p = 3.72×10⁻²¹ (significant deviation from uniform). Fewer-than-expected goals in early minutes of each half; a dip between minutes 45 and 50 (halftime restart); frequency drops sharply after the average match length.
- Inter-goal times: exponential decay in both observed and null; χ² ≈ 0.044, p = 1 — the observed distribution is fully explained by the null; clustering of goals shortly after a previous goal is due to time-dependent rate structure, not mentality/cadence shifts.
- Same-team vs opposing-team: same team scores the next goal more often than the opposing team across all intervals (bursty behavior); at short intervals (0 to ~30 minutes) a large gap between observed and null for same-team scoring — same team more likely than expected immediately after scoring, opposing team less likely than expected.
- Last goal of match: observed time remaining closely follows the null except at the shortest intervals — teams more likely than expected to score the last goal closer to the end of the match.
- In-file caveat: burstiness partially confounded by team-strength heterogeneity (null assigns goals 50/50, ignoring skill); authors acknowledge better teams scoring more in general partly explains it.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Same-team burstiness test (0–30 min gap vs null) ported to NFL scoring events as a live total/spread model input — OTHER (in-game modeling)
- Score-differential × clock interaction for burstiness (trailing-team motivational surge, citing the "Can Losing Lead to Winning?" hypothesis) — COACHING (game-state-driven situational urgency)
- Time-varying scoring-intensity curve as a live-modeling input — OTHER (in-game modeling infrastructure)
- Conditioning the null on team strength to address the paper's acknowledged skill confound — TRUST-SIGNAL (avoid false momentum conclusions)
## Engine-actionable? (yes/no + one-line what)
Yes — replicate the null-model methodology on NFL scoring events (nflverse play-by-play 2020–2025; pooled scoring rate per game-minute; ~1M simulated null games; same-team vs opponent next-score interval test), condition the null on pregame spread-implied team strength, and adopt as a live total-model input only if same-team burstiness survives conditioning (≥15% relative excess in the first 5 minutes post-score, χ² p < 0.01) AND improves 2025 second-half total log-loss by ≥0.01 nats over the base Poisson model.
