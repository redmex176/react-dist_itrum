export interface RootState {
    categories: Category[];
    activeCategoryId: number;
    isEdit: boolean;
    editedCategoryId: number;
    inputEditValue: string;
    isSubCategoryEdit: boolean;
    editedSubCategoryId: number;
    inputSubCategoryEditValue: string;
  }

 export interface AppState {
    inputAddValue: string;
    inputSubAddValue: string;
    categories: Category[];
    activeCategoryId: number;
    isEdit: boolean;
    editedCategoryId: number;
    inputEditValue: string;
    inputSubCategoryEditValue: string;
    isSubCategoryEdit: boolean;
    editedSubCategoryId: number;
  }
export interface Category {
    map(arg0: (item: any) => import("react").JSX.Element): unknown;
    category: string;
    id: number;
    isActive: boolean;
    subCategories: SubCategory[];
}
export type SubCategory = { subCategory: string; id: number };



