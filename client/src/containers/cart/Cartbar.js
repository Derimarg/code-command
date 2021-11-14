import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/react-hooks";
import { useSelector, useDipatch } from "react-redux";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import { QUERY_CHECKOUT } from "../../utils/queries";
// import { idbPromise } from "../../utils/helpers";
import { FaTimes } from "react-icons/fa";
import {
  CartContainer,
  IconWrap,
  CartIcon,
} from "../../components/Checkout/CheckoutElements";
import CartItems from "../../components/CartItems/CartItems";
// import OutsideClick from "../../settings";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

function Cartbar() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  // const boxRef = useRef(null);
  // const boxOutsideClick = OutsideClick(boxRef);

  if (!state.cartOpen) {
    return (
      <CartContainer
        // ref={boxRef}
        onClick={toggleCart}
      >
        <IconWrap role="img" aria-label="trash">
          <CartIcon />
        </IconWrap>
      </CartContainer>
    );
  }

  return (
    <CartBody>
      <CartHeaderWraper>
        <CartHeader>Bag</CartHeader>
        <CartHeaderItem>
          <CloseItem>
            <CloseIcon onClick={toggleCart} />
          </CloseItem>
        </CartHeaderItem>
      </CartHeaderWraper>
      <CartItems />

      {Auth.loggedIn() ? (
        <BtnCheckout
        //  onClick={submitCheckout}
        >
          CHECKOUT NOW
        </BtnCheckout>
      ) : (
        <>
          <BtnLink to="/login">
            <span>(log in to check out)</span>
          </BtnLink>
        </>
      )}
    </CartBody>
  );
}

const CartBody = styled.div`
  position: fixed;
  top: 10%;
  right: 0%;
  min-width: 30%;
  max-width: 40%;
  max-height: 60%;
  overflow: auto;
  padding: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  border-bottom-left-radius: 0.5rem;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  opacity: 1;
  transition: all 0.5s ease;

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const CartTitle = styled.h2`
  font-size: 1.5rem;
  border-bottom: 1px solid #bfbfbf;
  padding-bottom: 0.5rem;
  margin: 1rem 0;
`;

// min-width: 400px;
//   backdrop-filter: blur(35px);
//   background-color: rgba(255, 255, 255, 0.8);
//   height: 100%;
//   display: block;
//   position: absolute;
//   align-items: center;
//   list-style: none;
//   text-align: center;
//   flex-direction: column;
//   width: 100%;
//   max-width: 200px;
//   height: 90vh;
//   top: 80px;
//   right: 0px;
//   opacity: 1;
//   transition: all 0.5s ease;
//   box-shadow: 0px 0px red, 0em 0 0.9em gray;

export const CartHeaderWraper = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: 0.1rem;
  height: 60px;
  color: black;
  border-bottom: 1px solid #d9d9d9;
  ${Container}
`;

export const CartHeader = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
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

  @media screen and (max-width: 500px) {
    font-size: 1rem;
    margin-left: 3.5rem;
  }
`;

const Checkout = styled.button`
background-color; black;
width: 10rem;
`;

const CartItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const BtnLink = styled(Link)`
  text-align: center;

  &:hover {
    color: blue;
  }

  span {
    text-align: center;
    font-size: 1rem;
  }

  @media screen and (max-width: 960px) {
    font-size: 0.7rem;
  }
`;

const BtnCheckout = styled.button`
  font-size: 1rem;
  text-decoration: none;
  padding: 0.2rem 1rem;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0 1px;
  background: #4b59f7;
`;

export default Cartbar;

{
  /* <CartContainer>
      <CartHeaderWraper>
        <CartHeader>Shopping Bag</CartHeader>
        <CartHeaderItem>
          <CloseItem>
            <CloseIcon onClick={toggleCart} />
          </CloseItem>
        </CartHeaderItem>
      </CartHeaderWraper>
      <CartItem />
      <CartItem>Total: $20</CartItem>
      <CartItem>Total: $20</CartItem>
      <CartItem>Total: $20</CartItem>

      {Auth.loggedIn() ? (
        <BtnCheckout
        //  onClick={submitCheckout}
        >
          CHECKOUT NOW
        </BtnCheckout>
      ) : (
        <>
          <BtnLink to="/login">
            <span>(log in to check out)</span>
          </BtnLink>
        </>
      )} */
}
// </CartContainer>
