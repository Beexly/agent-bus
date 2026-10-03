# gse/overnight-audit-report.md

## What it is (1-2 sentences)
The 2026-06-30 consolidation report of an overnight autonomous improvement run on branch `claude/gse-overnight-audit` (off production `cbb52634`, HEAD `bde90e88`, 72 additive individually-validated commits, typecheck 0 / lint 0 / build 0, branch-only, unpushed), covering honesty/no-claim hardening, fail-open robustness, cockpit depth, engine-integrity tests, and an independent adversarial review that found and fixed 5 real defects.

## Key metrics/methods (formulas where given, else "not specified")
- Validation bars: typecheck 0 / lint 0 / full build exit 0 at every wave and independently at HEAD; 195/195 static pages generate; new + existing tests green.
- `clarkWestTest` fail-closed gate: load-bearing n≥30 AND tStat>1.64 to open the gate; rebuilt so the gate genuinely opens at n=30 and closes at n=29 (fix D3/D4 after degenerate-variance fixtures let the test pass for the wrong reason).
- `computeGameContext`: 9-signal fuser; `dataQualityScore` on EMPTY input = 30 (not 0) — absent `dataFreshnessMinutes` defaults to 0 → full freshness points, so "no data" scores as "maximally fresh"; flagged as deliberate owner-decision territory, test pins the real value.
- No-claim floors: calibration min-sample floor + discrimination publish floor; performance-page win-rate floor (allow-listed `winRatePct` + `STAT_PLACEHOLDER`); journal runtime guard (body + title); blog runtime guard (excerpt + content + title/SEO on the API route AND the `[slug]`/index page renders + OG/meta); promotions disclosure/RG/category banned-hype scan; preview-page bootstrap/seed-pick leak fix (mirrors `/api/picks`); lifecycle + losses rollups (Published = `info`, never a fabricated `good`).
- Backtest truth: `BACKTEST_TRUTH.beatsNaive === false` preserved (never spun).
- Engine-integrity tests pinned: `orderReplayGames` no-lookahead spine; brier/ECE boundary tests; settlement no-lookahead invariance, full-output determinism, reversed-orientation swap; `studioWorkspaceProps`, segment-error-boundary shapes, `consumeRateLimit` isolation; historical-backfill engine (gated).
- Robustness: `/fantasy` OOM fix (sequential nflverse loaders); fail-open `.catch` on `/api/picks`, admin users/posts/picks, `/api/promotions`, cockpit review/tasks/agent-detail (using `Prisma.*GetPayload<typeof args>[]` to preserve `include`/`select` typing); Sleeper input sanitization; two denial-of-wallet rate-limits.

## Data sources named
- nflverse (sequential loaders on /fantasy to fix OOM).
- Sleeper (input sanitization).
- Route inventory: `/api/picks`, `/api/blog`, `/api/promotions`, `/cockpit`, `/cockpit/agents`, `/fantasy`.
- Referenced: `docs/gse/gate-decision-packet.md` (gated items + exact authorize phrases).

## Findings (numbers and facts, not vibes)
- Branch state: 72 additive commits, green at HEAD `bde90e88`, 72 ahead of prod `cbb52634`, NOTHING pushed/merged/deployed/gate-flipped; additive-only with a lone deletion (one dead private `Metric` helper, 0 refs); no schema/migration, no env/secret, no Stripe/money, no fake data, no Lumera/XXX, no-claim discipline preserved + extended.
- Adversarial review: 4 independent skeptics read only the committed diff. Robustness + constraint-compliance rated CLEAN (no fail-open masking, no crossed gate, no removed feature; 9 concerns re-reasoned and cleared). 5 real defects confirmed, all fixed:
  - D1/D2 (HIGH): the blog title/SEO no-claim guard was wired into `/api/blog` but missed on the actual page renders (h1 / OG / `<title>` / meta / index h2) — build-green hid it. Fixed + a render-site test added; Round 4 follow-up hunt confirmed the pattern exists nowhere else.
  - D3/D4 (MED): the clarkWest fail-closed test passed for the wrong reason (degenerate-variance fixtures); rebuilt to genuinely open the gate at n≥30 and close it at n=29.
  - D5 (LOW): misleading comment in a pre-existing test, corrected.
- Honest flag left open: `computeGameContext` empty-input → `dataQualityScore` 30 because absent `dataFreshnessMinutes` defaults to 0 → full freshness points. Changing the semantic is a deliberate engine-behavior change = owner's call; the test pins the real value.
- Cockpit depth delivered: attention-first hero, always-on health strip, reusable `StatusTile` primitive (adopted in api-costs), ⌘K command palette, `AgentStatusRail` built + wired live into `/cockpit/agents`, Draft→Proven lifecycle rollup, synthetic-monitoring telemetry strip, studio RSC-crash fix; brand + a11y: off-palette colors → semantic tokens; aria-busy labels; `scope="col"` on ~190 table column-headers.
- Build-output note: `prisma:error` / "Authentication failed at localhost" lines are expected no-live-DB SSG noise (build exits 0).
- Owner decisions gate everything: see `docs/gse/gate-decision-packet.md`; merge = production deploy on this clone, so that decision is the owner's alone.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: The clarkWestTest fail-closed gate (n≥30, tStat>1.64) is the engine's statistical comparison guard — it prevents claiming a model beats a baseline without 30+ samples and 1.64σ significance, i.e. it enforces the "never claim a win you can't measure" rule that the trust-target intake program depends on. Serves the calibration/sizing lane directly.
- TRUST-SIGNAL: The `dataQualityScore` 30-on-empty finding is a live trust defect: a context with zero data reports as "maximally fresh," which means downstream calibration weight could treat an empty input as a confident input. Serves the tracking/quality lane; fix candidate with known blast radius (test pins the value, semantic change is owner's call).
- OTHER: The brier/ECE boundary tests and no-lookahead invariants (`orderReplayGames` spine, settlement invariance, determinism, reversed-orientation swap) are the engine-integrity regression suite — they pin honest behavior so backtest numbers can't drift silently; serve the calibration program.
- OTHER: The D1/D2 HIGH defect (compliance guard wired on the API but missing on page renders) is the canonical example of build-green masking a claim leak — relevant to any future public surface (website shows only projections/rankings per the 9/28 public/private doctrine); render-path audits must repeat per page, not per route.

## Engine-actionable? (yes/no + one-line what)
Yes — the clarkWest gate parameters (n≥30, tStat>1.64) and the dataQualityScore empty-input fix are directly adoptable into the engine's comparison-gating and data-quality logic.
