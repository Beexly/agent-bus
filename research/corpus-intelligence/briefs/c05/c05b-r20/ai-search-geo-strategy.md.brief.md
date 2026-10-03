# docs/intelligence/ai-search-geo-strategy.md
## What it is (1-2 sentences)
A GEO (Generative Engine Optimization) doctrine document laying out how Sports OS pages should be structured so AI answer engines (ChatGPT, Perplexity, Google AI Overview, Claude, Gemini) can discover, cite, and retrieve them. Status: doctrine only — implementation requires an approved change proposal.

## Key metrics/methods (formulas where given, else "not specified")
- GEO-readiness checklist (per page, binary pass/fail): stable semantic URL; visible "Last updated" timestamp; every claim attributes to a named source + source tier; direct answer block (1–3 sentences + source attribution + timestamp + Confidence: HIGH/MEDIUM/LOW) before supporting context; no forbidden language (casino, guaranteed, lock); JSON-LD structured data where appropriate (FAQPage for methodology pages, Article for blog/brief pages, SportsEvent for game pages, Dataset for calibration pages); page part of a topical authority cluster; internal links to cluster pages; passes public-copy scanner test.
- Six-tier source taxonomy (Tier 1–6) referenced for source hierarchy page (future, pending Evidence Vault + Entity Graph).
- No formulas given.

## Data sources named
None directly — the file is a publishing/SEO doctrine. Mentions AI engines as the target audience (ChatGPT, Perplexity, Google AI Overview, Claude, Gemini) and existing public routes (/methodology, /observatory, /responsible-play, /blog, /vs/tout-services).

## Findings (numbers and facts, not vibes)
- Current GEO anchor pages: /methodology, /observatory, /responsible-play, /blog, /vs/tout-services.
- Gaps (blocked until Evidence Vault + Entity Graph exist): no source-hierarchy page, no calibration-transparency page, no entity-specific intelligence pages, no glossary.
- Future GEO anchor pages (pending approval): /intelligence/how-it-works, /intelligence/source-hierarchy, /intelligence/calibration, /intelligence/glossary.
- Immediate safe action (no new routes, no schema changes): ensure existing anchor pages have updated-at timestamps and pass public-copy/brand-safety tests.
- Four topical authority clusters prescribed: Sports Intelligence Methodology, Responsible Sports Intelligence, Sports Data Transparency, Fantasy Intelligence.
- Public-copy scanner and brand-voice vocabulary tests already enforce non-hype language at the code level.
- AI engines de-rank content matching patterns of gambling advertising ("guaranteed picks," "locks," "free money"), fake testimonials, unsupported performance claims, affiliate spam.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Source-attribution + confidence-tiered answer blocks build citeability for engine outputs — TRUST-SIGNAL
- Doctrine against hype/gambling language and unsupported win-rate claims (banned-phrase registry enforced at code level) — TRUST-SIGNAL
- Six-tier source hierarchy and freshness TTLs as GEO content pillars — OTHER
- Entity clarity (player/team/game/market/concept disambiguation) as a prerequisite for AI citation — OTHER

## Engine-actionable? (yes/no + one-line what)
No — publishing/marketing doctrine only; no model inputs. (Soft signal: adopt the structured answer-block format with source tiers and confidence for any AI-facing engine explanation content.)
