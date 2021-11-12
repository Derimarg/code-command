import React, {
  useState,
  //  useEffect
} from "react";
import { Link } from "react-router-dom";
import {
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
} from "../Products/ProductsElements";

// import { GiRock } from "react-icons/gi";
import { InfoSec2 } from "../InfoSection/InfoSection.elements";
import { Button } from "../../globalStyles";
import SearchContainer from "../Search/SearchContainer";
import { FooterSubscription } from "../Footer/Footer.elements";
import Announcement from "../Announcement/Announcement";
import Auth from "../../utils/auth";

export default function CoursesSection({
  heading,
  description,
  data,
  primary,
  buttonLabel,
  lightBg,
}) {
  // function ShowButtom(data) {
  //   if (Auth.loggedIn()) {
  //     return (

  //      {data.map((product, index) => {return()} )

  //   } else {
  //     return null;
  //   }
  // }

  const [button, setButtom] = useState(true);
  const showButton = () => {
    if (Auth.loggedIn) {
      setButtom(true);
    } else {
      setButtom(false);
    }
  };

  // useEffect(() => {
  //   showButton();
  // }, []);

  return (
    <>
      <Announcement />
      <InfoSec2 lightBg={lightBg}>
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductsDesc>{description}</ProductsDesc>
        <Link to="/">
          <Button fontBig primary={primary}>
            {buttonLabel}
          </Button>
        </Link>
      </InfoSec2>
      <FooterSubscription>
        <SearchContainer />
      </FooterSubscription>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                {/* <ProductButton>{product.button}</ProductButton> */}

                {button ? null : (
                  <ProductButton>{product.button}</ProductButton>
                )}
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </>
  );
}
