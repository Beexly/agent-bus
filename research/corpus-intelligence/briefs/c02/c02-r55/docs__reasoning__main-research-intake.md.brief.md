# docs/reasoning/main-research-intake.md

## What it is (1-2 sentences)
An audit of what actually entered the engine after five research commits landed on `origin/main`: only the official DraftKings Week 3 salary CSV was used; the research harness projection (`0.6×DK APPG + 0.4×prop-implied`), lineups, symbolic-regression result, and whalelay/creator-intel work were all rejected or parked.

## Key metrics/methods (formulas where given, else "not specified")
- Rejected research-harness projection formula: `0.6 × DK APPG + 0.4 × prop-implied`.
- Rejected harness modifiers: weather multipliers 0.90–0.95; role multipliers 0.90–1.15.
- Symbolic-regression Target A (play EPA from pre-snap): holdout R² **-0.022** vs a mean of 0 — null, not wired.
- Engine's own wind coefficient "did not clear noise"; the harness's 0.90–0.95 weather multiplier was not ported.
- Current branch lineup: $49,900 salary spend (on the official file), projection **126.77**, stack = Stafford + Kyren Williams + Davante Adams.

## Data sources named
- `dfs-week3/DKSalaries-Week3-SunMon.csv` (official DraftKings salaries).
- DK APPG (two-game DK averages) and prop-implied projections (used by the rejected research harness).
- `symbolic-regression/`, `whalelay-lab/`, `creator-intel/`, `improve-ledger-work/` research dirs.

## Findings (numbers and facts, not vibes)
- Only `dfs-week3/DKSalaries-Week3-SunMon.csv` (official DK salaries) was used; it replaced the scraped HTML salaries. [OTHER]
- `dfs-week3/run.ts` + package.json + double-stack patch rejected: it is a separate model (projection `0.6×DK APPG + 0.4×prop-implied`, weather 0.90–0.95, role 0.90–1.15) that would have replaced the engine's composite with two-game DK averages; porting was declined. [OTHER]
- `dfs-week3/lineups.json` and the GPP writeup rejected: priced on a different projection (Coker 25.7, Young 29.8), "not this engine." [OTHER]
- Symbolic-regression Target A null: holdout R² -0.022 vs mean of 0; no formula wired. [OTHER]
- `whalelay-lab/` parlay-angle scripts: research only, no parlay published. [OTHER]
- `creator-intel/` Artem transcripts: content pipeline, not a game signal. [OTHER]
- `improve-ledger-work/` batch digests: coordinator notes, not coefficients. [OTHER]
- Branch lineup on official file: $49,900 spend, 126.77 projection, stack Stafford + Kyren Williams + Davante Adams, built on the same half-PPR number the engine uses. [OTHER]
- The engine already has its own projection, its own tackle fit, and a wind coefficient that did not clear noise. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- All findings tagged OTHER: this file is a wiring audit, not a football signal.

## Engine-actionable? (yes/no + one-line what)
Yes — wiring-priority signal: docs-on-main are not wired paths; the canonical reusable artifact is the official salary CSV, and the research harness remains a separate unmerged model whose projection/harness approach (0.6 APPG + 0.4 prop-implied) is available if ever re-examined.
