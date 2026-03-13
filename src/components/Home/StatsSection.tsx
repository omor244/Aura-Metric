import { stats } from "@/data/data";

const StatsSection = () => {
 

    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <h2 className="text-center font-bold text-2xl mb-12 text-slate-800">
                Amazon Market Statistics Worldwide 2024
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-white border border-slate-100 rounded-[24px] p-10 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow"
                    >
                        <p className="text-4xl font-[900] tracking-tight mb-3 text-black">
                            {stat.value}
                        </p>
                        <p className="text-slate-500 font-medium leading-tight max-w-[150px]">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsSection