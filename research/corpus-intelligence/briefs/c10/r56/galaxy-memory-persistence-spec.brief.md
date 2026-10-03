# product/galaxy-memory-persistence-spec.md
## What it is (1-2 sentences)
A product spec for "Galaxy Memory" — a permanent, append-only post-settlement panel on each tracked game's Game Room page, preserving the settled outcome, pick snapshot, pre-mortem, loss autopsy link, pre-mortem comparison tags, Model Journal cross-references, and social post-mortem anchors. Status: Phase 3 build; spec authored by Claude, implemented by Codex.
## Key metrics/methods (formulas where given, else "not specified")
not specified — this is a persistence/product spec, not an engine method. Pre-mortem comparison tags are CALLED / DID_NOT_HAPPEN / MISSED; retention policy is permanent and append-only; mutation attempts log to AgentRunLog and 403 (acceptance criterion 9).
## Data sources named
`Pick`, `PickSignalSnapshot`, `Pick.preMortemContent`, `LossAutopsy`, `ModelJournalEntry`, `AgentRunLog` (tables); optional denormalized `GalaxyMemory` Prisma model (fields listed in spec).
## Findings (numbers and facts, not vibes)
- The Galaxy Memory slot captures 8 items per settled game: settlement outcome, pick snapshot, pre-mortem, loss autopsy link, pre-mortem comparison, Model Journal refs, social thread anchors, model version stamps (publish vs settlement).
- Memory is PUBLIC by policy — "All Galaxy Memory data is public per the platform's transparency posture. No tier gating on Memory itself."
- Privacy: no PII anywhere in Memory data; operator `authorEmail` on autopsies is NOT surfaced publicly.
- Acceptance criteria include brand-safety scan of 50 settled-game Memory panels returning zero hits, and deterministic rendering ("Does not call LLMs").
- NOTE against standing doctrine: the 2026-09-28 public/private surface doctrine says the public website shows ONLY projections and rankings with all underlying data/metrics/methodology internal, and the NGS doctrine keeps NGS metrics internal. This spec (predating, date unstated but Phase-3-era) says Memory/pick snapshots/factor breakdowns are public — potential tension between this spec's transparency posture and the newer HARD doctrines. Flagging, not resolving.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Public permanent record of every settled pick + loss autopsies → TRUST-SIGNAL (platform credibility mechanics)
- CALLED/DID_NOT_HAPPEN/MISSED pre-mortem tags → TRUST-SIGNAL (honest calibration record)
- Model-version stamps at publish vs settlement → TRUST-SIGNAL (version-accountability audit trail)
## Engine-actionable? (no — product/QC infrastructure spec; only actionable as transparency/trust design input, e.g. LossAutopsy whatWeLearned feeding a lessons log)
