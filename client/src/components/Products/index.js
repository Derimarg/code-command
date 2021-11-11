import React from "react";
import { Link } from "react-router-dom";
import {
  // ProductsContainer,
  ProductsWrapper,
  ProductWrapper,
  ProductsHeading,
  ProductsDesc,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./ProductsElements";
import { InfoSec2 } from "../../components/InfoSection/InfoSection.elements";

import { Button } from "../../globalStyles";

const Products = ({
  heading,
  description,
  data,
  primary,
  buttonLabel,
  lightBg,
}) => {
  return (
    <>
      <InfoSec2 lightBg={lightBg}>
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductsDesc>{description}</ProductsDesc>
        <Link to="/">
          <Button fontBig primary={primary}>
            {buttonLabel}
          </Button>
        </Link>
      </InfoSec2>
      {/* <ProductsContainer> */}
      <ProductsWrapper></ProductsWrapper>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
      {/* </ProductsContainer> */}
    </>
  );
};

export default Products;
