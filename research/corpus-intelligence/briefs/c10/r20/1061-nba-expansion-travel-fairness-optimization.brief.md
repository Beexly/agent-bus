# arxiv-program/research/2026-09-21/arxiv-deep/1061-nba-expansion-travel-fairness-optimization.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2512.16968v1 (Hassanzadeh, Davari & Goossens), "Fairness, Travel, and Market Potential: An Optimization Framework for NBA Expansion": two optimization models (pure travel minimization M1, Nash-bargaining fairness M2) over conference/division realignment for a 32-team NBA, evaluated across 15 expansion city pairings under 82/72-game × 2/4-division scenarios. Ledger verdict: ADAPT — reusable optimization template and travel-burden fatigue features.
## Key metrics/methods (formulas where given, else "not specified")
- Theory distance: opponent distances weighted by expected game frequency from division/conference structure; regression vs 2004–2018 actual travel gives R² ≈ 0.34 (in-sample — calibration, not validation).
- M1: minimize total theory travel (assignment MIP).
- M2: Nash bargaining — displayed as minimizing Σ_i log(w_i), w_i = team i's travel-increase ratio vs baseline (ledger flags: text describes product maximization; displayed form maximizes Π(1/w_i), pushing each increase ratio toward 1 — verify intended bargaining semantics before reusing M2 verbatim).
- Constraint: market exposure (metropolitan population proxy) ≥ γ=0.8 of baseline per team.
- Scenario grid: {82, 72} games × {2, 4} divisions/conference × 15 pairings from six candidate cities (Seattle, Las Vegas, Montreal, Vancouver, Tampa, Mexico City).
## Data sources named
- NBA team geography; 2004–2018 actual travel (regression validation); metropolitan populations (market proxy); media-market universe estimates.
- No code stated in the paper.
## Findings (numbers and facts, not vibes)
- Current 30-team theory travel ≈ 2,583,763 miles; re-optimized current structure: 2,583,209 (M1) vs 2,583,232 (M2) — fairness costs ~23 miles in 2.58M, essentially nothing in aggregate.
- Mexico City + Vancouver is the only pairing above 2.8M miles: 2,802,722 in the 82-game/4-division scenario.
- Limitations (authors): no back-to-back or long-road-trip modeling; distance ≠ fatigue (no sports-science integration); fairness only via Nash bargaining (no max-min/CVaR).
- Numeric gate (ledger): ADAPT iff travel-burden differential (theory distance over trailing N days) improves GSE's NBA game model on rolling-origin log-loss beyond the ledger-1059 rest/travel features.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: theory-distance calculator → team travel burden and travel-burden differential as fatigue features for the NBA game model, interacting with ledger-1059 rest/travel coefficients.
- SCHEME: M1/M2 template lets GSE audit any released schedule for competitive fairness (who bears the travel burden) — modeling + content value.
- TRUST-SIGNAL: fairness finding — constraining burden-fairness costs only ~23 miles in 2.58M, i.e., fairness is cheap in aggregate; useful framing for schedule-fairness content.
- OTHER: caveat — distance ≠ fatigue; back-to-backs and road-trip-length structure are missing (authors flag this), so raw miles must be combined with rest-day features rather than used alone.
## Engine-actionable? (yes/no + one-line what)
yes — build the theory-distance calculator for NBA schedules, add travel-burden differential (trailing N days) to the NBA game model; gate on rolling-origin log-loss improvement over ledger-1059 rest/travel features.
