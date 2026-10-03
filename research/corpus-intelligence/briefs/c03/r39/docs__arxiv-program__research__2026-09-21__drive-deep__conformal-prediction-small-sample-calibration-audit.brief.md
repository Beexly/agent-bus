# docs/arxiv-program/research/2026-09-21/drive-deep/conformal-prediction-small-sample-calibration-audit.md
## What it is (1-2 sentences)
A deep-read audit report converting a Drive doc ("Auditing Conformal Prediction, Small-Sample Calibration, and Sports Market Probabilities for GSE", 281 lines, 2 tables) into a structured A–F audit; its central thesis is "eliminate fake tightness": GSE must wrap every publishable prediction in distribution-free conformal machinery and operate fail-closed (emit infinite intervals or No-Bet) whenever the calibration sample is too small to certify the nominal quantile, never clamping the quantile to the largest observed residual.
## Key metrics/methods (formulas where given, else "not specified")
- **Conformalized Quantile Regression (CQR, Romano/Patterson/Candes 2019, arXiv:1905.03222):** E_i = max(q_{alpha_lo}(X_i) − Y_i, Y_i − q_{alpha_hi}(X_i)), alpha_lo = alpha/2, alpha_hi = 1 − alpha/2; calibration quantile = ceil((1−alpha)(|I_2|+1))-th largest of {E_i}; interval C(Xn+1) = [q_{alpha_lo} − Q_{1−alpha}, q_{alpha_hi} + Q_{1−alpha}]; guarantee P{Yn+1 in C} >= 1−alpha under exchangeability.
- **Jackknife+ (Barber et al. 2019, arXiv:1905.02928):** LOO residuals R_i^LOO = |Y_i − mu_-i(X_i)|; interval [q_alpha^-(mu_-i − R_i^LOO), q_1-alpha^+(mu_-i + R_i^LOO)]; coverage >= 1 − 2*alpha regardless of distribution.
- **Split conformal (Angelopoulos & Bates 2021, arXiv:2107.07511):** q_hat = ceil((n+1)(1−alpha))/n empirical quantile of calibration scores; hard constraint delta >= 1/(n+1) or emit infinite sets/abstain.
- **Mandatory hand computation n=5, alpha=0.10:** inflation (1−alpha)(1+1/n) = 1.08; rank k = ceil(6*0.90) = 6 > n=5 → quantile at level >1.0 is +infinity → must refuse/No-Bet; minimum n for alpha=0.1 is ceil(1/alpha)−1 = 9. Clamping k to n=5 yields max residual with true coverage 5/6 ≈ 83.33% (a 6.67% under-coverage defect) while claiming 90% — explicitly banned as "fake tightness."
- **Adaptive Conformal Inference (ACI):** alpha_{t+1} = alpha_t + gamma*(alpha − err_t), err_t = 1{Y_t not in C_t}; asymptotic coverage only, no finite-sample guarantee over an 18-week NFL schedule.
- **Sequential Predictive Conformal Inference (SPCI):** s_t = f(s_{t-1},…,s_{t-p}) + e_t; valid finite-sample intervals only if residual series stays stationary.
- **Rolling-Origin CP:** calibrate against m most recent pseudo-OOS forecast errors; m = 32–64 games suggested for a 272-game NFL season.
- **Binary moneylines are NOT CQR:** CQR residual math is invalid for Y in {0,1}; use Platt Scaling, Isotonic Regression (PAVA with tie pre-coalescence of rounded/repeated scores), or Venn-Abers (generalized, van der Laan & Alaa 2025, arXiv:2502.05676) giving multiprobability bounds [p0,p1]; interval width p1−p0 measures epistemic uncertainty.
- **Impossibility result (Barber et al. 2020, EJS):** distribution-free CIs for conditional label probability pi(X) of bounded length are impossible without structural assumptions — answered by Venn-Abers outputting an interval of probabilities instead of a point.
- **Gates:** Expected Calibration Error (ECE) > 0.05 → fail-closed; Venn-Abers width p1−p0 > 0.20 → refuse moneyline pick/No-Bet; Clopper-Pearson exact binomial 95% CIs on win rates; withhold public performance displays until n >= 30; Mondrian conformal calibration for subgroup equalized coverage across leagues/prop types; CLV discipline — partition by release-time snapshots, never train on near-game-time lines.
- **Under-coverage bias (Lin, Trivedi & Sun 2021):** for alpha > 0.5 and small d/n, the alpha-quantile roughly achieves coverage alpha − (alpha − 1/2)*d/n (approximate, per source quote).
## Data sources named
nflverse and mlbverse open-source play-by-play repos (rights-clean, audit-verifiable); yromano/cqr repo (computation logic); arXiv IDs: 1905.03222, 1905.02928, 2107.07511, 2106.05515, 2206.04860, 2402.16300, 2502.05676; GSE internal: cqr.ts conformalQuantile(), PRs #434, #412, #206, #454, tuneTau/coverageEdgeCurve, EB-tau.
## Findings (numbers and facts, not vibes)
- n=5, alpha=0.10 → rank k=6 > n → +infinity; clamped coverage would be 83.33% vs claimed 90% (6.67% fake-tightness defect); minimum n = 9 for 90% guarantee.
- Jackknife+ guarantee is 1 − 2*alpha (80% at alpha=0.10).
- n=500, alpha=0.10 → split CQR rank k = ceil(501*0.90) = 451.
- Gates: ECE 0.05; Venn-Abers width 0.20; n >= 30 for public win-rate displays; rolling window m = 32–64.
- Known live defect (verified 2026-09-21 in checkout): `apps/web/lib/calibration/cqr.ts` conformalQuantile() line ~15 clamped rank with `Math.min(Math.max(rank, 0), n - 1)`, and its tests explicitly expected the wrong behavior — unfixed at doc time (2026-09-17).
- ACI asymptotic coverage does NOT certify anything over an 18-week NFL season; split CQR under exchangeability does NOT apply to time-series player props (use SPCI/rolling-origin).
- CQR must never touch moneylines (invalid for binary outcomes); ordinal power ratings do not map linearly to win probabilities without spread-variance calibration.
- Internal evidence tension: Section C demotes all internal workspace hits to HEARSAY that cannot override literature, yet Table 2 relies on exactly those hits as audit evidence.
- Rolling-Origin CP is listed as "2026" in Table 1 (unverified — possibly a 2026 preprint or transcription artifact).
- Images/figures from the original docx were not extracted; Table 1's Exchangeable (Y/N) and Source ID columns are blank in the conversion; citation keys [11]–[23] cannot be fully mapped to the flat bibliography.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Fail-closed scarce-segment policy (n < 9 at alpha=0.1 → +Infinity/No-Bet, never clamped): TRUST-SIGNAL
- CQR as the core interval engine for continuous player props and game totals: OTHER (calibration infrastructure)
- Jackknife+ as the scarce-n engine for new props/rookies without data-splitting loss: OTHER
- Venn-Abers [p0,p1] for moneylines with p1−p0 > 0.20 refusal gate: TRUST-SIGNAL
- Isotonic PAVA with tie pre-coalescence for binary probability calibration: OTHER
- CLV discipline — release-time snapshot partitioning, no training on near-game-time lines: TRUST-SIGNAL
- Known cqr.ts clamp defect and wrong-expectation tests still unfixed at doc time: TRUST-SIGNAL
- Mondrian subgroup calibration across leagues/prop types: OTHER
- "Availability arguments do not override coverage proofs" (rejection of Schröder et al. truncation-for-utility): TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
Yes — fix the cqr.ts small-sample clamp (return +Infinity/No-Bet when n < ceil(1/alpha)−1), deploy Venn-Abers with the 0.20 width gate for moneylines, and enforce the ECE > 0.05 fail-closed and n >= 30 public-display rules; note the WIRING-PLAN (2026-09-22) says the cqr.ts repair landed on main two days later.
