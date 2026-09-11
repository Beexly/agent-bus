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

## Field lessons — 15 dated cases, 2026-07-12 → 2026-09-11 (applied 2026-09-11)

Sourced from live build logs, GitHub issues, seller reports, and affiliate
disclosures. Each amendment below is tied to the case that taught it.

### Tier 1 — math correctness (build in or the pipeline lies)
1. **Per-country ad-valorem duty table, not a flat 35%.** Columns:
   `duty_rate`, `rates_last_verified`; staleness alert at 90 days. Rates are
   fluid and country-specific. (Cases #2, #3)
2. **Pre-launch landed-cost simulator.** Every product gets COGS + freight +
   duty + fees + estimated CAC simulated BEFORE it can reach TEST tier. Kill
   anything that only pencils at fantasy conversion. (Case #3)
3. **Price-floor gate.** Hard-reject products that can't retail ≥ $25–30; bias
   scoring toward $50+ (tariff-absorption headroom). Sub-$25 is the death zone
   — one seller's 2oz package went from ~$5 to $8.40 shipping on a $4 item.
   (Case #4)
4. **Duty-injection test on all inherited math.** Any adapted open-source
   margin formula gets a test asserting duty > 0 in every margin path — one
   real n8n pipeline in the wild still shows 71.7% margins with zero duty
   line. (Case #6)

### Tier 2 — reliability engineering (survive production)
5. **Scraper health system.** Pin Apify actor versions; daily canary product
   per actor; auto-fallback to official APIs; compute-spend caps with alerts.
   Community actors rot (one Apollo scraper jumped $1.50→$30/1K leads, then
   delisted) and you pay for retries. (Case #9)
6. **1688 circuit breaker.** 1688's anti-bot risk-control triggers easily
   (open issue Jun 29, 2026). Throttle + session reuse + human-paced jitter;
   on trigger, degrade to AliExpress API / shopping-hub instead of failing
   the run. (Case #8)
7. **Typed failure classes with correlation IDs.** Branches
   `solved`/`cooldown`/`review`/`stop`, one ID per product end-to-end, routed
   notifications per class — a CAPTCHA block pages ops, a data-drift flag
   pages the pipeline owner. Verify with manual replay AND first scheduled
   run. Replaces the generic "failure → alert". (Case #12)
8. **Content-drift monitoring.** Per-run validation of scraped field shapes
   and value distributions — alert when selectors return wrong data silently
   (HTTP 200 with garbage passes error-only checks). (Case #15)
9. **Free-tier burn dashboard.** Model consumption with the 10x JS-render
   credit multiplier (a "100K credit" plan = 10K rendered pages); API-first
   ordering; graceful degradation before caps hit. (Case #11)
10. **Dual-model validation.** Cross-check AI-extracted product fields with
    two models; confidence flags on every inferred field; plausibility-range
    gates. (Case #7)

### Tier 3 — lane strategy
11. **US-stock-first sourcing order.** Query US-stock sources (CJ, Doba-type)
    BEFORE China-direct; US-stock skips duty math entirely and scores higher.
    Promotes the existing flag to a sourcing order. (Cases #1, #14)
12. **Temu affiliate as harvest-now lane.** Prioritize Temu link generation in
    output immediately — 5–20% rates may not last (analyst warning), new-users
    only, geo-locked earnings. Track earnings per link; build AliExpress-API
    links in parallel from day one. (Case #13)
13. **Consolidated validation ordering.** When products graduate to physical
    validation: batch sample orders through one agent with a QC-photo
    checkpoint before the international leg — never single parcels. (Case #10)
14. **DDP preference in supplier scoring.** Suppliers offering
    Delivered-Duty-Paid score higher; DDU-only flagged as CX risk (surprise
    fees → refused packages → bad reviews).

### Timeline correction (replaces the spec's shorthand)
"De minimis ended Feb 2026" is imprecise. Actual sequence: China/HK lost the
$800 exemption May 2, 2025 → all origins Aug 29, 2025 → CBP made suspension
indefinite by regulation Jun 24, 2026 → Feb 28, 2026 switched per-item
specific duties to ad-valorem-only. "2026 is the first full year of dutiable
China-direct parcels" remains directionally true; the margin math must use
current ad-valorem rates per country of origin.

### Case index (all dated within window)
- #1 Dropship China Pro, press release Jun 22, 2026 — bulk-import + US
  warehouse beats per-parcel duty; hybrid model wins.
- #2 Nora Voss, Medium, Aug 30, 2026 — the staged de minimis kill timeline.
- #3 @usadrop_official, Instagram, Jul 16, 2026 — landed costs up 15–30%;
  simulate tariff impact before launch.
- #4 Etsy micro-seller, Instagram, Aug 10, 2026 — $4 item vs $8.40 shipping;
  the sub-$25 death zone.
- #5 Stocktwits, Mar 5, 2026 — Shein +20% prices, -23% sales; Temu -33%.
  Elasticity kills.
- #6 usaid786467/product-price-matching, GitHub — n8n Amazon/AliExpress
  matcher, 100 products/day, but pre-tariff margin math (71.7% with no duty).
- #7 awaisali36/ai-product-data-enrichment-pipeline, GitHub — dual-AI
  cross-validation, 95%+ accuracy, confidence flags.
- #8 superjack2050/1688-cli issues, Jun 29 + Aug 27, 2026 — anti-bot
  risk-control; actively maintained.
- #9 Apify reality, Medium Aug 2026 + dev.to Sep 9, 2026 — actor rot,
  compute billing for retries; MCP + schemas as the fix.
- #10 China agent workflows, Medium Jun–Jul 2026 — discovery is the
  bottleneck; consolidate + QC-photo gates.
- #11 ScraperAPI credits, ~Aug 2026 — JS rendering = 10x credit multiplier.
- #12 CapSolver n8n CAPTCHA guide, updated Sep 2026 — typed failure
  branches, correlation IDs, routed notifications.
- #13 Temu affiliate terms, Admitad + Sep 6, 2026 analyses — 5–20%,
  new-users-only, harvest-now warning.
- #14 Doba, 2026 — "ships from US" as first-class filter; US-stock default.
- #15 dev.to, Jan 2026 — monitor content drift, not just errors.
