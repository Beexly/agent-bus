# docs/ops/agent-provisioning/RUNBOOK_FOR_AGENT.md
## What it is (1-2 sentences)
The agent-facing provisioning runbook for wiring leveraged accounts (free LLM lanes, cloud credits, dev systems) with minimal human input: hard laws, an escalation ladder (api_only → headless_first → supervised_browser → founder_assisted/founder_only), and a P0→P1→P2 attack order with status reconciliation against live production truth.
## Key metrics/methods (formulas where given, else "not specified")
- Entry point: `node scripts/ops/provisioning/provision-status.mjs` (exit 1 = P0 work remains); completion check: `node scripts/ops/verify-credit-stack.mjs` (exit 0 = free lane armed AND Claude off cash).
- Order of attack: P0 kills cash spend (OpenRouter first — its provisioning API mints later keys free; then Cerebras, Groq via founder's Chrome). One free lane armed flips `contentPlanPrimary` → `cerebras_free` and `freeLaneConfigured` → true.
- P1: Claude off cash — a cloud only counts when creds AND model map are both set; `CLAUDE_PROVIDER=auto` with nothing configured still bills cash.
- Key references: Vercel project `prj_ZAFYsTbVviP2iiSZdzQcloZVHkBL`, team `team_VvPIx69THeXYfjeG71taqnPo`; agent inbox `gse-ops@agentmail.to` (AgentMail, created 2026-08-07).
## Data sources named
`scripts/ops/provisioning/registry.mjs`; `docs/ops/CREDITS.md`; `GSE_CREDITS_PROGRAMS_ACTION_PACK_V3.md`; `CLOUD_CREDIT_LAUNCH_MAP.md`; `/api/ops/public-surface-truth`; OpenRouter key-provisioning API; AgentMail MCP; PR #355 (known-red CI evidence).
## Findings (numbers and facts, not vibes)
1. Hard laws: no anti-bot evasion (CAPTCHA = escalation signal, not obstacle); credit-program applications are founder-only (agent prepares, founder submits); never invent grant amounts/eligibility/company facts; no secrets in repo (secret-scan guardrail on every commit); respect once-ever traps (Stripe one lifetime offer, Vercel Activate consumes the larger startup slot, AWS Founders→Portfolio sequential) (TRUST-SIGNAL).
2. Three CI checks red on main predate this work: `AI transport import boundary` (8 violations in `jynx.ts`, `jynx-errors.ts`, `smoke-free-lane.mjs`), `All guardrails` (consequence), `Test, type-check, lint, Prisma` (34 failures across 7 files; checkout one is a mock missing `resolveCheckoutPriceId` from #353) — do not attribute to new changes (OTHER).
3. Shut down tooling, do not plan around: ChatGPT Atlas (deprecated Aug 9 2026), Google Project Mariner (shut down May 4 2026) (OTHER).
4. Tooling map: Claude in Chrome (founder's real session — best for Cerebras/Groq/NVIDIA CAPTCHA/OAuth clicks), Desktop Commander MCP (CLI ops), Skyvern (signup forms, 2FA/TOTP), Bytebot (persistent desktop + Bitwarden vault, strongest unattended fit), Browserbase/Steel (persistent cloud browser contexts) (OTHER).
5. Affiliate/partner compliance copy pre-written in `docs/revenue/` (FTC + responsible-gambling); `affiliate-structural-separation` guardrail must stay green (TRUST-SIGNAL).
6. P2: PostHog for Startups is the most automatable credit claim — org `Galaxy Sports Network` already live (OTHER).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Finding 1: TRUST-SIGNAL
- Finding 2: OTHER
- Finding 3: OTHER
- Finding 4: OTHER
- Finding 5: TRUST-SIGNAL
- Finding 6: OTHER
## Engine-actionable? (yes/no + one-line what)
No — ops provisioning procedure, not engine method; standing guardrails (no evasion, founder-only submissions) are compliance doctrine only.
