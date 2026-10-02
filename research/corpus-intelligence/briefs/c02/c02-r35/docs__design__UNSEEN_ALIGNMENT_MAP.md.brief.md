# docs/design/UNSEEN_ALIGNMENT_MAP.md
## What it is (1-2 sentences)
The standing translation table from Unseen Studio's portfolio (unseen.co) into the Galaxy world: a project-by-project map of signature interactions (BlueYard, unseen.co, Cult of the North, Crosswire, Blue Marine/Dreamscapes) with per-pattern status SHIPPED / EXISTS / ROADMAP and hard aesthetic lines that do not bend.
## Key metrics/methods (formulas where given, else "not specified")
Not specified. Engineering figures given, not formulas: BlueYard's 30,000-particle Houdini→WebGL nebula; the click-and-hold boot interaction is an 800ms ring with an auto-engage fallback so nobody is blocked; the WebGL tier decision requires a perf budget of LCP unchanged, lazy-loaded, reduced-motion fallback = current CSS warp.
## Data sources named
None — design reference only. The map references internal components (`GalaxyCursor`, `gse-grain`/`gse-vignette`, `ShaderAuroraLazy`, world chapters 00–09, Galaxy Twin / Observatory).
## Findings (numbers and facts, not vibes)
- BlueYard mappings (the closest sibling to the whole concept): galaxy clusters as navigation → entrance waypoints as clickable doors (SHIPPED); drag/steer through space → cursor steers the warp tunnel + waypoint field via CSS-var parallax, no re-render (SHIPPED); luminous particle orb/planet heroes → destination orb at warp arrival, layered conic veils + bloom (SHIPPED); LIVE ticker ribbon fed ONLY by real board state — rows cleared, gate holds, calibration, refresh (SHIPPED); 30k-particle nebula → true particle nebula for the entrance + observatory (ROADMAP, needs the WebGL-tier decision). [OTHER]
- unseen.co mappings: click & hold to enter → boot phase 800ms charge ring + auto-engage fallback (SHIPPED); custom cursor dot + lagging ring, difference blend → `GalaxyCursor` site-wide, swells over interactives, off for touch/reduced-motion (SHIPPED); film grain + vignette → `gse-grain`/`gse-vignette` (EXISTS); numbered exploration nav 01–04 → world chapters 00–09 + waypoint index (EXISTS). [OTHER]
- Cult of the North: navigation as game → waypoint-grab during warp, Cipher hunt tokens hidden across rooms, Academy "train the pass" grading (SHIPPED / EXISTS). [OTHER]
- Crosswire: 3D world representing the business → Galaxy Twin / Observatory — the slate as a living market map with gravity, pressure, edge windows (EXISTS, deepen with real-time nodes); small animated shapes = live users/features → Twin nodes + signal fragments (ROADMAP). [OTHER]
- Hard lines that do NOT bend for aesthetics: trust-safe copy, honest empty states, reduced-motion/AA accessibility, no fake data in any visual, no second full-screen takeover. [TRUST-SIGNAL]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
Tagged inline. Aggregate: OTHER dominates (design/visual doctrine); TRUST-SIGNAL for the hard lines (no fake data in any visual, trust-safe copy, honest empty states — the visual enforcement of the same honesty doctrine as the claims cards). No QB-BEHAVIOR, COACHING, OL, or SCHEME content.
## Engine-actionable? (yes/no + one-line what)
no — visual/interaction doctrine only; engine-relevant only in that the Galaxy Twin/Observatory market-map surface is where engine outputs (slate gravity, pressure, edge windows) would be visualized.
