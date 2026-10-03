# calibration-proposals/2026-08-09-dixon-coles-kalshi-match-v5.2.2.md
## What it is (1-2 sentences)
An IMPLEMENTED calibration proposal (modelVersion v5.2.2, dated 2026-08-09) that bumps the model to add a Dixon–Coles τ(ρ) soccer independent plus Kalshi market-data plumbing (team short-code aliases, ET wall clock, series-match 12h start-skew fix, two-sided fair-value nulling).
## Key metrics/methods (formulas where given, else "not specified")
Dixon–Coles τ(ρ) correction for low-score correlation in soccer (ρ default −0.13), replacing the independent Poisson in the blend for soccer only; hockey/baseball keep Poisson. No explicit formula given in the proposal itself (test file `dixon-coles.test.ts` cited). Calibration floors unchanged: Brier ≤ 0.22, ECE ≤ 0.05, Murphy R ≤ 0.05, n ≥ 100, GREEN×K. Heuristic confidence weights/composite formula unchanged.
## Data sources named
TeamGameLog λ (for Dixon–Coles λ inputs); Kalshi (ESPN short-code team aliases); machina-predictions-templates `monte-carlo.py` τ(ρ) (research port); sports-skills markets (ET + 12h skew); unit tests: dixon-coles.test.ts, kalshi-team-abbr.test.ts, kalshi-series.test.ts, kalshi-client.test.ts.
## Findings (numbers and facts, not vibes)
- Dixon–Coles τ(ρ) soccer independent (`source: "dixon_coles"`) is a market-free trueProb that REPLACES independent Poisson in the blend for soccer (no double-counting the same rates); ρ default −0.13.
- Kalshi ESPN short-code aliases: CHW→CWS, GS→GSW, NY→NYK, SA→SAS, NO→NOP, UTAH→UTA, NJ→NJD; unknown shorts → null (doctrine: wrong independent null > wrong independent inverted).
- Kalshi ticker ISO instants use America/New_York for date/time fragments (date-only strings stay calendar days); series matches drop far-future attach when occurrence_datetime is known (12h start-skew fix); toIndependentFairValue returns null on both sides if either side is unmapped/unquoted (no one-sided invent).
- Status IMPLEMENTED; supersedes v5.2.1. Gates still OFF: CALIBRATION_ADJUSTMENTS_ENABLED, CALIBRATION_AUTO_PUBLISH (false), Conformal/ACI abstain, Polymarket independent env-gated OFF, free-path ABSENT-only, Odds key untouched.
- Founder follow-up: promote Production→main after merge; re-run calibration-metrics + generate slate (new picks carry dixon_coles when soccer rates exist); optional later: fit ρ from form, Understat xG λ, title-token Kalshi fallback.
- Explicitly labeled "ranking discrimination / independent coverage + polarity safety" — NOT a PROVEN claim.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: prediction-calibration machinery (soccer low-score correlation correction + market-data hygiene), no QB/coach/OL/scheme intelligence.
## Engine-actionable? (yes/no + one-line what)
yes — the ρ default (−0.13) and the null-over-inverted doctrine are directly reusable parameters for soccer independent modeling and independent-data QA.
