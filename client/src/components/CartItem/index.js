import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import {
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductColor,
  ProductSize,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
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
          <ProductId>
            <b>ID:</b> 93813718293
          </ProductId>
          <ProductColor color="black" />
          <ProductSize>
            <b>Courses:</b> 5
          </ProductSize>
        </Details>
      </ProductDetail>
      <PriceDetail>
        <ProductAmountContainer>
          <FaPlus />
          <ProductAmount>1</ProductAmount>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <FaMinus onClick={() => removeItem(item)} />
        </ProductAmountContainer>
        <ProductPrice>{item.price}</ProductPrice>
      </PriceDetail>
    </Product>
  );
};

export default CartItem;
