# ops/archive/dated/sports-science-partnerships.md
## What it is (1-2 sentences)
An internal strategy sketch (2026-07-24, "not a status report", no relationships claimed) proposing to sell the engine's calibration + selective-gate + ledger stack as a white-label "honesty layer" into sports-science vendor products (Catapult, VALD, Kitman Labs, Stats Perform, Zone7, Sparta Science), with a 4-step gated pilot sequence and explicit non-claims.

## Key metrics/methods (formulas where given, else "not specified")
- **Venn-Abers prediction** (`calibration/ivap.ts`, `calibration/cvap.ts`): for score `s` returns multiprobability pair `(p0, p1)` — isotonic calibration of `s` under each possible label — interval is finite-sample valid under exchangeability of calibration/test points, no asymptotics, no distributional assumptions.
- **Selective gate** (`edge-lab/selective-gate.ts`): abstention as first-class output; gate fires only when the **lower** endpoint of the calibrated interval clears the threshold; threshold tuned on a fold disjoint from evaluation, disjointness enforced in code (`GateSetOverlapError`).
- **Mondrian conformal** (`conformal/mondrian.ts` + `conformal/sports-taxonomy.ts`): per-subgroup coverage so validity is checkable per segment; `conformal/levene-welch.ts` for variance diagnostics.
- **Glass Ledger** (`edge-lab/ledger-chain.ts`, `ledger-anchor.ts`, `recompute-verifier.ts`): hash-chained decision ledger with offline verifier; every decision re-derivable from ledger export alone; decision timestamp precedes outcome by construction, checked independently of append path.
- Calibration stack modules: `calibration/{pav, ivap, cvap, aggregation, local-isotonic-patch, multicalib-audit-patch}.ts`.
- Risk-coverage curve as pilot deliverable: accuracy at each abstention rate vs always-answer baseline; gating question Step 1: does abstaining on the widest-interval decile measurably improve accuracy of remaining calls?
- Exchangeability caveat stated as real: sports data violates it routinely (season effects, rule changes, roster turnover, sensor generations) — guarantee degrades under drift, detected via subgroup coverage diagnostics.
- No football player/team metrics; methods are UQ/selective-prediction, not QB/coaching/OL.

## Data sources named
- None sports-data-wise in this doc beyond vendor product categories; the in-repo modules above are the named implementation targets. Market examples: Catapult (GPS/GNSS wearables), VALD (force plates, asymmetry), Kitman Labs (AMS integration), Stats Perform (event/tracking, live win probabilities), Zone7 (AI injury-risk forecasts), Sparta Science (force-plate movement signatures).

## Findings (numbers and facts, not vibes)
- This document claims no numbers, no revenue, no customer counts, no model AUCs — every corporate-structural item is marked **[verify]**, and §5 NON-CLAIMS explicitly states: no partnership/pilot/conversation exists or is implied; no partner data analysed; no medical/clinical claim; no regulatory analysis done; the §3 delivery modes (embedded TS library / hosted API / MCP server) are architecturally feasible, not built.
- Four recurring epistemics holes identified across the six vendors: (1) point estimate without interval, (2) aggregate-only calibration without subgroup diagnostics, (3) no abstention output, (4) validation not recomputable by buyer — INFERENCE: this is a qualitative teardown, not a dataset.
- Buyer-facing thesis sentence: "the system's willingness to say nothing is what makes it worth listening to when it says something."
- Stats Perform flagged as a channel conflict: partner on sports-science side, counterparty on betting side.
- Step 4 scaling gate: calibration must hold on a second partner's data without re-tuning — or subgroup diagnostics must detect degradation before the partner does.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (OTHER) Directly applicable to the engine's own calibration pipeline: Venn-Abers `(p0,p1)` intervals, selective gate (lower-endpoint-must-clear), Mondrian per-subgroup coverage, hash-chained decision ledger with recomputable verifier. This is the formal version of the honest-calibration/abstention doctrine.
- (TRUST-SIGNAL) No player/coach quotes; the "willingness to say nothing" framing is a vendor-strategy quote, not a locker-room trust signal.

## Engine-actionable? (yes/no + one-line what)
Yes — confirms the engine's selective-gate architecture spec (lower-endpoint thresholding + disjoint-fold tuning + per-subgroup Mondrian coverage + hash-chained recomputable ledger); strategy content only otherwise, no sports data.
