# docs/models/local-model-lane.md
## What it is (1-2 sentences)
Doctrine-only document (no implementation; owner decision required) defining when and how a locally-hosted AI model could be used in the Sports OS pipeline: content-generation layer only, never an evidence source or claim originator; all AI outputs are Tier 6 regardless of hosting.
## Key metrics/methods (formulas where given, else "not specified")
Evaluation gate: a local model failing >5% of claim-governance eval tests (min 20 claim-governance + 10 citation + 10 voice/tone tests) may not be used for public-facing content. No model selection made.
## Data sources named
Claude API (Anthropic) — current and only approved AI content generation method; model weights must come from official sources (e.g., Hugging Face org pages).
## Findings (numbers and facts, not vibes)
- Local models may NOT: generate pick recommendations without a structured evidence chain; produce confidence scores; claim insider info; generate injury claims; auto-publish; access external APIs during inference; bypass the claim-governance scanner; store/learn user data.
- Motivations (all future/Phase 4+): API cost scaling, sub-100ms latency for live surfaces, data sovereignty, offline resilience. No implementation imperative — Claude API satisfies all current needs.
- 8 activation gates (owner approval required first): license verified, security scan, eval suite <5% failure, claim-governance integration, operator review pipeline, infra cost model, rollback plan.
- Codex audit requires: no inference endpoint in `apps/web/app/api/`; no `.bin`/`.safetensors`/`.gguf`/`.onnx` weights in repo; all AI content routes through Claude API exclusively; no route generates picks from model memory.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The Tier-6-for-all-AI rule and confidence-scanner pipeline constrain how any engine surface renders publicly: TRUST-SIGNAL; arch-relevant: OTHER (infra doctrine).
## Engine-actionable? (yes/no + one-line what)
No — doctrine only with no implementation; no engine wiring until owner approves evaluation.
