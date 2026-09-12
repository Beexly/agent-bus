# CANONICAL SOURCE — DeepSeek Extreme-Layer Deep Pass: Tracks R, S, T
**Received:** 2026-09-12 ~15:37 CDT, pasted by Garrett from DeepSeek.
**Status:** VERBATIM, UNEDITED. If any extraction, doctrine, or later implementation conflicts with this file, THIS FILE WINS.
**Verification:** see `VERIFY-2026-09-12-extreme-RST.md` (Motif spot-checked load-bearing claims; verdicts per claim).
**Prompt that produced it:** `DEEPSEEK-EXTREME-LAYER-PROMPT.md`.

---

TRACK R — THE AUTONOMOUS SITE FACTORY (The Endgame) — DEEP PASS

TL;DR

· The market has converged on "agentic site building" without solving the core problem. Wix Harmony generates complete multi-page sites in under 60 seconds (Jan 2026). Elementor's Angie operates as a free agentic framework that "plans and executes entire WordPress tasks autonomously" via Model Context Protocol. But 73% of business owners say AI tools limit their ability to create unique, brand-differentiating designs. The generation problem is solved. The judgment problem is not.
· The self-critique paradox is the most important finding in this entire dossier. Snorkel AI stress-tested the "generate → criticize → improve" loop on 50 visual reasoning tasks. Self-critique turned 98% accuracy into 57% on high-performance tasks — it acts as a "corrosive agent" where models are already strong. Yet for tasks where models fail completely, it "works like magic". This means the studio's autonomous factory must not apply self-critique uniformly. It must apply it only to the bottom decile of output — the sites that fail catastrophically — and leave the top decile alone.
· The photogrammetry pipeline is closer to shippable than any other extreme track. Spark 2.0 (World Labs, MIT license, April 2026) renders 100M+ Gaussian splats in a mobile browser via LoD splat trees, .RAD streaming format, and virtual GPU memory paging on WebGL2 — covering 98% of devices. Polycam Business ($400/year) already does LiDAR, photogrammetry, and Gaussian splats in one account with a web viewer. The missing piece is not reconstruction — it is automated cinematic choreography on top of captured space.
· The competitive landscape is bifurcated, and the studio's gap is defensible. Lovable ($400M ARR, 135M raised, $700M valuation) are app builders. Wix (282M users), Durable, and 10Web are small-business site builders. Nobody is building cinematic, scene-choreographed, 3D sites for local businesses. The studio's differentiation is not the generation layer. It is the experience layer.
· The 10× factory breaks on sameness, not scale. 1,000 sites/month from one doctrine produces 1,000 variations of the same aesthetic. The solution is not better prompts — it is a curated aesthetic vector space large enough to produce genuine diversity. This is a research problem, not an engineering one.

---

Current State of the Art

AI Site Builders — The 2026 Cohort (Verified)

Platform Launch/Update Core capability Pricing Gap Source reliability
Wix Harmony Jan 21, 2026 Vibe coding: natural language → complete multi-page site in under 60 seconds. Drag-and-drop refinement. Free tier included. Free–$159/mo Optimizes for "good enough" small-business site. No cinematic layer. No scene choreography. High (press + Elementor comparison)
Elementor Angie 2026 Agentic AI framework using Model Context Protocol. Takes action across entire WordPress installation. Free plugin. Free–$168/yr WordPress-bound. No 3D. No cinematic. High (Elementor's own comparison, but verifiable)
Lovable Dec 2025 (Series B) Prompt → full-stack web app with Supabase integration. $400M ARR by March 2026. 100,000 new projects daily. Credit-based, $25+/mo App builder, not site builder. Developer-focused. No cinematic experience layer. High (TechCrunch, multiple sources)
Bolt.new 2025–2026 In-browser AI dev environment on WebContainers. $40M ARR within six months. Token-based Code output, not hosted experience. No design system. No cinematic layer. High (oflight.co.jp comparison, StackBlitz funding data)
Durable 2024–2026 30-second AI sites for service businesses. $12+/mo Speed over quality. Proprietary, locked. No 3D. Medium (self-reported)
WeInc 2026 Prompt → production website with hosting, custom domains, white-label for agencies. Flat $20–99/mo Closest to full pipeline, but no cinematic layer. Medium (curated list, maintained by WeInc team — potential bias)

The honest assessment: Every major builder optimizes for speed to a conventional website. None generate scenes, camera choreography, or gates. The cinematic layer is a genuinely empty category. The closest adjacent player is Framer AI, which generates pages inside a design tool — but no 3D, no camera, no world.

Self-Critiquing Agents — The Honest State

The architecture is solved. The application is not.

The "generate → evaluate → reflect → refine" loop is well-documented. @aqthevisionnow/mirror (npm, last updated March 2026) provides "self-assessment and confidence scoring for AI agents. Quality checking, uncertainty detection, escalation decisions — the organ that knows what it doesn't know". Ratchet Review is an open-source Claude Code skill that "runs an independent AI agent to review your AI-generated output before it ships". AgentJudge provides structured feedback on quality, accuracy, and areas for improvement.

The critical limitation is the self-critique paradox. Snorkel's stress test on 50 visual reasoning tasks found that self-critique degrades high-performance tasks (98% → 57%) while improving low-performance tasks. The implication for the studio: do not apply self-critique uniformly. Apply it only to the bottom 20–30% of agent output. For output that the quality model already scores highly, leave it alone. The reflection loop is a rescue mechanism, not a polish mechanism.

Convergence failure modes are real and documented. GitHub's awesome-copilot skill enforces a maximum of 3 iterations before stopping. The risk: agents polish forever, trapped in a local minimum, unable to see that the site needs to be restarted, not refined. The solution is a restart signal in the reflection architecture — when the evaluator scores below a threshold (e.g., 6.0), the agent abandons the trajectory and begins fresh with different constraints.

Learned Quality Models — The Adjacent Literature

No one has built a quality model for websites. But the adjacent literature is mature.

NIMA (Neural Image Assessment, IEEE TIP 2018) is the foundational paper: a CNN that predicts the distribution of human opinion scores rather than a single mean score. It was retrained on proven deep object recognition networks and achieves high correlation with human perception without a reference image. The architecture is significantly simpler than comparable methods.

AestheticNet (arXiv, April 2026) is the current frontier: "a cognitive-inspired AQA paradigm that integrates human-like visual cognition and semantic perception with a two-pathway architecture". This is the state of the art for image aesthetics. No equivalent exists for website aesthetics. The studio's opportunity is to build the NIMA-for-websites: a quality model trained on accepted-vs-rejected site pairs.

The minimum viable version: Log every accept/reject decision with structured features (scene complexity, camera pacing, copy register, gate density, color coherence, load time). Train a lightweight classifier on the accumulated data. Use it as the evaluator in the reflection loop. Target: ≥80% agreement with human evaluator on a held-out set. This is buildable from data the studio is already generating — if it starts logging structured decisions now.

Photogrammetry Pipeline — The State of the Art

Spark 2.0 (World Labs, April 2026, MIT license, 2.2K stars) is the breakthrough: a 3D Gaussian Splatting renderer for the web that handles 100M+ splats in a mobile browser via three innovations: (1) LoD splat trees — render budget is constant (500K–2.5M splats/frame depending on device), (2) .RAD streaming format — progressive loading instead of 2.3GB .PLY files, (3) virtual GPU memory paging — fixed memory pool regardless of scene size. It runs on WebGL2, covering 98% of devices, not just WebGPU Chrome desktop.

Polycam Business ($400/year per user) provides LiDAR, photogrammetry, and Gaussian splats in one account, with 2D/3D floor plans, advanced measurement, point clouds, and walkthroughs. Accuracy is "about half an inch" on a careful interior pass. Claims half the Fortune 500.

Insta360 × Splatica (April 2026) partner on the "first scalable 360 video to explorable 3DGS pipeline" — complete with interactive web viewers, VR support, and Unity exports.

The gap: All of these produce a captured space, not a cinematic experience. The missing piece is automated choreography: camera path generation, gate placement, narrative beat mapping. The studio's doctrine supplies this. The pipeline is: phone capture → reconstruction (Spark 2.0 / Polycam) → automated cleanup → choreography injection → deploy.

Digital Twins for Local Business — Who's Doing It

Craftpix.ai (Seattle) turns job photos into SEO and leads for home service contractors — "the gap between a completed service call and a five-star Google review". This is adjacent but not 3D.

Letiverse builds free interactive 3D tours for local businesses with no setup fees. Matterport is the incumbent, with Pro3 cameras capturing retail environments and "dimensionally accurate replicas." The "AI and Digital Twin for SMEs" architecture (May 2026) describes a closed-loop system with affordable hardware, though manufacturing-focused.

The conversion hypothesis is untested. No public data exists on whether a 3D digital twin of a plumber's service area converts better than a conventional website. This is the studio's most important open question for Track R. The test: build two versions of a client site — one conventional, one 3D twin — and measure conversion over 90 days. The cost: ~$500 in build time. The value of the answer: potentially the entire business model.

---

Options Ranked (No Ties)

#1 — Build the taste function before the factory.

The autonomous factory is not bottlenecked by generation. It is bottlenecked by quality discrimination. Wix Harmony can generate a site in 60 seconds. It cannot reliably tell you whether that site is 9.2+. The highest-leverage move is a learned quality model trained on the studio's own accept/reject pairs. Start logging today. The rubric must be articulated before data collection begins. No data without a structured score. The quality model becomes the gate; the human reviews only the uncertain cases.

#2 — The photogrammetry pipeline as the Kit killer feature.

Spark 2.0 makes the render layer production-ready. Polycam makes capture accessible. The missing piece is the choreography injection layer: software that takes a captured splat scene and automatically generates a camera path, places gates at narrative beats, and overlays copy. This is the studio's unique contribution. The pipeline: client captures with phone (2–3 minutes guided) → upload → reconstruction (Spark 2.0 or Polycam API) → automated cleanup (remove floaters, fix holes, normalize lighting) → choreography injection → deploy. Cost per site: $2–5 at current compute rates, dropping. Quality ceiling: photorealistic but "as captured" — not cinematic. The cinematic layer is where the studio adds value.

#3 — Self-critiquing agents with a learned evaluator, not an LLM-as-judge.

The LLM-as-judge pattern is brittle, expensive, and prompt-drift-prone. The alternative: train a small, fast classifier on accept/reject data and use it as the evaluator in the reflection loop. This is cheaper (inference-only), faster (milliseconds vs. seconds), and more consistent. The LLM generates; the classifier judges; the LLM refines. Critical constraint from the self-critique paradox: apply the reflection loop only to the bottom 20–30% of output. Do not polish what is already good.

#4 — Runtime world generation as the infinite camera work engine.

Wave function collapse and constraint-solving algorithms generate navigable space procedurally. Chunked generation (load/unload as visitor moves) is standard in game engines. The web-ready version: a Three.js scene graph that generates chunks on demand, with a constraint system that enforces the studio's doctrine (no dead ends, no empty rooms, gates at narrative beats). This is not "generating a world from a prompt" — it's "generating exploration from a doctrine." Ships in 30 days as a prototype; 6 months as a client-facing feature.

#5 — The founder's remaining job: taste function architect and failure handler.

As the factory improves, the founder's job becomes: (a) defining and maintaining the scoring rubric that the quality model learns from, (b) retraining the quality model as new accept/reject data arrives, (c) handling the 5% of sites that fail the factory — the edge cases. This is not "taste and relationships" as a vibe. It is a concrete operational role. The relationships are the moat around the factory, not a job function within it.

---

Implementation Blueprint (Staircase)

30 Days

Action Output Success metric Cost
Define the quality rubric (10 dimensions, 1–10 scale each) Written rubric document Founder can score 5 sites consistently (inter-rater reliability > 0.8) $0 (founder time)
Start structured accept/reject logging on all agent-generated sites CSV/JSON with features + scores 50 logged sites $0
Build capture app prototype: phone → guided capture → upload → Spark 2.0 viewer Working demo on 3 test spaces Capture-to-view in <10 minutes $500 (dev time)
Deploy reflection loop on 10 internal site generation tasks with human evaluator 10 sites generated with iteration logs ≥50% acceptable in ≤3 iterations $200 (compute)

6 Months

Action Output Success metric Cost
Train quality model v1 on accumulated accept/reject data Classifier with ≥75% agreement with human evaluator Precision > 0.8 on "9.2+" class $2,000 (compute + labeling)
Ship photogrammetry pipeline v1 as client-facing feature Capture → live site in ≤48 hours Quality ≥7.5/10 (photorealistic but not cinematic) $5,000 (dev)
Implement diversity injection at prompt layer Every site includes random seed from curated aesthetic vector space Measurable diversity (feature distribution variance > threshold) $1,000
Deploy multi-iteration reflection with restart signal Agent abandons trajectory when evaluator scores <6.0 Convergence rate >70% within 3 iterations $500

2 Years

Action Output Success metric Cost
Quality model as primary gate 95% of sites pass without human review Human review only for model-flagged uncertain cases $10,000 (retraining)
Factory produces 50–100 sites/month ≥5% human intervention rate Sustained quality (no degradation over 6 months) $20,000/month compute
Capture pipeline supports real-time streaming Client walks space, web version builds behind them Latency <30 seconds from capture to first splat render $15,000 (dev)

The 10× version: 1,000 sites/month, every one 9.2+.

What breaks:

Break point Why Solution Cost to solve
Sameness One doctrine → one aesthetic → 1,000 variations of the same thing Aesthetic vector space with ≥50 orthogonal dimensions. Random sampling from the space for each site. $50,000 (research)
QA throughput 5% human intervention at 1,000 sites/month = 50 sites/month × 4 hours = 200 hours/month 2 full-time reviewers. Sustainable at $150K/year each. $300,000/year
Compute cost 3DGS reconstruction at scale At current rates ($2–5/site), 1,000 sites = $2,000–5,000/month. At 2028 projected rates (-30–50%), $1,000–2,500. Rounding error
Client acquisition 1,000 new clients/month The actual bottleneck. Not an engineering problem. Unknown

---

Red-Team Pre-Mortem (Assume Failure)

The factory fails within 6 months. Why?

Kill 1: The quality model never converges.
The accept/reject data is too noisy. The founder accepts sites that are 8.5 when tired and 9.0 when fresh. The classifier learns the noise, not the quality signal. Pre-mortem solution: The rubric must be defined before logging. No data without a structured score. If the rubric can't be articulated, the model can't learn it. If the founder can't score 5 sites consistently, the rubric is wrong.

Kill 2: Agents converge on a local optimum and can't escape.
The reflection loop polishes 7.5/10 sites into slightly shinier 7.5/10 sites. The factory produces "fine" but never great. Pre-mortem solution: The restart signal. When the evaluator scores below 6.0, abandon the trajectory. Start fresh with different constraints. This is the only way to escape local minima.

Kill 3: The photogrammetry pipeline produces garbage.
Client captures are shaky, poorly lit, incomplete. Reconstruction produces floaters, holes, misaligned geometry. Pre-mortem solution: The capture app must guide aggressively — timers, coverage overlays, lighting checks — and reject captures that don't meet quality thresholds before upload. The app does QA, not the reconstruction pipeline.

Kill 4: The founder becomes the bottleneck.
Despite automation, every site still requires the founder's taste decision. At 1,000 sites/month, impossible. Pre-mortem solution: The quality model must be trusted at 85% accuracy before scaling past 50 sites/month. The founder must accept that 15% of sites will be "wrong" by their standard. This is a management decision, not an engineering one.

Kill 5: Wix or Framer ships cinematic scene choreography as a feature.
The differentiation evaporates. Pre-mortem solution: The moat is not the choreography. It is the quality model. Wix can replicate the choreography. It cannot replicate the studio's proprietary accept/reject data and the learned taste function built from it.

---

Steelman of the Opposite Approach

The strongest case for NOT building the autonomous factory:

The studio's competitive advantage is not speed or scale. It is the founder's taste. Every site the founder personally approves carries a signal — "this is what a 9.2 looks like" — that cannot be encoded in a model without losing the thing that makes it valuable. The attempt to automate taste is the attempt to make the founder replaceable, which is exactly the wrong move.

Instead, the studio should build a boutique factory: 10–20 sites/month, each personally overseen by the founder, each carrying the founder's signature. Price at 5–10× the $350 floor. The autonomous factory is a race to the bottom — the moment Wix or Framer ships true autonomy, the factory's output is commoditized. The boutique approach%) is defensible because it is not trying to be scalable. It is trying to | be irreplaceable.

When does this win? High If the founder's taste is genuinely the bottleneck — if the quality difference | between founder-approved and agent-approved sites is large enough that clients can tell — then the Sn boutique approach wins. The autonomous factory only wins if the quality difference is small enough that clients can't tell. This is a bet on the commoditization of taste. The steelman says: make the opposite bet.

---

The 10× Question

What would the autonomous factory look like if it had to be 10× better than the current best?

Not 10× faster or cheaper. 10× better. The current best (Wix Harmony) produces "good enough" sites. A 10× better factory produces sites that the owner shows to friends. The difference is not in generation — it's in judgment. The 10× factory knows when a site is 9.2+ and when it is 8.5, and it can articulate why.

The staircase: the quality model must be human-interpretable (not a black box), so the founder can see what the model is rewarding and correct it. This is the difference between a classifier and a rubric. The classifier says "9.2." The rubric says "9.2 because the camera pacing at gate 2 creates anticipation, the copy register matches the local voice, and the scene density is 15% below the sameness threshold." The rubric is the 10× feature.

---

Confidence & Sources

Claim Confidence Source Verification status
Wix Harmony generates multi-page sites in <60s High Elementor comparison (competitor, but factual) Verifiable
73% of business owners say AI limits unique design High 365i citing Market.us research Single source, but consistent with broader sentiment
Self-critique degrades high-performance tasks (98%→57orkel AI, 50 visual reasoning tasks Peer-reviewed-adjacent (industrial research)  
Spark 2.0 renders 100M+ splats on mobile WebGL2 High World Labs official blog + GitHub (MIT, 2.2K stars) Open source, verifiable
Polycam Business = $400/year with LiDAR + splats High Polycam pricing page, Quasa review Verifiable
No one has built a website quality model Medium-High Absence of evidence across searches Strong negative signal
Lovable = $400M ARR, $6.6B valuation High TechCrunch, multiple sources Verifiable

---

TRACK S — EXPERIENCES THAT HAVE NEVER EXISTED — DEEP PASS

TL;DR

· Generative audio composed from narrative position is the highest-ROI never-existed experience. Satie (NIME 2026) demonstrates the full pipeline: LLM-generated Satie code → Web Audio API playback → procedural spatial motion → live editing. genmusic (npm, March 2026) takes a seed and an intensity signal and "composes and plays music in real time". The missing piece is narrative-position mapping: the site's camera path has a position (0–1), the audio engine reads that position and composes accordingly.
· Multiplayer presence is shipping in niche projects, but no one has applied it to business sites. A 2-person browser metaverse prototype using Vercel + Supabase Realtime + Three.js + WebRTC + Web Audio API "worked more normally than I expected" — avatar positions synced almost instantly, spatial audio worked without issues. CineWorld is a browser-based multiplayer 3D cinema with synchronized video playback and real-time communication. "14 people are exploring this roofer's site right now" is a live social proof mechanic that no one is using.
· Persistent worlds (the site remembers you) are buildable now. activity-tracker persists lastVisitAt to localStorage. Project Eden (VAST AI Research, July 2026) introduces "state before rendering" — a three-layer architecture separating world state from visual output, allowing environments to persist, remember changes, and maintain consistency across viewpoints. The design implications are profound; the tech is trivial.
· Cross-device continuity requires only a session token and world-state serialization. Ably AI Transport (July 2026) streams model responses over an Ably session "so it survives reconnects, follows the user across devices and tabs, and can be stopped from any of them". The reason nobody does it for websites is not technical — it's that most sites don't have world state worth preserving. A cinematic site does.
· The 10× experience from 2028: a site that knows you, adapts to you, plays music composed for your visit, shows you other visitors, and continues exactly where you left off when you switch devices. The staircase: persistence (30 days) → presence (6 months) → adaptive audio (6 months) → continuity (12 months) → full integration (24 months).

---

Current State of the Art

Generative Audio — The Satie Breakthrough

Satie (NIME 2026, June 2026) is the state of the art: "a creativity support tool for authoring spatial generative audio" where "an LLM can generate Satie code, the runtime can generate audio from embedded text prompts via the gen keyword, and the same mechanism can define procedural spatial motion". It runs as an interpreted layer in a web application using the Web Audio API, supporting live editing and real-time visualization of sound trajectories. Sketches can be saved and forked.

genmusic (npm, March 2026) is the production-ready alternative: "Seed-deterministic generative music engine for the web. Feed it a seed and an intensity signal — it composes and plays music in real time." Vanilla TypeScript, Web Audio API. Last updated March 2026.

schwifty (GitHub) generates Strudel/TidalCycles code from natural language that plays instantly in the browser via Web Audio API.

The emotional math: The site's camera path has a position (0–1). The audio engine reads that position and composes accordingly. A "theme" prompt (e.g., "warm, anticipatory, minor key, slow build") is translated into Satie code once. The camera position modulates tempo, key, and instrument density in real time. Each visit produces a score that has never existed and will never exist again. Cost: negligible (Web Audio API is free). Implementation: 30 days for prototype, 6 months for production-quality composition.

Multiplayer Presence — The Proof Points

2-person browser metaverse (May 2026): Next.js + Three.js + Supabase Realtime + WebRTC + Web Audio API. Avatar positions synced "almost instantly." P2P voice with spatial audio (volume based on distance, left-right panning) "worked without any issues." The author was "genuinely surprised that a combination of SaaS alone could accomplish this much".

CineWorld (SideProjectors, August 2026): Browser-based multiplayer 3D cinema. Users join the same 3D cinema, see other players around them, experience videos in a shared virtual environment. Built with Three.js and WebSocket-based communication. "Production Ready — Market validated and ready for acquisition".

WebSocket performance: One proof-of-concept achieved "a stable 30Hz update rate through a lightweight JSON-based communication protocol". CineWorld uses "JSON over WebSocket is fast enough at 20 Hz for 64 clients".

The design question: Do you show avatars or just a counter? Avatars are more magical; a counter is more scalable. The answer: show a counter by default, with an optional "explore together" mode that enables avatars. The counter is the minimum viable presence. The avatar layer is the premium feature.

Persistent Worlds — Project Eden and the State-Before-Rendering Architecture

Project Eden (VAST AI Research, July 31, 2026) is the most important development for persistence: "a state-based world model designed to support long-term consistency, editable environments, multiplayer interaction, and embodied AI research". The key innovation: state before rendering. The system separates the underlying world state from the visual output. "Rendering becomes a way to observe the world, not the place where the world itself is stored". This allows: changes to last (if a fire is put out, it remains out), objects to persist outside the frame, multiple users to interact with one shared reality from different viewpoints.

The three-layer architecture: (1) evolving structured state (coarse geometry, object identity, semantics, action consequences), (2) state-to-observation interface (camera-conditioned cues), (3) generative neural rendering (lighting, texture, materials, motion).

For the studio: This is overkill for a business site. The minimum viable version is localStorage for visit count and progress position. The Project Eden architecture is the 2-year vision: a world that evolves with each visit, where changes persist and the site remembers what you did.

Cross-Device Continuity — The Infrastructure Exists

Ably AI Transport (July 2026): A Next.js AI chat app that plugs Ably AI Transport into the Vercel AI SDK's useChat hook. "The model's response streams over an Ably session instead of a single HTTP response, so it survives reconnects, follows the user across devices and tabs, and can be stopped from any of them". Cross-device and multi-tab continuity is a solved problem.

Chrome 145 (Windows): Device-bound session credentials (DBSC) provide a "new way to protect against cookie theft" by verifying that the user has been using the same device throughout the session. This is security infrastructure, but it establishes the pattern: sessions can be bound to devices and transferred securely.

The studio's opportunity: A QR code on mobile that transfers world state to desktop. The infrastructure exists. The UX pattern: start on phone, scan QR on desktop, pick up exactly where you left off. The question is not technical. It is whether the visitor wants to switch devices. The answer: yes, if the desktop experience is different enough to justify it (larger canvas, more detail, different camera path).

---

Options Ranked (No Ties)

#1 — Generative audio as the signature never-existed experience.

Highest ROI because it is the most emotionally direct and least technically risky. Satie proves the tech. The missing piece is narrative-position mapping. Cost: negligible. Implementation: 30 days for prototype, 6 months for production. The emotional math: a score that has never existed and will never exist again. This is the experience that makes visitors say "I've never heard a website do that."

#2 — Multiplayer presence as live social proof.

"14 people are exploring this right now" converts a solo experience into a shared one. The tech: WebSocket presence (Supabase Realtime or equivalent), ephemeral avatars or just a counter, no persistent chat. Implementation: 30 days for the counter, 6 months for the avatar layer. The moderation problem is solved by ephemerality — no persistent chat, no names, no history.

#3 — Persistent world with visit memory.

The site remembers that you've been here before. On your second visit, the camera path is different. The tech: localStorage for visit count and progress; world-versioning for content that unlocks. The privacy line: store only what's needed (visit count, progress position), never PII, and tell the visitor what you're remembering. Implementation: 30 days for basic persistence, 6 months for world-versioning.

#4 — Cross-device continuity.

Start on phone, continue on desktop. The UX: QR code transfers world state. The infrastructure: Ably AI Transport or equivalent session layer. The challenge: ensuring the desktop experience justifies the switch. Implementation: 30 days for token + serialization, 6 months for a desktop-optimized experience.

#5 — Time/weather-reactive scenes.

The pool company's site in the rain vs. sun. The tech: OpenWeather API + scene modulation. The conversion hypothesis: a pool company showing a sunny pool when it's raining creates desire (aspirational) or dissonance (mismatch). The data isn't in yet. Implementation: 30 days for weather API + scene modulation, 6 months for a full variant library.

#6 — Biometric-responsive (consent-based).

AdaptIQ (April 2026) monitors cognitive engagement via camera and microphone, combining signals into a "Cognitive Engine Score". fio.js 3.0 (Feb 2026) provides "intelligent visual guidance & responsive UX" for facial authentication, with animated scanning effects that guide attention. An IEEE paper (August 2026) presents an "Emotion-Based User Interface" that detects emotion via webcam and modifies interface elements to suit the mood.

The creep factor is real. Google is testing webcam-based reCAPTCHA that asks for a hand scan to prove you're human. The consent UX must be explicit, transparent, and revocable. The regulation (GDPR, CCPA) is evolving. Recommendation: Do not ship biometric-responsive scenes until the consent UX is bulletproof and the regulation is clearer. This is a 2028 feature, not a 2026 feature.

#7 — Haptics.

The Web Haptics API (WICG, April 2026) proposes "a semantic, cross-platform interface that connects web applications to native haptic capabilities". The legacy navigator.vibrate() exists but is "mobile-centric, lacks broad engine and device support". A W3C CSS proposal (March 2026) adds a haptic-feedback property for declarative haptics.

The design language: The shatter you feel. A gate completion that vibrates once, softly. A camera transition that pulses. The API is not production-ready across all platforms. Recommendation: Prototype on Android (where navigator.vibrate() works) and defer cross-platform until the Web Haptics API ships.

---

Implementation Blueprint (Staircase)

30 Days

Action Output Success metric Cost
Prototype generative audio: theme prompt → Satie code → Web Audio playback Manual position slider modulates tempo/key Audio plays without artifacts $0
Prototype persistent visit counter: localStorage + different camera path on visit 2+ Working demo Visit 2 feels meaningfully different $0
Prototype presence counter: WebSocket connection to minimal server, "N exploring now" Working demo on 3 test sites Counter updates in real time $200

6 Months

Action Output Success metric Cost
Production generative audio: camera position modulates composition Unique score per visit No two visits sound identical $3,000
Multiplayer presence with optional avatars "Explore together" mode toggles avatars Avatar sync <100ms latency $2,000
Cross-device continuity: QR code transfers state Phone → desktop handoff State preserved within 5 seconds $1,500

2 Years

Action Output Success metric Cost
Site knows you: visit history, progress, preferences inform experience Personalized camera path on visit 3+ Measurable engagement lift $10,000
Site adapts: weather, time, presence modulate scene Dynamic scene variants Conversion lift (A/B tested) $5,000
Site composes for you: unique audio score per visit Zero identical scores across 1,000 visits Visitor feedback positive $5,000

The 10× version: A website from 2028 that makes today's Awwwards winners look like brochures.

It remembers you across visits, devices, and sessions. It shows you who else is there — not as a gimmick, but as a living presence. It composes music for your visit that has never existed before. It responds to the weather outside your window and the time on your clock. It continues exactly where you left off when you switch devices. The staircase: persistence (30 days) → presence (6 months) → adaptive audio (6 months) → continuity (12 months) → full integration (24 months).

---

Red-Team Pre-Mortem (Assume Failure)

Kill 1: Generative audio is annoying.
The visitor wants the business's message, not a procedurally generated soundscape. Audio competes with content. Pre-mortem solution: Audio must be opt-in, with a clear mute control. Default state is silent. The audio is a reward for engagement, not a barrier to entry.

Kill 2: Multiplayer presence creates anxiety.
"14 people are exploring" becomes "14 people are watching me." Pre-mortem solution: The counter must be anonymous and aggregate. No avatars, no names, no chat by default. Presence is ambient, not social.

Kill 3: Persistence is creepy.
"Welcome back, we saved your place" becomes "Welcome back, we've been tracking you." Pre-mortem solution: Persistence must be transparent and controllable. The visitor can see what's stored and clear it. Default is minimal (visit count only); deeper persistence is opt-in.

Kill 4: Cross-device continuity is never used.
The visitor doesn't switch devices mid-session. Pre-mortem solution: The continuity prompt must appear at a natural break point (after a gate is passed) and be framed as a benefit ("Continue on a bigger screen?") not a command.

---

Steelman of the Opposite Approach

The strongest case for NOT building these experiences:

The studio's driving line is "experience something they never have before on a website." But the business is selling websites to local businesses. The local business owner doesn't care about generative audio or multiplayer presence. They care about leads, conversions, and ROI. The never-existed experiences are founder catnip — fun to build, award-winning, attention-grabbing. But they don't necessarily sell more roofing jobs.

The opposite approach: build the most converting website, not the most novel one. Novelty is a marketing expense; conversion is a revenue driver. Invest in A/B testing frameworks, conversion analytics, and lead-capture optimization — not procedural music.

When does this win? If the studio's clients are primarily acquisition-focused and price-sensitive ($350, not $3,500), conversion optimization beats novelty. The never-existed experiences are a luxury good — they justify a higher price point, but only if the client values them. The steelman says: don't build what's cool. Build what converts.

---

The 10× Question

What would the never-existed experience look like if it had to be 10× better than the current best?

Not 10× more novel. 10× more effective. The current best (an Awwwards-winning 3D site) wins awards but doesn't necessarily convert better. A 10× experience converts 3× better than a static site while also winning awards.

The difference is not in the experience — it's in the conversion architecture embedded in the experience. Every gate is a micro-commitment. Every camera movement is a narrative beat that ends in a call to action. The audio swells when the visitor reaches the contact form. The experience is not a movie with a website attached. It is a website that happens to be a movie.

The staircase: conversion instrumentation (30 days) → conversion-optimized gates (6 months) → audio/conversion sync (12 months) → the experience is the funnel (24 months).

---

Confidence & Sources

Claim Confidence Source Verification status
Satie (NIME 2026) generates spatial audio from LLM prompts via Web Audio API High NIME 2026 paper + Zenodo Peer-reviewed conference
2-person browser metaverse worked "more normally than expected" Medium-High DevelopersIO blog (May 2026) Practitioner report, not peer-reviewed
CineWorld is production-ready multiplayer 3D cinema Medium SideProjectors listing Self-reported
Project Eden separates world state from rendering High VAST AI Research announcement (July 2026) Official research preview
Ably AI Transport survives device switches High Ably documentation + GitHub Verifiable open source
Web Haptics API is not production-ready cross-platform High WICG proposal + W3C CSS draft Standardization in progress

---

TRACK T — EXTREME BUSINESS MODELS — DEEP PASS

TL;DR

· The network effect is the strongest available moat, but it must be tied to a concrete outcome, not a dashboard. Every $350 site as a node in a shared analytics network creates benchmark data no single business has. The design: clients get anonymized industry benchmarks ("your gate completion is 82% vs. industry average 67% — here's how to improve"). The studio gets training data for the quality model. The network effect: more sites → more benchmarks → more valuable to clients → more sites.
· The data moat is real but must be built deliberately. Every configurator interaction, every accept/reject decision, every gate completion is training data — but only if it's logged with structure. The flywheel: more sites → more data → better quality model → better sites → more sites. The privacy-compliant way: aggregate, anonymize, opt-in.
· The competitive threat map is crowded at the "AI website builder" layer but empty at the "cinematic autonomous site factory" layer. Lovable raised $330M at $6.6B valuation (Dec 2025), hit $400M ARR by March 2026. Bolt reached $40M ARR in six months. These are app builders, not cinematic site factories. The differentiation is the experience layer, not the generation layer.
· White-label/franchise models are emerging but none offer cinematic site generation. Lindo.ai offers white-label AI website building from $197/mo. Hydra Partner Program rolls out Q4 2026. Seldonframe is an open-source "AI front-office factory" for agencies serving local businesses. None have the cinematic layer. The franchise model is viable if the quality model gates franchisee output.
· The 10× business question: if selling websites is just the acquisition channel, the business is the quality model itself. License the taste function to other agencies. Sell the rubric. The factory is the product; the websites are the demo. The staircase: data logging (30 days) → model training (6 months) → model gating (12 months) → model licensing (24 months).

---

Current State of the Art

Competitive Landscape (2026) — Verified

Company Funding Valuation ARR Focus Differentiation Source reliability
Lovable $330M Series B (Dec 2025) $6.6B $400M (Mar 2026) AI app builder Vibe coding, developer-focused High (TechCrunch, multiple)
Bolt.new ~$135M total ~$700M $40M (6 months post-launch) In-browser AI dev env WebContainers, code output High (oflight comparison)
Wix Public (NASDAQ: WIX) ~$10B N/A AI website builder (Harmony) 282M users, scale, brand High (public company)
Emergent $130M Series C $1.5B N/A AI apps for SMEs YC-backed, fast iteration Medium (funding announced)
Durable $4.4M Private N/A 30-second site builder Speed, 500k+ users Medium (self-reported)
10Web $2M Private N/A Automated WordPress WordPress ecosystem Medium (self-reported)
Base44 Acquired by Wix for $80M (Jan 2026) N/A N/A Prompt → app builder 250k users, 1,300 paying High (Wix acquisition confirmed)

The gap: None of these companies are building cinematic, 3D, scene-choreographed sites. They are building faster ways to produce conventional websites (Wix, Durable), app-builder platforms (Lovable, Emergent), or agent-assisted design tools (Framer, Webflow). The cinematic autonomous site factory is a genuinely empty category.

White-Label / Franchise Landscape

Lindo.ai: "White-label AI website builder for agencies, SaaS platforms, and entrepreneurs". Full white-label, your pricing, your brand. From $197/mo. Gap: No cinematic layer. No 3D. Conventional websites only.

Hydra Partner Program (CI Web Group): White-label Hydra OS for agencies. "Roll out new client sites in days, not months." Full agency model rolls out Q4 2026. Gap: Early stage, unproven.

Seldonframe (open-source): "Open-source AI front-office factory for agencies serving local businesses: website, booking, intake, CRM, and agents in one workspace. Self-hostable." Give a coding agent a client's URL and it creates a branded website, booking flow, intake, CRM, and AI agent. Gap: No cinematic layer. Open source, not commercial.

The studio's franchise opportunity: A white-label version of the cinematic factory, with the quality model pre-trained and the rubric customizable. The buyer: a regional agency that wants to offer cinematic sites but doesn't have the tech. The price: $2–5K/month platform fee plus per-site fees. What breaks: Quality control at distance. The franchisee's clients aren't the studio's clients; the franchisee's taste isn't the studio's taste. Solution: the quality model gates franchisee output; sites below threshold are flagged for studio review (and the franchisee pays for the review).

Unit Economics to $1M Per Lane

Lane Path to $1M Assumptions Break point Margin
Sites 250 sites/month × $350 × 12 = $1.05M 250 new clients/month, zero churn Labor: 250 sites/month requires ~5 agents + 1 human QA. At $150K/year QA + $50K/year agents = $200K. 81% if QA automates. 50% if not.
Workflows 50 clients × $2,000/month × 12 = $1.2M AI-powered workflow automation for existing clients Acquisition cost per workflow client (~24K). CAC/LTV = 8%, healthy. 90%
Templates 10,000 sales × $100 = $1M Pre-built cinematic site templates Discovery. No distribution = no sales. 99%
AI Receptionist 500 clients × $200/month × 12 = $1.2M AI-powered phone/chat receptionist for local businesses Telephony infrastructure complexity. Requires PSTN integration. 70%

The lane that breaks: Sites, if human QA doesn't automate. The margin collapses from 81% to 50% at 500 sites/month. The lane that survives contact with math: Templates (99% margin, but discovery is the bottleneck) and Workflows (90% margin, healthy CAC/LTV).

IP Landscape — 2026 Guidance

USPTO supplemental guidance (March 2026): The USPTO broadened design-patent eligibility for computer-generated interfaces by "eliminating the long-standing requirement to depict a physical display screen". Graphical User Interfaces, holograms, projections, and AR/VR designs can now be claimed. "Any computer-generated interface or icon that complies with the rules and statutory requirements consistent with this new guidance is patent eligible subject matter under 35 USC § 171 as the design of the interface or icon is considered to be more than a transient or disembodied picture or three-dimensional image".

What this means for the studio: The cinematic site experience — the camera choreography, the gate design, the splat-rendered world — is now potentially design-patentable. Filing costs: $10–15K for a provisional, $30–50K for a full utility patent via a small firm. Recommendation: File a provisional on the choreography injection pipeline (capture → cleanup → automated camera path → gate placement → deploy) within 12 months. This is the studio's most defensible IP.

Adjacent patents: Snap Inc. filed for "XR Experience Based on Generative Model Output" (2024). "Immersive Virtual Location Creation Using Generative AI" (US20260004521A1). "Automatic Code Generation for Three-Dimensional Virtual Objects" (US20260112122A1, Apr 2026). None appear to block a cinematic site factory specifically, but the space is patent-active.

---

Options Ranked (No Ties)

#1 — The network effect: every site as a node.

Design: each $350 site embeds a lightweight analytics script (privacy-compliant, opt-in) that reports anonymized interaction patterns: gate completion rates, time-on-scene, camera path deviations, scroll velocity. The studio aggregates this into industry benchmarks. Clients get the benchmark; the studio gets the training data. The "built by" virality: a small, elegant badge on every site, clickable to the studio's portfolio.

#2 — The data moat: structured accept/reject logging from day one.

Every accept/reject decision must be logged with structured features: scene complexity score, camera pacing score, copy register match, gate density, color coherence, load time, client industry, client size. This data trains the quality model. The flywheel: model improves factory → factory produces better sites → better sites generate more accept signals → model improves further. Privacy-compliant: no PII, aggregate by industry and size, opt-in with clear disclosure.

#3 — Selling the machine: franchise the factory.

Not selling sites — selling the ability to sell sites. The buyer: a regional agency that wants to offer cinematic sites but doesn't have the tech. The product: a white-label version of the factory, with the quality model pre-trained and the rubric customizable. The price: $2–5K/month platform fee plus per-site fees. What breaks: Quality control at distance. The quality model gates franchisee output; sites below threshold are flagged for studio review.

#4 — Unit economics to $1M per lane.

The lane that survives: Templates (99% margin) and Workflows (90% margin). The lane that breaks: Sites (labor-dependent QA). The lane that requires infrastructure: AI Receptionist (telephony). Recommendation: Do not chase all four lanes simultaneously. Start with Sites (the acquisition channel), use the data to train the quality model, then expand to Workflows and Templates.

#5 — The 10× business: license the quality model.

If the quality model works — if it can reliably score sites at 9.2+ — then the business is not selling websites. It is selling judgment. License the quality model to other agencies, design tools, and platforms. Price: $10K/month for API access, $100K/year for on-premise. The websites are the demo; the model is the product.

---

Implementation Blueprint (Staircase)

30 Days

Action Output Success metric Cost
Deploy analytics script on 10 pilot sites Anonymized interaction data flowing Gate completion, time-on-scene, camera deviations logged $0
Start structured accept/reject logging on all agent-generated sites CSV/JSON with features + scores 50 logged sites $0
Research franchise model: discovery calls with 3 regional agencies Discovery call notes ≥1 agency interested in pilot $0

6 Months

Action Output Success metric Cost
Launch client-facing benchmark dashboard Anonymized industry comparisons ≥80% of clients use dashboard monthly $2,000
Train quality model v1 Classifier with ≥75% agreement Precision > 0.8 on "9.2+" class $2,000
Launch white-label factory pilot with 1 franchisee Franchisee producing sites under own brand ≥10 sites produced, quality ≥8.0 $5,000

2 Years

Action Output Success metric Cost
Network effect self-sustaining 500+ sites, benchmarks valuable, badge drives inbound ≥30% of new clients from badge referral $0
Quality model as gate 95% of sites pass without human review Human review only for model-flagged uncertain cases $10,000 (retraining)
Franchise model scales 10 franchisees, $500K/month platform revenue Quality control at distance maintained $50,000 (infrastructure)
Quality model licensed to 3 external agencies $360K/year licensing revenue API usage > 1,000 calls/day $20,000 (API infrastructure)

The 10× version: If selling websites is just the acquisition channel, the business is the quality model. The staircase: data logging (30 days) → model training (6 months) → model gating (12 months) → model licensing (24 months).

---

Red-Team Pre-Mortem (Assume Failure)

Kill 1: The network effect doesn't materialize.
Clients don't care about benchmarks. They care about leads. Pre-mortem solution: The benchmark must be tied to a concrete outcome ("your gate completion is 82% vs. industry average 67% — here's how to improve"). The benchmark is a consulting product, not a dashboard.

Kill 2: The data moat is poisoned by noise.
The accept/reject data is too sparse and too subjective. The quality model never learns. Pre-mortem solution: The founder must define the rubric before logging data. No data without a structured score. If the rubric can't be articulated, the data is worthless.

Kill 3: The competitive threat is underestimated.
Wix, Framer, or Webflow ships cinematic scene choreography as a feature. Pre-mortem solution: The moat is not the choreography — it's the quality model. Wix can replicate the choreography. It cannot replicate the studio's proprietary accept/reject data.

Kill 4: The unit economics break on QA labor.
250 sites/month requires human review that doesn't automate. Pre-mortem solution: The quality model must be trusted at 85% accuracy before scaling past 50 sites/month. The model gates; the human reviews the uncertain cases.

---

Steelman of the Opposite Approach

The strongest case for NOT building the network/data/franchise model:

The studio is a studio, not a platform company. The attempt to build network effects, data moats, and franchise models is the attempt to become something the founder didn't set out to build. The studio's advantage is intimacy: the founder knows the clients, knows the local market, knows the taste. Scaling via franchise dilutes that advantage.

The opposite approach: stay small, stay premium, stay personal. 10 clients at $5,000/site beats 250 clients at $350/site — same revenue, 1/25th the operational complexity. The network effect is a distraction. The data moat is a vanity project. The franchise model is a management burden.

When does this win? If the studio's revenue target is 1M/year (not $10M+), the boutique approach wins. The factory approach only wins if the founder wants to build a platform company. The steelman is a values question, not a strategy question: what does the founder actually want?

---

The 10× Question

What business would we be in if selling websites was just the acquisition channel?

The quality model. If the studio can reliably score websites at 9.2+, the model is licensable to every agency, every design tool, every platform that wants to know if their output is "good." The websites are the training data and the demo. The business is the rubric.

The staircase: log data (30 days) → train model (6 months) → gate internally (12 months) → license externally (24 months). The 10× version: every website builder in the world uses the studio's quality model as their QA gate. The studio doesn't sell websites. It sells the definition of "good."

---

Confidence & Sources

Claim Confidence Source Verification status
Lovable = $400M ARR, $6.6B valuation High TechCrunch, multiple sources Verifiable
Wix acquired Base44 for $80M High Wix announcement, press Verifiable
USPTO broadened design-patent eligibility for CGI High USPTO supplemental guidance (March 2026) Official government source
Lindo.ai white-label from $197/mo High Lindo.ai pricing page Verifiable
Seldonframe is open-source AI front-office factory High GitHub repository Verifiable
No one has built a cinematic autonomous site factory Medium-High Absence of evidence across searches Strong negative signal

---

MASTER ROADMAP (Foundation + Extreme, Sequenced)

Phase Foundation tracks Extreme tracks Dependencies Key milestone
0–6 months Technical bible, operational dossier, first 10 sites R: Data logging, capture app prototype, reflection loop Foundation technical infrastructure Quality rubric defined; 50 accept/reject logged
6–12 months Production pipeline, quality gates R: Quality model v1 (75%), photogrammetry pipeline v1; S: Generative audio prototype; T: Analytics on 10 sites Foundation quality doctrine, R data logging Quality model v1 trained; capture-to-site in 48 hours
12–18 months Scaling to 50 sites/month R: Quality model v2 (85%), factory produces 50 sites/month; S: Presence counter; T: Benchmark dashboard R quality model, T analytics Quality model gates 50 sites/month
18–24 months Scaling to 250 sites/month R: Quality model as primary gate; S: Persistence + continuity; T: Franchise pilot, first external license R quality model, S persistence 250 sites/month with ≤5% human intervention

---

BIBLE AMENDMENTS (Ready-to-Paste)

Section: Quality Doctrine
Add: "Quality is not a feeling. It is a rubric. The rubric must be articulated before it can be automated. Every accept/reject decision must be logged with a structured score against the rubric. No data without a rubric; no automation without data. The self-critique paradox applies: apply the reflection loop only to the bottom 20–30% of output. Do not polish what is already good."

Section: Technology Stack
Add: "The quality model is the core technology. It is a learned classifier trained on the studio's own accept/reject data. It gates every site before deployment. It is retrained quarterly. It is the moat. The photogrammetry pipeline uses Spark 2.0 (MIT) for 3DGS rendering and Polycam for capture. The choreography injection layer is proprietary."

Section: Client Experience
Add: "Every site remembers its visitor. Minimal persistence (visit count, progress) is default. Deep persistence (preferences, history) is opt-in. The visitor can see and clear what's stored at any time. Generative audio is opt-in. Presence is ambient, not social."

Section: Business Model
Add: "The studio's business is the quality model. Websites are the acquisition channel and the training data. The model is licensable to other agencies and platforms. The studio's defensibility is not the generation — it is the judgment."

---

THE TOP 10 EXTREME BETS

Ranked by expected value = impact × probability ÷ cost.

Rank Bet Impact (1–10) Probability Cost (1–10) EV Rationale
1 Quality model trained on accept/reject data 10 0.7 3 2.33 Buildable from data the studio already generates. The core moat.
2 Generative audio composed from narrative position 8 0.8 2 3.20 Satie proves the tech. Web Audio API is free. Highest ROI.
3 Photogrammetry pipeline (phone → world → site) 9 0.6 5 1.08 Spark 2.0 makes reconstruction possible. Capture app is the gap.
4 Network effect via cross-site analytics 8 0.5 3 1.33 Benchmark data is valuable if tied to concrete outcomes.
5 Multiplayer presence counter 7 0.8 1 5.60 Supabase Realtime exists. 30-day implementation. High novelty, low risk.
6 Persistent world with visit memory 7 0.9 1 6.30 localStorage + session state. Trivial tech, high design impact.
7 Selling the machine (franchise) 9 0.4 7 0.51 High impact but management-intensive. Quality control at distance is hard.
8 Cross-device continuity 6 0.6 2 1.80 Tech is trivial. UX question: will visitors switch devices?
9 Licensing the quality model 10 0.3 8 0.38 Highest impact but requires model maturity and sales infrastructure.
10 Time/weather-reactive scenes 5 0.7 1 3.50 Weather API + scene modulation. Conversion hypothesis untested.

---

The loop continues. Tracks P (Frontier Rendering), Q (Generative Worlds), U (2030 Horizon), and V (Knowledge & Prediction) are queued for the next delivery. Depth beats coverage. The red-team and steelman protocols run on each track before delivery.

---

*End of verbatim source. Filed by Motif 2026-09-12.*
