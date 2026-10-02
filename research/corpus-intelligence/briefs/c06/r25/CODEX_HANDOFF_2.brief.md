# ops/archive/root-museum/CODEX_HANDOFF_2.md
## What it is (1-2 sentences)
A 2026-05-21 handoff from a Claude sandbox session to a Codex/engineer for finalizing the Galaxy Sports Edge Next.js 14 launch (~35 file changes across copy, SEO, founder voice, design tokens, and new components), containing a full copy-paste verify → push → Vercel → smoke-test sequence plus a founder-only checklist (mailbox, posts, Canva asset, API keys).

## Key metrics/methods (formulas where given, else "not specified")
not specified for prediction; the handoff records operational quality numbers: WCAG 2.1 AA contrast ratios (`--fg-muted` bumped from 3.05:1 FAIL to 6.7:1 PASS; negative CheckMark color 4.9:1 PASS), reduced-motion rules, and trust-copy scanner patterns (scan source for "guaranteed wins", "we always win", "100% accurate").

## Data sources named
None as data sources — the file names infrastructure only: Cloudflare (MX records), Google Workspace, Vercel project `pick-pilot-s-projects/sports-web`, deployment branch `sports-intelligence-os-phase-9-ci`, X (@GalaxySportsAI), Threads, Instagram.

## Findings (numbers and facts, not vibes)
- ~35 file changes; deployment branch `sports-intelligence-os-phase-9-ci`; production domain galaxysportsedge.com.
- New components: SignalPreviewQueue, ToutComparison (6-row), AnnotatedSampleSignal (sample pick card with 6 callouts), StartInSixty (3 promises: no card for free, 7-day refund window, founder reads every reply), SubscribeButton.
- New routes: /vs/tout-services, /faq (FAQPage JSON-LD, 5 grouped sections), /changelog (5 seed entries), global 404 in founder voice.
- Single contact inbox: hq@galaxysportsedge.com (replaced support@ + legal@).
- Backlog table lists 16 deferred items with effort estimates (e.g. "Slate" hero interaction 4–6h, next/font migration 3h, dynamic-sitemap lastmod 1h).
- Six trust/quality tests named: public-copy-scanner, homepage-content, metadata-banned-phrases, trust-claims (all expected green; rule: "fix the copy not the test").
- Sandbox blockers noted: corrupted git index (locked by ACL) and no node_modules access — edits landed on disk regardless.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the banned-phrase copy-scanner pattern and "no guaranteed wins / fix the copy not the test" doctrine are directly reusable as engine claim gates.
- OTHER: site ops (SEO metadata, JSON-LD, WCAG pass, brand guidelines) — no engine prediction value.

## Engine-actionable? (yes/no + one-line what)
yes — port the banned-phrase copy-scanner pattern and the honesty-copy doctrine into the engine's output compliance gates.
