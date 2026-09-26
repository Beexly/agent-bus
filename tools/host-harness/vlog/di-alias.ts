// Real re-exports of the exact symbols the verifier loader imports from
// @sports/data-ingestion. Points at the actual source files (not a stub) so
// nflverse-releases.test.ts exercises production code, while sidestepping the
// 60-module barrel (prisma/zod graph) that plain node cannot require here.
export { assertIngestible, attributionFor } from "/tmp/gsx/packages/data-ingestion/src/source-registry";
export { nflverseUrl, parseCsv, decodeDatasetText } from "/tmp/gsx/packages/data-ingestion/src/nflverse-source";
export type { NflverseDatasetKey } from "/tmp/gsx/packages/data-ingestion/src/nflverse-source";
export { fetchWithFailover, withMirrors } from "/tmp/gsx/packages/data-ingestion/src/fetch-failover";
export type { FetchLike } from "/tmp/gsx/packages/data-ingestion/src/fetch-failover";
