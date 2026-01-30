import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Clock, Eye } from 'lucide-react';

// Import blog images
import blog1Image from '../assets/Blog1.jpeg';
import blog2Image from '../assets/Blog2.jpeg';
import blog3Image from '../assets/Blog3.jpg';

const blogPosts = [
    {
        id: 1,
        title: "Understanding Weighbridge Accuracy",
        excerpt: "Learn about the importance of precise weight measurements in logistics and how our digital weighbridge ensures 100% accuracy for every vehicle.",
        image: blog1Image,
        date: "Jan 25, 2026",
        readTime: "5 min read",
        views: "1.2K",
        category: "Technology"
    },
    {
        id: 2,
        title: "Why 24/7 Service Matters for Transporters",
        excerpt: "Discover how round-the-clock weighbridge services help truck drivers and fleet owners save time and boost productivity.",
        image: blog2Image,
        date: "Jan 20, 2026",
        readTime: "4 min read",
        views: "980",
        category: "Industry"
    },
    {
        id: 3,
        title: "Digital vs Traditional Weighbridges",
        excerpt: "A comprehensive comparison between modern digital weighbridges and traditional mechanical systems. See why digital is the future.",
        image: blog3Image,
        date: "Jan 15, 2026",
        readTime: "6 min read",
        views: "2.1K",
        category: "Insights"
    }
];

const BlogCard = ({ post, index }) => (
    <motion.article
        className="group bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-industrial-blue/50 transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -8 }}
    >
        {/* Image Container */}
        <div className="relative h-52 overflow-hidden">
            <motion.img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-industrial-blue text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    {post.category}
                </span>
            </div>

            {/* Views Badge */}
            <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full">
                <Eye size={12} className="text-slate-300" />
                <span className="text-xs text-slate-300">{post.views}</span>
            </div>
        </div>

        {/* Content */}
        <div className="p-6">
            {/* Meta Info */}
            <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                </span>
                <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-industrial-blue transition-colors line-clamp-2">
                {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
            </p>

            {/* Read More Link */}
            <motion.button
                className="flex items-center gap-2 text-industrial-blue text-sm font-semibold group/btn"
                whileHover={{ x: 5 }}
            >
                Read More
                <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
            </motion.button>
        </div>
    </motion.article>
);

const Blog = () => {
    return (
        <section id="blog" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-industrial-blue/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-[80px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.span
                        className="inline-flex items-center gap-2 px-4 py-2 bg-industrial-blue/10 border border-industrial-blue/30 rounded-full text-industrial-blue text-xs font-bold uppercase tracking-widest mb-4"
                        whileHover={{ scale: 1.05 }}
                    >
                        📰 Our Blog
                    </motion.span>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4">
                        Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-blue to-cyan-400">Insights</span>
                    </h2>

                    <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
                        Stay updated with the latest news, tips, and insights from the weighbridge and logistics industry.
                    </p>
                </motion.div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <BlogCard key={post.id} post={post} index={index} />
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <motion.button
                        className="px-8 py-4 bg-transparent border-2 border-industrial-blue/50 text-industrial-blue rounded-xl font-semibold flex items-center gap-2 mx-auto hover:bg-industrial-blue/10 transition-colors"
                        whileHover={{ scale: 1.03, borderColor: 'rgba(0,174,239,0.8)' }}
                        whileTap={{ scale: 0.97 }}
                    >
                        View All Articles
                        <ArrowRight size={18} />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;
