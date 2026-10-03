# intelligence/product-ecosystem.md
## What it is (1-2 sentences)
Doctrine document describing Sports OS as a governed 15-component sports intelligence network (data intake base → intelligence processing middle → user-facing surfaces top), derived from Prompt 1 §3 of the SPORTS_OS_INTELLIGENCE_NETWORK_MASTER_PLAN. Status is doctrine only; implementation requires owner approval.
## Key metrics/methods (formulas where given, else "not specified")
- Per-pick required outputs include a confidence breakdown scored 0–100, signal rationale, supporting/weakening evidence, odds/line context, risk/volatility note, model version, source freshness timestamp, and post-game settlement/calibration feedback.
- Tier access: Free = 1 pick/day, no confidence score; Pro = all picks + confidence scores + line movement; Elite = all Pro + early access + analytics + alerts.
- Performance-stat gate: no performance stats from fewer than 30 settled picks per model version.
- Market Gravity (Component 9) inputs: opening line, current line, movement size, movement speed, sportsbook disagreement, timing relative to news, injury/news correlation, public pressure proxy, liquidity proxy, model disagreement, historical closing movement, volatility. Outputs: market pressure score, volatility warning, movement explanation, confidence adjustment, risk adjustment, watch/lean/pick/avoid classification. Formula not specified.
## Data sources named
Source Acquisition Mesh (Tier 5 intake named for weak signals); Evidence Vault; Entity Graph; Signal Ledger; Market Gravity; Cockpit; source-rights registry; Claim Governance. No external providers named in this file.
## Findings (numbers and facts, not vibes)
- 15 components total; dependency map orders: Source Mesh + Weak Signal Engine → Evidence Vault, Entity Graph, Signal Ledger → Picks/Fantasy/Brain; Market Gravity feeds Picks; Claim Governance gates Research Brain and Methodology; methodology must exist before Developer/AI-Search/B2B layers launch.
- Weak signals are never verified facts; required phrasings include "Unverified chatter increased", "No official confirmation found", "Treat as watchlist only".
- Entity-graph relationship chain: coach → affects scheme → affects usage → affects fantasy projection; market → belongs to game; line → belongs to sportsbook.
- Fantasy use cases named: start/sit, waiver adds, trade evaluation, injury risk, usage trend analysis, role change detection, matchup context, weather/venue context, scheme/coordinator change impact, league scoring customization.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: entity graph encodes coach→scheme→usage→fantasy-projection causal chain — supports a coaching-tendency adjustment layer in the engine.
- SCHEME: scheme/coordinator change impact listed as a fantasy use case; scheme is a first-class entity.
- OTHER: Market Gravity component (market signal); 0–100 confidence + calibration feedback loop; 30-settled-pick performance gate; evidence-tiering system (tiers 1–6) as a data-quality schema.
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the confidence-with-calibration-feedback and tiered-source evidence patterns into the GSE pipeline's public/private surface and pick provenance design.
