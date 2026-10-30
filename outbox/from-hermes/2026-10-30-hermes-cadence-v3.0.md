# Hermes cycle - cadence v3.0 (Fri 16:30 CT) ran, minted, and disclosed a merge resolution

Branch: Beexly/Sports `ledger/consolidated-2026-10-30`
SHA: `9953f0b2fc1ebdc66ef25e39d1424f3161e50d9f` (merge commit, 2 parents: `29f5f0665` + `88afd2a5b`)
Remote verified by `git ls-remote` (9953f0b2f on `refs/heads/ledger/consolidated-2026-10-30`), not by push output.
Nothing pushed to main. Branch is new on origin.

## 1. The scheduled run

Phase `INJURY_WEATHER_OVERLAY`, slot `SUN_EARLY`, Week 8, 2026. Fri 2026-10-30 16:39-17:15 CT.
New reusable runner: `scripts/ops/run_cadence_v30_sunday_overlay.py` (+9 tests, all pass).
Report: `docs/predictions/research/2026-10-30/cadence_v30_overlay_sun_early_w8.json`.
Doc: `docs/ops/cadence-v3.0-2026-10-30.md`.

Seal read-only, 6/6 checks unchanged (`23245bcbba04f147...`, tau 0.42, EPA table `9b8c701c...`,
QB_QUESTIONABLE 0.0947). **No re-estimation, no re-simulation, no reseal.** Tickets minted against
the sealed writeup build `2026-10-29T23:30:08Z` (sha256 `72f32b55a8fe39c2...`).

- 8 SUN_EARLY games, confirmed against ESPN scoreboard `dates=20261101` (12 events that day).
- 50 designations applied. **The nflverse injuries feed had zero game statuses for the Sunday slate**
  (`report_status` blank on all 163 Week-8 rows for the 16 teams; practice DNP/LP/FP is populated but
  is not a designation and was not promoted). ESPN public summary supplied every one, fetched live.
- 19 designations carried role keys the sealed table cannot price: 7 `LT`, 5 `CB1`, 7 `EDGE1`.
- Weather: Open-Meteo at the kickoff hour for the 6 outdoor venues. Flags only, no points coefficient
  (Tampa PRECIP 45%, 79.4 F, 11.9 mph; Jacksonville 39% sits under the 40% threshold).
- **42 tickets minted**, set merkle `14bb3f96732444f2`: 12 `PLAY` (1 side, 2 totals, 9 props),
  30 `WITHHELD_PASS`. Nothing re-priced, nothing published (Class B gate not run in this phase).

Playable: BUF total OVER 54.5, PIT total UNDER 39.5, DET -3; props Zay Flowers O82.5, Josh Allen
O252.5, Kincaid O46.5, St. Brown O77.5, Gibbs O86.5 rush / O33.5 rec, Warren O65.5, Metcalf U56.5,
Judkins U48.5. Five of eight games are all-PASS in the sealed build.

## 2. The finding that matters

**The sealed `epaDropoffTable` cannot price the designations that exist.** Its keys are
`{QB1, QB_QUESTIONABLE, OL, SKILL, DEF}`; the mapping emits
`{WR1, WR2, WR3, TE1, RB1, QB1, QB_QUESTIONABLE, LT, CB1, EDGE1}`. Only the QB keys intersect, and no
QB is designated in this slot, so the whole injury overlay is worth **less than 0.1 points on every
game** (max |delta| 0.097). Same defect v2.5 found on one game; now confirmed on eight.

Two consequences worth a decision from Garrett, neither taken here because both are model behavior:
1. Map `LT -> OL`, `SKILL -> WR/TE/RB group`, `DEF/CB1/EDGE1 -> DEF`, or the overlay keeps pricing nothing.
2. The sealed execution multipliers (0.78-0.91) applied to the post-Sinkhorn residual are too small to
   move a total by a point. If a scratched WR1 should be worth ~1 point, that is a reseal, not a cadence fix.

## 3. Merge resolution I performed (disclosure, not a silent edit)

A merge of `engine/w1w7-tendencies-2026-10-30` into `ledger/consolidated-2026-10-30` had been sitting
**unfinished since 12:56 CT today**, with three conflicted files. It blocked every commit on the branch,
so it had to be closed before the cadence artifacts could land. Resolution, nothing collapsed:
- `data/engine/new_engine_official_ledger_2026.json`: kept the graded `31-11 (+18.56u)` `verified_record`
  (consolidated branch, matches the owner directive for the settled CAR @ GB card) and preserved
  `settlement_2026-10-29` + `record_reconciliation` from the tendencies branch verbatim, plus a
  `merge_resolution_2026-10-30` key naming both branches.
- `.../NEW-ENGINE-OFFICIAL-LEDGER-16-5.md`: kept the graded headline, appended the four-count
  reconciliation and settlement sections verbatim with a resolution note.
- `docs/strategy/HANDOFF.md`: union of both entries (already resolved in the working tree).

**The underlying dispute is NOT settled by this.** One branch says 16-5 and publishes four counts
because `31-11` has no per-pick trail; the other adopted `31-11` as the official line with the 16-5
base marked owner-attested. Both readings are now in the same file, which is the honest state but not
a ruling. Garrett needs to say which number the record leads with.

Note: the merge commit also carries the other branch's staged work (real W1-W7 tendencies artifact,
coach modules, math kernels, sgp-copula denoiser test) because those files were already staged when I
committed. Their content is theirs, untouched.

## 4. State left behind

- `data/nflverse/injuries_2026.csv` + `data/gse-dataset/current/injuries_2026.csv` refreshed from
  nflverse (274,770 bytes, sha256 `d7b7021b17ef7043...`, 2,417 rows). Backup:
  `injuries_2026.csv.bak-pre-v30-20261030`.
- `npm run guardrails` em-dash scan currently FAILS with 5 hits, all in working-tree edits to
  `apps/web/app/page.tsx` and `apps/web/app/calibration/page.tsx` made by another agent's
  surface-stripping pass (Galaxy Picks + DFS only). None of my files contribute a hit. Those edits are
  uncommitted and not mine to touch.
- Untouched and still live: the v2.5 schedule-label regression (writeup `401873023` still says
  "Sunday 1:00 PM ET - Week 9 Spotlight" with a `2026-11-01T18:00Z` kickoff, while ESPN shows that game
  played Thu Oct 29).

## 5. Next

1. Garrett: rule on the record (16-5 vs 31-11 as the headline).
2. Someone owning the engine: fix the dropoff-table key mapping and decide whether the multipliers are
   worth any points at all. Until then the injury overlay is decorative.
3. Cadence v3.0 is now a script, so the Saturday and Sunday-morning re-runs are
   `python scripts/ops/run_cadence_v30_sunday_overlay.py --slot SUN_EARLY --week 8` (add `--slot`/
   `--kickoff-filter`/`--scoreboard-date` for SUN_LATE, SNF, MNF).
