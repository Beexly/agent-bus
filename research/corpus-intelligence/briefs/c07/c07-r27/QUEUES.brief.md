# ops/hermes/QUEUES.md
## What it is (1-2 sentences)
Index doc for the six Hermes build queues (42 tasks total) run 2026-09-18, defining their run order, the single acceptance test every queue shares, and the two cross-queue artifact handshakes that keep shared artifacts single.
## Key metrics/methods (formulas where given, else "not specified")
- Shared acceptance test: "Merged and deployed with no founder action, nothing behaves differently." Every switch defaults to current behaviour; every registry ships empty; every SQL proposal waits for the founder to apply.
- Six queues: rulers (5), ranking (4), props (6), mainline (15), head-serve (6), tenancy (6). Founder named the ranking measurement the highest-value item.
- Architecture cross-check: 7 tracks, 69 workstreams; tonight's 37 tasks are a deliberately narrow slice.
## Data sources named
- `docs/architecture/2026-09-18-signal-architecture.md` (7 tracks, 69 workstreams: Track A capture items A2/A3/A4/A9/A12, Track B B7, Track C C1, Track D gate_decisions writer, Track E items incl. E1/E7, Track F trials incl. F8, Track G G3 ranking rewrite).
- Queue files: `BUILD-QUEUE-2026-09-18-{rulers,ranking,props,mainline,head-serve,tenancy}.md`; `AGENT-CHARTERS.md`; agent ledger.
## Findings (numbers and facts, not vibes)
- The three rulers every other queue is graded by are all broken: (1) a probability column rewritten after settlement with inputs that are not as-of, (2) a closing-value grade averaged across a book set that differs between mint and close, (3) a decision table nothing has written in 94 days. Two further defects: a conformal quantile that clamps instead of refusing, and walk-forward folds cut by row index with no group key (models sharing contaminated folds are "one estimate wearing several labels").
- Both previously-open gaps are CLOSED by the ruler queue: Track D `gate_decisions` writer (task 3) and Track E1 same-book closing value — the direct attack on the "23.0 percent against 52.4 percent ESTABLISHED blocker".
- Handshake 1: pre-registration shape written by props task 5, read by mainline task 12 — 8 fields fixed by Track F item F8; a 7-field file committed first would force mainline's loader to refuse an uneditable file or loosen the validator.
- Handshake 2: capture-freshness monitor is Track A item A12, named file `apps/web/lib/data-reliability/capture-freshness-manifest.ts`, built by mainline task 8; props task 6 registers prop rows as one family inside it or flags itself for absorption. "Two files spelling one thing differently is how the line archive died unnoticed for three weeks."
- Still NOT covered: Track E7 full attribution test, remaining Track D items beyond the writer, Track G3 ranking rewrite.
- Structural traps: new cross-package imports into `apps/web/lib/board/state.ts` or the picks route resolve to `undefined` under 22 partial mocks and collapse the board; `packages/*` must never import `apps/web`; `@sports/types` is the boundary.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the rulers are grading/measurement honesty (as-of inputs, same-book CLV, conformal refusal); the pre-registration handshake protects trial integrity.
- OTHER: queue operations, agent charters, the "nothing behaves differently" deployment doctrine.
## Engine-actionable? (yes/no + one-line what)
Yes — the Track E1 same-book closing-value rule (closing line must be from the same book set as mint) is the direct attack on the 23.0%-vs-52.4% blocker and should be a hard invariant in any CLV grading code; the as-of-inputs and group-key fold rules are the honest backtest discipline for any new signal.
