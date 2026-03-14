"use client";

import { Button } from "@/components/ui/button";
import { ShieldCheck, Zap, BarChart3, Users2 } from "lucide-react";
import { motion } from "framer-motion";
import { values } from "@/data/data";

const AboutPage = () => {
   

    return (
        <main className="min-h-screen bg-white font-sans selection:bg-orange-100">

            {/* --- HERO SECTION --- */}
            <section className="relative py-24 px-6 overflow-hidden bg-slate-50">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                            <span className="text-[#FF9900] font-black italic">a</span>
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">About AuraMetric</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-[900] text-slate-900 leading-[1.1] tracking-tighter">
                            We Bridge the Gap Between <span className="text-[#FF9900]">Data & Growth.</span>
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                            AuraMetric started with a simple goal: to demystify the Amazon marketplace.
                            We combine human strategy with machine precision to turn complex
                            market signals into profitable actions.
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-orange-100 to-white rounded-[40px] border border-orange-200/50 shadow-inner flex items-center justify-center p-12">
                            {/* Replace with a high-quality team photo or a professional abstract image */}
                            <Users2 size={180} className="text-orange-200 stroke-[1]" />
                        </div>
                        {/* Decorative floaters */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                            <p className="text-3xl font-black text-slate-900 leading-none">9+ Years</p>
                            <p className="text-sm font-bold text-slate-500 mt-1 uppercase">Market Experience</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- OUR MISSION SECTION --- */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4">Our Mission</h2>
                        <div className="h-1.5 w-20 bg-[#FF9900] rounded-full" />
                    </div>
                    <div className="lg:col-span-2">
                        <p className="text-2xl md:text-3xl font-medium text-slate-700 leading-snug italic">
                            To empower Amazon entrepreneurs with the tools and insights they need
                            to dominate their niche, ensuring that every click translates into
                            value and every brand achieves its maximum potential.
                        </p>
                    </div>
                </div>
            </section>

           
            <section className="py-24 px-6 bg-[#121212] rounded-[60px] mx-4 mb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-[900] text-white mb-4">The Values We Live By</h2>
                        <p className="text-slate-400 font-medium">Why the world's top sellers trust AuraMetric.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((v, i) => (
                            <div key={i} className="p-10 rounded-[32px] bg-white/5 border border-white/10 hover:border-[#FF9900]/50 transition-colors group">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {v.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                                <p className="text-slate-400 leading-relaxed font-medium">
                                    {v.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CLOSING CTA --- */}
            <section className="pb-24 px-6 text-center">
                <h2 className="text-4xl font-black text-slate-900 mb-8">Ready to Write Your Success Story?</h2>
                <Button
                    className="h-16 px-12 rounded-full bg-[#FFB800] hover:bg-[#FFA500] text-black font-black text-xl border-b border-b-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 active:translate-y-0.5 active:shadow-none"
                >
                    Let's Work Together
                </Button>
            </section>

        </main>
    );
};

export default AboutPage;