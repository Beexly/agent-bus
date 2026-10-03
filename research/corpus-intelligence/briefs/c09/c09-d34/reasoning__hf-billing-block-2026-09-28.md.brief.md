# reasoning/hf-billing-block-2026-09-28.md
## What it is (1-2 sentences)
Root-cause diagnosis of Hugging Face hosted inference failures for the GSE account: not a billing-charge dispute but an exhausted monthly Inference Providers spending limit, with a remediation plan and a drafted support email for the residual questions.
## Key metrics/methods (formulas where given, else "not specified")
not specified (no formulas; diagnostic table of endpoint probes with HTTP outcomes)
## Data sources named
Hugging Face account `Beexly` (type user, isPro true, billingMode prepaid); endpoints probed: /api/whoami-v2, router.huggingface.co/hf-inference/models/BAAI/bge-m3, legacy api-inference.huggingface.co; billing probes /api/billing/overview and /v1/credits (both 404).
## Findings (numbers and facts, not vibes)
- HF tokens are 37 chars; the founder's paste was 74 chars (duplicated with a dropped char); raw and de-duped pastes both 401 "Invalid username or password," correct 37-char form returns 200.
- Hosted bge-m3: GET 200 "Ok" (alive), POST 403 "You have exceeded your monthly spending limit for Inference Providers."
- Dashboard $0.00 / 0 TB / 0-of-40 ZeroGPU minutes / 6-of-2,500 Hub API calls is the storage/compute meter, not the Inference Providers budget — a ceiling, not a charge.
- Dollar cap, reset date, per-user vs per-org scope are NOT established (no readable balance API).
- Impact: none on production — local bge-m3 is the documented embedding path; action is to unwire any remaining hosted calls or fund them deliberately, and alert specifically on the 403 (the legacy hostname retirement is a separate permanent failure).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — infra/ops intelligence: a spending ceiling masquerades as a billing bug; monitor the 403, keep the local-embedding path, remove exhausted paid endpoints on a monthly cadence.
## Engine-actionable? (yes/no + one-line what)
Yes — grep the codebase for any remaining hosted bge-m3 / HF inference-router calls and remove or fund them; wire a 403-specific alert.
