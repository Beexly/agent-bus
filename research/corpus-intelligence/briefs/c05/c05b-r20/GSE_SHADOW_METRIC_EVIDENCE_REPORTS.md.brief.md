# docs/math/GSE_SHADOW_METRIC_EVIDENCE_REPORTS.md
## What it is (1-2 sentences)
A set of shadow-only governance evidence reports (updated 2026-07-06) for 10 proprietary GSE metrics, generated from synthetic/local fixtures in `@sports/prediction-engine`; proof of local governance behavior only — no public content, API exposure, licensing, betting use, or metric-lifecycle graduation is approved. All reports are SHADOW lifecycle, INTERNAL API exposure, NOT_READY licensing, and synthetic/local evidence.

## Key metrics/methods (formulas where given, else "not specified")
No formulas given. Drift checks use PSI/delta values against watch and severe thresholds; model cards are DRAFT. Per-metric numbers:
- `stale-line-risk-score` — drift WATCH — `market_freshness_psi` 0.18 vs watch 0.15 / severe 0.30. Needs cleared historical odds snapshots before any promotion review.
- `qb-burden-index` — drift STABLE — `burden_distribution_psi` 0.08 vs watch 0.14 / severe 0.28. Doctrine: QBI is contextual burden, not QB quality or win probability.
- `role-volatility-index` — drift WATCH — `role_stability_psi` 0.21 vs watch 0.16 / severe 0.32. Doctrine: RVI is role instability, not player quality or certainty.
- `calibration-integrity-grade` — drift WATCH — `calibration_integrity_ece_delta` 0.07 vs watch 0.05 / severe 0.12. Doctrine: CIG grades calibration evidence quality, not win probability or verified calibration status.
- `drift-pressure-index` — drift WATCH — `drift_pressure_composite_delta` 0.16 vs watch 0.12 / severe 0.28.
- `conformal-uncertainty-width` — drift WATCH — `conformal_width_coverage_gap_delta` 0.13 vs watch 0.08 / severe 0.24. Doctrine: CUW is uncertainty-width pressure, not projection safety or production interval calibration.
- `no-bet-pressure` — drift WATCH — `no_bet_hard_pass_rate_delta` 0.17 vs watch 0.12 / severe 0.28. Doctrine: NBP is not betting advice, pick approval, or responsible-gaming clearance.
- `playable-window-score` — drift SEVERE — `decision_window_block_rate_delta` 0.31 vs watch 0.12 / severe 0.25. Doctrine: PWS is readiness for downstream review, not win probability, EV, confidence, or a pick trigger.
- `portfolio-fit-score` — drift STABLE — `portfolio_concentration_risk_delta` 0.11 vs watch 0.16 / severe 0.30. Doctrine: PFS is not stake sizing, EV, or board approval.
- `market-mirage-score` — drift WATCH — `market_mirage_watch_rate_delta` 0.19 vs watch 0.14 / severe 0.28. Doctrine: MMS is market-integrity risk, not win probability or confidence.

## Data sources named
- Evidence refs per metric point to `docs/math/GSE_PROPRIETARY_METRIC_BIBLE.md` plus synthetic fixture splits (e.g., `fixture-slrs-market-freshness-split`, `fixture-qbi-burden-split`, `fixture-rvi-role-stability-split`, `fixture-cig-calibration-stability-split`, `fixture-dpi-drift-pressure-split`, `fixture-cuw-conformal-width-split`, `fixture-nbp-refusal-pressure-split`, `fixture-pws-decision-window-split`, `fixture-pfs-portfolio-concentration-split`, `fixture-mms-market-mirage-split`). All fixtures are synthetic/local — no real data sources named.

## Findings (numbers and facts, not vibes)
- 10 metrics inventoried; 8 at drift WATCH, 2 STABLE (qb-burden-index, portfolio-fit-score), 1 SEVERE (playable-window-score, block-rate delta 0.31 exceeds severe 0.25).
- All model cards DRAFT; all public API exposure false; no live routes created.
- No report creates a probability, expected-value, pick, or betting-advice claim.
- Hard doctrine per metric on what each metric is NOT (e.g., confidence ≠ win probability; signal scores are decision quality, not win probability).
- Next gate named: source/payload-reviewed distribution and drift adapters for Drift Pressure Index and remaining governed backlog; conformal + historical validation must prove source rights, payload rights, calibration separation, and drift behavior before any promotion review.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- `qb-burden-index` (contextual burden, STABLE drift, PSI 0.08) — QB-BEHAVIOR
- `role-volatility-index` (role instability vs player quality distinction, WATCH) — QB-BEHAVIOR (role-usage context for QBs/skill players)
- `calibration-integrity-grade` (ECE delta 0.07 vs watch 0.05) — TRUST-SIGNAL
- `drift-pressure-index` (composite delta 0.16 vs watch 0.12) + SEVERE `playable-window-score` — TRUST-SIGNAL
- `conformal-uncertainty-width` (coverage-gap delta 0.13 vs watch 0.08) — OTHER (uncertainty quantification)
- `stale-line-risk-score` (PSI 0.18 vs watch 0.15) + `market-mirage-score` (delta 0.19 vs watch 0.14) — OTHER (market integrity)
- `no-bet-pressure` (refusal/hard-pass pressure, delta 0.17) — OTHER (decision gating)
- `portfolio-fit-score` (concentration risk, STABLE) — OTHER

## Engine-actionable? (yes/no + one-line what)
Yes — the qb-burden-index (contextual QB burden, distinct from QB quality) and role-volatility-index (role instability) are direct engine inputs for QB-context and usage-volatility features; the watch/severe threshold pattern (PSI/delta vs watch/severe bands) is the reusable drift-monitoring template for any live metric.
