# docs/engine/research/2026-09-28/gcp-final-bow-plan.md
## What it is (1-2 sentences)
Garrett's HARD-sequenced plan to use the $300/90-day Google Cloud trial credit as the FINAL cloud finishing run on the completed, calibrated, weighted engine — queued behind all foundation work, trial not yet claimed.
## Key metrics/methods (formulas where given, else "not specified")
- Offer recap: $300/90-day trial (card on file for verification only; account pauses when credit/time runs out — no surprise billing). Always-free tier: 1 e2-micro VM, 5 GB storage, 2M Cloud Run requests/mo, 1 TB BigQuery queries/mo, 120 min/day Cloud Build, Firestore daily limits.
- Spend order at the end: (1) full-scale backtests on L4 GPUs (~$0.20/hr spot L4 ≈ 1,500 GPU-hours on $300); (2) production hosting beyond free tier; (3) final end-to-end validation runs; (4) optional Vertex AI (Gemini).
- GPU trap: trial accounts get zero GPU quota — must Billing → Activate/Upgrade (keeps $300), then quota request; new paid accounts can be denied initially; quota ≠ capacity.
- Prerequisites: engine wired, weights locked/calibrated, backtests green on landed build, Garrett claims trial + approves billing upgrade.
## Data sources named
Researched 2026-09-28; full detail in Beexly/autonomous-revenue-engine docs/research/2026-09-28/google-cloud-free-tier-plan.md.
## Findings (numbers and facts, not vibes)
- [OTHER] Spending the trial early means redoing work on a changed system — credit's max value is the finishing run on the final build ("bow on top").
- [OTHER] 1,500 spot-L4 GPU-hours available for ~$0.20/hr for the full historical burn-in (all seasons/slates) to validate final weights.
- [TRUST-SIGNAL] Do not claim trial while foundation work is in progress (starts a 90-day clock); no idling GPU VMs; don't spend credit on anything the always-free tier covers.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
Tagged inline above.
## Engine-actionable? (yes/no + one-line what)
No — this is a queued funding/sequencing plan, not an engine input; action is only "claim trial after prerequisites met."
