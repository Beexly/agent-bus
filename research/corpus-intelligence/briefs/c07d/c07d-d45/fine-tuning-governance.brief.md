# models/fine-tuning-governance.md
## What it is (1-2 sentences)
The governance doctrine that gates any fine-tuning of a pre-trained language model for Sports OS (prediction content generation, Brain answer system, local-model specialization). Status is doctrine only: no fine-tuning is planned and none of the 7 prerequisites are satisfied.

## Key metrics/methods (formulas where given, else "not specified")
- No formulas given. Deployment acceptance criteria are relative benchmarks, not absolute numbers: fine-tuned model must score **≥ base model** on claim-governance compliance, hallucination resistance, and voice/tone consistency (eval gate conditions 2–4 of Section 5). Any measurable increase in hallucination rate post-fine-tuning → the fine-tune is REJECTED.
- Fine-tuned model version format: `base-model-name/ft-v[major].[minor]-[date]`, example `claude-3-haiku/ft-v1.0-2026-06`.
- 7 prerequisites, all gated: (1) Evidence Vault populated with real T1/T2 evidence used in real picks; (2) 4 eval datasets exist (claim governance compliance, evidence citation accuracy, voice/tone consistency, hallucination resistance); (3) base-model hallucination baseline measured and not worsened; (4) public claim gates / compliance scanner active on all generation paths; (5) output traceability (model version, input prompt/hash, output before+after scan, eval scores); (6) training-data licensing cleared for ML training (distinct from display licenses; owner + legal review); (7) owner approval.
- Training-data permission table: YES for Model Journal entries, Galaxy Almanac essays, settled pick records (all Sports OS-owned/internal); NO for user Brain query inputs and responses (without consent), Tier 5 community data, Tier 6 AI-generated content, scraped unlicensed content, leaked competitor prompts/data (permanently forbidden); conditional for T1 official and T2 licensed data pending per-program ML-training license checks.

## Data sources named
- T1 official league data; T2 licensed data (The Odds API, Sportradar); operator-authored Model Journal entries and Galaxy Almanac essays; settled pick records; user Brain query inputs/responses; Tier 5 community data; Tier 6 AI-generated content.
- Referenced by name: `docs/intelligence/SPORTS_OS_INTELLIGENCE_NETWORK_MASTER_PLAN.md` (parent), `docs/models/local-model-lane.md`, `docs/models/answer-eval-benchmark-lab.md`, `docs/brain/source-hierarchy.md`, `docs/audit/final-wave-source-risk-register.md`, `docs/brain/calibration-feedback-loop.md`, `apps/web/lib/compliance-scanner/rules.ts` (compliance scanner).
- Source attribution: Prompt 4 — Final Wave.

## Findings (numbers and facts, not vibes)
- **Status: doctrine only. No fine-tuning until all prerequisites are satisfied. Fine-tuning is not currently planned.**
- Training on fabricated or low-tier data would encode Tier 5/6 reasoning patterns into the model — the explicit rationale for requiring the Evidence Vault.
- Seven permanent red lines: (1) training a model to express higher confidence than evidence supports; (2) training it to use certainty language ("guaranteed", "lock"); (3) training it to recommend betting amounts; (4) training on leaked competitor data/prompts; (5) training on user data without consent; (6) impersonating a specific sports personality; (7) training to suppress/minimize losses in performance disclosure.
- Claim-governance rule: every fine-tuned output must pass the claim governance scanner; the scanner at `apps/web/lib/compliance-scanner/rules.ts` "exists" but "must be verified as active on all content generation paths before fine-tuning begins."
- Traceability requirement: model version identifier, input prompt (or hash), output before and after claim governance scan, applicable evaluation set scores.
- Approval gates: prerequisites assessment → Operator; compute allocation → Owner; external provider data for training → Owner + legal; deployment → Owner after benchmark pass; deployment for pick content generation → Owner + operator review of sample outputs.
- Deployment checklist has 6 conditions; failing any of the ≥-base-model benchmarks (conditions 1–4) → REJECTED, and "a failed fine-tune is not a reason to lower the benchmark."
- Codex audit requirements: (1) confirm no fine-tuning script/training pipeline/model-training library installed or configured; (2) confirm no user data logged in training-suitable format without documented privacy policy + consent; (3) confirm the claim governance scanner is the active gate on all content generation paths; (4) report any training data pipeline as P1 until all prerequisites are documented.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Serves the engine's content-pipeline governance program, not a prediction lane: it codifies that any model generating pick content or Brain answers must first be benchmarked on claim governance (no "guaranteed"/"lock", no betting-amount recommendations) and hallucination resistance — directly supporting the trust-target intake by preventing model outputs that erode follower trust through overclaim or fabricated facts.
- [OTHER] The permanent ban on "training a model to express higher confidence than evidence supports" is the calibration program's hardest constraint: it makes confidence inflation a governance violation rather than a tuning decision, which interacts with the WIRE-FIRST sequencing by requiring that calibration judgment only happens after the engine is fully wired.
- [OTHER] The T1/T2 source-hierarchy requirement for training data (never Tier 5/6, never AI-generated content) mirrors the research-standard doctrine — consensus from real outlets, not fabricated patterns — and means any future fine-tune dataset must be built from real, settled, T1/T2 evidence items in the Evidence Vault.

## Engine-actionable? (yes/no + one-line what)
No — doctrine only with zero satisfied prerequisites; actionable only as audit criteria (Codex items 1–4) for anyone touching the content-generation path.
