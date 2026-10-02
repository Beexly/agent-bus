# docs/strategy/fantasy-launch/LAUNCH_PLAN.md
## What it is (1-2 sentences)
The customer-facing launch plan for the Galaxy Fantasy product: soft-launch draft/best-ball tools now, loud ribbon-cutting at NFL kickoff, with the $49/yr Founding Fantasy tier as the revenue vehicle and picks/calibration as the proof engine behind the brand.
## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas; the plan states a weekly-projection model backtest + calibration proposal must clear before `canPublishProjections` is flipped (Phase B), but gives no backtest methodology.
## Data sources named
- nflverse (real graded pool rendered after flipping `PROJECTIONS_PROVIDER`; integrity payoff noted).
- Sleeper (read-only league sync is live at soft launch).
- 4for4 (maps the best-ball draft windows: early offseason May–June, fragile mini-camp ADP June–July, optimal high-volume preseason late Aug–Sept).
## Findings (numbers and facts, not vibes)
- Owner decision (locked): soft-launch draft/best-ball tools now → loud ribbon-cutting at NFL kickoff. [OTHER]
- NFL 2026 dates cited: HOF Game Aug 6 · Preseason Wk1 Aug 13 · Kickoff Sept 9. [OTHER]
- Revenue vehicle: Fantasy tier $4.99/mo · $49/yr, founding rate locked for life (grandfather guarantee); sits below Pro ($99/yr); fantasy suite is its value, betting depth + alerts stay Pro/Elite. [OTHER]
- Pricing benchmark: fantasy-tools subscriptions cluster ~$40–$100/yr (FantasyPros MVP $71.88, Fantasy Life+ T2 $99.99, 4for4 Pro $59, RotoViz ~$60); $49 founding undercuts the band while beating "free Sleeper" on decision tools. [OTHER]
- Soft-launch live (real, cleared data): Draft Assistant, Best Ball, read-only Sleeper league sync; Start-Sit, Waivers/FAAB, Trade are preview-only, clearly labelled, never fabricated. [TRUST-SIGNAL]
- Phase B headline: "the only fantasy projection that publishes its own calibration." [TRUST-SIGNAL]
- Owner prerequisites before live revenue: (1) create `STRIPE_FANTASY_MONTHLY_PRICE_ID` + `STRIPE_FANTASY_ANNUAL_PRICE_ID` (test → live), else Fantasy CTA returns graceful 503; (2) flip `PROJECTIONS_PROVIDER` to render the real nflverse graded pool; (3) run weekly-model backtest + calibration proposal, then flip `canPublishProjections`. [OTHER]
- Compliance posture: tools/analytics subscription, not a DFS/contest operator (no entry fees, no payouts — low-risk lane); player names + stats are facts and used freely; avoid player photos/team logos; contests deferred + founder/legal-gated. [OTHER]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (covered inline above): [OTHER] ×6, [TRUST-SIGNAL] ×2
## Engine-actionable? (yes/no + one-line what)
No — product launch plan with no engine metrics or methods; the calibration-publishing headline is a product posture, not an engine input.
