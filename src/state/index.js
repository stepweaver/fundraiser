import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    addToCart: (state, action) => {
      const item = action.payload.item;
      if (item && item.price !== undefined) {
        state.cart = [...state.cart, action.payload.item];
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.objectId !== action.payload.id);
    },
    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.objectId === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },
    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.objectId === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    clearCart: (state) => {
      state.cart = [];
    }
  }
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;