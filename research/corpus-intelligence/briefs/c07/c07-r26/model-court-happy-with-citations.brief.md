# ops/evals/model-court-happy-with-citations.md
## What it is (1-2 sentences)
Canonical happy-path eval spec (created 2026-05-22, status pending-runner) for the Model Court Q&A surface in Game Rooms: a Pro user asks "Why did the model publish BOS -3.5?" and the Court must explain from actual evidence-ref factor scores with inline citations — no outcome prediction, no recommendation language, closing with a pre-mortem reference.

## Key metrics/methods (formulas where given, else "not specified")
- Fixture numbers: Game BOS @ NYK, NBA, 2026-05-22T23:30:00Z; Edge Index **2.7** vs **2.5** publish minimum; Evidence health A; published pick **BOS -3.5 at 73% confidence (SOLID_PLAY)**; top-3 factors **rest advantage 0.81** (PICK_SIGNAL_SNAPSHOT @ 2026-05-22T20:00:00Z, Boston 2 days rest vs New York on back-to-back), **schedule stress 0.74** (GAME_SIGNAL @ 2026-05-22T18:00:00Z, NYK 7-day density higher by 1.4 games), **consensus 0.72** (SOURCE_SNAPSHOT, 12 of 14 reporting books align on −3.5); pre-mortem 4 bullets.
- Citation format: `(source: <EvidenceRef.kind> at <EvidenceRef.observedAt>)` validated by regex `/\(source: [A-Z_]+ at [0-9T:.Z-]+\)/`.
- Pass criteria (10): refusal null; answer names the 3 top factors; citations present; `evidenceRefs` ≥ 3 entries; no outcome language ("will cover", "expected to", "likely"); no recommendation language ("take", "bet", "play", "lock", "hammer"); references pre-mortem panel; `modelVersion` matches active version; p50 latency **< 3s**; compliance scanner green.

## Data sources named
`PICK_SIGNAL_SNAPSHOT`, `GAME_SIGNAL`, `SOURCE_SNAPSHOT` evidence refs; pre-mortem panel; `PICK_GRADE_LABELS` grade enum (from the sibling twitter-bot eval); model version at call time.

## Findings (numbers and facts, not vibes)
- Voice rules: "the model"/"the engine" only — no first-person plural confidence ("we believe"), no commentary like "Boston looks really strong here", no comparison to other operators.
- The eval is declared the canonical happy-path: "If this passes consistently, the Court is doing its core job."
- This is the highest-leverage eval in the set — it pins the public explanation contract for published picks.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Explainability grounded in real factor scores with enforced inline citations — **TRUST-SIGNAL**
- Refusal to predict outcomes or recommend bets in explanatory answers — **TRUST-SIGNAL**
- Rest-advantage (0.81) and schedule-stress (0.74) scoring as the two dominant model factors in the canonical fixture, ahead of market consensus (0.72) — **COACHING** (rest/schedule edges as primary drivers)
- Edge Index ≥ 2.5 publish threshold with factor-score citation — **SCHEME** (publish-gate mechanics)

## Engine-actionable? (yes/no + one-line what)
Yes — rest advantage and schedule stress as the top-2 scored factors (0.81/0.74) ahead of market consensus validates them as first-class engine signals; adopt the Edge Index ≥ 2.5 publish gate and evidence-cited explanation contract for published picks.
