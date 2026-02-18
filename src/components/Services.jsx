import React from 'react';
import { motion } from 'framer-motion';
import { Code, Truck, BarChart2, BrainCircuit } from 'lucide-react';

const services = [
    {
        icon: <Code size={40} className="text-cyan-400" />,
        title: 'Software Development',
        description: 'Custom web and mobile applications tailored to scale with your business logic.'
    },
    {
        icon: <Truck size={40} className="text-orange-500" />,
        title: 'Specialized Logistics',
        description: 'Advanced logistical solutions operating across multiple countries for seamless supply chains.'
    },
    {
        icon: <BarChart2 size={40} className="text-cyan-400" />,
        title: 'Data Analytics',
        description: 'Transforming raw data into actionable insights with cutting-edge analytical tools.'
    },
    {
        icon: <BrainCircuit size={40} className="text-orange-500" />,
        title: 'AI Experts',
        description: 'Implementing Artificial Intelligence models to automate processes and drive innovation.'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-navy-900 relative">
            <div className="container mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Our <span className="text-cyan-400">Services</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        From global logistics to AI-driven insights, we power the future of business.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-card p-8 rounded-xl hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] transition-all duration-300 group"
                        >
                            <div className="mb-6 p-4 bg-navy-700/50 rounded-full w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
