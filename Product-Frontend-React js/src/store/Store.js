import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice.js";
import styleReducer from "./StyleSlice.js";
import filterAndPaginationReducer from "./FilterAndPaginationSlice.js";
import washListReducer from "./WashListSlice.js";
import cartListReducer from "./CartSlice.js";

export const store = configureStore({
  reducer: {
    userInfo: userReducer,
    styleResponsive: styleReducer,
    filterAndPagination: filterAndPaginationReducer,
    washList: washListReducer,
    cartList: cartListReducer,
    
  },
});
