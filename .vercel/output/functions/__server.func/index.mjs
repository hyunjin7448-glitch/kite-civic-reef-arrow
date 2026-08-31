globalThis.__nitro_main__ = import.meta.url;
import { i as toEventHandler, n as HTTPError, o as NodeResponse, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region scripts/install-page.html?raw
var install_page_default = "<!DOCTYPE html>\n<html lang=\"en\" class=\"device-desktop\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1, viewport-fit=cover\"\n    />\n    <meta name=\"color-scheme\" content=\"dark\" />\n    <meta name=\"theme-color\" content=\"#000000\" />\n    <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\" />\n    <meta name=\"apple-mobile-web-app-title\" content=\"{{APP_NAME}}\" />\n    <title>Add {{APP_NAME}} to your Home Screen</title>\n    <link rel=\"manifest\" href=\"/__grok/manifest.webmanifest\" />\n    <link rel=\"apple-touch-icon\" href=\"/__grok/icon-180.png\" />\n    <link rel=\"stylesheet\" href=\"/__grok/install/styles.css\" />\n    <script>\n      (function () {\n        var ua = navigator.userAgent || \"\";\n        var touch = navigator.maxTouchPoints || 0;\n        var isiPad = /iPad/.test(ua) || (/Macintosh/.test(ua) && touch > 1);\n        var isiPhone = /iPhone|iPod/.test(ua);\n        var isIOS = isiPhone || isiPad;\n        var isAndroid = /Android/i.test(ua);\n        var isAndroidPhone = isAndroid && /Mobile/i.test(ua);\n        var isAndroidTablet = isAndroid && !/Mobile/i.test(ua);\n        var minSide = Math.min(screen.width || 0, screen.height || 0);\n        var maxSide = Math.max(screen.width || 0, screen.height || 0);\n\n        var type = \"desktop\";\n        if (isiPhone) type = \"phone\";\n        else if (isiPad || isAndroidTablet) type = \"tablet\";\n        else if (isAndroidPhone) type = \"phone\";\n        else if (touch > 0 && minSide > 0 && minSide <= 500) type = \"phone\";\n        else if (touch > 0 && minSide > 500 && maxSide <= 1400) type = \"tablet\";\n\n        var iosMajor = null;\n        var osToken = null;\n        var safariToken = null;\n        var iphoneOs = ua.match(/iPhone OS (\\d+)[._]/);\n        var ipadOs = ua.match(/CPU OS (\\d+)[._](\\d+) like Mac OS X/);\n        var safariVer = ua.match(/Version\\/(\\d+)[._]/);\n        if (iphoneOs) osToken = parseInt(iphoneOs[1], 10);\n        else if (ipadOs) osToken = parseInt(ipadOs[1], 10);\n        if (isIOS && safariVer) safariToken = parseInt(safariVer[1], 10);\n        if (osToken != null || safariToken != null) {\n          iosMajor = Math.max(osToken || 0, safariToken || 0);\n        }\n\n        var root = document.documentElement;\n        var classes = [\"device-\" + type];\n        if (iosMajor != null) {\n          root.dataset.ios = String(iosMajor);\n          classes.push(iosMajor >= 27 ? \"ios-27-plus\" : \"ios-below-27\");\n        }\n        root.className = classes.join(\" \");\n      })();\n    <\/script>\n  </head>\n  <body>\n    <div class=\"page\">\n      <header class=\"powered\" aria-label=\"Powered by Grok\">\n        <span class=\"powered-by\">Powered by</span>\n        <span class=\"powered-brand\">\n          <img\n            class=\"grok-logo\"\n            src=\"/__grok/install/assets/homescreen/logo-grok.svg\"\n            width=\"14\"\n            height=\"14\"\n            alt=\"\"\n          />\n          <span class=\"powered-grok\">Grok</span>\n        </span>\n      </header>\n\n      <main class=\"content\">\n        <div class=\"ob\" aria-hidden=\"true\">\n          <img\n            class=\"ob-img ob-phone\"\n            src=\"/__grok/install/assets/homescreen/ob-phone.png\"\n            width=\"338\"\n            height=\"294\"\n            alt=\"\"\n          />\n          <img\n            class=\"ob-img ob-ipad\"\n            src=\"/__grok/install/assets/homescreen/ob-ipad.png\"\n            width=\"634\"\n            height=\"294\"\n            alt=\"\"\n          />\n        </div>\n\n        <section class=\"copy\">\n          <h1>Add {{APP_NAME}} to your&nbsp;Home&nbsp;Screen</h1>\n\n          <div class=\"steps\">\n            <p class=\"step step-tap step-ios27\">\n              <span class=\"muted\">Tap</span>\n              <span class=\"glass glass--icon\" aria-hidden=\"true\">\n                <img src=\"/__grok/install/assets/homescreen/glass-puzzle.svg\" width=\"24\" height=\"24\" alt=\"\" />\n              </span>\n              <span class=\"muted loc loc-phone\">in the bottom bar, then</span>\n              <span class=\"muted loc loc-ipad\">in the tool bar, then</span>\n              <span class=\"glass glass--icon\" aria-hidden=\"true\">\n                <img src=\"/__grok/install/assets/homescreen/glass-share.svg\" width=\"24\" height=\"24\" alt=\"\" />\n              </span>\n            </p>\n\n            <p class=\"step step-tap step-ios-legacy\">\n              <span class=\"muted\">Tap</span>\n              <span class=\"glass glass--icon\" aria-hidden=\"true\">\n                <img src=\"/__grok/install/assets/homescreen/glass-share.svg\" width=\"24\" height=\"24\" alt=\"\" />\n              </span>\n              <span class=\"muted loc loc-phone\">in the bottom bar</span>\n              <span class=\"muted loc loc-ipad\">in the tool bar</span>\n            </p>\n\n            <p class=\"step step-select\">\n              <span class=\"muted\">Select</span>\n              <span class=\"add-label\">\n                <img\n                  class=\"plus-icon\"\n                  src=\"/__grok/install/assets/homescreen/plus.svg\"\n                  width=\"16\"\n                  height=\"16\"\n                  alt=\"\"\n                />\n                <span class=\"add-text\">Add to Home Screen</span>\n              </span>\n            </p>\n          </div>\n        </section>\n      </main>\n\n      <main class=\"content content-desktop\">\n        <section class=\"copy\">\n          <h1>Open this link on your iPhone&nbsp;or&nbsp;iPad</h1>\n          <p class=\"desktop-note\">\n            This page shows how to add {{APP_NAME}} to an iOS Home Screen.\n          </p>\n          <a class=\"desktop-open\" href=\"{{APP_URL}}\">Open {{APP_NAME}}</a>\n        </section>\n      </main>\n    </div>\n  </body>\n</html>\n";
//#endregion
//#region \0virtual:grok-og-identity
var grokOgIdentity = { "site": {} };
//#endregion
//#region scripts/grok-pwa-shared.mjs
/**
* Single source of truth for platform head chrome (PWA, extensions.js, OG),
* shared by the Vite plugin and Nitro middleware. Plain ESM so `node --test`
* and the Nitro bundler can both consume it.
*/
var DEFAULT_APP_NAME = "Grok App";
var OG_SITE_REL_PATH = "src/lib/og/site.json";
var SHARE_META_KEYS = /* @__PURE__ */ new Set([
	"og:title",
	"og:description",
	"og:image",
	"og:image:width",
	"og:image:height",
	"og:type",
	"og:url",
	"og:site_name",
	"twitter:card",
	"twitter:title",
	"twitter:image",
	"twitter:description",
	"x:game:image",
	"x:game:image:width",
	"x:game:image:height"
]);
function escapeHtml(value) {
	return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#39;");
}
/** Inverse of escapeHtml. Decode &amp; last so a single pass undoes one encode. */
function unescapeHtml(value) {
	return String(value).replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", "\"").replaceAll("&#39;", "'").replaceAll("&amp;", "&");
}
/** 6-digit hex for the og.grok.me placeholder, or "" if site.color is missing/invalid. */
function placeholderCardColor(site = {}) {
	const raw = String(site.color ?? "").trim();
	const hex = raw.startsWith("#") ? raw.slice(1) : raw;
	return /^[0-9a-fA-F]{6}$/.test(hex) ? hex : "";
}
/**
* "wild-race.grok.me" → "Wild Race". Only published app hosts encode the
* display name in the first label. Preview / guest hosts are image origins
* only — slugifying them produced internal names like "Hds Abc 3000 Xy".
*/
function appNameFromHost(hostHeader) {
	const host = String(hostHeader ?? "").split(",")[0].trim().split(":")[0].toLowerCase();
	if (!host.endsWith(".grok.me")) return DEFAULT_APP_NAME;
	const slug = host.split(".")[0] ?? "";
	if (!slug || slug === "www" || !/^[a-z0-9-]{1,63}$/.test(slug)) return DEFAULT_APP_NAME;
	return slug.split("-").filter(Boolean).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ") || "Grok App";
}
/** True for Vercel system domains. Envoy rewrites origin Host to these; they SSO-protect `/og.jpg`. */
function isVercelSystemHost(host) {
	return host === "vercel.app" || host.endsWith(".vercel.app") || host === "vercel.com" || host.endsWith(".vercel.com");
}
/** Hostname suitable for absolute og:image URLs. Preview guests (X-Forwarded-Host) are allowed. */
function publicAppHost(hostHeader) {
	const host = String(hostHeader ?? "").split(",")[0].trim().split(":")[0].toLowerCase();
	if (!host || !/^[a-z0-9.-]+$/.test(host) || !host.includes(".")) return "";
	if (/^\d{1,3}(?:\.\d{1,3}){3}$/.test(host)) return "";
	if (isVercelSystemHost(host)) return "";
	return host;
}
/**
* Published apps always use `VITE_PUBLIC_HOSTNAME` (the grok.me host the
* deployer injects). Live preview has no such env, so fall back to the
* request host / X-Forwarded-Host. Never prefer request Host on a published
* app — Envoy rewrites it to `*.vercel.app`.
*/
function resolvePublicHost(hostHeader) {
	return publicAppHost(process.env?.VITE_PUBLIC_HOSTNAME) || publicAppHost(hostHeader);
}
function isInstallQuery(url) {
	const query = String(url ?? "").split("?", 2)[1] ?? "";
	const params = new URLSearchParams(query);
	const install = params.get("install");
	const platform = (params.get("platform") ?? "").toLowerCase();
	return (install === "1" || install === "true") && platform === "ios";
}
/** Paths that can carry an app document (vs assets / API / internals). */
function isDocumentPath(pathname) {
	const path = String(pathname ?? "");
	return !path.startsWith("/__grok/") && !path.startsWith("/api/") && !path.startsWith("/@") && !path.startsWith("/node_modules") && !/\.[a-z0-9]+$/i.test(path);
}
function acceptsHtml(accept) {
	const value = String(accept ?? "");
	return value === "" || value.includes("text/html") || value.includes("*/*");
}
/** The same URL without the install-tutorial params (used as the app link). */
function stripInstallParams(url) {
	const [path = "/", query = ""] = String(url ?? "/").split("?", 2);
	const params = new URLSearchParams(query);
	params.delete("install");
	params.delete("platform");
	const rest = params.toString();
	return rest ? `${path}?${rest}` : path;
}
function renderInstallPageHtml(template, { host, url } = {}) {
	return String(template).replaceAll("{{APP_NAME}}", escapeHtml(appNameFromHost(host))).replaceAll("{{APP_URL}}", escapeHtml(stripInstallParams(url)));
}
function renderWebManifest(hostHeader) {
	const name = appNameFromHost(hostHeader);
	return JSON.stringify({
		name,
		short_name: name,
		id: "/",
		start_url: "/",
		scope: "/",
		display: "standalone",
		background_color: "#000000",
		theme_color: "#000000",
		icons: [{
			src: "/__grok/icon-180.png",
			sizes: "180x180",
			type: "image/png"
		}]
	}, null, 2);
}
function grokPwaHeadTags(appName = DEFAULT_APP_NAME) {
	return [
		["manifest", "<link rel=\"manifest\" href=\"/__grok/manifest.webmanifest\">"],
		["apple-touch-icon", "<link rel=\"apple-touch-icon\" href=\"/__grok/icon-180.png\">"],
		["apple-mobile-web-app-title", `<meta name="apple-mobile-web-app-title" content="${escapeHtml(appName)}">`],
		["apple-mobile-web-app-status-bar-style", "<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">"],
		["theme-color", "<meta name=\"theme-color\" content=\"#000000\">"]
	];
}
var GROK_EXTENSIONS_SCRIPT_SRC = "https://grok.com/grok-app-builder/extensions.js";
function readGrokProjectId() {
	const fromProcess = typeof process !== "undefined" ? process.env?.VITE_PROJECT_ID : "";
	return String(fromProcess ?? "").trim();
}
function readXCreator() {
	const fromProcess = typeof process !== "undefined" ? process.env?.X_CREATOR : "";
	return String(fromProcess ?? "").trim();
}
function readXCreatorId() {
	const fromProcess = typeof process !== "undefined" ? process.env?.X_CREATOR_ID : "";
	return String(fromProcess ?? "").trim();
}
function grokXCreatorHeadTags(creator = readXCreator(), creatorId = readXCreatorId()) {
	const name = String(creator ?? "").trim();
	const id = String(creatorId ?? "").trim();
	if (!name || !id) return [];
	return [`<meta property="x:creator" content="${escapeHtml(name)}">`, `<meta property="x:creator:id" content="${escapeHtml(id)}">`];
}
/** Platform "Created with Grok" banner — injected into every HTML document. */
function grokExtensionsHeadTags(projectId = readGrokProjectId()) {
	const id = escapeHtml(projectId);
	const tags = [];
	if (projectId) tags.push(`<meta name="grok-project-id" content="${id}">`);
	tags.push(`<script src="${GROK_EXTENSIONS_SCRIPT_SRC}"${projectId ? ` data-project-id="${id}"` : ""} defer><\/script>`);
	return tags;
}
function readOgSite(cwd = process.cwd()) {
	try {
		const raw = readFileSync(join(cwd, OG_SITE_REL_PATH), "utf8");
		const parsed = JSON.parse(raw);
		return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
	} catch {
		return {};
	}
}
/** Public path of an on-disk share card, or "" if neither file exists. */
function ogCardPublicPath(cwd = process.cwd()) {
	if (existsSync(join(cwd, "public/og.jpg"))) return "/og.jpg";
	if (existsSync(join(cwd, "public/og.png"))) return "/og.png";
	return "";
}
function detectCustomOgCard(cwd = process.cwd(), site = {}) {
	if (ogCardPublicPath(cwd)) return true;
	return siteHasCustomCard(site) || Boolean(String(site.image ?? "").trim());
}
/** Snapshot for Vite/Nitro to bake into the server bundle (Vercel has no workspace FS). */
function snapshotOgIdentity(cwd = process.cwd()) {
	const site = { ...readOgSite(cwd) };
	const disk = ogCardPublicPath(cwd);
	if (disk) {
		site.card = "custom";
		site.image = disk;
	} else {
		if (siteHasCustomCard(site)) delete site.card;
		if (site.image) delete site.image;
	}
	if (existsSync(join(cwd, "public/x-banner.jpg"))) site.banner = site.banner || "/x-banner.jpg";
	return { site };
}
function ogServiceUrl() {
	return (String(process.env?.VITE_OG_SERVICE_URL ?? "").trim() || "https://og.grok.me").replace(/\/+$/, "");
}
function titleFromDocument(html) {
	const match = String(html ?? "").match(/<title\b[^>]*>([^<]*)<\/title>/i);
	return match ? unescapeHtml(match[1]).trim() : "";
}
function resolveOgTitle(site = {}, appName = DEFAULT_APP_NAME, host = "", documentTitle = "") {
	const fromSite = String(site.title ?? "").trim();
	if (fromSite) return fromSite;
	const fromDoc = String(documentTitle ?? "").trim();
	if (fromDoc) return fromDoc;
	const fromHost = appNameFromHost(host);
	if (fromHost && fromHost !== "Grok App") return fromHost;
	return String(appName ?? "").trim() || "Grok App";
}
function siteHasCustomCard(site = {}) {
	return String(site.card ?? "").toLowerCase() === "custom";
}
/**
* Preview: public/og.jpg|png on disk.
* Vercel: the bake (`card=custom` / `image`) because the function cannot stat public/.
* Otherwise empty — caller emits the og.grok.me placeholder.
*/
function resolveOgCardAsset(site = {}, cwd = process.cwd()) {
	return ogCardPublicPath(cwd) || (detectCustomOgCard(cwd, site) ? String(site.image ?? "").trim() || "/og.jpg" : "");
}
/** Stamp `card=custom` when public/og.jpg or public/og.png is on disk. */
function applyCustomCardFromFs(site, cwd) {
	const disk = ogCardPublicPath(cwd);
	if (!disk) return site;
	return {
		...site,
		card: "custom",
		image: disk
	};
}
function grokOgHeadTags({ host = "", appName = DEFAULT_APP_NAME, site = {}, documentTitle = "", cwd = process.cwd() } = {}) {
	const title = resolveOgTitle(site, appName, host, documentTitle);
	const publicHost = resolvePublicHost(host);
	const tags = [`<meta name="twitter:card" content="summary_large_image">`, `<meta property="og:title" content="${escapeHtml(title)}">`];
	const description = String(site.description ?? "").trim();
	if (description) tags.push(`<meta property="og:description" content="${escapeHtml(description)}">`);
	if (String(site.type ?? "").toLowerCase() === "x:game") tags.push(`<meta property="og:type" content="x:game">`);
	if (publicHost) {
		const asset = resolveOgCardAsset(site, cwd);
		const custom = Boolean(asset);
		let image = custom ? `https://${publicHost}${asset.startsWith("/") ? asset : `/${asset}`}` : `${ogServiceUrl()}/v1/card.png?host=${encodeURIComponent(publicHost)}&title=${encodeURIComponent(title)}`;
		const color = !custom ? placeholderCardColor(site) : "";
		if (color) image += `&color=${encodeURIComponent(color)}`;
		tags.push(`<meta property="og:image" content="${escapeHtml(image)}">`);
		tags.push(`<meta property="og:image:width" content="1200">`);
		tags.push(`<meta property="og:image:height" content="630">`);
		const banner = String(site.banner ?? "").trim();
		if (banner) {
			const bannerUrl = `https://${publicHost}${banner.startsWith("/") ? banner : `/${banner}`}`;
			tags.push(`<meta property="x:game:image" content="${escapeHtml(bannerUrl)}">`);
			tags.push(`<meta property="x:game:image:width" content="1200">`);
			tags.push(`<meta property="x:game:image:height" content="264">`);
		}
	}
	return tags;
}
function stripShareMetaTags(html) {
	return String(html).replace(/<meta\b[^>]*>/gi, (tag) => {
		const attrs = [...tag.matchAll(/\b(?:property|name)\s*=\s*["']([^"']+)["']/gi)];
		for (const match of attrs) if (SHARE_META_KEYS.has(String(match[1]).toLowerCase())) return "";
		return tag;
	});
}
function insertAfterHeadOpen(html, snippet) {
	if (/<head\b[^>]*>/i.test(html)) return html.replace(/<head\b[^>]*>/i, (open) => `${open}${snippet}`);
	if (/<html\b[^>]*>/i.test(html)) return html.replace(/<html\b[^>]*>/i, (open) => `${open}<head>${snippet}</head>`);
	return `<!doctype html><html><head>${snippet}</head>${html}`;
}
function insertBeforeHeadClose(html, snippet) {
	if (/<\/head>/i.test(html)) return html.replace(/<\/head>/i, `${snippet}</head>`);
	return insertAfterHeadOpen(html, snippet);
}
function normalizeHeadContext(ctx = {}) {
	const cwd = ctx.cwd ?? process.cwd();
	const site = applyCustomCardFromFs(ctx.site !== void 0 ? ctx.site : snapshotOgIdentity(cwd).site, cwd);
	return {
		appName: resolveOgTitle(site, ctx.appName ?? "Grok App", ctx.host ?? ""),
		projectId: ctx.projectId ?? readGrokProjectId(),
		creator: ctx.creator ?? readXCreator(),
		creatorId: ctx.creatorId ?? readXCreatorId(),
		host: ctx.host ?? "",
		cwd,
		site
	};
}
function injectGrokPwaHead(html, ctx = {}) {
	if (typeof html !== "string") return html;
	const { site, projectId, creator, creatorId, host, cwd } = normalizeHeadContext(ctx);
	const documentTitle = titleFromDocument(html);
	const appName = resolveOgTitle(site, ctx.appName ?? "Grok App", host, documentTitle);
	let next = stripShareMetaTags(html);
	const missing = grokPwaHeadTags(appName).filter(([key]) => {
		if (key === "manifest") return !next.includes("href=\"/__grok/manifest.webmanifest\"");
		if (key === "apple-touch-icon") return !next.includes("href=\"/__grok/icon-180.png\"");
		return !next.includes(`name="${key}"`);
	}).map(([, tag]) => tag);
	next = insertAfterHeadOpen(next, grokOgHeadTags({
		host,
		appName,
		site,
		documentTitle,
		cwd
	}).join(""));
	if (!next.includes("/grok-app-builder/extensions.js")) missing.push(...grokExtensionsHeadTags(projectId));
	else if (projectId && !next.includes("name=\"grok-project-id\"")) missing.push(`<meta name="grok-project-id" content="${escapeHtml(projectId)}">`);
	if (projectId && !next.includes("property=\"grok:app_id\"") && !next.includes("property='grok:app_id'")) missing.push(`<meta property="grok:app_id" content="${escapeHtml(projectId)}">`);
	const creatorTags = grokXCreatorHeadTags(creator, creatorId);
	if (creatorTags.length > 0) {
		if (!(next.includes("property=\"x:creator\" content=") || next.includes("property='x:creator' content="))) missing.push(creatorTags[0]);
		if (!next.includes("property=\"x:creator:id\"")) missing.push(creatorTags[1]);
	}
	if (missing.length === 0) return next;
	return insertBeforeHeadClose(next, missing.join(""));
}
function findHeadClose(buf) {
	return buf.toString("latin1").search(/<\/head>/i);
}
/**
* Streaming head injector: buffers only until `</head>` (ASCII marker; never
* appears inside a UTF-8 continuation byte), overwrites share-card metas,
* then passes later chunks through so streaming SSR keeps streaming.
*/
function createHeadInjector(ctx = {}) {
	const normalized = normalizeHeadContext(ctx);
	/** @type {Buffer[]} */
	let pending = [];
	let done = false;
	const apply = (html) => injectGrokPwaHead(html, {
		appName: normalized.appName,
		projectId: normalized.projectId,
		creator: normalized.creator,
		creatorId: normalized.creatorId,
		host: normalized.host,
		cwd: normalized.cwd,
		site: normalized.site
	});
	return {
		/** @param {Uint8Array | string} chunk @returns {Buffer[]} chunks ready to emit */
		push(chunk) {
			const buf = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
			if (done) return [buf];
			pending.push(buf);
			const joined = Buffer.concat(pending);
			const at = findHeadClose(joined);
			if (at === -1) return [];
			done = true;
			pending = [];
			const closeLen = joined.toString("latin1", at).match(/^<\/head>/i)[0].length;
			const head = apply(joined.subarray(0, at + closeLen).toString("utf8"));
			return [Buffer.concat([Buffer.from(head, "utf8"), joined.subarray(at + closeLen)])];
		},
		/** @returns {Buffer[]} whatever is still buffered (no `</head>` seen) */
		flush() {
			if (done || pending.length === 0) return [];
			const rest = Buffer.concat(pending);
			pending = [];
			done = true;
			return [Buffer.from(apply(rest.toString("utf8")), "utf8")];
		}
	};
}
//#endregion
//#region server/middleware/grok-pwa.ts
/**
* Deployed-app (Nitro) half of the platform PWA chrome. Auto-registered as
* global h3 middleware because vite.config.ts sets `serverDir: "./server"` —
* without that option Nitro v3 never scans this directory.
*
* - `?install=1&platform=ios` on a document path → the Home Screen tutorial,
*   bundled into the server build via `?raw` (the public/ directory is CDN
*   static output on Vercel and not readable from the function).
* - `/__grok/manifest.webmanifest` → per-app-named manifest (kept out of
*   public/ so this dynamic response is the only one).
* - Other HTML documents → stream-inject PWA + OG head tags at `</head>`.
*   OG identity is baked via `virtual:grok-og-identity` at `vite build`
*   (this function cannot read `src/lib/og/site.json` or `public/og.jpg`).
*   This must be a middleware transforming `next()`: h3 discards the `response`
*   runtime hook's return value, and `render:html` does not exist in Nitro v3.
*/
function requestHost(event) {
	return event.req.headers.get("x-forwarded-host") ?? event.req.headers.get("host") ?? event.url.host;
}
function injectHeadStreaming(response, host) {
	const injector = createHeadInjector({
		host,
		site: grokOgIdentity.site
	});
	const transformed = response.body.pipeThrough(new TransformStream({
		transform(chunk, controller) {
			for (const out of injector.push(chunk)) controller.enqueue(out);
		},
		flush(controller) {
			for (const out of injector.flush()) controller.enqueue(out);
		}
	}));
	const headers = new Headers(response.headers);
	headers.delete("content-length");
	return new Response(transformed, {
		status: response.status,
		statusText: response.statusText,
		headers
	});
}
async function grokPwaMiddleware(event, next) {
	if ((event.req.method ?? "GET").toUpperCase() !== "GET") return next();
	const path = event.url.pathname;
	const urlWithQuery = path + event.url.search;
	if (path === "/__grok/manifest.webmanifest" || path === "/__grok/manifest.json") return new Response(renderWebManifest(requestHost(event)), { headers: {
		"content-type": "application/manifest+json; charset=utf-8",
		"cache-control": "no-cache"
	} });
	if (isInstallQuery(urlWithQuery) && isDocumentPath(path) && acceptsHtml(event.req.headers.get("accept"))) {
		const html = renderInstallPageHtml(install_page_default, {
			host: requestHost(event),
			url: urlWithQuery
		});
		return new Response(html, { headers: {
			"content-type": "text/html; charset=utf-8",
			"cache-control": "no-cache"
		} });
	}
	if (!isDocumentPath(path)) return next();
	const result = await next();
	if (result instanceof Response && result.body && String(result.headers.get("content-type") ?? "").includes("text/html") && !result.headers.get("content-encoding")) return injectHeadStreaming(result, requestHost(event));
	return result;
}
//#endregion
//#region public/campustime.html?raw
var campustime_default = "<!DOCTYPE html>\n<html lang=\"ko\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover\">\n<meta name=\"theme-color\" content=\"#ffffff\">\n<meta name=\"format-detection\" content=\"telephone=no\">\n<title>캠퍼스타임</title>\n<style>\n  :root{\n    --red:#E8443C; --red-dim:#FDECEA;\n    --ink:#15171B; --sub:#8C939C; --faint:#B9BFC7;\n    --line:#EDEFF2; --bg:#F2F3F5; --card:#FFFFFF;\n    --r:14px;\n    --font:-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Malgun Gothic','맑은 고딕',\n      'Noto Sans KR',system-ui,sans-serif;\n    --safe-b:env(safe-area-inset-bottom,0px);\n  }\n  *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}\n  html,body{margin:0;padding:0;background:#DCDEE2;color:var(--ink);font-family:var(--font);\n    -webkit-text-size-adjust:100%}\n  body{display:flex;justify-content:center;height:100vh;height:100dvh;overflow:hidden;\n    overscroll-behavior:none}\n  #shell{width:100%;max-width:480px;height:100%;background:var(--bg);position:relative;\n    display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 0 1px rgba(0,0,0,.05)}\n  button{font-family:inherit;font-size:inherit;color:inherit;background:none;border:none;cursor:pointer}\n  input,textarea,select{font-family:inherit;font-size:16px;color:inherit}\n  :focus-visible{outline:2px solid var(--red);outline-offset:2px}\n\n  header{position:sticky;top:0;z-index:20;height:52px;flex:0 0 auto;background:var(--card);\n    border-bottom:1px solid var(--line);display:flex;align-items:center;gap:4px;padding:0 6px 0 12px}\n  .h-title{flex:1;min-width:0;font-size:17px;font-weight:800;letter-spacing:-.02em;\n    overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n  .brand{font-size:19px;font-weight:900;letter-spacing:-.04em;color:var(--red)}\n  .brand span{color:var(--ink)}\n  .icon-btn{width:40px;height:40px;border-radius:10px;display:grid;place-items:center;\n    font-size:19px;color:var(--sub)}\n  .icon-btn:active{background:var(--bg)}\n  .quiet{color:#D6DAE0;font-size:17px;letter-spacing:2px}\n\n  main{flex:1 1 auto;min-height:0;overflow-y:auto;-webkit-overflow-scrolling:touch;\n    overscroll-behavior:contain;padding-bottom:calc(76px + var(--safe-b))}\n  .pad{padding:12px}\n  .card{background:var(--card);border-radius:var(--r);overflow:hidden}\n  .card + .card{margin-top:10px}\n  .sec{padding:14px 14px 6px;font-size:12.5px;font-weight:800;color:var(--sub);letter-spacing:-.01em}\n  .note{padding:0 14px 14px;font-size:12px;color:var(--faint);line-height:1.6}\n\n  /* 목록 */\n  .p-item{display:block;width:100%;text-align:left;background:var(--card);padding:14px;\n    border-bottom:1px solid var(--line)}\n  .p-item:active{background:#FAFAFB}\n  .p-head{display:flex;align-items:center;gap:6px;margin-bottom:7px}\n  .avatar{width:22px;height:22px;border-radius:50%;background:var(--bg);display:grid;\n    place-items:center;font-size:11px;color:var(--sub);flex:0 0 auto}\n  .p-who{font-size:12.5px;font-weight:600;color:#4B5158}\n  .p-time{font-size:11.5px;color:var(--faint)}\n  .p-main{display:flex;gap:11px;align-items:flex-start}\n  .p-txt{flex:1;min-width:0}\n  .p-title{font-size:15px;font-weight:700;letter-spacing:-.025em;line-height:1.35;margin-bottom:4px}\n  .p-body{font-size:13.5px;color:#5C636B;line-height:1.5;\n    display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}\n  .p-thumb{width:58px;height:58px;border-radius:10px;flex:0 0 auto;background:var(--bg);\n    display:grid;place-items:center;font-size:17px;color:var(--faint)}\n  .p-meta{display:flex;gap:12px;margin-top:9px;font-size:12px;color:var(--faint)}\n  .p-meta b{font-weight:600}\n  .p-meta .on{color:var(--red)}\n\n  /* 상세 */\n  .d-wrap{background:var(--card);padding:16px 14px 14px}\n  .d-head{display:flex;align-items:center;gap:9px;margin-bottom:14px}\n  .d-head .avatar{width:34px;height:34px;font-size:14px}\n  .d-who{font-size:13.5px;font-weight:700}\n  .d-sub{font-size:11.5px;color:var(--faint);margin-top:2px}\n  .d-title{margin:0 0 8px;font-size:18px;font-weight:800;letter-spacing:-.03em;line-height:1.35}\n  .d-body{font-size:15px;line-height:1.65;white-space:pre-wrap;color:#22262B}\n  .shot{margin-top:13px;border-radius:12px;background:var(--bg);border:1px dashed #DDE1E6;\n    padding:26px 16px;display:flex;flex-direction:column;align-items:center;gap:7px;\n    color:var(--sub);font-size:13px;text-align:center;line-height:1.45}\n  .shot i{font-style:normal;font-size:20px;opacity:.5}\n  .d-actions{display:flex;gap:8px;margin-top:18px}\n  .pill{display:inline-flex;align-items:center;gap:5px;border:1px solid var(--line);border-radius:999px;\n    padding:7px 13px;font-size:12.5px;color:var(--sub);font-weight:600;background:var(--card)}\n  .pill.on{border-color:var(--red);color:var(--red);background:var(--red-dim)}\n\n  .c-head{background:var(--card);padding:12px 14px 4px;font-size:12.5px;font-weight:800;color:var(--sub)}\n  .c-item{display:flex;gap:9px;padding:11px 14px;background:var(--card);border-top:1px solid var(--line)}\n  .c-item.reply{padding-left:38px;background:#FAFBFC}\n  .c-main{flex:1;min-width:0}\n  .c-who{font-size:12.5px;font-weight:700}\n  .c-who em{font-style:normal;color:var(--red);font-size:10.5px;margin-left:4px}\n  .c-text{font-size:14px;line-height:1.5;margin-top:3px;white-space:pre-wrap;word-break:break-word}\n  .c-foot{display:flex;gap:12px;margin-top:6px;font-size:11.5px;color:var(--faint)}\n  .c-foot button{font-size:11.5px;color:var(--faint);font-weight:600}\n  .c-foot button.on{color:var(--red)}\n\n  .typing{display:flex;gap:5px;align-items:center;padding:12px 14px;background:var(--card);\n    border-top:1px solid var(--line);font-size:12.5px;color:var(--faint)}\n  .typing b{font-weight:600;margin-left:4px}\n  .dot{width:5px;height:5px;border-radius:50%;background:var(--faint);animation:blink 1.1s infinite}\n  .dot:nth-child(2){animation-delay:.16s}\n  .dot:nth-child(3){animation-delay:.32s}\n  @keyframes blink{0%,65%,100%{opacity:.25}30%{opacity:1}}\n\n  .choices{background:var(--card);border-top:1px solid var(--line);padding:13px 14px 5px}\n  .choices .lbl{font-size:11.5px;font-weight:800;color:var(--faint);margin-bottom:9px}\n  .choice{display:block;width:100%;text-align:left;border:1px solid var(--line);border-radius:12px;\n    padding:11px 13px;font-size:13.5px;line-height:1.45;margin-bottom:8px;background:#fff}\n  .choice:active{background:var(--red-dim);border-color:var(--red)}\n\n  .composer{position:sticky;bottom:0;display:flex;gap:8px;align-items:center;background:var(--card);\n    border-top:1px solid var(--line);padding:9px 12px calc(9px + var(--safe-b))}\n  .composer input{flex:1;min-width:0;border:none;background:var(--bg);border-radius:999px;\n    padding:11px 14px;outline:none;font-size:16px}\n  .send{color:var(--red);font-weight:800;font-size:14px;padding:6px}\n\n  /* 설정 */\n  .row{display:flex;align-items:center;gap:10px;padding:13px 14px;border-top:1px solid var(--line)}\n  .row:first-of-type{border-top:none}\n  .row .k{flex:1;min-width:0;font-size:14px}\n  .row .k small{display:block;font-size:11.5px;color:var(--faint);margin-top:3px;line-height:1.45}\n  .sv{flex:0 0 auto;font-size:13px;font-weight:800;color:var(--red);min-width:52px;text-align:right}\n  .sld{padding:2px 14px 16px}\n  .sld input[type=range]{-webkit-appearance:none;appearance:none;width:100%;height:26px;\n    background:none;outline:none;margin:0;display:block}\n  .sld input[type=range]::-webkit-slider-runnable-track{height:6px;border-radius:3px;background:var(--line)}\n  .sld input[type=range]::-moz-range-track{height:6px;border-radius:3px;background:var(--line)}\n  .sld input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;\n    width:24px;height:24px;border-radius:50%;background:#fff;border:2px solid var(--red);\n    margin-top:-9px;box-shadow:0 2px 6px rgba(0,0,0,.14);cursor:pointer}\n  .sld input[type=range]::-moz-range-thumb{width:22px;height:22px;border-radius:50%;background:#fff;\n    border:2px solid var(--red);box-shadow:0 2px 6px rgba(0,0,0,.14);cursor:pointer}\n  .sld input[type=range]:active::-webkit-slider-thumb{background:var(--red-dim)}\n  .sld .ends{display:flex;justify-content:space-between;font-size:10.5px;color:var(--faint);margin-top:-2px}\n  .seg{display:flex;gap:6px;flex-wrap:wrap;padding:0 14px 14px}\n  .seg button{border:1px solid var(--line);border-radius:9px;padding:8px 11px;font-size:12.5px;\n    color:var(--sub);font-weight:600;background:#fff}\n  .seg button.on{border-color:var(--red);color:var(--red);background:var(--red-dim)}\n  .ta{width:100%;min-height:120px;border:1px solid var(--line);border-radius:10px;padding:11px;\n    font-size:16px;line-height:1.5;outline:none;resize:vertical;background:#fff;\n    font-family:ui-monospace,SFMono-Regular,Menlo,monospace}\n  .ta:focus{border-color:var(--red)}\n  .btn{display:block;width:100%;background:var(--red);color:#fff;border-radius:12px;padding:13px;\n    font-size:14.5px;font-weight:800;margin-top:9px}\n  .btn.sub{background:var(--bg);color:var(--ink)}\n  .btn.danger{background:#fff;color:var(--red);border:1px solid var(--red)}\n  .fld{padding:0 14px 14px}\n  .fld label{display:block;font-size:11.5px;font-weight:700;color:var(--sub);margin:0 0 6px}\n  .fld input,.fld select{width:100%;border:1px solid var(--line);border-radius:10px;padding:11px 12px;\n    outline:none;background:#fff;font-size:16px}\n  .src-item{display:flex;gap:10px;padding:11px 14px;border-top:1px solid var(--line);align-items:center}\n  .src-item .n{flex:1;min-width:0;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n  .src-item .c{font-size:11.5px;color:var(--faint);flex:0 0 auto}\n\n  .pp{border-top:1px solid var(--line);background:var(--card)}\n  .pp-av{width:44px;height:44px;border-radius:13px;background:var(--red-dim);color:var(--red);\n    display:grid;place-items:center;font-size:16px;font-weight:800;flex:0 0 auto;overflow:hidden}\n  .pp-av img{width:100%;height:100%;object-fit:cover;display:block}\n  .ph-box{display:flex;align-items:center;gap:12px;padding:0 0 13px}\n  .ph-prev{width:66px;height:66px;border-radius:18px;background:var(--bg);flex:0 0 auto;\n    display:grid;place-items:center;overflow:hidden;color:var(--faint);font-size:20px;\n    border:1px solid var(--line)}\n  .ph-prev img{width:100%;height:100%;object-fit:cover;display:block}\n  .ph-btns{flex:1;min-width:0;display:flex;flex-direction:column;gap:7px}\n  .ph-btns button{border:1px solid var(--line);border-radius:10px;padding:9px;font-size:13px;\n    font-weight:600;color:var(--sub);background:#fff}\n  .ph-btns button:active{border-color:var(--red);color:var(--red)}\n  .pp-b{flex:1;min-width:0}\n  .pp-n{font-size:14.5px;font-weight:700;letter-spacing:-.02em;display:block}\n  .pp-n em{font-style:normal;font-size:11px;font-weight:700;color:var(--red);background:var(--red-dim);\n    border-radius:5px;padding:2px 6px;margin-left:6px;vertical-align:1px}\n  .pp-d{display:block;font-size:12.5px;color:#5C636B;margin-top:4px;line-height:1.45}\n  .pp-m{display:block;font-size:11.5px;color:var(--faint);margin-top:4px;line-height:1.45}\n  .pp-m b{font-weight:700;color:#A6ADB6}\n  .rank{width:22px;flex:0 0 auto;font-size:13px;font-weight:800;color:var(--faint);\n    text-align:center;padding-top:1px}\n  .rank.top{color:var(--red)}\n  .hot-row{display:flex;gap:10px;width:100%;text-align:left;background:var(--card);\n    padding:13px 14px;border-bottom:1px solid var(--line)}\n  .hot-row:active{background:#FAFAFB}\n  .hot-b{flex:1;min-width:0}\n  .hot-t{font-size:14.5px;font-weight:700;letter-spacing:-.02em;line-height:1.35;\n    overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n  .hot-m{font-size:11.5px;color:var(--faint);margin-top:5px}\n  .mrow{display:block;width:100%;text-align:left;background:var(--card);padding:13px 14px;\n    border-bottom:1px solid var(--line)}\n  .mrow:active{background:#FAFAFB}\n  .mrow .src{font-size:11.5px;color:var(--faint);margin-bottom:5px;\n    overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n  .mrow .txt{font-size:14px;line-height:1.5;color:#22262B}\n  .mrow .tm{font-size:11.5px;color:var(--faint);margin-top:6px}\n  .more-btn{display:block;width:100%;padding:12px;text-align:center;font-size:12.5px;\n    color:var(--sub);font-weight:600;border-top:1px solid var(--line)}\n  /* 투표 */\n  .vbadge{display:inline-block;font-size:10px;font-weight:800;color:var(--red);background:var(--red-dim);\n    border-radius:5px;padding:2px 6px;margin-right:6px;vertical-align:2px}\n  .poll{margin-top:15px;display:flex;flex-direction:column;gap:8px}\n  .opt{display:block;width:100%;text-align:left;border:1px solid var(--line);border-radius:12px;\n    padding:13px 14px;font-size:14.5px;font-weight:600;background:#fff;position:relative;overflow:hidden}\n  .opt:active{border-color:var(--red)}\n  .opt.done{cursor:default}\n  .opt .bar{position:absolute;left:0;top:0;bottom:0;background:var(--bg);z-index:0;\n    transition:width .5s cubic-bezier(.2,.8,.3,1)}\n  .opt.mine .bar{background:var(--red-dim)}\n  .opt .lb{position:relative;z-index:1;display:flex;align-items:center;gap:8px}\n  .opt .lb span{flex:1;min-width:0}\n  .opt .pc{font-size:13px;font-weight:800;color:var(--sub);flex:0 0 auto}\n  .opt.mine .pc{color:var(--red)}\n  .opt .chk{font-size:11px;color:var(--red);font-weight:800;flex:0 0 auto}\n  .poll-sum{font-size:12px;color:var(--faint);margin-top:9px}\n  .opt-min{display:flex;gap:6px;margin-top:9px}\n  .opt-min span{flex:1;min-width:0;font-size:12px;color:var(--sub);background:var(--bg);\n    border-radius:8px;padding:7px 9px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n  .tick{display:flex;align-items:center;gap:10px;background:var(--card);\n    border-bottom:1px solid var(--line);padding:11px 14px;width:100%;text-align:left}\n  .tick:active{background:#FAFAFB}\n  .tick .lbl2{font-size:10.5px;font-weight:800;color:var(--faint);flex:0 0 auto;letter-spacing:-.01em}\n  .tick .rk{width:15px;flex:0 0 auto;font-size:12.5px;font-weight:800;color:var(--red);text-align:center}\n  .tick .tw{flex:1;min-width:0;font-size:13.5px;font-weight:600;\n    overflow:hidden;text-overflow:ellipsis;white-space:nowrap;animation:tin .4s}\n  @keyframes tin{from{opacity:0;transform:translateY(7px)}to{opacity:1;transform:none}}\n  .tick .ch{font-size:12px;color:var(--faint);flex:0 0 auto}\n  .arc-chip{display:inline-block;font-size:10px;font-weight:800;color:#7A6A2E;background:#FBF3D5;\n    border-radius:5px;padding:2px 6px;margin-right:6px;vertical-align:2px}\n  .arc-box{background:var(--card);border-top:8px solid var(--bg);padding:14px 14px 4px}\n  .arc-box .sec{padding:0 0 8px}\n  .arc-item{display:flex;gap:10px;width:100%;text-align:left;padding:11px 0;\n    border-top:1px solid var(--line);align-items:center;background:none}\n  .arc-item .no{width:20px;flex:0 0 auto;font-size:11.5px;font-weight:800;color:var(--faint);text-align:center}\n  .arc-item.now .no{color:var(--red)}\n  .arc-item .tt{flex:1;min-width:0;font-size:13.5px;\n    overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n  .arc-item.now .tt{font-weight:700}\n  .arc-item .tm{font-size:11px;color:var(--faint);flex:0 0 auto}\n  .bar-row{display:flex;align-items:center;gap:9px;padding:7px 14px}\n  .bar-row .bl{width:88px;flex:0 0 auto;font-size:12.5px;font-weight:600;\n    overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n  .bar-row .bt{flex:1;height:9px;background:var(--bg);border-radius:5px;overflow:hidden}\n  .bar-row .bt span{display:block;height:100%;background:var(--red);border-radius:5px;\n    transition:width .5s cubic-bezier(.2,.8,.3,1)}\n  .bar-row .bn{width:34px;flex:0 0 auto;text-align:right;font-size:12px;font-weight:700;color:var(--sub)}\n  .pp{padding:0}\n  .pp-main{display:flex;gap:11px;width:100%;text-align:left;padding:13px 14px 11px;\n    align-items:flex-start;background:none}\n  .pp-main:active{background:#FAFAFB}\n  .pp-int{display:inline-block;font-size:11px;font-weight:800;color:var(--red);\n    background:var(--red-dim);border-radius:6px;padding:3px 7px;margin-top:7px}\n  .pp-int.zero{color:var(--faint);background:var(--bg);font-weight:600}\n  .pp-ment{display:block;width:100%;text-align:left;padding:9px 14px 12px;font-size:12px;\n    font-weight:700;color:var(--red);background:none}\n  .pp-ment.zero{color:var(--faint);font-weight:400}\n  .pp-ment:active{background:var(--red-dim)}\n  .ptr{height:0;overflow:hidden;display:flex;align-items:center;justify-content:center;gap:9px;\n    color:var(--faint);font-size:12.5px;font-weight:600;background:var(--bg);\n    transition:height .2s cubic-bezier(.2,.8,.3,1)}\n  .ptr .ring{margin:0}\n  .ptr.on{color:var(--red)}\n  .ptr.load{height:58px}\n  .pull{display:block;width:calc(100% - 28px);margin:16px 14px 30px;padding:16px;\n    text-align:center;font-size:13px;font-weight:600;color:var(--sub);line-height:1.5;\n    background:var(--card);border:1px solid var(--line);border-radius:14px;transition:.15s}\n  .pull:active{border-color:var(--red);color:var(--red)}\n  .pull.empty{background:none;border-style:dashed;color:var(--faint);font-weight:400}\n  .pull.on{color:var(--red);font-weight:700}\n  .ring{display:block;width:26px;height:26px;margin:0 auto 9px;border-radius:50%;\n    border:2px solid var(--line);border-top-color:var(--faint);\n    transition:transform .1s linear,border-color .15s,opacity .15s;opacity:.7}\n  .pull.on .ring{border-top-color:var(--red);border-color:var(--red-dim);opacity:1}\n  .pull.load .ring{animation:spin .65s linear infinite;border-top-color:var(--red);\n    border-color:var(--red-dim);opacity:1;transform:none}\n  @keyframes spin{to{transform:rotate(360deg)}}\n  .p-item.fresh{animation:pop .45s cubic-bezier(.2,.8,.3,1)}\n  @keyframes pop{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:none}}\n  .p-item.fresh .p-title::after{content:'NEW';font-size:9.5px;font-weight:800;color:var(--red);\n    background:var(--red-dim);border-radius:4px;padding:2px 5px;margin-left:6px;vertical-align:2px;\n    animation:fade 2.4s forwards}\n  @keyframes fade{0%,70%{opacity:1}100%{opacity:0}}\n  .empty{padding:64px 24px;text-align:center;color:var(--faint);font-size:13.5px;line-height:1.7}\n  nav{position:absolute;bottom:0;left:0;right:0;width:100%;\n    height:calc(64px + var(--safe-b));\n    padding-bottom:var(--safe-b);background:rgba(255,255,255,.95);backdrop-filter:blur(12px);\n    border-top:1px solid var(--line);display:flex;z-index:18}\n  nav button{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;\n    gap:3px;font-size:10.5px;color:var(--faint);font-weight:600}\n  nav button i{font-style:normal;font-size:20px;line-height:1}\n  nav button.on{color:var(--red)}\n\n  .sheet-bg{position:fixed;inset:0;background:rgba(20,22,26,.42);z-index:30;display:flex;\n    align-items:flex-end;justify-content:center}\n  .sheet{width:100%;max-width:480px;background:var(--card);border-radius:20px 20px 0 0;\n    padding:18px 16px calc(22px + var(--safe-b));animation:up .22s cubic-bezier(.2,.8,.3,1);\n    max-height:88dvh;overflow-y:auto;-webkit-overflow-scrolling:touch}\n  .sheet h3{position:sticky;top:-18px;background:var(--card);padding:2px 0 10px;z-index:1}\n  @keyframes up{from{transform:translateY(24px);opacity:.5}to{transform:none;opacity:1}}\n  .sheet h3{margin:0 0 14px;font-size:16px;font-weight:800}\n  .row2{display:flex;gap:9px}\n  .row2 .fld{flex:1;padding:0 0 11px}\n  .toast{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(96px + var(--safe-b));\n    background:rgba(21,23,27,.9);color:#fff;padding:11px 18px;border-radius:999px;font-size:13px;\n    z-index:40;max-width:90%;text-align:center}\n  @media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}\n</style>\n</head>\n<body>\n<div id=\"shell\">\n  <header id=\"hdr\"></header>\n  <main id=\"app\"></main>\n  <nav id=\"nav\"></nav>\n</div>\n<input type=\"file\" id=\"file\" accept=\".json,.txt,.js,text/plain,application/json\" style=\"display:none\">\n<input type=\"file\" id=\"pfile\" accept=\"image/*\" style=\"display:none\">\n\n<script>\n\"use strict\";\nconst MIN=60000, HOUR=60*MIN, KEY='campustime:v3';\nconst $=s=>document.querySelector(s);\nconst esc=s=>String(s==null?'':s).replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]));\n\n/* ===================== 기본 데이터 ===================== */\nconst DEFAULT_FEED=[\n {arc:'도서관 자리 사건',\n  title:'도서관 3층 노트북석 3시간째 비어있는 자리 주인 찾습니다',\n  body:'책 한 권이랑 텀블러만 올려두고 사라진 지 세 시간 됐어요.\\n시험 기간에 이러면 다들 어떡하나요.',\n  likes:142,scraps:12,image:'텀블러와 책만 놓인 빈 자리 사진',\n  comments:[{text:'사서한테 말하면 치워줍니다. 30분 자리비움도 경고예요.',likes:12},\n            {text:'지금 가볼게요 감사합니다',writer:true,reply:0,likes:3},\n            {text:'저도 어제 같은 자리에서 두 시간 기다렸어요',likes:8}],\n  choices:[{text:'그냥 치우세요. 규정상 아무 문제 없습니다.',\n            replies:[{text:'맞아요 공지에도 붙어 있어요',likes:5},{text:'저도 지난주에 치웠는데 아무 일 없었습니다'}]},\n           {text:'사서분 부르는 게 제일 안전할 것 같은데요',\n            replies:[{text:'그게 낫겠네요. 지금 데스크 가볼게요',writer:true,likes:2}]},\n           {text:'저도 어제 그 자리 때문에 한참 헤맸어요',\n            replies:[{text:'3층 창가쪽이면 거의 매일 그래요',likes:4}]}]},\n\n {title:'오늘 학식 제육 실화냐',\n  body:'2500원에 이 퀄리티면 아주머니께 절해야 함.\\n3시 지나면 거의 다 나가니까 늦게 가지 마세요.',\n  likes:88,scraps:4,image:'제육이 담긴 학식 식판 사진',\n  comments:[{text:'점심에 두 번 받아먹었습니다',likes:6},\n            {text:'생활관 식당도 오늘 제육이던데요',likes:2}],\n  choices:[{text:'지금 가면 남아 있을까요?',\n            replies:[{text:'2시 40분이면 아슬아슬합니다 뛰세요',writer:true,likes:3}]},\n           {text:'생활관이 양이 더 많습니다',replies:[{text:'대신 줄이 두 배예요'}]},\n           {text:'가격 오르기 전에 많이 먹어둡시다',\n            replies:[{text:'다음 학기에 3000원 된다는 얘기 있어요',likes:7}]}]},\n\n {title:'같이 팀플하던 동기한테 정 떨어졌다',\n  body:'발표 전날 새벽에 자료 못 만들겠다고 잠수 탄 게 이번이 세 번째예요.\\n이번엔 그냥 이름 빼고 제출할까 고민 중입니다.',\n  likes:203,scraps:31,\n  comments:[{text:'세 번이면 이미 충분히 참으신 거예요',likes:24},\n            {text:'교수님께 미리 말씀드리는 게 나중에 덜 곤란합니다',likes:17},\n            {text:'메일로 근거 남겨두세요. 말로만 하면 뒤집힙니다',likes:9}],\n  choices:[{text:'이름 빼기 전에 교수님께 먼저 말씀드리세요',\n            replies:[{text:'내일 면담 신청해볼게요',writer:true,likes:6},{text:'갈 때 카톡 캡처 챙겨가세요'}]},\n           {text:'한 번만 더 기회 주는 건 어때요',\n            replies:[{text:'세 번이나 줬는데 또요?',likes:11},{text:'저도 그 생각이 들어서 고민입니다',writer:true}]},\n           {text:'기여도 표라도 따로 제출하세요',replies:[{text:'이게 제일 현실적입니다',likes:14}]}]},\n\n {title:'자취방 계약 전에 봐야 할 것들 정리했습니다',\n  body:'1. 등기부등본 확인. 근저당 잡혀 있으면 다시 생각하세요.\\n2. 확정일자는 이사 당일에 무조건.\\n3. 관리비 포함 항목을 계약서에 적어달라고 하세요.\\n4. 곰팡이는 벽지 뒤에 있습니다. 장롱 뒤를 보여달라고 하세요.\\n5. 수압은 화장실과 싱크대를 동시에 틀고 판단하세요.',\n  likes:248,scraps:137,image:'계약서와 등기부등본 사진',\n  comments:[{text:'4번 진짜 중요합니다 이거 놓쳐서 반년 고생했어요',likes:31},\n            {text:'확정일자는 요즘 온라인으로도 됩니다',likes:18}],\n  choices:[{text:'스크랩합니다 감사합니다',replies:[{text:'저도 방금 스크랩했어요'}]},\n           {text:'인터넷 회선 확인도 추가하면 좋겠네요',\n            replies:[{text:'본문에 넣어두겠습니다',writer:true,likes:5},{text:'기가 안 들어오는 건물 많아요'}]},\n           {text:'부동산에서 이런 거 물어보면 싫어하지 않나요',\n            replies:[{text:'싫어하면 그 집 안 하시면 됩니다',likes:22}]}]},\n\n {arc:'도서관 자리 사건',\n  title:'아까 도서관 자리 글 쓴 사람인데 주인 나타났습니다',\n  body:'세 시간 반 만에 왔는데 화장실 갔다 왔다고 합니다.\\n사서분이 이미 치우신 뒤였고 지금 데스크에서 얘기 중입니다.',\n  likes:214,scraps:9,\n  comments:[{text:'세 시간 반 화장실은 좀',likes:44},\n            {text:'그래서 결론이 어떻게 됐나요',likes:12},\n            {text:'경고 한 번 받고 끝났습니다',writer:true,reply:1,likes:18}],\n  choices:[{text:'그 정도면 경고로 끝난 게 다행이네요',\n            replies:[{text:'다음엔 자리 이용 제한이라고 하더라고요',likes:7}]},\n           {text:'치운 사람이 욕먹는 구조가 이상합니다',\n            replies:[{text:'규정은 치우는 게 맞습니다',likes:15},{text:'그래도 눈치는 보이죠'}]},\n           {text:'후기 올려주셔서 감사합니다',\n            replies:[{text:'궁금했는데 잘 봤어요',likes:5}]}]},\n\n {title:'통학러들 급행 몇 시 타는 게 국룰임?',\n  body:'1교시 있는 날마다 지옥입니다.\\n7시 42분이 마지노선인 것 같은데 다들 어떠신지.',\n  likes:31,scraps:2,\n  comments:[{text:'7시 30분 타면 앉아서 옵니다. 12분 차이가 큽니다',likes:9}],\n  choices:[{text:'7시 30분은 너무 이른데요',replies:[{text:'앉아서 자면서 오면 결국 이득입니다',likes:5}]},\n           {text:'저는 일반 타고 환승합니다',replies:[{text:'환승역 계단이 문제죠'}]},\n           {text:'1교시를 안 넣는 게 답입니다',\n            replies:[{text:'전공 필수라 어쩔 수 없었어요',writer:true,likes:7}]}]},\n\n {title:'수강신청 광클 꿀팁 진짜 있나요',\n  body:'선배들이 서버 시계 맞추라던데 정말 차이가 나나요.\\n첫 수강신청이라 긴장됩니다.',\n  likes:54,scraps:22,\n  comments:[{text:'초 단위로 맞추면 확실히 다릅니다',likes:11},\n            {text:'장바구니 미리 채워두면 클릭 두 번 줄어요',likes:7},\n            {text:'와이파이 말고 유선으로 하세요 진심',likes:15}],\n  choices:[{text:'유선 연결이 진짜 체감 차이 큽니다',\n            replies:[{text:'랜선 사러 가야겠네요 감사합니다',writer:true,likes:4}]},\n           {text:'브라우저 두 개 띄우는 것도 방법이에요',\n            replies:[{text:'세션 꼬여서 튕긴 적 있습니다 조심하세요',likes:8}]},\n           {text:'전공은 여유 있으니 교양부터 잡으세요',replies:[{text:'이게 정답입니다',likes:12}]}]},\n\n {title:'사진 동아리 신입 모집합니다',\n  body:'필름·디지털 상관없이 받습니다. 매달 출사 한 번, 학기말에 작은 전시.\\n장비 없어도 됩니다. 대여 가능해요.',\n  likes:71,scraps:26,image:'동아리 모집 포스터 사진',\n  comments:[{text:'회비 얼마인가요',likes:3},\n            {text:'학기당 3만원이고 필름값은 별도입니다',writer:true,reply:0,likes:5}],\n  choices:[{text:'완전 초보인데 지원해도 될까요',\n            replies:[{text:'절반이 초보로 들어옵니다 편하게 오세요',writer:true,likes:6}]},\n           {text:'출사는 어디로 가나요',\n            replies:[{text:'지난달은 을지로, 이번달은 강화도입니다',writer:true}]},\n           {text:'암실도 쓸 수 있나요',\n            replies:[{text:'예술관 지하 암실 예약됩니다',writer:true,likes:2},{text:'저도 그것 때문에 들어갔어요'}]}]},\n\n {title:'고백 실패하고 3일째 학교 안 감',\n  body:'같은 수업 듣는데 이제 어떻게 앉아야 하나요.',\n  likes:167,scraps:9,\n  comments:[{text:'두 주만 지나면 아무도 기억 안 합니다',likes:31},\n            {text:'뒷자리로 옮기고 그냥 수업만 들으세요',likes:12}],\n  choices:[{text:'수업은 나가세요. 결석이 더 오래 남습니다',\n            replies:[{text:'내일은 가볼게요',writer:true,likes:8}]},\n           {text:'저도 작년에 똑같았는데 지금은 아무렇지 않아요',\n            replies:[{text:'이 말이 제일 위로됩니다',likes:11}]},\n           {text:'용기 낸 것만으로도 대단합니다',\n            replies:[{text:'감사합니다 진짜로',writer:true,likes:4}]}]}\n];\n\nconst DEFAULT_TPL=`너는 한국 대학 익명 커뮤니티(에브리타임 형태)의 게시글 데이터를 만든다.\n아래 스키마를 지키는 JSON 배열만 출력해라. 인사말, 설명, 코드펜스 없이 [ 로 시작해서 ] 로 끝나야 한다.\n\n[\n  {\n    \"title\": \"글 제목\",\n    \"body\": \"본문. 줄바꿈은 \\\\n 으로.\",\n    \"likes\": 42,\n    \"scraps\": 5,{떡밥필드}{사진필드}\n    \"comments\": [\n      { \"text\": \"댓글 내용\", \"likes\": 3 },\n      { \"text\": \"글쓴이가 0번 댓글에 다는 답글\", \"writer\": true, \"reply\": 0 }\n    ],\n    \"choices\": [\n      {\n        \"text\": \"읽는 사람이 눌러서 달게 될 댓글\",\n        \"replies\": [\n          { \"text\": \"잠시 뒤 도착하는 답글\", \"likes\": 2 },\n          { \"text\": \"그 다음 답글\", \"writer\": true }\n        ]\n      }\n    ]\n  }\n]\n\n필드 규칙:\n- 시간 관련 항목(after 등)은 넣지 마라. 공개 속도는 앱에서 조절한다.\n- comments[].writer — 글쓴이 본인의 댓글이면 true.\n- comments[].reply — 몇 번째 댓글(0부터)에 대댓글로 달지. 없는 번호를 쓰지 마라.\n- choices — 글마다 3~4개. 읽는 사람이 버튼으로 고를 댓글이다.\n- choices[].replies — 그 선택지를 골랐을 때만 달리는 답글. 1~2개.\n- likes, scraps — 글은 20~250, 댓글은 0~30 사이에서 자연스럽게. 인기 없는 글도 섞어라.{사진규칙}{떡밥규칙}\n\n내용 규칙:\n- 한국 대학생이 실제로 쓰는 말투. 문장 짧게. 맞춤법이 조금 흐트러져도 된다.\n- 이모지 금지. 느낌표는 글 하나에 최대 하나.\n- 실존 인물·학교·기업 실명 금지. 학교는 \"우리 학교\", 건물은 \"인문관 302\" 같은 일반 명칭으로.\n- 정치·종교·집단 비하, 성적인 내용, 개인 특정 가능한 정보 금지.\n- 댓글은 서로 다른 사람이 쓴 것처럼 말투와 길이를 다르게 하라.\n- choices 3~4개는 입장이 서로 달라야 한다. 동조 / 반대 / 질문 / 경험 공유로 방향을 나눠라.\n- replies는 그 선택지에만 어울리는 반응이어야 한다. 어떤 선택지에 붙여도 말이 되는 문장은 쓰지 마라.\n- 제목은 낚시성으로 쓰지 말고 실제 게시판 제목처럼 담백하게.\n- 글마다 온도를 다르게. 하소연, 정보 공유, 사소한 질문, 자랑, 시비조를 섞어라.\n\n지금 만들 것:\n- 글 {개수}개. 게시판은 하나뿐이니 분류하지 말고 한 줄기로 써라.\n- 주제 힌트: {주제}\n- 이미 {누적}개의 글이 쌓여 있다. 겹치는 주제는 피해라.{인물}`;\n\nconst DEFAULT_PTPL=`이 커뮤니티에서 자주 언급되는 인물이다. 아래 호칭을 그대로 써라.\n{명단}\n\n인물 규칙:\n- 이들은 커뮤니티에 글이나 댓글을 쓰지 않는다. 다른 학생들이 언급하기만 한다.\n- {빈도}에서 이들을 언급해라. 나머지 글에는 넣지 마라.\n- 익명 커뮤니티답게 호칭이나 별명으로 부르고, 위에 적힌 특징이 자연스럽게 드러나게 써라.\n- 댓글에서 \"그 교수님 원래 그래요\"처럼 서로 아는 사람으로 취급해라.\n- 인물을 조롱하거나 인신공격하지 마라. 불만은 행동이나 상황에 대해서만 쓴다.\n- 위 목록에 없는 인물을 새로 지어내지 마라.\n- 외모나 체격은 글에서 자연스럽게 스칠 때만 언급해라. 인물 소개문처럼 나열하지 마라.`;\n\nconst DEFAULT_POLLS=[\n {title:'전공 수업 조별과제 vs 개인과제',\n  body:'둘 중에 하나만 평생 해야 한다면.',\n  options:['조별과제만','개인과제만'],votes:[63,412],\n  comments:[{text:'조별은 사람 운이 너무 큽니다',likes:31},\n            {text:'개인은 밤새는 게 확정이라',likes:12}],\n  choices:[{text:'조별에서 무임승차 한 번 겪으면 답 나옵니다',\n            replies:[{text:'세 번 겪었습니다',likes:9}]},\n           {text:'개인과제가 시간은 더 듭니다',\n            replies:[{text:'대신 억울하지는 않죠',likes:14}]},\n           {text:'조 잘 만나면 조별이 낫긴 해요',\n            replies:[{text:'그 확률이 문제죠'},{text:'저는 운이 좋았어요',likes:3}]}]},\n {title:'1교시 9시 vs 야간 수업 9시 종료',\n  body:'시간표 짤 때 하나는 무조건 걸린다면.',\n  options:['1교시 9시','야간 21시 종료'],votes:[188,241],\n  comments:[{text:'통학러는 1교시가 지옥입니다',likes:22}],\n  choices:[{text:'아침은 못 일어나서 야간이요',\n            replies:[{text:'밤에 집 가는 길이 더 힘들던데요',likes:7}]},\n           {text:'1교시 듣고 하루 일찍 끝내는 게 낫습니다',\n            replies:[{text:'이게 맞습니다',likes:18}]},\n           {text:'둘 다 피하면 됩니다',\n            replies:[{text:'전공 필수는 못 피합니다',likes:11}]}]},\n {title:'학식 500원 인상 vs 반찬 한 칸 축소',\n  body:'둘 중 하나는 확정이라고 합니다.',\n  options:['500원 인상','반찬 한 칸 축소'],votes:[297,150],\n  comments:[{text:'차라리 돈을 더 내겠습니다',likes:26},\n            {text:'양 줄이면 결국 밖에서 사 먹게 돼요',likes:15}],\n  choices:[{text:'500원이면 한 학기 5만원입니다',\n            replies:[{text:'계산해보니 크네요',likes:8}]},\n           {text:'양 줄이는 건 실질적 인상입니다',\n            replies:[{text:'작년에도 그렇게 줄었어요',likes:13}]},\n           {text:'셋 다 싫습니다',\n            replies:[{text:'그건 선택지에 없어요'}]}]}\n];\n\nconst DEFAULT_QTPL=`너는 한국 대학 익명 커뮤니티의 '투표(밸런스 게임)' 게시글 데이터를 만든다.\n아래 스키마를 지키는 JSON 배열만 출력해라. 인사말·설명·코드펜스 없이 [ 로 시작해서 ] 로 끝나야 한다.\n\n[\n  {\n    \"title\": \"조별과제 vs 개인과제\",\n    \"body\": \"둘 중 하나만 평생 해야 한다면.\",\n    \"options\": [\"조별과제만\", \"개인과제만\"],\n    \"votes\": [63, 412],\n    \"likes\": 42,\n    \"comments\": [\n      { \"text\": \"댓글 내용\", \"likes\": 3 },\n      { \"text\": \"0번 댓글에 다는 답글\", \"reply\": 0 }\n    ],\n    \"choices\": [\n      {\n        \"text\": \"읽는 사람이 눌러서 달게 될 댓글\",\n        \"replies\": [ { \"text\": \"잠시 뒤 도착하는 답글\", \"likes\": 2 } ]\n      }\n    ]\n  }\n]\n\n필드 규칙:\n- options는 2개를 기본으로. 3~4개는 정말 필요할 때만.\n- 선택지 문구는 짧게. 12자를 넘기지 마라.\n- votes는 각 항목의 초기 득표 수다. 30~500 사이에서 한쪽으로 기울게 하라. 반반은 재미없다.\n- title은 \"A vs B\" 형태거나 질문형으로. body는 조건을 한 줄로 덧붙이는 정도.\n- comments는 글마다 1~3개. choices는 3~4개.\n- choices[].replies는 1~2개. 그 선택지에만 어울리는 반응이어야 한다.\n- 시간 관련 항목(after 등)은 넣지 마라. 공개 속도는 앱에서 조절한다.\n\n내용 규칙:\n- 대학생이 실제로 고민할 법한 양자택일이어야 한다. 둘 다 그럴듯해야 투표가 갈린다.\n- 한쪽이 명백히 정답인 선택지는 만들지 마라.\n- 이모지 금지. 느낌표는 글 하나에 최대 하나.\n- 실존 인물·학교·기업 실명 금지.\n- 정치·종교·집단 비하, 성적인 내용, 외모 비하 금지.\n- 댓글은 서로 다른 사람이 쓴 것처럼 말투와 길이를 다르게 하라.\n\n지금 만들 것:\n- 투표 {개수}개.\n- 소재 힌트: {주제}\n- 이미 {누적}개의 투표가 쌓여 있다. 겹치는 소재는 피해라.`;\n\nconst SLD={\n  postGap:{list:[0.25,0.5,1,2,3,5,10,15,20,30],\n    fmt:v=>v<1?Math.round(v*60)+'초':v+'분', ends:['15초','30분']},\n  commentGap:{list:[0.1,0.25,0.5,0.75,1,1.5,2,3,5,10],\n    fmt:v=>v<1?Math.round(v*60)+'초':v+'분', ends:['6초','10분']},\n  replyDelay:{min:1,max:15,step:1, fmt:v=>v+'초', ends:['1초','15초']},\n  n:{min:1,max:30,step:1, fmt:v=>v+'개', ends:['1개','30개']},\n  qn:{min:1,max:20,step:1, fmt:v=>v+'개', ends:['1개','20개']},\n  imgPct:{min:0,max:100,step:10, fmt:v=>v==0?'없음':v+'%', ends:['없음','전부']},\n  peoplePct:{min:0,max:100,step:10, fmt:v=>v==0?'없음':v+'%', ends:['없음','전부']}\n};\nfunction sVal(key,cur){\n  const d=SLD[key];\n  if(d.list){ let i=d.list.indexOf(+cur); if(i<0) i=Math.floor(d.list.length/2); return i; }\n  return +cur;\n}\nfunction sText(key,cur){ const d=SLD[key]; return d.fmt(d.list?d.list[sVal(key,cur)]:+cur); }\nfunction slider(key,cur,label,hint){\n  const d=SLD[key];\n  const max=d.list?d.list.length-1:d.max, min=d.list?0:d.min, step=d.list?1:d.step;\n  return `<div class=\"row\"><div class=\"k\">${label}${hint?`<small>${hint}</small>`:''}</div>\n      <span class=\"sv\" id=\"sv-${key}\">${sText(key,cur)}</span></div>\n    <div class=\"sld\"><input type=\"range\" id=\"sl-${key}\" min=\"${min}\" max=\"${max}\" step=\"${step}\"\n      value=\"${sVal(key,cur)}\" aria-label=\"${label}\">\n      <div class=\"ends\"><span>${d.ends[0]}</span><span>${d.ends[1]}</span></div></div>`;\n}\n\n\n/* ===================== 상태 ===================== */\nlet DB=null;\nconst S={tab:'feed',view:'feed',post:null,sheet:null,replyTo:null,gen:'',pasted:'',genMode:'post',tplEdit:false,tplDraft:null,ptplEdit:false,ptplDraft:null,\n  qtplEdit:false,qtplDraft:null,quota:null,dirty:false,\n  backupText:'',ppaste:'',fileMode:'feed',srcOpen:false,flash:null,ment:null,tick:0,q:'',\n  g:{n:'12',imgPct:'30',topic:'시험 기간, 학식, 통학, 팀플, 수강신청, 동아리, 인턴, 자취방',\n     peoplePct:'30',arc:'1',qn:'8',qtopic:'수업, 학식, 통학, 연애, 알바, 자취, 학점'},\n  pd:null};\n\nfunction fresh(){\n  return {\n    feed:DEFAULT_FEED.map(x=>x), sources:[{name:'기본 데이터',count:DEFAULT_FEED.length}],\n    posts:[], revealed:0, lastPostAt:0, clock:0, lastTick:Date.now(), pending:[], nextId:1,\n    cfg:{postGap:2, commentGap:0.75, replyDelay:6, tod:true}, tpl:null, ptpl:null, qtpl:null,\n    polls:DEFAULT_POLLS.map(x=>x), prevealed:0, plastAt:0,\n    people:[\n      {id:1,name:'김대현 교수',role:'전공 교수',\n       age:'40대 후반',build:'180cm / 68kg',shape:'마르고 어깨가 좁다',\n       memo:'광고홍보론 담당. 뿔테 안경에 늘 셔츠 차림.\\n깐깐하지만 채점은 공정하다. 지각 세 번이면 결석 처리.\\n메일 답장은 빠른 편.'},\n      {id:2,name:'과대 민지',role:'과대표',\n       age:'24학번, 3학년',build:'162cm / 50kg',shape:'보통, 자세가 곧다',\n       memo:'학과 공지 담당. 단발에 뿔테, 늘 에코백을 메고 다닌다.\\n정중하고 싹싹한데 부탁을 거절하지 못해 일이 몰린다.\\n행사 기간엔 새벽까지 답장이 온다.'},\n      {id:3,name:'조교 형',role:'조교',\n       age:'대학원 2년차',build:'175cm / 80kg',shape:'다부지고 어깨가 넓다',\n       memo:'과 사무실 상주. 후드티에 슬리퍼, 늘 커피를 들고 있다.\\n무뚝뚝해 보이지만 챙겨준다. 서류 실수에는 엄격하다.\\n오후 5시 넘으면 자리에 없다.'}\n    ],\n  };\n}\n/* 저장: IndexedDB를 먼저 쓰고, 안 되면 localStorage로 물러난다.\n   localStorage는 원본당 약 5MB 고정이지만 IndexedDB는 그보다 훨씬 크다. */\nlet idb=null, saveT=null, saveWarned=false;\nfunction openIDB(){\n  return new Promise(res=>{\n    if(!window.indexedDB) return res(null);\n    let r; try{ r=indexedDB.open('campustime',1); }catch(e){ return res(null); }\n    r.onupgradeneeded=()=>{ try{ r.result.createObjectStore('kv'); }catch(e){} };\n    r.onsuccess=()=>res(r.result);\n    r.onerror=()=>res(null);\n    r.onblocked=()=>res(null);\n    setTimeout(()=>res(null),3000);\n  });\n}\nfunction idbGet(k){\n  return new Promise(res=>{\n    if(!idb) return res(null);\n    try{ const q=idb.transaction('kv','readonly').objectStore('kv').get(k);\n      q.onsuccess=()=>res(q.result||null); q.onerror=()=>res(null);\n    }catch(e){ res(null); }\n  });\n}\nfunction idbSet(k,v){\n  return new Promise(res=>{\n    if(!idb) return res(false);\n    try{ const tx=idb.transaction('kv','readwrite');\n      tx.objectStore('kv').put(v,k);\n      tx.oncomplete=()=>res(true); tx.onerror=()=>res(false); tx.onabort=()=>res(false);\n    }catch(e){ res(false); }\n  });\n}\nfunction lsSave(){\n  try{ localStorage.setItem(KEY, JSON.stringify(DB)); saveWarned=false; return true; }\n  catch(e){\n    if(!saveWarned){ saveWarned=true;\n      toast('저장 공간이 가득 찼습니다. 설정에서 오래된 글을 비우거나 초기화해주세요'); }\n    return false;\n  }\n}\nfunction flush(){\n  if(saveT){ clearTimeout(saveT); saveT=null; }\n  if(!DB) return;\n  if(idb){ idbSet(KEY,DB).then(ok=>{ if(!ok) lsSave(); }); return; }\n  lsSave();\n}\nfunction save(){ if(saveT) return; saveT=setTimeout(flush,500); }\nfunction valid(d){ return d&&Array.isArray(d.feed)&&Array.isArray(d.posts); }\nfunction normalize(d){\n  d.pending=d.pending||[]; d.sources=d.sources||[]; d.people=d.people||[];\n  d.cfg=Object.assign({postGap:2,commentGap:0.75,replyDelay:6,tod:true}, d.cfg||{});\n  ['dm','convos','aff','dmq','dmNextAt','dtpl'].forEach(k=>{ delete d[k]; });\n  d.polls=d.polls||[]; d.prevealed=d.prevealed||0; d.plastAt=d.plastAt||0;\n  delete d.courses;\n  return d;\n}\nfunction loadAll(){\n  return Promise.resolve()\n    .then(()=> idb?idbGet(KEY):null)\n    .then(d=>{\n      if(valid(d)) return normalize(d);\n      let raw=null; try{ raw=localStorage.getItem(KEY); }catch(e){}\n      if(raw){\n        try{\n          const o=JSON.parse(raw);\n          if(valid(o)){\n            const n=normalize(o);\n            if(idb) idbSet(KEY,n).then(ok=>{ if(ok){ try{ localStorage.removeItem(KEY); }catch(e){} } });\n            return n;\n          }\n        }catch(e){}\n      }\n      return null;\n    });\n}\nfunction exportAll(){\n  return JSON.stringify({__campustime:3, at:new Date().toISOString(),\n    people:DB.people, feed:DB.feed, sources:DB.sources, cfg:DB.cfg,\n    tpl:DB.tpl, ptpl:DB.ptpl, qtpl:DB.qtpl, polls:DB.polls, posts:DB.posts, revealed:DB.revealed,\n    lastPostAt:DB.lastPostAt, clock:DB.clock, pending:DB.pending, nextId:DB.nextId});\n}\nfunction downloadBackup(){\n  try{\n    const blob=new Blob([exportAll()],{type:'application/json'});\n    const url=URL.createObjectURL(blob);\n    const a=document.createElement('a');\n    const d=new Date(), pad=n=>String(n).padStart(2,'0');\n    a.href=url; a.download=`campustime-backup-${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}.json`;\n    document.body.appendChild(a); a.click();\n    setTimeout(()=>{ a.remove(); URL.revokeObjectURL(url); },1000);\n    toast('백업 파일을 저장했습니다');\n  }catch(e){ toast('저장에 실패했습니다. 아래 텍스트를 복사해 두세요'); S.backupText=exportAll(); render(); }\n}\nfunction restoreBackup(text){\n  let o;\n  try{ o=JSON.parse(String(text).slice(String(text).indexOf('{'), String(text).lastIndexOf('}')+1)); }\n  catch(e){ return toast('백업 파일이 아닙니다'); }\n  if(!o||!o.__campustime) return toast('캠퍼스타임 백업 파일이 아닙니다');\n  const cur=DB;\n  DB=fresh();\n  ['people','feed','sources','cfg','tpl','ptpl','qtpl','polls','posts','pending'].forEach(k=>{ if(o[k]!=null) DB[k]=o[k]; });\n  ['revealed','lastPostAt','clock','nextId','prevealed','plastAt'].forEach(k=>{ if(typeof o[k]==='number') DB[k]=o[k]; });\n  DB.lastTick=Date.now();\n  if(!Array.isArray(DB.feed)||!Array.isArray(DB.posts)){ DB=cur; return toast('백업 내용이 손상되었습니다'); }\n  normalize(DB); flush(); render();\n  toast(`복원 완료 · 인물 ${DB.people.length}명 · 글 ${DB.feed.length}개`);\n}\nfunction mergePeople(text){\n  let arr;\n  try{\n    const t=String(text);\n    const a=t.indexOf('['), b=t.lastIndexOf(']');\n    arr=JSON.parse(t.slice(a,b+1));\n  }catch(e){ return toast('인물 목록을 읽지 못했습니다'); }\n  if(!Array.isArray(arr)) return toast('배열 형태여야 합니다');\n  let n=0;\n  arr.forEach(pr=>{\n    if(!pr||!pr.name||DB.people.some(x=>x.name===pr.name)) return;\n    const o={id:Date.now()+Math.floor(Math.random()*10000),name:String(pr.name),role:String(pr.role||'기타')};\n    ['age','build','shape','desc','memo','photo'].forEach(k=>{ if(pr[k]) o[k]=String(pr[k]); });\n    DB.people.push(o); n++;\n  });\n  save(); render();\n  toast(n?`인물 ${n}명을 불러왔습니다`:'새로 추가된 인물이 없습니다');\n}\nfunction fmtMB(n){ return n>=1048576?(n/1048576).toFixed(1)+'MB':Math.round(n/1024)+'KB'; }\nfunction checkQuota(){\n  if(!(navigator.storage&&navigator.storage.estimate)) return;\n  navigator.storage.estimate().then(e=>{\n    S.quota={use:e.usage||0,max:e.quota||0};\n    if(S.view==='settings') render();\n  }).catch(()=>{});\n}\nconst uid=()=>DB.nextId++;\nconst postOf=id=>DB.posts.find(p=>p.id===id);\nconst cCount=p=>p.comments.length;\nfunction ago(t){\n  const d=(DB?DB.clock:0)-t;\n  if(d<MIN) return '방금';\n  if(d<HOUR) return Math.floor(d/MIN)+'분 전';\n  if(d<24*HOUR) return Math.floor(d/HOUR)+'시간 전';\n  return Math.floor(d/(24*HOUR))+'일 전';\n}\nfunction toast(msg){\n  document.querySelectorAll('.toast').forEach(n=>n.remove());\n  const el=document.createElement('div');\n  el.className='toast'; el.textContent=msg;\n  document.body.appendChild(el);\n  setTimeout(()=>el.remove(),1800);\n}\n\n/* ===================== 피드 재생 ===================== */\nfunction imgOf(f){\n  const v=f.image||f.images;\n  const t=Array.isArray(v)?v[0]:v;\n  if(!t) return '';\n  return String(typeof t==='object'?(t.alt||t.src||''):t).trim().slice(0,60);\n}\nfunction srcOf(p){\n  if(p.fi<0) return null;\n  return (p.pk==='poll'?DB.polls:DB.feed)[p.fi]||null;\n}\nfunction publishPost(i,due,poll){\n  const f=(poll?DB.polls:DB.feed)[i];\n  const o={id:uid(), title:String(f.title||'(제목 없음)'), body:String(f.body||''),\n    at:due, likes:+f.likes||0, liked:false, scraps:+f.scraps||0, scrapped:false,\n    anon:f.anon!==false, author:null, image:imgOf(f), comments:[],\n    fi:i, pk:poll?'poll':'feed', cn:0, cAt:due, cmap:[], used:[], myNo:0};\n  if(f.arc) o.arc=String(f.arc).slice(0,40);\n  if(poll){\n    const opts=(f.options||[]).map(x=>String(x)).slice(0,4);\n    o.options=opts.length>=2?opts:['A','B'];\n    o.votes=o.options.map((_,k)=>{\n      const v=Array.isArray(f.votes)?+f.votes[k]:NaN;\n      return isFinite(v)&&v>=0?Math.round(v):Math.floor(40+Math.random()*260);\n    });\n    o.myVote=null;\n  }\n  DB.posts.unshift(o);\n}\n/* cmap: 원본 댓글 index → 실제 댓글 id.\n   내 댓글이 중간에 끼어도 reply/to 대상이 어긋나지 않는다. */\nfunction topOf(p,id){                       // 대댓글에 달린 대댓글은 원 댓글로 올린다\n  let c=p.comments.find(x=>x.id===id), guard=0;\n  while(c&&c.parent&&guard++<10){\n    const up=p.comments.find(x=>x.id===c.parent);\n    if(!up) break;\n    c=up;\n  }\n  return c?c.id:null;\n}\nfunction publishComment(p,c,due){\n  const id=uid();\n  const no=c.writer?0:nextNo(p);\n  const parent=(c.reply!=null && p.cmap[c.reply])?topOf(p,p.cmap[c.reply]):null;\n  p.comments.push({id,by:c.writer?'w':'a',no,text:String(c.text||''),at:due,\n    likes:+c.likes||0,liked:false,parent});\n  p.cmap[p.cn]=id;\n}\nfunction nextNo(p){\n  const used=p.comments.filter(c=>c.by!=='w').map(c=>c.no);\n  return used.length?Math.max.apply(null,used)+1:1;\n}\nfunction busy(){                        // 입력 중이거나 설정/시트를 다루는 중이면 다시 그리지 않는다\n  if(S.sheet||S.view==='settings') return true;\n  const ae=document.activeElement;\n  if(!ae) return false;\n  const tag=ae.tagName;\n  return tag==='INPUT'||tag==='TEXTAREA'||tag==='SELECT'||ae.isContentEditable;\n}\nfunction redraw(){ if(busy()){ S.dirty=true; return; } S.dirty=false; render(); }\nconst TOD=[\n  [2,7,4.5,'새벽 · 거의 조용함'],\n  [7,9,2.2,'아침 · 뜸함'],\n  [9,12,1.3,'오전 수업 시간'],\n  [12,14,0.7,'점심 · 붐빔'],\n  [14,18,1.1,'오후 수업 시간'],\n  [18,21,0.85,'저녁 · 활발함'],\n  [21,24,0.6,'밤 · 가장 붐빔'],\n  [0,2,1.6,'자정 이후 · 잦아듦']\n];\nfunction todNow(){\n  const h=new Date().getHours();\n  for(let i=0;i<TOD.length;i++){ const [a,b]=TOD[i]; if(h>=a&&h<b) return TOD[i]; }\n  return [0,24,1,'보통'];\n}\nfunction rate(){ return (DB.cfg.tod===false)?1:todNow()[2]; }\nfunction tick(){\n  if(!DB) return;\n  const now=Date.now();\n  DB.clock+=Math.max(0, now-(DB.lastTick||now));\n  DB.lastTick=now;\n  let ch=false;\n  const gap=Math.max(0.05,DB.cfg.postGap)*MIN*rate();\n  const has=k=>DB.posts.some(p=>p.pk===k);\n  while(DB.revealed<DB.feed.length){\n    const due = has('feed')? Math.max(DB.lastPostAt+gap, DB.clock-gap) : DB.clock;\n    if(due>DB.clock) break;\n    publishPost(DB.revealed,due,false); DB.lastPostAt=due; DB.revealed++; ch=true;\n  }\n  while(DB.prevealed<DB.polls.length){                 // 투표는 반 칸 늦게 시작해 겹치지 않는다\n    const due = has('poll')? Math.max(DB.plastAt+gap, DB.clock-gap) : gap*0.5;\n    if(due>DB.clock) break;\n    publishPost(DB.prevealed,due,true); DB.plastAt=due; DB.prevealed++; ch=true;\n  }\n  const cgap=Math.max(0.05,DB.cfg.commentGap)*MIN*rate();\n  DB.posts.forEach(p=>{\n    const f=srcOf(p); if(!f) return;\n    const cs=f.comments||[];\n    while(p.cn<cs.length){\n      const due=Math.max(p.cAt+cgap, DB.clock-cgap);\n      if(due>DB.clock) break;\n      publishComment(p,cs[p.cn],due); p.cAt=due; p.cn++; ch=true;\n    }\n  });\n  save();\n  if(ch) redraw();\n}\nfunction pulse(){\n  if(!DB||!DB.pending.length) return;\n  const now=Date.now(); let ch=false;\n  DB.pending=DB.pending.filter(q=>{\n    if(q.due>now) return true;\n    const p=postOf(q.pid); if(!p) return false;\n    p.comments.push({id:uid(),by:q.writer?'w':'a',no:q.writer?0:nextNo(p),\n      text:q.text,at:DB.clock,likes:q.likes||0,liked:false,parent:q.parent?topOf(p,q.parent):null});\n    ch=true; return false;\n  });\n  if(ch){ save(); redraw(); }\n}\nlet pullFrom=0, mode='', armed=false, wheelAcc=0, wheelAt=0;\nfunction appEl(){ return document.getElementById('app'); }\nfunction atTop(){ const a=appEl(); return !a || a.scrollTop<=1; }\nfunction atBottom(){\n  const a=appEl();\n  if(a && a.scrollHeight > a.clientHeight + 4)\n    return (a.scrollHeight - a.scrollTop - a.clientHeight) < 40;\n  return true;                                   // 스크롤이 없으면 이미 끝이다\n}\nfunction listView(){ return S.view==='feed'||S.view==='poll'; }\nfunction setRing(id,progress){\n  const r=document.getElementById(id); if(!r) return;\n  const q=Math.max(0,Math.min(1.4,progress));\n  r.style.transform='rotate('+Math.round(q*220)+'deg) scale('+(0.85+q*0.15).toFixed(2)+')';\n}\nfunction setPull(txt,on){\n  const t=document.getElementById('pullTxt'); if(t) t.textContent=txt;\n  const b=document.getElementById('pullBox'); if(b){ if(on) b.classList.add('on'); else b.classList.remove('on'); }\n}\nfunction setPtr(h,txt,on){\n  const el=document.getElementById('ptr'); if(!el) return;\n  el.style.height=h+'px';\n  const t=document.getElementById('ptrTxt'); if(t) t.textContent=txt;\n  if(on) el.classList.add('on'); else el.classList.remove('on');\n}\nfunction pullLoad(){\n  if(!DB||waitCount(isPollTab())<=0){\n    setPtr(0,'',false); setPull(pullText(),false);\n    return toast(isPollTab()?'쌓아둔 투표를 모두 봤습니다':'쌓아둔 글을 모두 봤습니다');\n  }\n  const el=document.getElementById('ptr');\n  if(el){ el.classList.add('load'); el.style.height=''; setPtr(58,'불러오는 중…',true); }\n  const b=document.getElementById('pullBox'), r=document.getElementById('pullRing');\n  if(r) r.style.transform='';\n  if(b) b.classList.add('load');\n  setPull('불러오는 중…',true);\n  setTimeout(publishOne,600);\n}\nfunction publishOne(){\n  if(!DB) return;\n  const poll=isPollTab();\n  if(waitCount(poll)<=0){ setPull(pullText(),false); return toast('더 불러올 것이 없습니다'); }\n  if(poll){ publishPost(DB.prevealed, DB.clock, true); DB.plastAt=DB.clock; DB.prevealed++; }\n  else    { publishPost(DB.revealed, DB.clock, false); DB.lastPostAt=DB.clock; DB.revealed++; }\n  S.flash=DB.posts[0].id;\n  save(); render();\n  const a=appEl(); if(a) a.scrollTop=0;\n  setTimeout(()=>{ S.flash=null; },2600);\n}\ndocument.addEventListener('touchstart',e=>{\n  mode=''; armed=false;\n  if(!listView()||S.sheet) return;\n  pullFrom=e.touches[0].clientY;\n  if(atTop()) mode='top';\n  else if(atBottom()) mode='bottom';\n},{passive:true});\ndocument.addEventListener('touchmove',e=>{\n  if(!listView()||S.sheet) return;\n  const y=e.touches[0].clientY, d=y-pullFrom;\n  if(!mode){                                  // 이동 중에 끝에 닿아도 잡아준다\n    if(d<0&&atBottom()){ mode='bottom'; pullFrom=y; return; }\n    if(d>0&&atTop()){ mode='top'; pullFrom=y; return; }\n    return;\n  }\n  if(mode==='top'){\n    if(d<=0){ setPtr(0,'당겨서 새로고침',false); armed=false; return; }\n    const h=Math.min(64,d*0.55);\n    setPtr(h,h>=44?'놓으면 새로고침':'당겨서 새로고침',h>=44);\n    setRing('ptrRing',h/44);\n    armed=h>=44;\n  }else{\n    const up=-d;\n    setRing('pullRing',up/55);\n    if(up>55){ if(!armed){ armed=true; setPull('놓으면 새 글이 올라옵니다',true); } }\n    else if(up>12){ armed=false; setPull('조금 더 당기세요',false); }\n    else { armed=false; }\n  }\n},{passive:true});\ndocument.addEventListener('touchend',()=>{\n  if(!mode) return;\n  const was=mode; mode='';\n  if(armed){ armed=false; pullLoad(); return; }\n  if(was==='top') setPtr(0,'당겨서 새로고침',false);\n  else { setRing('pullRing',0); setPull(pullText(),false); }\n});\ndocument.addEventListener('wheel',e=>{\n  if(!listView()||S.sheet) return;\n  const now=Date.now();\n  if(now-wheelAt>700) wheelAcc=0;\n  wheelAt=now;\n  if(e.deltaY>0&&atBottom()){\n    wheelAcc+=e.deltaY; setRing('pullRing',wheelAcc/160);\n    if(wheelAcc>160){ wheelAcc=0; pullLoad(); } else setPull('조금 더 내리세요',true);\n  }else if(e.deltaY<0&&atTop()){\n    wheelAcc+=-e.deltaY; setRing('ptrRing',wheelAcc/160);\n    setPtr(Math.min(58,wheelAcc*0.35),wheelAcc>160?'놓으면 새로고침':'당겨서 새로고침',wheelAcc>160);\n    if(wheelAcc>160){ wheelAcc=0; pullLoad(); }\n  }\n},{passive:true});\n\nfunction skipNext(){\n  const g=Math.max(0.05,DB.cfg.postGap)*MIN;\n  let done=false;\n  if(DB.revealed<DB.feed.length){ DB.lastPostAt=DB.clock-g; done=true; }\n  if(DB.prevealed<DB.polls.length){ DB.plastAt=DB.clock-g; done=true; }\n  if(!done) return toast('공개할 것이 더 없습니다');\n  tick(); toast('다음 항목을 공개했습니다'); render();\n}\n\n/* ===================== 데이터 불러오기 (누적) ===================== */\nfunction extract(text){\n  let t=String(text).replace(/```[a-zA-Z]*/g,'').trim();\n  if(t.indexOf('window.FEED')>=0){\n    try{ const w={}; const r=new Function('window', t+'\\nreturn window.FEED;')(w); if(Array.isArray(r)) return r; }catch(e){}\n  }\n  const oa=t.indexOf('{'), ob=t.lastIndexOf('}');\n  const a=t.indexOf('['), b=t.lastIndexOf(']');\n  if(oa>=0&&(a<0||oa<a)){\n    try{ const o=JSON.parse(t.slice(oa,ob+1)); if(o&&(o.people||o.posts||o.feed)) return o; }catch(e){}\n  }\n  if(a<0||b<0) throw new Error('JSON 배열을 찾지 못했습니다');\n  try{ return JSON.parse(t.slice(a,b+1)); }\n  catch(e){\n    try{ const r=new Function('return '+t.slice(a,b+1))(); if(Array.isArray(r)) return r; }catch(e2){}\n    throw new Error('JSON 형식이 올바르지 않습니다');\n  }\n}\nfunction addFeed(text,name){\n  let data;\n  try{ data=extract(text); }\n  catch(e){ return toast('불러오기 실패: '+e.message); }\n  let added=0;\n  if(data&&!Array.isArray(data)&&Array.isArray(data.people)){     // { people:[], posts:[] } 형태도 허용\n    data.people.forEach(pr=>{\n      if(!pr||!pr.name) return;\n      if(DB.people.some(x=>x.name===pr.name)) return;\n      const o={id:Date.now()+Math.floor(Math.random()*1000),name:String(pr.name),role:String(pr.role||'기타')};\n      ['age','build','shape','desc','memo','photo'].forEach(k=>{ if(pr[k]) o[k]=String(pr[k]); });\n      DB.people.push(o);\n      added++;\n    });\n    data=data.posts||data.feed||[];\n  }\n  if(!Array.isArray(data)) data=[];\n  const items=data.filter(f=>f&&typeof f==='object'&&f.title);\n  if(!items.length){\n    if(added){ save(); render(); return toast(`인물 ${added}명을 추가했습니다`); }\n    return toast('title이 있는 글이 하나도 없습니다');\n  }\n  items.forEach(f=>{\n    delete f.after;\n    (f.comments||[]).forEach(c=>{ delete c.after; if(c.reply!=null&&!(f.comments||[])[c.reply]) delete c.reply; });\n    (f.choices||[]).forEach(c=>{\n      if(c.to!=null&&!(f.comments||[])[c.to]) delete c.to;\n      (c.replies||[]).forEach(r=>{ delete r.after; });\n    });\n  });\n  const polls=items.filter(f=>Array.isArray(f.options)&&f.options.length>=2);\n  const posts=items.filter(f=>!(Array.isArray(f.options)&&f.options.length>=2));\n  if(posts.length){\n    const drained=DB.revealed>=DB.feed.length;\n    DB.feed=DB.feed.concat(posts);\n    if(drained) DB.lastPostAt=DB.clock;\n  }\n  if(polls.length){\n    const pdrained=DB.prevealed>=DB.polls.length;\n    DB.polls=DB.polls.concat(polls);\n    if(pdrained) DB.plastAt=DB.clock;\n  }\n  DB.sources.push({name:(name||'붙여넣기')+(polls.length&&!posts.length?' (투표)':''),count:items.length});\n  const skipped=data.length-items.length;\n  save(); tick(); render();\n  toast([posts.length?`글 ${posts.length}개`:'',polls.length?`투표 ${polls.length}개`:'',\n    added?`인물 ${added}명`:''].filter(Boolean).join(' · ')+' 추가'\n    +(skipped?` · ${skipped}개 건너뜀`:''));\n}\n\n/* ===================== 렌더 ===================== */\nlet lastView=null;\nfunction render(){\n  const app=$('#app');\n  const same=(lastView===S.view);\n  const keepTop=same?app.scrollTop:0;\n  const ae=document.activeElement;\n  const fid=(ae&&ae.id&&app.contains(ae))?ae.id:null;\n  const fval=fid?ae.value:null;\n  let fsel=null; try{ fsel=fid?ae.selectionStart:null; }catch(e){}\n\n  renderHeader(); renderNav();\n  const map={feed:vFeed,poll:vPoll,detail:vDetail,hot:vHot,mine:vMine,people:vPeople,mentions:vMentions,search:vSearch,settings:vSettings};\n  app.innerHTML=(map[S.view]||vFeed)();\n  lastView=S.view;\n  app.scrollTop=same?keepTop:0;\n  if(fid){\n    const el=document.getElementById(fid);\n    if(el){\n      if(fval!=null&&el.value!==fval) el.value=fval;\n      try{ el.focus({preventScroll:true}); if(fsel!=null) el.setSelectionRange(fsel,fsel); }catch(e){}\n    }\n  }\n  document.querySelectorAll('.sheet-bg').forEach(n=>n.remove());\n  if(S.sheet) renderSheet();\n}\nfunction nav(view,tab){ if(tab) S.tab=tab; S.view=view; lastView=null; render(); }\nfunction renderHeader(){\n  const back='<button class=\"icon-btn\" data-act=\"back\" aria-label=\"뒤로\">‹</button>';\n  let h='';\n  if(S.view==='feed') h=`<div class=\"h-title brand\">캠퍼스<span>타임</span></div>\n    <button class=\"icon-btn quiet\" data-act=\"go-settings\" aria-label=\"더보기\">•••</button>`;\n  else if(S.view==='detail'){ const dp=postOf(S.post);\n    h=`${back}<div class=\"h-title\">${dp&&isPoll(dp)?'투표':'게시판'}</div>`; }\n  else if(S.view==='poll') h=`<div class=\"h-title\">투표</div>`;\n  else if(S.view==='hot') h=`<div class=\"h-title\">인기 글</div>`;\n  else if(S.view==='mine') h=`<div class=\"h-title\">나의 활동</div>`;\n  else if(S.view==='search') h=`${back}<div class=\"h-title\">${esc(S.q||'')}</div>`;\n  else if(S.view==='mentions'){ const mp=DB.people.find(x=>x.id===S.ment);\n    h=`${back}<div class=\"h-title\">${esc(mp?mp.name:'언급된 글')}</div>`; }\n  else if(S.view==='people') h=`<div class=\"h-title\">인물</div>\n    <button class=\"icon-btn\" data-act=\"add-person\" aria-label=\"인물 추가\">＋</button>`;\n  else if(S.view==='settings') h=`${back}<div class=\"h-title\">설정</div>`;\n  $('#hdr').innerHTML=h;\n}\nfunction renderNav(){\n  const items=[['feed','☰','게시판'],['poll','🗳','투표'],['hot','✦','인기'],['mine','◔','나의'],['people','◍','인물']];\n  $('#nav').innerHTML=items.map(([k,i,l])=>\n    `<button data-tab=\"${k}\" class=\"${S.tab===k?'on':''}\"><i>${i}</i>${l}</button>`).join('');\n}\n\nconst isPoll=p=>p.pk==='poll';\nconst totalVotes=p=>(p.votes||[]).reduce((a,b)=>a+b,0);\nfunction vFeed(){ return listOf(DB.posts.filter(p=>!isPoll(p)),'아직 올라온 글이 없습니다.'); }\nfunction vPoll(){ return listOf(DB.posts.filter(isPoll),'아직 올라온 투표가 없습니다.'); }\nfunction ptrHTML(){\n  return `<div class=\"ptr\" id=\"ptr\"><span class=\"ring\" id=\"ptrRing\"></span>\n    <span id=\"ptrTxt\">당겨서 새로고침</span></div>`;\n}\nfunction pullBtn(){\n  const none=waitCount(isPollTab())<=0;\n  return `<button class=\"pull ${none?'empty':''}\" id=\"pullBox\" data-act=\"pull-load\">\n    <span class=\"ring\" id=\"pullRing\" style=\"${none?'opacity:.3':''}\"></span>\n    <span id=\"pullTxt\">${pullText()}</span></button>`;\n}\nfunction listOf(list,emptyMsg){\n  if(!list.length) return ptrHTML()+`<div class=\"empty\">${emptyMsg}<br>\n    잠시 기다리면 하나씩 올라옵니다.</div>` + pullBtn();\n  return ptrHTML() + tickHTML() + list.map(p=>`<button class=\"p-item${p.id===S.flash?' fresh':''}\" data-open=\"${p.id}\">\n    <div class=\"p-head\"><span class=\"avatar\">${p.anon?'?':'나'}</span>\n      <span class=\"p-who\">${p.anon?'익명':esc(p.author||'나')}</span>\n      <span class=\"p-time\">· ${ago(p.at)}</span></div>\n    <div class=\"p-main\"><div class=\"p-txt\">\n      <div class=\"p-title\">${isPoll(p)?'<span class=\"vbadge\">투표</span>':''}${\n        p.arc?`<span class=\"arc-chip\">${esc(p.arc)}</span>`:''}${esc(p.title)}</div>\n      ${p.body?`<div class=\"p-body\">${esc(p.body)}</div>`:''}\n      ${isPoll(p)?`<div class=\"opt-min\">${p.options.map(o=>`<span>${esc(o)}</span>`).join('')}</div>`:''}\n      </div>\n      ${p.image?`<div class=\"p-thumb\" aria-label=\"${esc(p.image)}\">📷</div>`:''}</div>\n    <div class=\"p-meta\"><span class=\"${p.liked?'on':''}\">♡ <b>${p.likes}</b></span>\n      <span>💬 <b>${cCount(p)}</b></span>\n      ${isPoll(p)?`<span>🗳 <b>${totalVotes(p)}</b></span>`:`<span>☆ <b>${p.scraps}</b></span>`}\n      ${isPoll(p)&&p.myVote!=null?`<span class=\"on\">투표함</span>`:''}</div></button>`).join('')\n    + pullBtn();\n}\nfunction isPollTab(){ return S.view==='poll'||S.tab==='poll'; }\nfunction waitCount(poll){ return poll?(DB.polls.length-DB.prevealed):(DB.feed.length-DB.revealed); }\nfunction pullText(){\n  if(!DB) return '';\n  const poll=isPollTab();\n  const n=waitCount(poll);\n  if(n<=0) return poll?'쌓아둔 투표를 모두 봤습니다':'쌓아둔 글을 모두 봤습니다';\n  return `당기거나 눌러서 ${poll?'새 투표':'새 글'} 불러오기 (대기 ${n}개)`;\n}\n\nconst score=p=>(p.likes||0)+cCount(p)*3+(p.scraps||0)*2;\nfunction vHot(){\n  const list=DB.posts.slice().sort((a,b)=>score(b)-score(a)).slice(0,20);\n  if(!list.length) return `<div class=\"empty\">아직 글이 없습니다.</div>`;\n  return `<div class=\"sec\" style=\"background:var(--card)\">공감·댓글·스크랩을 합산한 순위입니다</div>`\n    + list.map((p,i)=>`<button class=\"hot-row\" data-open=\"${p.id}\">\n      <span class=\"rank ${i<3?'top':''}\">${i+1}</span>\n      <span class=\"hot-b\"><span class=\"hot-t\">${isPoll(p)?'<span class=\"vbadge\">투표</span>':''}${esc(p.title)}</span>\n        <span class=\"hot-m\">♡ ${p.likes} · 💬 ${cCount(p)} · ☆ ${p.scraps} · ${ago(p.at)}</span></span>\n      </button>`).join('');\n}\nfunction vMine(){\n  const mine=[];\n  DB.posts.forEach(p=>p.comments.forEach(c=>{ if(c.by==='me') mine.push({p,c}); }));\n  mine.sort((a,b)=>b.c.at-a.c.at);\n  const scrap=DB.posts.filter(p=>p.scrapped);\n  const liked=DB.posts.filter(p=>p.liked);\n  return `<div class=\"pad\">\n    <div class=\"stat-row card\" style=\"display:flex;padding:16px 0;text-align:center\">\n      <div style=\"flex:1\"><b style=\"display:block;font-size:18px;font-weight:800\">${mine.length}</b>\n        <span style=\"font-size:11.5px;color:var(--sub)\">내 댓글</span></div>\n      <div style=\"flex:1;border-left:1px solid var(--line)\"><b style=\"display:block;font-size:18px;font-weight:800\">${scrap.length}</b>\n        <span style=\"font-size:11.5px;color:var(--sub)\">스크랩</span></div>\n      <div style=\"flex:1;border-left:1px solid var(--line)\"><b style=\"display:block;font-size:18px;font-weight:800\">${liked.length}</b>\n        <span style=\"font-size:11.5px;color:var(--sub)\">공감한 글</span></div>\n    </div>\n    <div class=\"card\" style=\"margin-top:10px\">\n      <div class=\"sec\">내가 쓴 댓글</div>\n      ${mine.length?mine.slice(0,50).map(x=>`<button class=\"mrow\" data-open=\"${x.p.id}\">\n          <div class=\"src\">${esc(x.p.title)}</div>\n          <div class=\"txt\">${esc(x.c.text)}</div>\n          <div class=\"tm\">${ago(x.c.at)}</div></button>`).join('')\n        :`<div class=\"note\" style=\"color:var(--faint)\">아직 단 댓글이 없습니다. 글을 열고 선택지를 눌러보세요.</div>`}\n    </div>\n    <div class=\"card\" style=\"margin-top:10px\">\n      <div class=\"sec\">스크랩</div>\n      ${scrap.length?scrap.map(p=>`<button class=\"mrow\" data-open=\"${p.id}\">\n          <div class=\"txt\" style=\"font-weight:700\">${esc(p.title)}</div>\n          <div class=\"tm\">♡ ${p.likes} · 💬 ${cCount(p)} · ${ago(p.at)}</div></button>`).join('')\n        :`<div class=\"note\" style=\"color:var(--faint)\">스크랩한 글이 없습니다.</div>`}\n    </div>\n  </div>`;\n}\nfunction arcHTML(p){\n  if(!p.arc) return '';\n  const list=DB.posts.filter(x=>x.arc===p.arc).slice().sort((a,b)=>a.at-b.at);\n  if(list.length<2) return '';\n  return `<div class=\"arc-box\"><div class=\"sec\">🔗 이어지는 이야기 · ${esc(p.arc)}</div>\n    ${list.map((x,i)=>`<button class=\"arc-item ${x.id===p.id?'now':''}\" data-open=\"${x.id}\">\n      <span class=\"no\">${i+1}</span><span class=\"tt\">${esc(x.title)}</span>\n      <span class=\"tm\">${x.id===p.id?'지금 보는 글':ago(x.at)}</span></button>`).join('')}\n    <div class=\"note\" style=\"padding:10px 0 12px\">같은 사건을 다룬 글이 ${list.length}개 올라왔습니다.</div></div>`;\n}\nfunction pollHTML(p){\n  const tot=totalVotes(p)||1;\n  const voted=p.myVote!=null;\n  return `<div class=\"poll\">${p.options.map((o,i)=>{\n    const v=p.votes[i]||0, pc=Math.round(v/tot*100);\n    if(!voted) return `<button class=\"opt\" data-vote=\"${p.id}:${i}\"><span class=\"lb\">\n      <span>${esc(o)}</span></span></button>`;\n    return `<div class=\"opt done ${p.myVote===i?'mine':''}\">\n      <span class=\"bar\" style=\"width:${pc}%\"></span>\n      <span class=\"lb\"><span>${esc(o)}</span>\n        ${p.myVote===i?'<span class=\"chk\">내 선택</span>':''}\n        <span class=\"pc\">${pc}%</span></span></div>`;\n  }).join('')}</div>\n  <div class=\"poll-sum\">${voted?`${totalVotes(p)}명 참여`:'선택하면 결과가 보입니다'}</div>`;\n}\nfunction cName(c){\n  if(c.by==='w') return '익명(글쓴이)';\n  if(c.by==='me') return '익명(나)';\n  return '익명'+c.no;\n}\nfunction cHTML(c,isReply){\n  return `<div class=\"c-item ${isReply?'reply':''}\">\n    <span class=\"avatar\">${c.by==='w'?'글':(c.by==='me'?'나':'?')}</span>\n    <div class=\"c-main\"><div class=\"c-who\">${cName(c)}${c.by==='me'?'<em>내 댓글</em>':''}</div>\n      <div class=\"c-text\">${esc(c.text)}</div>\n      <div class=\"c-foot\"><span>${ago(c.at)}</span>\n        <button data-clike=\"${c.id}\" class=\"${c.liked?'on':''}\">공감 ${c.likes}</button>\n        ${isReply?'':`<button data-reply=\"${c.id}\">대댓글</button>`}</div></div></div>`;\n}\nfunction vDetail(){\n  const p=postOf(S.post); if(!p){ S.view='feed'; return vFeed(); }\n  const byId={}; p.comments.forEach(c=>byId[c.id]=c);\n  const tops=p.comments.filter(c=>!c.parent||!byId[c.parent]);\n  const cs=tops.map(c=>cHTML(c,false)+\n      p.comments.filter(x=>x.parent===c.id).map(x=>cHTML(x,true)).join('')).join('')\n    || `<div class=\"c-item\"><div class=\"c-main\" style=\"color:var(--faint);font-size:13.5px\">첫 댓글을 남겨보세요.</div></div>`;\n  const waiting=DB.pending.some(q=>q.pid===p.id);\n  const f=srcOf(p)||{};\n  const left=(f.choices||[]).map((c,i)=>({c,i})).filter(x=>p.used.indexOf(x.i)<0);\n  return `<div class=\"d-wrap\">\n      <div class=\"d-head\"><span class=\"avatar\">${p.anon?'?':'나'}</span>\n        <div><div class=\"d-who\">${p.anon?'익명':esc(p.author||'나')}</div>\n        <div class=\"d-sub\">${ago(p.at)}</div></div></div>\n      <h1 class=\"d-title\">${esc(p.title)}</h1>\n      <div class=\"d-body\">${esc(p.body)}</div>\n      ${p.image?`<div class=\"shot\"><i>📷</i>${esc(p.image)}</div>`:''}\n      ${isPoll(p)?pollHTML(p):''}\n      <div class=\"d-actions\">\n        <button class=\"pill ${p.liked?'on':''}\" data-like=\"${p.id}\">♡ 공감 ${p.likes}</button>\n        <button class=\"pill ${p.scrapped?'on':''}\" data-scrap=\"${p.id}\">☆ 스크랩 ${p.scraps}</button>\n      </div></div>\n    ${arcHTML(p)}\n    <div class=\"c-head\">댓글 ${cCount(p)}</div>${cs}\n    ${waiting?`<div class=\"typing\"><span class=\"dot\"></span><span class=\"dot\"></span><span class=\"dot\"></span><b>누군가 답글을 쓰는 중…</b></div>`:''}\n    ${left.length?`<div class=\"choices\"><div class=\"lbl\">이 글에 남길 말 고르기</div>${\n      left.map(x=>`<button class=\"choice\" data-choice=\"${p.id}:${x.i}\">${esc(x.c.text)}</button>`).join('')}</div>`:''}\n    <div class=\"composer\">\n      <input id=\"cIn\" placeholder=\"${S.replyTo?'대댓글 입력…':'댓글을 입력하세요'}\" autocomplete=\"off\">\n      <button class=\"send\" data-act=\"send\">등록</button></div>`;\n}\n\nfunction grabPerson(){                    // 다시 그리기 전에 입력 중인 값을 챙긴다\n  S.pd=S.pd||{};\n  ['prName','prRole','prAge','prBuild','prShape','prMemo'].forEach(id=>{\n    const el=document.getElementById(id);\n    if(el) S.pd[id]=el.value;\n  });\n}\nfunction shrinkPhoto(file,cb){\n  const rd=new FileReader();\n  rd.onload=()=>{\n    const img=new Image();\n    img.onload=()=>{\n      const S0=200, c=document.createElement('canvas');\n      c.width=S0; c.height=S0;\n      const side=Math.min(img.width,img.height);\n      const sx=(img.width-side)/2, sy=(img.height-side)/2;\n      const ctx=c.getContext('2d');\n      ctx.drawImage(img,sx,sy,side,side,0,0,S0,S0);\n      try{ cb(c.toDataURL('image/jpeg',0.8)); }\n      catch(e){ toast('사진을 처리하지 못했습니다'); }\n    };\n    img.onerror=()=>toast('이미지 파일이 아닙니다');\n    img.src=String(rd.result);\n  };\n  rd.onerror=()=>toast('파일을 읽지 못했습니다');\n  rd.readAsDataURL(file);\n}\nfunction mentionCount(pr){\n  const name=String(pr.name||'').trim();\n  if(!name) return 0;\n  const count=key=>{\n    if(!key||key.length<2) return 0;\n    let n=0;\n    DB.posts.forEach(p=>{\n      const hay=p.title+'\\n'+p.body+'\\n'+p.comments.map(c=>c.text).join('\\n');\n      let i=0;\n      while((i=hay.indexOf(key,i))>=0){ n++; i+=key.length; }\n    });\n    return n;\n  };\n  let n=count(name);\n  if(!n){                                  // 전체 이름이 안 나오면 가장 긴 토막으로 다시 센다\n    const tok=name.split(/[\\s·,]+/).filter(x=>x.length>=2).sort((a,b)=>b.length-a.length)[0];\n    if(tok&&tok!==name) n=count(tok);\n  }\n  return n;\n}\nconst STOP=['진짜','너무','그냥','우리','오늘','근데','어떻게','이거','저거','그거','하는','있는','없는',\n  '합니다','했는데','인데','같은','같아요','에서','한테','에게','아니','다들','혹시','제발','때문','정도',\n  '사람','생각','이번','저는','제가','내가','나는','지금','좀더','때문에','건가요','인가요','건데','뭔가',\n  '하나','둘다','하고','저도','그럼','이런','그런','저런','대해','위해','정말','완전','약간','조금','많이',\n  '그리고','하면','해서','되는','되면','보고','보면','거의','아직','이미','다시','계속','매번','원래','차라리'];\nlet tkCache={key:'',list:[]};\nfunction trendList(){\n  const key=DB.posts.length+':'+DB.posts.reduce((a,p)=>a+p.comments.length,0);\n  if(tkCache.key===key) return tkCache.list;\n  const cnt={};\n  DB.posts.slice(0,25).forEach(p=>{\n    const text=p.title+' '+p.body;\n    text.split(/[^가-힣A-Za-z0-9]+/).forEach(raw=>{\n      let w=raw.trim();\n      if(w.length>=3) w=w.replace(/(으로|에서|한테|에게|입니다|이라고|라고|은|는|이|가|을|를|에|의|도|만|과|와|로)$/,'');\n      if(w.length<2||w.length>8) return;\n      if(/^[A-Za-z]+$/.test(w)&&w.length<3) return;      // vs, ok 같은 짧은 영문 제외\n      if(STOP.indexOf(w)>=0) return;\n      if(/^[0-9]+$/.test(w)) return;\n      cnt[w]=(cnt[w]||0)+1;\n    });\n  });\n  const list=Object.keys(cnt).filter(w=>cnt[w]>=2).sort((a,b)=>cnt[b]-cnt[a]).slice(0,6);\n  tkCache={key,list};\n  return list;\n}\nfunction tickHTML(){\n  const list=trendList();\n  if(!list.length) return '';\n  if(S.tick>=list.length) S.tick=0;\n  return `<button class=\"tick\" data-trend=\"${esc(list[S.tick])}\">\n    <span class=\"lbl2\">실시간 인기</span>\n    <span class=\"rk\">${S.tick+1}</span>\n    <span class=\"tw\" id=\"tickTxt\">${esc(list[S.tick])}</span>\n    <span class=\"ch\">›</span></button>`;\n}\nfunction rotateTick(){\n  if(!DB||!(S.view==='feed'||S.view==='poll')) return;\n  const list=trendList(); if(list.length<2) return;\n  S.tick=(S.tick+1)%list.length;\n  const el=document.querySelector('.tick');\n  if(!el) return;\n  el.dataset.trend=list[S.tick];\n  const rk=el.querySelector('.rk'), tw=el.querySelector('.tw');\n  if(rk) rk.textContent=S.tick+1;\n  if(tw){ tw.textContent=list[S.tick]; tw.style.animation='none'; void tw.offsetWidth; tw.style.animation=''; }\n}\nlet mcCache={key:'',map:{},posts:{},interest:{}};\nfunction mentionKeys(pr){\n  const name=String(pr.name||'').trim();\n  if(!name) return [];\n  const keys=[name];\n  const tok=name.split(/[\\s·,]+/).filter(x=>x.length>=2).sort((a,b)=>b.length-a.length)[0];\n  if(tok&&tok!==name) keys.push(tok);\n  return keys;\n}\n/* 관심도: 그 인물이 언급된 글에 내가 한 상호작용의 무게 합\n   공감 1 · 스크랩 2 · 내 댓글 3 · 투표 1 */\nfunction myWeight(p){\n  let w=0;\n  if(p.liked) w+=1;\n  if(p.scrapped) w+=2;\n  if(isPoll(p)&&p.myVote!=null) w+=1;\n  w+=p.comments.filter(c=>c.by==='me').length*3;\n  return w;\n}\nfunction buildMentions(){\n  const key=DB.posts.length+':'+DB.posts.reduce((a,p)=>a+p.comments.length+myWeight(p),0)\n    +':'+DB.people.length;\n  if(mcCache.key===key) return mcCache;\n  const map={}, posts={}, interest={};\n  DB.people.forEach(pr=>{\n    const keys=mentionKeys(pr);\n    let n=0; const list=[];\n    DB.posts.forEach(p=>{\n      const hay=p.title+'\\n'+p.body+'\\n'+p.comments.map(c=>c.text).join('\\n');\n      let hit=0;\n      for(let k=0;k<keys.length;k++){\n        let i=0, c=0;\n        while((i=hay.indexOf(keys[k],i))>=0){ c++; i+=keys[k].length; }\n        if(c){ hit=c; break; }               // 전체 이름이 잡히면 줄임말은 세지 않는다\n      }\n      if(hit){ n+=hit; list.push(p.id); }\n    });\n    map[pr.id]=n; posts[pr.id]=list;\n    interest[pr.id]=list.reduce((a,id)=>{ const p=postOf(id); return a+(p?myWeight(p):0); },0);\n  });\n  mcCache={key,map,posts,interest};\n  return mcCache;\n}\nfunction interestOf(pr){ return buildMentions().interest[pr.id]||0; }\nfunction mentionCount(pr){ return buildMentions().map[pr.id]||0; }\nfunction vSearch(){\n  const w=String(S.q||'').trim();\n  const list=DB.posts.filter(p=>\n    (p.title+'\\n'+p.body+'\\n'+p.comments.map(c=>c.text).join('\\n')).indexOf(w)>=0);\n  if(!list.length) return `<div class=\"empty\">'${esc(w)}'가 들어간 글이 없습니다.</div>`;\n  return `<div class=\"sec\" style=\"background:var(--card)\">'${esc(w)}' · 글 ${list.length}개</div>`\n    + list.map(p=>`<button class=\"hot-row\" data-open=\"${p.id}\">\n      <span class=\"hot-b\"><span class=\"hot-t\">${isPoll(p)?'<span class=\"vbadge\">투표</span>':''}${esc(p.title)}</span>\n        <span class=\"hot-m\">♡ ${p.likes} · 💬 ${cCount(p)} · ${ago(p.at)}</span></span></button>`).join('');\n}\nfunction vMentions(){\n  const pr=DB.people.find(x=>x.id===S.ment);\n  if(!pr){ S.view='people'; return vPeople(); }\n  const ids=buildMentions().posts[pr.id]||[];\n  const list=ids.map(id=>postOf(id)).filter(Boolean);\n  if(!list.length) return `<div class=\"empty\">${esc(pr.name)}이(가) 언급된 글이 아직 없습니다.</div>`;\n  return `<div class=\"sec\" style=\"background:var(--card)\">${esc(pr.name)} · 글 ${list.length}개에서 언급 · 관심도 ${interestOf(pr)}</div>`\n    + `<div class=\"note\" style=\"background:var(--card);padding:0 14px 12px\">\n        이 사람이 언급된 글에 공감·스크랩·댓글·투표한 만큼 관심도가 쌓입니다.</div>`\n    + list.map(p=>`<button class=\"hot-row\" data-open=\"${p.id}\">\n      <span class=\"hot-b\"><span class=\"hot-t\">${isPoll(p)?'<span class=\"vbadge\">투표</span>':''}${esc(p.title)}</span>\n        <span class=\"hot-m\">♡ ${p.likes} · 💬 ${cCount(p)} · ${ago(p.at)}</span></span></button>`).join('');\n}\nfunction vPeople(){\n  const bm=buildMentions(), mm=bm.map, ii=bm.interest;\n  const max=Math.max(1,...DB.people.map(pr=>mm[pr.id]||0));\n  const any=DB.people.some(pr=>(mm[pr.id]||0)>0);\n  return `<div class=\"pad\">\n    ${any?`<div class=\"card\" style=\"padding-bottom:8px\">\n      <div class=\"sec\">언급 횟수</div>\n      <div class=\"note\" style=\"padding-bottom:6px\">지금까지 올라온 글과 댓글에서 이름이 나온 횟수입니다.</div>\n      ${DB.people.slice().sort((a,b)=>(mm[b.id]||0)-(mm[a.id]||0)).map(pr=>`\n        <div class=\"bar-row\"><span class=\"bl\">${esc(pr.name)}</span>\n          <span class=\"bt\"><span style=\"width:${Math.round((mm[pr.id]||0)/max*100)}%\"></span></span>\n          <span class=\"bn\">${mm[pr.id]||0}</span></div>`).join('')}\n    </div>`:''}\n    <div class=\"card\">\n      <div class=\"sec\">등장 인물 ${DB.people.length}명</div>\n      <div class=\"note\">여기 적어둔 인물이 프롬프트 생성기에 그대로 들어갑니다.\n        AI가 이 사람들을 글과 댓글에 등장시킵니다.</div>\n      ${DB.people.length?DB.people.map(pr=>{\n        const head=[pr.age,pr.build,pr.shape].filter(Boolean).join(' · ');\n        const lines=[[pr.desc,''],[pr.look,'외모'],[pr.chara,'성격'],[pr.memo,'']]\n          .filter(x=>x[0]).slice(0,3)\n          .map(x=>`<span class=\"pp-m\">${x[1]?`<b>${x[1]}</b> `:''}${esc(x[0])}</span>`).join('');\n        const mc=mm[pr.id]||0, it=ii[pr.id]||0;\n        return `<div class=\"pp\"><button class=\"pp-main\" data-person=\"${pr.id}\">\n          <span class=\"pp-av\">${pr.photo?`<img src=\"${pr.photo}\" alt=\"\">`\n            :esc((pr.name||'?').trim().slice(0,1))}</span>\n          <span class=\"pp-b\">\n            <span class=\"pp-n\">${esc(pr.name)}${pr.role?`<em>${esc(pr.role)}</em>`:''}</span>\n            ${head?`<span class=\"pp-d\">${esc(head)}</span>`:''}\n            ${lines}\n            <span class=\"pp-int ${it?'':'zero'}\">관심도 ${it}</span></span></button>\n          <button class=\"pp-ment ${mc?'':'zero'}\" data-ment=\"${pr.id}\">\n            ${mc?`언급된 글 보기 · ${mc}번 ›`:'아직 언급되지 않았습니다'}</button></div>`;}).join('')\n        :`<div class=\"note\" style=\"color:var(--faint)\">아직 등록한 인물이 없습니다. 오른쪽 위 ＋ 로 추가하세요.</div>`}\n    </div>\n    <div style=\"padding:0 2px\"><button class=\"btn\" data-act=\"add-person\">＋ 인물 추가</button></div>\n    <div class=\"note\" style=\"padding:14px 4px\">교수, 과대, 조교, 동아리 회장처럼 커뮤니티에서 자주 언급되는 사람을 적어두세요.\n      실명 대신 호칭이나 별명을 쓰는 편이 자연스럽습니다.</div>\n  </div>`;\n}\n\n/* ---- 설정 (데이터 · 속도 · 프롬프트 생성기 · 초기화) ---- */\nfunction vSettings(){\n  const c=DB.cfg;\n  const waiting=DB.feed.length-DB.revealed;\n  return `<div class=\"pad\">\n    <div class=\"card\">\n      <div class=\"sec\">글 불러오기</div>\n      <div class=\"note\">AI가 출력한 내용을 그대로 붙여넣으세요. 코드펜스나 앞뒤 설명이 섞여 있어도 배열만 뽑아냅니다.\n        기존 글은 지워지지 않고 <b>뒤에 이어 쌓입니다.</b></div>\n      <div class=\"fld\">\n        <textarea class=\"ta\" id=\"paste\" placeholder='[ { \"title\": \"...\", \"body\": \"...\" } ]'>${esc(S.pasted)}</textarea>\n        <button class=\"btn\" data-act=\"add-paste\">붙여넣은 내용 추가</button>\n        <button class=\"btn sub\" data-act=\"pick-file\">파일에서 불러오기 (.json / .txt)</button>\n      </div>\n      <div class=\"sec\" style=\"padding-top:4px\">글 ${DB.feed.length}개 (대기 ${waiting}) ·\n        투표 ${DB.polls.length}개 (대기 ${DB.polls.length-DB.prevealed})</div>\n      ${(S.srcOpen?DB.sources:DB.sources.slice(-3)).map(x=>\n        `<div class=\"src-item\"><span class=\"n\">${esc(x.name)}</span>\n          <span class=\"c\">${x.count}개</span></div>`).join('')}\n      ${DB.sources.length>3?`<button class=\"more-btn\" data-act=\"src-toggle\">\n        ${S.srcOpen?'접기':`이전 기록 ${DB.sources.length-3}개 더 보기`}</button>`:''}\n    </div>\n\n    <div class=\"card\">\n      <div class=\"sec\">공개 속도</div>\n      ${slider('postGap',c.postGap,'글 올라오는 간격','다음 글이 게시판에 올라오기까지')}\n      ${slider('commentGap',c.commentGap,'댓글 달리는 간격','한 글에 댓글이 하나씩 붙는 속도')}\n      ${slider('replyDelay',c.replyDelay,'답글 지연','선택지를 누른 뒤 답글이 오기까지 (실제 초)')}\n      <div class=\"row\"><div class=\"k\">시간대 반영\n        <small>${DB.cfg.tod!==false\n          ? `켜짐 · 지금은 ${todNow()[3]} (간격 ×${todNow()[2]})`\n          : '꺼짐 · 하루 종일 같은 속도'}</small></div>\n        <button class=\"pill ${DB.cfg.tod!==false?'on':''}\" data-act=\"tod\">\n          ${DB.cfg.tod!==false?'켜짐':'꺼짐'}</button></div>\n      <div class=\"fld\"><button class=\"btn sub\" data-act=\"skip\">다음 글 지금 공개</button></div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"sec\">프롬프트 생성기</div>\n      <div class=\"note\">AI 채팅에 붙여넣을 지시문을 만듭니다. 속도는 이 앱에서 조절하므로 프롬프트에는 시간 항목이 들어가지 않습니다.</div>\n      <div class=\"seg\" style=\"padding:0 14px 12px\">\n        <button class=\"${S.genMode!=='poll'?'on':''}\" data-gmode=\"post\">게시글</button>\n        <button class=\"${S.genMode==='poll'?'on':''}\" data-gmode=\"poll\">투표</button>\n      </div>\n      ${S.genMode==='poll'?`\n      ${slider('qn',S.g.qn,'투표 개수','한 번에 만들 투표 수')}\n      <div class=\"fld\"><label>소재 힌트</label>\n        <input id=\"qT\" value=\"${esc(S.g.qtopic)}\"></div>\n      <div class=\"fld\"><button class=\"btn sub\" data-act=\"gen-poll\">투표 프롬프트 만들기</button>\n        <button class=\"btn sub\" data-act=\"qtpl-toggle\" style=\"margin-top:8px\">\n          ${S.qtplEdit?'투표 프롬프트 닫기':'기본 투표 프롬프트 수정'}${DB.qtpl?' (수정됨)':''}</button>\n        ${S.qtplEdit?`\n        <div class=\"note\" style=\"padding:10px 0 6px\"><b>{개수}</b> <b>{주제}</b> <b>{누적}</b> 이 자동으로 채워집니다.</div>\n        <textarea class=\"ta\" id=\"qtplBox\" style=\"min-height:240px\">${esc(S.qtplDraft!=null?S.qtplDraft:qtpl())}</textarea>\n        <button class=\"btn\" data-act=\"qtpl-save\">이 내용으로 저장</button>\n        <button class=\"btn sub\" data-act=\"qtpl-reset\">기본값으로 되돌리기</button>`:''}\n        ${S.gen?`<textarea class=\"ta\" id=\"genOut\" style=\"min-height:200px;margin-top:10px\" readonly>${esc(S.gen)}</textarea>\n        <button class=\"btn\" data-act=\"copy\">프롬프트 복사</button>`:''}</div>\n      `:`\n      ${slider('n',S.g.n,'글 개수','한 번에 만들 게시글 수')}\n      ${slider('imgPct',S.g.imgPct,'사진 넣는 비율','사진 설명이 붙는 글의 비율')}\n      <div class=\"fld\"><label>주제 힌트</label>\n        <input id=\"gT\" value=\"${esc(S.g.topic)}\"></div>\n      <div class=\"row\"><div class=\"k\">떡밥 전개<small>한두 사건을 여러 글로 이어가기</small></div>\n        <button class=\"pill ${S.g.arc!=='0'?'on':''}\" data-act=\"toggle-arc\">\n          ${S.g.arc!=='0'?'켜짐':'꺼짐'}</button></div>\n      ${DB.people.length\n        ?slider('peoplePct',S.g.peoplePct,`인물 언급 비율 (등록 ${DB.people.length}명)`,'인물이 언급되는 글의 비율')\n        :`<div class=\"note\">인물 탭에 사람을 등록하면 인물 언급 옵션이 생깁니다.</div>`}\n      <div class=\"fld\"><button class=\"btn sub\" data-act=\"gen\">프롬프트 만들기</button>\n        <button class=\"btn sub\" data-act=\"tpl-toggle\" style=\"margin-top:8px\">\n          ${S.tplEdit?'기본 프롬프트 닫기':'기본 프롬프트 수정'}${DB.tpl?' (수정됨)':''}</button>\n        ${S.tplEdit?`\n        <div class=\"note\" style=\"padding:10px 0 6px\">중괄호 자리표시자는 만들 때 자동으로 채워집니다.\n          <b>{개수}</b> <b>{주제}</b> <b>{누적}</b> <b>{사진필드}</b> <b>{사진규칙}</b> <b>{인물}</b></div>\n        <textarea class=\"ta\" id=\"tplBox\" style=\"min-height:260px\">${esc(S.tplDraft!=null?S.tplDraft:tpl())}</textarea>\n        <button class=\"btn\" data-act=\"tpl-save\">이 내용으로 저장</button>\n        <button class=\"btn sub\" data-act=\"tpl-reset\">기본값으로 되돌리기</button>`:''}\n        <button class=\"btn sub\" data-act=\"ptpl-toggle\" style=\"margin-top:8px\">\n          ${S.ptplEdit?'인물 프롬프트 닫기':'인물 프롬프트 수정'}${DB.ptpl?' (수정됨)':''}</button>\n        ${S.ptplEdit?`\n        <div class=\"note\" style=\"padding:10px 0 6px\">인물 반영을 켰을 때 프롬프트 끝에 붙는 부분입니다.\n          <b>{명단}</b>은 인물 탭 내용으로, <b>{빈도}</b>는 위에서 고른 등장 빈도로 채워집니다.</div>\n        <textarea class=\"ta\" id=\"ptplBox\" style=\"min-height:200px\">${esc(S.ptplDraft!=null?S.ptplDraft:ptpl())}</textarea>\n        <button class=\"btn\" data-act=\"ptpl-save\">이 내용으로 저장</button>\n        <button class=\"btn sub\" data-act=\"ptpl-reset\">기본값으로 되돌리기</button>`:''}\n        ${S.gen?`<textarea class=\"ta\" id=\"genOut\" style=\"min-height:200px;margin-top:10px\" readonly>${esc(S.gen)}</textarea>\n        <button class=\"btn\" data-act=\"copy\">프롬프트 복사</button>`:''}</div>\n      `}\n    </div>\n\n    <div class=\"card\">\n      <div class=\"sec\">백업</div>\n      <div class=\"note\">데이터는 이 브라우저의 <b>현재 주소</b>에만 저장됩니다.\n        파일을 다른 이름으로 다시 받거나 주소가 바뀌면 빈 상태로 시작합니다.\n        <b>인물을 등록한 뒤에는 꼭 백업 파일을 받아두세요.</b></div>\n      <div class=\"fld\">\n        <button class=\"btn sub\" data-act=\"backup-save\">백업 파일 저장</button>\n        <button class=\"btn sub\" data-act=\"backup-load\" style=\"margin-top:8px\">백업 파일에서 복원</button>\n        <button class=\"btn sub\" data-act=\"backup-text\" style=\"margin-top:8px\">\n          ${S.backupText?'백업 텍스트 닫기':'백업 텍스트로 보기 (복사용)'}</button>\n        ${S.backupText?`<textarea class=\"ta\" id=\"bkBox\" style=\"min-height:140px;margin-top:9px\" readonly>${esc(S.backupText)}</textarea>\n        <button class=\"btn\" data-act=\"backup-copy\">백업 텍스트 복사</button>`:''}\n      </div>\n      <div class=\"sec\" style=\"padding-top:2px\">인물만 옮기기</div>\n      <div class=\"note\">다른 파일에서 쓰던 인물 목록을 여기에 붙여넣으면 이름이 겹치지 않는 것만 추가됩니다.</div>\n      <div class=\"fld\">\n        <textarea class=\"ta\" id=\"ppaste\" style=\"min-height:90px\" placeholder='[{\"name\":\"김대현 교수\",\"role\":\"전공 교수\"}]'>${esc(S.ppaste)}</textarea>\n        <button class=\"btn sub\" data-act=\"people-add\">인물 목록 붙여넣어 추가</button>\n        <button class=\"btn sub\" data-act=\"people-copy\" style=\"margin-top:8px\">지금 인물 ${DB.people.length}명 복사</button>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"sec\">저장 공간</div>\n      <div class=\"row\"><div class=\"k\">저장 방식\n        <small>${idb?'IndexedDB — 브라우저가 허용하는 만큼 넉넉하게 씁니다':'브라우저 기본 저장소 — 약 5MB까지 저장됩니다'}</small></div></div>\n      <div class=\"row\"><div class=\"k\">사용량\n        <small>${S.quota?`${fmtMB(S.quota.use)} 사용 중${S.quota.max?` · 한도 ${fmtMB(S.quota.max)}`:''}`:'확인 중…'}</small></div></div>\n      <div class=\"fld\"><button class=\"btn sub\" data-act=\"persist\">저장 공간 보호 요청</button></div>\n      <div class=\"note\" style=\"padding:0 14px 14px\">브라우저가 공간이 부족할 때 데이터를 지우지 않도록 요청합니다.\n        허용 여부는 브라우저가 정합니다.</div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"sec\">초기화</div>\n      <div class=\"note\">쌓아둔 글, 공개된 게시글, 내가 단 댓글이 모두 지워지고 처음 상태로 돌아갑니다.</div>\n      <div class=\"fld\"><button class=\"btn danger\" data-act=\"reset\">데이터 초기화</button></div>\n    </div>\n    <div class=\"note\" style=\"text-align:center;padding:18px 0 8px\">캠퍼스타임 · 데이터는 이 브라우저에만 저장됩니다</div>\n  </div>`;\n}\n\nfunction renderSheet(){\n  let inner='';\n  if(S.sheet.type==='person'){\n    const saved=(S.sheet.id?DB.people.find(x=>x.id===S.sheet.id):null)||{};\n    const d=S.pd||{};\n    const photo=(d.photo!==undefined)?d.photo:(saved.photo||'');\n    const pr={photo:photo, name:d.prName!=null?d.prName:saved.name, role:d.prRole!=null?d.prRole:saved.role,\n      age:d.prAge!=null?d.prAge:saved.age, build:d.prBuild!=null?d.prBuild:saved.build,\n      shape:d.prShape!=null?d.prShape:saved.shape, memo:d.prMemo!=null?d.prMemo:saved.memo};\n    const ROLES=['전공 교수','교양 교수','시간강사','조교','과대표','부과대','학생회장','동아리 회장',\n                 '선배','동기','후배','같은 팀플 조원','알바 사장님','기타'];\n    const f=(id,label,val,ph)=>`<div class=\"fld\" style=\"padding:0 0 11px\"><label>${label}</label>\n      <input id=\"${id}\" value=\"${esc(val||'')}\" placeholder=\"${esc(ph)}\"></div>`;\n    inner=`<h3>${S.sheet.id?'인물 수정':'인물 추가'}</h3>\n      <div class=\"ph-box\">\n        <div class=\"ph-prev\">${photo?`<img src=\"${photo}\" alt=\"\">`:'👤'}</div>\n        <div class=\"ph-btns\">\n          <button data-act=\"photo-pick\">${photo?'사진 바꾸기':'프로필 사진 올리기'}</button>\n          ${photo?`<button data-act=\"photo-clear\">사진 제거</button>`:''}\n        </div>\n      </div>\n      <div class=\"row2\">\n        ${f('prName','이름 · 호칭',pr.name,'예: 김대현 교수')}\n        <div class=\"fld\"><label>역할 (직접 입력 가능)</label>\n          <input id=\"prRole\" list=\"roleOpts\" value=\"${esc(pr.role||'')}\" placeholder=\"예: 전공 교수\">\n          <datalist id=\"roleOpts\">${ROLES.map(r=>`<option value=\"${r}\"></option>`).join('')}</datalist></div>\n      </div>\n      ${f('prAge','나이 · 학번',pr.age,'예: 24학번 3학년 / 40대 후반')}\n      <div class=\"row2\">\n        ${f('prBuild','키 · 몸무게',pr.build,'예: 178cm / 65kg')}\n        ${f('prShape','체형',pr.shape,'예: 마른 편')}\n      </div>\n      <div class=\"fld\" style=\"padding:0 0 11px\"><label>메모 (외모 · 성격 · 습관 · 학생들과의 관계)</label>\n        <textarea class=\"ta\" id=\"prMemo\" style=\"min-height:110px\"\n          placeholder=\"예: 광고홍보론 담당. 뿔테 안경에 늘 셔츠.&#10;깐깐하지만 채점은 공정하다.&#10;오후 5시 넘으면 자리에 없다.\">${esc(pr.memo||'')}</textarea></div>\n      <button class=\"btn\" data-act=\"save-person\">${S.sheet.id?'저장':'추가'}</button>\n      ${S.sheet.id?`<button class=\"btn danger\" data-act=\"del-person\">삭제</button>`:''}\n      <button class=\"btn sub\" data-act=\"close-sheet\">취소</button>`;\n  }else if(S.sheet.type==='reset'){\n    inner=`<h3>정말 초기화할까요?</h3>\n      <div style=\"font-size:13.5px;color:var(--sub);line-height:1.6;margin-bottom:14px\">\n        쌓아둔 글 ${DB.feed.length}개, 공개된 게시글 ${DB.posts.length}개, 등록한 인물 ${DB.people.length}명이 모두 사라집니다.\n        되돌릴 수 없습니다.</div>\n      <button class=\"btn danger\" data-act=\"reset-yes\">초기화</button>\n      <button class=\"btn sub\" data-act=\"close-sheet\">취소</button>`;\n  }\n  const el=document.createElement('div');\n  el.className='sheet-bg'; el.innerHTML=`<div class=\"sheet\">${inner}</div>`;\n  el.addEventListener('click',e=>{ if(e.target===el){ S.sheet=null; S.pd=null; render(); } });\n  document.body.appendChild(el);\n}\n\n/* ===================== 동작 ===================== */\n\nfunction chooseReply(pid,idx){\n  const p=postOf(pid); if(!p) return;\n  const f=srcOf(p)||{}; const ch=(f.choices||[])[idx]; if(!ch) return;\n  if(p.used.indexOf(idx)>=0) return;\n  p.used.push(idx);\n  if(!p.myNo) p.myNo=nextNo(p);\n  const parent=(ch.to!=null && p.cmap[ch.to])?topOf(p,p.cmap[ch.to]):null;\n  const myId=uid();\n  p.comments.push({id:myId,by:'me',no:p.myNo,text:String(ch.text||''),at:DB.clock,\n    likes:0,liked:false,parent});\n  let t=Date.now();\n  const gapS=Math.max(1,DB.cfg.replyDelay)*1000;\n  (ch.replies||[]).forEach(r=>{\n    t+=gapS+Math.floor(Math.random()*1500);\n    DB.pending.push({pid:p.id,parent:myId,text:String(r.text||''),writer:!!r.writer,\n      likes:+r.likes||0,due:t});           // parent는 내 댓글 id로 고정된다\n  });\n  save(); render();\n  const m=$('#app'); if(m) m.scrollTop=m.scrollHeight;\n}\nfunction sendComment(){\n  const el=$('#cIn'); if(!el) return;\n  const text=el.value.trim(); if(!text) return;\n  const p=postOf(S.post); if(!p) return;\n  if(!p.myNo) p.myNo=nextNo(p);\n  p.comments.push({id:uid(),by:'me',no:p.myNo,text,at:DB.clock,likes:0,liked:false,parent:S.replyTo?topOf(p,S.replyTo):null});\n  S.replyTo=null; save(); render();\n  const m=$('#app'); if(m) m.scrollTop=m.scrollHeight;\n}\nfunction tpl(){ return (DB.tpl&&DB.tpl.trim())?DB.tpl:DEFAULT_TPL; }\nfunction ptpl(){ return (DB.ptpl&&DB.ptpl.trim())?DB.ptpl:DEFAULT_PTPL; }\nfunction qtpl(){ return (DB.qtpl&&DB.qtpl.trim())?DB.qtpl:DEFAULT_QTPL; }\nfunction buildPoll(){\n  S.gen=qtpl()\n    .split('{개수}').join(S.g.qn)\n    .split('{주제}').join(String(S.g.qtopic||'').trim()||'대학 생활 전반')\n    .split('{누적}').join(DB.polls.length);\n  render();\n  const o=$('#genOut'); if(o) o.scrollIntoView({block:'center'});\n}\nfunction buildPrompt(){\n  const n=S.g.n, topic=String(S.g.topic||'').trim(), withArc=S.g.arc!=='0';\n  const imgPct=+S.g.imgPct||0, withImg=imgPct>0;\n  const pPct=DB.people.length?(+S.g.peoplePct||0):0;\n\n  const imgField=withImg?'\\n    \"image\": \"텀블러만 놓인 빈 자리 사진\",':'';\n  const imgRule=withImg\n    ?'\\n- image — 실제 사진이 아니라 설명 한 줄이다. 화면에는 \"📷 …\" 상자로 뜬다.\\n  파일 경로나 URL, 확장자를 쓰지 마라. 30자 이내. 전체 글의 약 '+imgPct+'%에만 넣어라.'\n    :'\\n- image 필드는 넣지 마라.';\n\n  let cast='';\n  if(pPct>0){\n    const list=DB.people.map(pr=>{\n      const L=[];\n      if(pr.age) L.push('  나이: '+pr.age);\n      const bd=[pr.build,pr.shape].filter(Boolean).join(' · ');\n      if(bd) L.push('  체격: '+bd);\n      if(pr.look) L.push('  외모: '+pr.look);\n      if(pr.chara) L.push('  성격: '+pr.chara);\n      if(pr.desc) L.push('  소개: '+pr.desc);\n      if(pr.memo) L.push('  메모: '+String(pr.memo).split('\\n').join('\\n        '));\n      return '- '+pr.name+(pr.role?' ('+pr.role+')':'')+'\\n'+L.join('\\n');\n    }).join('\\n');\n    cast='\\n\\n'+ptpl()\n      .split('{명단}').join(list)\n      .split('{빈도}').join('전체 글의 약 '+pPct+'%');\n  }\n\n  const arcField=withArc?'\\n    \"arc\": \"도서관 자리 사건\",':'';\n  const arcRule=withArc\n    ?'\\n- arc — 같은 사건을 다루는 글에 똑같이 붙이는 이름표다. 앱이 이 값으로 글을 묶어 보여준다.\\n'\n     +'  한두 개 사건을 정하고, 그 사건에 대해 글 2~4개를 시간 순서대로 만들어라.\\n'\n     +'  제보 → 목격담이나 반론 → 결과 보고 순서가 자연스럽다. 뒤 글은 앞 글을 언급하며 시작해라.\\n'\n     +'  나머지 글에는 arc를 넣지 마라. 전체의 3분의 1을 넘기지 마라.'\n    :'\\n- arc 필드는 넣지 마라.';\n  S.gen=tpl()\n    .split('{떡밥필드}').join(arcField)\n    .split('{떡밥규칙}').join(arcRule)\n    .split('{개수}').join(n)\n    .split('{주제}').join(topic||'대학 생활 전반')\n    .split('{누적}').join(DB.feed.length)\n    .split('{사진필드}').join(imgField)\n    .split('{사진규칙}').join(imgRule)\n    .split('{인물}').join(cast);\n  render();\n  const o=$('#genOut'); if(o) o.scrollIntoView({block:'center'});\n}\nfunction copyPrompt(){ copyText(S.gen,'genOut'); }\nfunction copyText(t,elId){\n  if(!t) return;\n  if(navigator.clipboard&&navigator.clipboard.writeText){\n    navigator.clipboard.writeText(t).then(()=>toast('복사했습니다'),()=>fallback());\n  }else fallback();\n  function fallback(){\n    const o=$('#'+elId); if(!o) return;\n    o.removeAttribute('readonly'); o.select(); o.setSelectionRange(0,999999);\n    try{ document.execCommand('copy'); toast('복사했습니다'); }\n    catch(e){ toast('길게 눌러 복사해주세요'); }\n    o.setAttribute('readonly','readonly');\n  }\n}\nfunction back(){\n  S.replyTo=null;\n  nav(['detail','settings','mentions','search'].indexOf(S.view)>=0?(S.tab||'feed'):S.view);\n}\n\ndocument.addEventListener('click',e=>{\n  if(!DB) return;\n  const t=e.target.closest('[data-tab],[data-act],[data-open],[data-like],[data-scrap],[data-clike],[data-reply],[data-choice],[data-cfg],[data-person],[data-vote],[data-gmode],[data-ment],[data-trend]');\n  if(!t) return;\n  const d=t.dataset;\n  if(d.tab){ return nav(d.tab,d.tab); }\n  if(d.open){ S.post=+d.open; S.replyTo=null; return nav('detail'); }\n  if(d.choice){ const a=d.choice.split(':'); return chooseReply(+a[0],+a[1]); }\n  if(d.vote){\n    const a=d.vote.split(':'), p=postOf(+a[0]), i=+a[1];\n    if(p&&p.myVote==null&&p.options&&p.options[i]!==undefined){\n      p.myVote=i; p.votes[i]=(p.votes[i]||0)+1; save(); render();\n      toast(`'${p.options[i]}'에 투표했습니다`);\n    }\n    return;\n  }\n  if(d.person){ S.sheet={type:'person',id:+d.person}; S.pd=null; return render(); }\n  if(d.ment){ S.ment=+d.ment; return nav('mentions'); }\n  if(d.trend){ S.q=d.trend; return nav('search'); }\n  if(d.like){ const p=postOf(+d.like); p.liked=!p.liked; p.likes+=p.liked?1:-1; save(); return render(); }\n  if(d.scrap){ const p=postOf(+d.scrap); p.scrapped=!p.scrapped; p.scraps+=p.scrapped?1:-1; save(); return render(); }\n  if(d.clike){ const p=postOf(S.post); const c=p.comments.find(x=>x.id===+d.clike);\n    if(c){ c.liked=!c.liked; c.likes+=c.liked?1:-1; save(); } return render(); }\n  if(d.reply){ S.replyTo=+d.reply; render(); const i=$('#cIn'); if(i) i.focus(); return; }\n  if(d.cfg){ const a=d.cfg.split(':'); DB.cfg[a[0]]=parseFloat(a[1]); save(); tick(); return render(); }\n  if(d.gmode){ S.genMode=d.gmode; S.gen=''; return render(); }\n\n  switch(d.act){\n    case 'back': back(); break;\n    case 'go-settings': nav('settings'); break;\n    case 'send': sendComment(); break;\n    case 'add-person': S.sheet={type:'person',id:0}; S.pd=null; render(); break;\n    case 'photo-pick': grabPerson(); $('#pfile').click(); break;\n    case 'photo-clear': grabPerson(); S.pd.photo=''; render(); toast('사진을 제거했습니다'); break;\n    case 'save-person': {\n      const nm=$('#prName').value.trim(); if(!nm) return toast('이름을 입력하세요');\n      const g=id=>{ const el=$('#'+id); return el?String(el.value||'').trim():''; };\n      const cur0=S.sheet.id?DB.people.find(x=>x.id===S.sheet.id):null;\n      const photo=(S.pd&&S.pd.photo!==undefined)?S.pd.photo:((cur0&&cur0.photo)||'');\n      const data={name:nm,role:g('prRole')||'기타',age:g('prAge'),build:g('prBuild'),\n        shape:g('prShape'),memo:g('prMemo'),photo:photo};\n      const cur=S.sheet.id?DB.people.find(x=>x.id===S.sheet.id):null;\n      if(cur) Object.assign(cur,data);\n      else DB.people.push(Object.assign({id:Date.now()},data));\n      S.sheet=null; S.pd=null; S.view='people'; S.tab='people'; save(); render();\n      toast(cur?'수정했습니다':'인물을 추가했습니다'); break; }\n    case 'del-person': DB.people=DB.people.filter(x=>x.id!==S.sheet.id);\n      S.sheet=null; S.pd=null; save(); render(); toast('삭제했습니다'); break;\n    case 'close-sheet': S.sheet=null; S.pd=null; render(); break;\n    case 'tod': DB.cfg.tod=(DB.cfg.tod===false); save(); tick(); render();\n      toast(DB.cfg.tod?'시간대에 따라 속도가 달라집니다':'시간대 반영을 껐습니다'); break;\n    case 'skip': skipNext(); break;\n    case 'pull-load': pullLoad(); break;\n    case 'src-toggle': S.srcOpen=!S.srcOpen; render(); break;\n    case 'pick-file': S.fileMode='feed'; $('#file').click(); break;\n    case 'backup-save': downloadBackup(); break;\n    case 'backup-load': S.fileMode='backup'; $('#file').click(); break;\n    case 'backup-text': S.backupText=S.backupText?'':exportAll(); render(); break;\n    case 'backup-copy': copyText(S.backupText,'bkBox'); break;\n    case 'people-add': {\n      const el=$('#ppaste'); const v=el?el.value:'';\n      if(!v.trim()) return toast('붙여넣은 내용이 없습니다');\n      S.ppaste=''; mergePeople(v); break; }\n    case 'people-copy': {\n      S.ppaste=JSON.stringify(DB.people.map(pr=>{\n        const o={}; ['name','role','age','build','shape','desc','memo','photo'].forEach(k=>{ if(pr[k]) o[k]=pr[k]; });\n        return o; }), null, 1);\n      render(); copyText(S.ppaste,'ppaste'); break; }\n    case 'add-paste': {\n      const el=$('#paste'); const v=el?el.value:'';\n      if(!v.trim()) return toast('붙여넣은 내용이 없습니다');\n      S.pasted=''; addFeed(v,'붙여넣기'); break; }\n    case 'gen': buildPrompt(); break;\n    case 'gen-poll': buildPoll(); break;\n    case 'toggle-arc': S.g.arc=(S.g.arc==='0'?'1':'0'); render(); break;\n    case 'qtpl-toggle': S.qtplEdit=!S.qtplEdit; if(!S.qtplEdit) S.qtplDraft=null; render(); break;\n    case 'qtpl-save': {\n      const el=$('#qtplBox'); const v=el?el.value:'';\n      if(!v.trim()) return toast('내용이 비어 있습니다');\n      DB.qtpl=v; S.qtplDraft=null; save(); render(); toast('투표 프롬프트를 저장했습니다'); break; }\n    case 'qtpl-reset': DB.qtpl=null; S.qtplDraft=null; save(); render(); toast('기본값으로 되돌렸습니다'); break;\n    case 'tpl-toggle': S.tplEdit=!S.tplEdit; if(!S.tplEdit) S.tplDraft=null; render(); break;\n    case 'tpl-save': {\n      const el=$('#tplBox'); const v=el?el.value:'';\n      if(!v.trim()) return toast('내용이 비어 있습니다');\n      DB.tpl=v; S.tplDraft=null; save(); render(); toast('기본 프롬프트를 저장했습니다'); break; }\n    case 'tpl-reset': DB.tpl=null; S.tplDraft=null; save(); render(); toast('기본값으로 되돌렸습니다'); break;\n    case 'ptpl-toggle': S.ptplEdit=!S.ptplEdit; if(!S.ptplEdit) S.ptplDraft=null; render(); break;\n    case 'ptpl-save': {\n      const el=$('#ptplBox'); const v=el?el.value:'';\n      if(!v.trim()) return toast('내용이 비어 있습니다');\n      DB.ptpl=v; S.ptplDraft=null; save(); render(); toast('인물 프롬프트를 저장했습니다'); break; }\n    case 'ptpl-reset': DB.ptpl=null; S.ptplDraft=null; save(); render(); toast('기본값으로 되돌렸습니다'); break;\n    case 'persist':\n      if(navigator.storage&&navigator.storage.persist){\n        navigator.storage.persist().then(ok=>{\n          toast(ok?'저장 공간이 보호됩니다':'브라우저가 요청을 받아들이지 않았습니다');\n          checkQuota();\n        });\n      }else toast('이 브라우저는 지원하지 않습니다');\n      break;\n    case 'copy': copyPrompt(); break;\n    case 'reset': S.sheet={type:'reset'}; render(); break;\n    case 'reset-yes': {\n      try{ localStorage.removeItem(KEY); }catch(err){}\n      if(idb) idbSet(KEY,null);\n      DB=fresh(); S.sheet=null; S.view='feed'; S.tab='feed'; S.gen=''; S.pasted=''; S.tplEdit=false; S.tplDraft=null; S.ptplEdit=false; S.ptplDraft=null;\n      flush(); tick(); render(); checkQuota(); toast('처음 상태로 돌아갔습니다'); break; }\n  }\n});\nconst GMAP={gT:'topic',qT:'qtopic'};\nfunction onSlide(e,done){\n  const id=e.target.id;\n  if(!id||id.indexOf('sl-')!==0) return false;\n  const key=id.slice(3), d=SLD[key];\n  if(!d) return true;\n  const raw=+e.target.value;\n  const val=d.list?d.list[Math.max(0,Math.min(d.list.length-1,raw))]:raw;\n  if(key==='postGap'||key==='commentGap'||key==='replyDelay') DB.cfg[key]=val;\n  else S.g[key]=String(val);\n  const lb=document.getElementById('sv-'+key);\n  if(lb) lb.textContent=d.fmt(val);\n  if(done){ save(); tick(); }\n  return true;\n}\nfunction keepInput(e){\n  if(onSlide(e,false)) return;\n  const id=e.target.id;\n  if(id==='paste') S.pasted=e.target.value;\n  else if(id==='tplBox') S.tplDraft=e.target.value;\n  else if(id==='ptplBox') S.ptplDraft=e.target.value;\n  else if(id==='qtplBox') S.qtplDraft=e.target.value;\n  else if(id==='ppaste') S.ppaste=e.target.value;\n  else if(GMAP[id]) S.g[GMAP[id]]=e.target.value;\n  else if(id&&id.indexOf('pr')===0&&S.sheet&&S.sheet.type==='person'){\n    S.pd=S.pd||{}; S.pd[id]=e.target.value;\n  }\n}\ndocument.addEventListener('input',keepInput);\ndocument.addEventListener('change',e=>{ if(onSlide(e,true)) return; keepInput(e); });\ndocument.addEventListener('keydown',e=>{ if(e.key==='Enter'&&e.target.id==='cIn') sendComment(); });\ndocument.addEventListener('focusout',()=>{ setTimeout(()=>{ if(S.dirty&&!busy()) redraw(); },120); });\n$('#file').addEventListener('change',e=>{\n  const f=e.target.files[0]; if(!f) return;\n  const mode=S.fileMode||'feed';\n  const r=new FileReader();\n  r.onload=()=>{\n    const txt=String(r.result);\n    if(mode==='backup'||txt.indexOf('\"__campustime\"')>=0) restoreBackup(txt);\n    else addFeed(txt,f.name);\n  };\n  r.onerror=()=>toast('파일을 읽지 못했습니다');\n  r.readAsText(f,'utf-8');\n  e.target.value='';\n});\n$('#pfile').addEventListener('change',e=>{\n  const f=e.target.files[0]; e.target.value='';\n  if(!f) return;\n  if(!/^image\\//.test(f.type)) return toast('이미지 파일을 선택하세요');\n  shrinkPhoto(f,url=>{ S.pd=S.pd||{}; S.pd.photo=url; render(); toast('사진을 넣었습니다'); });\n});\ndocument.addEventListener('visibilitychange',()=>{\n  if(document.hidden) flush(); else { tick(); pulse(); }\n});\nwindow.addEventListener('pagehide',flush);\n\n/* ===================== 시작 ===================== */\nopenIDB().then(db=>{ idb=db; return loadAll(); }).then(d=>{\n  DB=d||fresh();\n  DB.lastTick=Date.now();\n  render(); tick(); pulse();\n  setInterval(tick,3000);\n  setInterval(pulse,1000);\n  setInterval(rotateTick,4000);\n  checkQuota();\n}).catch(()=>{ DB=fresh(); DB.lastTick=Date.now(); render(); tick();\n  setInterval(tick,3000); setInterval(pulse,1000); });\n<\/script>\n</body>\n</html>\n";
//#endregion
//#region server/middleware/z-campustime-html.ts
/**
* Serve the existing single-file 캠퍼스타임 app at `/` on the deployed build.
* HTML is bundled via `?raw` because Vercel CDN static files are not readable
* from the serverless function.
*/
async function campustimeHtmlMiddleware(event, next) {
	if ((event.req.method ?? "GET").toUpperCase() !== "GET") return next();
	const path = event.url.pathname;
	if (path !== "/" && path !== "/index.html") return next();
	if (event.url.searchParams.get("install") === "1") return next();
	return new Response(campustime_default, { headers: {
		"content-type": "text/html; charset=utf-8",
		"cache-control": "no-cache"
	} });
}
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_IO091Z = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_IO091Z
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(grokPwaMiddleware), toEventHandler(campustimeHtmlMiddleware)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/vercel/runtime/isr.mjs
var ISR_URL_PARAM = "__isr_route";
function isrRouteRewrite(reqUrl, xNowRouteMatches) {
	if (xNowRouteMatches) {
		const isrURL = new URLSearchParams(xNowRouteMatches).get(ISR_URL_PARAM);
		if (isrURL) return [decodeURIComponent(isrURL), ""];
	} else {
		const queryIndex = reqUrl.indexOf("?");
		if (queryIndex !== -1) {
			const params = new URLSearchParams(reqUrl.slice(queryIndex + 1));
			const isrURL = params.get(ISR_URL_PARAM);
			if (isrURL) {
				params.delete(ISR_URL_PARAM);
				return [decodeURIComponent(isrURL), params.toString()];
			}
		}
	}
}
//#endregion
//#region node_modules/nitro/dist/presets/vercel/runtime/vercel.web.mjs
var nitroApp = useNitroApp();
var vercel_web_default = { async fetch(req, context) {
	const isrURL = isrRouteRewrite(req.url, req.headers.get("x-now-route-matches"));
	if (isrURL) {
		const { routeRules } = getRouteRules("", isrURL[0]);
		if (routeRules?.isr) req = new Request(new URL(isrURL[0] + (isrURL[1] ? `?${isrURL[1]}` : ""), req.url).href, req);
	}
	req.runtime ??= { name: "vercel" };
	req.runtime.vercel = { context };
	let ip;
	Object.defineProperty(req, "ip", { get() {
		const h = req.headers.get("x-forwarded-for");
		return ip ??= h?.split(",").shift()?.trim();
	} });
	req.waitUntil = context?.waitUntil;
	return nitroApp.fetch(req);
} };
//#endregion
export { vercel_web_default as default };
