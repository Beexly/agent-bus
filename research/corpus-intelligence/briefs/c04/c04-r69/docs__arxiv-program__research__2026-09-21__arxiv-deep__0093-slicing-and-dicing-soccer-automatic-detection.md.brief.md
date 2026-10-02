# docs/arxiv-program/research/2026-09-21/arxiv-deep/0093-slicing-and-dicing-soccer-automatic-detection.md
## What it is (1-2 sentences)
A full-paper deep-read of Morra et al. (2020, arXiv:2004.04147): a two-tier system detecting soccer events from tracking data — atomic events via sliding-window rules over positional features, then complex events via declarative Interval Temporal Logic (TILCO) in the ETALIS Prolog library — trained/evaluated entirely on the synthetic SoccER dataset from the Gameplay Football engine. The verdict is REJECT: positional event detection from synthetic soccer data has no path into GSE's game-outcome/prop prediction engine.
## Key metrics/methods (formulas where given, else "not specified")
- Atomic detector: sliding-window rule check over engineered per-frame features (velocity, acceleration, direction, ball distance, expected cross position, direction-change angle); events KickingTheBall, BallPossession, Tackle, BallDeflection, BallOut, Goal.
- Complex detector: TILCO interval logic — e.g., Pass = KickingTheBall THEN BallPossession (same team, k < Th3); FilteringPass (receiver nearer goal than all opponents); PassThenGoal/CrossThenGoal; SavedShot; WonTackle/LostTackle.
- Rule-parameter optimization: 16 parameters + window + rule order in a genome, tuned by SPEA2 multi-objective GA (50 generations, pop 200, BLX-0.5 crossover p=0.90, mutation p=0.20, archive 100; windows 3-30 frames, speed 1-15, distance 0.1-2.0 m).
- Validation: atomic detection counted if found within a 3-frame window; complex via OV20 criterion (IoU >= 20%); precision/recall/F-score per event.
## Data sources named
Synthetic SoccER dataset on the Gameplay Football engine (Google Research Football gym): 8 matches, 500 minutes, 1,678,304 atomic events, 9,130 complex events (train/test per Table 1); stated public at https://gitlab.com/grains2/slicing-and-dicing-soccer (not verified live).
## Findings (numbers and facts, not vibes)
- Atomic test: KickingTheBall P 0.96 / R 0.92 / F 0.94; BallPossession P 0.99 / R 0.88 / F 0.93; Tackle P 0.94 / R 0.61 / F 0.74; BallDeflection F consistently < 0.4 (effectively undetectable from x/y data alone); BallOut perfect.
- Complex: F-score 0.8-1.0 in 8 of 11 cases; Tackle and SavedShot suffer from the weak atomic precursors.
- Head-to-head: kicking the ball ours P 96/R 93/F 94 vs Richly 2017 95/92/93 and Khan 2018 -/92/89; pass ours 96/93/94 vs Khan 94/84/89, Richly 2016 42.6/64.7/51, Lee 2017 -/60/-.
- Parameter sensitivity: "very sensitive to the distance thresholds" (converge to narrow ranges); window size robust; speed threshold "less critical"; rule order "does not seem to play a fundamental role."
- Authors' headline: precision and recall > 80% on most events.
- Fatal caveats: ALL results on synthetic data; authors concede synthetic positions "may be more accurate than those extracted from real video streams"; real multicamera setups report ~90% player / 70% ball tracking accuracy; GA run only twice (initialization-sensitive); foul/penalty events too rare to evaluate (13 and 4 events); no NFL applicability.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: the portable method is synthetic-engine-generated labeled data (1.6M events) for detector development when real labeled data are scarce — but no validated NFL play simulator exists at this fidelity, so it stays theoretical for GSE.
## Engine-actionable? (yes/no + one-line what)
No — soccer event detection on synthetic data addresses no priority gap on GSE's research map (the engine consumes play-by-play, not tracking data) and has zero NFL transfer evidence.
