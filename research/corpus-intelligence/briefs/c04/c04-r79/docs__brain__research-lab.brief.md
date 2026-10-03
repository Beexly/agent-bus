# docs/brain/research-lab.md

## What it is (1-2 sentences)
Sports OS doctrine ("Status: Doctrine only. Implementation requires approved change proposal.") defining the Research Lab — a cockpit-only internal workspace for 10 structured research brief types (each with required inputs, outputs, and evidence tiers), plus a 2026-09-05 algorithm reference mapping every brief type to the live prediction-engine modules that produce the numbers each brief cites.

## Key metrics/methods (formulas where given, else "not specified")
No formulas specified; evidence-tier requirements act as the method constraint (Tier 1 required for injury incident date/mechanism and diagnosis; Tier 2 for lines, snap counts, usage, weather; Tier 5 = rumor requiring triage). Engine module mapping for each brief (paths relative to `packages/prediction-engine/src/`, barrel-exported importer-verified modules only; archived R&D under `attic/` out of scope):
- Game Context → `game-context.ts`, `team-strength-filter.ts`, `elo-from-results.ts`, `team-rates.ts` (pre-game features, Elo-based fair value, team base rates)
- Prop Market → `poisson.ts`, `skellam.ts`, `dixon-coles.ts`, `player-projection.ts`, `player-rate-posteriors.ts`, `opponent-adjusted.ts` (expected player/team total distributions)
- Market Movement → `market-read.ts`, `clv.ts`, `clv-capture.ts`, `market-anchored-reconciliation.ts`, `pipeline/live-orchestrator.ts` (+ `hawkes-steam.ts` steam detector)
- Injury / Player Context → `player-archetype.ts`, `opponent-adjusted.ts`, `expected-metrics/`
- Fantasy Decision → `earned-weight-ensemble.ts`, `tweedie-baseline.ts`, `ml-estimator.ts` (ensemble-weighted projections with baseline comparisons)
- Coach / Scheme Change → `edge-lab/nfl-change-point.ts`, `edge-lab/features/nfl-regime-change.ts`, `game-script.ts` (detected regime breaks; script-conditioned expectations)
- Rumor Triage → `metrics/market/market-gravity-index.ts`, `metrics/market/stale-line-risk-score.ts`
- Content / SEO → `pick-proof-receipt.ts`, `certificate/` (citable proof-of-record artifacts, never invented stats)
- Competitor / Product → `docs/intelligence/` corpora + `gse-competitive-intel` repo
- All briefs (confidence) → `scoring.ts`, `conviction-tier.ts`, `calibration-apply.ts`, `probability-calibration.ts`, `temperature-scaling.ts`, `kelly.ts`, `robust-kelly.ts` (confidence score, conviction tier, calibrated probability, quarter-Kelly stake lens)
- Settlement/honesty surfaces inherited by every brief: `settlement.ts`, `honesty/no-bet-gate.ts`, `metrics/decision/no-bet-pressure.ts` (can force a hard pass), `forecast-skill-eprocess.ts` (scores probability skill over time)
- Engine identity rule: deterministic factor model with explicit weighted factors — never "AI" (brand rule 8); an LLM drafts brief prose only and never chooses a pick.
- Governing rule: "If a brief's numbers cannot be traced to one of the modules above, the brief is not ready — write the gap down instead of filling it."

## Data sources named
Generic Tier 1–5 evidence sources (specific providers not named per brief); Weak Signal Engine (`docs/brain/weak-signal-engine.md`, feeds Rumor Triage); Fantasy War Room spec (`docs/brain/fantasy-war-room.md`, feeds Fantasy Decision); Market Gravity (`docs/brain/market-gravity.md`, feeds Market Movement); Evidence Vault (pick rationale destination); the `gse-competitive-intel` repo.

## Findings (numbers and facts, not vibes)
- 10 brief types defined: 1. Injury Timeline, 2. Player Context, 3. Game Context, 4. Prop Market, 5. Fantasy Decision, 6. Coach / Scheme Change, 7. Rumor Triage, 8. Market Movement, 9. Content / SEO, 10. Competitor / Product.
- External benchmark cited for the Competitor/Product brief: **nfelo 66.61% SU / 53.70% ATS vs close / +5.61% CLV** — to be versioned, never silently merged.
- Cockpit-only rule: no lab output reaches a public surface without going through the full pick or Brain answer publication gate; lab outputs feed pick rationale (via Evidence Vault), Brain answers, the content pipeline, and the operator watchlist — they are inputs to governed publishing workflows, not standalone products.
- Every lab brief must meet Brain-answer evidence standards: confidence levels and source tiers declared; weakening signals included.
- Injury Timeline brief: incident date + mechanism require Tier 1; official diagnosis Tier 1 or Tier 2; rehab milestones Tier 1 preferred; return timeline Tier 1 or Tier 3 with caveat; includes market reaction and fantasy/pick implication.
- Market Movement brief: required outputs include movement size and speed, timing vs. known news, book agreement/disagreement, Market Gravity classification (WATCH / LEAN / PICK / AVOID); **forbidden: any unverified sharp-money claim.**
- Coach / Scheme Change brief: personnel changes confirmed (Tier 1); new coordinator's historical scheme tendencies (Tier 2–3); projected usage impact on key players (Tier 2–3 with appropriate confidence); timeline for scheme installation.
- Rumor Triage brief: verification status, Tier 1–2 corroboration check, market alignment check, recommended action (verify / watchlist / dismiss).
- Competitor / Product brief: no fabricated competitive intelligence — all claims must be sourced.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: dedicated Coach / Scheme Change brief type (new coordinator historical tendencies, projected usage impact, installation timeline) backed by regime-detection modules (`nfl-change-point.ts`, `nfl-regime-change.ts`, `game-script.ts`).
- SCHEME: coordinator scheme fit notes required in Player Context briefs; scheme matchup notes required in Game Context briefs; script-conditioned expectations module.
- QB-BEHAVIOR: `player-archetype.ts` and `opponent-adjusted.ts` produce role-adjusted expectation shifts when personnel changes (covers QB role/usage changes).
- TRUST-SIGNAL: Evidence Vault feed for pick rationale; proof-of-record artifacts (`pick-proof-receipt.ts`, `certificate/`) with the "never invented stats" rule; the trace-to-a-module-or-write-the-gap rule as an anti-fabrication control; full publication gate before any lab output goes public.
- OTHER: fantasy decision pipeline (earned-weight ensemble + tweedie baseline); rumor triage with market corroboration; market movement analysis with the verified-sharp-money-claim ban; nfelo external benchmark reference; deterministic-factor-model brand rule (never "AI").

## Engine-actionable? (yes/no + one-line what)
Yes — the brief-to-engine-module table is a ready-made wiring map: each of the 10 brief types maps to specific prediction-engine modules (e.g., Market Movement → `hawkes-steam.ts` steam detector + `clv-capture.ts`; Coach/Scheme Change → `nfl-regime-change.ts`), and the "trace-to-a-module or write the gap" rule is a directly usable gap-discovery protocol for the wiring backlog.
