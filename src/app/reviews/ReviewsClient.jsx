"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reviews = [
    {
        quote: "Loved it! The play flows so well and the dialogue is clever yet fast-paced and very funny. I'm in awe, seriously - this is a superb piece of work…",
        author: "Dramaturge",
        type: "Play Review"
    },
    {
        quote: "A very well crafted piece of writing - mature and assured",
        author: "Dramaturge",
        type: "General"
    },
    {
        quote: "A powerful film story, very well told",
        author: "Agent",
        type: "Script Review"
    },
    {
        quote: "I love your writing. You are a very clever writer",
        author: "Jill Foster, retired agent",
        type: "General"
    },
    {
        quote: "A 'blockbuster' feature film script",
        author: "Former BBC director and award-winning writer",
        type: "City in Flames"
    },
    {
        quote: "A very well-written and pacey screenplay. The screenwriter has an excellent grasp of the comedy genre and structure of farce. A good ear for dialogue with many funny one-liners throughout",
        author: "Raindance Film School script reviewer",
        type: "Supper's Off"
    },
    {
        quote: "...is a funny and entertaining comedy thanks to its vibrant characters and witty dialogue. The script is full of engaging personalities who bring a lot of conflict. It's not hard to foresee it attracting talent. The characterization is excellent",
        author: "Raindance Film School script reviewer",
        type: "A Spell in Greece"
    }
];

export default function ReviewsClient() {
    const headerRef = useRef(null);
    const gridRef = useRef(null);

    const headerInView = useInView(headerRef, { once: true, threshold: 0.3 });
    const gridInView = useInView(gridRef, { once: true, threshold: 0.1 });

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
        },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.1 },
        },
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Background blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 left-1/6 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 12, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, delay: 3 }}
                />
            </div>

            {/* Scrolling banner */}
            <motion.div
                className="bg-black text-white py-5 overflow-hidden relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
                <motion.div
                    className="whitespace-nowrap"
                    animate={{ x: [200, -1400] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                    <span className="text-2xl xl:text-3xl font-light tracking-[0.4em] px-10">
                        Reviews & Testimonials • Reviews & Testimonials • Reviews & Testimonials • Reviews & Testimonials •
                    </span>
                </motion.div>
            </motion.div>

            <div className="relative z-10 max-w-8xl mx-auto px-6 xl:px-12 py-24">
                {/* Header */}
                <motion.div
                    ref={headerRef}
                    className="text-center mb-20"
                    initial="hidden"
                    animate={headerInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                >
                    <motion.h1
                        className="text-5xl xl:text-6xl font-light text-gray-800 mb-6 tracking-wide"
                        style={{ fontFamily: "serif" }}
                        variants={fadeInUp}
                    >
                        Reviews & Testimonials
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-500 font-light max-w-2xl mx-auto"
                        variants={fadeInUp}
                    >
                        What industry professionals and collaborators have said about S.J. Horan's work
                    </motion.p>
                    <motion.div
                        className="flex justify-center items-center mt-8"
                        variants={fadeInUp}
                    >
                        <div className="w-16 h-px bg-amber-400"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400 mx-4"></div>
                        <div className="w-16 h-px bg-amber-400"></div>
                    </motion.div>
                </motion.div>

                {/* Reviews grid */}
                <motion.div
                    ref={gridRef}
                    className="flex flex-row flex-wrap gap-8 justify-center"
                    initial="hidden"
                    animate={gridInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                >
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/70 backdrop-blur-sm w-120 rounded-xl shadow-lg border border-white/30 p-8"
                            variants={fadeInUp}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="mb-4">
                                <svg className="w-10 h-10 text-amber-500 mb-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                                </svg>
                                <p className="text-gray-700 text-base xl:text-lg leading-relaxed italic">&quot;{review.quote}&quot;</p>
                            </div>
                            <div className="border-t border-gray-200 pt-4">
                                <p className="font-medium text-gray-800 text-lg">{review.author}</p>
                                <p className="text-sm text-amber-600">{review.type}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom divider */}
                <motion.div
                    className="flex justify-center items-center mt-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <div className="w-24 h-px bg-amber-400"></div>
                    <div className="w-4 h-4 rounded-full bg-amber-400 mx-6"></div>
                    <div className="w-24 h-px bg-amber-400"></div>
                </motion.div>
            </div>
        </div>
    );
}
