import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/react-hooks";
import { QUERY_CHECKOUT } from "../../utils/queries";
// import { FaPlus, FaMinus } from "react-icons/fa";
import Announcement from "../../components/Announcement/Announcement";
import {
  Container,
  Wrapper,
  Title,
  Top,
  TopButton,
  TopTexts,
  // TopText,
  Bottom,
  Button2,
  Info,
  // Product,
  // ProductDetail,
  // Image,
  // Details,
  // ProductName,
  // ProductId,
  // ProductColor,
  // ProductSize,
  // PriceDetail,
  // ProductAmount,
  // ProductAmountContainer,
  // ProductPrice,
  // Hr,
  Summary,
  MobileSummary,
  SummaryTitle,
  SummaryItemText,
  SummaryItem,
  SummaryItemPrice,
} from "./CheckoutElements";
import CartItem from "../CartItem";
// import { Button } from "../../globalStyles";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Auth from "../../utils/auth";
import { idbPromise } from "../../utils/helpers";
import {
  //  TOGGLE_CART,
  ADD_MULTIPLE_TO_CART,
} from "../../utils/actions";
import { CheckLink } from "./CheckoutElements";

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

  // function toggleCart() {
  //   dispatch({ type: TOGGLE_CART });
  // }

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
          <Link to="/">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>{/* <TopText>Shopping Bag(2)</TopText> */}</TopTexts>

          {Auth.loggedIn() ? (
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          ) : (
            <>
              <CheckLink to="/login">
                <TopButton type="filled">CHECKOUT NOW</TopButton>
              </CheckLink>
            </>
          )}
        </Top>
        <Bottom>
          <Info>
            {state.cart.length ? (
              <>
                {state.cart.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}

                <Summary>
                  <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                  <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$ 80</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>TAXES</SummaryItemText>
                    <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>Course Discount</SummaryItemText>
                    <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>${calculateTotal()}</SummaryItemPrice>
                  </SummaryItem>
                  {Auth.loggedIn() ? (
                    <Button2 onClick={submitCheckout}>CHECKOUT NOW</Button2>
                  ) : (
                    <>
                      <CheckLink to="/login">
                        <Button2>CHECKOUT NOW</Button2>
                      </CheckLink>
                      <span>(log in to check out)</span>
                    </>
                  )}
                </Summary>
              </>
            ) : (
              <>
                <h3>You haven't added anything to your cart yet!</h3>
                <MobileSummary>
                  <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                  <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$ 80</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>TAXES</SummaryItemText>
                    <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>Course Discount</SummaryItemText>
                    <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>$ 80</SummaryItemPrice>
                  </SummaryItem>
                  {Auth.loggedIn() ? (
                    <Button2>CHECKOUT NOW</Button2>
                  ) : (
                    <>
                      <CheckLink to="/login">
                        <Button2>CHECKOUT NOW</Button2>
                      </CheckLink>
                    </>
                  )}
                </MobileSummary>
              </>
            )}
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>TAXES</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Course Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            {Auth.loggedIn() ? (
              <Button2>CHECKOUT NOW</Button2>
            ) : (
              <>
                <CheckLink to="/login">
                  <Button2>CHECKOUT NOW</Button2>
                </CheckLink>
              </>
            )}
          </Summary>
        </Bottom>
        {/* <Bottom>
          <Info>
            <CartItem />
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://via.placeholder.com/50X50" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JavaScript
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Courses:</b> 1
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <FaPlus />
                  <ProductAmount>1</ProductAmount>
                  <FaMinus />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          
        </Bottom> */}
      </Wrapper>
    </Container>
  );
};

export default Cart;
