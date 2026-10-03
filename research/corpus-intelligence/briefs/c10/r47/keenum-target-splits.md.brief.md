# fantasy/research/2026-09-24/keenum-target-splits.md
## What it is (1-2 sentences)
A data study (prepared 2026-09-24) of Case Keenum's career target distribution and how it shifts in "layoff-return" games, ahead of his expected Week 3 start (Bears vs Eagles, MNF 2026-09-28) with Caleb Williams out (Grade 1 hamstring) and Tyson Bagent in concussion protocol.
## Key metrics/methods (formulas where given, else "not specified")
Formulas not given; filters: sample = plays 2013–2023 with `passer_player_name == "C.Keenum"` and non-null `receiver_player_name` (targeted attempts; throwaways/spikes/sacks excluded); position from GSIS id → nflverse season rosters (zero unknown). Layoff-return games defined as ≥10 targeted attempts after a gap of ≥8 weeks since Keenum's prior game with any target.
## Data sources named
nflverse play-by-play 2013–2023 (cached parquets at `~/workspace/gse-discovery/data_snapshot_20260913/`); nflverse season rosters for positions; news outlets USA Today/FTW, SI, Bears Wire (2026-09-22/23) for the Week 3 status news.
## Findings (numbers and facts, not vibes)
- Career (n=2,270 targets, teams HOU/LA/MIN/DEN/WAS/CLE/BUF): WR 59.6%, TE 20.4%, RB/FB 20.0% — vs league average 59.3% / 20.9% / 19.7% (deltas +0.3/−0.5/+0.3). No career positional favoritism; distribution follows personnel/scheme. (QB-BEHAVIOR)
- Return set (10 games, n=323 targets): WR 62.2%, TE 20.1%, RB/FB 17.6% — vs career +2.6/−0.3/−2.4. When rusty he is slightly MORE WR-heavy and LESS RB-heavy; no position-level "safety blanket" shift. (QB-BEHAVIOR)
- The blanket shows up at the individual-player level: 2019-09-08 WAS@PHI (43 att, 36-wk gap) — Chris Thompson (RB) 10/43 (23% share), RB/FB group spiked to 30.2% vs 20.0% career — the one clear outlier in the study; 2021-10-21 DEN@CLE (32 att) — Jarvis Landry (WR, slot) 8/32 (25%); 2023-12-17 HOU@TEN (34 att, ~102 wks since last 10+-att game) — Noah Brown (WR) 11/34 (32%). (QB-BEHAVIOR)
- Pattern: the blanket is whoever owns the most separation-friendly role in that specific offense (slot, receiving RB, or WR1) — not a fixed position for Keenum; team/scheme confounds are large (Gruden WAS, Stefanski CLE, Ryans/Slowik HOU). (SCHEME)
- Career top targets: Adam Thielen 145/88/1,201 (MIN 2017); Stefon Diggs 106/71/963; Tavon Austin 104/55/447; Andre Johnson 102/59/845; Emmanuel Sanders 98/71/866; Kyle Rudolph 89/60/559; Kenny Britt 85/56/953; Courtland Sutton 84/41/687; Jerick McKinnon 78/60/465. (QB-BEHAVIOR)
- 2026 context: Keenum (age 38) joined Bears April 2025, re-signed two-year deal March 2026; last NFL action 2023 with Houston (2 games); career 11 seasons, 80 games, 79 TD, 62.3% completions (per FTW). The 2026 Bears offense (Ben Johnson scheme) has no Keenum history. (OTHER)
- Caveats stated: 323-target return sample is small; each rusty start is one game (32–43 targets) so single-game variance dominates — "suggestive, not predictive"; alignment (slot/X/Y) notes come from general knowledge, not nflverse pbp. (TRUST-SIGNAL)
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
(as tagged inline above)
## Engine-actionable? (yes/no + one-line what)
Yes — rusty-backup-QB target-concentration model for 8+ week gap return starts: blanket follows the separation-friendly role (slot / receiving RB / WR1) of that offense rather than a fixed position, while position-level split stays ~league average.
