import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Gift, Music } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative mt-24 pb-16 px-4 overflow-hidden"
    >
      {/* ১. Background Glows: নীল এবং গোলাপী আভা */}
      <div className="absolute top-0 left-1/4 w-[250px] h-[250px] bg-indigo-600/20 blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-pink-600/20 blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* ২. Main Card: ডার্ক গ্লাস ইফেক্ট সাথে কালারফুল বর্ডার */}
        <div className="relative group bg-slate-950/60 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 text-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          
          {/* Decorative Corner Icons with Colors */}
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -top-6 -right-6 text-yellow-400/20"
          >
            <Sparkles size={80} />
          </motion.div>

          {/* ৩. Celebration Message with Colorful Badge */}
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            className="mb-8 flex justify-center items-center gap-4"
          >
            <Gift className="text-pink-500 animate-bounce" size={20} />
            <span className="px-4 py-1 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 text-pink-300 tracking-[0.2em] uppercase text-[10px] font-bold">
              19 Beautiful Years
            </span>
            <Music className="text-purple-400 animate-bounce delay-150" size={20} />
          </motion.div>

          {/* ৪. Title with Vibrant Gradient */}
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-300 to-yellow-400">
              Happy Birthday, <br className="md:hidden" /> Jaba Saida!
            </span>
          </h2>

          <p className="text-gray-400 text-sm md:text-lg max-w-lg mx-auto leading-relaxed mb-10 italic">
            "May your life be as bright as the stars and as sweet as the songs of birds. Shine on, today and forever!"
          </p>

          {/* ৫. Interactive Heart Signature with Glowing Pulse */}
          <div className="flex flex-col items-center justify-center gap-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              {/* Heart Shadow Glow */}
              <div className="absolute inset-0 bg-pink-500 blur-2xl opacity-40 animate-pulse" />
              
              <div className="relative z-10 p-4 bg-white/5 rounded-full border border-white/10">
                 <Heart className="text-pink-500 fill-pink-500 w-10 h-10" />
              </div>

              <motion.div 
                animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 border-2 border-pink-500 rounded-full"
              />
            </motion.div>
            
            <div className="space-y-2">
              <p className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 font-semibold text-xl tracking-wide">
                Always Be Happy
              </p>
              <p className="text-pink-500/80 text-[10px] tracking-[0.4em] font-bold uppercase">
                10 JANUARY 2007
              </p>
            </div>
          </div>
        </div>

        {/* ৬. Final Footer Credits */}
        <div className="mt-12 text-center">
            <p className="mt-4 text-white/10 text-[8px] tracking-[0.2em] uppercase">
              © 2026 Celebration Portfolio • All Rights Reserved
            </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;