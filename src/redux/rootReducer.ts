import { combineReducers } from 'redux';
import brandsReducer from './reducersBrands';
import categoryReducer from './reducersCategory';
import ordersReducer from './reducersOrders'

const rootReducer = combineReducers({
  brands: brandsReducer,
  categories: categoryReducer,
  orders: ordersReducer
});

export default rootReducer;
