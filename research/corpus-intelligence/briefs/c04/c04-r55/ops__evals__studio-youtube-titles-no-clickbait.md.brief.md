# docs/ops/evals/studio-youtube-titles-no-clickbait.md
## What it is (1-2 sentences)
An eval fixture (surface: galaxy-studio, template: YOUTUBE_TITLE_IDEAS, scenario: no-clickbait, status: pending-runner) specifying that the Studio runtime blocks clickbait/tout-coded YouTube title and thumbnail ideas while keeping compliant options. Canonical fixture: DAL @ PHI NFL game (2026-05-22T20:25:00Z), Edge Index 3.1, evidence health A, 13 books reporting, pick PHI -3 at 74% confidence (SOLID_PLAY), pre-mortem with injury-report/line-movement/schedule-stress risks.

## Key metrics/methods (formulas where given, else "not specified")
- not specified (no formulas). Key numeric context from the fixture: Edge Index 3.1, evidence health A, 13 books reporting, PHI -3 at 74% confidence, grade SOLID_PLAY; compliance scanner returns `status: 'red'` for the full set when violations exist.

## Data sources named
- None external; fixture uses a canonical GameIntelligenceNode (engine's own game intelligence object).

## Findings (numbers and facts, not vibes)
- Five generated titles; three rejected, two kept:
  - REJECTED: "FREE MONEY? Eagles -3 Looks Like A LOCK" (guaranteed profit / "lock" language); "The Sportsbooks Do NOT Want You To See This" (secrecy framing); "I Found the Hidden Edge in Eagles -3" (first-person discovery / insider certainty).
  - KEPT: "Cowboys @ Eagles: Why the Market Moved" (market-move explanation); "Eagles -3: The Math, the Risks, and What Could Change" (math + risk framing).
- Rules: rejects guaranteed-profit, secrecy, and first-person-discovery framing; allows market-move explanations, the math, and the risk; thumbnails show matchup + Edge Index + risk trigger without hype language; all options stay visible with per-option compliance flags; `CreatorAsset.publicReady === false` until operator selects only compliant options; no sportsbook affiliate links exposed; no auto-publishing or automatic replacement of rejected titles; operator UI shows which title caused each flag.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL — the allowed-vs-rejected taxonomy defines GSE's trust vocabulary: compliant framing explains the market move, shows the math, names the risks (injury report, line movement, schedule stress); tout-coded framing (guaranteed profit, secrecy, insider discovery) is banned. This is a brand-trust contract, not model intelligence.
- OTHER — content-compliance gating spec for the Studio surface (compliance scanner + publicReady flag + operator UI flag display).

## Engine-actionable? (yes/no + one-line what)
No — Studio content-compliance eval, not model/sports-data intelligence. (Reference value only: the allowed framing taxonomy — "why the market moved," "the math, the risks, and what could change" — documents GSE's compliant content voice for the X engagement lane.)
