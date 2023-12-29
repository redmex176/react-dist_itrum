export const ADD_BRAND = 'ADD_BRAND';
export const EDIT_BRAND = 'EDIT_BRAND';
export const DELETE_BRAND = 'DELETE_BRAND';

interface AddBrandAction {
  type: typeof ADD_BRAND;
  payload: { brand: string; img: string; id: number };
}

interface EditBrandAction {
  type: typeof EDIT_BRAND;
  payload: { id: number; newBrand: string; img: string };
}

interface DeleteBrandAction {
  type: typeof DELETE_BRAND;
  payload: number;
}

export type BrandsActionTypes = AddBrandAction | EditBrandAction | DeleteBrandAction;

export const addBrand = (brand: string, img: any, id: number): AddBrandAction => ({
  type: ADD_BRAND,
  payload: { brand, img, id },
});

export const editBrand = (id: number, newBrand: string, img: string): EditBrandAction => ({
  type: EDIT_BRAND,
  payload: { id, newBrand, img },
});

export const deleteBrand = (id: number): DeleteBrandAction => ({
  type: DELETE_BRAND,
  payload: id,
});
