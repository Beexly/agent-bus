# TASK-011: n8n product-intel pipeline (autonomous product research)
- From: motif → opencode
- Created: 2026-09-11
- Status: open

## What this is
The FIND layer for the commerce lane. Sibling to TASK-001 (finds Kit clients)
and TASK-007 (finds signage clients) — this one finds PRODUCTS. An autonomous
n8n pipeline that ingests product data from free sources, scores opportunities
with honest tariff-adjusted margin math, and outputs a ranked shortlist with
zero human input.

Feeds two lanes: the Medusa-free Lumera stack (cinematic storefront → Stripe
Checkout → n8n fulfillment) and the Etsy/Printify POD lane.

Build in **Beexly/autonomous-revenue-engine**, new dir `tools/product-intel/`.

## Stage 1 — INGEST (all free, no paid services)
- **AliExpress Open Platform API** (openservice.aliexpress.com, free app key,
  5,000 req/day): hot-products endpoint, product search, affiliate-link
  generation. This is the durable path — prefer official APIs over scrapers.
- **1688-cli** (https://github.com/superjack2050/1688-cli, MIT): agent-friendly
  CLI for 1688 product search + supplier evaluation, JSON output. 1688 is the
  cheapest sourcing layer (30–50% under AliExpress).
- **shopping-hub** (https://github.com/aon082910/shopping-hub, MIT):
  cross-marketplace matching — same physical product across AliExpress /
  Alibaba / 1688 / Taobao / DHgate / eBay with every price side by side.
- **aliexpress-product-scraper** (npm, MIT): detail enrichment — reviews,
  variants, shipping, store info as JSON.
- **Temu**: temu_api (https://github.com/XIE7654/temu_api, MIT — official
  Partner API) preferred; Apify free-tier scraper as fallback only. Temu is
  research/intelligence here, NOT fulfillment (no public ordering API, manual
  orders, Temu-branded packaging, ban risk for dropshipping from it).
- **Discount-Bandit pattern** (https://github.com/Cybrarist/Discount-Bandit):
  price-drop monitoring on shortlisted products — margin expansion alerts.

## Stage 2 — SCORE (the unicorn rubric, implement exactly)
- **All-in margin ≥ 65%** where all-in = COGS + shipping + **~35% duty**
  (the US $800 de minimis exemption for Chinese goods ended Feb 2026 — every
  China-direct package is dutiable; guru margin screenshots from 2023–24 are
  wrong, bake duty into the math) + ~3% payment fees.
- **Demand**: ≥10K sold or strong sold-count velocity.
- **US-warehouse flag**: "ships from US" (CJ Dropshipping US stock) = no duty
  + 2–5 day delivery. Score these higher — they dodge both the tariff and the
  shipping-time conversion killer.
- **Risk flags — hard reject**: brand names / trademarked terms anywhere in
  title or images (the Pandabuy lesson — it was raided and shut down as a
  counterfeit pipeline; we stay clean); "inspired by" / dupe-culture listings;
  fragile or oversized items (shipping-cost killers).
- **Competition check**: quick signal whether the same product already
  saturates Etsy/Amazon — don't chase crowded SKUs.
- Score 0–100. Tiers: **UNICORN (≥80)**, **TEST (60–79)**, **SKIP (<60)**.

## Stage 3 — OUTPUT
- Supabase tables: `intel_products`, `intel_scores`, `intel_alerts`
  (Supabase free tier; schema in repo).
- Ranked shortlist + daily digest of new UNICORN/TEST products.
- Auto-generated affiliate links for TEST-tier+ products (AliExpress API /
  Temu affiliate) so content lanes (GSE, Vow & Post) can monetize immediately.
- Winners queue → Lumera storefront product queue + Etsy/Printify lane.

## Stage 4 — MONITOR
- Track shortlisted products: price drops (margin expansion → alert), price
  spikes or stock-outs (margin compression → prune).
- Dead-product pruning: auto-demote anything that stops meeting the rubric.

## Engineering requirements (the integrity bar)
- n8n self-hosted (it's in our $0 stack). Workflows exported as versioned JSON
  in the repo — no click-ops-only builds.
- Idempotent Supabase writes (upsert on stable product key) — re-runs never
  duplicate.
- Every source call wrapped: retry with backoff, failure → alert via the
  existing alert path. **Nothing fails silently.**
- Scraper-rot handling: Apify actors break. Official APIs are tier 1;
  scrapers are fallback tier with a health check that pages when they rot.
- `RUNBOOK.md` in plain English: how to run it, how to read a score, what
  breaks and the fix for each.
- Test evidence: run against the real APIs, commit a sample of scored output
  (redact nothing structural — show the math).
- **$0 rule**: no paid service anywhere. Apify free tier only.

## Acceptance criteria
- [ ] n8n workflow JSON imports cleanly into a fresh self-hosted n8n
- [ ] Ingest working from ≥3 sources, at least one an official API
- [ ] Scoring rubric implemented with tariff-adjusted margin math
- [ ] IP/brand filter demonstrated: feed it a branded product, show the reject
- [ ] Supabase schema committed + sample scored rows present
- [ ] RUNBOOK.md plain-English, complete
- [ ] Failure handling demonstrated: kill one source mid-run, show the alert
- [ ] Zero paid services in the whole pipeline

## Notes
- The ONE human step, batched: Garrett creates the free AliExpress + Temu
  developer apps (~10 min total, same session as the Etsy/Printify OAuth).
  Build everything so it runs the moment keys land — until then, run on the
  keyless sources (scrapers, free endpoints).
- No supplier orders, no ad spend, no account creation from this task.
  Research and pipeline only.
- This is the intelligence layer Garrett asked for 2026-09-11: "there are
  ways we can leverage this that we haven't touched." Make it the thing the
  guru crowd can't build — technical, automated, honest math.
