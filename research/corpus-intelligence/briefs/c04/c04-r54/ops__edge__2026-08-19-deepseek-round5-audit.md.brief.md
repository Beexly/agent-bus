# docs/ops/edge/2026-08-19-deepseek-round5-audit.md
## What it is (1-2 sentences)
The round-5 adversary audit of DeepSeek's NFL-first cross-sport close-prediction program: adopts 5 corrections, rejects 5 errors, and formalizes the statistical certification design (N_eff, certification calendar, launch/certification decoupling, gating on the Hermes L-14 label census).
## Key metrics/methods (formulas where given, else "not specified")
- N_eff framework: MLB totals ≈ 37.5 effective picks/week (90 raw, m=15, ρ=0.10); NFL three-track portfolio ≈ 9.2/week (16 games, m=16, ρ=0.15, cross-track ρ=0.3). Continuous-CLV certification at ~1,400 effective picks: MLB ≈ 37 weeks, NFL ≈ 152 weeks — "NFL cannot certify solo within a season — PROVEN."
- Extension (their own, INFERENCE from stated numbers): MLB has ~6 weeks of regular season left at audit time → 6 × 37.5 ≈ 225 effective picks by October, then MLB dark until April → "certification is therefore a 2027 event on every sport."
- Label Δ = no-vig close − no-vig entry (price-space, verified no key-number adjustment needed). Key-number distance d_key = distance to nearest key number is a legitimate leak-free feature; DeepSeek's specific cover-prob numbers (0.45/0.43/0.42) are illustrative, unsourced — do not quote.
- E-process: WSR e-process valid under conditional null E[X_i | F_{i−1}] ≤ 1/2 per observation regardless of regime mix (rejects DeepSeek's "regime mixing breaks the e-process" claim as false).
- DeepSeek's empirical-Bernstein λ formula unstable across rounds (round 3 vs round 5 differ) → rule: derive the bet sequence directly from Waudby-Smith & Ramdas and pre-register the exact formula; never transcribe DeepSeek's rendering.
- Rules 5a/5b adopted as standing audit rules: any DeepSeek ranking is unsorted until re-sorted by its own score column (rank table mis-sorted 3 consecutive rounds; BookDisagreementAtLock 0.200 ranked below close-pred 0.1875); no mechanism marked computable=YES unless required data is a line item in the stated inventory.
## Data sources named
The Odds API ingestion (unverified whether 1H totals captured — if absent, NFL effective volume drops below 9.2/week); Hermes L-14 (v2) label census under C-14 contamination criteria (the gate for all downstream work); prior fleets' outputs; competitive-intel corpus (transparency/ledger floor valuable at 50.9%).
## Findings (numbers and facts, not vibes)
- ADOPT-1: N_eff honesty + certification calendar — arithmetic verified line by line.
- ADOPT-2: NFL confirmatory track = regular season weeks 1–18 only, picks ≥4 h before kickoff; preseason exploratory-only (its N_eff ≈ 60/season cannot certify). Adopt the rule, not DeepSeek's reasoning (power/decay/prior justify it, not its validity argument).
- ADOPT-4: single-track disclosure language ("certification of one track does not imply certification of any other track") adopted verbatim — honest and FTC-consistent.
- UNIFICATION (theirs, not DeepSeek's): "Opener vs close inefficiency" (DeepSeek's top-scored mechanism at 0.525) is the intercept-only special case of close-pred — build one program: close-pred with a preregistered intercept-only baseline, giving the R² kill criterion a real null model.
- GATE unchanged: nothing built and no preregistration dated until Hermes L-14 (v2) label census reports clean-close counts per market type with preseason split for NFL. If census fails, the fix is label capture, not modeling.
- E-4: DeepSeek's alpha-allocation table "effort" column is decorative (all weights = P(edge)·√N_eff with effort divisor 1.0 regardless of low/med/high); per-sport N_eff/week for NBA/CFB/CBB/soccer invented (no m/ρ derivation, NBA listed with August volume); treat all D.1 weights as placeholders until real per-sport N_eff comes from the L-14 census.
- E-5: NFL "3 markets/game" assumes 1H totals capture — unverified; L-14 v2 census to report per market type.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- N_eff/certification-calendar framework and launch-vs-certification decoupling → OTHER (statistical methodology for edge certification).
- No QB behavioral, coaching, OL, trust-signal, or scheme content → OTHER.
## Engine-actionable? (yes/no + one-line what)
Yes — the close-pred label Δ = no-vig close − no-vig entry, the N_eff/ρ certification-sizing arithmetic, the d_key leak-free feature, the intercept-only baseline + R² kill-criterion design, and the "derive λ from Waudby-Smith & Ramdas, pre-register" rule are direct inputs to the CLV/edge-certification program.
