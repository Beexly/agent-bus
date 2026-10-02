#!/usr/bin/env python3
"""Strict relevance/quality filter: 2635 raw -> 120-180 high-quality candidates."""
import json, re
from pathlib import Path

BASE = Path.home() / "workspace" / "arxiv-sweep"
IN = BASE / "phase2-candidates-bayes.jsonl"
OUT = BASE / "phase2-candidates-bayes-filtered.jsonl"

SPORT_TITLE = re.compile(r"\b(football|soccer|basketball|baseball|tennis|hockey|cricket|rugby|golf|nfl|nba|mlb|nhl|epl|premier league|la liga|bundesliga|serie a|fifa|uefa|athlete|athletics|sports?|fantasy|dfs|draftkings|fanduel|betting|odds|bookmaker|sportsbook|wager|gambl|win probability|elo\b|trueskill|glicko|xg\b|expected goals?|expected threat|pitch control|lineup|prop bets?|waiver|match outcome|goal scoring|point spread|moneyline|touchdown|quarterback|pitcher|batting|tournament|olympic|marathon|nascar|formula 1|mma|boxing)\b", re.I)
SPORT_ABS = re.compile(r"\b(football|soccer|basketball|baseball|tennis|hockey|cricket|rugby|golf|\bNFL\b|\bNBA\b|\bMLB\b|\bNHL\b|premier league|fifa|athlete|player tracking|tracking data|team strength|team ratings?|fantasy sports?|\bDFS\b|draftkings|fanduel|sports betting|bookmaker|odds|win probability|bradley.?terry|elo rating|trueskill|expected goals|expected threat|pitch control|spatial control|lineup optimization|prop\b|waiver wire|match result|goal prediction|point spread|moneyline|quarterback|pitcher|sports analytics|sports data|match outcome|head.?to.?head)\b", re.I)
METHOD = re.compile(r"\b(bayesian|hierarchical|kalman|particle filter|gaussian process|state.?space|dynamic linear|shrinkage|regime.?switch|hidden markov|variational|mcmc|posterior|uncertainty quantification|calibrat|conformal|poisson|hawkes|point process|copula|trajectory|markov chain|ensemble|gradient boost|xgboost|neural network|deep learning|random forest|lasso|ridge regression|empirical bayes|stein|james.?stein|multi.?level|mixed.?effects?|time.?varying|stochastic volatility|extreme value|survival analysis|competing risks|causal|difference.?in.?differences|synthetic control|uplift|thompson sampling|bandit|reinforcement learning|graph neural|transformer|attention|lstm|gru\b|diffusion model|normalizing flow|optimal transport|stackelberg|nash|game.?theor|contest theory|kelly|sharpe|portfolio|risk management|abstention|selective prediction|conformalized)\b", re.I)
JUNK_DOMAIN = re.compile(r"\b(robot|robotics|uav|drone|autonomous vehicle|self.?driving|epidemic|pandemic|covid|power grid|smart grid|supply chain|manufacturing|semiconductor|quantum computing|qubit|blockchain|cryptocurrency|bitcoin|protein|genomic|dna|rna|cancer|tumor|medical imaging|mri\b|ct scan|climate|weather forecast|hurricane|seismic|earthquake|astronom|galaxy|black hole|particle physics|nuclear|radar|sonar|wireless sensor|iot\b|5g\b|antenna|satellite orbit|crop|agriculture|irrigation|traffic flow|urban planning|crowd counting is not)\b", re.I)
# note: 'epidemic' etc. excluded only when no sports signal
WITHDRAWN = re.compile(r"withdrawn", re.I)
PURE_THEORY = re.compile(r"\bwe prove\b|\btheorem\b.*\bproof\b|\bthis paper is withdrawn\b", re.I)

def is_english(t):
    # crude: mostly latin-1/ascii words; reject obvious CJK/Cyrillic-heavy text
    nonlatin = sum(1 for ch in t if ord(ch) > 0x2FF)
    return nonlatin < len(t) * 0.02

cands, seen = [], set()
for line in IN.read_text().splitlines():
    try:
        r = json.loads(line)
    except Exception:
        continue
    bid = re.sub(r"v\d+$", "", r["id"])
    if bid in seen:
        continue
    seen.add(bid)
    t, a = r["title"], r["abstract"]
    if WITHDRAWN.search(t) or WITHDRAWN.search(a[:200]):
        continue
    if not is_english(t + " " + a):
        continue
    st = len(set(SPORT_TITLE.findall(t)))
    sa = len(set(SPORT_ABS.findall(a)))
    m = len(set(METHOD.findall(t + " " + a)))
    junk = len(set(JUNK_DOMAIN.findall(t + " " + a)))
    # pure theory with no experiments
    theory = bool(PURE_THEORY.search(a)) and not re.search(r"\b(experiment|empirical|dataset|simulation|evaluat|case study|application)\b", a, re.I)
    score = 4 * st + 2 * sa + 1.0 * min(m, 6) - 1.5 * junk - (3 if theory else 0)
    # sports relevance gate: need at least some sports signal
    sport_total = st + sa
    keep = sport_total >= 1 and score >= 2.0 and junk <= 4
    cands.append((score, sport_total, r))

cands.sort(key=lambda x: (-x[0], x[2]["id"]))
kept = [r for s, sp, r in cands if True]
# take top N by score but ensure per-query diversity not needed; cap ~170
FINAL_N = 170
final = [r for s, sp, r in cands[:FINAL_N]]
print(f"raw unique: {len(cands)} | final kept: {len(final)} | cutoff score: {cands[FINAL_N-1][0]:.1f}")

with open(OUT, "w") as f:
    for r in final:
        f.write(json.dumps(r) + "\n")

# replace original with filtered, keep backup
IN.rename(BASE / "phase2-candidates-bayes-raw-backup.jsonl")
OUT.rename(IN)
print("filtered written to", IN)
