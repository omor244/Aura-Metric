"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { Target, Globe } from "lucide-react";
import Image from 'next/image';

const OurApproach = () => {
    return (
        <section className="bg-[#121212] py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

               
                <div className="relative flex items-center justify-center h-[600px]">
                 
                    <div className="absolute left-0 top-0 w-[55%] h-[90%] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                            width={200}
                            height={400}
                            src="https://i.ibb.co.com/DDDPpqXX/19886b871700ea60f7e38132e686b2159e3ecc92.png"
                            alt="Data Analysis"
                            className="w-full h-full object-cover opacity-80"
                        />
                       
                        <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
                    </div>

                   
                    <div className="absolute right-10 bottom-0 w-[55%] h-[75%] rounded-[32px] overflow-hidden border-4 border-[#121212] shadow-2xl z-10">
                        <Image
                            width={200}
                            height={400}
                            src="https://i.ibb.co.com/mr0NLD7v/aff0f07e07c00edfeafe1f73934a33dfec562895.png"
                            alt="Growth Strategy"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* --- RIGHT SIDE: CONTENT --- */}
                <div className="lg:pl-12">
                    <h2 className="text-5xl md:text-6xl font-[900] text-white mb-12">
                        Our <span className="text-[#FF9900]">Approach</span>
                    </h2>

                    <div className="space-y-0">
                        {/* Mission Section (Inactive style) */}
                        <div className="flex items-center gap-3 py-6 border-b border-white/10 opacity-60">
                            <Target className="text-[#FF9900] w-6 h-6" />
                            <h3 className="text-white text-2xl font-black">Mission</h3>
                        </div>

                        {/* Vision Section (Active style with Orange Border) */}
                        <div className="relative pl-8 py-8 border-l-2 border-[#FF9900] mt-4">
                            <div className="flex items-center gap-3 mb-4">
                                <Globe className="text-[#4A90E2] w-6 h-6" />
                                <h3 className="text-white text-2xl font-black">Vision</h3>
                            </div>
                            <p className="text-slate-400 text-lg leading-relaxed max-w-lg mb-8">
                                Founded to address the challenges of traditional Amazon
                                selling—complex data, manual processes, and limited scaling.
                                We started with a vision to make growth simple, accessible, and
                                data-driven for everyone. Today, we proudly serve 7+ million
                                users, helping them scale their businesses with ease.
                            </p>

                            <Button
                                className="h-14 px-8 rounded-full bg-[#FF9900] hover:bg-[#E68A00] text-white font-bold text-lg border-2 border-white/10 shadow-[0_10px_20px_rgba(255,153,0,0.2)] transition-all hover:-translate-y-1"
                            >
                                Book a Free Strategy Call
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OurApproach;