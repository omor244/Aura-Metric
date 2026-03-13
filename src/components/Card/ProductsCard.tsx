import { ArrowUpRight, Badge } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { ProductsCardProps } from "@/data/Type/Type";


const ProductsCard = ({ product, idx}: ProductsCardProps) => {
    return (
        <div>
            <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-300 flex flex-col"
            >
                {/* Top Row */}
                <div className="flex justify-between items-start mb-6">
                    <Badge className="bg-orange-50 text-[#FF9900] border-orange-100 font-bold uppercase tracking-wider px-3 py-1">
                        {product.tier}
                    </Badge>
                    <span className="text-slate-400 text-xs font-black uppercase tracking-widest">{product.status}</span>
                </div>

                {/* Title & Desc */}
                <div className="flex-grow">
                    <h3 className="text-2xl font-[900] text-slate-900 mb-3 group-hover:text-[#FF9900] transition-colors">
                        {product.name}
                    </h3>
                    <p className="text-slate-500 font-medium leading-relaxed mb-6">
                        {product.description}
                    </p>
                </div>

                {/* Bottom Row */}
                <div className="pt-6 border-t border-slate-50 flex items-center justify-between mt-auto">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase">Starting at</p>
                        <p className="text-2xl font-black text-slate-900">{product.price}</p>
                    </div>
                    <Button className="h-12 w-12 rounded-full bg-[#FFB800] hover:bg-black text-black hover:text-white border-2 border-black transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none active:translate-y-0.5">
                        <ArrowUpRight size={24} />
                    </Button>
                </div>
            </motion.div>
        </div>
    );
};

export default ProductsCard;