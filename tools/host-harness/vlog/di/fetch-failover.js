"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var fetch_failover_exports = {};
__export(fetch_failover_exports, {
  fetchWithFailover: () => fetchWithFailover,
  nflverseMirror: () => nflverseMirror,
  withMirrors: () => withMirrors
});
module.exports = __toCommonJS(fetch_failover_exports);
function nflverseMirror(url) {
  if (url.startsWith("https://github.com/")) {
    return `https://ghproxy.net/${url}`;
  }
  return null;
}
function withMirrors(primaryUrl) {
  const mirror = nflverseMirror(primaryUrl);
  return mirror ? [primaryUrl, mirror] : [primaryUrl];
}
async function fetchWithFailover(urls, fetcher, { timeoutMs = 15e3, init = {}, validate } = {}) {
  const errors = [];
  let attempts = 0;
  for (const url of urls) {
    attempts += 1;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetcher(url, { ...init, signal: controller.signal });
      if (response.ok) {
        if (!validate) return { response, sourceUrl: url, attempts, errors };
        const body = new Uint8Array(await response.arrayBuffer());
        if (validate(body, url)) {
          const rebuilt = new Response(body.byteLength > 0 ? body : null, {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers
          });
          return { response: rebuilt, sourceUrl: url, attempts, errors };
        }
        errors.push(`${url} -> integrity validation failed`);
      } else {
        errors.push(`${url} -> HTTP ${response.status}`);
      }
    } catch (error) {
      errors.push(`${url} -> ${error instanceof Error ? error.message : "error"}`);
    } finally {
      clearTimeout(timer);
    }
  }
  throw new Error(`All ${attempts} source(s) failed: ${errors.join("; ")}`);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  fetchWithFailover,
  nflverseMirror,
  withMirrors
});
