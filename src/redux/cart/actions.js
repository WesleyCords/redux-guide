import CartActionTypes from "./action-types";

export const addProductsToCart = (payload) => ({
  type: CartActionTypes.ADD_PRODUCTS,
  payload,
});

export const removeProductsFromCart = (payload) => ({
  type: CartActionTypes.REMOVE_PRODUCTS,
  payload,
});

export const decrementProductsFromCart = (payload) => ({
  type: CartActionTypes.DECREMENT_PRODUCTS,
  payload,
});

export const incrementProductsFromCart = (payload) => ({
  type: CartActionTypes.INCREMENT_PRODUCTS,
  payload,
});
