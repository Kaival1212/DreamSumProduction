"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "../lib/gtag";

/**
 * Tracks two things:
 * 1. Page views on every client-side route change (fixes Next.js SPA issue).
 * 2. Scroll depth milestones: 25%, 50%, 75%, 100%.
 */
export default function PageViewTracker() {
    const pathname = usePathname();
    const firedDepths = useRef(new Set());

    // Fire page_view on every route change
    useEffect(() => {
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
            window.gtag("event", "page_view", {
                page_path: pathname,
                page_title: document.title,
            });
        }
        // Reset scroll milestones for the new page
        firedDepths.current = new Set();
    }, [pathname]);

    // Track scroll depth milestones per page
    useEffect(() => {
        const milestones = [25, 50, 75, 100];

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (docHeight <= 0) return;

            const percent = Math.round((scrollTop / docHeight) * 100);

            milestones.forEach((milestone) => {
                if (percent >= milestone && !firedDepths.current.has(milestone)) {
                    firedDepths.current.add(milestone);
                    trackEvent("scroll_depth", {
                        percent_scrolled: milestone,
                        page_path: pathname,
                    });
                }
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    return null;
}
