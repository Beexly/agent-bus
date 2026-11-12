# Corpus grounding wired into slate pipeline (Opus, 2026-11-12)
Branch: Beexly/Sports `opus/corpus-wiring-2026-11-11` (not merged).
- situational-facets.ts: game-conditioned facet library (weather only outdoor, rivalry only divisional, short-week restFatigue weight 1).
- run_full_gse_slate_pipeline.ts: computeCorpusGroundings() before the game loop, passed to Stage-2 overlay; fail-open; CORPUS_GROUNDING=off kill switch. NOT RUN (would run Stage-3 sim). No Week 10 slate exists in that script.
- Tests 187/187. Live TNF smoke v5: 8/8 facets grounded, overall 0.81; overlay multipliers 0.89–0.95 (shrink-only).
- Open: latency 212s (was 38s) as lit.situation grows — needs per-facet caching/index; rivalry facet thin (0.57).
