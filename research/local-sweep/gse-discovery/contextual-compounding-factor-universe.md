# PROJECT MOVE-37 — CONTEXTUAL-COMPOUNDING FACTOR UNIVERSE

**Lane:** contextual compounding (separate from the REPAIR-03 physics/math lane — do not cross-contaminate).
**Compiled:** 2026-09-14 by the swarm coordinator from 5 lens agents (theory-only round).
**Thesis (Garrett):** the most accurate prediction engine comes from compounding metrics/factors
that have never been used or are rarely used — the full world around the game, not just play physics.

## Global calibration (binding on all candidates)

- Past theory rounds predicted magnitudes ~10x too large. Expected TRUE effects: **0.5–3pp of
  ATS cover rate, 0.3–1.0 points per team-game on totals.** Anything printing ≥5pp or ≥60% cover
  rates in-window should be treated as a data bug first, a discovery second.
- Null for all ATS/total tests: 50% (closing-line efficiency). Profitability bar: 52.4% (at -110).
- Power math (one-sided 95% test vs 52.4%): observed p-hat must clear 52.4% + 0.8225/sqrt(n):
  n=60 -> 63.0% | n=120 -> 59.9% | n=180 -> 58.5% | n=300 -> 57.1% | n=800 -> 55.3%.
  Detecting a true +2pp edge at 80% power needs n~3,900. **No narrow treatment clears that in
  the 2020-2025 window.** Protocol: 2020-2025 = discovery/estimation (sign + magnitude);
  promote only correct-sign, >=1pp candidates to the 1999-2025 confirmation window. Report all nulls.
- Multiple testing: each lens pre-registers 1-3 confirmatory candidates; the rest are exploratory.
  Report Holm-adjusted p-values alongside raw. Never move a candidate from exploratory to
  confirmatory after seeing results.
- **Verify before coding:** `spread_line` sign convention (assumed home-perspective, negative = home
  favored); `gametime` format; `game_type`/`POST` coding for playoff detection; pushes excluded (pre-registered).
- Non-duplication vs v5.3.0 conviction gates (market movement, book agreement, narrative/incentive,
  prop alignment, rest/travel, scheme matchup): every candidate below was screened; each must go BEYOND
  the gate it touches (usually by turning a gate's single factor into a priced-main-effect + unpriced-interaction).

## Data dictionary (local snapshot: ~/workspace/gse-discovery/data_snapshot_20260913/, 1999-2025)

- `schedules_{yr}`: game_id, season, week, weekday, gameday, gametime, away/home_team, scores,
  location, away_rest/home_rest, away/home_moneyline, spread_line, spread odds, total_line, over/under odds
  (CLOSING lines only, single source), div_game, roof, surface, temp, wind, away/home_qb_id, qb names,
  away/home_coach, referee, stadium
- `rosters_{yr}` / `rosters_weekly_{yr}`: birth_date, team, position, years_exp, draft_club, rookie_year,
  college, jersey_number, gsis_id (join key)
- `depth_charts_{yr}` (weekly), `pbp_{yr}` (372 cols incl. EPA/WPA, air_yards, wp, qtr)
- NOT in snapshot: line movement/steam, ticket splits, injury reports, contract/salary/incentive data,
  precipitation, humidity, player transaction history (reconstructable from weekly-roster team switches).
- Build-once static tables needed: (1) 32-team IANA timezone table, (2) stadium altitude table,
  (3) stadium lat/lon table, (4) FBS college geocode table, (5) HC career-wins table,
  (6) HC-team history table (for coach-revenge coding, blind to outcomes).

---

# LENS 1 — BIOGRAPHICAL / SITUATIONAL (8 candidates, ranked)

## L1-1. Rookie-Wall x Opponent Rest Fade [LENS TOP PICK]
- **Def:** Treatment game = ALL of: (a) starting QB has rookie_year == season, OR rookies (years_exp==0)
  account for >25% of team offensive snaps over prior 3 weeks; (b) week >= 11; (c) opponent rest
  advantage >= 3 days. Outcome: treated team ATS (hypothesis: FADE — opponent covers).
- **Data:** schedules (week, rest, spread_line, qb_id), rosters (rookie_year, years_exp, gsis_id),
  pbp (snaps), rosters_weekly.
- **Test:** opponent ATS cover rate; null 50%; success >52.4% one-sided, pooled n>=150; secondary:
  mean margin residual (actual - spread) < -0.5 pts.
- **n:** ~150-240 pooled. Best n-to-novelty ratio in this lens.
- **Why novel:** books price a rookie QB's *level*, not the *interaction* of late-season rookie
  degradation with a rested opponent gameplan.
- **Overfit risk:** endogeneity (bad teams start rookies; margin-residual secondary is the guardrail);
  freeze week/rest cutoffs before looking. **Expected edge: 1-2% cover, 0.5-1.0 pts margin.**

## L1-2. Revenge-Starter x Primetime
- **Def:** projected starter (top of depth chart or >=50% position snaps prior 3 wks) faces a team he was
  rostered on in any prior season (reconstructed from rosters_weekly team switches on gsis_id; exclude
  players who never snapped for old team) AND primetime game. Outcome: treated team ATS.
- **Test:** ATS cover >52.4% one-sided, n>=150; secondary: revenge player any-TD rate vs positional baseline.
- **n:** ~60-120 pooled (slightly underpowered). **Expected: 1-2% cover.**
- **Why novel:** quants discarded "revenge game" as mocked bettor narrative instead of asking WHICH revenge
  spots matter (starters, national spotlight). **Risk:** "starter"/revenge-window flexibility; traded-midseason
  bad-blood vs scheme-familiarity have opposite signs — freeze definitions.

## L1-3. Narrative Stack Index (pooled rare-event index)
- **Def:** for each team's projected starters, count flags: revenge (L1-2 construction), college homecoming
  (college <=150 mi of stadium), birthday week (birth_date within +/-3 days of gameday), milestone-in-reach
  (L1-4 construction). Treatment: stack >= 2 flags AND primetime. Outcome: treated team ATS.
- **Test:** ATS >52.4% one-sided, target n>=100; report leave-one-flag-out decomposition.
- **n:** ~90-150 pooled. **Expected: 1-2% cover IF the motivation-convexity thesis holds; prior is wide.**
- **Why novel:** each narrative factor is individually dismissed as noise, so nobody ever summed them.
- **Risk:** highest researcher-DOF in the set; freeze ALL flag definitions, the >=2 cutoff, and the
  primetime definition pre-analysis.

## L1-4. Career-Milestone Spotlight x Primetime
- **Def:** offensive starter within reach of a round career milestone (QB within 3 of 100/150/.../300 career
  pass TDs or 300 of 10k/20k/.../50k yards; RB/WR/TE within 100 of 5k/10k scrimmage yards or 2 of 50/100
  career TDs; career totals from pbp 1999-2025) AND primetime. Outcome: team ATS; secondary: team total over.
- **Test:** ATS >52.4% one-sided pooled; pre-register POSITIVE direction but report two-sided CI
  (milestone-chasing can backfire). **n:** ~90-180 pooled. **Expected: 0.5-1.5%; honest chance of zero.**
- **Why novel:** milestones are broadcast trivia; nobody tests whether the spotlight changes outcomes.
- **Risk:** milestone roundness arbitrary; milestone players are disproportionately good on good teams.

## L1-5. Birthday-Week Skill Starter [FALSIFICATION ANCHOR]
- **Def:** offensive skill starter with birth_date within +/-1 day of gameday AND primetime.
  Two-sided tests: player TD rate vs positional baseline; team ATS vs 50%.
- **n:** ~200-260 player-games/season — largest n in lens. **Expected magnitude: ~0. DELIBERATE.**
- Purpose: pipeline calibration. If this "hits," the pipeline is leaking (birthday mis-parse,
  primetime misclassification) and every other candidate's result is suspect. RUN WITH THE PILOT.

## L1-6. College-Homecoming Road Compound
- **Def:** away team has >=1 offensive starter whose college is within 150 miles of the stadium AND the
  away team crossed >=2 time zones or >1,500 mi. Thesis: homecoming motivation nets against travel fatigue;
  market prices only the fatigue. Outcome: away team ATS.
- **Test:** ATS >52.4% one-sided; report exact binomial CI. **n:** ~50-90 pooled (underpowered — exploratory).
- **Expected: 1-3% cover, very wide CIs. Risk:** 150-mile radius arbitrary (pre-register; no radius shopping);
  tiny n. Needs static college geocode table (build-once).

## L1-7. Benched-QB Reinstatement x Home [LOTTERY TICKET]
- **Def:** QB held starting job >=3 straight weeks, lost it >=1 week while rostered, returns as named starter
  AND home game. Thesis: simplified gameplan + galvanized locker room + market over-discounting dysfunction.
  Outcome: team ATS. **n:** ~20-45 pooled. **Expected: +/-2%, sign genuinely uncertain.**
- **Risk:** SEVERE — tiny n; **injury data is absent**, so return-from-injury is indistinguishable from
  return-from-benching (state this limitation explicitly).

## L1-8. Coach Record-Watch x Home [LOTTERY TICKET]
- **Def:** head coach within 2 wins of a round career number (50/100/150/200 as NFL HC) or franchise
  all-time wins record AND home game. Needs external static HC career-wins table (PFR; 1999-2025 window
  truncates careers). Outcome: team ATS. **n:** ~15-35 pooled. **Expected: 0-1%.**
- **Risk:** tiny n; good-coach confound — control on coach career win% above/below median as robustness split.

---

# LENS 2 — TRAVEL / REST / CHRONOBIOLOGY (10 candidates, ranked)

## L2-1. Multiplicative Fatigue: body-clock kickoff x rest deficit [LENS TOP PICK]
- **Def:** non-international games; away body-clock kickoff = gametime converted to away team's home IANA
  timezone (date-aware DST). T=1 iff (away body-clock kickoff <= 11:00, i.e. PT/MT team at 1pm ET) AND
  (away_rest - home_rest <= -2). Outcome: home-team ATS cover.
- **Data:** schedules (gametime, weekday, teams, rest, spread_line, scores, stadium/location); static
  timezone table only.
- **Test:** home ATS cover rate; success: one-sided 95% lower CI > 52.4%. CONFIRMATORY: logistic regression
  of home cover on body-clock-disadvantage + rest-diff + their INTERACTION — the interaction coefficient is
  the pre-registered estimand (proves the compound adds beyond priced main effects).
- **n:** ~130/6yr; ~380 full-window. **Expected: +1 to +2pp home ATS residual.**
- **Why novel:** "west coast at 1pm" priced, rest priced; the multiplication (sleep-deprived x phase-shifted,
  super-additive in lab chronobiology) lives in journals, not betting models.
- **Risk:** cutoffs (-2 days, <=11:00) are researcher DOF — pre-register exactly; report adjacent-cutoff
  sensitivity as robustness, never as selection.
- **Beyond engine:** engine is additive in rest/travel; this is the triple interaction
  (travel direction x kickoff circadian phase x rest asymmetry).

## L2-2. Hollow Home Rest: the home team's circadian disruption
- **Def:** home_rest - away_rest >= +3. T=1 (hollow): home team's prior game was on the road, >=2 time zones
  from home, AND a night game (>=20:00 ET) or Monday. Control: home rest edge built on a home prior game or
  same-zone trip. Outcome: home-team ATS cover (hypothesis: FADE hollow rest).
- **Test:** cover-rate difference (hollow - solid), null 0; secondary: hollow-home cover upper one-sided
  bound < 52.4%. **n:** ~105/6yr; ~450 full-window. **Expected: +1.5 to +2.5pp fade.**
- **Why novel:** rest counted symmetrically in days; nobody audits the QUALITY of the home team's days.
- **Risk:** three-condition "hollow" definition — pre-register exactly; the solid-rest control is the falsifier.

## L2-3. Bye-Timing Gradient: late bye > early bye [CLEANEST MEASUREMENT]
- **Def:** games with exactly one team off a bye (idle prior week; cross-check rest >= 12). Groups: bye in
  week >= 10 (late) vs <= 6 (early). Outcome: post-bye team ATS.
- **Test:** late-minus-early cover-rate difference, null 0; late group lower 95% CI > 52.4% AND beats early.
  Confirmatory: cover ~ bye-week ordinal with week fixed effects. **n:** ~180/6yr; ~800 full-window.
- **Expected: +1 to +2pp late-vs-early; late-bye absolute ~53-54% ATS.**
- **Why novel:** "good off a bye" is a priced constant; the gradient needs a convex fatigue-accumulation model
  nobody builds. **Risk:** week cutoffs tunable; late-season playoff-motivation confound — pre-register week-FE.

## L2-4. Circadian Zigzag: gross vs net zone displacement
- **Def:** road teams; from trailing-21-day game-site sequence compute signed timezone shifts:
  gross = sum|dzones|, net = |sum dzones|. Zigzag: gross >= 6 and net <= 2 (e.g. ET->PT->ET).
  Control: gross >= 6 and net >= 4 (monotonic drift). Outcome: road-team ATS, residualized on miles.
- **Test:** miles-adjusted cover difference (zigzag - monotonic), null 0. Secondary: cover ~ gross + miles
  + rest regression. **n:** ~300/6yr (~150 zigzag); ~1,300/~650 full-window. **Expected: +1 to +1.5pp fade.**
- **Why novel:** requires 3-week signed-shift arithmetic from site sequences; box-score models never touch it.
- **Risk:** gross/net cutoffs + 21-day window tunable — pre-register; publish full cutoff grid as robustness.

## L2-5. Narrative Overcorrection: the 1pm-ET favorite/dog asymmetry
- **Def:** PT/MT-zone away teams at 1pm ET kickoffs (non-international). Split by spread_line sign:
  away favorite vs away underdog. Estimand is a DiD: (fav cover - dog cover | body-clock spot) -
  (fav cover - dog cover | no body-clock disadvantage).
- **Test:** null DiD = 0; 95% CI excludes 0 with D > D0. Secondary: away-favorite subgroup alone vs 52.4%.
- **n:** ~180/6yr (~55 as favorite); DiD pools full sample. **Expected: +1 to +2pp asymmetry.**
- **Why novel:** exploits the market's pricing of the MAIN effect — market over-shades the narrative underdog
  with extra points while not docking the favorite. **Risk:** subgroup-of-subgroup — the DiD framing is
  the guardrail; pre-register the baseline comparison set.

## L2-6. Sunday->Thursday Travel Gradient (fixed 96-hour window)
- **Def:** Thursday games, both teams' rest in [3,5] days. T=1: away team's prior-Sunday-site ->
  Thursday-site great-circle distance >= 1,500 mi. Control: < 500 mi. Outcome: away-team ATS (expect
  underperformance -> home side). **n:** ~90/6yr (~30 high-travel); full window ~250/~85 (TNF since 2006).
- **Expected: +2 to +3pp fade, wide CIs. Risk:** 1,500-mi cutoff + eastward refinement are free parameters —
  one pre-registered primary cutoff, no searching. Needs lat-lon table.

## L2-7. Post-Altitude Sea-Level Lag x Rest Buffer
- **Def:** team's prior game at altitude >= 5,000 ft (Denver, Mexico City), current game < 1,000 ft.
  Treated: inter-game rest <= 7 days. Control: rest >= 12 (bye buffer). Outcome: post-altitude team ATS.
- **Test:** treated ATS fade-side lower CI > 52.4% AND treated underperforms bye-buffer control.
- **n:** ~85/6yr; ~350 full-window. **Expected: +1 to +2pp fade on the rest interaction.**
- **Why novel:** altitude is a Denver-home constant in models; lagged de-acclimatization reversal x rest
  buffer is unmodeled (folk "fade Denver's visitor" is partially priced — the buffer interaction is the
  unpriced part). **Risk:** small n + tout-narrative contamination; the bye-buffer falsifier is the guardrail.

## L2-8. Sleep-Compression Triple: late finish x eastward travel x 1pm ET
- **Def:** prior game was SNF/MNF (Sunday gametime >= 20:00 ET or Monday) AND travel >= 2 zones east for
  current game AND current kickoff Sunday 1pm ET. T=1 iff all three. Outcome: team's ATS cover.
- **Test:** triple-hit team ATS; falsifier: teams meeting exactly 2 of 3 conditions — compound must beat
  the sum (tests super-additivity). **n:** ~60/6yr; ~250 full-window.
- **Expected: +2 to +3pp fade — sharpest mechanism of the ten, weakest n.**
- **Risk:** triple-condition = garden of forking paths — pre-register all cutoffs plus the 2-of-3 falsifier.

## L2-9. International Travel Asymmetry x Designated Home x Following Bye [CASE-STUDY GRADE]
- **Def:** international games (flag from stadium/location, validated vs known venue list). Higher-burden
  team = larger origin-to-venue zone displacement. Interact with following-week bye (yes/no). Outcome:
  higher-burden team's ATS cover. **n:** ~22/6yr; ~45 full-window.
- **Expected: +2 to +4pp fade, n-starved.** Pre-register as exploratory; require out-of-window confirmation.

## L2-10. Thursday Mini-Bye Asymmetry: rest-gap convexity on short weeks [HYPOTHESIS-GENERATING]
- **Def:** Thursday games where one team's rest >= 10 days and the other's <= 5. Outcome: extended-rest
  team ATS. **n:** ~18/6yr; ~55 full-window. **Expected: +2 to +3pp** (convexity: 10-vs-4 before Thursday
  worth more than same gap mid-season, because Thursday prep is the binding constraint).

---

# LENS 3 — WEATHER / ENVIRONMENT (8 candidates, ranked)

## L3-1. Wind x Deep-Pass Reliance [LENS TOP PICK]
- **Def:** outdoor games only (roof in {outdoors, open}). wind_dosage = max(0, wind_mph - 10) (hinge at 10 mph,
  pre-registered). vert = team season-to-date air_yards per pass attempt (min 60 attempts) - season league mean.
  Compound = wind_dosage x vert. Secondary pre-registered spec adds dome-built-team amplifier
  (dome_home_team x outdoor x wind_dosage x vert); report both, no fishing beyond these two.
- **Data:** schedules (wind, roof, stadium); pbp (air_yards, play_type; filter pass, exclude spikes/throwaways).
- **Test:** team points residual vs closing-total-implied team total (implied = (total +/- spread)/2 by
  fav/dog). OLS: team points ~ implied team total + compound + control for team offensive EPA/play
  season-to-date (so vert can't just proxy "good passing team"). Success: one-sided p<0.05 on NEGATIVE
  coefficient, n>=800 outdoor team-games; secondary: top-quintile compound games hit UNDER >= 55%.
- **n:** ~500 team-games with dosage>0; ~2,120 outdoor team-games total. Adequate.
- **Why novel:** the total shades wind as a flat game-level discount; wind never interacted with
  team-specific vertical tendency, and books do not re-price wind by offensive style.
- **Risk:** vert correlates with offensive quality and dome teams; the EPA control and dome secondary spec
  are load-bearing. **Expected: 0.3-1.0 pts/team-game in high-dosage games.**

## L3-2. Turf->Grass Surface Switch x Pass-Heaviness
- **Def:** surf_switch = 1(team's modal home surface != game surface), restricted to turf-home teams on grass
  (pre-registered direction only). pass_heavy = season-to-date pass rate - league mean. Compound =
  surf_switch x pass_heavy.
- **Test:** team passing EPA/play residual vs spread-implied expectation (control: closing spread + team
  offensive EPA season-to-date). Success: one-sided p<0.05 negative, n>=150 turf->grass team-games;
  magnitude sanity check 0.02-0.05 EPA/play (anything >=0.10 = data error, REJECT).
- **n:** ~150-250 team-games over window. Good.
- **Why novel:** surface is an injury conversation, never an offensive-style efficiency interaction against the
  spread; market prices surface switches at ~zero. **Risk:** switches ride along with away games/travel —
  control for home/away explicitly (or the spread); must not double-count the existing rest/travel signal.

## L3-3. Wind x Kicking-Game Dependence (nonlinear FG collapse)
- **Def:** fg_dep = season-to-date FG attempts per red-zone trip - league mean (min 8 RZ trips).
  wind_k = max(0, wind_mph - 12) (pre-registered 12 mph kink). Compound = wind_k x fg_dep, outdoor games.
- **Test:** team points residual vs implied team total, OLS, one-sided negative p<0.05, n>=400 windy team-games.
  Secondary mechanism check: FG make-rate residual vs distance-implied make probability (simple logistic
  make~distance baseline) for top-tercile fg_dep teams in wind>=15 vs <15.
- **n:** ~400+ team-games. Good.
- **Why novel:** kicking treated as random noise; wind x kicking studied in isolation, never as a team-style
  compound against totals — the uniform wind shade can't capture a nonlinear, team-specific FG collapse.
- **Risk:** fg_dep correlates with bad red-zone offense (already in spread) and dome kickers outdoors —
  include dome x outdoor as control.

## L3-4. Cold Dosage x Dome-Built Team Outdoors
- **Def:** dome = 1(team home roof = dome: MIN, DET, IND, NO, ATL, DAL, HOU, ARI, LV); out = 1(roof in
  {outdoors, open}); cold = max(0, 40 - temp_F). Compound = dome x out x cold (continuous dosage, not binary).
- **Test:** ATS margin residual (actual margin - spread), OLS, one-sided negative p<0.05, n~100-150; hit-rate
  >=56% reported as secondary only (n too small for hit-rate as primary — se~0.045 at n=120 needs ~60%
  for significance; stating this now so a 56% print isn't oversold).
- **n:** ~100-150. **Why novel:** "dome teams in cold" is binary folk wisdom; nobody uses continuous cold
  dosage x dome construction, and books shade cold uniformly rather than by team build.
- **Risk:** dome teams cluster in warm climates and late-season scheduling; control for week/month or cold
  just proxies December.

## L3-5. Precipitation x Giveaway Rate [EXPLORATORY — external fetch]
- **Def:** precip = inches during gametime +/-3h. give = season-to-date giveaways (INT + fumbles lost) per
  offensive drive - league mean (min 4 games). Compound = precip x give.
- **Data:** NOT in snapshot. Fetch plan: Open-Meteo historical/archive API (free, no key) keyed by stadium
  lat/lon (geocode ~30 stadiums once, cache) x game date; hourly precipitation + weathercode. pbp: turnovers,
  drives. In-game weather changes unobservable — use window total.
- **Test:** team points residual vs implied team total, one-sided negative p<0.05 (pre-registered direction:
  wet ball kills the sloppy team's own drives; do not test both directions). n~300-400 team-games in precip.
- **n:** meaningful precip ~10-15% of games (~150-200 games). **Risk:** precip correlates with wind/cold —
  include both as controls; give is extremely noisy before week 5.

## L3-6. Altitude x Visitor Tempo -> Second-Half Fade [EXPLORATORY]
- **Def:** den = 1(home_team = DEN); vtempo = visitor season-to-date plays per minute of possession - league
  mean (min 3 games). Compound = den x vtempo. Mechanism: fast visitors gas out at altitude late.
- **Test:** visitor Q3+Q4 points vs expectation (expected 2H = 1H x league 2H/1H ratio, within-game).
  One-sided negative p<0.05. USE FULL 1999-2025 SNAPSHOT (pre-registered): ~8 DEN home games/yr x 27 yrs
  ~ 200 games; the 2020-25 window alone (n~50) is underpowered and will not be claimed.
- **Why novel:** altitude priced as generic Denver HFA; nobody interacts it with the visitor's tempo, and
  second-half splits are underused. **Risk:** DEN team quality varies by era; tempo correlates with
  offensive quality — control for spread.

## L3-7. Heat x Tempo, September Only [EXPLORATORY]
- **Def:** September games only; heat = max(0, temp_F - 85); tempo = combined plays/min trailing 4 games
  (incl. prior season for September stability) - league mean. Compound = heat x tempo.
- **Test:** total points residual vs closing total, one-sided negative p<0.05, n~150-200 hot September games;
  secondary: UNDER hit rate in top-tercile compound games >= 56%.
- **Why novel:** heat barely priced at all (September totals discourse is about rust, not thermoregulation).
- **Risk:** hot games cluster in a few warm-climate home teams (MIA/TB/JAX/ARI) — control for spread/total;
  early-season tempo noisy — attenuation bias toward zero, so a null here is weak evidence.

## L3-8. Cross-Climate Travel Shock x Pass Reliance [EXPLORATORY, secondary to L3-4]
- **Def:** shock = max(0, home_climate - game_temp) where home_climate = team's rolling-3yr mean September
  home gametime temp; pass_rely = season-to-date pass rate - league mean. Compound = shock x pass_rely for
  the traveling team. Pre-registered cold-shock direction only.
- **Test:** ATS margin residual, one-sided negative p<0.05, n~80-120 team-games with shock>=20F.
- **Why novel:** travel priced as distance/rest; nobody prices the thermometer delta interacted with
  offensive style — extends L3-4 to warm-climate outdoor teams (MIA/TB/JAX), not just dome teams.
- **Risk:** overlaps L3-4 (dome teams are a subset of high-shock travelers) — pre-register a JOINT spec
  with both and report whether L3-8 adds anything beyond L3-4; standalone it's at high risk of double-counting.

---

# LENS 4 — MARKET MICROSTRUCTURE (10 candidates, ranked)

## L4-1. Cross-Market Shading Divergence [LENS TOP PICK]
- **Def:** per game, no-vig favorite win prob from closing moneylines (p_ml: raw probs from
  home/away_moneyline, vig removed by normalization) and from closing spread_line via probit with sigma=13.45
  (p_spread = Phi(|spread|/13.45) for the favorite). Divergence D = p_ml - p_spread. Signal: D > +0.025 ->
  bet the UNDERDOG ATS at the closing spread.
- **Data:** schedules columns spread_line, home_moneyline, away_moneyline ONLY. Fully testable TODAY,
  zero external data.
- **Test:** dog ATS cover rate when D>+0.025; one-sided binomial vs 50%, success p<0.05 pooled 2020-2025,
  n>=300. Sensitivity grid (sigma in {13,14}, threshold in {0.02,0.03}) reported as robustness ONLY, not
  for threshold selection.
- **n:** |D|>2.5% in ~15-25% of games -> ~250-400 in-window. Highest-n candidate on the list.
- **Friction:** book risk management — books shade PRICES against expected public liability rather than
  posting true probabilities. D>0 means the book made the favorite's ML shorter than its own spread implies
  = revealed-preference proof the public is heavy on the favorite. Single-factor "fade the public" has no
  measure of HOW MUCH the book shaded; the compound quantifies it and fires only on large events.
- **Why novel:** requires per-game no-vig cross-market math; bettors and most models consume one price and
  never audit the book's internal consistency.
- **Non-duplication:** engine's "book agreement" gate is ACROSS books; this is WITHIN-book cross-MARKET.
  Engine's "market movement" gate needs intraday data; this uses the closing snapshot only.
- **Risk:** 2.5% threshold and sigma=13.45 are researcher DOF; pre-registered sensitivity grid is the only
  defense — if the edge exists only at exactly (0.025, 13.45), it's noise. **Expected: 1-3pp dog cover edge.**

## L4-2. Sandwich x Line-Stickiness (unadjusted lookahead)
- **Def:** favorite of -4 or more faces opponent with season-to-date win pct <= .350, while favorite's previous
  AND next opponents both sit at win pct >= .650 (min 4 games) — the classic sandwich — AND
  |closing spread - fundamental spread| <= 2.0 (market demonstrably did NOT discount the spot).
  Signal: fade the favorite ATS.
- **Fundamental spread (pre-registered benchmark, NOT a team-strength model):** 2.0 (HFA) + (home trailing
  avg margin - away trailing avg margin, up to 4 games).
- **Test:** dog ATS cover rate; success = one-sided p<0.05 pooled 1999-2025, OR directional consistency in
  both era splits with pooled p<0.10 (flagged exploratory). **n:** ~40-60 in-window; ~150-250 pooled.
- **Friction:** limited attention — schedule context can't be encoded in a power rating; public bets the
  favorite regardless of calendar. Sandwich-alone is folk wisdom (partially arbitraged); the stickiness leg
  verifies from the RESIDUAL that the market actually slept, isolating unpriced from priced spots.
- **Risk:** sandwich cutoffs (.350/.650), -4 floor, 2.0 residual band multiply DOF; exact pre-registration
  is load-bearing. NOTE: overlaps L5-1 (trap game) — different definitions; test separately, pre-register
  NO merging of cells.

## L4-3. Post-Blowout Overreaction Residual
- **Def:** team won previous game by >=20 points AND this week's closing spread >=3.0 points more favorable
  to them than fundamental (residual in winner's favor). Signal: fade the blowout winner ATS.
- **Test:** opponent ATS cover rate; success = one-sided p<0.05 pooled 1999-2025, n>=250 (~60-80 in-window
  after residual filter).
- **Friction:** public recency bias + book liability shading toward the popular blowout winner. "Fade all
  blowout winners" mixes priced and unpriced cases; the compound (margin magnitude x MEASURED pricing
  residual) fires only where the market charged for the recency.
- **Risk:** the entire novelty claim rests on the residual leg — run a two-leg ablation and require the
  residual leg to carry significance alone.

## L4-4. Upcoming Schedule-Disruption Flat Spot for Big Favorites
- **Def:** favorite of -7 or more (either side) whose NEXT game is <=4 days later (Thursday upcoming) OR who
  has a bye the following week (UPLOOK=1; from team schedules). Signal: fade the favorite ATS (flat start /
  vanilla gameplan / starters pulled early -> backdoor covers).
- **Test:** dog ATS cover rate; success = one-sided p<0.05 on 2020-2025 alone (n~150-210, adequate without
  pooling); 1999-2019 as confirmation split.
- **n:** ~25-35 qualifiers/season. Best in-window n of any situational candidate.
- **Friction:** limited attention — no power rating or public handicapper prices week t+1's calendar into
  week t's line; books have no incentive to (handle is on week t).
- **Risk:** two distinct mechanisms (short-rest preservation vs bye-week checkout) bundled in one OR flag —
  pre-register the OR but report the two subgroups separately.

## L4-5. Divisional Home Dog x Rest Asymmetry (subpopulation rest mispricing)
- **Def:** divisional game + home team underdog of +3 or more (home-perspective spread_line >= +3) + home
  rest advantage >= 4 days (typically bye vs non-bye). Signal: bet the home dog ATS.
- **Test:** home-dog ATS cover rate; success = directional consistency across both era splits, pooled
  one-sided p<0.05 (n~200-300 pooled); exploratory if pooled p in [0.05, 0.10].
- **Friction:** uniform book adjustments — books apply one league-wide rest bump, but rest converts to points
  mainly through extra install/scouting, which matters most in LOW-VARIANCE divisional games where familiarity
  already compresses talent gaps. The engine's generic rest/travel gate is blind to this subpopulation.
- **Risk:** small n under a three-leg filter; pre-register exactly, no substitutions after seeing results.

## L4-6. Primetime Spotlight Tax (window x magnitude)
- **Def:** standalone primetime window (Thu/Sun/Mon night from weekday+gametime; verify columns; holiday
  special windows pre-registered OUT) + favorite of -7 or more. Signal: fade the favorite ATS.
- **Test:** dog ATS cover rate; success = one-sided p<0.05 pooled 1999-2025, n>=200 (~60-85 in-window).
- **Friction:** public bias + book liability — recreational money floods standalone windows and concentrates
  on big favorites; shading scales with expected public volume. Primetime-alone is folklore; the compound
  (window x SPREAD MAGNITUDE) isolates where the liability — and hence the shading tax — is largest.
- **Risk:** window definitions and -7 cutoff flexible; any post-hoc inclusion of holiday/special windows
  is disqualifying.

## L4-7. QB Discontinuity x Mobile-Backup Mispricing [EXPLORATORY]
- **Def:** NEWSTARTER (this week's starter != team's modal starter over trailing 8 weeks, from pbp/rosters;
  rookie debuts count) AND RUNNER (new starter's scramble + designed-rush rate per dropback above league
  median, min 50 dropbacks trailing season/career) AND LINEHIT (closing spread >=4.5 points worse for the
  team than its trailing-4-week average closing spread). Signal: bet the new starter's team ATS.
- **Test:** team ATS cover rate; success = directional consistency both eras, pooled one-sided p<0.10;
  flagged EXPLORATORY regardless (n~40-70 in-window; ~200-300 pooled). Exactly ONE direction pre-registered —
  no flipping ex post.
- **Friction:** mid-week QB-injury adjustments are rule-of-thumb numbers built for pocket passers; a mobile
  backup breaks the adjustment model. LINEHIT confirms the market applied the generic discount rather than
  pricing the specific player.
- **Risk:** small n, noisy rushing splits for backups, genuinely uncertain direction — any "significant"
  result is hypothesis-generating, not a betting signal.

## L4-8. Total Anchoring x Neutral-Script Tempo Regime Shift
- **Def:** ANCHORED (|closing total_line - mean of the two teams' trailing-4 closing totals| <= 1.5 — the
  market repriced nothing) AND TEMPO SHIFT (combined trailing-3-week neutral-script seconds-per-play —
  win prob 20-80%, quarters 1-3 — >=1 sigma faster OR slower than the teams' season average).
  Signal: bet OVER (or UNDER) with the shift direction at the closing total.
- **Test:** total hit rate vs closing total (pushes excluded); success = one-sided p<0.05 pooled 1999-2025,
  n>=250 (~30-45/season across both tails; ~1,000+ pooled).
- **Friction:** thin sharp attention on totals — books largely copy lookahead totals with minimal updating
  (anchoring); the public bets reputation-tempo. The compound joins them to find exactly the games where the
  number provably didn't move but the underlying pace regime did.
- **Risk:** tempo metric choice and sigma threshold are researcher choices; pre-register exactly ONE metric
  (neutral-script seconds per play) and report alternatives as robustness appendix, not a selection menu.

## L4-9. Divisional Rematch Blowout-Regression Anchor [EXPLORATORY]
- **Def:** second divisional meeting of a season (home/away flipped) where the team that lost the first
  meeting by >=17 points is STILL a closing underdog of +7 or more. Signal: bet that dog ATS.
- **Test:** dog ATS cover rate; directional consistency both eras, pooled one-sided p<0.10, exploratory only
  (~40-60 in-window; ~200 pooled).
- **Friction:** availability anchoring + liability shading toward the proven winner; divisional rematches are
  where familiarity most compresses true talent gaps.
- **Risk:** 17-point and +7 cutoffs tunable on small n — highest false-discovery risk on this list; any hit
  is a hypothesis, never a gate input.

## L4-10. Intraday Steam-vs-Ticket Divergence [PARKED — external data; NOT testable on snapshot]
- **Def:** final 6 hours before kickoff, line moves >=1.5 points toward a team while that team holds <35%
  of tickets. Signal: follow the steam side ATS.
- **Fetch plan (honest):** historical multi-book movement — SportsOddsHistory.com archived downloads
  (~$150-300 one-time; verify ToS); ticket/bet splits — NO public historical archive exists (Action
  Network PRO / SportsInsights sell current splits only, no backfill) -> historical backtest IMPOSSIBLE;
  only prospective collection (the-odds-api ~$50-500/mo + splits feed) over 12-24 months.
- **Verdict: cannot be tested today; do not build on until prospective data exists.** Pure "steam chasing"
  alone duplicates the engine's market-movement gate — the compound's novelty is strictly the divergence leg.

---

# LENS 5 — NARRATIVE / SCRIPT (10 candidates, ranked)

## L5-1. Lookahead Inversion (trap game) [LENS TOP PICK]
- **Def:** TRAP=1 iff ALL hold: (a) one team favored by >=6.5 (|spread_line| >= 6.5); (b) underdog's win pct
  entering < .350 (min 4 games); (c) favorite's NEXT-week opponent has win pct >= .650 entering that week OR
  is a divisional opponent within 2 games in the standings; (d) favorite does not have a bye next week;
  (e) favorite is not itself off a bye this week. Mechanism: preparation-allocation — staff/players game-plan
  the big one; market prices the talent gap, not the preparation gap.
- **Data:** schedules only (spread_line, scores -> win pct week-over-week, div_game, next-week join).
  No external fetch.
- **Test:** underdog ATS cover rate in TRAP=1; H0 = 50%; success: one-sided binomial p<0.05, n>=120,
  point estimate >= 55%. Robustness (secondary): difference vs control cell (same (a)+(b), next opponent
  NOT big) >= +4pp for the underdog.
- **n:** ~20-35 qualifiers/season -> ~120-210 over 2020-2025. Best-powered candidate on this list.
- **Why novel:** trap-game talk is folk wisdom; nobody interacts spread magnitude x current-opponent
  weakness x a PROSPECTIVE next-opponent-strength definition x bye-exclusion with a preparation-allocation
  mechanism.
- **Risk:** the 6.5/.350/.650 cutoffs are round-number researcher DOF — pre-register exactly and report
  +/- sensitivity as secondary only. NOTE: overlaps L4-2 (sandwich) — different definitions; test separately,
  pre-register NO merging.

## L5-2. Milestone Force-Feed -> Play-Call Predictability -> Offensive Underperformance
- **Def:** MILESTONE=1 iff a team's skill player enters within a milestone window from pbp-aggregated
  season-to-date totals: <=100 yards short of next 500-yard increment (receiving or rushing), <=10 receptions
  short of next 50-increment, or <=3 TDs short of next 10-increment; player active (snapped previous week).
  Mechanism (explicitly beyond the incentive gate): force-feed narrows the play-call distribution ->
  conditional entropy of play call given (down, distance, score state) drops -> defense anticipates ->
  offensive EPA/play falls. Secondary mechanism check (not part of flag): player's first-half target/carry
  share vs season baseline; play-call entropy vs trailing 8-game baseline.
- **Test:** team scores UNDER its implied team total (from spread_line + total_line), binary; H0 = 50%;
  success: one-sided p<0.05, n>=120, point estimate >= 55% under-rate. Secondary: offensive EPA/play delta
  vs trailing 8-game mean < 0, one-sided t-test, team-clustered SEs.
- **n:** ~25-40 player-games/season -> ~150-240. Pre-register collapse rule: first qualifying week per
  player-milestone only (windows persist 2-3 weeks; cluster-robust SEs otherwise).
- **Why novel:** milestone chases are broadcast fodder; nobody interacts milestone-proximity x MEASURED
  play-call entropy compression x defensive anticipation with a pre-registered directional test.
- **Risk:** milestone windows (100/10/3) invite post-hoc tuning; chases cluster late-season when starters
  rest or teams have clinched — run a team-FE robustness check.

## L5-3. Backup-QB x Elite Defense -> Conservative Script -> Under [EXPLORATORY]
- **Def:** SHELL=1 iff: (a) starting qb_id differs from that team's prior-week starter (in-season change
  only; Week 1 excluded); (b) that team's defense ranks top-10 in EPA/play allowed over trailing >=4 games
  (pbp-aggregated); (c) total_line >= 41 (exclude already-shaded totals). Mechanism: staff installs a
  low-variance script to protect the backup; market prices "backup = linearly worse offense" instead of
  "backup + good defense = slower, lower-possession game." Mechanism check: early-down run rate vs baseline.
- **Test:** UNDER hit rate vs total_line; H0 = 50%; success: one-sided p<0.10, n>=40, point estimate
  >= 57% under-rate. Exploratory: powered only for large effects.
- **n:** ~40-50 over window. **Risk:** top-10 and total>=41 cutoffs tunable; small n — pre-register
  leave-one-season-out stability as secondary.

## L5-4. Unknown-Backup Debut x Standalone Window (overreaction timing + decay) [EXPLORATORY]
- **Def:** UNKNOWN_DEBUT=1 iff: (a) starter's qb_id differs from prior week (in-season) or Week 1 starter has
  <2 career regular-season starts (from 1999-2025 schedules); (b) career starts < 2 ("unknown" information
  state); (c) standalone/primetime window: weekday in {Thursday, Monday} OR gametime >= 20:00 ET.
  The compound includes the TIMING leg: same QB's starts 2-3 are the decay test — edge present at start 1,
  gone by starts 2-3 as tape exists. Mechanism: attention amplifies narrative; market over-shades the spread
  against unknowns in week 1, then corrects.
- **Test:** ATS cover rate for underdog UNKNOWN_DEBUT teams; H0 = 50%; success: one-sided p<0.10, n>=60,
  point estimate >= 57%. Secondary: starts-2-and-3 cover rate NOT elevated (directional decay check).
- **n:** ~50-75 over window. **Risk:** <2-starts cutoff and primetime definition are DOF on a small sample —
  pre-register both exactly.

## L5-5. Post-Bye x Coach Tenure x Opponent Quality
- **Def:** BYE_PREP=1 iff: (a) team had no game prior week (bye from schedules); (b) head coach tenure with
  that team >= 4 seasons (from 1999-2025 schedules coach-name aggregation); (c) opponent win pct entering
  >= .550 ("statement" spot). Goes beyond the rest/travel gate: rest's value is CONDITIONAL on staff quality
  x opponent seriousness. Mechanism: experienced staffs convert extra prep into scheme advantages; young
  staffs waste it; quality opponents prevent sleepwalking.
- **Test:** primary (powered): logistic interaction on ALL post-bye games (n~190): cover ~ bye_tenured x
  quality_opp; success = interaction coefficient > 0 at p<0.05. Secondary: BYE_PREP cell cover >= 56%
  (n~40-50, exploratory).
- **Risk:** tenure>=4 and opp>=.550 cutoffs tunable and cell small — the interaction spec (not the cell rate)
  is the pre-registered claim.

## L5-6. Thursday Complexity Crunch (short week x big spread x division x road favorite) [THIN]
- **Def:** THU_CRUNCH=1 iff: (a) weekday == 'Thursday'; (b) |spread_line| >= 6.5; (c) div_game == 1;
  (d) the FAVORITE is the away team. Mechanism: 3-day prep compresses installable scheme complexity;
  favorites depend on scheme volume more than underdogs; division familiarity compresses talent gaps; road
  travel on short rest compounds it. Market prices the talent gap, not the complexity gap.
- **Test:** underdog ATS cover rate; H0 = 50%; success: one-sided p<0.05, n>=60, point estimate >= 57%.
  Control: include rest-days differential as covariate — claim must survive it (rest/travel is a gate input).
- **n:** ~30-45 over window. **Risk:** Thursday samples structurally weird (Thanksgiving, bad teams on short
  rest); the road-favorite filter looks post-hoc — pre-register exactly; treat Thanksgiving as a
  pre-registered exclusion sensitivity check.

## L5-7. Coach Revenge: Fired x Year-1 x Tenure Depth [EXPLORATORY — external fetch]
- **Def:** REVENGE=1 iff head coach faces a franchise where he was previously HEAD COACH and: (a) departure
  was a FIRING (not resignation/retirement/expiry); (b) within first 2 seasons since departure (familiarity
  decays as rosters churn); (c) his tenure at the former team was >= 2 seasons. Mechanism: motivation +
  mutual scheme familiarity -> preparation intensity edge.
- **Data:** schedules (away/home_coach, teams) + EXTERNAL: pro-football-reference coach register pages
  (structured year-by-year tables) for HC-team pairs; departure type coded from contemporaneous reporting,
  done BLIND to outcomes, with written coding rules (fired = team announced dismissal; mutual/contract-expiry
  = not fired; pre-register tie-break for "resigned under pressure").
- **Test:** revenge-team ATS cover rate; H0 = 50%; success: one-sided p<0.10, n>=40, point estimate >= 58%.
  **n:** ~30-40 over window. **Risk:** departure-type coding is subjective and n small — coding rules written
  before outcomes are viewed.

## L5-8. Hype-Index Rematch: Playoff/SB Rematch x Primetime -> Shaded Total -> Under [THIN]
- **Def:** HYPE_REMATCH=1 iff: (a) the two teams met in the previous season's postseason
  (schedules_{yr-1} game_type == 'POST'; includes SB and conference championships); (b) they meet in the
  current regular season; (c) primetime/standalone window. Mechanism: storyline attention inflates
  recreational over-money -> books shade the total upward; plus mutual familiarity compresses
  explosive-play variance. Direction: UNDER elevated.
- **Test:** UNDER rate vs total_line; H0 = 50%; success: one-sided p<0.10, n>=50, point estimate >= 57%.
  Secondary (pre-registered): SB/CCG rematches only — smaller n, descriptive.
- **n:** ~25-35 over window. **Risk:** tiny n; pooling wild-card rematches (low hype) with SB rematches
  dilutes the mechanism — SB/CCG-only secondary pre-registered so it can't be cherry-picked ex post.

## L5-9. Backup-QB Emotional-Win Letdown (the feel-good tax) [THIN]
- **Def:** LETDOWN=1 for a team's NEXT game iff: (a) previous game was a "dramatic" win: OT win, OR
  4th-quarter comeback from min win-probability < 0.15 (wp from pbp), OR game-winning score in final 0:40
  (pbp scoring plays); (b) the QB who took the majority of snaps in that win was NOT the team's Week 1
  starter; (c) current-game |spread_line| <= 7 (market actually engaged with the narrative).
  Mechanism: emotional exhaustion + preparation comedown; market overweights the feel-good result and
  underweights backup true skill + regression. Direction: team FAILS to cover.
- **Test:** ATS cover rate in the letdown game; H0 = 50%; success: one-sided p<0.10 (cover < 50%), n>=40,
  point estimate <= 43%. **n:** ~35-45 over window. **Risk:** wp<0.15 and 0:40 cutoffs arbitrary; mid-game
  QB-injury cases blur the backup definition — pre-register the majority-snaps rule exactly.

## L5-10. Debut Stage Pressure: First-Career-Start x Primetime x Home -> Team-Total Under [HYPOTHESIS-ONLY]
- **Def:** DEBUT_STAGE=1 iff: (a) starting QB has 0 career regular-season starts (1999-2025 schedules
  aggregation); (b) primetime/standalone window; (c) home game. Distinct from L5-4: different estimand
  (team total, not spread) and mechanism — stage pressure -> conservative play-calling + execution errors ->
  team underperforms implied total.
- **Test:** team goes UNDER implied team total; H0 = 50%; success: under-rate >= 60%, one-sided p<0.10,
  n>=30. **n:** ~15-25 over window. Very small n with three compounding filters — any "finding" here is
  hypothesis generation, not evidence; do not let it near a model weight without independent replication.

---

# CROSS-LENS RANKING (expected edge x testability)

Ranked on: testable today on snapshot (no external fetch) > n > mechanism clarity > novelty of compound.
Honest expected true effects in parentheses.

1. **L4-1 Cross-market shading divergence** (1-3pp dog cover; n~250-400; closing lines only; cleanest friction)
2. **L1-1 Rookie-wall x opponent rest fade** (1-2% cover; n~150-240; fully in-snapshot)
3. **L3-1 Wind x deep-pass reliance** (0.3-1.0 pts/team-game; n~500+ team-games; strongest physical prior)
4. **L5-1 Lookahead inversion (trap game)** (1-2% cover; n~120-210; schedule-only)
5. **L2-1 Multiplicative fatigue (body-clock x rest)** (1-2pp; n~130; interaction-coefficient falsifier)
6. L4-4 Upcoming schedule-disruption flat spot (1-2pp; n~150-210; schedule-only)
7. L4-8 Total anchoring x tempo regime shift (totals edge; n~200-270 in-window; pbp tempo build)
8. L5-2 Milestone force-feed -> under (totals edge; n~150-240; entropy mechanism check)
9. L2-3 Bye-timing gradient (1-2pp late-vs-early; n~180; cleanest measurement in lens 2)
10. L2-2 Hollow home rest (1.5-2.5pp fade; n~105; quality-of-rest audit)
11. L3-2 Turf->grass x pass-heaviness (0.02-0.05 EPA/play; n~150-250)
12. L1-2 Revenge-starter x primetime (1-2%; n~60-120; underpowered)
13. L4-2 Sandwich x line-stickiness (~needs pooled window; n~40-60 in-window)
14. L4-3 Post-blowout overreaction residual (~needs pooled; two-leg ablation required)
15. L3-3 Wind x kicking-game dependence (nonlinear FG collapse; n~400+)
16. L4-5 Divisional home dog x rest asymmetry (subpopulation rest mispricing; n~200-300 pooled)
17. L4-6 Primetime spotlight tax (window x magnitude; n~60-85 in-window)
18. L2-4 Circadian zigzag (gross vs net zone displacement; n~300 incl. controls)
19. L3-4 Cold dosage x dome-built team outdoors (continuous dosage; n~100-150)
20. L1-3 Narrative stack index (pooled rare-event index; n~90-150; high DOF)
21. L5-5 Post-bye x coach tenure x opponent quality (interaction spec; n~190 post-bye games)
22. L2-5 Narrative overcorrection DiD (1pm-ET fav/dog asymmetry; n~180)
23. L1-4 Career-milestone spotlight x primetime (0.5-1.5%; honest chance of zero)
24. L2-6 Sunday->Thursday travel gradient (n~90)
25. L4-7 QB discontinuity x mobile-backup mispricing (exploratory; n~40-70)
26. L2-7 Post-altitude sea-level lag x rest buffer (n~85)
27. L5-3 Backup-QB x elite defense -> under (n~40-50)
28. L5-4 Unknown-backup debut x standalone window (n~50-75)
29. L3-5 Precipitation x giveaway rate (external fetch required)
30. L1-6 College-homecoming road compound (n~50-90; underpowered)
31. L3-6 Altitude x visitor tempo 2H fade (full-window only)
32. L5-6 Thursday complexity crunch (n~30-45)
33. L2-8 Sleep-compression triple (n~60; sharpest mechanism, weakest n)
34. L3-7 Heat x tempo September (n~150-200; attenuation risk)
35. L3-8 Cross-climate travel shock x pass reliance (joint spec with L3-4 required)
36. L5-8 Hype-index rematch -> under (n~25-35)
37. L5-7 Coach revenge fired x year-1 x tenure (external fetch; n~30-40)
38. L5-9 Backup-QB emotional-win letdown (n~35-45)
39. L1-7 Benched-QB reinstatement x home (n~20-45; injury-data contamination)
40. L2-9 International travel asymmetry (n~22; case-study grade)
41. L1-8 Coach record-watch x home (n~15-35)
42. L2-10 Thursday mini-bye asymmetry (n~18; hypothesis-generating)
43. L5-10 Debut stage pressure (n~15-25; hypothesis-only)
44. L4-9 Divisional rematch blowout-regression anchor (highest false-discovery risk)
45. L1-5 Birthday-week skill starter [FALSIFICATION ANCHOR — expected ~0; run as null control]
46. L4-10 Steam-vs-ticket divergence [PARKED — no historical splits data; prospective collection only]

---

# TOP-5 PILOT SHORTLIST — FULL PRE-REGISTRATION SPECS (lab-executable)

## Pilot 0 (infrastructure, runs first): coding-convention verification + null control
- Verify `spread_line` sign convention against one widely-reported line; verify `gametime` format and
  `game_type`/`POST` coding; pre-register pushes-excluded and vig-removal normalization.
- Run **L1-5 (birthday-week skill starter)** as the falsification anchor: two-sided tests, expected ~0.
  If it "hits," halt the pilot and debug the pipeline (birthday parsing, primetime classification)
  before trusting any other result.
- Build-once static tables: 32-team IANA timezone table (needed by Pilot 3).

## PILOT 1: L4-1 Cross-market shading divergence
- **Frozen definition:** per game 2020-2025 regular+postseason: p_ml = no-vig favorite win prob from
  closing home/away_moneyline (raw probs normalized); p_spread = Phi(|spread_line|/13.45) for the favorite;
  D = p_ml - p_spread. Signal games: D > +0.025 -> bet UNDERDOG ATS at closing spread.
- **Estimand:** underdog ATS cover rate in signal games. **Baseline (null):** 50%.
- **Success:** one-sided binomial p < 0.05, pooled 2020-2025, n >= 300. Expected true edge 1-3pp.
- **Pre-registered robustness:** sensitivity grid sigma in {13,14}, threshold in {0.02,0.03} reported ONLY
  as robustness, never for threshold selection. If the edge exists only at exactly (0.025, 13.45), it is noise.
- **Falsifier:** the reverse signal (D < -0.025 -> bet favorite) must NOT show a symmetric edge;
  if it does, the "shading" story is wrong and the result is a spread/ML calibration artifact.
- **Sequencing:** run FIRST — cheapest to build (three columns), highest n, most decisive.

## PILOT 2: L1-1 Rookie-wall x opponent rest fade
- **Frozen definition:** treatment game = ALL of: (a) starting QB rookie_year == season (join schedules
  away/home_qb_id to rosters gsis_id), OR rookies (years_exp == 0) > 25% of team offensive snaps over
  prior 3 weeks (pbp snaps x rosters_weekly); (b) week >= 11; (c) opponent rest advantage >= 3 days
  (away_rest/home_rest differential). Population: 2020-2025 regular season. Signal: FADE the treated team.
- **Estimand:** opponent ATS cover rate. **Baseline:** 50%.
- **Success:** one-sided binomial p < 0.05, pooled n >= 150, point estimate > 52.4%.
- **Secondary (guardrail):** mean margin residual (actual margin - spread, treated-team perspective) < -0.5 pts,
  one-sided t-test — protects against the bad-teams-start-rookies endogeneity.
- **No post-hoc spec shopping:** exactly ONE spec (the frozen one). Week-10 vs 11, rest-3 vs 7, snap-25% vs
  30% variations are forbidden as primary; may be reported as robustness appendix only.

## PILOT 3: L3-1 Wind x deep-pass reliance
- **Frozen definition:** outdoor games only (roof in {outdoors, open}). wind_dosage = max(0, wind_mph - 10).
  vert = team season-to-date air_yards per pass attempt (min 60 attempts) - season league mean (from pbp;
  filter pass plays, exclude spikes/throwaways via pbp flags). Compound = wind_dosage x vert.
- **Estimand:** team points residual vs closing-total-implied team total (implied = (total_line +/- spread_line)/2
  by favorite/dog). **Baseline:** OLS team points ~ implied team total (coefficient on compound = 0 under null).
- **Success:** one-sided p < 0.05 on NEGATIVE compound coefficient, n >= 800 outdoor team-games.
- **Controls (load-bearing):** team offensive EPA/play season-to-date (vert must not proxy "good passing team").
- **Secondary (pre-registered, no fishing beyond):** (a) dome_home_team x outdoor x wind_dosage x vert added;
  (b) top-quintile compound games hit UNDER at >= 55%. Report both specs; no others.
- **Magnitude sanity:** expect 0.3-1.0 pts/team-game at high dosage. Anything implying >= 3 pts = data error, reject.

## PILOT 4: L5-1 Lookahead inversion (trap game)
- **Frozen definition:** TRAP=1 iff ALL of: (a) |spread_line| >= 6.5; (b) underdog season-to-date win pct
  < .350 (min 4 games played); (c) favorite's NEXT-week opponent win pct >= .650 entering that week OR
  divisional opponent within 2 games in the standings; (d) favorite has no bye next week; (e) favorite not
  off a bye this week. Signal: bet the UNDERDOG ATS.
- **Estimand:** underdog ATS cover rate in TRAP=1 games. **Baseline:** 50%.
- **Success:** one-sided binomial p < 0.05, pooled n >= 120, point estimate >= 55%.
- **Secondary robustness:** difference vs control cell (same (a)+(b), next opponent NOT big) >= +4pp for the
  underdog. Sensitivity on 6.5/.350/.650 reported as secondary only — the frozen cutoffs are the claim.
- **Overlap guard:** L4-2 (sandwich) is a DIFFERENT definition; pre-register no merging of cells.

## PILOT 5: L2-1 Multiplicative fatigue (body-clock kickoff x rest deficit)
- **Frozen definition:** non-international regular-season games, 2020-2025; exclude same-city stadium shares
  (NY/LA). Away body-clock kickoff = gametime converted to away team's home IANA timezone (date-aware DST;
  Cardinals = America/Phoenix, no DST). T=1 iff (away body-clock kickoff <= 11:00) AND (away_rest - home_rest
  <= -2). Signal: bet the HOME team ATS.
- **Estimand (confirmatory):** interaction coefficient in logistic regression of home cover on
  body-clock-disadvantage + rest-differential + their interaction. **Baseline:** interaction = 0 (additive
  priced main effects explain everything).
- **Success:** interaction coefficient > 0, one-sided p < 0.05, pooled 2020-2025 (n ~ 130 treated).
- **Honest power statement (pre-registered):** the 6-year window can only exclude effects >= ~+7pp; a true
  +1.5pp edge is ~40% powered here. Correct sign + >=1pp estimated effect PROMOTES this candidate to the
  full 1999-2025 confirmation window (n ~ 380 treated); it does not constitute evidence on its own.
- **Secondary:** home ATS cover rate in T=1 games, one-sided 95% lower CI > 52.4%.
- **Falsifier:** the two main effects estimated alone must be small (they're priced); if the interaction is
  significant but a main effect alone explains it, the "multiplication" story fails.

## Pilot sequencing and promotion rules
1. Pilot 0 (conventions + null control) -> Pilot 1 (cheapest, highest n) -> Pilot 2 -> Pilot 3 -> Pilot 4 -> Pilot 5.
2. Any candidate printing >= 5pp cover edge or >= 60% hit rate in-window is flagged as probable data bug;
   halt and audit the join/convention before celebrating.
3. Correct-sign + >=1pp candidates with n < 300 in-window are PROMOTED to the 1999-2025 confirmation window,
   not declared.
4. All nulls reported. Holm-adjusted p-values alongside raw for the five confirmatory claims.
5. If Pilot 0's null control (L1-5) deviates from ~0, the whole pilot's results are quarantined.

## The single riskiest assumption in the whole set
**That a true +1 to +2pp edge exists at all in closing lines for publicly-observable schedule, biographical,
weather, and cross-market facts.** Every candidate bets that the market prices main effects but leaves
interactions unpriced — but books DO shade for many of these main effects, and the discovery window
(2020-2025, n ~ 120-400 per candidate) can only rule out LARGE effects. Per the power math, even a real
+2pp edge is undetectable at 80% power in-window for all but the highest-n candidates (L4-1, L3-1); the
rest are sign-and-magnitude estimates awaiting the full-window confirmation. If closing lines are efficient
down to ~1pp on interactions too, the entire universe is null — and the pilot is designed to say so honestly.
