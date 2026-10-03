# arxiv-program/research/2026-09-21/arxiv-deep/0310-fence-fairplay-ensuring-network-chain-entity.md
## What it is (1-2 sentences)
Industry systems paper from Dream11 describing FENCE, a deployed production pipeline for detecting users who create multiple fantasy-sports accounts to circumvent per-user contest-entry limits, in both batch (historical graph) and real-time (registration) modes at 190M+ user scale. Verdict recorded in the file: REJECT for GSE — no transfer to prediction, calibration, or DFS-optimization lanes.

## Key metrics/methods (formulas where given, else "not specified")
No equations stated in the paper. Method: build a user graph where nodes are accounts and edges encode shared attributes (device, IP, payment ID) — using heuristic edges plus edges predicted by a Random Forest trained on labeled multi-ID pairs; find connected components via an Alternating connected-components algorithm; score each cluster; clusters with score > 0.95 trigger automatic action, lower scores go to manual review (1%–10% of clusters sampled). Real-time path: on each new registration, a 1-hop neighborhood lookup against a Redis cache of the batch graph flags linked accounts within a 4-second SLA. Batch stack: AWS (Spark) → AWS Neptune; experiment tracking via MLflow; batch benchmark hardware: 6 × r5d.4xlarge instances.

## Data sources named
Proprietary and unreplicable: Dream11's internal user-registration and transaction logs (device attributes, IP, payment instruments, referral links, login/session metadata). Exact schema withheld — complete attribute list proprietary. Scale: 190+ million registered users. Time range not stated. No public URL, no sample, no code.

## Findings (numbers and facts, not vibes)
- Automated flow online precision 96.7%, training recall 55.2%
- Manual-review flow precision 70.2%, recall 86.4%
- Business result: relative 86% decrease in system FPV (false-positive volume) after FENCE deployment
- Real-time registration screening SLA: 4 seconds
- Automatic-action threshold: cluster score > 0.95 (trades recall for near-certain precision)
- Review sampling: generally 1%–10% of clusters
- Limitations recorded: no public data/code (unverifiable); RF edge labels come from the prior manual process (label noise propagates); adversarial adaptation unmodeled (abusers rotating devices/IPs break the shared-attribute assumption — no adversarial evaluation); no time-ordering of RF training data stated

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — anti-fraud/account-integrity; GSE has no contest-operator or multi-account abuse surface, so the lane does not exist at GSE. The graph + connected-components entity-resolution pattern is cataloged as a possible future recipe (duplicate analyst accounts, fraud in a future contest product).

## Engine-actionable? (yes/no + one-line what)
No — rejected for the current program; the graph + Alternating connected-components pattern is banked only for a future duplicate/fraud problem GSE does not yet have (gate: concrete duplicate/fraud problem AND ≥10-point cluster-F1 beat over a rule baseline).
