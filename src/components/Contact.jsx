import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
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

                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-lg bg-navy-800 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors shrink-0">
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
                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-2xl border-t border-cyan-500/20 w-full"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                                <input type="text" className="w-full bg-navy-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-white" placeholder="John" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                                <input type="text" className="w-full bg-navy-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-white" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                            <input type="email" className="w-full bg-navy-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-white" placeholder="john@example.com" />
                        </div>

                        <div className="mb-8">
                            <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea rows="4" className="w-full bg-navy-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-white" placeholder="Tell us about your project..."></textarea>
                        </div>

                        <button className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-bold text-white shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-shadow flex items-center justify-center gap-2">
                            Send Message <Send size={18} />
                        </button>
                    </motion.form>

                </div>
            </div>
        </section>
    );
};

export default Contact;
