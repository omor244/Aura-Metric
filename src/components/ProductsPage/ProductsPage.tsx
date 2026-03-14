"use client";
import { Button } from "@/components/ui/button";
import ProductsCard from "../Card/ProductsCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import LoadingPage from "../Loading/LoadingPage";
const SolutionsPage = () => {

    const { data: productsData, isLoading  } = useQuery({
        queryKey: ["Products"],
        queryFn: async () => {
            const res = await axios("http://localhost:4000/products")
            return res.data
        }
    })

    if(isLoading) return <LoadingPage/>

   
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Header Section */}
            <div className="bg-[#121212] py-20 px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-[900] text-white mb-4 tracking-tighter">
                    Growth <span className="text-[#FF9900]">Solutions</span>
                </h1>
                <p className="text-slate-400 max-w-2xl mx-auto font-medium">
                    Choose the right tools to dominate the Amazon marketplace. Data-driven,
                    AI-powered, and built for scale.
                </p>
            </div>

            {/* Toolbar */}
            {/* <div className="max-w-7xl mx-auto px-6 -mt-8">
                <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex flex-wrap justify-between items-center gap-4">
                    {/* <div className="flex gap-2">
                        {['All', 'Advertising', 'Growth', 'Operations'].map((cat) => (
                            <Button key={cat} variant="ghost" className="rounded-full font-bold text-slate-600 hover:text-[#FF9900]">
                                {cat}
                            </Button>
                        ))}
                    </div> 
                    <Button variant="outline" className="rounded-full gap-2 font-bold border-2">
                        <Filter size={18} /> Filters
                    </Button>
                </div>
            </div> */}

            {/* Product Grid */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productsData.map((product, idx) => <ProductsCard idx={idx} product={product} key={idx}></ProductsCard>)}
                </div>
            </section>

            {/* Footer CTA */}
            <section className="bg-white py-20 px-6 text-center border-t border-slate-100">
                <h2 className="text-3xl font-black mb-8">Not sure which plan is right for you?</h2>
                <Button className="h-16 px-10 rounded-full bg-[#121212] text-white font-bold text-lg hover:bg-[#FF9900] transition-colors border-4 border-white shadow-2xl">
                    Get a Custom Quote
                </Button>
            </section>
        </div>
    );
};

export default SolutionsPage;