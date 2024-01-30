// src/reducers/rootReducer.js
import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import wishlistReducer from './wishlistReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;
