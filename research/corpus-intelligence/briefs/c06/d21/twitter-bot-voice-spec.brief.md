# product/twitter-bot-voice-spec.md
## What it is (1-2 sentences)
The Claude-authored voice/template specification for the @GalaxySportsAI autonomous X bot (Phase 3 build; Codex implements the bot, scheduler, rate limiting, and error handling), defining four postable event types (slate state updates, free pick publications, pick settlements, losing-pick post-mortem threads), eight hard refusal rules, rate limits, scheduling, compliance-scanner integration, account hygiene, and eval coverage.
## Key metrics/methods (formulas where given, else "not specified")
- Confidence formatting: integer percent; confidence below 60 does not publish (engine gates first). One free pick per day per `Subscription.tier === 'FREE'`.
- Rate limits: slate state updates max 12/day; pick publications unrate-limited beyond the one-per-day upstream; settlements unrate-limited; post-mortems unrate-limited (one thread per losing pick within 24h). Total daily ceiling: 20 posts per 24-hour window; overflow queues for next day.
- Retry: exponential backoff up to 3 attempts on X rate-limit failures, then mute for the day and surface to cockpit; all failures logged to `AgentRunLog`.
- Scheduler: 5-minute heartbeat (recommended BullMQ since Redis is in the tree; GitHub Actions cron or Vercel cron as alternates).
- Compliance scan: red = halt + log + surface; yellow = post with logged warning; green = post immediately. Eval runner blocks deploy on red status.
- Post-mortem thread: 4-6 posts covering publish-time heaviest signals with scores, what changed between publish and settlement, what was misread, whether factor weights change for the next model version or it was variance.
## Data sources named
- `Pick` table (new free-tier publications), `Pick.settledAt` watcher (settlements), `IngestionRun` + `GameSignal` (gate-decision events), `LossAutopsy` Phase 2+ schema (post-mortem content).
- Template module at `apps/web/lib/twitter-bot/templates/<event-kind>.ts`; eval files at `docs/ops/evals/twitter-bot-*.md`.
## Findings (numbers and facts, not vibes)
- Bot reports only model state; it performs no editorial voice, no takes, no fan reactions.
- Past-tense verbs mandated: "Just gated," "Published," "Settled." Only emojis allowed: ✅ (WIN), ❌ (LOSS), ⚖️ (PUSH); no emoji ladders.
- Losses get a one-line cause; wins name the heaviest contributor (the factor that moved the score most relative to others); pushes get a one-line note.
- Post-mortem phrasing rule: "What we got wrong" (required on LOSS), never "what went wrong" (implies external bad luck).
- Hard refusals (no override): paid picks never; no game-state reactions; no replies to mentions (Phase 3); no engagement bait; no competitor comparisons or win-rate claims ("never claim 'we hit 73% this month'"); no outcome predictions on unscored games; no editorial sports commentary; muted during retraining via `MUTE_BOT=true`.
- Pick-grade enum example: `PICK_GRADE_LABELS` (example shown: SOLID_PLAY; example confidence 73%).
- Account hygiene: follows zero accounts, likes zero posts, retweets zero posts; no quote-tweets except as reply to a settled pick post for threading. Broadcast surface only.
- Banned patterns per the compliance scanner: any banned vocabulary from `docs/positioning.md`, unsupported statistics without citation, "best book"/"sharpest lines"/"guaranteed cover," first-person algorithm voice, competitor references.
- Eval coverage required: one eval per event kind; one eval per banned-pattern (paid-pick-leak, competitor-mention, engagement-bait, outcome-prediction, first-person-voice); one eval per refusal (thin-evidence-event, no-canonical-signals, mute-flag-active).
- Acceptance criteria: 9 items (correct templates, compliance scan on every post, rate limits, AgentRunLog rows, MUTE_BOT flag, hygiene, evals pass, working /room/[gameId] links, no paid-pick leakage).
- Open items: OPEN-BOT-1 (tag sport with one hashtag like #NFL, default yes); OPEN-BOT-2 (factor-breakdown screenshot in slate updates, default no for v0); OPEN-BOT-3 (cross-posting source-of-truth handle, default X-only in v0; Threads/IG/FB sync is Phase 5+).
- INFERENCE: account named @GalaxySportsAI differs from the current @GalaxySportsHQ handle in standing memory; the spec may predate the handle change.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the post-mortem thread ("What we got wrong," honest variance-vs-drift call, model-versioning ethic) is the core public credibility mechanism.
- TRUST-SIGNAL: no win-rate claims, no paid-pick leakage, no first-person algorithm voice — credibility-through-math positioning ("We're not AI. We're math you can read").
- TRUST-SIGNAL: eval runner blocks deploy on red status; AgentRunLog captures every attempt — operational accountability.
- OTHER: account hygiene as broadcast-only surface (zero follows/likes/retweets) avoids endorsement signal/noise.
## Engine-actionable? (yes/no + one-line what)
Yes — codifies the public transparency contract (post-mortem autopsies, factor-level win/loss attribution, honest variance calls) that the engine's output must feed, and the compliance-scanner banned-claim patterns that gate any public claim.
