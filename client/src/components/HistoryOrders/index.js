import React from 'react';
import { Link } from 'react-router-dom';
import Auth from "../../utils/auth";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from '../../utils/queries';
import { CheckLink, TopButton } from "../Checkout/CheckoutElements";
import {
    Container,
    Wrapper,
    Title,
    Details,
    Product,
    ProductDetail,
    ProductName,
    ProductId,
    ProductSize
} from "./HistoryElements";

function HistoryOrders({ item }) {
    console.log(item)
    const { data } = useQuery(QUERY_USER);
    let user; 

    if (data) {
        user = data.user;
    }
    
    return(
        <Container> 
            <Wrapper>
                <Title>Order History</Title>
                {user ? (
                    <Details>
                        <Title>
                        {/* {new Date(parseInt(order.purchaseDate)).toLocaleDateString()} */}
                        </Title>
                        <ProductName>
                        <b>Product:</b> {item}
                        </ProductName>
                        <ProductId>
                            <b>ID:</b> ADD ID HERE
                        </ProductId>
                        <ProductSize>
                            <b>Courses:</b> NUMBER OF COURSES HERE
                        </ProductSize>
                    </Details>
                ) : (
                    <>
                    <CheckLink to="/login">
                        <TopButton type="filled">VIEW HISTORY</TopButton>
                    </CheckLink>
                    </>
                )}
            </Wrapper>
        </Container>
    );
};



export default HistoryOrders;