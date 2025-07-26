"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactUsPage() {
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
            // Using Formspree - replace with your actual form ID
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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Animated Background */}
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
                        Contact Us • Contact Us • Contact Us • Contact Us • Contact Us • Contact Us • Contact Us • Contact Us •
                    </span>
                </motion.div>
            </motion.div>

            <motion.div
                className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                {/* Page Header */}
                <motion.div className="text-center mb-16" variants={fadeInUp}>
                    <motion.h1
                        className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-wide"
                        style={{ fontFamily: 'serif' }}
                    >
                        Contact Us
                    </motion.h1>
                    <motion.div className="w-24 h-1 bg-amber-400 mx-auto rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
                    {/* Left Column - Content (3 columns) */}
                    <motion.div className="lg:col-span-3 space-y-8" variants={fadeInUp}>
                        <motion.div
                            className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-8 md:p-12"
                            variants={fadeInUp}
                        >
                            <motion.div className="space-y-6 text-lg leading-relaxed text-gray-700" variants={staggerContainer}>
                                <motion.p variants={fadeInUp}>
                                    If you are interested in reading one of our scripts, investing, or donating even just a small amount to cover production costs, please contact{" "}
                                    <motion.em
                                        className="text-amber-700 font-medium not-italic"
                                        whileHover={{ scale: 1.02 }}
                                        style={{ display: "inline-block", fontFamily: 'serif' }}
                                    >
                                        Dreamsum Productions
                                    </motion.em>{" "}
                                    via the email below to start up a conversation.
                                </motion.p>

                                <motion.p variants={fadeInUp}>
                                    We are also open to product placement and profit-sharing schemes.
                                </motion.p>

                                <motion.p variants={fadeInUp}>
                                    Ultimately, though, our mission is simple: to make the world a better place, however small our contribution.
                                </motion.p>

                                <motion.p variants={fadeInUp}>
                                    And, however{" "}
                                    <motion.span
                                        className="text-amber-700 font-medium"
                                        whileHover={{ scale: 1.02 }}
                                        style={{ display: "inline-block" }}
                                    >
                                        "dreamsum"
                                    </motion.span>{" "}
                                    this sounds.
                                </motion.p>
                            </motion.div>
                        </motion.div>

                        {/* Contact Information Cards */}
                        <motion.div className="grid md:grid-cols-2 gap-6" variants={staggerContainer}>
                            <motion.div
                                className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-6"
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-800">Location</h3>
                                        <p className="text-gray-600">London, United Kingdom</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-6"
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-800">Response Time</h3>
                                        <p className="text-gray-600">Within 24-48 hours</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Call to Action */}
                        <motion.div
                            className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200"
                            variants={fadeInUp}
                        >
                            <h3 className="text-xl font-medium text-gray-800 mb-3">Ready to Collaborate?</h3>
                            <p className="text-gray-700 mb-4">
                                Whether you're interested in investing, donating, or exploring partnership opportunities,
                                we'd love to hear from you. Every conversation starts with a simple message.
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-white text-sm font-medium">🎬</div>
                                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white text-sm font-medium">📽️</div>
                                    <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-white text-sm font-medium">🎭</div>
                                </div>
                                <span className="text-sm text-gray-600">Join our creative journey</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Contact Form (2 columns) */}
                    <motion.div
                        className="lg:col-span-2"
                        variants={fadeInUp}
                    >
                        <motion.div
                            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/30 p-8 sticky top-8"
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
                                        className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </motion.div>
                                    <h3 className="text-2xl font-medium text-gray-800 mb-3">Thank you!</h3>
                                    <p className="text-gray-600 mb-6">Your message has been sent successfully. We'll get back to you within 24-48 hours.</p>
                                    <motion.button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-amber-700 hover:text-amber-800 font-medium px-6 py-2 rounded-lg border border-amber-200 hover:bg-amber-50 transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Send another message
                                    </motion.button>
                                </motion.div>
                            ) : (
                                <div className="space-y-6">
                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl font-light text-gray-800 mb-2" style={{ fontFamily: 'serif' }}>
                                            Get in Touch
                                        </h3>
                                        <p className="text-gray-600">Fill out the form below and we'll be in touch soon.</p>
                                    </div>

                                    {/* Name Fields */}
                                    <motion.div variants={fadeInUp}>
                                        <label className="block text-sm font-medium text-gray-700 mb-3">
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
                                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white/90 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
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
                                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white/90 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                                                />
                                                {errors.lastName && (
                                                    <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                                                )}
                                            </motion.div>
                                        </div>
                                    </motion.div>

                                    {/* Email Field */}
                                    <motion.div variants={fadeInUp}>
                                        <label className="block text-sm font-medium text-gray-700 mb-3">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <motion.div whileFocus={{ scale: 1.02 }}>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white/90 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="your.email@example.com"
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                            )}
                                        </motion.div>
                                    </motion.div>

                                    {/* Message Field */}
                                    <motion.div variants={fadeInUp}>
                                        <label className="block text-sm font-medium text-gray-700 mb-3">
                                            Message <span className="text-red-500">*</span>
                                        </label>
                                        <motion.div whileFocus={{ scale: 1.02 }}>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                rows={6}
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white/90 resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
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
                                            className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-medium py-4 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
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
                                                'SEND'
                                            )}
                                        </motion.button>
                                    </motion.div>

                                    <p className="text-xs text-gray-500 text-center mt-4">
                                        Your information is secure and will only be used to respond to your inquiry.
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom decorative element */}
                <motion.div
                    className="flex justify-center items-center mt-20"
                    variants={fadeInUp}
                >
                    <div className="w-20 h-px bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400 mx-4"></div>
                    <div className="w-20 h-px bg-amber-400"></div>
                </motion.div>
            </motion.div>
        </div>
    );
}