import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";

export const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ImgContainer = styled.div`
  font-size: 14px;
`;

export const Image = styled.img`
  width: 70px;
  margin-right: 1rem;
  background-color: black;
`;

export const CartBody = styled.div`
  position: fixed;
  top: 10%;
  right: 0%;
  min-width: 30%;
  max-width: 40%;
  max-height: 60%;
  overflow: auto;
  padding: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  border-bottom-left-radius: 0.5rem;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  opacity: 1;
  transition: all 0.5s ease;

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const CartHeaderWraper = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: 0.1rem;
  height: 60px;
  color: black;
  border-bottom: 1px solid #d9d9d9;
  ${Container}
`;

export const CartHeader = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;
export const CartHeaderItem = styled.div`
  border-bottom: 2px solid transparent;

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const CloseItem = styled.div`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  &:hover {
    color: #4b59f7;
  }
`;

export const CloseIcon = styled(FaTimes)`
  display: block;
  position: absolute;
  font-size: 1.5rem;
  cursor: pointer;
  color: black;

  @media screen and (max-width: 500px) {
    font-size: 1rem;
    margin-left: 3.5rem;
  }
`;

export const BtnLink = styled(Link)`
  text-align: center;

  &:hover {
    color: blue;
  }

  span {
    text-align: center;
    font-size: 1rem;
  }

  @media screen and (max-width: 960px) {
    font-size: 0.7rem;
  }
`;

export const BtnCheckout = styled.button`
  font-size: 1rem;
  text-decoration: none;
  padding: 0.2rem 1rem;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0 1px;
  background: #4b59f7;
`;
