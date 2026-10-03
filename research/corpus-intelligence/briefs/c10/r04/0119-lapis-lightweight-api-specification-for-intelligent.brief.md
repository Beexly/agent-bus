# arxiv-program/research/2026-09-21/arxiv-deep/0119-lapis-lightweight-api-specification-for-intelligent.md
## What it is (1-2 sentences)
LAPIS is a token-efficient API description format (arXiv:2602.18541v1, 26 Feb 2026, Daniel García García) designed as a deterministic conversion target from OpenAPI 3.x for LLM consumers; the deep-read verdict is ADAPT.

## Key metrics/methods (formulas where given, else "not specified")
- Mean 85.5% token reduction vs OpenAPI YAML across 5 production specs (cl100k_base); vs OpenAPI JSON 88.6% claimed; vs minified JSON 79.8–90.9%.
- Attribution: metadata elimination ~25–30%, signature syntax ~25%, type-system compaction ~15%, error centralization ~10–20%.
- Tokenizer consistency within 0.5–1.9% across cl100k_base/o200k_base.
- Cost example: GitHub spec in context at $3/M input tokens: $5.44/call → $0.94/call.
- GitHub error duplication: 1,594 error defs / 14 unique codes (404 repeated 531×).
- Method: deterministic conversion rules (§5) — resolve $ref, flatten allOf, oneOf/anyOf → most common variant (complex unions → any), schemas referenced >1× become named types, 4xx/5xx deduped by code+schema. Sections: [meta], [types], [ops] (required), [webhooks], [errors], [limits], [flows].
- Equations: none stated ("not equations — specification/evaluation paper"). [limits]/[webhooks]/[flows] are NOT produced by the converter — must be hand-authored.

## Data sources named
Five production API specs: GitHub (1,080 endpoints, 8,313 types), DigitalOcean (545), Twilio (197), HTTPBin (73), Petstore (19). Converter: lapisspec v0.1.0 (PyPI), https://github.com/cr0hn/LAPIS (CC BY 4.0). No ML dataset.

## Findings (numbers and facts, not vibes)
- [QB-BEHAVIOR] n/a
- [COACHING] n/a
- [OL] n/a
- [TRUST-SIGNAL] n/a
- [SCHEME] n/a
- [OTHER] 82.7% token reduction on GitHub spec (1,811,843 → 313,101); 90.8% DigitalOcean; 92.1% Twilio; 71.9% HTTPBin; 82.7% Petstore.
- [OTHER] LLM reasoning quality on LAPIS vs OpenAPI is explicitly untested — the paper admits no comprehension experiment; lossy conversions (oneOf → most common variant, complex unions → any) are exactly where an agent could pick the wrong variant.

## Engine-actionable? (yes/no + one-line what)
Yes — hand-author LAPIS docs (especially the [limits] section: rate limits, quotas, tiers) for each of Garrett's 12+ sports-data APIs, store in repo as canonical machine-readable contracts, and inject into agent context instead of raw docs to cut per-task token cost; gate on a 20-task pilot showing ≥70% token reduction with first-attempt tool-call accuracy within 5 pp of raw-docs baseline.
