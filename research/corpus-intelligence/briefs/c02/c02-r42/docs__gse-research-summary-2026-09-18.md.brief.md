# docs/gse-research-summary-2026-09-18.md

## What it is (1-2 sentences)
Autonomous GSE research summary auto-compiled 2026-09-18, the canonical index of the GSE discovery program: a StatRankings.com full site map (31,428 URLs), a GSE overnight deep report testing 13 signal compounds on 2,895 NFL games (2015–2025), a Minis props lab (weather×pass-exposure, pooled hierarchical, revenge-within-player tests), a 9-item self-audit of methodological corrections, a local data inventory, and a prioritized next-steps list.

## Key metrics/methods (formulas where given, else "not specified")
- Frame: 2,895 REG games (2015–2025) → 5,790 team-game rows. Baseline = devigged closing moneyline. Metric = out-of-sample Δlog-loss (expanding-window CV) + flagged-subset residual + permutation null. Kill rule: pre-registered gate (sample-size floor n≥150; ΔLL threshold 0.002 nats).
- L1 weather×passing exposure: interaction coefficient c = +0.082131; cluster-robust 90% CI [−0.012, +0.177] contains 0. Out-of-sample ΔLL: +0.000145 / −0.000372 / +0.000139 nats/attempt (2023/2024/2025); mean = −0.00003 vs threshold 0.002.
- L5 pooled hierarchical: pooled c₃ = +0.0463, 90% CI [−0.197, +0.290] covers 0; τ² = 0; Q = 2.787 across four mechanism families — uniform zero effect, no detectable heterogeneity.
- L2 revenge within-player: −0.366 targets/game, opposite hypothesis; median ratio 0.7736 [0.711, 0.822] (confounded with post-transfer role decline).
- BLAS threading correction: exporting OMP_NUM_THREADS=1 OPENBLAS_NUM_THREADS=1 MKL_NUM_THREADS=1 VECLIB_MAXIMUM_THREADS=1 NUMEXPR_NUM_THREADS=1 before interpreter start takes one logistic fit from 2.32s → 0.35s, reproducibly (mechanism claim withdrawn; effect only).
- L1 join method: FTN 2022–2025 → nflverse pbp on `game_id` + `play_id` (pbp has no `nflverse_play_id` column); join rate 99.6–100% → 77,239 joined REG pass attempts; after weather filter 41,568 rows; analysis set n=39,986.

## Data sources named
- nflverse releases: schedules/games.csv (7,548 games), rosters 2015–2025, injuries 2015–2025 (incl. `practice_status` column), contracts (historical), ftn_charting 2022–2025, snap_counts_2015..2024.csv (25,000 rows/season), pbp (372 columns).
- FTN charting data (2022–2025; columns `n_defense_box`, `n_blitzers`, `is_motion` ~100% populated).
- StatRankings.com: 31,428 public URLs mapped across 3 sitemaps (9 pages, 30,882 players, 1,429 general); 193 stat definitions extracted from methodology page; statsuite+, statbuilder+, coverageIQ+ (premium, paywalled at $139.99/yr or $34.99/mo).
- Local paths: /var/minis/shared/gse-discovery/, /var/minis/workspace/sr-scrape/, /tmp/nfl/, /root/beexly-sports/.

## Findings (numbers and facts, not vibes)
- Result headline: 0 of 13 executed compounds passed the pre-registered gate.
- Kills: A1 revenge-QB × short week (n=18, ΔLL=−0.00253); A2 contracts (SPEC-ONLY); B1 rookie-QB × rest deficit (n=71, power-dead); B2 backup-QB × own short week (n=68, power-dead); C1 altitude × rest advantage (n=7); C2 road-streak × cold (n=10); D1 injury burden × short week (n=369, wrong sign c=+0.05 expected −); E1 new-HC × opp continuity (n=1,093, ΔLL=−0.00014); E2 play-action × low blitz (SPEC-ONLY); F2 rookie-QB × injury (n=235, power-dead); F3 rest advantage × new HC (n=140, power-dead); F1 subsumed; L1 and L5 killed (see metrics above).
- Conclusion stated in file: at game-market level, the closing line already absorbs every context compound in this list; the live props lane remains the valid frontier. (OTHER)
- Two frozen specs (E2, F4) were shelved as SPEC-ONLY because FTN had no per-play team column — the join was solved during L1 (`game_id` + `play_id`) and never revisited; `n_defense_box`, `n_blitzers`, `is_motion` are ~100% populated, unblocking them. (TRUST-SIGNAL)
- L1 kill may be a design artifact: estimand mis-specified — completion probability dominated by throw difficulty (`air_yards`, `pass_length`, field position), none in baseline; pbp has 372 columns, only 17 used; better estimand is completion over expected. (OTHER)
- L3 (redistribution half) shelved on a partial blocker: spec's kill-line redistribution clause needs no market data; `snap_counts_2015..2024.csv` (25,000 rows/season) and `practice_status = "Did Not Participate In Practice"` in injuries_*.csv are both on disk and unused. (OTHER)
- Self-audit correction 6: GSE public record pools v5.2.6/v5.2.7/v5.3.0/founder-v1 into one number; C-298 found sample contaminated by version mixing; HCI (honest calibration index) is normalisation for cross-generation comparability. (TRUST-SIGNAL)
- StatRankings methodology: 193 stat definitions extracted with formulas; sample Aaron Rodgers player page = 360KB HTML with JSON-LD (ProfilePage, Person schema), seasonal/career stats, game logs, projections. (OTHER)
- StatRankings quirk notes: browser automation required for JS-rendered tables; direct curl returns 406 on root (needs proper User-Agent); no robots.txt restrictions on stat pages (only /api/, /login, /settings, /forgot-password blocked); static assets content-hashed; daily sitemap updates, lastmod 2026-09-18. (OTHER)
- Environment quirks recorded for continued work: Python stdout to files/pipes often lost (rc=0, empty output) — write with flush=True + os.fsync to per-item JSON; long background python dies mid-run — use resumable per-compound scripts; ~180s process cap kills long children; nflverse schedules use `game_type` not `season_type`; `passing_yards` NaN on incompletions (16,063/39,986) — NaN ⟺ complete_pass==0, fill 0; tsc intermittently exits 0 with empty output when killed by ~180s cap; PIPESTATUS absent in busybox ash; pyarrow absent → CSV only; Chromium CLI dead here; ImageMagick SVG delegate fails until `apk add rsvg-convert`. (OTHER)
- Priority next steps listed (in order): L1 re-test with correct estimand (completion over expected with air_yards/pass_length/field position in baseline, ~1h, data in hand); L3 redistribution half (U_i from practice_status, w_j from snap_counts, ~1h, data in hand); unblock E2/F4; add sign-stability-across-folds gate; port certificate to TS only after prediction 2 in HANDOFF-FOR-AGENT.md survives; continue StatRankings scrape of 31,428 URLs. (OTHER)

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: Version-mixing contamination in the public record (v5.2.6/v5.2.7/v5.3.0/founder-v1 pooled into one number) requires HCI normalization for cross-generation comparability.
- TRUST-SIGNAL: E2/F4 specs were shelved on a removed blocker; the solved FTN→pbp join was never revisited — a process failure, not a data failure.
- QB-BEHAVIOR: Revenge-within-player found the opposite of the hypothesis (−0.366 targets/game, median ratio 0.7736), confounded with post-transfer role decline — revenge framing is unreliable as an edge signal.
- COACHING: New-HC × opponent continuity (n=1,093, ΔLL=−0.00014) and rest advantage × new HC (n=140, power-dead) both killed at game-market level — coaching-transition compounds absorbed by the closing line.
- QB-BEHAVIOR: Rookie-QB × rest deficit (n=71), backup-QB × own short week (n=68), rookie-QB × injury (n=235) all power-dead at game level.
- SCHEME: Play-action × low blitz (E2) unblocked by ~100%-populated `n_defense_box`, `n_blitzers`, `is_motion` FTN columns — the scheme compound is now testable.
- OTHER: 13/13 game-market compounds absorbed by devigged closing moneyline; stated frontier is the props lane.
- OTHER: 193 StatRankings stat definitions with formulas harvested — reusable metric glossary material.
- OTHER: Completion-over-expected with air_yards/pass_length/field position identified as the correct estimand for weather×pass tests.

## Engine-actionable? (yes/no + one-line what)
yes — queued next-step #1 (L1 re-test with correct completion-over-expected estimand, ~1h, data in hand) plus E2/F4 unblocking via the solved FTN join and populated scheme columns are the two directly executable research runs.
