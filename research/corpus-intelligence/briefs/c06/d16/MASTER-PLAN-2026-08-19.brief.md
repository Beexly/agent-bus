# ops/MASTER-PLAN-2026-08-19.md
## What it is (1-2 sentences)
Single-source-of-alignment master plan for the night of 2026-08-19 covering two tracks: Track R (revenue — deploy the site, build per-book price-quality metrics) and Track E (edge — one final pre-registered experiment L-17, then silence). Signed-off-done criteria: deployed SHA, growing `odds_line_snapshots`, L-17 verdict, L-18 BPQI/BURS merged, C-31 fixes on main.

## Key metrics/methods (formulas where given, else "not specified")
- L-17 (final edge experiment): six path-geometry features (pre-entry-only realized variation, increment autocorrelation, sign changes, dispersion decay, skew, staleness) -> Ridge regression, grouped cross-validation BY GAME, predicting realized CLV on the 241 clean-close games. Pre-registered thresholds: r >= 0.15 continue; r < 0.10 the edge program STOPS on this corpus — one unhedged sentence, no appeal, pivot to Track R + forward NFL data accumulation.
- L-18 (product numbers): BPQI = per-book price-quality vs consensus close; BURS = book update reliability, both on the 241-game corpus. Formulas not specified in this file.
- "19-minute corpus" referenced for minute-cadence MLB totals (closed, L-15, L-16).
- Quarantined: C-41, fanatics moneyline prospective-only lead — no retrospective claims; prospective pre-registered track only.
- LINE_ARCHIVE_ENABLED must be the exact lowercase string "true".

## Data sources named
Append-only multi-book price-path archive (~1.37M rows) `odds_line_snapshots` (the surviving asset); Fanatics moneyline (quarantined prospective lead C-41); Kalshi (no data purchases until deploy + BPQI board ship); no data purchases (cadence, props, Kalshi) pending.

## Findings (numbers and facts, not vibes)
1. Ground truth 2026-08-19: production at `b71f7e28`; `main` at `a0a64857` with 124 commits NOT live (checkout 400 fix, NFL season-window fix, npm build fix, premium-leak gates, line-archive wiring). One blocker: Vercel redeploy from main.
2. Edge verdicts so far: market-level close-prediction DEAD (correlation artifact); per-book shading DEAD; cross-book lead-lag DEAD; minute-cadence MLB totals closed.
3. The surviving asset: append-only 1.37M-row multi-book price-path archive + calibration pipeline — differentiator claim: no competitor publishes per-book price-quality history or calibration curves (from round-7 facts packet).
4. Track R: (a) deploy; (b) C-31 fixes: free-teaser truncation, /faq false "every pick free" claims (FTC exposure), /pricing RiskDisclosure, daily-slate date bound; (c) L-18 BPQI/BURS; (d) public metrics surface: BPQI board + calibration scorecard — differentiation through verified honesty, forbidden-claims list in L-18 row.
5. Do-not-do: no new mechanism studies on the 19-minute corpus; no data purchases until deploy AND BPQI board ship; the "first-half odds are ~free" claim is packet-sourced and unverified — verify before spending; no gradient boosting anywhere near 241 games; no new Workflow fleets without explicit founder ask.
6. Agent assignments: founder (approve deploy only); browser agent (redeploy main@a0a64857, smoke, report SHA/log, only verify LINE_ARCHIVE_ENABLED="true"); hermes (L-17 then L-18 on existing extract; no DB writes); claude (merge, C-31, metrics surface, keep main green); deepseek (audit results only, no open-ended rounds); copilot (nothing).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Public BPQI board + calibration scorecard (honest verified claims, forbidden-claims list): TRUST-SIGNAL.
- Realized CLV as the prediction target of the edge experiment: TRUST-SIGNAL — CLV as selection-quality ground truth.
- Appendix: 1.37M-row multi-book price-path archive as core moat: OTHER.
- No QB/OL/coaching/scheme content: operations/research strategy doc. OTHER.

## Engine-actionable? (yes/no + one-line what)
No (strategy/alignment document) — but its surviving directives (CLV as measured target, BPQI/BURS per-book quality numbers, honest calibration claims, the Ridge-with-grouped-CV-by-game template) are already in the engine program via the later launch docs.
