# Hindsight on the Motif VM

Not started in the setup session. This file is the pin. The container starts only on the Motif VM.

```
export HINDSIGHT_API_LLM_API_KEY=...   # shell only, not this repo
docker compose -f hindsight/docker-compose.yml up -d
docker inspect --format '{{index .RepoDigests 0}}' hindsight-hindsight-1
```

The volume name is `hindsight-data`, mounted at `/home/hindsight/.pg0`. No volume means the next container start wipes memory.

API `127.0.0.1:8888`. UI `127.0.0.1:9999`. Bound to localhost so the memory API is not on the public internet. Motif reaches it on the same machine.

Four banks, one volume. Pass the bank in the request, not as a second container: `signal-origin`, `gse`, `framefit`, `desk`. A recall from the wrong bank must return empty. Observations stay quarantined until Motif or Garrett accepts them.

Digest checked 2026-10-08 against `ghcr.io/v2/vectorize-io/hindsight/manifests/0.10.2`. Response header `docker-content-digest: sha256:d1840062a5b79940ab7a9f4809ceb90fc776d4ad737cd9329e9b5836cc64ab70`. The upstream README still says `docker run --pull always ... :latest`. Do not follow that line.
