import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../data/models/auth/User";
import { RootState } from "./../store/store";
import appService from "../../data/services/app.service";
const user: User | null = appService.authService.getCurrentUser();
const authSlice = createSlice({
  name: "auth",
  initialState: { user },
  reducers: {
    setCredentials: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.user;
