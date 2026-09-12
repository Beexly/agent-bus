# The 10 Missing Layers — Immersive Build Doctrine
**Source:** Garrett, 2026-09-12. Filed by Motif as standing architecture law for all future immersive/3D/commerce builds. Status: layers 1, 3 (partial), 9 audited against current Kit pages — fixes pushed same day.

## Layer 1: Accessibility — the legal & ethical floor (WCAG 2.1 AA)
- `<canvas>` contributes **nothing** to the accessibility tree. Screen readers see "canvas" and nothing else.
- **Solution: parallel accessible controls.** Keep canvas as the visual surface; expose every configuration action through real HTML controls alongside it (number fields for dimensions, selects for material/color, buttons for actions). Both paths update the same state. More reliable than making canvas itself keyboard-operable.
- Checklist: complete keyboard path (Tab + arrows, no mouse required) · visible focus indicators ≥3:1 contrast (never suppress default outline without replacement) · no focus trap (Tab/Escape moves forward) · labels on every control (icon with no text is not a label) · 4.5:1 normal text / 3:1 large text contrast · no color-only information (add text/icon) · drag alternatives per WCAG 2.5.1 (number inputs substitute for drag handles) · `aria-live` status messages for price changes, selections, errors.
- Decorative canvas: `aria-hidden="true"`. Interactive canvas: `tabindex="0"` + descriptive `aria-label` (e.g. `aria-label="Animated particle system representing sound waves"`).
- Moving scenes: hidden-DOM-node-per-object updated per frame works for static scenes, falls apart for moving ones — known unsolved problem. Parallel controls are the only reliable production solution.
- Test: close the mouse, Tab through everything. Run axe / Lighthouse Accessibility. Target **zero WCAG AA violations**. NVDA (Windows) / VoiceOver (Mac) are free. If it reads "canvas" or nothing, the HTML controls need work.

## Layer 2: Audio — the immersion multiplier
- Spatial audio via Web Audio API `PannerNode`; Three.js `PositionalAudio` attaches sources to 3D objects (pan, attenuation, filtering by listener position + material).
- Reference: flaviodelellis/Web-audio-project — ray-based sound propagation with material absorption/reflection/transmission coefficients, real-time volume/filter/stereo by listener position, dynamic add/move/resize/remove of objects.
- Every product interaction gets a sound **from the object, not the browser**. Sound is spatial cognition — users locate themselves through audio faster than vision.
- Constraints: user-initiated (autoplay policies), graceful degradation, **always-visible keyboard-accessible mute toggle**.

## Layer 3: Performance — the interaction budget
- Five dimensions: **Response** (input acknowledgment speed) · **Render** (CPU/GPU per visual state) · **Residency** (network/decoded/GPU memory retained) · **Sustainability** (heat, battery, long sessions) · **Equivalence** (non-3D / reduced-motion / degraded paths preserving the same task).
- Critical rule: **never tie visual acknowledgment to animation completion.** Control changes state immediately, accessible status announces it, visual transition continues as progressive detail.
- 2026 budget: LCP ≤2.5s · INP ≤200ms · CLS ≤0.1 · initial JS ≤400KB gzipped (interactive pages) · 16.67ms/frame · <100 draw calls.
- **WebGPU is the production standard** (Safari shipped Sept 2025; Three.js r171+ production-ready, `import { WebGPURenderer } from 'three/webgpu'`). Up to 3.8× compute-bound gains over WebGL. Never use WebGLRenderer unless targeting pre-2022 hardware.

## Layer 4: Security & fulfillment — digital goods
- Never attach high-value files to email. Time-limited download URLs tied to purchaser accounts. Presigned URLs, ~15-min expiry. 3–5 downloads per purchase. Watermark PDFs with purchaser email where piracy is common.
- License keys generated on payment success (never static spreadsheets). Rate-limit activation APIs. Activation limits per key. Velocity checks on card attempts; block disposable emails on high-risk SKUs; monitor chargeback rates by product.
- **Webhooks idempotent on retry** — same webhook twice must not issue two keys. Process asynchronously; long DB queries inside the handler will time out. Decouple checkout from key-generation engine (serverless trigger on Stripe/Shopify webhook).
- Build-vs-buy: Shopify native downloads cap at 5GB, no serial keys. Move custom when app fees approach £6–8k/yr or deep licensing-server integration is needed.

## Layer 5: VAT & tax — digital goods reality
- Destination-based in ~120 countries. EU OSS: register in one EU country, quarterly returns covering all EU digital sales, 17–27% by customer location. €10,000 threshold for EU cross-border B2C digital services. Non-EU sellers to EU register via OSS. PH 12%, LK planning 18%.
- **Integrate Stripe Tax / TaxJar before launch.** Manual VAT dies at country two.

## Layer 6: Testing — the WebGL problem
- DOM selectors can't test WebGL. **Introspection:** expose scene state (camera position, object visibility, materials) via a debug API to the test runner.
- **Visual regression:** capture canvas at fixed camera positions in headless browser, compare against baselines (quick-vrt with video masking; mcp-webgl-visual-regression MCP server). Combine with introspection assertions for determinism.

## Layer 7: Deployment & CDN
- Static assets: `Cache-Control: public, max-age=31536000, immutable`, content-hashed URLs. HTML revalidates every load. Versioned CDN paths per release. Non-cacheable files: `no-cache` at origin/CDN.
- WebGL assets: Draco meshes + KTX2 textures served immutable. Tiny fast HTML shell; 3D loads progressively. User state in IndexedDB/localStorage; minimize server calls.

## Layer 8: Analytics — what actually matters
- Page views / bounce rate are meaningless for immersive experiences. Use Clarity / Mouseflow / Smartlook (heatmaps, session replay).
- Measure: **time-to-first-interaction · gate completion rate · camera progression depth · audio engagement (mute/unmute) · reduced-motion adoption · frame-drop ↔ abandonment correlation.**
- A user who reaches 80% of the narrative but bounces on a gate is a **failed gate**, not a bounce. Fix the gate.

## Layer 9: prefers-reduced-motion — non-negotiable
- `matchMedia('(prefers-reduced-motion: reduce)')` → **entirely separate animation path**, not slower animation. Instant camera cuts instead of smooth transitions; static hero states instead of particles; text descriptions instead of animated feedback. Equivalence dimension of the interaction budget. Large-field continuous motion can trigger vestibular discomfort regardless of the setting.

## Layer 10: Creative references beyond Unseen
- Monolith Studio (FWA + Awwwards + CSSDA same cycle: editorial type, near-black, C4D 3D, Webflow) · La Revoltosa (Three.js renders + tattoo art + GSAP) · MERSI Architecture by FLOT NOIR (sophistication + architectural precision) · Utsubo "Best Three.js Websites 2026" living compilation. Techniques are documented; the gap is execution quality and iteration.

## Theatre.js vs GSAP — the correction
- Not competitors: **Theatre.js = master camera timeline** (designer-choreographed in a timeline UI, played in code). **GSAP = interaction feedback** (programmatic control, precise easing, scroll-synced triggers, button/hover/gate states). Lenis for scroll. Complementary.

## Final checklist
| Layer | Requirement | Was missing? |
|---|---|---|
| Rendering | Single WebGL canvas, WebGPU, Draco + KTX2 | covered |
| Animation | Theatre.js camera, GSAP interactions, Lenis scroll | covered |
| Accessibility | Parallel HTML controls, keyboard path, aria-live, focus mgmt | **was missing** |
| Audio | Spatial audio, mute toggle, user-initiated | **was missing** |
| Performance | Interaction budget (5 dimensions) | was incomplete |
| Security | Presigned URLs, key gen, rate limits, idempotent webhooks | **was missing** |
| Tax | OSS, destination VAT, automated calc | **was missing** |
| Testing | Scene introspection, VRT, headless capture | **was missing** |
| Deployment | Immutable CDN, versioned paths, progressive load | was incomplete |
| Analytics | Gate completion, camera depth, frame-drop correlation | **was missing** |
| Reduced motion | Separate path, static equivalents, vestibular safety | **was missing** |
| Commerce | Headless, digital fulfillment, no transaction fees | covered |
