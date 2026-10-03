# branch-status-2026-06-03.md
## What it is (1-2 sentences)
Snapshot of the `claude/data-source-eval-2026-06-03` branch: what the "calibrated, not a tout" build (independent edge engine, Poisson second estimator, CLV capture, glass box) shipped as code vs what still needed founder-gated deploy steps, as of 2026-06-03.
## Key metrics/methods (formulas where given, else "not specified")
- Independent edge engine `assessEdge` — separates model self-grading from edge estimation (formulas not given).
- Independent Poisson estimator from team scoring rates (λ from real `TeamGameLog` scores), fires only for soccer/hockey/baseball after `MIN_GAMES_FOR_RATES` (5) settled games, gated on `TEAM_RATES_AVAILABLE=true`.
- CLV grading wired in `settle-sport.ts` feeding a private `/admin/clv` dashboard.
- Calibration over win-rate doctrine: eligibility-style honesty, "no fabricated data" (real λ, no guessed API schemas).
## Data sources named
Kalshi (read-only fair-value adapter, the CLV keystone), odds-api.io (failover/merge logic done; adapter pending — wire format unconfirmed), API-Sports (`API_SPORTS_KEY` set but zero code consuming it per the related strategy doc), ESPN `/scores` for settlement, Anthropic Claude for explainer/autopsy budgets.
## Findings (numbers and facts, not vibes)
- Commits shipped: 9 (edge engine, Poisson estimator, CLV pipeline, Kalshi adapter, odds failover logic, glass-box explainer, loss-autopsy draft generator, data-source decisions).
- Tests green: engine 268, data-ingestion 45, web 763 (brand-safety + admin-gating).
- Data-source decisions: chose Kalshi + odds-api.io + API-Sports; rejected SerpApi/SportDB; deferred Polymarket/Sportradar; declined NewsData.
- 3 migrations authored, NOT applied: `20260603120000_add_pick_clv`, `20260603130000_seed_pick_explanation_budget`, `20260603140000_seed_loss_autopsy_draft_budget` (additive/idempotent; founder-gated).
- Still open: odds-api.io adapter (#5), Lighthouse CI (#4), SharpSports "Second Opinion" (#6), monetization/B2B fair-value API (#7), surface-routing/Haiku flips (#9).
- Secrets note: leaked keys listed in `docs/source-providers/kalshi-and-odds-api-io-evaluation-2026-06-03.md` were flagged for rotation (odds-api.io, api-football/API-Sports, NewsData.io, SportDB.dev, an unrelated x.ai/Grok key).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- CLV-as-proof doctrine (prove it beats the close, not win-rate) → TRUST-SIGNAL.
- "Engine stops grading itself" independent estimator → OTHER (calibration architecture).
- Data-source decisions with explicit rejects → OTHER (provider intelligence: which feeds were evaluated and ruled out).
## Engine-actionable? (yes/no + one-line what)
Yes — confirms the CLV capture pipeline + independent Poisson estimator code existed and was gated, which is the provenance for what today's CLV/shadow wiring lanes are standing on.
