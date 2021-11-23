import styled from "styled-components";
export const ProductsContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #fff;
  color: black;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 4rem;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 1;
  width: 300px;
  background-color: #f2f2f2;
  margin-bottom:2rem;
  color black;
  box-shadow: rgb(38 57 77 / 32%) 10px 13px 17px -10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
    color: #1c2237;
  }
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  padding: 5px;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  @media only screen and (max-width: 380px) {
    font-size: 1.5rem;
  }
`;

export const ProductsDesc = styled.h3`
  font-size: clamp(1rem, 1.5vw, 1rem);
  font-weight: normal;
  text-align: center;
  color: #d9d9d9;
  margin: 1rem;
  line-height: 24px;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  color: #071292;
`;

export const ProductInfo = styled.div`
display: flex;
flex-direction: column;
-webkit-box-align: center;
align-items: center;
padding: 2rem ;
text-align: center;
flex-grow: 1;
-webkit-justify-content: center;
align-items: center;
flex-wrap: wrap;
height: 282px;
justify-content: space-between;
}


`;

export const ProductDesc = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  border-radius: 8px;
  background: #4b59f7;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #071292;
    cursor: pointer;
  }
`;

export const MsgContainer = styled.div`
  height: 70vh;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;
