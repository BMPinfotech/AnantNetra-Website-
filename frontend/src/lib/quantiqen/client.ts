/**
 * Server-only QUANTIQEN telemetry wrapper.
 *
 * This is the ONLY module in the codebase allowed to import `@quantiqen/sdk`.
 * It must never be imported by a client component or by Edge middleware.
 *
 * Design notes:
 * - The SDK constructor throws on a missing/malformed API key, so construction
 *   is lazy and guarded by the `qtn_{live|test|dev}_` format check.
 * - When `QUANTIQEN_API_KEY` is unset or malformed every helper is a no-op,
 *   which keeps local development, CI and Wave 0 builds safe.
 * - The SDK batches in memory. Serverless functions must call
 *   `flushQuantiqen()` from `after()` in `next/server` so pending events are
 *   sent before the invocation ends.
 */

import { QuantiqenClient } from "@quantiqen/sdk";
import type { Severity } from "@quantiqen/sdk";

if (typeof window !== "undefined") {
  throw new Error(
    "[quantiqen] This module is server-only and must never be imported by client code."
  );
}

const DEFAULT_SOURCE = "anantnetra-website";
const API_KEY_PATTERN = /^qtn_(live|test|dev)_/;
const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const SENSITIVE_KEY_PATTERN =
  /token|secret|key|password|authorization|cookie|email|ip|session/i;
const MAX_STRING_LENGTH = 280;
const MAX_ENTRIES = 20;

export type QuantiqenLogLevel = "debug" | "info" | "warn" | "error" | "fatal";
export type QuantiqenAttributes = Record<string, unknown>;

export interface TrackLogInput {
  level: QuantiqenLogLevel;
  message: string;
  attributes?: QuantiqenAttributes;
  idempotencyKey?: string;
}

export interface TrackEventInput {
  eventType: string;
  eventCategory: string;
  severity: Severity;
  payload?: QuantiqenAttributes;
  idempotencyKey?: string;
}

interface QuantiqenGlobal {
  __quantiqenClient?: QuantiqenClient | null;
  __quantiqenShutdownHooked?: boolean;
}

const globalForQuantiqen = globalThis as typeof globalThis & QuantiqenGlobal;

function readEnv(name: string): string | undefined {
  const value = process.env[name];
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function truncate(value: string): string {
  const redacted = value.replace(/qtn_(live|test|dev)_[A-Za-z0-9_-]+/g, "qtn_***");
  return redacted.length > MAX_STRING_LENGTH
    ? `${redacted.slice(0, MAX_STRING_LENGTH)}…`
    : redacted;
}

function sanitizeValue(value: unknown): unknown {
  if (value === null) return null;
  if (typeof value === "string") return truncate(value);
  if (typeof value === "number" || typeof value === "boolean") return value;
  if (Array.isArray(value)) {
    return value
      .slice(0, MAX_ENTRIES)
      .map((item) => sanitizeValue(item))
      .filter((item) => item !== undefined);
  }
  // Drop objects, functions, symbols and Errors: they may carry secrets,
  // request bodies or stack traces.
  return undefined;
}

/**
 * Defensive scrub before anything leaves the process. The platform also
 * redacts secret-looking keys, but the SDK docs explicitly say not to rely on
 * redaction alone.
 */
export function sanitizePayload(
  input: QuantiqenAttributes | undefined
): Record<string, unknown> {
  const output: Record<string, unknown> = {};
  if (!input) return output;

  let count = 0;
  for (const [key, value] of Object.entries(input)) {
    if (count >= MAX_ENTRIES) break;
    if (SENSITIVE_KEY_PATTERN.test(key)) continue;

    const sanitized = sanitizeValue(value);
    if (sanitized === undefined) continue;

    output[key] = sanitized;
    count += 1;
  }

  return output;
}

export function isQuantiqenConfigured(): boolean {
  const apiKey = readEnv("QUANTIQEN_API_KEY");
  return Boolean(apiKey && API_KEY_PATTERN.test(apiKey));
}

function createClient(): QuantiqenClient | null {
  const apiKey = readEnv("QUANTIQEN_API_KEY");
  if (!apiKey || !API_KEY_PATTERN.test(apiKey)) return null;

  try {
    return new QuantiqenClient({
      apiKey,
      baseUrl: readEnv("QUANTIQEN_BASE_URL"),
      // Bounded cost per serverless invocation: telemetry is best-effort, so
      // one retry is enough. The SDK default of 3 can hold a function open for
      // too long when the collector is unreachable.
      maxRetries: 1,
      logger: (message: string) => {
        // The SDK may include HTTP status detail; it never includes the key.
        console.warn(`[quantiqen] ${message}`);
      },
    });
  } catch (error) {
    console.warn(
      "[quantiqen] Failed to initialise client:",
      error instanceof Error ? error.message : "unknown error"
    );
    return null;
  }
}

/**
 * One client per process (HMR-safe). Returns `null` when telemetry is not
 * configured, in which case every helper below is a no-op.
 */
export function getQuantiqenClient(): QuantiqenClient | null {
  if (globalForQuantiqen.__quantiqenClient !== undefined) {
    return globalForQuantiqen.__quantiqenClient;
  }

  const client = createClient();
  globalForQuantiqen.__quantiqenClient = client;
  return client;
}

function buildCommon(idempotencyKey?: string) {
  const rawAssetId = readEnv("QUANTIQEN_ASSET_ID");
  const assetId =
    rawAssetId && UUID_PATTERN.test(rawAssetId) ? rawAssetId : undefined;

  return {
    source: readEnv("QUANTIQEN_SOURCE") ?? DEFAULT_SOURCE,
    occurredAt: new Date().toISOString(),
    ...(assetId ? { assetId } : {}),
    ...(idempotencyKey ? { idempotencyKey } : {}),
  };
}

export async function trackLog(input: TrackLogInput): Promise<void> {
  const client = getQuantiqenClient();
  if (!client) return;

  try {
    await client.sendLog(
      {
        level: input.level,
        message: truncate(input.message),
        attributes: sanitizePayload(input.attributes),
      },
      buildCommon(input.idempotencyKey)
    );
  } catch (error) {
    console.warn(
      "[quantiqen] trackLog failed:",
      error instanceof Error ? error.message : "unknown error"
    );
  }
}

export async function trackEvent(input: TrackEventInput): Promise<void> {
  const client = getQuantiqenClient();
  if (!client) return;

  try {
    await client.sendEvent({
      eventType: input.eventType,
      eventCategory: input.eventCategory,
      severity: input.severity,
      ...buildCommon(input.idempotencyKey),
      payload: sanitizePayload(input.payload),
    });
  } catch (error) {
    console.warn(
      "[quantiqen] trackEvent failed:",
      error instanceof Error ? error.message : "unknown error"
    );
  }
}

/**
 * Forwards the error type and a truncated message only. Stack traces are
 * deliberately never forwarded — they can contain paths and configuration.
 */
export async function trackError(
  error: unknown,
  context?: QuantiqenAttributes
): Promise<void> {
  const name = error instanceof Error && error.name ? error.name : "Error";
  const message =
    error instanceof Error && error.message ? error.message : "Unknown error";

  await trackLog({
    level: "error",
    message: `${name}: ${truncate(message)}`,
    attributes: context,
  });
}

/** Flush pending events. Safe to call when telemetry is not configured. */
export async function flushQuantiqen(): Promise<void> {
  const client = getQuantiqenClient();
  if (!client) return;

  try {
    await client.flush();
  } catch (error) {
    console.warn(
      "[quantiqen] flush failed:",
      error instanceof Error ? error.message : "unknown error"
    );
  }
}

/** Flush and stop the SDK timer on graceful shutdown (long-running processes). */
export async function shutdownQuantiqen(): Promise<void> {
  const client = globalForQuantiqen.__quantiqenClient;
  if (!client) return;

  try {
    await client.shutdown();
  } catch (error) {
    console.warn(
      "[quantiqen] shutdown failed:",
      error instanceof Error ? error.message : "unknown error"
    );
  }
}

export function ensureQuantiqenShutdownHooks(): void {
  if (globalForQuantiqen.__quantiqenShutdownHooked) return;
  globalForQuantiqen.__quantiqenShutdownHooked = true;

  // SIGTERM only: it is what container/serverless platforms send on graceful
  // stop. We deliberately do not intercept SIGINT so the Next.js dev server's
  // Ctrl+C behaviour is unchanged. Per-request `after()` flush is the real
  // delivery guarantee in serverless anyway.
  process.once("SIGTERM", () => {
    void shutdownQuantiqen();
  });
}
