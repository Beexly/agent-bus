# docs/cockpit-spec.md

## What it is (1-2 sentences)
A Phase 4 UX/storyboard spec for a public-facing "Mission Control" decision cockpit on the Galaxy Sports Edge site: every published pick (and every "no pick") is rendered as a five-frame decision path — Board → Context → Signals → Gate → Verdict — making the engine's reasoning transparent to users.

## Key metrics/methods (formulas where given, else "not specified")
- **Five frames**: [1. Board] → [2. Context] → [3. Signals] → [4. Gate] → [5. Verdict]. Fixed semantic roles per frame; structure does not change per pick.
- **Gate list (6 gates, pass/fail/skip)**: (1) Data freshness — all required factors `freshnessSec < threshold`; (2) Sample size — all used factors `sampleSize ≥ minSampleSize`; (3) Brand safety — linter pass per `docs/brand-safety-rules-v2.md`; (4) Confidence threshold — `marketDerivedEdge ≥ 50`; (5) Activation status — all used factors `activated`; (6) Public policy — `evaluatePublicPerformancePolicy() === 'PUBLISHABLE'`.
- **Factor tile states**: `activated` (full opacity, ion-blue border), `activated-zero` (live but contributed 0), `shadow` (40% opacity, dotted border, "shadow" label), `stale` (40% opacity, alert border, "monitoring"), `unavailable` (hidden).
- **Confidence**: confidence number rendered is the v1 `marketDerivedEdge` until `trueEV` is activated (BS-022).
- **Tier gating**: FREE sees factor names only in Signals (contribution magnitudes redacted, server-side redaction from `/api/picks/daily-slate`), one pick/day with confidence hidden; PRO sees all picks + confidence; ELITE adds line movement + early-access.
- **Verdict states (3)**: PUBLISHED, HELD, NO PICK — reasons from a structured enum, never free-form.
- **Accessibility minimums**: hero type ≥32px desktop / ≥24px mobile; body ≥18px desktop / ≥17px mobile; microcopy ≥14px; WCAG AA contrast; never color-only (factor states, bars, arrows all carry text/number); render target <1.5s LCP on mid-range mobile.

## Data sources named
- `docs/evidence-engine.md` (data model dependency), `docs/brand-safety-rules-v2.md` (what may be shown), `docs/content-surfaces.md` (Phase 5 "Why the model stayed quiet" surface).
- `/api/picks/daily-slate` (existing published-pick endpoint); proposed new endpoint `/api/picks/daily-decisions` returning the full decision graph per game, tier-gated identically.
- Existing site surfaces: `/picks`, `/observatory`, `/vault`, `/methodology`; existing operator surface `apps/web/app/cockpit/` + `apps/web/components/cockpit/` (Jarvis, internal-only, noindex — explicitly NOT this spec).
- Galaxy hero component `apps/web/components/hero/interactive-galaxy.tsx` (replaced from Three.js per CODEX_HANDOFF_2.md); new components in `apps/web/components/decision-path/`.

## Findings (numbers and facts, not vibes)
- [OTHER] The public cockpit must NOT live under `/cockpit` (namespace reserved for the internal Jarvis operator surface); it extends `/picks` instead, with components in `components/decision-path/`.
- [TRUST-SIGNAL] Every signal row in Frame 3 must trace to a `FactorContribution` database row (BS-015); row reasons are a structured enum — no free-form LLM-generated rationale per row.
- [TRUST-SIGNAL] A `shadow` factor tile may say "monitoring" but cannot quote a number from the shadow factor (BS-011, BS-050); shadow data never leaks in Frame 2 or Frame 4.
- [TRUST-SIGNAL] Tier redaction happens server-side: the FREE-tier response literally does not contain the redacted number — not just CSS-hidden (non-negotiable #3 in CLAUDE.md).
- [COACHING] "No pick" is a first-class state: the cockpit always renders; held games run through the full 5-frame storyboard with structured reasons (weather stale; lineup unconfirmed; market depth < 5 books; confidence under threshold; calibration review).
- [TRUST-SIGNAL] The gate sequence is rendered visibly when a gate fails (e.g., "Pick blocked — weather data 87 min stale"), doubling as honesty-marketing feeding the "Why the model stayed quiet" content surface.
- [OTHER] Acceptance criteria include `apps/web/__tests__/shadow-leak.test.ts` passing against the new cockpit endpoint and an axe WCAG 2.1 AA scan in CI.
- [OTHER] Galaxy hero metaphor: each star = one factor; bright in-cluster = `activated`, dim outer-orbit = `shadow`, pulsing-dim = `stale`, off = `unavailable`; hover on a factor tile highlights the corresponding star (`galaxy-star-binding.tsx`).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
See tagged findings above. Primary lanes: TRUST-SIGNAL (FactorContribution traceability, shadow-leak rules, server-side tier redaction, visible gate failures), OTHER (UX/component specs, tier matrix, accessibility minimums), COACHING (no-pick-as-decision framing as a trust-building pattern applicable to public pick presentation).

## Engine-actionable? (yes/no + one-line what)
Yes — defines the public decision-log contract the engine must emit per game (5 frames, 6 gates, 3 verdict states, structured reason enums), so engine output schemas can be built to feed `/api/picks/daily-decisions` once the spec is implemented.
