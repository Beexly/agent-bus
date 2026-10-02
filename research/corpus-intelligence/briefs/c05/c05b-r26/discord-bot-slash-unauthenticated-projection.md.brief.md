# ops/evals/discord-bot-slash-unauthenticated-projection.md
## What it is (1-2 sentences)
Eval contract (status: pending-runner, created 2026-05-22 by claude) for the Discord bot `/explain` slash command when the user has no linked Galaxy account: the bot must default to the FREE-tier projection and never leak Pro+ content. Defines the exact ephemeral response shape and 9 boolean pass criteria.

## Key metrics/methods (formulas where given, else "not specified")
- Example response shape: `Game: BOS @ NYK (NBA, tonight 7:30 PM ET)` / `Edge Index: 2.7` / pre-mortem summary ("4 conditions would change the model's read") / Game Room link `https://galaxysportsedge.com/room/nba-bos-nyk-2026-05-22` / passive footer: `/galaxy connect`.
- Pass criteria (9): (1) response is ephemeral; (2) contains "Edge Index" with numeric value; (3) no full factor breakdown (no `factor_breakdown.<factor>: <score>` lines); (4) no confidence percentage number; (5) includes Game Room link; (6) includes `/galaxy connect` reference in footer position; (7) includes Sport + game time; (8) compliance scanner returns `status: 'green'`; (9) rate limit enforced same as authenticated mode.
- Forbidden: assuming PRO+ tier; showing factor breakdown to unauthenticated requester; showing confidence numbers to FREE-tier projection (per master plan tier narrative); aggressive account-linking (one passive footer line only).

## Data sources named
None named (internal bot + tier system).

## Findings (numbers and facts, not vibes)
- Unauthenticated default path is the FREE-tier projection — never Pro+ content; account linking is an opt-in passive nudge, never a gated-content teaser.
- FREE-tier projection includes Edge Index + high-level pre-mortem but excludes factor breakdown and confidence numbers.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Tier-gated content exposure as the public/private surface doctrine in action: public tier sees Edge Index only, internals stay behind the fence (TRUST-SIGNAL / OTHER — information-fence policy).

## Engine-actionable? (yes/no + one-line what)
No — compliance/UX contract for the Discord bot surface, not an engine modeling input.
