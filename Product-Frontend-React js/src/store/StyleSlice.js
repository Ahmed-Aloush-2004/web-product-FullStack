import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const StyleSlice = createSlice({
  name: "StyleSlic",
  initialState,
  reducers: {
    handleToggleNavbar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { handleToggleNavbar } = StyleSlice.actions;

export default StyleSlice.reducer;
