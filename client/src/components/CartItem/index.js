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


const CartItem = ({ item }) => {
  return (
    <Product>
      <ProductDetail>
        <Image src="https://via.placeholder.com/50X50" />
        <Details>
          <ProductName>
            <b>Product:</b> Full Stack Develoment
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
          <FaMinus />
        </ProductAmountContainer>
        <ProductPrice>$ 500</ProductPrice>
      </PriceDetail>
    </Product>
  );
};

export default CartItem;
