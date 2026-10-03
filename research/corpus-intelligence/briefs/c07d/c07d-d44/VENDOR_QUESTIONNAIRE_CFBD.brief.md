# legal/VENDOR_QUESTIONNAIRE_CFBD.md
## What it is (1-2 sentences)
A concrete vendor-terms checklist for clearing CollegeFootballData (CFBD) from `vendor_candidate` to `approved_api` in the source rights registry — for college-football FACTS only, explicitly feeding the QB college→NFL transition signal, with proprietary ratings/outputs excluded. Every rights flag is currently `false`; ingestion stays BLOCKED until a human/legal read checks every box.

## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas; this is a legal/data-scope gating document, not an analytic method.

Stated numeric parameters:
- Free-tier limit: **1,000 calls/month** (listed).
- Paid tiers: **$1–$30/mo** raise limits.
- Auth scheme to confirm: Bearer token; key obtained at https://collegefootballdata.com/key; stored ONLY as env var `CFBD_API_KEY` (documented in `.env.example`), never committed.

## Data sources named
- CollegeFootballData (registry source id: `collegefootballdata`), status `vendor_candidate`, all rights flags `false`. Terms page is JS-rendered and was NOT machine-verifiable — needs a human/legal read.
- cfbfastR: MIT-licensed R wrapper for CFBD. Official Python, TypeScript, and C# libraries exist.

## Findings (numbers and facts, not vibes)
- Goal of clearance: `approved_api` status for college-football FACTS only — "passing/scheme data feeding the QB college→NFL transition signal." Never ingest proprietary ratings/outputs.
- This is labeled the **highest-priority free CFB stats candidate** — "prioritize the terms read."
- Checklist section 1 (Access): obtain free API key; store only as `CFBD_API_KEY`; confirm Bearer auth and the 1,000 calls/month free-tier limit.
- Checklist section 2 (Terms & rights — human/legal read required): read Terms & Conditions in full; confirm commercial use permitted for our product; confirm storage of derived facts permitted; confirm derived-analytics use permitted; confirm attribution requirements ("College data via CollegeFootballData.com"); confirm no clause forbids model-training-style derived use ("we only use facts → features").
- Checklist section 3 (Data scope): FACTS only — games, teams, box scores, schedules, college passing/scheme stats. EXCLUDE proprietary ratings/outputs (e.g. **SP+ as a proprietary metric**) from any ingestion that feeds a claim — treat as reference, not as our input or output. No images/logos (graphics — not extractable as facts).
- Checklist section 4 (Schema verification / no-fake-data): with the key, verify each endpoint's REAL schema live before building an adapter; do not guess columns; pin the verified schema in the adapter; record freshness/update cadence; confirm it meets the no-stale-data rule.
- Checklist section 5 (Promotion): on full clearance, flip `collegefootballdata` → `approved_api`, enable automation/storage/derived flags, set `reviewed_at`/`reviewed_by`, add evidence URLs; remove CFBD from `sports-data-candidates.ts` (graduates to the rights registry); build the adapter against the verified schema; add ingestion tests.
- The free tier is described as "generous for the targeted college→NFL signal."

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: This file's stated purpose is a QB college→NFL transition signal built on college passing/scheme stats — i.e., college-level passing features (games, box scores, passing/scheme stats) feeding the QB-behavioral profiles / transition program. It names the exact feature classes the transition signal intends to ingest: games, teams, box scores, schedules, college passing/scheme stats. This is the highest-priority free CFB facts source for that program.
- QB-BEHAVIOR: The explicit EXCLUSION of SP+ (named as the example proprietary rating to treat as reference only, never as input or output to a claim) draws a clean boundary between GSE-built transition features and ESPN's proprietary composite — an important integrity constraint for the QB-behavioral profiles program: any existing transition-signal code that ingests SP+ would violate this doctrine.
- TRUST-SIGNAL: The "verify each endpoint's REAL schema live before building an adapter; do not guess columns" rule is the no-fake-data mechanism for this source — directly parallel to Garrett's standing "INGEST-AND-LEARN / no untested claims" doctrines and relevant to any wiring sweep of the college→NFL adapter.
- OTHER: The 1,000 calls/month free tier ("generous for the targeted college→NFL signal") plus $1–$30/mo paid tiers gives a concrete rate budget for designing the CFBD ingestion cadence — e.g., a monthly refresh of season-long college QB facts fits comfortably inside free tier.

## Engine-actionable? (yes/no + one-line what)
Yes — when the human/legal terms read completes, build the CFBD adapter for college passing/scheme facts (games, box scores, schedules) feeding the QB college→NFL transition signal, with SP+ and all proprietary ratings explicitly excluded from claim-feeding ingestion.
