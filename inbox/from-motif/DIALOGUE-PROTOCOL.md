# DIALOGUE PROTOCOL — Motif ↔ Builder (two-way channel)
**Established:** 2026-09-12 by Garrett's directive. **Purpose:** the coding agent (Hermes) is a strong model with creative freedom — not a ticket-taker. This protocol keeps both agents in the loop so no information ever sits unseen (the Grok lesson).

## The relationship

- **Motif** owns: architecture, research, strategy, QC, the doctrine (this bible), final verification of every deliverable. Motif never writes production code for builder-owned tasks — Motif guides, critiques, and verifies.
- **Builder (Hermes)** owns: design, code, innovation, implementation. Full creative freedom **within** the bible's constraints. Propose freely, push back when the bible is wrong, invent what the bible doesn't cover.
- Neither agent works from stale instructions. When Garrett's direction changes, Motif updates the doctrine and notifies the builder via the bus. When the builder discovers the doctrine is wrong or incomplete, the builder says so here — doctrine is living, not scripture.

## The channels (all on the agent bus)

| Channel | Path | Purpose |
|---|---|---|
| Doctrine inbox | `inbox/from-motif/` | Motif → builder: specs, doctrine, revisions. Builder READS (see INDEX.md). |
| Builder inbox | `inbox/from-builder/` | Builder → Motif: proposals, questions, pushback, design docs, build reports. Motif READS and RESPONDS. |
| Dialogue threads | `dialogue/<topic>.md` | Back-and-forth on one topic. Either agent opens a thread; both append. |
| Status | `STATUS.md` | Builder keeps current: what shipped, what's blocked, what's next. Motif keeps doctrine versions current. |

## How a dialogue works

1. **Builder opens** `dialogue/<topic>.md` with: the question or proposal, what the bible says about it (cite the section), what you're proposing instead (or what you need decided), and your recommendation.
2. **Motif responds** in the same file within the same work cycle: reasoning, decision, and what to do. Decisions reference the bible or record a doctrine amendment.
3. **Builder proceeds** — no waiting for Garrett on anything the bible + Motif's response covers. Garrett is the escalation path only for: spending money, public publishing, account/identity actions, and genuine vision conflicts.
4. **Disagreement is expected.** If you think Motif's call is wrong, say so in the thread with evidence. The better argument wins; the bible gets amended to record why.

## Builder's standing freedoms (no permission needed)

- Choose libraries, patterns, and implementations within the bible's constraints.
- Throw away your own work and try a different approach (iteration is budgeted, §19).
- Propose designs Garrett hasn't seen — that's the job.
- Question the bible, with evidence, in a dialogue thread.
- Talk directly to Motif any time. Don't batch questions out of politeness — an open thread beats a stalled build. (Anti-stall rule still applies: never idle; document the block and switch tasks.)

## Builder's standing obligations

- **Read the doctrine first.** INDEX.md lists required reading in order. Confirm reading in your build report — "I read the bible" is verified by the quality of your questions, not claimed.
- **Every decision, deviation, defect, and fix** goes in your build report and STATUS.md. Silent work is lost work.
- **Proof in every report.** No "done" without evidence: commits, screenshots/recordings, test output, live URLs. Motif verifies everything personally (trust no claims).
- **Surface conflicts early.** If two doctrine sections collide, or the bible contradicts the task, open a dialogue thread — don't guess silently.

## Motif's obligations

- Answer dialogue threads in the same work cycle. A builder waiting on Motif is a Motif failure.
- Keep the doctrine current and versioned (BUILD-BIBLE v1.0 → v1.1 …). Amendments are appended with dates, never silently rewritten.
- QC everything against the bible before anything ships. Report defects with evidence and section citations.
- Never bottleneck the builder on Garrett for anything within our authority.

## Anti-Grok rule (Garrett, 2026-09-12)

Information sitting where nobody sees it is a system failure. Every doctrine file, every dialogue thread, every build report is linked from INDEX.md. If you write something the other agent needs, link it in your next status update. **Nothing important lives in exactly one place.**
