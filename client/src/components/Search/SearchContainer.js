import React from "react";
import styled from "styled-components";
import { Searchbar, FilterContainer, Filter } from "./SearchElements";
import searchIcon from "../../assets/img/search.svg";
import { QUERY_CATEGORIES } from "../../utils/queries";


// width: 100%;
//     display: flex;
//     align-items: center;
//     padding: ${({ big }) => (big ? "10px 0px" : "40px 200px")};

const Container = styled.div`
  display: flex;
  align-items: center;
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
  const categories = [
    {
      name: "HTML"
    },
    {
      name: "CSS"
    },
    {
      name: "JavaScript"
    },
    {
      name: "MongoDB"
    },
    {
      name: "Bonus Content"
    }
  ]
  return (
    <div className="App">
      <Container>
        <div className="row">
          {/* <FilterContainer >
          
            {categories.map((category) => (

              <Filter >
                {category.name}
              </Filter>
            ))}

          </FilterContainer> */}
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
