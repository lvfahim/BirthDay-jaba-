import React from 'react';
import { motion } from 'framer-motion';

// আপনার ছবিগুলো আগের মতোই থাকবে
import Img1 from '../assets/Whaage 2026-01-09 at 19.58.21.jpeg';
import Img2 from '../assets/WhatsAp 2026-01-09 at 19.52.52.jpeg';
import Img3 from '../assets/WhatsApp Image 2026-01-09 at 19.52.50.jpeg';
import Img4 from '../assets/WhatsApp Image 2026-01-09 at 19.52.51.jpeg';
import Img5 from '../assets/WhatsApp Image 209 at 19.52.51.jpeg';
import Img6 from '../assets/WhatsApp Image 26-01-09 at 19.52.50.jpeg';

const Memorise = () => {
    const memoryData = [
        { id: 1, img: Img1, quote: "Memories always stay colorful in the corner of the heart." },
        { id: 2, img: Img2, quote: "Walking with a smile, that's what life is all about." },
        { id: 3, img: Img3, quote: "May your future days be as pure and beautiful as flowers." },
        { id: 4, img: Img4, quote: "May every single moment of your life be filled with joy." },
        { id: 5, img: Img5, quote: "Your personality is your true and most lasting beauty." },
        { id: 6, img: Img6, quote: "Happy Birthday, Jaba Saidah! Have a blast!" },
    ];

    return (
        <div className="min-h-screen bg-[#020617] pt-10 pb-20 px-4 font-poppins relative overflow-hidden">
            
            {/* Background Floating Hearts */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: "100vh", opacity: 0 }}
                        animate={{ y: "-10vh", opacity: [0, 1, 0] }}
                        transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, delay: Math.random() * 5 }}
                        className="absolute text-pink-500/20 text-2xl"
                        style={{ left: `${Math.random() * 100}%` }}
                    >
                        ❤️
                    </motion.div>
                ))}
            </div>

            {/* --- NEW HERO SECTION START --- */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-3xl mx-auto text-center mt-12 mb-20 relative z-10"
            >
                
                <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 mt-4 mb-6">
                    Beautiful Moments
                </h1>
                
                {/* সুন্দর প্যারাগ্রাফটি এখানে */}
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light italic px-4">
                    "Every person's life is a story, but yours is a masterpiece of grace and smiles. 
                    As we look through these captured fragments of time, we celebrate the wonderful 
                    soul you've become. These aren't just photos; they are the milestones of your 
                    beautiful journey that continues to inspire everyone around you."
                </p>

                {/* Scroll Indicator */}
                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="mt-10 flex flex-col items-center gap-2"
                >
                    <span className="text-gray-500 text-xs uppercase tracking-widest">Scroll to explore</span>
                    <div className="w-px h-12 bg-gradient-to-b from-pink-500 to-transparent"></div>
                </motion.div>
            </motion.div>
            {/* --- NEW HERO SECTION END --- */}

            {/* Memories Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
                {memoryData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="group bg-slate-900/50 backdrop-blur-xl rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl"
                    >
                        <div className="relative h-80 overflow-hidden">
                            <img 
                                src={item.img} 
                                alt="Memory" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                        </div>
                        
                        <div className="p-8 text-center bg-slate-900/40">
                            <p className="text-gray-200 text-md md:text-lg italic leading-relaxed">
                                "{item.quote}"
                            </p>
                            <div className="mt-6 flex justify-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-pink-500/50" />
                                <span className="w-8 h-1.5 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500" />
                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Short Story Section */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto mt-32 p-1 relative group z-10"
            >
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-yellow-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-slate-900 rounded-[2.5rem] p-10 md:p-14 text-center border border-white/5">
                    <h2 className="text-3xl font-bold text-white mb-6">A Little Story...</h2>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic">
                        "Once there was a princess whose smile could light up the entire world. 
                        Today is that princess's special day. Born on January 10th, 2007, 
                        little Jaba Saidah has become everyone's favorite. We pray that your 
                        journey through life is always wrapped in love and success."
                    </p>
                    <motion.div className="mt-10 flex flex-col items-center">
                         <div className="text-pink-400 font-script text-2xl mb-4">Forever Happy</div>
                         <div className="h-1 w-20 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
                    </motion.div>
                </div>
            </motion.div>

        </div>
    );
};

export default Memorise;