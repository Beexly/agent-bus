# audit/agentic-owasp-controls.md
## What it is (1-2 sentences)
A binding security doctrine adapting OWASP Web (2021), LLM (2023/2025), and API (2025) Top 10 controls to Sports OS's agentic architecture — prompt injection, insecure output handling, excessive agency, and API authorization — with explicit mitigations and forbid lists for AI agents and operators.

## Key metrics/methods (formulas where given, else "not specified")
Not specified (no formulas; governance doctrine). Concrete numeric invariants: `npm audit --production` must return zero High or Critical findings; `NEXTAUTH_SECRET` must be a cryptographically random 32-byte value; daily and monthly Claude API budgets with circuit breakers on scheduled workers; CORS restricted to production domain + localhost.

## Data sources named
OWASP Top 10 for Web Applications (2021), OWASP Top 10 for LLM Applications (2023/2025), OWASP API Security Top 10; Anthropic SDK (@anthropic-ai/sdk); NextAuth.js v5; Odds API (exposure vector); social media / Tier 5 sources (Reddit/community); `docs/audit/prompt-leak-and-sensitive-source-policy.md`; `docs/models/local-model-lane.md`.

## Findings (numbers and facts, not vibes)
- LLM exposure vectors include: user-submitted team/game names processed by Brain, Odds API free-text fields processed by content agents, Tier 5 social data used for weak-signal detection.
- AI outputs are Tier 6 — content tools only, never evidence; Claude API output may never be stored as evidence or published without operator review.
- Non-negotiable: no AI agent may auto-publish to any public surface without an operator approval step.
- Claim governance: pick confidence scores are statistical estimates calibrated against settled results, never certainties; every public pick carries "For entertainment purposes only" disclosure.
- Logging minimum: every AI API call, pick generation, evidence-chain write, and paywall attempt must log event, hashed userId, tier (FREE/PRO/ELITE), modelVersion, ISO-8601 timestamp, outcome.
- Seven Codex audit requirements include verifying server-side tier validation on /api/picks, no `dangerouslySetInnerHTML` rendering AI text, CORS restriction, and reporting any auto-publish capability as a P0 violation.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: source tier taxonomy (T1–T6) with Tier 5 (community/Reddit) requiring sanitization before model processing — a trust-signal intake discipline; claim governance scanner and evidence-chain verification before any published pick.
- OTHER: AI output is Tier 6 and can never be an evidence source — relevant to the NGS internal-only doctrine (NGS data as reasoning fuel is internal; this doc's framework governs how external text reaches the engine). No QB-behavior, coaching, OL, or scheme intelligence in this file.

## Engine-actionable? (yes/no + one-line what)
No — security doctrine, not sports intelligence; the only transferable item is the tier-sanitization rule (Tier 5 community data must be sanitized and logged before feeding any model) for the trust-signal intake pipeline.
