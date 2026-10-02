# gse/FINAL_COMPLETE_AGENT_PACKAGE.md
## What it is (1-2 sentences)
A binding operational agent package for the GSE/Beexly Sports system: merge order, universe dispositions, gate rules, and the canonical Phase C baseline string that defines the current evaluation and launch state.

## Key metrics/methods (formulas where given, else "not specified")
- Phase C baseline string: **888|359|283|0 eval|(5b)=0|floor MLB|SPREAD|v5.1.0@180** — format/method not specified in file.
- Cron cadence: `*/30` on main (PR #215).
- Candidate staleness gate: candidate age >6h or missing → STALE_ODDS; global MAX is NOT gate-clear — use `classifyCandidateOddsAge` for Phase C.
- Law items: honesty over volume; FIRE + NO_BET certificates; no LIVE_BOARD=1 in git; no 6h widen; no pav/ivap rewrite without proven bug; no invented ROI/quotes; selective-gate authority; Kelly INTERNAL only.

## Data sources named
- Not specified (no data sources named; providers referenced abstractly as "offline/stats providers" and "Odds" API requiring payment).

## Findings (numbers and facts, not vibes)
- PR stack merged: #215, #216, #217. LIVE_BOARD off.
- Merge order: #220 DecisionCertificate → #218 402 circuit → #219 Toxiproxy chaos (staging) → #224 candidate/global_max fetchedAt + neon (preferred over #221/#222) → reconcile #221, REJECT #222 destructive index rewrite → #223 docs.
- Dispositions: PRODUCTION = gate, 6h, cron, offline/stats providers, HC ping. RESEARCH ONLY = adaptive CP, CVAP depth, Chow/NP formal, PT/mental-accounting as UX only. OUT OF LAUNCH = Kafka/CDC, Patroni launch path, BLIS/CUTLASS, public Kelly %. FOUNDER (owed) = Stripe, DNS, prices, Odds payment, LIVE_BOARD after (5b)≥1.
- Remaining blockers: Odds payment, writes, remeasure.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: "Honesty not volume. FIRE + NO_BET certificates" — the honesty-over-volume doctrine is a trust signal relevant to GSE's public-facing credibility framing.
- OTHER: The merge-order discipline (rejecting #222's destructive index rewrite) is an engineering-governance fact, not engine modeling.
- OTHER: No-claim-adjacent laws (no invented ROI/quotes, Kelly internal only) mirror the no-claim-rules.md doctrine — operationalization of the honest-positioning policy.

## Engine-actionable? (yes/no + one-line what)
No — this is an ops/launch-state document, not a modeling artifact; its only engine relevance is the fetchedAt STALE_ODDS gate logic (>6h or missing) already defined elsewhere.
