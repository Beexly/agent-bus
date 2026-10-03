# docs/arxiv-program/research/2026-09-21/arxiv-deep/0507-how-a-losing-team-like-the.brief.md
## What it is (1-2 sentences)
Deep-read of arXiv:2105.13472v2 (Barrett, Koumarianos & Mermut, 2021), a two-page conceptual note arguing a weaker hockey team can beat a stronger one by concentrating salary cap into one dimension (elite goalie), illustrated by an intransitive-cycle toy example (intransitive dice analogy). Verdict: REJECT — no data, no estimation, no validation, no transferable method.
## Key metrics/methods (formulas where given, else "not specified")
- No formulas. Method = arithmetic counting: three hypothetical teams split $6M across Offence/Defence/Goalie (Montreal 1/1/4; Boston 2/2/2; New York 3/3/0); each pair plays 9 head-to-head matchups (each team's three numbers vs opponent's three); majority of 9 wins the series.
- Assumptions (all ungrounded): strength decomposes into three independent equally-weighted dimensions; dollar spend maps monotonically to matchup wins; all 9 cross-dimension matchups count equally; series long enough that majority-of-9 decides.
## Data sources named
None. No data used. References: Wikipedia "Intransitive dice", Gardner (1970), Leonard (2010), Ekhad & Zeilberger (2017).
## Findings (numbers and facts, not vibes)
- The only numbers are the constructed matchup tallies: BOS over MTL 6-3; NY over BOS 6-3; MTL over NY 5-4 — an intransitive cycle (NY > BOS > MTL > NY), built by construction, not estimated.
- No baselines, no confidence intervals, no empirical results of any kind. The conclusion "for any allocation a counter-allocation exists" is asserted from the example.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Intransitivity intuition (matchups are not transitive; stylistic edges exist beyond aggregate strength) -> OTHER, but the intuition is already operationalized in GSE's real unit-level matchup features (unit matchups in gse-lab, coverage/run-type matchup tables, WR coverage upgrades) — no new capability.
## Engine-actionable? (yes/no + one-line what)
No — nothing to implement; the only worth-doing item is the file's suggested improvement experiment instead: test for real intransitivity in NFL unit matchups via pairwise Bradley-Terry unit-strength models with explicit matchup-interaction terms vs transitive baseline on held-out seasons.
