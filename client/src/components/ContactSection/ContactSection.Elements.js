import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }

  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #4b59f7;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

export const Container = styled.div`
  min-width: 500px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 900px) {
    min-width: 300px;
    width: 100vw;
  }

  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;

    span {
      text-decoration: none !important;
      color: #0099ff;
      cursor: pointer;
      padding-left: 0.5rem;
    }
  }
`;

export const ErrorMsg = styled.p`
  color: red;
`;

export const StyledTextarea = styled.textarea`
  width: 80%;
  max-width: 350px;
  min-width: 250px;
  border: none;
  margin: 0.5rem 0;
  background-color: #f5f5f5;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 1rem;
  padding-top: 1rem;
  transition: all 0.2s ease-in;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const StatusMsg = styled.div`
  height: 10px;
  width: 10px;
  background: #9d9d9d;
  border-radius: 10px;
  margin-left: 1rem;

  ${StyledTextarea}:focus + & {
    background: #ffa689;
  }
  ${StyledTextarea}:invalid + & {
    background: #70edb9;
  }
  ${StyledTextarea}:valid + & {
    background: #fe2f75;
  }
`;

// ${StyledTextarea}:invalid + & {
//   background: #fe2f75;
// }
// ${StyledTextarea}:valid + & {
//   background: #70edb9;
