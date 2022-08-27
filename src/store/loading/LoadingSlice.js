import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageLoading: {
    status: false,
    message: "",
  },
  loadingArray: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};

const LoadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setPageLoading: (state, { payload }) => {
      state.pageLoading = {
        status: payload.status,
        message: payload.message,
      };
    },
  },
});

export const { setPageLoading } = LoadingSlice.actions;
export default LoadingSlice.reducer;
