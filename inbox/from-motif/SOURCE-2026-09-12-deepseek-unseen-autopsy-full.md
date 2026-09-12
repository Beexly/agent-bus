# CANONICAL SOURCE — Garrett's original research paste (verbatim, unedited)
**Received:** 2026-09-12 ~15:20 CDT, via iOS app, main chat.
**Filed by:** Motif, 2026-09-12. Recovered verbatim from the conversation transcript — no summarization, no edits.
**Purpose:** This is the source of truth. All extractions (UNSEEN-AUTOPSY-BLUEPRINT.md, BUILD-BIBLE.md) derive from this text. If an extraction and this file disagree, THIS FILE wins.

---

PART I: THE UNSEEN STUDIO AUTOPSY — WHAT ACTUALLY HAPPENS UNDER THE HOOD

1.1 ZERO: The Masterclass Build

ZERO is the single most instructive Unseen Studio project because they published a full engineering breakdown covering the pipeline, rendering techniques, and performance optimizations behind the immersive scroll-driven WebGL experience.

The Enter Experience: There is no "Enter" button. The visitor must draw a zero with their cursor or finger. The gesture recognition measures only three things: total signed angle (must be > 5.76 radians), roundness (coefficient of variation of radii < 0.35), and closure (distance between first and last point < mean radius). When accepted, the stroke's centroid becomes the seed for a frost shader that spreads from the stroke and reveals the experience.

The Architecture Decision That Changed Everything: ZERO does not use the browser's native scroll. There is no ScrollTrigger. The entire experience is driven by a single normalized progress value (0 to 1) that the code controls completely. No native scroll interference, no mobile scroll physics fighting the WebGL scene.

The Asset Pipeline: They transformed over 1GB of source assets (Blender scenes, 4K textures, high-poly meshes) into a site under 10MB that runs at 60fps on a budget Android phone. The techniques: geometry simplification in Blender, texture atlas creation, Draco compression for meshes, aggressive LOD systems, and baked animations where possible.

The Narrative Structure: Six scrolling stages connected by five interactive gates. Each gate is a different interaction mechanic: drawing a zero, holding to shatter glass, holding to launch through a tunnel. The narrative arc is explicit: traditional degree promise → shattering → unemployment statistics on broken glass → burning money → tunnel shaped like the ZERO logo → city built from real company headquarters → interactive explorable map.

AI's Role: They built the first working prototype of the draw-a-zero interaction in 48 hours using AI. Then they spent the rest refining, testing multiple versions of burning money effects, different glass shatter timings, and several shader ideas before settling on what worked. AI is the rapid prototyping layer. Human taste is the refinement layer.

1.2 The Core Insight Nobody Talks About

A forum discussion about Unseen's scroll implementation nailed it: "As you can see on Unseen, there is one building model, and the rest is generally speaking the camera work a → b → c… transitions with shaders have been implemented between the movements."

You do not need a thousand 3D assets. You need one world, explored properly. The camera is the storyteller. The assets are supporting evidence.

1.3 The Theatre.js Version Control Problem

Unseen's own dev blog on Symphony of Vines reveals the unglamorous reality: they extended Theatre.js with a PHP-based filesystem API just so designers could save animation changes without sending JSON files to developers, and they had to build their own version control into the Theatre GUI because multiple people editing the same state file caused overwrites. This is the work. Not the shaders. The pipeline that lets a team iterate without breaking each other's work.

1.4 The Bake Everything You Can Principle

The Sea We Breathe uses baked animations combined with real-time interactive elements specifically to keep performance tight. Igloo Inc built a custom VDB-to-browser exporter for volume data that compresses it smaller than a typical website image. These aren't rendering tricks. They're compression and authoring pipelines that happen before the browser ever sees the file.

1.5 BlueYard: The Fluid Simulation Playbook

BlueYard is a two-color WebGL atlas built around Buckminster Fuller. The core technical element is a custom fluid simulation driving an orb that pulses through the "Computation" section like a small sun that hasn't yet decided. The entire site is Three.js, but the fluid sim is custom GLSL — it's not a library. The orb responds to mouse velocity, not just position, which is why it feels alive rather than reactive.

1.6 The Full Technical Stack (What They Actually Use)

Layer Technology
3D Framework Three.js (not Babylon, not PlayCanvas)
React Integration React Three Fiber + Drei
Animation Choreography GSAP (ScrollTrigger, CustomEase, ScrollSmoother)
Smooth Scroll Lenis
Physics Rapier
3D Authoring Blender / Cinema4D
Motion Design Editor Theatre.js
Interactive Graphics Rive
Audio Howler + Web Audio API
Build Vite
Shader Language Custom GLSL / WebGPU + TSL
AI Prototyping LLM-assisted initial builds

---

PART II: THE REAL ARCHITECTURE BLUEPRINT

Layer 1: The Single Canvas Doctrine

Multiple WebGL canvases kill performance. Browsers limit how many 3D contexts you can have open simultaneously. The correct architecture is one persistent canvas that sits behind the DOM. Every "page" is a camera position within that canvas. The DOM layer (text, buttons, commerce elements) scrolls independently and syncs to the 3D timeline.

Trionn's team chose not to use React Three Fiber because they wanted "direct control over the shared render" — meaning they managed the Three.js renderer outside React's lifecycle to avoid re-render overhead on every component update. This is the correct call for a cinematic experience. R3F is brilliant for componentized 3D scenes. It is a liability when the entire site is one continuous world.

Layer 2: The Scroll Must Be Yours

Unseen's ZERO project does not use native scroll. It uses a single normalized progress value controlled entirely by custom code. No ScrollTrigger fighting native scroll physics. No browser jank on mobile. The scroll is a timeline scrubber, not a browser feature.

Lenis is the closest tool to this philosophy — it decouples smooth scrolling from the native scroll event and gives you a virtual scroll position to drive animations. The 2026 trend is "ship Lenis by default, but honor prefers-reduced-motion". Either way: the browser's scroll is not the animation driver. Your code is.

Layer 3: The Gate System

Every major section transition should require an interaction. ZERO gates progress with: drawing a zero, holding to shatter glass, holding to launch through a tunnel. BlueYard's orb responds to mouse velocity, not just position — it feels alive because it has physics.

The gate is what converts a "website" into an "experience." Without gates, the user is a passive scroller. With gates, the user is a participant. This is the difference between watching a film and being inside one.

Layer 4: The Asset Pipeline Nobody Teaches

Here is the pipeline that actually ships:

```
Blender / Houdini → gltf-transform optimize (Draco + KTX2 in one command) → 
gltfjsx (compress + convert to JSX) → custom Theatre.js sequences → 
web worker loading with progress → single WebGL scene
```

The gltf-transform optimize command alone often drops file size by 80%+ by applying Draco + KTX2 in one pass. This is the ZERO compression secret. Not a proprietary algorithm. A command-line tool nobody uses.

The 2026 recommended pipeline:

```bash
gltf-transform optimize input.glb output.glb \
  --compress meshopt \
  --texture-compress ktx2 \
  --texture-compress webp
```

Compression decision matrix (2026):

Scenario Geometry Textures LODs
Product viewer Meshopt WebP/KTX2 Optional
Game assets Meshopt KTX2 Required
Mobile Meshopt KTX2 512-1024px Required
E-commerce batch Draco (smaller) WebP Optional

For textures: ASTC compression is mandatory for mobile. Loading 4K textures for every material crashes mobile GPUs. For distant objects: bake lighting into lightmaps and use unlit shaders.

Layer 5: The Rendering Philosophy — Procedural Where Possible

Igloo Inc didn't model ice blocks. They built a crystal growth algorithm that simulates ice forming inside a container shape. Pick a cube, grow ice inside it, get a unique enclosure every time. The workflow scales without manual modeling.

This is the future. Not authoring every asset by hand. Building generators that produce assets. For a digital goods store, this means: product visualizations that are procedurally generated based on product data, not pre-rendered for every SKU.

---

PART III: THE 2026 RENDERING REVOLUTION — WebGPU AND TSL

3.1 WebGPU Is Now the Production Standard

As of 2026, WebGPU is the production standard for Three.js. Apple shipped WebGPU support in Safari 26 in September 2025, eliminating the last major browser holdout. Since r171, WebGPU integration no longer requires bundler tweaks or polyfills, and silently falls back to WebGL 2 on older browsers.

WebGPU reached Baseline in January 2026 — Chrome, Edge, Firefox, and Safari 26 ship it. As of May 2026, approximately 70-75% of users have it. The WebGPU renderer just works. For your store, this means more particles, more shader complexity, more objects, at the same frame rate.

3.2 TSL: The Shader Language That Changed Everything

Three.js has matured TSL — the Three Shading Language — which lets you author shaders as JavaScript function compositions. TSL is a node-based shader abstraction: a single TSL shader compiles internally to both WGSL (for WebGPU) and GLSL (for WebGL), eliminating the duplicated work of maintaining shaders for both renderers. Visual node editors like "TSL Graph" are also taking shape, opening shader authoring to designers and non-engineers.

3.3 Compute Shaders for GPU Parallelism

Collision detection, large particle systems, lighting calculations — million-unit scale becomes realistic with WebGPU compute shaders. Lower CPU overhead: draw-call setup is much cheaper than in WebGL. Heavier scenes run smoothly on the same hardware, with fewer hitches.

---

PART IV: THE 3D GENERATION PIPELINE (HUGGING FACE DEEP DIVE)

The 3D generation landscape on Hugging Face has matured significantly. Here is what is actually usable in production as of 2026.

4.1 The Top Models Ranked

Microsoft TRELLIS.2-4B — Best Overall Quality

TRELLIS.2 is Microsoft's second-generation image-to-3D model and the current leader for balanced quality across geometry, texture, and speed. 4 billion parameters, single image input, GLB mesh with PBR materials output (Base Color, Metallic, Roughness, Opacity). MIT license — fully open, commercial use allowed. Speed: 3s (512³) / 17s (1024³) / 60s (1536³) on H100. VRAM: 24GB minimum; RTX 4070 16GB with RAM offloading.

TRELLIS.2 introduces O-Voxel (field-free sparse voxel representation) and SC-VAE (16x spatial compression), generating detailed geometry without the computational overhead of implicit neural fields. The PBR material output is production-ready — separate Base Color, Metallic, Roughness, and Opacity maps directly usable in game engines and 3D software without additional texturing work.

Tencent Hunyuan3D 2.1 — Best for High-Fidelity Textures

3.3B mixture-of-experts DiT (21 blocks, 6 MoE layers × 8 experts) with a 4096-latent ShapeVAE and DINOv2-Large conditioning. The 2.1-generation shape model with Paint v2.0 Turbo for texture generation. Updated August 2026.

Lightfielder/Pixal3D — SIGGRAPH 2026 Pixel-Aligned Generation

Pixal3D generates high-fidelity 3D assets from a single image. Presented at SIGGRAPH 2026. You can try Pixal3D directly in your browser without any installation via the Hugging Face Gradio demo.

4.2 The Workflow for Your Digital Goods Store

1. Generate product 3D models from reference images using TRELLIS.2 or Hunyuan3D 2.1
2. Compress everything through gltf-transform optimize with Meshopt + KTX2
3. Author the cinematic sequences in Theatre.js
4. Ship a single WebGL world with commerce DOM layer

The Hugging Face agent workflow insight: An agent chained two Hugging Face Spaces together (one for images, one for 3D Gaussian splats) to build a full 3D Paris gallery with a cinematic viewer — every asset generated programmatically. This is your future asset pipeline.

4.3 Production Cost Reality

A production-ready Hunyuan3D-2.1 PBR pipeline has been validated with photorealistic rendering in Unity 6.4.4f1 with URP. Total cost documented for two hero pieces (mahogany + gilded).

---

PART V: THE COMMERCE LAYER — DIGITAL GOODS ARCHITECTURE

5.1 The Headless Commerce Landscape (2026)

Standard e-commerce platforms (Shopify, WooCommerce) are designed for product grids and checkout funnels. They are hostile to immersive experiences. The correct architecture: headless commerce backend + custom frontend.

Medusa: 35.7k+ stars, MIT license, no transaction fees, modular architecture with 18 domain modules including digital product support. The strongest choice for a developer-first digital goods store. Open-source headless commerce platform built with Node.js, composable, API-first.

Saleor: GraphQL-first, 22.4k stars, Django-based, MACH architecture. Powers Lush and Breitling. Open-source, GraphQL-first headless commerce platform for high-volume stores.

Shopify Hydrogen: Exists, but traps you into Shopify's APIs. Medusa, Magento, and WooCommerce (headless via REST) are the alternatives for teams wanting full control.

Gumroad: Store digital products, memberships, courses. Simple storefront. Best for solo creators who want zero infrastructure.

Tebex: Payments and monetization platform designed for game developers. Headless API for browsing packages, creating baskets, and checking out the user. Works entirely from the Unity client using your store's public token.

5.2 The Security & Fulfillment Playbook

Digital goods delivery is a security problem, not a feature.

Presigned URLs are the standard. A presigned URL is a time-limited, cryptographically signed download link generated server-side. Only the holder can use it, and only inside the validity window. Alva Digital Downloads issues 60-second presigned URLs against Cloudflare R2, so a stolen link expires before it can be reshared. Dodo Payments issues presigned download URLs on every grant, revoked when access is withdrawn. Each download URL expires automatically after roughly 15 minutes.

The rules:

· Never attach high-value files to email. Use time-limited download URLs tied to purchaser accounts
· Generate license keys on payment success, not in a static spreadsheet. Rate-limit activation APIs to reduce brute force
· Presigned URLs with an expiration window of around 15 minutes
· Limit downloads to 3–5 per purchase. Watermark PDFs with purchaser email when piracy is common
· License key activation limits — prevent one key being used on unlimited devices
· Velocity checks on card attempts, block known disposable emails for high-risk SKUs, monitor chargeback rates by product
· Delivery paths must be idempotent on webhook retry — the same webhook firing twice should not issue two keys

The architecture for scale: Use Shopify/Stripe transactional webhooks to trigger an external serverless engine immediately after successful payment. This decouples the customer-facing checkout from the resource-intensive key generation database, ensuring storefront performance is completely unaffected by backend processing. The webhook endpoint must process asynchronously — long-running database queries inside the webhook handler will time out.

5.3 The Build-vs-Buy Threshold

Native Shopify digital downloads hit a 5GB file size cap and cannot generate, track, or revoke unique serial keys. Move to custom when app subscription fees approach £6,000–£8,000/year or when you need deep integration with external licensing servers.

---

PART VI: THE LEGAL FLOOR — ACCESSIBILITY, TAX, AND COMPLIANCE

6.1 Accessibility — WCAG 2.1 AA / 2.2 AA

Since June 2025, the EU Accessibility Act (and Germany's national transposition, the BFSG) requires many commercial websites to meet WCAG 2.1 AA. A 3D product configurator embedded on a covered site is in scope. The parts that cause the most failures are not the form fields around the configurator. They are the interactive editing points on the 3D canvas itself.

Why a WebGL canvas is the hard part: A WebGL canvas is opaque to assistive technology. Screen readers see a single element with no internal structure. Drag handles and 3D editing icons rendered inside the canvas have no accessible name, no role, and no keyboard event unless you explicitly wire them up. The canvas is where most configurators fail an accessibility audit.

The approach: parallel accessible controls. The most practical solution is to keep the canvas as the visual surface and expose all configuration actions through accessible HTML controls placed alongside it. The canvas stays visually primary. The accessible path uses real inputs: number fields for dimensions, select elements for material and colour, buttons for actions. Every change made through either path updates the same state, so the 3D view reflects what the keyboard user has selected. This is more reliable than trying to make the canvas itself keyboard-operable, because screen reader behaviour on canvas elements varies significantly across browser and reader combinations.

Checklist for WCAG 2.1 AA compliance:

· Complete keyboard path: Every configuration option reachable by Tab and arrow keys, without requiring a mouse or touch gesture
· Visible focus indicators: Focus rings must meet AA contrast ratio (3:1 against adjacent colours). Do not suppress the browser default outline without providing a visible replacement
· No focus trap: Users who Tab into the configurator area must be able to Tab out of it. If the canvas receives focus, Escape or Tab must move focus to the next element
· Labels on every control: Each input, button, and select must have an associated label element or an aria-label attribute. "Width" is a label. An icon with no text is not
· Colour contrast on all text: Labels, values, and descriptions must meet 4.5:1 for normal text, 3:1 for large text
· No colour-only information: If selected state or an error state is indicated only by colour, add text or an icon
· Alternative to drag: WCAG 2.5.1 (Pointer Gestures) requires that path-based gestures have a single-pointer alternative
· Status messages announced: When the configurator updates, announce the change to screen readers using aria-live regions

The aria-label on canvas: Add a descriptive aria-label to your <canvas> element. Example: <canvas aria-label="Animated particle system representing sound waves"></canvas>. If the scene is interactive, add tabindex="0" and aria-label so screen reader users can focus on it and understand what it represents.

Testing: Close your mouse and Tab through the entire configurator. Every option must be reachable and operable. Run the page through the axe browser extension or Google Lighthouse (Accessibility audit). Target zero WCAG AA violations. If you use a screen reader during testing, NVDA on Windows and VoiceOver on Mac are free.

6.2 VAT & Tax — The Legal Reality of Selling Digital Goods

You are selling digital services. VAT is destination-based in almost every major market. The tax rate applied is the rate of the customer's country, not yours.

The scope: Over 120 countries levy VAT obligations on foreign or non-resident digital service providers. The EU, UK, Australia, Canada, and many others apply destination-based taxation.

The EU solution: OSS (One-Stop Shop). The OSS system lets you file a single quarterly VAT return covering all your B2C sales across all 27 EU member states, instead of registering separately in each country. You do not need 27 EU VAT registrations. The Non-Union One Stop Shop (OSS) lets a non-EU business register in one member state, charge the correct local rate on every sale, and file a single quarterly return covering the entire EU.

The threshold: EU-based SaaS businesses are subject to a €10,000 threshold for cross-border B2C digital services. Build VAT rules into your product early.

The 2027 change: From 1 January 2027, the OSS will be further extended to allow the inclusion of B2C supplies in the e-charging sector. Certain legislative clarifications for users of the One Stop Shop (OSS) and Import One Stop Shop (IOSS) schemes will also become effective.

The practical move: Integrate a tax calculation service (Stripe Tax, TaxJar, or similar) into your checkout before you launch. Manual VAT handling does not scale beyond the first country.

---

PART VII: THE PERFORMANCE ARCHITECTURE — THE INTERACTION BUDGET

7.1 Frame Rate Is Not Enough

An immersive interface can hold 60 frames per second and still feel broken. The frame-rate target answers one question: can the renderer produce frames quickly enough? It does not answer whether the page responds promptly to input, whether assets fit in memory, whether the device is throttling, or whether the experience remains operable without motion.

The correct framework is the interaction budget — five dimensions:

1. Response — how quickly the interface acknowledges input and shows a state change
2. Render — how much CPU and GPU work each visual state can consume
3. Residency — how much network, decoded asset, and GPU memory the experience can retain
4. Sustainability — how the experience behaves under heat, battery pressure, and long sessions
5. Equivalence — which non-3D, reduced-motion, and degraded paths preserve the same task

7.2 The 2026 Performance Budget

Metric Target
LCP ≤ 2.5s
INP ≤ 200ms
CLS ≤ 0.1
Initial JS ≤ 400KB gzipped for interactive pages
Frame budget 16.67ms/frame (60fps)
Draw calls Under 100
Triangle count (mid-range phones) 10,000–30,000
Triangle count (budget devices) Under 10,000

Concrete specs: Frame budget: 16.67ms/frame (60fps). Bundles: Lenis ~3 KB gzip · GSAP core + ScrollTrigger + SplitText ~150 KB total.

The critical mistake most teams make: Tying visual acknowledgment to the completion of an animation. A selection does not need to wait for a camera move, shader transition, or asset load before the interface confirms it. The control can change state immediately, an accessible status message can announce the selection, and the visual transition can continue as progressive detail.

7.3 GPU Budgets in CI

Tools like overdraw enforce 3D performance and GPU-leak budgets in CI. Any budget left unset is measured and reported but never fails the build. This means you can set hard limits on overdraw and memory leaks, and your CI pipeline will catch regressions before they ship.

---

PART VIII: SPATIAL AUDIO — THE IMMERSION MULTIPLIER

8.1 The Core Technology

Spatial audio is what makes a 3D scene feel like a place rather than a picture. In Web Audio, complex 3D spatializations are created using the PannerNode, which makes audio appear in 3D space — sounds flying over you, creeping up behind you, moving across in front of you. Libraries like three.js and A-frame harness its potential when dealing with sound.

8.2 Three.js Audio Architecture

Three.js has its own audio system built on top of the Web Audio API. AudioListener is the "virtual listener" — it routes all positional and global audio through a single Web Audio output bus, with its 3D transform (usually attached to the camera) determining the direction and distance of sounds the listener hears. PositionalAudio simulates the position and orientation of sound sources in 3D space through Web Audio's PannerNode.

8.3 The Reference Implementation

The flaviodelellis/Web-audio-project on GitHub simulates sound propagation through rays, reflecting and transmitting based on material absorption, reflection, and transmission coefficients. It dynamically alters volume, filters, and stereo balance based on listener position, and supports adding, moving, resizing, and removing objects with different materials — all with real-time audio processing.

8.4 For Your Digital Goods Store

Every product interaction should have a sound. A click, a whoosh, a chime. The sound should come from the object, not the browser. Spatial audio is not decoration. It is spatial cognition. Users locate themselves in a 3D world through sound faster than through vision.

The constraint: Audio must be user-initiated (browser autoplay policies) and must degrade gracefully. Provide a mute toggle that is always visible and keyboard-accessible.

---

PART IX: THE ANIMATION CHOREOGRAPHY STACK

9.1 Theatre.js vs. GSAP — The Philosophical Distinction

GSAP ScrollTrigger is "defined in code." Theatre.js is "defined in a timeline UI + played in code." If you want a designer to choreograph a cinematic sequence without touching code, Theatre.js is the only serious option. If you want programmatic control with precise easing and scroll-synced triggers, GSAP is the only serious option.

For your architecture: Use Theatre.js for the master camera timeline (the cinematic sequence) and GSAP for interaction feedback (button states, hover effects, gate responses). They are complementary, not competing.

The single RAF loop: When using Theatre.js alongside other animation libs (@react-three/fiber, GSAP, Lenis, etc.), you want all animation libs to use a single raf loop to keep the libraries in sync and also to get better performance. Theatre.js allows custom rafDrivers for this exact purpose.

9.2 The 2026 Animation Tool Stack

Tool Role Key Insight
GSAP Component-level animations, page transitions, ScrollTrigger The choreography engine. ScrollSmoother now free.
Lenis Smooth scroll, virtual scroll position The scroll decoupler. ~3 KB gzip. Wire to GSAP ScrollTrigger.
Theatre.js Camera choreography, scene timeline The single source of truth for the entire scene's timeline.
Rive Stateful interactive graphics Used by Unseen. Responds to inputs in real-time.
Framer Motion React component animations Production-ready gestures, layout animations, scroll effects.

The 2026 scroll architecture pattern: Cinematic (3D camera, shader effects, frame scrubbing) → Lenis + GSAP ScrollTrigger + Three.js / Theatre.js + GSAP SplitText.

---

PART X: THE TESTING ARCHITECTURE — VISUAL REGRESSION FOR WEBGL

10.1 The Core Problem

You cannot test a WebGL scene with DOM selectors. Traditional E2E fails for WebGL.

10.2 The Solution: Visual Regression Testing

Tools like quick-vrt support advanced video masking for Canvas, WebGL, and video players — they capture screenshots and compare them across test runs, ignoring dynamic elements that are expected to change.

The workflow: Run your scene through a headless browser. Capture the canvas at fixed camera positions. Compare against baseline images. Flag differences. Combine this with introspection-based assertions (e.g., "the camera should be at position X after this interaction") for deterministic testing.

SSR Visual Regression: Server-side rendering tests using headless-gl enable WebGL1 rendering in Node.js for visual regression testing without a browser. Playwright can be used for visual regression testing, comparing screenshots of the application to detect unintended visual changes.

Playwright + SwiftShader: Headless visual regression snapshots for WebGL games built with React Three Fiber. Assert the 3D content actually rendered — a truly blank canvas is the regression class the device-QA harness is supposed to catch.

Chrome 130+ removed the automatic SwiftShader fallback for WebGL. You must explicitly enable it in your testing environment. Combine with chrome-devtools-mcp and Lighthouse as an agent-assisted triage layer for 3D-viewer performance and asset regressions.

---

PART XI: DEPLOYMENT & CDN ARCHITECTURE

11.1 Cache Strategy

Static assets get Cache-Control: public, max-age=31536000, immutable with content-hashed URLs. HTML revalidates every load so deploys ship instantly.

Versioned CDN paths for each release: version1/xxxx, version2/xxxx. Files that should not be cached get no-cache headers at the origin or CDN level.

For your WebGL assets specifically: Draco-compressed meshes and KTX2 textures should be served with the immutable cache headers. The initial HTML shell should be tiny and fast. The 3D scene loads progressively after the shell renders.

11.2 Service Worker for Asset Caching

Cache large assets via service worker or Cache-Control: immutable + content-hash URL. This is especially important for repeat visits to an immersive experience where the 3D world is the product.

---

PART XII: ANALYTICS — WHAT ACTUALLY MATTERS

12.1 Standard Analytics Are Meaningless

Standard web analytics (page views, bounce rate) are meaningless for an immersive experience. You need to measure the interaction budget in production.

12.2 The Tools

Microsoft Clarity: Heatmaps and session recordings directly on your live site. Session replay, cobrowsing, and product analytics.

OpenReplay: Open-source session replay suite you can host yourself. Lets you see what users do on your web app, helping you troubleshoot issues faster.

TraceUX: Self-hosted, open-source session replay for your websites — a lean, privacy-first alternative to Smartlook and a Hotjar-like experience you control. With Smartlook shutting down, TraceUX provides a self-hosted path for teams that still need session replay and product feedback without handing their data to another hosted analytics platform.

Umami 3.2.0: Heatmaps and session replay with improved filtering to find individual sessions faster.

12.3 What to Measure Beyond Clicks

· Time-to-first-interaction — how long before the user performs their first meaningful action
· Gate completion rate — what percentage of users successfully complete each interactive gate
· Camera progression depth — how far through the narrative arc users actually scroll
· Audio engagement — mute rate, unmute rate, audio interaction frequency
· Reduced-motion path adoption — how many users are on the accessibility fallback
· Frame drop correlation — which scenes correlate with session abandonment

The insight: A user who reaches the 80% mark of your narrative but bounces on a specific gate is not a "bounce." They are a failed gate. The gate is the problem, not the user.

---

PART XIII: REDUCED MOTION — THE NON-NEGOTIABLE

13.1 The Requirement

prefers-reduced-motion: reduce must pause or disable continuous rotation, camera fly-throughs, and particle motion. WCAG 2.3 requires respecting user motion preferences. Large-field continuous motion can trigger vestibular discomfort even without prefers-reduced-motion set.

13.2 The Implementation

Detect the media feature in JavaScript (window.matchMedia('(prefers-reduced-motion: reduce)').matches) and provide an entirely separate animation path. This is not "reduce the animation speed." It is "provide an equivalent, static or minimal-motion experience that preserves the same task" — this is the Equivalence dimension of the interaction budget.

The practical fallback: For a cinematic scroll experience, the reduced-motion path should use instant camera cuts instead of smooth transitions, static hero states instead of particle systems, and text descriptions instead of animated visual feedback.

Forward-looking: Also honor prefers-reduced-data for users on metered or data-constrained connections. Extend the media query to include (prefers-reduced-data: reduce) so visitors on constrained connections get the same motion-duration token zeroing and animation backstop as reduced-motion users.

---

PART XIV: THE 30+ REPOSITORY AND RESOURCE ARSENAL

Every repository below was verified as actively maintained or recently updated.

Core 3D & Rendering

# Repository What It Does Why It Matters
1 Three.js (r185+) 3D rendering engine The foundation. Unseen uses it. WebGPU-first as of 2026.
2 React Three Fiber React renderer for Three.js Declarative 3D in React. Full WebGPU integration still maturing as of Q2 2026.
3 Drei R3F helper library Pre-built camera controls, loaders, shaders, abstractions.
4 Three-VFX GPU-accelerated particle system High-performance particles for WebGPU, supports R3F, TresJS, Threlte.
5 three.quarks High-performance VFX library TypeScript, visual editor, general-purpose particle system.
6 three-particles Particle system with visual editor WebGPU compute support, TSL-based noise.

Animation & Scroll Choreography

# Repository What It Does Why It Matters
7 GSAP Animation platform ScrollTrigger, CustomEase, ScrollSmoother. The choreography layer.
8 GSAP Skills for AI Agents AI agent index for GSAP ScrollTrigger reference files, 2026 updated patterns.
9 Lenis Smooth scroll library Lightweight (~3 KB gzip), performant, built for WebGL scroll syncing and GSAP integration.
10 Theatre.js Motion design editor for the web Visual timeline editor that exports JSON; R3F integration for 3D scene keyframing. Custom rafDrivers for single-loop sync.
11 Rive Interactive animation runtime Stateful graphics that respond to inputs. Used by Unseen.
12 Framer Motion React animation library Production-ready gestures, layout animations, scroll effects.

E-commerce & Digital Goods

# Repository What It Does Why It Matters
13 Medusa Headless commerce engine 35.7k stars, MIT license, no transaction fees, modular. The backend.
14 Saleor GraphQL-first headless commerce 22.4k stars, Django-based, MACH architecture.
15 Vercel Commerce Next.js commerce template React Server Components, Server Actions, Suspense, useOptimistic.
16 SimpleCard Digital goods delivery platform Spring Boot 3 + Next.js 16, multi-payment, risk control, admin panel.
17 TishCommerce Self-hosted digital downloads Database-free, zero monthly fees, themes/plugins/ebooks.
18 DigitalHippo Fullstack digital products marketplace Modern Next.js e-commerce for digital products.

3D Product & Configurator

# Repository What It Does Why It Matters
19 Sketchfab 3D Product Configurator Configurator with Sketchfab API Fully dynamic configuration for any 3D model.
20 Product Configurator Color/texture/part customization Live 3D previews with Three.js, designed for e-commerce.
21 Burger House 3D Real GLB models without load penalty React + Three.js + GSAP, deployed to production 2026.

Immersive Experiences & Templates

# Repository What It Does Why It Matters
22 Immersive Web SDK WebXR framework by Meta Interactions, locomotion, spatial UI. Runs in VR/AR with desktop fallback.
23 Kage Single-file cinematic Three.js experience Scroll-driven 3D world without complex build step. Learning gold.
24 F.W.E. Cinematic browser-native 3D interface Reacts to cursor, responds to scroll, remembers movement.
25 Ocean Depths Interactive ocean dive storytelling Cinematic narrative from surface to deep layers.
26 Portfolio ITom Immersive 3D portfolio React Three Fiber + GSAP + advanced WebGL rendering architecture, 2026 standards.

Hugging Face — 3D Generation & AI Assets

# Resource What It Does Why It Matters
27 TRELLIS.2-4B Image-to-3D, PBR materials, MIT license 4B params, 3s-60s generation, production-ready PBR output. Best overall quality.
28 Hunyuan3D 2.1 Image-to-3D with high-fidelity textures 3.3B MoE DiT, 4096-latent ShapeVAE, DINOv2-Large. Best for textures.
29 Pixal3D SIGGRAPH 2026 pixel-aligned 3D generation High-fidelity assets from single image. Browser-based Gradio demo.
30 HunyuanWorld-Mirror Multi-view/video → explorable 3D worlds Seconds to generate navigable 3D worlds.
31 HY-World 2.0 Text/image/video → meshes or Gaussian Splattings Multi-modal world model.
32 3D Model Zoo Curated collection of 3D generative models All models in one place.

Performance & Pipeline

# Repository What It Does Why It Matters
33 Draco 3D geometry compression Mandatory for mobile. Unseen's 10MB site depends on this.
34 gltf-transform One command for Draco + KTX2 + Meshopt 80%+ reduction. The 2026 recommended pipeline.
35 gltfjsx Compress and convert GLTF to JSX Used by INK Games.
36 overdraw 3D performance and GPU-leak budgets for CI Set hard limits on overdraw and memory leaks.

Creative Coding & Shaders

# Repository What It Does Why It Matters
37 awesome-creative-coding Curated generative art, WebGL, interaction design The reference list for creative coders.
38 VFX-JS Shader effects on existing images/videos No full scene needed. Lightweight.
39 Unicorn Studio Layer/node-based shader composition ~29KB gzipped. Figma-style workflow.
40 Shaderlib Curated GLSL shader functions Toolkit for frontend WebGL rendering.

---

PART XV: THE UNCOMFORTABLE TRUTHS

1. You will not ship at 10MB on your first attempt. ZERO took four months. They built multiple versions of burning money effects, different glass shatter timings, and several shader ideas before settling on what worked. Budget for iteration.

2. AI is the prototyping layer, not the shipping layer. Unseen built the draw-a-zero interaction in 48 hours using AI. Then they spent the rest refining it. Use AI to get to a working prototype fast. Use human taste to decide what stays.

3. The pipeline is more important than the pixels. Unseen's Theatre.js version control, their PHP filesystem API, their designer-developer handoff workflow — this is what lets them ship consistently. Build your pipeline first.

4. One building, infinite camera work. The forum insight is the most valuable sentence in this entire document. You do not need a thousand assets. You need one world, explored with intention.

5. The gate is the experience. Without required interactions, you have a scroll-driven animation. With gates, you have a cinematic narrative where the user is the protagonist.

6. The gap between a demo and a product is not in the shaders. It is in the accessibility controls, the VAT registration, the presigned URL expiration, the interaction budget, and the prefers-reduced-motion fallback. Unseen Studio wins awards because their work is both beautiful and works. The beauty gets attention. The production quality keeps it alive.

---

PART XVI: THE COMPLETE FINAL CHECKLIST

Layer Requirement Status
Rendering Single WebGL canvas, WebGPU renderer, Draco + KTX2 ✅ Covered
Animation Theatre.js for camera, GSAP for interactions, Lenis for scroll, single RAF loop ✅ Covered
Accessibility Parallel HTML controls, keyboard path, aria-live, focus management, WCAG 2.1 AA ✅ Covered
Audio Spatial audio via Web Audio API, mute toggle, user-initiated ✅ Covered
Performance Interaction budget (response, render, residency, sustainability, equivalence) ✅ Covered
Security Presigned URLs, key generation, rate limiting, idempotent webhooks ✅ Covered
Tax OSS registration, destination-based VAT, automated calculation ✅ Covered
Testing Scene graph introspection, visual regression, headless capture, Playwright + SwiftShader ✅ Covered
Deployment CDN with immutable caching, versioned paths, progressive loading ✅ Covered
Analytics Gate completion, camera depth, frame drop correlation, session replay ✅ Covered
Reduced Motion Separate animation path, static equivalents, vestibular safety ✅ Covered
Commerce Medusa/Saleor headless, digital fulfillment, no transaction fees ✅ Covered
3D Generation TRELLIS.2, Hunyuan3D 2.1, Pixal3D pipeline ✅ Covered
Shader Language TSL (Three Shading Language) — single source for WGSL + GLSL ✅ Covered

---

PART XVII: THE CORRECT FIRST MOVE

Don't start with Three.js. Don't start with GSAP. Start with Theatre.js and Blender. Build one scene. One building. One environment. Hook every property to Theatre. Sequence the camera. See how it feels. Then bring in the rendering layer.

The reason most immersive sites fail is that they start with the tech and try to make it cinematic. The reason Unseen succeeds is that they start with the cinematic intent and choose the tech to serve it.

You now have the blueprints, the tools, the references, the production architecture, the legal requirements, and the performance budgets. The work is in the taste, the iteration, the willingness to throw away three versions of an effect before the fourth one lands — and the discipline to ship the accessibility layer, the security layer, and the tax layer before you ship the particles.

The complete pipeline: generate 3D assets via Hugging Face models → compress through gltf-transform optimize (Meshopt + KTX2) → build the scene in React Three Fiber with WebGPU → choreograph with Theatre.js (camera) + GSAP (interactions) + Lenis (scroll) → gate every transition → connect commerce via Medusa → enforce the interaction budget → test with Playwright visual regression → deploy to CDN with immutable caching → measure gate completion and camera depth in production → and honor prefers-reduced-motion from day one.

The beauty gets attention. The production quality keeps it alive.