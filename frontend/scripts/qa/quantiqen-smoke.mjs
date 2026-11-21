/**
 * QUANTIQEN SDK smoke test (Wave 1).
 *
 * Sends ONE labeled telemetry event through the official SDK and reports
 * whether the collector accepted it. Never prints the API key.
 *
 * Usage: node scripts/qa/quantiqen-smoke.mjs
 * Reads the same server-only variables as the app from .env.local.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { QuantiqenClient } from "@quantiqen/sdk";

const here = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(here, "../../.env.local");

function loadEnv(file) {
  const map = {};
  if (!fs.existsSync(file)) return map;
  for (const raw of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const i = line.indexOf("=");
    if (i < 1) continue;
    const key = line.slice(0, i).trim();
    let value = line.slice(i + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    map[key] = value;
  }
  return map;
}

const env = loadEnv(envPath);
const apiKey = env.QUANTIQEN_API_KEY;
const baseUrl = env.QUANTIQEN_BASE_URL || undefined;
const assetId = env.QUANTIQEN_ASSET_ID || undefined;
const source = env.QUANTIQEN_SOURCE || "anantnetra-website";

if (!apiKey || !/^qtn_(live|test|dev)_/.test(apiKey)) {
  console.error("FAIL: QUANTIQEN_API_KEY missing or malformed.");
  process.exit(1);
}

const logs = [];
const client = new QuantiqenClient({
  apiKey,
  baseUrl,
  maxRetries: 1,
  logger: (message) => logs.push(message),
});

console.log("QUANTIQEN smoke test");
console.log(`  baseUrl : ${baseUrl || "(SDK default)"}`);
console.log(`  assetId : ${assetId || "(omitted)"}`);
console.log(`  source  : ${source}`);
console.log(`  apiKey  : ${apiKey.slice(0, 9)}*** (masked)`);

await client.sendLog(
  {
    level: "info",
    message: "QUANTIQEN SDK smoke test from anantnetra.com",
    attributes: {
      check: "sdk-smoke",
      runtime: "node",
    },
  },
  {
    source,
    occurredAt: new Date().toISOString(),
    ...(assetId ? { assetId } : {}),
    idempotencyKey: `sdk-smoke-${Date.now()}`,
  }
);

await client.flush();
await client.shutdown();

if (logs.length > 0) {
  console.error("FAIL: SDK reported errors:");
  for (const line of logs) console.error(`  ${line}`);
  process.exit(1);
}

console.log("PASS: no SDK error output — collector accepted the batch.");
