# research/2026-09-19-dk-week2/deep/dst-phase1.md
## What it is (1-2 sentences)
Phase 1 (breadth) DST research for the DK Classic NFL Week 2 main slate (2026-09-20), covering 26 on-slate DSTs: DraftKings salaries, public projections/rankings, internal pressure/motion/defensive-EPA matchup data, win probabilities, and weather, with pre-adversarial top plays.
## Key metrics/methods (formulas where given, else "not specified")
- FTN pressure generated | allowed rates via @hawkblogger (e.g. JAX 50.0% generated, DEN 56.3% allowed).
- Defensive pass EPA vs motion-at-snap (@Paganetti): PIT -0.85, BAL -0.68, ATL -0.66 … CLE +0.66.
- benbbaldwin v3 objective ratings: SF 65.6 down to MIA 25.6, CLE 20.1.
- SumerSports edge PRWR: Jalyx Hunt (PHI) 29.6%, Maxx Crosby (LV) 26.7%, Will Anderson (HOU) 24.1%, Will McDonald (NYJ) 22.2%.
- Win probabilities (@cmain7 survivor model): SF 89.3%, BAL 78.9%, TB 78.3 … MIA 10.7%.
- FantasyPros DST ECR + consensus projections; FantasyData projections; fantasyalarm 9/18 rankings.
## Data sources named
The Huddle, fantasyalarm (9/18), FantasyPros (ECR + consensus projections), FantasyData, FTN via @hawkblogger, @Paganetti, benbbaldwin v3, SumerSports, @cmain7 survivor, SBR + Action Network (weather), weather.com.
## Findings (numbers and facts, not vibes)
- DK salaries (second-party): SF $3,800 (most expensive), PHI $3,700, TB $3,600, BAL $3,300, CAR $2,700 (fade), MIN $2,600 (best value), JAX $2,400 (value pivot); rest unverified.
- Best pressure mismatch: JAX (50.0% generated, #2) vs DEN (56.3% allowed, worst); also TB vs CLE (50.0% allowed; Watson sacked 5x Wk1), MIN vs CHI (44.7% allowed, 3rd-worst).
- Caps: LAC sack ceiling capped by LV (6.5% pressure allowed, best); GB capped by NYJ (11.5% allowed, 2nd-best).
- Premium reads: SF (89.3% win prob, MIA rated 25.6, Willis sacked 5x Wk1), TB (CLE rated 20.1 worst offense), PHI (TEN 26.0 rating, 41.0% pressure generated, Hunt 29.6% PRWR).
- Mid: BAL (43.4% blitz, -0.41 def EPA/dropback), LAC (Molden OUT), SEA. Value: MIN $2,600, JAX $2,400.
- Weather: MIN@CHI ~70°F, 12 mph wind gusts 20+, 30-52% rain; PIT@NE 35-56% rain; GB@NYJ 58% rain; CLE@TB showers possible; PHI@TEN ~91°F.
- IND@KC SNF excluded from DK main slate (disputed vs parent briefing).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OL: DEN allowed worst 56.3% pressure; CLE 50.0% (2nd-worst); CHI 44.7% (3rd-worst); MIA 40.5% with Willis holding the ball; LV best at 6.5% allowed.
- QB-BEHAVIOR: Willis sacked 5x Wk1 (holds the ball, 3.21s TTT in qb-full-pool); Watson sacked 5x Wk1; Cousins takes 0 sacks on 29% pressure (caps LAC sack ceiling).
- SCHEME: defensive motion-at-snap pass EPA leaderboard (PIT -0.85 elite vs CLE +0.66); motion-pass EPA allowed: DAL +0.48 (2nd-worst), CAR +0.48.
- OTHER: DST scoring inputs for DK Classic — pressure mismatch, blitz rates (BAL 43.4%), individual edge-rusher PRWR, weather games (CHI/NE/NYJ rain-boosted).
## Engine-actionable? (yes/no + one-line what)
Yes — pressure-generated-vs-allowed mismatch table plus benbbaldwin objective ratings and @Paganetti motion-at-snap defensive EPA are ingestible DST matchup features for the engine's DST projection module.
