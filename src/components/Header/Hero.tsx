

import { Button } from '@/components/ui/button';
import { Star, Users} from 'lucide-react';

import Image from 'next/image';

const Hero = () => {
    return (
        <div className="min-h-screen relative  selection:bg-[#FFB800]/30">

           
           
            <div className="absolute inset-0 -z-40 bg-gradient-to-b from-white via-[#ffe9c0] to-[#ffe9c0]" />

             

          
            <section className="relative pt-20 pb-32 flex flex-col items-center justify-center text-center px-4">

                {/* Partner Badge */}
                <div className="flex items-center gap-3 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="h-10 w-14 bg-[#FF9900] rounded-sm flex items-center justify-center border border-black/10 shadow-sm">
                        <Image width={50} height={40} src="https://i.ibb.co.com/hFHDwcQ1/972350f07e82538f1c2e43ca40445b8c63427d68.png" alt="" />
                    </div>
                    <p className="text-slate-600 text-lg font-medium">
                        Your Full-Service <span className="font-bold text-[#FF9900]">Amazon Partner</span>
                    </p>
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-[85px] font-[900] text-[#1A1A1A] leading-[1.05] tracking-tighter mb-14 max-w-5xl">
                    Turn Your Amazon Struggles <br className="hidden md:block" />
                    into Success—Save Time, <br className="hidden md:block" />
                    <span className="text-[#FFB800]">Maximize Profits!</span>
                </h1>

             
                <Button
                    size="lg"
                    className="h-20 px-12 rounded-full bg-[#FFB800] hover:bg-[#FFA500] text-black font-black text-2xl border-b border-b-black shadow-[6px_6px_0px_0px_rgba(0,0,0,3)] transition-all hover:-translate-y-1 active:translate-y-1 active:shadow-none"
                >
                    Book a Free Consultation
                </Button>

              

           
                <div className="hidden xl:block absolute left-[4%] top-[48%] -rotate-12 hover:rotate-0 transition-all duration-500 ease-out">
                    <div className="bg-white p-7 rounded-[32px] shadow-2xl shadow-orange-200/40 border border-slate-100 w-72">
                        <p className="text-slate-900 font-extrabold mb-6 text-xl">Total Incomes</p>
                        <div className="flex items-end justify-between gap-2.5 h-28">
                            <div className="w-full h-[35%] bg-slate-100 rounded-t-md" />
                            <div className="w-full h-[55%] bg-slate-100 rounded-t-md" />
                            <div className="w-full h-[45%] bg-slate-100 rounded-t-md" />
                            <div className="w-full h-[95%] bg-[#FFB800] rounded-t-md shadow-[0_4px_10px_rgba(255,184,0,0.3)]" />
                            <div className="w-full h-[65%] bg-slate-100 rounded-t-md" />
                            <div className="w-full h-[50%] bg-slate-100 rounded-t-md" />
                        </div>
                        <div className="flex justify-between mt-3 text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                        </div>
                    </div>
                </div>

                {/* Right User Card */}
                <div className="hidden xl:block absolute rounded-[32px] bg-white border-slate-100 right-[4%] top-[42%] rotate-6 hover:rotate-0 transition-all duration-500 ease-out">
                    <div className=" p-3   shadow-2xl shadow-orange-200/40 border  w-64">
                        <div className="flex items-center justify-between">
                        
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map((i) => (
                                    <div
                                        key={i}
                                        className="h-12 w-12 rounded-full border-[3px] border-white bg-slate-100 flex items-center justify-center overflow-hidden shadow-sm"
                                    >
                                      
                                        <Users size={20} className="text-slate-400" />
                                    </div>
                                ))}
                            </div>

                            {/* Text Content */}
                            <div className="text-right">
                                <p className="text-2xl font-bold  text-slate-900 tracking-tight ">
                                    45k+ Users
                                </p>
                                <div className="flex items-center gap-2 pt-3 border-t border-slate-50">
                                    <Star className="w-6 h-6 fill-[#FFB800] text-[#FFB800]" />
                                    <span className="font-black text-sm text-slate-700  tracking-tight">
                                        4.7 Rating
                                    </span>
                                </div>
                            </div>
                        </div>

                       
                    </div>
                </div>
              

            </section>
        </div>
    );
};

export default Hero;