# docs/ops/cost-neon.md
## What it is (1-2 sentences)
A measured read-only audit of the Neon Postgres bill (audit date 2026-09-29, org `org-floral-star-55015944`, Launch plan v3.2, period 2026-09-01→2026-10-01, 695.5 h elapsed) reconciling `cost_total = $157.86` to the cent. It ranks cost-reduction actions by savings with explicit data-loss risk ratings.
## Key metrics/methods (formulas where given, else "not specified")
Reconciliation formulas verified against Neon's `v3_metrics[].cost`: branch-hours ÷ 720 × $1.50/branch-month; compute CU-hours × $0.106/CU-hour; egress GB over 500 GB included × $0.10/GB. Cost table: extra child branch-hours $61.95 (39.2%, 29,737 excess branch-hours), egress overage $49.18 (31.1%, 491.8 billable GB of 991.8 GB total), compute $45.51 (28.8%, 429.4 CU-hours), root storage $0.85, history $0.37. Full-month normalization: $163.42.
## Data sources named
`GET /organizations/org-floral-star-55015944/consumption` (Neon API v3), cross-checked against branch/endpoint inventory and the Neon operation log. Projects: `gse-postgres` (`summer-brook-99380762`, 38 branches, ~$157.85) and `sports-db` (`wild-tooth-31983487`, main archived since 2026-09-20, $0.01).
## Findings (numbers and facts, not vibes)
- Storage is not the problem: 99.8 GiB logical across 38 branches bills only $0.85; child-branch change volume is 7.5 MB ($0.003). 87% of the $61.95 branch-hour line ($53.79 of 25,821 branch-hours) is churn from branches created and deleted inside the period, not standing branches.
- Root cause of churn: `.github/workflows/neon_workflow.yml` creates a Neon branch on every PR `synchronize` event (every push); 396 `create_branch` entries in 6.2 days ≈ 66 unique ≈ 10.6/day, 46 already deleted. The migration/schema-diff steps that would consume the `db_url` are commented out (lines 57–84) — the branches are paid for and unused.
- Compute: `main` active 80.9% of wall-clock (562.6 h of 695.5 h) at avg 0.64 CU; 186 wake/suspend pairs in 6.2 days (~30/day). Root cause: `vercel.json` has 23 cron jobs firing 223 times/day, including 15-minute `refresh-odds` and `health-alert`. Scale-to-zero (300 s timeout) already on.
- Egress: 991.8 GB in 695.5 h ≈ 34 GB/day; no Neon-side switch; only fix is app-level payload reduction (projections/pagination) after profiling.
- `sports-db` is a $0.01/mo project with a $610.56/mo ceiling tail risk: its endpoint has `suspend_timeout_seconds = 0` (scale-to-zero disabled) and `max_cu = 8`. Local `NEON_API_TOKEN` is a 219-char database connection string, not a `napi_` key — 401 on console API; a hermes note records that a working API key lives nowhere in the repo and the P1 fix needs the founder.
- Ranked actions 1–4 (stop synchronize-branching, delete 35 preview branches, expiry +14d→+1d, enable scale-to-zero on sports-db): $157.86 → ~$95/mo; adding egress profiling + cron consolidation: → ~$25–35/mo. No configuration path to $0.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- All content is cloud-infrastructure cost accounting → OTHER. No QB, coaching, OL, trust-signal, or scheme material.
## Engine-actionable? (yes/no + one-line what)
No — pure infrastructure-cost document with no engine-usable signals, methods, or findings. (Operationally useful to ops, not to the engine.)
