import CartActionTypes from "./action-types";

const initialState = {
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCTS:
      const productIsAlredyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );
      if (productIsAlredyInCart) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      }

      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };
    case CartActionTypes.REMOVE_PRODUCTS:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    case CartActionTypes.INCREMENT_PRODUCTS:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    case CartActionTypes.DECREMENT_PRODUCTS:
      const { id } = action.payload;
      const productForDecrement = state.products.find(
        (product) => product.id === id
      );
      if (!productForDecrement) return state;
      if (productForDecrement.quantity === 1) {
        return {
          ...state,
          products: state.products.filter((product) => product.id !== id),
        };
      }
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
