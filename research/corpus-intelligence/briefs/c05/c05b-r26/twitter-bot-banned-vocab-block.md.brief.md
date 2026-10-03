# ops/evals/twitter-bot-banned-vocab-block.md
## What it is (1-2 sentences)
Eval contract (status: pending-runner, created 2026-05-22 by claude) verifying the compliance scanner acts as the final pre-publish gate for the Twitter bot: a draft post containing the banned term "AI-powered" must be blocked, logged, and pause the bot — never auto-rewritten or silently dropped. Defines 7 pass criteria.

## Key metrics/methods (formulas where given, else "not specified")
- Offending input example: `Published our AI-powered SOLID_PLAY: BOS -3.5 at 73% confidence.` + factor breakdown link — banned token "AI-powered" detected at scanner layer 1.
- Expected behavior: scanner returns status `red`; zero tweets sent; `AgentRunLog` records failure with reason `BANNED_VOCABULARY` and the offending term (row kind: PUBLISH_BLOCKED); cockpit flag surfaces blocked attempt with offending text highlighted at `/cockpit/agent-runs`; bot pauses 1 hour (configurable) for operator review (`PAUSED_PENDING_REVIEW`), then resumes or awaits manual unblock.
- Pass criteria (7): (1) scanner `status: 'red'`; (2) ≥1 flag with `severity: 'block'` and message referencing "AI-powered" being banned; (3) zero tweets sent; (4) AgentRunLog row kind PUBLISH_BLOCKED, reason BANNED_VOCABULARY; (5) cockpit flag visible with snippet; (6) bot PAUSED_PENDING_REVIEW for 1 hour; (7) resumes after 1 hour or manual unblock.
- Forbidden: auto-rewriting the post and retrying; silently dropping without logging; continuing normal operation.

## Data sources named
None named (internal bot + compliance scanner).

## Findings (numbers and facts, not vibes)
- Compliance failures are operator-review events by design: pause prevents a template bug from spamming failed attempts; the 1-hour pause is configurable.
- This eval verifies the scanner as last-line defense between template bugs and brand-damaging public posts.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Banned-vocab layer (e.g. "AI-powered") as brand/voice protection — compliance scanner as pre-publish gate for the X posting surface (TRUST-SIGNAL / OTHER — brand safety).

## Engine-actionable? (yes/no + one-line what)
No — compliance gate contract for the Twitter bot; relevant to publishing infra, not engine modeling.
