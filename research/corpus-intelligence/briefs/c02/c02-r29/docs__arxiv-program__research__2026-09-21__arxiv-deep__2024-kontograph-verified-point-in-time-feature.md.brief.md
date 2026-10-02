# docs/arxiv-program/research/2026-09-21/arxiv-deep/2024-kontograph-verified-point-in-time-feature.md

## What it is (1-2 sentences)
An anti-money-laundering real-time decision system (arXiv:2608.22389v1, Abolfadl 2026, German University in Cairo) whose transferable core is treating point-in-time feature correctness as a machine-falsifiable invariant: one DSL spec compiles to three backends, with Hypothesis property tests (batch/online agreement + perturb-the-future) that falsify leakage. File verdict: ADAPT (feature-platform mechanism only; AML domain, explainer, and cost-model specifics do not transfer).

## Key metrics/methods (formulas where given, else "not specified")
- Invariant: f(e, E) = f(e, {e′ ∈ E : e′.ts < t}) — computed value invariant to every event at/after t.
- Window semantics stated once: t − W ≤ h.acceptance_ts < t (left-closed, right-open on event time; strictly prior to the scored event).
- Two Hypothesis test families: (1) batch-vs-online elementwise equality; (2) perturb-the-future: replace all events at/after t, assert nothing computed before t changes.
- Chronological splits with purge (1-day band; a 30-day band removed 79% of usable data and was rejected by a guard on bands exceeding 25% of a fold) + embargo; labels admitted only if decided_ts precedes the fold's availability cutoff.
- Latency percentiles via nearest-rank (interpolation called out as optimistic in the tail); day-blocked bootstrap for dependent events.

## Data sources named
- Agent-based simulation of a German retail payment ecosystem: 1,562,860 payments, 6,576 accounts, 270 simulated days; 2,995 criminal payments (0.19% criminal rate); 3,495 confirmed labels, 14.5% criminal label coverage; 5 injected typologies (mule networks, structuring, APP fraud, circular flows, layering) in standard + evasive variants. Synthetic by construction; dataset content-hashed and regenerated, not distributed. Hardware: i7-8550U (4 cores, 16 GB), NVIDIA T4 for TGN training.

## Findings (numbers and facts, not vibes)
- Ablation PR-AUC [95% CI] under 0.19% positive rate: constant 0.0001 [0.0001, 0.0002]; LightGBM 0.0053 [0.0030, 0.0079]; +static graph 0.0144 [0.0064, 0.0319]; +TGN no memory 0.0734 [0.0348, 0.1353]; +memory 0.1717 [0.1011, 0.2445]. Paired day-blocked bootstrap difference (memory TGN vs LightGBM): +0.166, 95% CI [0.105, 0.241]; per-node memory alone more than doubled PR-AUC (0.0734 → 0.1717). Independent re-run: 0.0955 → 0.1555. [OTHER]
- Cost/10k: rung 2 EUR 53,529 vs rung 1 EUR 20,459 (2.6×) despite rung 2's 3× better PR-AUC — ranking metric vs deployed-threshold cost diverge; recall at capacity: rung 2 0.795 vs rung 1 0.909. [TRUST-SIGNAL: headline ranking metrics and deployed-threshold cost can point in opposite directions]
- Latency p50/p99 ms: feature fetch 1.84/4.67; graph assembly 0.00/0.01; inference 0.42/1.78; explanation 0.00/1.87; counterfactual 0.00/3.59; total 2.71/7.97 — 200 ms budget met (repeated runs varied 3.6–8.0 ms p99). The graph model is NOT deployed; latency measured on the gradient-boosted path only. [OTHER]
- Three point-in-time defects found by the property tests that survived code review: LEFT JOIN + COUNT(*) fabricating history=1 for first events; debtor/creditor entity-key collision in the online executor; accumulator admitting same-millisecond events into strictly-prior windows — all would have inflated performance. [TRUST-SIGNAL]
- ONNX export of the GBM: mean |score| diff 7.4×10⁻⁸, max 1.7×10⁻⁴, yet 774 decisions changed (0.26%) and alert volume inflated +12.0% (6,458 → 7,232) because 32-bit accumulation moved scores across the cost-optimal threshold 3.98×10⁻⁴. [TRUST-SIGNAL: serving-format conversion is a model change until measured in decisions at the deployed threshold, not in mean score error]
- Explainer fidelity vacuous: top-5 Jaccard 0.904, Spearman −0.038 at median 1.0 candidate edge — the metrics measured candidate-set cardinality; reported as a null result. [TRUST-SIGNAL]
- TGN training: 1,094 s for 5 epochs over 937,731 events (batch 200) with memory; 155 s without. [OTHER]
- Proposed GSE acceptance gates: harness catches all 3 injected defect classes (3/3 recall); batch-vs-online agreement 100% on 2024 replay; serving-format conversions ≥99.9% decision agreement at the deployed threshold; feature-fetch p99 ≤ 50 ms. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Point-in-time invariant as tested property: one feature spec → multiple compiled backends (batch SQL + online serving), backend agreement = CI test; perturb-the-future Hypothesis tests; the three known defect classes ported as regression cases (first-event history fabrication; home/away entity-key collision; same-timestamp window admission) — TRUST-SIGNAL (the strongest anti-leakage mechanism in the corpus), SCHEME (feature-platform architecture)
- Serving-format parity rule: any artifact conversion (pickle→ONNX, fp64→fp32) must be compared in decisions at the deployed threshold; require ≥99.9% decision agreement on a full-season replay before promotion — TRUST-SIGNAL
- Ranking-vs-cost divergence: pick operating metrics at deployed capacity, not headline ranking metrics — TRUST-SIGNAL
- Hash-chained decision log (model version, feature-set fingerprint, code revision, per-stage latency, explanation) for auditability — TRUST-SIGNAL, OTHER
- Beyond-paper extension: bitemporal "correction tests" — when a past event is corrected (GSE's NGS re-run problem), assert exactly the downstream features whose windows contain the corrected event change (minimal blast radius) — TRUST-SIGNAL
- No direct QB-BEHAVIOR, COACHING, or OL findings in the file.

## Engine-actionable? (yes/no + one-line what)
Yes — build the GSE point-in-time test harness now: feature DSL with window semantics strictly prior to observation, batch-vs-online agreement CI, perturb-the-future property tests ported with the three known defect classes as regression cases, and the decision-level serving-format parity gate (~3 engineer-weeks).
