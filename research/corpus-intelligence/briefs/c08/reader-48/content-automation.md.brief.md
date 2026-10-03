# docs/content-automation.md

## What it is (1-2 sentences)
A spec for the content automation system: after each pick generation run, a `ContentWorker.onPicksGenerated()` pipeline auto-generates SEO-optimized, data-backed sports analysis blog posts via the Claude API, split into free previews (first 2 paragraphs) and premium full articles. It carries five non-negotiable content rules, notably no fabricated stats, no invented data, and no guaranteed outcomes.

## Key metrics/methods (formulas where given, else "not specified")
- Not specified (pipeline/content schema doc; no formulas).
- Pipeline: `picks.generated` event → `ContentWorker.onPicksGenerated()` → group by sport/date → `generateBlogPost(picks)` → structured data prompt → Claude API → parse/validate → store `BlogPost` → publish (free preview + premium body).
- Content rules: (1) no fabricated stats — Claude receives only real data from the picks object; (2) every claim traceable to ingestion data; (3) no "will win" language; (4) first 2 paragraphs free, rest premium; (5) gambling disclaimer on all posts.
- Claude never receives instructions to make pick recommendations — it receives completed picks and writes analysis around them.
- SEO: title `{Sport} Picks {Date}: {Top Pick} Analysis`; slug `{sport}-picks-{YYYY-MM-DD}`; Open Graph + JSON-LD Article schema.

## Data sources named
- The picks object from the pick generation cycle (teams, lines, confidence scores, pick types) is the sole input; Claude is instructed to only reference the provided data.

## Findings (numbers and facts, not vibes)
- BlogPost schema includes `id, title, slug, excerpt, content, sport, tags, seoTitle, seoDescription, publishedAt, isFeatured, relatedPickIds, generatedBy ('system'|'admin'), modelVersion`.
- Publishing: automatic after each pick generation cycle; manual publish from admin dashboard; scheduled posts supported via `publish_at`.
- The doc is a pure spec — no output counts, performance numbers, or dates recorded.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the no-fabricated-stats / no-guaranteed-outcomes rules are anti-slop trust posture for public content.
- OTHER: content pipeline wiring context — relevant when public surfaces consume engine picks.

## Engine-actionable? (yes/no + one-line what)
- No — content-pipeline spec with nothing to calibrate or model; relevant only as context for how picks reach the public surface.
