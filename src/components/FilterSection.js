import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filterContext";
import Button from "../styles/Button";

const FilterSection = () => {
  const {
    filteringGetValue,
    allProducts,
    categoryFilter,
    companyFilter,
    handlePriceChange,
    clearFilter,
  } = useFilterContext();
  const getUnique = (Products, property) => {
    let data = Products.map((currEle) => currEle[property]);
    data = ["all", ...new Set(data)];
    return data;
  };

  const uniqueCategory = getUnique(allProducts, "category");
  const uniqueCompany = getUnique(allProducts, "company");
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

      <div className="filter-category">
        <h3>Category</h3>
        {uniqueCategory.map((item) => (
          <button
            type="button"
            value={item}
            onClick={categoryFilter}
            name="category"
            key={`11+${item}`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="filter-company">
        <h3>Company</h3>
        <select onChange={companyFilter} name="company">
          <option value="all">All Companies</option>
          {uniqueCompany.map((item) => (
            <option key={`company-${item}`} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-price">
        <h3>Price Range</h3>
        <span>
          <input
            type="number"
            placeholder="Min Price"
            name="minPrice"
            onChange={handlePriceChange}
          />
          <input
            type="number"
            placeholder="Max Price"
            name="maxPrice"
            onChange={handlePriceChange}
          />
        </span>
      </div>

      <div className="filter-clear">
        <Button onClick={clearFilter}>Clear Filter</Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  * {
    max-width: 300px;
  }
  .filter-search {
    margin-top: 25px;
    padding: 0px;
  }

  .filter-category {
    display: flex;
    flex-direction: column;
  }

  .filter-category h3 {
    color: blue;
    margin: 5px;
    font-size: 20px;
    cursor: pointer;
  }

  .filter-category button {
    margin: 3px;
    font-size: 20px;
    cursor: pointer;
  }

  .filter-company h3 {
    color: blue;
    margin: 5px;
    font-size: 20px;
    cursor: pointer;
  }

  .filter-company select {
    margin: 10px;
    padding: 0.5rem;
    font-size: 1.5rem;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
    outline: none;
    cursor: pointer;
  }

  .filter-price {
    display: flex;
    flex-direction: column;
    max-width: 200px; /* Adjust the maximum width as needed */
  }

  .filter-price h3 {
    color: blue;
    margin: 5px;
    font-size: 20px;
    cursor: pointer;
  }

  .filter-price span {
    display: flex;
    gap: 0.5rem; /* Adjust the gap between inputs as needed */
  }

  .filter-price input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    outline: none;
  }

  .filter-clear {
    margin-top: 20px;
  }
`;

export default FilterSection;
