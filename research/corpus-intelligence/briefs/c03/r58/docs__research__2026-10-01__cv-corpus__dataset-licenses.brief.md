# docs/research/2026-10-01/cv-corpus/dataset-licenses.md
## What it is (1-2 sentences)
The authoritative license sidecar for every external dataset referenced by the detector-v2 CV work; the eval harness is specified to FAIL if a training dataset lacks an entry here (license-gate test in `detector-v2-harness.test.ts`, spec in deep-dive-the-playmakers.md).
## Key metrics/methods (formulas where given, else "not specified")
not specified (license record only)
## Data sources named
- cs-1430/wr-finder (v3), Roboflow Universe, 443 images, 8 classes — CC BY 4.0
- home-mxzv1/nfl-competition, Roboflow Universe, 9,947 images, 5 helmet classes — Public Domain
- NFL 1st and Future – Impact Detection (Kaggle competition: videos + impact labels + tracking) — license UNVERIFIED (Rules page login-gated)
- GSE 57-frame hand-labeled set — internal, owned
- ruidazeng/the-playmakers GitHub repo (code/notebooks/PDFs) — NO LICENSE (badge links to missing LICENSE; API: null)
## Findings (numbers and facts, not vibes)
- wr-finder (CC BY 4.0) and nfl-competition (Public Domain) are USABLE (attribution required for CC BY 4.0); BibTeX attribution strings recorded verbatim.
- Kaggle NFL Impact Detection: RESEARCH-ONLY until license verified (terms page JS-gated, not obtained 2026-10-01).
- the-playmakers repo: NO license has ever been added in commit history; README license badge is a dead link — RESEARCH-ONLY (method intel only, no code reuse).
- The harness enforces a license gate: training dataset without an entry → eval fails.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Public-domain 9,947-image helmet-class dataset available for helmet-aware detection work — OTHER
- CC BY 4.0 WR-finder set (443 images, 8 classes) usable with attribution — OTHER
- Kaggle impact labels + tracking videos (impact detection) research-only pending license verification — TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
Yes — verify the Kaggle NFL Impact Detection license, because its impact labels + tracking videos are the only external impact-detection ground truth cited for the detector-v2 CV lane.
