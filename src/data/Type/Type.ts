

export interface AmazonSolution {
    _id: string;
    name: string;
    category: string;
    tier: string;
    description: string;
    price: string;
    status: string; 
}
export interface AmazonSolutionForPost {
    
    name: string;
    category: string;
    tier: string;
    description: string;
    price: string;
    status: string; 
}



export interface ProductsCardProps {
    product: AmazonSolution;
    idx: number;
}