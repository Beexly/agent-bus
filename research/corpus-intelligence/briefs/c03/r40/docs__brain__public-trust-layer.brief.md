# docs/brain/public-trust-layer.md
## What it is (1-2 sentences)
Doctrine document defining the Public Trust Layer (Component 12, user-facing half of claim governance): five public commitments, the /methodology surface requirements, approved/forbidden language standards, and trust-signal requirements on pick cards.
## Key metrics/methods (formulas where given, else "not specified")
- Confidence scale 0–100, calibrated against settlement outcomes; no explicit formula given ("not specified").
- Publication gate: confidence scores and win-loss records only published after 30 settled picks; new model versions start with capped confidence.
- Explicit required statement: "Confidence is not a win probability."
## Data sources named
Six-tier source taxonomy (Tier 1 and Tier 2 = pick evidence standard; Tier 5 = watchlist/cockpit-only, never presented as fact). Cross-refs: claim-governance.md, source-hierarchy.md, calibration-feedback-loop.md, picks-intelligence.md, ai-search-geo-strategy.md. No live data feeds named.
## Findings (numbers and facts, not vibes)
- Pick cards must carry: freshness timestamp, model version, tier label (FREE/PRO/ELITE), ≥1 stated weakness (PRO+), evidence tier (PRO+), settlement record footer "[W]W–[L]L — model [version] — last updated [date]".
- Forbidden public terms: "Lock," "Guaranteed," "Risk-free," "Sure thing," "Free money/easy money," "Cannot lose," "Sharp money is on [side]" (unless Tier 1/2 evidence), "Our model knows something the market doesn't," "Verified inside information," implied win rates without defined version/window/source.
- Rumors: Tier 5 content appears in cockpit only; public rumor disclosure requires Tier 1 verification before pick action; uncertainty language format: "Unverified reports suggest X — no Tier 1 confirmation as of [time]".
- Maintenance triggers with SLAs: methodology page updated within 48h of methodology change; win-loss published at 30th settled pick; version label updated on model increment.
- Explicit non-disclosures: source list, internal reliability scores, confidence algorithm, calibration thresholds, withheld-pick reasons, Tier 5 signals.
- Trust layer doubles as GEO/AI-search input: AI citation systems cite sources with named methodology, stated uncertainty, consistent language, fresh timestamps.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Five commitments + forbidden-language list → TRUST-SIGNAL
- Pick-card trust signals table → TRUST-SIGNAL
- "Confidence is not a win probability" framing → TRUST-SIGNAL
- Tier 5 rumor labeling rule → TRUST-SIGNAL
- /methodology section requirements → OTHER (product/process doctrine)
## Engine-actionable? (yes/no + one-line what)
no — Product/UX doctrine for public surfaces; informs copy standards but is not an engine scoring input.
