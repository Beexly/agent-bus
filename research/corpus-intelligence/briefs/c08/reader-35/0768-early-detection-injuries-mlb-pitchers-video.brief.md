# docs/arxiv-program/research/2026-09-21/arxiv-deep/0768-early-detection-injuries-mlb-pitchers-video.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:1904.08916v1 (Piergiovanni & Ryoo, 2019): I3D on optical flow from cropped MLB broadcast video, binary per-pitch injury classification with unseen-pitcher/injury/handedness generalization studies and explicit dataset-bias audits. Verdict: ADAPT — directly portable to GSE mechanics-based injury-risk flags from broadcast video (QB throwing motion, WR cutting, OL stances).
## Key metrics/methods (formulas where given, else "not specified")
- Binary cross-entropy ℒ = Σᵢ(yᵢ log pᵢ + (1−yᵢ) log(1−pᵢ)); F₁ = 1/(0.5(1/recall + 1/precision)).
- Inputs: 600 optical-flow frames at 460×600, 10 s at 60 fps, cropped to pitcher box, greyscale — appearance-invariant (flow shown immune to jersey/team/scoreboard/lighting bias that broke RGB models).
- Model: I3D, optical-flow stream initialized from Kinetics pre-training, fine-tuned 100 epochs, lr 0.1 decayed ×10 every 25 epochs, dropout 0.5.
- Bias audits: game-identity classifier (cropped flow ≈ chance 0.45–0.55 vs 0.86–0.98 on RGB) and temporal-order classifier (~chance 0.49–0.54) as negative controls.
## Data sources named
30 games of 2017 MLB TV broadcast video; 20 pitchers injured in 2017 (4 with multiple injuries); 5,479 pitches (~273/pitcher), 12 lefty + 8 righty; label = last k=20 pitches before DL placement (469 injured / 5,010 healthy); 10 injury types (back/arm/finger blister/shoulder/UCL/intercostal/sternoclavicular/rotator cuff/hamstring/groin).
## Findings (numbers and facts, not vibes)
- Per-pitcher (k=20): avg acc .93 / prec .82 / rec .72 / F₁ .75; best Boone Logan .98/.96/.97/.97; worst Aaron Nola .92/.50/.34/.42.
- Unseen pitchers: poor (F₁ .35–.43); with healthy-only adaptation (unseen pitchers contribute only healthy pitches to training): F₁ .63–.71, near seen-pitcher levels — generalization without ever seeing a pitcher injured.
- Cross-arm: left→right F₁ .03; with horizontal flip augmentation .38/.44; flip + healthy target-arm data .56/.56.
- Per-injury-type: hamstring F₁ .91, groin .84, shoulder .85, intercostal .86 (excellent); UCL tear .74; finger blister .05 (complete failure — motion-invisible).
- Detection horizon (F₁): k=10: .64–.68; k=20: .63–.67; k=30: .65–.69; k=50: .48–.52; k=75: .44–.47 — signal dies beyond ~30–50 events.
- File proposes GSE spec: crop+flow pipeline for NFL QB dropbacks aligned to official injury reports, start with hamstring/groin/shoulder types, horizon sweep k∈{1,2,4} weeks, ship gate unseen-QB F₁ ≥ 0.55 with audits ≈ chance; effort ~3 weeks.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB throwing-motion injury flags from broadcast video (QB-BEHAVIOR).
- Healthy-only adaptation protocol for unseen players (TRUST-SIGNAL: a principled anti-overfitting generalization protocol for any GSE video model).
- Game-identity/temporal-order negative-control audits as de-biasing template for broadcast-video models (TRUST-SIGNAL).
- Per-injury-type detectability ranking: motion-visible vs motion-invisible injuries (OTHER: injury lane).
- k-horizon sweep = detection lead-time discipline (OTHER: injury lane).
## Engine-actionable? (yes/no + one-line what)
Yes — build optical-flow injury-flag pipeline for QBs (most stereotyped motion) with the paper's two bias audits as mandatory gates before any flag ships.
