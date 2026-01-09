import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Cake, Heart, Sparkles, PartyPopper } from "lucide-react";
import confetti from "canvas-confetti";

// Confetti function for interactive bursts
const fireConfetti = () => {
    confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#FF69B4', '#FFD700', '#8A2BE2', '#00FFFF', '#FFFFFF']
    });
};

const Main = () => {
    // Auto-fire confetti on mount and every few seconds
    useEffect(() => {
        fireConfetti();
        const autoConfettiInterval = setInterval(fireConfetti, 5000);
        return () => clearInterval(autoConfettiInterval);
    }, []);

    // 3D Tilt Effect for the card
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // Variants for text animations
    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    const iconVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 10 } }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] relative overflow-hidden font-poppins text-white px-4">
            
            {/* --- NEW Floating Hearts Animation --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-pink-500/30"
                        initial={{ y: "110vh", x: `${Math.random() * 100}vw`, opacity: 0, scale: 0.5 }}
                        animate={{ 
                            y: "-10vh", 
                            opacity: [0, 0.7, 0], 
                            scale: [0.5, 1, 0.7],
                            rotate: [0, 45, -45, 0] 
                        }}
                        transition={{
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                    >
                        <Heart size={20 + Math.random() * 30} fill="currentColor" />
                    </motion.div>
                ))}
            </div>

            {/* Background glowing particles/orbs */}
            <div className="absolute inset-0 z-0 overflow-hidden opacity-50">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-64 h-64 rounded-full blur-[100px] ${i % 2 === 0 ? 'bg-pink-500/20' : 'bg-purple-500/20'}`}
                        animate={{ 
                            x: [Math.random() * 100, Math.random() * 300, Math.random() * 100],
                            y: [Math.random() * 100, Math.random() * 400, Math.random() * 100],
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                ))}
            </div>

            {/* Main Card with 3D Tilt */}
            <motion.div
                ref={cardRef}
                className="relative z-10 w-full max-w-sm bg-white/5 backdrop-blur-3xl rounded-[40px] border border-white/10 p-8 shadow-2xl-custom text-center cursor-grab active:cursor-grabbing transform-gpu"
                style={{ rotateX, rotateY }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                {/* Floating Party Popper Icon */}
                <motion.div 
                    className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gradient-to-tr from-pink-500 to-yellow-400 p-4 rounded-full shadow-xl shadow-pink-500/30"
                    animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                    <PartyPopper className="text-white w-8 h-8 md:w-10 md:h-10" />
                </motion.div>

                {/* Main Heading */}
                <motion.h2 
                    className="text-pink-400 text-xs font-semibold tracking-widest uppercase mb-2 mt-4"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    A Day to Remember
                </motion.h2>
                <motion.h1 
                    className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 leading-tight mb-2"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ ...textVariants.visible.transition, delay: 0.4 }}
                >
                    Happy Birthday!
                </motion.h1>

                {/* Name */}
                <motion.h3 
                    className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-4"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ ...textVariants.visible.transition, delay: 0.6 }}
                >
                    Jaba Saida <span className="text-yellow-300">💖</span>
                </motion.h3>
                
                {/* Date */}
                <motion.p 
                    className="text-white/70 font-mono text-sm mb-6"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ ...textVariants.visible.transition, delay: 0.8 }}
                >
                    10 • 01 • 2007
                </motion.p>

                {/* Sparkle Trail Effect */}
                <div className="relative mb-8">
                    <motion.div 
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ width: 0 }}
                        animate={{ width: "80%" }}
                        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                    >
                        <div className="h-1 w-full bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent rounded-full opacity-70" />
                    </motion.div>
                    <div className="relative z-10 flex justify-center gap-4">
                        <motion.div variants={iconVariants} initial="hidden" animate="visible" transition={{ delay: 1.2 }}><Cake className="text-yellow-300 w-8 h-8" /></motion.div>
                        <motion.div variants={iconVariants} initial="hidden" animate="visible" transition={{ delay: 1.4 }}><Sparkles className="text-pink-300 w-8 h-8" /></motion.div>
                        <motion.div variants={iconVariants} initial="hidden" animate="visible" transition={{ delay: 1.6 }}><Heart className="text-red-400 w-8 h-8" /></motion.div>
                    </div>
                </div>


                {/* Personalized Message */}
                <motion.p
                    className="text-gray-300 text-[15px] leading-relaxed mb-8 italic px-2"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ ...textVariants.visible.transition, delay: 1.5 }}
                >
                    "May your special day sparkle with joy and your year be filled with dreams come true. Wishing you endless happiness, Jaba Saida!"
                </motion.p>

                {/* Celebrate Button */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={fireConfetti}
                    className="group w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-pink-500/40 active:brightness-110 transition-all uppercase tracking-widest relative overflow-hidden"
                >
                    <span className="relative z-10">Make a Wish! 🎉</span>
                </motion.button>
            </motion.div>

            {/* Credit */}
            <p className="absolute bottom-4 text-white/30 text-[10px] tracking-widest uppercase">
                Designed with ✨ Love & Code
            </p>

            <style jsx>{`
                .shadow-2xl-custom {
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5),
                                0 0 40px rgba(255, 255, 255, 0.03) inset;
                }
            `}</style>
        </div>
    );
};

export default Main;