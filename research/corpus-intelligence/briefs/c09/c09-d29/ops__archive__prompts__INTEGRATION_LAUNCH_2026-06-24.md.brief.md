# ops/archive/prompts/INTEGRATION_LAUNCH_2026-06-24.md
## What it is (1-2 sentences)
The 2026-06-24 integration and launch record consolidating scattered branches (`main`, `codex/intelligence-core`, `claude/sweet-fermi-sk9gws`) into one verified deployable line plus the Decision Genome / Epistemic Alpha research integration, on branch `claude/stoic-dirac-20h11q` with main as strict ancestor.
## Key metrics/methods (formulas where given, else "not specified")
- Gate metrics: typecheck green (all workspaces, strict + noUncheckedIndexedAccess); lint green (max-warnings=0); tests green — 6,123 web + ~660 package tests.
- Backtest: **18,344 OOS, model MAE 5.3087 vs naive 4.9064, beats-naive = false, priced=false (shadow)** — reproduces the keystone exactly (note: this predates the PR #695 spread-polarity fix, so treat as superseded; see the 2026-09-04 replay).
- Research integration: Decision Genome (the atomic object behind every decision) and Epistemic Alpha (was the confidence deserved before the outcome?) built as pure tested TypeScript composing existing primitives (`compilePublicClaim`, `scanForBannedPhrases`, agent registry) under `apps/web/lib/decision-genome/` + ADMIN-gated `/api/decision-genome`; 40 new tests.
## Data sources named
None ingested; clearance engine + source-rights registry referenced (scores24.live = permission_required).
## Findings (numbers and facts, not vibes)
- Consolidation: `main` was force-updated to `5687b411` carrying 45 commits of Proven-edge + Advanced-Systems work (CLV proof receipts, commit-reveal slates, Integrity Ledger, Public Claim Compiler, Signal Lineage, Market Memory) that `intelligence-core` lacked; integration based on main to avoid orphaning work. Merge of intelligence-core: 1 conflict in `apps/web/lib/cache/public-read-model-policy.ts` (add/add) — kept main's surface-keyed version.
- Result: 66 commits / 150 files added vs main; build green, guardrails OK (trust-gate, model-freeze, draft-only, claude-api, secret-scan, eval-contracts).
- Projections stayed shadow — no gate flipped, `priced` never true (289 "illustrative" labels); no live secrets committed.
- Owner-gated / remaining (not code): live Stripe Fantasy prices + keys + webhook; TikTok app domain-verification signature file; preview deploy and production. Galaxy Dynasty Studio (157 commits behind this line) recommended as a parallel track, not merged.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — branch-integration record and Decision Genome / Epistemic Alpha research framing (decision-accountability structures, not predictive features).
## Engine-actionable? (yes/no + one-line what)
Yes (marginal) — documents the Decision Genome/Epistemic Alpha accountability primitives (`apps/web/lib/decision-genome/`) and the keystone backtest baseline MAE 5.3087 vs naive 4.9064, though the backtest is superseded by the post-#695 replay.
