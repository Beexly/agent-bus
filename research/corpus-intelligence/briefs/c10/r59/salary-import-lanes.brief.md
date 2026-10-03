# research/2026-09-28/orchestration/salary-import-lanes.md
## What it is (1-2 sentences)
Research brief (Lane 1, 2026-09-28) verifying live, no-auth DraftKings NFL salary import end-to-end (draftables endpoint), finding FanDuel has no public equivalent, and flagging a conflict between the verified DK path and the repo's standing rule forbidding "the forbidden DraftKings hidden endpoint" — needing Garrett's call.
## Key metrics/methods (formulas where given, else "not specified")
- DK slate discovery: `GET https://api.draftkings.com/draftgroups/v1/` (HTTP 200, 867KB, 126 draft groups; filter `contestType.sport == "NFL"`, `contestType.gameType == "SalaryCap"`, `draftGroupState == "Upcoming"`, pick by `minStartTime`). No auth.
- Alternate: `GET https://www.draftkings.com/lobby/getcontests?sport=NFL` (HTTP 200, 1.74MB; each contest carries `dg` = draftGroupId).
- Contest → draftGroup: `GET https://api.draftkings.com/contests/v1/contests/{contestId}?format=json` → `contestDetail.draftGroupId` (verified: contest `196151357` = "$2.75M Fantasy Football Millionaire" → draftGroupId **`154078`**); also `name`, `entryFee`, `contestStartTime`, `maximumEntriesPerUser`.
- Salary endpoint: `GET https://api.draftkings.com/draftgroups/v1/draftgroups/{draftGroupId}/draftables?format=json` (HTTP 200). No auth.
- Slot map (verified): `66=QB, 67=RB, 68=WR, 69=TE, 70=FLEX (RB/WR/TE), 71=DST`. FLEX rows duplicate `playerId` — dedup key is `playerId` (or `playerDkId`).
- Client requirement: plain curl/requests gets Akamai "Access Denied" 403; Chrome TLS impersonation works (`curl_cffi` + `impersonate="chrome131"` + `Origin/Referer: https://www.draftkings.com`). Cadence: fetch at slate discovery → hourly refresh through lock → final pull at lock; single-threaded; back off on 403/429.
- Proposed adapter maps to `DfsPlayer { id, name, pos, team, opp, salary, proj, floor, ceiling, own, ... }` (`SALARY_CAP = 50000`, `DFS_SLOTS` already exist); DK provides salary/status/team/game only — `proj/floor/ceiling/own` come from GSE engine + ownership source. Registration: `registerDfsSlateProvider({ name: "DraftKings salary feed", live: true, slate: () => snapshot })`, env `DFS_PROVIDER` set. FD adapter: CSV-parse path only (manual CSV download from logged-in fanduel.com contest page).
## Data sources named
- DraftKings public fantasy API (`api.draftkings.com`, draftkings.com lobby) — unauthenticated.
- FanDuel fantasy API (`api.fanduel.com` incl. GraphQL) — login-gated; precedent is manual CSV download or fragile Playwright interception (sfaizi24/tnc-model-2025).
- Existing optimizer precedents: DimaKudosh/pydfs-lineup-optimizer (`DraftKingsCSVImporter`, `FanDuelCSVImporter` — CSV-only, zero API fetch code), BenBrostoff/draftfast (CSV-based `generate_players_from_csvs`).
- DK Terms of Use (dknetwork.draftkings.com/terms-of-use/) forbids automated collection; enforcement precedent: DK C&D to SuperLobby in 2016 for scraping/republishing lobby data (LegalSportsReport). Anonymous read-only salary reads: risk assessed low but nonzero in the file.
## Findings (numbers and facts, not vibes)
- This week's NFL Classic main slate (verified 2026-09-28): draftGroupId `154078`, starts `2026-10-04T17:00:00Z`, 1,135 draftables → **619 unique players**, 12 games.
- Verified live sample: Jaxon Smith-Njigba — salary 9100, WR, SEA. Per-player fields: `salary`, `position`, `rosterSlotId`, `teamAbbreviation`, `teamId`, `displayName`, `firstName`, `lastName`, `shortName`, `playerId`, `playerDkId`, `draftableId`, `status`/`newsStatus`, `isDisabled`, `isSwappable`, `competition` (game + kickoff), `draftStatAttributes` (`{id: 90, value: "37.7"}` = DK avg-points/game; `{id: -2, value: "19th", quality: "Medium"}` = rank vs position), `playerAttributes` (`ByeWeek: 11`); top-level `competitions[]` gives opponent derivation.
- DK API does NOT provide projections, floor/ceiling, ownership.
- No rate-limit headers observed; no documented public rate limit.
- The "DK push-feed websocket flagged for ToS concern on commercial use" claim could NOT be verified from primary sources in the pass — treat as unverified.
- Flag: `apps/web/lib/integrations/dfs.ts` + `providers.ts:36` say the live slate must come from a "licensed live slate... never scraped, and never the forbidden DraftKings hidden endpoint" — the verified path conflicts with this standing rule; Garrett's call: (a) rule stands (DK path = research/backup only), or (b) rule revised for read-only public salary reads.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- DK `draftStatAttributes[id 90]` = DK's own avg-points/game per player, usable as `formL5`/recent-PPG context seed: (OTHER).
- `status`/`newsStatus`/`isDisabled` → exclusion flags for inactives — directly feeds lineup construction: (OTHER).
- DK-vs-consensus salary/ownership gaps = leverage signal input for GPP construction: (OTHER).
- ToS conflict flag on repo's "licensed provider only" rule vs verified endpoint: (OTHER).
## Engine-actionable? (yes/no + one-line what)
Yes (pending Garrett's rule call) — live DK salary import closes the DFS slate gap: discovery + TLS-impersonated draftables fetch maps to `DfsPlayer` (salary/status/team/game), projections + ownership merge downstream per total-signal doctrine.
