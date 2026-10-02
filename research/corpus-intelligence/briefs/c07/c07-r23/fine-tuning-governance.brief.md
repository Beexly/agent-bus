# models/fine-tuning-governance.md
## What it is (1-2 sentences)
Governance doctrine for any future fine-tuning of a pre-trained LLM on Sports OS sports-intelligence data; fine-tuning is explicitly NOT planned — none of the 7 prerequisites are satisfied.
## Key metrics/methods (formulas where given, else "not specified")
not specified — gate-based governance: fine-tuned model must score ≥ base model on (1) claim governance compliance, (2) hallucination resistance, (3) voice/tone consistency; hallucination-rate regression of any measurable amount = REJECT. Model version format: `base-model-name/ft-v[major].[minor]-[date]` (e.g. `claude-3-haiku/ft-v1.0-2026-06`).
## Data sources named
Evidence Vault (schema proposal only, T1/T2 evidence items); Model Journal + Galaxy Almanac (operator-authored, owned); settled pick records; The Odds API and Sportradar (T2, ML-training license must be checked — often separate commercial term); Tier 5 community data and Tier 6 AI-generated content forbidden for training.
## Findings (numbers and facts, not vibes)
- 7 prerequisites required before any fine-tuning: (1) populated Evidence Vault, (2) evaluation datasets (claim-governance compliance, citation accuracy, voice/tone, hallucination resistance), (3) base-model hallucination baseline, (4) public claim gates implemented (compliance scanner exists at `apps/web/lib/compliance-scanner/rules.ts`, must be verified active on all generation paths), (5) output traceability (model version, prompt hash, pre/post-scan output, eval scores), (6) ML-training licensing cleared for every data item, (7) owner approval.
- Permanent red lines: training higher confidence than evidence supports; certainty language ("guaranteed", "lock"); recommending betting amounts; training on leaked competitor data; user data without consent; impersonating sports personalities; suppressing losses in performance disclosure.
- Deployment requires operator review of sample outputs + owner approval; a failed fine-tune is never grounds to lower the benchmark.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: calibration-integrity rules (never train confidence above evidence) directly support the honest-forecast brand posture.
- OTHER: ML-training license check for The Odds API / Sportradar — a legal/ops gate, not sports content.
## Engine-actionable? (yes/no + one-line what)
yes — adopt the hallucination-baseline-before-training rule as an internal audit step for any future model work.
