# docs/arxiv-program/research/2026-09-21/arxiv-deep/1821-college-football-ranking-sensitivity-glmm.md
## What it is (1-2 sentences)
Deep-read ledger of Andrew T. Karl (2014), arXiv 1403.7642v1 (JQAS Vol. 8 Issue 3), which audits how sensitive BCS-era college football computer rankings are to five modeling choices in a multiple-membership generalized linear mixed model fit on binary game outcomes.

## Key metrics/methods (formulas where given, else "not specified")
- Multiple-membership GLMM for binary home-win outcomes: rᵢ ∈ {0,1}; latent yᵢ = Xᵢβ + Zᵢη + εᵢ with rᵢ = 1{yᵢ > 0}; η ∼ N(0, σₜ²I) random team ratings; Zᵢ sparse row with +1 (home) / −1 (visitor).
- Probit: ε ∼ N(0,I) giving Φ⁻¹(πᵢ) = Xᵢβ + Zᵢη; logit: πᵢ = e^{Xᵢβ+Zᵢη}/(1+e^{Xᵢβ+Zᵢη}).
- Three FCS-handling variants: §2.1 separate FBS/FCS populations with pooled σₜ² + fixed FCS effect β; §2.2 separate variances σ₁² (FBS), σ₂² (FCS); §2.3 single population with all FCS collapsed to one effect η_{p+1}.
- Theoretical result: Mease (2003)'s penalized likelihood is exactly the PQL approximation of this GLMM under random effects with density f(η) ∝ Πⱼ Φ(ηⱼ)Φ(−ηⱼ).
- Estimation: SAS PROC GLIMMIX MULTIMEMBER (PQL) vs. custom R EM with first-order Laplace and fully exponential Laplace E-steps; ML vs. REML comparison. Target outputs: EBLUP team ratings η̃ = E[η|r] and rank orderings.

## Data sources named
- NCAA website game-outcome files (NCAA 2012), processed to per-game rows: (home, game date, away, home score, away score, fcs indicator, H, A, home win); e.g. "Ball St. 8/28/2008 Northeastern 48–14".
- Scope: 2008–2011 seasons through conference championships only (bowls excluded); ~240 random-effect levels (FBS + FCS teams), ≈12 games per team per season.
- Processed datasets from Karl (2012b) personal site; Mease code at davemease.com/football.

## Findings (numbers and facts, not vibes)
- Integral approximation moved the national title game: 2011 — PQL.P.0/LA.P.0 rank Oklahoma St. #2; FE.P.0 ranks Alabama #2 (Alabama 1.572 vs. Oklahoma St. 1.565, a 0.007 gap flipping the championship pairing). 2009 — PQL/LA pick Alabama & Texas; FE picks Alabama & Cincinnati.
- Variance estimates drive the moves: PQL.P.0 σ̂ₜ² ≈ 0.52–0.55 vs. FE.P.0 σ̂ₜ² ≈ 0.71–0.82 (2008: 0.52/0.54/0.76; 2011: 0.55/0.57/0.80). PQL underestimates σₜ² by ~30%.
- Monotonicity: for every team, the LA rank lies between (inclusive) its PQL and FE ranks across 2008–2011.
- Mease's penalty-implied random-effect distribution ≈ N(0, 0.815·I), which is why Mease agrees more with FE.P.0 than PQL.P.0 despite being a PQL fit.
- Link function: FE.P.0 vs. FE.L.0 — rank agreement 1–16 in 2008, but rank flips where it hurts (2011: Oklahoma St./Alabama flip at #2/#3).
- FCS handling: 2011 FE.P.0 ranks Alabama #2 but FE.P.1 (pooled) and FE.P.2 (split) pick Oklahoma St. #2. FCS effect β̂ = 2.03 in 2011 → P(random FBS beats random FCS) = Φ(2.03) ≈ 0.979.
- ML vs. REML (PQL.P.1): no top-16 differences in any year; estimates differ by ≤0.001.
- Extreme-σₜ² stress test: σₜ² fixed at 0.0001 (≈ rank by wins−losses; Arkansas St. reaches #11) and at 100 (≈ pure strength-of-schedule; 12 of top 15 from SEC/Big XII, including 7–5 Auburn/Texas and 6–6 Texas A&M).
- No home-field effect included (deliberate: confounded by nonrandom scheduling, e.g. power programs buying extra home games vs. weak opponents).
- BCS dollar stakes cited: Les Miles $200,000 BCS bonus / $5.7M raise clause; Nick Saban $400,000 title bonus.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (COACHING) Scheduling confounding is explicit and quantified: home-field effects are confounded by nonrandom scheduling (power programs buying home games vs. weak opponents) — a coaching/AD strategy signal that distorts naive home-field estimates.
- (OTHER) The sensitivity apparatus is directly product-relevant: publish NCAA ratings as EBLUPs with 95% prediction intervals; report σ̂ₜ² as an explainable "schedule-strength dial"; run the five-way sensitivity audit ({PQL, LA, FE} × {probit, logit} × {FCS consolidated, pooled}) on every ratings release and flag "specification-robust" teams.
- (OTHER) Ordered-probit-over-binned-margins improvement experiment named as the path to keep margin information without running-up-the-score incentives.
- (OTHER) Ledger verdict: ADAPT — the binary-only GLMM complements, not replaces, margin-based GSE ratings.

## Engine-actionable? (yes/no + one-line what)
Yes — adopt the EBLUP + 95% prediction-interval publishing protocol and the per-release specification rank-range sensitivity audit for GSE's NCAA team ratings, with σ̂ₜ² exposed as a schedule-strength dial and binary EBLUPs gated as a prior into the margin-based rating (gate: <0.2% held-out ATS lift → downgrade).
