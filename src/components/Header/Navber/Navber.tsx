import { Button } from '@/components/ui/button';
import { Atom } from 'lucide-react';
import Link from 'next/link';


const Navber = () => {
    return (
        <div>
            <nav className="flex items-center justify-between px-6 md:px-16 py-6 max-w-7xl mx-auto">
                {/* Logo Section */}
                <div className="flex items-center gap-2 group cursor-pointer">
                    <Link href={'/'} className="h-10 w-10 bg-white border-2 border-[#FF9900] rounded-full flex items-center justify-center shadow-sm">
                        <Atom size={32} className="text-[#FF9900] w-6 h-6" />
                    </Link>
                  
                </div>

               
                <div className="hidden md:flex items-center gap-10">
                    <Link href="/" className="text-[#FF9900] font-bold text-lg hover:opacity-80 transition-opacity">Home</Link>
                    <Link href="/about" className="text-slate-700 font-semibold text-lg hover:text-black transition-colors">About</Link>
                    <Link href="/contact" className="text-slate-700 font-semibold text-lg hover:text-black transition-colors">Contact</Link>
                    <Link href="/products" className="text-slate-700 font-semibold text-lg hover:text-black transition-colors">Products</Link>
                </div>

                {/* Navbar CTA */}
                <Button className="rounded-full   bg-[#FFB800] hover:bg-[#FFA500] text-black font-bold px-6 border-b border-b-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-transform active:translate-y-0.5 active:shadow-none">
                    Book a Free Consultation
                </Button>
            </nav>
        </div>
    );
};

export default Navber;