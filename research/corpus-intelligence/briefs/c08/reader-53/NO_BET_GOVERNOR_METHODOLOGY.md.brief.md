# docs/gse/NO_BET_GOVERNOR_METHODOLOGY.md
## What it is (1-2 sentences)
GSE's public-safe "no-bet governor" methodology: no bet is a governed decision, not an empty state — the governor suppresses action when evidence, freshness, source rights, calibration posture, model agreement, or responsible-gaming boundaries are not ready, and public explanations may show reason codes and triggers but never formulas, payloads, internals, staking instructions, or unearned probability language.
## Key metrics/methods (formulas where given, else "not specified")
not specified (implementation notes only, no formulas). Public reason codes and states: `missing_required_data`→HARD_PASS, `stale_market_context`→HARD_PASS, `source_rights_blocked`→HARD_PASS, `calibration_drift`→HARD_PASS, `calibration_debt`→PASS, `model_disagreement`→WATCH, `responsible_gaming`→HARD_PASS. Functions named: `computeGseActionScore()` (shadow decision seam), `computeNoBetStrength()` (no-bet pressure + hard-pass reasons), `calibrationActionCap()`, `calibrationRequiresHardPass()`. Each no-bet state reopens only when its specific blocker is repaired (7 reopen gates listed). Copy rules: allowed vs. forbidden public phrasing for no-bet states.
## Data sources named
Code source `apps/web/lib/gse/no-bet-methodology.ts`; tests `apps/web/__tests__/no-bet-methodology.test.ts` (tests scan all public strings through media claim safety, no-claim guard, and performance-claim guard).
## Findings (numbers and facts, not vibes)
- Doctrine: "A strong-looking model read cannot override a hard safety or evidence gate."
- 7 reason codes: 5 HARD_PASS, 1 PASS (`calibration_debt` — the model has not earned the public probability contract), 1 WATCH (`model_disagreement` — independent model votes diverge, counter-case review required before action).
- Confidence and probability stay separate by policy; calibration drift prevents public action until drift returns inside policy bounds and the model card is reviewed.
- Copy bans include: turning a no-bet state into a hidden directional call, implying private info, implying line movement alone proves anything, converting confidence into public probability.
- Boundary: this is local methodology/copy governance only — it publishes no pick, opens no API route, places no wager.
- Status note: updated 2026-07-05; public-safe methodology examples, shadow-only.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- "No bet is a governed decision, not an empty state" — calibrated restraint as a first-class engine output — TRUST-SIGNAL
- Calibration drift/debt gates forcing restraint until probability claims are earned — TRUST-SIGNAL
- Model disagreement → WATCH until the counter-case is explained (parliament consensus before action) — TRUST-SIGNAL
- Stale market context → HARD_PASS (freshness gate on market signals) — TRUST-SIGNAL, OTHER
- Confidence ≠ probability separation; no hidden directional calls — TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
yes — adopt the reason-coded pass/watch system wholesale: attach a machine-readable reason code (calibration_drift, model_disagreement, stale_market_context, etc.) to every engine decision so a suppressed action is a recorded, explainable, reviewable state rather than silence.
