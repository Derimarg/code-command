import React from "react";
import styled from "styled-components";
import { Searchbar } from "./SearchElements";
import searchIcon from "../../assets/img/search.svg";

// width: 100%;
//     display: flex;
//     align-items: center;
//     padding: ${({ big }) => (big ? "10px 0px" : "40px 200px")};

const Container = styled.div`
  padding-right: 200px;
  @media screen and (max-width: 960px) {
    width: 100%;
    padding-right: 0px;
  }

  .row {
    border-radius: 4px;
    white-space: nowrap;
    padding: ${({ big }) => (big ? "12px 64px" : "0px 10px")};
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;

    @media screen and (max-width: 960px) {
      width: 100%;
    }
  }
`;

function SearchContainer() {
  return (
    <div className="App">
      <Container>
        <div className="row">
          <Searchbar>
            <img src={searchIcon} alt="searchIcon" />
            <input
              placeholder="Search for eg. react, node, etc..."
              type="text"
            />
          </Searchbar>
        </div>
      </Container>
    </div>
  );
}

export default SearchContainer;
