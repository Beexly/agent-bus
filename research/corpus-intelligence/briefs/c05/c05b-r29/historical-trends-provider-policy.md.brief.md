# source-providers/historical-trends-provider-policy.md
## What it is (1-2 sentences)
Doctrine governing evaluation, admission, and management of historical sports data providers for the prediction engine's back-testing and calibration (from Prompt 4 — Final Wave; parent: `docs/intelligence/SPORTS_OS_INTELLIGENCE_NETWORK_MASTER_PLAN.md`).
## Key metrics/methods (formulas where given, else "not specified")
Four-dimension evaluation framework (from `docs/audit/final-wave-source-risk-register.md`): Data quality (completeness, accuracy, depth of historical record, update cadence — weight High); Legal/licensing (commercial use license, redistribution rights — weight Critical); Reliability (API uptime, format stability, corrections policy — weight Medium); Manipulation risk (verified-source curation — weight High). GREEN/YELLOW/ORANGE/RED classification: GREEN (all dimensions ≥4) admit immediately; YELLOW (one 3–3.9) admit with constraints after operator sign-off; ORANGE (one 2–2.9) owner approval, back-testing only, never public claims; RED (any <2 or legal concern) do not admit.
## Data sources named
The Odds API (T2, licensed live odds); official league feeds (T1); Sportradar (YELLOW); Stats Perform/Opta (YELLOW); Sports Reference LLC properties — Pro Football Reference / Basketball Reference / Baseball Reference (YELLOW, editorial citation T3; bulk automated ingestion needs license); NFL official historical stats, NBA official box scores, MLB historical records (GREEN); Kaggle/GitHub sports datasets (case-by-case, default ORANGE); Scores24 (ORANGE, no use until licensing resolved).
## Findings (numbers and facts, not vibes)
- "It's historical — no one cares" is explicitly rejected as a defense for unlicensed use; historical data used in back-testing/calibration must satisfy the same licensing as live data.
- ORANGE providers may be used for internal model calibration testing ONLY — never cited in a Model Journal win rate claim, public performance disclosure, or Galaxy Almanac essay.
- Pro Football Reference etc.: may be cited editorially in Almanac essays, may NOT be scraped in bulk, may NOT be a primary engine-calibration source without a commercial agreement with Sports Reference LLC.
- Academic/public datasets default to ORANGE until license and provenance confirmed; a dataset described as "scraped from ESPN" may not be used even if publicly available on Kaggle.
- Use-case table: back-testing and confidence-score calibration require GREEN or YELLOW (licensed); public win-rate claims require GREEN or YELLOW licensed + full claim governance; ORANGE internal-research-only with owner approval; evidence-vault items T1 or T2 licensed only.
- Calibration data must come from a specific versioned snapshot (not a live feed); provider updates force re-running calibration + documenting in the model version log; snapshots stored internally for reproducibility.
- Approval gates: GREEN admit = Operator; YELLOW admit = Owner + signed license; ORANGE internal testing = Owner; public Almanac citation = Operator; public win-rate claim = Owner.
- Forbidden: scraping without confirmed automated-access permission; unclear-provenance datasets in calibration; citing ORANGE publicly; forward-looking certainty claims from historical data; admitting a provider without completing the review framework.
- Codex audit requirements: no bulk scraper targets Sports Reference LLC properties; calibration sources in `packages/prediction-engine/` must have documented license + classification; no Kaggle/GitHub dataset in calibration without a provenance review record; unclassified historical source in the engine = P1.
- Cross-references: `docs/audit/final-wave-source-risk-register.md`, `docs/source-providers/scores24-source-review.md`, `docs/source-providers/commercial-crawling-approval-gate.md`, `docs/brain/source-hierarchy.md`.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: source-licensing integrity directly underpins public model-performance claims and calibration quality.
- OTHER: data-governance/back-testing policy for the engine's calibration loop.
## Engine-actionable? (yes — run the Codex audit checklist against `packages/prediction-engine/`: every historical calibration source must have a documented license + GREEN/YELLOW/ORANGE/RED classification; any unclassified source is a P1)
