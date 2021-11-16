import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "../../globalStyles";

import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from "../../utils/actions";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import {
  InfoSec,
  InfoRow2,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "../InfoSection/InfoSection.elements";

import { ButtonDetail } from "../../containers/details/Details.Elements";

export default function Details({
  primary,
  lightBg,
  lightTopLine,
  lightText,
  lightTextDesc,
  buttonAdd,
  buttonRemove,
  imgStart,
  start,
}) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
    // in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise("products", "get").then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });

      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });

      idbPromise("cart", "put", { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise("cart", "delete", { ...currentProduct });
  };
  return (
    <>
      {currentProduct && cart ? (
        <>
          <InfoSec lightBg={lightBg}>
            <Container>
              <InfoRow2 imgStart={imgStart}>
                <InfoColumn>
                  <TextWrapper>
                    <TopLine lightTopLine={lightTopLine}>
                      {currentProduct.name}
                    </TopLine>
                    <Heading lightText={lightText}></Heading>
                    <Subtitle lightTextDesc={lightTextDesc}>
                      {currentProduct.description}
                    </Subtitle>
                    <Subtitle lightTextDesc={lightTextDesc}>
                      <strong>Price: </strong>${currentProduct.price}
                    </Subtitle>
                    <p>
                      <strong>Price:</strong>${currentProduct.price}{" "}
                    </p>

                    <>
                      <ButtonDetail
                        big
                        fontBig
                        primary={primary}
                        onClick={addToCart}
                      >
                        {buttonAdd}
                      </ButtonDetail>
                      <ButtonDetail
                        big
                        fontBig
                        primary={primary}
                        disabled={
                          !cart.find((p) => p._id === currentProduct._id)
                        }
                        onClick={removeFromCart}
                      >
                        {buttonRemove}
                      </ButtonDetail>
                    </>
                  </TextWrapper>
                </InfoColumn>
                <InfoColumn>
                  <ImgWrapper start={start}>
                    <Img
                      src={`/images/${currentProduct.image}`}
                      alt={currentProduct.name}
                    />
                  </ImgWrapper>
                </InfoColumn>
              </InfoRow2>
            </Container>
          </InfoSec>
        </>
      ) : null}
      {/* // add image loading */}
      {loading ? <img src="" alt="loading" /> : null}
    </>
  );
}
