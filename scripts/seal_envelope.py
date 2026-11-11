#!/usr/bin/env python3
"""Seal/open sensitive payloads for the public bus: AES-256-GCM, key from a
passphrase via PBKDF2-HMAC-SHA256 (600k iters). The envelope is a JSON file that is
safe to commit; plaintext never touches the bus. Passphrase comes from env
BUS_SEAL_PASSPHRASE (never argv, never committed).

  BUS_SEAL_PASSPHRASE=... seal_envelope.py seal in.txt out.sealed.json
  BUS_SEAL_PASSPHRASE=... seal_envelope.py open out.sealed.json
Requires: pip install cryptography
"""
import base64, hashlib, json, os, sys

ITERS = 600_000

def _key(pw: str, salt: bytes) -> bytes:
    return hashlib.pbkdf2_hmac("sha256", pw.encode(), salt, ITERS, 32)

def _pw() -> str:
    pw = os.environ.get("BUS_SEAL_PASSPHRASE")
    if not pw:
        sys.exit("set BUS_SEAL_PASSPHRASE")
    return pw

def seal(data: bytes, pw: str) -> dict:
    from cryptography.hazmat.primitives.ciphers.aead import AESGCM
    salt, nonce = os.urandom(16), os.urandom(12)
    ct = AESGCM(_key(pw, salt)).encrypt(nonce, data, b"agent-bus-envelope-v1")
    b = lambda x: base64.b64encode(x).decode()
    return {"v": 1, "alg": "AES-256-GCM", "kdf": "PBKDF2-SHA256", "iters": ITERS,
            "salt": b(salt), "nonce": b(nonce), "ct": b(ct),
            "plaintext_sha256": hashlib.sha256(data).hexdigest()}

def open_env(env: dict, pw: str) -> bytes:
    from cryptography.hazmat.primitives.ciphers.aead import AESGCM
    d = base64.b64decode
    return AESGCM(_key(pw, d(env["salt"]))).decrypt(
        d(env["nonce"]), d(env["ct"]), b"agent-bus-envelope-v1")

if __name__ == "__main__":
    if len(sys.argv) >= 4 and sys.argv[1] == "seal":
        json.dump(seal(open(sys.argv[2], "rb").read(), _pw()), open(sys.argv[3], "w"), indent=1)
    elif len(sys.argv) >= 3 and sys.argv[1] == "open":
        sys.stdout.buffer.write(open_env(json.load(open(sys.argv[2])), _pw()))
    else:
        sys.exit(__doc__)
