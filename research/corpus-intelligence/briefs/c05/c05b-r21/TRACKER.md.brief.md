# narrative-tracker/TRACKER.md
## What it is (1-2 sentences)
The v5.3.0 Premium-gate narrative/incentive factor ledger (Workstream 5B): a structured schema for logging contract/milestone/record/revenge/birthday narratives with provenance and expiry, where every entry is zero-weight until it survives historical backtesting.
## Key metrics/methods (formulas where given, else "not specified")
- not specified (no formulas; method = schema + gating rules)
- Entry schema: entity, kind (contract/milestone/record/revenge/birthday), game, details (concrete checkable claim), source, provenance (direct-quote/reported/stat-derived/unverified-example), status (verified/unverified/expired), dedupe_key (entity+kind+threshold), computed_at (UTC).
- Rules: unverified entries NEVER feed the gate; one story = one entry with dedupe_key deciding which layer counts it (never both); entries expire after the game; contract terms only from reputable reports (Schefter/Rapoport/team announcements), never aggregator speculation.
## Data sources named
- Pewter Report (2026-09-12, record-watch piece: https://www.pewterreport.com/bucs-record-watch-2026-week-1-at-bengals/)
- Sports Illustrated (2026-08-10, via @CameronWolfe: https://www.si.com/nfl/bengals/onsi/bengals-star-ja-marr-chase-reveals-massive-individual-goal-entering-2026-season-01kzm4nf35w6)
- Niners Wire (2026-09-08, via NFL Communications stat feed: https://ninerswire.usatoday.com/story/sports/nfl/niners/2026/09/08/49ers-stats-george-kittle-travis-kelce-jason-witten/91664994007/)
- Athlon Sports (~2026-08-14, Mayfield revenge quote)
## Findings (numbers and facts, not vibes)
- N-001 (2026-09-13, verified): Baker Mayfield milestones vs CIN — 2 pass TDs ties Tom Brady (31) for 2nd-most multi-TD games in Bucs history; 3 pass TDs = 200 career regular-season TDs (16th QB in ≤125 games); 1 win ties Jameis Winston (28) for 4th-most Bucs starter wins; 250 pass yards passes Josh Freeman for 3rd-most 250-yd games. Note: milestones favored BUCS passing output — ran counter to engine's Bengals ML lean that day.
- N-002 (verified): Mayfield 3-year, $165M contract extension (reported ~2026 offseason).
- N-003 (verified, direct-quote via reporter): Ja'Marr Chase chasing 23 receiving TDs for NFL single-season record; won receiving triple crown in 2024. The "needs 105 yards for a bonus" version explicitly marked UNVERIFIED — do not use.
- N-004 (expired): George Kittle needed 5 catches to reach 600 (would join Kelce/Witten as only TEs with 600+ in first 125 games); SF vs LAR 2026-09-10.
- N-005 (verified, direct-quote): Mayfield revenge game vs Browns, CLE @ TB 2026-09-20 — "First home game. Week 2. Cleveland... [I'm] about that action, boss."
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: Mayfield revenge-game quote and milestone watch are QB motivation signals — a documented incentive layer that once contradicted the engine's ML lean (Bengals ML vs Mayfield milestones).
- TRUST-SIGNAL: the zero-weight-until-backtested gate, unverified-example quarantine of Garrett's hypotheticals, and dedupe_key double-counting prevention are trust-gating mechanisms directly aligned with the public/private doctrine (narratives = reasoning fuel, never published as fact).
- OTHER: the dedupe_key pattern (entity+kind+threshold) is a reusable anti-double-count design for any signal merged with beat-desk coverage.
## Engine-actionable? (yes/no + one-line what)
Yes — replicate the verified-narrative ledger schema (dedupe_key, provenance gating, expiry) as the zero-weight incentive layer intake until backtested.
