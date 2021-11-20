import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_USER } from "../../utils/queries";
import { HistoryContainer } from "./History.Elements";
import {
  ProductWrapper,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductPrice,
  MsgContainer,
} from "../Products/ProductsElements";

export default function HistorySection() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <HistoryContainer>
        <Link
          to="/"
          style={{
            fontSize: "1.5rem",
            color: "#009999",
          }}
        >
          Start Shopping
        </Link>

        {user ? (
          <>
            <h2 style={{ margin: "2rem" }}>
              Order History for,
              <span style={{ color: "#4B59F7" }}>
                {user.firstName} {user.lastName}
              </span>
            </h2>
            {user.orders.length === 0 ? (
              <MsgContainer>
                <h2>You haven't purchased any products yet!</h2>
              </MsgContainer>
            ) : null}

            {user.orders.map((order) => (
              <>
                <h3 style={{ margin: "2rem" }}>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <ProductWrapper key={order._id}>
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <ProductCard key={index}>
                      <Link to={`/products/${_id}`}>
                        <ProductImg src={`/images/${image}`} alt={name} />
                      </Link>

                      <ProductInfo>
                        <Link
                          to={`/products/${_id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <ProductTitle>{name}</ProductTitle>
                        </Link>
                        <ProductPrice>${price}</ProductPrice>
                      </ProductInfo>
                    </ProductCard>
                  ))}
                </ProductWrapper>
              </>
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
