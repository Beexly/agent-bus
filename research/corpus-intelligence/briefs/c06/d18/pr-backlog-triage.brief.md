# ops/pr-backlog-triage.md
## What it is (1-2 sentences)
A read-only triage (generated 2026-09-29, no merge/close/rebase/push/comment performed) of the 30 newest open PRs on Beexly/Sports — computed via `gh pr view` (GraphQL) plus local `refs/remotes/pr/*` verified SHA-identical to GitHub's `headRefOid` for all 30, with `git merge-tree --write-tree origin/main <pr-ref>` as an independent conflict oracle.
## Key metrics/methods (formulas where given, else "not specified")
- Base of truth: `origin/main` = `ebca9de011` (SURF-14 … (#949), 2026-09-29 14:45:53 -0500)
- Classification classes: M = MERGE-AS-IS · R = REBASE-THEN-MERGE · A = ARCHIVE/CLOSE
- Independent conflict oracle: `git merge-tree --write-tree origin/main <pr-ref>` — agrees with GitHub's `mergeable` on 29 of 30; the one disagreement (#885) flagged for manual verify
- Supersession proofs: `git merge-base --is-ancestor pr/<a> pr/<b>` + per-file identical-hunk comparison
## Data sources named
- Beexly/Sports GitHub PRs (GraphQL via `gh pr view`); local `refs/remotes/pr/*` fetched from `refs/pull/*/head`
- Branch inventory referenced in triage: `hermes/*`, `cursor/*`, `agent/*`, `gse/*`, `dependabot/*`, `grok/*`, `ci/*`, `wire/*`
- arXiv paper IDs referenced by PRs: 1210.4854 (text-to-event semantic alignment, #885); 1301.0594 (markets steam/surprise, #892)
- Files of note: `signal-ledger-writer.ts` (no `shard`/`hour` logic on main — #944 fix absent), `packages/data-ingestion/src/nflverse/rows.ts` (`GUARANTEED_CONTRACT_FIELD_FILE` exemption — #915 would strip it), `scripts/guardrails/trust-gate.mjs` + `scripts/guardrails/trust-gate.test.mjs` (`LOCK_PROPER_NOUN_SAFE_CONTEXT` already on main), `.cursor/environment.json` (mutually exclusive #878/#886 designs), `nflverse-releases.{ts,test.ts}` (shared by port family)
## Findings (numbers and facts, not vibes)
- Repo has 163 open PRs, not 30: total +640,428 / −16,444, 4,312 files, 126 drafts; the triaged 30 = all PRs with `createdAt >= 2026-09-21`: +81,581 / −1,536, 571 files, 17 drafts, 13 ready, 17 mergeable
- Residual gap (+92,001 vs +81,581, 572 vs 571 files) explained by snapshot timing: #949 (+11,342 / 5 files) merged and #950 (+27 / −5 / 2 files) opened after the snapshot
- Authoritative classes: MERGE-AS-IS 9 (876, 881, 882, 892, 898, 902, 913, 922, 950) · REBASE-THEN-MERGE 15 (878, 883, 884, 885, 889, 891, 903, 906, 909, 911, 914, 916, 917, 918, 944) · ARCHIVE/CLOSE 6 (879, 886, 887, 888, 907, 915)
- Highest-value merge first: (1) #950 — 0 behind main, CI green, 27 lines; fixes a guard that reported 35 defects when the real count is 52; (2) #944 — the only production data-loss fix: 80,000 of 118,402 ledger rows (32.4%) never written, silently, every tick; fix verified absent from main; only 10 commits behind → cheapest rebase; (3) #882, #913, #922, #876 — small, clean, independent
- Two PRs actively harmful if merged: #888 (would delete 870 lines of live documentation — AGENTS.md residual diff 874 +---, 4 insertions, 870 deletions; silently reverts the 2026-09-27 docs-bucket reorg; only unique value is lint fixes already in #889); #915 (pure revert of landed red-team trust-gate fix — residual −19 lines; would strip the `GUARANTEED_CONTRACT_FIELD_FILE` exemption; its own body concedes `guaranteed-valid` was already reworded on main)
- Supersessions: keep #881 close #879 (all 5 #881 paths ⊂ #879; 11 of #879's files byte-identical to main); keep #911 close #884 (`is-ancestor` true; 55/55 shared files identical hunks; #911 = #884 + mock-export fix for its 9 red tests); #916 ordering after #914 (`is-ancestor` true; 85/89 shared files identical); #889 keeps the lint half of #888 (13/13 identical hunks); recommend #878 over #886
- Port family verified mutually exclusive by construction (0 shared file paths across 914/917/918 — a hand-split of one ~406-commit-behind worktree); merge order 914 → 916 → {917, 918}
- Borderline #903: GitHub-CLEAN, zero failed checks, but renames exported type `SituationSnapshotLike` → `SituationEventRecord` — needs an import sweep before green CI means anything (promotion to M candidate if sweep is clean)
- #907: ahead=2,938 commits of divergent history, 45 report files, CI never ran a single check — archived as unreviewable
- #885 conflict disagreement: GitHub says CONFLICTING/DIRTY, `merge-tree` says CLEAN — likely stale cached `mergeable`; re-check in UI before acting
- #883 ↔ #884: 38/44 shared files identical (86%); merge 884 → 911 → then 883, or split 883's `market_clv` from its tail-shrink
- `mergeStateStatus=UNSTABLE` on 13 PRs reflects failing/pending CI, NOT conflicts
- 133 other open PRs outside scope, of which 102 are `claude/*` branches and 97 of those are drafts
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- #944: silent 32.4% signal-ledger row loss (80,000/118,402) per tick — a data-loss bug in the very ledger that trust signals are computed from; ledger completeness must be verified before CLV/calibration numbers are trusted — TRUST-SIGNAL
- Calibration-related PRs in backlog: #883/#884/#911 (calib + CLV: tail shrink, market_clv), #891 (OpenCode Zen NFL/MLB calib + CLV), #902 (shadow calibration e-process scaffold — only PR with zero failed checks), #906 (expose total drop reasons), #916 (verifier integrity metrics), #917 (xFP research pre-reg + results) — TRUST-SIGNAL
- Lock-provenance-adjacent caution: stale cached GitHub `mergeable` (#885) mirrors the L-9 lesson — cached state vs recomputed state can disagree; always recompute (#885 analogue of quote-vs-mean-vs-model audit) — TRUST-SIGNAL
- Repo ops hygiene (triage method, supersession proofs, harmful-merge callouts) — OTHER
## Engine-actionable? (yes/no + one-line what)
yes — Land #944's shard-rotation fix first (it silently drops 32.4% of signal-ledger rows every tick), because every CLV/calibration figure downstream is only as honest as the ledger it's computed from; then follow the stated merge order (914 → 916 → {917, 918}) for the calibration verifier stack.
