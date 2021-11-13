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
        <CartTitle>title: JavaScript</CartTitle>
        <div>Price: $20.00</div>
        <div>
          <span>Qty:</span>
          <Input
            type="number"
            placeholder="1"
            // onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            // onClick={() => removeFromCart(item)}
          >
            <TrashIcon />
          </span>
        </div>
      </CartInfo>
    </CartWrap>
  );
};

export default CartItems;
