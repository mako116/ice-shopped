import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "./actions";

const initialState = {
  users: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUser: (state, { payload }) => {
      state.users = payload;
    },
  },

  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.loading = true;
    },

    [getAllUsers.fulfilled]: (state, { payload }) => {
      state.users = payload;
      state.error = false;
      state.loading = false;
    },

    [getAllUsers.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
