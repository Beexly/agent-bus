#!/usr/bin/env python3
"""Write bus/FREEZE. Telegram only if env vars are already set. Never ask for a token."""
import os
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def main():
    path = ROOT / "bus" / "FREEZE"
    path.write_text(f"frozen {datetime.now(timezone.utc).isoformat()} lead=motif\n")
    print(f"FREEZE {path}")
    token = os.environ.get("TELEGRAM_BOT_TOKEN")
    chat = os.environ.get("TELEGRAM_CHAT_ID")
    if not token or not chat:
        print("HE-MUST telegram: TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID are unset. Not asking.")
        return 0
    print("telegram env present; notify is a later pass, not this script")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
