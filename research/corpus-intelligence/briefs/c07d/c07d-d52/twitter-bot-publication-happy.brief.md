# ops/evals/twitter-bot-publication-happy.md

## What it is (1-2 sentences)
An evaluation spec (`surface: twitter-bot`, `scenario: publication-happy`, `template: free-pick-publication`, created 2026-05-22 by claude, status `pending-runner`) defining the required publication-tweet format when the bot posts a new free-tier pick (worked example: BOS -3.5, NBA, 73% confidence, SOLID_PLAY, game `nba-bos-nyk-2026-05-22`, published 2026-05-22T20:00:00Z).

## Key metrics/methods (formulas where given, else "not specified")
Not specified (no formulas). Exact template and gate values:
- Publication template: `Published BOS -3.5 at 73% confidence (SOLID_PLAY). Factor breakdown: https://galaxysportsedge.com/room/nba-bos-nyk-2026-05-22`
- Length cap: **≤ 280 characters**.
- Confidence rendered as **integer percent** (no decimal).
- Pick grade from `PICK_GRADE_LABELS` in parens.
- Game Room URL must match `/^https:\/\/galaxysportsedge\.com\/room\/[a-z0-9-]+$/` (full canonical URL, no truncation/shortening).
- Banned-word gate: output must NOT match `/\b(tail|fade|lock|hammer|VIP|members only)\b/i`.
- First-person gate: must NOT match `/\b(I think|I see|I stay)\b/`.
- Must not contain platform-wide banned vocabulary from `docs/positioning.md`.

## Data sources named
- `PICK_GRADE_LABELS` enum (pick-grade label source); `docs/positioning.md` (platform-wide banned vocabulary); the canonical Game Room URL pattern.

## Findings (numbers and facts, not vibes)
- Required voice: past-tense verb "Published", no commentary, no emojis (settlement emojis excepted but n/a here), hashtags limited to at most one sport hashtag (#NBA).
- Forbidden: engagement bait ("tail this", "fade me", "lock", "HAMMER"); first-person voice; comparisons to other services; emoji ladders (🚨, 🔥, 💰); "VIP" or "members only" framing; truncated/shortened links.
- Pass criteria (8): contains "Published" and "factor breakdown" (case-insensitive); valid Game Room URL per regex; length ≤ 280 chars; no banned-word regex match; no first-person regex match; no banned vocabulary from `docs/positioning.md`; integer confidence; grade matches `PICK_GRADE_LABELS`.
- Note: the same pick appears in the model-court eval (BOS -3.5, 73%, SOLID_PLAY, nba-bos-nyk-2026-05-22) — the two evals share a canonical fixture, so this is internally consistent.
- Eval status is `pending-runner` — spec only, no observed run result.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL — trust-target intake and publication voice.** This eval codifies the public voice discipline for @GalaxySportsHQ-style posting: past-tense factual publication, confidence as integer percent, grade label from a controlled enum, single canonical link, and machine-checked bans on engagement bait ("lock"/"HAMMER"/"tail"), first-person voice, service comparisons, and emoji ladders. It is the enforcement spec behind the X-posting voice rules; serves the **trust-target intake** program and any social-publication automation that must hold this voice. Consistency note: the canonical fixture (BOS -3.5 / 73% / SOLID_PLAY) is shared with the model-court eval, which also forbids "lock"/"hammer" and recommendation language — the two surfaces enforce the same discipline from different angles (explanation surface vs. publication surface).
- No QB-BEHAVIOR, COACHING, OL, or SCHEME content in this file.

## Engine-actionable? (yes/no + one-line what)
Yes — the canonical fixture (BOS -3.5, 73%, SOLID_PLAY, Game Room URL pattern) and the banned-word/first-person regexes plus ≤280-char cap as reusable publication gates for social posting.

Referenced files/papers/datasets: `PICK_GRADE_LABELS`; `docs/positioning.md`; Game Room URL pattern `https://galaxysportsedge.com/room/<game-id>`.
