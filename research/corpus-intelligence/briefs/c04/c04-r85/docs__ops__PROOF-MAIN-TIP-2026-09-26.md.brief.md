# docs/ops/PROOF-MAIN-TIP-2026-09-26.md
## What it is (1-2 sentences)
A git ancestry proof document resolving a multi-machine dispute over the `origin/main` tip of Beexly/Sports, showing via three independent sources that the remote tip was `483aca3a3f184d5725d5229e8aad79f8566e655f` and that three parallel-session commits (`b73520085`, `660299b8f`, `fd73e0ce8`) are landed ancestors, not open work.
## Key metrics/methods (formulas where given, else "not specified")
Not specified. Method is `git ls-remote origin refs/heads/main`, `gh api repos/Beexly/Sports/commits/main --jq .sha`, and `git merge-base --is-ancestor` checks, plus a stale-worktree check (`git worktree list`) and remote-URL check (`git remote get-url origin`).
## Data sources named
Remote git host (`git ls-remote origin refs/heads/main`), GitHub API (`gh api repos/Beexly/Sports/commits/main`, `gh api repos/Beexly/Sports/git/refs/heads/main`), local `git log origin/main -12 --oneline`.
## Findings (numbers and facts, not vibes)
- Remote tip at write time: `483aca3a3f184d5725d5229e8aad79f8566e655f` (all three sources agree).
- Earlier tip in document body: `63653b2f29832a6a6978d645081a023c98bdb3fb`; local `origin/main` at `483aca3a3` shows a chain `483aca3a3` → `63653b2f2` → `51333c552` → `d4280364e` → `999db2b3d` → … → `b73520085`/`660299b8f`/`fd73e0ce8` → `d667351f9`.
- Landed rows (FINAL): #7 submission route + #8 feature-recipe backtest done at `fd73e0ce8`; #3-5 asof-store leak wall + placebo done at `660299b8f`; NGS measurement-loop + ladder-boost done at `b73520085`; bayesian/symreg/rl/metalearning/conformal/certificate/promotion residue done at `d4280364e`.
- In progress at write time: T31 weather (air-density-fg + ball-physics + decision-calibrated-weather, honesty shinFairForSide, calibration-blend, inplay safe-lead) — wiring session; dfs + nfl scoring batch (dominance-pruning, ip-portfolio, value-tier, tournament-variance, cluster-salary-screen, payout-framework, block-poisson, generalized-poisson, luck-neutralized-epa, parsimonious-season) — parallel session.
- Dead pre-rebase SHAs: `1d0576590`, `a7b5e1267`.
- Stale-snapshot hazard named: worktree `Sports-wt-wire-2026-09-25` at `259aecede`.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — landed work inventory: NGS measurement + ladder/boost, asof-store leak wall + placebo controls, V5 submission + V7 feature-recipe are on main as of 2026-09-26.
- TRUST-SIGNAL — the three-source tip-verification procedure (ls-remote + two GitHub API paths) is a reusable evidence pattern for settling "is my work landed" disputes.
## Engine-actionable? (yes/no + one-line what)
No — ops/git coordination doc with no modeling content; useful only as a historical record of which engine lanes (NGS measurement, placebo controls, residue bridges) were landed on main.
