# docs/ops/hermes/BUILD-QUEUE-2026-08-20.md
## What it is (1-2 sentences)
Hermes's autonomous build queue for 2026-08-20: five launch-build tasks (B-1 Kill Ledger page, B-2 BookGrade+PulseScore page, B-3 metric-honesty glossary component, B-4 verify button on pick cards; B-5 zero-affiliate pledge blocked until founder F-6 sign-off) with strict standing rules (branch per task off origin/claude/cron-config-placement-verify-qsl19t, tsc/trust-gate/ledger guards, copy honesty rules, sealed paths).
## Key metrics/methods (formulas where given, else "not specified")
not specified — build spec. Standing gates: `npx tsc --noEmit -p apps/web` 0 errors, `node scripts/guardrails/trust-gate.mjs` OK, `node scripts/ops/check-agent-ledger.mjs` OK with real exit code. Copy rules: banned words "exploitable", "fade", "guaranteed", "beat the book", "edge" as a promise; every metric ships a "What this measures / what it does not" block; ECE copy carries the confidence-echo caveat and renders the LIVE value, never a hardcoded number.
## Data sources named
Merged research docs (`docs/ops/hermes/l1*-*/RESULTS.md`, `docs/ops/edge/*`) — L-15 market-level close prediction, L-16A per-book shading, L-16B cross-book lead-lag, L-17 price-path geometry; BookGrade/PulseScore numbers transcribed EXACTLY from `docs/ops/hermes/l18-book-metrics/RESULTS.md` (totals only for BookGrade; spread BPQI must NOT appear as price quality); provenance: 241 MLB clean-close games, 2026-05-22 to 2026-08-20.
## Findings (numbers and facts, not vibes)
- BookGrade (totals only): per-book mean deviation vs consensus close, n, clustered t. PulseScore: fraction of polls with a changed quote — mybookieag 0.51, FanDuel 0.070, William Hill 0.061.
- Kill Ledger page: four dated entries (L-15, L-16A, L-16B, L-17) with mechanism, pre-registered rule, observed numbers, verdict, evidence link; thesis "We test the strategies this industry sells. When they fail, we publish the failure."
- Mandatory BookGrade copy: "A quality score, not a betting signal. It tells you what a price historically cost at a book, not which side to take." (totals only — spread BPQI explicitly excluded from price quality, note says why.)
- B-5 (zero-affiliate pledge page + `/api/pledge/affiliate-free`) is BLOCKED until founder F-6 sign-off; spec ready with violation clause (any violation published within 24h).
- Production deployed at commit 90aa7652 — the deploy blocker was gone at queue start.
- Sealed paths untouched: packages/db/prisma, .github, scripts/guardrails, apps/web/lib/ai-control-plane, .env*, package-lock.json.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Per-book price-quality metrics (BookGrade) and quote-persistence (PulseScore) as public trust surfaces [TRUST-SIGNAL]
- Kill Ledger of failed strategies with pre-registered thresholds, published publicly [TRUST-SIGNAL]
- Zero-affiliate pledge with machine-readable enforcement [TRUST-SIGNAL]
- Honest metric-copy doctrine (what-it-measures block, no banned claim words) [OTHER]
## Engine-actionable? (yes/no + one-line what)
YES (indirectly) — the BookGrade/PulseScore provenance (241 MLB clean-close games) and kill-ledger failure entries are book-level and strategy-level data the engine's market-signal modules can consume.
