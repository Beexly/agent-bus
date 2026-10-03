# docs/brain/source-hierarchy.md

## What it is (1-2 sentences)
Doctrine-only spec for the Sports OS six-tier source hierarchy governing how much weight evidence receives, how fast it expires, whether it may appear on a public surface, and what language must surround it: Tier 1 official/primary, Tier 2 licensed/structured, Tier 3 trusted secondary, Tier 4 market signals, Tier 5 community/weak signal, Tier 6 synthetic/AI/low trust. Implementation requires an approved change proposal.

## Key metrics/methods (formulas where given, else "not specified")
Freshness TTLs: Tier 1 standard 15 min / game-day injury 5 min / pre-game practice 30 min; Tier 2 live game 2 min / pre-game odds 5 min / historical 24 hr; Tier 3 2 hr standard, 30 min breaking; Tier 4 live market 2 min / pre-game 10 min; Tier 5 30 min watchlist-only; Tier 6 N/A. Critical rule: Sports OS model outputs (Claude API) are Tier 6 -- content generation tools, never intelligence sources. Contradiction rule: Tier 1 overrides all lower tiers; two conflicting Tier 1 sources flag CONTRADICTED and require human review.

## Data sources named
Tier 1: team/league official communications, coach/GM/player statements, credentialed on-site beat reporters. Tier 2: licensed APIs incl. The Odds API (display as derived intelligence only, no raw odds redistribution), league-sanctioned advanced feeds. Tier 3: ESPN, The Athletic, major-market beat coverage. Tier 4: line movement, book consensus, implied probability shifts. Tier 5: Reddit/forums, unverified social. Tier 6: AI summaries, unsourced aggregators, Sports OS internal model output.

## Findings (numbers and facts, not vibes)
- Public-safe: Tier 1 yes (with attribution), Tier 2 yes (license terms), Tier 3 yes with attribution (premium needs no caveat if corroborated by T1/T2), Tier 4 context only (never "sharp money confirmation" without T1-2 support), Tier 5 never standalone on public surfaces, Tier 6 never cited as evidence anywhere.
- Pick evidence: Tier 1 yes; Tier 2 yes; Tier 3 only with corroboration; Tier 4 supporting only; Tier 5 never; Tier 6 never.
- Stale data rule: any pick/recommendation using stale Tier 1 or Tier 2 data must be withheld until fresh data is retrieved, or surfaced only in the cockpit with a STALE flag; "current"/"live"/"confirmed" language forbidden on stale data.
- Staleness disclosure templates are prescribed verbatim ("Based on information retrieved [N] hours ago -- may have changed").

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Tier discipline and contradiction behavior (T1 overrides; conflicting T1 = human review) -- TRUST-SIGNAL
- Forbidden "sharp money" claims from market movement alone; Tier 4 as market context only -- TRUST-SIGNAL
- Model outputs classified Tier 6: "a Brain answer is only as strong as the Tier 1-4 evidence it synthesizes" -- TRUST-SIGNAL

## Engine-actionable? (yes/no + one-line what)
Yes -- adopt the TTLs and tier gates as the engine's evidence-validation rules (stale Tier 1/2 data withholds picks; Tier 5 never a standalone pick basis), though implementation is pending an approved change proposal.
