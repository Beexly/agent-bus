# arxiv-program/research/2026-09-21/nfl-protocols/injury-concussion-protocol.md
## What it is (1-2 sentences)
A machine-readable step breakdown of the NFL's actual return-to-play rules, compiled 2026-09-21 from official NFL/NFL-NFLPA documents (concussion Return-to-Participation Protocol; Game Day Checklist Rev. Oct 2022; Injury Report Policy post-2016 "Probable" removal), so availability modeling runs on the rules rather than media noise. Every section is labeled [CONFIRMED] (official docs) or [REPORTED] (verified secondary), with gaps labeled.
## Key metrics/methods (formulas where given, else "not specified")
No formulas. Key structures:
- Concussion game-day flow (C1–C7): No-Go signs (LOC, ataxia, confusion, amnesia) → automatic no-return for rest of game; ataxia added Oct 2022 (post-Tua Tagovailoa investigation), replacing "gross motor instability" and eliminating the "alternative explanation" loophole.
- Five-step Return-to-Participation Protocol: 1 Rest/Recovery → 2 Light Aerobic → 3 Continued Aerobic + Strength → 4 Football-Specific (strictly non-contact) → 5 Full Contact/Clearance. Gate rule: advance only after tolerating all current-step activities without symptom recurrence; regression to prior step on recurrence. Final clearance = Head Team Physician decision **confirmed by the Independent Neurological Consultant (INC)**.
- Neurocognitive testing must be completed before contact; abnormal → retest at interval (typically 48 hours).
- General injury track: practice designations DNP/LP/FP; game status Out/Doubtful/Questionable (Probable eliminated 2016 — ~95% of "probable" players played); game status due 4:00 PM ET two days before game day; official inactive list ~90 min before kickoff is final word.
- Enforcement: Ravens $100K (Oct 2025, Lamar Jackson hamstring); Falcons $75K + Arthur Smith $25K (2023, Bijan Robinson); Steelers $75K + Mike Tomlin $25K (2019, Roethlisberger elbow).
## Data sources named
Official-text mirrors of NFL Head, Neck and Spine Committee protocols and the Oct 2022 Game Day Checklist; NFL–NFLPA joint statement Oct 8, 2022; secondary: profootballnetwork.com, sportingnews.com, rotowire.com, mybookie.ag, 4for4.com, si.com.
## Findings (numbers and facts, not vibes)
- Once a concussion is diagnosed, the player may not return to that game ("Madden Rule" — reported as named rule, consistent with official docs).
- No set timeframe for return; daily monitoring (or more frequent) required through the entire protocol; INC must be informed at diagnosis.
- No-contact activities allowed with abnormal neurocognitive testing; contact barred until back to baseline OR Team Physician determines non-concussion cause.
- Non-concussion injuries have no mandatory progression: a player can go DNP Friday → play Sunday; "Questionable" is the mandated bucket for *any* uncertainty since Probable was killed (not a 50/50 coin flip).
- Concussion is an absorbing state until INC confirms: any concussion designation means the 5-step progression is running; reporters describing a concussed player "practicing Friday" are describing at most Step 3–4.
- The observable leak for concussions is practice participation: DNP (concussion) → LP (concussion) maps to Steps 1–4; "Full" + no game designation after a concussion = Step 5 complete, INC confirmed.
- Rest vs. injury is labeled: NIR-Rest/veteran rest days permitted but must be labeled; status changes after the Friday 4 PM ET report must be re-reported.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: protocol-derived encoding beats media noise — encode practice-participation *transitions* (DNP→LP→FP = improving; FP→LP→DNP = deteriorating), not beat-writer verbs; concussion = absorbing state until INC confirms.
- OTHER: enforcement history (Ravens $100K, Falcons $75K/$25K, Steelers $75K/$25K) shows injury-report violations are documented and finable — a player added/downgraded after the Friday 4 PM ET report is itself a signal.
## Engine-actionable? (yes/no + one-line what)
Yes — encode injury availability as protocol-state transitions (practice trend Wed→Thu→Fri; Friday designation binding; concussion absorbing until INC-confirmed) rather than parsing reporter language.
