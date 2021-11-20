import React, { useEffect } from "react";
import Auth from "../../utils/auth";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/react-hooks";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import {
  CartContainer,
  IconWrap,
  CartIcon,
} from "../../components/Checkout/CheckoutElements";
import CartItems from "../../components/CartItems/CartItems";
import {
  CartBody,
  CartHeaderWraper,
  CartHeader,
  CartHeaderItem,
  CloseItem,
  CloseIcon,
  BtnLink,
  BtnCheckout,
} from "./CartItem.Elements";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

export default function Cartbar() {
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

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

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

  if (!state.cartOpen) {
    return (
      <CartContainer onClick={toggleCart}>
        <IconWrap role="img" aria-label="cart">
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
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItems key={item._id} item={item} />
          ))}

          <div>
            <strong>Total: ${calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              <BtnCheckout onClick={submitCheckout}>Checkout</BtnCheckout>
            ) : (
              <>
                <BtnLink to="/login">
                  <span>(log in to check out)</span>
                </BtnLink>
              </>
            )}
          </div>
        </div>
      ) : (
        <h3>You haven't added anything to your cart yet!</h3>
      )}
    </CartBody>
  );
}
