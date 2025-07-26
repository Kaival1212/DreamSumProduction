"use client";

import { motion } from "framer-motion";

export default function SuppersOffPage() {
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
                    className="absolute top-1/4 left-1/5 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 12, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl"
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
                        Supper's Off • Supper's Off • Supper's Off • Supper's Off • Supper's Off • Supper's Off •
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
                        Supper's Off
                    </motion.h1>
                    <motion.div className="w-24 h-1 bg-pink-500 mx-auto rounded-full mb-6" />
                    <motion.p className="text-xl text-gray-600 font-light">
                        Romantic Comedy Feature Film
                    </motion.p>
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
                                src="/supper.png"
                                alt="Supper's Off"
                                className="w-full h-auto rounded-lg"
                            />
                        </motion.div>

                        {/* Status Badge */}
                        <motion.div className="mt-6 text-center" variants={fadeInUp}>
                            <span className="px-4 py-2 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                                Seeking Development Funding
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
                                Daisy's afraid she'll soon be on the six o'clock news for murdering her
                                husband if he asks her one more time, "What's for supper?" And she's fed
                                up of playing Parker for her demanding Gen Z daughter. What to do? A
                                girls' getaway to Tuscany is just the ticket. But does she have a
                                return...?
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
                                    Daisy's life is stuck in an endless loop of baked trout, doling out the
                                    dosh to her demanding daughter and pointless worry sessions with
                                    pert-bottomed ladies. She's afraid that her tombstone will read "Here
                                    lies Daisy Cooper - lifetime achievements: perfect downward dog,
                                    gleaming white teeth, baked trout -- not so good." Where has her life
                                    gone? Just on cue, Frankie, her zany Irish friend invites her to
                                    Tuscany. Where they have fun and get up to things they really
                                    shouldn't...
                                </p>

                                <p>
                                    Frankie goes AWOL and Daisy is seduced by a handsome Italian musician --
                                    no need to swipe right. But life is complicated, and her Italian
                                    stallion stops the music far too soon. Daisy's brought down to earth
                                    faster than you can say <em className="italic">spaghetti alle vongole</em> as her husband
                                    hotfoots it over to Tuscany to see what the hell's going on.
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
                                Mainly, but not exclusively, women... We can all laugh at ourselves,
                                right?
                            </p>
                        </motion.div>

                        {/* Visual Realisation */}
                        <motion.div
                            className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-6"
                            variants={fadeInUp}
                        >
                            <h2 className="text-2xl font-medium text-gray-800 mb-4" style={{ fontFamily: 'serif' }}>
                                Visual Realisation
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Set mainly in the sumptuous beauty of Italy, <em className="italic">Supper's Off</em> is a
                                glorious feast for the eyes.
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
                                Shirley Valentine
                            </p>
                        </motion.div>

                        {/* To Sum Up */}
                        <motion.div
                            className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-200"
                            variants={fadeInUp}
                        >
                            <h2 className="text-2xl font-medium text-gray-800 mb-4" style={{ fontFamily: 'serif' }}>
                                To Sum up...
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                <em className="italic">Supper's Off</em> is an upbeat Rom Com feature film, urging people to grab
                                life by the <em className="italic">cojones</em> and get the most out of it, no matter what age
                                they are. An opportunity to escape life's heartaches. And laugh.
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
                        className="px-8 py-4 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 transition-colors shadow-lg"
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
                    <div className="w-20 h-px bg-pink-400"></div>
                    <div className="w-3 h-3 rounded-full bg-pink-400 mx-4"></div>
                    <div className="w-20 h-px bg-pink-400"></div>
                </motion.div>
            </motion.div>
        </div>
    );
}