export interface SubCategory {
    subCategory: string;
    id: number;
  }
  
  export interface Category {
    category: string;
    id: number;
    isActive: boolean;
    subCategories: SubCategory[];
  }
  
  export enum ActionType {
    ADD_CATEGORY = "ADD_CATEGORY",
    ADD_SUBCATEGORY = "ADD_SUBCATEGORY",
    DELETE_CATEGORY = "DELETE_CATEGORY",
    DELETE_SUBCATEGORY = "DELETE_SUBCATEGORY",
    EDIT_CATEGORY = "EDIT_CATEGORY",
    EDIT_SUBCATEGORY = "EDIT_SUBCATEGORY",
    SET_ACTIVE_CATEGORY = "SET_ACTIVE_CATEGORY",
  }
  
  export interface AddCategoryAction {
    type: ActionType.ADD_CATEGORY;
    payload: Category;
  }
  
  export interface AddSubCategoryAction {
    type: ActionType.ADD_SUBCATEGORY;
    payload: { categoryId: number; subCategory: SubCategory };
  }
  
  export interface DeleteCategoryAction {
    type: ActionType.DELETE_CATEGORY;
    payload: number;
  }
  
  export interface DeleteSubCategoryAction {
    type: ActionType.DELETE_SUBCATEGORY;
    payload: { categoryId: number; subCategoryId: number };
  }
  
  export interface EditCategoryAction {
    type: ActionType.EDIT_CATEGORY;
    payload: { categoryId: number; category: string };
  }
  
  export interface EditSubCategoryAction {
    type: ActionType.EDIT_SUBCATEGORY;
    payload: { categoryId: number; subCategoryId: number; subCategory: string };
  }
  
  export interface SetActiveCategoryAction {
    type: ActionType.SET_ACTIVE_CATEGORY;
    payload: number;
  }
  
  export type Action =
    | AddCategoryAction
    | AddSubCategoryAction
    | DeleteCategoryAction
    | DeleteSubCategoryAction
    | EditCategoryAction
    | EditSubCategoryAction
    | SetActiveCategoryAction;
  