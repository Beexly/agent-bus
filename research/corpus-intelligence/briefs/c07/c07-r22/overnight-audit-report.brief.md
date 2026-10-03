# gse/overnight-audit-report.md
## What it is (1-2 sentences)
Consolidation report of a 2026-06-30 overnight autonomous improvement run on branch `claude/gse-overnight-audit`: 72 additive, individually validated commits covering honesty/no-claim hardening, robustness fail-open, cockpit depth, engine-integrity tests, security, a11y, and docs — plus an independent adversarial review that found and fixed 5 real defects.
## Key metrics/methods (formulas where given, else "not specified")
- `computeGameContext`: 9-signal fuser; empty input → `dataQualityScore` 30 (not 0) — flagged as an honest engine-semantics anomaly where "no data" scores as "maximally fresh" because absent `dataFreshnessMinutes` defaults to 0; deliberately left as owner's call.
- `clarkWestTest`: load-bearing fail-closed gate requiring n≥30 AND tStat>1.64 (original test passed for wrong reason on degenerate-variance fixtures; rebuilt so the gate genuinely opens at n≥30 and closes at n=29).
- Calibration min-sample floors + discrimination publish floors for the performance page; win-rate page gated behind allow-listed `winRatePct` + `STAT_PLACEHOLDER`; Published signals = `info`, never fabricated `good`; `beatsNaive=false` preserved (backtest truth never spun).
- Sleeper input sanitization; two denial-of-wallet rate-limits; fail-open `.catch` on picks/promotions/cockpit APIs. Otherwise not specified.
## Data sources named
Sleeper (market signals); nflverse loaders (sequential to fix /fantasy OOM); Prisma payloads; Healthchecks; static-site build (195/195 static pages generated).
## Findings (numbers and facts, not vibes)
- Branch: `claude/gse-overnight-audit`, HEAD `bde90e88`, 72 commits ahead of prod `cbb52634`; status green (typecheck 0 / lint 0 / build 0), branch-only, UNPUSHED. Merge = production deploy; owner decision only.
- Adversarial review (4 independent skeptics): robustness + constraint-compliance CLEAN; 5 real defects confirmed and fixed — D1/D2 HIGH (blog title/SEO no-claim guard wired into `/api/blog` but missing on actual page renders h1/OG/title/meta/index h2; build-green hid it; fixed + render-site test added), D3/D4 MED (clarkWest fail-closed test degenerate fixtures), D5 LOW (misleading comment).
- Validation at HEAD: typecheck 0 / lint 0 / build exit 0; 195/195 static pages generate; new + existing tests green.
- No-claim leak fixes: blog runtime guards on excerpt/content/title/SEO on API route AND [slug]/index renders + OG/meta; preview-page bootstrap/seed-pick leak (mirrors `/api/picks`); promotions disclosure/RG/category banned-hype scan.
- A11y: `scope="col"` added on ~190 table column-headers; aria-busy on subscribe/ask-why/manage-subscription.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] No-claim leak fixes + calibration min-sample/discriminination publish floors are the enforcement mechanism for refusal-native forecasting.
- [TRUST-SIGNAL] The clarkWest n≥30 + tStat>1.64 fail-closed gate is a trust/calibration gate on statistical comparisons.
- [OTHER] computeGameContext 9-signal fuser is engine context-fusion machinery.
## Engine-actionable? (yes/no + one-line what)
Yes — flag the computeGameContext empty-input anomaly (dataQualityScore 30 on zero data) as an engine-semantics defect for an owner decision.
