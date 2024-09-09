import { createSelector } from "reselect";

const selectCartReducer = state => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  cart => {console.log(cart.cartItems)
    return cart.cartItems}
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  cart => {
    // console.log("cart.isCartOpen", cart.isCartOpen) 
    return cart.isCartOpen}
);

export const selectCartCount = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
 