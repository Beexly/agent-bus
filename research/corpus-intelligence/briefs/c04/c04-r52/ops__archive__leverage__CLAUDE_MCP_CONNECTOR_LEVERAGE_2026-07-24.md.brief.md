# docs/ops/archive/leverage/CLAUDE_MCP_CONNECTOR_LEVERAGE_2026-07-24.md
## What it is (1-2 sentences)
A 2026-07-24 leverage map by the Grok team for maximizing the Claude connector/plugin/skill list across the GSE website, prediction engine, competitive intel, and local workflows, with a tiered tool matrix, coding/automation targets, and a phase map of engine completeness.

## Key metrics/methods (formulas where given, else "not specified")
- Not specified (no formulas; this is an ops/tooling strategy doc).
- Site snapshot numbers (2026-07-24): galaxysportsedge.com live with Board, Lab ~140k rows, Intelligence 500+ settled, Fantasy, No-Bet Gate, proof receipts.
- Monorepo: Next.js 14, Prisma, BullMQ, Stripe, Anthropic (content only), heavy guardrails.
- Highest-leverage coding target specified in detail: a display-only-substantiated-results guard — a pure function + render-layer assertion refusing any win-rate / ROI / confidence / "proven" number lacking coverage denominator, Wilson/Clopper-Pearson LCB, CLV backing, and walk-forward provenance.

## Data sources named
- Tool/connectors as data sources: Vercel (deploys/analytics), Stripe (subs/webhooks), PostHog/Sentry (product analytics, errors), Ahrefs + Semrush (competitive SEO/content gaps), Exa/Tavily (research, competitor teardowns, legal public data), Notion/Linear (knowledge base, task tracking), Airtable, Gmail/Calendar/Drive, Hugging Face/local models.
- Research repo Beexly/gse-competitive-intel: Glass Ledger + Edge Engine HANDOFF (Phase 0 leak-free → honesty engine → Glass Ledger → real edges).
- Competitor names for monitoring: FantasyPros, Scores24, etc.

## Findings (numbers and facts, not vibes)
- Connector tiers: Tier 1 Critical (GitHub + plugins, Vercel, Stripe, Notion, Linear, Ahrefs+Semrush, PostHog/Sentry, Exa/Tavily, Anthropic/Claude skills incl. skill-creator, Desktop Commander + Claude in Chrome); Tier 2 (Airtable, Gmail/Calendar/Drive, Figma/Canva/Gamma, Zapier/Make, Hugging Face/local tools, Cloudflare, X Ads, Mem0-style memory); Tier 3 de-prioritize/disconnect (legal, bio, clinical, Azure, Snowflake/BigQuery, e-commerce, HR, pure sales tools).
- Six highest-leverage automation targets: (1) display-only-substantiated-results guard; (2) Phase-0 verification script/CI gate wiring `shuffledTimePlacebo` + `conditionalMiProbe` to fail the build if the gate fails; (3) Glass Ledger/recompute hardening (open `recompute` surface, pre-kickoff hash commitments, founder-gated); (4) custom Claude skills (GSE Honesty Guard, Competitor Teardown, Phase Status Reporter, Brand Voice + Content Draft); (5) competitive monitoring automation (scheduled Exa/Tavily + Ahrefs pulls → Notion dossier + Linear issues); (6) local/personal leverage (Desktop Commander workflows for offline placebo runs, feature-store inspection, private notebooks).
- Phase mapping (2026-07-24): Phase 0 leak-free foundation largely implemented (as-of store, placebo, walk-forward, line archive patterns); Phase 1 honesty engine has substantial code (calibration, conformal selective gate, market-blend truth test, portfolio Kelly with CLV deflator) with display guard + full acceptance tests remaining; Phase 2 Glass Ledger has Pedersen/proof receipts/commitment patterns with public `/ledger` + open recompute still needing hardening; Phase 3+ real edges (hierarchical-Bayes props, closing-line distillation, residual GBM) — selective volume engine named as the product volume lever.
- Prediction-engine status noted: sophisticated edge-lab already present (placebo, walk-forward, conformal, Kelly, GSE scoring, Pedersen-style proof); placebo gate matches HANDOFF Phase 0 closely.
- Key gap called out: the "display-only-substantiated-results" render guard (HANDOFF §1) was not yet a dedicated, enforced module.
- Immediate next actions for that session: push the document (done), implement the display-substantiated guard, create Linear issue(s), generate 1–2 custom skill prompts for Claude Desktop, optionally wire a competitive monitor skeleton.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Competitive monitoring of FantasyPros and Scores24 (opponent intel on competitor rankings/projections to differentiate GSE) — OTHER (competitive intel, no QB/coaching/OL/scheme facts).
- Display-substantiated-results guard (Wilson/Clopper-Pearson LCB, CLV backing, walk-forward provenance before any confidence/ROI number is shown) — OTHER (honesty infra relevant to future public-facing projections/rankings).
- No player/coach/unit signals — OTHER.

## Engine-actionable? (yes/no + one-line what)
Yes — one-line: the display-only-substantiated-results guard spec (Wilson/Clopper-Pearson LCB + CLV backing + walk-forward provenance for every published number) is directly reusable for the public-projections-only surface doctrine; the Phase-0 CI-gate spec (`shuffledTimePlacebo` + `conditionalMiProbe` fail-the-build) is a concrete build target.
