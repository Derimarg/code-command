import React, { useEffect } from "react"; //  useEffect // useState,
import { Link } from "react-router-dom";
import {
  ProductWrapper,
  ProductsHeading,
  ProductsDesc,
  MsgContainer,
} from "../Products/ProductsElements";
import CourseItem from "../CourseItem/index";
import { InfoSec2 } from "../InfoSection/InfoSection.elements";
import { Button } from "../../globalStyles";
import { FooterSubscription } from "../Footer/Footer.elements";
import Announcement from "../Announcement/Announcement";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import Filters from "../Filters";

export default function CoursesSection({
  heading,
  description,
  // data2,
  primary,
  buttonLabel,
  lightBg,
}) {
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
      idbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
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
        {/* <SearchContainer /> */}
        <Filters />
      </FooterSubscription>
      <ProductWrapper>
        {state.products.length ? (
          <>
            {filterCourses().map((product) => (
              <CourseItem
                key={product._id}
                _id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
              />
            ))}
          </>
        ) : (
          <MsgContainer>
            <h3>You haven't added any products yet!</h3>
          </MsgContainer>
        )}
        {loading ? <img src="" alt="loading" /> : null}
      </ProductWrapper>
    </>
  );
}
