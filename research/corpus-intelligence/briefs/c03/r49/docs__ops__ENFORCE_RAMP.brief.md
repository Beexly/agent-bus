# docs/ops/ENFORCE_RAMP.md
## What it is (1-2 sentences)
A runbook describing the INTENDED (not yet built) ENFORCE ramp for GSE's AI control plane: a staged traffic ramp per surface behind a safety predicate, with explicit warnings that no registry, kill switch, or production wiring exists today.
## Key metrics/methods (formulas where given, else "not specified")
Ramp steps: 0% → canary 1% → 10% → 50% → 100%; `globalEnforceEnable` default false. `canRampEnforce()` predicate requires ALL: `shadowDays >= 14`, `falseRefuseRate <= 0.05` (if known), a passed drill (`drillPassedAt` non-null), drill passed within last 90 days. Step widening additionally requires clean shadow false-positive notes for the current window AND no cashOs/business-metric regression. Drill script `srqc-enforce-drill.ts` (gated `SRQC_DRILL=1`; exit 2 if unset, 0 on pass, 1 on assertion failure) asserts synthetic GE2 violation → `REFUSE` under SRQC_ENFORCE=1 (synthetic env only, never process.env) while SHADOW mode still returns `ADMIT` on the same events; emits one JSON line `{kind:"srqc_enforce_drill", passed, at, ge2Detected, enforceRefused, shadowStillAdmits}`.
## Data sources named
Code references only: `apps/web/lib/ai-control-plane/enforce-gate.ts` (`canRampEnforce()`), `scripts/srqc-enforce-drill.ts`, `evaluateSrqcAdmissionForLab`/`admitUnderSRQC`, `scripts/activate-srqc-version.mjs` (SrqcVersion manual activation precedent).
## Findings (numbers and facts, not vibes)
- As of writing: NO surface registry, NO live ramp mechanism, NO `admitRouted` call site, NO kill switch implementation (the "kill switch tested monthly" line is an intended future habit), NO dashboard/alert/automation for widening — every ramp step is a human decision.
- The two safety primitives (`canRampEnforce()`, drill script) exist and are independently tested but unconsumed by any production code path; the drill touches no DB, no live traffic, no feature flag.
- Registry + real admission wiring is explicitly out of scope without owner sign-off.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Shadow-first with false-positive-note cleanliness and 5%-max false-refuse gate before any ENFORCE widening: TRUST-SIGNAL (publishing only what has been shadow-proven — same posture the engine needs before promoting any signal from shadow to live).
- Human-decision-only promotion steps; no auto-widen automation: TRUST-SIGNAL (governance discipline).
- No QB-BEHAVIOR, COACHING, OL, or SCHEME findings.
## Engine-actionable? (yes/no + one-line what)
yes — The shadowDays≥14 / falseRefuseRate≤0.05 / no-regression gate pattern is directly reusable as the engine's signal-promotion gate (shadow → live) for new predictors.
