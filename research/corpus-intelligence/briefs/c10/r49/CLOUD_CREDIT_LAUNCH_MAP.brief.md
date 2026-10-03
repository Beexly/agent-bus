# ops/CLOUD_CREDIT_LAUNCH_MAP.md
## What it is (1-2 sentences)
A 2026-08-06 launch map for spending claimed cloud credits (AWS Activate, Azure Founders Hub, Google Cloud/Vertex) on Claude inference before cash, with a Cerebras free-tier lane for content generation.
## Key metrics/methods (formulas where given, else "not specified")
Routing: one `CLAUDE_PROVIDER` at a time (bedrock | vertex | azure | azure-foundry | auto with `JYNX_CLOUD_ORDER=bedrock,azure,vertex` failover); free lane stacks on top via `CONTENT_FREE_LANE_ENABLED` + `CEREBRAS_API_KEY`. Launch order: Phase 0 (zero-cash content via Cerebras), Phase 1 (Jynx auto or one forced cloud), Phase 2 (Google dev credits, non-Claude), Phase 3 (Azure GPU/infra, non-Claude). Verification: ledger `modelName` must show the cloud id (Bedrock id, Vertex `@` id, `azure-foundry/…`) — not plain `claude-*`; `verify-credit-stack.mjs` exits 0 only when free lane is armed AND a credit cloud is in the attempt order; `creditStack.anyCreditLaneReady` must be true.
## Data sources named
Not specified (cloud provider consoles/docs); ops visibility via `/api/ops/public-surface-truth` → `creditStack` (booleans, no secrets).
## Findings (numbers and facts, not vibes)
- A cloud appears in `attemptOrder` only when creds AND its model map are both set; `configuredClouds: []` with `CLAUDE_PROVIDER=auto` means Claude is still billing cash. [OTHER]
- Anti-pattern: claiming "on Azure credits" while the ledger shows `claude-sonnet-*` — the ledger is the proof, not the claim. [OTHER]
- Older docs said Azure sponsorship excludes Anthropic — the founder must verify their SKU before assuming $0 Claude on Azure. [OTHER]
- Founder portal checklist is 15–40 min per cloud; env paste goes on Vercel Production followed by a redeploy and one smoke generation. [OTHER]
- Application and portal model maps remain founder-only; code path for Cerebras free lane is `free-lane.ts` → content generator with `modelName` starting `gpt-oss`. [OTHER]
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
All findings tagged OTHER; no QB-BEHAVIOR, COACHING, OL, SCHEME, or TRUST-SIGNAL content present.
## Engine-actionable? (yes/no + one-line what)
No — infra/cost routing doc with no prediction modeling, metrics, or signals content.
