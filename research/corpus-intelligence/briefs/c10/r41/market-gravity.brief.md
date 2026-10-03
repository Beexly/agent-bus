# brain/market-gravity.md
## What it is (1-2 sentences)
Doctrine for the Market Gravity signal, which synthesizes betting-market data into a structured pressure signal (direction, speed, confidence) that adjusts pick confidence/risk only when corroborated by Tier 1–3 evidence — never a standalone pick reason. Status is "doctrine only," implementation pending an approved change proposal.
## Key metrics/methods (formulas where given, else "not specified")
- Inputs: `opening_line`, `current_line`, `movement_size` (points moved), `movement_speed` (points/hour), `book_agreement`, `book_disagreement_spread`, `movement_timing`, `injury_correlation`, `news_correlation`, `public_proxy`, `liquidity_proxy` (both Tier 4 proxies only), `model_disagreement`, `historical_closing_pattern`, `volatility` (SD of line movement over prior 48h). No composite formula given.
- Outputs: `market_pressure_score` (0–100), `pressure_direction`, `volatility_warning`, `movement_explanation`, `confidence_adjustment`, `risk_adjustment`, `classification`, `corroboration_status`, `sharp_money_flag`.
- Classification: WATCH (below directional threshold) / LEAN (moderate directional) / PICK (strong directional + Tier 1–3 corroboration) / AVOID (contradictory or high volatility).
- Sharp-money flag set only when ALL true: movement > 2 points (or market-type equivalent); movement window < 2 hours; Tier 1/2 source corroborates an information advantage; operator manually reviewed and confirmed. Never on public surfaces.
- Confidence adjustment table: PICK +5 to +10; LEAN +2 to +5; WATCH 0; contradictory vs Tier 1–3 evidence −5 to −15; AVOID −10 to −20. Bounded: final confidence may not exceed 85 on market signals alone, may not fall below 5.
## Data sources named
Tier 2 (licensed API) for open/current lines; Tier 1 for injury/news corroboration; Tier 1–3 for news correlation checks; Tier 4 proxies only for public volume and liquidity; internal model scores for model disagreement and historical closing patterns.
## Findings (numbers and facts, not vibes)
- Sharp-money flag thresholds: >2 points movement, <2 hour window, Tier 1/2 corroboration, manual operator confirmation required.
- Confidence bounds: cap 85 on market signals alone, floor 5.
- Forbidden output language: any "sharp money / sharps / smart money" claims without Tier 1/2 support; any inference "public is on X so sharps are on Y"; any certainty claim about winners on public surfaces.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Sharp-flag 4-condition gate → TRUST-SIGNAL (explicit anti-fabrication standard for sharp claims).
- Confidence adjustment table with bounds → OTHER (model calibration discipline: market signals capped, never sole basis).
- Corroboration requirement before any PICK classification → TRUST-SIGNAL.
- Public-surface language rules → OTHER (copy/compliance doctrine).
## Engine-actionable? (yes/no + one-line what)
Yes — the confidence adjustment table (bounded −20..+10 with 85/5 caps) and the 4-condition sharp-flag gate are directly implementable scoring rules.
