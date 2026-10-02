# design/STUDIO_PRESENTER_PROGRAM.md
## What it is (1-2 sentences)
Internal design plan (owner note 2026-06-11; status DESIGNED · NOT_WIRED) for a synthetic video presenter with a rotating 4-week look + format cycle; nothing here is public and nothing is wired.

## Key metrics/methods (formulas where given, else "not specified")
- Rotation table: Week A (veteran sideline analyst → pre-slate read: injuries, roles, weather from graded Beat rows), Week B (tasteful game-day spirit look → "what the crowd wants vs what the math says" No-Bet education), Week C (field-level correspondent → mid-week line drift, role changes, usage shifts), Week D (studio desk halftime blazer → mid-slate autopsy).
- Pipeline: script from real graded data only → look brief → manual operator render → owner/operator sign-off → manual publish (no autonomous posting anywhere, ever).
- Content-safety scan (sexual/hateful/unsafe/PII/overclaiming) already in `studio-host.tsx`; "Synthetic presenter" disclosure chip required on synthetic video surfaces (FTC exposure noted).

## Data sources named
Graded Beat rows (injuries, roles, weather), board state, transmission segments, `lib/gsn/beex-weekly.ts` patterns. No external football data sources.

## Findings (numbers and facts, not vibes)
- Status: DESIGNED · NOT_WIRED — no build, no provider selected, no segments produced.
- Four-week rotation content plan exists (A–D formats above) with script rules: We-voice, no fabricated stats, trust-claims scan.
- Honesty boundary: synthetic presenter disclosure chip mandatory; deceiving paying customers about a human existing = legal exposure.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — content-production plan, not football intelligence. No metrics, no behavioral signals.

## Engine-actionable? (yes/no + one-line what)
no — unwired internal video-presenter design; nothing ingestible for the engine.
