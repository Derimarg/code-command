import styled from "styled-components";
import { FaHandPointUp } from "react-icons/fa";

export const IconWrap = styled.button`
  visibility: hidden;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: #4b59f7;
  color: white;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  font-size: 25px;

  &:hover {
    background-color: #330080;
    transition: all ease-in-out 0.2s;
  }
`;

export const TopIcon = styled(FaHandPointUp)`
  color: white;
`;
