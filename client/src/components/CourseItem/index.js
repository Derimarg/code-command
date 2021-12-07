import React from "react";
import { Link } from "react-router-dom";
import {
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "../../components/Products/ProductsElements";
import { pluralize } from "../../utils/helpers";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

export default function CourseItem(item) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { image, name, _id, price, quantity } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <ProductCard>
      <Link to={`/products/${_id}`}>
        <ProductImg src={`/images/${image}`} alt={name} />
      </Link>

      <ProductInfo>
        <Link to={`/products/${_id}`} style={{ textDecoration: "none" }}>
          <ProductTitle>{name}</ProductTitle>
        </Link>
        <ProductDesc>
          {/* "courses spaces" looked weird so I changed it to "spots available" */}
          {quantity} {!pluralize("course", quantity)} spots available
        </ProductDesc>
        <ProductPrice>${price}</ProductPrice>
        <ProductButton onClick={addToCart}>Add to cart</ProductButton>
      </ProductInfo>
    </ProductCard>
  );
}
