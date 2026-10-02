# docs/engine/research/2026-09-28/fictional-data-honesty-guard.md

## What it is (1-2 sentences)
A 2026-09-28 investigation of fictional-data rendering on the public web app: it documents two real honesty defects (a DFS page that mislabeled real data as fake, and an NBA page that put a "live" dot over invented players) and describes the shipped guard — 11 tests across two test files that allow fiction only when the page discloses it, while separating "may fiction render" from "may it rank."

## Key metrics/methods (formulas where given, else "not specified")
- Method: manual page-source reading of public routes, separating render-disclosure from indexability; guard implemented as `apps/web/__tests__/fictional-data-honesty.test.ts` + `apps/web/__tests__/dfs-honesty-contract.test.ts`, 11 tests total. No formulas.
- Guard design specifics: comments stripped before matching (so good code comments can't defeat it); paths normalized to forward slashes (`path.relative` returns backslashes on Windows, which silently missed every allow-list entry on dev machines while passing in CI).
- Non-vacuity proven by injection: a scratch page rendering `DFS_SLATE` with no disclosure turned the suite red; removing it turned it green.

## Data sources named
- Public page sources under `apps/web/` (routes: `/fantasy/dfs`, `/fantasy/nba`, `/fantasy/props`, `/fantasy/lineup`, `/fantasy/draft`, `/mlb`, `/cockpit/nova/founder`, `/intelligence`, `/airwave`).
- DFS optimizer component (`activeDfsSlate()`, `ILLUSTRATIVE_DFS` fallback, `DFS_SLATE` symbol).
- Lahman data (MLB teams via `loadLahmanMlbTeams`).

## Findings (numbers and facts, not vibes)
- **Defect 1 — `/fantasy/dfs` undersold real data:** the page carried a constant prop `note="Running on a sample slate until a live salary feed is connected. The math is real; the player pool is illustrative."` The `live` flag was computed from the feed's own status three lines above but the note ignored it, so once a licensed feed connected, paying customers kept seeing "sample slate"/"illustrative" above real DraftKings salaries and real player names. [TRUST-SIGNAL] Fixed by deriving the note from `live`.
- **Defect 2 — `/fantasy/nba` live-dot over invented players:** the page is fictional by construction yet carried a `live-dot` next to "Validator demo" and had no `robots` directive, while its four sibling fictional slates (`/fantasy/dfs`, `/fantasy/props`, `/fantasy/lineup`, `/fantasy/draft`) all carry `robots: { index: false }`. Fixed both: noindex plus eyebrow text "fictional data," no live-dot. [TRUST-SIGNAL]
- **First draft of the guard reported 15 offenders; 3 were false positives** when each was read individually: `/mlb` is entirely real Lahman data ("all Data" inside `loadLahmanMlbTeams` is a function name); `/cockpit/nova/founder` says "nothing here is placeholder data" (asserts the opposite); `/intelligence` and `/airwave` are honest in body copy (`ILLUSTRATIVE_BRIEF` with `illustrative: true`, "Illustrative" badge). [OTHER]
- Shipped guard allows fiction on an allow-list of **10 pages**, each verified by reading, with a second test re-checking the disclosure still exists in source. [TRUST-SIGNAL]
- Blind spot (stated, unresolved): the guard reads page sources, not imports — a component receiving fixture data as a prop from a module three levels down is only caught if the page itself names a fixture symbol. [OTHER]
- Unresolved judgment call: `/airwave` renders fictional personas behind a `live-dot` with the disclosure 120 lines further down; recorded in `LABELED_SURFACES` rather than changed because the disclosure is real and the page is a deliberate demo. [TRUST-SIGNAL]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Defect 1 (real data mislabeled as fake → train customers/team to distrust honesty copy): TRUST-SIGNAL
- Defect 2 (live-dot over invented players): TRUST-SIGNAL
- Guard design (allow-list, comment-stripping, path normalization, injection-proven non-vacuity): OTHER
- False-positive analysis (guard that reports honest pages gets disabled): OTHER
- `/airwave` unresolved live-dot-over-fiction: TRUST-SIGNAL

## Engine-actionable? (yes/no + one-line what)
yes — Apply the same honesty contract to engine outputs: every public prediction must carry a machine-checkable provenance disclosure (real vs illustrative inputs), with a guard test that fails if a new surface renders fixture data unlabeled.
