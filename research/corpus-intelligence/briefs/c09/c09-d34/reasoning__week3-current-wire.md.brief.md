# reasoning/week3-current-wire.md
## What it is (1-2 sentences)
Depth-chart snapshot (2026-09-26T12:12:29Z) joining roster, injury report, coaches, prior snap leaders, team passing EPA/attempt, and charted scheme rates onto every 2026 Week 3 game — explicitly without using that game's result (no lookahead).
## Key metrics/methods (formulas where given, else "not specified")
not specified (joins and charted rates; charting = motion/play-action/RPO/screen flags only, not a drawn playbook)
## Data sources named
Depth-chart snapshot build (rosters, injury reports, coaches, snap counts, team passing EPA, charted play-calls); 159–189 charted plays per team over prior offensive plays.
## Findings (numbers and facts, not vibes)
QB passing EPA/attempt (pre-week-3 attempts): Brock Purdy 0.503 (56), Josh Allen 0.493 (60), Drew Lock 0.409 (50, SEA snap leader), C.J. Stroud −0.087 (94), Caleb Williams 0.229 (64), Dak Prescott 0.392 (65), Lamar Jackson 0.244 (56), Kirk Cousins 0.108 (59), Tyler Shough 0.110 (90), Geno Smith 0.216 (65), Sam Darnold — DNP rows show SEA snap leader Drew Lock 100% week 2 while listed QB is Sam Darnold; MIN QB Kyler Murray with prior snap leader Carson Wentz 100% week 2; NYG QB Jameis Winston with prior snap leader Jaxson Dart 100% week 1; low ends: Michael Penix Jr. −0.756 (54), Aaron Rodgers −0.389 (81), Baker Mayfield −0.306 (62), Jayden Daniels 0.142 (69) but listed OUT (elbow).
Scheme extremes (charted prior plays): SF motion 64.0%, play-action 15.1%; LAC motion 66.2%, shotgun 61.3%; HOU shotgun 63.1%; BUF shotgun only 33.1%; CIN motion 29.8% / RPO 6.8%; KC RPO 8.8%, screen 7.7%; NO no-huddle 12.5%, shotgun 55.7% (192 prior plays); PIT no-huddle 7.6% (Rodgers); LAR RPO 0.0%; NE no-huddle 0.0%.
Injury/availability flags: HOU out 5 incl. Nico Collins (hamstring) and Ed Ingram (G); GB out 4 incl. Aaron Banks (G), Zach Bako-Bewele (T), Jayden Reed; LAC out 6 incl. two OL (Pipkins, Awosika); LAR Puka Nacua doubtful (hip); WAS Jayden Daniels OUT (elbow); SEA out two safeties; DAL out four defenders incl. both starting safeties (Hooker, Locke).
Coaches: week-3 matchup pairings named for all 32 teams (e.g., Jesse Minter BAL, Klint Kubliak LV, Todd Monken CLE, Mike McCarthy PIT, Jeff Hafley MIA, Robert Saleh TEN, John Harbaugh NYG, Aaron Glenn NYJ, Ben Johnson CHI, Liam Coen JAX).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME — per-team motion/play-action/RPO/screen/shotgun/no-huddle fingerprints (league-spread: motion 28.2%–66.2%, play-action 6.2%–16.0%).
- COACHING — full week-3 head-coach map for playcalling-fingerprint joins.
- OL — named OL injuries (Banks, Bako-Bewele, Ingram, Pipkins, Awosika, Stanley, Cosmi, Bartch) as pressure/run-blocking adjustments.
- QB-BEHAVIOR — QB-level passing EPA/attempt and snap-leader vs. listed-starter mismatches (MIN, NYG, SEA) as starter-uncertainty flags.
## Engine-actionable? (yes/no + one-line what)
Yes — load the team scheme-rate fingerprints (motion, play-action, RPO, screen, shotgun) as priors for QB/RB/WR projection adjustments and OL injury flags into the trench/avail signals.
