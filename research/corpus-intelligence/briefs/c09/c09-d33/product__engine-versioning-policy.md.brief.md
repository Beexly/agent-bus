# product/engine-versioning-policy.md
## What it is (1-2 sentences)
Operational semver policy for the GSE prediction engine: every published pick/output carries a `modelVersion` stamp, with explicit PATCH/MINOR/MAJOR bump triggers, freeze rules, changelog discipline, and cross-version calibration comparison rules.
## Key metrics/methods (formulas where given, else "not specified")
- Semver `vMAJOR.MINOR.PATCH`. PATCH = weight tweaks (e.g. consensus 0.18→0.20), bug fixes, perf; no freeze. MINOR = new/retired factor, material rebalancing, gating threshold change (e.g. Edge Index 2.5→3.0); brief publish freeze + Model Journal entry. MAJOR = architecture change (linear→nonlinear), new sport, settlement-logic change; 1-week freeze + calibration re-baseline + featured journal post.
- Cross-version calibration: same MAJOR.MINOR aggregates freely; across MINOR = yellow "model version delta" flag; across MAJOR = separate cohorts with "different model" labels.
- Calibration example: 200 settled picks showed model 7% under-confident on high-consensus games → reweighting fix (v6.0.5 example).
- Version stamping is non-negotiable; unstamped output = integrity bug (monitored via `CHECK-V-STAMP-*`).
## Data sources named
not specified (internal engine outputs: Pick, PickSignalSnapshot, GateDecision, LossAutopsy, ModelJournalEntry, AntiGalaxyPick, ModelCourtCase).
## Findings (numbers and facts, not vibes)
- Anti-Galaxy versions pair as `anti-vX.Y.Z` to production; calibrated separately always.
- Changelog at `/changelog` updated within 24h of every bump; Model Journal essays only for MINOR/MAJOR.
- Old major versions stay in the Ledger forever (append-only Galaxy Memory policy); changelog paginates after 2 years.
- 5 acceptance criteria; 3 open items (patch-level journal mentions default no, RSS default yes, no deprecation timeline).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (model governance — disciplined calibration bookkeeping, not football intelligence)
## Engine-actionable? (yes/no + one-line what)
no — governance/intake; records the calibration comparison discipline, not a model signal.
