# docs/design/HIGGSFIELD_ASSET_REGISTRY.md
## What it is (1-2 sentences)
A registry of every AI-generated brand/design asset touching the GSE product (owner-authorized cinematic work), listing provenance, placement, and code-native fallbacks for each; generation via Recraft 4.1 (images/vector) and Seedance 2.0 / Kling 2.6 (video).
## Key metrics/methods (formulas where given, else "not specified")
Not specified — no formulas; design/brand registry.
## Data sources named
None — brand assets only (approved brand kit: bible PDF + cinematic logo-reveal MP4 + chrome stills; brand suite job `d2ol7oe51mr4n9`).
## Findings (numbers and facts, not vibes)
- Palette locked: Orbital Cyan `#00E5FF`, Ion Magenta `#FF38C7`, Soft Ultraviolet `#7B61FF`, Electric Blue `#2A6BFF`, Nebula Purple `#A855F7`, Cosmic Gray `#0D1117`, Obsidian `#05070B`, Starlight White `#F5F7FF`; signal fade = cyan→magenta→violet; Display face Exo 2, body Inter.
- Canonical placements: `public/brand/gse-reveal.mp4` → cold-open (MontageEntrance); `public/brand/gse-reveal-poster.png` poster; `public/brand/gse-emblem.png` (512/-180/-64) → header lockup, favicon, app icon, manifest, Organization JSON-LD logo; `public/brand/gse-master.png` → press/share/OG.
- Integrated: GSN broadcast control-room plate (job `0ad33e01-…250d`, recraft_v4_1 2k 16:9) at `public/immersive/gsn-broadcast-plate.webp` via `GeneratedPlate` @ 20% opacity.
- Retired near-miss hexes guarded by `apps/web/__tests__/brand-palette-guard.test.ts`.
- Pending owner approval: GSN broadcast motion plate (kling2_6/seedance_2_0 i2v, silent loopable) and cold-open intro title video (needs interactive approval click for generate_video; still is the shipped fallback).
- Rules: code-native fallback for every asset; no photoreal, no faces, no team/league marks, no embedded fake text, no casino imagery; stills ~28KB webp decorative at low opacity; reduced-motion safe.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- None — brand/design surface only; no intelligence content.
## Engine-actionable? (yes/no + one-line what)
No — design registry with no model-relevant content.
