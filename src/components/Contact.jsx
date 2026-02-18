import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        try {
            await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(data).toString(),
            });
            setSubmitted(true);
        } catch (error) {
            console.error('Form submission error:', error);
        }
    };

    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-navy-900 to-black relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6">Let's Build <br /><span className="text-cyan-400">Something Great</span></h2>
                        <p className="text-gray-400 mb-10 max-w-md">
                            Ready to transform your business? Contact our team of experts to discuss your next project.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:info@amms.llc" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-lg bg-navy-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email Us</p>
                                    <p className="font-semibold group-hover:text-cyan-400 transition-colors">info@amms.llc</p>
                                </div>
                            </a>

                            <a href="tel:+17542505367" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-lg bg-navy-800 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Call Us</p>
                                    <p className="font-semibold group-hover:text-orange-500 transition-colors">+1 754 250 5367</p>
                                </div>
                            </a>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-navy-800 flex items-center justify-center text-purple-500 shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Visit Us</p>
                                    <p className="font-semibold leading-relaxed">
                                        1603 Capitol Avenue Suite 413-3914<br />
                                        Cheyenne, WY, Laramie 82001<br />
                                        United States
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-2xl border-t border-cyan-500/20 w-full"
                    >
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center py-16 text-center">
                                <CheckCircle size={64} className="text-cyan-400 mb-4" />
                                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                <p className="text-gray-400">We'll get back to you at the earliest opportunity.</p>
                            </div>
                        ) : (
                            /* Netlify Forms: data-netlify="true" enables form capture */
                            <form
                                name="contact"
                                method="POST"
                                data-netlify="true"
                                netlify-honeypot="bot-field"
                                onSubmit={handleSubmit}
                            >
                                {/* Required hidden fields for Netlify */}
                                <input type="hidden" name="form-name" value="contact" />
                                <p className="hidden">
                                    <label>Don't fill this out: <input name="bot-field" /></label>
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            required
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full bg-navy-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-white"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            required
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full bg-navy-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-white"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-navy-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-white"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="mb-8">
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                    <textarea
                                        rows="4"
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-navy-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-white"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-bold text-white shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-shadow flex items-center justify-center gap-2"
                                >
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
