# design/motion-and-transition-doctrine.md
## What it is (1-2 sentences)
Complete design doctrine for all animation/motion in Galaxy Sports Edge: motion token values, six principles (motion as information, earned motion, hierarchy via duration, easing precision, no looping in data contexts, accessibility first), per-component motion specs, and forbidden patterns.

## Key metrics/methods (formulas where given, else "not specified")
- Duration tokens: instant 100ms, fast 200ms, standard 300ms, deliberate 500ms, slow 750ms, cinematic 1200ms.
- Easing tokens: ease-in cubic-bezier(0.4, 0, 1, 1); ease-out cubic-bezier(0, 0, 0.2, 1); ease-in-out cubic-bezier(0.4, 0.2, 0.2, 1); ease-spring cubic-bezier(0.34, 1.56, 0.64, 1); ease-data cubic-bezier(0, 0, 0.2, 1); ease-cinematic cubic-bezier(0.16, 1, 0.3, 1).
- Scale tokens: subtle 0.98, enter 0.96, reveal 1.02. Translate: 8/16/32/64px. Blur enter 4px → focus 0px.
- Signal ticker: value update fade over "fast"; line movement color flash 800ms total (200ms to cyan/red, 600ms fade back); movement up → orbital-cyan, down → muted red hsl(0, 60%, 55%) (explicitly NOT casino green).
- Evidence drawer stagger: 50ms/item, max 300ms (cap after 6 items). Galaxy star drift: ±2px over 8–20s, opacity 0.4–0.8. Skeleton shimmer 1500ms linear infinite while loading.
- Accessibility: `prefers-reduced-motion` kills all animation (0.01ms durations), Framer Motion `useReducedMotion()` required; blinking >3Hz = P0 WCAG 2.3.1 violation.

## Data sources named
Design references only: Material Design 3, Apple HIG, Framer Motion (MIT), Vercel, Linear.app, Bloomberg Terminal, F1 timing screens, NASA Mission Control. No football data sources.

## Findings (numbers and facts, not vibes)
- Core brand rule with analytic relevance: confidence scores get NO count-up/pulse/bar-fill animation — an animated score "looks like a slot machine result" and triggers gambling-association concerns; line-ticker pulses must reflect actual movement ("earned motion": cover the UI; if animation feels right with no data change, remove it).
- Explicitly forbidden: pulsing odds, looping motion on stable data, motion implying real-time accuracy the data may not have.
- This is a design/UI doctrine — zero football intelligence, no stats, no datasets.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — UI motion design doctrine. Adjacent trust-signal note only at the presentation layer: motion must never imply false "live" urgency about data the engine doesn't have.

## Engine-actionable? (yes/no + one-line what)
no — front-end motion/UI doctrine; nothing for the prediction engine's data layer.
