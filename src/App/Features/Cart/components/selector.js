import { createSelector } from "@reduxjs/toolkit";
const cartItemSelector = (state) => state.cart.cartItems;
//count number of product in cart
export const cartItemsCountSelector = createSelector(
  cartItemSelector,
  (cartItems) => cartItems.reduce((count, item) => count + item.quantity, 0)
);

// calculate  total of cart
export const cartTotalSelector = createSelector(cartItemSelector, (cartItems) =>
  cartItems.reduce((total, item) => {
    var price = item.price.newPrice;
    return total + price * item.quantity;
  }, 0)
);
