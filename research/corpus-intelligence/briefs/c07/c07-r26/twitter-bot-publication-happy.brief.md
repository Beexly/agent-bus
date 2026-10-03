# ops/evals/twitter-bot-publication-happy.md
## What it is (1-2 sentences)
Happy-path eval spec (created 2026-05-22, status pending-runner) for the Twitter/X bot's free-pick publication post: fixture pick BOS -3.5, NBA, 73% confidence, SOLID_PLAY, game `nba-bos-nyk-2026-05-22` must render as a past-tense, no-commentary post linking to the canonical Game Room URL.

## Key metrics/methods (formulas where given, else "not specified")
- Template: `Published BOS -3.5 at 73% confidence (SOLID_PLAY).\n\nFactor breakdown: https://galaxysportsedge.com/room/nba-bos-nyk-2026-05-22`
- Constraints: **≤ 280 characters**; past-tense "Published"; integer confidence (no decimals); grade from `PICK_GRADE_LABELS`; URL matching `/^https:\/\/galaxysportsedge\.com\/room\/[a-z0-9-]+$/` (full canonical, no shorteners); banned patterns `/\b(tail|fade|lock|hammer|VIP|members only)\b/i` and `/\b(I think|I see|I stay)\b/i`; no output matching platform-wide banned vocabulary in `docs/positioning.md`; no emojis, no commentary, no hashtags except possibly one sport tag.

## Data sources named
None (fixture pick; `PICK_GRADE_LABELS` enum; `docs/positioning.md` banned vocabulary).

## Findings (numbers and facts, not vibes)
- Publication voice: past tense, third-person, zero commentary — the post is a ledger entry pointing at the Game Room for the factor breakdown, not a tout.
- Engagement bait ("tail this," "fade me," "lock," "HAMMER"), first-person voice, service comparisons, emoji ladders, and "VIP/members only" framing are all hard-forbidden by regex pass criteria.
- Only surface in this eval set where the canonical public copy for a pick is pinned verbatim.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Publication formatting discipline (no bait, no first-person, past-tense ledger voice) — **TRUST-SIGNAL**
- Bot publishing mechanics (rate limits, canonical URLs) — **OTHER**

## Engine-actionable? (yes/no + one-line what)
No — social publishing format eval; pins public copy conventions, not prediction research.
