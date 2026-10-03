# docs/arxiv-program/research/2026-09-21/arxiv-deep/0257-hyperparameter-optimization-as-a-service-on.md
## What it is (1-2 sentences)
Deep read of arXiv:2301.05522v3 (Barbetti & Anderlini, 2023): Hopaas, a REST-API service layer wrapping Optuna's Bayesian optimization to coordinate hyperparameter-tuning campaigns across heterogeneous, opportunistic HPC sites that share no common database. Ledger verdict: REJECT — domain tooling paper (HEP), no novel optimization method, no sports data, nothing GSE's tuning workflow lacks.
## Key metrics/methods (formulas where given, else "not specified")
- Three REST APIs: `ask` (POST /api/ask/token → hyperparameters to test), `tell` (POST /api/tell/token → final trial score), `should_prune` (POST /api/should_prune/token → intermediate score + step → boolean).
- Optimization: Optuna's Bayesian methods (surrogate model + acquisition; Bergstra et al. 2011/2013; Golovin et al. 2017 Vizier; Akiba et al. 2019 Optuna); pruning via Optuna pruners. No equations (machinery cited, not derived).
- Stack: FastAPI/Uvicorn behind NGINX (HTTPS), PostgreSQL shared state, docker-compose, INFN Cloud (live at hopaas.cloud.infn.it); Python client (Zenodo 10.5281/zenodo.7528502); OAuth2 via INFN GitLab.
## Data sources named
None — systems paper; demonstration application is tuning GAN parameterizations for Lamarr, the LHCb ultra-fast simulation framework (dozens of studies, hundreds of trials each, 20+ concurrent diverse nodes, mostly CINECA Marconi 100).
## Findings (numbers and facts, not vibes)
- Qualitative-operational only: dozens of studies, hundreds of trials each, 20+ concurrent heterogeneous nodes coordinated; resulting GAN parameterizations beat the prior Lamarr tuning baseline (no numeric deltas reported).
- No controlled comparison vs alternatives; no ablation of the service layer. The demonstrated value is purely operational (cross-site coordination).
- The motivating constraint (opportunistic multi-provider HPC with no shared database) does not exist at GSE.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: none for sports. Note for tooling completeness: distributed HPO needs at GSE are served by plain Optuna + PostgreSQL backend (which GSE already has via Neon), not a REST wrapper.
## Engine-actionable? (yes/no + one-line what)
No — nothing to implement; if GSE ever needs distributed HPO, use `optuna` with a shared PostgreSQL storage backend directly (Optuna supports it natively).
