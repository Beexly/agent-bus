# ops/archive/root-museum/PRODUCTION_QUALITY_AUDIT.md
## What it is (1-2 sentences)
A 2026-06-01 production-quality audit of the Galaxy Sports Edge web app (Next.js 14, 48 API routes, 60 pages, 165 web test files) covering Core Web Vitals, SEO, accessibility, reliability, security headers, and CI budgets; verdict: well above median for a pre-launch product, with three highest-leverage gaps — no RUM web-vitals instrumentation, no Content-Security-Policy, no track-record structured data.

## Key metrics/methods (formulas where given, else "not specified")
- 2026 benchmark bar cited: LCP < 2.0s (tightened from 2.5s in Google's March 2026 core update), INP < 200ms (now an equal ranking signal per Search Central 2026-03-18), CLS < 0.1, all at the 75th percentile of field data; INP is the most-failed CWV in 2026 (~43% of sites fail it).
- Evidence labels used throughout: `verified` (read from a cited file), `inferred` (deduced, not executed), `recommended`.
- Test discipline noted: per-route metadata enforced by test (`public-metadata-coverage.test.ts` fails CI if a public page lacks metadata); banned-phrase metadata scanners.

## Data sources named
web.dev Core Web Vitals thresholds, Search Central 2026-03-18, schema.org/SportsOrganization, W3C WCAG 2.2 — standards references only, no sports data sources.

## Findings (numbers and facts, not vibes)
- Surface: 48 API routes, 60 pages, 165 web test files (per REPO_INTELLIGENCE_REPORT.md §2, verified there).
- Real bug found: canonical/host mismatch — layout.tsx defaults SITE_URL to https://www.galaxysportsedge.com while sitemap.ts and robots.ts default to https://galaxysportsedge.com (apex), diluting canonical signals.
- /api/health requires the last SUCCESS run within 2h or returns 503 + status:"degraded" (genuinely good freshness probe).
- 32 files export metadata, 2 use generateMetadata; 23 public pages set alternates.canonical.
- Highest-leverage safe improvement named: Organization (→ SportsOrganization/Dataset) JSON-LD on /performance reusing only vetted strings — additive and provably copy-scanner-safe.
- Hard constraint: public-copy-scanner and public-copy-scan-strong do readFileSync on app/performance/page.tsx and scan raw lowercased source for banned phrases — any new string literal there is scanned.
- 13-item prioritized punch list: P0s are /performance JSON-LD, web-vitals RUM beacon, HSTS header, www-vs-apex fix.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the trust doctrine (gated stats, banned-phrase scanners) is named as "the dominant design force" constraining every improvement — directly relevant to engine output compliance.
- OTHER: web performance/SEO/a11y audit — site ops, not prediction.

## Engine-actionable? (yes/no + one-line what)
yes — adopt the copy-scanner constraint (no new marketing prose on scanned surfaces) and the CI performance-budget pattern; no direct prediction-engine value.
