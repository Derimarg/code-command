import React from "react";
import { TrashIcon, Input } from "../../components/CartItems/ItemsElement"
import {
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductSize,
  PriceDetail,
  ProductAmountContainer,
  ProductPrice,
} from "../../components/Checkout/CheckoutElements";
import { useDispatch } from "react-redux";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeItem = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });

    idbPromise("cart", "delete", { ...item });
  };
 
  const onChange = (e) => {
    const value = e.target.value;
    if (value === "0") {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id,
      });
      idbPromise("cart", "delete", { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value),
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: parseInt(value) });
    }
  };

  return (
    <Product>
      <ProductDetail>
        <Image src={`/images/${item.image}`} alt="" />
        <Details>
          <ProductName>
            <b>Product:</b> {item.name}
          </ProductName>
          <ProductSize>
          </ProductSize>
        </Details>
      </ProductDetail>
      <PriceDetail>
        <ProductAmountContainer>
          <div>
          <span>Qty:</span>
          <Input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span role="img" aria-label="trash" onClick={() => removeItem(item)}>
            <TrashIcon />
          </span>
        </div>
        </ProductAmountContainer>
        <ProductPrice>${item.price}</ProductPrice>
      </PriceDetail>
    </Product>
  );
};

export default CartItem;
