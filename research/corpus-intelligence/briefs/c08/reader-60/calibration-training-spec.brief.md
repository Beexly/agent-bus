# docs/product/calibration-training-spec.md
## What it is (1-2 sentences)
Phase 4 build spec (Codex owns code, Claude owns UX copy + insight text) for "calibration training disguised as a picks product": a pre-show user confidence prompt (slider 50%–95%) before revealing the model's number, settlement feedback, and a personal calibration curve page — designed to make users sharper bettors, not passive followers.

## Key metrics/methods (formulas where given, else "not specified")
`UserPickEstimate { userId, pickId, userConfidence (50–95 integer), submittedAt, pickConfidenceAtSubmit, pickGradeAtSubmit, outcome, estimateAccuracy }`, `@@unique([userId, pickId])`. `UserCalibrationSnapshot { userId, weekOfYear, yearOf, totalEstimates, bandData (JSON: { "60-65": { sampleSize, actualWinRate, userMidpoint } }), insightText }`, `@@unique([userId, yearOf, weekOfYear])`. Weekly insight: Claude API generates one sentence, ≤25 words, direct/specific/no-marketing/past-tense, naming sport + pick type + magnitude; weekly job runs Saturdays for users with 20+ estimates. Min sample: 10 estimates per sport for the per-sport breakdown ("Not enough data yet" below that). Settlement computes estimateAccuracy automatically. Explicit anti-patterns: never frame "win rate" (outcome luck ≠ calibration); no competitive leaderboard by default; no coaching language; opt-in only; estimates never feed the model (no wisdom-of-crowds pollution). Ten acceptance criteria (pre-show prompt renders, estimates persist, settlement updates fire, weekly job + insights, /calibration/me renders with per-sport/per-pick-type breakdowns, opt-out works, insight evals pass voice rules, FREE tier sees teaser only).

## Data sources named
Internal pick/estimate data; Resend (transactional settlement email); Discord DM (optional, if linked); Claude API (weekly one-sentence insight generation). No external sports data.

## Findings (numbers and facts, not vibes)
- Flow: Pro/Elite user opens pending pick → pre-show confidence prompt (inline default per OPEN-CAL-1; slider default 50%, not model value, per OPEN-CAL-2 — "forces a real estimate") → submits (stores UserPickEstimate) → model number + factor breakdown + pre-mortem revealed with delta highlighted.
- Settlement: notification + email ("You estimated 71% confidence. The model published at 73%. The pick [hit/missed]") + in-app notification; 20+ estimates/week unlocks a specific weekly insight ("you were 8% under-confident on NFL spreads this week").
- /calibration/me (Pro/Elite): personal calibration chart, model comparison overlay, per-sport and per-pick-type breakdowns, most recent insightText, historical archive; FREE tier sees a teaser upsell.
- Open items: OPEN-CAL-3 (min sample per sport, default 10); OPEN-CAL-4 (aggregate anonymized comparison vs other Pro users, Phase 5+, opt-in).
- Privacy: opt-in at first prompt ("What is this?" explainer), opt-out via /settings/calibration; per-user data only, never aggregated/shared without anonymization + consent.
- Status: Phase 4 build. Spec authored by Claude. Decision reference: master plan Part 2.C.5. Location: `apps/web/lib/calibration-training/`, `/picks/[pickId]/calibrate`, `/calibration/me`.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL — the bandData calibration-binning schema ({sampleSize, actualWinRate, userMidpoint} per confidence band) and per-sport/per-pick-type breakdown structure are directly applicable to engine pick calibration measurement.
- OTHER — product surface (user-facing training product), not an engine signal.

## Engine-actionable? (yes/no + one-line what)
Yes — the bandData binning schema and per-sport/per-pick-type calibration breakdowns are directly reusable for the engine's own pick calibration tracking; note it frames user calibration (estimates vs outcomes), which is distinct from Garrett's standing rule against using old-model-pick calibration scoring as a progress measure.
