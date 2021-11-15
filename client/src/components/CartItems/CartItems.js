import React from "react";
import {
  CartWrap,
  Img,
  CartInfo,
  CartTitle,
  Input,
  TrashIcon,
} from "./ItemsElement";

import { useDispatch } from "react-redux";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { removeHyphensAndCapitalize } from "../../utils/helpers";

const CartItems = ({ item }) => {
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
    <CartWrap>
      <div>
        <Img
          //update image src to src={`/images/${item.image}`} for real images
          src={item.image} //only works for placeholder images
          alt={removeHyphensAndCapitalize(item.name)}
        />
      </div>
      <CartInfo>
        <CartTitle>{item.name}</CartTitle>
        <span>${item.price}</span>
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
      </CartInfo>
    </CartWrap>
  );
};

export default CartItems;
