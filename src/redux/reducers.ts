// reducers.ts
import { Category, Action, ActionType } from "./types";

const initialState: Category[] = [];

const rootReducer = (state = initialState, action: Action): Category[] => {
  switch (action.type) {
    case ActionType.ADD_CATEGORY:
      return [...state, action.payload];

    case ActionType.ADD_SUBCATEGORY:
      return state.map((category) => {
        if (category.id === action.payload.categoryId) {
          return {
            ...category,
            subCategories: [...category.subCategories, action.payload.subCategory],
          };
        }
        return category;
      });

    case ActionType.DELETE_CATEGORY:
      return state.filter((category) => category.id !== action.payload);

    case ActionType.DELETE_SUBCATEGORY:
      return state.map((category) => {
        if (category.id === action.payload.categoryId) {
          return {
            ...category,
            subCategories: category.subCategories.filter(
              (subCategory) => subCategory.id !== action.payload.subCategoryId
            ),
          };
        }
        return category;
      });

    case ActionType.EDIT_CATEGORY:
      return state.map((category) => {
        if (category.id === action.payload.categoryId) {
          return { ...category, category: action.payload.category };
        }
        return category;
      });

    case ActionType.EDIT_SUBCATEGORY:
      return state.map((category) => {
        if (category.id === action.payload.categoryId) {
          return {
            ...category,
            subCategories: category.subCategories.map((subCategory) => {
              if (subCategory.id === action.payload.subCategoryId) {
                return { ...subCategory, subCategory: action.payload.subCategory };
              }
              return subCategory;
            }),
          };
        }
        return category;
      });

    case ActionType.SET_ACTIVE_CATEGORY:
      return state.map((category) => ({
        ...category,
        isActive: category.id === action.payload,
      }));

    default:
      return state;
  }
};

export default rootReducer;
