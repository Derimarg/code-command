import React, { useEffect } from "react";
import { Button } from "../../globalStyles";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { MsgContainer } from "../../components/Products/ProductsElements";
// import { GiCrystalBars, GiCutDiamond } from "react-icons/gi";
import { GiRock } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/react-hooks";
import { idbPromise } from "../../utils/helpers";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.elements";

function Pricing() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      setTimeout(() => {
        idbPromise("products", "get").then((products) => {
          dispatch({
            type: UPDATE_PRODUCTS,
            products: products,
          });
        });
      }, 5000);
    }
  }, [data, loading, dispatch]);

  function filterCourses() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            {state.products.length ? (
              <>
                {filterCourses().map((product) => (
                  <PricingCard to="/sign-up">
                    <PricingCardInfo>
                      <PricingCardIcon>
                        <GiRock />
                      </PricingCardIcon>
                      <PricingCardPlan>{product.name}</PricingCardPlan>
                      <PricingCardCost>${product.price}</PricingCardCost>
                      <PricingCardLength>per month</PricingCardLength>
                      <PricingCardFeatures>
                        <PricingCardFeature>100 New Users</PricingCardFeature>
                        <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                        <PricingCardFeature>Retargeting analytics</PricingCardFeature>
                      </PricingCardFeatures>
                      <Button primary>View Plan</Button>
                    </PricingCardInfo>
                  </PricingCard>
                ))}
              </>
            ) : (
              <MsgContainer>
                <h3>You haven't added any products yet!</h3>
              </MsgContainer>
            )}

          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
{/* <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Gold Rush</PricingCardPlan>
                <PricingCardCost>$29.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>1000 New Users</PricingCardFeature>
                  <PricingCardFeature>$50,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Lead Gen Analytics</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Diamond Kings</PricingCardPlan>
                <PricingCardCost>$49.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Unlimited Users</PricingCardFeature>
                  <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                  <PricingCardFeature>24/7 Support</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard> */}