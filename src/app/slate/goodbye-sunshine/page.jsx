"use client";

import { motion } from "framer-motion";

export default function GoodbyeSunshinePage() {
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
                    className="absolute top-1/4 left-1/5 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 12, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl"
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
                        Goodbye Sunshine • Goodbye Sunshine • Goodbye Sunshine • Goodbye Sunshine • Goodbye Sunshine •
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
                        Goodbye Sunshine
                    </motion.h1>
                    <motion.div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full mb-6" />
                    <motion.p className="text-xl text-gray-600 font-light">
                        A Cannes-nominated short film about knife-crime
                    </motion.p>
                </motion.div>

                {/* Cannes Badge */}
                <motion.div className="text-center mb-12" variants={fadeInUp}>
                    <span className="px-6 py-3 rounded-full text-lg font-medium bg-yellow-100 text-yellow-800 border-2 border-yellow-300 inline-flex items-center">
                        🏆 Cannes Indie Shorts Festival Nominee
                    </span>
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
                                src="/goodbyesun.png"
                                alt="Goodbye Sunshine"
                                className="w-full h-auto rounded-lg"
                            />
                        </motion.div>

                        {/* Status Badge */}
                        <motion.div className="mt-6 text-center" variants={fadeInUp}>
                            <span className="px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
                                Completed & Nominated
                            </span>
                        </motion.div>

                        {/* Credits */}
                        <motion.div
                            className="mt-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-4"
                            variants={fadeInUp}
                        >
                            <h3 className="text-lg font-medium text-gray-800 mb-3">Credits</h3>
                            <div className="space-y-2 text-sm text-gray-700">
                                <p><strong>Written by:</strong> S.J.Horan</p>
                                <p><strong>Directed by:</strong> Ufuk Gokkaya</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Synopsis */}
                    <motion.div className="space-y-8" variants={staggerContainer}>
                        <motion.div
                            className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-6"
                            variants={fadeInUp}
                        >
                            <h2 className="text-2xl font-medium text-gray-800 mb-4" style={{ fontFamily: 'serif' }}>
                                Synopsis
                            </h2>
                            <div className="text-gray-700 leading-relaxed space-y-4">
                                <p>
                                    It's an ordinary school day at the home of Junior, Lilia and Alesha in
                                    south London. Lilia, the mother, and Junior, her young son, exchange
                                    words of love before he leaves for school. Today he'll learn if he's got
                                    into the Spurs Youth Squad. Lilia is sure he has!
                                </p>

                                <p>
                                    As Junior leaves, Lilia arranges some dead flowers. But she cuts her
                                    finger and bleeds. A foreshadowing of things to come. Alesha, her 17
                                    year-old daughter, leaves for college, but not before we see the strong
                                    bond between them.
                                </p>

                                <p>
                                    Excited, Lilia starts preparing a celebration cake for Junior. Then like
                                    many loving mothers, she cleans his football boots.
                                </p>

                                <p>
                                    Later, she looks at her watch - it's 6pm. She's worried. Where's Junior?
                                    He should be home. Her "sunshine" should be at home eating his
                                    celebratory cake. Suddenly, Alesha rushes in. There's been a knife fight
                                    in Croydon. Two boys have been stabbed. But who? Lilia is frozen with
                                    fear. An hour later, someone texts Alesha. One of the boys is dead, but
                                    it's not Junior. He's been taken to hospital.
                                </p>

                                <p>
                                    Now, they wait, to hear which hospital he's in. Then, out of the blue, a
                                    phone call from the police. The worst news. Her Sunshine is dead. It was
                                    the other boy who survived. Lilia goes into shock, then denial, as her
                                    daughter tries to support her. She's pulled into an Arctic vortex of
                                    pain and shock and disbelief.
                                </p>

                                <p>
                                    At the chapel of rest, Lilia's confused. She tells her son to "Get up."
                                    In the following days, she sets up a shrine to him in her house and
                                    chats to him. She reproaches him for not doing what he was told. It's
                                    all a bit disturbing.
                                </p>

                                <p>
                                    Then suddenly, Junior is there. In front of her.
                                </p>

                                <p>
                                    As Alesha arrives home, an excited Lilia calls her to come and see
                                    Junior. Alesha rushes in to see an empty space. Now Lilia's brain moves
                                    on a cog: she finally accepts that her son is dead.
                                </p>

                                <p className="font-medium">
                                    A devastating moment.
                                </p>
                            </div>
                        </motion.div>

                        {/* Key Question */}
                        <motion.div
                            className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200 text-center"
                            variants={fadeInUp}
                        >
                            <h3 className="text-xl font-medium text-gray-800 mb-4" style={{ fontFamily: 'serif' }}>
                                How does a mother deal with the loss of her child?
                            </h3>
                        </motion.div>

                        {/* Impact Statement */}
                        <motion.div
                            className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-6"
                            variants={fadeInUp}
                        >
                            <h3 className="text-lg font-medium text-gray-800 mb-3">About the Film</h3>
                            <p className="text-gray-700 leading-relaxed">
                                <em className="italic">Goodbye Sunshine</em> is a powerful short film that explores the devastating
                                impact of knife crime through the lens of a mother's grief. Nominated for
                                the Cannes Indie Shorts Festival, this film confronts one of society's
                                most pressing issues with raw honesty and emotional depth.
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
                        className="px-8 py-4 bg-yellow-600 text-white rounded-lg font-medium hover:bg-yellow-700 transition-colors shadow-lg"
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
                    <div className="w-20 h-px bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mx-4"></div>
                    <div className="w-20 h-px bg-yellow-400"></div>
                </motion.div>
            </motion.div>
        </div>
    );
}