# research/2026-09-24/keenum-target-splits.md
## What it is (1-2 sentences)
A Case Keenum target-distribution study (nflverse pbp 2013-2023, n=2,270 targeted attempts) prepared for the 2026 Week 3 MNF spot where Keenum (38, third QB) was expected to start for Chicago vs Philadelphia (Sept 28, 2026) after Caleb Williams' Grade 1 hamstring strain and Tyson Bagent's concussion protocol entry. Career vs layoff-return target splits plus per-season splits, built to identify who the "safety blanket" target would be.

## Key metrics/methods (formulas where given, else "not specified")
- Sample: all 2013-2023 plays with passer "C.Keenum" and non-null receiver (targeted attempts); throwaways/spikes/sacks excluded. League baseline: same filter, n=203,055 targets.
- Layoff-return set: games with ≥10 targeted attempts after ≥8 weeks since Keenum's prior game with any target (10 games, n=323 targets). Three canonical rusty first-starts broken out individually.
- No formulas; shares compared as percentages vs career and league baselines.

## Data sources named
nflverse play-by-play 2013-2023 (cached parquets, `~/workspace/gse-discovery/data_snapshot_20260913/`); nflverse season rosters (receiver position map); FTW/USA Today, SI, Bears Wire (2026-09-22/23) for the Week 3 injury/start news. Alignment notes (slot/X/Y) flagged as general football knowledge, NOT in nflverse pbp.

## Findings (numbers and facts, not vibes)
- Career (n=2,270): WR 59.6%, TE 20.4%, RB/FB 20.0% — vs league 59.3% / 20.9% / 19.7%. Keenum is almost exactly league-average positionally; no career-long positional favoritism.
- Career top targets: Adam Thielen 145, Stefon Diggs 106, Tavon Austin 104, Andre Johnson 102, Emmanuel Sanders 98, Kyle Rudolph 89, Kenny Britt 85, Courtland Sutton 84, Jerick McKinnon 78, Lance Kendricks 69, Demaryius Thomas 57, DeAndre Hopkins 55.
- Layoff-return set (10 games, n=323): WR 62.2% (+2.6 vs career), TE 20.1% (−0.3), RB/FB 17.6% (−2.4). When rusty he is slightly MORE WR-heavy and LESS RB-heavy — the safety blanket shows up at the individual-player level, not the position level.
- Canonical rusty starts: 2019 Wk1 WAS@PHI (n=43, 36.0-wk gap): RB share spiked to 30.2% (Chris Thompson 10 targets = 23% of all targets) — the one clear outlier in the study. 2021 Wk7 DEN@CLE (n=32, first start since 2019): Jarvis Landry (slot WR) 8 targets = 25%. 2023 Wk15 HOU@TEN (n=34, 62.0-wk gap): Noah Brown (WR) 11 targets = 32% share, Dalton Schultz 5, Robert Woods 5, Devin Singletary 5.
- Other return games: 2022 Wk18 CIN@CLE (n=24): Landry 8 (33%). 2019 Wk16 NYG@WAS (n=21): Steven Sims (WR) 7.
- Pattern: the blanket is whoever owns the most separation-friendly role in that specific offense (slot, receiving RB, or the WR1) — not a fixed position for Keenum.
- Caveats: single-game variance dominates (each rusty start is 32-43 targets); team/scheme confounds large (Gruden's WAS, Stefanski's CLE, Ryans/Slowik's HOU); Keenum hadn't played since 2023-12-24, now 38; no Keenum history with the 2026 Ben Johnson Bears scheme.
- Per-season target counts: 2017 MIN (118 RB / 105 TE / 339 WR) and 2018 DEN (127/108/329) are the high-volume anchors; 2022 BUF only 7 targets total.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Veteran backup QBs do NOT default to RB checkdowns when rusty (17.6% vs 20.0% career; only one 30.2% outlier in 10 games): QB-BEHAVIOR — backup-QB spot analysis should model individual-blanket behavior, not positional checkdown bias; the "safety blanket" hypothesis needs a per-game player-level formulation.
- The blanket follows the offense's most separation-friendly role (slot / receiving RB / WR1), not the QB's habit: SCHEME — target-concentration-under-stress is a function of scheme design, so the feature to model is role-separation, not QB identity.
- Career splits dead-even with league averages across 2,270 targets: QB-BEHAVIOR — Keenum is a system-follower, meaning his 2026 value is set by Ben Johnson's scheme and the Bears' personnel, not by his tendencies; coaching/personnel inputs dominate.
- One-game samples (32-43 targets) with large team/scheme confounds: TRUST-SIGNAL — rusty-backup studies must be labeled suggestive-not-predictive; don't let a 10-game n=323 convenience set override priors.

## Engine-actionable? (yes/no + one-line what)
Yes — model backup/veteran-rusty-QB spots as individual-blanket concentration (top-target share on separation-friendly roles) rather than positional checkdown bias, with explicit small-sample uncertainty flags.
