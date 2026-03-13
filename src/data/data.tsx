import { BarChart3, Box, Globe2, Rocket, ShieldCheck, TrendingUp, Zap } from "lucide-react";
import { AmazonSolution } from "./Type/Type";

export const stats = [
    { label: "Amazon Offers Over Products", value: "600 million" },
    { label: "Amazon Global Net Sales Revenue", value: "$638.0 billion" },
    { label: "Amazon Handles Orders Daily.", value: "11.95 million" },
    { label: "Amazon Average Daily Sales Revenue", value: "$1.6 billion" },
];


export const features = [
    "Proven Expertise",
    "Maximized Visibility",
    "Strategic Growth",
    "Exclusive Partnerships",
];

export const services = [
    {
        title: "Amazon Growth & Advertising",
        icon: <Rocket className="w-12 h-12 text-[#FF9900]" />,
        points: [
            "Bid & Budget Optimization – Higher ROI, lower ACOS.",
            "Monthly PPC Strategy – Tailored for long-term growth."
        ]
    },
    {
        title: "SEO & Product Ranking",
        icon: <TrendingUp className="w-12 h-12 text-[#FF9900]" />,
        points: [
            "Organic & Sponsored Ranking – More visibility, more sales",
            "Keyword & Competitor Analysis – Stay ahead of the competition."
        ]
    },
    {
        title: "Inventory & Account Management",
        icon: <Box className="w-12 h-12 text-[#FF9900]" />,
        points: [
            "Inventory Forecasting & Restocking – No stockouts, no overstocking.",
            "Amazon Account Health & Compliance – Avoid suspensions & violations."
        ]
    },
    {
        title: "Scaling & Expansion",
        icon: <Globe2 className="w-12 h-12 text-[#FF9900]" />,
        points: [
            "Launching New Products – Market research-backed success.",
            "International Expansion – Sell beyond borders with ease."
        ]
    }
];

export const strategies = [
    {
        title: "We Make You Stand Out",
        description: "Targeted marketing to reach the right buyers.",
    },
    {
        title: "We Fix Your Rankings",
        description: "SEO, keywords & ads for visibility.",
    },
    {
        title: "We Optimize Your Ads",
        description: "No wasted budget—only high ROI advertising.",
    },
    {
        title: "We Manage Your Inventory",
        description: "So you never run out of stock or overstock.",
    },
    {
        title: "We Keep Your Account Safe",
        description: "Avoid suspensions, policy violations & account risks.",
    },
    {
        title: "We Scale Your Business",
        description: "Expansion, market entry & growth.",
    },
];


export const values = [
    {
        icon: <Zap className="text-[#FF9900]" />,
        title: "Data-Driven Speed",
        desc: "We don't wait for trends; we predict them using advanced analytics to keep you ahead."
    },
    {
        icon: <ShieldCheck className="text-[#FF9900]" />,
        title: "Account Integrity",
        desc: "Security is our priority. We navigate Amazon's strict policies to keep your brand safe."
    },
    {
        icon: <BarChart3 className="text-[#FF9900]" />,
        title: "Scalable Growth",
        desc: "From local sellers to global brands, our frameworks are built to grow with you."
    }
];


export const productsData: AmazonSolution[] = [
    {
        id: "p1",
        name: "Velocity PPC Suite",
        category: "Advertising",
        tier: "Enterprise",
        description: "Automated bidding engine that reduces ACOS by 25% using real-time market signals.",
        price: "$299/mo",
        status: "Best Seller"
    },
    {
        id: "p2",
        name: "RankMaster SEO",
        category: "Organic Growth",
        tier: "Professional",
        description: "Deep-index keyword harvesting and competitor gap analysis for Category Dominance.",
        price: "$199/mo",
        status: "Popular"
    },
    {
        id: "p3",
        name: "StockFlow AI",
        category: "Operations",
        tier: "Business",
        description: "Predictive inventory forecasting to eliminate stockouts and minimize storage fees.",
        price: "$149/mo",
        status: "Essential"
    },
    {
        id: "p4",
        name: "Global Expansion Kit",
        category: "Scaling",
        tier: "Enterprise",
        description: "One-click localization and compliance management for 14+ international marketplaces.",
        price: "$499/mo",
        status: "Expert"
    },
    {
        id: "p5",
        name: "BuyBox Defender",
        category: "Security",
        tier: "Professional",
        description: "24/7 monitoring for hijackers and unauthorized resellers with instant alert triggers.",
        price: "$89/mo",
        status: "New"
    },
    {
        id: "p6",
        name: "ReviewPulse Engine",
        category: "Branding",
        tier: "Business",
        description: "Legally compliant review automation to build social proof and high-conversion listings.",
        price: "$129/mo",
        status: "Hot"
    }
];