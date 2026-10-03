# docs/ops/ORBIT_NEXT_50.md
## What it is (1-2 sentences)
A ranked wave-2/wave-3 adoption list of 50 external repos, each tagged adopt-pattern / dependency / skill-doc / ignore by category (eval, model, money, ops, code, inference, dist). A sourcing shortlist, not analysis.
## Key metrics/methods (formulas where given, else "not specified")
Not specified (no formulas; a ranked list with disposition and rationale notes). Model-relevant adopts: mberk/shin (Shin de-vig — pattern, "we have `shin-devig.ts`"), finite-sample/calibre (CenteredIsotonic — pattern, CIR in-repo), neeljshah/clvtrack (CLV benchmark — model), LeSingh1/edge-models (isotonic props — model), Adi7710/kalshiquant (settlement-tape calibration — model), mperi1208/value-bet-model (calibration paradox lessons — skill-doc), Reymes/football-match-prediction (honesty vs market — model), conorwalsh99/ml-for-sports-betting (calibration selection — model). Hard non-goals: Multica/GPL agent platforms, GPU foundation train, Polymarket without counsel, rewrite outbox/webhook; explicit ignores: vercel/ai (not full stack), Flipt-io/flipt (flags GPL).
## Data sources named
None (repo shortlist).
## Findings (numbers and facts, not vibes)
- Status notes embedded: promptfoo already wired (`eval:prompts`), agentskills SKILL.md standard in use, stanfordnlp/dspy pattern at `scripts/dspy-gse`, arturwojnar/hermes outbox pattern ("ours already solid"). [OTHER]
- Money-path patterns to mine: openstarterkit/nextjs-saas-starter-kit (Stripe), RexOwenDev/saas-billing-starter (webhook UNIQUE), PeteChu/idempotent-webhook-relay. [OTHER]
- Eval bench candidates: deepeval (pytest agent metrics), langchain agentevals (trajectory scorers), UKGovernmentBEIS/inspect_ai (formal evals), Arize phoenix (traces→datasets), boat-to/harbor (e2e agent eval). [OTHER]
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- All findings → OTHER (sourcing/adoption shortlist); the model rows (clvtrack, edge-models, kalshiquant, value-bet-model, ml-for-sports-betting) are SCHEME-adjacent candidates for calibration/Brier-evaluation research
## Engine-actionable? (yes/no + one-line what)
Yes — work the four model-tier patterns first (clvtrack CLV benchmark, edge-models isotonic props, kalshiquant settlement-tape calibration, mperi value-bet calibration paradox) as intake for the wire-first calibration lane.
