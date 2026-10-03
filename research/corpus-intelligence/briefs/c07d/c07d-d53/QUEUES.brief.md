# ops/hermes/QUEUES.md
## What it is (1-2 sentences)
The master index for the 2026-09-18 Hermes run: six build queues, 42 tasks, with explicit ordering rationale, a shared acceptance test ("merged and deployed with no founder action, nothing behaves differently"), and a two-artifact cross-queue handshake (pre-registration shape, capture-freshness monitor) that keeps single ownership of shared concerns.

## Key metrics/methods (formulas where given, else "not specified")
- Queue order and task counts: rulers (5) → ranking (4) → props (6) → mainline (15) → head-serve (6) → tenancy (6). Total 42 tasks. (Text also says "tonight's 37 tasks" in the Track-coverage section — the 42/37 gap is an internal inconsistency; 5+4+6+15+6+6 = 42.)
- Architecture mapping: 7 tracks, 69 workstreams; tonight's slice covers Track A capture (A2, A3, A4, A9, A12), one Track B item (B7), one Track C item (C1), the display-adjacent half of Tracks E and F.
- Gaps closed by the ruler queue: Track D `gate_decisions` writer (ruler task 3) and Track E1 same-book closing value.
- Not covered by design: Track E7 full attribution test; remaining Track D items beyond the writer; Track G3 ranking rewrite (ranking queue is measurement-only precursor).
- Acceptance test: every switch defaults to current behaviour, every registry ships empty, every SQL proposal waits for the founder. Any task that would change a rendered value, published number, ordering, or gate result on merge is wrong — one disclosed exception in ruler task 3.
- Cross-queue review discipline: found two shared artifacts invisible to single-queue review; resolved by cross-reference, not resequencing.

## Data sources named
- Referenced queue files: `BUILD-QUEUE-2026-09-18-rulers.md`, `...-ranking.md`, `...-props.md`, `...-mainline.md`, `...-head-serve.md`, `...-tenancy.md`
- `AGENT-CHARTERS.md` (three owned domains, four inter-domain rules)
- Architecture doc's 7 tracks / 69 workstreams; `docs/architecture/2026-09-18-signal-architecture.md` Track F item F8 (pre-registration shape), Track A item A12 (`apps/web/lib/data-reliability/capture-freshness-manifest.ts`)
- Ledger `docs/ops/AGENT_LEDGER.md` (M-1 violation, owner `motif`, ledger rule 2: cannot edit another's row)

## Findings (numbers and facts, not vibes)
- All three rulers were broken at queue time: (1) a probability column rewritten after settlement with inputs not as-of, (2) a closing-value grade averaged across a book set differing between mint and close, (3) a decision table nothing had written in 94 days. Two companion defects: a conformal quantile that clamps instead of refusing, and walk-forward folds cut by row index with no group key — "Models that share contaminated folds are not independent estimates; they are one estimate wearing several labels, and their agreement is not evidence."
- E1 is named "the direct attack on the 23.0 percent against 52.4 percent ESTABLISHED blocker" — i.e., the engine's established CLV-vs-win-rate blocker is 23.0% against 52.4%, and same-book closing value attribution is the direct attack on it.
- Ordering rationale: rulers first (everything else graded by them); ranking second by founder direction ("highest-value item" per founder, 2026-09-18; 4 tasks; shares no file with props, so parallel runners can take both); props third because credits are being spent right now; mainline fourth with wave-1 defect fixes feeding later queues and wave-2 capture accruing wall-clock sample ("every day deferred is sample that never exists"); head-serve fifth (depends on mainline task 10's offset capability); tenancy last (value depends on an unmade product decision).
- Pre-registration handshake: props task 5 writes the full EIGHT-field shape (with false-discovery level); mainline task 12 builds `preregistration.ts` loader that refuses uncommitted files. Props runs first, so props must write all eight fields — a 7-field file committed first would force the loader to either refuse it (a pre-registration may not edit after commit) or loosen the validator, silently dropping multiple-comparison control.
- Capture-freshness handshake: one workstream (Track A item A12), one named file. Two files spelling one thing differently "is how the line archive died unnoticed for three weeks."
- Shared bindings restated: no database, no env flag, no gate, no schema ever (proposal SQL under `docs/ops/proposals/`, founder applies); no new guardrail script (`scripts/guardrails/**` frozen by law 2); no `MODEL_VERSION` change; no fabricated value — "an absent source is closed by acquiring the data or by staying absent, never by a constant."
- The two structural traps again: cross-package import into `apps/web/lib/board/state.ts` or the picks route resolves to `undefined` under 22 partial mocks and collapses the board; `packages/*` must never import `apps/web`.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **(OTHER — calibration/sizing program)** The 23.0%-against-52.4% ESTABLISHED blocker with Track E1 (same-book closing value) as "the direct attack" is the calibration program's central target: closing-line value is the ruler the engine's edge claims must beat, and same-book mint-vs-close book-set consistency is the measurement defect that made the grade untrustworthy.
- **(OTHER — calibration/sizing program)** The walk-forward fold contamination finding (row-index cuts, no group key) is a validation-hygiene rule the engine's backtest lane must honor: shared contaminated folds produce phantom model agreement.
- **(OTHER — trust-target intake)** The 8-field pre-registration handshake and the refuse-to-loosen validator discipline is the exact gatekeeper for the trust-target intake program: signals enter only pre-registered, kill line written first, false-discovery level stated, placebo spec included.
- **(OTHER — data plumbing/ops)** "Every day deferred is sample that never exists" is the wall-clock argument for the capture lane (A2/A3/A4/A9/A12): calibration floors (e.g. the ≥100-settled floor in C12-01-VERIFICATION) can only be crossed by accrued sample, so capture priority compounds.
- **(TRUST-SIGNAL)** The ranking queue is explicitly the "highest-value item" per the founder: a measurement of what reordering the board would do, changing nothing — i.e., the re-ranking decision evidence for the QB-behavioral/coaching profiles must be evidence-first, order-change second.

## Engine-actionable? (yes/no + one-line what)
**No** (ops coordination doc, no formulas) — but it carries two program-level directives worth recording: the 23.0%-vs-52.4% CLV blocker as the calibration target, and the pre-registration + capture-freshness handshakes as the standing intake/measurement gates.

## References named in file
- Six queue files under `docs/ops/hermes/BUILD-QUEUE-2026-09-18-*.md`; `AGENT-CHARTERS.md`; `docs/architecture/2026-09-18-signal-architecture.md`; `docs/ops/proposals/`
