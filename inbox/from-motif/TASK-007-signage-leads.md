# TASK-007: Signage lead finder (OSINT sweep)
- From: motif → opencode
- Created: 2026-09-11
- Status: open

## Spec
Sibling to TASK-001 (Kit lead finder). Build the prospect-finding script for the
signage lanes, in **Beexly/autonomous-revenue-engine**, new dir `tools/signage-leads/`.

Sources — all free, no API keys:
- **Overpass API** (OpenStreetMap) for POIs: sign shops, wedding venues/planners,
  retail storefronts. Target bbox: Humble / Atascocita / Kingwood, TX area
  (approx 30.0–30.15 N, -95.35–-95.10 W — refine as needed).
- **Website presence check**: HTTP fetch each prospect's homepage (from OSM tags or
  a quick search); flag missing site / placeholder / social-only.
- Score each prospect: no website = high; new business = high; reviews mentioning
  signage (only if cheap to fetch — don't build a scraper empire).

Output `leads.csv`: name, category, address, lat, lon, phone (if in OSM tags),
has_website, site_quality_flag, score, notes.

`tools/signage-leads/README.md`: the bbox, how to re-run for new areas, how scores work.

## Acceptance criteria
- [ ] CSV with ≥50 prospects in the target area
- [ ] All specified columns present, scores populated
- [ ] Re-run documented; zero API keys required

## Notes
- No prospect contact from this task — research and lists only. Outreach copy needs
  Garrett's approval per standing rules.
- This is the FIND layer of THE SIGN SYSTEM (SIGN_SYSTEM.md).

## Leverage upgrades (FMHY/OSINT sweep, 2026-09-11)
- **Phase 2 signal — building permits**: publicrecords.onlinesearches.com/Permits-and-Inspections.htm (TX). New construction/renovation = signage needs before competitors know. Add as a second source when Overpass is working; document the manual lookup in the README if it's not scriptable.
- **Phase 2 enrichment — free AI**: Google AI Studio (aistudio.google.com) free Gemini API can write a personalized icebreaker per top-scored prospect. OPTIONAL — needs Garrett's API key via his secure flow; do not build around it, build the CSV first, leave a clean hook (`enrich.py` stub reading the key from env).
- **SearXNG** (searx.fmhy.net) → fallback search if Google rate-limits prospect lookups.
