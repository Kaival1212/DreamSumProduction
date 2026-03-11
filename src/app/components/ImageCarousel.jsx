"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ImageCarousel({ images }) {
    const [index, setIndex] = useState(0);

    const prev = () => setIndex((index - 1 + images.length) % images.length);
    const next = () => setIndex((index + 1) % images.length);
    const hasMultiple = images.length > 1;

    useEffect(() => {
        if (!hasMultiple) return;
        const timer = setInterval(() => {
            setIndex((i) => (i + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [hasMultiple, images.length]);

    return (
        <motion.div
            className="relative bg-white/80 p-6 rounded-2xl shadow-2xl border border-white/30 overflow-hidden max-w-xl mx-auto will-change-transform"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="will-change-transform"
            >
                <Image
                    src={images[index].src}
                    alt={images[index].alt}
                    width={560}
                    height={750}
                    className="w-full h-auto rounded-lg"
                    priority
                    quality={100}
                />
            </motion.div>

            {hasMultiple && (
                <>
                    <button
                        onClick={prev}
                        aria-label="Previous image"
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white text-xl flex items-center justify-center hover:bg-black/80 transition-colors"
                    >
                        ‹
                    </button>
                    <button
                        onClick={next}
                        aria-label="Next image"
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white text-xl flex items-center justify-center hover:bg-black/80 transition-colors"
                    >
                        ›
                    </button>
                    <div className="flex justify-center gap-2 mt-4">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                aria-label={`Go to image ${i + 1}`}
                                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === index ? "bg-amber-500" : "bg-gray-300"}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </motion.div>
    );
}
