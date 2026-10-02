# wave4-group3 fetch status — 2026-09-21 ~10:00 CDT (RETRY DISPATCH)

Second dispatch of this group (file_index 0191–0200, lane tracking_ngs).
A prior attempt already hit a fetch outage and wrote zero ledgers. This retry
hit the SAME service-level fetch outage; zero ledgers written again.

- Attempted: ar5iv HTML fetch via browser.open for the first paper in the group:
  - https://ar5iv.org/html/2608.23776 (file_index 0191, ID 2608.23776v1)
  → returned `tool_failure`: "browser-service could not fetch the requested page",
     recovery: continue_without_tool. Attempted a second time on a later turn;
     second attempt returned the identical terminal tool_failure.
- Runtime/developer instruction (received on both turns): the browser_open failure
  is terminal — do not call it again, and do not reproduce the fetch via exec/curl
  or invented endpoints. The PDF route (https://arxiv.org/pdf/<id>) requires the
  same blocked tool, so per the wave2-group2 / retry-blocked3 precedent it is not
  attempted separately: this is a service-level outage, not a per-URL failure.
- The remaining 9 papers (0192–0200) were not attempted individually: with the
  fetch tool terminally prohibited, additional calls could not succeed; this is
  recorded as a batch-level BLOCKED on the same outage, not per-paper flakiness.
- No full text was read for ANY of the 10 papers. No ledgers written (per template
  rules, ledgers must come from full text, never from the abstract; writing ledgers
  from titles/abstracts is prohibited).
- Ledger target dir confirmed present and empty for this range:
  /home/hatch/workspace/vendor/Sports/docs/research/2026-09-21/arxiv-deep/
  (contains only 0001–0010 from another group; no stale 0191–0200 files to clean).
- None of the 10 IDs appear in the existing-research-map.md dedup list
  (all are new 2607/2608 IDs); dedup check done, no conflicts either way.

## Per-paper blocked status

| file_index | arXiv ID | title | status |
|---|---|---|---|
| 0191 | 2608.23776v1 | Disentangled Skill Representations for Predictive Human Modeling | BLOCKED — fetch outage (2 failed attempts this session) |
| 0192 | 2608.15688v1 | Training-Free Long-Term Multi-Object Tracking for Sports Video Analytics | BLOCKED — fetch outage (batch-level, service down) |
| 0193 | 2608.09887v1 | Space-Creating versus Dead Possession: An Off-Ball Possession-Quality Index for Broadcast Football | BLOCKED — fetch outage (batch-level, service down) |
| 0194 | 2608.07932v2 | SportsGrounder: Proposal-Aided Interleaved Grounding for Dense Sports Video Reasoning | BLOCKED — fetch outage (batch-level, service down) |
| 0195 | 2608.02285v1 | Sen-Cap: Sensor-Flexible and Noise-Resilient Human Motion Capture via LiDAR-Camera Integration | BLOCKED — fetch outage (batch-level, service down) |
| 0196 | 2607.18009v1 | Bayesian Conway-Maxwell-Poisson model with spike-and slab priors for dispersed count data with application to football scores | BLOCKED — fetch outage (batch-level, service down) |
| 0197 | 2607.11548v1 | Training-Free Off-Screen Player Imputation for Broadcast-Based Spatial Football Analytics | BLOCKED — fetch outage (batch-level, service down) |
| 0198 | 2607.10998v1 | Temporal Feature Distillation for Label-Efficient Precise Event Spotting in Sports Videos | BLOCKED — fetch outage (batch-level, service down) |
| 0199 | 2607.08725v1 | Pose-to-Biomechanics: Bridging 3D Human Pose Estimation and Biomechanical Attribute Prediction | BLOCKED — fetch outage (batch-level, service down) |
| 0200 | 2607.00190v1 | Play Like Champions: Counterfactual Feedback Generation in Latent Space | BLOCKED — fetch outage (batch-level, service down) |

## Recommendation for the orchestrator

- Option A (template rule): pull 10 replacements from reserve-100.jsonl rather than
  re-dispatching this group a third time — the outage window has now blocked two
  full dispatches (first attempt + this retry).
- Option B (targeted retry): if the fetch service recovers, re-dispatch this group
  once. Title-level topical notes for prioritization (NOT findings — full text was
  never read): 0196 (Bayesian CMP + spike-and-slab for football scores) is the most
  directly GSE-relevant — count-data score modeling, and CMP is absent from the
  repo's metric inventory (Poisson/Skellam/Dixon-Coles only); 0197 (training-free
  off-screen player imputation for broadcast football analytics) and 0193 (off-ball
  possession-quality index) speak to the NGS-replacement / broadcast-tracking lane
  Garrett has prioritized; 0192/0198 are tracking/event-spotting methods adjacent
  to the 27-family NGS taxonomy; 0195/0199 are mocap/biomechanics hardware-side
  papers (likely lower GSE priority); 0191/0194/0200 are representation-learning /
  video-reasoning papers with no stated sports-prediction content.
- No verdicts (ADOPT/ADAPT/REJECT) are recorded: verdicts require full-text reads.
- Equation uncertainties: N/A — no equations were read.
- Nothing committed, staged, or pushed.
