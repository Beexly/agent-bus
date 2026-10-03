# strategy/cinematic-experience-blueprint.md
## What it is (1-2 sentences)
A 2026-09-12 distilled reference doc (from deep-audit reviews of Unseen, Trionn, Igloo Inc, Monolith, La Revoltosa) giving the creative architecture and production floor for the Sports frontend's cinematic layer: single-canvas WebGL world, scroll-as-timeline, gate system, asset pipeline, plus non-negotiable production requirements (accessibility, audio, perf budgets, testing, CDN, reduced-motion).
## Key metrics/methods (formulas where given, else "not specified")
- Compression: gltf-transform optimize (Draco + KTX2 in one command) drops file size 80%+; ZERO shipped 1GB+ of source assets as a 10MB site at 60fps on a budget Android phone.
- Perf budgets: LCP <= 2.5s, INP <= 200ms, CLS <= 0.1, initial JS <= 400KB gzipped, 16.67ms/frame, <100 draw calls.
- WebGPU is the production standard (Safari Sep 2025, Three r171+ zero-config): up to 3.8x compute improvement; never use WebGLRenderer unless hardware < 2022.
- 3D-gen workflow: reference images -> TRELLIS/Hunyuan3D-2.1 (TRELLIS #2 best generative 3D render, free Space no GPU) -> gltf-transform optimize -> Theatre.js sequences -> single WebGL world; HunyuanWorld-Mirror for environments.
- Analytics: measure time-to-first-interaction, gate completion rate, camera progression depth, audio engagement; an 80%-progress gate bounce is a failed gate, not a bounce.
## Data sources named
None (design reference). Reference studios: Unseen (design bar), Trionn, Igloo Inc, Monolith, La Revoltosa; tools: Theatre.js, GSAP, Lenis, Three-VFX/three.quarks, Rapier, Draco + KTX2; models: TRELLIS (Microsoft), Hunyuan3D-2.1 / HunyuanWorld-Mirror / HY-World 2.0 (Tencent), 3D Model Zoo; legal refs: EU Accessibility Act (June 2025), WCAG 2.1 AA / 2.3 / 2.5.1; session tools: Clarity/Mouseflow/Smartlook.
## Findings (numbers and facts, not vibes)
- L1 Single Canvas Doctrine: one persistent WebGL canvas; multiple canvases kill performance (browser 3D-context limits); Trionn avoids React Three Fiber for continuous-world (manages Three.js renderer outside React lifecycle).
- L2 scroll: native scroll is not the animation driver; single normalized progress value; Lenis = virtual scroll decoupled from native.
- L3 gate system: section transitions require interaction (draw a zero, hold to shatter, hold to launch); BlueYard orb responds to mouse VELOCITY.
- L4 asset pipeline: Blender/Houdini -> gltf-transform optimize -> gltfjsx -> Theatre.js sequences -> web worker loading -> single scene; ASTC mandatory for mobile; 4K-everything crashes mobile GPUs; distant objects get lightmaps/unlit shaders.
- Theatre.js vs GSAP: Theatre.js = master camera timeline (designer UI); GSAP = interaction feedback.
- Accessibility: canvas contributes nothing to a11y tree; parallel HTML controls mandatory; full keyboard path; 4.5:1 text contrast, 3:1 large text; prefers-reduced-motion -> entirely separate static path (instant cuts, text descriptions).
- Sports status: r3f signal-core scene + DFS oracle already adopted; concrete next steps listed (observatory vs Single Canvas, reduced-motion path, WebGPU swap, gate system); commerce/VAT (E4/E5) parked until storefront exists.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- No QB/COACHING/OL/SCHEME content -> OTHER for all (frontend/cinematic architecture and production floor).
## Engine-actionable? (yes/no + one-line what)
No - frontend cinematic architecture and production standards, not engine model/data input (observatory scene and WebGPU swap are build actions, not engine-actionable).
