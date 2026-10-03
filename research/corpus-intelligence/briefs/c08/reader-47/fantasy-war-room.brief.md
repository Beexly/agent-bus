# docs/brain/fantasy-war-room.md

## What it is (1-2 sentences)
Doctrine-only spec for Sports OS "Fantasy War Room": provider-agnostic fantasy decision support (start/sit, waivers/FAAB, trades, injury risk, usage trends, role changes, matchups, weather, scheme impact, league scoring) powered by the same Brain infrastructure as picks. Implementation is BLOCKED -- fantasy entity schema requires separate approval, provider integration requires source-policy review.

## Key metrics/methods (formulas where given, else "not specified")
Not specified (no formulas; one TypeScript schema proposal). Entities proposed: FantasyLeague (providerType espn/yahoo/sleeper/nfl/custom/unknown; scoring ppr/half_ppr/standard/custom), FantasyTeam, FantasyRoster, FantasyPlayer (ownership 0-100, projectedPoints, projectedPointsSource licensed_feed|internal_model, adp), FantasyMatchup, FantasyScoringSettings, FantasyTransaction (faabBid), FantasyRecommendation (action start/sit/add/drop/trade_for/trade_away; confidence 0-100 with LOW/MEDIUM/HIGH level; rationale; evidenceIds; weakeningSignals; modelVersion; publicSafe).

## Data sources named
Canonical entity graph; Evidence Vault; Signal Ledger; tiered sources per docs/brain/source-hierarchy.md (Tier 1-2 required); licensed stats feed (Tier 2) for usage statistics -- coverage unconfirmed.

## Findings (numbers and facts, not vibes)
- Recommendation constraints: forbidden = sole Tier-5 chatter, certainty language ("he will score," "guaranteed points"), recommendations omitting weakening signals, evidence below Tier 3 without explicit disclosure.
- Required evidence separation in every recommendation: verified player status (Tier 1), role/usage (Tier 2 licensed), matchup data (Tier 2-3), coach/scheme context (Tier 1-3), weak-signal chatter (labeled unverified, cockpit-only), market signal (labeled market context), uncertainty (what is missing).
- Provider-agnostic by design: no ESPN/Yahoo/Sleeper API dependency; users provide scoring settings + roster; six implementation prerequisites all pending (entity graph, evidence vault, signal ledger, schema approval, scoring schema approval, Tier 2 coverage confirmation).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Mandatory weakening-signals and uncertainty disclosure on every recommendation -- TRUST-SIGNAL
- Coach/scheme context as a required evidence category -- COACHING
- Scheme-change impact on WR target share as a decision type -- SCHEME
- Provider-agnostic design (legally clean, no platform API dependency) -- OTHER (product design)

## Engine-actionable? (yes/no + one-line what)
No -- implementation is explicitly BLOCKED pending schema approval and source-policy review; doctrine only.
