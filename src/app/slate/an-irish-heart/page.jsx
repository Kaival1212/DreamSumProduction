"use client";

import { motion } from "framer-motion";

export default function SpellInGreecePage() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/4 left-1/5 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 12, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 3 }}
                />
            </div>

            {/* Hero Marquee */}
            <motion.div
                className="bg-black text-white py-4 overflow-hidden relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10" />

                <motion.div
                    className="whitespace-nowrap"
                    animate={{ x: [1200, -1200] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                    <span className="text-xl md:text-2xl font-light tracking-[0.3em] px-8">
                        An Irish Heart • An Irish Heart • An Irish Heart • An Irish Heart • An Irish Heart •
                    </span>
                </motion.div>
            </motion.div>

            <motion.div
                className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-20"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                {/* Header Section */}
                <motion.div className="text-center mb-16" variants={fadeInUp}>
                    <motion.h1
                        className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-wide italic"
                        style={{ fontFamily: 'serif' }}
                    >
                        An Irish Heart
                    </motion.h1>
                    <motion.div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6" />

                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Image */}
                    <motion.div variants={fadeInUp}>
                        <motion.div
                            className="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-white/30"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src="/Irish.png"
                                alt="An Irish Heart"
                                className="w-full h-auto rounded-lg"
                            />
                        </motion.div>

                        {/* Status Badge */}
                        <motion.div className="mt-6 text-center" variants={fadeInUp}>
                            <span className="px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
                                Pre-Production
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div className="space-y-8" variants={staggerContainer}>
                        {/* Intro */}
                        <motion.div
                            className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-6"
                            variants={fadeInUp}
                        >
                            <h2 className="text-2xl font-medium text-gray-800 mb-4" style={{ fontFamily: 'serif' }}>
                                Intro
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Maria, an ambitious actress and writer is at a crossroads in her life. Does she marry her long-term boyfriend, Jamie, just as his Nonna wants - or does she role the dice and run off to the bright lights of New York with a free spirited musician, and risk losing everything?
                            </p>
                        </motion.div>

                        {/* Synopsis */}
                        <motion.div
                            className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-6"
                            variants={fadeInUp}
                        >
                            <h2 className="text-2xl font-medium text-gray-800 mb-4" style={{ fontFamily: 'serif' }}>
                                Synopsis
                            </h2>
                            <div className="text-gray-700 leading-relaxed space-y-4">
                                <p>
                                    When Maria’s fiancé Jamie has to visit his grandmother in Italy, Maria’s hitherto well-planned life map is thrown into chaos. A knock on the door and Freddie, a handsome musician turns up, looking for his old friend Jamie. Bored on her own, Maria lets him in and sparks are soon set off. Freddie’s a natural flirt and tells her she’s too good for Jamie.
                                </p>

                                <p>
                                    Maria tries to resist his charm but… it’s hard. Luckily, by the time Jamie comes home, she’s seen the error of her ways and asks him to marry her. The wedding day is set. But the course of true love has a few more bumps to get over before Maria is set on her rightful path. Who will she choose?
                                </p>

                                <p>
                                    An Irish Heart is an original, funny and feel-good, film.
                                </p>


                            </div>
                        </motion.div>

                        {/* Target Audience */}
                        <motion.div
                            className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-6"
                            variants={fadeInUp}
                        >
                            <h2 className="text-2xl font-medium text-gray-800 mb-4" style={{ fontFamily: 'serif' }}>
                                Target Audience
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Wide appeal. This will appeal to all those who’ve ever wondered whether the romantic grass is greener…
                            </p>
                        </motion.div>

                        {/* Visual Realisation */}
                        <motion.div
                            className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-6"
                            variants={fadeInUp}
                        >
                            <h2 className="text-2xl font-medium text-gray-800 mb-4" style={{ fontFamily: 'serif' }}>
                                Visual realisation
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Set in the beautiful emerald isle of Ireland, this is an upbeat, fast-moving comic feast for the ears and eyes. We follow our characters as they struggle with heart ache, the illusions of love and the reality of important choices.
                            </p>
                        </motion.div>

                        {/* Influence */}
                        <motion.div
                            className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-6"
                            variants={fadeInUp}
                        >
                            <h2 className="text-2xl font-medium text-gray-800 mb-4" style={{ fontFamily: 'serif' }}>
                                Influence
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                <i>  A Holiday Affair, Leap Year, Rumour Has It </i>                          </p>
                        </motion.div>

                        {/* To Sum Up */}
                        <motion.div
                            className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200"
                            variants={fadeInUp}
                        >
                            <h2 className="text-2xl font-medium text-gray-800 mb-4" style={{ fontFamily: 'serif' }}>
                                To sum up...
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                <em className="italic">An Irish Heart </em>
                                is a funny and romantic story about finding out who we really are, before it’s too late.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Back Button */}
                <motion.div
                    className="mt-16 text-center"
                    variants={fadeInUp}
                >
                    <motion.button
                        onClick={() => window.history.back()}
                        className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        ← Back to On the Slate
                    </motion.button>
                </motion.div>

                {/* Bottom decorative element */}
                <motion.div
                    className="flex justify-center items-center mt-16"
                    variants={fadeInUp}
                >
                    <div className="w-20 h-px bg-blue-400"></div>
                    <div className="w-3 h-3 rounded-full bg-blue-400 mx-4"></div>
                    <div className="w-20 h-px bg-blue-400"></div>
                </motion.div>
            </motion.div>
        </div>
    );
}