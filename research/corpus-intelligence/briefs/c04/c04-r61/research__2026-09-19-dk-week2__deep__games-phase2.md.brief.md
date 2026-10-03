# docs/research/2026-09-19-dk-week2/deep/games-phase2.md
## What it is (1-2 sentences)
Phase-2 game-environment cross-check for the DK NFL Week 2 main slate (2026-09-20), comparing market spreads against @benbbaldwin objective team-tier ratings plus play-clock, pressure-rate, EPA, and rest/spot data to find games the field misprices.

## Key metrics/methods (formulas where given, else "not specified")
- Tier gap (favorite minus dog in market-implied win% points from Kalshi-blended Baldwin ratings) vs actual spread — no fixed formula; disconnect flagged qualitatively when tiers imply a spread materially wider than the market spread.
- Play-clock tempo: avg seconds remaining at snap (higher = faster). No-huddle rate (%).
- Pass-rush edges: generated pressure % vs allowed pressure % (@hawkblogger).
- EPA/db per @EaglesXsandOs; EPA/play blitz splits (@GridironInfo); team pass/rush success rates.
- QB aggressiveness % table; QB first-read rates (Lock 64.0%, Love 78.6%) used elsewhere in the slate work.
- Weather impact flags from SBR 9/18 report.

## Data sources named
@benbbaldwin v3 objective ratings (2026-09-19, Kalshi blend); @paganetti play-clock data (2026-09-18); @hawkblogger pressure rates (2026-09-18); @EaglesXsandOs EPA analysis; @GridironInfo blitz EPA; @cmain7 survivor data; SBR weather report (9/18); RotoWire (9/18); NinerNoise (9/17); VSiN (9/13 wk).

## Findings (numbers and facts, not vibes)
- Tier-vs-line disconnects: PHI (62.2) @ TEN (26.0) — 36.2-pt tier gap (biggest on slate) vs PHI -7 spread; market implies rock fight (39.5 total, heat, TEN run D). GB (56.8) @ NYJ (33.0) — 23.8-pt gap vs GB -3.5 spread; flagged as the slate's biggest power-rating-vs-market disagreement. All other 12 games rated Fair/Fair-ish.
- SEA (65.6) @ ARI (32.6), 33.0-pt gap vs SEA -4.5: explained, not mispriced — the -10 → -4.5 line move quantifies the Darnold-to-Lock discount at ~5.5 pts.
- Tempo: TEN fastest team in football at 14.0s remaining at snap; NYJ 2nd-slowest at 5.2s; slowest group: NYJ 5.2, CIN 5.4, DEN 5.9, BAL 6.3, PIT 6.6, NE 6.8. WAS the exception: 14.7% RPO rate but only 7.1s remaining (deliberate tempo).
- Garbage-time pace engines as underdogs: NO (+8.5) 22.1% no-huddle / 10.9s clock; TEN (+7) 22.4% NH / 14.0s clock; MIA (+13.5) with Willis 22% aggressive; IND (+6.5) 13.2% NH; ARI (+4.5) with Brissett 22% aggressive.
- Pass-rush mismatches ranked: KC 56.3% generated (highest) vs IND 32.4% allowed — biggest edge. TB 32.4% vs CLE 50.0% allowed (worst). SF 31.0% vs MIA 40.5% allowed. MIN 39.1% vs CHI 44.7% allowed. HOU generates only 18.2% (3rd-worst) vs CIN 32.4% allowed — Houston cannot rush the passer, so Burrow (back, limited mobility) gets a cleaner pocket than market thinks.
- EPA: CIN defense allowed -1.49 EPA/play when blitzing (best in NFL) vs Stroud 21% aggressiveness (3rd) — CIN@HOU is a binary game. Lawrence +0.79 EPA/play (led NFL Wk1) + ~68.5% pass success vs DEN — JAX passing elite by EPA, total climbing 43.5→44.5. NYJ +0.99 EPA/play vs blitz (best) vs GB's depleted interior DL (Brinson OUT, Hargrave doubtful). MIA 35.0% pass / 23.0% rush success vs SF 58.0%/58.5%.
- QB reality check for 2026: MIA = Willis, ARI = Brissett, TEN = Ward, LV = Cousins, ATL = Rush, MIN = Wentz (verify notes flagged in file).
- Rest spots: SF off a 27-7 win over LAR in Melbourne, travel-back fatigue flagged by SBR 9/18. SEA "extra rest and prep" claim from VSiN is UNVERIFIED. Drive-start/kickoff field-position data NOT in corpus — flagged as a corpus gap to parent.
- Mispriced games list: LV@LAC (43.75, dome) steaming toward LV/over (spread -8.5→-6.5, total 42.5→44.0), Herbert 19% aggressive; MIN@CHI (49.0) mispriced on the FIELD's side (over-stacking into 20+ mph gusts); CAR@ATL (43.5) — RotoWire expects Bijan the most-rostered player on the slate in the week's lowest-dome-total coin flip; CLE@TB (41.25) — storms/delay risk + TB's 4 Wk1 fumbles; SEA@ARI (41.0) — JSN 45.8% target share / 0.42 TPRR / 10.72 EPA at low ownership, "slate's purest contrarian ceiling piece," Lock targeted him relentlessly in relief (8/122, 45-yd TD).
- Stack tiers: Primary WAS@DAL, CIN@HOU, MIN@CHI (wind-selective). Upgraded to strong secondary: JAX@DEN, LV@LAC. Secondary: NO@BAL, IND@KC, MIA@SF (MIA bring-back only), GB@NYJ, CAR@ATL. Avoid: PHI@TEN, SEA@ARI (JSN contrarian only), PIT@NE, CLE@TB.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- GB -3.5 vs 23.8-pt tier gap; NYJ +0.99 EPA/play vs blitz + GB interior DL injuries (Brinson OUT, Hargrave doubtful) — market may be right about NYJ (SCHEME)
- SEA -10 → -4.5 move quantifies Darnold-to-Lock backup discount at ~5.5 pts (OTHER)
- TEN fastest tempo (14.0s) + 22.4% no-huddle + 39.5 total: more plays than total implies; supports heat-Over (SCHEME)
- NO (+8.5) 22.1% no-huddle as garbage-time engine; MIA (+13.5) Willis 22% aggressive gunning in garbage time with Achane 95% backfield XFP as checkdown funnel (QB-BEHAVIOR, SCHEME)
- LV (Cousins 10% aggressiveness, dink-and-dunk) + 40.5% generated pressure vs LAC 28.6% allowed keeps LV@LAC closer (QB-BEHAVIOR)
- HOU 18.2% generated pressure (3rd-worst) vs CIN 32.4% allowed: clean pocket for Burrow (limited mobility after back injury) (OL)
- CIN -1.49 EPA/play when blitzing (best) vs Stroud 21% aggressiveness (3rd) — binary shootout-or-blowup game (SCHEME)
- Lawrence +0.79 EPA/play (led NFL Wk1) + 68.5% pass success vs DEN (QB-BEHAVIOR)
- WAS 14.7% RPO but 7.1s clock: RPO-heavy but deliberate tempo; play volume lower than RPO rate suggests (SCHEME)
- JSN 45.8% target share / 0.42 TPRR / 10.72 EPA; Lock 64.0% first-read rate top-5 feeds alphas (QB-BEHAVIOR, TRUST-SIGNAL)
- Drive-start/kickoff field-position data missing from corpus — corpus gap flagged (OTHER)

## Engine-actionable? (yes)
Ingest Baldwin tier ratings and play-clock tempo as game-environment inputs; the SEA -10→-4.5 move gives a concrete ~5.5-pt backup-QB discount prior; flag drive-start/field-position data as a corpus gap to fill.
