import { createSlice } from '@reduxjs/toolkit';

const reviewSlice = createSlice({
  name: 'review',
  initialState: { items: [], loading: false },
  reducers: {
    setReviews(state, action) {
      state.items = action.payload;
    },
    addReview(state, action) {
      state.items.push(action.payload);
    },
  },
});

export const { setReviews, addReview } = reviewSlice.actions;
export default reviewSlice.reducer;
