"use client";
import { useForm } from '@tanstack/react-form';
import { PlusCircle, LayoutGrid, Info, Tag } from "lucide-react";
import { Button } from '../ui/button';
import { useMutation } from '@tanstack/react-query';
import { AmazonSolutionForPost } from '@/data/Type/Type';



const AddSolutionPage = () => {
     
    const mutation = useMutation({
        mutationFn: async (newProduct: AmazonSolutionForPost) => {
            const response = await fetch('http://localhost:4000/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        },
        onSuccess: () => {
            alert("Product saved successfully!");
            form.reset(); // Optional: reset form on success
        },
        onError: (error) => {
            console.error("Error saving product:", error);
        }
    });
    const form = useForm({
        defaultValues: {
            name: '',
            category: 'Advertising',
            tier: 'Standard',
            description: '',
            price: '',
            status: 'Active',
        },

        
        onSubmit: async ({ value }) => {
            // 2. Format the data to match your MongoDB structure
            const finalSolutionData = {
                ...value,
                price: `$${value.price}/mo`
            };

            console.log("Submitted Solution:", finalSolutionData);
            await mutation.mutateAsync(finalSolutionData);
        },
    });

    return (
        <div className="min-h-screen bg-slate-50/50 py-12 px-6">
            <div className="max-w-5xl mx-auto">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        form.handleSubmit();
                    }}
                >
                    {/* --- HEADER --- */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                        <div className="space-y-1">
                            <h1 className="text-3xl font-[900] text-slate-900 tracking-tight flex items-center gap-3">
                                <PlusCircle className="text-[#FF9900]" /> Create New Solution
                            </h1>
                            <p className="text-slate-500 font-medium">Add a new growth module to the AuraMetric marketplace.</p>
                        </div>
                        <div className="flex gap-3">
                            <Button type="button" variant="outline" className="rounded-full font-bold border-2">Discard</Button>
                            <form.Subscribe
                                selector={(state) => [state.canSubmit, state.isSubmitting]}
                            >
                                {([canSubmit, isSubmitting]) => (
                                    <Button
                                        type="submit"
                                        disabled={!canSubmit}
                                        className="rounded-full bg-[#121212] hover:bg-[#FF9900] text-white font-bold px-8 transition-colors border-2 border-[#121212]"
                                    >
                                        {isSubmitting ? 'Saving...' : 'Save Solution'}
                                    </Button>
                                )}
                            </form.Subscribe>
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

                                {/* Solution Name Field */}
                                <form.Field
                                    name="name"
                                    validators={{
                                        onChange: ({ value }) => !value ? 'Name is required' : undefined,
                                    }}
                                >
                                    {(field) => (
                                        <div className="space-y-2">
                                            <label htmlFor={field.name} className="text-sm font-bold text-slate-700">Solution Name</label>
                                            <input
                                           
                                                name={field.name}
                                                value={field.state.value}
                                        
                                                onChange={(e) => field.handleChange(e.target.value)}
                                                placeholder="e.g. Velocity PPC Optimizer"
                                                className="w-full h-12 px-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-[#FF9900] focus:ring-0 transition-all font-medium border"
                                            />
                                            {field.state.meta.errors.length > 0 && (
                                                <em className="text-xs text-red-500 font-bold">{field.state.meta.errors.join(', ')}</em>
                                            )}
                                        </div>
                                    )}
                                </form.Field>

                                {/* Description Field */}
                                <form.Field name="description">
                                    {(field) => (
                                        <div className="space-y-2">
                                            <label htmlFor={field.name} className="text-sm font-bold text-slate-700">Description</label>
                                            <textarea
                                             
                                                rows={4}
                                                value={field.state.value}
                                              
                                                onChange={(e) => field.handleChange(e.target.value)}
                                                placeholder="Explain how this helps Amazon sellers..."
                                                className="w-full p-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-[#FF9900] focus:ring-0 transition-all font-medium resize-none border"
                                            />
                                        </div>
                                    )}
                                </form.Field>
                            </div>

                            {/* Pricing Section */}
                            <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-6">
                                <div className="flex items-center gap-2 border-b border-slate-50 pb-4">
                                    <Tag className="text-[#FF9900] w-5 h-5" />
                                    <h2 className="text-lg font-black text-slate-800">Pricing & Tier</h2>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <form.Field name="price">
                                        {(field) => (
                                            <div className="space-y-2">
                                                <label htmlFor={field.name} className="text-sm font-bold text-slate-700">Monthly Price ($)</label>
                                                <input
                                                   
                                                    type="number"
                                                    value={field.state.value}
                                                   
                                                    onChange={(e) => field.handleChange(e.target.value)}
                                                    placeholder="299"
                                                    className="w-full h-12 px-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-[#FF9900] focus:ring-0 transition-all font-medium border"
                                                />
                                            </div>
                                        )}
                                    </form.Field>
                                    <form.Field name="tier">
                                        {(field) => (
                                            <div className="space-y-2">
                                                <label htmlFor={field.name} className="text-sm font-bold text-slate-700">Service Tier</label>
                                                <select
                                               
                                                    value={field.state.value}
                                                 
                                                    onChange={(e) => field.handleChange(e.target.value)}
                                                    className="w-full h-12 px-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-[#FF9900] focus:ring-0 transition-all font-bold text-slate-700 border"
                                                >
                                                    <option value="Standard">Standard</option>
                                                    <option value="Professional">Professional</option>
                                                    <option value="Enterprise">Enterprise</option>
                                                </select>
                                            </div>
                                        )}
                                    </form.Field>
                                </div>
                            </div>
                        </div>

                     
                        <div className="space-y-8">
                            <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-6">
                                <div className="flex items-center gap-2 border-b border-slate-50 pb-4">
                                    <LayoutGrid className="text-[#FF9900] w-5 h-5" />
                                    <h2 className="text-lg font-black text-slate-800">Organization</h2>
                                </div>

                                <form.Field name="category">
                                    {(field) => (
                                        <div className="space-y-2">
                                            <label htmlFor={field.name} className="text-sm font-bold text-slate-700">Category</label>
                                            <select
                                              
                                                value={field.state.value}
                                               
                                                onChange={(e) => field.handleChange(e.target.value)}
                                                className="w-full h-12 px-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-[#FF9900] focus:ring-0 transition-all font-bold text-slate-700 border"
                                            >
                                                <option value="Advertising">Advertising</option>
                                                <option value="Growth">Growth</option>
                                                <option value="Operations">Operations</option>
                                            </select>
                                        </div>
                                    )}
                                </form.Field>

                                <form.Field name="status">
                                    {(field) => (
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700">Display Status</label>
                                            <div className="flex gap-3">
                                                {['Active', 'Draft', 'Best Seller'].map((s) => (
                                                    <button
                                                        key={s}
                                                        type="button"
                                                        onClick={() => field.handleChange(s)}
                                                        className={`flex-1 py-2 text-[10px] font-black rounded-lg border transition-all ${field.state.value === s
                                                                ? 'bg-[#FF9900] text-white border-[#FF9900]'
                                                                : 'bg-slate-50 text-slate-400 border-slate-100'
                                                            }`}
                                                    >
                                                        {s}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </form.Field>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddSolutionPage;