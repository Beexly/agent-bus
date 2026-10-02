# docs/intelligence/NEXT_LEVEL_BUILD_SPEC.md

## What it is (1-2 sentences)
Executable build handoff (author Fable 5, 2026-08-12) specifying six tasks for the next-level intelligence build: a model-advisor dev tool, a router legibility card, an eval prompt harness, and three proposal-gated future phases (local inference lane, calibration/regression loop, ambition engine). Tasks 1–3 are marked done/verified; tasks 4–6 require owner-approved change proposals before any code.

## Key metrics/methods (formulas where given, else "not specified")
- Recommender rule ordering for model routing: privacy=local-only → local tier (Muse Glimmer for multimodal else Qwen3-Coder-30B, or Qwen2.5-Coder-7B if complexity ≤ 2); kind=bulk → batch tier with −50% Batch API note; multimodal → Muse Glimmer unless complexity ≥ 9; contextTokens > 200,000 or kind=long-context → frontier tier; else complexity ≤3 local / 4..6 openrouter / 7..8 openrouter-or-frontier / 9..10 frontier.
- Calibration/regression loop (Task 5): scheduled weekly shadow-vs-live regression on settled outcomes; promotions gated by `docs/frontier/MODEL_PROMOTION_GATE_CONTRACT.md`.
- Guardrails: commit gate runs `npm run typecheck`, `npm run lint`, vitest on the tool dir, `npm run guard:performance-claims`, `npm run guard:commercial-copy`.
- model-advisor verification: strict tsc clean, 15/15 Vitest tests green, CLI smoke-tested; recommender test set includes 6 behavioral cases plus a data-integrity property (no unverified models ever returned).
- No sports-prediction math or formulas specified.

## Data sources named
- `docs/reference/MODEL_LANDSCAPE.md` §A/§B (verified/known-real model rows feed the catalog; §C unverified rows excluded).
- `apps/web/lib/claude-api/budget-store.ts` + event ledger (inputs to the router legibility card); `SURFACE_TIER` in `model-router.ts`.
- Existing weekly shadow-vs-live workflow (base for Task 5); `apps/web/lib/autonomy/operating-kernel.ts` (base for Task 6).
- DeepSeek handbook corpus explicitly judged: Ultimate Handbook fabricated (reference only, not merged); Evolution/Ambition/Regression/Semantic Cache `.ts` imports nonexistent modules (`./meta-rl`, `./registry`, JS `transformers`); `*.rego` guardrails logically broken (`default allow = true`); `*_install.sh` dangerous/do-not-run (contains `curl|bash ruflo`).

## Findings (numbers and facts, not vibes)
- Execution status: Task 1 (model-advisor) implemented and verified this session at `tools/model-advisor/`; Task 2 committed `41801e6b9` (`apps/web/app/cockpit/api-costs/routing-legibility.tsx`); Task 3 committed `de4288d9b` (`eval/promptfoo/`); Tasks 4–6 not started, proposal-gated.
- Branch: `claude/fable-5-ultracode-plan-ptru4e`; draft PR only.
- Hard build bans: no `npm install` of anything from the DeepSeek handbook (404s/typosquats/name-collisions); no new dependencies without an approved change proposal; never fabricate data, picks, odds, benchmarks, or pricing — mark unverified as unverified.
- The AI Control Plane is sealed: no activating the dormant provider registry (`apps/web/lib/ai-control-plane/provider-ledger.ts`), no schema changes without an ADR + owner approval.
- Local models in catalog: Muse Glimmer 30B, Qwen3-Coder-30B-A3B, Qwen2.5-Coder-32B/7B, DeepSeek-Coder-V2, GLM-5.2 (flagged "large — API/OpenRouter unless high VRAM"). Frontier: Claude Fable 5 / Opus 5 / Sonnet 5 / Haiku 4.5, priced via reported $/M, `verification: "known-real"`.
- README usage examples with real output required in the Definition of Done; README may list unverified §C models only as "verify first".

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Task 5's weekly shadow-vs-live regression on settled outcomes with promotions gated by the model-promotion-gate contract — the mechanism by which engine trust claims (calibration, PROVEN gates) are produced.
- [TRUST-SIGNAL] "Never fabricate data, picks, odds, benchmarks, or pricing. Mark unverified as unverified" — enforced honest-reporting doctrine aligning with the banned-phrase / trust-claims regime.
- [OTHER] Deterministic rules-based routing logic (model-advisor) as a pattern for legible, auditable tiering — applicable in spirit to any rules engine, but not itself football intelligence.
- [OTHER] DeepSeek corpus disposition is a data-quality precedent: fabricated packages rejected from builds; good ideas re-implemented on real primitives.

## Engine-actionable? (yes/no + one-line what)
No — dev-infrastructure/tooling spec (model routing, eval harnesses, governance gates); the Task 5 regression loop is already recorded as the mechanism, not a new football signal.
