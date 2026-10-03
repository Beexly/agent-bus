# docs/ops/archive/root-museum/WORLD_CLASS_REDESIGN_PLAN.md
## What it is (1-2 sentences)
A 2026-07-23 plan and session log for a "world-class" redesign of galaxysportsedge.com that reframed the work as finishing the site's existing design-token system everywhere: two sessions eliminated raw casino-color Tailwind classes across customer-facing and cockpit/admin surfaces, extended `palette-cohesion.test.ts`, and handed off remaining tasks (new on-light tokens, sport-vertical art plates, P3 audit items).

## Key metrics/methods (formulas where given, else "not specified")
not specified. Quantities: session 1 fixed 9 customer-facing files off raw hue classes; session 2 swept the full 51-file `cockpit/`+`admin/` surface and found real misses in already-"finished" files (a second Elite-upsell block with raw `blue-*` in `app/picks/page.tsx`, raw `cyan-*` accents in 4 more files). AA-contrast requirement governs the light/paper surface token decisions.

## Data sources named
Prior director-level design audit `BRAND_AND_DESIGN_SYSTEM.md` (2026-06-01); design system in `apps/web/styles/design-tokens.css` + `tailwind.config.ts` + `DESIGN.md` + `design-system/README.md`; generated art plates in `apps/web/public/immersive/`; Higgsfield (Soul Cinema, 2048×1152 16:9 stills; kling3_0_turbo motion) job IDs for nflverse-gridiron (`895d7eaf-6e5d-4b2b-927d-4f5eb2edbe12`), nhl-icefield (`d2e23623-25a2-476c-9f61-38035b4b9d24`), mlb-diamond (`b57c8530-eb7f-4274-995a-6a0e5e8346a0`), fantasy-constellation (`f6ad9d93-95e9-4d21-8bcc-d9282de709ba`, motion done: `33cf956e-eb5e-44c6-982b-903471038fed` 5s 720p); asset manifest `apps/web/lib/visual-production/asset-manifest.ts`; brand-voice banned-word list `lib/brand.ts:225-233`.

## Findings (numbers and facts, not vibes)
- Brand concept: "cosmic intelligence terminal" (Bloomberg Terminal / F1 telemetry / NASA Mission Control reference set), three-tier design-token system (primitives → semantic aliases → legacy repointed aliases), six type families, 4px spacing grid, full reduced-motion support.
- Every customer-facing `app/**` and `components/**` file (excl. cockpit/admin) was verified free of raw casino-color Tailwind classes via a grep regex; the 51-file cockpit/admin sweep was completed in session 2; `palette-cohesion.test.ts` extended to scan the full casino-hue list with an explicit commented ALLOWLIST so it cannot silently regress.
- Explicitly deferred items: `verify-on-light`/`alert-on-light`/`caution-on-light` tokens needed for AA contrast on `--paper` (~18 allowlisted spots across 3 files); the API-costs budget-ladder's `orange` tier (a genuine 5th escalation tier between caution and alert) needs a product decision; Google-signin button stays white (Google brand requirement); TWITTER/DISCORD badges stay platform brand colors.
- Higgsfield art handoff (5-minute task, blocked only on sandbox network policy): 4 sport-vertical stills generated, only the fantasy-constellation motion clip completed (5s, 720p, subtle ambient drift, silent loop); MLB still never generated (hit `grace_daily_limit_reached`); NFL/NHL motion clips attempted, unconfirmed server-side.
- Hard non-touch list: `loadBoardState`, `loadPublicCalibrationReport`, entitlement/feature-gate logic (`lib/pricing/feature-gates.ts`), and anything computing a confidence score, win rate, or CLV number — visual/layout changes only.
- Guardrail: any AI-written copy must stay inside `CLAUDE.md`'s non-negotiables — no fabricated stats, no invented win rates or testimonials; numbers come from `loadPublicCalibrationReport()` / real data, never from the model.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- "Never touch what data is fetched, how it's computed, or how paywalls gate" non-touch list (confidence scores, win rates, CLV): TRUST-SIGNAL — separation of presentation from computation as a governance rule
- Numbers come from `loadPublicCalibrationReport()`/real data, never from the model; no fabricated stats/win rates/testimonials: TRUST-SIGNAL — the honesty constraint on public calibration reporting
- GSN vs GSE naming resolved: GSN_* is the distinct newsletter/content arm brand, `BRAND_NAME = "Galaxy Sports Edge"`: OTHER (brand governance)
- Everything else in this file: OTHER — visual design system work

## Engine-actionable? (yes/no + one-line what)
No — a UI/design-system session log; no model inputs or methods, only governance guardrails already known elsewhere.
