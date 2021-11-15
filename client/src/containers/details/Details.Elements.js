import styled from "styled-components";
import { css } from "styled-components";

export const ButtonDetail = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#4B59F7" : "#0467FB")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  margin: 5px;
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? "0.8" : "2")};
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    color: #fff;
    transform: translateY(-7px);
    background: #fff;
    transition: all 0.3s ease 0s;
    background-color: ${({ primary }) => (primary ? "#0467FB" : "#4B59F7")};
  }
`;
