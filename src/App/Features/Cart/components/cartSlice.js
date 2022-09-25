import { createSlice } from "@reduxjs/toolkit";
import storageKeys from "../../../constants/storageKeys";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: JSON.parse(localStorage.getItem(storageKeys.PRODUCT)) || [],
  },
  reducers: {
    addTocart(state, action) {
      const newItem = action.payload;
      const index = state.cartItems.findIndex((x) => newItem.id === x.id);
      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity ;
        localStorage.setItem(
          storageKeys.PRODUCT,
          JSON.stringify(state.cartItems)
        );
      } else {
        state.cartItems.push(newItem);
        localStorage.setItem(
          storageKeys.PRODUCT,
          JSON.stringify(state.cartItems)
        );
      }
    },
    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === id);
      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
        localStorage.setItem(
          storageKeys.PRODUCT,
          JSON.stringify(state.cartItems)
        );
      }
    },
    removeFormCart(state, action) {
      const idNeddToRemove = action.payload;
      state.cartItems = state.cartItems.filter((x) => x.id !== idNeddToRemove);
      localStorage.setItem(
        storageKeys.PRODUCT,
        JSON.stringify(state.cartItems)
      );
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addTocart, setQuantity, removeFormCart } = actions;
export default reducer; //default export
