import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import productReducer from './productSlice';
import recipeReducer from './recipeSlice';
import reviewReducer from './reviewSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    recipe: recipeReducer,
    review: reviewReducer,
    cart: cartReducer,
  },
});
