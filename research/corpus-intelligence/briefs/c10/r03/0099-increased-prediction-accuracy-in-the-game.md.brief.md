# arxiv-program/research/2026-09-21/arxiv-deep/0099-increased-prediction-accuracy-in-the-game.md
## What it is (1-2 sentences)
Ledger read of Passi & Pandey (2018), arXiv:1804.04226: supervised multiclass classifiers predicting cricket ODI batsman run-bands and bowler wicket-bands per match from a Consistency/Form/Opposition/Venue four-way feature decomposition with Analytic Hierarchy Process weights. Verdict ADAPT: the four-way player-feature decomposition is a portable prop-modeling framework; the cricket classifiers and their 90%+ accuracies are not trustworthy.

## Key metrics/methods (formulas where given, else "not specified")
- Batting Consistency (whole career) = 0.4262·average + 0.2566·innings + 0.1510·SR + 0.0787·centuries + 0.0556·fifties − 0.0328·zeros.
- Bowling Consistency = 0.4174·overs + 0.2634·innings + 0.1602·SR + 0.0975·average + 0.0615·FF. Bowling Form (last 12 months) = 0.3269·overs + 0.2846·innings + 0.1877·SR + 0.1210·average + 0.0798·FF. Bowling Opposition (career vs that team) = 0.3177·overs + 0.3177·innings + 0.1933·SR + 0.1465·average + 0.0943·FF. Bowling Venue (career at that ground) = 0.3018·overs + 0.2783·innings + 0.1836·SR + 0.1391·average + 0.0972·FF. Batting Venue = Consistency weights but + 0.0328·HS (highest score) instead of zeros.
- Weights from the Analytic Hierarchy Process (Saaty); raw measures binned to 1–5 ratings before weighting. Targets as classification: runs in 5 classes (1–24 / 25–49 / 50–74 / 75–99 / ≥100); wickets in 3 classes (0–1 / 2–3 / ≥4). Classifiers: Naïve Bayes, Decision Trees (C4.5/CART), Random Forest, multiclass SVM (LIBSVM). SMOTE oversampling of minority classes.
- Batting average = Runs/dismissals; SR = (Runs/Balls)·100; Bowling avg = runs conceded/wickets; Bowling SR = balls/wickets.

## Data sources named
Scraped from cricinfo.com (ParseHub, import.io) into MySQL via PHP — not shared. Batting: matches 14 Jan 2005 – 10 Jul 2017, with innings-by-innings career histories back to Tendulkar's ODI debut (18 Dec 1989). Bowling: matches 2 Jan 2000 – 10 Jul 2017, histories back to 31 Mar 1984. Per-match stats recomputed point-in-time "till the day of the match." Tools: Weka 3.9.1 + Dataiku Data Science Studio.

## Findings (numbers and facts, not vibes)
- Runs (Table 1, 90% train): Random Forest 90.74% (precision/recall/F1 0.908, AUROC 0.987, RMSE 0.1604); Decision Trees 80.46%; SVM 51.45%; Naïve Bayes 42.50%.
- Wickets (Table 2, 90% train): Random Forest 92.25% (0.923/0.923/0.923, AUROC 0.975, RMSE 0.2036); Decision Trees 86.50%; SVM 68.78%; Naïve Bayes 58.12%.
- File's own baseline comparison: Muthuswamy & Lam (2008) BPN 87.10% / RBFN 91.43% on 8 Indian bowlers (2-class problem).
- File's adversarial caveats: random (not time-ordered) train/test splits on time-series data — future matches train models predicting past ones; SMOTE applied before splitting (text order suggests it) leaks synthetic samples across train/test; 90.74% on 5-class runs prediction is not credible as a generalization claim — reflects in-sample-ish memorization; AHP weights are subjective pairwise judgments; 1–5 binning thresholds are author-chosen; zero Opposition/Venue history replaced with class averages (shrinks exactly the cold-start cases toward the mean); no calibration, no betting-market comparison, no profit metric.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The four-way decomposition — Consistency (career), Form (last 4–8 games), Opposition (career vs that defense/scheme), Venue (home/away/dome/outdoors) — is the portable prop-modeling framework, new to the GSE corpus (OTHER).
- The 90%+ accuracies are not credible evidence: random-split + pre-split SMOTE on time-series data means all numbers are optimistic upper bounds, not expected NFL lift (TRUST-SIGNAL).
- The Opposition component (player vs. specific defense) is the one thing a player-prop model can know that a team-level matchup model cannot — the highest-value test in the file's improvement plan (SCHEME).

## Engine-actionable? (yes/no + one-line what)
Yes — port the Consistency/Form/Opposition/Venue decomposition to NFL player props with weights learned (regularized regression) instead of AHP judgments, evaluated on strictly time-ordered train/test (train ≤2022, test 2023–2025, no SMOTE), and adopt only if it beats the career-average baseline by ≥3pp accuracy or ≥0.01 log-loss; the paper's random-split numbers count as nothing.
