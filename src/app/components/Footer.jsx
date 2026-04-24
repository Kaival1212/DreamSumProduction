"use client";

import Link from "next/link";
import { trackEvent } from "../lib/gtag";

function FooterLink({ href, children, isNext }) {
    const handleClick = () => {
        trackEvent("footer_link_click", {
            link_text: typeof children === "string" ? children : href,
            link_url: href,
        });
    };

    if (isNext) {
        return (
            <Link href={href} onClick={handleClick} className="text-gray-300 hover:text-white transition-colors font-light">
                {children}
            </Link>
        );
    }

    return (
        <a href={href} onClick={handleClick} className="text-gray-300 hover:text-white transition-colors font-light">
            {children}
        </a>
    );
}

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <h3 className="text-xl font-light tracking-[0.1em] mb-4">DREAMSUM PRODUCTIONS</h3>
                        <p className="text-gray-300 font-light mb-4">
                            Creating meaningful cinema and podcasts that inspire, inform and entertain
                        </p>
                        <p className="text-gray-400 text-sm font-light">Based in London, United Kingdom</p>
                    </div>

                    <div>
                        <h4 className="text-lg font-light mb-4">Explore</h4>
                        <ul className="space-y-2">
                            <li><FooterLink href="/" isNext>Home</FooterLink></li>
                            <li><FooterLink href="/whoAmI">Who I am</FooterLink></li>
                            <li><FooterLink href="/reviews">Reviews &amp; Testimonials</FooterLink></li>
                            <li><FooterLink href="/contact">Contact</FooterLink></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-light mb-4">Stay Updated</h4>
                        <p className="text-gray-300 mb-4 text-sm font-light">Sign up with your email address to receive news and updates.</p>
                        <FooterLink href="/contact">
                            <span
                                onClick={() => trackEvent("footer_cta_click", { link_text: "Get in Touch" })}
                                className="inline-block bg-gray-700 text-white px-4 py-2 rounded hover:bg-amber-600 transition-colors font-light text-sm"
                            >
                                Get in Touch
                            </span>
                        </FooterLink>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p className="text-gray-400 text-sm font-light">© 2025 Dreamsum Productions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
