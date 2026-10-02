#!/usr/bin/env python3
"""Phase-2 fulltext fetcher: ar5iv HTML -> text cache. Resumable.
Usage: python3 phase2_fetch_fulltext.py selection-750.jsonl
Reads paper IDs from the selection file, writes ~/workspace/arxiv-sweep/fulltext/<base-id>.txt
Logs failures to phase2-fetch-failures.jsonl
"""
import json, os, re, sys, time, urllib.request

BASE = os.path.expanduser("~/workspace/arxiv-sweep")
FT = os.path.join(BASE, "fulltext")
os.makedirs(FT, exist_ok=True)
FAIL = os.path.join(BASE, "phase2-fetch-failures.jsonl")

def base_id(pid):
    return re.sub(r"v\d+$", "", pid)

def fetch_ar5iv_text(pid):
    bid = base_id(pid)
    url = f"https://ar5iv.org/html/{bid}"
    req = urllib.request.Request(url, headers={"User-Agent": "GSE-research/1.0 (research fetch)"})
    with urllib.request.urlopen(req, timeout=60) as r:
        html = r.read().decode("utf-8", errors="replace")
    # strip to text
    text = re.sub(r"<script.*?</script>", " ", html, flags=re.S | re.I)
    text = re.sub(r"<style.*?</style>", " ", text, flags=re.S | re.I)
    text = re.sub(r"<[^>]+>", " ", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text

def main():
    sel = sys.argv[1] if len(sys.argv) > 1 else os.path.join(BASE, "selection-750.jsonl")
    ids = []
    for l in open(sel):
        l = l.strip()
        if l:
            ids.append(json.loads(l)["id"])
    done = skipped = failed = 0
    fails = open(FAIL, "a")
    for i, pid in enumerate(ids):
        bid = base_id(pid)
        out = os.path.join(FT, bid + ".txt")
        if os.path.exists(out) and os.path.getsize(out) > 2000:
            skipped += 1
            continue
        try:
            text = fetch_ar5iv_text(pid)
            if len(text) < 2000:
                raise RuntimeError(f"text too short ({len(text)} chars)")
            open(out, "w").write(text)
            done += 1
        except Exception as e:
            fails.write(json.dumps({"id": pid, "error": str(e)[:300]}) + "\n")
            fails.flush()
            failed += 1
        if i % 25 == 0:
            print(f"[{i}/{len(ids)}] done={done} skipped={skipped} failed={failed}", flush=True)
        time.sleep(0.6)
    print(f"FINAL done={done} skipped={skipped} failed={failed}", flush=True)

if __name__ == "__main__":
    main()
