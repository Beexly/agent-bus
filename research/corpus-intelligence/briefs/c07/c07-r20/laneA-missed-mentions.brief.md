# engine/research/2026-09-28/hf-leverage-round2/laneA-missed-mentions.md
## What it is (1-2 sentences)
An org-wide audit (2026-09-28, Motif subagent lane A) of Hugging Face mentions in Beexly/agent-bus and Beexly/autonomous-revenue-engine via the GitHub code search API, answering whether HF/Gradio/ZeroGPU usage exists outside Sports — verdict: zero wired HF in any executable code anywhere; all mentions are specs, handoffs, and research notes (designed, not built).
## Key metrics/methods (formulas where given, else "not specified")
Method: GitHub `/search/code` over terms `huggingface`, `gradio`, `zerogpu`, `"zero gpu"`, `hugging_face`, `from_pretrained`, `huggingface_hub`, `gradio_client`, `transformers`, `diffusers`, `flux`; hit files pulled via Contents API, context grepped, commit dates verified via `/commits?path=<file>&per_page=1`. Verdicts per mention: WIRED / PLANNED / MENTION. No formulas.
## Data sources named
GitHub code search index (agent-bus index commit `8f18152a0c590867436750ae5b9a4c533da70414`), Contents API, commits API. Referenced corpora: HuggingFace datasets (NFL play-by-play/charting/DVOA search task, 2026-09-18), The Well (CC BY 4.0 via HF API — no transfer value found), TRELLIS.2-4B (Microsoft, MIT), Hunyuan3D 2.1, Pixal3D, HunyuanWorld-Mirror, HY-World 2.0, 3D Model Zoo; ZeroGPU on HuggingFace Spaces (plan-of-record serverless GPU, RTX Pro 6000, free ~5 min/day caller quota).
## Findings (numbers and facts, not vibes)
- 10 mentions found across the two repos; 0 are WIRED — no `from_pretrained`, `huggingface_hub`, `gradio_client`, `transformers`, or `diffusers` imports anywhere.
- Revenue-engine imaging lane runs on commercial APIs (Seedream 4.5, GPT Image, FLUX.2 Pro, Kling O1 Image, Nano Banana) — zero HF footprint.
- Agent-bus holds the org's paper trail of HF intent: HF-datasets scouting task (2026-09-18); HF zero-shot jersey-color classifier cited in a third-party video assessment (2026-09-25); E1 movement-model spec's ZeroGPU training/inference design (2026-09-26, `POST /predict/movement` behind a ZeroGPU Space, designed for interruption, batch sizes fit shared-GPU memory, CPU overnight fallback); HF 3D-generation pipeline as Kit-store design reference (2026-09-12).
- Two search queries hit the search rate limit (403) and were retried cleanly after cooldown.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The detect→track→assign architecture (zero-shot jersey-color classification) assessed as LEARN for GSE tracking-data-from-broadcast-footage work — TRUST-SIGNAL.
- E1 movement-model ZeroGPU serverless-GPU plan-of-record converged independently in two lanes — OTHER (infra).
- No QB-BEHAVIOR, COACHING, OL, or SCHEME content.
## Engine-actionable? (yes/no + one-line what)
No — intake-only audit confirming zero hidden HF dependencies; records ZeroGPU Spaces as the org's plan-of-record GPU path should movement-model training/inference be built later.
