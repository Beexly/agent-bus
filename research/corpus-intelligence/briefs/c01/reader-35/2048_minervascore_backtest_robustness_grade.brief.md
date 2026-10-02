# arxiv-program/research/2026-09-21/arxiv-deep/2048-minervascore-backtest-robustness-grade.md
## What it is (1-2 sentences)
GSE ledger note (verdict: ADOPT — highest priority of its wave) on MinervaScore (Santoni, Jouanne, Scullin, arXiv:2608.23808): a single auditable 0–100 statistical-robustness grade combining four established backtest-validation quantities — Deflated Sharpe Ratio (DSR), Probability of Backtest Overfitting (PBO), Superior Predictive Ability (SPA), Minimum Track Record Length (MinTRL) — plus a regime-stability diagnostic, with a binary "Robustness Seal" gate, calibrated on 359,062 production backtest records.
## Key metrics/methods (formulas where given, else "not specified")
- Seal (eq. 2): Seal = 1[DSR ≥ τ_DSR ∧ PBO ≤ τ_PBO ∧ SPA ≤ τ_SPA ∧ T ≥ MinTRL ∧ ρ ≥ τ_ρ], with τ_DSR = 0.95, τ_PBO = 0.50, τ_SPA = 0.10, τ_ρ = 0.60; MinTRL per Bailey & López de Prado.
- Regime composite (eq. 3): ρ = 0.5·p_+ + 0.3·clip_[0,1](1 − s_SR/σ_ref) + 0.2·logistic(SR_min); p_+ = fraction of validation windows with positive Sharpe, s_SR = std of per-window Sharpes, SR_min = minimum across windows, σ_ref = 2 (fixed, heuristic weights — authors' flagged weakest link).
- Signed margins: z_DSR = (u − Φ^{−1}(τ_DSR))/σ_DSR, u = (SR̂ − SR_0)/ŝe, DSR = Φ(u); bounded gates z_k = (logit(τ_k) − logit(g_k))/σ_k for k ∈ {PBO, SPA}; z_ρ = (logit(ρ) − logit(τ_ρ))/σ_ρ (clamped [ε,1−ε], ε=10⁻⁶); z_MinTRL = tanh((T − MinTRL)/σ_T), σ_T = max(0.2·MinTRL, 50); dispersions σ_k from IQR of calibration population. Fail-closed: no score without pre-Φ u.
- Aggregation (eq. 7): S = wᵀz / √(wᵀΣ_eff w), w = (0.35, 0.25, 0.20, 0.10, 0.10), Σ_eff = cross-sectional margin correlation (Hartung-style dependence adjustment); S → 0–100, 80+ reserved for Seal holders. Evidence floor = separate insufficient-data flag, not a gate. Margins are descriptive, NOT p-values (authors' explicit disclaimer).
- GSE port (gse.validation.minerva): DSR deflated by actual evaluated-formula count (log every evaluation incl. pruned); PBO via CSCV S=16 partitions over seasons; SPA (White/Hansen) vs. benchmark signal set; ρ over season-phase windows with sports-retuned σ_ref; Seal required before a signal enters production; ~1–2 weeks, pure statistics.
## Data sources named
359,062 proprietary production backtest records (Minerva, Minerva1.com — no public release); synthetic markets with known ground truth for discrimination testing; one pre-registered test on unseen real-market data. No code stated.
## Findings (numbers and facts, not vibes)
- Synthetic ground truth: MinervaScore AUROC = 0.989 at headline difficulty (near-perfect separation of true signal from lucky backtests).
- Honest caveat: improvement over GT-Score proxy and gates-passed baseline is modest — "remains close to the corrected DSR-alone baseline" (most value is the DSR).
- Pre-registered real-market test: no significant forward relationship — Spearman ρ_s = 0.013, one-sided permutation p = 0.40 — authors position the score as an "auditable validation and reporting layer, rather than evidence of demonstrated real-market predictability." Score ranks statistical support, NOT probability of future profit.
- GSE acceptance gate: AUROC ≥ 0.95 on permuted-label nulls vs historically-profitable signals AND Seal false-rate on nulls ≤ 5%; else fall back to plain deflated-Sharpe + PBO.
- Proposed improvement (ledger author): add a sports-specific **market-efficiency gate** — edge must survive residualization against closing-line movement (statistical robustness ≠ economic edge); learn ρ weights via logistic regression on sports-calibrated null/alternative simulations.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: the backtest-validation standard for the entire sports-signal-mining program — operationalizes the acceptance gates of every other ledger in its wave (2042–2047).
## Engine-actionable? (yes/no + one-line what)
Yes — build gse.validation.minerva: five-gate Seal + 0–100 score as the promotion gate for any mined signal entering production models, plus the proposed sixth market-efficiency gate against closing-line movement.
