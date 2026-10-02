# docs/arxiv-program/research/2026-09-21/arxiv-deep/0185-fence-multiple-id-detection-fantasy-sports.brief.md
## What it is (1-2 sentences)
FENCE, Dream11's production fraud system for real-time multiple-ID (duplicate account) detection at 190M-user scale: heuristic equality edges plus Random-Forest link prediction feed a user graph whose cached connected components are scored and actioned (auto-block > 0.95, human review otherwise). The ledger verdict is REJECT — competent platform-integrity infrastructure with no path into GSE's prediction engine, documented only in case GSE ever needs contest-integrity tooling.
## Key metrics/methods (formulas where given, else "not specified")
- Edge features: Fe = f1…fq, fi = C(a1i, a2i) where C is a per-attribute comparison operator (exact/partial/similarity) over user-attribute vectors Fu = a1…ap; edge prediction P(edge) = f(Fe) via distributed Random Forest (PySpark MLlib), thresholded.
- Graph: G = (E, V) on AWS Neptune (Gremlin). Connected components: C ⊆ {u1…un} with x-degree connections between members.
- Three CC approaches compared: (i) Gremlin queries on Neptune (rejected — latency escalates with graph size); (ii) distributed Alternating algorithm (Small Star/Large Star to convergence, O(n), Spark MapReduce — rejected for real time); (iii) caching-enhanced hybrid (adopted): offline CC on existing edges, user→cluster mapping in Redis (O(1) lookup); at registration, fetch 1-degree connections, inherit largest cluster on conflict, separate reconciliation job merges clusters.
- Cluster score in [0,1] from cluster size, node types, n-degree connections, family-device handling; actioning: score > 0.95 → automated real-time blocking; ≤ 0.95 → manual human-in-the-loop review. MLFlow for training/inference/registry/monitoring; 1–10% of highlights sampled for manual review to track drift.
## Data sources named
- Dream11 production data, proprietary and not publicly accessible: ~10^8 registered users; daily batch edge list "on the scale of billions."
- Registration attributes: IP address (latest), date of birth (encrypted), device attributes (cleaned) — full attribute list deliberately withheld.
- Ground truth: manually validated edges from historical risk-operations runs (positives); cross-joins of validated unique users (negatives). No code or data released.
## Findings (numbers and facts, not vibes)
- Business impact: post-deployment relative decrease of 86% in system FPV (fraudulent promo-value), sustained since.
- Real-time latency: users processed within 4 seconds of registration, roughly constant regardless of connected-component size.
- Automated flow: online precision 96.7%, training recall 55.2%. Manual flow: online precision 70.2%, training recall 86.4% — deliberate precision/recall split so genuine users are never auto-blocked.
- Manual-review sampling for drift monitoring: 1% to 10% of highlights. Cluster auto-block threshold: score > 0.95.
- Paper's stated goal: move 80% of highlights to automated flows; ~50% still flow through manual review.
- Limitations in the file: training recall measured against the already-detectable subset (unknowable true fraud population); online precision from appeals-driven feedback, not blinded adjudication; no direct false-positive rate on genuine users reported; cache-based real-time flow misses users due to outdated cache (batch flow catches them); uniform cluster score assigns identical scores to all members (authors' stated future work: label propagation for per-user scores); family members sharing a device are a known false-positive source.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the precision-first auto-block design (96.7% precision / 55.2% recall with a >0.95 threshold routing to humans) as a trust-pattern template — high-consequence actions only above extreme thresholds, humans on the boundary — plus drift monitoring via sampled manual review.
- OTHER: platform-integrity/fraud infrastructure; pairwise attribute-similarity → link prediction → union-find components is a reusable design if GSE ever faces duplicate-account abuse. No QB/coaching/OL/scheme intelligence.
## Engine-actionable? (yes/no + one-line what)
No — REJECT; build only if GSE ever operates a cash-bonus/promo program with observed duplicate-account abuse, which it does not today.
