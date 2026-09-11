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
