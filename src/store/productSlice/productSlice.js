import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getProductByCategory, getCategories } from "./actions";

const initialState = {
  products: null,
  carts: [],
  categories: null,
  productDetails: null,
  selectedCategory: "",
  loading: false,
  error: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, { payload }) => {
      state.products = payload;
    },

    saveProductDetails: (state, { payload }) => {
      state.productDetails = payload;
    },

    setSelectedCategory: (state, { payload }) => {
      state.selectedCategory = payload;
    },

    clearCart: (state) => {
      state.carts = [];
    },

    addToCart: (state, { payload }) => {
      const item = state.products.find((product) => product.id === payload.id);

      const inCart = state.carts.find((item) =>
        item.id === payload.id ? true : false
      );

      state.carts = inCart
        ? state.carts.map((item) =>
            item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
          )
        : [...state.carts, { ...item, qty: 1 }];

      // console.log(state.carts);
    },

    adjustQty: (state, { payload }) => {
      state.carts = state.carts.map((item) =>
        item.id === payload.id ? { ...item, qty: payload.qty } : item
      );
    },

    removeItemFromCart: (state, { payload }) => {
      state.carts = state.carts.filter((item) => item.id !== payload.id);
    },
  },

  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },

    [getProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.error = false;
      // console.log(payload);
      state.loading = false;
    },

    [getProducts.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },

    [getProductByCategory.pending]: (state) => {
      state.loading = true;
    },

    [getProductByCategory.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.error = false;
      state.loading = false;
    },

    [getProductByCategory.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },

    [getCategories.pending]: (state) => {},

    [getCategories.fulfilled]: (state, { payload }) => {
      state.categories = payload;
    },

    [getCategories.rejected]: (state) => {},
  },
});

export const {
  addProducts,
  saveProductDetails,
  clearCart,
  addToCart,
  adjustQty,
  removeItemFromCart,
  setSelectedCategory,
} = productSlice.actions;

export default productSlice.reducer;
