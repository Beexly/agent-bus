# docs/gse/gate-decision-packet.md
## What it is (1-2 sentences)
A gate-decision packet from a GSE overnight audit run (branch `claude/gse-overnight-audit` @ `bde90e88`, 72 commits ahead of prod `cbb52634`, green, UNPUSHED): 7 decisions sit outside the autonomous envelope and each needs the owner's exact authorize phrase; nothing was auto-applied.
## Key metrics/methods (formulas where given, else "not specified")
not specified — decision gates, not formulas.
## Data sources named
None external — repo state (branch `claude/gse-overnight-audit` @ `bde90e88` vs prod `cbb52634`; companion `overnight-audit-report.md`); Stripe price copy ($19/$49 stale → canonical $14.99/$24.99 founding ladder).
## Findings (numbers and facts, not vibes)
- 7 owner-gated decisions: (1) open review PR / merge the branch (HIGH blast radius — merge on deploy clone = production deploy); (2) subscriptions doc price/env fix — stale $19/$49 → canonical $14.99/$24.99 Stripe founding ladder; (3) export `isStubDbUrl` + boundary test; (4) extract `gradeAtsCover()` + ATS cover-margin unit test; (5) add `selectGradingLine()` + `clvLockLine` no-drift unit test; (6) resolve dead `PRIORITY_BOOKMAKERS` export — delete OR wire into odds-api-client to prefer those books; (7) npm dependency/vuln upgrades — 13 vulns (1 critical / 6 high).
- Engine observation (FYI, not a gate): `computeGameContext` with EMPTY input returns `dataQualityScore === 30` (not 0) — absent `dataFreshnessMinutes` defaults to 0 → full freshness points, so "no data" scores as "maximally fresh." A test pins the honest value; changing the semantic is an owner decision.
- Hard line held all night: no push/merge/deploy, no schema/migration, no env/secret, no Stripe/money, no gate flips (canPublishProjections / canExposePublicPicks / canExposePerformanceStats / canPublishContent / learning / calibration), no performance/win-rate claims, no fake data, no Lumera/XXX, `beatsNaive=false` preserved.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Empty-input `computeGameContext` scoring dataQualityScore 30 ("no data" = "maximally fresh") → [TRUST-SIGNAL: data-quality honesty bug — mislabels absent data as fresh; semantic fix is owner-gated]
- Dead `PRIORITY_BOOKMAKERS` export, no-autonomous-deletion rule → [OTHER: code-hygiene gate]
- 13 npm vulns (1 critical / 6 high) → [OTHER: security backlog, install + full re-validate required before commit]
- Gate list (no gate flips, no performance claims, beatsNaive preserved) → [TRUST-SIGNAL: autonomous envelope held — nothing publish-facing was changed]
- Stale $19/$49 → canonical $14.99/$24.99 founding ladder → [OTHER: money-facing docs correction, owner authorization required]
## Engine-actionable? (yes/no + one-line what)
yes — two items touch the engine directly: fix the `computeGameContext` empty-input freshness semantics (owner decision, test already pins honest value) and wire-or-delete `PRIORITY_BOOKMAKERS` in odds-api-client; merge of the audit branch is the owner's call.
