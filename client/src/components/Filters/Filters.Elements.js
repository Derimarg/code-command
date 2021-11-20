import styled from "styled-components";

// background-color: #3399ff;teal

export const FilterContainer = styled.div`
  h2 {
    color: black;
    font-weight: bold;
    font-size: 2rem;
    margin: 0 0 2rem;
  }
`;

export const Button = styled.button`
  font-size: 1rem;
  text-decoration: none;
  padding: 0.25rem 1rem;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 5px 4px;
  background-color: teal;
  color: #fff;
  box-shadow: 2px 2px 2px 1px black;

  &:hover {
    opacity: 0.8;
    color: black;
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }
`;

export const ButtonClear = styled.button`
  font-size: 1rem;
  text-decoration: none;
  padding: 0.25rem 1rem;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0 4px;
  background-color: #fafafa;
  color: #fff;
  box-shadow: 2px 2px 2px 1px black;

  &:hover {
    opacity: 0.8;
    color: black;
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }
`;
