# arxiv-program/research/2026-09-21/arxiv-deep/0283-shrouded-sin-taxes.md
## What it is (1-2 sentences)
An economics/policy paper (Kasinger, arXiv:2409.01493v1) using Germany's July 2012 5%-on-turnover sports-betting tax as a quasi-experiment to estimate tax pass-through to consumer betting prices, with heterogeneity across bookmakers' shrouding practices. The reader's verdict is ADAPT: not a prediction method, but a clean overround-based "betting price" measurement pipeline plus hard evidence that posted prices ≠ effective prices.
## Key metrics/methods (formulas where given, else "not specified")
- "Betting price" p = 1 − Σ(1/decimal_odds) per € wagered (overround-derived implicit margin; per-reader §11 specification).
- Difference-in-differences: two-way fixed-effects regression of betting price on treatment×post (German-targeting agency × post-July-2012), with agency and time fixed effects; homogeneous treatment timing.
- Heterogeneity via subsample DID by shrouding-policy group and treatment×shrouding interaction; event-study parallel-trends check.
- Pass-through = Δp / tax rate. Optimal-tax theory invoked (Farhi & Gabaix 2020): optimal sin tax = average marginal mistake / tax-salience parameter θ.
## Data sources named
oddsportal.com scrape + Tipico direct scrape — 68 online agencies (55 unique brands), >80,000 events, 16 leagues, 6 countries, 5 sports, 2008–2018, pre-match closing odds; manual audit of betting slips for shrouding classification; Bwin.party 2012 annual report; German administrative tax data.
## Findings (numbers and facts, not vibes)
- Average pass-through: 76% (coefficient 0.038, SE 0.004); 82% excluding cross-leagues; near-100% with restrictive foreign-domain control group.
- Heterogeneity: shrouding agencies pass 90% to consumers (posted prices fall ~10%); non-shrouding agencies pass only 16%; interaction-based gap ≈ 80 percentage points (author-cautioned: shrouding is endogenous, so heterogeneity is descriptive, not strictly causal).
- 8 of 10 German-targeting agencies shroud by end of sample (6 within 6 months of reform).
- Average betting price 0.0706 overall, 0.0734 soccer; quarterly pass-through rises to ~70% in first four quarters, ~80% after one year, ~0.045 by end of sample.
- German betting revenues grew similarly to other European countries post-reform → limited corrective effect of the tax.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Posted odds systematically understate effective consumer prices when books shroud surcharges — GSE's de-vig/CLV/edge accounting should use effective (fee-inclusive) prices, not posted odds. [TRUST-SIGNAL: market data integrity]
- The agency×time effective-margin panel is a template for a per-book margin panel to detect which books shade effective juice (cash-out haircuts, boost terms, reduced-juice margins). [OTHER: market microstructure]
- Cross-book shrouding detection as edge source: test whether high posted-vs-effective-gap books are also slow line-movers, feeding a line-shopping router. [OTHER: market microstructure]
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the p = 1 − Σ(1/decimal_odds) effective-price definition in the market-capture pipeline, log posted and effective (fee-adjusted) prices per book, and compute CLV/edge against effective prices; test sign-flip rate (posted +EV → effective −EV) on GSE engine picks across tracked books.
