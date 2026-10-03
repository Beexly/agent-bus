# docs/arxiv-program/research/2026-09-21/arxiv-deep/0216-automated-explanation-of-machine-learning-models.md

## What it is (1-2 sentences)
Deep-read notes on arXiv:2504.00767v1 (Rahimian, Flisar, Sumpter, 2025), "Automated Explanation of Machine Learning Models of Footballing Actions in Words": a "wordalisation" pipeline that converts an interpretable xG model's numerical feature contributions into LLM-generated engaging narratives of soccer shots, with an automated engagement-vs-accuracy evaluation. Verdict: ADAPT — directly portable to GSE's public pick-explanation lane for X posts, feed articles, and newsletters.

## Key metrics/methods (formulas where given, else "not specified")
- Three-stage pipeline: (1) interpretable model — logistic regression xG fit per competition (linear in log-odds → exact contributions); (2) synthesis — xG → percentile categories, continuous features → percentile bins, binary features → template sentences, contributions ranked by magnitude, only |contribution| > 0.1 log-odds included; (3) wordalisation — 4-step prompt protocol: (i) "tell it who it is" (shot-commentator role), (ii) "tell it what it knows" (43 football Q/A pairs), (iii) "tell it what data to use" (synthesized text), (iv) "tell it how to answer" (3 human-written few-shot examples).
- Eq. (1): log-odds(x) = β₀ + Σⱼ βⱼxⱼ.
- Eq. (2): Contribution of xⱼ = βⱼ·x̃ⱼ, where x̃ⱼ = xⱼ − μⱼ (mean-centered).
- Eq. (3): P(y=1|x) = 1/(1+e^{−log-odds(x)}).
- SHAP explanation model g(z′) = φ₀ + Σᵢ φᵢz′ᵢ; for the logistic model Eq. (1) is already a ready-made SHAP g — key structural insight; SHAP-wordalisation for non-additive models (xGBoost) is an open challenge.
- xG percentile categories: "slim chance" (<25th pct, xG < 0.028); "low chance" (<50th, <0.056); "decent chance" (<75th, <0.096); "high-quality chance" (<90th, <0.3); "excellent chance" (>90th, >0.3).
- Evaluation: engagement = LLM-judged 0–5 "how interesting and engaging" (averaged over shots, 10 runs); accuracy = LLM asked "was [Feature] a positive, negative, or not contributing factor?" vs ground truth (|contribution|>0.1 rule). 5 cases tested: (1) quality+features; (2) +contributions; (3) wordalisation minus knowledge/answer steps; (4) full wordalisation; (5) raw numbers baseline.
- Extension demo: expected-threat (xT) action-based logistic model over 3 seasons of top-5-league pass/carry data → player passing wordalisations.

## Data sources named
- Hudl-StatsBomb events dataset (110 columns/event) + StatsBomb360 (7 columns), via statsbombpy; open data (free).
- Competitions: EURO Men 2024 & 2022, NWSL 2018, FIFA 2022, FAWSL 2017, AFCON 2023; pitch fixed at 105×68 m; separate xG model per competition.
- 11 retained features: squared distance to center; euclidean distance to goal; nearby opponents in 3 m; opponents in triangle; goalkeeper distance to goal; distance to nearest opponent; angle to goalkeeper; shot with left foot; shot after throw-in; shot after corner; shot after free-kick. Dropped: angle to goal (R=0.88 with angle to goalkeeper), distance to goalkeeper (R=0.81 with distance to goal), angle to nearest opponent (p>0.05).
- Code: github.com/Peggy4444/shotsGPT; app: shotsgpt.streamlit.app; knowledge base: github.com/soccermatics/twelve-gpt-educational.

## Findings (numbers and facts, not vibes)
- Tradeoff result (Fig. 7): Case 2 (descriptive quality + features + contributions) = highest accuracy (on the two strongest features) but low engagement; Case 4 (full wordalisation) = highest engagement and second-highest accuracy — the authors' recommended operating point; Case 3 (ablating knowledge/answer steps) is worse than Case 4, confirming prompt-protocol steps matter; Case 5 (raw numbers) is the low-engagement baseline.
- Dominant features overall: euclidean distance to goal and vertical distance to center; context-dependent reversals occur (e.g., distance-to-nearest-opponent outweighing dominant distance features in NWSL examples).
- Worked examples: Germany vs Scotland EURO 2024, 56th-min shot xG = 0.03 (4 opponents in triangle → strongly negative); 85th-min Wirtz shot xG = 0.14 → "high-quality chance" percentile category.
- ±0.1 log-odds significance threshold is arbitrary; percentile categories are competition-specific.
- No human evaluation by coaches — explicitly future work; accuracy evaluation covers only the two strongest features, not the full contribution set.
- Implementation spec for GSE: contribution layer (exact βⱼ·x̃ⱼ for additive models, SHAP φᵢ otherwise) → synthesis layer (edge/probability → percentile categories calibrated on engine history; features → percentile-binned phrases) → wordalisation layer (4-step protocol with GSE domain Q/A bank ~40 pairs and Garrett-voice few-shot examples, ≥9.2 floor, qi-check gate). Effort ~3–5 days; one LLM call per pick.
- Acceptance gate: adopt as draft-generation step (human/voice-gate approval) if sentence-level fidelity ≥ 90% on 50-pick test AND Garrett's blinded engagement rating favors wordalised by ≥ 0.5 points AND contribution extraction runs automatically on daily engine output; reject if fidelity < 85%.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: full wordalisation = highest engagement + second-highest accuracy, but engagement costs accuracy (embellishment risk) — needs a fidelity gate; an entertaining-but-wrong explainer is worse than a dry-but-right one for a "show your work" brand.
- OTHER: improvement over the paper — replace LLM-as-judge accuracy with deterministic script-based fidelity checking (parse claimed factor directions, compare against true contribution signs): exact and cheap.
- OTHER: the method only works cleanly for additive/linear models; for GSE's engine, SHAP-wordalisation on a non-additive model is the authors' stated open question — worth testing directly.
- SCHEME: percentile-bin phrasing pattern ("close-range", "tight angle") maps to GSE features (rest differential, market move, matchup rating) for percentile-binned pick narratives.

## Engine-actionable? (yes/no + one-line what)
Yes — build the pick wordalisation pipeline (contribution extraction → percentile-category synthesis → 4-step voice-locked LLM rewrite) as a draft-generation step for public pick explanations, gated on ≥90% sentence-level fidelity and a ≥0.5-point blinded engagement win.
