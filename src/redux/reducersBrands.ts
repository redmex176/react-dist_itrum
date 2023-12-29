// reducer.ts

import { BrandsActionTypes, ADD_BRAND, EDIT_BRAND, DELETE_BRAND } from './actionsBrands';

interface Brand {
  brand: string;
  img: any;
  id: number;
}

const initialState: Brand[] = [];

const brandsReducer = (state = initialState, action: BrandsActionTypes): Brand[] => {
  switch (action.type) {
    case ADD_BRAND:
      return [...state, action.payload];

    case EDIT_BRAND:
      return state.map((brand) =>
        brand.id === action.payload.id ? { ...brand, brand: action.payload.newBrand, img: action.payload.img ? action.payload.img : brand.img } : brand
      );

    case DELETE_BRAND:
      return state.filter((brand) => brand.id !== action.payload);

    default:
      return state;
  }
};

export default brandsReducer;
