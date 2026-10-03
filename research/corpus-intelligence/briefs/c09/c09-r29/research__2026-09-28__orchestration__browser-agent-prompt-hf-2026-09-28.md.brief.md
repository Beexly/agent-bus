# research/2026-09-28/orchestration/browser-agent-prompt-hf-2026-09-28.md
## What it is (1-2 sentences)
An ops prompt (1KB) for a browser agent to set up Garrett's Hugging Face account: sign in, create the "Beexly" org, and report PRO/billing/ZeroGPU status back. Explicitly forbids creating repos, Spaces, or spending anything before reporting back.
## Key metrics/methods (formulas where given, else "not specified")
not specified
## Data sources named
- Hugging Face (huggingface.co) — Garrett's account (PRO, prepaid billing confirmed, RTX Pro 6000 ZeroGPU access)
- No Beexly org existed yet at time of writing
## Findings (numbers and facts, not vibes)
- Account target: PRO, prepaid billing, RTX Pro 6000 ZeroGPU access
- Gated model cards (TimesFM, Lag-Llama) require terms-acceptance clicks — designated as Garrett's taps, not agent actions
- Next step after org exists: Motif builds first private dataset repo + internal Qwen3 Space via API
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
OTHER — pure ops/infra setup note, no sports intelligence
## Engine-actionable? (yes/no + one-line what)
no — setup instructions only; nothing for the engine itself
