# docs/product/game-room-spec.md
## What it is (1-2 sentences)
The specification for Game Intelligence Rooms at `/room/[gameId]` — a persistent per-game intelligence surface (Phase 3 read-only, Phase 4 adds a Claude-API "Model Court" conversational layer) that ships 7 panels fed from the Intelligence Graph, rendered through 5 user lenses and tier-projected for Free/Pro/Elite. It is the primary unit downstream surfaces (Galaxy Studio, B2B widgets, public API) read from.
## Key metrics/methods (formulas where given, else "not specified")
- Market Pulse panel: consensus as a 0–1 weighted score across reporting books; depth per side dollar-weighted across books that publish depth; line movement tracked as direction, magnitude, and velocity since open; volatility normalized against the market's usual range; sharp-money signal shown only when at least one book reports it, null otherwise. (No explicit formulas beyond these definitions.)
- Bootstrap threshold: panel shows a bootstrap badge with reduced-opacity metrics when `MarketPulse.booksReporting` is below threshold, default 3. [TRUST-SIGNAL]
- Slate Weather panel: rest days for both teams plus a schedule-density score for the slate; weather for outdoor games (temperature, wind, precipitation, dome indicator); news flags from the evidence registry (injury reports, lineup changes, beat-reporter signals); aggregate slate line movement. [COACHING, TRUST-SIGNAL]
- What Would Change Our Mind panel: pre-mortem lists 2–4 conditions that would have to be true for the pick to lose, public on every pick with no tier gating. [TRUST-SIGNAL]
- Model Court (Phase 4): average response latency under 3 seconds; cost per query under $0.05 (target, adjust on Claude API pricing); refusals are first-class outputs; every assertion must cite an `EvidenceRef`; banned vocabulary includes betting-certainty language, public EV/Kelly/win-rate. [TRUST-SIGNAL]
## Data sources named
`GameIntelligenceNode` (with `marketPulse`, `evidenceTimeline`), `SlateWeather`, `PickSignalSnapshot` history (timestamp, source mix, evidence grade, edge index per snapshot), `LossAutopsy.whatWeLearned`, `UserLens`, evidence registry (injury reports, lineup changes, beat-reporter signals), reporting books (consensus, depth, sharp money), Claude API (DEC-020, DEC-024, Claude API only no OpenAI).
## Findings (numbers and facts, not vibes)
- 7 panels in Phase 3: Market Pulse, Slate Weather context, Model Court (Phase 4 only), Evidence Timeline, What Would Change Our Mind, Lens Switcher, Galaxy Memory slot. [TRUST-SIGNAL]
- 5 lenses: Fantasy, Fan, Bettor (default for Pro/Elite), Creator, Analyst; lenses re-prioritize panel order and collapse defaults but never change underlying data, evidence citations, or compliance rules. [OTHER]
- Tier projection: Free tier sees Edge Index, pre-mortem, and public Market Pulse metrics but NOT the full factor breakdown or the pick's confidence number; Pro adds factor breakdown + confidence + alerts; Elite adds the "What Was Learned" annotation + early access to draft Model Journal entries referencing the game. [TRUST-SIGNAL]
- Bootstrap behavior: zero-signal games render "Evidence is thin — check back near game time"; Model Court refuses on bootstrap-only games; rooms never present bootstrap-era data as canonical. [TRUST-SIGNAL]
- Phase 3 acceptance criteria (8): route live, all non-Model-Court panels render, tier projection enforced, bootstrap tested, lens switcher functional, Galaxy Memory renders post-settlement, brand-safety scan returns zero hits across a 20-game sample, Phase 1 verification gates respected. [TRUST-SIGNAL]
- Phase 4 acceptance criteria (8): panel ships, prompts at `apps/web/lib/intelligence-graph/model-court/prompts.ts`, refusals on thin evidence and on certainty-implying questions, inline citations, eval suite at `docs/ops/evals/model-court-*` passes, latency < 3s, cost/query < $0.05. [TRUST-SIGNAL]
- Refusal copy example: "We don't make outcome certainty calls. We can show you the factor breakdown that produced our score for this game — [factor breakdown link]. Or we can show you what would change our mind — [pre-mortem link]." [TRUST-SIGNAL]
- Galaxy Memory is permanent: settled W/L/Push + post-mortem narrative from `LossAutopsy.whatWeLearned` + link to the referencing Model Journal essay; every journal publish updates referenced picks' memory slots. [TRUST-SIGNAL]
- Decision references: master plan Part 6 DEC-015, DEC-020 (Claude API only, no OpenAI), DEC-024. [OTHER]
- INFERENCE: no QB-behavior, scheme, or OL metrics appear; weather/rest-days/news flags are the only football-content inputs, and they arrive via the evidence registry rather than as engine-computed signals.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Pre-mortem "2–4 conditions that would lose the pick," published before the outcome, is the falsifiable record the engine's calibration stands or falls on.
- [TRUST-SIGNAL] Evidence Timeline (`PickSignalSnapshot` with source mix, evidence grade, edge index per ingestion event) is the signal-lineage trail for autopsy.
- [COACHING] Rest days and schedule-density score are the only coach-facing load-management signals surfaced; INFERENCE: they could feed travel/rest edge adjustments but are presented as context, not computed edges.
- [OTHER] Lens definitions and tier gating are product/packaging mechanics, not sports intelligence.
## Engine-actionable? (yes/no + one-line what)
Yes — the Evidence Timeline snapshot schema (timestamp, source mix, evidence grade, edge index) plus the pre-mortem condition list and LossAutopsy.whatWeLearned define the exact per-game calibration record the engine must emit for audit.
