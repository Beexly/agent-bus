# brand-safety-rules-v2.md
## What it is (1-2 sentences)
The v2 brand-safety linter spec extending the v1 tout-language bans with 50+ rules (BS-001 through BS-053) across six categories — fake/speculative data, premature math surfacing, calibration and performance claims, secrets/supply chain, and shadow-mode boundaries — each with regex/AST/runtime detection patterns and block/warn/shadow enforcement actions.

## Key metrics/methods (formulas where given, else "not specified")
Not specified as formulas; the numeric gates are: CLV surfacing requires a closing-line snapshot job plus ≥200 settled picks of history; `/performance` page stays on the "collecting" empty state until `evaluatePublicPerformancePolicy()` returns ACTIVATED AND ≥200 settled picks exist in the current `modelVersion`; bucket accuracy claims require ≥30 settled picks in the bucket plus a 95% CI rendered alongside; shadow→activated promotion requires (a) ≥30 days of shadow data, (b) a calibration proposal in `docs/calibration-proposals/`, (c) recorded human approval; automatic weight adjustment is forbidden (`CALIBRATION_AUTO_APPLY=false` is the only allowed production value); brand-safety test coverage target ≥60 cases (~20 existing v1 + ~40 new).

## Data sources named
Linter at `apps/web/lib/brand-safety/*` (banned-phrases, factor-surface, performance-policy) and runtime guards under `packages/prediction-engine/src/guards/`; data sources listed generically: marketDepth, lineMovement factors; THE_ODDS_API_KEY, STRIPE_*, ANTHROPIC_API_KEY, DATABASE_URL (secrets); `docs/data-source-options.md`, `docs/rejected-data-sources.md`.

## Findings (numbers and facts, not vibes)
- Brand position is codified: "deterministic engine, not LLM" — "AI picks"/"AI-generated picks" is blocked on any public surface; LLM (Claude) is content-layer only and may never invent a number, player stat, or line (BS-004, BS-043).
- Banned tout language: guaranteed, lock, sure thing, easy money, free money, can't lose, make money, profit guaranteed, beat the book; win-rate/ROI/accuracy percentages are blocked outside `docs/calibration-proposals/` or the activated performance-policy branch (BS-001–BS-003).
- Fake-data rules: any factor with `activationState !== 'activated'` must not contribute to public confidence/edge/trueEV; `PlayerSignal` rows with source 'estimated' or 'inferred' are shadow-only; `RefereeSignal`, `VenueSignal`, `WeatherSignal`, `PaceSignal` each require a registered adapter or cannot be queried by public routes; stale factors must be dropped or trigger `gateState = 'blocked-stale'`.
- Premature math: `trueEV` requires an independent fair-probability source wired and activated (the Kelly-side and Poisson-side helpers are pure math, internal-only); `kellyStake`/`recommendStake` must never appear in any rendered page, API response, or email (BS-021 reverted the v6 attempt); "sharp money" framing requires a real sharp-money source (BS-023).
- Rules expire only when the constraint genuinely ends, documented in `docs/calibration-proposals/` and approved; the corresponding test is updated, not deleted (BS-030 noted as relaxing once calibration activation ships and the empty state would mislead).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the factor-activation taxonomy (`activated` vs `shadow` vs stale) and the evidence-source discipline (BS-043: numbers in copy must come from SourceSnapshot; LLM output is never source-of-truth) are the trust-signal publication controls; the RefereeSignal/VenueSignal/WeatherSignal/PaceSignal adapter requirement names the signal types the engine intends to ingest.
- OTHER: calibration gating (Brier ≤ 0.22, ECE ≤ 0.05 floors referenced in calibration proposals), 30-day shadow-data requirement, 200-settled-pick history thresholds — methodology and governance, not game intelligence. No QB-behavior, coaching, OL, or scheme content.

## Engine-actionable? (yes/no + one-line what)
No — it is a linting/governance spec; the only transferable numbers are the shadow→activated promotion thresholds (≥30 days shadow data, ≥200 settled picks, ≥30 per bucket + 95% CI) as publication-readiness criteria.
