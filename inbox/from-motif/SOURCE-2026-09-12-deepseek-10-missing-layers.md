# CANONICAL SOURCE — Garrett's original research paste (verbatim, unedited)
**Received:** 2026-09-12 ~15:18 CDT, via iOS app, main chat.
**Filed by:** Motif, 2026-09-12. Recovered verbatim from the conversation transcript — no summarization, no edits.
**Purpose:** This is the source of truth. All extractions (IMMERSIVE-10-LAYERS.md, BUILD-BIBLE.md) derive from this text. If an extraction and this file disagree, THIS FILE wins.

---

The Missing Layer 1: Accessibility — The Legal & Ethical Floor You Cannot Skip

I gave you the visual architecture but said almost nothing about the users who cannot see it. This is not optional. Since June 2025, the EU Accessibility Act requires many commercial websites to meet WCAG 2.1 AA — and a WebGL canvas is the single hardest thing to make compliant.

The core problem: A <canvas> element contributes nothing to the browser's accessibility tree. Screen readers see "canvas" and nothing else. Drag handles, 3D editing icons, and interactive hotspots rendered inside the canvas have no accessible name, no role, and no keyboard event unless you explicitly wire them up.

The solution — parallel accessible controls: Keep the canvas as the visual surface, but expose every configuration action through real HTML controls placed alongside it. Number fields for dimensions, select elements for material and color, buttons for actions. Every change made through either path updates the same state. This is more reliable than trying to make the canvas itself keyboard-operable, because screen reader behavior on canvas elements varies wildly across browsers and reader combinations.

The checklist for WCAG 2.1 AA compliance:

· Complete keyboard path — every option reachable by Tab and arrow keys, no mouse or touch gesture required
· Visible focus indicators — focus rings must meet 3:1 contrast against adjacent colors. Do not suppress the browser default outline without a visible replacement
· No focus trap — users who Tab into the configurator must be able to Tab out. Escape or Tab must move focus forward
· Labels on every control — each input, button, and select needs an associated label or aria-label. An icon with no text is not a label
· Color contrast — 4.5:1 for normal text, 3:1 for large text on all labels, values, and descriptions
· No color-only information — if selected or error state is indicated only by color, add text or an icon
· Alternative to drag — WCAG 2.5.1 requires that path-based gestures have a single-pointer alternative. Number inputs substitute for drag handles
· Status messages announced — use aria-live regions to announce price changes, selection updates, and errors so keyboard users are not left guessing

The aria-label on canvas: Add a descriptive aria-label to your <canvas> element. Example: <canvas aria-label="Animated particle system representing sound waves"></canvas>. This helps screen readers announce what the visual represents. If the scene is interactive, add tabindex="0" and aria-label so screen reader users can focus on it and understand what it represents.

For moving scenes: A hidden DOM node per object updated every frame works for static scenes but falls apart for moving ones — this is a known, unsolved problem in the WebGL accessibility community. The parallel-control approach is currently the only reliable production solution.

Testing: Close your mouse and Tab through the entire experience. Every option must be reachable and operable. Run the page through axe or Google Lighthouse Accessibility audit. Target zero WCAG AA violations. If you use a screen reader, NVDA (Windows) and VoiceOver (Mac) are free. If it reads "canvas" or nothing at all, your HTML alternative controls need more work.

---

The Missing Layer 2: Audio — The Immersion Multiplier

I mentioned Howler in passing. I should have made this a first-class architectural concern. Spatial audio is what makes a 3D scene feel like a place rather than a picture.

The Web Audio API provides PannerNode for true 3D spatialization. Three.js wraps this in PositionalAudio, which lets you attach sound sources to 3D objects and have them pan, attenuate, and filter based on listener position and material properties.

The reference implementation: The flaviodelellis/Web-audio-project on GitHub simulates sound propagation through rays, reflecting and transmitting based on material absorption, reflection, and transmission coefficients. It dynamically alters volume, filters, and stereo balance based on listener position, and supports adding, moving, resizing, and removing objects with different materials — all with real-time audio processing.

For your digital goods store: Every product interaction should have a sound. A click, a whoosh, a chime. The sound should come from the object, not the browser. Spatial audio is not decoration. It is spatial cognition. Users locate themselves in a 3D world through sound faster than through vision.

The constraint: Audio must be user-initiated (browser autoplay policies) and must degrade gracefully. Provide a mute toggle that is always visible and keyboard-accessible.

---

The Missing Layer 3: Performance — The Interaction Budget

I gave you the 10MB target and the 60fps target. That is not enough. An immersive interface can hold 60 frames per second and still feel broken.

The frame-rate target answers one question: can the renderer produce frames quickly enough? It does not answer whether the page responds promptly to input, whether assets fit in memory, whether the device is throttling, or whether the experience remains operable without motion.

The correct framework is the interaction budget — five dimensions:

1. Response — how quickly the interface acknowledges input and shows a state change
2. Render — how much CPU and GPU work each visual state can consume
3. Residency — how much network, decoded asset, and GPU memory the experience can retain
4. Sustainability — how the experience behaves under heat, battery pressure, and long sessions
5. Equivalence — which non-3D, reduced-motion, and degraded paths preserve the same task

The critical mistake most teams make: Tying visual acknowledgment to the completion of an animation. A selection does not need to wait for a camera move, shader transition, or asset load before the interface confirms it. The control can change state immediately, an accessible status message can announce the selection, and the visual transition can continue as progressive detail.

The 2026 performance budget:

Metric Target
LCP ≤ 2.5s (43% of sites fail this)
INP ≤ 200ms
CLS ≤ 0.1
Initial JS ≤ 400KB gzipped for interactive pages
Frame budget 16.67ms/frame (60fps)
Draw calls Under 100

The WebGPU shift: As of 2026, WebGPU is the production standard for Three.js. Safari shipped support in September 2025, and Three.js r171+ made WebGPU production-ready with zero-config imports: import { WebGPURenderer } from 'three/webgpu'. Never use WebGLRenderer unless specifically requested for hardware older than 2022.

Benchmarks show WebGPU consistently outperforms WebGL, especially in heavy scenes — up to 3.8× improvement in compute-bound workloads and significantly higher FPS in complex 3D scenes. For your store, this means more particles, more shader complexity, more objects, at the same frame rate.

---

The Missing Layer 4: Security & Fulfillment — The Commerce Reality

I told you to use Medusa and move on. That was incomplete. Digital goods delivery is a security problem, not a feature.

The rules from the fulfillment playbook:

· Never attach high-value files to email. Use time-limited download URLs tied to purchaser accounts
· Generate license keys on payment success, not in a static spreadsheet. Rate-limit activation APIs to reduce brute force
· Presigned URLs with an expiration window of around 15 minutes
· Limit downloads to 3–5 per purchase. Watermark PDFs with purchaser email when piracy is common
· License key activation limits — prevent one key being used on unlimited devices
· Velocity checks on card attempts, block known disposable emails for high-risk SKUs, monitor chargeback rates by product
· Delivery paths must be idempotent on webhook retry — the same webhook firing twice should not issue two keys

The architecture for scale: Use Shopify/Stripe transactional webhooks to trigger an external serverless engine immediately after successful payment. This decouples the customer-facing checkout from the resource-intensive key generation database, ensuring storefront performance is completely unaffected by backend processing. The webhook endpoint must process asynchronously — long-running database queries inside the webhook handler will time out.

The build-vs-buy threshold: Native Shopify digital downloads hit a 5GB file size cap and cannot generate, track, or revoke unique serial keys. Move to custom when app subscription fees approach £6,000–£8,000/year or when you need deep integration with external licensing servers.

---

The Missing Layer 5: VAT & Tax — The Legal Reality of Selling Digital Goods

You are selling digital services. VAT is destination-based in almost every major market. The tax rate applied is the rate of the customer's country, not yours.

The scope: Over 120 countries levy VAT obligations on foreign or non-resident digital service providers. The EU, UK, Australia, Canada, and many others apply destination-based taxation.

The EU solution: Register in one EU country and file quarterly returns covering all EU digital sales through the OSS (One-Stop Shop) scheme. OSS applies the destination country's VAT rate automatically, which ranges from 17% to 27% depending on customer location.

The threshold: EU-based SaaS businesses are subject to a €10,000 threshold for cross-border B2C digital services. Build VAT rules into your product early.

The non-EU play: Non-EU businesses selling digital services to EU customers must register via OSS to simplify compliance. The Philippines imposes 12% VAT on foreign digital services; Sri Lanka is planning 18%.

The practical move: Integrate a tax calculation service (Stripe Tax, TaxJar, or similar) into your checkout before you launch. Manual VAT handling does not scale beyond the first country.

---

The Missing Layer 6: Testing — The Visual Regression Problem

You cannot test a WebGL scene with DOM selectors. Traditional E2E fails for WebGL.

The solution: Introspection. Query the internal Scene Graph and GPU states through a communication bridge. This means exposing your Three.js scene's state (camera position, object visibility, material properties) to your test runner via a debug API.

The complementary approach: Visual Regression Testing (VRT). Tools like quick-vrt support advanced video masking for Canvas, WebGL, and video players — they capture screenshots and compare them across test runs, ignoring dynamic elements that are expected to change. mcp-webgl-visual-regression is an MCP server specifically for WebGL visual regression testing with automated screenshot comparison.

The workflow: Run your scene through a headless browser. Capture the canvas at fixed camera positions. Compare against baseline images. Flag differences. Combine this with introspection-based assertions (e.g., "the camera should be at position X after this interaction") for deterministic testing.

---

The Missing Layer 7: Deployment & CDN Architecture

Static assets get Cache-Control: public, max-age=31536000, immutable with content-hashed URLs. HTML revalidates every load so deploys ship instantly.

Versioned CDN paths for each release: version1/xxxx, version2/xxxx. Files that should not be cached get no-cache headers at the origin or CDN level.

The architecture: Drop static files onto a CDN. Leverage HTTP cache headers for immutable assets. Use IndexedDB or localStorage for user-state persistence and minimize server calls.

For your WebGL assets specifically: Draco-compressed meshes and KTX2 textures should be served with the immutable cache headers. The initial HTML shell should be tiny and fast. The 3D scene loads progressively after the shell renders.

---

The Missing Layer 8: Analytics — What Actually Matters

Standard web analytics (page views, bounce rate) are meaningless for an immersive experience. You need to measure the interaction budget in production.

The tools: Microsoft Clarity provides heatmaps and session recordings directly on your live site — heatmap, area heatmap, or session recording icons on the widget. Mouseflow and Smartlook offer session replay and heatmaps filtered by experience or variation.

What to measure beyond clicks:

· Time-to-first-interaction — how long before the user performs their first meaningful action
· Gate completion rate — what percentage of users successfully complete each interactive gate
· Camera progression depth — how far through the narrative arc users actually scroll
· Audio engagement — mute rate, unmute rate, audio interaction frequency
· Reduced-motion path adoption — how many users are on the accessibility fallback
· Frame drop correlation — which scenes correlate with session abandonment

The insight: A user who reaches the 80% mark of your narrative but bounces on a specific gate is not a "bounce." They are a failed gate. The gate is the problem, not the user.

---

The Missing Layer 9: prefers-reduced-motion — The Non-Negotiable

I mentioned this in passing. It is not optional. prefers-reduced-motion: reduce must pause or disable continuous rotation, camera fly-throughs, and particle motion.

The WCAG requirement: WCAG 2.3 requires respecting user motion preferences. Large-field continuous motion can trigger vestibular discomfort even without prefers-reduced-motion set.

The implementation: Detect the media feature in JavaScript (window.matchMedia('(prefers-reduced-motion: reduce)').matches) and provide an entirely separate animation path. This is not "reduce the animation speed." It is "provide an equivalent, static or minimal-motion experience that preserves the same task" — this is the Equivalence dimension of the interaction budget.

The practical fallback: For a cinematic scroll experience, the reduced-motion path should use instant camera cuts instead of smooth transitions, static hero states instead of particle systems, and text descriptions instead of animated visual feedback.

---

The Missing Layer 10: Creative References Beyond Unseen

You asked me to study Unseen. I did. But Unseen is not the only reference. Monolith Studio won FWA of the Day, Awwwards Site of the Day, and CSS Design Awards in the same cycle for a tattoo studio site combining editorial typography, near-black palette, Cinema 4D 3D, and Webflow. La Revoltosa is a 1953 Spanish soda brand revived through Three.js 3D renders, tattoo art, and GSAP motion. MERSI Architecture by FLOT NOIR was recognized for an extremely difficult combination: visual sophistication with architectural precision.

The "Best Three.js Websites 2026" compilation on Utsubo is a living, updated reference that documents the specific techniques each award-winning site uses.

The lesson: The techniques that win awards are not secret. They are documented. The gap is in the execution quality and the willingness to iterate — not in access to information.

---

The Final Correction: Theatre.js vs. GSAP Is Not a Competition

I framed Theatre.js as the camera choreography tool and GSAP as the component animation tool. That is directionally correct but misses the philosophical distinction:

GSAP ScrollTrigger is "defined in code." Theatre.js is "defined in a timeline UI + played in code." If you want a designer to choreograph a cinematic sequence without touching code, Theatre.js is the only serious option. If you want programmatic control with precise easing and scroll-synced triggers, GSAP is the only serious option.

For your architecture: Use Theatre.js for the master camera timeline (the cinematic sequence) and GSAP for interaction feedback (button states, hover effects, gate responses). They are complementary, not competing.

---

The Complete Final Checklist

Layer Requirement Status
Rendering Single WebGL canvas, WebGPU renderer, Draco + KTX2 ✅ Covered
Animation Theatre.js for camera, GSAP for interactions, Lenis for scroll ✅ Covered
Accessibility Parallel HTML controls, keyboard path, aria-live, focus management ⚠️ Was missing
Audio Spatial audio via Web Audio API, mute toggle, user-initiated ⚠️ Was missing
Performance Interaction budget (response, render, residency, sustainability, equivalence) ⚠️ Was incomplete
Security Presigned URLs, key generation, rate limiting, idempotent webhooks ⚠️ Was missing
Tax OSS registration, destination-based VAT, automated calculation ⚠️ Was missing
Testing Scene graph introspection, visual regression, headless capture ⚠️ Was missing
Deployment CDN with immutable caching, versioned paths, progressive loading ⚠️ Was incomplete
Analytics Gate completion, camera depth, frame drop correlation, session replay ⚠️ Was missing
Reduced Motion Separate animation path, static equivalents, vestibular safety ⚠️ Was missing
Commerce Medusa/Saleor headless, digital fulfillment, no transaction fees ✅ Covered

---