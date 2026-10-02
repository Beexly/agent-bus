# ops/evals/blog-generation-happy-path.md
## What it is (1-2 sentences)
A pending-runner eval (created 2026-05-22 by codex) for the blog-generation surface: on an NBA slate input (BOS @ NYK, SPREAD, BOS -3.5, confidence 72) it specifies that `generateBlogPost` must return valid JSON with required fields, a deterministic slug, a present responsible-gambling sentence, and a successful BLOG_GENERATION usage record — and forbids invented stats, certainty language, and direct publication.

## Key metrics/methods (formulas where given, else "not specified")
not specified — pass criteria are field checks (not formulas): slug equals `nba-picks-2026-05-22`; `evaluateGeneratedBlogPolicy(post).allowed` is true; usage record has `surface: 'BLOG_GENERATION'`, `success: true`, `errorKind: null`.

## Data sources named
Claude API (the `generateBlogPost(input, options)` generator); budget availability is an input flag.

## Findings (numbers and facts, not vibes)
- Input: date 2026-05-22, NBA, BOS @ NYK SPREAD BOS -3.5, line -3.5, confidence 72; reasoning: "consensus and line movement support Boston".
- Six required fields: title, excerpt, content, seoTitle, seoDescription, tags; slug deterministic from sport + date.
- Forbidden behavior: no invented games/scores/records/stats outside input; no certainty language; no missing responsible-gambling sentence in content; no malformed JSON; no direct publication.
- Status is `pending-runner` — the eval is a spec, not a result.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the no-invented-stats, no-certainty-language, and mandatory responsible-gambling-sentence rules are output-compliance guardrails for generated content.
- OTHER: content-pipeline plumbing.

## Engine-actionable? (yes/no + one-line what)
yes — reuse the `evaluateGeneratedBlogPolicy` scan pattern as a compliance gate for any engine-generated blog/content surface.
