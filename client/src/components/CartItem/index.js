import React from "react";
import { TrashIcon, Input } from "../../components/CartItems/ItemsElement";
import { Container } from "../../globalStyles";

import {
  InfoSecCart,
  InfoRow2,
  InfoColumn,
  TextWrapper,
  Subtitle,
  ImgWrapperCart,
  ImgCart,
} from "../InfoSection/InfoSection.elements";
import { useDispatch } from "react-redux";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item, primary, lightTextDesc, imgStart, start }) => {
  const dispatch = useDispatch();

  const removeItem = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });

    idbPromise("cart", "delete", { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === "0") {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id,
      });
      idbPromise("cart", "delete", { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value),
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: parseInt(value) });
    }
  };

  return (
    <InfoSecCart>
      <Container>
        <InfoRow2 imgStart={imgStart}>
          <InfoColumn>
            <TextWrapper>
              <Subtitle
                style={{ fontWeight: "bold" }}
                lightTextDesc={lightTextDesc}
              >
                {item.name}
              </Subtitle>
              <Subtitle lightTextDesc={lightTextDesc}>
                <strong>Price: </strong>${item.price}
              </Subtitle>
              <>
                <span style={{ color: "#000" }}>Qty: </span>
                <Input
                  type="number"
                  placeholder="1"
                  value={item.purchaseQuantity}
                  onChange={onChange}
                />
                <span
                  role="img"
                  aria-label="trash"
                  onClick={() => removeItem(item)}
                >
                  <TrashIcon />
                </span>
              </>
            </TextWrapper>
          </InfoColumn>
          <ImgWrapperCart start={start}>
            <ImgCart src={`/images/${item.image}`} alt="item details" />
          </ImgWrapperCart>
        </InfoRow2>
      </Container>
    </InfoSecCart>
  );
};

export default CartItem;
