# arxiv-program/research/2026-09-21/arxiv-deep/0310-fence-fairplay-ensuring-network-chain-entity.md

## What it is (1-2 sentences)
A deep-read ledger note on FENCE (arXiv:2310.05651v1), a Dream11 production system for detecting multi-account fraud ("multi-IDs") among 190M+ fantasy-sports users via a shared-attribute user graph, Random-Forest edge prediction, and connected-components clustering — with real-time (4 s SLA) and batch paths. Verdict recorded by the ledger reader: **REJECT** — an operator anti-abuse system with no transfer to GSE's prediction, calibration, or DFS-optimization lanes.

## Key metrics/methods (formulas where given, else "not specified")
- User graph: nodes = user accounts; edges = shared attributes (device, IP, payment instrument, referral links) — heuristic edges + edges predicted by a Random Forest trained on labeled multi-ID pairs.
- Clustering: Alternating connected-components algorithm → multi-ID clusters, each scored; cluster score > **0.95** triggers automatic account restriction; lower scores go to manual review via sampled review (1%–10% of clusters sampled).
- Real-time path: 1-hop neighborhood lookup against a Redis cache of the batch graph, 4-second SLA at registration.
- Batch: AWS Spark → AWS Neptune; benchmark hardware 6 × r5d.4xlarge; MLflow experiment tracking.
- Formulas: not specified (no formal equations in the paper). Metrics: precision/recall vs. manual reviewer labels; business metric "system FPV" (false-positive volume).

## Data sources named
- Dream11 proprietary internal user-registration and transaction logs (device attributes, IP, payment instruments, referral links, login/session metadata) — explicitly not shared, no public URL/sample.
- Scale: 190+ million registered users; time range not stated; exact schema withheld (feature families only).

## Findings (numbers and facts, not vibes)
- Automated flow online precision **96.7%**, training recall **55.2%**.
- Manual-review flow precision **70.2%**, recall **86.4%**.
- Business result: relative **86% decrease** in system FPV (false-positive volume) after FENCE deployment.
- Real-time registration screening SLA: **4 seconds**. Batch benchmark: 6 × r5d.4xlarge instances.
- The reader notes these are production-telemetry claims: plausible but unverifiable (no public data, code, or independent replication); the edge-predicting Random Forest's training labels came from the prior manual process, so label noise/reviewer bias propagates into the "automated" system.
- Adversarial adaptation unmodeled: abusers rotating devices/IPs/payment instruments break the shared-attribute assumption; no adversarial evaluation reported. The >0.95 auto-action threshold and 1%–10% review sampling are business-policy choices, not validated statistical procedures.
- No equations, no public code, no public dataset. Reproducibility: none.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER**: The only transferable component the ledger reader catalogs is the graph + connected-components entity-resolution pattern (bipartite user–attribute graph → supervised edge scoring on confirmed duplicates → connected components → cluster-score thresholding with human review of the margin) — relevant only if GSE ever needs sybil/duplicate detection (e.g., de-duplicating scraped analyst accounts, fraud in a future contest product). No current GSE use case; GSE is not a contest operator, runs no entry limits, and has no multi-account abuse surface.
- No connection to QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, or SCHEME — this is operator integrity infrastructure, not on-field analytics. It serves no current GSE program (prediction, calibration, DFS optimization, tracking/NGS, market microstructure).

## Engine-actionable? (yes/no + one-line what)
No — rejected by the ledger reader; no prediction/calibration/DFS transfer. Cataloged only as a future entity-resolution recipe (2–3 week batch prototype, gated on GSE acquiring a concrete duplicate/fraud problem AND a pilot beating a rule-based baseline by ≥10 points of cluster F1 on a forward window). UNCERTAIN: all reported metrics rest on unauditable Dream11 production telemetry.
