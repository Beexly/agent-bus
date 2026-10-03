# docs/observatory-visual-encoding.md
## What it is (1-2 sentences)
The visual-encoding spec for the Observatory "Edge Map" (the "slate twin"): a spatial intelligence display where every visual property of each game node encodes a model state (confidence, volatility, line movement, public-vs-sharp tug-of-war, verdict) over a 8-step timeline.
## Key metrics/methods (formulas where given, else "not specified")
Encoding channels (not formulas): core size+brightness = signal density; halo = volatility; orbit wobble = contradiction mass; confidence ring = scrubbed-step confidence (collapses when read goes on hold); trail = line movement open→scrubbed; satellite size = market depth; magenta lobe vs cyan node = public-money pull vs sharp divergence; impact ring = injury/roster event shockwave; core color = verdict (cyan PLAY / ultraviolet WATCHLIST / magenta NO-BET / grey HELD). Timeline: Opening → Overnight → Injury report → Public money → Sharp move → Model re-run → Final → Result.
## Data sources named
None named as live; the Edge Map runs on illustrative/demo data until the readiness gate opens, with `ILLUSTRATIVE SLATE - DEMO DATA, NOT LIVE` disclosure always visible; unwired encodings (public/sharp split) stay dark.
## Findings (numbers and facts, not vibes)
- Hover HUD shows five scannable fields: Verdict (+live confidence), Changed (confidence drift + line direction), Risk (volatility band + contradiction mass), Breaks on (the single invalidating event), Receipt (settlement status).
- A read whose confidence decays below the hold line flips to HOLD (grey core, collapsed ring).
- Layout is deterministic and unit-tested (`lib/slate-twin/layout.ts`); GL lazy-loads, respects prefers-reduced-motion.
- Trust-gate guardrail: the casino-tier certainty term that "rhymes with clock" is forbidden; surface uses "hold"/"cleared"/"acquire" instead.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The "Breaks on" HUD field (single invalidating event per read) is a per-pick fragility model: OTHER (display instrument). The hold-state mechanics mirror the selective-publish δ lane: TRUST-SIGNAL-adjacent presentation of uncertainty.
## Engine-actionable? (yes/no + one-line what)
No — display-spec doc on demo data; the underlying confidence/volatility states it renders are the engine pieces that matter, and they live elsewhere.
