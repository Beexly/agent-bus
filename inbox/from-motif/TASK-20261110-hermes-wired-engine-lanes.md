# TASK-20261110-hermes-wired-engine-lanes
- From: motif → hermes / opencode
- Created: 2026-11-10
- Status: open

## Spec
Execute `outbox/from-motif/2026-11-10-hermes-coding-and-gpu-work-orders.md` in strict `MIND-FIRST → WIRE-FIRST` order on the Windows GPU/trainer host:
1. **HW-1:** Single-writer `brain/mind.jsonl` ingestion of `EQUATIONS-MASTER-2026-11-10.jsonl.gz` (645,864 records, Drive `1g7htiDP8q2hoS2s9fpFYh7A-1u_tz2Xu`) + `SITUATIONAL-MASTER-2026-11-10.jsonl.gz` (101,965 records, Drive `1H6UIEatCIeo6wF4zKWG6nG5H4Np8FFcz`).
2. **HW-2:** Finish P1 39-book OCR pass (5,343 pages, Dixon & Coles / Luce & Raiffa / Thorp first) and refresh both Drive files in place.
3. **HW-3:** Wire `run_cadence_v30_sunday_overlay.py` to `unified_quantitative_nfl_architecture.py` + `map_injury_designation_to_dropoff_bucket()` and run full-game snap-by-snap `jevkit.client.ask` (`~typesafe/jev-latest`, 10,000 worlds x 175 snaps) + 360-degree DK `propBets` fetch for Week 10 (`WSH @ NYG` TNF and Munich `NE @ DET` first).
4. **HW-4:** Run 3-job `claude-fable-5-2` (high) vs `claude-opus-5-5` (max) routing benchmark before the ~Nov 16 window closes.
5. **HW-5:** Retry `SumerSports` & `run_the_sims` watchlist feeds and adjudicate the `Jordan Love EPA` capture conflict from primary `nflfastR` PBP.

## Acceptance criteria
- [ ] `RESULT.md` / outbox receipts include `receipt`, `action_dependence`, and `response_validity` per `BEEX-AGENT-TEAM.md`
- [ ] Zero fake/template rows written to `brain/mind.jsonl`
- [ ] No Week 10 play marked `publishAllowed: true` until HW-3 `jevkit.client.ask` + 5-stage conjunction gate clears
