# ops/evals/studio-betting-education-thin-evidence.md

## What it is (1-2 sentences)
An evaluation spec (`surface: galaxy-studio`, `template: BETTING_EDUCATION`, `scenario: thin-evidence-refusal`, created 2026-05-22 by claude, status `pending-runner`) defining the required refusal behavior when the Studio operator tries to generate a betting-education asset for a game with no model score and near-no evidence (TOR @ BOS, MLB).

## Key metrics/methods (formulas where given, else "not specified")
Not specified (no formulas). Exact gate conditions and refusal values:
- Thin-evidence input state: Edge Index **null** (engine has not scored); evidence health **D** (only **2** books reporting, no canonical signals); **bootstrapShare 1.0**; **0** `PickSignalSnapshot` rows; no published pick.
- Detection rule: `build-assets.ts` checks `evidenceHealth.overall` and `pickSignalSnapshots.length` **before** calling the Claude API.
- Refusal `CreatorAsset`: `assetKind: 'BETTING_EDUCATION'`; `body: "Evidence is thin — no asset generated. The model has not scored this game yet. Check back closer to game time."` (exact match required, or a documented equivalent from `apps/web/lib/studio/refusals.ts`); `citations: []`; `publicReady: false`; `complianceScan: { status: 'green' }`.

## Data sources named
- `build-assets.ts` (Studio asset builder); `apps/web/lib/studio/refusals.ts` (refusal-copy constants, if extracted); the Claude API (explicitly **not** to be called in this path); test-mock records of `claudeApi.complete()`.

## Findings (numbers and facts, not vibes)
- The refusal must happen BEFORE the Claude API call — cost-saving plus the refusal-is-explicit principle; no `claudeApi.complete()` (or equivalent) recorded in mocks.
- UI must show the refusal prominently, NOT as an error toast.
- Forbidden: hedged-but-published assets ("We don't have much data on this one, but here's what we'd say..."); `publicReady: true` on a refusal; the refusal recommending the operator "try another template" — refusal is final per template-game pair.
- Pass criteria (7): refusal CreatorAsset returned without invoking Claude API; body exactly matches refusal copy (or documented `refusals.ts` equivalent); `publicReady === false`; `citations.length === 0`; complianceScan green; no API call in mocks; UI test confirms prominent refusal rendering.
- Eval status is `pending-runner` — spec only, no observed run result.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL — trust-target intake and calibration/sizing.** This eval is the pre-publication evidence gate: content surfaces may not generate assets when the engine has no score and evidence health is D (2 books, no canonical signals, bootstrapShare 1.0). The "no hedged-but-published asset" rule and the refusal-final-per-template-game-pair rule are publication-safety doctrine that transfers directly to the **trust-target intake** program: any public-facing generation surface (blog, Studio, social) must check evidence health before model invocation, not after. The D-grade/2-book/zero-snapshot threshold cluster is a concrete thin-evidence definition the **calibration/sizing** program can reuse — UNCERTAIN whether bootstrapShare 1.0 means fully-bootstrap (i.e., the "bootstrap state" label) versus a blend weight; flagged as an uncertain parameter, not confirmed.
- No QB-BEHAVIOR, COACHING, OL, or SCHEME content in this file.

## Engine-actionable? (yes/no + one-line what)
Yes — thin-evidence gate definition (evidence health D / ~2 books / zero signal snapshots / null model score → refuse before model call) as a reusable pre-publication rule; exact refusal copy is a string constant to reuse verbatim.

Referenced files/papers/datasets: `build-assets.ts`; `apps/web/lib/studio/refusals.ts`; CreatorAsset (`assetKind`, `body`, `citations`, `publicReady`, `complianceScan`); `claudeApi.complete()` mock surface.
