# docs/arxiv-program/research/2026-09-21/arxiv-deep/0325-extended-opentt-games-dataset-a-table.md
## What it is (1-2 sentences)
Pure dataset-release paper extending the public OpenTTGames table-tennis video set with frame-accurate stroke-type, posture-at-impact, and rally-outcome annotations (plus a compact-shorthand + two-step frame-tagging annotation workflow); no model is trained and no results are reported. The ledger verdict is REJECT: a table-tennis stroke-annotation dataset with no transferable analytics to GSE's NFL/NCAA operation, licensed CC BY-NC-SA 4.0 (non-commercial).
## Key metrics/methods (formulas where given, else "not specified")
Not specified — no equations, no model, no statistical claims. Method is the annotation pipeline: compact shorthand notation (e.g., `lfsv` → `left_forehand_serve`; two-letter outcome codes) expanding into predefined label parts; two-step procedure (tag stroke frames as `empty_event` / rally endings as `point`, then revisit and replace with detailed labels); a stroke = exactly the ball-racket impact frame.
## Data sources named
Extended OpenTTGames: 12 videos (5 training, 7 test), fixed side-of-table camera, 1920×1080 @ 120 fps, no audio; three left-handed players (all in test videos). Scripts at github.com/moamal01/table_tennis_data.
## Findings (numbers and facts, not vibes)
- 1,457 strokes total (1,134 train / 323 test); 1,432 posture-lean annotations; 1,319 leg annotations; 282 rally endings (223 train / 58 test) (OTHER).
- Label sparsity is severe: loops 583 and pushes 279 dominate; smashes 12, lobs 10 across the whole dataset (OTHER).
- Stroke hierarchy: table side (left/right) × forehand/backhand × technique (block, chop, flick, lob, loop, push, serve, smash) → concatenated labels (OTHER).
- Rally-ending classes (six × player prefix): `out`, `net`, `winner`, `not_hitting_ball`, `double_bounce`, `miss_on_own_side` (OTHER).
- No inter-annotator agreement reported; authors warn the inherited train/test split is "not strictly meaningful" (OTHER).
- TRUST-SIGNAL: label reliability is asserted ("many hours of careful review"), not measured — no Cohen's κ or agreement statistics.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: No GSE domain overlap — table-tennis strokes have zero analog in GSE's NFL/NCAA sports; no modeling contribution to adapt.
- TRUST-SIGNAL: No measured label reliability (single-pass manual labeling, no inter-annotator agreement) — the ledger notes the impact-frame judgment call introduces label noise.
- OTHER (salvageable pattern): the compact-shorthand + temporary-tag two-step frame-tagging workflow could inform a future NFL game-film labeling tool (e.g., shorthand codes for route/coverage/play-type tagging in the broadcast-clip pipeline) — a tooling footnote, not a research transfer.
## Engine-actionable? (yes/no + one-line what)
No — no model, no results, wrong sport, and the CC BY-NC-SA 4.0 license blocks commercial reuse.
