"use client";
import { motion } from "framer-motion";

const LoadingPage = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center">
            <div className="relative flex flex-col items-center">

            
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    className="mb-8"
                >
                    <div className="bg-[#121212] rounded-xl p-4 shadow-2xl shadow-orange-200/50">
                        <div className="bg-[#FF9900] rounded-lg px-3 py-1 flex items-center justify-center">
                            <span className="text-white font-black italic text-2xl leading-none">a</span>
                        </div>
                    </div>
                </motion.div>

              
                <div className="text-center space-y-2">
                    <h2 className="text-xl font-black text-slate-900 tracking-tighter uppercase">
                        Aura<span className="text-[#FF9900]">Metric</span>
                    </h2>
                    <div className="flex items-center justify-center gap-1">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] animate-pulse">
                            Synchronizing Data
                        </span>
                    </div>
                </div>

             
                <div className="mt-10 w-48 h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-50">
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            ease: "easeInOut",
                        }}
                        className="w-full h-full bg-gradient-to-r from-transparent via-[#FF9900] to-transparent"
                    />
                </div>

           
                <div className="absolute -z-10 blur-[120px] opacity-20">
                    <div className="w-64 h-64 bg-[#FF9900] rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default LoadingPage;