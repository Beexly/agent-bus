# Unseen Studio Autopsy + Full Architecture Blueprint
**Source:** Garrett, 2026-09-12. Filed by Motif. Companion to IMMERSIVE-10-LAYERS.md — this doc is the *how* (engineering), that doc is the *what* (requirements). Full original text preserved in Garrett's paste; this file is the extracted, builder-actionable record.

## PART I — The Unseen autopsy (what actually happens under the hood)

### ZERO (the masterclass)
- **Enter experience:** no button — visitor draws a zero. Gesture recognition measures 3 things: total signed angle > 5.76 rad, roundness (CV of radii < 0.35), closure (first–last point distance < mean radius). Stroke centroid seeds a frost shader that spreads from the stroke to reveal the experience.
- **The architecture decision:** ZERO does NOT use native scroll. No ScrollTrigger. A single normalized progress value (0→1) fully controlled by code. No mobile scroll physics fighting the WebGL scene.
- **Asset pipeline:** 1GB+ source (Blender, 4K textures, high-poly) → under 10MB at 60fps on budget Android. Geometry simplification in Blender, texture atlases, Draco, aggressive LODs, baked animations.
- **Narrative:** 6 scrolling stages, 5 interactive gates (draw-a-zero, hold-to-shatter-glass, hold-to-launch-tunnel). Arc: degree promise → shattering → unemployment stats on broken glass → burning money → ZERO-logo tunnel → city of real HQ buildings → explorable map.
- **AI's role:** 48-hour AI prototype of draw-a-zero, then months of human refinement (multiple burning-money variants, shatter timings, shader ideas). **AI is the prototyping layer; human taste is the refinement layer.**

### The core insight
"One building model, and the rest is the camera work — a → b → c transitions with shaders between movements." **You don't need a thousand assets. You need one world, explored properly. The camera is the storyteller.**

### The Theatre.js version-control problem
Unseen extended Theatre.js with a PHP filesystem API so designers could save animation changes without sending JSON to developers, and built their own VC into the Theatre GUI because multiple editors overwrote the same state file. **The pipeline is the work, not the shaders.** Build the designer↔developer handoff before the pixels.

### Bake everything you can
- Sea We Breathe: baked animations + real-time interactive elements for tight perf.
- Igloo Inc: custom VDB-to-browser exporter compressing volume data smaller than a typical website image.
- Compression/authoring pipelines happen **before** the browser ever sees the file.

### BlueYard fluid playbook
Two-color WebGL atlas; custom GLSL fluid sim (not a library) driving an orb through "Computation." Orb responds to **mouse velocity, not position** — that's why it feels alive rather than reactive.

### Their actual stack
Three.js (not Babylon/PlayCanvas) · R3F + Drei · GSAP (ScrollTrigger, CustomEase, ScrollSmoother) · Lenis · Rapier · Blender/C4D · Theatre.js · Rive · Howler + Web Audio · Vite · custom GLSL / WebGPU + TSL · LLM-assisted prototyping.

## PART II — The architecture blueprint (builder deltas vs 10-layers doc)

1. **Single canvas doctrine.** Multiple WebGL canvases kill performance (browser 3D-context limits). One persistent canvas behind the DOM; every "page" is a camera position; DOM scrolls independently, syncs to the 3D timeline. Trionn skipped R3F for direct renderer control — right call for one continuous world (R3F = liability at full-site scale, brilliant for componentized scenes).
2. **The scroll must be yours.** Virtual scroll position (Lenis) drives animation; browser scroll is not the driver. Ship Lenis by default, honor prefers-reduced-motion.
3. **The gate system.** Every major section transition requires interaction. Without gates: passive scroller. With gates: participant. The gate is what converts a website into an experience.
4. **The asset pipeline:**
   ```
   Blender/Houdini → gltf-transform optimize (Draco + KTX2) → gltfjsx → Theatre.js sequences → web worker loading → single WebGL scene
   ```
   `gltf-transform optimize --compress meshopt --texture-compress ktx2 --texture-compress webp` routinely drops 80%+. Compression matrix: product viewer = Meshopt + WebP/KTX2; game assets = Meshopt + KTX2 + LODs required; mobile = Meshopt + KTX2 512–1024px + LODs; e-commerce batch = Draco (smaller) + WebP. ASTC mandatory for mobile textures; bake distant lighting into lightmaps, use unlit shaders.
5. **Procedural where possible.** Igloo's crystal-growth algorithm (pick a container, grow ice inside it) scales without manual modeling. For a digital-goods store: product visualizations generated from product data, not pre-rendered per SKU.

## PART III — WebGPU + TSL (2026 standard)
- WebGPU is Baseline (Jan 2026); ~70–75% user coverage (May 2026); Safari 26 shipped Sept 2025. Three.js r171+ = zero-config `WebGPURenderer`, silent WebGL2 fallback.
- **TSL** (Three Shading Language): author shaders as JS function compositions; one TSL shader compiles to WGSL *and* GLSL. TSL Graph visual editors emerging for designers.
- Compute shaders: million-unit particles, GPU collision/lighting, cheaper draw-call setup than WebGL.

## PART IV — 3D generation pipeline (Hugging Face, production-usable 2026)
- **TRELLIS.2-4B** (Microsoft): best overall. 4B params, single image → GLB with PBR maps (base color, metallic, roughness, opacity). MIT license. 3s/17s/60s on H100 (512³/1024³/1536³). 24GB VRAM min (RTX 4070 16GB w/ offload).
- **Hunyuan3D 2.1** (Tencent): best textures. 3.3B MoE DiT, ShapeVAE 4096-latent, DINOv2-Large, Paint v2.0 Turbo.
- **Pixal3D** (Lightfielder): SIGGRAPH 2026, pixel-aligned, browser Gradio demo.
- Also: HunyuanWorld-Mirror (multi-view → explorable worlds), HY-World 2.0 (text/image/video → meshes/splats), 3D Model Zoo.
- Store workflow: generate from reference images → gltf-transform optimize → Theatre.js sequences → single WebGL world + commerce DOM.

## PART V — Animation choreography stack (2026)
- Theatre.js = master camera timeline (single source of truth for the whole scene). GSAP = interaction feedback. **Single RAF loop** — Theatre.js custom rafDrivers keep all libs in sync.
- Pattern: Lenis + GSAP ScrollTrigger + Three.js/Theatre.js for cinematic; GSAP SplitText for type. Rive for stateful interactive graphics. Framer Motion for React component layer.

## PART VI — Testing deltas (extends 10-layers)
- **Chrome 130+ removed automatic SwiftShader fallback** — must explicitly enable in test env.
- SSR visual regression via headless-gl (WebGL1 in Node, no browser).
- chrome-devtools-mcp + Lighthouse as agent-assisted triage for 3D-viewer perf/asset regressions.

## PART VII — Deployment deltas
- Service worker / Cache-Control immutable + content-hash for large assets — critical for repeat visits where the 3D world IS the product.

## PART VIII — Analytics deltas (extends 10-layers)
- Add: OpenReplay / TraceUX (self-hosted session replay; Smartlook shutting down), Umami 3.2.0 (heatmaps + replay).
- Same metric set: time-to-first-interaction, gate completion, camera depth, audio engagement, reduced-motion adoption, frame-drop correlation.

## PART IX — Reduced motion deltas
- **Also honor `prefers-reduced-data`** for metered connections — same motion-duration zeroing + animation backstop as reduced-motion.

## PART X — The uncomfortable truths
1. You won't ship at 10MB first try. ZERO took 4 months and multiple discarded effect versions. **Budget for iteration.**
2. AI = prototyping layer, not shipping layer.
3. Pipeline > pixels. Build the designer↔developer handoff first.
4. One building, infinite camera work.
5. The gate is the experience.
6. Demo→product gap lives in a11y controls, VAT registration, presigned URL expiry, interaction budget, reduced-motion fallback. **Beauty gets attention; production quality keeps it alive.**

## PART XI — The correct first move
**Don't start with Three.js or GSAP. Start with Theatre.js and Blender.** One scene, one building, one environment. Hook every property to Theatre. Sequence the camera. Feel it. Then bring the rendering layer. Start with cinematic intent; choose tech to serve it.
