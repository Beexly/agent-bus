# docs/strategy/PROOF_SPINE_INTEGRATION.md
## What it is (1-2 sentences)
An integration guide for wiring proof-spine primitives (CLV coverage invariant, settlement health, segmented CLV, Wilson intervals, public CLV policy, pre-result tamper-evident pick receipts, commit-reveal slates, production SHA-256 hash, anchor CLV) into the live pipeline with explicit honesty traps called out.
## Key metrics/methods (formulas where given, else "not specified")
- Wilson intervals: `apps/web/lib/performance/wilson-interval.ts` (pure, wired admin + public + calibration).
- Segmented CLV by sport/market/confidence/**version** (`clv-segments.ts`); per-model-version record makes a model swap visible.
- Anchor CLV graded vs hard third-party close (`clv-anchor.ts`): grade `clvVsAnchor` with entry prob, consensus close prob, and anchor close prob all on the same vig basis (all devigged or all priced; never mixed); `softClose` flag recorded.
- Devigged market fair prob via `removeVig` in `packages/prediction-engine/src/scoring.ts` — surfaced as `marketFairProb` on `ScoredPick`; `factorBreakdown.fairProbability` is reserved for a future independent model prob "never inferred from market."
- Pick proof receipt (`buildPickProofReceipt`, SHA-256 via `sha256Hex`): pickId, gameId, selection, pickType, line, entryOdds, marketFairProb, confidence (0–100 heuristic, committed AS a heuristic), edgeScore, modelProb: null until a calibrated prob exists, modelVersion, asOf pre-kickoff. Immutable: `upsert` with empty update.
- Slate commitment (`buildSlateCommitment`): published `{ slateId, root, count, committedAt }` — root fixes the population and its size before kickoff; `provePickInSlate` / `verifyPickInSlate` for inclusion proofs.
- Honesty traps: never pass `confidence / 100` as `modelProb`; coverage must be healthy before the beat-close rate is trusted (rate over <100% coverage is survivorship-biased); public CLV/calibration renders only when `canExposePerformanceStats` AND the settled-sample floor is met.
## Data sources named
Kalshi (or a sharp book) as the anchor close — noted that the Kalshi client exists but is inert; persistence still owed. Consensus close (internal).
## Findings (numbers and facts, not vibes)
- 10 pieces in the proof spine table; 5 fully wired (CLV coverage invariant, settlement health, segmented CLV, Wilson intervals, public CLV policy), 5 pending: receipt minting (needs wiring), commit-reveal slate (needs publish wiring), anchor CLV (needs Kalshi persistence), `PickProofReceipt` table (needs `prisma migrate deploy`), production SHA-256 hash ready.
- Public `/clv` shows Wilson-bounded beat-close rate and break-even read.
- `scoreGames()` computes a devigged `fairProb` per pick but discards it (`fairProbability: null` at three return sites) — Step A is to surface it.
- Win-rate stays gated until the floor; banned-phrase scanning is the single source of truth (`@/lib/trust-claims`).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Pre-result tamper-evident receipts + commit-reveal slate commitments: TRUST-SIGNAL
- Anchor CLV vs Kalshi/sharp close on a single vig basis: TRUST-SIGNAL
- Wilson-bounded beat-close rate with break-even gating: TRUST-SIGNAL
- modelProb left null until a calibrated prob exists (no confidence/100 fabrication): TRUST-SIGNAL
- Coverage <100% makes beat-close rates survivorship-biased: TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
yes — adopt the proof-spine primitives (Wilson-bounded CLV, anchor-CLV vs a sharp close, pre-result receipts, commit-reveal slates, never fabricate modelProb) as the calibration-state honesty framework for public performance claims.
