import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { TOGGLE_CART } from "../../utils/actions";
import { Container } from "../../globalStyles";

// import { useLazyQuery } from "@apollo/react-hooks";
// import { QUERY_CHECKOUT } from "../../utils/queries";
// import { idbPromise } from "../../utils/helpers";
import { FaTimes } from "react-icons/fa";

function Cartbar() {
  const dispatch = useDispatch();

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  return (
    <CartContainer>
      <CartHeaderWraper>
        <CartHeader>Bag</CartHeader>
        <CartHeaderItem>
          <CloseItem>
            <CloseIcon onClick={toggleCart} />
          </CloseItem>
        </CartHeaderItem>
      </CartHeaderWraper>

      <Checkout>Checkout</Checkout>
    </CartContainer>
  );
}

const CartContainer = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: block;
  position: absolute;
  align-items: center;
  list-style: none;
  text-align: center;
  flex-direction: column;
  width: 100%;
  max-width: 200px;
  height: 90vh;
  top: 80px;
  right: 0px;
  opacity: 1;
  transition: all 0.5s ease;
  box-shadow: 0px 0px red, 0em 0 0.9em gray;
`;

export const CartHeaderWraper = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  color: black;
  border-bottom: 1px solid gray;
  ${Container}
`;

export const CartHeader = styled.div`
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;
export const CartHeaderItem = styled.div`
  border-bottom: 2px solid transparent;

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const CloseItem = styled.div`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  &:hover {
    color: #4b59f7;
  }
`;

const CloseIcon = styled(FaTimes)`
  display: block;
  position: absolute;
  font-size: 1.5rem;
  cursor: pointer;
  color: black;
`;

const Checkout = styled.button`
background-color; black;
width: 10rem;
`;


export default Cartbar;
