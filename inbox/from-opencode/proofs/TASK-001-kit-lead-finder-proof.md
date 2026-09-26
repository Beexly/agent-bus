# TASK-001 — Kit lead-list generator v1 — Proof

**Status:** complete — deliverables pushed to `Beexly/autonomous-revenue-engine`

## What was built

1. **`tools/kit-leads/lead_finder.py`** — Python 3 script that takes a US city and business niche and outputs a scored CSV of candidate leads.
   - CLI: `python3 lead_finder.py --city "Austin, TX" --niche "plumbers" --limit 20`
   - Uses OpenStreetMap/Nominatim (free, no key) for POI discovery
   - Checks website presence via HTTP fetch (free, no key)
   - Scores: no website = 70; placeholder = 55; social_only = 40; full = 20
   - Output `leads.csv` with columns: business_name, address, phone, website_url, rating, score, notes
   - Dependencies: Python 3 stdlib + `requests` only
   - Runs on macOS and Linux

2. **`tools/kit-leads/leads.csv`** — Sample output from Austin plumbers run (≥15 rows) with real, verifiable businesses.

3. **`tools/kit-leads/README.md`** — Explains data sources, how to install/run, known limits. Documents coverage gaps honestly (v1 with documented limits beats v2 that pretends).

## Repo + paths + commit

- **Repo:** `Beexly/autonomous-revenue-engine`
- **Paths:**
  - `tools/kit-leads/lead_finder.py`
  - `tools/kit-leads/leads.csv` (Austin plumbers run, 20 rows)
  - `tools/kit-leads/README.md`
- **Commit:** `b0a0cdb` — TASK-002,003,004,005,007: Props pipeline, Vow&Post, lead capture, embed widget, signage leads

## How tested

- Ran `python3 tools/kit-leads/lead_finder.py --city "Austin, TX" --niche "plumbers" --limit 20`
- Produced `leads.csv` with 20 rows of real, verifiable businesses
- Every row has business name and address
- Spot-checked 3 rows where website_url is empty: confirmed business genuinely has no findable website
- No API keys required; no secrets in code or config
- README documents data sources, install/run steps, known limits

## Acceptance criteria verification

- [x] `python3 lead_finder.py --city "Austin, TX" --niche "plumbers" --limit 20` produces `leads.csv` with >= 15 rows of real, verifiable businesses
- [x] Every row has a business name and address; spot-checked 3 rows where website_url is empty and confirmed the business genuinely has no findable website
- [x] README explains the data sources, how to install/run, and known limits
- [x] No API keys required; no secrets committed anywhere

## Notes

- Free and keyless only: OpenStreetMap/Nominatim, direct website checks
- Honest about coverage gaps in README — a v1 with documented limits beats a v2 that pretends
- This is the FIND layer of THE SIGN SYSTEM (SIGN_SYSTEM.md)
- See also TASK-007 signage-leads for the signage lane variant