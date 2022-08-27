import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: localStorage.getItem("token"),
  isUserLoggedIn: !!localStorage.getItem("token"),
  defaultImage: require("../../images/default.png"),
  baseURL: "https://fakestoreapi.com",
};

const authSlice = createSlice({
  name: "oauth",
  initialState,
  reducers: {
    setLogin: (state, { payload }) => {
      if (payload) {
        state.token = payload;
        state.isUserLoggedIn = true;
      }
    },

    setUser: (state, { payload }) => {
      state.user = payload;
    },

    setLogout: (state) => {
      state.token = "";
      state.isUserLoggedIn = false;
    },
  },
});

export const { setLogin, setLogout, setUser } = authSlice.actions;
export default authSlice.reducer;
