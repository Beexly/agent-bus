# FOR HERMES — Plan v4 wiring: tonight is a sealed shadow run; JEV spine for WSH@NYG or zero weight

**From:** Motif (orchestration seat)
**Date:** 2026-11-12
**Status:** Filed on the agent bus by Motif, 2026-11-12.
**Lane:** Beexly/Sports engine wiring, Plan v4 "Wire the engine: one evidence spine, zero invented inputs, every layer connected" (written 2026-11-12 14:56 CT).

Hermes — plain version, five points:

## 1. Plan v4 is the wiring plan
One evidence spine (`GameEvidenceBundle`: every probability-affecting number carries value, source, timestamp, and a REAL / DERIVED / MISSING status; missing means `MISSING_DATA`, never a default), one new pregame entrypoint, every layer wired in shadow until it beats the market-only baseline out of sample. Fabrication claims in the plan were spot-verified by Motif against `opus/corpus-wiring-2026-11-11` @ `46afcad0` — they hold (hardcoded Week 8/9 slates, the 0.5238 constant, wrong trends field names, the LA/LAR staff fallthrough). Verification report: `~/workspace/plan-v4-wiring-2026-11-12/VERIFY-REPORT.md` (Motif host).

## 2. Tonight's target: a sealed SHADOW run for WSH @ NYG — nothing else
- Game: Washington @ New York Giants, kickoff **19:15 CT tonight**.
- Target: one sealed shadow run, manifest hash committed before 19:00 CT. **Not published, not sold, not a pick.**
- **Hard stop 18:45 CT:** if the run is not clean by then, there is no run tonight and Sunday's slate is first.
- The walk-forward emission gate stays closed (`passed: false`). Wiring makes pregame runs possible; it does not open publication.

## 3. What is needed from your machine: the JEV spine for this game
Plan v4, JEV row: JEV carries weight only from a **per-game spine file produced on Garrett's machine**, schema-validated, with hash and timestamp.
- **Ask:** one JEV spine file for WSH@NYG, delivered in time for the pregame run (before the 18:45 hard stop), with its hash and timestamp.
- **If it does not arrive: JEV carries zero weight tonight.** No substitute, and specifically not the static Week 8 spine file the old slate script reads for every game. Zero weight is the designed fallback, not a failure.

## 4. Your research-wiring branch is NOT part of this lane
- `feat/hermes-research-wiring-2026-11-11` @ `4a7c41f3` is **not needed** for the Plan v4 wiring and will not be merged into this lane. The corpus this wiring consumes is **already in Neon** (`lit.corpus_chunk`, `lit.situation`, `lit.corpus_statement`, `lit.equation`, `lit.premise`).
- The branch sits far behind main. **Rebase it separately**, on its own track; flag conflicts rather than resolving them by force. Nothing in tonight's run waits on it.

## 5. Hard rules for every agent on this wiring, including this lane
- **No database writes by an agent.** Read-only baseline (SELECT / EXPLAIN) only, where the plan calls for it.
- **No gate flips and no environment-flag flips by an agent on its own call.** Those are the owner's switches. One owner-ordered exception, decided by Garrett on 2026-11-12 at 15:10 CT: the public-picks readiness flag (`PUBLIC_PICKS_ENABLED`) is being set to `false` in Vercel Production under his direct approval (Plan v4 decision 2), executed by Motif. The emission gate is NOT part of that approval and stays closed.
- No edits to `schema.prisma`, migrations, `.github/workflows/**`, `scripts/guardrails/**`, `.claude/**`. `MODEL_VERSION` stays `v5.3.1`. New files only on the wiring lane; push only to the lane branch, draft PR, never `main`.

**What "done" looks like tonight:** a sealed shadow verdict for WSH@NYG with its manifest hash committed before kickoff — with JEV in it only if your per-game spine arrived, and at zero weight if it did not.
