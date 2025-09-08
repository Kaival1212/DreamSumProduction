"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

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
        <>
            <Head>
                <title>Supper's Off - Romantic Comedy Film | Seeking Funding</title>
                <meta name="description" content="'Supper's Off,' a romantic comedy set in Tuscany, follows Daisy’s escape from routine life. Seeking development funding for this women-focused film." />
                <meta name="keywords" content="Tuscan romantic comedy, Supper's Off film, women’s rom com, Italy movie" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Supper's Off - Romantic Comedy Film" />
                <meta property="og:description" content="A romantic comedy set in Tuscany, following Daisy’s journey to rediscover life and love." />
                <meta property="og:image" content="/supper.png" />
                <meta property="og:url" content="https://www.dreamsumproductions.co.uk/slate/suppers-off" />
                <meta name="twitter:card" content="summary_large_image" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Movie",
                            "name": "Supper's Off",
                            "description": "A romantic comedy set in Tuscany, following Daisy’s escape from routine life with humor and heart.",
                            "genre": ["Romantic Comedy"],
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
                        className="absolute top-1/4 left-1/6 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 12, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl"
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
                            Supper's Off • Supper's Off • Supper's Off • Supper's Off • Supper's Off • Supper's Off •
                        </span>
                    </motion.div>
                </motion.div>

                <main className="relative z-10 max-w-8xl mx-auto px-6 xl:px-12 py-24">
                    <header className="text-center mb-20" variants={fadeInUp}>
                        <motion.h1
                            className="text-5xl xl:text-6xl font-light text-gray-800 mb-8 tracking-wide italic"
                            style={{ fontFamily: 'serif' }}
                        >
                            Supper's Off
                        </motion.h1>
                        <motion.div className="w-32 h-1 bg-pink-500 mx-auto rounded-full mb-8" />
                        <motion.p className="text-2xl xl:text-3xl text-gray-600 font-light">
                            Romantic Comedy Feature Film
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
                                    src="/supper.png"
                                    alt="Poster for Supper's Off, a romantic comedy set in Tuscany"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto rounded-lg"
                                    priority
                                />
                            </motion.div>
                            <motion.div className="mt-8 text-center" variants={fadeInUp}>
                                <span className="px-4 py-2 rounded-full text-base font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                                    Seeking Development Funding
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
                                    Daisy's afraid she'll soon be on the six o'clock news for murdering her
                                    husband if he asks her one more time, "What's for supper?" And she's fed
                                    up of playing Parker for her demanding Gen Z daughter. What to do? A
                                    girls' getaway to Tuscany is just the ticket. But does she have a
                                    return...?
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
                            </motion.section>

                            <motion.section
                                className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-8 xl:p-10"
                                variants={fadeInUp}
                            >
                                <h2 className="text-3xl font-medium text-gray-800 mb-4" style={{ fontFamily: 'serif' }}>
                                    Target Audience
                                </h2>
                                <p className="text-gray-700 text-lg xl:text-xl leading-relaxed">
                                    Mainly, but not exclusively, women... We can all laugh at ourselves,
                                    right?
                                </p>
                            </motion.section>

                            <motion.section
                                className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-8 xl:p-10"
                                variants={fadeInUp}
                            >
                                <h2 className="text-3xl font-medium text-gray-800 mb-4" style={{ fontFamily: 'serif' }}>
                                    Visual Realisation
                                </h2>
                                <p className="text-gray-700 text-lg xl:text-xl leading-relaxed">
                                    Set mainly in the sumptuous beauty of Italy, <em className="italic">Supper's Off</em> is a
                                    glorious feast for the eyes.
                                </p>
                            </motion.section>

                            <motion.section
                                className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-8 xl:p-10"
                                variants={fadeInUp}
                            >
                                <h2 className="text-3xl font-medium text-gray-800 mb-4" style={{ fontFamily: 'serif' }}>
                                    Influence
                                </h2>
                                <p className="text-gray-700 text-lg xl:text-xl leading-relaxed">
                                    Shirley Valentine
                                </p>
                            </motion.section>

                            <motion.section
                                className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-8 xl:p-10 border border-pink-200"
                                variants={fadeInUp}
                            >
                                <h2 className="text-3xl font-medium text-gray-800 mb-4" style={{ fontFamily: 'serif' }}>
                                    To Sum Up...
                                </h2>
                                <p className="text-gray-700 text-lg xl:text-xl leading-relaxed">
                                    <em className="italic">Supper's Off</em> is an upbeat Rom Com feature film, urging people to grab
                                    life by the <em className="italic">cojones</em> and get the most out of it, no matter what age
                                    they are. An opportunity to escape life's heartaches. And laugh.
                                </p>
                            </motion.section>
                        </motion.div>
                    </section>

                    <motion.div
                        className="mt-20 text-center"
                        variants={fadeInUp}
                    >
                        <motion.button
                            onClick={() => window.history.back()}
                            className="px-10 py-4 bg-pink-600 text-white rounded-lg font-medium text-lg hover:bg-pink-700 transition-colors shadow-lg"
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
                        <div className="w-24 h-px bg-pink-400"></div>
                        <div className="w-4 h-4 rounded-full bg-pink-400 mx-6"></div>
                        <div className="w-24 h-px bg-pink-400"></div>
                    </motion.div>
                </main>
            </div>
        </>
    );
}