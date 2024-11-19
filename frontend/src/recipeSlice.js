import { createSlice } from '@reduxjs/toolkit';

const recipeSlice = createSlice({
  name: 'recipe',
  initialState: { items: [], loading: false },
  reducers: {
    setRecipes(state, action) {
      state.items = action.payload;
    },
    addRecipe(state, action) {
      state.items.push(action.payload);
    },
  },
});

export const { setRecipes, addRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
