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
                <meta property="og:url" content="https://yourdomain.com/city-in-flames" />
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
                                "name": "Your Production Company"
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
                        animate={{ x: [1200, -1200] }}
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

                    <nav className="mb-12 text-center">
                        <ul className="flex flex-wrap justify-center gap-4 text-gray-700">
                            <li><a href="/an-irish-heart" className="hover:underline">An Irish Heart</a></li>
                            <li><a href="/goodbye-sunshine" className="hover:underline">Goodbye Sunshine</a></li>
                            <li><a href="/spell-in-greece" className="hover:underline">A Spell in Greece</a></li>
                            <li><a href="/suppers-off" className="hover:underline">Supper's Off</a></li>
                        </ul>
                    </nav>

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
                                </