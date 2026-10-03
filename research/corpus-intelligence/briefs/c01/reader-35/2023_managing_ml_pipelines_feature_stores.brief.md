# arxiv-program/research/2026-09-21/arxiv-deep/2023-managing-ml-pipelines-feature-stores.md
## What it is (1-2 sentences)
GSE ledger note (verdict: ADAPT) on the VLDB tutorial by the Uber Michelangelo feature-store team + Stanford DB group on managing the ML pipeline lifecycle: feature authoring/publishing with definitional metadata, training/deployment via date-partitioned dual stores, and monitoring/maintenance via feature-quality metrics and training-deployment skew detection, plus a forward-looking "embedding ecosystem" section.
## Key metrics/methods (formulas where given, else "not specified")
- Feature lifecycle: definitional metadata (update cadence + definition SQL); streaming features via aggregation functions to online (in-memory DBMS) + offline (SQL warehouse) stores; date-partitioned time-based joins.
- Monitoring: feature quality metrics (freshness, null counts, mutual information across features); model quality (training-deployment data skew, near-real-time outlier/input drift detection); offending features isolated and replaced for retraining/serving.
- Model storage for provenance/reproducibility (integrated model store).
- Embedding-ecosystem metrics: nearest-neighbor stability; downstream instability = count of predictions that change with different embeddings; eigenspace overlap score; subpopulation monitoring via user-defined functions (Robustness Gym); slice-based learning.
- GSE spec: feature-quality table (freshness/nulls/mutual-info per materialization), PSI skew monitor per feature vs. last 7 days served (alert if PSI > 0.2 on any top-20 SHAP feature), every pick links (feature_set_version, model_version, training window); ~1 week effort.
## Data sources named
None (tutorial paper; no datasets/experiments). References external results: Bootleg (Apple), Robustness Gym (Salesforce), open-source Feast, Hopsworks, Snorkel, Ludwig.
## Findings (numbers and facts, not vibes)
- One cited number: Orr et al. 2021 structured-data augmentation improved rare-entity performance by 40 F1 points (paper's claim, not reproduced).
- Key operative findings are doctrinal: no feature-quality monitors exist on GSE's nflverse/odds ingestion — a gap this paper fills; training-deployment skew statistic is named but undefined (implementer chooses KS/PSI/MI); embedding half irrelevant to GSE unless learned player embeddings are adopted; tutorial claims are experience-asserted, not measured (no false-positive/false-negative rates, no latency/scale numbers).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: MLOps monitoring doctrine for the NFL feature layer (feature quality + drift detection + train/serve provenance).
## Engine-actionable? (yes/no + one-line what)
Yes — add a feature-quality/skew monitoring layer (PSI > 0.2 gate, fault-injection test requiring ≥95% precision naming corrupted feature sets, ≤1 false alert/month) on top of the GSE feature store.
