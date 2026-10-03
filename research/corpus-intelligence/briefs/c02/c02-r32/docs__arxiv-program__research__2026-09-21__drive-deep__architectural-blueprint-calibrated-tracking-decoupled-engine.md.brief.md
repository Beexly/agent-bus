# docs/arxiv-program/research/2026-09-21/drive-deep/architectural-blueprint-calibrated-tracking-decoupled-engine.md

## What it is (1-2 sentences)
A read-only research note (complete read of a 425-line / ~33,171-char Google Drive doc) specifying a three-rung architecture for an elite, well-calibrated sports probability engine WITHOUT live 10Hz tracking data: margin-density forecasting scored by CRPS, conformal calibration with fail-closed gates, Shin devigging, and parameter-free B-spline steam detection. It is a specification document — it reports zero backtests and zero measured results.

## Key metrics/methods (formulas where given, else "not specified")
- CRPS (prose in doc): for forecast CDF F and observation y, integral over x ∈ (−∞,∞) of [F(x) − 1{x ≥ y}]² dx. Gaussian closed form via standard normal CDF Φ(z) and PDF φ(z) stated in prose only — the doc does NOT print the closed form; the reader's restatement (CRPS = σ[z(2Φ(z)−1) + 2φ(z) − 1/√π]) is explicitly NOT attributed to the doc.
- Valuation: V = integral of the expected-points curve g_EP evaluated over density f(y|s) — prose/heading form only, no explicit LaTeX.
- Conformal rank index (exact): k = ⌈(n+1)(1−α)⌉; if n < ⌈1/α⌉ − 1, k exceeds n → intervals must be ±∞ (fail-closed; ban all quantile clamping).
- Jackknife+: zero data split, LOO residuals; coverage guarantee is 1 − 2α (at α=0.10 → exactly 80% guaranteed, NOT 90%).
- Generalized Venn-Abers: dual monotonic isotonic regressions via PAVA on calibration data augmented with both hypothetical test labels → epistemic multiprobability interval [p₀, p₁]; width Δp = p₁ − p₀; Δp > 0.20 → market flagged unpriceable, fail closed, no position.
- Shin devigging: rejects proportional normalization; solves a quadratic for insider-trading parameter z, disproportionately removing vig from longshots (no explicit quadratic printed).
- B-spline steam detection: RTS Kalman smoother → cubic B-spline parameterization → instantaneous curvature κ(t); steam signature = extreme global maximum in κ(t) immediately accompanied by a localized deceleration dip in trajectory velocity. Hawkes processes rejected for short-horizon odds archives (overfit to high-frequency noise → rampant false positives).
- ACI: updates nominal miscoverage α_t after every resolved event via online step-error formula; tuning parameter γ (no equation in doc).
- Forecast-Skill E-Process: anytime-valid sequential likelihood-ratio martingale rooted in Ville's inequality; capital unlocks only on confidence-boundary breach. Sizing: worst-case robust Kelly over Venn-Abers sets [p₀, p₁].
- Ingestion hard gates: flag player movement > 13 m/s as fatally corrupt; non-finite timestamps → `SourceCannotSpeakAsOfError`; scan for fixture triplication, phantom matches, pinned 1.0000 consensus.

## Data sources named
- nflverse (open-source play-by-play — the sanctioned commercial data base).
- NFL Big Data Bowl (non-commercial; offline method validation only).
- Public aggregate metrics at point-in-time; short-horizon odds archives (weeks).
- Rejected: token-gated NextGenStats endpoints for commercial scraping; live 10Hz coordinate pipelines (10Hz demands zero-copy IPC + dedicated GPU inference — Arrow Flight, NVIDIA Triton — to hold sub-20 ms latency; refused as mandatory infrastructure).
- Reference tail: GSE_58_independent_research.md, Beexly/Sports PR #96 (model-accuracy leaderboard), PR #412 (shadow prediction engine), "Auditing Conformal Prediction, Small-Sample Calibration, and Sports Market Probabilities for GSE.docx" (unverified, recorded as listed).

## Findings (numbers and facts, not vibes)
- All numbers are asserted thresholds/gates/audit figures — the doc reports NO backtest P&L and NO model-vs-model benchmarks. [TRUST-SIGNAL]
- Spatial datasets: "approaching 19%" of frames contain state-transition inconsistencies / impossible telemetry / corrupted formatting (approximate, cited from audits of raw event logs). [OTHER]
- Baseline market-data violation rate: "well above 5%" (approximate design assumption). [OTHER]
- Live tracking licensing: "typically exceeding hundreds of thousands of dollars annually" (approximate cost claim). [OTHER]
- Fake-tightness worked math: α=0.10, n=5 → k = ⌈6×0.9⌉ = 6 > 5; clamped max-residual coverage = exactly 5/6 = 83.33% while reporting 90% confidence. [TRUST-SIGNAL]
- CRPS graduation gate: measurable CRPS improvement of < 0.01 (doc's phrasing) on ≥ 150 settled spreads vs widened Gaussian baseline before live execution. [OTHER]
- NFL head-to-head analogs per season: n ≈ 70 (approximate); split CQR domain is n > 200 (large sample, continuous margins). [OTHER]
- Venn-Abers no-bet rule: Δp > 0.20 → unpriceable / fail closed. [TRUST-SIGNAL]
- Steam/repricing window: 200–400 ms (physical analog: cornerback biomechanical transition penalty 200–400 ms after a route break; market analog: books reprice at different speeds after genuine steam → stale prices at slower secondary books). [OTHER]
- Devigging comparison: proportional normalization severely overweights heavy favorites in extreme asymmetric markets; power method mildly dampens favorite-longshot bias with no theoretical foundation; Shin is the most accurate reflection of bookmaker liability but computationally heavier. [OTHER]
- Conformal method table: split CQR = exact 1−α finite-sample under exchangeability (needs large withheld set); Jackknife+ = guaranteed minimum 1−2α, zero split; Venn-Abers = exact [p₀,p₁] epistemic bounds. [TRUST-SIGNAL]
- Metric table: MAE ignores variance; binary Brier can't evaluate continuous spreads/totals; CRPS heavily penalizes mismeasured variance and incentivizes honest calibrated forecasts (computationally intensive without closed forms). [OTHER]
- Doc flags Barber et al. (2020): bounded-length distribution-free confidence intervals for binary conditional probabilities are mathematically impossible without structural assumptions — any per-pick uncertainty band is infinite or assumption-laden; name the exchangeability assumption on the product surface. [TRUST-SIGNAL]
- New metric invoked but undefined: "Expected Separation Over Expected (ESOE)" — cannot be sourced from this doc. VERSA state-transition validation also name-dropped, never defined. [OTHER]
- Gaps/conflicts the reader flagged: no empirical validation anywhere; Jackknife+ LOO-refit cost hand-waved; CQR-vs-Jackknife+ conflict with GSE's existing CQR lane needs reconciliation (proposed split: CQR for large-n props/DFS, Jackknife+ for NFL sides/totals); Shin's z is unidentified from two-way odds alone (no regularization discussed); ACI's γ, the E-process boundary, and robust-Kelly formulation are spec-level only. [TRUST-SIGNAL, OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- CRPS as primary metric for spread/total margin densities + the 150-settled-spread / 0.01-improvement promotion gate (pairs with PR #96 leaderboard) — OTHER, TRUST-SIGNAL.
- Conformal honesty package: ban clamped CQR (83.33%-reported-as-90% is a live trust hazard), honest 1−2α Jackknife+ reporting for NFL's n≈70 reality, Venn-Abers [p₀,p₁] with the Δp > 0.20 no-bet rule — TRUST-SIGNAL.
- Shin devigging as the market baseline: proportional normalization systematically overweights favorites, so every GSE edge claim is mismeasured against the wrong baseline until Shin replaces it — OTHER.
- Physical-plausibility ingestion gating (13 m/s rule as philosophy; non-finite timestamps → hard error; triplication/phantom fixtures; pinned 1.0000 consensus) maps directly onto GSE's odds pipelines and the shadow engine (PR #412) — OTHER.
- B-spline/RTS steam detection over Hawkes on short-horizon odds archives — the design decision to copy if GSE builds steam/CLV tooling — OTHER.
- Ville-inequality E-process edge gate over the posted-pick record vs Shin-devigged consensus — fits the trust-no-claims posture — TRUST-SIGNAL.
- Robust Kelly sized over [p₀,p₁] instead of point-estimate Kelly — compatible with the Kelly-sizing research lane — OTHER.
- Margin densities price every alternate spread/total/teaser and are the only sound basis for pricing middles — directly serves the alt-line/props product end-state — OTHER.
- Decoupling performance model from market model (closing lines never input features to team-strength models — prevents parroting the oddsmaker) — COACHING, OTHER.
- Latency-arbitrage execution (200–400 ms stale-book trading): strategy value, not build value — most legally/ToS-sensitive piece, mirrors courtsiding-detection references — OTHER.

## Engine-actionable? (yes/no + one-line what)
Yes — the conformal honesty package (no clamped CQR, Jackknife+ at n≈70, Venn-Abers Δp>0.20 no-bet), Shin devigging, CRPS + 150-spread promotion gate, and ingestion plausibility gates are all cheap greenfield builds with exact constants given; ACI and latency arbitrage are parked (need plumbing / legally sensitive).
