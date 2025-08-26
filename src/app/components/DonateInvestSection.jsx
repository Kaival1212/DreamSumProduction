"use client";

import { useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";


export default function DonateInvestSection() {
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
            className="py-16 xl:py-24 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, threshold: 0.2 }}
        >
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
                    className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 3 }}
                />
            </div>

            <motion.div className="relative z-10 max-w-8xl mx-auto px-6 xl:px-12" variants={staggerContainer}

            >
                <div className="grid xl:grid-cols-2 gap-12 xl:gap-20 items-start">
                    <motion.div className="space-y-10" variants={fadeInUp}>
                        <motion.h2
                            className="text-4xl xl:text-5xl font-light text-gray-800 tracking-wide"
                            style={{ fontFamily: 'serif' }}
                            variants={fadeInUp}
                        >
                            Donate/Invest
                        </motion.h2>

                        <motion.div className="space-y-8 text-xl xl:text-2xl font-light tracking-wide leading-relaxed        text-gray-800" variants={staggerContainer}
                            
                        >
                            <motion.p variants={fadeInUp}>
                                If you are interested in reading one of our scripts, investing, or donating even just a small amount to cover production costs, please contact{" "}
                                <motion.em
                                    className="text-gray-800 font-light"
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
                                    className="text-gray-800 italic"
                                    whileHover={{ scale: 1.02 }}
                                    style={{ display: "inline-block" }}
                                >
                                    dreamsum
                                </motion.em>{" "}
                                this sounds.
                            </motion.p>

                            <motion.div className="pt-8 border-t border-gray-200" variants={fadeInUp}>
                                <motion.p className="font-light text-gray-800 text-xl xl:text-2xl" variants={fadeInUp}>
                                    S.J. Horan
                                </motion.p>
                                <motion.p className="text-gray-600 italic text-lg" variants={fadeInUp}>
                                    Writer, producer and filmmaker
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="relative"
                        variants={fadeInUp}
                    >
                        <motion.div
                            className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/30 p-10 xl:p-12"
                            whileHover={{ y: -3 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isSubmitted ? (
                                <motion.div
                                    className="text-center py-16"
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
                                    <p className="text-gray-600 text-lg">Your message has been sent successfully. We'll get back to you soon.</p>
                                    <motion.button
                                        onClick={() => setIsSubmitted(false)}
                                        className="mt-6 text-amber-700 hover:text-amber-800 font-medium text-lg"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Send another message
                                    </motion.button>
                                </motion.div>
                            ) : (
                                <div className="space-y-8">
                                    <motion.div variants={fadeInUp}>
                                        <label className="block text-sm font-medium text-gray-700 mb-3">
                                            Name <span className="text-red-500">*</span>
                                        </label>
                                        <div className="grid grid-cols-2 gap-6">
                                            <motion.div whileFocus={{ scale: 1.02 }}>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    placeholder="First Name"
                                                    className={`w-full px-5 py-4 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white/80 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
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
                                                    className={`w-full px-5 py-4 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white/80 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                                                />
                                                {errors.lastName && (
                                                    <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                                                )}
                                            </motion.div>
                                        </div>
                                    </motion.div>

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
                                                className={`w-full px-5 py-4 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white/80 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="your.email@example.com"
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                            )}
                                        </motion.div>
                                    </motion.div>

                                    <motion.div variants={fadeInUp}>
                                        <label className="block text-sm font-medium text-gray-700 mb-3">
                                            Message <span className="text-red-500">*</span>
                                        </label>
                                        <motion.div whileFocus={{ scale: 1.02 }}>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                rows={8}
                                                className={`w-full px-5 py-4 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white/80 resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="Tell us about your interest in investing, donating, or collaborating with Dreamsum Productions..."
                                            />
                                            {errors.message && (
                                                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                                            )}
                                        </motion.div>
                                    </motion.div>

                                    <motion.div variants={fadeInUp}>
                                        <motion.button
                                            onClick={handleSubmit}
                                            disabled={isSubmitting}
                                            className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-4 px-8 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                        >
                                            {isSubmitting ? (
                                                <div className="flex items-center justify-center">
                                                    <motion.div
                                                        className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-3"
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

                <motion.div
                    className="flex justify-center items-center mt-20"
                    variants={fadeInUp}
                >
                    <div className="w-24 h-px bg-amber-400"></div>
                    <div className="w-4 h-4 rounded-full bg-amber-400 mx-6"></div>
                    <div className="w-24 h-px bg-amber-400"></div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}