# design/hero-stack-decision.md
## What it is (1-2 sentences)
A 2026-09-12 engineering decision record vetting the 3D/motion dependency stack for the GSE marketing site (React 18.3 / Next 14.2): versions, licenses, download figures, and budgets were read fresh from GitHub API / npm / PyPI rather than from memory. It adopts react-three-fiber 8.18.0 + drei 9.122.0 + react-postprocessing 2.19.1 + GSAP 3.15.0 + three 0.184.0, rejects five other candidates, and keeps all 3D lazy-loaded off the homepage critical path.
## Key metrics/methods (formulas where given, else "not specified")
- Budget: homepage measured 593 KB decoded / 159 KB brotli JS (audit 2026-09-11), judged ~2x a world-class Next.js marketing page; r3f+drei+postprocessing adds ~180 KB decoded per route, so 3D is lazy-loaded onto routes where 3D is the product, never the homepage.
- Peer-range checks: postprocessing engine declares three >=0.168 <0.187; three pinned at 0.184.0.
- Library download comparisons: lenis 1,100,438 vs locomotive-scroll 11,127 weekly downloads; motion 15.4M + framer-motion 34.3M weekly downloads; motion is ~18 KB brotli via LazyMotion/m subset, GSAP ~25 KB brotli.
- Toolchain gotcha documented: under moduleResolution "bundler", `THREE.Mesh` as a type fails with TS2694 because @types/three has no "types" condition in its exports map; standing workaround is `type Mesh = InstanceType<typeof THREE.Mesh>;` with no tsconfig change.
## Data sources named
- GitHub API, npm registry, PyPI JSON API (all read 2026-09-12); repo file `docs/design/site-audit-2026-09-11/a11y-perf.md`; repo file `components/three/signal-core-scene.tsx`.
## Findings (numbers and facts, not vibes)
- React 19 gates the current line: @react-three/fiber 9.7.0 needs react >=19 <19.3; drei 10.7.8 needs react ^19 + fiber ^9; react-postprocessing 3.1.1 needs react ^19 + fiber >=9.7.0. Adopting them requires a React 19 + Next 15/16 migration; the app carries 100+ policy tests on the current runtime, so migration is deferred and the 8.x line is the standing choice.
- Shipped: signal-core-scene.tsx (+ -lazy.tsx) mounted on /observatory, replacing hand-rolled interactive-galaxy; homepage keeps zero-dependency motion primitives.
- GSAP license posture: proprietary Webflow "no charge" license (effective 2025-04-30), commercial use permitted with three restrictions (no competing no-code visual animation builder, no reverse engineering toward a competing product, no removing proprietary notices); revocable and amendable — treat as vendor license, not permissive.
- Dropped: Theatre.js (public repo dormant since 2024-04-11; @theatre/studio is AGPL-3.0-only); locomotive-scroll (superseded, ~1% of lenis traction, last commit 2026-04-01); lenis trialed and removed (4 KB brotli for a feel change the RAF+CSS-var scroll already covers); framer-motion/motion kept as "adoptable now" (react ^18 || ^19, no migration needed), dropped only on the ~18 KB brotli budget.
- Open items: React 19 migration; chunk-delta measurement of /observatory vs the 689 KB / 183 KB baseline; three hand-rolled three.js surfaces (interactive-galaxy on /human and /methodology, consensus-engine-3d on /intelligence, galaxy-slate-twin on /observatory) as r3f candidates.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (site engineering / dependency and performance decision record; no football intelligence).
## Engine-actionable? (yes/no + one-line what)
No — marketing-site frontend dependency decision; not engine signal material.
