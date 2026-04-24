/**
 * Fire a GA4 custom event.
 * Safe to call server-side — will no-op if window/gtag is not available.
 */
export function trackEvent(name, params = {}) {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", name, params);
    }
}
