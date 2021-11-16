import styled from "styled-components";

export const HistoryContainer = styled.div`
  width: 85%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: calc(1rem * 0.5);
  margin-bottom: calc(1rem * 0.5);

  h2 {
    font-family: "Rubik", sans-serif;
    font-weight: 500;
    margin: 5px 0;
    line-height: 1.25;

    span {
      padding-left: 5px;
      font-weight: bold;
    }
  }
`;

export const ItemWrapper = styled.div`
  margin-top: calc(1rem);
  margin-bottom: calc(1rem);

  h3 {
    color: blue;
  }
`;

export const ItemInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ItemInfo = styled.div`
  width: 25%;
  text-align: center;
  padding-right: calc(1rem * 0.5);
  padding-left: calc(1rem * 0.5);
  padding-top: calc(1rem * 0.5);
  padding-bottom: calc(1rem * 0.5);

  p {
    font-size: 1.1rem;
    margin-top: 0;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Img = styled.img`
  max-width: 100%;
`;
