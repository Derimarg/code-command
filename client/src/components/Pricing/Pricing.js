import React, { useEffect } from "react";
import { Button } from "../../globalStyles";
import { QUERY_PRODUCTS } from "../../utils/queries";
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

  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
          {state.products.filter((product, index) => index > 11).map((product) => (
              <PricingCard to={`/products/${product._id}`}>
                <PricingCardInfo>
                  <PricingCardIcon>
                    {product.image}
                  </PricingCardIcon>
                  <PricingCardPlan>{product.name}</PricingCardPlan>
                  <PricingCardCost>${product.price}</PricingCardCost>
                  <PricingCardLength>per month</PricingCardLength>
                  <PricingCardFeatures>
                    <PricingCardFeature>Unlock all courses in this cateogry,</PricingCardFeature>
                    <PricingCardFeature>For one low monthly price.</PricingCardFeature>
                    <PricingCardFeature>No contract required.</PricingCardFeature>
                  </PricingCardFeatures>
                  <Button primary>View Details</Button>
                </PricingCardInfo>
              </PricingCard>
            ))}
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;