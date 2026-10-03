# strategy/ENGINEERING_PRINCIPLES.md
## What it is (1-2 sentences)
Hard-won engineering lessons from the proven-edge program: non-negotiable integrity principles (calibration honesty, coverage gating, uncertainty display), build-process principles (reality-check premises, dedupe before adding, wire honestly), and a ranked leverage list of what would elevate the program further.
## Key metrics/methods (formulas where given, else "not specified")
- `confidence` is a 0–100 heuristic, NOT P(win); the `fairProbability` slot is reserved for a future independent model probability, never inferred from market — it is null today for exactly that reason.
- The proof receipt commits `confidence` (labeled) + devigged `marketFairProb` (real) + optional `modelProb` committed as `"none"` until a genuinely calibrated probability exists.
- Every published proportion (beat-close rate, calibration bin) carries a Wilson 95% band; an edge is claimed only when the lower bound clears the 52.4% vig break-even — never off the point estimate.
- Coverage = graded ÷ settled, measured as an invariant before trusting any headline beat-close rate; settlement-health (picks that never settle) is the leading signal, coverage the lagging one.
- Pure-by-injection Merkle/receipt math; wire a real `sha256` tested against a known digest into anything published.
- No fabricated/illustrative/pre-floor number reaches a public surface; gated states show progress, not a guessed value.
## Data sources named
Kalshi/Pinnacle close as the hard third-party CLV anchor (the Kalshi client exists but is inert; today CLV is graded vs their own consensus close — flagged as a soft self-anchor vulnerability).
## Findings (numbers and facts, not vibes)
- The 52.4% vig break-even threshold is the explicit bar for claiming any edge, applied to the Wilson lower bound, not the point estimate.
- A calibrated model probability is ranked the #1 leverage unlock (turns confidence into defensible P(win), enables per-version calibration and the conviction tier); the path is the OOS split + champion/challenger promoter on branch `claude/laughing-wozniak-gyryjx`, gated on no-calibration-regression + sample floor + shadow period.
- Branch fragmentation is named the #1 program risk: complementary work across 5+ branches spawns duplicate concepts (two receipts, two CLVs, two Wilsons); one canonical implementation per concept (a second Wilson implementation was already shipped once by accident).
- Revenue does not require a proven win rate: sell the tools (factor trail, devig fair prices, evidence/counter-case, CLV tracker) and the founding ride honestly today; only the calibrated win-rate claim is gated.
- Wire alert delivery is a live blind spot: coverage/settlement-health/drift compute payloads with no sink — a silent settlement failure corrupts the public record before anyone notices.
- Migrations can be generated offline via `prisma migrate diff --from-schema-datamodel <old> --to-schema-datamodel <new> --script`; diff from the schema state before the model existed to get a full CREATE TABLE.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Confidence-as-heuristic-not-probability; calibrated-prob-only edge claims (TRUST-SIGNAL)
- Wilson 95% bands + 52.4% lower-bound edge rule (TRUST-SIGNAL)
- Coverage = graded ÷ settled as credibility invariant (TRUST-SIGNAL)
- Kalshi/Pinnacle hard CLV anchor vs soft self-anchor (TRUST-SIGNAL)
- Commit-reveal Merkle slate + real sha256 (TRUST-SIGNAL)
- Champion/challenger promotion gating (OTHER)
- Branch fragmentation risk; single canonical implementation (OTHER)
## Engine-actionable? (yes/no + one-line what)
Yes — this is the most engine-actionable file in the chunk: adopt the Wilson-lower-bound ≥52.4% edge-claim rule, the graded/settled coverage invariant, the never-dress-heuristic-as-probability receipt standard, and the Kalshi/Pinnacle hard-CLV-anchor upgrade as GSE proof-ledger doctrine.
