import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_USER } from "../../utils/queries";
import {
  HistoryContainer,
  ItemWrapper,
  ItemInfoWrapper,
  ItemInfo,
  Img,
  Container
} from "./History.Elements";
import { MsgContainer } from "../Products/ProductsElements";

export default function HistorySection() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <HistoryContainer>
      <Link to="/">Start Shopping</Link>

        {user ? (
          
          <>
            <h2>
              Order History for,
              <span>
                {user.firstName} {user.lastName}
              </span>
            </h2>
            {user.orders.length===0 ? (
              <MsgContainer>
                <h2>You haven't purchased any products yet!</h2>
              </MsgContainer> 
            ): null}

            {user.orders.map((order) => (
            <ItemWrapper key={order._id}>
              <h3>
                {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
              </h3>
              <ItemInfoWrapper>
                {order.products.map(({ _id, image, name, price }, index) => (
                  <ItemInfo key={index}>
                    <Link to={`/products/${_id}`}>
                      <Img alt={name} src={`/images/${image}`} />
                      <p>{name}</p>
                    </Link>
                    <div>
                      <span>${price}</span>
                    </div>
                  </ItemInfo>
                ))}
              </ItemInfoWrapper>
            </ItemWrapper>
          ))}
           
          </>
        ) : (
          <>
            <MsgContainer>
              <h3>You haven't added any products yet!</h3>
            </MsgContainer>
          </>
        )}
      </HistoryContainer>
    </>
  );
}
