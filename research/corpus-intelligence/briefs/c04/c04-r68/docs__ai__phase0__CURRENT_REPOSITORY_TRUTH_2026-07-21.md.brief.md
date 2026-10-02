# docs/ai/phase0/CURRENT_REPOSITORY_TRUTH_2026-07-21.md
## What it is (1-2 sentences)
A Phase 0 snapshot (2026-07-21) of actual repository state pulled live from the GitHub API and local git, correcting stale claims in prior documents: PR #145 was closed (not open) and redistributed into five replacement PRs; PR #146 (NOVA) remains open draft.
## Key metrics/methods (formulas where given, else "not specified")
- `main` head: `c19a00d` "feat(clv): FV-001 — side-aware CLV dispersion capture + Pedersen slate aggregate (#136)".
- PR #145: closed 2026-07-21T22:48:52Z, merged=false; head `157d1160bdbf241028244e34e2950ce9acc3ceef`; 11,114 additions / 37 deletions; 71 files; 11 commits; replaced by #147–#151.
- PR #146 (NOVA): open draft, `mergeable_state: clean`; 14,419 additions / 40 deletions; 70 files; 99 commits; head `fbc3cfe0ccea23d5d9657248ac374945c1dec9c4`.
- Overlap check: `comm -12` on changed-file paths of #145 vs #146 returned ZERO common paths — overlap is conceptual, not file-level.
- Five replacement PRs (#147 ledger+security fixes; #148 cost-policy; #149 integrations-wave8 docs; #150 command-usage telemetry; #151 dispatch telemetry) all CI green, none merged.
## Data sources named
GitHub API + local git diff/log (the evidence basis). NOVA evidence artifacts preserved as `FAILED_CLOSED` pending reproducible immutable receipt (`EVIDENCE_GAPS_AND_FAILED_RECEIPTS_2026-07-21.md`).
## Findings (numbers and facts, not vibes)
- Both #145 and #146 branched from stale merge-base `bf931ab` (#142), not current main head — any extraction work must rebase onto current main.
- #151's GitHub-visible head was stale relative to local work until session pushed `a741f3c` — corrected to origin.
- Corrections to prior claims: MASTER-PLAN-SONNET-2026-07-21.md's "PR #145: open draft, CI green at 035cfd4" is doubly stale (closed; `035cfd4` superseded by `157d116`).
- NOVA live-source-validation receipt claims not independently re-verified in this pass.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: repo/ops state reconciliation; CLV dispersion capture + Pedersen slate aggregate feature name recorded on main (#136) — CLV methodology reference only.
- TRUST-SIGNAL: `FAILED_CLOSED` evidence discipline — unverified claims preserved as failed, not assumed.
## Engine-actionable? (yes/no + one-line what)
No — repo state snapshot and PR bookkeeping; no engine signal content.
