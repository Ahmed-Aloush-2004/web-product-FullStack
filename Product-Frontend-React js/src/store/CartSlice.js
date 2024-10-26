import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartListLength: 0,
  cartList: [],
};

const cartListSlice = createSlice({
  name: "cartListSlice",
  initialState,
  reducers: {
    AddAndRemoveCartList: (state, action) => {
      if (state.cartList.some((item) => item._id === action.payload._id)) {
        state.cartList = state.cartList.filter(
          (item) => item._id !== action.payload._id
        );
      state.cartListLength = state.cartList.length;

      } else {
        state.cartList.push(action.payload);
      state.cartListLength = state.cartList.length;

      }
    },
  },
});


export const {AddAndRemoveCartList } = cartListSlice.actions;
export default cartListSlice.reducer;