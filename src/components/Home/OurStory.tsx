import { Button } from "@/components/ui/button";
import Image from "next/image";

const OurStory = () => {
    return (
        <section className="flex flex-col items-center text-center px-6 py-20 max-w-6xl mx-auto ">

            {/* --- BADGE --- */}
            <div className="flex items-center gap-2 mb-8 bg-white/50 px-3 py-1 rounded-md border border-slate-100 shadow-sm">
                <div className=" px-1.5 py-0.5 flex items-center justify-center">
                    <Image width={50} height={40} className="w-16 rounded-lg" src="https://i.ibb.co.com/hFHDwcQ1/972350f07e82538f1c2e43ca40445b8c63427d68.png" alt="" />
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-800">
                    Our <span className="text-[#FF9900]">Story</span>
                </span>
            </div>

            {/* --- MAIN HEADLINE --- */}
            <h2 className="text-4xl md:text-[54px] font-[900] text-[#1A1A1A] leading-[1.1] tracking-tight mb-8">
                Struggling With Amazon Sales? Let’s Scale Your <br className="hidden md:block" />
                Business—<span className="text-[#FF9900]">Faster, Smarter, & Stress-Free!</span>
            </h2>

            {/* --- SUBTEXT --- */}
            <p className="text-slate-500 text-lg md:text-xl font-medium max-w-3xl mb-12 leading-[1.6]">
                Amazon is complex, but success doesn't have to be. At <span className="text-[#FF9900] font-bold">AuraMetric</span>, we help sellers increase sales, optimize ads, rank higher, and expand into new markets—without wasting time or money. 🎯 Let’s turn your struggles into scalable success!
            </p>

            {/* --- NEO-BRUTALIST BUTTON --- */}
            <Button
                className="h-14 px-10 rounded-full bg-[#FFA500] hover:bg-[#FF8C00] text-white font-bold text-lg border-b border-b-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 active:translate-y-0.5 active:shadow-none"
            >
                Book a Free Strategy Call
            </Button>

        </section>
    );
};

export default OurStory;