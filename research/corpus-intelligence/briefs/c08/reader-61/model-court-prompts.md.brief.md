# Sports/docs/product/model-court-prompts.md
## What it is (1-2 sentences)
Phase 4 spec for Model Court — a conversational Q&A layer on the Game Intelligence Room powered by Claude API only (DEC-020, no OpenAI), answering questions strictly from attached evidence with refusals as first-class outputs.
## Key metrics/methods (formulas where given, else "not specified")
- Three query modes: ASK_THIS_GAME (one gameId), ASK_THE_SLATE (all games on a date), EXPLAIN_FOR_MY_LENS (same answer reframed through a UserLens: FAN/FANTASY/CREATOR/ANALYST).
- System prompt: explain model reads citing specific factor breakdowns / market metrics / evidence registry entries; refuse when evidence is thin or question asks for betting certainty, EV/Kelly/win-rate figures, competitor comparisons, out-of-context games, or personal advice.
- Citation format: "(source: <evidenceRef.kind> at <evidenceRef.observedAt>)"; kinds: PICK_SIGNAL_SNAPSHOT, GAME_SIGNAL, SOURCE_SNAPSHOT, INGESTION_RUN, LOSS_AUTOPSY, GATE_DECISION, MARKET_PULSE, EVIDENCE_HEALTH.
- Refusal triggers include evidence health grade D/F. Response parsed into ModelCourtAnswer { answer, citations, refusal: RefusalKind, modelVersion, responseId, latencyMs }.
- Cost/latency targets: avg latency < 3s, per-query cost < $0.05, p95 latency < 6s. Eval plan: 3 happy-path + 6 refusal + 5 lens + 6 adversarial evals; eval runner blocks deploy on red.
- Quotas: Free 3 questions/day, Pro 30, Elite unlimited (open item, default yes).
## Data sources named
Intelligence Graph state per game: Edge Index, gate decision, evidence health (grade, freshnessSeconds, bootstrapShare%), books polled/reporting, market consensus, line movement, volatility, sharp money signal, picks with factor breakdowns, pre-mortem ("What Would Change Our Mind"), evidence registry refs. Public Ledger (settled picks), Pass List (gated games), Loss Room (losses with autopsies).
## Findings (numbers and facts, not vibes)
- 9 acceptance criteria including "no public EV/Kelly/win-rate leakage across a 100-query test sample" and "banned vocabulary scan on a 100-query sample returns zero hits".
- The Court never produces betting certainty language; the EV/Kelly refusal template names only published artifacts (factor breakdown, Edge Index, pre-mortem, Public Ledger).
- If latency/cost targets are missed, the spec explicitly forbids loosening refusal rules — cache aggressively instead.
- X-bot Q&A for Model Court defaults to no (broadcast surface only); reconsider Phase 5+.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Pre-mortem ("What Would Change Our Mind") per game + evidence-health grading — TRUST-SIGNAL (structured uncertainty disclosure, calibrate-able)
- Factor breakdown citations with evidence refs — TRUST-SIGNAL
- Public Ledger / Pass List / Loss Room as refusal alternatives — TRUST-SIGNAL (audit-trail product surface)
## Engine-actionable? (yes/no + one-line what)
No — product/conversational spec; no metric formulas or modeling methods for the engine.
