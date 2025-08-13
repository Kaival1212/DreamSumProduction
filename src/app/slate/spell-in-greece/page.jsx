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
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/4 left-1/6 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 12, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 3 }}
                />
            </div>

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
                    animate={{ x: [1200, -1200] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                    <span className="text-2xl xl:text-3xl font-light tracking-[0.4em] px-10">
                        A Spell in Greece • A Spell in Greece • A Spell in Greece • A Spell in Greece • A Spell in Greece •
                    </span>
                </motion.div>
            </motion.div>

            <motion.div
                className="relative z-10 max-w-8xl mx-auto px-6 xl:px-12 py-24"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <motion.div className="text-center mb-20" variants={fadeInUp}>
                    <motion.h1
                        className="text-5xl xl:text-6xl font-light text-gray-800 mb-8 tracking-wide italic"
                        style={{ fontFamily: 'serif' }}
                    >
                        A Spell in Greece
                    </motion.h1>
                    <motion.div className="w-32 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
                    <motion.p className="text-2xl xl:text-3xl text-gray-600 font-light">
                        Romantic Comedy Feature Film
                    </motion.p>
                </motion.div>

                <div className="grid xl:grid-cols-2 gap-16 items-start">
                    <motion.div variants={fadeInUp}>
                        <motion.div
                            className="relative bg-white/80 backdrop-blur-sm p-8 xl:p-10 rounded-2xl shadow-2xl border border-white/30"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src="/spell.png"
                                alt="A Spell in Greece"
                                className="w-full h-auto rounded-lg"
                            />
                        </motion.div>

                        <motion.div className="mt-8 text-center" variants={fadeInUp}>
                            <span className="px-4 py-2 rounded-full text-base font-medium bg-blue-100 text-blue-800 border border-blue-200">
                                Seeking Funding
                            </span>
                        </motion.div>
                    </motion.div>

                    <motion.div className="space-y-10" variants={staggerContainer}>
                        <motion.div
                            className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-8 xl:p-10"
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl font-medium text-gray-800 mb-4" style={{ fontFamily: 'serif' }}>
                                Intro
                            </h2>
                            <p className="text-gray-700 text-lg xl:text-xl leading-relaxed">
                                If your happiness is on the line and your stepdaughter's in the way,
                                there's only one thing for it - she's got to go. This is an upbeat Rom
                                Com conceived to make you laugh.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-8 xl:p-10"
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl font-medium text-gray-800 mb-4" style={{ fontFamily: 'serif' }}>
                                Synopsis
                            </h2>
                            <div className="text-gray-700 text-lg xl:text-xl leading-relaxed space-y-6">
                                <p>
                                    Saffron's fella, Hugh, has put Peaches, his spoilt-brat daughter, ahead
                                    of her once too often. So she gives him an ultimatum: "It's her or me."
                                    Afraid of a second failed relationship, Hugh whisks Saffron off to a
                                    retreat on a stunning Greek island. Ensconced in a beautiful Villa, the
                                    sun blazing in the sky, Saffron thinks she's found paradise. Until, that
                                    is, out of the corner of her eye, she sees Peaches marching towards
                                    them. Here, at Hugh's invite.
                                </p>

                                <p>
                                    After seeing red - and then some - Saffron decides it's time to take
                                    matters into her own hands. Unwittingly helped by Artemis, the Greek
                                    housekeeper, Saffron engages in a hilarious tussle with her stepdaughter
                                    to see who really is top dog in Hugh's affections.
                                </p>

                                <p>
                                    At the same time, Ben, an uber sensitive screenwriter at the retreat, is
                                    pursuing Jasmine, an older, divorced and now, cynical woman. She's
                                    trying to keep her distance whilst searching for inner peace. Can Ben
                                    win her love with his hundred press-ups...?
                                </p>

                                <p>
                                    Saffron's efforts are thwarted at every turn and things only get worse
                                    when Peaches invites Alexis, her mother and Hugh's ex, to the retreat.
                                    Alexis hops into Hugh's bed, hoping for er... a friendly
                                    <em className="italic"> reunion</em>... Misunderstandings abound. And Saffron's ready to hold up
                                    the white flag, when things swing back in her favour: mortified by
                                    Saffron's words, Peaches goes missing off the Aegean in the dead of
                                    night. It's all hands to the deck as the owner of the retreat,
                                    Dimitrios, a.k.a the <em className="italic">Greek Godfather</em> and Ben and Jasmine are joined by
                                    the locals in their desperate search for Peaches. Later, stranded on a
                                    boat going nowhere, it's the ideal time for a showdown between Saffron
                                    and Hugh. Only for it to be cut short by the boon whacking Saffron...
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-8 xl:p-10"
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl font-medium text-gray-800 mb-4" style={{ fontFamily: 'serif' }}>
                                Target Audience
                            </h2>
                            <p className="text-gray-700 text-lg xl:text-xl leading-relaxed">
                                16 and over. This will appeal to all those who agree with the Dalai
                                Lama - life <em className="italic">is</em> all about the pursuit of happiness.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-8 xl:p-10"
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl font-medium text-gray-800 mb-4" style={{ fontFamily: 'serif' }}>
                                Visual Realisation
                            </h2>
                            <p className="text-gray-700 text-lg xl:text-xl leading-relaxed">
                                Set on a beautiful Greek Island, this is an upbeat comic feast for mind,
                                body and soul. We follow our characters as they struggle with broken
                                promises, inner wounds and misunderstandings. Only for them to emerge
                                triumphant and happy. Wedding bells apparently breaking out
                                everywhere...
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-8 xl:p-10"
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl font-medium text-gray-800 mb-4" style={{ fontFamily: 'serif' }}>
                                Influence
                            </h2>
                            <p className="text-gray-700 text-lg xl:text-xl leading-relaxed">
                                Mamma Mia
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 xl:p-10 border border-blue-200"
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl font-medium text-gray-800 mb-4" style={{ fontFamily: 'serif' }}>
                                To Sum Up...
                            </h2>
                            <p className="text-gray-700 text-lg xl:text-xl leading-relaxed">
                                <em className="italic">A Spell in Greece</em> is an original, feel-good film that encourages
                                people to grab life by the scruff of the neck and take control. Accept
                                that life changes and live it with a passion.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    className="mt-20 text-center"
                    variants={fadeInUp}
                >
                    <motion.button
                        onClick={() => window.history.back()}
                        className="px-10 py-4 bg-blue-600 text-white rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        ← Back to On the Slate
                    </motion.button>
                </motion.div>

                <motion.div
                    className="flex justify-center items-center mt-20"
                    variants={fadeInUp}
                >
                    <div className="w-24 h-px bg-blue-400"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-400 mx-6"></div>
                    <div className="w-24 h-px bg-blue-400"></div>
                </motion.div>
            </motion.div>
        </div>
    );
}