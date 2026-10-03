# research/2026-09-19-dk-week2/deep/dst-phase2.md
## What it is (1-2 sentences)
The DST lane's Phase 2 gap-hunt for the Week 2 main slate: what Phase 1 missed (QB-injury news flipping DST spots, defensive injuries, hidden pressure profiles) cross-checked against the internal corpus, plus a leverage map of the slate's DST plays.
## Key metrics/methods (formulas where given, else "not specified")
- Method: second-sweep news capture + cross-check of Phase 1 reads against internal corpus tables (pressure rates, EPA/play splits, PRWR, first-read rate, motion-def EPA, objective team tiers); no formulas invented.
- Key matchup primitives used: pressure generated % vs pressure allowed %, PRWR (pass-rush win rate), motion-def EPA, QB pressure-to-sack rate, QB aggressiveness %, first-read rate.
## Data sources named
- News: Fox Sports/Reuters, USA Today via ESPN's Marcel Louis-Jacques, Falcons Wire/NBC Sports, Jets Wire/Packers Wire, steelerswire/athlonsports, Rotoworld, texanswire, SI, chargerswire, Fantasy Points, fantasyalarm, FantasyPros, PFN Offense Impact.
- Internal corpus: @GridironInfo_ EPA splits, @sfdata9ers playcalling tendencies, @DonAtkinsonNFL read progression, benbbaldwin v3 objective tiers (Kalshi blend), @SumerSports PRWR, Sam Hoppen EPA/aDOT, @hawkblogger pressure rates.
## Findings (numbers and facts, not vibes)
- QB news flips: Carson Wentz STARTS for MIN (Murray concussion OUT; Fox/Reuters 9/18); Wentz Wk1 relief: 12-19, 133 yds, 3 TD, 0 INT, sacked 3x -> CHI DST (home, wind/rain, 67.4% win prob) spot; Malik Willis (toe) full practice, starts for MIA vs SF; Wk1: 5 sacks taken (tied-most NFL), 17 pressures, self-admittedly holds ball too long -> SF DST thesis strengthened; Cooper Rush STARTS for ATL (Penix OUT, Tua doubtful); Rush Wk1: 12-22, 143, 1 TD, 2 INT, 2.6 QBR (worst), 2.6... 80% pressure-to-sack -> CAR DST ($2,700) value spot (phase 3 overturned fantasyalarm's fade).
- DL injuries: GB Brinson OUT, Hargrave DOUBTFUL (concussion), Van Ness QUESTIONABLE (concussion) — GB DST weaker than 65.4% win prob suggests; HOU DE Jadeveon Clowney OUT (knee), G Ed Ingram OUT (groin), LB Jake Hummel OUT -> CIN DST's pressure angle improves (CIN D -1.49 EPA/play when blitzing, best NFL, +44.4% pressure generated); LAC secondary: Molden OUT, Leonard Q.
- Willis holds ball: 3.21s time-to-throw (4th longest); Wk1 13.6 avg air yards/attempt (led NFL) but 22% off-target (4th highest); Purdy lowest first-read 27.0%.
- Team facts: NYJ generated 46.2% pressure vs TEN (top-5 Wk1), held TEN under 200 yds and 10 pts; PHI DST faces same TEN offense (Ward: 24th EPA/play -0.12, 26th aDOT 5.9); JAX 50% pressure generated vs DEN 56.3% allowed = slate's biggest pressure mismatch; Falcons offense ranked 29th (PFN Offense Impact 65.3).
- benbbaldwin v3 caution: TB's own rating only 41.9, LAC 54.0 (market likes them more: FP ECR 2/6, fantasyalarm 3/7); SF 65.6, BAL 65.2, PHI 62.2 ratings AND matchups aligned; DEN 60.5 rating outlier but Lawrence led Wk1 EPA/play +0.79 and DEN on short rest after MNF.
- Pressure mismatches: LV allows least pressure (6.5%) capping LAC sack upside, while LV generates 40.5% (#5) with Crosby 26.7% PRWR; CIN pressure 44.4% (#4) vs HOU RG Ingram OUT and CIN RG... (Ingram absence weakens HOU interior vs CIN's rush).
- Willis vs GB angle: GB's depleted front blitzing Love is a losing plan — NYJ offense +0.99 EPA/play vs blitz (best); Will McDonald WILL PLAY (ankle), 5 pressures + 1 sack on 50% snaps Wk1, vs GB LT Jordan Morgan (allowed team-high 5 pressures Wk1).
- Leverage map: consensus tier SF $3,800 / PHI $3,700 / TB $3,600 / BAL $3,300 (win probs 74.9-89.3%, vs bottom-3 offenses MIA 25.6, TEN 26.0, CLE 20.1, NO 49.8); best hidden process play CIN DST (dome, likely cheap); best salary plays JAX $2,400, MIN $2,600.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [QB-BEHAVIOR] Backup-starter DST thesis: Wentz (statuesque, 3 sacks on 12-19 relief), Willis (holds ball: 3.21s TTT, 22% off-target, 5 sacks), Rush (2.6 QBR, 80% pressure-to-sack) — immobile/hesitant backup QBs as a quantified DST bump input.
- [OL] Pressure-generated-vs-allowed mismatch as the primary DST sack predictor: JAX 50% gen vs DEN 56.3% allowed; LV 40.5% gen vs LAC... (inverse: LV allows only 6.5%, capping LAC DST); GB DL depletion vs NYJ's 11.5%-allowing OL... (NYJ allows 11.5% pressure).
- [TRUST-SIGNAL] Two phase-1 misses corrected by injury wire (Willis off report; Porter OUT confirmed; Clowney/Hargrave/Brinson OUT) — defensive-injury news as a systematic DST-model input, not a one-off.
- [SCHEME] Motion-def EPA cross-check: LAC 84.3% motion vs LV -0.30 (12th); TB 25.5% PA vs CLE +0.66 (worst); TEN/NO 22%+ no-huddle vs PHI -0.53 / BAL -0.68 — scheme-defense EPA as a DST matchup layer.
- [OTHER] benbbaldwin v3 rating-vs-market fade discipline (TB 41.9, LAC 54.0, DEN short rest) — objective tier as a contrarian check on consensus DST ranks.
## Engine-actionable? (yes/no + one-line what)
Yes — pressure-generated%-vs-allowed% mismatch plus backup-QB hold-time (time-to-throw, pressure-to-sack) form a reproducible DST sack/turnover scoring feature pair.
