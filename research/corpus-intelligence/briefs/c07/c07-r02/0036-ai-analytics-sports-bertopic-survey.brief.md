# arxiv-program/research/2026-09-21/arxiv-deep/0036-ai-analytics-sports-bertopic-survey.md
## What it is (1-2 sentences)
A bibliometric SLR + BERTopic topic-model survey of 204 journal articles (2002–2024, Web of Science/SSCI) on AI and analytics in sports, extracting four research themes. Verdict in the source: REJECT — no predictive model, no measured effect, no transferable technique.
## Key metrics/methods (formulas where given, else "not specified")
Not specified (no equations). Method: PRISMA funnel (598 articles → 539 journal → 459 by research area → 339 after JCR-2025 5-year IF >= 2.0 filter → 204 after academic binary coding, 135 excluded); then BERTopic on abstracts (pre-trained BERT embeddings → clustering → CountVectorizer post-embedding class-based TF-IDF); inter-topic distance map (circle size = prominence, position = semantic proximity); no topic-coherence metric (e.g., c_v) reported.
## Data sources named
Web of Science Core Collection / SSCI (subscription-gated); corpus = the paper's own 204-article reference list (101 journals; top: Frontiers in Psychology 19, Int. J. Sports Science & Coaching 15, Int. J. Forecasting 6); BERTopic (Grootendorst, 2022, open-source).
## Findings (numbers and facts, not vibes)
- Four extracted themes by prominence: (1) performance modelling, (2) physical and mental health, (3) social media sentiment analysis, (4) tactical tracking; topics "largely distinct" with performance modelling and health far apart, health ↔ tactical tracking and performance modelling ↔ sentiment closer.
- Representative studies: performance modelling — Maanijou & Mirroshandel 2019 (weighted-voting ensemble + genetic algorithm for Persian Gulf Premier League player ranking), Al-Asadi & Tasdemir 2022 (ML market value from FIFA video game data), Constantinou 2019 ("Dolores" ML soccer match outcome model); tactical tracking — Tuyls et al. 2021 ("Game plan"), Goes et al. 2019 (data-driven pass-effectiveness from tracking data), Wu & Swartz 2023 (player speed from Cartesian tracking data).
- Proposed future directions: real-time AI tactical decision-support; multimodal multilingual sentiment; preventive injury detection from biomechanical precursors; holistic technical/tactical/physical/psychological performance models.
- No quantitative results of any kind (no accuracy, no effect size, no coherence score).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — meta-research (literature map, not data for prediction).
- COACHING — the tactical-tracking theme (real-time tactical decision-support, data-driven pass effectiveness) is an adjacent signal for coaching-decision modeling, but the paper contributes no numbers or methods.
## Engine-actionable? (yes/no + one-line what)
No — a literature survey with no model, metrics, or transferable technique; only conceivable internal use is BERTopic-over-the-500-papers' own abstracts as a coverage-mapping tool.
