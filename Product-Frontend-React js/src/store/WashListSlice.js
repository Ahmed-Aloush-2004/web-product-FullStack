import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  washListLength: 0,
  washList: [],
};

const washListSlice = createSlice({
  name: "washListSlice",
  initialState,
  reducers: {
    AddAndRemoveWashList: (state, action) => {
      if (state.washList.some((item) => item._id === action.payload._id)) {
        state.washList = state.washList.filter(
          (item) => item._id !== action.payload._id
        );
      state.washListLength = state.washList.length;

      } else {
        state.washList.push(action.payload);
      state.washListLength = state.washList.length;

      }
    },
  },
});


export const {AddAndRemoveWashList } = washListSlice.actions;
export default washListSlice.reducer;