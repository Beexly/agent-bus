# engine/research/2026-09-24/evidence-first-intelligence-spine.md
## What it is (1-2 sentences)
The product and architecture contract for Galaxy Sports Edge, wired 2026-09-25 from the standing operating brief: an "evidence-first intelligence spine" doctrine — capture every legally usable fact as an immutable as-of record, build point-in-time features without leakage, and promote signals only after they beat the null under multiple-testing controls. Objective statement: "Know more useful, earlier, legally usable, time-correct context than anyone else — then let evidence decide which signals deserve to change a probability."

## Key metrics/methods (formulas where given, else "not specified")
Formulas: not specified (doctrine/architecture doc, no equations). Hard numeric gates:
- Brier floor: current Brier is 0.2478 and eligibility is RED against a ≤0.22 floor. Calibration adjustments and auto-publish remain OFF.
- Signal promotion bar ("what 'done' looks like for a signal", all 7 must hold): (1) rights-cleared in legal registry; (2) immutable as-of record with full provenance; (3) point-in-time features with leakage tests passed; (4) walk-forward/purged evaluation beats the market-only baseline and the null under multiple-testing controls; (5) calibration floors (Brier, ECE, coverage) green on a sealed holdout; (6) kill line pre-registered; (7) evidence card answers the six questions. Until then: shadow only, or abstain.
- Six questions every decision must answer: (1) What do we know? (2) When did we know it? (3) Where did it come from? (4) How reliable and fresh is it? (5) What does the market already believe? (6) Does adding our signal improve out-of-sample, out-of-time decisions? A datapoint that cannot answer these is a lead — not a signal.
- Operating constraints: rights gate via `packages/data-ingestion/src/source-registry.ts` (`assertIngestible()` throws before fetch); never train/evaluate on "latest" tables without as-of/created-at filtering ("Point-in-time or it does not exist"); every displayed datapoint traces to a real source row with `fetched_at`, `source_as_of`, license, parser version, raw hash; customer-facing probabilities blocked until S4 gates pass; fantasy optimization is portfolio/scenario analysis (model owns the projection — never heuristic rank, LLM narrative, or optimizer silently becoming "the projection").
- Sensitive data: health/wearable/cognitive/biometric only with consent, minimization, access controls, and a separate sensitive-data plane. Tier-5 chatter (social, rumor, unverified claims): cockpit-only, never a standalone pick.
- Build order S0–S7 with gates: S0 Truth/identity/rights freeze (before training any production fantasy model); S1 durable fantasy slate and contest plane (one sport, one contest family first); S2 point-in-time feature and label store; S3 baseline model-owned projections (one sport/position family); S4 calibration/uncertainty/sealed evaluation ("No public superiority claim before this gate"); S5 ownership/correlation/contest decision engine (only after S1–S4 produce real distributions); S6 high-value signal activation in shadow mode (one factor at a time); S7 production reliability/safety/evidence UX. Ordering principle: do not add signal breadth until identity, point-in-time availability, durable model artifacts, and evaluation receipts are real.
- Wiring fact: many research modules exist without production callers; `GameSignal` currently has only two schedule-density writers. Eight documented edge classes exist.

## Data sources named
- Repository: https://github.com/Beexly/Sports, snapshot `main` @ `7da237b` (https://github.com/Beexly/Sports/commit/7da237bcec21c26f1eeebdd1de6e6e88bd461939).
- Firecrawl pass-1 (source map): `01a0d6cf-7229-7649-a9dd-0758e9425524`; Firecrawl pass-2 (deep audit): `01a0d6d8-8c70-7785-9a0f-24b10ea01f86`.
- Wiring map files: `docs/research/2026-09-24/firecrawl-intelligence-wiring.md` (index), `docs/research/2026-09-24/source-candidates-firecrawl.json` (121 sources), `docs/research/2026-09-24/second-pass-findings-register.md` (38 findings), `docs/research/2026-09-24/integration-sprint-S0-S7.md` (build order), `docs/research/2026-09-24/model-owned-projection-pipeline.md` (10-step schema), `docs/research/2026-09-24/td-props-usage-prompts.md` (GSE props intel), `packages/data-ingestion/src/source-registry.ts` (rights gate).
- Standing operating brief (Hermes): evidence-first intelligence spine, 2026-09-25.
- `handoff/FANTASY_DATA_LAUNCH_BLOCKERS.md` (fantasy launch blockers); `docs/ops/CURRENT_STATE.md` (current calibration state).

## Findings (numbers and facts, not vibes)
- Current measured Brier: 0.2478; eligibility RED against ≤0.22 floor. Do not expand public claims; auto-publish and calibration adjustments remain off.
- Firecrawl source candidates: 121 sources; second-pass findings register: 38 findings.
- Major wiring problem: many research modules exist without production callers; `GameSignal` has only two schedule-density writers.
- Eight documented edge classes exist (foundation present).
- Signal, context, fantasy, and market modules exist; point-in-time / market-baseline architecture exists; calibration and settlement machinery exists.
- The doc is the standing contract: broad capture and shadow computation may happen immediately; customer-facing probabilities remain blocked until calibration and evidence gates pass.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: This doc IS the trust-target intake contract — the 7-condition signal promotion bar and the six-question evidence card define exactly what admits a trust signal (QB-behavioral, coaching, OL, or other) into production. Every other finding in this sweep should be judged against this gate.
- TRUST-SIGNAL: The ≤0.22 Brier floor with current 0.2478 RED status means no public superiority claim is valid yet — every intake item is shadow-only; this is the constraint the whole corpus works under (serves the calibration/sizing program).
- OTHER: The S0–S7 build order gives the wire-first sequencing for every other brief's actionable items (e.g., the min-bottleneck feature and the ingestion standards from this sweep enter via S2/S6, shadow-first).
- OTHER: Tier-5 chatter rule (social/rumor cockpit-only, never standalone pick) and the sensitive-data plane bound the social/nutrition/sleep/cognition/medical lanes in the total-signal intake.

## Engine-actionable? (yes/no + one-line what)
Yes — it is the gating contract itself: apply the 7-condition signal bar, the six-question evidence card, and the S0–S7 ordering to every intake finding before any production wiring.
