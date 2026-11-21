/**
 * Next.js server instrumentation (Node.js runtime only).
 *
 * `register()` runs once per server instance; `onRequestError()` forwards
 * unhandled server request errors to QUANTIQEN. The QUANTIQEN SDK is imported
 * dynamically so it is never evaluated in the Edge runtime.
 */

type RequestErrorContext = {
  routerKind: "Pages Router" | "App Router";
  routePath: string;
  routeType: "render" | "route" | "action" | "proxy";
};

export async function register(): Promise<void> {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;
  // Do not construct the client (or start its timer) during `next build`.
  if (process.env.NEXT_PHASE === "phase-production-build") return;

  const { getQuantiqenClient, ensureQuantiqenShutdownHooks } = await import(
    "@/lib/quantiqen/client"
  );

  getQuantiqenClient();
  ensureQuantiqenShutdownHooks();
}

export async function onRequestError(
  error: unknown,
  request: { path: string; method: string },
  context: RequestErrorContext
): Promise<void> {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;

  const { trackError, flushQuantiqen } = await import("@/lib/quantiqen/client");

  // Request headers are deliberately NOT forwarded: they contain cookies,
  // authorization material and other sensitive values.
  await trackError(error, {
    route: context.routePath,
    routeType: context.routeType,
    method: request.method,
    routerKind: context.routerKind,
  });

  // Serverless functions cannot rely on the SDK's batch timer.
  await flushQuantiqen();
}
