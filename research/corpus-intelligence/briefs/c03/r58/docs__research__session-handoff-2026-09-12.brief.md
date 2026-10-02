# docs/research/session-handoff-2026-09-12.md
## What it is (1-2 sentences)
Session handoff from 2026-09-12 recording a fully autonomous agent session that executed the ASTRA redesign, adversarial audit, record rebuild, and founder-picks build on Beexly/Sports (merged 40+ PRs, #769–#791), with the live production state, open founder-only env actions, the nine agent laws, and the next work order.
## Key metrics/methods (formulas where given, else "not specified")
- Production state 2026-09-12T02:00Z: calibrationEligibility GREEN streak 93; canExposePerformanceStats true; calibrationPublished true; revenueLadder PROVEN; settlement HEALTHY (0 of 2806 overdue); canonicalSettled 2300; MODEL_VERSION v5.2.7 (untouched); floors n 100 / Brier 0.22 / ECE 0.05 (untouched).
- The established blocker: CLV beat-close 23.0% vs 52.4% required — a model problem, not a gate problem. Selective path (δ=0.1, rank on marketFairProb) ON; historical projection of that filtered set passes floors (Brier 0.150, RES 0.041).
- Record fixes: PUSH was structurally unreachable for spreads/totals → now published and graded on the POSTED book line; calibration bucket win rates excluded pushes (were averaging push as half a win); CORRELATION WIN_RATE excluded pushes (were counting every push as a loss).
- Founder-picks factor engine: depth chart, teammate OUT, OL OUT, injury, matchup split, underlying metric, consensus, rest/B2B — 15 unit tests.
- Guardrails 25/26 passing; known failure: dependency-audit stale waivers for `next` and `postcss` (founder-only fix).
## Data sources named
nflverse (GSE Score LIVE reads processGrade from it; SAMPLE is a pool percentile). Scrape wave 1: docs/research/competitor-scrape-2026-09-12.md; wave 2: docs/research/scrape-wave-2.md. Ledger: docs/ops/AGENT_LEDGER.md rows A-1..A-41. Line archive: 37k+ snapshot rows (C-62).
## Findings (numbers and facts, not vibes)
- CLV beat-close 23.0% vs required 52.4% was the only established blocker on 2026-09-12; selective δ=0.1 + marketFairProb ranking was turned ON and the filtered set's historical projection passed floors (Brier 0.150, RES 0.041).
- Push-handling corrections: pushes excluded from calibration bucket win rates and from CORRELATION WIN_RATE (previously flattered sub-50% buckets and counted every push as a loss); /api/performance floor counts use decided picks only.
- Founder env actions were founder-only (EVENT_ODDS_INGEST_ENABLED=true, ADMIN_EMAILS, INTERNAL_LLM_BASE_URL + Vercel AI Gateway key, LINE_ARCHIVE_ENABLED already ON with 37k+ rows).
- Nine laws include: never push to main directly (PRs only); never modify schema.prisma/migrations/workflows/guardrails/.claude/.env*/package-lock.json/.gitignore/.githooks/ai-control-plane; never flip a gate or env flag; never write an unobserved claim; never mark DONE without DoD passing.
- Shipped systems: ASTRA 12 owner items, founder picks (founder-v1), GSE Score wired into trade analyzer/draft assistant/best-ball board (8 tests), LineStar/PropFinder parity (DK Classic CSV export, max exposure slider 10–100%), Lens Switcher differentiated per persona (FAN/BETTOR/CREATOR/ANALYST), calibration skill metrics (BSS, NLL, Murphy, null-band ECE).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Founder-picks factor engine includes OL OUT and teammate OUT factors (15 unit tests) — OL
- CLV 23.0% vs 52.4% required: the established model blocker with the δ=0.1 selective path ON — TRUST-SIGNAL
- Push-handling corrections (no more flattered sub-50% buckets) — TRUST-SIGNAL
- The nine agent laws (no main pushes, no gate flips, no unobserved claims) — TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
Yes — the CLV 23%-vs-52.4% blocker with the selective δ=0.1 + marketFairProb path (Brier 0.150 / RES 0.041 on the filtered set) is the quantified baseline any model improvement must beat.
