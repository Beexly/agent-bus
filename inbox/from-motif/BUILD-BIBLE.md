# THE IMMERSIVE BUILD BIBLE — v1.1
**Status:** standing doctrine for all immersive/3D/commerce builds. Filed 2026-09-12 by Motif. v1.1 adds §§23–26 from the verified extreme-layer deep pass (Tracks R/S/T).
**Derives from (canonical, verbatim, unedited):**
- `SOURCE-2026-09-12-deepseek-10-missing-layers.md` (Garrett's paste #1, ~15:18 CDT)
- `SOURCE-2026-09-12-deepseek-unseen-autopsy-full.md` (Garrett's paste #2, ~15:20 CDT)
- `SOURCE-2026-09-12-deepseek-extreme-RST.md` (Garrett's paste #3, ~15:37 CDT — Tracks R/S/T deep pass)
- Verification: `VERIFY-2026-09-12-extreme-RST.md` (Motif's same-day primary-source checks; governs which claims below are stated as fact vs hypothesis)
- If this bible and a SOURCE file disagree, the SOURCE file wins. Flag the conflict in the dialogue channel.

> **THE DRIVING LINE (Garrett, standing):** "They were creating an immersive world cinematic experience. I want people to experience something they never have before on a website. I want them to be in complete awe of what's happening — while still being able to easily navigate and get to where they need to be in an efficient and effective way."
> **The corollary:** "One world, explored properly. The camera is the storyteller. The assets are supporting evidence."
> **The standard:** "Beauty gets attention. Production quality keeps it alive."

## 0. How to use this document (builder freedom charter)

This bible is **constraints + intent, not a script**. Within these constraints you have full creative freedom: invent interactions, propose designs, choose techniques, throw away your own work and try again. The doctrine tells you what "done" means and what the floor is — it does not tell you what the experience should feel like. That part is yours.

**How we work (two-way):** You are not a ticket-taker. When a section of this bible is ambiguous, or you see a better way, or you need a judgment call — open a dialogue thread (see `DIALOGUE-PROTOCOL.md`). Motif answers with architecture reasoning, not orders. Propose → discuss → commit → build → Motif QCs everything against this bible (trust no claims, including yours and mine). Every decision, deviation, defect, and fix goes in your build report and STATUS.md.

**Reading order for a new immersive build:** this bible §1–§2 (vision) → §19 (pipeline-first — build this before pixels) → §3–§5 (rendering/animation/assets) → §6 if you need generated assets → §7–§8 (a11y/audio — from day one, not at the end) → §9 (budgets) → §16 (commerce) → §10–§11 (security/tax before launch) → §12–§14 (testing/deploy/analytics).

---

## 1. Vision — what we're actually building

An **immersive world cinematic experience**: the visitor is inside a continuous 3D world, moved through it by camera choreography, participating through gates — and at every moment able to navigate efficiently to what they need. Awe and efficiency are the brief, not a tradeoff.

**Design principles:**
1. **One world, explored properly.** You do not need a thousand assets. One environment, camera work a → b → c, shader transitions between movements. Restraint in assets, extravagance in camera.
2. **The camera is the storyteller.** Narrative = camera progression. Every section of the site is a camera position; every transition is a camera move.
3. **Gates make participants.** A gate is a required interaction at a section transition (draw, hold, solve, choose). Without gates you have a scroll animation; with gates the user is the protagonist. Design at least one gate per major act — and every gate must be completable by keyboard alone (§7).
4. **Progressive disclosure of wonder.** The first viewport must deliver awe in under 2.5s (LCP budget, §9). Depth reveals itself to those who continue.
5. **Efficiency is sacred.** Any destination (product, price, contact, checkout) reachable in ≤2 interactions from anywhere. The cinematic path is the default; the efficient path is always present (persistent nav, skip links, reduced-motion instant cuts).

## 2. Experience design — narrative & gates

**Narrative structure (from the ZERO autopsy):** acts connected by gates, with an explicit arc. Example arc: promise → disruption → evidence → transformation → arrival → exploration. Your arc will differ; it must exist and be statable in one paragraph before you build.

**Gate catalog (mechanics that work):**
- Draw/shape gesture (ZERO: signed angle > 5.76 rad, roundness CV < 0.35, closure < mean radius) — with a keyboard alternative (e.g., trace via arrow keys, or an equivalent "hold to confirm")
- Hold-to-trigger (shatter, launch, reveal) — press-and-hold with visible progress; keyboard: hold Space/Enter
- Velocity-reactive elements (BlueYard orb: responds to pointer *velocity*, not position — alive, not reactive)
- Choice gates (branch the narrative; each branch must preserve §7 equivalence)

**Gate rules:**
- Every gate announces itself (what to do, in text — never gesture-only with no explanation).
- Every gate has a single-pointer/keyboard alternative (WCAG 2.5.1, §7).
- Gate completion is measured (§14). A gate with <60% completion is a failed gate — redesign the gate, not the user.
- Never gate *navigation itself* — gates guard narrative progression, not the menu, not checkout, not contact.

---

## 3. Rendering architecture

**The single canvas doctrine.** One persistent WebGL canvas behind the DOM. Every "page" is a camera position within it. DOM (text, buttons, commerce) scrolls independently and syncs to the 3D timeline. Multiple canvases kill performance (browser 3D-context limits) — never do it.

**Renderer: WebGPU is the production standard (2026).** Safari 26 shipped September 2025; WebGPU is Baseline since January 2026; ~70–75% user coverage as of May 2026. Three.js r171+: `import { WebGPURenderer } from 'three/webgpu'`, zero-config, silent WebGL2 fallback on older hardware. Up to 3.8× compute-bound gains over WebGL. **Never use WebGLRenderer unless targeting pre-2022 hardware.**

**TSL (Three Shading Language).** Author shaders as JavaScript function compositions; one TSL shader compiles to WGSL *and* GLSL — no duplicated shader maintenance. TSL Graph visual editors are emerging: shader authoring is opening to designers. Prefer TSL over hand-written GLSL for all new shader work.

**Compute shaders.** Million-unit particle systems, GPU collision detection, lighting calculations — realistic with WebGPU compute. Draw-call setup is far cheaper than WebGL; heavier scenes run smoothly on the same hardware.

**React integration decision tree:**
- Full-site continuous world (our case) → manage the Three.js renderer **outside** React's lifecycle (Trionn's call: "direct control over the shared render"). R3F re-render overhead is a liability at this scale.
- Componentized 3D scenes/product viewers → React Three Fiber + Drei is correct.
- R3F WebGPU integration was still maturing as of Q2 2026 — verify before choosing it.

**Physics:** Rapier. **Interactive graphics:** Rive (stateful, responds to inputs in real time — used by Unseen).

## 4. Animation choreography

**The philosophical split (not a competition):**
- **Theatre.js = the master camera timeline.** "Defined in a timeline UI + played in code." The single source of truth for the entire scene's timeline. The designer choreographs without touching code.
- **GSAP = interaction feedback.** "Defined in code." Programmatic control, precise easing, scroll-synced triggers — button states, hover effects, gate responses. ScrollTrigger, CustomEase, ScrollSmoother (now free).
- **They are complementary.** Theatre.js drives the cinematic sequence; GSAP drives everything that reacts to the user.

**The scroll must be yours.** ZERO uses no native scroll — a single normalized progress value (0→1) fully controlled by code. Lenis is the closest practical tool: decouples smooth scrolling from native scroll events, gives you a virtual scroll position to drive animations (~3KB gzip, built for WebGL scroll sync + GSAP integration). Rule: **ship Lenis by default, honor prefers-reduced-motion.** The browser's scroll is never the animation driver — your code is.

**Single RAF loop.** When Theatre.js runs alongside GSAP/Lenis/R3F, force all animation libraries onto one requestAnimationFrame loop (Theatre.js custom rafDrivers exist for exactly this) — keeps libraries in sync and improves performance.

**2026 scroll pattern:** cinematic layer (3D camera, shader effects, frame scrubbing) → Lenis + GSAP ScrollTrigger + Three.js/Theatre.js; type → GSAP SplitText.

## 5. Asset pipeline — generate → compress → scene

**The pipeline that ships:**
```
Blender / Houdini → gltf-transform optimize (Draco + KTX2, one command) →
gltfjsx (compress + convert to JSX) → Theatre.js sequences →
web worker loading with progress → single WebGL scene
```

**The compression command (2026 recommended):**
```bash
gltf-transform optimize input.glb output.glb \
  --compress meshopt \
  --texture-compress ktx2 \
  --texture-compress webp
```
`gltf-transform optimize` alone routinely drops **80%+** — this is the ZERO "secret." Not proprietary. A CLI tool.

**Compression decision matrix:**

| Scenario | Geometry | Textures | LODs |
|---|---|---|---|
| Product viewer | Meshopt | WebP / KTX2 | Optional |
| Game assets | Meshopt | KTX2 | Required |
| Mobile | Meshopt | KTX2, 512–1024px | Required |
| E-commerce batch | Draco (smaller) | WebP | Optional |

**Texture rules:** ASTC compression is **mandatory** for mobile. Never ship 4K textures for every material — it crashes mobile GPUs. Distant objects: bake lighting into lightmaps, use unlit shaders.

**Bake everything you can.** Baked animations + real-time interactive elements (Sea We Breathe). Custom exporters beat runtime computation (Igloo's VDB-to-browser exporter: volume data smaller than a typical website image). Compression and authoring happen **before** the browser ever sees the file.

**Procedural where possible.** Don't model every asset — build generators. Igloo's crystal-growth algorithm (pick a container shape, grow ice inside it, unique enclosure every time) scales without manual modeling. For a digital-goods store: **product visualizations procedurally generated from product data, not pre-rendered per SKU.**

**Loading architecture:** web worker loading with progress UI. Tiny fast HTML shell renders first; 3D scene loads progressively after. Draco meshes + KTX2 textures served with immutable cache headers (§13).

---

## 6. 3D generation — the Hugging Face pipeline (production-usable 2026)

**Ranked, best first:**

1. **TRELLIS.2-4B (Microsoft) — best overall quality.** 4B params, single image → GLB with production-ready PBR materials (base color, metallic, roughness, opacity maps usable directly in engines/DCCs, no retexturing). O-Voxel sparse voxel representation + SC-VAE 16× spatial compression (no implicit neural field overhead). **MIT license — fully open, commercial use allowed.** Speed on H100: 3s (512³) / 17s (1024³) / 60s (1536³). VRAM: 24GB minimum; RTX 4070 16GB works with RAM offloading.
2. **Hunyuan3D 2.1 (Tencent) — best textures.** 3.3B MoE DiT (21 blocks, 6 MoE layers × 8 experts), 4096-latent ShapeVAE, DINOv2-Large conditioning, Paint v2.0 Turbo texture generation. Updated August 2026. Validated photorealistic in Unity 6.4.4f1 URP.
3. **Pixal3D (Lightfielder) — SIGGRAPH 2026.** Pixel-aligned generation, high fidelity from a single image. Browser Gradio demo, no install — fastest evaluation path.
4. **HunyuanWorld-Mirror** — multi-view/video → explorable 3D worlds in seconds.
5. **HY-World 2.0** — text/image/video → meshes or Gaussian splats (multi-modal world model).
6. **3D Model Zoo** — curated collection of all 3D generative models in one place.

**Store workflow:** reference images → TRELLIS.2 or Hunyuan3D 2.1 → `gltf-transform optimize` (Meshopt + KTX2) → Theatre.js sequences → single WebGL world + commerce DOM layer. The proven agent pattern: chain HF Spaces (image space → 3D space) to generate entire galleries programmatically — a full 3D Paris gallery with cinematic viewer was built this way. **This is the future asset pipeline: programmatic, not manual.**

**Cost reality:** budget per hero asset is real but documented (a two-hero-piece Hunyuan3D PBR pipeline cost is on record). Track generation cost per SKU; procedural variants (§5) amortize it.

## 7. Accessibility — WCAG 2.1 AA (legal floor, not a feature)

Since June 2025 the **EU Accessibility Act** (and Germany's BFSG transposition) requires many commercial websites to meet WCAG 2.1 AA. A 3D configurator on a covered site is in scope. Note: WCAG 2.2 is the current recommendation — meet 2.1 AA as the floor, apply 2.2 additions (focus appearance, dragging movements, accessible authentication) where they strengthen the build.

**The core problem:** `<canvas>` contributes nothing to the accessibility tree. Screen readers see "canvas" and nothing else. Drag handles, 3D editing icons, interactive hotspots rendered in-canvas have no accessible name, no role, no keyboard event unless explicitly wired.

**The solution — parallel accessible controls (the only reliable production approach):** keep the canvas as the visual surface; expose **every** configuration action through real HTML controls alongside it. Number fields for dimensions, selects for material/color, buttons for actions. Both paths update the same state; the 3D view reflects keyboard selections. More reliable than making canvas keyboard-operable (screen reader × browser behavior on canvas varies wildly). Hidden-DOM-node-per-object updated per frame works for static scenes but **falls apart for moving scenes** — known unsolved problem; parallel controls are the answer.

**Compliance checklist (all mandatory, zero violations is the target):**
- **Complete keyboard path** — every option reachable by Tab + arrow keys. No mouse/touch gesture required for anything.
- **Visible focus indicators** — ≥3:1 contrast against adjacent colors. Never suppress the browser default outline without a visible replacement.
- **No focus trap** — Tab into the configurator, Tab (or Escape) out. Focus must always move forward.
- **Labels on every control** — `<label>` or `aria-label` on each input/button/select. An icon with no text is not a label.
- **Contrast** — 4.5:1 normal text, 3:1 large text, on all labels, values, descriptions.
- **No color-only information** — selected/error states get text or icon, never color alone.
- **Drag alternatives** — WCAG 2.5.1: every path-based gesture gets a single-pointer alternative (number inputs substitute for drag handles).
- **Status messages announced** — `aria-live` regions announce price changes, selection updates, errors. Keyboard users are never left guessing.

**Canvas rules:** decorative canvas → `aria-hidden="true"`. Representative canvas → descriptive `aria-label` (e.g. `aria-label="Animated particle system representing sound waves"`). Interactive canvas → `tabindex="0"` + `aria-label` so screen reader users can focus and understand it.

**Gates and a11y (reconciliation):** every gate (§2) must be completable via keyboard with announced instructions and live-region feedback. A gate nobody on a keyboard can pass is a defect, not a design.

**Testing:** close the mouse, Tab through everything. axe browser extension or Lighthouse Accessibility audit — **target zero WCAG AA violations**. NVDA (Windows) / VoiceOver (Mac) are free. If it reads "canvas" or nothing, the HTML controls need work.

## 8. Audio — the immersion multiplier (first-class concern)

**Spatial audio is what makes a 3D scene feel like a place rather than a picture.** Web Audio `PannerNode` gives true 3D spatialization; Three.js `PositionalAudio` attaches sound sources to 3D objects — pan, attenuation, and filtering follow listener position and material properties.

**Reference implementation:** flaviodelellis/Web-audio-project — ray-based sound propagation with material absorption/reflection/transmission coefficients; dynamic volume, filtering, and stereo balance by listener position; add/move/resize/remove objects with different materials, all real-time.

**Store audio design:** every product interaction gets a sound — click, whoosh, chime — **from the object, not the browser**. Spatial audio is spatial cognition: users locate themselves in a 3D world through sound faster than through vision.

**Constraints (hard):** audio is user-initiated (browser autoplay policies) — the first sound follows the first user gesture. Graceful degradation when audio is unavailable. **A mute toggle is always visible and keyboard-accessible.**

## 9. Performance — the interaction budget

60fps is necessary but not sufficient. An interface can hold 60fps and still feel broken. The frame budget answers only whether the renderer produces frames fast enough — not input responsiveness, memory fit, thermal throttling, or operability without motion.

**The five dimensions:**
1. **Response** — input acknowledgment speed; the interface confirms *immediately*, never waiting on animation completion.
2. **Render** — CPU/GPU cost per visual state.
3. **Residency** — network, decoded-asset, and GPU memory retained.
4. **Sustainability** — behavior under heat, battery pressure, long sessions.
5. **Equivalence** — non-3D / reduced-motion / degraded paths that preserve the same task.

**The critical rule:** never tie visual acknowledgment to animation completion. The control changes state instantly, an accessible status message announces it (§7), the camera move / shader transition / asset load continues as progressive detail.

**2026 performance budget (all mandatory):**

| Metric | Target |
|---|---|
| LCP | ≤ 2.5s (43% of sites fail this — be in the 57%) |
| INP | ≤ 200ms |
| CLS | ≤ 0.1 |
| Initial JS (interactive pages) | ≤ 400KB gzipped |
| Frame budget | 16.67ms (60fps) |
| Draw calls | < 100 |
| Triangles, mid-range phones | 10,000–30,000 |
| Triangles, budget devices | < 10,000 |
| Total shipped experience | ~10MB ceiling (ZERO proved it: 1GB+ source → <10MB) |

**Reference weights:** Lenis ~3KB gzip; GSAP core + ScrollTrigger + SplitText ~150KB total.

**Enforce in CI:** `overdraw` sets hard budgets on 3D overdraw and GPU-leak detection — unset budgets are measured but never fail the build, so **set them explicitly** and let CI catch regressions before they ship.

---

## 10. Security & fulfillment — digital goods delivery is a security problem

**The rules (all mandatory before selling anything):**
- Never attach high-value files to email. Delivery = **time-limited download URLs tied to purchaser accounts**.
- **Presigned URLs, ~15-minute expiry** (reference: 60-second presigned URLs against Cloudflare R2 — a stolen link expires before resharing; auto-expiry ≈15 min standard; revoke on access withdrawal).
- **License keys generated on payment success** — never a static spreadsheet. Rate-limit activation APIs (brute-force defense). Per-key activation limits (one key ≠ unlimited devices).
- **3–5 downloads per purchase.** Watermark PDFs with purchaser email where piracy is common.
- Velocity checks on card attempts; block disposable emails on high-risk SKUs; monitor chargeback rates per product.

**The architecture for scale:** Stripe/Shopify transactional webhooks → trigger an **external serverless engine** immediately after successful payment. This decouples storefront checkout from key-generation/database work — storefront performance is never affected by backend processing. **The webhook endpoint processes asynchronously** — long-running DB queries inside the handler will time out.

**Idempotency is law:** the same webhook firing twice must not issue two keys. Design every delivery path idempotent on retry.

**Build-vs-buy threshold:** native Shopify digital downloads cap at 5GB and cannot generate/track/revoke serial keys. Move custom when app subscription fees approach **£6,000–£8,000/year** or when deep licensing-server integration is needed.

## 11. VAT & tax — the legal reality of digital goods

You are selling digital services. **VAT is destination-based** in almost every major market — the customer's country's rate applies, not yours. 120+ countries levy VAT on foreign/non-resident digital service providers (EU, UK, Australia, Canada, and many more).

**EU: OSS (One-Stop Shop).** Register in **one** EU member state; file a **single quarterly return** covering B2C sales across all 27 states. OSS applies each destination country's rate automatically (**17–27%**). Non-EU businesses selling to EU customers register via OSS too. **From 1 January 2027** OSS extends further (e-charging B2C supplies; OSS/IOSS clarifications take effect) — design for it now.

**Thresholds & notes:** €10,000 threshold for EU cross-border B2C digital services. Philippines: 12% VAT on foreign digital services. Sri Lanka: 18% planned.

**The practical move (before launch):** integrate **Stripe Tax or TaxJar** into checkout. Manual VAT handling does not scale beyond the first country. Build VAT rules into the product early.

## 12. Testing — WebGL needs its own discipline

**The core problem:** you cannot test a WebGL scene with DOM selectors. Traditional E2E fails for WebGL.

**Two complementary approaches (use both):**
1. **Introspection** — expose scene state (camera position, object visibility, material properties) to the test runner via a debug API; assert through a communication bridge (e.g. "camera is at position X after this interaction").
2. **Visual regression testing (VRT)** — headless browser, capture canvas at fixed camera positions, compare against baselines, flag differences. Tools: **quick-vrt** (advanced video masking for Canvas/WebGL/video players — ignores expected-dynamic elements), **mcp-webgl-visual-regression** (MCP server, automated screenshot comparison).

**Environment notes:** **Chrome 130+ removed the automatic SwiftShader fallback for WebGL — explicitly enable it in your test environment.** SSR visual regression via **headless-gl** (WebGL1 rendering in Node.js, no browser). Playwright for snapshot comparison. Assert the 3D content actually rendered — a truly blank canvas is its own regression class. Layer on **chrome-devtools-mcp + Lighthouse** as agent-assisted triage for 3D-viewer performance and asset regressions.

## 13. Deployment & CDN

**Cache strategy (exact):**
- Static assets: `Cache-Control: public, max-age=31536000, immutable` + content-hashed URLs.
- HTML: revalidates every load — deploys ship instantly.
- Versioned CDN paths per release (`version1/xxxx`, `version2/xxxx`).
- Non-cacheable files: `no-cache` at origin or CDN level.
- WebGL assets (Draco meshes, KTX2 textures): immutable cache headers.
- **Service worker** (or immutable + content-hash) for large-asset caching — critical for repeat visits where the 3D world IS the product.

**Loading architecture:** tiny fast HTML shell → 3D scene loads progressively after shell render → web worker asset loading with progress UI. User state persists in IndexedDB/localStorage; minimize server calls.

## 14. Analytics — measure the interaction budget in production

Standard analytics (page views, bounce rate) are **meaningless** for immersive experiences.

**Tools:** Microsoft Clarity (heatmaps, session recordings, on-site widget), Mouseflow / Smartlook (session replay, heatmaps by experience/variation), **OpenReplay** / **TraceUX** (self-hosted session replay — TraceUX is the privacy-first path as Smartlook winds down), Umami 3.2.0 (heatmaps + replay with session filtering).

**Measure beyond clicks:**
- **Time-to-first-interaction** — how long before the first meaningful action
- **Gate completion rate** — % of users completing each interactive gate
- **Camera progression depth** — how far through the narrative arc users actually scroll
- **Audio engagement** — mute/unmute rates, audio interaction frequency
- **Reduced-motion path adoption** — how many users are on the accessibility fallback
- **Frame drop correlation** — which scenes correlate with session abandonment

**The doctrine:** a user who reaches 80% of the narrative but bounces on a gate is not a "bounce." **They are a failed gate. The gate is the problem, not the user.** Fix the gate.

## 15. Reduced motion & reduced data — non-negotiable

`prefers-reduced-motion: reduce` **must** pause/disable continuous rotation, camera fly-throughs, and particle motion (WCAG 2.3). Large-field continuous motion can trigger vestibular discomfort even without the setting.

**Implementation:** `matchMedia('(prefers-reduced-motion: reduce)').matches` → an **entirely separate animation path**. Not slower animation — an equivalent static/minimal-motion experience preserving the same task (the Equivalence dimension, §9): instant camera cuts instead of smooth transitions, static hero states instead of particles, text descriptions instead of animated feedback.

**Forward-looking:** also honor **`prefers-reduced-data`** — metered/constrained connections get the same motion-duration zeroing and animation backstop as reduced-motion users.

---

## 16. Commerce — headless, no hostages

Standard platforms (Shopify, WooCommerce as monoliths) are designed for product grids and checkout funnels — **hostile to immersive experiences**. Architecture: headless commerce backend + custom frontend.

| Platform | Verdict |
|---|---|
| **Medusa** (35.7k+ stars, MIT, no transaction fees, 18 domain modules incl. digital products) | **Default choice.** Developer-first, composable, API-first Node.js. The backend. |
| **Saleor** (22.4k stars, GraphQL-first, Django, MACH; powers Lush, Breitling) | Strong alternative for high-volume / GraphQL-native teams. |
| **Shopify Hydrogen** | Exists, but traps you in Shopify's APIs. |
| **Gumroad** | Solo creators, zero infrastructure. Fine for v0 revenue, not the destination. |
| **Tebex** | Game-developer monetization; headless API (browse packages, baskets, checkout via public token). |
| **Vercel Commerce** | Next.js template (RSC, Server Actions, Suspense, useOptimistic) — storefront reference. |
| **SimpleCard / TishCommerce / DigitalHippo** | Reference architectures for digital-goods delivery, self-hosted, and Next.js marketplace patterns. |

Decision: **Medusa unless a specific requirement points elsewhere.** Revisit at the build-vs-buy threshold (§10).

## 17. Creative references — the bar, annotated

- **Unseen Studio / unseen.co** — the primary reference. Awwwards Design Studio of the Year; "refreshingly unexpected ideas and striking visuals." Study ZERO (gates, normalized progress, frost-shader reveal), Symphony of Vines (Theatre.js pipeline), BlueYard (fluid sim, velocity-reactive orb), Sea We Breathe (baked animation).
- **Monolith Studio** — FWA + Awwwards + CSSDA in one cycle. Tattoo studio site: editorial typography, near-black palette, Cinema 4D 3D, Webflow. Proof that restraint + craft wins across every jury.
- **La Revoltosa** — 1953 Spanish soda brand revived through Three.js renders, tattoo art, GSAP motion. Heritage IP + modern 3D = template for brand-revival work.
- **MERSI Architecture (FLOT NOIR)** — visual sophistication with architectural precision; the hard combination.
- **Utsubo "Best Three.js Websites 2026"** — living compilation documenting each winner's specific techniques. Check quarterly.
- **Kage** — single-file cinematic Three.js experience, no complex build step. Learning gold for the "one world" discipline.
- **F.W.E.** — cinematic browser-native 3D interface; reacts to cursor, responds to scroll, remembers movement.
- **Ocean Depths** — interactive ocean-dive storytelling; the narrative-arc reference.
- **Portfolio ITom** — R3F + GSAP + advanced WebGL rendering, 2026 standards.

**The lesson, again:** the techniques are documented. The gap is execution quality and the willingness to iterate — not access to information.

## 18. Repository arsenal — verified 2026

**Core 3D & rendering:** three.js (r185+, WebGPU-first) · React Three Fiber (declarative React 3D; WebGPU integration maturing) · Drei (camera controls, loaders, shader abstractions) · Three-VFX (GPU particles, WebGPU) · three.quarks (VFX library + visual editor) · three-particles (visual editor, WebGPU compute, TSL noise).
**Animation & scroll:** GSAP (+ ScrollTrigger, CustomEase, ScrollSmoother) · GSAP Skills for AI Agents (2026 agent reference) · Lenis (~3KB, WebGL scroll sync) · Theatre.js (timeline UI → JSON; custom rafDrivers; R3F keyframing) · Rive (stateful interactive graphics) · Framer Motion (React gestures/layout/scroll).
**E-commerce:** Medusa · Saleor · Vercel Commerce · SimpleCard · TishCommerce · DigitalHippo.
**3D product/configurator:** Sketchfab 3D Product Configurator · Product Configurator (Three.js live previews) · Burger House 3D (production 2026, no load penalty).
**Immersive templates:** Immersive Web SDK (Meta, WebXR + desktop fallback) · Kage · F.W.E. · Ocean Depths · Portfolio ITom.
**3D generation:** TRELLIS.2-4B · Hunyuan3D 2.1 · Pixal3D · HunyuanWorld-Mirror · HY-World 2.0 · 3D Model Zoo.
**Performance & pipeline:** Draco · gltf-transform · gltfjsx · overdraw (CI budgets).
**Creative coding & shaders:** awesome-creative-coding · VFX-JS · Unicorn Studio (~29KB) · Shaderlib.

## 19. Pipeline-first — the unglamorous work that ships

Unseen's real advantage is not shaders — it is the pipeline that lets a team iterate without breaking each other: Theatre.js version control (their PHP filesystem API + in-GUI VC so designers save without developer handoffs and concurrent edits don't overwrite), the designer↔developer handoff, the compression pipeline that runs before the browser.

**For our builds, pipeline-first means:**
1. Before the first pixel: versioned Theatre.js state workflow (no shared-state overwrites), asset pipeline scripts (`gltf-transform optimize` in CI), performance budgets enforced in CI (`overdraw`).
2. **Budget for iteration.** ZERO took four months and multiple discarded versions of every effect. You will not ship at 10MB on your first attempt. Plan the iteration; don't apologize for it.
3. **AI is the prototyping layer, not the shipping layer.** 48-hour AI prototypes, then human taste decides what stays. Use AI to get to working fast; use judgment to get to shippable.

## 20. Uncomfortable truths (read monthly)

1. You will not ship at 10MB on your first attempt. Budget for iteration.
2. AI is the prototyping layer, not the shipping layer.
3. The pipeline is more important than the pixels.
4. One building, infinite camera work.
5. The gate is the experience.
6. The demo→product gap lives in the accessibility controls, the VAT registration, the presigned URL expiry, the interaction budget, and the reduced-motion fallback. **Beauty gets attention. Production quality keeps it alive.**

## 21. The correct first move

**Don't start with Three.js. Don't start with GSAP. Start with Theatre.js and Blender.** One scene. One building. One environment. Hook every property to Theatre. Sequence the camera. See how it feels. Then bring the rendering layer. Most immersive sites fail because they start with tech and try to make it cinematic. Start with cinematic intent; choose the tech to serve it.

## 22. Definition of done — the final checklist

| # | Layer | Requirement | Gate |
|---|---|---|---|
| 1 | Rendering | Single WebGL canvas, WebGPU renderer, Draco + KTX2 | Perf audit |
| 2 | Animation | Theatre.js camera, GSAP interactions, Lenis scroll, single RAF loop | Code review |
| 3 | Accessibility | Parallel HTML controls, full keyboard path, aria-live, focus ≥3:1, **zero WCAG AA violations** | axe/Lighthouse + manual Tab |
| 4 | Audio | Spatial audio, user-initiated, always-visible keyboard-accessible mute | Manual |
| 5 | Performance | Interaction budget honored; LCP ≤2.5s, INP ≤200ms, CLS ≤0.1, JS ≤400KB gzip, <100 draw calls, ~10MB total | Lighthouse + CI budgets |
| 6 | Security | Presigned URLs (~15min), key gen on payment, rate limits, idempotent webhooks, 3–5 downloads | Security review |
| 7 | Tax | Stripe Tax/TaxJar integrated, OSS-ready, VAT rules in product | Pre-launch |
| 8 | Testing | Scene introspection + VRT baselines, Playwright + SwiftShader, no blank-canvas regressions | CI |
| 9 | Deployment | Immutable CDN caching, versioned paths, progressive loading, service worker | Deploy check |
| 10 | Analytics | Gate completion, camera depth, frame-drop correlation instrumented | Pre-launch |
| 11 | Reduced motion/data | Separate animation paths, equivalence preserved | Manual + emulation |
| 12 | Commerce | Headless (Medusa default), digital fulfillment wired, no transaction fees | Pre-launch |
| 13 | 3D generation | TRELLIS.2/Hunyuan3D pipeline or documented alternative | Asset review |
| 14 | Shader language | TSL preferred for new shader work | Code review |

**Nothing below 9.2 ships. Nothing untested ships. Nothing inaccessible ships.**

---

## 23. The autonomous site factory — taste before scale (Track R, verified 2026-09-12)

The generation problem is solved (Wix Harmony, Jan 2026, verified: natural-language → full site). The judgment problem is not. Our factory's bottleneck is **quality discrimination, not generation**. Doctrine:

1. **The rubric comes before the data.** No accept/reject logging without a written, scored rubric first. If the founder can't score 5 sites consistently against it, the rubric is wrong — fix the rubric, not the data.
2. **Log every accept/reject with structured features from day one** (scene complexity, camera pacing, copy register, gate density, color coherence, load time, industry). This log is the most valuable asset the studio owns — it compounds into the quality model.
3. **Selective reflection, not uniform self-critique.** Apply generate→evaluate→refine loops to failing output only (rescue mechanism), never to output already scoring well (polish mechanism). The exact threshold (dossier proposed bottom 20–30%) is a **hypothesis, not a researched constant** — the headline study behind it did not verify. Tune it empirically.
4. **Restart signal.** When the evaluator scores below a floor (start: 6.0/10), abandon the trajectory and regenerate with different constraints. Polishing a 6.0 never reaches 9.2.
5. **Learned evaluator over LLM-as-judge.** Train a small classifier on our own accept/reject data; use it as the reflection-loop gate. Cheaper, faster, more consistent than LLM judging. Target ≥80% agreement with the human on a held-out set before trusting it.
6. **Sameness is the scaling risk, not compute.** 1,000 sites from one doctrine = 1,000 variations of one aesthetic. Counter with a curated aesthetic vector space (≥50 orthogonal dimensions) sampled per site. Diversity is a research deliverable, not a prompt tweak.
7. **The founder's factory role:** rubric architect, model retrainer, handler of the 5% the factory fails. Relationships are the moat *around* the factory.

## 24. Never-existed experiences — the 2028 staircase (Track S, verified 2026-09-12)

Ranked by expected value; each ships as a staircase, opt-in and privacy-transparent:

1. **Generative audio mapped to camera position** (highest ROI). Web Audio API; theme prompt → realtime composition modulated by narrative position (0–1). **Opt-in only, default silent, always-visible mute.** The specific "Satie" tool cited in research did not verify as shippable — treat the direction as buildable, prototype in 30 days to validate. No two visits should sound identical.
2. **Persistent visits.** localStorage: visit count + progress. Visit 2+ gets a meaningfully different camera path. Deeper persistence is opt-in; the visitor can see and clear what's stored. Never PII.
3. **Presence as ambient social proof.** "N people exploring now" — anonymous, aggregate, no chat, no names by default. Counter first (30 days); optional avatars later.
4. **Cross-device continuity.** Session token + world-state serialization; QR handoff phone→desktop. Offer at natural break points ("continue on a bigger screen?"), never forced.
5. **Weather/time-reactive scenes.** Deferred until conversion hypothesis is A/B-tested. **Biometrics and haptics: do not ship** — consent UX and API maturity aren't there (2028 features, not 2026).

The red-team rule for all of the above: novelty that annoys, creeps, or distracts from conversion is founder catnip, not product. Every never-existed experience must survive the question "does this sell more roofing jobs?"

## 25. Extreme business — the network, the moat, the window (Track T, verified 2026-09-12)

1. **Every site is a node.** Embed lightweight, privacy-compliant, opt-in analytics reporting anonymized interaction patterns (gate completion, time-on-scene, camera deviations). Aggregate into industry benchmarks clients actually get ("your gate completion is 82% vs 67% industry — here's the fix"). The benchmark is a consulting product, not a dashboard. "Built by" badge on every site for virality.
2. **The data moat is the accept/reject log** (§23.2). Flywheel: more sites → more structured data → better quality model → better sites → more sites. Aggregate, anonymized, opt-in.
3. **The 10× thesis: the business is the quality model.** Websites are the acquisition channel and the training data. If the model reliably scores 9.2+, it's licensable to agencies and platforms. Staircase: log (now) → train (6 mo) → gate internally (12 mo) → license (24 mo).
4. **USPTO design-patent window — VERIFIED, time-sensitive.** March 13, 2026 guidance: computer-generated interfaces/icons (incl. projections, holograms, VR/AR renderings) are patent-eligible without depicting a physical display. The choreography-injection pipeline (capture → cleanup → automated camera path → gate placement → deploy) is the filing candidate. **No filing without a patent attorney's claim assessment and Garrett's explicit spend approval.**
5. **Competitive posture (verified):** nobody is building cinematic, scene-choreographed 3D sites for local businesses. Lovable/Bolt are app builders; Wix/Durable/10Web are conventional site builders. The moat is the experience layer + the proprietary quality data — not generation, which is commoditized.
6. **Lane discipline:** Sites are the acquisition channel; Workflows (90% margin) and Templates (99% margin) survive unit-economics contact; don't chase all lanes at once. Revisit the boutique-vs-factory steelman annually — it's a values question disguised as strategy.

## 26. Photogrammetry pipeline — phone → world → site (Tracks Q/R, verified 2026-09-12)

The Kit killer feature, with both core layers verified production-ready:

- **Capture (commodity):** Polycam Business, $400/user/year — LiDAR + photogrammetry + Gaussian splats, web viewer included. Client captures with guided phone app (2–3 min).
- **Render (solved, open):** Spark 2.0 — World Labs, **MIT license**, Three.js-native Gaussian Splatting, 98%+ WebGL2 device coverage including mobile. Our proprietary layer is everything around it.
- **Our proprietary layer (the actual product):** guided capture QA (coverage overlays, lighting checks, reject bad captures *before* upload) → automated cleanup (floaters, holes, lighting normalization) → **choreography injection** (automated camera path, gate placement at narrative beats, copy overlay) → deploy.
- **Quality ceiling honesty:** captured space is photorealistic but "as captured" — not cinematic. The cinematic layer is where the studio adds value; never promise otherwise to a client.
- **First validation:** Spark 2.0 capture→viewer prototype on 3 test spaces, target <10 min capture-to-view. Then the 90-day conversion test: conventional site vs 3D-twin site, measured on leads. The answer to that test is potentially the entire business model.

---
*End of BUILD-BIBLE v1.1. Dialogue protocol: `DIALOGUE-PROTOCOL.md`. Required reading order: `INDEX.md`. Changelog: v1.1 (2026-09-12) — added §§23–26 from verified extreme-layer deep pass (R/S/T); verification report governs fact-vs-hypothesis wording.*
