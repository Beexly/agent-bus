# docs/props/research/2026-09-18/notes/sumersports.md
## What it is (1-2 sentences)
Source notes from a live 2026-09-18 read of sumersports.com (@tejfbanalytics / @QBgami / SumerSports): verified public copy, pricing, and page structure, plus a computation sketch for an under-center formation chart with an nflverse-based public approximation.
## Key metrics/methods (formulas where given, else "not specified")
- Under-center rate: team under-center rate = qualifying under-center snaps / qualifying offensive snaps (exclusions for no-plays, spikes, penalties unpublished — INFERENCE: formula shape mirrors a standard EPA-rate construction).
- Under-center EPA/play = sum(eEPA on those plays) / count.
- Public parallel pattern: Week 1 regular-season pass/run plays from nflverse, drop NA EPA, mean EPA by offense; adapt by adding an under-center formation filter (gist by morganandrew linked in file).
## Data sources named
- SumerSports: public copy claims "300+ data points many times per second"; real-time pressure/route/coverage charting; formation/coverage/personnel/game-state filters; SumerPass; SumerBrain; SumerLive (live WR-CB matchups, schemes, route trees); slates update within 2 hours after the final game.
- No developer docs or public/documented API found in SumerSports nav; the app is behind Sign In / paywall.
- nflverse data (github.com/nflverse) as the public approximation for formation charting (under-center via formation/short-name fields).
- Parental lead (Sep 18): LB, defensive interior, and edge tables went live; preseason/postseason data from 2022; promo code WELCOME15 (15% off) — NOT independently confirmed on public pages; flag as unconfirmed.
## Findings (numbers and facts, not vibes)
- SumerPass pricing confirmed on the homepage (7th section, 2026-09-18): $10/week, $20/month, $100/year, 7-day free trial for first-time subscribers.
- Sumer features page exposes QB/WR/TE/RB/offense/defense tables with situational filters; slates update within 2 hours after the final game.
- There is no public/documented SumerSports API; the app link sits behind Sign In / paywall — programmatic ingestion of their proprietary charting is not available from public pages.
- Under-center charting is "likely Sumer proprietary formation charting"; a public approximation is possible only if nflverse formation/short-name fields mark UNDER CENTER (INFERENCE: whether nflverse reliably marks this is unverified in the file).
- The WELCOME15 promo code and the LB/di/edge tables-going-live lead came from a parent's lead, not from pages read — marked unconfirmed in the file itself.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Under-center rate + EPA/play construction: formation-level tendency data that feeds play-calling/formation analysis — COACHING, SCHEME
- SumerSports real-time pressure/route/coverage charting and formation/coverage/personnel filters: proprietary charting layer for OL pressure and coverage scheme study — OL, SCHEME
- SumerLive live WR-CB matchups and route trees: per-rep matchup data relevant to target-concentration/ trust-target reads — QB-BEHAVIOR
- Pricing/subscription and API-availability notes: procurement/intel, not football — OTHER
## Engine-actionable? (yes/no + one-line what)
yes — the under-center rate/EPA-play formula plus the nflverse mean-EPA-by-formation gist give a directly codable formation-tendency module, provided nflverse formation fields are checked first.
