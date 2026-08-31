/**
 * Serve the existing single-file 캠퍼스타임 app at `/` on the deployed build.
 * HTML is bundled via `?raw` because Vercel CDN static files are not readable
 * from the serverless function.
 */
import campustimeHtml from "../../public/campustime.html?raw";

interface Event {
  url: URL;
  req: { method: string; headers: Headers };
}

export default async function campustimeHtmlMiddleware(
  event: Event,
  next: () => unknown | Promise<unknown>,
): Promise<unknown> {
  const method = (event.req.method ?? "GET").toUpperCase();
  if (method !== "GET") return next();
  const path = event.url.pathname;
  if (path !== "/" && path !== "/index.html") return next();
  if (event.url.searchParams.get("install") === "1") return next();
  return new Response(campustimeHtml, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-cache",
    },
  });
}
