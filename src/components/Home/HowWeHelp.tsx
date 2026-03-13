

import React from 'react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { strategies } from '@/data/data';

const HowWeHelp = () => {
  

    return (
        <section className="bg-[#121212] py-24 px-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center">

                {/* --- BRAND BADGE --- */}
                <div className="flex items-center gap-2 mb-8 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
                    <div className=" px-1.5 py-0.5 flex items-center justify-center">
                        <Image width={50} height={40} className="w-16 rounded-lg" src="https://i.ibb.co.com/hFHDwcQ1/972350f07e82538f1c2e43ca40445b8c63427d68.png" alt="" />
                    </div>
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                        Growth <span className="text-[#FF9900]">Business</span>
                    </span>
                </div>

                {/* --- MAIN TITLES --- */}
                <h2 className="text-4xl md:text-6xl font-[900] text-white text-center leading-tight mb-4">
                    How We Help You <br />
                    Win on <span className="text-[#FF9900]">Amazon</span>
                </h2>

                <p className="text-slate-400 text-center text-lg font-medium mb-16 max-w-2xl">
                    At AuraMetric, we don&apos;t guess—we use data-driven strategies to scale your business.
                </p>

                {/* --- STRATEGY GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-16">
                    {strategies.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#1E1E1E] border border-white/5 p-8 rounded-2xl hover:border-[#FF9900]/30 transition-all duration-300 group"
                        >
                            <h3 className="text-[#FF9900] font-bold text-lg mb-4">
                                {item.title}
                            </h3>

                            {/* Subtle accent line from screenshot */}
                            <div className="w-px h-10 bg-orange-500/20 mb-4 ml-1" />

                            <p className="text-slate-300 font-medium leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* --- ACTION BUTTON --- */}
                <Button
                    className="h-14 px-10 rounded-full bg-[#FFB800] hover:bg-[#FFA500] text-black font-black text-lg border-2 border-white shadow-xl transition-transform hover:scale-105 active:scale-95"
                >
                    Talk to an Expert
                </Button>
            </div>
        </section>
    );
};

export default HowWeHelp;