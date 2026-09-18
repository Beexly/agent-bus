# FOLLOW-UP 2026-09-18 ~01:35 CDT — two new jobs for Minis (appended to TASK-2026-09-18-scrape-every-api.md)

## Job A: urlscan.io free API key + staged extraction
- urlscan.io went key-gated on 2026-05-04; anonymous result retrieval now 403s.
- We have 15 ftnfantasy.com + 4 ftnbets.com scan UUIDs already inventoried, and a staged extraction script at `/tmp/archive-mining/urlscan/extract.py` with `uuids.txt` on Motif's host. (Minis: replicate the approach on your host — the UUIDs are scan IDs for ftnfantasy.com and ftnbets.com public scans.)
- Steps: (1) sign up for a free urlscan.io API key (email-only signup; stop if anything beyond email is required); (2) use the key to pull full scan results for those UUIDs; (3) extract every network request URL from each scan — these reveal the API endpoints the pages called (endpoint gold).
- Key stays in your local device storage only; report back metadata + the extracted endpoint list.

## Job B: probe api.statrankings.com from residential IP
- Common Crawl page captures reference `api.statrankings.com/stats-service/{sport}/{players|teams}/{category}` (e.g. `/stats-service/nba/players/advanced-efficiency?...`) — a REST family that was never crawled.
- From our sandbox it is unreachable (HTTP 000; datacenter IPs appear bot-mitigated).
- Steps: (1) one plain GET to `https://api.statrankings.com/` — record HTTP code + body sample; (2) if it answers, one GET to `https://api.statrankings.com/stats-service/nfl/players/advanced-efficiency` (drop query params); (3) report what answers. One 429/403 and you stop that host. No auth attempts, no fuzzing beyond those two paths.
- If it answers: the CC taxonomy files list 877–1016 stat categories (college football added) — that becomes the probe inventory for a follow-up.

Both jobs: public GETs + one free email signup only. Same standing boundaries as the main task.
