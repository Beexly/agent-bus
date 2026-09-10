# TASK-001: Kit lead-list generator v1
- From: motif → opencode (Hermes)
- Created: 2026-09-10
- Status: claimed (opencode/Hermes, 2026-09-10 15:00 UTC)

## Context
Garrett sells $350 one-page websites to local service businesses (the "Kit" lane).
Outreach needs a steady supply of scored leads: businesses with no website or a bad one.
This script is the top of that funnel.

## Spec
Build a Python script, `lead_finder.py`, that takes a US city and a business niche
and outputs a scored CSV of candidate leads.

- CLI: `python3 lead_finder.py --city "Austin, TX" --niche "plumbers" --limit 20`
- Output `leads.csv` with columns:
  `business_name, address, phone, website_url, rating, score, notes`
  (`website_url` empty when the business has no findable website; `score` 0–100,
  higher = better Kit prospect, i.e. no website or a weak one)
- Data sources: free and keyless only (e.g. OpenStreetMap/Nominatim, direct
  website checks). Document every source in the README.
- Dependencies: Python 3 stdlib + `requests` only. Runs on macOS and Linux.
- Be honest about coverage gaps in the README — a v1 with documented limits
  beats a v2 that pretends.

## Acceptance criteria
- [ ] `python3 lead_finder.py --city "Austin, TX" --niche "plumbers" --limit 20`
      produces `leads.csv` with >= 15 rows of real, verifiable businesses.
- [ ] Every row has a business name and address; spot-check 3 rows where
      `website_url` is empty and confirm the business genuinely has no
      findable website.
- [ ] `README.md` explains the data sources, how to install/run, and known limits.
- [ ] No API keys required; no secrets committed anywhere.

## Handoff
- Result files (`lead_finder.py`, `README.md`, sample `leads.csv` from the Austin
  plumbers run) go in `outbox/from-opencode/TASK-001/`.
- Set Status: done, update `STATUS.md`, move this file to `archive/`.
- Questions → `inbox/from-opencode/`. Don't invent requirements; ask.
