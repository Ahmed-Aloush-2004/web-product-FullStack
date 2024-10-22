import { createSlice } from "@reduxjs/toolkit";
import {
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage,
} from "../utils/dealWithLocalStorage";

const initialState = {
  user: {},
  token: getTokenFromLocalStorage() || null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
    loggedOut: (state, action) => {
      state.token = null;
      removeTokenFromLocalStorage();
      state.user = {};
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

// const fetchUser = createAsyncThunk("userSlice/fetchUser", async (userData) => {
//   const response = await fetch("http://localhost:5000/api/auth/login", {
//     method: "POST",

//     headers: {
//       authorization: `Bearer ${localStorage.getItem("token")}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(userData),
//   });
//   const data = await response.json();
//   if (!response.ok) throw new Error(data.message);
//   return data;
// });
// extraReducers: (builder) => {
//   builder.addCase(fetchUser.pending, (state, action) => {
//     state.isLoading = true;
//   });
//   builder.addCase(fetchUser.fulfilled, (state, action) => {
//     state.user = action.payload;
//     state.isLoading = false;
//   });

//   builder.addCase(fetchUser.rejected, (state, action) => {
//     state.error = action.payload.error;
//     state.isLoading = false;
//   });
// },

export default userSlice.reducer;

export const { loggedOut, setToken, setUserInfo } = userSlice.actions;
