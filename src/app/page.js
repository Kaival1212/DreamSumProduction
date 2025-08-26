"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import DonateInvestSection from "./components/DonateInvestSection";
import Head from "next/head";



export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const missionRef = useRef(null);

  const heroY = useTransform(scrollYProgress, [0, 0.5], ["0%", "15%"]);
  const heroInView = useInView(heroRef, { once: true, threshold: 0.2 });
  const aboutInView = useInView(aboutRef, { once: true, threshold: 0.3 });
  const missionInView = useInView(missionRef, { once: true, threshold: 0.2 });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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

      <Head>
        <title>Dreamsum Productions - London Film Production</title>
        <meta name="description" content="Dreamsum Productions, a London-based film company by S.J. Horan, creates award-nominated films like Goodbye Sunshine and Supper's Off. Invest or donate today!" />
        <meta name="keywords" content="Dreamsum Productions, London film production, S.J. Horan, independent film investment, Goodbye Sunshine, Supper's Off, City in Flames" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Dreamsum Productions - London Film Production" />
        <meta property="og:description" content="Discover Dreamsum Productions, a London-based film company led by S.J. Horan, producing films like Goodbye Sunshine and Supper's Off. Support our mission!" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://www.dreamsumproductions.co.uk/" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Dreamsum Productions",
              "url": "https://www.dreamsumproductions.co.uk",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "addressCountry": "UK"
              },
              "description": "Dreamsum Productions is a London-based film production company led by S.J. Horan, creating award-nominated films and podcasts to inspire, inform, and entertain.",
              "logo": "https://www.dreamsumproductions.co.uk/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "contact@dreamsumproductions.co.uk"
              },
              "founder": {
                "@type": "Person",
                "name": "S.J. Horan",
                "jobTitle": "Writer, Producer, Filmmaker",
                "url": "https://www.dreamsumproductions.co.uk/who-am-i"
              },
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "CreativeWork",
                    "name": "Goodbye Sunshine",
                    "description": "A Cannes-nominated short film about knife-crime."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "CreativeWork",
                    "name": "Supper's Off",
                    "description": "A romantic comedy feature film seeking development funding."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "CreativeWork",
                    "name": "City in Flames",
                    "description": "A historical drama feature film about the 1922 Smyrna crisis."
                  }
                }
              ]
            })
          }}
        />
      </Head>

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

      <motion.section
        ref={heroRef}
        className="relative py-20 xl:py-12 flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100"
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/5 bg-amber-200/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          />
        </div>

        <motion.div
          className="relative z-10 w-full mx-auto px-6 xl:px-96"
          style={{ y: heroY }}
        >

          <section className="section absolute z-0">
            <span className="Span"></span>
            <span className="Span"></span>
            <span className="Span"></span>
            <span className="Span"></span>
            <span className="Span"></span>
            <span className="Span"></span>
            <span className="Span"></span>
            <span className="Span"></span>
            <span className="Span"></span>
            <span className="Span"></span>
          </section>

          <motion.div
            className="relative mb-12"
            variants={fadeInUp}
          >
            <motion.div
              className="relative bg-white/80 backdrop-blur-xl p-8 xl:p-10 rounded-2xl shadow-2xl border border-white/20 mx-auto "
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
                className="w-full rounded-lg"
                initial={{ opacity: 0, scale: 2.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center relative"
            variants={fadeInUp}
          >
            <motion.div
              className="glass-effect mx-auto max-w-xl px-8 py-6 rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h1
                className="text-3xl xl:text-4xl font-light text-amber-100 mb-3 tracking-wide"
                style={{ fontFamily: 'serif' }}
              >
                Dreamsum Productions
              </motion.h1>
              <motion.p
                className="text-lg xl:text-xl font-light italic text-amber-200/90"
              >
                — to inspire, inform, entertain —
              </motion.p>

              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent mt-4"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        className="bg-black text-white py-5 overflow-hidden relative"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="marquee-text whitespace-nowrap">
          <span className="text-2xl xl:text-3xl font-light tracking-[0.4em] px-10">
            LIGHTS, CAMERA, ACTION! • LIGHTS, CAMERA, ACTION! • LIGHTS, CAMERA, ACTION! • LIGHTS, CAMERA, ACTION! • LIGHTS, CAMERA, ACTION! •
          </span>
        </div>
      </motion.section>

      <motion.section
        ref={aboutRef}
        className="py-16 xl:py-24 bg-white relative overflow-hidden"
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="max-w-5xl mx-auto px-6 xl:px-12 text-center">
          <motion.h2
            className="text-3xl xl:text-4xl font-light text-gray-800 mb-8 tracking-wide"
            style={{ fontFamily: 'serif' }}
            variants={fadeInUp}
          >
            About Us
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            <motion.p
              className="text-xl xl:text-2xl leading-relaxed text-gray-700 font-light"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0.8 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="font-medium text-gray-800"
                whileHover={{ scale: 1.02 }}
                style={{ display: "inline-block" }}
              >
                Dreamsum Productions
              </motion.span>{" "}
              is a London-based company that produces and promotes high-quality feature films,
              short films and podcast dramas, comedies and interviews with figures from the creative industries.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex justify-center items-center mt-12"
            variants={fadeInUp}
          >
            <div className="w-20 h-px bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400 mx-6"></div>
            <div className="w-20 h-px bg-amber-400"></div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        ref={missionRef}
        className="py-16 xl:py-24 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden"
        initial="hidden"
        animate={missionInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-6 xl:px-12">
          <motion.div
            className="relative"
            variants={fadeInUp}
          >
            <motion.div
              className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-amber-600 via-amber-500 to-amber-600"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            <div className="pl-10">
              <motion.h2
                className="text-3xl xl:text-4xl font-light tracking-wide text-gray-800 mb-8"
                style={{ fontFamily: 'serif' }}
                variants={fadeInUp}
              >
                Mission Statement
              </motion.h2>

              <motion.div
                className="space-y-6 max-w-5xl"
                variants={staggerContainer}
              >
                <motion.p
                  className="text-xl xl:text-2xl leading-relaxed text-gray-800 font-light"
                  variants={fadeInUp}
                >
                  All our projects aim, through different ways, to add something positive to people's experience
                  of films or podcasts. Whether that's by showing how individual acts of courage can redress
                  political failures, as with my feature film{" "}
                  <motion.em
                    className="text-gray-900"
                    whileHover={{ scale: 1.02 }}
                    style={{ display: "inline-block" }}
                  >
                    City In Flames
                  </motion.em>
                  , tackle urgent social issues such as knife-crime - as with our Cannes-nominated short film -{" "}
                  <motion.em
                    className="text-gray-900"
                    whileHover={{ scale: 1.02 }}
                    style={{ display: "inline-block" }}
                  >
                    Goodbye Sunshine
                  </motion.em>
                  , or by making people laugh - a very serious business - as with my comedy{" "}
                  <motion.em
                    className="text-gray-900"
                    whileHover={{ scale: 1.02 }}
                    style={{ display: "inline-block" }}
                  >
                    Supper's Off
                  </motion.em>
                  .
                </motion.p>

                <motion.p
                  className="text-xl xl:text-2xl leading-relaxed text-gray-800 font-light"
                  variants={fadeInUp}
                >
                  We believe in the power of storytelling to connect people, challenge perspectives, and
                  create meaningful dialogue. Every project we undertake is crafted with attention to detail
                  and a commitment to quality that reflects our passion for the creative industries.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <DonateInvestSection />
    </>
  );
}