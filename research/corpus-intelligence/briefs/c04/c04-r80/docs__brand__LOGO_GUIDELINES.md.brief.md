# docs/brand/LOGO_GUIDELINES.md
## What it is (1-2 sentences)
The brand-family logo specification for the 2026 Galaxy mark (split orbital ring, edge blade, signal core, ping), governing its use across Galaxy Sports Edge and Galaxy Sports Network surfaces, with variants, color rules, a kinetic motion signature, and do/don't rules.
## Key metrics/methods (formulas where given, else "not specified")
- not specified (brand guidelines, no formulas). Numeric specs: clear space = signal-core height on all sides; minimum sizes — mark 24px, favicon never below 16px, full lockup never below 28px mark height (use compact); kinetic signature total sequence budget ≤ 0.95s; logo sting sub-1s, never autoplay, opt-in only.
## Data sources named
Canonical code sources: `apps/web/components/brand/brand-lockup.tsx` (GalaxyMark), `apps/web/components/brand/logo-mark-inline.tsx` (LogoMarkInline), `apps/web/components/brand/gsn-lockup.tsx` (GsnLockup), `apps/web/public/favicon.svg`, `apps/web/public/logo-mark.svg`, `apps/web/lib/brand.ts` (BRAND_COLORS), `styles/pickpilot-kit.css` (keyframes gse-mark-draw, gse-mark-pop, gse-mark-glow, gse-word-resolve).
## Findings (numbers and facts, not vibes)
- Mark concept: split orbital ring with two dash gaps, diagonal edge blade, plasma signal core, ultraviolet ping; colors orbit ionWhite/softUltraviolet, vectors ionMagenta (--plasma) + orbitalCyan, core ionMagenta, ping orbitalCyan, on obsidianBlack.
- Seven variants: GSE full lockup, GSE compact, GSN lockup, GSN on-air bug, mark only, favicon, app icon.
- Glow is a drop-shadow, never a flattened neon fill; under `prefers-reduced-motion: reduce` all animation disabled (mandatory).
- No audio element may carry `autoPlay`; sound sting only on explicit user gesture.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — brand/design governance; no football content. (TRUST-SIGNAL adjacent only in that brand consistency supports credibility, but the file contains no trust mechanics.)
## Engine-actionable? (yes/no + one-line what)
No — pure brand-design governance with no prediction, data, or engine content.
