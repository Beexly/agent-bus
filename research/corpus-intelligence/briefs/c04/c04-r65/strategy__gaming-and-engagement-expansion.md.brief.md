# docs/strategy/gaming-and-engagement-expansion.md
## What it is (1-2 sentences)
A 2026-06-03 research-and-decision memo on gaming/engagement expansion: recommends building a free skill-based "Beat the Model" pick'em (Brier-scored against the model, non-redeemable virtual currency) while ruling out sweepstakes casinos and real-money sportsbooks, with a counsel-gated affiliate/data-partner lane as the only real-money path.

## Key metrics/methods (formulas where given, else "not specified")
- Brier scoring for the pick'em contest (formula not given; `prediction-engine/contest-scoring.ts` is noted as shipped, pure, tested).
- Skill-vs-gambling legal test: gambling = consideration + chance + prize; removing any one element generally means it isn't gambling (INFERENCE: stated as legal doctrine summary, not an engine formula).

## Data sources named
- Legal/industry sources: Venable; igamingbusiness; Snell & Wilmer; NY AG; SBC; AGA State of Play; Legal Sports Report; BettingUSA; igaminglicense.net; GeoComply; Jumio; Klein Moynihan; Walters Law Group; Vela Wood.
- Statutes/actions cited: MT SB 555, CT SB 1235, NY SB 5935, CA AB-831 (eff. 2026-01-01), IN, ME, OK, IA banning/restricting sweepstakes; NY AG stopped 26 operators; MI sued operators; UIGEA fantasy safe harbor; predominance test in 30+ states; CA AG opinion (July 2025) that paid DFS is illegal betting; NY/AZ restrictions on single-event yes/no prop pick'em.

## Findings (numbers and facts, not vibes)
- Sportsbook economics for a solo founder: app/fees $100K–$10M per state depending on state, surety bonds up to ~$5M, market-access deals 10–25% revenue share, ongoing tax 6.75%–51%; ~8–12 months and ~$0.5M–$2M+ for ONE Tier-1 state. CA has no measure before ~2028; TX illegal until 2027 at earliest.
- Sweepstakes are collapsing 2024–2026: new statutes extend liability to payment processors, geolocation, and marketing affiliates, and treat redeemable dual-currency sweeps as illegal gambling regardless of free entry.
- Phased path: (1) "Beat the Model" free skill pick'em — multi-event aggregation, Brier-scored vs the model, leaderboards/streaks/badges, non-redeemable virtual coins, no chance engine; (2) paid analytics subscription tiers; (3) counsel-gated affiliate/data-partner with licensed books in legal states; (4) optional, separate sub-brand for sweepstakes/real-money, never co-branded with the glass-box trust mark.
- Hard lines even for free-to-play: no cash-out of virtual currency; no secondary market; no single-event yes/no wager formats; no chance engine; age-gate + responsible-gaming page + self-exclusion; never market to minors; no real-money/sweepstakes launch without licensed gaming counsel, founder sign-off, per-state controls.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Brier-scored user-vs-model contest mechanics → OTHER (engagement/product; Brier is calibration math, not football intelligence).
- Glass-box trust-mark separation (never co-brand gaming with the trust mark) → TRUST-SIGNAL (brand-integrity posture).
- No QB/coaching/OL/scheme football content in this file → no tags in those categories.

## Engine-actionable? (yes/no + one-line what)
Yes — `prediction-engine/contest-scoring.ts` already shipped and tested, so the Brier-scored "Beat the Model" pick'em is a ready engagement lane (leaderboards/streaks) once product is built around it.
