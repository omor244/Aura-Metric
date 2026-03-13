
import { services } from '@/data/data';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const ServicesSection = () => {
    

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* --- TOP BADGE --- */}
                <div className="flex items-center gap-2 mb-6 bg-white px-4 py-1.5 rounded-full border border-slate-100 shadow-sm">
                    <div className=" px-1.5 py-0.5 flex items-center justify-center">
                        <Image width={50} height={40} className="w-16 rounded-lg" src="https://i.ibb.co.com/hFHDwcQ1/972350f07e82538f1c2e43ca40445b8c63427d68.png" alt="" />
                    </div>
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                        Our <span className="text-[#FF9900]">Services</span>
                    </span>

                   
                  
                </div>

               
                <h2 className="text-5xl md:text-6xl font-[900] text-[#1A1A1A] mb-4 text-center">
                    Scale Smarter, <span className="text-[#FF9900]">Sell Faster</span>
                </h2>
                <p className="text-slate-500 font-medium text-lg mb-16">
                    We handle everything Amazon so you can focus on growing.
                </p>

               
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white border border-slate-100 p-8 rounded-[24px] shadow-sm hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Subtle accent line from screenshot */}
                            <div className="absolute left-8 top-20 w-px h-12 bg-orange-200 opacity-50" />

                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-[#FFB800] font-bold text-xl max-w-[200px] leading-tight">
                                    {service.title}
                                </h3>
                                <div className="opacity-80 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                            </div>

                            <div className="space-y-4">
                                {service.points.map((point, pIdx) => (
                                    <div key={pIdx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#FFB800] mt-1 shrink-0" />
                                        <p className="text-slate-600 font-medium leading-relaxed">
                                            {point}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;