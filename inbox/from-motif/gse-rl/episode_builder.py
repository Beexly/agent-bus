#!/usr/bin/env python3
"""GSE-RL episode builder: frozen-vintage NFL games -> verl-format RL records.

Each record:
  data_source : 'gse-nfl'
  ability     : 'pick'
  agent_name  : 'gse_reasoning_agent'
  prompt      : list of chat messages; the pre-game reasoning state (as-of fenced)
  reward_model: {'ground_truth': <bool home win>, 'style': 'rule'}
  extra_info  : {game_id, season, week, as_of, vintage}

Usage: episode_builder.py <season> <out.jsonl> [--weeks 1-18]
"""
import hashlib
import json
import sys

import pandas as pd

SNAP = "/home/hatch/workspace/gse-discovery/data_snapshot_20260913"


def vintage_sha(season):
    h = hashlib.sha256()
    with open(f"{SNAP}/schedules_{season}.parquet", "rb") as f:
        for chunk in iter(lambda: f.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()[:16]


def load(season):
    df = pd.read_parquet(f"{SNAP}/schedules_{season}.parquet")
    df = df[df["game_type"] == "REG"].copy().dropna(subset=["home_score", "away_score"])
    df["kickoff"] = pd.to_datetime(df["gameday"] + " " + df["gametime"].fillna("13:00"))
    return df.sort_values("kickoff").reset_index(drop=True)


def num(x, default=0.0):
    try:
        v = float(x)
        return v if v == v else default
    except (TypeError, ValueError):
        return default


def build_prompt(g, home_form, away_form):
    """Pre-game reasoning state as text. Everything here is known BEFORE kickoff."""
    hw, hn, hpf, hpa = home_form
    aw, an, apf, apa = away_form
    lines = [
        f"Game: {g['away_team']} at {g['home_team']} — {g['season']} week {g['week']} ({g['gameday']}).",
        f"{g['home_team']} (home) form: {hw}-{hn - hw} record, "
        f"{hpf / hn:.1f} PF/G, {hpa / hn:.1f} PA/G over last {hn} games." if hn else
        f"{g['home_team']} (home): no prior games this window.",
        f"{g['away_team']} (away) form: {aw}-{an - aw} record, "
        f"{apf / an:.1f} PF/G, {apa / an:.1f} PA/G over last {an} games." if an else
        f"{g['away_team']} (away): no prior games this window.",
        f"Rest: home {num(g.get('home_rest')):.0f} days, away {num(g.get('away_rest')):.0f} days.",
        f"Market spread: {num(g.get('spread_line')):+.1f} (home perspective). Total: {num(g.get('total_line')):.1f}.",
        f"Conditions: {num(g.get('temp'), 70):.0f}F, wind {num(g.get('wind')):.0f} mph, "
        f"roof={g.get('roof', 'n/a')}, surface={g.get('surface', 'n/a')}.",
        f"Divisional game: {bool(g.get('div_game'))}.",
        "",
        "Reason through this game step by step (quarterback play, coaching, line matchups, "
        "injuries, weather, rest). Then output exactly one line:",
        "PICK: <HOME|AWAY|ABSTAIN> PROB: <0.00-1.00 probability the HOME team wins>",
        "If the evidence is genuinely thin, output PICK: ABSTAIN — an honest abstention "
        "outscores a manufactured pick.",
    ]
    return [{"role": "user", "content": "\n".join(lines)}]


def main():
    season = int(sys.argv[1])
    out_path = sys.argv[2]
    df = load(season)
    vsha = vintage_sha(season)

    # rolling form strictly before each kickoff
    form = {}
    records = []
    for _, g in df.iterrows():
        hf = form.get(g["home_team"], (0, 0, 0, 0))
        af = form.get(g["away_team"], (0, 0, 0, 0))
        prompt = build_prompt(g, hf, af)
        actual = bool(g["home_score"] > g["away_score"])
        records.append({
            "data_source": "gse-nfl",
            "ability": "pick",
            "agent_name": "gse_reasoning_agent",
            "prompt": prompt,
            "reward_model": {"ground_truth": actual, "style": "rule"},
            "extra_info": {
                "game_id": g["game_id"],
                "season": int(g["season"]),
                "week": int(g["week"]),
                "as_of": g["kickoff"].strftime("%Y-%m-%dT%H:%M:%SZ"),
                "vintage": f"schedules_{season}.parquet:{vsha}",
            },
        })
        # update form AFTER emitting (as-of fencing: this game is not visible to itself)
        for team, scored, allowed in (
            (g["home_team"], g["home_score"], g["away_score"]),
            (g["away_team"], g["away_score"], g["home_score"]),
        ):
            w, n, pf, pa = form.get(team, (0, 0, 0, 0))
            form[team] = (w + (1 if scored > allowed else 0), n + 1, pf + scored, pa + allowed)

    with open(out_path, "w") as f:
        for r in records:
            f.write(json.dumps(r) + "\n")
    print(f"wrote {len(records)} episodes -> {out_path} (vintage {vsha})")


if __name__ == "__main__":
    main()
