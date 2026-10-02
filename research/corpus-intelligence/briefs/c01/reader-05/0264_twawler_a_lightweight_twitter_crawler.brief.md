# arxiv-program/research/2026-09-21/arxiv-deep/0264-twawler-a-lightweight-twitter-crawler.md
## What it is (1-2 sentences)
A research-deep brief of arXiv:1804.07748v1 (Pratikakis, 2018), a lightweight Python Twitter crawler that collected the Greek-speaking Twitter community's full interaction graph (~330K accounts, 750M tweets, Aug 2016–Mar 2018) on one machine and one credential. Verdict: REJECT — the 2018 API endpoints, rate limits, and access assumptions are obsolete under the modern paid X API; only the generic politeness/checkpointing patterns survive.
## Key metrics/methods (formulas where given, else "not specified")
Not specified (no equations; the paper has no math model). Heuristic thresholds: track account if >100 tweets and ≥20% Greek, or >500 tweets and ≥10% Greek plus Greek name/bio; stop tracking if >500 tweets and <1% Greek; infer Greek-speaking if >30% of friends/followers are Greek-speaking. 2018 API limits respected: 3,200 latest timeline tweets per user, 200 tweets/request, 15-minute rate-limit windows. Per-account state machine: active/suspended/deleted/protected/ignored with checkpointed resume in MongoDB.
## Data sources named
Twitter 2018 API (endpoints, timeline, friends/followers, lists, trends) — obsolete. MongoDB as the store. The dataset itself is Twitter-derived and not redistributable; the ~11 KLoC crawler was intended for Apache-licensed release but no code URL was found in the extract.
## Findings (numbers and facts, not vibes)
- Scale: ~330,000 Greek-speaking accounts; 750M tweets (424M Greek); 750M follow relations; ~300,000 lists, 119M member relations, 27,000 subscriptions; 705,000 trends; 52M distinct users observed (292K suspended, 141K deleted, 3.5M protected).
- Derived interaction graphs (vertices/edges): follow 26.3M/205.0M; retweet 3.85M/46.1M; mention 2.23M/2.78M; reply 4.55M/24.4M; quote 1.28M/4.79M; list-similarity 54.3M/1.99B; favorite 2.78M/38.9M.
- Reply-thread structure: 86% of threads are one tweet plus one reply; 6.3% have two replies; maximum observed thread length 2,185.
- Ran ~19 months without being banned (politeness design evidence); no precision/recall reported for the language classifier.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: polite API-ingestion engineering checklist (per-endpoint rate-limit state persisted across restarts, entity state machines, checkpointed pagination cursors, backoff with jitter) — transferable to GSE's Odds API and other rate-limited ingestion.
- OTHER: the brief's proposed improvement experiment — measuring API-visibility bias (what fraction of NFL analyst posts/replies a lower X API tier misses vs manual sweep) and whether sentiment/news-event detection for the text-features gap degrades — is a genuinely new research question for the gap #12 text-as-features lane.
## Engine-actionable? (yes/no + one-line what)
No for the crawler itself (obsolete API); yes only for the 4-item politeness checklist as an engineering standard for GSE's existing rate-limited API ingestion, gated on a kill/resume test (zero duplicate writes, zero 429s).
