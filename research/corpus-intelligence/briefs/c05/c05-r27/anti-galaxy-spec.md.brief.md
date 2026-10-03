# product/anti-galaxy-spec.md
## What it is (1-2 sentences)
Spec for "Anti-Galaxy," a second model intentionally optimized to be wrong — same factor inputs as production Galaxy but with inverted weights and inverted gate logic — running in parallel so the production model is falsifiable in real time. Pro+ users see both feeds side by side; the validation is the product.
## Key metrics/methods (formulas where given, else "not specified")
not specified. Inversion mechanics: where Galaxy weights rest-advantage +0.8, anti-Galaxy weights it −0.8; gate inverted (publishes when production gates); confidence inverted (a "73% confidence" anti-pick = a pick production gave 27% and rejected); anti-pick confidence range 50–95. The file's own illustrative example: "Anti-Galaxy hit 47% on settled picks this month. Production Galaxy hit 58% on the same slate."
## Data sources named
PickSignalSnapshot, GameSignal, SourceSnapshot (shared inputs with production); AntiGalaxyPick table (separate from main Pick table); AgentRunLog (convergence warnings, severity HIGH); /anti-galaxy page (Pro+ tier), /anti-galaxy/summary (FREE tier), /cockpit/anti-galaxy-warnings; /methodology anti-Galaxy section.
## Findings (numbers and facts, not vibes)
- Worker constraints: cannot read or modify production Pick rows; cannot write to PickSignalSnapshot or GameSignal; cannot influence the production scoring engine.
- Convergence flag: when anti-Galaxy and production agree on a pick, it logs MODEL_CONVERGENCE_WARNING (severity HIGH) and triggers operator review before the production pick publishes — interpreted as possible factor-structure degeneration or meta-bug.
- Weekly anti-Galaxy report (operator-only): aggregate stats, convergence warnings, divergence patterns; per-factor inversion analysis flags production weights that may be wrong (e.g., anti-Galaxy beating production when schedule-stress is the heaviest factor).
- Anti-patterns enforced: no "fade anti-Galaxy" tail product, no anti-Galaxy alerts, no anti-Galaxy X bot, surface is research not marketing.
- 11 acceptance criteria for v0 (schema migration, parallel worker per ingestion cycle, independent settlement, side-by-side feeds, tier projection, etc.). Open items default to: paired version line mirroring production, publishes even when production gates, meaningful-confidence-only picks (>60% inverted confidence), no third random model in v0.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the whole spec is a trust product — falsifiable picks, convergence warnings, no marketing-aggregate claims; the per-factor inversion analysis doubles as a factor-weight calibration signal.
## Engine-actionable? (yes/no + one-line what)
yes — feed the anti-Galaxy per-factor inversion analysis into the factor-weight calibration loop: any factor where inverted weights outperform production is a candidate for a production weight correction.
