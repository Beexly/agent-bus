# docs/ops/CALIBRATION_YES_OPTIONS.md
## What it is (1-2 sentences)
A concise founder decision doc (options A–D) laying out the calibration floors and the staged path from staying dark (Option A) through brand soft cut, internal beta, to a "ceremony YES" (Option D) that flips PERFORMANCE_STATS/LIVE_BOARD only after math plus explicit founder sign-off.
## Key metrics/methods (formulas where given, else "not specified")
Floors (code SoT `path-to-verified.ts`): N≥100 · Brier≤0.22 · ECE≤0.05 · settled non-seed only · free-spine SLA · no auto-flip. Option D additionally needs Brier/ECE under floors AND `FORCE_NO_BET_IF_STALE=true`; N≥100 better 500.
## Data sources named
None.
## Findings (numbers and facts, not vibes)
- Recommended path: A + B now → accumulate settled + calibration metrics → weekly cockpit floor review → D only when green.
- Forbidden shortcuts: calendar pressure ("season started") is not a YES; win-rate without Brier/ECE is not calibration; cron metrics alone ≠ published reliability.
- Counts alone still dress as track record while Brier is RED — keep PERFORMANCE_STATS dark.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The floors are the publish-trust standard for the engine's probabilities: TRUST-SIGNAL — "win-rate without Brier/ECE is not calibration" is the anti-vanity-metric rule.
## Engine-actionable? (yes/no + one-line what)
Yes — the N≥100/Brier≤0.22/ECE≤0.05 floor set is the gating criteria any engine pick surface must check before public accuracy claims; wire these floors as the claim gate.
