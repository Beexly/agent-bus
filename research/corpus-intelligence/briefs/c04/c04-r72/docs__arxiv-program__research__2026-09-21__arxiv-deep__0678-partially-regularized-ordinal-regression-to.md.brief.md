# docs__arxiv-program__research__2026-09-21__arxiv-deep__0678-partially-regularized-ordinal-regression-to
## What it is (1-2 sentences)
Skripnikov & Sivadanam (2025), arXiv:2506.03057 — identifies which complementary-football features (one unit's performance driving the other unit's scoring) survive regularized selection, using a partially regularized ordinal regression that guarantees full strength-of-schedule adjustment (team effects unpenalized) and improves out-of-sample drive-scoring prediction in both NFL and college. Ledger verdict: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Regularized ordinal regression with partial elastic-net penalty (extension of Wurm et al. 2021 ordinalNet): team-level SoS effects unpenalized; complementary features penalized with partial non-proportional-odds relaxation (non-proportional coefficient only for the "≥ field goal" cumulative equation).
- Model: drive outcome Y_{ijkl} ~ Multinomial(π_ijkl), s = 1..5 ordinal categories (defensive TD −7 ~1%, safety −2 <0.5%, no score 0 ~65%, FG 3 14%/8%, offensive TD 7 20%/26%); cumulative logit links with proportional odds for team effects (α_i offense, β_j defense, Σα=Σβ=0), penalized complementary features γ; logit P(Y ≤ s) = τ_s − (α_i + β_j + home + context + γ·complementary).
- λ via 10-fold CV ×3 replicates, metric = out-of-sample multinomial log-likelihood; surrogate residual diagnostics (Liu & Zhang 2018) extended to non-proportional odds via binarized per-category plots (extended R package sure).
- Complementary features tested: non-scoring turnover indicator (previous drive), turnover×post-turnover starting position, yards allowed, plus special-teams metrics. Context: homefield, half, time remaining, score differential.
## Data sources named
- Drive-by-drive data: FBS college 2014–2020 (~15,000 drives/season retained after cleaning, 65% of halves), NFL 2009–2017 from Kaggle (98% games retained). Public data (Kaggle NFL, cfbfastR-style FBS). Extended ordinalNet/sure functionality described; no repo link stated in paper.
## Findings (numbers and facts, not vibes)
- Selection stability (3× 10-fold CV): non-scoring turnover indicator selected ≥80% of replicates (always positive); turnover×starting-position term selected 100% after inclusion; yards allowed selected 70% (negative).
- Median post-turnover starting position: own 41-yard line, +21 yards vs no turnover. A takeaway adds +0.6–1.0 points/drive (parabolic vs baseline, maxing at ~2–2.5 baseline pts/drive).
- Non-proportional "≥ FG" coefficient selected 90% — turnovers boost FG probability disproportionately (FG range 70–75 yards advanced in NFL).
- 10-fold CV: GS+SoS+Complem beats GS and GS+SoS in MAE of expected points across NFL and CFB seasons (effect size shown graphically in Figure 5 without tabulated numbers); SoS gain larger in CFB (more disparity); ordinal regression slightly beats linear regression; well-calibrated across all five scoring categories in most seasons.
- Contextualized rankings: offenses with elite complementary defenses get downgraded when projected onto league-average defense, and vice versa.
- File's limitations: adjacent drives in the same game can split across CV folds; special-teams field-position dynamics excluded; CFB data heavily cleaned (35% of halves dropped); NFL data 2009–2017 (pre-17-game era).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: complementary football is a scheme-level phenomenon — defense→offense linkage via turnover-generated field position is the first explicit cross-unit scoring mechanism in the corpus.
- TRUST-SIGNAL: selection stability across 3×10-fold CV (100%/≥80%/70% selection rates), calibration diagnostics across all five scoring categories, and honest disclosure that MAE gains are graphical rather than tabulated.
- OTHER: a new feature family for GSE ratings — turnover-generated field position as an explicit offensive-expectation input, with a defined reproducible test against the nflfastR expected-points baseline.
## Engine-actionable? (yes/no + one-line what)
Yes — add previous-drive non-scoring turnover indicator + turnover×starting-position interaction (with the non-proportional FG-equation boost) to GSE's drive-level expected-points model and project ratings onto league-average complementary units; adopt if 10-fold CV on nflverse 2015–2024 shows MAE improvement with non-overlapping SE bars in ≥4 of 10 seasons.
