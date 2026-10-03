# research/2026-09-19-dk-week2/verify/wr-verify.md
## What it is (1-2 sentences)
Verification ledger for the WR lane: every material claim in wr-phase1/2/3 tagged with source, date, and status (CONFIRMED = 2+ independent sources or 1 official; SINGLE; UNVERIFIED; OVERTURNED; STALE) — salaries, final injury designations, internal-corpus matchup/usage claims, X-side sweep results, and ownership.
## Key metrics/methods (formulas where given, else "not specified")
- Status taxonomy: CONFIRMED / SINGLE / UNVERIFIED / OVERTURNED / STALE.
- Usage metrics verified from internal CSVs: TPRR/YPRR/target share/routes (Parker Washington 0.40 TPRR, 5.53 YPRR, 26.1% share, 62.5% routes); YPRR leaderboard (JSN 3.79, Watson 2.85, Burden 2.79, London 2.52, Diggs 2.51); separation scores (Ayomanor 0.111, Burden 0.083, Egbuka 0.069, McMillan -0.108); first-read rates (Love 78.6% highest, Lock 64.0%, Stroud 62.2% + 21% aggressiveness).
## Data sources named
dknetwork.draftkings.com, api.draftkings.com (DK API scrape attempted 9/19 — SPO117 Bad Request, then Akamai Access Denied; failure preserved), thehuddle.com, fantasypros.com, internal CSVs (sumerpass-wr-leaderboard-week1.csv, gridironinfo-gb-wr-usage-week1.csv, passer-rating-allowed-week1.csv, scottbarrett-yprr-elite-2025-26.csv, devyeusuf-separation-score-2ndyear-wr-2026.csv, qb-read-progression/qb-aggressiveness), fantasydata.com, SI, RotoBaller, FantasyPros/Fitzmaurice, sportradar, DraftSharks, NBC Sports, team wires (ravenswire, chargerswire, steelersdepot, saintsnet, thefalcconswire, vikingswire, fantasy nerds, Heavy.com), SBR weather.
## Findings (numbers and facts, not vibes)
- DK API direct scrape FAILED (Akamai-blocked); DK Network 9/15 salary table CONFIRMED via Huddle cross-check; IND@KC salaries are SNF Showdown pool, NOT Sunday Main (explicit DK Network footnote).
- OVERTURNED tags: Rome Odunze Q (SBR 9/17) was STALE — healthy, no designation (Bears listed nobody); Jalen Coker Q OVERTURNED — full Friday, no designation.
- Injury final statuses CONFIRMED: Nico Collins OUT (hamstring); Zay Flowers DOUBTFUL; Ladd McConkey QUESTIONABLE (ribs); Michael Pittman Jr. QUESTIONABLE (foot); Chris Olave QUESTIONABLE (hamstring); Jalen McMillan QUESTIONABLE (knee, "truly questionable"); Jauan Jennings OUT (personal); Kyler Murray OUT (concussion) → Wentz starts; Tua Tagovailoa DOUBTFUL (oblique) → Cooper Rush officially named ATL starter (Cooper Rush W1: 12/22-143-1-2, 3.5 air yds/att, 51.9 rating, lowest among starters); Penix OUT (knee); Omar Cooper Jr. OUT multi-week; Minkah Fitzpatrick OUT; Billy Bowman Jr. OUT; Sam Darnold OUT (hip) → Drew Lock starts; Brock Bowers OUT (knee); Jordan Mason IR; A.J. Brown (NE) IR high ankle; Ja'Kobi Lane IR.
- Brian Thomas Jr. + Jakobi Meyers cleared, will play (P1 unverified tag resolved bullish).
- Usage: only Parker Washington earned 3+ targets on JAX in Wk1 (CONFIRMED 2 sources); GB W1: Watson 8 tgts/6/147, Golden 12 tgts/30% share, Reed 7 tgts; Jalen Coker Wk1 8-138-2, last 9 games 43/600/6 > McMillan; Caleb Douglas (MIA) 90% snaps, 5-7-94 in debut.
- Weather CONFIRMED multi-source: CHI gusts 20-30 mph; Foxborough washout; Tampa sloppy.
- CB passer-rating-allowed figures DOWNGRADED to tiebreak only (1-game sample).
- Ownership UNVERIFIED (RotoGrinders premium-gated; snippets stale) — all chalk/leverage language inference-labeled.
- X-side: no useful indexed 2026 Week 2 WR content for 9 named accounts (@sfdata9ers, @SumerSports, @ScottBarrettDFB, @LateRoundQB, @AdamLevitan, @EstablishTheRun, @jmthrivept, @MagicSportsGuy, @ThunderDanDFS); X not visited (no browser control in lane).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: Parker Washington the ONLY JAX WR with 3+ Wk1 targets (thin trust funnel); Coker > McMillan in production but McMillan "truly questionable"; Schultz benefits most from Collins absence (NBC Sports).
- QB-BEHAVIOR: Love 78.6% first-read (highest) vs Stroud 62.2% + 21% aggressiveness (slate-high) — QB first-read/aggression profiles shaping WR ceiling.
- OTHER: The verification methodology itself (status taxonomy, Akamai-blocked DK API, stale-tag overturns) documents the intake pipeline's provenance discipline; 1-game-sample CB ratings downgraded to tiebreak.
## Engine-actionable? (yes/no + one-line what)
Yes — the injury-designation table with official sources is the week-2 WR injury input, and YPRR/separation/TPRR CSVs are WR efficiency features for the rankings module.
