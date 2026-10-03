# engine/research/2026-09-24/evidence-first-intelligence-spine.md
## What it is (1-2 sentences)
The product/architecture contract ("doctrine") for Galaxy Sports Edge: an evidence-first intelligence spine — capture every legally usable fact as an immutable as-of record, build point-in-time features without leakage, maintain market-only baselines, and promote signals only after they beat the null under multiple-testing controls — wired 2026-09-25 from the standing operating brief.
## Key metrics/methods (formulas where given, else "not specified")
Calibration floor: Brier 0.2478 is RED against a ≤0.22 floor — do not expand public claims; auto-publish and calibration adjustments OFF. Signal promotion requires: walk-forward / purged / fixture-clustered evaluation beating the market-only baseline and null under multiple-testing controls; kill line pre-registered. Build order S0→S7 with per-sprint gates (S4 = no public superiority claim before the gate; S0 truth/identity/rights freeze before any production fantasy model). Six questions every decision must answer (what/ when/ source/ reliability+freshness/ market belief/ out-of-sample improvement).
## Data sources named
Standing operating brief (Hermes, 2026-09-25); Firecrawl pass-1 source map + pass-2 deep audit (121 sources, 38 findings); Beexly/Sports repo snapshot main @ 7da237b; docs/ops/CURRENT_STATE.md; handoff/FANTASY_DATA_LAUNCH_BLOCKERS.md; packages/data-ingestion/src/source-registry.ts (rights gate); integration-sprint-S0-S7.md (full build order).
## Findings (numbers and facts, not vibes)
- Measured reality check: current Brier 0.2478, eligibility RED.
- Wiring problem named: many research modules exist without production callers; `GameSignal` currently has only two schedule-density writers.
- Eight documented edge classes exist in-repo.
- Operating constraints: every ingested source declared in source-registry.ts with a legal verdict (`assertIngestible()` throws before fetch); never train/evaluate on "latest" tables without as-of/created-at filtering; every displayed datapoint traces to a real source row with fetched_at, source_as_of, license, parser version, raw hash.
- Tier-5 chatter (social/rumor/unverified): cockpit-only, never a standalone pick. Health/biometric: aggregate, consented, non-identifying, privacy-reviewed, separate sensitive-data plane.
- Publish boundary: broad capture + shadow computation can happen immediately; customer-facing probabilities blocked until calibration and evidence gates pass.
- Fantasy: optimization is portfolio/scenario analysis — the model owns the projection, never a heuristic rank, LLM narrative, or optimizer silently becoming "the projection."
- Signal production-eligibility checklist (7 items): rights-cleared, immutable as-of record with provenance, point-in-time materialized features with leakage tests, walk-forward/purged eval beating market-only baseline + null under multiple-testing controls, calibration floors green on sealed holdout, pre-registered kill line, evidence card answering the six questions. Until then: shadow only, or abstain.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Brier 0.2478 RED / ≤0.22 floor — TRUST-SIGNAL
- Point-in-time / as-of architecture as the anti-leakage law — TRUST-SIGNAL
- Kill lines + pre-registered promotion gates — TRUST-SIGNAL
- Publish-boundary doctrine (shadow vs customer-facing) — TRUST-SIGNAL
- Tier-5 chatter cockpit-only rule — TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
Yes — this is the governing doctrine: route every new signal through the S0→S7 build order and the 7-item production-eligibility checklist before any public probability.
