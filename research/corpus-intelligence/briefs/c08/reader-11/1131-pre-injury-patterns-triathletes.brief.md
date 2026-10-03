# docs/arxiv-program/research/2026-09-21/arxiv-deep/1131-pre-injury-patterns-triathletes.md

## What it is (1-2 sentences)
Ledger of arXiv:2511.17610v1 (Rodrigues et al. 2025, verdict ADAPT for method, REJECT for accuracy claims). Builds a synthetic triathlete cohort with injected pre-injury warning patterns to test classifiers — valuable for its feature schema and synthetic-sandbox-as-negative-control design, not its injury-accuracy claims, which are circular.

## Key metrics/methods (formulas where given, else "not specified")
- Synthetic cohort: 1,000 athletes × 365 days = 365,000 daily records; 24 athlete-profile parameters; six lifestyle archetypes.
- Label construction: 4–6 injuries per athlete per year scheduled, then 7–14-day warning patterns injected retrospectively before each; 2–3 false-alarm episodes per athlete per year.
- 100+ features incl. 3/7/14-day rolling summaries of training load and lifestyle signals; target = injury within next 7 days. Best classifier XGBoost; 80/20 by-athlete split + temporal split (Jan–Oct train, Nov–Dec test). No equations stated.
- Gate in file: GSE's availability model must rank true injected-mechanism features in its top 5 by attribution on ≥80% of sandbox replications, else its real-data injury outputs are downgraded to "experimental."

## Data sources named
Synthetic only (described generation). Code stated: github.com/brunobastosrodrigues/injury-prediction. One table presents "real" vs "+synthetic" results, but the methodology describes only synthetic generation — the file flags the "real" component's provenance as unexplained (possible reporting inconsistency).

## Findings (numbers and facts, not vibes)
- Best XGBoost: AUC 0.858, AP 0.726 — file explicitly treats these as CIRCULAR (warning patterns injected before scheduled injuries, so the model recovers the simulator's own assumptions, not real injury forecasting); numbers must never be cited as evidence of real injury predictability.
- Triathlon ≠ football: injury mechanisms (overuse/endurance) differ from contact-sport trauma; archetype parameters do not transfer.
- No confidence intervals reported; baselines not clearly enumerated.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: negative-control protocol for player-availability models — a synthetic sandbox with known ground-truth injury mechanics (practice-load spikes → soft-tissue risk with 3–10-day lag; prior-injury recurrence) as a standing regression test before trusting real-data outputs.
- OTHER: feature schema template — 100+ features with 3/7/14-day rolling load summaries mapped to nflverse-available signals (snaps, touches, travel, rest days).

## Engine-actionable? (yes/no + one-line what)
Yes — build an NFL synthetic-injury sandbox (300 synthetic player-seasons, injected mechanisms, 3/7/14-day rolling features) as an attribution-recovery regression test for GSE's availability model; never use the paper's 0.858 AUC as evidence about real predictability.
