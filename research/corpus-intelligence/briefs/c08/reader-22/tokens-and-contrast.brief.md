# docs/design/redesign-2026-09/tokens-and-contrast.md
## What it is (1-2 sentences)
Measured audit of the live app's color tokens against WCAG AA contrast (script-computed, never hand-typed): 1 of 72 current pairs fails, 54 of 54 proposed pairs pass; also proposes a single-accent semantic token set (orbital cyan #00E5FF) and typography changes.
## Key metrics/methods (formulas where given, else "not specified")
- WCAG relative-luminance/contrast-ratio script (`contrast-check.mjs`), exits 1 on any AA-gated failure. 72 current pairs measured → 71 pass, 1 fails: `text-ultraviolet` #7B61FF on `~eclipse/80%` `.surface-card` = 4.36:1 (below 4.5 floor); same hue on carbon = 4.50:1 (0.002 over floor). Fix: swap `text-ultraviolet` → `text-ultraviolet-glow` (#9F87FF, 6.07–6.65:1) at ~11 call sites.
- Fix for the redesign: collapse three-tier text to two tiers, one accent hue (cyan, 5.42–13.11:1 across all surfaces), new `--info` (#1D4E9B light / #8FB8F5 dark). Body token `--t-body` is 15px — one pixel under the brief's 16px mobile floor.
## Data sources named
- `apps/web/styles/design-tokens.css` and `apps/web/tailwind.config.ts` (the only two files the app actually renders), plus component variants in `kpi-card.tsx`, `page-hero.tsx`, `metric-explainer.tsx`, `data-table.tsx`, `lib/intelligence/colors.ts`, `pick-card.tsx`.
## Findings (numbers and facts, not vibes)
- **72 current pairs: 71 pass, 1 real failure** (text-ultraviolet on surface-card, 4.36:1).
- **54/54 proposed pairs pass**, worst case 4.84:1 (accent on surface-sunken, light mode).
- Drift found inside live files: `tailwind.config.ts` `obsidian: #080A0F` vs `design-tokens.css` `--obsidian: #05070B`; `DESIGN.md` colors stale vs live; `--ion-2` comment says #9AA6B8 but ships #B1BAD5.
- No `[data-theme]` toggle exists; "dark" and "paper" are hardcoded per-component surface variants, not themes.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- None of the sports tags apply — design-system doc (OTHER: accessibility/UX).
- TRUST-SIGNAL-adjacent at most: consistent evidence-framing tokens (positive/negative/caution retained as-is), so honest calibration UI would survive a redesign.
## Engine-actionable? (yes/no + one-line what)
No — redesign/audit doc for the website; no projection or fantasy logic. (Site-health flag only: one live AA contrast failure on ultraviolet text.)
