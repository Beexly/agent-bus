# ops/evals/model-court-happy-with-citations.md

## What it is (1-2 sentences)
An evaluation spec (`surface: model-court`, `template: answer`, `scenario: happy-path-with-citations`, created 2026-05-22 by claude, status `pending-runner`) defining the canonical happy-path for the Model Court: a Pro-tier user in the Game Room for a published-pick game asks "Why did the model publish BOS -3.5?", and the Court must answer descriptively with inline evidence citations, no outcome prediction, and no recommendation language.

## Key metrics/methods (formulas where given, else "not specified")
No closed-form formulas; the doc states a publish-threshold rule and scored factor values:
- **Edge Index publish threshold rule (stated as): "Edge Index 2.7, above the 2.5 minimum"** — i.e., the engine publishes a pick when Edge Index ≥ 2.5. This is the platform's publish gate stated in verbatim form.
- Factor scores for the worked example (BOS @ NYK, NBA, 2026-05-22T23:30:00Z): rest advantage **0.81**, schedule stress **0.74**, consensus **0.72**.
- Confidence stamp: **73%**, graded **SOLID_PLAY** (verbatim: "Confidence stamped at 73%, which the engine grades as SOLID_PLAY").
- Consensus mechanics: **12 of 14** reporting books align on -3.5 (consensus scored 0.72).
- Schedule-stress mechanics: NYK's schedule density over the last 7 days higher than BOS's by **1.4 games**.
- Rest mechanics: Boston has **2 days rest**; New York is on the second of a back-to-back.
- Evidence health: **A**; Edge Index **2.7**; pre-mortem panel: **4** bullets.
- Latency gate: response under **3 seconds at p50**.
- Citation format: `(source: <EvidenceRef.kind> at <EvidenceRef.observedAt>)`; regex-checked as `/\(source: [A-Z_]+ at [0-9T:.Z-]+\)/`.
- EvidenceRef kinds: `PICK_SIGNAL_SNAPSHOT`, `GAME_SIGNAL`, `SOURCE_SNAPSHOT` (multiple entries).
- Mode: `ASK_THIS_GAME`; lens: BETTOR.

## Data sources named
- `EvidenceRefs`: PICK_SIGNAL_SNAPSHOT at 2026-05-22T20:00:00Z, GAME_SIGNAL at 2026-05-22T18:00:00Z, SOURCE_SNAPSHOT at 2026-05-22T20:00:00Z.
- `ModelCourtCase.modelVersion` must match the active model version at call time; compliance scanner must return `status: 'green'`.

## Findings (numbers and facts, not vibes)
- The Court must recognize the question as descriptive (explaining what the model did), not certainty-asking: no refusal trigger fires; `ModelCourtCase.refusal === null`.
- The answer must contain exactly the top-contributing factor names (or close paraphrases), inline citations matching the regex format, ≥3 EvidenceRef entries matching the citations, no outcome predictions (no "will cover", "expected to", "likely"), no recommendation language (no "take", "bet", "play", "lock", "hammer"), no invention of factor scores, no comparisons to other operators, no first-person-plural confidence ("use 'the model' or 'the engine'"), and must close with reference to the pre-mortem panel.
- Pass criteria (10 total): items 1–8 as above, plus latency <3s at p50 and compliance scanner green. The doc calls this "the canonical happy-path eval. If this passes consistently, the Court is doing its core job."
- The example answer shape is fully worked: BOS -3.5 published because rest advantage 0.81 + schedule stress 0.74 + consensus 0.72 combined cleared the Edge Index publish threshold.
- Eval status is `pending-runner` — the spec exists but records no observed run result; no pass/fail outcome reported.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL — trust-target intake, calibration/sizing, and tracking lane.** This eval is the canonical transparency contract: every published pick must be explainable from actual stored factor scores with machine-checkable citations, a pre-mortem panel, and zero prediction or recommendation language in the explanation surface. The 73%-confidence / SOLID_PLAY grade mapping and the Edge Index ≥ 2.5 publish gate are hard platform parameters the **calibration/sizing** program should hold as reference constants (do engine grades map confidence→label identically elsewhere? this is the one place the mapping is written down). Serves **trust-target intake** (citation discipline, no-score-invention rule), **calibration/sizing** (73%→SOLID_PLAY; Edge Index 2.5 threshold; factor scores 0.81/0.74/0.72 as real scored outputs of the rest/schedule/consensus signals), and the **tracking lane** (EvidenceRef kinds PICK_SIGNAL_SNAPSHOT / GAME_SIGNAL / SOURCE_SNAPSHOT as the canonical evidence lineage taxonomy).
- The rest-advantage and schedule-stress factor mechanics (2-days-rest vs second-of-back-to-back; 1.4-games density gap over 7 days; 12/14 book consensus) are concrete scored signal examples for the **QB-behavioral / game-signal** research corpus insofar as the engine's factor definitions are reused elsewhere — tagged as secondary QB-BEHAVIOR-adjacent context, not a new behavioral finding.
- No COACHING, OL, or SCHEME content in this file.

## Engine-actionable? (yes/no + one-line what)
Yes — reference constants to hold: Edge Index publish threshold 2.5; 73% confidence ↔ SOLID_PLAY grade mapping; citation `(source: KIND at TIMESTAMP)` format; EvidenceRef kind taxonomy (PICK_SIGNAL_SNAPSHOT, GAME_SIGNAL, SOURCE_SNAPSHOT).

Referenced files/papers/datasets: `ModelCourtCase` (refusal/answer/evidenceRefs/modelVersion fields); evidence kinds PICK_SIGNAL_SNAPSHOT, GAME_SIGNAL, SOURCE_SNAPSHOT; pre-mortem panel; compliance scanner; PICK_GRADE_LABELS (referenced by the sibling twitter eval for the same SOLID_PLAY label).
