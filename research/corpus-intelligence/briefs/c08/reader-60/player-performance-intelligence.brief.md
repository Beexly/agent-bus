# docs/performance/player-performance-intelligence.md
## What it is (1-2 sentences)
Doctrine (not yet implemented; Zone 3 owner-approval gates) for a Sports OS "Player Performance Intelligence" layer that synthesizes structured biomechanics, tracking, and physical performance data into calibrated signals on player health, capability trajectory, and situational readiness, supplementing the odds-based prediction engine.

## Key metrics/methods (formulas where given, else "not specified")
Proposed `PerformanceSignal` schema: `playerId, playerName, sport ('MLB'|'NFL'|'NBA'|'NHL'), signalType ('velocity_trend' | 'injury_status' | 'workload_flag' | 'tracking_efficiency' | 'physical_readiness'), metricName (e.g. 'pitch_velocity_mph', 'yards_after_contact'), metricValue, metricUnit, trendDirection ('up'|'down'|'flat'|'volatile'), trendWindow (e.g. 'last_7_days', 'last_3_starts'), sourceId, sourceTier ('T1'-'T4'), evidenceDate (ISO 8601, must be fresh), ttlHours, licenseVerified (boolean; false blocks public citation), confidenceWeight (0.0-1.0 in prediction scoring)`.
Source quality tiers T1 (official league injury reports, official tracking programs) → T6 (AI-generated performance summaries, FORBIDDEN as evidence). Concrete calibration gate: win probability claims citing player performance require a ≥30 settled pick calibration window with the performance dimension active. MVP path: (1) ingest official league injury feeds (T1) into Evidence Vault, (2) surface injury status with freshness disclosure, (3) add `injury_status` signal type with TTL; V2 = Statcast (MLB) + Next Gen Stats (NFL); V3 = multi-sport comparison, workload flags (pitch/snap count trends), performance-weighted confidence scoring.

## Data sources named
Statcast/Baseball Savant (T2 licensed, MLB), Next Gen Stats (T2 licensed, NFL), Second Spectrum (NBA, licensed), Trackman/Rapsodo radar (licensed), force plate / GPS wearable data (league or team partnerships only), OpenSim / BiomechanicsToolkit / OBP (Open Biomechanics Project) / Driveline R&D (research only — commercial use without license forbidden), Baseball Reference / Pro Football Reference (T4 internal context), official league injury report feeds (T1), The Odds API (current engine primary signal, `packages/prediction-engine/`).

## Findings (numbers and facts, not vibes)
- Wave 3 line audit: performance signals exist across four modalities — physical metrics (force plate, GPS), radar/tracking (pitch velocity, bat speed, positioning), video (play classification, movement efficiency), external health indicators (injury reports, participation caps).
- No single open-source repository provides a complete, commercially licensable player performance pipeline; all high-signal sources require separate commercial licenses.
- Highest-quality structured data comes from official league tracking (Statcast, Second Spectrum, Next Gen Stats); paid enrollment/academic partnerships do not extend to commercial sports intelligence products without explicit written agreement.
- Open biomechanics repos (OpenSim, BiomechanicsToolkit, OBP, Driveline R&D) carry restrictions on commercial redistribution and inference use.
- Public/private boundary: pick cards with performance context and Evidence Drawer performance tier are PRO/ELITE only; biomechanics metrics, force plate/GPS/tracking raw data are NEVER public (internal only); injury status from T1 is public with freshness disclosure; "uses Statcast data" attribution is public, underlying payload private.
- Licensing risks: OBP or Driveline data in the pipeline without written commercial license = P0; biometric data appearing in logs = P0 (no raw biometric values in payloads or error logs); T1 lock on all injury-status claims; `licenseVerified` gate before Evidence Vault admission; claim governance scanner must cover performance-derived pick text.
- Approval gates: any implementation work requires Owner; new provider requires Owner + legal license review; academic datasets in production require Owner + legal review.
- Codex audit requirements: no ingestion adapter without documented license, no metric values in public API responses, TTL enforcement on all performance evidence, report OBP/Driveline data without license as P0.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR — velocity_trend / tracking_efficiency signals apply to QBs (passer mechanics, pressure movement) and pitchers.
- COACHING — injury_status / workload_flag feeds participation-cap and snap-count context.
- OL — line-level readiness and physical-readiness signals fall under the unit layer.
- TRUST-SIGNAL — the T1–T6 tiering, licenseVerified gate, TTL enforcement, claim governance scanner, and P0 licensing rules are a full evidence-trust framework.
- SCHEME — tracking_efficiency signal captures movement/positioning efficiency.
- OTHER — commercial-licensing constraints on biomechanics data (OBP/Driveline/Statcast/Second Spectrum/NGS).

## Engine-actionable? (yes/no + one-line what)
Yes — the PerformanceSignal schema, T1–T6 source tiering, and Zone 3 approval gates are a complete wiring spec for the engine's performance-signal layer, ready once the owner gates clear.
