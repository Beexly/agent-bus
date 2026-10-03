# brain/weak-signal-engine.md
## What it is (1-2 sentences)
Doctrine-only spec for a Weak Signal Engine that monitors Tier-5 community sources (injury chatter, lineup speculation, rumor clusters, keyword/sentiment spikes) and emits only watchlist flags or verification tasks — never verified facts or public-facing claims.
## Key metrics/methods (formulas where given, else "not specified")
Threshold conditions and escalation criteria (values, no formulas): mention spike = unusual mention increase; sentiment shift = rapid community sentiment change; rumor cluster = multiple independent community sources repeating same claim; market correlation = community chatter coinciding with unusual market movement; verification gap = Tier-5 claim unconfirmed by Tier 1–3 after 2+ hours. Escalation thresholds: mention spike sustained 30+ minutes; rumor cluster = 3+ independent Tier-5 sources; market correlation = line movement of 1.5+ points; injury-term detection; entity in active pick's evidence set. Uncorroborated Tier-5 signals marked EXPIRED after 30 minutes.
## Data sources named
Tier-5 sources (community, social media, unverified reporters); Tier 1 (official reports), Tier 2, Tier 3, Tier 4 (market); entity graph; Evidence Vault; operator cockpit. Crawler implementation BLOCKED until source-policy approval (BLOCK-7).
## Findings (numbers and facts, not vibes)
- The engine's only valid output is a watchlist flag or a verification task; permitted outputs enumerated: Watchlist Flag, Rumor Cluster (requires "Community discussion rising — not a confirmed signal" language), Contradiction Alert (Tier 5 vs Tier 1–3), Verification Task, Market-Correlation Note (cockpit only).
- Forbidden outputs: verified injury status, "inside information" claims, public accusations, picks/recommendations, certainty language ("confirmed," "breaking," "official," "verified"), any public-facing claim without Tier 1–2 corroboration.
- Required accuracy language patterns for Tier-5 outputs (e.g., "Unverified community chatter detected," "No official confirmation found as of [timestamp]"); forbidden substitutes: "Sources say," "Reports indicate," "We're hearing," "It looks like," any certainty/probability claim from community volume alone.
- On escalation: generate verification task, add entity to cockpit watchlist, suppress public output for the entity until Tier 1–2 verification completes, update Evidence Vault with POSSIBLE contradiction flag.
- Status: doctrine only — implementation requires approved change proposal; Tier-5 crawler blocked.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: rumor-cluster and sentiment-shift detection on QB-receiver injury/chatter dynamics can surface trust-relevant watchlist flags (e.g., injury-term detection on a WR in an active pick's evidence set).
- OTHER: injury-chatter early warning system; governance doctrine for signal handling.
## Engine-actionable? (yes/no + one-line what)
yes — provides the escalation thresholds and output schemas for a weak-signal watchlist layer that feeds the total-signal intake without ever publishing unverified claims.
