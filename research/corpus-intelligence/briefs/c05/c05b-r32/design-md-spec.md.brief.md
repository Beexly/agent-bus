# design/design-md-spec.md
## What it is (1-2 sentences)
The specification for DESIGN.md itself — the machine-readable + human-readable design-language document for Galaxy Sports Edge — defining its two-section structure (YAML front matter + markdown doctrine), maintenance rules, approval gates, and audit requirements.

## Key metrics/methods (formulas where given, else "not specified")
- Not specified. Norms: YAML block mirrors `apps/web/styles/design-tokens.css` (CSS authoritative on conflicts); only three active accent colors (`--plasma`, `--orbital-cyan`, `--ultraviolet`); forbidden tokens include `casino_green`, `cheap_neon`, `crypto_green`.
- Codex audit checklist (7 items): YAML parses; hex values match CSS; forbidden trio present; only the three accent colors active; no gold/amber/cobalt as non-deprecated; YAML forbidden list matches doctrine section; YAML↔CSS drift reported as P1.
- Approval matrix: new token + YAML entry / deprecation removal (+30-day window) / new color (+a11y check) / new signature component → operator review; forbidden-list changes → owner approval; YAML structure change → agent + operator alignment.
- Validation: js-yaml/python-yaml parse, brand-safety test suite + lint, axe-core WCAG AA in CI; automated token-drift check (`validate-design-tokens.ps1`) proposed but not yet implemented.

## Data sources named
- `DESIGN.md` (parent), `apps/web/styles/design-tokens.css`, `apps/web/lib/brand.ts`, `apps/web/styles/pickpilot-kit.css`, `apps/web/app/globals.css`; reference set Bloomberg/F1/NASA/Apple/Perplexity/Linear; Prompt 1 initial pass, 2026-05-21 brand voice audit, Brand Use Pack §4.

## Findings (numbers and facts, not vibes)
- Status: doctrine only; design-system changes require operator review. Source: Prompt 4 — Final Wave.
- Hard forbidden actions: no new color without CSS; no YAML hex change without CSS update; no deprecation without CSS redirect; never author `casino_green`/`cheap_neon` variants; never drop forbidden patterns without owner approval; no signature component without implementation or linked spec.
- Public/private: DESIGN.md is repo-commit-able, tokens are public (rendered in browser), doctrine sections internal.
- Two non-negotiable requirements: intelligence differentiation (Bloomberg/F1/NASA set — not sportsbook/tout) and trust-signal legibility (pick cards, evidence chains, confidence scores legible and credible).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Design must make trust signals (pick cards, evidence chains, confidence scores) legible and credible, not hidden for "cleanliness" — TRUST-SIGNAL
- Reference-set differentiation (not a sportsbook/tout) — TRUST-SIGNAL
- Everything else (token mechanics, approval gates, audits) — OTHER

## Engine-actionable? (yes/no + one-line what)
No — pure design-system governance; no metrics, methods, or model content.
