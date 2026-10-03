# ops/2026-09-28-infrastructure-audit.md
## What it is (1-2 sentences)
Hands-on infrastructure audit dated 2026-09-28 covering Neon Postgres autoscale settings (applied and verified), a blocked Hugging Face billing ticket, and a write-up of a fantasy variance-model falsification.
## Key metrics/methods (formulas where given, else "not specified")
Neon `default_endpoint_settings`: `autoscaling_limit_max_cu` 8 → 1, `suspend_timeout_seconds` 0 → 300. Founder's arithmetic (accepted, not re-derived): Launch plan at $0.106/CU-hour, 574 active hours, capped at 1 CU → 574 × 0.106 = $60.84/month worst case, with scale-to-zero lowering it further.
## Data sources named
Neon Postgres project `summer-brook-99380762` (gse-postgres), org `org-floral-star-55015944`; Hugging Face inference endpoint (account Pro active, $0.00 spent, every token refused with "exceeded your monthly spending limit" — diagnosed as account-state bug, not credential problem).
## Findings (numbers and facts, not vibes)
- Project's 42 branches each carry endpoint settings; the patch hit project-level `default_endpoint_settings` only (new branches inherit). All 42 branches returned no such field on read, so the 41 `preview/*` branches are unchanged — a stated scope gap where remaining spend may live if they aren't idle.
- HF billing ticket at huggingface.co/contact-us was NOT filed: no SMTP client installed on the machine, browser CDP unreachable, no vault login — human-only task. Standing fallback: bge-m3 runs locally on CPU at zero cost (CLS-pooling rebuild at `.hermes/scratch/bge_corpus_cls.py`).
- Variance-model falsifier: the McCaffrey spot-check projection (proj=417) equals McCaffrey's realized 2025 total (416.6) — the posted projection was the answer key; the floor/ceiling pair (313/584) is not producible by the specified symmetric band (897 ≠ 2×417); neither was tuned to green.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the answer-key-leak falsifier (McCaffrey 417 vs realized 416.6) is a data-contamination warning — directly relevant to any GSE model validation pipeline.
- OTHER: Neon cost governance; zero-cost local embedding fallback (bge-m3 on CPU) for corpus intelligence work.
## Engine-actionable? (yes/no + one-line what)
yes — add a contamination check to validation: flag any projection landing suspiciously near a realized total (spot-check 417 vs 416.6) before trusting backtests.
