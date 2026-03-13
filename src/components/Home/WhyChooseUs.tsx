"use client";

import { Button } from "@/components/ui/button";
import { Atom, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { features } from "@/data/data";
import Image from "next/image";


const WhyChooseUs = () => {


    return (
        <section className="bg-[#121212] text-white py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div className="space-y-8">
                    <div className="flex items-center gap-3">
                        <div className=" p-1.5  flex items-center justify-center">
                            <Image width={50} height={30} className="w-16  rounded-sm" src="https://i.ibb.co.com/hFHDwcQ1/972350f07e82538f1c2e43ca40445b8c63427d68.png" alt="" />
                        </div>
                        <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">
                            Why <span className="text-[#FF9900]">Choose Us</span>
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-[900] leading-tight tracking-tight">
                        Why Choose <span className="text-[#FF9900]">AuraMetric?</span>
                    </h2>

                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl">
                        Amazon is tough—we make it easy. At <span className="text-white font-bold">AuraMetric</span>,
                        we help sellers rank higher, scale faster, & sell smarter. We analyze trends,
                        optimize ads, manage inventory, & protect your account so you can focus on your business.
                        🚀 No more guesswork. No more wasted money. Just real results.
                    </p>

                    <Button className="h-14 px-8 rounded-full bg-[#FF9900] hover:bg-[#E68A00] text-white font-bold text-lg border-2 border-white/20 shadow-xl transition-all hover:scale-105 active:scale-95">
                        Book a Free Consultation
                    </Button>
                </div>

                {/* Right Visual Element */}
                <div className="relative flex justify-center items-center">
                    {/* Decorative Arc/Circle */}
                    <div className="absolute right-0 h-[500px] w-[500px] border-[40px] border-white/5 rounded-full -mr-48" />

                    {/* Atom Icon with Outer Ring */}
                    <div className="relative z-10 h-80 w-80 bg-[#1A1A1A] rounded-full border-2 border-[#FF9900]/30 flex items-center justify-center shadow-[0_0_50px_rgba(255,153,0,0.1)]">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <Atom size={120} className="text-[#FF9900] stroke-[1.5]" />
                        </motion.div>
                    </div>

                    {/* Floating Feature Cards */}
                    <div className="absolute right-0 space-y-4 z-20 translate-x-12">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-[#1E1E1E] border border-white/10 p-4 rounded-2xl flex items-center gap-4 w-72 shadow-2xl backdrop-blur-sm"
                            >
                                <div className="h-10 w-10 bg-gradient-to-br from-[#2A2A2A] to-[#121212] rounded-xl flex items-center justify-center border border-white/5">
                                    <Rocket size={18} className="text-[#FF9900]" />
                                </div>
                                <span className="font-bold text-slate-200">{feature}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;