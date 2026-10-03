# docs/product/cockpit-journal-spec.md
## What it is (1-2 sentences)
The full page specification for `/cockpit/journal`, the operator-only Model Journal workspace (Phase 3 build): a weekly pipeline where Friday's data-pipe collects settled-pick data, autopsies, pre-mortem tags, and factor changes; Saturday's job drafts the essay via the Claude API; the owner reviews, edits, and publishes Sunday morning. Not public, not Pro/Elite-accessible.
## Key metrics/methods (formulas where given, else "not specified")
Not specified (no formulas). Example week-data snapshot in the spec's mock UI: Settled 14, Wins 9, Losses 5, Pre-mortem called 3/5, Autopsies 4, 4 picks referenced, 1,127 words, Model v6.0.5. Drafting cost note: "This draft used $0.23 of Claude API budget."
## Data sources named
Codex's Friday data-pipe (settled-pick data, autopsies, pre-mortem tags, factor changes); the canonical Claude drafting prompt; compliance scanner rules at `apps/web/lib/compliance-scanner/rules.ts` with `getRulesForTemplate('MODEL_JOURNAL')`; Game Room Galaxy Memory cross-references; RSS feed; email digest; Twitter bot teaser.
## Findings (numbers and facts, not vibes)
- Weekly cadence fixed: Friday data-pipe collection, Saturday Claude drafting (default shown as Saturday 8:15 AM ET), Sunday 10am ET scheduled publish; manual out-of-cycle entries are allowed and publicly marked (e.g., "Special: v6.1.0 release notes — published mid-week"). [OTHER]
- Status state machine: DRAFT -> REVIEW_PENDING -> PUBLISHED (immediate, no intermediate human step), with RETRACTED as the terminal public-removal state; published bodies are immutable except append-only cross-references and retraction. [TRUST-SIGNAL]
- Retraction serves a 410 Gone notice at the public route and requires a decision-log entry explaining why; entries are never deleted. [TRUST-SIGNAL]
- Compliance scanner output is three-tier: Green (publish enabled), Yellow (publish enabled with warning modal), Red (publish disabled, inline highlights with suggested fixes). [TRUST-SIGNAL]
- Journal template bans aggregate win-rate claims and bans "we believe"/"we think" first-person plural confidence framing. [TRUST-SIGNAL]
- Distribution at publish: public route at `/journal/[slug]` immediate, RSS regenerated, email digest queued for Sunday 10am ET (example shows 247 Elite subs delivered), Twitter teaser queued for Monday morning auto-post. [OTHER]
- Every referenced pick's Game Room Galaxy Memory slot adds a link back to the journal entry (cross-reference wiring). [TRUST-SIGNAL]
- Acceptance criteria list 10 items, including: operator auth, landing/editor rendering, compliance scan from editor, publish blocked on red scan, distribution triggers on publish, edit-after-publish body prevention, retraction requiring decision-log, manual entry end-to-end, and that NO body-edit endpoint exists for PUBLISHED entries. [OTHER]
- Open item OPEN-CKP-JRN-3: drafting API cost visible in editor (example $0.23 per draft). [OTHER]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Settled-pick -> autopsy -> pre-mortem-tag -> published-essay pipeline with pre-mortem hit-rate tracking (3/5 called) and mandatory autopsies on losses is the engine's calibration/audit feedback loop.
- [TRUST-SIGNAL] Banned win-rate claims, banned confidence framing, and immutability-plus-retraction semantics are the public-trust posture the engine's outputs must survive.
- [OTHER] The 247-Elite-subscriber distribution figure and $0.23 drafting cost are product ops numbers, not signals.
## Engine-actionable? (yes/no + one-line what)
Yes — the spec codifies the engine's learning loop (settled outcomes, loss autopsies, pre-mortem tags feeding back into the weekly journal), which is where calibration evidence accumulates and where model versions get publicly versioned (e.g., v6.0.5).
