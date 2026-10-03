# fable/evidence/CLAIM_EVIDENCE_LEDGER.md
## What it is (1-2 sentences)
The human-readable front of the FABLE claim-evidence ledger: a self-described "downgrade machine" that classifies the highest-risk historical claims (from the OneNote/prompt/addendum lane) and current FABLE docs/code into proven / partially proven / unsupported / false / blocked / needs-legal / needs-owner-decision. The machine-readable twin is `CLAIM_EVIDENCE_LEDGER.json`.

## Key metrics/methods (formulas where given, else "not specified")
not specified. Classification taxonomy (7 states): evidence (proven), partially proven, unsupported, false, blocked, needs legal review, needs owner decision. No thresholds or confidence values are stated.

## Data sources named
None (references the source registry generically; "OneNote / historical prompts" cited as the source column for all 7 downgraded claims).

## Findings (numbers and facts, not vibes)
Status counts as stated:
- Proven: source registry mapping; AWS gate default-off behavior; calibration surfaces; drift primitives; active-learning ranking; GitHub navigation. (6 items)
- Partially proven: metric derivation inventory — mapped to repo modules but still needs per-metric formulas and sample windows. (1 item, and the file itself flags a gap: formulas and sample windows still missing)
- Unsupported or false: historical `legal cleared`, `.5+ gain`, `superior edge`, `parity+`, AWS-live, AWS-labeling-live, broad readiness language, complete competitive-edge claims. (8 items)
- Blocked: MC Dropout implementation until an ML runtime is approved. (1 item)

Downgrade table rows (7 historical claims, all sourced "OneNote / historical prompts"):
1. `legal cleared` → unsupported: source registry is not broad legal review. Proved by: legal marker per source/use. Decision needed: legal.
2. `superior edge` / `parity+` → unsupported: no incumbent benchmark. Proved by: reproducible benchmark and lawful data. Decision: owner/model/legal.
3. `.5+ gain` → unsupported: no replay report with CI. Proved by: baseline/split/leakage check/replay. Decision: model.
4. `Ground Truth Plus integrated` → false: no AWS labeling job/provider. Proved by: AWS config plus owner cost approval. Decision: owner/data.
5. `green cycles` → false until checks pass: full typecheck had blocker. Proved by: all final commands pass. Decision: owner.
6. `official NGS-like parity` → unsupported: no official tracking-data license proof. Proved by: contract and source-specific proof. Decision: legal/data.
7. `full leverage complete` → unsupported: AWS is scored/gated, not live-complete. Proved by: adopted services with evidence and approvals. Decision: owner/AWS.

Repro command: `npm run fable:evidence`.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The entire ledger is a TRUST-SIGNAL machine: claims are guilty-until-proven with explicit "what would prove it" remediation per claim — this is the operational form of Garrett's 17:34 audit challenge ("every completion claim must arrive with audit receipts"). Serves calibration/sizing: no calibration claim publishes without a replay report with CI, baseline/split/leakage checks.
- `.5+ gain` downgraded for lacking a replay report with CI — TRUST-SIGNAL: any performance-gain claim (engine accuracy, calibration delta) needs a replay with confidence intervals plus leakage-checked baselines/splits before it counts. Serves calibration/sizing directly.
- `superior edge`/`parity+` downgraded for no incumbent benchmark — TRUST-SIGNAL: engine-vs-best-public-models benchmarking (GSE ENGINE BENCHMARK LANE) must name the incumbent and use lawful data, or the claim stays unsupported. Serves the benchmarking program.
- `official NGS-like parity` downgraded for no tracking-data license proof — TRUST-SIGNAL: ties to the NGS internal-only doctrine (2026-09-28, HARD) — NGS data is reasoning fuel, never shown or claimed as licensed access; "parity" language needs contract evidence. Serves the tracking lane and the public/private doctrine.
- `Ground Truth Plus integrated` false for no AWS labeling job — OTHER: cost-approval gate for labeling infra; relevant if the engine ever wants human-labeled outcomes (e.g., hand-graded plays like the FantasyPoints ad model). Serves the rankings program if hand-labeling is ever proposed.
- MC Dropout blocked until ML runtime approved — OTHER: uncertainty-quantification method is acknowledged but gated on runtime approval; relevant to calibration (dropout-based uncertainty needs an approved runtime, not just code). Serves calibration/sizing as a queued, not dead, item.
- "Partially proven: metric derivation inventory ... needs per-metric formulas and sample windows" — UNCERTAIN/TRUST-SIGNAL: an open gap inside the harness itself — the ledger admits its own formulas/windows are not yet specified, so any downstream metric claim leaning on it inherits that uncertainty.
- CONTRADICTION: the ledger says the demo/docs posture "does not prove official tracking-data access" (DEMOLIMITATIONS.md) while the 2026-09-28 NGS feed wiring continues (INGEST-AND-LEARN) — these coexist only if NGS ingestion is internal-only and never used to claim official parity; any public "NGS-powered" framing would collide with both documents.
- No connections to QB-BEHAVIOR, COACHING, OL, or SCHEME.

## Engine-actionable? (yes/no + one-line what)
yes — Run `npm run fable:evidence` and apply the ledger's per-claim "what would prove it" column (replay with CI, lawful-data benchmarks, per-source legal markers) as the acceptance criteria for any engine accuracy/calibration/edge claim.

## Referenced files/papers/datasets named
- `CLAIM_EVIDENCE_LEDGER.json` (machine-readable twin of this ledger).
- The "OneNote/prompt/addendum lane" historical source corpus (not a file in this repo; referenced as claim origin).
