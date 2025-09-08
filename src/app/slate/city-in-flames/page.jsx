"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

export default function CityInFlamesPage() {
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
        <>
            <Head>
                <title>City in Flames - Historical Drama Film | Seeking Funding</title>
                <meta name="description" content="Explore 'City in Flames,' a historical drama about the 1922 Smyrna crisis, told through Asa K. Jennings' heroic efforts. Seeking producers and funding." />
                <meta name="keywords" content="historical drama film, City in Flames movie, Smyrna 1922 film, Asa K Jennings" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="City in Flames - Historical Drama Film" />
                <meta property="og:description" content="A historical drama depicting the 1922 Smyrna crisis, focusing on Asa K. Jennings' heroic evacuation efforts." />
                <meta property="og:image" content="/Cityflames.jpg" />
                <meta property="og:url" content="https://www.dreamsumproductions.co.uk/slate/city-in-flames" />
                <meta name="twitter:card" content="summary_large_image" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Movie",
                            "name": "City in Flames",
                            "description": "A historical drama about the 1922 Smyrna crisis, told through the heroic efforts of Asa K. Jennings.",
                            "genre": ["Historical Drama"],
                            "inLanguage": "en",
                            "productionCompany": {
                                "@type": "Organization",
                                "name": "Dreamsum Productions"
                            }
                        })
                    }}
                />
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute top-1/4 left-1/6 w-96 h-96 bg-red-200/20 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 12, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl"
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
                        animate={{ x: [200, -1200] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    >
                        <span className="text-2xl xl:text-3xl font-light tracking-[0.4em] px-10">
                            City in Flames • City in Flames • City in Flames • City in Flames • City in Flames • City in Flames •
                        </span>
                    </motion.div>
                </motion.div>

                <main className="relative z-10 max-w-8xl mx-auto px-6 xl:px-12 py-24">
                    <header className="text-center mb-20" variants={fadeInUp}>
                        <motion.h1
                            className="text-5xl xl:text-6xl font-light text-gray-800 mb-8 tracking-wide italic"
                            style={{ fontFamily: 'serif' }}
                        >
                            City in Flames
                        </motion.h1>
                        <motion.div className="w-32 h-1 bg-red-500 mx-auto rounded-full mb-8" />
                        <motion.p className="text-2xl xl:text-3xl text-gray-600 font-light">
                            Historical Drama Feature Film
                        </motion.p>
                    </header>


                    <section className="grid xl:grid-cols-2 gap-16 items-start" variants={staggerContainer}>
                        <motion.article variants={fadeInUp}>
                            <motion.div
                                className="relative bg-white/80 backdrop-blur-sm p-8 xl:p-10 rounded-2xl shadow-2xl border border-white/30"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src="/Cityflames.jpg"
                                    alt="Poster for City in Flames, a historical drama about the 1922 Smyrna crisis"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto rounded-lg"
                                    priority
                                />
                            </motion.div>
                            <motion.div className="mt-8 text-center" variants={fadeInUp}>
                                <span className="px-4 py-2 rounded-full text-base font-medium bg-orange-100 text-orange-800 border border-orange-200">
                                    Seeking Producers and Funding
                                </span>
                            </motion.div>
                        </motion.article>

                        <motion.div className="space-y-10" variants={staggerContainer}>
                            <motion.section
                                className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-8 xl:p-10"
                                variants={fadeInUp}
                            >
                                <h2 className="text-3xl font-medium text-gray-800 mb-4" style={{ fontFamily: 'serif' }}>
                                    Intro
                                </h2>
                                <p className="text-gray-700 text-lg xl:text-xl leading-relaxed">
                                    Set in Smyrna, (now Izmir,) <em className="italic">City in Flames</em> tells the story of one of
                                    the worst refugee crises of the twentieth century. According to the
                                    eminent historian Giles Milton, "Almost two million people were victims
                                    of a disaster of truly epic proportions."
                                </p>
                            </motion.section>

                            <motion.section
                                className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-8 xl:p-10"
                                variants={fadeInUp}
                            >
                                <h2 className="text-3xl font-medium text-gray-800 mb-4" style={{ fontFamily: 'serif' }}>
                                    Synopsis
                                </h2>
                                <div className="text-gray-700 text-lg xl:text-xl leading-relaxed space-y-6">
                                    <p>
                                        The year is 1922, four years after the Great War has ended. Thanks to a
                                        misjudged decision to reward Greece and send in the Greek Army, the
                                        peace that has endured in multi-cultural Smyrna has been shattered.
                                    </p>
                                    <p>
                                        The Greek Army has been defeated and now the Smyrniots wait in fear as
                                        the Turkish Army, lead by Mustafa Kemal, retreat to Smyrna. And, as so
                                        often happens, their warnings of imminent disaster are ignored.
                                    </p>
                                    <p>
                                        A lava of starved and penniless refugees converge on Smyrna quayside
                                        fearing for their lives. And when Kemal and his army arrive, all hell
                                        let is loose, just as foreseen.
                                    </p>
                                    <p>
                                        Trapped in the port with 100-foot flames on one side and indifferent
                                        Allied Warships on the other, hundreds of thousands of terrified souls
                                        are abandoned. As they wait for the help which is slow to arrive, the
                                        refugees are attacked and raped by irregular Turkish soldiers.
                                    </p>
                                    <p>
                                        My story is told mainly, but not exclusively, through the eyes of Asa K
                                        Jennings, an unsung American hero. A lowly Minister from upstate New
                                        York, Asa is sent to Smyrna to teach Greek and Turkish boys. On arrival,
                                        he unexpectedly gets caught up in what was later termed, <em className="italic">The
                                            Catastrophe</em>. As a man of God, he takes it upon himself, to help the
                                        refugees.
                                    </p>
                                    <p>
                                        It's a daunting task and when all seems lost, Asa plays a blinder,
                                        persuading the Greek Prime Minister to let him use Greek ships for a
                                        mass evacuation. By his heroic efforts, Asa saves the refugees from
                                        certain death by burning, hunger or deportation into the labour camps of
                                        Anatolia. He befriends Dimitrios, a passionate and open-minded Greek in
                                        love with a beautiful Turkish woman. But that, as they say, is another
                                        story...A love story, that bridges cultures.
                                    </p>
                                    <p>
                                        The inspiration for this film is my Greek grandfather who, back in
                                        1922, had to escape on a night-time boat in the Aegean
                                        whilst ducking burning cinders and gunfire. Helped by a Turkish friend.
                                    </p>
                                </div>
                            </motion.section>

                            <motion.section className="grid xl:grid-cols-2 gap-8" variants={staggerContainer}>
                                <motion.div
                                    className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-8 xl:p-10"
                                    variants={fadeInUp}
                                >
                                    <h3 className="text-xl font-medium text-gray-800 mb-3">Influence</h3>
                                    <p className="text-gray-700 text-lg xl:text-xl">Schindler's List</p>
                                </motion.div>
                                <motion.div
                                    className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-8 xl:p-10"
                                    variants={fadeInUp}
                                >
                                    <h3 className="text-xl font-medium text-gray-800 mb-3">Target Audience</h3>
                                    <p className="text-gray-700 text-lg xl:text-xl">Wide appeal due to current and predicted world turbulence and mass movements of people</p>
                                </motion.div>
                            </motion.section>

                            <motion.section
                                className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-8 xl:p-10"
                                variants={fadeInUp}
                            >
                                <h2 className="text-3xl font-medium text-gray-800 mb-4" style={{ fontFamily: 'serif' }}>
                                    Visual Realisation
                                </h2>
                                <p className="text-gray-700 text-lg xl:text-xl leading-relaxed">
                                    An epic drama that shows the real suffering caused when politicians fail
                                    us. When they think not of ordinary human beings just trying to find
                                    their place in the sun, but only of their own egos.
                                </p>
                            </motion.section>

                            <motion.section
                                className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 xl:p-10 border border-red-200"
                                variants={fadeInUp}
                            >
                                <h2 className="text-3xl font-medium text-gray-800 mb-4" style={{ fontFamily: 'serif' }}>
                                    To Sum Up...
                                </h2>
                                <div className="text-gray-700 text-lg xl:text-xl leading-relaxed space-y-6">
                                    <p>
                                        <em className="italic">City In Flames</em> is the untold story about one such ordinary human
                                        being, Asa K Jennings. In those dark days of September 1922, he invoked
                                        his inner hero to help others. In so doing, he transformed into an
                                        extraordinary human being. An inspiring man of courage and love for his
                                        fellow travellers, Jennings was later awarded the highest medal of
                                        honour from the Greek Government.
                                    </p>
                                    <blockquote className="text-2xl xl:text-3xl italic text-center text-red-700 font-medium py-6">
                                        "In the heart of each man, sleeps a lion."
                                    </blockquote>
                                </div>
                            </motion.section>
                        </motion.div>
                    </section>

                    <motion.div
                        className="mt-20 text-center"
                        variants={fadeInUp}
                    >
                        <motion.button
                            onClick={() => window.history.back()}
                            className="px-10 py-4 bg-red-600 text-white rounded-lg font-medium text-lg hover:bg-red-700 transition-colors shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Return to main film portfolio"
                        >
                            ← Back to On the Slate
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="flex justify-center items-center mt-20"
                        variants={fadeInUp}
                    >
                        <div className="w-24 h-px bg-red-400"></div>
                        <div className="w-4 h-4 rounded-full bg-red-400 mx-6"></div>
                        <div className="w-24 h-px bg-red-400"></div>
                    </motion.div>
                </main>
            </div>
        </>
    );
}