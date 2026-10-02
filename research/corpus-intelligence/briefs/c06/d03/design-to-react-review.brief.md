# design/design-to-react-review.md
## What it is (1-2 sentences)
Doctrine-only governance protocol for translating design mockups (Figma/Canva/reference images) into React components in the Sports OS codebase: a five-stage translation process (design review → component planning → implementation review → testing → post-implementation audit) with forbidden patterns, component-ownership zones, and approval gates.

## Key metrics/methods (formulas where given, else "not specified")
- **No numeric formulas** — the protocol is checklist/audit-driven
- **Stage 1 audits:** design-token audit (colors map to `DESIGN.md` tokens, no hardcoded hex, 4px spacing multiples, radius token set), claim-governance audit (source freshness disclosure, "not a guarantee" context on confidence scores, forbidden vocabulary: lock / guaranteed / sure thing, win-rate claims carry window + model version, "Entertainment purposes only" on public pick surfaces), access-control audit (premium data gated in design; Free/Pro/Elite surface differences explicit; cockpit-only marked), accessibility pre-check (contrast ≥ 4.5:1 body, visible focus states, text alternatives for dataviz)
- **Stage 2:** mandatory component pre-declaration (name, files created/modified, paywall enforcement at server/route level, claim-governance rules, tests required, ARIA/keyboard plan); import contract (colors via CSS custom properties only, typography from `globals.css`/Tailwind, no new npm dependencies)
- **Stage 3:** token/paywall/claim compliance at each render block — canonical correct pattern is server-side tier resolution (`isPro` prop from a validated server component), never client-side `useSession()` checks
- **Stage 4 test tiers:** unit (renders, free/pro variants, no forbidden vocabulary), integration (gated components hide confidence score for FREE tier, hide WITHHELD picks), accessibility (aria-label, focus order, contrast), claim governance (compliance scanner flags nothing; dynamic pick data sanitized)
- **Stage 5:** typecheck + lint + full test run; visual regression at 1280px and 375px vs mockup; hex-drift check via `grep -E "#[0-9a-fA-F]{3,8}"` on the component (must return zero)
- **Codex audit list (5):** grep hex in components, `ConfidenceScore` always with `showDisclaimer={true}`, server-side enforcement documented in tests, no `@ts-ignore`/`eslint-disable` in pick-data components, paywall-only `useSession()` reported as P0

## Data sources named
- Internal references: `DESIGN.md` (design token source of truth), `docs/design/visual-language-palette-lab.md` (color/type rules), `docs/audit/codemod-safety-policy.md` (code change safety), `CLAUDE.md` (implementation rules), parent `docs/intelligence/SPORTS_OS_INTELLIGENCE_NETWORK_MASTER_PLAN.md`
- Code zones: `apps/web/components/public/`, `apps/web/components/cockpit/`, `apps/web/components/ui/` (shared primitives), `apps/web/app/*/page.tsx`
- Components/scanners named: `<ConfidenceScore>` (with `showDisclaimer`), `<WinRateBadge>` (required props for hard-coded win rates), claim-governance/compliance scanner, `LogoMarkInline`, `design-tokens.css`, `globals.css`

## Findings (numbers and facts, not vibes)
- The document states translation is the highest-risk moment in the design-to-code pipeline: token drift, claim-governance violations, skipped paywall logic, dropped accessibility
- Banned patterns: hardcoded hex via `style=`; casino-green color; `eslint-disable-next-line` / `@ts-ignore`; client-only paywall checks; unsanitized `dangerouslySetInnerHTML` with pick data; hard-coded win rate without `<WinRateBadge>`
- Ownership: public/cockpit/page components = Claude (plan) → Codex (implement), audited by Codex; shared primitives = Codex; **any component displaying pick data, confidence scores, or market data always gets operator review before production**
- Approval gates: free-tier surface = operator design sign-off; gated (Pro/Elite) = operator sign-off + verified paywall enforcement; cockpit = operator sign-off; claim-governance display changes = Owner; new dataviz type = operator
- Status is "Doctrine only" (from Prompt 4 — Final Wave): it governs process; no shipped-component evidence is recorded in the file
- Five-stage process is gated sequentially: Stage 1 must complete before Stage 2 begins

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Claim governance in UI (freshness disclosure, no "lock"/"guaranteed", win-rate claims with window + model version, entertainment-purposes-only) is the front-line enforcement of the honest-public-surface doctrine — connects directly to the replay calibration's "publishing 52.7% with CI is defensible, as an edge is not" posture
- [OTHER] Server-side paywall enforcement pattern (tier resolved before render, never client `useSession()`) is the reference pattern for any gated engine outputs or signals
- [OTHER] The forbidden-vocabulary rule and `<ConfidenceScore showDisclaimer>` wrapper are concrete implementation specs for confidence display — relevant to the engine's confidence-ranking problem found in the replay doc

## Engine-actionable? (yes/no + one-line what)
NO direct engine modeling value (it's UI/engineering governance), but the claim-governance specs and server-side paywall pattern apply directly to how engine outputs surface on the site.
