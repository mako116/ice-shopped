import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userModal: {
    status: false,
    type: "",
    payload: null,
  },

  alertPopModal: {
    status: false,
    type: "",
    message: "",
  },
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setUserModal: (state, { payload }) => {
      state.userModal = {
        status: payload.status,
        type: payload.type,
        payload: payload.payload,
      };
    },

    setAlertPopModal: (state, { payload }) => {
      state.alertPopModal = {
        status: payload.status,
        type: payload.type,
        message: payload.message,
      };
    },
    closeAlertPopModal: (state) => {
      state.alertPopModal = {
        status: false,
        type: "",
        message: "",
      };
    },
  },
});

export const { setUserModal, setAlertPopModal, closeAlertPopModal } =
  alertSlice.actions;
export default alertSlice.reducer;
