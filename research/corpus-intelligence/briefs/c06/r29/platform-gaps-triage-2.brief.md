# strategy/platform-gaps-triage-2.md
## What it is (1-2 sentences)
A 2026-06-03 second-pass 30-gap audit triage (non-betting edition) that sorts gaps into ON-BRAND build items (context, transparency, calibration), founder/legal-gated items, and rejected items that re-enter gambling/tout territory. It concludes the moat is context + transparency + calibration + responsible play, declining anything whose payoff is more action rather than more trust.
## Key metrics/methods (formulas where given, else "not specified")
Not specified (triage, no formulas). Gap IDs referenced: shipped #28/9 (historical performance viz: accuracy by sport/type, calibration curve, vs-close, streaks, ROI via performance-analytics.ts; #12 comparative model display via consensus.ts + consensus-view.ts), build items #19 (loss autopsy/accountability via /accountability), #29 (responsible-AI/model-limitations disclosure), #15 (advanced-stats education glossary), #16 (team/player profile pages), #3 (comparative analytics), #24/20/26/8/11 (dark mode/PWA/audio/podcast/personalization), #22/23 (fantasy/props + tournament modeling), #17 (coaching analytics), #18 (venue/HFA dashboard); founder-gated #1/4/27/2/14/25/13/30/5/6/7/21; rejected: sponsorships/affiliate paths and user pick-selling/cash-out.
## Data sources named
Code modules: performance-analytics.ts, consensus.ts, consensus-view.ts, responsible-gaming.ts; context sources: ESPN/openfootball for team/player profile pages; loss-autopsy and CockpitDecision internal models.
## Findings (numbers and facts, not vibes)
- 2 gaps SHIPPED (28/9 historical performance viz incl. calibration curve and vs-close; 12 comparative model display "Galaxy 72% vs Vegas 51% vs public").
- 10 gap items queued as Build: #19 accountability, #29 model-limitations disclosure, #15 glossary, #16 profile pages, #3 comparative analytics, #24/20/26/8/11 (dark mode/PWA/audio/personalization), #22/23 fantasy-props/tournament modeling, #17 coaching analytics, #18 venue/HFA dashboard.
- Founder/legal-gated: mobile app, video/film breakdown, live in-game (paid live feed + WebSocket infra), official-data licensing, B2B/data-licensing/white-label, social/community/gamification (only on verifiable track records).
- Rejected: sponsorships/affiliate (except with clear disclosure, never urgency), user pick-selling/cash-out, "are they chasing losses" behavioral profiling for monetization (behavior only triggers responsible-play nudges).
- Throughline: decline anything whose payoff is more action rather than more trust.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Calibration curve, vs-close, streaks, ROI, loss autopsy, model-limitations disclosure, "when NOT to trust us" -> TRUST-SIGNAL.
- #17 coaching analytics -> COACHING (new model-input signal: quantify coaching).
- #18 venue/HFA dashboard -> OTHER (venue/home-field model-input signal).
- #16 team/player profile pages (form, splits, H2H, game logs) and #3 comparative analytics -> OTHER (context layer).
- #22/23 fantasy/props + tournament modeling -> OTHER (engine extension items, PropPick/bracket model).
## Engine-actionable? (yes/no + one-line what)
Yes - wire coaching analytics (#17) and venue/HFA dashboard (#18) as quantified model-input signals, and extend the engine with PropPick + tournament/bracket modeling (#22/23).
