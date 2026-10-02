# docs/design/design-md-spec.md
## What it is (1-2 sentences)
The specification for `DESIGN.md` itself: a machine-readable + human-readable design language document for Galaxy Sports Edge with YAML front matter (brand, colors, typography, spacing, motion, forbidden patterns) mirroring `design-tokens.css`, plus markdown doctrine, maintained under strict approval gates.
## Key metrics/methods (formulas where given, else "not specified")
Not specified. Agent reading rule: parse YAML first; if a token is in YAML but not CSS, the CSS is authoritative (update YAML); if a token is in CSS but not YAML, the YAML is incomplete (add it).
## Data sources named
None external. References: `apps/web/styles/design-tokens.css`, `apps/web/lib/brand.ts`, `apps/web/app/globals.css`, `apps/web/styles/pickpilot-kit.css`; reference set (Bloomberg, F1, NASA, Apple, Perplexity, Linear); gold→orbital-cyan and elite-gold→ultraviolet migrations.
## Findings (numbers and facts, not vibes)
- Two non-negotiable requirements: intelligence differentiation (not a sportsbook/tout/generic app) and trust reinforcement (pick cards, evidence chains, confidence scores legible and credible).
- `DESIGN.md` is internal documentation (not a public-facing surface); its rendered tokens are public. Status: doctrine only — design system changes require operator review.
- Forbidden actions include never authoring tokens named `casino_green`, `cheap_neon`, or variants; the only three active accent colors are `--plasma`, `--orbital-cyan`, `--ultraviolet` (no gold/amber/cobalt as non-deprecated).
- Approval gates: new tokens → operator review; deprecated removal → operator review + 30-day window; new color → operator + accessibility check; forbidden-list modification → owner approval.
- Codex audit checklist (7 items): YAML parses; hex values match CSS; `casino_green`, `cheap_neon`, `crypto_green` in `forbidden`; only the three accent colors active; YAML forbidden list matches doctrine; drift reported as P1 doc issue.
- MVP path: DESIGN.md present, CSS is implementation source, automated token-drift check (`validate-design-tokens.ps1`) not yet implemented — requires operator approval.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: Trust reinforcement is one of the two non-negotiable design requirements — pick cards, evidence chains, confidence scores must be legible and credible; forbidden-pattern list keeps the brand off tout/casino aesthetics.
- OTHER: Design-system governance (tokens, approval gates, audit rules) — not engine intelligence.
## Engine-actionable? (yes/no + one-line what)
No — design language governance; it shapes how trust signals render on surfaces, not how the engine computes them.
