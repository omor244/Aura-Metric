"use client"; 

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Atom, Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Solutions', href: '/solutions' },
        { name: 'Add Solution', href: '/addSolution' },
    ];

    return (
        <div className="relative w-full border-b border-gray-100 bg-white">
            <nav className="flex items-center justify-between px-6 md:px-16 py-6 max-w-7xl mx-auto">
                
                <Link href={'/'} className="flex items-center gap-2 group cursor-pointer z-50">
                    <div className="h-10 w-10 bg-white border-2 border-[#FF9900] rounded-full flex items-center justify-center shadow-sm">
                        <Atom size={32} className="text-[#FF9900] w-6 h-6" />
                    </div>
               
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-slate-700 font-semibold text-md hover:text-[#FF9900] transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Navbar CTA (Desktop) */}
                <div className="hidden md:block">
                    <Button className="rounded-full bg-[#FFB800] hover:bg-[#FFA500] text-black font-bold px-6 border-b border-b-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-transform active:translate-y-0.5 active:shadow-none">
                        Book a Free Consultation
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden p-2 text-slate-700 z-50"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Dropdown Overlay */}
                <div className={`
                    fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 lg:hidden
                    ${isOpen ? "translate-x-0" : "translate-x-full"}
                `}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={toggleMenu}
                            className="text-2xl font-bold text-slate-800 hover:text-[#FF9900]"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button className="mt-4 rounded-full bg-[#FFB800] text-black font-bold px-8 py-6">
                        Book a Consultation
                    </Button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;