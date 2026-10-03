# docs/ops/JYNX_OPEN_WEIGHT_FREE_MAP.md
## What it is (1-2 sentences)
Operator map of which LLM spends on what: free lanes (Cerebras gpt-oss, Gemma/Nemotron free hosts), Claude cloud credits, and cash-last, kept in lanes that "do not fight each other." Env chain and honesty law for free-lane content generation.
## Key metrics/methods (formulas where given, else "not specified")
not specified — model scores in parentheses (Gemma 4 26B/31B free (69), Nemotron 3 Nano Omni free (68)) are cited without a named benchmark methodology.
## Data sources named
- Cerebras (gpt-oss-120b primary free)
- NVIDIA NIM free / NVIDIA free host (Nemotron family)
- Google free OpenAI-compat endpoint (Gemma 4)
- Groq free (llama-3.3-70b-versatile, gpt-oss-20b, Nemotron nano)
- AWS Bedrock / Azure Foundry / Vertex (Claude credits)
## Findings (numbers and facts, not vibes)
- Attempt order: Cerebras → secondary free → cloud Claude credits → cash Anthropic.
- Free-lane primary: gpt-oss-120b/20b via Cerebras (already wired); secondary: Gemma 4 or Nemotron via `FREE_LANE_SECONDARY_BASE_URL`.
- Kimi K3 at $3/$15 is marked AVOID — worse economics than Claude credits; MiniMax M3 ($0.30/$1.20) is paid-only-if-free-dry.
- Headline bench winners (Kimi K3, Inkling, GLM-5.2) are NOT automatic free-lane picks — price and trust-tier matter more than leaderboard rank.
- Law: free output still passes brand-safety / numeric-guard / no-ROI-theater; never claim "on free models" while the ledger shows cash Anthropic; never free-lane studio/journal until quality validated; image/video free models (LTX, Wan, SVD) are out of band for GSE text intelligence.
- Catalog code: `apps/web/lib/claude-api/open-weight-catalog.ts`; planner `jynx.ts` (free first, then clouds).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: LLM cost ops; no football signal.
- TRUST-SIGNAL: the ledger-honesty law (never claim free while the ledger shows cash) and the numeric-guard / no-ROI-theater requirements on free-lane output.
## Engine-actionable? (yes/no + one-line what)
No — cost-routing map for content infra; nothing about the prediction model itself.
