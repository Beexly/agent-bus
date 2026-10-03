# docs/evidence-engine.md
## What it is (1-2 sentences)
The full architecture and implementation spec for GSE's Evidence Engine (Phases 2 and 3) — the calibration-gated extension of the v1 market-derived scorer adding independent, source-attributed factors (player availability, referees, weather, pace, schedule) with shadow-mode activation.
## Key metrics/methods (formulas where given, else "not specified")
Scoring loop: `score = marketBaseScore + Σ(factor.weight × factor.signedDelta)`, clamped 0–100; stale factor → `blocked-stale`; insufficient sample → skip. Brier score = `mean((predicted − observed)²)` per bucket (50–59, 60–69, 70–79, 80–89, 90–100) and overall. Shadow→activated gates: ≥30 days shadow data, per-bucket Brier improvement ≥0.005 at p<0.05 with no segment degradation, human-approved proposal in `docs/calibration-proposals/`, regression test in `calibration.test.ts`. Drift: rolling 30-day Brier vs prior-30-day Brier, >0.02 absolute drift triggers `drift-warning` (BS-034). Worked example: restDays factor over 247 NBA games, Brier 0.231→0.223 (+0.008, p=0.02) at weight=0.4. Weights never auto-tuned; never more than one factor activated per calibration cycle.
## Data sources named
SourceSnapshots from named providers ('the-odds-api', 'api-sports.io', etc.); NFL/NBA stats APIs; referee assignment data; weather feeds; proposed first factor `restDays` computable from existing schedule data. Trust levels: high (official source), medium (reputable third party), low (derived/inferred).
## Findings (numbers and facts, not vibes)
- Initial factor registry: 4 activated market factors (marketDepth, lineMovement, consensusPct, impliedProbability) + ~30 shadow factors across schedule/team/player/official/venue/weather/pace categories.
- Public-copy rule for referee factors: may say "this crew tends to call a higher total" only when activated AND difference exceeds 2 SD from league mean; otherwise forbidden.
- Player factors default medium/low trust; activation requires proven adapter + sample-size threshold (typically ≥10 games).
- Gate states: published | shadow | blocked-stale | blocked-insufficient-evidence | blocked-brand-safety; "No pick" is a first-class decision.
- ActivationState states: shadow (born state) / activated / archived; public routes only read activated GameSignals.
- Migration order: SourceSnapshot + IngestionRun tables first, then GameSignal + FactorDefinition, then shadow-pick computation, then one end-to-end shadow factor (restDays), dashboard, linter, calibration proposal.
- Audit trail: modelVersion, evidenceEngineVersion, factorContributions (enum-bound reasons), evidenceBundleId — "why a 78?" reconstructs deterministically.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR — starAvailability/minutesProjection/usageRate player factors feed player-level behavior modeling.
- COACHING — refTotalAvg/refFoulRate/refHomeBias official factors; divisionContext rivalry flag.
- OL — none.
- TRUST-SIGNAL — trust levels per factor, mandatory source attribution, shadow→activation calibration gate, brand-safety linter.
- SCHEME — pacePerGame (possessions/48), efficiencyOff/efficiencyDef, homeFieldAdvantage, surfaceType.
## Engine-actionable? (yes/no + one-line what)
Yes — this is the engine's Phase 2/3 build blueprint: implement tables, shadow-mode factor computation, and the calibration-proposal gate before activating any non-market factor.
