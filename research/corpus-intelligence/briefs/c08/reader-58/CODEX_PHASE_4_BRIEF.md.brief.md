# docs/ops/archive/root-museum/CODEX_PHASE_4_BRIEF.md
## What it is (1-2 sentences)
A 2026-05-22 Claude-authored build brief for "Phase 4" of the Galaxy Sports Edge master plan — turning the platform from a transparent picks service into a user tool layer — listing 8 major deliverables plus community features, sequenced as 10 tagged PRs (PR-4.1 through PR-4.10), gated on a 12-condition verification checklist.
## Key metrics/methods (formulas where given, else "not specified")
- Model Court latency/cost targets: <$0.05/query, <3s p50, <6s p95.
- Model Court quotas: FREE 3/day, PRO 30/day, ELITE unlimited; answer cache per (gameId, questionHash) for 7 days.
- Calibration training: user confidence slider 50–95% (default 50%); weekly insight job runs Saturdays for users with 20+ estimates/week; opt-IN by default.
- Edge Lab 9 tools: Kelly sizer (full + fractional), hedge calculator, CLV tracker, arbitrage finder, middling scanner, SGP correlation matrix, Live Game Simulator (Monte Carlo, 10k rollouts, in-browser), backtesting (Pro+ only), bankroll tracker/paper trading.
- Model-issues: rate limit 5 issues filed per user per day, duplicate detection.
- Phase 4→5 gate includes: Model Court citations on ≥80% of FREE-tier queries; ≥10 active opted-in calibration users; ≥5 model issues filed and triaged.
## Data sources named
Internal only: `docs/product/*-spec.md`, `docs/galaxy-sports-edge-master-action-plan.md` Part 5, master plan Part 2.E (monetization/research transparency), DEC-006/DEC-012/DEC-020, `docs/ops/decision-log.md`, `docs/ops/stuck-queue.md`.
## Findings (numbers and facts, not vibes)
- 8 major deliverables + 5 smaller community surfaces (pick-along tail/fade tracking, reactions, loss leaderboard, "fade me" badge), ~4–6 weeks of work.
- Step 1 is an owner decision on flipping `PERFORMANCE_STATS_ENABLED` from false to true (DEC-OPEN-E) — called "the single biggest content-policy decision in the entire master plan."
- All LLM surfaces use Claude API only (DEC-020 locked); compliance scanner runs on every AI-generated surface output, no exceptions.
- Affiliate deeplinks are single "Place this at [book]" links on pick detail pages only, below the pre-mortem, "Affiliate link" disclosure label, user-toggleable (default on); books enrolled undecided (DEC-OPEN-A).
- Pick-along reactions are semantically tied to the bet: agree / disagree / fade only.
- Phase 5 (not this phase) explicitly scopes: Anti-Galaxy parallel model, programmable DSL, B2B widgets + API, live war room, cross-sport correlation engine.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: product-build sequencing brief — no sports-content signal.
- TRUST-SIGNAL: the trust-gate flip decision, Public Ledger, reproducibility receipts (per-pick input data downloadable), public stats CSVs, loss leaderboard, "fade me" badge, per-pick CLV tracker, and mandatory compliance scanner on AI outputs — all mechanisms that publish honest performance data.
## Engine-actionable? (yes/no + one-line what)
No — product/ops build plan; nothing in it computes sports predictions. (Partial: the Edge Lab CLV tracker and calibration-training `UserPickEstimate` schema are trust-infrastructure, not engine signal.)
