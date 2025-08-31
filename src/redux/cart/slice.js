import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      const productIsAlredyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );
      if (productIsAlredyInCart) {
        state.products = state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        return;
      }
      state.products = [...state.products, { ...action.payload, quantity: 1 }];
    },
    increaseProductQuantity: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    },
    decreaseProductQuantity: (state, action) => {
      const { id } = action.payload;
      const productIsAlredyInCart = state.products.find(
        (product) => product.id === id
      );
      if (!productIsAlredyInCart) return state;
      if (productIsAlredyInCart.quantity === 1) {
        state.products = state.products.filter((product) => product.id !== id);
        return;
      }
      state.products = state.products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
    },
    removeProducts: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const {
  addProducts,
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProducts,
} = cartSlice.actions;

export default cartSlice.reducer;
