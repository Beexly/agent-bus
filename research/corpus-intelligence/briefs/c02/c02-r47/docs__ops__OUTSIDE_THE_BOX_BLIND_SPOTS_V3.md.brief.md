# docs/ops/OUTSIDE_THE_BOX_BLIND_SPOTS_V3.md

## What it is (1-2 sentences)
A v3 "what we under-leveraged" doc cataloging blind spots found by a 2026-08-06 live probe (browser/bot defaults like favicon, security.txt, ads.txt, manifest, RSS) plus a "still under-leveraged" list (sitemap density, CSP, service worker, analytics PRs, email deliverability), with the rule that 404ing browser-or-bot defaults leaves free trust on the table.

## Key metrics/methods (formulas where given, else "not specified")
not specified

## Data sources named
Live probe results only: `site.webmanifest`, `favicon.ico` / `apple-touch-icon.png`, `/.well-known/security.txt`, `ads.txt`, `humans.txt`, `ai.txt` → `llms.txt`, podcast + journal RSS feeds, homepage metadata, sitemap density, news sitemap.

## Findings (numbers and facts, not vibes)
- Prod SHA was on an older Jynx-only build vs main; `founderNextSteps` absent live — redeploy is the #1 ops action. [OTHER — ops]
- PWA manifest claimed "live odds every 30 min" while LIVE_BOARD was off — dishonest copy fixed. [TRUST-SIGNAL]
- favicon.ico / apple-touch-icon.png 404s — redirected to brand emblems. [OTHER — ops]
- `security.txt` missing — added at `/.well-known/security.txt` (RFC 9116 contact surface). [TRUST-SIGNAL]
- `ads.txt` missing — honest "no sellers" ads.txt added (GSE doesn't sell display; otherwise crawlers invent ad inventory). [OTHER — ops]
- `humans.txt` added; `ai.txt` → `llms.txt` for agent discovery (llms.txt was already the strong proof agent surface). [TRUST-SIGNAL]
- Podcast + journal RSS feeds existed but homepage didn't advertise them — RSS exposed via layout `alternates.types`. [OTHER — ops]
- Still under-leveraged: sitemap density **~900 URLs** (crawl budget / thin-page risk; audit thin fantasy/* vs core); CSP on main document partial; `sw.js` exists with unclear offline value; PostHog/Clarity analytics PRs stalled in draft (founder pick one); news sitemap thin at **170 bytes** live. [OTHER — ops]
- Related code list: `app/.well-known/security.txt`, `ads.txt`, `humans.txt`, `ai.txt`, `favicon.ico`, `apple-touch-icon.png`, `public/site.webmanifest`, `app/layout.tsx` RSS alternates, `app/llms.txt`. [OTHER — ops]
- Governing rule: if a path is a browser-or-bot default and 404s, "we are leaving free trust on the table" — same failure class as unfinished public copy. [TRUST-SIGNAL]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Manifest copy claiming "live odds every 30 min" while LIVE_BOARD off (TRUST-SIGNAL): hard lesson that any engine-driven claim must be provably live at read time — applies to any surface showing picks, odds, or freshness.
- llms.txt as the strong proof agent surface; agents discovering proof but humans not (TRUST-SIGNAL): the commitment/proof mechanism should be discoverable by humans too — e.g., public ledger links on pick pages.
- security.txt / ads.txt honesty ("no sellers") (TRUST-SIGNAL): trust-chrome hygiene — small, cheap, and crawler/bot-verifiable.
- All remaining items (OTHER): SEO/crawl/asset ops.

## Engine-actionable? (yes/no + one-line what)
No — trust-chrome and SEO hygiene; no gameplay-signal content, though the live-copy honesty rule constrains engine-driven surfaces.
