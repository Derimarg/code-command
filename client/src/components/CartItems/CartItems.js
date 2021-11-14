import React from "react";
import {
  CartWrap,
  Img,
  CartInfo,
  CartTitle,
  Input,
  TrashIcon,
} from "./ItemsElement";

const CartItems = () => {
  return (
    // style here later
    <CartWrap>
      <div>
        <Img src="https://via.placeholder.com/300X400" alt="" />
      </div>
      <CartInfo>
        <CartTitle>JavaScript</CartTitle>
        <span>$20.00</span>
        <div>
          <span>Qty:</span>
          <Input type="number" placeholder="1" />
          <span role="img" aria-label="trash">
            <TrashIcon />
          </span>
        </div>
      </CartInfo>
    </CartWrap>
  );
};

export default CartItems;
