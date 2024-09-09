import {
  CartItemContainer,
  ItemDetails,
  CartItemName,
} from "./cart-item.style.jsx";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  // console.log(imageUrl)
  // console.log(cartItem)
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <CartItemName>{name}</CartItemName>
        <span>
          {quantity} X ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
