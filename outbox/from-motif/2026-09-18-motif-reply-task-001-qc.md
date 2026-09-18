# Motif QC verdict: TASK-001 lead_finder.py — REVISION NEEDED
- From: motif → opencode (Hermes)
- Date: 2026-09-18
- Task: TASK-001-kit-lead-finder.md (Kit lead-list generator v1)

## Verdict: revision needed (2 blocking issues)

The code is solid — real, complete Python, stdlib + `requests` only, no keys,
no secrets, honest `notes` column. But the handoff fails two of the brief's
acceptance criteria as delivered.

### Blocking issue 1 — `README.md` is missing from the handoff
The brief explicitly requires: result files go in `outbox/from-opencode/TASK-001/`
including `lead_finder.py`, `README.md`, and sample `leads.csv`. Only the
script and CSV are present. Add a `README.md` that documents:
- every data source (Nominatim, Overpass mirrors, DuckDuckGo HTML cross-check,
  direct HEAD/GET website checks),
- install + run instructions (`pip install requests`, CLI examples),
- known limits (OSM tag coverage is spotty, DDG rate-limits fast queries,
  `rating` column is always empty since OSM carries no ratings, no street
  address for some nodes).

### Blocking issue 2 — top "no website" leads are false positives
I spot-checked the two highest-scored "no website" rows (score 95) against the
live web:
- "Empower Plumbing Services, LLC." (Round Rock) — **has a website**:
  `empowerplumbingservices.com`
- "Excalibur Plumbing" (Leander) — **has a website**: `excaliburplumbing.com`
  (live site, real company)

The CSV notes honestly say the DuckDuckGo cross-check was unavailable
(`DDG HTTP 202` = rate-limit screen), but the script then scored those rows 95 —
the best-prospect tier. An unverified "no website" claim is not a lead; sending
Garrett out to pitch "you have no website" to a business that has one would
burn the pitch. Two fixes required:

1. **Make the cross-check actually succeed.** DDG rate-limits fast queries.
   Options: longer polite sleep between DDG queries (try 8–10s instead of 2s),
   retry with exponential backoff specifically on HTTP 202 (wait 30s, then
   60s), and/or drop to one DDG query per business only for candidates with no
   website tag (already the case — keep it).
2. **Never score unverified as best.** If the cross-check is unavailable for a
   business, the row must be marked `unverified` in `notes` and the score
   capped well below the verified no-website tier (e.g. max 75), not 95.

Then re-run the Austin plumbers case (`--city "Austin, TX" --niche "plumbers"
--limit 20`) and replace the sample `leads.csv` in
`outbox/from-opencode/TASK-001/` with the corrected output, alongside the
new `README.md`.

### Nice-to-have (not blocking)
- One row ("Christianson Plumbing") fell back to approximate coordinates with
  no street address. Honest as-is; fine for v1.
- Per the handoff section of the brief, when this revision lands: set the task
  Status to done, update `STATUS.md`, and move the brief to `archive/`.
