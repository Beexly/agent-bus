# docs/ops/CREDITS.md
## What it is (1-2 sentences)
Claim tracker for startup-credit programs (founder fills Status; applications are founder-only) listing 9 programs with claim URLs, eligibility notes, and the env var each wires when keys land.
## Key metrics/methods (formulas where given, else "not specified")
not specified (no formulas; eligibility is qualitative: e.g., Neon Startup = self-funded ≤$1k or VC up to $100k).
## Data sources named
None (program links: neon.com/startups, vercel.com/startups, claude.com/programs/startups, openai.com/startups, aws.amazon.com/activate/, stripe.com/atlas, cloud.google.com/startup, cloud.cerebras.ai, console.groq.com).
## Findings (numbers and facts, not vibes)
- 9 programs tracked: Neon Startup, Vercel for Startups, Anthropic Claude Startups, OpenAI Startups, AWS Activate, Stripe Atlas/Activate, GCP/Google for Startups, Cerebras free, Groq free.
- Wire env mapping: DATABASE_URL/DIRECT_URL, Pro credits on project, ANTHROPIC_API_KEY, OPENAI_API_KEY (optional), CLAUDE_PROVIDER=bedrock path, STRIPE_* live, VERTEX_* if used, CEREBRAS_API_KEY + CONTENT_FREE_LANE_ENABLED, INTERNAL_LLM_*.
- Anti-pattern: claim once-ever slots before you will spend.
- Cerebras free lane content-generator already wired (#320); Stripe Atlas/Activate has once-ever traps — time carefully.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: infrastructure funding/credits ops.
## Engine-actionable? (yes/no + one-line what)
no — ops/funding tracker, no engine signal.
