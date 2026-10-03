# ai/jarvis/JARVIS_CAPABILITY_REGISTRY.md
## What it is (1-2 sentences)
Mirror (as of 2026-06-11) of `apps/web/lib/jarvis/capability-registry.ts`, the single source of truth for 16 Galaxy Sports Edge intelligence capabilities, each with an honest wiring status on a 5-rung ladder (NOT_WIRED → DESIGNED → MANUAL → DRAFT_ONLY → ACTIVE); zero capabilities are ACTIVE by design.
## Key metrics/methods (formulas where given, else "not specified")
Wiring score = (sum of status weights: ACTIVE=4, DRAFT_ONLY=3, MANUAL=2, DESIGNED=1, NOT_WIRED=0) / (16×4) × 100, rounded. Current: (5×3 + 3×2 + 3×1 + 5×0) = 24/64 → 38/100 ("Early Stage"; bands: ≥80 Operational, ≥55 Building, ≥30 Early Stage, <30 Foundation). `canExecute` = false for all 16; 14/16 require human approval.
## Data sources named
None new; registry lives in code at apps/web/lib/jarvis/capability-registry.ts and is consumed by the cockpit.
## Findings (numbers and facts, not vibes)
- Status counts: DRAFT_ONLY 5 (picks-intelligence, data-reliability, risk-public-claims, customer-surface, content-media); MANUAL 3 (settlement-results, performance-calibration, ai-ops-token-discipline); DESIGNED 3 (market-line-intelligence, revenue-subscriptions, agent-orchestration); NOT_WIRED 5 (memory-knowledge-base, tool-router-mcp-layer, browser-computer-control, voice-interface, workflow-automation); ACTIVE 0.
- Next actions include: build CLV tracking layer (opening/closing line + result per pick); accumulate 25 canonical settled picks before reviewing win rate; wire auto-settlement from ESPN/The Odds API; promotion requires demonstrated-in-repo evidence, never aspiration.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: honest capability statuses, zero-ACTIVE trust rule, and promotion-by-demonstration governance — the pattern for honest public claims about engine capability.
## Engine-actionable? (yes/no + one-line what)
no — platform governance mirror; the CLV-tracking and auto-settlement next-actions are infrastructure tasks, not model improvements.
