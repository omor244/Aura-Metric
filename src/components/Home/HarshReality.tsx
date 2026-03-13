
import { Button } from "@/components/ui/button";

const HarshReality = () => {
    const painPoints = [
        {
            title: "Lost in Competition?",
            description: "10M+ sellers & 350M+ products how do you stand out?",
        },
        {
            title: "Burning Cash on Ads?",
            description: "PPC feels like a money pit with no returns.",
        },
        {
            title: "Low Rankings?",
            description: "Amazon's complex algorithms keep changing.",
        },
        {
            title: "Inventory Headaches?",
            description: "Stockouts, overstocking, at the wrong time?",
        },
        {
            title: "Risk of Account Suspension?",
            description: "Amazon's strict policies make selling stressful.",
        },
        {
            title: "Wasting Time & Getting Stuck?",
            description: "Managing it all alone is overwhelming.",
        },
    ];

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col items-center">

                {/* --- BRAND BADGE --- */}
                <div className="flex items-center gap-2 mb-8 bg-white px-3 py-1.5 rounded-md border border-slate-100 shadow-sm">
                    <div className="bg-[#FF9900] rounded-sm px-1.5 py-0.5 flex items-center justify-center">
                        <span className="text-white font-black italic text-xs leading-none">a</span>
                    </div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                        Growth <span className="text-[#FF9900]">Business</span>
                    </span>
                </div>

                {/* --- TITLES --- */}
                <h2 className="text-5xl md:text-6xl font-[900] text-[#1A1A1A] text-center leading-tight mb-6">
                    The Harsh Reality of <br />
                    Selling on <span className="text-[#FF9900]">Amazon</span>
                </h2>

                <p className="text-slate-500 text-center text-lg font-medium mb-16 max-w-2xl leading-relaxed">
                    Selling on Amazon is tough. Do these struggles sound familiar? Without the
                    right strategy, you&apos;re losing money, time, and opportunities.
                </p>

                {/* --- PAIN POINTS GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-16">
                    {painPoints.map((point, index) => (
                        <div
                            key={index}
                            className="bg-white border border-slate-100 p-8 rounded-[24px] shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
                        >
                            <h3 className="text-[#FFB800] font-bold text-xl mb-4">
                                {point.title}
                            </h3>

                            {/* The subtle orange accent line from your design */}
                            <div className="w-px h-10 bg-orange-200 mb-6" />

                            <p className="text-slate-500 font-medium leading-relaxed">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* --- CTA BUTTON --- */}
                <Button
                    className="h-14 px-10 rounded-full bg-[#FFB800] hover:bg-[#FFA500] text-black font-black text-lg border-[2.5px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 active:translate-y-0.5 active:shadow-none"
                >
                    Talk to an Expert
                </Button>
            </div>
        </section>
    );
};

export default HarshReality;