# docs/fantasy/research/2026-09-28/queue-injury-input.md

## What it is (1-2 sentences)
Research memo proposing injury designation (Out/Doubtful/Questionable) as a variance-model input for fantasy season projections, based on a measured finding: the production-rate model gives confident full-season projections to players who will not play. It is read-only intake (no wiring code written); the data source was validated end-to-end via a Firecrawl Alexandria fetch at founder-approved credit spend.

## Key metrics/methods (formulas where given, else "not specified")
- Variance model: season projection = production rate (with 6-week half-life weighting) × remaining games.
- RB band at 68% confidence is ±65% (stated, not a formula).
- Constraints on scope: (1) ALLOWED — surface designation as labeled display-only context next to the band (Out/Doubtful/Q + report date); (2) ALLOWED — exclude a player with an active `Out` designation from the projection pool (absence is not a forecast); (3) NOT ALLOWED — multiply `proj` by a games-expected haircut (that would be a guess about replacement share, backup quality, return date — a modeling project with its own walk-forward, not a wiring change).
- Guard rails for a first pass: `players.injuryDisplay` already exists and is display-only (existing sleeper-api tests assert scoring is unchanged); gate test — with a designation present, every paid number is byte-identical to the undesignated pool; freshness test — a designation older than the current week fails loudly rather than rendering a stale `Out`.

## Data sources named
- Firecrawl Alexandria, provider `nfl-com` (api.nfl.com), capability `sports-league-data/injury_report` — 5 credits per team call; discovery returned 7 `nfl-com` capabilities plus ESPN, NFL.com, BLS, FRED. Full league pull for 2026 Week 3: 32 teams + 32 injury-report calls = 165 credits, yielding 301 reports across 32 teams.
- Record shape: `gsis_id`, display_name, position, `injury_status` (e.g. OUT), `practice_status` (e.g. DIDNOT), injury list, practice_days array. `gsis_id` present on 301/301 rows — same identifier `players.gsisId` carries, so the join needs no identity resolution.
- Call-shape notes: `injury_report` takes a team UUID (not name/abbreviation — resolve once with `sports-league-data/teams`, 5 credits, cache all 32); `teams` takes only `season` and `conference` (passing `query` returns a 400).

## Findings (numbers and facts, not vibes)
- Walk-forward evidence of the gap: McCaffrey's 2025 remainder came in at 346.7 vs model projection 240.5 — 106 points low, 31% of realized total. (A prior session's "short half-life makes us pessimistic on bounce-backs" generalization from that single case was corrected.)
- Join of the 301 reports to the live DB: 1,436 players with a `gsisId`; 301 distinct players on injury reports; 94 matched to our players, 207 not (rookies, IR, practice squad); 86 fantasy (QB/RB/WR/TE) matched; 82 fantasy matched AND we would project them; **18 OUT, fantasy position, we would still project.**
- Designation distribution across all 301 reports: OUT 69, QUESTIONABLE 43, DOUBTFUL 7, no designation 182.
- The 18 OUT-and-still-projected players named: Caleb Williams (QB, Hamstring), Alec Pierce (WR, Heel), Caleb Douglas (WR, Ankle), Barion Brown (WR, Hamstring), Charlie Kolar (TE, Forearm), Mason Taylor (TE, Thumb), Jonah Coleman (RB, Ankle), Jayden Reed (WR, Neck), Andrei Iosivas (WR, Thumb), Brenen Thompson (WR, Quadricep), Nico Collins (WR, Hamstring), Ashton Dulin (WR, Ankle).
- Running cost: 165 credits per full-league week + 5 to resolve team UUIDs; in-season ~17 credits/week or ~$0.85/week at $0.05/credit; off-season weeks can be skipped free.
- Open decisions (founder-level): connector vs direct endpoint; whether `Out` players get pool-excluded (product call); display-only labeling vs a full availability model.

## Intelligence connections
- [OTHER] Availability input for the variance model — the 18 OUT-but-projected players are the key gap measurement, not behavioral signals.
- [OTHER] Doctrine tension recorded: injury flag must not become a projection input (publishing a number the evidence does not support); honest scope is display-only labeling or pool exclusion.

## Engine-actionable? (yes/no + one-line what)
Yes — wire injury designation as a display-only label (and/or Out-pool exclusion) on projections, with a freshness gate, before the point estimate is shown next to it; do NOT fold availability into the projection number without a separate walk-forward.
