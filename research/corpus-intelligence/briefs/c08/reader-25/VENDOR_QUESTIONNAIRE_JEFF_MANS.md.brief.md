# docs/legal/VENDOR_QUESTIONNAIRE_JEFF_MANS.md
## What it is (1-2 sentences)
A vendor evaluation questionnaire (internal, 2026-06-12) for Jeff Mans' "One MANS Opinion" weekly NFL DFS podcast as a potential `vendor_candidate` source (`jeff-mans-one-mans-opinion`); it also serves as the reusable template for future vendor candidates.
## Key metrics/methods (formulas where given, else "not specified")
not specified. Decision framework: four registry outcomes keyed to vendor response (written license → `approved_written_permission`; manual/paraphrase only → stays `vendor_candidate`; no response → stays candidate with automation off; C&D → all activity stops).
## Data sources named
Podbean (manspod.podbean.com), Apple Podcasts (id1500323362), TuneIn; FantasyGuru ELITE+ Podcast Network. SiriusXM corporate distribution explicitly parked/out of scope.
## Findings (numbers and facts, not vibes)
- Public feed is free and openly RSS-syndicated; FantasyGuru premium content separate and out of scope.
- Use case defined: pundit-claim accountability — log paraphrased, attributed, dated claims ("Mans on X player, week N") and grade publicly over time.
- Explicitly NOT wanted as model input: his picks/analysis are proprietary predictions; `data-rules.ts` forbids extracting them as engine inputs.
- Airwave source policy allows the manual lane for `podcast_rss` at LOW risk without vendor sign-off.
- Automation flags stay `false` until the vendor answers and the owner signs off; the clearance engine enforces this.
- Part C (outreach via fantasyguru.com) and Part D were still unanswered/unrecorded at file time.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Legal trust boundary for a pundit source: TRUST-SIGNAL — a graded pundit-claims ledger is the accountability surface, and the hard line (never engine input) protects model integrity.
## Engine-actionable? (yes/no + one-line what)
No — legal/compliance doc; the only engine-relevant rule (pundit picks never enter the model) is already enforced in `data-rules.ts`.
