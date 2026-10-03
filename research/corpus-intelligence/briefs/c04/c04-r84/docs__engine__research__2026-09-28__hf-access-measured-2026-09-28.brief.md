# docs/engine/research/2026-09-28/hf-access-measured-2026-09-28.md
## What it is (1-2 sentences)
Measured record (every line a command that ran) of the Hugging Face account state on 2026-09-28: two valid tokens, org reality vs assumption, hosted-inference hard limit, and proof that bge-m3 runs locally on CPU. Closes two of three standing HF blockers.

## Key metrics/methods (formulas where given, else "not specified")
- bge-m3 measured run (transformers 5.16.1, torch 2.13.3+cpu, tokenizers 0.23.1, numpy 2.4.6 — nothing installed, only weights downloaded): loaded in 186.7s (2.2GB first download); encoded 3 texts in 0.54s → shape (3, 1024); unit norm check [1. 1. 1.]; off-diagonal cosine min 0.6596, max 0.7130.
- Account: isPro true, billing prepaid, auto-renews Oct 1 (active since Sep 9); ZeroGPU 0/40 minutes used; private storage 0/1 TB, public 0/11.2 TB.
- POST router.huggingface.co/hf-inference .../feature-extraction → 403 "exceeded monthly spending limit for Inference Providers" on BOTH tokens.
- Model table: BAAI/bge-m3 (MIT, ungated, verified local); BAAI/bge-reranker-v2-m3 (Apache-2.0, 17.1M downloads, natural rerank stage); nvidia/parakeet-tdt-1.1b (CC-BY-4.0, ungated — earlier terms-acceptance concern void); amazon/chronos-t5-small (Apache-2.0, ungated); Qwen/Qwen3-Embedding-0.6B (Apache-2.0, ungated fallback if bge-m3 too slow).

## Data sources named
- Hugging Face hub API (whoami-v2, /api/organizations/GalaxySportsEdge/overview), router.huggingface.co hosted inference endpoint.
- Token sources noted: C:\Users\Garrett\jev-ultrafast\hf_env.txt (hf_RXsM..., write scope, orgs []) and Garrett-pasted token (hf_fxnD..., orgs ["GalaxySportsEdge"]). Token VALUES not recorded in repo — metadata only.

## Findings (numbers and facts, not vibes)
- Org already exists and is NOT Beexly: GalaxySportsEdge (fullname GSN, 1 user, public, anonymous GET 200), empty of models/spaces/datasets. "Beexly" handle still 404-available but creating it would duplicate; recommendation: use GalaxySportsEdge, rename is a founder call.
- Org creation has NO API: POST /api/organizations/create → 404; docs say use the New Organization form — a ~30s founder tap (no logged-in browser session via CDP 9222).
- Hosted inference 403 is the ACCOUNT, not token scope or model gating — no Inference Provider credit. This blocks all hosted-inference plans (ZeroGPU Spaces calling the router, Parakeet/Qwen3 via router) until credit is added; ZeroGPU Spaces run their own weights on a different billing line and may still work at 0/40 min (untested).
- The corpus-embedding lane needs CPU, not credit: 585 papers is a one-off index build, not a recurring bill — removes a founder blocker from the critical path.
- Projection-source lock still the gate for rankings; nothing gated needs terms acceptance.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: embedding/rerank pipeline unblocked on local CPU — direct enabler of the arXiv/NGS corpus intelligence lane; founder decisions remaining are org naming confirmation and inference-credit top-up.

## Engine-actionable? (yes/no + one-line what)
yes — build the corpus index now: bge-m3 → local embeddings → bge-reranker-v2-m3 rerank stage, no founder blocker (token value not stored; Garrett holds it).
