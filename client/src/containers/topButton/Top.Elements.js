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
  padding: 5px;
  border-radius: 50%;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: rgba(110, 202, 220, 0.78);
    transform: scale(1.09);
    transition: all 0.3s ease-out;
  }
`;

export const TopIcon = styled(FaHandPointUp)`
  color: white;
  font-size: 1.5rem;
`;
