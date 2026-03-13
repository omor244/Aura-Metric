
import Link from 'next/link';
import { Atom, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#121212] text-white pt-20 pb-10 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* --- BRAND COLUMN --- */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link href={"/"} className="flex items-center gap-2">
                            <Atom size={32} className="text-[#FF9900]" />
                            <span className="text-2xl font-[900] tracking-tighter uppercase">
                                Aura<span className="text-[#FF9900]">Metric</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
                            AuraMetric – Your Amazon Growth Partner Since 2016, we boost Amazon
                            success with expert SEO, PPC, and growth strategies.
                        </p>
                    </div>

                    {/* --- NAVIGATION COLUMN --- */}
                    <div>
                        <h4 className="text-xl font-black mb-6 tracking-tight">Home</h4>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Services', 'Why Choose Us', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="text-slate-400 hover:text-[#FF9900] transition-colors font-medium"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* --- CONTACT COLUMN --- */}
                    <div>
                        <h4 className="text-xl font-black mb-6 tracking-tight">Contact</h4>
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#FF9900]/10 transition-colors">
                                <Mail size={20} className="text-slate-400 group-hover:text-[#FF9900]" />
                            </div>
                            <a
                                href="mailto:contact@aurametric.com"
                                className="text-slate-400 hover:text-white transition-colors font-medium break-all"
                            >
                                contact@aurametric.com
                            </a>
                        </div>
                    </div>

                </div>

                {/* --- BOTTOM BAR --- */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-sm font-medium">
                        © {currentYear} Copyright AuraMetric
                    </p>

                    <div className="flex gap-8">
                        <Link href="/privacy" className="text-slate-500 hover:text-slate-300 text-sm font-medium transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-slate-500 hover:text-slate-300 text-sm font-medium transition-colors">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;