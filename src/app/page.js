"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import DonateInvestSection from "./components/DonateInvestPage";


export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const missionRef = useRef(null);

  // Subtle parallax effects
  const heroY = useTransform(scrollYProgress, [0, 0.5], ["0%", "15%"]);

  // In-view animations
  const heroInView = useInView(heroRef, { once: true, threshold: 0.2 });
  const aboutInView = useInView(aboutRef, { once: true, threshold: 0.3 });
  const missionInView = useInView(missionRef, { once: true, threshold: 0.2 });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <>
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translate3d(100%, 0, 0); }
          100% { transform: translate3d(-100%, 0, 0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .marquee-text {
          animation: marquee 25s linear infinite;
        }
        
        .glass-effect {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative py-16 md:py-20 flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100"
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          />
        </div>

        {/* Main Content */}
        <motion.div
          className="relative z-10 w-full max-w-4xl mx-auto px-6"
          style={{ y: heroY }}
        >
          {/* Logo Card */}
          <motion.div
            className="relative mb-8"
            variants={fadeInUp}
          >
            <motion.div
              className="relative bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl border border-white/20 mx-auto max-w-2xl"
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              style={{
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.3)',
              }}
            >
              <motion.img
                src="/logo.png"
                alt="Dreamsum Productions - to inspire, inform, entertain"
                className="w-full h-auto rounded-lg"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>

          {/* Title Overlay */}
          <motion.div
            className="text-center"
            variants={fadeInUp}
          >
            <motion.div
              className="glass-effect mx-auto max-w-lg px-6 py-4 rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h1
                className="text-2xl md:text-3xl font-light text-amber-100 mb-2 tracking-wide"
                style={{ fontFamily: 'serif' }}
              >
                Dreamsum Productions
              </motion.h1>
              <motion.p
                className="text-base md:text-lg font-light italic text-amber-200/90"
              >
                — to inspire, inform, entertain —
              </motion.p>

              {/* Decorative line */}
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent mt-3"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Marquee Section */}
      <motion.section
        className="bg-black text-white py-4 overflow-hidden relative"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        {/* Gradient edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="marquee-text whitespace-nowrap">
          <span className="text-xl md:text-2xl font-light tracking-[0.3em] px-8">
            LIGHTS, CAMERA, ACTION! • LIGHTS, CAMERA, ACTION! • LIGHTS, CAMERA, ACTION! • LIGHTS, CAMERA, ACTION! • LIGHTS, CAMERA, ACTION! •
          </span>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        ref={aboutRef}
        className="py-12 md:py-16 bg-white relative overflow-hidden"
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-light text-gray-800 mb-6 tracking-wide"
            style={{ fontFamily: 'serif' }}
            variants={fadeInUp}
          >
            About Us
          </motion.h2>

          <motion.div
            className="max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            <motion.p
              className="text-lg md:text-xl leading-relaxed text-gray-700 font-light"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0.8 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="font-medium text-amber-700"
                whileHover={{ scale: 1.02 }}
                style={{ display: "inline-block" }}
              >
                Dreamsum Productions
              </motion.span>{" "}
              is a London-based company that produces and promotes high-quality feature films,
              short films and podcast dramas, comedies and interviews with figures from the creative industries.
            </motion.p>
          </motion.div>

          {/* Decorative separator */}
          <motion.div
            className="flex justify-center items-center mt-8"
            variants={fadeInUp}
          >
            <div className="w-16 h-px bg-amber-400"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400 mx-4"></div>
            <div className="w-16 h-px bg-amber-400"></div>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        ref={missionRef}
        className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden"
        initial="hidden"
        animate={missionInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="relative"
            variants={fadeInUp}
          >
            {/* Left accent border */}
            <motion.div
              className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-amber-600 via-amber-500 to-amber-600"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            <div className="pl-8">
              <motion.h2
                className="text-2xl md:text-3xl font-light tracking-wide text-gray-800 mb-6"
                style={{ fontFamily: 'serif' }}
                variants={fadeInUp}
              >
                Mission Statement
              </motion.h2>

              <motion.div
                className="space-y-4 max-w-4xl"
                variants={staggerContainer}
              >
                <motion.p
                  className="text-lg md:text-xl leading-relaxed text-gray-800 font-light"
                  variants={fadeInUp}
                >
                  All our projects aim, through different ways, to add something positive to people's experience
                  of films or podcasts. Whether that's by showing how individual acts of courage can redress
                  political failures, as with my feature film{" "}
                  <motion.em
                    className="text-blue-700 font-medium"
                    whileHover={{ scale: 1.02 }}
                    style={{ display: "inline-block" }}
                  >
                    City In Flames
                  </motion.em>
                  , tackle urgent social issues such as knife-crime - as with our Cannes-nominated short film -{" "}
                  <motion.em
                    className="text-purple-700 font-medium"
                    whileHover={{ scale: 1.02 }}
                    style={{ display: "inline-block" }}
                  >
                    Goodbye Sunshine
                  </motion.em>
                  , or by making people laugh - a very serious business - as with my Comedy/Drama feature films,{" "}
                  <motion.em
                    className="text-green-700 font-medium"
                    whileHover={{ scale: 1.02 }}
                    style={{ display: "inline-block" }}
                  >
                    A Spell in Greece and Supper's Off
                  </motion.em>
                  or with my Rom Com,{" "}
                  <motion.em
                    className="text-pink-700 font-medium"
                    whileHover={{ scale: 1.02 }}
                    style={{ display: "inline-block" }}
                  >
                    An Irish Heart
                  </motion.em>
                  - we want all our projects to ahve a positive impact.
                </motion.p>

                {/* <motion.p
                  className="text-lg leading-relaxed text-gray-600 font-light"
                  variants={fadeInUp}
                >
                  We believe in the power of storytelling to connect people, challenge perspectives, and
                  create meaningful dialogue. Every project we undertake is crafted with attention to detail
                  and a commitment to quality that reflects our passion for the creative industries.
                </motion.p> */}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Donate/Invest Section */}
      <DonateInvestSection />
    </>
  );
}