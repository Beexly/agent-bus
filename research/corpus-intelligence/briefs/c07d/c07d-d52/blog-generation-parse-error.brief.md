# ops/evals/blog-generation-parse-error.md

## What it is (1-2 sentences)
An evaluation spec (`surface: blog-generation`, `template: BLOG_POST`, `scenario: parse-error`, created 2026-05-22 by codex, status `pending-runner`) defining the fail-closed behavior required when the Claude API returns prose instead of valid JSON for an NBA slate blog-generation request.

## Key metrics/methods (formulas where given, else "not specified")
Not specified (no formulas). Exact expected values:
- Rejection error string: `Could not parse JSON from Claude response`.
- Usage row on failure (when `recordUsage` is true): `surface: 'BLOG_GENERATION'`, `success: false`, `errorKind: 'PARSE_ERROR'`.
- Forbidden: regex extraction from non-JSON prose beyond the existing JSON-object match, partially populated content, successful usage record, direct publication.

## Data sources named
- Claude API response (text without valid JSON) as the input trigger; the generator's own `recordUsage` path.

## Findings (numbers and facts, not vibes)
- The runtime must fail closed: no inference of fields from prose, the generator throws the JSON parse error, a failed `BLOG_GENERATION` usage row is recorded when `recordUsage` is true, and `PARSE_ERROR` is the usage error kind.
- Pass criteria (5): promise rejects with `Could not parse JSON from Claude response`; no generated post returned; usage record `surface: 'BLOG_GENERATION'`; usage record `success: false`; usage record `errorKind: 'PARSE_ERROR'`.
- Eval status is `pending-runner` — the spec exists but this file records no observed run result; no pass/fail outcome is reported.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL — trust-target intake / publication safety.** This eval is the fail-closed contract for content generation: garbage model output must never become published content, and the failure must be machine-recorded with the correct error kind. The same fail-closed posture underlies the public/private surface doctrine (no unreviewed or malformed content reaches public surfaces). Serves the **trust-target intake** and **content-publication pipeline** programs — any future generation surface (blog, Studio assets) inherits this exact refusal/record discipline.
- No QB-BEHAVIOR, COACHING, OL, SCHEME, or OTHER sports content in this file.

## Engine-actionable? (yes/no + one-line what)
No — ops eval spec for the blog-generation surface; no model, metric, or sports finding to wire.

Referenced files/papers/datasets: none beyond the runtime's own `recordUsage` path and the generator's JSON-object match.
