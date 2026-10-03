# research/2026-10-01/ig-sweep/repos-apis-datasets.md
## What it is (1-2 sentences)
A 2026-10-01 GitHub-verified inventory of permissive-licensed repos, license-diligence-required repos, free no-key APIs, and unverified claims, swept from Instagram creator posts (@ariacodez, @simplifyinai, @autoinvent_, @seb.ai, @dhirajjij).

## Key metrics/methods (formulas where given, else "not specified")
not specified (star counts listed per repo; verification method = GitHub API on 2026-10-01)

## Data sources named
GitHub API; free APIs: CourtListener (court records search), Quiver Quant (congressional + Form 4 insider data), Google Patents (not-in-force patent mining), ESPN scoreboard API (already in use). Unverified: "coingecko-jev" (no official repo, treated as engagement bait), "Lot Vulture AI" (project unverified; METHOD of synthetic Blender data extracted instead).

## Findings (numbers and facts, not vibes)
- 26 repos listed as CLEAR to evaluate (permissive: MIT/Apache-2.0/BSD-3), with star counts from 153 (eth-siplab/EgoExoMoCap) to 186,904 for firecrawl (which is AGPL — not in this list; the top permissive is Shubhamsaboo/awesome-llm-apps at 140,482 and paperclip at 95,655).
- Notable permissive picks: TauricResearch/TradingAgents (109,447, Apache-2.0, multi-agent trading debate — "ADAPT debate mechanic"); HKUDS/Vibe-Trading (34,414, MIT); docling (68,199, MIT doc parsing); qdrant (34,882, Apache-2.0 vector DB); apify/crawlee (25,942, scraping — respect robots/ToS); pocketbase (61,215, MIT).
- LICENSE DILIGENCE tier: freemocap (10,366, AGPL-3.0), firecrawl (186,904, AGPL-3.0), freqtrade (54,975, GPL-3.0), getmaxun/maxun (17,602, AGPL-3.0), Maelic/RelateAnything (AGPL-3.0 — "learn, don't integrate"), twentyhq/twenty (57,732, NOASSERTION), chatwoot (37,356, NOASSERTION), Tencent/WeKnora (31,318, NOASSERTION), facebookresearch/sam-3d-body (3,588, NOASSERTION; weights under Meta SAM License; ONNX community ports exist).
- @seb.ai / @dhirajjij DM'd repos are ungated-unverified.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: repo/tooling inventory for the fleet, not football signal. Trust-adjacent: the learn-don't-integrate AGPL posture and "verification via GitHub API" are TRUST-SIGNAL process norms, but the file itself carries no QB/COACHING/OL/SCHEME content.

## Engine-actionable? (yes/no + one-line what)
yes — candidate permissive-license tooling for the fleet (trading-agents debate mechanic as a model-disagreement protocol; docling for research corpus parsing; crawlee for ToS-respecting scraping), each gated on the learn/verify-first doctrine.
