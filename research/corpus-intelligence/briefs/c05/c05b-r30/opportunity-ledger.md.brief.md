# strategy/opportunity-ledger.md
## What it is (1-2 sentences)
The 2026-06-03 Master Opportunity Ledger — an exhaustive cross-area sweep (4 parallel research passes + a design/motion list) tagging every opportunity ADOPT / EXPERIMENT / GATED / SKIP, covering free data sources, dev tooling, design, viz, audio/video, SEO, growth, monetization, and 11 critical blind spots. It is the richest intelligence file in this chunk by far.

## Key metrics/methods (formulas where given, else "not specified")
- Data-source layer (all ADOPT unless noted):
  - Weather: NWS api.weather.gov (free, Tier-A, US-only) → venue weather signal. Open-Meteo global but **commercial = paid, gate** — EXPERIMENT.
  - Narrative/sentiment: GDELT 2.0 (free, no key, **tone every 15min**) + Wikipedia Pageviews (attention proxy, Tier-A) + Reddit OAuth (internal only) — ADOPT GDELT + Wikipedia.
  - Geo/jurisdiction: Nominatim/OSM geocode (Tier-A, attribution) + ipapi.co/ipwho.is (coarse IP→region, **messaging only, never a compliance gate**).
  - Schedule density: Nager.Date (holidays) + TimeAPI (TZ normalization → **rest/body-clock signal**) — EXPERIMENT.
  - Sports breadth: balldontlie (NBA/NFL/MLB free, rate-limited), TheSportsDB (logos/artwork for UI), NCAA API (TS-native) — ADOPT TheSportsDB for UI art; others Tier-B.
  - Markets: Polymarket public read = **2nd CLV anchor** (frame carefully) — EXPERIMENT internal.
  - Anti-fraud: AbstractAPI email-validation + ipqualityscore (VPN/fraud flag) for contest/RG integrity — EXPERIMENT.
  - Commercial-use traps (free ≠ free once monetized): Open-Meteo, MySportsFeeds, GNews/NewsAPI, ip-api.com — gate paid upgrade before monetizing.
- Dev tooling: ADOPT now — `markitdown` (any doc/PDF/audio → Markdown content pipeline, Python sidecar), `Scrapling` (self-healing Tier-B scraping), **`swr`** (live-updating picks/odds UI), **Sentry** (error/trace), `ollama` (cheap LOCAL drafting, data private), **PostHog** (analytics + flags + experiments + session replay — one tool). EXPERIMENT — VoxCPM2 TTS (audio briefings/podcast from human-approved text), LangGraph (ingest→estimate→grade→draft→human-review gate), supermemory, Supabase Realtime+pgvector, GrowthBook (rigorous Bayesian/sequential experiment stats; pick ONE of PostHog/GrowthBook as source of truth). SKIP — MoneyPrinterTurbo (AI-slop video), Next.js Commerce, cal.com, **Unsloth/fine-tuning (bakes opinions into weights — fights glass-box ethos)**, v0 = prototyping aid only.
- Data-viz: hero = **CORP/PAV reliability diagram** (predicted vs actual + confidence bands); pair **calibration curve + Brier/Brier-Skill** (shape AND number); consensus "spread" strip (us vs market, disagreement highlighted); always show **sample size N** on hover; existing producers: `performance-analytics.ts` + `consensus-view.ts`.
- Content/SEO: evergreen guides ("how to read a reliability diagram," "what Brier score means"); programmatic per-team/per-matchup pages only where real data exists; SSR + schema.org SportsEvent/Dataset.
- Growth: public track-record dashboard as lead magnet; referral tied to **accuracy milestones**, not signups; **loss-autopsy posts when wrong**; weekly "your calibration vs the model" recap email.
- Monetization rank: (1) education/courses (probabilistic literacy), (2) premium calibration/deep-dive reports, (3) **B2B data/API** (highest revenue, founder-gated), (4) honest affiliate tools/books only — **NEVER sportsbook CPA** (conflicts with no-real-money).
- Critical blind spots (all rated H except where noted): AI safety — **numeric-claims validator** (reject ungrounded stats), retrieval-grounded generation, citation-to-source, source-credibility weighting + "unverified" labels, prompt-injection sanitization on ingested text. Legal — ToS, "not betting/financial advice" disclaimer, age/jurisdiction gate; prediction-market risk LIVE (MN criminalized prediction-market apps June 2026; Kalshi litigation; **13 states banning sweeps**) → Kalshi read-only/analytical, geofenced, never a wagering surface. Accessibility — WCAG 2.2 AA, never color-alone for edge/confidence (add icon/pattern), 4.5:1 contrast. Privacy — GDPR/CCPA, DSAR, encrypt bankroll/PII. Security — Auth.js + MFA, per-IP/key **rate-limiting** (scraping our edges is the obvious attack), **rotate the 2 leaked keys**, gitleaks pre-commit + secrets vault. Observability — **per-source freshness SLAs + staleness detection + circuit breakers** (silent feed outage → confidently wrong edges); "stale data" UI banner; status page + incident/correction runbook. **Per-prediction provenance** — stamp every prediction with source-snapshot IDs + ingestion timestamp. **Model reproducibility** — frozen input snapshot + code/version hash per prediction; `replay` command; calibration-drift monitor paging on Brier/log-loss creep. Email deliverability — SPF+DKIM+DMARC, spam <0.30%. Contest integrity M — Sybil/anti-collusion + published seed commitments. Timezones — store UTC, DST tests around lock windows. Proof-of-record ledger backup/DR M.
- Do-first list: numeric-claims validator · Sentry + staleness banners · swr live UI · accessibility tokens + dark mode · ToS/disclaimer · per-prediction provenance stamp · email auth (DMARC) · reliability-diagram + consensus surface.

## Data sources named
NWS api.weather.gov; Open-Meteo; GDELT 2.0; Wikipedia Pageviews; Reddit OAuth; Nominatim/OSM; ipapi.co; ipwho.is; Nager.Date; TimeAPI; balldontlie; TheSportsDB; NCAA API; Polymarket public read; AbstractAPI email-validation; ipqualityscore; Kalshi (read-only).

## Findings (numbers and facts, not vibes)
- GDELT 2.0 tone updates every 15 min, free, no key — the fastest free sentiment signal named.
- Prediction-market legal risk is live: MN criminalized prediction-market apps in June 2026; 13 states banning sweeps; Kalshi in litigation.
- Gmail/Yahoo 2026 deliverability bars: SPF+DKIM+DMARC alignment, one-click unsubscribe, spam <0.30%.
- Motion discipline spec: 200–300ms "lock-on" precision, honor `prefers-reduced-motion`; contrast floor 4.5:1; WCAG 2.2 AA.
- Four verdict tags defined: ADOPT / EXPERIMENT / GATED / SKIP; honesty doctrine + no-real-money + no-auto-publish bind everything.
- Related files: `repo-firehose-review.md`, `platform-gaps-triage.md`, `platform-gaps-triage-2.md`, `design-monetization-growth.md`, `gaming-and-engagement-expansion.md`.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (weather/rest signal): NWS venue weather + TimeAPI TZ-normalization rest/body-clock signal — both feed the total-signal doctrine (rest/travel/body-clock as engine inputs).
- TRUST-SIGNAL: loss-autopsy posts; accuracy-milestone referrals; numeric-claims validator; per-prediction provenance stamps; frozen-input reproducibility + replay command; calibration-drift monitor on Brier/log-loss.
- OTHER (markets): Polymarket public read as 2nd CLV anchor; Kalshi read-only/analytical.
- OTHER (fraud/ops): ipqualityscore VPN/fraud flag; per-IP rate-limiting (edge-scraping threat); 2 leaked keys owed rotation; per-source freshness SLAs + staleness banners + circuit breakers.
- OTHER (tooling): swr live UI, Sentry, PostHog/GrowthBook single source of truth, VoxCPM2 audio briefings, LangGraph human-review gate, markitdown/Scrapling ingestion pipeline.

## Engine-actionable? (yes/no + one-line what)
Yes — the data-source tier list (GDELT 15-min tone, NWS weather, TimeAPI rest/body-clock, Polymarket 2nd CLV anchor) is a directly adoptable signal-shopping list, and the provenance + freshness-SLA + staleness-detection specs map one-to-one onto the engine's trust layer.
