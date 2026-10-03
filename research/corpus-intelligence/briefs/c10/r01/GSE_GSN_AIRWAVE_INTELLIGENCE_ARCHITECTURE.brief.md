# docs/ai/airwave/GSE_GSN_AIRWAVE_INTELLIGENCE_ARCHITECTURE.md
## What it is (1-2 sentences)
Architecture doc (review-ready, operator-gated, inert by default) for the Airwave Intelligence Intake pipeline: turns sports-media input (satellite radio, podcasts, YouTube shows, beat reports, operator notes) into structured, review-gated, paraphrased sports-intelligence claims for GSE (picks/model context) and GSN (editorial).
## Key metrics/methods (formulas where given, else "not specified")
not specified (pipeline architecture, no formulas)
## Data sources named
- 10 defined source categories: public YouTube shows, podcast RSS, beat-reporter mesh, official team feeds, official league feeds, odds/market feeds, operator transcript import, founder listening notes, SiriusXM-class (HELD, legal-ack gated), Galaxy Studio handoff.
- Implementations: `apps/web/lib/airwave/source-policy.ts`, `channel-87-schedule.ts`, `claim-extraction-contract.ts`, `gse-gsn-output-map.ts`; `workers/airwave-listener/` (dry-run scaffolding only).
## Findings (numbers and facts, not vibes)
- 9 GSE output types defined: `injury_readiness_alert`, `player_usage_alert`, `dfs_value_signal`, `market_narrative_note`, `risk_flag`, `pick_evidence_candidate`, `model_context_note`, `watchlist_item`, `no_bet_reason_candidate`.
- Hard rules: no verbatim quotes (paraphrase-only, enforced at type level), no raw audio stored, no auto-publish; every claim needs operator review; GSE pick evidence requires additional official-source corroboration.
- All capture held behind explicit gate flags; v1 does no live capture (workers are dry-run scaffolding).
## Intelligence connections
- [OTHER] The 9 GSE output types (injury/usage alerts, DFS value signals, no-bet reasons) define the exact intake schema the engine should consume once gates open.
- [TRUST-SIGNAL] Corroboration rule (operator + official source before pick evidence) is a usable template for engine signal-promotion gates.
## Engine-actionable? (yes/no + one-line what)
yes — adopt the GSE output-type contract (`injury_readiness_alert`, `player_usage_alert`, `dfs_value_signal`, `no_bet_reason_candidate`) as the engine's media-intake signal schema.
