"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Head from "next/head";

export default function WhoAmIPage() {
    const [activeTab, setActiveTab] = useState("films");
    const introRef = useRef(null);
    const educationRef = useRef(null);
    const workRef = useRef(null);
    const reviewsRef = useRef(null);

    const introInView = useInView(introRef, { once: true, threshold: 0.3 });
    const educationInView = useInView(educationRef, { once: true, threshold: 0.3 });
    const workInView = useInView(workRef, { once: true, threshold: 0.2 });
    const reviewsInView = useInView(reviewsRef, { once: true, threshold: 0.2 });

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

    const films = [
        {
            title: "Goodbye Sunshine",
            year: "2024",
            type: "Short Film - Drama",
            description: "A short film about knife-crime, written by S.J. Horan and directed by Ufuk Gokkaya. Selected for the Cannes Indie Shorts Festival and on IMDb, it's seen through the harrowing prism of a mother's grief.",
            status: "Produced & Selected at Cannes Indie Shorts Festival",
            role: "Writer, Producer",
            color: "blue",
            highlight: true
        },
        {
            title: "An Irish Heart",
            year: "2025",
            type: "Feature Film - Drama",
            description: "Maria, an ambitious actress and writer is at a crossroads in her life. Does she marry her long-term boyfriend, Jamie, just as his Nonna wants - or does she role the dice and run off to the bright lights of New York with a free spirited musician, and risk losing everything",
            status: "In pre-production",
            role: "Writer, Producer",
            color: "purple",
            highlight: true

        },
        {
            title: "Revenge is a Hot Chocolate Fudge Cake",
            year: "2008",
            type: "Short Comedy",
            description: "A short comedic film that I wrote, has been rated highly by a local BAFTA judge. In consideration for production.",
            status: "In consideration for production",
            role: "Writer",
            color: "purple",
            highlight: true
        },
        {
            title: "Larry Lobbyist",
            year: "2014",
            type: "Campaign Film",
            description: "A film campaigning against a third Heathrow runway. Produced. Reached the competition finals.",
            status: "Produced - Competition Finalist",
            role: "Producer",
            color: "green",
            highlight: true
        },
        {
            title: "A Spell in Greece",
            year: "2023",
            type: "Rom Com Feature",
            description: "A Rom Com feature film. A short proof of concept film is in pre-production.",
            status: "In Development",
            role: "Writer",
            color: "amber",
            highlight: true
        },
        {
            title: "Supper's Off",
            year: "2022",
            type: "Rom Com Feature",
            description: "A Rom Com feature film, an update of Shirley Valentine. Producers are seeking development funding.",
            status: "In Development",
            role: "Writer",
            color: "pink",
            highlight: true
        },
        {
            title: "City in Flames",
            year: "2021",
            type: "Historical Drama Feature",
            description: "A Historical Drama feature film that recounts one of the worst refugee crises of the twentieth century. In 1922, hundreds of thousands of Greek and Armenian refugees were forced to flee Smyrna (formerly of the Ottoman Empire) as it burned to the ground.",
            status: "In Development",
            role: "Writer",
            color: "red",
            highlight: true
        },
        {
            title: "Treasure Island",
            year: "2025",
            type: "Short Film",
            description: "A short film written, directed, produced and edited by S.J.Horan",
            status: "Produced",
            role: "Writer, Director, Producer, Editor",
            color: "teal",
            highlight: true
        },
        {
            title: "Lost in Translation",
            year: "2024",
            type: "Short Film",
            description: "A short film written, directed, produced and edited by S.J.Horan",
            status: "Produced",
            role: "Writer, Director, Producer, Editor",
            color: "indigo",
            highlight: true
        },
        {
            title: "La Dolce Vita",
            year: "2024",
            type: "Short Film",
            description: "A short film written, directed, produced and edited by S.J.Horan",
            status: "Produced",
            role: "Writer, Director, Producer, Editor",
            color: "orange",
            highlight: true
        }
    ];

    const plays = [
        {
            title: "Fishermen at Sea",
            year: "2008",
            venue: "Etcetera Theatre, Camden Fringe",
            description: "<i>Fishermen at Sea</i>, written by S. J. Horan, was produced at the Etcetera Theatre, Camden Fringe in August 2008 by Red on Black Productions as a showcase for new writers. One of four Turner Plays, it deals with religion, family tragedy and the impossibility of forgiveness.",
            producer: "Red on Black Productions",
            status: "Produced",
            note: "Turner Plays showcase",
            color: "blue",
            highlight: true
        },
        {
            title: "All or Nothing",
            year: "2009",
            venue: "Caldercott Bookshop Theatre",
            description: "<i>All or Nothing</i>, October 2009, written by S. J. Horan, directed by Lucy Collingwood (BBC), was produced by Ziella Bryers at the Caldercott Bookshop Theatre, as part of the Love Bites series. Just in time, a love-struck man realises how superficial his girlfriend is and escapes her clutches.",
            producer: "Ziella Bryers",
            director: "Lucy Collingwood (BBC)",
            status: "Produced",
            note: "Part of Love Bites series",
            color: "purple",
            highlight: true
        },
        {
            title: "Family Holiday",
            year: "2010",
            venue: "Cockpit Theatre, Marylebone, London",
            description: "<i>Family Holiday</i>, May 2010, was written, directed and produced by S. J. Horan, at the Cockpit Theatre, Marylebone, London. This play deals with deep family tensions and long-held resentments.",
            role: "Writer, Director, Producer",
            status: "Produced",
            color: "green",
            highlight: true
        },
        {
            title: "All In The Mind",
            year: "N/A",
            venue: "Kent",
            description: "<i>All In The Mind</i>, a comedic play written by S. J. Horan, was chosen by 17% Theatre Company for their inaugural show. Inspired by The Odd Couple, it deals with the perception of relationships. Two people, one relationship - two very different takes.",
            status: "Produced",
            note: "Comedic play",
            color: "amber",
            highlight: true
        },
        {
            title: "Cook It like Mamma",
            year: "N/A",
            venue: "London",
            description: "A fifth comedic play, <i>Cook It like Mamma</i>, written by S.J Horan garnered great reviews, An unemployed Italian man plots to bring down Berlusconi from his flat in Hounslow. All the while, receiving cheese parcels from his Mamma.",
            status: "Produced",
            note: "Comedic play",
            color: "orange",
            highlight: true
        },
        {
            title: "A Life in Ruins",
            year: "2014",
            venue: "London",
            description: "<i>A Life in Ruins</i>, the second part of S. J. Horan's Irish trilogy, was produced in London, August 2014. This play deals with the devastating effects of rape.",
            status: "Produced",
            note: "Part of Irish trilogy",
            color: "red",
            highlight: true
        },
        {
            title: "All That Glitters",
            year: "2015",
            venue: "Kent",
            description: "<i>All That Glitters</i>, written by S. J. was performed in Kent, August 2015 and produced by 17% Theatre Company. This play deals with the illusion that the grass is always greener.",
            producer: "17% Theatre Company",
            status: "Produced",
            color: "teal",
            highlight: true
        },
        {
            title: "Ménage à quatre",
            year: "2016",
            venue: "N/A",
            description: "<i>Ménage à quatre</i>, written by S. J. Horan, 2016, is about the feminist writer Simone de Beauvoir and her strange love affair with the existentialist, Jean Paul Sartre - very favourably reviewed, waiting production.",
            status: "Very favourably reviewed, waiting production",
            color: "indigo",
            highlight: true
        },
        {
            title: "Gary Loses his Way",
            year: "2020",
            venue: "Barnes, London",
            description: "A short, comic Nativity play, <i>Gary Loses his Way</i>, written by S.J.Horan was to be produced in 2020 as part of the Christmas Cracker Show in Barnes, London. Sadly, the show was cancelled due to Covid. A rather impish take on a former Education Secretary.",
            status: "Cancelled due to Covid",
            note: "Comic Nativity play",
            color: "pink",
            highlight: true
        },
        {
            title: "Dance Me To The End",
            year: "2021",
            venue: "London",
            description: "A radio play, <i>Dance Me To The End</i>, written by S. J. Horan in October 2021 was judged best radio drama. It deals with marriage tensions during Covid and the unhelpful emails from an old French flame.",
            status: "Judged best radio drama",
            color: "emerald",
            highlight: true
        }
    ];

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

    return (
        <>
            <Head>
                <title>S.J. Horan - London Filmmaker & Screenwriter</title>
                <meta name="description" content="S.J. Horan, a London-based filmmaker, screenwriter, and producer, known for award-nominated films like Goodbye Sunshine and romantic comedies like Supper's Off." />
                <meta name="keywords" content="S.J. Horan, London filmmaker, screenwriter, romantic comedy writer, Goodbye Sunshine, Supper's Off, City in Flames" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="S.J. Horan - London Filmmaker & Screenwriter" />
                <meta property="og:description" content="Explore the portfolio of S.J. Horan, a London-based filmmaker and screenwriter, featuring award-nominated films and plays." />
                <meta property="og:image" content="/Sallyphoto.jpg" />
                <meta property="og:url" content="https://www.dreamsumproductions.co.uk/whoAmI" />
                <meta name="twitter:card" content="summary_large_image" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "S.J. Horan",
                            "jobTitle": "Filmmaker, Screenwriter, Producer",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "London",
                                "addressCountry": "UK"
                            },
                            "knowsLanguage": ["English", "French", "Spanish", "Italian", "German"],
                            "hasOccupation": {
                                "@type": "Occupation",
                                "name": "Filmmaker and Screenwriter",
                                "description": "London-based writer, filmmaker, and producer known for films like Goodbye Sunshine and Supper's Off."
                            },
                            "worksFor": {
                                "@type": "Organization",
                                "name": "Dreamsum Productions"
                            },
                            "author": [
                                {
                                    "@type": "CreativeWork",
                                    "name": "Goodbye Sunshine",
                                    "description": "A short film about knife-crime, nominated for the Cannes Indie Shorts Festival."
                                },
                                {
                                    "@type": "CreativeWork",
                                    "name": "Supper's Off",
                                    "description": "A romantic comedy feature film, In development."
                                },
                                {
                                    "@type": "CreativeWork",
                                    "name": "City in Flames",
                                    "description": "A historical drama feature film about the 1922 Smyrna crisis."
                                }
                            ]
                        })
                    }}
                />
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute top-1/4 left-1/6 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 12, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"
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
                            Who I am • Who I am • Who I am • Who I am • Who I am • Who I am • Who I am • Who I am •
                        </span>
                    </motion.div>
                </motion.div>

                <div className="relative z-10 max-w-8xl mx-auto px-6 xl:px-12 py-24">
                    <motion.section
                        ref={introRef}
                        className="mb-20"
                        initial="hidden"
                        animate={introInView ? "visible" : "hidden"}
                        variants={staggerContainer}
                    >
                        <motion.div className="text-center mb-16" variants={fadeInUp}>
                            <motion.h1
                                className="text-5xl xl:text-6xl font-light text-gray-800 mb-8 tracking-wide"
                                style={{ fontFamily: 'serif' }}
                            >
                                S.J.Horan
                            </motion.h1>
                            <motion.p className="text-2xl xl:text-3xl text-gray-600 font-light">
                                London-based writer, filmmaker and producer
                            </motion.p>

                            <motion.div
                                className="mt-12 flex justify-center"
                                variants={fadeInUp}
                            >
                                <motion.div
                                    className="relative w-64 h-64 xl:w-1/3 xl:h-1/3 rounded-full overflow-hidden shadow-2xl border-4 border-white/50"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src="/Sallyphoto.jpg"
                                        alt="S.J. Horan - Writer, filmmaker and producer"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-10 max-w-6xl mx-auto"
                            variants={fadeInUp}
                        >
                            <motion.p
                                className="flex text-xl xl:text-3xl leading-relaxed text-gray-700 font-light mb-6 justify-center align-middle"
                                variants={fadeInUp}
                            >
                                My name is S. J. Horan. I am a London-based writer, filmmaker and producer.
                            </motion.p>
                        </motion.div>
                    </motion.section>

                    <motion.section
                        ref={educationRef}
                        className="mb-20"
                        initial="hidden"
                        animate={educationInView ? "visible" : "hidden"}
                        variants={staggerContainer}
                    >
                        <motion.h2
                            className="text-4xl xl:text-5xl font-light text-gray-800 mb-10 text-center tracking-wide"
                            style={{ fontFamily: 'serif' }}
                            variants={fadeInUp}
                        >
                            Education & Languages
                        </motion.h2>

                        <div className="grid xl:grid-cols-2 gap-10">
                            <motion.div
                                className="bg-white/70 backdrop-blur-sm  rounded-xl shadow-lg border border-white/30 p-8 xl:p-8"
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-2xl font-medium text-amber-700 mb-4">Education</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="font-medium text-gray-800 text-lg">MA in Creative Writing</p>
                                        <p className="text-gray-600 italic text-base">Plays and Scripts</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800 text-lg">BSc(Hons)</p>
                                        <p className="text-gray-600 italic text-base">Computational Linguistics and Modern Languages</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-8 xl:p-10"
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-2xl font-medium text-amber-700 mb-4">Languages</h3>
                                <div className="flex flex-wrap gap-3">
                                    {["English", "French", "Spanish", "Italian", "German"].map((lang, index) => (
                                        <motion.span
                                            key={lang}
                                            className="px-4 py-1.5 bg-blue-100 text-black rounded-full text-sm font-medium"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.1 * index }}
                                        >
                                            {lang}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.section>

                    <motion.section
                        ref={workRef}
                        className="mb-20"
                        initial="hidden"
                        animate={workInView ? "visible" : "hidden"}
                        variants={staggerContainer}
                    >
                        <motion.h2
                            className="text-4xl xl:text-5xl font-light text-gray-800 mb-10 text-center tracking-wide"
                            style={{ fontFamily: 'serif' }}
                            variants={fadeInUp}
                        >
                            What I have done
                        </motion.h2>

                        <motion.div className="flex justify-center mb-10" variants={fadeInUp}>
                            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-1.5 shadow-lg border border-white/30">
                                {[
                                    { id: "films", label: "Films" },
                                    { id: "plays", label: "Plays" }
                                ].map((tab) => (
                                    <motion.button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`px-8 py-3 rounded-md font-medium text-lg transition-all duration-200 ${activeTab === tab.id
                                            ? "bg-amber-600 text-white shadow-md"
                                            : "text-gray-600 hover:text-gray-800"
                                            }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {tab.label}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>

                        {activeTab === "films" && (
                            <motion.div
                                className="flex flex-row flex-wrap gap-8 justify-center "
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                            >
                                {films.map((film, index) => (
                                    <motion.div
                                        key={film.title}
                                        className={`bg-white/70 flex flex-col w-120  items-center backdrop-blur-sm rounded-xl shadow-xl border border-white/30 p-8 hover:shadow-2xl transition-all duration-300 ${film.highlight ? 'ring-2 ring-amber-300/50' : ''}`}
                                        variants={fadeInUp}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                    >
                                        <div className="flex items-start gap-2 justify-between mb-4">
                                            <h3 className="text-xl font-medium text-gray-800 italic">{film.title}</h3>
                                            <span className="text-base font-medium text-gray-500">({film.year})</span>
                                        </div>

                                        <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${film.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                                            film.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                                                film.color === 'green' ? 'bg-green-100 text-green-800' :
                                                    film.color === 'amber' ? 'bg-amber-100 text-amber-800' :
                                                        film.color === 'pink' ? 'bg-pink-100 text-pink-800' :
                                                            film.color === 'red' ? 'bg-red-100 text-red-800' :
                                                                film.color === 'teal' ? 'bg-teal-100 text-teal-800' :
                                                                    film.color === 'indigo' ? 'bg-indigo-100 text-indigo-800' :
                                                                        film.color === 'orange' ? 'bg-orange-100 text-orange-800' :
                                                                            'bg-gray-100 text-gray-800'
                                            }`}>
                                            {film.type}
                                        </div>

                                        <p className="text-gray-600 text-center mb-4 leading-relaxed">{film.description}</p>

                                        <div className="space-y-3 flex flex-col items-center">
                                            <p className="text-sm font-medium text-gray-500">Role: {film.role}</p>
                                            <p className={`text-sm font-medium ${film.status.includes('In Development') ? 'text-orange-600' :
                                                film.status.includes('Nominated') || film.status.includes('Finalist') ? 'text-green-600 font-semibold' :
                                                    'text-green-600'
                                                }`}>
                                                {film.status}
                                            </p>
                                        </div>

                                        {film.status.includes('Nominated') && (
                                            <div className="mt-4 inline-block">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                    🏆 Cannes Nominee
                                                </span>
                                            </div>
                                        )}

                                        {film.status.includes('BAFTA') && (
                                            <div className="mt-4 inline-block">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                                    ⭐ BAFTA Rated
                                                </span>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                        {activeTab === "plays" && (
                            <motion.div
                                className="flex flex-row flex-wrap gap-8 justify-center"
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                            >
                                {plays.map((play, index) => (
                                    <motion.div
                                        key={play.title}
                                        className={`bg-white/70 flex max-w-120 flex-col items-center backdrop-blur-sm rounded-xl shadow-xl border border-white/30 p-6 hover:shadow-2xl transition-all duration-300 ${play.highlight ? 'ring-2 ring-amber-300/50' : ''}`}
                                        variants={fadeInUp}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                    >
                                        <div className="flex items-start justify-between gap-2 mb-4">
                                            <h3 className="text-xl font-medium text-gray-800 italic">{play.title}</h3>
                                            {play.year !== "N/A" && (
                                                <span className="text-base font-medium text-gray-500">({play.year})</span>
                                            )}
                                        </div>

                                        <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${play.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                                            play.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                                                play.color === 'green' ? 'bg-green-100 text-green-800' :
                                                    play.color === 'amber' ? 'bg-amber-100 text-amber-800' :
                                                        play.color === 'orange' ? 'bg-orange-100 text-orange-800' :
                                                            play.color === 'red' ? 'bg-red-100 text-red-800' :
                                                                play.color === 'teal' ? 'bg-teal-100 text-teal-800' :
                                                                    play.color === 'indigo' ? 'bg-indigo-100 text-indigo-800' :
                                                                        play.color === 'pink' ? 'bg-pink-100 text-pink-800' :
                                                                            play.color === 'emerald' ? 'bg-emerald-100 text-emerald-800' :
                                                                                'bg-gray-100 text-gray-800'
                                            }`}>
                                            {play.note || 'Play'}
                                        </div>


                                        <p className="text-gray-600 text-center mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: play.description }}></p>

                                        <div className="space-y-3 flex flex-col items-center">
                                            {play.venue && (
                                                <p className="text-sm font-medium text-gray-500">Venue: {play.venue}</p>
                                            )}
                                            {play.producer && (
                                                <p className="text-sm font-medium text-gray-500">Producer: {play.producer}</p>
                                            )}
                                            {play.director && (
                                                <p className="text-sm font-medium text-gray-500">Director: {play.director}</p>
                                            )}
                                            {play.role && (
                                                <p className="text-sm font-medium text-gray-500">Role: {play.role}</p>
                                            )}
                                            <p className={`text-sm font-medium ${play.status.includes('waiting') || play.status.includes('Cancelled') ? 'text-orange-600' :
                                                play.status.includes('best') || play.status.includes('favourably') || play.status.includes('Great') ? 'text-green-600 font-semibold' :
                                                    'text-green-600'
                                                }`}>
                                                {play.status}
                                            </p>
                                        </div>

                                        {play.status.includes('favourably reviewed') && (
                                            <div className="mt-4 inline-block">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                                    ⭐ Critically Acclaimed
                                                </span>
                                            </div>
                                        )}

                                        {play.status.includes('Great reviews') && (
                                            <div className="mt-4 inline-block">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                    📝 Great Reviews
                                                </span>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </motion.section>

                    <motion.section
                        ref={reviewsRef}
                        initial="hidden"
                        animate={reviewsInView ? "visible" : "hidden"}
                        variants={staggerContainer}
                    >
                        <motion.h2
                            className="text-4xl xl:text-5xl font-light text-gray-800 mb-10 text-center tracking-wide"
                            style={{ fontFamily: 'serif' }}
                            variants={fadeInUp}
                        >
                            Reviews & Testimonials
                        </motion.h2>

                        <motion.div
                            className="flex flex-row flex-wrap gap-8 justify-center "
                            variants={staggerContainer}
                        >
                            {reviews.map((review, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/70 backdrop-blur-sm w-120 rounded-xl shadow-lg border border-white/30 p-8
                                    "
                                    variants={fadeInUp}
                                    whileHover={{ y: -3 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="mb-4">
                                        <svg className="w-10 h-10 text-amber-500 mb-3" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                                        </svg>
                                        <p className="text-gray-700 text-base xl:text-lg leading-relaxed italic">"{review.quote}"</p>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4">
                                        <p className="font-medium text-gray-800 text-lg">{review.author}</p>
                                        <p className="text-sm text-amber-600">{review.type}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.section>

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
        </>
    );
}