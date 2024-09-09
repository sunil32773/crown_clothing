import "./product-card.style.scss";

import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, id, price, imageUrl } = product;


  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)

  // console.log("products")
  // console.log(product)
  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
    // updateCartCount();
    // console.log(cartItems);
  };
  // console.log(imageUrl)
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>
        {" "}
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
