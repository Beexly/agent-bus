# ops/2026-09-28-infrastructure-audit.md
## What it is (1-2 sentences)
A command-by-command infrastructure audit dated 2026-09-28 covering three items: Neon Postgres autoscale/auto-suspend changes applied and verified via API, a blocked Hugging Face billing support ticket, and a headline finding that the McCaffrey fantasy variance-model spot-check used the realized answer as its projection.

## Key metrics/methods (formulas where given, else "not specified")
- Neon autoscale: `autoscaling_limit_max_cu` **8 → 1** (8x ceiling reduction); `suspend_timeout_seconds` **0 → 300** (was never-suspend, now scale-to-zero after 5 idle minutes). Min CU unchanged at 0.25.
- Founder's cost arithmetic (accepted by auditor, not re-derived): Launch plan at **$0.106/CU-hour**, 574 active hours, capped at 1 CU → **574 × 0.106 = $60.84/month worst case**, with scale-to-zero reducing further on idle.
- UNCERTAIN: the "0.632 CU-hour per active hour" basis is from a prior session and was **not re-measured**; the auditor explicitly refuses to restate it as verified.

## Data sources named
- Neon Postgres project `summer-brook-99380762` (gse-postgres), org `org-floral-star-55015944` — via authenticated Neon CLI passthrough (`neon api`).
- Hugging Face inference endpoint (Pro account state: active, $0.00 spent; all tokens refused).
- Local fallback: bge-m3 on CPU at zero cost; see `.hermes/scratch/bge_corpus_cls.py` (CLS-pooling rebuild, gated on a median-pairwise-similarity check before save).
- Referenced by name: `docs/fantasy/research/2026-09-28/variance-model-and-mccaffrey-falsifier.md`; huggingface.co/contact-us; [EMAIL] (redacted billing address); `himalaya` skill (installed, binary missing); `browser_vault_list` (empty); `browser_exec`/CDP at `http://127.0.0.1:9222` (unreachable).

## Findings (numbers and facts, not vibes)
- **Neon autoscale patch APPLIED AND VERIFIED** (project-level `default_endpoint_settings`): max CU 8 → 1, suspend timeout 0 → 300s. Re-read via `neon api` confirmed the new values.
- Scope gap stated explicitly: the project's **42 branches each carry their own endpoint settings**; all 42 returned no `default_endpoint_settings` field when read, so none were patched. The patch applies to the project defaults that **new** branches inherit; the 41 `preview/*` branches are unchanged and were merely *presumed* idle — "if that presumption is wrong, this is where the remaining spend is, and it is a separate task with a separate read-back."
- Before the change, the DB was configured to **never suspend** — every idle minute billed at 0.25 CU. After: idle costs nothing after 5 minutes.
- The cap at 1 CU is "the load-bearing part": 8 CU was "2.5x the assumed cost whenever a single query spiked."
- **HF billing ticket NOT FILED — blocked on a human. No ticket number exists.** Both routes blocked: no SMTP client installed (`himalaya msmtp sendmail swaks` → no hits, no binary under `%LOCALAPPDATA%`); browser form submission blocked (CDP `http://127.0.0.1:9222` actively refused). The `himalaya` skill is installed but its binary is absent; no vault login exists, so no authenticated HF session could file anyway.
- The technical claim for the ticket, stated as the part that matters: **every token on the HF account is refused with "exceeded your monthly spending limit" while the billing page shows Pro active and $0.00 spent — an account-state bug, not a credential problem; a new token will not fix it.**
- Standing fallback: bge-m3 runs locally on CPU at zero cost, needing no ticket and no token.
- **Fantasy variance-model finding (section 3): the McCaffrey spot-check with proj=417 matched McCaffrey's realized 2025 total (416.6) — the posted projection was the answer key.** The posted floor/ceiling pair (313/584) is "not producible by the specified symmetric band — 897 ≠ 2×417." Neither was tuned to green. (Full write-up in the referenced variance-model falsifier doc.)

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Serves the infrastructure/ops program, not a prediction lane — but the McCaffrey finding is calibration-relevant: a variance-model spot-check whose "projection" (417) equals the realized total (416.6) and whose floor/ceiling (313/584) cannot be produced by the claimed symmetric band is a falsified model, and it belongs in the calibration/sizing program's record of which models failed and why.
- [OTHER] The 42-branch autoscale scope gap is an ops cost signal: 41 unchanged `preview/*` branches could carry the remaining Neon spend if not idle — relevant to the Vercel/Neon max-leverage cost discipline but not to prediction accuracy.
- [OTHER] The bge-m3 local-CPU fallback (zero cost, CLS-pooling rebuild gated on median-pairwise-similarity) is the embedding-lane contingency while the HF inference 403 account-state bug remains unresolved; it matters for any NLP pipeline (coach transcripts, injury news) that depends on embeddings.
- [OTHER] CONTRADICTION-adjacent: MEMORY.md (2026-09-28) records the HF token as "verified valid" and bge-m3/Qwen3-Embedding tests as "were 401-blocked" — a 401 credential issue — while this audit characterizes the HF failure as an account-state bug (403 "exceeded your monthly spending limit" with Pro active and $0.00 spent). These may be two different failure modes on different endpoints, but the audit insists "a new token will not fix it."

## Engine-actionable? (yes/no + one-line what)
Yes — verify whether the 41 unpatched preview/* Neon branches are idle (the unquantified remaining spend), and fix the HF account-state bug (or commit to the local bge-m3 CPU path) before any embedding-dependent intake runs.
