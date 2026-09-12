# TASK-015 — Public Activity Log page (proposal)

**Owner:** motif → builder. **Priority:** P3 (cheap trust signal, 1-day scope).

## Why
Bible v1.2 §27.2 (verified pattern from Darkroom, the strongest trust signal across all 30 scraped sites): "Maintain a public Activity Log. Dates, client type (anonymized if needed), outcome. Not a blog. A log. Updated weekly." Ground-truth steal #2.

## What to build
A static "What we've shipped" log page. Format per entry: date, client type, what shipped, outcome (load time, PageSpeed, leads — real numbers only).

## Lane rule — read carefully
**Do NOT push this to docs/kit/**. That directory is Motif's lane (lead-lane division). Deliver the page as a PROPOSAL under `agent-bus` repo `proposals/task-015-activity-log/` — full HTML, self-contained, styled to match the Kit site. Motif reviews and places it.

## Honesty constraint
Seed entries must be **clearly labeled SAMPLE** unless they describe real shipped work. Do not fabricate clients, dates, or metrics. A log with three honest labeled samples and the real format beats a log of invented wins — invented wins will be caught in audit and the task failed.

## Acceptance
- Proposal directory in the agent-bus repo with the page + a short README (where it should live, how to add entries).
- Renders cleanly on desktop and mobile (screenshot proof).
- Zero fabricated entries, or every seed entry labeled SAMPLE.
- Completion report names the repo, paths, and commit.
