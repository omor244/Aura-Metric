"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
    return (
        <main className="min-h-screen bg-white py-20 px-6 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* --- HEADER --- */}
                <div className="text-center mb-20 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-slate-50 px-4 py-1.5 rounded-full border border-slate-100">
                        <div className="bg-[#FF9900] rounded-sm px-1.5 py-0.5 flex items-center justify-center">
                            <span className="text-white font-black italic text-xs leading-none">a</span>
                        </div>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Connect with us</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-[900] text-slate-900 tracking-tighter">
                        Let's Scale Your <span className="text-[#FF9900]">Amazon Brand.</span>
                    </h1>
                    <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                        Ready to stop guessing and start growing? Reach out today for a free
                        strategy consultation with our expert team.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-16 items-start">

                    {/* --- LEFT: CONTACT INFO --- */}
                    <div className="lg:col-span-2 space-y-12">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-black text-slate-900">Contact Information</h2>

                            <div className="space-y-6">
                                {[
                                    { icon: <Mail className="text-[#FF9900]" />, label: "Email Us", value: "hello@aurametric.com" },
                                    { icon: <Phone className="text-[#FF9900]" />, label: "Call Us", value: "+880 1794-313039" },
                                    { icon: <MapPin className="text-[#FF9900]" />, label: "Visit Us", value: "Silicon Valley, CA" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300">
                                        <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.label}</p>
                                            <p className="text-slate-900 font-bold text-lg">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social Trust Badge */}
                        <div className="p-8 rounded-[32px] bg-[#121212] text-white space-y-4">
                            <MessageSquare className="text-[#FF9900] w-8 h-8" />
                            <h3 className="text-xl font-black">Fast Support</h3>
                            <p className="text-slate-400 font-medium">
                                Our average response time for strategy inquiries is under 12 hours.
                                Get the answers you need, when you need them.
                            </p>
                        </div>
                    </div>

                    {/* --- RIGHT: CONTACT FORM --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="lg:col-span-3 bg-white border border-slate-100 p-8 md:p-12 rounded-[40px] shadow-2xl shadow-slate-200/50"
                    >
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-[#FF9900] focus:ring-0 transition-all font-medium text-slate-900"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-[#FF9900] focus:ring-0 transition-all font-medium text-slate-900"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Amazon Store URL (Optional)</label>
                                <input
                                    type="text"
                                    placeholder="amazon.com/your-store"
                                    className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-[#FF9900] focus:ring-0 transition-all font-medium text-slate-900"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                                <textarea
                                    rows={5}
                                    placeholder="Tell us about your Amazon struggles..."
                                    className="w-full p-6 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-[#FF9900] focus:ring-0 transition-all font-medium text-slate-900 resize-none"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-16 rounded-full bg-[#FFB800] hover:bg-[#FFA500] text-black font-black text-xl border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-3"
                            >
                                Send Message <Send size={20} />
                            </Button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </main>
    );
};

export default ContactPage;