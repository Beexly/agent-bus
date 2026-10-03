# docs/ops/LAGUNA_MORNING_2026-08-15.md
## What it is (1-2 sentences)
An ops addendum capturing the Hermes agent's model-config snapshot (default/fallback models), API key inventory, and task-to-alias routing table for sports vs personal work.

## Key metrics/methods (formulas where given, else "not specified")
- Default model: `nous/poolside/laguna-s-2.1:free` (PROVEN). Fallback chain: `laguna-s-2.1:free` → `hy3:free` → `step-3.7-flash:free` (PROVEN, single block). No anthropic/gemini in fallback.
- Key inventory (names only): DEEPSEEK_API_KEY SET, GROQ_API_KEY SET, CEREBRAS_API_KEY SET, GEMINI_API_KEY SET (should be commented), XAI_API_KEY MISSING, GOOGLE_API_KEY MISSING.
- Task routing: small code → default/free; headlines → fast; prediction-engine TypeScript → code; calibration math (Brier/ECE) → reason; long PR diffs → long; live escalation → grok; billing/legal/trust-copy → claude CLI; offline → local.
- Formula: not specified.

## Data sources named
- `.env` scan of the Hermes config; config backup `plans\config.yaml.bak-2026-08-14`; Sports repo `Beexly/Sports` (main @ 9a36e11), clone path `C:\Users\Garrett\Sports`.

## Findings (numbers and facts, not vibes)
- Calibration math (Brier/ECE) is explicitly routed to the "reason" alias lane, separate from prediction-engine code work — an ops-level separation between calibration reasoning and implementation.
- Sports repo existed at `Beexly/Sports` main @ `9a36e11` as of 2026-08-15.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — agent infra/ops config snapshot; no sports intelligence content.

## Engine-actionable? (yes/no + one-line what)
No — infra config only; no engine-relevant methods or numbers.
