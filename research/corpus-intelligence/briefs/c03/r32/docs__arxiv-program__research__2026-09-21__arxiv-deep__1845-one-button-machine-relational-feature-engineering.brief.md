# docs/arxiv-program/research/2026-09-21/arxiv-deep/1845-one-button-machine-relational-feature-engineering.md
## What it is (1-2 sentences)
Full-text ledger read of OneBM (arXiv 1706.00327, IBM Research Dublin) — the only anchor method built natively for relational data with temporal cutoff handling (no post-cutoff leakage by construction) and train/validation drift-feature detection; enumerates joining paths over the entity graph via DFS and applies type-appropriate transforms. Verdict: ADAPT — port its entity-graph + cutoff-timestamp + drift-detection design to nflverse tables.
## Key metrics/methods (formulas where given, else "not specified")
- Joining path p = T₀ —c₁→ T₁ … —cₖ→ Tₖ ⇥ c (T₀ = main table), enumerated by DFS to MaxDepth, simple paths only; forward-only vs full (backward-allowed) modes; one-to-one vs multiple path types; redundant paths removed via canonical forms.
- Per-entity relational tree Tᵉ_p; GroupBy(Tᵉ_p, d) groups leaves by depth-d nodes.
- Type-identified transforms: numerical → as-is; categorical → label distribution; timestamp → calendar features; number multiset → avg/var/max/min/sum/count; time series → avg/max/min/sum/count/var, recent(k), FFT, discrete wavelet transform, autocorrelation; categorical sequence → count/distinct/high-correlated subsequences.
- Temporal safety: "OneBM only collects data that was generated before the prediction cutoff time to avoid mining leakage"; most-recent subsampling for timestamped tables.
- Feature selection: dedup + drift detection (drop features whose train/validation distributions diverge) + Chi-square hypothesis test of feature–target dependence.
## Data sources named
- Three Kaggle competitions (Table I): KDD Cup 2014 (4 tables, 0.9 GB); Grupo Bimbo inventory (5 tables, 7.2 GB, RMSLE); Outbrain click prediction (8 tables, 100.22 GB uncompressed, 119M train / 32M test examples). Spark cluster: 12 machines × 92 GB RAM × 12 cores.
## Findings (numbers and facts, not vibes)
- KDD Cup 2014: DSM untuned 314th (AUC 0.55481, top 66%) → DSM tuned 145th (0.5863, top 30%) → OneBM+RF 118th (0.58983, top 25%) → OneBM+XGBoost 81st (0.59696, top 17%), all untuned — top 16–24% finishes with zero hand-crafted features.
- Grupo Bimbo: RMSLE 0.48681, rank 326 = top 16%, beating 1,642 of 1,969 teams; top-10 features by correlation: demand series aggregates — mean 0.454, min 0.414, max 0.392, recent(1) 0.385, recent(0) 0.365, recent(2) 0.323, recent(3) 0.288, recent(4) 0.223 — plus itemset-mined product names (0.253, 0.211).
- Outbrain: all-tables 133 features AUC 0.6356/0.63534 (rank 643/979); main-table-only 0.63627/0.63639 (633/634); linear ensemble 0.65078, rank 227 = top 24%, 77% of best human score (0.70); baseline 0.4895.
- Runtimes: KDD 0.3h, Bimbo 2.8h, Outbrain 32.7h.
- Adversarial notes in ledger: cutoff relies on a naming convention (silent misconfiguration = silent leakage); Bimbo's "series table" needed manual human framing; type inference is brittle (ad id mis-typed numerical needed correction); drift-feature removal can delete legitimately predictive regime features (drift ≠ leakage conflation); Spark-era engineering is overkill for NFL-scale data.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Cutoff-timestamp discipline enforced in code (not naming convention) = the leakage architecture for any relational feature layer — kickoff cutoffs with a 100% replay-audit gate (TRUST-SIGNAL).
- Drift quarantine maps to NFL regime shifts (rule changes, COVID 2020, 2024 kickoff rules): quarantine drifted features into a regime-risk list rather than deleting; companion feature f × 1[season ≥ drift_point] learns the break explicitly (SCHEME).
- Relational auto-traversal automates join-path exploration analysts do manually (e.g., "pressure rate when blitzed on 3rd-and-long" = a joining path games→plays→aggregate) (OTHER).
- recent(k) + spectral time-series transforms on timestamped odds → line-movement / volatility features directly reusable (OTHER).
- Label-distribution features (e.g., cover rate by referee crew) are a concrete categorical-path example (COACHING-adjacent; tagged OTHER-COACHING context).
## Engine-actionable? (yes/no + one-line what)
Yes — build "GSE-OneBM" as the relational discovery layer over nflverse tables (DuckDB, MaxDepth 2, kickoff cutoffs enforced in code, drift quarantine not deletion), outputting versioned feature definitions with full (path, type, transform, cutoff) provenance.
