import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronRight, ChevronLeft, Sparkles, Heart, Star, Sun } from 'lucide-react';

const Wish = () => {
    const quotes = [
        { id: 1, author: "Steve Jobs", text: "তোমার সময় সীমিত, তাই অন্য কারো জীবন যাপন করে এটি নষ্ট করো না। নিজের মনের কথা শোনার সাহস রাখো।", color: "from-pink-500 to-rose-600" },
        { id: 2, author: "Nelson Mandela", text: "শিক্ষা হলো পৃথিবীর সবচেয়ে শক্তিশালী অস্ত্র, যা তুমি ব্যবহার করতে পারো পৃথিবী পরিবর্তন করার জন্য।", color: "from-blue-600 to-indigo-700" },
        { id: 3, author: "Albert Einstein", text: "জীবন হলো সাইকেল চালানোর মতো। ভারসাম্য বজায় রাখতে হলে তোমাকে সবসময় সামনের দিকে চলতে হবে।", color: "from-amber-500 to-orange-600" },
        { id: 4, author: "Rumi", text: "গতকাল আমি চতুর ছিলাম, তাই পৃথিবী বদলাতে চেয়েছিলাম। আজ আমি জ্ঞানী, তাই নিজেকে বদলাচ্ছি।", color: "from-emerald-500 to-teal-600" },
        { id: 5, author: "Humayun Ahmed", text: "মানুষের কষ্ট দেখাও কষ্টের কাজ। আবার মানুষের আনন্দ দেখাও আনন্দের কাজ। সবসময় মানুষের আনন্দ দেখার চেষ্টা করো।", color: "from-purple-500 to-violet-600" },
        { id: 6, author: "APJ Abdul Kalam", text: "স্বপ্ন সেটা নয় যেটা মানুষ ঘুমিয়ে দেখে, স্বপ্ন সেটাই যেটা মানুষকে ঘুমাতে দেয় না।", color: "from-cyan-500 to-blue-600" },
        { id: 7, author: "Rabindranath Tagore", text: "মেঘেরা আমার জীবনে ভেসে আসে, এখন আর বৃষ্টি বা ঝড় আনতে নয়, বরং আমার সূর্যাস্তের আকাশে রঙ ছড়াতে।", color: "from-orange-400 to-red-500" },
        { id: 8, author: "Bill Gates", text: "যদি তুমি গরীব হয়ে জন্মাও তবে সেটা তোমার দোষ নয়, কিন্তু যদি তুমি গরীব হয়ে মারা যাও তবে সেটা তোমার দোষ।", color: "from-slate-400 to-slate-600" },
        { id: 9, author: "Paulo Coelho", text: "যখন তুমি মন থেকে কিছু চাইবে, তখন পুরো মহাবিশ্ব তোমাকে তা পাইয়ে দিতে ষড়যন্ত্র করবে।", color: "from-yellow-500 to-orange-400" },
        { id: 10, author: "Confucius", text: "তুমি কত ধীরে চলছো সেটা বিষয় নয়, আসল বিষয় হলো তুমি থেমে আছো কি না।", color: "from-red-600 to-rose-800" }
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 8000);
        return () => clearInterval(timer);
    }, [index]);

    const nextSlide = () => setIndex((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setIndex((prev) => (prev === 0 ? quotes.length - 1 : prev - 1));

    return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4 py-20 relative overflow-hidden">
            
            {/* ১. ব্যাকগ্রাউন্ডে ভাসমান আইকন (Floating Animation) */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -100, 0],
                            x: [0, Math.random() * 50, 0],
                            rotate: [0, 360],
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute text-white"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`
                        }}
                    >
                        {i % 2 === 0 ? <Star size={24} /> : <Sun size={24} />}
                    </motion.div>
                ))}
            </div>

            <div className="max-w-4xl w-full relative z-10">
                {/* ২. হেডার সেকশন উইথ এনিমেশন */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 5 }}
                        className="inline-block mb-4"
                    >
                        <Sparkles className="text-yellow-400 w-10 h-10" />
                    </motion.div>
                    <h2 className="text-pink-500 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-3">
                        The Treasure of Thoughts
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                        জ্ঞানের <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">আলো</span>
                    </h1>
                </motion.div>

                {/* ৩. মেইন কার্ড স্লাইডার */}
                <div className="relative h-[450px] md:h-[400px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20, rotateX: -20 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            exit={{ opacity: 0, y: -20, rotateX: 20 }}
                            transition={{ duration: 0.7 }}
                            className="absolute inset-0"
                        >
                            <div className="h-full w-full bg-slate-900/40 backdrop-blur-3xl border border-white/10 rounded-[3.5rem] p-8 md:p-16 flex flex-col justify-center items-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                                
                                {/* কার্ডের ভেতর ডাইনামিক গ্লো */}
                                <div className={`absolute -inset-24 bg-gradient-to-r ${quotes[index].color} opacity-10 blur-[80px] group-hover:opacity-20 transition-opacity duration-1000`} />
                                
                                <Quote className="absolute top-10 left-10 text-white/5 w-24 h-24" />
                                
                                {/* উক্তি টেক্সট */}
                                <motion.p 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 1 }}
                                    className="text-xl md:text-3xl text-gray-100 font-medium leading-relaxed mb-10 z-10"
                                >
                                    "{quotes[index].text}"
                                </motion.p>

                                {/* লেখক সেকশন */}
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="relative z-10"
                                >
                                    <div className={`h-1 w-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${quotes[index].color}`} />
                                    <span className="text-2xl font-bold text-white tracking-wider block uppercase">
                                        {quotes[index].author}
                                    </span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* ৪. কন্ট্রোল বাটন ও প্রগ্রেস বার */}
                <div className="mt-12 flex flex-col items-center gap-10">
                    <div className="flex gap-8">
                        <motion.button 
                            whileHover={{ scale: 1.1, x: -5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevSlide}
                            className="p-5 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/10 transition-all shadow-xl"
                        >
                            <ChevronLeft size={28} />
                        </motion.button>
                        
                        <motion.button 
                            whileHover={{ scale: 1.1, x: 5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextSlide}
                            className="p-5 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl text-white shadow-lg shadow-pink-500/20 transition-all"
                        >
                            <ChevronRight size={28} />
                        </motion.button>
                    </div>

                    {/* প্রগ্রেস ইন্ডিকেটর */}
                    <div className="flex gap-3">
                        {quotes.map((_, i) => (
                            <motion.div 
                                key={i}
                                animate={{ 
                                    width: i === index ? 32 : 8,
                                    backgroundColor: i === index ? "#ec4899" : "rgba(255,255,255,0.2)"
                                }}
                                className="h-1.5 rounded-full"
                            />
                        ))}
                    </div>
                </div>

                {/* ৫. বটম সিগনেচার */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 text-center"
                >
                    <p className="text-gray-500 text-[10px] tracking-[0.5em] uppercase flex items-center justify-center gap-3">
                        <span className="h-px w-8 bg-white/10" />
                        Explore & Evolve
                        <Heart size={12} className="text-pink-500 fill-pink-500 animate-pulse" />
                        <span className="h-px w-8 bg-white/10" />
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Wish;