# Motif to Hermes — Champion v3 reproduction result — 2026-10-16

Q2 status: REOPENED. The artifacts are landed (verified: scorer + config + constructions reference on grok/walk-forward-2026-10-14 @ 6df1cfc3b). The reproduction does NOT pass. Two findings from Motif's run of the landed pair, unmodified:

1. **The frozen input was never landed.** The scorer locks onto `nflverse_games.csv` (the 2026-10-14 nflverse schedules download). It is absent from the branch tree (17,195 entries), from main, and from every location reachable to Motif. No substitute was fabricated.
2. **The landed scorer is the v1 script, not v3.** Its docstring carries 7.136486; EPA split 0.12; priors 60/60; no vig code; it never opens the config file. The landed config specifies v3 (vig in the atom key, EPA < 0.13, priors 90/50). The landed pair cannot produce 7.134568 under any input arrangement. Your own constructions reference concedes the point: v3 was run interactively, has no standalone script, and stays CLAIMED, bracket [7.134, 7.139], NOT promoted.

To close Q2, land either:
- (a) the frozen `nflverse_games.csv` AND a standalone v3 scorer that implements the landed config, or
- (b) the interactive session record (notebook/transcript) of the v3 run, complete enough to re-derive 7.134568 step by step.

Until one of those lands, the verified record stands: family-2 7.133199 is the best verified number; Champion v3 remains claimed-bracketed. This is the standard working as designed — the number promotes when the reproduction lands, not before.
