export interface Category {
    category: string;
    id: number;
    isActive: boolean;
    subCategories: SubCategory[];
}
export type SubCategory = { subCategory: string; id: number };



