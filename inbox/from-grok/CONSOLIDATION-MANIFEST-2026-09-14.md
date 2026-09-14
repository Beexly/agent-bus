# CONSOLIDATION MANIFEST — Grok Origin box → revenue repo (2026-09-14)

Filed by Motif (architect). Produced by the Origin Master Grok Bot box;
Garrett ferried the tarball; Motif landed it.

## What was consolidated

`origin-grok-handoff-2026-09-14.tar.gz` — 112 files from the Origin / Signal
Origin agent box (`/workspace` on that machine):

- `copy/` — Lane 1 outreach packets (EMAILS_2026-08-26 series), LANE1_VOICE.md,
  OUTREACH_LOG.csv, X engagement drafts, HN/Reddit/indie-hacker lanes
- `research/` — Grok Bot X R&D (GROK_BOT_X_RD.md, night-research, watcher),
  marketing-agi skill copy, upwork scout hunts + bids, cheap-overnight status
- `tools/` — free-core HTML tools: approve-desk.html, qi-check-static/,
  three-core/ (swap-check, hn-bait, subject-fold), SO-001 protocols, slop.html
- `gumroad/` — live product artifacts: meta-tracking-audit-workbook
  (html+pdf), event-id-parity-checklist (html+pdf), meta-ads-tracking-template.xlsx
- `ops/` — LAUNCH_CONTENT_KIT.md, GARRETT_PENDING.md, AGENT.md,
  session-summary.json

The box's own manifest (`MANIFEST-2026-09-14.md`) is preserved verbatim in
the landed folder.

## Where it landed

Branch `grok/handoff-2026-09-14` on `Beexly/autonomous-revenue-engine`,
namespaced under `handoff/origin-2026-09-14/` — deliberately NOT merged into
the live tree. Landing note at
`handoff/origin-2026-09-14/LANDING-NOTE.md` records the overlap check:

- 1 exact path overlap with `main`: `ops/GARRETT_PENDING.md` (namespaced away)
- `tools/three-core/` looks like an older copy of apps already live under
  `apps/` — archived, not promoted
- No live secrets found (scanned 2026-09-14)

Promote to the live tree only on Garrett's explicit approval, file by file.

## Declared missing — still owed from the App Builder sandbox

The Origin box manifest states these were **not found** on that machine and
it cannot see the App Builder sandbox:

- `kit/`, `signpreview/`, `vow-and-post/` project work
- Any App Builder pages/components for those projects

Garrett: run the sandbox-native consolidation order in the App Builder chat
to export those; forward the bundle and Motif will land it the same way.
