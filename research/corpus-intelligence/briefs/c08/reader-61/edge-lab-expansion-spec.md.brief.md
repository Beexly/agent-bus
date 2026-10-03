# Sports/docs/product/edge-lab-expansion-spec.md
## What it is (1-2 sentences)
Phase 4 spec for expanding Galaxy's Edge Lab (`/tools`) from vig check + odds translator to 9 new free public calculator tools. Spec authored by Claude, implemented by Codex; tools are pure user-input calculators with zero engine/pick integration.
## Key metrics/methods (formulas where given, else "not specified")
- Kelly Criterion Sizer: full Kelly + fractional Kelly (default 0.25 quarter-Kelly multiplier), expected long-run growth rate; variance warning when full Kelly risks > 10% of bankroll. Kelly formula itself not spelled out in spec.
- Hedge Calculator: guaranteed-profit / break-even / equal-profit hedge amounts (formulas not spelled out).
- CLV Tracker: per-bet CLV in cents and percentage; aggregate CLV over sample; trend chart.
- Arbitrage Finder: flags when sum of implied probabilities < 100%; stake split + guaranteed profit %.
- Middling Scanner: middle probability "rough estimate based on historical line-distribution" (method not specified).
- SGP Correlation Matrix: pairwise correlation estimates from `GameSignal` correlations for tracked games, static sport-level defaults otherwise; adjusted SGP implied probability vs naive multiplication.
- Live Game Simulator: 10,000-run Monte Carlo, in-browser; default win-prob model = ELO-adjusted by score differential.
- Backtesting (Pro+) and Bankroll Tracker/Paper Trading (Pro+ persistence; FREE = session-only).
## Data sources named
None external. Inputs are user-supplied; correlations come from the internal `GameSignal` store and `BetTracker` (existing surface). No engine confidence numbers feed any tool (explicit gate).
## Findings (numbers and facts, not vibes)
- 9 new tools ship in Phase 4; 8 acceptance criteria (all shipped, brand-safety scan pass, representative-input correctness, Pro+ gating, no recommendations, 390px mobile, historical-only backtest labeling, BetTracker persistence integration).
- Voice rule: utility copy, not infomercial ("utility, not infomercial"); compliance scanner with hard refuse on banned vocabulary.
- No tool auto-executes trades; none surfaces Galaxy's published confidence as Kelly input or EV claim.
- Open items: shareable state via URL params (default yes); Phase 4 backtest uses form-based filter, DSL lands in Phase 5 for Elite; Phase 5+ optional "Monte Carlo against the model's signals" variant.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SGP correlation matrix + static Monte Carlo simulator — OTHER (tooling infrastructure, internal `GameSignal` reuse)
- CLV Tracker (closing line value = single best predictor of long-term profitability, per spec) — TRUST-SIGNAL
- Brand-safety gates: tools never publish Galaxy confidence/EV/Kelly as recommendation — TRUST-SIGNAL (audit-trail posture for public trust)
## Engine-actionable? (yes/no + one-line what)
No — the spec explicitly forbids engine integration; it is a public-good calculator surface, not a modeling artifact.
