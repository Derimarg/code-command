import styled from "styled-components";
import { colors } from "./global";

export const Searchbar = styled.div`
  height: 48px;
  width: 500px;
  position: relative;
  margin: 0 24px;
  input {
    background-color: ${colors.bar};
    box-shadow: 1px 2px 2px 	#DCDCDC;
    height: 48px;
    padding: 0 64px;
    width: 700px;
    border-radius: ${(props) => (props.squared ? "0px" : "100px")};
    border: none;
    font-size: 14px;
    position: relative;
    outline: none;
    color: ${colors.black};
    &::placeholder {
      color: ${colors.gray};
    }

    @media screen and (max-width: 960px) {
      width: 400px;
    }
  }

  img {
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
    z-index: 9;
    width: 16px;
    height: 16px;

    @media screen and (max-width: 960px) {
      left: 64px;
    }
  }
`;
