# docs/props/research/2026-09-18/firecrawl/THESPORTSDB-COVERAGE-GAPS.md
## What it is (1-2 sentences)
A provider-gap audit of TheSportsDB's free API (2026-09-18) versus nflverse and ESPN, concluding it adds nothing for modeling inputs but has value for presentation enrichment (team metadata, crosswalk IDs). It also codifies engineering rules for the client at `packages/data-ingestion/src/thesportsdb-client.ts` (opt-in fallback, throttle, soft-fail, no-store).
## Key metrics/methods (formulas where given, else "not specified")
- Throttle rule: minimum 2500ms between requests (~24/min max, well under the implied ~30/min upstream limit), module-level throttle shared across calls.
- Label convention: CONFIRMED = observed live or in shipped code; INFERRED = reasonable deduction; UNVERIFIED = not yet tested.
- Engineering rules: opt-in fallback only (never primary path); aggressive caching (team metadata changes ~yearly, schedules ~weekly); soft-fail always (HTTP/parse error or `events: null` → empty result, never throw); `cache: "no-store"` on every fetch; never treat `[]` as "no games exist" (empty ≠ absent).
## Data sources named
- TheSportsDB free API (public eval key "3"): `search_all_teams.php?l=NFL` (team directory w/ stadium, location, formed year, colors, badges/logos), `searchplayers.php?t=...` (player bios: position, height/weight, nationality, DOB), `eventsseason.php?id=4391&s={season}` (season schedule/scores).
- Crosswalk fields on team objects: `idESPN`, `idAPIfootball` (e.g., Arizona Cardinals idESPN "22", idAPIfootball "11"; Atlanta Falcons idESPN null).
- https://www.thesportsdb.com/free_sports_api (free at point of access; $9/mo premium adds production key + V2 API with 2-min livescores, video highlights).
- Comparison points: nflverse (nflfastR play-by-play, EPA/WP/WPA/Vegas WP, NGS advanced stats, rosters, DynastyProcess depth) and ESPN public API (schedules, scores, live scores, Power Index/QBR).
- Prior repo probe 2026-08-19 (`docs/ops/calibration/2026-08-19-l10-provider-probes/RESULTS.md`) had flagged TheSportsDB as GATED; this client design answers that gate.
## Findings (numbers and facts, not vibes)
- [OTHER] CONFIRMED 2026-09-18 ~16:08 CDT: `search_all_teams.php?l=NFL` returned full NFL team objects with strTeamShort, strStadium, strLocation, strColour1, strBadge, strLogo.
- [OTHER] CONFIRMED: crosswalk completeness NOT guaranteed — Atlanta Falcons carried idESPN null; treated as fallback-of-last-resort for crosswalk IDs.
- [OTHER] INFERRED: `eventsseason.php?id=4391&s=2026-2027` returned `{"events":null}` on 2026-09-18 — future season not populated upstream or season-string format differs; NOT live-verified returning real games, so it is explicitly NOT a primary schedule source.
- [OTHER] CONFIRMED: NOT an odds source (no odds endpoints on free tier); NOT a metrics source (no EPA, efficiency stats, or player performance numbers beyond bio fields).
- [OTHER] Player bios by team (`searchplayers.php`) UNVERIFIED live this session — parser written to documented field names, covered by mocked tests only; one fetch attempt failed with a tool-side error (not upstream) and was not retried.
- [TRUST-SIGNAL] "Empty ≠ absent" doctrine: `[]` from the schedule endpoint means "upstream gave nothing," not "no games scheduled" — an anti-hallucination rule for downstream consumers.
- [OTHER] Verdict: never prefer TheSportsDB over ESPN for scores/schedules when ESPN is reachable; enrichment-only fallback.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Rich team metadata + incomplete crosswalk IDs (idESPN nulls observed) → OTHER
- "Empty ≠ absent" no-fabrication rule → TRUST-SIGNAL
- Opt-in fallback, throttling, aggressive caching → OTHER
## Engine-actionable? (yes/no + one-line what)
yes — Enrichment-only fallback for stadium/location/badge fields and last-resort crosswalk IDs, with explicit engineering guardrails (opt-in, throttled, soft-fail) already specified for the ingestion client.
