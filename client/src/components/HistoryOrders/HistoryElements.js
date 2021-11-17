import styled from "styled-components";
import { Link} from "react-router-dom";
import { mobile, mobile2 } from "../../responsive";

export const Container = styled.div``;

export const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`;

export const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

export const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;

export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProductName = styled.span``;

export const ProductId = styled.span``;

export const ProductSize = styled.span``;