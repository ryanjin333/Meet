import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: null,
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.user = action.payload;
      console.log(state.user);
    },
    loginUser: (state, action) => {
      state.user = action.payload;
      console.log(state.user);
    },
    logoutUser: (state) => {
      state.user = null;
      console.log(state.user);
    },
  },
});

export const { registerUser, loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
