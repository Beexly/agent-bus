# docs/brand/GALAXY_VISUAL_OS_2026.md
## What it is (1-2 sentences)
The Galaxy Visual OS — an operating system for how Galaxy Sports Edge looks, moves, and behaves — covering brand idea, palette tokens, motion language, data-visual grammar, interaction grammar, voice, the four-door navigation law, and accessibility/performance as aesthetic requirements.
## Key metrics/methods (formulas where given, else "not specified")
- Palette tokens: obsidianBlack #050608 (base), ionWhite #F6F7FA (text), orbitalCyan #00E5FF (signal/data), ionMagenta #FF2DD6 (surgical emphasis, restrained), softUltraviolet #7A5CFF (thinking layer), steelGray #211A33 (panels/dividers). Semantic roles to formalize: verify (green/teal), alert/warning (amber/red), muted, proof (source ticks). Desaturate accents 10–15% in dense/dark contexts.
- Data-visual grammar table: Edge = directional beam/rail; Confidence = calibrated ribbon/ring thickness; Volatility = unstable perimeter/amber shimmer; Source quality = proof ticks/layered trace; Line movement = orbit shift/gravity bend; Public pressure = heat haze/pressure bar; Injury uncertainty = fog state; No-play = quiet lockout frame, never shame language; Calibration = ring alignment/reliability curve; CLV = closing-line trail; Market mirage = split overlay/false-signal flag.
- Motion verbs: Detect, Focus, Compare, Resolve, Warn, Confirm, Route, Broadcast — every motion belongs to exactly one verb; respects prefers-reduced-motion; no autoplay audio ever.
## Data sources named
- Code source of truth: apps/web/lib/brand.ts → BRAND_COLORS (tokens owned in code, not this doc).
- nav.tsx / mobile-nav.tsx (four-door navigation parity).
- INTERACTION_INVENTORY.md (interaction grammar reference).
## Findings (numbers and facts, not vibes)
- Closer: "We detect. You decide." Tagline: "Find the signal before the market moves."
- Public navigation is four doors + one media door, never more: Board · Players · Intelligence · Fantasy & Daily + The Beat. Proof consolidates into "The Proof Room" under Intelligence.
- Every interactive page must ship ≥1 real control (filter, compare, scrub, expand, simulate, inspect, personalize, save, route, explain, replay, collapse-complexity); a page of cards + paragraphs is a failure.
- Voice lines approved for use: "We detect. You decide." · "Signal over noise." · "Proof before confidence." · "Better reads. Cleaner decisions." · "The board moved. Here's why." · "This is not a pick. It is a decision surface." · "No edge detected." · "Confidence is earned, not claimed."
- Banned language (enforced by BANNED_LANGUAGE + public-copy scanners): guaranteed profit, lock of the day, risk-free, free money, sure thing, casino, cashout, degenerate, whale, easy win, smash, hammer, religious/worship framing, sportsbook hype.
- Density rule: progressive disclosure — plain-English explanation first, expert detail on demand.
- Accessibility/perf as aesthetic: reduced motion, WCAG contrast on dark surfaces, keyboard nav, visible focus, mobile-first density, load budgets, no layout shift from motion, token-based skeletons.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: banned-language enforcement and the "confidence is earned, not claimed" voice doctrine align with the trust posture in picks-intelligence.md.
- OTHER: brand/visual doc; the data-visual grammar (confidence ribbon, CLV closing-line trail, injury-uncertainty fog, calibration rings) is presentation-layer only.
## Engine-actionable? (yes/no + one-line what)
no — brand/visual operating system; no model, metric, or signal for the prediction engine.
