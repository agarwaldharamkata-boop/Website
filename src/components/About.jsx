import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Award, Users, Clock, X, ZoomIn } from 'lucide-react';
import demoSlipImage from '../assets/DemoSlip_img.jpg';

const features = [
    { text: "Government Approved & Certified", icon: Award },
    { text: "High Precision Digital Sensors", icon: CheckCircle },
    { text: "Located in MIDC Industrial Hub", icon: Users },
    { text: "Trusted by 500+ Transporters", icon: Clock }
];

const stats = [
    { value: "24", suffix: "/7", label: "Open Hours" },
    { value: "500", suffix: "+", label: "Happy Clients" },
    { value: "100", suffix: "%", label: "Accuracy" },
    { value: "10", suffix: "+", label: "Years Experience" }
];

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-industrial-blue/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-industrial-blue/10 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Stats Row */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 backdrop-blur-sm"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, borderColor: 'rgba(0,174,239,0.5)' }}
                        >
                            <div className="text-4xl md:text-5xl font-bold text-industrial-blue">
                                {stat.value}<span className="text-cyan-400">{stat.suffix}</span>
                            </div>
                            <div className="text-slate-400 text-sm mt-2">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image */}
                    <motion.div
                        className="lg:w-2/5"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div
                            className="relative group max-w-sm mx-auto cursor-pointer"
                            onClick={() => setIsModalOpen(true)}
                        >
                            {/* Glowing Border Animation */}
                            <motion.div
                                className="absolute -inset-1 bg-gradient-to-r from-industrial-blue via-cyan-400 to-industrial-blue rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500"
                                animate={{
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                style={{ backgroundSize: '200% 200%' }}
                            />

                            <motion.img
                                src={demoSlipImage}
                                alt="Demo Weighbridge Slip"
                                className="relative rounded-2xl shadow-2xl z-10 ring-2 ring-industrial-blue/50 w-full h-auto object-contain"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Zoom Icon Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                <div className="bg-industrial-blue/80 p-4 rounded-full">
                                    <ZoomIn size={32} className="text-white" />
                                </div>
                            </div>

                            {/* Label */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-industrial-blue text-white px-4 py-2 rounded-full text-sm font-semibold z-20 shadow-lg flex items-center gap-2">
                                <ZoomIn size={14} />
                                Click to View
                            </div>

                            {/* Decorative Glow elements */}
                            <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-industrial-blue/30 rounded-full blur-3xl z-0 animate-pulse" />
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl z-0" />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-industrial-blue font-bold text-sm uppercase tracking-widest">About Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
                            Why Choose <span className="text-industrial-blue">Agarwal Dharamkata?</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            Located at <span className="font-semibold text-white">Plot No. P-6, M.I.D.C. Amravati 444605</span>,
                            we have established ourselves as the benchmark for accuracy and trust in the region.
                            We understand that in the transport business, every kilogram counts.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            Our core values are built on <span className="font-bold text-industrial-blue">"Bharosa" (Trust)</span>, Speed, and Precision.
                            We ensure your vehicle is weighed quickly and accurately so you can get back on the road without delay.
                        </p>

                        <ul className="space-y-4">
                            {features.map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-center gap-4 p-3 rounded-lg bg-slate-800/30 border border-slate-700/30"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 5, borderColor: 'rgba(0,174,239,0.3)' }}
                                >
                                    <div className="w-10 h-10 rounded-lg bg-industrial-blue/20 flex items-center justify-center">
                                        <item.icon className="text-industrial-blue" size={20} />
                                    </div>
                                    <span className="text-slate-300 font-medium">{item.text}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>

            {/* Modal/Lightbox for Full-Size Image */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                    >
                        {/* Close Button */}
                        <motion.button
                            className="absolute top-6 right-6 bg-slate-800 hover:bg-industrial-blue text-white p-3 rounded-full shadow-lg z-50 transition-colors"
                            onClick={() => setIsModalOpen(false)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <X size={24} />
                        </motion.button>

                        {/* Modal Content */}
                        <motion.div
                            className="relative max-w-2xl max-h-[90vh] overflow-hidden"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Glowing Border */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-industrial-blue via-cyan-400 to-industrial-blue rounded-3xl opacity-75 blur-xl" />

                            <img
                                src={demoSlipImage}
                                alt="Demo Weighbridge Slip - Full Size"
                                className="relative rounded-2xl shadow-2xl ring-4 ring-industrial-blue/50 max-h-[85vh] w-auto object-contain"
                            />

                            {/* Label */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-industrial-blue text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                                Sample Weighbridge Parchi
                            </div>
                        </motion.div>

                        {/* Instructions */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 text-sm">
                            Click anywhere or press X to close
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default About;
