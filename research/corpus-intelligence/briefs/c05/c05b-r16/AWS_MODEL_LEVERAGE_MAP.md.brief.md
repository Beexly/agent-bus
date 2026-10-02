# docs/fable/aws/AWS_MODEL_LEVERAGE_MAP.md
## What it is (1-2 sentences)
Official AWS references checked 2026-07-03 (Bedrock models, Guardrails, AgentCore, SageMaker Model Monitor, SageMaker Clarify) with a 10-row decision matrix mapping model classes to workloads, contexts, risks, metrics, fallbacks, and verdicts — no model availability assumed for the owner account.
## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas. Named metrics per model class: rubric pass rate (reasoning audits), citation accuracy (long-context), precision on fixtures (cheap classification), recall@k (embeddings), nDCG (rerankers), label accuracy (multimodal), Brier/ECE/PSI (tabular calibration/drift), agreement with rubric (evaluator), banned-phrase recall (guardrail), alert precision (anomaly detection). Note: the file names metrics but does not define formulas.
## Data sources named
5 official AWS doc URLs: Bedrock model support, Bedrock Guardrails, Bedrock AgentCore, SageMaker Model Monitor, SageMaker Clarify. Region/account/pricing/quotas explicitly require current AWS verification.
## Findings (numbers and facts, not vibes)
- 10 model-class decisions: 2 decided "local now" (cheap classification → regex/Zod rules; guardrail/policy → local scanner), 1 decided "local now / local first" (tabular calibration/drift → prediction-engine + local drift stats with SageMaker only later), 1 "reject for now" (multimodal), 6 "spike later" (reasoning, long-context, embeddings, rerankers, evaluator, anomaly).
- Every row carries: workload, context size, latency tolerance, cost sensitivity, data sensitivity, headline risk (hallucination, source leakage, false allow, retrieval drift, hidden bias, rights leakage, overfit, judge drift, false negative, false alarm), a metric, a fallback, an AWS candidate, a non-AWS candidate, and a decision.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: tabular/time-series verdict is "local now" — calibration (Brier/ECE/PSI) stays in the engine's own prediction-engine + local drift stats rather than SageMaker; aligns with wire-first sequencing.
- OTHER: cheap classification verdict "use rules now" (deterministic rules over false-allowing models) — same pattern as the engine's rule-first triage before ML.
## Engine-actionable? (yes/no + one-line what)
yes — confirms the engine keeps calibration/drift local (Brier/ECE/PSI via prediction-engine) and uses deterministic rules for claim/source triage instead of model calls.
