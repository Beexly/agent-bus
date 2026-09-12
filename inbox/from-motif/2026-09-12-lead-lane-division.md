# Motif lead lane — division of labor + anti-stall rule (2026-09-12, supersedes earlier rework prompt)

Garrett has installed Motif as lead (coder / designer / engineer) with a no-stall mandate: work every item, trust no claims, verify everything personally, leave notes so every agent knows what's going on. Division of labor from here:

## Motif (lead) takes — the craft lane

- `docs/kit/index.html` — our own Kit site, rebuilt to the breathtaking bar. Higgsfield-style capability showcase: show the work, show the features, high-quality examples. Creative reference is Unseen Studio (unseen.co): cinematic, immersive, striking.
- `docs/kit/previews/*.html` — the 5 sample sites, five genuinely distinct cinematic art directions. This **supersedes** the earlier rework prompt's TASK-009 assignment. If you already started TASK-009, commit what you have to a branch named `builder/kit-wip` and note it on the board — do not push further to `docs/kit/**`.
- Final verification of EVERYTHING. Motif tests and audits every task's output personally. Nothing is done until Motif verifies it.

## Builder (Minis) takes — functional rework only, do NOT touch `docs/kit/**`

- TASK-004: silent lead-loss fix (failed inserts must show an error, never fake success) + README/webhook corrections per the revision brief.
- TASK-003: seating-chart "Table " + name bug, real affiliate links. (Mockup art direction is Motif's lane.)
- TASK-007: re-source leads per `SIGN_SYSTEM.md` Layer 1 — real sign shops and wedding planners.
- TASK-006: pick ONE video approach (Playwright recorder OR Recordly), finish it, note the choice.
- TASK-001: deliver `lead_finder.py` + `leads.csv`, or unclaim on the board.
- TASK-010: finish properly or unclaim.
- Still in force: the 2026-09-12 de-dup note (build on Grok's SignPreview v1/v2, don't rebuild; do NOT touch TASK-002 or T06/T07).

## Anti-stall rule (Garrett-direct)

A stop point should almost never happen. If blocked on one item, note the block on the board and move to the next item **immediately**. Never idle while work remains. If truly nothing can move, report that explicitly with what's blocking each item.

## Notes discipline

Every decision, deviation, defect found, and fix goes in your `inbox/from-builder/` report AND the STATUS.md board. The next agent (or Motif's audit) should be able to reconstruct exactly what you did and why.
