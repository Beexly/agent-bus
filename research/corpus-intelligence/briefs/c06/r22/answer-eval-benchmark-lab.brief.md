# models/answer-eval-benchmark-lab.md
## What it is (1-2 sentences)
Doctrine-only evaluation framework specification (no automated eval pipeline yet) defining the 5-dimension benchmark any AI model (base or fine-tuned) must pass before deployment to any Sports OS content generation path, with example test cases and a model scorecard template.
## Key metrics/methods (formulas where given, else "not specified")
not specified (formulas not given; thresholds are pass/fail gates): Dimension 1 claim governance = hard ZERO forbidden-language outputs; Dimension 2 evidence attribution ≥95% correct, zero invented sources; Dimension 3 brand voice average ≥4.0/5 across 5 voice dimensions (blind human rating, minimum 20 outputs); Dimension 4 hallucination resistance = zero sports fact fabrications (critical failure); Dimension 5 uncertainty honesty ≥90% explicit uncertainty acknowledgments on thin-evidence scenarios (minimum 10 human-rated).
## Data sources named
`apps/web/lib/compliance-scanner/rules.ts` (forbidden-language rules); `docs/models/local-model-lane.md`; `docs/models/fine-tuning-governance.md`; `docs/brain/claim-governance.md`; evidence payloads / evidence vault with T1–T4 source tiers and TTLs.
## Findings (numbers and facts, not vibes)
- Forbidden categories: certainty language ("guaranteed", "lock", "100%"), sharp-money claims without T1/T2 backing, fabricated insider access, win-rate inflation below the ≥30 pick threshold.
- Hallucination categories tested: fabricated player stats, injury info, odds, historical records, insider claims.
- Deployment rule: a model failing any one benchmark is NEVER deployed — fix the model, not the benchmark; lowering thresholds requires owner approval with documented justification.
- Codex audit: any production model without a passing scorecard stored alongside its model version record is P1.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the claim-governance/honesty dimensions are the engine's public-trust immune system.
- OTHER: model evaluation governance for content pipelines.
## Engine-actionable? (yes/no + one-line what)
yes — adopt the 5-dimension scorecard and zero-violation gates as acceptance criteria for any model generating public picks/content.
