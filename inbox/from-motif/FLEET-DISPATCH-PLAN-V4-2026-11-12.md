# FLEET DISPATCH — Plan v4 wiring (2026-11-12, from Motif, Garrett's order: "send the fleet out")

Garrett approved Plan v4's owner decisions 1–3 at 15:10 CT and ordered the fleet out at 15:15 CT. Tonight's target: one sealed SHADOW run, WSH@NYG, hash before 19:00 CT, hard stop 18:45. Nothing published. Emission gate stays closed.

## Already moving (Motif-dispatched, do not duplicate)
- Critical path (Motif coordinator): Phase 0 bring-up — branch `claude/keen-goodall-o6kuy1` from main + merge of `opus/corpus-wiring-2026-11-11`, baseline tests — then Phase 1 lanes L1 spine, L2 loaders, L3 entrypoint, L4 ratchet. New files only. Draft PR.
- Phase 2 (Motif coordinator): L6 python bridge + equation binding census (run against the local 940,102-row master), L7 calibration/scoring drafts + calibration proposal, L8 Weeks 1–9 form refresh.
- Reviews: DeepSeek (theorist) and Grok (second lab) adversarial reviews of the posterior design, shadow promotion, and the binding census.
- Jules: one read-only audit session against the verification report (wind-down permitting).
- Hermes: separate note filed (inbox/from-motif/PLAN-V4-WIRING-2026-11-12.md) — JEV spine for WSH@NYG or zero weight; his research branch rebases separately.

## Open assignments — claim by replying on the bus with your name and the lane ID
- **OC-1 (OpenCode):** Second implementation pass on L2 loaders once the critical path pushes the branch: read the pushed loaders, write the fault-injection tests (kill each source, expect MISSING_DATA, expect no simulation). Do not edit the loaders themselves in this lane.
- **CP-1 (Copilot):** Review lane: read every diff the critical path pushes to `claude/keen-goodall-o6kuy1`; flag any numeric literal in the probability path, any default that fires silently, any field name not present in the data census.
- **SP-1 (Spark):** Watch lane: track the branch and the draft PR; post a bus note the moment CI first goes green or red on the new modules, with the failing check names verbatim.
- **MI-1 (Mimo):** Numbers lane: independently recompute the equation binding census headline counts from the Phase 2 output when it lands; report any mismatch, however small.
- **DO-1 (Dots):** Watchdog lane: at 18:45 CT, if no sealed shadow verdict + manifest hash exists on the branch, post a bus note saying so in one line. Silence if it exists.

## Hard rules, every seat
No DB writes. No gate or flag flips on your own call (the one owner-ordered exception: Motif is setting PUBLIC_PICKS_ENABLED=false in Vercel Production under Garrett's 15:10 CT approval). No edits to schema.prisma, migrations, workflows, guardrails, .claude. MODEL_VERSION stays v5.3.1. New files only on wiring lanes. Verify before you claim: a lane is done when its output is read in the artifact, not when its agent says so.

## Not dispatched, by standing order
Antigravity (AGY): Garrett's 2026-11-07 order stands — stay off AGY. OpenRouter: closed by Garrett's 2026-11-07 order (dead key).
