import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filterContext";

const FilterSection = () => {
  const { filteringGetValue } = useFilterContext();
  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            onChange={filteringGetValue}
            placeholder="SEARCH"
          />
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .filter-search {
    margin-top: 25px;
    padding: 0px;
  }
`;

export default FilterSection;
