import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Menu, X, Gift } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const linkStyle = ({ isActive }) =>
        `block py-3 px-6 rounded-2xl transition-all duration-300 ${isActive
            ? "bg-pink-500/20 text-yellow-300 font-bold border border-pink-500/30"
            : "text-white/80 hover:bg-white/5"
        }`;

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] px-4 py-3">
            {/* Navbar Glass Container */}
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="max-w-md mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-[24px] shadow-2xl overflow-hidden"
            >
                <div className="flex items-center justify-between px-5 py-3">

                    {/* Brand Name */}
                    <div className="flex items-center gap-2">
                        <div className="bg-pink-500 p-1.5 rounded-lg shadow-inner">
                            <Heart size={16} fill="white" className="text-white" />
                        </div>
                        <span className="text-white font-bold tracking-tight text-sm uppercase">
                            Jaba Saida
                        </span>
                    </div>

                    {/* Right Side Items */}
                    <div className="flex items-center gap-2">
                        <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-[10px] uppercase tracking-tighter font-bold px-3 py-1.5 rounded-full text-white shadow-lg">
                            Wish Now
                        </button>

                        {/* Mobile Toggle Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-white/80 hover:text-white transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown with Animation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="bg-black/20"
                        >
                            <ul className="px-4 pb-6 pt-2 flex flex-col gap-2 font-poppins">
                                <motion.li whileTap={{ scale: 0.95 }}>
                                    <NavLink to="/" onClick={() => setIsOpen(false)} className={linkStyle}>
                                        ✉️ Wishes
                                    </NavLink>
                                </motion.li>
                                <motion.li whileTap={{ scale: 0.95 }}>
                                    <NavLink to="/memorise" onClick={() => setIsOpen(false)} className={linkStyle}>
                                        📸 Memories
                                    </NavLink>
                                </motion.li>
                                <motion.li whileTap={{ scale: 0.95 }}>
                                    <NavLink to="/wishes" onClick={() => setIsOpen(false)} className={linkStyle}>
                                        ✨ Wisdom & Wishes
                                    </NavLink>
                                </motion.li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </nav>
    );
};

export default Navbar;