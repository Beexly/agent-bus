# docs/arxiv-program/research/2026-09-21/arxiv-deep/1692-vair-injury-risk-visualization.md

## What it is (1-2 sentences)
A deep-read note on VAIR (arXiv:2512.17446, Lee et al. 2025), a visual-analytics system for exploring joint-level injury risk in sports video: 3D pose reconstruction (Co-Motion/SMPL) → OpenSim biomechanical simulation → threshold-based risk flags in a multi-view UI, evaluated only by three experts' quotes. Ledger verdict: **REJECT** — no quantitative evaluation, no transferable method, no released artifacts.

## Key metrics/methods (formulas where given, else "not specified")
- Not specified — no new model or metric. Risk flags are threshold comparisons against published literature ranges, not predicted.
- Literature thresholds cited: Achilles risk at ankle dorsiflexion ≈ 40° with knee flexion ≈ 22.5°; ACL anterior loading during knee flexion 30–90° with internal rotation/valgus.
- Case-study reconstructed angles: ACL case knee flexion ~74°, abduction ~95°, internal rotation ~67° (valgus collapse); Achilles case plantar flexion ~−32° with knee rotation.
- Pipeline components are off-the-shelf invocations (Co-Motion, OpenSim), not contributions.

## Data sources named
Basketball motion clips (injury scenarios); no dataset named, sized, or released. Schema: monocular video → SMPL parameters → joint angles/torques/forces time series → risk-annotated frames.

## Findings (numbers and facts, not vibes)
- [OTHER] The paper itself (Sec. 7.5, "Lack of Objective Performance Evaluation") concedes zero quantitative metrics: no pose-estimation accuracy, no risk-detection precision/recall, no baseline comparisons.
- [OTHER] Evaluation = three experts' quotes (P1–P3); no controlled experiment, no user-study statistics.
- [OTHER] Failure modes acknowledged: most errors in limbs, overlapping players, partial framing — exactly the conditions of broadcast NFL footage (INFERENCE: this directly predicts failure on GSE's actual footage type).
- [OTHER] Single-person, pre-segmented clips; contact vs non-contact distinction (called "critical" by experts) not handled.
- [OTHER] No code, no data, no system release stated — not replicable from the paper.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
All findings tagged OTHER — no QB-behavior, coaching, OL, trust-signal, or scheme content. The only GSE-adjacent note is the *idea* of automated biomechanical annotation of injury clips (would come from Co-Motion/OpenSim docs, not this paper).

## Engine-actionable? (yes/no + one-line what)
No — rejected paper; no method, metric, or artifact to implement. If biomechanical injury annotation is ever wanted, the honest path is benchmarking Co-Motion error on broadcast NFL clips first (MPJPE per joint), per the note's improvement experiment.
