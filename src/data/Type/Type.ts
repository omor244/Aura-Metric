

export interface AmazonSolution {
    id: string;
    name: string;
    category: string;
    tier: string;
    description: string;
    price: string;
    status: string; 
}


// This defines what a 'Product' looks like
// export interface ProductType {
//     id: string;
//     name: string;
//     category: string;
//     tier: string;
//     description: string;
//     price: string;
//     status: string;
// }

// This defines the Props the component receives
export interface ProductsCardProps {
    product: AmazonSolution;
    idx: number;
}