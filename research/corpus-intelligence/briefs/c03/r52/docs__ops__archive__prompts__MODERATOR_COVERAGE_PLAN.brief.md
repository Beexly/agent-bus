# docs/ops/archive/prompts/MODERATOR_COVERAGE_PLAN.md
## What it is (1-2 sentences)
The adopted (2026-06-13) moderator coverage plan for Galaxy Sports Edge live community rooms: rooms open only during staffed presence windows (Sunday slate, MNF, TNF, announced ad hoc events), with response-time targets, an escalation ladder, and tooling references.

## Key metrics/methods (formulas where given, else "not specified")
not specified. Operational targets given as thresholds: report acknowledgement ≤5 min; distress nudge immediate (automated) or ≤2 min manual; content removal ≤10 min of acknowledgement; escalation contact reachable ≤15 min; appeal decision ≤7 days. Coverage windows: Sunday 12:00–23:30 ET, MNF/TNF 19:00–23:30 ET, ad hoc = event −30 min to event +30 min with 24 h advance notice.

## Data sources named
`docs/legal/COMMUNITY_MODERATION_POLICY.md`; `lib/community/moderation.ts` (action ladder, STRAIGHT_TO_BAN_REASONS, assertActionLoggable()); `lib/community/moderation-actions.ts`; `lib/community/distress-signals.ts` (detectDistressSignals(), routeDistress()); `/cockpit/moderation` tooling.

## Findings (numbers and facts, not vibes)
- Rooms do not open until every checklist item in the community moderation policy is checked; as of 2026-06-13, privacy review and responsible-play signal wiring were still pending.
- Escalation ladder: NUDGE → REMOVE → MUTE_24H → MUTE_7D → SUSPEND → BAN. Straight-to-BAN reasons: HATE_SPEECH, THREATS, DOXXING, SELF_EXCLUSION_CIRCUMVENTION. SUSPEND/BAN appealable once, decided by a different reviewer within 7 days.
- Distress-nudge immediacy is non-negotiable; distress detection law built 2026-06-13 in `lib/community/distress-signals.ts`, pipeline hook not yet landed with rooms — moderator does manual monitoring meanwhile.
- Solo-founder staffing reality: rooms open only when the founder or a deputized moderator (three-step acknowledgement: read plan+policy, tooling walkthrough, added to escalation list) is confirmed for the full window.
- Every moderation action logged with actor, reason, content reference; `assertActionLoggable()` throws if actor/reason missing.
- Deputy-ordered SUSPEND/BAN must be confirmed with the founder before execution unless time-critical (e.g. active threat).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Escalation ladder + mandatory action logging: OTHER (ops/product governance, not engine intelligence)
- Distress detection pipeline (`distress-signals.ts`) hooks into rooms: OTHER — responsible-play signal design; INFERENCE: analogous "nudge on distress pattern" concept could inform bettor-behavior research, but nothing engine-actionable here
- Coverage windows (Sunday 12:00–23:30 ET): OTHER — defines when live community activity is expected; potentially useful timing context for engagement analytics only

## Engine-actionable? (yes/no + one-line what)
No — community moderation operations plan; no model, metric, or signal the prediction engine can consume.
