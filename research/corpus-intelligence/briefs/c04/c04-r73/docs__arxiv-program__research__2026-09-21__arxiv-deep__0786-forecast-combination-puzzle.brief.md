# docs/arxiv-program/research/2026-09-21/arxiv-deep/0786-forecast-combination-puzzle.md
## What it is (1-2 sentences)
A theoretical/empirical paper (Wei Qian, Craig A. Rolling, Gang Cheng, Yuhong Yang, 2015) on why the "forecast combination puzzle" occurs (simple average beating sophisticated weighting), proposing mAFTER, a two-level adaptive combiner that treats candidate combination methods (SA, AFTER, LinReg) as candidates and combines them adaptively. The deep-read ledger rates it ADAPT for GSE's model/pick ensembling.
## Key metrics/methods (formulas where given, else "not specified")
- mAFTER: Level 1 builds candidate meta-forecasts — SA (simple average), AFTER (Yang 2004 exponential-weighting CFA method), LinReg (OLS of response on candidate forecasts). Level 2 applies AFTER on these three combination-forecasts. Adaptation cost at most O(log K / T).
- ŷ_t,w = Σ_i w_i ŷ_{t,i}; average forecast risk R_T = (1/T) Σ_t E[(y_t − ŷ_t)²]; real-data substitute MSFE_T = (1/T) Σ_t (y_t − ŷ_t)².
- Minimax costs (Yang 2004): CFI optimal-weight target O(K log(1+T/K)/T) for T>K², O(log K/√(T log T)) for T≤K²; CFA best-individual target O(log K/T).
- Proposition 1 (mAFTER guarantee): (1/T)Σ E[(y_t−ŷ_t^(M))²] ≤ inf(inf_i risk_i + c1 log K/T, risk_SA + c2/T, risk_LR + c2/T).
- CFA scenario: R_{T,1}/R_{T,SA} → σ²/(σ² + β²σ_X²/4), optimal weight (1,0)ᵀ. CFI scenario: optimal weight (1/2,1/2)ᵀ under Σw=1, (1,1)ᵀ unconstrained.
- ABC screening criterion: ABC(r) = Σ_t (y_t − ŷ_{t,r})² + 2rσ² + σ² log C(p,r).
## Data sources named
Simulated Monte Carlo data (5 simulation cases × 100 replications; linear DGPs; AR(1)–AR(4) with structural breaks at t=50,100, n=150; p=20 regressors screening case n=200). U.S. Survey of Professional Forecasters (SPF), 1968:Q4–1990:Q4, targets PGDP/RGDP/UNEMP, 13–14 candidate forecasts per panel, 1–4 quarter-ahead horizons, missing forecasts imputed via Lahiri et al. 2013 (regression-imputed and SA-imputed panels; SPF public via Federal Reserve Bank of Philadelphia). No proprietary data.
## Findings (numbers and facts, not vibes)
- Structural-break sim (normalized avg forecast risk vs SA=1.000, SE): all-history — LinReg 1.026 (0.011), BG 1.005 (0.003), AFTER 1.047 (0.010); rolling rw=40 — LinReg 1.060 (0.033), BG 0.992 (0.002), AFTER 0.991 (0.009); rw=20 — LinReg 1.64 (0.42), BG 0.980 (0.003), AFTER 0.952 (0.007).
- Screening sim: AFTER beats SA at all screening levels (σ=2, ρ=0: AFTER 0.998→0.945 as screening loosens 10%→80%; LinReg 1.017→1.151, worsening with more candidates).
- SPF real data (normalized MSFE, SA=1.00), REG-imputed: PGDP — LinReg 1.88, BG 0.95, AFTER 0.90, mAFTER 0.90; RGDP — LinReg 1.64, BG 1.00, AFTER 1.11, mAFTER 1.01; UNEMP — LinReg 1.79, BG 0.99, AFTER 0.98, mAFTER 0.98. mAFTER matches the better of SA/AFTER everywhere, never worse than SA by more than ~3%.
- Proven only for squared-error point forecasts; no probabilistic calibration (CRPS/log score) analysis.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: ensembling doctrine for GSE — CFA (combining for adaptation: pick the best candidate) vs CFI (combining for improvement: weight to beat all) scenario distinction; two-level mAFTER combiner portable to GSE pick/probability ensembling with adaptation to CRPS/log-loss (per the ledger's improvement experiment). TRUST-SIGNAL: mAFTER's guarantee tracks the best of {individual, SA, LinReg} + O(log K/T) — a robustness property worth labeling in engine calibration state.
## Engine-actionable? (yes/no + one-line what)
yes — Build a two-level combiner (SA + exponential-weight AFTER + regression-weighted blend; level-2 AFTER over them) for GSE pick/probability ensembling, gated on ≥1.5% relative walk-forward log-loss improvement over simple average on 2024 NFL picks.
