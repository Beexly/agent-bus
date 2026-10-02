# docs/ops/cost-github-hf.md
## What it is (1-2 sentences)
A read-only 2026-09-29 cost audit of GitHub Actions and Hugging Face for the public `Beexly/Sports` repo: Actions spend is structurally $0 (public repo + standard runners only), the single recurring cash line is the $9/month HF PRO subscription, and the audit found a standing 77.2%-failing watchdog, a write-capable HF token, and two stale docs.

## Key metrics/methods (formulas where given, else "not specified")
- GitHub Actions: ~19,100 job-min/30d (~638 job-min/day), $0.00 billable. All 8 live workflows on `ubuntu-latest` 1× multiplier; zero macos/windows/larger/self-hosted runners.
- Workflow failure rates: CI 55.8% failure + 19.8% cancelled (superseded-by-newer-commit, working as intended; do NOT add cancel-in-progress — a documented race exists); External Watchdog 77.2% failure for 41 days (30/30 tail runs red, unreachable DB); Daily Smoke 59.1% failure (49 of last 60 red, content/state regression not uptime); FABLE Evidence 5.5%; External Cron 19.8%. 6.00 jobs per CI run, mean 10.3 job-min per CI run; CI median 4.9 min, p95 19.1, max 36.1.
- HF: PRO $9/month ($108/yr), renews 2026-10-01, prepaid. Free accounts still host up to 2 ZeroGPU Spaces (repo has 1); ZeroGPU quota drops 40→5 min/day on Free. ZeroGPU overage: $1 per 10 GPU-min prepaid. `cpu-basic` hardware free; 2 always-on cpu-basic Spaces cost $0.00/hr.
- HF Spaces: 9 total, 8 of 9 unreferenced in repo; only `timesfm3-benchmark` load-bearing (ran preregistered TimesFM benchmark: median MAE 0.2433 vs naive 0.7505, ratio 0.324 ≤ 0.80, verdict MET; cited AGENTS.md:4064,4071); 2 in RUNTIME_ERROR; total Space repo storage 0.33 MB. Local `~/.cache/huggingface/` = 5.78 GB (bge-m3 4,564 MB across 2 revisions; superseded revision `9a0624b8` ~2,271 MB dead weight). Artifacts: 1,868 objects, 1.4 MB total.
- HF token `cil`: fine-grained, write-capable including `repo.write`, `inference.endpoints.write`, `user.billing.read`, `user.webhooks.write`; cancelling PRO does NOT revoke it. Two documented claims now false: `hf-nfl-evaluation-tested.md` §5 (torch 2.13.0 + transformers 5.16.1 ARE installed; live token present — the "BLOCKED on a founder token" blocker no longer holds; bge-m3 weights downloaded → local CPU embedding testable now, no spend); AGENTS.md:4071 cites `gse-ml-service/app/models/timesfm_benchmark.py` which is ABSENT from `app/models/`.
- Recommended actions ordered by dollar impact: (1) downgrade HF PRO→Free before 2026-10-01 ($108/yr saved); (2) confirm HF credit balance in billing UI (API 401/404); (3) rotate token to read-only; (4–5) correct the two stale docs; (6) restore the odds-line snapshot the watchdog polls, meanwhile reduce `*/30`→hourly (1,440→720 runs/30d); (7) identify Daily Smoke regression; (8) delete 7 unreferenced Spaces; (9) reclaim ~2.3 GB stale bge-m3 revision locally; (10) do NOT chase Actions "savings."

## Data sources named
`gh api` against GitHub Actions/Spaces REST APIs (workflow files on `main`: ci, external-cron, external-watchdog, daily-smoke, fable-evidence, neon_workflow, nova-convergence-inventory, python-tests, weekly-comparison); live HF Hub API with token at `~/.cache/huggingface/token` (`/api/whoami-v2`, `/api/spaces/Beexly/studio-chat`); GitHub Actions billing docs + 2026 pricing-change announcement; HF Spaces hardware docs + ZeroGPU docs + pricing page; `pip list` (torch 2.13.0, transformers 5.16.1); stale docs `docs/fantasy/research/2026-09-28/hf-nfl-evaluation-tested.md` §5 and `AGENTS.md:4064,4071`.

## Findings (numbers and facts, not vibes)
- GitHub Actions cost is $0.00 today and will remain so under public-repo + standard-runner structure; the "cut CI minutes" playbook does not apply. Billed-even-on-public runner categories (larger, macOS, Windows) are absent.
- External Watchdog's 77.2% standing failure is a missing-data problem (no odds line snapshot ever recorded), not a monitor problem: do not disable the guardrail; restore the snapshot path, and meanwhile halve cadence to hourly.
- CI's 55.8% failure rate coexists with a documented concurrency design decision: the 19.8% cancelled runs are superseded-by-newer-commit; adding generic cancel-in-progress would re-introduce a known orphaned-job race.
- The HF PRO subscription's value is mostly unused here: 8× ZeroGPU quota unused (only 1 ZeroGPU Space), $2/mo inference credits unused (0 Inference Endpoints), 1 TB private storage unused (0 private repos), no private datasets.
- Token `cil` is over-scoped for the documented HF work (read public model cards/datasets): has write, billing, and webhook scopes; needs rotation to read-only.
- Local inference is unblocked: torch + transformers installed, bge-m3 weights already on disk, live token authenticates as Beexly — CPU embedding is testable now with zero spend.
- 9 of 19 registered Actions workflows no longer exist on `main` (404 on contents API); inert, cosmetic noise only.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TimesFM benchmark result preserved and cited (MAE 0.2433 vs naive 0.7505, ratio 0.324 ≤ 0.80, MET): TRUST-SIGNAL — a preregistered, graded model benchmark in the corpus; validates the time-series forecasting evidence lane
- Local CPU embedding unblocked (bge-m3 weights on disk + torch installed): SCHEME — the embedding/RAG substrate for the research corpus becomes testable at zero cost
- Watchdog guardrail philosophy (absence of data = outage, not calm; never disable the guardrail, fix the data): OTHER — INFERENCE: this monitoring posture (missing signal treated as outage) is the same doctrine the engine's data-ingest health checks should follow
- CLV/CLV-beat references absent here: none
- Everything else (CI rates, token scope, artifact counts): OTHER — cost/security ops

## Engine-actionable? (yes/no + one-line what)
Yes — local bge-m3 embedding is testable now at zero spend (torch 2.13.0 + transformers 5.16.1 installed, weights on disk), unblocking the corpus-embedding/RAG lane; and the TimesFM benchmark result (ratio 0.324, MET) confirms the time-series benchmark stands.
