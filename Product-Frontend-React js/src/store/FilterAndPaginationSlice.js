import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  priceRange: { low: 0, high: 100 },
  category: "",
  brand: "",
  search: "",
  price: [100, 130],
  totalPages: 0,
  pageNumber: 1,
  pageSize: 2,
};

const filterAndPaginationSlice = createSlice({
  name: "filterAndPaginationSlice",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setBrand: (state, action) => {
      state.brand = action.payload;
    },

    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
  },
});

export const { setBrand, setCategory,setTotalPages, setPrice, setSearch, setPageNumber } =
  filterAndPaginationSlice.actions;
export default filterAndPaginationSlice.reducer;
