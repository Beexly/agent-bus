# ops/evals/blog-generation-parse-error.md
## What it is (1-2 sentences)
Eval spec (created 2026-05-22, status pending-runner) for the blog-generation content surface: when the Claude API returns text that is not valid JSON, the runtime must fail closed — reject with the generator's JSON parse error, never infer fields from prose, and record a failed usage row.

## Key metrics/methods (formulas where given, else "not specified")
Not specified beyond pass criteria: (1) promise rejects with `Could not parse JSON from Claude response`; (2) no generated post returned; (3) usage record `surface: 'BLOG_GENERATION'`; (4) `success: false`; (5) `errorKind: 'PARSE_ERROR'`.

## Data sources named
None (NBA slate input is a fixture; Claude API output is the input under test).

## Findings (numbers and facts, not vibes)
- Expected behavior: no regex extraction beyond the existing JSON-object match; no partially populated content; no successful usage record; no direct publication.
- Usage record written only when `recordUsage` is true, with error kind `PARSE_ERROR`.
- Forbidden: any attempt to infer fields from non-JSON prose.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Fail-closed refusal to fabricate content from unparseable model output — **TRUST-SIGNAL**
- Content-pipeline safety mechanics — **OTHER**

## Engine-actionable? (yes/no + one-line what)
No — content-generation safety eval; no prediction, factor, or calibration content.
