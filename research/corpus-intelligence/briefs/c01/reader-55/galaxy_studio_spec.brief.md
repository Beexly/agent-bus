# docs/product/galaxy-studio-spec.md
## What it is (1-2 sentences)
Phase 3 product spec for "Galaxy Studio" — a content-generation workflow that turns one unit of intelligence (one game or slate) into eight monetizable creator assets (fan explainer, fantasy angle, betting education, X thread, TikTok script, newsletter block, sponsor-safe blurb, YouTube title/thumbnails). It runs on the Claude API over the Intelligence Graph with a three-layer compliance scanner, mandatory human review, and hard refusals on auto-posting and unsupported claims.
## Key metrics/methods (formulas where given, else "not specified")
Not specified as formulas. Compliance scanner returns `ComplianceScanResult` = {status: 'green'|'yellow'|'red', flags[], publicReady (true only when green)}; each flag = {layer 1|2|3, severity block|warn|info, span, message, suggestion}. Three compliance layers: (1) platform-wide banned vocabulary, (2) unsupported-claim detection (regex-tagged statistics/win-streak/percentage patterns trigger citation requirement), (3) template-specific rules. Word-count budgets per asset: fan explainer 250–400, fantasy angle 200–350, betting education 300–500, X thread 5–7 posts, TikTok script 45–90 seconds, newsletter block 400–700, sponsor-safe blurb 100–200, YouTube 8–12 titles + 3–5 thumbnail concepts. Eval coverage: 3 evals per template (happy path, thin-evidence refusal, planted banned term). Acceptance criterion #9: banned-vocabulary scan returns zero hits across a 50-game sample.
## Data sources named
- Intelligence Graph: `GameIntelligenceNode`, `SlateWeather`, `PickSignalSnapshot`, `GameSignal` rows (every asset must carry ≥1 citation to these).
- Claude API (sole LLM vendor per DEC-020).
- `docs/positioning.md` banned vocabulary list (scanner Layer 1 reference).
## Findings (numbers and facts, not vibes)
- 8 asset templates shipped in Phase 3 v0; Studio lives at `/cockpit/studio`, operator-only, no public route.
- Betting education template always closes with the exact line: *"Whether to bet this is your call. What it teaches you about the market is the point."*
- Five hard refusals: (1) no auto-post endpoint (no "Send to Twitter" button), (2) no generation without ≥1 citation ("Evidence is thin — no asset generated"), (3) no generation against bootstrap-only games, (4) no recommendations even when a published pick exists, (5) gated games must open with "We considered this game and did not publish — here's why."
- 9 acceptance criteria gate Studio v0 green; open items OPEN-STUDIO-1..3 (batch generation default yes; persist CreatorAsset rows with 90-day TTL; re-runnable compliance scan on edited content).
- Post-v0 roadmap: Canva, HyperFrames/TikTok video drafts, Slack/Gmail draft routing, Beehiiv API — all deferred to Phase 4+.
- Code ownership: Codex owns runtime (`apps/web/app/cockpit/studio/`, `apps/web/lib/studio/`); Claude owns templates + voice.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — content-generation product spec and compliance pipeline; no player, coach, line, or scheme data.
## Engine-actionable? (yes/no + one-line what)
No — product/compliance spec for creator content, not a data or modeling feed.
