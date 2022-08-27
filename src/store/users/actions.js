import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../common/apis/Axios";

export const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
  try {
    const response = await Axios.get("/users");

    return response?.data;
  } catch (error) {}
});
