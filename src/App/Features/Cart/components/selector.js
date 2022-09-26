import { createSelector } from "@reduxjs/toolkit";
import { Format } from "../../../Hook/fomatPrice";
const cartItemSelector = (state) => state.cart.cartItems;
//count number of product in cart
export const cartItemsCountSelector = createSelector(
  cartItemSelector,
  (cartItems) => cartItems.reduce((count, item) => count + item.quantity, 0)
);

// calculate  total of cart
export const cartTotalSelector = createSelector(cartItemSelector, (cartItems) =>
  cartItems.reduce((total, item) => {
    const str = Format(item.price.newPrice);
    return total + Number(str) * item.quantity;
  }, 0)
);
