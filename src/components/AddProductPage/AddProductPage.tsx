"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { PlusCircle, Image as ImageIcon, LayoutGrid, Info, Tag } from "lucide-react";

const AddProductPage = () => {
    // 1. Initialize state with your data structure
    const [formData, setFormData] = useState({
        name: "",
        category: "Advertising",
        tier: "Standard",
        description: "",
        price: "",
        status: "Active"
    });

    // 2. Handle Input Changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // 3. Get All Data on Submit
    const handleSubmit = () => {
        // Adding a fake ID to match your p1, p2 format
        const finalProductData = {
            id: `p${Math.floor(Math.random() * 1000)}`,
            ...formData,
            // Formatting price to match your "$299/mo" style
            price: `$${formData.price}/mo`
        };

        console.log("Final Product Data Object:", finalProductData);
        alert("Check console to see your product object!");
    };

    return (
        <div className="min-h-screen bg-slate-50/50 py-12 px-6">
            <div className="max-w-5xl mx-auto">

                {/* --- HEADER --- */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div className="space-y-1">
                        <h1 className="text-3xl font-[900] text-slate-900 tracking-tight flex items-center gap-3">
                            <PlusCircle className="text-[#FF9900]" /> Create New Solution
                        </h1>
                        <p className="text-slate-500 font-medium">Add a new growth module to the AuraMetric marketplace.</p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" className="rounded-full font-bold border-2">Discard</Button>
                        <Button
                            onClick={handleSubmit}
                            className="rounded-full bg-[#121212] hover:bg-[#FF9900] text-white font-bold px-8 transition-colors border-2 border-[#121212]"
                        >
                            Save Solution
                        </Button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* --- LEFT COLUMN --- */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-6">
                            <div className="flex items-center gap-2 border-b border-slate-50 pb-4">
                                <Info className="text-[#FF9900] w-5 h-5" />
                                <h2 className="text-lg font-black text-slate-800">General Information</h2>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Solution Name</label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="e.g. Velocity PPC Optimizer"
                                        className="w-full h-12 px-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-[#FF9900] focus:ring-0 transition-all font-medium"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Description</label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Explain how this helps Amazon sellers..."
                                        className="w-full p-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-[#FF9900] focus:ring-0 transition-all font-medium resize-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-6">
                            <div className="flex items-center gap-2 border-b border-slate-50 pb-4">
                                <Tag className="text-[#FF9900] w-5 h-5" />
                                <h2 className="text-lg font-black text-slate-800">Pricing & Tier</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Monthly Price ($)</label>
                                    <input
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        type="number"
                                        placeholder="299"
                                        className="w-full h-12 px-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-[#FF9900] focus:ring-0 transition-all font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Service Tier</label>
                                    <select
                                        name="tier"
                                        value={formData.tier}
                                        onChange={handleChange}
                                        className="w-full h-12 px-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-[#FF9900] focus:ring-0 transition-all font-bold text-slate-700"
                                    >
                                        <option value="Standard">Standard</option>
                                        <option value="Professional">Professional</option>
                                        <option value="Enterprise">Enterprise</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                  
                    <div className="space-y-8">
                     

                        <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-6">
                            <div className="flex items-center gap-2 border-b border-slate-50 pb-4">
                                <LayoutGrid className="text-[#FF9900] w-5 h-5" />
                                <h2 className="text-lg font-black text-slate-800">Organization</h2>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Category</label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="w-full h-12 px-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-[#FF9900] focus:ring-0 transition-all font-bold text-slate-700"
                                    >
                                        <option value="Advertising">Advertising</option>
                                        <option value="Growth">Growth</option>
                                        <option value="Operations">Operations</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Display Status</label>
                                    <div className="flex gap-3">
                                        {['Active', 'Draft', 'Best Seller'].map((s) => (
                                            <button
                                                key={s}
                                                type="button"
                                                onClick={() => setFormData(prev => ({ ...prev, status: s }))}
                                                className={`flex-1 py-2 text-[10px] font-black rounded-lg border transition-all ${formData.status === s
                                                        ? 'bg-[#FF9900] text-white border-[#FF9900]'
                                                        : 'bg-slate-50 text-slate-400 border-slate-100'
                                                    }`}
                                            >
                                                {s}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddProductPage;