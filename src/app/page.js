"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// Donate/Invest Component
function DonateInvestSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Using Formspree - replace 'YOUR_FORM_ID' with actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xdkdgypq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: formData.message,
          _subject: 'New Dreamsum Productions Contact Form Submission'
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: ""
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <motion.section
      className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
      viewport={{ once: true, threshold: 0.2 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/5 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"
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

      <motion.div className="relative z-10 max-w-7xl mx-auto px-6" variants={staggerContainer}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <motion.h2
              className="text-3xl md:text-4xl font-light text-gray-800 tracking-wide"
              style={{ fontFamily: 'serif' }}
              variants={fadeInUp}
            >
              Donate/Invest
            </motion.h2>

            <motion.div className="space-y-6 text-lg leading-relaxed text-gray-700" variants={staggerContainer}>
              <motion.p variants={fadeInUp}>
                If you are interested in reading one of our scripts, investing, or donating even just a small amount to cover production costs, please contact{" "}
                <motion.em
                  className="text-gray-700 font-medium"
                  whileHover={{ scale: 1.02 }}
                  style={{ display: "inline-block", fontFamily: 'serif' }}
                >
                  Dreamsum Productions
                </motion.em>{" "}
                via the contact form, to start up a conversation.
              </motion.p>

              <motion.p variants={fadeInUp}>
                We are also open to product placement and profit-sharing schemes.
              </motion.p>

              <motion.p variants={fadeInUp}>
                Ultimately though, our mission is simple: to make the world a better place, however small our contribution.
              </motion.p>

              <motion.p variants={fadeInUp}>
                And, however{" "}
                <motion.em
                  className="text-gray-700 italic"
                  whileHover={{ scale: 1.02 }}
                  style={{ display: "inline-block" }}
                >
                  dreamsum
                </motion.em>{" "}
                this sounds.
              </motion.p>

              <motion.div className="pt-6 border-t border-gray-200" variants={fadeInUp}>
                <motion.p className="font-medium text-gray-800 text-xl" variants={fadeInUp}>
                  S.J. Horan
                </motion.p>
                <motion.p className="text-gray-600 italic" variants={fadeInUp}>
                  Writer, producer and filmmaker
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="relative"
            variants={fadeInUp}
          >
            <motion.div
              className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/30 p-8"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              {isSubmitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Thank you!</h3>
                  <p className="text-gray-600">Your message has been sent successfully. We'll get back to you soon.</p>
                  <motion.button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-amber-700 hover:text-amber-800 font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send another message
                  </motion.button>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  {/* Name Fields */}
                  <motion.div variants={fadeInUp}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="First Name"
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white/80 ${errors.firstName ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                        )}
                      </motion.div>
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Last Name"
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white/80 ${errors.lastName ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Email Field */}
                  <motion.div variants={fadeInUp}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white/80 ${errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                      )}
                    </motion.div>
                  </motion.div>

                  {/* Message Field */}
                  <motion.div variants={fadeInUp}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white/80 resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'
                          }`}
                        placeholder="Tell us about your interest in investing, donating, or collaborating with Dreamsum Productions..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                      )}
                    </motion.div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div variants={fadeInUp}>
                    <motion.button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-4 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <motion.div
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </div>
                      ) : (
                        'Send Message'
                      )}
                    </motion.button>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom decorative element */}
        <motion.div
          className="flex justify-center items-center mt-16"
          variants={fadeInUp}
        >
          <div className="w-20 h-px bg-amber-400"></div>
          <div className="w-3 h-3 rounded-full bg-amber-400 mx-4"></div>
          <div className="w-20 h-px bg-amber-400"></div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

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
                  className="text-lg leading-relaxed text-gray-600 font-light"
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

      {/* Donate/Invest Section */}
      <DonateInvestSection />
    </>
  );
}