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

    return;
  }

  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
          <PricingCard to="/courses">
              <PricingCardInfo>
                <PricingCardIcon>
                  
                </PricingCardIcon>
                <PricingCardPlan>Full Stack Subscription</PricingCardPlan>
                <PricingCardCost>$89.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Unlocks All Full Stack</PricingCardFeature>
                  <PricingCardFeature>Web Development Courses</PricingCardFeature>
                  <PricingCardFeature>Fow One Low Monthly Price</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/courses">
              <PricingCardInfo>
                <PricingCardIcon>
                  
                </PricingCardIcon>
                <PricingCardPlan>Computer Science Subscription</PricingCardPlan>
                <PricingCardCost>$89.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Unlocks All</PricingCardFeature>
                  <PricingCardFeature>Computer Science Courses</PricingCardFeature>
                  <PricingCardFeature>For One Low Monthly Price</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard> 
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;


            // {state.products.reduce((product, index) => index > 12).map((product) => (
            //   <PricingCard to="/sign-up">
            //     <PricingCardInfo>
            //       <PricingCardIcon>
            //         <GiRock />
            //       </PricingCardIcon>
            //       <PricingCardPlan>{product.name}</PricingCardPlan>
            //       <PricingCardCost>${product.price}</PricingCardCost>
            //       <PricingCardLength>per month</PricingCardLength>
            //       <PricingCardFeatures>
            //         <PricingCardFeature>100 New Users</PricingCardFeature>
            //         <PricingCardFeature>$10,000 Budget</PricingCardFeature>
            //         <PricingCardFeature>Retargeting analytics</PricingCardFeature>
            //       </PricingCardFeatures>
            //       <Button primary>View Plan</Button>
            //     </PricingCardInfo>
            //   </PricingCard>
            // ))}

