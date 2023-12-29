
import { combineReducers } from 'redux';
import brandsReducer from './reducersBrands';
import categoryReducer from './reducersCategory';

const rootReducer = combineReducers({
  brands: brandsReducer,
  categories: categoryReducer,
});

export default rootReducer;
