import styled from "styled-components";
import { FaTrash } from "react-icons/fa";

export const CartWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Img = styled.img`
  width: 70px;
  margin-right: 1rem;
  margin-top: 0.5rem;
  box-shadow: rgb(38 57 77 / 32%) 10px 13px 17px -10px;
`;

export const CartInfo = styled.div`
  margin-top: 2.5rem;
`;
export const Input = styled.input`
  width: 50px;
  padding: 0;
  margin: 0 0.5rem 1rem 0;
`;
export const CartTitle = styled.h2`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const TrashIcon = styled(FaTrash)`
  color: black;

  &:hover {
    color: red;
  }
`;
