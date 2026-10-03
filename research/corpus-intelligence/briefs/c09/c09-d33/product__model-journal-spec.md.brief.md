# product/model-journal-spec.md
## What it is (1-2 sentences)
Spec for a weekly Model Journal (research blog on the model itself) — 800–1500 word Sunday essays built from a Friday settled-picks data pipe → Saturday draft → owner review/publish, aimed at technically-literate skeptics with terse Stripe-docs/PFF-methodology tone.
## Key metrics/methods (formulas where given, else "not specified")
- `JournalWeekData` inputs: settledPicks[], lossAutopsies[], preMortemTags[], factorWeightChanges[], notableGates[], nextWeekSlate[]; aggregate calibration delta vs prior 8-week trailing average computed internally (not published).
- Drafting prompt (in `apps/web/lib/journal/prompts.ts`): cold open → week in numbers (no aggregate win rate) → what got right → what got wrong (variance vs signal-drift) → pre-mortem hit rate → what changed → forward look. Prohibits: first-person singular, hedging, marketing adjectives, aggregate win-rate claims, competitor comparisons, betting advice, emoji.
- Compliance scanner hard-refuses banned vocab, win-rate claims, competitor comparisons before publish.
- Prisma schema: ModelJournalEntry with isoWeek/isoYear unique, modelVersion, referencedPickIds/referencedAutopsyIds, status DRAFT/REVIEW_PENDING/PUBLISHED/RETRACTED.
## Data sources named
not specified (internal: settled picks, LossAutopsy rows, Pick.preMortemContent, factor weight changes, gate decisions).
## Findings (numbers and facts, not vibes)
- Cadence weekly per ISO week; public at `/journal/[slug]`, RSS at `/journal/rss.xml`; email digest to Elite subscribers Sunday by 10am ET; Twitter thread teaser Monday.
- 11 acceptance criteria including evals per structural section, per banned-vocab trigger, and on average/tough/quiet weeks; zero banned-vocab hits on 8 weeks synthetic input required.
- Open items: cold-open auto-generation (default yes), zero-settled-pick weeks still publish (default yes), factor tagging Phase 4, English only.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (model transparency / SEO moat — a publishing discipline, not football intelligence)
## Engine-actionable? (yes/no + one-line what)
no — product/publishing spec; no modeling signal (though it consumes loss autopsies as evidence discipline).
