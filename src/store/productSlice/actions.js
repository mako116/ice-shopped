import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../common/apis/Axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const response = await Axios.get("/products");

      return response?.data;
    } catch (error) {}
  }
);

export const getCategories = createAsyncThunk(
  "products/getCategories",
  async () => {
    try {
      const response = await Axios.get(`/products/categories`);

      return response?.data;
    } catch (error) {}
  }
);

export const getProductByCategory = createAsyncThunk(
  "products/getProductByCategory",
  async (category) => {
    try {
      const response = await Axios.get(`/products/category/${category}`);

      return response?.data;
    } catch (error) {}
  }
);

export const getSingleProduct = createAsyncThunk(
  "products/getSingleProduct",
  async (id) => {
    try {
      const response = await Axios.get(`/products/${id}`);

      return response?.data;
    } catch (error) {}
  }
);
