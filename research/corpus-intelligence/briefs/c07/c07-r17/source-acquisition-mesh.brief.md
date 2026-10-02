# brain/source-acquisition-mesh.md
## What it is (1-2 sentences)
Doctrine (not implemented) for the Source Acquisition Mesh: the intake layer governing how sources are discovered, evaluated, admitted, scored, monitored, and retired across the six-tier taxonomy — the registry-and-health system behind the evidence vault.

## Key metrics/methods (formulas where given, else "not specified")
- Six-tier taxonomy (1 official → 6 AI/unattributed, never evidence). Update frequencies: REAL_TIME, FIVE_MIN (market), FIFTEEN_MIN (injury), HOURLY, DAILY, ON_DEMAND, MANUAL.
- Tier 3 admission: ≥90 days observable reporting, accuracy not below 70%, credentialed access; new Tier 3 starts at reliability 50.
- Reliability scoring (0–100): Tier-1 confirmation +2 (capped 20/month); settlement win aligned +1; settlement loss on source-only evidence −2; contradicted by Tier 1 −5; fetch failure −1; recovery +1. Thresholds: 80–100 HIGH_RELIABILITY (may sole-evidence premium picks); 60–79 RELIABLE; 40–59 CAUTION (needs T1/2 corroboration); 20–39 LOW (cockpit only); 0–19 SUSPENDED.
- Health failure thresholds: 1 miss → DEGRADED (FRESHNESS_WARN), 3 consecutive → STALE (picks withheld), 6 → UNAVAILABLE (evidence invalidated), 48h → operator alert/SUSPENDED.
- Retirement triggers: no longer exists, license terminated, score <10 unrecovered 60 days, deliberate falsehood, legal concern; historical evidence flagged SOURCE_RETIRED; retired-source-sole-evidence picks flagged EVIDENCE_RETIRED.

## Data sources named
The Odds API (current licensed Tier 2 for odds/lines; raw data may not be republished verbatim — must be shown as derived intelligence with attribution); NFL official injury report via licensed feed; team's official X account; coach press-conference transcripts; Tier 5: specific community channels (e.g., a subreddit) as cockpit watchlist only.

## Findings (numbers and facts, not vibes)
- Unlicensed sources may never evidence; Tier 5 signals must trigger a Tier 1 verification attempt; Tier 6 (AI/unattributed) never admitted.
- Registry is internal; public /methodology may show taxonomy, categories, TTLs, and non-republication statements — never the source list, reliability scores, or health status.
- Implementation note: SAM does not exist in code; current posture is The Odds API (Tier 2) + operator-curated content; governance is enforced through the cockpit and manual review.
- Public safety detail: Tier 4 market signals are informative about perceived probability, not fact; scraped sportsbook sites without authorization do not qualify as Tier 4.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Entire doc: source tiering, reliability math, health gating, unlicensed-source rule — TRUST-SIGNAL (governs what intelligence the engine may trust and publish).
- Market-signal caveat (perceived probability, not fact) — OTHER (market-structure hygiene).
- No QB/coaching/OL/scheme intelligence — OTHER.

## Engine-actionable? (yes/no + one-line what)
no — doctrine only, registry/health monitoring not implemented; useful as the reliability-scoring spec (point values) when the intake layer is built.
