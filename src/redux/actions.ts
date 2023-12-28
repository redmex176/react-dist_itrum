import {
    Category,
    SubCategory,
    ActionType,
    AddCategoryAction,
    AddSubCategoryAction,
    DeleteCategoryAction,
    DeleteSubCategoryAction,
    EditCategoryAction,
    EditSubCategoryAction,
    SetActiveCategoryAction,
  } from "./types";
  
  export const addCategory = (category: Category): AddCategoryAction => ({
    type: ActionType.ADD_CATEGORY,
    payload: category,
  });
  
  export const addSubCategory = (categoryId: number, subCategory: SubCategory): AddSubCategoryAction => ({
    type: ActionType.ADD_SUBCATEGORY,
    payload: { categoryId, subCategory },
  });
  
  export const deleteCategory = (categoryId: number): DeleteCategoryAction => ({
    type: ActionType.DELETE_CATEGORY,
    payload: categoryId,
  });
  
  export const deleteSubCategory = (categoryId: number, subCategoryId: number): DeleteSubCategoryAction => ({
    type: ActionType.DELETE_SUBCATEGORY,
    payload: { categoryId, subCategoryId },
  });
  
  export const editCategory = (categoryId: number, editedCategory: string): EditCategoryAction => ({
    type: ActionType.EDIT_CATEGORY,
    payload: { categoryId, category: editedCategory },
  });
  
  export const editSubCategory = (categoryId: number, subCategoryId: number, editedSubCategory: string): EditSubCategoryAction => ({
    type: ActionType.EDIT_SUBCATEGORY,
    payload: { categoryId, subCategoryId, subCategory: editedSubCategory },
  });
  
  export const setActiveCategory = (categoryId: number): SetActiveCategoryAction => ({
    type: ActionType.SET_ACTIVE_CATEGORY,
    payload: categoryId,
  });
  