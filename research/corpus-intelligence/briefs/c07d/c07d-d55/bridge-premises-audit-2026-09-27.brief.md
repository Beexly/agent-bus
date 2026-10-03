# reasoning/bridge-premises-audit-2026-09-27.md

## What it is (1-2 sentences)
A 2026-09-27 read-only audit of `data/gse-dataset/bridge-premises.jsonl` (285 holdout-game rows) that returns a PASS: the file is NOT in-sample, the constant `sample_count` is the training-fit size not a leak — but the scalarizer still blocks the signal from LIVE because `pregame_context_logit` duplicates the already-LIVE `historical_strength` direction (f2 = 1 → "If f2 is the winning term, DARK").

## Key metrics/methods (formulas where given, else "not specified")
No explicit formulas. Method named: `logistic-irls` (one IRLS fit producing the single signal `pregame_context_logit`). Features named: `margin_diff`, `scored_diff`, `allowed_diff`, `rest_diff`, `dome`, `neutral`. Scalarizer rule quoted verbatim: "If f2 is the winning term, DARK." Weight referenced: `historical_strength` is LIVE at weight 0.08. Reproduce command: `node scripts/overnight/audit-bridge-premises.mjs` (Windows/PowerShell form). Machine-readable copy: `docs/reasoning/bridge-premises-audit-2026-09-27.json`. Writer: `scripts/run-bridge.mjs:93` (not UNKNOWN_WRITER). Training filter: `scripts/run-bridge.mjs:48` — `if (row.season >= 2025) continue;`; holdout filter at line 64.

## Data sources named
- `data/gse-dataset/bridge-premises.jsonl` (audited artifact; machine-readable copy at `docs/reasoning/bridge-premises-audit-2026-09-27.json`)
- `data/gse-dataset/holdout.jsonl` (holdout set — all 285 premise `game_id`s confirmed in it)
- `data/gse-dataset/features.jsonl` (spans 1999–2026, not two seasons — refutes the "two seasons are not a training set" warning)
- `scripts/run-bridge.mjs` (writer; lines 48, 64, 93)
- `scripts/overnight/audit-bridge-premises.mjs` (audit reproduction)
- `data/reasoning/parts-registry.jsonl` (parts registry holding `historical_strength` LIVE at weight 0.08)
- `aggregateSignals` (the file was NOT fed to it — audit-only)
- `selectPart` (must return LIVE on a fit not trained on 2025 before these probabilities can be used — standing instruction)

## Findings (numbers and facts, not vibes)
- File shape: 285 rows, one per 2025 holdout game; 285 distinct `game_id`s; 0 duplicate `game_id` rows; 1 distinct `signal_id` (`pregame_context_logit`, ×285); 1 distinct `method` (`logistic-irls`, ×285); 1 distinct `sample_count` (`6955`, ×285); 0 probabilities outside (0,1); probability range 0.18944950 … 0.88231212.
- `sample_count = 6955` is the number of training rows in the single IRLS fit, written onto every prediction — a property of the model, not the game; not a per-game sample size; must never be read as one; value reproduces the training row count, not fabricated.
- Training seasons used: 1999–2024 (26 seasons), ≈6955 rows. Holdout: 2025 only, 285 games. Every premise `game_id` in the holdout set: true. No premise row is a 2025 training row. FORBIDDEN #16 ("fitting on 2025 then scoring 2025") is NOT violated.
- Still blocked from LIVE independent of fit quality: the scalarizer. `pregame_context_logit` is a pregame team-strength context model over `margin_diff`, `scored_diff`, `allowed_diff`, `rest_diff`, `dome`, `neutral` — same information class as `historical_strength`, which already holds a representative in `parts-registry.jsonl` (LIVE at weight 0.08). f2 = 1 for this direction; by THE SCALARIZER, "If f2 is the winning term, DARK." This file is a context prior; the prompt rules that context never becomes the objective.
- Standing instruction (unchanged): do not pipe this file into the live edge; `selectPart` must return LIVE on a fit not trained on 2025 before any of these probabilities are used, and even then the duplicate check is disqualifying on its own.
- Audit was read-only: nothing deleted, nothing fed to `aggregateSignals`, no code change made.

## Intelligence connections
- OTHER (calibration/governance): Serves the calibration/sizing and signal-governance lanes. This is a worked audit-receipt pattern: the exact constants (6955 training rows, 1999–2024 training, 285 holdout games, prob range 0.18944950–0.88231212) show what Garrett's 2026-10-01 "audit receipts" mandate requires of any completion claim — test counts, what was exercised, where the logs live. The constant-`sample_count` verdict is a reusable ruling: a per-row repeated constant is the fit's training size, not a leak, and must never be read as a per-game sample size.
- OTHER (anti-duplication): The scalarizer finding (f2 = 1 against `historical_strength` LIVE at 0.08 → DARK) is the canonical example of the duplicate-direction rule: even a well-fit model is disqualified when it occupies an information class that already holds a LIVE representative. This serves the signal-intake lane as precedent — no amount of correlation clears it.
- OTHER (objective-vs-context): The ruling that context never becomes the objective ("a context prior... never becomes the objective") is a standing architecture constraint for the wire → weight → calibrate sequence.
- QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME: none in this file (single pregame team-strength logit; no player, coach, scheme, or matchup-trust content).

## Engine-actionable? (yes/no + one-line what)
No — audit result is an intake artifact: PASS on in-sample question but permanently blocked from the live edge by the scalarizer duplicate check; actionable only as precedent (reproduce via `node scripts/overnight/audit-bridge-premises.mjs`) and as the audit-receipt template Garrett now requires.
