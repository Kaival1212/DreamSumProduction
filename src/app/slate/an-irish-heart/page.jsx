"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

export default function AnIrishHeartPage() {
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
                <title>An Irish Heart - Romantic Comedy Film | Pre-Production</title>
                <meta name="description" content="Discover 'An Irish Heart,' a feel-good romantic comedy set in Ireland, exploring love and life choices. Currently in pre-production." />
                <meta name="keywords" content="Irish romantic comedy, An Irish Heart film, romance feature film, Ireland movie" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="An Irish Heart - Romantic Comedy Film" />
                <meta property="og:description" content="A feel-good romantic comedy set in Ireland, exploring love and life choices. In pre-production." />
                <meta property="og:image" content="/Irish.png" />
                <meta property="og:url" content="https://yourdomain.com/an-irish-heart" />
                <meta name="twitter:card" content="summary_large_image" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Movie",
                            "name": "An Irish Heart",
                            "description": "A romantic comedy set in Ireland, following Maria's journey to choose between love and adventure.",
                            "genre": ["Romantic Comedy"],
                            "inLanguage": "en",
                            "productionCompany": {
                                "@type": "Organization",
                                "name": "Your Production Company"
                            }
                        })
                    }}
                />
            </Head>
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
                            An Irish Heart • An Irish Heart • An Irish Heart • An Irish Heart • An Irish Heart •
                        </span>
                    </motion.div>
                </motion.div>

                <main className="relative z-10 max-w-8xl mx-auto px-6 xl:px-12 py-24">
                    <header className="text-center mb-20" variants={fadeInUp}>
                        <motion.h1
                            className="text-5xl xl:text-6xl font-light text-gray-800 mb-8 tracking-wide italic"
                            style={{ fontFamily: 'serif' }}
                        >
                            An Irish Heart
                        </motion.h1>
                        <motion.div className="w-32 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
                    </header>


                    <section className="grid xl:grid-cols-2 gap-16 items-start" variants={staggerContainer}>
                        <motion.article variants={fadeInUp}>
                            <motion.div
                                className="relative bg-white/80 backdrop-blur-sm p-8 xl:p-10 rounded-2xl shadow-2xl border border-white/30"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src="/Irish.png"
                                    alt="Poster for An Irish Heart, a romantic comedy set in Ireland"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto rounded-lg"
                                    priority
                                />
                            </motion.div>
                            <motion.div className="mt-8 text-center" variants={fadeInUp}>
                                <span className="px-4 py-2 rounded-full text-base font-medium bg-blue-100 text-blue-800 border border-blue-200">
                                    Pre-Production
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
                                    Maria, an ambitious actress and writer is at a crossroads in her life. Does she marry her long-term boyfriend, Jamie, just as his Nonna wants - or does she roll the dice and run off to the bright lights of New York with a free spirited musician, and risk losing everything?
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
                                        When Maria’s fiancé Jamie has to visit his grandmother in Italy, Maria’s hitherto well-planned life map is thrown into chaos. A knock on the door and Freddie, a handsome musician turns up, looking for his old friend Jamie. Bored on her own, Maria lets him in and sparks are soon set off. Freddie’s a natural flirt and tells her she’s too good for Jamie.
                                    </p>
                                    <p>
                                        Maria tries to resist his charm but… it’s hard. Luckily, by the time Jamie comes home, she’s seen the error of her ways and asks him to marry her. The wedding day is set. But the course of true love has a few more bumps to get over before Maria is set on her rightful path. Who will she choose?
                                    </p>
                                    <p>
                                        An Irish Heart is an original, funny and feel-good, film.
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
                                    Wide appeal. This will appeal to all those who’ve ever wondered whether the romantic grass is greener…
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
                                    Set in the beautiful emerald isle of Ireland, this is an upbeat, fast-moving comic feast for the ears and eyes. We follow our characters as they struggle with heart ache, the illusions of love and the reality of important choices.
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
                                    <i>A Holiday Affair, Leap Year, Rumour Has It</i>
                                </p>
                            </motion.section>

                            <motion.section
                                className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 xl:p-10 border border-blue-200"
                                variants={fadeInUp}
                            >
                                <h2 className="text-3xl font-medium text-gray-800 mb-4" style={{ fontFamily: 'serif' }}>
                                    To Sum Up...
                                </h2>
                                <p className="text-gray-700 text-lg xl:text-xl leading-relaxed">
                                    <em className="italic">An Irish Heart</em> is a funny and romantic story about finding out who we really are, before it’s too late.
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
                            className="px-10 py-4 bg-blue-600 text-white rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors shadow-lg"
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
                        <div className="w-24 h-px bg-blue-400"></div>
                        <div className="w-4 h-4 rounded-full bg-blue-400 mx-6"></div>
                        <div className="w-24 h-px bg-blue-400"></div>
                    </motion.div>
                </main>
            </div>
        </>
    );
}