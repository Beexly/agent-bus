# TNF Intelligence Program — Player Behavioral Profiles & Coaching Tendencies

**Created:** 2026-10-01, during Steelers @ Browns TNF
**For:** Coding agent — pick up AFTER the codebase audit completes. Do not confuse with audit work.
**Source:** Garrett's live directives + tonight's game as catalyst. This is a research-to-data program, not a refactoring task.

---

## 1. Why this exists

Tonight's card missed on the pressure-funnel stack (Watson under, game under, Watt sacks) because the analysis was stat-deep but intelligence-shallow. Garrett diagnosed the gap in real time:

- Roman Wilson hit (61 yds, TD at half) on a read Garrett had **last week**: usage trending up (3-5-7 receptions), Pittman out, and — the deep piece — **Rodgers' decade-long pattern of fixating on receivers he trusts** (Adams, Nelson, Cobb), plus a viral video of Rodgers burying Metcalf ("this mfer sucks ass"). Process of elimination left Wilson as the last man in the trust circle.
- The corrective: intelligence must be **player-specific and deep**, not category-based. "Veteran QB" predicts nothing (Case Keenum counterexample: came in cold, spread the ball, dominated TNF). The unit of analysis is the individual player.

## 2. Garrett's football hierarchy (from played-football authority)

Games break down by three dominating factors. Everything else is secondary:

1. **Offensive line** — without it, nothing works: no chemistry, no run game, no time for the QB.
2. **Coaches / schemes / formations** — play calls, formations, tendencies. Coordinators (Fangio, Vance Joseph, McVay, Shanahan) have tendencies that evolve year to year. Which schemes they're good at, which coaches get more out of players.
3. **Quarterback** — can he run the offense: pace, cadence (draws penalties, e.g. Rodgers), run/pass decisions, scheme fits.

**Critical nuance:** the layers gate each other. A bad OL can be schemed around — *if* the coach sees it and the QB can execute the adjustment (tonight: Monken's quick game + Watson's execution neutralized PIT's pass rush). Bad coaching can't be fixed by a good QB or line. Check all three every time.

## 3. Track 1 — QB behavioral profiles (every starter + key backups, 64+ players)

**Data source:** nflverse play-by-play (nflreadr/nflfastR), 2020–2026. Free, reproducible.

**Per-QB computations:**
| Metric | What it proves |
|---|---|
| Target concentration (HHI of target shares, by season) | Who fixates on 1–2 guys vs spreads it (the Rodgers pattern, quantified) |
| Trust targets: 3rd-down + red-zone target share vs overall | Who the QB goes to when it matters |
| INT rate: clean vs pressured, by quarter, by game script | When/why picks happen (the Watson question) |
| Scramble rate under pressure; designed-run rate by script | Run-vs-throw tendencies and triggers |
| EPA/dropback vs man / zone / blitz / no-blitz | Scheme fits and struggles |

**Template case — Aaron Rodgers:** quantify the trust-target fixation across the McCarthy years and beyond. HHI by season, top-2 target share, 3rd-down concentration. This is the worked example every other profile follows.

**Control case — Case Keenum:** the spread-it-around veteran. Proves the pattern is player-specific, not demographic.

**Open research — Deshaun Watson (Garrett's questions):** When does he throw INTs (even in Houston he threw picks — what were the situations)? What games is he prone to run more vs throw more, and why? What schemes suit him? What does he like? What does he struggle with?

**Output shape:** `~/workspace/qb-behavioral-profiles/profiles/<qb-name>.md` — numbers, tables, and the computed indices. No adjectives. Plus `/code` (reproducible pipeline) and `/data` (CSVs).

**Status:** coordinator subagent building pipeline + first 8 QBs (Rodgers, Watson, Keenum included). Report pending.

## 4. Track 2 — Coaching / scheme tendencies (every HC, OC, DC)

**Data source:** nflverse play-by-play, 2022–2026 (coaching tenures are shorter; recent window).

**Per-playcaller (OC/HC) computations:**
| Metric | What it proves |
|---|---|
| Run/pass splits by down, distance, field position | The core tendency fingerprint |
| Personnel usage: 11/12/21 rates, 2-TE rate, shotgun vs under-center | Formation identity |
| 4th-down go rate, red-zone run/pass, 2-pt rate | Situational aggression |
| Year-over-year deltas (2022→2026) | Tendency evolution (the Fangio/Joseph/McVay/Shanahan drift) |
| Seconds/play, no-huddle rate | Pace identity |

**Per-DC computations:** blitz rate by down/distance; man vs zone rates; single-high vs two-high shell rates.

**First case study — Todd Monken, tonight:** how he schemed quick game around two missing interior OL starters vs the #5 pass rush. Quantify the adjustment (time-to-throw, depth of target, play-action rate vs season baseline).

**Also queued:** McCarthy (Rodgers-years fingerprint vs now), Shanahan, McVay, Fangio, Vance Joseph.

**Output shape:** `~/workspace/coaching-tendencies/profiles/<coach-name>.md` — numbers + YoY deltas. Plus `/code` and `/data`.

**Status:** coordinator subagent building pipeline + first 6 coaches. Report pending.

## 5. Track 3 — Trust-signal intake (social/video)

The Rodgers–Metcalf video ("this mfer sucks ass") was findable before kickoff and wasn't in any pre-game sweep. That can't happen again.

**Requirement:** a standing intake that captures player/coach quotes revealing trust dynamics — who the QB likes, who he's frustrated with, which young players are getting praised unprompted. Sources: X beat writers, viral clips, press conferences, podcasts.

**This is an intake spec, not a build order.** The coding agent decides implementation after the audit. The requirement: trust signals get caught, tagged by player, and attached to the behavioral profiles in Track 1.

## 6. How this wires in (post-audit)

- Tracks 1–2 produce structured data (CSVs + profile markdown). They do **not** modify the engine.
- The wiring decision — how profiles feed projections — happens after the data exists and Garrett reviews it.
- No calibration, no weights, no published outputs from this program until Garrett says so. Research → wire → weight → calibrate → test → polish. Not up for debate.

## 7. What's already running (do not duplicate)

- QB-profile coordinator: pipeline + 8 QBs (workspace: `~/workspace/qb-behavioral-profiles/`)
- Coaching-tendency coordinator: pipeline + 6 coaches (workspace: `~/workspace/coaching-tendencies/`)
- Full conversation notes: `~/memory/2026-10-01-tnf-intelligence-postmortem.md` (includes card autopsy, Garrett's hierarchy, the Rodgers correction, Watson agenda)
- Tonight's game was the catalyst; the program covers all 32 teams, every coach, every coordinator, every QB including backups.

## 8. Definition of done for the research phase

- [ ] QB pipeline reproducible; 32+ starters profiled with HHI, trust targets, situational INT splits
- [ ] Coaching pipeline reproducible; all 32 playcallers + DCs profiled with YoY deltas
- [ ] Monken tonight written up as the adjustment case study
- [ ] Rodgers trust-target fixation quantified (the template)
- [ ] Watson research questions answered with data
- [ ] Trust-signal intake spec handed to coding agent
- [ ] Garrett reviews the data before any wiring discussion
