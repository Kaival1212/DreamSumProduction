"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";


export default function OnTheSlatePage() {
    const [selectedProject, setSelectedProject] = useState(null);

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

    const projects = [
        {
            id: 1,
            title: "Goodbye Sunshine",
            subtitle: "Cannes Nominated Short Film",
            status: "Produced",
            image: "/goodbyesun.png",
            description: "A powerful short film about knife-crime, seen through the harrowing prism of a mother's grief.",
            year: "2024",
            type: "Short Film",
            director: "Ufuk Gokkaya",
            role: "Writer, Producer",
            achievement: "Cannes Indie Shorts Festival Nominee"
        },
        {
            id: 2,
            title: "City in Flames",
            subtitle: "Historical Drama Feature",
            status: "Seeking Producers",
            image: "/Cityflames.jpg",
            description: "Recounts one of the worst refugee crises of the twentieth century - the 1922 Smyrna tragedy.",
            year: "2021",
            type: "Feature Film",
            role: "Writer",
            achievement: "Called a 'blockbuster' by BBC director"
        },
        {
            id: 3,
            title: "Supper's Off",
            subtitle: "Romantic Comedy Feature",
            status: "Seeking Development Funding",
            image: "/supper.png",
            description: "A romantic comedy feature film, an update of Shirley Valentine.",
            year: "2022",
            type: "Feature Film",
            role: "Writer",
            achievement: "Praised by Raindance Film School"
        },
        {
            id: 4,
            title: "A Spell in Greece",
            subtitle: "Romantic Comedy Feature",
            status: "Seeking Funding",
            image: "/spell.png",
            description: "A Rom Com feature film with vibrant characters and witty dialogue.",
            year: "2023",
            type: "Feature Film",
            role: "Writer",
            achievement: "Excellent characterization noted by reviewers"
        },
        {
            id: 5,
            title: "An Irish Heart",
            subtitle: "Romantic Comedy Feature",
            status: "Pre-Production",
            image: "/Irish.png",
            description: "A romantic comedy exploring themes of love, passion and risk.",
            year: "2025",
            type: "Feature Film",
            role: "Writer and Producer",
            achievement: "Part of expanding portfolio"
        },
    ];

    const handleProjectClick = (projectTitle) => {
        const urlTitle = projectTitle.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
        console.log(`Redirecting to project: ${urlTitle}`);
        const projectRoutes = {
            'goodbye-sunshine': '/slate/goodbye-sunshine',
            'city-in-flames': '/slate/city-in-flames',
            'supper-s-off': '/slate/suppers-off',
            'a-spell-in-greece': '/slate/spell-in-greece',
            'an-irish-heart': '/slate/an-irish-heart'
        };
        const route = projectRoutes[urlTitle];
        if (route) {
            window.location.href = route;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case "Produced & Nominated":
                return "bg-green-100 text-green-800 border-green-200";
            case "Seeking Producers":
                return "bg-orange-100 text-orange-800 border-orange-200";
            case "Seeking Development Funding":
                return "bg-yellow-100 text-yellow-800 border-yellow-200";
            case "Seeking Funding":
                return "bg-blue-100 text-blue-800 border-blue-200";
            case "Pre-Production":
                return "bg-purple-100 text-purple-800 border-purple-200";
            default:
                return "bg-gray-100 text-gray-800 border-gray-200";
        }
    };

    return (
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
                    animate={{ x: [1200, -1200] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                    <span className="text-2xl xl:text-3xl font-light tracking-[0.4em] px-10">
                        On the Slate • On the Slate • On the Slate • On the Slate • On the Slate • On the Slate • On the Slate •
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
                        className="text-5xl xl:text-6xl font-light text-gray-800 mb-8 tracking-wide"
                        style={{ fontFamily: 'serif' }}
                    >
                        On the Slate
                    </motion.h1>
                    <motion.div className="w-32 h-1 bg-amber-400 mx-auto rounded-full mb-8" />
                    <motion.p className="text-2xl xl:text-3xl text-gray-600 font-light max-w-4xl mx-auto">
                        Current and upcoming projects from Dreamsum Productions -
                        featuring compelling stories that inspire, inform, and entertain.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid xl:grid-cols-4 gap-10"
                    variants={staggerContainer}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="group relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
                            variants={fadeInUp}
                            whileHover={{ y: -10, scale: 1.02 }}
                            onClick={() => handleProjectClick(project.title)}
                        >
                            <div className="relative h-80 overflow-hidden ">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                <div className="absolute top-6 right-6">
                                    <span className={`px-4 py-1.5 rounded-full text-sm font-medium border ${getStatusColor(project.status)}`}>
                                        {project.status}
                                    </span>
                                </div>

                                {project.achievement && project.title === "Goodbye Sunshine" && (
                                    <div className="absolute top-6 left-6 ">
                                        <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                                            🏆 Award Nominee
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="p-8">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-medium text-gray-800 mb-1 italic" style={{ fontFamily: 'serif' }}>
                                        {project.title}
                                    </h3>
                                    <p className="text-amber-600 font-medium text-base">
                                        {project.subtitle}
                                    </p>
                                </div>

                                <p className="text-gray-600 text-base xl:text-lg mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="space-y-3 text-sm text-gray-500">
                                    <div className="flex justify-between">
                                        <span>Year Written:</span>
                                        <span className="font-medium">{project.year}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Type:</span>
                                        <span className="font-medium">{project.type}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Role:</span>
                                        <span className="font-medium">{project.role}</span>
                                    </div>
                                </div>

                                <div className="absolute inset-0 bg-amber-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="text-center text-white p-8">
                                        <h4 className="text-xl font-medium mb-3">{project.title}</h4>
                                        <p className="text-base mb-4">{project.achievement}</p>
                                        <button
                                            className="px-6 py-2.5 bg-white text-amber-600 rounded-lg font-medium text-base hover:bg-gray-100 transition-colors"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleProjectClick(project.title);
                                            }}
                                        >
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-24 text-center"
                    variants={fadeInUp}
                >
                    <motion.div
                        className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-10 xl:p-12 border border-amber-200 max-w-5xl mx-auto"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-3xl xl:text-4xl font-light text-gray-800 mb-8" style={{ fontFamily: 'serif' }}>
                            Interested in Our Projects?
                        </h3>
                        <p className="text-xl xl:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Whether you're looking to invest, collaborate, or learn more about our productions,
                            we'd love to hear from you. Every great story begins with a conversation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <motion.div
                                href="/contact"
                                className="px-10 py-4 bg-amber-600 text-white rounded-lg font-medium text-lg hover:bg-amber-700 transition-colors shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href="/contact">
                                    Contact Us
                                </Link>
                            </motion.div>
                            <motion.button
                                className="px-10 py-4 bg-white text-amber-600 rounded-lg font-medium text-lg border border-amber-300 hover:bg-amber-50 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href="/whoAmI">
                                    Learn More
                                </Link>
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="mt-20 grid grid-cols-2 xl:grid-cols-4 gap-10"
                    variants={staggerContainer}
                >
                    {[
                        { number: "20+", label: "Projects Created" },
                        { number: "1", label: "Cannes Nomination" },
                        { number: "4", label: "Feature Films" },
                        { number: "4+", label: "Award Recognition" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-white/30"
                            variants={fadeInUp}
                            whileHover={{ y: -5 }}
                        >
                            <div className="text-4xl xl:text-5xl font-light text-amber-600 mb-3" style={{ fontFamily: 'serif' }}>
                                {stat.number}
                            </div>
                            <div className="text-gray-600 text-base font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="flex justify-center items-center mt-24"
                    variants={fadeInUp}
                >
                    <div className="w-24 h-px bg-amber-400"></div>
                    <div className="w-4 h-4 rounded-full bg-amber-400 mx-6"></div>
                    <div className="w-24 h-px bg-amber-400"></div>
                </motion.div>
            </motion.div>

            {selectedProject && (
                <motion.div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setSelectedProject(null)}
                >
                    <motion.div
                        className="bg-white rounded-2xl p-10 xl:p-12 max-w-3xl w-full max-h-[80vh] overflow-y-auto"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-start mb-8">
                            <h3 className="text-3xl font-medium text-gray-800" style={{ fontFamily: 'serif' }}>
                                {selectedProject.title}
                            </h3>
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="w-full h-80 object-cover rounded-lg mb-8"
                        />
                        <p className="text-gray-600 text-base xl:text-lg mb-4">{selectedProject.description}</p>
                        <div className="space-y-3 text-base">
                            <p><strong>Year:</strong> {selectedProject.year}</p>
                            <p><strong>Type:</strong> {selectedProject.type}</p>
                            <p><strong>Role:</strong> {selectedProject.role}</p>
                            <p><strong>Achievement:</strong> {selectedProject.achievement}</p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}