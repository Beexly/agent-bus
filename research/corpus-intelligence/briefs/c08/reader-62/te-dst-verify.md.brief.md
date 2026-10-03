# docs/research/2026-09-19-dk-week2/verify/te-dst-verify.md
## What it is (1-2 sentences)
Second-source verification pass (2026-09-19) for the Week 2 TE/DST lane: confirms or refutes briefing-baseline claims against official Friday injury reports, logs salary-verification status, and flags an open 13-vs-14-game slate-definition conflict between the internal briefing and external salary providers.
## Key metrics/methods (formulas where given, else "not specified")
- Verification method: two-source confirm per injury claim; official team game-status report treated as primary and overrides single-source.
- Internal recovery-probability model (Bowers 68%, Okonkwo 55%, Collins 29%) explicitly superseded by official 9/18 designations — a "report beats model" rule.
- Salary evidence tiers: endpoint-verified (none — endpoint inaccessible), second-party usable (flagged), stale (marked, not used).
## Data sources named
Review-Journal, DraftSharks, Commanders.com official report, NBC Sports player news, USA Today (ESPN beat writers), Falcons Wire, Texans Wire, Fox Sports, Reuters, Steelers Wire, Athlon Sports, Jets Wire, Packers Wire, SI, A to Z Sports, Chargers Wire, Heavy.com, Saints Wire, The Huddle 30-TE table (9/19), Fantasy Info Central (9/19), fantasyalarm DST (9/18), BettorGreen (9/18), FantasyPros PPR ECR (updated 9/19), FantasyData DST (9/19).
## Findings (numbers and facts, not vibes)
- CONFIRMED (official, 9/18): Bowers DOUBTFUL (knee, DNP Wed/Thu → LP Fri); Chig Okonkwo OUT (hamstring); Nico Collins RULED OUT (hamstring); Juwan Johnson plays (illness cleared); Kittle plays (Achilles, pitch count likely); Joe Burrow good to go (back); Cooper Rush starts for ATL (Penix OUT); Carson Wentz starts for MIN (Kyler Murray concussion OUT); Joey Porter Jr. OUT; Michael Pittman Jr. Q for PIT (plays for PIT — briefing had him as IND, corrected); Will McDonald will play; GB Brinson OUT/Hargrave doubtful/Van Ness Q; HOU Clowney+Ingram+Hummel OUT; LAC Molden OUT/McConkey Q; Olave Q (hamstring).
- Refutations: briefing's "Michael Pittman Jr. (IND WR)" was wrong team (PIT); internal recovery chart superseded; fantasyalarm's CAR DST fade overturned (written before Penix ruled out).
- DST salaries (fantasyalarm 9/18, second-party): SF $3,800 / PHI $3,700 / TB $3,600 / BAL $3,300 / CAR $2,700 / MIN $2,600 / JAX $2,400; TB $3,600 cross-checked by Huddle lineup; all other 19 DST salaries UNVERIFIED; LAC $3,400 from briefing corpus is 2025-dated — STALE, do not use.
- Ownership: only public number found is Schultz 5.5% (BettorGreen, 9/18, post-Collins news); Huddle's Loveland/Goedert ownership takes are pundit opinion, not data.
- Open conflicts: DK main slate appears to be 13 games EXCLUDING SNF — fantasyalarm and Huddle's no-Kelce/no-Colts-TE table agree, so treat KC/IND as off-slate until endpoint-verified; line movement since briefing: BAL → 7.5-pt favorites, TB → -8.5, PHI -6.5/-7 unchanged, SF -13.5 unchanged, CAR -1.5/-2.5.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: Cooper Rush starts for ATL; Wentz starts for MIN; Willis starts for MIA (full practice); Penix OUT — all confirmed starter changes with projection implications.
- COACHING: Zac Taylor quote confirms Burrow; no other coaching signals.
- TRUST-SIGNAL: the file is almost pure TRUST-SIGNAL — two-source confirmation ledger, report-beats-model override rule, stale-salary quarantine, and the 13-vs-14-game slate-definition conflict flagged rather than silently resolved.
- OTHER: DST salary table (second-party evidence tier).
## Engine-actionable? (yes/no + one-line what)
yes — the verification protocol itself (two-source ledger, official-report-over-model override, salary evidence tiers, stale quarantine) is a template for the engine's live injury/salary intake pipeline.
