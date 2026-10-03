# docs/ops/evals/studio-fan-explainer-happy.md
## What it is (1-2 sentences)
An evaluation spec (created 2026-05-22, status pending-runner) defining the happy-path test for the Galaxy Studio FAN_EXPLAINER template: given a GameIntelligenceNode (BOS @ NYK, NBA, Edge Index 2.7, evidence health A, pick BOS -3.5 at 73% SOLID_PLAY), the Claude API must return a 250–400 word fan-audience preview with zero betting vocabulary and pass a compliance scanner.
## Key metrics/methods (formulas where given, else "not specified")
- Output length: 250–400 words.
- Betting-vocabulary regex: `/\b(spread|moneyline|odds|line|over\/under|o\/u|edge|pick|cover|push|juice|vig)\b/i`.
- Hype-word regex: `/\b(lock|hammer|fade|tail|VIP|guarantee)\b/i`.
- Emoji regex: `/[\u{1F300}-\u{1F9FF}]/u`.
- Compliance scanner must return `green`.
## Data sources named
None named (eval input is a synthetic GameIntelligenceNode; output goes to the Claude API via `fanExplainerTemplate.promptBuilder`).
## Findings (numbers and facts, not vibes)
- Input node: BOS @ NYK, NBA, 2026-05-22T23:30:00Z; Edge Index 2.7; evidence health A; attached pick BOS -3.5 at 73% confidence (SOLID_PLAY); pre-mortem with 4 bullets.
- 8 pass criteria: word count 250–400; no betting regex; no hype regex; no "Galaxy Sports Edge"/"Galaxy IQ" naming; no emoji; scanner green; references ≥1 specific player; closes with season-stakes implications.
- Forbidden: "tune in" CTA; any reference to model confidence number or factor breakdown.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — eval harness for fan-facing generation; TRUST-SIGNAL — the no-betting-vocabulary, no-brand, active-voice, no-hedging ("experts say") rules are a public-facing honesty/posture control.
## Engine-actionable? (yes/no + one-line what)
yes — the betting-vocabulary regexes are reusable as compliance gates on any fan-facing generated copy.
