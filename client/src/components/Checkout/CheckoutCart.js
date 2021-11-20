import React, { useEffect } from "react";
import { BtnLink } from "../../containers/cart/Cartbar";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/react-hooks";
import { QUERY_CHECKOUT } from "../../utils/queries";
import Announcement from "../../components/Announcement/Announcement";
import {
  Container,
  Wrapper,
  Title,
  Top,
  TopButton,
  Bottom,
  Info,
  MsgContainer,
} from "./CheckoutElements";
import CartItem from "../CartItem";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Auth from "../../utils/auth";
import { idbPromise } from "../../utils/helpers";
import { ADD_MULTIPLE_TO_CART } from "../../utils/actions";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Cart = () => {
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

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  return (
    <Container>
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Info>
            {state.cart.length ? (
              <>
                {state.cart.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
              </>
            ) : (
              <MsgContainer>
                <h3>You haven't added anything to your cart yet!</h3>
              </MsgContainer>
            )}
          </Info>
        </Top>
        <Bottom>
          <Link to="/">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>

          {Auth.loggedIn() ? (
            <TopButton onClick={submitCheckout} type="filled">
              CHECKOUT NOW
            </TopButton>
          ) : (
            <>
              <BtnLink to="/login">
                <span>(log in to check out)</span>
              </BtnLink>
            </>
          )}
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
